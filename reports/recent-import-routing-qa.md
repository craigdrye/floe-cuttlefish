# Recent Import Routing QA

- Sampling rule: Every 50th question by generated import order, plus final question in each file when not already sampled.
- Generated import files reviewed: 9
- Total imported questions in scope: 1325
- Sampled questions reviewed by script: 40
- Sampled questions with findings: 31

## Headline Findings

- weak rationale: lesson repeats correct answer instead of explaining: 31
- routing: Geography trivia is routed to AP rather than a geography/world knowledge track: 9
- routing: OpenTrivia Brain Teasers bank label is not Career, though catalog wiring should target brainBurners: 6
- answer leakage: prompt contains exact correct answer text: 2
- bad distractors: duplicate answer choices: 1
- missing context: prompt appears to depend on omitted passage/table/scenario: 1
- missing context: references external figure/table/code without enough embedded context: 1
- Malformed generated TypeScript prevented normal parsing in 3 file(s); tolerant parsing was used for QA continuity.

## Malformed Generated Files

- OpenDSA Algorithms: `src/data/questionCatalog/openDsaAlgorithmsImported.ts` failed normal JS parsing with `Invalid or unexpected token`.
- OpenDSA Software: `src/data/questionCatalog/openDsaSoftwareImported.ts` failed normal JS parsing with `Invalid or unexpected token`.
- OpenDSA Formal Languages: `src/data/questionCatalog/openDsaFormalLanguagesImported.ts` failed normal JS parsing with `Invalid or unexpected token`.

## Batch Summary

- IMS Tutorials: 92 questions, 3 sampled, course `Statistics`, 3 sampled with findings.
- OpenSAT: 401 questions, 9 sampled, course `Mathematics`, 0 sampled with findings.
- OpenDSA Algorithms: 139 questions, 4 sampled, course `Software`, 4 sampled with findings.
- OpenDSA Software: 42 questions, 2 sampled, course `Software`, 2 sampled with findings.
- OpenDSA Formal Languages: 14 questions, 2 sampled, course `Software`, 2 sampled with findings.
- OpenDSA Bridge Course: 55 questions, 3 sampled, course `Software`, 3 sampled with findings.
- OpenIntro Stats Slides: 27 questions, 2 sampled, course `Statistics`, 2 sampled with findings.
- OpenTrivia Brain Teasers: 203 questions, 6 sampled, course `Fun`, 6 sampled with findings.
- OpenTrivia Geography: 352 questions, 9 sampled, course `AP`, 9 sampled with findings.

## Full-Scan Heuristic Counts

- weak rationale: lesson repeats correct answer instead of explaining: 924
- routing: Geography trivia is routed to AP rather than a geography/world knowledge track: 340
- routing: OpenTrivia Brain Teasers bank label is not Career, though catalog wiring should target brainBurners: 203
- missing context: references external figure/table/code without enough embedded context: 53
- bad distractors: fewer than two wrong choices: 47
- answer leakage: prompt contains exact correct answer text: 16
- stale fact risk: time-sensitive wording: 11
- malformed prompt: missing or very short prompt: 8
- missing context: prompt appears to depend on omitted passage/table/scenario: 5
- bad distractors: duplicate answer choices: 3

## Sampled Findings

### IMS Tutorials #1 / id 310001
- File: `src/data/questionCatalog/imsTutorialsImported.ts`
- Route: `Statistics` / chapter `Data and Study Design`
- Title: type of study is this
- Prompt: What type of study is this?
- Correct: Experiment
- Findings: missing context: prompt appears to depend on omitted passage/table/scenario; weak rationale: lesson repeats correct answer instead of explaining

### IMS Tutorials #51 / id 310051
- File: `src/data/questionCatalog/imsTutorialsImported.ts`
- Route: `Statistics` / chapter `Probability Foundations`
- Title: would be a good null hypothesis for the FDA statisticia...
- Prompt: Which would be a good null hypothesis for the FDA statistician examining the drug company's data?
- Correct: Drug A is the same as drug B at treating diabetes.
- Findings: weak rationale: lesson repeats correct answer instead of explaining

