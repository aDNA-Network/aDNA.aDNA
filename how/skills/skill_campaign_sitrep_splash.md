---
type: skill
skill_type: agent
category: operations
created: 2026-05-29
updated: 2026-05-29
status: active
last_edited_by: agent_stanley
token_estimate: ~1700
trigger: "An agent is opening or closing a campaign and wants an at-a-glance operator-facing recap surface — a 5-block ASCII splash rendered at the campaign-open or campaign-close moment. Sibling to [[skill_lattice_home_install]] (which renders the same surface at terminal cold-start). Also triggers when a campaign master document wants an orientation header, or a close cascade wants a recap that POINTS AT (never replaces) the AAR."
requirements:
  tools: [bash, awk, git, sed]
  context: [campaign master document with frontmatter (campaign_id, persona, opens_at/closed_at), mission specs under the campaign's missions/ dir, the AAR artifact path, the host vault's VAULT_BADGE]
  permissions: [write to the campaign master / close-cascade surface where the rendered splash is appended]
graduated_from: campaign_lattice_home_pattern.M3
first_consumer: campaign_lattice_home_pattern (own side-campaign close — self-reference instance)
tags: [skill, agent, operations, lattice_home, splash, campaign_lifecycle, campaign_open, campaign_close, augments_aar_never_replaces, four_tier_pipeline, sibling_of_lattice_home_install]
---

# Skill: Campaign SITREP Splash (lifecycle-variant render)

## Overview

Render the [[pattern_lattice_home]] 5-block ASCII splash at a **campaign-lifecycle moment** rather than at terminal cold-start. Two variants:

- **Campaign-open splash** — an *orientation* surface rendered when a campaign opens: identity, strategic intent, mission tree, plan (phases / sessions / token budget), and the phase-gate reminder. Answers "what am I about to undertake, and how is it bounded?"
- **Campaign-close splash** — a *recap* surface rendered in the close cascade: what was delivered, the mission tally, an explicit **pointer to the AAR**, and the next-up routing. Answers "what did this campaign produce, and where do I go next?"

Both variants reuse the same **4-tier single-source pipeline** as the cold-start splash (dossier → template → state → CLI extractor) and the same `lattice` binary's awk-extract + bash-substitute machinery. This skill does **not** duplicate that bash — it references the canonical extractor authored at [[skill_lattice_home_install]] and supplies two new *templates* ([[template_campaign_open_splash]], [[template_campaign_close_splash]]) as the substitution starters.

This skill is **vault-agnostic** — it works for any aDNA vault running campaigns under `how/campaigns/`.

## The one rule that governs this skill: the splash augments the AAR, never replaces it

> **SO-LH-2 (from [[campaign_lattice_home_pattern|the campaign that authored this skill]]):** A campaign-lifecycle splash is an operator-facing *recap*. It does **not** discharge **Standing Order #5** (every mission gets an AAR) or **Campaign SO #11** (per-phase decadal AAR mandatory). The close splash always *points at* the AAR; it is never the AAR.

This is enforced structurally, not by good intentions: the campaign-close template's **block 4 is a mandatory AAR-pointer** (`full AAR at <path>`) carrying an inline "augments, does not replace" banner. If you find yourself writing AAR *content* into the splash — the five Worked/Didn't/Finding/Change/Follow-up lines — stop: that content belongs in the AAR artifact, and the splash links to it.

## When NOT to use

- **As an AAR substitute** — see the rule above. The AAR is authored separately (`template_aar_lightweight` or `template_aar`); the splash points at it.
- **For mid-campaign state** — use the cold-start `lattice home` splash (from [[skill_lattice_home_install]]) for "where does this campaign stand right now." The lifecycle variants fire only at the open and close *moments*.
- **For non-campaign work** — sessions and standalone missions don't get lifecycle splashes; they get SITREPs (session) and AARs (mission).
- **When the campaign master carries no frontmatter** — the open variant reads `campaign_id`/`persona`/`opens_at` from frontmatter; without it, fall back to manual instantiation or skip.

## 5-step recipe

### Step 1 — Select the moment, pick the template

| Moment | Template | Where it renders |
|---|---|---|
| Campaign **open** | [[template_campaign_open_splash]] | Appended to / above the campaign master document at authoring time |
| Campaign **close** | [[template_campaign_close_splash]] | Appended to the close cascade surface (campaign master close section or STATE.md Last Session block), **beside** the AAR |

### Step 2 — Gather campaign data

All sources are cheap reads — no LLM probe, no remote call (Anti-Pattern: blocking probe):

