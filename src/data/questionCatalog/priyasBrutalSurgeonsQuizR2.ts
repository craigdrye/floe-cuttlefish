import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]

const source = 'Floe priyasBrutalSurgeonsQuiz 103-pass'

export const priyasBrutalSurgeonsQuizR2Questions: Question[] = makeQuestionBank('Career Skills', [
  {
    id: 7653000,
    chapter: 'Hostile Operative Anatomy',
    title: 'The Gallbladder That Refused to Be a Critical View',
    prompt:
      'A severely inflamed, contracted gallbladder is welded to the hepatoduodenal ligament. No critical view of safety is achievable, the porta is a hostile fog, and Priya has already promised herself she will not invent a cystic duct out of optimism. She elects subtotal cholecystectomy. The remnant Hartmann pouch is open, friable, and the cystic duct internal opening is visible from inside. Knowing this patient is a poor candidate for any future reintervention and has no reliable endoscopy access, which bailout completes the operation most safely?',
    correct:
      'Perform a fenestrating subtotal cholecystectomy: leave the back wall on the liver, do not close the remnant over the stones, secure the cystic duct opening internally if possible, and leave a well-placed drain to control any controlled biliary fistula',
    wrong: [
      miss(
        'Perform a reconstituting subtotal cholecystectomy by suturing the remnant pouch closed over the cystic duct to create a small intact gallbladder, which lowers the bile leak rate and avoids the need for a drain in a patient who cannot easily return',
        'Reconstituting (closing the remnant) does lower early bile leak but recreates a stone-bearing, mucosa-lined pouch with the highest rate of recurrent biliary disease and reoperation — dangerous in a patient who cannot safely return.',
        'Closing the remnant trades a manageable controlled fistula now for recurrent stones in a patient who can never come back.',
      ),
      miss(
        'Convert to open and dissect out the cystic duct and artery to their origins despite the obliterated planes, because a completed total cholecystectomy is always oncologically and biliarily superior to leaving any remnant',
        'Forcing total cholecystectomy through obliterated planes is exactly how a vasculobiliary injury happens; conversion does not restore anatomy that inflammation has destroyed.',
        'Conversion gives you light and hands, not a cystic duct that inflammation has already erased.',
      ),
      miss(
        'Abandon cholecystectomy entirely, place a cholecystostomy tube into the pouch, and bring the patient back in six weeks for definitive resection once the inflammation has settled',
        'A tube cholecystostomy is a reasonable rescue when no safe dissection is possible at all, but here the surgeon already has a controllable open remnant; a delayed-interval total in this hostile porta is not safer.',
        'A drain into an undrained pouch is retreat, not the controlled bailout the field in front of you allows.',
      ),
    ],
    lesson:
      'When a difficult gallbladder defeats the critical view of safety, subtotal cholecystectomy is the expert bailout, not a failure. The fenestrating type (open remnant, back wall left on liver, drain) trades a higher controlled bile-leak rate for the lowest rate of recurrent stone disease; the reconstituting type (remnant sutured closed) lowers leak but leaves a stone-bearing pouch with more recurrent disease and reoperation. Neither raises bile-duct-injury risk versus the other, so technique is chosen by which downstream complication the patient can least afford.',
    source,
    generated: true,
  },
  {
    id: 7653001,
    chapter: 'Hostile Operative Anatomy',
    title: 'The Nerve That Forgot to Recur',
    prompt:
      'During a right thyroid lobectomy, the registrar has been chasing the recurrent laryngeal nerve into the tracheoesophageal groove for twenty minutes and found nothing but indignation. Re-reading the preoperative CT, Priya notes a right-sided aortic arch variant and a retroesophageal vessel coursing behind the esophagus. The intern suggests dissecting deeper into the groove until the nerve appears. What is the safest recognition and response?',
    correct:
      'Suspect a non-recurrent laryngeal nerve associated with an aberrant right subclavian artery and search for the nerve descending directly from the vagus to the larynx near the upper pole, abandoning the low tracheoesophageal-groove search',
    wrong: [
      miss(
        'Continue meticulous dissection low in the tracheoesophageal groove, because the recurrent laryngeal nerve is essentially always present there and absence simply means it has not yet been exposed',
        'In about 0.5–0.7% of patients on the right the nerve is non-recurrent and never enters the low groove; persisting there hunts in the wrong place and risks injuring the nerve as it crosses higher.',
        'You are searching the basement for a nerve that took the express elevator from the vagus to the larynx.',
      ),
      miss(
        'Use the nerve stimulator to map the entire low groove systematically, and if no signal returns, divide the suspicious bands sequentially since a true nerve would have responded to stimulation before division',
        'Dividing bands because they did not stimulate is exactly how a non-recurrent nerve is transected; failure to find signal low should raise suspicion of an anomalous course, not license blind division.',
        'Silence in the wrong location is not permission to cut; it is a clue you are in the wrong location.',
      ),
      miss(
        'Stop the operation, wake the patient, and obtain a CT angiogram of the aortic arch and great vessels before proceeding, because operating without confirming the vascular anatomy risks catastrophic subclavian injury',
        'The arch variant was already on the preoperative CT and the lobectomy is underway; aborting for repeat imaging is unnecessary delay when the anomaly can be managed by re-directing the dissection.',
        'You already own the imaging that explains this; the answer is to change where you look, not to start over.',
      ),
    ],
    lesson:
      'A non-recurrent laryngeal nerve occurs in roughly 0.5–0.7% of patients, almost exclusively on the right, and is associated in close to 90% of cases with an aberrant right subclavian artery (arteria lusoria), which often coexists with a right-sided arch and a retroesophageal vessel on preoperative imaging. The nerve passes directly from the vagus to the larynx rather than looping into the tracheoesophageal groove. Recognizing the imaging signature redirects the search and prevents transecting a nerve that is hiding in plain sight near the upper pole.',
    source,
    generated: true,
  },
  {
    id: 7653002,
    chapter: 'Endocrine, Head-and-Neck, and Airway Traps',
    title: 'The Signal That Went Dark on the First Side',
    prompt:
      'Halfway through a planned total thyroidectomy for a large benign multinodular goiter, the right recurrent laryngeal nerve loses its IONM signal: the amplitude has fallen from 720 microvolts to under 100 microvolts. The nerve looks visually intact and continuous. Troubleshooting (checking the endotracheal tube position, electrode contact, stimulator current, and rechecking the vagus) confirms a true loss of signal with no identifiable focal injury point, consistent with a global (Type 2) pattern. The patient is stable and the indication is benign. What is the safest plan?',
    correct:
      'Stop after completing only the first lobectomy, stage the procedure, and return for the contralateral side later once vocal cord function is documented, to avoid the risk of bilateral vocal fold paralysis',
    wrong: [
      miss(
        'Proceed with the contralateral lobectomy as planned, since the nerve is visually intact and continuous, and visible continuity of the nerve fibers reliably confirms preserved function even when the monitored signal is absent',
        'Visual continuity does not prove function; an intact-looking nerve with true loss of signal still carries a real risk of paralysis, and completing the second side risks bilateral cord paralysis and airway obstruction.',
        'A nerve can look whole and still be silent; you cannot see function with your eyes.',
      ),
      miss(
        'Complete the total thyroidectomy but place a prophylactic tracheostomy at the end of the case, so that if both cords are paralyzed the airway is already secured and the patient avoids an emergency reintubation',
        'Planning around a foreseeable bilateral paralysis rather than preventing it is the wrong order; staging removes the risk, whereas a prophylactic tracheostomy accepts a devastating complication you did not have to incur.',
        'Building an escape hatch for a disaster you can simply decline to cause is not a plan, it is a confession.',
      ),
      miss(
        'Wait 20 minutes intraoperatively and re-test; if the amplitude recovers above the threshold, complete the second side, and if it does not, repeat the troubleshooting algorithm a second time before deciding',
        'Brief observation can occasionally show recovery, but a confirmed global loss after a completed troubleshooting algorithm should not be re-litigated indefinitely while anesthesia continues; the safe default for a benign indication is to stage.',
        'Re-running a finished algorithm to talk yourself into the second side is how bilateral paralysis happens.',
      ),
    ],
    lesson:
      'Intraoperative loss of signal during planned bilateral thyroid surgery is defined as amplitude falling below roughly 100 microvolts after a structured troubleshooting algorithm. A Type 1 (segmental) loss localizes to a focal injury point; a Type 2 (global) loss has no identifiable site. For a benign indication, a confirmed first-side loss is a strong reason to stage the operation and defer the contralateral lobectomy until laryngeal function is documented, because completing the second side risks bilateral vocal fold paralysis and airway loss. Only exceptional circumstances, such as advanced cancer, justify proceeding.',
    source,
    generated: true,
  },
  {
    id: 7653003,
    chapter: 'Vascular, Trauma, and Damage Control',
    title: 'The Balloon That Picked the Wrong Floor',
    prompt:
      'A hypotensive patient with an open-book pelvic fracture and a contained but expanding pelvic hematoma is peri-arrest despite a binder and massive transfusion. There is no evidence of intra-abdominal hemorrhage on FAST, the abdomen is soft, and the team is preparing resuscitative endovascular balloon occlusion of the aorta as a bridge to angioembolization or preperitoneal packing. Where should the balloon be positioned, and why?',
    correct:
      'Inflate in Zone III, the infrarenal aorta just proximal to the iliac bifurcation, because the hemorrhage is pelvic and Zone III preserves visceral and renal perfusion while controlling pelvic inflow',
    wrong: [
      miss(
        'Inflate in Zone I, the supraceliac aorta between the left subclavian artery and the celiac trunk, since the highest possible occlusion gives the most complete proximal control and the broadest reduction in distal bleeding',
        'Zone I does reduce pelvic flow, but it needlessly renders the entire abdominal viscera and kidneys ischemic; with an isolated pelvic source and a soft abdomen, Zone III gives control without that ischemic penalty.',
        'Maximal occlusion is not the same as correct occlusion; you would be starving the gut to stop the pelvis.',
      ),
      miss(
        'Inflate in Zone II, between the celiac trunk and the renal arteries, to balance proximal control against the duration of lower-extremity ischemia and to keep the balloon clear of the iliac bifurcation',
        'Zone II is a deliberate no-go: occluding across the visceral segment selectively ischemizes the gut without adding hemorrhage control beyond what Zone III already provides for a pelvic source.',
        'There is a reason no one names Zone II as a target; it is the seat between two good options.',
      ),
      miss(
        'Defer REBOA entirely and proceed directly to laparotomy for proximal aortic cross-clamping at the diaphragmatic hiatus, since open control is more secure than an endovascular balloon in an unstable patient with an expanding hematoma',
        'A thoracotomy for supraceliac clamping in a patient whose source is pelvic and whose abdomen is soft adds a massive physiologic insult; REBOA Zone III is the targeted bridge to definitive pelvic control.',
        'Opening the chest to clamp the aorta for a pelvic bleed is answering the wrong question with the biggest possible incision.',
      ),
    ],
    lesson:
      'REBOA zones map to the bleeding source. Zone I (supraceliac, from the left subclavian artery to the celiac trunk) is for intra-abdominal exsanguination or imminent arrest. Zone III (infrarenal, just proximal to the iliac bifurcation) is for isolated pelvic or junctional hemorrhage and preserves visceral and renal perfusion. Zone II (the visceral segment between celiac and renal arteries) is an active no-go because occluding there ischemizes the gut without added benefit. Choosing the highest zone reflexively trades unnecessary visceral ischemia for control you could have gotten lower down.',
    source,
    generated: true,
  },
  {
    id: 7653004,
    chapter: 'HPB Catastrophes',
    title: 'The Herald That Eroded the Wrong Artery',
    prompt:
      'POD 12 after pancreaticoduodenectomy, a patient with a known grade B pancreatic fistula has a 40 mL sentinel bleed from the abdominal drain, then becomes briefly hypotensive and stabilizes with fluid. CT angiography shows a pseudoaneurysm at the gastroduodenal artery stump arising from the common hepatic artery. The preoperative imaging documented a replaced right hepatic artery off the superior mesenteric artery. The patient is taken to interventional radiology. What is the safest endovascular strategy?',
    correct:
      'Deploy a covered stent across the common-to-proper hepatic artery spanning the GDA stump origin to exclude the pseudoaneurysm while preserving hepatic arterial inflow',
    wrong: [
      miss(
        'Coil-embolize the proper hepatic artery proximal and distal to the pseudoaneurysm to sacrifice the bleeding segment, accepting the loss because the replaced right hepatic artery off the SMA will fully supply the liver and prevent ischemia',
        'A replaced right hepatic artery supplies only the right liver; sacrificing the proper hepatic artery still de-arterializes the left liver and risks ischemia, abscess, or biliary necrosis at the fresh hepaticojejunostomy.',
        'A replaced artery covers a territory, not the whole organ; coiling the proper hepatic still starves the left lobe.',
      ),
      miss(
        'Selectively coil only the GDA stump itself, packing the short stump densely with coils, since isolating the stump alone is the most targeted way to stop the bleed without touching the hepatic artery',
        'A short GDA stump pseudoaneurysm has back-bleeding from the hepatic artery, so coiling the stump alone frequently fails to exclude it; the inflow vessel must be addressed, ideally with a covered stent.',
        'A stump with two ways for blood to enter cannot be sealed by plugging only the exit.',
      ),
      miss(
        'Observe in the ICU with serial hemoglobins and repeat the CT angiogram in 24 hours, because the patient stabilized after a single small bleed and a negative or stable interval study would confirm the pseudoaneurysm is not actively threatening',
        'A sentinel bleed with a demonstrated pseudoaneurysm is a herald of imminent catastrophic hemorrhage; transient stability and a quiet interval scan are false reassurance, not evidence of resolution.',
        'The small bleed is the warning shot, not the all-clear; waiting is how the herald becomes the hemorrhage.',
      ),
    ],
    lesson:
      'After pancreaticoduodenectomy, the gastroduodenal artery stump eroded by a pancreatic fistula is the most common source of delayed hemorrhage, and a sentinel bleed demands immediate angiography, not observation. A covered stent placed across the hepatic artery spanning the stump origin excludes the pseudoaneurysm while preserving liver inflow. Coiling or sacrificing the proper hepatic artery risks hepatic ischemia even when a replaced right hepatic artery is present, because that variant supplies only its own territory. Coiling the short stump alone often fails because of hepatic-artery back-bleeding.',
    source,
    generated: true,
  },
  {
    id: 7653005,
    chapter: 'Vascular, Trauma, and Damage Control',
    title: 'The Belly That Reads High and Lies Low',
    prompt:
      'Forty-eight hours after a damage-control laparotomy for trauma, a packed patient with a temporary closure develops a tensely distended abdomen, peak airway pressures climbing, urine output falling to 10 mL/h, and a central venous pressure of 18 despite a lactate that is rising rather than clearing. The fellow reads the high CVP as volume overload and asks to diurese. What measurement settles the question, and what is the threshold that should drive reoperation?',
    correct:
      'Measure intra-abdominal pressure via the bladder using a small instilled saline volume; a sustained pressure above roughly 20 mmHg with new organ dysfunction defines abdominal compartment syndrome and mandates decompression, not diuresis',
    wrong: [
      miss(
        'Trust the high central venous pressure as evidence of hypervolemia, begin a furosemide infusion to offload the patient, and reassess the urine output and airway pressures after diuresis takes effect',
        'A raised CVP in this setting reflects transmitted intra-abdominal pressure compressing the IVC and thorax, not true volume overload; diuresing a hypoperfused, oliguric patient with rising lactate worsens the picture.',
        'The high filling pressure is a pressure-transmission artifact; you would be treating a number the abdomen is faking.',
      ),
      miss(
        'Obtain a CT of the abdomen and pelvis to look for a discrete drainable collection or ongoing hemorrhage before committing to any reoperation, since imaging will localize the precise cause of the rising pressure',
        'The diagnosis is bedside and physiologic; transporting an unstable patient with evolving compartment syndrome to CT is a dangerous delay when a bladder pressure answers the question in minutes.',
        'You can confirm this with a manometer at the bedside; the scanner is a detour the physiology cannot afford.',
      ),
      miss(
        'Increase sedation and add neuromuscular blockade to relax the abdominal wall, accept the bladder pressure of 18 mmHg as grade II intra-abdominal hypertension that can be managed medically, and continue current resuscitation',
        'Medical measures such as paralysis can buy time in lower-grade intra-abdominal hypertension, but established organ dysfunction with pressures in this range is abdominal compartment syndrome requiring decompression, not continued temporizing.',
        'Relaxing the wall does not relieve packed viscera and ongoing bleeding; medical measures stall while the kidneys die.',
      ),
    ],
    lesson:
      'Intra-abdominal hypertension is graded by sustained intra-abdominal pressure: grade I is 12–15 mmHg, II is 16–20, III is 21–25, and IV is above 25. Abdominal compartment syndrome is a sustained pressure above 20 mmHg accompanied by new organ dysfunction. It is measured at the bedside via the bladder with a small instilled saline volume (about 25 mL). A high CVP in this context reflects transmitted pressure, not hypervolemia, so diuresis is a trap; the definitive treatment for compartment syndrome is abdominal decompression.',
    source,
    generated: true,
  },
  {
    id: 7653006,
    chapter: 'Source Control and Postoperative Sepsis',
    title: 'The Conduit Leak That Hides in the Chest',
    prompt:
      'POD 6 after an Ivor Lewis esophagectomy with an intrathoracic gastric conduit anastomosis, a patient develops fever, rising tachycardia, a lactate of 3.6, increasing right pleural effusion, and turbid output appearing in the chest drain. Contrast study and CT confirm a leak at the intrathoracic anastomosis with a contained-but-soiling collection and the conduit appears viable on endoscopy. The patient is septic but not in refractory shock. What is the safest source-control strategy?',
    correct:
      'Control the source actively: drain the thoracic collection (radiologically or operatively), give broad-spectrum antibiotics and antifungals, decompress and divert enteric flow as needed, and consider endoscopic stent or vacuum therapy for the viable conduit rather than relying on antibiotics alone',
    wrong: [
      miss(
        'Manage conservatively with broad-spectrum antibiotics, nil by mouth, and the existing chest drain, reserving any intervention for the moment the patient develops frank septic shock, since most intrathoracic leaks seal with time if the conduit is viable',
        'An intrathoracic leak soils the mediastinum and pleura and is far more lethal than a cervical leak; waiting for shock before controlling the source is exactly the fatal delay this chapter punishes.',
        'An undrained chest leak is not a cervical wound you can open at the bedside; antibiotics alone do not control a soiling mediastinum.',
      ),
      miss(
        'Return immediately to take down the anastomosis, resect the conduit, and create a cervical esophagostomy with a spit fistula, because any intrathoracic anastomotic leak mandates conduit takedown to eliminate the source',
        'Conduit takedown is a last resort for a necrotic, non-salvageable conduit; in a viable conduit with a contained leak, drainage plus stent or vacuum therapy preserves the reconstruction the patient cannot easily regain.',
        'This is the longest, most destructive plan, and it discards a viable conduit the leak has not actually killed.',
      ),
      miss(
        'Treat it as you would a cervical anastomotic leak by opening the neck wound at the bedside to let it drain, since both are esophagogastric anastomotic leaks and bedside decompression is the standard first move',
        'A cervical leak can often be opened and drained at the bedside, but an intrathoracic leak sits in the mediastinum and pleura where bedside neck drainage does nothing; the location dictates a different source-control route.',
        'Anatomy changes the answer: you cannot reach a chest leak through a neck incision.',
      ),
    ],
    lesson:
      'Esophagogastric anastomotic leaks are managed by location and conduit viability, not by reflex. A cervical leak is often controlled by opening and draining the neck wound. An intrathoracic leak soils the mediastinum and pleura and is far more dangerous: it requires active drainage of the collection, broad antimicrobial and antifungal cover, enteric diversion or decompression, and, for a viable conduit, endoscopic stenting or endoluminal vacuum therapy. Antibiotics alone do not control a soiling chest, and conduit takedown is reserved for a non-viable conduit.',
    source,
    generated: true,
  },
  {
    id: 7653007,
    chapter: 'Anticoagulation, Coagulopathy, and Competing Catastrophes',
    title: 'The Antidote With Its Own Body Count',
    prompt:
      'Two patients need emergency laparotomy for perforated viscus within the same hour. Patient A takes dabigatran for atrial fibrillation; Patient B takes apixaban and also has a mechanical mitral valve and a strong prothrombotic history. Both took their dose this morning and both are bleeding into the abdomen. The registrar wants to give a single "reversal agent" to both and proceed. What is the most accurate reversal plan?',
    correct:
      'Reverse Patient A with idarucizumab, the specific antibody fragment for dabigatran, and reverse Patient B with 4-factor PCC, weighing the thrombotic risk of andexanet alfa carefully given the mechanical valve and prothrombotic state',
    wrong: [
      miss(
        'Give andexanet alfa to both patients, since it is the dedicated factor Xa reversal agent and its mechanism of decoy binding works equally well against dabigatran and apixaban, providing the most targeted reversal in each case',
        'Andexanet alfa reverses factor Xa inhibitors (apixaban, rivaroxaban, edoxaban), not the direct thrombin inhibitor dabigatran; using it for Patient A targets the wrong enzyme entirely.',
        'A factor Xa decoy does nothing to a thrombin inhibitor; you would be aiming the antidote at the wrong target in Patient A.',
      ),
      miss(
        'Give 4-factor PCC to both patients as a universal reversal product, since PCC restores the depleted vitamin-K-dependent clotting factors and corrects the coagulopathy regardless of which specific oral anticoagulant the patient is taking',
        'PCC is a reasonable nonspecific option for factor Xa inhibitors, but for dabigatran the specific antidote idarucizumab is markedly more effective and is the licensed choice; defaulting to PCC for Patient A underuses the better tool.',
        'PCC is the fallback for the Xa patient, not the answer for the thrombin-inhibitor patient who has a dedicated antidote.',
      ),
      miss(
        'Give andexanet alfa to Patient B without reservation because it is the specific antidote for apixaban, and the mechanical valve is irrelevant to the choice of reversal agent since both PCC and andexanet carry identical thrombotic profiles',
        'Andexanet does specifically bind apixaban, but it carries a recognized thrombotic risk and is not licensed for urgent surgery; in a mechanical-valve, prothrombotic patient that risk is precisely the consideration that may favor PCC.',
        'The valve is not irrelevant; the antidote that re-clots the patient can thrombose the very valve you are trying to protect.',
      ),
    ],
    lesson:
      'Direct oral anticoagulant reversal is agent-specific. Dabigatran, a direct thrombin inhibitor, is reversed by idarucizumab, a monoclonal antibody fragment that binds it with very high affinity and is licensed for urgent procedures. Factor Xa inhibitors (apixaban, rivaroxaban, edoxaban) are bound by andexanet alfa, but andexanet carries a real thrombotic risk and is not licensed for urgent surgery, so 4-factor PCC is frequently used instead, especially in a prothrombotic or mechanical-valve patient where re-thrombosis is its own lethal threat.',
    source,
    generated: true,
  },
  {
    id: 7653008,
    chapter: 'Surgical Oncology and MDT Sequencing',
    title: 'The Lavage That Outranks the Scan',
    prompt:
      'A patient with a bulky T3 gastric body adenocarcinoma has a CT and PET showing no distant metastases and no visible peritoneal disease, and is booked for upfront total gastrectomy with D2 lymphadenectomy. At staging laparoscopy the peritoneal surfaces look macroscopically clean, but peritoneal washing cytology returns positive for malignant cells. The surgeon argues that since there are no visible implants, the resection should proceed as planned. What is the correct interpretation and next step?',
    correct:
      'Treat positive peritoneal cytology as M1 (stage IV) disease even without visible implants, do not proceed to upfront gastrectomy, and refer for systemic chemotherapy with restaging and possible conversion surgery only if cytology converts to negative',
    wrong: [
      miss(
        'Proceed with total gastrectomy and D2 lymphadenectomy as planned, since the peritoneum is macroscopically clean and microscopic cytology in the absence of visible nodules does not upstage a resectable primary tumor',
        'Positive cytology (CY1) is classified as M1 disease regardless of visible implants and is one of the strongest adverse prognostic factors; proceeding to upfront resection ignores established stage IV status.',
        'Clean-looking peritoneum is exactly the trap; the cells in the wash already voted stage IV.',
      ),
      miss(
        'Perform the gastrectomy together with cytoreductive surgery and HIPEC during the same operation, since detecting positive cytology at laparoscopy is the ideal moment to deliver intraperitoneal chemotherapy and remove all macroscopic and microscopic disease at once',
        'Upfront combined gastrectomy plus HIPEC for newly discovered CY1 is not a standard reflex; systemic therapy first with restaging is the accepted pathway, and HIPEC/CRS remains investigational and patient-selected.',
        'You cannot cytoreduce microscopic disease, and bolting HIPEC onto an unplanned finding skips the chemotherapy step that should come first.',
      ),
      miss(
        'Disregard the cytology result as a likely false positive from surgical manipulation or contamination, repeat the gastrectomy plan, and recheck cytology only on the final resection specimen to confirm the initial reading',
        'Peritoneal lavage cytology is a validated staging test, not an artifact to be dismissed; treating CY1 as contamination and resecting anyway exposes the patient to a major operation that does not improve survival.',
        'Calling a validated staging test contamination so you can operate is wishful thinking dressed as skepticism.',
      ),
    ],
    lesson:
      'In gastric and gastroesophageal cancer, staging laparoscopy with peritoneal washing cytology can detect disease that imaging misses. Positive cytology (CY1) is classified as M1, stage IV disease even when the peritoneum looks macroscopically clean, and it is among the most powerful adverse prognostic factors. Guidelines do not recommend upfront gastrectomy for CY1; the pathway is systemic chemotherapy with restaging, and resection is reconsidered only if cytology converts to negative. A negative scan does not exclude peritoneal disease in high-risk gastric cancer.',
    source,
    generated: true,
  },
])
