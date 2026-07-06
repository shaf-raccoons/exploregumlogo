// Regenerates logos/manifest.json from whatever image files are in logos/.
// Runs automatically on every Vercel deploy (see vercel.json buildCommand).
const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'logos');
const exts = ['.svg', '.png', '.jpg', '.jpeg', '.webp', '.gif'];
let files = [];
try {
  files = fs.readdirSync(dir)
    .filter(f => exts.includes(path.extname(f).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
} catch (e) {
  console.warn('No logos/ folder found:', e.message);
}
fs.writeFileSync(path.join(dir, 'manifest.json'), JSON.stringify(files, null, 2) + '\n');
console.log('Wrote logos/manifest.json with', files.length, 'file(s):', files.join(', ') || '(none)');
