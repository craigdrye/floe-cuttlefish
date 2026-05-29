import requests
from bs4 import BeautifulSoup
import time
import os
import json

# Config
BASE_URL = "https://openstax.org"
BOOKS = {
    "Biology 2e": [
        "/books/biology-2e/pages/1-review-questions",
        "/books/biology-2e/pages/2-review-questions",
        "/books/biology-2e/pages/3-review-questions"
    ],
    "Psychology 2e": [
        "/books/psychology-2e/pages/1-review-questions",
        "/books/psychology-2e/pages/2-review-questions",
        "/books/psychology-2e/pages/3-review-questions"
    ],
    "U.S. History": [
        "/books/us-history/pages/1-review-questions",
        "/books/us-history/pages/2-review-questions",
        "/books/us-history/pages/3-review-questions"
    ],
    "Chemistry 2e": [
        "/books/chemistry-2e/pages/1-exercises",
        "/books/chemistry-2e/pages/2-exercises",
        "/books/chemistry-2e/pages/3-exercises"
    ],
    "Economics 3e": [
        "/books/principles-economics-3e/pages/1-review-questions",
        "/books/principles-economics-3e/pages/2-review-questions",
        "/books/principles-economics-3e/pages/3-review-questions"
    ]
}

OUTPUT_FILE = "/Users/Gideon/.openclaw/workspace/floe-rebuild8/data/quant_questions_openstax_v2.txt"

def scrape_openstax_page(book_title, rel_url):
    url = BASE_URL + rel_url
    print(f"Scraping {book_title}: {url}...")
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    try:
        response = requests.get(url, headers=headers)
        if response.status_code != 200:
            print(f"Failed to fetch {url} (Status: {response.status_code})")
            return []
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return []
    
    soup = BeautifulSoup(response.content, 'html.parser')
    questions = []
    
    # OpenStax assessment items are usually in 'exercise' divs
    exercise_containers = soup.find_all('div', {'data-type': 'exercise'})
    
    for container in exercise_containers:
        try:
            # Numbering
            num_span = container.find('span', class_='os-number')
            q_num = num_span.text.strip() if num_span else "0"
            
            # Question Body
            q_body = container.find('div', {'data-type': 'problem'})
            if not q_body:
                continue
            
            # Check for multiple choice options
            options = []
            ol_options = q_body.find('ol', class_='os-options')
            if ol_options:
                li_items = ol_options.find_all('li')
                for li in li_items:
                    options.append(li.get_text(separator=" ").strip())
                # Remove the options from the body text to avoid duplication
                ol_options.decompose()

            q_text = q_body.get_text(separator=" ").strip()
            
            # Check for solution (Correct Answer)
            sol_body = container.find('div', {'data-type': 'solution'})
            sol_text = sol_body.get_text(separator=" ").strip() if sol_body else "No solution provided."
            
            questions.append({
                "id": q_num,
                "text": q_text,
                "options": options,
                "solution": sol_text
            })
        except Exception as e:
            print(f"Error parsing container: {e}")
            continue
            
    return questions

def main():
    if not os.path.exists(os.path.dirname(OUTPUT_FILE)):
        os.makedirs(os.path.dirname(OUTPUT_FILE))
        
    count = 0
    with open(OUTPUT_FILE, "w") as f:
        for book_title, urls in BOOKS.items():
            for rel_url in urls:
                questions = scrape_openstax_page(book_title, rel_url)
                chapter_label = rel_url.split('/')[-1].replace('-', ' ').title()
                
                for q in questions:
                    f.write(f"ID: OS_{book_title.replace(' ', '_')}_{q['id']} | {book_title} - {chapter_label}\n")
                    f.write(f"Q: {q['text']}\n")
                    
                    if q['options']:
                        f.write(f"OPTIONS: {json.dumps(q['options'])}\n")
                    
                    # If multiple choice, the solution often contains just 'a', 'b', 'c', or 'd'
                    # We will handle this in the converter script.
                    f.write(f"CORRECT: {q['solution']}\n")
                    f.write(f"WRONG:   N/A (Derived from options or generic)\n")
                    f.write(f"LESSON: {q['solution']}\n")
                    f.write("-" * 70 + "\n\n")
                    count += 1
                
                time.sleep(1) # Be nice
    
    print(f"Successfully scraped {count} questions across {len(BOOKS)} books.")

if __name__ == "__main__":
    main()
