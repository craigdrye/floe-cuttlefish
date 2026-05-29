import os
import re
import random

def parse_txt_file(filepath, limit=20000):
    if not os.path.exists(filepath):
        return []
        
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Split by the separator line
    blocks = content.split("-" * 70)
    questions = []
    
    print(f"Found {len(blocks)} blocks in {filepath}")
    
    for block in blocks:
        block = block.strip()
        if not block:
            continue
            
        try:
            # Parse ID and Title
            header_match = re.search(r"ID: (.*?) \| (.*)", block)
            if not header_match:
                continue
            
            q_id = header_match.group(1)
            title = header_match.group(2)
            
            # Parse Question
            q_match = re.search(r"Q: (.*?)\n\n", block, re.DOTALL)
            if not q_match:
                # Try fallback for FCC style
                q_match = re.search(r"Q: (.*?)\nCORRECT:", block, re.DOTALL)
                if not q_match:
                    continue
            prompt = q_match.group(1).strip()
            
            # Parse Correct and Wrong answers
            correct_match = re.search(r"CORRECT: (.*)", block)
            correct = correct_match.group(1).strip() if correct_match else ""
            
            wrongs = []
            wrong_matches = re.finditer(r"WRONG:\s*(.*?)\n\s*Flaw:\s*(.*?)\n\s*Reframe:\s*(.*)", block)
            for wm in wrong_matches:
                wrongs.append([wm.group(1).strip(), wm.group(2).strip(), wm.group(3).strip()])
            
            # If no structured wrongs, check for generic ones
            if not wrongs:
                wrongs = [
                    ["Incorrect interpretation", "Flaw: Logical error.", "Reframe: Review the core concept."],
                    ["Incomplete answer", "Flaw: Missing key detail.", "Reframe: Look for the most complete option."],
                    ["Categorical error", "Flaw: Wrong domain.", "Reframe: Re-read the chapter definition."]
                ]
            
            # Parse Lesson
            lesson_match = re.search(r"LESSON:\s*(.*?)$", block, re.DOTALL)
            lesson = lesson_match.group(1).strip() if lesson_match else ""
            
            if not correct:
                continue

            questions.append({
                "id": q_id,
                "chapter": title,
                "title": title,
                "prompt": prompt,
                "correct": correct,
                "wrong": wrongs,
                "lesson": lesson
            })
        except Exception as e:
            continue
            
    print(f"Parsed {len(questions)} valid questions.")
    if len(questions) > limit:
        print(f"Limiting to {limit} random questions.")
        random.seed(42) # Deterministic shuffle
        random.shuffle(questions)
        questions = questions[:limit]
        
    return questions

def escape(s):
    if not s: return ""
    return s.replace("\\", "\\\\").replace("'", "\\'").replace("\n", "\\n").replace("${", "$\\{")

