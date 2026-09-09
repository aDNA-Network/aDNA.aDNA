---
type: session
created: 2026-09-09
updated: 2026-09-09
last_edited_by: agent_rosetta
tags: [session, haussmann, owed_queue, r4_license, c4_marketplace, template_release]
session_id: session_stanley_20260909_145206_haussmann_owed_queue
user: stanley
started: 2026-09-09T21:52:06Z
status: completed
campaign: campaign_haussmann
executor_tier: opus
token_budget_estimated: "~60–110 kT — four owed-queue items, none touching `site/`: the R4/LICENSE repair (a skill + two MANIFEST frontmatter fields + a reply memo), C4's strike from the interview skill, the R3 → Hopper memo, and the `researchers` disposition (a finding + a register row, not a build). Excludes the push and the two sends, which are acts and not authoring. ⛔ Excludes any `site/` work — the deploy hold makes it unshippable and therefore not worth spending on."
intent: "Work four items of HAUSSMANN's owed queue under the live P5.1 deploy hold: Hopper's R4/LICENSE ask, C4's marketplace question, the R3 reply, and the `researchers` template-class disposition. Grant-scoped: ⛩ push GO + ⛩ two errata sends. ⛔ NO deploy."
files_modified: [how/skills/skill_project_fork.md, how/skills/skill_node_bootstrap_interview.md, how/skills/skill_onboarding.md, how/skills/skill_obsidian_integration_test.md, how/skills/skill_obsidian_agent_inspect.md, MANIFEST.md, STATE.md, how/campaigns/campaign_haussmann/evidence/claims/claim_register.md, who/coordination/coord_2026_09_09_rosetta_to_venus_erratum_the_fix_reached_the_image_not_the_source.md, who/coordination/coord_2026_09_09_rosetta_to_hestia_erratum_the_fix_reached_the_image_not_the_source.md]
files_created: [who/coordination/coord_2026_09_09_rosetta_to_hopper_r4_repaired_and_your_diagnosis_corrected_plus_r3.md]
completed: 2026-09-09
token_budget_actual: "~95 kT — inside the declared ~60–110 kT band. The overrun risk that did NOT materialise was the marketplace sweep; the one that did was `F-ad`, unbudgeted because C5 was not known to exist when the band was set. ⭐ It paid for itself: it corrected the diagnosis the whole R4 repair rests on, and a Step 1.5 built to the original brief would have added a second prompt beside a prompt that already existed."
---

## Derived at open (conventions 16 + 19 — the two facts this campaign requires before trusting anything)

| Fact | Value | How |
|---|---|---|
| `main` CI | **green** `[D]` — at **`7956b97`**, the last **pushed** commit. **HEAD `c5ff7da` is 1 ahead and CI-unverified.** The green has a **width**. | `gh run list --workflow=gates.yml --branch main -L 5` |
| Alias build stamp | **`a2ad53b`** · built `2026-09-08T03:37:24.044Z` · `mode: prod` · `/` → **200** `[D]` | `curl https://adna.network/.well-known/adna-build.json` |
| Prod vs HEAD | prod is **3 commits behind** HEAD ⇒ five increments of new public copy remain **unseen**, and stay unseen for the panel's duration | derived |
| Peer lease | none — `how/sessions/active/` held only `.gitkeep` | `ls -la` |

⛔ **`P5.1`'s panel stamp re-derives correctly at `a2ad53b`.** It was carried in STATE as a figure true
when written; this is the re-assertion `AC-1` requires (convention 16). Record it on every panellist
artifact.

## ⛩ Gates as ruled (2026-09-09 plan gate)

**GRANTED** — the **push** of `c5ff7da` + this sitting's work; the **send** of the two errata
(→ Venus, → Hestia).
**NOT GRANTED** — the Berthier dropbox-ack send.
⛔ **NO `deploy_adna.sh prod` from any checkout** while the `P5.1` panel runs.

⚠ **Recorded because the ruling would otherwise imply something untrue:** the Berthier ack has been
**on the public origin since `31b8b53`** `[D]`, weeks ago. Withholding its send GO withholds
**delivery**, not **publication** — convention 20's own consequence clause, live on this queue.
It stays undelivered as ruled; it is **not thereby confidential**, and its 19-day clock keeps running.

---

## ⛔⛔ CORRECTION TAKEN BEFORE THE FIRST EDIT — the approved plan's build step violated Standing Rule 1

The plan said to author the R4 repair **into both trees**, including `.adna/`. **That is wrong on the
`.adna/` half, for two independent reasons, and the check that caught it cost one grep.**

1. **Workspace Standing Rule 1** — `.adna/` is never modified directly. `skill_template_release`
   names operator-local `.adna/` edits explicitly as *"violates Workspace Standing Rule 1"*
   (`:222`).
