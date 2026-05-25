import { copyFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const rootDirectory = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceDirectory = path.join(rootDirectory, 'WEBSITE Info');
const assetsDirectory = path.join(rootDirectory, 'public', 'assets');
const documentsDirectory = path.join(rootDirectory, 'public', 'documents');

const imageJobs = [
  {
    source: 'DPI Logo.png',
    output: 'dpi-schools-logo.webp',
    width: 1600,
    quality: 92,
  },
  {
    source: 'WhatsApp Image 2026-05-20 at 11.26.22.jpeg',
    output: 'divine-kids-registration-brochure.webp',
    width: 1400,
    quality: 86,
  },
  {
    source: 'WhatsApp Image 2026-05-20 at 11.26.23.jpeg',
    output: 'divine-schools-objectives.webp',
    width: 1400,
    quality: 86,
  },
  {
    source: 'WhatsApp Image 2026-05-20 at 11.26.24.jpeg',
    output: 'shekinah-admissions-overview.webp',
    width: 1400,
    quality: 86,
  },
  {
    source: 'WhatsApp Image 2026-05-20 at 11.26.25.jpeg',
    output: 'shekinah-foundation-activities.webp',
    width: 1400,
    quality: 86,
  },
  {
    source: 'WhatsApp Image 2026-05-20 at 11.26.26.jpeg',
    output: 'divine-schools-2025-registration.webp',
    width: 1400,
    quality: 86,
  },
  {
    source: 'WhatsApp Image 2026-05-20 at 11.26.27.jpeg',
    output: 'divine-schools-admissions-2026.webp',
    width: 1400,
    quality: 86,
  },
];

const documentJobs = [
  {
    source: 'DPI Schools Overview.pptx',
    output: 'dpi-schools-overview.pptx',
  },
  {
    source: 'Blue and Orange Playful School Admission A4 Document_20260106_184909_0000.pdf',
    output: 'divine-schools-admission-2026.pdf',
  },
  {
    source: 'Colorful Kindergarten Trifold Brochure_20260106_184231_0000.pdf',
    output: 'divine-kids-nursery-trifold.pdf',
  },
  {
    source: 'Shekinah volume 1, issue 1 2026 (1).pdf',
    output: 'shekinah-newsletter-2026.pdf',
  },
];

await mkdir(assetsDirectory, { recursive: true });
await mkdir(documentsDirectory, { recursive: true });

for (const imageJob of imageJobs) {
  const sourcePath = path.join(sourceDirectory, imageJob.source);
  const outputPath = path.join(assetsDirectory, imageJob.output);

  await sharp(sourcePath)
    .rotate()
    .resize({ width: imageJob.width, withoutEnlargement: true })
    .webp({ quality: imageJob.quality })
    .toFile(outputPath);

  console.log(`Created ${path.relative(rootDirectory, outputPath)}`);
}

for (const documentJob of documentJobs) {
  const sourcePath = path.join(sourceDirectory, documentJob.source);
  const outputPath = path.join(documentsDirectory, documentJob.output);

  await copyFile(sourcePath, outputPath);
  console.log(`Copied ${path.relative(rootDirectory, outputPath)}`);
}