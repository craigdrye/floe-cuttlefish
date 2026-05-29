import type { Question } from './types'
import { makeSimpleQuestion } from './base'

export const GOV_INDUSTRIAL_CREDENTIAL_EXPANSION_SOURCE =
  'Floe career agent-generated credential expansion 2026-05-20'

type WrongAnswer = [string, string, string]

type Concept = {
  chapter: string
  title: string
  cue: string
  correct: string
  wrong: [WrongAnswer, WrongAnswer, WrongAnswer]
}

type Context = {
  setting: string
  pressure: string
}

type TrackConfig = {
  idStart: number
  count: number
  label: string
  chapterPrefix: string
  concepts: Concept[]
  contexts: Context[]
}

const select = <T,>(items: T[], index: number): T => items[index % items.length]

function buildTrackQuestions(config: TrackConfig): Question[] {
  return Array.from({ length: config.count }, (_, index) => {
    const concept = select(config.concepts, index)
    const context = select(config.contexts, Math.floor(index / config.concepts.length))
    const prompt = `${context.setting} ${concept.cue} ${context.pressure} What is the best answer?`

    return makeSimpleQuestion(
      config.idStart + index,
      'Career Skills',
      `${config.chapterPrefix}: ${concept.chapter}`,
      `${config.label}: ${concept.title}`,
      prompt,
      concept.correct,
      concept.wrong,
      undefined,
      GOV_INDUSTRIAL_CREDENTIAL_EXPANSION_SOURCE,
    )
  })
}

const nercConcepts: Concept[] = [
  {
    chapter: 'Resource and Demand Balancing',
    title: 'ACE response',
    cue: 'Area Control Error is moving outside acceptable control performance while frequency is sagging.',
    correct: 'Restore load-interchange-generation balance with approved balancing actions and keep neighboring entities informed.',
    wrong: [
      ['Wait until the next hourly schedule change', 'ACE and frequency problems are real-time reliability conditions, not calendar events.', 'Use timely balancing actions before the deviation grows.'],
      ['Ignore interchange because frequency is the only measured quantity', 'Interchange is part of the ACE calculation and cannot be separated from the response.', 'Treat load, generation, interchange, and frequency as linked signals.'],
      ['Create an informal manual schedule without coordination', 'Uncoordinated schedule changes can create new reliability risks.', 'Coordinate interchange and balancing actions through approved processes.'],
    ],
  },
  {
    chapter: 'Resource and Demand Balancing',
    title: 'Reserve deployment',
    cue: 'A generator trips and the balancing area is short on contingency reserve.',
    correct: 'Deploy available contingency reserves and verify the area is recovering within reliability expectations.',
    wrong: [
      ['Use reserves only after all customers are interrupted', 'Contingency reserves exist to arrest imbalance before firm load interruption is needed.', 'Deploy reserve resources early enough to support recovery.'],
      ['Reclassify unavailable units as spinning reserve', 'Unavailable resources do not provide real operating capability.', 'Count only reserves that can actually respond.'],
      ['Ask transmission operators to raise voltage instead of replacing generation', 'Voltage support does not by itself replace lost real-power supply.', 'Solve the active-power shortage with balancing resources.'],
    ],
  },
  {
    chapter: 'Transmission',
    title: 'Voltage support',
    cue: 'Post-contingency studies show low voltage at a major bus after a nearby line outage.',
    correct: 'Use reactive resources, topology options, and coordinated operating actions to maintain voltage within limits.',
    wrong: [
      ['Treat voltage as a purely financial scheduling issue', 'Voltage is a physical reliability parameter, not a settlement-only topic.', 'Use reactive and transmission operating tools.'],
      ['Increase real-power transfers without checking reactive margin', 'Additional transfers can worsen voltage depression.', 'Check reactive capability and operating limits before increasing flows.'],
      ['Disable alarms so operators can focus on dispatch', 'Alarms are part of situational awareness.', 'Preserve monitoring and respond to the voltage risk.'],
    ],
  },
  {
    chapter: 'Transmission',
    title: 'Switching order',
    cue: 'A planned switching sequence will reconfigure the transmission area during peak loading.',
    correct: 'Verify clearances, switching steps, expected flows, and contingency impacts before authorizing the sequence.',
    wrong: [
      ['Start switching first and study flows afterward', 'Switching can immediately change loadings and voltage.', 'Study and communicate the sequence before field action.'],
      ['Rely only on the field crew to identify all BES impacts', 'Field crews are essential, but the control room owns system reliability analysis.', 'Combine field procedure discipline with operator analysis.'],
      ['Assume a normal open point has no reliability effect', 'Open and closed points can materially change flows.', 'Evaluate the topology change, not just the label.'],
    ],
  },
  {
    chapter: 'Operating Limits',
    title: 'SOL violation',
    cue: 'A real-time limit display shows a System Operating Limit violation after a transmission outage.',
    correct: 'Act promptly to return the system within the SOL using coordinated redispatch, switching, curtailment, or other approved relief actions.',
    wrong: [
      ['Document the violation and wait for tomorrow study results', 'Real-time SOL violations require timely operating action.', 'Use current tools and procedures to relieve the limit.'],
      ['Assume the limit is advisory unless an IROL is also exceeded', 'An SOL is still an operating boundary that must be respected.', 'Do not downgrade an SOL because it is not labeled IROL.'],
      ['Increase the transfer to confirm the alarm is real', 'Testing a limit by worsening it is unsafe.', 'Validate data while taking conservative relief action.'],
    ],
  },
  {
    chapter: 'Operating Limits',
    title: 'IROL protection',
    cue: 'The RC identifies an Interconnection Reliability Operating Limit tied to potential cascading.',
    correct: 'Prioritize actions that keep the system within the IROL and communicate required directives clearly.',
    wrong: [
      ['Handle the IROL as a local economic congestion issue', 'IROLs address wide-area reliability consequences such as instability or cascading.', 'Treat IROL control as a reliability priority.'],
      ['Let each entity decide independently whether to act', 'IROL mitigation often requires coordinated RC direction.', 'Use clear reliability directives and confirmation.'],
      ['Wait for the next seasonal assessment before changing operations', 'IROL exposure in operations requires current response.', 'Operate within the active limit now.'],
    ],
  },
  {
    chapter: 'Contingency Analysis',
    title: 'Bad state estimator',
    cue: 'The state estimator fails quality checks and contingency analysis results no longer agree with telemetry.',
    correct: 'Question the study results, validate input data, and use backup reliability analysis procedures until model quality is restored.',
    wrong: [
      ['Accept all contingency results because the tool ran successfully', 'A completed run can still be unreliable if inputs are bad.', 'Tool output depends on validated data.'],
      ['Stop monitoring the system until the estimator is fixed', 'Loss of one tool does not remove the duty to maintain awareness.', 'Use backup methods and conservative operations.'],
      ['Delete conflicting telemetry from the model without investigation', 'Removing data casually can hide real conditions.', 'Validate and correct data through controlled processes.'],
    ],
  },
  {
    chapter: 'Emergency Preparedness',
    title: 'Weather readiness',
    cue: 'A severe weather forecast threatens load forecast error, transmission outages, and fuel delivery constraints.',
    correct: 'Review same-day and next-day plans, verify resource availability, and coordinate reliability risks before the event arrives.',
    wrong: [
      ['Wait until the first outage before reviewing plans', 'Preparedness is useful because it happens before the disturbance.', 'Use forecasts to stage people, tools, and operating options.'],
      ['Focus only on energy price impacts', 'The exam focus is reliability, not only market price.', 'Account for load, transmission, fuel, and restoration risk.'],
      ['Assume neighboring areas will absorb all consequences', 'Weather events can stress multiple areas at once.', 'Coordinate, but do not outsource readiness.'],
    ],
  },
  {
    chapter: 'Emergency Response',
    title: 'Restoration priority',
    cue: 'A partial blackout has occurred and restoration procedures are being activated.',
    correct: 'Follow the approved restoration plan, establish communication, verify cranking paths and synchronization, and restore load in controlled blocks.',
    wrong: [
      ['Pick the largest load block first to show progress', 'Large uncontrolled pickup can destabilize restoration.', 'Restore in planned increments with voltage and frequency checks.'],
      ['Synchronize islands without confirming frequency, voltage, and phase', 'Unsafe synchronization can damage equipment and prolong the event.', 'Verify synchronizing conditions before closing.'],
      ['Let public pressure replace the restoration plan', 'Public urgency is real, but restoration must remain controlled.', 'Use the plan and communicate status.'],
    ],
  },
  {
    chapter: 'Emergency Response',
    title: 'Capacity emergency',
    cue: 'Forecast load exceeds committed resources and reserve margins are eroding during the operating day.',
    correct: 'Implement capacity emergency procedures, pursue additional resources, and prepare firm-load shed only if required by the plan.',
    wrong: [
      ['Wait for frequency collapse before declaring concern', 'Capacity emergencies must be managed before uncontrolled collapse.', 'Escalate using the approved emergency path.'],
      ['Shed firm load first without using lesser emergency actions', 'Firm load shed is usually a later reliability action.', 'Work through available resources and emergency steps.'],
      ['Hide the shortage from adjacent entities to avoid alarm', 'Neighboring entities need accurate information for reliability coordination.', 'Communicate the capacity condition clearly.'],
    ],
  },
  {
    chapter: 'Communications and Data',
    title: 'Three-part communication',
    cue: 'A reliability directive is being issued during a high-workload operating condition.',
    correct: 'Use clear three-part communication: issue the directive, require repeat-back, and confirm or correct the response.',
    wrong: [
      ['Send a vague message and assume the recipient understood it', 'Ambiguous communication is a known operating risk.', 'Close the communication loop explicitly.'],
      ['Skip repeat-back because the operator is experienced', 'Experience does not eliminate hearing or transcription errors.', 'Use repeat-back for critical directives.'],
      ['Use informal shorthand that only one control room understands', 'Reliability communication crosses entity boundaries.', 'Use clear terms that recipients can verify.'],
    ],
  },
  {
    chapter: 'Communications and Data',
    title: 'Telemetry validation',
    cue: 'A line loading suddenly drops to zero while breaker status and adjacent flows suggest the line is still energized.',
    correct: 'Treat the data as suspect, validate telemetry through alternate indications, and avoid acting on a single bad value.',
    wrong: [
      ['Assume the line is unloaded and increase transfers immediately', 'A single suspect value can mislead transfer decisions.', 'Validate telemetry before relying on it.'],
      ['Ignore all other indications because SCADA is always correct', 'SCADA can fail or freeze.', 'Cross-check with breaker status, flows, and neighboring data.'],
      ['Remove the facility from reliability monitoring permanently', 'A bad point needs repair, not permanent blindness.', 'Use alternate monitoring until telemetry is corrected.'],
    ],
  },
  {
    chapter: 'Interchange',
    title: 'Curtailment call',
    cue: 'Confirmed interchange is contributing to a reliability limit violation on a constrained path.',
    correct: 'Curtail or adjust interchange through approved reliability processes and communicate the reason to affected parties.',
    wrong: [
      ['Protect all schedules even when they threaten reliability', 'Confirmed interchange can be curtailed when reliability requires it.', 'Reliability takes precedence over preserving schedules.'],
      ['Curtail unrelated transactions first because they are easier to find', 'Relief should target the reliability problem.', 'Use effective, coordinated curtailment.'],
      ['Change schedules secretly to avoid questions', 'Interchange changes require coordination and accountability.', 'Use approved communication and tagging processes.'],
    ],
  },
  {
    chapter: 'Protection and Control',
    title: 'RAS awareness',
    cue: 'A Remedial Action Scheme is armed for a critical contingency and telemetry shows abnormal status.',
    correct: 'Verify RAS status, understand its expected action, and coordinate operating limits or backup actions if it is unavailable.',
    wrong: [
      ['Assume the scheme will work because it worked last year', 'Protection systems can be out of service or misconfigured.', 'Verify current status.'],
      ['Disable the scheme to simplify the one-line display', 'Disabling protection can remove a critical reliability control.', 'Manage status through approved protection procedures.'],
      ['Ignore the RAS because it is not a generator dispatch instruction', 'RAS behavior can directly affect flows, load, or generation.', 'Include protection and control status in situational awareness.'],
    ],
  },
]

