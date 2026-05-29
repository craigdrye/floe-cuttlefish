import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]
const source = 'Floe cybersecurityOperationsRoadmap top-up'

export const cybersecurityOperationsRoadmapTopUpQuestions: Question[] = makeQuestionBank('Career Skills', [
  // ---------- Chapter 1: SOC Triage and Alert Quality ----------
  {
    id: 7312000,
    chapter: 'SOC Triage and Alert Quality',
    title: 'Event vs alert vs incident',
    prompt:
      'A new analyst uses "event," "alert," and "incident" interchangeably in handoffs, causing confusion. What is the correct relationship between the three terms?',
    correct:
      'An event is any observed occurrence; an alert is an event a rule flagged as worth review; an incident is a confirmed adverse event requiring response',
    wrong: [
      miss(
        'They are three names for the same thing and the choice is just style',
        'They name three distinct tiers of certainty and consequence; collapsing them is exactly why this analyst confuses teammates about whether response has been triggered.',
        'One is raw observation, one is a flag, one is a confirmed problem. Order them by certainty.',
      ),
      miss(
        'An incident is smaller than an alert because it affects only one system',
        'Severity is not defined by system count; an incident is a confirmed adverse occurrence regardless of scope, and is the most serious of the three, not the smallest.',
        'Which term means "confirmed and needs response"? That is the top of the chain, not the bottom.',
      ),
      miss(
        'An alert is more serious than an incident because alerts page people',
        'Paging is a routing choice, not a severity tier; an alert is only a candidate for review, while an incident is a confirmed problem that the alert may or may not become.',
        'A confirmed adverse occurrence outranks a rule firing. Which one is confirmed?',
      ),
    ],
    lesson:
      'Operations runs on a ladder of certainty: events are everything observed, alerts are events a detection flagged, and incidents are confirmed adverse occurrences that require response. Triage is the act of deciding whether an alert is a real incident, so using the words precisely keeps the team aligned on what has actually been declared.',
    source,
    generated: true,
  },
  {
    id: 7312001,
    chapter: 'SOC Triage and Alert Quality',
    title: 'True positive versus false positive',
    prompt:
      'A detection fires on a backup service that legitimately encrypts files nightly, and the analyst confirms it is benign and tunes the rule. How should this disposition be recorded?',
    correct:
      'As a false positive — the alert fired but the underlying activity was not malicious',
    wrong: [
      miss(
        'As a true positive because the rule did its job and detected encryption',
        'A true positive means malicious activity was correctly detected; here the activity is benign backup behavior, so the alert is a false positive even though the rule "worked."',
        'True/false describes whether the threat was real, not whether the rule fired. Was the activity actually malicious?',
      ),
      miss(
        'As a false negative because nothing bad happened',
        'A false negative is a real threat the system failed to alert on; this case is the opposite — an alert fired on benign activity, which is a false positive.',
        'False negative = missed real attack. Here an alert fired and there was no attack.',
      ),
      miss(
        'As an incident because file encryption is always ransomware',
        'Legitimate backup and disk-encryption tools also encrypt files; confirming benign root cause is precisely how the analyst avoids declaring a non-incident.',
        'Confirmed benign means it never becomes an incident. What do we call a benign alert?',
      ),
    ],
    lesson:
      'A false positive is an alert that fired on activity that turned out to be benign; a false negative is a real threat that produced no alert. Recording dispositions accurately drives tuning and lets the team measure detection quality rather than just alert volume.',
    source,
    generated: true,
  },
  // ---------- Chapter 2: Detection Engineering and Threat Intelligence ----------
  {
    id: 7312002,
    chapter: 'Detection Engineering and Threat Intelligence',
    title: 'IOC versus IOA',
    prompt:
      'A threat-intel feed offers two products: a list of malicious file hashes and a description of "the behavior of staging data in a temp folder, then compressing and uploading it." How do these differ?',
    correct:
      'The hashes are indicators of compromise (artifacts of a known attack); the behavior description is an indicator of attack (the adversary technique itself)',
    wrong: [
      miss(
        'Both are indicators of compromise; the only difference is one is a file and one is text',
        'An IOA describes adversary behavior independent of any specific artifact, which is categorically different from an IOC like a hash that identifies one specific known sample.',
        'One identifies a specific known artifact; the other describes what the attacker does. Those are two named categories.',
      ),
      miss(
        'The hashes are indicators of attack because they catch the attack in progress',
        'A hash matches only a file already seen and catalogued; it is a static artifact (IOC), not a behavioral pattern, and trivially evaded by recompiling.',
        'Behavior versus artifact. A hash is an artifact of one known sample.',
      ),
      miss(
        'They are identical in value because any indicator stops the same attacker',
        'Behavioral indicators (IOAs) survive the attacker swapping files and infrastructure, so they are far more durable than atomic IOCs — value is not identical.',
        'Which one still works after the attacker recompiles the malware?',
      ),
    ],
    lesson:
      'Indicators of compromise (IOCs) are static artifacts left by a known attack — hashes, IPs, domains. Indicators of attack (IOAs) describe adversary behavior — the sequence of actions regardless of the specific tool. IOAs are harder for attackers to change, which makes them more durable detections.',
    source,
    generated: true,
  },
  {
    id: 7312003,
    chapter: 'Detection Engineering and Threat Intelligence',
    title: 'Pyramid of Pain investment',
    prompt:
      'Using David Bianco\'s Pyramid of Pain, a team wants to build detections that cost the adversary the most to evade. Which indicator type should they prioritize?',
    correct:
      "The adversary's tactics, techniques, and procedures (TTPs), at the top of the pyramid",
    wrong: [
      miss(
        'File hashes, because they uniquely identify the exact malware',
        'Hashes sit at the very bottom of the pyramid; an attacker changes a hash by recompiling or repacking, costing them almost nothing, so the detection inflicts no lasting pain.',
        'The pyramid ranks by how hard the indicator is to change. Hashes are the cheapest to swap.',
      ),
      miss(
        'IP addresses, because blocking infrastructure stops the connection',
        'IPs are near the bottom; attackers rotate hosting and proxies cheaply, so an IP block is evaded in minutes and forces no change in how they operate.',
        'How long does it take an attacker to move to a new IP? That tells you the pain level.',
      ),
      miss(
        'Domain names, because they are easy to add to a blocklist for the analyst',
        'Ease for the defender is not the metric; the pyramid measures cost to the adversary, and domains are cheaply re-registered, so they cause little pain.',
        'The pyramid measures the attacker\'s pain, not the analyst\'s convenience.',
      ),
    ],
    lesson:
      "The Pyramid of Pain ranks indicators by how much it hurts the adversary when you detect them. Hashes, IPs, and domains are trivial to change; tools are harder; TTPs — how the attacker actually operates — are hardest of all. Detecting at the TTP level forces adversaries to retool their entire approach.",
    source,
    generated: true,
  },
  {
    id: 7312004,
    chapter: 'Detection Engineering and Threat Intelligence',
    title: 'ATT&CK tactic versus technique',
    prompt:
      'In MITRE ATT&CK, an analyst labels an observation as "Lateral Movement (TA0008)" and a colleague says that is the tactic, not the technique. What distinguishes the two?',
    correct:
      'A tactic is the adversary\'s goal (the "why"); a technique is the specific method used to achieve it (the "how"), such as Pass-the-Hash under Lateral Movement',
    wrong: [
      miss(
        'A technique is broader than a tactic and contains several tactics',
        'The hierarchy is the reverse: a tactic is the broad objective and techniques are the narrower methods grouped under it, so a technique never contains tactics.',
        'Which is the umbrella goal and which is the concrete method? The goal is broader.',
      ),
      miss(
        'They are synonyms; ATT&CK uses both words for the same matrix column',
        'Each ATT&CK column is a tactic, and each cell within it is a distinct technique; conflating them defeats the purpose of mapping behavior precisely.',
        'A matrix column versus the cells inside it — those are two different levels.',
      ),
      miss(
        'A tactic is a tool the attacker downloads; a technique is the malware family',
        'Neither tactics nor techniques are tools or malware families; a tactic is an objective and a technique is a method, while tools live elsewhere on the Pyramid of Pain.',
        'ATT&CK describes goals and methods, not specific downloads. Re-read what each word means.',
      ),
    ],
    lesson:
      'In MITRE ATT&CK, tactics are the high-level objectives an adversary pursues (the Enterprise matrix has 14, like Lateral Movement TA0008), and techniques are the specific methods used to accomplish each tactic. Mapping observed behavior to tactic-and-technique gives teams a shared language for what the attacker is doing and why.',
    source,
    generated: true,
  },
  {
    id: 7312005,
    chapter: 'Detection Engineering and Threat Intelligence',
    title: 'TLP handling on shared intel',
    prompt:
      'A partner shares an indicator marked TLP:AMBER. Under the Traffic Light Protocol, how may the receiving analyst handle it?',
    correct:
      'Share it only with members of their own organization (and clients) who need to know, on a need-to-know basis — not publicly',
    wrong: [
      miss(
        'Post it publicly on a blog so the whole community benefits',
        'Public sharing is TLP:CLEAR; AMBER is explicitly limited-distribution, so publishing it breaks the originator\'s handling rules and the trust relationship.',
        'Which TLP color means "anyone, anywhere"? AMBER is not it.',
      ),
      miss(
        'Forward it only to the single analyst who received it and no one else',
        'That over-restricts; AMBER permits sharing within the organization on a need-to-know basis. The most restrictive named level (TLP:RED) is reserved for named recipients only.',
        'AMBER allows internal need-to-know sharing. The one-person-only rule is a stricter color.',
      ),
      miss(
        'Share it with any other security vendor since they are all on the same side',
        'AMBER limits distribution to the recipient\'s own organization and clients; broadcasting to arbitrary third-party vendors exceeds the permitted scope.',
        'AMBER stays inside your org and clients, not across every vendor you know.',
      ),
    ],
    lesson:
      'The Traffic Light Protocol marks how widely shared intelligence may be redistributed. TLP:RED is for named recipients only; TLP:AMBER permits limited sharing within the recipient organization (and its clients) on a need-to-know basis; TLP:GREEN allows community-wide sharing; TLP:CLEAR is unrestricted. Respecting these markings preserves sharing relationships.',
    source,
    generated: true,
  },
  {
    id: 7312006,
    chapter: 'Detection Engineering and Threat Intelligence',
    title: 'Kill chain stage of beaconing',
    prompt:
      'Telemetry shows an installed implant periodically reaching out to an external server for instructions. In the Lockheed Martin Cyber Kill Chain, which stage does this represent?',
    correct:
      'Command and Control (C2) — the implant establishing a channel to receive attacker instructions',
    wrong: [
      miss(
        'Reconnaissance, because the attacker is gathering information',
        'Reconnaissance is the first stage, before any access; periodic check-ins from an already-installed implant occur after delivery and installation, at the C2 stage.',
        'Recon happens before the attacker is even inside. This implant is already installed.',
      ),
      miss(
        'Weaponization, because the malware is doing its job',
        'Weaponization is the offline stage where the attacker pairs an exploit with a payload, long before it runs on a victim; a live implant beaconing out is well past it.',
        'Weaponization happens on the attacker\'s bench, not on your network.',
      ),
      miss(
        'Actions on Objectives, because the attacker now controls the host',
        'Actions on Objectives is the final stage where goals like exfiltration are executed; establishing the instruction channel is the preceding C2 stage that enables those actions.',
        'Beaconing sets up the channel; it is not yet stealing or destroying. That comes after.',
      ),
    ],
    lesson:
      'The Cyber Kill Chain models intrusion as seven stages: Reconnaissance, Weaponization, Delivery, Exploitation, Installation, Command and Control, and Actions on Objectives. An installed implant calling home for instructions is Command and Control — the stage where the attacker establishes remote control before pursuing final objectives.',
    source,
    generated: true,
  },
  // ---------- Chapter 3: Identity, Access, and Privilege ----------
  {
    id: 7312007,
    chapter: 'Identity, Access, and Privilege',
    title: 'MFA push fatigue',
    prompt:
      'A user reports dozens of unexpected MFA approval prompts at 3 a.m. and eventually tapped "approve" to make them stop. What attack is this, and what is the immediate concern?',
    correct:
      'MFA fatigue (push bombing) — the attacker likely has valid credentials and just obtained an approved session, so revoke sessions and reset the credential',
    wrong: [
      miss(
        'A harmless app glitch; tell the user to ignore the prompts going forward',
        'Repeated unsolicited approval prompts mean someone is actively submitting the correct password to trigger them; dismissing it as a glitch leaves a credential-holding attacker one tap from access.',
        'Why would prompts appear at all unless someone has the password? Treat it as active abuse.',
      ),
      miss(
        'Proof MFA failed and should be removed since it annoyed the user',
        'MFA did its job by requiring a second factor; the failure was the user approving a fraudulent prompt. The fix is phishing-resistant MFA and number matching, not removing MFA.',
        'The control worked until the user approved. Strengthen the factor; do not delete it.',
      ),
      miss(
        'A denial-of-service attack with no credential exposure to worry about',
        'The prompts only generate because the attacker already submitted valid credentials, so credential compromise is the core issue — not mere noise.',
        'Those prompts are downstream of a correct password. The credential is the problem.',
      ),
    ],
    lesson:
      'MFA fatigue (push bombing) works only when the attacker already has the password; they spam approval requests hoping the user taps "approve" out of annoyance. Response is to revoke active sessions, reset the credential, and move toward phishing-resistant MFA or number-matching that defeats blind approvals.',
    source,
    generated: true,
  },
  {
    id: 7312008,
    chapter: 'Identity, Access, and Privilege',
    title: 'Password reset versus session revocation',
    prompt:
      'After confirming an account was compromised, an analyst resets the user\'s password but the attacker keeps acting in the account. What step was missed?',
    correct:
      'Revoking the active sessions and tokens — existing sessions stay valid after a password change unless they are explicitly invalidated',
    wrong: [
      miss(
        'Nothing was missed; a password reset always logs out every existing session',
        'Most systems keep already-issued session tokens valid after a password change unless sessions are explicitly revoked, which is exactly why the attacker persists here.',
        'A new password does not automatically kill tokens already issued. What invalidates a live session?',
      ),
      miss(
        'The analyst should have deleted the account to end all access',
        'Account deletion destroys identity history and breaks dependent services; the correct, proportionate step is revoking sessions and tokens, not nuking the identity.',
        'You can end the attacker\'s session without destroying the user\'s entire account.',
      ),
      miss(
        'The reset will take effect at the next scheduled token refresh, so just wait',
        'Waiting leaves the attacker with full access during the gap, and refresh tokens may renew silently; sessions must be revoked actively and immediately.',
        'Waiting gives the attacker free time and refresh tokens may auto-renew. Act now.',
      ),
    ],
    lesson:
      'Changing a password does not, by itself, terminate sessions that were already authenticated; issued session and refresh tokens often remain valid until explicitly revoked. Compromised-account response must both reset the credential and revoke active sessions/tokens, or the attacker simply keeps using the session they already hold.',
    source,
    generated: true,
  },
  {
    id: 7312009,
    chapter: 'Identity, Access, and Privilege',
    title: 'OAuth consent grant',
    prompt:
      'A phishing campaign tricked users into approving a malicious third-party OAuth app that requested mailbox read access. The users\' passwords were never entered. Why is resetting passwords insufficient?',
    correct:
      'The app holds an OAuth refresh token granted by consent, which keeps working independent of the password; the malicious app grant must be revoked',
    wrong: [
      miss(
        'It is sufficient, because all access in the tenant flows through passwords',
        'OAuth consent grants delegate access via tokens, deliberately bypassing the password on every future call; that is the whole point of the attack and why a reset does nothing.',
        'The user never gave a password to the app. So what is the app actually using?',
      ),
      miss(
        'It is sufficient once MFA is enabled for those users',
        'MFA protects interactive sign-in, but a consented app uses a delegated token that does not re-prompt for MFA, so enabling MFA does not revoke the existing grant.',
        'MFA gates logins, not an already-granted app token. The grant lives outside the sign-in.',
      ),
      miss(
        'It is sufficient because OAuth tokens expire within an hour automatically',
        'Access tokens are short-lived, but the refresh token the app received renews them silently for a long period, so the access persists until the grant is revoked.',
        'Short-lived access tokens get renewed by a refresh token. What cancels the refresh token?',
      ),
    ],
    lesson:
      'Consent phishing tricks users into authorizing a malicious OAuth application, which receives delegated tokens (including a refresh token) that operate independently of the user password and often without re-prompting MFA. Remediation requires revoking the application\'s consent grant and tokens, not just resetting credentials.',
    source,
    generated: true,
  },
  // ---------- Chapter 4: Endpoint, Network, and Cloud Scope ----------
  {
    id: 7312010,
    chapter: 'Endpoint, Network, and Cloud Scope',
    title: 'EDR versus SIEM versus SOAR',
    prompt:
      'A team wants to (a) collect and correlate logs from many sources, (b) get deep process-level visibility and response on laptops, and (c) automate repetitive response steps. Which tools map to each need?',
    correct:
      'SIEM for log collection and correlation; EDR for endpoint visibility and response; SOAR for automating and orchestrating response workflows',
    wrong: [
      miss(
        'EDR for logs, SIEM for endpoints, SOAR for dashboards',
        'This swaps the first two: SIEM is the log-aggregation and correlation platform, while EDR is the endpoint agent providing process-level telemetry and host response.',
        'Which tool lives on the laptop versus which one ingests logs from everywhere? You have them flipped.',
      ),
      miss(
        'SOAR for everything, since orchestration tools also collect logs and watch endpoints',
        'SOAR orchestrates and automates across other tools; it does not itself provide the endpoint sensor or the primary log store, so it cannot cover all three needs alone.',
        'SOAR is the conductor, not the orchestra. It coordinates the other tools.',
      ),
      miss(
        'A single antivirus product covers all three needs',
        'Traditional signature antivirus does not centralize multi-source logs or automate cross-tool workflows; EDR/XDR, SIEM, and SOAR exist precisely because AV does not cover this scope.',
        'Antivirus matches signatures on one host. It does not correlate logs or automate playbooks.',
      ),
    ],
    lesson:
      'SIEM centralizes and correlates log data across the environment; EDR (and its broader cousin XDR) gives deep endpoint telemetry like process lineage and the ability to isolate or remediate a host; SOAR orchestrates and automates response actions across all of these. They are complementary layers, not substitutes.',
    source,
    generated: true,
  },
  {
    id: 7312011,
    chapter: 'Endpoint, Network, and Cloud Scope',
    title: 'Beaconing on the network',
    prompt:
      'A host makes outbound HTTPS connections to one external domain at almost perfectly regular intervals, with tiny request and response sizes. What pattern should the analyst suspect?',
    correct:
      'Command-and-control beaconing — the regular, low-volume callbacks characteristic of an implant checking in for instructions',
    wrong: [
      miss(
        'Normal web browsing, because HTTPS to an external site is routine',
        'Human browsing is bursty and varied; near-perfectly periodic, uniformly tiny callbacks to a single domain are a classic beacon signature, not organic browsing.',
        'People browse in irregular bursts. This is metronome-regular and tiny. What does that look like?',
      ),
      miss(
        'Data exfiltration, because data is leaving the network',
        'Bulk exfiltration shows large, often sustained transfers; the tiny, regular packets here fit a control channel checking in, not the high-volume movement of stolen data.',
        'Exfiltration is usually large transfers. These payloads are tiny and rhythmic.',
      ),
      miss(
        'A misconfigured NTP time sync that pings on a schedule',
        'NTP uses UDP/123 to known time servers, not periodic HTTPS to an arbitrary external domain; the protocol and destination do not match a time-sync explanation.',
        'Time sync uses a specific protocol and known servers. This is HTTPS to an odd domain.',
      ),
    ],
    lesson:
      'C2 beaconing shows up as regular, low-volume callbacks from a host to attacker infrastructure — the implant "phoning home" for instructions. Periodicity, small uniform payload sizes, and a single unusual destination are the tells. Detecting the behavior (an IOA) is far more durable than blocking any one domain.',
    source,
    generated: true,
  },
  {
    id: 7312012,
    chapter: 'Endpoint, Network, and Cloud Scope',
    title: 'Living-off-the-land binaries',
    prompt:
      'An attacker uses built-in Windows utilities like certutil and bitsadmin to download a payload rather than dropping their own tool. Why does this complicate detection?',
    correct:
      'These are legitimate signed system binaries (LOLBins), so blocking the executable would break normal operations; detection must rely on suspicious usage context, not the binary itself',
    wrong: [
      miss(
        'It does not complicate anything; just blocklist certutil and bitsadmin everywhere',
        'These binaries have legitimate administrative uses across the fleet, so a blanket block causes operational breakage — the same trap as removing PowerShell wholesale.',
        'These ship with Windows and admins rely on them. Blanket-blocking breaks production.',
      ),
      miss(
        'It complicates detection because the binaries are unsigned and evade trust checks',
        'The opposite is true: these are Microsoft-signed binaries, which is exactly why they sail past trust-based controls and why context-based detection is required.',
        'They are signed by Microsoft — that is the problem, not the absence of a signature.',
      ),
      miss(
        'It complicates detection only because antivirus cannot read Windows binaries',
        'AV can read these binaries fine; the difficulty is that their mere presence and execution are normal, so behavior and command-line context, not signature, must drive detection.',
        'AV reads them fine. The issue is that running them is normal, so what flags abuse?',
      ),
    ],
    lesson:
      'Living-off-the-land binaries (LOLBins) are legitimate, signed OS tools repurposed by attackers to blend in. You cannot simply block them without breaking administration, so detection shifts to suspicious usage context: unusual parent processes, odd command-line arguments, and the sequence of actions around the call.',
    source,
    generated: true,
  },
  {
    id: 7312013,
    chapter: 'Endpoint, Network, and Cloud Scope',
    title: 'Over-permissive security group',
    prompt:
      'A cloud security group allows inbound 0.0.0.0/0 on port 3389 (RDP) to a production server. What is the exposure and the right fix?',
    correct:
      'The server\'s remote-desktop port is reachable from the entire internet; restrict the source to a bastion, VPN, or specific admin ranges',
    wrong: [
      miss(
        'No exposure, because the server still requires a password to log in',
        'A password is the last line, not a network control; exposing RDP to the whole internet invites continuous brute-force and exploitation of any RDP vulnerability before auth.',
        'A password protects login, not the open port. Why leave the door reachable by everyone?',
      ),
      miss(
        'Change the RDP port to a non-standard number and leave it open to the world',
        'Port obfuscation is trivially defeated by scanning; the real issue is the source range 0.0.0.0/0, not the port number.',
        'Attackers scan every port. The fix is restricting the source, not hiding the port.',
      ),
      miss(
        'Add a deny rule for known malicious IPs while keeping the allow-all in place',
        'A blocklist of known-bad IPs cannot keep pace with the entire internet; default-deny with an explicit allow for trusted sources is the correct posture.',
        'You cannot blocklist the whole internet. Flip to allow-only-trusted instead.',
      ),
    ],
    lesson:
      'A security group rule allowing 0.0.0.0/0 to a management port (RDP/3389, SSH/22) exposes that service to the entire internet, where it faces constant automated attack. The fix is least-privilege networking: allow inbound only from a bastion host, VPN, or specific administrative IP ranges.',
    source,
    generated: true,
  },
  // ---------- Chapter 5: Vulnerability and Exposure Management ----------
  {
    id: 7312014,
    chapter: 'Vulnerability and Exposure Management',
    title: 'KEV beats raw CVSS',
    prompt:
      'Two open vulnerabilities: CVE-A has CVSS 9.8 but is not in CISA\'s KEV catalog and has near-zero EPSS; CVE-B has CVSS 7.5 but is listed in KEV. On an internet-facing host, which do you patch first and why?',
    correct:
      'CVE-B first — KEV listing means confirmed active exploitation in the wild, which outweighs CVE-A\'s higher theoretical severity',
    wrong: [
      miss(
        'CVE-A first, because a higher CVSS base score always means higher real-world risk',
        'CVSS measures theoretical severity, not whether anyone is exploiting it; a KEV-listed CVE is being attacked right now, so it jumps the queue despite its lower CVSS.',
        'CVSS is "how bad if exploited," not "is it being exploited." KEV answers the second.',
      ),
      miss(
        'Neither is urgent until both appear in KEV',
        'CVE-B is already in KEV, so it is urgent immediately; waiting for CVE-A to be added ignores confirmed active exploitation of CVE-B.',
        'One of them is already in KEV. That one is urgent now, not later.',
      ),
      miss(
        'CVE-A first, since EPSS is unreliable and should be ignored',
        'EPSS and KEV together signal real-world exploitation, which is exactly the data that should reorder the queue; CVE-B\'s confirmed KEV status makes it the priority.',
        'KEV is confirmed exploitation, not a guess. That signal wins over a high CVSS alone.',
      ),
    ],
    lesson:
      'CVSS scores theoretical severity, EPSS estimates exploitation likelihood, and CISA\'s KEV catalog lists vulnerabilities confirmed to be exploited in the wild. Risk-based prioritization patches KEV-listed and high-EPSS issues first — especially when internet-facing — even if their CVSS is lower than a severe-but-unexploited flaw.',
    source,
    generated: true,
  },
  {
    id: 7312015,
    chapter: 'Vulnerability and Exposure Management',
    title: 'What EPSS measures',
    prompt:
      'A manager asks what the EPSS score of a CVE actually represents. What is the correct one-line answer?',
    correct:
      'The probability that the vulnerability will be exploited in the wild within the next 30 days',
    wrong: [
      miss(
        'How much damage the vulnerability would cause if exploited',
        'That is closer to CVSS impact metrics; EPSS forecasts likelihood of exploitation over a near-term window, not the severity of the consequences.',
        'EPSS is about likelihood over time, not how bad the outcome would be.',
      ),
      miss(
        'Whether the vulnerability has a public proof-of-concept exploit available',
        'PoC availability is one input among many, but EPSS outputs a probability of near-term exploitation, not a yes/no on PoC existence.',
        'EPSS is a probability, not a checkbox for "does a PoC exist."',
      ),
      miss(
        'The number of systems in your environment affected by the vulnerability',
        'Asset counts come from your own inventory, not EPSS; EPSS is a global, environment-agnostic exploitation-likelihood model.',
        'EPSS knows nothing about your asset inventory. It estimates global exploitation odds.',
      ),
    ],
    lesson:
      'EPSS (Exploit Prediction Scoring System) outputs a probability, between 0 and 1, that a given vulnerability will be exploited in the wild within the next 30 days. It complements CVSS (severity) and KEV (confirmed exploitation) to drive forward-looking, risk-based patch prioritization.',
    source,
    generated: true,
  },
  {
    id: 7312016,
    chapter: 'Vulnerability and Exposure Management',
    title: 'Compensating control when patching is blocked',
    prompt:
      'A KEV-listed, internet-facing vulnerability cannot be patched for two weeks because the vendor fix breaks a critical integration. What is the most defensible interim action?',
    correct:
      'Apply compensating controls — restrict network exposure, add detection/virtual patching, and monitor closely — while the permanent patch is validated',
    wrong: [
      miss(
        'Accept the risk silently and wait the full two weeks for the validated patch',
        'A KEV-listed, internet-facing flaw is under active exploitation now; doing nothing for two weeks leaves a known-attacked door open with no mitigation and no documented acceptance.',
        'Active exploitation plus internet exposure means you cannot just wait. What reduces exposure today?',
      ),
      miss(
        'Apply the breaking patch immediately and let the integration fail',
        'Knocking out a critical integration is a self-inflicted outage; compensating controls reduce risk without trading one incident for another, while the fix is made safe.',
        'Breaking production to patch is its own outage. Reduce exposure without the breakage.',
      ),
      miss(
        'Remove the vulnerability from the scanner so it stops appearing in reports',
        'Hiding the finding is metric-gaming that leaves the real exposure live; the obligation is to mitigate the risk, not to clean up the dashboard.',
        'Suppressing the report does not close the hole. That is gaming the metric.',
      ),
    ],
    lesson:
      'When a high-risk vulnerability cannot be patched immediately, compensating controls buy time: tighten network access, deploy detection or virtual patching at a WAF/IPS, and increase monitoring. Pair this with a documented risk decision and a firm date for the validated permanent fix — never silent acceptance or hiding the finding.',
    source,
    generated: true,
  },
  // ---------- Chapter 6: Incident Response Lifecycle, Containment, and Recovery ----------
  {
    id: 7312017,
    chapter: 'Incident Response Lifecycle, Containment, and Recovery',
    title: 'NIST 800-61 phase ordering',
    prompt:
      'Per the NIST SP 800-61 incident response lifecycle, what are the four phases in order?',
    correct:
      'Preparation; Detection and Analysis; Containment, Eradication, and Recovery; Post-Incident Activity',
    wrong: [
      miss(
        'Detection; Containment; Eradication; Recovery — with no preparation phase',
        'Preparation is the foundational first phase in NIST 800-61 (and the only one done entirely before an incident); omitting it skips the readiness work the whole model depends on.',
        'NIST starts before the incident even happens. Which phase is that?',
      ),
      miss(
        'Identification; Containment; Eradication; Recovery; Lessons Learned (five phases)',
        'That is the SANS PICERL six-step model (which also begins with Preparation); NIST 800-61 groups these into four phases, so this answer names the wrong framework\'s structure.',
        'That is the SANS phrasing. NIST groups them into four named phases instead.',
      ),
      miss(
        'Recovery; Detection; Containment; Preparation — readiness comes last',
        'Preparation is first, not last, and recovery comes after containment and eradication; this ordering inverts the lifecycle and would have you recover before detecting anything.',
        'You cannot recover before you detect. And readiness is the very first phase, not the final one.',
      ),
    ],
    lesson:
      'NIST SP 800-61 defines four phases: Preparation; Detection and Analysis; Containment, Eradication, and Recovery; and Post-Incident Activity. The cycle is continuous — lessons from the final phase feed back into preparation. SANS\' PICERL (Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned) is the closely related six-step variant.',
    source,
    generated: true,
  },
  {
    id: 7312018,
    chapter: 'Incident Response Lifecycle, Containment, and Recovery',
    title: 'Short-term versus long-term containment',
    prompt:
      'During an active intrusion, the team isolates the compromised subnet immediately, then later rebuilds clean replacement systems before reconnecting. Which describes these two actions?',
    correct:
      'The immediate isolation is short-term containment; building clean replacements before reconnecting is long-term containment',
    wrong: [
      miss(
        'Both are eradication, since the threat is being removed',
        'Containment stops the spread and keeps the business running on a controlled footing; eradication is the later removal of the root cause and artifacts, a distinct phase.',
        'Eradication removes the foothold. Isolating and standing up clean replacements is still containing.',
      ),
      miss(
        'The isolation is recovery and the rebuild is containment',
        'Recovery is restoring validated systems to production after eradication; isolation comes first as short-term containment, so this reverses the lifecycle order.',
        'Recovery is the last step, after the threat is gone. Isolation is the very first reaction.',
      ),
      miss(
        'Both are short-term containment because they happen during the incident',
        'Timing alone does not define the tier: quick isolation is short-term, while building clean replacement systems for sustainable operation is the long-term containment step.',
        'One is the fast stopgap; the other is the durable rebuild. They are two different tiers.',
      ),
    ],
    lesson:
      'Containment has two tiers. Short-term containment stops the bleeding fast — isolating a host or subnet. Long-term containment puts the business on a sustainable footing during the incident, such as building clean replacement systems, while eradication and full recovery proceed. Both happen before the foothold is fully removed.',
    source,
    generated: true,
  },
  {
    id: 7312019,
    chapter: 'Incident Response Lifecycle, Containment, and Recovery',
    title: 'Order of volatility',
    prompt:
      'On a live compromised host you can collect both a memory capture and the contents of a disk-based log file. Following the order of volatility for evidence collection, which do you capture first?',
    correct:
      'The memory capture first — RAM is the most volatile and is lost on reboot or shutdown, while the disk log persists',
    wrong: [
      miss(
        'The disk log first, because files on disk are the official record',
        'Disk data is far more durable than RAM; collecting it first risks losing volatile memory artifacts (running processes, network sessions, injected code) that vanish on power loss.',
        'Order of volatility says grab the most perishable evidence first. Which evaporates on reboot?',
      ),
      miss(
        'Either order is fine as long as both are eventually collected',
        'Order matters precisely because volatile sources can be lost during the collection of durable ones; the order-of-volatility principle exists to sequence this correctly.',
        'The whole point of "order of volatility" is that sequence matters. Most perishable first.',
      ),
      miss(
        'Reboot the host first to get a clean baseline, then capture everything',
        'A reboot destroys all memory-resident evidence — the exact artifacts attackers rely on you losing; you never reboot before capturing volatile data.',
        'Rebooting wipes RAM, the most valuable volatile evidence. Never do that first.',
      ),
    ],
    lesson:
      'The order of volatility prioritizes collecting the most ephemeral evidence first. Memory (registers, cache, RAM with running processes and network connections) disappears on reboot, so it is captured before durable sources like disk files and logs. Capturing in the wrong order — or rebooting first — destroys irreplaceable forensic data.',
    source,
    generated: true,
  },
  {
    id: 7312020,
    chapter: 'Incident Response Lifecycle, Containment, and Recovery',
    title: 'Chain of custody',
    prompt:
      'Collected evidence may later be used in legal proceedings. What does maintaining "chain of custody" require?',
    correct:
      'A documented, unbroken record of who collected, handled, transferred, and stored each item, with times and integrity hashes, so its authenticity can be proven',
    wrong: [
      miss(
        'Encrypting all evidence so that no one outside the team can read it',
        'Encryption protects confidentiality but says nothing about provenance; chain of custody is about documenting handling so authenticity and integrity can be demonstrated, not about secrecy.',
        'Chain of custody proves where evidence has been, not that it is secret.',
      ),
      miss(
        'Keeping only the final analyzed report and discarding the raw evidence',
        'Discarding the original evidence destroys the very thing whose handling must be traceable; the raw artifacts and their integrity records are what custody preserves.',
        'You must preserve the original, not just your conclusions about it.',
      ),
      miss(
        'Having a single trusted analyst own the evidence informally from start to finish',
        'Informal sole ownership without documentation cannot prove the evidence was unaltered; custody requires a written, auditable handling trail regardless of who holds it.',
        'Trust is not proof. You need a written, verifiable handling trail.',
      ),
    ],
    lesson:
      'Chain of custody is the documented, unbroken trail showing exactly who collected, handled, transferred, and stored each piece of evidence, when, and with what integrity verification (e.g., cryptographic hashes). Without it, evidence authenticity can be challenged and the material may be inadmissible or worthless in proceedings.',
    source,
    generated: true,
  },
  // ---------- Chapter 7: Incident Communication and Command ----------
  {
    id: 7312021,
    chapter: 'Incident Communication and Command',
    title: 'Incident commander role',
    prompt:
      'A major incident has technical responders working hard but decisions are stalling because no one owns the overall response. What role resolves this?',
    correct:
      'An incident commander who owns coordination and decision rights, freeing technical responders to do the hands-on work',
    wrong: [
      miss(
        'The most senior engineer should also do all the technical work and decide everything',
        'Loading hands-on work and command onto one person guarantees that coordination drops the moment they go heads-down on a technical task; command must be a distinct role.',
        'If the decider is also typing commands, who is steering when they go heads-down?',
      ),
      miss(
        'A group vote among all responders before each decision',
        'Continuous voting stalls action during a time-critical incident; the commander\'s job is to decide under uncertainty and disagreement, not to seek consensus on every step.',
        'Voting on every move is the stall you are trying to fix. Someone must own the call.',
      ),
      miss(
        'Whoever opened the incident ticket automatically commands by default',
        'Ticket origination is administrative happenstance, not a leadership qualification; command should be an explicitly assigned role, not a side effect of who clicked first.',
        'Opening a ticket is not a command appointment. The role must be assigned deliberately.',
      ),
    ],
    lesson:
      'The incident commander owns the overall response — coordination, prioritization, communication, and decision rights — so technical responders can focus on remediation. Separating command from hands-on work prevents the classic failure where the only decision-maker disappears into a terminal and coordination collapses.',
    source,
    generated: true,
  },
  {
    id: 7312022,
    chapter: 'Incident Communication and Command',
    title: 'Need-to-know during a live incident',
    prompt:
      'Mid-incident, a well-meaning employee posts detailed findings, including the attacker\'s observed techniques, in a company-wide chat channel. Why is this a problem?',
    correct:
      'It risks tipping off an attacker who may have access, and spreads unverified information; incident details should follow need-to-know through designated channels',
    wrong: [
      miss(
        'It is fine; maximum transparency always improves incident response',
        'During an active intrusion the attacker may be watching internal channels, and broadcasting your findings can prompt them to change tactics, destroy evidence, or accelerate.',
        'The attacker might be reading that channel. What does broadcasting your hand do?',
      ),
      miss(
        'The only problem is that the message was not formatted professionally',
        'Formatting is irrelevant; the substantive risks are tipping the adversary and circulating unverified claims, which is why distribution should be controlled.',
        'This is about who can see it, not how it is written.',
      ),
      miss(
        'It is a problem only because it might violate a marketing approval process',
        'The issue is operational security and information accuracy during a live incident, not marketing sign-off; the concern would apply even with no external comms involved.',
        'Think operational security, not brand approvals. Who else can read internal chat?',
      ),
    ],
    lesson:
      'During a live incident, attackers may have visibility into internal communications, so detailed findings should flow on a need-to-know basis through designated, controlled channels. Broad internal broadcasts risk tipping off the adversary and spreading unverified information that later has to be retracted.',
    source,
    generated: true,
  },
  {
    id: 7312023,
    chapter: 'Incident Communication and Command',
    title: 'Distinguishing confirmed facts from assumptions',
    prompt:
      'In a written incident update, an analyst writes "the attacker exfiltrated the customer database" when telemetry only shows large outbound transfers from a host that can reach that database. What should the update say instead?',
    correct:
      'State the confirmed observation (large outbound transfers from a host with database access) and label exfiltration of the database as a hypothesis under investigation',
    wrong: [
      miss(
        'Keep the original wording because it conveys urgency and gets attention',
        'Asserting unconfirmed exfiltration as fact drives decisions like customer notification that may be wrong and must be retracted, destroying credibility precisely when it is needed.',
        'Stating a guess as fact triggers real decisions. What happens when it turns out wrong?',
      ),
      miss(
        'Remove the sentence entirely and report nothing until forensics is complete',
        'Withholding a material observation leaves leadership blind; the fix is to report the confirmed signal with appropriate uncertainty, not to go silent.',
        'Silence is not the fix. Report what you know with the right caveats.',
      ),
      miss(
        'Say "we are not sure of anything yet" without listing what is observed',
        'Blanket uncertainty is as unhelpful as false certainty; good updates separate the specific confirmed facts from the specific open questions.',
        'Vague "we don\'t know" hides the real signal. Name the confirmed fact and the open question.',
      ),
    ],
    lesson:
      'Good incident communication is bounded by evidence: state what is confirmed, label what is hypothesized, and name the open questions. Reporting an inference ("data was stolen") as established fact triggers downstream decisions that may be wrong and erodes trust. Bounded uncertainty is the professional posture.',
    source,
    generated: true,
  },
  // ---------- Chapter 8: Post-Incident Learning, Metrics, and Disclosure ----------
  {
    id: 7312024,
    chapter: 'Post-Incident Learning, Metrics, and Disclosure',
    title: 'SEC Item 1.05 disclosure clock',
    prompt:
      'A U.S. public company confirms on Day 1 of investigation that an intrusion occurred, and on Day 10 determines the incident is material. Under SEC Form 8-K Item 1.05, when does the four-business-day disclosure clock start?',
    correct:
      'On Day 10 — the clock runs from the determination that the incident is material, not from discovery of the incident',
    wrong: [
      miss(
        'On Day 1, because disclosure is required within four days of discovering any intrusion',
        'Item 1.05 ties the deadline to the materiality determination, not to discovery; many incidents are never material, so a discovery-based clock would misstate the rule.',
        'The trigger is the materiality decision, not first discovery. Which day was that?',
      ),
      miss(
        'There is no deadline because cybersecurity incidents are voluntary to disclose',
        'Item 1.05 makes disclosure of material cybersecurity incidents mandatory for SEC reporting companies, on a four-business-day timeline from the materiality determination.',
        'Material-incident disclosure is mandatory under this rule, not optional.',
      ),
      miss(
        'On the day forensic investigation is fully complete, whenever that is',
        'The rule does not wait for forensic completion; once materiality is determined the four-business-day clock runs, with later detail provided by amendment if needed.',
        'You cannot wait for forensics to finish. The clock starts at the materiality call.',
      ),
    ],
    lesson:
      'SEC Form 8-K Item 1.05 (effective late 2023) requires public companies to disclose a cybersecurity incident determined to be material within four business days of that materiality determination — not within four days of discovery. The determination must itself be made without unreasonable delay, and details can be supplemented by amendment.',
    source,
    generated: true,
  },
  {
    id: 7312025,
    chapter: 'Post-Incident Learning, Metrics, and Disclosure',
    title: 'Blameless post-incident review purpose',
    prompt:
      'After an incident, leadership wants the post-incident review to name and discipline whoever made the mistake. Why do mature security programs run blameless reviews instead?',
    correct:
      'Blame drives people to hide facts, so a blameless review surfaces honest root causes and produces systemic fixes that prevent recurrence',
    wrong: [
      miss(
        'Because individuals are never responsible for anything in security',
        'Blameless does not mean no accountability; it means the goal is honest learning and systemic improvement rather than punishment, which is undermined when people fear blame.',
        'Blameless is about honest learning, not pretending no one ever errs.',
      ),
      miss(
        'Because reviews are a formality with no real effect on future incidents',
        'A well-run review feeds concrete changes back into preparation and detection; treating it as theater wastes the most valuable output of the whole lifecycle.',
        'The review is supposed to change preparation. It is not a checkbox.',
      ),
      miss(
        'Because documenting an incident at all creates legal liability and should be avoided',
        'Skipping documentation forfeits the lessons and can itself be a compliance failure; the answer is honest, blameless documentation, not avoidance.',
        'Avoiding documentation loses the lessons and can break compliance. Document, blamelessly.',
      ),
    ],
    lesson:
      'A blameless post-incident review focuses on what in the system allowed the incident, not on punishing an individual. Fear of blame makes people conceal the details you most need; psychological safety surfaces honest root causes, which become systemic fixes that feed back into the preparation phase and prevent recurrence.',
    source,
    generated: true,
  },
])
