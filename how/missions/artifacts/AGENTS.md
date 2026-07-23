---
type: directory_index
created: 2026-03-17
updated: 2026-05-20
last_edited_by: agent_stanley
tags: [directory_index, artifacts, aar]
---

# Mission Artifacts

## Purpose

Persistent outputs from mission and campaign execution — AARs (After-Action Reviews), gap registers, verification reports, and other structured deliverables that outlive the session that produced them.

## Naming Convention

```
{campaign_id}_{mission_id}_aar.md       # After-Action Review
{campaign_id}_gap_register.md           # Campaign-level gap register
{descriptive_name}.md                   # Other mission artifacts
```

## Key Artifact Types

| Type | `artifact_type` | Template | When Created |
|------|----------------|----------|--------------|
| After-Action Review | `aar` | `template_aar.md` | Mission completion |
| Gap Register | `gap_register` | — | Campaign-level tracking |
| Verification Report | `verification` | — | Phase gate or campaign close |

## Load/Skip Decision

**Load when**: Reviewing mission outcomes, checking gap status, preparing for next mission in a campaign sequence.

**Skip when**: Routine session work, creating new missions, or working on unrelated campaigns.

**Token cost**: ~300 tokens (this AGENTS.md). Individual artifacts vary (50-200 lines).

## Heavy-File Warning (Inv 5)

Some artifacts — particularly campaign-closeout AARs and multi-objective consolidation reports (e.g., `aar_phase7_*.md`, `m24_obj4_agents_md_hardening_audit.md`, `m23_obj7_*.md`) — exceed the 50 kT Heavy-File threshold. Default to `offset` + `limit` Reads on artifacts whose filename suggests breadth (campaign AAR, multi-section consolidation, top-N list). See [[../../../what/decisions/adr_016_per_mission_context_budget.md|ADR-016 Clause B]] for the canonical convention.

## Evidence-artifact tracking (Refit DP5)

Capture sets (screenshots, Lighthouse JSON, headless PNGs) under `artifacts/*_capture/`, `*/lighthouse/`, and measure dirs follow the **three-class evidence policy** — commit cited slims + `capture_report.json` provenance; gitignore heavy regenerable PNGs (reproducible via `scripts/visual_capture.mjs`); ignore scratch. **Classify at authoring time** before committing a new capture set. Canonical rule: [[../campaigns/campaign_refit/artifacts/evidence_artifact_policy.md|evidence_artifact_policy]].

## Cross-References

- [[../AGENTS.md|how/missions/AGENTS]] — Mission protocol (parent directory)
- [[../../campaigns/AGENTS.md|how/campaigns/AGENTS]] — Campaign protocol (campaign artifacts also land here)
- [[../../templates/template_aar.md|template_aar]] — Full AAR template
- [[../../templates/template_aar_lightweight.md|template_aar_lightweight]] — 5-line AAR template (mandatory before mission close)
