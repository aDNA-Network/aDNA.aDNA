---
type: session
session_id: session_stanley_20260909_023344_haussmann_fw_at_source
tier: 1
campaign: campaign_haussmann
mission: null                # not a mission — the F-w completion, opened by an inbound memo (Venus §2)
created: 2026-09-09          # ⛔ `date -u`, NOT local. Local is still 2026-09-08; UTC crossed midnight.
updated: 2026-09-09
status: completed
last_edited_by: agent_rosetta
executor_tier: opus
token_budget_estimated: 70-110kT
token_budget_actual: ~105kT   # filled AT THE CLOSE. Inside the 70-110kT band. The suite ran three times (full, then two targeted re-runs to test determinism) — that re-run cost bought the F-ab attribution and was not drift.
tags: [session, haussmann, f_w, template_release, coordination, convention_20, p5_1, venus, hestia]
---

# Session — `F-w` was fixed in the image and never in the source

## Intent

An inbound memo (Venus → Rosetta, delivered 2026-09-08) states that this vault's own claim
*"the template was corrected in `v8.10`"* is **false at the object**. Verified at the plan gate: it is,
and at **three** sites rather than the one they measured. Close `F-w` where it actually lives — the dev
graph — then correct the two delivered memos that assert otherwise.

⛩ **Operator rulings taken at the plan gate (three):**

| # | Ruling |
|---|---|
| 1 | **Scope = `F-w` at source + errata.** Not the fix alone; the two delivered memos assert a fix that had not landed. |
| 2 | **`P5.1` recruitment is OPEN.** ⛔⛔ The deploy hold is **live from now**. Panel stamp pins to production `a2ad53b`. `AC-2`/`AC-3` concurrent; a **non-builder** on `AC-2` also discharges `P2.6` O0b. ⛔ Agents must not recruit. |
| 3 | **Convention 20 ADOPTED, amended.** For a public-origin vault the **push** is the publishing act; the guard moves **pre-push**, the pre-send scan survives as a re-check, not the gate. |

> ⚠ **Ruling 2 does not bar this sitting's push, and that distinction is convention 20's own subject.**
> A **push publishes source**; a **deploy publishes the site**. The hold is on the deploy. This work does
> not touch `site/`. Conflating the two is what would strand the errata for the panel's duration.

## Derived at open — never carried

| Fact | Value | How |
|---|---|---|
| UTC stamp | `2026-09-09T02:33:44Z` | `date -u` — local PDT is still 09-08 |
| HEAD | `7956b97` | `git log --oneline -3` |
| Production alias | `a2ad53b` | `STATE.md` queued block, 2026-09-08 |
| ADRs `proposed` | **0** (53 accepted · 1 amended · 1 inactive) | `grep "^status:" what/decisions/*.md` — the lone `proposed` hit is the enum line in `AGENTS.md` |
| Active peer sessions | **none** | `ls how/sessions/active/` empty at open |

## The finding, measured

`[D] 2026-09-09` — the `v8.10` `F-w` fix landed in the **image** and in the **staged candidates**, and
**never in the dev graph that authored them**:

| # | Site | Dev graph (`aDNA.aDNA/`) | Image (`.adna/`) |
|---|---|---|---|
| 1 | `how/skills/skill_onboarding.md:208` | ⛔ *"published to the **Lattice Protocol marketplace** … agentic residuals flowing back to you … coming soon"* | ✅ *"There is no marketplace today and none is promised here."* |
| 2 | `how/templates/template_node_adna_exemplar/HOME.md.template:54` | ⛔ `browse the <a>context-graph marketplace</a> — coming soon, via the Lighthouse network` | ✅ `browse the public vault registry` |
| 3 | `…/HOME.md.template:31` (structural comment) | ⛔ `… adna.network CTA + marketplace link → …` | ⛔ **same** — the *fixed* file still describes itself as carrying what it no longer carries |