const nercContexts: Context[] = [
  { setting: 'During a Reliability Coordinator desk handoff, the next operator sees a real-time alarm and an updated contingency run.', pressure: 'The handoff is short, adjacent TOPs are calling, and the operator must choose a reliability-first action.' },
  { setting: 'In a balancing authority control room, a large industrial load changes faster than forecast.', pressure: 'The control room has limited time before the deviation affects neighboring areas.' },
  { setting: 'A transmission operator is reviewing an outage request that looked routine in the planning model.', pressure: 'New telemetry and storm risk make the operating condition less forgiving.' },
  { setting: 'The RC receives conflicting information from a neighboring entity and an internal network application.', pressure: 'Operators need a decision while preserving situational awareness and reliability coordination.' },
  { setting: 'A same-day operations briefing identifies a credible N-1 condition during the evening peak.', pressure: 'The operator must decide what matters before approving additional transfers.' },
  { setting: 'A training simulator places the candidate in charge during rapid frequency and voltage changes.', pressure: 'The scenario rewards standards-based operating action instead of informal shortcuts.' },
  { setting: 'A forced outage occurs while a scheduled interchange ramp is in progress.', pressure: 'Several parties are affected, so the operator must balance reliability action with communication discipline.' },
  { setting: 'A control center loses one major analysis function but retains voice communication and partial SCADA.', pressure: 'The candidate must continue operating reliably with backup procedures.' },
  { setting: 'The day-ahead plan missed an equipment derate that is now affecting system limits.', pressure: 'The operator has to move from planning assumptions to real-time corrective action.' },
  { setting: 'A post-event review asks what the on-shift operator should have done first.', pressure: 'The best answer should match NERC operator task logic rather than hindsight convenience.' },
  { setting: 'A regional reliability drill includes neighboring BA, TOP, and RC participants.', pressure: 'The candidate must choose the action that supports coordinated BES reliability.' },
  { setting: 'An operator notices that a routine display value contradicts field reports.', pressure: 'The situation is not yet an emergency, but a wrong assumption could create one.' },
  { setting: 'A maintenance outage overlaps with high transfers and an unexpected load pocket condition.', pressure: 'The operator must identify the safest standards-aligned response.' },
]

