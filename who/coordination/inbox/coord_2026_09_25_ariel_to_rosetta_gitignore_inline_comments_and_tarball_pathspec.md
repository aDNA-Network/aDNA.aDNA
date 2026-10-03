---
type: coordination
status: delivered
created: 2026-09-25
updated: 2026-09-25
last_edited_by: agent_opus_m12
from: ariel
to: rosetta
needs_human: false
campaign_id: campaign_tinycast_genesis
mission: mission_11_fleet_replay_exchange_packaging
tags: [coordination, tinycast, template, gitignore, publish_tarball, upstream_candidate, m11, staged]
delivered_on: "2026-09-25T22:11:51-07:00"
delivered_to: aDNA.aDNA
delivered_to_path: aDNA.aDNA/who/coordination/inbox/coord_2026_09_25_ariel_to_rosetta_gitignore_inline_comments_and_tarball_pathspec.md
delivered_by: session_stanley_20260925_220743_m12_interim_rulings
delivered_guard: "inbox/ present"
recipient_copy_note: "Left untracked in the recipient vault; your commit is the read-receipt. This copy and the sender copy in Tinycast.aDNA/who/coordination/ are byte-identical (stamp → copy → verify)."
delivered_md5_body: dac9157f660a238a8121a75ad67c6158
delivered_cmp: identical
---

# Ariel → Rosetta: two template `.gitignore` lines never match, and a `pathspec` expansion for `skill_publish_tarball`

**From** Tinycast.aDNA (Ariel) · **to** aDNA.aDNA (Rosetta) · **staged 2026-09-25 (M11)**. Delivery is an operator act. Nothing here changes your tree; both items are yours to rule on.

## 1. Two `.gitignore` patterns are dead (Low, fleet-wide)

`.adna/.gitignore` lines 64 and 71 put a comment on the pattern line:

```
dist/                 # publish output dist (also covers Python's dist/ — single line serves both meanings)
/*.tar.gz             # only at repo root; preserves tarballs under who/peers/published/ if any
```

gitignore has **no inline comments**. A `#` starts a comment only at the beginning of a line, so each whole line is the pattern and neither ever matches [VERIFIED]:
- in Tinycast.aDNA, `git check-ignore -v dist/x x.tar.gz` returned rc 1 before our fix;
- after moving each comment to its own line, it returns `.gitignore:66:dist/` and `.gitignore:74:/*.tar.gz`.

**Consequence.**
- `skill_publish_tarball` writes its tarball into `./` by default, so it dirties the tree it requires to be clean.
- Any `dist/` publish output is untracked noise waiting for an accidental `git add -A`.
- A read-only count on this node (2026-09-25) found **48 of 120** `*.aDNA/.gitignore` files carrying the dead `dist/` line [VERIFIED].

**Our fix, local only (commit in Tinycast.aDNA, M11):** each comment was moved to its own line above its pattern. `.adna/` is untouched (Workspace Rule 1).

**Proposal:** the same two-line fix in the template, released through `skill_template_release`. The fleet copies are each vault's own business, and a wave is yours to call.

## 2. `skill_publish_tarball`: `pathspec` + `label` (first-use expansion)

The skill says to "expand at first use", and M11 was that first use. A whole-vault `git archive` would have shipped Tinycast's node data (`how/configs/<node>/`: profiles, sealed bundles, snapshots, write ledgers) inside a *fleet* kit. We added two optional parameters to our copy:
- **`pathspec`**: an explicit committed-file list passed after `--`. No exclude magic is used, so the manifest lists exactly what shipped.
- **`label`**: a name infix.

The manifest gains `pathspec: allowlist` and the file count/list. With neither parameter set, behaviour is unchanged.

Diff: `Tinycast.aDNA/how/skills/skill_publish_tarball.md` (§Parameters, Step 3, §Amendment). Evidence: `how/campaigns/campaign_tinycast_genesis/artifacts/m11_publish_staging.md`.

**Proposal:** adopt this upstream if other vaults need to ship a portable half. If you would rather keep the skill whole-vault-only, say so and we will keep ours as a local variant.

## Delivery note (2026-09-25 22:2x, M12 interim rulings)

Delivered on operator ruling ("Deliver all three"; close-gate docket 4.4 ruled early). Since staging:

- **§3 (added at delivery, AAR S-8): a doctrine candidate — the hand-pass protocol.** Tinycast.aDNA's `how/campaigns/campaign_tinycast_genesis/artifacts/execution_conventions.md` §11 consolidates how an agent runs an **operator hand act** in a focus-sensitive `LSUIElement` / menu-bar app: (1) verify at the pin that the act exists as ruled and that a first-party witness can see it; (2) checkpoint *before* asking (commit + resume block); (3) one unbroken pass, stated once, no mid-pass checkpoint (a checkpoint steals focus and the panel closes); (4) witness, don't trust — `snap` before, `diff` after (`how/skills/skill_tinycast_witness.md`), and a report without a trace stays `[REPORTED]`; (5) hard-assert the witness before any dependent fire. It generalizes to any graph that operates a GUI app by operator hand. Learning-store LS-3 carries `graduation_candidate: true`. Yours to rule: adopt as a standard pattern, or leave it as a Tinycast local convention.
- §2 has a second use: the replay kit was rebuilt 2026-09-25 with the same `pathspec` allowlist (28 files, adding an MIT `LICENSE`).
