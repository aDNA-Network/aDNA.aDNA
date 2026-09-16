---
type: artifact
artifact_class: design_research
created: 2026-09-15
updated: 2026-09-16
last_edited_by: agent_codex
status: proposed
campaign: campaign_garnier
tags: [design, research, garnier, quality, accessibility]
---

# GARNIER quality brief

## Direction

[D] **Current homepage direction, accepted 2026-09-16:** [[homepage_gateway_revision]]. The homepage introduces the idea, ethos, mission and current project, then offers four clear task paths. Dedicated pages provide depth. A tiny three-folder example is sufficient here; the earlier full-excerpt/eight-entry treatments below describe prior stages, not required homepage content. Preserve their source evidence without reproducing every detail on the front page.

[I] Make aDNA feel carefully made by making its content easier to inspect: a readable working example, a coherent typographic hierarchy, evidence near consequential claims and predictable next actions. Preserve the warm Tokyo Night/pixel identity and the mechanism-first P1 story. The next improvement should come from composition and precision, rather than a new decorative system.

[D] Basis: [[reference_set_garnier_20260915]] — ten sites attempted, nine reviewed on desktop and mobile — plus the primary guidance below, accessed 2026-09-15. These are proposed review criteria and implementation inputs. They neither ratify changes to [[front_page_doctrine]] nor prove improved reader outcomes. P1's candidate remains b1cf040; the formative reader protocol remains frozen.

## Prioritized design guidance

### 1. Put one understandable example beside the mechanism

[I] Show a small, source-verified vault tree and an actual instruction excerpt, with a sentence explaining their relationship. Let a reader distinguish files, agent behavior and optional sharing. Use the existing P1 example before considering a new demo. Keep explanatory text selectable; any visual should answer a question faster than prose alone. **Review:** can the engineer identify what they would create and what the agent reads?

[D/R] Linear and Mastra make the working surface visible; MCP pairs a literal definition with a diagram. NN/g recommends familiar language and recognition cues. A pictured workflow remains explanation until separately reproduced. [Usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) · [[site_linear_garnier_20260915]] · [[site_mastra_garnier_20260915]] · [[site_mcp_garnier_20260915]].

### 2. Give typography and spacing consistent jobs

[I] Preserve the existing font families and semantic tokens. Define and reuse roles for page title, section title, lead, body, code, caption and metadata. Align related text to shared edges; use larger gaps between topics than within them. Avoid shrinking essential captions to make an oversized illustration fit. **Review:** read the page with images disabled and enlarged text; hierarchy should still be clear.

[R] GOV.UK's type scale combines font size and line height, uses relative CSS units and starts new components from existing styles. Its 19px body size is a contextual precedent, not an accessibility law. [[site_govuk_garnier_20260915]] · [Type scale](https://design-system.service.gov.uk/styles/type-scale/) · [Paragraph guidance](https://design-system.service.gov.uk/styles/paragraphs/).

### 3. Make evidence easy to inspect

[I] Put the public source, version/date, responsible author or steward, and the limit of the evidence beside a substantive claim. Separate a demonstration of the file format from a measured benefit. For a small network, a few real artifacts provide more useful context than a large decorative catalog. **Review:** can the scientist locate the source and can the funder distinguish present capability from ambition?

