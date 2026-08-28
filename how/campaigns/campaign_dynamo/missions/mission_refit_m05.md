---
plan_id: mission_refit_m05
type: plan
title: "P5 Refit — post-AAR corrections to the Dynamo compute cohort (15 audit findings)"
owner: stanley
status: completed
claimed_by: session_stanley_20260828_124050_dynamo_p5_refit
claimed_on: 2026-08-28
completed_on: 2026-08-28
campaign_id: campaign_dynamo
campaign_phase: 5
campaign_mission_number: 5
mission_class: refit
executor_tier: opus
token_budget_estimated: "120k-200k (content-load units) — 9 acts across 9 repos, mostly mechanical edits + memo craft; decisions pre-ruled"
created: 2026-08-27
updated: 2026-08-28
last_edited_by: agent_rosetta
tags: [plan, campaign, dynamo, refit, audit, p5]
---

# Mission: P5 Refit — Dynamo cohort corrections

**Campaign**: [[../campaign_dynamo|campaign_dynamo]] · **Phase**: 5 · **Authored** 2026-08-27 from
a fresh-eyes adversarial audit of the 2026-08-26 seeding; **pre-authored for a successor session**
(claim by flipping `status: planned → in_progress` and opening a session file — Act 0.1 is already
done for you in that sense). The full act-by-act spec also lives at the operator's plan file
(`~/.claude/plans/operation-dynamo-mighty-shamir.md`); **this file is self-contained** — execute
from here alone.

## Operator rulings already taken (2026-08-27 plan review — do NOT re-ask)

1. Router prose: **update** — Dynamo as a named *sibling* cohort with the **no-composer-claim
   qualifier explicit** (never append members to the Keystone sentence — it carries a
   Lighthouse-composer property that is false for Dynamo per Gate-1 rider R3).
2. Hardware de-templating: **cheap-now + M04** — this mission rewrites root `AGENTS.md` +
   `CHANGELOG.md` only, and authors `mission_detemplate_m04.md` for the rest.
3. Delivery of the Pandora and Operations memos is **sanctioned** (both publish open drop-boxes).

## Findings register (audit 2026-08-27; fix-act in the last column)

| # | Sev | Finding | Act |
|---|-----|---------|-----|
| 1 | HIGH | 4 vaults unregistered in `Home.aDNA/what/inventory/inventory_vaults.yaml` (header says 77; next health check flags 4 disk-extra drift rows) | 2 |
| 2 | HIGH | All 11 federation wrappers use retired schema keys (`path:` · `pin: genesis` · `version_policy: minor`; missing `version:`/`description:`) — the M-A2 drift class; blocks `build_federation_edges.py` derivation | 1 |
| 3 | HIGH | `Hardware.aDNA` root docs assert aDNA-standard identity (template `AGENTS.md`/`CHANGELOG.md`/`HOME.md`/`what/ontology.md`/`adna.md`; `{{placeholders}}` live) | 7 |
| 4 | MED | Ray M2 targets Home's *guarded* `who/coordination/` + "lease-checked" — her open `inbox/` drop-box is the correct lane (README: "no probe, no wait, no ask") | 4 |
| 5 | MED | Operations (ADR-018 owner) never notified `Ray.aDNA` exists; their `who/coordination/inbox/` is open | 3 |
| 6 | MED | Ray `data_bearing: flagged_pending_p0` = truthy string in a boolean registry field; Inference precedent = `false` + ⚠ comment | 4 |
| 7 | MED | `campaign_dynamo.md` still says "Gate 2 + P4 = the live edge"; both fired 2026-08-26 | 5 |
| 8 | MED | Pandora courtesy memo held `staged` against a drop-box she opened 2026-08-20 (`Container.aDNA/who/coordination/inbox/`) | 3 |
| 9 | MED | No gitleaks pre-push hook in the 4 new repos (fleet canonical sha256 `0ee689ecfaa08c4168b21fa970147db25b12a8ee4ca42072a20796b64da649fe`); register at 94 repos now stale; Ray/K8s/Argo lack `.gitignore` | 6 |
| 10 | MED | `aDNALabs.aDNA/STATE.md` Dynamo bullet overstates "Galileo seam ratified" — correct form: operator-ratified as-asserted, ack invited at Ray P0 | 8 |
| 11 | LOW | Manifest still titled "(DRAFT)" / roster "(proposed)" after both gates; provenance line unlinked | 5 |
| 12 | LOW | Router prose Keystone-only (ruled: update with qualifier) | 8 |
| 13 | LOW/MED | Ray M00 fresh-context failures: `12-row self-check` · `DP-16` · `P-3` · `SO-9` unresolvable; `exxact3.lattice.yaml` unpathed. (Kubernetes M00 passes.) | 4 |
| 14 | LOW | Hardware `.obsidian/community-plugins.json` names 14 uninstalled plugins (Caddy/Bitwarden ran setup) | →M04 |
| 15 | LOW | Manifest "four wrappers" sentence contradicts its own audit table (Hardware `feedback/` deferral); no `who/coordination/inbox/` in any new graph though Ray expects inbound mail | 4·5 |

