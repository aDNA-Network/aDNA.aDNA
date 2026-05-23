---
type: design_spec
artifact_type: design_spec
spec_class: proposed_patch
mission_id: mission_adna_str_p3_m33_obsidian_stabilization_ux_and_tests
campaign: campaign_adna_serious_tool_readiness
phase: 3
mission_number: 3.3
obj: 3
track: T5
finding_id: [F-O1-1, F-S2-4]
status: proposed   # design at P3; ratification + landing deferred to v8 P6
upstream_target: ".adna/ (LatticeProtocol/aDNA@27e6395)"
upstream_state_at_authoring: "v7.0 frozen at 27e6395 (post-M06 S2 pre-tag commit); post-M3.2-close addendum at 5861133 operator-override NOT precedent"
created: 2026-05-23
updated: 2026-05-23
last_edited_by: agent_stanley
tags: [design_spec, proposed_patch, m3_3, obj_3, t5, first_open_ux, onboarding, project_fork, url_scheme_lazy_registration, workspace_clobber_chain, v8_p6_propagation_queue, four_way_step_5_composability, six_section_structure_4th_canonical_instance, rosetta, standing_order_8_15th_tactical_invocation_candidate]
---

# T5 Design Spec — First-open UX standardization (`skill_onboarding.md` "First open" section + `skill_project_fork.md` post-fork message)

> **What this is**: a proposed-patch artifact for two upstream skills — `.adna/how/skills/skill_onboarding.md` (NEW "First open" section for the standalone-project case, between current Step 4 "Deployment Diversity" and Step 5 "Discovery Conversation") and `.adna/how/skills/skill_project_fork.md` (NEW first-open warning bullet block within Step 5 "Offer Immediate Onboarding"). The fix closes a **two-hazard cascade** that consumes the operator's first 5 minutes with a forked vault: (1) **setup.sh-ordering pitfall** — operator opens vault in Obsidian before running `./setup.sh`, triggering the workspace-clobber chain documented in F-S2-4 (NN tab fails to instantiate → Obsidian compacts the layout → saves the compacted `workspace.json` → curated NN-pinned layout is GONE within seconds); (2) **URL-scheme silent-failure** — operator pastes an `obsidian://open?vault=...` URL into a browser address bar but the vault is not yet in Obsidian's vault registry, so the URL scheme fails silently (no error toast; nothing opens) and the operator concludes "URLs don't work" without realizing the canonical first-open path is File → Open Vault.
>
> **Design-at-P3, propagation-at-P6**: this spec ships as an `aDNA.aDNA`-resident artifact under `missions/artifacts/`; v8 P6 owns the upstream cycle that lands the patches on `LatticeProtocol/aDNA`. The 2 patches are additive-text-only and may land as a single bundled commit OR as separate commits (v8 P6 operator decision; §6 propagation contract enumerates both paths).
>
> **Hard constraint**: this spec does NOT mutate any file under `/Users/stanley/lattice/.adna/`. All patch text is literal diff content for v8 P6 to apply.
>
> **Standing Order #8 self-reference** — 15th tactical invocation candidate in v8 (after 14 prior in P2+M3.1+M3.2): this spec lives at `how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/` — a directory whose `AGENTS.md` was top-12 hardened at M2.4.5. The patch text documents the FIRST OPEN of a forked vault — the moment when the operator most relies on the discoverability layer that M2.4.5 sharpened. Formal Q2 SQL re-measurement at M3.x ≥ 20-session corpus per `m245_obj3_measurement_contract.md` §6.

## 1. Finding statement (F-O1-1 + F-S2-4)

Two independent hazards converge in the operator's first 5 minutes with a freshly-forked aDNA vault:

