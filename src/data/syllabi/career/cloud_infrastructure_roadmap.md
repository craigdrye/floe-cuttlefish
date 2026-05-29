# Cloud / Infrastructure Roadmap
**ID**: `cloudInfrastructureRoadmap` - **Discipline**: Technology - **Level**: Career

## Course Aim
This course teaches the working vocabulary and decision-making of cloud and platform engineering: the language platform teams actually use when they talk about identity, networks, deployments, observability, reliability, cost, and operational ownership. The goal is not to memorize one vendor's console but to read a system, locate the failure domain that matters, and say what decision needs making and who owns it.

A learner who finishes this course should be able to sit in a platform review and follow the argument. They should be able to tell the difference between a resource signal and a user-impact signal, between a recoverable outage and an unrecoverable one, between a cost that is waste and a cost that is buying reliability. They should know why a database in a public subnet is a finding, why an emergency console fix becomes tomorrow's outage, and why "the dashboard is green" is not the same as "the customer is happy."

The voice is adult and practical. Every question is built around a realistic scenario a junior platform engineer, SRE, or technically literate manager would actually meet, and every wrong answer is a plausible mistake rather than an obvious joke. Where vendors differ, the course stays concept-first (failure domains, blast radius, least privilege, error budgets) and names a specific service only when the concept is easier to anchor that way.

## Course Design Notes
Route questions here when they test cloud architecture, infrastructure operations, access control, VPC and network design, container orchestration, deployment and change safety, monitoring and tracing, incident response, reliability targets, backup and disaster recovery, or cost and capacity tradeoffs. Also route platform-team communication questions: how to explain risk, scope a fix, or push back on an unmeasurable commitment.

Keep examples vendor-neutral unless a specific service concept is the point (NAT gateway egress, savings plans vs spot, Kubernetes probes). Prefer scenarios with a clear "what's the real concern" answer and distractors that each encode a distinct, named misconception. Avoid trivia about console layouts, current pricing numbers, or API syntax — those date quickly and test recall, not judgment. The bar is: would a competent platform engineer nod at the correct answer and wince at each wrong one?

## Chapter 1: Cloud Building Blocks
- **Core questions**: What does the provider manage and what stays with the team? Which failure domain (region, AZ, edge) am I actually protecting against? Where does my data physically live?
- **Key concepts**: accounts and organizations, regions, availability zones, edge locations, compute vs storage vs managed services, the shared responsibility model, data residency and sovereignty.
- **Applied skills**: drawing a service-responsibility map; matching an architecture to the specific failure it must survive; spotting residency obligations that extend to backups, replicas, and logs.
- **Common traps**: assuming "managed" means "no configuration"; confusing multi-AZ (single-DC failure) with multi-region (regional failure); treating backups as exempt from data-residency rules; thinking edge networks can host stateful workloads.

## Chapter 2: IAM and Network Boundaries
- **Core questions**: Who can access what, and is that the minimum they need? Which paths are exposed to the internet, and should they be? How is emergency access governed?
- **Key concepts**: identities (users, roles, service accounts), least privilege and blast radius, VPC, public vs private subnets, route tables, security groups vs NACLs, NAT gateway egress, private endpoints, break-glass access.
- **Applied skills**: writing an access-and-network review checklist; narrowing an over-scoped role without breaking workloads; explaining why a private service became publicly reachable; designing audited emergency access.
- **Common traps**: over-scoping roles for convenience; relying on obscurity instead of controls; leaving stale service accounts as lateral-movement footholds; assuming a public subnet is required for outbound internet access (a private subnet plus NAT does that); storing break-glass credentials in shared notes.

## Chapter 3: Deployment and Change Safety
- **Core questions**: What could break at release time, and who downstream depends on it? How do we roll back? Is the change captured in the source of truth?
- **Key concepts**: CI/CD pipelines, infrastructure as code and configuration drift, blue-green and canary deployments, rollback vs roll-forward, backward-compatible contract changes, feature-flag lifecycle, DNS TTL and cutover timing, migrations.
- **Applied skills**: writing a deployment risk note; planning a staged rollout with a recovery path; reconciling an emergency console fix back into code; designing a flag with an owner and an expiry.
- **Common traps**: assuming downstream services adapt instantly to a contract change; leaving IaC drift so the next apply re-imposes the broken state; letting temporary feature flags become permanent; forgetting DNS caches honor TTLs, not intentions; treating rollback as automatic when state migrations are involved.

