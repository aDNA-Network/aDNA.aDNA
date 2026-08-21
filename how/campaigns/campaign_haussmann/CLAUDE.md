---
type: campaign_governance
campaign_id: campaign_haussmann
persona: rosetta
created: 2026-08-16
updated: 2026-08-19
status: active
last_edited_by: agent_rosetta
tags: [campaign_governance, haussmann]
---

# HAUSSMANN campaign governance — read before any mission

> **⛔ ACTIVATION GATE (read first).** Campaign **execution is authorized only after the charter's §7.7
> ratification** (Gate C / DP1, operator-signed). The authority chain: `campaign_haussmann.md` frontmatter
> `status:` + its ratification blockquote, mirrored in the vault-root `STATE.md` `campaigns:` field. If the
> charter still reads `status: planning` / ratification `proposed`, **no mission may execute** — report and
> halt. This governance file being `active` means the *conventions* are in force, not that execution is.

**Charter**: [[campaign_haussmann]] (§7.7 ratification governs activation). **Assessment doctrine**: `directives/OPERATION_VITRUVIUS_review_instrument.md` (D1–D12 dimensions, S1–S4 severities, provenance tags). **Evidence base (read before your mission's lane)**: `artifacts/gate_b_dossier.md` → then the packet files your mission's `grounded_in:` cites. **Mission schema**: `missions/_mission_template_haussmann.md`.

## Path + notation conventions (cold-start contract)

- **Path roots**: `directives/` · `artifacts/` · `evidence/` · `missions/` are **campaign-dir-relative** (`how/campaigns/campaign_haussmann/`); `what/…` · `how/…` · `who/…` · `site/…` · `scripts/…` are **vault-root-relative** (`~/aDNA/aDNA.aDNA/`).
- **Wikilinks** resolve Obsidian-style by filename within the vault; key targets: [[campaign_haussmann]]=the charter here · [[gate_b_dossier]]/[[WEBFORGE_ORIENTATION]]/[[webforge_pattern_register]]/[[dependency_map]]/[[instrument_ingestion]]=`artifacts/` · [[hypotheses_resolved]]=`evidence/` · [[doctrine_visual_inspection]]=`what/doctrine/doctrine_visual_inspection.md` · `[[context_*]]`=`what/context/`.
- **Notation**: `⛩` = an operator (human) gate — work halts there · `DPn` = charter Decision Point n · `SO-n`/`SO#n` (interchangeable) = this vault's Standing Orders (root `CLAUDE.md`) · `Hn`/`Nn`/`F-n` = hypothesis / new-finding / visual-finding IDs (defined in [[hypotheses_resolved]] + `evidence/captures_curated/visual_findings.md`) · `KW-n`/`FR-x` = WebForge known-weakness/floor-raise IDs ([[webforge_pattern_register]]) · `pt19` = the honor-pt19 registry rule (convention 5) · "Tier-1 session file" = the vault session protocol (`how/sessions/AGENTS.md`) · executor tiers `fable|opus|sonnet` = model classes per **aDNA.aDNA ADR-025** (`what/decisions/adr_025_iii_decadal_coordination.md`) — **distinct from aDNALabs ADR-025** (the community human-only ruling, convention 9; always qualify which vault's ADR-025).
- **Provenance tags**: `[D]` directly observed · `[I]` inferred · `[R]` peer-vault record · `[A]` assumption · **`[D-syn]` = directly observed output of a disclosed synthetic (agent) instrument** — a pre-screen stand-in, never a substitute for the human instruments at P0.1/P5.1.

## Output contract (where mission artifacts go)

