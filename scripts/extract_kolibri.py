import sqlite3
import os
import json
import zipfile
import requests
import io

# Config
KOLIBRI_DB_DIR = "/Users/Gideon/.openclaw/workspace/floe-rebuild8/data/kolibri_databases"
OUTPUT_FILE = "/Users/Gideon/.openclaw/workspace/floe-rebuild8/data/quant_questions_kolibri.txt"
SCRATCH_DIR = "/Users/Gideon/.openclaw/workspace/floe-rebuild8/scratch/perseus_files"

DATABASES = {
    "Khan Academy": "c9d7f950ab6b5a1199e3d6c10d7f0103.sqlite3",
    "CK-12": "1d8f6d84618153c18c695d85074952a7.sqlite3"
}

def download_file(checksum, extension):
    h = checksum
    url = f"https://studio.learningequality.org/content/storage/{h[0]}/{h[1]}/{h}.{extension}"
    response = requests.get(url)
    if response.status_code == 200:
        return response.content
    return None

def parse_perseus(content):
    try:
        with zipfile.ZipFile(io.BytesIO(content)) as z:
            # Find all JSON files that are not exercise.json
            json_files = [f for f in z.namelist() if f.endswith('.json') and f != 'exercise.json']
            questions = []
            for jf in json_files:
                data = json.loads(z.read(jf).decode('utf-8'))
                questions.append(data)
            return questions
    except Exception as e:
        print(f"Error parsing zip: {e}")
        return []

def convert_to_floe(source, node_id, node_title, perseus_data):
    if not perseus_data:
        return ""
    
    output = ""
    for idx, item in enumerate(perseus_data):
        q_text = item.get("question", {}).get("content", "").replace("[[☃ radio 1]]", "").strip()
        hints = [h.get("content", "") for h in item.get("hints", [])]
        
        # Extract choices
        widgets = item.get("question", {}).get("widgets", {})
        choices = []
        for w_name, w_data in widgets.items():
            if w_data.get("type") == "radio":
                choices = w_data.get("options", {}).get("choices", [])
                break
        
        if not q_text or not choices:
            continue
            
        output += f"ID: {source}_{node_id}_{idx} | {node_title}\n"
        output += f"Q: {q_text}\n\n"
        
        correct_found = False
        for choice in choices:
            content = choice.get("content", "").strip()
            if choice.get("correct"):
                output += f"  CORRECT: {content}\n"
                correct_found = True
            else:
                output += f"  WRONG:   {content}\n"
                output += f"           Flaw: Incorrect choice from source.\n"
                output += f"           Reframe: Consider the problem constraints.\n"
        
        if not correct_found:
            continue # Skip if no correct answer identified

        output += "\nLESSON:\n"
        if hints:
            output += "\n".join(hints)
        else:
            output += "Practice problem from " + source + ". Analyze the steps required to solve " + node_title + "."
        
        output += "\n\n"
        output += "-" * 70 + "\n\n"
        
    return output

def main():
    if not os.path.exists(SCRATCH_DIR):
        os.makedirs(SCRATCH_DIR)
        
    with open(OUTPUT_FILE, "w") as f_out:
        for source, db_name in DATABASES.items():
            print(f"Processing {source}...")
            db_path = os.path.join(KOLIBRI_DB_DIR, db_name)
            conn = sqlite3.connect(db_path)
            cursor = conn.cursor()
            
            # Get 2000 sample exercises
            cursor.execute("""
                SELECT n.id, n.title, f.checksum, f.extension 
                FROM content_contentnode n
                JOIN content_file f ON n.id = f.contentnode_id
                WHERE n.kind='exercise' AND f.supplementary=0 AND f.extension='perseus'
                LIMIT 2000;
            """)
            
            rows = cursor.fetchall()
            for node_id, title, checksum, ext in rows:
                print(f"  Extracting: {title}")
                content = download_file(checksum, ext)
                if content:
                    perseus_data = parse_perseus(content)
                    floe_text = convert_to_floe(source.replace(" ", ""), node_id, title, perseus_data)
                    f_out.write(floe_text)
            
            conn.close()

if __name__ == "__main__":
    main()
