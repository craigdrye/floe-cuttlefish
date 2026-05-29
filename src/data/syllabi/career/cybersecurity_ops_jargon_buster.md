# Cybersecurity Ops Jargon Buster
**ID**: `cybersecOpsJargon` - **Discipline**: Technology - **Level**: Career

## Course Aim
Security operations runs on shorthand. Analysts say "the token is burned," "check the blast radius," "that's just the SIEM doing improv," and an outsider hears noise. This course turns that shorthand into decisions. The goal is not to make you a malware reverse-engineer; it is to make you the person in the room who can hear a SOC handoff, separate the scary phrase from the real task, and say what to check, who to tell, and what action actually reduces risk right now.

The spine of the course is the incident lifecycle that every serious team uses some version of: detect and triage, understand identity and access, investigate across endpoint, network, and cloud, contain and recover, then communicate and learn. We anchor the vocabulary to the frameworks practitioners cite — NIST SP 800-61's four phases, MITRE ATT&CK tactics, CVSS severity, the IOC/IOA/TTP distinction — so the words point at something real rather than floating as buzzwords. Where a term is genuinely contested or vendor-flavored (XDR, MDR, "next-gen" anything), we say so.

By the end you should be able to read a raw alert and state confidence, scope, and next step; tell a credential problem from a malware problem from a misconfiguration; choose a containment action that buys time without nuking production; and write an executive update that a non-technical VP can act on. The register is adult and fast. We respect that you have seen a terminal, but we explain every acronym the first time it earns its place.

## Course Design Notes
Route a question here when it tests SOC and incident-response shorthand: alert triage, IOC/IOA reasoning, severity and confidence, identity compromise, lateral movement, cloud exposure, containment vs. eradication, evidence preservation, escalation thresholds, and translating cyber into plain business English. The existing bank (IDs 7601-7620) uses a "decode the colorful quote" voice — a colleague says something vivid and the learner identifies the real operational ask. New exam-grade items should instead test the underlying concept directly: definitions, the right next action, and the common confusion between two adjacent terms.

Keep three discipline rules. First, every question must resolve to a concrete action or a correct distinction, never vibes. Second, distractors should be the mistakes real analysts make — over-containment, declaring breach on aesthetics, confusing detection with prevention, blaming the user when it is a governance gap — not absurd filler. Third, prefer evergreen mechanics (how Kerberos tickets get abused, why public S3 buckets leak) over today's CVE of the week, and date anything version-specific (CVSS 4.0 ranges, ATT&CK tactic IDs) so it can be refreshed.

## Chapter 1: Alerts, Signals, and Triage
- **Core questions**: What is the difference between an event, an alert, and an incident? How do severity and confidence combine to set priority? When is the right move to investigate, escalate, or close as a false positive?
- **Key concepts**: event vs. alert vs. incident; true/false positive and negative; severity vs. confidence; enrichment; alert fatigue; SIEM, EDR, XDR, SOAR, and MDR as distinct layers; triage note (signal, scope, confidence, next step).
- **Applied skills**: read a raw alert and write a one-line triage verdict; rank a queue by business impact, not arrival order; explain why a tool is detection vs. prevention.
- **Common traps**: treating every alert as equal "to be fair"; reading high severity as high confidence; calling a missed detection a false positive; assuming a noisy alert class is always benign.

## Chapter 2: Threat Vocabulary and Frameworks
- **Core questions**: What does an IOC tell you that an IOA does not? Where do TTPs sit on the Pyramid of Pain and why does that matter? How do MITRE ATT&CK tactics describe an attacker's goals?
- **Key concepts**: IOC (hash, IP, domain) vs. IOA (behavior in progress) vs. TTP; MITRE ATT&CK tactics and the kill-chain ordering; Pyramid of Pain; CVSS base score and the 4.0 severity bands (None 0.0, Low 0.1-3.9, Medium 4.0-6.9, High 7.0-8.9, Critical 9.0-10.0); CVE vs. CWE; threat intel relevance vs. global interest.
- **Applied skills**: map an observed behavior to an ATT&CK tactic; decide whether an indicator is relevant to your environment; read a CVSS score and a CVE ID correctly.
- **Common traps**: confusing CVE (a specific flaw) with CWE (a weakness class); treating CVSS base score as a measure of your actual risk; escalating every threat-intel item regardless of applicability; thinking a blocked hash meaningfully hurts a capable adversary.

