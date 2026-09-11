---
type: session
created: 2026-09-11
updated: 2026-09-11
last_edited_by: agent_rosetta
tags: [session, haussmann, increment_3, v8_11, template_release, f_w, adr_011, deploy_tail, gate, sends]
session_id: session_stanley_20260911_035501_haussmann_increment_3_v8_11
user: stanley
started: 2026-09-11T03:55:01Z
status: completed
campaign: campaign_haussmann
executor_tier: opus
token_budget_estimated: "~180–280 kT — Increment 3 in full: the three sends · a disk re-verification of all 8 ledger rows · the three ruling-owed dev-graph edits · the v8.11 assembly with every control · the deploy tail (tour manifest + changelog + gate-49 re-baseline + suite re-run) · the close cascade + the Hestia memo. ⛩ The push and the deploy are each their own operator GO and the sitting halts at them."
intent: "Fire ⛩ v8.11 and its deploy tail per ruling R2, ordered BEFORE P5.1 recruitment produces evidence. Four ledger questions ruled at the 2026-09-11 gate: Q1 v8.11 · Q2 correct ours to 18 and hold the router · Q3 keep + parenthetical · Q5 replace not delete. ⛔ No fleet canvas migration, no site route for the new pattern, no `.adna/` edit outside the ratified payload."
files_created: [how/sessions/active/session_stanley_20260911_035501_haussmann_increment_3_v8_11.md]
files_modified: [how/sessions/history/2026-09/session_stanley_20260911_015723_haussmann_increment_2.md]
completed: 2026-09-11T05:35Z
token_budget_actual: "≈210–260 kT — RECORDED AT THE TIME, not reconstructed (the P4.3-class defect this campaign has now hit four times, and the one it keeps costing a retrospective). Ratified band ~180–280 kT ⇒ inside it. No SO#11 retrospective. ⭐ The band held because the five rulings were taken AT the gate rather than mid-sitting — GR-4's lesson (a budget ratified before the operator's rulings is costed against a scope nobody has chosen yet), applied in advance."
---

## Derived at open (conventions 16 + 19 — re-asserted, never carried)

| Fact | Value | How |
|---|---|---|
| Peer lease | **none** — `active/` held only `.gitkeep` **after this session closed the stale one** | `ls -a` |
| `main` CI | ✅ **green at `67ad713`**, run `34549133139`, 7m3s | `gh run list --workflow=gates.yml --branch main -L 5` |
| `HEAD` | **`11c8b2c`**; `origin/main` = **`67ad713`** ⇒ **1 unpushed**, records only, **never through CI** | `git ls-remote origin main`, at the remote |
| prod alias | **`a2ad53b`**, built `2026-09-08T03:37:24Z` | `curl /.well-known/adna-build.json` |
| **prod vs HEAD, site bytes** | **`git diff a2ad53b..HEAD -- site/` is EMPTY** ⇒ production carries every site byte in the tree | `git diff` |
| ADR queue | **53 accepted · 1 amended · 1 inactive · 0 `proposed`** (55 files) | per-file `status:` census |
| `evidence/p5_1/` | **ABSENT** ⇒ R2's window is open | `test -d` |
| P5.1 instruments | 4 × `ready_for_operator`; the amendment `accepted` | `grep -m1 '^status:'` |
| `evidence/coldreads/` | **8 files, 8/8 `synthetic: true`** — see the correction below | per-file `grep '^synthetic:'` |
| clock | `date -u` = **2026-09-11T03:55Z**; local PDT is a day behind | UTC stamp per the recorded quirk |

### ⛔ The R2 window re-derives OPEN, and re-deriving corrected the ledger's own count

The ledger's §0 and `MEMORY.md` both say *"all **six** files in `evidence/coldreads/` are SYNTHETIC."*
Disk holds **eight** `[D]`, and the discriminating check is not the count but the field: **8/8 carry
`synthetic: true`**, and the one file whose name lacks `SYNTHETIC` (`coldread_synthesis_p2_6.md`) declares
it in frontmatter *and* says on its face *"PRE-SCREEN only; the human panel is P5.1."*