### IMS Tutorials #92 / id 310092
- File: `src/data/questionCatalog/imsTutorialsImported.ts`
- Route: `Statistics` / chapter `Model-Based Inference`
- Title: is the correct interpretation of the coefficient on Ser...
- Prompt: What is the correct interpretation of the coefficient on Service in the linear model which regresses Price on Service, Food, and Decor? ?
- Correct: Given that Food and Decor are in the model, Service is not significant, and we cannot know whether it has effect on modeling Price
- Findings: weak rationale: lesson repeats correct answer instead of explaining

### OpenDSA Algorithms #1 / id 330001
- File: `src/data/questionCatalog/openDsaAlgorithmsImported.ts`
- Route: `Software` / chapter `Algorithm Analysis`
- Title: Algorithm Analysis Exercise: Multiple choice question 1
- Prompt: Which part of the following code snippet has the highest Big-O notation (O) time complexity?
- Correct: "a += i;"
- Findings: missing context: references external figure/table/code without enough embedded context; bad distractors: duplicate answer choices; weak rationale: lesson repeats correct answer instead of explaining

### OpenDSA Algorithms #51 / id 330051
- File: `src/data/questionCatalog/openDsaAlgorithmsImported.ts`
- Route: `Software` / chapter `Comparing Algorithms`
- Title: pointers: type of copy
- Prompt: This is a still image of the concept map for the term "pointers". You can check the actual concept map on the glossary page. When assigning the value of one pointer to another, what type of copy takes place by default?
- Correct: Shallow copy
- Findings: weak rationale: lesson repeats correct answer instead of explaining

### OpenDSA Algorithms #101 / id 330101
- File: `src/data/questionCatalog/openDsaAlgorithmsImported.ts`
- Route: `Software` / chapter `Lists and Linked Structures`
- Title: OpenDSA List Linked Exercise: Insertion to Current Position
- Prompt: Given a linked list implementation, inserting a new element to the current position takes how long?
- Correct: \\Theta(1) time
- Findings: weak rationale: lesson repeats correct answer instead of explaining

### OpenDSA Algorithms #139 / id 330139
- File: `src/data/questionCatalog/openDsaAlgorithmsImported.ts`
- Route: `Software` / chapter `Recursion`
- Title: Recursion Tracing Exercise: Recursive function nested calls
- Prompt: Consider the following code: public long foo(long x) { if(x == 1 || x == 3) return x; else return x * foo(x-1); } Assuming no possibility of integer overflow, what will be returned by the following call to foo ? foo(foo(3)+foo(4));
- Correct: (15!)/(2!)
- Findings: weak rationale: lesson repeats correct answer instead of explaining

### OpenDSA Software #1 / id 331001
- File: `src/data/questionCatalog/openDsaSoftwareImported.ts`
- Route: `Software` / chapter `Computing Background`
- Title: Introduction Question Efficiency
- Prompt: A tool for measuring the efficiency of an algorithm or problem is:
- Correct: Algorithm analysis
- Findings: weak rationale: lesson repeats correct answer instead of explaining

### OpenDSA Software #42 / id 331042
- File: `src/data/questionCatalog/openDsaSoftwareImported.ts`
- Route: `Software` / chapter `Intro Software Design`
- Title: Arrays
- Prompt: Consider the following array declaration:
- Correct: The array has a length of 4.
- Findings: weak rationale: lesson repeats correct answer instead of explaining

### OpenDSA Formal Languages #1 / id 333001
- File: `src/data/questionCatalog/openDsaFormalLanguagesImported.ts`
- Route: `Software` / chapter `Formal Languages and Automata`
- Title: Associativity
- Prompt: Consider the following grammars: Grammar 1: E → T | E ^ T T → I | ( E ) Grammar 2: E → T | T ^ E T → I | ( E ) Grammar 3: E → I | E ^ E | ( E) If ^ represents exponentiation, how many of these grammars force 2^3^2 to evaluate to 512?
- Correct: 1
- Findings: weak rationale: lesson repeats correct answer instead of explaining

