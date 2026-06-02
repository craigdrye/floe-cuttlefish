import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const aigpS0G23: Question[] = [
  makeSimpleQuestion(
    8960000,
    'Career Skills',
    'Generative AI Evaluation and Security',
    "RAG grounding does not eliminate confabulation",
    'A product team is launching a customer-facing assistant that answers questions only from a curated, retrieval-augmented knowledge base. They argue that because every answer is "grounded in retrieved documents," hallucination is no longer a release-relevant risk, so the evaluation plan can drop hallucination testing and focus on prompt injection. As the governance lead reviewing the evaluation plan, what is the most defensible position?',
    'Retrieval reduces but does not eliminate hallucination, so the plan must still measure faithfulness or groundedness, the rate at which the answer makes claims not supported by the retrieved context, with a release-relevant threshold',
    [
      ["Accept their reasoning, because once outputs are grounded in retrieved documents the model can no longer fabricate, making hallucination testing redundant", "Grounding constrains the model but does not bind it: a retrieval-augmented model can still contradict the retrieved passages, add unsupported details, or extrapolate beyond the evidence (a faithfulness failure). Treating retrieval as a complete fix removes the very measurement that would catch confidently wrong answers.", "Keep a faithfulness or groundedness metric in the plan and tie it to a threshold, because RAG lowers but does not zero out confabulation."],
      ["Replace hallucination testing with a retrieval-quality metric alone (recall and precision of retrieved chunks), since if retrieval is good the answers must be faithful", "Retrieval quality and answer faithfulness are different layers: the system can retrieve the right passage and still generate a claim the passage does not support. Measuring only whether the right documents were fetched skips the generation-stage failure mode where the model misrepresents or overreaches beyond what it retrieved.", "Measure both retrieval quality and answer faithfulness, because a correct retrieval does not guarantee a grounded generation."],
      ["Agree that the real risk is prompt injection, and reclassify any wrong-but-confident answer as an injection finding to keep one test stream", "Confabulation and prompt injection are distinct failure modes: confabulation is the model producing confidently false content with no adversary, while prompt injection is untrusted input steering the model's behavior. Folding hallucination into the injection bucket means a benign-but-fabricated answer in a consequential reply goes unmeasured and unowned.", "Test confabulation and prompt-injection resilience as separate categories with their own thresholds, because their causes and controls differ."],
    ],
    'NIST AI 600-1 (the Generative AI Profile, July 2024) names "confabulation" as the production of confidently stated but erroneous content, colloquially called hallucination. Retrieval-augmented generation grounds answers in fetched sources and lowers this risk, but it does not eliminate it: the generator can still contradict, extend, or misrepresent the retrieved context, a faithfulness or groundedness failure. A credible generative-AI evaluation plan therefore measures faithfulness (do the answer\'s claims trace to the retrieved context?) as a distinct, release-relevant signal, separate from both retrieval quality and prompt-injection resilience.',
    'Floe generated',
    true,
    'Ask whether grounding a model in documents forces it to stay faithful to them, and whether fetching the right passage is the same thing as generating a supported answer.',
    { challengeRating: 7 },
  ),
]
