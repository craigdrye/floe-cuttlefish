// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for the Career Tech roadmap tracks (~109 questions across five tracks:
// cybersecurityOperationsRoadmap, cloudInfrastructureRoadmap,
// enterpriseSaaSRoadmap, aigp, softwareEngineeringRoadmap).
//
// CAREER_TECH_SUB_TOPICS groups every question into a chapter-shaped cluster
// keyed by id (since five tracks share the namespace, id-form is simpler than
// the string-form used in vcPolish.ts).
//
// CAREER_TECH_MENTOR_HINTS overrides the generic scaffold hint with a one-line
// second-person nudge that names the technique without giving the answer —
// voice: senior practitioner mentoring a junior analyst.
//
// CAREER_TECH_CORRECT_SHORTENED trims `correct` strings flagged by the
// length-heuristic audit (correct substantially longer than longest distractor).
// Trimmed explanatory clauses are reattached via `lessonAddendum` so no info
// is lost.

// -----------------------------------------------------------------------------
// SUB_TOPICS — id -> cluster name. Cluster names mirror the underlying chapter,
// which keeps the lesson surface aligned with each roadmap's syllabus.
// -----------------------------------------------------------------------------

export const CAREER_TECH_SUB_TOPICS: Record<number, string> = {
  // ---------- Cybersecurity Operations ----------
  // Chapter 1: SOC Triage and Alert Quality
  4105300: 'SOC Triage and Alert Quality',
  4107640: 'SOC Triage and Alert Quality',
  4107948: 'SOC Triage and Alert Quality',
  4220000: 'SOC Triage and Alert Quality',
  // Chapter 2: Identity, Access, and Privilege
  4105301: 'Identity, Access, and Privilege',
  4107641: 'Identity, Access, and Privilege',
  4107647: 'Identity, Access, and Privilege',
  4105374: 'Identity, Access, and Privilege',
  4107963: 'Identity, Access, and Privilege',
  // Chapter 3: Endpoint, Network, and Cloud Scope
  4105303: 'Endpoint, Network, and Cloud Scope',
  4105305: 'Endpoint, Network, and Cloud Scope',
  4107951: 'Endpoint, Network, and Cloud Scope',
  4107950: 'Endpoint, Network, and Cloud Scope',
  4107651: 'Endpoint, Network, and Cloud Scope',
  // Chapter 4: Containment and Recovery
  4105304: 'Containment and Recovery',
  4107646: 'Containment and Recovery',
  4107957: 'Containment and Recovery',
  4107960: 'Containment and Recovery',
  4220001: 'Containment and Recovery',
  // Chapter 5: Incident Communication
  4105306: 'Incident Communication',
  4107954: 'Incident Communication',
  4107653: 'Incident Communication',
  4107962: 'Incident Communication',
  4220002: 'Incident Communication',

  // ---------- Cloud Infrastructure ----------
  // Chapter 1: Cloud Building Blocks
  4105310: 'Cloud Building Blocks',
  4220003: 'Cloud Building Blocks',
  4107669: 'Cloud Building Blocks',
  // Chapter 2: IAM and Network Boundaries
  4105311: 'IAM and Network Boundaries',
  4107656: 'IAM and Network Boundaries',
  4107965: 'IAM and Network Boundaries',
  4105312: 'IAM and Network Boundaries',
  4107966: 'IAM and Network Boundaries',
  // Chapter 3: Deployment and Change Safety
  4105313: 'Deployment and Change Safety',
  4107658: 'Deployment and Change Safety',
  4107970: 'Deployment and Change Safety',
  4107660: 'Deployment and Change Safety',
  4107657: 'Deployment and Change Safety',
  // Chapter 4: Observability and Reliability
  4107967: 'Observability and Reliability',
  4105315: 'Observability and Reliability',
  4107969: 'Observability and Reliability',
  4107665: 'Observability and Reliability',
  4107661: 'Observability and Reliability',
  // Chapter 5: Cost and Capacity Tradeoffs
  4105316: 'Cost and Capacity Tradeoffs',
  4107964: 'Cost and Capacity Tradeoffs',
  4105378: 'Cost and Capacity Tradeoffs',
  4107663: 'Cost and Capacity Tradeoffs',
  4107975: 'Cost and Capacity Tradeoffs',

  // ---------- Enterprise SaaS ----------
  // Chapter 1: Buyers, Users, and Stakeholders
  4105320: 'Buyers, Users, and Stakeholders',
  4107980: 'Buyers, Users, and Stakeholders',
  4105358: 'Buyers, Users, and Stakeholders',
  // Chapter 2: Discovery and Value Framing
  4105321: 'Discovery and Value Framing',
  4107981: 'Discovery and Value Framing',
  4107989: 'Discovery and Value Framing',
  // Chapter 3: Implementation and Enablement
  4105322: 'Implementation and Enablement',
  4107983: 'Implementation and Enablement',
  4107676: 'Implementation and Enablement',
  // Chapter 4: Customer Health and Renewal Risk
  4105324: 'Customer Health and Renewal Risk',
  4107985: 'Customer Health and Renewal Risk',
  4107680: 'Customer Health and Renewal Risk',
  4105362: 'Customer Health and Renewal Risk',
  // Chapter 5: Internal Handoffs
  4105326: 'Internal Handoffs',
  4105361: 'Internal Handoffs',
  4107992: 'Internal Handoffs',
  4107991: 'Internal Handoffs',
  4220004: 'Internal Handoffs',

  // ---------- AIGP (AI Governance) ----------
  // Chapter 1: AI Governance Roles and Accountability
  4105390: 'AI Governance Roles and Accountability',
  4108012: 'AI Governance Roles and Accountability',
  // Chapter 2: AI System Inventory and Risk Triage
  4105363: 'AI System Inventory and Risk Triage',
  4108013: 'AI System Inventory and Risk Triage',
  4105332: 'AI System Inventory and Risk Triage',
  // Chapter 3: NIST AI RMF and Control Design
  4220005: 'NIST AI RMF and Control Design',
  4220006: 'NIST AI RMF and Control Design',
  4108025: 'NIST AI RMF and Control Design',
  // Chapter 4: EU AI Act and Regulatory Readiness
  4220007: 'EU AI Act and Regulatory Readiness',
  4220008: 'EU AI Act and Regulatory Readiness',
  4220009: 'EU AI Act and Regulatory Readiness',
  4220010: 'EU AI Act and Regulatory Readiness',
  // Chapter 5: AI Impact Assessments and Documentation
  4105333: 'AI Impact Assessments and Documentation',
  4108020: 'AI Impact Assessments and Documentation',
  // Chapter 6: Generative AI Evaluation and Security
  4105334: 'Generative AI Evaluation and Security',
  4107711: 'Generative AI Evaluation and Security',
  4105389: 'Generative AI Evaluation and Security',
  4107717: 'Generative AI Evaluation and Security',
  // Chapter 7: Transparency, Notices, and Human Oversight
  4105336: 'Transparency, Notices, and Human Oversight',
  4108017: 'Transparency, Notices, and Human Oversight',
  // Chapter 8: Vendor Controls and Ongoing Monitoring
  4108018: 'Vendor Controls and Ongoing Monitoring',
  4107710: 'Vendor Controls and Ongoing Monitoring',
  4107712: 'Vendor Controls and Ongoing Monitoring',
  4105335: 'Vendor Controls and Ongoing Monitoring',

  // ---------- Software Engineering ----------
  // Chapter 1: Code, Review, and Quality
  4105340: 'Code, Review, and Quality',
  4107997: 'Code, Review, and Quality',
  4107692: 'Code, Review, and Quality',
  // Chapter 2: Architecture and Tradeoffs
  4105341: 'Architecture and Tradeoffs',
  4105368: 'Architecture and Tradeoffs',
  4107700: 'Architecture and Tradeoffs',
  // Chapter 3: Releases and Migrations
  4105343: 'Releases and Migrations',
  4108000: 'Releases and Migrations',
  4107693: 'Releases and Migrations',
  4108001: 'Releases and Migrations',
  // Chapter 4: Incidents and Reliability
  4105345: 'Incidents and Reliability',
  4107699: 'Incidents and Reliability',
  4105372: 'Incidents and Reliability',
  4108010: 'Incidents and Reliability',
  // Chapter 5: Technical Debt and Team Communication
  4105346: 'Technical Debt and Team Communication',
  4107703: 'Technical Debt and Team Communication',
  4105397: 'Technical Debt and Team Communication',
  4105395: 'Technical Debt and Team Communication',
}