> **F-O1-1 (URL-scheme lazy registration)**: `obsidian://open?vault=<name>` URL scheme requires the vault to have been opened at least once via Obsidian's File → Open Vault dialog before the URL handler can resolve it. The first-open attempt via URL scheme fails SILENTLY — no error toast, no browser-level warning. Operators reading partner-vault README files with `obsidian://...` links experience this as "Obsidian URLs don't work" with no recovery hint.
>
> — [[../../../campaign_lattice_workspace_ux/missions/artifacts/mlwx_03_obj2_outer_vault_test_results.md|mlwx_03_obj2_outer_vault_test_results.md]] §Operator-side O1 results (2026-05-13; M-LWX-03 S2 surfaced; symptom: operator's "Attempt 1 (URL scheme `obsidian://open?vault=node.aDNA`) FAILED expectedly — vault not in registry; Attempt 2 (File → Open Vault) PASSED")

> **F-S2-4 (setup.sh-ordering / workspace-clobber chain)**: when operator opens a fresh fork in Obsidian BEFORE running `./setup.sh`, Obsidian saves a stripped `workspace.json` that overwrites the M-LWX-02-shipped layout. Within seconds of open, the intended NN-pinned-first-left-pane layout is GONE. Root cause: NN plugin not loaded (binaries absent → community-plugins.json enables what doesn't exist) → NN tab fails to instantiate → Obsidian compacts the layout removing the NN tab → save-on-shutdown writes the compacted `workspace.json`.
>
> — [[../../../../how/backlog/backlog_F_S2_4_obsidian_workspace_clobber.md|backlog_F_S2_4_obsidian_workspace_clobber.md]] §Summary (2026-05-13; M-LWX-03 S2 surfaced; verified by `grep -c notebook-navigator workspace.json` returning 0 vs `workspace.default.json` returning 3)

**Verification status at M3.1 S1 recon (2026-05-21T02:34Z; inherited by M3.2 + M3.3 per M3.3 mission spec §Current State)**: confirmed via static analysis of `.adna/how/skills/skill_onboarding.md:1-265` + `.adna/how/skills/skill_project_fork.md:1-180`. Neither skill currently warns the operator about either hazard. Step 5 of `skill_project_fork.md` ("Offer Immediate Onboarding") asks the user "would you like to run the onboarding interview now?" with NO mention of run-setup-first or open-via-File-not-URL. Step 4 of `skill_onboarding.md` ("Explain Deployment Diversity") mentions "this project lives inside a `~/lattice/` workspace" but does not describe the canonical first-open runbook. The two skills are exactly the two operator-facing surfaces where a "First open" runbook would be discoverable; both are silent today.

**Why this is THE first-5-minutes UX problem**: the strategic north-star metric is *"easy and fluid way to build/operate/utilize context graphs"* (operator-stated; saved at `~/.claude/projects/-Users-stanley-lattice-aDNA-aDNA/memory/project_adna_lattice_ux_goal.md`). Both hazards land in the operator's first 5 minutes — the window where the operator decides whether aDNA is "easy and fluid" or "broken." A single first-open failure with no recovery hint is a churn event; the integration cost the campaign has accepted (T1+T2+T3+T4 design + propagation) is wasted if operators never reach the second use because of an unwritten runbook.

## 2. Root cause

Three compounding layers explain why these hazards exist today + why they belong in `skill_onboarding.md` + `skill_project_fork.md`:

1. **Obsidian's URL-scheme registration is per-vault and lazy.** Obsidian's URL handler only resolves `obsidian://open?vault=<name>` for vaults that already exist in `~/Library/Application Support/obsidian/obsidian.json` (the macOS registry; equivalent on Linux/Windows). Fresh forks have not been opened yet → not in the registry → URL fails silently. This is a *sensible* security choice (Obsidian doesn't want random URLs to enroll arbitrary directories as vaults), but it creates a one-time friction that the operator must navigate manually. There is no Obsidian-level setting to fix this; the only workable handling is **operator-side documentation**: tell them File → Open Vault is the canonical first-open path, and the URL scheme becomes available after that first open.

2. **`setup.sh` does not enforce "quit Obsidian first."** The script downloads plugin binaries to `.obsidian/plugins/<id>/` and the curated workspace layout to `.obsidian/workspace.default.json`. If Obsidian is running on the target vault concurrently, the writes race with Obsidian's own save-on-state-change behavior and produce inconsistent state. Running `./setup.sh` AFTER Obsidian has already opened the vault is even worse: Obsidian has already clobbered `workspace.json` and `setup.sh`'s default branch (only copy `workspace.default.json → workspace.json` if the latter doesn't exist) leaves the clobbered state in place. **The order matters: quit Obsidian → run setup.sh → File → Open Vault.** This sequence is nowhere in the operator-facing skills today.

3. **`skill_project_fork.md` Step 5 "Offer Immediate Onboarding" is the natural integration point but is currently silent on first-open hazards.** Step 5 fires at the moment of maximum operator attention: the fork has just been created and the operator is being asked "would you like onboarding now?" That same moment is the right place to warn about the first-open ordering and the URL-scheme caveat. Today Step 5 only asks the bare question, which is a missed opportunity. `skill_onboarding.md` (the skill that fires on first agent invocation INSIDE the forked vault) has the same property: it has a "Step 4 Deployment Diversity" section that talks about workspace layout but never tells the operator how to open the vault in Obsidian for the first time.

The compounding produces the worst outcome: an operator who reads partner-vault docs, pastes an `obsidian://...` URL, sees nothing happen, then opens the vault via Obsidian's File menu BEFORE running `./setup.sh`, watches the curated layout get clobbered within seconds, and concludes "aDNA's Obsidian setup is broken." All three issues are recoverable, but the recovery prose lives nowhere the operator looks.

## 3. Option matrix

| # | Option | Diff surface | Operator surface | Behavior change | Failure modes / Trade-offs |
|---|---|---|---|---|---|
| 1 | **Doc-integration into two existing upstream skills** (RECOMMENDED — matches absorbed-source verbatim). Add a new "First open" section to `skill_onboarding.md` (between Step 4 Deployment Diversity and Step 5 Discovery Conversation) documenting the canonical runbook. Add a new "Before opening Obsidian" warning bullet block to `skill_project_fork.md` Step 5 "Offer Immediate Onboarding" introducing the same ordering rule + URL-scheme caveat. | `.adna/how/skills/skill_onboarding.md` ~40 LOC markdown addition + `.adna/how/skills/skill_project_fork.md` ~20 LOC markdown addition | Two operator-facing surfaces, both already in the agent's auto-load path on a fresh fork | Operators see ordering + URL caveat at fork time AND at first-agent-invocation; redundant on purpose — the discoverability layer is "shows up wherever the operator is looking." | Doc-only; if the operator doesn't read the prose, the warning is lost. But: the alternative options below all add code paths that have their own failure modes. Documentation discoverability is the only single-source-of-truth that survives plugin breakage, network outages, partial fork states. **Cohabits with T1+T2+T3's Step 5 patches** (4-way composability — see §4 Composability table). |
| 2 | **NEW dedicated skill `skill_first_open_walkthrough.md`** (rejected). Author a third skill at `.adna/how/skills/skill_first_open_walkthrough.md` that owns the first-open runbook end-to-end. Both upstream skills cross-link to it. | NEW skill file ~80-120 LOC + 2 cross-link patches into onboarding + project_fork | One new operator-facing skill + two cross-link points | First-open is now a discrete agent skill, invokable on demand. | **Rejected**: duplicates `skill_onboarding.md` semantically. The onboarding skill already exists at the moment the operator needs the first-open prose; adding a third skill is more surface, not more discoverability. M2.4.5 heat map showed AGENTS.md skill-discoverability is the bottleneck — adding more skill files makes the bottleneck worse, not better. **Save the dedicated skill for T8 / M3.4** where it earns its weight via Local REST API + MCP integration. |
| 3 | **`setup.sh --first-open-check` runtime mode** (rejected). Add a mode to `setup.sh` that detects "operator probably hasn't opened this vault yet" and prints the runbook. | `.adna/setup.sh` ~30 LOC (arg parser arm + new mode + heuristic) | New CLI flag; operator must run it explicitly | Runtime detection of operator intent. | **Rejected**: runtime detection of "did the operator quit Obsidian" is unreliable (`pgrep -f "Obsidian.*<vault>"` produces false positives if the operator has Obsidian open on a different vault; ps-name parsing varies by OS). Even if reliable, the operator who needs this most is the one who didn't know to run it — invocation-gated documentation is no documentation. |
| 4 | **Layered — Option 1 doc + small cross-link in NN data.json or workspace template** (hybrid; consider if operator overrides). Same prose as Option 1, plus a one-line cross-link in the canonical `workspace.default.json` comment block or in NN's `data.json` template (T4 deliverable) pointing back to `skill_onboarding.md`'s First open section. | Option 1 diff surface + ~3 LOC across 1-2 JSON-with-comments files | Same as Option 1 + a passive cross-link surface in template configs | First-open runbook is mentioned at the *config* layer in addition to the skill layer | Adds noise to JSON template files; cross-links can drift if skills are renamed/restructured. Marginal benefit over Option 1 alone. **Available as operator override at v8 P6 entry** if cross-link discoverability is desired. |

## 4. Recommendation

**Option 1 — doc-integration into the two existing upstream skills** — is recommended, matching the absorbed-source verbatim at [[../../../campaign_obsidian_deployment_stabilization/campaign_obsidian_deployment_stabilization.md|`campaign_obsidian_deployment_stabilization.md`]] line 58 ("*Integrate into `skill_onboarding.md` for the standalone-project case + `skill_project_fork.md` post-fork message*"). The recommendation is two-prose-blocks-in-two-existing-skills — minimal new surface, maximum reuse of operator's existing mental model.

### Rationale

- **Discoverability over invocation-gating.** Both upstream skills are already loaded in the operator's path at the moment the hazards apply: `skill_project_fork.md` fires AT fork creation; `skill_onboarding.md` fires on first agent invocation INSIDE the forked vault. The hazards apply between those two moments. Putting the runbook in both skills means the operator sees it at both bookends; an operator who skips the fork-time agent path and opens Obsidian manually still gets the runbook via the onboarding skill on first `claude` invocation.
- **Reuse mental model, not surface.** Adding a NEW `skill_first_open_walkthrough.md` (Option 2) increases the discoverability burden — operators must learn that a third skill exists. The M2.4.5 heat-map analysis (n=10 corpus) showed AGENTS.md routing layer is UNDER-LOADED; adding more skills compounds the discoverability problem. Doc-into-existing-skills works WITH the existing mental model.
- **Doc beats runtime detection.** Option 3's runtime heuristic ("is Obsidian running on this vault?") is unreliable across platforms and false-positive-prone. Even when reliable, it requires the operator to invoke the right flag — which means operators who didn't know to invoke it are the ones who get bitten. Documentation at the right surface wins.
- **Composability with T1+T2+T3 Step 5 augmentations (4-way composability).** M3.1 T1 added a setup.sh preservation step (`R5: rm -f setup.sh` removal). M3.1 T2's Patch D augments `skill_project_fork.md` Step 5 with a `--reset-layout` recovery runbook ("if you opened Obsidian first and the layout broke, here's how to fix it"). M3.2 T3's Patch D augments the SAME Step 5 with a `--verify` fork-time gate ("here's how to confirm plugins are installed"). T5's Patch B is a THIRD augmentation to the same Step 5 — the **prevent-the-hazard-in-the-first-place** prose that precedes T2's recovery + T3's verify. The natural narrative order at v8 P6 entry:
  - **(0)** T5 prevent: "quit Obsidian → run setup.sh → File → Open Vault (NOT URL scheme on first run)"
  - **(1)** T3 verify gate: "after setup.sh, run `./setup.sh --verify` to confirm 15 plugins installed"
  - **(2)** T2 recovery: "if you opened Obsidian first and the layout broke, run `./setup.sh --reset-layout`"

  All three Patches D land at Step 5, in this order, as a coherent first-open narrative. v8 P6 may merge them into a single Step 5 rewrite OR commit each Patch D as its own commit (operator decision; §6 propagation contract enumerates).

### Acceptance smoke test (post-P6 landing)

```bash
# Scenario A: fresh fork → operator opens skill_project_fork.md
cat .adna/how/skills/skill_project_fork.md
# Expect: Step 5 contains "Before opening Obsidian" warning block with:
#   - quit Obsidian first
#   - run ./setup.sh from vault root
#   - File → Open Vault (NOT URL scheme on first run)
#   - URL-scheme-needs-prior-registration note

# Scenario B: fresh agent invocation in forked vault → skill_onboarding fires
# Operator triggers onboarding (via first `claude` invocation)
# Expect: agent reads skill_onboarding.md, encounters "First open" section
# between Step 4 (Deployment Diversity) and Step 5 (Discovery Conversation);
# agent presents first-open runbook to operator before continuing onboarding

# Scenario C: operator follows the runbook on a fresh fork
cd ~/lattice/<new>.aDNA/
# (Obsidian already closed per Scenario B prose)
./setup.sh                                              # plugin install
open -a Obsidian .                                      # File → Open Vault equivalent
# Expect: NN pinned as first left-pane tab; no workspace clobber; theme applied

# Scenario D: operator pastes obsidian://open?vault=<new> AFTER first File → Open Vault
# (vault now in registry)
# Expect: URL scheme resolves; vault opens cleanly

# Scenario E: composability with T2+T3 Step 5 augmentations
# Operator reads Step 5 end-to-end
# Expect: 3-block narrative (T5 prevent → T3 verify → T2 recovery) reads coherently
# with no contradictions or repeated prose
```

Expected: PASS on all five scenarios; the doc-only patches produce no behavior change in code; first-open success rate (operator-reported) shifts from "needs handholding" to "follows the runbook."

## 5. Literal patch text

### Patch A — `.adna/how/skills/skill_onboarding.md` add new "Step 4.5: First Open of the Forked Vault" between current Step 4 (Deployment Diversity) and Step 5 (Discovery Conversation)

```diff
@@ -110,6 +110,46 @@ For multi-instance composition (nesting vaults, sibling projects), see `what/doc

 One or two sentences is enough here.

+### Step 4.5: First Open of the Forked Vault (Operator Runbook — T5 per M3.3; F-O1-1 + F-S2-4)
+
+Before continuing the discovery conversation in Step 5, take 60 seconds to walk the operator through the canonical first-open path for the vault in Obsidian. The order matters; getting it wrong is recoverable but costs the operator 10-15 minutes of "why is the layout broken" debugging that the runbook avoids.
+
+**Tell the operator (verbatim or paraphrase as fits the conversation)**:
+
+> "Before we open this vault in Obsidian, there are two things to know. First, the order matters: quit Obsidian if it's running on any vault, then run `./setup.sh` from this vault's root (it installs the 15 community plugins + the Tokyo Night theme + the curated workspace layout — about 15MB; needs network). After that completes, open Obsidian and use File → Open Vault → select this folder. The first time you open the vault this way, Obsidian registers it. Second, the `obsidian://open?vault=<name>` URL scheme that some partner-vault README files use only works AFTER the vault is registered — first-open via the URL silently fails, which is confusing but is by Obsidian's design (security: it won't auto-enroll arbitrary directories as vaults). Use File → Open Vault the first time; URLs work for every open after that."
+
+**Why this matters**:
+
+- If the operator opens Obsidian on the vault before `./setup.sh` runs, the plugin binaries aren't on disk → the NotebookNavigator (NN) plugin fails to instantiate → Obsidian compacts the layout (removing the NN tab) → saves the compacted `workspace.json` over the curated layout. Recovery requires `./setup.sh` then `./setup.sh --reset-layout` (T2 per M3.1). The runbook prevents the clobber chain in the first place.
+- If the operator pastes an `obsidian://open?vault=<name>` URL on first open, nothing happens (no error toast, no browser-level warning). The operator concludes "URLs don't work" without realizing the canonical first-open is File → Open Vault. The runbook tells them why and what to use.
+
+**If the operator has already opened Obsidian before running setup.sh** (a common case at this point in the conversation), reassure them this is recoverable: after the setup.sh run completes, invoke `./how/skills/skill_obsidian_canonicalize.md --reset-layout` (or `./setup.sh --reset-layout` once T2 lands upstream) to restore the curated workspace layout. Then File → Open Vault again to re-load with the correct config.
+
+**Discoverability cross-references**:
+
+- `skill_project_fork.md` Step 5 — at fork time, the project_fork skill warns about this same hazard (T5 Patch B); this Step 4.5 is the second bookend of the same runbook.
+- `skill_obsidian_canonicalize.md` (M3.2 deliverable; `aDNA.aDNA/how/skills/`) — the `--reset-layout` recovery mode if the operator already triggered the clobber.
+- M-LWX-03 Obj 2 + F-S2-4 backlog — the original source of the workspace-clobber chain finding.
+
 ### Step 5: Discovery Conversation — Ask About Their Project
```

**Behavior notes**:
- Pure prose addition; no code path changes.
- Step renumbering: existing Steps 5-10 retain their numbers (insertion is "Step 4.5" — non-renumbering convention). v8 P6 may renumber Step 5+ as 6+ if operator prefers; non-renumbering is more compatible with partner-vault references that already cite Step N by number.
- Cross-links to `skill_obsidian_canonicalize.md` (M3.2 Obj 5; lives at `aDNA.aDNA/how/skills/`) — v8 P6 may need to adjust the relative path depending on whether M3.2 Obj 5 has been upstream-promoted by then.
- "If the operator has already opened Obsidian" recovery sub-paragraph is the bridge that connects T5 (prevent) to T2 (recover) at the operator-facing layer; lands cleanly with T2's Patch D in the same v8 P6 cycle.

### Patch B — `.adna/how/skills/skill_project_fork.md` Step 5 "Offer Immediate Onboarding" — add "Before opening Obsidian" warning block ahead of the existing question

```diff
@@ -134,9 +134,28 @@ These markers ensure the project's CLAUDE.md first-run detection will trigger `s

 ### Step 5: Offer Immediate Onboarding

-Ask the user:
+**Before opening Obsidian on the new vault — operator-facing warning (T5 per M3.3; F-O1-1 + F-S2-4)**:
+
+Tell the operator (concise; one paragraph; explicit about the ordering):
+
+> "Your project is ready at `<path>`. Before opening it in Obsidian for the first time, please:
+> 1. Quit Obsidian if it's running on any vault on this machine.
+> 2. Run `./setup.sh` from `<path>/` to install the 15 community plugins + Tokyo Night theme + curated workspace layout (~15MB; needs network).
+> 3. Open Obsidian and use **File → Open Vault** to select `<path>/`. The first time you open the vault this way, Obsidian registers it in its vault list.
+> 4. After step 3, the `obsidian://open?vault=<project_name>` URL scheme will work for subsequent opens — but on first open it silently fails because the vault is not yet in Obsidian's registry. This is by Obsidian's design (security); the runbook above is the canonical first-open path."
+>
+> "If you skip step 1 or 2 and open Obsidian first, the curated workspace layout will be overwritten within seconds (Obsidian compacts the layout when it can't load enabled plugins). Recovery: complete steps 1-2, then run `./setup.sh --reset-layout` (T2 per M3.1; lands in v8 P6) to restore the curated layout, then re-open via File → Open Vault."
+
+**Why this matters**: the strategic UX goal is *"easy and fluid way to build/operate/utilize context graphs"* (operator-stated; saved at `~/.claude/projects/-Users-stanley-lattice-aDNA-aDNA/memory/project_adna_lattice_ux_goal.md`). The first 5 minutes with a fresh fork are where the operator forms their judgment. Two avoidable hazards (workspace-clobber chain + URL-scheme silent failure) consume those 5 minutes if the operator doesn't have the runbook. This warning block is the runbook at the operator-facing surface that fires AT fork time — the moment of maximum attention.
+
+**Then ask the user (the existing flow continues from here)**:
+
 > "Your project is ready at `<path>`. Would you like to run the onboarding interview now to customize it for your domain? Or you can open it later — the setup will trigger automatically on first run."
```

**Behavior notes**:
- Pure prose addition; no code path changes.
- Inserts BEFORE the existing question, not after — the warning needs to land before the operator decides "yes onboard now" vs "I'll open it later." If they choose "later" and open Obsidian themselves, the warning still has them.
- The "If you skip" paragraph mentions `./setup.sh --reset-layout` (T2 deliverable; not yet upstream at the time T5 lands). v8 P6 should land T1+T2+T3+T5 together (single composable commit) OR land T5 last (so the cross-reference resolves). If T5 is the first M3.x patch to land, footnote the recovery path as "T2 per M3.1 — to land alongside; see `m31_obj4_t2_design_spec.md`."
- Composes with M3.1 T2's Patch D (Step 5 recovery runbook) + M3.2 T3's Patch D (Step 5 verify-gate). Final Step 5 narrative ordering: (a) T5 prevent block → (b) T3 verify-gate block → (c) T2 recovery block → (d) existing "would you like onboarding" question. See §4 Composability table.

## 6. v8 P6 propagation contract

| Stage | Action | Authority | Verification |
|---|---|---|---|
| **P6 entry gate** | Operator ratifies P5 → P6 phase transition per Campaign SO #19. v8 P6 propagation queue includes T5 (this spec; 2 patches) alongside T1 + T2 + T3 + T4 + 6-8 prior P2 doctrinal additions (post-M3.3-close queue = 12-14 per campaign master). | Operator + Rosetta | Plan ratification at P5 → P6 entry session |
| **P6 pre-step: patch verification against upstream HEAD** | Re-run §4 acceptance smoke test scenarios A-E against the current `.adna/` HEAD at P6 entry. Patch text was authored against `27e6395`. If `.adna/` HEAD has advanced (e.g., v7.1 or post-M3.2-close addendum `5861133`), refresh the patches against the new HEAD before commit. **Special attention to Step 5 composability**: if T1+T2+T3 have landed before T5, the diff context lines (Step 5 surroundings) will have shifted; refresh Patch B's context lines accordingly. If T5 lands first, the diff cleanly applies and subsequent T1+T2+T3 Patches D rebase atop. | Rosetta + operator confirmation | `git -C .adna log -1 --oneline` matches the `upstream_state_at_authoring` frontmatter OR refresh memo lands in `missions/artifacts/` |
| **P6 commit decision: bundle vs. separate** | Choose: **(a)** single commit "first-open UX standardization (T5 per M3.3; F-O1-1 + F-S2-4)" combining 2 patches; **(b)** per-patch commits (Patch A + Patch B each own commit; preserves audit trail mapping skill ↔ commit); **(c)** bundled-with-T1+T2+T3 commit "Obsidian first-open hardening (T1+T2+T3+T5)" landing all 4-way Step 5 augmentations + the setup.sh modes + the project_fork preservation in one logical commit. **Default**: option (a) per-spec single-commit — preserves T5's identity as a doc-only spec distinct from T1+T2+T3's code modes. | Operator decision at P6 entry; Rosetta drafts commit messages | Commit message names T5 + F-O1-1 + F-S2-4 + cites this spec path |
| **P6 commit** | Apply Patch A + Patch B. Commit message template: `v7.x: skill_onboarding "First open" section + skill_project_fork Step 5 first-open warning block (T5 per M3.3; F-O1-1 + F-S2-4; doc-only; not an additive-upstream-pattern instance — pure prose)`. T5 is **not an instance candidate for the single-commit additive-upstream pattern** (that pattern counts CODE / template additions; T5 is pure-prose doc-integration). | Operator pushes; Rosetta drafts commit | `git -C .adna log -1 --oneline` shows the new commit; smoke test (§4) passes |
| **P6 post-commit smoke** | Run §4 acceptance smoke test scenarios A-E on a fresh fork created via the updated `skill_project_fork.md`. Verify Step 5 reads coherently (with whatever T2/T3 Patches D are co-resident or pending). | Rosetta or dispatched validator (Carly+Herb per Campaign SO #15) | PASS on Scenarios A-E |
| **P6 ecosystem propagation** | Notify the 19+ partner vaults that v7.x ships T5 fix; existing forks made between v7.0 and v7.x do not need a runbook patch (the runbook is for first-open of NEW forks). Partner-vault README files with `obsidian://...` links may want to add a one-line "if URL doesn't open, use File → Open Vault" footnote — operator-discretionary per Campaign SO #13. | Berthier coord memos (Lattice Labs); per-vault Personas ack | Coord memos in `who/coordination/archive/` with `status: acknowledged` |

**P6 verification expectation**: zero regressions against v7.0 onboarding + project_fork behavior (existing Steps 1-10 in onboarding + Steps 1-6 in project_fork continue unchanged; no skill flow disruption); fresh forks gain the runbook at two operator-facing surfaces; F-O1-1 + F-S2-4 closed at the documentation layer.

**P6 rollback path**: if smoke test fails or partner-vault feedback objects to the doc framing, revert via `git revert` of the single P6 commit (or per-patch commits). Both patches are pure prose additions; rollback restores v7.0 skill behavior with zero data loss.

**Step 5 4-way composability** (cross-spec narrative ordering at v8 P6 entry):

| Order | Patch source | Step 5 sub-block | What it tells the operator |
|---|---|---|---|
| 1 | T5 Patch B (this spec) | "Before opening Obsidian" warning block | quit Obsidian → run setup.sh → File → Open Vault → URL caveat |
| 2 | T3 Patch D (`m32_obj3_t3_design_spec.md` §5) | "Plugin-binary verify gate" block | after setup.sh, run `./setup.sh --verify` to confirm 15 plugins installed |
| 3 | T2 Patch D (`m31_obj4_t2_design_spec.md` §5) | "If layout broke" recovery runbook | if Obsidian opened first → run `./setup.sh --reset-layout` to restore curated layout |
| 4 | existing skill content | "would you like onboarding now" question | the original Step 5 prompt — unchanged |

**Recommended P6 Step 5 final shape** (after all 4 patches land): a single coherent narrative arc from "prevent the hazard" → "confirm install succeeded" → "recover if hazard already happened" → "would you like onboarding now." v8 P6 may merge the 4 Patches D into a single Step 5 rewrite at P6 entry, OR commit each Patch D independently and accept the diff churn. Operator preference at P6 ratifies the bundling decision.

## Cross-references

- [[../mission_adna_str_p3_m33_obsidian_stabilization_ux_and_tests.md|M3.3 mission spec]] — parent mission (Objective 3)
- [[../../../campaign_obsidian_deployment_stabilization/campaign_obsidian_deployment_stabilization.md|absorbed campaign master]] — T5 track substrate (line 56-58)
- [[../../../../how/backlog/backlog_F_S2_4_obsidian_workspace_clobber.md|F-S2-4 backlog]] — finding source (workspace-clobber chain)
- [[../../../campaign_lattice_workspace_ux/missions/artifacts/mlwx_03_obj2_outer_vault_test_results.md|M-LWX-03 Obj 2 results]] — F-O1-1 source (URL-scheme silent failure on first open)
- [[m31_obj3_t1_design_spec.md|M3.1 T1 design spec]] — companion (T1 preserves setup.sh in fork; T5 instructs operator to run it; paired patches)
- [[m31_obj4_t2_design_spec.md|M3.1 T2 design spec]] — companion (T2 adds `--reset-layout` mode; T5 mentions it as the recovery path for the clobber chain; Step 5 4-way composability)
- [[m32_obj3_t3_design_spec.md|M3.2 T3 design spec]] — companion (T3 adds `--verify` mode; T5 mentions it as the post-setup confirmation; Step 5 4-way composability; **6-section template inherited verbatim**)
- [[m32_obj4_t4_design_spec.md|M3.2 T4 design spec]] — sibling (T4 ships canonical workspace.default.json; T5 references the curated layout as the thing that gets clobbered)
- [[m33_obj4_t6_design_spec.md|T6 design spec]] — sibling at this mission (T6 ships the integration-test skill that operators run post-first-open to verify deployment integrity)
- [[../../../../how/skills/skill_obsidian_canonicalize.md|skill_obsidian_canonicalize.md]] — M3.2 Obj 5 deliverable (referenced as `--reset-layout` recovery target in Patch A's prose)
- [[../campaign_adna_serious_tool_readiness.md|campaign master]] — v8 P6 propagation queue ownership
- [[../../../../what/decisions/adr_016_per_mission_context_budget.md|ADR-016]] — token budget two-metric + Heavy-File Read Convention

## Prior-instance + bundle citation

| # | Instance | Commit / Ratification | Type | Authored |
|---|---|---|---|---|
| 1-4 | (additive-upstream pattern instances 1-4 — ADR-008 + e3b3bcc + 8673383 + 202c9ec) | ratified pre-M3.x | Single-commit additive-upstream lineage | M03 + M04 + M-LWX-01 + M-LWX-03 |
| 5 | T1 — preserve setup.sh in skill_project_fork.md | v8 P6 candidate (M3.1 T1 design spec) | Single line removal + comment update | M3.1 |
| 6 | T3 — `setup.sh --verify` mode + health-check + fork-time gate | v8 P6 candidate (M3.2 T3 design spec) | 3-file additive | M3.2 |
| 7 | T4 — `skill_obsidian_canonicalize.md` orchestrator + setup.sh `--reset-layout` + NN data.json shipping + .obsidianignore extension | v8 P6 candidate (M3.2 T4 design spec — bundled F-S2-5/6/7) | Combined 4-file additive | M3.2 |
| **— (not an instance)** | **T5 — first-open UX standardization (this spec)** | **v8 P6 candidate (this spec)** | **Pure-prose doc-integration into 2 upstream skills** | **M3.3 (this mission)** |

**Note on instance counting**: T5 is **NOT** an instance of the single-commit additive-upstream pattern. That pattern counts CODE / template / new-file additions (e.g., ADR-008 stub; e3b3bcc routing hook; 8673383 skill file; 202c9ec inline comment rephrase; T1 line-removal; T3 mode + skill + step; T4 skill orchestrator + setup.sh mode + data.json template + .obsidianignore extension). T5 is doc-into-existing-skill prose — no new files, no new modes, no template additions. The instance counter stays at 7 (or however high the bundle decisions at v8 P6 land) post-T5; T5 is an additive-prose patch that COMPOSES with the instance-counting patches but does not increment the counter.

## Notes

- **Patches A + B are the load-bearing changes.** Both are pure prose; both have zero side effects on existing skill flow.
- **Cross-skill primitive citation**: Patch A mentions `skill_obsidian_canonicalize.md --reset-layout` (M3.2 deliverable) as the operator-facing recovery path. This is the FIRST instance of T5 / M3.3 citing M3.2's deliverable as an operational primitive at the documentation layer (T6 does this at the code layer via `--verify` delegation). The intra-mission-class chain (T1→T2→T3→T4→T5→T6→T7→T8) gains a second cross-mission-class reference here.
- **4-way Step 5 composability** is the load-bearing v8 P6 concern. The narrative ordering (T5 prevent → T3 verify → T2 recovery → existing question) is documented in §6 propagation contract table. v8 P6 may merge all 4 into a single Step 5 rewrite OR keep them as separate Patches D.
- **Dual-audience note**: a newcomer reading Step 4.5 finds the rationale (the "Why this matters" sub-block) and the runbook (the verbatim operator-facing prose) in the same place. A developer reads the patch text directly + understands the 4-way composability at §6. Both audiences land on the same operator-facing surface.
- **Self-reference (Standing Order #8 — 15th tactical invocation candidate in v8)**: this spec lives at `how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/` — a directory whose `AGENTS.md` was top-12 hardened at M2.4.5. The patch text documents the FIRST OPEN of a forked vault — the moment when the operator most relies on the discoverability layer that M2.4.5 sharpened. The spec is itself a behavioral test of whether the M2.4.5-hardened routing layer surfaces first-open hazards before they bite. Formal Q2 SQL re-measurement at M3.x ≥ 20-session corpus per `m245_obj3_measurement_contract.md` §6.
- **`skill_design_spec_authoring.md` graduation** advances from 4 (T1+T2+T3+T4) to 5 (this spec) of 3+ use instances; T6 at this same mission session adds 6th.
- **`skill_first_contact_polish.md` graduation candidate**: T5 is not strictly first-contact-polish (the polish skill addresses partner-facing surfaces like `aDNABanner.png`); but T5 IS first-5-minutes-UX-polish at the operator-fork-time surface. Graduation candidate stays at 2 of 3 use instances per M3.2 close ratification; T5 does not advance the counter.
