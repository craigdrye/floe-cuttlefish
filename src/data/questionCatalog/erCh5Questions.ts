import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// EQUITY RESEARCH — CHAPTER 5: Research Note and Investor Debate
// ----------------------------------------------------------------------------
// 44 questions (IDs 4370400–4370443) extending the existing six-question
// Research Note and Investor Debate chapter in careerAgentGeneratedRoadmapFinance.ts
// (4103023, 4105085, 4107342, 4107343, 4107812, 4107813).
//
// Scope:
//   - Note types (initiation, update, preview, recap, thematic, channel-check)
//   - Initiation structure (rating, target, thesis, debates, risks, model)
//   - Thesis articulation (falsifiability, consensus contrast, catalysts)
//   - Variant perception logic (where and why analyst differs from consensus)
//   - Channel checks (distributors, customers, ex-employees, trade pubs,
//     third-party data; confirmation bias trap)
//   - Compliance and Reg FD (selective disclosure, MNPI, quiet period,
//     blue sheet review)
//   - Distribution mechanics (pre-market vs intraday vs post-market,
//     AlphaSense / Refinitiv Eikon, firm-wide blast vs targeted)
//   - Buy-side reception (rating + target + 1-bullet thesis first 30 seconds)
//   - Investor 1-on-1s (corporate access conferences, NDRs, bus tours)
//   - Earnings call participation (questioning craft, relationship stewardship)
//   - Sell-side relationship dynamics with IR
//   - Negative ratings (rarity, reputational economics, controversial coverage)
//   - Note voice (numerate, evidence-anchored, hedging discipline)
//
// Voice: matches jargonBusters.ts and the existing IB/VC chapter expansions —
// specific, evidence-anchored, US-regulated context, no strawman distractors.
// Every wrong-answer rationale is unique.
// ----------------------------------------------------------------------------

const SOURCE = 'Floe ER Ch5 canonical bank'

function q(
  id: number,
  topic: Topic,
  chapter: string,
  title: string,
  prompt: string,
  correct: string,
  wrong: [string, string][],
  lesson: string,
): Question {
  return makeSimpleQuestion(
    id,
    topic,
    chapter,
    title,
    prompt,
    correct,
    wrong.map(([label, why]) => [label, why, lesson] as [string, string, string]),
    lesson,
    SOURCE,
  )
}

const CHAPTER = 'Research Note and Investor Debate'

// Difficulty distribution: 13 at 3 (~30%), 22 at 4 (~50%), 9 at 5 (~20%).
export const ER_CH5_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // Note types and structure (4370400–4370410)
  4370400: 3, // What an initiation note actually is
  4370401: 3, // Update note vs initiation
  4370402: 4, // Preview note framing pre-earnings
  4370403: 4, // Recap note discipline post-earnings
  4370404: 4, // Thematic / sector note purpose
  4370405: 4, // Channel-check note structure
  4370406: 3, // Initiation front-page order
  4370407: 4, // Two-to-three-bullet thesis discipline
  4370408: 5, // Naming the key debates
  4370409: 4, // Risk section honesty
  4370410: 3, // Where the model attaches

  // Thesis and variant perception (4370411–4370419)
  4370411: 4, // Falsifiable thesis
  4370412: 4, // Consensus position contrast
  4370413: 5, // Variant perception durability
  4370414: 4, // Named catalysts with timing
  4370415: 3, // "We expect" vs "we anticipate" hedging
  4370416: 4, // Numerate evidence anchoring
  4370417: 5, // Holding a controversial Sell when wrong 6 months
  4370418: 4, // Rating change vs estimate revision
  4370419: 3, // Why "more optimistic than consensus" is not a thesis

  // Channel checks (4370420–4370425)
  4370420: 3, // Distributor channel checks
  4370421: 4, // Customer channel checks
  4370422: 5, // Ex-employee channel checks compliance
  4370423: 4, // Third-party data sets value
  4370424: 4, // Channel-check confirmation bias trap
  4370425: 4, // Trade publication signal

  // Compliance and Reg FD (4370426–4370431)
  4370426: 3, // Reg FD basics
  4370427: 4, // Issuer 1x1 boundary
  4370428: 5, // Quiet period before issuer earnings
  4370429: 4, // Blue sheet / internal review
  4370430: 4, // Ratings change approval workflow
  4370431: 5, // MNPI from a peer issuer

  // Distribution and reception (4370432–4370437)
  4370432: 3, // Pre-market vs intraday publication
  4370433: 4, // AlphaSense / Refinitiv Eikon dissemination
  4370434: 3, // Firm-wide blast vs targeted
  4370435: 4, // How PMs actually read notes
  4370436: 4, // First-30-second hierarchy
  4370437: 3, // Cliff-notes culture and the appendix

  // 1x1s, NDRs, earnings calls, IR dynamics (4370438–4370443)
  4370438: 4, // Corporate access conferences
  4370439: 4, // Non-deal roadshows
  4370440: 5, // Earnings call question craft
  4370441: 4, // IR relationship after a negative note
  4370442: 3, // Rarity of Sell ratings
  4370443: 5, // Reputational economics of contrarian Sell coverage
}