2. **It would not survive anyway.** Step (e) syncs the node's `.adna/` from the release tree with
   `rsync -a --delete` (`:180`). A hand edit is clobbered at the next release, silently.

⇒ **Authoring happens in the dev graph only.** The `.adna/` half is a **staged release delta**, and
it lands at the next gate-fired release, not here.

### ⚠ And a false alarm I nearly raised, corrected at the object

My first reading was that the image's 26 extra lines in `skill_project_fork.md` — the R1–R7
fork-cleanup block, ADR-009 name validation, the orphan-plugin lint, the ADR-042 persona token —
were **scheduled for deletion** by the next release's `rsync --delete`. **They are not.** Step (b)'s
baseline is *"the **current released tree** (fresh clone, step c) and apply the ratified deltas —
never reconstruct from scratch"* (`:82`). The released tree is the **accumulating** artifact; the
release does not rebuild `.adna/` from the dev graph. Those lines persist.

⭐ **This is the campaign's own convention 16 catching me in the act**: I had a claim about what an
instrument does, it was plausible, it was alarming, and it was **read off the wrong step**. Had I
written it into a memo to Hopper it would have been the fourth wrong instrument-claim this desk
shipped in a month. **The check was reading step (b) instead of step (e).**

### What the finding actually is, stated correctly

**`skill_project_fork.md` differs between the dev graph (234 lines) and the image (260)** `[D]`, and
the difference is **not symmetric drift** — it is **legacy image-only content that never entered the
dev graph**, from before step (b.2) existed. Step (b) *declares* the dev graph the source of truth;
step (b.2) *makes that true* — but only for the **payload paths of the release it runs in**.
`skill_project_fork.md` has not been a payload, so **(b.2) has never looked at it**, and the drift
persists indefinitely and invisibly.

⇒ **The live consequence for this sitting's work, and it is the one that matters:**
**forks run `.adna/`, not the dev graph.** A license prompt authored only in the dev graph reaches
**no fork** until some future release carries that path. That is **`F-w` inverted** — `F-w` was *the
fix reached the image and not the source*; this is *the fix reaches the source and not the image*.

⭐ **The mechanism to close it already exists and needs nothing built** (conventions 15–20, sixth
ruling): make the R4 repair a **payload item** of the next release. Step (b.2)'s `diff` is a **hard
gate** — *"must be empty, modulo deliberate image-only deltas … Silence is not a reason"* — so the
26 legacy lines **will block that release** until they are dispositioned by the operator, at a gate,
with the diff on the table. **The ratified instrument does the work; we only have to route the item
into its path.**

---

## Activity Log

- 14:52 — Session started. Derived-at-open facts recorded above (CI width + alias stamp + no peer lease).
- 14:52 — Standing Rule 1 correction taken **before the first edit**; `.adna/` removed from the build scope.
- 14:52 — False alarm about `rsync --delete` destroying the image's fork-cleanup block **corrected at the object** before it reached any memo.

## SITREP

**Completed**:
1. **R4's missing half built** (`skill_project_fork.md`, dev graph) — Step 1.5 reads the node default then asks; Step 4 writes `license:`; Step 4.6 gates on the field's existence. **Red-proven 3/3**, three states distinguishable. `license: MIT` added to our own `MANIFEST.md` (SO-8 — we mandated a field we lacked).
2. **`F-ad` minted, correcting Hopper's diagnosis** — C5 already asks and names this skill as its consumer; the consumer never consumed, fleet-wide.
3. **C4 struck + the marketplace class swept** — C4 retired with its retirement recorded in-file, C5→C4 renumbered, counts **19 → 18** across 13 sites incl. the machine-readable `question_count:`. Obsidian O6 example struck + `warn_only` default put **on notice** (not tightened — unmeasured cross-vault blast radius). `agent_inspect` sample transcript degenericized. **Eighth marketplace site found and fixed**: `skill_onboarding`'s `### Step 9: Marketplace Teaser` heading.
4. **`F-ac` minted** — `skill_project_fork.md` 234 vs 260 lines; routed as a release payload item so (b.2)'s hard gate forces the disposition at a gate. **Nothing built.**
5. **`F-ae` minted and the `researchers` site-finding WITHDRAWN** — `/researchers` 301s live; the census read surfaces that cannot contain a redirect.
6. **Hopper reply authored** (`outbound_ready`) carrying R4 + the corrected diagnosis + R3's two false premises.
7. **Both granted-to-send errata amended before send** — each had gone false the same day.
8. **Claim register §25** appended; counts re-derived **after** the write, 189/174 unchanged.

**In progress**: none.

