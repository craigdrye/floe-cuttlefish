import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]
const source = 'Floe cloudInfrastructureRoadmap 103-pass'

export const cloudInfrastructureRoadmapR2Questions: Question[] = makeQuestionBank('Career Skills', [
  // ---------------------------------------------------------------------------
  // Chapter 1: Cloud Building Blocks
  // ---------------------------------------------------------------------------
  {
    id: 7625000,
    chapter: 'Cloud Building Blocks',
    title: 'Edge cannot host stateful workloads',
    prompt:
      'A team wants to cut latency by "moving the whole order-management database to the CDN edge" so reads are fast everywhere. Why is this the wrong use of the edge tier?',
    correct:
      'Edge/CDN locations are designed to cache and route, not to host an authoritative stateful datastore; a primary write database needs a region with durable, consistent storage',
    wrong: [
      miss(
        'Edge locations are always slower than regional compute, so latency would get worse',
        'Edge is closer to users and typically faster for cacheable reads; the problem is not speed but that edge is not built to be the system of record for writes.',
        'Edge is fast for delivery. The issue is durability and consistency of an authoritative write store, not raw latency.',
      ),
      miss(
        'Edge locations only exist in one country, so global reads would not work',
        'Edge networks are deliberately global with many points of presence; geographic coverage is their strength, not a limitation.',
        'Edge networks are globally distributed by design. Reconsider what edge is actually for versus a primary datastore.',
      ),
      miss(
        'The CDN would automatically encrypt the database and break the application',
        'CDNs handle TLS for delivery but do not silently encrypt and corrupt a backing database; the real mismatch is hosting authoritative state at the edge at all.',
        'Encryption is not what breaks here. Think about which tier is meant to hold consistent, durable, writable state.',
      ),
    ],
    lesson:
      'The edge tier exists to cache content and terminate connections close to users; it is a delivery and routing layer, not a place to run an authoritative, writable datastore. Stateful systems of record belong in a region with durable, consistent storage, and you push only cacheable, read-mostly content out to the edge.',
    source,
    generated: true,
  },
  {
    id: 7625001,
    chapter: 'Cloud Building Blocks',
    title: 'Account boundary as a blast-radius control',
    prompt:
      'A platform team is deciding whether to run production and a freewheeling experimentation sandbox in the same cloud account or in two separate accounts under one organization. What is the strongest argument for separate accounts?',
    correct:
      'A separate account is a hard isolation and blast-radius boundary: a misconfiguration, runaway cost, or compromised credential in the sandbox cannot directly reach production resources',
    wrong: [
      miss(
        'Separate accounts make the monthly bill cheaper because each account gets its own free tier',
        'Free-tier gaming is not the design rationale and is often consolidated at the organization level; the real reason is isolation, not a discount.',
        'This is about containment, not billing tricks. Ask what a sandbox mistake can touch if it shares the account with prod.',
      ),
      miss(
        'A single account is impossible because each account can hold only one region',
        'An account spans many regions; that is not a constraint. Separation is a deliberate isolation choice, not a workaround for a per-region limit.',
        'Accounts are not limited to one region. The motivation is keeping failure and abuse domains apart.',
      ),
      miss(
        'Separate accounts remove the need for IAM because each account trusts the other fully',
        'Cross-account access still requires explicit, least-privilege trust; separation tightens IAM rather than removing it.',
        'Separation does not delete identity controls. It limits what a problem in one account can reach in another.',
      ),
    ],
    lesson:
      'Accounts (under an organization) are the cloud’s coarsest isolation boundary. Putting production and risky experimentation in separate accounts means a blowup in one — a wide-open security group, a cost runaway, a leaked key — is contained and cannot directly act on the other’s resources. Organizations then let you apply guardrails and consolidated billing across those accounts.',
    source,
    generated: true,
  },
  {
    id: 7625002,
    chapter: 'Cloud Building Blocks',
    title: 'Availability zones are correlated by region',
    prompt:
      'A service is spread across three availability zones in one region for resilience. During a region-wide control-plane outage, all three zones become unreachable at once. What does this reveal about the design assumption?',
    correct:
      'Availability zones reduce correlated physical failure but still share a region-level fate (control plane, regional services), so multi-AZ does not protect against a whole-region failure',
    wrong: [
      miss(
        'The zones were not truly separate data centers, so the provider violated its own AZ guarantee',
        'AZs are genuinely isolated facilities for physical faults, yet they still depend on shared regional control-plane services; a region-level outage is a known, distinct failure domain, not a broken AZ promise.',
        'AZ physical isolation can be real and a regional outage still happens. The shared fate is at the region layer, not the building.',
      ),
      miss(
        'Three AZs is too few; using six AZs in the region would have survived the regional outage',
        'Adding more AZs in the same region does not escape a region-wide failure, because every AZ in that region shares the regional fate; only another region helps.',
        'More zones in the same region share the same regional fate. The fix is a different failure domain entirely.',
      ),
      miss(
        'The outage proves multi-AZ is pointless and a single AZ would have been just as reliable',
        'Multi-AZ still protects against the common single-data-center failure, which is far more frequent than full regional loss; it is valuable, just not sufficient for regional events.',
        'Multi-AZ still earns its keep against single-DC failures. It simply does not cover the rarer region-wide case.',
      ),
    ],
    lesson:
      'Availability zones are isolated against physical and power faults but still share regional control planes and regional service endpoints, so a region-level event can take all zones down together. Multi-AZ is the right defense for a single data-center failure; surviving a regional outage requires capacity in a second region. Match the failure domain to the requirement.',
    source,
    generated: true,
  },
  {
    id: 7625003,
    chapter: 'Cloud Building Blocks',
    title: 'Data sovereignty extends to provider support access',
    prompt:
      'A regulated customer requires that their data never be accessible from outside the EU. The primary store, backups, and replicas are all in an EU region. A platform reviewer still flags a residency risk. What did they most likely catch?',
    correct:
      'Operational paths such as provider support access, telemetry/logs shipped to a global endpoint, or an admin console reachable from another jurisdiction can move or expose data outside the EU even when storage is in-region',
    wrong: [
      miss(
        'Nothing is wrong; once storage, backups, and replicas are all in the EU, residency is fully satisfied',
        'Residency covers every place data can flow, including logs, metrics, and human access; in-region storage alone does not close the operational and support-access paths.',
        'Storage placement is necessary but not sufficient. Think about logs, telemetry, and who can reach the console from where.',
      ),
      miss(
        'The risk is that EU regions are slower, so the data will be cached abroad for performance',
        'Performance caching is a separate concern and not an inherent residency violation; the reviewer’s flag is about jurisdictional access paths, not latency-driven caching.',
        'This is about jurisdiction and access, not speed. Where can the data legally and operationally end up?',
      ),
      miss(
        'Encrypting the data at rest in the EU automatically makes any cross-border access compliant',
        'Encryption protects confidentiality but does not change where data is processed or who can request decryption; a cross-border support path can still constitute access.',
        'Encryption does not relocate the data or remove access paths. Residency asks where data and access actually live.',
      ),
    ],
    lesson:
      'Data residency and sovereignty obligations apply to every path data can take, not just the primary store: backups, replicas, logs, telemetry, caches, and human/provider support access all count. A compliant design must constrain support tooling, log shipping, and console access to the required jurisdiction, not only the database location.',
    source,
    generated: true,
  },
  {
    id: 7625004,
    chapter: 'Cloud Building Blocks',
    title: 'Managed does not mean unconfigured',
    prompt:
      'A team adopts a managed message-queue service and assumes "managed" means nothing can be misconfigured. Which statement best corrects this assumption?',
    correct:
      'Managed services still expose customer-owned settings — access policy, encryption, retention, network exposure, scaling limits — and misconfiguration of those is a leading cause of incidents',
    wrong: [
      miss(
        'Correct as stated: managed services have no customer-facing configuration to get wrong',
        'Every managed service still surfaces access controls, networking, and data settings the customer must set correctly; "managed" offloads operations, not configuration responsibility.',
        'Managed offloads ops, not decisions. The customer still owns access, network, and data settings.',
      ),
      miss(
        'The only thing a team can misconfigure on a managed service is the display name',
        'Naming is cosmetic; the consequential settings are access policy, encryption, and exposure, which are exactly where real incidents originate.',
        'Cosmetic fields are not the risk. Look at the settings that control who can reach and read the service.',
      ),
      miss(
        'Managed services are exempt from the shared responsibility model entirely',
        'The shared responsibility model still applies; it merely shifts the boundary so the provider owns more of the lower layers while the customer owns configuration, access, and data.',
        'Shared responsibility never disappears. It just moves the line; the customer keeps config, access, and data.',
      ),
    ],
    lesson:
      'A managed service removes operational toil (patching, host management, scaling mechanics) but leaves the customer responsible for configuration: access policies, encryption choices, network exposure, retention, and quotas. The most common managed-service incidents are misconfigurations of exactly these customer-owned settings, not provider failures.',
    source,
    generated: true,
  },
  {
    id: 7625005,
    chapter: 'Cloud Building Blocks',
    title: 'Compute vs storage vs managed-service choice',
    prompt:
      'A team needs a place to run unpredictable, bursty event-processing code a few thousand times a day with no servers to maintain. Which building-block category fits best, and why?',
    correct:
      'A managed serverless function/compute service, because it runs code on demand without the team provisioning or patching servers and bills for actual invocations',
    wrong: [
      miss(
        'An object storage bucket, because it scales infinitely and is cheap',
        'Object storage holds data; it does not execute application logic. Scalability and price do not make it a place to run event-processing code.',
        'Storage holds bytes, it does not run code. Match the workload (executing logic) to a compute primitive.',
      ),
      miss(
        'A always-on, manually managed virtual machine sized for peak burst',
        'A persistent VM sized for peak pays for idle capacity between bursts and reintroduces the server maintenance the requirement explicitly wants to avoid.',
        'A standing VM means paying for idle and patching hosts — the opposite of the no-servers, bursty requirement.',
      ),
      miss(
        'A managed relational database, because it can store the events durably',
        'A database persists state but is not a compute engine for arbitrary processing logic; using it to "run" the code conflates storage with execution.',
        'A database stores events; it does not execute your processing logic. You need a compute primitive, not a datastore.',
      ),
    ],
    lesson:
      'Cloud building blocks split into compute (runs code), storage (holds data), and managed services (operated higher-level capabilities). Bursty, event-driven code with no servers to maintain is the canonical fit for serverless compute: it scales to demand, requires no host management, and bills per invocation rather than for idle capacity.',
    source,
    generated: true,
  },

  // ---------------------------------------------------------------------------
  // Chapter 2: IAM and Network Boundaries
  // ---------------------------------------------------------------------------
  {
    id: 7625006,
    chapter: 'IAM and Network Boundaries',
    title: 'Explicit deny beats allow',
    prompt:
      'In most cloud IAM evaluation models, a user has one policy that allows an action and a separate policy that explicitly denies the same action. What is the result, and what is the default for an action no policy mentions?',
    correct:
      'The explicit deny wins (access is denied); and an action no policy mentions is denied by default (implicit deny)',
    wrong: [
      miss(
        'The explicit allow wins because allow is more specific than deny',
        'Standard IAM evaluation gives an explicit deny precedence over any allow; specificity does not let an allow override a deny.',
        'Deny outranks allow in the evaluation order. Reconsider which statement is decisive when both apply.',
      ),
      miss(
        'Whichever policy was attached most recently takes precedence',
        'Evaluation is not time-ordered; all applicable policies are combined and an explicit deny anywhere overrides, regardless of attachment time.',
        'Order of attachment is irrelevant. The model combines all policies and lets an explicit deny dominate.',
      ),
      miss(
        'The deny wins, but an unmentioned action is allowed by default because there is no deny for it',
        'The deny half is right, but the default is the opposite: with no matching allow the request is implicitly denied, not permitted.',
        'You have the deny precedence right. But check the default: no allow means denied, not open.',
      ),
    ],
    lesson:
      'Cloud IAM evaluation starts from an implicit deny: with no matching allow, the request is denied. An allow can grant access, but any explicit deny — in an identity policy, resource policy, SCP, or boundary — overrides every allow. This "deny wins, default deny" logic is what makes guardrail and boundary policies dependable.',
    source,
    generated: true,
  },
  {
    id: 7625007,
    chapter: 'IAM and Network Boundaries',
    title: 'NACL return traffic needs ephemeral-port rule',
    prompt:
      'A subnet uses a network ACL. Inbound HTTPS works, but clients time out receiving responses. The NACL allows inbound 443 but the outbound rules only permit 443. Because a NACL is stateless, what is the missing rule?',
    correct:
      'An outbound allow for the ephemeral port range (roughly 1024–65535) back to the clients, since the TCP reply leaves from those ports',
    wrong: [
      miss(
        'An outbound allow for port 443, which is already present, so nothing is actually missing',
        'The reply does not go back out on 443; it returns from the server to the client’s ephemeral source port, so a 443-only outbound rule still blocks the response.',
        'The response does not leave on 443. Think about which ports the return packets of a TCP session actually use.',
      ),
      miss(
        'Nothing — security groups will automatically allow the return because they are stateful',
        'Security groups being stateful does not rescue a stateless NACL; the NACL evaluates every packet independently and still drops the un-allowed return traffic.',
        'A stateful security group cannot cover for a stateless NACL. The NACL still needs both directions allowed.',
      ),
      miss(
        'An inbound allow for the ephemeral range, since responses come back inbound',
        'The server’s response is outbound from this subnet to the client; you need the outbound ephemeral rule, not an inbound one, for the reply to leave.',
        'Responses leave the server outbound to the client. The missing rule is on the outbound side, not inbound.',
      ),
    ],
    lesson:
      'Network ACLs are stateless: each packet is judged on its own, so allowing a request does not auto-allow the reply. A TCP response returns from the server to the client’s ephemeral source port (commonly 1024–65535), so a stateless filter needs an explicit outbound rule for that range. Security groups, being stateful, handle this automatically — which is exactly why people forget the NACL rule.',
    source,
    generated: true,
  },
  {
    id: 7625008,
    chapter: 'IAM and Network Boundaries',
    title: 'Private endpoint vs NAT for a managed service',
    prompt:
      'Instances in a private subnet need to reach a managed object-storage service, and security wants that traffic to never traverse the public internet. NAT gateway egress would work but routes over the internet. What is the better fit?',
    correct:
      'A private endpoint (private link) to the service, so traffic reaches it over the provider’s private network without leaving for the public internet',
    wrong: [
      miss(
        'Move the instances to a public subnet so they can reach the service directly',
        'A public subnet exposes the instances inbound and still sends traffic toward public endpoints; it increases exposure and does not create a private path to the service.',
        'Public subnets add exposure and do not create a private path. The goal is to keep traffic off the public internet entirely.',
      ),
      miss(
        'Keep the NAT gateway; it already keeps traffic private because the subnet is private',
        'A NAT gateway lets private instances egress, but that egress goes out to the public internet to reach a public service endpoint; the subnet being private does not make the path private.',
        'NAT gives outbound internet access — over the public internet. A private subnet does not equal a private path to the service.',
      ),
      miss(
        'Open the security group to the service’s entire public IP range',
        'Widening the security group to a large public range increases exposure and still routes over the public internet; it neither narrows access nor creates a private path.',
        'Opening firewall ranges does not build a private route and broadens exposure. You want a dedicated private connection.',
      ),
    ],
    lesson:
      'A NAT gateway provides outbound internet egress for private subnets, but that traffic still traverses the public internet to reach a public service endpoint. A private endpoint (private link) connects your VPC to the managed service over the provider’s internal network, so traffic to the service never leaves for the public internet — the right tool when the requirement is "private path," not just "outbound access."',
    source,
    generated: true,
  },
  {
    id: 7625009,
    chapter: 'IAM and Network Boundaries',
    title: 'Wildcard resource in a policy',
    prompt:
      'A reviewer finds a role whose policy grants s3:GetObject on Resource: "*". The application only ever reads one bucket. Beyond style, why is the wildcard a real finding?',
    correct:
      'It grants read on every bucket in the account, so a compromise of this workload exposes far more data than its job requires — an unnecessarily large blast radius',
    wrong: [
      miss(
        'It is only a finding if the bucket names contain sensitive words; otherwise the wildcard is fine',
        'Sensitivity is not inferred from names; the wildcard grants access to all current and future buckets regardless of naming, which is the exposure that matters.',
        'The risk is breadth of access, not the words in bucket names. A wildcard reaches everything, named anything.',
      ),
      miss(
        'A wildcard resource makes the policy slower to evaluate and adds latency to requests',
        'Policy evaluation cost is negligible and not the concern; the issue is that the grant covers vastly more than the workload needs.',
        'This is not a performance issue. Focus on how much the role can reach if the workload is compromised.',
      ),
      miss(
        'It is fine because the action is only GetObject, which is read-only and therefore harmless',
        'Read-only across every bucket can still exfiltrate sensitive data account-wide; "read-only" does not bound the blast radius when the resource is unlimited.',
        'Read-only over everything is still a large data-exfiltration surface. Scope the resource, not just the action.',
      ),
    ],
    lesson:
      'Least privilege scopes both the action and the resource. A wildcard resource grants the action across every matching object in the account, including ones created later, so a single compromised workload can reach far beyond its purpose. Narrowing Resource to the specific bucket/prefix the workload actually uses shrinks the blast radius to what the job needs.',
    source,
    generated: true,
  },
  {
    id: 7625010,
    chapter: 'IAM and Network Boundaries',
    title: 'Confused-deputy and role trust conditions',
    prompt:
      'You let a third-party SaaS assume a role in your account to read a bucket. To stop an attacker who knows your role’s name from tricking the SaaS into using it against your account, what control should the role’s trust policy include?',
    correct:
      'An external-ID condition the SaaS must present when assuming the role, so the SaaS only acts on your account when it carries the agreed, secret identifier',
    wrong: [
      miss(
        'Make the bucket public so the SaaS does not need to assume a role at all',
        'Making the bucket public removes the access-control problem by removing access control; it exposes the data to everyone and worsens the security posture.',
        'Going public deletes the control instead of fixing it. You want to bind the role to your specific integration.',
      ),
      miss(
        'Embed a long-lived access key for the SaaS in your application config',
        'A shared long-lived key reintroduces a static secret to leak and does not address the confused-deputy problem of the SaaS being induced to act on the wrong account.',
        'Static keys are the pattern you are trying to avoid, and they do not solve the cross-customer confusion.',
      ),
      miss(
        'Rename the role to something hard to guess so attackers cannot reference it',
        'Obscurity through a hard-to-guess name is not a control; role ARNs leak and the confused-deputy attack does not depend on guessing, it depends on the SaaS being tricked.',
        'A secret-ish name is not a control. The fix is a condition the legitimate caller must satisfy, not obscurity.',
      ),
    ],
    lesson:
      'When a third party assumes a role across accounts, the confused-deputy risk is that an attacker who knows the role’s identifier convinces the trusted third party to use its privileges against your account. A unique external ID embedded in the trust condition forces the assuming party to present an agreed secret, so the role is only usable on your account through your specific, intended integration.',
    source,
    generated: true,
  },
  {
    id: 7625011,
    chapter: 'IAM and Network Boundaries',
    title: 'Break-glass access design',
    prompt:
      'A platform team is designing emergency "break-glass" admin access for outages when normal SSO is down. Which design is correct?',
    correct:
      'A separate, rarely used high-privilege path with strong auth, sealed credentials, mandatory logging, and an alert/review every time it is used',
    wrong: [
      miss(
        'Give every on-call engineer standing admin so no one is ever blocked in an emergency',
        'Standing broad admin removes least privilege entirely and creates a large permanent attack surface; emergencies do not justify always-on god access.',
        'Always-on admin for everyone is the opposite of least privilege. Break-glass should be rare, sealed, and audited.',
      ),
      miss(
        'Store the break-glass password in the team’s shared chat so anyone can grab it fast',
        'A credential readable in shared chat is an ungoverned backdoor with no approval or reliable audit; convenience here is the failure mode.',
        'A shared-chat password is an unaudited backdoor. Break-glass needs sealed storage and logged, reviewed use.',
      ),
      miss(
        'Delete all emergency access so there is no privileged path for an attacker to find',
        'Removing the path means engineers invent ungoverned workarounds during the next outage; the goal is a controlled emergency path, not none.',
        'No emergency path forces risky improvisation under pressure. Design a controlled one rather than abolishing it.',
      ),
    ],
    lesson:
      'Break-glass access must exist for the day normal auth fails, but it should be a distinct, seldom-used path: strong authentication, credentials sealed and not in daily use, every activation logged, and an automatic alert plus after-the-fact review. The aim is fast access in a real emergency without leaving a quiet, unaudited backdoor or normalizing standing admin.',
    source,
    generated: true,
  },
  {
    id: 7625012,
    chapter: 'IAM and Network Boundaries',
    title: 'Security group referencing another group',
    prompt:
      'App servers must accept traffic only from the load balancer, which autoscales and changes IPs constantly. Hardcoding the balancer’s current IPs in the app security group keeps breaking. What is the robust pattern?',
    correct:
      'Set the app security group to allow inbound from the load balancer’s security group as the source, so membership — not specific IPs — defines who is allowed',
    wrong: [
      miss(
        'Allow inbound from 0.0.0.0/0 so it never breaks when balancer IPs change',
        'Opening to the whole internet "fixes" the churn by removing the control; it exposes the app servers directly instead of restricting them to the balancer.',
        'Opening to everyone trades a real restriction for none. You want to track the balancer by identity, not widen access.',
      ),
      miss(
        'Write a script that updates the hardcoded IP rules every minute',
        'A constant-rewrite script is brittle and racy, lagging real scaling events and risking dropped traffic; referencing the source group removes the need to track IPs at all.',
        'Chasing IPs with a cron is fragile and always slightly stale. There is a native way to allow by group membership.',
      ),
      miss(
        'Assign the load balancer a single static public IP and allow only that address',
        'Pinning the balancer to one IP fights its autoscaling design, can cap throughput, and still breaks if the balancer is replaced; group-based rules are the intended mechanism.',
        'Forcing one static IP works against the balancer’s scaling model. Reference the balancer’s security group instead.',
      ),
    ],
    lesson:
      'Security groups can reference other security groups as their source, allowing traffic from any instance that is a member of the referenced group regardless of its current IP. For autoscaling tiers whose addresses churn, allowing inbound from the upstream tier’s security group is the durable pattern — access follows membership, so you never chase changing IPs or widen the rule to the internet.',
    source,
    generated: true,
  },

  // ---------------------------------------------------------------------------
  // Chapter 3: Deployment and Change Safety
  // ---------------------------------------------------------------------------
  {
    id: 7625013,
    chapter: 'Deployment and Change Safety',
    title: 'Why blue-green eases rollback but doubles cost',
    prompt:
      'A team uses blue-green deployments: the new version runs in a full parallel environment, then all traffic switches over. Compared with a rolling update, what is the key tradeoff they are accepting?',
    correct:
      'Instant rollback by switching traffic back to the still-running old environment, at the cost of running two full environments at once',
    wrong: [
      miss(
        'Gradual per-percentage traffic exposure, at the cost of slower rollback',
        'Per-percentage exposure is the canary pattern, not blue-green; blue-green switches all traffic at once and its advantage is the fast switch-back, not gradual ramp.',
        'Percentage ramping is canary. Blue-green flips all traffic at once; its selling point is the instant switch-back.',
      ),
      miss(
        'Zero extra infrastructure cost, because the old environment is deleted before the switch',
        'Deleting the old environment before the switch would destroy the rollback target; blue-green deliberately keeps both up, which is why it costs more during the cutover.',
        'You cannot roll back to an environment you deleted. Blue-green keeps both running, which is the cost it accepts.',
      ),
      miss(
        'No need for backward-compatible data changes, because the cutover is atomic',
        'An atomic traffic switch does not remove the need for schema compatibility; if both versions touch the same database, migrations still must be backward compatible.',
        'Atomic traffic switching does not make the shared database atomic. Schema compatibility is still required.',
      ),
    ],
    lesson:
      'Blue-green keeps the old (blue) environment fully running while the new (green) one takes traffic, so rollback is just flipping traffic back — fast and clean for the application tier. The price is running two complete environments during the cutover. Note it does not absolve you of backward-compatible schema changes when both share a database.',
    source,
    generated: true,
  },
  {
    id: 7625014,
    chapter: 'Deployment and Change Safety',
    title: 'IaC drift from a manual fix',
    prompt:
      'During an incident someone manually widened a security group in the console to restore service. The IaC code still describes the old, narrower rule. What happens on the next routine terraform/IaC apply if nobody reconciles?',
    correct:
      'The apply reverts the security group back to the code’s narrower rule, silently undoing the emergency fix and likely reproducing the outage',
    wrong: [
      miss(
        'The apply detects the manual change and automatically updates the code to match reality',
        'IaC tools reconcile live state toward the code, not the code toward live state; an un-reconciled manual change is overwritten, not adopted.',
        'IaC pushes reality toward the code, not the reverse. The manual change gets overwritten unless you update the code.',
      ),
      miss(
        'Nothing changes, because manual console edits are invisible to the IaC tool',
        'The tool reads live state and sees the drift; it is precisely because it notices the difference that it will reset the resource to the declared configuration.',
        'The tool does see the difference — that is the point. Seeing drift is what triggers it to reset to code.',
      ),
      miss(
        'The apply fails permanently because the live state no longer matches the code',
        'Drift does not hard-fail an apply; the tool computes a diff and applies it, bringing the resource back to the declared state rather than erroring out.',
        'Drift is not a fatal error; it is a diff the tool resolves by enforcing the code. The risk is silent reversion, not failure.',
      ),
    ],
    lesson:
      'Infrastructure as code treats the committed configuration as the source of truth and converges live resources toward it. A manual emergency change that is not reconciled into code becomes drift, and the next apply quietly reverts it — often re-creating the very outage the fix resolved. After firefighting, capture the change in code and review it so the source of truth and reality agree.',
    source,
    generated: true,
  },
  {
    id: 7625015,
    chapter: 'Deployment and Change Safety',
    title: 'Removing a required API field safely',
    prompt:
      'A public API must stop requiring a field that older clients still send. Which sequencing keeps existing clients working throughout?',
    correct:
      'Make the field optional and ignore it server-side now; only after all clients have stopped sending it (and a deprecation window passes) consider removing it',
    wrong: [
      miss(
        'Remove the field immediately and tell clients to update before their next call',
        'Removing it now breaks every client still sending or depending on it before they can update; you cannot assume independently deployed clients change on your schedule.',
        'Independent clients do not update on command. Loosen the contract first, then retire the field later.',
      ),
      miss(
        'Reject any request that still includes the field, forcing clients to stop sending it',
        'Rejecting requests that include the field is a breaking change that takes down current clients immediately; tolerance, not rejection, preserves compatibility.',
        'Rejecting the old shape breaks today’s callers. Backward compatibility means tolerating, then deprecating.',
      ),
      miss(
        'Version-bump the whole API and delete the old version the same day',
        'Same-day deletion of the old version is just a breaking change with a version label; clients need a real migration window on the old version before it disappears.',
        'A new version is fine, but deleting the old one immediately is still breaking. Overlap the versions for a window.',
      ),
    ],
    lesson:
      'Backward-compatible contract evolution loosens requirements before tightening or removing them. To drop a required field: make it optional and ignore it server-side, communicate deprecation, observe until no client sends it, and only then remove it. Breaking independently deployed clients on your own schedule is the recurring change-safety failure this pattern prevents.',
    source,
    generated: true,
  },
  {
    id: 7625016,
    chapter: 'Deployment and Change Safety',
    title: 'Roll-forward vs rollback after a forward-only migration',
    prompt:
      'A release shipped code plus a forward-only schema migration that has already rewritten production data. A bug appears in the new code. Why is "roll forward with a fix" often safer here than reverting the deploy?',
    correct:
      'The old code may not understand the already-migrated data, so reverting can break on the new schema; a small forward fix keeps code and data consistent',
    wrong: [
      miss(
        'Reverting the deploy automatically reverses the schema migration, so it is always safe',
        'Deploying old code does not run a down-migration; the data stays in its new shape and the old code now faces a schema it was never written for.',
        'Shipping old code does not undo the migration. The data is already changed; old code meets a shape it cannot read.',
      ),
      miss(
        'Roll-forward is safer only because it is faster to type than a rollback command',
        'Speed of typing is irrelevant; the real reason is consistency between code and an irreversibly changed schema, not command convenience.',
        'This is about code/data consistency after an irreversible change, not how quickly you can issue a command.',
      ),
      miss(
        'Both options are equivalent because schema and code are independent at runtime',
        'Schema and code are tightly coupled at runtime; a forward-only migration makes the old code incompatible, so the options are not equivalent.',
        'Code and schema are coupled, not independent. A forward-only migration is exactly what makes rollback risky.',
      ),
    ],
    lesson:
      'Rollback assumes the previous code can still operate the current data. A forward-only migration changes the schema irreversibly, so reverting the deploy leaves old code facing data it does not understand. When migrations are not reversible, a targeted roll-forward fix usually restores consistency faster and more safely — which is also why expand/contract migrations are designed to stay compatible across versions.',
    source,
    generated: true,
  },
  {
    id: 7625017,
    chapter: 'Deployment and Change Safety',
    title: 'Lowering DNS TTL before a cutover',
    prompt:
      'A team plans a DNS cutover to a new endpoint next week and wants the switch to take effect quickly with few stragglers. The record’s TTL is currently 24 hours. What should they do, and when?',
    correct:
      'Lower the TTL well in advance (e.g., to 60 seconds) so old cached values expire before the cutover, then change the record at switch time and raise the TTL again afterward',
    wrong: [
      miss(
        'Change the record at cutover time; the new value reaches everyone instantly regardless of TTL',
        'Resolvers cache the old value for up to the prior TTL, so with a 24-hour TTL some clients keep hitting the old endpoint long after the change; propagation is not instant.',
        'Caches honor the old TTL, not your intentions. With a 24h TTL, stragglers persist unless you lower it first.',
      ),
      miss(
        'Raise the TTL to 7 days right before the cutover so the change is more reliable',
        'A longer TTL makes caches hold the old value even longer, maximizing stragglers — the opposite of a fast, clean cutover.',
        'A longer TTL means clients cling to the old value longer. For a quick cutover you want the TTL low beforehand.',
      ),
      miss(
        'Delete the old record entirely a minute before adding the new one',
        'Deleting first creates a resolution gap and does not bypass caching; clients with the old value cached still hit the old endpoint while new lookups fail.',
        'Deleting first causes a gap and still does not clear caches. Pre-lower the TTL so caches drain before the switch.',
      ),
    ],
    lesson:
      'DNS resolvers cache records for the TTL, so a change only reaches a client after its cached copy expires. To cut over cleanly, lower the TTL ahead of time (long enough before that the old long TTL has fully expired), make the change at the planned time, confirm, then restore a sane TTL. The TTL governs propagation timing; planning around it is what avoids split traffic.',
    source,
    generated: true,
  },
  {
    id: 7625018,
    chapter: 'Deployment and Change Safety',
    title: 'Feature flag needs an owner and an expiry',
    prompt:
      'A migration flag added "temporarily" is still active 8 months later, and engineers are scared to remove the dead code path it guards. What practice would have prevented this?',
    correct:
      'Create each temporary flag with a named owner and an expiry/cleanup date, and treat removal of the flag and its dead branch as part of the migration’s definition of done',
    wrong: [
      miss(
        'Add a second flag that controls whether the first flag is active',
        'A meta-flag layers more conditional complexity and more dead paths on top of the original problem; the fix is removal, not nesting.',
        'Wrapping a flag in another flag multiplies complexity. The goal is to retire flags, not stack them.',
      ),
      miss(
        'Keep all flags permanently so you can always toggle behavior later',
        'Permanent flags accumulate into a combinatorial test surface and mixed-state bugs; temporary migration flags are meant to be removed once the migration completes.',
        'Permanent temporary flags are the disease here. Each lingering flag doubles the states you must reason about.',
      ),
      miss(
        'Rely on engineers remembering to remove flags during quiet weeks',
        'Person-memory cleanup is exactly what failed for 8 months; without an owner and a date in the tracker, the work evaporates.',
        'Memory is what already failed. Cleanup needs an owner and a tracked expiry, not good intentions.',
      ),
    ],
    lesson:
      'Temporary feature flags should be born with a lifecycle: a named owner, an expiry or cleanup date, and removal of both the flag and its now-dead branch as part of the migration’s completion. Flags without owners and dates silently become permanent, expanding the test matrix and producing hard-to-reproduce mixed-state behavior.',
    source,
    generated: true,
  },
  {
    id: 7625019,
    chapter: 'Deployment and Change Safety',
    title: 'Pinning dependencies for reproducible builds',
    prompt:
      'A CI pipeline installs dependencies with unpinned version ranges. A build that passed last week now fails with no code change. What is the most likely cause and the fix?',
    correct:
      'A transitive dependency published a new version that the range silently pulled in; pin exact versions (lockfile) so builds are reproducible',
    wrong: [
      miss(
        'The CI servers got slower, so the build timed out; add more CPU to the runners',
        'A new failure with identical code points to changed inputs (dependencies), not runner speed; more CPU does not address a behavioral change introduced by an upgraded package.',
        'Identical code, new failure usually means changed inputs, not slow hardware. Look at what version resolution pulled in.',
      ),
      miss(
        'The clock on the build server drifted, which always breaks dependency resolution',
        'Clock drift does not normally change which dependency versions resolve; the unpinned range allowing a new release is the standard cause of this exact symptom.',
        'Clock drift is not what changed your dependency tree. Unpinned ranges letting in a new release is the usual culprit.',
      ),
      miss(
        'Nothing is wrong; intermittent CI failures are expected and should just be retried',
        'A consistent failure introduced by a new dependency is not flakiness to retry away; treating it as random hides a real, reproducible regression.',
        'This is reproducible, not flaky. Retrying ignores a genuine change in resolved dependencies.',
      ),
    ],
    lesson:
      'Unpinned version ranges let dependency resolution pull in new (often transitive) releases between builds, so the same source can build differently over time — the classic "works on my machine / passed yesterday" failure. A committed lockfile pins exact resolved versions, making builds reproducible and turning dependency upgrades into deliberate, reviewable changes rather than silent surprises.',
    source,
    generated: true,
  },

  // ---------------------------------------------------------------------------
  // Chapter 4: Containers and Orchestration
  // ---------------------------------------------------------------------------
  {
    id: 7625020,
    chapter: 'Containers and Orchestration',
    title: 'Image vs container vs registry',
    prompt:
      'A new engineer asks for the precise difference between a container image, a running container, and a registry. Which mapping is correct?',
    correct:
      'An image is the immutable packaged artifact (filesystem + metadata); a container is a running instance of an image; a registry is the store images are pushed to and pulled from',
    wrong: [
      miss(
        'An image is the live running process; a container is the file you build; a registry is the build tool',
        'This inverts image and container and miscasts the registry: the image is the static artifact and the container is the running instance, while the registry merely stores images.',
        'You have image and container swapped. The static artifact is the image; the live instance is the container.',
      ),
      miss(
        'Image, container, and registry are three names for the same packaged artifact',
        'They are distinct: a build-time artifact, a runtime instance, and a distribution store, respectively; collapsing them hides where versioning and immutability actually live.',
        'These are three different things, not synonyms. One is built, one runs, one stores and distributes.',
      ),
      miss(
        'A registry is where containers run, and images are just log files they produce',
        'A registry stores and distributes images; it does not run containers, and images are runnable artifacts, not logs.',
        'Registries store images; they do not run workloads. And images are runnable artifacts, not output logs.',
      ),
    ],
    lesson:
      'A container image is an immutable, layered artifact (a filesystem plus metadata) built once and addressable by tag or digest. A container is a running instance created from an image. A registry is the repository you push images to and pull them from for distribution. Keeping these distinct clarifies where immutability (the image/digest) and runtime state (the container) each live.',
    source,
    generated: true,
  },
  {
    id: 7625021,
    chapter: 'Containers and Orchestration',
    title: 'maxUnavailable / maxSurge during a rolling update',
    prompt:
      'A Kubernetes Deployment with 8 replicas uses the default RollingUpdate strategy (maxUnavailable 25%, maxSurge 25%). During a rollout, what bounds does this place on running pods?',
    correct:
      'At least 6 pods stay available (no more than 2 unavailable) and the total never exceeds 10 pods (up to 2 extra surge) at any moment',
    wrong: [
      miss(
        'All 8 old pods are killed first, then 8 new pods start, briefly dropping to zero available',
        'That describes a Recreate strategy, not RollingUpdate; rolling updates keep a minimum available and add capacity gradually rather than going to zero.',
        'Going to zero is the Recreate strategy. RollingUpdate keeps a floor available and surges only a little above desired.',
      ),
      miss(
        'Exactly 4 pods (50%) are replaced at once because 25% + 25% combine to half',
        'maxUnavailable and maxSurge are separate bounds, not summed into a 50% batch; 25% of 8 is 2 each, governing availability and overshoot independently.',
        'The two percentages are independent limits, not added together. Compute each against the 8 replicas separately.',
      ),
      miss(
        'The rollout pauses until you manually approve each replaced pod, since defaults require confirmation',
        'Default rolling updates proceed automatically within the maxUnavailable/maxSurge bounds; there is no built-in manual approval gate per pod.',
        'There is no per-pod manual gate by default. The controller advances automatically within the surge/unavailable limits.',
      ),
    ],
    lesson:
      'With 8 replicas and the defaults of 25% each, maxUnavailable allows at most 2 pods down (so ≥6 serve traffic) and maxSurge allows at most 2 extra pods (so ≤10 total) at any instant. The two settings independently bound how much capacity you can lose and how far above desired you may temporarily go, letting the rollout proceed without a full outage or unbounded overshoot.',
    source,
    generated: true,
  },
  {
    id: 7625022,
    chapter: 'Containers and Orchestration',
    title: 'A noisy neighbor with no resource limits',
    prompt:
      'On a shared node, one pod with no memory limit leaks memory and the node starts killing other pods. Why are the neighbors being killed, and what prevents it?',
    correct:
      'The unbounded pod consumes node memory until the kernel OOM-kills processes; setting a memory limit on it caps its usage so it cannot starve neighbors',
    wrong: [
      miss(
        'The scheduler intentionally evicts the smallest pods first as a fairness policy',
        'Eviction under memory pressure is driven by usage versus requests and the kernel’s OOM behavior, not a "smallest first" fairness rule; the cause is the unbounded pod, not a size policy.',
        'There is no "smallest-first" fairness rule here. The trigger is one pod with no cap exhausting node memory.',
      ),
      miss(
        'Neighbors die because they lack liveness probes to restart themselves',
        'A liveness probe restarts a single container that is unhealthy; it does nothing to stop another pod from exhausting shared node memory and triggering OOM kills.',
        'Liveness probes restart a pod; they do not protect against a neighbor eating all the node’s memory.',
      ),
      miss(
        'The node is simply too small; the only fix is a bigger node, not limits',
        'A bigger node just delays the same starvation; without a limit the leaking pod will grow to fill whatever capacity exists and reach OOM again.',
        'A bigger node only postpones it — an unbounded leak fills any size. The fix is bounding the offender.',
      ),
    ],
    lesson:
      'Without a memory limit, a leaking pod can consume node memory until the kernel’s out-of-memory killer reclaims it by terminating processes, which can hit innocent neighbors. A memory limit caps a container’s usage (and gets it OOM-killed in isolation if it exceeds the cap) so one workload cannot starve the rest of the node. Requests reserve capacity for scheduling; limits contain blast radius at runtime.',
    source,
    generated: true,
  },
  {
    id: 7625023,
    chapter: 'Containers and Orchestration',
    title: 'Sticky sessions are not a default',
    prompt:
      'A stateless web app stores login state in each instance’s local memory. Behind a round-robin load balancer, users get randomly logged out. The team assumed the balancer "keeps each user on one server." What is the real issue?',
    correct:
      'Session affinity (stickiness) is not on by default; the fix is to externalize session state (shared store) so any instance can serve any request, or enable stickiness as a stopgap',
    wrong: [
      miss(
        'The load balancer is broken because balancers always pin a user to one backend',
        'Default load balancing distributes requests across backends and does not pin users unless stickiness is configured; the balancer is behaving normally, not malfunctioning.',
        'Default balancing spreads requests; it does not pin users. Stickiness is opt-in, not the default behavior.',
      ),
      miss(
        'Add more replicas so there are enough servers for everyone to stay logged in',
        'More replicas spread requests across even more instances, so local-memory sessions are found even less often; scaling out worsens the symptom.',
        'Adding instances makes local-memory sessions even harder to hit. The state needs to live outside the instance.',
      ),
      miss(
        'Switch the balancer to least-connections routing, which preserves sessions',
        'Least-connections is just a different distribution algorithm; it still does not guarantee a user returns to the instance holding their in-memory session.',
        'Changing the distribution algorithm does not create affinity. The problem is where the session is stored.',
      ),
    ],
    lesson:
      'Load balancers distribute requests across backends and do not, by default, keep a given user on one instance. If session state lives only in an instance’s memory, any request landing elsewhere loses it. The durable fix is to externalize session state (a shared cache/store) so the app is truly stateless; sticky sessions can mask the problem but reduce balancing flexibility and still fail when an instance dies.',
    source,
    generated: true,
  },
  {
    id: 7625024,
    chapter: 'Containers and Orchestration',
    title: 'Startup probe vs liveness for slow boot',
    prompt:
      'A container needs up to 2 minutes to load a model on boot but is healthy in milliseconds afterward. You want a tight liveness check once running, without it killing the slow boot. Which probe configuration fits?',
    correct:
      'A startup probe that gates liveness until boot completes, then a normal fast liveness probe takes over',
    wrong: [
      miss(
        'Just set the liveness probe’s initialDelaySeconds to 120 and keep its interval tight',
        'A fixed 120s delay wastes time when boot is faster and is fragile if boot occasionally exceeds it; a startup probe adapts to actual readiness and only then enables liveness.',
        'A hardcoded delay is a guess that is either too long or too short. A startup probe gates liveness on real boot completion.',
      ),
      miss(
        'Use only a readiness probe and skip liveness entirely',
        'Readiness controls traffic, not restart of a hung container; dropping liveness means a deadlocked process after boot is never recovered, which you explicitly wanted.',
        'Readiness gates traffic, not restarts. You still want liveness to recover a hung process once it is up.',
      ),
      miss(
        'Make the liveness probe interval very long so it never fires during boot',
        'A very long interval also delays detection of genuine hangs after boot, defeating the "tight liveness once running" requirement; the startup probe solves the boot window without dulling liveness.',
        'A long interval dulls liveness forever, not just at boot. You want tight checks after startup, which a startup probe enables.',
      ),
    ],
    lesson:
      'A startup probe runs only during initialization and holds back the liveness and readiness probes until it succeeds, so a slow boot is not mistaken for a crash. Once it passes, a normal, tight liveness probe takes over to catch real hangs quickly. This separates "still booting" from "deadlocked," which a single delayed liveness probe handles poorly.',
    source,
    generated: true,
  },
  {
    id: 7625025,
    chapter: 'Containers and Orchestration',
    title: 'HPA scaling on the wrong signal',
    prompt:
      'A queue-worker deployment autoscales on CPU, but during backlogs CPU stays low (workers are I/O-bound waiting on the queue) so it never scales up and the backlog grows. What is the better scaling signal?',
    correct:
      'Scale on a work-backlog metric such as queue depth or messages per worker, which reflects pending demand even when CPU is low',
    wrong: [
      miss(
        'Lower the CPU target threshold so the existing CPU-based autoscaler triggers sooner',
        'If CPU stays low because work is I/O-bound, no threshold on CPU reflects the backlog; tuning the wrong signal cannot detect demand it does not measure.',
        'CPU is the wrong gauge here. Lowering its threshold still cannot see a backlog that does not move CPU.',
      ),
      miss(
        'Switch to a fixed replica count sized for the worst backlog ever seen',
        'A permanently maxed fleet pays for peak capacity at all times and still cannot adapt if a future backlog exceeds the guess; autoscaling on the right signal is both cheaper and responsive.',
        'Fixing replicas at worst-case wastes money off-peak and still has a ceiling. Scale on the demand signal instead.',
      ),
      miss(
        'Scale on memory instead, since memory always tracks workload',
        'Memory does not reliably track a queue backlog for lightweight I/O-bound workers; like CPU, it is an internal resource signal, not a measure of pending work.',
        'Memory is another resource signal, not a demand signal. It will not reflect waiting queue work either.',
      ),
    ],
    lesson:
      'Horizontal autoscaling only works if the metric reflects real demand. For queue workers that spend time waiting on I/O, CPU and memory stay low during a backlog, so resource-based autoscaling never reacts. Scaling on a custom/external metric like queue depth or messages-per-worker ties replica count to pending work, which is the demand the system actually needs to absorb.',
    source,
    generated: true,
  },
  {
    id: 7625026,
    chapter: 'Containers and Orchestration',
    title: 'PodDisruptionBudget during node maintenance',
    prompt:
      'A 3-replica service keeps dropping below 2 available pods whenever the platform drains nodes for upgrades, briefly breaking the service. Which Kubernetes object expresses "keep at least 2 of these running during voluntary disruptions"?',
    correct:
      'A PodDisruptionBudget specifying minAvailable: 2 (or maxUnavailable: 1), which blocks voluntary evictions that would breach it',
    wrong: [
      miss(
        'A higher replica count alone, since more pods automatically survive node drains',
        'Raising replicas does not stop a drain from evicting too many at once; without a disruption budget the platform can still take multiple pods down simultaneously.',
        'More replicas without a budget can still be evicted together. You need a rule that bounds voluntary disruption.',
      ),
      miss(
        'A liveness probe, which keeps enough pods healthy during the drain',
        'A liveness probe restarts unhealthy containers; it has no say over how many pods a node drain may evict at once.',
        'Liveness restarts a pod; it does not constrain how many the drain removes. That is a disruption-budget concern.',
      ),
      miss(
        'A resource request, which reserves capacity so pods are not evicted',
        'Requests influence scheduling and capacity, not how many pods a voluntary drain may evict simultaneously; they do not enforce an availability floor during maintenance.',
        'Requests guide placement, not eviction counts during drains. The availability floor needs a PodDisruptionBudget.',
      ),
    ],
    lesson:
      'A PodDisruptionBudget tells the cluster how much voluntary disruption (node drains, upgrades, rebalancing) a workload can tolerate by setting minAvailable or maxUnavailable. The eviction API respects it, so a drain that would breach the budget is blocked until it is safe. Replica counts, probes, and requests do not bound simultaneous voluntary evictions; the PDB is the purpose-built control.',
    source,
    generated: true,
  },

  // ---------------------------------------------------------------------------
  // Chapter 5: Observability and Reliability
  // ---------------------------------------------------------------------------
  {
    id: 7625027,
    chapter: 'Observability and Reliability',
    title: 'SLI vs SLO vs SLA',
    prompt:
      'A reliability doc mixes up three terms. Which set of definitions is correct?',
    correct:
      'SLI is the measured quantity (e.g., % of requests under 300ms); SLO is the internal target for that SLI (e.g., 99.9%); SLA is the external contract with consequences if the objective is missed',
    wrong: [
      miss(
        'SLA is the measurement, SLO is the contract, and SLI is the penalty clause',
        'These are scrambled: the measurement is the SLI, the target is the SLO, and the contract with consequences is the SLA; the penalty lives inside the SLA, it is not a separate term.',
        'The roles are jumbled. The measured number is the SLI; the contract with teeth is the SLA.',
      ),
      miss(
        'All three are synonyms for an uptime percentage and can be used interchangeably',
        'They are distinct layers — an indicator, an objective, and an agreement; collapsing them hides whether a number is measured, targeted, or contractually binding.',
        'They are not interchangeable. One is measured, one is a target, one is a contract with consequences.',
      ),
      miss(
        'SLO is the customer-facing promise with refunds, and SLA is the internal stretch goal',
        'This swaps them: the SLA is the external, consequence-bearing agreement, and the SLO is the internal target, typically set tighter than the SLA.',
        'You have SLO and SLA reversed. The refund-bearing external promise is the SLA; the internal target is the SLO.',
      ),
    ],
    lesson:
      'An SLI is a concrete measurement of service behavior (latency, error rate, availability). An SLO is the internal target you hold that SLI to. An SLA is an external agreement that adds consequences (credits, refunds) for missing the objective. Teams usually set the SLO stricter than the SLA so they react before breaching the contract. The quick test: if missing it has a contractual penalty, it is an SLA.',
    source,
    generated: true,
  },
  {
    id: 7625028,
    chapter: 'Observability and Reliability',
    title: 'Why p99 latency beats the average',
    prompt:
      'A dashboard shows average request latency at 120ms and engineers call the service "fast," yet support gets steady complaints about slowness. Why can the average mislead, and what should they look at?',
    correct:
      'Latency distributions have a long tail, so a low average can hide a slow p95/p99; tracking high percentiles reveals the minority of requests that frustrate users',
    wrong: [
      miss(
        'The average is fine; the complaints must be unrelated to performance',
        'Dismissing consistent slowness complaints ignores that the mean is pulled down by the many fast requests while a slow tail still hurts real users; the metric, not the users, is misleading.',
        'Steady slowness complaints are signal. The mean can look great while a slow tail quietly burns users.',
      ),
      miss(
        'Switch to the minimum latency, which best represents the typical user',
        'The minimum reflects the luckiest request, not the typical or the suffering user; it hides the tail even more than the mean does.',
        'The minimum is the best case, not the typical or the worst. It conceals the tail you are trying to find.',
      ),
      miss(
        'Average more data points together to smooth out the noise',
        'Averaging more requests pulls the mean toward the many fast ones even harder, further masking the slow tail rather than exposing it.',
        'More averaging buries the tail deeper. You need percentiles, which surface the slow minority directly.',
      ),
    ],
    lesson:
      'Response-time distributions are right-skewed: a floor near zero but a long slow tail. The mean is dominated by the many fast requests, so it can stay low while p95/p99 — the experience of the slowest 5% or 1% — is terrible. Because those tail requests are real users (and tail latency compounds across dependency chains), high percentiles, not averages, are the latency SLI to watch.',
    source,
    generated: true,
  },
  {
    id: 7625029,
    chapter: 'Observability and Reliability',
    title: 'Tail latency compounds across dependencies',
    prompt:
      'A single user request fans out to many internal services in series/parallel. Each dependency has a great p50 but an occasional slow p99. Why does the user-facing latency end up dominated by the tails?',
    correct:
      'With many dependencies per request, the chance that at least one is in its slow tail rises sharply, so the slow tail of components becomes the typical case for the overall request',
    wrong: [
      miss(
        'Because averaging the dependencies’ p50s gives the user latency, which is low',
        'User latency is not the average of component p50s; with a fan-out, the request waits on the slowest contributing call, so tails dominate rather than medians averaging out.',
        'You do not average p50s. The request waits on its slowest needed call, so component tails surface as user-level latency.',
      ),
      miss(
        'Because each dependency’s p99 cancels out the next one’s p99 statistically',
        'Independent tail events do not cancel; more dependencies mean more independent chances to hit a slow path, increasing — not reducing — the odds of a slow overall request.',
        'Tails do not cancel; they accumulate. More dependencies means more chances one is slow on any given request.',
      ),
      miss(
        'Because the network always adds exactly the p99 of every hop together',
        'The network does not deterministically sum every hop’s p99; the effect is probabilistic — across many calls, the likelihood that some call hits its tail grows.',
        'It is probabilistic, not a fixed sum of all p99s. The point is the rising chance that some call is slow.',
      ),
    ],
    lesson:
      'When one user request depends on many internal calls, the request is only as fast as its slowest necessary component. With enough dependencies, the probability that at least one is in its slow tail on any given request becomes high, so the components’ p99 effectively becomes the user’s typical latency. This is why teams attack tail latency (timeouts, hedged requests, fewer hops) rather than just optimizing medians.',
    source,
    generated: true,
  },
  {
    id: 7625030,
    chapter: 'Observability and Reliability',
    title: 'Logs vs metrics vs traces',
    prompt:
      'An engineer needs to follow a single slow request as it moves across five microservices to find which hop added the delay. Which observability signal is purpose-built for that, versus what logs and metrics give?',
    correct:
      'A distributed trace, which stitches the request’s spans across services to show per-hop timing; logs give discrete events and metrics give aggregate trends',
    wrong: [
      miss(
        'A metric dashboard, because metrics record every individual request’s path',
        'Metrics are aggregated numeric time series (counts, rates, percentiles); they do not retain an individual request’s path across services, which is what tracing provides.',
        'Metrics aggregate; they do not follow one request across services. That cross-service path is what a trace shows.',
      ),
      miss(
        'Grepping logs, because logs already contain the full cross-service timeline by default',
        'Logs are per-service discrete events and are not automatically correlated end-to-end; without a shared trace/correlation ID they cannot reconstruct one request’s journey across five services.',
        'Logs are per-service events, not an end-to-end timeline, unless correlated. Tracing is built to stitch the hops.',
      ),
      miss(
        'A single counter metric incremented on each service, since the total reveals the slow hop',
        'A summed counter shows volume, not where time was spent on a particular request; it cannot localize which hop added latency for that one trace.',
        'A counter tells you how many, not where the time went on one request. Use a trace to localize the slow hop.',
      ),
    ],
    lesson:
      'The three pillars serve different questions. Metrics are cheap aggregates good for trends and alerting (rates, percentiles). Logs are discrete, detailed events good for forensic detail. Traces correlate the spans of a single request across services via a shared trace ID, making them the right tool to pinpoint which hop added latency in a multi-service path.',
    source,
    generated: true,
  },
  {
    id: 7625031,
    chapter: 'Observability and Reliability',
    title: 'Synthetic vs real-user monitoring',
    prompt:
      'A team wants to catch a checkout outage at 3am before any customer hits it, and also understand real customers’ actual page-load experience by region and device. Which monitoring combination fits?',
    correct:
      'Synthetic monitoring (scripted checks run on a schedule) to detect outages proactively, plus real-user monitoring (RUM) to measure actual user experience in the wild',
    wrong: [
      miss(
        'Only real-user monitoring, since real users will reveal the 3am outage soon enough',
        'RUM depends on traffic; at 3am there may be no users to surface the outage, so it cannot proactively catch a failure before customers do.',
        'RUM needs real traffic. With no users at 3am, it cannot pre-empt the outage. You need scheduled synthetic checks too.',
      ),
      miss(
        'Only synthetic monitoring, since scripted checks already represent real users perfectly',
        'A handful of scripted paths cannot capture the diversity of real devices, networks, and regions; synthetic detects availability but does not measure genuine user experience.',
        'Scripted paths are not real users. Synthetic catches outages but misses the variety of real-world experience.',
      ),
      miss(
        'Server CPU and memory dashboards, which together prove the user experience is good',
        'Resource dashboards are internal signals and can look healthy while users see errors or slow loads; they do not measure availability of the user journey or real experience.',
        'Green resource graphs do not equal happy users. Neither outage detection nor real experience comes from CPU/memory.',
      ),
    ],
    lesson:
      'Synthetic monitoring runs scripted transactions on a fixed schedule from chosen locations, so it can detect an outage even with zero live traffic — ideal for off-peak coverage and a consistent baseline. Real-user monitoring instruments actual sessions to capture true experience across regions, devices, and networks. Together they cover both "is it up when no one is looking?" and "how does it actually feel for users?"',
    source,
    generated: true,
  },
  {
    id: 7625032,
    chapter: 'Observability and Reliability',
    title: 'Error budget governs release pace',
    prompt:
      'A service has a 99.9% SLO. It has been reliable and a large fraction of its monthly error budget is unspent. Product wants to ship a risky feature. How should the error budget inform the decision?',
    correct:
      'A healthy remaining error budget is permission to take more release risk; if the budget were exhausted, the policy should slow risky changes and prioritize reliability work',
    wrong: [
      miss(
        'The error budget is irrelevant to releases; ship whenever product decides',
        'Decoupling releases from the budget removes the very mechanism that balances velocity and reliability; the budget exists precisely to govern how much change risk is acceptable.',
        'The budget is the lever that ties release risk to reliability. Ignoring it discards the reason it exists.',
      ),
      miss(
        'An unspent budget means reliability is wasted, so the SLO should be raised to 99.99% immediately',
        'Spare budget is room to innovate, not proof the target is wrong; reflexively tightening the SLO removes the slack teams use to ship and to absorb normal variance.',
        'Leftover budget is room to move, not a signal to crank the target. Tightening reflexively removes useful slack.',
      ),
      miss(
        'A nearly full budget means you must stop all releases to preserve it',
        'Hoarding an unspent budget defeats its purpose; the budget is meant to be spent on change and risk, not protected as an end in itself.',
        'A full budget is meant to be used, not hoarded. Plenty of budget argues for shipping, not freezing.',
      ),
    ],
    lesson:
      'The error budget — the allowed unreliability under the SLO — is a shared currency between feature velocity and reliability. When plenty remains, the team has room to take release risk and move fast; when it is spent, the policy shifts to caution, freezes on risky changes, and reliability work. This turns "how fast should we ship?" into a measured, agreed decision rather than a turf war.',
    source,
    generated: true,
  },
  {
    id: 7625033,
    chapter: 'Observability and Reliability',
    title: 'Multi-window burn-rate alerting',
    prompt:
      'An SLO alert pages whenever the error rate spikes for even one minute, causing frequent false pages from brief blips. The team wants to page only on burns that genuinely threaten the SLO. What design helps?',
    correct:
      'Multi-window, multi-burn-rate alerting: page on a fast burn confirmed over both a short and a longer window, so transient blips are filtered but sustained budget loss still alerts',
    wrong: [
      miss(
        'Just raise the single minute-window error threshold until the blips stop firing',
        'Raising one short-window threshold either still fires on bursts or misses slow sustained burns; a single short window cannot distinguish a harmless blip from a real, ongoing budget drain.',
        'One short window cannot tell a blip from a slow burn. Tuning its threshold trades false pages for missed real ones.',
      ),
      miss(
        'Alert only on a long 24-hour window so short noise is ignored',
        'A long-only window reacts too slowly to a severe fast burn that could exhaust the budget in hours; you would detect the catastrophe long after escalation was warranted.',
        'A long-only window is too slow for a fast catastrophic burn. You need short-window speed plus confirmation.',
      ),
      miss(
        'Remove the SLO alert and rely on customers to report outages',
        'Waiting for customer reports abandons proactive detection entirely, raising time-to-detect and eroding trust; the goal is better alerting, not none.',
        'Customer reports are the slowest possible detector. The fix is smarter burn-rate alerting, not removing it.',
      ),
    ],
    lesson:
      'Good SLO alerting pages on how fast the error budget is burning, not on raw instantaneous error rate. Multi-window, multi-burn-rate alerts require a high burn confirmed over both a short window (for speed) and a longer window (to reject blips), and use lower burn-rate thresholds for slow, sustained drains. This catches genuine threats quickly while suppressing the transient spikes that cause alert fatigue.',
    source,
    generated: true,
  },

  // ---------------------------------------------------------------------------
  // Chapter 6: Cost and Capacity Tradeoffs
  // ---------------------------------------------------------------------------
  {
    id: 7625034,
    chapter: 'Cost and Capacity Tradeoffs',
    title: 'Cross-AZ transfer is billed both directions',
    prompt:
      'A chatty service in AZ-A talks constantly to a database in AZ-B in the same region, and the data-transfer line item is surprisingly high. Why, and what is the cheapest structural fix?',
    correct:
      'Same-region cross-AZ traffic is typically charged in both directions (in and out), so it effectively doubles; co-locating the chatty pair in one AZ (or adding a same-AZ read replica) removes the charge',
    wrong: [
      miss(
        'Cross-AZ traffic is free within a region, so the line item must be a billing error',
        'Same-region cross-AZ transfer is generally not free; it is metered per GB and usually on both sides, which is exactly what produces the unexpected charge.',
        'Same-region does not mean free across zones. Cross-AZ is metered, commonly on both ends.',
      ),
      miss(
        'Move the database to another region to make the transfer cheaper',
        'Cross-region transfer is more expensive than cross-AZ, not less, and adds latency; relocating to another region increases the bill rather than reducing it.',
        'Going cross-region costs more and adds latency. You want the chatty pair closer together, not farther apart.',
      ),
      miss(
        'Compress the payloads but keep the two tiers in different AZs',
        'Compression can trim volume somewhat but still pays the per-GB cross-AZ rate in both directions for a chatty workload; co-location removes the charge entirely for that path.',
        'Compression nibbles at volume but you still pay the cross-AZ rate. Co-locating the pair eliminates the path’s charge.',
      ),
    ],
    lesson:
      'Data transfer between availability zones in the same region is usually billed per GB and on both the sending and receiving side, so a chatty cross-AZ path effectively doubles its transfer cost. For high-traffic pairs, co-locating them in one AZ (accepting reduced AZ redundancy for that path, or adding a same-AZ read replica) removes the charge. Cross-region transfer is more expensive still, not a fix.',
    source,
    generated: true,
  },
  {
    id: 7625035,
    chapter: 'Cost and Capacity Tradeoffs',
    title: 'A cut that buys back reliability vs one that harms it',
    prompt:
      'Finance wants two cost cuts. Cut A: delete a duplicate, never-queried logging pipeline. Cut B: drop from three availability zones to one to save on cross-AZ transfer and spare capacity. Which cut is waste reduction and which trades away reliability?',
    correct:
      'Cut A removes pure waste with no reliability impact; Cut B reduces cost by removing zone redundancy, so it buys cost at the expense of resilience',
    wrong: [
      miss(
        'Both are waste reduction, since both lower the bill with no downside',
        'Lowering the bill is not the test; Cut B removes the redundancy that survives a zone failure, so it has a clear reliability downside despite saving money.',
        'A lower bill is not automatically free. One of these removes the redundancy that survives a zone outage.',
      ),
      miss(
        'Cut A harms reliability because logs are needed for debugging incidents',
        'The pipeline is duplicate and never queried, so removing it loses no usable signal; the active logging path is unaffected and reliability does not depend on a dead duplicate.',
        'A never-queried duplicate carries no signal. Removing it is waste reduction, not a reliability loss.',
      ),
      miss(
        'Cut B is also pure waste because one zone is enough for any service',
        'Single-zone deployment means a single zone failure takes the whole service down; that is removing resilience, not eliminating waste.',
        'Collapsing to one zone removes failure-domain protection. That is trading reliability for cost, not cutting waste.',
      ),
    ],
    lesson:
      'Cost work should distinguish waste (spend that buys nothing — idle duplicates, unqueried pipelines, forgotten nonprod) from spend that buys reliability (redundancy, spare capacity, multi-AZ). Cutting waste is free money; cutting redundancy is a risk decision that must be made deliberately, with the resilience loss named, not slipped through as if it were the same kind of saving.',
    source,
    generated: true,
  },
  {
    id: 7625036,
    chapter: 'Cost and Capacity Tradeoffs',
    title: 'Spot rebalance recommendation precedes the 2-minute notice',
    prompt:
      'A fault-tolerant batch fleet runs on spot capacity. The team wants the smoothest handling of reclamation. Beyond the two-minute interruption notice, what earlier signal can let them replace at-risk instances proactively?',
    correct:
      'The rebalance recommendation, which can arrive before the two-minute interruption notice and flags elevated interruption risk so you can launch replacements early',
    wrong: [
      miss(
        'There is no earlier signal; the two-minute notice is the only warning available',
        'A rebalance recommendation is a distinct, earlier risk signal that can precede the two-minute notice, giving more lead time to react proactively.',
        'There is an earlier heads-up than the 2-minute notice. It flags elevated risk before termination is imminent.',
      ),
      miss(
        'A reserved-instance reservation, which spot fleets receive automatically as a warning',
        'Reserved instances are a billing-commitment construct, not an interruption signal, and spot fleets do not get them automatically; the early warning is the rebalance recommendation.',
        'Reserved instances are a pricing commitment, not a warning signal. The early notice is the rebalance recommendation.',
      ),
      miss(
        'A 30-minute guaranteed grace period that spot always provides before reclaim',
        'There is no guaranteed 30-minute grace; the firm signal is the ~2-minute notice, optionally preceded by a (not-guaranteed) rebalance recommendation that can arrive sooner.',
        'No 30-minute guarantee exists. The firm warning is ~2 minutes; the optional earlier hint is the rebalance recommendation.',
      ),
    ],
    lesson:
      'Spot capacity can be reclaimed with about a two-minute interruption notice, but a rebalance recommendation is an earlier signal that an instance is at elevated risk of interruption and can arrive before that notice (though not guaranteed to). Fleets can act on it to launch replacements proactively and drain at-risk instances, smoothing reclamation for fault-tolerant workloads.',
    source,
    generated: true,
  },
  {
    id: 7625037,
    chapter: 'Cost and Capacity Tradeoffs',
    title: 'Right-sizing from observed utilization',
    prompt:
      'A fleet of instances was sized two years ago and now runs at a steady ~12% CPU and 20% memory. Reserved-instance discounts already apply. What is the highest-leverage cost action?',
    correct:
      'Right-size to smaller instance types that match observed utilization, then re-cover the new, smaller baseline with a commitment',
    wrong: [
      miss(
        'Buy more reserved instances to deepen the discount on the current oversized fleet',
        'Committing harder to oversized capacity locks in paying for unused resources at a discount; you should shrink the footprint first, then commit to the smaller baseline.',
        'Discounting waste is still paying for waste. Right-size first, then commit to the smaller, real baseline.',
      ),
      miss(
        'Switch the oversized instances to spot to cut the rate',
        'Spot suits interruption-tolerant workloads and does not address chronic over-provisioning; the core problem is paying for capacity you never use, which right-sizing fixes directly.',
        'Spot changes the rate, not the over-provisioning. You are still running far more capacity than you use.',
      ),
      miss(
        'Do nothing, because reserved-instance discounts already make the fleet cost-optimal',
        'A discount on the wrong size is not optimal; an instance at 12% CPU is structurally over-provisioned, and the discount does not change that you are buying ~5x the compute you need.',
        'A discount on oversized capacity is not optimal. The fleet is structurally too big regardless of the rate.',
      ),
    ],
    lesson:
      'Right-sizing matches instance types to observed utilization; at ~12% CPU a fleet is paying for several times the compute it uses, and a commitment discount on that oversized footprint just locks in the waste. The high-leverage move is to shrink to types that fit real usage and then apply a commitment (reserved instances or savings plan) to the smaller, accurate baseline.',
    source,
    generated: true,
  },
  {
    id: 7625038,
    chapter: 'Cost and Capacity Tradeoffs',
    title: 'Cost allocation requires consistent tagging',
    prompt:
      'Leadership asks "which team and which product drive our cloud spend?" but the bill cannot answer because resources are untagged or tagged inconsistently. What is the foundational fix?',
    correct:
      'Enforce a consistent cost-allocation tagging policy (team, product, environment) so spend can be grouped and attributed, ideally with tag policies that block or flag untagged resources',
    wrong: [
      miss(
        'Switch cloud providers, since the current provider hides per-team costs',
        'The inability to attribute spend stems from missing tags, not the provider; a new provider with the same untagged resources would be equally opaque.',
        'The opacity is your missing tags, not the provider. Moving providers carries the same blind spot.',
      ),
      miss(
        'Ask each team to estimate its own spend from memory each month',
        'Self-estimates are inconsistent and unverifiable; accurate attribution needs the bill itself grouped by reliable tags, not recollections.',
        'Guesses are not allocation. Attribution must come from the bill grouped by real, enforced tags.',
      ),
      miss(
        'Move everything into one account so the single total is easy to read',
        'A single total is the opposite of attribution; consolidating into one account without tags makes it harder, not easier, to see which team or product drives spend.',
        'One big total hides who spends what. You need dimensions (tags) to break the bill down, not fewer of them.',
      ),
    ],
    lesson:
      'You cannot manage what you cannot attribute. Cost allocation depends on a consistent tagging scheme — team, product, environment, cost-center — applied across resources, enforced by tag policies that reject or flag untagged resources. With reliable tags the bill can be sliced to show who and what drives spend, turning vague cost anxiety into accountable, actionable ownership.',
    source,
    generated: true,
  },
  {
    id: 7625039,
    chapter: 'Cost and Capacity Tradeoffs',
    title: 'NAT gateway data-processing charge',
    prompt:
      'A team is shocked that their NAT gateway bill scales with traffic volume, not just hours. A large fleet pulls big container images and OS packages from public registries through the NAT every deploy. What is the cheaper structural change for that traffic?',
    correct:
      'Route that traffic over private endpoints / a private mirror or cache so it bypasses the NAT’s per-GB data-processing charge, reserving NAT for genuinely internet-bound egress',
    wrong: [
      miss(
        'NAT gateways are billed purely per hour, so volume cannot be the cause',
        'NAT gateways charge both an hourly rate and a per-GB data-processing fee, so high-volume egress through them genuinely drives the bill up with traffic.',
        'NAT is not hours-only; it also charges per GB processed. High-volume pulls through it are exactly what spikes the bill.',
      ),
      miss(
        'Add more NAT gateways to spread the load and lower the total cost',
        'More NAT gateways add more hourly charges and still process the same total GB; parallelizing does not reduce the per-GB data-processing cost of that traffic.',
        'More NAT gateways means more fixed cost and the same GB processed. Volume-based charges do not shrink by adding gateways.',
      ),
      miss(
        'Move all instances to public subnets so they skip the NAT entirely',
        'Public subnets remove the NAT but expose instances inbound to the internet, trading a cost issue for a serious security exposure rather than solving it cleanly.',
        'Skipping NAT via public subnets buys exposure you do not want. Keep instances private and bypass NAT with private paths.',
      ),
    ],
    lesson:
      'A NAT gateway bills both per hour and per GB of data processed, so high-volume egress (pulling large images and packages every deploy) can dominate the cost. For traffic to provider services or registries, private endpoints, a VPC-internal registry mirror, or a caching layer can bypass the NAT’s per-GB charge, leaving the NAT for the genuinely internet-bound egress it is meant for.',
    source,
    generated: true,
  },
  {
    id: 7625040,
    chapter: 'Cost and Capacity Tradeoffs',
    title: 'Caching to relieve a hot read path',
    prompt:
      'A product page hammers the database with the same expensive read query thousands of times a second, and read replicas are getting expensive. Most of these reads return identical results for minutes. What is the most cost-effective relief?',
    correct:
      'Put a cache in front of the hot read with a short TTL (and explicit invalidation on update), so repeated identical reads are served from cache instead of the database',
    wrong: [
      miss(
        'Vertically scale the primary database to the largest instance to absorb the reads',
        'A bigger primary still recomputes the same query repeatedly and costs more continuously; it does not eliminate the redundant work the way caching identical results does.',
        'A bigger box still recomputes the same query endlessly. Caching removes the redundant work rather than paying for more of it.',
      ),
      miss(
        'Disable caching everywhere to guarantee every read is perfectly fresh',
        'Disabling caching is the opposite of the fix and forces every identical read back onto the database; freshness is handled by TTL and invalidation, not by removing the cache.',
        'Removing caching sends all the load back to the database. Freshness comes from TTL and invalidation, not no cache.',
      ),
      miss(
        'Add many more read replicas until the per-replica load is tiny',
        'Piling on replicas scales cost roughly linearly to brute-force a read pattern that is highly cacheable; caching the identical results is far cheaper than buying ever more replicas.',
        'More replicas is brute force for a cacheable pattern. Identical repeated reads are exactly what a cache is for.',
      ),
    ],
    lesson:
      'When the same expensive read returns identical results for a window of time, a cache in front of it collapses thousands of repeated database hits into one computation per TTL, cutting both load and cost. Manage staleness with a short TTL and explicit invalidation on writes — not by disabling caching or buying ever more replicas to recompute the same answer.',
    source,
    generated: true,
  },

  // ---------------------------------------------------------------------------
  // Chapter 7: Data Protection and Disaster Recovery
  // ---------------------------------------------------------------------------
  {
    id: 7625041,
    chapter: 'Data Protection and Disaster Recovery',
    title: 'The 3-2-1-1-0 evolution',
    prompt:
      'A modern backup standard extends 3-2-1 to 3-2-1-1-0 specifically to counter ransomware and silent restore failures. What do the added "1" and "0" mean?',
    correct:
      'The extra "1" is one immutable or air-gapped copy that cannot be altered or deleted; the "0" means zero restore errors, verified by regularly testing recoverability',
    wrong: [
      miss(
        'The extra "1" means one more on-site copy and the "0" means zero cost backups',
        'The added "1" is specifically an immutable/air-gapped copy (not just another on-site one), and "0" refers to zero recovery errors via testing, not free backups.',
        'The extra copy must be immutable/air-gapped, and the 0 is about verified restores, not pricing.',
      ),
      miss(
        'The "1" means one administrator owns all backups and "0" means zero admins can touch them',
        'The numbers describe copy properties and restore verification, not custody or admin counts; this misreads both digits.',
        'These digits are not about who owns or touches backups. Think immutable copy and verified-zero-error restores.',
      ),
      miss(
        'The "1" means one cloud region and the "0" means zero replication lag',
        'Region count and replication lag are unrelated to the rule’s extension; the additions are an immutable copy and proven, error-free recoverability.',
        'It is not about regions or lag. The additions target ransomware (immutable copy) and untested restores (zero errors).',
      ),
    ],
    lesson:
      'The 3-2-1-1-0 rule keeps 3-2-1 (three copies, two media, one off-site) and adds two modern guards: "+1" an immutable or air-gapped copy that even a compromised admin or ransomware cannot modify or delete, and "+0" zero recovery errors — proven by routinely testing that the backups actually restore. Together they close the gaps of backups that are reachable by attackers or never verified.',
    source,
    generated: true,
  },
  {
    id: 7625042,
    chapter: 'Data Protection and Disaster Recovery',
    title: 'Why immutable backups beat a privileged-admin backup',
    prompt:
      'Ransomware in a recent class of attacks first deletes or encrypts the victim’s backups using stolen admin credentials, then encrypts production. Why does an immutable backup copy defeat this where a normal admin-managed backup does not?',
    correct:
      'An immutable copy cannot be modified or deleted for its retention period even by a valid admin account, so stolen admin credentials cannot destroy it before the ransom demand',
    wrong: [
      miss(
        'Because immutable backups are encrypted and ransomware cannot encrypt already-encrypted data',
        'Immutability is about preventing modification/deletion during retention, not about double-encryption; ransomware can encrypt or delete a non-immutable encrypted backup just fine.',
        'The protection is un-deletability during retention, not that encryption blocks encryption. Admins can still delete normal encrypted backups.',
      ),
      miss(
        'Because immutable backups are stored faster, so they finish before the ransomware runs',
        'Speed is irrelevant; the defense is that the copy is locked against deletion/alteration regardless of timing, not that it is written quickly.',
        'Timing is not the mechanism. The copy is locked against change/deletion, so credentials cannot undo it.',
      ),
      miss(
        'Because immutable backups automatically detect ransomware and refuse to back up infected files',
        'Immutability does not scan for malware; it simply prevents the stored copy from being altered or removed during its retention window.',
        'Immutability is not malware detection. It is a write-once retention lock that stolen credentials cannot override.',
      ),
    ],
    lesson:
      'Modern ransomware targets backups first, using stolen privileged credentials to delete or encrypt them so the victim has no recovery option but to pay. An immutable (write-once, retention-locked) or air-gapped copy cannot be altered or deleted during its retention period even by a legitimate admin account, so it survives credential theft. That surviving clean copy is what turns a ransom event into a restore.',
    source,
    generated: true,
  },
  {
    id: 7625043,
    chapter: 'Data Protection and Disaster Recovery',
    title: 'Encryption at rest does not stop a compromised app',
    prompt:
      'A datastore is encrypted at rest. An attacker steals the application’s valid database credentials and queries data through the app as normal. Does encryption at rest protect the data here, and why?',
    correct:
      'No: encryption at rest protects against theft of the physical media; an authenticated query path automatically decrypts data, so a compromised app with valid credentials reads it in the clear',
    wrong: [
      miss(
        'Yes: encryption at rest makes the data unreadable to anyone, including authenticated callers',
        'Encryption at rest transparently decrypts for authorized access; an authenticated caller receives plaintext, so valid credentials defeat it. It only stops someone with the raw storage but no access.',
        'At-rest encryption decrypts transparently for authorized access. Valid credentials get plaintext; it is not a control against authenticated misuse.',
      ),
      miss(
        'Yes: the attacker would need the encryption key, which the app never has',
        'The app does not need the raw key; the storage layer decrypts on authorized read, so the app simply receives decrypted results without ever handling the key.',
        'The app never needs the key — the platform decrypts on authorized reads. So credential theft is enough to read the data.',
      ),
      miss(
        'No, but only because the data was probably not encrypted in transit either',
        'The transit question is separate; even with perfect TLS, an authenticated query through a compromised app still returns decrypted data, which is the actual gap.',
        'In-transit encryption is a different layer. Even with it, an authenticated compromised app still reads plaintext results.',
      ),
    ],
    lesson:
      'Encryption at rest defends against someone obtaining the raw storage (a stolen disk, a discarded volume, a copied snapshot) without authorized access. It transparently decrypts for any authenticated, authorized request, so an attacker who steals valid application credentials and queries through the normal path reads plaintext. Defending against that requires least privilege, credential protection, and defense in depth — not storage encryption alone.',
    source,
    generated: true,
  },
  {
    id: 7625044,
    chapter: 'Data Protection and Disaster Recovery',
    title: 'Snapshot vs backup vs replication',
    prompt:
      'A team conflates three data-protection mechanisms. Which description correctly separates a snapshot, a backup, and replication?',
    correct:
      'A snapshot is a point-in-time copy often on the same platform; a backup is an independent, retained copy ideally off-platform/off-site; replication is a continuously synced live copy for availability',
    wrong: [
      miss(
        'They are interchangeable; any one of the three fully substitutes for the others',
        'They protect against different failures — snapshots for quick local rollback, backups for independent recovery, replication for availability — and do not substitute for one another.',
        'Each guards a different failure mode. None of the three fully replaces the others.',
      ),
      miss(
        'A backup is a live synced copy and replication is a retained off-site archive',
        'This swaps them: replication is the continuously synced live copy, while a backup is the retained, independent (often off-site) copy — and the live copy does not give point-in-time recovery.',
        'You have backup and replication reversed. The live synced copy is replication; the retained independent copy is the backup.',
      ),
      miss(
        'A snapshot stored on the same system is a complete off-site backup',
        'A same-system snapshot shares the fate of that system; if the platform is lost or compromised, the snapshot can go with it, so it is not an off-site backup.',
        'A same-platform snapshot shares the platform’s fate. An off-site backup must survive loss of the source system.',
      ),
    ],
    lesson:
      'Snapshots are fast point-in-time copies, usually on the same storage platform — great for quick rollback but sharing the platform’s fate. Backups are independent, retained copies, ideally off-platform and off-site, that survive loss of the source. Replication keeps a continuously synced live copy for availability but propagates bad writes. A resilient posture uses them together, because each addresses a different failure.',
    source,
    generated: true,
  },
  {
    id: 7625045,
    chapter: 'Data Protection and Disaster Recovery',
    title: 'Test the restore, not just the backup',
    prompt:
      'Backups have run "successfully" for a year. During a real outage the restore fails because the backups were missing a required dependency and no one had ever tried recovering. What practice would have caught this?',
    correct:
      'Regular restore (recovery) testing that actually rebuilds the system from backups and verifies it works, not just confirmation that the backup job completed',
    wrong: [
      miss(
        'Checking the backup job’s green "success" status more frequently',
        'A green backup job only proves bytes were written; it never exercises recovery, so a structurally unrestorable backup still reports success right up until the failed restore.',
        'A successful backup job is not a successful restore. Only actually restoring proves recoverability.',
      ),
      miss(
        'Increasing backup frequency so there are more copies to choose from',
        'More frequent copies of an unrestorable backup just multiply useless copies; quantity does not fix a recovery process that was never tested.',
        'More copies of a broken backup is more broken copies. The gap is untested recovery, not too few backups.',
      ),
      miss(
        'Storing backups in a second region for extra durability',
        'Geographic redundancy protects the copies but does nothing to prove they can be restored; an untested backup in two regions fails to recover in both.',
        'Extra locations protect copies, not restorability. An untested backup fails everywhere it is stored.',
      ),
    ],
    lesson:
      'A completed backup job proves data was written, not that it can bring a system back. Restore testing periodically rebuilds from backups in a real (or isolated) environment and verifies the result actually works, catching missing dependencies, bad credentials, and broken procedures before a crisis. "We back up" is a claim; "we restored last month" is the evidence — which is exactly what the "0" (zero recovery errors) in 3-2-1-1-0 demands.',
    source,
    generated: true,
  },
  {
    id: 7625046,
    chapter: 'Data Protection and Disaster Recovery',
    title: 'Secrets manager vs env vars in the repo',
    prompt:
      'An app reads its database password from an environment variable defined in a .env file that is committed to the git repository. A reviewer wants this fixed. What is the right pattern?',
    correct:
      'Store the secret in a managed secrets store and inject it at runtime with rotation and access control; never commit secrets to source control',
    wrong: [
      miss(
        'Keep the .env in the repo but encrypt the whole repository so the secret is safe',
        'Repository-level encryption does not stop everyone with repo access from reading the secret, and decrypted checkouts expose it; secrets belong outside source control in a managed store.',
        'Encrypting the repo still hands the secret to everyone who can read it. Secrets should not live in source control at all.',
      ),
      miss(
        'Move the secret into the application’s compiled binary so it is not in plain text',
        'Embedding a secret in a binary is trivially extractable and still hardcodes a static credential; it is security by obscurity, not protection or rotation.',
        'Baking it into the binary is just hiding, not protecting. It is still a static, extractable hardcoded secret.',
      ),
      miss(
        'Add .env to .gitignore and assume the already-committed secret is now safe',
        'Gitignoring prevents future commits but the secret is already in git history and any clone; it must be rotated and moved to a secrets store, not just ignored going forward.',
        '.gitignore helps the future, not the leak already in history. Rotate it and move to a managed secrets store.',
      ),
    ],
    lesson:
      'Secrets must not live in source control: anything committed persists in history and every clone. The correct pattern is a managed secrets store (with access control, auditing, and rotation) that injects credentials at runtime, so there is no static secret in the repo or image. If a secret was already committed, gitignoring it is not enough — rotate it and remove it from the workflow.',
    source,
    generated: true,
  },

  // ---------------------------------------------------------------------------
  // Chapter 8: Incident Response and On-Call
  // ---------------------------------------------------------------------------
  {
    id: 7625047,
    chapter: 'Incident Response and On-Call',
    title: 'MTTD, MTTA, MTTR distinguished',
    prompt:
      'A post-incident review wants to find where time is lost. Which mapping of MTTD, MTTA, and MTTR is correct?',
    correct:
      'MTTD is time from failure to detection; MTTA is time from alert to acknowledgment; MTTR is time from detection/alert to resolution',
    wrong: [
      miss(
        'MTTD is mean time to deploy, MTTA is mean time to approve, MTTR is mean time to release',
        'These are deployment terms, not incident metrics; the incident metrics measure detection, acknowledgment, and resolution, not deploy/approve/release.',
        'These are release words, not incident metrics. The incident trio is about detecting, acknowledging, and resolving.',
      ),
      miss(
        'MTTD measures repair difficulty, MTTA measures alert volume, MTTR measures team size',
        'None of these is correct: MTTD is detection latency, MTTA is acknowledgment latency, and MTTR is resolution time — all durations, not difficulty, volume, or headcount.',
        'These are all durations in the incident timeline, not difficulty, volume, or staffing.',
      ),
      miss(
        'All three measure the same total downtime from three different dashboards',
        'They measure distinct, sequential intervals of the incident timeline; collapsing them hides exactly where time is lost — detection, response, or repair.',
        'They are separate segments of the timeline, not one number. Distinguishing them is how you find the slow stage.',
      ),
    ],
    lesson:
      'These metrics break the incident timeline into stages: MTTD (mean time to detect) is failure to detection, MTTA (mean time to acknowledge) is alert to a human starting work, and MTTR (mean time to resolve/repair) is detection to service restored. Measuring them separately shows whether you lose time in monitoring, in response coverage, or in the fix itself — each of which has a different remedy.',
    source,
    generated: true,
  },
  {
    id: 7625048,
    chapter: 'Incident Response and On-Call',
    title: 'The incident commander role',
    prompt:
      'During a chaotic SEV-1, three engineers are independently making conflicting changes and no one is updating stakeholders. What role is missing, and what does it do?',
    correct:
      'An incident commander, who coordinates the response, assigns roles, owns decisions and comms, and is deliberately not the person hands-on-keyboard fixing',
    wrong: [
      miss(
        'A second on-call engineer, so more people can make fixes in parallel',
        'Adding more hands without coordination increases the conflicting-changes problem; what is missing is coordination and a single decision-owner, not more fixers.',
        'More fixers without a coordinator worsens the chaos. The gap is who is directing, not who is typing.',
      ),
      miss(
        'A manager to assign blame in real time so people work harder',
        'Real-time blame degrades the response and discourages honest information; the role needed is neutral coordination of the response, not pressure or fault-finding.',
        'Blame during an incident is counterproductive. The missing role coordinates the response, it does not assign fault.',
      ),
      miss(
        'The most senior engineer should just take the keyboard and fix it alone',
        'One person heads-down on the fix cannot also coordinate roles, decisions, and stakeholder comms; the commander role exists precisely to separate coordination from hands-on repair.',
        'Coordinating and fixing at once is the problem. The commander directs while others do hands-on work.',
      ),
    ],
    lesson:
      'The incident commander owns the response, not the keyboard: they establish a single source of truth, assign roles (ops/fixers, comms/scribe, liaison), make and record decisions, and keep stakeholders informed. Separating coordination from hands-on repair prevents conflicting changes and dropped communication, which is exactly the failure mode of a leaderless SEV-1.',
    source,
    generated: true,
  },
  {
    id: 7625049,
    chapter: 'Incident Response and On-Call',
    title: 'Acknowledged is not resolved',
    prompt:
      'An on-call engineer acknowledges a page (the alert stops re-firing), then gets pulled into a meeting and forgets it. The underlying problem persists for an hour. What confusion does this illustrate, and how should the process guard against it?',
    correct:
      'Conflating acknowledgment with resolution; acknowledgment only means someone is aware, so the process needs re-escalation timers and explicit resolution/verification before closing',
    wrong: [
      miss(
        'Nothing is wrong; once an alert is acknowledged the incident is effectively handled',
        'Acknowledgment only signals awareness, not a fix; treating it as handled is exactly how the problem persisted unaddressed for an hour.',
        'Acknowledged means "someone saw it," not "it is fixed." Closing on acknowledgment is the trap here.',
      ),
      miss(
        'The alert was too sensitive; making it re-fire less often would solve this',
        'Reducing re-firing would actually hide the unresolved problem longer; the issue is no resolution step or re-escalation, not alert sensitivity.',
        'Quieting the alert hides the unresolved issue. The gap is resolution tracking and re-escalation, not sensitivity.',
      ),
      miss(
        'The engineer should never acknowledge alerts until the fix is fully deployed',
        'Not acknowledging would leave the page escalating with no one owning it; the answer is to acknowledge and then track to verified resolution, not to withhold acknowledgment.',
        'Withholding acknowledgment leaves the page ownerless. Acknowledge, then drive to verified resolution.',
      ),
    ],
    lesson:
      'Acknowledgment means a human is aware and engaging; resolution means the problem is actually fixed and verified. Conflating them lets incidents silently stall after the alert quiets. Good on-call tooling re-escalates if an acknowledged incident is not resolved within a window and requires an explicit, verified resolution before the incident is closed — so awareness never masquerades as a fix.',
    source,
    generated: true,
  },
  {
    id: 7625050,
    chapter: 'Incident Response and On-Call',
    title: 'A clean on-call handoff',
    prompt:
      'An on-call shift ends mid-incident. What makes the handoff to the next on-call safe rather than a dropped baton?',
    correct:
      'A structured handoff that transfers current state, what has been tried, active hypotheses, open actions, and stakeholder/comms status — not just "good luck, there is a thing happening"',
    wrong: [
      miss(
        'Forwarding the alert email and logging off immediately',
        'A forwarded alert conveys none of the investigation context; the incoming engineer restarts from scratch, losing the hour of work and risking repeating ruled-out steps.',
        'An alert with no context forces a restart. The next person needs what was tried and what is suspected, not just the page.',
      ),
      miss(
        'Telling the incoming engineer to read the chat history later if they have time',
        '"Read it later if you have time" leaves a live incident without transferred ownership or a synthesized picture; raw chat scrollback is not a substitute for an explicit briefing.',
        'Raw scrollback later is not a handoff. Ownership and a synthesized current-state briefing must transfer explicitly now.',
      ),
      miss(
        'Closing the incident at shift end and letting the next shift open a fresh one',
        'Closing an unresolved incident erases its history and continuity; reopening as new loses the timeline, the tried steps, and the accountability the original incident carried.',
        'Closing an unresolved incident destroys continuity and the timeline. Hand it over open, do not reset it.',
      ),
    ],
    lesson:
      'A safe handoff transfers a synthesized picture: current impact and status, what has been tried and ruled out, the leading hypotheses, open action items and owners, and where stakeholder communication stands. The point is continuity of context and ownership so the incoming engineer continues the response rather than restarting it. Forwarding an alert or pointing at chat scrollback drops exactly that context.',
    source,
    generated: true,
  },
  {
    id: 7625051,
    chapter: 'Incident Response and On-Call',
    title: 'Status-page comms during an outage',
    prompt:
      'Customers are hitting errors and flooding support, but the company posts nothing until the incident is fully resolved three hours later. What does mature incident communication do instead?',
    correct:
      'Post an early acknowledgment that you are aware and investigating, then regular honest updates at a stated cadence, even before the cause or fix is known',
    wrong: [
      miss(
        'Stay silent until you have a complete root cause, to avoid saying anything inaccurate',
        'Silence during an outage drives support load and erodes trust; you can truthfully say "we are aware and investigating" without yet knowing the cause, and update as you learn.',
        'You can be honest before you know the cause. Silence costs trust and floods support more than a careful early update.',
      ),
      miss(
        'Post once that everything is fine to reassure customers while you investigate',
        'Claiming all is well during a real outage is false reassurance that destroys credibility when customers plainly see errors; updates must be honest, not soothing.',
        'False reassurance is worse than silence. Customers see the errors; dishonest updates burn credibility fast.',
      ),
      miss(
        'Only notify the single customer who complained loudest, privately',
        'A broad outage affects many customers, most of whom will not complain but are still impacted; a public status update serves all of them and reduces overall support load.',
        'One private reply ignores everyone else affected. A public status update reaches all impacted customers at once.',
      ),
    ],
    lesson:
      'During customer-impacting incidents, communicate early and honestly: acknowledge awareness and that you are investigating, give regular updates at a committed cadence, and avoid both silence and false "all clear" claims. Customers tolerate problems far better than uncertainty, and a public status page reduces support load while protecting trust. Comms is a first-class incident workstream, owned, not an afterthought.',
    source,
    generated: true,
  },
  {
    id: 7625052,
    chapter: 'Incident Response and On-Call',
    title: 'A runbook turns tribal knowledge into a repeatable response',
    prompt:
      'Every time a particular queue backs up, only one veteran engineer knows the recovery steps, so incidents stall when they are unavailable. What artifact fixes this, and what must it contain to be useful at 3am?',
    correct:
      'A runbook with the concrete detection signals, step-by-step diagnostic and recovery actions, and clear escalation criteria, so any on-call engineer can execute it without the veteran',
    wrong: [
      miss(
        'A note that says "ask the veteran engineer" pinned in the channel',
        'Pointing at one person reproduces the single-point-of-failure; the whole problem is that they are not always available, so the response is still blocked.',
        'Deferring to one person is the failure, not the fix. The knowledge must be written so anyone can act.',
      ),
      miss(
        'A high-level architecture diagram of the queue system',
        'A diagram explains structure but does not give the operator the specific actions to take under pressure; at 3am you need executable steps, not just context.',
        'A diagram shows the shape, not the steps. The on-call needs concrete actions, not just architecture.',
      ),
      miss(
        'A policy stating that queue incidents must always be SEV-1',
        'A severity label sets urgency but provides no recovery procedure; the engineer still does not know what to do, only how loudly to worry.',
        'A severity rule tells you how urgent, not what to do. The gap is the actual recovery procedure.',
      ),
    ],
    lesson:
      'A runbook converts one expert’s tribal knowledge into a repeatable procedure: how to recognize the condition, the concrete diagnostic and recovery steps in order, and when/how to escalate. Written for the tired 3am on-call rather than the author, it removes the single-point-of-failure and shortens MTTR. Good incidents end by improving or creating the runbook, not by re-teaching the same person’s memory.',
    source,
    generated: true,
  },
])
