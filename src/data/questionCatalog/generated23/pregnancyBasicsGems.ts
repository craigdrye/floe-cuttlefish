import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const pregnancyBasicsGems: Question[] = [
  // ----------------------------------------------------------------------------
  // Trimesters & Fetal Development
  // ----------------------------------------------------------------------------
  makeSimpleQuestion(
    10073000,
    'Career Skills',
    'Trimesters & Fetal Development',
    "Why you are 'two weeks pregnant' before conception",
    "A patient is told at her first ultrasound that she is '8 weeks pregnant,' yet she knows she could only have conceived about six weeks ago. She suspects a clerical error. What is the most accurate explanation for the two-week gap?",
    "Gestational age is counted from the first day of the last menstrual period, which falls roughly two weeks before ovulation and conception, so the dating clock starts before the embryo exists",
    [
      ["The ultrasound machine measures the embryo and adds two weeks as a safety margin for prematurity", "Ultrasound dating measures actual embryonic size and tends to confirm or slightly revise LMP dating, not inflate it by a fixed margin.", "The offset comes from the calendar convention, not from a built-in measurement buffer."],
      ["She must have miscalculated her conception date, since pregnancy is always counted from fertilization", "Standard obstetric dating is deliberately not counted from fertilization, because that moment is rarely known; LMP gives a consistent reference point.", "Distinguish gestational age (from LMP) from fetal age (from conception), which differ by about two weeks."],
      ["The two weeks reflects the time from conception to when the embryo implants in the uterus", "Implantation happens within about a week of fertilization, not two; the gap is a dating convention, not an implantation delay.", "Implantation timing is a biological event; the two-week offset is a counting rule."],
    ],
    "Pregnancy is dated from the last menstrual period, not conception, because ovulation is hard to pinpoint but the last period is something almost everyone can report. The strange consequence is that 'weeks pregnant' (gestational age) runs about two weeks ahead of the embryo's true age (fetal age), so a woman is nominally 'pregnant' for two weeks before a sperm meets an egg. The deeper lesson: a 40-week pregnancy is really about 38 weeks of development, and every milestone you read about is anchored to a convenient calendar fiction rather than to biology itself.",
    'Floe generated',
    true,
    "Ask what event the dating clock actually starts from, versus when the embryo actually begins.",
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10073001,
    'Career Skills',
    'Trimesters & Fetal Development',
    "The most dangerous weeks are the ones you may not notice",
    "A woman discovers she is pregnant at around six weeks gestation and worries that a glass of wine she had 'next month' could harm the baby. Her clinician gently notes that the window of greatest structural vulnerability has a surprising timing. When is the embryo most sensitive to agents that cause birth defects?",
    "During organogenesis, roughly weeks 3 to 8 post-conception (about weeks 5 to 10 of gestational age), when organs are first being built — a window that overlaps the time many people do not yet know they are pregnant",
    [
      ["In the third trimester, when the baby is largest and growing fastest", "Late growth can be affected, but the major organs are already formed; the third trimester is far less vulnerable to structural malformation than early organogenesis.", "Size and growth speed are not the same as the window for forming organs."],
      ["Throughout pregnancy equally, since the placenta exposes the fetus to everything the mother takes in", "Vulnerability is highly stage-specific; the same exposure can be devastating during organ formation yet relatively minor later.", "Risk is gated by what is developing at the time, not by constant placental transfer."],
      ["Only after the fetus can feel pain, in the second trimester, when the nervous system reacts to harm", "Teratogenic risk is about disrupting construction of organs, not about the fetus perceiving anything; it peaks long before pain perception.", "Susceptibility to malformation is independent of whether the fetus can sense a stimulus."],
    ],
    "The cruel irony of fetal development is that the embryo is most vulnerable to structural birth defects during organogenesis (about weeks 3 to 8 post-conception, or weeks 5 to 10 of gestational age), precisely when many people have not yet realized they are pregnant or only just have. By the time the third trimester arrives and the baby looks unmistakably like a baby, the architectural decisions are largely locked in. This is why preconception health matters as much as prenatal care: the highest-stakes construction happens before most prenatal visits even begin.",
    'Floe generated',
    true,
    "Think about when organs are first being assembled, not when the fetus is biggest.",
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10073002,
    'Career Skills',
    'Trimesters & Fetal Development',
    "Viability is a chemistry problem, not a size problem",
    "Two babies are born prematurely. One is delivered at 24 weeks with intensive care; another, slightly heavier, struggles to breathe despite mature-looking lungs on imaging. A neonatologist explains that survival at the edge of viability hinges less on weight than on one specific lung substance. What is it, and why does it matter?",
    "Surfactant, a lipid-protein film made by type II alveolar cells that lets air sacs stay open; without enough of it the lungs collapse on each breath, causing respiratory distress syndrome",
    [
      ["Hemoglobin, because a premature baby cannot carry enough oxygen in its blood to survive", "Premature infants do have functional hemoglobin; the limiting factor at the viability threshold is keeping the air sacs open, which is surfactant's job.", "The bottleneck is mechanical lung stability, not oxygen-carrying capacity of blood."],
      ["Simply more lung tissue, since survival is about having physically larger lungs", "A baby can have grossly developed lungs yet still fail to breathe without surfactant; it is the chemical film, not bulk tissue, that prevents collapse.", "Lung function at birth is gated by surface chemistry, not just lung volume."],
      ["Amniotic fluid retained in the lungs, which the baby must keep to breathe", "Retained fetal lung fluid normally clears at birth and is not what sustains breathing; persistent fluid is a problem, not the solution.", "Breathing requires clearing fluid and having surfactant, not holding fluid in."],
    ],
    "Surfactant lowers surface tension inside the alveoli so they do not collapse like wet plastic bags between breaths. It only reaches mature levels around 34 to 36 weeks, which is why a baby born earlier can have fully formed lungs yet still drown in the work of reopening them with every breath — the disorder called respiratory distress syndrome. The profound point: the 24-week 'viability' threshold is not really about how big or complete a baby looks, but about an invisible molecular film, which is why antenatal steroids that hurry surfactant production can mean the difference between life and death.",
    'Floe generated',
    true,
    "Ask what keeps a tiny air sac from collapsing flat each time the baby exhales.",
    { challengeRating: 6 },
  ),
  // ----------------------------------------------------------------------------
  // Warning Signs — When to Call a Provider
  // ----------------------------------------------------------------------------
  makeSimpleQuestion(
    10073003,
    'Career Skills',
    'Warning Signs — When to Call a Provider',
    "A headache can be the emergency, not the bleeding",
    "At 32 weeks, a woman has no bleeding and no pain in her belly, but a severe headache that will not lift, spots flickering in her vision, and a dull ache under her right ribs. She assumes that without bleeding nothing can be seriously wrong in pregnancy. Why should she call her provider the same day?",
    "These are classic signs of preeclampsia, a dangerous rise in blood pressure that can silently injure the brain, liver, and placenta even with no bleeding, and that can progress to seizures if ignored",
    [
      ["Headache and visual spots in late pregnancy are normal fatigue and only matter if bleeding starts", "Preeclampsia is frequently painless and bloodless; waiting for bleeding can mean waiting until seizures or organ damage occur.", "Absence of bleeding does not rule out a hypertensive emergency."],
      ["The right-sided rib pain points to gallstones, which are harmless in pregnancy and need no urgent care", "Upper-right abdominal pain in pregnancy can signal liver involvement from preeclampsia (HELLP), which is an emergency, not a benign aside.", "Right-upper-quadrant pain plus headache and visual changes should raise preeclampsia, not be dismissed."],
      ["Vision changes mean she simply needs new glasses, since pregnancy changes eyesight", "Transient vision spots or flashes here reflect brain and retinal effects of high blood pressure, not a refractive change correctable with lenses.", "Neurologic visual symptoms differ fundamentally from a gradual prescription change."],
    ],
    "Most people picture pregnancy emergencies as bleeding, but preeclampsia is the quiet killer: blood pressure climbs and damages organs while the woman may feel only a stubborn headache, see flashing lights, or ache under the ribs. The cluster of headache, visual changes, and right-upper-quadrant pain is a same-day red flag because the next step can be seizures (eclampsia) or liver rupture. The lingering lesson is that in pregnancy the most ordinary-sounding symptom can be the loudest alarm, and 'no blood' is not the same as 'no danger.'",
    'Floe generated',
    true,
    "Ask which dangerous condition presents with no bleeding at all, just headache, vision changes, and rib pain.",
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10073004,
    'Career Skills',
    'Warning Signs — When to Call a Provider',
    "When the baby goes quiet, do not wait for morning",
    "At 36 weeks, a woman notices her usually active baby has been markedly still since the afternoon. A friend tells her babies 'run out of room' and slow down near the end, so she plans to mention it at her appointment next week. Why is this advice dangerous?",
    "A clear decrease in fetal movement can be the earliest sign of fetal distress and should prompt urgent same-day evaluation, because movement often falls before the heart rate shows any problem",
    [
      ["The friend is right: babies physically run out of room and stop moving in the last weeks, so stillness is expected", "Movements may change in character but should not markedly decrease; a real drop in movement is a warning sign, not a normal end-stage feature.", "Reduced room can change how kicks feel, but a true decline in movement is not reassuring."],
      ["She should drink cold water and lie down, and only worry if the baby is still quiet in two or three days", "Waiting days is exactly the error; a sustained decrease warrants evaluation now, not a multi-day home trial.", "Brief stimulation tricks are fine, but a persistent drop needs prompt assessment, not patience."],
      ["Since the heartbeat is what matters, she only needs to act if she can no longer feel the baby's heart at home", "Most women cannot reliably feel a heartbeat, and crucially the heart rate often changes after movement does, so movement is the earlier alarm.", "Heart rate is a late indicator; movement is what changes first."],
    ],
    "Fetal movement is a real-time readout of the baby's well-being, and a noticeable, sustained decrease can precede serious distress by days. The counterintuitive physiology is that a struggling fetus conserves energy and moves less before its heart rate falters, so the heartbeat — the thing we instinctively trust — is actually a lagging indicator. That is why programs teaching mothers to act immediately on reduced movement have cut stillbirth rates: the deep lesson is that the most low-tech signal, a kick, can outperform the monitor that comes later.",
    'Floe generated',
    true,
    "Consider which changes first when a fetus is in trouble: how much it moves, or its heart rate.",
    { challengeRating: 6 },
  ),
  // ----------------------------------------------------------------------------
  // Stages of Labor
  // ----------------------------------------------------------------------------
  makeSimpleQuestion(
    10073005,
    'Career Skills',
    'Stages of Labor',
    "Painful contractions are not the same as labor",
    "A first-time mother arrives at the hospital in real distress with strong, regular contractions five minutes apart. She is told she is only 2 cm dilated and is sent to walk and rest. She is bewildered: if the contractions are this intense and regular, surely she is in active labor. What defines the boundary she has not yet crossed?",
    "Active labor is defined by the cervix reaching about 6 cm of dilation, not by how strong or regular contractions feel; before that she is still in the latent (early) phase even with painful contractions",
    [
      ["Active labor begins the moment contractions become regular and painful, regardless of dilation", "Regular painful contractions characterize the latent phase too; the clinical line is drawn by cervical dilation, around 6 cm, not by sensation.", "Contraction intensity is subjective; dilation is the measured threshold."],
      ["She must already be in active labor because her water has the chance to break at any time", "Membrane rupture can happen in any phase and does not define active labor; cervical change is the defining criterion.", "Whether the waters break is independent of the active-labor threshold."],
      ["Active labor is defined by the baby's head crowning, which has not happened yet", "Crowning belongs to the second stage, after full dilation at 10 cm; active labor is a phase of the first stage well before that.", "Crowning marks the second stage, not the start of active first-stage labor."],
    ],
    "Labor is staged by what the cervix does, not by how much it hurts. The first stage runs from onset to full dilation (10 cm) and is split into a long latent phase and an active phase that conventionally begins around 6 cm. This is why a woman can suffer intense, regular contractions yet be told she is 'not in active labor' — a genuinely disorienting message. The deeper point is that obstetric milestones are defined by anatomy you cannot feel rather than the pain you can, which protects against intervening too early in a normal, if exhausting, latent phase.",
    'Floe generated',
    true,
    "Ask whether labor stages are defined by pain and contraction timing or by a measurable change in the cervix.",
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10073006,
    'Career Skills',
    'Stages of Labor',
    "The riskiest stage comes after the baby is out",
    "A delivery goes smoothly and a healthy baby is born. The new parents feel the danger has passed, but the care team stays intensely focused for the next several minutes, watching for one of the leading causes of maternal death. Which stage are they managing, and why does it carry outsized risk?",
    "The third stage, delivery of the placenta, when the uterus must clamp down on the raw site where the placenta detached; failure to contract causes postpartum hemorrhage, a leading cause of maternal death",
    [
      ["The second stage of pushing is most dangerous, so once the baby is out the serious risk is over", "The second stage has its own risks, but a major bleeding threat arrives after birth, during and just after placental separation in the third stage.", "Birth of the baby does not end the bleeding risk; placental separation opens it."],
      ["The first stage is riskiest because it lasts the longest, so a quick delivery means little danger remains", "Duration is not the same as acute danger; the third stage is brief yet carries a sharp hemorrhage risk regardless of how short labor was.", "Length of a stage does not track its peak hazard."],
      ["The placenta detaches harmlessly on its own, so the third stage needs only patience, not active management", "Active management of the third stage, including uterotonics, exists precisely because passive waiting raises hemorrhage risk.", "Placental delivery is actively managed, not simply awaited, because of bleeding risk."],
    ],
    "Once the placenta separates, it leaves behind a wound the size of a dinner plate fed by major blood vessels; the only thing that stops the bleeding is the uterus contracting hard enough to pinch those vessels shut. If it fails to clamp down (uterine atony), blood loss can be torrential — which is why postpartum hemorrhage is among the leading causes of maternal death worldwide and why the third stage is actively managed. The unsettling lesson: the moment that feels like the happy ending is, physiologically, one of the most dangerous, because birth creates an open wound that biology must immediately seal.",
    'Floe generated',
    true,
    "Think about the open wound left where the placenta was attached and what must contract to close it.",
    { challengeRating: 6 },
  ),
]