[D/R] OWID connects purpose to research objects; Hugging Face exposes artifacts and contributor metadata. USWDS treats trust as something a service earns through its behavior and information. [[site_owid_garnier_20260915]] · [[site_huggingface_garnier_20260915]] · [USWDS principles](https://designsystem.digital.gov/design-principles/).

### 4. Let each section answer a different question

[I] Keep GARNIER's approved sequence: mechanism/example → shared inheritance → current work → standard → participation. Use a compact explanation, an annotated artifact, a research row or a contribution link according to the job. Do not make every section an equally prominent card grid. Remove repeated definitions and generic benefit paragraphs before adding content. **Review:** name the unique question answered by every section; combine sections whose answer is the same.

[D/R] Linear and Vercel vary composition; OWID uses denser groups for browseable material. NN/g's minimalist-design heuristic concerns relevance, not mandatory flat styling or a fixed number of sections. [[site_vercel_garnier_20260915]] · [[site_owid_garnier_20260915]] · [Usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/).

### 5. Make actions predict their destination

[I] Preserve the first-task/source-reading distinction. Prefer concrete labels such as Get Started, Read the standard and Inspect an example over repeated Learn more links. Explain prerequisites beside the action that needs them. Keep tutorial steps and specification reference distinct. **Review:** the visible label, destination heading and resulting action should agree.

[D/R] Stripe's task groups and GOV.UK's explicit actions supply useful precedents. GOV.UK recommends sentence-case action labels. Retain the inherited one-primary/one-secondary homepage choice as a local design decision. [[site_stripe_docs_garnier_20260915]] · [[site_govuk_garnier_20260915]] · [Button guidance](https://design-system.service.gov.uk/components/button/).

### 6. Design the mobile explanation deliberately

[I] Recompose the example for a narrow reading column; do not scale an entire desktop screenshot down until its labels disappear. Keep the same essential task and source route reachable. Bound sticky UI so it does not cover reading or keyboard focus. **Review:** inspect the first two screens, the command and its recovery path, and the final action at the canonical widths.

[D/R] Linear and Hugging Face illustrate the tiny-preview risk; GOV.UK and OWID expose the space cost of overlays. WCAG 1.4.10 requires reflow at the equivalent of 320 CSS px for vertical content, with specific exceptions for content needing two dimensions. The exception does not cover unrelated body prose. [[site_linear_garnier_20260915]] · [[site_govuk_garnier_20260915]] · [Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html).

### 7. Treat subtle text and controls as functional content

[I] Use a deliberate accent for important actions and stable semantic roles for states. Keep body copy, captions and diagram labels readable on their actual backgrounds. Verify controls in both native site themes and all required states. **Review:** measure text/background pairs and the real interactive target, not just the visible icon.

[R] WCAG AA text contrast is generally 4.5:1, or 3:1 for qualifying large text, with named exceptions. WCAG 2.5.8 specifies 24×24 CSS px targets or its spacing/equivalence/inline/user-agent/essential exceptions. A blanket 44px AA claim would be wrong. The local provider's stricter bars still govern where applicable. [[site_mastra_garnier_20260915]] · [Contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) · [Target size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).

### 8. Allow the reader to enlarge and restyle text

[I] Prefer flexible text containers and avoid fixed-height copy blocks. Test the actual code panel, graph labels, menus and status notes, not just body paragraphs. **Review:** apply the required text-spacing overrides and check for clipping or lost controls.

[R] WCAG 1.4.12 tests resilience when users set line height to 1.5× font size, paragraph spacing to 2×, letter spacing to .12× and word spacing to .16×, with language/script exceptions. It does not require those to be the site's default typography. [[site_govuk_garnier_20260915]] · [Text spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html).

### 9. Make interaction feedback and recovery useful

[I] Copy should confirm success and explain failure. A failed first-project request should distinguish installation, authentication, provider quota and project creation. Keep the next useful step close to the error. Keyboard users should reach and see the same controls. **Review:** exercise copy failure, visible focus, open/closed navigation and the recovery link.

[D/R] Mastra's prompt control and MCP's copy utility show why an action's state matters. The real P1 API-credit failure supplies our concrete recovery example. NN/g's status and recovery heuristics apply; WCAG 2.4.11 AA requires the focused component not be entirely hidden by author-created content. Fully unobscured focus is a stronger target. [[site_mastra_garnier_20260915]] · [Usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) · [Focus visibility](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html).

### 10. Give motion a reason and an equivalent static state

[I] Use existing motion roles for feedback or a meaningful relationship. Keep the main explanation complete without animation; avoid scroll effects that delay access to proof. Inspect normal and reduced-motion modes separately before accepting any animated asset. No normal-motion finding is claimed by this reference pass.

[R] WCAG 2.3.3 covers disabling nonessential interaction-triggered animation and is **AAA**, not AA; automatically started motion has separate requirements. GARNIER's existing reduced-motion policy can be stricter. [[site_linear_garnier_20260915]] · [[site_ethereum_garnier_20260915]] · [Animation from interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html).

### 11. Measure speed on the surface readers use

[I] Keep proof lightweight, reserve image dimensions and avoid fetching decorative media before the useful opening content. Use existing provider-owned performance gates. Compare like-for-like local builds, then collect permitted field evidence in its owning phase. Neither T0 load time nor a Lighthouse score proves how readers experience the site.

[R] Google's Core Web Vitals guidance distinguishes loading, responsiveness and layout stability: LCP 2.5s, INP 200ms and CLS .1 at the 75th percentile, segmented by device class. These are external field benchmarks, not new transcribed local gate thresholds. [[site_vercel_garnier_20260915]] · [Web Vitals](https://web.dev/articles/vitals).

### 12. Test the changes with the people whose decisions matter

[I] Preserve the engineer, funder and scientist tasks and de-identified records. Use expert-style review to find problems worth testing; do not turn it into fabricated participant evidence. After the current P1 observations, tie each later change to a specific confusion or unmet task and repeat the affected observation.

[R] USWDS explicitly recommends involving real people early and testing repeatedly. The current site sample can generate hypotheses; it cannot replace those observations. [[site_govuk_garnier_20260915]] · [USWDS principles](https://designsystem.digital.gov/design-principles/) · [[formative_reader_pack]].

## Tips that need qualification before ingestion

- [R] **Seven navigation items is not a memory law.** NN/g explicitly rejects deriving that menu limit from short-term memory; menus support recognition. Retain the existing local cap until amended, but evaluate label overlap and task reachability rather than citing Miller as proof. [Short-term memory and web usability](https://www.nngroup.com/articles/short-term-memory-and-web-usability/).
- [R/I] **The fold matters; its percentage is not a universal constant.** The often-cited 57% is from NN/g's 2018 eye-tracking study. It supports prioritizing the opening view, not a guaranteed aDNA outcome or a requirement to cram everything above it. [Scrolling and attention](https://www.nngroup.com/articles/scrolling-and-attention/).
- [I] **A page-count or word-count cluster is descriptive.** The nine-site sample mixes a docs index, an introductory article, registries and product pages. Its ranges do not ratify an optimal homepage length. Existing GARNIER word targets remain advisory with dispositions.
- [I] **Polish is not adoption evidence.** Logos, run counts and diagrams belong to their original sites. Only verifiable aDNA evidence can support aDNA claims. Tonal placements are heuristics, not quality rankings.

## Implementation topics and owning phase

[I] These are concrete inputs to existing missions, not additional authorized phases or completed fixes:

1. **P1.2 recovery context:** clarify eligible Claude subscription sign-in versus API funding in the continuation record. Keep the exact executable string and candidate stable. A public prerequisite edit would require an observed defect, affected source/twin checks and a new candidate identity. See [[account_execution_options]].
2. **P2.1 proof and lineage:** annotated public example; source/version/author/limit beside each claim; reproducible first-task evidence. **Done when:** the three reader roles can trace the relevant claims to actual sources.
3. **P2.3 documentation review:** one task per tutorial entry; separate reference mode; consistent action labels, cross-links and error recovery. **Done when:** the labelled path and source/twin content agree.
4. **P3.1 design system:** a role sheet for existing typography, spacing, metadata, code and controls; apply through the WebForge consumer seam. **Done when:** the changed states pass native-theme, focus, reflow and text-spacing checks.
5. **P3.2 illustration slots:** readable narrow-screen artifact treatment inside the existing five-slot lineage. **Done when:** each asset has a clear explanatory/decorative role and appropriate text equivalent; no fabricated topology or evidence.
6. **P3.3 diagram/code and P3.4 motion/social:** readable diagram labels and code states, static equivalents and meaningful feedback. **Done when:** the relevant keyboard and motion states have direct evidence.
7. **P4 measurement:** verify changed surfaces with the provider bars and permitted field collection; retain lab/field/human distinctions.

[D] No palette, font, illustration slot, provider pattern, gate bar or phase status was changed by this ingestion. No public page, registry data, predecessor record or peer vault was edited.

## What this pass could not see

[D] No human sessions, task conversion, screen-reader use, real-device interaction, normal-motion behavior or field performance were measured. No foreign site's authenticated product or research claims were verified. The forty native frames cover first and subsequent views, not exhaustive pages or interaction states. Nous was blocked. The page's appearance under a light preference does not prove native theme support. Heuristic applications above remain [I], even when motivated by authoritative [R] guidance.

Related: [[reference_set_garnier_20260915]] · [[front_page_doctrine]] · [[design_doctrine_delta]] · [[campaign_garnier]].


## Accepted visual-review practice — 2026-09-16

[D] Stanley selected clean text with contained art only when useful, whole-homepage composition, and independent vision review for **each substantial visual change**. [[clean_homepage_revision]] records the accepted scope and correction. The prior inspection missed the faint illustration competing behind the homepage's reading areas; its old receipt remains preserved.

[I] **Simplicity is an acceptance criterion.** Keep imagery, texture, scrims and decorative glow outside reading areas. An allowed illustration slot is permission to use purposeful art, not a requirement to fill it. Every visual must explain something or establish useful identity; if neither purpose survives inspection, remove it. The actual project files provide distinctive identity without inventing institutional imagery. Assess both native themes as complete compositions, not merely passing color pairs.

[I] **Independent perspectives:** enterprise composition/restraint/credibility ([[reviewer_design_critic]] + [[reviewer_visual_designer]]); cognitive load/access/task order ([[reviewer_anti_bloat_editor]] + [[reviewer_accessibility_auditor]]); brand/information meaning and truthfulness ([[reviewer_brand_strategist]] + [[reviewer_information_architect]]). Use three separate vision-capable agents on the same immutable first-screen and full-page captures. They receive audience, constraints and evidence identity before seeing builder rationale or peer findings. Be demanding and constructive: preserve specific strengths, name visible evidence and consequences, and propose the smallest useful correction. No finding quota, performative harshness, invented user reactions or role-played consent.

[I] Each finding records screenshot/region, observation versus inference, severity, consequence, minimal fix, owner/disposition and reinspection condition. Resolve major issues before calling the visual increment complete. Record minor deferrals with reasons; inspect affected captures again. Green automated tests cannot certify composition. Agent critique cannot substitute for the three actual formative readers or VITRUVIUS's official scoring. Follow [[verification_recipes]] §R-VISUAL; retain the source/DOM/twin checks and frozen stimulus identity.

## Review the page's job before its polish — accepted gateway increment

[I] Assess the complete first-contact journey: can a newcomer find what aDNA is, why the project exists, who stewards it and where to go next? Every homepage block must serve orientation or navigation. Review what can move to a reached destination, not only how to style retained material. A neatly arranged catalog or manual can still fail this page's purpose. Main-content word/height comparisons inform editorial judgment; they do not prove comprehension. Keep essential qualifications with any remaining claim and verify information remains accurate at its destination.

[D] R-VISUAL's three independent perspectives now explicitly cover density, purpose and task choice. [[homepage_gateway_revision]] supersedes the old homepage keep-every-section constraint while retaining [[verification_recipes]] and actual formative-reader requirements.