export const erCh5Questions: Question[] = [
  // -------------------------------------------------------------------------
  // NOTE TYPES AND STRUCTURE (4370400–4370410)
  // -------------------------------------------------------------------------
  q(4370400, 'Career Skills', CHAPTER, 'What an initiation note actually is',
    'A junior analyst is drafting their first "initiation of coverage" note on a mid-cap industrial. What is the defining feature of an initiation, as opposed to any other note type the team will publish on this name later?',
    'It introduces full coverage in one document — rating, target price, multi-bullet thesis, key debates, financial model, valuation pages, and risk section — and becomes the anchor that every subsequent update references',
    [
      ['It is the longest note the analyst will ever publish on the name and is graded on length and detail', 'Length is a side effect, not a defining feature. An initiation can be 30 pages or 90, but what makes it an initiation is that it establishes the full thesis and rating on day one — not that it hits a page count.'],
      ['It is a regulatory filing the firm makes to announce coverage to the SEC', 'Initiation notes are research products, not regulatory filings. The firm distributes them under its own research-distribution rules; the SEC is not the audience.'],
      ['It is functionally the same as an update note, just with a new rating attached', 'Updates assume the reader already knows the thesis and only update what has changed. An initiation cannot assume any prior knowledge — that is exactly what makes it a different document.'],
    ],
    'An initiation is the one note where the analyst has to put the entire thesis, model, valuation, and rating in front of the reader in a single document. Everything published on the name afterward — updates, previews, recaps — assumes the initiation as context. Drafting it as if it were just a long update is the most common rookie mistake.'),

  q(4370401, 'Career Skills', CHAPTER, 'Update note vs initiation',
    'After a company reports a strategic shift mid-quarter, the senior analyst asks the associate for a four-page update note. What is the right shape for an update, versus the initiation that already exists on the name?',
    'Lead with what changed and why it matters to the thesis, hold the rating or call out the rating change explicitly, and refer back to the initiation for the unchanged thesis pillars rather than re-running them',
    [
      ['Restate the full thesis from the initiation so the update can stand alone for new readers', 'Updates are incremental documents. The buy-side reader has either read the initiation or can pull it in two clicks; restating the full thesis dilutes the signal of what actually changed.'],
      ['Stay neutral on the implication for rating and target until the next quarterly model refresh', 'A four-page update is the moment to be explicit about rating and target. Holding the call for the next refresh leaves the buy-side guessing and tells them the analyst is not yet sure — which is itself a signal.'],
      ['Treat the strategic shift as background and use the note to push the existing thesis harder', 'An update that ignores the news in favor of the old thesis reads as if the analyst is defending a prior call rather than processing new information. Buy-side readers spot that immediately.'],
    ],
    'An update earns its place by isolating the delta — what changed, what it implies for the thesis, and whether rating or target moves. Re-running the unchanged pillars or burying the news under the old story both undermine why the note exists.'),

  q(4370402, 'Career Skills', CHAPTER, 'Preview note framing pre-earnings',
    'Two weeks before a covered company reports, the team publishes a preview note. What is the preview actually for, and what is the most important framing call?',
    'Frame the analyst\'s expectation versus the consensus (Street) expectation on the metrics that matter — name where the analyst is above, in line, or below, and on which lines — so the buy-side reader can position around the print',
    [
      ['Give the analyst\'s best guess of the reported numbers so the buy-side can mark their books', 'A preview is not a guess-the-number exercise. The job is to set up how to *interpret* the print — which lines matter, where consensus may be wrong — not to publish a point estimate that will be wrong by Friday.'],
      ['Reassert the long-term thesis to keep the rating defended into the print', 'Defending the long-term thesis in a preview reads as cheerleading. The preview is short-cycle: it tells the reader what to watch on the day, not why to hold the stock for two years.'],
      ['Summarize the company\'s last-quarter results so the reader has context for the upcoming print', 'Recap content belongs in the post-earnings note, not the preview. Eating the preview\'s space with last quarter\'s history wastes the analyst\'s setup window.'],
    ],
    'The preview\'s job is to install a framework for reading the print — analyst expectation vs consensus on each line that matters, plus what each outcome would imply for the thesis. Done right, the buy-side reader uses the preview as their scoring sheet on earnings day.'),

  q(4370403, 'Career Skills', CHAPTER, 'Recap note discipline',
    'A covered company reports at 4:01 PM Wednesday and the team publishes a recap pre-market Thursday. What is the discipline that separates a strong recap from a weak one?',
    'Tie each reported line back to what the preview said to expect, name what the print actually taught the analyst about the thesis, and update rating or target only if the new information moves the underlying view — not just because the stock moved',
    [
      ['Compare the reported numbers to consensus and let the deviation drive the recap\'s conclusion', 'Beat-or-miss versus consensus is the headline, not the recap. The buy-side already saw the print and the after-hours reaction; what they need is the analyst\'s read on what the numbers say about the thesis.'],
      ['Mirror the after-hours stock reaction in the rating change to stay aligned with the market', 'Chasing the after-hours move with a rating change is exactly the behavior that destroys credibility. If the print did not change the underlying view, the rating should not move just because the tape did.'],
      ['Lead with management\'s commentary from the call so the reader has the company\'s framing', 'Management framing is one input among many. Leading with it lets the issuer set the recap\'s narrative; the analyst\'s job is to evaluate it, not to relay it.'],
    ],
    'Recap discipline is about being honest with the prior call — what did the preview say, what did the print actually show, and does the underlying thesis move? Letting the stock reaction or management\'s framing drive the recap is how analysts end up looking like they are catching up to the market rather than reading it.'),

  q(4370404, 'Career Skills', CHAPTER, 'Thematic / sector note purpose',
    'The team is publishing a thematic note on data-center power demand that spans seven covered names. What makes a thematic note different from seven simultaneous updates?',
    'It sets a unifying framework — the underlying secular driver, the variables that determine which names benefit and by how much — and then maps each covered name onto that framework, so the conclusion is relative-positioning across the group rather than a series of standalone calls',
    [
      ['It is a marketing document the firm uses to attract new buy-side clients to the sector', 'Thematic notes do support business development, but framing them as marketing is how they end up shallow. The buy-side reads them for the framework — once it stops being analytical, the note loses its audience.'],
      ['It is seven updates stapled together for distribution efficiency', 'Stapling seven updates together produces a long document, not a thematic note. The point of the thematic is the *cross-name framework*, not the bundling.'],
      ['It is a long-horizon forecast on the sector that does not need name-level conclusions', 'Thematic notes that refuse to land on name-level implications are read once and ignored. The buy-side wants to know which names benefit, which do not, and how to position — naming the framework without applying it is half a note.'],
    ],
    'Thematic notes earn their length by building a framework that makes the cross-name picture obvious. If the reader cannot finish the note knowing which two names in the group benefit most and which one is exposed, the thematic has not done its job.'),

  q(4370405, 'Career Skills', CHAPTER, 'Channel-check note structure',
    'The analyst has done eight channel-check calls — three distributors, three customers, one trade publication editor, one ex-employee — and wants to write them up as a channel-check note. What is the right structure?',
    'Lead with the synthesized read across all eight sources, identify where they agree and where they diverge, weight each source for what it actually knows, and tie the synthesis back to the existing thesis — naming which checks would change the call',
    [
      ['Publish each call as a separate transcript so the buy-side can read the raw sources', 'Raw transcripts are not research — they are an input to research. Publishing them as-is also raises compliance questions about source attribution and confidentiality.'],
      ['Average the eight views into a single sentiment score and report it as the channel-check result', 'Averaging is the wrong unit. A distributor and an ex-employee see different parts of the elephant; collapsing them to one number throws away exactly the texture that makes the work valuable.'],
      ['Lead with the most positive call and footnote the negative ones to keep the rating supported', 'Cherry-picking sources to defend a rating is the channel-check confirmation bias trap in its purest form. It is also the move that destroys an analyst\'s credibility when the call later turns out wrong.'],
    ],
    'A channel-check note is a synthesis document. It earns its weight by being explicit about which sources said what, how the analyst is weighting each, where the sources disagree, and what would change the conclusion — not by averaging or by selecting for the desired answer.'),

  q(4370406, 'Career Skills', CHAPTER, 'Initiation front-page order',
    'Drafting the front page of an initiation note. Four elements need to land in the first 10 inches of the page: rating, target price, thesis, and the one-line summary of the company. What order best serves the buy-side reader?',
    'Rating and target up top in the title block, two- to three-bullet thesis immediately below, one-line company summary inline beneath the thesis — the buy-side reader sees the call and the reasoning before scrolling',
    [
      ['One-line company description first, then thesis, then rating, then target — narrative flow', 'Narrative flow serves the writer. The buy-side reader knows what the company does or can look it up in 10 seconds; what they cannot do is reverse-engineer the analyst\'s call from a description.'],
      ['Rating and target only on the front page; thesis and company description on page two', 'Hiding the thesis on page two means the rating sits unsupported on the front page. Portfolio managers scan the first screen and decide whether to read further — the thesis bullets have to be on it.'],
      ['Thesis first as the lead, then rating, then target, then company summary — bury the rating to force the reader to read the argument', 'Burying the rating is exactly the move that loses the reader. PMs read top-to-bottom and stop when they have what they need; the rating belongs where they will find it first.'],
    ],
    'The initiation front page is engineered for a PM who has 30 seconds. Rating and target signal the call, thesis bullets signal the reasoning, company summary anchors the unfamiliar reader — and that ordering is not stylistic, it is how research actually gets read.'),

  q(4370407, 'Career Skills', CHAPTER, 'Two-to-three-bullet thesis discipline',
    'The associate hands in a draft initiation with a seven-bullet thesis section. The senior analyst sends it back: "Two to three bullets, no more." Why is the cap so strict?',
    'A seven-bullet thesis signals that the analyst has not yet decided which pillars actually carry the call — the discipline of cutting to two or three forces the analyst to commit to what really matters and lets the reader argue with each pillar separately',
    [
      ['Buy-side readers will not read more than three bullets and the rest is wasted space', 'Reader bandwidth is part of the story but it is not the whole story. The deeper reason is that a seven-bullet thesis is usually a sign of weak prioritization, not just verbose writing — and the buy-side reads that signal too.'],
      ['Compliance limits the number of thesis statements that can appear in a published note', 'There is no compliance cap on thesis-bullet count. The constraint is editorial and analytical, not regulatory.'],
      ['Three bullets fit better on the template page and look cleaner in distribution', 'Template aesthetics are downstream of the real reason. A clean page is a side benefit; the discipline is about forcing the analyst to pick what carries the call.'],
    ],
    'A two- to three-bullet thesis is a forcing function. If the analyst cannot reduce the call to its load-bearing claims, the call is not yet sharp enough to publish. The reader\'s benefit follows from the analyst\'s discipline, not the other way around.'),

  q(4370408, 'Career Skills', CHAPTER, 'Naming the key debates',
    'Inside the initiation there is a "Key Debates" section. What is the function of that section and what separates a strong version from a weak one?',
    'Name the two or three live debates on the stock among investors — bull view vs bear view on each — and stake out the analyst\'s position on each with the evidence; the section earns its space by addressing the objections the buy-side already has',
    [
      ['List every objection the analyst has heard from anyone, so the buy-side knows the full picture', 'Exhaustive lists tell the reader the analyst could not prioritize. Three sharp debates with the analyst\'s position on each is more useful than ten objections enumerated without resolution.'],
      ['Stay neutral on each debate so the analyst preserves optionality on the call', 'Staying neutral in the Key Debates section is the opposite of what it is for. A neutral debates section says the analyst has a rating but no point of view on the actual arguments — which is incoherent.'],
      ['Present only the bull case on each debate so the rating is reinforced', 'A one-sided debates section is read as advocacy, not research. It also leaves the buy-side reader to surface the bear case themselves, which puts the analyst on the back foot in every follow-up call.'],
    ],
    'Key Debates is the section where the analyst engages the actual investor conversation already happening on the stock. Naming the debates explicitly, presenting both sides, and staking out a position with evidence is the move that makes the note useful in the room — and protects the rating from objections the buy-side was going to raise anyway.'),

  q(4370409, 'Career Skills', CHAPTER, 'Risk section honesty',
    'The risk section in an initiation note is sometimes treated as a compliance checkbox. What separates a risk section that actually informs the call from one that exists only for legal cover?',
    'Quantify the downside scenarios — name the specific events that would break the thesis and the rough P&L or multiple impact — and rank them by likelihood, so the reader can size the risk relative to the upside',
    [
      ['List every conceivable risk including macro, FX, geopolitical, regulatory, and pandemic to ensure full disclosure', 'A laundry list is a compliance reflex. It tells the reader the analyst has no view on which risks actually matter, and it dilutes the genuinely thesis-breaking risks under a pile of generic ones.'],
      ['Keep the section short and high-level so the bull case carries the page weight', 'A short, generic risk section is exactly what loses buy-side trust. PMs read the risk section carefully because it is where they discover whether the analyst has thought about what could go wrong.'],
      ['Include only the risks management has flagged in their 10-K so the analyst stays aligned with the company\'s own disclosure', 'Aligning to management\'s flagged risks is reading their disclosure, not analyzing the business. The buy-side wants the analyst\'s independent read on what could break the call.'],
    ],
    'An honest risk section quantifies, ranks, and ties each risk back to what would break the thesis. It is the section that earns trust precisely because it shows the analyst has imagined being wrong — and is willing to put numbers on what wrong would look like.'),

  q(4370410, 'Career Skills', CHAPTER, 'Where the model attaches',
    'The team\'s initiation note is being prepared for distribution. The full three-statement model is a 15-tab Excel file. How does that model relate to the published note?',
    'The note attaches the model as a downloadable file or links to it on the firm\'s research portal, and the note itself includes the summary financials and key forecast assumptions in tables — the buy-side analyst can read the note for the view and download the model for the work',
    [
      ['Paste the entire model into the back of the note as appendix pages so it reads as one document', 'A 15-tab Excel model does not paste usefully into a Word document. The buy-side analyst wants to download the live file to run their own scenarios — flattening it into pages destroys that workflow.'],
      ['Keep the model internal and publish only the summary financials so the buy-side has to call the analyst for detail', 'Hoarding the model is bad service and bad relationship hygiene. Buy-side analysts evaluate sell-side coverage partly on whether they get the actual work product; gating the model invites them to switch coverage.'],
      ['Publish the model as a separate marketing piece distinct from the initiation note', 'The model is part of the initiation, not a separate product. Decoupling them creates version-control problems and makes the model harder to find when it matters.'],
    ],
    'Published research and the underlying model are designed to ride together — note for the narrative, model for the work. The buy-side analyst expects to download the live spreadsheet, and the firm\'s research portal exists in large part to make that handoff clean.'),

  // -------------------------------------------------------------------------
  // THESIS AND VARIANT PERCEPTION (4370411–4370419)
  // -------------------------------------------------------------------------
  q(4370411, 'Career Skills', CHAPTER, 'Falsifiable thesis',
    'A senior analyst tells the associate: "If your thesis cannot be wrong, it is not a thesis." What does that actually mean in the context of a published initiation?',
    'The thesis has to specify the observable evidence that, if it failed to materialize within a stated window, would break the call — the reader should be able to look at the company 12–18 months later and say whether the thesis held or did not',
    [
      ['Falsifiable means including a downside scenario in the model so the analyst has covered both outcomes', 'A downside scenario is not a falsifier. The falsifier is the specific evidence — a metric, a customer behavior, a market share read — that would invalidate the *base case*, not a parallel pessimistic case.'],
      ['Falsifiable means the analyst commits to changing the rating if the stock goes down by a set percentage', 'Stock-price drawdowns are not falsifiers of the thesis. Stocks can fall on the right call and rise on the wrong one; the thesis has to be tested against the underlying business, not the tape.'],
      ['Falsifiable means the analyst presents multiple scenarios in the note and lets the reader pick', 'Scenario menus dodge the falsifiability question. The analyst owes the reader a base case *and* the evidence that would break it — not a buffet of alternatives.'],
    ],
    'A falsifiable thesis is one the analyst and the reader can both check against reality in a stated window. Without that, the thesis is an essay; with it, the thesis becomes a hypothesis the buy-side can actually trade against. Picking the wrong falsifier — price action, scenario menus, downside cases — is how most published theses become un-testable in practice.'),

  q(4370412, 'Career Skills', CHAPTER, 'Consensus position contrast',
    'The initiation\'s thesis section needs to be explicit about where the analyst sits relative to consensus (Street). Why is naming the consensus position out loud worth the page space?',
    'A thesis only earns its rating if it differs from consensus in a specific, named way — stating consensus first lets the reader see the gap, evaluate whether the analyst\'s evidence actually supports the gap, and judge whether the bet is sized correctly',
    [
      ['Naming consensus is courteous to other analysts on the Street and avoids appearing arrogant', 'Politeness is not the function. Naming consensus exists to *frame the bet* — the analyst is staking out a position different from a known anchor, and the reader needs to see the anchor to evaluate the staking.'],
      ['Consensus is implicit in the rating distribution and does not need to be stated in the note', 'Implicit consensus is invisible consensus. The reader has to be told what the analyst thinks the Street believes — otherwise the variant perception has nothing to vary from.'],
      ['Consensus is hard to summarize fairly and should be left out to avoid mis-characterization', 'The work of summarizing consensus is exactly what makes the contrast useful. Skipping it because it is hard removes the entire frame of reference for the call.'],
    ],
    'A thesis without a stated consensus position is a thesis without a foil — there is nothing for the reader to evaluate the variant view against. Putting consensus on the page first, then naming where and why the analyst differs, is what turns the rating from an opinion into a structured bet.'),

  q(4370413, 'Career Skills', CHAPTER, 'Variant perception durability',
    'The analyst\'s thesis differs from consensus on the company\'s gross margin trajectory — analyst sees 200bp expansion over two years, consensus sees flat. What separates a durable variant perception from a fragile one?',
    'The durable version names the specific operational change driving the margin gap — a fixed-cost absorption, a mix shift, a renegotiated supply contract — that consensus has either not seen or is discounting; and shows the channel checks or filings evidence that the analyst can see today',
    [
      ['Variant perception is durable when the analyst has the highest-conviction model on the Street', 'High conviction is a feeling, not a moat. A durable variant view rests on evidence consensus does not yet have or has misread — not on how strongly the analyst believes it.'],
      ['Variant perception is durable when at least one buy-side client agrees with the analyst\'s read', 'A single client agreeing is not durability — it could just be confirmation bias on both sides. The variant has to hold against the consensus argument, not against one sympathetic reader.'],
      ['Variant perception is durable when the analyst can defend it in a debate with the company\'s IR team', 'IR teams are interested parties — agreement from IR is closer to a confirmation-bias trap than a durability test. The harder test is whether the variant survives a skeptical buy-side PM.'],
    ],
    'A variant perception that just says "we are more optimistic than consensus" is not yet a thesis — it is a posture. The durable version points at the specific evidence that explains *why* consensus is wrong, ideally evidence the analyst has done original work to surface. That evidence is also what the analyst gets paid for.'),

  q(4370414, 'Career Skills', CHAPTER, 'Named catalysts with timing',
    'The initiation note has a "Catalysts" subsection. The associate has written: "Multiple catalysts including new products, margin expansion, and capital return." What is wrong with that, and what should the section look like?',
    'Each catalyst needs a name, a date or window, and a directional implication — for example, "Q3 print (mid-October): first quarter with the new SKU in distribution; expect ~80bp gross margin lift if attach rates hold" — so the reader can position around timing',
    [
      ['The catalysts should be removed because timing predictions usually miss', 'Removing catalysts because timing is hard is throwing out one of the most useful parts of a note. The buy-side reader specifically wants to know when the analyst expects the thesis to play out — vague or absent timing is what makes a note un-actionable.'],
      ['Add more catalysts to show the thesis has many ways to win', 'Catalyst inflation is a tell. Three named, dated catalysts beat ten generic ones — the reader is looking for what the analyst will actually be watching, not a long-list.'],
      ['Replace the catalysts with a long-horizon valuation argument that does not depend on near-term events', 'A long-horizon valuation case still benefits from named near-term checkpoints. Removing them does not strengthen the call — it just makes the note harder to follow week-to-week.'],
    ],
    'Catalysts earn their section by being specific and dated. Name the event, when it lands, what the analyst expects it to show, and what each outcome implies for the thesis. Vague catalysts are the canonical sign that the analyst has not yet decided what they are actually betting on.'),

  q(4370415, 'Career Skills', CHAPTER, 'Hedging discipline',
    'The senior analyst edits a draft and replaces "we anticipate" with "we expect" in five places. What is the rule on hedging language in published research, and why?',
    'Use "we expect" for the analyst\'s base case and reserve softer hedges like "could," "may," or "if" for genuinely conditional outcomes — disciplined hedging signals that when the analyst says "we expect," they mean it; over-hedging tells the buy-side the analyst is not committing',
    [
      ['Hedge everything heavily because compliance prefers conservative language', 'Compliance is fine with confident language as long as it is supported. Over-hedging is an analyst tic, not a regulatory requirement, and it undermines the signal value of every claim in the note.'],
      ['Avoid hedging entirely and write every claim as a fact for maximum impact', 'Removing all hedges over-claims and destroys credibility the first time something goes wrong. The discipline is calibrated confidence, not absence of qualifiers.'],
      ['Use "we anticipate" rather than "we expect" because it sounds more professional in research', 'Style preferences are downstream of clarity. "We expect" is the more direct word for a base-case forecast; "we anticipate" reads as softer and less committed, which is the opposite of the signal an analyst wants on a base case.'],
    ],
    'Hedging language is part of the signal. When every claim is hedged identically, the reader cannot distinguish the analyst\'s base case from a side scenario — and that is the failure mode. Reserving softer language for genuinely conditional claims is what makes "we expect" actually mean something.'),

  q(4370416, 'Career Skills', CHAPTER, 'Numerate evidence anchoring',
    'A draft thesis bullet reads: "Strong customer demand will continue driving growth above expectations." The senior analyst flags it. What is the right rewrite?',
    'Replace with a specific, dated, numerate claim — for example: "Distributor sell-through grew 14% YoY in May–July versus the company\'s low-single-digit guide, implying upside to back-half organic growth"',
    [
      ['"Customer demand remains robust across the portfolio and management expressed confidence on the last call" — keeps the bullet positive without overclaiming', 'Replacing one vague phrase with another vague phrase does not fix the problem. The thesis bullet still has no evidence the reader can argue with or check.'],
      ['"Demand drivers are durable and well-supported by macro tailwinds in the company\'s end markets" — frames the bullet at the macro level', 'Macro-level framing is even less testable than the original. The thesis bullet has to point at something the analyst has actually observed, not at the macro backdrop.'],
      ['"Demand is strong and we expect outperformance" — keeps the bullet short and confident', 'Short and confident does not equal evidenced. Brevity is welcome; brevity without anchor is just a stronger version of the original problem.'],
    ],
    'Numerate evidence anchoring is what separates analysis from cheerleading. Specific numbers, dated observations, and named sources are the load-bearing structure of a thesis bullet — without them, the bullet cannot be evaluated, cannot be tested, and cannot earn trust over time.'),

  q(4370417, 'Career Skills', CHAPTER, 'Controversial Sell wrong for 6 months',
    'You issued a Sell rating six months ago on a name where consensus was Buy. The stock is up 35% since you wrote it; your thesis has not yet played out but you still believe the operational evidence supports the call. How do you handle the public position now?',
    'Publish an honest interim note: acknowledge the stock performance has been against the call, restate the thesis pillars explicitly, name the specific evidence that has and has not played out, and re-commit to the rating with named falsifiers — or take the rating off if the underlying evidence has actually shifted',
    [
      ['Quietly remove the Sell and move to Hold to limit the reputational damage from being wrong for six months', 'A quiet rating change after a stock has moved against the call is exactly the move that destroys credibility. The buy-side notices, and "stealth-Hold after 35%" is one of the more visible signals of an analyst not standing behind their work.'],
      ['Double down on the Sell and add a lower target to show conviction', 'Doubling down without re-testing the evidence is its own discipline failure. Adding a lower target after a 35% adverse move reads as advocacy, not analysis, and is the textbook setup for a worse mistake.'],
      ['Stop publishing on the name until the thesis plays out so the rating is not being tested in public', 'Going silent on a covered name when the call is going against you is the worst available option — buy-side clients read silence as either embarrassment or institutional avoidance, both of which damage the franchise more than an honest interim note would.'],
    ],
    'Controversial calls that take longer than expected are the test of an analyst\'s integrity. The path that preserves the franchise is the one that owns the adverse move in print, re-states the falsifiable evidence, and either stands by the call honestly or moves on it because the evidence has actually shifted — not because the price has.'),

  q(4370418, 'Career Skills', CHAPTER, 'Rating change vs estimate revision',
    'After a quarter you cut your revenue and EPS estimates by 6% and 9% respectively but the rating stays at Buy. Is that a coherent position to publish?',
    'Yes if the thesis still holds at the new numbers — the rating is a function of risk-adjusted upside to the target, not of estimate direction; the note has to walk the reader through why a lower estimate is still consistent with the same call',
    [
      ['No — cutting estimates always implies cutting the rating, since lower numbers mean less upside', 'Estimates can fall while the rating holds. The rating depends on the gap between the current stock price and a target price built off the analyst\'s view of intrinsic value; estimate cuts do not mechanically close that gap.'],
      ['No — keeping the rating after an estimate cut looks inconsistent and will draw compliance attention', 'Compliance is not concerned with rating-vs-estimate symmetry; it is concerned with whether the published view is supported. A held rating with cut estimates is a normal outcome and is published frequently.'],
      ['Yes but only if the target price is raised to offset the estimate cut — otherwise the math breaks', 'Raising the target to offset an estimate cut is the move that *would* be incoherent, not the inverse. Targets follow estimates and valuation; mechanically inflating them to defend a rating is exactly the behavior that erodes trust.'],
    ],
    'Estimate revisions and rating changes are linked but not identical. A clear note can cut estimates, hold the rating, and walk the reader through why — because the thesis still works at the new numbers and the target still implies enough risk-adjusted upside. The job is the reasoning, not the symmetry.'),

  q(4370419, 'Career Skills', CHAPTER, '"More optimistic" is not a thesis',
    'A draft thesis bullet reads: "We are more optimistic than consensus on the company\'s ability to grow earnings." Why is that line not yet a thesis, even though it stakes out a position?',
    'It names a direction but not a mechanism — the reader cannot tell *why* the analyst is more optimistic or *where* consensus is wrong, so the claim cannot be evaluated, defended, or falsified',
    [
      ['It is fine as a top-bullet teaser because the rest of the note will explain the reasoning', 'Top bullets do not get a pass on being substantive — they *are* the thesis. A vague top bullet tells the reader the analyst has not yet decided what the actual variant view is.'],
      ['It is not a thesis because it does not include a target price', 'Targets sit elsewhere in the note. The problem with the bullet is the absence of a mechanism, not the absence of a number.'],
      ['It is not a thesis because it is too confident — analysts should not claim to be more optimistic than the Street', 'Being more optimistic than the Street is what most Buy ratings are. The problem is not the direction; it is the lack of grounding for why.'],
    ],
    '"We are more optimistic" is a posture, not an argument. A real thesis names the mechanism — the specific operational, financial, or market dynamic the analyst sees and consensus does not — and the evidence that supports it. Without that, the bullet is unfalsifiable and the rating sits on nothing.'),

  // -------------------------------------------------------------------------
  // CHANNEL CHECKS (4370420–4370425)
  // -------------------------------------------------------------------------
  q(4370420, 'Career Skills', CHAPTER, 'Distributor channel checks',
    'You are setting up channel checks for a CPG name where the company sells through grocery and mass distribution. What are distributor calls actually good for, and what are they not good for?',
    'Good for sell-through pace, shelf positioning, promotional activity, and inventory levels across the channel; not good for total company performance, end-consumer demand, or anything outside the distributor\'s own SKU set',
    [
      ['Good for confirming end-consumer purchase intent at the household level', 'Distributors do not see the household. Their visibility ends at retailer shelves and reorder patterns — they cannot tell you what consumers are about to do, only what retailers have asked for.'],
      ['Good for getting management\'s next-quarter guidance ahead of the announcement', 'Distributors do not have management\'s forward guidance, and if they did, sourcing it through them would be a textbook MNPI problem. Distributor checks are about observable sell-through, not pre-announcement leaks.'],
      ['Good for unlimited insight as long as the analyst pays for the call through an expert network', 'Paying through an expert network does not expand what a distributor knows; it just creates a channel for the conversation. The limits of distributor visibility are structural, not commercial.'],
    ],
    'Distributors are excellent sources for what they actually see — sell-through, shelf, inventory, promo — and useless beyond that. Asking them questions outside their visibility either gets you a polite guess or, worse, drifts toward MNPI territory. The discipline is matching the question to the source.'),

  q(4370421, 'Career Skills', CHAPTER, 'Customer channel checks',
    'For a B2B software name, you set up calls with 12 current and prospective customers. What is the question structure that extracts genuine signal versus polite noise?',
    'Ask about the specific decision they made — what they evaluated, who they chose, why, what would change their mind — and probe for budget reallocation evidence rather than stated future intent',
    [
      ['Ask each customer how satisfied they are with the product on a 1-10 scale', 'Stated satisfaction scores are famously soft data — most customers default to 7 or 8 regardless of actual behavior. Decisions and budgets reveal far more than feelings.'],
      ['Ask whether they would recommend the product to a peer', 'NPS-style questions produce a number but not a usable signal for investment work. The buy-side cannot trade against "would recommend"; they can trade against actual procurement decisions.'],
      ['Ask about the company\'s public roadmap and which features they are most excited about', 'Roadmap excitement is forward-looking speculation. The signal lives in completed decisions — what they bought, what they cut, what they renewed — not in what they look forward to.'],
    ],
    'Customer channel checks earn their weight by extracting decisions and behavior, not opinions and intent. The well-structured call is built around what the customer actually did, why, and what would make them change — that is the data that maps to financial outcomes the analyst can model.'),

  q(4370422, 'Career Skills', CHAPTER, 'Ex-employee channel checks compliance',
    'You want to call an ex-employee of a covered company who left 14 months ago. What is the compliance boundary that has to govern that call?',
    'The ex-employee can speak only to publicly known or non-confidential information from their tenure; any confidentiality agreement they signed remains binding, the analyst cannot solicit material non-public information, and the conversation should be conducted through a compliance-approved expert network or recorded according to firm policy',
    [
      ['Once an employee has left for more than 12 months, any information they share is fair game', 'Tenure-based time limits are an analyst myth, not a real compliance rule. Confidentiality obligations on specific information persist for whatever period the original agreement specified — often much longer than 12 months, sometimes indefinitely.'],
      ['The analyst should ask for everything the ex-employee remembers and let compliance flag anything problematic afterward', 'Compliance flags happen before the conversation, not after. Soliciting MNPI is the violation; "we asked and they told us" does not retroactively make the question acceptable.'],
      ['The call can be conducted directly without an expert network as long as the analyst takes notes carefully', 'Going around the expert-network framework removes the audit trail and the screening that protects both the analyst and the firm. Most firms require expert-network or comparable approved channels for exactly this reason.'],
    ],
    'Ex-employee channel checks are a powerful research tool inside the compliance frame and a serious problem outside it. The boundary is publicly known or non-confidential information only, confidentiality agreements binding regardless of tenure, expert-network or equivalent process for the call itself, and no solicitation of MNPI. Crossing any of those is how analysts and firms end up in enforcement actions.'),

  q(4370423, 'Career Skills', CHAPTER, 'Third-party data sets',
    'The team subscribes to credit-card panel data, app download data, and web-traffic data on covered consumer names. What is the right way to incorporate these data sets into research?',
    'Use them as one input among many — triangulate against company-disclosed metrics, channel checks, and the model — and be explicit in the note about coverage, methodology limits, and how the analyst is weighting the data this quarter',
    [
      ['Use them as the primary signal and treat them as ground truth because they are quantitative', 'Quantitative does not equal accurate. Panel data has well-known coverage and panel-rotation issues; treating it as ground truth is exactly the mistake that produces confident, wrong notes.'],
      ['Avoid them because they introduce noise and methodology problems that the analyst cannot fully audit', 'Avoiding the data entirely concedes a real edge. The discipline is to use it carefully and disclose how — not to ignore signal because it has limits.'],
      ['Use them only in internal team discussions and never reference them in published research', 'Excluding the data from the published note hides the basis of the analyst\'s view from the buy-side. As long as the data is licensed and used per firm policy, citing it transparently is the right move.'],
    ],
    'Third-party data sets are genuinely useful, genuinely limited, and most useful when explicitly triangulated against other evidence. Treating them as ground truth or refusing to engage with them are both lazy postures; the work is in knowing the coverage and weighting accordingly.'),

  q(4370424, 'Career Skills', CHAPTER, 'Channel-check confirmation bias trap',
    'You are bullish on a name and start channel checks. Three of your first four calls confirm your view; the fourth is mildly negative. What is the confirmation bias trap, and how do you handle it?',
    'The trap is to weight the three supportive calls and discount the negative one as an outlier; the discipline is to deliberately seek the next checks among sources likely to disagree, and to write up the negative call with the same weight as the others until the evidence genuinely justifies down-weighting it',
    [
      ['Move on once the majority of checks confirm the view since the negative one is statistical noise', 'Four checks is far too few to dismiss any single one as noise. The "majority confirms" framing is exactly how bullish theses calcify around weak evidence and survive longer than they should.'],
      ['Restart channel checks with a different sample set since the first batch is now contaminated', 'The first batch is not contaminated — it is just incomplete. Restarting throws away real data; the right move is to widen, not to discard.'],
      ['Stop channel checks and rely on the company\'s public disclosure since the calls are now mixed', 'Falling back on disclosure because the checks got harder is the opposite of what channel checks are for. Mixed signal is when the work starts, not when it stops.'],
    ],
    'Channel-check confirmation bias is the single most common research-quality failure in coverage. The discipline is structural: deliberately source skeptical voices, log every call with equal weight first and adjust only with reason, and let the negative checks shape the next checks. Analysts who skip this step build conviction faster and break worse later.'),

  q(4370425, 'Career Skills', CHAPTER, 'Trade publication signal',
    'A trade publication for the company\'s industry runs a feature article describing pricing pressure across the sector. How should the analyst use that piece in the research process?',
    'Treat it as a thematic lead — a hypothesis worth testing in subsequent channel checks and against the company\'s pricing data — rather than as evidence in itself; trade pubs surface trends but rarely have the company-specific resolution the thesis needs',
    [
      ['Cite the article in the next published note as confirmation of the analyst\'s pricing concern', 'Citing a trade-pub article as evidence in published research is a thin foundation. The buy-side reader treats it as reading the same magazine the analyst read; it does not constitute the original work the rating fee is paying for.'],
      ['Discount the article entirely since trade publications are downstream of the same primary sources the analyst already uses', 'Discounting trade pubs as a category is a mistake — they often surface sector-wide patterns earlier than corporate disclosure. The right posture is to use them as leads, not to dismiss them.'],
      ['Forward the article to the buy-side as a research alert before doing the underlying work', 'Pushing a trade-pub piece as a "research alert" without doing the original work is exactly the kind of low-effort communication that erodes the franchise. The buy-side has their own subscriptions.'],
    ],
    'Trade publications are most useful as leads — they tell the analyst where to look next. The actual research is in the follow-up: channel checks that test the trend, company-specific data that maps it to numbers, and the analyst\'s own synthesis. Trade-pub citations are anchors, not conclusions.'),

  // -------------------------------------------------------------------------
  // COMPLIANCE AND REG FD (4370426–4370431)
  // -------------------------------------------------------------------------
  q(4370426, 'Career Skills', CHAPTER, 'Reg FD basics',
    'A junior analyst asks: "What does Reg FD actually prohibit?" What is the clean one-paragraph answer for a sell-side context?',
    'Regulation Fair Disclosure prohibits issuers (the companies, not the sell-side) from selectively disclosing material non-public information to securities professionals or holders without simultaneous or prompt public disclosure — its core target is the issuer\'s communication, but it shapes what the sell-side can ask for and what the issuer can share',
    [
      ['It prohibits the sell-side from publishing research without prior SEC review of the note', 'Reg FD has nothing to do with pre-publication SEC review of research. Sell-side notes are reviewed internally by the firm\'s compliance and legal, not by the SEC.'],
      ['It requires issuers to release earnings information only after market close', 'Reg FD does not specify when in the day disclosure has to happen — only that it has to be broadly disseminated rather than selectively shared. Pre-market, intraday, and post-market disclosure are all common.'],
      ['It prohibits the sell-side from trading on any information received from an issuer', 'Sell-side equity research generally does not trade — there is structural separation between research and the firm\'s trading desks for exactly the reasons Reg FD and earlier rules established. The regulation\'s subject is selective disclosure by the issuer, not sell-side trading.'],
    ],
    'Reg FD reshaped sell-side ER by closing the channel of selective disclosure from issuers to favored analysts. The regulation\'s target is the issuer, but the consequence for the analyst is that the IR conversation now has explicit guardrails — guidance has to be public or it should not be shared at all.'),

  q(4370427, 'Career Skills', CHAPTER, 'Issuer 1x1 boundary',
    'You have a one-on-one meeting with the CFO of a covered company. During the meeting, the CFO begins to describe the company\'s expected gross margin trajectory over the next two quarters in a way that goes beyond public guidance. What is the right immediate response?',
    'Stop the line of conversation, note that the information appears to go beyond public guidance, and either redirect the meeting to public topics or end it — then escalate to compliance to determine whether the firm now has a Reg FD problem that requires the issuer to make a public disclosure',
    [
      ['Take careful notes and use the information in the next published note since the CFO chose to share it', 'Using selectively disclosed forward information is a Reg FD violation by the issuer and a compliance failure by the analyst. The CFO sharing it does not authorize use — and using it makes the firm complicit.'],
      ['Ask the CFO to clarify whether the information is public, and proceed if they say yes', 'Asking the CFO to bless their own potentially selective disclosure does not resolve the problem — the CFO has an obvious incentive to want the conversation to continue. Compliance, not the CFO, makes that call.'],
      ['Continue the meeting normally and flag the information to a small group of trusted clients', 'Selective sharing of selectively disclosed information compounds the violation. There is no version of this path that survives compliance review.'],
    ],
    'The issuer 1x1 is one of the most useful and most regulated conversations in sell-side research. The boundary is clean: discussion of public disclosure and historical context is fine; forward, specific, material guidance that goes beyond public statements is not. Stopping the conversation and escalating is how analysts protect the firm and themselves.'),

  q(4370428, 'Career Skills', CHAPTER, 'Quiet period before earnings',
    'A covered company reports earnings in 10 days. Their IR team has stopped returning calls, citing "quiet period." Is that an issuer obligation, a courtesy, or a sell-side restriction — and what does it mean for the analyst\'s work?',
    'It is primarily a self-imposed issuer practice — companies typically restrict communications with investors in the weeks before earnings to avoid Reg FD violations and to control disclosure timing; the analyst can still do all non-issuer work (channel checks, model, peer reads) but should not expect IR access until after the print',
    [
      ['It is an SEC requirement that prevents analysts from publishing any research on the name during the quiet period', 'There is no SEC quiet period for sell-side research on covered companies. Analysts publish previews and updates during issuer quiet periods all the time — what the period restricts is the *issuer\'s* communications, not the analyst\'s.'],
      ['It is a courtesy from IR that can be overridden with sufficiently senior contacts at the firm', 'Trying to override an issuer\'s quiet period through senior contacts is exactly the kind of access-pressure tactic that creates Reg FD exposure for the company and reputational risk for the analyst. The right move is to respect it.'],
      ['It restricts the sell-side firm from issuing any rating changes during the period', 'There is no general firm-level restriction on rating changes during issuer quiet periods. Firms have their own pre-earnings rating-change policies, but those are internal — not driven by the issuer\'s quiet practice.'],
    ],
    'The quiet period is an issuer practice designed to manage their own Reg FD risk, not a regulation that binds the sell-side. Analysts continue to work on the name, do channel checks, and even publish — but IR access slows or stops, and the analyst plans the pre-earnings window accordingly.'),

  q(4370429, 'Career Skills', CHAPTER, 'Blue sheet / internal review',
    'You have finished a draft initiation note. Before it can be distributed, it has to go through internal review (sometimes called a "blue sheet" process at some firms). What is that review actually checking for?',
    'Compliance, legal, and supervisory review of the note — disclosure language, conflicts disclosure, sourcing, factual claims, ratings consistency with the rating-distribution rules, and that nothing in the note is selectively disclosed or based on MNPI — before the note is published externally',
    [
      ['Editorial review for grammar, formatting, and tone before publication', 'Editorial review may happen in parallel but it is not the blue sheet. The blue-sheet review is compliance and supervisory — it exists for legal and regulatory protection, not for prose polish.'],
      ['A pre-publication courtesy review by IR at the covered company to confirm factual accuracy', 'Sending the note to IR for review before publication is exactly what compromises analytical independence — it is the post-Global-Analyst-Settlement red line, not the blue sheet process. The blue sheet is internal to the firm.'],
      ['SEC review of the note before it can be distributed to clients', 'The SEC does not pre-review sell-side research notes. The firm\'s own compliance and supervisory infrastructure handles the pre-publication review.'],
    ],
    'The blue sheet (or whatever the firm calls it) is the internal compliance and supervisory pre-publication review — it is one of the structural protections that makes published sell-side research a regulated product. The process is sometimes slow, but the analyst who treats it as a hurdle rather than as protection eventually finds out why it exists.'),

  q(4370430, 'Career Skills', CHAPTER, 'Ratings change approval workflow',
    'You want to downgrade a name from Buy to Sell, skipping Hold. Walk through the typical approval workflow before the note can be published.',
    'Draft the note with the new rating and target, submit to the director of research and to compliance for review of evidence and disclosure language, ensure the rating distribution and any firm policy on skip-level changes is satisfied, schedule publication for a fair-dissemination window, and prepare for IR fallout — all before the note hits clients',
    [
      ['Publish the new rating immediately and let the firm process the paperwork afterward', 'Skipping pre-publication review on a rating change — especially a skip-level downgrade — is the kind of action that ends careers and triggers enforcement. Every firm requires review before distribution; "process afterward" is not a workflow that exists.'],
      ['Notify the company\'s IR team in advance so they are not surprised by the downgrade', 'Pre-notifying IR of an unpublished rating change is selective disclosure of material research, and a route that compromises both the analyst and the firm. The note publishes first; IR finds out at the same time as everyone else.'],
      ['Quietly move the rating to Hold first and then to Sell three weeks later to avoid the skip-level optics', 'Two-step rating changes designed to manage optics rather than the actual call are a credibility failure. If the evidence supports Sell, the note says Sell — and the workflow exists to verify the evidence does support it.'],
    ],
    'Ratings-change workflows are deliberately structured to prevent both compliance failures and reputational ones. The combination of research-management approval, compliance review, and dissemination discipline protects the firm — and the analyst — from the very predictable problems that follow rushed or selective rating changes.'),

  q(4370431, 'Career Skills', CHAPTER, 'MNPI from a peer issuer',
    'A senior executive at a peer company (not one you cover, but a direct competitor of one you do) tells you in conversation that their customer pipeline shows the covered company has lost a major contract — information that is not yet public. What is your obligation?',
    'Treat the information as potentially material non-public — it is material to the covered company\'s thesis even though it came from a peer — and do not use it for trading, publication, or client communication; escalate to compliance and let them determine restricted-list and information-barrier implications',
    [
      ['The information came from a peer, not from the covered company itself, so it is not MNPI for the covered name', 'MNPI is defined by the materiality and non-public status of the information about a specific issuer, not by whether it was learned from that issuer. A peer executive sharing a competitor\'s contract loss is exactly the kind of information that has triggered enforcement actions historically.'],
      ['Use the information in the next published note since the analyst learned it through ordinary professional contact', 'Ordinary professional contact does not sanitize MNPI. The information remains material and non-public; using it in a published note creates exposure for the analyst, the firm, and any client that traded on it.'],
      ['Share it with the buy-side verbally rather than in print to limit the paper trail', 'Verbal selective sharing of MNPI is the most aggressive version of the violation, not a mitigated version. There is no path to using the information legally short of waiting for public disclosure.'],
    ],
    'MNPI is sourced wherever it comes from — including peers, suppliers, customers, and ex-employees. The discipline is to recognize that materiality and non-public status, not source identity, define the problem. Escalation to compliance is the only correct first move once the information has been received.'),

  // -------------------------------------------------------------------------
  // DISTRIBUTION AND RECEPTION (4370432–4370437)
  // -------------------------------------------------------------------------
  q(4370432, 'Career Skills', CHAPTER, 'Pre-market vs intraday publication',
    'You have a Buy initiation ready to publish on a US-listed name. Operations asks whether to release pre-market (around 6:30 AM ET), intraday, or post-market. What is the default and why?',
    'Pre-market is the standard for substantive notes on US-listed names — it lets the buy-side absorb the note before the open and trade on it during the regular session, while avoiding the price-move-then-publish optics of intraday distribution',
    [
      ['Post-market is the default because it gives the buy-side overnight to read the note', 'Post-market publication is sometimes used for thematic or non-time-sensitive notes, but it delays actionability by a full trading day and is not the default for rating-change or initiation publications.'],
      ['Intraday is the default because it minimizes the dissemination lag between completion and distribution', 'Intraday publication is generally avoided for substantive notes because it raises optics questions (did the stock move while the note was queued?) and forces the buy-side to read and trade simultaneously, which serves no one.'],
      ['It does not matter because the dissemination platforms broadcast instantly regardless of time of day', 'Dissemination is instant but reception is not. The audience reads pre-market on a different cadence than mid-session — distribution timing is a real choice, not a logistical detail.'],
    ],
    'Pre-market publication is the default for substantive notes on US-listed names because it cleanly separates analysis from intraday tape action and gives the buy-side a quiet window to read. Intraday and post-market are deliberate exceptions, not defaults.'),

  q(4370433, 'Career Skills', CHAPTER, 'AlphaSense / Refinitiv Eikon dissemination',
    'When the firm publishes a note, it appears on the firm\'s own research portal but also on third-party platforms like Refinitiv Eikon, Bloomberg, and AlphaSense (where the firm has distribution agreements). What is the practical implication of that multi-channel dissemination?',
    'The note reaches a broader audience than just the firm\'s direct clients — buy-side analysts at non-client firms see the rating and title, search the body for keywords, and may cite the firm\'s view; the analyst should write knowing the audience extends well beyond the immediate client base',
    [
      ['It violates Reg FD because the note is being distributed to non-clients without payment', 'Reg FD does not govern sell-side research distribution agreements with third-party platforms. Multi-channel dissemination has been the norm for two decades; it is contractual, not regulatory.'],
      ['It limits the firm\'s ability to monetize research because the content is freely accessible', 'Platforms like Refinitiv and Bloomberg are paid subscription products. Access is gated; the firm has commercial arrangements with the platforms that monetize wider distribution rather than undermine it.'],
      ['It only matters for IR teams at the covered companies and not for the analyst\'s daily work', 'IR teams do monitor third-party platforms, but the broader audience matters for the analyst too — how the note reads on Bloomberg search, how the title scans, how the headline summary lands, all influence how the call propagates.'],
    ],
    'Multi-channel dissemination means the analyst is writing for an audience much wider than the direct client list — and that affects how titles, headlines, and front-page summaries should be constructed. The note that reads well only on the firm\'s portal misses two-thirds of its audience.'),

  q(4370434, 'Career Skills', CHAPTER, 'Firm-wide blast vs targeted',
    'You can publish to the full distribution list (a firm-wide "blast") or to a targeted subset (sector-focused PMs, for example). What is the rule on when each is appropriate?',
    'Substantive notes — initiations, rating changes, material updates — go to the full list; lighter pieces like quick comments or sector summaries may be targeted; what the analyst cannot do is selectively share a material view with a subset, because that creates the same selective-disclosure problem Reg FD was built to address',
    [
      ['Targeted distribution is always preferred because it builds stronger relationships with the most valuable clients', 'Targeted distribution of material research views is selective disclosure of research, which violates firm distribution rules and the spirit of fair dissemination. Strong relationships are built on quality and accessibility, not on giving favored clients early access.'],
      ['Firm-wide blasts should be reserved for thematic notes only, because rating changes are too sensitive to broadcast widely', 'The logic is inverted. Rating changes are exactly what require fair dissemination — they are the most sensitive content precisely because they are the most actionable. Broadcasting widely is the rule, not the exception.'],
      ['Distribution width is a marketing decision made by sales, not a compliance question for the analyst', 'Sales coordinates dissemination but distribution of material research is fundamentally a compliance question. The analyst is part of the decision on which content goes where, and the firm\'s distribution policy enforces the rule.'],
    ],
    'The default for material research is wide fair dissemination — initiations and rating changes go to everyone simultaneously. Targeting is for lighter content where no one is materially advantaged by getting it earlier. Mixing those up is how firms end up in regulatory trouble and how analysts erode the franchise.'),

  q(4370435, 'Career Skills', CHAPTER, 'How PMs actually read notes',
    'A senior analyst tells the associate: "Most PMs spend 30 seconds on your note. Write for that." What does that imply about how the note should be structured?',
    'Rating, target, and a one-bullet thesis distillation in the first 30 seconds of reading; the next layer of detail visible if the reader scrolls; the deep work — model, valuation pages, debates — accessible but below the fold because most readers will not get there on first pass',
    [
      ['Write the note short — under two pages — so the entire content fits in 30 seconds', 'Short notes serve fast readers but starve the slow ones. The discipline is layered structure that serves both audiences in the same document, not a uniformly short note.'],
      ['Front-load the most positive evidence so the reader takes away conviction even from a 30-second scan', 'Front-loading evidence selectively is advocacy, not analysis. The discipline is to put the *call* — rating and thesis — in the 30-second zone, not to skew the content toward what reads best at a glance.'],
      ['Email a one-paragraph summary separately so the PMs do not have to open the note at all', 'Replacing the note with a summary undercuts the whole research product. The layered note structure is the answer; bypassing it is how analysts lose the audience for everything beyond the summary.'],
    ],
    'PMs reading on a 30-second budget is the operating reality of buy-side reception. Layered structure — call up top, reasoning below, deep work accessible — is how a single document serves both the quick read and the careful one. Optimizing for the fast reader alone, or for the deep reader alone, misses the rest of the audience.'),

  q(4370436, 'Career Skills', CHAPTER, 'First-30-second hierarchy',
    'Inside the first 30 seconds of a PM\'s read, three pieces of information have to land. Rank them: thesis bullet, rating, target price.',
    'Rating first (the call), target price second (the magnitude), one-bullet thesis third (the why) — the PM\'s decision tree goes "do I care about this rating change → how much upside/downside → what is the reasoning"',
    [
      ['Thesis first (the why), then rating, then target — readers want the reasoning before the conclusion', 'Reading order goes the other way at PM scale. The PM is filtering whether to invest *any* reading time; the rating and magnitude determine that, and the thesis matters only conditional on the call being worth time.'],
      ['Target price first (the magnitude), then rating, then thesis — readers are most interested in price', 'Target first inverts the call structure. The rating is the analyst\'s recommendation; the target is the supporting magnitude. Without the rating, the target sits unanchored.'],
      ['Rating and target should be omitted from the first 30 seconds so the reader engages with the thesis without anchoring bias', 'Withholding the call in research is the opposite of what the buy-side wants. PMs are not coming to research to be unbiased — they are coming for the analyst\'s view, which is the rating and target.'],
    ],
    'The 30-second hierarchy is rating → target → thesis bullet. The PM\'s mental model is "is there a call here, how big, why" — and the front of the note has to match that order. Inverting the hierarchy in the name of nuance is how good analysis gets ignored.'),

  q(4370437, 'Career Skills', CHAPTER, 'Cliff-notes culture and the appendix',
    'The firm\'s buy-side clients are notorious for reading only the front page and the appendix is where the model and valuation pages live. Does the appendix still matter?',
    'Yes — the appendix is where the analyst is read most carefully by the buy-side analysts who do the actual work, even if PMs skip it; it is also the part most readers consult when they decide whether to call the analyst, ask for the model, or stress-test the call',
    [
      ['No — if PMs do not read the appendix, the analyst should drop it and publish a shorter note', 'Dropping the appendix because the headline reader skips it ignores the buy-side analysts who *do* read it and who carry the call internally at their firms. Those analysts are how research influences positioning, even if PMs deliver the final yes-or-no.'],
      ['Yes — the appendix is what compliance reviews to ensure the disclosure language is complete', 'Compliance reviews the entire note, not just the appendix. The function of the appendix is supporting the work, not housing the disclosure.'],
      ['Yes — but only because buy-side audit teams check it for valuation methodology, not because it shapes investment decisions', 'Buy-side analysts use the appendix as their working ground for valuation and forecast — it directly shapes investment decisions, not just audit. Treating it as a compliance artifact misreads who uses it.'],
    ],
    'The cliff-notes culture at PM level coexists with deep reading at buy-side analyst level. The appendix is what the working analyst on the other side uses to test the call, build their own version, and decide whether to recommend the position internally — which is the real chain of influence in research.'),

  // -------------------------------------------------------------------------
  // 1x1s, NDRs, EARNINGS CALLS, IR DYNAMICS, SELL RATINGS (4370438–4370443)
  // -------------------------------------------------------------------------
  q(4370438, 'Career Skills', CHAPTER, 'Corporate access conferences',
    'The firm hosts an industry conference where 30 covered companies present and meet with buy-side clients. Why does the firm invest in running these, and what is the analyst\'s role on the day?',
    'Conferences create curated access between management teams and buy-side investors — the firm earns goodwill from both sides, the analyst meets clients in volume and demonstrates judgment by setting context for each company\'s presentation, and one-on-one sessions are scheduled around the analyst\'s coverage',
    [
      ['The firm runs conferences primarily as a revenue line through ticketing and sponsorship fees', 'Conference economics are real but they are not the primary motivation. The deeper value is positioning the firm as the trusted intermediary between management and the buy-side in a sector — which compounds into trading commission, banking, and research relationships.'],
      ['The analyst\'s role is to introduce each management team and then step back so the buy-side can ask questions directly', 'Stepping back undersells the analyst\'s role. The analyst sets context, frames the key debates, often moderates the 1x1s, and uses the day to build relationships in the room — passive introduction wastes the access.'],
      ['Conferences are primarily for retail-investor-facing companies and have limited relevance to institutional research', 'The conference circuit is squarely institutional. Retail-facing companies attend but the audience is buy-side PMs and analysts; the format is structured exactly around institutional decision-making.'],
    ],
    'Corporate access conferences are the structural form of an old sell-side function: getting the right management teams in front of the right institutional investors with the right context. The analyst earns the franchise on conference days as much as on publication days — judgment, relationships, and read-the-room skill all show.'),

  q(4370439, 'Career Skills', CHAPTER, 'Non-deal roadshows (NDRs)',
    'A company asks the firm to host a non-deal roadshow (NDR) — two days of buy-side meetings with management in major cities, with no transaction attached. What is the structure and what is the analyst\'s job during it?',
    'The analyst organizes the cities, schedules meetings with buy-side clients, travels with management, and acts as the bridge — pre-briefing management on each investor\'s concerns, pre-briefing investors on what to expect, and capturing the read across meetings to feed back into research',
    [
      ['NDRs are essentially the same as pre-deal roadshows but without a prospectus, and the analyst plays no role since there is no transaction', 'The "non-deal" in NDR means there is no offering — but the analyst\'s role is *larger* in NDRs than in deal roadshows, not smaller. With no transaction, the franchise value of the NDR comes from the relationship-building the analyst hosts.'],
      ['NDRs are run by sales coverage teams without analyst involvement, since the meetings are commercial rather than analytical', 'NDRs without the analyst are a much weaker product. The analyst\'s sector knowledge, relationships, and ability to read meetings is exactly what makes the NDR valuable to both management and investors.'],
      ['NDRs are primarily for IR practice ahead of a future deal and do not produce material research input', 'NDRs frequently produce useful research input — the analyst hears how management answers questions across 20 meetings, sees which themes resonate with the buy-side, and updates the read on the name accordingly.'],
    ],
    'NDRs are where the analyst earns sustained trust with both management and the buy-side. The day-to-day work is logistics-heavy, but the underlying job is bridging the two sides — pre-briefing, capturing context, and feeding the read back into coverage. Good NDRs compound into better access for years.'),

  q(4370440, 'Career Skills', CHAPTER, 'Earnings call question craft',
    'On an earnings call, you have one question to ask. You suspect the company\'s next-quarter gross margin will be weaker than the Street expects because of a specific input cost. How do you phrase the question to elicit useful guidance without burning the IR relationship?',
    'Ask a specific, public-data-grounded question — "Given the move in [specific input cost] over the quarter, can you walk us through how you are thinking about cost-of-goods cadence into next quarter and whether the offsets you discussed last call have flowed through?" — that gives management room to be informative without forcing them into a Reg FD problem',
    [
      ['Ask directly: "Can you tell us where you expect next quarter\'s gross margin to land?"', 'Asking management to forecast a specific line item on a call is asking them to either decline (wasting your question) or violate their own Reg FD discipline. The craft is asking the right shape of question, not the most pointed one.'],
      ['Ask a softball question to keep the relationship warm: "Can you talk about the strength of demand you are seeing in the business?"', 'A softball question burns the only slot you have. Public earnings calls are where sell-side gets a few seconds of management time in front of the audience; using it on a generic prompt wastes that scarcity.'],
      ['Defer the question to a private investor-relations follow-up after the call', 'Asking publicly is the value of being on the call — both for the answer itself and for the public signal you create about what you are watching. Off-line follow-up also risks selective-disclosure issues if management answers you in detail that they did not give the call.'],
    ],
    'Earnings call question craft is about getting management to talk informatively in public on the topic you care about, without forcing them into a regulatory corner or wasting the slot. The right question is specific, anchored in public data, and leaves management room to address the *cadence* of the answer — that is how analysts elicit signal and preserve access over years.'),

  q(4370441, 'Career Skills', CHAPTER, 'IR relationship after a negative note',
    'You downgraded a name to Sell three months ago. The IR team, previously responsive, has stopped returning your calls. What is the right way to navigate the relationship now?',
    'Continue to publish honestly, request meetings through formal channels, acknowledge the disagreement in private when contact resumes, and accept that some access is going to remain reduced — the alternative (softening published views to restore access) is the move that ends analytical careers',
    [
      ['Issue a soft Hold rating to restore the relationship and resume normal access', 'Trading a rating change for access is the canonical sell-side integrity failure. Buy-side clients see it immediately, and the analyst loses the franchise that the access was supposed to support in the first place.'],
      ['Stop covering the name entirely since the access is gone', 'Dropping coverage in response to IR pushback is roughly equivalent to changing the rating for access — it tells the buy-side and the IR team that pressure works. Coverage continues; the rating reflects the evidence.'],
      ['Publish a follow-up note praising other parts of the business to demonstrate balance', 'Compensating for a negative note with selectively positive follow-up is hedging the call without changing it — a form of softening that fools no one and erodes credibility just as much as a rating change would.'],
    ],
    'The post-negative-note IR cycle is one of the hardest tests in sell-side coverage. The franchise is built on standing behind honest published work, not on being friends with IR. Reduced access is a real cost, but it is the cost of doing the job — and analysts who pay it consistently are the ones whose calls matter ten years later.'),

  q(4370442, 'Career Skills', CHAPTER, 'Rarity of Sell ratings',
    'A junior analyst notices that the firm\'s rating distribution is about 55% Buy, 40% Hold, 5% Sell — and asks why Sell ratings are so rare. What is the honest explanation?',
    'Multiple structural forces push the distribution: companies dislike Sell ratings and reduce access, the buy-side is largely long-only and has less direct use for Sell calls, the analyst\'s relationships with IR and management compound over time, and the reputational risk of a wrong Sell is asymmetric — so Sell calls cluster on names where the conviction is highest',
    [
      ['Sell ratings are rare because most stocks are good investments at most points in time', 'The underlying distribution of stock outcomes does not justify a 5% Sell rate. Many names are unattractive at given prices; the rating distribution reflects sell-side dynamics, not the population of names.'],
      ['Sell ratings are rare because compliance prevents analysts from issuing negative views without overwhelming evidence', 'Compliance requires that any rating be supported, including Buy — it does not impose a higher evidence bar on Sell calls specifically. The asymmetry is cultural and economic, not regulatory.'],
      ['Sell ratings are rare because most analysts are former buy-side optimists and bring that bias to coverage', 'Career-path explanations of the Sell-rating skew are folk theory. The structural drivers — access, relationships, asymmetric reputational risk, buy-side audience — are the real story.'],
    ],
    'The Sell rate sits well below 10% at most firms because of the structural economics of sell-side coverage, not because Sell calls are inappropriate. Understanding why they are rare is the first step to understanding their value when an analyst does issue one — the rarity itself is part of the signal.'),

  q(4370443, 'Career Skills', CHAPTER, 'Reputational economics of contrarian Sell',
    'A controversial Sell call — where the analyst goes against consensus on a high-profile name — carries clear reputational risk if it is wrong. But the senior analyst still says: "Take the controversial Sells. They are how you build the franchise." Why?',
    'Controversial coverage is what the buy-side actually pays for — anyone can publish a consensus Buy; the analyst who is willing to stake a non-consensus view, defend it with original work, and live with the short-term reputational risk is the one buy-side PMs read first, take calls from, and remember when they allocate commission',
    [
      ['Controversial Sells build the franchise because the firm earns more in trading commission when stocks fall than when they rise', 'Trading-commission economics do not skew toward falling stocks — both directions generate flow. The franchise value of controversial coverage is reputational, not transactional.'],
      ['Controversial Sells build the franchise because regulators favor firms that publish more Sell ratings', 'Regulators monitor rating-distribution skew at the firm level, but the franchise benefit of controversial coverage is in the buy-side relationship, not in regulatory positioning.'],
      ['Controversial Sells build the franchise only when the analyst is right; the risk-reward does not work over a career', 'The risk-reward of controversial coverage is asymmetric in the *opposite* direction — analysts who only publish consensus calls fade into the rating-distribution noise, while analysts who take a few non-consensus stakes and defend them well stand out across cycles even if individual calls go wrong.'],
    ],
    'Sell-side reputation compounds on the back of independent, well-defended calls. The analyst who only publishes consensus views is invisible; the one who takes the controversial Sell, gets the work right, and is willing to be wrong for six months while the thesis plays out is the one who builds the franchise that lasts. That is the long-game economics of coverage — and why senior analysts push juniors to take the call when the evidence is there.'),
]
