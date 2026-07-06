# Logo Palette Board

A self-contained, single-file tool for comparing logo options with per-tile
background + logo colors and a shared wordmark. Runs entirely in the browser —
no server, no build step, no dependencies to install.

## Files
- `index.html` — the app (edit mode). Upload logos, set colors, then **Publish page**.
- `vercel.json` — static hosting config (clean URLs, sensible caching headers).

## Deploy to Vercel

### Option A — Dashboard (no CLI)
1. Go to vercel.com → **Add New… → Project**.
2. Drag this whole folder (or the zip) into the deploy area, or connect a Git repo
   containing these files.
3. Framework preset: **Other** (it's a static site — no build command needed).
   - Build Command: *(leave empty)*
   - Output Directory: `.` (the root)
4. Deploy. Your board is live at `https://<project>.vercel.app`.

### Option B — Vercel CLI
```bash
npm i -g vercel        # once
cd vercel-build
vercel                 # preview deploy
vercel --prod          # production deploy
```

## How to use it for a discussion
1. Open the deployed URL yourself — it loads in **edit mode**.
2. Upload your logos, tune each tile's background + logo colors, set the wordmark.
3. Click **Publish page** → downloads `your-board-shared.html` with everything baked in and locked.
4. Put that shared file live too:
   - Rename it (e.g. `gum-round-1.html`) and drop it in this folder, redeploy, and
     share `https://<project>.vercel.app/gum-round-1` (clean URLs are on), **or**
   - Deploy it as its own tiny Vercel project.
5. Viewers open the shared link → **view only**: they can recolor tiles/logos and
   edit the wordmark to explore, and their changes persist in their browser session.
   A **Reset my changes** button restores your published defaults.

## Notes
- Session persistence uses `sessionStorage` and works on the hosted URL.
- Prefer **SVG** logos (tiny + recolorable per color). Large PNGs get embedded as
  data and make the shared file heavier.