- **Session files**: `how/sessions/active/session_stanley_<YYYYMMDD>_<HHMMSS>_haussmann_<mission-slug>.md` (Tier-1 per `how/sessions/AGENTS.md`; move to `history/YYYY-MM/` at close).
- **Mission working artifacts** (memos, design notes, kits, evidence): `artifacts/p<phase>_<n>/` inside the campaign dir (e.g. P0.1's candidates memo → `artifacts/p0_1/candidates_memo.md`); new captures → `evidence/` alongside the genesis packets.
- **ADRs** → `what/decisions/` (numbering continues) · **coordination memos** → `who/coordination/` · **site changes** → `site/` on ratified missions only.

## Standing conventions (every session, every mission)

1. **Honesty is the aesthetic.** Claims move DOWN to verifiability, never up to ambition. The claim register (`evidence/claims/claim_register.md`, living) is the arbiter; aspirational present tense is a defect (anti-pattern 7.5); every count a page narrates must be derived, not typed (WebForge KW-14).
2. **Provenance tags** `[D]/[I]/[R]/[A]` on every finding and every evidence citation. Untagged assertions are inadmissible.
3. **Headless-first visual work** ([[doctrine_visual_inspection]]): T0 `scripts/visual_capture.mjs` (6 canonical viewports × dark+light; `--axe` covers themes[0] — run twice for both) → T1 `@playwright/mcp` → T2 only by escalation with a stated fallback. Visual findings without captures are inadmissible.
4. **WebForge is the pattern source — consumer, never fork.** Consume via `how/federation/webforge/` (P0.3 creates it); a pattern we need that WebForge lacks gets authored back (`patterns_to_author:`), never solved locally. Read gate bars from `lighthouse_profiles.json`, never transcribe (KW-14) — **⚠ UNFOLLOWABLE TODAY; DO NOT TREAT AS A LIVE RULE.** `find . -name lighthouse_profiles.json` returns **0 hits** vault-wide `[D]` (P2.6, 2026-08-19), so **every gate-19 bar in the suite is a transcription** — precisely what this clause forbids. ⊳ **D-E** ruled at ⛩ DP6: **mirror the file into `how/federation/webforge/` at P4.4**; amend this convention **only** if Vitruvius declines. Until then transcribe **and name the source you transcribed from**. Momus/reviewer independence: the builder never self-certifies.
5. **Honor pt19**: never run `sync:vaults` or hand-edit `site/src/data/vaults.json` — registry *data* regen is Hestia-owned + operator-gated. This campaign fixes projection *code* and stages data asks as memos.
6. **Build discipline**: `npx astro build` (never `npm run build` — prebuild regenerates committed data). Deploy via `site/scripts/deploy_adna.sh prod` — the only sanctioned path; token env-var only, never `--token` (leak history); record every deploy ID in the session log + STATE (the 08-11 unrecorded deploy is the cautionary instance). Never co-run Lighthouse with the gate preview server. Port 4321 = the site preview; WebForge's port register claims 4321 for its own archetype — never co-run against WebForge suites.
   - **`npx astro build` does NOT inject headers, installer routes, or redirects.** Those are post-build steps the deploy script owns (`inject_headers` · `inject_installer_headers` · `inject_redirects`), writing into `.vercel/output/config.json`. A bare build therefore leaves gate-30's redirect assertions red on a perfectly good tree — run `node scripts/inject_redirects.mjs .` after building if you are running the suite outside a deploy. **Diagnose a red gate by asking which step produces the thing it asserts, before changing anything** (P2.5 `[D]`).
   - **The changelog cadence prompt is date-keyed and will not fire twice in a day.** It compares the newest `src/content/changelog/*.md` filename to today's date, so a same-day second deploy gets no nudge at all. P2.3 shipped with no entry because the prompt was skipped; a second same-day ship would not even be asked. Extend the day's entry deliberately, and measure `description` against the schema's **160-char** limit before building (P2.5 `[D]`).
   - **Never vendor `~/aDNA/CLAUDE.md` (or anything outside `.adna/`) to a public surface.** The node's live router names vaults marked *local-only, NO remote*. The publishable equivalent is `.adna/how/templates/template_workspace_claude.md`, which is also the honest one — it is the router a clone actually ships. Note the converse, so the guard is not over-applied: those vault **names** are public by design via the registry (pt19), so a site-wide name match false-positives; detect a wrong *source* by router-only markers instead (P2.5 `[D]`).
7. **Same-diff gate law (ADR-057)**: any commit that changes a route, slug, or rendered count updates every gate/audit spec that hardcodes it in the same commit. The @audit sweep + gate-20/21 fixtures + `claim_trace_manifest.json` are route-coupled by design.
   - **Know what same-diff cannot see.** It is coupled to *identifiers*, so it is structurally blind to two classes. **Hardcoded keys** that are not routes (P2.1 `[D]`: `slot('Astro.aDNA')`, `REGISTRY_SLUGS` — a missed lookup was `.filter(Boolean)`-ed into a silent drop; prefer a loud throw for any curated list). And **a false statement in a sentence** (P2.5 `[D]`: a fabricated transcript was cut while the identical false mechanism stayed asserted twice in surrounding prose, in the page's own voice). **After removing a defect, grep the *rendered* output for what the defect claimed — not just for the artifact that claimed it.**
8. **No literal-pinned live data in tests** (WebForge KW-8/FR-K): derive fixtures from the build snapshot.
9. **Constraint set** (from [[dependency_map]]): aDNALabs **ADR-025** — community.adna.network is HUMAN-ONLY until federation GA; Fluxer **SO#8** — no LLM syndication of conversations, agents always disclosed; **counsel embargo** — no protocol publishing/links until D-8 rules (copy fits inside the embargo); credentials by broker name only (`SS_VERCEL_TOKEN`, `CLOUDFLARE_API_TOKEN`…), values never in the conversation.
10. **Cross-vault writes are memos, never direct edits** (Rule 10). Peer lanes: Aspasia (Fluxer instance), Hestia (registry data + credentials + node inventory), Vitruvius (WebForge patterns + deploy infra), Berthier (HQ index), Noether (protocol embargo), Mondrian (diagram asks — queue-contention, not free pulls).
11. **Decade discipline**: ~~P3–P5 missions are provisional until the P2.6 re-plan ratifies them.~~ **DISCHARGED ⛩ DP6 2026-08-19** — `p2_replan.md` is `accepted`, all 12 P3–P5 missions are `queued`, **Decade 2 is open**. Execution order is the ruled one, **not mission numbering**: **P4.5a → P3.5 → P3.1 → P3.2 → P3.3 → P3.4 → P4.1 → P4.2 → P4.4 → P4.3 → P4.5b → P5.1 → P5.2** (⊳ D-A put P4.5's copy increment first; the re-plan put P3.5 first within P3). Phase gates are human gates — never auto-advance (SO-1). Every mission: AAR before `completed` (SO-5); token budget declared + actual recorded (ADR-016/SO-11).
   - **`depends_on: p2_6_midscore` does NOT block any Decade-2 mission.** Every P3–P5 mission declares it, and **P2.6 will stay `in_progress` indefinitely** — it is open solely for ⛩ **O0b**, the operator-gated TTFS run on a fresh macOS account, which produces evidence (D3, R-34/R-63) that no build mission consumes. **⛩ DP6 is the gate that unblocks Decade 2, not P2.6's completion.** P4.5a and P3.5 both executed under this condition. *(Written down at the 2026-08-20 wind-down after review found it was nowhere: read literally, a cold agent halts; overridden silently, an agent learns `depends_on` is decorative. The rule is neither — it is that **this one dependency is discharged by the DP6 signature**, and any other unmet `depends_on` still means stop and ask.)*
12. **Sessions**: Tier-1 file per session; `grounded_in:` evidence re-verified on disk at execution time (recon-at-execution — the genesis evidence ages).

## What this campaign protects (do not regress)

The honesty strata (`/about`, `/community` empty-state candor, zero-count displays) · true load-bearing numbers · hero visual quality · dark/light parity · axe-0 record · perf 97–100 · curated llms.txt · the graph keyboard-twin pattern.

## Mission index

`missions/` — 27 files `mission_haussmann_p{0..5}_*.md`; paste-ready prompts in `missions/session_prompts_haussmann.md`.

**⚠ Since ⛩ DP6 (2026-08-19), phase order is NOT claim order.** Decade 2 runs the ruled sequence in
convention 11 — **`P4.5a` is the next mission**, not `P3.1`. Claiming "the next open mission in phase
order" would start the decade on the wrong one. Decade-1 leftovers still open regardless of that
sequence: **P0.4** (`active`, awaiting Aspasia's ack — her lane) and **P2.6** (`in_progress`, awaiting
⛩ **O0b**, the operator-gated TTFS run).
