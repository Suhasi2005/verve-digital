# 🖼️ Image guide — Gemini prompts for every image

Save each file in **this folder** (`public/images/`) with the **exact filename**
shown. Until a file exists, the site shows a styled placeholder.

## ⚠️ Read first — 2 rules baked into every prompt

1. **Watermark crop space:** every prompt asks Gemini to leave **~18% empty,
   clean background space at the BOTTOM** and keep the subject in the upper
   two-thirds. Generate, then crop the bottom strip (with the Gemini watermark)
   off — the composition still looks right.
2. **Aspect ratio:** set it in Gemini's settings to the value listed. Pick a
   slightly **taller** ratio than the slot so the bottom crop leaves the right shape.
3. **One look, many scenes:** keep the palette consistent — **clean white + soft
   light-blue, subtle cyan accents, bright natural lighting, premium modern
   commercial style** — but each prompt below uses a *different scene, composition
   and subject* so nothing looks repetitive.

---

## 1) HERO CAROUSEL — same woman, 3 platforms (homepage)
Generate **slide 1 first**, then for 2 & 3 add: *"the exact same woman, same face,
hairstyle and light-blue outfit as the previous image."* Ratio **4:5 portrait**.

### `hero-whatsapp.jpg`
> A cheerful young female marketing strategist standing and gesturing with an open
> hand toward a large floating WhatsApp chat interface (green chat bubbles and the
> WhatsApp icon) on her right. Smart-casual light-blue blazer, warm genuine smile,
> looking at the viewer. Bright clean studio with a white-to-soft-blue gradient
> background, subtle cyan glow. Modern premium commercial photography. Keep her in
> the upper two-thirds and leave about 18% clean empty light background at the
> bottom for cropping. Portrait 4:5.

### `hero-instagram.jpg`
> The same woman, same face and light-blue outfit, now holding a phone in one hand
> and pointing with the other toward a large floating Instagram feed mockup (photo
> grid, heart and follower icons). Slightly different relaxed pose, confident smile.
> Bright white-to-soft-blue studio background with subtle pink-and-cyan accents.
> Premium commercial photography. Subject in the upper two-thirds, ~18% clean empty
> background space at the bottom for cropping. Portrait 4:5.

### `hero-seo.jpg`
> The same woman, same face and light-blue outfit, presenting with both hands toward
> a floating analytics dashboard with an upward-trending line graph, a Google-style
> search bar and ranking badges. Energetic confident expression. Bright clean
> white-and-light-blue studio, cyan data-glow accents. Premium commercial
> photography. Keep her upper two-thirds, ~18% empty clean background at the bottom
> for cropping. Portrait 4:5.

---

## 2) TEAM / CTA IMAGE (homepage "Join Us" + About quote area)

### `feature-team.jpg`  — ratio **4:3 landscape**
> A diverse team of four marketing professionals collaborating around a laptop in a
> bright, modern minimalist office with large windows. Genuine candid smiles,
> pointing at a screen, natural daylight, soft light-blue and cyan color grade,
> shallow depth of field, premium lifestyle photography. Keep the group in the upper
> two-thirds and leave ~18% clean, uncluttered floor/desk space at the bottom for
> cropping. Landscape 4:3.

---

## 3) CASE-STUDY IMAGES (Work page) — ratio **4:3 landscape**, each totally different

### `work-northwind-coffee.jpg`
> Premium specialty-coffee brand still life: a bag of artisan coffee and a ceramic
> cup of latte with latte art on a minimal light marble surface, soft morning light,
> cool light-blue color grade, editorial product photography. Subject upper two-thirds,
> ~18% clean empty surface at the bottom for cropping. Landscape 4:3.

### `work-vertex-saas.jpg`
> Modern B2B SaaS scene: a sleek open laptop on a clean white desk showing a colorful
> analytics dashboard, with soft blue UI glow, minimal tech aesthetic, a small plant
> out of focus. Editorial tech photography, light-blue palette. Subject upper
> two-thirds, ~18% clean empty desk space at the bottom for cropping. Landscape 4:3.

### `work-lumiere-beauty.jpg`
> Luxury skincare flat-lay: elegant frosted glass cosmetic bottles and a serum dropper
> arranged on a soft pastel-blue surface with delicate water droplets and a single
> green leaf, glowing soft light, high-end beauty product photography. Subject upper
> two-thirds, ~18% clean empty background at the bottom for cropping. Landscape 4:3.

### `work-metro-fitness.jpg`
> Modern fitness brand lifestyle: a bright minimalist gym interior with dumbbells and
> a kettlebell in the foreground, energetic clean atmosphere, cool blue tones, soft
> daylight, editorial photography (no faces needed). Subject upper two-thirds, ~18%
> clean empty floor space at the bottom for cropping. Landscape 4:3.

### `work-atlas-travel.jpg`
> Aspirational modern travel scene: a stylish carry-on suitcase, sunglasses and a
> camera on a clean light surface with a softly blurred coastal/airport window behind,
> bright airy light-blue grade, premium lifestyle photography. Subject upper
> two-thirds, ~18% clean empty space at the bottom for cropping. Landscape 4:3.

### `work-greenfield-foods.jpg`
> Sustainable organic food brand still life: fresh produce and eco-friendly kraft
> packaging on a light wooden surface with leafy greens, fresh natural light, clean
> light-blue editorial grade. Subject upper two-thirds, ~18% clean empty surface at
> the bottom for cropping. Landscape 4:3.

---

## 4) BLOG IMAGES (Blog cards + articles) — ratio **3:2 landscape**, conceptual & distinct

### `blog-elevate-your-brand-in-2026.jpg`
> Conceptual brand-growth image: a glowing upward 3D arrow / ascending bar chart made
> of soft glass and light, surrounded by floating abstract brand shapes, on a clean
> white background with blue-and-cyan gradient glow, modern 3D render aesthetic. Keep
> the composition in the upper two-thirds, ~18% clean empty space at the bottom for
> cropping. Landscape 3:2.

### `blog-social-media-strategy-that-converts.jpg`
> Conceptual social-media image: floating 3D social UI cards — heart, comment, share
> and follower icons — orbiting a smartphone, clean white background with light-blue
> and soft-pink glow, glossy modern 3D render. Composition upper two-thirds, ~18%
> clean empty space at the bottom for cropping. Landscape 3:2.

### `blog-seo-fundamentals-that-still-work.jpg`
> Conceptual SEO image: a large glass magnifying glass over a stylized search bar and
> a rising line graph, with floating ranking badges, clean white background with cyan
> and blue gradient glow, premium 3D render aesthetic. Composition upper two-thirds,
> ~18% clean empty space at the bottom for cropping. Landscape 3:2.

---

### Tip
If a generated image feels too similar to another, add a distinguishing cue to the
prompt — a different camera angle ("top-down", "45° angle", "eye-level"), a different
prop, or a different accent tone (cyan vs. sky-blue vs. soft teal). The brand palette
stays the same; the scene should not.