def generate_ts_file(questions, catalog_name, output_path):
    with open(output_path, 'w') as f:
        f.write("import type { Question } from './types'\n")
        f.write("import { makeQuestionBank } from './base'\n\n")
        f.write(f"export function build{catalog_name}QuestionCatalog(): Record<string, Question[]> {{\n")
        f.write("  return {\n")
        
        if catalog_name == "Kolibri":
            khan = [q for q in questions if q['id'].startswith('KhanAcademy')]
            ck12 = [q for q in questions if q['id'].startswith('CK-12')]
            
            for source_name, source_qs in [('khanacademy', khan), ('ck12', ck12)]:
                if not source_qs: continue
                f.write(f"    '{source_name}': makeQuestionBank('Primary', [\n")
                for q in source_qs:
                    wrongs_str = ", ".join([f"['{escape(w[0])}', '{escape(w[1])}', '{escape(w[2])}']" for w in q['wrong']])
                    clean_id = q['id'].replace("KhanAcademy", "100").replace("CK-12", "200")
                    numeric_id = re.sub(r'[^0-9]', '', clean_id)
                    source_val = "Khan Academy" if source_name == "khanacademy" else "CK-12"
                    f.write(f"      {{ id: {numeric_id}, chapter: '{escape(q['chapter'])}', source: '{source_val}', title: '{escape(q['title'])}', prompt: '{escape(q['prompt'])}', correct: '{escape(q['correct'])}', wrong: [{wrongs_str}], lesson: '{escape(q['lesson'])}' }},\n")
                f.write("    ]),\n")
        
        elif catalog_name == "OpenStax":
            subjects = {}
            for q in questions:
                subject = q['chapter'].split(' - ')[0].lower().replace(' ', '_').replace('.', '')
                if subject not in subjects:
                    subjects[subject] = []
                subjects[subject].append(q)
            
            for subject, sub_qs in subjects.items():
                f.write(f"    '{subject}': makeQuestionBank('AP', [\n")
                for q in sub_qs:
                    wrongs_str = ", ".join([f"['{escape(w[0])}', '{escape(w[1])}', '{escape(w[2])}']" for w in q['wrong']])
                    clean_id = q['id'].replace("OpenStax_", "400").replace("OS_", "400")
                    numeric_id = re.sub(r'[^0-9]', '', clean_id)
                    f.write(f"      {{ id: {numeric_id}, chapter: '{escape(q['chapter'])}', source: 'OpenStax', title: '{escape(q['title'])}', prompt: '{escape(q['prompt'])}', correct: '{escape(q['correct'])}', wrong: [{wrongs_str}], lesson: '{escape(q['lesson'])}' }},\n")
                f.write("    ]),\n")

        elif catalog_name == "FCC":
            blocks = {}
            for q in questions:
                block = q['chapter'].split(' - ')[0].lower().replace(' ', '_')
                if block not in blocks:
                    blocks[block] = []
                blocks[block].append(q)
            for block, b_qs in blocks.items():
                f.write(f"    '{block}': makeQuestionBank('Software', [\n")
                for q in b_qs:
                    wrongs_str = ", ".join([f"['{escape(w[0])}', '{escape(w[1])}', '{escape(w[2])}']" for w in q['wrong']])
                    numeric_id = str(abs(hash(q['id'])))[:10]
                    f.write(f"      {{ id: 500{numeric_id}, chapter: '{escape(q['chapter'])}', source: 'FreeCodeCamp', title: '{escape(q['title'])}', prompt: '{escape(q['prompt'])}', correct: '{escape(q['correct'])}', wrong: [{wrongs_str}], lesson: '{escape(q['lesson'])}' }},\n")
                f.write("    ]),\n")

        elif catalog_name == "Wikibooks":
            blocks = {}
            for q in questions:
                block = q['chapter'].split(' - ')[0].lower().replace(' ', '_')
                if block not in blocks:
                    blocks[block] = []
                blocks[block].append(q)
            for block, b_qs in blocks.items():
                f.write(f"    '{block}': makeQuestionBank('Extension', [\n")
                for q in b_qs:
                    wrongs_str = ", ".join([f"['{escape(w[0])}', '{escape(w[1])}', '{escape(w[2])}']" for w in q['wrong']])
                    numeric_id = re.sub(r'[^0-9]', '', q['id']) if re.search(r'\d', q['id']) else str(random.randint(6000000, 6999999))
                    f.write(f"      {{ id: 600{numeric_id}, chapter: '{escape(q['chapter'])}', source: 'Wikibooks', title: '{escape(q['title'])}', prompt: '{escape(q['prompt'])}', correct: '{escape(q['correct'])}', wrong: [{wrongs_str}], lesson: '{escape(q['lesson'])}' }},\n")
                f.write("    ]),\n")
            
        f.write("  }\n")
        f.write("}\n")

def main():
    kolibri_txt = "/Users/Gideon/.openclaw/workspace/floe-rebuild8/data/quant_questions_kolibri.txt"
    openstax_v1 = "/Users/Gideon/.openclaw/workspace/floe-rebuild8/data/quant_questions_openstax.txt"
    openstax_v2 = "/Users/Gideon/.openclaw/workspace/floe-rebuild8/data/quant_questions_openstax_v2.txt"
    fcc_txt = "/Users/Gideon/.openclaw/workspace/floe-rebuild8/data/quant_questions_fcc.txt"
    wikibooks_txt = "/Users/Gideon/.openclaw/workspace/floe-rebuild8/data/quant_questions_wikibooks.txt"
    
    if os.path.exists(kolibri_txt):
        print("Converting Kolibri...")
        qs = parse_txt_file(kolibri_txt)
        generate_ts_file(qs, "Kolibri", "/Users/Gideon/.openclaw/workspace/floe-rebuild8/src/data/questionCatalog/kolibri.ts")
        
    combined_os_qs = []
    if os.path.exists(openstax_v1):
        combined_os_qs.extend(parse_txt_file(openstax_v1))
    if os.path.exists(openstax_v2):
        combined_os_qs.extend(parse_txt_file(openstax_v2))
    if combined_os_qs:
        print(f"Converting {len(combined_os_qs)} OpenStax questions...")
        generate_ts_file(combined_os_qs, "OpenStax", "/Users/Gideon/.openclaw/workspace/floe-rebuild8/src/data/questionCatalog/openstax.ts")

    if os.path.exists(fcc_txt):
        print("Converting FreeCodeCamp...")
        qs = parse_txt_file(fcc_txt)
        generate_ts_file(qs, "FCC", "/Users/Gideon/.openclaw/workspace/floe-rebuild8/src/data/questionCatalog/fcc.ts")

    if os.path.exists(wikibooks_txt):
        print("Converting Wikibooks...")
        qs = parse_txt_file(wikibooks_txt)
        generate_ts_file(qs, "Wikibooks", "/Users/Gideon/.openclaw/workspace/floe-rebuild8/src/data/questionCatalog/wikibooks.ts")

if __name__ == "__main__":
    main()
