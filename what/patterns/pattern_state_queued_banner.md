---
type: pattern
created: 2026-07-02
updated: 2026-07-22   # §2.1 integrity-verified roll folded (Operations.aDNA co-evolution, Refit M1 / D-DP2 item 1)
status: draft
pattern_category: operational
applies_to: [sessions, campaigns, coordination]
campaign_id: campaign_champollion
instances:
  - "STATE.md ⏭ QUEUED banner — aDNA.aDNA (this vault; '## ⏭ QUEUED — Next Live Session (READ THIS FIRST)', single live cold-start block replacing the archived Next-Session-Prompt stack)"
  - "STATE.md §QUEUED — LatticeProtocol.aDNA (their CLAUDE.md routes cold-starts to it: 'cold start per STATE.md §QUEUED')"
graduation: "2 instances live (one per sibling campaign) — the third graduates this file from draft; template-fold ratification queued at Champollion G3, ships via M6.1 RC (skill_template_release)."
last_edited_by: agent_rosetta
tags: [pattern, state_queued, cold_start, handoff, session_handoff, token_economy, next_session_prompt, champollion]
---

# pattern_state_queued_banner

> **Plain-language version first**: every work session ends by writing a note to whoever picks up next — "here's where we are, do this first." The obvious way to do that is to *append* a fresh note each time. The trap: those notes pile up. After a few dozen sessions you have a giant stack of stale "start here" notes, each one superseded by the next, and a newcomer can't tell which one is current — the file that's supposed to orient them has become the thing burying them. The fix is a **single, always-at-the-top, always-overwritten** banner: one block titled "read this first," rewritten (not appended) at the end of every session. There is exactly one live handoff at any moment; the old ones don't accumulate in the live file — they get shed into an archive at close. One current instruction beats a hundred expired ones. It's the difference between a whiteboard you wipe and rewrite versus a wall you keep stapling new notes onto until you can't find today's.

## 1. Problem

A vault's `STATE.md` is the cold-start file — the first thing a fresh agent reads to orient. The natural handoff discipline ("end every session with a Next Session Prompt so the next agent can continue") has a failure mode that only shows up at scale: **the prompts accumulate.** Each session appends its `## Last Session` block and its `## Next Session Prompt`; none are ever removed; every one is superseded by the next. This vault measured the damage directly at Champollion M1.5: `STATE.md` had grown to **554 KB / 721 lines**, of which the accumulated `## Next Session Prompt` stack was **~130 KB (24%)** and the 40 legacy `## Last Session` blocks were **162 KB** — *all* long-superseded. The file that exists to give a fast cold-start read had become a file too big to read (it refused the Read/Edit tools). Context.aDNA independently flagged `STATE.md` as the **#2 worst always-loaded file** on the node. The orientation instrument had become the orientation obstacle.

## 2. The mechanism

Replace the *append-a-prompt* discipline with a **single overwritten banner** plus a **shed-on-close** rule.

