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

16. **Every live check in this campaign runs once, at deploy time, and nothing ever asks again — so
    "DEPLOYED + LIVE-VERIFIED" is a statement with a timestamp, not a standing property.** On 2026-08-23
    `adna.network` was found serving a build predating **2026-08-18**: `/api/registry.v1.json` and
    `/vaults.json` 404 (P3.2 verified them 200 on the alias the day before), `/state-of-the-network` 404
    in all three forms while the footer and the homepage's own `proofHref` link it, P2.1's and P2.2's
    redirects un-fired, the P3.3 machine-door block absent. **Ten production deploys had landed that day
    from an actor outside this vault's deploy discipline, none recorded in any `deploy_log*` fleet-wide.**
    Full record + restore: `artifacts/p4_1/finding_live_prod_regression_20260823.md`.
    - ⭐ **This is convention 14's sibling, and the sharper one.** 14 says *an instrument is not believed
      until it has been demonstrated to fail*. All four of those live verifications had been demonstrated —
      they were **honest when they ran**. The gap is that **nothing re-runs them**, so four true sentences
      became four false ones with no event anywhere to mark the transition. **A verification with no
      recurrence is a claim about the past wearing the grammar of the present.**
    - ⚠ **It was found by accident**, by a capture harness pointed at production for an unrelated mission.
      Nothing in the campaign would otherwise have noticed. And note what did *not* catch it:
      `check_live_headers.mjs` passed **4/4 on the alias both before and after the restore** — the stale
      build carried the same four headers. **Headers were never the thing that regressed; content was, and
      only a content probe can see content.**
    - **The habit, adopted here:** any session that touches `site/` **re-probes the handful of surfaces its
      phase shipped, against the alias, before trusting a `completed` status** — it costs one `curl` loop
      and it is how F-s was found. ⛔ **No monitor is built, deliberately** — convention 15's ruling stands
      (the habit costs a sentence and cannot itself be wrong; the instrument costs a sitting and can), and
      this very session authored a **fifth** wrong instrument, which is the argument for the habit.
    - ⛔⛔ **AMENDMENT 2026-08-24 — CAUSE FOUND, AND IT IS NOT WHAT THIS CONVENTION FIRST SAID. THERE IS
      NOW A STANDING DEPLOY FREEZE.** ~~The cause is still unknown.~~ Venus relayed it from the deputy lane:
      the deploys came from the **lemur checkout of `aDNA.aDNA`** — *a second clone of this same repo on
      another machine* — riding local commits `30c8163` + `f4fa9c5` (v0.4.3 installer artifacts + the Arch
      `[adna]` repo), **recorded in lemur's own `deploy_log.txt`**, unpushed because the deputy grant does
      not cover origin.
      - ⛔ **AND THE RESTORE FIRED THE SAME HAZARD BACKWARDS.** Deploying `tree=922519c` from here
        **un-published v0.4.3 and the Arch repo** (`[D]` 2026-08-24: three 404s). **Both checkouts hold
        work the other lacks, and each one's `--prod` deploy silently un-publishes the other's.**
        *(Not broken, though — live `install.sh` pins `0.3.1` and that payload serves 200, so the site is
        internally consistent, just regressed to the older release. Check which alarm you have before
        raising one.)*
      - ⛔ **FREEZE: no `deploy_adna.sh prod` from ANY checkout until the two trees are reconciled** —
        lemur pushes `30c8163` + `f4fa9c5`, then **one** deploy from a tree holding both halves. Neither
        half is fixable from the other's machine: the v0.4.3 bytes have never reached this node.
      - ⭐ **The real gap is not a rogue actor — it is that `deploy_adna.sh` has a clean-tree guard and no
        SINGLE-WRITER LEASE FOR THE PRODUCTION ALIAS.** Both checkouts followed the discipline; both
        assumed they were the only one deploying. The guard proves *your* tree is clean; nothing proves
        *the alias* is not about to be taken by someone else's. Routed to **P4.4**.
      - ⭐ **A NEGATIVE RESULT IS ONLY AS WIDE AS THE COMMAND THAT PRODUCED IT.** This convention was
        authored saying the deploys were in *"no `deploy_log*` anywhere in the fleet"* `[D]`. The grep ran
        over `~/aDNA` — **one machine**. `[D]` marks what was **observed**, not what was **searched**, and
        an un-truncated command over a scope that silently excludes the answer reads exactly like a
        thorough one. Sibling of the campaign's own *"a truncated command is a derived figure."*

