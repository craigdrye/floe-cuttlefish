import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]
const source = 'Floe cybersecOpsJargon 103-pass'

export const cybersecOpsJargonR2Questions: Question[] = makeQuestionBank('Career Skills', [
  // ===== Chapter 1: Alerts, Signals, and Triage =====
  { id: 7617000, chapter: 'Alerts, Signals, and Triage', title: 'Which layer correlates across domains',
    prompt: 'A vendor pitches a product that "stitches endpoint, email, identity, and cloud telemetry into one correlated investigation." Of SIEM, EDR, XDR, SOAR, and MDR, which category is being described?',
    correct: 'XDR (Extended Detection and Response): it natively correlates telemetry across multiple security domains into a single investigation',
    wrong: [
      miss('EDR, because it monitors process and host behavior in detail', 'EDR is endpoint-only by definition; it watches a single host\'s processes and files, not email, identity, and cloud together.', 'EDR is the "E for endpoint" layer; the pitch spans many domains, so look for the cross-domain product.'),
      miss('SOAR, because it automates the response across all those tools', 'SOAR orchestrates and automates playbooks across tools; it executes actions, but it is not primarily the cross-domain detection/correlation layer.', 'SOAR is about automating the response workflow, not natively correlating raw telemetry into one investigation.'),
      miss('MDR, because a managed service watches everything for you', 'MDR is a service delivery model (humans run detection for you); it describes who operates the tooling, not the technology that does cross-domain correlation.', 'MDR answers "who runs it" (a managed team), not "what technology correlates the data."'),
    ],
    lesson: 'SIEM aggregates and correlates logs you feed it; EDR is endpoint-only detection and response; XDR natively correlates across endpoint, identity, email, network, and cloud; SOAR automates response playbooks; MDR is a managed service (people running detection for you). Match the description to the layer, not the buzzword.', source, generated: true },

  { id: 7617001, chapter: 'Alerts, Signals, and Triage', title: 'The miss nobody saw',
    prompt: 'A red-team operator quietly exfiltrated data for three weeks. No detection ever fired on the activity, and the SOC only learned of it from the post-exercise report. In detection terms, what did the system produce, and why does it matter most?',
    correct: 'A false negative: real malicious activity that no alert flagged, which is the most dangerous error because it leaves the SOC blind',
    wrong: [
      miss('A false positive, because the alert that should have fired was wrong', 'A false positive is a benign event wrongly flagged as malicious. Here nothing fired at all, so there was no alert to be "wrong" — the failure is a missed detection.', 'A false positive is noise that did fire; a missed real attack that never fired is the opposite error.'),
      miss('A true negative, because the system correctly stayed quiet', 'A true negative is silence on genuinely benign activity. Here the activity was malicious, so silence was the wrong outcome, not a correct one.', 'Silence is only "true" when the activity was actually benign; this activity was real malice.'),
      miss('Alert fatigue, because the analysts ignored the signal', 'Alert fatigue is analysts tuning out a flood of alerts. The problem here is that no signal existed at all, not that one was ignored.', 'Fatigue means too many alerts to act on; this case had zero alerts on the real activity.'),
    ],
    lesson: 'A false negative is a real threat the system failed to detect. It is the most costly error class because, unlike a false positive, nothing tells you to look. Detection engineering exists largely to shrink false negatives without drowning analysts in false positives.', source, generated: true },

  { id: 7617002, chapter: 'Alerts, Signals, and Triage', title: 'Severity high, confidence low',
    prompt: 'A detection fires that, if true, means domain-admin compromise (catastrophic impact), but the analyst judges only a 20% chance it is real. How should the triage note record this, and what does it imply for the queue?',
    correct: 'Record severity (potential impact) as high and confidence (likelihood it is real) as low; high severity still warrants prompt investigation because the downside is catastrophic',
    wrong: [
      miss('Record it as low priority overall, since confidence is only 20%', 'Confidence alone does not set priority. A low-confidence but catastrophic-impact alert still merits fast investigation precisely because being wrong is expensive.', 'Priority blends both axes; a 20% chance of a catastrophe is not something to bury at the bottom of the queue.'),
      miss('Record severity as low because the analyst is unsure it is real', 'Severity measures potential impact if true, not the analyst\'s certainty. Conflating the two collapses two independent dimensions into one.', 'Severity asks "how bad if real"; confidence asks "how likely is it real." Keep them separate.'),
      miss('Record confidence as high because the impact would be so severe', 'Severe consequences do not make an event more likely. Reading high severity as high confidence is a classic triage error that distorts the queue.', 'A scary outcome is not evidence the event occurred; do not let impact inflate your confidence.'),
    ],
    lesson: 'Severity (impact if true) and confidence (likelihood it is true) are independent axes. Priority comes from combining them: a high-severity, low-confidence alert still earns quick eyes because the cost of a miss is large. Never let one axis silently set the other.', source, generated: true },

  { id: 7617003, chapter: 'Alerts, Signals, and Triage', title: 'What enrichment is for',
    prompt: 'An alert arrives as just a source IP and a username. The analyst automatically pulls the asset owner, the IP\'s geolocation and threat-intel reputation, and the account\'s recent login history before deciding anything. What is this step called, and what is its purpose?',
    correct: 'Enrichment: adding context to a raw alert so the analyst can judge scope, confidence, and next step faster and more accurately',
    wrong: [
      miss('Containment: it is the first action taken to stop the attacker', 'Containment is taking action to limit harm (isolate, block, revoke). Gathering context to understand the alert happens before any containment decision.', 'Pulling context is still investigation; containment is the action you take after you understand the alert.'),
      miss('Correlation: it links this alert to other alerts in the SIEM', 'Correlation joins multiple alerts or events into one picture. Enrichment instead adds external/asset context to a single alert; the two are related but distinct.', 'Correlation stitches alerts together; enrichment hangs context onto one alert.'),
      miss('Triage closure: it is how you mark the alert resolved', 'Closure is the verdict at the end of triage. Enrichment is the context-gathering that informs that verdict, not the verdict itself.', 'Enrichment feeds the decision; it is not the decision to close.'),
    ],
    lesson: 'Enrichment attaches context (asset owner, geo, reputation, history) to a bare alert so the analyst can quickly state signal, scope, confidence, and next step. Good enrichment is the difference between a 30-second informed verdict and a 30-minute guess.', source, generated: true },

  { id: 7617004, chapter: 'Alerts, Signals, and Triage', title: 'Order by impact, not arrival',
    prompt: 'Four alerts sit in the queue: (1) malware confirmed on the CFO\'s laptop, (2) a phishing report on a decommissioned test mailbox, (3) a known vulnerability scanner running its scheduled scan, (4) a policy violation on a sandbox host. What should drive the order you work them?',
    correct: 'Business impact and credibility: the confirmed malware on a high-value executive endpoint goes first, because it is both real and consequential',
    wrong: [
      miss('Arrival order, so the oldest alert is always worked first', 'FIFO ignores risk. A scheduled scanner aged for an hour should never outrank confirmed malware on the CFO\'s machine.', 'A queue is not a checkout line; rank by risk, not by timestamp.'),
      miss('Severity rating from the tool, taking the highest number first', 'Tool severity is a starting input, not the final ranking. A high-severity rating on a decommissioned test mailbox is far less urgent than the impact-weighted view.', 'Vendor severity ignores your environment; a "critical" on a dead test box is not critical to you.'),
      miss('Ease of resolution, clearing the quick ones to shrink the queue', 'Optimizing for a shorter queue lets a high-impact incident wait while you clear trivia. Throughput is not the goal; risk reduction is.', 'Clearing easy tickets first feels productive but can leave the real fire burning.'),
    ],
    lesson: 'Triage ranks by business impact and credibility, not arrival time, tool severity, or how quick something is to close. Map each alert to the asset\'s importance and the evidence that it is real, then work the dangerous-and-credible ones first.', source, generated: true },

  { id: 7617005, chapter: 'Alerts, Signals, and Triage', title: 'A noisy class is not a safe class',
    prompt: 'A detection rule for "PowerShell spawning from Office" fires dozens of times a day and is almost always benign macros from the finance team. An analyst proposes auto-closing every hit. What is the flaw in that reasoning?',
    correct: 'A frequently benign alert class can still occasionally be a real attack; auto-closing all of them guarantees the rare true positive is missed',
    wrong: [
      miss('There is no flaw; if it is benign 99% of the time it is safe to ignore', 'The 1% is exactly the attack the rule exists to catch. "Usually benign" is not "always benign," and adversaries deliberately hide inside noisy, normal-looking activity.', 'A class being mostly benign is not a guarantee; the rare hit is the whole point of the rule.'),
      miss('The flaw is that the rule should be deleted entirely instead', 'Deleting the rule removes coverage for a real attacker technique (Office spawning PowerShell is a common initial-execution pattern). The fix is tuning, not blindness.', 'Auto-close and delete both blind you; the answer is to tighten the rule, not abandon it.'),
      miss('The flaw is that finance macros should simply be banned outright', 'Banning legitimate business macros is an over-correction that breaks workflows and does not address detection quality. The triage error is treating a noisy class as automatically safe.', 'Breaking the business to silence an alert is the wrong lever; tune the detection instead.'),
    ],
    lesson: 'Treating a noisy alert class as automatically benign is a triage trap: attackers exploit exactly the channels analysts have learned to ignore. The right move is to tune (add context like signed vs unsigned macros, parent-child anomalies) so real hits surface, not to auto-close or delete.', source, generated: true },

  { id: 7617006, chapter: 'Alerts, Signals, and Triage', title: 'Detection versus prevention',
    prompt: 'A manager says, "We deployed EDR, so we are protected." An analyst pushes back. Which framing is the most accurate correction?',
    correct: 'EDR is primarily detection and response: it surfaces and helps you act on malicious behavior, but it does not by itself stop every attack from succeeding',
    wrong: [
      miss('EDR is a pure prevention tool, so the manager is essentially right', 'EDR\'s core value is visibility and response to activity that has already started. Treating it as a guaranteed preventive wall invites complacency about gaps.', 'The "DR" in EDR is detection and response; protection is only part of the story.'),
      miss('EDR and a firewall are interchangeable, so coverage is complete', 'A firewall filters network traffic at the perimeter; EDR watches endpoint behavior. They cover different layers and neither makes the other redundant.', 'Different layers solve different problems; one does not substitute for the other.'),
      miss('No tool detects anything, so "protected" just means logging exists', 'EDR does far more than log: it detects suspicious behavior and enables response. The error is overclaiming prevention, not denying detection.', 'EDR genuinely detects; the correction is that detection is not the same as prevention.'),
    ],
    lesson: 'Prevention blocks an attack before it succeeds; detection tells you it is happening so you can respond. EDR leans heavily toward detection and response. Conflating "we have a detection tool" with "we are protected" breeds false confidence and under-investment in containment and recovery.', source, generated: true },

  { id: 7617007, chapter: 'Alerts, Signals, and Triage', title: 'What SOAR actually adds',
    prompt: 'A SOC drowning in repetitive alerts wants to automatically enrich every alert, open a ticket, and quarantine the host when criteria are met, with a human approving the quarantine. Which category of tool is built for orchestrating that multi-tool workflow?',
    correct: 'SOAR (Security Orchestration, Automation, and Response): it runs playbooks that chain actions across tools, with optional human approval gates',
    wrong: [
      miss('SIEM, because it already collects the logs the alerts come from', 'A SIEM ingests, correlates, and alerts on logs, but it is not designed to orchestrate cross-tool response playbooks with approval gates. That is SOAR\'s job.', 'SIEM raises the alert; SOAR is what automates the multi-step response to it.'),
      miss('EDR, because it can quarantine the host on its own', 'EDR can isolate a host, but the requirement here is orchestrating enrichment, ticketing, and quarantine across several tools with a human gate — playbook automation, which is SOAR.', 'EDR does the quarantine step; SOAR coordinates the whole multi-tool playbook around it.'),
      miss('XDR, because it correlates the telemetry behind the alert', 'XDR\'s strength is cross-domain detection and correlation. Automating a chained response workflow with approval steps is the orchestration role that defines SOAR.', 'XDR is about correlating to detect; SOAR is about automating what you do next.'),
    ],
    lesson: 'SOAR orchestrates and automates response: it runs playbooks that call multiple tools (enrich, ticket, isolate) and can pause for human approval on risky steps. It reduces toil on repetitive alerts. SIEM/XDR detect; EDR acts on one endpoint; SOAR ties the workflow together.', source, generated: true },

  // ===== Chapter 2: Threat Vocabulary and Frameworks =====
  { id: 7617008, chapter: 'Threat Vocabulary and Frameworks', title: 'Top two tiers of the Pyramid of Pain',
    prompt: 'On David Bianco\'s Pyramid of Pain, which level, when you detect and disrupt it, causes an adversary the most pain because it forces them to fundamentally rethink how they operate?',
    correct: 'TTPs (Tactics, Techniques, and Procedures): they describe how an adversary operates, and changing them is the hardest and most costly thing for an attacker to do',
    wrong: [
      miss('Hash values, because a unique file hash precisely identifies the malware', 'Hashes sit at the very bottom of the pyramid: an attacker defeats hash-based detection by recompiling or repacking, changing the hash in seconds. Precise does not mean painful.', 'A hash is trivial to change; it is the bottom of the pyramid, the least painful to block.'),
      miss('IP addresses, because cutting off their infrastructure stops the attack', 'IPs are near the bottom: adversaries rotate IPs and infrastructure cheaply, so blocking one inflicts only momentary inconvenience.', 'Attackers swap IPs constantly; blocking one is "annoying" at most, not painful.'),
      miss('Domain names, because killing the domain breaks their command channel', 'Domains are slightly costlier than IPs but still readily replaced. They sit well below tools and TTPs in how much pain disruption causes.', 'Domains are mid-low on the pyramid; cheap-ish to replace, far from the most painful tier.'),
    ],
    lesson: 'The Pyramid of Pain (Bianco, 2013), bottom to top: hash values, IP addresses, domain names, network/host artifacts, tools, and TTPs. Lower indicators are trivial for attackers to change; detecting TTPs forces them to relearn their craft, which is why behavior-based detection beats blocklists.', source, generated: true },

  { id: 7617009, chapter: 'Threat Vocabulary and Frameworks', title: 'Tactic versus technique in ATT&CK',
    prompt: 'In MITRE ATT&CK, an analyst maps an observed "OS Credential Dumping (T1003)" to the goal it serves. What is the relationship between that technique and the tactic "Credential Access (TA0006)"?',
    correct: 'The tactic is the adversary\'s goal (the "why," e.g. Credential Access); the technique is a specific way to achieve it (the "how," e.g. OS Credential Dumping)',
    wrong: [
      miss('They are the same thing labeled with two different ID prefixes', 'TA and T IDs are not redundant labels for one concept. A tactic is a goal column; a technique is one of many methods listed under it.', 'TA = goal, T = method; they are different layers, not synonyms.'),
      miss('The technique is the goal and the tactic is one way to reach it', 'This inverts the model. The tactic is the high-level objective; the technique is the concrete method beneath it.', 'You have it backwards: the broad goal is the tactic, the specific method is the technique.'),
      miss('The tactic is a software tool and the technique is the attacker group', 'Tactics and techniques describe goals and methods, not tools or named groups. Tools and groups are tracked separately (Software, Groups) in ATT&CK.', 'Neither term names a tool or a threat group; both describe attacker behavior.'),
    ],
    lesson: 'ATT&CK tactics (TA####) are the adversary\'s goals — Initial Access, Persistence, Credential Access, Lateral Movement, Exfiltration, etc. Techniques (T####) are specific ways to accomplish a tactic. Mapping an observation to both the why and the how is what makes ATT&CK actionable for detection.', source, generated: true },

  { id: 7617010, chapter: 'Threat Vocabulary and Frameworks', title: 'CVSS 4.0 score nomenclature',
    prompt: 'A CVSS v4.0 report labels a finding "CVSS-BTE 8.1." Compared with a plain "CVSS-B 8.1," what does the BTE nomenclature tell you was included in the score?',
    correct: 'CVSS-BTE means Base plus Threat plus Environmental metrics were applied; CVSS-B is the Base score only, with no threat or environmental tailoring',
    wrong: [
      miss('BTE means the score is from CVSS version 4.0 while B means version 3.1', 'The letters denote which metric groups were used, not the version. Both labels are CVSS 4.0 here; B vs BTE is about scope, not a version number.', 'B/T/E are metric-group flags, not version markers; both are still v4.0.'),
      miss('BTE means the vulnerability is "Beyond Typical Exploitation," a higher tier', 'There is no such tier. BTE is a defined nomenclature standing for Base+Threat+Environmental, the metric groups contributing to the number.', 'The letters are literally the metric groups (Base, Threat, Environmental), not a severity tier.'),
      miss('BTE and B are identical; the suffix is cosmetic and changes nothing', 'The suffix is meaningful: it states which metric groups were considered, which materially affects how the number should be interpreted and compared.', 'The suffix is load-bearing — it tells you the score has been tailored beyond Base.'),
    ],
    lesson: 'CVSS 4.0 defines four score types: CVSS-B (Base only), CVSS-BT (Base+Threat), CVSS-BE (Base+Environmental), and CVSS-BTE (all three). The nomenclature must accompany any communicated score so consumers know whether threat intelligence and environment-specific tailoring were applied. A bare Base score is not your actual risk.', source, generated: true },

  { id: 7617011, chapter: 'Threat Vocabulary and Frameworks', title: 'CVSS 4.0 severity band',
    prompt: 'A scanner reports a vulnerability with a CVSS v4.0 base score of 6.4. Which qualitative severity band does that fall into?',
    correct: 'Medium (the 4.0-6.9 band)',
    wrong: [
      miss('High, because anything above 6 is treated as High', 'The High band starts at 7.0, not 6.0. A 6.4 sits inside Medium (4.0-6.9); rounding intuition does not match the defined ranges.', 'High begins at 7.0; 6.4 is still in the 4.0-6.9 Medium band.'),
      miss('Low, because 6.4 is only just above the midpoint', 'Low is 0.1-3.9. A 6.4 is well above that ceiling and lands squarely in Medium.', 'Low tops out at 3.9; 6.4 is far past it.'),
      miss('Critical, because the score is more than half of 10', 'Critical is reserved for 9.0-10.0. A 6.4 is nowhere near that band.', 'Critical is 9.0+ only; 6.4 does not qualify.'),
    ],
    lesson: 'CVSS qualitative bands (used in 3.x and 4.0): None 0.0, Low 0.1-3.9, Medium 4.0-6.9, High 7.0-8.9, Critical 9.0-10.0. A 6.4 is Medium. Remember these are severity of the flaw, not your environment\'s risk, which Environmental metrics adjust.', source, generated: true },

  { id: 7617012, chapter: 'Threat Vocabulary and Frameworks', title: 'CVE versus CWE versus CPE',
    prompt: 'A report references "CVE-2024-3094," "CWE-506," and a "CPE" string for the affected product. What does each identifier denote?',
    correct: 'CVE names a specific disclosed vulnerability instance; CWE names the underlying weakness category; CPE is a structured name for the affected product/platform',
    wrong: [
      miss('All three are interchangeable IDs for the same vulnerability record', 'They operate at different levels: CVE is one concrete flaw, CWE is the class of weakness it belongs to, and CPE identifies the product. Collapsing them loses essential meaning.', 'These three describe different things — a specific flaw, a weakness class, and a product name.'),
      miss('CVE is the weakness class, CWE is the specific flaw, CPE is the patch', 'This swaps CVE and CWE and invents a meaning for CPE. CVE is the specific flaw; CWE is the class; CPE is the product naming scheme, not a patch.', 'You have CVE and CWE reversed, and CPE is not a patch identifier.'),
      miss('CVE is the severity score, CWE is the vendor, CPE is the exploit code', 'None of these is correct: severity is CVSS, the vendor is part of the CPE string, and exploit code is not what any of these IDs are. The three are flaw, weakness class, and product name.', 'Severity is CVSS, not CVE; reset to flaw / weakness-class / product-name.'),
    ],
    lesson: 'CVE-YYYY-NNNN identifies one specific publicly disclosed vulnerability. CWE-NNN identifies the weakness type (e.g., embedded malicious code, OS command injection) that the CVE is an instance of. CPE is a standardized naming string for products/platforms so tools can match advisories to assets.', source, generated: true },

  { id: 7617013, chapter: 'Threat Vocabulary and Frameworks', title: 'Why a base score is not your risk',
    prompt: 'A CVE has a CVSS base score of 9.8 (Critical), but in your environment the affected service is internal-only, behind strong network controls, and not reachable from untrusted networks. How should the base score inform your prioritization?',
    correct: 'The base score is a starting point measuring the flaw in the abstract; your actual risk depends on exposure and controls, so environmental context can justifiably lower its priority',
    wrong: [
      miss('A 9.8 is Critical, so it must always be patched before anything lower', 'Blindly ranking by base score ignores exploitability in your context. A guarded, unreachable service may rank below a directly exposed Medium. Base score is input, not verdict.', 'Base score rates the flaw, not your exposure; context can change the order.'),
      miss('Since it is internal-only, the vulnerability can simply be ignored entirely', 'Internal-only is not zero-risk; insiders and lateral movement exist. Context lowers priority but does not erase the need to remediate.', 'Lower priority is not "ignore" — internal assets still get compromised via lateral movement.'),
      miss('The base score already accounts for your network controls, so trust it as-is', 'Base metrics deliberately exclude your specific environment. Tailoring to your controls is the job of CVSS Environmental metrics, not the base score.', 'Base metrics ignore your environment by design; that is what Environmental metrics are for.'),
    ],
    lesson: 'CVSS base score measures intrinsic characteristics of a flaw, independent of any environment. Real risk = base score adjusted for exposure, exploit maturity (Threat metrics), and your controls (Environmental metrics). A guarded internal Critical can rightly rank below an internet-facing High.', source, generated: true },

  { id: 7617014, chapter: 'Threat Vocabulary and Frameworks', title: 'Exploit maturity in the Threat group',
    prompt: 'Two vulnerabilities both score CVSS-B 8.6. For one, there is a working, actively-used exploit in the wild; for the other, only a theoretical proof-of-concept exists. Within CVSS 4.0, which metric group captures this difference and how should it shift priority?',
    correct: 'The Threat metric group (Exploit Maturity); the in-the-wild "Attacked" status should raise priority of that vulnerability over the proof-of-concept one',
    wrong: [
      miss('The Base metric group, because exploitability is part of the base score', 'Base captures intrinsic exploit difficulty (attack vector, complexity, requirements), not whether an exploit currently exists in the wild. That real-world status lives in the Threat group.', 'Base describes the flaw in the abstract; current real-world exploitation is Threat-group territory.'),
      miss('The Environmental group, because it reflects what is happening to you', 'Environmental tailors for your assets and controls. Whether a working exploit exists publicly is a Threat-group concern (Exploit Maturity), independent of your environment.', 'Environmental is about your assets/controls; exploit availability is a Threat metric.'),
      miss('Neither; both score 8.6, so they carry identical priority by definition', 'Equal base scores do not mean equal priority. The Threat group exists precisely to differentiate by exploit maturity, pushing the actively-exploited one up.', 'Identical Base scores can still diverge once Threat metrics (exploit maturity) are applied.'),
    ],
    lesson: 'CVSS 4.0 renamed Temporal to the Threat metric group; its Exploit Maturity metric (values include Attacked, Proof-of-Concept, Unreported, Not Defined) reflects real-world exploit availability. Two flaws with equal Base scores should be prioritized differently when one is actively exploited in the wild.', source, generated: true },

  { id: 7617015, chapter: 'Threat Vocabulary and Frameworks', title: 'Why a blocked hash barely hurts',
    prompt: 'A SOC proudly blocks the SHA-256 hash of a malware sample seen last week. A senior analyst notes this will likely inconvenience a capable adversary only briefly. Why?',
    correct: 'Recompiling or repacking the malware produces a new hash, so hash-based blocking is trivially defeated; durable detection targets behavior (TTPs), not file hashes',
    wrong: [
      miss('Because hashes can collide, so the block may match innocent files', 'Modern cryptographic-hash collisions are not the practical issue here. The real weakness is that the attacker simply changes one byte to get a brand-new, unblocked hash.', 'The problem is not collisions; it is that attackers re-hash their malware in seconds.'),
      miss('Because the SOC blocked the wrong hash algorithm and should use MD5', 'Switching algorithms does not help; any per-file hash changes the moment the file changes. The limitation is fundamental to hash-based blocking, not algorithm choice.', 'No hash algorithm survives a recompile; the issue is the indicator type, not the algorithm.'),
      miss('Because blocking hashes is useless and provides no value at all', 'Hash blocking has real value against commodity/known samples and as a tripwire. The point is it is low on the Pyramid of Pain, not worthless.', 'Hash blocking is cheap and worth doing — just understand it is the least painful tier for a capable foe.'),
    ],
    lesson: 'A file hash is the most brittle indicator: any change to the file yields a new hash, so a skilled adversary regenerates it at near-zero cost. Hash blocklists still catch commodity reuse, but durable detection must climb the Pyramid of Pain toward tools and TTPs.', source, generated: true },

  { id: 7617016, chapter: 'Threat Vocabulary and Frameworks', title: 'Map exfiltration to a tactic',
    prompt: 'Telemetry shows an attacker compressing internal documents and steadily uploading them to an external cloud service over an encrypted channel. In MITRE ATT&CK terms, which tactic does the upload step best represent?',
    correct: 'Exfiltration: the adversary is moving stolen data out of the environment to a location they control',
    wrong: [
      miss('Collection, because they are gathering the documents to steal', 'Collection is the prior step of staging/gathering target data inside the environment. The actual outbound transfer to an external destination is Exfiltration.', 'Gathering the files is Collection; sending them out is Exfiltration — this is the send step.'),
      miss('Command and Control, because the data leaves over a network channel', 'C2 is the attacker communicating with and directing compromised hosts. Bulk data leaving for theft is Exfiltration, even if it shares the channel.', 'C2 is the attacker steering the host; pushing the loot out the door is Exfiltration.'),
      miss('Impact, because losing the data harms the business', 'Impact tactics manipulate, destroy, or deny availability (e.g., ransomware, wiping). Theft of a copy is Exfiltration; the data is taken, not destroyed.', 'Impact is about destruction/denial; copying data out is Exfiltration.'),
    ],
    lesson: 'Collection stages target data inside the environment; Exfiltration moves it out to attacker-controlled infrastructure; Command and Control is the steering channel; Impact destroys or denies. Bulk encrypted uploads of internal documents map cleanly to Exfiltration.', source, generated: true },

  // ===== Chapter 3: Identity and Access Language =====
  { id: 7617017, chapter: 'Identity and Access Language', title: 'Golden ticket versus silver ticket',
    prompt: 'An attacker who obtained the KRBTGT account hash forges a Kerberos ticket granting access to any service in the domain. A second scenario forges a ticket for one specific service using that service account\'s hash. Which is the golden ticket and which is the silver?',
    correct: 'The first is a golden ticket (forged TGT signed with the KRBTGT hash, granting domain-wide access); the second is a silver ticket (forged service ticket for one service using that service\'s hash)',
    wrong: [
      miss('The first is silver (one service) and the second is golden (domain-wide)', 'This inverts both. The KRBTGT-based, domain-wide forgery is golden; the single-service forgery using a service hash is silver.', 'Domain-wide via KRBTGT = golden; single-service via the service hash = silver. You have them swapped.'),
      miss('Both are golden tickets because both forge Kerberos tickets', 'They differ by key and scope: golden uses the KRBTGT hash for a TGT (domain-wide); silver uses a service account hash for a single service ticket. Forging Kerberos tickets is not enough to make both golden.', 'The key used (KRBTGT vs service account) and the scope distinguish golden from silver.'),
      miss('Both are silver tickets because each targets credentials of an account', 'Golden specifically abuses the KRBTGT secret to mint a TGT good across the whole domain — far broader than a silver ticket\'s single service.', 'A domain-wide forgery from KRBTGT is golden, not silver; scope is the giveaway.'),
    ],
    lesson: 'A golden ticket forges a TGT signed with the KRBTGT account hash, granting access to any service domain-wide; recovery requires rotating the KRBTGT password twice. A silver ticket forges a service ticket (TGS) using a single service account\'s hash, limited to that one service on that host, and is stealthier because it never contacts the DC.', source, generated: true },

  { id: 7617018, chapter: 'Identity and Access Language', title: 'Pass-the-cookie defeats MFA',
    prompt: 'An attacker steals a user\'s authenticated session cookie from their browser and replays it. The mailbox opens with no MFA prompt and no failed logins. Why did MFA not help, and what is the correct containment?',
    correct: 'The stolen session was already past authentication, so replaying the cookie skips the login (and MFA) entirely; containment requires revoking/invalidating the session, not just resetting the password',
    wrong: [
      miss('MFA failed because the second factor was weak; enabling stronger MFA fixes it', 'No second factor was ever challenged — the attacker reused a post-authentication session. Strengthening MFA does nothing against replay of an already-valid session token.', 'MFA was never prompted; a stronger factor cannot help when the login step is skipped entirely.'),
      miss('Resetting the password alone closes the hole because it invalidates access', 'A password reset does not necessarily kill existing sessions/tokens. The live session can remain valid until explicitly revoked.', 'A password change may leave the stolen session alive; you must revoke the session itself.'),
      miss('It is benign because there were no failed logins to indicate an attack', 'Absence of failed logins is the hallmark of session/token theft, not evidence of safety. The lack of a login event is itself suspicious here.', 'No failed logins is a symptom of token theft, not a sign that nothing happened.'),
    ],
    lesson: 'Pass-the-cookie (session/token theft) replays an already-authenticated session, bypassing the login and therefore MFA, and producing no failed-login noise. The fix is session revocation plus credential rotation and forcing re-authentication, not merely a password reset or stronger MFA.', source, generated: true },

  { id: 7617019, chapter: 'Identity and Access Language', title: 'MFA fatigue / push bombing',
    prompt: 'A user with a valid (phished) password is hit with dozens of MFA push notifications late at night until, annoyed, they approve one. What is this technique called, and what control most directly defeats it?',
    correct: 'MFA fatigue (push bombing); number matching or phishing-resistant MFA (e.g., FIDO2 hardware keys) most directly defeats it',
    wrong: [
      miss('Credential stuffing; rate-limiting login attempts fixes it', 'Credential stuffing is mass-replaying breached username/password pairs. Here the password is already known and the attack abuses the push-approval step, which rate-limiting logins does not address.', 'Stuffing is about trying many passwords; this is about spamming the approval prompt.'),
      miss('Pass-the-hash; rotating the KRBTGT account stops it', 'Pass-the-hash reuses a captured password hash on Windows hosts and has nothing to do with mobile push approvals. KRBTGT rotation addresses golden tickets, not push bombing.', 'Pass-the-hash is a Windows hash-reuse attack, unrelated to MFA push prompts.'),
      miss('SIM swapping; porting the phone number defeats it', 'SIM swapping hijacks SMS-based factors by taking over the phone number. Push bombing instead spams app-based approvals; the user themselves approves the prompt.', 'SIM swapping steals the number; push bombing exploits the user clicking "approve."'),
    ],
    lesson: 'MFA fatigue / push bombing floods a user with approval prompts hoping they tap "approve" to make it stop. It exploits human annoyance, not a cryptographic flaw. Number matching, additional context in the prompt, and phishing-resistant MFA (FIDO2/WebAuthn) remove the blind one-tap approval that the attack relies on.', source, generated: true },

  { id: 7617020, chapter: 'Identity and Access Language', title: 'OAuth consent phishing',
    prompt: 'A user is tricked into granting a malicious third-party app broad OAuth permissions to their mailbox. The attacker now reads mail without ever knowing the password, and changing the password does not stop them. Why, and what is the fix?',
    correct: 'The app holds a delegated OAuth token authorized by the user\'s consent, which is independent of the password; the fix is to revoke the app\'s consent/grant and its tokens',
    wrong: [
      miss('The attacker captured the password, so a password reset will lock them out', 'Consent phishing never needs the password; access rides on the granted OAuth token. Resetting the password does not revoke an existing app grant.', 'No password was stolen here; the access is a granted token, so a reset misses it.'),
      miss('MFA was bypassed by a flaw, so re-enrolling MFA solves it', 'The user legitimately consented; MFA was not defeated by a flaw. Re-enrolling MFA does nothing to an already-granted application permission.', 'The user authorized the app; MFA was not the failure point, the consent was.'),
      miss('The mailbox is simply public, so tightening sharing settings ends it', 'The mailbox is not public; a specific malicious app holds a delegated grant. The remedy is revoking that grant and auditing consented apps, not sharing settings.', 'This is a rogue app grant, not a public mailbox; revoke the app\'s consent.'),
    ],
    lesson: 'OAuth consent phishing tricks a user into authorizing a malicious app, which then uses a delegated token that survives password changes and MFA. Remediation is revoking the app\'s consent/refresh tokens, removing the enterprise app, and tightening admin consent policies so users cannot grant risky scopes.', source, generated: true },

  { id: 7617021, chapter: 'Identity and Access Language', title: 'What impossible travel really claims',
    prompt: 'An identity alert flags "impossible travel" for a user. What pattern triggered it, and what is the most common benign explanation to rule out first?',
    correct: 'Two successful logins from locations so far apart that travel between them in the elapsed time is physically implausible; a VPN or proxy changing the apparent location is the most common benign cause',
    wrong: [
      miss('A single login from a foreign country, regardless of timing', 'One foreign login alone is not impossible travel; the signal requires two logins whose geographic distance and time gap are physically irreconcilable.', 'It takes two logins and an impossible distance-over-time, not one foreign login.'),
      miss('Many failed login attempts from different countries in quick succession', 'That pattern is password spraying / brute force, not impossible travel. Impossible travel is about successful logins from incompatible locations.', 'Failed logins from many places is spraying; impossible travel is about successful logins.'),
      miss('A login at an unusual hour for that user', 'Odd-hour logins are a different anomaly (time-based). Impossible travel is specifically a geography-versus-time contradiction between two successful sessions.', 'Unusual time is a separate signal; impossible travel is about location versus elapsed time.'),
    ],
    lesson: 'Impossible travel fires when two successful authentications come from locations that cannot be physically reached in the time between them. Before declaring compromise, rule out VPNs, proxies, cloud egress, and mobile-roaming geolocation errors — the benign causes that produce the same pattern.', source, generated: true },

  { id: 7617022, chapter: 'Identity and Access Language', title: 'Kerberoasting in one line',
    prompt: 'An analyst reports that an attacker "Kerberoasted a service account." Mechanically, what did the attacker do, and what makes it succeed?',
    correct: 'They requested a Kerberos service ticket for an account with an SPN and cracked it offline to recover the service account\'s password, which succeeds when that password is weak',
    wrong: [
      miss('They forged a TGT using the KRBTGT hash to gain domain-wide access', 'That describes a golden ticket, not Kerberoasting. Kerberoasting requests a legitimate service ticket and cracks it offline; it does not require the KRBTGT hash.', 'Forging a TGT from KRBTGT is the golden ticket; Kerberoasting cracks a requested service ticket.'),
      miss('They captured a password hash off the wire and replayed it to a host', 'That is pass-the-hash, a replay technique. Kerberoasting instead cracks an encrypted service ticket offline to recover the plaintext password.', 'Replaying a hash is pass-the-hash; Kerberoasting is offline cracking of a service ticket.'),
      miss('They flooded the user with MFA prompts until access was approved', 'That is MFA fatigue and has nothing to do with Kerberos tickets. Kerberoasting is an offline cracking attack against service-account ticket encryption.', 'MFA push spam is unrelated; Kerberoasting targets the encryption of a service ticket.'),
    ],
    lesson: 'Kerberoasting abuses that any authenticated user can request a service ticket (TGS) for an account with a Service Principal Name; the ticket is encrypted with the service account\'s password-derived key, which the attacker cracks offline. Strong, long service-account passwords (or gMSAs) defeat it.', source, generated: true },

  { id: 7617023, chapter: 'Identity and Access Language', title: 'Credential, token, and session',
    prompt: 'In identity terms, distinguish a credential, a token, and a session. An attacker steals each in turn. Which statement correctly separates them?',
    correct: 'A credential is the secret used to prove identity (e.g., password/key); a token is a time-bound artifact issued after authentication; a session is the authenticated state maintained for a user',
    wrong: [
      miss('They are three names for the same thing, so revoking one revokes all', 'They are distinct: a password (credential) can be reset while a live token/session stays valid until separately revoked. Revoking one does not automatically revoke the others.', 'Resetting a password does not kill a live token or session; they are separate artifacts.'),
      miss('A token is the long-term secret and a credential is the short-lived artifact', 'This inverts them. The credential is the durable secret; the token is the short-lived, post-authentication artifact derived from using it.', 'You have it backwards: the durable secret is the credential, the short-lived artifact is the token.'),
      miss('A session is a physical device and a credential is its serial number', 'A session is authenticated state, not hardware, and a credential is a secret, not a serial. The three are software/identity concepts, not device attributes.', 'None of these are hardware; they are the secret, the issued artifact, and the live state.'),
    ],
    lesson: 'Credential = the secret you authenticate with. Token = a time-bound artifact (e.g., access/refresh token, Kerberos ticket) issued after authentication. Session = the maintained authenticated state. Because they are separate, full account-compromise response must rotate the credential AND revoke live tokens/sessions.', source, generated: true },

  { id: 7617024, chapter: 'Identity and Access Language', title: 'Revoke, rotate, or disable',
    prompt: 'A still-needed production service account\'s API key is found published in a public Git repository. What is the most correct immediate containment, and why?',
    correct: 'Rotate the key (issue a new one and invalidate the exposed one), because the account must keep working but the leaked secret must stop being valid',
    wrong: [
      miss('Disable the account entirely until the investigation is complete', 'Disabling a production service account breaks the service it runs. Rotation removes the leaked secret\'s validity without taking the workload down.', 'Disabling kills production; rotation keeps the service alive while killing the leaked key.'),
      miss('Just delete the public repository so the key is no longer visible', 'The key is already exposed and likely scraped; removing the repo does not invalidate a secret that attackers may already hold. The exposed value must be rotated out.', 'Once public, assume it is captured; hiding the repo does not revoke the secret.'),
      miss('Only review who had access to the repo and take no action on the key', 'A review without rotating the live, leaked secret leaves the door open. Containment must invalidate the exposed key now, then investigate.', 'Reviewing access does not stop use of a key that is already public; rotate first.'),
    ],
    lesson: 'Choose containment by what must keep working: revoke (kill a token/session), rotate (replace a secret while preserving the account), or disable (turn off an account). A leaked production key needs rotation — new secret issued, old one invalidated — so the service survives while the exposed value dies. Treat any public secret as compromised.', source, generated: true },

  { id: 7617025, chapter: 'Identity and Access Language', title: 'AS-REP roasting prerequisite',
    prompt: 'An attacker harvests crackable Kerberos material for accounts without ever authenticating, then cracks passwords offline. This "AS-REP roasting" only works against a specific account configuration. Which one?',
    correct: 'Accounts that have Kerberos pre-authentication disabled, because the KDC then returns an AS-REP an attacker can crack offline without valid credentials',
    wrong: [
      miss('Accounts that are members of the Domain Admins group', 'Group membership is irrelevant to AS-REP roasting; the vulnerable trait is disabled Kerberos pre-authentication, which can affect any account regardless of privilege.', 'It is a pre-auth setting, not a privilege level, that exposes the account.'),
      miss('Accounts protected by a FIDO2 hardware security key', 'A hardware key has no bearing on whether Kerberos pre-auth is enabled. AS-REP roasting targets the pre-auth setting, not the second factor.', 'Hardware keys do not change the Kerberos pre-auth flag this attack abuses.'),
      miss('Accounts that have never logged in and remain disabled', 'Disabled, never-used accounts do not authenticate at all. The condition is specifically pre-authentication being turned off on an enabled account.', 'The account must be usable with pre-auth disabled, not a dormant disabled account.'),
    ],
    lesson: 'AS-REP roasting works only against accounts with "do not require Kerberos pre-authentication" set: the KDC will return an AS-REP encrypted with the account\'s password-derived key to anyone asking, which the attacker cracks offline. The defense is keeping pre-authentication enabled and using strong passwords.', source, generated: true },

  // ===== Chapter 4: Endpoint, Network, and Cloud Investigation =====
  { id: 7617026, chapter: 'Endpoint, Network, and Cloud Investigation', title: 'Beaconing and why jitter hides it',
    prompt: 'An analyst spots a host making small outbound connections to one external IP at roughly regular intervals. They call it "beaconing to C2." Why do attackers add random "jitter" to the interval?',
    correct: 'Jitter randomizes the call-home timing so the traffic looks less like a perfectly periodic machine pattern, making the beacon harder to detect by interval analysis',
    wrong: [
      miss('Jitter speeds up exfiltration by sending data in bursts', 'Jitter is about randomizing timing to evade detection, not throughput. It does not make exfiltration faster; if anything it spreads activity out.', 'Jitter varies timing to hide; it is an evasion trick, not a speed boost.'),
      miss('Jitter encrypts the beacon so its contents cannot be read', 'Encryption hides content; jitter alters timing. They are separate evasions, and jitter does nothing to the payload\'s confidentiality.', 'Encryption hides what is sent; jitter hides when it is sent.'),
      miss('Jitter is a normal feature of legitimate software updates', 'While some legitimate software uses randomized check-in, in this C2 context jitter is deliberately added to defeat regular-interval detection of the beacon.', 'Here jitter is an attacker evasion of interval-based detection, not a benign update feature.'),
    ],
    lesson: 'Beaconing is the periodic "call home" from an implant to its command-and-control server. Detection often keys on regular intervals, so attackers add jitter (random variation in timing) to blur the pattern. Hunters counter by analyzing connection regularity, destinations, and data volume over time.', source, generated: true },

  { id: 7617027, chapter: 'Endpoint, Network, and Cloud Investigation', title: 'DNS tunneling as a channel',
    prompt: 'A host is making an unusually high volume of DNS queries with long, random-looking subdomain labels to a single external domain. What is the most likely concern?',
    correct: 'DNS tunneling: data or C2 traffic is being smuggled inside DNS queries/responses, a channel often allowed outbound when other ports are blocked',
    wrong: [
      miss('A misconfigured local resolver retrying a failed lookup repeatedly', 'A retry storm produces repeated identical queries, not a stream of long, random, unique subdomains to one attacker-controlled domain — the signature of encoding data into DNS.', 'Retries repeat the same name; tunneling shows many unique, encoded subdomains.'),
      miss('Normal CDN behavior, since CDNs use many subdomains', 'CDNs use a bounded set of structured hostnames, not high-volume random encoded labels to a single suspicious domain. The pattern here is encoding, not content delivery.', 'CDN subdomains are structured and finite; encoded random labels at volume are not CDN traffic.'),
      miss('A failing DNSSEC validation generating extra queries', 'DNSSEC issues produce validation failures and specific record types, not a flood of long random subdomains carrying encoded payloads to one domain.', 'DNSSEC failures look different; this pattern is data encoded into query names.'),
    ],
    lesson: 'DNS tunneling encodes data inside DNS query names (long, high-entropy subdomains) and responses, abusing a protocol that egress filters usually permit. Tell-tales: high query volume, long/random labels, and a single authoritative domain. DNS logs are prime evidence; inspect, rate-limit, or sinkhole the domain.', source, generated: true },

  { id: 7617028, chapter: 'Endpoint, Network, and Cloud Investigation', title: 'Living off the land',
    prompt: 'EDR shows an attacker using built-in Windows tools (PowerShell, certutil, wmic) rather than dropping custom malware. This "living off the land" approach is favored because it does what?',
    correct: 'It blends in with legitimate administrative activity and avoids dropping novel binaries, reducing signature-based and reputation-based detection',
    wrong: [
      miss('It runs faster because native tools are more efficient than malware', 'The motive is evasion, not speed. Using trusted, signed system binaries helps the attacker hide among normal admin behavior, regardless of performance.', 'The goal is to blend in, not to run faster; LOLBins are about evasion.'),
      miss('It guarantees the attacker has administrative privileges automatically', 'Using built-in tools does not confer privileges; the attacker still needs whatever rights the context provides. The benefit is stealth, not privilege.', 'LOLBins do not grant admin; they help avoid detection.'),
      miss('It prevents the activity from being logged at all', 'Native-tool use is still loggable (command-line, script-block, process telemetry). It evades signature/reputation checks, but it does not switch off logging.', 'Logs can still capture it; the evasion is against signatures, not against logging.'),
    ],
    lesson: '"Living off the land" (LOLBins) uses legitimate, signed, pre-installed tools for malicious ends, sidestepping antivirus signatures and binary reputation by hiding in normal admin noise. Detection shifts to behavioral telemetry: anomalous command lines, parent-child process chains, and unusual use of trusted utilities.', source, generated: true },

  { id: 7617029, chapter: 'Endpoint, Network, and Cloud Investigation', title: 'SSRF reaching cloud metadata',
    prompt: 'A web app vulnerable to server-side request forgery (SSRF) is abused to make the server fetch "http://169.254.169.254/...". Why is that address dangerous in a cloud environment?',
    correct: 'It is the link-local instance metadata service (IMDS) address; reaching it can leak the workload\'s cloud role credentials, letting the attacker assume the instance\'s permissions',
    wrong: [
      miss('It is the public internet gateway, so traffic just leaves the network', '169.254.169.254 is a link-local metadata endpoint, not an internet gateway. The danger is internal credential exposure, not ordinary egress.', 'That link-local IP is the metadata service, not a gateway; it leaks instance credentials.'),
      miss('It is a broadcast address that crashes the host when queried', 'It is not a broadcast address and querying it does not crash the host. The risk is theft of the instance\'s IAM credentials via the metadata service.', 'It is the IMDS endpoint; the threat is stolen role credentials, not a crash.'),
      miss('It is harmless because metadata is only configuration, not secrets', 'IMDS can return temporary IAM role credentials, which are very much secrets. Treating metadata as benign is exactly the mistake SSRF exploits.', 'Instance metadata includes role credentials; it is not just harmless config.'),
    ],
    lesson: '169.254.169.254 is the cloud instance metadata service (IMDS). SSRF that reaches it can retrieve the workload\'s temporary IAM role credentials, letting an attacker inherit the instance\'s permissions. Mitigations include IMDSv2 (session-token-bound requests), blocking that link-local address from app contexts, and least-privilege instance roles.', source, generated: true },

  { id: 7617030, chapter: 'Endpoint, Network, and Cloud Investigation', title: 'Security group versus network ACL',
    prompt: 'A cloud reviewer needs to know which control is stateful and instance-attached versus stateless and subnet-level. Which statement correctly distinguishes a typical cloud security group from a network ACL?',
    correct: 'A security group is stateful and attached to instances/interfaces; a network ACL is stateless and operates at the subnet boundary, evaluating rules in order',
    wrong: [
      miss('A security group is stateless and subnet-level; a network ACL is stateful and instance-level', 'This inverts both attributes. Security groups are stateful and instance-attached; network ACLs are stateless and subnet-level.', 'You have them swapped: security groups are the stateful, instance-level ones.'),
      miss('Both are identical; the names are vendor synonyms for the same control', 'They differ in state-handling and scope. A stateful instance firewall (security group) is not interchangeable with a stateless subnet filter (network ACL).', 'They are distinct controls with different state and scope, not synonyms.'),
      miss('A security group filters by application content while a network ACL filters by IP', 'Neither inspects application content; both filter on IP/port/protocol. The real distinction is stateful-vs-stateless and instance-vs-subnet scope.', 'Both are layer-3/4 filters; the difference is state and scope, not app-layer inspection.'),
    ],
    lesson: 'In typical cloud networking, a security group is a stateful firewall attached to instances/ENIs (return traffic is automatically allowed); a network ACL is a stateless filter at the subnet boundary where you must allow both directions and rules are evaluated in numbered order. Knowing which is which prevents misdiagnosing why traffic is or is not flowing.', source, generated: true },

  { id: 7617031, chapter: 'Endpoint, Network, and Cloud Investigation', title: 'Persistence versus lateral movement',
    prompt: 'After eviction, an attacker regains a foothold because a scheduled task they planted earlier re-launches their implant on the same host. Separately, telemetry shows them earlier using stolen creds to log into other servers. Which is persistence and which is lateral movement?',
    correct: 'The scheduled task that re-establishes access on a host is persistence; using credentials to reach additional hosts is lateral movement',
    wrong: [
      miss('Both are lateral movement, since both keep the attacker in the network', 'Persistence is about surviving on a host across reboots/eviction; lateral movement is about spreading to new hosts. Staying put is not the same as spreading.', 'Surviving on one host is persistence; reaching new hosts is lateral movement.'),
      miss('Both are persistence, because the attacker maintains access overall', 'Maintaining access is the umbrella idea, but logging into other servers is specifically lateral movement (a distinct tactic), not persistence on the original host.', 'Spreading to new servers is lateral movement, a separate tactic from persistence.'),
      miss('The scheduled task is lateral movement and the logins are persistence', 'This inverts them. A re-launching scheduled task is a persistence mechanism; authenticating into other hosts is lateral movement.', 'You have them reversed: the scheduled task is the persistence, the logins are the spread.'),
    ],
    lesson: 'Persistence keeps an attacker present on a host through reboots and eviction (scheduled tasks, services, registry run keys). Lateral movement spreads them to additional systems (stolen creds, remote services, pass-the-hash). Confusing the two leads teams to declare an incident "contained" while a persistence mechanism quietly reopens the door.', source, generated: true },

  { id: 7617032, chapter: 'Endpoint, Network, and Cloud Investigation', title: 'Public bucket: the second action',
    prompt: 'A cloud scanner reports an object-storage bucket set to public-read. You close the public access immediately. Beyond remediation, what is the essential second action?',
    correct: 'Determine what data was actually exposed and whether it was accessed, since closing access does not undo any prior exposure and may trigger notification duties',
    wrong: [
      miss('Rename the bucket to something less guessable to reduce future risk', 'Obscure naming is security by obscurity and does not address what already leaked. The priority is assessing exposed data and access, not renaming.', 'A new name does nothing about data already exposed; assess the impact instead.'),
      miss('Nothing further; once access is closed the incident is fully resolved', 'Closing access stops future leakage but says nothing about what was already readable or downloaded. Impact assessment and possible notification remain.', 'Closing the door does not tell you what already walked out; you must assess exposure.'),
      miss('Immediately delete the bucket to ensure the data can never leak again', 'Deleting destroys both the data and the evidence (access logs) needed to scope the exposure. Preserve, assess access, then decide on data handling.', 'Deleting wipes the evidence you need; first determine what was exposed and accessed.'),
    ],
    lesson: 'A public bucket finding has two parts: close the exposure, then scope it — what objects were readable, was anything accessed/downloaded (check access logs), and does the content trigger breach-notification obligations? Renaming or deleting addresses neither the impact question nor the regulatory clock.', source, generated: true },

  { id: 7617033, chapter: 'Endpoint, Network, and Cloud Investigation', title: 'Over-permissioned workload identity',
    prompt: 'A web server\'s cloud IAM role can read every bucket and database in the account, though the application only needs one bucket. A reviewer flags it. What principle is violated and what is the concrete risk?',
    correct: 'Least privilege is violated; if the server is compromised, the attacker inherits the role\'s broad permissions and can reach data far beyond the app\'s legitimate scope',
    wrong: [
      miss('No principle is violated; broad access is fine as long as the app is patched', 'Patching reduces but never eliminates compromise risk, and the blast radius is set by the role\'s permissions, not patch status. Over-permissioning is a real least-privilege violation.', 'Patches fail; the role\'s scope is what bounds the damage, and it is far too wide.'),
      miss('It violates separation of duties, requiring a second approver per request', 'Separation of duties concerns splitting a task among people. The issue here is a single workload holding excessive standing permissions — a least-privilege problem.', 'This is about one identity having too much access, which is least privilege, not approver counts.'),
      miss('It violates defense in depth, which is solved by adding another firewall', 'Defense in depth is about layered controls. The flagged problem is the scope of the role itself; another firewall does not shrink what the role can read once abused.', 'Adding a layer does not fix an over-broad role; tighten the permissions themselves.'),
    ],
    lesson: 'Least privilege means an identity (human or workload) gets only the access it needs. An over-permissioned machine role turns a single web-server compromise into account-wide data exposure because the attacker inherits the role. Scope roles to the specific resources the app uses, and prefer short-lived, narrowly scoped credentials.', source, generated: true },

  { id: 7617034, chapter: 'Endpoint, Network, and Cloud Investigation', title: 'Exfiltration versus benign egress',
    prompt: 'You observe a large outbound transfer at 2 a.m. Which single check best separates likely data exfiltration from a benign scheduled backup?',
    correct: 'Identify the destination and whether it is an approved, known endpoint: backups go to sanctioned storage on a schedule, while exfiltration goes to unfamiliar or attacker-controlled destinations',
    wrong: [
      miss('The sheer size of the transfer, since exfiltration always moves more data', 'Volume alone is ambiguous — backups are often huge. A legitimate nightly backup can dwarf a stealthy, slow exfiltration. Destination and authorization discriminate better.', 'Big transfers can be backups; size alone does not separate the two — check the destination.'),
      miss('The time of day, because legitimate traffic never occurs overnight', 'Plenty of legitimate jobs (backups, batch ETL, patching) run overnight by design. Off-hours timing is weak evidence on its own.', 'Overnight is normal for backups and batch jobs; timing alone proves nothing.'),
      miss('Whether the traffic is encrypted, since only attackers use encryption', 'Both legitimate backups and attackers commonly use encryption (TLS). Encryption is now the norm and does not distinguish malicious from benign egress.', 'Encryption is standard for legitimate traffic too; it is not a discriminator.'),
    ],
    lesson: 'The strongest single discriminator is destination plus authorization: is the data going to a sanctioned backup target on an expected schedule, or to an unknown/attacker-controlled endpoint? Volume, timing, and encryption all appear in benign traffic, so they are weak signals on their own.', source, generated: true },

  // ===== Chapter 5: Containment, Eradication, and Recovery =====
  { id: 7617035, chapter: 'Containment, Eradication, and Recovery', title: 'Order of volatility (RFC 3227)',
    prompt: 'Per RFC 3227\'s order of volatility, you must collect evidence from a live, possibly-compromised host. Which source should you capture first?',
    correct: 'The most volatile data first — CPU registers/cache and system memory (RAM) — before less volatile sources like disk and archived logs',
    wrong: [
      miss('The disk image first, because the disk holds the most evidence', 'Disk is relatively non-volatile and survives; volatile RAM and cache vanish on power-off. Capturing disk first risks losing the volatile data forever.', 'Disk persists; RAM does not — capture the volatile memory before the disk.'),
      miss('Archived backup media first, since it is the most authoritative source', 'Archived media is the least volatile; it can wait. Collecting it first wastes the narrow window to capture RAM and live state.', 'Archives are least volatile and can be grabbed last; volatile memory comes first.'),
      miss('Whatever is easiest to copy first, to get evidence moving quickly', 'Convenience is not the rule; volatility is. Grabbing easy non-volatile data first can let the volatile, irreplaceable data evaporate.', 'Order by volatility, not by ease; the fleeting data has to come first.'),
    ],
    lesson: 'RFC 3227 says collect from most volatile to least: registers/cache, then memory and routing/ARP/process tables, then temporary files, then disk, then remote logs, then physical/archival media. Powering off or rebooting destroys the volatile tiers, so capture them before touching anything that ends the live state.', source, generated: true },

  { id: 7617036, chapter: 'Containment, Eradication, and Recovery', title: 'Reboot destroys volatile evidence',
    prompt: 'Facing a possibly compromised server, an analyst\'s first instinct is to reboot it to "clear" the malware. Why is that often the wrong first move?',
    correct: 'A reboot destroys volatile evidence (RAM, running processes, network connections) and may not remove persistence, so you lose the forensic picture without guaranteeing eradication',
    wrong: [
      miss('Rebooting is fine because malware never survives a restart', 'Plenty of malware establishes persistence (services, scheduled tasks, run keys) and returns after reboot. Restarting neither guarantees removal nor preserves evidence.', 'Persistence survives reboots; restarting can lose evidence and leave the malware.'),
      miss('The only problem is downtime during the reboot window', 'Downtime is minor compared with the irreversible loss of volatile forensic data. The core issue is destroyed evidence, not a brief outage.', 'The real cost is lost volatile evidence, not the few minutes of downtime.'),
      miss('It is the right move; capturing memory first only slows the response', 'Capturing volatile memory before disruptive actions is exactly what preserves the ability to investigate. Skipping it trades a few minutes for unrecoverable evidence.', 'Memory capture first is the correct sequence; skipping it loses irreplaceable data.'),
    ],
    lesson: 'Rebooting or powering off wipes RAM, live process trees, and active connections — often the only place to see what the attacker is doing — and frequently fails to remove persistence. Preserve volatile evidence (memory image, live triage) first, then contain in a way that does not trample what you still need.', source, generated: true },

  { id: 7617037, chapter: 'Containment, Eradication, and Recovery', title: 'Containment versus eradication',
    prompt: 'A team isolates an infected host from the network so the malware cannot spread or reach its C2, but the malware files are still on the disk. Which step is complete and which remains?',
    correct: 'Containment is complete (spread and C2 are stopped); eradication — removing the malware and any persistence — still remains, followed by recovery',
    wrong: [
      miss('Both containment and eradication are complete once the host is isolated', 'Isolation stops spread (containment) but the malware still exists on the host. Eradication, the removal of the threat and its footholds, has not happened.', 'Isolating stops the spread but leaves the malware in place; eradication is still pending.'),
      miss('Eradication is done but containment still remains to be performed', 'This reverses the steps: cutting network access is containment, and the malware is still present, so eradication is the outstanding step, not containment.', 'Network isolation is the containment; the leftover malware means eradication is what remains.'),
      miss('Recovery is complete because the host can no longer cause harm', 'Recovery is restoring clean, verified service — not merely neutralizing harm. With malware still on disk, the host is neither eradicated nor recovered.', 'Recovery means restoring a clean system; an isolated, still-infected host is far from recovered.'),
    ],
    lesson: 'Containment limits damage and stops spread (isolate, block, revoke). Eradication removes the threat and its persistence (delete malware, close the entry point, reset abused credentials). Recovery restores verified-clean service and monitors. Calling an isolated-but-still-infected host "done" is a classic premature-closure error.', source, generated: true },

  { id: 7617038, chapter: 'Containment, Eradication, and Recovery', title: 'Short-term versus long-term containment',
    prompt: 'During response you quickly null-route an attacker\'s C2 domain to buy time, then later rebuild the affected segment with hardened controls. In NIST terms, what are these two actions?',
    correct: 'Short-term containment (a fast, reversible action to stop immediate harm) followed by long-term containment (durable measures that hold while you prepare eradication and recovery)',
    wrong: [
      miss('Eradication followed by recovery, since you removed the threat then rebuilt', 'Null-routing a domain does not remove the malware (eradication); it is a containment measure. The rebuild here is durable containment/hardening, not yet full recovery.', 'Blocking C2 is containment, not eradication; sequence the terms by what each action does.'),
      miss('Both are recovery, because the goal is to get back to normal operations', 'Recovery is restoring verified-clean service. Blocking C2 and hardening a segment to hold the line are containment activities that precede recovery.', 'Recovery comes after the threat is removed; these are holding actions, i.e. containment.'),
      miss('Both are preparation, since they set up for the rest of the response', 'Preparation is the pre-incident readiness phase. These actions happen during an active incident to limit harm, which is containment, not preparation.', 'Preparation is before the incident; these are live containment moves.'),
    ],
    lesson: 'NIST distinguishes short-term containment (immediate, often reversible steps to stop the bleeding) from long-term containment (more durable measures, like rebuilding into a hardened segment, that hold while eradication and recovery proceed). Both are containment — neither removes the threat (eradication) nor restores clean service (recovery).', source, generated: true },

  { id: 7617039, chapter: 'Containment, Eradication, and Recovery', title: 'Restoring from a tainted backup',
    prompt: 'A confirmed compromise began on June 1. To recover fast, the team restores a server from a backup taken June 10. What is the danger?',
    correct: 'The June 10 backup was taken after the compromise, so it may already contain the attacker\'s malware or persistence, reintroducing the threat on restore',
    wrong: [
      miss('No danger; any recent backup is by definition clean and trustworthy', 'Recency does not equal cleanliness. A backup captured after the intrusion can faithfully preserve the attacker\'s implants, restoring them along with the data.', 'A newer backup can be a newer copy of the compromise; recency is not cleanliness.'),
      miss('The only risk is losing data created between June 1 and June 10', 'Data loss is a recovery-point concern, but the critical security danger is restoring the malware itself, which can re-compromise the host immediately.', 'The bigger risk is reinstalling the attacker, not just the data gap.'),
      miss('The danger is that June 10 is too old, so you should use the newest backup', 'Going newer makes it worse — the newest post-compromise backup is even more likely to contain the threat. You need a known-clean pre-compromise restore point.', 'Newer is more tainted, not safer; you need a verified pre-June-1 clean backup.'),
    ],
    lesson: 'After a compromise, restoring from any backup taken after the intrusion risks reintroducing the attacker\'s malware and persistence. Recovery must use a known-clean restore point (pre-compromise, integrity-verified) or a freshly rebuilt system, then validate before returning to service.', source, generated: true },

  { id: 7617040, chapter: 'Containment, Eradication, and Recovery', title: 'Chain of custody',
    prompt: 'Evidence from an incident may later be used in legal proceedings. Maintaining "chain of custody" primarily ensures what?',
    correct: 'A documented, unbroken record of who handled the evidence, when, and how, so its integrity and admissibility can be demonstrated later',
    wrong: [
      miss('That the evidence is encrypted so attackers cannot read it', 'Encryption protects confidentiality, not the custody record. Chain of custody is about provenance and integrity documentation, not secrecy.', 'Chain of custody tracks handling, not encryption of the data.'),
      miss('That the evidence is deleted once the investigation closes', 'Premature deletion would destroy evidence and break custody. The point is preserving and documenting handling, not disposal.', 'Custody is about preserving and tracking, the opposite of deleting.'),
      miss('That the fastest analyst gets to examine the evidence first', 'Speed of access is irrelevant to custody. What matters is a complete, tamper-evident handling record regardless of who examines it.', 'Who is fastest does not matter; the unbroken handling record does.'),
    ],
    lesson: 'Chain of custody is the documented, continuous trail of evidence handling — collected by whom, when, stored where, accessed by whom — with hashes/seals to prove it was not altered. Without it, even genuine evidence may be challenged or ruled inadmissible. It is a discipline of paperwork and integrity, not secrecy or speed.', source, generated: true },

  { id: 7617041, chapter: 'Containment, Eradication, and Recovery', title: 'Eradication is not complete without the entry point',
    prompt: 'A team deletes the malware from every infected host and declares eradication finished. A senior responder objects. What did they most likely miss?',
    correct: 'They did not close the initial entry point and any persistence/credential abuse, so the attacker can simply walk back in and re-infect',
    wrong: [
      miss('They forgot to also patch every unrelated system in the company', 'Patching unrelated systems is general hygiene, not the gap. The specific failure is leaving open the way the attacker got in and stayed.', 'The miss is the entry point and persistence, not blanket patching of everything.'),
      miss('They should have rebooted all hosts to be sure the files were gone', 'A reboot does not constitute eradication and can destroy evidence. Deleting files without closing the entry vector is the real omission.', 'Rebooting does not eradicate; the gap is the unclosed entry and footholds.'),
      miss('Nothing was missed; removing the malware files is complete eradication', 'Removing files alone leaves the door open. True eradication also closes the entry point, removes persistence, and resets abused credentials.', 'Deleting malware is not enough; the vector and footholds remain open.'),
    ],
    lesson: 'Eradication means removing the threat and the means by which it persists or returns: the malware, the persistence mechanisms, the abused credentials/tokens, and the initial entry point (vuln, phished account, exposed service). Deleting binaries while leaving the front door open just invites re-infection.', source, generated: true },

  { id: 7617042, chapter: 'Containment, Eradication, and Recovery', title: 'Over-containment breaks the business',
    prompt: 'On a single egress alert from one host, an engineer proposes blocking all outbound internet traffic for the entire company. What is the better-calibrated containment, and why?',
    correct: 'Apply a scoped block (isolate the affected host or block the specific malicious destination), because a blanket outage often causes more harm than the unconfirmed threat warrants',
    wrong: [
      miss('Block everything company-wide; over-containing is always the safe choice', 'Over-containment can halt revenue-critical operations and is rarely justified by one unconfirmed alert. Scope the action to the evidence to avoid self-inflicted damage.', 'A company-wide outage on one alert is self-harm; scope to the affected host/destination.'),
      miss('Do nothing until the threat is fully confirmed and scoped end to end', 'Waiting for total certainty lets a real attacker continue. A scoped, reversible containment buys time without the collateral damage of a blanket block.', 'Inaction is also a choice with risk; take a scoped, reversible step now.'),
      miss('Shut down the affected host\'s power immediately to be certain', 'Powering off destroys volatile evidence and is heavier than needed. Network isolation contains spread while preserving the forensic picture.', 'Pulling power loses evidence; isolate the host on the network instead.'),
    ],
    lesson: 'Good containment is proportionate and reversible: isolate the implicated host or block the specific bad destination rather than nuking all egress. Over-containment (company-wide blackout) and under-containment (do nothing) are both failures; match the action to the confidence and scope, and name its rollback.', source, generated: true },

  // ===== Chapter 6: Communication, Escalation, and Roles =====
  { id: 7617043, chapter: 'Communication, Escalation, and Roles', title: 'Incident commander versus SME',
    prompt: 'During a major incident, what is the incident commander\'s primary job, and how does it differ from the technical subject-matter experts?',
    correct: 'The incident commander coordinates the overall response — decisions, roles, communication, and tempo — while SMEs do the hands-on technical investigation and remediation',
    wrong: [
      miss('The incident commander must be the most technical person and do the analysis', 'The IC role is about coordination and decision-making, not personally performing forensics. Forcing the best technician into IC often removes them from where they add most value.', 'IC coordinates; making them do the deep technical work defeats the role.'),
      miss('The incident commander only writes the final report after it is over', 'The IC leads during the incident, driving decisions and communication in real time, not just documenting afterward.', 'The IC runs the response live, not just the post-incident write-up.'),
      miss('The incident commander approves every command an analyst types', 'Micromanaging keystrokes does not scale and is not the IC\'s job. The IC sets direction and makes escalation/containment decisions; SMEs execute.', 'IC sets direction and decisions, not per-command sign-off.'),
    ],
    lesson: 'The incident commander owns coordination: who is doing what, what decisions are made, how scope/confidence are tracked, and how the situation is communicated up and out. Subject-matter experts perform the technical work. Separating leadership from hands-on-keyboard keeps the response coherent under pressure.', source, generated: true },

  { id: 7617044, chapter: 'Communication, Escalation, and Roles', title: 'The four-line exec update',
    prompt: 'A non-technical VP needs a status update to make decisions during a live incident. Which structure serves them best?',
    correct: 'What happened, what it means for the business, what we are doing about it, and what decisions we need from you — in plain language',
    wrong: [
      miss('A detailed timeline of every IOC, log query, and tool used so far', 'Executives need decision-relevant clarity, not raw analyst telemetry. A flood of IOCs and queries buries the impact and the ask.', 'Leadership needs impact and decisions, not the analyst\'s full tool log.'),
      miss('Only the technical root cause, since that is the most important fact', 'Root cause matters but is not actionable for a VP without impact, current actions, and the decisions needed. Lead with business meaning, not just mechanism.', 'Root cause alone gives a VP nothing to decide; include impact and the ask.'),
      miss('A reassurance that everything is under control with no further detail', 'Empty reassurance hides the impact and the decisions leadership may need to make, and it erodes trust if proven wrong. Be honest about scope and asks.', 'Vague comfort is not an update; state impact, actions, and decisions honestly.'),
    ],
    lesson: 'A strong executive update has four plain-English lines: what happened, why it matters to the business, what the team is doing, and what decisions leadership must make. It separates confirmed facts from working theories and avoids jargon. The goal is to enable a decision, not to demonstrate technical depth.', source, generated: true },

  { id: 7617045, chapter: 'Communication, Escalation, and Roles', title: 'Escalate by impact, not panic',
    prompt: 'A contained, low-impact malware alert on a single test laptop shows no sign of data access or spread. Should this immediately trigger executive and legal escalation?',
    correct: 'No: with low impact, no data access, and containment achieved, it stays within the SOC; escalation thresholds should follow real impact, not the mere presence of an alert',
    wrong: [
      miss('Yes; every malware alert must reach the executive and legal teams', 'Escalating everything causes alert fatigue at the leadership level and erodes the meaning of escalation. Thresholds exist so leaders hear about what actually matters.', 'Escalating every alert burns leadership trust; reserve it for real impact.'),
      miss('Yes, because any malware automatically constitutes a reportable breach', 'A contained test-laptop infection with no data access is not, by itself, a reportable data breach. Notification duties hinge on impact to protected data, not the word "malware."', 'Malware present is not the same as a reportable breach; reporting turns on data impact.'),
      miss('No, and you should also stop logging it to keep the queue clean', 'Not escalating is correct, but suppressing the record is wrong: the event should still be documented for trend analysis and tuning. Quietness toward leadership is not silence in the record.', 'Right call on escalation, wrong call on logging — keep the documented record.'),
    ],
    lesson: 'Escalation thresholds should key on impact: scope, data sensitivity, business-critical systems, and confidence — not on the existence of an alert or scary terminology. A contained, no-impact event is handled and documented at the SOC level. Escalating everything is as harmful as escalating nothing.', source, generated: true },

  { id: 7617046, chapter: 'Communication, Escalation, and Roles', title: 'GDPR 72-hour notification',
    prompt: 'Under GDPR Article 33, a data controller that suffers a personal-data breach likely to risk individuals\' rights must notify the supervisory authority within what window, measured from when?',
    correct: 'Without undue delay and, where feasible, within 72 hours of becoming aware of the breach',
    wrong: [
      miss('Within 24 hours of the breach first occurring on the systems', 'The window is 72 hours, not 24, and it runs from awareness, not from the moment of the technical breach which is often unknown.', 'It is 72 hours from awareness, not 24 hours from the breach event itself.'),
      miss('Within 30 days of completing the internal investigation', 'A 30-day, post-investigation clock would defeat the regulation\'s urgency. The duty triggers at awareness with a 72-hour target, with phased detail allowed.', 'You cannot wait for the investigation to finish; the 72-hour clock starts at awareness.'),
      miss('Within 72 hours of the breach occurring, regardless of when it is discovered', 'The clock starts when the controller becomes aware, not when the breach technically occurred — discovery can lag the event by weeks.', 'The trigger is awareness, not occurrence; those can be far apart.'),
    ],
    lesson: 'GDPR Article 33 requires controllers to notify the supervisory authority of a qualifying personal-data breach without undue delay and, where feasible, within 72 hours of becoming aware. Awareness (reasonable certainty a breach occurred) starts the clock, phased notification is allowed, and delays must be justified. Note: notification timelines are jurisdiction-specific.', source, generated: true },

  { id: 7617047, chapter: 'Communication, Escalation, and Roles', title: 'Confirmed fact versus working theory',
    prompt: 'Early in an incident, an analyst believes ransomware is likely but has not confirmed encryption or scope. How should this be communicated to leadership?',
    correct: 'Clearly labeled as a working hypothesis with a stated confidence level, separated from the confirmed facts, so leaders do not act on an unverified theory as if it were established',
    wrong: [
      miss('State it as a confirmed ransomware breach to convey appropriate urgency', 'Presenting a theory as fact can trigger premature, costly decisions (public statements, shutdowns) that backfire if wrong. Urgency does not justify overclaiming certainty.', 'Calling an unconfirmed theory "confirmed" risks bad decisions; flag it as a hypothesis.'),
      miss('Say nothing until you are 100% certain of every detail', 'Waiting for total certainty starves leadership of information they may need to prepare. Communicate early with explicit confidence levels rather than going silent.', 'Total certainty is too slow; share early but label the uncertainty.'),
      miss('Round the confidence up to reassure leadership the team is on top of it', 'Inflating confidence misleads decision-makers and erodes trust when reality diverges. Honest, calibrated confidence is what makes updates usable.', 'Overstating confidence is dishonest and risky; report it calibrated, not rounded up.'),
    ],
    lesson: 'Good incident communication separates confirmed facts from working theories and attaches an honest confidence level to each. Leaders make better decisions with calibrated uncertainty than with false certainty in either direction. Presenting a hypothesis as a confirmed breach — or hiding it until certain — both lead to bad calls.', source, generated: true },

  // ===== Chapter 7: Detection Engineering and Post-Incident Learning =====
  { id: 7617048, chapter: 'Detection Engineering and Post-Incident Learning', title: 'Precision/recall trade-off',
    prompt: 'A detection rule is loosened so it fires on more potential threats. Holding everything else equal, what is the expected effect on precision and recall?',
    correct: 'Recall tends to rise (more real threats are caught) while precision tends to fall (more of the alerts are false positives)',
    wrong: [
      miss('Both precision and recall rise together because the rule is now better', 'Loosening a rule does not improve both at once; catching more threats typically means flagging more benign activity too, so precision drops as recall climbs.', 'You rarely get both for free; widening the net trades precision for recall.'),
      miss('Both precision and recall fall because more alerts means more noise', 'More noise lowers precision, but casting a wider net generally catches more true positives, so recall rises rather than falls.', 'Recall goes up when you widen coverage; only precision falls here.'),
      miss('Precision rises and recall falls, since stricter matching is more accurate', 'This describes tightening a rule, not loosening it. Loosening goes the other way: higher recall, lower precision.', 'You have the direction backwards — loosening raises recall, not precision.'),
    ],
    lesson: 'Precision = of the alerts fired, how many were real; recall = of the real threats, how many were caught. Loosening a rule raises recall but lowers precision (more false positives); tightening does the reverse (fewer false positives, more missed threats). Detection tuning is choosing the right point on that trade-off for the SOC\'s capacity and risk.', source, generated: true },

  { id: 7617049, chapter: 'Detection Engineering and Post-Incident Learning', title: 'Tune, do not disable',
    prompt: 'A detection fires 200 benign times a day and is exhausting the team. A junior analyst proposes disabling it. Why is tuning usually the better response?',
    correct: 'Disabling removes coverage for the real attack the rule was built to catch; tuning (adding context to suppress the benign cases) cuts noise while preserving genuine detection',
    wrong: [
      miss('Disabling is fine because a noisy rule provides no real security value', 'A rule firing 200 times benignly may still catch the rare true positive that matters most. Noise is a tuning problem, not proof the rule is worthless.', 'Noise does not equal no value; the rare true hit is the point — tune, do not blind.'),
      miss('Tuning is better only because it looks more diligent to auditors', 'The reason is substantive, not cosmetic: tuning keeps real coverage while removing false positives. Optics are beside the point.', 'It is about keeping real detection coverage, not impressing auditors.'),
      miss('You should instead page the team more so they get used to the volume', 'Normalizing alert fatigue guarantees the real hit gets ignored among 200 benign ones. Reduce noise by tuning, do not condition analysts to tune out.', 'More paging worsens fatigue; cut the noise so the real alert stands out.'),
    ],
    lesson: 'Disabling a noisy detection blinds you to the attack it covers; tuning narrows it (parent process, signing status, asset criticality, allow-listing known-benign patterns) so false positives fall while true coverage stays. The goal is precision gains without sacrificing recall on the threats that matter.', source, generated: true },

  { id: 7617050, chapter: 'Detection Engineering and Post-Incident Learning', title: 'Root cause versus proximate cause',
    prompt: 'A phishing email led to a compromise. The postmortem notes the proximate cause was a user clicking a link, and the root cause was the absence of phishing-resistant MFA and email controls. Why does the distinction matter?',
    correct: 'Fixing only the proximate cause (the click) blames the user and prevents little; addressing the root cause (missing controls) removes the systemic condition that let one click become a breach',
    wrong: [
      miss('It does not matter; firing or retraining the user fixes the problem', 'Punishing the proximate actor leaves the systemic gap open, so the next click succeeds too. The root-cause controls are what actually reduce recurrence.', 'Targeting the user ignores the control gap that made the click dangerous.'),
      miss('The root cause is always the most recent action, i.e. the click itself', 'The click is the proximate cause; the root cause is the deeper condition (missing controls) that allowed it to matter. They are deliberately distinguished.', 'The most recent action is the proximate cause; root cause is the underlying condition.'),
      miss('Both terms mean the same thing, so either label leads to the same fix', 'They lead to different fixes: proximate-cause thinking yields "tell users not to click," while root-cause thinking yields durable controls. The labels matter precisely because they point at different remedies.', 'They point to different fixes — surface behavior versus systemic control — so they are not synonyms.'),
    ],
    lesson: 'The proximate cause is the immediate trigger (the click); the root cause is the underlying systemic condition that let it become harmful (no phishing-resistant MFA, weak email filtering). Durable improvement targets root causes and assigns owners, rather than blaming the nearest human and changing nothing structural.', source, generated: true },

  { id: 7617051, chapter: 'Detection Engineering and Post-Incident Learning', title: 'The blameless postmortem',
    prompt: 'What is the defining purpose of a "blameless" postmortem, and what does it deliberately avoid?',
    correct: 'It focuses on the systemic conditions and control gaps that allowed the incident, so people speak freely and real fixes emerge, while avoiding individual blame that suppresses honesty',
    wrong: [
      miss('It avoids assigning any owners or action items, to keep things positive', 'Blameless does not mean ownerless. It still assigns owners to remediation; it avoids personal blame for the failure, not accountability for the fixes.', 'Blameless removes personal blame, not the owners of the follow-up actions.'),
      miss('It exists to identify which individual was at fault more diplomatically', 'The whole point is to move away from individual fault toward systemic causes. Politely pinning blame still chills the candor that surfaces real causes.', 'It is not gentler blame; it shifts the lens from who to what condition failed.'),
      miss('It avoids discussing technical detail to keep the meeting short', 'Technical depth is welcome; what is avoided is personal blame. Cutting detail would undermine the goal of understanding what actually happened.', 'It cuts blame, not the technical analysis needed to find root causes.'),
    ],
    lesson: 'A blameless postmortem assumes people acted reasonably with the information and systems they had, and asks what conditions let the incident happen. Removing fear of blame surfaces honest accounts and real control gaps. It still produces owners and dated action items — accountability for fixes, not punishment for the failure.', source, generated: true },

  { id: 7617052, chapter: 'Detection Engineering and Post-Incident Learning', title: 'Recurring failure: people, tooling, or governance',
    prompt: 'The same class of stale, over-privileged accounts keeps causing incidents quarter after quarter despite reminders to staff. How should the root cause most likely be classified?',
    correct: 'A governance/process gap: a recurring, cross-incident pattern that reminders do not fix points to missing controls (e.g., automated deprovisioning, access reviews), not individual user error',
    wrong: [
      miss('A people problem: staff keep ignoring the reminders, so retrain them', 'A failure that recurs across many people despite repeated reminders is the signature of a missing control, not individual negligence. Retraining alone will not stop a systemic gap.', 'When everyone keeps hitting the same wall, the wall (the process) is the problem, not the people.'),
      miss('A tooling problem solved by buying a new security product', 'New tooling without process change rarely fixes a governance gap; the issue is the absence of enforced access lifecycle controls, which may use existing tools.', 'Buying a tool without fixing the process leaves the governance gap open.'),
      miss('A one-off bad luck event that does not need structural change', 'A pattern repeating every quarter is by definition not bad luck. Recurrence is the strongest signal that a structural control is missing.', 'Quarter-after-quarter recurrence is a pattern, not luck — it demands a structural fix.'),
    ],
    lesson: 'Classify recurring incidents by root-cause layer: people (skills/behavior), tooling (capability gaps), or governance (missing or unenforced process). A pattern that survives reminders and spans many individuals is almost always a governance gap — enforce the control (automated deprovisioning, periodic access reviews, ownership) rather than blaming users.', source, generated: true },
])
