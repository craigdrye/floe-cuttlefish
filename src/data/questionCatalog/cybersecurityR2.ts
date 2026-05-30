import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]
const source = 'Floe cybersecurity 103-pass'

export const cybersecurityR2Questions: Question[] = makeQuestionBank('Career Skills', [
  // ---------------- Chapter 1: Security Thinking and Risk ----------------
  {
    id: 7607000,
    chapter: 'Security Thinking and Risk',
    title: 'The Govern function',
    prompt:
      'NIST Cybersecurity Framework 2.0 (released February 2024) added a sixth core Function that did not stand alone in version 1.1. Which Function is it, and what is its job?',
    correct:
      'Govern — set and monitor the organization’s cyber risk strategy, roles, policy, and oversight that inform all the other Functions',
    wrong: [
      miss(
        'Recover — restore systems and data after an incident',
        'Recover existed in CSF 1.0/1.1 already; it is not the function newly elevated in 2.0.',
        'The new function is strategic, not operational. Ask which one decides strategy, roles, and policy across the others.',
      ),
      miss(
        'Defend — actively block attacks at the network perimeter',
        'There is no "Defend" Function in the CSF; the six are Govern, Identify, Protect, Detect, Respond, Recover.',
        'Recall the actual six-word list. One of them is brand new in 2.0 and sits above the rest.',
      ),
      miss(
        'Identify — inventory assets, data, and risks',
        'Identify is one of the five original Functions; in 1.1 governance was buried inside it, but Identify itself is not new.',
        'In 1.1 governance lived inside Identify. In 2.0 it was pulled out into its own top-level Function.',
      ),
    ],
    lesson:
      'CSF 2.0 has six Functions: Govern, Identify, Protect, Detect, Respond, Recover. Govern is the 2.0 addition — it makes cybersecurity a strategy-and-oversight discipline (roles, policy, supply-chain risk) that wraps around the five operational Functions rather than a checklist bolted onto IT.',
    source,
    generated: true,
  },
  {
    id: 7607001,
    chapter: 'Security Thinking and Risk',
    title: 'The DAD triad',
    prompt:
      'Security professionals describe attacker goals with the "DAD" triad, which is the mirror image of CIA. A ransomware crew that encrypts your files so no one can open them is attacking which leg of CIA, and which DAD term names that attack?',
    correct:
      'Availability is attacked; the matching DAD term is Destruction (denial/destruction of access)',
    wrong: [
      miss(
        'Confidentiality is attacked; the matching DAD term is Disclosure',
        'Disclosure means data was read by the wrong party. Encryption that locks everyone out is about access, not leaked secrets.',
        'Nothing here says data was read. Ask which property "no one can open the files" actually breaks.',
      ),
      miss(
        'Integrity is attacked; the matching DAD term is Alteration',
        'Alteration means data was changed to be wrong. Encrypted-but-unchanged files are unavailable, not falsified.',
        'The files are not wrong, just unreachable. Map "unreachable" to its CIA leg, then its DAD opposite.',
      ),
      miss(
        'Availability is attacked; the matching DAD term is Disclosure',
        'The availability half is right, but Disclosure is the opposite of confidentiality, not of availability.',
        'You have the right CIA leg. Now pair it with the correct DAD word — D for Destruction, not Disclosure.',
      ),
    ],
    lesson:
      'CIA (Confidentiality, Integrity, Availability) defines what defenders protect; DAD (Disclosure, Alteration, Destruction) names the attacks that break each one. Disclosure breaks confidentiality, Alteration breaks integrity, and Destruction/denial breaks availability. Ransomware’s encryption is a Destruction attack on Availability.',
    source,
    generated: true,
  },
  {
    id: 7607002,
    chapter: 'Security Thinking and Risk',
    title: 'Risk equals likelihood times impact',
    prompt:
      'You rate risks on a 1–5 scale for both likelihood and impact, scoring each risk as likelihood × impact. Risk A is likelihood 5, impact 2. Risk B is likelihood 2, impact 4. Risk C is likelihood 1, impact 5. With a fixed budget, which should you usually address first?',
    correct: 'Risk A (score 10) — it carries the highest likelihood × impact product',
    wrong: [
      miss(
        'Risk C, because its impact of 5 is the most catastrophic single outcome',
        'Impact alone is not risk. C scores only 1 × 5 = 5 because it is very unlikely; ranking by impact ignores half the formula.',
        'Worst-case impact is seductive but incomplete. Multiply by likelihood before you rank.',
      ),
      miss(
        'Risk B, because a moderate likelihood and moderate impact is the most "balanced" threat',
        'B scores 2 × 4 = 8, below A’s 10. "Balanced" is not a prioritization criterion; the product is.',
        'Compute each product. The highest number wins, not the most even-looking pair.',
      ),
      miss(
        'All three equally, since every identified risk deserves the same treatment',
        'Equal treatment defeats the purpose of a risk register, which exists precisely to rank scarce effort.',
        'A register’s whole job is to sort. Equal-everything is the opposite of prioritizing.',
      ),
    ],
    lesson:
      'Risk is commonly estimated as likelihood × impact, so a high-probability medium-harm event can outrank a rare catastrophe. This is why teams patch the boring, common weaknesses (reused passwords, missing MFA) before chasing exotic nation-state scenarios — the math points to the everyday exposures first.',
    source,
    generated: true,
  },
  {
    id: 7607003,
    chapter: 'Security Thinking and Risk',
    title: 'Four ways to treat a risk',
    prompt:
      'A small firm decides the risk of a customer-data breach is too costly to simply accept, so it buys cyber-insurance to cover the financial loss if one happens. In risk-management terms, which treatment is this?',
    correct: 'Risk transfer — shifting the financial consequence to a third party',
    wrong: [
      miss(
        'Risk avoidance — eliminating the activity that creates the risk',
        'Avoidance would mean not handling customer data at all. The firm still holds the data; it only moved the financial fallout.',
        'Avoidance stops doing the risky thing. They kept doing it and offloaded the cost instead.',
      ),
      miss(
        'Risk mitigation — adding controls to lower likelihood or impact',
        'Insurance adds no technical control and does not reduce the chance of a breach; it pays out after one.',
        'Mitigation changes the odds or the damage. A policy that pays you back changes neither — it relocates the cost.',
      ),
      miss(
        'Risk acceptance — formally choosing to live with the risk as-is',
        'Acceptance means taking no action and absorbing any loss yourself. Buying insurance is an action that moves the loss elsewhere.',
        'Acceptance does nothing and eats the loss. Here they spent money to push the loss onto an insurer.',
      ),
    ],
    lesson:
      'The four classic risk treatments are avoid, mitigate (reduce), transfer, and accept. Insurance and outsourcing transfer the financial consequence to a third party but rarely remove the underlying exposure — and never the reputational or notification duties — so transfer usually sits alongside mitigation, not instead of it.',
    source,
    generated: true,
  },
  {
    id: 7607004,
    chapter: 'Security Thinking and Risk',
    title: 'Security through obscurity',
    prompt:
      'A team leaves a database reachable on the internet with no password, reasoning "nobody knows the address, so nobody will find it." Why is this a weak security posture?',
    correct:
      'It relies on secrecy of location rather than a real control; automated scanners constantly map the whole internet, so the "secret" address offers no protection',
    wrong: [
      miss(
        'It is fine as long as the address is a long, random string that is hard to type',
        'Length of an address does not stop mass scanning, leaked logs, or referrer headers; the data still has no authentication.',
        'The flaw is the missing lock, not the length of the address. Ask what actually authenticates a request.',
      ),
      miss(
        'It is acceptable because hiding details from attackers is a recognized primary defense',
        'Hiding details can be a minor layer, but using obscurity as the only control is the classic anti-pattern, not a primary defense.',
        'Obscurity may add a thin layer at best. The problem is treating it as the whole defense with no access control.',
      ),
      miss(
        'It is secure because internal databases are never indexed by search engines',
        'Specialized scanners and device search engines index exposed services continuously, regardless of mainstream search engines.',
        'Plenty of tools catalog open services on the public internet. "Not in a search engine" is not the same as hidden.',
      ),
    ],
    lesson:
      'Obscurity (a hidden URL, a non-standard port, an undocumented endpoint) can be a thin extra layer but is never a substitute for a real control like authentication, authorization, or encryption. Attackers run continuous internet-wide scans, so an unauthenticated service is effectively public the moment it is exposed.',
    source,
    generated: true,
  },
  {
    id: 7607005,
    chapter: 'Security Thinking and Risk',
    title: 'Inherent versus residual risk',
    prompt:
      'Before adding any controls, a process has a high chance of a damaging error. After you add MFA, monitoring, and approvals, a smaller chance remains. What is the name for the risk that is left over after controls are applied?',
    correct: 'Residual risk — the exposure that remains once controls are in place',
    wrong: [
      miss(
        'Inherent risk — the exposure before any controls are applied',
        'Inherent risk is the "before" number. The question asks for the leftover after controls, which is a different term.',
        'Inherent is the starting, control-free risk. You want the word for what survives your controls.',
      ),
      miss(
        'Zero risk — controls have eliminated the exposure entirely',
        'Controls reduce risk but essentially never drive it to zero; assuming zero is itself a dangerous belief.',
        'Good controls shrink risk, they do not erase it. There is always some remainder — name it.',
      ),
      miss(
        'Accepted risk — the portion leadership has formally signed off on',
        'Accepting risk is a decision about residual risk, not a synonym for it; residual risk exists whether or not it is accepted.',
        'Acceptance is what you do about the remainder. The remainder itself has its own name.',
      ),
    ],
    lesson:
      'Inherent risk is the exposure with no controls; residual risk is what remains after controls. Leadership then decides whether the residual risk is low enough to accept. Naming residual risk explicitly keeps teams honest that no control set reaches zero, and forces a conscious accept-or-reduce decision.',
    source,
    generated: true,
  },
  {
    id: 7607006,
    chapter: 'Security Thinking and Risk',
    title: 'Defense in depth',
    prompt:
      'An organization uses email filtering, endpoint protection on laptops, least-privilege accounts, network segmentation, and offline backups — so that no single failure causes a breach. Which design principle does this layered approach embody?',
    correct: 'Defense in depth — multiple independent layers so one control’s failure is caught by another',
    wrong: [
      miss(
        'Single point of failure — concentrating protection in one strong control',
        'A single point of failure is the problem this design avoids, not the principle it follows.',
        'You have several layers here, not one. That is the opposite of a single chokepoint.',
      ),
      miss(
        'Security through obscurity — hiding the system so attackers cannot find it',
        'Nothing here depends on hiding anything; the layers are real, active controls.',
        'No secrets-as-defense appear. The point is stacking real controls, not concealing them.',
      ),
      miss(
        'Implicit trust — assuming anything already inside the network is safe',
        'Implicit trust is a flaw zero-trust fixes; this scenario deliberately distrusts any single layer.',
        'These layers exist because the team does not trust any one of them alone. That is the reverse of implicit trust.',
      ),
    ],
    lesson:
      'Defense in depth layers independent controls so a single bypass does not equal a breach — phishing that beats the email filter still meets endpoint protection, least privilege, segmentation, and recoverable backups. Each layer buys detection time and shrinks blast radius even when an earlier layer fails.',
    source,
    generated: true,
  },
  {
    id: 7607007,
    chapter: 'Security Thinking and Risk',
    title: 'Threat actor motivations',
    prompt:
      'A disgruntled employee with legitimate access copies sensitive files on their way out the door to harm the company. In threat-modeling terms, this is best classified as which kind of threat?',
    correct: 'An insider threat — a trusted party misusing authorized access',
    wrong: [
      miss(
        'An advanced persistent threat (APT) — a stealthy, well-resourced external group',
        'APTs are external, long-dwell intruders. This actor already has legitimate access and is acting on their own.',
        'APT describes patient outside attackers. This person works there and is already inside the trust boundary.',
      ),
      miss(
        'A script kiddie — an unskilled attacker reusing others’ tools',
        'Skill level is irrelevant here; the defining trait is authorized access being abused, not borrowed exploits.',
        'The label hinges on where the actor sits, not their skill. They had real credentials, not a downloaded exploit.',
      ),
      miss(
        'A supply-chain threat — compromise arriving through a third-party vendor',
        'No vendor or third-party software is involved; the danger comes from an internal employee directly.',
        'Supply chain means risk delivered via a partner. This risk is home-grown, from your own staff.',
      ),
    ],
    lesson:
      'Insider threats — malicious or merely negligent — are dangerous because the person already holds legitimate access, so many perimeter defenses never trigger. This is why least privilege, prompt offboarding, separation of duties, and monitoring of sensitive data access matter as much as keeping outsiders out.',
    source,
    generated: true,
  },
  // ---------------- Chapter 2: Phishing, Social Engineering, and Credential Theft ----------------
  {
    id: 7607008,
    chapter: 'Phishing, Social Engineering, and Credential Theft',
    title: 'Why BEC tops the loss charts',
    prompt:
      'According to the FBI’s IC3 2024 Internet Crime Report, business email compromise (BEC) caused roughly $2.77 billion in reported losses, near the top of the dollar rankings, despite a relatively modest complaint count. What best explains why BEC produces such large losses?',
    correct:
      'It targets high-value financial transactions (wire transfers, vendor payments) using legitimate-looking email, so single successful frauds move large sums',
    wrong: [
      miss(
        'It infects thousands of computers with malware that quietly drains small amounts from each',
        'BEC generally uses no malware at all; it is social engineering aimed at a few large payments, not mass micro-theft.',
        'BEC is about convincing a human to send one big payment, not silently skimming many machines.',
      ),
      miss(
        'It exploits an unpatched flaw in email servers to bypass all authentication',
        'BEC rarely relies on a technical exploit; the email is usually genuine-looking and the human is the vulnerability.',
        'There is no clever zero-day here. The "exploit" is trust and urgency, not a server bug.',
      ),
      miss(
        'It is the single most frequently reported crime, so volume alone drives the dollar total',
        'BEC is not the most-reported crime; phishing complaints are far more numerous. Its dollar dominance comes from large per-incident losses.',
        'Look at losses per case, not case count. Few incidents, each very expensive.',
      ),
    ],
    lesson:
      'BEC is consistently among the costliest cybercrimes by dollar loss precisely because it skips malware and aims a believable email at someone who can authorize a large payment. The defense is process, not just filtering: verify any payment or bank-detail change through an independent, pre-known channel before money moves.',
    source,
    generated: true,
  },
  {
    id: 7607009,
    chapter: 'Phishing, Social Engineering, and Credential Theft',
    title: 'Spear phishing versus whaling',
    prompt:
      'An attacker crafts a personalized email to the CFO specifically, referencing a real upcoming acquisition to request an urgent confidential wire. This narrowly targeted attack on a senior executive is best called:',
    correct: 'Whaling — spear phishing aimed at a high-value senior executive',
    wrong: [
      miss(
        'Smishing — phishing delivered by SMS text message',
        'Smishing describes the channel (SMS). This attack is email aimed at a top executive, which has its own name.',
        'Smishing is about the medium being a text. Here the channel is email and the target is the boss.',
      ),
      miss(
        'Mass phishing — a generic lure blasted to thousands of recipients',
        'Mass phishing is untargeted and impersonal; this email is researched and aimed at one specific high-value person.',
        'Mass phishing sprays everyone. This is a sniper shot at one executive with custom details.',
      ),
      miss(
        'Pretexting — inventing a false scenario, with no specific target tier',
        'Pretexting is the technique (a fabricated story) and is used here, but the term for targeting an executive specifically is more precise.',
        'A pretext is used, but the question asks for the word describing who is targeted: a "big fish."',
      ),
    ],
    lesson:
      'Spear phishing is any targeted, researched lure aimed at a specific person; whaling is spear phishing aimed at a "big fish" — a CEO, CFO, or other executive whose authority can move money or data. Whaling pairs personalization with executive authority and urgency, which is exactly the recipe behind many BEC wire frauds.',
    source,
    generated: true,
  },
  {
    id: 7607010,
    chapter: 'Phishing, Social Engineering, and Credential Theft',
    title: 'Out-of-band verification done right',
    prompt:
      'You receive an email from your bank warning of "suspicious activity" and asking you to call a number and confirm your account. What is the safest way to verify whether this is real?',
    correct:
      'Ignore the contact details in the message and reach the bank using a number from your card or its official site you looked up independently',
    wrong: [
      miss(
        'Call the phone number printed in the email, since the message provides it for convenience',
        'The number in a phishing message routes to the attacker. Using contacts from inside the suspect message defeats verification.',
        'Never use the message’s own number or link to "check" it. That just calls the scammer.',
      ),
      miss(
        'Reply to the email asking the sender to confirm they are legitimate',
        'A reply reaches whoever sent it; a scammer will happily confirm they are "real." It proves nothing.',
        'Asking the sender if they’re a scammer only reaches the sender. Verify through a channel they do not control.',
      ),
      miss(
        'Click the link to view the alert; if the site uses HTTPS, it is the genuine bank',
        'HTTPS only means the connection is encrypted; criminals routinely obtain valid certificates for lookalike domains.',
        'A padlock proves encryption, not identity. Phishing sites have padlocks too — do not let HTTPS vouch for the sender.',
      ),
    ],
    lesson:
      'Out-of-band verification means confirming through a separate channel the requester does not control — a phone number from your card, a website you typed yourself, a known colleague reached directly. Any link, number, or reply path supplied inside the suspicious message is part of the trap and must never be used to "check" it.',
    source,
    generated: true,
  },
  {
    id: 7607011,
    chapter: 'Phishing, Social Engineering, and Credential Theft',
    title: 'Look-alike domain trickery',
    prompt:
      'An invoice email comes from "billing@rn-supplies.com" while your real vendor is "billing@m-supplies.com". The display name reads "M-Supplies Billing." What technique is most clearly in play, and what should you check?',
    correct:
      'A look-alike (typosquatted) domain — "rn" mimics "m"; inspect the actual domain after the @, not the display name',
    wrong: [
      miss(
        'A compromised real account — the genuine vendor mailbox was hacked, so the domain is authentic',
        'The domain itself differs (rn-supplies vs m-supplies); a compromised account would send from the real domain, not a look-alike.',
        'Compare the letters after the @. They do not match the real vendor, so it is not the real mailbox.',
      ),
      miss(
        'Nothing suspicious — the display name "M-Supplies Billing" confirms the sender’s identity',
        'Display names are free text an attacker sets to anything; they prove nothing about the real sender.',
        'Anyone can type any display name. Trust the domain, never the friendly label in front of it.',
      ),
      miss(
        'A denial-of-service attack — the attacker is flooding billing systems with fake invoices',
        'DoS is about overwhelming availability; a single deceptive invoice email is impersonation, not flooding.',
        'One sneaky invoice is fraud, not a flood. DoS is about volume knocking systems offline.',
      ),
    ],
    lesson:
      'Typosquatting registers domains that read like the real one at a glance — "rn" for "m", "0" for "o", an extra letter, or a different top-level domain. Always read the characters after the @ and treat the display name as untrusted decoration. Domain look-alikes are a core ingredient of vendor-invoice and BEC fraud.',
    source,
    generated: true,
  },
  {
    id: 7607012,
    chapter: 'Phishing, Social Engineering, and Credential Theft',
    title: 'Pretexting and the authority lever',
    prompt:
      'A caller says, "This is Dana from the CEO’s office; he’s in a board meeting and needs you to buy $2,000 in gift cards right now and read me the codes." Which two social-engineering levers are being pulled hardest?',
    correct: 'Authority (invoking the CEO) and urgency (act right now), wrapped in a fabricated pretext',
    wrong: [
      miss(
        'Reciprocity (returning a favor) and scarcity (limited supply)',
        'No favor was given and nothing is described as scarce; the pressure comes from a powerful figure and a deadline.',
        'No favor and no "only 3 left" here. Look at who is named and how fast you are told to act.',
      ),
      miss(
        'Social proof (everyone else is doing it) and liking (the caller is charming)',
        'The call cites no crowd and builds no rapport; it leans on a chain of command and time pressure instead.',
        'Nobody says "your coworkers already did this." The lever is rank plus a clock, not popularity.',
      ),
      miss(
        'Technical exploitation of a software vulnerability in the phone system',
        'This is pure human manipulation; no software flaw is being exploited at all.',
        'There is no hacked phone system — just a story designed to make a person comply quickly.',
      ),
    ],
    lesson:
      'Social engineers exploit predictable human levers — authority, urgency, fear, scarcity, liking, reciprocity, social proof. Gift-card and wire-fraud scripts lean on authority ("the CEO needs this") plus urgency ("right now"). Recognizing the emotional pressure is the cue to slow down and verify through an independent channel.',
    source,
    generated: true,
  },
  {
    id: 7607013,
    chapter: 'Phishing, Social Engineering, and Credential Theft',
    title: 'Reporting beats deleting',
    prompt:
      'A coworker realizes they clicked a phishing link and entered their password before noticing the page was fake. Embarrassed, they consider quietly changing their password and saying nothing. Why is reporting it immediately the better choice?',
    correct:
      'Security can reset sessions, watch for misuse, and warn others who got the same lure; silence lets the attacker operate undetected and leaves teammates exposed',
    wrong: [
      miss(
        'Reporting is unnecessary because changing the password fully reverses any compromise',
        'A stolen password may already be used; attackers can establish persistence or active sessions a self-reset alone will not catch.',
        'A quiet reset may be too late and misses active sessions or tokens. Someone needs to hunt for misuse.',
      ),
      miss(
        'They should wait a day to see if anything bad actually happens before bothering anyone',
        'Waiting hands the attacker free dwell time; the most damage often happens in the first minutes and hours.',
        'Delay is exactly what attackers want. The first hour matters most, so speed beats wait-and-see.',
      ),
      miss(
        'Reporting only matters if the attacker explicitly demands money afterward',
        'Credential theft is reportable regardless of any ransom demand; the access itself is the harm to contain.',
        'The stolen access is the incident. No ransom note is needed for it to count.',
      ),
    ],
    lesson:
      'A blameless reporting culture is a security control. Fast reporting lets responders kill sessions, force resets, monitor the account, and alert others targeted by the same campaign. Punishing or shaming people who report guarantees the next victim stays silent — which is exactly how small clicks become large breaches.',
    source,
    generated: true,
  },
  {
    id: 7607014,
    chapter: 'Phishing, Social Engineering, and Credential Theft',
    title: 'What credential stuffing exploits',
    prompt:
      'After a breached website dumps millions of email-and-password pairs, attackers script automated logins against unrelated services using those exact pairs. The single human habit that makes this "credential stuffing" succeed is:',
    correct: 'Password reuse — the same password used across multiple sites',
    wrong: [
      miss(
        'Using a password manager to store credentials',
        'A password manager actually defeats stuffing by making every password unique; it is a defense, not the cause.',
        'You have it backwards — that tool prevents reuse. Stuffing needs the opposite habit.',
      ),
      miss(
        'Choosing a very long passphrase',
        'Length does not help if the same long passphrase is reused; a strong-but-reused password still gets stuffed.',
        'Even a strong password fails if it is the same everywhere. The flaw is sameness, not weakness.',
      ),
      miss(
        'Logging out of accounts after each session',
        'Logging out is good hygiene and unrelated to whether a leaked pair works on another site.',
        'Session cleanup is irrelevant here. Ask what makes a leaked pair work somewhere it was never used.',
      ),
    ],
    lesson:
      'Credential stuffing replays leaked username/password pairs against other sites, betting that people reuse passwords. Unique passwords per site (via a password manager) make each leak a dead end, and MFA blocks the login even when a correct password is replayed. Reuse is the single behavior that turns one breach into many.',
    source,
    generated: true,
  },
  // ---------------- Chapter 3: Identity and Access ----------------
  {
    id: 7607015,
    chapter: 'Identity and Access',
    title: 'Why passkeys resist phishing',
    prompt:
      'A passkey (FIDO2/WebAuthn) is called "phishing-resistant" even against a perfect fake login page. The core technical reason is:',
    correct:
      'The credential is cryptographically bound to the real site’s origin (domain), so the browser refuses to use it on a look-alike domain and no reusable secret is ever sent',
    wrong: [
      miss(
        'It uses a much longer password that attackers cannot guess in time',
        'A passkey is not a password at all; it is a private key. Resistance comes from origin binding, not from guessing difficulty.',
        'There is no password to guess here. The protection is about which domain the key will talk to.',
      ),
      miss(
        'It sends a six-digit code that expires after thirty seconds',
        'That describes a TOTP authenticator app; those codes can still be relayed to a fake site in real time. Passkeys differ fundamentally.',
        'A short-lived code can be phished by a relay. Passkeys avoid that by checking the domain itself.',
      ),
      miss(
        'It encrypts the password before sending it over HTTPS',
        'Encrypting a reusable secret in transit does nothing if you are handing it to the attacker’s site; passkeys send no reusable secret at all.',
        'Encrypting a secret you give to the wrong site still loses. Passkeys never reveal a reusable secret.',
      ),
    ],
    lesson:
      'FIDO2 = WebAuthn (browser/app API) + CTAP (talks to the authenticator). At registration the private key is bound to the legitimate site’s origin; at sign-in the browser checks the challenge’s origin and refuses a mismatched domain. Because no reusable secret leaves the device, even a pixel-perfect phishing page gets nothing to relay.',
    source,
    generated: true,
  },
  {
    id: 7607016,
    chapter: 'Identity and Access',
    title: 'Ranking MFA factor strength',
    prompt:
      'Rank these MFA second factors from most to least resistant to phishing/interception: (1) hardware security key / passkey, (2) authenticator-app TOTP code, (3) SMS one-time code. Which ordering is correct?',
    correct: 'Hardware key/passkey > authenticator-app TOTP > SMS code',
    wrong: [
      miss(
        'SMS code > authenticator-app TOTP > hardware key/passkey',
        'This is exactly backwards; SMS is the weakest (SIM swap, interception) and hardware keys are strongest.',
        'You inverted it. SMS is the easiest to defeat, not the hardest.',
      ),
      miss(
        'Authenticator-app TOTP > hardware key/passkey > SMS code',
        'TOTP codes can be relayed to a fake site in real time; hardware keys/passkeys resist that, so they rank above TOTP.',
        'TOTP is decent but still phishable by relay. The origin-bound key beats it.',
      ),
      miss(
        'All three are equally strong because each adds a second factor',
        'Adding any second factor helps, but SMS and push are phishable/fatigable while passkeys are not — they are not equivalent.',
        '"Any MFA is the same" is the trap. The factor type changes how phishable it is.',
      ),
    ],
    lesson:
      'Not all MFA is equal. Hardware keys and passkeys are phishing-resistant (origin-bound, nothing reusable to steal). Authenticator-app TOTP is stronger than SMS but can still be relayed by a real-time phishing proxy. SMS is weakest — vulnerable to SIM swaps and interception. Reserve the strongest factor for your highest-value accounts.',
    source,
    generated: true,
  },
  {
    id: 7607017,
    chapter: 'Identity and Access',
    title: 'Number matching versus push bombing',
    prompt:
      'To defend against MFA fatigue ("push bombing"), many systems switched from a simple "Approve/Deny" push to "number matching." How does number matching reduce the attack’s success?',
    correct:
      'It shows a number on the login screen that the user must type into their app, so a reflexive tap on a prompt the user did not initiate cannot approve the login',
    wrong: [
      miss(
        'It limits the user to one login attempt per day regardless of legitimacy',
        'Number matching does not cap daily logins; it forces a deliberate action tying the prompt to the actual login attempt.',
        'No daily quota is involved. The fix is making approval require information only the real login screen shows.',
      ),
      miss(
        'It replaces the password entirely so no second factor is needed',
        'Number matching is still a second factor used with a password; it does not eliminate the first factor.',
        'It is an MFA improvement, not a passwordless replacement. The password still applies.',
      ),
      miss(
        'It encrypts the push notification so attackers cannot read it',
        'The weakness in push bombing is the user reflexively approving, not eavesdropping on notifications; encryption misses the point.',
        'The attack is a careless "yes," not a wiretap. Number matching targets the careless approval.',
      ),
    ],
    lesson:
      'Push bombing spams approval prompts hoping the victim taps "Approve" to make it stop. Number matching breaks this by displaying a code on the genuine login screen that must be entered in the app, so approval requires information only the real, user-initiated login provides — defeating blind or fatigued taps.',
    source,
    generated: true,
  },
  {
    id: 7607018,
    chapter: 'Identity and Access',
    title: 'The recovery-path back door',
    prompt:
      'A team enables strong passkeys on every account but leaves "reset my password / recover account" tied to a personal email that uses only a weak, reused password. Why does this undermine the strong login?',
    correct:
      'An attacker can take over the weak recovery mailbox and trigger a password/recovery reset, bypassing the strong factor entirely',
    wrong: [
      miss(
        'It does not undermine anything, because the passkey still protects the normal login flow',
        'Account security is only as strong as its weakest path in; the recovery flow is an alternate door that ignores the passkey.',
        'Attackers use the easiest door, not the front one. A weak reset path is its own entrance.',
      ),
      miss(
        'It is fine as long as the recovery email also requires a CAPTCHA',
        'A CAPTCHA stops bots, not an attacker who has already taken over the weak mailbox; the reset still proceeds.',
        'CAPTCHA blocks automation, not a human who owns the recovery inbox. The reset still works.',
      ),
      miss(
        'The weakness only matters if the main account has no password at all',
        'The main account can be perfectly protected and still fall, because recovery is a parallel route that does not touch it.',
        'Strength of the main login is irrelevant if a side door resets it. Evaluate every path in.',
      ),
    ],
    lesson:
      'Attackers attack the weakest path, and account recovery is a parallel route that can bypass even strong primary authentication. Securing the front door (passkeys) while leaving a weak recovery email or phone number is a classic gap. Harden recovery paths to match — ideally with the same phishing-resistant factor.',
    source,
    generated: true,
  },
  {
    id: 7607019,
    chapter: 'Identity and Access',
    title: 'Authentication versus authorization',
    prompt:
      'A user logs in successfully with a passkey, then tries to open the payroll folder and is refused. Their identity was confirmed, but the access was denied. Which two distinct concepts does this illustrate?',
    correct:
      'Authentication succeeded (proving who they are) but authorization failed (they lack permission for that resource)',
    wrong: [
      miss(
        'Authentication failed, because the system blocked them',
        'Authentication clearly succeeded — they logged in. The block is about permissions, a separate step.',
        'They got in, so identity was proven. The refusal is about rights, not login.',
      ),
      miss(
        'Authorization succeeded, because they reached the login screen',
        'Reaching a login screen is neither authentication nor authorization; authorization here actually failed when access was denied.',
        'Seeing a login page proves nothing. Authorization is about whether you may use a resource, and here you may not.',
      ),
      miss(
        'Both are the same thing, so the distinction does not matter',
        'They are different gates: who you are versus what you may do. Conflating them hides real access-control bugs.',
        'These are two separate checks. One verifies identity; the other grants or denies specific access.',
      ),
    ],
    lesson:
      'Authentication answers "are you who you claim to be?"; authorization answers "are you allowed to do this?" A user can be fully authenticated yet correctly denied an action under least privilege. Keeping the two ideas separate is essential for reasoning about access control and for diagnosing "logged in but blocked" situations.',
    source,
    generated: true,
  },
  {
    id: 7607020,
    chapter: 'Identity and Access',
    title: 'Separation of duties',
    prompt:
      'To prevent fraud, a finance process requires one employee to create a vendor payment and a different employee to approve it; no single person can do both. Which control principle is this?',
    correct: 'Separation (segregation) of duties — splitting a sensitive task so no one person controls it end to end',
    wrong: [
      miss(
        'Least privilege — giving each person only the access their role needs',
        'Least privilege limits how much access each person has; this control instead splits one transaction across two people.',
        'Least privilege trims each person’s access. Here the point is requiring two different people for one action.',
      ),
      miss(
        'Defense in depth — layering independent controls against one threat',
        'Defense in depth stacks layers against attacks generally; this is the specific practice of dividing a single duty.',
        'Layering is broader. This is the narrower idea of "two-person" control over one task.',
      ),
      miss(
        'Single sign-on — using one login across many systems',
        'SSO is an authentication convenience and has nothing to do with splitting approval authority.',
        'SSO is about logging in once. This control is about who may approve what, not how you log in.',
      ),
    ],
    lesson:
      'Separation of duties splits a sensitive action so collusion would be required to abuse it — the classic "maker/checker" on payments. It limits both fraud and honest error, and pairs naturally with least privilege (minimal access) and dual control on the highest-risk operations like payments, key management, and privileged changes.',
    source,
    generated: true,
  },
  {
    id: 7607021,
    chapter: 'Identity and Access',
    title: 'Just-in-time and standing privilege',
    prompt:
      'An admin needs elevated rights only occasionally. Leaving their account permanently in the "Domain Admins" group creates "standing privilege." Which approach most reduces the risk if that account is later phished?',
    correct:
      'Grant elevated rights just-in-time for a limited window when needed, so the account holds high privilege only briefly',
    wrong: [
      miss(
        'Keep the standing admin rights but make the password longer',
        'A long password does not help once the account is phished or its session is hijacked; the standing privilege is always available to abuse.',
        'Password length will not save a phished account. The problem is that the power is always on.',
      ),
      miss(
        'Share the admin account among the team so usage is spread out',
        'Sharing destroys accountability and multiplies exposure; it makes standing privilege worse, not better.',
        'Shared admin accounts remove traceability and widen the blast radius. That is the opposite of safer.',
      ),
      miss(
        'Disable MFA on the admin account so emergency access is faster',
        'Removing MFA strips a key control from the highest-value account; speed here trades away the main defense.',
        'Stripping MFA from your most powerful account is exactly backwards. Privileged accounts need the strongest factor.',
      ),
    ],
    lesson:
      'Standing privilege means high-power rights sit ready to be abused at any moment a credential is stolen. Just-in-time (JIT) elevation grants admin rights only for a short, approved window, shrinking the time window an attacker could exploit. Combine JIT with strong MFA, logging, and named (never shared) accounts for privileged access.',
    source,
    generated: true,
  },
  // ---------------- Chapter 4: Devices, Networks, and Cloud Basics ----------------
  {
    id: 7607022,
    chapter: 'Devices, Networks, and Cloud Basics',
    title: 'Encryption at rest versus in transit',
    prompt:
      'HTTPS/TLS protects a file while it travels between your browser and a server. Once that file is sitting saved on the server’s disk, which different protection is responsible for keeping it unreadable if the disk is stolen?',
    correct: 'Encryption at rest (e.g., full-disk or storage encryption) protects stored data',
    wrong: [
      miss(
        'HTTPS/TLS continues protecting the file while it sits on disk',
        'TLS only secures data in motion; once written to disk the connection is gone and TLS no longer applies.',
        'TLS guards the journey, not the destination. Stored bytes need a different kind of encryption.',
      ),
      miss(
        'A VPN keeps the stored file encrypted on the server',
        'A VPN protects a network path, not data saved on a disk; it does nothing for files at rest.',
        'A VPN is a tunnel for traffic. It has no role once the file is saved to storage.',
      ),
      miss(
        'A firewall encrypts the file so a stolen disk stays unreadable',
        'Firewalls filter network traffic; they do not encrypt stored data at all.',
        'Firewalls allow or block traffic. They cannot make a stolen disk unreadable — that is encryption’s job.',
      ),
    ],
    lesson:
      'Data has states: in transit (moving) and at rest (stored). TLS/HTTPS protects transit; full-disk or storage encryption protects rest. They are complementary, not interchangeable — a TLS-protected upload still needs at-rest encryption to survive a stolen drive, and an encrypted disk still needs TLS to protect the upload itself.',
    source,
    generated: true,
  },
  {
    id: 7607023,
    chapter: 'Devices, Networks, and Cloud Basics',
    title: 'Shared responsibility across SaaS',
    prompt:
      'Your team uses a SaaS email-and-docs suite. Under the cloud shared-responsibility model for SaaS, which security task is clearly still the customer’s responsibility, not the provider’s?',
    correct:
      'Managing user accounts, access permissions, and your data — e.g., enabling MFA and not over-sharing files',
    wrong: [
      miss(
        'Patching the underlying application servers the SaaS runs on',
        'In SaaS the provider operates and patches the application and infrastructure; that is explicitly their side of the line.',
        'For SaaS the vendor runs the app stack. Your job is who gets in and what they can see.',
      ),
      miss(
        'Securing the physical data center where the servers live',
        'Physical data-center security is always the provider’s responsibility across IaaS, PaaS, and SaaS.',
        'You never run the building. Identity and data config are the parts that stay with you.',
      ),
      miss(
        'Maintaining the operating system of the provider’s servers',
        'In SaaS the provider manages the OS and everything beneath the application; the customer does not touch it.',
        'In SaaS you manage almost nothing in the stack — except your accounts, permissions, and data.',
      ),
    ],
    lesson:
      'Shared responsibility shifts with the service model. The provider always owns the physical data center; as you move IaaS to PaaS to SaaS, the provider takes on more of the stack. But across every model the customer keeps responsibility for identities, access configuration, and their own data — which is why misconfigured sharing and weak MFA are the dominant SaaS risks.',
    source,
    generated: true,
  },
  {
    id: 7607024,
    chapter: 'Devices, Networks, and Cloud Basics',
    title: 'What HTTPS does and does not prove',
    prompt:
      'A phishing site shows a padlock and a valid HTTPS certificate. A colleague says, "It has the lock, so it must be the real, trustworthy company." What is the precise flaw in that reasoning?',
    correct:
      'HTTPS proves the connection is encrypted and the certificate matches the domain you are on — it does not prove the domain belongs to the legitimate organization',
    wrong: [
      miss(
        'There is no flaw; a valid HTTPS certificate is issued only to verified, legitimate companies',
        'Domain-validated certificates merely confirm control of the domain, not the honesty of the operator; scammers obtain them freely.',
        'A cert just proves control of that domain. Criminals control their phishing domains too.',
      ),
      miss(
        'The flaw is that HTTPS slows the site down, which is the real warning sign',
        'HTTPS performance is irrelevant to trust; the actual issue is that encryption is not identity.',
        'Speed is not the point. The issue is confusing "encrypted" with "legitimate."',
      ),
      miss(
        'HTTPS only protects images, so text on the page is still in danger of interception',
        'HTTPS encrypts the entire connection, not just images; the real misunderstanding is equating encryption with trustworthiness.',
        'HTTPS covers the whole page. The misread is thinking a padlock vouches for who runs the site.',
      ),
    ],
    lesson:
      'A padlock means the link is encrypted and you are talking to the domain shown — nothing more. Most phishing sites use HTTPS today. Trust depends on whether the domain itself is the real organization’s, so verify the domain spelling, not the presence of a lock. Encryption protects the conversation, not the identity of who you are conversing with.',
    source,
    generated: true,
  },
  {
    id: 7607025,
    chapter: 'Devices, Networks, and Cloud Basics',
    title: 'Public Wi-Fi and the VPN’s real scope',
    prompt:
      'On cafe Wi-Fi you connect to your company VPN. Which statement most accurately describes what the VPN does for you here?',
    correct:
      'It encrypts your traffic between your device and the VPN endpoint, protecting it from snooping on the local network — but it does not stop malware, phishing, or risky downloads',
    wrong: [
      miss(
        'It scans every file you download for malware before it reaches your device',
        'A VPN is an encrypted tunnel, not antivirus; it inspects nothing and removes no malicious content.',
        'A VPN moves traffic privately; it does not clean it. Malware protection is a separate tool.',
      ),
      miss(
        'It makes phishing websites harmless because your connection is encrypted',
        'Encrypting the path to a phishing site does nothing to stop you handing over credentials once there.',
        'The tunnel still delivers you to the scam site, encrypted. It cannot judge where you are going.',
      ),
      miss(
        'It encrypts the files already stored on your laptop in case it is stolen',
        'A VPN protects data in transit, not data at rest; stored-file protection is full-disk encryption’s job.',
        'Stored files need at-rest encryption. A VPN only guards traffic on the wire.',
      ),
    ],
    lesson:
      'A VPN protects data in transit across an untrusted network — useful on public Wi-Fi against local eavesdropping. It is not antivirus, not anti-phishing, and not at-rest encryption. Modern sites already use HTTPS, so a VPN is one layer, not a cure-all; you still need updates, endpoint protection, and phishing awareness.',
    source,
    generated: true,
  },
  {
    id: 7607026,
    chapter: 'Devices, Networks, and Cloud Basics',
    title: 'Why timely patching matters',
    prompt:
      'A widely used software flaw gets a public security advisory and a fix on the same day. Why does the window right after disclosure tend to be the most dangerous time to remain unpatched?',
    correct:
      'Disclosure tells attackers exactly where the flaw is, and exploit code often spreads within hours to days, so unpatched systems become easy mass targets',
    wrong: [
      miss(
        'Patches always introduce new flaws, so waiting months is safer than applying them',
        'While testing matters, indefinitely deferring critical security patches leaves a known, advertised hole open to mass exploitation.',
        'Deferring forever is the trap named in the syllabus. The known hole is the bigger danger.',
      ),
      miss(
        'Attackers cannot exploit a flaw once a fix exists, so timing is irrelevant',
        'A fix existing does not protect systems that have not applied it; attackers race the patch adoption curve.',
        'A patch only helps machines that install it. Unapplied fixes protect nobody.',
      ),
      miss(
        'The advisory legally prevents attackers from using the flaw',
        'Advisories are informational, not legal shields; publishing details actually aids attackers who move fast.',
        'No advisory stops a criminal. If anything, it hands them a map of the weakness.',
      ),
    ],
    lesson:
      'Public disclosure is a double-edged sword: it lets defenders patch but also tells attackers precisely what to target, and weaponized exploits often appear within hours to days. The faster you patch known-exploited and critical flaws, the smaller the window during which your systems are advertised, vulnerable targets.',
    source,
    generated: true,
  },
  {
    id: 7607027,
    chapter: 'Devices, Networks, and Cloud Basics',
    title: 'Misconfiguration versus exploit',
    prompt:
      'A startup’s customer records leak because a cloud storage bucket was set to "public read" by mistake — no software was hacked. The single best label for this root cause is:',
    correct: 'A cloud misconfiguration — an insecure setting exposed the data, with no exploit needed',
    wrong: [
      miss(
        'A zero-day vulnerability in the cloud provider’s platform',
        'No unknown software flaw was used; the platform worked as configured. The exposure came from the customer’s own setting.',
        'Nothing was hacked. The data was simply set to public by the customer — that is configuration, not a code flaw.',
      ),
      miss(
        'A brute-force attack that guessed the storage password',
        'Public-read needs no password to guess; the data was openly readable by design once the setting was flipped.',
        'There was nothing to brute-force. "Public read" means anyone could just read it.',
      ),
      miss(
        'A denial-of-service attack that overwhelmed the bucket',
        'DoS concerns availability, not a data leak; here data was exposed, not knocked offline.',
        'No flooding occurred. The harm is exposure of data, which points at a setting, not a DoS.',
      ),
    ],
    lesson:
      'Many cloud breaches involve no exploit at all — just an insecure default or a careless permission like a public storage bucket. Under shared responsibility the customer owns these settings, so the defenses are secure defaults, least-privilege access policies, and automated checks that flag publicly exposed resources before attackers find them.',
    source,
    generated: true,
  },
  {
    id: 7607028,
    chapter: 'Devices, Networks, and Cloud Basics',
    title: 'Screen lock and the lost laptop',
    prompt:
      'An employee’s laptop is stolen from a cafe table while still logged in and unlocked. Full-disk encryption is enabled. Why does encryption provide far less protection in this particular scenario?',
    correct:
      'Full-disk encryption protects data when the device is locked/powered off; on an unlocked, running session the disk is already decrypted and accessible',
    wrong: [
      miss(
        'Full-disk encryption never works on laptops, only on phones',
        'Full-disk encryption is standard on laptops; the issue is the device state (unlocked), not the platform.',
        'Laptops support it fine. The weakness is that it was already unlocked, not the hardware.',
      ),
      miss(
        'Encryption was irrelevant because the thief cannot read encrypted data anyway',
        'That assumes the data stays encrypted, but on a live unlocked session it is already decrypted in front of the thief.',
        'On a running, unlocked machine the data is decrypted in use. The thief just keeps using it.',
      ),
      miss(
        'The VPN would have protected the stored files instead',
        'A VPN protects network traffic, not files at rest on a stolen, already-unlocked device.',
        'A VPN does nothing for a stolen unlocked laptop’s local files. Look at device state and screen lock.',
      ),
    ],
    lesson:
      'Full-disk encryption defends data at rest — when the device is powered down or locked, the disk is encrypted and useless to a thief. An unlocked, logged-in session has already decrypted that data, so screen-lock timeouts and prompt locking are what protect a running device. Encryption and screen lock cover different moments and you need both.',
    source,
    generated: true,
  },
  // ---------------- Chapter 5: Malware, Ransomware, and Common Attacks ----------------
  {
    id: 7607029,
    chapter: 'Malware, Ransomware, and Common Attacks',
    title: 'Virus versus worm versus trojan',
    prompt:
      'A piece of malware spreads by itself across a network, copying to new machines with no user action and no host file to attach to. Which malware category does this self-propagation specifically describe?',
    correct: 'A worm — self-replicating malware that spreads on its own without needing a host file or user action',
    wrong: [
      miss(
        'A virus — malware that attaches to a host file and spreads when that file is run',
        'A classic virus needs a host file and usually a user to execute it; the defining trait of self-spreading-without-a-host belongs to a worm.',
        'A virus rides inside another file and waits to be run. This one moves on its own.',
      ),
      miss(
        'A trojan — malware disguised as something desirable that the user installs',
        'A trojan tricks the user into running it and does not self-propagate; this malware spreads automatically.',
        'A trojan needs you to install the "useful" thing. This one needs no user at all.',
      ),
      miss(
        'Spyware — software that secretly collects information',
        'Spyware describes the goal (covert data collection), not the spreading mechanism; self-propagation defines a worm.',
        'Spyware is about what it does (snoop), not how it spreads. The clue is autonomous spreading.',
      ),
    ],
    lesson:
      'Categories overlap by behavior: a virus needs a host file and execution, a worm self-replicates across networks without user action, a trojan masquerades as something wanted, and spyware describes the data-stealing goal. Worms are dangerous because their automatic spread enables rapid, large-scale outbreaks once a single foothold exists.',
    source,
    generated: true,
  },
  {
    id: 7607030,
    chapter: 'Malware, Ransomware, and Common Attacks',
    title: 'Double extortion ransomware',
    prompt:
      'Modern ransomware crews often exfiltrate a copy of the data before encrypting it, then threaten to publish it unless paid. Why does this "double extortion" weaken "we have good backups" as a complete defense?',
    correct:
      'Backups let you restore without paying for decryption, but they do nothing to stop the threatened leak of already-stolen data',
    wrong: [
      miss(
        'Backups become useless because the encryption cannot be reversed without paying',
        'Good immutable backups let you restore without the attacker’s key; the gap is the leak, not the restore.',
        'You can still restore from clean backups. The new leverage is the stolen copy, not the lock.',
      ),
      miss(
        'Double extortion means the attacker encrypts the backups too, so restoring is impossible',
        'That describes attacking the backups, a different problem; double extortion specifically adds the threat to publish stolen data.',
        '"Double" here refers to leak-plus-encrypt, not encrypting your backups. Focus on the publication threat.',
      ),
      miss(
        'It only matters for individuals, since companies are never threatened with leaks',
        'Companies are prime targets for data-leak extortion; reputational and regulatory exposure is exactly the leverage.',
        'Businesses are the main target for leak threats. Customer data exposure is the whole point.',
      ),
    ],
    lesson:
      'Single-extortion ransomware just encrypts, so tested backups defeat it. Double extortion adds data theft and a publication threat, so even a perfect restore does not undo the leak. That is why prevention (least privilege, segmentation, monitoring egress) and encryption of sensitive data matter alongside backups — restoration cannot un-steal data.',
    source,
    generated: true,
  },
  {
    id: 7607031,
    chapter: 'Malware, Ransomware, and Common Attacks',
    title: 'The immutable backup copy',
    prompt:
      'Ransomware operators now actively hunt for and delete or encrypt backups before triggering the main payload. Which single backup property most reliably ensures a recovery copy survives this?',
    correct:
      'Immutability (or air-gap/offline isolation) — a copy that cannot be altered or deleted within the retention window, even with valid credentials',
    wrong: [
      miss(
        'Storing the backup on a faster solid-state drive for quicker restores',
        'Restore speed does not stop deletion; if the attacker can reach and erase the copy, its speed is irrelevant.',
        'Speed helps recovery time, not survival. Ask what stops the attacker from deleting it.',
      ),
      miss(
        'Keeping the backup on the same network share so it is always available',
        'A reachable network share is exactly what ransomware encrypts via lateral movement; availability there is a liability.',
        'Same-network backups are the first thing ransomware reaches. That is the trap, not the fix.',
      ),
      miss(
        'Compressing the backup so it takes less storage space',
        'Compression saves space but provides no protection against an attacker deleting or encrypting the copy.',
        'Smaller is not safer. Compression has nothing to do with surviving deletion.',
      ),
    ],
    lesson:
      'The modern backup mantra extends 3-2-1 (three copies, two media, one offsite) to 3-2-1-1-0: add at least one immutable or air-gapped copy and zero verified errors. Immutability and isolation mean even an attacker with admin credentials cannot rewrite or erase the recovery copy within its retention window — the property that actually survives a backup-hunting ransomware crew.',
    source,
    generated: true,
  },
  {
    id: 7607032,
    chapter: 'Malware, Ransomware, and Common Attacks',
    title: 'Decode the 3-2-1 rule',
    prompt:
      'The classic 3-2-1 backup rule is a quick test for resilient backups. What do the three numbers stand for?',
    correct: 'Keep 3 copies of the data, on 2 different media types, with 1 copy stored offsite',
    wrong: [
      miss(
        'Back up 3 times a day, keep 2 weeks of history, and restore within 1 hour',
        'The 3-2-1 rule describes copies/media/location, not a schedule, retention length, or recovery-time target.',
        'The numbers are about how many copies and where, not a backup timetable.',
      ),
      miss(
        'Use 3 passwords, 2 admins, and 1 encryption key to protect the backup',
        'That invents an access scheme; 3-2-1 is purely about redundancy and physical/location diversity of copies.',
        'It is about copies and locations, not credentials. Think "how many, what media, where."',
      ),
      miss(
        'Store all 3 copies in 2 folders on 1 server for easy access',
        'Putting every copy on one server defeats the rule; the whole point is diverse media and an offsite copy.',
        'One server with everything is exactly what 3-2-1 warns against. Diversity and offsite are the point.',
      ),
    ],
    lesson:
      'The 3-2-1 rule: three copies of the data, on two different media types, with one copy kept offsite. It guards against single points of failure (one disk, one site, one media format). Against ransomware it is extended to 3-2-1-1-0 by adding an immutable/air-gapped copy and verifying zero restore errors.',
    source,
    generated: true,
  },
  {
    id: 7607033,
    chapter: 'Malware, Ransomware, and Common Attacks',
    title: 'Segmentation and blast radius',
    prompt:
      'A flat network lets any compromised laptop reach every server directly. Splitting the network into segments with controlled connections between them primarily limits which property of an attack?',
    correct: 'Blast radius — how far an attacker can spread (lateral movement) once they gain an initial foothold',
    wrong: [
      miss(
        'The likelihood that the initial phishing email succeeds',
        'Segmentation does not change whether the first foothold is gained; it limits what happens afterward.',
        'Segmentation acts after the break-in. It does not stop the click that starts it.',
      ),
      miss(
        'The strength of each user’s password',
        'Network segmentation has nothing to do with password strength; it constrains movement between zones.',
        'Passwords are an identity control. Segmentation is about how far movement can go, not how strong logins are.',
      ),
      miss(
        'The encryption of data while it travels over the internet',
        'In-transit encryption is TLS’s job; segmentation governs which systems can talk to which, not whether traffic is encrypted.',
        'Encryption protects the wire. Segmentation decides who can even reach whom.',
      ),
    ],
    lesson:
      'Once attackers gain a foothold they try to move laterally toward valuable systems. Network segmentation (and least privilege) constrains which systems can reach which, shrinking the blast radius so one compromised device does not equal a compromised everything. It buys defenders time to detect and contain before the spread becomes total.',
    source,
    generated: true,
  },
  {
    id: 7607034,
    chapter: 'Malware, Ransomware, and Common Attacks',
    title: 'Why paying the ransom is no guarantee',
    prompt:
      'Leadership asks whether simply paying the ransom guarantees a clean, full recovery. What is the most accurate caution to give them?',
    correct:
      'Payment does not guarantee a working decryptor, complete data, or deletion of stolen copies — and it funds and incentivizes further attacks',
    wrong: [
      miss(
        'Paying always restores all data perfectly because attackers honor their deals to protect reputation',
        'Decryptors are often buggy or incomplete, and criminals frequently keep or re-sell stolen data despite payment.',
        'Criminals are not reliable vendors. Decryptors fail and "deleted" data often is not.',
      ),
      miss(
        'Paying is risk-free because law enforcement reimburses ransom payments',
        'No such reimbursement exists; in some cases payments to sanctioned entities can even carry legal exposure.',
        'Nobody refunds a ransom. Payment can even create legal risk, not protection.',
      ),
      miss(
        'Paying is unnecessary to discuss because backups make every ransomware recovery instant',
        'Backups help with encryption but not with leaks, and recovery is rarely instant even when backups are good.',
        'Backups address the lock, not the leak, and restoration takes time. The payment question still stands.',
      ),
    ],
    lesson:
      'Paying buys a promise from a criminal, not a guarantee. Decryptors can be slow, partial, or broken; stolen data may still be leaked or sold; and payment funds the ecosystem and marks you as willing to pay. The reliable path is tested, isolated, immutable backups plus prevention — so recovery does not depend on an attacker’s goodwill.',
    source,
    generated: true,
  },
  // ---------------- Chapter 6: Logging, Monitoring, and Detection Basics ----------------
  {
    id: 7607035,
    chapter: 'Logging, Monitoring, and Detection Basics',
    title: 'What a SIEM actually does',
    prompt:
      'A SIEM is deployed to catch attacks that are invisible in any single log. What is the defining capability that makes it useful?',
    correct:
      'It centralizes logs from many sources and correlates events so patterns spanning systems (e.g., failed logins + new admin + odd data transfer) become a single alert',
    wrong: [
      miss(
        'It encrypts all log files so attackers cannot read them',
        'A SIEM’s purpose is aggregation and correlation, not log encryption; encryption is a separate concern.',
        'A SIEM is about seeing patterns across logs, not encrypting them. Think correlation, not confidentiality.',
      ),
      miss(
        'It replaces the need for any human analysts by auto-resolving every alert',
        'SIEMs surface and correlate alerts for humans to triage; they do not eliminate analysts or auto-fix incidents.',
        'A SIEM feeds analysts; it does not replace them. Its job is to gather and connect events.',
      ),
      miss(
        'It physically blocks malicious network traffic like a firewall',
        'Blocking traffic is a firewall/IPS role; a SIEM observes and correlates logs rather than enforcing network rules.',
        'A SIEM watches and connects; firewalls block. Do not confuse detection-by-correlation with traffic enforcement.',
      ),
    ],
    lesson:
      'A SIEM (Security Information and Event Management) centralizes logs from endpoints, servers, identity systems, and the network, then correlates them so multi-step attacks that look harmless in any one log stand out as a single, prioritized alert. It is a detection and investigation aid for analysts — not a firewall, not encryption, and not an autopilot.',
    source,
    generated: true,
  },
  {
    id: 7607036,
    chapter: 'Logging, Monitoring, and Detection Basics',
    title: 'IOC versus IOA precisely',
    prompt:
      'A detection rule flags any process that encrypts hundreds of files in seconds and deletes shadow copies — behavior typical of ransomware mid-attack, regardless of which specific malware it is. Is this rule based on an IOC or an IOA, and why?',
    correct:
      'An IOA (indicator of attack) — it watches for malicious behavior in progress rather than a known artifact like a specific hash or IP',
    wrong: [
      miss(
        'An IOC, because it matches a known malicious file hash from a threat feed',
        'No specific hash is used; the rule keys on behavior, which is the definition of an IOA, not an IOC.',
        'No fixed artifact (hash/IP) appears here. Matching behavior, not a known signature, is an IOA.',
      ),
      miss(
        'An IOC, because any rule that triggers an alert is by definition an indicator of compromise',
        'Not every alert is an IOC; IOC specifically means a known artifact of past compromise, not behavior-based detection.',
        'IOC is a narrow term for known artifacts, not "any alert." Behavior detection is the other category.',
      ),
      miss(
        'Neither, because behavioral rules are not part of detection at all',
        'Behavioral detection is central to modern defense; behavior-based rules are precisely what IOAs describe.',
        'Behavior is very much part of detection — it has a name, and that name is IOA.',
      ),
    ],
    lesson:
      'IOCs (indicators of compromise) are known artifacts — file hashes, malicious IPs/domains — great for catching known threats after they are cataloged. IOAs (indicators of attack) focus on behavior and intent in progress (e.g., mass encryption, shadow-copy deletion), so they can catch novel or unknown threats while the attack is unfolding. Mature detection uses both.',
    source,
    generated: true,
  },
  {
    id: 7607037,
    chapter: 'Logging, Monitoring, and Detection Basics',
    title: 'False positive versus false negative',
    prompt:
      'A detection system labels a perfectly normal payroll batch job as "malicious data exfiltration" and pages the on-call analyst at 3 a.m. In detection terms, this single misclassification is a:',
    correct: 'False positive — benign activity wrongly flagged as malicious',
    wrong: [
      miss(
        'False negative — a real attack the system failed to flag',
        'A false negative is a missed real threat; here the system flagged something, and that something was harmless.',
        'False negative is a miss. This is the opposite: it alerted on harmless activity.',
      ),
      miss(
        'True positive — a real attack correctly detected',
        'True positive requires the activity to actually be malicious; payroll batch jobs are legitimate, so it is not a true positive.',
        'True positive means the threat was real. This alert fired on something benign.',
      ),
      miss(
        'True negative — benign activity correctly left unflagged',
        'A true negative means nothing was flagged; here an alert did fire, so it cannot be a true negative.',
        'True negative is silence on benign activity. An alert went off, so that is not it.',
      ),
    ],
    lesson:
      'The four detection outcomes: true positive (real threat caught), true negative (benign correctly ignored), false positive (benign wrongly alerted), and false negative (real threat missed). Too many false positives cause alert fatigue and burnout; false negatives let real attacks through. Tuning trades one against the other, so both costs must be weighed.',
    source,
    generated: true,
  },
  {
    id: 7607038,
    chapter: 'Logging, Monitoring, and Detection Basics',
    title: 'The cost of closing alerts to clean the queue',
    prompt:
      'Overwhelmed by volume, a junior analyst starts bulk-closing alerts as "false positive" without investigating, just to clear the queue. Beyond the obvious, what is the most serious security consequence?',
    correct:
      'A real attack hidden among the noise gets closed unexamined, becoming a false negative that lets the intrusion proceed undetected',
    wrong: [
      miss(
        'The SIEM will automatically reopen any alert that was a true threat, so nothing is lost',
        'SIEMs do not magically re-validate human-closed alerts; a closed true positive simply stays closed and unaddressed.',
        'No tool un-closes a wrongly dismissed real alert for you. The miss is permanent unless caught.',
      ),
      miss(
        'It improves security because fewer open alerts means a smaller attack surface',
        'Closing alerts changes nothing about the attack surface; it only hides evidence of attacks that may be underway.',
        'Queue length is not attack surface. Hiding alerts hides intrusions, not exposure.',
      ),
      miss(
        'The only downside is a longer queue tomorrow, with no risk to detection',
        'The core risk is precisely to detection: a genuine intrusion gets dismissed and proceeds unnoticed.',
        'The real harm is a missed breach, not a backlog. Ask what happens to a true positive in that pile.',
      ),
    ],
    lesson:
      'Alert fatigue is a security risk, not just a morale one. Reflexively closing alerts to empty the queue converts real detections into false negatives — the intrusion you were warned about proceeds unseen. The fix is tuning to cut genuine noise, prioritization (urgent vs investigate vs likely-noise), and never dismissing alerts unexamined.',
    source,
    generated: true,
  },
  {
    id: 7607039,
    chapter: 'Logging, Monitoring, and Detection Basics',
    title: 'What makes a useful incident ticket',
    prompt:
      'You escalate a suspicious login to the next analyst. Which ticket gives them the most useful starting point for investigation?',
    correct:
      'Timestamp, affected account/asset, source IP and geolocation, what was observed, what you already checked, and current status',
    wrong: [
      miss(
        'Just the words "suspicious login, please investigate" with no further detail',
        'A bare line forces the next analyst to rediscover everything, wasting the most time-sensitive minutes of a response.',
        'No context means starting from scratch. The next person needs your timeline and findings, not a one-liner.',
      ),
      miss(
        'A full copy of every raw log from every system, with no summary or highlighting',
        'Dumping everything with no triage buries the signal; useful tickets summarize indicators and what was already checked.',
        'Everything is as unhelpful as nothing. Summarize the key indicators and steps, do not dump raw firehoses.',
      ),
      miss(
        'Your personal guess about which coworker is probably to blame',
        'Speculating about people derails investigation and poisons a blameless culture; tickets need facts, not accusations.',
        'Blame is not evidence. Record observations and indicators, not theories about who is at fault.',
      ),
    ],
    lesson:
      'A good incident ticket compresses the next analyst’s ramp-up: when, what asset/account, indicators (IPs, hashes, geolocation), what was observed, what you already validated, and current status. It is factual and blameless. Quality tickets are a force multiplier; vague or bloated ones waste the scarcest resource in an incident — time.',
    source,
    generated: true,
  },
  {
    id: 7607040,
    chapter: 'Logging, Monitoring, and Detection Basics',
    title: 'Mean time to detect',
    prompt:
      'A team tracks "mean time to detect" (MTTD) as a key metric. What does lowering MTTD accomplish, and why does it matter?',
    correct:
      'It shortens how long an intruder dwells undetected, shrinking the time available for lateral movement, data theft, and damage before response begins',
    wrong: [
      miss(
        'It measures how long it takes to fully rebuild systems after an incident',
        'That is closer to recovery time; MTTD is specifically about how long until the threat is noticed at all.',
        'MTTD is about noticing, not rebuilding. It clocks detection, not recovery.',
      ),
      miss(
        'It counts the number of alerts generated per day regardless of accuracy',
        'Alert volume is not MTTD; MTTD measures the time gap between compromise and detection.',
        'MTTD is a time, not a count. It tracks the delay before you spot the attack.',
      ),
      miss(
        'It guarantees attacks are prevented before they ever start',
        'Detection is not prevention; MTTD assumes something already happened and measures how fast you saw it.',
        'Detecting is not stopping in advance. MTTD measures speed of noticing, not prevention.',
      ),
    ],
    lesson:
      'Attacker dwell time — the gap between intrusion and detection — directly determines how much harm is done. A low MTTD means faster detection, less lateral movement, and earlier containment. It pairs with mean time to respond (MTTR); together they capture how quickly an organization sees and stops an attack once defenses are breached.',
    source,
    generated: true,
  },
  // ---------------- Chapter 7: Incident Response ----------------
  {
    id: 7607041,
    chapter: 'Incident Response',
    title: 'Containment versus eradication',
    prompt:
      'A workstation is actively spreading malware across the network. You isolate it from the network immediately, but you do not yet wipe it or remove the malware. Which incident-response phase have you just performed, and which still remains?',
    correct:
      'You performed containment (stopping the spread); eradication (removing the malware and root cause) still remains',
    wrong: [
      miss(
        'You performed eradication; containment still remains',
        'Eradication is removing the threat, which has not happened — the malware is still present. Isolating to stop spread is containment.',
        'You have not removed anything yet. Cutting it off the network is the "stop the bleeding" step.',
      ),
      miss(
        'You performed recovery; preparation still remains',
        'Recovery is restoring clean systems to service, which comes later; preparation happens before an incident, not after isolation.',
        'Recovery means restoring service, and preparation is pre-incident. Neither matches "isolated but not cleaned."',
      ),
      miss(
        'You performed lessons learned; identification still remains',
        'Lessons learned is the final retrospective, and identification already occurred when you spotted the spread; isolation is containment.',
        'Identification already happened (you saw the spread), and lessons learned comes last. This step has its own name.',
      ),
    ],
    lesson:
      'The IR lifecycle runs preparation, identification, containment, eradication, recovery, lessons learned (SANS PICERL; NIST groups containment/eradication/recovery). Containment stops the spread (isolate the host); eradication removes the malware and root cause; recovery returns clean systems to service. Containing first buys time without yet destroying the threat — or the evidence.',
    source,
    generated: true,
  },
  {
    id: 7607042,
    chapter: 'Incident Response',
    title: 'Preserve evidence, do not clean up',
    prompt:
      'During a suspected breach, a well-meaning admin deletes the malicious emails and wipes the infected laptop to "get back to work." Why is this a serious mistake during an active incident?',
    correct:
      'It destroys forensic evidence needed to understand scope, root cause, and legal/notification duties — and may erase proof of what attackers accessed',
    wrong: [
      miss(
        'It is not a mistake; removing malware quickly is always the top priority over everything else',
        'Premature cleanup can erase evidence of scope and entry point, leaving the organization blind to what was taken and how.',
        'Speed-cleaning before you understand scope blinds the investigation. Evidence comes before tidy.',
      ),
      miss(
        'The only problem is that wiping takes time better spent on other tasks',
        'The real harm is lost evidence and unknown scope, not the time cost of the wipe.',
        'It is not about minutes spent. It is about permanently losing the record of what happened.',
      ),
      miss(
        'It is fine because backups will contain all the forensic evidence anyway',
        'Routine backups are not forensic images; they rarely capture volatile evidence, attacker artifacts, or precise timelines.',
        'Backups are for restoring data, not preserving attack forensics. They will not reconstruct the intrusion.',
      ),
    ],
    lesson:
      'During an incident, containment must preserve evidence: capture memory and disk images, retain logs and malicious emails, and document a chain of custody before changing anything. Premature "cleanup" can erase how attackers got in, what they touched, and the scope you must legally report — turning a recoverable incident into an unknowable one.',
    source,
    generated: true,
  },
  {
    id: 7607043,
    chapter: 'Incident Response',
    title: 'Notification clocks are already running',
    prompt:
      'An analyst suspects customer personal data may have been exposed but decides to "wait and see if anyone complains" before telling anyone. Why is this delay dangerous beyond the technical risk?',
    correct:
      'Legal and contractual breach-notification deadlines often start when the incident is discovered, so silent waiting can blow regulatory timelines and worsen liability',
    wrong: [
      miss(
        'There is no real downside; notification is optional and can happen whenever convenient',
        'Many laws and contracts impose firm notification windows; missing them brings penalties and liability, so timing is not optional.',
        'Breach notice is frequently mandatory and time-bound. "Whenever" is not a legal option.',
      ),
      miss(
        'The only issue is that the analyst might get personally blamed later',
        'The organizational and legal exposure (missed deadlines, regulatory penalties) dwarfs individual blame, which a blameless culture avoids anyway.',
        'This is about deadlines and duties, not personal blame. The clock is the real problem.',
      ),
      miss(
        'Waiting is correct because you should never report until you are 100% certain of every detail',
        'Notification duties often trigger on reasonable suspicion or discovery, not on perfect certainty; waiting for total proof can breach the deadline.',
        'Certainty is not the trigger; discovery often is. Holding out for perfect proof can miss the window.',
      ),
    ],
    lesson:
      'Breach-notification obligations (regulatory and contractual) frequently start a countdown at discovery, not at proof or convenience. Sitting on a possible data leak can convert a manageable incident into a compliance failure with penalties. Loop in security, legal/privacy, and leadership early so the right people manage the notification clocks.',
    source,
    generated: true,
  },
  {
    id: 7607044,
    chapter: 'Incident Response',
    title: 'First move for a confirmed phishing click',
    prompt:
      'An employee entered their corporate password into a phishing page minutes ago. Which first action best limits damage while preserving the ability to investigate?',
    correct:
      'Reset the password and revoke/terminate the account’s active sessions and tokens, then monitor the account for misuse',
    wrong: [
      miss(
        'Immediately delete the phishing email and the employee’s mailbox to remove the threat',
        'Deleting the evidence destroys the lure and the trail needed to scope the campaign and warn others.',
        'Deleting the email erases evidence and helps no one. Kill the stolen access instead, and keep the proof.',
      ),
      miss(
        'Do nothing yet and wait to confirm whether the attacker actually logs in',
        'Waiting hands the attacker a live window; resetting credentials and sessions is the time-critical containment step.',
        'Waiting gives the attacker free time. The clock favors immediate credential and session revocation.',
      ),
      miss(
        'Reimage the entire company’s laptops before changing any password',
        'A mass reimage is disproportionate and slow; the stolen credential is the immediate exposure to contain first.',
        'That is overkill that ignores the live stolen password. Contain the credential first, scope later.',
      ),
    ],
    lesson:
      'A stolen password is only fully contained when active sessions and tokens are also revoked — many attacks ride an existing session even after a reset. Reset the credential, kill sessions, enable/verify MFA, then watch the account and scope the campaign. Preserve the phishing email as evidence rather than deleting it.',
    source,
    generated: true,
  },
  {
    id: 7607045,
    chapter: 'Incident Response',
    title: 'The blameless post-incident review',
    prompt:
      'After an incident, a manager wants to run the retrospective by identifying which employee to discipline for the original click. Why does the blameless post-incident review reject this framing?',
    correct:
      'Blaming individuals drives future incidents underground; fixing the process (controls, training, defaults) prevents recurrence, which punishment does not',
    wrong: [
      miss(
        'Because no incident is ever any single person’s fault, so accountability never applies anywhere',
        'Blameless review still seeks accountability for fixing systems; its point is process-over-person, not the absence of all responsibility.',
        'Blameless is not "no accountability." It redirects accountability toward fixing the system, not punishing the clicker.',
      ),
      miss(
        'Because employees should be rewarded with bonuses for clicking phishing links',
        'Nothing about blameless review rewards mistakes; it removes fear of punishment for honest reporting, not consequence-free recklessness.',
        'It is about safe reporting, not rewarding errors. Do not confuse "no blame" with "no standards."',
      ),
      miss(
        'Because retrospectives are a waste of time and should be skipped entirely',
        'Blameless reviews are highly valuable; the objection is to the blame framing, not to holding the review.',
        'The review matters a lot. The problem is the blame angle, not the existence of the retro.',
      ),
    ],
    lesson:
      'A blameless post-incident review fixes process, not people. Punishing the person who clicked or reported guarantees the next person hides their mistake, lengthening detection time. The goal is honest root-cause analysis and durable improvements — better defaults, controls, and training — so the same gap cannot be exploited again.',
    source,
    generated: true,
  },
  {
    id: 7607046,
    chapter: 'Incident Response',
    title: 'Who needs to know, and when',
    prompt:
      'A confirmed incident involves possible exposure of regulated customer data. Beyond the security team, which stakeholders most clearly need to be informed early in the response?',
    correct:
      'Legal/privacy, leadership, and (per duties and timelines) affected users and regulators — coordinated, not ad hoc',
    wrong: [
      miss(
        'Only the security team; involving anyone else just causes panic and leaks',
        'Keeping legal, privacy, and leadership out can breach notification duties and leave the organization legally exposed.',
        'Security cannot handle legal deadlines and customer notice alone. Others have non-negotiable roles.',
      ),
      miss(
        'The entire company all at once via a mass email, including unconfirmed details',
        'Broadcasting unverified details company-wide risks misinformation, panic, and tipping off the attacker; communication should be coordinated.',
        'A firehose of unconfirmed info to everyone is the wrong move. Notify the right people in a controlled way.',
      ),
      miss(
        'Only the marketing team, to prepare a press release before anything else',
        'Public messaging matters but cannot precede legal/privacy and leadership coordination and the facts of scope.',
        'PR is downstream of legal and leadership. You do not start with the press release.',
      ),
    ],
    lesson:
      'Incident communication is a controlled, role-based process. Security contains and investigates; legal/privacy assesses notification duties; leadership makes risk decisions; affected users and regulators are notified per timelines. Coordinating who learns what, and when, prevents both under-notification (legal exposure) and chaotic over-sharing (panic, tipped-off attackers).',
    source,
    generated: true,
  },
  // ---------------- Chapter 8: Security Culture and Career Paths ----------------
  {
    id: 7607047,
    chapter: 'Security Culture and Career Paths',
    title: 'Zero trust in one sentence',
    prompt:
      'A company adopts "zero trust." Which statement best captures the core principle, as framed in NIST SP 800-207?',
    correct:
      'Trust is never granted implicitly by network location; every access request is continuously authenticated, authorized, and evaluated per request',
    wrong: [
      miss(
        'Once a device is inside the corporate network, it can be trusted to reach anything',
        'That is the perimeter model zero trust replaces; assuming inside-the-network equals trusted is exactly what it rejects.',
        'You described old perimeter thinking. Zero trust assumes the network is hostile, inside included.',
      ),
      miss(
        'No one is ever allowed to access anything, since nothing can be trusted',
        'Zero trust grants access — it just verifies every request rather than trusting by location; it is not "deny everything."',
        'It is "verify everything," not "block everything." Access still happens, just continuously checked.',
      ),
      miss(
        'Trust is established once at login and then never re-checked for the session',
        'Zero trust calls for continuous, per-request evaluation, not a one-time check that grants lasting implicit trust.',
        'A single login check is the opposite of zero trust. The "always verify" part means continuously.',
      ),
    ],
    lesson:
      'Zero trust’s motto is "never trust, always verify": trust is not granted by being on the network, and every request is authenticated, authorized, and risk-evaluated continuously, with enforcement close to the resource. Microsegmentation and least privilege limit lateral movement, but even inside a small zone each access decision is still made per request.',
    source,
    generated: true,
  },
  {
    id: 7607048,
    chapter: 'Security Culture and Career Paths',
    title: 'Make the secure path the easy path',
    prompt:
      'A policy forces staff to email IT and wait a day to share a file externally, so people quietly use personal cloud links instead, creating shadow IT. What is the most effective security-culture fix?',
    correct:
      'Provide a fast, sanctioned secure-sharing tool so the safe option is also the easy default, removing the incentive to work around it',
    wrong: [
      miss(
        'Add more rules and threaten discipline for anyone caught using personal links',
        'More friction and threats drive the behavior further underground; people route around painful controls rather than comply.',
        'Punishing workarounds without offering an easy alternative just hides them. Fix the friction, not the people.',
      ),
      miss(
        'Block all external sharing entirely with no approved alternative',
        'A total block with no sanctioned path pushes users to riskier shadow IT and harms the business work that needs sharing.',
        'A hard block with no easy yes increases shadow IT. People still need to share; give them a safe way.',
      ),
      miss(
        'Run one extra annual training slide reminding people not to use personal links',
        'A single annual reminder does not change behavior when the sanctioned path stays slow and painful.',
        'One slide a year will not beat daily friction. Behavior follows the path of least resistance, so fix that.',
      ),
    ],
    lesson:
      'Security culture succeeds when the secure choice is the easy, default choice. Friction-heavy policy breeds workarounds (shadow IT) that are riskier than the behavior it tried to stop. Usable secure defaults, fast sanctioned tools, and behavior-changing training beat piling on rules — because people consistently follow the path of least resistance.',
    source,
    generated: true,
  },
  {
    id: 7607049,
    chapter: 'Security Culture and Career Paths',
    title: 'Matching a person to a security lane',
    prompt:
      'A developer loves finding and fixing security bugs in code — input validation, injection flaws, secure design reviews of applications. Which security career lane fits best?',
    correct: 'Application security (AppSec) — securing software through code review, testing, and secure design',
    wrong: [
      miss(
        'GRC (governance, risk, and compliance) — policy, frameworks, and audits',
        'GRC is policy and audit work, not hands-on code; this person’s strengths are in software security specifically.',
        'GRC is paperwork-and-frameworks. This person wants to be in the code, which is a different lane.',
      ),
      miss(
        'SOC analyst (blue team) — monitoring alerts and triaging incidents',
        'SOC work centers on detection and response in operations, not on reviewing and fixing application code.',
        'SOC is alerts and incidents. The described joy is fixing code flaws, which points elsewhere.',
      ),
      miss(
        'Physical security — badges, cameras, and facility access',
        'Physical security concerns buildings and access control, unrelated to securing software code.',
        'Doors and cameras are not code. This skill set maps to securing applications, not facilities.',
      ),
    ],
    lesson:
      'Security has many lanes: SOC/blue team (detection and response), GRC (policy, risk, audit), cloud security, identity, incident response, and application security (AppSec). AppSec secures software via code review, testing, threat modeling, and secure design — the natural home for a developer who enjoys finding and fixing security bugs in code.',
    source,
    generated: true,
  },
  {
    id: 7607050,
    chapter: 'Security Culture and Career Paths',
    title: 'Not every security job needs deep coding',
    prompt:
      'A career-switcher with a background in audit and policy worries they "can’t do security" because they are not a programmer. Which response is most accurate?',
    correct:
      'Several lanes — especially GRC, security awareness, and parts of identity and risk — rely on policy, communication, and process skills more than deep coding',
    wrong: [
      miss(
        'They are right; every security role requires advanced programming and exploit development',
        'Many high-value roles (GRC, risk, awareness, compliance) center on process and communication, not exploit writing.',
        'Security is broader than hacking code. Whole lanes run on policy, audit, and communication.',
      ),
      miss(
        'They should first become a senior software engineer for several years before any security role',
        'That detour is unnecessary for policy- and process-oriented lanes where their audit background is directly relevant.',
        'No engineering apprenticeship is required for GRC or risk work. Their existing skills already transfer.',
      ),
      miss(
        'Security skills are irrelevant to their audit background, so they should start over completely',
        'Audit, controls, and policy experience map directly onto GRC and compliance; it is an asset, not a reset.',
        'Their audit experience is a head start in GRC, not a dead end. Build on it, do not discard it.',
      ),
    ],
    lesson:
      'Cybersecurity is a wide field, and the stereotype that every role demands deep coding is false. GRC, risk, compliance, security awareness, and parts of identity reward policy, communication, audit, and process skills. Career-switchers should map existing strengths to the lane that fits, then add targeted technical depth — not assume coding is a gatekeeper everywhere.',
    source,
    generated: true,
  },
  {
    id: 7607051,
    chapter: 'Security Culture and Career Paths',
    title: 'The three habits that matter most',
    prompt:
      'Asked to give a non-technical colleague the three personal habits that prevent the most real-world account compromise, which set is the strongest advice?',
    correct:
      'Use unique passwords via a password manager, turn on strong MFA (ideally a passkey), and slow down to verify unexpected urgent requests',
    wrong: [
      miss(
        'Change your password every 30 days, avoid all public Wi-Fi forever, and never click any link',
        'Forced frequent rotation tends to weaken passwords, total Wi-Fi avoidance is impractical, and "never click anything" is unworkable advice.',
        'Frequent rotation and total avoidance are outdated or impractical. Aim at unique passwords, MFA, and verifying.',
      ),
      miss(
        'Install five antivirus programs, hide your laptop, and refuse to use any cloud services',
        'Multiple antivirus tools conflict, hiding hardware is not a control, and refusing cloud is neither practical nor the highest-impact habit.',
        'More antivirus and avoiding the cloud is not the high-impact trio. Focus on identity hygiene and verification.',
      ),
      miss(
        'Memorize one very strong password and reuse it everywhere so you never forget it',
        'Reuse is the exact habit that turns one breach into many via credential stuffing; uniqueness is the whole point.',
        'Reusing even a strong password is the core mistake. Unique-per-site plus a manager is the real advice.',
      ),
    ],
    lesson:
      'For non-specialists, the highest-leverage habits are: unique passwords (a password manager makes this effortless), strong phishing-resistant MFA such as a passkey on important accounts, and a verify-before-acting reflex on unexpected urgent requests. These three counter credential stuffing, account takeover, and social engineering — the attacks people actually lose to.',
    source,
    generated: true,
  },
  {
    id: 7607052,
    chapter: 'Security Culture and Career Paths',
    title: 'Awareness training that changes behavior',
    prompt:
      'A company’s entire security-awareness program is one mandatory slide deck employees click through once a year. Why is this widely considered ineffective, and what works better?',
    correct:
      'One-off annual training does not durably change behavior; frequent, realistic, role-relevant practice (e.g., simulated phishing with coaching) and easy reporting work better',
    wrong: [
      miss(
        'It is actually ideal, because annual compliance training is proven to eliminate phishing risk',
        'No single annual slide deck eliminates phishing risk; behavior change requires repeated, contextual reinforcement.',
        'A yearly click-through does not erase risk. Lasting change needs frequent, realistic reinforcement.',
      ),
      miss(
        'The only problem is that the slides are not long enough; a four-hour deck would fix it',
        'Length is not the issue; passive, infrequent content fails regardless of duration. Frequency and realism matter more.',
        'Longer is not better. The flaw is "once a year and passive," not "too short."',
      ),
      miss(
        'Training is pointless, so the budget should be spent only on technical controls',
        'Effective training measurably reduces successful attacks; the fix is better training, not abandoning the human layer.',
        'Do not abandon the human layer — improve it. Good training works; bad once-a-year training does not.',
      ),
    ],
    lesson:
      'Security-awareness training changes behavior only when it is frequent, realistic, and role-relevant — simulated phishing with immediate coaching, short reinforcement, and a culture that makes reporting easy and blame-free. A single annual slide satisfies a checkbox but not the goal; people learn by practicing the safe action in realistic situations.',
    source,
    generated: true,
  },
])