const apiInspectorConcepts: Concept[] = [
  {
    chapter: 'API 510 Pressure Vessels',
    title: 'Remaining life',
    cue: 'A pressure vessel thickness reading shows continuing metal loss compared with the previous inspection.',
    correct: 'Calculate corrosion rate and remaining life, then set inspection timing from the code rules and documented condition.',
    wrong: [
      ['Use the original nameplate thickness as the next inspection date', 'Original thickness is an input, not an inspection interval.', 'Use actual loss rate, required thickness, and interval rules.'],
      ['Ignore external corrosion because the vessel is still operating', 'External damage can control integrity just like internal damage.', 'Evaluate all relevant deterioration mechanisms.'],
      ['Extend the interval because the unit has had no leaks', 'Leak-free operation does not prove adequate remaining life.', 'Base intervals on measured condition and code criteria.'],
    ],
  },
  {
    chapter: 'API 510 Pressure Vessels',
    title: 'Pressure test choice',
    cue: 'A repaired pressure vessel is ready for return to service after alteration work.',
    correct: 'Confirm the required test or permitted alternative, account for test safety, and document the repair basis before returning to service.',
    wrong: [
      ['Skip testing because the repair weld looks clean', 'Visual appearance alone does not satisfy pressure integrity requirements.', 'Apply the required test or accepted alternative.'],
      ['Use pneumatic testing casually because it is faster', 'Pneumatic testing has higher stored-energy risk.', 'Choose and control the test method deliberately.'],
      ['Let production restart before the inspector reviews records', 'Return to service depends on accepted repair and inspection documentation.', 'Close the inspection record before operation.'],
    ],
  },
  {
    chapter: 'API 570 Piping',
    title: 'Pipe circuit interval',
    cue: 'An in-service process piping circuit has new CML data and a changed service severity.',
    correct: 'Update corrosion rates, remaining life, and inspection intervals for the circuit based on API 570 logic.',
    wrong: [
      ['Apply the pressure vessel interval table to the pipe circuit', 'API 510 and API 570 have different equipment scopes.', 'Use piping-specific interval rules.'],
      ['Average all plant readings into one corrosion rate', 'Different circuits and services can deteriorate differently.', 'Keep CML and circuit evaluation tied to the actual service.'],
      ['Set the interval by convenience of the next turnaround only', 'Turnaround timing matters, but code-based integrity controls the interval.', 'Let condition and required interval drive planning.'],
    ],
  },
  {
    chapter: 'API 570 Piping',
    title: 'Flange rating',
    cue: 'A replacement flange is proposed for a hot process piping service.',
    correct: 'Verify material, pressure-temperature rating, class, and dimensions before accepting the flange.',
    wrong: [
      ['Accept the flange because the bolt pattern looks similar', 'Fit-up alone does not establish pressure-temperature suitability.', 'Check rating, material, and dimensional requirements.'],
      ['Use ambient pressure rating for a high-temperature service', 'Temperature can reduce allowable pressure.', 'Rate the flange at the design temperature.'],
      ['Treat gasket dimensions as unrelated to the flange decision', 'Gasket dimensions affect the assembled joint.', 'Evaluate the pressure boundary as a system.'],
    ],
  },
  {
    chapter: 'API 653 Tanks',
    title: 'Tank bottom concern',
    cue: 'An aboveground storage tank floor scan finds localized bottom corrosion near the shell-to-bottom area.',
    correct: 'Evaluate bottom integrity, corrosion pattern, settlement or leakage risk, and repair or inspection requirements under API 653.',
    wrong: [
      ['Only inspect the roof because rainwater lands there first', 'Bottom corrosion can control tank integrity.', 'Focus on the damaged component and related tank risks.'],
      ['Assume localized corrosion is harmless if the average thickness is acceptable', 'Localized thinning can still threaten integrity.', 'Evaluate both average and local conditions.'],
      ['Raise the fill height to prove the bottom is strong', 'Increasing head can worsen risk.', 'Assess before increasing service stress.'],
    ],
  },
  {
    chapter: 'API 653 Tanks',
    title: 'Maximum fill height',
    cue: 'A corroded tank shell course may not support the current operating fill height.',
    correct: 'Determine minimum acceptable thickness or maximum fill height using API 653 shell evaluation logic.',
    wrong: [
      ['Use the tank diameter alone to approve the fill height', 'Diameter is only one part of the shell evaluation.', 'Include thickness, stress, joint efficiency, and product specific gravity as applicable.'],
      ['Approve the historical fill height because operators prefer it', 'Past practice does not override current shell condition.', 'Base fill height on current integrity.'],
      ['Ignore joint efficiency because tanks are atmospheric', 'Joint efficiency can matter in shell calculations.', 'Use the variables required by the tank standard.'],
    ],
  },
  {
    chapter: 'Damage Mechanisms',
    title: 'CUI screening',
    cue: 'Insulated carbon steel equipment operates in a temperature range associated with corrosion under insulation risk.',
    correct: 'Prioritize inspection locations where moisture ingress, damaged insulation, and susceptible temperature service make CUI credible.',
    wrong: [
      ['Assume insulation prevents corrosion by definition', 'Insulation can trap moisture against metal.', 'Treat insulation condition as part of the CUI risk.'],
      ['Inspect only shiny uninsulated pipe because it is visible', 'The hidden areas may be higher risk.', 'Use risk-based access, not visibility alone.'],
      ['Rule out CUI because the unit has no internal corrosion', 'CUI is external and can occur independent of internal process corrosion.', 'Separate internal and external mechanisms.'],
    ],
  },
  {
    chapter: 'Damage Mechanisms',
    title: 'Wet H2S damage',
    cue: 'A vessel in sour service shows blistering indications during inspection.',
    correct: 'Consider wet H2S damage mechanisms such as blistering, HIC, SOHIC, or SSC and evaluate materials and inspection scope accordingly.',
    wrong: [
      ['Classify all blisters as cosmetic paint failure', 'Blistering in sour service can indicate internal hydrogen damage.', 'Match the damage clue to the service environment.'],
      ['Assume chloride cracking because every crack in a refinery is chloride SCC', 'Damage mechanisms depend on material, environment, and stress.', 'Use service-specific evidence.'],
      ['Approve operation without checking extent because sour service is common', 'Common service can still cause serious damage.', 'Evaluate extent and fitness for continued service.'],
    ],
  },
  {
    chapter: 'Welding and Metallurgy',
    title: 'WPS review',
    cue: 'A repair contractor submits a WPS supported by a PQR for a pressure boundary weld.',
    correct: 'Check that essential variables, qualified process, base metal, filler metal, tests, and signatures support the production weld.',
    wrong: [
      ['Approve the WPS because the contractor used the same logo as last year', 'Administrative familiarity does not prove qualification.', 'Review the WPS and PQR technical support.'],
      ['Use a WPQ as the only support for the welding procedure', 'Welder qualification and procedure qualification serve different purposes.', 'Verify WPS support with an appropriate PQR.'],
      ['Ignore essential variables if the weld is urgent', 'Urgency does not waive qualification requirements.', 'Control the repair through qualified welding documents.'],
    ],
  },
  {
    chapter: 'Nondestructive Examination',
    title: 'NDE method fit',
    cue: 'A surface-breaking defect is suspected after repair grinding.',
    correct: 'Select an NDE method suited to the defect type, material, surface condition, and code acceptance requirements.',
    wrong: [
      ['Use thickness UT only because every NDE method finds every flaw', 'Thickness UT is not always the right method for surface-breaking flaws.', 'Match the method to the flaw and examination objective.'],
      ['Skip calibration because the examiner is experienced', 'NDE reliability depends on procedure and calibration controls.', 'Use qualified methods with required calibration.'],
      ['Accept the defect because no pressure test has failed yet', 'NDE is meant to find unacceptable flaws before failure.', 'Evaluate indications against acceptance criteria.'],
    ],
  },
  {
    chapter: 'Positive Material Identification',
    title: 'PMI mismatch',
    cue: 'PMI results do not match the specified alloy for a replacement component.',
    correct: 'Hold acceptance, resolve the material discrepancy, and document traceability before installation.',
    wrong: [
      ['Install the part because it arrived with the correct purchase order', 'Paperwork can be wrong or incomplete.', 'PMI discrepancies must be resolved.'],
      ['Blend the heat number into the paint mark to avoid delay', 'Changing identification hides the problem and damages traceability.', 'Preserve accurate material records.'],
      ['Assume all stainless grades are interchangeable', 'Different alloys can perform very differently in service.', 'Verify the specified material for the damage environment.'],
    ],
  },
  {
    chapter: 'Pressure Relief Devices',
    title: 'Relief device inspection',
    cue: 'A pressure-relieving device has fouling and an overdue inspection record.',
    correct: 'Evaluate service condition, inspection history, set pressure documentation, and maintenance needs before relying on the device.',
    wrong: [
      ['Assume relief devices always work because they are passive', 'Relief devices can foul, corrode, or be mis-set.', 'Inspection and maintenance protect overpressure safety.'],
      ['Increase MAWP because the relief valve looks large', 'MAWP is not set by appearance.', 'Use code calculations and documented pressure protection.'],
      ['Remove the device permanently to prevent nuisance lifting', 'Removing overpressure protection creates a major hazard.', 'Address the cause while maintaining required protection.'],
    ],
  },
  {
    chapter: 'Repairs and Alterations',
    title: 'Rerating basis',
    cue: 'Operations wants to increase allowable pressure after a process change.',
    correct: 'Perform a documented rerating evaluation with code calculations, inspection review, pressure protection, and authorized approval.',
    wrong: [
      ['Change the operating limit in the control system only', 'A control setting does not establish mechanical integrity.', 'Rerating requires engineering and inspection basis.'],
      ['Use the design pressure from a similar unit nearby', 'A similar unit does not prove this equipment is adequate.', 'Evaluate the actual equipment and records.'],
      ['Approve because the equipment survived yesterday at the higher pressure', 'Survival is not a code basis.', 'Use documented allowable pressure evaluation.'],
    ],
  },
  {
    chapter: 'Records and Reports',
    title: 'Inspection record quality',
    cue: 'An inspector finds missing CML history and incomplete repair documentation.',
    correct: 'Reconstruct and correct the inspection record enough to support intervals, integrity decisions, and future audits.',
    wrong: [
      ['Keep only the newest readings and discard old history', 'History is needed to calculate corrosion rates and trends.', 'Preserve traceable inspection data.'],
      ['Use verbal memory as the official repair record', 'Memory is not adequate documentation.', 'Record the basis, scope, results, and approvals.'],
      ['Delay record correction until after the next failure', 'Records support prevention and planning.', 'Fix documentation gaps proactively.'],
    ],
  },
  {
    chapter: 'Exam Strategy',
    title: 'Open-book discipline',
    cue: 'The candidate is practicing an API open-book question with code references and a long scenario.',
    correct: 'Identify the equipment scope, find the controlling reference section, and apply the listed exam edition rather than local custom.',
    wrong: [
      ['Use whichever edition the plant happens to own', 'The exam is tied to the effectivity sheet editions.', 'Answer from the specified exam references.'],
      ['Memorize page colors instead of concepts and section logic', 'Page appearance is not reliable exam knowledge.', 'Know where and why requirements apply.'],
      ['Assume API 510, 570, and 653 have identical rules', 'The programs overlap but have different equipment scopes.', 'Start by identifying vessel, piping, or tank scope.'],
    ],
  },
]

const apiInspectorContexts: Context[] = [
  { setting: 'At a refinery turnaround planning meeting, the inspection lead reviews new data from fixed equipment.', pressure: 'Schedule pressure is high, but the certification-style answer must preserve mechanical integrity.' },
  { setting: 'A unit inspector is asked to accept a repair package before startup.', pressure: 'The best response must use API code scope, records, and inspection judgment.' },
  { setting: 'During an API ICP practice exam, the candidate sees a scenario split between closed-book recall and open-book lookup.', pressure: 'The answer should reflect the BOK and effectivity-sheet discipline.' },
  { setting: 'An owner-user inspection program finds inconsistent readings between the prior report and current field data.', pressure: 'The inspector has to decide what evidence controls the next action.' },
  { setting: 'A contractor proposes a shortcut to keep a process unit outage on schedule.', pressure: 'The inspector must separate production convenience from code-based acceptance.' },
  { setting: 'A plant engineer asks whether a component can remain in service until the next planned outage.', pressure: 'The decision needs inspection data, damage mechanism awareness, and documented basis.' },
  { setting: 'A field walkdown reveals a condition that was not shown in the inspection plan.', pressure: 'The candidate must adjust scope without drifting outside the applicable API program.' },
  { setting: 'A quality file is being reviewed after a repair, rerate, or alteration.', pressure: 'The safest answer is the one that preserves traceability and pressure-boundary confidence.' },
  { setting: 'An examiner presents a mixed equipment scenario involving vessels, piping, and tanks.', pressure: 'The candidate must first identify the correct equipment standard before choosing the action.' },
  { setting: 'A reliability engineer challenges an inspection recommendation as too conservative.', pressure: 'The response should explain the practical code logic behind the recommendation.' },
  { setting: 'During an audit, the inspector is asked to defend the inspection interval and method selection.', pressure: 'The strongest answer ties condition, service, and documented criteria together.' },
  { setting: 'A maintenance supervisor wants to close a work order with limited evidence.', pressure: 'The inspector has to choose the action that an API exam would reward.' },
]

