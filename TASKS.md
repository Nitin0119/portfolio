# Implementation Task List: Nitin Yadav Portfolio Website

## 1. Project scaffold and config files

[x] TASK-001 | FILE: terminal | ACTION: Run `npm create vite@latest . -- --template react`
    DONE WHEN: React + Vite boilerplate is generated in the root directory

[x] TASK-002 | FILE: terminal | ACTION: Run `npm install` for core React dependencies
    DONE WHEN: React 18.2.0 dependencies are installed

[x] TASK-003 | FILE: terminal | ACTION: Run `npm install tailwindcss@3.4.1 postcss@8.4.35 autoprefixer@10.4.17`
    DONE WHEN: Tailwind CSS v3 is installed

[x] TASK-004 | FILE: terminal | ACTION: Run `npm install framer-motion@11.0.8 lucide-react@0.359.0 clsx@2.1.0 tailwind-merge@2.2.1 class-variance-authority@0.7.0 @emailjs/browser@4.3.3`
    DONE WHEN: Animation, UI utility, and form dependencies are installed

[x] TASK-005 | FILE: terminal | ACTION: Run `npx shadcn-ui@latest init` and `npx shadcn-ui@latest add button card input textarea`
    DONE WHEN: Shadcn/UI configuration is present and the 4 components exist in `src/components/ui/`

[x] TASK-006 | FILE: terminal | ACTION: Run `npm install @fontsource/space-grotesk @fontsource/inter @fontsource/jetbrains-mono`
    DONE WHEN: Font packages are added to `package.json`

[x] TASK-007 | FILE: src/ | ACTION: Create the complete folder structure (`assets/resume`, `components/cursor`, `components/layout`, `components/sections`, `components/shared`, `hooks`, `lib`)
    DONE WHEN: All directories are verified to exist in the `src` folder

## 2. CSS token system and Tailwind config

[x] TASK-008 | FILE: src/index.css | ACTION: Define the 7 core color variables (`--color-bg`, `--color-accent`, etc.) in `:root`
    DONE WHEN: All 7 variables are declared and `var(--color-bg)` renders as `#171717` in the browser

[x] TASK-009 | FILE: tailwind.config.js | ACTION: Extend the Tailwind theme with the custom colors mapped to the CSS variables
    DONE WHEN: Utility classes like `bg-accent` correctly apply `#C6FF34`

[x] TASK-010 | FILE: tailwind.config.js | ACTION: Define the 8 exact typographic scales (`xs` through `display`) including the `clamp` value
    DONE WHEN: `text-display` utility outputs `clamp(4rem, 8vw, 7rem)`

[x] TASK-011 | FILE: tailwind.config.js | ACTION: Map the spacing system (8px base, 1200px max-w, radii 12px/6px) into the theme
    DONE WHEN: Tailwind's standard sizing reflects the exact 8px base units specified

## 3. animations.js variants

[x] TASK-012 | FILE: src/lib/animations.js | ACTION: Define the `customEase` constant as `[0.19, 1, 0.22, 1]`
    DONE WHEN: `customEase` is exported and available for import

[x] TASK-013 | FILE: src/lib/animations.js | ACTION: Define and export the `fadeUp` variant using `customEase` and duration 0.8s
    DONE WHEN: `fadeUp` variant is exported with exact y: 32 → 0 and opacity: 0 → 1 parameters

[x] TASK-014 | FILE: src/lib/animations.js | ACTION: Define and export the `slideLeft` variant
    DONE WHEN: `slideLeft` variant is exported with exact x: -48 → 0 parameters

[x] TASK-015 | FILE: src/lib/animations.js | ACTION: Define and export the `slideRight` variant
    DONE WHEN: `slideRight` variant is exported with exact x: 48 → 0 parameters

[x] TASK-016 | FILE: src/lib/animations.js | ACTION: Define and export the `staggerContainer` variant
    DONE WHEN: `staggerContainer` exports `staggerChildren: 0.1` and `delayChildren: 0.2`

## 4. CustomCursor component

[x] TASK-017 | FILE: src/hooks/useCustomCursor.js | ACTION: Create hook tracking mouse `x`/`y` position using Framer Motion `useSpring`
    DONE WHEN: Hook returns active `x`/`y` MotionValues that update on `mousemove`

[x] TASK-018 | FILE: src/components/cursor/CustomCursor.jsx | ACTION: Build default cursor state (16px solid Lime dot, stiffness 400, damping 28)
    DONE WHEN: 16px solid Lime dot perfectly trails the native cursor

