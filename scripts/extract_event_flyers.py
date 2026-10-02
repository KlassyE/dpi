import os
import sys
from pathlib import Path

try:
    import fitz
except ImportError as exc:
    raise SystemExit(f"PyMuPDF is required. Install it with: py -m pip install pymupdf\n{exc}")

pdf_path = Path(r"c:\Users\admin\Desktop\dpi\public\documents\Third Term News and Updates.pdf")
out_dir = Path(r"c:\Users\admin\Desktop\dpi\public\site-assets\event-flyers")
out_dir.mkdir(parents=True, exist_ok=True)

if not pdf_path.exists():
    raise SystemExit(f"PDF not found: {pdf_path}")

doc = fitz.open(pdf_path)
count = 0
for page_index in range(len(doc)):
    page = doc[page_index]
    images = page.get_images(full=True)
    for img in images:
        xref = img[0]
        pix = fitz.Pixmap(doc, xref)
        if pix.n in (1, 4):
            pix = fitz.Pixmap(fitz.csRGB, pix)
        target = out_dir / f"event_{count + 1}.png"
        pix.save(target)
        count += 1
        print(f"Saved {target}")

print(f"Total extracted: {count}")
doc.close()
