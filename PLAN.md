# Implementation Plan: Nitin Yadav Portfolio Website

## 1. PROJECT SETUP

### Vite + React Scaffold Commands
```bash
# Initialize Vite React project in the current directory
npm create vite@latest . -- --template react

# Install standard dependencies
npm install
```

### NPM Packages to Install (with exact versions)
```bash
# Core Dependencies
npm install react@18.2.0 react-dom@18.2.0

# Styling & Tailwind CSS v3 (Recommended for Shadcn/UI compatibility)
npm install tailwindcss@3.4.1 postcss@8.4.35 autoprefixer@10.4.17

# Animation & Motion Libraries
npm install framer-motion@11.0.8

# UI Elements & Icons (Shadcn/UI dependencies)
npm install lucide-react@0.359.0 clsx@2.1.0 tailwind-merge@2.2.1 class-variance-authority@0.7.0

# Initialize Shadcn/UI and add required components
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card input textarea

# Fonts (Self-hosted via Fontsource)
npm install @fontsource/space-grotesk @fontsource/inter @fontsource/jetbrains-mono

# Form Backend
npm install @emailjs/browser@4.3.3
```

### Folder Structure
```text
src/
├── assets/
│   └── resume/                  # Resume PDF, Avatar/Monogram, OG image
├── components/
│   ├── cursor/                  # CustomCursor.jsx
│   ├── layout/                  # Navbar.jsx, Footer.jsx
│   ├── sections/                # Hero.jsx, About.jsx, Skills.jsx, Projects.jsx, Experience.jsx, Education.jsx, Contact.jsx
│   ├── shared/                  # Reusable UI (SectionTitle, ProjectCard, SkillBento, TimelineItem, CertBadge, AnimatedCounter, TextReveal, MagneticButton, CardSpotlight, SplitText, TypewriterText)
│   └── ui/                      # Shadcn primitives (button, card, input, textarea)
├── hooks/                       # useCustomCursor.js, useSectionInView.js
├── lib/                         # animations.js (Framer variants), utils.js (cn utility)
├── App.jsx                      # Main page assembly
├── main.jsx                     # React DOM entry point
└── index.css                    # Tailwind setup & Custom CSS variables (Carbon/Lime tokens)
```

---

## 2. DESIGN SYSTEM & CSS TOKENS

### CSS Color Tokens (`index.css`)
```css
:root {
  --color-bg: #171717;           /* Carbon */
  --color-accent: #C6FF34;       /* Lime */
  --color-surface: #1F1F1F;      /* Carbon 2 */
  --color-border: #2C2C2C;       /* Carbon 3 */
  --color-text-primary: #F2F2F2; /* Off-white */
  --color-text-muted: #666666;   /* Ash */
  --color-accent-dim: #C6FF3430; /* Lime 30% */
}
```

### Typography System
*   **Fonts**: Space Grotesk (Display/Headlines), Inter (Body), JetBrains Mono (Metrics/Code).
*   **Type Scale**:
    *   `xs`: 0.75rem (metadata, tags)
    *   `sm`: 0.875rem (captions, labels)
    *   `base`: 1.0rem (body)
    *   `lg`: 1.125rem (card titles)
    *   `xl`: 1.5rem (sub-headlines)
    *   `2xl`: 2.25rem (section titles)
    *   `3xl`: 3.5rem (hero sub-title)
    *   `display`: `clamp(4rem, 8vw, 7rem)` (hero name)
*   **Metric Number Rule**: Every impact metric (e.g., 0.92 ROC-AUC, 250K records) *must* be rendered in JetBrains Mono with a Lime (`--color-accent`) tint. This applies strictly across `ProjectCard` and `AnimatedCounter`.

### Spacing System
*   **Base Unit**: 8px
*   **Container Max-Width**: 1200px
*   **Container Padding**: 24px (mobile), 48px (desktop)
*   **Section Padding**: 80px 0 (mobile), 120px 0 (desktop)
*   **Border Radius**: Card `12px`, Button `6px`

---

## 3. IMPLEMENTATION ORDER

