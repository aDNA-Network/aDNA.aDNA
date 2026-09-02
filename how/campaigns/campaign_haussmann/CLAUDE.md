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
4. **WebForge is the pattern source — consumer, never fork.** Consume via `how/federation/webforge/` (P0.3 creates it); a pattern we need that WebForge lacks gets authored back (`patterns_to_author:`), never solved locally. Read gate bars from `lighthouse_profiles.json`, never transcribe (KW-14) — ~~**⚠ UNFOLLOWABLE TODAY; DO NOT TREAT AS A LIVE RULE.** `find . -name lighthouse_profiles.json` returns **0 hits** vault-wide `[D]` (P2.6, 2026-08-19), so **every gate-19 bar in the suite is a transcription** — precisely what this clause forbids. ⊳ **D-E** ruled at ⛩ DP6: **mirror the file into `how/federation/webforge/` at P4.4**; amend this convention **only** if Vitruvius declines. Until then transcribe **and name the source you transcribed from**.~~
   - ⭐⭐ **THE RULE IS FOLLOWABLE AND ALWAYS WAS — the evidence sentence above was wrong, and it is corrected here rather than the rule** (A3, 2026-08-24). **The `find` searched `aDNA.aDNA` and reported *"vault-wide"*** — the file is at `WebForge.aDNA/what/lib/gates/lighthouse_profiles.json` (43,988 B), and our federation pin `6096157` is **byte-current** against it (md5 `134c9647c4c348034db3fa32d65d9db1`, identical at the pin, at their HEAD `14838774`, and in their working tree). ⇒ **convention 16's own law — *a negative result is only as wide as the command that produced it* — and convention 17's *name your surface*, both breached by the sentence that cited neither, inside the file that authored both.**
   - ⚠ **And the second claim was wrong in the other direction: the bars are NOT transcriptions.** `grep -rn lighthouse_profiles site/` → **0**; nothing of ours has ever read that file. `gate-19`'s bars are the CWV *Good band* over committed **slim desktop** fixtures. ⇒ they are **UN-SOURCED**, which is a different defect with a different fix, and the mirror would not have touched it. **Perf ≥ 90 is LOOSER than their `content_static` 95** — the direction their `ratchet_law` reserves for an operator gate.
   - ⛔ **The mirror is WITHDRAWN as the mechanism**, contradicted from both ends: our own wrapper names **gates** among what is *"consumed by reference, never copied"* (`how/federation/webforge/CLAUDE.md:24`), and WebForge's `CLAUDE.md` says the bars *"are class-keyed data … **read them there and never transcribe them**"*. The two live consumers we already have (`lock_coverage_check.py`, `token_aa_check.py`) both **resolve the pinned path**; a mirror would be a third mechanism that goes stale in silence.
   - ⛩ **Ruling 3 STANDS and is honoured**: the ask was authored and **staged** at A3 ([[coord_2026_08_24_rosetta_to_vitruvius_profiles_are_read_not_mirrored]]) — **this convention's RULE is not amended**, and no amendment is owed, because Vitruvius has not declined and the rule is not in conflict with anything. **The interim clause still governs until a bar is actually sourced: transcribe AND name the source you transcribed from** — to date we have done neither half, which is the live residue (**F-e**, and P4.4b's **AC4**).
   Momus/reviewer independence: the builder never self-certifies.
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
      - ~~⛔ **FREEZE: no `deploy_adna.sh prod` from ANY checkout until the two trees are reconciled** —
        lemur pushes `30c8163` + `f4fa9c5`, then **one** deploy from a tree holding both halves. Neither
        half is fixable from the other's machine: the v0.4.3 bytes have never reached this node.~~
      - ⛩⛩ **THE FREEZE IS LIFTED, 2026-08-25, BY OPERATOR RULING ON A MEASUREMENT — struck above, not
        deleted, because the reasoning is the reusable part.** ⭐ **The freeze's RELEASE CONDITION and
        its PROTECTIVE PURPOSE had come apart, and its own text merged them into one sentence.** It was
        raised after F-s to stop two checkouts silently un-publishing each other. Measured at the lift:
        the actual invariant — *never publish a tree that does not contain the commit currently serving
        the alias* — is **built, red-proven 13/13, and already on `origin/main` at `4a9bc09`**, so lemur
        receives it **on pull**; the alias serves `922519c` and **HEAD contains it** (37 commits ahead),
        so the guard **passes on ancestry**; and lemur's v0.4.3 + the Arch repo were **already
        un-published** at the 08-24 restore, so deploying does not destroy them again. ⇒ *"lemur pushes
        both halves"* is what **RESTORES** lemur's work — it is no longer what **PROTECTS** it. The
        guard does that now, in both directions. Holding cost four missions of unshipped work and
        **hard-blocked P5.1**, whose criteria go green under the freeze while producing evidence about
        the wrong build (**G-11**) — putting the freeze on the critical path to the campaign's capstone.
      - ⛩ **A PUSH IS NOW A PRECONDITION OF A DEPLOY, and this coupling was surfaced rather than
        quietly reversed.** Deploy an unpushed tree and the alias is stamped with a commit absent from
        `origin`; lemur pulls `origin/main`, does not get it, and **the guard refuses their deploy with
        no way to fix it by pulling** — converting a protection into a permanent block on the other
        writer. ⇒ **push precedes deploy, each with its own ⛩ GO.**
      - ⛔ **WHAT THE LIFT DOES NOT CHANGE, stated so nobody infers otherwise:** v0.4.3 and the Arch
        `[adna]` repo stay **un-published** and still need lemur; live `install.sh` stays at `0.3.1`
        after our deploy, which is the current live state and internally consistent, **not a regression
        we introduce**.
      - ⭐ **The real gap is not a rogue actor — it is that `deploy_adna.sh` has a clean-tree guard and
        ~~no SINGLE-WRITER LEASE FOR THE PRODUCTION ALIAS~~ NO ANCESTRY GUARD ON THE PRODUCTION
        ALIAS.** Both checkouts followed the discipline; both assumed they were the only one deploying.
        The guard proves *your* tree is clean; nothing proves *the alias* is not about to be taken by
        someone else's.
        - ⛩ **AMENDED 2026-08-24 — THIS SENTENCE NAMED THE WRONG INSTRUMENT, and F-u inherited the
          error from it.** Designing before writing (F-u's own instruction) found that **a lease would
          not have prevented F-s.** Replay it with a perfect lease held throughout: lemur acquires,
          deploys, releases; this node acquires, deploys `922519c`, releases; **v0.4.3 and the Arch
          repo are un-published anyway.** ⇒ **The two deploys never raced. They were sequential and
          still destructive.** A mutex reasons about **time**; the defect is about **content**. The
          right invariant is *never publish a tree that does not contain the commit currently serving
          the alias* — with `/.well-known/adna-build.json` to make the alias self-describing, because
          **a log on the machine that deployed is not evidence available to the machine about to
          deploy**, which is exactly why F-s was invisible from here. Design: `artifacts/p4_4/
          f_u_alias_guard_design.md` (`accepted`); built as **AC0** with verification limb **V5**.
          ⭐ **The lesson is not "the row was wrong" — it is that the campaign wrote a remedy into
          governance at the moment of diagnosis, when it knew the cause and not yet the fix**, and the
          remedy then propagated into a debt row and nearly into a build. **Diagnosis and prescription
          are separate acts and this file merged them.** ~~Routed to **P4.4**.~~ ⚠ **This
        sentence was false for four days.** It said *routed*; **P4.4's register had no such row** until
        P4.1's close landed it as **F-u** (2026-08-24). ⇒ **"Routed" is a claim about the destination,
        so verify it there** — the campaign's own index-vs-artifact finding, committed by the sentence
        announcing the fix. **F-u is the freeze's release condition**, so this was not a cosmetic gap:
        the one row that says when deploys can resume did not exist.
      - ⭐ **A NEGATIVE RESULT IS ONLY AS WIDE AS THE COMMAND THAT PRODUCED IT.** This convention was
        authored saying the deploys were in *"no `deploy_log*` anywhere in the fleet"* `[D]`. The grep ran
        over `~/aDNA` — **one machine**. `[D]` marks what was **observed**, not what was **searched**, and
        an un-truncated command over a scope that silently excludes the answer reads exactly like a
        thorough one. Sibling of the campaign's own *"a truncated command is a derived figure."*

17. **Every absence assertion names its surface.** A grep proving a claim is *gone* cannot, by
    itself, tell a live claim from **the changelog entry that retired it**. After P3.4 struck the
    stale R-95 sentence, a site-wide grep for the struck wording still returned hits — from the
    entry whose *subject* is the false sentence. The claim was correctly gone from every page that
    asserted it, and **the sweep that proved so read as red.**
    - **The rule:** state the surface an absence is asserted over, at the point of asserting it —
      *"absent from `src/pages/**`"*, not *"absent"*. P3.4's live probe already scopes each one
      deliberately; this makes that the rule rather than one mission's good manners.
    - ⛔ **No checker, deliberately.** F-r's own remedy proposed one *"if a checker is ever built"*,
      with an exclusion for `src/content/changelog/**`. Convention 15's ruling governs: **the habit
      costs a sentence and cannot itself be wrong; the checker costs a sitting and can.** The
      session that adopted this convention authored six instruments and **the first run of the very
      first one reported 5 of 12 cases failing because the HARNESS was broken, not the subject.**
      That is the argument for the habit, not against it.
    - ⭐ **Why it generalises past changelogs:** any surface that *documents* a retirement contains
      the retired string. Session records, AARs, ADRs and this very file all do. An absence
      assertion whose scope includes the vault's own memory can never go green, and one that
      silently excludes it is making a narrower claim than it appears to. **Naming the surface is
      what makes the claim checkable at all.** *(Landed at P4.4a A1, 2026-08-24, discharging F-r.)*
    - ⭐⭐ **AMENDMENT 2026-08-26 (P4.5b O1 pre-flight) — NAMING A SURFACE DOES NOT MAKE IT THE RIGHT
      ONE, AND THE FAILURE LOOKS EXACTLY LIKE COMPLIANCE.** P4.5b's O0 probe of the clinician
      confusion list named its surface exactly as this convention requires — *"`dist/**/*.html`, the
      deployed tree `6675442`, `grep -rlF`, literal"* — and reported *"3 Conformance Levels"*
      **dead**. It is **live**: the homepage renders the figure and its label as **separate DOM
      nodes**, so the phrase exists for a reader and not for a literal HTML match. Re-run against the
      `.md` twins it returns **1**.
      - **The clause:** *the surface must match the claim's own verb.* **"A reader encounters this
        phrase"** is a question about **rendered, flattened text** — the twin. **"The source asserts
        this"** is about source. **"The DOM contains this node"** is about HTML. Picking HTML for a
        reader-facing claim is a surface that is **precise about the wrong thing**.
      - ⚠ **And it fails in BOTH directions, so there is no single safe default**: the same re-probe
        found *"context democracy"* at **2** in HTML and **1** in the twins — the twin drops page
        metadata that HTML carries. **Neither surface alone answers "what does a reader see."** State
        which question you are asking, then pick.
      - ⭐ **Why this is worth a clause rather than a note:** convention 17 as written is satisfiable
        by a wrong answer. A named surface reads as diligence, so the sentence *"absent from
        `dist/**/*.html`"* passes review while being useless for the claim it supports — which is a
        worse failure mode than an unnamed one, because an unnamed absence invites the question and a
        named one closes it. *(Fourth member of the instrument-narrower-than-its-conclusion family —
        F-e's `find` over the wrong vault · convention 16's `grep` over one machine · P4.5b's
        average-based shape guard · this. **Three of the four were authored by this desk in eight
        days**, which is the argument for the habit and against authoring a fifth instrument.)*

18. ⛩ **STATE THE SURFACE AN INSTRUMENT RUNS AGAINST, AND WHETHER IT IS THE SURFACE THE CLAIM IS
    ABOUT.** *(Ratified 2026-08-28, ruling 4 of the GR-1 signature.)* Conventions 16 and 17 govern the
    **commands** we run and the **absences** we assert. This governs the **instruments we already
    trust**: a gate can run correctly, pass honestly, and be pointed at a **local proxy for a public or
    rendered property** — in which case its green is a true statement about the wrong object.
    - **Three live instances, found in one pass**, which is why this is a convention and not a note.
      `gate-42` asserts a clean console against `astro preview`, which applies **no `vercel.json`
      headers**, so it structurally cannot see a CSP violation (`grep -rn "font-src" tests/ scripts/`
      → **0**). `gate-36:73` asserts the provenance pin resolves — with `git cat-file -t` **in the same
      local checkout the pin was read from**, and `test.skip`s itself out of CI entirely, so it **can
      only ever pass**, while its own comment names the exact defect that is live. `gate-17` G12
      asserts twin *shape* and **never compares twin content to page content**, so a silently deleted
      placeholder passes every gate.
    - **The rule:** at the point of authoring or citing a gate, say what it runs against and whether
      that is the surface the claim is about — *"against `astro preview`, which has no CSP"*, not
      *"against the site"*. A local stand-in is legitimate; **an unnamed one is how a green becomes
      evidence for something it never touched.**
    - ⭐ **Why it is not a restatement of 16 or 17.** Convention 16's law is about the **width of a
      command** (*a negative result is only as wide as the command that produced it*); 17's is about
      the **surface of an absence**, amended to add that the surface must match the claim's **verb**.
      Both are about assertions a session **writes**. This one is about assertions the suite **already
      holds and re-runs**, where nobody is looking — and it is the fourth family member to arrive at
      the level of the **suite** rather than of one command. *(Sibling of convention 16's "DEPLOYED +
      LIVE-VERIFIED is a statement with a timestamp": there, nothing re-runs the check; here, the check
      re-runs forever against the wrong object.)*
    - ⛔ **NO CHECKER, deliberately, and the restraint is the ruling.** Conventions 15/16/17 all ruled
      this shape: **the habit costs a sentence and cannot itself be wrong; the checker costs a sitting
      and can.** A meta-instrument auditing what instruments point at would be the sixth authored by
      this desk in a month, and the standing count of those later found defective is the argument.

19. ⛩ **DERIVE `main`'s CI STATUS AT SESSION OPEN — one command, before anything else.**
    *(Ratified 2026-09-01 at `GR-2` O5, discharging `F-x`'s surfacing half, `AC-6`.)*
    ```
    gh run list --workflow=gates.yml --branch main -L 5
    ```
    A red there is **not** automatically a blocker — convention 18 decides that, by asking which
    surface the instrument ran against — but it must be **seen**, and named in the session file
    alongside the other derived-at-open facts.
    - **Why a habit is needed at all:** `gate-33-freshness`'s date assertion landed at `0eb48fa`
      (P2.3 O2, 2026-08-19) and **had never once passed in CI** until `GR-2` O4 fixed it on
      2026-09-01 — **~14 days and 46 failed runs on `main`, across two writers' machines**, while
      every session in that window reported a green **local** suite and no session opened the run
      list `[D]`. It surfaced only when an unrelated deploy sitting happened to look. ⭐ **The local
      lane was green the entire time, which is precisely why nobody looked**: a green you *do* run
      hides a red you *don't*.
    - ⭐ **This is convention 16 with the polarity reversed, and that is why it needs its own line.**
      16 says *a verification with no recurrence is a claim about the past wearing the grammar of the
      present* — a check that stopped running. Here the check **ran, on every push, for two weeks,
      and went red every time**, and the gap was that **no one read it**. ⇒ *an instrument nobody
      reads is indistinguishable from an instrument that does not exist* — and it is worse, because
      its existence is cited as coverage.
    - ⛔ **NO CHECKER, deliberately — and here the restraint has an extra edge.** Conventions 15/16/17
      and 18 all ruled this shape (*the habit costs a sentence and cannot itself be wrong; the checker
      costs a sitting and can*). The additional argument is specific to this convention: **the thing
      that failed here WAS an automated monitor.** Answering an unread monitor with a second monitor
      is the defect proposing itself as its own remedy.
    - **Companion, from the same sitting (`F-y`): an `F-` ID is minted BY WRITING THE ROW.** Naming
      one in a session record, a commit message or this file does not create it — `F-s` and `F-x`
      were both cited by ID for days with no row in the register — and **any register tally quoted
      anywhere is re-derived by its three greps at the commit that quotes it**, never carried.

## What this campaign protects (do not regress)

The honesty strata (`/about`, `/community` empty-state candor, zero-count displays) · true load-bearing numbers · hero visual quality · dark/light parity · axe-0 record · perf 97–100 · curated llms.txt · the graph keyboard-twin pattern.

## Mission index

`missions/` — **30** files, **derived not typed** (`ls missions/mission_haussmann_*.md | wc -l`): 27
`mission_haussmann_p{0..5}_*.md` **plus 3 `mission_haussmann_gr_*.md`**, which the `p{0..5}` glob does
**not** match. *(Re-derived 2026-09-01 at `GR-3`'s open — the GR lane went 2 → 3. ⛩ ✅ **SURFACED AND PERFORMED
IN THE SAME SITTING** — the charter's `mission_count` is now **30**, with `estimated_sessions` **42-56**
and `calibrated_sessions` **42-48** re-derived in the same commit. That field is **the operator's to
take by its own terms**; it was put to them and ruled. ⭐ **This is the discipline GR-2 had to learn
twice** — its 28→29 ruling was recorded as taken and then sat unperformed at this destination for four
days. `phase_count` **HOLDS at 6**.)* ⚠ **The old glob was load-bearing and silently wrong the moment GR-1 landed** —
it would have kept reporting 27 forever while the directory held 28, which is F-m's shape (a drift-check
whose own pattern excludes the thing that drifted) recurring in the sentence that states the count.
~~Note this file count is **not** the charter's `mission_count`, which still reads **27** pending the
⛩ ruling.~~ ⚠ **RE-DERIVED 2026-09-01 at `GR-2`'s close — this line was stale in BOTH numbers**: the
directory holds **29** (GR-2 landed on 08-29 and the count was never moved), and the charter's
`mission_count` reads **28**, not 27, having been amended at GR-1's signature. **Neither number was
wrong when written; neither was re-read.**
⛩ ~~**AND THE CHARTER FIELD IS OWED, NOT TAKEN HERE.**~~ ✅ **SURFACED, THEN OPERATOR-TAKEN AND
PERFORMED, 2026-09-01.** The `GR-2` block above recorded `mission_count: 28 → 29` as ruled at the
08-29 signature; **the charter still read 28** four days later `[D]` — the *index-vs-artifact* class,
**fourth** sighting in this one sitting, and a ruling that had been taken but never performed at its
destination. ⛩ Put to the operator rather than assumed (the field's own comment says it is *"the
operator's to take"*), and ruled: **perform all three**. Charter now reads **`mission_count: 29`**
(derived from disk: 27 `p{0..5}` + 2 `gr_*`) · **`estimated_sessions: 41-54`** (37–50 + GR-1's 2 +
GR-2's 2) · **`calibrated_sessions: 41-46`** (DP6's 37–42 + 2 + 2), each re-derived in the same
commit because all three are marked derived-not-typed. ⚠ `phase_count` **HOLDS at 6**. ⭐ GR-2's
addend is **measured, not assumed**: its ratified 2 sessions is also what it actually took (s1 =
O0–O3, s2 = O4–O5) — the token band ran at/over its top edge while the *session* count landed exactly.
Paste-ready prompts in
`missions/session_prompts_haussmann.md`.

**⚠ Since ⛩ DP6 (2026-08-19), phase order is NOT claim order.** Decade 2 runs the ruled sequence in
convention 11. ✅ **`P4.4a` CLOSED 2026-08-24** (AAR filed, SO#5; criteria **AC0 ✅ + V5 ✅**;
`mission_haussmann_p4_4_ci_hardening.md` stays **`in_progress`** because ~~**P4.4b has not started**~~
**P4.4b IS SIGNED AND BUILDING (2026-08-26)** and one file holds both halves — a `completed` there
would claim P4.4b). ~~⛔⛔ **BUILT, NOT DEPLOYED**, the third consecutive mission behind the freeze.~~
✅ **DEPLOYED** — the freeze lifted 08-25 and the 08-25 ship carried **P4.1 + P4.2 + P4.4a + P4.3**;
prod now serves `51af717` (P4.5b, 08-27) `[D]`.

> ⚠ **Both struck claims were TRUE WHEN WRITTEN and neither was ever revisited — this is the campaign's
> own *index-vs-artifact* class, in the index, corrected same-diff with the mission file under
> convention 7 / ADR-057** (ruling 4 of the P4.4b signature, FINDING 9). ⭐ **Note which half needed
> correcting: not the mission file — its `status:` qualifier had already been struck and corrected at
> the 08-26 gate. The INDEX kept the claim the artifact had moved past**, which is the exact direction
> this campaign keeps re-finding, and the reason ruling 4 was written as *same-diff* rather than as a
> follow-up.

~~⛩ **THE NEXT MISSION IS AN OPERATOR ROUTING CALL, AND IT IS NOT TAKEN HERE (SO#1).** Convention 11's
ruled order puts **P4.4 → P4.3**, but P4.4's remaining half is **P4.4b, and every one of its criteria
waits on an actor outside the session** — Vitruvius's answer (the ask is **staged, not delivered**),
lemur's push, the operator's dashboard. So the choice is: **hold for P4.4b's unblock**, or **open
`P4.3`** (*accessibility beyond automation: manual passes*), which already holds inherited work —
**O1's 12px rendered-typeset floor**, ⛩ deferred to it as a legibility judgement, plus P4.2's
`aria-live` residue (B3/E4) which needs an AT instrument rather than a grep. **Neither is claimed by
this line.**~~

⛩ **ROUTING CALL TAKEN 2026-08-24: `P4.3` IS OPEN; ALL THREE VITRUVIUS MEMOS STAY STAGED.** P4.4b is
untouched and still blocked on actors outside the session.

> ✅ **P4.3 O0 + O1 COMPLETE 2026-08-24** (a crash between them left a clean tree — S1, the amendment,
> the freeze sweep and O0 all committed, nothing half-built; ⛩ operator ruled at the resume: **run all
> of O1 in one session**, **O2's VoiceOver sitting deferred, script only**). Suite **587 → 593 → 617**,
> derived. **AC1 ✅ AC2-keyboard ✅ AC3 ✅ AC6 ✅ AC7 ✅**; ⛩ **AC2-VoiceOver owed** (script ready) ·
> **AC4 + AC5 are O3's**. ⛔⛔ **BUILT, NOT DEPLOYED — the FOURTH consecutive mission behind the freeze.**
>
> ⭐⭐ **AC3'S ZOOM HALF FOUND A DEFECT THE 593-ASSERTION SUITE COULD NOT SEE, AND THE PRE-BUILD GATE IS
> WHY IT WAS LOOKED FOR.** At **200 % TEXT** — a browser preference, **not** page zoom, so the viewport
> stays 1280 — **every page scrolled horizontally by 229 px** (460 px at 1024): `.header-actions` at
> **x=1509 in a 1280 px viewport**, pushed out by `margin-left: auto` against a doubled nav. **The
> reason nothing saw it is exact: `gate-9`/`gate-29` parameterize the VIEWPORT WIDTH, and narrowing a
> viewport is a different transform from enlarging the text inside it.** AC3's amended wording had said
> both halves need new instrument work and *"may not be ticked against the existing suite"* — measured
> `[D]`, `deviceScaleFactor|zoom` = 0 hits. Fix: **one line**, `flex-wrap: wrap` on `.header-inner`,
> inert at normal text size. ⇒ **convention 13 has now paid for itself on four consecutive missions.**
>
> ⚠ **The WCAG 2.2 tag buys EXACTLY ONE RULE, and saying so is the deliverable.** `gate-4` gains
> `wcag22aa` (measured first: **32 runs, 0 violations, `target-size` in `passes` on all 32** —
> evaluated, not inapplicable). axe 4.11.3 ships `target-size` **and nothing else** for 2.2 `[D]`;
> **2.4.11 · 2.5.7 · 3.2.6 · 3.3.7 · 3.3.8 are named on the gate's face as uncheckable here**, four
> because the interaction does not exist on this site — **true today, false the moment one is added**.
> 2.4.11 is swept by `gate-47`. ⭐ **This is F-a's lesson one mission on: a tag matching nothing
> produces the same green as a clean site, so the zero is CONTROLLED** (cases G/H/I).
>
> **AC2 keyboard: MET** — 5 surfaces × 60 stops, **0 ringless · 0 traps · 0 order breaks · 0 obscured**;
> 6 primary flows keyboard-only, **14 PASS / 1 NOTE / 0 FAIL**. ⚠ **Qualifier found by red-proving:** a
> 340 px sticky header does NOT turn the obscured assertion red — **Chromium parks focus at the nearest
> edge** (the bottom, tabbing down) — it goes red at 820 px. ⇒ **the clean 2.4.11 rests partly on
> browser behaviour, not only on this layout.** **AC3 F2: CLOSED** — and the load-bearing evidence is
> that **both sentences the finding quotes mid-truncation now render whole**, because a zero overflow is
> also what a page with the text **deleted** would report.
>
> ⭐ **AC6 — lock O1's 12 px floor is NOT MET, and that is the criterion being MET.** Re-measured
> independently: **3.5 / 8.0 / 8.5 px**, matching P4.2 **exactly** (the reproducibility control), plus a
> first-time corpus aggregate — **398 of 510 painted text nodes below the floor**. Remedy is design work
> on a campaign-protected hero ⇒ ratchet holds, lock stays `gap`. ⚠ Its `sequenced:` field named
> **P4.4**, a mission the ⛩ P4.4 gate had already superseded — the *index-vs-artifact* class one level
> down, corrected in the same commit. **The deferral chain P4.2 → P4.4 → P4.3 STOPS HERE.**
>
> ⚠ **Found by the keyboard pass, ROUTED NOT FIXED:** the header's **"More" disclosure does not render
> at all** — built only when a `topNav` entry has `children`, and all seven are flat `[D]`; `grep -c
> nav-more dist/index.html` → **0**. ~60 lines of dead CSS, and `Header.astro:211` calls the row *"7
> links + a compact More disclosure"* — **a comment describing a control the build does not ship.**
> ⭐ **Nothing is stranded** (`/glossary`, `/how` are in every footer `[D]`), so it is a claim-truth
> defect, not an a11y one — and a nav change at the tail of an a11y objective is the unforced widening
> the freeze sweep just finished cleaning up.
>
> ⚠⚠ **SIX instrument defects, all mine, all before the subject** — including ⭐ **a clip predicate that
> flagged the sr-only keyboard TWINS as defects: the instrument built to protect `machine_eye` 14's
> subject reporting that subject as the fault** — and `addInitScript` silently not applying a 200 % root
> font-size, so **15 routes "passed" a transform that never happened**. ⭐ **And one red-test mutation
> failed to go red because it was aimed at the WRONG ASSERTION, not at a weak gate**: reordering cannot
> fail a test that asserts `Shift+Tab` **retraces**. **Naming which of the two a non-red is, is the
> point of running the harness.**
>
> ~~⏭ **NEXT: ⛩ O2** (operator VoiceOver, ~30 min — [[voiceover_session_script]] is ready and its item 13
> **decides AC4's disjunct**), **then O3** (twin equivalence · statement · D11 re-score against the
> stated ceiling of **4** · AAR).~~

> ✅ **`P4.3` IS CLOSED 2026-08-25** (`mission_haussmann_p4_3_a11y_manual.md`, **`completed`**, AAR filed
> per SO#5 — **AC1 ✅ AC2 ◐ AC3 ✅ AC4 ✅ AC5 ✅ AC6 ✅ AC7 ✅ · V1–V5 ✅**). Suite **628/628** derived
> (617 → 628: gate-22 **+3** · gate-4 **+2** · gate-9 **+6**).
>
> ⛩ **O2 IS DEFERRED TO A FOLLOW-UP CAMPAIGN BY OPERATOR RULING — read AC2 as ◐ PARTIAL, never ✅.**
> The operator's stated priority is the site fully updated/reviewed/improved; the human VoiceOver
> sitting routes onward with its 18-item script `ready_to_run`. **The deferral is register row `F-v`,
> not a sentence** — ⭐ which is *this mission's own finding applied to its own close*: P4.3 exists
> partly because **G-6/G-7** caught two obligations deferred *into it by name*, in prose, that none of
> its five original criteria mentioned. **A deferral recorded only in narrative is a deferral with no
> gate.** Register re-derived: **20** total · **13** struck · **7** live. ⚠ It is also named **on the
> public page** — `/accessibility` says no human sitting has been run, so the site never lets an
> automated pass imply a human one.
>
> ⭐ **AC4 met at its FIRST disjunct — the twin now STATES THE TOPOLOGY.** All **14** edges readable
> from **both ends** with direction and type (*"WilhelmAI — contains RareArchive"* / *"RareArchive —
> contained by WilhelmAI"*), derived from the `edges` array (KW-8/FR-K); 15 rows, **28** links, exactly
> 2× the edge count. `gate-22` **3 → 6**, red-proven **7/7**. ⭐⭐ **M4 is the case that earns it**: it
> flattens `contained by` → `contains` and changes nothing else — every count still passes, every link
> still points at the right vault, and **the topology is gone**. A green there would be a *link census
> wearing an equivalence check's clothes*, i.e. `machine_eye` 14's finding unfixed while reading as
> fixed. ⚠ **The resolver was built against the WRONG OBJECT and only the rendered output said so**:
> measured against `vaults.json` (a genuine mix of identifier forms) when the page imports
> `data/vaults.ts`, the ADR-051 boundary that canonicalizes slugs *and* both ends of every edge. **Two
> different objects with one name.** And the twin said **"federatesAstro"** — Astro collapses the gap
> between an expression and the following tag: correct to the eye, **one word to a screen reader**, on
> the one surface whose purpose is being read aloud.
>
> ⭐ **AC5 — the statement is at `/accessibility`**, footer-linked from every page, on the `.policy`
> pattern its siblings `/security` + `/privacy` use. Every limitation is **true and traced to a dated
> measurement**: the 12px floor unmet at **398/510** labels · WCAG 2.2 automated coverage is **exactly
> one rule** · NVDA out of scope · the AT gate reads a **bounded opening** · no human sitting · no
> AT-**user** testing · and **a clean 2.4.11 result resting partly on Chromium**, not on this layout.
>
> ⭐⭐ **AND A 620-GREEN SUITE KNEW NOTHING ABOUT THE NEW ROUTE** — `gate-4`'s list and the P1S3 sweep are
> both hardcoded, so adding a page adds **zero** coverage of it: convention 14's family at the level of
> the *suite*. ⚠ **The first same-diff fix was itself wrong**: the P1S3 sweep is `@audit` (excluded from
> normal gate runs) and scoped to *"every route class gate-4 does NOT already cover"*, so listing it
> there would have **duplicated axe twice while leaving overflow outside CI**. ⇒ **ADR-057 is a claim
> about WHERE an assertion belongs; discharging it means reading each gate's contract, not adding the
> route everywhere.**
>
> ✅ **V4 — D11 RE-SCORED 2 → 4; binary gate CONDITIONAL PASS → PASS** ([[reconciliation]], appended
> dated, baseline rows untouched). The baseline's own condition is discharged in both halves (F2 closed
> at AC3; the keyboard pass *is* a real manual pass), and anchor 3's binding clause — *"complex graphics
> **partially** covered"* — is exactly what AC4 closed. ⚠ **The 4 rests on ONE interpretive step, named
> in the record so it can be challenged**: *"screen-reader tested"* read as satisfied by an **engine**
> rather than a human. Anchor 5 stays unreachable (AT-**user** testing, G-8). ⚠ Composite holds at
> **51.6** — D11's weight is 2, and **its value was never its weight**: it carries a *binary gate*, and
> the gate is what blocked sign-off from claiming AA. Composite re-score is **P5.2's**.
>
> ⚠ **SO#11**: two of three P4.3 sessions closed with `token_budget_actual:` **empty**, so the actual
> was **reconstructed** (≈300–380 kT vs ratified ~220–320 kT). No retrospective triggers; the finding is
> not the number — *a band cannot be falsified by a prose sentence claiming it holds*.
>
> ~~⏭ **NEXT: ⛩ the push, then ⛩ ONE prod deploy** carrying **P4.1 + P4.2 + P4.4a + P4.3** (the freeze is
> lifted — see convention 16's amendment). Then **P5.1 unblocks**, which the freeze had hard-blocked.~~
> ✅ **DONE 2026-08-25 — pushed, then deployed.** Prod serves `6675442`; `install.sh` is at **0.4.17**,
> so **both writers' work is live at once** and F-s is discharged, not fenced.

> ✅ **`P4.5b` IS CLOSED, AND THE WHOLE `P4.5` MISSION WITH IT — 2026-08-27, DEPLOYED**
> (`mission_haussmann_p4_5_voice_rewrite.md`, **`completed`**, AAR filed per SO#5).
> `deploy_record: 2026-08-27T01:31:40Z mode=prod tree=51af717`; alias re-probed, **8 of 8 shipped
> surfaces present**; `install.sh` still serves lemur's **0.4.19** and `/repo/arch/adna.db` is 200,
> so **both writers' work is live simultaneously** and F-s stays discharged. Suite **633/633**
> derived (628 → 633: `gate-48` **+5**, plus one previously-skipped test now running because
> `inject_redirects` was run per convention 6) · `html-validate` **0** · `gitleaks` **938 commits,
> no leaks** · unpushed **0**.
>
> **AC-a ✅ AC-b ✅ AC-c ✅ AC-d ✅ AC-e ✅ · V1 ✅ V2 ✅ V3 ✅ V5 ✅ · ⚠ V4 PARTIAL.** The voice guide is
> `accepted` and **published** at `/design-system#voice` — its publication limb was re-read from
> *"named as owed"* to **required** once the freeze lifted, which is the *criterion amended around a
> temporary condition* class closing in the healthy direction for once.
>
> ⛔ **V4 IS PARTIAL AND IS RECORDED AS SUCH: `/commons` scores 3.77 against a 4.0 gate.** The pooled
> mean of the five ranked surfaces is **4.13** and clears it — ⭐ **which is precisely why P4.1 ruled
> surfaces are scored separately and never averaged, and this is the first time that rule caught a
> real failure rather than a hypothetical one.** Neither weak dimension is a copy defect:
> Actionability 3.0 is gated by aDNALabs **ADR-025** (human-only until federation GA) and the counsel
> embargo, so raising it would mean **inviting an action that does not exist** — a claim moving *up*,
> which convention 1 forbids. ⇒ **routed to D-8 / federation GA, not fixed.**
>
> ⭐⭐ **THE GATE'S SHAPE WAS THE FINDING, AND MEASURING FIRST IS WHAT PRODUCED IT.** AC-b's glossary
> limb read literally — all 25 glossary terms across all 21 rewritten routes — reports **79 unlinked
> mentions**, top offenders `/glossary` (20) and `/reference/specification` (19): **the definition
> home itself, and the ratified spec mirror.** A 97 % violation rate is the signature of a rule
> measuring the wrong thing, not of a site that is 97 % broken. Scoped to where the one-new-term law
> actually binds — the four first-contact surfaces, and the 20 terms a literal match can decide — it
> reports **6 mentions and 5 real defects**, all cheap. ⚠ An earlier draft's *one* finding was a
> **false positive** (*"at the start of each session"* is not the aDNA `session` entity), and **a gate
> whose only finding is wrong is worse than no gate.** Every exclusion is named on `gate-48`'s face
> (V5) and **G48d pins the arithmetic**, because moving an inconvenient term into the ambiguous list
> is the cheapest possible way to fake it green.
>
> ⭐⭐ **TWO OF THE FIVE DEFECTS WERE NOT COPY DEFECTS — AND FIXING ONE MADE A SECOND INSTRUMENT
> WORSE.** The twin emitter converted `<strong>` before `<a>` and flattened the content, so
> `<strong><a href>Triad</a></strong>` emitted `**Triad**` with the href discarded: **8 glossary links
> in the HTML of `/learn/what-is-adna`, 6 in its twin.** The copy was already right; **the machine
> surface was lying about it**, which is this campaign's *content that exists below the point of
> confusion* shape arriving in an emitter instead of a sentence. Recovering the links then pushed a
> fifty-word prose bullet over the census's `multi-link` threshold and **out of the reading corpus** —
> measured site-wide, **90 lines carry ≥ 2 links and 30 of them are punctuated paragraphs**, mostly
> the glossary's own definitions. ⇒ **the corpus shrank every time the copy became more reachable, so
> the instrument would quietly have rewarded leaving terms unlinked. An instrument that degrades as
> its subject improves is measuring against the wrong axis.** Repaired with the block guard's
> already-ratified invariant (*prose is punctuated*), not a fourth formulation; self-test **14/14 →
> 18/18**, both directions.
>
> ⚠ **AND THE POST-DEPLOY PROBE FOR THIS MISSION BREACHED THIS MISSION'S OWN AMENDMENT.** It grepped
> **HTML** for *"AI persona"* and reported the homepage disclosure **ABSENT**. It is live — Astro
> split `AI` and `persona` across a source line break, so the literal match fails on HTML and succeeds
> on the twin. **That is convention 17's amendment, authored at this increment's O1 pre-flight,
> breached three commits later by the desk that wrote it.** Knowing a rule and applying it while
> wearing a different hat are separate acts.
>
> ⛩ **Still queued: O4** — delivery of the three staged Vitruvius memos, operator-GO'd 2026-08-25,
> each to be shown before sending. **Not an acceptance criterion of this mission**, which is why the
> close does not wait on it.
>
> ~~⏸ **`P4.5b` IS OPEN AND HALTED AT ITS ⛩ PRE-BUILD GATE (2026-08-25) — nothing built, budget NOT
> re-ratified.**~~ *(superseded above; the reasoning below is retained because it is the reusable
> part.)* ⛩ **Routing call taken at the session open: P4.5b, not P5.1.** A `MEMORY.md` handoff
> read *"NEXT = P5.1"*; that is the **precondition** sense — G-11 went green when the freeze lifted — and
> **not the order**. Convention 11 rules `… → P4.4 → P4.3 → **P4.5b** → P5.1 → P5.2`, **P5.1's own
> `depends_on` names P4.5 and P4.4 (both `in_progress`)**, and P4.5b rewrites the exact surfaces P5.1's
> panellists cold-read ⇒ running P5.1 first buys transcripts about copy scheduled for replacement,
> **G-11's own defect class in slow motion.** *(Note the asymmetry: G-11 is a hard precondition on P5.1;
> this is not. It is the same reasoning arriving as a judgement instead of a gate — which is why it was
> put to the operator rather than taken here.)*
>
> **Convention 13 ran COMPLETE at 22/22 with coverage recorded** (16 AC×V + 6 AC×AC) →
> `artifacts/p4_5b/ac_amendment_proposal.md`, **`proposed`**: **3 failures · 2 structural gaps · 1 stale
> amendment · 4 premise corrections.** Fifth consecutive mission where the pass has paid for itself.
>
> ⭐⭐ **THE PASS WAS RUN IN BOTH DIRECTIONS, AND ONLY THE REVERSE ONE FOUND THE WORST DEFECT.** Every
> prior sighting reads **AC→V** (*can the stated method move the stated test?*). Read **V→AC**, the same
> 16 cells ask *is this criterion tested by anything at all?* — and **AC-a is covered by ZERO limb**: all
> four V limbs measure **rendered pages**, AC-a's deliverable is a **governance document**, and **nothing
> binds the rewrite to the guide**, so a one-paragraph guide never applied to a sentence passes AC-a
> while AC-b/AC-c are met by any rewrite at all. **This is P4.1's structural gap inverted** (*there*, an
> objective's output was covered by no criterion; *here*, a criterion is covered by no limb). ⇒ **the
> matrix has two directions and costs no extra cells to read both.** Remedy binds the guide to work
> already required rather than adding a reviewer: **V2's records must cite the guide rule each decision
> applied** — a rule nothing cites is a rule that did not govern.
>
> ⭐⭐ **G-10 IS MEASURED, AND THE ANSWER IS "MISPLACED", NOT "MISSING" — a different defect with a
> different fix.** The AC called agent-authorship disclosure *"UNVERIFIED — a 3-phrase grep over
> `site/src/pages/**` … a statement about that grep and not about the site."* **The caution was right and
> the measurement inverts the conclusion.** Surface `dist/**/*.html`, tree `6675442`: **41 pages name a
> persona · 4 disclose that personas are AI · 3 say *"tended by"* — and the one that does not disclose is
> `/`.** The source grep could never have found them; they render from content collections and
> components. **Third instance in this campaign of a negative result narrower than its conclusion**
> (F-e's `find` · convention 16's own `grep` · this).
>
> ⭐⭐ **AND THE SAME SHAPE APPEARS TWICE MORE IN THE CLINICIAN LIST, CONVERGING ON ONE PAGE.** *"ancient
> DNA"* is addressed on **4** pages — all deep reference/concept routes, **none of them `/`, `/learn`,
> `/get-started` or `/about`** — three-to-four clicks below the point of confusion, exactly like the
> persona disclosure. ⇒ **two of the ten items are not missing content; they are content in the wrong
> place.** Both land on the homepage, which is *also* the worst-measuring first-contact surface
> (**13.90** against a target of 10). **A coherence gap, a cold-read and a reading-level measurement,
> three independent instruments, all pointing at the same page.**
>
> ⭐ **The charter's own FKGL figure cannot serve as the mission's *before*, and `V1` asks for "deltas".**
> `evidence/sweep/reading_level_p4_5b_baseline.md` re-measures over **P3.1's `.md` twins** — a committed
> build artifact — because the 08-16 corpus was a **session scratchpad, verified absent today**; it is
> ~11 missions stale (`/learn/what-is-adna` **1301 → 944 words**: two texts, not a delta); and **it never
> measured `/`**. ⇒ *P3.1's twins closed an extraction problem nobody had connected them to.* The 08-16
> file is annotated **superseded and retained** (SO-6), not replaced.
>
> ⭐ **The top-20 is DERIVED — and it contradicts AC-b's own named list.** Inbound internal links across
> the 226 built pages: **exactly 20 routes at 226 (global nav + footer), then a cliff to 141.** It landed
> on twenty without being chosen. But **`/learn/what-is-adna` is rank 21** — `/learn` is in the nav, its
> child is not — while AC-b names it a first-contact target. **Operative scope 21 = top-20 ∪ the four
> named**, stated rather than silently resolved in either direction (dropping it would drop the page the
> clinician actually read; redefining "top-20" to include it would type a count the build disagrees with).
>
> ⭐ **Fourth consecutive mission where a re-probe SHRANK inherited scope.** `/get-started` measures
> **9.69 and already meets AC-b** (15.85 at 08-16). **Three of the clinician's ten items are dead** —
> *3 Conformance Levels* · *Production Tidy pt08* (retired by P1.3's leak purge) · *org vault pending* —
> so AC-c executed as written would resolve three phrases that do not exist. Live scope **7**, of which
> ⭐ **C8 is 75 pages from ONE component line** (`VaultRelationshipBlock.astro:30`), P3.4's *"a THIRD copy
> … from one shared data line"* recurring at scale.
>
> ⚠ **AC-a's freeze amendment is STALE IN THE UPWARD DIRECTION, and the class is worth a name.** Amended
> 08-24 to *"publication NAMED AS OWED … NEVER CLAIMED"*; **the freeze lifted 08-25** and prod carries the
> backlog. **G-5 caught criteria that could not go green; this is a criterion that now UNDER-CLAIMS.**
> ⇒ *a criterion amended around a temporary condition must be re-read when the condition expires* —
> otherwise a mission ships a guide it was allowed to publish and records it as owed.
>
> ⚠ **`/vaults` will read 40.96 forever and it is page shape, not prose** (3 detected sentences over 228
> words; ~77 terminal marks collapse on a card list). Measured across **all 223 twins: 3 such pages**.
> Load-bearing for AC-d — a CI trend report without a shape guard is a permanent false alarm. `gate-48`
> reports them **excluded with the reason**, never silently dropped. ⚠ And the twins' 4-line preamble
> biases every reading by **+0.05 to +0.28 FKGL** (`reading_level.mjs` strips lists and tables but **not
> blockquotes**) — **measured, not assumed**, and stripped by a leading-block-only rule so body
> pull-quotes survive.
>
> ⚠ **Executor tier declared at the OPEN rather than discovered at the AAR**: the mission says `fable`;
> this session ran **`opus`**. P4.1's AAR — *a declared tier nobody honours is worse than none.*
>
> ~~⛩ **HALT. Two documents need a signature before O1 rewrites one sentence:**~~ ✅ **BOTH SIGNED
> 2026-08-26** — `what/doctrine/doctrine_site_voice.md` (now **`accepted`** and published) and the
> amendment (**5 ACs**, AC-e new, V2 amended, V5 added, **~280–400 kT / 2–3 sessions**), which was
> then **corrected in place the same day** at the O1 pre-flight, strike-not-delete: the metric is
> **prose-only**, and AC-c's live scope is **8, not 7**. The signature stood because only the factual
> basis moved and the band did not.
>
> ~~⏭ **NEXT: `P5.1`** (human evidence).~~ ✅ **P5.1 IS OPEN — see below.** Its two `depends_on` are
> now satisfiable — **P4.5 is `completed`** and P4.4 stays `in_progress` for **P4.4b** alone.
> ⭐ **G-11's hard precondition is genuinely met for the first time**: the freeze is lifted, the
> backlog is deployed, and `/.well-known/adna-build.json` serves a real stamp, so every criterion can
> record the commit the participant actually saw. ⚠ **Re-read that stamp at P5.1's open rather than
> quoting `51af717` forward** — this session found the alias serving `4b43c63` when the handoff said
> `6675442`, which is convention 16 exactly: *a verification with no recurrence is a claim about the
> past wearing the grammar of the present.* ✅ **Re-read 2026-08-26: still `51af717`** — the habit
> cost one `curl` and this time confirmed rather than contradicted.

> ⛩⛩ **`P5.1` IS SIGNED AND OPEN AT O0 (2026-08-26) — the gate is PASSED.** The amendment is
> **`accepted`** (4-field ratification block on its face): criteria replaced by its §2, **V1–V5 added**,
> budget re-ratified **~120–200 → ~180–280 kT / 2 sessions**. Mission `queued` → **`in_progress`**.
> Suite **633/633** (632 passed · 1 skipped · **0 failed**) · `html-validate` **0**.
>
> ⛩ **Two further rulings taken at the signature**, both recorded in the proposal's §3 — *because §3 is
> what a later mission cites, and this campaign's own finding is that a routing claim must be verified
> in its destination, never in the prose that routed it*:
> **(4)** AC-2 is **operator-run** and *"by someone who did not build the system"* is **STRUCK**, CoI
> declared not managed away. **(5)** ADR-048's stale stimulus sentence is **corrected in this mission**,
> strike-not-delete.
>
> ⭐⭐ **RULING 4 DISCHARGED A CONDITION INSIDE A DIFFERENT FINDING'S REMEDY, AND THAT IS THE ENTRY WORTH
> READING.** DEFECT-5's remedy was written conditionally — *"**if** one person performs both runs, AC-3
> precedes AC-2"*. Ruling 2 had put AC-3 on the operator; ruling 4 put AC-2 there too; **one person does
> perform both**, so the antecedent is satisfied and the conditional is dead weight. ⇒ **AC-3 precedes
> AC-2, unconditionally.** Left conditional it would have read at run time as *unmet* — the campaign's
> own *criterion amended around a temporary condition* class **arriving inside the remedy for a
> different finding**, caught only because the ruling was read back against every finding it touched
> rather than filed against the question it answered.
>
> ⭐ **The open choice was closed by STRIKING, not reinterpreting.** A clause reinterpreted in silence
> reads to every later citation as a clause that was **met**; struck, it reads as one that was **paid
> for**, with the price in AC-2's text rather than inferable from its absence. ⚠ **And the runbook had
> it right all along**: `ttfs_runbook_fresh_account.md` already said *"if the operator runs it
> themselves, **that is a condition to record**"* — the instrument treated runner-identity as a
> **condition**, the criterion had hardened it into a **gate**. Ruling 4 restores the instrument's own
> reading. **First time in this campaign that the kit was the half that was correct.**
>
> **O0 shipped four protocols** (`artifacts/p5_1/`), none of them a new instrument (conventions
> 15/16/17): **[[panel_kit_v2]]** (live-hero stimulus at a per-session build stamp; two-scorer isolation
> **delegated** to `scorer_isolation_protocol.md` rather than re-authored) · **[[recruitment_brief]]**
> (the ⛩ operator handoff) · **[[ttfs_run_record]]** · **[[contribution_run_protocol]]**.
>
> ⭐⭐ **AUTHORING THE KIT FOUND A TRAP THE PASS HAD NOT: THE PANELLIST READS THE *LIVE* HERO AND THE
> SCORER SCORES AGAINST *ADR-048*, AND THOSE TWO TEXTS ARE NOT WORD-IDENTICAL.** P4.5b moved *"versioned
> in git"* → *"tracked in git"* and *"always know where things live"* → *"can always find what they
> need"*, and added a third paragraph with no ADR equivalent. **Measured at the live twin `[D]`: the
> substance is unchanged** — same category noun, mechanism, audience sub and NOT-line — **so the referent
> is sound.** But a scorer working from the ADR alone could mark down a reader who correctly echoes the
> *live* wording, and **a wrong ruling there would have looked exactly like rigour.** Kit §4 now says
> *scorers score substance, never wording*.
>
> ⭐⭐ **AND AC-2's RUN IS P2.6's O0b — THE SAME RUN.** P2.6 is `in_progress` **solely** for O0b, the
> operator-gated fresh-account TTFS run. ⇒ performing AC-2 (a) closes the last Decade-1 leftover,
> (b) makes **D3 non-provisional** for the first time — it was *withheld entirely* from the P2.6
> re-score rather than re-invented — and (c) turns `ttfs_instrument_kit.md` from
> `authored_unexercised` into an instrument with a proving run behind it, which its own banner asks
> for. P5.1's status note predicted the dependency in the other direction; **it is mutual.** ⛔ **Not
> claimed as discharged here** — three separate acts by their owners; routed at P5.1's close, because
> *"routed" is a claim about the destination.*
> ⚠ **A path conflict surfaced with it:** signed AC-4 says `evidence/`, the runbook says
> `artifacts/p2_6/`. **The signed criterion governs** (`evidence/p5_1/ttfs/`); P2.6 cites it there.
>
> ⚠⚠ **THE FUNNEL'S TRUTH, READ BEFORE WRITING A PROTOCOL ABOUT IT:** the AEP archive holds **two**
> proposals and **both are authored *and* sponsored by the operator**; six of eight states sit at
> occupancy **0**. ⇒ **no outsider has ever traversed this funnel**, and **the sponsor step is the
> likeliest wall** — every sponsor to date has been the author. ⭐ The zeros are **not** a defect to
> fix: the page derives occupancy from the archive rather than asserting it, which is the empty-state
> candour this campaign protects. The finding, if there is one, is about **reachability**.
>
> ⛔ **AC-3 halts before submitting.** Filing a public issue is an outward act needing its own ⛩ GO;
> *"reached submission, did not submit"* is a complete result, and the record must say which happened.
>
> ~~⏸ **`P5.1` IS OPEN AND HALTED AT ITS ⛩ PRE-BUILD GATE (2026-08-26) — nothing built, criteria NOT
> edited, budget NOT re-ratified.**~~ *(superseded above; retained — SO-6.)* ⛩ **Routing call taken at
> the open: pass first, halt at the gate** (the P4.2/P4.3/P4.4/P4.5b precedent — *no build until
> signed*).
>
> **Convention 13 ran COMPLETE at 15/15 with coverage recorded** (10 AC×AC + 5 AC×V, each read
> **both** directions) → `artifacts/p5_1/ac_amendment_proposal.md`, **`proposed`**: **3 failures ·
> 2 structural gaps · 2 unstated constraints · 1 open operator choice**, 8 pairs clean. **Sixth
> consecutive mission where the pass has paid for itself.** ⚠ **And the reason it was run at all is
> the finding underneath it: P5.1's budget was ratified at ⛩ DP6 on 08-19, and the freeze sweep
> amended its criteria on 08-24** — so the ratified budget was costed against **a criteria set that
> no longer exists**, which is convention 13's own sentence (*a DP ratified a budget against a spec
> whose halves nobody had read together*) arriving for the sixth time.
>
> ⭐⭐ **THE V→AC DIRECTION FOUND THE WORST DEFECT AGAIN, AND IT IS G-11 EATING ITSELF. AC-P — the
> hard precondition the freeze sweep added — IS TESTED BY NOTHING.** All three evidence artifacts are
> statements about *what a human did*; none is a statement about *what production contained*. P5.1
> could file three perfect artifacts with the precondition silently unmet — **the exact defect G-11
> was written to prevent, reappearing inside G-11**, and P4.1's structural gap inverted precisely as
> P4.5b's pass found it. ⭐ **The remedy required no new instrument**: AC-4 already demands a build
> stamp on each artifact's face, so the stamp is **checked** (ancestor-of-HEAD ∧ contains the closed
> missions' work) rather than merely recorded. **Zero fifth instruments** — conventions 15/16/17 all
> ruled against authoring one at the tail of a sitting, and three of this desk's last four instrument
> defects are why.
>
> ⭐⭐ **AC-2 FAILS TWICE, AND THE SECOND IS CONVENTION 1 IN INSTRUMENT FORM.** It requires a
> **clean-VM** run; the only instrument that exists (`ttfs_runbook_fresh_account.md`,
> `ready_for_operator`) says on its own face *"it is **not** the cold case… the true cold case needs
> a VM"* — the P3.1/P3.3 shape, **third sighting**. And it sets **`TTFS < 10 min` as a pass/fail bar
> on a single observation**, which `ttfs_instrument_kit.md` §5 forbids in terms — *"one run is an
> observation, not a distribution… not a retry until it works."* A threshold on `n=1` licenses
> quoting one run as a property of the product, **which is the precise scar the kit was built
> against**. Criterion and kit were written eleven days apart and never read against each other.
>
> ⭐ **AC-1's instrument points at a stimulus that no longer exists — and so does the ratified ADR.**
> `panel_kit.md` §Stimulus shows the **A-direction hero draft**, *"not production, which keeps the
> current hero until DP2"* — a condition that expired when DP2 ratified and **P4.5b rewrote the very
> copy panellists cold-read**. Measured at the **live twin** (surface matched to the claim's verb per
> convention 17's 08-26 amendment), the definition sentence differs and a third paragraph has no
> draft equivalent. **ADR-048 line 26 carries the same stale sentence**, so this is in the ratified
> decision record, not only in the kit. ⭐ Fourth sighting of *a criterion amended around a temporary
> condition must be re-read when the condition expires* — and note the direction: **P4.5b's AC-a
> under-claimed; this one would have run the wrong stimulus and reported a valid panel.**
>
> ⚠ **Two constraints nobody had stated.** AC-3's stamp **records the wrong object** — a contribution
> run's subject is the **repo and the funnel**, not the rendered site ⇒ stamp `origin/main` HEAD too.
> ⭐ **The sweep amended all three criteria identically because it was asking one question (*does this
> survive the freeze?*), which is correct for that question and imprecise for this one** — not a
> criticism of the sweep, but what a second, differently-aimed pass is for. And **AC-2 and AC-3
> contaminate each other** if one person runs both: a TTFS run walks the runner through the entire
> quickstart, so an **order** is required and no criterion states one.
>
> ⛩ **Three operator rulings taken at the open**, and one question deliberately left open: TTFS runs
> on a **fresh macOS account** with the condition labelled (resolves failure 1) · AC-3 is
> **operator-as-outsider with the CoI declared, not managed away** (P4.1's ranker precedent — and it
> *creates* a gap, since *"without privileged access"* becomes a discipline no artifact can show,
> remedied by a logged non-public-knowledge list whose emptiness reads as **suspect**) · pass-first.
> **Left open:** AC-2's *"by someone who did not build the system"* — ruling 1 settled **isolation**,
> not **who runs**; recruit, or strike the clause rather than quietly reinterpret it.
>
> ⛩ **G-11's precondition is HELD and verified `[D]`, not assumed**: freeze lifted 08-25; alias serves
> `51af717`; `git diff 51af717..HEAD -- site/` = **1 file**, a non-rendering deploy log; unpushed
> **0**, behind **0**; P4.4b unstarted (nothing built) and P4.3's O2 deferred as row **F-v**.
> ⚠ **Surface named**: that check is on the **source** surface and the claim is about the **deployed
> output** — the bridge is the self-describing alias, stated rather than hidden inside a green tick.
>
> ~~⏭ **NEXT: ⛩ THE SIGNATURE.**~~ ✅ **TAKEN 2026-08-26 — see the signed block above.**
>
> ⭐⭐ **AND THE VERIFICATION STEP EARNED ITSELF ON A SESSION THAT CHANGED NO `site/` FILE.** This desk
> checked `git diff -- site/` (empty), concluded *"the suite is structurally unchanged"*, and was
> **wrong**: `gate-41` reads **vault governance frontmatter**, not `site/` source. The suite came back
> **1 FAILED** — `G41d`, MANIFEST.md 2 days behind STATE.md. ⇒ **a negative result is only as wide as
> the command that produced it** — convention 16's own law, breached one step after quoting it, by the
> desk that wrote it. **Sixth member of the instrument-narrower-than-its-conclusion family.**
>
> ⭐⭐ **AND THE RED WAS PRE-EXISTING, WITH A PROVABLE AUTHOR: THE COMMIT THAT RECORDED "SUITE 633/633"
> IS THE COMMIT THAT TURNED THE GATE RED.** At `51af717` (the deployed tree, measured green) MANIFEST
> and STATE both read `2026-08-25` — drift **0**. `7f0d5e5`, *"P4.5b CLOSED … Suite 633/633 derived"*,
> **bumped STATE.md to 08-27 and did not touch MANIFEST.md** — drift **2**, red — and **nothing re-ran
> the suite for two commits.** ⇒ convention 16 one altitude up: *the 633/633 was honest when it ran,
> and the act of recording it made it false.* **A close cascade that edits STATE is a change the suite
> can see.**
>
> ⭐ **The MANIFEST review the gate demanded found FOUR derived-count defects, and the file contradicted
> itself twice** (KW-14): `57 skills (27 base + 30 project)` in the tree line vs **`### Skills (56)`**
> and `27 base + 29 project` in its own §Skills, 93 lines apart; and `5 topics, **32** subtopics` twice
> against its own table summing to **27**. Derived, not typed: **57 = 27 + 30**, table ⇄ disk
> reconciled with **zero drift both directions**; context subtopics **27**; reviewer personas **16**
> (the §Skills row still said *5-persona ranker*). ⚠⚠ **And `6675442` is titled *"F-n discharged — the
> MANIFEST reviewed"*: that review fixed the tree line and `CLAUDE.md` and MISSED the same file's own
> §Skills heading.** ⇒ **a file can state its own count in more than one place, and a review that
> greps for the number it expects will find the copy it already fixed.** Gate green; ratchet held at
> **0**, not lowered — *the fix was the content, never the date.*
>
> ⏭ **NEXT: ⛩ THE OPERATOR HANDOFF.** [[recruitment_brief]] is `ready_for_operator`. **O1–O3 are each
> ⛩ gated on a human act** — five recruited cold readers (agents must not recruit), a fresh macOS
> account, and the operator running the funnel as an outsider. **Run order: AC-3 → AC-2**, then the
> panel as readers land. Agent-side work resumes at transcription and two-scorer scoring.
>
> ✅ **THE HANDOFF WAS MADE 2026-08-26** — the brief was presented in full (profiles, burn rule,
> consent script, run order **AC-3 → AC-2**, and the two things a handoff loses if left in prose: a
> **failing panel is outside the ratified budget**, and **AC-3 halts before submitting**). P5.1 now
> waits on humans and **nothing in it waits on an agent**.

> ⛩⛩ **`P4.4b` IS OPEN AND HALTED AT ITS PRE-BUILD GATE (2026-08-26) — nothing built, criteria NOT
> edited, budget NOT re-ratified.** ⛩ **Routing call taken by the operator, not here (SO#1)**: P5.1's
> remaining objectives are each gated on a human act, so the choice was *hand off and halt* or *hand
> off and open P4.4b* — **ruled: open P4.4b, pass first, no build until signed**, on the
> P4.2/P4.3/P4.4a/P4.5b/P5.1 precedent. Push ⛩ GO'd at the same gate: `44c4d79..4b4d044`, gitleaks
> clean, unpushed **3 → 0** derived.
>
> **Convention 13 ran COMPLETE at 26/26 with coverage recorded** (`AC×AC = C(4,2) = 6` plus
> `AC×V = 4×5 = 20`, derived not typed) → `artifacts/p4_4/ac_amendment_proposal_p4_4b.md`,
> **`proposed`**: **20 clean · 6 defective**, plus **6 non-pair findings**. **Seventh consecutive
> mission where the pass has paid for itself**, and the reason it ran is the finding underneath it:
> P4.4b's budget was ratified **08-24** and since then the freeze lifted, four missions closed, the
> suite moved 587 → 633, and AC4's gating memo was delivered — *a budget costed against conditions
> that no longer hold*, for the seventh time.
>
> ⭐⭐ **THE SHARPEST FINDING: THE AMENDMENT THAT REPLACED AC4 LEFT THE LIMB THAT FAILED IT
> UNCHANGED.** DEFECT-4 was that AC4's distinguishing claim *"was tested by nothing — a breach test
> proves a budget fails when exceeded, and **a transcribed budget breaches identically**."* AC4 was
> **REPLACED**; `verification_method` still reads *"V1–V4 **unchanged in kind** … **deliberate budget
> breach**"*. ⇒ **DEFECT-4 survives intact inside the verification method written to close it.**
> ⭐ **And the asymmetry is visible in one sentence**: AC1's amendment *was* mirrored into V1 —
> `IN-CONTAINER` is right there in caps — and AC4's was not, same author, same field, same sitting.
> **A criterion and its limb are two objects, and amending one is not amending the other.**
>
> ⭐⭐ **AC4's INTERIM CLAUSE IS KEYED TO AN EVENT THAT CAN NO LONGER OCCUR.** It reads *"if ⊳ D-E's
> **mirror** has not landed"* — and **the mirror was WITHDRAWN at A3** as contradicted from both ends.
> The antecedent is not *"not yet"* but **"never"**, so AC4 is permanently in its fallback and nothing
> says so. ⭐ **This is the *criterion amended around a temporary condition* class INVERTED**: in its
> four prior sightings the condition **expired**; here it was **abolished by a later amendment in the
> same document**, and the criterion was not re-read against it. **An amendment can strand a clause
> elsewhere in the file it is amending.**
>
> ⛩ **AND AC4's CRITERION AND ITS OWN AMENDMENT ROW GIVE OPPOSITE INSTRUCTIONS, LIVE TODAY.** The
> criterion says *proceed under the interim clause, report as a gap*; the amendment row says
> ***"do not build B2 before that answer."*** The memo was **delivered 08-27** with `ack_required:
> true` and **there is no reply** `[D]`. ⇒ **P4.4b cannot be executed as written without choosing
> between two clauses of its own AC4**, and neither is subordinate on its face. **Left to the
> operator (§4), not resolved here** — recommendation **(c)**: build **B2a** now, hold **B2b**.
>
> ⭐⭐ **B2 FUSES TWO REACHABILITY CLASSES, AND THE REMEDY IS THIS MISSION'S OWN SPLIT ONE LEVEL
> DOWN.** The **sweep** runs over the CI-built artifact with *no* external dependency; the **budget
> provenance** is the half that waits — and B2 bundles them under a single ⊳ D-E gate, so the
> unblocked half is blocked by a question it does not depend on. P4.4 was split into P4.4a/P4.4b on
> exactly this principle, stated in this file: ***"the split line is REACHABILITY, not topic."***
> B2 fuses on **topic**. ⇒ **B2a / B2b.**
>
> ⭐ **Three further limb defects, all with zero-new-instrument remedies** — conventions 15/16/17 each
> ruled against authoring an instrument at the tail of a sitting, and three of this desk's last four
> instrument defects are why. **V1 cannot see over-masking** (a mask that swallows a real region
> leaves it green forever; masks only ever grow) — remedy is `gate-48`'s already-ratified exclusion
> discipline, *"THE EXCLUSIONS ARE PART OF THE CLAIM AND ARE ASSERTED, NOT ASSUMED"*, with G48d's
> pinned arithmetic. **V4 cannot tell a *wired* instrument from an *inert* one** — AC2 says *"WIRED
> INTO THE APP AND SHIPPED"*, V4 tests *shipped*; the campaign has been bitten twice (P4.2's
> font-weight *"migration announced in a comment"*, the `aria-live` residue). **AC3's *"fails
> loudly"* is tested by nothing** — one passing sweep run proves the sweep executes, not that it
> fails.
>
> ⭐ **AND THE STRUCTURAL FINDING IS UPSTREAM OF ALL THREE: THE V-LIMBS ARE UNLABELLED.** P5.1's and
> P4.5b's limbs carry `[asserts AC-n]`; P4.4b's do not, and they are listed in an order that does
> **not** track AC1–AC4 — the second limb belongs to AC4, the fourth to AC2. **A pass cannot ask "is
> this criterion tested by anything" against a field that never says what anything tests**, and all
> three mismatches became visible only once the mapping was written out. *An unlabelled limb is how a
> partial pass reads as complete* — convention 13's own amendment, one level down. Remedy: free.
>
> ⚠ **Two execution hazards named so B0 does not discover them by flake.** ⭐ **A baseline is the one
> artifact in this suite where an instrument defect becomes PERMANENT** — every other gate re-derives
> each run; a baseline is captured once and everything after is compared to it. This campaign has
> produced that defect twice (P4.1's *"dark screenshot under a light filename"*; P4.2's **71 phantom**
> nav failures from class-toggling) and P4.3 found **`addInitScript` silently not applying**, so *the
> very API the correct pattern uses can fail open*. Verified at the object: `BaseLayout.astro:74–76`
> (dark default, light via `localStorage.theme`), `gate-4-a11y.spec.ts:73–80` (the working seed).
> ⇒ **B0 needs a theme control on capture.** And the **freshness date is a confirmed dynamic region**,
> not a hypothetical one — `utils/contentSource.ts:63 lastUpdated()` renders a git-derived per-page
> date through `DocumentationLayout` across five route families `[D]`.
>
> ✅ **One control passed and is recorded as a result**: `gates.yml` already runs
> `mcr.microsoft.com/playwright:v1.59.1-noble`, so AC1's container amendment adds a **snapshot
> project**, not a CI substrate — the 08-24 amendment predicted this and the prediction held.
>
> ⛩ **Budget proposed for re-ratification: ~250–400 kT / 2 → ~330–520 kT / 3 sessions** (**~280–440
> under (a)/(c)**, because B2b leaves the band). The raise is **≈1.3× and modest on purpose** —
> nothing here adds a feature; it is three red-test mutations, the mask discipline, the theme control
> and the split. Contrast P4.4a's **2.4×**, which was real new work.
>
> ~~⏭ **NEXT: ⛩ THE SIGNATURE** on `ac_amendment_proposal_p4_4b.md`, which also carries the **one
> operator question** (§4). **Until then, no build.**~~
>
> ⛩⛩ **SIGNED 2026-08-26 — `ac_amendment_proposal_p4_4b.md` is `accepted` and P4.4b IS BUILDING.**
> Both answers taken at the same gate:
> - **§4 → (c) SPLIT.** Build **B2a** (the sweep — no external dependency); **HOLD B2b** (budget
>   provenance) until Vitruvius answers ⊳ D-E. ⭐ **AC4 therefore closes only PARTIALLY in this
>   increment**, recorded ◐ **OWED** as a **register row, not a sentence** (P4.3's F-v precedent —
>   *a deferral recorded only in narrative is a deferral with no gate*). If the reply lands
>   mid-increment, **B2b re-enters at its own ⛩ gate**; it does not silently absorb into B2a.
> - **Rulings 2–5, the §5 criteria changes, and the budget: signed as proposed.** AC1 gains mask
>   enumeration + pinned arithmetic + a **theme control**; AC2 gains ***emits*, not merely shipped**;
>   AC3's co-run prohibition is **enforced** by `gates.yml:32`'s existing `concurrency:` group; AC4's
>   interim clause is **re-keyed** off the withdrawn mirror; **V1–V4 are now labelled `[asserts AC-n]`**
>   and V2 gains the **provenance mutation** — *a bar edited by hand goes red* — which is the test
>   DEFECT-4 always needed and never had.
> - **Budget ⛩ re-ratified: ~250–400 kT / 2 sessions → ~280–440 kT / 3** (B2b's ~50–80 kT leaves the
>   band under (c)). ≈1.3×, and **nothing in it adds a feature**.
>
> ~~⏭ **NEXT: `B0`** — the visual-regression lane.~~ ✅ **B0 IS DONE 2026-08-26** (`1816993`) —
> `gate-49`, 12 templates × 2 themes, baselines generated **and** compared in
> `mcr.microsoft.com/playwright:v1.59.1-noble`. Suite **633 → 659** derived · **V1 7/7** (5 mutations
> + 2 controls, in-container) · gitleaks **946 commits, no leaks**. **AC1 ✅.** **No deploy** —
> P4.4b is met on-build.
>
> ⭐⭐ **THE RED-TEST FOUND THREE DEFECTS IN THE GATE BEFORE THE GATE FOUND ANYTHING IN THE SITE, AND
> ALL THREE HAD A MASK AS THE EASY FIX.** (1) **A tolerance written by feel let a visible regression
> through** — `maxDiffPixelRatio: 0.002`, commented *"deliberately TIGHT"*, passed an `h1`
> letter-spacing change because one heading's glyphs are a vanishing fraction of a 7,597 px
> full-page capture; only `body{display:none}` could move it. ⭐ **AC1 supplied its own fix**: a
> tolerance exists to absorb non-determinism, and AC1's same-container requirement *removes the only
> source this lane has* ⇒ **`maxDiffPixels: 0`**. ⚠ **Both of this gate's tolerances were first
> drafted too loose by the same author in the same sitting** (the mask budget: 0.40 % against a
> 0.0716 % worst case). ⇒ ***a number written by feel is a formality wearing a pin's clothing*** —
> and *measure first, then pin* is the only thing that caught either.
> (2) ⭐ **TWO MUTATION CASES WERE INERT, AND ONE OF THEM WAS A CONTROL THAT REPORTED SUCCESS.** Bare
> `h1{…}` at (0,0,1) loses to Astro's scoped `h1[data-astro-cid-…]` at (0,1,1): correctly written,
> correctly applied, **correctly served** (curl-verified) — and never reaching a pixel. ⭐ **A non-red
> is one of THREE things — a weak gate, a mutation aimed at the wrong assertion, or one aimed
> correctly and INERT — and naming which is the point of running the harness** (P4.3 named the first
> two; this is the third). **Case 1 announced itself by failing; case 6 was a control, so it
> announced success.** *A control that passes for the wrong reason is worse than no control, because
> it certifies a mechanism it never exercised.* ⚠ And the surface error underneath is **convention
> 17's own amendment, committed inside the harness written to enforce it**: `grep` proved *"the
> mutation is in the file"*, which is **not** the claim *"the mutation changes the render"*.
> (3) ⭐⭐ **`home` WAS UNSTABLE AND THE FIRST THREE EXPLANATIONS WERE ALL WRONG** — not a
> partially-decoded PNG, not a random hero variant, **not an unstable region** (two full-page captures
> 600 ms apart are *pixel-identical*; every 800 px band is stable alone; only the PNG **byte length**
> moved). The cause is **the capture perturbing the page**: `fullPage` resizes the viewport → the
> hero's `ResizeObserver` redraws the canvas → the stability check never converges.
>
> ⭐⭐ **THE REMEDY REJECTED IS THE REUSABLE PART.** All three had a mask available and **every mask
> would have gone green** — masking the hero would have blanked *the one region this campaign lists
> as protected*. **Over-masking arrived disguised as a flake remedy, within an hour of the gate being
> authored against it** — which is precisely how FINDING 4 said masks grow, observed live. Taken
> instead: **`reducedMotion: 'reduce'`, the site's own mechanism** (`HomeHero.astro:593` starts the
> rAF loop only `if (!reduceMQ.matches)`), and the canvas **hidden rather than masked**, so the
> **SSR SVG beneath it is asserted** — the component's own declared no-JS/a11y baseline. ⇒ **hiding
> revealed a guarded layer where a mask would have removed one.** ⚠ Limitation stated on the gate's
> face: the baselines assert the **reduced-motion** rendering; the animated constellation is **not
> covered and not claimed**.
>
> ⚠ **Caught in passing, and it would have bitten every developer:** `npm run test:gates` was bare
> `playwright test`, which runs **every** project — it would have dragged the snapshot lane onto
> macOS and produced **24 red on a perfectly good tree**, which is how a suite teaches people to run
> it with `--grep-invert`. Pinned to `--project=chromium`; the visual lane is its own script and its
> own CI step, joining the **existing** `concurrency: gates-${{ github.ref }}` group that AC3's
> amendment names as the co-run mechanism.
>
> ⚠ Named, not absorbed: the baselines are **15 MB across 24 files** — full-page capture is what makes
> the coverage real, and the payload is its price. ⚠ gate-30's two reds during verification were
> **convention 6's documented case** (`astro build` does not inject redirects), diagnosed by asking
> which step produces the thing it asserts before changing anything.
>
> ~~⏭ **NEXT: `B1`** (field instrument, **wired AND emitting** — V4's amended limb) **then `B2a`** (the
> sweep, **failing loudly** — V3 needs a run that goes red, not merely a run). ⛔ **B2b stays held**
> under ⛩ ruling (c) until Vitruvius answers.~~
>
> ✅ **B1 + B2a DONE 2026-08-28** (`9c8d79b` · `f852060`) — suite **659 → 667** derived, fast lane
> 514 → 522/1skip. **B1 / AC2 ✅ ON-BUILD**: `web-vitals` emitter wired in `BaseLayout`, same-origin,
> **zero-network by construction** (CSP `connect-src 'self'` · static output · gate-42 each forbid a
> transport today); **emission observed live** (TTFB + FCP on one page load → `window.__adnaVitals` +
> the `adna:vital` event); `gate-50` red-proven **6/6**; `/privacy` gained §performance **in the same
> commit, before ship, per that page's own written commitment**. The owed-list is on the mission's
> face: dashboard enable (Speed Insights, ⛩ operator) → transport (its own gate, `/privacy` first) →
> first p75 reading (+ deploy + traffic). **B2a / AC3 ✅**: weekly `unlighthouse-sweep.yml` over the
> CI-built artifact, **no `continue-on-error`**, **joins `gates-${{ github.ref }}`** exactly as
> gates.yml's own comment contracts (queues, never cancels); `gate-51` contract gate red-proven **7/7**
> incl. a transcription-drift detector binding the sweep's bar to gate-19's `perfMin`×100 same-diff;
> **V3 demonstrated live** — EXIT=1 at bar 100 with per-route ERRORs, EXIT=0 at the standing 90.
> ⭐ **The calibration finding**: Unlighthouse's CI default applied **mobile 4G network throttle to a
> DESKTOP form factor**, scoring the site **0.78** where gate-19's fixture instrument
> (`--preset=desktop`) reads **0.95–1.0** — *a bar transcribed from one instrument and enforced by a
> stricter hybrid is two instruments sharing one number*; the sweep is pinned to the bar's own
> instrument, measured not assumed. ⛔ **B2b stays HELD** — Vitruvius's 08-27 notice telegraphs a
> scope-B reply *staged on their side*; a staged reply is not a delivered one, so the ⛩ re-entry gate
> has not fired. ~~⏭ **NEXT: GR-1 Lane A at its own conv-13 pre-build gate** (the ratified Gate-1
> order)~~ ✅ **GR-1 IS OPEN — see the GR-1 block below.** P4.4b's own remainder is **B3** (+ B2b when
> the reply lands). Nothing deployed — P4.4b is met on-build; ~~the first on-GitHub scheduled sweep run
> is owed on the next ⛩ push GO.~~ ⛔ **STRUCK 2026-09-01 AT GR-2 O3 — FALSE, AND NEVER CHECKED
> AGAINST THE FILE IT DESCRIBES.** `unlighthouse-sweep.yml` triggers on `schedule` +
> `workflow_dispatch` **only** `[D]`; **a push neither triggers it nor is required for it.** Its first
> run is owed to the **Tuesday 07:43 UTC cron**, and fires 2026-09-01 whatever anyone does.

> ⏸⛩ **`GR-1` IS OPEN AND HALTED AT ITS ⛩ CONVENTION-13 PRE-BUILD GATE (2026-08-28) — nothing built,
> criteria NOT ratified, budget NOT ratified.** `missions/mission_haussmann_gr_1_trust_path.md`,
> **`queued`**. This is **GRANDE REVUE Lane A**, opened per the ratified Gate-1 order (**B → P4.4b
> B1+B2a → GR-1 → Lane D**) and on the P4.2/P4.3/P4.4a/P4.4b/P4.5b/P5.1 precedent: **pass first, no
> build until signed.** The battle plan ratified this mission's **shape** and says so on its own face —
> *"GR-1's budget is NOT ratified here."*
>
> ⭐ **It is the first mission in this campaign with NO phase number.** Grande Revue is the campaign's
> **late-stage review-and-improve phase** (situation_report §1), not a P-slot, so `phase: GR` and
> artifacts land at `artifacts/gr_1/`. ⛩ **`mission_count: 27 → 28` is PROPOSED, NOT EDITED** — GR-1 is
> a genuinely new mission rather than a split increment, so the charter's *"a split increment is not a
> new mission"* reasoning does not hold the count; and that field's own comment records that amending it
> *"was therefore explicitly the operator's to take."*
>
> **Convention 13 ran COMPLETE at 40/40 with coverage recorded** (`AC×AC = C(5,2) = 10` + `AC×V = 5×6 =
> 30`, derived not typed), each pair read **both** directions → `artifacts/gr_1/ac_amendment_proposal.md`,
> **`proposed`**: **31 clean · 9 defective** — 1 failure · 2 structural gaps · 2 limb defects · 2 unstated
> constraints · 1 open operator choice · **1 control that passed**. **Eighth consecutive mission where the
> pass has paid for itself.**
>
> ⭐⭐ **THE UNIFYING FINDING: THREE OF THE FIVE OBJECTIVES ARE GUARDED BY GATES THAT VERIFY A LOCAL PROXY
> FOR A PUBLIC OR RENDERED PROPERTY.** `gate-42` runs against `astro preview`, which applies **no
> `vercel.json` headers**, so it structurally cannot see a CSP violation (`grep -rn "font-src" tests/
> scripts/` → **0**) · `gate-36:73` resolves the pin with `git cat-file -t` **in the same local checkout
> the pin was read from**, and `test.skip`s itself out of CI entirely, so it **can only ever pass** —
> while its own comment names the exact defect that is live · `gate-17` G12 checks twin **shape** (200,
> content-type, pointer block, an `h1`, >200 bytes) and **never compares twin content to page content**,
> so a silently deleted placeholder passes every gate. ⇒ **A1, A3 and A4 are one finding with three
> faces**, and each objective's real deliverable is *the gate that could have caught it*, not only the
> fix. This is the **instrument-narrower-than-its-conclusion** family arriving at the level of the
> **suite** rather than of one command. ⛩ Proposed as a convention rather than a sixth criterion — the
> defects have gates; the **class** does not.
>
> ⚠ **And it is the SECOND defect in the same emitter's HTML→markdown conversion.** P4.5b found it
> converting `<strong>` before `<a>` and discarding hrefs — *"the copy was already right; the machine
> surface was lying about it."* A3 is that sentence again, same file family, found by a different route.
>
> ⭐⭐ **A4 IS WORSE THAN THE REVIEW RECORDED, AND ONE OF THE BATTLE PLAN'S TWO REMEDIES IS NOT
> PERFORMABLE.** `build_tour_files.mjs:67` hardcodes `aDNA-Network/aDNA` while `:104-106` reads the SHA
> from the **local `~/aDNA/.adna` checkout — whose origin is the archived, frozen `adna-legacy`** and
> which is **12 commits ahead of it**; `git branch -r --contains 0364d85` is **empty** `[D]`. ⇒ the
> script **pairs a SHA from one repository with the URL of another**, and *"push the release-sync
> commit"* names an outward act with **nowhere to push** (Standing Rule 1 forbids modifying `.adna/`) —
> the *"a GO on an act whose prerequisite does not exist on the performing tree"* class, **fifth
> instance**. ⭐ **A third option neither disjunct offered is performable today**: the local commit's own
> message reads *"release sync: **v8.9 from aDNA-Network/aDNA**"* — a **downstream artifact is never a
> citable source** — and that upstream release is public, tag **`v8.9` → `c8e5427`**, serving **200**,
> with the manifest's own `source_commit_date: 2026-07-24` **already matching it**.
>
> ✅ **THE MOST DANGEROUS PAIR WAS MEASURED, NOT ASSUMED, AND THE CONTROL PASSED.** If any of those 12
> local commits had touched the four vendored files, AC-4 would not be a pin correction at all — it
> would be a **content change to the trust page**, silently altering the bytes the page publishes hashes
> for. Measured `[D]`: **all four byte-identical** (`CLAUDE.md` · `template_workspace_claude.md` ·
> `skill_project_fork.md` · `skill_onboarding.md`) local-`.adna`-HEAD vs upstream `v8.9`. ⇒ the re-pin
> **moves no content**, and the byte-identity limb is **already satisfied** — recorded **with its
> supersession condition** (a `.adna` re-sync or a tag move invalidates it), per convention 15.
>
> ⚠ **AC-1's SCOPE IS DELIBERATELY LEFT UNSETTLED, AND THE CRITERION IS WRITTEN SO EITHER ANSWER GIVES
> THE SAME FIX.** The revue captured real console text `[D]` and called it *"every page, both themes"*;
> this desk measured that the inlined asset is a **`cyrillic-ext`** subset (~2028 B) and that
> `BaseLayout.astro:52-54` preloads **latin only** — a subset neither preloaded nor matched by a painted
> glyph is never loaded, hence never blocked. **Both are `[D]`; they cannot both be complete.** ⇒ the
> revue's *"every page"* is a **typed** figure (KW-14), and a criterion keyed to it is
> unfalsifiable-green if the true count is zero and wrongly-red otherwise. **AC-1 gains a static limb**
> (*no `data:font` in `dist/**/*.css`*, which cannot be vacuous) and V1's red run is demoted to **the
> measurement that settles the scope** rather than a precondition of passing.
>
> ⭐ **THIS PASS DID NOT RAISE THE BAND — THE FIRST OF EIGHT THAT DIDN'T, WHICH IS WHY IT IS WORTH A
> LINE.** Its findings split evenly between cheap remedies (a static limb; a mislabelled `[asserts]`
> list) and **scope reductions**: GAP-2 discharged by the control above, and DEFECT-5 cutting AC-5 from
> three surfaces to two after one turned out to be a **source comment that never renders** — so V5 could
> never have asserted it, and P4.2's *a migration announced in a comment is not a migration* inverts
> here into *the comment is the evidence, not the surface*. Band: **~200–290 kT / 2 sessions**,
> `executor_tier: opus`; the gate sitting itself is separate at ~60–90 kT.
>
> ⛩ **THREE QUESTIONS CARRIED TO THE SIGNATURE** (proposal §5): the **v2/v3 content-truth ruling** (three
> surfaces disagree; `HomeHero.astro:327` points at the *title* being wrong, but a v3 document beside v2
> tokens is coherent, and an agent picking silently would be **typing a claim**) · **`mission_count:
> 27 → 28`** with a new `### GR` charter section · whether the **local-proxy gate class** becomes a
> convention.
>
> ~~⏭ **NEXT: ⛩ THE SIGNATURE. Until then, no build.**~~
>
> ⛩⛩ **SIGNED 2026-08-28 — `ac_amendment_proposal.md` IS `accepted` AND GR-1 IS BUILDING.** §4's
> criteria changes adopted **as proposed**; budget ⛩ ratified **~200–290 kT / 2 sessions**, `opus`;
> mission `queued` → **`in_progress`**. All three §5 questions ruled in the same act:
> - **Ruling 2 — the shipped visual identity is `v2`; the TITLE is the wrong string.**
>   `visual-identity-v2.mdx`'s `title` + `ref_title` correct to *"Visual Identity v2"*; the two
>   `writing-guidelines` links and the route slug were **already right and are not touched** — so this
>   is a one-word content fix, **not** a URL change, and ADR-057's redirect obligations do not fire.
>   ⭐ **DEFECT-5 is load-bearing in the ruling rather than incidental to it**: `HomeHero.astro:327` is
>   the **evidence the ruling rests on** and is *cited, not edited*. P4.2's *a migration announced in a
>   comment is not a migration* **inverts here — the comment is the witness.**
> - **Ruling 3 — `mission_count: 27 → 28`**, the first change to that field since DP6, plus a new
>   **`### GR — Grande Revue`** charter section with its own exit gate. `estimated_sessions` **37-50 →
>   39-52** and `calibrated_sessions` **37-42 → 39-44**, both **re-derived in the same commit** because
>   both are marked derived-not-typed (KW-14) and the lane that moved the count moves them too.
>   ⚠ **`phase_count` HOLDS at 6** — GR is a lane inside the campaign, not a seventh phase.
> - **Ruling 4 — the local-proxy gate class is now `convention 18`.** ⛔ **Habit only, no checker.**
>
> ⚠ **What the signature does NOT close, said so nobody infers otherwise: AC-1's scope question is
> still open** and is settled by **V1's red run during O1**, not by the signature — which is the
> honest state of a criterion deliberately written so **either answer gives the same fix**.
>
> ~~⏭ **NEXT: `O1`** (fonts as files under an unchanged CSP), then O2→O5.~~
>
> ✅ **`GR-1` IS CLOSED 2026-08-28 — ALL FIVE CRITERIA MET, AAR FILED (SO#5), mission `completed`.**
> **AC-1 ✅ AC-2 ✅ AC-3 ✅ AC-4 ✅ AC-5 ✅ · V1–V6 ✅.** Fast lane **522 → 526/1skip** derived ·
> `html-validate` **0**. Every new or repaired gate **red-proven with controls**: `G42e` 4/4 ·
> `G18` 5/5 · `gate-36`'s pin limb 5/5 · `G19` 5/5. ⛔ **BUILT, NOT DEPLOYED** — met on-build by
> design; a ⛩ push GO **then** a ⛩ deploy GO are owed, in that order.
>
> ⭐⭐ **CONVENTION 18 WAS EARNED BY THREE LIVE INSTANCES, AND ALL THREE FIXES LANDED IN THE BLIND
> GATE RATHER THAN BESIDE IT.** `gate-42` gains **G42e** (no font ships as a `data:` URI — a *static*
> limb, because a dynamic probe on a CSP-free preview is what made the gate blind). `gate-17` gains
> **G18** (twin content vs page content — G12 checked seven properties of the twin **alone**).
> `gate-36`'s pin limb is **replaced**: it resolved the pin in *the same checkout the pin came from*
> and `test.skip`ped in CI, so it **could only ever pass** — the new one needs neither the checkout
> nor the network and therefore **runs everywhere**.
>
> ⭐⭐ **A4's REMEDY WAS A THIRD OPTION NEITHER RATIFIED DISJUNCT CONTAINED**, found by asking *what
> is this SHA actually a SHA of?* rather than *is it reachable?* The generator now derives the pin
> from `.adna/CLAUDE.md`'s own `version:` (**`v8.9`**, derived not transcribed) and publishes the
> **immutable release tag**; the local sync SHA is recorded and never published. **All five URLs
> 200** (were 404) and **all four files byte-identical AT THE PIN** — the revue's `raw/main`
> mitigation could not be inherited, because *`main` is not the pin and `main` moves*.
>
> ⭐ **AC-1's disputed scope was SETTLED, and it falsified the pass's own premise.** V1 measured
> **50/50 page×theme loads pre-fix, 0/50 post-fix** — the revue's *"every page, both themes"* was
> **right**, and this desk's inference (an un-preloaded, glyph-gated subset would rarely load) was
> **wrong**: `unicode-range` defers a *network fetch*, and a `data:` face has none. **The remedy
> survived its premise** because AC-1 was written against the ASSET, not a page count; the correction
> is recorded at all four objects that carried it. ⚠ And the revue's figure was **typed** when
> written (KW-14) — right, but not derived. *A typed figure that happens to be right is still typed.*
>
> ⭐⭐ **THE SECOND-ORDER FINDING IS THE SHARPER ONE: `R-64` HAD ALREADY DIAGNOSED P2-1 — WITH ITS
> REMEDY — SINCE P0.5.** *"For the newcomer the sentence over-promises; scope it to 'aDNA itself
> sends nothing'"* is exactly what GR-1 shipped, and the Grande Revue rediscovered it independently
> **eleven missions later**, because nothing converts a register caveat into work. ⇒ **A caveat in
> the register is a finding with a home and no gate** — P4.3's F-v lesson arriving *inside the
> instrument built to prevent it*. ⚠ Note which surface was honest throughout: the register never
> claimed the sentence was unqualified; **the page did.**
>
> ⚠ **FIVE of this desk's own instruments were wrong before their subjects** (the standing streak) —
> a guard grepping a word that also appears in its option's doc comment · `grep -c` exiting 1 on zero
> so `|| echo 0` yielded `"0\n0"` · a control asserting an absolute count its mutation never governed
> · **a corpus excision that split on text the corpus does not contain verbatim, and so silently
> excluded nothing while reading exactly like a successful exclusion** · a schema-limit check that
> measured one field and assumed its sibling. **All five caught by structure, not vigilance.**
>
> **`F-w` added** (the vendored marketplace promise, P2-3) with a named destination — the next
> `skill_template_release`, joining F-k. Register re-derived **21 total · 15 struck · 6 live**, and
> **G19 asserts the row exists** (GAP-1's remedy: a memo is not an emitter, so V2 could have passed
> with it unwritten). ⭐ It is unfixable here — the file is **byte-vendored** and the page **publishes
> its sha256 and invites a diff**, so editing the site copy would trade a copy defect for a **trust
> defect on the one surface built to be checked** — and O4's release-tag pin makes the eventual fix
> arrive for free.
>
> ⏭ **NEXT: ⛩ a push GO, then ⛩ a deploy GO** (in that order — push precedes deploy, never
> `--bootstrap-stamp`), which would put GR-1 **and** P4.4b's B1+B2a live. Then **Lane D** (story
> coverage, the Gate-1 order's last lane) or **P4.4b B3**. ⛔ B2b stays HELD on ⊳ D-E; P5.1 stays
> with the humans.

> ⛩⛩ **2026-08-29 — THE DEPLOY GO WAS TAKEN AND IT IS LIVE. GR-1 + P4.4b B1/B2a serve at
> `adna.network`, `tree=d5ff043`, and the probe reads 26 PASS / 0 FAIL.**
> Record: [[probe_postdeploy_green]] beside [[probe_predeploy_red]]. No override flags — the
> alias-ancestry guard passed on its own terms (`live 51af717 is an ancestor of HEAD d5ff043`).
>
> ⚠ **TWO CARRIED FACTS WERE WRONG AT SESSION OPEN AND BOTH WERE DERIVED, NOT TRUSTED.** The record
> said *unpushed 39* and *next = push GO then deploy GO*. Derived: unpushed was **2**, and the push
> GO **was already spent** — `f2d7324` was on `origin/main` (checked with `git ls-remote`, i.e. at
> the remote, not at a tracking ref that can be stale by exactly this much). ⇒ the gate in front of
> the operator was **one act, not two**. *This is the third consecutive session in which a
> carried count was wrong and the derived one was right; "derive, never trust" keeps earning itself.*
>
> ⭐⭐ **THE PUSH-BEFORE-DEPLOY RULE HAS A MECHANISM, AND WE FOUND IT BY READING FOR ONE.** The two
> unpushed commits were **records only** — zero shipped-surface bytes — so "push first" looked purely
> procedural, and the tempting move was to deploy and push after. `inject_build_stamp.mjs:83` stamps
> `git rev-parse HEAD` and **nothing in the chain checks that HEAD is public.** Deploying at an
> unpushed `d5ff043` would have published `/.well-known/adna-build.json` naming a commit **no
> stranger could resolve** — **P1-3's exact defect class, reintroduced by the act of shipping P1-3's
> fix**, and it would have left the next deploy's ancestry guard resolvable only from this checkout
> (F-s's shape). ⇒ **A convention whose mechanism you cannot state is a convention you will
> eventually skip on a day it looks like ceremony.** Verified at the object, not inferred:
> `git branch -r --contains <stamped sha>` → `origin/main`.
>
> ⭐ **Convention 18 did the deciding on whether CI's red blocks.** CI was red on `gate-33-freshness`
> and the question is not "is the suite green" but **which surface the instrument ran against**.
> `deploy_adna.sh:157` builds locally; `:237` ships `--prebuilt`; **CI's artifact never reaches
> production**, and the gate's own claim — *dates are real on shipped pages* — is green on the
> surface that ships. The red is a statement about **CI's checkout**. Scoped out, deliberately and
> with the reason written down, rather than waved past.
>
> ⚠ **`F-x` added — the gate-33 CI defect, and it is TWO debts, not one.** (a) The cause: unknown.
> (b) **The error message names a remedy already applied** (`gates.yml:51` is `fetch-depth: 0`), so
> the gate converts a symptom into a confident wrong diagnosis — the campaign's own class, in its own
> CI. ⭐ A lead, filed **as a hypothesis and explicitly not as a diagnosis**: the CI log shows
> `actions/checkout` writing `safe.directory` under a **temporarily overridden HOME** which it then
> restores, and `contentSource.ts:37` computes `isShallow` as `git(...) !== 'false'` — so **a git
> that fails for any reason at all is indistinguishable from a shallow clone**, which is precisely
> what lets the message be wrong. That conflation is fixable regardless of the cause. ⛔ Operator
> scoped this OUT of the deploy sitting: it gets its own, and a fix authored on an unverified cause
> is the thing the last session warned against. ~~Register **22 total · 15 struck · 7 live**.~~
> ⛔⛔ **CORRECTED 2026-09-01 AT `GR-2` O5 — BOTH HALVES OF THAT SENTENCE WERE FALSE.** *"`F-x`
> added"* was a claim about a destination that was never checked there: **the register held no `F-x`
> row** and read **21 / 15 / 6** `[D]`. The tally above was **typed** (KW-14), counting a row that
> did not exist. ⇒ **`F-u`'s class, third sighting** — *"'Routed' is a claim about the destination,
> so verify it there, never in the prose that routed it"* — landing, this time, on the one row a
> whole mission was convened to discharge. The row is now **authored and struck** in the same commit
> and the gap is registered as **`F-y`**; re-derived, not carried: total **23** · struck **16** ·
> live **7** (F-d · F-e · F-j · F-k · F-v · F-w · F-y).
>
> ~~⏭ **NEXT: Lane D** (story coverage, the Gate-1 order's last lane) or **P4.4b B3**; `F-x`'s own
> sitting is now competing with both.~~ ✅ **`F-x`'s sitting IS `GR-2` — see the block below.**
> ⛔ Still held: **B2b** on ⊳ D-E (Vitruvius scope-B reply is *staged*, not delivered) · the **Hopper
> reply** (separate ⛩) · **P5.1** with the humans. ⚠ B1's
> vitals emitter is live but **zero-network** — owed: ⛩ Speed Insights enable → transport → first p75.

> ⛩⛩ **`GR-2` IS SIGNED AND BUILDING — O0/O1/O2 CLOSED (2026-08-31), HALTED AT ⛩ O3's PUSH GO.**
> `missions/mission_haussmann_gr_2_ci_freshness.md`, **`in_progress`**. GRANDE REVUE's second lane,
> convened on `F-x` — **two debts**: (a) the cause of six consecutive `gate-33-freshness` reds on
> `main`, and (b) an error message naming a remedy `gates.yml:51` had applied the whole time.
> Convention 13 ran **complete at 42/42 with coverage recorded** (6 defective · 8 clean · 28
> correctly unrelated), **signed with amendments**; budget ⛩ ratified **~165–270 kT / 2 sessions**;
> `mission_count: 28 → 29`, `phase_count` **HOLDS at 6**. **Ninth consecutive mission where the pass
> has paid for itself.**
>
> ⭐⭐ **O1: THE PLANNED MUTATION FAILED TO MUTATE, AND THAT VINDICATED `F1` EMPIRICALLY.** Docker
> Desktop remaps bind-mount ownership to the running user, so the local container **cannot** produce
> a uid mismatch at any uid — measured at 0 and 1001. Not *"does not"*; **cannot**. `F1` had predicted
> a local reproduction could not close AC-1 and gave the wrong reason; the truth is stronger and
> simpler — **the local surface has no uid pair at all.** The mechanism was then proven on a real
> filesystem with a control (`fatal: detected dubious ownership`, exit 128, **empty stdout** ⇒
> `'' !== 'false'` ⇒ `isShallow` true), and the code path red-proven **at the gate, in CI's image**:
> a cause-agnostic failing-git stub reproduces **CI's exact signature** while inducing a cause that is
> **provably not shallowness**. ⇒ **`F-x`(b) demonstrated, not argued.**
>
> ✅ **O2 CLOSED 2026-08-31 — `AC-2` ✅ `AC-3` ✅ `AC-5` ✅** (`artifacts/gr_2/o2_redproof_record.md`).
> `contentSource.ts` carries three states over a **pure** `freshnessStateFrom(probe)`; `git()` **pipes
> stderr instead of discarding it**; every build prints one `freshness:` line naming the state and
> quoting git's own words. **Warns, does not throw.** `gate-52` red-proven **8/8** (5 mutations ·
> 3 controls); `V3`'s in-container mutation reproduces the failure with the diagnostic **naming the
> cause and prescribing nothing**, control green. Chromium lane **645 → 653** · fast lane
> **526 → 534/1skip** · `html-validate` **0**.
>
> ⭐⭐ **`V5`'s NO-CHANGE CONTROL FAILED ON ITS FIRST RUN, EXACTLY WHERE `F4` SAID IT WOULD — AND THE
> LIMB WAS WRITTEN TO PROVE THIS MISSION HARMLESS.** Two builds of *unchanged* source differ in
> **15 of 709** paths: Astro mints a fresh random DOM id per render for the diagram components'
> `aria-labelledby` wiring (`mermaid-*` · `triad-*` · `convergence-*`). Run in its original
> control-less form — after the change, as originally specified — V5 would have reported **"O2
> altered the shipped artifact"**: *a confident wrong diagnosis produced by an uncontrolled
> instrument, which is `F-x`(b)'s own shape inside the limb built to certify this mission safe.*
> Exclusion **named and asserted** (gate-48's ratified discipline), control then **0/709**, and V5
> passes. ⇒ **AC-5 met; no deploy is owed and none is sought.**
>
> ⭐ **AND MY OWN DIAGNOSTIC SHIPPED ILLEGIBLE, WITH `grep` HIDING IT.** The line first rendered glued
> to Astro's route progress — `…/aep-1/index.htmlfreshness: git answered…` — because `loadDates()`
> fires mid-render and Astro emits progress without a trailing newline. **`grep` found it every time;
> a human scrolling a CI log would not, and being read in a CI log is the line's entire purpose.**
> Found by *reading* the log rather than searching it. Fixed at the call site, never in the returned
> string (gate-52 asserts that string verbatim). ⇒ *convention 17's amendment — the surface must match
> the claim's own verb — arriving in a build log instead of a page.*
>
> ⚠ **Deviation `D1` recorded, not absorbed**: `F2`'s amendment said *"the module-level value becomes
> that function applied to a real probe"*; the probe moved **inside `loadDates()`** instead, so
> importing the module executes **no git at all** (a cleaner seam than F2 asked for) and a **`git log`
> that fails after a healthy probe** reaches the same diagnostic. Verified before the change:
> `isShallow` had no consumer outside the file.
>
> ⚠ **A carried figure was RIGHT for once, and the naive comparison was wrong.** `npm run test:gates`
> printed **653** against a carried **667**, which reads as 14 tests vanishing. Derived: chromium
> **653** · snapshot **26** · **all-projects 679** = 671 (HEAD) + 8, and 667 + GR-1's 4 = **671**.
> Nothing missing — the campaign's "suite" figure is **all-projects** and `test:gates` is the chromium
> lane. ⇒ **a count is only comparable to a count produced by the same command.** This increment's
> own delta was isolated with `--list` (gate-52 present vs absent): **+8, removed nothing.**
>
> ⚠ **Two more harness defects of mine, both caught by their own output** (the standing streak, now
> eighth and ninth this campaign): a canonical-hash run that produced a **0-line file and compared
> cleanly against nothing** — *the cheapest possible false green*, now guarded by a `>700` floor — and
> a **grouped-diff read** that inflated the volatile set 15 → 16 by counting an unchanged `.md` twin
> shown as hunk context. *A truncated reading of a diff is a derived figure.*
>
> ⛔ **`AC-1` IS STILL OPEN AND NOTHING IN O2 NARROWS IT.** Everything so far shows a mechanism
> *sufficient* to produce CI's exact signature; nothing yet shows it is CI's — and by O1's measurement
> it **cannot** be shown from this machine. **O3 only.**
>
> ⚠⚠ **THE TREES HAVE DIVERGED, AND THE PUSH GO IS NOW A DIFFERENT ACT THAN AT THE MISSION'S OPEN.**
> Derived at the remote after O2's commit `[D] 2026-08-31`: `origin/main` = **`a68c88c`**, **not** the
> `09faced` this mission's own open recorded — **behind 2, ahead 3, remote main is NOT an ancestor of
> HEAD.** lemur shipped installer **0.4.20** (`dd94531` + `a68c88c`). ⭐ **F-s's two-writer situation
> recurring — caught BEFORE the push this time, by deriving the remote instead of trusting the sha the
> mission carried.** *A derived fact is a statement with a timestamp too.* Measured before
> recommending anything: **zero file overlap** (no conflict); lemur touched only `site/public/`; **no
> gate reads `install.sh`** and **no test pins `0.4.19`** `[D]`. ⚠ But **O2's 653/1skip was measured on
> a tree without those two commits**, so a push-after-reconcile would put a tree on `main` that no
> suite has run — and O3 needs a *clean* CI signal. ⇒ **O3 = reconcile (`pull --rebase`) → re-run the
> suite → then push.** ⛔ Not done here: reconciliation is part of performing the push.
>
> ~~⏭ **NEXT: ⛩ O3's PUSH GO** — push the diagnostic **alone** to `main`, then read CI's **named**
> reason.~~ ✅ **GRANTED AND DONE 2026-09-01.**
>
> ⛩⛩ **O3 CLOSED — `AC-1` IS CLOSED. CI NAMED ITS OWN CAUSE, IN GIT'S OWN WORDS.**
> `artifacts/gr_2/o3_ci_reason_record.md`. Rebased onto lemur's 0.4.20 (clean, zero overlap), suite
> re-run on the merged tree **652 passed / 1 skipped · html-validate 0**, gitleaks clean, pushed
> `a68c88c..1c8fde6`. Run **`33465663585`**, Build step, verbatim `[D]`:
> > `freshness: GIT COULD NOT ANSWER — dates omitted. This is NOT a shallow clone and fetch-depth
> > will not fix it. git said: fatal: detected dubious ownership in repository at
> > '/__w/aDNA.aDNA/aDNA.aDNA'`
>
> ⇒ **seven** consecutive reds explained. **Not a shallow clone.** `fetch-depth: 0` was correct the
> whole time and was never the lever — which is precisely what `F-x`(b) said the old message was
> wrong about, now shown **from the failing surface** rather than argued from a local one.
> **`F-x`(a) is discharged.** ✅ `F6` clean: **exactly one** failing assertion (`gate-33:78`);
> 649 passed · 3 skipped · 1 failed = **653**, matching the local lane; **gate-52 passed in CI**, on
> the very runner whose git refuses — deviation `D1` paying off.
>
> ⭐⭐ **THE PREDICTION HELD VERBATIM.** `gate-52`'s `DUBIOUS` constant, written 08-29 from the
> hypothesis, is **byte-identical** to the string CI produced on 09-01. ⛔ And it is stated carefully,
> because this is where a good result gets overclaimed: that does **not** retroactively promote `V2`
> from a pure-function test, and O1's `F1` was right that no local run could close `AC-1`. **This run
> closed it, and nothing else.** *Corroboration of a mechanism is not a substitute for the
> measurement.*
>
> ⭐ **THE REMEDY WAS ALREADY IN OUR OWN TREE, AND O1 WAS RIGHT TO STRIKE THE SENTENCE CLAIMING SO.**
> `visual_regression_container.sh:74` runs `git config --global --add safe.directory /work`; at O1
> the claim that we wrote it *"because git fails in this exact image"* was struck as an `[I]` dressed
> as a `[D]`, since git works fine in that image on this host. **Both facts hold, and neither cancels
> the other.** ⇒ ***a defensive measure you cannot demonstrate on your own machine is not thereby
> unjustified — it is unmeasured.*** Striking the *evidence* while keeping the *line* was correct on
> both counts.
>
> ⚠⚠ **TWO CARRIED CLAIMS IN THIS FILE WERE FALSE, BOTH ABOUT INSTRUMENTS NOBODY HAD READ.**
> **(1)** The red streak is **7, not 6** — lemur's 08-30 push failed on the same single assertion,
> **from a different machine**, so nothing about this checkout is implicated and the failure is
> CI-side and persistent across writers. **(2)** *"the sweep's first on-GitHub run is owed on the next
> ⛩ push GO"* (said twice above) is **FALSE**: `unlighthouse-sweep.yml` triggers on `schedule` +
> `workflow_dispatch` **only** — a push neither triggers it nor is required for it, and it has never
> run. ~~first run owed on a push GO~~ ⇒ *the campaign's own class again: a confident statement about
> an instrument, written without opening the instrument.*
>
> ⭐ **A PREDICTION FILED BEFORE ITS RUN, so it cannot be retrofitted.** The sweep's **first-ever** run
> fires **2026-09-01 07:43 UTC** on `1c8fde6`, on a **bare runner with no `container:` block**, where
> checkout and build share a uid and no refusal can arise. **Predicted reading: `freshness: git
> answered`.** If it holds, §6 Change 3's structural claim — *the container is the only
> differentiating variable* — is **measured** rather than argued. ⚠ It has never run; a failure there
> is a **new finding, filed and never absorbed** (F6), and it is a different workflow so it cannot
> muddy gate-33's signal. ⚠ **Timing hazard, named:** `gates.yml` is `cancel-in-progress: true` on the
> group the sweep **joins**, so a push landing while the sweep runs **cancels it**.
>
> ~~⏭ **NEXT: ⛩ O4's PUSH GO.** The fix is **designed, NOT built** (record §6): one `gates.yml` step,
> `git config --global --add safe.directory "$GITHUB_WORKSPACE"`, after checkout, before build.~~
> ✅ **GRANTED AND DONE 2026-09-01** — pre-granted conditional GO (green + remote unmoved), pushed
> `1c8fde6..e6d3ba9`. ⚠ Scoped to `$GITHUB_WORKSPACE`, **never `*`**; ⚠ **not** added to the sweep.

> ✅✅ **`GR-2` IS CLOSED 2026-09-01 — ALL SIX CRITERIA MET, AAR FILED (SO#5), mission `completed`.**
> **AC-1 ✅ AC-2 ✅ AC-3 ✅ AC-4 ✅ AC-5 ✅ AC-6 ✅ · V1–V6 ✅.** `artifacts/gr_2/o4_ci_green_record.md`.
> ⛔ **Nothing deployed and nothing owed to production** — `AC-5` measured the shipped bytes unchanged
> on a healthy build, and production has always built on a machine where git answers.
>
> ✅ **`AC-4` MET AT THE RUN, WHICH IS THE ONLY PLACE IT COULD BE.** Run **`33467130677`**, `gates` on
> `main` at **`e6d3ba9`**, **success**. CI's Build step, verbatim `[D]`:
> > `freshness: git answered — last-updated dates derived from history.`
>
> ⭐ **The comparison is exact, and that is the load-bearing part.** Against the standing red control
> `33465663585`: **653 assertions in both runs**, 649 passed + 1 failed → **650 passed + 0 failed**.
> **Exactly one** assertion changed state and it is `gate-33:78`. `F6` satisfied with nothing to
> absorb — no non-`gate-33` failure to file, and no silent improvement elsewhere to mistake for one.
>
> ⭐⭐ **THE CARRIED STREAK WAS UNDERSTATED A THIRD TIME, AND THE TRUE FORM IS STRONGER THAN ANY
> NUMBER.** Every record said *"seven consecutive reds"*. Derived `[D]`: the last **green** `gates`
> run on `main` was **`32191049401`, 2026-08-18T22:05 UTC**; the failing assertion landed at
> **`0eb48fa`** (P2.3 O2) at **2026-08-19 05:13 UTC**, *after* it; and **no run on `main` succeeded in
> between** — **46 failure · 15 cancelled · 0 success**, with **13** consecutive runs verified
> one-by-one as carrying exactly one `gate-33` failure. ⇒ **the assertion had NEVER ONCE PASSED IN CI;
> this run is its first green, ever.** Red for its entire life on the branch, ~14 days, **across two
> writers' machines**, while the local lane was green throughout. ⚠ Stated at its exact width
> (convention 16): that is *"no run in which every assertion passed"*, **not** a claim that all 46
> failures were `gate-33` failures — several carried other reds that later missions fixed. ⭐ **Six →
> seven → never green: three carried counts, one mission, every one understating.**
>
> ⚠ **A fourth carried defect, and of a NEW KIND — a wrong TENSE.** O3's record and the Next Session
> Prompt both said to read the sweep's first-ever run *"**fired** 2026-09-01 07:43 UTC"*. Derived at
> the open: it had **never run**, cron `43 7 * * 2`, 2026-09-01 **is** that Tuesday, and 07:43 UTC was
> **~4 h in the future**. ⇒ *a carried instruction can be wrong about its verb, not only its value.*
> **The prediction (`freshness: git answered` on a bare runner) stands, owed to a later sitting**, and
> O4 did not spoil it — the sweep's workflow is deliberately untouched, so it remains the negative arm
> whichever commit it runs against. ⚠ Timing honoured: pushed 03:41, run finished 03:48, clearing the
> 07:43 window by four hours — a push inside it would have **cancelled** the sweep's first-ever run.
>
> ⭐ **One ordering constraint the ratified design did not name**, found by building it: the job sets
> `defaults.run.working-directory: site`, so a step placed *before* checkout cannot `cd` into a
> directory that does not exist yet. "After checkout" is load-bearing for **two** reasons, not one.
>
> ⭐⭐ **`AC-6` CLOSED, AND ITS FIRST ACT WAS TO DISCOVER THE ROW IT WAS SENT TO STRIKE DOES NOT
> EXIST.** `F-x` had **no register row** — see the corrected tally above. O5 therefore **authored the
> row in full and struck it in the same commit**, so the ledger shows what was owed rather than merely
> that nothing is owed now (SO#6). The gap is registered as **`F-y`**: the `F-` letter sequence reads
> **a–r, u, v, w** — `t` missing for a *documented* reason, **`s` and `x` missing because nobody wrote
> the row** — and **`F-s`, the production regression that raised the deploy freeze, still has none.**
> ⛔ Its backfill is **named, not smuggled into `GR-2`'s scope.**
>
> ⭐ **Convention 19 is the habit half** — *derive `main`'s CI status at session open*, one command.
> ⛔ **No checker, and here the restraint has an extra edge: the thing that failed WAS an automated
> monitor.** Answering an unread monitor with a second monitor is the defect proposing itself as its
> own remedy. ⭐ It is **convention 16 with the polarity reversed** — 16 is a check that *stopped
> running*; this is a check that ran on every push for two weeks, went red every time, **and nobody
> read it**. *An instrument nobody reads is indistinguishable from one that does not exist — and
> worse, because its existence is cited as coverage.*
>
> ⏭ **NEXT: Lane D** (story coverage, the Gate-1 order's last lane) or **P4.4b B3**. ⛔ Still held:
> **B2b** on ⊳ D-E (the Vitruvius scope-B reply is *staged*, not delivered) · the **Hopper reply**
> (its own ⛩ send GO) · **P5.1** with the humans. ⚠ **Owed and dated**: ~~the sweep's first-ever run
> (Tuesday 07:43 UTC) against its filed prediction~~ ✅ **RUN AND READ — see the addendum below** ·
> B1's Speed-Insights enable → transport → first p75 · `F-s`'s backfill row.
>
> ⭐⭐ **ADDENDUM 2026-09-01 (post-close — not a reopening; this was filed as *owed*, never as a
> criterion): THE NEGATIVE ARM RAN AND THE PREDICTION HELD VERBATIM.** Run **`33509441805`**,
> `unlighthouse-sweep`, `schedule`, on `e6d3ba9`, **success**. Its Build step `[D]`:
> `freshness: git answered — last-updated dates derived from history.` — **exactly the reading filed
> before the run, and therefore unretrofittable.**
>
> ⇒ **§6 Change 3's structural claim is now MEASURED, not argued: the `container:` block is the
> differentiating variable.** Verified at the object, because a negative arm is worth something only
> if it is genuinely negative `[D]`: the sweep has **0** `container:`, **0** `safe.directory`, and
> **one** commit in its entire file history (`f852060`) — byte-unchanged since it landed — against
> `gates.yml`'s **1** container and **2** `safe.directory`. **The sweep is green WITHOUT the fix**, on
> the same repo, same `fetch-depth: 0`, same `npx astro build`. ⭐ **This is why O4 refused to add the
> step there**: a remedy applied to an absent cause would have destroyed the arm *and looked like a
> success*.
>
> ⚠ **Two details of the prediction were wrong and neither touches its substance — said plainly rather
> than smoothed over.** It named **07:43 UTC** on **`1c8fde6`**; it fired at **12:45 UTC** on
> **`e6d3ba9`**. **A cron is a lower bound, not a time** (GitHub queues scheduled runs under load) and
> the ref moved in between. ⇒ **fifth carried-fact defect in this mission, and the third of a NEW
> kind** — after a wrong count and a wrong tense, **a wrong schedule**. *A cron expression is a
> request, not a promise.*
>
> ✅ **And two corroborations arrived unasked, from the OTHER writer's machine**: `gates` runs
> **`33546897238`** and **`33550897183`** (lemur's 0.4.21 / 0.4.22 installer pushes) are both
> **success**. ⇒ O4's fix holds on a checkout this desk never touched — the one thing a green on our
> own push could not show. *The two-writer situation that keeps generating findings generated a
> control this time.*

> ⛩⛩ **`GR-3` — THE FALSE RED, 2026-09-01. Convention 19 fired on its SECOND-EVER use and found `main`
> red; the red was the gate's own doing, and underneath it sat an assertion that had never once been
> demonstrated to fail.** Records: `artifacts/gr_3/`. Mission: `mission_haussmann_gr_3_false_red.md`.
>
> ⭐⭐ **THE CAMPAIGN'S FIRST FALSE *RED*.** Conventions 14 and 16 were both built from false *greens*
> — an instrument passing when it should not. This is the mirror. `gate-42` failed `main` at `2ad7768`
> for **six same-origin `net::ERR_ABORTED`s** on `/learn/concepts/context-commons/` — chunks the gate
> had **cancelled itself** by navigating away while `MermaidDiagram.astro`'s `await import('mermaid')`
> was still in flight. Its traversal used `waitUntil: 'load'` + `waitForTimeout(120)`: **a bet on a
> duration**, which an unloaded Mac wins and a loaded CI runner loses. Nothing had shipped — all four
> commits since the last green were campaign prose. ⇒ *the gate accused the site of a defect the gate
> caused, on a commit where only prose had changed.*
> ⚠ **And it is worse than a false green in one specific way**: the gate's own message argues that
> gating on things that are not ours would be *"training people to ignore a red build"* — which is
> exactly what a flaky assertion does, **one session after `GR-2` spent an entire mission on the
> finding that nobody read a red for fourteen days.**
>
> ⭐ **NON-DETERMINISM DEMONSTRATED, NOT ARGUED.** `gh run rerun 33558250778` — same commit, same
> bytes, **`success`**. ⭐⭐ **And that reading had already been anticipated by the pre-build pass**,
> which demoted `AC-2` from *the proof* to *a regression check* on the reasoning that **a flaky gate
> passes sometimes anyway**, so one green cannot separate *"the fix worked"* from *"we got lucky."*
> **First time in this campaign a convention-13 pass has paid off in advance rather than in hindsight**
> — 35/35 pairs, coverage recorded, **3 defects found and fixed BEFORE the budget was signed.**
>
> ⭐⭐ **THE FINDING THAT OUTLIVES THE FIX — CONVENTION 14'S MISSING SECOND CLAUSE.**
> `console_clean_redtest.sh` red-proved `gate-42` with five mutations and reported **5/5**, and it was
> **wrong about which assertion one of them exercised, for the gate's entire life.** Case 3 —
> *labelled* the same-origin-asset case — deletes a file, which yields a **404 RESPONSE**, so
> `requestfailed` never fires; Chromium logs the 404 as a console error; `hits` is asserted first; a
> non-soft `expect` throws immediately. **`assetFailures` was never evaluated.** Probed at the object:
> the red reads `225 console error(s)`, and the same-origin message appears nowhere. ⇒ **the assertion
> had NEVER been demonstrated to fail, and its first firing in its existence was the false positive
> that opened this mission.**
> > **Convention 14: an instrument is not believed until it has been demonstrated to fail.**
> > **The missing clause: A DEMONSTRATION IS ONLY WORTH WHAT IT CAN ATTRIBUTE.**
>
> A red that cannot be traced to the assertion under test proves the gate is alive, not that the
> assertion is. Every case now matches the assertion's own message, and a red via the wrong one
> reports as a **HARNESS BUG**. ⚠ Family named: convention 13's *"a correct instrument applied
> partially, reporting like a complete one"*, found this time **inside the harness whose entire job is
> to enforce convention 14 on everything else.**
>
> ⭐ **AC-7's THRESHOLD IS THE ONLY CRITERION HERE THAT CHANGED THE BUILD, AND IT DID SO BY FAILING.**
> The ratified mechanism was `networkidle` — the convention every other gate uses. Measured: **1.1 min
> → 3.9 min, +255%**, past the stated +100% ceiling, so the decision was re-taken **on the
> measurement**. `networkidle`'s 500 ms quiet window is a **flat tax every route pays in full** (these
> pages go quiet in ~50 ms); draining the in-flight request count costs **110 ms/route against 508**.
> ⇒ mechanism swapped, criterion unchanged. **Final: 56.0 s — FASTER than the 1.1 min it replaced.**
> *The defect never cost wall clock; it only ever cost the bet being wrong.* ⭐ **A stated numeric
> threshold on a cost criterion is what forced the measurement that found a design 4× cheaper AND
> strictly more correct** — "record the cost" would have recorded 3.9 min and shipped it.
>
> **Built:** traversal drains to zero in-flight requests, expiry **asserted** (`unsettled`) and placed
> **BEFORE** the same-origin check — *the cause must report ahead of the symptom it produces*, or the
> reader is told the site has six broken assets when one page would not settle. **All three predicates
> byte-unchanged**, so every prior red-proof still covers them. **Red-proof: 8 pass / 0 fail (6
> mutations + 2 controls)**, every case naming its assertion; **case 6 red BEFORE and AFTER the fix**,
> which is what proves the fix removed the sweep's race and not the assertion's teeth.
> ⛔ **The settle guard is deliberately NOT red-proven** — a race has no deterministic mutation.
> Conventions 15/16 hold: five instruments have shipped wrong on their first live run, and a sixth
> authored at a mission's tail would be the sixth. **Stated as a limit, never implied as coverage.**
> ⚠ **Bound, not removal:** a page that goes quiet and *then* fires a delayed request can still be
> raced; `networkidle` carries the identical residual.
>
> ✅ **`F-z` and `F-s` BOTH WRITTEN.** `F-z` = this finding, both halves, authored and struck. `F-s` =
> ⛩ **operator-ruled into scope** at the pre-build gate — the 2026-08-23 production regression, **cited
> by ID across this campaign for nine days with no row**, backfilled and struck. ⇒ **`F-y`'s gap is
> closed**: the letter sequence now reads **a–z with only `t` missing**, and `t` is the one hole with a
> documented reason. Register **re-derived at the object, never carried**: **25 total · 18 struck · 7
> live** (F-d · F-e · F-j · F-k · F-v · F-w · F-y).
>
> ⛩ ✅ **SURFACED, RULED AND PERFORMED IN ONE SITTING** — charter `mission_count` **29 → 30** (disk
> holds 30: 27 `p{0..5}` + **3** `gr_*`), `estimated_sessions` **41-54 → 42-56**, `calibrated_sessions`
> **41-46 → 42-48**, all re-derived in the same commit because all three are marked derived-not-typed.
> `phase_count` **HOLDS at 6**. ⭐ **The point is the timing, not the number**: GR-2 recorded this same
> ruling as *taken* and it sat unperformed at the charter for four days — the *index-vs-artifact* class
> the campaign keeps finding. Put to the operator (the field's own comment says it is theirs to take),
> ruled, and **written at its destination before the sitting closed.**
>
> ⏭ **NEXT: Lane D** (story coverage, the Gate-1 order's last lane) or **P4.4b B3** — unchanged by
> GR-3, which was an unplanned interrupt, each still at its own ⛩ conv-13 pre-build gate. ⛔ Still
> held: **B2b** on ⊳ D-E · the **Hopper reply** (own ⛩ send GO) · **P5.1** with the humans. ⚠ Owed:
> B1's Speed-Insights → transport → first p75 · the ~59 uncited capture PNGs still untracked. ✅ **No
> longer owed: `F-s`'s backfill row.**

~~**`P4.3` is `in_progress` AT ITS PRE-BUILD
GATE — nothing is built and its budget is NOT ratified.**~~ *(true at S1; superseded — the amendment is
signed and O0 + O1 are built.)* Convention 13's pass ran **COMPLETE at 30/30
with its coverage recorded** in the mission body and found **3 of 5 criteria not satisfiable as written,
2 inherited obligations under NO criterion, and 1 ceiling overclaim**. ⛩
`artifacts/p4_3/ac_amendment_proposal.md` is **`proposed`** — 7 ACs, V3/V4 amended, V5 added,
**~220–320 kT** (up from a ~150–250 kT band costed against five criteria, two unreachable and two
obligations invisible). **No build until signed.**

> ⭐⭐ **THE PASS'S SHARPEST FINDING IS THE THIRD SIGHTING OF ONE DEFECT: `P4.2`'s AC3, `P4.4`'s AC2, and
> now `P4.3`'s AC5 all require a prod deploy under a freeze that lifts on ANOTHER MACHINE.** All three
> were authored **before the freeze existed** (2026-08-16) and **none was re-read against it when it
> landed**. ⇒ **Three instances is a mission-authoring habit, not three accidents** — and the campaign
> already holds the remedy it keeps re-deriving: **MET-on-build, with deployment named as owed** and its
> unblock condition on the mission's face (P3.3 O3 · P4.1 AC5 · P4.4 AC2-amended). **Every remaining
> unstarted mission should be re-read against the freeze once, now, rather than one at a time at each
> pre-build gate.**
>
> ⭐ **And the two obligations under no criterion were both carried in PROSE — in this very file.**
> Lock O1's 12px floor (*"defers to P4.3"*) and P4.2's `aria-live` residue (*"both stay `gap` at P4.3"*)
> were deferred **by name** into a mission whose five criteria mention neither, so all five could pass
> with both untouched — **P4.1's structural gap recurring in the mission that inherited the deferrals.**
> ⇒ **A deferral recorded only in narrative is a deferral with no gate.** Proposed as **AC6 + AC7**, each
> with its own V-limb.
>
> ⛩ **SIGNED 2026-08-24 — and a FREEZE SWEEP was authorized at the same gate and has RUN.**
> P4.3's amended set (**7 ACs**, V3/V4 amended, V5 added, **~220–320 kT**) is `accepted`; the mission may
> build against it. Record: [[freeze_sweep]] (`artifacts/p4_3/`). Target set derived from each mission's
> **own `status:`** `[D]` — 22 `completed`, 5 `in_progress`, 2 `queued` — sweeping the two `queued`
> missions plus the **unstarted halves** of P4.4 and P4.5.
>
> - **P4.4b — ✅ ALREADY CLEAN, and that is the finding.** Amended at its own gate to be freeze-safe by
>   construction (*"met ON-BUILD"*, *"sweeps the CI-BUILT ARTIFACT … no freeze dependency"*, *"production
>   sweeps EXPLICITLY OUT OF SCOPE"*). **The sweep's control passed** — the remedy is not theoretical,
>   it is already written, already signed, already applied once. **P4.4b is what the others should be.**
> - **P4.5b — G-5 recurrence #4** (*"A **published** voice guide"*): → in-tree + publication owed.
>   ⚠ **G-10 routed to its own gate**: D6 anchor 5 has **three** conjuncts and the AC names one as *the*
>   item — but unlike P4.3's G-8 this is **not a ceiling overclaim**, because the other two look
>   reachable (the claim register exists; disclosure **unverified, and not asserted either way**).
> - **P5.2 — precondition added**: its predecessors must be **DEPLOYED**, not `completed`. *Four missions
>   now carry a `completed` that cannot express built-not-deployed, and P5.2 is the one that would be
>   misled by reading the field.*
>
> ⛔⛔ ⭐⭐ **P5.1 — G-11, THE SHARPEST DEFECT THE SWEEP FOUND, AND A DIFFERENT CLASS FROM G-5.** Its three
> human-evidence criteria are **perfectly satisfiable under the freeze — and would produce evidence about
> the wrong build.** Production lacks **P4.1 + P4.2 + P4.4a**; a cold-reader panel run today scores a site
> with no `empty_state` slot, no craft-floor markup fixes, no rebuilt `/design-system`. **Every criterion
> goes green and the capstone evidence is silently invalid.** This is **F-s's first casualty repeating** —
> *"30 green T0 captures, of the wrong build"* — except that one was caught **by accident**, and human
> panel evidence carries no build stamp to contradict it. ⇒ **Hard precondition added** (freeze lifted +
> backlog deployed), and **every criterion now records the commit the participant saw**, read from
> `/.well-known/adna-build.json` — ⭐ **the mechanism AC0 shipped at P4.4a, pointed at human evidence for
> the first time.**
>
> ⭐ **G-5 and G-11 are one blind spot at two altitudes.** G-5 *cannot go green* — self-announcing, caught
> by any pre-build gate. G-11 **goes green and is wrong**, because every instrument this campaign owns
> measures the **artifact** and not the **build the artifact describes** (convention 15's blind spot and
> convention 16's, meeting in one criterion). ⇒ **Evidence about a deployed surface must record which
> deployment it saw.**
>
> ⚠ **`grounded_in: "toolkit A13"` cites a label that does not exist.** The toolkit is
> `what/context/context_web_quality_toolkit.md` — **vault-root-relative**, so a campaign-scoped search
> finds nothing — and `\bA[0-9]+\b` returns **0 hits** in it `[D]`. Its substance is real and on point.
> **`P4.4` cites `toolkit A2` identically**, so this is a campaign-wide citation scheme the cited
> artifact never carried. Citation repointed to section + lines; evidence stands. ⚠ **The first probe
> for it was campaign-scoped and phrased absolutely** — convention 16's own law, inside the session
> citing it.

**Confirm from the mission's own `status:` before claiming anything** — and read its qualifier, not
just the field: this index line has gone stale **five** times, and the field now says `in_progress`
for a reason a bare read will get wrong. **The artifact is the record.**

> ⛩ **P4.4's ACs WERE AMENDED AND OPERATOR-SIGNED BEFORE ANY BUILD, AND THE MISSION IS NOW SPLIT**
> (2026-08-24; `artifacts/p4_4/ac_amendment_proposal.md`, **`accepted`**). **`mission_count` HOLDS AT
> 27** — the split is **in-file**, on the P4.5a/P4.5b precedent, so convention 11's ruled order is
> unchanged.
>
> **P4.4a** — *deploy safety + the debt* (`opus`, ⛩ **~600–750 kT, re-raised + ratified 2026-08-24**,
> superseding ~280–420 kT under SO#11/ADR-016) — ✅ **CLOSED 2026-08-24 at ≈555–635 kT, inside the
> band; AAR filed (SO#5); AC0 ✅ + V5 ✅.** A0 · A0v · ruling 2 · A1 · A2 · **A3** all COMPLETE
> (`4a9bc09` · `ff4ad51` · `3cc659f` · `ffcc0f3` · `0c97af3` · `72fb15b` · this close).
>
> ⭐⭐ **A3 SET OUT TO SEND AN ASK AND FOUND THE ROW ASKING FOR IT WAS WRONG ABOUT THE PEER'S TREE.**
> `lighthouse_profiles.json` **exists** (`WebForge.aDNA/what/lib/gates/`, 43,988 B) and our federation
> pin `6096157` is **byte-current** against it (md5 `134c9647c4c348034db3fa32d65d9db1` at the pin, at
> their HEAD `14838774`, and in their tree). **Nothing of ours reads it** — `grep -rn
> lighthouse_profiles site/` → **0** — so gate-19's bars are **UN-SOURCED, not transcriptions**: the
> CWV *Good band* over slim **desktop** fixtures, with **Perf ≥ 90 LOOSER than their `content_static`
> 95**. And the **mirror is contradicted from both ends** — our own wrapper names *gates* among what is
> *"consumed by reference, never copied"*, their `CLAUDE.md` says *"read them there and never
> transcribe them"*, and our two live consumers already **resolve the pinned path**.
> ⭐ **A1's re-read pass had run and confirmed the wrong thing, because it re-ran the row's own
> `find`.** ⇒ **re-reading a row at the object means re-deriving its question, never re-running its
> command.** And F-e prescribed a *mirror* at the moment of diagnosis exactly as F-u prescribed a
> *lease* — **two instances is a pattern: diagnosis and prescription are separate acts.**
> ⛩ **Ruling 3 honoured**: the ask is **authored + STAGED** (delivery ⛩ deferred by operator ruling —
> all three Vitruvius memos stay staged), convention 4's **rule is untouched**, and only its **evidence
> sentence** is corrected to name the surface it searched (conventions 16 + 17, both authored here,
> both breached by that sentence). ⚠ **Residual: the bars are still un-sourced, and P4.4b's AC4 does
> NOT close that by hashing a mirrored file** — AC4 amended, B2 gated on Vitruvius's answer.
> **The debt register is discharged-or-routed: 19 rows, 13 struck, 6 live and every one
> of the six carries a named destination** — F-d · F-j → A1b · F-e → A3's Vitruvius ask · F-k → the
> next `skill_template_release` · **F-m · F-n FENCED by `gate-41`, not fixed** (a ratchet is not a
> discharge, and a green there means only *it has not got worse*). **A2 shipped the three rescoped-in
> gate classes as `gate-42` (console) · `gate-43` (off-site CTA) · `gate-44` (hub substance) — all
> three are REGRESSION GUARDS, because F20 tested false and R-122/R-123 and F19 were already closed,
> so all three went green on their first run and each is red-proven 7/7 · 6/6 · 7/7** (14 mutations +
> 6 controls). Suite **587/587**, derived.
> ~~⏭ **NEXT = A3** — ⛩ the Vitruvius ask (⊳ D-E) + the AAR; an **outward act**, needs its own GO.~~
> ✅ **A3 DONE 2026-08-24** — ask **staged, not delivered** (⛩ operator ruled); AAR filed; P4.4a closed.
> **Originally OPEN at AC0.** AC0 + V5, the 16 live
> register rows, the three rescoped-in gate classes + the token census, the derived-count gates
> (F-c · F-m · F-n) and the gate fixes (F-a · F-i · F-j · F-p). **No external dependency.**
> **P4.4b** — *the three new systems* (`sonnet`, ~250–400 kT) — ~~**not started**~~ **OPEN AT ITS
> ⛩ PRE-BUILD GATE 2026-08-26 (see the P4.4b block below)**. AC1–AC4.
> ~~**Every one of its criteria waits on an actor outside the session** — the operator's dashboard, lemur's
> push, or Vitruvius's mirror.~~ ⭐⭐ **STRUCK 2026-08-26 — FALSE FOR THREE OF THE FOUR, AND CONTRADICTED
> BY AN AMENDMENT WRITTEN THE SAME DAY** (SO-6; the reasoning is the reusable part). **lemur's push** is
> discharged (freeze lifted 08-25). **The operator's dashboard never bound the build** — AC2 was
> *replaced in the same sitting* to be met **ON-BUILD**. **Vitruvius's mirror** was **WITHDRAWN at A3**
> as the wrong mechanism, so that blocker names a thing that no longer exists. Only **AC4** has a live
> external dependency, and it carries an interim clause ⇒ a **branch, not a block**.
> ⭐ **The split line is REACHABILITY, not topic**, so P4.4a cannot be
> blocked and P4.4b's blockers are visible on its face instead of discovered at execution. ⚠ **And that
> principle is exactly what this line stopped applying**: a blocker list is only load-bearing if it is
> re-read when its entries expire, and three of these three had.
>
> **The pre-build gate ran convention 13 at 30/30 with coverage recorded and found ZERO of five criteria
> executable as written** — AC2 unreachable by anything P4.4 does (needs a prod deploy under a freeze
> that lifts on **another machine**); AC4's method impossible (`lighthouse_profiles.json` = **0 hits**
> vault-wide) — **P4.2's AC3 recurring exactly.** AC0 and V5 were **added**: there had been no criterion
> covering **F-u**, the row gating two missions of unshipped work, and **no V-limb touching it**, so it
> could have been ticked with no guard built.
>
> ⭐⭐ **AND F-u ASKED FOR THE WRONG INSTRUMENT.** A single-writer lease would **not** have prevented
> F-s: replayed with a perfect lease held throughout, **v0.4.3 and the Arch repo are un-published
> anyway.** *The two deploys never raced — they were sequential and still destructive.* A mutex reasons
> about **time**; the defect is about **content**. ⇒ **an ancestry guard** (*never publish a tree that
> does not contain the commit currently serving the alias*), plus `/.well-known/adna-build.json` so the
> alias is self-describing — because *a log on the machine that deployed is not evidence available to
> the machine about to deploy*, which is exactly why F-s was invisible. It would have caught F-s in
> **both** directions, **including the restore that fired the hazard backwards under an operator GO
> while following every rule then in force.** Row re-worded, lease framing **struck not deleted**.
>
> ⭐ **THREE OF NINETEEN REGISTER ROWS WERE ALREADY DEAD AND NOTHING SAID SO.** `F-b` + `F-q` closed by
> a `.gitleaks.toml` that landed at **P3.4** (verified at the object: **881 commits, no leaks**);
> `F-h` discharged by performing the re-read it asks for (**4/4 headers match by value on the alias**).
> **Four more worsened** — `F-o` went **5 → 11 hits in three days**. Live count **16**, derived.
> ⇒ **Re-read a debt row at the object before funding it.**
>
> **Budget re-raised and ratified: ~530–820 kT / 4–5 sessions** — ≈2.4× the prior figure, almost exactly
> P4.1's *measured* ≈2.36× overrun. The agreement is the argument that the estimate is honest rather
> than padded. `executor_tier` is declared **per increment** because P4.1 ran four sessions on `opus`
> under a `fable` declaration: **a declared tier nobody honours is worse than none.**
>
> ⛩ **Three carried rulings, all taken at the same gate:** lock O1's 12px floor **defers to P4.3**
> (a legibility judgement for the a11y-manual mission — **O1 stays `gap` through all of P4.4**, said
> here so a green P4.4a suite is not read as having met it) · `component_token_census.mjs` **becomes a
> gate in P4.4a** · ⊳ D-E — **deliver the Vitruvius ask, do not amend convention 4** (they have not
> declined; delivery is a separate ⛩ outward act).
>
> ⛔⛔ **NONE OF THIS LIFTS THE FREEZE.** Release still requires **lemur pushing `30c8163` + `f4fa9c5`**
> and **one** deploy from a tree holding both halves — re-verified absent at every session open.
> **AC0 enforces that reconciliation; it cannot perform it. P4.1 and P4.2 both remain
> built-not-deployed** — said here rather than left to be inferred from a `completed` status that
> cannot express it.

**✅ `P4.2` CLOSED 2026-08-24** (`mission_haussmann_p4_2_craft_floor.md`, **`completed`** with AAR per
SO#5 — O0 ✅ O1 ✅ O2 ✅ O3 ✅, all six criteria met). Commits `61aff0e` · `e62a465` · `2d3f9ed` ·
`ae28fe9` · `e2fca67`. Lock census **enforced 8 → 13 · gap 29 → 24 · rung1a 6 → 11**; suite
**560 → 571**. ⛔ **BUILT, NOT DEPLOYED** — the **second** mission accumulating unshipped work behind
the freeze, said here rather than left to be inferred from a `completed` status that cannot express it.

> ⛩ **THE ACs WERE AMENDED AND OPERATOR-SIGNED BEFORE ANY BUILD** (`artifacts/p4_2/
> ac_amendment_proposal.md`, `accepted`). The convention-13 pass ran **30/30 pairs with its coverage
> recorded** and found **three of five criteria wrong at their premises** plus **two tested by
> nothing**. The mission now carries **six** ACs. ⭐ **This is the pass paying for itself on a
> `human_gate: false` mission** — nothing in P4.2's own definition would ever have stopped to ask.
>
> **The three premise defects, for anyone citing the old wording:** AC1 typed **57 locks** against a
> floor of **60** (triple-confirmed; WebForge added `O1 O2 Q1`) and named *"the site surface"*, which
> is **WebForge's own row** — 60/60, full, passing — so our declaration is a distinct consumer surface
> `adna_site`. AC2 said *"the 5 classes, ~964 → 0"* when the field was **11 classes and 4,444
> errors**, with the dominant class absent from the five: **the stated method could not make the
> stated test green.** AC3 said *"regenerated"* of a **hand-authored 506-line page with no generator
> anywhere** — ⚠ **and this file's own protective warning was built on that same absent mechanism**:
> the hazard to `/design-system`'s Illustration-slots section is a **manual rewrite**, not a
> regeneration. That section is still ADR-053-governed content and still must survive O2 intact.
>
> **What O0/O1 shipped.** The craft floor is declared and **gating**: `site/scripts/
> lock_coverage_adna.yaml` (60 locks) validated by `lock_coverage_check.py`, which imports WebForge's
> `check_lock_coverage` and repoints **exactly two globals** — red-proven **6/6 with a control**.
> Markup debt **4,444 → 0** across 226 pages, html-validate in CI with every exception carrying its
> reason in the committed config.
>
> ⭐ **The census immediately found ~~three~~ TWO defects the 560-assertion suite structurally cannot
> see** (corrected at O2, 2026-08-24), because nothing had ever declared coverage: the header is
> `position: sticky` with **no `scroll-padding-top` anywhere in `src/`** (every in-page anchor lands
> under it; `gate-31` passes because it asserts anchors *resolve*, a different claim) · the CSP
> self-validates against nothing (P4.4's row, not O2's).
>
> ⚠ **THE THIRD WAS NOT A DEFECT, AND THE WAY IT FAILED IS THIS CAMPAIGN'S OWN CLASS.** The struck
> claim — *"`aria-live` appears nowhere in `src/`, so filtering the registry changes the result set in
> silence for AT users"* — is **false**. `src/pages/vaults/index.astro:226` carries
> `<p class="vaults-result-count" role="status" aria-live="polite">`, landed **2026-07-11** in
> `5b9be4c`, **six weeks before the census that reported it absent**, and it is *wired*:
> `countEl.textContent` is assigned in `apply()`, which runs on the search input and on both chip
> groups, emitting `— nothing matched` in the zero case. **A negative result is only as wide as the
> command that produced it** — convention 16's own amendment, recurring inside the mission that cites
> it, and the fifth consecutive session in which an instrument was wrong before the subject was.
> ⭐ **The honest residue is narrower and it survived**: nothing *asserts* the region stays wired, and
> the empty-state mark sits outside the live region while the count line sits inside it. Both stay
> `gap` at **P4.3**, where an AT instrument can say whether the announcement is *useful* rather than
> merely *present* — a question no grep was ever going to answer.
>
> ⇒ **O2's real first work is A5/B4 and J1**, read from the `sequenced:` fields rather than from the
> prose summarising them. The prose also **omitted J1**, which is the heading-outline instrument
> **AC5's thin hubs are graded by**.
>
> ⭐ **The `no-inline-style` diagnosis falsified its own hypothesis, and the answer was better than a
> fix.** Shiki was already 4.0.2 on both sides of P3.2's lockfile touch; nothing in the config history;
> same code fences. ⇒ the 964→4,444 delta is **not a regression but an unreproducible measurement** —
> the 08-19 artifact records **neither its command nor its config**. Hence AC2's amended wording, and
> hence this mission's own baseline artifact records both on its face.
>
> ⚠ **Two instruments of mine were wrong before the subject, again** (the campaign's standing class).
> A contrast sweep of **one page** reported *"light failures: 0"* — true for that page, false for the
> site. An ad-hoc axe probe reported **71 phantom nav failures** because it drove the theme by
> class-toggling while the real gate is **dark-by-default and seeds `localStorage` before load**.
> ⭐ **What settled causation was a CONTROL, not a better probe**: revert only the Shiki change,
> rebuild, re-run the same gate — it passed. It took less time than the probing had.
>
> ⚠ **And the parity fix broke axe-0 on its first attempt.** `github-light`/`github-dark` both ship
> sub-AA token colours (`#e36209` on white **3.48:1**; `#6A737D` on `#24292e` **3.05:1** — the dark one
> **already live**, since the site rendered `github-dark` in *both* appearances). The
> `-high-contrast` variants ship instead; re-measured **58 pages × 7 pairs × 2 palettes = 0**.
>
> ⛔ **BUILT, NOT DEPLOYED — and this is the SECOND mission accumulating unshipped work.** The freeze
> stands (**F-u**); lemur's `30c8163` + `f4fa9c5` re-verified absent at session open. Suite
> **560/560**, gitleaks **877 commits no leaks**. Said here rather than left to be inferred, which is
> the condition P4.1's AAR attached to this mission.
>
> ✅ **O2 + O3 COMPLETE 2026-08-24, MISSION CLOSED** (session `session_stanley_20260824_190604`).
> Locks **A5 · B4 · J1 · A2 · I3** enforced (census **8 → 13**, gap **29 → 24**, rung1a **6 → 11**);
> `/design-system` on `DocumentationLayout` with a TOC and the diagram rules at `#diagram`; component
> census **30/30**; thin hubs **4/4** to a **derived** budget. Suite **571/571** · html-validate **0** ·
> axe **0** across 5 surfaces × 3 viewports × both themes · `craft_floor_redtest.sh` **11/11**
> (9 mutations + 2 controls) · gitleaks **880 commits, no leaks**.
>
> ⭐⭐ **TWO OF THE CENSUS'S OWN FINDINGS WERE FALSE, AND BOTH WERE CAUGHT BY RE-VERIFYING AT THE
> OBJECT BEFORE BUILDING AGAINST THEM.** B3/E4 (above) and **F20**: *"`JetBrains Mono Variable`
> reports `document.fonts` state `error` on every page"* had stood untested since 08-19 — probed
> across 4 routes × both themes, **errors 0/0 every time**. The observable that reads as the claim is
> `unloaded: 5`, the *correct* state for five subsets whose `unicode-range` matches no glyph, and
> **Inter and Space Grotesk show the identical shape** — the control was sitting in the same
> FontFaceSet the whole time. ⇒ **A census that declares coverage does not exempt itself from
> convention 14.** The one true limb survived: *nothing watched font loading*, which is exactly how a
> false claim about it stood for five days. `gate-38` G38c/G38d watch it now.
>
> ⭐ **`gate-39` found a real defect on its first run and the honest answer is that lock O1's floor is
> NOT met.** Measuring what the lock actually names — rendered size via `sqrt(|det(CTM)|)`, never
> `getComputedStyle` — `hero-graph-svg` paints **27/27 labels below 12px at every width** (3.5px at
> 320); `netdiagram-svg` 7/8; `convergence-funnel` 8/8 at 320. Ships with a **dated baseline** that
> ratchets, and **O1 stays `gap`**: a non-regression fence is not the rule, and calling it one is the
> fake-enforcement this lock's own text warns about. `/design-system#diagram` says the floor is unmet
> rather than letting a reader assume. Fixes routed to **P4.4**.
>
> ⭐ **The component census's finding: the only token family with a gate was the only one that had not
> drifted.** Colour (gate-25) 0 findings across 30 components; font-weight — whose tokens exist and
> whose own comment says they *"replace the scattered literal 400/500/600/700 across components"* —
> had reached **2 of 15 files**. A migration announced in a comment is not a migration, and the
> difference is unobservable without an instrument.
>
> ⭐ **The thin-hub budget is DERIVED, and the first draft of it was circular.** It invented
> `h2 ≥ 2, bodyLen ≥ 1200` and graded four pages against it. F13 never stated a threshold — it named a
> **counter-example** (*"/learn does the same job with a numbered path"*), so the site's own conformant
> hubs became the budget: floor **h2 4, bodyLen 1932**, and the two groups do not overlap on either
> axis. **KW-14 applies to the yardstick, not only to the reading.**
>
> ⚠ **Nine instruments wrong before the subject this session** (sixth consecutive session), every one
> caught by its own output: a grep narrower than its conclusion · a red test whose **control** failed
> on port reuse · a control with no diagnostics · a 5-selector probe conflating *not found* with
> *collapsed* · a regex expecting `class` before `href` · a census flagging SVG user units · a gate
> reading a figure's class off the wrong element · an AC6 probe selecting an `<h2>` and calling it a
> section · and **a suppressed build error** (`> /dev/null 2>&1`) that produced a stale `dist/` and
> surfaced as a nonsense Playwright error. ⭐ **What caught them was structure, not vigilance**:
> mutation-applied assertions, controls, coverage floors (`measured >= 200`, never `> 0`), and
> re-verifying at the object. The red test twice found defects **in itself** before it could test a gate.

**✅ `P4.1` CLOSED 2026-08-24** (`mission_haussmann_p4_1_token_pipeline.md`, **`completed`** with AAR
per SO#5 — O0 ✅ O1 ✅ O2 ✅ O3 ✅, **all five criteria met**). ⛔ **O2 IS BUILT AND VERIFIED BUT STILL
NOT DEPLOYED** — the deploy freeze below stands, re-verified at the close after `git fetch` (lemur's
`30c8163` + `f4fa9c5` both still absent), and AC5 is recorded **MET-on-build** with deployment **named
as owed**, not implied. Closed: P4.5a ✅ · P3.5 ✅ (08-20) · P3.1 ✅ · P3.2 ✅ (08-21, deployed) ·
**P3.4 ✅ (2026-08-22, deployed + live-verified 24/0)** · **P4.1 ✅ (2026-08-24, NOT deployed)**. **⏸ `P3.3` remains OPEN at ⛩ O2** and is *skipped, not finished* — the npm publish is **not
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
> ⚠ ~~**New debt: F-t**~~ — **F-t IS WITHDRAWN: it was already registered as `F-l`** (struck at P4.1's
> close 2026-08-24). This session leaked `SS_VERCEL_TOKEN` into its transcript; the redaction was
> written `${VAR:+SET}${VAR:-UNSET}` and the second expansion **prints the value precisely when the
> variable is set**. **The safe form is `${VAR:+SET}` alone.** Operator ruled *record, no rotation*
> (known throwaway credential). ⭐ **Fifth wrong instrument in two weeks, authored inside the session
> auditing wrong instruments** — and the first whose failure mode is disclosure rather than a false
> green. ⚠ **But it is the SECOND sighting, not a second defect** — same idiom, same variable, same
> mechanism as F-l, which P4.4 had carried since P3.2. It got a fresh ID because the sighting was
> written up **from the session rather than checked against the register**. Per P4.4's own F-b
> precedent (*"recurrence is evidence for the allowlist, not a new row"*), F-l carries the recurrence
> and **F-t gets no row.** *(The index-vs-artifact class, one level down: a debt register has to be
> read before it is appended to.)*

> ✅ **P4.1 CLOSED 2026-08-24 at O3 — all five criteria met, AAR filed (SO#5), mission `completed`.**
> Session `session_stanley_20260824_152000_haussmann_p4_1_o3`. Suite **unchanged at 560/560** (no
> `site/` source changed, which is the correct result for a record-and-documentation objective, not a
> reassuring one).
>
> **AC4 resolved to the staged Pygmalion ask** — the branch its own conditional selects, re-verified at
> the object per convention 12: VisualDNA's schema directory still holds **3** files
> (`character`/`location`/`object`), no `style_atmosphere` `[D]`. ⭐ **The ask is not "please invent a
> schema."** `extensions_registry.yaml` → `class_2_new_entity_type.entries: []` is **empty**, while
> `style_atmosphere` is the **worked example** both `spec_modular_extension_protocol.md:45` and
> VDNA-ADR-004's own Context paragraph use to illustrate the Class-2 trigger — so the memo asks them to
> run **Step 1 of their own protocol on their own example.** ⭐⭐ **And it states what we could see of
> their ability to act**: their machinery is itself pre-activation (spec `DRAFT`, registry *"promotes to
> ACTIVE at P5 close"*, `mission_p4` `STUB_NEXT_SESSION`, `mission_p5` `STUB_AWAITING_PILOT`) `[D]`, so
> the full run is **two missions out on their roadmap** — said on the memo's face rather than left for
> them to discover by trying (convention 15's reachability face). **One scope is performable today by
> their own precedent**: both existing registry entries were pre-populated at `PROPOSED` with
> `adr_path: null` *while the registry was and still is DRAFT*. Memo carries **both scopes and names
> the choice as theirs**, with *"neither yet"* pre-recorded as a real answer. `status: staged` —
> ⛩ delivery is a separate outward act needing its own GO.
>
> **Persona ranker (V6, the obligation convention 13 recorded as UNRUN and O3's): 4.03 `/vaults` ·
> 4.10 `/design-system` · 4.37 `/get-started`** — all ≥4.0, scored **separately, never averaged**
> (an average of 4.17 would have let `/vaults` hide behind `/get-started`). All 18 dimension means and
> 3 totals **re-derived programmatically, not typed** (KW-14). ⚠ **`/vaults` clears by 0.03** — one
> cell moved down anywhere puts it under the floor, recorded as the number rather than rounded.
> Conflict of interest **declared not managed away** (`[D-syn]`, the builder scored the surfaces it
> built; independent re-rank offered, operator ruled the P2.2 precedent governs).
>
> ⭐ **The ranker's finding: Delight is 3.6 on all three surfaces with the IDENTICAL persona vector
> `4·4·3·3·4`** — the signature of a lazily-scored dimension, and treated as suspect before it was
> treated as a result. It is not laziness: **it is ADR-053's containment rule appearing in the
> measurement.** All three pages are structurally the same object for this dimension — one illustrated
> hero, restraint everywhere else — so the rule that makes the voice governable caps delight, and caps
> it identically because it applies identically. ⇒ It is a **designed trade** (option (b) would have
> pushed it lower by deleting nine live surfaces) and it **bounds the remedy**: `vault_card_mark` and
> `graph_frame` are the only sanctioned places it can move, so a future *"raise Delight"* reads as
> **"build a slot"**, never *"decorate a page"*. ⚠ The instrument **cannot separate "capped by design"
> from "under-delivered within the cap"** — that needs the human instrument at P5.1.
>
> ⚠ **Debt that this very file said was "routed to P4.4" had never reached P4.4's register.** The
> convention-16 amendment below states the prod-alias gap is *"Routed to **P4.4**"*; **there was no
> such row**, and no F-r or F-s row either. Landed at the close: **F-u** (the missing single-writer
> lease — and the design constraint that the vault's own §Single-Writer Lease governs shared *files*,
> so it does **not** port to an external alias with no `updated` field) and **F-r** (P3.4's, picked up
> because a known-unrouted row is worse than a small scope bleed). Register **17 → 19**, derived.
> ⇒ **"Routed" must be verified in the destination register, never in the prose that routed it.**
>
> ⚠ **SO#11 retrospective triggered**: ~590–930 kT across **four** sessions against a ratified
> ~250–400 kT across **two** — ≈2.36× / ≈2.33×, over threshold at both ends. O1 and O2 each landed
> *within* their own estimates; O0's overrun is **F-s** (incident response, not scope drift); and the
> 2-session figure **was wrong at ratification**, because convention 13's pass ran *after* the budget
> and then forced an operator-signed AC amendment mid-mission. ⇒ **The remedy is not "estimate higher"
> — it is that convention 13 runs BEFORE a DP ratifies a budget**, which is what convention 13 already
> says. Also unremarked for four sessions: `executor_tier: fable` while every session ran **opus**.
>
> ⚠ **A control fired and the control was the defect** (sixth instance this campaign). A luminance
> check flagged three `vaults__*__light.png` captures as dark-under-a-light-filename — the exact O2
> hazard. They are fine: median **255**, p95 **255**, bottom strip 243.7 identical to the
> confirmed-good light control. The low reading is `/vaults`'s **dark `hero_panel`**, dark in both
> themes by design. ⭐ **A control that fires is a question, not a verdict** — asking what else could
> produce the reading saved 18 good captures. A second one the same session: a table-integrity checker
> flagged `F-l` by splitting on `|` without honouring markdown's `\|` escape.

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

> ✅✅ **`P4.4` IS CLOSED 2026-09-02 — BOTH HALVES — AND THE ANSWER THAT UNBLOCKED IT HAD BEEN IN OUR
> OWN INBOX FOR FOUR DAYS.** `mission_haussmann_p4_4_ci_hardening.md` → **`completed`**, AAR filed
> (SO#5, scoped to P4.4b; P4.4a's stands unchanged). **AC1 ✅ AC2 ✅ AC3 ✅ AC4 ✅ · V1–V4 ✅**, with
> P4.4a's **AC0 ✅ + V5 ✅** ⇒ every criterion met. Commits `d2228b0` · `c3c29a3` · `72f3bbd` ·
> `1f495c6` · `4bbbe01`. Chromium **659** · fast **541** · snapshot **26** · all-projects **685**
> (each derived by its **own** command) · html-validate **0**. ⛔ **Nothing deployed and nothing owed
> to production** — P4.4b is met ON-BUILD by design; prod serves `a852423`, an ancestor of `main`,
> and the diff carries no site bytes.
>
> ⭐⭐ **`F-e` IS STRUCK, AND THE PREMISE IT RESTED ON FOR THREE WEEKS WAS A CATEGORY ERROR.** The row,
> and every citation of it, said `gate-19`'s **Perf ≥ 90 is LOOSER than `content_static`'s 95 — "the
> direction their `ratchet_law` reserves for an operator gate."** `_meta.lh_settings`, verbatim `[D]`:
> *"Lighthouse default config: **mobile emulation** + simulated throttling… **Desktop pass: not
> wired**."* ⇒ **their 95 is a MOBILE bar, ours is a DESKTOP bar, and there is no desktop
> `content_static` bar in existence to be looser than.** And the campaign had **already measured what
> that difference is worth** at B2a: mobile throttling on a desktop form factor scored this site
> **0.78** against the desktop instrument's **0.95–1.0** ⇒ **the form-factor gap is ~17 points and the
> bar gap is 5.** Transcribing 95 would have been B2a's own defect run backwards — *two instruments
> sharing one number*. ⛩ **Ruled: HOLD 0.9 and SOURCE it**, so `F-e` closes by **recording where each
> number came from, not by moving one** — and `gate-51`'s drift detector stays green with zero
> same-diff churn. ⚠ `ratchet_law` never bound us: it governs loosening an **adopted** bar, and we
> never adopted theirs.
>
> ⭐⭐ **EQUALITY IS NOT PROVENANCE — the finding that generalises past this gate.** Two of our three
> bars (**LCP 2500 · CLS 0.1**) are *identical* to `content_static`'s and were **never derived from
> it**: both sides independently took the CWV *Good* band. For three weeks the campaign read that
> identity as evidence of a relationship that did not exist. ⇒ ***a number that matches its supposed
> source is the hardest kind of un-sourced number to notice, because it looks like the check already
> passed.*** The record now distinguishes **derived-from** · **equal-by-common-ancestry** ·
> **no-counterpart-exists**, which prose never could. ⚠ **Second instance in the same increment**:
> `skill_web_quality_sweep`'s stale baseline (`633 → 659`, mixing a **chromium** figure with an
> **all-projects** one) now reads as correct **because chromium today genuinely is 659**.
>
> **Built:** `site/tests/gates/bar_provenance.json` + **`gate-53`** (G53a–G53f), red-proven **9/9**
> (7 mutations + 2 controls), **every case red at its DECLARED assertion set** — GR-3's attribution
> clause applied from the harness's **first** run rather than discovered in its fourteenth day.
> ⭐ **Hash the CLASS SUBTREE, never the file — and that is MEASURED, not argued:** between our pin
> `6096157` and their HEAD `b7c6d653` the *file* moved **43,988 → 52,879 B across 5 commits** while
> `classes.content_static` **did not move at all** (sha256 `f2292ca9…` at both refs). A file hash
> would have redded all five for reasons unrelated to our bars. ⭐ **G53e asserts the EXCLUSIONS**
> (gate-48's discipline): every leaf of the class is mapped, declined, or un-adopted **with a
> reason**, so a metric WebForge *adds* reds this gate until someone rules on it — *silence is not a
> disposition*. **Writing that assertion surfaced a leaf (`/categories/performance`) covered by
> neither, declined in prose only ⇒ the rule earned itself before its first run.**
>
> ⚠⚠ **THE DELIVERY FINDING, AND IT IS THE SHARPEST THING IN THIS INCREMENT.** Vitruvius's scope-B
> answer was **delivered 2026-08-29 14:20** and sat **untracked** in `who/coordination/`. This
> campaign recorded B2b as *"HELD — no reply yet `[D]`"* **three times afterwards** (GR-2's close,
> GR-3's close, and the mission's own B2b row), because the hold was re-verified in **Vitruvius's
> 08-27 prose notice** and **never at our own inbox — the destination the claim was about.**
> ⇒ **`F-u`'s class, fourth sighting.** ⭐ And **babbage's 08-29 memo named the three untracked memos
> explicitly** — *"from the sender's side those three are indistinguishable from undelivered"* — so
> **the warning that our inbox was unread sat unread in that inbox for four days.** That is
> convention 19's finding (*an instrument nobody reads is indistinguishable from one that does not
> exist*) arriving at the level of the **inbox** rather than the CI run list. **5 inbound memos
> committed** (`d2228b0`) — the receiving commit *is* the read-receipt.
>
> ⚠ **And `STATE.md` was the same finding's next instance, found in this very cascade**: it carried
> **ZERO mentions of `GR-2` or `GR-3`** `[D]`, both closed 2026-09-01 — each close updated *this*
> file and not the vault's operational snapshot. Repaired, with `MANIFEST.md` genuinely re-reviewed
> in the same commit (G41d): **57 skills · 45 templates · 5 topics · 27 subtopics, zero drift**, and
> the subtopic **predicate** written down because a naive `find` reads **32** (the extra 5 are
> per-topic `AGENTS.md`) and would "fix" a correct number.
>
> ⏭ **NEXT: Lane D** — story coverage, the Gate-1 order's **last lane**, at its own ⛩ conv-13
> pre-build gate, and it needs an **⛩ audience/scope decision before any copy is authored** (R-124 is
> routed to that gate). **P4.4b B3 no longer competes with it.** ⛔ Still held: **P5.1** with the
> humans · the **Hopper reply** and the **babbage reply**, each its own ⛩ send GO. ⚠ Owed: B1's
> ⛩ Speed-Insights → transport → first p75 · the four un-adopted class leaves (TBT + a11y/bp/seo),
> a **dated, asserted** gap · `gate-19`'s fixtures carry `configSettings` **ABSENT**, so *"our 90 is a
> desktop bar"* is `[I]`, not `[D]`, and only a re-baseline repairs it · ~59 uncited capture PNGs.
>
> ⛔⛔ **CORRECTED 2026-09-02 — THIS CLAIM WAS FALSE AND IT WAS MINE.** The fixtures **do** record their instrument: every one carries a top-level **`_provenance`** string (*"Lighthouse 13.4.0 **desktop** on /vaults/graph"*; two name `--preset=desktop` exactly), and the **raw archived runs** (`site/evidence/`, gitignored) carry hard `configSettings` `[D]`: **`formFactor: desktop` · `screenEmulation.mobile: false` · `rttMs: 40`** at LH **13.4.0**. ⇒ **the desktop claim is `[D]`, not `[I]`.** The error was checking `configSettings` alone, finding it absent, and concluding no record existed — **convention 16 breached one sitting after this campaign cited it**, by the desk that cited it. ⭐ **The residual is real but NARROWER**: the *committed* fixture carries no **machine-readable** instrument field, so **no gate can assert it** (a gate cannot assert prose), and the hard evidence sits in a **gitignored** directory CI never sees. *The defect was never "we cannot prove it" — it was "nothing re-checks it".* Closed by the 2026-09-02 re-baseline + `gate-53`'s **G53g**.
> ⭐⭐ **ADDENDUM 2026-09-02 (post-close, NOT a reopening) — THE FOUR UN-ADOPTED BARS ARE ADOPTED, AND
> THE ADDENDUM OPENS BY CORRECTING P4.4's OWN CLOSE.** ⛩ Operator: *"Go and adopt."* P4.4 stays
> **`completed`**; the four `content_static` leaves were filed at its close as an **owed item**, and
> this discharges it (the **GR-2 addendum precedent** — *filed as owed, never as a criterion*).
>
> **Adoption turned out to be a RE-BASELINE.** The committed fixtures carried **1 category and 2
> audits**, so there was nothing to assert against — and the regeneration script **did not exist**,
> though every fixture's `_provenance` said *"regenerate…"* and three separate missions had hand-made
> them. `site/scripts/gen_lighthouse_fixtures.mjs` is that script. Measured first, then pinned, all
> four routes at `lighthouse@13.4.1 --preset=desktop`: **perf 1.0 · a11y 1.0 · bp 1.0 · seo 1.0 ·
> TBT 0 ms · desktop.** `gate-19` **3 bars → 7**; `gate-53` **6 → 7** (**G53g**); red-test **15/15**
> (13 mutations + 2 controls); chromium **659 → 660** · fast **542** · all-projects **686**.
>
> ⛔⛔ **THE CORRECTION IS THE ENTRY WORTH READING.** P4.4's AAR said *"`gate-19`'s fixtures carry
> `configSettings` ABSENT, so 'our 90 is a desktop bar' is `[I]`, not `[D]`."* **False, in seven
> surfaces.** Every fixture carries a top-level **`_provenance`** naming the instrument (*"Lighthouse
> 13.4.0 **desktop** on /vaults/graph"*), and the **raw archived runs** carry hard `configSettings`
> `[D]` (`formFactor: desktop` · `mobile: false` · `rttMs: 40`). The error was checking the *standard*
> LHR field, finding it absent, and concluding **no record existed** — **convention 16 breached one
> sitting after this campaign cited it, by the desk that cited it, inside the artifact built to record
> provenance.** Corrected at `e60e7ad` **before** the re-baseline, because *a remedy aimed at the wrong
> defect* is what this campaign keeps finding. ⭐ **The residual was real but NARROWER, and G53g is its
> close**: the *committed* fixture carried no **machine-readable** instrument field, so **no gate could
> assert it — a gate cannot assert prose** — and the hard evidence sat in a **gitignored** directory CI
> never sees. *The defect was never "we cannot prove it"; it was "nothing re-checks it."*
>
> ⚠ **TBT IS ADOPTED AND INERT, AND SAYS SO ON THE GATE'S FACE** — 0 ms measured against a 200 ms
> ceiling. *A bar that cannot currently fail proves nothing* (convention 14) ⇒ it ships as a
> **regression floor**, and it inherits `perfMin`'s exact caveat (TBT is a CPU-throttling metric, so
> 200 is **mobile-derived** on **desktop** fixtures). Adopted anyway — *a loose floor is harmless where
> a wrong bar is not* — and **not** silently tightened, because inventing a bar is what `ratchet_law`
> reserves for an operator gate. ⚠ **`seoMin` has ZERO headroom**; ⚠ **a11y is deliberate redundancy**,
> `gate-4`'s axe-at-zero being strictly stronger.
>
> ⚠ **A RE-BASELINE THAT ALSO MOVES THE INSTRUMENT CANNOT ATTRIBUTE WHAT IT MEASURES.** LH went
> **13.4.0 → 13.4.1** in the same act, and `/learn/concepts/knowledge-graph` read **0.99 before, 1.0
> after** — version, machine, or page, nothing here can say. **Confounded, and recorded as confounded**
> rather than banked as an improvement.
>
> ⭐ **Three harness defects, every one caught by the harness's own discipline:** `failing_set()`
> matched `G53[a-f]` and **could not see `G53g`**, so every new case would have reported **NO RED** —
> *the harness silently blind to the assertion it was extended to prove*; **`G53c`'s coverage floor was
> `>= 2` against an actual 6**, so four counterparts could have vanished green (raised to 6); and two
> **declared red-sets** went stale for that same reason and reported as **HARNESS BUG** rather than
> passing. ⇒ ***A COVERAGE FLOOR GOES STALE THE MOMENT ITS SUBJECT GROWS*** — raise it in the commit
> that grows it, or the limb decays into a formality.
>
> ✅ **Also cleared this sitting:** the push (`60d0120..0362a00`, gitleaks clean, verified at the
> remote) and **both staged replies DELIVERED** — Hopper → `Git.aDNA`, babbage → `Hardware.aDNA`,
> byte-identical, stamped, then **RESYNCed** so both ends carry the delivered stamp. ⭐ **Hopper's memo
> was stale on its face and its own clause caught it**: it said the literal stays public *"until our
> next ⛩ GO'd push"* — which had happened thirty minutes earlier — so the clause was **updated at
> delivery** rather than delivered false. *Convention 15 working exactly as designed.*
>
> ⏭ **NEXT is unchanged: Lane D**, at its own ⛩ conv-13 gate, needing an **⛩ audience/scope decision
> before any copy**. ⛔ Held: **P5.1** with the humans. ⚠ Owed: B1's Speed-Insights → transport → first
> p75 · ~59 uncited capture PNGs · babbage's **lease question** (operator ruling, routed to
> `idea_upstream_coordination_dropbox_doctrine`) · babbage's two upstream findings still **proposed,
> not filed** (`skill_upstream_contribution` needs operator approval).
