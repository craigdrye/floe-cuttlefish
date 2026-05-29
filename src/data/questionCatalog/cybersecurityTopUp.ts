import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]
const source = 'Floe cybersecurity top-up'

export const cybersecurityTopUpQuestions: Question[] = makeQuestionBank('Career Skills', [
  // ---------------- Chapter 1: Security Thinking and Risk ----------------
  {
    id: 7314000,
    chapter: 'Security Thinking and Risk',
    title: 'Which leg of the triad',
    prompt:
      'A typo in a finance system silently changes a customer’s account balance, but the data is still readable and the system stays online. Which part of the CIA triad has been damaged?',
    correct: 'Integrity — the data is no longer accurate or trustworthy',
    wrong: [
      miss(
        'Confidentiality — someone unauthorized has read the data',
        'Nothing in the scenario says an unauthorized party viewed the data; the balance was altered, not disclosed.',
        'Confidentiality is about who can read data. Ask instead whether the data is still correct.',
      ),
      miss(
        'Availability — users cannot reach the system',
        'The system "stays online" and the data is "still readable," so access is intact.',
        'Availability is about uptime and access. Re-read: the harm here is that a value is wrong.',
      ),
      miss(
        'None — the data is still readable, so nothing is wrong',
        'Readable does not mean correct. A confidently wrong balance is exactly the failure mode integrity protects against.',
        'Integrity protects accuracy, not just access. A readable-but-wrong record is a clear integrity loss.',
      ),
    ],
    lesson:
      'The CIA triad splits security harm into three questions: was data exposed (confidentiality), was it altered or corrupted (integrity), or was access lost (availability)? An accuracy failure with no exposure and no downtime is purely an integrity problem.',
    source,
    generated: true,
  },
  {
    id: 7314001,
    chapter: 'Security Thinking and Risk',
    title: 'Threat, vulnerability, or risk',
    prompt:
      'A laptop runs an operating system that stopped receiving security updates last year. In precise security terms, the unpatched, end-of-life OS is best described as:',
    correct: 'A vulnerability — a weakness that something could exploit',
    wrong: [
      miss(
        'A threat — the thing that could cause harm',
        'A threat is the actor or event (a hacker, malware, a flood). The unpatched OS is the weakness they could use, not the actor itself.',
        'A threat is who or what could attack. The OS is the weak spot — that is the vulnerability.',
      ),
      miss(
        'A risk — the exposure once likelihood and impact are combined',
        'Risk is the combination of a threat exploiting a vulnerability and the resulting impact. The OS alone is only one ingredient.',
        'Risk = threat × vulnerability × impact. By itself the weak OS is just the vulnerability part.',
      ),
      miss(
        'A control — something that reduces exposure',
        'A control reduces risk (a firewall, a patch). An unpatched OS is the opposite of a control.',
        'Controls reduce harm. An out-of-date OS adds weakness, so it is a vulnerability, not a control.',
      ),
    ],
    lesson:
      'Precision matters: a vulnerability is a weakness, a threat is something that could exploit it, and risk is the resulting exposure (likelihood × impact). Mixing these up leads to muddled prioritization.',
    source,
    generated: true,
  },
  {
    id: 7314002,
    chapter: 'Security Thinking and Risk',
    title: 'Ranking the risk register',
    prompt:
      'You are prioritizing a risk register with limited budget. Two risks: (A) a rare, sophisticated nation-state attack that would be catastrophic; (B) employees reusing weak passwords, which is common and has already caused one incident. Where should you focus first?',
    correct:
      'Risk B first — high likelihood plus demonstrated impact usually outranks a low-likelihood scenario',
    wrong: [
      miss(
        'Risk A first, because the worst-case impact is the largest',
        'Impact alone does not set priority; a catastrophic but extremely unlikely event can be a poor use of a small budget versus a frequent, proven one.',
        'Risk combines likelihood and impact. A rare catastrophe can rank below a common, recurring loss.',
      ),
      miss(
        'Whichever risk is technically more interesting to fix',
        'Interest is not a risk factor. Prioritization should follow likelihood × impact, not novelty.',
        'Sort by likelihood × impact, not by what is fun. The boring, frequent risk often wins.',
      ),
      miss(
        'Neither — small organizations cannot meaningfully reduce either risk',
        'Password reuse is one of the most fixable risks (passwords managers, MFA), so this is defeatist and false.',
        'Many high-likelihood risks are cheap to reduce. Defeatism is not a risk-management strategy.',
      ),
    ],
    lesson:
      'Risk prioritization weighs likelihood against impact. Defenders routinely overspend on dramatic, rare scenarios while ignoring high-frequency, already-demonstrated risks like password reuse that are both likely and cheap to fix.',
    source,
    generated: true,
  },

  // ------ Chapter 2: Phishing, Social Engineering, and Credential Theft ------
  {
    id: 7314003,
    chapter: 'Phishing, Social Engineering, and Credential Theft',
    title: 'Vendor changed its bank',
    prompt:
      'An email from a long-time vendor says their bank account has changed and the next invoice should be wired to a new number. The email looks normal. What is the correct verification step?',
    correct:
      'Call the vendor on a known, previously trusted number (not one from the email) to confirm the change',
    wrong: [
      miss(
        'Reply to the email asking them to confirm the new account',
        'If the mailbox is compromised or spoofed, the attacker answers your reply and confirms their own fraud.',
        'Verify out-of-band. Replying to the same channel just asks the attacker to vouch for themselves.',
      ),
      miss(
        'Call the phone number printed in the new email signature',
        'Attackers supply their own phone number precisely so a "verification call" reaches them. Use a number you already trusted.',
        'Never use contact details from the suspicious message. Use a number you already had on file.',
      ),
      miss(
        'Pay it — the relationship is long-standing, so the request is trustworthy',
        'Business email compromise targets exactly these trusted relationships; the trust is the attack vector, not a safety check.',
        'A trusted relationship is what BEC exploits. Confirm the change through a separate channel before paying.',
      ),
    ],
    lesson:
      'Business email compromise (BEC) and vendor/invoice fraud are among the costliest cybercrimes by dollar loss because the email looks legitimate. The defense is out-of-band verification: confirm any payment or bank-detail change using a contact you already trusted, never one supplied in the message.',
    source,
    generated: true,
  },
  {
    id: 7314004,
    chapter: 'Phishing, Social Engineering, and Credential Theft',
    title: 'The poster with a QR code',
    prompt:
      'A printed notice appears in the office break room: "Scan this QR code to confirm your payroll details before Friday." What is the safest interpretation?',
    correct:
      'It may be QR-code phishing ("quishing") — verify payroll only through the official, known system',
    wrong: [
      miss(
        'QR codes are images, so they cannot be malicious',
        'A QR code just encodes a URL; it can point to a credential-harvesting site exactly like a malicious link.',
        'A QR code is just a link in disguise. The destination can be a phishing page.',
      ),
      miss(
        'Scan it quickly because the Friday deadline shows it is official',
        'Urgency and deadlines are classic social-engineering pressure, not proof of legitimacy.',
        'Manufactured urgency is a red flag, not a credential. Slow down and verify the source.',
      ),
      miss(
        'It is safe because it is printed on paper inside the office',
        'Anyone can print and tape up a poster; physical placement is not authentication. Quishing often uses printed codes for this reason.',
        'A printed poster proves nothing about who made it. Confirm through the real payroll system.',
      ),
    ],
    lesson:
      'A QR code is simply an encoded URL, so "quishing" can deliver the same credential-harvesting pages as a phishing link — and printed codes bypass email filters entirely. Treat any QR code asking for credentials or payment with the same suspicion as an unexpected link, and verify through known channels.',
    source,
    generated: true,
  },
  {
    id: 7314005,
    chapter: 'Phishing, Social Engineering, and Credential Theft',
    title: 'How a breach reaches your account',
    prompt:
      'A shopping site you used is breached and its password list leaks. Days later, attackers log into your unrelated email account. Which attack most likely connected the two?',
    correct:
      'Credential stuffing — attackers replayed the leaked password against other sites where you reused it',
    wrong: [
      miss(
        'A brute-force attack that guessed your email password from scratch',
        'Brute force guesses blindly and is slow against strong passwords; the timing right after a leak points to a reused-credential replay instead.',
        'A leak followed by a clean login points to reuse, not blind guessing. Think reused credentials.',
      ),
      miss(
        'A denial-of-service attack on your email provider',
        'Denial of service knocks a service offline; it does not log into an account. Nothing here is about downtime.',
        'Denial of service is about availability, not account takeover. The harm here was a successful login.',
      ),
      miss(
        'The email provider itself was the site that got breached',
        'The scenario says an unrelated shopping site leaked; the email login succeeded only because the same password was reused there.',
        'The breach was elsewhere. The link is that the same password worked on your email too.',
      ),
    ],
    lesson:
      'Credential stuffing takes username/password pairs leaked from one breach and automatically tries them on many other services, succeeding wherever people reused the password. Unique passwords (via a password manager) and MFA break the chain.',
    source,
    generated: true,
  },

  // ---------------- Chapter 3: Identity and Access ----------------
  {
    id: 7314006,
    chapter: 'Identity and Access',
    title: 'The phone that will not stop buzzing',
    prompt:
      'At 2 a.m. your phone receives a stream of "Approve this login?" push notifications you did not start. They keep coming. What is happening and what should you do?',
    correct:
      'It is an MFA fatigue (push bombing) attack — deny every prompt and report that your password is likely compromised',
    wrong: [
      miss(
        'A harmless glitch — approve one so the notifications stop',
        'Approving even one grants the attacker access; "make it stop" is exactly the reaction the attack is engineering.',
        'The flood is the attack. Approving one is how it wins — deny them all and report it.',
      ),
      miss(
        'Proof MFA is working perfectly, so no action is needed',
        'The prompts mean an attacker already has your password and is trying the second factor; that demands action, not reassurance.',
        'Unexpected prompts mean your password is already in the wrong hands. That needs a response.',
      ),
      miss(
        'Turn off MFA so the prompts stop arriving',
        'Disabling MFA removes your last barrier and hands the attacker the account once they have the password.',
        'Removing MFA helps the attacker, not you. Keep it on, deny the prompts, and rotate the password.',
      ),
    ],
    lesson:
      'MFA fatigue (a.k.a. push bombing) floods a victim with approval prompts after stealing their password, betting they will approve one to make it stop — the tactic used in the 2022 Uber breach. Deny all prompts, change the password, and report it; phishing-resistant factors like passkeys defeat this entirely.',
    source,
    generated: true,
  },
  {
    id: 7314007,
    chapter: 'Identity and Access',
    title: 'Which second factor resists phishing',
    prompt:
      'Your team wants MFA that an attacker cannot defeat even with a convincing fake login page. Which option is genuinely phishing-resistant?',
    correct: 'A FIDO2/WebAuthn security key or passkey bound to the real site’s domain',
    wrong: [
      miss(
        'A 6-digit code from an authenticator app, typed into the login page',
        'A victim can be tricked into typing that code into a fake page in real time, so it is phishable despite being better than SMS.',
        'If you can type the code into a page, you can be tricked into typing it into a fake one.',
      ),
      miss(
        'A one-time code sent by SMS text message',
        'SMS codes are phishable and also vulnerable to SIM-swap interception; they are the weakest common second factor.',
        'SMS codes can be phished or SIM-swapped. Convenience, not phishing resistance.',
      ),
      miss(
        'A push notification you tap "Approve" on',
        'Push approvals are phishable via real-time relay and are the target of MFA-fatigue attacks; tapping Approve is a human decision an attacker can engineer.',
        'A tap-to-approve still relies on a human decision an attacker can trigger. Not phishing-resistant.',
      ),
    ],
    lesson:
      'Phishing-resistant MFA (FIDO2/WebAuthn keys and passkeys) cryptographically binds the login to the genuine site’s domain, so a credential sent to a look-alike domain simply fails — no user decision can leak it. Codes, SMS, and push approvals can all be relayed to a fake page in real time.',
    source,
    generated: true,
  },
  {
    id: 7314008,
    chapter: 'Identity and Access',
    title: 'What recovery codes are for',
    prompt:
      'When you enable MFA, the service shows a set of one-time "backup" recovery codes. What is their purpose and how should you treat them?',
    correct:
      'They let you regain access if you lose your second factor — store them securely offline, like a spare key',
    wrong: [
      miss(
        'They are throwaway test codes you can ignore and close',
        'They are your fallback if your phone or key is lost; ignoring them can lock you out permanently.',
        'These are your spare key, not test data. Losing them can mean losing the account.',
      ),
      miss(
        'They replace your password, so you no longer need one',
        'Recovery codes supplement MFA recovery; they do not replace your primary credential.',
        'They are a backup factor, not a password replacement. The password still matters.',
      ),
      miss(
        'They should be pasted into a shared team chat so everyone has them',
        'Putting them in chat makes them readable by anyone in the channel now or later — a direct bypass of your MFA.',
        'Anything in chat can be read by others. Recovery codes belong somewhere private and offline.',
      ),
    ],
    lesson:
      'Recovery (backup) codes are single-use keys that let you back into an account if you lose your authenticator. Store them somewhere secure and offline — a password manager’s secure note or printed in a safe — because anyone who reads them can bypass your MFA.',
    source,
    generated: true,
  },

  // -------------- Chapter 4: Devices, Networks, and Cloud Basics --------------
  {
    id: 7314009,
    chapter: 'Devices, Networks, and Cloud Basics',
    title: 'Who patches the server',
    prompt:
      'Your company rents virtual servers from a cloud provider (Infrastructure as a Service / IaaS) and installs its own operating system on them. Under the shared-responsibility model, who is responsible for installing OS security patches on those servers?',
    correct: 'The customer — in IaaS the customer patches the guest OS and applications',
    wrong: [
      miss(
        'The cloud provider, because they own the underlying hardware',
        'The provider secures the physical infrastructure, but in IaaS the customer manages and patches the guest OS they installed.',
        'Provider handles the data center; you handle the OS you put on top in IaaS.',
      ),
      miss(
        'Nobody — cloud servers patch themselves automatically',
        'IaaS guest operating systems do not self-patch; assuming they do leaves known vulnerabilities open.',
        'IaaS does not auto-patch your OS. Someone has to own it — and in IaaS that is you.',
      ),
      miss(
        'It depends only on the contract price, not the service model',
        'Responsibility is defined by the service model (IaaS/PaaS/SaaS), not by how much you pay.',
        'The split follows the service model, not the price tag. Ask: IaaS, PaaS, or SaaS?',
      ),
    ],
    lesson:
      'The cloud shared-responsibility model divides duties by service model: in IaaS the provider secures the physical infrastructure while the customer patches and hardens the guest OS and applications. Responsibility shifts toward the provider as you move to PaaS and SaaS — but "the cloud handles it" is a dangerous assumption in IaaS.',
    source,
    generated: true,
  },
  {
    id: 7314010,
    chapter: 'Devices, Networks, and Cloud Basics',
    title: 'What a VPN does not do',
    prompt:
      'An employee says, "I use a VPN, so I am safe to click links and open attachments on public Wi-Fi." What is the flaw in this reasoning?',
    correct:
      'A VPN encrypts traffic in transit but does nothing to stop phishing, malware, or a malicious attachment',
    wrong: [
      miss(
        'There is no flaw — a VPN protects against every online threat',
        'A VPN only protects data moving across the network; it has no idea what a link or attachment does once you open it.',
        'A VPN guards the tunnel, not your judgment. It cannot stop you opening malware.',
      ),
      miss(
        'The flaw is that VPNs are illegal on public Wi-Fi',
        'VPNs are legal and common; the real issue is the false sense of total protection.',
        'Legality is not the point. The point is what a VPN does and does not cover.',
      ),
      miss(
        'The flaw is that HTTPS already does everything a VPN does',
        'HTTPS and VPNs overlap on transit encryption but a VPN covers all traffic, not just one site; either way, neither stops malware or phishing.',
        'Both protect transit, neither stops malware. The real gap is the click, not the protocol.',
      ),
    ],
    lesson:
      'A VPN encrypts data in transit between your device and the VPN server, protecting against local eavesdropping. It does not inspect content, so it cannot stop phishing pages, malicious attachments, or malware — those depend on endpoint protection and user judgment.',
    source,
    generated: true,
  },
  {
    id: 7314011,
    chapter: 'Devices, Networks, and Cloud Basics',
    title: 'Rest versus transit',
    prompt:
      'A stolen, powered-off company laptop has full-disk encryption enabled. Which kind of protection is doing the work here?',
    correct: 'Encryption at rest — it protects stored data on a device that is not actively transmitting',
    wrong: [
      miss(
        'Encryption in transit — it protects the data as it moves over the network',
        'The laptop is powered off and stolen; no data is moving, so transit encryption (TLS/VPN) is irrelevant here.',
        'Transit protects data on the move. A stolen, off device is about stored data — that is "at rest".',
      ),
      miss(
        'HTTPS — it secures the connection to websites',
        'HTTPS protects browser-to-server traffic, not files sitting on a stolen disk.',
        'HTTPS is a transit protection for web traffic. A powered-off disk is the at-rest case.',
      ),
      miss(
        'A VPN — it tunnels the laptop’s traffic securely',
        'A VPN protects traffic in transit; it does nothing for files on a disk that is not connected to anything.',
        'A VPN works while connected and transmitting. A stolen offline disk needs at-rest encryption.',
      ),
    ],
    lesson:
      'Encryption at rest (e.g., full-disk encryption like BitLocker or FileVault) protects stored data on devices and backups; encryption in transit (TLS/HTTPS, VPNs) protects data moving across a network. A stolen, powered-off laptop is the textbook at-rest scenario.',
    source,
    generated: true,
  },
  {
    id: 7314012,
    chapter: 'Devices, Networks, and Cloud Basics',
    title: 'The accidentally public bucket',
    prompt:
      'A team stores customer files in cloud object storage and, to "make sharing easier," sets the storage bucket to allow public read access. Why is this a serious risk?',
    correct:
      'Public-read cloud storage is routinely discovered by automated scanners, exposing the data to anyone',
    wrong: [
      miss(
        'It is fine because the bucket name is hard to guess',
        'A hard-to-guess name is security by obscurity; automated tools and search techniques routinely enumerate public buckets.',
        'Obscurity is not access control. Public means findable, and scanners find it fast.',
      ),
      miss(
        'It is fine because the cloud provider encrypts the data',
        'Provider-side encryption protects data from the provider’s infrastructure, not from someone you authorized via public access.',
        'Encryption does not help when you have granted the world read access to the plaintext view.',
      ),
      miss(
        'There is no risk as long as the files are not "Top Secret"',
        'Customer files typically carry privacy and contractual obligations; exposure can trigger breach-notification duties regardless of a label.',
        'Customer data has legal weight even without a classification stamp. Public exposure is a real breach.',
      ),
    ],
    lesson:
      'Cloud misconfiguration — especially publicly readable storage buckets — is one of the most common causes of data exposure. The customer owns access configuration under the shared-responsibility model, and "public" storage is continuously scanned and indexed by attackers and researchers alike.',
    source,
    generated: true,
  },

  // -------------- Chapter 5: Malware, Ransomware, and Common Attacks --------------
  {
    id: 7314013,
    chapter: 'Malware, Ransomware, and Common Attacks',
    title: 'The backup that survives ransomware',
    prompt:
      'A company keeps nightly backups on a network drive that every server can reach. Ransomware hits and encrypts the backups along with everything else. Which backup property would most likely have saved them?',
    correct:
      'An immutable or offline (air-gapped) copy that ransomware cannot reach or alter',
    wrong: [
      miss(
        'More frequent backups to the same always-connected network drive',
        'Frequency does not help if the drive is reachable; ransomware moving laterally encrypts whatever it can reach, including hourly backups.',
        'If the attacker can reach it, frequency just means fresher encrypted files. Reachability is the flaw.',
      ),
      miss(
        'Storing the backups in a single larger file for easier management',
        'Consolidation is about convenience, not survivability; one reachable file is just as encryptable.',
        'Packaging does not protect data the attacker can still reach and encrypt.',
      ),
      miss(
        'Renaming the backup folder so the ransomware cannot find it',
        'Ransomware encrypts by file type and path regardless of folder names; renaming is not a control.',
        'Renaming is obscurity, not protection. Ransomware does not care what the folder is called.',
      ),
    ],
    lesson:
      'Modern ransomware deliberately hunts for and encrypts reachable backups. The 3-2-1 rule (three copies, two media, one offsite) has evolved to add an immutable or air-gapped copy — one that cannot be altered or deleted even with admin credentials — because that is the copy that survives an attack that owns the network.',
    source,
    generated: true,
  },
  {
    id: 7314014,
    chapter: 'Malware, Ransomware, and Common Attacks',
    title: 'From one laptop to the whole network',
    prompt:
      'An attacker compromises one employee laptop, then uses stolen credentials to quietly reach file servers and other machines over days before triggering ransomware. The "reaching other machines" stage is called:',
    correct: 'Lateral movement — spreading from the initial foothold to other systems',
    wrong: [
      miss(
        'Phishing — tricking a user into giving up information',
        'Phishing may have been the initial entry, but moving between internal systems afterward is a distinct stage called lateral movement.',
        'Phishing is often the way in. Spreading inside the network afterward has its own name.',
      ),
      miss(
        'Patching — applying fixes to vulnerable software',
        'Patching is a defensive action; the scenario describes an attacker spreading, the opposite of a defense.',
        'Patching is something defenders do. This is the attacker expanding their reach.',
      ),
      miss(
        'Encryption at rest — protecting stored data',
        'Encryption at rest is a protective control; it is unrelated to an attacker traversing internal systems.',
        'At-rest encryption is a defense for stored data, not a name for an attacker spreading inside.',
      ),
    ],
    lesson:
      'Lateral movement is how a single compromised endpoint becomes an organization-wide incident: attackers reuse credentials and exploit trust between systems to expand their footprint, often for days, before acting. Network segmentation and least privilege shrink the resulting blast radius.',
    source,
    generated: true,
  },
  {
    id: 7314015,
    chapter: 'Malware, Ransomware, and Common Attacks',
    title: 'Why backups are not enough anymore',
    prompt:
      'A ransomware gang encrypts a firm’s files and also threatens to publish stolen copies unless paid. This combined tactic — encrypt and threaten to leak — is known as:',
    correct: 'Double extortion — combining encryption with the threat of data leakage',
    wrong: [
      miss(
        'A denial-of-service attack',
        'Denial of service floods a service to knock it offline; it neither encrypts files nor steals data to leak.',
        'DoS is about availability through flooding, not stealing and leaking data.',
      ),
      miss(
        'A man-in-the-middle attack',
        'A man-in-the-middle intercepts traffic between two parties; it does not describe encrypt-and-leak extortion.',
        'Man-in-the-middle is about intercepting a conversation, not extorting with stolen data.',
      ),
      miss(
        'Simple ransomware, since the only goal is still the ransom',
        'Classic ransomware only encrypts; the added theft-and-leak threat is what defines double extortion and defeats "we have backups."',
        'Plain ransomware just encrypts. Adding a leak threat is the newer, nastier variant.',
      ),
    ],
    lesson:
      'Double extortion encrypts a victim’s data and steals a copy, threatening to publish it if the ransom is unpaid. This defeats the classic "we have good backups" defense, because restoring files does not undo the threat of public disclosure — which is why prevention and data protection still matter alongside backups.',
    source,
    generated: true,
  },
  {
    id: 7314016,
    chapter: 'Malware, Ransomware, and Common Attacks',
    title: 'The document that wants to run code',
    prompt:
      'A Word document attached to an email opens and immediately pops up: "Enable Macros / Enable Content to view this document." What is the safest response?',
    correct:
      'Do not enable macros; treat the prompt as a likely malware delivery attempt and report the email',
    wrong: [
      miss(
        'Enable macros, because the document will not display correctly otherwise',
        'That prompt is the attack: enabling macros lets the document run code, a classic malware-delivery technique.',
        'The "enable content" prompt is the trap. Enabling it runs the attacker’s code.',
      ),
      miss(
        'Enable macros only if the sender’s name looks familiar',
        'Sender names are easily spoofed and compromised accounts send malware; a familiar name is not proof.',
        'A familiar name can be spoofed or hijacked. It does not make running macros safe.',
      ),
      miss(
        'Print the document instead, which neutralizes any macros',
        'Printing does not address the threat and is unrelated; the danger is in enabling the embedded code, not in viewing.',
        'Printing is a non sequitur. The risk is the macro running, not how you view the file.',
      ),
    ],
    lesson:
      'Macro-enabled Office documents are a long-running malware-delivery method: the "Enable Content/Macros" banner exists to get you to run the attacker’s code. Leave macros disabled, especially on unexpected attachments, and report the message rather than forcing the document to render.',
    source,
    generated: true,
  },

  // -------------- Chapter 6: Logging, Monitoring, and Detection Basics --------------
  {
    id: 7314017,
    chapter: 'Logging, Monitoring, and Detection Basics',
    title: 'IOC versus IOA',
    prompt:
      'A threat-intel feed shares a specific malicious file hash and a known bad IP address seen in past attacks. In detection terms, these specific artifacts are best described as:',
    correct:
      'Indicators of compromise (IOCs) — forensic artifacts that something malicious occurred',
    wrong: [
      miss(
        'Indicators of attack (IOAs) — the behaviors of an attack in progress',
        'IOAs describe what an attacker is doing (behavior/intent); a fixed hash or IP is a static artifact, which is an IOC.',
        'IOAs are about behavior in progress. A specific hash or IP is a static clue — that is an IOC.',
      ),
      miss(
        'False positives — alerts that turn out to be benign',
        'A false positive is a wrong alert; a known-bad hash or IP is a genuine indicator, not a mistaken alert.',
        'A false positive is a wrong alarm. These are real, known-bad artifacts.',
      ),
      miss(
        'Security controls — measures that prevent attacks',
        'A hash or IP indicator is evidence used for detection, not a preventive control like a firewall rule.',
        'Controls prevent or block. These artifacts are clues you detect with, not defenses.',
      ),
    ],
    lesson:
      'Indicators of compromise (IOCs) are concrete forensic artifacts — file hashes, malicious IPs/domains, registry keys — that reveal a threat, usually after the fact. Indicators of attack (IOAs) focus on attacker behavior and intent as it happens. Mature detection programs use both: IOCs to catch known threats fast, IOAs to catch novel ones.',
    source,
    generated: true,
  },
  {
    id: 7314018,
    chapter: 'Logging, Monitoring, and Detection Basics',
    title: 'What a SIEM is for',
    prompt:
      'A security team wants to spot an attack that only becomes visible when a failed-login spike, a new admin account, and an unusual data transfer are seen together. Which tool is designed for this?',
    correct:
      'A SIEM — it centralizes logs from many sources and correlates events that look benign alone',
    wrong: [
      miss(
        'A password manager, which stores credentials securely',
        'A password manager protects credentials; it does not collect or correlate security logs across systems.',
        'Password managers store secrets. They do not correlate logs across the org.',
      ),
      miss(
        'A VPN, which encrypts network traffic',
        'A VPN protects data in transit; it has no role in aggregating or correlating events for detection.',
        'A VPN is a transit-encryption tool, not a detection-and-correlation platform.',
      ),
      miss(
        'A firewall, which blocks unwanted network connections',
        'A firewall enforces connection rules at the boundary; it does not correlate multi-source events to reveal a multi-stage attack.',
        'Firewalls allow/deny traffic. Correlating signals from many logs is a SIEM’s job.',
      ),
    ],
    lesson:
      'A SIEM (Security Information and Event Management) aggregates logs from across an environment and applies correlation rules, so events that look harmless individually — a login spike, a new admin, a big transfer — can together raise one meaningful alert. It is the backbone of detection in most SOCs.',
    source,
    generated: true,
  },
  {
    id: 7314019,
    chapter: 'Logging, Monitoring, and Detection Basics',
    title: 'Drowning in alerts',
    prompt:
      'A SOC analyst faces hundreds of alerts a day, most of which turn out to be harmless. The danger of this flood of false positives is best described as:',
    correct:
      'Alert fatigue — analysts may miss or rubber-stamp a real alert buried among the noise',
    wrong: [
      miss(
        'It is harmless, because more alerts always mean better security',
        'Volume is not value; excessive false positives drown out the few alerts that matter and waste analyst time.',
        'More alerts is not more safety. Noise hides the signal that actually matters.',
      ),
      miss(
        'The alerts will automatically resolve themselves over time',
        'Alerts do not self-resolve into safety; ignoring them lets a real incident proceed undetected.',
        'Unworked alerts do not heal themselves. A buried true positive still becomes a breach.',
      ),
      miss(
        'It proves the SIEM is broken and should be turned off',
        'High false positives mean tuning is needed, not that detection should be removed entirely — turning it off blinds the team.',
        'The fix is tuning the rules, not going blind by switching detection off.',
      ),
    ],
    lesson:
      'When detection rules are poorly tuned, analysts face a flood of false positives. The result is alert fatigue: real, urgent alerts get missed or dismissed amid the noise, and analyst time is wasted. Good detection requires ongoing tuning so the alerts that fire are the ones worth acting on.',
    source,
    generated: true,
  },
  {
    id: 7314020,
    chapter: 'Logging, Monitoring, and Detection Basics',
    title: 'Writing a ticket the next analyst can use',
    prompt:
      'You are escalating a suspicious login. Which incident ticket gives the next investigator the most useful starting point?',
    correct:
      '"Login to acct jdoe from 203.0.113.5 (Brazil) at 02:14 UTC; user is in Ohio and denies travel; password reset done, sessions revoked."',
    wrong: [
      miss(
        '"Something weird happened with a login, please look into it when you can."',
        'It names no account, time, indicator, or action taken, forcing the investigator to start from zero.',
        'A vague ticket wastes the next person’s time. Include who, what, when, and what you did.',
      ),
      miss(
        '"URGENT!!! We are being hacked, drop everything now!!!"',
        'Panic without facts gives no asset, timeline, or indicators; urgency claims are not evidence.',
        'Alarm is not information. The investigator needs concrete facts, not exclamation marks.',
      ),
      miss(
        '"I noticed a login. Closing this ticket as resolved."',
        'Closing with no detail and no rationale destroys the trail and hides whether anything was actually checked.',
        'Closing silently erases the record. Document the facts and what you did before resolving.',
      ),
    ],
    lesson:
      'A high-quality incident ticket states the affected asset, a precise timeline, the indicators (IPs, accounts, anomalies), and the actions already taken. That context lets the next investigator act immediately instead of reconstructing the basics — and it preserves the trail for review.',
    source,
    generated: true,
  },

  // -------------- Chapter 7: Incident Response --------------
  {
    id: 7314021,
    chapter: 'Incident Response',
    title: 'Containment before cleanup',
    prompt:
      'A workstation is actively beaconing to an attacker and spreading. Following the incident-response lifecycle, which action comes first?',
    correct:
      'Contain it — isolate the machine from the network to stop the spread while preserving evidence',
    wrong: [
      miss(
        'Eradicate it — immediately wipe and reimage the workstation',
        'Eradication comes after containment; wiping first destroys forensic evidence and may not stop spread already underway.',
        'Wiping first kills the evidence and may be premature. Stop the spread (contain) before cleaning up.',
      ),
      miss(
        'Recover it — restore the user’s files so they can keep working',
        'Recovery is a later phase; restoring a still-compromised machine just reinfects and risks reinfecting others.',
        'Recovery comes near the end. You cannot safely restore a machine still under attacker control.',
      ),
      miss(
        'Do nothing yet — wait to confirm it is not a false alarm',
        'Active beaconing and spread is a strong signal; waiting lets the attacker move laterally and widen the blast radius.',
        'Waiting on an active spread lets it grow. Isolate first, investigate from a contained state.',
      ),
    ],
    lesson:
      'The incident-response lifecycle runs preparation → identification → containment → eradication → recovery → lessons learned. Containment (isolating the affected system while preserving evidence) comes before eradication and recovery, because stopping the spread and keeping forensic clues are the priorities once an incident is confirmed.',
    source,
    generated: true,
  },
  {
    id: 7314022,
    chapter: 'Incident Response',
    title: 'The misdirected customer file',
    prompt:
      'An employee realizes they emailed a file of customer records to the wrong external address. What is the best first response?',
    correct:
      'Report it through the incident/privacy process promptly so the team can assess containment and any notification duties',
    wrong: [
      miss(
        'Delete the sent email from your own outbox and say nothing',
        'Local deletion cannot recall the external copy and hides a potential breach with time-sensitive notification obligations.',
        'Deleting your copy does not recall theirs. Silence can turn a recoverable slip into a violation.',
      ),
      miss(
        'Email the wrong recipient several more times asking them to delete it',
        'Repeated contact can compound the disclosure and is no substitute for the formal process and any required notifications.',
        'Chasing the recipient yourself is not containment. Use the process; do not add to the exposure.',
      ),
      miss(
        'Wait to see whether the recipient complains before acting',
        'Privacy breach clocks often start at the moment of exposure; waiting can convert a manageable error into a missed legal deadline.',
        'Notification timelines may already be running. Waiting risks blowing a legal deadline.',
      ),
    ],
    lesson:
      'A potential data exposure should go through the incident/privacy process immediately, because containment options and breach-notification obligations are often time-sensitive. Fast, honest reporting — not quiet deletion or solo damage control — is what lets the organization meet its legal and customer duties.',
    source,
    generated: true,
  },

  // -------------- Chapter 8: Security Culture and Career Paths --------------
  {
    id: 7314023,
    chapter: 'Security Culture and Career Paths',
    title: 'Which lane is GRC',
    prompt:
      'A colleague enjoys writing clear policies, mapping the organization against frameworks like NIST CSF, and preparing for audits, but does not want to do hands-on threat hunting. Which security career lane fits best?',
    correct: 'GRC — governance, risk, and compliance',
    wrong: [
      miss(
        'SOC analyst / blue team — monitoring alerts and hunting threats',
        'That is the hands-on detection work they explicitly want to avoid; GRC is the policy, risk, and audit lane.',
        'SOC work is the live threat hunting they do not want. Policy-and-audit work is a different lane.',
      ),
      miss(
        'Penetration tester / red team — actively attacking systems to find flaws',
        'Pen testing is offensive hands-on hacking, the opposite of policy and audit work.',
        'Red team breaks into systems. This colleague wants frameworks and audits, not exploits.',
      ),
      miss(
        'There is no security role for someone who does not do hands-on hacking',
        'Many vital security roles (GRC, awareness, risk, audit) require little or no hacking; this is a common misconception.',
        'Plenty of security careers need no hacking at all. GRC is a major, in-demand example.',
      ),
    ],
    lesson:
      'Security is broader than hacking. GRC (governance, risk, and compliance) focuses on policy, framework alignment (e.g., NIST CSF), risk management, and audit readiness — a strong fit for people who think in process and documentation rather than live threat hunting. Other lanes include SOC/blue team, AppSec, cloud security, identity, and incident response.',
    source,
    generated: true,
  },
])