⇒ **the conclusion survives and the arithmetic under it did not.** Zero human evidence is pinned to any
build stamp, so R2 is performable — but *six* was a **typed** figure (KW-14) inside the paragraph whose own
closing line says ***"Re-derive it at the gate; do not quote this paragraph."***

⭐ **The instruction worked, which is the entry worth reading.** A supersession clause that tells the next
reader to re-measure rather than quote is what converted a carried wrong number into a caught one — and it
caught it in the direction that does not change the decision, which is exactly the direction nobody checks.
⚠ Stated at its width: **8/8 synthetic is a claim about the `coldreads/` packet**, not a claim that no
human evidence exists anywhere; `evidence/p5_1/` being **absent** is the claim that carries that, and it is
a separate measurement.

## Work

### 0 · Session hygiene — a lease withdrawn two hours late

`session_…_015723_haussmann_increment_2.md` was committed at `11c8b2c` and **left in `active/` at
`status: active` with `token_budget_actual:` empty**, so it read as a live peer session to any cold agent.
Closed to `history/2026-09/`, actual **reconstructed and labelled as reconstructed** (≈120–150 kT against a
~90–140 kT band; no SO#11 retrospective, well inside 2×).

⭐ **That file's own §"Derived at open" had recorded the opposite half of the same defect** — it was written
*after* the work, so *"a lease that is not written down is not a lease."* It then became a lease nobody was
holding. ⇒ ***one file, both ends of the same seam, in one sitting.*** **Fourth session to close without its
actual recorded.**

⚠ **The `git mv` quirk fired and the control caught it**: `git diff --cached --stat` after the move read
**17 insertions**, not `0`, because the file was re-`git add`ed explicitly. *`git mv` stages the pre-edit
blob*, and the only thing that distinguishes a correct move from a silently-content-dropping one is reading
the staged stat.

### 1 · The four sends — 4/4 delivered, byte-identical, both ends stamped

astro (flat — **no inbox exists**) · mondrian (Canvas inbox) · berthier (aDNALabs inbox) · hestia
(Home inbox). **The `outbound_ready` queue is empty.**

⭐⭐ **Every pin was stale and its own supersession clause fired.** All three 09-11 memos pinned
`rosetta_head: 67ad713` with *"superseded when: our next commit"* — and there had been one (`11c8b2c`).
Amended at the send. **The pre-send re-read has now paid on 5 of 5 outings.**

⭐⭐ **The Canvas delivery beat its own volume census, and the reason generalises.** September inbound
read **flat 4 vs inbox 2** — volume favoured flat. It loses: the four flat arrivals (hopper 09-06,
argus 09-07, berthier 09-07, vulcan 09-09) all **post-date** Canvas's 09-04 box announcement, so they
are senders who had not heard. ⇒ ***a volume census measures what SENDERS DID; the box README measures
what the RECIPIENT ASKED FOR, and the recipient wins.***

⭐ **The drop-box was load-bearing three times in one sitting**: Canvas, aDNALabs and Home each held an
**active session lease** at delivery. Astro, the one vault with no box, was quiet — which is the only
reason a flat delivery was safe, and that claim was **re-verified at the send**, not assumed.

⚠ **The `direction:` field cannot split inbound from outbound** — it is the sender's stamp and survives
the copy, so a recipient's directory shows `direction: outbound` for mail it *received*. The `from:`
field can. *A field that travels with a document describes its origin, not its location.*

### 2 · Ledger re-verification — six rows reproduced, three things moved

Recorded at ledger **§5**. `unpushed 0 → 1`; **`coldreads/` is EIGHT files, not six** (8/8
`synthetic: true`, so R2's conclusion survives and its arithmetic did not — *six* was typed inside the
paragraph whose own last line says *"do not quote this, re-derive it"*, and re-deriving is what caught
it); and **P1's post-fold control was wrong**.

⭐⭐ **The control named THREE expected hits and a correct fold produces SIX files.** Derived from the
*current* image rather than the state the change produces ⇒ **run as written it reds on a correct
fold**, and the cheap way to green it is to strike the SO-6 retirement records — deleting the exact
provenance that stops the regression. ***A control derived from an artifact's current state cannot
certify the state the change produces.***
⚠⚠ **And my correction to it was wrong the same way**: I wrote *"the true figure is SEVEN"*, counting a
table with seven **rows**, one of which reads *"0 after P2"*. ⇒ ***I corrected a count by counting***,
inside the paragraph whose rule is *read the hits, do not count them*. It fell only because the control
was **run** rather than predicted.

### 3 · The v8.11 release — ⛩ FIRED

Released **`dea4ab9`** + annotated tag **`v8.11`** (`3dec601..dea4ab9`); local `.adna` synced at
**`81b1220`**, **byte-identical to the released tree**. Ledger `accepted` with its ratification block
written **in the firing commit**.

⭐⭐ **THE FINDING THAT CHANGED THE RELEASE: A FOLD IS NOT A COPY.** `skill_onboarding.md` was about to
be folded dev → image wholesale. Measured first: the **image** carried **four `{{persona}}` placeholder
resolutions the dev graph did not have** (dev **0**, image **4**). The copy would have silently
**REGRESSED the image** and destroyed work that existed only there. ⇒ payload applied **line-scoped**,
and the image's work **back-written to the dev graph** — **step (b.2) run in the direction nobody had
run it.** *v8.10's finding was that a release folding one way is a re-introduction channel; this is the
same defect running the other way, still open, found only because the diff was read before the copy was
made.*

⭐⭐ **`.adna/HOME.md`'s MARKETPLACE LINK IS A 404**, measured. The template node-home is substituted
into **every** bootstrapped node, so the first page a new operator opens had been offering a **dead
destination** for a product that does not exist. ⇒ ***a claim can rot in two independent ways at once,
and checking the one you filed does not check the other.*** `F-w` was filed as a **copy-honesty**
defect, so the link was never in scope. It cost one `curl`, run against the link being **removed** —
not where anyone thinks to look.

⚠ **The two skills differed in KIND and only reading the diff showed it**: `skill_node_bootstrap_interview.md`
was a legitimate whole-file fold (dev genuinely ahead — the 19→18 work *is* the payload);
`skill_onboarding.md` was not. **A payload row naming a *file* invites exactly the copy that loses the
other tree's work.**

### 4 · The deploy tail — 🚀 LIVE

`deploy_record: 2026-09-11T05:28:43Z mode=prod tree=681c814`. Push preceded deploy, each its own ⛩ GO.
Probe **8 PASS / 0 FAIL**.

⭐⭐ **A THIRD PROVENANCE DEFECT, ON THE TRUST PAGE, REPAIRED BEFORE IT SHIPPED.**
`source_commit_date` was `git log -1 --format=%cs` **in the local `.adna` checkout** — the date of the
very commit whose SHA GR-1 O4 withholds from publication because *"a local-only identifier on a public
surface is the whole defect"* — while both pages render it as ***"at release {ref} ({date})"***.
⇒ **GR-1 O4 protected the identifier and not the attribute DERIVED FROM THE SAME OBJECT.** *A
provenance fix scoped to the field that was filed does not look sideways.*
⚠ It was **also** a day out whenever a release lands after 17:00 local (`%cs` renders in the commit's
own zone; every other dated surface here is UTC), so the trust page and the CHANGELOG disagreed about
the date of the same release — **latent on every prior release, visible on this one**, which is the
signature of a timezone bug. Now derived from the release artifact's **own CHANGELOG heading**, and
**red-proven**: exit **1** on a missing heading, **0** clean.
⚠ **And the first red-test reported `exit=0` through a pipe** — `tail`'s status, not node's. Re-run
unpiped: **1**. *A zero that means "the command failed" — the same class, a fourth sighting.*

### 5 · Controls that fired, and what they caught

| Control | Result |
|---|---|
| Canvas migration red-test | **4/4 mutations red at their DECLARED limb** + 3 refusals + idempotence SKIP + green control |
| Its **C5, first form** | ⛔ **FAILED ALL 8 FILES ON A CORRECT TRANSFORM** — matched on marker strings, so `_reserved`'s own inner keys read as "outside the block". *Instrument before subject, thirteenth time.* |
| Fold genericization control | ⛔ **Over-broad** — banned `Home.aDNA`/`Hestia` outright; they are **the standard's own vocabulary** (~40 uses by design). Narrowed to what (b.1) actually forbids: one operator's private measurement + workspace process language. *Fourteenth.* |
| (b.1) scoped to added lines | 0 private paths · 0 bare SHAs · 1 wikilink that resolves · 2 name hits = standard vocabulary |
| `gate-49` | Red **confirmed in-container FIRST**, regenerated, **exactly 2 of 24**; AMENDMENT-1 discriminator applied ⇒ **content**, not the 17/19px noise |
| `gate-30` ×2 | Convention 6's documented case — **fixed by running `inject_redirects`, not by touching the gate** |
| MANIFEST counts | **No change owed, and that was DERIVED**: a naive `find` reads **46** templates against its 45, because `template_node_adna_exemplar` is a **bundle directory**. *The naive count would have "fixed" a correct number.* |
| Changelog schema | `title` **65/70** ✅ · `description` **166/160 ⛔ OVER** on the first try, trimmed to 155. *Both fields measured; the recorded defect is measuring one and assuming its sibling.* |

## SITREP

**Completed** — all six steps. Four memos delivered · ledger re-verified and ratified · the three
ruling-owed edits · **v8.11 released** · **the deploy tail live** · close cascade + the Hestia memo.

**In progress** — nothing.

**Next up** — ⛩ **`P5.1` recruitment**, which is entirely human and now unblocked: five recruited cold
readers (⛔ agents must not recruit) · a fresh macOS account (also discharges `P2.6` O0b — label the
artifact for both) · the operator as outsider, halting **before** submission. `AC-2`/`AC-3` may run
concurrently. ⛔ **Re-derive the panel build stamp before the first panellist** — `681c814` as of this
deploy, and a deploy mid-panel invalidates the panel.

**Blockers** — none agent-side. Everything remaining is an operator act.

**Next Session Prompt** — *`v8.11` is released (`dea4ab9` + tag) and the site is deployed at
`tree=681c814`; the trust page publishes v8.11 provenance and the outbound queue is empty, so there is
no build work queued. **The campaign's remaining backbone is `P5.1`, and it is entirely human** — do not
go looking for an agent-reachable mission. Re-derive at open: `main` CI, `origin/main` at the remote, the
prod stamp from `/.well-known/adna-build.json`, and whether `how/campaigns/campaign_haussmann/evidence/p5_1/`
still does not exist — **the moment it does, a deploy hold is fully engaged**, because `AC-1` pins the panel
stimulus to a recorded build stamp and a deploy mid-panel invalidates a panel needing five recruited humans.
⛔ Agents must not recruit. If asked to help `P5.1`, the agent-side work is transcription and two-scorer
scoring, never recruitment. Owed and undated: `F-ab`(a)'s cause · `F-v` · `sweep/jsonld_census.md`'s missing
instrument · B1's first p75 · `P3.3`'s ⛩ `npm login` (not performable on this node) · and one operator gate
covering babbage's lease question, babbage's two `proposed` upstream findings and Ilmarinen's upstream
filing — `skill_upstream_contribution` needs approval before any of the three can be filed.*