const cdfmConcepts: Concept[] = [
  {
    chapter: 'Resource Management Environment',
    title: 'Purpose time amount',
    cue: 'A program office wants to charge a convenient appropriation for work that belongs to another funding purpose.',
    correct: 'Apply fiscal law purpose, time, and amount rules before accepting the charge.',
    wrong: [
      ['Charge the fund with the largest unobligated balance', 'Available balance does not make an appropriation legally available for any purpose.', 'Availability depends on purpose, time, and amount.'],
      ['Use the appropriation that expires soonest to avoid losing funds', 'Expiration pressure does not override purpose availability.', 'Do not spend merely to use expiring authority.'],
      ['Let the contractor decide which appropriation applies', 'Funding availability is a government fiscal responsibility.', 'Government officials must determine the proper appropriation.'],
    ],
  },
  {
    chapter: 'Resource Management Environment',
    title: 'Internal controls',
    cue: 'A certifying official notices repeated unsupported obligations in a local execution report.',
    correct: 'Escalate the control weakness, document corrective action, and strengthen review before obligations are recorded.',
    wrong: [
      ['Ignore it because the totals still match the allotment', 'Balanced totals can still hide invalid transactions.', 'Controls protect validity, not only arithmetic.'],
      ['Approve now and ask for support after audit selection', 'Documentation should support the transaction when recorded.', 'Fix support before acceptance.'],
      ['Move the unsupported items to a suspense spreadsheet permanently', 'Suspense is not a substitute for correction.', 'Resolve and document the control issue.'],
    ],
  },
  {
    chapter: 'Resource Management Environment',
    title: 'Manpower tradeoff',
    cue: 'A commander wants to convert contractor support to civilian billets without checking manpower authorization.',
    correct: 'Evaluate mission need, authorized manpower controls, funding, and total force implications before making the change.',
    wrong: [
      ['Assume contractor dollars automatically create civilian billets', 'Funding and manpower authorization are related but distinct.', 'Check both resource and manpower rules.'],
      ['Approve the conversion because civilians are always cheaper', 'Cost depends on the full scenario and requirements.', 'Use analysis rather than a blanket assumption.'],
      ['Ignore mission workload because only headcount matters', 'Manpower decisions should support mission requirements.', 'Tie billets to workload and authorized structure.'],
    ],
  },
  {
    chapter: 'Budget and Cost Analysis',
    title: 'PPBE alignment',
    cue: 'A new requirement appears after the program objective memorandum build has closed.',
    correct: 'Identify the PPBE phase, assess urgency and affordability, and use the appropriate budget or execution change process.',
    wrong: [
      ['Insert it informally into the enacted budget with no documentation', 'Budget changes need authority and traceability.', 'Use the correct PPBE or execution mechanism.'],
      ['Treat every new requirement as an emergency supplemental', 'Not all new needs meet emergency criteria.', 'Match the path to timing, priority, and authority.'],
      ['Ignore the requirement until the next decade plan', 'Some needs may require near-term action.', 'Assess timing and available processes.'],
    ],
  },
  {
    chapter: 'Budget and Cost Analysis',
    title: 'Cost estimate basis',
    cue: 'A cost estimate for a defense system uses a single optimistic vendor quote with no assumptions listed.',
    correct: 'Document assumptions, data sources, risk, methodology, and sensitivity before using the estimate for a decision.',
    wrong: [
      ['Accept the quote because it is the lowest number', 'Lowest is not the same as credible.', 'Evaluate estimate quality and risk.'],
      ['Remove assumptions so leaders see a cleaner slide', 'Hidden assumptions weaken decision quality.', 'Make assumptions visible.'],
      ['Use only sunk costs to estimate future affordability', 'Sunk costs do not determine remaining cost.', 'Estimate the future work and risks.'],
    ],
  },
  {
    chapter: 'Budget and Cost Analysis',
    title: 'Earned value signal',
    cue: 'A contractor reports that actual cost is above earned value while schedule milestones are slipping.',
    correct: 'Analyze cost and schedule variances together and ask what work was actually accomplished for the money spent.',
    wrong: [
      ['Look only at dollars spent because spending equals progress', 'Outlays or costs do not prove performance.', 'Compare planned value, earned value, and actual cost.'],
      ['Ignore schedule because cost variance is always independent', 'Cost and schedule problems often interact.', 'Read the integrated performance picture.'],
      ['Reset the baseline every month to remove variances', 'Frequent unearned resets destroy trend visibility.', 'Use disciplined baseline control.'],
    ],
  },
  {
    chapter: 'Accounting and Finance',
    title: 'Obligation support',
    cue: 'A finance office receives a purchase request but no binding agreement or evidence of order placement.',
    correct: 'Do not record an obligation until documentary evidence supports a valid obligation event.',
    wrong: [
      ['Record the obligation when someone says they plan to buy it', 'Intent alone is not an obligation.', 'Record obligations from valid obligating events.'],
      ['Wait until cash is disbursed to record the obligation', 'Obligations generally occur before payment.', 'Separate obligation recording from disbursement.'],
      ['Record an obligation to reserve funds for possible future ideas', 'Reserving funds without a valid obligation distorts execution.', 'Use commitments or planning controls as appropriate.'],
    ],
  },
  {
    chapter: 'Accounting and Finance',
    title: 'Reconciliation',
    cue: 'Budgetary reports and accounting records disagree on remaining available authority.',
    correct: 'Reconcile source transactions, obligations, disbursements, and adjustments before issuing a management conclusion.',
    wrong: [
      ['Use whichever report has the larger balance', 'Choosing the favorable number does not resolve the discrepancy.', 'Reconcile to the source activity.'],
      ['Assume accounting is wrong because budget owns funds', 'Both budget and accounting records matter.', 'Trace the transaction path.'],
      ['Hide the variance until year-end close', 'Delayed reconciliation can create ADA and reporting risk.', 'Investigate promptly.'],
    ],
  },
  {
    chapter: 'Accounting and Finance',
    title: 'Audit evidence',
    cue: 'An audit sample asks for evidence that a recorded obligation is valid, accurate, and timely.',
    correct: 'Provide the contract or order, approval trail, accounting entry support, and evidence tying the amount to the obligation.',
    wrong: [
      ['Provide only a screenshot of the dashboard total', 'A dashboard total is not enough transaction evidence.', 'Audits need source support and traceability.'],
      ['Explain verbally that the office has always done it this way', 'Custom is not audit evidence.', 'Use objective documentation.'],
      ['Submit unrelated invoices from a different fiscal year', 'Wrong-period documents do not support the sampled item.', 'Match evidence to the transaction tested.'],
    ],
  },
  {
    chapter: 'Fiscal Law',
    title: 'Antideficiency risk',
    cue: 'An office considers authorizing work before funds are available because reimbursement is expected later.',
    correct: 'Stop and verify budget authority before authorizing an obligation or expenditure that could exceed available funds.',
    wrong: [
      ['Proceed because expected future funding cures any violation', 'Expected funding does not create current authority.', 'Confirm current availability before obligating.'],
      ['Ask the contractor to start work off the books', 'Unauthorized work can create fiscal and contractual violations.', 'Keep obligations within formal authority.'],
      ['Split the transaction into smaller pieces to avoid review', 'Fragmenting does not solve an ADA risk.', 'Address the funding authority directly.'],
    ],
  },
  {
    chapter: 'Fiscal Law',
    title: 'Bona fide need',
    cue: 'Year-end funds are proposed for supplies that will not be needed until a later fiscal year.',
    correct: 'Test whether the purchase meets the bona fide need of the appropriation period before obligating funds.',
    wrong: [
      ['Buy anything useful eventually because funds expire soon', 'Expiration does not create a current need.', 'Annual funds generally support current-year bona fide needs.'],
      ['Use delivery delay as proof of current need', 'Delivery timing is only one fact.', 'Look at when the government actually needs the goods or services.'],
      ['Let the vendor date the invoice in the prior year', 'Backdating paperwork does not create a bona fide need.', 'Use truthful timing and need analysis.'],
    ],
  },
  {
    chapter: 'Acquisition Business',
    title: 'Business case',
    cue: 'A proposed acquisition strategy has no link between requirement, funding profile, and performance outcomes.',
    correct: 'Build a business case that connects mission need, cost, schedule, risk, and measurable performance.',
    wrong: [
      ['Approve because acquisition strategy is separate from financial management', 'CDFM-A content links acquisition and resource management.', 'Tie business decisions to resources and outcomes.'],
      ['Focus only on contract type and ignore funding profile', 'Contract type matters, but affordability and phasing also matter.', 'Evaluate the whole acquisition business picture.'],
      ['Use the prior program business case without tailoring', 'Different requirements and risks need tailored analysis.', 'Adapt the case to the current acquisition.'],
    ],
  },
  {
    chapter: 'Strategic Planning',
    title: 'Performance measure',
    cue: 'A headquarters scorecard lists activities completed but no mission outcomes or resource effects.',
    correct: 'Use performance measures that connect resources and activities to mission-relevant outputs or outcomes.',
    wrong: [
      ['Count meetings as the main mission outcome', 'Meetings are activities, not necessarily outcomes.', 'Measure what changed because of the work.'],
      ['Avoid measures because performance cannot be quantified at all', 'Some outcomes are hard to measure, but management still needs useful indicators.', 'Choose meaningful, defensible metrics.'],
      ['Report only favorable measures and omit known weaknesses', 'Selective reporting reduces decision quality.', 'Use a balanced view of performance.'],
    ],
  },
  {
    chapter: 'Budget Execution',
    title: 'Apportionment and allotment',
    cue: 'Funds have been appropriated but the component has not received the needed apportionment or allotment authority.',
    correct: 'Wait for proper funds distribution authority before incurring obligations at the execution level.',
    wrong: [
      ['Obligate immediately because Congress passed an appropriation', 'Appropriation is not the only execution control.', 'Respect apportionment and allotment distribution.'],
      ['Treat a planning target as legal obligational authority', 'Targets can guide planning but do not always authorize obligations.', 'Use formal funds distribution documents.'],
      ['Bypass funds control because the mission is popular', 'Popularity does not remove fiscal controls.', 'Follow administrative control of funds.'],
    ],
  },
  {
    chapter: 'Professional Practice',
    title: 'Closed-book preparation',
    cue: 'A candidate preparing for CDFM modules wants to study only memorized acronyms.',
    correct: 'Study domain concepts, fiscal law application, budget scenarios, accounting evidence, and acquisition business judgment.',
    wrong: [
      ['Memorize acronym lists without practicing scenarios', 'The exam tests application as well as terminology.', 'Practice scenario-based judgment.'],
      ['Skip fiscal law because it appears in only one module', 'SDFM materials place fiscal law across the CDFM modules.', 'Keep fiscal law in the study plan.'],
      ['Study only personal finance topics', 'CDFM focuses on defense financial management.', 'Use the official CDFM domains and references.'],
    ],
  },
]