1. **`index.css` & Tailwind Config** - *Reason: Establishes the foundational design system (Carbon/Lime tokens, typography, spacing) needed by all components.*
2. **`lib/animations.js`** - *Reason: Defines the shared Framer Motion variants and easing curves to be used globally.*
3. **`CustomCursor.jsx`** - *Reason: Core signature element that affects the entire app's interaction feel; easier to test early.*
4. **`Hero.jsx`** - *Reason: The most critical section for holding attention; sets the animation tone and load choreography.*
5. **`Navbar.jsx`** - *Reason: Enables navigation early on and implements the complex scroll listener for active states and frosted glass.*
6. **`Projects.jsx`** - *Reason: The most important content section; involves complex grid layouts, CardSpotlight (for featured), and hover states.*
7. **`Skills.jsx`** - *Reason: Follows the Bento grid pattern and requires stagger animations.*
8. **`Experience.jsx`** - *Reason: Introduces the timeline animation (scroll-triggered stroke).*
9. **`About.jsx`** - *Reason: Standard two-column layout with Framer Motion reveals.*
10. **`Education.jsx`** - *Reason: Simple side-by-side layout with badge components.*
11. **`Contact.jsx` & `Footer.jsx`** - *Reason: Final interactive forms and social links, integrating EmailJS and glow background.*
12. **App Assembly (`App.jsx`)** - *Reason: Brings all sections together and configures global scroll observers.*

---

## 4. COMPONENT BREAKDOWN

### Layout Components
*   **`Navbar`**: Fixed top navigation. **Props**: None. **Animation**: Starts fully transparent. A scroll event listener transitions it to `bg-[#171717]/80` with `backdrop-blur-md` once scrolling begins. Mobile menu uses Framer Motion for staggered line entries (not just a basic hamburger overlay). Logo (`NITIN.DEV`) uses JetBrains Mono with a blinking lime `█`. Includes `[ Hire Me ]` CTA button.
*   **`Footer`**: Simple bottom footer. **Props**: None.

### Cursor Component
*   **`CustomCursor`**: Tracks mouse and changes shape on hover. **Props**: None. **Animation**: Framer Motion `useSpring`.

### Section Components
*   **`Hero`**: Landing section. **Props**: None. **Animation**: Framer Motion text split reveal uses a stagger of 0.04s per character. The `TypewriterText` subtitle cycles through `Data Scientist` → `ML Engineer` → `Analyst` at 2s each. Also uses `MagneticButton` for CTAs and a custom canvas-based animated particle grid in lime at 5% opacity. **Variant**: `staggerContainer` (parent), `fadeUp` (children).
*   **`About`**: Bio and current role. Includes a `[ Resume ↓ ]` button that triggers the PDF download. **Props**: None. **Animation**: Framer `useInView` (with `triggerOnce: true`). The Avatar card has subtle rotation on hover. The "Currently" badge includes a pulsing green dot + `Ethara AI` in JetBrains Mono. **Variant**: `slideLeft` (left column), `slideRight` (right column).
*   **`Skills`**: Bento grid of tools. **Props**: None. **Animation**: Framer Motion. **Variant**: `staggerContainer`, `fadeUp`. **Note**: Skill tags render as `<code>` blocks in JetBrains Mono with lime-tinted backgrounds. Strictly adheres to the rule of no skill bars or percentages (objective tool listing only).
*   **`Projects`**: Grid of featured and past projects. The layout places the Featured Project Card full-width spanning the entire grid, sitting above the standard 2-column project cards. **Props**: None. **Animation**: Framer `useInView` (with `triggerOnce: true`). The Featured Project Card utilizes the `CardSpotlight` effect. **Variant**: `staggerContainer`, `fadeUp`.
*   **`Experience`**: Vertical timeline. **Props**: None. **Animation**: The SVG timeline line is scroll-triggered (draws as the user scrolls using Framer Motion `useScroll` + `useTransform`). Experience cards alternate left/right on desktop via `useInView` (with `triggerOnce: true`). **Variant**: Alternating `slideLeft` and `slideRight`.
*   **`Education`**: Degrees and certifications. **Props**: None. **Animation**: Framer `useInView` (with `triggerOnce: true`). **Variant**: `staggerContainer`, `fadeUp`.
*   **`Contact`**: Contact form and links. The submit button is explicitly wrapped in a `MagneticButton` component. Includes a horizontal row of social links (GitHub · LinkedIn · Resume). **Props**: None. **Animation**: Includes a Lime radial glow at center bottom, 4% opacity. Framer `useInView` (with `triggerOnce: true`). **Variant**: `fadeUp`.

