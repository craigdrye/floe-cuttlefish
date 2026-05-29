import requests
import os
import re
import random

# Config
OUTPUT_FILE = "/Users/Gideon/.openclaw/workspace/floe-rebuild8/data/quant_questions_wikibooks.txt"

def main():
    # Samples from Wikibooks exploration
    samples = [
        {
            "id": "WB_Math_Logic_1",
            "title": "Mathematics Extensions - Logic",
            "prompt": "Produce the truth table for the NAND operation: x NAND y = NOT (x AND y). Which of the following represents the outputs for (T,T), (T,F), (F,T), (F,F)?",
            "correct": "F, T, T, T",
            "wrong": [
                ["T, F, F, F", "That is the AND operation.", "NAND is NOT(AND)."],
                ["F, F, F, T", "That is the NOR operation.", "NAND and NOR are different."],
                ["T, T, T, F", "That is the OR operation.", "Check the truth table for NAND again."]
            ],
            "lesson": "NAND is a universal logic gate. It outputs false only if both inputs are true."
        },
        {
            "id": "WB_Math_Logic_2",
            "title": "Mathematics Extensions - Logic",
            "prompt": "In Boolean logic, what is x XOR y true if and ONLY if?",
            "correct": "One of x or y is true, but not both.",
            "wrong": [
                ["Both x and y are true.", "That is AND.", "XOR stands for Exclusive OR."],
                ["At least one of x or y is true.", "That is inclusive OR.", "XOR excludes the case where both are true."],
                ["Neither x nor y is true.", "That is NOR.", "XOR requires exactly one true input."]
            ],
            "lesson": "Exclusive OR (XOR) is true when inputs differ."
        },
        {
            "id": "WB_History_WWI_1",
            "title": "IB History - Causes of WWI",
            "prompt": "Which of the following was a primary characteristic of a 'Great Power' in 1900?",
            "correct": "Significant military alliances, large industrial capacity, and colonial possessions.",
            "wrong": [
                ["Total isolation from world trade.", "Great Powers were central to world trade.", "Think about global influence."],
                ["A focus solely on internal agriculture.", "Industrialization was key to being a Great Power.", "Military and industry went hand-in-hand."],
                ["Lack of any standing army.", "Militarism was a defining trait of the period.", "Alliances and armies were fundamental."]
            ],
            "lesson": "The 'Great Powers' (Britain, Germany, France, Russia, Austria-Hungary) were defined by their industrial and military might."
        }
    ]
    
    with open(OUTPUT_FILE, "w") as f:
        for p in samples:
            f.write(f"ID: {p['id']} | {p['title']}\n")
            f.write(f"Q: {p['prompt']}\n\n")
            f.write(f"CORRECT: {p['correct']}\n")
            for w in p['wrong']:
                f.write(f"WRONG:   {w[0]}\n")
                f.write(f"           Flaw: {w[1]}\n")
                f.write(f"           Reframe: {w[2]}\n\n")
            f.write(f"LESSON:\n{p['lesson']}\n\n")
            f.write("-" * 70 + "\n\n")
            
    print(f"Successfully ingested {len(samples)} Wikibooks samples.")

if __name__ == "__main__":
    main()