## What this campaign protects (do not regress)

The honesty strata (`/about`, `/community` empty-state candor, zero-count displays) · true load-bearing numbers · hero visual quality · dark/light parity · axe-0 record · perf 97–100 · curated llms.txt · the graph keyboard-twin pattern.

## Mission index

`missions/` — 27 files `mission_haussmann_p{0..5}_*.md`; paste-ready prompts in `missions/session_prompts_haussmann.md`.

**⚠ Since ⛩ DP6 (2026-08-19), phase order is NOT claim order.** Decade 2 runs the ruled sequence in
convention 11. **Current mission: `P4.1`** (`mission_haussmann_p4_1_token_pipeline.md`, **`in_progress`
— O0 ✅ · O1 ✅ · O2 ✅ (2026-08-24); resumes at O3**, which carries **AC4** (the VisualDNA bundle or
the staged Pygmalion ask), the **persona ranker** on the three surfaces O2 changed, and the **AAR**.
The "halt at DP8 before building" instruction is **discharged**; the AC amendment is `accepted` and
**applied** — read the amended AC2/AC4/AC5 and the replaced `verification_method`, never the
originals). ⛔ **O2 is BUILT AND VERIFIED BUT NOT DEPLOYED** — the deploy freeze below stands, and
AC5 is recorded **MET-on-build** with deployment **named as owed**, not implied. Closed:
P4.5a ✅ · P3.5 ✅ (08-20) · P3.1 ✅ · P3.2 ✅ (08-21, deployed) · **P3.4 ✅ (2026-08-22, deployed +
live-verified 24/0)**. **⏸ `P3.3` remains OPEN at ⛩ O2** and is *skipped, not finished* — the npm publish is **not
performable on this node** (no npm identity; needs an interactive operator `npm login` first), so the
sequence moved past it. Claiming "the next open mission in phase order" still lands wrong further down
(P4.4 precedes P4.3), so read convention 11's order, not the numbering. Decade-1 leftovers:
~~**P0.4**~~ ✅ **CLOSED 2026-08-21** and **P2.6** (`in_progress`, awaiting ⛩ **O0b**, the
operator-gated TTFS run) — **the only Decade-1 leftover still open.**

