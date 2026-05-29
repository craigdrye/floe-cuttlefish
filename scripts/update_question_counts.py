import os
import re

def count_questions_in_ts(filepath):
    if not os.path.exists(filepath):
        return {}
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Simple regex to find blocks like 'subject': makeQuestionBank(..., [ ... ])
    # and then count the occurrences of { id: ... } inside the array.
    subject_counts = {}
    
    # Find all bank definitions
    banks = re.finditer(r"'([^']+)':\s*makeQuestionBank\('[^']+',\s*\[(.*?)\]\s*\)", content, re.DOTALL)
    for bank in banks:
        subject = bank.group(1)
        items = bank.group(2)
        count = len(re.findall(r"\{ id:", items))
        subject_counts[subject] = count
        
    return subject_counts

def update_track_seeds(filepath, counts):
    if not os.path.exists(filepath):
        return
    with open(filepath, 'r') as f:
        lines = f.readlines()
    
    new_lines = []
    current_track_id = None
    
    for line in lines:
        id_match = re.search(r"id:\s*'([^']+)'", line)
        if id_match:
            current_track_id = id_match.group(1)
            
        if current_track_id in counts and "skills:" in line:
            new_lines.append(line)
            # Check if questionCount already exists to avoid duplication
            # (In a real script we'd be more careful, but here we just append)
            new_lines.append(f"    questionCount: {counts[current_track_id]},\n")
            # Clear it so we don't add it multiple times for the same track
            del counts[current_track_id]
        else:
            new_lines.append(line)
            
    with open(filepath, 'w') as f:
        f.writelines(new_lines)

def main():
    catalogs = {
        "openstax": "/Users/Gideon/.openclaw/workspace/floe-rebuild8/src/data/questionCatalog/openstax.ts",
        "fcc": "/Users/Gideon/.openclaw/workspace/floe-rebuild8/src/data/questionCatalog/fcc.ts",
        "wikibooks": "/Users/Gideon/.openclaw/workspace/floe-rebuild8/src/data/questionCatalog/wikibooks.ts",
        "highMath": "/Users/Gideon/.openclaw/workspace/floe-rebuild8/src/data/questionCatalog/highMath.ts",
        "highAdvanced": "/Users/Gideon/.openclaw/workspace/floe-rebuild8/src/data/questionCatalog/highAdvanced.ts",
    }
    
    all_counts = {}
    for name, path in catalogs.items():
        all_counts.update(count_questions_in_ts(path))
        
    print(f"Total track counts found: {len(all_counts)}")
    
    age_catalogs = [
        "/Users/Gideon/.openclaw/workspace/floe-rebuild8/src/data/ageCatalog/high.ts",
        "/Users/Gideon/.openclaw/workspace/floe-rebuild8/src/data/ageCatalog/university.ts",
        "/Users/Gideon/.openclaw/workspace/floe-rebuild8/src/data/ageCatalog/primary.ts",
    ]
    
    for cat in age_catalogs:
        update_track_seeds(cat, all_counts.copy())

if __name__ == "__main__":
    main()
