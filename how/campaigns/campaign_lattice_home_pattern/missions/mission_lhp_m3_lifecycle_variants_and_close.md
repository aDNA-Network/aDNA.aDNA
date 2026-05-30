---
type: mission
mission_id: mission_lhp_m3_lifecycle_variants_and_close
campaign: campaign_lattice_home_pattern
mission_number: 3
slug: lifecycle_variants_and_close
created: 2026-05-29
updated: 2026-05-29
status: completed
opens_at: 2026-05-30T00:59:05Z
opened_session: session_stanley_20260530T005905Z_lhp_m3_s1
closed_at: 2026-05-30T01:30:00Z
closed_session: session_stanley_20260530T005905Z_lhp_m3_s1
estimated_sessions: 1   # single S1 per plan ratification (matches M1 + M2 cadence)
persona: rosetta
mission_class: planning   # author-only (mirrors M1); no binary edits, no smoke-verify chain
last_edited_by: agent_stanley
token_budget_estimated: "Per-session ~50-80 kT content-load (read M1 pattern/skill/template + M2 close notes + author 4 NEW files + 1 skill-v2 edit + close cascade). API-billing companion per ADR-016 Clause C: ~4-6 M cache_read + ~40-60 K cache_creation at 25-40 turns."
verification_surface: structural   # planning-class: frontmatter + dual-audience (SO#7) + self-reference (SO#8) + cross-link (SO#10) checks; NO smoke-verify chain (no executable substrate)
hard_dependency_satisfied: "M2 closed 2026-05-29T12:58Z with 6/6 substrate LIVE + 10/10 smoke-verify PASS; 3 NEW SEED adaptations recorded in M2 Close Notes §Drift-audit (substrate for the D4 skill-v2 amendment)."
scope_decisions: "Operator-confirmed at plan-approval 2026-05-30 (sunny-gadget): (1) fold the 3 NEW SEEDs into a v2 amendment of skill_lattice_home_install in M3 (vs defer to upstream-promotion); (2) stop at side-campaign close — set Next Session Prompt → M5.6 D15, do NOT open M5.6 this run."
tags: [mission, m3, side_campaign, lattice_home_pattern, planning_class, lifecycle_variants, campaign_open_splash, campaign_close_splash, skill_v2_amendment, side_campaign_close, augments_aar_never_replaces]
---

# Mission M3 — Campaign-lifecycle splash variants & side-campaign close

## Mission Identity

