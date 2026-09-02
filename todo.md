# Dorja enhancement checklist

## Completed baseline and first refinement

- [x] Add richer product detail content for verification, safety, scanning, and handover.
- [x] Add polished scroll-reveal and hover motion with reduced-motion support.
- [x] Recompose the app-experience stage so its explanatory copy has a protected text panel below the screenshots.
- [x] Validate desktop and mobile layouts.
- [x] Save the revised checkpoint and deliver it.
- [x] Add a consistent left content gutter to the “What gets checked” section on desktop.
- [x] Constrain the section to the editorial content rail instead of letting it hug the viewport edge.
- [x] Preserve comfortable mobile padding and keep the four detail items readable.
- [x] Recheck the refined section at desktop and mobile widths, then save a checkpoint.

## Alpha/beta and motion refinement iteration

- [x] Increase the left and right breathing room around the “More than a badge. A trail of proof.” section, with alignment to the main editorial rail.
- [x] Add alpha/beta CTAs linking to the supplied APK release URL: https://github.com/Solez-ai/dorja/releases/download/latest/app-release.apk
- [x] Add safe external-link attributes to APK CTAs.
- [x] Improve hero entrance motion with layered reveals, paper movement, product-frame movement, and restrained floating evidence.
- [x] Add a supplied-Dorja-logo loading overlay for the full site with accessible status text.
- [x] Respect `prefers-reduced-motion` for the loader and hero motion.
- [x] Add visible Bangla-facing hero marginalia using the specified Gazi Jarin/Noto Sans Bengali font stack.
- [x] Strengthen the Dorja frame motif around product evidence and launch moments.
- [x] Make Dorja Ember the decisive action accent for primary CTAs and proof marks.
- [x] Clean the stylesheet and documentation after implementation.
- [x] Validate desktop and mobile compositions and run the production build.
- [x] Save a final checkpoint for this alpha/beta and motion refinement.

**Design direction:** Quiet Momentum — editorial Bangladeshi product design with warm paper surfaces, deep ink-blue hierarchy, Dorja Ember actions, visible vernacular marginalia, thin rules, and supplied app evidence.

**Brand requirements:** Preserve the supplied Dorja logo, authentic app screenshots, Gazi Jarin font stack, and Samin Yeasar creator credit.

**Motion rule:** Use transform and opacity for motion; keep interaction feedback crisp; gate non-essential motion with `prefers-reduced-motion`.

**Layout rule:** Keep proof-section content on a generous editorial rail with visible breathing room on desktop and restrained 12px framing on mobile.

**CTA rule:** The alpha/beta action uses the user-supplied APK release URL and does not attempt to download or execute the file during validation.

**Accessibility rule:** The loader includes `role="status"`, `aria-live="polite"`, and a text label; the APK links use clear action text.

**Content policy:** No fabricated testimonials, reviews, ratings, customer metrics, or invented user-generated content.

**Documentation note:** `todo.md.repetitive-backup` retains the previous oversized checklist history; this file is the active concise checklist.

**Scope:** Frontend-only changes in `client/src`, plus `ideas.md` and this checklist.

**Current phase:** Validated; final checkpoint saved for delivery.

**Next action:** Deliver the saved project version and publish only through the Management UI if desired.

**End of checklist.**
