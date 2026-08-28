---
type: artifact
artifact_id: grande_revue_dimension_reports_digest
campaign: campaign_haussmann
operation: operation_grande_revue
title: "Phase 1 dimension-report digest — raw findings as the passes land (feeder to the Mid-Campaign Review)"
created: 2026-08-28
updated: 2026-08-28
status: active
last_edited_by: agent_rosetta
session: session_stanley_20260828_135704_haussmann_grande_revue_p1
tags: [artifact, grande_revue, evidence, phase_1]
---

# Dimension-report digest (raw feeder — the Mid-Campaign Review is the ranked surface)

## D1 — Visual coherence (lead desk) `[D]`
- 42 live captures (10 top-level × 2 viewports × both themes; 11 deep × desktop × both themes),
  `evidence/captures*/`. Sampled: coherent both themes; hero panels dark-by-design (ADR-053);
  `/vaults/graph` exemplary candor. No breakage observed in sample. One probe 404 was the desk's
  own invented slug — instrument error, named.

## D2 — Accessibility (lead desk) `[D]`
- axe **0 violations**, 10 surfaces × both themes (two runs, `axeViolations` read at the object).
  P4.3 human-gated items untouched (F-v stands).

## D3 — Technical integrity (lead desk) `[D]`
- html-validate **0** over `dist/**/*.html`. Internal-link sweep **0 broken** across 226 pages
  (surface: `href="/…"` in built HTML; src/JS-built links not swept).
- ⭐⭐ **P1 — live CSP blocks the site's own font on every page, both themes.** Full console text:
  *"Loading the font 'data:font/woff2;base64,…' violates … `font-src 'self'`. The action has been
  blocked."* Blocked object: base64-inlined JetBrains Mono Variable subset in
  `dist/_astro/BaseLayout.BW1WffXN.css` (Vite inline threshold); CSP source `site/vercel.json:8`;
  live header matches. Local previews carry NO CSP ⇒ **gate-42 structurally cannot see it**. CSS
  live-vs-local md5-identical. This is P4.2's census row "the CSP self-validates against nothing"
  materializing. Candidate fixes (Phase 3): `assetsInlineLimit: 0` for fonts (CSP-preserving,
  preferred) or `font-src 'self' data:`.

## D6 — Newcomer journey (subagent, `[D-syn]` disclosed synthetic; mechanical items `[D]`)
- **P1 `[D]` — the trust page's provenance commit is local-only.** `/get-started/what-your-agent-reads/`
  pins `0364d85…` — a commit in the operator's local `~/aDNA/.adna`, never pushed; GitHub 404/422 on
  every "at the same commit" source link. Mitigation measured: all 4 vendored files are
  **byte-identical to public `raw/main`** — annotations accurate, verification mechanism broken.
- **P1 `[D]` — the /get-started TWIN serves corrupted check commands**: md emitter strips the
  `<name>` placeholder as an unknown tag → `ls ~/aDNA/.aDNA/what`, `git -C ~/aDNA/.aDNA log`,
  "Replace `` with whatever you called your project." HTML is correct; live-confirmed at
  `/get-started.md`. The agent-facing surface breaks the quickstart the machine-door advertises.
- **P1 `[D-syn]` — "Nothing is sent anywhere… no network call after the clone" is false as scoped**:
  the annotated command ends `&& claude`, which requires an Anthropic account, is paid, and sends
  the read files to the API. Prereq box never states it. Scope-clause fix.
- P2 `[D]`: homepage twin renders graph + How-it-Works as garbled run-together text
  ("aDNA.aDNARosettaIII.aDNAArgus…").
- P3s: "each prints nothing… except the last two" (command 3 also prints); orphan installer
  artifacts in dist/ with no bridge from /get-started.
- Path verified end-to-end otherwise: clone URL 200, README first-run behavior matches the page's
  promise, uninstall claim correct, disclosed-removal candor intact.