const cdfmContexts: Context[] = [
  { setting: 'In a defense financial management office, a budget analyst reviews a request before certifying funds.', pressure: 'The answer must balance mission urgency with CDFM-style fiscal discipline.' },
  { setting: 'A CDFM practice item describes a disagreement between program staff, contracting, and finance.', pressure: 'The candidate needs the response that protects lawful resource management.' },
  { setting: 'During year-end execution, leadership asks for a fast way to use remaining authority.', pressure: 'The best choice should avoid shortcuts that create fiscal law or control problems.' },
  { setting: 'An internal control review finds that several resource decisions were made without a documented basis.', pressure: 'The candidate must choose the control-minded corrective action.' },
  { setting: 'A comptroller briefing is being prepared for a senior decision maker.', pressure: 'The right answer should improve decision quality rather than just decorate the slide deck.' },
  { setting: 'A defense organization is moving from budget formulation to execution.', pressure: 'The scenario tests whether the candidate can connect PPBE, funds control, and accounting evidence.' },
  { setting: 'An audit readiness team asks why a transaction should be accepted as valid.', pressure: 'The response needs objective support and a traceable financial management basis.' },
  { setting: 'A resource manager receives a request that sounds practical but may conflict with appropriations law.', pressure: 'The safest exam answer identifies the legal availability question first.' },
  { setting: 'A candidate studies the 2024 CDFM blueprint domains and sees a practical workplace scenario.', pressure: 'The answer should apply the domain, not just define it.' },
  { setting: 'A component budget office is reconciling program plans to financial execution records.', pressure: 'The candidate must choose a response that leaders and auditors can rely on.' },
  { setting: 'A CDFM-A acquisition specialty scenario asks how acquisition business choices affect resources.', pressure: 'The best answer connects acquisition risk, funding, and mission outcome.' },
  { setting: 'A supervisor asks for a quick answer before a meeting with command leadership.', pressure: 'The candidate should choose the defensible answer, not the most convenient answer.' },
]

const appraiserConcepts: Concept[] = [
  {
    chapter: 'AQB Qualification Criteria',
    title: 'Certified General scope',
    cue: 'A client asks whether a Certified General Appraiser can appraise a complex nonresidential property.',
    correct: 'Recognize that the Certified General classification may appraise all types of real property, subject to competency and state requirements.',
    wrong: [
      ['Say Certified General appraisers are limited to one-to-four residential properties', 'That describes a residential credential boundary, not Certified General scope.', 'Certified General is the broad real property classification.'],
      ['Accept the assignment without checking competency', 'Credential scope does not erase USPAP competency obligations.', 'Confirm competence for the specific property and assignment.'],
      ['Assume federal criteria replace all state licensing rules', 'AQB criteria are minimums and states administer credentials.', 'Check state requirements as well.'],
    ],
  },
  {
    chapter: 'AQB Qualification Criteria',
    title: 'Experience requirement',
    cue: 'A candidate logs experience toward Certified General credentialing and includes mostly residential work.',
    correct: 'Track total experience and the required nonresidential portion before claiming Certified General qualification.',
    wrong: [
      ['Count any real estate coursework as experience hours', 'Education and experience are separate qualification categories.', 'Track supervised appraisal experience separately.'],
      ['Ignore nonresidential experience because all appraisal hours are equal', 'Certified General criteria include nonresidential experience expectations.', 'Verify the mix of qualifying experience.'],
      ['Use unverified estimates instead of a defensible log', 'Experience claims need support for state review.', 'Maintain accurate experience documentation.'],
    ],
  },
  {
    chapter: 'USPAP Ethics',
    title: 'Advocacy pressure',
    cue: 'A lender hints that future work depends on reaching a target value.',
    correct: 'Maintain independence, impartiality, and objectivity, and reject value pressure inconsistent with USPAP ethics.',
    wrong: [
      ['Adjust the conclusion to preserve the client relationship', 'Client pressure cannot determine the value opinion.', 'Independence is central to appraisal practice.'],
      ['Hide the pressure from the workfile', 'Pressure and assignment conditions can matter to compliance.', 'Document relevant assignment communications.'],
      ['Accept only if the target value seems possible', 'The problem is the contingent pressure, not merely feasibility.', 'Do not let compensation or future work depend on a predetermined result.'],
    ],
  },
  {
    chapter: 'USPAP Competency',
    title: 'Competency disclosure',
    cue: 'An appraiser is offered a specialized industrial property assignment outside prior experience.',
    correct: 'Determine whether competency can be obtained, disclose as required, and decline if competent performance cannot be achieved.',
    wrong: [
      ['Accept silently and learn after submitting the report', 'Competency must be addressed before and during the assignment.', 'Disclose and obtain competence before completion.'],
      ['Assume a Certified General credential guarantees expertise in every property type', 'Credentials set minimum authority, not universal specialization.', 'Competency is assignment-specific.'],
      ['Copy another report to cover the knowledge gap', 'Copying does not create competence or credible analysis.', 'Use appropriate education, assistance, or decline.'],
    ],
  },
  {
    chapter: 'USPAP Scope of Work',
    title: 'Scope problem',
    cue: 'A client requests a quick value but the intended use involves a high-stakes lending decision.',
    correct: 'Develop a scope of work sufficient for credible assignment results given intended use, users, property, and market conditions.',
    wrong: [
      ['Let the client choose the scope even if it cannot produce credible results', 'Client preference does not excuse inadequate scope.', 'The appraiser is responsible for credible scope.'],
      ['Use the same scope for every property regardless of intended use', 'Scope is assignment-specific.', 'Tailor scope to the problem.'],
      ['Reduce research until the fee matches the client budget', 'Budget pressure cannot make an inadequate scope credible.', 'Decline or renegotiate if necessary.'],
    ],
  },
  {
    chapter: 'USPAP Reporting',
    title: 'Intended use clarity',
    cue: 'A report draft describes the property but never identifies intended use or intended users.',
    correct: 'Revise the report so intended use, intended users, scope, assumptions, and analysis support clear communication.',
    wrong: [
      ['Leave intended use out to keep the report flexible', 'Ambiguity can mislead readers and weaken USPAP compliance.', 'State intended use clearly.'],
      ['Assume intended user means anyone who later receives the report', 'Intended users are identified by the appraiser based on assignment communication.', 'Do not convert every reader into an intended user.'],
      ['Replace analysis with more photographs', 'Photos help, but they do not substitute for required appraisal reasoning.', 'Communicate methods, data, and conclusions.'],
    ],
  },
  {
    chapter: 'Real Property Methods',
    title: 'Highest and best use',
    cue: 'A vacant parcel could support several legally permissible uses with different financial feasibility.',
    correct: 'Analyze highest and best use through legally permissible, physically possible, financially feasible, and maximally productive tests.',
    wrong: [
      ['Choose the use the owner likes most', 'Owner preference alone is not highest and best use.', 'Apply market-supported tests.'],
      ['Skip legal permissibility because zoning might change someday', 'Current legal constraints matter unless a change is reasonably probable.', 'Analyze legal permissibility explicitly.'],
      ['Pick the physically largest building without feasibility analysis', 'Physical possibility is only one test.', 'Consider financial feasibility and productivity.'],
    ],
  },
  {
    chapter: 'Sales Comparison Approach',
    title: 'Comparable adjustment',
    cue: 'A comparable sale differs from the subject in location, condition, and lease status.',
    correct: 'Adjust or reconcile comparables based on market-supported differences that affect value.',
    wrong: [
      ['Average all sale prices without considering differences', 'Unadjusted averages can hide material differences.', 'Use market-supported comparison.'],
      ['Adjust only until the desired value appears', 'Adjustments must reflect market evidence, not a target conclusion.', 'Let evidence drive adjustments.'],
      ['Discard every imperfect comparable automatically', 'Most comparables require analysis.', 'Use the best available sales with reasoned adjustments.'],
    ],
  },
  {
    chapter: 'Income Approach',
    title: 'NOI stabilization',
    cue: 'A multi-tenant property has temporary vacancy and a new above-market lease.',
    correct: 'Analyze market rent, vacancy, expenses, and stabilized net operating income before capitalization.',
    wrong: [
      ['Capitalize one unusual month of cash flow as permanent NOI', 'A temporary month may not represent stabilized income.', 'Normalize income and expenses where appropriate.'],
      ['Ignore lease terms because cap rates solve everything', 'Lease terms affect income risk and value.', 'Analyze the income stream before selecting a rate.'],
      ['Use gross rent as NOI without expenses', 'NOI is after appropriate operating expenses.', 'Separate gross income from net operating income.'],
    ],
  },
  {
    chapter: 'Cost Approach',
    title: 'Depreciation types',
    cue: 'A special-use building has functional layout issues and external market pressure.',
    correct: 'Separate physical deterioration, functional obsolescence, and external obsolescence when applying the cost approach.',
    wrong: [
      ['Treat every loss in value as physical wear', 'Not all depreciation is physical.', 'Classify the cause of depreciation.'],
      ['Ignore external obsolescence because it is outside the property line', 'External market forces can affect value.', 'Analyze external influences when supported.'],
      ['Add land value twice to improve the indication', 'Double counting land overstates value.', 'Apply the cost approach components once and consistently.'],
    ],
  },
  {
    chapter: 'Appraisal Review',
    title: 'Review scope',
    cue: 'A reviewer finds weak support for adjustments in another appraiser report.',
    correct: 'Develop review opinions within the review scope and clearly distinguish review findings from any separate value opinion.',
    wrong: [
      ['Change the value conclusion without doing the work required for a new opinion', 'A review and a new value opinion have different scopes.', 'Do not exceed the developed scope.'],
      ['Assume disagreement proves USPAP noncompliance', 'A different judgment is not automatically a standards violation.', 'Tie findings to evidence and standards.'],
      ['Call the original appraiser biased without support', 'Unsupported accusations are not credible review analysis.', 'State objective deficiencies.'],
    ],
  },
  {
    chapter: 'Workfile',
    title: 'Workfile support',
    cue: 'A state investigator asks for support behind a completed appraisal report.',
    correct: 'Maintain a workfile that supports the appraiser opinions, conclusions, data, and compliance decisions.',
    wrong: [
      ['Recreate all support from memory after the complaint arrives', 'The workfile should exist for the assignment, not be invented later.', 'Keep contemporaneous support.'],
      ['Keep only the final PDF report and delete analysis notes', 'The report may not contain all support.', 'Retain data and reasoning needed to support the assignment.'],
      ['Refuse to document assumptions because they are obvious', 'Assumptions need to be clear enough for review and reliance.', 'Document significant assumptions and limiting conditions.'],
    ],
  },
  {
    chapter: 'Federal Transactions',
    title: 'Federally related transaction',
    cue: 'A state-certified appraiser is engaged for a federally related real estate transaction.',
    correct: 'Follow USPAP and applicable state and federal appraisal requirements for the assignment.',
    wrong: [
      ['Treat USPAP as optional because the client is sophisticated', 'State-licensed and certified appraisers generally must comply for federally related transactions.', 'Apply the required standards.'],
      ['Use brokerage opinion standards instead of appraisal standards', 'A credentialed appraisal assignment is not a casual broker opinion.', 'Use applicable appraisal standards.'],
      ['Let the borrower waive USPAP compliance', 'The borrower cannot waive regulatory appraisal requirements.', 'Follow governing standards and law.'],
    ],
  },
  {
    chapter: 'USPAP Coursework',
    title: 'Update course',
    cue: 'A credentialed appraiser asks why the 7-hour USPAP update is recurring.',
    correct: 'Explain that practicing appraisers complete the 7-hour update on the required cycle to maintain current standards knowledge.',
    wrong: [
      ['Say the 15-hour course must be retaken every month', 'That misstates the USPAP coursework structure.', 'Distinguish initial and update education.'],
      ['Say USPAP never changes and updates are only ceremonial', 'USPAP and guidance can be updated.', 'Updates keep practice current.'],
      ['Say only personal property appraisers need standards education', 'Real property appraisers have USPAP education obligations too.', 'Apply the relevant credential requirements.'],
    ],
  },
  {
    chapter: 'State Regulation',
    title: 'State minimums',
    cue: 'An applicant meets AQB minimums but has not checked the state licensing agency rules.',
    correct: 'Confirm state-specific requirements because states issue credentials and may impose requirements above the AQB minimums.',
    wrong: [
      ['Assume AQB minimums automatically issue a state credential', 'AQB criteria do not themselves grant the license.', 'Work through the state regulatory agency.'],
      ['Ignore state timing rules for education and experience', 'States can set process requirements.', 'Verify timing and documentation rules early.'],
      ['Apply in a different state solely to avoid competence requirements', 'Credential shopping does not remove assignment competence duties.', 'Meet licensing and USPAP expectations.'],
    ],
  },
]