1. **One live block, pinned to the top.** A single `## ⏭ QUEUED — Next Live Session (READ THIS FIRST)` section at the very top of `STATE.md` (right after the frontmatter and router note). It holds the *current* handoff and nothing else: what was just ratified, what's next, the next gate, per-session standing rules.
2. **Rewrite, never append.** At session close, the QUEUED banner is *overwritten* with the new handoff — not stacked below the old one. There is exactly one live "start here" at any moment. (A well-written banner often needs *no* edit to stay true across a phase — M1.5's diet kept the banner verbatim and only flipped its status line.)
3. **Shed the predecessor at close.** The session that writes a new banner **sheds the prior session's `Last Session` / `Next Session Prompt` prose into the archive at close** — rather than letting it accrete for a quarterly cleanup. This is the discipline that prevents re-bloat; it is enforced in the gate cascade (see §3).
4. **Archive-shift, never delete.** Superseded blocks move to `STATE_archive.md` under a **dated shift banner**, each leaving a **stub pointer** in `STATE.md` (`→ STATE_archive.md §X, shifted YYYY-MM-DD`). Byte-conservation is provable: after a diet the *combined* size of `STATE.md` + `STATE_archive.md` is ≥ the pre-diet total (content moved, not lost — SO-6 archive-never-delete).
5. **The cold-start read is: frontmatter → QUEUED banner → recent Current Phase.** That triple orients completely; everything older is one archive hop away.

The banner is also a **routing target**: a vault's `CLAUDE.md` can send every cold-start straight to it ("cold start per `STATE.md §QUEUED`"), making the handoff the literal entry point rather than a buried convention.

### 2.1 The integrity-verified roll (Operations.aDNA co-evolution — Refit M1)

Steps 3–4 above (*shed the predecessor*, *archive-shift never delete*) describe **what** moves at close. Operations.aDNA's five-campaign practice contributes the un-taught half: the **roll discipline that makes the move provably safe** on a long-lived STATE file — where a botched shift can silently truncate history that nobody notices until a cold-start reads into a hole. Four checks, cheapest-first:

1. **Fixed newest-N blocks.** A roll shifts a *fixed* count of the oldest session blocks (the newest N stay live) — a deterministic boundary, not an eyeballed one. The count is the roll's contract; it does not drift mid-roll.
2. **Per-block md5 + char-count on the source form.** Before the shift, hash and char-count each block *as it reads on disk*; after, the archived block must reproduce both. A move that changes a byte is a bug, not a roll.
3. **Validate the method against ≥2 known prior hashes before trusting a new roll.** The first time a roll procedure runs (or after any change to it), replay it against **two rolls whose hashes are already known-good** and confirm it reproduces them. A method that cannot re-derive the past is not trusted with the present. Instance evidence: one such validation caught **nothing — precisely because it ran** (the value of a method check is the run, not the finding).
4. **Round-trip re-read after.** Re-read the live `STATE.md` + `STATE_archive.md` *after* the write; the byte-conservation identity (§2 step 4, §4 step 5) must hold on the re-read, not merely on the pre-write plan.

Instance evidence: **6 consecutive verified rolls (Operations.aDNA S74–S78)**, attested in the D-DP2 co-evolution memo ([[../../who/coordination/coord_2026_07_16_berthier_to_rosetta_ddp2_docs_propagation|coord 2026-07-16]]) — Operations is the source-of-truth practitioner, this vault the SSOT that teaches the discipline. *(Whether Operations' running banner is itself a third graduation-eligible adoption of this pattern is a census-and-gate question — see §Provenance — deliberately not settled here.)*

## 3. Live instances (the structure IS the lesson)

**This vault (self-reference — you can look at it right now):**
- `STATE.md` opens with **`## ⏭ QUEUED — Next Live Session (READ THIS FIRST)`** (around line 19). It is the single live handoff — currently the Champollion G2-ratified / P3-open state — carried verbatim across the phase, its status line flipped at each gate. The archived stack it replaced is preserved in `STATE_archive.md` under the dated banner **`## ═══ Shifted 2026-07-02 — Champollion M1.5 (STATE router diet) ═══`**, which holds the 40 `## Last Session` blocks and the ~130 KB `## Next Session Prompt` stack (each with a stub pointer left behind).
- **Provenance is fully traceable in this vault** (concrete paths):
  - [[../../how/campaigns/campaign_champollion/missions/mission_champollion_m1_5_state_diet|mission M1.5 (STATE router diet)]] — the mission that performed the shift (`STATE.md` 554,697 → 47,695 B, −91.4%; combined +2,153 B, zero deleted).
  - [[../../how/missions/artifacts/campaign_champollion_mission_m1_5_aar|the M1.5 AAR]] — records the key finding verbatim: *"STATE bloat concentrates in self-superseded handoff prose … the router accumulates every session's next/last-prompt and never sheds them; the QUEUED banner already superseded all of it,"* and prescribes the shed-on-close Change.
  - [[../../how/gates/champollion_p1_gate|the P1 (G1) gate]] — the gate cascade instruction *"STATE — `⏭ QUEUED` → M2.1 + fresh Next Session Prompt … (shed predecessor prose …)"* installs shed-on-close as the standing close discipline, not a one-time cleanup.

**Sibling campaign (read-only; second live instance):**
- `LatticeProtocol.aDNA/STATE.md` carries its own **`## ⏭ QUEUED — Next Live Session (READ THIS FIRST)`** block (single live handoff — currently Carnot's CP1 / D-C8 two-tier state). Its `CLAUDE.md` routes cold-starts straight to it: **"Fresh-session next pickup = … per `STATE.md §QUEUED`"** and **"cold start per … §0."** Same single-block-at-top discipline, wired as the literal cold-start entry point.

### 3.1 Honest divergence

The two banners share the **exact same section title** and the single-overwritten-block discipline; they differ only in what feeds them. This vault reached the banner *reactively* — via a 554 KB diet (M1.5) that had to archive an accumulated stack — and codified shed-on-close afterward to prevent recurrence. LatticeProtocol's STATE runs the banner as ongoing practice with cold-start routing baked into CLAUDE.md, and its STATE never bloated to the same degree. Same instrument; one instance is a *cure* that became a *habit*, the other is the habit. That is the pattern generalizing across two campaigns, not two different patterns.

## 4. Adoption (copy, don't re-derive)

1. **Put one `## ⏭ QUEUED — Next Live Session (READ THIS FIRST)` block at the top of `STATE.md`** (after frontmatter + any router note).
2. **Overwrite it at session close** with the new handoff — current ratified state, next action, next gate, per-session standing rules. One live block, always.
3. **Adopt shed-on-close**: the closing session moves the *prior* session's Last-Session / Next-Session prose to `STATE_archive.md` under a dated banner, leaving a stub pointer. Don't wait for a quarterly diet.
4. **Route cold-starts to it** from `CLAUDE.md` ("cold start per `STATE.md §QUEUED`") so the handoff is the entry point.
5. **Prove byte-conservation + run the integrity-verified roll (§2.1)** on any shift — not just a one-time diet: fixed newest-N blocks · per-block md5/char-count on the source form · method-validation vs ≥2 known prior hashes · round-trip re-read; then `wc -c STATE.md STATE_archive.md` combined-after ≥ combined-before; validator FULL PASS; spot-check that stub-pointer wikilinks resolve.

## 5. When NOT to use / anti-pattern

- **Brand-new / tiny vaults** with a handful of sessions don't yet need the archive machinery — a single QUEUED block with no shedding is fine until the history is long enough to bloat. Adopt shed-on-close *before* the first quarterly-diet-sized accumulation, not after.
- **Anti-pattern — the append stack.** Adding a fresh `## Next Session Prompt` each session *below* the last. This is the exact 554 KB failure this pattern was extracted to kill; every appended prompt is superseded the moment the next lands.
- **Anti-pattern — delete-on-supersede.** Overwriting the banner by *deleting* the old handoff instead of archive-shifting it violates SO-6 (archive-never-delete) and destroys the audit trail. Shed to `STATE_archive.md`; don't erase.
- **Anti-pattern — two live "start here" blocks.** A QUEUED banner *and* a separate live Next-Session-Prompt both claiming currency. Pick one (the banner); the reader must never have to guess which is authoritative.

## Forward integration (fold stub)

**`fold_batch: champollion_m6_1_rc`** — WHO: Rosetta (aDNA.aDNA), for ratification at Champollion **G3**, shipped via **M6.1**'s release candidate through `skill_template_release`; WHAT: a **STATE template touch** — the public `STATE.md` template gains a top-pinned `## ⏭ QUEUED — Next Live Session (READ THIS FIRST)` stub + a `## Session Closure` note prescribing shed-on-close (overwrite the banner; archive-shift the predecessor's prose to `STATE_archive.md`), so every forked vault starts with the discipline instead of discovering it via a 554 KB diet. Ties to the not-yet-filed upstream idea **`idea_state_prompt_shed_on_close`** (the M1.5 AAR's promised Change; the file does not yet exist in the backlog — this fold and that idea land together). WHEN/HOW defer to M6.1's RC. Do NOT touch any template file or `.adna/` here.

## Provenance & graduation

Harvested at Operation Champollion **M3.1** (Pattern Harvest I, 2026-07-02, Rosetta/this vault). The discipline was *forced into existence* by mission **M1.5** (STATE router diet, 2026-07-02) — a 554 KB→46.6 KB reduction whose AAR named self-superseded handoff prose as the bloat source and prescribed shed-on-close — and installed as standing practice by the **G1 gate cascade**. The sibling instance in LatticeProtocol.aDNA runs the same banner as ongoing cold-start routing. **Instances: 2** (one per sibling campaign) — this file stays `status: draft` until a third vault adopts the banner; **Operations.aDNA's attested banner+roll practice (S74–S78, the §2.1 co-evolution source) is a candidate third adoption** — to be confirmed by a fresh filesystem census and ratified at a future operator gate per the instance-counting rule, deliberately NOT self-counted here. The associated STATE-template fold is queued at Champollion **G3** and ships via **M6.1**'s RC. **Provenance note for the reviewer**: the M1.5 AAR promised an upstream idea `idea_state_prompt_shed_on_close`; that file was never filed (it is referenced by five files but does not exist in `how/backlog/`) — this pattern cites the three live provenance refs above instead of the phantom idea, and flags the gap for the fable reviewer to ledger. Related patterns: [[pattern_order_of_battle]] (the QUEUED banner points the cold-start at the current gate and its obligation surface), [[pattern_cross_graph_codepin]] (a QUEUED banner routes cold-starts *to* the codepin — LP's does), [[pattern_model_tiered_campaign_execution]] (the diet that birthed this banner was a *measured* token-economy outcome, the kind that pattern's §3 hands to Context.aDNA).
