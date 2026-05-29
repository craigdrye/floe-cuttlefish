import requests
import os
import re
import json
import time

# Config
REPO = "freeCodeCamp/freeCodeCamp"
BLOCKS = ["basic-javascript", "basic-html-and-html5"]
BASE_PATH = "curriculum/challenges/english/blocks"
OUTPUT_FILE = "/Users/Gideon/.openclaw/workspace/floe-rebuild8/data/quant_questions_fcc.txt"

def fetch_fcc_challenges(block):
    url = f"https://api.github.com/repos/{REPO}/contents/{BASE_PATH}/{block}"
    print(f"Fetching file list for {block}...")
    response = requests.get(url)
    if response.status_code != 200:
        print(f"Failed to fetch file list for {block}")
        return []
    
    files = response.json()
    challenges = []
    
    for file in files:
        if file['name'].endswith('.md'):
            raw_url = file['download_url']
            print(f"  Fetching {file['name']}...")
            res = requests.get(raw_url)
            if res.status_code == 200:
                challenges.append(res.text)
            time.sleep(0.1) # Be nice
            
    return challenges

def parse_fcc_md(md_content, block_name):
    # Extract frontmatter
    frontmatter_match = re.search(r"---(.*?)---", md_content, re.DOTALL)
    if not frontmatter_match:
        return None
    
    # Simple frontmatter parser
    frontmatter = {}
    for line in frontmatter_match.group(1).strip().split('\n'):
        if ':' in line:
            key, val = line.split(':', 1)
            frontmatter[key.strip()] = val.strip()
    
    # Extract sections
    def get_section(name):
        match = re.search(f"# --{name}--(.*?)(?=# --|$)", md_content, re.DOTALL)
        return match.group(1).strip() if match else ""
    
    description = get_section("description")
    instructions = get_section("instructions")
    hints = get_section("hints")
    solution = get_section("solutions")
    
    # We'll use the title and instructions as the prompt
    title = frontmatter.get("title", "Untitled Challenge")
    prompt = f"{description}\n\n{instructions}".strip()
    
    # For now, we'll treat the solution as the CORRECT answer
    # If the solution is code, we'll wrap it in markdown
    clean_solution = solution.strip()
    if "```" in clean_solution:
        # Extract first code block
        code_match = re.search(r"```[a-z]*\n(.*?)```", clean_solution, re.DOTALL)
        if code_match:
            clean_solution = code_match.group(1).strip()
            
    return {
        "id": frontmatter.get("id", "unknown"),
        "title": title,
        "block": block_name,
        "prompt": prompt,
        "correct": clean_solution,
        "lesson": description
    }

def main():
    if not os.path.exists(os.path.dirname(OUTPUT_FILE)):
        os.makedirs(os.path.dirname(OUTPUT_FILE))
        
    all_parsed = []
    for block in BLOCKS:
        md_files = fetch_fcc_challenges(block)
        for md in md_files:
            parsed = parse_fcc_md(md, block)
            if parsed:
                all_parsed.append(parsed)
    
    with open(OUTPUT_FILE, "w") as f:
        for p in all_parsed:
            f.write(f"ID: FCC_{p['id']} | {p['block']} - {p['title']}\n")
            f.write(f"Q: {p['prompt']}\n\n")
            f.write(f"CORRECT: {p['correct']}\n")
            f.write(f"WRONG:   Incorrect syntax or logic.\n")
            f.write(f"           Flaw: Syntactic error.\n")
            f.write(f"           Reframe: Check the variable scoping.\n\n")
            f.write(f"WRONG:   Infinite loop or runtime error.\n")
            f.write(f"           Flaw: Termination condition not met.\n")
            f.write(f"           Reframe: Re-check the for loop boundaries.\n\n")
            f.write(f"WRONG:   Logic mismatch.\n")
            f.write(f"           Flaw: Result does not match requirements.\n")
            f.write(f"           Reframe: Re-read the instructions carefully.\n\n")
            f.write(f"LESSON:\n{p['lesson']}\n\n")
            f.write("-" * 70 + "\n\n")
            
    print(f"Successfully ingested {len(all_parsed)} FreeCodeCamp challenges.")

if __name__ == "__main__":
    main()