*Note: All section scroll animations using `useInView` must be configured with `triggerOnce: true` so they do not re-animate when scrolling back up.*

### Shared UI Components
*   **`ProjectCard`**: Display individual project. **Props**: `title`, `impact`, `tools`, `githubUrl`, `demoUrl`, `isFeatured`. **Animation**: Framer `whileHover` scale/shadow. *Uses Metric Number Rule for impact typography.*
*   **`SkillBento`**: Individual bento box. **Props**: `category`, `skills`. **Animation**: `CardSpotlight` hover effect.
*   **`TimelineItem`**: Single job entry. **Props**: `date`, `role`, `company`, `bullets`. **Animation**: Lime dot pulse (CSS/Framer). **Note**: Date labels must render in JetBrains Mono using the muted color (`--color-text-muted`).
*   **`CertBadge`**: Certification item. **Props**: `title`, `issuer`, `year`, `url`. **Animation**: Framer `whileHover` lift.
*   **`AnimatedCounter`**: Number ticker. **Props**: `value`, `prefix`, `suffix`. **Animation**: Viewport-triggered via Framer `useInView` — starts counting only when the card enters the viewport. *Uses Metric Number Rule for impact typography.*
*   **`SectionTitle`**: Reusable header. **Props**: `title`. **Animation**: Framer Motion character stagger.

### Custom Hooks
*   **`useCustomCursor`**: Manages the global state and position of the custom cursor.
*   **`useSectionInView`**: Uses `IntersectionObserver` to detect which section (e.g., `#about`, `#projects`) is currently in the viewport (threshold: 0.5). It updates the active state in the `Navbar` to highlight the corresponding nav link.

---

## 5. SHARED ANIMATION VARIANTS

Stored in `lib/animations.js`:

```javascript
// Easing curve (expo.out equivalent)
const customEase = [0.19, 1, 0.22, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: customEase } 
  }
};

export const slideLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: customEase } 
  }
};

export const slideRight = {
  hidden: { opacity: 0, x: 48 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: customEase } 
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2
    } 
  }
};
```

---

## 6. PAGE LOAD SEQUENCE

Exact Hero load choreography:
*   **0ms**: Carbon background renders (CSS).
*   **100ms**: Nav fades in (opacity 0→1, handled by Framer Motion `animate`).
*   **300ms**: Terminal prompt `> _` appears and blinks (CSS keyframes).
*   **800ms**: Hero name character stagger starts (Framer Motion `staggerChildren`).
*   **1200ms**: Tagline fades up (Framer Motion delayed `fadeUp`).
*   **1500ms**: CTA buttons slide up (Framer Motion delayed `fadeUp`).
*   **2000ms**: Scroll indicator pulses (CSS keyframes).

---

## 7. CUSTOM CURSOR SPEC

*   **Default state**: 16px solid Lime dot (`#C6FF34`). Spring settings: stiffness 400, damping 28.
*   **Hover interactive state**: Morphs to a 40px hollow ring (2px solid Lime border, transparent center).
*   **Hover project card state**: Size expands, dot disappears, text "VIEW →" appears inside in JetBrains Mono 12px, Carbon color on Lime background.
*   **Hover CTA button state**: Dot inverts (Carbon color on Lime background) or disappears if the button provides its own strong hover state.
*   **Touch devices**: Cursor component returns `null` if `window.matchMedia("(pointer: coarse)").matches`.

---

## 8. RESPONSIVE BREAKPOINTS

*   **Mobile (<640px)**:
    *   **Layout**: Single-column everywhere. Hero name font-size ~3rem. Timeline left-aligned.
    *   **Components**: Nav morphs into full-screen overlay with staggered line entries. 2-col grids (About, Projects, Skills) stack vertically.
    *   **Cursor**: Custom cursor completely disabled via pointer media query.
*   **Tablet (640px–1024px)**:
    *   **Layout**: 2-col skills bento becomes 1-col; projects 2-col stays; experience timeline centered.
*   **Desktop (>1024px)**:
    *   **Layout**: Full layout as specified. Custom cursor active. 2-col about section.

---

## 9. HOVER STATES

