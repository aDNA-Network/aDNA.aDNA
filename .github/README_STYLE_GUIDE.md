# README Style Guide — aDNA First-Contact Surfaces

> Companion to [`site/src/content/reference/writing-guidelines.mdx`](../site/src/content/reference/writing-guidelines.mdx) (general aDNA prose) and [`site/src/content/reference/visual-identity-v2.mdx`](../site/src/content/reference/visual-identity-v2.mdx) (visual identity). This guide governs **README-class first-contact surfaces** — the doc a reader sees first, where every paragraph competes for attention against a back button.

## Purpose

A reader has three seconds before they decide whether to keep reading. A first-contact surface — `README.md`, `get-started`, hub landing pages, persona-path docs — must answer one question in those three seconds: **what is this and why would I keep reading?**

This guide codifies decisions ratified across M5.4 (D12 Clarity & Conciseness) and M5.5 (D14 README & First-Contact Polish) — specifically the **content-class taxonomy** (M5.4 lightweight AAR Finding; load-bearing across 6+ cycles in M5.5) and the **persona-led structural pattern** (M5.1 cross-target synthesis §3 D14 row; Rust + Stripe + Astro + Tailwind first-page precedents).

Consult this guide when authoring or revising any README-class surface. The general clarity rules in [`writing-guidelines.mdx`](../site/src/content/reference/writing-guidelines.mdx) §1 still apply; this guide layers README-specific discipline on top.

---

## 1. Content-class taxonomy

Every first-contact surface belongs to one of four content classes. Each class has a reduction ceiling that bounds how aggressively you may cut during a polish pass.

| Class | Examples | Reduction ceiling | Rationale |
|---|---|---|---|
| **Canonical-content** | `README.md` elevator pitch + Problem + Triad + Quick Start; tutorial procedural steps | **5-20%** | Carries load-bearing first-contact framing or copy-paste procedural artifacts. Aggressive cuts strip the meaning. |
| **Adopter-conversion** | `get-started` pages; persona-path docs; standard reading guides | **30-70%** | Designed to convert a curious reader into an active user. Wordy onboarding prose is the most common bloat source. Cut hard. |
| **Reference** | `agent_first_guide.md`; `migration_guide.md`; deep specification docs | **25-35%** | Procedural-walkthrough content with embedded code blocks. Tighten meta-narrative; preserve copy-paste artifacts. |
| **Nav** | Hub landing pages (`/learn/`, `/use-cases/`); ToCs; card grids | **No fixed ceiling** | Card-grid-dominant pages with minimal prose. Polish to tight; don't measure by line count. |
| **New-artifact** | NEW style guides; NEW idea files; NEW AAR docs | **Bounded by spec** | Mission spec declares an absolute line target (e.g., ~80-120 lines for a style guide). Authoring discipline replaces reduction discipline. |

**Use:** declare the content class in the cycle spec before starting. The class determines the reduction target and whether the cycle ends at "line band met" or "additive value added".

---

## 2. Persona-led structural pattern

A README-class surface routes a reader from "what is this?" to "how do I use it?" in a predictable structural sequence. Five precedents (Rust + Stripe-first-page + Astro + Tailwind + Linear) converge on this shape:

1. **Elevator pitch** — single bold sentence + 1-2 paragraphs naming the problem and the solution. ≤ 100 words total.
2. **Problem** — what fails without this tool. Tabular form preferred (4 failures × what-happens column).
3. **Personas** — who this is for. Tabular form (persona × what they store in each triad leg). 4-6 personas maximum.
4. **Solution** — the architecture or method, named and demonstrated. Code blocks where copy-paste is the goal; tables where structure is the message.
5. **Reference** — Further Reading. Tabular form (document × what it covers). Link to deep docs; do not duplicate them.

This sequence is honored verbatim in the current `README.md`. New first-contact surfaces should adapt to the same shape unless the surface has a narrower scope (e.g., a single persona-path doc may collapse Problem + Personas into a one-paragraph hook).

---

## 3. Scan-affordance ToC (top-of-doc)

Add a top-of-doc ToC when the surface has **> 15 h2 sections** and serves as a GitHub landing page. Use 5 reader-intent buckets:

- **Start here** — orientation + Quick Start (3-5 links)
- **Architecture** — model + ontology + structure (3-5 links)
- **Operations** — installation + usage + integration (3-4 links)
- **Reference** — deep docs + FAQ + Further Reading (4-6 links)
- **Community** — contributing + governance + license (3-5 links)

Render as dot-separated inline links under bold-label rows. Insert at the post-elevator-pitch hinge (between the lead quote and the first content `## h2`). Budget: **+15-20 lines net** for the entire ToC block including separators.

Canonical instance: `README.md` cycle 127 (M5.5 S3). Grouped form beats flat ToC for projects with many h2 sections; bucket labels beat raw structural categories for first-contact UX.

---

## 4. 5-lens conciseness pass for README-class surfaces

Run the 5-lens conciseness pass from [`writing-guidelines.mdx`](../site/src/content/reference/writing-guidelines.mdx) §4 at the Step-6 validate phase of every cycle. The lenses, applied to README-class surfaces:

1. **Word-count outliers** — flag paragraphs > 80 words; rewrite or split.
2. **Top-outlier dual pass with Anti-Bloat + UX Writer** — apply Conciseness and Clarity lenses simultaneously to the longest paragraph.
3. **Glossary tightening** — collapse jargon to a glossary link on first appearance.
4. **Clarity-checklist scan** — every paragraph against the [`writing-guidelines.mdx`](../site/src/content/reference/writing-guidelines.mdx) §1 checklist (long sentence / long paragraph / passive voice / undefined jargon).
5. **Reference-collection scan** — every internal link validated; every external link reviewed for staleness.

Discharge each lens explicitly in the cycle JSON (`step_6_validate.five_lens_conciseness_pass`). This is the **continuous-discipline overlay** post-graduated at M5.4 close (current margin: 5.33×).

---

## 5. Cross-references

- [`writing-guidelines.mdx`](../site/src/content/reference/writing-guidelines.mdx) — general aDNA prose discipline (clarity checklist + voice precedents + conciseness contract + validation gate)
- [`visual-identity-v2.mdx`](../site/src/content/reference/visual-identity-v2.mdx) — visual identity for prose surfaces (color, typography, icons, diagrams)
- [`m51_cross_target_synthesis.md`](../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m51_cross_target_synthesis.md) §3 — D14 LIFT/AVOID precedent table (Rust + Stripe + Astro + Tailwind + Linear)
- [`aar_decadal_d11_visual_identity.md`](../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_decadal_d11_visual_identity.md) — visual identity decadal AAR (D11 precedent for D14 decadal AAR shape)

---

*Authored at M5.5 S3 cycle 128 (2026-05-29). 3rd canonical instance of doc-authoring sub-shape (after D11 `visual-identity-v2.mdx` cycle 109 + D12 `writing-guidelines.mdx` cycle 111 pre-S1 substrate). Update at decadal AAR cadence (D17 + D20) or when a new LIFT/AVOID precedent surfaces from a future cross-target research mission.*