> ⛩ **P4.1 — DP8 RULED 2026-08-23; O0 CLOSED, mission `in_progress`, resumes at O1.**
> **ADR-053 → `accepted` at option (a)**: the visual voice is a **governed, slot-contained illustration
> program** with a **normative five-slot table** (`hero_panel` live ×10 · `vault_card_mark` ·
> `empty_state` · `category_mark` partly-live ×6 · `graph_frame`), a containment rule holding all other
> chrome to Tokyo-Night type-and-colour in both themes, **normative per-artifact credit (currently
> UNMET)**, and a generation pipeline **named as owed, not claimed to exist**.
> **ADR-059 → `accepted` at option (c)**: adopt WebForge's **validators** (`check_aa.py`,
> `conformance.py --strict-leak`) over the existing CSS; **pin the emission divergence**. ⛔ No
> `tenant_adna` ceiling is derived and no token value is regenerated in this phase.
>
> ⭐ **THE PREMISE OF THE ADR WAS FALSE, AND CORRECTING IT CHANGED WHAT THE GATE RULED.** The stub read
> *"The site has one excellent hero and little else carrying the style."* `[D]` There are **ten**
> illustrated routes, **in one coherent render language** (pixel art; warm wood/brass/amber against cool
> cyan/purple; recurring DNA-helix motif — three assets viewed at full resolution). The instrument's
> actual definition is *"nothing **else** carries the style"* — a claim about **confinement to one slot
> type**, not about one image. **The finding survived; the sentence did not.** So DP8 did not elect
> whether to *invent* a program: one already existed, ungoverned, and **three of the dossier's five
> requirements were already met** — which made option (b) "reduce to an accent" mean *removing nine live
> surfaces*, a cost the stub's wording concealed.
>
> ⚠ **Convention 13 ran COMPLETE (16/16 AC×V pairs + 4 AC×AC) and found THREE failures and a structural
> gap** — the pass's best yield yet. **AC2's stated verification cannot see AC2** (gate-25 *excludes*
> `tokens.css`/`branding.css` by construction; Gate 4d compares WebForge's own source, which this site is
> not compiled from). **AC2's record limb named the wrong document** (V4 said "ADR-053 record"; the
> substrate had none — resolved by authoring ADR-059). **AC4 has no schema to instantiate**: a house
> visual voice is `style_atmosphere`, which VisualDNA v1.0 declares *"not exercised at GA"* and ships no
> schema file for — **a Pygmalion ask, not a local fix.** And **O2's slot applications are covered by NO
> acceptance criterion**, so all four ACs could pass with **zero slots built**, against a definition of
> done reading *"a system a contributor could apply to a new page."* ⛩ Operator ruled **AMEND THE ACs
> BEFORE O1**.
>
> ⛔ **Out-of-band: F-s, a live production regression** — see convention 16. Found by this mission's
> capture harness, escalated, restored under operator GO, red-proven 10/10. **Its first casualty was this
> session's own evidence**: 30 green T0 captures, of the wrong build. Re-captured against a local preview.
>
> ✅ **P4.1 O2 COMPLETE 2026-08-24 — the `empty_state` slot, ADR-053's first NEW slot, in BOTH the
> states its row names.** Suite **560/560** (555 + 5 G35b, **9/9 mutations red-proven**), `token_aa_check`
> **AA PASS 0 below floor**, axe **0** × 3 surfaces × **both** themes. ⛔ **BUILT, NOT DEPLOYED** —
> freeze re-verified at open (lemur's two commits still absent; HEAD == origin/main).
>
> ⛩ **Four rulings taken before building; three were defects found by re-reading the ruling against
> the data.** ⭐ **The ruled target set was not the set the slot is about**: *"the 57 planned vault
> cards"* — but only **52** of those 57 have any empty field, while **12 non-planned cards do**, so
> tier-keying would mark 5 non-empty cards, miss 12 empty ones, and re-differentiate the tiers
> **ADR-052 §tiers.2** ruled equal. **The mark keys on the absence.** That it lands on `in use` cards
> is the visible proof it is not a stage badge. ⭐ **AC5(b) named a mechanism that cannot reach its own
> target** (`DocumentationLayout.heroImage`, on a BaseLayout page, for a non-hero slot) — ADR-053 names
> the **pattern**, AC5 named one **instance**; ruled **both**, and the literal field is **exercised**
> on `/get-started` so it does not ship unexercised.
>
> ⭐⭐ **THE RED TEST FOUND A DEFECT IN THE SESSION'S OWN CODE THAT NO GREEN RUN COULD HAVE.** Two of
> the three absence predicates were **decorative** — the surrounding ternary was the real guard, so a
> mutation setting `personaAbsent = true` left the gate green *because the line it was aimed at could
> not move*. Red-proving is usually sold as proof the fix was needed; here it proved **the code's
> stated structure was not its actual structure**. Fixed, then 9/9. ⚠ And when the restructure made an
> older mutation stop matching, the harness reported it as a **harness bug, not a pass** — which is
> the whole reason the match-count assertion is there.
>
> ⚠ **Four more instruments wrong before the subject** (fourth session running). My own new copy put
> **`DP8` on the only page in 225 carrying it** — caught by grepping the *built* output before
> gate-27/gate-35 ever ran. The new gate read **raw `vault_slug`** while the page emits the ADR-051
> canonical slug, producing two failures **indistinguishable from the tier-keying regression it
> exists to catch** (the site was right both times). An ad-hoc capture script set only Playwright's
> `colorScheme` and produced **a dark screenshot under a light filename** — this site's theme is a
> `.dark` class on `<html>`. And **two typed counts** (KW-14, fifth instance) whose derivation
> *corrected the predicate*: `heroImage`-prop pages = **9**, because `/vaults/graph` renders bespoke;
> ADR-053's ten is right and the naive predicate was wrong.
>
> ⭐ **`listing: 'minimal'` is EXCLUDED and that is the honest half.** Those rows are not unwritten —
> they are **deliberately withheld**. Marking a policy choice as an oversight is the class of defect
> this campaign exists to retire. ⭐ **A pre-existing contrast gap was surfaced, not created**:
> `--color-text-muted` on `--color-bg-alt` was untested while **23 files** render it; added with its
> counted usage and red-proven (1.21:1 under mutation, exits 1).
>
> ⚠ **New debt: F-t — this session leaked `SS_VERCEL_TOKEN` into its transcript.** The redaction was
> written `${VAR:+SET}${VAR:-UNSET}`; the second expansion **prints the value precisely when the variable
> is set**. **The safe form is `${VAR:+SET}` alone.** Operator ruled *record, no rotation* (known
> throwaway credential). ⭐ **Fifth wrong instrument in two weeks, authored inside the session auditing
> wrong instruments** — and the first whose failure mode is disclosure rather than a false green.

> ✅ **P3.4 is `completed`, DEPLOYED and LIVE-VERIFIED** (2026-08-22, `deploy_record:
> 2026-08-23T01:45:36Z tree=5c6b22d`; probe red-proven **8 PASS / 15 FAIL** before, **24 PASS / 0
> FAIL** after; gates **554/554**; axe **0** both themes). ⛩ **DP7 ruled GO** — *"minimal aDNA
> branding"* means **what a client renders**, not what an unauthenticated fetch sees; **ADR-054 →
> `accepted`**. PR-1 MET at an amended method too: its on-instance limb is **unsatisfiable by
> construction** — the instance serves the SPA shell with **200 for every path**, proven by a
> negative control (a route that cannot exist) and a nonce control. Copy stays **silent** on the
> venue's stock-Fluxer public face: an upstream ceiling, recorded in the ADR, not spun on the site.
>
> ⭐ **THE FINDING — a green test was green BECAUSE a claim was false.** R-95 (*"…terms of service,
> privacy policy, and branding are still being stood up"*) was stamped `verified` on 08-17 evidence
> and went false on 08-21. `gate-26` asserts `verified` quotes stay **PRESENT**, so **the suite
> defended the stale sentence and would have gone red on the truth.** Not the register failing to
> notice — the register **enforcing the wrong thing**. Structural cause: **no fixture row carries a
> probe date**, so no row can express *true as of when*. ⇒ **ADR-054 clause 3 now requires any
> sentence describing an EXTERNAL surface to carry its probe date on its face.** ⛔ **No checker
> built, deliberately** — convention 15 already ruled this shape, and this session produced three
> wrong instruments of its own, which is the argument for the habit, not against it.
>
> ⭐ **A SECOND stale claim sat in the same paragraph**, and only reading the linked document caught
> it: *"agents work in the repositories and on the public record, not in chat"* is falsified by
> **aDNALabs S224 ruling ②** (2026-08-21, *"Fluxer = human-visible agent chat"* — verified at the
> object, not from a STATE line) and **flatly contradicted by the venue's own code of conduct §3**,
> which this mission links. Linking it unread would have shipped a one-click contradiction. The page
> now **states the rules and asserts nothing about who is inside.** ⭐ **A THIRD copy** of the same
> description was live on `/canonical-properties` + `/state-of-the-network` from one shared data
> line — found by convention 7's *grep the rendered output, not the artifact*; the first sweep said
> done, the second found two untouched pages.
>
> ⛔ **NOT built, named rather than skipped:** the ladder→channel mapping. AC2 required rungs mapped
> *"where true"* and **no `[D]` evidence is obtainable outside an approval-gated venue**. Deferred on
> the changelog, in public, rather than left as a gap a reader would have to notice.
>
> ⚠ **New debt: F-r** — a site-wide grep for a struck claim now hits the **changelog that quotes
> it** (the entry is *about* the false sentence). Every absence assertion must name its surface;
> P3.4's live probe scopes each one on purpose. **F-p confirmed live** at this mission's suite run
> (gate-17 G15 red at 444-expected/0-found because `inject_redirects` alone creates `config.json`
> and G15's skip guard tests **existence**, not the routes it asserts on) — remedy is convention 6's
> *run the step that produces what the gate asserts*; the fix stays routed to **P4.4**.

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
