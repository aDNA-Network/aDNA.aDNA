---
type: session
session_id: "2026-07-24_palimpsest_p1_m2_convention_machinery"
created: 2026-07-24
status: completed
tier: 2
mission: mission_v8_9_2_convention_machinery_batch
campaign: campaign_v8_9_release
intent: "Operation Palimpsest P1 M2 — author the v8.9 convention + machinery batch (ship-set items 2–7): STATE-convention family · path-convention doctrine · fork-kit AGENTS enforcement · codename-collision note · release leak hardening · compliance_checker.py hardening. Dev-side only; NO count bump; NO .adna edit; NO push. Stop at P2 gate."
executor_tier: opus
token_budget_estimated: 90
last_edited_by: agent_rosetta
tags: [session, v8_9, palimpsest, p1, m2, convention, doctrine, skill_hardening, tooling]
updated: 2026-07-24
---

# Session: Operation Palimpsest — P1 M2 (Convention + machinery batch)

## Intent

Author ship-set items 2–7 of the v8.9 batch dev-side in this vault (mission spec:
`how/campaigns/campaign_v8_9_release/missions/mission_v8_9_2_convention_machinery_batch.md`). **No count bump** —
the +1 skill/template landed in M1. Each item flips its source idea `proposed → resolved`.

## Scope (Tier 2 — declares files)

**Writes (dev-side only; NO `.adna/` edit; NO push):**
- `what/doctrine/doctrine_state_conventions.md` (new — obj 2 STATE-convention family; uncounted)
- `how/campaigns/campaign_v8_9_release/artifacts/image_side_state_mission_key.md` (new — P3 rider, obj 2)
- `aDNA.aDNA/CLAUDE.md` (obj 3 path-convention doctrine line; optional obj-2 self-adoption note)
- `how/templates/template_campaign.md` (obj 5 codename-collision note)
- `how/skills/skill_project_fork.md` (obj 4 fork-kit AGENTS enforcement)
- `how/skills/skill_template_release.md` (obj 6 release leak hardening; project-specific, stays dev-side)
- `what/lattices/tools/compliance_checker.py` + `.gitignore` (obj 7)
- `STATE.md` (obj-2 optional frontmatter self-adoption; close banner + Active-Campaigns block)
- 7 `how/backlog/idea_*.md` source ideas (flip proposed → resolved)
- the M2 mission file (status + AAR)

**Out of scope:** the anchor (M1, done); any `.adna/` fold (P3); ratification (P2 gate); push.

## Single-writer lease

No peer active session (verified pre-flight). Clean tree at HEAD `c3b4ec2`. No `.git/*.lock`; no running git procs.

**Clock note:** system date reads 2026-07-23; the campaign record (P0/M1/mission/STATE) is dated 2026-07-24. Stamping
M2 **2026-07-24** to keep the mission arc coherent (M2 continues a 2026-07-24 mission); flagged for operator reconcile.

## Log

- Pre-flight: clean tree, no peers/locks; read M2 mission + all 7 source ideas + landing-surface probes.
- Authored obj 3 → 5 → 4 → 2 → 6 → 7 dev-side (cheap convention/template touches first, code last); stamped 7 ideas `resolved`; staged the obj-2 P3 rider.
- Verified: `adna_validate --governance` zero-drift; `compliance_checker.py` 3-point acceptance test PASS.
- Closed: mission AAR + `status: completed`; STATE banner + QUEUED + Active-Campaigns block; charter + campaign CLAUDE trued; P2 ratification packet staged.

## SITREP

**Completed (M2 — all 6 objectives + close):**
- **Obj 2 — STATE-convention family:** new `what/doctrine/doctrine_state_conventions.md` (`mission:` key §1 · `P<n>[/<count>]` grammar §2 · `+adna-normalize-phase` §3); `.adna/STATE.md` `mission:`-key edit **staged as P3 rider** (`artifacts/image_side_state_mission_key.md`); trio **self-adopted on this vault's STATE.md** frontmatter (SO-8); doctrine indexed in `what/doctrine/AGENTS.md` (+ trued-up the previously-unindexed `doctrine_visual_inspection`).
- **Obj 3 — path-convention doctrine:** `CLAUDE.md` → Working with Content → **Path references**.
- **Obj 4 — fork-kit AGENTS enforcement:** `skill_project_fork.md` — AGENTS added to Step 4 `agent_init` stamping + new **Step 4.6** 4-file kit gate (+ genesis carve-out + census hook) + Outputs row.
- **Obj 5 — codename-collision note:** `template_campaign.md` at the `# Campaign:` heading.
- **Obj 6 — release leak hardening:** `skill_template_release.md` — new **Step (b.1)** DE-LINK + dev-vault-name hard gate (full outbound grep + name scan + disposition recording).
- **Obj 7 — `compliance_checker.py` hardening:** scratch-default `--outdir` (`.compliance_out/`, git-ignored) + `.gitignore`; yaml-import runtime guard (clear "requires python3.13" message, no opaque traceback); `unsupported type — not scored` marker + aggregate exclusion. **3-point acceptance test PASS.**
- **7 source ideas** flipped `proposed → resolved` with `## Adopted — v8.9 M2` stamps.
- **Close:** mission AAR + `status: completed`; STATE.md (banner + QUEUED block + `### campaign_v8_9_release` Active-Campaigns entry — the recon-flagged gap); charter + campaign CLAUDE.md status trued; P2 ratification packet staged (`artifacts/p2_ratification_summary.md`).

