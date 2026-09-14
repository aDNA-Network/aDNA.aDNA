# VITRINE campaign governance — read before any session

> ⛔ **ACTIVATION GATE.** Execution is authorized only after the charter's §7.7 ratification
> ([[campaign_vitrine]], `status: proposed`). This file being present means the **conventions** are written
> down, not that execution is permitted. If the charter still reads `proposed`, report and halt.

**Charter**: [[campaign_vitrine]] · **Brief (read first, it is self-contained)**:
[[coord_2026_09_13_rosetta_to_codex_vitrine_design_brief]] · **Review instrument**:
`aDNA.aDNA/how/campaigns/campaign_haussmann/directives/OPERATION_VITRUVIUS_review_instrument.md` (**v1.1**) ·
**Integration**: HAUSSMANN [[mission_haussmann_gr_7_vitrine_integration]].

## Conventions

1. **Claims move DOWN to verifiability, never up to ambition.** The claim register
   (`campaign_haussmann/evidence/claims/claim_register.md`, 188 ids) is the arbiter. Aspirational present
   tense is a defect. **Every count a page narrates is derived, not typed** — and note the sharpest form:
   *a figure that shows its working looks derived*, so `50 skills (21 base + 29 project)` can sum correctly
   and be stale in all three numbers, which is exactly what happened here for months.
2. **Provenance tags on every finding** — `[D]` directly observed · `[I]` inferred · `[R]` peer record ·
   `[A]` assumption. Untagged assertions are inadmissible.
3. **Headless-first visual work** — T0 `scripts/visual_capture.mjs` (6 viewports × both themes).
   ⛔ Never assume a visible or logged-in Chrome. Visual findings without captures are inadmissible.
4. **Name the surface, and match it to the claim's verb.** *"A reader encounters X"* is a question about
   **rendered** text (the `.md` twins), not about source or HTML — they disagree in both directions.
   A negative result is only as wide as the command that produced it.
5. **Same-diff gate law (ADR-057)**: any change to a **route, slug or rendered count** updates every
   gate/audit spec hardcoding it **in the same commit**.
6. **Build discipline**: `npx astro build` — **never** `npm run build` (prebuild regenerates committed
   data). A bare build injects no redirects/headers; run `node scripts/inject_redirects.mjs .` before the
   suite outside a deploy. ⛔ **Never push, never deploy** — both are operator gates, in that order.
7. **`gate-49` runs at `maxDiffPixels: 0`.** Confirm red **first**, regenerate **in-container**, then
   **assert the control** (exactly N of 24 changed; the untouched remainder proves no leak).
   ⛔ **Masking to go green is forbidden** — masks only ever grow.
8. **No new checker at a sitting's tail.** Ruled six times in the parent campaign. If a gate is wanted, it
   gets its own sitting, with its controls. *An instrument is not believed until it has been demonstrated to
   fail — and a demonstration is only worth what it can attribute.*
9. **Single-writer lease.** A non-empty file in `how/sessions/active/` is a live peer session; do not
   co-write its declared files. Write the session file **at the open**, never at the close.
10. **Branch hygiene** — `vitrine/design`, **same working directory**. Never `git add -A`; stage explicit
    paths; commit before switching branches; `dist/`, `.astro/` and `node_modules/` are shared and
    unbranched, so a build is trustworthy only if you ran it.
11. **Archive, never delete** (SO-6) — strike stale text, keep the record. ⚠ Consequence: a struck sentence
    survives **as a quotation**, so any absence assertion must name its surface and exclude the record of
    the retirement.
12. **Proposals, not edits, for ratified text** — doctrine, ADRs and the charter move at operator gates.

## Output contract

- **Sessions** → `aDNA.aDNA/how/sessions/active/session_stanley_<UTC>_vitrine_<slug>.md`, Tier-1, filed to
  `history/YYYY-MM/` at close. ⚠ Stamps are **UTC**; the local date can differ and has mis-sorted a session.
- **Campaign artifacts** → `how/campaigns/campaign_vitrine/artifacts/`
- **Proposed doctrine / ADR amendments** → authored `status: proposed`; ADRs land in `what/decisions/`
- **Site changes** → `site/` on the `vitrine/design` branch only

## The handback GR-7 expects

A change inventory (**route/slug/count deltas called out separately**) · **every new or changed claim
enumerated** · design rationale per surface · proposals for anything ratified · a **D1–D12 v1.1 self-score
with its breakdown** (*a composite reported without its breakdown is a lie by compression*) · and **what was
not done**.