// -----------------------------------------------------------------------------
// MENTOR_HINTS — one-line second-person nudge naming the technique. Voice: a
// senior practitioner whispering over the junior analyst's shoulder.
// -----------------------------------------------------------------------------

export const CAREER_TECH_MENTOR_HINTS: Record<number, string> = {
  // ---------- Cybersecurity Operations: SOC Triage and Alert Quality ----------
  4105300: 'Enrich before you escalate — identity, device, timing, location, and peer activity decide whether this alert is noise or an incident.',
  4107640: 'Click without credential entry still leaves payloads, beacons, and sibling recipients in scope. Contain the lure, then scope it.',
  4107948: 'Vacation is a hypothesis, not evidence. Confirm with device, MFA, travel records, and the user before you change severity.',
  4220000: 'Detection engineering is about actionable signal. Narrow the rule by parent-child context, not by silencing it or shipping every fire.',

  // ---------- Cybersecurity Operations: Identity, Access, and Privilege ----------
  4105301: 'A leaked token is a live access path. Revoke first; investigate downstream use after the path is closed.',
  4107641: 'Trusted-device tokens get stolen. Treat impossible travel as a signal, then corroborate with VPN, device, and user evidence.',
  4107647: 'Emergency access is fine if it is time-bound, approved, logged, and removed. Design the break-glass, do not abolish it.',
  4105374: 'Dormant privilege is a recurring foothold. The control is periodic access review tied to role and project transitions.',
  4107963: 'A shared credential turns one compromise into N. Containment must cover every host the secret unlocks.',

  // ---------- Cybersecurity Operations: Endpoint, Network, and Cloud Scope ----------
  4105303: 'Remote admin tools fanning out from one workstation reads as lateral movement until host, account, and network evidence prove otherwise.',
  4105305: 'Restrict the bucket first, then assess exposure, rotate embedded secrets, and document. Order matters more than urgency theater.',
  4107951: 'Root sign-ins are designed to be rare. Check MFA, source, actions, and whether root should be locked back down.',
  4107950: 'A scheduled task from a user temp folder is persistence. Examine lineage and script before you delete the evidence.',
  4107651: 'Blast-radius questions are answered by segmentation, not by hostnames, Wi-Fi labels, or posters.',

  // ---------- Cybersecurity Operations: Containment and Recovery ----------
  4105304: 'Containment on a customer-facing system is an incident-lead decision, not an analyst reflex. Coordinate harm reduction with business impact.',
  4107646: 'Ransomware in progress: contain the spread first, then preserve evidence, then think about restore.',
  4107957: 'A backup is unverified until you have restored from it under pressure. Test the recovery, do not trust the catalog.',
  4107960: 'A reboot kills volatile evidence — memory, network sessions, process tree. Decide deliberately, document the call.',
  4220001: 'Eradication is per-campaign, not per-user. Sweep recipients, persistence, and detection coverage before you call it done.',

  // ---------- Cybersecurity Operations: Incident Communication ----------
  4105306: 'Update format under pressure: confirmed facts, current impact, actions underway, unknowns, next decision point. Bounded uncertainty is the posture.',
  4107954: 'Conflicting directions are an incident-command problem. Name decision rights and a channel before the response forks.',
  4107653: 'Share validated indicators with caveats, through approved channels. Raw logs leak PII; invented IOCs poison partners.',
  4107962: 'When a metric improves after a threshold change, ask what risk it now hides. Pair volume with quality and coverage.',
  4220002: 'Regulator clocks start at awareness, not at forensic completion. Sequence scope, legal, and customer comms with named owners.',

  // ---------- Cloud Infrastructure: Cloud Building Blocks ----------
  4105310: '"Managed" is a split, not a transfer. Ask which knobs you still own — usually network, auth, backup policy.',
  4220003: 'Match the architecture to the failure domain. Single-DC failure with low latency means multi-AZ inside one region.',
  4107669: 'Residency applies to backups, replicas, logs, and support access — not just the primary store.',

  // ---------- Cloud Infrastructure: IAM and Network Boundaries ----------
  4105311: 'Name the principle. "Read every bucket when you need one" violates least privilege.',
  4107656: 'Identity cleanup is owner-first, then verify usage, then remove or narrow. Bulk delete causes outages; bulk keep keeps the risk.',
  4107965: 'Break-glass needs sealed storage, MFA, logging, approval, and regular testing — not a shared note and goodwill.',
  4105312: 'Public-subnet placement is an exposure problem, not a cost or HA problem. Name the boundary that was crossed.',
  4107966: 'Internet reachability for an internal service is an ingress, ACL, and authentication review — obscurity is not the control.',

  // ---------- Cloud Infrastructure: Deployment and Change Safety ----------
  4105313: 'Contract changes need compatibility checks, staged rollout, monitoring, and a rollback or mitigation path. Downstreams release on their own clocks.',
  4107658: 'A console hotfix is a ticking rollback until you reconcile it into code. The next apply will replay the outage.',
  4107970: 'Flags need an owner, an expiry, and removal criteria. Stale flags compound into mixed-state bugs nobody can reproduce.',
  4107660: 'DNS cutovers honor TTL and caches, not deploy ceremonies. Plan for both paths to be safe while resolvers expire.',
  4107657: 'Uneven traffic is a health-check, routing, stickiness, or registration problem — inspect the LB and pool before restarting hosts.',

  // ---------- Cloud Infrastructure: Observability and Reliability ----------
  4107967: 'When the dashboard disagrees with users, the dashboard is wrong. Add user-journey latency, regional traces, and synthetic checks.',
  4105315: 'Single-zone is a single failure domain. Name the resilience risk, not the latency hypothesis.',
  4107969: 'Database failover only matters if applications reconnect. Drill the whole stack, not just the data tier.',
  4107665: 'An SLO without an error budget is a slogan. Tie it to user impact, measurement, and the cost of the next nine.',
  4107661: 'Predictable expiry, unpredictable on-call. The fix is automated renewal with monitoring, not a calendar reminder.',

  // ---------- Cloud Infrastructure: Cost and Capacity Tradeoffs ----------
  4105316: 'Cross-region transfer is the usual suspect for hourly bill spikes. Diagram color is not.',
  4107964: 'Nonprod waste is the biggest cloud-cost lever. Schedules, tagging, budgets, and ownership beat scolding.',
  4105378: 'API quotas fail closed at the limit. Add visibility, alerting, capacity planning, and a path to request increases ahead of peaks.',
  4107663: 'Read-heavy patterns want replicas, caching, or workload separation. Vertical scaling forever is the expensive non-answer.',
  4107975: 'Stale policy needs targeted invalidation: TTL, purge process, deploy order, origin behavior, and verification after purge.',

  // ---------- Enterprise SaaS: Buyers, Users, and Stakeholders ----------
  4105320: 'Users delight; buyers renew. Map champion, economic buyer, procurement, and the blockers — not just the happy seat.',
  4107980: 'Procurement stall usually means an unmapped approver. Surface the risk officer, legal, security, and the evidence each needs.',
  4105358: 'One enthusiastic contact is concentration risk. Reorgs expose single-threading; multi-thread before the silence.',

  // ---------- Enterprise SaaS: Discovery and Value Framing ----------
  4105321: 'Demo before discovery is a feature tour. Ask about workflow, pain, and success criteria first.',
  4107981: '"Broken" is a complaint. Unpack it into workflows, decisions, handoffs, data sources, and per-group success criteria.',
  4107989: 'Logins are activity; claim-processing time is value. Anchor success metrics on the buyer\'s business outcome.',

  // ---------- Enterprise SaaS: Implementation and Enablement ----------
  4105322: 'SSO and data sync are the late workstreams. Surface dependencies, owners, timeline, risks, and acceptance criteria up front.',
  4107983: 'Inconsistent legacy field meanings are business logic, not file movement. Define mapping, cleansing, and ownership before import.',
  4107676: 'Unused licenses are a downgrade signal. Investigate manager buy-in, workflow fit, enablement, and personal value.',

  // ---------- Enterprise SaaS: Customer Health and Renewal Risk ----------
  4105324: 'A 40% usage drop pre-renewal is an early warning. Investigate adoption, value, and stakeholder changes before the risk hardens.',
  4107985: 'Reorgs redistribute control. Re-confirm stakeholders, workflows, and value metrics now — six months is enough time to re-earn sponsorship.',
  4107680: 'A new sponsor starts at zero. Bring a fresh value narrative with outcomes, usage, stakeholder support, and risks.',
  4105362: 'Procurement compresses every renewal. Bring usage, outcomes, commercial options, and a walkaway — not a reflexive discount.',

  // ---------- Enterprise SaaS: Internal Handoffs ----------
  4105326: 'A signed order form is metadata. The handoff needs discovery context, success criteria, stakeholders, risks, and promises.',
  4105361: 'Unverified roadmap promises become delivery debt at renewal. Clarify, align, and reset before it becomes a commitment.',
  4107992: 'A per-tenant patch outside the supported surface is a hidden fork. Codify isolation and the customization boundary.',
  4107991: 'Email is enforceable representation. Reconcile against approved terms, capacity, and pricing before honoring it.',
  4220004: 'Personal-network routing breaks at the worst moment. Define a triage path with severity, intake, owner, and cadence.',

  // ---------- AIGP: AI Governance Roles and Accountability ----------
  4105390: 'Deployment opens responsibility — monitoring, change, incidents, and user-impact review need standing owners.',
  4108012: 'Plural definitions produce metric drift. A data owner with an approved definition, lineage, and change control prevents the loop.',

  // ---------- AIGP: AI System Inventory and Risk Triage ----------
  4105363: 'You cannot govern what you cannot enumerate. The artifact is a maintained inventory with owners, uses, risk tier, and lifecycle.',
  4108013: 'A spreadsheet that scores customers is a model. Inventory and risk-rate it like any other operational logic.',
  4105332: 'Benefits eligibility is a different risk tier than playlist recs. Require fairness, explainability, appeal, and monitoring.',

  // ---------- AIGP: NIST AI RMF and Control Design ----------
  4220005: 'Govern sets culture, accountability, policy, resourcing. Map, Measure, Manage operate on individual systems downstream of it.',
  4220006: 'Map produces context, intended use, stakeholders, limitations, and an initial risk register — not verdicts or dashboards.',
  4108025: 'ZIP code is a textbook proxy variable. Review for fairness, privacy, explainability, and legal before release.',

  // ---------- AIGP: EU AI Act and Regulatory Readiness ----------
  4220007: 'Provider develops or places on market; deployer uses under its authority. Role tracks the act, not the jurisdiction.',
  4220008: 'Annex III enumerates high-risk uses. Eligibility for essential public benefits sits squarely inside it; entertainment recs do not.',
  4220009: 'High-risk requires conformity assessment, technical file, CE marking, EU declaration, and database registration — performance does not waive it.',
  4220010: 'GPAI obligations attach at the model layer regardless of downstream use, commercial status, or HQ location.',

  // ---------- AIGP: AI Impact Assessments and Documentation ----------
  4105333: 'High average accuracy can hide concentrated subgroup harm. Ask whether the disparity is unacceptable risk that needs mitigation.',
  4108020: 'A model card is purpose, intended users, training data, limitations, evaluation, risks, monitoring, and escalation — not a slogan.',

  // ---------- AIGP: Generative AI Evaluation and Security ----------
  4105334: 'Untrusted retrieved content steering the model is prompt injection. The control is instruction-content separation, not document removal.',
  4107711: 'Tone-based safety fails by design. Adversarial testing covers indirect, polite, and multi-step misuse patterns.',
  4105389: 'Perfect eval scores in ML usually mean training leaked into test. The principle is evaluation independence.',
  4107717: 'The model returned what retrieval gave it. Fix freshness, source ranking, metadata, and corpus ownership before blaming generation.',

  // ---------- AIGP: Transparency, Notices, and Human Oversight ----------
  4105336: 'Two-second approvals are oversight theater. Human-in-the-loop must be designed so the reviewer can actually challenge and override.',
  4108017: 'Auto-finality without appeal fails Article 14 and most consumer-protection norms. Add review, appeal, explanation, and thresholds.',

  // ---------- AIGP: Vendor Controls and Ongoing Monitoring ----------
  4108018: '"Trust us" is the textbook unacceptable answer. Require transparency, testing evidence, audit rights, and contractual obligations.',
  4107710: 'Default training-rights clauses usually exceed buyer policy. Examine data use, opt-out, confidentiality, retention, and deletion.',
  4107712: 'Vendor version changes are managed, not climatic. Require notice, regression tests, and a rollback plan.',
  4105335: 'Launch performance is a snapshot. Monitor for drift with thresholds that trigger review or retraining.',

  // ---------- Software Engineering: Code, Review, and Quality ----------
  4105340: 'Risk is not measured in line count. An auth change needs tests covering the security-sensitive behavior the diff touches.',
  4107997: 'A diff that mixes auth, billing, and copy invites missed defects. Ask for smaller logical changes or a review guide.',
  4107692: 'Rerun-until-green trains the team to ignore real failures. Fix or quarantine with ownership; do not normalize the noise.',

  // ---------- Software Engineering: Architecture and Tradeoffs ----------
  4105341: 'Reading another team\'s tables creates schema coupling invisible to their change tooling. Name the coupling risk.',
  4105368: 'Unowned production is a recurring outage. Assign ownership, write a runbook, set expectations, decide invest-or-retire.',
  4107700: 'ADRs preserve the original tradeoff logic so future teams can revisit decisions without starting from folklore.',

  // ---------- Software Engineering: Releases and Migrations ----------
  4105343: 'Dual-write\'s real risk is silent divergence under partial failure. Monitor consistency, failure handling, rollback, reconciliation.',
  4108000: 'Speed escalates lock duration. Plan for batching, online changes, timing, rollback, and performance testing.',
  4107693: 'A 20M-row backfill is a production change. Batch it, make it idempotent, monitor, and protect live traffic.',
  4108001: 'External integrations are the hidden consumer. Removing a field needs compatibility, deprecation, versioning, and communication.',

  // ---------- Software Engineering: Incidents and Reliability ----------
  4105345: 'Restore or mitigate user impact first. Root cause is a postmortem activity, not a live-incident debate.',
  4107699: 'Errors five minutes after deploy is timing evidence. Rollback can be the fastest mitigation while investigation continues.',
  4105372: 'Blameless does not mean vague. Postmortems carry timeline, contributing factors, user impact, what worked, and owned actions.',
  4108010: 'Distributed systems retry. Idempotency on event IDs or business keys is what prevents the duplicate subscription.',

  // ---------- Software Engineering: Technical Debt and Team Communication ----------
  4105346: 'Leaders allocate against consequences. Translate maintenance pain into delivery, reliability, security, or cost risk.',
  4107703: 'Deadlocks need explicit decision-making. Clarify criteria, compare tradeoffs, name the decider, document the outcome.',
  4105397: 'Universal priority is no priority. Limit WIP, finish high-value work, then open the next front.',
  4105395: 'Single-person knowledge is an outage waiting for a vacation. The fix is a tested runbook with symptoms, checks, rollback, and contacts.',
}