*   **Project card**: `scale(1.02)`, shadow spread increases, border color transitions to Lime.
*   **Nav links**: Lime underline slides in from left (CSS `::after` with `transform-origin: left`).
*   **CTA buttons**: Background fills with Lime, text color transitions to Carbon.
*   **Social icons**: Icon color transitions to Lime, element translates Y by `-2px`.
*   **Cert badges**: Border color transitions to Lime, slight vertical lift (translate-y `-4px`).
*   **Timeline nodes**: Inner pulse ring expands and fades out (CSS `scale` and `opacity` animation).

---

## 10. ACCESSIBILITY & MOTION

*   **Detection**: Uses Framer Motion's `useReducedMotion` hook globally.
*   **Behavior**: When `useReducedMotion` is `true`, all `duration` properties are set to `0`, `delay` is removed, and elements render in their final `visible` state immediately. Complex interactions like the custom cursor are disabled.
*   **Focus Management**: All interactive elements retain strong focus outlines (Lime colored) for keyboard navigation.

---

## 11. PERFORMANCE PLAN

*   **Targets**: LCP < 2.5s, bundle < 300KB gzipped, CLS < 0.1.
*   **Font Preloading**: `Space Grotesk` (700/800) and `Inter` (400) will be self-hosted via Fontsource. The specific woff2 files for these weights will be injected into `<head>` as `<link rel="preload" as="font" ... crossorigin>`.
*   **GSAP Usage**: GSAP is dropped entirely in favor of Framer Motion for free fallbacks. We are using Framer exclusively to save bundle size and avoid paid plugins.
*   **Images**: All assets (avatar, project previews) converted to WebP. Lazy loading applied (`loading="lazy"`) to all images below the fold with explicit `width` and `height` attributes to prevent CLS.

---

## 12. SEO & META

*   **Title**: `<title>Nitin Yadav — Data Scientist & ML Engineer</title>`
*   **Description**: `<meta name="description" content="Portfolio of Nitin Yadav — Data Scientist, ML Engineer, and Data Analyst. Builds ML models, BI dashboards, and data pipelines." />`
*   **OG Image**: Dimensions: 1200×630. Content: Carbon black background, Lime green text showing Name and Role.
*   **Theme Color**: `<meta name="theme-color" content="#171717" />`

---

## 13. FORM BACKEND

*   **Service**: EmailJS (`@emailjs/browser`). No backend, no redirects.
*   **Fields**: Name, Email, Message (Shadcn/UI components).
*   **onSubmit Behavior**:
    *   **Loading state**: Button text changes to "Sending...", spinner appears, form disabled.
    *   **Success state**: Button text changes to "Message Sent ✓", border turns green, form fields clear.
    *   **Error state**: Toast notification or inline red error text indicating failure, form remains populated to try again.

---

## 14. POTENTIAL BLOCKERS

1.  **Paid GSAP Plugins (`SplitText`, `drawSVG`)**: To avoid licensing issues, we will use free fallbacks:
    *   *SplitText fallback*: A custom React component splitting strings into individual `<span>` elements, animated via Framer Motion `staggerChildren`.
    *   *drawSVG fallback*: SVG `<line>` or `<path>` animated using Framer Motion's `useScroll` + `useTransform` (`pathLength` property) or CSS `stroke-dashoffset`.
2.  **Tailwind v4 Experimental Status**: V4 is risky and breaks Shadcn/UI conventions. We will stick to Tailwind CSS v3.4 for rock-solid stability and compatibility.
3.  **ReactBits Distribution**: ReactBits does not have a monolithic npm package. Components like `MagneticButton`, `CardSpotlight`, and `TextReveal` must be manually implemented/copy-pasted into `src/components/shared/` using Framer Motion.

---

## 15. DECISIONS RESOLVED

Based on the PRD's open questions and technical constraints, the following decisions are confirmed:
*   **GSAP Premium Plugins**: Discarded. We will use free fallbacks (Framer Motion text splitting and SVG `pathLength` tied to scroll) as described above to avoid licensing blocks.
*   **Tailwind Version**: Tailwind CSS v3 will be used to ensure full Shadcn/UI compatibility.
*   **Form Backend**: EmailJS is chosen to keep the user on the page without redirects.
*   **Avatar**: The `NY` monogram will be used initially; this can easily be swapped for a real photo later.
*   **ReactBits**: We will manually implement/copy-paste the required specific ReactBits interactions into the project.
