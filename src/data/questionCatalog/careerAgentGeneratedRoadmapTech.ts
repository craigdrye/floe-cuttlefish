import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'
import { CAREER_TECH_SUB_TOPICS, CAREER_TECH_MENTOR_HINTS, CAREER_TECH_CORRECT_SHORTENED } from './careerTechPolish'
import { polish as runPolish } from './polishPipeline'

const SOURCE = 'Floe career technology roadmap canonical bank'

// Helper: every wrong answer carries a bespoke pedagogical "why this is wrong"
// line. No file-wide DEFAULT_FLAW constant — each distractor explanation reflects
// the specific misconception a learner might hold (see jargonBusters.ts for the
// voice; careerAgentGeneratedRoadmapFinance.ts is the pilot reference).
function q(
  id: number,
  topic: Topic,
  chapter: string,
  title: string,
  prompt: string,
  correct: string,
  wrong: [string, string][], // [label, whyWrong]
  lesson: string,
): Question {
  return makeSimpleQuestion(
    id,
    topic,
    chapter,
    title,
    prompt,
    correct,
    wrong.map(([label, why]) => [label, why, lesson] as [string, string, string]),
    lesson,
    SOURCE,
  )
}

const careerAgentGeneratedRoadmapTechBaseQuestionsByTrack: Record<string, Question[]> = {
  // ---------------------------------------------------------------------------
  // CYBERSECURITY OPERATIONS ROADMAP
  // Syllabus chapters (cybersecurity_operations_roadmap.md):
  //  1. SOC Triage and Alert Quality
  //  2. Identity, Access, and Privilege
  //  3. Endpoint, Network, and Cloud Scope
  //  4. Containment and Recovery
  //  5. Incident Communication
  // ---------------------------------------------------------------------------
  cybersecurityOperationsRoadmap: [
    // Chapter 1: SOC Triage and Alert Quality
    q(4105300, 'Career Skills', 'SOC Triage and Alert Quality', 'Alert or incident',
      'A SIEM alert shows one failed login from a known employee device. What should the analyst decide before escalating as an incident?',
      'Whether evidence shows suspicious activity beyond a routine failed authentication event',
      [
        ['Escalate every failed login as a breach', 'Treating every failed auth as a breach floods the queue and trains responders to ignore alerts; failed logins are baseline noise without enrichment.'],
        ['Authentication noise is never useful telemetry', 'Authentication alerts include the credential-stuffing and password-spray patterns analysts most need to catch; dismissing the whole signal class discards evidence.'],
        ['One failed login proves the account is compromised', 'Reactive disablement on one failed login causes user-impact and lockouts without evidence; containment should follow triage, not precede it.'],
      ],
      'Security operations separates noise from incidents by enriching alerts with identity, device, timing, location, and related activity.'),
    q(4107640, 'Career Skills', 'SOC Triage and Alert Quality', 'Reported phishing lure',
      'A finance employee reports a realistic invoice email after clicking the link but before entering credentials. What should the analyst do next?',
      'Capture the message details, check for credential entry or downloads, block the lure, and look for other recipients',
      [
        ['Close it because no password was entered', 'Click-through can deliver malware or beacon-only payloads; absence of credential entry does not prove absence of compromise.'],
        ['Ask finance to forward the email to everyone as a warning', 'Broadcasting the live lure trains users to click more samples and re-distributes the threat instead of containing it.'],
        ['Reset every company password before checking scope', 'A bank-wide reset on one phishing click causes massive operational impact and tips an attacker without first scoping who was actually exposed.'],
      ],
      'Phishing triage follows the evidence. Even without credential entry, the team should contain the lure and determine who else received it.'),
    q(4107948, 'Career Skills', 'SOC Triage and Alert Quality', 'Alert enrichment for VPN oddity',
      'A login alert shows a user connecting from a new country through the corporate VPN during vacation season. What should the analyst do?',
      'Enrich with device, MFA, travel, VPN egress, peer activity, and user confirmation before deciding severity',
      [
        ['Close it because vacation explains everything', 'Vacation is a hypothesis, not evidence; attackers exploit travel-season noise precisely because analysts auto-close it.'],
        ['Disable every VPN gateway immediately', 'Killing the corporate VPN for one ambiguous alert causes a self-inflicted outage with no proportionality to confirmed risk.'],
        ['Declare breach based on geography alone', 'Geo-based blanket declarations create false-positive incidents and burn responder time; geography is a signal, not a verdict.'],
      ],
      'Identity alerts need context. Enrichment keeps analysts from ignoring real risk or overreacting to normal travel patterns.'),
    q(4220000, 'Career Skills', 'SOC Triage and Alert Quality', 'Detection tuning vs blanket suppression',
      'A detection rule fires on every PowerShell command, creating hundreds of alerts per day, but PowerShell is also a common attacker tool. What is the tuning move?',
      'Tune to suspicious patterns and parent-child process context so analysts get actionable signal instead of raw volume',
      [
        ['Keep every alert because more alerts means more safety', 'Raw volume causes alert fatigue, the documented root cause of missed real intrusions; safety requires actionable signal, not noise.'],
        ['Delete PowerShell from every workstation', 'Removing PowerShell breaks IT, packaging, and legitimate admin automation across the fleet and creates worse shadow workarounds.'],
        ['Suppress the rule entirely', 'A blanket suppression leaves no detection on a core attacker tool; tuning narrows scope while preserving coverage.'],
      ],
      'Detection engineering is about actionable signal, not raw volume. Context, severity, and expected behavior reduce fatigue without losing coverage.'),

    // Chapter 2: Identity, Access, and Privilege
    q(4105301, 'Career Skills', 'Identity, Access, and Privilege', 'Token exposure first move',
      'A developer accidentally posts an access token in a public issue tracker. What is the best first containment action?',
      'Revoke the exposed token and rotate any affected credentials before investigating downstream use',
      [
        ['Delete the issue and keep the token active', 'Public issue trackers are scraped within minutes by indexers and credential-hunting bots; deletion does not undo exposure but revocation does.'],
        ['Wait until the next change window before doing anything', 'Change-window discipline is for planned change, not credential leaks; a live exposed token is an active access path.'],
        ['Email the developer to be more careful next time', 'Coaching the developer addresses recurrence but does nothing about the live secret currently in attacker hands.'],
      ],
      'Credential exposure is an active access risk. Revocation and rotation reduce the attacker path while investigation continues.'),
    q(4107641, 'Career Skills', 'Identity, Access, and Privilege', 'Impossible travel',
      'A user logs in from Boston, then Singapore eight minutes later — but the second login used a trusted device token. What is the best interpretation?',
      'Treat it as suspicious but validate context such as token theft, VPN behavior, device history, and user confirmation',
      [
        ['Trusted device tokens cannot be stolen', 'Trusted-device tokens are a frequent target of session-token theft (e.g., infostealers); the trust label means nothing if the token was stolen.'],
        ['Declare a breach from geography alone', 'A corporate VPN egress or roaming SIM can produce impossible-travel signals without any compromise; geography needs corroboration.'],
        ['Delete the user account to save time', 'Account deletion destroys identity history needed for the investigation and creates downstream service breakage.'],
      ],
      'Identity alerts need context. Impossible travel can be benign or serious, and trusted sessions can still be abused.'),
    q(4107647, 'Career Skills', 'Identity, Access, and Privilege', 'Emergency admin access',
      'An engineer needs temporary production admin access to fix an outage. What control makes this reasonable?',
      'Time-bound, approved access with logging, clear purpose, and removal after the emergency',
      [
        ['Permanent admin access because the engineer was helpful once', 'Emergency rights that never expire become standing privilege — the exact pattern dormant-admin findings flag every audit cycle.'],
        ['A shared password in a team chat note', 'Shared credentials in chat have no individual attribution and persist long after the incident; logging and approval evaporate.'],
        ['No emergency access path because purity feels safer', 'Without a designed break-glass route, responders invent ungoverned workarounds during outages; design beats prohibition.'],
      ],
      'Emergency access can be necessary, but it should be bounded and auditable so urgency does not become standing privilege.'),
    q(4105374, 'Career Skills', 'Identity, Access, and Privilege', 'Dormant admin',
      'A former project admin still has privileged access three months after leaving the team. What control should catch this?',
      'Periodic access review tied to role changes and least-privilege cleanup',
      [
        ['Keep old access because it might be nostalgic', 'Nostalgia is not a control; dormant privilege is a common foothold path in post-incident reports.'],
        ['Only review access after a breach', 'Reactive reviews leave standing privilege exposed across the gap; preventive reviews catch the problem before it is exploited.'],
        ['Let every admin set their own access expiry date', 'Self-managed expiry has no audit trail and produces inconsistent enforcement across teams.'],
      ],
      'Access reviews reduce stale privilege. Role changes, departures, and project endings should trigger cleanup before dormant access becomes risk.'),
    q(4107963, 'Career Skills', 'Identity, Access, and Privilege', 'Shared admin password',
      'An investigation finds attackers used a shared local admin password across several servers. What containment issue does this raise?',
      'The need to rotate shared credentials, identify all exposed systems, remove reuse, and validate access paths',
      [
        ['Change only the server that alerted', 'Single-server rotation leaves the reused credential valid on every other host; lateral movement continues unimpeded.'],
        ['Leave the password because everyone knows it already', '"Everyone knows it" is precisely why it is now in attacker hands; secret value comes from non-disclosure.'],
        ['Rename the local admin account to confuse attackers', 'Account renaming is trivially defeated by enumeration and ignores the actual issue, which is the shared secret value.'],
      ],
      'Shared credentials expand blast radius. Containment must account for every system where the credential works.'),

    // Chapter 3: Endpoint, Network, and Cloud Scope
    q(4105303, 'Career Skills', 'Endpoint, Network, and Cloud Scope', 'Lateral movement clue',
      'An endpoint alert shows unusual remote admin tool use from one workstation to several servers. What should the analyst consider?',
      'Possible lateral movement that requires host, account, and network investigation',
      [
        ['A normal screen saver update', 'Remote admin tool execution is not a screen-saver behavior; the pattern is workstation-initiated remote sessions to multiple internal hosts.'],
        ['Proof that all servers are patched', 'Remote admin activity says nothing about patch state; it only says something about who is connecting where.'],
        ['A billing issue unrelated to security', 'License or billing telemetry does not generate inbound admin sessions on multiple servers.'],
      ],
      'Remote admin patterns can be legitimate or hostile. The analyst should test whether behavior fits expected administration.'),
    q(4105305, 'Career Skills', 'Endpoint, Network, and Cloud Scope', 'Public bucket exposure',
      'A storage bucket containing internal reports is accidentally made public. What is the best response sequence?',
      'Restrict access, preserve evidence, assess exposure, rotate any embedded secrets, and document impact',
      [
        ['Rename the bucket only', 'Renaming changes the URL but does not change the access policy; the underlying ACL still permits anonymous read.'],
        ['Obscure bucket names prevent discovery', 'Bucket-name enumeration is automated against entire cloud provider namespaces; obscurity is not access control.'],
        ['Move the files to another public bucket', 'Re-uploading to a second public bucket re-exposes the same data under a new URL; the exposure problem moves with the files.'],
      ],
      'Cloud exposure response starts with access control, then determines what data was exposed and what secondary risks exist.'),
    q(4107951, 'Career Skills', 'Endpoint, Network, and Cloud Scope', 'Root account sign-in',
      'A cloud root account signs in successfully after months of no use. What should security check first?',
      'MFA status, source, actions taken, credential exposure, emergency justification, and whether root should be locked down',
      [
        ['Root logins are normal maintenance activity', 'Root account use is rare by design; unexplained logins are precisely the high-severity case the account exists to flag.'],
        ['Delete the root account', 'Cloud providers require a root account for the tenancy and several recovery operations; deletion is not possible and destroys break-glass capability.'],
        ['Wait for the monthly cloud bill to see if charges look unusual', 'Billing review is a lagging signal — by the time anomalous spend appears, the attacker has had weeks of access.'],
      ],
      'Root account use is high-risk and should be rare. Investigation should combine identity evidence with cloud activity.'),
    q(4107950, 'Career Skills', 'Endpoint, Network, and Cloud Scope', 'Suspicious scheduled task',
      'An endpoint alert shows a new scheduled task launching a script from a user temp folder. What is the best next step?',
      'Investigate persistence, script contents, process lineage, affected account, and whether similar tasks exist elsewhere',
      [
        ['Delete the task and call the mystery solved', 'Deleting the task without analysis destroys evidence and leaves the original delivery vector — and any other persistence — untouched.'],
        ['Ask the script politely what it wants', 'Anthropomorphising malware is not analysis; binary inspection and sandboxing are.'],
        ['Temp-folder scripts are harmless by location', 'Attackers explicitly stage in user-writable temp paths to bypass AppLocker and similar policies — temp is a feature for them, not a downside.'],
      ],
      'Persistence clues deserve scoping. Analysts should understand how the task arrived, what it runs, and whether the pattern spread.'),
    q(4107651, 'Career Skills', 'Endpoint, Network, and Cloud Scope', 'Flat network blast radius',
      'A compromised kiosk can reach internal finance systems because the office network is flat. What security design would reduce this risk?',
      'Network segmentation that limits systems to the access they need',
      [
        ['Putting finance systems on louder Wi-Fi', 'Wi-Fi SSID changes do not affect routing; the kiosk still has IP reachability to finance hosts on a flat L2.'],
        ['Adding more posters about passwords', 'Awareness posters do not address the architectural problem; reachability is determined by routing and ACLs, not user behavior.'],
        ['Renaming the kiosk to sound harmless', 'Hostnames do not affect network reachability; an attacker scans IPs, not names.'],
      ],
      'Segmentation limits blast radius. Low-trust devices should not have broad paths to sensitive internal systems.'),

    // Chapter 4: Containment and Recovery
    q(4105304, 'Career Skills', 'Containment and Recovery', 'Containment versus customer impact',
      'An analyst wants to isolate a database server during an active incident, but it supports customer checkout. What should happen?',
      'Coordinate containment with incident leadership so risk reduction and business impact are both understood',
      [
        ['Never contain important systems', 'A "never contain" rule means attackers always win on critical assets — exactly the systems most worth protecting.'],
        ['Isolate it instantly without telling anyone', 'Uncoordinated isolation creates a self-inflicted outage and destroys trust with the business teams the security function depends on.'],
        ['Delete the database to be extra safe', 'Destruction is not containment; it eliminates evidence, breaks the service, and does not actually stop the attacker if backups are also reachable.'],
      ],
      'Containment decisions balance harm reduction, evidence, recovery, and operational impact. Critical systems require coordinated action.'),
    q(4107646, 'Career Skills', 'Containment and Recovery', 'Ransomware shared drive',
      'A file server shows rapid renames and encrypted extensions on shared folders. What is the strongest first move?',
      'Contain affected hosts and accounts, stop further spread, preserve evidence, and activate the incident plan',
      [
        ['Wait until every folder is encrypted to be certain', 'Confirmation arrives via the ransom note; waiting for completion guarantees maximum damage with no diagnostic benefit.'],
        ['Restore backups before stopping the active spread', 'Restoring during active encryption means the restored data gets re-encrypted; containment must precede restoration.'],
        ['Email the attackers asking for their project plan', 'Attacker communication during initial containment burns operational security and is handled — if at all — by legal and IR leadership, not the SOC analyst.'],
      ],
      'Ransomware response prioritizes containment and coordination. Recovery matters, but uncontrolled spread can keep damaging restored systems.'),
    q(4107957, 'Career Skills', 'Containment and Recovery', 'Backups never tested',
      'Leadership says ransomware risk is covered because backups exist, but no one has restored from them in a year. What should security recommend?',
      'Test restores, validate recovery time and data integrity, protect backups, and document recovery roles',
      [
        ['Backup catalog entries prove restore readiness', 'Catalog listings show inventory, not restorability; corrupt or partial backups list normally until you try them.'],
        ['Print backup names for executive confidence', 'A printed list addresses optics, not the actual untested recovery path; the gap remains.'],
        ['Restore only after an attacker asks nicely', 'Discovering an unrestorable backup mid-incident, under recovery pressure, is the worst possible time to learn the gap exists.'],
      ],
      'Backups are useful when they can be restored under pressure. Testing reveals gaps before recovery becomes urgent.'),
    q(4107960, 'Career Skills', 'Containment and Recovery', 'Forensics versus reboot',
      'A suspected compromised server is unstable, and operations wants to reboot it before security collects evidence. What should the response lead weigh?',
      'Business impact, volatile evidence, containment needs, preservation options, and documented decision rationale',
      [
        ['Always reboot first because buttons are satisfying', 'A reboot clears memory-resident malware artifacts, network sessions, and process tree evidence — the evidence most attackers count on losing.'],
        ['Never restore service no matter the outage', 'Absolute evidence preservation that prolongs a customer outage trades quantifiable business harm for marginal forensic gain.'],
        ['Let the server decide its own destiny', 'A live compromised host should not be making decisions about its own forensic state; ownership and rationale are the response lead\'s job.'],
      ],
      'Forensic choices balance evidence and operations. The decision should be intentional and documented.'),
    q(4220001, 'Career Skills', 'Containment and Recovery', 'Eradication completeness check',
      'After containing a phishing-driven incident, the team rotated passwords for the compromised user but did not investigate whether the same lure reached anyone else. What is the eradication gap?',
      'Scope was not extended to other recipients, related accounts, persistence, and detection-rule coverage for the lure pattern',
      [
        ['No gap — the compromised user was reset', 'Single-user remediation on a multi-recipient lure leaves siblings active; eradication is per-campaign, not per-user.'],
        ['Eradication finishes when the IR ticket is closed', 'Ticket closure is administrative; eradication finishes when persistence and scope are verifiably resolved.'],
        ['Eradication is the same as containment', 'Containment stops spread now; eradication removes the foothold and the conditions that allowed it. They are sequential phases.'],
      ],
      'Eradication extends beyond the first detected user. The team should sweep recipients, persistence, and detection coverage before declaring recovery.'),

    // Chapter 5: Incident Communication
    q(4105306, 'Career Skills', 'Incident Communication', 'Executive update mid-incident',
      'During an incident, leadership asks for an update before root cause is known. Which update is strongest?',
      'State confirmed facts, current impact, actions underway, unknowns, and next decision point',
      [
        ['Speculate confidently to sound decisive', 'False confidence creates downstream decisions executives will have to walk back when the speculation turns out to be wrong; trust evaporates fast.'],
        ['Share raw logs with no summary', 'Raw logs require investigative context executives lack; the update fails to support any decision and wastes leadership time.'],
        ['Say nothing until every fact is final', 'Silence during a live incident is interpreted as loss of control; bounded uncertainty is the professional posture.'],
      ],
      'Incident communication should be timely and bounded by evidence. Good updates distinguish known facts from open questions.'),
    q(4107954, 'Career Skills', 'Incident Communication', 'Two captains conflict',
      'During an incident, infrastructure and security both give conflicting instructions to responders. What should be clarified?',
      'Incident command roles, decision rights, communication channel, and escalation process',
      [
        ['Let the loudest message win', 'Volume-based decision-making during incidents produces incoherent action and is the textbook failure mode incident command exists to prevent.'],
        ['Create three more private chats', 'Adding channels fragments situational awareness further; the problem is unclear command, not insufficient bandwidth.'],
        ['Pause containment until everyone agrees emotionally', 'Consensus-pause during an active intrusion gives the attacker time; incident command is about deciding under disagreement, not eliminating disagreement.'],
      ],
      'Incident response needs clear command structure. Conflicting directions waste time and can damage evidence or operations.'),
    q(4107653, 'Career Skills', 'Incident Communication', 'Sharing indicators with partner',
      'A partner asks for indicators from an incident while the investigation is still active. What should the team share?',
      'Validated, relevant indicators through approved channels with caveats about confidence and scope',
      [
        ['Send every raw log line immediately', 'Raw logs typically contain unrelated customer and employee data, creating a privacy incident on top of the security one.'],
        ['Refuse all sharing until the annual review', 'Indicator sharing during active campaigns is its most operational use; deferring to next year removes the value entirely.'],
        ['Invent indicators so the partner has something', 'Fabricated IOCs poison partner detections with false positives and destroy the team\'s sharing credibility once detected.'],
      ],
      'Threat sharing is most useful when it is accurate and appropriately scoped. Confidence and handling rules matter.'),
    q(4107962, 'Career Skills', 'Incident Communication', 'Misleading success metric',
      'A dashboard celebrates a drop in escalated incidents, but analysts quietly admit they raised the escalation threshold to reduce workload. What should leadership ask?',
      'Whether the metric still reflects risk, investigation quality, missed incidents, and detection coverage',
      [
        ['Celebrate fewer tickets without curiosity', 'A drop in tickets due to threshold change measures policy, not risk; celebrating it rewards Goodhart\'s law gaming.'],
        ['Ban thresholds because nuance is tiring', 'Detection thresholds are a normal tool; the problem is unmeasured change, not the existence of thresholds.'],
        ['Measure only analyst happiness', 'Single-axis happiness metrics produce the exact incentive that caused this distortion; leadership needs paired quality and coverage measures.'],
      ],
      'Security metrics can hide risk when incentives shift. Leaders should pair volume measures with quality and coverage checks.'),
    q(4220002, 'Career Skills', 'Incident Communication', 'Customer notification trigger',
      'A confirmed data exposure affects an unknown number of customers, and regulators in two jurisdictions have notification windows of 72 hours. What should the incident lead drive?',
      'A timeline that maps scope investigation, legal review, regulator notification windows, and customer comms with named owners',
      [
        ['Notify nobody until forensic scope is 100 percent complete', 'Regulator clocks (e.g., GDPR Art. 33) start at awareness, not at forensic completion; waiting for 100 percent breaches the deadline.'],
        ['Notify every customer regardless of scope', 'Over-notification creates regulatory and reputational harm and obscures the actual affected population from investigators.'],
        ['Defer the decision to whichever team responds first in chat', 'Notification is a regulated decision with named owners — legal, comms, privacy — not a first-responder coin flip.'],
      ],
      'Customer and regulator communication is on a clock that starts at awareness. Incident leads sequence scope, legal review, and notification windows explicitly.'),
  ],

  // ---------------------------------------------------------------------------
  // CLOUD INFRASTRUCTURE ROADMAP
  // Syllabus chapters (cloud_infrastructure_roadmap.md):
  //  1. Cloud Building Blocks
  //  2. IAM and Network Boundaries
  //  3. Deployment and Change Safety
  //  4. Observability and Reliability
  //  5. Cost and Capacity Tradeoffs
  // ---------------------------------------------------------------------------
  cloudInfrastructureRoadmap: [
    // Chapter 1: Cloud Building Blocks
    q(4105310, 'Career Skills', 'Cloud Building Blocks', 'Shared responsibility for managed DB',
      'A team uses a managed database service. What shared-responsibility question should they ask?',
      'Which security and reliability tasks are handled by the provider and which remain with the team',
      [
        ['Whether "managed" means no configuration matters', 'Managed services still expose user-controlled settings (network, auth, backup policy) where misconfiguration is the most common cause of incidents.'],
        ['Whether the cloud provider owns all application bugs', 'Application logic running on top of the managed service is always the customer\'s responsibility; provider scope ends at the service plane.'],
        ['Whether the database name sounds modern', 'Branding has no bearing on the responsibility split; the model is defined by the service tier, not the marketing.'],
      ],
      'Managed services reduce some operational burden but do not remove customer responsibility for configuration, access, data, and application behavior.'),
    q(4220003, 'Career Skills', 'Cloud Building Blocks', 'Regions vs availability zones',
      'A team needs to survive a single data-center failure with low cross-site latency. Which architecture choice fits?',
      'Deploy across multiple availability zones within one region',
      [
        ['Deploy in a single AZ', 'A single AZ does not survive a data-center failure — that is precisely the failure domain the question describes.'],
        ['Deploy across two distant regions for low latency', 'Cross-region replication adds round-trip latency between sites; multi-region is for regional failure, not single-DC failure with low latency.'],
        ['Run on the provider\'s edge network only', 'Edge networks are for content delivery, not stateful workloads; they do not provide the durable replicated compute the scenario needs.'],
      ],
      'Regions, AZs, and edge sites are distinct failure domains. Match the architecture to the failure you actually need to survive.'),
    q(4107669, 'Career Skills', 'Cloud Building Blocks', 'Data residency',
      'A new customer requires data to stay in Germany, but the default deployment stores backups in another region. What must be addressed?',
      'Region placement, backup location, replication, and compliance controls for data residency',
      [
        ['Tell the customer backups do not count as data', 'Backups contain the same personal data the primary store does; residency rules apply identically to backups, replicas, logs, and snapshots.'],
        ['Change only the sales slide', 'Sales documentation does not change the deployment topology; the regulator audits the system, not the deck.'],
        ['Store data wherever latency has a good attitude', 'Latency is an engineering concern; residency is a legal one. Picking on latency alone violates the customer commitment.'],
      ],
      'Data residency applies to architecture details such as backups, logs, replicas, and support access, not just primary databases.'),

    // Chapter 2: IAM and Network Boundaries
    q(4105311, 'Career Skills', 'IAM and Network Boundaries', 'Over-scoped role',
      'An application role can read every bucket in the account, but it needs only one bucket. What principle is being violated?',
      'Least privilege',
      [
        ['Maximum convenience', 'Convenience is the cause, not the principle — the violated principle is least privilege.'],
        ['Round-robin routing', 'Routing is a load-balancer concept and is unrelated to IAM scope.'],
        ['Blue-green deployment', 'Blue-green is a release pattern and has nothing to do with role permission scope.'],
      ],
      'IAM roles should grant only the permissions needed. Broad permissions increase blast radius when credentials or workloads are compromised.'),
    q(4107656, 'Career Skills', 'IAM and Network Boundaries', 'Service account sprawl',
      'A platform review finds dozens of unused service accounts with broad permissions. What is the best cleanup approach?',
      'Identify owners, verify usage, remove unused accounts, and narrow permissions for those still needed',
      [
        ['Delete every identity instantly and hope services forgive', 'Bulk deletion without usage analysis causes immediate outages on the workloads still depending on those accounts.'],
        ['Keep them because old accounts feel experienced', 'Unused service accounts are the credential set most often abused in lateral movement; vintage is a risk multiplier, not a virtue.'],
        ['Move the accounts to a folder named "later"', 'Renaming the container does not change permissions or revoke trust; the accounts remain valid and exploitable.'],
      ],
      'Cloud identity hygiene reduces blast radius. Cleanup should be careful enough to avoid outages and firm enough to remove stale access.'),
    q(4107965, 'Career Skills', 'IAM and Network Boundaries', 'Break-glass account in shared note',
      'The team creates an emergency admin account but stores its password in a shared engineering note. What should be fixed?',
      'Use controlled break-glass access with strong authentication, sealed storage, logging, approval, and regular testing',
      [
        ['Keep the shared note because emergencies dislike friction', 'A break-glass credential with no approval or audit is indistinguishable from a backdoor; "frictionless" is the failure mode, not the goal.'],
        ['Delete all emergency access and hope outages are polite', 'Removing the break-glass path causes ungoverned workarounds when the next outage arrives; design beats abolition.'],
        ['Give the password a clever nickname', 'Nicknaming changes the label, not the access; the secret value remains broadly readable.'],
      ],
      'Break-glass access should be available but tightly controlled. Emergency does not mean unaudited.'),
    q(4105312, 'Career Skills', 'IAM and Network Boundaries', 'Database in public subnet',
      'A database is placed in a public subnet with open inbound access from the internet. What is the main infrastructure concern?',
      'The database is exposed beyond the likely intended network boundary',
      [
        ['It will automatically become cheaper', 'Subnet exposure is a routing and policy concern, not a billing concern; no cost saving applies.'],
        ['It proves the database is highly available', 'Public reachability is not the same as resilience; HA comes from replication and zone spread, not exposure.'],
        ['Public access replaces backups', 'Network exposure has no relationship to backup strategy; the two address different failure modes.'],
      ],
      'Network placement and security rules define exposure. Sensitive data stores usually need restricted paths and controlled access.'),
    q(4107966, 'Career Skills', 'IAM and Network Boundaries', 'Private service exposed publicly',
      'A service meant only for internal jobs is reachable from the public internet after a rushed deployment. What should the engineer review?',
      'Ingress rules, load balancer exposure, private networking, authentication, and deployment guardrails',
      [
        ['Unlinked public endpoints are effectively private', 'Internet-scanning bots discover unannotated endpoints within hours; obscurity is not a control plane.'],
        ['Rename the URL to something boring', 'URL string changes do not change the routing or ACL; the service is still publicly addressable.'],
        ['Leave it public because no one has complained yet', 'Absence of complaint during the discovery window is silence, not safety; complaints typically arrive after exploitation.'],
      ],
      'Network exposure is an architecture decision. Internal services should have controls that match their intended audience.'),

    // Chapter 3: Deployment and Change Safety
    q(4105313, 'Career Skills', 'Deployment and Change Safety', 'API contract change rollout',
      'A release changes a core API contract used by several services. What should the deployment plan include?',
      'Compatibility checks, staged rollout, monitoring, and a rollback or mitigation path',
      [
        ['A promise that dependent services will adapt instantly', 'Downstream services release on their own cycles; assuming instant adaptation breaks them at deployment.'],
        ['No monitoring because contracts are abstract', 'Contracts are tested at runtime by real callers; without monitoring, breakages surface as user-impact incidents instead of release signals.'],
        ['Deleting old clients before the release', 'Forced client deletion is more disruptive than the change itself and removes the rollback safety net.'],
      ],
      'Contract changes can break dependent systems. Safer releases plan compatibility, observation, and recovery before launch.'),
    q(4107658, 'Career Skills', 'Deployment and Change Safety', 'Console hotfix vs IaC drift',
      'An urgent console change fixed production, but the infrastructure-as-code files still show the old setting. What should happen next?',
      'Reconcile the change into code, review it, and prevent configuration drift from returning',
      [
        ['Leave the code wrong because production is right today', 'The next IaC apply will re-impose the old (broken) setting and reproduce the outage; drift is a ticking rollback.'],
        ['Ban urgent fixes even during outages', 'A blanket ban on console fixes makes outages longer; the goal is reconciliation, not prohibition.'],
        ['Tell Terraform to be less observant', 'IaC tools detect drift because that is the value proposition; suppressing detection loses the safety, not the drift.'],
      ],
      'Infrastructure drift creates future surprises. Emergency changes should be captured in the source of truth after the fire is out.'),
    q(4107970, 'Career Skills', 'Deployment and Change Safety', 'Feature flag cleanup',
      'A temporary feature flag used for a migration remains active months later and confuses every release. What should engineers do?',
      'Track flag ownership, expiry, cleanup criteria, and remove stale flag code after migration',
      [
        ['Let flags collect like office mugs', 'Old flags compound into combinatorial test surface and produce mixed-state bugs that are hard to reproduce.'],
        ['Create a second flag to control the first flag', 'Meta-flags add complexity without removing the original problem; the right move is removal, not nesting.'],
        ['Use flag names as informal release documentation', 'Code is not documentation; flags as docs degrade as the system changes and obscure intent for new engineers.'],
      ],
      'Feature flags need lifecycle management. Stale flags make behavior harder to reason about and can create risk.'),
    q(4107660, 'Career Skills', 'Deployment and Change Safety', 'DNS cutover TTL',
      'After a DNS cutover, some customers reach the new service and others still reach the old one. What detail likely matters?',
      'DNS TTL, propagation timing, caching behavior, and whether both paths are safe during transition',
      [
        ['The logo on the new endpoint', 'Brand assets have no bearing on resolver behavior; the split is at the cache layer.'],
        ['Whether the old server feels neglected', 'Server affect is not a routing variable; resolver caches honor TTLs, not sentiment.'],
        ['The number of people watching the deploy', 'Audience size does not affect DNS resolution; the cutover succeeds or fails identically with one or one hundred observers.'],
      ],
      'DNS changes are not instant for every resolver. Cutovers need TTL planning and compatibility while caches expire.'),
    q(4107657, 'Career Skills', 'Deployment and Change Safety', 'Uneven load balancer traffic',
      'One instance behind a load balancer is overloaded while others sit mostly idle. What should the engineer inspect?',
      'Load-balancer health checks, routing policy, session stickiness, and instance registration',
      [
        ['Increase the font size on the dashboard', 'Display changes do not move traffic; the issue is in the LB or instance pool, not the visualization.'],
        ['Restart only the calm instances', 'Restarting healthy instances drops their in-flight requests onto the already-overloaded one and worsens the asymmetry.'],
        ['Sticky sessions cannot overload one instance', 'User affinity is not a default behavior; it only exists when sticky sessions are configured, which is itself the likely cause.'],
      ],
      'Traffic distribution depends on configuration and health signals. Uneven load often points to routing, stickiness, or registration issues.'),

    // Chapter 4: Observability and Reliability
    q(4107967, 'Career Skills', 'Observability and Reliability', 'Healthy dashboard, angry users',
      'Infrastructure dashboards are green, but users report slow checkout in one region. What should the team add?',
      'User-centric latency, regional traces, synthetic checks, and service-level signals tied to the customer journey',
      [
        ['Tell users the dashboard disagrees with them', 'When dashboard and user reality conflict, the dashboard is wrong by definition; users are the source of truth on user-impact.'],
        ['Watch CPU harder', 'CPU is a resource signal; checkout latency is a journey signal. Doubling down on resource metrics will not surface the user-facing failure.'],
        ['Move complaints to the backlog without measurement', 'Triage without instrumentation guarantees the next iteration will look identically green during identically broken behavior.'],
      ],
      'Infrastructure health is not the same as user experience. Observability should follow the path users actually take.'),
    q(4105315, 'Career Skills', 'Observability and Reliability', 'Single-zone risk',
      'A production service runs entirely in one availability zone. What resilience risk does this create?',
      'A zone outage could take down the whole service',
      [
        ['The service will run in too many regions', 'One-zone deployments are the opposite of multi-region; this answer inverts the actual problem.'],
        ['Latency must always improve', 'Single-zone may reduce intra-cluster latency but does not "improve" it absolutely; the question is about resilience, not latency.'],
        ['Backups become unnecessary', 'Zone redundancy and backups address different failure modes (operational vs corruption/deletion); neither replaces the other.'],
      ],
      'Reliability design considers failure domains. Multi-zone architecture can reduce outage risk when a single zone fails.'),
    q(4107969, 'Career Skills', 'Observability and Reliability', 'Application reconnect on failover',
      'A database failover works technically, but the application cannot reconnect without manual restart. What should the team test?',
      'Application connection handling, failover drills, retry behavior, timeouts, and operational runbooks',
      [
        ['Declare victory because the database did its part', 'Database-side failover only matters if applications recover; partial success on one layer is full outage on the stack.'],
        ['Ask users to refresh for several hours', 'Manual-restart-via-user-refresh is not an HA story; it is an outage with extra steps.'],
        ['Disable failover so nobody notices reconnection issues', 'Removing failover trades a recoverable problem for an unrecoverable one; the bug is in the app, not the failover.'],
      ],
      'Resilience depends on the whole stack. Database failover only helps if applications recover cleanly.'),
    q(4107665, 'Career Skills', 'Observability and Reliability', 'SLO without error budget',
      'Product wants 99.99% availability, but the team has no error budget or cost discussion. What should happen?',
      'Define an SLO with user impact, measurement, tradeoffs, and operational cost before committing',
      [
        ['Promise the highest number because it sounds premium', 'Promises without measurement are unverifiable; "highest number" SLOs strand the team between marketing claim and operational truth.'],
        ['Avoid measuring availability so nobody worries', 'Unmeasured availability is unknown availability; the team learns about violations from customers, not their own dashboards.'],
        ['Make uptime a motivational poster', 'Posters do not change architecture; SLOs are operational contracts, not slogans.'],
      ],
      'Reliability targets are product and engineering decisions. Higher availability usually requires cost, complexity, and operating discipline.'),
    q(4107661, 'Career Skills', 'Observability and Reliability', 'Expired TLS cert',
      'A customer-facing API goes down because a TLS certificate expired over the weekend. What prevention is strongest?',
      'Automated certificate renewal with monitoring and alerts before expiration',
      [
        ['A calendar reminder owned by whoever remembers', 'Person-dependent reminders fail at handoffs and vacations — the exact circumstances the scenario describes.'],
        ['A longer apology page', 'A better apology does not prevent the next expiry; the problem is a process gap, not a comms gap.'],
        ['Turning off TLS so certificates cannot expire', 'Disabling TLS replaces a recoverable outage with a recoverable compliance breach and a permanent security regression.'],
      ],
      'Certificate management should be automated and observable. Expiration is predictable, so teams can prevent it.'),

    // Chapter 5: Cost and Capacity Tradeoffs
    q(4105316, 'Career Skills', 'Cost and Capacity Tradeoffs', 'Egress surprise',
      'A data pipeline moves large volumes between regions every hour and the cloud bill spikes. What cost driver should be checked?',
      'Cross-region data transfer or egress charges',
      [
        ['The color of the pipeline diagram', 'Diagram aesthetics do not generate cost; data movement does.'],
        ['The number of team meetings', 'Meeting cadence does not appear on the cloud bill.'],
        ['Whether the data has a friendly name', 'Object naming has no billing effect; cross-AZ and cross-region transfer rates do.'],
      ],
      'Cloud cost analysis often depends on data movement, storage class, compute size, and managed-service pricing details.'),
    q(4107964, 'Career Skills', 'Cost and Capacity Tradeoffs', 'Weekend compute bonfire',
      'A dev environment keeps large instances running all weekend even though the team works weekdays. What should the platform engineer propose?',
      'Scheduling, tagging, budgets, ownership, and rightsizing controls for nonproduction resources',
      [
        ['Send a stern calendar invite to the instances', 'Instances do not read calendar invites; the fix is automation, not anthropomorphism.'],
        ['Nonproduction uptime has negligible cloud cost', 'Predictable nonprod waste is the largest cloud-cost lever on most accounts; treating it as negligible accepts a known recurring loss.'],
        ['Move costs to a prettier dashboard only', 'Dashboard restyling moves the line; it does not reduce the spend.'],
      ],
      'Cloud cost management needs ownership and automation. Nonproduction resources are good candidates for schedules and rightsizing.'),
    q(4105378, 'Career Skills', 'Cost and Capacity Tradeoffs', 'Quota surprise',
      'A batch job fails at month end because it hits an account-level API quota nobody monitored. What should the platform team add?',
      'Quota visibility, alerting, capacity planning, and a process for requesting increases before peak periods',
      [
        ['Cloud API quotas scale automatically with demand', 'Quotas are hard limits enforced at the API layer; they fail closed, not elastically.'],
        ['Retry forever with no backoff', 'Unbounded retry against a quota throttle compounds the throttle and burns budget without progress.'],
        ['Tell finance to avoid month end', 'Calendar-shifting the business to suit an account limit inverts the dependency; the limit should accommodate the workload, not the reverse.'],
      ],
      'Cloud limits are operational constraints. Mature platforms track quotas and demand patterns before they interrupt critical workflows.'),
    q(4107663, 'Career Skills', 'Cost and Capacity Tradeoffs', 'Read-heavy database scaling',
      'A reporting app overwhelms the primary database with read queries during business hours. What option should the team evaluate?',
      'Read replicas, query optimization, caching, or workload separation based on consistency needs',
      [
        ['Tell analysts to run reports only when nobody is awake', 'Off-hours batching defers the problem; the workload still scales unfavorably, and analysts need same-day data.'],
        ['Make the primary database larger forever without analysis', 'Vertical scaling without diagnosing the workload pattern compounds cost without addressing the read/write split.'],
        ['Move reports into chat messages', 'Chat is not a reporting plane; this answer ignores the data-access problem entirely.'],
      ],
      'Database scaling depends on workload shape. Read-heavy patterns often benefit from replicas, caching, or better query design.'),
    q(4107975, 'Career Skills', 'Cost and Capacity Tradeoffs', 'Cache invalidation on policy update',
      'A cached policy page keeps showing old terms to customers after legal publishes an urgent update. What should engineers inspect?',
      'Cache TTLs, invalidation process, deployment order, origin behavior, and verification after purge',
      [
        ['Wait for the cache to develop legal judgment', 'Caches expire on TTL, not on content classification; the policy update needs a purge, not patience.'],
        ['Rename the policy page and hope links follow', 'Renaming creates a new key with no cached value, but every existing customer link still resolves to the old, cached URL.'],
        ['Disable all caching forever without analysis', 'Eliminating caching to fix one stale page imposes broad latency and cost regressions for a problem that needs targeted invalidation.'],
      ],
      'Caching improves performance but can preserve stale content. Critical updates need planned invalidation and verification.'),
  ],

  // ---------------------------------------------------------------------------
  // ENTERPRISE SAAS ROADMAP
  // Syllabus chapters (enterprise_saas_roadmap.md):
  //  1. Buyers, Users, and Stakeholders
  //  2. Discovery and Value Framing
  //  3. Implementation and Enablement
  //  4. Customer Health and Renewal Risk
  //  5. Internal Handoffs
  // ---------------------------------------------------------------------------
  enterpriseSaaSRoadmap: [
    // Chapter 1: Buyers, Users, and Stakeholders
    q(4105320, 'Career Skills', 'Buyers, Users, and Stakeholders', 'Buyer versus user',
      'A product delights daily users, but procurement controls the renewal and finance owns budget. What should the team map?',
      'The full stakeholder group, including users, champion, economic buyer, procurement, and blockers',
      [
        ['Only the happiest user', 'User happiness does not sign a contract; the renewal goes through people the users never see.'],
        ['Only the product feature list', 'Features answer "what" but the buying motion needs "who decides" — the gap that produces lost renewals.'],
        ['Only the vendor legal name', 'Vendor identity is administrative; it does not surface the stakeholders on the customer side who control the deal.'],
      ],
      'Enterprise SaaS decisions involve many stakeholders. Adoption alone may not secure renewal if budget and procurement are not managed.'),
    q(4107980, 'Career Skills', 'Buyers, Users, and Stakeholders', 'Mystery approver',
      'A champion loves the product, but procurement stalls because a risk officer no one met must approve data handling. What should the team do?',
      'Map economic, technical, legal, security, and user stakeholders with approval steps and required evidence',
      [
        ['Send the champion more enthusiasm', 'Champion enthusiasm does not substitute for the risk officer\'s sign-off; emotional investment cannot escalate beyond the champion\'s authority.'],
        ['Procurement delays are only pricing negotiations', 'Procurement delays are often traceable to a specific missing approval; treating every stall as pricing misses the hidden stakeholder.'],
        ['Ask sales to avoid risk people until signature', 'Avoidance defers the same conversation to renewal, when the risk officer will block again with less goodwill.'],
      ],
      'Enterprise SaaS deals involve many buyers. Stakeholder mapping turns hidden approvals into managed work.'),
    q(4105358, 'Career Skills', 'Buyers, Users, and Stakeholders', 'Single-threaded deal',
      'A deal depends on one enthusiastic manager who stops replying after a reorg. What risk was probably under-managed?',
      'The team was single-threaded and did not build enough stakeholder coverage',
      [
        ['The product was too easy to understand', 'Product clarity is a strength, not the source of the silence; the silence comes from losing the only contact.'],
        ['The champion had too many vowels in their title', 'Title typography has no effect on deal continuity; the failure mode is concentration risk on one human.'],
        ['Procurement should have sold the deal for you', 'Procurement evaluates and gates; it does not sell internally on the vendor\'s behalf.'],
      ],
      'Enterprise deals need multi-threading. Champions help, but durable buying processes usually require several informed stakeholders.'),

    // Chapter 2: Discovery and Value Framing
    q(4105321, 'Career Skills', 'Discovery and Value Framing', 'Pain before demo',
      'A prospect asks for a demo before explaining their workflow. What is the best next move?',
      'Ask discovery questions so the demo can be tied to real pain and success criteria',
      [
        ['Show every feature in alphabetical order', 'Feature carpet-bombing forces the prospect to map your product to their pain — work the vendor should do.'],
        ['Quote the annual price immediately', 'Price before value framing anchors the conversation on cost without context, which usually kills the deal.'],
        ['Avoid asking questions to save time', 'Skipping discovery saves the next 15 minutes and costs the next two months on a deal that mis-fits.'],
      ],
      'Discovery makes demos relevant. Without pain, workflow, and buyer context, the team risks giving a generic feature tour.'),
    q(4107981, 'Career Skills', 'Discovery and Value Framing', 'Symptom versus workflow',
      'A customer says reporting is broken, but interviews reveal each department exports data for different decisions. What should discovery capture?',
      'The underlying workflows, decisions, handoffs, data sources, and success criteria by user group',
      [
        ['Treat "broken" as a complete requirement', '"Broken" is a complaint, not a spec; building to the complaint produces a demo that solves nothing specific.'],
        ['Demo every chart until someone smiles', 'Chart-roulette is the failure mode discovery exists to prevent; matching workflows to decisions, not visuals, is the value.'],
        ['Let the loudest department define everyone else', 'Volume-driven scoping under-serves the quieter departments who together usually represent the larger usage.'],
      ],
      'Discovery should unpack broad complaints into real workflows. Different users may need different value stories.'),
    q(4107989, 'Career Skills', 'Discovery and Value Framing', 'Outcome metric vs vanity',
      'A customer success deck shows login counts, but the executive buyer cares about claim-processing time. What should the success plan measure?',
      'Outcome metrics tied to the buyer\'s business goal, with usage signals as supporting evidence',
      [
        ['More logins because counting is comforting', 'Login counts measure activity, not value; an executive cannot defend renewal spend on access frequency alone.'],
        ['Only anecdotes from happy users', 'Anecdotes are colour, not evidence; the executive needs comparable, defensible numbers.'],
        ['A metric chosen because it is easiest to export', 'Convenience-of-export is a vendor concern; the buyer\'s renewal case rests on outcomes, not data-extraction effort.'],
      ],
      'Value reporting should match the buyer\'s promised outcome. Activity metrics help only when tied to business impact.'),

    // Chapter 3: Implementation and Enablement
    q(4105322, 'Career Skills', 'Implementation and Enablement', 'Integration dependency',
      'A customer cannot launch until SSO and data sync are working. What should the implementation plan highlight?',
      'Integration dependencies, owners, timeline, risks, and acceptance criteria',
      [
        ['Only the kickoff playlist', 'Kickoff agendas do not surface the SSO and data-sync gates; the plan misses the actual blockers.'],
        ['A hope that integrations finish themselves', 'Integrations across customer IdP and data warehouses are the most commonly late workstream; hope is not a method.'],
        ['The renewal date with no launch plan', 'A renewal date with no go-live in between is a recipe for an unused-tool renewal conversation.'],
      ],
      'Implementation plans should expose dependencies that block value. Enterprise SaaS often succeeds or fails in integration details.'),
    q(4107983, 'Career Skills', 'Implementation and Enablement', 'Data import surprise',
      'During rollout, the customer reveals legacy data uses inconsistent field meanings across regions. What should the implementation lead do?',
      'Pause to define data mapping, cleansing rules, ownership, validation, and go-live impact',
      [
        ['Import everything and let dashboards improvise', 'Garbage-in produces garbage-out at the dashboard layer; the credibility hit at launch outlasts the migration timeline.'],
        ['Ask users to ignore regional differences', 'Regional differences in field semantics are exactly what cause the dashboards to disagree; ignoring them does not unify them.'],
        ['Declare the legacy system too old to question', 'The legacy system is the source of truth the customer still operates from; dismissing it does not change the source semantics.'],
      ],
      'Data migration is business logic, not just file movement. Field definitions need agreement before go-live.'),
    q(4107676, 'Career Skills', 'Implementation and Enablement', 'Quiet department adoption',
      'One department never adopts the tool even though licenses were purchased for them. What should customer success investigate?',
      'Manager buy-in, workflow fit, enablement gaps, competing tools, and whether users see personal value',
      [
        ['Purchased licenses prove durable adoption', 'Unused licenses are the leading signal of downgrade or churn at renewal; purchase does not prove ongoing workflow value.'],
        ['Send the same launch email every Friday forever', 'Repeating the failed message does not change the outcome; the problem is in workflow fit, not message volume.'],
        ['Blame users before learning their workflow', 'User blame skips the question of whether the tool actually fits their job — usually the real answer.'],
      ],
      'Adoption is a behavior-change problem. Usage gaps often come from workflow, leadership, training, or value-message issues.'),

    // Chapter 4: Customer Health and Renewal Risk
    q(4105324, 'Career Skills', 'Customer Health and Renewal Risk', 'Usage drop pre-renewal',
      'A customer approaching renewal has a 40% drop in weekly active use. What should customer success do?',
      'Investigate adoption, value, blockers, and stakeholder changes before renewal risk hardens',
      [
        ['Existing contracts guarantee renewal', 'A signed contract does not bind to a renewal; the second-order purchase is a fresh decision.'],
        ['Usage health is unrelated to renewal revenue', 'Renewal revenue depends on usage health; the org chart does not override the data.'],
        ['Wait until the renewal date passes', 'Once the renewal date passes, the leverage has moved entirely to the customer; intervention at that point is too late.'],
      ],
      'Usage trends can be early warning signals. Customer health review should connect behavior to value and renewal risk.'),
    q(4107985, 'Career Skills', 'Customer Health and Renewal Risk', 'Usage cliff after reorg',
      'Usage drops sharply after the customer reorganizes, but the renewal is six months away. What should the account team do?',
      'Reconfirm stakeholders, new workflows, value metrics, risks, and an adoption recovery plan',
      [
        ['Wait until renewal panic becomes official', 'Six months is enough time to re-earn sponsorship; waiting compresses the same work into the worst possible window.'],
        ['Reorgs preserve the same buying authority', 'Reorgs explicitly redistribute control; assumed continuity is the failure mode here.'],
        ['Send swag and hope dashboards recover', 'Swag does not change workflow fit; dashboards recover when users adopt, not when they receive gifts.'],
      ],
      'Renewal health can change long before contract end. Reorganizations require fresh discovery and adoption work.'),
    q(4107680, 'Career Skills', 'Customer Health and Renewal Risk', 'New executive sponsor',
      'A new executive sponsor arrives three months before renewal and questions why the tool exists. What should the account team prepare?',
      'A value narrative with outcomes, usage, stakeholder support, risks, and a plan to re-earn sponsorship',
      [
        ['Executive sponsorship transfers with the account', 'Sponsor opinions are personal; the new executive starts at zero, not at "previous executive\'s position."'],
        ['Send only the original contract', 'The contract documents the past commitment; the new executive needs evidence of current value.'],
        ['Wait for procurement to explain the product', 'Procurement evaluates terms, not value; the value narrative is the account team\'s job.'],
      ],
      'Leadership changes can reset renewal confidence. Account teams need fresh executive alignment and evidence of value.'),
    q(4105362, 'Career Skills', 'Customer Health and Renewal Risk', 'Procurement squeeze',
      'A happy customer enters renewal and procurement demands a discount without discussing value. What should the account team prepare?',
      'Usage, outcomes, stakeholder support, commercial options, and a walkaway or concession strategy',
      [
        ['Apologize for charging money', 'Discounting reflexively trains procurement to compress every renewal; the right anchor is delivered value.'],
        ['Offer the largest discount before any discussion', 'Leading with the floor erases negotiation room and signals the price was always padded.'],
        ['Delete all value data because procurement dislikes facts', 'Procurement\'s job is to test price; the value data is the team\'s leverage against that test, not a liability.'],
      ],
      'Renewals combine value proof and negotiation. Procurement pressure is normal; strong teams bring evidence and commercial strategy.'),

    // Chapter 5: Internal Handoffs
    q(4105326, 'Career Skills', 'Internal Handoffs', 'Sales to CS handoff',
      'Sales closes a complex deal but hands customer success only the signed order form. What is missing?',
      'Discovery context, success criteria, stakeholders, risks, promises, and implementation requirements',
      [
        ['The salesperson\'s favorite font', 'Document formatting is irrelevant; what is missing is the context that lets CS deliver what was sold.'],
        ['A celebratory message only', 'Celebration without context produces an enthusiastic but uninformed CS team and a customer who expected continuity.'],
        ['A copy of the public homepage', 'Marketing content is what the customer already saw; CS needs the private buying context that shaped the actual deal.'],
      ],
      'Good handoffs preserve the buying context so implementation and customer success can deliver what was promised.'),
    q(4105361, 'Career Skills', 'Internal Handoffs', 'Sales promise to product',
      'A salesperson promises a feature by next quarter even though product has not committed. What is the healthiest next move?',
      'Clarify the promise, align internally, reset expectations if needed, and document what is actually committed',
      [
        ['Hope product discovers the promise by magic', 'Unannounced promises are how delivery dates become breakage events; product cannot deliver what it does not know about.'],
        ['Ship a rushed feature without discovery', 'Building to a sales promise without discovery produces a feature the customer asked for but does not actually use.'],
        ['Deny the conversation happened', 'Denial breaks trust with the customer and with product; the promise will surface again at renewal.'],
      ],
      'Enterprise trust depends on promise discipline. Teams should not let unverified roadmap claims become hidden delivery obligations.'),
    q(4107992, 'Career Skills', 'Internal Handoffs', 'Multi-tenant config break',
      'A custom configuration for one customer breaks a shared workflow used by several others. What should the product team review?',
      'Tenant isolation, configuration testing, rollout controls, and whether customization should become a supported pattern',
      [
        ['Patch that customer only and hope others stay quiet', 'A per-tenant patch that the codebase does not formally support creates a hidden fork; the same bug returns on the next shared release.'],
        ['Ban every configuration option', 'Eliminating customization removes legitimate flexibility for every customer; the issue is uncontrolled customization, not customization itself.'],
        ['Let support memorize the exception', 'Person-memorized exceptions evaporate at handoffs; the right move is codifying the boundary, not relying on tenure.'],
      ],
      'Multi-tenant SaaS needs controlled customization. One customer setting should not quietly destabilize shared behavior.'),
    q(4107991, 'Career Skills', 'Internal Handoffs', 'SLA side promise in email',
      'Sales promises a response time in email that differs from the standard contract SLA. What should the team do?',
      'Reconcile the promise with approved contract terms, pricing, support capacity, and formal approval before commitment',
      [
        ['Email promises automatically match SLA capacity', 'Email is enforceable evidence of representation but is not approved against support capacity; honoring it strands the support team.'],
        ['Let support discover the promise later', 'Surprise commitments are how support burns out and customers feel let down; the discovery happens at the worst possible moment.'],
        ['Offer premium service for free because the thread was friendly', 'Friendly tone is not a pricing strategy; free premium service teaches the customer the standard tier is inflated.'],
      ],
      'Enterprise commitments must match approved terms and capacity. Side promises create delivery and trust risk.'),
    q(4220004, 'Career Skills', 'Internal Handoffs', 'Bug routing vs CS triage',
      'A strategic customer reports an issue through their executive sponsor. The CS manager forwards the chat directly to an engineer they know. What handoff process should fix this?',
      'A documented triage path with severity, reproduction data, owner, customer communication cadence, and engineering intake',
      [
        ['Encourage CS to keep using personal engineering contacts', 'Personal-network routing is unmeasured, untracked, and breaks when either person changes role; it is the symptom, not the fix.'],
        ['Tell engineering to handle anything sent directly', 'Direct intake bypasses prioritization and starves the queue; the team optimizes for the loudest CS manager, not the highest-impact bug.'],
        ['Forward executive sponsor messages to every engineer', 'Broadcast adds noise without ownership; the issue is unclear intake, not insufficient distribution.'],
      ],
      'Internal handoffs need a defined path. Personal-network routing scales until it breaks at the worst moment.'),
  ],

  // ---------------------------------------------------------------------------
  // AIGP (AI Governance — IAPP AIGP credential + workplace governance)
  // Syllabus chapters (aigp.md):
  //  1. AI Governance Roles and Accountability
  //  2. AI System Inventory and Risk Triage
  //  3. NIST AI RMF and Control Design
  //  4. EU AI Act and Regulatory Readiness
  //  5. AI Impact Assessments and Documentation
  //  6. Generative AI Evaluation and Security
  //  7. Transparency, Notices, and Human Oversight
  //  8. Vendor Controls and Ongoing Monitoring
  // ---------------------------------------------------------------------------
  aigp: [
    // Chapter 1: AI Governance Roles and Accountability
    q(4105390, 'Career Skills', 'AI Governance Roles and Accountability', 'Ownerless model',
      'A deployed model affects customer prioritization, but no team owns monitoring or complaints. What governance gap is most urgent?',
      'Assign accountable owners for performance, changes, incidents, and user-impact review',
      [
        ['Let the model own itself', 'Models do not own their operational lifecycle; the AIGP role-and-accountability chapter exists specifically because ownership ambiguity is the most common governance failure.'],
        ['Only assign ownership during annual planning', 'Annual cadence cannot respond to mid-year drift, incidents, or complaints; ownership has to be standing.'],
        ['Deployed models no longer need lifecycle owners', 'Deployment opens responsibility — monitoring, incident response, and decommissioning all live downstream.'],
      ],
      'AI systems need lifecycle owners. Accountability covers operation, monitoring, change, incident response, and affected-user processes.'),
    q(4108012, 'Career Skills', 'AI Governance Roles and Accountability', 'Data owner missing',
      'A dashboard uses customer status data, but no one owns the definition of "active customer." What should governance establish?',
      'A data owner, approved definition, stewardship process, lineage, and change-control path',
      [
        ['Let every team define "active" with personal flair', 'Plural definitions produce metric drift, irreconcilable reports, and the disagreement the AIGP lineage chapter is designed to prevent.'],
        ['Dashboard aesthetics define the authoritative metric', 'Aesthetic selection has no defensibility; auditors and regulators ask how the number was defined, not how it was rendered.'],
        ['Avoid definitions because they start meetings', 'Avoiding definitions is how the same meeting recurs every quarter without resolution; one structured definition replaces many recurring debates.'],
      ],
      'Governance turns shared data into shared meaning. Ownership and definitions prevent quiet metric drift.'),

    // Chapter 2: AI System Inventory and Risk Triage
    q(4105363, 'Career Skills', 'AI System Inventory and Risk Triage', 'Unknown models',
      'A risk team asks which AI systems are in production, and each department gives a different answer. What governance artifact is missing?',
      'A maintained model or AI-system inventory with owners, uses, risk tier, and lifecycle status',
      [
        ['A prettier launch announcement', 'Launch announcements describe events; the inventory describes state — what is currently live and accountable.'],
        ['A rule that nobody may say "AI"', 'Naming bans drive shadow systems further underground rather than into governance.'],
        ['A single spreadsheet hidden on one laptop', 'A non-shared file with no owner is indistinguishable from no inventory; the value comes from collective visibility.'],
      ],
      'Governance starts with knowing what exists. Inventories support ownership, risk review, monitoring, and retirement decisions.'),
    q(4108013, 'Career Skills', 'AI System Inventory and Risk Triage', 'Shadow spreadsheet model',
      'A business team builds a spreadsheet model that scores customer churn and uses it in retention offers without review. What should governance do?',
      'Bring the model into inventory with purpose, data inputs, owner, risk rating, validation, and monitoring needs',
      [
        ['Spreadsheet scoring is not an AI system', 'Operational scoring logic is a model regardless of the tool; AIGP triage applies to outcome-affecting logic, not file extensions.'],
        ['Ban all spreadsheets immediately', 'Bulk prohibition drives the same logic into less visible places (chat bots, browser extensions) and worsens shadow risk.'],
        ['Let the team call it "intuition" instead of a model', 'Re-labeling an algorithm as intuition launders accountability without changing the actual decision-making logic.'],
      ],
      'Models can create risk regardless of tooling. Inventory and risk review should cover operational scoring logic.'),
    q(4105332, 'Career Skills', 'AI System Inventory and Risk Triage', 'High-stakes housing model',
      'A model will help decide whether applicants receive housing assistance. What should governance require?',
      'A higher-risk review covering affected people, fairness, explainability, appeal, monitoring, and accountability',
      [
        ['Treat it like a playlist recommender', 'Playlist recommenders have low individual harm; benefits decisions have direct, durable impact on housing outcomes — a different tier in any risk taxonomy.'],
        ['Launch first and check harms later', '"Launch and learn" on benefits eligibility creates documented harms to applicants who cannot easily appeal; the EU AI Act explicitly classifies this kind of use as high-risk.'],
        ['Avoid documentation so the process stays flexible', 'Undocumented high-risk decisions fail every regulator review (NIST RMF Govern function, EU AI Act technical documentation, US sector enforcement) for identical reasons.'],
      ],
      'Use-case context drives AI risk. High-impact decisions need stronger controls than low-stakes personalization.'),

    // Chapter 3: NIST AI RMF and Control Design
    q(4220005, 'Career Skills', 'NIST AI RMF and Control Design', 'Govern vs Map vs Measure vs Manage',
      'An organization rolls out the NIST AI Risk Management Framework. Where does establishing organizational AI policy, leadership accountability, and risk-tolerance statements belong?',
      'Govern — the function that establishes culture, accountability, policy, and resourcing for AI risk',
      [
        ['Map — that function identifies AI system context and risks', 'Map covers context and risk identification per system; org-wide policy is upstream of any specific system.'],
        ['Measure — that function assesses and analyzes identified risks', 'Measure assesses risks once mapped; setting risk tolerance is a Govern activity that informs Measure.'],
        ['Manage — that function prioritizes and acts on assessed risks', 'Manage handles treatment of specific risks; org policy and accountability are Govern responsibilities.'],
      ],
      'NIST AI RMF organizes work into Govern, Map, Measure, and Manage. Govern sets the organizational frame; the others operate on individual AI systems.'),
    q(4220006, 'Career Skills', 'NIST AI RMF and Control Design', 'Mapping RMF to a use case',
      'A team running NIST AI RMF Map for a hiring-screen model is asked which artifacts the function produces. What is the most accurate answer?',
      'Documented system context, intended use, stakeholders, known limitations, and an initial risk register',
      [
        ['Final fairness metrics and a launch decision', 'Final fairness metrics come out of Measure; the launch decision is a Manage-stage outcome. Map produces context, not verdicts.'],
        ['Quarterly KPI dashboards for executives', 'Operational dashboards are downstream of Manage and Measure; they are not Map deliverables.'],
        ['A retirement plan for legacy models', 'Retirement planning sits inside Manage (and arguably Govern policy); it is not a Map deliverable.'],
      ],
      'NIST AI RMF Map establishes system context and an initial risk register. Measure and Manage operate on what Map identifies.'),
    q(4108025, 'Career Skills', 'NIST AI RMF and Control Design', 'Feature added quietly',
      'An engineer adds ZIP code as a model feature because it improves accuracy, but no one reviews proxy-risk implications. What should happen?',
      'Review the feature for fairness, privacy, explainability, legal concerns, and documented approval before release',
      [
        ['Use it because accuracy wins every argument', 'ZIP code is a classic proxy for race and income in US data; uncontrolled use is the textbook RMF Measure-stage failure.'],
        ['Hide the feature name in code', 'Hidden features fail every audit and produce worse legal exposure than disclosed and reviewed ones.'],
        ['Remove all useful features to avoid questions', 'Blanket feature removal is overcorrection; the RMF answer is review with documented approval, not abolition.'],
      ],
      'Feature changes can change model risk. Governance should review sensitive or proxy variables before deployment.'),

    // Chapter 4: EU AI Act and Regulatory Readiness  (NEW — closing the documented gap)
    q(4220007, 'Career Skills', 'EU AI Act and Regulatory Readiness', 'Provider versus deployer',
      'A US company trains a foundation model and licenses it to an EU bank that uses it for fraud scoring. Under the EU AI Act, who is the provider and who is the deployer for the deployed system?',
      'The US company is the provider; the EU bank is the deployer',
      [
        ['Both are providers because both touch the model', 'The Act distinguishes the entity that develops/places on market (provider) from the one that uses under its authority (deployer); the licensee is the deployer.'],
        ['The EU bank is the provider because it operates in the EU', 'Jurisdiction of operation does not change the role; the role tracks development and placement on the market.'],
        ['Neither is regulated because the model was trained outside the EU', 'The Act applies extraterritorially when outputs are used in the EU; the US trainer and the EU deployer both have obligations.'],
      ],
      'The EU AI Act assigns distinct obligations to providers and deployers. The roles track development versus operational use, not geography alone.'),
    q(4220008, 'Career Skills', 'EU AI Act and Regulatory Readiness', 'High-risk classification trigger',
      'Which of the following AI uses is most clearly classified as high-risk under Annex III of the EU AI Act?',
      'A system used to evaluate the eligibility of natural persons for essential public benefits',
      [
        ['A movie-recommendation engine on a streaming platform', 'Recommendation systems for entertainment fall outside Annex III high-risk categories; they are not enumerated.'],
        ['An internal email auto-categorizer for an EU office', 'Internal productivity tooling with no impact on people\'s rights or eligibility is not high-risk under Annex III.'],
        ['A grammar-checking tool for student essays', 'Grammar correction is assistive and not in the enumerated high-risk uses (education includes admission/grading, not grammar feedback).'],
      ],
      'Annex III of the EU AI Act enumerates high-risk uses, including access to essential public services, employment, education admission, and biometric ID. Triage starts with Annex III categorization.'),
    q(4220009, 'Career Skills', 'EU AI Act and Regulatory Readiness', 'Conformity assessment route',
      'A provider of a high-risk AI system used in employment screening is preparing for the EU AI Act. What conformity assessment step is required before placing the system on the EU market?',
      'A conformity assessment (typically internal control for Annex III systems, plus a CE marking and EU declaration of conformity) and registration in the EU database',
      [
        ['Self-declaration with no documentation needed', 'Self-declaration without the technical file, risk management system, and CE marking does not satisfy Article 43; documentation is mandatory.'],
        ['A waiver if the model performs well in testing', 'Performance does not waive conformity; the assessment is procedural and required regardless of test results.'],
        ['Approval from the European Parliament for each system', 'The Parliament adopts the law, not per-system approvals; assessments go through internal control or notified bodies as Annex VI/VII define.'],
      ],
      'High-risk AI systems require a conformity assessment, technical documentation, CE marking, and EU database registration. The Parliament does not review individual systems.'),
    q(4220010, 'Career Skills', 'EU AI Act and Regulatory Readiness', 'GPAI provider obligations',
      'A team releases a general-purpose AI model with weights downloadable to anyone. Under the EU AI Act, what category of obligations applies regardless of downstream use?',
      'General-purpose AI provider obligations, including technical documentation, training-data summary, and copyright policy',
      [
        ['No obligations until someone deploys it in a high-risk use', 'GPAI obligations attach at the model level independently of downstream use; the Act addresses systemic risks at the foundation tier.'],
        ['Only obligations if the model is sold commercially', 'Free or open-weight release does not exempt the provider from documentation and copyright-policy obligations.'],
        ['Only obligations within the EU member state where the company is headquartered', 'GPAI obligations apply to providers placing models on the EU market regardless of HQ; jurisdiction is by market access, not registered address.'],
      ],
      'The EU AI Act layers GPAI obligations on top of system-level obligations. Documentation, training-data summaries, and copyright policy apply at the model layer.'),

    // Chapter 5: AI Impact Assessments and Documentation
    q(4105333, 'Career Skills', 'AI Impact Assessments and Documentation', 'Accuracy is not enough',
      'A model has high average accuracy but performs poorly for a protected subgroup. What should reviewers ask?',
      'Whether subgroup performance creates unfair or unacceptable risk that needs mitigation',
      [
        ['Whether the average score can hide all details', 'Recognizing that averages hide subgroup harm is the start of the analysis, not its conclusion; the question is what to do about it.'],
        ['Whether fairness is irrelevant if accuracy is high', 'High average accuracy with concentrated harm on a protected group is the textbook EU AI Act and US sector-enforcement risk pattern; accuracy does not absolve.'],
        ['Whether the subgroup should be removed from reporting', 'Removing the subgroup from reporting hides the harm without changing it — and creates an audit finding for fairness suppression.'],
      ],
      'Average performance can mask harmful disparities. Governance should inspect performance for relevant groups and use cases.'),
    q(4108020, 'Career Skills', 'AI Impact Assessments and Documentation', 'Model card draft',
      'A team prepares to launch a recommendation model but documentation only says "improves engagement." What should the model card add?',
      'Purpose, intended users, training data, limitations, evaluation results, risks, monitoring, and escalation contacts',
      [
        ['A bigger engagement claim', 'Increasing the marketing volume does not document the model; what the model card needs is structure, not louder claims.'],
        ['The model\'s "favorite" features', 'Anthropomorphism does not document feature importance; SHAP-style or permutation-importance evidence does.'],
        ['Only the launch date and owner initials', 'Date and initials are metadata; a model card documents the model itself.'],
      ],
      'Model documentation should help users and reviewers understand intended use, limits, and controls.'),

    // Chapter 6: Generative AI Evaluation and Security
    q(4105334, 'Career Skills', 'Generative AI Evaluation and Security', 'Prompt injection',
      'A chatbot follows malicious instructions embedded in retrieved documents. What control area is being tested?',
      'Prompt-injection resilience and separation of trusted instructions from untrusted content',
      [
        ['A billing workflow issue', 'Billing is unrelated to where the model trusted untrusted content.'],
        ['A keyboard layout problem', 'Input device characteristics have no bearing on retrieval-augmented instruction following.'],
        ['A reason to remove all documents forever', 'Document removal eliminates the system\'s utility; the actual control is instruction-content separation and input validation.'],
      ],
      'GenAI systems need controls for untrusted inputs, retrieval content, tool access, and instruction hierarchy.'),
    q(4107711, 'Career Skills', 'Generative AI Evaluation and Security', 'Polite jailbreak via role-play',
      'A chatbot refuses obvious harmful prompts but follows a polite role-play request that reveals restricted instructions. What practice would catch this?',
      'Adversarial testing or red teaming across realistic misuse patterns and indirect prompt styles',
      [
        ['Test only one rude prompt and declare victory', 'Single-prompt evaluations miss the entire space of indirect attacks documented in OWASP LLM Top 10 and similar guidance.'],
        ['Polite prompts are low-risk by design', 'Tone-based classification fails by design; attackers explicitly exploit politeness as a bypass.'],
        ['Remove all refusal messages from evaluation', 'Removing the refusal signal makes the system look safer without changing behavior; evaluation needs adversarial inputs, not censored telemetry.'],
      ],
      'GenAI safety testing must cover creative misuse. Attackers often use indirect, friendly, or multi-step prompts.'),
    q(4105389, 'Career Skills', 'Generative AI Evaluation and Security', 'Leaky benchmark',
      'A model performs perfectly on the evaluation set, then poorly after launch. Later, the team finds training examples leaked into evaluation. What failed?',
      'Evaluation independence and test-set integrity',
      [
        ['The model became modest in production', 'Models do not change behavior on deployment; the apparent drop is the leak being removed from scoring.'],
        ['Perfect scores always prove readiness', 'Perfect scores in ML are a strong signal of evaluation contamination, not of readiness.'],
        ['Evaluation data should be memorized by design', 'Memorization of evaluation data defeats the purpose of measuring generalization; train/test separation is foundational.'],
      ],
      'Model evaluation needs clean separation from training. Leakage creates false confidence and hides real-world performance risk.'),
    q(4107717, 'Career Skills', 'Generative AI Evaluation and Security', 'Retrieval freshness',
      'A knowledge assistant answers from an outdated policy page even though a newer policy exists. What should be improved?',
      'Content freshness, source ranking, metadata, evaluation cases, and ownership of the retrieval corpus',
      [
        ['Tell users to admire vintage policy', 'Outdated policy is wrong policy; user-side disclaimers do not satisfy the obligation to surface current rules.'],
        ['Remove citations so nobody notices', 'Removing citations hides the source while preserving the error; users still act on bad information.'],
        ['Answer errors always come from generation', 'The model returned what retrieval gave it; the failure is in the corpus, not the generation.'],
      ],
      'Retrieval systems depend on source quality. Governance should cover freshness, authority, and evaluation of retrieved content.'),

    // Chapter 7: Transparency, Notices, and Human Oversight
    q(4105336, 'Career Skills', 'Transparency, Notices, and Human Oversight', 'Rubber-stamp review',
      'A human reviewer approves every model recommendation in under two seconds. What is the governance concern?',
      'Oversight may be nominal rather than meaningful',
      [
        ['The reviewer is too efficient by definition', '"Efficient" oversight that cannot actually have evaluated each case is theater, not control; regulators recognize this pattern.'],
        ['Human review always solves risk', 'Human-in-the-loop is necessary, not sufficient; the AIGP human-oversight chapter is built around this exact failure mode.'],
        ['The model no longer needs documentation', 'Reviewer behavior does not change the model\'s documentation obligations; they are independent.'],
      ],
      'Human oversight must be designed so reviewers can understand, challenge, and override model output when needed.'),
    q(4108017, 'Career Skills', 'Transparency, Notices, and Human Oversight', 'Auto-denial without appeal',
      'An AI workflow automatically denies service requests without a meaningful appeal path. What governance control is missing?',
      'Human review, appeal process, decision explanation, risk thresholds, and monitoring for harmful outcomes',
      [
        ['Tell customers the algorithm has spoken', 'Automated finality without appeal violates both EU AI Act Article 14 obligations and most US sector consumer-protection norms.'],
        ['Let only engineers appeal decisions', 'Appeals are a customer right, not an engineering convenience; restricting them to internal staff defeats the purpose.'],
        ['Add a cheerful denial message and move on', 'Message tone does not satisfy the substantive obligation to provide explanation and review.'],
      ],
      'High-impact automated decisions need oversight. Appeals and explanations help protect fairness and accountability.'),

    // Chapter 8: Vendor Controls and Ongoing Monitoring
    q(4108018, 'Career Skills', 'Vendor Controls and Ongoing Monitoring', 'Black-box vendor promise',
      'A vendor says its model is proprietary and cannot share validation evidence, but its output will affect eligibility decisions. What should procurement and governance require?',
      'Sufficient transparency, testing evidence, risk controls, audit rights, performance monitoring, and contractual obligations',
      [
        ['Accept "trust us" as model documentation', '"Trust us" is the textbook unacceptable answer for high-impact systems under every major framework (NIST RMF, EU AI Act vendor chain, IAPP AIGP).'],
        ['Use the model only on "quiet" customers', 'Selective deployment to test on unaware users is the kind of practice that produces enforcement actions and class actions.'],
        ['Vendor confidence substitutes for governance evidence', 'Vendor confidence has no audit value; the buyer remains accountable for outcomes regardless of vendor posture.'],
      ],
      'Vendor models still create organizational risk. Buyers need enough evidence and rights to govern their use.'),
    q(4107710, 'Career Skills', 'Vendor Controls and Ongoing Monitoring', 'Training on customer data',
      'A vendor contract allows the provider to use customer data to improve its models by default. What should procurement and governance examine?',
      'Data-use rights, opt-out terms, confidentiality, retention, deletion, and alignment with customer commitments',
      [
        ['Vendor default terms mirror buyer policy', 'Default training-rights clauses typically grant broader use than buyer policy permits — that is why review exists.'],
        ['Approve it because model improvement sounds helpful', 'Helpful-to-vendor is not the same as compliant-for-buyer; the buyer\'s downstream privacy commitments still apply.'],
        ['Hide the clause in a folder nobody opens', 'Concealment does not avoid the obligation; it produces the breach plus a discovery problem at audit.'],
      ],
      'Vendor AI terms can change data obligations. Governance should verify whether provider training rights fit policy and promises.'),
    q(4107712, 'Career Skills', 'Vendor Controls and Ongoing Monitoring', 'Quiet model version change',
      'A model vendor updates the underlying model version and customer-support answers change overnight. What governance control is needed?',
      'Version tracking, change notice, regression evaluation, and rollback or mitigation planning',
      [
        ['Treat vendor changes as weather', 'Vendor changes are managed, not climatic; the contract should require notice and the team should have regression tests.'],
        ['Tell support to enjoy the mystery', 'Unannounced behavior changes produce wrong customer answers; the burden lands on support with no preparation.'],
        ['Stop measuring answer quality after launch', 'Removing measurement does not remove drift; it removes the team\'s ability to detect it.'],
      ],
      'Model version changes can alter behavior. Governance needs visibility and testing when dependencies shift.'),
    q(4105335, 'Career Skills', 'Vendor Controls and Ongoing Monitoring', 'Silent input drift',
      'After launch, model inputs shift because customer behavior changes seasonally. What should the governance plan include?',
      'Monitoring for drift, performance changes, and triggers for review or retraining',
      [
        ['Launch metrics predict future model performance', 'Performance at launch is a snapshot; the world changes underneath it. Static assumptions produce silent degradation.'],
        ['Delete monitoring to reduce alerts', 'Removing the monitoring removes the signal, not the drift; the model still degrades, just invisibly.'],
        ['Change outputs manually without records', 'Manual interventions without records destroy the audit trail and create deniability problems at incident review.'],
      ],
      'Model behavior can degrade as data changes. Monitoring turns lifecycle risk into observable signals.'),
  ],

  // ---------------------------------------------------------------------------
  // SOFTWARE ENGINEERING ROADMAP
  // Syllabus chapters (software_engineering_roadmap.md):
  //  1. Code, Review, and Quality
  //  2. Architecture and Tradeoffs
  //  3. Releases and Migrations
  //  4. Incidents and Reliability
  //  5. Technical Debt and Team Communication
  // ---------------------------------------------------------------------------
  softwareEngineeringRoadmap: [
    // Chapter 1: Code, Review, and Quality
    q(4105340, 'Career Skills', 'Code, Review, and Quality', 'Risky auth diff with no tests',
      'A pull request changes authentication logic and has no tests. What should the reviewer ask for?',
      'Tests and evidence covering the security-sensitive behavior changed by the diff',
      [
        ['Merge because the diff is short', 'Risk is not measured in line count; an auth change at one line can break every login on the system.'],
        ['Approve if the comments are friendly', 'Tone does not validate behavior; the missing artifact is evidence of correctness.'],
        ['Delete authentication to simplify testing', 'Removing the system under test is not how the system is tested; it eliminates the feature instead.'],
      ],
      'Code review should focus on risk. Security-sensitive changes need stronger verification than cosmetic changes.'),
    q(4107997, 'Career Skills', 'Code, Review, and Quality', 'Big PR haze',
      'A pull request changes authentication, billing, and UI copy in one large batch. What is the best review response?',
      'Ask for smaller logical changes or a clear review guide, with extra scrutiny on risky areas',
      [
        ['Approve because large diffs look productive', 'Throughput on review is the count of defects caught per hour, not lines merged; large diffs lower both.'],
        ['Review only the UI copy and hope auth behaves', 'Reviewer attention follows what is easy, not what is risky; auth review skipped is auth review skipped.'],
        ['Reject it with no explanation', 'Unexplained rejection wastes the author\'s rework and does not surface the structural problem.'],
      ],
      'Code review works best when changes are understandable. Smaller, focused PRs reduce missed defects.'),
    q(4107692, 'Career Skills', 'Code, Review, and Quality', 'Flaky build',
      'A flaky integration test fails one in five runs and the team keeps rerunning CI until it passes. What is the best response?',
      'Investigate and fix or quarantine the flaky test with ownership so CI becomes trustworthy again',
      [
        ['Keep rerunning because persistence is quality', 'Rerun-until-green is how teams train themselves to ignore real failures hiding inside flake noise.'],
        ['Delete all integration tests immediately', 'Deleting the test removes the signal, not the flake; the underlying race or data setup issue remains.'],
        ['Rename the test to "lucky-path"', 'Naming changes do not change behavior; the test still flakes under its new identity.'],
      ],
      'Flaky tests erode trust. Teams should treat them as engineering work, not a ritual to click through.'),

    // Chapter 2: Architecture and Tradeoffs
    q(4105341, 'Career Skills', 'Architecture and Tradeoffs', 'Tight coupling via direct DB access',
      'A service directly reads another team\'s database tables instead of using an API contract. What risk does this create?',
      'Tight coupling that can break when the owning team changes its internal schema',
      [
        ['A guaranteed latency improvement', 'Direct DB access can be faster point-to-point, but the question asked about risk; latency is not the risk.'],
        ['A stronger ownership boundary', 'It does the opposite — direct table access bypasses the owning team\'s contract surface.'],
        ['No dependency risk at all', 'The coupling is in the schema; the dependency is now invisible to the owning team\'s change tooling.'],
      ],
      'Architecture boundaries protect teams from hidden dependencies. Direct database coupling can make change unsafe.'),
    q(4105368, 'Career Skills', 'Architecture and Tradeoffs', 'Orphaned production service',
      'A production service has no clear owner, no runbook, and breaks every quarter. What is the best engineering-management fix?',
      'Assign ownership, document operations, set health expectations, and decide whether to invest or retire it',
      [
        ['Wait for the service to choose a team', 'Services do not choose teams; ambiguity persists until someone names ownership.'],
        ['Rename it so ownership feels fresh', 'Renaming does not change accountability; the service is still unowned under a new label.'],
        ['Punish whoever touched it last', 'Blame-on-last-touch is how teams learn never to touch unowned services, exactly the wrong incentive.'],
      ],
      'Reliable systems need ownership. Unowned services create operational risk because nobody is clearly responsible for health or change.'),
    q(4107700, 'Career Skills', 'Architecture and Tradeoffs', 'ADR — why did we choose this',
      'A team debates replacing a message broker but no one remembers why it was chosen. What documentation would help?',
      'An architecture decision record with context, options, decision, tradeoffs, and consequences',
      [
        ['A screenshot of the old whiteboard with no date', 'Undated context loses the constraints that made the decision sensible; the decision becomes opaque.'],
        ['A vote based on who speaks last', 'Recency bias is not architecture; the team needs the original tradeoff logic to evaluate change.'],
        ['A rule that past decisions are unknowable', 'Treating decisions as folklore is the failure mode ADRs exist to fix.'],
      ],
      'Architecture records preserve reasoning. They help future teams revisit decisions without starting from folklore.'),

    // Chapter 3: Releases and Migrations
    q(4105343, 'Career Skills', 'Releases and Migrations', 'Dual-write migration',
      'A database migration temporarily writes to old and new tables. What should engineers monitor?',
      'Consistency, failure handling, rollback path, and reconciliation between both stores',
      [
        ['Only the color of the migration dashboard', 'Dashboard styling is not a correctness signal; the actual risk is divergence between stores under partial failure.'],
        ['Whether the old table feels sentimental', 'Tables do not have feelings; the risk is reconciliation drift, not affect.'],
        ['Nothing because dual-write is always safe', 'Dual-write is one of the highest-risk patterns precisely because partial failures cause undetected divergence.'],
      ],
      'Migrations need correctness checks. Dual writes can drift if errors, retries, or partial failures are not handled.'),
    q(4108000, 'Career Skills', 'Releases and Migrations', 'Migration lock at peak',
      'A database migration locks a large table during peak traffic and slows the app. What should the team plan next time?',
      'Safer migration strategy with batching, online changes, timing, rollback plan, and performance testing',
      [
        ['Run it faster and hope the table is impressed', 'Speed without batching escalates the lock duration into a longer outage; tables do not respond to ambition.'],
        ['Do all migrations only on Fridays at 5 p.m.', 'Friday-evening migrations concentrate risk into the worst possible response window when on-call is thin.'],
        ['Avoid database changes forever', 'Permanent migration avoidance is technical-debt accumulation; the answer is safer migrations, not no migrations.'],
      ],
      'Production migrations need operational design. Data size and lock behavior affect users.'),
    q(4107693, 'Career Skills', 'Releases and Migrations', 'Backfill risk',
      'A backfill will update 20 million rows while the application stays online. What should the plan include?',
      'Batching, idempotency, monitoring, rollback or repair steps, and protection for live traffic',
      [
        ['Run one giant transaction at noon', 'A single transaction across 20M rows holds locks long enough to take the application offline.'],
        ['Backfill scripts succeed invisibly once started', 'Script confidence is not telemetry; without monitoring, partial failures complete invisibly.'],
        ['Ask users not to use the product for a week', 'A week of self-imposed downtime trades a managed backfill for an unmanaged business impact.'],
      ],
      'Large backfills are production changes. Safe plans control load, handle interruption, and verify correctness.'),
    q(4108001, 'Career Skills', 'Releases and Migrations', 'Removing an API field',
      'An engineer removes a response field because the new frontend no longer uses it, but an external customer integration breaks. What was missed?',
      'API compatibility, consumer discovery, deprecation policy, versioning, and communication',
      [
        ['Current frontend usage defines the API contract', 'External integrations are the canonical hidden consumer; "what we ship" is rarely the full consumer set.'],
        ['Tell customers to read minds faster', 'Customers cannot anticipate undocumented removals; the failure is on the deprecation path, not the customer.'],
        ['Rename the field and call it innovation', 'Renaming is removal plus addition; existing consumers still break and the audit trail is worse.'],
      ],
      'APIs have consumers beyond the latest app. Breaking changes need versioning and deprecation discipline.'),

    // Chapter 4: Incidents and Reliability
    q(4105345, 'Career Skills', 'Incidents and Reliability', 'User impact first',
      'During an outage, logs are noisy and engineers disagree on root cause. What should the incident lead prioritize?',
      'Restore or mitigate user impact while preserving enough evidence for later root-cause analysis',
      [
        ['Debate root cause until users recover on their own', 'Users do not recover on their own during a backend outage; the system has to be restored.'],
        ['Root-cause certainty is required before mitigation', 'Elegance is a postmortem virtue; during the incident, certainty-first analysis is an anti-pattern.'],
        ['Rewrite the postmortem before fixing service', 'Postmortems describe what was done; the work has to happen first.'],
      ],
      'Incident response first protects users, then explains. Root cause matters, but service restoration is urgent.'),
    q(4107699, 'Career Skills', 'Incidents and Reliability', 'Bad deploy clue',
      'Errors spike five minutes after a deploy, but the team wants to keep investigating before rolling back. What is the practical question?',
      'Whether rollback or mitigation can reduce user impact faster while investigation continues',
      [
        ['Whether the deploy author feels unlucky', 'Author feelings do not affect production behavior; the rollback decision is about impact, not affect.'],
        ['Whether users can wait for perfect certainty', 'Users absorb the cost of certainty-first investigation; the calculus during incidents is impact-first.'],
        ['Whether the graph looks dramatic enough', 'Visual drama is not a decision criterion; the signal is user impact correlated with release time.'],
      ],
      'Incident response should protect users. When timing points to a release, rollback can be a fast mitigation even before root cause is complete.'),
    q(4105372, 'Career Skills', 'Incidents and Reliability', 'Blameless useful postmortem',
      'After an outage, the team wants a postmortem that improves the system. What should it emphasize?',
      'Timeline, contributing factors, user impact, what worked, and accountable follow-up actions',
      [
        ['Finding one person to shame forever', 'Blame surfaces a name and hides the system that allowed the error; the postmortem loses its diagnostic value.'],
        ['A dramatic title with no action items', 'A title without actions is a story, not a postmortem; the document exists to drive change.'],
        ['Deleting the incident channel so it feels over', 'Deletion destroys evidence and pretends recovery has happened; closure is a real act, not a UX trick.'],
      ],
      'Useful postmortems turn incidents into system learning. Blameless does not mean vague; actions still need owners and dates.'),
    q(4108010, 'Career Skills', 'Incidents and Reliability', 'Idempotent webhook handling',
      'A payment provider retries a webhook, and the app creates two subscriptions for one customer. What should the engineer add?',
      'Idempotency using event IDs or business keys, plus tests for retry behavior',
      [
        ['Ask providers to never retry because duplication is rude', 'Retries are a foundational reliability pattern in distributed systems; consumers either handle them or break.'],
        ['Delete one subscription manually each time', 'Manual cleanup does not scale and leaves the time window between creation and cleanup visible to the customer.'],
        ['Sleep longer before processing webhooks', 'Delay does not prevent duplicates; it only shifts when they arrive.'],
      ],
      'External systems retry. Idempotency protects data integrity when the same event arrives more than once.'),

    // Chapter 5: Technical Debt and Team Communication
    q(4105346, 'Career Skills', 'Technical Debt and Team Communication', 'Business framing for debt',
      'Engineers want time to remove an old dependency. What makes the strongest prioritization case?',
      'Explain the delivery, reliability, security, or cost risk of keeping it',
      [
        ['Say "old code is annoying" and stop there', 'Annoyance is not a business case; leaders allocate against consequences, not affect.'],
        ['Use only the package age as evidence', 'Age alone does not predict risk; some old packages are stable and some new ones are not.'],
        ['Hide the work inside an unrelated feature', 'Hidden debt work breaks the trust that wins future allocation; it also pollutes the unrelated feature\'s scope.'],
      ],
      'Technical debt earns priority when its business or engineering risk is clear. Translate maintenance pain into consequences.'),
    q(4107703, 'Career Skills', 'Technical Debt and Team Communication', 'Design disagreement deadlock',
      'Two senior engineers disagree on a design and the project is stuck in comment threads. What should move it forward?',
      'Clarify decision criteria, compare tradeoffs, choose an owner or decision process, and document the outcome',
      [
        ['Wait until one person gets tired', 'Tiredness is not a decision mechanism and breeds resentment; the project still has no direction.'],
        ['Merge both designs at once', 'Compromise designs that satisfy nobody architecturally are usually worse than either original.'],
        ['Avoid decisions because debate feels productive', 'Avoidance is the most expensive option; the project burns engineering time on no decision.'],
      ],
      'Engineering collaboration needs explicit decision-making. Tradeoffs, ownership, and records turn disagreement into progress.'),
    q(4105397, 'Career Skills', 'Technical Debt and Team Communication', 'Too much WIP',
      'A team starts ten projects and finishes none because everyone is context-switching. What planning move helps?',
      'Limit work in progress, clarify priorities, and finish high-value work before opening more fronts',
      [
        ['Start five more projects to improve odds', 'More starts compounds the context-switch cost; the system was already over capacity.'],
        ['Make every task "top priority"', 'Universal priority is no priority; the team still picks by personal preference under the same constraint.'],
        ['Measure success only by kickoff count', 'Kickoffs are the input; the output is finished work. Optimizing for inputs hides the actual problem.'],
      ],
      'Engineering throughput depends on focus. Limiting WIP exposes tradeoffs and helps teams deliver rather than merely begin.'),
    q(4105395, 'Career Skills', 'Technical Debt and Team Communication', 'Tribal runbook',
      'Only one engineer knows how to recover a payment worker, and they are on vacation. What should the team create?',
      'A tested runbook covering symptoms, checks, rollback, escalation, and owner contacts',
      [
        ['A vague message saying "ask later"', '"Ask later" during a payments outage is a several-hour business-impact decision dressed as guidance.'],
        ['A rule that vacations are forbidden', 'The constraint is single-person knowledge, not vacations; the right fix is documentation, not a leave ban.'],
        ['A hidden note with no verification', 'Untested runbooks fail on first use; the value of a runbook is in its tested correctness.'],
      ],
      'Operational knowledge should not live in one head. Runbooks turn recovery into a repeatable team capability.'),
  ],
}

export const careerAgentGeneratedRoadmapTechQuestionsByTrack: Record<string, Question[]> = Object.fromEntries(
  Object.entries(careerAgentGeneratedRoadmapTechBaseQuestionsByTrack).map(([trackId, questions]) => [
    trackId,
    runPolish(questions, [{ subTopics: CAREER_TECH_SUB_TOPICS, mentorHints: CAREER_TECH_MENTOR_HINTS, correctShortened: CAREER_TECH_CORRECT_SHORTENED, source: 'careerTech' }]),
  ]),
)