### OpenDSA Formal Languages #14 / id 333014
- File: `src/data/questionCatalog/openDsaFormalLanguagesImported.ts`
- Route: `Software` / chapter `Functional Programming and Lambda Calculus`
- Title: Using split to sort
- Prompt: Consider the following function definition:
- Correct: Exactly two of lines 6, 7, and 8 have to change.
- Findings: weak rationale: lesson repeats correct answer instead of explaining

### OpenDSA Bridge Course #1 / id 335001
- File: `src/data/questionCatalog/openDsaBridgeCourseImported.ts`
- Route: `Software` / chapter `Software Engineering Bridge`
- Title: Checkpoint 1
- Prompt: One of the key features of Object-oriented programming is encapsulation. Because of encapsulation, we generally have _________ instance variables and _____________ methods.
- Correct: private, public
- Findings: weak rationale: lesson repeats correct answer instead of explaining

### OpenDSA Bridge Course #51 / id 335051
- File: `src/data/questionCatalog/openDsaBridgeCourseImported.ts`
- Route: `Software` / chapter `Algorithms and Complexity`
- Title: Recursion Checkpoint 4
- Prompt: Approximately how many recursive calls would our Towers of Hanoi pseudo code algorithm make given a tower with 11 disks?
- Correct: 2^11
- Findings: weak rationale: lesson repeats correct answer instead of explaining

### OpenDSA Bridge Course #55 / id 335055
- File: `src/data/questionCatalog/openDsaBridgeCourseImported.ts`
- Route: `Software` / chapter `Core Data Structures`
- Title: Checkpoint 3
- Prompt: If the top of the stack is the last element in the array what is the complexity for pop() in big Oh notation?
- Correct: O(1)
- Findings: weak rationale: lesson repeats correct answer instead of explaining

### OpenIntro Stats Slides #1 / id 332001
- File: `src/data/questionCatalog/openIntroStatsSlidesImported.ts`
- Route: `Statistics` / chapter `Data Basics and Study Design`
- Title: What type of variable is a telephone area code?
- Prompt: What type of variable is a telephone area code?
- Correct: categorical
- Findings: weak rationale: lesson repeats correct answer instead of explaining

### OpenIntro Stats Slides #27 / id 332027
- File: `src/data/questionCatalog/openIntroStatsSlidesImported.ts`
- Route: `Statistics` / chapter `Multiple Regression`
- Title: The p-value for age is 0.01. What does this indicate?
- Prompt: The p-value for age is 0.01. What does this indicate?
- Correct: If we keep all other variables in the model, there is strong evidence that professor's age is associated with their rating.
- Findings: weak rationale: lesson repeats correct answer instead of explaining

### OpenTrivia Brain Teasers #1 / id 334001
- File: `src/data/questionCatalog/openTriviaBrainTeasersImported.ts`
- Route: `Fun` / chapter `Brain Teasers`
- Title: OpenTrivia Brain Teaser 1
- Prompt: A farmer had 12 sheep and 3 cows. All of the animals except 9 sheep died. How many animals did he have left in his farm?
- Correct: 9 sheep
- Findings: answer leakage: prompt contains exact correct answer text; weak rationale: lesson repeats correct answer instead of explaining; routing: OpenTrivia Brain Teasers bank label is not Career, though catalog wiring should target brainBurners

### OpenTrivia Brain Teasers #51 / id 334051
- File: `src/data/questionCatalog/openTriviaBrainTeasersImported.ts`
- Route: `Fun` / chapter `Brain Teasers`
- Title: OpenTrivia Brain Teaser 51
- Prompt: Suppose youre taking a multiple-choice quiz. One question has three choices - A, B, C. You do not know the answer and guess A. The instructor then announces that C is incorrect. Should you switch to B before turning in your paper?
- Correct: Yes, this should help
- Findings: weak rationale: lesson repeats correct answer instead of explaining; routing: OpenTrivia Brain Teasers bank label is not Career, though catalog wiring should target brainBurners

