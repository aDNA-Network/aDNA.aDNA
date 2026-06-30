---
type: backlog_idea
status: proposed
priority: medium
created: 2026-05-20
last_edited_by: agent_stanley
filed_from: node.aDNA/how/campaigns/campaign_lattice_compliance_upgrade/missions/mission_lattice_comp_m00_charter_and_recon.md (Obj 8)
filing_authorization: skill_upstream_contribution
tags: [backlog, upstream, claude_md, token_prune, adna_template, conservative, aggressive]
updated: 2026-06-09
---

# Idea: `.adna/CLAUDE.md` Token Prune (Upstream PR to `LatticeProtocol/adna`)

## Problem

`.adna/CLAUDE.md` is the base aDNA template's CLAUDE.md — it loads into every session of every aDNA-based vault as the inherited governance layer. Current size: **22,243 chars (~5,560 tokens)** per `wc -c` 2026-05-20. Multiplied across the workspace (29 `.aDNA/` vaults + grandfathered named projects = ~38 consumers), the cumulative session-load cost is high — and the file likely contains parentheticals, repeated cross-refs, and spec-detail that could extract to canonical spec files.

This is the **upstream cousin** of `campaign_lattice_compliance_upgrade` M01 (CLAUDE.md token prune × 5 routing files at the workspace level). M01 covers the *local* routing files (workspace + lattice-labs + node.aDNA + LatticeTerminal + LatticeAgent). The base template at `.adna/CLAUDE.md` is **out of local scope** per `~/aDNA/CLAUDE.md` Standing Rule 1 ("never modify `.adna/`"). The fix path is **upstream contribution** — a PR to `LatticeProtocol/adna` per `how/skills/skill_upstream_contribution.md`.

## Proposed Solution

Two-path prune mirroring M01's per-file structure:

**Conservative path** (~250-500 tokens saved):
- Tighten parenthetical asides + dedupe cross-refs in §Project Discovery, §Standing Rules, §For AI Agents, §Standing Orders, §Greeting Pattern sections
- Compress example blocks where the pattern is self-explanatory (e.g., session frontmatter example can be shorter)
- Remove date-stamp parentheticals where the section already declares last-update

**Aggressive path** (~1500-3000 tokens saved):
- Extract **§Persona Catalog** detail (if present) → standalone `.adna/who/personas/persona_*.md` files; one-line pointer in CLAUDE.md
- Extract **§Standing Orders** detail (if present) → `.adna/how/governance/standing_orders.md`; bulleted enumeration in CLAUDE.md with link
- Extract **§Greeting Pattern Examples** → `.adna/how/templates/example_greetings.md`
- Extract **§AI Agent Operating Protocol** spec → `.adna/how/governance/agent_protocol_spec.md`; CLAUDE.md keeps top-level rules + link

## Sequencing — wait for M01 lessons-learned

This idea explicitly waits for compliance campaign M01 to close. Reason: M01 produces conservative + aggressive diffs across 5 routing files and Stanley picks per-file at M01 review. The ratios actually achieved (conservative-vs-aggressive token-savings, cross-vault coordination friction, spec-extraction quality issues) inform the upstream PR scope. Filing the upstream PR before M01 lessons land risks repeating mistakes at the template level (which propagates to every consumer).

## PR Target

- Repository: `LatticeProtocol/adna`
- Branch: `feature/claude-md-token-prune` (or similar)
- Reviewers: aDNA standard maintainers (current `.adna/CLAUDE.md` last_edited_by metadata identifies)
- Migration discipline: changes are backward-compatible (extracted spec files are additive; the CLAUDE.md edits remove duplication, not behavior). Consumer vaults absorb on next `git -C .adna pull`.

## Origin

`node.aDNA/how/campaigns/campaign_lattice_compliance_upgrade/` (Hestia; Lattice Workspace v7+ Compliance Upgrade) — campaign refined 2026-05-19, executing M00 Charter & Recon on 2026-05-20. M00 Obj 8b explicitly authorized this filing per `skill_upstream_contribution` (per `node.aDNA/CLAUDE.md` Domain Knowledge §Upstream Contribution Awareness — upstream ideas go to `aDNA.aDNA/`, NOT `node.aDNA/how/backlog/`).

## Cross-References

- Compliance campaign M01 mission: `node.aDNA/how/campaigns/campaign_lattice_compliance_upgrade/missions/mission_lattice_comp_m01_claude_md_prune.md` — lessons-learned input
- Compliance campaign M00 dossier: `node.aDNA/how/campaigns/campaign_lattice_compliance_upgrade/dossier_workspace_inventory.md` — exact char counts for context
- Skill: `node.aDNA/how/skills/skill_upstream_contribution.md` (or the canonical version in `.adna/how/skills/`)

