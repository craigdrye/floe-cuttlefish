import sys
from PIL import Image
import os

img_path = sys.argv[1]
out_dir = sys.argv[2]

os.makedirs(out_dir, exist_ok=True)

img = Image.open(img_path)
width, height = img.size

# Quadrant boundaries
mid_x = width // 2
mid_y = height // 2

# Crop regions: (left, upper, right, lower)
quadrants = {
    'gila-monster.png': (0, 0, mid_x, mid_y),
    'desert-bighorn-sheep.png': (mid_x, 0, width, mid_y),
    'beaver.png': (0, mid_y, mid_x, height)
    # the 4th quadrant is ignored
}

for name, box in quadrants.items():
    cropped = img.crop(box)
    cropped.save(os.path.join(out_dir, name))
    print(f"Saved {name}")