[x] TASK-019 | FILE: src/components/cursor/CustomCursor.jsx | ACTION: Implement standard interactive hover state (40px hollow ring)
    DONE WHEN: Hovering `<a>` or `<button>` morphs dot into a 2px Lime border ring with transparent center

[x] TASK-020 | FILE: src/components/cursor/CustomCursor.jsx | ACTION: Implement Project Card hover state
    DONE WHEN: Hovering a project card expands the cursor and displays "VIEW →" in JetBrains Mono 12px, Carbon on Lime

[x] TASK-021 | FILE: src/components/cursor/CustomCursor.jsx | ACTION: Implement CTA button hover state
    DONE WHEN: Hovering the CTA button causes the cursor dot to invert (Carbon on Lime) or hide completely

[x] TASK-022 | FILE: src/components/cursor/CustomCursor.jsx | ACTION: Implement touch device detection logic
    DONE WHEN: Cursor component explicitly returns `null` when `window.matchMedia("(pointer: coarse)").matches` is true

## 5. Hero section — every animation step separately

[x] TASK-023 | FILE: src/components/sections/Hero.jsx | ACTION: Render the Carbon background (`0ms` load state)
    DONE WHEN: `Hero.jsx` mounts with the `--color-bg` (#171717) filling the screen

[x] TASK-024 | FILE: src/components/layout/Navbar.jsx | ACTION: Animate Navbar fade-in at `100ms`
    DONE WHEN: Navbar transitions opacity 0 → 1 at exactly 100ms after load

[x] TASK-025 | FILE: src/components/sections/Hero.jsx | ACTION: Animate terminal prompt `> _` at `300ms`
    DONE WHEN: Terminal prompt appears and begins CSS keyframe blinking at 300ms

[x] TASK-026 | FILE: src/components/sections/Hero.jsx | ACTION: Build custom text split reveal for Hero name at `800ms`
    DONE WHEN: Each character of the name animates in sequentially using a stagger of 0.04s per character

[x] TASK-027 | FILE: src/components/sections/Hero.jsx | ACTION: Animate Tagline fade-up at `1200ms`
    DONE WHEN: Tagline paragraph uses `fadeUp` variant and appears at 1200ms

[x] TASK-028 | FILE: src/components/sections/Hero.jsx | ACTION: Animate CTA buttons slide-up at `1500ms`
    DONE WHEN: `MagneticButton` CTAs slide up and become visible at 1500ms

[x] TASK-029 | FILE: src/components/sections/Hero.jsx | ACTION: Animate scroll indicator at `2000ms`
    DONE WHEN: Downward scroll indicator begins pulsing at 2000ms

[x] TASK-030 | FILE: src/components/sections/Hero.jsx | ACTION: Implement custom canvas-based particle background
    DONE WHEN: A lime particle grid animates on a `<canvas>` at 5% opacity behind all Hero content

[x] TASK-031 | FILE: src/components/shared/TypewriterText.jsx | ACTION: Implement `TypewriterText` looping subtitle
    DONE WHEN: Subtitle precisely cycles `Data Scientist` → `ML Engineer` → `Analyst` holding for exactly 2s each

## 6. Navbar — transparency, scroll behavior, mobile menu, logo, CTA separately

[x] TASK-032 | FILE: src/components/layout/Navbar.jsx | ACTION: Set initial Navbar background to fully transparent
    DONE WHEN: On page load (scroll position 0), the Navbar has no background color or blur

[x] TASK-033 | FILE: src/components/layout/Navbar.jsx | ACTION: Implement scroll listener for frosted glass effect
    DONE WHEN: Scrolling >0px transitions Navbar to `bg-[#171717]/80` and `backdrop-blur-md`

[x] TASK-034 | FILE: src/components/layout/Navbar.jsx | ACTION: Implement the `NITIN.DEV` logo
    DONE WHEN: Logo renders in JetBrains Mono with a blinking lime `█` pseudo-element before it

[x] TASK-035 | FILE: src/components/layout/Navbar.jsx | ACTION: Add `[ Hire Me ]` CTA button
    DONE WHEN: `[ Hire Me ]` button appears on the far right of the desktop nav with a lime outline

[x] TASK-036 | FILE: src/components/layout/Navbar.jsx | ACTION: Implement mobile overlay menu
    DONE WHEN: Hamburger click opens full-screen menu with Framer Motion staggered line entries

[x] TASK-037 | FILE: src/hooks/useSectionInView.js | ACTION: Implement hook to detect active section using IntersectionObserver
    DONE WHEN: Nav links receive a lime underline highlight dynamically as their target sections cross the 0.5 viewport threshold

## 7. Projects section — featured card, grid cards, CardSpotlight, AnimatedCounter separately

[x] TASK-038 | FILE: src/components/sections/Projects.jsx | ACTION: Construct the grid layout for the section
    DONE WHEN: Layout structurally supports one full-width featured card over a standard 2-column card grid

[x] TASK-039 | FILE: src/components/shared/ProjectCard.jsx | ACTION: Build the standard ProjectCard component
    DONE WHEN: Card lifts (`scale(1.02)`), increases shadow, and border turns lime on hover

[x] TASK-040 | FILE: src/components/sections/Projects.jsx | ACTION: Render the Featured Project Card
    DONE WHEN: Featured card occupies the full width of the container at the top of the grid

[x] TASK-041 | FILE: src/components/shared/CardSpotlight.jsx | ACTION: Implement `CardSpotlight` effect and apply to the Featured Project Card
    DONE WHEN: A lime spotlight correctly follows the mouse pointer inside the boundaries of the Featured Project Card

[x] TASK-042 | FILE: src/components/shared/AnimatedCounter.jsx | ACTION: Build the `AnimatedCounter` component
    DONE WHEN: Component accepts a numeric value and securely transitions from 0 to target value using Framer Motion

[x] TASK-043 | FILE: src/components/shared/ProjectCard.jsx | ACTION: Apply Metric Number typography rule
    DONE WHEN: Every impact number in a `ProjectCard` explicitly renders in JetBrains Mono with `--color-accent` tint

[x] TASK-044 | FILE: src/components/shared/AnimatedCounter.jsx | ACTION: Apply Metric Number typography rule to counter
    DONE WHEN: The `AnimatedCounter` explicitly outputs its value in JetBrains Mono with `--color-accent` tint

[x] TASK-045 | FILE: src/components/shared/AnimatedCounter.jsx | ACTION: Apply viewport trigger to `AnimatedCounter`
    DONE WHEN: `AnimatedCounter` uses `useInView` (with `triggerOnce: true`) and only begins counting when visible

[x] TASK-046 | FILE: src/components/sections/Projects.jsx | ACTION: Apply entrance animations to grid
    DONE WHEN: Entire project grid animates using `useInView` with `triggerOnce: true`, `staggerContainer`, and `fadeUp`

## 8. Skills section — bento grid, CardSpotlight, code tags

[x] TASK-047 | FILE: src/components/sections/Skills.jsx | ACTION: Build the Bento grid layout
    DONE WHEN: Skills are structurally grouped into cells (Languages, ML, BI, Cloud, Tools) matching a bento layout

[x] TASK-048 | FILE: src/components/sections/Skills.jsx | ACTION: Apply `CardSpotlight` to all bento cells
    DONE WHEN: Mouse movement inside any bento cell casts a lime spotlight background effect

[x] TASK-049 | FILE: src/components/sections/Skills.jsx | ACTION: Render individual skill tags
    DONE WHEN: All skills explicitly render as `<code>` blocks using JetBrains Mono with lime-tinted backgrounds

[x] TASK-050 | FILE: src/components/sections/Skills.jsx | ACTION: Validate "No skill bars" rule
    DONE WHEN: Code review verifies zero progress bars, percentages, or subjective metrics exist in the section

[x] TASK-051 | FILE: src/components/sections/Skills.jsx | ACTION: Apply entrance animations
    DONE WHEN: Section animates using `useInView` with `triggerOnce: true`, `staggerContainer`, and `fadeUp`

## 9. Experience section — SVG line, scroll trigger, alternating cards separately

[x] TASK-052 | FILE: src/components/sections/Experience.jsx | ACTION: Build SVG timeline vertical line
    DONE WHEN: A vertical SVG line spans the full height of the Experience container

[x] TASK-053 | FILE: src/components/sections/Experience.jsx | ACTION: Implement timeline scroll trigger
    DONE WHEN: SVG line uses Framer Motion `useScroll` and `useTransform` (`pathLength`) to visually draw downwards exactly as the user scrolls

[x] TASK-054 | FILE: src/components/shared/TimelineItem.jsx | ACTION: Build the individual job node
    DONE WHEN: Node renders a pulsing lime dot next to the job details

[x] TASK-055 | FILE: src/components/shared/TimelineItem.jsx | ACTION: Apply Date typography
    DONE WHEN: The date label explicitly uses JetBrains Mono and the `--color-text-muted` token

[x] TASK-056 | FILE: src/components/sections/Experience.jsx | ACTION: Apply alternating entrance animations to cards
    DONE WHEN: On desktop, cards animate in alternating between `slideLeft` and `slideRight` variants using `useInView` with `triggerOnce: true`

## 10. About section — two columns, avatar, badge, resume button separately

[x] TASK-057 | FILE: src/components/sections/About.jsx | ACTION: Build 2-column layout
    DONE WHEN: Section displays Avatar/Stats column on the left and Bio column on the right

[x] TASK-058 | FILE: src/components/sections/About.jsx | ACTION: Implement Avatar card rotation
    DONE WHEN: Hovering the NY monogram avatar card triggers a subtle Framer Motion rotation

[x] TASK-059 | FILE: src/components/sections/About.jsx | ACTION: Implement "Currently" badge
    DONE WHEN: Badge renders containing a pulsing green CSS dot alongside `Ethara AI` in JetBrains Mono

[x] TASK-060 | FILE: src/components/sections/About.jsx | ACTION: Add Resume button
    DONE WHEN: `[ Resume ↓ ]` button is present and explicitly triggers a browser download for the PDF

[x] TASK-061 | FILE: src/components/sections/About.jsx | ACTION: Apply entrance animations
    DONE WHEN: Left column animates with `slideLeft` and right column with `slideRight`, both utilizing `useInView` with `triggerOnce: true`

## 11. Education section — degrees, cert badges

[x] TASK-062 | FILE: src/components/sections/Education.jsx | ACTION: Build side-by-side layout
    DONE WHEN: Education history sits on the left, Certification grid sits on the right

[x] TASK-063 | FILE: src/components/shared/CertBadge.jsx | ACTION: Build certification badge component
    DONE WHEN: Badge lifts vertically (`translate-y -4px`) and its border transitions to lime on hover

[x] TASK-064 | FILE: src/components/sections/Education.jsx | ACTION: Apply entrance animations
    DONE WHEN: Section animates using `useInView` with `triggerOnce: true`, `staggerContainer`, and `fadeUp`

## 12. Contact section — form, EmailJS integration, social links, glow separately

[x] TASK-065 | FILE: src/components/sections/Contact.jsx | ACTION: Build the form UI
    DONE WHEN: Form renders utilizing Shadcn `Input` for Name/Email and `Textarea` for Message

[x] TASK-066 | FILE: src/components/sections/Contact.jsx | ACTION: Configure EmailJS service
    DONE WHEN: EmailJS `sendForm` function is correctly wired to the form's `onSubmit` handler using placeholder credentials

[x] TASK-067 | FILE: src/components/sections/Contact.jsx | ACTION: Implement Form Loading state
    DONE WHEN: During submission, form inputs disable, button text changes to "Sending...", and a spinner appears

[x] TASK-068 | FILE: src/components/sections/Contact.jsx | ACTION: Implement Form Success state
    DONE WHEN: On success, button text becomes "Message Sent ✓", border goes green, and inputs clear

[x] TASK-069 | FILE: src/components/sections/Contact.jsx | ACTION: Implement Form Error state
    DONE WHEN: On failure, a visible inline red error message appears and form data is retained for retry

[x] TASK-070 | FILE: src/components/sections/Contact.jsx | ACTION: Apply MagneticButton to submit
    DONE WHEN: The form's submit button is explicitly wrapped in the `MagneticButton` component

[x] TASK-071 | FILE: src/components/sections/Contact.jsx | ACTION: Add horizontal row of social links
    DONE WHEN: GitHub, LinkedIn, and Resume links render horizontally below the form, translating Y by `-2px` and turning lime on hover

[x] TASK-072 | FILE: src/components/sections/Contact.jsx | ACTION: Implement background glow
    DONE WHEN: A radial CSS gradient glow sits at the center-bottom of the section rendering Lime at exactly 4% opacity

[x] TASK-073 | FILE: src/components/sections/Contact.jsx | ACTION: Apply entrance animations
    DONE WHEN: Section animates using `useInView` with `triggerOnce: true` and `fadeUp` variant

## 13. App.jsx assembly

[x] TASK-074 | FILE: src/App.jsx | ACTION: Assemble all components
    DONE WHEN: `Navbar`, `Hero`, `About`, `Skills`, `Projects`, `Experience`, `Education`, `Contact`, and `Footer` render sequentially inside `App.jsx`

[x] TASK-075 | FILE: src/App.jsx | ACTION: Inject CustomCursor globally
    DONE WHEN: `<CustomCursor />` mounts at the root level of `App.jsx`

## 14. index.html meta tags and SEO

[x] TASK-076 | FILE: index.html | ACTION: Set precise document `<title>`
    DONE WHEN: Title tag exactly reads `Nitin Yadav — Data Scientist & ML Engineer`

[x] TASK-077 | FILE: index.html | ACTION: Set precise `<meta name="description">`
    DONE WHEN: Description tag exactly matches the PRD string "Portfolio of Nitin Yadav..."

[x] TASK-078 | FILE: index.html | ACTION: Configure OG image `<meta>` tag
    DONE WHEN: `og:image` meta tag is injected pointing to `/og-image.png` (1200x630 dimension assumed)

[x] TASK-079 | FILE: index.html | ACTION: Set theme color
    DONE WHEN: `<meta name="theme-color" content="#171717" />` is injected into the `<head>`

## 15. Font preloading in index.html

[x] TASK-080 | FILE: index.html | ACTION: Preload Space Grotesk
    DONE WHEN: A `<link rel="preload" as="font">` tag explicitly loads the Space Grotesk 700/800 woff2 files

[x] TASK-081 | FILE: index.html | ACTION: Preload Inter
    DONE WHEN: A `<link rel="preload" as="font">` tag explicitly loads the Inter 400 woff2 file

## 16. Responsive breakpoints — one task per section per breakpoint

[x] TASK-082 | FILE: src/components/layout/Navbar.jsx | ACTION: Apply mobile breakpoint (`<640px`) changes
    DONE WHEN: Navbar fully converts to the staggered full-screen overlay menu below 640px

[x] TASK-083 | FILE: src/components/sections/Hero.jsx | ACTION: Apply mobile breakpoint (`<640px`) changes
    DONE WHEN: Hero name font-size scales down to ~3rem on mobile devices

[x] TASK-084 | FILE: src/components/sections/About.jsx | ACTION: Apply mobile breakpoint (`<640px`) changes
    DONE WHEN: The 2-column layout stacks completely vertical below 640px

[x] TASK-085 | FILE: src/components/sections/Projects.jsx | ACTION: Apply mobile breakpoint (`<640px`) changes
    DONE WHEN: The 2-column grid cards stack vertically into a single column below 640px

[x] TASK-086 | FILE: src/components/sections/Skills.jsx | ACTION: Apply mobile breakpoint (`<640px`) changes
    DONE WHEN: The bento grid stacks into a single vertical column below 640px

[x] TASK-087 | FILE: src/components/sections/Experience.jsx | ACTION: Apply mobile breakpoint (`<640px`) changes
    DONE WHEN: Timeline shifts to left-aligned rather than centered below 640px

[x] TASK-088 | FILE: src/components/sections/Skills.jsx | ACTION: Apply tablet breakpoint (`640px–1024px`) changes
    DONE WHEN: The 2-column bento specifically becomes 1-column while retaining tablet padding

[x] TASK-089 | FILE: src/components/sections/Projects.jsx | ACTION: Apply tablet breakpoint (`640px–1024px`) changes
    DONE WHEN: The 2-column project grid correctly maintains its 2 columns on tablet screens

[x] TASK-090 | FILE: src/components/sections/Experience.jsx | ACTION: Apply tablet breakpoint (`640px–1024px`) changes
    DONE WHEN: The vertical timeline maintains its centered alignment correctly on tablet screens

[x] TASK-091 | FILE: src/components/sections/About.jsx | ACTION: Apply desktop breakpoint (`>1024px`) changes
    DONE WHEN: Ensure About section correctly enforces its 2-column layout explicitly above 1024px

## 17. Accessibility — reduced motion, focus outlines

[x] TASK-092 | FILE: src/lib/animations.js | ACTION: Intercept animations with `useReducedMotion` globally
    DONE WHEN: If `prefers-reduced-motion` is active, all Framer durations evaluate to `0` and elements render immediately visible

[x] TASK-093 | FILE: src/index.css | ACTION: Enforce global focus outlines
    DONE WHEN: All `a`, `button`, and `input` elements visually render a clear Lime (`--color-accent`) outline when focused via keyboard

## 18. Final build and performance check

[x] TASK-094 | FILE: terminal | ACTION: Run `npm run build`
    DONE WHEN: Vite successfully outputs a production build locally with no lint or type errors

[x] TASK-095 | FILE: terminal | ACTION: Inspect JS bundle size
    DONE WHEN: The built JS bundle gzip size is verified to be < 300KB

[x] TASK-096 | FILE: src/components/ | ACTION: Audit all image usages for performance
    DONE WHEN: All non-hero images confirm usage of `loading="lazy"`, explicit `width`/`height` attributes, and WebP format
