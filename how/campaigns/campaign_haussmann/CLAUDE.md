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
    - ⭐ **AMENDMENT (2026-08-21, P3.3 O3) — the pass must be COMPLETE and must RECORD ITS COVERAGE. The question above was never the gap.** P3.3 ran this pass, in force, and still shipped **DEFECT 3**: AC1's method (an npx **stdio** server) cannot move AC4's test (`machine_eye` item 11, probed as a **URL** *and* as a text search of the site) — built exactly as worded, the mission reports done against a checklist item that never moved.
      ⚠ **P3.3's own mission file diagnosed this as *"convention 13 does not yet ask whether each stated method reaches the surface its test probes."* That diagnosis is false, and it is corrected here.** The convention asks precisely that question, in its second sentence, and **P3.1's AC1↔AC4 — a method that would have left 10/10 probes at 404 — is already logged above as the identical shape, one mission earlier.** The right question was written down, its worked example was the same failure mode, and the pass missed it anyway.
      **What actually failed is scope and visibility.** P3.3's pass checked **AC2↔AC3** and cleared **AC4's count**, then stopped — and *recorded no coverage*, so a partial pass read as a clean bill of health to everyone downstream, including the operator who ratified the budget on it. ⇒ **Two obligations, both cheap:** run the question against **every** (method-bearing criterion × test-bearing criterion) pair, not the pairs that happen to look suspicious; and **state in the mission body which pairs were checked**, so an incomplete pass is legible as incomplete. *(The general form — a correct instrument applied partially, reporting like a complete one — is convention 14's family, and this is its third member.)*
14. **A verification instrument is not believed until it has been demonstrated to fail, and it must assert it reached the thing it claims to check.** `check_live_headers.mjs` printed `live-headers OK — no drift` having read **Vercel's SSO login page**: it follows redirects, checks header *names* only, and `deploy_adna.sh` pointed it at the per-deployment `*.vercel.app` URL — which Deployment Protection gates on **prod as well as preview**. Since **P0.2** built it, it had never once verified `adna.network`, and it would have passed for a deployment with no headers at all. Both fixed (assert `res.ok` + same-origin; prod verifies the alias) and red-tested. The general rule is the one this campaign already applies to gates — P3.1 red-proved 13 assertions by mutation, and three of its **own** new assertions turned out to be wrong — extended to every instrument whose green anyone acts on. **⚠ Consequence still open: P0.2's header evidence was produced by this instrument before either defect was known, and needs re-reading against the alias** (routed → P4.4 **F-h**). *(Filed upstream as `idea_upstream_verification_instrument_discipline`; it also answers Hopper's ADR-011 A4 §6, which flags the near-identical clause as standard-shaped and ours to call.)*
15. **The claim register cannot see a claim that went stale; outbound memos must date their own pins; and a memo asking for an artifact must say where that artifact is from the recipient's root.** ~~Two faces~~ **Three faces** of one blind spot — *every check we own measures the memo, and none of them measures the world the memo describes.* All three surfaced by peers on 2026-08-21.
    - **Inbound (Ilmarinen, Forgejo.aDNA):** `adna.network/vaults/forgejo/` publishes `status: genesis` for a service **live since 2026-08-08**. The register catches truncation, jargon and internal paths — all detectable *from the copy itself* — and is **structurally blind to a well-formed sentence that is simply no longer true**. In their words: *"a stale row and a broken row look identical from the outside, and only the named vault can tell you which one you have."* Registry rows are therefore **owner-attested, not agent-audited**: a `vaults.json` correction is a **data ask staged to Hestia** (convention 5 / pt19), never an edit here.
    - **Outbound (Venus, Network.aDNA — their F-S395-02):** a memo delivered byte-identical and stamped correctly can still be wrong by morning if it pins a mutable external value. Their v0.4.1 publish request was superseded by v0.4.2 **and** v0.4.3 within a day. Divergence checking is structurally blind — *both copies agree perfectly and both are wrong*. **Any memo this vault sends that pins a version, hash, count or live endpoint states the pin AND its supersession condition on its face**, so the recipient can tell without asking whether it still holds.
    - **Reachability (added 2026-08-21, P3.3 O3 — the seam Venus and this desk found from opposite ends).** A memo can be **delivered, byte-identical, correctly stamped, current — and ask for an act the recipient cannot perform.** Venus's v0.4.3 publish request was accurate in every particular; the artifact simply was not on this machine, and `dist/` is gitignored, so nothing carried it. ⭐ **The sharpest form of the blind spot, because every existing check passes on it**: `outbound_stale()` says delivered, `cmp` says byte-equal, `pin_supersession` says current — three verifiers green, and the memo is not actionable, *because actionability is a property of the recipient's filesystem and every check we own measures the memo.*
      **The habit, adopted here and by Venus jointly: any memo this vault sends that requests an artifact states that artifact's path from the RECIPIENT's root**, so the recipient can resolve it before agreeing rather than discovering the gap by trying.
      ⛔ **No checker is built for this, deliberately, and the restraint is the ruling.** Venus proposed one (a `resolve`-at-delivery test in the same command as the `cp`) and then declined to build it, for a reason this campaign independently holds: *three verifiers have shipped wrong on their first live run in two weeks*, and convention 14 says an instrument is not believed until it has been demonstrated to fail. A fourth authored at the tail of a wind-down would be the fourth. **The habit costs a sentence and cannot itself be wrong; the checker costs a sitting and can.** If it is ever built, it is built with its controls, in a sitting of its own.
      ⚠ **This desk was wrong about it first.** We told Venus *"we do not think this one gets a verifier either"*; they disagreed, persuasively, and the distinction that resolved it — habit now, instrument later and only with controls — is theirs, not ours.

## What this campaign protects (do not regress)

The honesty strata (`/about`, `/community` empty-state candor, zero-count displays) · true load-bearing numbers · hero visual quality · dark/light parity · axe-0 record · perf 97–100 · curated llms.txt · the graph keyboard-twin pattern.

## Mission index

`missions/` — 27 files `mission_haussmann_p{0..5}_*.md`; paste-ready prompts in `missions/session_prompts_haussmann.md`.

**⚠ Since ⛩ DP6 (2026-08-19), phase order is NOT claim order.** Decade 2 runs the ruled sequence in
convention 11. **Current mission: `P3.3`** (`mission_haussmann_p3_3_mcp_server.md`, `in_progress` —
**O0 ✅, O1 ✅ and O3 ✅ (reduced) 2026-08-21; STILL OPEN AT ⛩ O2**, the npm publish. O3 ran *ahead*
of O2 in its pre-agreed publish-deferred form, so the mission's remaining work is O2 itself plus the
limb that rides it) — P4.5a ✅, P3.5 ✅ (2026-08-20), P3.1 ✅ and P3.2 ✅ (2026-08-21, deployed)
are closed. Claiming "the next
open mission in phase order" still lands wrong further down the sequence (P3.4 is followed by P4.1, and
P4.4 precedes P4.3), so read convention 11's order, not the numbering. Decade-1 leftovers:
~~**P0.4** (`active`, awaiting Aspasia's ack — her lane)~~ ✅ **P0.4 CLOSED 2026-08-21** (ack arrived,
AAR written, register **1/3 green**; P3.4's `depends_on` **discharged**, ⛔ its DP7 **not** fired) and
**P2.6** (`in_progress`, awaiting ⛩ **O0b**, the operator-gated TTFS run) — **the only Decade-1
leftover still open.**

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

> ⏸ **P3.3 is OPEN AT ⛩ O2 — O3 shipped ahead of it, reduced, and ✅ IS NOW DEPLOYED AND LIVE-VERIFIED.** O0
> (design → ADR-056 §mcp), O1 (build + red-tested smoke) and **O3 (reduced)** all closed 2026-08-21.
> The package `adna-mcp-server` exists at `mcp/`, verified from a fresh client process (**26 smoke
> assertions, 24 red-test mutations, all green**), and is **unpublished**.
>
> ⛔ **O2 is not merely un-GO'd — it is NOT PERFORMABLE from this node.** `npm whoami` →
> `ENEEDAUTH`; no `~/.npmrc`; no npm token in the environment; **no npm row in the Home.aDNA
> credential broker** `[D]`. There is no npm identity here for a GO to attach to; the publish needs
> an interactive operator `npm login` first. ⭐ **Fourth instance in this campaign of a gate asking
> for a GO on an outward act whose prerequisite does not exist on the performing tree** — and the
> rule naming *the credential* was written by this very mission at O0. Writing a rule down is not
> running it.
>
> **What O3 shipped (the pre-agreed AC2-deferred wording):** a homepage `machine-door` block naming
> `/llms.txt`, the `.md` twins and `/api/registry.v1.json` — all three re-probed live that day — plus
> the self-conformance sentence on the homepage for the first time. Twin count **222**, derived from
> `twin_manifest.json`. **552/552 gates**, axe **0 in both themes**, 12 captures.
>
> ⛔ **What O3 did NOT ship, and why:** no server mention, no install line, **no
> `/.well-known/mcp.json`** (still 404), no `llms.txt` MCP section. All four were pre-agreed
> conditional on the publish — a descriptor naming an unpublished package is a false claim on a
> machine surface. **`machine_eye` item 11 is UNMOVED**, and the conformance report leads with that
> rather than burying it under nine green rows.
>
> ✅ **DEPLOYED 2026-08-22T03:40:39Z, `tree=43e0280`, verified on the ALIAS** — `"itself an aDNA
> vault"` greps **1** on `adna.network` (was 0); the three named surfaces all 200; twins 10/10 no
> regression; `/.well-known/mcp.json` and `/mcp` **still 404**, correctly. Packet re-stamped
> `probe_scope: live_alias_verified`, its local-build banner **struck not deleted**. ⭐ **`machine_eye`
> item 13 flipped on a live probe, not on a status field** — and only its *placement* half; the
> machine-checkable half stays open. Item 11 remains **ABSENT** and the report still leads with it.
>
> ⭐ **The register pass caught a FALSE claim in the session's own new copy, before it shipped** —
> *"not an add-on bolted on later"*, disproved by this campaign's own mission files (twins landed
> P3.1, endpoint P3.2, both because an audit found them missing). Cut and replaced with the narrower
> structural claim. Record: `claim_register.md` **§14.1**. ⇒ The register pass is a *step*, not a
> review reflex.
>
> ⚠ **Two new debt rows**, both instrument defects found by using the instruments: **F-o** — item
> 11's text-search probe has gone noisy (`mcp` now returns 5 incidental hits in the grown
> `llms-full.txt`, was 0), so a future `grep -c` scores the item as moved when it has not.
> **F-p** — gate-17 G15's skip guard tests for `config.json`'s *existence*, not for the routes it
> asserts on, so the convention-6 workflow (`inject_redirects` alone) leaves it unskipped and
> guaranteed red, with a skip message naming the wrong remedy.
>
> ⇒ **Convention 13's gap is now correctly diagnosed, and it was NOT what this mission first said.**
> See convention 13's amendment: the question was always right; the pass was partial and recorded no
> coverage.

> **This pointer had gone stale three times when that was written, and went stale a fourth** (it read "P4.5a is next" from 08-19 until P3.1's O0 on
> 08-20, two missions after that was true). That is §1.8's own finding — *an index believed over the
> artifact it points at* — recurring inside the campaign that named it. **The fix is not to trust this
> line: `missions/session_prompts_haussmann.md` marks completions, and each mission file's `status:` is
> the artifact.** A cold agent should confirm the next mission from a `status:` field before claiming it.
> Whoever closes a mission updates this line in the close cascade — the same commit, per the same-diff
> reflex (convention 7), because a mission index is route-coupled to mission state in exactly the way
> ADR-057 governs for routes.
