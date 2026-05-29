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
    'polar-bear.png': (0, 0, mid_x, mid_y),
    'emperor-penguin.png': (mid_x, 0, width, mid_y),
    'arctic-fox.png': (0, mid_y, mid_x, height),
    'walrus.png': (mid_x, mid_y, width, height)
}

for name, box in quadrants.items():
    cropped = img.crop(box)
    cropped.save(os.path.join(out_dir, name))
    print(f"Saved {name}")
