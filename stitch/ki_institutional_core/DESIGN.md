# DESIGN SYSTEM SPECIFICATION: THE ACADEMIC ATELIER

## 1. Overview & Creative North Star: "The Academic Atelier"
This design system departs from the generic "corporate portal" aesthetic. Instead, it adopts the philosophy of **The Academic Atelier**—a space where prestige meets precision. We treat digital interfaces like high-end editorial journals: expansive white space, authoritative typography, and a "No-Line" architecture.

The goal is to convey **Trustworthy Excellence** not through heavy borders or aggressive branding, but through the quiet confidence of perfect alignment, layered depth, and intentional asymmetry. We move away from rigid, boxed grids to create a flow that feels organic yet disciplined.

---

## 2. Colors: Tonal Architecture
We utilize a sophisticated palette centered on Royal Blue (`primary`) and a tiered system of neutrals to define space.

### The "No-Line" Rule
**Explicit Instruction:** 1px solid borders are strictly prohibited for sectioning or containment. Boundaries must be defined solely through background color shifts. 
- Use `surface-container-low` (#f3f3f6) sections against a `surface` (#f9f9fb) background to create structural separation.
- Visual hierarchy is achieved by "carving" into the white space, not by drawing boxes around it.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. 
- **Base Layer:** `surface` (#f9f9fb)
- **Interactive Layers:** Use `surface-container-lowest` (#ffffff) for cards to create a subtle "lift" against the background.
- **Navigation/Utility:** Use `surface-container-high` (#e8e8ea) for sidebars or subtle utility bars.

### The Glass & Gradient Rule
To move beyond a "flat" institutional feel, floating elements (modals, dropdowns, sticky headers) should utilize **Glassmorphism**:
- **Background:** `surface` at 80% opacity.
- **Effect:** `backdrop-blur` (16px - 24px).
- **Signature Soul:** For primary CTAs and Hero accents, use a subtle linear gradient: `primary` (#0040a8) to `primary-container` (#2b59c3) at a 135-degree angle. This adds depth that flat hex codes cannot replicate.

---

## 3. Typography: Editorial Authority
The typography system uses a pairing of **Public Sans** (for structural impact) and **Inter** (for functional clarity).

- **Display & Headlines (Public Sans):** These are our "editorial" voices. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for hero sections. Headlines should be used with generous top-margin to let the "institutional" weight breathe.
- **Body & Labels (Inter):** Optimized for readability in professional training contexts. Use `body-lg` (1rem) for standard reading lengths. 
- **Hierarchy Tip:** Always lean into high contrast. Pair a `display-md` headline with a `label-md` uppercase sub-header in `secondary` (#516070) to create an immediate sense of professional hierarchy.

---

## 4. Elevation & Depth: Tonal Layering
We replace traditional shadows with **Tonal Layering**.

- **The Layering Principle:** Depth is achieved by "stacking" surface tiers. Place a `surface-container-lowest` card on a `surface-container-low` section. This creates a soft, natural lift mimicking fine stationery.
- **Ambient Shadows:** For floating elements (e.g., "Start Training" floating action buttons), use a custom shadow: `0 20px 40px rgba(0, 24, 74, 0.06)`. The tint is derived from `on-primary-fixed` to ensure the shadow looks like natural light passing through blue-tinted glass.
- **The "Ghost Border" Fallback:** If a border is essential for accessibility, use `outline-variant` (#c3c6d5) at **20% opacity**. It should be felt, not seen.

---

## 5. Components: Precision Elements

### Buttons
- **Primary:** Gradient fill (`primary` to `primary-container`), `full` roundedness, and `label-md` (bold) text. 
- **Secondary:** Transparent fill with a `surface-container-highest` background on hover. No border.
- **Tertiary:** `on-surface` text with an underline that appears only on hover.

### Cards (The "Editorial" Card)
- **Style:** No borders. Background: `surface-container-lowest`. 
- **Padding:** Extra-large (`xl` - 2rem) internal padding.
- **Image:** Use `lg` (0.5rem) corner radius for imagery. Images should be slightly desaturated to maintain the "Anthracite" aesthetic of the text.

### Input Fields
- **Style:** Minimalist. No enclosing box. Use a `surface-container-high` bottom-only stroke (2px).
- **Focus State:** Transition the bottom stroke to `primary` (#0040a8) with a 4px "soft glow" ambient shadow.

### Chips & Tags
- Used for "Course Categories" or "Certification Levels."
- **Style:** `surface-container-high` background, `secondary` text, `full` roundedness. No border.

### Academic Progress Component (Context Specific)
- Instead of a standard progress bar, use a "Stepped Timeline" using `surface-tint` dots and thin `outline-variant` lines to track professional development phases.

---

## 6. Do's and Don'ts

### Do:
- **Use Asymmetry:** Place hero text on the left with a high-quality professional image offset to the right, overlapping the background color sections.
- **Embrace White Space:** If a section feels "crowded," double the padding. KI AGENCY represents "Excellence," which requires breathing room.
- **Use High-Quality Imagery:** Photos must be candid, high-end professional photography. Avoid "stock-y" people smiling at cameras.

### Don't:
- **Don't use Divider Lines:** Never use a horizontal rule `<hr>` to separate content. Use a 64px or 80px vertical spacer or a background color shift.
- **Don't use Pure Black:** Always use `on-surface` (#1a1c1e) or `secondary` (#516070) for text to keep the interface feeling premium and soft.
- **Don't use Default Roundedness:** Avoid the `sm` or `md` scales for major containers; stick to `lg` for cards and `full` for interactive elements to maintain a modern, "liquid" professional feel.