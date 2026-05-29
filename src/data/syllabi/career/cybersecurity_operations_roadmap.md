# Cybersecurity Operations Roadmap
**ID**: `cybersecurityOperationsRoadmap` - **Discipline**: Technology - **Level**: Career

## Course Aim
This course prepares an adult learner to think and speak like a working member of a security operations team. A SOC analyst lives in the gap between a flood of raw signals and a small number of decisions that actually reduce risk: which alert is noise, which account is exposed, where the attacker has moved, what to contain first without breaking production, and what to tell leadership while the picture is still incomplete. The goal is fluency in that translation — turning telemetry into calm, defensible next actions.

The roadmap is deliberately operational rather than tool-specific. Vendors change; the reasoning does not. Across the chapters you will internalize the canonical incident-response lifecycle (preparation, detection and analysis, containment/eradication/recovery, post-incident activity), the vocabulary of modern attacks (lateral movement, persistence, command-and-control, exfiltration, token theft), and the frameworks practitioners actually cite in handoffs — MITRE ATT&CK, the Pyramid of Pain, the kill chain, CVSS/EPSS/KEV for exposure triage. You will also learn the parts of the job that are not technical at all: how a regulator's clock starts at *awareness*, why an unverified backup is not a recovery plan, and how a "good" metric can quietly hide risk.

By the end you should be able to take a noisy, ambiguous security event and do four things well: triage it with evidence instead of reflex, scope it across host, identity, network, and cloud, contain it in proportion to confirmed risk, and communicate it in a form a decision-maker can act on. That combination — evidence, scope, proportion, clarity — is what separates a responder from someone who simply reacts.

## Course Design Notes
Route questions here when they test SOC workflows, alert triage, detection engineering, threat intelligence, identity compromise, endpoint/network/cloud exposure, vulnerability and patch prioritization, incident-response methodology, containment, eradication, recovery, evidence preservation, post-incident learning, security metrics, or breach communication and disclosure obligations.

The voice is a senior practitioner mentoring a capable junior analyst: concrete scenarios, no jargon left undefined, and a relentless focus on the *next defensible action*. Every chapter surfaces Common traps because the highest-value learning in operations is recognizing the seductive-but-wrong move — over-escalating noise, under-scoping a campaign, destroying volatile evidence, or speaking with false confidence. Keep facts current: prefer the NIST SP 800-61 lifecycle and CSF 2.0 framing, MITRE ATT&CK Enterprise (14 tactics), CISA KEV plus EPSS for exploit-likelihood, and post-2023 disclosure rules (SEC Item 1.05 four-business-day materiality clock; GDPR Article 33 72-hour awareness clock). Distractors should be plausible-but-flawed, not silly.

## Chapter 1: SOC Triage and Alert Quality
- **Core questions**: What does this alert actually tell us? What evidence would change its severity? What is the next thing to check before anyone escalates?
- **Key concepts**: event vs alert vs incident; severity vs confidence; enrichment (identity, device, geo, timing, peer activity); false positive vs true positive; alert fatigue and its consequences; baselining normal behavior.
- **Applied skills**: write a triage note that states the signal, the enrichment performed, the working hypothesis, and the recommended disposition; distinguish a tuning decision from a suppression decision.
- **Common traps**: escalating every failed login; auto-closing alerts with a convenient story ("they're on vacation"); blanket-suppressing a noisy rule on a real attacker tool instead of tuning it by context.

## Chapter 2: Detection Engineering and Threat Intelligence
- **Core questions**: Are we detecting behavior or just artifacts? How much does this detection cost the attacker to evade? What turns an indicator into an actionable detection?
- **Key concepts**: IOC vs IOA (indicators of compromise vs of attack); the Pyramid of Pain (hashes and IPs are cheap to change, TTPs are expensive); MITRE ATT&CK tactics vs techniques and the Enterprise matrix; the Lockheed Martin Cyber Kill Chain; detection-as-code and rule tuning; threat-intel confidence and handling (TLP).
- **Applied skills**: map an observed behavior to an ATT&CK technique; choose where on the Pyramid of Pain to invest detection effort; evaluate whether a detection rule produces actionable signal or volume.
- **Common traps**: treating a blocked file hash as durable defense; confusing a tactic (the goal) with a technique (the method); hoarding low-value atomic indicators while ignoring behavioral patterns.

## Chapter 3: Identity, Access, and Privilege
- **Core questions**: Which identity is exposed, and what does it unlock? What should be revoked, rotated, or reviewed — and in what order? How did urgency become standing privilege?
- **Key concepts**: credentials, sessions, and tokens; MFA and MFA fatigue/push-bombing; session revocation vs password reset; OAuth consent and refresh-token abuse; privilege escalation; service accounts; least privilege; just-in-time and break-glass access; access reviews.
- **Applied skills**: build a compromised-account response checklist (revoke sessions, rotate secrets, review downstream access, hunt for siblings); design a time-bound emergency-access path that is logged and auto-expiring.
- **Common traps**: trusting a "trusted device" token that was stolen; resetting a password without revoking active sessions; leaving emergency admin rights permanent; treating a shared credential as low-risk because "everyone already knows it."