### OpenTrivia Brain Teasers #101 / id 334101
- File: `src/data/questionCatalog/openTriviaBrainTeasersImported.ts`
- Route: `Fun` / chapter `Brain Teasers`
- Title: OpenTrivia Brain Teaser 101
- Prompt: There is a branch with 10 birds on it. I shot 2 of them and then 1 more. How many birds are left on the branch?
- Correct: 0
- Findings: weak rationale: lesson repeats correct answer instead of explaining; routing: OpenTrivia Brain Teasers bank label is not Career, though catalog wiring should target brainBurners

### OpenTrivia Brain Teasers #151 / id 334151
- File: `src/data/questionCatalog/openTriviaBrainTeasersImported.ts`
- Route: `Fun` / chapter `Brain Teasers`
- Title: OpenTrivia Brain Teaser 151
- Prompt: You are on a ship and over the side hangs a rope ladder with one foot rungs. The tide rises a one foot per hour. At the end of five hours, how much of the ladder will remain above the water assuming that 12 rungs were above the water when the tide began to rise?
- Correct: 12 rungs
- Findings: answer leakage: prompt contains exact correct answer text; weak rationale: lesson repeats correct answer instead of explaining; routing: OpenTrivia Brain Teasers bank label is not Career, though catalog wiring should target brainBurners

### OpenTrivia Brain Teasers #201 / id 334201
- File: `src/data/questionCatalog/openTriviaBrainTeasersImported.ts`
- Route: `Fun` / chapter `Brain Teasers`
- Title: OpenTrivia Brain Teaser 201
- Prompt: There are two kinds of people who live on a mysterious island. They are the so-called Honestants, who always speak the truth, and the others are the Swindlecants, who always lie.
- Correct: No
- Findings: weak rationale: lesson repeats correct answer instead of explaining; routing: OpenTrivia Brain Teasers bank label is not Career, though catalog wiring should target brainBurners

### OpenTrivia Brain Teasers #203 / id 334203
- File: `src/data/questionCatalog/openTriviaBrainTeasersImported.ts`
- Route: `Fun` / chapter `Brain Teasers`
- Title: OpenTrivia Brain Teaser 203
- Prompt: There are these two country farmers milking their cows. While the one farmer is milking, a fly zooms into the cows ear. The cow starts jumping around, shaking its head and mooing. He tries to steady the cow and suddenly it settles down. He looks down and sees the
- Correct: in one ear and out the udder
- Findings: weak rationale: lesson repeats correct answer instead of explaining; routing: OpenTrivia Brain Teasers bank label is not Career, though catalog wiring should target brainBurners

### OpenTrivia Geography #1 / id 336001
- File: `src/data/questionCatalog/openTriviaGeographyImported.ts`
- Route: `AP` / chapter `World Capitals`
- Title: What is the capital of Afghanistan?
- Prompt: What is the capital of Afghanistan?
- Correct: Kabul
- Findings: weak rationale: lesson repeats correct answer instead of explaining; routing: Geography trivia is routed to AP rather than a geography/world knowledge track

### OpenTrivia Geography #51 / id 336051
- File: `src/data/questionCatalog/openTriviaGeographyImported.ts`
- Route: `AP` / chapter `Rivers and Oceans`
- Title: OpenTrivia Geography 51
- Prompt: In Greek mythology, this island is the legendary birthplace of the goddess of beauty, love, and passion, the charming Aphrodite, where according to the legend, she emerged from the sea foam.
- Correct: Cyprus
- Findings: weak rationale: lesson repeats correct answer instead of explaining; routing: Geography trivia is routed to AP rather than a geography/world knowledge track