// -----------------------------------------------------------------------------
// CORRECT_SHORTENED — questions where `correct` was substantially longer than
// the longest distractor. Each entry shortens the correct line and routes the
// trimmed detail into a `lessonAddendum` so the underlying teaching is intact.
// -----------------------------------------------------------------------------

export const CAREER_TECH_CORRECT_SHORTENED: Record<
  number,
  { newCorrect?: string; lessonAddendum?: string }
> = {
  // Long enrichment lists — trim to the principle, push the checklist to addendum.
  4107948: {
    newCorrect: 'Enrich with device, MFA, travel, and user confirmation before deciding severity.',
    lessonAddendum: 'A useful enrichment pass covers device posture, MFA prompts, travel records, VPN egress geography, peer activity, and direct user confirmation. Geography alone is a signal, never a verdict.',
  },
  4107951: {
    newCorrect: 'Verify MFA, source, and actions taken, then decide whether root should be locked back down.',
    lessonAddendum: 'A complete root-sign-in review covers MFA status, source IP, exact API actions, any credential exposure, the emergency justification (if any), and a lockdown decision. Root use should be rare by design.',
  },
  4107950: {
    newCorrect: 'Investigate persistence: script contents, process lineage, and the affected account.',
    lessonAddendum: 'A full scoping pass also looks for similar scheduled tasks on other hosts. Attackers explicitly stage in user-writable temp paths to bypass AppLocker — temp is a feature for them, not a downside.',
  },
  4107957: {
    newCorrect: 'Test restores, validate recovery time and data integrity, and document recovery roles.',
    lessonAddendum: 'Backups also need to be protected from the same attacker that hit production (immutable or air-gapped copies). A catalog listing shows inventory, not restorability; corrupt or partial backups list normally until you try them.',
  },
  4107960: {
    newCorrect: 'Weigh business impact against volatile evidence and document the decision rationale.',
    lessonAddendum: 'The lead should also confirm containment alternatives (network isolation, memory capture) before a reboot, and record who decided what and why. A reboot clears memory-resident malware artifacts and process tree evidence — exactly what attackers count on losing.',
  },
  4220001: {
    newCorrect: 'Scope was not extended to other recipients, related accounts, persistence, or detection rules.',
    lessonAddendum: 'Eradication is per-campaign, not per-user. The team should sweep recipients of the same lure, related accounts, persistence mechanisms, and detection-rule coverage before declaring recovery.',
  },
  4220002: {
    newCorrect: 'A timeline mapping scope, legal review, regulator windows, and customer comms with named owners.',
    lessonAddendum: 'Regulator clocks (e.g., GDPR Art. 33) start at awareness, not at forensic completion. The notification decision belongs to legal, comms, and privacy — not whoever responds first in chat.',
  },

  // Cloud — verbose checklists.
  4107656: {
    newCorrect: 'Identify owners, verify usage, remove unused accounts, and narrow permissions on the rest.',
    lessonAddendum: 'Cloud identity hygiene reduces blast radius. Bulk deletion without usage analysis causes outages on the workloads still depending on those accounts; keeping unused accounts compounds lateral-movement risk.',
  },
  4107965: {
    newCorrect: 'Sealed storage, strong auth, logging, approval, and regular testing for break-glass access.',
    lessonAddendum: 'A break-glass credential with no approval or audit trail is indistinguishable from a backdoor. "Frictionless" is the failure mode, not the goal; design the path so emergency does not mean unaudited.',
  },
  4107966: {
    newCorrect: 'Review ingress rules, load balancer exposure, authentication, and deployment guardrails.',
    lessonAddendum: 'Internet-scanning bots discover unannotated endpoints within hours; obscurity is not a control plane. Private services need controls that match their intended audience.',
  },
  4107970: {
    newCorrect: 'Track flag ownership and expiry, then remove stale flag code after the migration.',
    lessonAddendum: 'Old flags compound into combinatorial test surface and produce mixed-state bugs that are hard to reproduce. Flags as informal documentation degrade as the system changes.',
  },
  4107660: {
    newCorrect: 'TTL, propagation timing, caching, and whether both paths are safe during the transition.',
    lessonAddendum: 'DNS changes are not instant for every resolver. Cutovers need TTL planning and compatibility while caches expire; the split between users is at the cache layer, not the application.',
  },
  4107657: {
    newCorrect: 'Health checks, routing policy, session stickiness, and instance registration.',
    lessonAddendum: 'Restarting healthy instances drops their in-flight requests onto the already-overloaded one and worsens the asymmetry. User affinity only exists when sticky sessions are configured.',
  },
  4107967: {
    newCorrect: 'User-centric latency, regional traces, synthetic checks, and journey-tied SLIs.',
    lessonAddendum: 'When the dashboard and user reality conflict, the dashboard is wrong by definition. CPU is a resource signal; checkout latency is a journey signal — doubling down on resource metrics will not surface user-facing failure.',
  },
  4107969: {
    newCorrect: 'Application connection handling, failover drills, retry behavior, and operational runbooks.',
    lessonAddendum: 'Database-side failover only matters if applications recover; partial success on one layer is full outage on the stack. Manual-restart-via-user-refresh is not an HA story.',
  },
  4107665: {
    newCorrect: 'Define an SLO with user impact, measurement, tradeoffs, and operational cost before committing.',
    lessonAddendum: 'Promises without measurement are unverifiable; "highest number" SLOs strand the team between marketing claim and operational truth. Each additional nine usually compounds the operating cost.',
  },
  4107964: {
    newCorrect: 'Scheduling, tagging, budgets, ownership, and rightsizing for nonproduction resources.',
    lessonAddendum: 'Predictable nonprod waste is the largest cloud-cost lever on most accounts. Cloud cost management needs ownership and automation; instances do not read calendar invites.',
  },
  4105378: {
    newCorrect: 'Quota visibility, alerting, capacity planning, and a path to request increases before peak.',
    lessonAddendum: 'Quotas are hard limits enforced at the API layer; they fail closed at the limit. Mature platforms track quota usage and demand patterns before they interrupt critical workflows.',
  },
  4107663: {
    newCorrect: 'Read replicas, query optimization, caching, or workload separation by consistency need.',
    lessonAddendum: 'Database scaling depends on workload shape. Vertical scaling without diagnosing the read/write split compounds cost without addressing the pattern.',
  },
  4107975: {
    newCorrect: 'Cache TTLs, invalidation process, deployment order, origin behavior, and verification after purge.',
    lessonAddendum: 'Caches expire on TTL, not on content classification; the policy update needs a targeted purge. Eliminating caching to fix one stale page imposes broad latency and cost regressions.',
  },

  // Enterprise SaaS — long stakeholder/value lists.
  4107980: {
    newCorrect: 'Map economic, technical, legal, security, and user stakeholders with their required approvals.',
    lessonAddendum: 'Procurement delays are usually traceable to a specific missing approval; "moody" is the symptom of an unmapped stakeholder. Surface each approver and the evidence they need before commitment.',
  },
  4107983: {
    newCorrect: 'Pause to define data mapping, cleansing rules, ownership, validation, and go-live impact.',
    lessonAddendum: 'Data migration is business logic, not just file movement. Regional differences in field semantics are exactly what cause the dashboards to disagree; ignoring them does not unify them.',
  },
  4107676: {
    newCorrect: 'Manager buy-in, workflow fit, enablement gaps, competing tools, and personal value.',
    lessonAddendum: 'Unused licenses are the leading signal of downgrade or churn at renewal. Adoption is a behavior-change problem; repeating the failed message does not change the outcome.',
  },
  4107985: {
    newCorrect: 'Reconfirm stakeholders, new workflows, value metrics, and an adoption recovery plan.',
    lessonAddendum: 'Reorgs explicitly redistribute control; assumed continuity is the failure mode. Six months is enough time to re-earn sponsorship if the work starts now.',
  },
  4107680: {
    newCorrect: 'A value narrative with outcomes, usage, stakeholder support, risks, and a re-earn plan.',
    lessonAddendum: 'Sponsor opinions are personal; the new executive starts at zero, not at "previous executive\'s position." The account team owns the value narrative — procurement evaluates terms, not value.',
  },
  4105362: {
    newCorrect: 'Usage, outcomes, stakeholder support, commercial options, and a walkaway strategy.',
    lessonAddendum: 'Discounting reflexively trains procurement to compress every renewal. Procurement\'s job is to test price; the value data is the team\'s leverage against that test, not a liability.',
  },
  4105326: {
    newCorrect: 'Discovery context, success criteria, stakeholders, risks, promises, and implementation requirements.',
    lessonAddendum: 'Good handoffs preserve the buying context so implementation and customer success can deliver what was promised. Celebration without context produces an enthusiastic but uninformed CS team.',
  },
  4107992: {
    newCorrect: 'Tenant isolation, configuration testing, and whether the customization should become supported.',
    lessonAddendum: 'A per-tenant patch the codebase does not formally support creates a hidden fork; the same bug returns on the next shared release. Eliminating customization removes legitimate flexibility — the issue is uncontrolled customization, not customization itself.',
  },
  4107991: {
    newCorrect: 'Reconcile the promise with approved terms, pricing, support capacity, and formal approval.',
    lessonAddendum: 'Email is enforceable evidence of representation but is not approved against support capacity; honoring it strands the support team. Side promises create delivery and trust risk.',
  },
  4220004: {
    newCorrect: 'A documented triage path with severity, reproduction data, owner, and intake.',
    lessonAddendum: 'Personal-network routing is unmeasured, untracked, and breaks when either person changes role. Direct intake bypasses prioritization and optimizes for the loudest CS manager, not the highest-impact bug.',
  },

  // AIGP — long compliance lists.
  4105390: {
    newCorrect: 'Assign accountable owners for performance, changes, incidents, and user-impact review.',
    lessonAddendum: 'AI systems need lifecycle owners. Deployment opens responsibility — monitoring, incident response, complaints, and decommissioning all live downstream of launch.',
  },
  4108012: {
    newCorrect: 'A data owner, approved definition, stewardship process, lineage, and change-control path.',
    lessonAddendum: 'Plural definitions produce metric drift, irreconcilable reports, and recurring meetings. Auditors and regulators ask how a number was defined, not how it was rendered.',
  },
  4105363: {
    newCorrect: 'A maintained AI-system inventory with owners, uses, risk tier, and lifecycle status.',
    lessonAddendum: 'Governance starts with knowing what exists. Inventories support ownership, risk review, monitoring, and retirement decisions; a non-shared file with no owner is indistinguishable from no inventory.',
  },
  4108013: {
    newCorrect: 'Bring it into inventory with purpose, inputs, owner, risk rating, validation, and monitoring.',
    lessonAddendum: 'Operational scoring logic is a model regardless of the tool; AIGP triage applies to outcome-affecting logic, not file extensions. Re-labeling an algorithm as "intuition" launders accountability without changing it.',
  },
  4105332: {
    newCorrect: 'Higher-risk review covering affected people, fairness, explainability, appeal, and monitoring.',
    lessonAddendum: 'Benefits decisions have direct, durable impact on housing outcomes — a different tier in any risk taxonomy. The EU AI Act explicitly classifies this kind of use as high-risk; "launch and learn" creates documented harms.',
  },
  4220006: {
    newCorrect: 'System context, intended use, stakeholders, known limitations, and an initial risk register.',
    lessonAddendum: 'NIST AI RMF Map establishes system context and an initial risk register. Final fairness metrics come out of Measure; the launch decision is a Manage-stage outcome. Map produces context, not verdicts.',
  },
  4108025: {
    newCorrect: 'Review the feature for fairness, privacy, explainability, and documented approval.',
    lessonAddendum: 'ZIP code is a classic proxy for race and income in US data; uncontrolled use is the textbook RMF Measure-stage failure. Hidden features fail every audit and produce worse legal exposure than disclosed and reviewed ones.',
  },
  4220009: {
    newCorrect: 'Conformity assessment, CE marking, EU declaration of conformity, and EU database registration.',
    lessonAddendum: 'High-risk AI systems require a technical file and risk-management system in addition to the conformity assessment. Performance does not waive conformity; the assessment is procedural and required regardless of test results.',
  },
  4220010: {
    newCorrect: 'GPAI provider obligations: technical documentation, training-data summary, and copyright policy.',
    lessonAddendum: 'GPAI obligations attach at the model level independently of downstream use, commercial status, or HQ location. The EU AI Act layers GPAI obligations on top of system-level obligations.',
  },
  4108020: {
    newCorrect: 'Purpose, intended users, training data, limitations, evaluation, risks, monitoring, and contacts.',
    lessonAddendum: 'Model documentation should help users and reviewers understand intended use, limits, and controls. A model card is structure, not a marketing claim with a date.',
  },
  4107717: {
    newCorrect: 'Content freshness, source ranking, metadata, evaluation cases, and corpus ownership.',
    lessonAddendum: 'Retrieval systems depend on source quality. The model returned what retrieval gave it; the failure is in the corpus, not the generation. User-side disclaimers do not satisfy the obligation to surface current rules.',
  },
  4108017: {
    newCorrect: 'Human review, appeal process, decision explanation, risk thresholds, and outcome monitoring.',
    lessonAddendum: 'Automated finality without appeal violates EU AI Act Article 14 obligations and most US sector consumer-protection norms. Message tone does not satisfy the substantive obligation to provide explanation and review.',
  },
  4108018: {
    newCorrect: 'Transparency, testing evidence, risk controls, audit rights, monitoring, and contractual terms.',
    lessonAddendum: '"Trust us" is the textbook unacceptable answer for high-impact systems under every major framework (NIST RMF, EU AI Act vendor chain, IAPP AIGP). Vendor confidence has no audit value; the buyer remains accountable for outcomes.',
  },
  4107710: {
    newCorrect: 'Data-use rights, opt-out terms, confidentiality, retention, deletion, and policy alignment.',
    lessonAddendum: 'Default training-rights clauses typically grant broader use than buyer policy permits — that is why review exists. Helpful-to-vendor is not the same as compliant-for-buyer; the buyer\'s downstream privacy commitments still apply.',
  },

  // Software Engineering — long checklists.
  4108000: {
    newCorrect: 'Batching, online schema changes, timing, rollback plan, and performance testing.',
    lessonAddendum: 'Production migrations need operational design. Speed without batching escalates the lock duration into a longer outage; Friday-evening migrations concentrate risk into the worst possible response window.',
  },
  4107693: {
    newCorrect: 'Batching, idempotency, monitoring, rollback or repair steps, and live-traffic protection.',
    lessonAddendum: 'Large backfills are production changes. A single transaction across 20M rows holds locks long enough to take the application offline; script confidence is not telemetry.',
  },
  4108001: {
    newCorrect: 'API compatibility, consumer discovery, deprecation policy, versioning, and communication.',
    lessonAddendum: 'External integrations are the canonical hidden consumer; "what we ship" is rarely the full consumer set. Renaming is removal plus addition; existing consumers still break and the audit trail is worse.',
  },
  4105372: {
    newCorrect: 'Timeline, contributing factors, user impact, what worked, and accountable follow-up actions.',
    lessonAddendum: 'Useful postmortems turn incidents into system learning. Blameless does not mean vague; actions still need owners and dates. Blame surfaces a name and hides the system that allowed the error.',
  },
  4107703: {
    newCorrect: 'Clarify decision criteria, compare tradeoffs, choose a decider, and document the outcome.',
    lessonAddendum: 'Engineering collaboration needs explicit decision-making. Tiredness is not a decision mechanism; compromise designs that satisfy nobody architecturally are usually worse than either original.',
  },
  4105395: {
    newCorrect: 'A tested runbook covering symptoms, checks, rollback, escalation, and owner contacts.',
    lessonAddendum: 'Operational knowledge should not live in one head. Runbooks turn recovery into a repeatable team capability; untested runbooks fail on first use.',
  },
}
