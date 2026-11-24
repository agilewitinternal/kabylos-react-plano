# Kabylo’s Pizza Plano — React + Vite

## Local development
Install Node.js 22 or a supported newer version. Run:

```sh
npm install
npm run dev
```
Open the local URL printed by Vite, with `/plano/` appended if needed.

## Production build

```sh
npm run build
npm run preview
```
The build runs a React server-rendering step to include menu and restaurant text in the initial HTML. React hydrates it in the browser. Dependencies could not be installed in the creation environment, so the build has not been executed there.

## Hostinger
Back up the existing site. Upload the CONTENTS of `dist/` to `public_html/plano/` (or the actual domain document root). Do not upload the source project or node_modules to the public directory. Confirm that the domain is served by Hostinger and that existing rewrite rules allow the /plano path. Test /plano and /plano/; configure a consistent canonical redirect if necessary. Merge the root robots.txt and sitemap.xml with existing domain files, preserving other locations. Submit the sitemap in Google Search Console and update the Google Business Profile website link.

## Editing
- `src/App.jsx`: page components, business information, order URL.
- `src/menu.json`: featured menu cards and categories.
- `src/style.css`: colors and responsive styling.
- `index.html`: SEO metadata and restaurant schema; update alongside visible business information.
- `public/logo.webp`: supplied original logo.

The hero uses a remote illustrative Unsplash image carried over from the prior website; verify availability and license before launch. Menu photos are not bundled. Toast remains the source for current prices and availability. No Indian fusion items are advertised. Test the Toast link before publishing.

Navigation anchors: #menu, #about, #catering, #location. Catering is an inquiry only; confirm actual service before advertising packages.