### OpenTrivia Geography #101 / id 336101
- File: `src/data/questionCatalog/openTriviaGeographyImported.ts`
- Route: `AP` / chapter `Rivers and Oceans`
- Title: Near what sea was the ancient city of Troy located ?
- Prompt: Near what sea was the ancient city of Troy located ?
- Correct: Aegean
- Findings: weak rationale: lesson repeats correct answer instead of explaining; routing: Geography trivia is routed to AP rather than a geography/world knowledge track

### OpenTrivia Geography #151 / id 336151
- File: `src/data/questionCatalog/openTriviaGeographyImported.ts`
- Route: `AP` / chapter `Countries and Regions`
- Title: OpenTrivia Geography 151
- Prompt: The citizens of which country rejected the idea of joining the EU in 1972 and again in 1994?
- Correct: Norway
- Findings: weak rationale: lesson repeats correct answer instead of explaining; routing: Geography trivia is routed to AP rather than a geography/world knowledge track

### OpenTrivia Geography #201 / id 336201
- File: `src/data/questionCatalog/openTriviaGeographyImported.ts`
- Route: `AP` / chapter `Countries and Regions`
- Title: OpenTrivia Geography 201
- Prompt: During Roman occupation, this city, popular nowadays as the Heaven of Romance, was called Lutetia.
- Correct: Paris
- Findings: weak rationale: lesson repeats correct answer instead of explaining; routing: Geography trivia is routed to AP rather than a geography/world knowledge track

### OpenTrivia Geography #251 / id 336251
- File: `src/data/questionCatalog/openTriviaGeographyImported.ts`
- Route: `AP` / chapter `Physical Geography`
- Title: OpenTrivia Geography 251
- Prompt: The Cave of Melissani is among the most popular geological landmarks of which Greek island?
- Correct: Kefallonia
- Findings: weak rationale: lesson repeats correct answer instead of explaining; routing: Geography trivia is routed to AP rather than a geography/world knowledge track

### OpenTrivia Geography #301 / id 336301
- File: `src/data/questionCatalog/openTriviaGeographyImported.ts`
- Route: `AP` / chapter `Physical Geography`
- Title: OpenTrivia Geography 301
- Prompt: This African desert, famous for its enormous sand dunes, is considered the oldest desert in the world, having endured its current arid conditions for at least 80 million years.
- Correct: Namib Desert
- Findings: weak rationale: lesson repeats correct answer instead of explaining; routing: Geography trivia is routed to AP rather than a geography/world knowledge track

### OpenTrivia Geography #351 / id 336351
- File: `src/data/questionCatalog/openTriviaGeographyImported.ts`
- Route: `AP` / chapter `World Capitals`
- Title: OpenTrivia Geography 351
- Prompt: What is the name of the largest city and capital of Sweden?
- Correct: Stockholm
- Findings: weak rationale: lesson repeats correct answer instead of explaining; routing: Geography trivia is routed to AP rather than a geography/world knowledge track

### OpenTrivia Geography #352 / id 336352
- File: `src/data/questionCatalog/openTriviaGeographyImported.ts`
- Route: `AP` / chapter `Countries and Regions`
- Title: OpenTrivia Geography 352
- Prompt: What is the capital city of the Federative Republic of Brazil?
- Correct: Brasilia
- Findings: weak rationale: lesson repeats correct answer instead of explaining; routing: Geography trivia is routed to AP rather than a geography/world knowledge track

## Recommended Next Steps

- Rebuild IMS Tutorials from raw tutorial context or drop context-dependent prompts such as “What type of study is this?” when the source scenario is unavailable.
- Recheck OpenSAT geometry and graph/table questions against source assets; full-scan heuristics found prompts that refer to figures/graphs/tables without embedding the needed asset/context.
- Move OpenTrivia Geography out of the generic `AP` route or create a dedicated geography/world-knowledge route before wiring broadly.
- Replace generic generated distractor rationales with source-specific rationales where possible; they are not fatal but reduce teaching value across OpenSAT/OpenDSA/OpenTrivia imports.
