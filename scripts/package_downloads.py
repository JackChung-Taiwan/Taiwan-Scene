#!/usr/bin/env python3
"""Generate downloadable teaching ZIP files from content already committed to GitHub."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED, ZIP_STORED

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'downloads'
OUT.mkdir(exist_ok=True)
images=sorted((ROOT/'images').glob('*.jpg'))
if len(images)!=100:
    raise SystemExit(f'Expected 100 JPG images, got {len(images)}')
for x in images:
    if not (100*1024 <= x.stat().st_size <= 200*1024):
        raise SystemExit(f'Invalid image size: {x} = {x.stat().st_size} bytes')
zip_photos=OUT/'Taiwan_Scenic_100_Images.zip'
with ZipFile(zip_photos,'w') as z:
    for f in images:
        z.write(f, f.relative_to(ROOT), compress_type=ZIP_STORED)
    for name in ('attractions.csv','README_images.md'):
        z.write(ROOT/name, name, compress_type=ZIP_DEFLATED)
zip_site=OUT/'Taiwan_Scenic_100_GitHub_Project.zip'
with ZipFile(zip_site,'w') as z:
    for name in ('index.html','style.css','app.js','data.js','attractions.csv','README.md','.nojekyll'):
        z.write(ROOT/name, name, compress_type=ZIP_DEFLATED)
    for f in images:
        z.write(f, f.relative_to(ROOT), compress_type=ZIP_STORED)
print('Generated downloads:',*(f'{p.name} {p.stat().st_size:,} bytes' for p in [zip_photos,zip_site]))