## Chapter 4: Containers and Orchestration
- **Core questions**: Is this container alive, and is it ready for traffic? Why is one instance overloaded? How does the scheduler decide what runs where?
- **Key concepts**: containers vs images vs registries, pods and replicas, the scheduler, liveness vs readiness vs startup probes, resource requests and limits, horizontal autoscaling, rollout and rolling-update strategy, load-balancer health checks and session stickiness.
- **Applied skills**: distinguishing "restart this container" (liveness) from "stop sending it traffic" (readiness); diagnosing uneven load behind a balancer; sizing requests so the scheduler can place work without OOM kills.
- **Common traps**: using a liveness probe where a readiness probe is needed (restart loops instead of traffic pausing); setting no resource limits so one pod starves its neighbors; assuming sticky sessions are a default; restarting healthy instances and worsening an overload.

## Chapter 5: Observability and Reliability
- **Core questions**: Is the system actually unhealthy, or just busy? Which signal proves user impact? What reliability target did we commit to, and can we measure it?
- **Key concepts**: logs vs metrics vs traces, the four golden signals (latency, traffic, errors, saturation), SLI/SLO/SLA, error budgets and burn rate, alert quality and fatigue, synthetic and real-user monitoring, failure domains and single-zone risk, failover that the application can actually recover from.
- **Applied skills**: planning a reliability dashboard tied to the customer journey; defining an SLO with measurement and cost before committing; reading a burn rate to decide whether to escalate; testing that applications reconnect after a database failover.
- **Common traps**: treating resource metrics (CPU) as user-impact metrics (checkout latency); promising a high availability number with no error budget or cost discussion; declaring failover a success when only the database side recovered; alerting on causes instead of symptoms and burning out on-call.

## Chapter 6: Cost and Capacity Tradeoffs
- **Core questions**: Where is the waste, and which cost cut would actually buy back reliability or buy down risk? What needs forecasting before it bites?
- **Key concepts**: autoscaling vs reserved capacity, on-demand vs reserved instances vs savings plans vs spot, right-sizing, storage tiers and lifecycle policies, cross-AZ and cross-region egress, cost allocation and tagging, account quotas and limits, read replicas and caching for scale.
- **Applied skills**: building a cloud cost action list; choosing the right commitment model for a workload's stability and flexibility; scheduling and rightsizing nonproduction; tracking quotas before a peak; deciding when caching, replicas, or query work fixes a hot database.
- **Common traps**: vertical-scaling a database without diagnosing the read/write split; running spot for interruption-intolerant workloads; ignoring egress as the hidden line item; leaving nonprod running on weekends; treating account quotas as soft suggestions; disabling caching wholesale to fix one stale page instead of invalidating it.

## Chapter 7: Data Protection and Disaster Recovery
- **Core questions**: How much data can we lose, and how long can we be down? Have we actually tested the restore, or only the backup? Is one copy enough?
- **Key concepts**: RPO (recovery point objective) vs RTO (recovery time objective), the 3-2-1 backup rule and its 3-2-1-1-0 evolution, immutable and air-gapped copies, snapshots vs replication vs backup, encryption at rest and in transit, secrets management vs hardcoded credentials, restore testing.
- **Applied skills**: setting RPO/RTO from business impact rather than gut feel; explaining why replication is not a backup; specifying an off-site, immutable copy; rotating a leaked secret instead of just patching around it.
- **Common traps**: confusing RPO with RTO; assuming a replica protects against accidental deletion or ransomware (it replicates the deletion too); never testing the restore; storing secrets in code or environment files committed to a repo; treating encryption at rest as protection against a compromised application.

## Chapter 8: Incident Response and On-Call
- **Core questions**: How bad is this, and who owns the response right now? What do we tell customers? How do we make sure it cannot happen the same way again?
- **Key concepts**: severity levels (SEV-1/2/3), incident commander and roles, MTTD/MTTA/MTTR, escalation and on-call rotation, blameless postmortems, action items with owners and deadlines, status-page and stakeholder communication, runbooks.
- **Applied skills**: assigning a severity and the right response shape; running a handoff that does not drop context; writing a blameless postmortem that targets systems not people; turning findings into owned, dated action items.
- **Common traps**: blaming the on-call engineer instead of the process gap; closing an incident with no action items; person-dependent prevention (a calendar reminder owned by "whoever remembers"); confusing acknowledgment time with resolution time; declaring resolution before verifying the fix.

## Capstone
Review a fictional cloud service and produce a platform-readiness brief. The brief must cover: the shared-responsibility split and data-residency posture; an access-and-network review (over-scoped identities, exposed paths, egress design); deployment and change-safety risks with a rollback path; container health and scaling configuration; an observability plan with golden signals and at least one SLO with an error budget; a cost action list naming one cut that reduces waste and one that would harm reliability; an RPO/RTO and backup posture with a tested restore; and an incident-response plan with severity tiers and a blameless postmortem template. The brief should read like something a platform lead could act on in a sprint.