**Mechanism.** The release ledger's rows **P5** and **P6** read *"authored here → `.adna/how/skills/` /
`.adna/how/templates/…`"*. The pipeline's authoring surface is `artifacts/template_release/staged/`; its
destination is `.adna/`. **The dev graph is the source of record and was never a destination.** ⇒ the
claim was true of the artifact and false of the source.

⭐ **Venus's sentence is the keeper**: ***a fix announced in the memo that reports the defect is still an
unverified claim*** — and it is the more dangerous half, because every recipient now believes the source
is clean.

⚠ **Site 3 is ours to notice, not theirs.** Venus grepped the string in our tree, so the comment that
*describes* the removed link — identical in **both** trees, including the fixed one — was outside what
their search could return. **An absence assertion is only as wide as the string it searched for**
(convention 16's sibling): they searched for the promise; the comment names it without making it.

## Step 0 — the reply sweep, and it found two items nobody had on a list

⚠⚠ **FIRST, A CORRECTION TO THIS SESSION'S OWN PLAN.** The plan says *"`who/coordination/` holds **15**
memos with `ack_required: true`."* **It holds 57**, of 246 total `[D]`. The 15 was the length of a
`tail -15` in the plan-gate probe, **read as a total** — an un-truncated-looking figure produced by a
truncating command. ⇒ ***the campaign's own "a truncated command is a derived figure", committed inside
the plan that cites conventions 16 and 17.*** Corrected here, strike-not-delete (SO-6).

**Scope of the sweep** (convention 17 — name the surface): inbound (`*_to_rosetta*`) memos carrying
`ack_required: true`, **dated 2026-08-20 or later** — **13**. Older inbound acks were not swept and no
claim is made about them. Reply presence was checked **in the recipient's tree as well as ours**,
because ours is not the surface that answers it.

| Inbound | Reply | Where |
|---|---|---|
| 08-20 hopper · standard-bearer gate is a noop | ✅ | `Git.aDNA/…/rosetta_to_hopper_template_gate_is_ours` |
| 08-20 venus · installer v0.4.1 publish request | ✅ | `Network.aDNA/…/publish_go_granted_artifact_unreachable` |
| **08-21 berthier · dropbox doctrine graduation** | ⛔ **NO** | authored, `status: outbound_ready`, **never sent** — absent from `aDNALabs.aDNA` `[D]` |
| **08-23 hopper · R4 deletes the LICENSE** | ⛔ **NO** | **no `rosetta_to_hopper` memo mentions license/R4/unlicensed** `[D]` |
| 08-23 venus · two unpushed deploy commits | ✅ | `Network.aDNA/…/ack_the_hazard_fired_before_your_memo_landed` |
| 08-27 hopper · forge address once | ✅ | `Git.aDNA/inbox/…/measured_confirmed_and_redacted_at_source` |
| 08-27 venus · ADR-022 tier vocabulary | ◐ **acked, unruled** | `Network.aDNA/inbox/…/ack_membership_vocabulary_received_and_filed` |
| 08-29 babbage · machine-class validation | ✅ | `Hardware.aDNA/inbox/…/both_confirmed` |
| 09-01 vitruvius · aDNA front page | ✅ | `WebForge.aDNA/…/g_adna_approved_both_doors` |
| 09-02 hopper · hook 4.2.0 | ✅ | two memos, 09-07 + 09-08 |
| 09-05 milner · slice-b unmerged | ✅ | `TypeScript.aDNA/…/three_asks_answered` |
| 09-07 milner · three asks carried forward | ✅ | same |
| 09-08 venus · the promise is in three places | ⏳ | **this sitting** |

### ⭐ Two findings, both out of this sitting's ruled scope — recorded, NOT built

1. **`coord_2026_08_21_rosetta_to_berthier_dropbox_doctrine_ack.md` is `status: outbound_ready` and has
   been for 19 days.** It is **written**. It answers a memo that asked for an ack. Nothing was blocking
   it and nothing was watching it. ⇒ ***`outbound_ready` is a state with no owner and no clock*** — a
   memo in it looks done from the authoring side and does not exist from the receiving side. Needs only
   a ⛩ send GO.
2. **Hopper's R4/LICENSE ask (08-23, 17 days) has no reply at all** — and it is **agent-reachable work
   in a skill this vault owns**. R4 deletes the `LICENSE` at fork and nothing downstream ever asks the
   new project to pick one, so **21 of 23 published repos are unlicensed**, which breaks ADR-013's
   FOSS-keyed host placement. Hopper explicitly declines to propose the wording (*"it is your skill"*)
   and offers three mechanisms: a fork-time prompt · a `#needs-human` marker · a `license:` field in
   `MANIFEST.md` that `skill_node_health_check` can see. **Severity medium, no date — but every fork
   widens it.**

⇒ **The sweep paid.** Both items were invisible to every index this vault keeps, and neither would have
surfaced from reading `STATE.md`'s owed list — which names neither.

## Step 1 — ⛔⛔ THE DEFECT IS SIX SITES, NOT THREE, AND FOUR OF THEM ARE STILL IN THE SHIPPED IMAGE

The absence assertion (V1, over `how/skills/**` + `how/templates/**`) **did not come back clean**, and
reading its hits rather than counting them is what found the rest. Venus said *"one site was three."*
In this tree it is **six**, and `v8.10` fixed **two**.

| | Site | Class | Dev graph | `.adna/` image | Act |
|---|---|---|---|---|---|
| 1 | `skill_onboarding.md:208` | copy | ⛔→✅ | ✅ (v8.10) | **fixed** |
| 2 | `HOME.md.template:54` | copy | ⛔→✅ | ✅ (v8.10) | **fixed** |
| 3 | `HOME.md.template:31` | comment | ⛔→✅ | ⛔ | **fixed + staged** |
| 4 | `template_node_adna_exemplar/README.md:30` | comment | ⛔→✅ | ⛔ | **fixed + staged** |
| 5 | `…/.obsidian/snippets/{{persona_lower}}_accent.css.template:1186` | comment | ⛔→✅ | ⛔ | **fixed + staged** |
| 6 | `skill_node_bootstrap_interview.md:69,153` | ⛔ **MECHANISM** | ⛔ | ⛔ | **ROUTED — not built** |
| 7 | `skill_obsidian_integration_test.md:348,353` (+ `skill_obsidian_agent_inspect.md:316`) | ⛔ **MECHANISM** | ⛔ | n/a — not shipped | **ROUTED — not built** |

⭐⭐ **THE HEADLINE: `v8.10` FIXED THE SITES THAT WERE FILED, NOT THE CLASS.** `F-w` named one site; the
fix was scoped to **the filing** rather than to **the promise**. So the release shipped, and the public
image `v8.10` **still promises a marketplace at four sites** — including the two the release itself
edited around. ⇒ ***this is `F-u`'s family — a scope stated once is read as the whole world*** — and
`STATE.md` carries that exact warning in the block immediately above this work. **The campaign diagnosed
the class, wrote it down, and then committed it in the next release.**

⚠ **And the staged candidate carried defect 3 too** `[D]` — `HOME.md.template.candidate:31` had the
stale comment. So the `v8.10` review read the *rendered* line and missed the comment naming it **23
lines up in the same file**. Convention 17's *"after removing a defect, grep the rendered output for
what the defect claimed"* — the inverse case: grep the **source** for what *describes* the claim.

### ⛔ Sites 6 and 7 are ROUTED, not built, and the restraint is the ruling

Both are **mechanisms, not copy**, and each has a blast radius that a sitting's tail cannot carry:

- **6 · The bootstrap interview asks the operator to shop in a marketplace that does not exist.** `C4`
  reads *"Marketplace categories of interest … `[decks, sites, video, comics, …]`"* and writes
  `marketplace_interests:` into every new node's `inventory_memberships.yaml`. **This is the sharpest of
  the six** — the others *mention* a marketplace; this one **asks the operator to pick shelves in it at
  first boot**, and persists the answer. ⛔ Removing `C4` moves the question count **19 → 18**, which is
  narrated in **three** places including the **workspace router** `~/aDNA/CLAUDE.md` (twice, at `:26`
  and `:33`) — a cross-vault same-diff (ADR-057) — and the field is already written into existing
  nodes, so there is a data tail. **Not a tail edit.**
- **7 · A test tolerates a 404 on the strength of the retracted promise.**
  `skill_obsidian_integration_test.md` targets `https://lattice-protocol.com/marketplace` and is
  `warn_only` *because* *"404 placeholder on not-yet-ready marketplace is acceptable"*. With the promise
  retracted, the tolerance has no basis — but changing a test's semantics is convention 14/15 work, in
  its own sitting, with a red-proof.

**Not defects** (read, not counted): `skill_site_design_pipeline` ×2 and `skill_reference_inspection`
use *"marketplace"* as a **site-surface category** in design methodology; `example_mission_product_launch`
is a **fictional** example; `skill_onboarding:208` is now the **negation**.

## Log

- **Open** — session file created; 7 tasks staged; no peer session to coordinate with.
- **Step 0** — reply sweep complete; count corrected 15 → 57; two unanswered items found.
- **Step 1** — 5 sites fixed in the dev graph, 3 newly staged as release candidates; 2 mechanisms routed.
  V2 byte-identity ✅ ×3 · V3 `.adna/` clean ✅.
- **Step 2** — post-delivery erratum blocks added to both delivered memos (disclosed as **not** in the
  delivered bytes); two errata authored `outbound_ready`; release ledger P5/P6 amended with the
  dev-graph co-destination + the scope finding.
- **Step 3** — `skill_template_release` **step (b.2)** added: a hard gate back-writing every payload
  path to the dev graph, with the `diff` in both trees. A step, not a checker (convention 15).
- **Step 4** — convention 20 landed. ⭐ **The ordered repoint found nothing to repoint** (below).
- **Step 5** — `P5.1` AMENDMENT 4 (the GO + the hold); AC-2's criterion text corrected; `STATE.md`
  queued banner rewritten.
- **Close** — MANIFEST re-derived (below); build **229 pages** ✅; redirects **42/42** ✅; chromium suite
  running.

## Step 4's real result — the sweep found nothing to move, and that is the finding

The adoption ordered a sweep for pre-send publication scans to repoint. **Surface swept** (convention
17): `how/skills/**`, `campaign_haussmann/CLAUDE.md`, vault `CLAUDE.md`. **Result: none exists.**

The publication guard is **already pre-push and already installed** — `CLAUDE.md:224` mandates it, and
`.git/hooks/pre-push` is present, executable, and invokes `gitleaks` at **28** sites `[D]`. The only
genuinely pre-**send** instrument is convention 15's **pin re-read**, which is about *accuracy* rather
than publication and **belongs at the send.**

⇒ ***the instrument was in the right place the whole time; what was misplaced was the belief recorded in
the sittings.*** So the remedy is a habit, not a move. **A grep run to find what to change is also a
grep that can find nothing needs changing** — and reporting that is cheaper than authoring a move to
justify the sweep.

## Close cascade — MANIFEST re-derived, and deliberately NOT touched

All four counts re-run from disk on their **written** predicates: skills **57** (reconciled against
`CLAUDE.md`'s inventory rows — also 57) · templates **45** · context topics **5** · context subtopics
**27** (naive `*.md` reads **32**; the extra 5 are per-topic `AGENTS.md`). **Zero drift**, which is the
correct outcome — this sitting **edited** a skill and templates but **added** none.

⛔ **And `MANIFEST.md` was NOT edited, on purpose.** `STATE.md`'s date did **not move** this sitting (it
was already 2026-09-09), so **G41d's ratchet never opened** and there is no drift to close. Appending a
"reviewed again" note would have made this the **seventh** stacked block in a single frontmatter field
that already runs to thousands of characters.

⭐ **Which is exactly the memo that landed in this vault two days ago.** Berthier's `§2.1` offer, item 4:
*"name a retention depth for every repeated block class, not just session blocks — ungoverned classes
are where the drift actually accumulated."* `MANIFEST.md`'s `updated:` comment **is** such a class, and
it is ungoverned. **The review is recorded here, where a session record belongs**, and the field's
growth is filed as the first live instance of Berthier's item 4 on our own surface.

## ⚠ The suite is NOT the green the plan predicted — and `F-ab`'s set has a fourth member

**Predicted:** 229 pages · 42/42 redirects · **698 passed / 1 skipped / 0 failed** · `check:markup` clean.
**Measured:** 229 pages ✅ · 42/42 ✅ · `check:markup` **exit 0** ✅ · **694 passed / 1 skipped / 4 failed.**

| Gate | Run 1 | Run 2 | Verdict |
|---|---|---|---|
| `gate-42` G42b **dark** | ❌ | ❌ | load-sensitive (`F-ab`) |
| `gate-42` G42b **light** | ✅ | ❌ | **flipped** ⇒ non-deterministic |
| `gate-47` focus visible/ordered | ❌ | ✅ | **flipped** ⇒ non-deterministic |
| `gate-47` Shift+Tab | ❌ | ❌ | load-sensitive (`F-ab`) |
| `gate-17` **G12** twins | ❌ | ❌ | ⭐ **deterministic — diagnosed below** |

**Attribution, stated rather than assumed:**
1. **`main` is GREEN in CI** — last **5** runs `success`, including HEAD `7956b97` at 2026-09-09T00:30Z
   `[D]`. ⚠ **Convention 19 says derive this AT SESSION OPEN, and this session derived it at the close**
   — only because a red forced the question. **A habit that fires when you need the answer is not the
   habit**; its whole value is having the answer *before* a red makes you want a particular one. Logged
   as a miss, not narrated away.
2. **This diff touches no `site/` file.** The edits are `how/skills/`, `how/templates/`,
   `how/campaigns/`, `who/coordination/`, `STATE.md`.
3. `gate-42`/`gate-47` **changed verdicts between two runs of the same tree** ⇒ non-deterministic by
   demonstration, which is exactly `F-ab`'s recorded signature.

### ⭐⭐ G12 is a fourth member of the load-sensitive set, and it hid as a different problem

`gate-17` G12 fails with **`Test timeout of 30000ms exceeded`** — **not an assertion failure.** Its body
loops `for (const path of TWINS) { await request.get(url) }`, **sequentially**, and this build's
manifest lists **226 twins** `[D]`. The loop never finishes; **no twin was ever found to be wrong.**

⇒ ***a duration ceiling reported as a correctness verdict.*** It is the same disease as `gate-39` and
`gate-42 G42b`, but it presents as a **timeout** rather than a flaky assertion, which is precisely why it
was never enumerated in `F-ab`'s set — **the set was assembled from gates that fail their assertions.**

⛔ **NOTHING FIXED, NO PIN MOVED, and the restraint is the ruling.** The campaign's own rule for this
class: ***a red on a duration-sensitive gate is a question, not a verdict.*** Raising the timeout is
convention 1 (moving a bar to pass a test); parallelising the loop is new test code at a sitting's tail,
which conventions 15/16/17 have now ruled against six times. **Routed to `GR-5`'s `F-ab` band as a
candidate fourth member**, with the distinguishing note that its symptom is a timeout.

⚠ **Honest limit on this claim:** n=2 locally, both on a loaded machine, against CI green. **That is not
a rate**, and establishing one is `GR-5`'s AC-1 business, not this sitting's.

## SITREP

**Completed**
- `F-w` closed at its source — **5 of 6 sites** fixed in the dev graph; 3 newly staged as release
  candidates. Byte-identical to the ratified `v8.10` text (verified by `diff`, ×3).
- `.adna/` proven untouched (`git status --porcelain` empty) — Standing Rule 1.
- Both delivered memos carry a disclosed post-delivery erratum block; **two errata authored**
  (→ Venus, → Hestia), `outbound_ready`.
- Release ledger P5/P6 amended (dev-graph co-destination + the scope finding).
- `skill_template_release` **step (b.2)** — hard gate, back-write + verify in both trees.
- **Convention 20** landed, amended; the ordered repoint found nothing to repoint.
- **`P5.1` AMENDMENT 4** — the GO, the live deploy hold, the panel stamp, the runner assignments.
- **`P5.1` AC-2's criterion text corrected** — it still read *"the operator runs it"*.
- Reply sweep: **13** recent inbound acks; **2 unanswered items surfaced.**
- MANIFEST re-derived (57 / 45 / 5 / 27, zero drift) and deliberately **not** edited.

**In progress / next**
- ⛩ **A push GO** — publishes source **and** both errata (convention 20). **Not a deploy.**
- ⛩ **Two send GOs** — the Venus and Hestia errata.
- ⛔ **No deploy while the panel runs.**

**Blockers** — none. Nothing here waits on an agent.

**⛩ Operator queue, unchanged by this sitting**
Venus's three tier-vocabulary asks (acked 08-28, **unruled**) · the R3 → Hopper memo · striking
ADR-056 clause 5 and `F-v` from the gate list (neither is a decision).

**⏭ Agent-reachable and now named** — *none of these was on any list before this sitting*
Hopper's **R4/LICENSE** ask (17 days, unanswered, a skill we own, 21/23 repos unlicensed) · the
**Berthier dropbox ack** (`outbound_ready` 19 days — needs only a send GO) · **C4's three shapes**
(Hestia's call) · the **Obsidian-test 404 tolerance** · **G12** as an `F-ab` candidate.

**Files touched**
`how/skills/skill_onboarding.md` · `how/skills/skill_template_release.md` ·
`how/templates/template_node_adna_exemplar/{HOME.md.template,README.md,.obsidian/snippets/*.css.template}` ·
`how/campaigns/campaign_haussmann/CLAUDE.md` ·
`…/artifacts/template_release/{release_staging_ledger.md,staged/*}` ·
`…/missions/mission_haussmann_p5_1_human_evidence.md` · `who/coordination/` (2 new, 2 amended) ·
`STATE.md` · this session file.

## Next Session Prompt

You are Rosetta in `~/aDNA/aDNA.aDNA`. **`P5.1` recruitment is OPEN and a production deploy hold is
live** — do not run `deploy_adna.sh prod` from any checkout until the panel closes or the operator lifts
it; a push is *not* a deploy and is not covered by the hold (convention 20). Read `STATE.md`'s queued
banner first. The last sitting closed `F-w` at its source, where it turned out to be **six sites, not
one**: `v8.10` corrected the shipped image `.adna/` and never the dev graph, because the release
ledger's payload rows named a single destination — fixed, and `skill_template_release` now has step
(b.2) to prevent it. Four agent-reachable items are named and unclaimed, none blocking: **Hopper's
R4/LICENSE ask** (17+ days, no reply, agent-reachable in a skill we own — R4 deletes the LICENSE at fork
and nothing asks the new project to pick one, leaving 21/23 published repos unlicensed and breaking
ADR-013's FOSS-keyed placement; Hopper offers three mechanisms and declines to pick); the **Berthier
dropbox ack** sitting at `outbound_ready` for 19 days needing only a ⛩ send GO; the **R3 → Hopper memo**
fully specified at `artifacts/template_release/r3_fixture_owed.md` §5; and **Berthier's
`pattern_state_queued_banner` §2.1 offer** (5 items — ⚠ measure our own §3 live instances before
adopting item 1 on their n=1). Two errata are `outbound_ready` and need ⛩ send GOs. **Derive `main`'s CI
at open** (convention 19) and re-derive the production build stamp from the alias before trusting any
recorded value. ⚠ The local suite currently shows **4 reds, all in duration-sensitive gates**, with
`main` green in CI and no `site/` file touched — including **G12, a newly-identified `F-ab` candidate
that fails as a 30s timeout over 226 sequential twin fetches rather than as a wrong assertion**. Do not
raise its timeout.
