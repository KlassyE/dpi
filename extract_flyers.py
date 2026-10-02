from pathlib import Path
import fitz

pdf_path = Path('c:/Users/admin/Desktop/dpi/public/documents/Third Term News and Updates.pdf')
out_dir = Path('c:/Users/admin/Desktop/dpi/public/assets/third-term-flyers')
out_dir.mkdir(parents=True, exist_ok=True)

doc = fitz.open(str(pdf_path))
for index, page in enumerate(doc, start=1):
    pix = page.get_pixmap(matrix=fitz.Matrix(2, 2), colorspace=fitz.csRGB)
    filename = out_dir / f'third-term-flyer-{index}.png'
    pix.save(str(filename))
    print(filename)
