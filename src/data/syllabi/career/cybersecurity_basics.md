# Cybersecurity Basics
**ID**: `cybersecurity` · **Discipline**: Technology · **Level**: Career

## Course Aim
Most security incidents do not begin with a genius hacker bypassing a firewall. They begin with a hurried person clicking a link, reusing a password, approving an unexpected prompt, or wiring money to a familiar-looking vendor. This course teaches the practical, defensive cybersecurity that any adult joining a modern workplace actually needs: how to recognize the attacks aimed at you, protect your identity, build secure habits, and act calmly when something goes wrong.

The course is grounded in widely used public frameworks — the NIST Cybersecurity Framework 2.0 (Govern, Identify, Protect, Detect, Respond, Recover), CISA's "Secure Our World" guidance, and the entry-level body of knowledge behind certificates such as the Google Cybersecurity Certificate and CompTIA Security+. It deliberately stays beginner-friendly: no command line, no exploit code. Instead it builds the mental models and vocabulary that let a non-specialist make good decisions and work credibly alongside a security team.

By the end, a learner should be able to reason about risk in plain language, triage a suspicious message, set up identity protection that survives a stolen password, understand who is responsible for what in the cloud, slow the spread of malware, read a basic alert, follow an incident playbook without panicking, and describe the security roles they might grow into. The emphasis throughout is judgment under pressure, because that is where security actually succeeds or fails.

## Course Design Notes
- **Audience**: employees, founders, analysts, and career switchers — not aspiring penetration testers. Examples are office-realistic (invoices, shared inboxes, laptops in cafes, cloud drives), not lab-realistic.
- **Frameworks used as scaffolding, not trivia**: the CIA triad and NIST CSF 2.0 functions appear as recurring thinking tools rather than facts to memorize. Learners should be able to *use* them, not just name them.
- **Threat realism is kept current**: the course names the attacks people are actually losing to in 2025–2026 — business email compromise, MFA fatigue / push bombing, QR-code phishing ("quishing"), credential stuffing, and ransomware that hunts for backups — and explains the modern defenses (phishing-resistant MFA / passkeys, immutable backups, least privilege).
- **Every chapter ends in a work product**, so the course doubles as a starter toolkit a learner can take to a real team.
- **Common traps are taught explicitly** because in security the plausible-sounding wrong answer (share the code, hold the door, pay the invoice, ignore the alert) is the one that causes breaches.

## Chapter 1: Security Thinking and Risk
- **Core questions**: What are we protecting, from whom, and what does failure cost? How do likelihood and impact combine into risk?
- **Key concepts**: confidentiality, integrity, availability (the CIA triad); threat vs vulnerability vs risk; likelihood and impact; attack surface; the NIST CSF 2.0 functions (Govern, Identify, Protect, Detect, Respond, Recover) as a lifecycle.
- **Applied skills**: build a simple risk register for a device, team, or small business; distinguish a vulnerability (a weakness) from a threat (something that could exploit it) from a risk (the resulting exposure); justify *why* a control is worth its cost.
- **Common traps**: treating "we've never been breached" as evidence of safety; confusing a threat with a vulnerability; chasing exotic attacks while ignoring the boring high-likelihood ones; assuming obscurity is a control.
- **Work product**: a one-page risk register listing assets, plausible threats, current controls, and a likelihood × impact rating.

## Chapter 2: Phishing, Social Engineering, and Credential Theft
- **Core questions**: What makes this message suspicious? What emotion is it engineering? What is the safest next action?
- **Key concepts**: phishing, spear phishing, pretexting, business email compromise (BEC) and vendor/invoice fraud, vishing (voice) and smishing (SMS), QR-code phishing ("quishing"), credential stuffing, the role of urgency and authority; reporting culture.
- **Applied skills**: triage a message by sender, links, urgency, and request; verify a payment or account change through an independent ("out-of-band") channel; report rather than delete; recognize that BEC is among the costliest crimes by dollar loss precisely because the email looks legitimate.
- **Common traps**: trusting a display name or logo as proof of identity; using the phone number or link *inside* the suspicious message to "verify"; treating low-tech attacks as low-risk; staying silent after a click out of embarrassment.
- **Work product**: a phishing triage guide with annotated examples, red flags, and escalation steps.

## Chapter 3: Identity and Access
- **Core questions**: Which accounts deserve the strongest protection? Who has access they no longer need? What happens when a factor or recovery path is lost or abused?
- **Key concepts**: password managers, unique long passphrases, MFA and the differences between factor types (SMS code, authenticator app, push, hardware key/passkey), phishing-resistant MFA (FIDO2/WebAuthn, passkeys), MFA fatigue / push bombing, recovery codes, least privilege, role-based access control, the joiner-mover-leaver lifecycle.
- **Applied skills**: pick the strongest practical factor for a given account; explain why a shared admin password destroys accountability; close the recovery-path gap that quietly bypasses strong login; promptly deprovision a leaver.
- **Common traps**: thinking any MFA is equally strong (SMS and push are phishable/fatigable; passkeys are not); approving an unexpected push to "make it stop"; leaving leavers' accounts active "just in case"; protecting the front door while leaving a weak password-reset back door.
- **Work product**: an access-hygiene checklist for a small team, including factor choices and an offboarding step.