**3rd and final mission of the `campaign_lattice_home_pattern` side campaign.** Where M1 authored the cold-start splash primitive and M2 installed it in aDNA.aDNA (canonical-instance #2), **M3 extends the splash to two campaign-lifecycle *moments*** — campaign-open (orientation) and campaign-close (recap) — and then runs the side-campaign close cascade, handing the mainline back to M5.6 D15.

Planning-class, author-only (mirrors M1): the deliverables are a sibling skill + two parameterized templates + a v2 amendment to the M1 install skill. No executable substrate is added, so there is **no smoke-verify chain** (unlike M2). The verification surface is structural: frontmatter validity, the dual-audience test (Standing Order #7), self-reference (Standing Order #8), and ≥2 wikilinks per file (Standing Order #10).

This mission **resolves the forward-link planted at M1**: `pattern_lattice_home` Anti-Pattern row 7 and `skill_lattice_home_install`'s cross-reference table both already point at `[[skill_campaign_sitrep_splash]]`. M3 authors the file those links target.

## Scope

4 NEW files + 1 this-campaign edit + side-campaign close cascade, single-S1 arc:

### D1 — `how/skills/skill_campaign_sitrep_splash.md` (sibling lifecycle skill)

Sibling to `skill_lattice_home_install`. Documents rendering the 5-block splash at two lifecycle moments rather than at terminal cold-start, reusing the same **4-tier single-source pipeline** (dossier → template → state → CLI extractor) and the `lattice` binary's awk-extract + bash-substitute machinery (referenced, not duplicated — Anti-Pattern row 6 of the pattern). The skill's load-bearing discipline is **SO-LH-2: the splash augments the AAR, it never replaces it** — it does not discharge Standing Order #5 (every mission gets an AAR) or Campaign SO #11 (per-phase decadal AAR). Includes a worked self-reference example instantiating the campaign-close template with *this side campaign's own* close data (Standing Order #8).

### D2 — `how/templates/template_campaign_open_splash.md` (campaign-open variant)

Parameterized 5-block ASCII template mirroring `template_lattice_home_render` shape. Blocks: **Header** (`{{CAMPAIGN_ID}} · {{PERSONA}}` / `{{VAULT_BADGE}} OPENING`) · **INTENT** (strategic intent + north-star) · **MISSION TREE** (planned missions) · **PLAN** (phase · est. sessions · token budget · constraint count) · **GATES** (phase-gate reminder + first objective). Placeholder spec with per-placeholder fallback; semantic-role styling (zero hex literals).

### D3 — `how/templates/template_campaign_close_splash.md` (campaign-close variant)

Same shape. Blocks: **Header** (`{{VAULT_BADGE}} CLOSED` + duration) · **DELIVERED** (NEW-file tally + missions N/N) · **MISSION TALLY** (each mission ✓ + date) · **AAR POINTER** (explicit `full AAR at <path>` + inline SO-LH-2 banner) · **NEXT** (Next Session Prompt routing + push status). The AAR-pointer block is the structural enforcement of SO-LH-2: the close splash always points *at* the AAR, it is never the AAR.

### D4 — `how/skills/skill_lattice_home_install.md` → v2 (this-campaign edit)

Fold the 3 NEW SEEDs surfaced at M2 close into Step 2 of the install skill, gated on a **vault-identity class**:

- **CMux-class** — vault carries a unique identity stub (e.g. `what/cmux/graph/node.adna.yaml`); the M1 4-substitution protocol applies as-is.
- **aDNA-class** — vault root identity is the bare `MANIFEST.md` (universal across aDNA vaults); requires 3 additional adaptations + a 5th substitution row.

The 3 NEW SEEDs (per M2 Close Notes §Drift-audit): (1) **per-vault PWD binding** (`case "$pwd_canon" in "$vault"|"$vault"/*) ;;` — prevents rendering from a sibling vault, because `MANIFEST.md` is not vault-unique); (2) **realpath canonicalization** (BSD `cd "$PWD" && pwd -P` follows the lowercase `adna.adna` symlink and masks the vault-root match; `realpath` fixes it); (3) **dirname + git-config identity probe** (`basename "$vault"` for NODE_ID + `git config user.name` for OPERATOR, because `MANIFEST.md` carries no `node_id`/`operator` fields). 5th substitution row covers the identity probe.

## Hard constraints

Per parent campaign + plan §Constraints. Specifically for M3:

1. Zero edits to `.adna/`, any existing `CLAUDE.md`, or existing `MANIFEST.md`/`STATE.md` (other than aDNA.aDNA's own `STATE.md` at close — own governance)
2. Zero edits to `CMux.aDNA` (read-only substrate source)
3. Zero new ADRs; zero image-gen; zero `campaign_adna_serious_tool_readiness/` edits (mainline frozen until close)
4. No `lattice` binary verb for lifecycle splashes — author-only (CLI wiring is a future/consumer task, like M1 deferred install to M2)
5. No `AGENTS.md` index rows (M1 precedent: added none; respects bloat cap + constraint #1)
6. Single binary commit at end (no intermediate commits)
7. The D1 skill must lead its Anti-Pattern table with splash-as-AAR-substitute (SO-LH-2 enforcement)

## Acceptance criteria

| # | AC | Status | Evidence |
|---|---|---|---|
| 1 | Mission spec authored with frontmatter + scope + AC + risks | ✅ | this file |
| 2 | D1 `skill_campaign_sitrep_splash.md` authored; SO-LH-2 leads Anti-Pattern; 5-step recipe; self-reference worked example | ✅ | file content |
| 3 | D2 `template_campaign_open_splash.md` 5-block + placeholder spec + fallbacks | ✅ | file content |
| 4 | D3 `template_campaign_close_splash.md` 5-block + AAR-pointer block + SO-LH-2 banner | ✅ | file content |
| 5 | D4 skill v2: identity-class conditional + 5th substitution row + 3 NEW SEEDs as sub-steps | ✅ | skill diff |
| 6 | Forward-link resolves: `[[skill_campaign_sitrep_splash]]` filename matches pattern + install-skill cross-refs | ✅ | grep at close |
| 7 | Dual-audience (SO#7) on skill + both templates | ✅ | structural review |
| 8 | Self-reference (SO#8): D1 example uses this side campaign's own close data | ✅ | file content |
| 9 | Cross-link (SO#10): ≥2 wikilinks per NEW file | ✅ | grep at close |
| 10 | Side-campaign close cascade discharged (M3 spec completed + lightweight 5-line AAR + campaign master M3 row + campaign-level AAR + STATE.md Op 3 39th + session move) | ✅ | M3 close commit |
| 11 | Stale-counter reconciliation: exit-gate 38th→39th + NEW-file tally 12→13 | ✅ | campaign master diff |
| 12 | Next Session Prompt → mainline M5.6 D15 (not opened this run) | ✅ | STATE.md diff |
| 13 | Bloat audit recorded (cumulative side-campaign token estimate; overage documented if > 10 kT cap) | ✅ | close notes §Bloat audit |
| 14 | D-PUSH=push-after-side-campaign-close fires at G3 (20-precedent chain) | ✅ | git push refs |

## Risks

1. **Bloat cap breach** — M1+M2 already ≈7–8 kT vs the ≤6 kT *target*; M3 adds ≈3–4 kT → cumulative likely ≈11–12 kT, over the ≤10 kT *hard* cap. Mitigation: author at the lean end (skill ~200 lines, templates ~85 each, spec ~110); document the overage at close with the M2 rationale (prose-heavy recipe + substrate templates). The cap is treated as a soft cap with a documented-rationale escape (M2 set this precedent).
2. **SO-LH-2 dilution** — a lifecycle-close splash that summarizes outcomes can be mistaken for the AAR. Mitigation: the close template's block 4 is a mandatory AAR-*pointer* (never the AAR body), and the skill leads its Anti-Pattern with splash-as-AAR-substitute.
3. **Identity-class conditional adds skill complexity** — the v2 amendment risks over-loading Step 2. Mitigation: keep the CMux-class path as the default narrative; aDNA-class adaptations are a clearly-fenced conditional sub-block.
4. **Template proliferation** — two new lifecycle templates plus the M1 render template could drift. Mitigation: all three share the single `template_lattice_home_render` placeholder vocabulary + glyph set; the lifecycle templates reference it rather than re-defining glyphs.

## Execution order (single S1)

1. Session file authored (`how/sessions/active/`)
2. Author this mission spec (D-prerequisite)
3. D1 — `skill_campaign_sitrep_splash.md` (sibling lifecycle skill)
4. D2 — `template_campaign_open_splash.md`
5. D3 — `template_campaign_close_splash.md`
6. D4 — `skill_lattice_home_install.md` v2 amendment (3 NEW SEEDs + 5th substitution row + identity-class conditional)
7. Structural verify (frontmatter + forward-link resolve + ≥2 wikilinks + ≤5 blocks per template)
8. Side-campaign close cascade — M3 spec status `in_progress → completed` + lightweight 5-line AAR + campaign master M3 row + campaign `status → completed` + campaign-level AAR + stale-counter reconciliation + STATE.md Op 3 39th + Next Session Prompt → M5.6 D15 + session move
9. Bloat audit notation (cumulative side-campaign token estimate)
10. Single binary commit + push (D-PUSH=push-after-side-campaign-close; 20-precedent chain)

## Mission Close Notes (S1 close 2026-05-30T~01:30Z)

**Closed at 2026-05-30T01:30:00Z by agent_stanley at session_stanley_20260530T005905Z_lhp_m3_s1.** 4/4 NEW deliverables + skill-v2 amendment LIVE; `estimated_sessions: 1` MET. 14/14 AC discharged at close. M3 close discharges the side campaign (all 3 missions completed) and routes the Next Session Prompt → mainline M5.6 D15.

### Bloat audit (cumulative side-campaign)

| Mission | NEW files | Lines | Running kT (est) |
|---|---|---|---|
| M1 | 4 (pattern + skill + template + idea) | ~475 | ~3.5–4 |
| M2 | 6 substrate + mission spec | ~715 | ~7–8 |
| M3 | skill (126) + 2 templates (100+103) + mission spec (131) + skill-v2 edit (~50) | ~510 | ~10–11 |

**Cumulative ≈ 10–11 kT — marginally over the ≤ 10 kT hard cap (~0.5–1 kT).** Came in leaner than the planned ~11–12 kT because the D1 skill landed at 126 lines (vs the ~210 estimate). Documented overage, accepted with the M2 rationale: of the 13 NEW deliverables, 6 are operational scripts and 5 are substrate templates/specs; only the skills carry prose mass. The ≤6 kT *target* was set before the implementation-class M2 substrate was scoped; the ≤10 kT cap is treated as a soft cap with a documented-rationale escape. No trim applied beyond authoring at the lean end (skill 126 lines; templates ~100 each; spec 131). Flagged for the upstream-promotion idea-file: a future generic-vault adopter taking only the *pattern + skill + templates* (not the per-vault install substrate) lands well under 6 kT.

### Lightweight 5-line AAR (Standing Order 5)

1. **Worked**: 4 NEW files + skill-v2 amendment authored in a single S1; the forward-link planted at M1 (`[[skill_campaign_sitrep_splash]]`) now resolves; the campaign-close template self-references by rendering *this* side campaign's own close as its worked example — the vault demonstrating its own primitive on its own closing moment (Standing Order #8 satisfied structurally, not just cited).
2. **Didn't**: did not wire a `lattice campaign-open`/`campaign-close` CLI verb (author-only by scope, like M1 deferred install to M2); did not propagate the lifecycle templates to other vaults (Phase-6 / upstream-promotion concern); did not add AGENTS.md index rows (M1 precedent).
3. **Finding**: the lifecycle variants reuse the cold-start 4-tier pipeline cleanly — the only genuinely new design surface is the *block content* per moment (open = forward-looking plan; close = backward-looking tally + AAR pointer). The 5-block cap held for both. SO-LH-2 is best enforced *structurally* (a mandatory AAR-pointer block) rather than by exhortation.
4. **Change**: the upstream-promotion idea-file (`idea_upstream_lattice_home_pattern`) should now describe a *three-variant* family (cold-start + campaign-open + campaign-close) sharing one render template vocabulary, not a single splash — fold at PR time.
5. **Follow-up**: side campaign CLOSED at M3; mainline `campaign_adna_serious_tool_readiness` resumes at **M5.6 D15 Persona Page Consolidation** (10 cycles 131–140; 2–3 sessions; non-RLP lightweight per Campaign SO #11) per the Next Session Prompt. The 3 NEW SEEDs are now folded into `skill_lattice_home_install` v2; the path-coexistence SEED (`lattice-adna` vault-prefix) remains a candidate for Phase-6 multi-vault propagation.