**Verification:** `adna_validate --governance` = **Zero drift** (no count bump). `compliance_checker.py` 3-point test PASS. `git status` = only intended files (16 M + 3 ??); **no `.adna/` path**; no push.

**In progress:** none — M2 done; **P1 Author phase complete** (M1 + M2). Deliberate stop at the P2 operator gate.

**Next up:** **P2 Ratify (OPERATOR GATE, §7.7)** — operator reviews + signs `artifacts/p2_ratification_summary.md`. Then **P3 Fire** (`skill_template_release`; folds M1+M2 + both riders into a fresh `.adna` clone; image count 32→33; OPERATOR GO).

**Blockers:** none. **Watch:** clock discrepancy (system `2026-07-23` vs campaign-record `2026-07-24` — stamped `2026-07-24` for arc coherence; flagged for operator reconcile).

**Files touched:** NEW — `what/doctrine/doctrine_state_conventions.md` · `how/campaigns/campaign_v8_9_release/artifacts/image_side_state_mission_key.md` · `…/artifacts/p2_ratification_summary.md` · this session. MODIFIED — `CLAUDE.md` · `STATE.md` · `.gitignore` · `how/skills/skill_project_fork.md` · `how/skills/skill_template_release.md` · `how/templates/template_campaign.md` · `what/doctrine/AGENTS.md` · `what/lattices/tools/compliance_checker.py` · 7 `how/backlog/idea_*.md` · the M2 mission + campaign charter + campaign CLAUDE.

**Next Session Prompt:** Operation Palimpsest (`campaign_v8_9_release`) is at **P1 Author COMPLETE** — both missions done (M1 anchor + M2 convention/machinery), all dev-side, `adna_validate --governance` zero-drift, nothing shipped to `.adna/`. The next step is the **P2 Ratification operator gate (§7.7)**: present `how/campaigns/campaign_v8_9_release/artifacts/p2_ratification_summary.md` to the operator and get a signature on the ratification block. **Do NOT self-ratify.** On ratification → **P3 Fire** via `how/skills/skill_template_release.md` (tags-only `v8.9`, the new DE-LINK Step (b.1), dry-run-then-pause, 5 version surfaces, fresh-clone smoke) — folds the M1+M2 deltas + the two staged P3 riders (`image_side_state_graduation_tripwire.md` + `image_side_state_mission_key.md`) into a fresh `aDNA-Network/aDNA` clone; governance 8.8→8.9, standard v2.5 held, image skill count 32→33; requires a separate operator GO. Reconcile the clock note (system 2026-07-23 vs record 2026-07-24) if it matters.

## AAR (M2 — lightweight)

- **Worked:** source-idea pre-drafts → codify-not-invent; M1's rider pattern transferred to the `.adna/STATE.md` mission-key seed; the yaml-import guard (not a version check) proved correct — recon showed python3.14 lacks yaml yet is `> 3.13`, which a bare version guard would have missed.
- **Didn't:** obj 2 had no dev-side `template_state.md` — resolved via a new uncounted `what/doctrine/` file + truing the doctrine index (visual_inspection had been unindexed drift).
- **Finding:** the vault shipped the v8.7 `phase:`/`campaigns:` STATE keys but never adopted them on its own STATE.md — SO-8 self-adoption closed that live self-drift while demonstrating the v8.9 `mission:` key.
- **Change:** authoring/workflow doctrines now grouped separately from the safety quartet in `what/doctrine/AGENTS.md`.
- **Follow-up:** P2 ratify (operator) → P3 fire (image 32→33). Clock discrepancy flagged.
