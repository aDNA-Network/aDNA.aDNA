---
type: reference
title: "v8.6 P1 triage — the 3 `proposed`-source items (for the P2 ratify gate, DP2)"
created: 2026-07-06
updated: 2026-07-06
status: active
last_edited_by: agent_rosetta
campaign: campaign_v8_6_release
tags: [reference, v8_6_release, ouroboros, triage, proposed, p2_gate, dp2]
---

# v8.6 P1 Triage — the 3 `proposed`-source items

> Three ship-adjacent items are sourced from `proposed` backlog ideas and therefore **cannot ship without
> operator acceptance at the P2 gate (DP2)**. This is the agent's recommendation for each; the operator ratifies
> (§7.7 — agents author, operators ratify). All three stay `status: proposed` until that gate. Batch A ideas
> 1–6 are already `accepted` (the confirmed spine) and are **not** in this triage.

## 1 — `idea_upstream_dev_vault_name_leak_sweep`  *(Batch G · low-pri · F-CHM-217)*

- **What:** genericize ~15 real dev-vault names + a 5-row census table (real mission IDs / commit SHAs) out of
  the shipped `.adna/how/skills/skill_iii_setup.md`, plus a broader sweep across sibling `.adna/` surfaces
  (`skill_git_remote_setup.md` · `upgrade_v6_to_v7.md` · an example session). Cosmetic release-cut leak.
- **Scope check:** `.adna/`-side only (the file exists solely in `.adna/`); no dev-graph source, no normative
  surface. Executes at P3 assembly via `skill_template_release` (Standing Rule 1 — never a direct `.adna/` edit).
- **Recommendation: ACCEPT → ship in v8.6 Batch G.** Low-risk, on-cycle, closes an F-CHM-217 leak the release
  train is the natural vehicle for. Staged in `release_staging_ledger.md` §C. **DP4** (census table): replace it
  with a generic note (row-by-row genericizing forfeits the value the table had). *(Ledger §D-2 / §D-3.)*

## 2 — `idea_upstream_node_manifest_interview_emission`  *(Hestia inbound · M-effort)*

- **What:** extend `skill_node_bootstrap_interview.md` to emit a machine-readable `node_manifest.{yaml,md}` pair
  (ADR-015 Tier-3 config-of-record) at bootstrap; downstream consumers (Lighthouse installer, WebForge
  node_home, Venus Network join) await the emission.
- **Scope check:** an **unbuilt M-effort feature**, not a currency fold. It targets a **node-vault** base skill
  and is **cross-persona** (Hestia's domain); it depends on Hestia's ADR-006 + aDNALabs ADR-015 Tier-3.
- **Recommendation: ACCEPT the idea; DEFER the build (NOT v8.6).** v8.6 is a skills-and-currency release; adding
  a new interview-emission feature is scope creep into another persona's altitude. Route to a **Hestia-led
  mission** (or v8.7), gated on ADR-015 Tier-3. Acknowledge the inbound; it is a sound contribution, just not
  this cycle's shape. *(Ledger §D-4.)*

## 3 — `idea_upstream_state_frontmatter_phase_campaign_keys`  *(Hestia inbound · S-effort)*

- **What:** add two **optional** STATE.md frontmatter keys — `phase:` (current phase, machine-readable) +
  `campaigns:` (active campaign ids) — as a fleet convention, so Home's inventory derivation (WebForge
  graph_card / node_home hub surfaces) reads them honestly instead of prose-parsing.
- **Scope check:** additive, no schema break, honest-absent when unused; touches the `.adna` `template_state`
  convention (not a normative standard surface). Interplays with ADR-044 per-class frontmatter profiles.
- **Recommendation: ACCEPT; operator's timing call — cheap enough to ride v8.6, clean to defer to v8.7.** It is
  a low-cost, safe convention rider (two optional keys). Default recommendation: **defer to v8.7** to keep
  v8.6's scope exactly as the RC cut it; **include as a Batch-E-style rider** only if the operator wants the
  cheap win now. Adoption vehicle either way = the template-release train + each vault's next STATE write.
  *(Ledger §D-4.)*

## Summary for the P2 gate

| Item | Recommendation | v8.6? |
|------|----------------|-------|
| dev-vault-name leak sweep | **ACCEPT** (+ DP4 = census→generic note) | **yes** (Batch G) |
| node_manifest interview emission | **ACCEPT idea, DEFER build** → Hestia mission / v8.7 | no |
| STATE `phase:`/`campaigns:` keys | **ACCEPT** — operator timing call | optional rider (default: v8.7) |

**Also surfaced (not a `proposed` idea, but a P2 decision — ledger §D-5):** mirror
`.adna/how/templates/template_ratification_record.md` into `aDNA.aDNA/how/templates/` to close a self-drift
(the dev vault ships it in `.adna/` but lacks a local copy; its own §7.7 doctrine + the adoption checklist item 1
both cite it). Recommendation: **ACCEPT** (small, clean; +1 template — this cycle or next).
