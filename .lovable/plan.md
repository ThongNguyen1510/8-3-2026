

# Implementation Plan

Build the March 8th greeting page as a single `Index.tsx` page with all styling inline/in `index.css`.

## Files to Create/Modify

1. **`index.html`** — Add Google Fonts link (Dancing Script, Great Vibes)

2. **`src/index.css`** — Add custom CSS:
   - Pastel pink/rose-gold/cream color variables
   - Copper metallic circular frame styles
   - Floating stars/hearts keyframe animations
   - Decorative font classes

3. **`src/pages/Index.tsx`** — Complete rewrite with sections:
   - **Floral banner** with SVG/emoji flowers, hearts, title "CHÚC MỪNG NGÀY QUỐC TẾ PHỤ NỮ" in script font
   - **Circular photo** using the uploaded image with copper gradient border
   - **Message block** with "MẸ KÍNH YÊU" heading and full Vietnamese text, signed
   - **Floating decorations** — animated stars, hearts, roses scattered via absolute positioning

4. **Copy uploaded image** to `public/` for use as the photo

## Key Techniques
- CSS `conic-gradient` / `linear-gradient` for copper metallic frame
- CSS `@keyframes` for floating/glowing animations
- Google Fonts for Vietnamese-compatible script fonts
- Fully responsive with Tailwind + custom CSS