## Chapter 4: Endpoint, Network, and Cloud Scope
- **Core questions**: What is affected? Has the attacker moved? Is data exposed? Where is the persistence?
- **Key concepts**: EDR/XDR telemetry; process lineage (parent-child); persistence mechanisms (scheduled tasks, run keys, services); lateral movement (ATT&CK TA0008) and command-and-control; exfiltration; network segmentation and blast radius; cloud exposure (public buckets, over-broad security groups, root/break-glass account use).
- **Applied skills**: build a scope map across host, identity, network, and cloud; read a persistence artifact and decide what to preserve before removing it; reason about reachability on a flat vs segmented network.
- **Common traps**: deleting a scheduled task before analyzing it; assuming an obscure bucket name is access control; treating a single alerting host as the whole footprint; mistaking renaming/relabeling for an actual control change.

## Chapter 5: Vulnerability and Exposure Management
- **Core questions**: Of thousands of open findings, which do we fix first? What signal proves a vulnerability is dangerous *now* rather than in theory?
- **Key concepts**: CVE identifiers and CVSS base severity; EPSS (exploit-prediction probability); CISA's Known Exploited Vulnerabilities (KEV) catalog as confirmed in-the-wild exploitation; internet-facing vs internal exposure; risk-based patching and SLAs; compensating controls when patching is blocked; the difference between a vulnerability, an exposure, and an exploit.
- **Applied skills**: rank a queue using KEV-then-EPSS-then-CVSS-plus-context; justify a patch SLA to a system owner; propose a compensating control for an unpatchable system.
- **Common traps**: patching strictly by CVSS score and ignoring active exploitation; treating a high CVSS with near-zero EPSS as an emergency; assuming an internal system needs no urgency when it is KEV-listed and reachable.

## Chapter 6: Incident Response Lifecycle, Containment, and Recovery
- **Core questions**: Which phase are we in? Which action reduces risk fastest without breaking production? Is the foothold truly gone before we restore?
- **Key concepts**: the NIST SP 800-61 lifecycle (preparation; detection and analysis; containment, eradication, recovery; post-incident activity) and the SANS PICERL mnemonic; short- vs long-term containment; eradication as per-campaign not per-user; recovery and validated backups; chain of custody and volatile-evidence order; ransomware response sequencing.
- **Applied skills**: write a containment plan with owner, risk, and rollback; sequence contain-before-restore in an active-encryption scenario; decide reboot-vs-preserve and document the rationale.
- **Common traps**: restoring during active spread; calling eradication "done" after fixing only the first victim; rebooting a host and destroying memory-resident evidence; trusting an untested backup because it appears in the catalog.

## Chapter 7: Incident Communication and Command
- **Core questions**: Who is deciding? What is confirmed versus unknown? What does this audience need to make their next decision?
- **Key concepts**: the incident commander role and decision rights; the situation-report format (confirmed facts, current impact, actions underway, unknowns, next decision point); bounded uncertainty; stakeholder mapping (responders, leadership, customers, partners, legal); indicator sharing with caveats and handling rules; avoiding speculation under pressure.
- **Applied skills**: write an executive incident update mid-investigation; resolve conflicting directions by naming command structure; scope what indicators are safe to share with a partner.
- **Common traps**: speculating confidently to sound decisive; going silent until "everything is final"; dumping raw logs on executives; letting the loudest voice or the first responder in chat make a command decision.

## Chapter 8: Post-Incident Learning, Metrics, and Disclosure
- **Core questions**: What did this incident teach us, and how does that change preparation? Does this metric measure risk or just activity? When does a legal clock start?
- **Key concepts**: blameless post-incident review and lessons-learned feeding back into preparation; MTTD/MTTR and dwell time; Goodhart's law and metric gaming (threshold drift); detection-coverage measurement; breach-notification obligations — SEC Form 8-K Item 1.05 (disclose a *material* incident within four business days of the materiality determination) and GDPR Article 33 (notify the supervisory authority without undue delay and within 72 hours of *awareness*, with phased notification allowed).
- **Applied skills**: run a post-incident review that produces concrete preparation changes; pair a volume metric with a quality and coverage metric; map a confirmed exposure to its notification timeline with named owners.
- **Common traps**: celebrating fewer escalations after quietly raising the threshold; treating ticket closure as eradication; waiting for 100% forensic certainty before notifying a regulator whose clock started at awareness.

## Capstone
You receive a noisy SOC shift handoff: a clicked phishing lure, an impossible-travel sign-in on a "trusted" device, a new scheduled task on a finance workstation, a public storage bucket, and a leadership request for an update. Turn it into a prioritized incident plan. Triage and enrich the signals; map observed behavior to ATT&CK techniques; scope the footprint across host, identity, network, and cloud; identify the exposed identities and what they unlock; prioritize any vulnerabilities using KEV/EPSS/CVSS; build a containment plan with owner, risk, and rollback that protects production; confirm eradication is per-campaign before recovery; draft an executive situation report bounded by confirmed facts; and lay out the post-incident review plus any SEC/GDPR notification timeline with named owners. Deliverable: a one-page incident plan a calm responder could execute.
