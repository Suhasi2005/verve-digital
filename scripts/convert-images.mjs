// Converts all .png/.jpg images in public/images to optimized .webp
// (resized to max 1600px, quality 80), then deletes the originals.
// Run with: node scripts/convert-images.mjs
import { readdir, stat, unlink } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const dir = "public/images";
const files = await readdir(dir);
let savedBefore = 0;
let savedAfter = 0;

for (const f of files) {
  if (!/\.(png|jpe?g)$/i.test(f)) continue;
  const input = path.join(dir, f);
  const output = path.join(dir, f.replace(/\.(png|jpe?g)$/i, ".webp"));
  const before = (await stat(input)).size;
  await sharp(input)
    .resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(output);
  const after = (await stat(output)).size;
  savedBefore += before;
  savedAfter += after;
  console.log(
    `${f}  ${(before / 1e6).toFixed(2)}MB -> ${(after / 1e6).toFixed(2)}MB`
  );
  await unlink(input);
}

console.log(
  `\nTotal: ${(savedBefore / 1e6).toFixed(1)}MB -> ${(savedAfter / 1e6).toFixed(1)}MB`
);