**Verified clean — do not touch**: wrapper `path:` *values* (4-up resolution correct) · all
authored wikilinks/path-cites in the 4 graphs · git hygiene (2 commits each, no remotes) ·
Galileo + Venus memos delivered & receipted · Kubernetes M00 fresh-context · persona clearances ·
router cohort row (`e751c12`).

## Acts (execute in order; Act 1 before Act 2)

### Act 0 — Open + intake Venus's two replies
Open session file (Tier 1) in `how/sessions/active/`; flip this mission `in_progress`. Then
intake the two **untracked** Venus memos in `aDNA.aDNA/who/coordination/`:
- `coord_2026_08_27_venus_to_rosetta_lsu_l2_ruled_from_the_node_and_your_report_was_one_string_wide.md`
  — she probed lsu_l2 read-only over the mesh: STATE.md:32 CORRECT; MANIFEST.md:84 corrected with
  provenance; **narrowed**: MANIFEST:20 was *not* false ("64 CPU" = lscpu CPU(s); 1024/1007 =
  advertised-vs-usable). Fold honestly into the Dynamo manifest target block 2+3 (mark the
  contradiction CLOSED, her narrowing stated) and into
  `Hardware.aDNA/what/context/node_hardware/context_evidence_base_20260826.md` (dated note, never
  silent).
- `coord_2026_08_27_venus_to_rosetta_adr022_opened_a_tier_the_vocabulary_cannot_name.md` — read
  fully; likely bears on Hardware's machine-class enum (ADR-022 = R&D-node identity). Add an
  `intake_disposition:` frontmatter field; if vocabulary-relevant, add an "## Inbound" pointer in
  `Hardware.aDNA/how/campaigns/campaign_hardware_genesis/missions/mission_ontology_v0_m01.md`;
  else record-and-leave.
- `git add` both (commit-is-receipt).

### Act 1 — Wrapper schema migration (11 files)
Exemplar: read `Container.aDNA/how/federation/{git,feedback,iii}/CLAUDE.md` and mirror its
key-set precisely. Per wrapper in Ray/Hardware/Kubernetes/Argo `how/federation/*/CLAUDE.md`:
`path:` → `source_path:` (same value) · add `version: null` + one-line `description:` ·
`version_policy: minor` → `version_policy: commit_pin  # no version series to bump against yet (F-C11a)` ·
`pin: genesis` → `pinned_at_commit: "<broker HEAD>"` (read live:
`git -C ~/aDNA/Git.aDNA rev-parse --short HEAD`, ditto `III.aDNA`, `aDNA.aDNA`) · keep
wrapper-specific keys the exemplar keeps. One commit per graph.