## M01 Lessons-Learned (closed 2026-05-20 — session 20260520_154852)

Per M01 Exit-Gate criterion 7. These observations are the actual-vs-projected feedback from the local M01 apply session; bake into the upstream `.adna/CLAUDE.md` PR before drafting:

### Actual savings vs projection (per-file)

| File | D3 pick | Projected | Actual | Delta |
|---|---|---|---|---|
| `~/aDNA/CLAUDE.md` | aggressive (default sub-picks) | ~29.2% (~3,180 tokens) | **37.5% (~4,245 tokens)** | +8.3pp (over-shot) |
| `node.aDNA/CLAUDE.md` | conservative | ~10.2% (~520 tokens) | **8.2% (~417 tokens)** | -2pp (under-shot) |
| `LatticeAgent.aDNA/CLAUDE.md` | aggressive (full) | ~37.1% (~1,420 tokens) | **22.2% (~849 tokens)** | -14.9pp (under-shot) |
| `LatticeTerminal.aDNA/CLAUDE.md` | conservative | ~7.0% (~228 tokens) | **7.4% (~243 tokens)** | +0.4pp (matched) |

**Aggregate**: 24.4% reduction across 4 modified files (~5,754 tokens saved). lattice-labs/CLAUDE.md skipped per D3.

### Methodology lessons for upstream PR

1. **Diff-projection methodology** — line-count-based char projections over-shoot when section bodies are dense (workspace router) and under-shoot when sections are sparse (LatticeAgent). For the upstream `.adna/CLAUDE.md` prune, measure actual section char counts (`awk` or `sed`) BEFORE projecting savings; don't rely on visual line-count.
2. **Mission-spec extractions may not match actual file content** — M01 Open Question #2 surfaced this for 3 of 5 files (lattice-labs, LatticeAgent, LatticeTerminal). For the upstream PR: read the actual `.adna/CLAUDE.md` first, identify extractable sections post-read (not pre-author the diff blind to the file).
3. **Three extraction patterns emerged** (from M01 finding #1):
   - Ecosystem-detail extraction → centralized spec files in `aDNA.aDNA/what/specs/` (workspace router pattern)
   - Governance-content extraction → per-vault `who/governance/` (LatticeAgent + Standing Orders + Operating Style)
   - Structured-data extraction → YAML companions in `who/identity/` (node.aDNA Pairings → YAML)
   - For `.adna/CLAUDE.md` (template), expect patterns 1+2 (template-level governance) and possibly a new pattern (template's "Personality Customization" block could extract to a template-level `.adna/how/templates/example_personalities.md`).
4. **ADR number collision risk for cross-vault PRs** — at the upstream PR, if new ADRs are needed in `aDNA.aDNA/` (e.g., declaring the extraction pattern as a v8+ template feature), check the ADR registry FIRST: `ls aDNA.aDNA/what/decisions/ | grep adr_`. M01 missed this and had to renumber `adr_009 → adr_012` post-commit (commit `476dd78`).
5. **Already-pruned baselines have limited aggressive headroom** (LatticeTerminal observation from Obj 1-5). `.adna/CLAUDE.md` has NOT been pruned recently per its v7.0 frontmatter — expect headroom closer to LatticeAgent (~22-37%) than LatticeTerminal (~7%). Estimated upper bound: ~1500-3500 tokens saveable.
6. **Conservative savings consistently met-or-exceeded projection** (Files 3 + 5). Aggressive savings exceeded projection on dense files (File 1) but under-shot on sparse files (File 4). For `.adna/CLAUDE.md` (template — verbose by design), expect conservative to over-shoot and aggressive to be approximately on-target.
7. **Self-vault edit risk** — does not apply to `.adna/CLAUDE.md` (upstream PR is to a separate repo). Mention only as a cross-reference for how M01 mitigated it (ADR-002 self-acceptance criterion + fresh cold-load spot-check).
8. **Workspace router not a git repo** — does not apply to `.adna/` (which IS a git repo per `~/aDNA/CLAUDE.md` Standing Rule 1). Upstream PR has standard `git revert` reversibility.

### Sequencing implication

M01 closed 2026-05-20; lessons-learned now landed. The upstream PR can be drafted at any time. Suggested next step: standalone mission inside `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/` or as a new sub-campaign. **Not on the compliance campaign's critical path** — file as backlog idea here, graduate to mission when convenient.