## D7 — Reader traces (subagent, five profiles, `[D-syn]`)
- **P1 — ancient-DNA disambiguation is one click too deep**: exists, well-written, on
  `/learn/what-is-adna` ("In genomics, *aDNA* usually means ancient DNA. This is not that.") but
  absent from `/`, `/about`, `/commons` — the pages the rare-disease visitor lands on. (Converges
  with P4.5b's finding; third instrument to point at the homepage.)
- P2: changelog + RSS footer-only — no "what's new" entry in the 7-item nav for returning members.
- P2: dead provenance links recur for the adoption-evaluating operator (the reader whose protocol
  IS the broken link).
- P3: homepage mid-page manifesto register (skeptic eyebrow, indulgence bought back by honesty
  stats). P3 `[D]`: `/reference` card labeled "Visual Identity v3" links `/visual-identity-v2`.
- Verdicts: skeptical dev = best-served; contributor funnel end-to-end sound (one gap: "I have a
  vault — how does it get listed?" has no explicit path); maintenance-proof surfaces strong;
  honesty register consistently reads as winning. No overclaiming found on any trace except the
  get-started network-call sentence.

## D10 — Campaign health (subagent, read-only) `[D]`
- Derived: **27 missions = 22 completed · 4 in_progress (each held open with reason on face) ·
  1 queued** — reconciles 27/27 vs STATE + index. SO#11: last 5 closes all carry estimated AND
  actual. AARs **5/5**. Session hygiene clean. Convention-13 coverage recorded on all 3 recent
  gates (22/22 · 15/15 · 26/26). Deferral gating: F-v, B2b, P2.6 O0b, P3.3 O2, F-e all properly
  gated ✓.
- **P1 — P4.4's `status:` qualifier denies the signature its own budget field records**: still says
  "nothing built, criteria NOT edited, budget NOT re-ratified … `proposed`", contradicted by its
  own frontmatter (`RE-RATIFIED A THIRD TIME 2026-08-26`), its own body (B0 ✅ `1816993`), the
  signed proposal, STATE, and the index. Index-vs-artifact class, inverted — the ARTIFACT lags.
  A cold agent obeying "READ THE QUALIFIER" would re-open a passed gate.
- **P1 — F-n discharged in fact (commit `6675442`, MANIFEST reviewed, ratchet 49→0), live on
  paper**: the register row was never struck; register's own re-derived count line (7 live) is
  stale by one — true live count **6**. The debt ledger carries the defect class it exists to fence.
- **P2 — R-124 is now a narrative-only deferral**: both named owning missions (P4.5b, P5.1)
  consumed without taking it; 0 hits in P5.1/P5.2 mission files + both signed amendments. The
  exact class P4.3's close condemned. Needs a register row or an operator routing act.
- **P2 — 2 unanswered `ack_required: true` inbound** (Hopper 08-27 forge-address; Venus 08-27
  ADR-022 vocabulary) + **4 inbound memos git-untracked** (queue not in audit trail).
- P3s: 4 August sessions with empty `token_budget_actual` (2 wave-era, 2 reconciled at mission
  level) · 2 history session filenames break the `<YYYYMMDD>_<HHMMSS>` contract · F-e clock is
  external (delivered 08-27, reply owed — branch, not block).

## D5 — Data & registry coherence (subagent) `[D]`
- **Pipeline coherent end-to-end**: local vaults.json ≡ live `/vaults.json` ≡ live
  `/api/registry.v1.json` (byte-identical, `cmp`) ≡ dist rows; rendered page 74 links; edges 14
  everywhere; connected set independently recomputed = 15. ADR-051 boundary behaves as documented.
- **All 3 WorldGenome-memo claims VERIFIED TRUE at the object**: (1) P1 `worldgenome` row is an
  empty genesis skeleton contradicting ratified identity (org_vault · Gaia · active; P0 closed
  06-10) — rendered live; (2) P2 `wga` row stale (`last_synced: 2026-05-24`, `pending`) while
  homepage + /commons feature WGA; (3) P1 vault `adr_index.md` stops at ADR-046 while
  adr_047–059 exist (13 unindexed, incl. ADR-055 whose §4 `final` depends on indexing) —
  **Rosetta-local fix, NOT a Hestia ask**.
- **P2 systemic freshness**: 56/74 rows `genesis`, 50 `last_synced: null`, 18 frozen at 05-24;
  `terminal` + `jupyter` rows undersell known-active vaults. Honesty framing holds everywhere
  (snapshot banners, "self-declared"), so the registry undersells rather than lies.
- **Hestia data asks staged (not fixed)**: worldgenome correction per memo field table · wga
  refresh · advisory terminal/jupyter status. Positive: /vaults hero's "74 context graphs — not
  74 live projects. 7 are being…" matches the derived 7 active exactly.

## D8 — Machine-agent experience (subagent) `[D]`
- Verdict 4.5/5: llms.txt genuinely curated and its self-claims verify (field_coverage,
  identical-bytes promise literally true); llms-full 969 KB labeled honestly; build stamp live;
  registry JSON CORS-open + correctly typed; `/.well-known/mcp.json` 404 as required; content
  negotiation works live (`Accept: text/markdown` → twin at page URL); rel=alternate correct;
  74/74 registry rows have served twins with honest banners.
- **The old `<strong><a>` twin defect is confirmed FIXED** (re-tested at the object); twin link
  loss on 3 sampled pages = chrome-only, material set ∅.
- P3s: `<page>/index.md` guess-form 404s (sibling `.md` is the convention, advertised correctly) ·
  build stamp not mentioned in the homepage machine door or llms.txt.

## D4 — Claim honesty (subagent) `[D]`
- **P1 — `llms.txt` still says "federating on the Lattice Protocol", present tense** — hand-typed
  prose around derived counts (`src/pages/llms.txt.ts:71`, renders at `dist/llms.txt:53`,
  live-confirmed by the lead desk). The P1.1 protocol purge (R-14) was verified **page-by-page,
  never surface-by-surface** — the agent-facing surface kept the claim the HTML pages lost. Also
  the one place the protocol story leaks as *runs now* under the embargo.
- **P2 — public mirror of `skill_onboarding` promises "Lattice Protocol marketplace … agentic
  residuals flowing back to you"** ("coming soon" the only hedge) — renders at
  `/get-started/what-your-agent-reads/skill-onboarding` + `llms-full.txt:2409`.
- P3s: register quote drift R-101 (register lags the shipped copy; fixture was re-pinned, prose
  row wasn't) + R-104 (quote un-re-pinned AND not in the 28-row gate fixture — undefended) ·
  R-55 CC-BY-4.0 residue on /commons · worldgenome row (converges with D5, understatement
  direction).
- **Sample re-verification: 11/11 verified register rows HOLD today** (live externals re-curled:
  community 200, policies 3/3, rare-archive contributors match, R-104's 404 still 404). All
  reader-facing counts trace to `network_state.ts`/data files; both empty-states + AI-persona
  disclosure intact. The one stale sentence found site-wide is the llms.txt P1.

## D9 — Story coverage (subagent) `[D]`
- (a) token economics: **HOME EXISTS** (`/learn/concepts/token-selection` + `context-optimization`),
  candor-clean; the SO-11/ADR-016 per-mission budget doctrine layer is unpublished (natural home:
  mission-decomposition pattern / design-a-mission tutorial).
- (b) convergence: **HOME EXISTS** (`/learn/concepts/convergence`), clean.
- (c) local models: **PARTIAL** — only honestly-planned registry stubs (inference, llamacppforge);
  natural home: a *planned*-framed section on `/network` (owns the L0–L3 story).
- (d) model routing: **ABSENT** — live doctrine in this very vault (`executor_tier`, model-tiered
  execution) and the only story honestly frameable **"runs now"**; cheapest add. Natural home:
  patterns/mission-decomposition or a concepts entry.
- (e) movement 3: **ABSENT deliberately** — embargo-constrained (R-14/R-15); absence is arguably
  the correct compliance state; llms.txt P1 is where it leaks. If wanted: a *planned*-framed
  horizon block on `/network` reusing the ratified "opening progressively" phrasing (currently 0
  hits corpus-wide).