### Act 2 — Home registration memo (never edit her files)
`Home.aDNA/who/coordination/inbox/coord_2026_08_27_rosetta_to_hestia_dynamo_cohort_registration.md`
— four staged rows in the **Container precedent format** (copy field-set from
`inventory_vaults.yaml`'s Container entry; note `federation_edges` is derived — she regenerates);
all four `data_bearing: false` (Ray per Act 4). Asks: `skill_inventory_refresh` · re-stamp
`vault_count 77→81` + STATE counts · add 4 rows to `inventory_gitleaks_hook_conformance.yaml`
(canonical sha above). Report (not adjudicate): disk shows 85 top-level `*.aDNA`; non-Dynamo
deltas = `operations_jake`, `operations_stanley`, `Archive` (policy-excluded). Commit in Home
(receipt).

### Act 3 — Two owed memos
1. **Pandora**: deliver the staged memo's content →
   `Container.aDNA/who/coordination/inbox/coord_2026_08_27_rosetta_to_pandora_kubernetes_stub_beside_your_boundary.md`
   (drop the staging preamble). Flip the sender copy
   (`aDNA.aDNA/who/coordination/coord_2026_08_26_dynamo_kubernetes_stub_to_pandora_staged.md`)
   `status: staged → delivered` + delivery pointer (Venus F-S394-01: send-state stamped in the
   same act as the send). Commit both repos.
2. **Operations**:
   `Operations.aDNA/who/coordination/inbox/coord_2026_08_27_rosetta_to_berthier_ray_graph_seeded_under_adr018.md`
   — Ray.aDNA exists (Gate 1 §DP-5); slots under ADR-018 as the executor software brick; **lane
   table untouched, arbitration stays Operations'**; Ray M2 takes coordinating ownership of the
   `LATLAB_RAY_BEARER_TOKEN` ceremony (their C9/M33 thread — one debt, one owner); Ray M3 will
   scope the F-P12-03 intake; nothing asked of their lanes. Commit (receipt).

### Act 4 — Ray fixes (one commit in Ray.aDNA) + inboxes in all four
1. F6: CLAUDE/MANIFEST/STATE frontmatter →
   `data_bearing: false   # ⚠ FLAGGED not ruled (Inference precedent): persisted job/model volume §8 class due at P0 — Dynamo Gate 1`.
2. F4: `mission_seam_and_token_m02.md` step 2 → `Home.aDNA/who/coordination/inbox/`, no lease
   check (the box abolishes it), filename `coord_<date>_helios_to_hestia_<subject>.md`.
3. F13 in `mission_charter_m00.md`: "12-row self-check" → "verified row-by-row against the Dynamo
   manifest conformance table (`aDNA.aDNA/how/campaigns/campaign_dynamo/artifacts/dynamo_cohort_manifest.md`)";
   DP-16 → add "(Inference's split-classification ruling, Keystone cohort manifest §DP-16 — a
   control-plane label hid a persisting surface for four months because the label stopped anyone
   looking)"; P-3 → cite `aDNA.aDNA/what/patterns/pattern_software_element_context_graph.md`;
   SO-9 → "(the 5-line AAR: Worked/Didn't/Finding/Change/Follow-up)"; `exxact3.lattice.yaml` →
   full path `Jupyter.aDNA/what/lab/deploy/l2-seed/exxact3.lattice.yaml` (duplicates under
   `adna-lab-*` worktrees; the Jupyter path is canonical).
4. F15b: `who/coordination/inbox/` + README in **all four graphs** — base =
   `Container.aDNA/who/coordination/inbox/README.md`, adapt names; frontmatter MUST carry
   `type: convention` + `status: open` (Venus's `--probe` discriminator requires both). Commit
   per graph (fold into each graph's refit commit).

### Act 5 — Campaign-record truth (one commit in aDNA.aDNA)
F7: `campaign_dynamo.md` phase block → "Gate 2 ✅ · P4 ✅ (router `e751c12` · HQ `b527a37` ·
AAR) · **P5 refit = the live edge**". F11: manifest title drops "(DRAFT)"; roster header →
"(ratified — ⛩ Gate 1, 2026-08-26)"; column → "Disposition (ratified)"; provenance line links
`[[../campaign_dynamo|campaign_dynamo]]`. F15a: seeding-conditions sentence += "(three where
`feedback/` is deferred-by-design — see the conformance audit table)". Plus the Act 0 lsu_l2
closure fold + a dated refit note (Keystone dated-refresh pattern).

