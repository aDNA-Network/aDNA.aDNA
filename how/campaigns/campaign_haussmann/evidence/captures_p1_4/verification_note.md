---
type: evidence
campaign: campaign_haussmann
mission: mission_haussmann_p1_4_mobile_integrity
method: doctrine_visual_inspection T0 — scripts/visual_capture.mjs (headless Playwright), local preview of tree post-fix
created: 2026-08-16
last_edited_by: agent_rosetta
tags: [evidence, haussmann, p1_4, mobile, reflow]
---

# P1.4 verification — F1/F2/F3/F12 gone (before/after, geometry-proven)

Full capture set: 4 surfaces (`/get-started`, `/network`, `/`, `/learn/what-is-adna`) × 6 viewports ×
dark+light in this directory (48 PNGs, kept ON DISK; the repo carries the cited subset in `cited/` +
both reports — evidence-retention policy for the bulk sets is an open operator call, see the P1-wave
SITREP). Axe: **0 violations, both themes** (`capture_report.json` dark-axe · `axe_light/…` light-axe);
console errors 0; all routes 200.

| Finding | Before → After (cited) | Geometry proof `[D]` |
|---|---|---|
| **F1** docs dead column | `cited/BEFORE_get-started__mobile__dark.png` (~180px text column beside a dead gutter; page 8419px tall) → `cited/AFTER_get-started__mobile__dark.png` (full-width; 4483px tall) + light twin | computed grid cols at 375: `"141px 0px 233px"` → `"375px"`; article x=0, width=viewport |
| **F2** /network clipped steps | `cited/BEFORE_network__mobile-lg__dark.png` → `cited/AFTER_network__mobile-lg__dark.png` | `.run-code` scrollWidth ≤ clientWidth (soft-wrapped); step right-edge ≤ viewport; h-scroll false |
| **F3** diagram collapse | landscape ≈6.5px labels at 320 → `cited/AFTER_network_diagram_portrait_320.png` (portrait twin, ≥13px labels, hub + 6 named satellites legible) | portrait displayed <768, landscape hidden (and inverse at 1024) |
| **F12** orphaned copy button | button below block (computed `position: static`) → overlaid top-right inside block | computed `position: absolute`, bounds within `.code-block`; tree comments fit the 70ch measure |

**Root causes** (for the record): F1 = base grid missing its named areas (`grid-area: content` fell to
implicit lines — invisible to gate-9, nothing overflowed); F2 = `1fr` auto-minimum inheriting the
unbreakable clone URL + ancestor `overflow-x: hidden`; F12 = runtime-built wrapper unreachable by
CodeBlock's Astro-scoped styles; F3 = 640-unit landscape scaled ≤0.59×.

**Capture-instrument finding**: the F3 evidence class was partly a capture artifact — full-page
screenshots never scroll, so IntersectionObserver-armed elements were shot in their hidden armed
state. `visual_capture.mjs` now emulates `reducedMotion: 'reduce'` (deterministic composed-state
captures — also the honest render a motion-sensitive reader gets), and the component's compose
fallback tightened 1600→600ms for non-scrolling consumers generally.

**Regression guard**: `tests/gates/gate-29-reflow.spec.ts` (10 assertions: docs article ≥90% viewport
at 320/375 ×3 routes; run-code no hidden horizontal content [WCAG 1.4.10]; portrait/landscape swap;
copy-button overlay). **Red-proven**: reinstating the F1 defect flips 6 assertions red. gate-23
updated same-diff for the twin-pair. Suite: **414 passed** (9 claim xf remain — P1.1's lane).
