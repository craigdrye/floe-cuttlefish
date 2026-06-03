import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const cybersecurityGems: Question[] = [
  // ===== Identity and Access =====
  makeSimpleQuestion(
    10032000,
    'Career Skills',
    'Identity and Access',
    "Why a passkey beats a code",
    "An attacker builds a pixel-perfect copy of your bank's login page at a look-alike domain and tricks you into 'signing in.' With a passkey (FIDO2/WebAuthn) registered for the real bank, what actually stops the attack even if you are tired and not paying close attention?",
    "Your device generated a key tied to the real bank's domain, so when the fake site asks it to sign in, the device sees the domain does not match and silently refuses to produce a signature.",
    [
      [
        "The passkey is a much longer, more random secret than a password, so the attacker cannot guess or crack it in time.",
        "Length and randomness describe a strong shared secret, but phishing never involves guessing; you hand the secret over yourself. A six-digit code is short yet still phishable, and a 40-character password is long yet still phishable, so 'harder to crack' is the wrong axis entirely.",
        "The protection comes from origin binding (the key only works on the registered domain), not from how hard the credential is to brute-force.",
      ],
      [
        "The passkey app shows you the real site's name, so you would notice the domain is wrong and stop before approving.",
        "That just relocates the burden back onto a tired human reading a URL, which is exactly the judgment phishing is designed to defeat. The whole point of a passkey is that it does not depend on you spotting the fraud.",
        "The browser and authenticator check the domain cryptographically and refuse automatically, so safety does not rest on you noticing anything.",
      ],
      [
        "The passkey sends a one-time code that expires in seconds, so the fake site cannot reuse it fast enough.",
        "That describes a TOTP authenticator, not a passkey, and time-limited codes are still phishable: a real-time proxy relays the code within its window. A passkey transmits no reusable secret at all.",
        "Passkeys use public-key cryptography bound to the domain; nothing relayable crosses the network, so 'expires quickly' is not where the security lives.",
      ],
    ],
    "Phishing-resistant MFA works by removing the human from the security-critical decision. During registration a passkey creates a key pair bound to the legitimate site's origin (domain); at login the authenticator will only sign a challenge from that exact origin. On a look-alike phishing domain the signature simply never happens. This is the deep shift: SMS codes and push approvals are phishable because a person relays or approves a value that does not know which site it is going to, whereas a passkey's protection is enforced by math, not vigilance. The lesson is that the strongest controls are the ones that still hold when the user is careless.",
    "Floe generated",
    true,
    "Ask what the credential 'knows' about where it is being used. A code knows nothing about the site; a passkey is bound to one domain.",
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10032001,
    'Career Skills',
    'Identity and Access',
    "The strong door and the weak window",
    "A company protects its email with phishing-resistant passkeys, which attackers cannot phish. Yet an account is still taken over. The attacker called the help desk, claimed to be a locked-out employee, and got the passkey reset and a temporary SMS code issued. What general lesson does this teach about authentication?",
    "An account is only as strong as its weakest available way in; if recovery or fallback paths are weaker than the primary login, attackers simply attack those instead, so recovery must be hardened to the same standard.",
    [
      [
        "Passkeys are not actually phishing-resistant, since this account was compromised despite using them.",
        "The passkey was never phished; it was reset and bypassed through a different door. Blaming the primary factor misreads the incident and could push a team to abandon the one control that actually worked.",
        "The login factor held perfectly. The failure was in the recovery process, which is a separate control that also needs strengthening.",
      ],
      [
        "The fix is to require two passkeys for login, so losing one device cannot lock anyone out.",
        "Adding factors to the front door does nothing about a help-desk reset that bypasses the front door entirely. You can stack a hundred locks on a door an attacker walks around.",
        "Harden the weakest path (here, identity-proofing at recovery), not the path that was never the problem.",
      ],
      [
        "Help desks should never reset credentials, so the solution is to forbid all account recovery.",
        "Forbidding recovery is impractical and creates a worse problem: legitimate locked-out users with no path back, which pressures staff into ad-hoc, undocumented exceptions that are even easier to exploit.",
        "Recovery must exist but be identity-proofed as strongly as login (verified callbacks, manager approval), not abolished.",
      ],
    ],
    "Defenders instinctively reinforce the front door, but attackers are economical: they find the cheapest unlocked entrance. A reset flow that downgrades a phishing-resistant account to an SMS code, or a help desk that resets credentials on a confident phone call, quietly becomes the real authentication policy. This is the principle of the weakest link, and it is why mature programs disable phishable fallbacks for sensitive accounts and identity-proof recovery as rigorously as login. The conceptual hook: security is not the strength of your best control but the strength of your worst reachable one.",
    "Floe generated",
    true,
    "Trace the path the attacker actually used. Did they break the lock, or find a different door?",
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10032002,
    'Career Skills',
    'Identity and Access',
    "When approving makes it stop",
    "It is late and your phone keeps buzzing with login-approval prompts, one after another, dozens of them. Annoyed and assuming a glitch, you finally tap 'Approve' to make it stop. Why is this exactly the outcome the attacker engineered, and what does it reveal about push-based MFA?",
    "The attacker already had your password and was flooding you with prompts (push bombing) until fatigue made you approve one; push MFA fails here because a single tap, not proof of presence at the real site, is all it takes to let an attacker in.",
    [
      [
        "The repeated prompts were a system error, and approving one safely cleared the backlog of stuck requests.",
        "Legitimate systems do not generate dozens of unsolicited login prompts; each prompt means someone is entering your password right now. Reading the flood as a 'glitch' is the precise misperception the attack relies on.",
        "Every prompt you did not initiate is an active break-in attempt, not a bug to clear by approving.",
      ],
      [
        "Approving was fine because MFA still required your tap, so the second factor did its job.",
        "The tap is the vulnerability, not the safeguard: push approval reduces the second factor to a yes/no the attacker can wear down. Possessing the phone did not stop the breach because you were socially engineered into consenting.",
        "Push 'something you approve' is fatigable; phishing-resistant factors like passkeys require an action bound to the real site, not a defeatable prompt.",
      ],
      [
        "Denying every prompt would have been wrong, since one of them was probably your own forgotten login attempt.",
        "If you did not just try to log in, none of the prompts are yours, and 'one might be mine' is the doubt the attacker exploits to extract an approval. The safe default is deny-and-report, then change the password.",
        "Unprompted approvals should be denied and reported; the prompts being unsolicited is itself the signal that your password is compromised.",
      ],
    ],
    "MFA fatigue, or push bombing, is the attack that breached Uber in 2022: with a stolen password, the adversary spammed approval prompts until an exhausted employee tapped yes. It exposes the soft underbelly of push-based MFA, where the human is reduced to a single defeatable decision under pressure. Two lessons compound: a flood of unsolicited prompts is proof your password is already known (deny, do not approve, then rotate it), and 'any MFA' is not equal MFA. Number-matching helps, but the durable fix is phishing-resistant factors that cannot be approved into the wrong hands.",
    "Floe generated",
    true,
    "Ask who started the login. If it was not you, what does each prompt actually mean?",
    { challengeRating: 6 },
  ),

  // ===== Phishing, Social Engineering, and Credential Theft =====
  makeSimpleQuestion(
    10032010,
    'Career Skills',
    'Phishing, Social Engineering, and Credential Theft',
    "The conversation that turned",
    "You are mid-thread with a known supplier, replying inside an email chain that has run for weeks with real history above. The latest reply says the invoice account changed and to send today's payment to a new bank. Nothing looks off. Why can a genuine, long-running thread still be the dangerous one, and what is the safe move?",
    "An attacker who has read or hijacked the real mailbox can inject a reply into the authentic thread, so the trustworthy history proves nothing about this message; confirm the bank change by calling a number you had on file before this email, not one supplied in it.",
    [
      [
        "A thread with weeks of real prior messages cannot be faked, so the new banking details are safe to use.",
        "The history is real, but it is precisely what a compromised or spoofed account inherits; the attacker is replying within the legitimate chain. Authentic context is the disguise here, not the proof.",
        "Treat the payment-change request itself as the risk and verify it out-of-band, regardless of how genuine the surrounding thread is.",
      ],
      [
        "Just reply in the thread asking the supplier to re-confirm the new account in writing before you pay.",
        "If the mailbox is hijacked, your 'please confirm' lands with the attacker, who happily replies 'confirmed.' Verifying inside a possibly-compromised channel asks the suspect to vouch for itself.",
        "Use an independent channel you control, such as a phone number from a prior trusted invoice, never a reply within the same thread.",
      ],
      [
        "Call the new phone number the supplier included in this latest message to confirm the change quickly.",
        "Contact details inside a suspect message are part of the attack: criminals supply their own number so the 'verification' call reaches them and they confirm their own fraud.",
        "Verify only through contact details you obtained before and independently of this email; an attacker-supplied number cannot validate an attacker-supplied request.",
      ],
    ],
    "Business email compromise is the costliest cybercrime by dollar loss, ranking among the FBI IC3's top categories with billions lost yearly, precisely because the message looks legitimate rather than because of malware. Thread hijacking is the sharpest form: the criminal replies inside a real conversation, so every comforting cue (history, tone, signatures) is inherited, not earned. The only reliable defense is out-of-band verification of any payment or bank-detail change, using a channel and contact details sourced independently of the suspect message. The deep point: trust must be anchored to something outside the channel being questioned, because a channel can never authenticate itself.",
    "Floe generated",
    true,
    "Ask what the comforting history actually proves about the newest reply. Could an intruder inherit all of it?",
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10032011,
    'Career Skills',
    'Phishing, Social Engineering, and Credential Theft',
    "The padlock is not a promise",
    "You land on a login page after clicking a link. The browser shows the padlock and the address starts with https, and a colleague says 'it's secure, the connection is encrypted, go ahead and sign in.' Why is this reassurance dangerously incomplete?",
    "HTTPS only certifies that the connection to whatever site you are on is encrypted; it says nothing about who owns that site, so a phishing page can be perfectly encrypted while still stealing your password.",
    [
      [
        "The padlock confirms the site has been verified as the genuine, trustworthy organization it claims to be.",
        "A basic certificate proves control of the domain, not the honesty of its owner; attackers obtain valid certificates for look-alike domains for free in minutes. The lock vouches for the pipe, not the company at the other end.",
        "HTTPS authenticates the connection, not the identity or intentions of the site; trustworthiness must be judged separately.",
      ],
      [
        "Encryption means even if the site is fake, your password stays private and cannot be stolen.",
        "Encryption protects the password in transit from eavesdroppers, then delivers it intact to the site's owner. If that owner is the attacker, encryption simply hands them your secret securely.",
        "Confidentiality on the wire does not matter when the endpoint itself is the thief; the question is who receives the data, not who might intercept it.",
      ],
      [
        "Since the link used https, no malware could have loaded, so the page is safe to interact with.",
        "HTTPS governs transport security, not page content; encrypted connections deliver phishing forms and malicious downloads just as faithfully as legitimate ones.",
        "The protocol secures delivery, not safety of what is delivered; judge the destination, not the lock.",
      ],
    ],
    "The padlock is one of the most misread symbols in everyday security. HTTPS guarantees confidentiality and integrity between your browser and the server it reached, full stop. It does not establish that the server belongs to the brand on the page; domain-validated certificates are free and instant, so phishing sites are routinely encrypted. This is the same category error as believing a VPN makes a site safe. The conceptual hook: encryption answers 'can someone listen in?' while phishing exploits 'who is on the other end?' Two genuinely different questions, and confusing them turns a privacy tool into a false badge of trust.",
    "Floe generated",
    true,
    "Separate two questions: is the connection private, and is the destination who it claims to be? The padlock answers only the first.",
    { challengeRating: 6 },
  ),

  // ===== Security Thinking and Risk =====
  makeSimpleQuestion(
    10032020,
    'Career Skills',
    'Security Thinking and Risk',
    "Weakness, actor, and exposure",
    "A team's customer database has no encryption at rest (a weakness), ransomware crews are actively hitting their industry (an outside force), and a breach would trigger fines plus lost customers (the consequence). Which of these is the vulnerability, and why does the distinction matter for what you do next?",
    "The missing encryption is the vulnerability (a weakness in the system); the ransomware crews are the threat; and the fines plus lost customers are the impact that, combined with how likely the threat is, gives you the risk.",
    [
      [
        "The ransomware crews are the vulnerability, because they are the thing that could break in.",
        "An external actor is a threat, not a vulnerability. Conflating them sends you chasing attackers you cannot control instead of fixing the weakness you can, which is the one lever actually in your hands.",
        "A vulnerability is a weakness inside your own system; a threat is the outside force that could exploit it. You fix the former and monitor the latter.",
      ],
      [
        "The fines and lost customers are the vulnerability, since that is where the real damage shows up.",
        "Those are the impact, the magnitude of harm if a threat exploits a weakness. Calling consequence a vulnerability hides the actual fixable flaw and leaves the missing encryption unaddressed.",
        "Impact is one input to risk (alongside likelihood); the vulnerability is the encryption gap that makes the harm reachable.",
      ],
      [
        "All three are just 'the risk,' so labeling them separately is academic and does not change the response.",
        "The labels are the whole point of triage: you remediate vulnerabilities, you cannot remove threats, and you size impact to prioritize. Collapsing them into one word removes your ability to decide what to do first.",
        "Threat, vulnerability, and impact are distinct levers; risk is the product of likelihood and impact and tells you how urgently to close the vulnerability.",
      ],
    ],
    "NIST frames risk as a function of the likelihood that a threat exploits a vulnerability and the impact if it does. Holding the three apart is not pedantry; it is what makes action possible. You cannot abolish threats (the criminals exist regardless), but you can close vulnerabilities (encrypt the database) and you can reduce impact (segment, back up, minimize stored data). Risk equals likelihood times impact tells you where to spend first. The deep idea: precise vocabulary converts a vague feeling of danger into a set of independent dials you can actually turn.",
    "Floe generated",
    true,
    "Sort each item: is it a weakness you own, an outside force, or the harm if they meet? Only one is the vulnerability.",
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10032021,
    'Career Skills',
    'Security Thinking and Risk',
    "Never been breached",
    "A founder resists spending on security: 'We've operated for eight years and never been breached, so clearly our setup is fine.' What is the flaw in treating a clean track record as proof of safety?",
    "Not having detected a breach is not the same as not having been breached, and even a genuinely clean record only reflects past luck against past threats, not whether current controls would withstand a determined attacker; absence of a known incident is not evidence of security.",
    [
      [
        "There is no flaw; eight breach-free years is strong statistical evidence that the controls are effective.",
        "This treats silence as success while ignoring that many breaches go undetected for months and that the threat landscape changes constantly. A quiet record can mean strong defenses, weak detection, or simply not being targeted yet, and you cannot tell which.",
        "Survival so far is consistent with poor detection or untested luck; it does not measure whether controls actually work.",
      ],
      [
        "The flaw is only that eight years is too short a window; with twenty breach-free years the conclusion would be sound.",
        "More years of the same blind spot do not fix it: if you cannot detect intrusions, a longer clean record just means a longer time you might have missed them. Duration does not convert undetected into nonexistent.",
        "The problem is not sample size but that 'no incident reported' may reflect missing detection rather than real safety.",
      ],
      [
        "The flaw is that the founder should instead point to having no valuable data, since attackers only target big companies.",
        "Small organizations are routinely hit by automated, opportunistic attacks like credential stuffing and ransomware that do not care about size, and most hold data worth stealing or systems worth ransoming. Swapping one false comfort for another does not fix the reasoning.",
        "The real correction is to test controls and improve detection, not to assume low value; everyone is a target of opportunistic attacks.",
      ],
    ],
    "This is survivorship bias wearing a security badge. A clean history conflates three very different states: defenses that genuinely work, defenses too weak to even notice a breach, and the luck of not yet being targeted. Because intrusions often go undetected for months, 'we've never been breached' frequently means 'we've never noticed,' and either way it describes the past while attackers operate in the present. The discipline of security thinking replaces this comfort with evidence: tested controls, real detection, and a risk register that estimates likelihood and impact rather than reading the absence of alarms as proof the alarms work.",
    "Floe generated",
    true,
    "Ask what a quiet record could mean besides safety. Could you tell a strong defense from one too weak to notice an intrusion?",
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10032022,
    'Career Skills',
    'Security Thinking and Risk',
    "The hidden door",
    "An admin secures a sensitive server by leaving its management page on an unusual port that 'nobody knows about,' with a simple shared password, reasoning that since the location is secret, no attacker will ever find it. Why is this a fragile foundation for security?",
    "Hiding the location (security through obscurity) is not a control: automated scanners find unusual ports constantly, secrets leak, and once the location is known the weak shared password is all that protects the server, so the defense rests entirely on a secret that is bound to be discovered.",
    [
      [
        "It is actually sound, because an attacker cannot exploit a service they cannot locate in the first place.",
        "Attackers do not need prior knowledge; port scanners sweep the entire internet continuously and surface 'hidden' services within hours. Obscurity delays discovery at best and never substitutes for an actual lock.",
        "Concealment can be a thin extra layer but never the layer; the strength must live in real controls that hold after the location is known.",
      ],
      [
        "It is fine as long as the team keeps the port number strictly confidential and never writes it down.",
        "This makes safety hinge on a secret that leaks through scans, configs, logs, and ordinary staff turnover, and it ignores that the weak shared password behind it gives no real protection once the door is found.",
        "Relying on a kept-secret location is brittle by design; durable security assumes the attacker already knows where the door is.",
      ],
      [
        "It is the strongest option, since a secret nobody knows is harder to attack than a strong password everyone could try to guess.",
        "This inverts the principle: a strong, unique secret and phishing-resistant access remain robust even when the design is fully public, whereas a hidden location collapses the instant it is discovered. Kerckhoffs's principle says security should not depend on the design staying secret.",
        "Good security stays strong when the attacker knows the system; only the keys should be secret, not the existence of the door.",
      ],
    ],
    "Security through obscurity is the assumption that hiding a system's existence or design protects it. It fails because discovery is cheap and inevitable: the internet is scanned end to end around the clock, and secrets escape through logs, configs, and people. Kerckhoffs's principle captures the durable alternative: a system should remain secure even if everything about its design is public, with only the keys kept secret. Obscurity can be a minor speed bump layered on top of real controls, but when it is the whole defense, security has a precise expiry date, the moment someone notices the hidden door.",
    "Floe generated",
    true,
    "Ask what protects the server the instant the 'secret' location is discovered. If the answer is 'nothing strong,' the secret was the whole defense.",
    { challengeRating: 6 },
  ),
]