const appraiserContexts: Context[] = [
  { setting: 'A Certified General Appraiser candidate reviews a state application file.', pressure: 'The answer should reflect AQB minimum criteria, state oversight, and USPAP practice expectations.' },
  { setting: 'During an appraisal standards course, a commercial property scenario includes client pressure and incomplete data.', pressure: 'The best choice must protect credible assignment results.' },
  { setting: 'A lender requests a fast turnaround on a complex property appraisal.', pressure: 'The appraiser must choose a standards-based response rather than a client-pleasing shortcut.' },
  { setting: 'A reviewer evaluates whether a report communicates enough for intended users.', pressure: 'The scenario tests practical USPAP reporting judgment.' },
  { setting: 'A state regulator asks how the appraiser handled qualification, scope, and workfile support.', pressure: 'The answer must be defensible under real property credentialing and standards logic.' },
  { setting: 'An appraiser considers accepting a specialized industrial assignment.', pressure: 'The candidate must distinguish credential authority from assignment-specific competency.' },
  { setting: 'A valuation problem includes mixed evidence from sales, income, and cost approaches.', pressure: 'The strongest answer uses market evidence and clear reconciliation.' },
  { setting: 'A trainee asks a supervisor which rule controls the next step.', pressure: 'The response should be practical, teachable, and aligned with AQB and USPAP concepts.' },
  { setting: 'A bank review desk flags a possible weakness in a commercial appraisal.', pressure: 'The candidate must separate unsupported criticism from standards-based analysis.' },
  { setting: 'A continuing education exercise asks what a practicing appraiser should do before issuing the report.', pressure: 'The answer should improve credibility and compliance.' },
  { setting: 'A property owner offers extra compensation if the opinion reaches a pending sale price.', pressure: 'The exam-grade response should identify the ethical boundary.' },
  { setting: 'A complex nonresidential property has thin comparable data and changing market conditions.', pressure: 'The appraiser must choose a credible scope and method response.' },
]

