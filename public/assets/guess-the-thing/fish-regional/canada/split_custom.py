import sys
from PIL import Image
import os

img_path = sys.argv[1]
out_dir = sys.argv[2]

os.makedirs(out_dir, exist_ok=True)

img = Image.open(img_path)
width, height = img.size

# This image is a 4 rows x 2 columns grid
w2 = width // 2
h4 = height // 4

# Crop regions: (left, upper, right, lower)
# Row 1 Col 1: Burbot
# Row 1 Col 2: Lake sturgeon
# Row 2 Col 1: Rainbow trout
# Row 3 Col 2: Sockeye salmon (red)

quadrants = {
    'burbot.png': (0, 0, w2, h4),
    'lake-sturgeon.png': (w2, 0, width, h4),
    'rainbow-trout.png': (0, h4, w2, 2*h4),
    'sockeye-salmon.png': (w2, 2*h4, width, 3*h4)
}

for name, box in quadrants.items():
    cropped = img.crop(box)
    
    # Resize the cropped image to be square like the others (e.g., 627x627) if needed, 
    # but since height is H/4 (approx 313) and width is W/2 (approx 627), it's a 2:1 rectangle.
    # To make it a square, we can pad it with white space.
    
    # Create a new square white image
    size = max(cropped.size)
    new_img = Image.new('RGB', (size, size), (255, 255, 255))
    
    # Paste the cropped image into the center
    paste_x = (size - cropped.width) // 2
    paste_y = (size - cropped.height) // 2
    new_img.paste(cropped, (paste_x, paste_y))
    
    new_img.save(os.path.join(out_dir, name))
    print(f"Saved {name}")
