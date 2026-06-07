// Generates public/og.png (1200x630) social share image. Run:
//   node scripts/make-og.mjs
import sharp from "sharp";

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0d1426"/>
      <stop offset="1" stop-color="#0b3c60"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="#22ccea" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#22ccea" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="logo" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0d8fd6"/>
      <stop offset="1" stop-color="#22ccea"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1010" cy="140" r="300" fill="url(#glow)"/>

  <!-- logo + brand -->
  <rect x="90" y="96" width="74" height="74" rx="20" fill="url(#logo)"/>
  <text x="127" y="148" font-family="Arial, sans-serif" font-size="42" font-weight="700" fill="#ffffff" text-anchor="middle">V</text>
  <text x="184" y="148" font-family="Arial, sans-serif" font-size="38" font-weight="700" fill="#ffffff">Verve Digital</text>

  <!-- headline -->
  <text x="90" y="320" font-family="Arial, sans-serif" font-size="78" font-weight="700" fill="#ffffff">Marketing that</text>
  <text x="90" y="410" font-family="Arial, sans-serif" font-size="78" font-weight="700" fill="#7fd4ff">moves the needle.</text>

  <!-- subtext -->
  <text x="92" y="510" font-family="Arial, sans-serif" font-size="30" fill="#9ec7e0">SEO · Paid Ads · Social · Branding · Web · Analytics</text>
</svg>
`;

await sharp(Buffer.from(svg)).png().toFile("public/og.png");
console.log("Wrote public/og.png");