| Datum | Source |
|---|---|
| `CAMPAIGN_ID` / `PERSONA` | campaign master frontmatter |
| `OPENS_AT` / `CLOSED_AT` / `DURATION` | frontmatter `opens_at` / `closed_at` (duration = difference) |
| `INTENT` / `NORTH_STAR` | campaign master §Identity / §Scope |
| `MISSION_TREE` / `MISSION_TALLY` | `grep -l "^status:" <campaign>/missions/*.md` + glyph per status |
| `DELIVERED` (file tally) | `git diff --stat` over the campaign's commit range, or the close-notes tally |
| `AAR_PATH` | the AAR artifact path (`how/missions/artifacts/` or the campaign-master AAR section) |
| `NEXT` | the Next Session Prompt routing target |
| `VAULT_BADGE` | host vault badge (per [[skill_lattice_home_install]] step 2 — e.g. `🧬 aDNA / Rosetta`) |

### Step 3 — Substitute placeholders

Reuse the canonical extractor: `awk '/^```$/{flag=!flag; next} flag'` lifts the fence-pair block from the template; bash parameter expansion substitutes `{{PLACEHOLDER}}` markers; multi-line blocks (`{{MISSION_TREE}}`, `{{MISSION_TALLY}}`, `{{DELIVERED}}`) are built by bash substitution, not awk-v (the discipline established in [[template_lattice_home_render]]). **Do not copy the bash** — call the `lattice` binary's render path or factor a shared helper.

### Step 4 — Render at the moment

- **Open**: render once when the campaign master is authored; the splash becomes the master's orientation header. Re-render only if the mission tree changes materially (new mission added, scope revised).
- **Close**: render once in the close cascade, placed **beside** the AAR (not instead of it). The block-4 AAR-pointer makes the relationship explicit.

### Step 5 — SO-LH-2 placement discipline

Before committing the close splash, confirm: (a) the AAR artifact exists and is complete; (b) the splash's block 4 points at it by path; (c) no Worked/Didn't/Finding/Change/Follow-up *content* leaked into the splash. If all three hold, the augments-never-replaces invariant is preserved.

## Example — self-reference: this side campaign's own close

When `campaign_lattice_home_pattern` (the campaign that authored this very skill) closes at M3, its campaign-close splash instantiates [[template_campaign_close_splash]] like so:

```
╭─ campaign_lattice_home_pattern · rosetta ───────── 🧬 aDNA / Rosetta CLOSED ─╮
│  opened 2026-05-29T05:20Z → closed 2026-05-30T01:30Z   (~20h elapsed)
├──────────────────────────────────────────────────────────────────────────────┤
│  DELIVERED   13 NEW files · 3/3 missions · pattern+skill×2+templates×3+install
│
│  MISSION TALLY
│    ✓ M1 pattern lift                      2026-05-29
│    ✓ M2 aDNA.aDNA in-vault install        2026-05-29
│    ✓ M3 lifecycle variants & close        2026-05-30
│
│  AAR POINTER   full AAR → campaign_lattice_home_pattern.md §Lightweight AAR
│                (this splash augments the AAR — it does not replace it)
├──────────────────────────────────────────────────────────────────────────────┤
│  NEXT   → mainline M5.6 D15 Persona Page Consolidation   · pushed origin/main ✓
╰──────────────────────────────────────────────────────────────────────────────╯
```

The vault renders its own primitive on its own closing moment — the structure is the lesson (CLAUDE.md Operating Style; Standing Order #8). Note block 4 *points at* the AAR rather than reproducing it.

## Anti-pattern

| What | Why it breaks |
|---|---|
| **Splash as canonical AAR substitute** | Violates SO-LH-2 + Standing Order #5; the AAR is the durable audit artifact, the splash is an ephemeral recap. The block-4 pointer exists precisely to prevent this. |
| **Lifecycle splash for mid-campaign state** | That is the cold-start `lattice home` surface's job; lifecycle variants fire only at open + close moments |
| **More than 5 blocks** | The [[pattern_lattice_home|pattern]] caps richness at 5 blocks; a close splash that grows a 6th "lessons" block is becoming an AAR |
| **Blocking probe at render** | A splash that calls a remote LLM or slow MCP probe blocks the close cascade; cheap grep + git only |
| **Duplicating the bash extractor** | Copy drifts from the canonical `lattice` render path; reference it, factor a shared helper (Anti-Pattern row 6 of the pattern) |
| **Inline hex color** | Reference semantic roles from the host vault's palette, never embed hex (ADR-005 discipline) |

## Cross-references

- [[pattern_lattice_home]] — the parent pattern; its Anti-Pattern row 7 forward-links here (now resolved)
- [[skill_lattice_home_install]] — the cold-start sibling skill; supplies the canonical extractor this skill reuses
- [[template_campaign_open_splash]] — the campaign-open variant template (M3 D2)
- [[template_campaign_close_splash]] — the campaign-close variant template (M3 D3)
- [[template_lattice_home_render]] — the cold-start render template; shares the placeholder + glyph vocabulary
- [[template_aar_lightweight]] — the 5-line AAR the close splash points at (never replaces)
- [[campaign_lattice_home_pattern]] — the campaign that authored this skill (SO-LH-2 source); first consumer at its own M3 close
