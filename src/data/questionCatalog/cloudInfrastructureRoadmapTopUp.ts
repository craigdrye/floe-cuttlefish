import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]
const source = 'Floe cloudInfrastructureRoadmap top-up'

export const cloudInfrastructureRoadmapTopUpQuestions: Question[] = makeQuestionBank('Career Skills', [
  // Chapter 1: Cloud Building Blocks
  {
    id: 7311000,
    chapter: 'Cloud Building Blocks',
    title: 'Multi-region vs multi-AZ choice',
    prompt:
      'A team must keep a payments service running even if an entire cloud region suffers an outage. Which architecture actually meets that requirement?',
    correct: 'Run active capacity in two or more regions with data replicated between them',
    wrong: [
      miss(
        'Spread the service across three availability zones in one region',
        'Multi-AZ survives a single data-center failure but not the loss of the whole region; every AZ in a region can go down together in a regional outage.',
        'Ask which failure domain the requirement names. AZs are inside one region, so they all fall when the region falls.',
      ),
      miss(
        'Put the service behind the provider edge/CDN network',
        'Edge networks cache and route; they do not run the stateful payments logic, so a region loss still takes the actual service offline.',
        'Edge is for delivery, not for hosting stateful workloads. Look for an option that places real capacity in another region.',
      ),
      miss(
        'Keep one region but take more frequent backups',
        'Backups shorten data loss after recovery; they do nothing to keep the service available while the only region is down.',
        'Backups address data loss (RPO), not staying up during a regional outage. Match the answer to availability, not recovery.',
      ),
    ],
    lesson:
      'Regions, availability zones, and edge sites are different failure domains. Surviving a whole-region outage requires capacity and data in a second region; multi-AZ only survives a single data-center failure, and backups only limit data loss.',
    source,
    generated: true,
  },
  {
    id: 7311001,
    chapter: 'Cloud Building Blocks',
    title: 'Shared responsibility for patching',
    prompt:
      'On a fully managed serverless function platform, who is responsible for patching the underlying operating system and runtime?',
    correct: 'The cloud provider patches the OS and managed runtime; the team owns its function code, configuration, and dependencies',
    wrong: [
      miss(
        'The team must patch the operating system themselves on a schedule',
        'On a managed serverless platform there is no customer-accessible OS to patch; that layer is squarely the provider responsibility.',
        'Recheck where the abstraction boundary sits. Serverless hides the OS, so OS patching cannot be a customer task.',
      ),
      miss(
        'No one needs to patch anything because serverless has no vulnerabilities',
        'Serverless still runs your code and your libraries, which absolutely have vulnerabilities; the model shifts who patches what, it does not remove patching.',
        'Managed does not mean risk-free. Some patching just moves to the provider while your code and dependencies stay yours.',
      ),
      miss(
        'The provider is responsible for the team application dependencies too',
        'Application libraries you bundle are customer-controlled; the provider scope ends at the managed runtime, not your import list.',
        'Provider scope stops at the service plane. Anything you ship inside the function remains your responsibility.',
      ),
    ],
    lesson:
      'The shared responsibility model shifts with the service tier. The more managed the platform, the more the provider owns the lower layers (hardware, OS, runtime), but the customer always owns its own code, configuration, dependencies, and data.',
    source,
    generated: true,
  },

  // Chapter 2: IAM and Network Boundaries
  {
    id: 7311002,
    chapter: 'IAM and Network Boundaries',
    title: 'Private subnet outbound access',
    prompt:
      'Instances in a private subnet need to download software updates from the public internet, but must not be reachable from the internet inbound. What provides this?',
    correct: 'A NAT gateway in a public subnet, with the private subnet route table sending 0.0.0.0/0 to the NAT gateway',
    wrong: [
      miss(
        'Move the instances to a public subnet with an internet gateway',
        'A public subnet route to an internet gateway makes the instances directly reachable inbound, which is exactly the exposure the requirement forbids.',
        'You need outbound only. An internet gateway on a public subnet allows inbound too; look for the one-way egress path.',
      ),
      miss(
        'Attach a public IP address to each private instance',
        'A public IP makes each instance directly addressable from the internet, creating inbound exposure rather than safe outbound-only access.',
        'Public IPs invite inbound connections. The goal is egress without becoming reachable.',
      ),
      miss(
        'Open the security group to 0.0.0.0/0 on all ports',
        'Opening the security group widens inbound access dramatically and still does not give a private subnet a route to the internet for egress.',
        'Security group rules are not a route to the internet, and opening them inbound is the opposite of the requirement.',
      ),
    ],
    lesson:
      'A NAT gateway lets private-subnet instances initiate outbound connections to the internet while blocking unsolicited inbound traffic. The NAT gateway lives in a public subnet; the private subnet routes its default route to the NAT. An internet gateway, by contrast, allows two-way reachability.',
    source,
    generated: true,
  },
  {
    id: 7311003,
    chapter: 'IAM and Network Boundaries',
    title: 'Security group vs NACL',
    prompt:
      'A team wants a stateful, instance-level allow rule so that a response to an allowed outbound request is automatically permitted back in. Which control fits, versus a stateless subnet-level filter?',
    correct: 'A security group, which is stateful and applied at the instance/ENI level',
    wrong: [
      miss(
        'A network ACL, because it is stateful and instance-level',
        'A network ACL is stateless and operates at the subnet level, so return traffic is not automatically allowed and rules apply to the whole subnet, not one instance.',
        'You have the two controls swapped. The stateless, subnet-wide filter is the NACL, not the instance-level one.',
      ),
      miss(
        'A route table entry pointing return traffic back to the source',
        'Route tables decide where packets go, not whether they are allowed; they neither track connection state nor filter by port.',
        'Routing is about path, not permission. Statefulness and allow/deny live in firewall constructs, not the route table.',
      ),
      miss(
        'A DNS record that pins the response to the requesting instance',
        'DNS resolves names to addresses; it has no role in connection state or in permitting return packets through a firewall.',
        'DNS maps names to IPs. It cannot make a firewall remember an outbound connection.',
      ),
    ],
    lesson:
      'Security groups are stateful and attach to instances/ENIs, so allowed outbound traffic automatically permits the return. Network ACLs are stateless and attach to subnets, so you must allow both directions explicitly. Knowing which is which prevents both over-blocking and over-opening.',
    source,
    generated: true,
  },
  {
    id: 7311004,
    chapter: 'IAM and Network Boundaries',
    title: 'Long-lived keys vs assumed roles',
    prompt:
      'An application running on cloud compute authenticates to other services using a long-lived access key hardcoded in its config. What is the better pattern?',
    correct: 'Attach an IAM role to the workload so it receives short-lived, automatically rotated credentials',
    wrong: [
      miss(
        'Keep the long-lived key but store it in an environment variable instead of the config file',
        'Moving a static key from a file to an env var does not rotate it or limit its lifetime; a leaked env var is just as exploitable as a leaked file.',
        'The problem is the credential being long-lived and static, not where the same static key is written.',
      ),
      miss(
        'Rotate the long-lived key manually once a year',
        'Annual manual rotation leaves a powerful static credential valid for up to a year and depends on a person remembering; a leaked key has a long exploit window.',
        'Manual yearly rotation still means a static secret with a long blast-radius window. Prefer credentials that rotate automatically and expire fast.',
      ),
      miss(
        'Share one key across all applications to simplify management',
        'A shared key removes per-workload least privilege and means one leak compromises everything, expanding blast radius rather than reducing it.',
        'Sharing widens blast radius and erases least privilege. Each workload should get its own scoped, short-lived identity.',
      ),
    ],
    lesson:
      'Workload identities (IAM roles attached to compute) deliver short-lived, automatically rotated credentials, so there is no static secret to leak and the blast radius of any compromise is small and time-bound. Hardcoded long-lived keys are a recurring source of breaches.',
    source,
    generated: true,
  },

  // Chapter 3: Deployment and Change Safety
  {
    id: 7311005,
    chapter: 'Deployment and Change Safety',
    title: 'Canary vs blue-green',
    prompt:
      'A team wants to expose a risky release to 5% of live traffic first, watch error rates, and only then ramp to 100%. Which deployment strategy is this?',
    correct: 'Canary deployment',
    wrong: [
      miss(
        'Blue-green deployment',
        'Blue-green flips all traffic from the old environment to the new one at once (with a fast switch back); it does not natively serve a small percentage to gather signal first.',
        'Blue-green is an all-at-once cutover with instant rollback, not a gradual percentage ramp. The percentage ramp has a different name.',
      ),
      miss(
        'Big-bang deployment',
        'A big-bang deployment ships everything to everyone simultaneously with no progressive exposure, which is the opposite of testing on a small slice first.',
        'Big-bang gives no early signal from a small slice. Look for the strategy whose whole point is gradual exposure.',
      ),
      miss(
        'Rollback deployment',
        'Rollback is the recovery action you take after a bad release; it is not a strategy for progressively exposing a new release.',
        'Rollback is what you do when a release fails, not how you release gradually in the first place.',
      ),
    ],
    lesson:
      'A canary deployment routes a small fraction of live traffic to the new version, lets you observe golden signals, and ramps up only if it stays healthy. Blue-green keeps two full environments and switches all traffic at once, trading gradual signal for instant rollback.',
    source,
    generated: true,
  },
  {
    id: 7311006,
    chapter: 'Deployment and Change Safety',
    title: 'Backward-compatible schema migration',
    prompt:
      'A service needs to rename a database column that the running application still reads. What is the safe migration sequence?',
    correct: 'Add the new column, write to both, backfill, switch reads to the new column, then drop the old one in a later release (expand/contract)',
    wrong: [
      miss(
        'Rename the column in a single migration and deploy the new code at the same time',
        'An atomic rename breaks any running instance still reading the old name during the rollout, and there is no clean rollback once data is renamed in place.',
        'A single in-place rename has a window where old code meets a missing column. Spread the change into compatible steps.',
      ),
      miss(
        'Drop the old column first, then add the new one and deploy the code',
        'Dropping first immediately breaks the still-running application that reads that column and risks irreversible data loss before the new path exists.',
        'You cannot remove what live code still depends on. Add the new shape before retiring the old one.',
      ),
      miss(
        'Put the rename behind a feature flag but keep a single column',
        'A flag toggles code paths, but if only one renamed column exists, the old code path still has nothing to read; the flag does not solve the schema-compatibility gap.',
        'A flag controls behavior, not schema state. Both old and new columns must coexist during the transition.',
      ),
    ],
    lesson:
      'The expand/contract (parallel-change) pattern keeps every deployed version working: add the new structure, dual-write and backfill, migrate reads, then remove the old structure in a separate later release. This preserves backward compatibility and a clean rollback at each step.',
    source,
    generated: true,
  },
  {
    id: 7311007,
    chapter: 'Deployment and Change Safety',
    title: 'Rollback when state has changed',
    prompt:
      'A release ran an irreversible data migration and is now causing errors. Why might "just roll back to the previous version" be unsafe?',
    correct: 'The old code may be incompatible with the already-migrated data, so a roll-forward fix is often safer than a code rollback',
    wrong: [
      miss(
        'Rollbacks are always instant and safe, so there is no real concern',
        'Rollbacks are only safe when the previous code can still operate the current state; an irreversible data change breaks that assumption.',
        'Rollback safety depends on whether old code can read new data. Once state has moved irreversibly, that assumption fails.',
      ),
      miss(
        'The previous version will automatically reverse the data migration',
        'Deploying old code does not undo a data migration; the data stays migrated, and the old code now meets a shape it does not understand.',
        'Shipping old code does not run a reverse migration. The data does not move back on its own.',
      ),
      miss(
        'Errors after a release are never caused by data and always by code',
        'Errors frequently come from the interaction between code and data state; ignoring the migration misdiagnoses the failure.',
        'Code and data are coupled at release time. A migration that changed state is a prime suspect, not an irrelevance.',
      ),
    ],
    lesson:
      'Rollback assumes the prior version can run the current data. When a release includes an irreversible or forward-only migration, reverting the code can leave it facing data it cannot handle. In those cases a roll-forward (fix and deploy) is usually safer, which is why migrations and code should be designed to be reversible or compatible across versions.',
    source,
    generated: true,
  },

  // Chapter 4: Containers and Orchestration
  {
    id: 7311008,
    chapter: 'Containers and Orchestration',
    title: 'Liveness vs readiness probe purpose',
    prompt:
      'In Kubernetes, a container is running but temporarily cannot serve requests because it is still warming a cache. Which probe should report it not-ready, and what is the difference from a liveness probe?',
    correct: 'The readiness probe should fail so traffic is withheld; a failing liveness probe would instead restart the container',
    wrong: [
      miss(
        'The liveness probe should fail so traffic is withheld without a restart',
        'A failing liveness probe causes the kubelet to kill and restart the container, which would interrupt the warm-up rather than simply pausing traffic.',
        'Liveness failure triggers a restart, not a quiet traffic pause. The probe that just removes traffic is the other one.',
      ),
      miss(
        'Either probe works identically; the choice does not matter',
        'They have distinct effects: readiness removes the pod from service endpoints, while liveness restarts the container. Choosing wrong causes restart loops during normal warm-up.',
        'These probes do different things. One withholds traffic; the other restarts. The distinction is the whole point.',
      ),
      miss(
        'A startup probe should fail repeatedly to keep traffic away during warm-up',
        'A startup probe gates the other probes during initial boot and, if it keeps failing, leads to a restart; it is not the mechanism for ongoing readiness during a cache warm.',
        'Startup probes guard slow boot and lead to restarts on failure. Ongoing "not ready yet" is signaled by a different probe.',
      ),
    ],
    lesson:
      'A readiness probe controls whether a pod receives traffic: when it fails, the pod is removed from Service endpoints but is not restarted. A liveness probe controls whether the container is healthy at all: when it fails, the kubelet restarts it. Using liveness where you needed readiness causes needless restart loops.',
    source,
    generated: true,
  },
  {
    id: 7311009,
    chapter: 'Containers and Orchestration',
    title: 'Liveness probe restart loop',
    prompt:
      'A pod with a heavy startup that takes 90 seconds keeps getting killed and restarted before it finishes initializing. The liveness probe starts checking after 10 seconds. What is the right fix?',
    correct: 'Add a startup probe (or increase the liveness initial delay) so the slow boot is not treated as a failure',
    wrong: [
      miss(
        'Remove the liveness probe entirely so the container is never restarted',
        'Removing liveness gives up the ability to recover a genuinely deadlocked container later; the problem is timing, not the existence of the probe.',
        'You still want crash recovery once it is up. Fix the boot-timing window rather than deleting the safety net.',
      ),
      miss(
        'Lower the liveness probe interval so it checks more often during boot',
        'Checking more often during a slow boot makes failures arrive sooner, accelerating the restart loop rather than preventing it.',
        'More frequent checks during boot make it worse, not better. The boot needs more grace, not less.',
      ),
      miss(
        'Add more replicas so at least one is always healthy',
        'Every replica has the same 90-second boot and the same premature liveness check, so they all enter the same restart loop; scaling does not fix the timing bug.',
        'Cloning the same misconfiguration multiplies the problem. Each new pod hits the identical premature check.',
      ),
    ],
    lesson:
      'A liveness probe that begins before a slow application has finished initializing will kill it mid-boot, creating a restart loop. The fix is a startup probe (which gates liveness/readiness until boot completes) or a longer initialDelaySeconds, not removing the probe or adding replicas.',
    source,
    generated: true,
  },
  {
    id: 7311010,
    chapter: 'Containers and Orchestration',
    title: 'Resource requests vs limits',
    prompt:
      'A container sets a high memory limit but no memory request. What problem can this cause in a Kubernetes cluster?',
    correct: 'The scheduler may pack the pod onto a node without reserving memory for it, leading to contention and OOM kills under load',
    wrong: [
      miss(
        'Nothing, because the limit alone guarantees the memory is reserved on the node',
        'The limit caps maximum usage; it is the request that the scheduler uses to reserve capacity and decide placement. A missing request means no reservation.',
        'Limits cap usage; requests drive scheduling and reservation. They are not interchangeable.',
      ),
      miss(
        'The pod will be rejected at creation because a limit requires a matching request',
        'Kubernetes allows a limit without a request (it often defaults the request to the limit or zero); the pod is not rejected, it is just scheduled on weaker assumptions.',
        'A limit without a request is accepted, not rejected. The risk is placement, not admission.',
      ),
      miss(
        'The container will automatically scale horizontally when it nears the limit',
        'Hitting a memory limit triggers an OOM kill of that container, not horizontal scaling; autoscaling is a separate mechanism that does not key off a single pod nearing its limit.',
        'Nearing a memory limit gets you killed, not cloned. Autoscaling is configured separately and on different signals.',
      ),
    ],
    lesson:
      'Requests tell the scheduler how much capacity to reserve and where a pod can fit; limits cap how much it may use. A high limit with no request lets the scheduler overcommit a node, so under load pods contend and the kernel OOM-kills them. Set realistic requests so placement reflects real needs.',
    source,
    generated: true,
  },
  {
    id: 7311011,
    chapter: 'Containers and Orchestration',
    title: 'Image tag immutability',
    prompt:
      'A deployment references a container image by the tag :latest. Why is this risky for reproducible deployments?',
    correct: 'The :latest tag can point to different image contents over time, so two deploys of the "same" tag may run different code',
    wrong: [
      miss(
        'The :latest tag is slower to pull than a versioned tag',
        'Pull speed depends on layer caching and size, not on the tag name; :latest is not inherently slower. The real issue is that the tag is mutable.',
        'This is not about speed. Think about whether the same tag always means the same bytes.',
      ),
      miss(
        'The :latest tag cannot be used with rolling updates',
        'Rolling updates work with any tag; :latest is technically usable. The hazard is that it does not pin a specific, immutable image.',
        'Rolling updates accept it fine. The danger is what the tag resolves to, not whether it works.',
      ),
      miss(
        'The :latest tag forces the cluster to rebuild the image on every node',
        'Nodes pull built images from a registry; they do not rebuild them. The concern is the tag pointing at changing content, not local rebuilds.',
        'Nodes pull, they do not rebuild. The problem is the tag drifting to new contents.',
      ),
    ],
    lesson:
      'Tags like :latest are mutable pointers, so the same reference can resolve to different image digests over time. That breaks reproducibility and rollbacks. Deploy by immutable digest or a unique, never-reused version tag so a given deployment always runs exactly the same bytes.',
    source,
    generated: true,
  },
  {
    id: 7311012,
    chapter: 'Containers and Orchestration',
    title: 'Horizontal vs vertical scaling under spiky load',
    prompt:
      'A stateless web service sees sharp, short traffic spikes during product launches. Which scaling approach best matches this pattern?',
    correct: 'Horizontal autoscaling that adds and removes replicas based on a load signal',
    wrong: [
      miss(
        'Permanently provision the largest instance size to handle any spike',
        'A permanently oversized instance pays for peak capacity 24/7 even though spikes are short and rare, which is expensive and still a single failure point.',
        'Sizing for the peak all day wastes money between spikes and concentrates risk in one box.',
      ),
      miss(
        'Vertical autoscaling that resizes the single instance during the spike',
        'Vertical resizing usually requires a restart and is bounded by the largest instance type; for short, sharp spikes on a stateless service, adding replicas responds faster and has a higher ceiling.',
        'Resizing one box is slow and capped. A stateless service can just add more copies.',
      ),
      miss(
        'Disable autoscaling and ask customers to retry during launches',
        'Pushing the failure onto customers during the highest-value moments degrades exactly the launches the business cares most about; it is an outage with extra steps.',
        'Telling users to retry at peak is not a scaling strategy; it is accepting an outage when it matters most.',
      ),
    ],
    lesson:
      'Stateless services scale out cleanly: horizontal autoscaling adds replicas when a load signal rises and removes them when it falls, matching cost to short spikes and avoiding a single oversized failure point. Vertical scaling suits workloads that cannot be parallelized but is slower and capped by instance size.',
    source,
    generated: true,
  },

  // Chapter 5: Observability and Reliability
  {
    id: 7311013,
    chapter: 'Observability and Reliability',
    title: 'The four golden signals',
    prompt:
      'Per Google SRE, which set names the four golden signals for monitoring a user-facing system?',
    correct: 'Latency, traffic, errors, and saturation',
    wrong: [
      miss(
        'CPU, memory, disk, and network',
        'Those are host resource utilization metrics; they are useful inputs but are not the golden signals, which are framed around user-facing service health.',
        'Those are machine resource counters. The golden signals are defined from the service/user perspective.',
      ),
      miss(
        'Availability, durability, scalability, and elasticity',
        'These are architecture qualities and SLA-style properties, not the four monitoring signals SRE prescribes for detecting live problems.',
        'These are system properties, not the four real-time monitoring signals. Recall the SRE quartet.',
      ),
      miss(
        'Uptime, cost, deploys, and tickets',
        'These are operational and business metrics; none of them is one of the four golden signals for detecting user-impacting issues in real time.',
        'Mixing in cost and tickets misses the point. The golden signals are tightly about live service behavior.',
      ),
    ],
    lesson:
      'The four golden signals are latency (how long requests take), traffic (how much demand), errors (rate of failed requests, including wrong-content and SLO-violating ones), and saturation (how full the system is). Monitoring these four covers most user-facing failures with minimal instrumentation.',
    source,
    generated: true,
  },
  {
    id: 7311014,
    chapter: 'Observability and Reliability',
    title: 'Error budget burn rate',
    prompt:
      'A service has a 99.9% availability SLO over 28 days. Alerts show the error budget is being consumed at a 10x burn rate. What does that mean and imply?',
    correct: 'At 10x, the entire 28-day budget would be exhausted in about 2.8 days, so this is a fast burn warranting urgent escalation',
    wrong: [
      miss(
        'A 10x burn rate means availability has improved tenfold and no action is needed',
        'Burn rate measures how fast you are consuming the allowed failure budget; a high burn means you are failing faster, not that reliability improved.',
        'Burn rate counts failures against budget. Higher is worse, not better.',
      ),
      miss(
        'A 10x burn rate is normal and only matters if it reaches 100x',
        'Any burn rate above 1x consumes the budget faster than the SLO allows; 10x exhausts a 28-day budget in under three days and is a clear escalation trigger.',
        'Anything above 1x is overspending the budget. 10x is already a fast-burn page, not a wait-for-100x situation.',
      ),
      miss(
        'A 10x burn rate refers to spending ten times the cloud budget this month',
        'Error budget burn rate is about the reliability (failure) budget derived from the SLO, not the financial cloud bill.',
        'This is the reliability budget, not the dollar bill. Burn rate is failures-versus-SLO.',
      ),
    ],
    lesson:
      'An error budget is the allowed failure derived from the SLO (for 99.9% over 28 days, about 40 minutes of downtime-equivalent). Burn rate is how fast you are spending it: 1x exactly matches the SLO pace, while 10x exhausts the whole window in roughly a tenth of the time, signaling a fast-burn alert and escalation.',
    source,
    generated: true,
  },
  {
    id: 7311015,
    chapter: 'Observability and Reliability',
    title: 'Alert on symptoms, not causes',
    prompt:
      'On-call engineers are drowning in pages for individual high-CPU events that rarely affect users. What alerting change reduces fatigue while protecting users?',
    correct: 'Alert on user-facing symptoms tied to SLOs (latency, error rate) rather than on every internal resource cause',
    wrong: [
      miss(
        'Add more cause-based alerts (disk, memory, threads) so nothing is missed',
        'Layering more cause alerts increases page volume and fatigue without improving the signal about whether users are actually affected.',
        'More cause alerts worsen fatigue. The fix is alerting on impact, not adding more internal triggers.',
      ),
      miss(
        'Raise the CPU threshold so the same alert fires less often',
        'Tuning one threshold may cut some noise but still pages on a cause that often does not affect users, and may now miss real saturation; it does not realign alerts to user impact.',
        'Nudging a threshold treats the symptom of the symptom. You still page on a non-user-impacting cause.',
      ),
      miss(
        'Silence all alerts during business hours to give the team peace',
        'Blanket silencing hides genuine user-impacting incidents exactly when traffic is highest; quiet is not the same as healthy.',
        'Silence is not safety. You would miss real outages at peak. Realign alerts to user impact instead.',
      ),
    ],
    lesson:
      'High-quality alerting pages on symptoms that map to user impact and the SLO (rising latency or error rate), not on every internal cause. Cause-based alerts that rarely affect users create alert fatigue and rising MTTA. Keep resource metrics for diagnosis, but page on what users feel.',
    source,
    generated: true,
  },

  // Chapter 6: Cost and Capacity Tradeoffs
  {
    id: 7311016,
    chapter: 'Cost and Capacity Tradeoffs',
    title: 'Spot instances and interruption',
    prompt:
      'A team considers running a customer-facing, stateful checkout service on spot instances to save up to ~90%. Why is this usually the wrong fit?',
    correct: 'Spot capacity can be reclaimed with about two minutes notice, so an interruption-intolerant service risks abrupt termination',
    wrong: [
      miss(
        'Spot instances are slower per unit of compute than on-demand',
        'Spot and on-demand instances of the same type perform identically; the difference is interruptibility and price, not speed.',
        'Spot is the same hardware, just reclaimable. Performance is not the issue here.',
      ),
      miss(
        'Spot instances cannot run stateful workloads at all under any design',
        'Spot can run some stateful workloads with checkpointing and graceful drain, but a checkout path that cannot tolerate sudden loss is a poor match regardless of design.',
        'Spot is not categorically barred from state; the real problem is this service cannot absorb sudden reclaim.',
      ),
      miss(
        'Spot instances require a three-year commitment like reserved instances',
        'Spot has no long-term commitment; it is on-demand-style capacity at a discount with the interruption tradeoff. The commitment model is reserved instances/savings plans.',
        'Spot has no commitment at all. You are confusing it with reserved instances and savings plans.',
      ),
    ],
    lesson:
      'Spot uses spare capacity at a steep discount but can be reclaimed on roughly two minutes notice. It suits fault-tolerant, interruptible work (batch, CI, stateless scale-out with drain). Customer-facing, interruption-intolerant services belong on on-demand for the baseline, with reserved instances or savings plans covering steady usage.',
    source,
    generated: true,
  },
  {
    id: 7311017,
    chapter: 'Cost and Capacity Tradeoffs',
    title: 'Savings plan vs reserved instance flexibility',
    prompt:
      'A team expects steady compute spend but anticipates shifting between instance families and regions over the next year. Which commitment maximizes discount while preserving that flexibility?',
    correct: 'A Compute Savings Plan, which applies the discount across instance families, sizes, and regions for a dollars-per-hour commitment',
    wrong: [
      miss(
        'A Standard Reserved Instance for a specific family, size, and region',
        'A standard RI gives the deepest discount but locks you to a specific instance family, size, and region, which conflicts with the planned flexibility.',
        'Standard RIs trade flexibility for the biggest discount. The team explicitly needs to move around.',
      ),
      miss(
        'On-demand only, to keep maximum flexibility',
        'On-demand is maximally flexible but the most expensive; for steady, predictable spend it leaves a large discount unclaimed.',
        'On-demand is flexible but costly. Steady baseline spend should capture a commitment discount.',
      ),
      miss(
        'Spot instances, because they are the cheapest option overall',
        'Spot is cheapest per hour but can be interrupted, making it unsuitable as the commitment vehicle for steady, reliable baseline compute.',
        'Spot is cheapest but interruptible, so it is not a baseline-coverage commitment. Match commitment to steady demand.',
      ),
    ],
    lesson:
      'A Compute Savings Plan commits you to a dollars-per-hour spend and applies the discount across instance families, sizes, regions, and even Fargate/Lambda. Reserved Instances offer deeper discounts but lock you to specific attributes. When usage is steady but its shape will move, savings plans capture discount without the lock-in.',
    source,
    generated: true,
  },
  {
    id: 7311018,
    chapter: 'Cost and Capacity Tradeoffs',
    title: 'Storage tiering and lifecycle',
    prompt:
      'Logs are written daily but almost never read after 30 days, yet they sit in hot/standard storage for years. What is the most cost-effective fix?',
    correct: 'Apply a lifecycle policy that transitions older objects to colder, cheaper storage tiers (and eventually archive or delete)',
    wrong: [
      miss(
        'Delete all logs after 30 days to stop paying for storage',
        'Blanket deletion may breach retention, compliance, or audit requirements; the goal is to pay less for rarely-read data, not to discard data you may be obligated to keep.',
        'Deleting may violate retention rules. Move cold data to cheaper tiers rather than destroying it outright.',
      ),
      miss(
        'Compress the logs in place but keep them all in hot storage',
        'Compression reduces size somewhat but still pays the hot-tier per-GB rate; tiering rarely-accessed data to a colder class typically saves far more.',
        'Compression trims size but keeps the expensive tier. The bigger lever is moving cold data to cheaper storage.',
      ),
      miss(
        'Move everything to the coldest archive tier immediately on write',
        'Archive tiers charge high retrieval latency and fees; data still actively read in the first 30 days would suffer slow, costly access. Tier based on access pattern, not all-at-once.',
        'Archiving day-old, still-read data makes retrieval slow and costly. Transition by age and access pattern.',
      ),
    ],
    lesson:
      'Storage tiers trade access speed and retrieval cost for lower per-GB price. A lifecycle policy automatically transitions objects from hot to cool to archive as they age past their active-read window, and can expire them when retention allows. This matches cost to access pattern without manual housekeeping.',
    source,
    generated: true,
  },

  // Chapter 7: Data Protection and Disaster Recovery
  {
    id: 7311019,
    chapter: 'Data Protection and Disaster Recovery',
    title: 'RPO vs RTO',
    prompt:
      'A business states: "We can lose at most 15 minutes of data, and we must be back online within 2 hours." Which target is which?',
    correct: 'The 15 minutes is the RPO (data loss tolerance); the 2 hours is the RTO (time to restore service)',
    wrong: [
      miss(
        'The 15 minutes is the RTO and the 2 hours is the RPO',
        'This swaps them: RPO measures backward to the last good data (how much you can lose), and RTO measures forward to service restoration (how long you can be down).',
        'You have them reversed. Data-loss tolerance is RPO; time-to-restore is RTO.',
      ),
      miss(
        'Both numbers are RTOs measured from two different events',
        'Only the time-to-restore figure is an RTO; the data-loss tolerance is a distinct objective (RPO) about how recent your recoverable data must be.',
        'Two different concepts are in play. One is about data loss, the other about downtime.',
      ),
      miss(
        'Both numbers describe the backup frequency only',
        'Backup frequency influences whether you can meet the RPO, but the two stated numbers are the objectives (data loss and downtime), not the schedule itself.',
        'These are objectives, not a schedule. Backup frequency is how you meet RPO, not the definition.',
      ),
    ],
    lesson:
      'RPO (recovery point objective) is the maximum acceptable data loss, measured backward to the last clean recoverable state, so it drives backup/replication frequency. RTO (recovery time objective) is the maximum acceptable downtime, measured forward to restoration, so it drives recovery architecture. They are independent and set from business impact.',
    source,
    generated: true,
  },
  {
    id: 7311020,
    chapter: 'Data Protection and Disaster Recovery',
    title: 'Replication is not a backup',
    prompt:
      'A team says "we have synchronous replication to a second region, so we do not need backups." Why is this reasoning flawed?',
    correct: 'Replication faithfully copies bad writes too, so an accidental deletion, corruption, or ransomware encryption is propagated to the replica instantly',
    wrong: [
      miss(
        'Replication is flawed only because the second region might be slower',
        'Latency to the replica is a performance concern, not the core gap; the real issue is that replication copies logical errors as faithfully as it copies good data.',
        'Speed is not the hole here. Think about what replication does when the source data goes bad.',
      ),
      miss(
        'Replication already keeps point-in-time history, so backups would be redundant',
        'Standard replication mirrors the current state, not a retained history of past points in time; without versioned backups there is no clean older copy to restore.',
        'Replication mirrors now, not a timeline. A bad change overwrites the replica too, leaving nothing to roll back to.',
      ),
      miss(
        'Replication protects against deletion because the replica is read-only',
        'A read-only replica still receives and applies the deletion from its primary; read-only blocks client writes, not replicated changes from the source.',
        'Read-only stops outside writes, not the replicated delete coming from the primary itself.',
      ),
    ],
    lesson:
      'Replication protects against hardware/site failure by keeping a live copy of the current state, but it dutifully propagates logical disasters: deletes, corruption, and ransomware all reach the replica. Backups (ideally versioned, immutable, and off-site per the 3-2-1 rule) provide a recoverable point in time that replication cannot.',
    source,
    generated: true,
  },
  {
    id: 7311021,
    chapter: 'Data Protection and Disaster Recovery',
    title: 'The 3-2-1 backup rule',
    prompt:
      'What does the classic 3-2-1 backup rule prescribe?',
    correct: 'Keep three copies of the data, on two different media types, with one copy stored off-site',
    wrong: [
      miss(
        'Keep three copies, all on the same storage system, refreshed every two-to-one days',
        'Putting every copy on one system defeats the rule; if that system fails or is compromised, all three copies are lost together.',
        'Three copies on one system share one fate. The rule deliberately separates media and location.',
      ),
      miss(
        'Take a backup every three hours, retain it for two days, and keep one in production',
        'The numbers in 3-2-1 are not a schedule; they describe how many copies, how many media types, and how many off-site, not backup frequency or retention.',
        'These digits are not a timetable. They count copies, media types, and off-site location.',
      ),
      miss(
        'Encrypt three times, with two keys, held by one administrator',
        'The rule is about copy redundancy and location diversity, not about layering encryption or key custody.',
        'This is about copies and where they live, not encryption layers or key holders.',
      ),
    ],
    lesson:
      'The 3-2-1 rule: three copies of your data, on two different media types, with at least one copy off-site. It survives single-device, single-media, and single-site failures. Modern guidance extends it to 3-2-1-1-0: add one immutable/air-gapped copy and verify zero restore errors through testing.',
    source,
    generated: true,
  },
  {
    id: 7311022,
    chapter: 'Data Protection and Disaster Recovery',
    title: 'Leaked secret response',
    prompt:
      'A long-lived API secret was accidentally committed to a public git repository and then deleted in a follow-up commit. What is the correct response?',
    correct: 'Treat the secret as compromised: rotate/revoke it immediately, then investigate usage, because git history and clones still expose the old value',
    wrong: [
      miss(
        'No action needed because the follow-up commit removed the secret from the latest code',
        'Deleting in a later commit leaves the secret in git history, in forks, and in anyone clone or cache; the value is exposed regardless of the current HEAD.',
        'Removing it from HEAD does not erase history or clones. Anyone who pulled has the value.',
      ),
      miss(
        'Force-push to rewrite history and consider the secret safe again',
        'Even a perfect history rewrite cannot recall clones, forks, or caches that already captured the value; the only safe assumption is that it leaked.',
        'You cannot un-leak a published secret by rewriting history. Assume it is out and rotate it.',
      ),
      miss(
        'Add the file to .gitignore so it will not be committed next time',
        'Ignoring the file prevents future commits but does nothing about the already-exposed secret, which must be rotated now.',
        '.gitignore helps the future, not the present leak. The exposed credential still works and must be revoked.',
      ),
    ],
    lesson:
      'Once a secret reaches a remote repository it must be assumed compromised: git history, forks, clones, and automated scanners may already hold it. The required action is to rotate/revoke the credential immediately and review for misuse. Removing it from the latest commit or rewriting history does not recall copies that already exist.',
    source,
    generated: true,
  },

  // Chapter 8: Incident Response and On-Call
  {
    id: 7311023,
    chapter: 'Incident Response and On-Call',
    title: 'MTTA vs MTTR',
    prompt:
      'An on-call review shows mean time to acknowledge (MTTA) is climbing steadily while mean time to resolve (MTTR) is flat. What does the rising MTTA most likely indicate?',
    correct: 'Alert fatigue or under-staffed on-call: engineers are taking longer to even start responding to alerts',
    wrong: [
      miss(
        'The fixes themselves are getting harder, since MTTA measures repair difficulty',
        'Repair difficulty would show up in MTTR (time to resolve), not MTTA; MTTA measures the gap between an alert firing and someone beginning to work it.',
        'MTTA is about how fast someone picks it up, not how hard the fix is. That second part is MTTR.',
      ),
      miss(
        'Systems are failing more often, since MTTA counts the number of incidents',
        'Incident frequency is a count, not MTTA; MTTA is an average delay to acknowledgment and rises even if the number of incidents is unchanged.',
        'MTTA is a timing average, not a count of incidents. A rising delay points at response, not frequency.',
      ),
      miss(
        'Detection is slow, since MTTA measures time from failure to detection',
        'Time from failure to detection is MTTD, not MTTA; MTTA starts when the alert fires and ends when an engineer acknowledges it.',
        'Failure-to-detection is MTTD. MTTA starts at the alert and ends at human acknowledgment.',
      ),
    ],
    lesson:
      'MTTD measures detection, MTTA measures the delay from alert to acknowledgment, and MTTR measures time to resolve. A rising MTTA with steady MTTR is a classic early warning of alert fatigue or thin on-call coverage: engineers are responding more slowly, not fixing things more slowly.',
    source,
    generated: true,
  },
  {
    id: 7311024,
    chapter: 'Incident Response and On-Call',
    title: 'Blameless postmortem purpose',
    prompt:
      'After a SEV-1 outage, a leader wants the postmortem to name which engineer ran the bad command so they can be reprimanded. Why does mature incident practice reject this framing?',
    correct: 'Blameless postmortems target the systemic gaps (missing guardrails, unclear process) so people report honestly and the same failure is engineered out',
    wrong: [
      miss(
        'Because the engineer is never actually at fault in any outage',
        'Blamelessness is not a claim that no human made a mistake; it is a deliberate choice to focus on why the system allowed the mistake to cause harm.',
        'It is not that humans never err. It is that punishing them hides the systemic gap that let the error land.',
      ),
      miss(
        'Because postmortems are optional and should be skipped for minor incidents',
        'A SEV-1 warrants a postmortem precisely because it is severe; the issue is the blame framing, not whether to hold the review.',
        'A SEV-1 absolutely gets a postmortem. The objection is to blaming a person, not to doing the review.',
      ),
      miss(
        'Because naming the engineer would violate data-protection law',
        'The reason is operational, not legal: blame suppresses honest detail and prevents systemic fixes; it is not primarily a privacy compliance matter.',
        'This is about learning, not legality. Blame makes people sanitize the truth, so root causes stay hidden.',
      ),
    ],
    lesson:
      'Blameless postmortems assume competent people acting reasonably with the information they had, and ask why the system permitted the failure to cause harm. Blame makes people give sanitized accounts, which buries the real root cause. The output should be systemic action items (guardrails, process, automation) with owners and deadlines.',
    source,
    generated: true,
  },
  {
    id: 7311025,
    chapter: 'Incident Response and On-Call',
    title: 'Severity assignment',
    prompt:
      'Checkout is completely down for all customers worldwide and revenue has stopped. How should this incident be classified and handled?',
    correct: 'SEV-1: declare the highest severity, page the incident commander, and target resolution within the tightest SLA',
    wrong: [
      miss(
        'SEV-3, because no data was lost and it can wait for business hours',
        'Total revenue-stopping outage for all customers is maximum business impact; SEV-3 is for low-impact issues that can wait, which badly understates this.',
        'Full outage stopping revenue is top severity. SEV-3 is for minor issues, not a global checkout failure.',
      ),
      miss(
        'No severity needed; just file a normal ticket for the next sprint',
        'A normal backlog ticket has no urgency, no commander, and no escalation; a global outage demands immediate, coordinated response, not sprint planning.',
        'A backlog ticket has no urgency or owner. A worldwide outage needs an incident declared now.',
      ),
      miss(
        'SEV-1 in name, but resolve it asynchronously over the next 24 hours',
        'Declaring SEV-1 but treating it like a day-long task contradicts the severity; SEV-1 carries the tightest resolution target and active, coordinated response.',
        'SEV-1 means the tightest SLA and active response, not a leisurely 24-hour fix.',
      ),
    ],
    lesson:
      'Severity reflects business and user impact. A total, revenue-stopping, all-customer outage is SEV-1: declare immediately, assign an incident commander, escalate, communicate to stakeholders, and work it under the tightest resolution target. High-performing teams aim to resolve SEV-1s in under an hour.',
    source,
    generated: true,
  },
  {
    id: 7311026,
    chapter: 'Incident Response and On-Call',
    title: 'Action items after resolution',
    prompt:
      'An incident is mitigated and service is restored. The team is tired and wants to close it out and move on. What should still happen?',
    correct: 'Capture follow-up action items with named owners and due dates so the systemic cause is fixed, not just the symptom',
    wrong: [
      miss(
        'Close the incident immediately; restoring service is the entire goal',
        'Restoring service stops the bleeding but leaves the underlying cause in place, so the same incident is likely to recur; mitigation is not the same as prevention.',
        'Mitigation ends the outage; it does not prevent the next one. The root cause still needs owned follow-up.',
      ),
      miss(
        'Write a postmortem but leave the action items unassigned for now',
        'Unassigned action items rarely get done; without a named owner and a date, the prevention work quietly evaporates and the incident repeats.',
        'Unowned, undated action items do not happen. Assign each fix to a person with a deadline.',
      ),
      miss(
        'Add a calendar reminder for one engineer to "look into it sometime"',
        'Person-dependent, vague reminders fail at handoffs and vacations; prevention needs concrete, tracked, owned items, not a soft note to a single individual.',
        'A vague personal reminder is fragile. Prevention must be tracked, dated, and owned in the system of record.',
      ),
    ],
    lesson:
      'Restoring service mitigates the incident; it does not prevent recurrence. A complete response produces a postmortem and a set of concrete action items, each with a named owner and a due date, tracked in the system of record. Prevention that depends on one person remembering is not prevention.',
    source,
    generated: true,
  },
])