const procurementConcepts: Concept[] = [
  {
    chapter: 'FAR Part 6',
    title: 'Competition default',
    cue: 'A requiring activity asks for a sole-source award because competition would take longer.',
    correct: 'Promote full and open competition unless a FAR exception is justified, documented, certified, and approved.',
    wrong: [
      ['Use sole source whenever the program office is busy', 'Workload is not a competition exception.', 'Competition limits need a valid authority and justification.'],
      ['Avoid market research so the file supports sole source', 'The FAR justification asks for market research or an explanation.', 'Use market research honestly.'],
      ['Cite expiring funds as the reason to avoid competition', 'FAR Part 6 does not allow lack of planning or expiring funds to justify noncompetition.', 'Plan and justify properly.'],
    ],
  },
  {
    chapter: 'FAR Part 6',
    title: 'Only one responsible source',
    cue: 'A program claims only one vendor can satisfy the requirement because it owns unique technical data.',
    correct: 'Test whether only one responsible source can satisfy the minimum need and support the file with facts, not labels.',
    wrong: [
      ['Accept the vendor name as the justification', 'A name is not a factual basis for other than full and open competition.', 'Show why no other source can satisfy the need.'],
      ['Use limited rights as automatic proof in every case', 'Rights restrictions can matter but are not automatically enough alone.', 'Analyze the actual availability and minimum need.'],
      ['Skip approval because the technical team prefers the vendor', 'Preference is not approval.', 'Obtain required J&A approval.'],
    ],
  },
  {
    chapter: 'FAR Part 10',
    title: 'Market research',
    cue: 'The team is writing an acquisition plan for a new service requirement.',
    correct: 'Use market research to understand sources, commercial practices, competition potential, and requirement refinement.',
    wrong: [
      ['Perform market research only after award', 'Market research informs strategy before solicitation and award.', 'Use it early.'],
      ['Ask only the incumbent and call the market closed', 'One incumbent view can bias the strategy.', 'Survey the market broadly enough.'],
      ['Use market research to tailor requirements to a favorite vendor', 'Market research should support competition and minimum needs.', 'Avoid unnecessarily restrictive requirements.'],
    ],
  },
  {
    chapter: 'FAR Part 11',
    title: 'Requirement definition',
    cue: 'A draft statement of work specifies a brand and unnecessary proprietary features.',
    correct: 'Define the government minimum need in performance or functional terms where practical and remove unjustified restrictions.',
    wrong: [
      ['Keep every proprietary feature because it is familiar', 'Familiarity can restrict competition without improving need satisfaction.', 'State the actual requirement.'],
      ['Let the vendor write the requirement without review', 'Vendor input can help, but the government must preserve fairness.', 'Control conflicts and requirements integrity.'],
      ['Make the requirement vague so any proposal can win', 'Too much vagueness undermines evaluation and performance.', 'Be clear without being unnecessarily restrictive.'],
    ],
  },
  {
    chapter: 'FAR Part 12',
    title: 'Commercial products and services',
    cue: 'Market research shows commercial services can meet most of the agency need.',
    correct: 'Consider commercial acquisition procedures and tailor terms only when justified by the requirement.',
    wrong: [
      ['Default to a bespoke government specification despite a capable commercial market', 'Ignoring commercial capability can add cost and delay.', 'Use commercial practices when they satisfy the need.'],
      ['Assume commercial means no contract terms apply', 'Commercial acquisitions still use FAR procedures and contract terms.', 'Use the correct commercial framework.'],
      ['Reject commercial services because the agency has always built custom solutions', 'Past custom practice is not a market analysis.', 'Let current market research guide strategy.'],
    ],
  },
  {
    chapter: 'FAR Part 13',
    title: 'Simplified acquisition',
    cue: 'A low-dollar purchase appears to fall within simplified acquisition procedures.',
    correct: 'Use simplified procedures to reduce burden while still documenting price reasonableness, competition, and compliance.',
    wrong: [
      ['Treat simplified acquisition as permission to buy anything from anyone', 'Simplified does not mean uncontrolled.', 'Keep required competition and documentation.'],
      ['Apply the most complex negotiated procurement process by default', 'Overprocessing can waste time for simple buys.', 'Use the procedure suited to dollar value and risk.'],
      ['Split the purchase to stay below a threshold', 'Improper splitting avoids rules and is not acceptable.', 'Aggregate requirements appropriately.'],
    ],
  },
  {
    chapter: 'FAR Part 15',
    title: 'Best value tradeoff',
    cue: 'A negotiated procurement has meaningful technical risk and price is not the only discriminator.',
    correct: 'Use stated evaluation factors and document any tradeoff rationale, including benefits worth additional cost.',
    wrong: [
      ['Award to the lowest price even when the solicitation says tradeoff', 'Tradeoff permits selecting other than lowest price when justified.', 'Follow the stated source selection method.'],
      ['Invent new evaluation factors after proposals arrive', 'Offerors must know significant evaluation factors in the solicitation.', 'Evaluate against disclosed criteria.'],
      ['Document the decision as personal preference', 'Source selection needs a reasoned comparative assessment.', 'Tie judgment to criteria and evidence.'],
    ],
  },
  {
    chapter: 'FAR Part 15',
    title: 'Competitive range',
    cue: 'Several proposals are evaluated, and discussions are planned.',
    correct: 'Establish the competitive range based on the most highly rated proposals unless the solicitation or FAR path supports another approach.',
    wrong: [
      ['Include every proposal automatically even if inefficient', 'The competitive range can be limited for efficient competition.', 'Use evaluation results and FAR rules.'],
      ['Exclude an offeror because the team dislikes its formatting', 'Exclusion should rest on evaluated proposal merit, not irritation.', 'Apply stated evaluation criteria.'],
      ['Hold discussions with one offeror secretly while calling it competition', 'Unequal discussions undermine procurement integrity.', 'Control exchanges under FAR Part 15.'],
    ],
  },
  {
    chapter: 'FAR Part 16',
    title: 'Contract type risk',
    cue: 'The requirement is uncertain and cost risk is difficult to estimate.',
    correct: 'Select a contract type that allocates risk appropriately and supports the acquisition objective.',
    wrong: [
      ['Use firm-fixed-price for every uncertain development effort', 'Fixed price can be poor fit when uncertainty is high.', 'Match type to risk and requirement definition.'],
      ['Choose cost reimbursement to avoid managing cost', 'Cost-type contracts require strong surveillance.', 'Contract type does not remove management responsibility.'],
      ['Let the contractor choose the type after award', 'Contract type is part of the acquisition strategy and solicitation.', 'Decide before award based on risk.'],
    ],
  },
  {
    chapter: 'FAR Part 19',
    title: 'Small business strategy',
    cue: 'Market research identifies multiple capable small businesses for a suitable requirement.',
    correct: 'Consider small business set-aside strategy consistent with market research, rule-of-two logic, and agency goals.',
    wrong: [
      ['Ignore small businesses because the incumbent is large', 'Incumbency alone does not decide set-aside strategy.', 'Use market research and FAR small business rules.'],
      ['Set aside without checking capability or fair market price expectations', 'Set-asides still need capable firms and reasonable pricing.', 'Apply the rule carefully.'],
      ['Use small business status as the only evaluation factor for technical merit', 'Status and technical capability are different considerations.', 'Evaluate capability under the solicitation.'],
    ],
  },
  {
    chapter: 'FAR Part 31',
    title: 'Cost allowability',
    cue: 'A contractor includes questionable costs in a cost-reimbursement invoice.',
    correct: 'Assess allowability, allocability, reasonableness, and contract terms before approving reimbursement.',
    wrong: [
      ['Pay all billed costs because cost reimbursement means reimbursement of every cost', 'Cost-type contracts still limit allowable costs.', 'Apply FAR cost principles and contract clauses.'],
      ['Reject all indirect costs automatically', 'Indirect costs can be allowable when properly allocated and supported.', 'Evaluate the cost category and support.'],
      ['Approve because the contractor budgeted it internally', 'Internal budget inclusion does not prove government allowability.', 'Use FAR and contract criteria.'],
    ],
  },
  {
    chapter: 'Acquisition Ethics',
    title: 'Procurement integrity',
    cue: 'A team member receives nonpublic competitor pricing information before award.',
    correct: 'Stop, protect the information, notify appropriate officials, and follow procurement integrity guidance.',
    wrong: [
      ['Use the information to negotiate a better deal quietly', 'Misuse of nonpublic information undermines competition and legality.', 'Escalate and protect the procurement.'],
      ['Forward it to the favorite offeror to speed award', 'Disclosure would compound the integrity breach.', 'Limit access and seek counsel.'],
      ['Ignore it because no contract has been awarded yet', 'Procurement integrity applies before award too.', 'Act promptly when protected information appears.'],
    ],
  },
]

const procurementContexts: Context[] = [
  { setting: 'A contracting officer reviews a requirement package before solicitation release.', pressure: 'The best answer must align with FAR competition, planning, and documentation principles.' },
  { setting: 'A program manager wants the fastest path to award for a mission need.', pressure: 'The candidate must choose the action that is fast only if it remains compliant.' },
  { setting: 'A source selection team is preparing evaluation notices and the award file.', pressure: 'The response should protect fairness and the stated solicitation criteria.' },
  { setting: 'Market research has produced mixed evidence about available suppliers.', pressure: 'The contracting answer should turn that evidence into a sound acquisition strategy.' },
  { setting: 'A contract specialist spots a shortcut that would reduce work but weaken the file.', pressure: 'The exam-grade choice should preserve procurement integrity.' },
  { setting: 'A requiring activity asks for help translating mission need into a contract requirement.', pressure: 'The best response balances clear need, competition, and evaluation practicality.' },
  { setting: 'During a negotiation planning meeting, price, technical risk, and schedule are all in tension.', pressure: 'The answer must use the FAR framework rather than informal bargaining instincts.' },
  { setting: 'A supervisor asks whether a lower-threshold procedure can be used.', pressure: 'The candidate must avoid threshold games while using efficient procedures where allowed.' },
  { setting: 'A post-award review asks what should have been documented before award.', pressure: 'The answer should show a defensible acquisition record.' },
  { setting: 'An acquisition workforce trainee is choosing between several plausible FAR actions.', pressure: 'The strongest answer is the one grounded in policy, facts, and fairness.' },
]

