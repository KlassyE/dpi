# DPI Schools Website

Professional React/Vite website for DPI Schools, using the content pack in [WEBSITE Info](WEBSITE%20Info).

## Structure

- [src/App.jsx](src/App.jsx) defines the routed multi-page React application.
- [src/pages](src/pages) contains the Home, About, Schools, Academics, Admissions, Life at DPI, Documents, and Contact pages.
- [src/components](src/components) contains shared layout and section components.
- [src/data/siteContent.js](src/data/siteContent.js) keeps reusable school content, contacts, downloads, and page data.
- [src/styles.css](src/styles.css) contains the responsive visual system.
- [scripts/prepare-assets.mjs](scripts/prepare-assets.mjs) converts original raster assets to WebP and copies public-facing documents.
- `public/assets` contains generated WebP images used by the site.
- `public/documents` contains renamed PDFs/PPTX files available from the site.

## Commands

```bash
npm install
npm run assets:prepare
npm run dev
npm run build
```