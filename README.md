# Ali Raza Portfolio Website

A dependency-free static portfolio website for manual hosting.

## Files

- `index.html` — Personal Branding Specialist page
- `performance.html` — Performance Marketing page
- `styles.css` — Shared cobalt/navy responsive design system
- `script.js` — Mobile navigation, reveal animations, FAQ behavior, and dashboard lightbox

## Run locally

Open `index.html` directly in a browser, or run a simple local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish manually

Upload all files to the root of any static host such as GitHub Pages, Netlify, Cloudflare Pages, or your hosting control panel. No build step is required.

## Replace placeholders

1. Replace the portrait block in `index.html` with an actual `<img>` element and descriptive `alt` text.
2. Replace the proof-of-work placeholders with Ali Raza's supplied videos and images.
3. Replace the LinkedIn placeholder URL with the exact profile URL.
4. Replace the six illustrative dashboard cards only when real anonymized reporting screenshots are available.
5. Keep `ILLUSTRATIVE DATA — DEMONSTRATION ONLY` visible for all sample metrics.
6. Update the year in the footer if needed.

The site uses Google Fonts through a CDN. To make it fully offline, download Manrope and DM Mono and update the `@font-face` declarations.
