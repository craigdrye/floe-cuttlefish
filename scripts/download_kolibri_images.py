import re
import os
import requests

KOLIBRI_TS = "/Users/Gideon/.openclaw/workspace/floe-rebuild8/src/data/questionCatalog/kolibri.ts"
IMAGE_DIR = "/Users/Gideon/.openclaw/workspace/floe-rebuild8/public/images"

def main():
    if not os.path.exists(IMAGE_DIR):
        os.makedirs(IMAGE_DIR)

    with open(KOLIBRI_TS, "r") as f:
        content = f.read()

    # Find all images like $\{☣ LOCALPATH}/images/checksum.png
    images = re.findall(r"\$\\\{☣ LOCALPATH\}/images/([a-f0-9]+)\.png", content)
    unique_images = list(set(images))
    print(f"Found {len(unique_images)} unique images to download.")

    for i, checksum in enumerate(unique_images):
        dest_path = os.path.join(IMAGE_DIR, f"{checksum}.png")
        if os.path.exists(dest_path):
            continue

        h = checksum
        url = f"https://studio.learningequality.org/content/storage/{h[0]}/{h[1]}/{h}.png"
        
        print(f"[{i+1}/{len(unique_images)}] Downloading {checksum}...")
        try:
            response = requests.get(url, timeout=10)
            if response.status_code == 200:
                with open(dest_path, "wb") as f_img:
                    f_img.write(response.content)
            else:
                # Try .jpg if .png fails? Or just skip.
                # Usually they are .png or .jpg or .svg.
                # The TS file specifically says .png, but let's check .svg and .jpg as well if needed.
                for ext in ["jpg", "svg", "gif"]:
                    url_alt = f"https://studio.learningequality.org/content/storage/{h[0]}/{h[1]}/{h}.{ext}"
                    response = requests.get(url_alt, timeout=10)
                    if response.status_code == 200:
                        # Save it with the .png extension anyway to match the TS reference
                        # Or I should have kept the original extension.
                        # For now, save as is.
                        with open(dest_path, "wb") as f_img:
                            f_img.write(response.content)
                        break
                else:
                    print(f"  Failed to download {checksum}")
        except Exception as e:
            print(f"  Error: {e}")

if __name__ == "__main__":
    main()