## Chapter 4: Devices, Networks, and Cloud Basics
- **Core questions**: Which setting reduces the biggest risk on this device? In the cloud, who is responsible for what?
- **Key concepts**: timely updates/patching, endpoint protection, full-disk encryption, screen lock, encryption at rest vs in transit (TLS/HTTPS), what a VPN does and does not protect, public Wi-Fi risk, the cloud shared-responsibility model across IaaS/PaaS/SaaS, cloud misconfiguration (e.g., public storage buckets).
- **Applied skills**: produce a secure-setup checklist for laptop, phone, and cloud workspace; correctly assign a responsibility (patching the guest OS vs the data center) under shared responsibility; explain why HTTPS already protects data in transit so a VPN is not a cure-all.
- **Common traps**: believing "the cloud provider handles all our security"; assuming a VPN encrypts data at rest or stops phishing/malware; thinking HTTPS makes a site trustworthy (it only means the connection is encrypted); deferring updates indefinitely.
- **Work product**: a secure-setup checklist plus a one-line responsibility map for the team's main cloud service.

## Chapter 5: Malware, Ransomware, and Common Attacks
- **Core questions**: How could this get in? Where could it reach? Which control slows the spread, and how would we recover?
- **Key concepts**: malware families (viruses, worms, trojans, spyware), ransomware and double extortion, malicious attachments and macros, drive-by downloads, lateral movement, blast radius, the role of backups, the 3-2-1 rule and the modern addition of an immutable/air-gapped copy.
- **Applied skills**: map an attack path to a control and an owner; explain why ransomware actors now target backups, and why an immutable or offline copy is the one that survives; reason about how segmentation and least privilege shrink blast radius.
- **Common traps**: assuming a backup on the same network is safe (lateral movement reaches it); believing antivirus alone is sufficient; treating paying the ransom as a guaranteed recovery; confusing "we have backups" with "we have tested, isolated backups."
- **Work product**: a prevention map linking attack path → control → owner → evidence, plus a backup check against 3-2-1(-1).

## Chapter 6: Logging, Monitoring, and Detection Basics
- **Core questions**: What event is worth logging? Which alert is actually urgent? What context would help the next investigator?
- **Key concepts**: logs and audit trails, alerts, SIEM (centralized log correlation), indicators of compromise (IOCs) vs indicators of attack (IOAs), false positives and alert fatigue, anomaly detection, ticket quality, mean time to detect.
- **Applied skills**: write a clear incident ticket with timeline, affected assets, indicators, and current status; distinguish a true positive from a false positive and explain the cost of getting tuning wrong; explain why IOCs catch known threats after the fact while IOAs aim at behavior in progress.
- **Common traps**: logging everything and reading nothing; closing alerts to "clean the queue"; treating every alert as equally urgent; assuming an IOC match always means a confirmed breach without validation.
- **Work product**: a sample incident ticket and a short triage rubric for "urgent vs investigate vs likely-noise."

## Chapter 7: Incident Response
- **Core questions**: What should be isolated first? Who must be told, and when? What evidence must be preserved?
- **Key concepts**: the incident-response lifecycle (preparation, identification, containment, eradication, recovery, lessons learned), containment vs eradication, evidence preservation and chain of custody, communication and notification duties, the blameless post-incident review.
- **Applied skills**: choose the first action for a suspicious login, lost device, or phishing click; contain without destroying forensic evidence; identify who needs to know (security, legal/privacy, leadership, affected users); run a lessons-learned review that fixes process, not people.
- **Common traps**: "cleaning up" (deleting files/emails) and erasing the evidence; waiting to see if anyone notices a possible data leak when notification clocks are already running; isolating nothing because it might be a false alarm; turning the retro into a blame session that guarantees the next person stays quiet.
- **Work product**: a one-page incident playbook for a suspicious login, a lost device, and a phishing click.

## Chapter 8: Security Culture and Career Paths
- **Core questions**: How do you make the safe path the easy path? Which security role fits your strengths? What should every non-security employee know?
- **Key concepts**: secure defaults, usable policy, risk communication, security-awareness training that actually changes behavior, zero-trust mindset, and the major career lanes — SOC/blue team, GRC (governance, risk, compliance), cloud security, application security (AppSec), identity, and incident response.
- **Applied skills**: redesign a friction-heavy policy so the secure choice is the default; map a personal skill set to a starter security role; explain to a non-technical colleague the three habits that matter most.
- **Common traps**: relying on one annual training slide; punishing people who report mistakes (which guarantees silence); equating "more rules" with "more security"; assuming every security job requires deep coding.
- **Work product**: a personal security learning plan with next certifications, hands-on labs, and concrete workplace responsibilities.

## Capstone
Audit a small organization or fictional startup. Deliver a connected package that demonstrates the whole lifecycle: (1) a risk register, (2) an identity and access checklist with factor choices and an offboarding step, (3) a phishing triage guide, (4) a malware/ransomware prevention map plus a backup check, (5) a one-page incident playbook, and (6) a prioritized 30-day security improvement plan. The plan must rank fixes by likelihood × impact and name an owner for each — because an audit that does not produce a prioritized, owned action list is just a list of fears.

## Assessment Ideas
- Threat-recognition drills graded on reasoning and recommended action, not just the right label.
- Identity, device, and detection artifacts graded on practicality and risk coverage.
- An incident tabletop where learners must contain, communicate, and preserve evidence under time pressure.
- Capstone graded on prioritization, clarity, ownership, and incident readiness.

## Research Notes
- NIST Cybersecurity Framework 2.0 (Feb 2024): https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf
- NIST NICE Framework Resource Center: https://www.nist.gov/itl/applied-cybersecurity/nice/nice-framework-resource-center
- CISA Secure Our World: https://www.cisa.gov/secure-our-world
- CISA Implementing Phishing-Resistant MFA: https://www.cisa.gov/sites/default/files/publications/fact-sheet-implementing-phishing-resistant-mfa-508c.pdf
- CISA Incident Response Playbook: https://www.cisa.gov/resources-tools/resources/incident-response-playbook
- FBI IC3 2025 Annual Report (BEC losses): https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf
- Google Cybersecurity Professional Certificate: https://www.coursera.org/professional-certificates/google-cybersecurity