const defenseBudgetConcepts: Concept[] = [
  {
    chapter: 'Budget Formulation',
    title: 'Appropriation purpose',
    cue: 'A budget exhibit moves costs between O&M, Procurement, and RDT&E without explaining the work being funded.',
    correct: 'Classify budget requests by the nature and purpose of the work and support the exhibit with a clear justification.',
    wrong: [
      ['Put all costs in the account with the most room', 'Budget room does not determine appropriation purpose.', 'Match work to appropriation character.'],
      ['Use Procurement for every technology effort', 'Development and procurement have different budget purposes.', 'Classify by phase and activity.'],
      ['Hide the classification issue until execution', 'Misclassification becomes harder and riskier later.', 'Resolve purpose during formulation.'],
    ],
  },
  {
    chapter: 'PPBE',
    title: 'Programming decision',
    cue: 'A component wants to add a capability that competes with already approved priorities.',
    correct: 'Assess strategic alignment, affordability, alternatives, and tradeoffs through the programming and budgeting process.',
    wrong: [
      ['Add it without offsets because every new capability is automatically funded', 'Resources are constrained and priorities compete.', 'Use programming tradeoff analysis.'],
      ['Treat strategy as unrelated to budget choices', 'PPBE links strategy and resources.', 'Tie capability to strategic priorities.'],
      ['Wait for execution year to discover affordability', 'Affordability should be assessed before the budget is locked.', 'Analyze early.'],
    ],
  },
  {
    chapter: 'Budget Justification',
    title: 'Congressional exhibit',
    cue: 'A budget justification book lacks quantity, cost, and performance explanation for a procurement line.',
    correct: 'Provide transparent justification that links requested budget authority to quantities, cost drivers, schedule, and mission need.',
    wrong: [
      ['Use slogans instead of cost detail', 'Justification requires more than advocacy language.', 'Show the basis for the request.'],
      ['Omit quantity changes because they create questions', 'Quantity changes are exactly what reviewers need to understand.', 'Explain drivers openly.'],
      ['Copy last year unchanged despite a major scope change', 'Changed scope needs updated justification.', 'Keep exhibits current.'],
    ],
  },
  {
    chapter: 'Budget Execution',
    title: 'Apportionment control',
    cue: 'A program has an enacted appropriation but is waiting on OMB apportionment and internal funds distribution.',
    correct: 'Do not incur obligations until apportioned and allotted authority is available through proper funds control channels.',
    wrong: [
      ['Obligate because enactment alone is enough for local execution', 'Execution also depends on apportionment and allotment controls.', 'Wait for distributed authority.'],
      ['Use a verbal promise from headquarters as obligational authority', 'Verbal intent is not a funds distribution document.', 'Use formal authority.'],
      ['Borrow another program allotment and fix it later', 'Informal borrowing can violate funds control.', 'Keep obligations within authorized allotments.'],
    ],
  },
  {
    chapter: 'Appropriation Availability',
    title: 'Expired account',
    cue: 'A manager wants to use expired funds for a brand-new requirement after the period of availability ended.',
    correct: 'Use expired funds only to adjust or liquidate valid existing obligations, not to incur new obligations.',
    wrong: [
      ['Use expired funds for any need in the same mission area', 'Expired phase does not permit new obligations.', 'Respect current, expired, and canceled phases.'],
      ['Treat expiration as a bookkeeping label only', 'Expiration changes legal availability.', 'Apply the phase rules.'],
      ['Move the new requirement into old paperwork', 'Backfitting a new need into old documents is not valid.', 'Use currently available authority if appropriate.'],
    ],
  },
  {
    chapter: 'Appropriation Availability',
    title: 'Canceled account',
    cue: 'A valid old obligation surfaces after the fixed appropriation account has canceled.',
    correct: 'Follow canceled-account rules and use an available current appropriation for the same purpose only within statutory limits.',
    wrong: [
      ['Pay directly from the canceled account', 'Canceled accounts are closed and not available for payment.', 'Use the prescribed current-account process.'],
      ['Ignore the obligation because cancellation erases all liability', 'Cancellation does not necessarily erase a valid obligation.', 'Resolve through proper canceled-account rules.'],
      ['Use any current appropriation regardless of purpose', 'The current appropriation must be available for the same purpose.', 'Apply purpose and statutory limits.'],
    ],
  },
  {
    chapter: 'Reprogramming',
    title: 'Below threshold action',
    cue: 'Execution data shows funds are needed in a different budget line than originally planned.',
    correct: 'Determine whether reprogramming is allowed, whether it is below-threshold or prior-approval, and document the action.',
    wrong: [
      ['Move funds silently because they remain inside DoD', 'Internal movement can still require reprogramming controls.', 'Follow the applicable threshold and approval rules.'],
      ['Assume every movement needs a new appropriation act', 'Some changes can be handled through reprogramming authority.', 'Identify the correct type of budget execution action.'],
      ['Call the movement an accounting correction to avoid review', 'Labeling cannot bypass reprogramming rules.', 'Classify the action accurately.'],
    ],
  },
  {
    chapter: 'Commitments and Obligations',
    title: 'Commitment versus obligation',
    cue: 'A purchase request is approved internally but no contract, order, or grant has been issued.',
    correct: 'Treat the approved request as a commitment if applicable, and record an obligation only after a valid obligating event.',
    wrong: [
      ['Record an obligation at the first idea meeting', 'Ideas do not create legal obligations.', 'Use commitment and obligation stages correctly.'],
      ['Wait for payment before any budgetary record exists', 'Budgetary accounting starts before disbursement.', 'Track commitments and obligations as they occur.'],
      ['Use obligation recording to hide unused funds', 'Obligations must reflect valid legal events.', 'Do not distort execution status.'],
    ],
  },
  {
    chapter: 'Outlays',
    title: 'Budget authority versus outlays',
    cue: 'A briefing confuses budget authority, obligations, and outlays as if they are the same number.',
    correct: 'Explain that budget authority permits obligations, obligations create legal commitments, and outlays are cash disbursements.',
    wrong: [
      ['Say outlays are the same as appropriated authority', 'Outlays are cash payments, not authority.', 'Separate authority, obligation, and cash flow.'],
      ['Use obligations as proof that cash has already left Treasury', 'Obligation precedes or differs from disbursement.', 'Track each budget stage distinctly.'],
      ['Ignore the terms because only total cost matters', 'Budget terms affect legal control and reporting.', 'Use precise execution language.'],
    ],
  },
  {
    chapter: 'Working Capital Funds',
    title: 'Reimbursable authority',
    cue: 'A working capital activity accepts customer orders and plans obligations before confirming budgetary resources.',
    correct: 'Confirm reimbursable authority, customer order validity, and available budgetary resources before incurring obligations.',
    wrong: [
      ['Obligate because a customer might place an order later', 'Potential demand is not budgetary resource authority.', 'Tie obligations to valid resources.'],
      ['Treat working capital funds as outside fiscal controls', 'Working capital funds still operate under statutory and regulatory controls.', 'Apply WCF resource rules.'],
      ['Use private-party work without legal authority', 'Customer eligibility and legal authority matter.', 'Verify authorized customers and purposes.'],
    ],
  },
  {
    chapter: 'Continuing Resolution',
    title: 'CR planning',
    cue: 'The fiscal year begins under a continuing resolution with limits on new starts and rate of operations.',
    correct: 'Operate within CR terms, preserve mission essentials, and avoid prohibited new starts or funding increases.',
    wrong: [
      ['Execute the full President budget request immediately', 'A CR does not automatically provide full requested authority.', 'Follow the enacted CR conditions.'],
      ['Start a new program because it was planned in the budget request', 'New starts may be restricted under a CR.', 'Check CR language before acting.'],
      ['Ignore rate limits once internal plans are approved', 'Internal plans cannot override statutory CR limits.', 'Operate within legal authority.'],
    ],
  },
  {
    chapter: 'Decision Support',
    title: 'Execution review',
    cue: 'Midyear execution review shows under-obligation in one program and cost growth in another.',
    correct: 'Analyze causes, forecast year-end execution, assess legal movement options, and brief recommended tradeoffs.',
    wrong: [
      ['Move funds immediately without cause analysis', 'Fast movement can mask root causes and violate controls.', 'Analyze before recommending action.'],
      ['Assume under-obligation always means excess funds', 'Slow obligations may reflect timing, contracting delay, or genuine excess.', 'Forecast and validate.'],
      ['Ignore cost growth until the appropriation cancels', 'Delay reduces management options.', 'Surface risk while action is still possible.'],
    ],
  },
]

const defenseBudgetContexts: Context[] = [
  { setting: 'A DoD budget analyst is preparing a senior leader review package.', pressure: 'The correct response should connect strategy, budget authority, and execution controls.' },
  { setting: 'During PPBE review, a component proposes a funding change with incomplete justification.', pressure: 'The candidate must choose the answer that would survive comptroller scrutiny.' },
  { setting: 'A budget execution office is deciding whether funds can be used for a new requirement.', pressure: 'The safest answer applies availability and funds distribution rules.' },
  { setting: 'A program manager is frustrated by delays between appropriation, apportionment, allotment, and contract award.', pressure: 'The answer should clarify the legal control point.' },
  { setting: 'An analyst compares budget request exhibits with current execution reports.', pressure: 'The best response ties formulation assumptions to execution evidence.' },
  { setting: 'A midyear review asks whether funds should move between programs.', pressure: 'The candidate must identify analysis, authority, and documentation before action.' },
  { setting: 'A fiscal law training scenario asks how to handle old-year money.', pressure: 'The answer must distinguish current, expired, and canceled availability.' },
  { setting: 'A working capital fund manager reviews customer demand and planned obligations.', pressure: 'The response should protect resource availability and customer-order discipline.' },
  { setting: 'A continuing resolution limits normal execution plans.', pressure: 'The candidate has to choose compliance over business-as-usual execution.' },
  { setting: 'A senior leader asks for a plain-English explanation of budget execution status.', pressure: 'The strongest answer uses precise defense budgeting vocabulary.' },
]

export const careerAgentGeneratedCredentialExpansionGovIndustrialQuestionsByTrack: Record<string, Question[]> = {
  nerc: buildTrackQuestions({
    idStart: 4630000,
    count: 170,
    label: 'NERC System Operator',
    chapterPrefix: 'NERC',
    concepts: nercConcepts,
    contexts: nercContexts,
  }),
  apiInspectors: buildTrackQuestions({
    idStart: 4631000,
    count: 170,
    label: 'API Inspector',
    chapterPrefix: 'API ICP',
    concepts: apiInspectorConcepts,
    contexts: apiInspectorContexts,
  }),
  cdfm: buildTrackQuestions({
    idStart: 4632000,
    count: 170,
    label: 'CDFM',
    chapterPrefix: 'CDFM',
    concepts: cdfmConcepts,
    contexts: cdfmContexts,
  }),
  certifiedGeneralAppraiser: buildTrackQuestions({
    idStart: 4633000,
    count: 170,
    label: 'Certified General Appraiser',
    chapterPrefix: 'AQB USPAP',
    concepts: appraiserConcepts,
    contexts: appraiserContexts,
  }),
  procurementContractingRoadmap: buildTrackQuestions({
    idStart: 4634000,
    count: 120,
    label: 'Procurement Contracting',
    chapterPrefix: 'FAR',
    concepts: procurementConcepts,
    contexts: procurementContexts,
  }),
  defenseBudgetingRoadmap: buildTrackQuestions({
    idStart: 4635000,
    count: 120,
    label: 'Defense Budgeting',
    chapterPrefix: 'DoD Budget',
    concepts: defenseBudgetConcepts,
    contexts: defenseBudgetContexts,
  }),
}
