---
type: artifact
artifact_class: iii_findings
created: 2026-07-13
updated: 2026-07-13
last_edited_by: agent_rosetta
campaign_id: campaign_v8_8_release
mission_id: mission_v8_8_p1_prune_and_iii
objective: 4
status: complete
tags: [artifact, v8_8_release, distillery, readme, iii, findings]
---

# Obj 4 — README III Findings (re-scoped)

Right-sized reader-panel III pass on the **real** inner (`.adna/README.md`, 157 ln) + root (`aDNA-Network/aDNA`
repo-root `README.md`, 88 ln, fetched from the published repo). The "870 ln / 10 cycles" premise is dead — both
READMEs are already high-quality (prior-campaign polished), so this is a light-touch verdict, not a rewrite.

## Inner README (`.adna/README.md`) — 157 → 155 ln

**Verdict: strong; one first-contact/jargon fix applied.**

| Finding | Lens | Action |
|---|---|---|
| The `--depth 1`, **v7.0 flatten note**, and **Workspace-root note** blockquotes carried internal jargon (`campaign_adna_v2_infrastructure 2026-05-18`, the `~/lattice → ~/aDNA` symlink-shim detail) that clutters a newcomer's Getting Started | first-contact clarity · jargon | **Applied** — compressed the three blockquotes into two: a one-line clone/root tip + a friendly "**Upgrading an older install?**" line. **Both internal links preserved** (`upgrade_v6_to_v7.md` + `skill_workspace_path_migration.md`, both resolve) — this mirrors how the root README already handles the same content. |
| Footer attribution "Built by **Lattice Protocol**" (L157) vs the aDNA forward-brand | consistency | **Flagged, not applied** — brand naming (aDNA vs Lattice Protocol) is deliberate/operator territory; the link already points to `aDNA-Network`. Note for the operator, not a P1 change. |
| Embed note (L1–2, ADR-034 §3) · banner · v8.7 badges | preserve | **Preserved verbatim** (embed note intact; badges left at v8.7 for the P3 bump). |
| Dark-mode / IA | dark-mode/IA | No issue — GitHub-rendered; badges + banner adapt; ToC present. |

## Root README (`aDNA-Network/aDNA` `README.md`) — 88 ln, verbatim

**Verdict: excellent; no prose changes.** Recently rewritten (clone-and-run framing, "What you just cloned" tree,
clean "Existing installs" section). First-contact clarity, IA, and jargon are all strong. The `lattice is a graph of
graphs` motif (L23) is an intentional, shared brand thread (also in the inner README + the footer). **No reader-panel
finding rises to a prose edit.** Staged verbatim so P3 has the exact reference; the only root change is the badge bump.

## DP3 recommendation (for the operator at P2)

**README scope → ship "inner III + root badge-bump."** The inner README has a genuine newcomer-clarity win worth
shipping; the root README needs only the P3 version-surface badge bump (v8.7 → v8.8), which P3 does regardless. So
"inner-only vs inner+root" collapses to: **apply the inner III edit, and bump both README badges at P3** (surfaces #4
+ #5). Low risk either way; recommend shipping the inner III.

**gitleaks rider →** see the staging ledger (Obj 5) for the consolidated DP3 (README scope + the `.gitleaks.toml`
`.obsidian/plugins` allowlist include/defer call).

## Verification
- Inner: `diff` vs source = only the intended compression; both kept links resolve; embed note + v8.7 badges intact;
  DE-LINK — the README's markdown links are legitimate navigation and **all resolve** (0 dangling). ✓
- Root: staged == fetched (byte-identical); badges left at v8.7 for P3. ✓
