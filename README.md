# Logo Palette Board

A single-page tool for comparing logos with per-tile background + logo colors and a
shared wordmark. It displays **whatever logo files live in the `logos/` folder** —
no upload UI, no server. Viewers recolor tiles/logos and edit the wordmark to explore;
their changes persist in their browser session.

## Add or change logos
1. Drop image files into `logos/` — `.svg`, `.png`, `.jpg`, `.jpeg`, `.webp`, `.gif`.
   - **SVG is best**: each color inside the mark gets its own picker.
2. Redeploy. On Vercel the manifest regenerates automatically (`node build.js`).
   - Running locally without the build step? Regenerate manually: `node build.js`.

## Deploy to Vercel

### Dashboard
1. vercel.com → Add New → Project → import this folder (or drag the zip).
2. Framework preset: **Other**.
   - Build Command: `node build.js`  (already set in `vercel.json`)
   - Output Directory: `.`
3. Deploy → live at `https://<project>.vercel.app`.

### CLI
```bash
npm i -g vercel
vercel --prod
```

## Files
- `index.html` — the board UI (reads `logos/manifest.json`, then loads each logo).
- `logos/` — your logo files + auto-generated `manifest.json`.
- `build.js` — scans `logos/` and writes the manifest.
- `vercel.json` / `package.json` — hosting + build config.

## Notes
- Session persistence uses `sessionStorage`; it works on the deployed URL.
- The `logos/manifest.json` is generated for you; you don't need to edit it by hand
  when the build step runs, but you can if you prefer manual control.
