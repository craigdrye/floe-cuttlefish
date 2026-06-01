import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]
const source = 'Floe cybersecurityOperationsRoadmap 103-pass'

export const cybersecurityOperationsRoadmapR2Questions: Question[] = makeQuestionBank('Career Skills', [
  // ---------- Chapter 1: SOC Triage and Alert Quality ----------
  {
    id: 7624000,
    chapter: 'SOC Triage and Alert Quality',
    title: 'Severity versus confidence',
    prompt:
      'An alert reads "possible domain-admin credential theft" but the only evidence is one ambiguous log line. A junior analyst pages the on-call team immediately. How should severity and confidence be reasoned about here?',
    correct:
      'Severity (potential impact) is high but confidence (how sure we are it is real) is low, so the right move is to enrich and raise confidence before paging, not to treat the worst case as confirmed',
    wrong: [
      miss(
        'High severity automatically justifies an immediate page regardless of confidence',
        'Paging on every high-severity-but-low-confidence hunch is how teams train responders to ignore pages; severity sets the ceiling on urgency, but confidence determines whether you have actually established the incident.',
        'Two separate dials: how bad it could be, and how sure you are. One ambiguous line moves only one of them.',
      ),
      miss(
        'Low confidence means the alert should be closed as a false positive right away',
        'Closing a low-confidence, high-severity alert without enrichment is the convenient-story trap; the correct response to uncertainty is to gather evidence, not to assume benign.',
        'Uncertain does not mean benign. What raises confidence before you decide either way?',
      ),
      miss(
        'Severity and confidence are the same thing, so a serious-sounding title sets both',
        'They are independent: a low-impact event can be near-certain, and a catastrophic-impact event can be a guess. Collapsing them lets a scary title drive a page that the evidence has not earned.',
        'A scary label is not proof. Can something be very serious yet very unconfirmed?',
      ),
    ],
    lesson:
      'Severity measures potential impact; confidence measures how sure you are the alert reflects real malicious activity. They move independently. A high-severity, low-confidence alert calls for fast enrichment to establish confidence, not an immediate worst-case escalation that erodes trust in paging.',
    source,
    generated: true,
  },
  {
    id: 7624001,
    chapter: 'SOC Triage and Alert Quality',
    title: 'Baselining normal behavior',
    prompt:
      'A detection flags a finance server making 50 outbound database connections per minute as anomalous. Before escalating, what does baselining tell the analyst to check?',
    correct:
      'What that server\'s normal connection rate looks like over time — if 50/min is its routine daily pattern, the "anomaly" is just the baseline and not evidence of compromise',
    wrong: [
      miss(
        'Whether 50 connections per minute exceeds a fixed industry-standard threshold',
        'There is no universal "safe" connection rate; what is normal for a busy finance server is alarming for an idle one. Baselining is about this asset\'s own history, not a one-size threshold.',
        'Normal is per-asset, not industry-wide. Compare the server to itself, not to a generic number.',
      ),
      miss(
        'Nothing — any number the rule calls anomalous should be escalated as suspicious',
        'A rule without a baseline produces constant false positives on normal-but-busy systems; escalating every flagged number is exactly the alert-fatigue trap baselining exists to prevent.',
        'The rule flagged it, but is it actually unusual for this host? You need its history.',
      ),
      miss(
        'Whether the connections use encryption, since unencrypted traffic is the only concern',
        'Encryption status is a separate question from whether the volume is anomalous; baselining addresses "is this rate normal for this system," which encryption does not answer.',
        'The question is about whether the rate is unusual, not about how the traffic is protected.',
      ),
    ],
    lesson:
      'Baselining establishes what normal looks like for a specific asset, identity, or network segment over time. Anomaly detection is only meaningful against that baseline: a behavior that is "high" in the abstract may be perfectly routine for a busy production system. Without a baseline, anomaly alerts are mostly noise.',
    source,
    generated: true,
  },
  {
    id: 7624002,
    chapter: 'SOC Triage and Alert Quality',
    title: 'Suppression versus tuning',
    prompt:
      'A rule that detects use of PsExec (a legitimate admin tool also abused by attackers) fires constantly because the IT team uses it nightly from one jump host. A new analyst proposes suppressing the rule entirely. What is the better decision?',
    correct:
      'Tune the rule to exclude the known IT jump host\'s expected activity while still alerting on PsExec from any other source — preserve detection on a real attacker tool by adding context, not by deleting coverage',
    wrong: [
      miss(
        'Suppress the rule entirely, since the noise proves it has no value',
        'Blanket suppression of a detection on a frequently abused admin tool removes coverage everywhere, not just on the noisy host; the noise comes from one expected source, which tuning can carve out while keeping the rest.',
        'The noise is from one known host. Why throw away detection on every other host too?',
      ),
      miss(
        'Lower the rule\'s severity to informational so it stops paging anyone',
        'Dropping severity hides the alert without addressing why it is noisy; legitimate attacker use of PsExec from an unexpected host would now be buried at informational, defeating the detection.',
        'Burying it at low severity still loses the real signal. Carve out the known-good source instead.',
      ),
      miss(
        'Ask IT to stop using PsExec so the rule never fires',
        'Forbidding a standard, sanctioned admin tool to silence a SIEM rule is operationally backwards; the fix is to model the expected use, not to break legitimate administration.',
        'Do not break legitimate IT work to quiet a rule. Model the expected use instead.',
      ),
    ],
    lesson:
      'Suppression turns a rule off (or hides its output); tuning refines it so legitimate, expected activity is excluded while genuine anomalies still fire. Suppressing a noisy rule on a real attacker tool blinds you to actual abuse. Tuning by context — known hosts, accounts, schedules — keeps coverage while cutting the false positives.',
    source,
    generated: true,
  },
  {
    id: 7624003,
    chapter: 'SOC Triage and Alert Quality',
    title: 'Anatomy of a triage note',
    prompt:
      'A senior analyst insists every triage note follow a consistent structure so the next shift can act without re-investigating. Which set of elements best captures a complete triage note?',
    correct:
      'The signal observed, the enrichment performed, the working hypothesis, and the recommended disposition',
    wrong: [
      miss(
        'Only the final disposition (close, escalate, or monitor), since that is the actionable part',
        'A bare disposition with no reasoning forces the next analyst to redo the investigation to trust it; the enrichment and hypothesis are exactly what make the disposition reviewable and reusable.',
        'A verdict with no reasoning cannot be trusted or built on. What did you check, and what do you think happened?',
      ),
      miss(
        'A full packet capture and every raw log line attached, with no written summary',
        'Dumping raw evidence without analysis is the opposite of a triage note; the value is the analyst\'s synthesis — what the signal means and what to do — not an undigested data pile.',
        'Raw data is not a triage note. The note is your synthesis, not the evidence dump.',
      ),
      miss(
        'The analyst\'s name and a confidence percentage, with the technical detail left out',
        'Attribution and a number are not a substitute for the signal, the enrichment, and the hypothesis; the next shift needs to see what was observed and reasoned, not just who looked at it.',
        'Who looked and how sure they felt is not enough. What did they actually find and conclude?',
      ),
    ],
    lesson:
      'A good triage note is a handoff artifact: it states the signal that fired, the enrichment performed (identity, device, geo, timing, peer activity), the working hypothesis, and the recommended disposition. That structure lets the next analyst verify and act without re-investigating from scratch, which is the whole point of triage discipline.',
    source,
    generated: true,
  },
  {
    id: 7624004,
    chapter: 'SOC Triage and Alert Quality',
    title: 'The real cost of alert fatigue',
    prompt:
      'A SOC averages 2,000 alerts per analyst per shift, most of them low-value. Leadership treats high alert volume as a sign of strong coverage. Why is chronic alert fatigue actually a security risk?',
    correct:
      'Overwhelmed analysts start rubber-stamping or auto-closing alerts, so a real intrusion buried in the flood gets dismissed with the noise — high volume can lower true detection, not raise it',
    wrong: [
      miss(
        'It is not a real risk; more alerts always means more threats are being caught',
        'Volume is not detection: an alert nobody can meaningfully review is not coverage. Fatigue causes analysts to dismiss alerts in bulk, so the real intrusion gets closed alongside the noise.',
        'An alert no one can review is not coverage. What happens to the real one in a flood of 2,000?',
      ),
      miss(
        'The only cost is analyst burnout and turnover, which is an HR issue, not a security one',
        'Burnout is real, but the security harm is direct: fatigued analysts miss the true positive hiding in the noise. It is a detection-quality failure, not merely a staffing concern.',
        'Burnout is downstream. The security failure is the missed true positive in the noise.',
      ),
      miss(
        'It is solved simply by hiring enough analysts to read all 2,000 alerts each shift',
        'Throwing bodies at undifferentiated volume scales cost without fixing signal quality; the cure is tuning and enrichment so the queue carries actionable alerts, not just more eyes on noise.',
        'More readers for the same noise does not fix it. The queue itself needs to carry signal.',
      ),
    ],
    lesson:
      'Alert fatigue is a documented root cause of missed intrusions. When analysts face an unmanageable flood of low-value alerts, they begin closing them reflexively, and a genuine attack hiding in the volume gets dismissed with everything else. The fix is detection quality — tuning, enrichment, and prioritization — not celebrating raw alert counts.',
    source,
    generated: true,
  },
  {
    id: 7624005,
    chapter: 'SOC Triage and Alert Quality',
    title: 'Peer-group (cohort) enrichment',
    prompt:
      'A user account suddenly accesses an internal source-code repository it has never touched. The analyst is unsure if this is malicious. Which enrichment most quickly clarifies whether the behavior is suspicious?',
    correct:
      'Compare the user against their peer cohort — do others in the same role and team routinely access this repository? If peers do and this user just joined the project, it is likely benign role drift, not attack',
    wrong: [
      miss(
        'Confirm the access used HTTPS, because encrypted access indicates legitimate use',
        'Encryption says nothing about authorization; an attacker using stolen credentials accesses over HTTPS too. Peer comparison tests whether this access fits the user\'s role, which is the actual question.',
        'Encryption is not authorization. The question is whether this access fits the user, not how it was transported.',
      ),
      miss(
        'Check whether the repository is large, since big repositories are higher-value targets',
        'Repository size is a property of the asset, not evidence about whether this user\'s access is anomalous; cohort comparison is what distinguishes normal role behavior from an outlier.',
        'How big the repo is does not tell you if this user should be touching it. Compare to peers.',
      ),
      miss(
        'Immediately disable the account, since first-time access to source code is always an attack',
        'First-time access frequently reflects a role change, a new project, or onboarding; disabling on that signal alone causes user impact and skips the cheap cohort check that would resolve it.',
        'First-time is not the same as malicious. A quick peer check beats a reflexive lockout.',
      ),
    ],
    lesson:
      'Peer-group (cohort) enrichment compares an identity or device against others in the same role, team, or location. Behavior that looks anomalous in isolation is often normal for the cohort — a sign of role change rather than compromise. Conversely, behavior no peer exhibits is a stronger anomaly signal. Cohort context turns a guess into evidence.',
    source,
    generated: true,
  },
  // ---------- Chapter 2: Detection Engineering and Threat Intelligence ----------
  {
    id: 7624006,
    chapter: 'Detection Engineering and Threat Intelligence',
    title: 'ATT&CK Enterprise tactic ordering',
    prompt:
      'In the MITRE ATT&CK Enterprise matrix, which sequence correctly orders these tactics as they typically progress in an intrusion: Initial Access, Reconnaissance, Lateral Movement, Exfiltration?',
    correct:
      'Reconnaissance, Initial Access, Lateral Movement, Exfiltration',
    wrong: [
      miss(
        'Initial Access, Reconnaissance, Lateral Movement, Exfiltration',
        'Reconnaissance (TA0043) is the first tactic in the Enterprise matrix — adversaries gather information before they gain access; placing Initial Access first inverts the opening two stages.',
        'Which comes first: scouting the target, or already being inside? The matrix opens with scouting.',
      ),
      miss(
        'Reconnaissance, Lateral Movement, Initial Access, Exfiltration',
        'You cannot move laterally before you have any access; Initial Access (TA0001) must precede Lateral Movement (TA0008), which is about pivoting once already inside.',
        'You have to get in before you can move sideways. Initial Access comes before Lateral Movement.',
      ),
      miss(
        'Reconnaissance, Initial Access, Exfiltration, Lateral Movement',
        'Exfiltration (TA0010) sits near the end, after the attacker has spread and collected data; it follows Lateral Movement (TA0008), not precedes it.',
        'You steal the data after you have spread to where it lives. Lateral movement comes before exfiltration.',
      ),
    ],
    lesson:
      'The ATT&CK Enterprise matrix has 14 tactics in a roughly chronological flow: Reconnaissance, Resource Development, Initial Access, Execution, Persistence, Privilege Escalation, Defense Evasion, Credential Access, Discovery, Lateral Movement, Collection, Command and Control, Exfiltration, and Impact. Real intrusions skip and revisit stages, but the ordering captures the typical progression.',
    source,
    generated: true,
  },
  {
    id: 7624007,
    chapter: 'Detection Engineering and Threat Intelligence',
    title: 'Diamond Model core features',
    prompt:
      'An analyst documents an intrusion using the Diamond Model of Intrusion Analysis. What are its four core features that make up a single intrusion event?',
    correct:
      'Adversary, Capability, Infrastructure, and Victim',
    wrong: [
      miss(
        'Reconnaissance, Weaponization, Delivery, and Exploitation',
        'Those are stages of the Cyber Kill Chain, a different model; the Diamond Model describes the four features of an event — who, with what, using what, against whom — not a sequence of attack phases.',
        'Those are kill-chain stages. The Diamond is about who/what/where/whom, not a timeline.',
      ),
      miss(
        'Confidentiality, Integrity, Availability, and Non-repudiation',
        'That is the security objectives (CIA triad plus non-repudiation), which describe properties to protect, not the components of an intrusion event the Diamond Model maps.',
        'That is the CIA-style triad of goals to protect, not the parties and tools in an attack.',
      ),
      miss(
        'People, Process, Technology, and Governance',
        'That is a generic program-management framing, not the Diamond Model; the Diamond\'s power is linking the specific adversary, their capability, their infrastructure, and the targeted victim.',
        'That is an org-program quad, not the attack-event quad. Think attacker, tool, infrastructure, target.',
      ),
    ],
    lesson:
      'The Diamond Model represents every intrusion event with four linked features: the Adversary (who), their Capability (the malware or technique), their Infrastructure (the servers, domains, IPs they use), and the Victim (the target). The analytical value is in the relationships — pivoting from one vertex to discover others, e.g., infrastructure shared across victims.',
    source,
    generated: true,
  },
  {
    id: 7624008,
    chapter: 'Detection Engineering and Threat Intelligence',
    title: 'Atomic versus computed versus behavioral indicators',
    prompt:
      'Threat-intel literature distinguishes atomic, computed, and behavioral indicators. A YARA rule that matches a malware family\'s code structure and a description of "process injection followed by credential dumping" fall into which categories, respectively?',
    correct:
      'The YARA rule is a computed indicator (derived from analyzing the sample); the injection-then-dumping description is a behavioral indicator (a pattern of actions)',
    wrong: [
      miss(
        'Both are atomic indicators because they each point to one specific piece of malware',
        'Atomic indicators are indivisible artifacts like a single IP or hash; a YARA rule is computed from analysis and a sequence of actions is behavioral, so neither is atomic.',
        'Atomic means a single raw artifact like one IP. A YARA rule and an action sequence are richer than that.',
      ),
      miss(
        'The YARA rule is atomic and the behavior description is computed',
        'This swaps two categories: a YARA signature is derived (computed) from analyzing samples, not an indivisible atom, and a behavior pattern is behavioral, not computed.',
        'A YARA rule is built from analysis, not a raw atom. And a behavior pattern is its own category.',
      ),
      miss(
        'Both are behavioral indicators because they help detect malicious behavior',
        'Helping detect behavior is the goal of all indicators; the taxonomy is about the indicator\'s nature. A YARA hash/structure match is computed from a sample, distinct from a described action sequence.',
        'Purpose is not the same as type. A signature derived from a sample is not the same kind as an action pattern.',
      ),
    ],
    lesson:
      'Indicators come in three forms: atomic (indivisible artifacts like an IP, domain, or email address), computed (derived from analysis, like a hash or a YARA/regex signature), and behavioral (patterns of activity, like a sequence of techniques). Behavioral indicators sit highest on the Pyramid of Pain because they survive changes to the underlying atomic and computed artifacts.',
    source,
    generated: true,
  },
  {
    id: 7624009,
    chapter: 'Detection Engineering and Threat Intelligence',
    title: 'Detection-as-code with Sigma',
    prompt:
      'A detection team wants their rules version-controlled, peer-reviewed, and portable across different SIEMs rather than hand-written in each vendor\'s query language. What does writing detections in a generic format like Sigma and managing them in Git give them?',
    correct:
      'Detection-as-code — rules are reviewable, testable, and translated to each SIEM\'s query syntax, so logic is portable and changes are auditable like software',
    wrong: [
      miss(
        'Nothing useful, because every SIEM needs hand-tuned native queries anyway',
        'Sigma is explicitly a vendor-agnostic format with converters that emit native queries for many SIEMs; the generic rule is authored once, reviewed, and translated, which is the whole value proposition.',
        'A generic rule format with converters exists precisely so you do not hand-write per vendor. What does that enable?',
      ),
      miss(
        'It guarantees zero false positives because the rules are standardized',
        'Standardizing the format says nothing about precision; a Sigma rule can still be noisy and needs the same tuning. The benefit is portability, review, and version control, not magical accuracy.',
        'A shared format does not tune the logic. The win is review and portability, not perfect precision.',
      ),
      miss(
        'It replaces the need for a SIEM entirely, since Sigma runs detections by itself',
        'Sigma is a rule-authoring format, not an execution engine; the rules are converted to run inside a SIEM or query backend, which is still required to evaluate logs.',
        'Sigma describes the rule; something still has to run it against logs. It does not replace the SIEM.',
      ),
    ],
    lesson:
      'Detection-as-code treats detection logic like software: written in a portable, version-controlled format (such as Sigma), peer-reviewed, tested, and converted to each platform\'s native query language. This makes detections auditable, reviewable, and portable across tools, and lets teams track who changed a rule and why — the same discipline software engineering brings to code.',
    source,
    generated: true,
  },
  {
    id: 7624010,
    chapter: 'Detection Engineering and Threat Intelligence',
    title: 'TLP:RED versus TLP:CLEAR',
    prompt:
      'Under the Traffic Light Protocol, a briefing is marked TLP:RED. A colleague says "RED just means it is urgent, so share it fast with the whole incident channel." What is the correct handling?',
    correct:
      'TLP:RED restricts the information to the specific individuals named in the exchange — it may not be shared even within your own organization beyond those people, let alone broadcast to a channel',
    wrong: [
      miss(
        'TLP:RED means high urgency, so broadcasting it widely and quickly is exactly right',
        'TLP is about distribution scope, not urgency; RED is the most restrictive level, limited to named recipients only, so broadcasting it to a channel is the opposite of compliant handling.',
        'TLP colors govern who may see it, not how urgent it is. RED is the tightest scope, not a speed setting.',
      ),
      miss(
        'TLP:RED allows sharing throughout your own organization on a need-to-know basis',
        'That description fits TLP:AMBER, not RED. RED is stricter: it is limited to the specific people present in the exchange and may not be passed to others in the org.',
        'Org-wide need-to-know is the next color down. RED stops at the named individuals.',
      ),
      miss(
        'TLP:RED is unrestricted because red signals an all-clear in many systems',
        'In TLP, the unrestricted level is TLP:CLEAR (formerly WHITE), not RED; RED is the single most restrictive marking, so treating it as open inverts the protocol entirely.',
        'Unrestricted is CLEAR, not RED. You have the most-open and most-closed colors reversed.',
      ),
    ],
    lesson:
      'The Traffic Light Protocol governs redistribution scope. TLP:RED is the most restrictive — for the named recipients only, not the wider organization. TLP:AMBER permits limited internal sharing on need-to-know; TLP:AMBER+STRICT limits to the organization only; TLP:GREEN allows community sharing; TLP:CLEAR is unrestricted. The color signals distribution, never urgency.',
    source,
    generated: true,
  },
  {
    id: 7624011,
    chapter: 'Detection Engineering and Threat Intelligence',
    title: 'Pyramid of Pain: the tools tier',
    prompt:
      'On the Pyramid of Pain, where do "tools" (the attacker\'s utilities, like a specific credential-dumping program) sit relative to hashes and TTPs, and what does detecting at that level cost the adversary?',
    correct:
      'Tools sit above hashes/IPs/domains but below TTPs — detecting a tool forces the adversary to find, build, or retrain on a replacement utility, which is meaningfully painful but cheaper than changing their whole methodology',
    wrong: [
      miss(
        'Tools sit at the very bottom because a tool is just another file with a hash',
        'A tool is not its hash: blocking one hash is trivial to evade by recompiling, but detecting the tool\'s capability (regardless of hash) forces the adversary to acquire a different utility — that is the tools tier, above hashes.',
        'A hash of a tool is cheap to change. Detecting the tool itself, by behavior, is harder. Different tiers.',
      ),
      miss(
        'Tools sit at the very top because the right tool is the hardest thing for an attacker to replace',
        'The top of the pyramid is TTPs — how the adversary operates — which is harder to change than any single tool; a determined attacker can swap tools far more easily than re-engineer their entire approach.',
        'TTPs (their whole methodology) sit above tools. A tool can be swapped more easily than a method.',
      ),
      miss(
        'Tools are not on the Pyramid of Pain at all; the pyramid only covers atomic indicators',
        'The pyramid explicitly includes a tools tier between artifacts (hashes, IPs, domains, network/host artifacts) and TTPs; omitting it removes the middle of the model.',
        'The pyramid has a tools tier in the middle. It is not just atomic artifacts.',
      ),
    ],
    lesson:
      'The Pyramid of Pain, bottom to top: hash values, IP addresses, domain names, network/host artifacts, tools, and TTPs. Detecting a tool (not just its hash) forces the adversary to retool — find or build a replacement — which is harder than rotating an IP but easier than changing their core tactics. Investing higher up inflicts more lasting pain.',
    source,
    generated: true,
  },
  {
    id: 7624012,
    chapter: 'Detection Engineering and Threat Intelligence',
    title: 'Source reliability versus information credibility',
    prompt:
      'A threat-intel platform rates an indicator with two separate scores: one for how trustworthy the source is and one for how believable this specific claim is. Why are these kept as two distinct dimensions (as in the Admiralty/NATO grading)?',
    correct:
      'A normally reliable source can still report a single piece of dubious information, and an unproven source can report something corroborated elsewhere — rating source reliability and information credibility separately prevents conflating the two',
    wrong: [
      miss(
        'They are redundant; a reliable source by definition only produces credible information',
        'Reliability is a track record; credibility is about this specific item. Even a strong source can pass along an unverified or wrong claim, which is precisely why the two are scored independently.',
        'Track record is not the same as this one claim being true. Can a good source be wrong once?',
      ),
      miss(
        'Source reliability measures speed and information credibility measures cost',
        'Neither dimension is about speed or cost; reliability is the source\'s historical trustworthiness and credibility is how well this specific claim holds up, often via corroboration.',
        'Neither axis is speed or cost. One is the source\'s history, the other is whether this claim checks out.',
      ),
      miss(
        'Only information credibility matters, so the source rating should be dropped entirely',
        'Source reliability carries real weight when corroboration is unavailable; dropping it discards the ability to weigh how much to trust an uncorroborated report, which is exactly when source history matters most.',
        'When you cannot corroborate, the source\'s track record is what you have left. Do not discard it.',
      ),
    ],
    lesson:
      'Intelligence grading (e.g., the Admiralty/NATO system) scores source reliability (A–F, the source\'s track record) and information credibility (1–6, how well this specific report holds up) separately. Keeping them distinct prevents a trusted source\'s reputation from laundering a weak claim, and lets a corroborated claim from an unproven source still carry weight.',
    source,
    generated: true,
  },
  // ---------- Chapter 3: Identity, Access, and Privilege ----------
  {
    id: 7624013,
    chapter: 'Identity, Access, and Privilege',
    title: 'Kerberoasting and service accounts',
    prompt:
      'Logs show an authenticated, non-privileged domain user requesting Kerberos service tickets (TGS) for many service accounts in rapid succession. What attack is this most consistent with, and why is it dangerous?',
    correct:
      'Kerberoasting — the attacker requests service tickets for accounts with SPNs and cracks the RC4-encrypted portion offline; any authenticated user can do it, and weak service-account passwords yield privileged credentials',
    wrong: [
      miss(
        'A golden ticket attack, since it involves forging Kerberos tickets',
        'A golden ticket forges TGTs using the stolen krbtgt hash; Kerberoasting instead requests legitimate TGS tickets to crack offline. Requesting many TGS tickets is the Kerberoasting signature, not forgery.',
        'Forging requires the krbtgt hash. Here the attacker is requesting real service tickets to crack. Different attack.',
      ),
      miss(
        'A denial-of-service attack on the domain controller from the ticket volume',
        'The ticket requests are lightweight and the goal is credential theft, not exhausting the DC; the danger is the offline cracking of service-account passwords, not service disruption.',
        'The volume is not the point — the cracking is. What does the attacker do with those tickets offline?',
      ),
      miss(
        'Normal Single Sign-On behavior, since requesting service tickets is how Kerberos works',
        'A single user requesting TGS tickets for many unrelated service accounts in a burst is not normal SSO; legitimate access requests tickets for services the user actually uses, not a sweep of every SPN.',
        'SSO requests tickets for services you use, not a rapid sweep of every service account. The pattern is the tell.',
      ),
    ],
    lesson:
      'Kerberoasting (ATT&CK T1558.003) abuses a design feature: any authenticated domain user can request a TGS ticket for any Service Principal Name, and a portion is encrypted with the service account\'s password hash (RC4/etype 23), crackable offline. Weak service-account passwords become privileged credentials. Defenses: long random passwords, Group Managed Service Accounts, and AES encryption.',
    source,
    generated: true,
  },
  {
    id: 7624014,
    chapter: 'Identity, Access, and Privilege',
    title: 'Golden ticket versus pass-the-hash',
    prompt:
      'Two post-exploitation techniques both let an attacker move laterally. One reuses a stolen NTLM hash to authenticate without the plaintext password; the other forges Kerberos TGTs using the domain\'s krbtgt key. What is the critical difference in remediation?',
    correct:
      'Pass-the-hash is defeated by rotating the compromised account\'s password (which changes its NTLM hash); a golden ticket persists until the krbtgt account password is rotated twice, because it is signed with the krbtgt key',
    wrong: [
      miss(
        'Both are remediated by resetting the affected user\'s password, with no other step needed',
        'Resetting a user password stops pass-the-hash for that account, but a golden ticket is signed with the krbtgt key and is unaffected by user-password changes; only rotating krbtgt invalidates it.',
        'A user reset changes that user\'s hash. A forged TGT is signed by a different key entirely. Which key must rotate?',
      ),
      miss(
        'Both require rebuilding the entire Active Directory forest from scratch',
        'A full forest rebuild is a last resort for total compromise, not the standard fix; pass-the-hash needs a password rotation and a golden ticket needs a (double) krbtgt rotation, which are far less drastic.',
        'Nuking the forest is extreme. Each technique has a targeted key/password to rotate instead.',
      ),
      miss(
        'Golden tickets expire automatically within 10 hours, so no remediation is needed',
        'Forged golden tickets can be issued with arbitrary, very long lifetimes precisely because the attacker controls the krbtgt signing; the default 10-hour TGT lifetime does not bind a forged ticket.',
        'The attacker forges the lifetime too. Default expiry does not apply to a ticket they signed themselves.',
      ),
    ],
    lesson:
      'Pass-the-hash reuses an NTLM hash; rotating that account\'s password changes the hash and stops it. A golden ticket forges TGTs signed with the domain\'s krbtgt key, so it bypasses normal controls and persists with attacker-chosen lifetimes. Eradicating it requires rotating the krbtgt password twice (to flush the current and previous key) — a far deeper remediation.',
    source,
    generated: true,
  },
  {
    id: 7624015,
    chapter: 'Identity, Access, and Privilege',
    title: 'Just-in-time access versus break-glass',
    prompt:
      'A platform team is designing privileged access. They want routine admin tasks to require requesting elevation only when needed, and a separate rarely-used path for emergencies when the normal system is down. Which two patterns are these?',
    correct:
      'Just-in-time (JIT) access for routine, time-bound, approved elevation; break-glass accounts for emergencies when normal access paths fail — both logged and tightly monitored',
    wrong: [
      miss(
        'Both are the same thing; break-glass is just the marketing name for JIT',
        'They solve different problems: JIT grants ordinary privilege on demand with approval and expiry, while break-glass is a pre-provisioned emergency identity used only when the normal (including JIT) path is unavailable.',
        'One is for everyday elevation; one is the emergency hatch when even that fails. Different purposes.',
      ),
      miss(
        'JIT means giving admins permanent rights so they never have to request access',
        'Permanent standing privilege is exactly what JIT eliminates; JIT grants access only for the window it is needed and then revokes it, which is the opposite of always-on rights.',
        'JIT is the opposite of standing access. The "just-in-time" part means it expires.',
      ),
      miss(
        'Break-glass accounts should be used daily so they stay warm and tested',
        'Routine use of break-glass defeats its purpose and turns it into standing privilege; it is exercised on a controlled schedule for testing only, and any real use triggers high-priority review.',
        'Daily use turns the emergency hatch into a normal door. It is for emergencies, tested rarely and watched closely.',
      ),
    ],
    lesson:
      'Just-in-time (JIT) access grants privilege only when needed, time-bound and approved, then automatically revokes it — eliminating standing admin rights. Break-glass accounts are pre-provisioned emergency identities used only when normal access (including JIT) is unavailable; their use is rare, heavily logged, and alarmed. Together they keep urgency from becoming permanent privilege.',
    source,
    generated: true,
  },
  {
    id: 7624016,
    chapter: 'Identity, Access, and Privilege',
    title: 'Refresh-token rotation and reuse detection',
    prompt:
      'A modern OAuth deployment issues a new refresh token each time one is used and invalidates the old one. An old refresh token is later presented again. What does well-designed refresh-token rotation do, and why?',
    correct:
      'It treats reuse of an already-rotated refresh token as a likely theft signal and revokes the entire token family, because a legitimate client only ever holds the latest token — replay of an old one implies it was stolen',
    wrong: [
      miss(
        'It silently issues a fresh access token, since refresh tokens are meant to be reused repeatedly',
        'With rotation, each refresh token is single-use; the legitimate client always holds the newest one. Honoring an old, already-rotated token would defeat the detection rotation is designed to provide.',
        'With rotation each token is used once. So who is presenting the old one? Reuse is the alarm, not normal.',
      ),
      miss(
        'It locks the user out permanently and deletes their account to be safe',
        'The proportionate response is revoking the token family and forcing re-authentication, not destroying the identity; account deletion is disproportionate and breaks legitimate access.',
        'Revoke the tokens and re-auth, not nuke the account. The response should fit the signal.',
      ),
      miss(
        'It ignores the reuse because refresh tokens never expire and old ones stay valid forever',
        'Non-expiring, always-valid refresh tokens are exactly the weakness rotation exists to fix; the point of rotation is that an old token becoming invalid lets you detect theft via reuse.',
        'Never-expiring tokens are the problem rotation solves. The old one becoming invalid is the feature.',
      ),
    ],
    lesson:
      'Refresh-token rotation issues a new refresh token on each use and invalidates the prior one. Because a legitimate client only ever holds the latest token, presentation of a previously-rotated token signals that the token was stolen and replayed. The defensive response is to revoke the whole token family and force re-authentication — turning theft into a detectable, containable event.',
    source,
    generated: true,
  },
  {
    id: 7624017,
    chapter: 'Identity, Access, and Privilege',
    title: 'Phishing-resistant MFA',
    prompt:
      'After an MFA-fatigue compromise, leadership wants "phishing-resistant" MFA. Which factor genuinely meets that bar, and why do one-time codes and basic push approvals not?',
    correct:
      'FIDO2/WebAuthn hardware security keys (or passkeys) are phishing-resistant because the credential is cryptographically bound to the legitimate site\'s origin, so it will not authenticate to a look-alike phishing domain',
    wrong: [
      miss(
        'SMS one-time codes are phishing-resistant because the code changes every 30 seconds',
        'A rotating code is still a shared secret the user can be tricked into typing into a phishing page (or that can be SIM-swapped); rotation does not bind the factor to the real site, so it is phishable.',
        'A code the user can read and re-type can be relayed to a fake page. What binds the factor to the real domain?',
      ),
      miss(
        'Any push-approval app is phishing-resistant because the user must physically tap approve',
        'Basic push is exactly what MFA-fatigue and real-time relay attacks defeat — the user can be coaxed or worn down into approving a fraudulent prompt; tapping approve does not verify the destination site.',
        'A tap does not check which site you are signing into. That is how push-bombing succeeds.',
      ),
      miss(
        'Email-based magic links are phishing-resistant because email requires a password to access',
        'A magic link can be phished or intercepted, and it inherits the email account\'s security rather than binding to the target site\'s origin; it provides no cryptographic origin check.',
        'A link in email can be relayed and carries no origin binding. Email security is not site binding.',
      ),
    ],
    lesson:
      'Phishing-resistant MFA cryptographically binds the authentication to the legitimate site\'s origin, defeating credential-relay and look-alike-domain attacks. FIDO2/WebAuthn security keys and passkeys do this; the private key never leaves the authenticator and will not sign for a wrong origin. Shared-secret factors — SMS/TOTP codes, basic push, email links — remain phishable because the user can be tricked into surrendering or approving them.',
    source,
    generated: true,
  },
  {
    id: 7624018,
    chapter: 'Identity, Access, and Privilege',
    title: 'Least privilege versus zero standing privilege',
    prompt:
      'A security architect distinguishes "least privilege" from "zero standing privilege." A service account is granted only the three permissions it needs, held permanently. What principle does this satisfy and which does it violate?',
    correct:
      'It satisfies least privilege (only the permissions needed) but violates zero standing privilege, because those permissions sit permanently available to be abused if the account is compromised',
    wrong: [
      miss(
        'It satisfies both, because having only three permissions means there is no standing privilege',
        'Least privilege limits the scope of access; zero standing privilege limits its duration. Three permanent permissions are still standing privilege — narrow, but always-on and exploitable if the account is stolen.',
        'Few permissions is not the same as no permanent permissions. Scope versus duration — which does each address?',
      ),
      miss(
        'It violates both, because three permissions is too many for any service account',
        'There is no universal "too many"; least privilege is about granting exactly what is needed, and three may be correct. The issue is permanence (standing privilege), not the count.',
        'The count can be exactly right. The problem is that the access never goes away, not the number.',
      ),
      miss(
        'Neither principle applies to service accounts, only to human users',
        'Both principles apply forcefully to service accounts, which are frequent attack targets precisely because they often carry permanent, broad permissions with no human watching.',
        'Service accounts are prime targets for exactly this reason. Both principles apply to them.',
      ),
    ],
    lesson:
      'Least privilege limits the scope of access to only what is needed; zero standing privilege limits its duration so that access exists only at the moment of use (via JIT elevation) and is otherwise unavailable. A narrowly-scoped but permanently-held permission satisfies the first and fails the second — and a compromised account with standing privilege is immediately useful to an attacker.',
    source,
    generated: true,
  },
  {
    id: 7624019,
    chapter: 'Identity, Access, and Privilege',
    title: 'Conditional access as a containment lever',
    prompt:
      'During an identity incident, the team wants to block the attacker without disabling the legitimate user, who needs to keep working from the corporate office. Which identity control most precisely accomplishes this?',
    correct:
      'A conditional access policy that requires a compliant managed device and/or known network/location, so the attacker\'s unmanaged device is blocked while the user on a corporate device continues',
    wrong: [
      miss(
        'Disable the user account entirely until the investigation finishes',
        'Disabling the account stops the user too, causing the business impact the question is trying to avoid; conditional access can block the attacker\'s context specifically while preserving legitimate access.',
        'Disabling blocks the real user as well. Is there a control that filters by device or network instead?',
      ),
      miss(
        'Email the user a warning and rely on them to avoid the attacker',
        'A warning provides no enforcement; the attacker holding valid session material is unaffected by user awareness, so this is not a containment control at all.',
        'A warning enforces nothing. The attacker with valid tokens ignores it. You need an enforced policy.',
      ),
      miss(
        'Lower the user\'s permissions so neither party can do much',
        'Cutting permissions degrades the legitimate user\'s work and still lets the attacker operate within whatever access remains; it does not separate attacker from user by context.',
        'Trimming permissions hurts the user and still leaves the attacker some access. It does not distinguish them.',
      ),
    ],
    lesson:
      'Conditional access evaluates signals — device compliance, network/location, risk level — at sign-in and per-request, allowing a surgical response: block the attacker\'s unmanaged device or anomalous location while a legitimate user on a managed corporate device keeps working. It is a precise containment lever that avoids the blunt impact of disabling an account outright.',
    source,
    generated: true,
  },
  // ---------- Chapter 4: Endpoint, Network, and Cloud Scope ----------
  {
    id: 7624020,
    chapter: 'Endpoint, Network, and Cloud Scope',
    title: 'Reading process lineage',
    prompt:
      'EDR shows this process tree on a workstation: winword.exe → cmd.exe → powershell.exe downloading a file. Why is the parent-child lineage itself the alarming part, more than any single process?',
    correct:
      'Word spawning a command shell that spawns PowerShell to download a payload is a classic macro-exploitation chain; each process is normal alone, but the lineage (a document spawning shells) is the malicious signature',
    wrong: [
      miss(
        'Nothing is alarming, because winword.exe, cmd.exe, and powershell.exe are all legitimate signed binaries',
        'Legitimacy of each binary is exactly why attackers chain them; the detection is the relationship — an Office document should not be spawning command shells — not the individual executables.',
        'Each binary is fine alone. Why is a document spawning shells the tell? Look at who launched whom.',
      ),
      miss(
        'The alarming part is only that PowerShell was used at all, regardless of its parent',
        'PowerShell runs legitimately across the fleet constantly; flagging it in isolation is the over-blocking trap. What makes this malicious is its ancestry from Word via cmd, not its mere presence.',
        'PowerShell runs everywhere legitimately. Its parentage here is what matters, not its existence.',
      ),
      miss(
        'The concern is purely that a file was downloaded, which is always malicious',
        'Downloads are routine and benign constantly; the signal is the chain that initiated it — a document-launched shell pulling a payload — not the download in isolation.',
        'Downloads happen constantly and are usually fine. The chain that triggered it is the red flag.',
      ),
    ],
    lesson:
      'Process lineage (parent-child relationships) often reveals malice that no single process does. An Office application spawning cmd.exe or powershell.exe, which then reaches out to download a file, is a textbook macro/exploit chain. EDR\'s value is showing this ancestry: the question "what launched this?" frequently distinguishes an attack from benign use of the same tools.',
    source,
    generated: true,
  },
  {
    id: 7624021,
    chapter: 'Endpoint, Network, and Cloud Scope',
    title: 'Run-key persistence',
    prompt:
      'During scoping, an analyst finds a new value under HKCU\\...\\CurrentVersion\\Run pointing at a script in the user\'s AppData. Before removing it, what should the analyst do and why?',
    correct:
      'Preserve and analyze it first — capture the value, the script, and its hash, and use them to hunt for the same persistence on other hosts — because removing it blindly destroys evidence and loses the indicator needed to scope the campaign',
    wrong: [
      miss(
        'Delete the registry value immediately, since the only goal is to stop it from running',
        'Deleting before analysis destroys the artifact you need to identify the payload and hunt for siblings; eradication is per-campaign, so the indicator must be captured before removal.',
        'Stopping one host is not scoping the campaign. What do you lose if you delete before capturing it?',
      ),
      miss(
        'Treat it as routine because legitimate software often registers autostart in Run keys',
        'Legitimate software does use Run keys, which is why attackers hide there; a new, unexplained value pointing to a script in a user-writable temp path warrants analysis, not dismissal.',
        'Legit software using Run keys is why attackers hide there. A new script in AppData deserves a look.',
      ),
      miss(
        'Reboot the host to see if the persistence re-establishes itself',
        'Rebooting destroys volatile memory evidence and lets the persistence execute again, achieving nothing diagnostic; you analyze the static artifact rather than triggering it.',
        'Rebooting just runs it again and wipes memory evidence. Analyze the artifact, do not trigger it.',
      ),
    ],
    lesson:
      'Run keys (and their machine-wide HKLM equivalents) are a common persistence mechanism: a value there launches a program at logon. Before removing one, preserve it — the path, the payload, and its hash become indicators to sweep every other host. Blind deletion stops one symptom while destroying the evidence needed to find the rest of the campaign.',
    source,
    generated: true,
  },
  {
    id: 7624022,
    chapter: 'Endpoint, Network, and Cloud Scope',
    title: 'EDR host isolation',
    prompt:
      'An analyst uses EDR to "isolate" (network-contain) a compromised laptop. What does this action typically do, and what is the deliberate exception?',
    correct:
      'It cuts the host off from general network communication to stop lateral movement and C2, while keeping the EDR management channel open so responders can still investigate and remediate remotely',
    wrong: [
      miss(
        'It powers the machine off completely so nothing can run on it',
        'Isolation keeps the host running; powering it off would destroy volatile memory evidence and end the ability to investigate live. The point is to sever the network, not kill the host.',
        'Powering off wipes memory evidence and ends live investigation. Isolation keeps it running but cut off.',
      ),
      miss(
        'It blocks all network traffic including the EDR channel, so you must visit the device physically',
        'Well-designed isolation deliberately preserves the EDR agent\'s management connection precisely so responders can keep working remotely; cutting that too would defeat the purpose.',
        'If you cut even the EDR channel, how would you investigate? The management link is kept open on purpose.',
      ),
      miss(
        'It wipes and re-images the laptop automatically as part of isolation',
        'Isolation is a containment action, not eradication; auto-wiping would destroy evidence and conflate two lifecycle phases. Re-imaging is a later, deliberate recovery step.',
        'Isolation contains; it does not erase. Wiping is a separate, later decision after analysis.',
      ),
    ],
    lesson:
      'EDR host isolation network-contains an endpoint — blocking lateral movement and command-and-control — while deliberately keeping the EDR management channel open so responders can investigate, collect evidence, and remediate remotely. It is a short-term containment action that buys time without destroying the volatile evidence a shutdown or wipe would lose.',
    source,
    generated: true,
  },
  {
    id: 7624023,
    chapter: 'Endpoint, Network, and Cloud Scope',
    title: 'Microsegmentation versus VLAN segmentation',
    prompt:
      'A team already separates departments into VLANs but an attacker who lands on one server still freely reaches every other server in the same VLAN. What does microsegmentation add?',
    correct:
      'Per-workload policy that controls east-west traffic between individual hosts even within the same segment, so a compromised server cannot freely reach its neighbors by default',
    wrong: [
      miss(
        'Nothing new — microsegmentation is just a marketing term for having more VLANs',
        'More VLANs still allow unrestricted traffic within each VLAN; microsegmentation enforces policy down to the individual workload, controlling the intra-segment (east-west) traffic VLANs leave open.',
        'More VLANs still trust everything inside each one. What controls traffic between hosts in the same segment?',
      ),
      miss(
        'It encrypts all traffic between hosts so the attacker cannot read it',
        'Microsegmentation is about access control (which workloads may talk to which), not confidentiality; encryption protects content but does nothing to stop a compromised host from reaching a neighbor.',
        'It governs who may connect to whom, not whether traffic is readable. Reachability, not secrecy.',
      ),
      miss(
        'It moves all servers to the public internet so they are easier to monitor',
        'Exposing servers publicly is the opposite of segmentation and dramatically increases attack surface; microsegmentation tightens internal reachability, it does not publish workloads.',
        'Putting workloads on the internet expands exposure. Microsegmentation restricts internal reach, not exposes it.',
      ),
    ],
    lesson:
      'VLAN segmentation separates broad zones but typically permits unrestricted east-west traffic within each zone, so one compromised host reaches all its neighbors. Microsegmentation applies fine-grained, per-workload policy — host A may talk to host B only on the ports it actually needs — shrinking blast radius inside a segment and forcing the attacker to defeat a control at every hop.',
    source,
    generated: true,
  },
  {
    id: 7624024,
    chapter: 'Endpoint, Network, and Cloud Scope',
    title: 'DNS tunneling exfiltration',
    prompt:
      'A host generates a high volume of DNS queries to subdomains of one external domain, each subdomain a long random-looking string, with unusually large TXT responses. What technique should the analyst suspect?',
    correct:
      'DNS tunneling — encoding data (exfiltration or C2) inside DNS queries and responses to abuse a protocol that egress filters often leave open',
    wrong: [
      miss(
        'Normal DNS resolution, because DNS queries are routine and expected on every network',
        'Routine DNS resolves a modest set of real hostnames; a flood of long, random, encoded subdomains to a single domain with large TXT replies is not name resolution but data smuggling over DNS.',
        'Normal DNS asks for real names. Random encoded subdomains with big TXT replies are not resolving anything.',
      ),
      miss(
        'A reflection DDoS amplification attack using DNS',
        'Amplification DDoS sends spoofed queries to many resolvers to flood a victim with responses; here a single host is itself making the queries to one domain, which is tunneling, not amplification.',
        'Amplification floods a third party. Here the host queries one domain itself. Different shape entirely.',
      ),
      miss(
        'A failing application retrying a misconfigured hostname over and over',
        'A misconfiguration retries the same fixed (wrong) name; tunneling generates ever-changing encoded subdomains because the changing labels carry the smuggled data, which a retry loop would not.',
        'A bad config repeats the same name. Tunneling uses constantly changing encoded labels — that is the payload.',
      ),
    ],
    lesson:
      'DNS tunneling smuggles data inside DNS queries and responses — long encoded subdomain labels for outbound data, large TXT or other records for inbound — exploiting the fact that DNS is often allowed out even when other egress is filtered. Tells include high query volume to one domain, high-entropy subdomains, and oversized record responses. Detecting the behavior beats blocking one domain.',
    source,
    generated: true,
  },
  {
    id: 7624025,
    chapter: 'Endpoint, Network, and Cloud Scope',
    title: 'IMDSv2 and SSRF in the cloud',
    prompt:
      'An attacker exploits a server-side request forgery (SSRF) flaw in a cloud web app to reach the instance metadata service and steal the instance\'s role credentials. How does requiring IMDSv2 mitigate this class of attack?',
    correct:
      'IMDSv2 requires a session token obtained via a PUT request with a hop-limit, which a simple SSRF GET cannot perform — so the basic credential-theft-via-SSRF path against the metadata endpoint is blocked',
    wrong: [
      miss(
        'IMDSv2 encrypts the credentials so the attacker cannot read them even if reached',
        'IMDSv2 does not rely on encrypting the response; it changes the request flow to require a token-issuing PUT and a low hop limit, which defeats the typical SSRF GET reaching the endpoint.',
        'The fix is about how the request must be made, not encryption of the answer. What must the request include?',
      ),
      miss(
        'IMDSv2 moves the metadata service to a public IP so SSRF can no longer reach it internally',
        'The metadata service stays on the link-local address; exposing it publicly would be catastrophic. The mitigation is the token-and-hop-limit handshake, not relocating the endpoint.',
        'Moving metadata to the public internet would be a disaster. The link-local endpoint stays; the protocol changes.',
      ),
      miss(
        'IMDSv2 disables instance roles entirely, so there are no credentials to steal',
        'Instance roles remain fully functional under IMDSv2; the workload still retrieves credentials legitimately. IMDSv2 hardens how they are retrieved, it does not remove role-based credentials.',
        'Roles still work — the app needs them. IMDSv2 hardens retrieval, it does not abolish role credentials.',
      ),
    ],
    lesson:
      'Cloud instances expose temporary role credentials via a link-local instance metadata service. SSRF flaws let an attacker coax the app into fetching those credentials. IMDSv2 requires a session token obtained by a PUT request and enforces a low IP hop limit, which a basic SSRF (typically a forged GET that cannot set headers or perform the handshake) cannot satisfy — closing the common credential-theft path.',
    source,
    generated: true,
  },
  {
    id: 7624026,
    chapter: 'Endpoint, Network, and Cloud Scope',
    title: 'Exfiltration staging artifacts',
    prompt:
      'On a compromised host, the analyst finds a large password-protected RAR archive in a temp directory containing files copied from several shared drives, created an hour before a spike in outbound traffic. What stage of the attack does the archive represent?',
    correct:
      'Collection/staging prior to exfiltration — the attacker gathered and compressed data into one encrypted bundle to move it out efficiently and evade content inspection',
    wrong: [
      miss(
        'Initial access, because the archive is how the attacker first got in',
        'A staging archive built from internal shares is created after the attacker already has broad access; it is late-stage collection, not the initial foothold that started the intrusion.',
        'You build a bundle of internal files after you are already inside, not to get in. Which stage gathers data?',
      ),
      miss(
        'Persistence, because the archive ensures the attacker can return later',
        'Persistence is a mechanism to regain access (a service, run key, scheduled task), not a data bundle; an encrypted archive of collected files is preparation to steal data, not to maintain a foothold.',
        'Persistence is about getting back in. A bundle of stolen files is about taking data out.',
      ),
      miss(
        'A legitimate backup, because compressing files into an archive is normal IT housekeeping',
        'Legitimate backups go to defined backup systems on schedule, not an ad-hoc password-protected RAR in a temp folder assembled from multiple shares right before an outbound traffic spike — that pattern is staging.',
        'Backups go to backup systems on a schedule. An ad-hoc encrypted bundle before a traffic spike is staging.',
      ),
    ],
    lesson:
      'Before exfiltration, attackers commonly stage: collect target files from multiple sources, then compress and often encrypt them into a single archive in a temp location. This makes transfer efficient and frustrates content inspection. An unexplained encrypted archive assembled from internal shares, immediately preceding an outbound traffic spike, is a strong collection-and-exfiltration indicator.',
    source,
    generated: true,
  },
  // ---------- Chapter 5: Vulnerability and Exposure Management ----------
  {
    id: 7624027,
    chapter: 'Vulnerability and Exposure Management',
    title: 'CVSS base metric groups',
    prompt:
      'A CVSS v3.1 base vector reads AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H. Which real-world property is described by "AV:N" and "UI:N" together?',
    correct:
      'The vulnerability is exploitable over the network (AV:N) with no user interaction required (UI:N) — i.e., remotely and without tricking anyone into clicking, which makes it well-suited to automated, wormable exploitation',
    wrong: [
      miss(
        'That the vulnerability has no impact on confidentiality, integrity, or availability',
        'Impact is captured by the C/I/A metrics, which here are all High; AV and UI are exploitability metrics describing how the attack is launched, not its impact. This vector is maximally impactful.',
        'AV and UI describe how it is reached, not the damage. The C/I/A fields carry impact — and they read High.',
      ),
      miss(
        'That the attacker needs high privileges and physical access to the device',
        'PR:N means no privileges required and AV:N means network (not physical) reach; this reads the vector backwards, describing the easy-to-exploit case as if it were the hardest.',
        'PR:N is no privileges and AV:N is network reach. You have described the opposite of the vector.',
      ),
      miss(
        'That the vulnerability scope is changed, affecting components beyond the vulnerable one',
        'Scope is the S metric, which here is S:U (Unchanged); AV:N/UI:N speak to remote, no-interaction exploitability, an entirely different dimension from scope.',
        'Scope is the S field (here Unchanged). AV and UI are about remote reach and user clicks, not scope.',
      ),
    ],
    lesson:
      'CVSS v3.1 base exploitability metrics are Attack Vector (N/A/L/P), Attack Complexity (L/H), Privileges Required (N/L/H), User Interaction (N/R), and Scope (U/C); impact metrics are Confidentiality, Integrity, and Availability. AV:N/UI:N means network-exploitable with no user interaction — the profile of a remotely, automatically exploitable flaw, the kind worms and mass-scanners love.',
    source,
    generated: true,
  },
  {
    id: 7624028,
    chapter: 'Vulnerability and Exposure Management',
    title: 'CVSS qualitative severity bands',
    prompt:
      'A scanner reports a CVSS base score of 7.5. In the standard CVSS qualitative severity scale, which band is that, and what is the band immediately above it?',
    correct:
      'A 7.5 is "High" (7.0–8.9); the band immediately above is "Critical" (9.0–10.0)',
    wrong: [
      miss(
        'A 7.5 is "Critical," and there is no band above it',
        'Critical is reserved for 9.0–10.0; 7.5 falls in the High band (7.0–8.9). There is indeed a higher band — Critical — which a 7.5 has not reached.',
        '7.5 is below the 9.0 cutoff for Critical. Which band covers 7.0–8.9, and what sits above it?',
      ),
      miss(
        'A 7.5 is "Medium," and the band above is "High"',
        'Medium is 4.0–6.9; 7.5 exceeds 6.9 and lands in High (7.0–8.9). Calling 7.5 Medium understates it by a full band.',
        '7.5 is past the 6.9 ceiling of Medium. It sits one band higher than you said.',
      ),
      miss(
        'CVSS has no named severity bands; 7.5 is just a raw number with no qualitative label',
        'CVSS defines optional qualitative bands — None (0.0), Low (0.1–3.9), Medium (4.0–6.9), High (7.0–8.9), Critical (9.0–10.0) — precisely so scores map to a rating for prioritization.',
        'CVSS does define optional severity bands. 7.5 maps to a named rating; which one?',
      ),
    ],
    lesson:
      'The standard CVSS qualitative severity mapping is None (0.0), Low (0.1–3.9), Medium (4.0–6.9), High (7.0–8.9), and Critical (9.0–10.0). A 7.5 is High. These bands are an optional aid for prioritization — but remember CVSS measures theoretical severity, so KEV (confirmed exploitation) and EPSS (exploitation likelihood) should still reorder the queue.',
    source,
    generated: true,
  },
  {
    id: 7624029,
    chapter: 'Vulnerability and Exposure Management',
    title: 'KEV remediation timeline (BOD 22-01)',
    prompt:
      'Under CISA Binding Operational Directive 22-01, what obligation does adding a vulnerability to the KEV catalog create, and for whom?',
    correct:
      'Federal civilian executive-branch agencies must remediate the listed vulnerability by the due date CISA assigns; private organizations are not bound by the directive but widely use KEV as a prioritization signal',
    wrong: [
      miss(
        'It legally requires every company worldwide to patch within 24 hours',
        'BOD 22-01 binds U.S. federal civilian agencies, not every company globally, and the timelines are set per-entry due dates (commonly two weeks for recent CVEs), not a universal 24-hour rule.',
        'The directive binds U.S. federal civilian agencies, not the whole world, and the clock is a per-entry due date.',
      ),
      miss(
        'It only records the vulnerability for statistics and creates no remediation obligation for anyone',
        'For covered federal agencies the directive is mandatory with enforced due dates; KEV is not merely a statistics list, it carries a remediation requirement for those entities.',
        'For covered federal agencies it is mandatory, not just record-keeping. There is a real due date.',
      ),
      miss(
        'It requires the vendor to issue a patch within four business days of listing',
        'KEV imposes remediation duties on the operating agencies, not patch-release deadlines on vendors; CISA cannot compel a vendor\'s release schedule through BOD 22-01.',
        'The obligation is on the orgs to remediate, not on vendors to ship a fix by a date.',
      ),
    ],
    lesson:
      'CISA\'s BOD 22-01 makes the KEV catalog binding for federal civilian executive-branch (FCEB) agencies: each entry carries a due date by which they must remediate (commonly two weeks for recent CVEs, longer for older ones). Private organizations are not legally bound but widely adopt KEV as a high-confidence "patch this now — it is actively exploited" prioritization signal.',
    source,
    generated: true,
  },
  {
    id: 7624030,
    chapter: 'Vulnerability and Exposure Management',
    title: 'Vulnerability, threat, exploit, and risk',
    prompt:
      'A manager uses "vulnerability," "threat," "exploit," and "risk" interchangeably. A SQL-injection flaw exists in an app, a criminal group is known to target such apps, working attack code is circulating, and the app holds regulated data. Which term matches which?',
    correct:
      'The flaw is the vulnerability, the criminal group is the threat, the working attack code is the exploit, and the potential loss given all of the above is the risk',
    wrong: [
      miss(
        'The flaw is the threat, the criminal group is the vulnerability, and risk is the exploit code',
        'This swaps the core terms: a vulnerability is the weakness (the flaw), a threat is the actor or event that could exploit it (the group), and an exploit is the code/technique — risk is the resulting potential loss, not the code.',
        'A weakness is the vulnerability; an actor is the threat. You have those two reversed.',
      ),
      miss(
        'All four are synonyms; the distinction is academic and does not affect prioritization',
        'The distinction drives prioritization directly: a vulnerability with no credible threat or exploit and trivial impact is low risk, while one with an active threat, public exploit, and sensitive data is high risk.',
        'These map to very different priorities. A flaw nobody can or wants to exploit is not the same as one under attack.',
      ),
      miss(
        'Risk is the same as the vulnerability, because the flaw is what causes the loss',
        'Risk combines likelihood and impact across the vulnerability, the threat, the exploit, and the asset value; the flaw alone, absent threat and impact, does not equal risk.',
        'Risk is a product of likelihood and impact, not just the flaw. The flaw is one input among several.',
      ),
    ],
    lesson:
      'A vulnerability is a weakness; a threat is the actor or event that could exploit it; an exploit is the specific technique or code that does; and risk is the potential loss combining likelihood (threat plus exploitability) and impact (asset value). Prioritization flows from risk, which is why a high-severity flaw with no active threat can rank below a moderate flaw under active exploitation on a sensitive asset.',
    source,
    generated: true,
  },
  {
    id: 7624031,
    chapter: 'Vulnerability and Exposure Management',
    title: 'EPSS probability versus percentile',
    prompt:
      'A vulnerability shows EPSS probability 0.08 and EPSS percentile 0.94. A colleague says "the percentile is higher, so 94% chance it gets exploited." What is the correct reading?',
    correct:
      'The probability (0.08) is the ~8% chance of exploitation in 30 days; the percentile (0.94) means it scores higher than 94% of all CVEs — high relative ranking despite a modest absolute probability',
    wrong: [
      miss(
        'The percentile is the chance of exploitation, so there is a 94% probability it will be exploited',
        'The percentile is a relative ranking, not a probability; the actual likelihood is the probability field (0.08). Most CVEs have very low EPSS, so even an 8% chance can rank in the 94th percentile.',
        'Percentile ranks against other CVEs; it is not a likelihood. Which field is the actual probability?',
      ),
      miss(
        'Both numbers say the same thing, so the vulnerability has roughly a 50% exploitation chance (their average)',
        'Averaging a probability and a percentile is meaningless — they are different units. The probability (0.08) is the likelihood; the percentile (0.94) is the rank. You never blend them.',
        'These are different units; you cannot average them. One is a likelihood, the other a ranking.',
      ),
      miss(
        'The probability of 0.08 means it is in the bottom 8% of CVEs and can be deprioritized entirely',
        'A 0.08 probability still places it above 94% of all CVEs by ranking, because the population is heavily skewed toward near-zero scores; "bottom 8%" confuses the absolute probability with the percentile rank.',
        'A low absolute probability can still be a high rank when most CVEs are near zero. Check the percentile.',
      ),
    ],
    lesson:
      'EPSS reports two numbers: the probability (0–1) of exploitation in the next 30 days, and the percentile, the vulnerability\'s rank against all scored CVEs. Because most CVEs have very low probabilities, a modest absolute probability can sit in a high percentile. Use the probability for absolute likelihood and the percentile for "how it compares" — never confuse the two.',
    source,
    generated: true,
  },
  {
    id: 7624032,
    chapter: 'Vulnerability and Exposure Management',
    title: 'Internet-facing reachability changes priority',
    prompt:
      'The same KEV-listed vulnerability affects two systems: one is an internet-facing web server, the other an internal server reachable only from a segmented admin network. Both have the same CVSS and EPSS. How should reachability affect priority?',
    correct:
      'The internet-facing instance is higher priority because exposure (reachability by the threat) is part of risk, not just the vulnerability\'s intrinsic score — an attacker can reach it directly',
    wrong: [
      miss(
        'Priority is identical because CVSS and EPSS are the same for both',
        'CVSS and EPSS describe the vulnerability in the abstract; risk also depends on exposure. An internet-facing asset is reachable by every scanner on earth, so it warrants higher priority despite identical scores.',
        'The scores describe the flaw, not your exposure. Who can actually reach each system?',
      ),
      miss(
        'The internal system is higher priority because internal systems hold more valuable data',
        'Internal systems are not automatically higher-value, and reachability cuts the other way here: the internet-facing system is directly attackable, while the internal one sits behind segmentation that raises the bar.',
        'Internal does not mean more valuable, and the internet-facing one is the one an attacker can reach now.',
      ),
      miss(
        'Reachability is irrelevant once a vulnerability is in KEV; both must be patched in the same hour',
        'KEV elevates both, but you still sequence finite remediation capacity by exposure; the directly-reachable, internet-facing instance is the more urgent of two KEV items when you cannot do everything at once.',
        'KEV makes both urgent, but you still order them. Which one can an attacker reach without a foothold?',
      ),
    ],
    lesson:
      'Risk-based prioritization layers exposure on top of intrinsic scores. Two assets with identical CVSS/EPSS/KEV are not equally urgent if one is internet-facing and the other sits behind segmentation: reachability by the threat is a core component of risk. Patch the directly-exposed instance first, and treat segmentation as a (partial, not permanent) compensating control for the internal one.',
    source,
    generated: true,
  },
  {
    id: 7624033,
    chapter: 'Vulnerability and Exposure Management',
    title: 'Justifying a patch SLA to a system owner',
    prompt:
      'A system owner resists a 72-hour patch SLA for a KEV-listed, internet-facing flaw, citing change-control caution. What is the most defensible way to hold the SLA?',
    correct:
      'Frame the SLA in risk terms — confirmed active exploitation plus direct internet exposure — offer a tested rollback and a maintenance window, and document the risk decision if the owner still wants to delay',
    wrong: [
      miss(
        'Override the owner immediately and patch in production without any testing or window',
        'Bypassing change control entirely risks a self-inflicted outage and destroys the cooperative relationship; the SLA is held by making the risk case and offering a tested, windowed path, not by reckless action.',
        'Holding the SLA does not mean abandoning testing and rollback. Make the risk case and offer a safe window.',
      ),
      miss(
        'Drop the SLA, since the system owner always has final say over their system',
        'Owners weigh operational concerns, but a KEV-listed internet-facing flaw is an enterprise risk; security holds the SLA with evidence and escalates a documented risk acceptance rather than silently dropping it.',
        'Owner caution is input, not a veto on enterprise risk. Escalate a documented decision, do not just drop it.',
      ),
      miss(
        'Tell the owner the flaw is critical and refuse to discuss the operational concerns',
        'Dismissing legitimate change-control concerns breeds resistance and shadow risk; the durable approach addresses both — the security urgency and the owner\'s rollback/window needs — together.',
        'Stonewalling the owner\'s concerns backfires. Address urgency and their operational needs together.',
      ),
    ],
    lesson:
      'A patch SLA holds when it is justified in risk language the owner can act on: confirmed exploitation (KEV), exposure (internet-facing), and a concrete safe path (tested rollback, maintenance window). If the owner still wants to delay, the responsible move is a documented, time-bound risk acceptance escalated to the right authority — not a silent drop or a reckless override.',
    source,
    generated: true,
  },
  // ---------- Chapter 6: Incident Response Lifecycle, Containment, and Recovery ----------
  {
    id: 7624034,
    chapter: 'Incident Response Lifecycle, Containment, and Recovery',
    title: 'PICERL mapped to NIST',
    prompt:
      'A team trained on SANS PICERL (Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned) needs to map it to NIST SP 800-61\'s four phases. Which mapping is correct?',
    correct:
      'PICERL\'s Identification maps to NIST\'s Detection and Analysis; Containment, Eradication, and Recovery collapse into NIST\'s single combined phase; Lessons Learned maps to Post-Incident Activity; Preparation aligns directly',
    wrong: [
      miss(
        'NIST has six phases that match PICERL one-to-one with identical names',
        'NIST defines four phases, not six, and groups Containment, Eradication, and Recovery into one phase; the two frameworks are compatible but not name-for-name identical.',
        'NIST has four phases, not six. Several PICERL steps fold into one NIST phase. Which ones?',
      ),
      miss(
        'PICERL\'s Lessons Learned maps to NIST\'s Preparation, since both are about getting ready',
        'Lessons Learned is the retrospective at the end, which maps to NIST\'s Post-Incident Activity; it feeds back into Preparation but is not the same phase. Preparation is the pre-incident readiness step.',
        'Lessons Learned happens after the incident. It feeds preparation but is its own (final) phase.',
      ),
      miss(
        'NIST has no equivalent to PICERL\'s Containment because NIST skips straight to eradication',
        'NIST explicitly includes containment within its combined "Containment, Eradication, and Recovery" phase; it does not skip it. The frameworks agree that containment precedes eradication.',
        'NIST keeps containment — it is right in the name of the combined phase. It does not skip it.',
      ),
    ],
    lesson:
      'NIST SP 800-61 (four phases) and SANS PICERL (six steps) describe the same lifecycle. Preparation aligns; PICERL\'s Identification is NIST\'s Detection and Analysis; PICERL\'s Containment, Eradication, and Recovery are folded into NIST\'s single combined phase; and PICERL\'s Lessons Learned is NIST\'s Post-Incident Activity. Knowing both lets responders speak across teams without confusion.',
    source,
    generated: true,
  },
  {
    id: 7624035,
    chapter: 'Incident Response Lifecycle, Containment, and Recovery',
    title: 'Eradication is per-campaign, not per-host',
    prompt:
      'A team rebuilt the one server that triggered the alert and declared eradication complete. A week later the attacker returns through a second backdoor on a different host. What was the eradication error?',
    correct:
      'Eradication must be scoped to the whole campaign — every implant, persistence mechanism, and compromised credential across all affected hosts — not just the first host that alerted',
    wrong: [
      miss(
        'There was no error; the attacker simply launched a brand-new, unrelated attack',
        'Returning through a second backdoor a week later is the hallmark of incomplete eradication of the original campaign, not a coincidental new intrusion; the foothold was never fully removed.',
        'A second backdoor appearing right after is rarely coincidence. The first cleanup missed siblings.',
      ),
      miss(
        'The error was rebuilding the server instead of just running antivirus on it',
        'Rebuilding is often the right eradication action for a compromised host; the failure was scope, not method — only one host was addressed while other persistence remained untouched.',
        'Rebuilding the host was fine. The miss was stopping at one host. What about the others?',
      ),
      miss(
        'The error was declaring eradication before recovery, which must always come first',
        'Recovery follows eradication, not the reverse; that ordering is correct. The actual problem was that eradication itself was incomplete across the campaign, allowing a second foothold to survive.',
        'Recovery does come after eradication — that order was fine. The eradication itself was just incomplete.',
      ),
    ],
    lesson:
      'Eradication is scoped to the campaign, not the first victim. A capable attacker plants multiple persistence mechanisms across multiple hosts and harvests many credentials. Cleaning only the alerting host leaves backdoors that bring the attacker right back. True eradication enumerates and removes every implant, persistence artifact, and compromised credential across the full footprint before recovery.',
    source,
    generated: true,
  },
  {
    id: 7624036,
    chapter: 'Incident Response Lifecycle, Containment, and Recovery',
    title: 'Immutable backups versus ransomware',
    prompt:
      'A ransomware operator deliberately deletes or encrypts backups before detonating. Which backup property most directly defeats this, and why?',
    correct:
      'Immutable (write-once) and/or air-gapped backups that cannot be altered or deleted within their retention window, so even an attacker with admin rights cannot tamper with the recovery copy',
    wrong: [
      miss(
        'Simply having more frequent backups, since a recent backup is always recoverable',
        'Frequency does not help if the attacker can reach and destroy the backups; ransomware crews specifically hunt and delete backup repositories. Immutability prevents the deletion, which frequency alone cannot.',
        'More frequent copies still get deleted if reachable. What stops the attacker from destroying them at all?',
      ),
      miss(
        'Storing backups on the same domain-joined server as production for fast restore',
        'Co-locating backups in the same trust domain as production is exactly how attackers reach and destroy them; the recovery copy must be isolated (immutable/air-gapped), not conveniently adjacent.',
        'Same trust domain as production is how backups get wiped. Isolation, not convenience, protects them.',
      ),
      miss(
        'Encrypting the backups, so the ransomware cannot read them',
        'Encryption protects confidentiality of the backup, not its existence; an attacker with access can still delete or re-encrypt an encrypted backup. Immutability protects against tampering, which is the actual threat here.',
        'Encryption hides contents; it does not stop deletion. The threat is tampering, which immutability blocks.',
      ),
    ],
    lesson:
      'Ransomware operators target backups precisely to remove the recovery option. Immutable (write-once-read-many) and air-gapped backups cannot be modified or deleted within their retention window even by an account with administrative rights, preserving a clean recovery copy. The classic 3-2-1 rule (three copies, two media, one off-site) is strengthened by adding immutability and offline isolation.',
    source,
    generated: true,
  },
  {
    id: 7624037,
    chapter: 'Incident Response Lifecycle, Containment, and Recovery',
    title: 'Golden image versus restoring infected backup',
    prompt:
      'During recovery, the team must rebuild dozens of compromised workstations. Restoring last week\'s system backups would be fast, but the intrusion began three weeks ago. What is the safer recovery approach?',
    correct:
      'Rebuild from a known-clean golden image and reapply data after scanning, because backups from within the compromise window may already contain the attacker\'s persistence',
    wrong: [
      miss(
        'Restore last week\'s backups, since a week-old backup is recent enough to be clean',
        'If the intrusion began three weeks ago, last week\'s backup falls inside the compromise window and may already contain implants; recency does not guarantee a clean state once the start date precedes it.',
        'The intrusion predates that backup. A backup from inside the compromise window may carry the implant.',
      ),
      miss(
        'Restore the most recent backup available regardless of date to minimize data loss',
        'Minimizing data loss cannot come at the cost of restoring the attacker\'s foothold; the recovery point must predate the compromise or come from a trusted clean image, even if some data must be re-derived.',
        'The newest backup may be the most infected. The restore point must predate the compromise.',
      ),
      miss(
        'Clean only the malware files found on each machine and avoid a full rebuild',
        'Selective file deletion cannot reliably guarantee a host is clean after deep compromise; rebuilding from a trusted image is the defensible way to assert a known-good starting state.',
        'You cannot prove a deeply compromised host is clean by deleting files. Rebuild from a trusted image.',
      ),
    ],
    lesson:
      'Recovery must restore to a known-clean state. Backups taken during the compromise window can carry the attacker\'s persistence, so restoring them reintroduces the foothold. Rebuilding from a trusted golden image and reapplying scanned data — or choosing a restore point that predates the intrusion — gives a defensible clean baseline. "Fast" recovery that reinstalls the attacker is not recovery.',
    source,
    generated: true,
  },
  {
    id: 7624038,
    chapter: 'Incident Response Lifecycle, Containment, and Recovery',
    title: 'Reboot-versus-preserve decision',
    prompt:
      'A host shows signs of fileless, memory-resident malware. Operations wants to reboot to clear it; the IR lead wants to capture memory first. What is the correct sequence and rationale?',
    correct:
      'Capture a memory image (and other volatile data) before any reboot, because fileless malware lives in RAM and a reboot destroys the only evidence of it along with details of the live compromise',
    wrong: [
      miss(
        'Reboot immediately, because clearing memory-resident malware quickly limits damage',
        'Rebooting may evict the malware but destroys the irreplaceable memory evidence needed to understand scope, attribution, and other footholds; capture first, then contain — never reboot away your only evidence.',
        'A reboot deletes exactly the evidence fileless malware leaves. What must you capture before that?',
      ),
      miss(
        'Pull the power cord instead of a clean shutdown to "freeze" the state',
        'Yanking power does not preserve RAM (which is volatile and lost on power-off); it only avoids a graceful shutdown\'s changes. The correct preservation is a live memory capture before any power event.',
        'Cutting power still wipes RAM. Preserving memory means imaging it live, not freezing by yanking the cord.',
      ),
      miss(
        'Leave the host running untouched indefinitely to preserve evidence forever',
        'Preserving evidence does not mean leaving an actively compromised host on the network; you capture volatile data and then contain (e.g., isolate), balancing forensics with stopping ongoing harm.',
        'Preserve, then contain. You capture memory and then isolate; you do not just leave it running on the network.',
      ),
    ],
    lesson:
      'With fileless or memory-resident malware, the evidence exists only in RAM. The order is: capture volatile data (memory image, network connections, running processes) first, then contain (isolate) the host. A reboot — or a power pull — destroys that evidence. The decision should be deliberate and documented, balancing forensic value against the need to stop active harm.',
    source,
    generated: true,
  },
  {
    id: 7624039,
    chapter: 'Incident Response Lifecycle, Containment, and Recovery',
    title: 'Ransomware response sequencing',
    prompt:
      'A ransomware encryption event is actively spreading across file shares. Put the immediate priorities in the right order: restore from backup, contain spread, preserve evidence/identify variant.',
    correct:
      'Contain the spread first, preserve evidence and identify the variant, then restore from validated clean backups once spread is stopped',
    wrong: [
      miss(
        'Restore from backup first to get the business running, then contain the spread',
        'Restoring during active encryption means the restored data gets re-encrypted by the still-spreading ransomware; containment must come before restoration, always.',
        'Restoring into an active spread just re-encrypts your restore. What has to stop first?',
      ),
      miss(
        'Preserve evidence first and do nothing else until forensics is fully complete',
        'Waiting for complete forensics while encryption spreads maximizes damage; containment to stop the spread is the immediate priority, with evidence preserved as you go, not as a blocking prerequisite.',
        'Full forensics before stopping the spread lets it keep encrypting. Contain now, preserve in parallel.',
      ),
      miss(
        'Pay the ransom first since that is the fastest path to a decryption key',
        'Payment is a fraught legal/business decision (not an analyst\'s call), does not stop the active spread, and offers no guarantee; the operational priority is containment, then preservation, then validated restore.',
        'Paying does not stop the spread and is not the SOC\'s call. Contain first, then preserve, then restore.',
      ),
    ],
    lesson:
      'Active-encryption ransomware response sequences: (1) contain the spread — isolate affected hosts, disable the propagation path, revoke abused accounts; (2) preserve evidence and identify the variant (it may have a known decryptor or behavior); (3) restore from validated, clean backups only after spread is stopped. Restoring into an active spread simply re-encrypts the recovery.',
    source,
    generated: true,
  },
  // ---------- Chapter 7: Incident Communication and Command ----------
  {
    id: 7624040,
    chapter: 'Incident Communication and Command',
    title: 'The situation-report format',
    prompt:
      'An incident commander standardizes the mid-incident situation report (sitrep). Which set of fields best serves a decision-maker reading it?',
    correct:
      'Confirmed facts, current impact, actions underway, key unknowns, and the next decision point (with owner and time)',
    wrong: [
      miss(
        'A complete chronological transcript of every action every responder has taken',
        'A raw transcript buries the decision-relevant signal in operational detail; the reader needs synthesis — what is known, the impact, what is happening, what is unknown, and the next decision — not a play-by-play.',
        'A blow-by-blow log is not a sitrep. The reader needs synthesis and a next decision, not a transcript.',
      ),
      miss(
        'A confident root-cause conclusion and attribution, even before evidence supports them',
        'Asserting unconfirmed root cause and attribution to sound decisive produces decisions that must be walked back; a sitrep separates confirmed facts from unknowns rather than projecting false certainty.',
        'Confident guesses about cause and who-did-it backfire. A sitrep labels unknowns honestly.',
      ),
      miss(
        'Only reassurance that the team has it handled, with no specifics',
        'Content-free reassurance gives leadership nothing to decide on and erodes trust when reality diverges; the value of a sitrep is concrete facts, impact, and the pending decision.',
        'Empty reassurance supports no decision. Leaders need facts, impact, and what call comes next.',
      ),
    ],
    lesson:
      'A strong sitrep is built for the reader\'s next decision: confirmed facts, current impact, actions underway, key unknowns, and the next decision point with an owner and a time. It separates what is known from what is hypothesized, avoids raw data dumps and false certainty, and gives a decision-maker exactly what they need to act — and nothing they have to dig through.',
    source,
    generated: true,
  },
  {
    id: 7624041,
    chapter: 'Incident Communication and Command',
    title: 'Stakeholder mapping during an incident',
    prompt:
      'An incident commander must tailor communications to different audiences. Why is sending the same detailed technical update to executives, customers, legal, and responders a mistake?',
    correct:
      'Each audience needs a different cut — responders need technical detail, executives need impact and decisions, legal needs facts and privilege considerations, customers need scoped accurate guidance — so one message serves none of them well',
    wrong: [
      miss(
        'It is not a mistake; one detailed message ensures total transparency for everyone',
        'A single technical message overwhelms executives and customers while under-serving legal\'s specific needs; transparency is achieved by giving each audience what it can act on, not one undifferentiated dump.',
        'One detailed dump fits no one. What does an executive need versus a responder versus a customer?',
      ),
      miss(
        'The only problem is that customers should never be told anything during an incident',
        'Customers often must be told something — accurate, scoped, and timely — especially when their data is affected; the issue is tailoring per audience, not blanket silence toward customers.',
        'Customers frequently must be informed. The point is tailoring the message, not staying silent.',
      ),
      miss(
        'The mistake is purely about message length; a shorter version for all would fix it',
        'Length is not the core issue — content and framing are. Executives need impact and decisions, legal needs facts and privilege handling, responders need detail; a uniformly short message still mismatches their distinct needs.',
        'Trimming length does not fix mismatched content. Each audience needs different substance, not just fewer words.',
      ),
    ],
    lesson:
      'Stakeholder mapping tailors incident communication to each audience\'s decisions: responders need technical depth, executives need impact and the decisions in front of them, legal needs facts framed with privilege in mind, and customers/partners need accurate, scoped guidance. One message for all either overwhelms or under-informs. Map the audiences and shape the message to each.',
    source,
    generated: true,
  },
  {
    id: 7624042,
    chapter: 'Incident Communication and Command',
    title: 'Bounded uncertainty under pressure',
    prompt:
      'An executive presses, "Just tell me yes or no — did they steal customer data?" Forensics is still underway and the honest answer is uncertain. What is the professional response?',
    correct:
      'State what is confirmed, what is still unknown, when the next update will come, and what decision is being prepared for each plausible outcome — bounded uncertainty rather than a forced yes/no',
    wrong: [
      miss(
        'Say "yes" to be safe, since assuming the worst is always the cautious choice',
        'A false "yes" triggers premature customer notifications, regulatory filings, and reputational harm that may be wrong and have to be retracted; caution is expressed as bounded uncertainty, not invented certainty.',
        'A guessed "yes" launches real, irreversible actions. Caution is honest uncertainty, not a fabricated answer.',
      ),
      miss(
        'Say "no" to avoid alarming leadership until you are completely certain',
        'A false "no" can breach disclosure obligations whose clocks start at awareness and lull leadership into inaction; you cannot deny what you have not ruled out.',
        'Denying what you have not ruled out is dangerous and may breach a clock that already started. Do not say "no" blindly.',
      ),
      miss(
        'Refuse to answer at all until forensics is 100% complete',
        'Going silent leaves leadership unable to plan and is read as loss of control; the professional move is to share confirmed facts and open questions with a next-update time, not to stonewall.',
        'Silence reads as loss of control and helps no one plan. Share what is known plus a next-update time.',
      ),
    ],
    lesson:
      'Under pressure, resist the forced binary. Bounded uncertainty means stating clearly what is confirmed, what is genuinely unknown, when the next update will arrive, and what decisions are being readied for each plausible outcome. A fabricated yes or no triggers irreversible downstream actions; honest, structured uncertainty preserves credibility and keeps leadership able to plan.',
    source,
    generated: true,
  },
  {
    id: 7624043,
    chapter: 'Incident Communication and Command',
    title: 'Span of control and the deputy role',
    prompt:
      'A single incident commander is fielding twenty responders, three executive channels, and a vendor call simultaneously, and decisions are slipping. Drawing on incident-command structure, what is the fix?',
    correct:
      'Delegate — appoint a deputy or section leads (e.g., a communications lead and an operations lead) so the commander\'s span of control stays manageable and decisions do not bottleneck on one person',
    wrong: [
      miss(
        'The commander should simply work faster and skip updates to keep up',
        'Skipping updates to absorb an unmanageable span sacrifices the coordination the role exists to provide; the structural fix is delegating to section leads, not asking one overloaded person to do more.',
        'Working faster does not fix an overloaded span. The structure delegates; it does not heroically absorb.',
      ),
      miss(
        'Hand command to whoever is least busy at that moment',
        'Command should be a deliberate, continuous assignment, not a hot potato passed by availability; the fix is to add structure beneath the commander, not to randomly reassign the top role mid-incident.',
        'Command is a stable assignment, not passed by who is free. Add leads beneath the commander instead.',
      ),
      miss(
        'Pause the incident response until the commander has fewer things to handle',
        'You cannot pause an active intrusion to reduce the commander\'s load; the load is managed by distributing it across a command structure while response continues.',
        'You cannot pause an active attack. Distribute the load across a command structure instead.',
      ),
    ],
    lesson:
      'Incident command borrows span-of-control discipline from emergency management: one person can effectively direct only so many people and channels. When the span exceeds that, the commander delegates to a deputy and section leads (operations, communications, planning), keeping decision-making coherent. The fix for an overloaded commander is structure, not heroics.',
    source,
    generated: true,
  },
  {
    id: 7624044,
    chapter: 'Incident Communication and Command',
    title: 'Privilege and legal involvement',
    prompt:
      'Early in a serious breach, counsel asks that certain investigative work be conducted "at the direction of legal." From a communications standpoint, what is the practical reason, and what should responders avoid?',
    correct:
      'Work directed by counsel may be protected by attorney-client privilege or work-product, so responders should avoid speculative written conclusions and route sensitive analysis through the channels legal designates',
    wrong: [
      miss(
        'There is no real reason; involving legal only slows the technical work down',
        'Legal involvement structures privilege and disclosure handling that materially affect the organization\'s exposure; dismissing it as friction ignores why sensitive investigations are routed through counsel.',
        'Legal is not just friction here. What protection might "at the direction of counsel" create?',
      ),
      miss(
        'Privilege means responders should hide or delete technical evidence from investigators',
        'Privilege never licenses destroying or concealing evidence — that is spoliation; it governs how certain analysis and communications are handled, while the underlying technical evidence is preserved.',
        'Privilege is not a license to destroy evidence. That is spoliation. It is about handling, not hiding facts.',
      ),
      miss(
        'It means responders should stop documenting the incident entirely',
        'The incident still must be documented; the guidance is to avoid loose speculative conclusions in writing and to route sensitive analysis appropriately, not to abandon documentation.',
        'Documentation continues. The caution is about speculative wording and routing, not silence.',
      ),
    ],
    lesson:
      'When counsel directs investigative work, some analysis and communications may fall under attorney-client privilege or work-product protection, affecting what is discoverable later. Practically, responders should avoid casual speculative conclusions in writing ("we definitely got owned because X"), route sensitive analysis through legal\'s designated channels, and never treat privilege as cover to conceal or destroy evidence.',
    source,
    generated: true,
  },
  // ---------- Chapter 8: Post-Incident Learning, Metrics, and Disclosure ----------
  {
    id: 7624045,
    chapter: 'Post-Incident Learning, Metrics, and Disclosure',
    title: 'Goodhart\'s law and threshold drift',
    prompt:
      'A SOC\'s "alerts escalated" metric drops sharply, and leadership praises the improvement. Investigation reveals analysts quietly raised the escalation threshold. Which principle names this failure, and what is the real lesson?',
    correct:
      'Goodhart\'s law — when a measure becomes a target it ceases to be a good measure; the metric moved because the threshold (not the risk) changed, so paired quality/coverage metrics are needed to detect gaming',
    wrong: [
      miss(
        'Survivorship bias — the team only counted incidents that survived to escalation',
        'Survivorship bias is about analyzing only the cases that "made it" and ignoring those that did not; this case is a target-driven distortion of a metric, which is Goodhart\'s law, not survivorship.',
        'This is a metric being gamed once it became a target, not a sampling-of-survivors error.',
      ),
      miss(
        'Confirmation bias — analysts only saw evidence confirming fewer incidents',
        'Confirmation bias is selectively weighing evidence toward a belief; here the metric changed because the threshold was moved deliberately, a Goodhart-style gaming of the measure, not a perception bias.',
        'No one mis-weighed evidence here. They moved the bar that the metric measures. Which law is that?',
      ),
      miss(
        'Base-rate fallacy — the team ignored how common incidents actually are',
        'The base-rate fallacy concerns neglecting prior probabilities in inference; this is a measurement-incentive problem where adjusting the threshold made the metric improve without reducing risk.',
        'This is not about ignoring priors. It is a metric improving because its target moved. Name that effect.',
      ),
    ],
    lesson:
      'Goodhart\'s law: when a measure becomes a target, it stops measuring what you intended. A drop in escalations driven by a quietly raised threshold reflects policy change, not reduced risk. Defend against it by pairing volume metrics with quality and coverage measures (e.g., detection coverage, missed-incident rate) and by auditing threshold changes so gaming is visible.',
    source,
    generated: true,
  },
  {
    id: 7624046,
    chapter: 'Post-Incident Learning, Metrics, and Disclosure',
    title: 'MTTD, MTTR, and dwell time',
    prompt:
      'A program reports MTTD, MTTR, and dwell time. An attacker was present 30 days before detection, then contained 2 days after detection. Which metric is ~30 days and which is ~2 days?',
    correct:
      'Dwell time (and roughly MTTD for this incident) is ~30 days — time present before detection; MTTR is ~2 days — time from detection to containment/remediation',
    wrong: [
      miss(
        'MTTR is ~30 days and dwell time is ~2 days',
        'This reverses them: dwell time is the long undetected period (30 days), while MTTR measures the response after detection (2 days). Swapping them misreads which phase each covers.',
        'Dwell is the time spent undetected; MTTR is after you detect. You have them flipped.',
      ),
      miss(
        'Both MTTD and MTTR are ~30 days, since the whole incident lasted about that long',
        'MTTR specifically covers detection-to-containment, which here is ~2 days, not 30; lumping the whole incident into both metrics erases the distinction between detection latency and response speed.',
        'The two metrics measure different spans. Detection-to-containment was short here. Separate them.',
      ),
      miss(
        'Dwell time is ~32 days, the full duration, and MTTD is zero because detection eventually happened',
        'MTTD is the time to detect (the ~30-day undetected period), not zero; "detection eventually happened" does not make detection latency zero. Dwell time here is the undetected span, not the total plus response.',
        'Detecting eventually does not make detection time zero. MTTD is how long it stayed undetected.',
      ),
    ],
    lesson:
      'Dwell time is how long an attacker is present before detection. MTTD (mean time to detect) measures detection latency; MTTR (mean time to respond) measures detection-to-containment/remediation. Here detection took ~30 days (long dwell, high MTTD) and response took ~2 days (low MTTR). Reducing dwell time is often higher-leverage than shaving response time, since the undetected window is where most damage accrues.',
    source,
    generated: true,
  },
  {
    id: 7624047,
    chapter: 'Post-Incident Learning, Metrics, and Disclosure',
    title: 'Detection coverage as a quality metric',
    prompt:
      'A SOC measures alert volume and closure rate but cannot answer "which attacker techniques would we actually catch?" Which metric closes that gap, and how is it often expressed?',
    correct:
      'Detection coverage — measuring which MITRE ATT&CK techniques the team has validated detections for, often visualized as a heatmap over the ATT&CK matrix to expose blind spots',
    wrong: [
      miss(
        'A higher alert volume target, since more alerts proves broader coverage',
        'Alert volume measures noise, not which techniques are covered; you can have thousands of alerts and still be blind to whole tactics. Coverage maps detections to techniques, which volume cannot.',
        'Lots of alerts does not mean you cover every technique. What maps detections to attacker methods?',
      ),
      miss(
        'Faster closure rate, because closing alerts quickly shows the team is effective',
        'Closure speed measures throughput, not whether a given technique would ever generate an alert; a fast team can still have no detection for a technique it never sees.',
        'Speed of closing says nothing about gaps in what you can detect at all. Coverage is the missing view.',
      ),
      miss(
        'Mean time to respond, since a low MTTR implies comprehensive detection',
        'MTTR measures how fast you respond once you detect, not whether you would detect a given technique in the first place; a blind spot never produces an alert to start the MTTR clock.',
        'MTTR only starts after detection. It cannot reveal techniques you would never detect at all.',
      ),
    ],
    lesson:
      'Detection coverage measures which adversary techniques the team has validated detections for, commonly mapped as a heatmap across the MITRE ATT&CK matrix. It answers "what could we actually catch?" — a question volume, closure rate, and MTTR cannot. Pairing activity metrics with coverage exposes blind spots and turns metrics into a measure of risk reduction rather than busyness.',
    source,
    generated: true,
  },
  {
    id: 7624048,
    chapter: 'Post-Incident Learning, Metrics, and Disclosure',
    title: 'SEC Item 1.05 amendments and the determination clock',
    prompt:
      'A public company determines an incident is material but still lacks some required details by the four-business-day deadline. Under SEC Form 8-K Item 1.05, what is the correct handling?',
    correct:
      'File the 8-K within four business days of the materiality determination with the information available, and amend it later as facts develop — the deadline runs from the determination, not from having every detail',
    wrong: [
      miss(
        'Delay the entire filing until every required detail is fully known',
        'The rule does not permit waiting for complete information; once materiality is determined the four-business-day clock runs, and missing details are added by amendment, not by postponing the initial filing.',
        'The clock runs from the materiality call, not from completeness. What do you do about missing details?',
      ),
      miss(
        'The deadline is four business days from when the incident was first discovered',
        'Item 1.05 ties the clock to the materiality determination, not discovery; many incidents are never material, so a discovery-based clock misstates the rule.',
        'The trigger is the materiality determination, not first discovery. Which event starts the four days?',
      ),
      miss(
        'No filing is needed because the details are incomplete and disclosure is optional',
        'Disclosure of a material incident is mandatory for SEC registrants; incompleteness is handled by amendment, and the obligation does not become optional because the picture is still developing.',
        'Material-incident disclosure is mandatory, not optional. Incomplete facts are handled by amending later.',
      ),
    ],
    lesson:
      'SEC Form 8-K Item 1.05 requires disclosing a material cybersecurity incident within four business days of the materiality determination (which itself must be made without unreasonable delay). If some required details are not yet known, the company files on time with what it has and amends as facts develop. The clock is the determination, not discovery, and not having every detail does not extend it.',
    source,
    generated: true,
  },
  {
    id: 7624049,
    chapter: 'Post-Incident Learning, Metrics, and Disclosure',
    title: 'GDPR Article 33 risk threshold',
    prompt:
      'A company suffers a personal-data breach. Under GDPR Article 33, is notification to the supervisory authority always required within 72 hours of awareness?',
    correct:
      'No — notification within 72 hours of awareness is required unless the breach is unlikely to result in a risk to individuals\' rights and freedoms; that low-risk exception, which the controller must be able to justify, is the only carve-out',
    wrong: [
      miss(
        'Yes, every personal-data breach must always be reported within 72 hours, with no exceptions',
        'Article 33 contains a risk-based exception: a breach unlikely to result in any risk to individuals\' rights and freedoms need not be notified. The 72-hour duty is the default, not an absolute with zero carve-outs.',
        'There is a low-risk exception built into Article 33. The default is 72 hours, but not literally always.',
      ),
      miss(
        'No — notification is only required if the breach poses a high risk to individuals',
        'The "high risk" threshold governs notifying the affected individuals (Article 34), not the supervisory authority; the authority must be told for any breach that is not unlikely to cause risk — a lower bar than high risk.',
        'High risk is the bar for telling individuals. The authority threshold is lower than that. Do not conflate them.',
      ),
      miss(
        'Yes, but the 72 hours runs from when forensic investigation is fully complete',
        'The clock starts at awareness of the breach, not at forensic completion; where details are unavailable in time, GDPR allows phased notification rather than waiting for a finished investigation.',
        'The clock starts at awareness, not when forensics finish. Incomplete facts allow phased notification.',
      ),
    ],
    lesson:
      'GDPR Article 33 requires notifying the supervisory authority without undue delay and within 72 hours of becoming aware of a personal-data breach — unless the breach is unlikely to result in a risk to individuals\' rights and freedoms (a low-risk exception the controller must justify). The separate, higher "high risk" threshold in Article 34 governs notifying the affected individuals. Phased notification is permitted when details are not yet available.',
    source,
    generated: true,
  },
  {
    id: 7624050,
    chapter: 'Post-Incident Learning, Metrics, and Disclosure',
    title: 'Lessons learned feeding preparation',
    prompt:
      'A post-incident review concludes that the attacker\'s initial foothold went undetected for weeks because a key log source was not being collected. What makes this a genuine lesson learned rather than just a finding?',
    correct:
      'It becomes a lesson learned only when it produces a concrete preparation change with an owner and a date — e.g., onboarding that log source and building a detection — closing the loop back into readiness',
    wrong: [
      miss(
        'Documenting the gap in the report is itself the lesson learned; no further action is required',
        'A finding recorded but never acted on changes nothing for the next incident; the lifecycle is closed only when the review drives a concrete preparation improvement, not when it is merely written down.',
        'Writing it down does not prevent recurrence. What turns a finding into an actual change?',
      ),
      miss(
        'It is a lesson learned only if someone is disciplined for missing the log source',
        'Blame suppresses the honest disclosure that surfaced the gap and does nothing to onboard the missing telemetry; the lesson is the systemic fix (collect the log, build the detection), not punishment.',
        'Punishment does not collect the missing log. The fix is systemic readiness, not finding someone to blame.',
      ),
      miss(
        'It counts as a lesson learned once the incident ticket is closed',
        'Ticket closure is administrative and unrelated to whether preparation actually improved; an open detection gap remains a gap regardless of the ticket\'s status.',
        'Closing the ticket does not onboard the log source. The gap persists until preparation actually changes.',
      ),
    ],
    lesson:
      'The post-incident phase exists to feed preparation. A finding becomes a lesson learned only when it converts into a concrete, owned, dated preparation change — onboarding the missing log source, building the detection, updating the runbook. Blameless review surfaces the honest gap; closing the loop into readiness is what actually reduces the next incident\'s impact.',
    source,
    generated: true,
  },
  {
    id: 7624051,
    chapter: 'Post-Incident Learning, Metrics, and Disclosure',
    title: 'Awareness clock versus forensic certainty',
    prompt:
      'Counsel notes a regulatory notification clock that starts at "awareness" of a likely reportable breach. Forensics will take three more weeks to be definitive. How should the notification timeline be reasoned about?',
    correct:
      'The clock runs from awareness, not from forensic certainty, so the team prepares to notify on time with available information (using phased updates where allowed) rather than waiting for a complete forensic picture',
    wrong: [
      miss(
        'Wait for 100% forensic certainty before starting any notification clock',
        'A clock keyed to awareness has already started; waiting for full forensic certainty blows the deadline. Regulators expect timely notice with available facts and later supplementation, not perfect information up front.',
        'The clock already started at awareness. Waiting for certainty misses the deadline. What can you file now?',
      ),
      miss(
        'Treat the notification clock as starting only when the company publicly announces the breach',
        'The obligation is triggered by the organization\'s awareness, not by a public announcement; the company cannot defer a regulatory clock by simply withholding public statements.',
        'Awareness, not a press release, starts the clock. You cannot delay it by staying quiet publicly.',
      ),
      miss(
        'Notify immediately with full attribution and root cause, even though both are unknown',
        'Timely does not mean fabricating unknown attribution or root cause; you notify on time with what is confirmed and label the unknowns, supplementing as facts develop — bounded uncertainty, not invented detail.',
        'Notify on time with confirmed facts and labeled unknowns — not guessed attribution and cause.',
      ),
    ],
    lesson:
      'Many breach-notification regimes (e.g., GDPR Article 33) start the clock at awareness, not at forensic certainty. The defensible approach is to notify on time with the information available — clearly separating confirmed facts from open questions — and use phased or supplementary notification where the rules allow. Waiting for a complete forensic picture is the classic way to miss a deadline whose clock has already started.',
    source,
    generated: true,
  },
  {
    id: 7624052,
    chapter: 'Post-Incident Learning, Metrics, and Disclosure',
    title: 'Closure is not eradication',
    prompt:
      'A metric review shows the SOC closes tickets quickly, and leadership equates "incident closed" with "threat eradicated." Why is this conflation dangerous?',
    correct:
      'Closing a ticket is an administrative state; eradication is the verified removal of the foothold across the campaign — a ticket can close while persistence remains, so closure must require evidence of eradication, not just paperwork',
    wrong: [
      miss(
        'It is not dangerous; a closed ticket by definition means the threat is fully gone',
        'Ticket closure is a workflow status that can be applied prematurely or by policy; it does not verify that every implant and credential was remediated. Equating the two lets live footholds be marked resolved.',
        'A closed ticket is a status, not proof. What evidence actually confirms the foothold is gone?',
      ),
      miss(
        'The only risk is that closing tickets too slowly hurts the MTTR metric',
        'The danger here is the opposite — premature or paperwork-only closure that hides an unremediated threat; optimizing closure speed without an eradication gate makes the problem worse, not better.',
        'Speed is not the issue. The risk is closing before the threat is actually removed.',
      ),
      miss(
        'It is fine as long as the closed ticket includes a detailed write-up',
        'A thorough write-up of an incomplete remediation still leaves the foothold in place; documentation quality does not substitute for verified eradication across the campaign.',
        'A nice write-up of an unfinished cleanup is still an unfinished cleanup. Closure needs verified eradication.',
      ),
    ],
    lesson:
      'Ticket closure is an administrative workflow state; eradication is the evidence-backed removal of the attacker\'s foothold across the entire campaign. Conflating them lets a SOC mark a still-live threat as resolved to satisfy a metric. Closure criteria should require verified eradication — no remaining persistence, rotated compromised credentials, confirmed scope — not just a completed ticket.',
    source,
    generated: true,
  },
])