## Chapter 3: Identity and Access Language
- **Core questions**: Which access path is exposed, and must it be disabled, rotated, or reviewed? How do attackers abuse credentials, tokens, and tickets after the password is gone? What does "impossible travel" actually mean?
- **Key concepts**: credential vs. token vs. session; MFA and MFA fatigue/push-bombing; privilege escalation; service and machine accounts; least privilege and privilege sprawl; pass-the-hash, Kerberoasting, golden ticket, OAuth/session token theft; session revocation and credential rotation; impossible travel.
- **Applied skills**: choose between revoke, rotate, and disable for a given compromise; recognize an attack that bypasses MFA without a single failed login; build an account-compromise response checklist.
- **Common traps**: assuming MFA stops a stolen session token; rotating a password while leaving the live token valid; treating a friendly departure as low offboarding risk; mistaking privilege sprawl for intentional federation.

## Chapter 4: Endpoint, Network, and Cloud Investigation
- **Core questions**: Is this host compromised, is data exposed, and how far has the attacker moved? Which signal points at endpoint, which at network, which at cloud identity?
- **Key concepts**: EDR telemetry and suspicious process chains; C2 (command and control) and beaconing; lateral movement and persistence; data exfiltration vs. benign egress; cloud bucket/object exposure; security groups and network ACLs; workload/machine identity and over-permissioned roles; DNS and proxy logs as evidence.
- **Applied skills**: read an egress spike and decide exfiltration vs. backup; spot lateral movement in connection patterns; trace a public-bucket finding to "what data was exposed."
- **Common traps**: shutting down all cloud services on one egress alert; assuming network "drift" instead of checking for movement; treating a misconfigured-public bucket as a naming problem; confusing persistence (staying in) with lateral movement (spreading).

## Chapter 5: Containment, Eradication, and Recovery
- **Core questions**: What action reduces harm fastest without breaking production? What is the difference between containing, eradicating, and recovering? What evidence must survive the response?
- **Key concepts**: NIST SP 800-61 lifecycle (Preparation; Detection and Analysis; Containment, Eradication, and Recovery; Post-Incident Activity); isolate/block/revoke/rotate/patch; eradication vs. recovery; forensic preservation and order of volatility; rollback path and production risk; "short-term vs. long-term" containment.
- **Applied skills**: pick the fastest safe containment step and name its rollback; preserve volatile evidence before poking a host; sequence containment, eradication, and recovery correctly.
- **Common traps**: wiping or rebooting a host and destroying volatile evidence; calling containment "done" when the attacker still has persistence; restoring from a backup made after the compromise; over-containing (blocking all traffic) when a scoped block would do.

## Chapter 6: Communication, Escalation, and Roles
- **Core questions**: Who needs to know, and when does this cross from "SOC handles it" to "wake leadership and legal"? What is confirmed versus still unknown? How do you say it in plain English?
- **Key concepts**: incident commander and the severity bridge; SOC tiers and escalation thresholds; executive update (what happened, what matters, what we're doing, decisions needed); customer and regulatory notification (and that "report" timelines are jurisdiction-specific); separating confirmed facts from working theories.
- **Applied skills**: write a four-line exec update with no jargon; decide the escalation threshold from impact, not panic; state confidence levels honestly to leadership.
- **Common traps**: escalating everything at the first alert; waiting for total certainty before notifying; burying impact under threat-feed terminology; presenting a theory as a confirmed breach.

## Chapter 7: Detection Engineering and Post-Incident Learning
- **Core questions**: How do you cut false positives without going blind? What makes a postmortem useful instead of a blame ritual? How do recurring issues reveal a governance gap rather than a user problem?
- **Key concepts**: detection tuning and the precision/recall trade-off; signal vs. ceremony in exercises; blameless postmortem and root-cause vs. proximate cause; control gaps; purple-team findings that improve real detection; recurring-failure pattern analysis (people vs. tooling vs. governance).
- **Applied skills**: tighten a noisy rule while preserving real coverage; write a postmortem that lands on control gaps and owners; classify a repeating incident by root cause layer.
- **Common traps**: disabling a detection instead of tuning it; postmortems that blame "complexity" or individuals; treating a systemic governance failure as a one-off user error; optimizing the exercise's optics over its findings.

## Capstone
Take a noisy SOC handoff — a privileged account with odd logins, an EDR alert on a child process, and an egress spike to an unfamiliar host — and turn it into a prioritized incident plan. State the working hypothesis and your confidence, map the observed behavior to ATT&CK tactics, decide what to revoke/rotate/isolate first and what could break, name the evidence to preserve before touching the host, set the escalation threshold for leadership and legal, and draft the four-line executive update. The deliverable is the document a real incident commander could act on at 2 a.m.: facts, scope, actions, owners, and the decisions still needed.