### Act 6 — gitleaks + .gitignore
Verify `shasum -a 256 aDNA.aDNA/how/standard/hooks/pre-push-secret-scan.sh` == the canonical sha
(mismatch ⇒ STOP, re-find canonical via the conformance register's `canonical_copy:`). Copy
byte-identical → each `<Graph>.aDNA/.git/hooks/pre-push`, `chmod +x`. Copy
`Hardware.aDNA/.gitignore` → Ray/Kubernetes/Argo. STATE intake line per graph.

### Act 7 — Hardware cheap-now + author M04
1. Rewrite root `AGENTS.md` as a Hardware-specific router (~60 lines; identity + boundary pointer
   + triad map with template-inherited context libs flagged "M04 adjudicates" + campaign pointer;
   no dangling README refs).
2. Replace `CHANGELOG.md` (genesis 2026-08-26 + refit 2026-08-27 entries).
3. Author `campaign_hardware_genesis/missions/mission_detemplate_m04.md` (executor_tier: sonnet;
   execution-ready) with the full debris inventory: `HOME.md` placeholders · `adna.md` ·
   `what/ontology.md` · `CONTRIBUTING.md` dangling README ref · template context libraries
   (`adna_core`/`lattice_basics`/`claude_code`/`object_standards`/`prompt_engineering`)
   keep-vs-park decision · 4 skills with `{{placeholders}}` · `what/docs/` examples · Obsidian
   `setup.sh` run-or-trim (F14). Discipline: SO-6 — park/re-scope, never silent-delete. Exit
   gate: zero files asserting aDNA-standard identity; `grep -rl '{{' --include='*.md'` clean
   outside `how/templates/`. Update campaign master table with the M04 row.

### Act 8 — HQ + router (own hunks only, lease-check both)
1. F10 `aDNALabs.aDNA/STATE.md` Dynamo bullet: "Galileo seam ratified" → "Galileo seam
   operator-ratified as-asserted; his ack invited, due at Ray P0". Commit.
2. F12 `Home.aDNA/what/inventory/workspace_router_CLAUDE.md` (root-CLAUDE symlink target; another
   lane's uncommitted WorldGenome hunk may be present — **stage only your own hunks**, `git apply
   --cached` a split patch if needed): (a) SDG-subtype paragraph += "Sibling cohort: **Operation
   Dynamo compute cohort** — `Ray` (Helios) · `Hardware` (Babbage) · `Kubernetes` (Palinurus) ·
   `Argo` (Jason), **no composer claim** (Gate-1 rider R3 — compute composition remains
   `Jupyter.aDNA`'s and `Operations.aDNA`'s live business); roster:
   `aDNA.aDNA/how/campaigns/campaign_dynamo/artifacts/dynamo_cohort_manifest.md`."
   (b) Software-Element paragraph: "the Operation Keystone cohort" → "the Keystone and Dynamo
   cohorts". Commit.

### Act 9 — Close
Refit addendum on `../aar_operation_dynamo_20260826.md` (findings count · fixed/delegated/
reported split · Venus's same-sitting answer · one explicit line on the P4 back-stamp: artifacts
authored 08-27 morning, stamped to the 08-26 sitting). Close this mission (`completed` + 5-line
AAR). Session → history. Commit sweep across the 9 touched repos (each only its own files).
Update agent memory (`~/.claude/projects/-Users-stanley-aDNA/memory/` — project_operation_dynamo
note + MEMORY.md line). Final SITREP: per-finding disposition table + "▶ Next mission → the four
M00s · executor_tier fable → `/model fable`".

## Verification (run at close)

1. `for g in Ray Hardware Kubernetes Argo; do grep -rl "pin: genesis\|^  path:" ~/aDNA/$g.aDNA/how/federation/ ; done` → empty.
2. `grep -rn "flagged_pending_p0" ~/aDNA/Ray.aDNA` → empty; manifest title carries no "DRAFT".
3. Ray M00's five refs now resolve (grep in-vault + cited paths exist).
4. Three new memos tracked+committed in Home/Container/Operations; Pandora sender copy `status: delivered`.
5. `for g in Ray Hardware Kubernetes Argo; do shasum -a 256 ~/aDNA/$g.aDNA/.git/hooks/pre-push; done` → 4× `0ee689ec…49fe`; `.gitignore` present ×4.
6. `git status --porcelain` clean in all 9 repos (other lanes' pre-existing untracked files excepted).
7. `head -5 ~/aDNA/Hardware.aDNA/AGENTS.md` names Hardware; `mission_detemplate_m04.md` passes a fresh-context read.

---

## Close — 2026-08-28

**All 9 acts executed.** Verification suite run at close (results in the session record). 12 findings
fixed, 2 delegated to an execution-ready mission, 1 reported-not-adjudicated. Full disposition table
and the honest account of what this mission's own spec got wrong: the **P5 addendum** on
[[../aar_operation_dynamo_20260826|aar_operation_dynamo_20260826.md]].

### Deviations from this file, and their basis

1. **Act 1 applied per wrapper kind, not blanket** (operator-ruled at the plan gate, 2026-08-28).
   This file directed a blanket `version: null` + `version_policy: commit_pin` *and* directed that
   Container's exemplar be mirrored precisely — but that exemplar only uses `commit_pin` for `git`.
   Blanket application would have **de-pinned III from its live v0.6.0 series**: fresh drift wearing
   the costume of a fix. `iii` wrappers pin `0.6.0` @ `be7dba1` (the **tag** commit, not III's HEAD,
   so the pin matches the version it declares); `feedback` pins spec `0.1.0`.
2. **Act 0's ADR-022 prediction was wrong** (operator-ruled, same gate). The memo bears on the
   standard's `MEMBERSHIP_*` vocabulary, not Hardware's machine-class enum — so this file's own
   `else` branch (record-and-leave) applied, and no Hardware pointer was added. Its
   `ack_required: true` went undischarged by this spec; an ack was sent and the substance filed at
   `how/backlog/idea_upstream_membership_vocabulary_pre_admission_tier.md` rather than ruled from a
   corrections lane.
3. **Memos carry 2026-08-28, not this file's pre-authored `coord_2026_08_27_*` filenames.** This
   mission was authored 08-27 for a successor session; that session opened 08-28. Back-stamping
   today's memos to yesterday would have repeated the exact defect Act 9 requires be confessed about
   the P4 artifacts.
4. **Act 6 was executed before Act 2's commit.** The Act 2 memo asserts the gitleaks hooks are
   installed; delivering that claim before installing them would have made it false on arrival.
5. **F3's skill count corrected 4 → 5** by counting; **F2's "blocks derivation" corrected** by
   reading the deriver (it resolves on `source_vault`; the real defect was stamping `"genesis"` into
   11 edges as if it were a commit).

### 5-line AAR (SO-9)

- **Worked** — Pre-recorded rulings meant zero re-litigation across 9 acts and 10 repos. Scripting
  the 11-wrapper migration and the 4 drop-box READMEs kept them byte-consistent.
- **Didn't** — This file's Act 1 contradicted itself and its Act 0 mispredicted a memo's subject;
  both were caught only because the exemplar and the memo were read at the object before editing.
  A pre-authored mission is a hypothesis about files, not a description of them.
- **Finding** — Every HIGH and most MEDs were **wrong descriptions of correct operations**. Nothing
  was broken; a truthy string in a boolean field, a one-party "ratified", a stale "live edge", and a
  vault titled as the standard all *work* — and all get cited. Descriptions rot silently because
  nothing fails when they do.
- **Change** — Verify a schema migration by reading its **consumer**, not by grepping that the old
  key is gone. Check the addressee's drop-box at send time, not at staging time.
- **Follow-up** — Hestia's registration + 4 gitleaks-register rows · Hardware M04 (sonnet) ·
  the membership-vocabulary backlog item · the four M00s (fable) · operator close-ruling on Dynamo.