**Next up**: ⛩ send GO for the Hopper memo · ⛩ Berthier dropbox ack (now 20 days) · ⛩ Venus's three tier-vocabulary asks (unruled 14 days) · ⛩ Babbage's two `proposed` upstream findings · route the R4 repair into the next release as a payload item (`F-ac`) · **`P5.1` recruitment — human only**.

**Blockers**: ⛔ **Deploy hold live** (`P5.1` panel) — everything built here is dev-graph-only and unshippable by design, so the hold blocks nothing in this sitting. ⛔ **`P5.1` needs five recruited humans; agents must not recruit.**

**Files touched**: `how/skills/skill_project_fork.md` · `how/skills/skill_node_bootstrap_interview.md` · `how/skills/skill_onboarding.md` · `how/skills/skill_obsidian_integration_test.md` · `how/skills/skill_obsidian_agent_inspect.md` · `MANIFEST.md` · `STATE.md` · `how/campaigns/campaign_haussmann/evidence/claims/claim_register.md` · `who/coordination/coord_2026_09_09_rosetta_to_hopper_r4_repaired_and_your_diagnosis_corrected_plus_r3.md` (new) · `who/coordination/coord_2026_09_09_rosetta_to_{venus,hestia}_erratum_*.md` (amended) · this file.

## Verification (run AFTER the record edits — which is where it counts)

| Check | Result |
|---|---|
| `npx astro build` | **229 pages** ✅ |
| `node scripts/inject_redirects.mjs .` | **42/42** ✅ |
| `npm run test:gates:fast` | **580 passed · 1 skipped · 0 failed** ✅ |
| `gate-41-derived-counts` (run explicitly) | **4/4** ✅ — ⚠ **it is NOT in the fast lane**; the register edit would not have been covered by the fast run alone |
| `npm run check:markup` | **clean, exit 0** ✅ (⚠ never `npm run html-validate` — no such script; exits 1 with zero output, which reads exactly like clean) |
| Counts re-derived | skills **57** = 57 CLAUDE.md rows · templates **45** · topics **5** · subtopics **27** — **zero drift, the correct outcome** (no skill/template/context file added) |
| Register counts, re-derived **after** §25 | **189 rows / 174 ids**, unchanged — proves §25's three evidence tables minted no phantom claim row |

## Next Session Prompt

You are Rosetta in `aDNA.aDNA`, continuing **Operation HAUSSMANN**. **`P5.1` is the critical path and is entirely human** — five recruited cold readers (`AC-1`), a recruited **non-builder** for `AC-2` (which also discharges `P2.6` O0b), and the operator-as-outsider for `AC-3`; no ordering between them; **agents must not recruit**. ⛔ **A production deploy hold is LIVE for the panel's duration** — no `deploy_adna.sh prod` from any checkout. **Re-derive the alias build stamp before trusting any figure** (`curl https://adna.network/.well-known/adna-build.json`; it was `a2ad53b` on 2026-09-09) and **derive `main`'s CI at open** (`gh run list --workflow=gates.yml --branch main -L 5`), remembering the green has a **width** — it covers the last *pushed* commit, not necessarily HEAD.

The 2026-09-09 third sitting closed four owed-queue items; read `STATE.md`'s top `⏭ QUEUED` block and claim-register **§25** first. **The single most useful thing to carry forward is `F-ac`: everything built that sitting is DEV-GRAPH ONLY and reaches no fork until the next gate-fired `skill_template_release`**, because forks run `.adna/` and `.adna/` is never edited directly (Standing Rule 1). The R4 license repair is **routed as a payload item** precisely so step (b.2)'s hard `diff` gate puts the 26-line dev/image delta in front of the operator at a release gate — do not reconcile it inline.

Agent-reachable and unqueued: nothing large. Awaiting ⛩ GOs: the **Hopper memo** send · the **Berthier dropbox ack** (20 days; note it is already on the public origin, so the hold is on delivery, not publication). Awaiting operator **rulings**: Venus's three tier-vocabulary asks (14 days) and Babbage's two `proposed` upstream findings. ⚠ **ADR-056 clause 5 is not a decision** — it waits on an unscheduled npm credential and should leave the gate queue for the broker. ✅ **0 ADRs `proposed`.**

⚠ **Two habits this sitting paid for twice each.** (1) **Re-read an outbound memo's pins AT the send, not at authoring** — both errata had gone false within hours, and one of them was itself an erratum about a fix asserted before it landed. (2) **Name the surface, and check it can contain the answer** — the `researchers` alarm died because an absence was asserted over `src/pages/` and `dist/`, neither of which can hold a 301. And note the shape that keeps recurring: **twice now a wind-down has declared the campaign agent-empty and been wrong**, both times because the remaining work was real and simply not in any index.
