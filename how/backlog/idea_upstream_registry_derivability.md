---
type: backlog
idea_id: idea_upstream_registry_derivability
title: "Registry derivability as a compliance dimension — every hand-maintained registry has a consumer that fails on drift or a discovery pass that enumerates its territory; the third state is the defect"
status: accepted            # ⛩ ruled at ARCADE G4 2026-10-20 (operator R43, gate row B3): ROUTED to A4.2 — the compliance dimensions are governance (CLAUDE.md + compliance_checker.py), not standard text
created: 2026-10-16
updated: 2026-10-20
last_edited_by: agent_rosetta
source: "Mondrian (Canvas.aDNA), coord_2026_09_16_mondrian_to_rosetta_partition_before_migrating §4 (delivered 2026-10-16); Canvas backlog idea of the same name — the FINDING is theirs, the SHAPE below is ours (they declined to draft a diff, twice burned)"
campaign: campaign_arcade
target: "what/docs/adna_standard.md §Compliance Dimensions (10 → 11?) · what/lattices/tools/compliance_checker.py · adna_validate.py"
tags: [backlog, upstream, compliance, registry, derivability, mondrian, v2_6, a4_1]
---

# Registry derivability — a candidate 11th compliance dimension

**The finding (Mondrian's, six instances in four weeks across four subsystems):** *a hand-maintained registry is in exactly one of two states — it has a **consumer** that fails when it drifts, or it is covered by a **discovery pass** that enumerates the territory — and which one must be written on the line. The third state (correct today, hand-maintained, read by nothing) is the defect.* Sharper: *a registry that **looks** watched is better hidden than one that visibly is not* — Canvas's enums had a census, a correspondence table and a published result all agreeing, and gutting one left all ten gates green.

**Instances in this vault (derived 2026-10-16):** `what/decisions/adr_index.md` tally (consumer: the `grep -h '^status:' | uniq -c` re-derivation at each ADR touch — written on the line since 2026-10-03) · the skills inventory count (consumer: `adna_validate.py --governance` skills-count regex) · `who/governance/lip_registry.md` (NEW today; third state until its §4 consumer exists — says so) · `site/src/data/registry_admission.yaml` (consumer: `build_vaults_data.mjs` admission gate) · the Project Discovery table in the workspace router (discovery pass: `ls ~/aDNA` + `skill_node_health_check`).

**The shape (ours, candidate):** a **compliance dimension** — *Derivability (0–5): every registry-class object the vault carries names, on the line, either its consumer (what fails when it drifts) or its discovery pass (what enumerates the territory and when it last ran); a per-object falsifiable claim, never a second list.* Chosen over a doctrine paragraph or a template field because it is the only shape where the proposal is not itself an instance of the defect (Mondrian's costing, agreed).

**Built locally 2026-10-20 (ARCADE A4.2, f-b; ships with the v8.13 image, so TAUGHT-AS-DESIGN for forks until then):** `compliance_checker.py` d11 + gap G-015 + a `registry` object type found by name (`*_registry.md` / `*_index.md` under `what/` + `who/`; memos and patterns excluded); tier thresholds moved +3 with the +3 that N/A adds, so no existing object changed tier (111/111 verified); `CLAUDE.md` §Compliance Dimensions 10 → 11 (and the stale 0–5/50 corrected to the checker's 0–3/33); `lip_registry.md` declares first (33/33). First run surfaced three registries in the third state: `adr_index.md` · `glossary_index.md` · `glossary_derived_index.md` (G-015).

**Ruled at:** ARCADE A4.1 (v2.6 cut). If accepted: §Compliance Dimensions 10 → 11, `compliance_checker.py` gains the check, `lip_registry.md` §4 is its first in-vault consumer.
