---
type: campaign_governance
campaign_id: campaign_haussmann
persona: rosetta
created: 2026-08-16
updated: 2026-08-16
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
4. **WebForge is the pattern source — consumer, never fork.** Consume via `how/federation/webforge/` (P0.3 creates it); a pattern we need that WebForge lacks gets authored back (`patterns_to_author:`), never solved locally. Read gate bars from `lighthouse_profiles.json`, never transcribe (KW-14). Momus/reviewer independence: the builder never self-certifies.
5. **Honor pt19**: never run `sync:vaults` or hand-edit `site/src/data/vaults.json` — registry *data* regen is Hestia-owned + operator-gated. This campaign fixes projection *code* and stages data asks as memos.
6. **Build discipline**: `npx astro build` (never `npm run build` — prebuild regenerates committed data). Deploy: `npx astro build` → `VERCEL_TOKEN=$SS_VERCEL_TOKEN vercel --prebuilt --prod`; token env-var only, never `--token` (leak history); record every deploy ID in the session log + STATE (the 08-11 unrecorded deploy is the cautionary instance). Never co-run Lighthouse with the gate preview server. Port 4321 = the site preview; WebForge's port register claims 4321 for its own archetype — never co-run against WebForge suites.
7. **Same-diff gate law (ADR-057)**: any commit that changes a route, slug, or rendered count updates every gate/audit spec that hardcodes it in the same commit. The @audit sweep + gate-20/21 fixtures + `claim_trace_manifest.json` are route-coupled by design.
8. **No literal-pinned live data in tests** (WebForge KW-8/FR-K): derive fixtures from the build snapshot.
9. **Constraint set** (from [[dependency_map]]): aDNALabs **ADR-025** — community.adna.network is HUMAN-ONLY until federation GA; Fluxer **SO#8** — no LLM syndication of conversations, agents always disclosed; **counsel embargo** — no protocol publishing/links until D-8 rules (copy fits inside the embargo); credentials by broker name only (`SS_VERCEL_TOKEN`, `CLOUDFLARE_API_TOKEN`…), values never in the conversation.
10. **Cross-vault writes are memos, never direct edits** (Rule 10). Peer lanes: Aspasia (Fluxer instance), Hestia (registry data + credentials + node inventory), Vitruvius (WebForge patterns + deploy infra), Berthier (HQ index), Noether (protocol embargo), Mondrian (diagram asks — queue-contention, not free pulls).
11. **Decade discipline**: P3–P5 missions are provisional until the P2.6 re-plan ratifies them. Phase gates are human gates — never auto-advance (SO-1). Every mission: AAR before `completed` (SO-5); token budget declared + actual recorded (ADR-016/SO-11).
12. **Sessions**: Tier-1 file per session; `grounded_in:` evidence re-verified on disk at execution time (recon-at-execution — the genesis evidence ages).

## What this campaign protects (do not regress)

The honesty strata (`/about`, `/community` empty-state candor, zero-count displays) · true load-bearing numbers · hero visual quality · dark/light parity · axe-0 record · perf 97–100 · curated llms.txt · the graph keyboard-twin pattern.

## Mission index

`missions/` — 27 files `mission_haussmann_p{0..5}_*.md`; paste-ready prompts in `missions/session_prompts_haussmann.md`. Claim next open mission in phase order unless the operator directs otherwise.
