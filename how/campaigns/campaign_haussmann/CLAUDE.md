---
type: campaign_governance
campaign_id: campaign_haussmann
persona: rosetta
created: 2026-08-16
updated: 2026-08-21
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
13. **Read a mission's acceptance criteria against each other BEFORE its budget is ratified.** One pass, one question: *can the stated method satisfy the stated test?* **Two consecutive missions failed this.** P4.5a's a/b split lived only in two frontmatter *comment strings* while the mission body stayed 100% P4.5b content. P3.1's AC1 named a method — *"twin generation from the content collections"* — that **could not** satisfy AC4's test, machine-eye item 3, because all ten of that item's probe targets are bespoke `.astro` pages with no markdown source; executed as written it would have emitted 120 twins, reported done, and left 10/10 probes at 404. In both cases a **DP ratified a budget against a spec whose halves nobody had read together**. The close cascade checks that criteria are *met*; nothing checks they are *mutually satisfiable*. This is that check, and it costs one pass. *(Filed upstream as `idea_upstream_mission_ac_coherence_check`.)*
14. **A verification instrument is not believed until it has been demonstrated to fail, and it must assert it reached the thing it claims to check.** `check_live_headers.mjs` printed `live-headers OK — no drift` having read **Vercel's SSO login page**: it follows redirects, checks header *names* only, and `deploy_adna.sh` pointed it at the per-deployment `*.vercel.app` URL — which Deployment Protection gates on **prod as well as preview**. Since **P0.2** built it, it had never once verified `adna.network`, and it would have passed for a deployment with no headers at all. Both fixed (assert `res.ok` + same-origin; prod verifies the alias) and red-tested. The general rule is the one this campaign already applies to gates — P3.1 red-proved 13 assertions by mutation, and three of its **own** new assertions turned out to be wrong — extended to every instrument whose green anyone acts on. **⚠ Consequence still open: P0.2's header evidence was produced by this instrument before either defect was known, and needs re-reading against the alias** (routed → P4.4 **F-h**). *(Filed upstream as `idea_upstream_verification_instrument_discipline`; it also answers Hopper's ADR-011 A4 §6, which flags the near-identical clause as standard-shaped and ours to call.)*
15. **The claim register cannot see a claim that went stale, and outbound memos must date their own pins.** Two faces of one blind spot, both surfaced by peers on 2026-08-21.
    - **Inbound (Ilmarinen, Forgejo.aDNA):** `adna.network/vaults/forgejo/` publishes `status: genesis` for a service **live since 2026-08-08**. The register catches truncation, jargon and internal paths — all detectable *from the copy itself* — and is **structurally blind to a well-formed sentence that is simply no longer true**. In their words: *"a stale row and a broken row look identical from the outside, and only the named vault can tell you which one you have."* Registry rows are therefore **owner-attested, not agent-audited**: a `vaults.json` correction is a **data ask staged to Hestia** (convention 5 / pt19), never an edit here.
    - **Outbound (Venus, Network.aDNA — their F-S395-02):** a memo delivered byte-identical and stamped correctly can still be wrong by morning if it pins a mutable external value. Their v0.4.1 publish request was superseded by v0.4.2 **and** v0.4.3 within a day. Divergence checking is structurally blind — *both copies agree perfectly and both are wrong*. **Any memo this vault sends that pins a version, hash, count or live endpoint states the pin AND its supersession condition on its face**, so the recipient can tell without asking whether it still holds.

## What this campaign protects (do not regress)

The honesty strata (`/about`, `/community` empty-state candor, zero-count displays) · true load-bearing numbers · hero visual quality · dark/light parity · axe-0 record · perf 97–100 · curated llms.txt · the graph keyboard-twin pattern.

## Mission index

`missions/` — 27 files `mission_haussmann_p{0..5}_*.md`; paste-ready prompts in `missions/session_prompts_haussmann.md`.

**⚠ Since ⛩ DP6 (2026-08-19), phase order is NOT claim order.** Decade 2 runs the ruled sequence in
convention 11. **Next mission: `P3.3`** (`mission_haussmann_p3_3_mcp_server.md`, `in_progress` since
2026-08-21 — O0 open) — P4.5a ✅, P3.5 ✅ (2026-08-20), P3.1 ✅ and P3.2 ✅ (2026-08-21, deployed)
are closed. Claiming "the next
open mission in phase order" still lands wrong further down the sequence (P3.4 is followed by P4.1, and
P4.4 precedes P4.3), so read convention 11's order, not the numbering. Decade-1 leftovers still open
regardless of that sequence: **P0.4** (`active`, awaiting Aspasia's ack — her lane) and **P2.6**
(`in_progress`, awaiting ⛩ **O0b**, the operator-gated TTFS run).

> ✅ **P3.2 is `completed` AND DEPLOYED** (2026-08-21, `tree=861e871`, deploy record
> `2026-08-22T00:29:33Z`). `/vaults.json` and `/api/registry.v1.json` serve **200**, byte-identical,
> live on `adna.network`; the delta packet is re-stamped `probe_scope: live_alias_verified`.
>
> ⚠ **The warning this replaces is worth keeping in view** — for a day, P3.2 read `completed` while
> its entire surface 404'd in production, because the mission's ship-scope ruling stopped at green
> gates. **`completed` is a statement about a mission, never about the live site.** Two missions now
> carry a deploy that landed in a *later* session than the mission that built it (P3.2 here; P4.5a
> and P3.5 shipped in-session). When a mission halts before deploy, say so here, and strike it here
> when it ships — do not leave a reader to infer it from a status field that cannot express it.

> **This pointer had gone stale three times when that was written, and went stale a fourth** (it read "P4.5a is next" from 08-19 until P3.1's O0 on
> 08-20, two missions after that was true). That is §1.8's own finding — *an index believed over the
> artifact it points at* — recurring inside the campaign that named it. **The fix is not to trust this
> line: `missions/session_prompts_haussmann.md` marks completions, and each mission file's `status:` is
> the artifact.** A cold agent should confirm the next mission from a `status:` field before claiming it.
> Whoever closes a mission updates this line in the close cascade — the same commit, per the same-diff
> reflex (convention 7), because a mission index is route-coupled to mission state in exactly the way
> ADR-057 governs for routes.
