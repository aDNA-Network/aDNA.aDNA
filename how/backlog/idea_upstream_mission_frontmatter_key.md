---
type: backlog_idea
idea_class: upstream_contribution
from_vault: Emacs.aDNA
from_persona: archimedes
created: 2026-07-19
status: proposed
target: "STATE.md template frontmatter (.adna base + template_state) — fleet convention"
origin: "Emacs.aDNA AAR-M4(d) — the sidebar self-panel's mission field renders honest-absent ∅ because STATE.md frontmatter carries no mission: key; adopted locally at M22"
tags: [backlog, upstream, state_frontmatter, mission, machine_readable, operation_luthier, archimedes]
---

# Upstream idea — machine-readable `mission:` STATE.md frontmatter key (third sibling to `phase:`/`campaigns:`)

**Ask:** add one optional frontmatter key to the STATE.md template as a fleet convention — the natural third sibling of the `phase:`/`campaigns:` keys proposed in [[idea_upstream_state_frontmatter_phase_campaign_keys]] (Home/Hestia, 2026-07-06; this idea extends that proposal, it does not duplicate it):

```yaml
mission: M22        # mission-of-record for the register's current contents
```

**Semantics (the honest-absent-preserving definition):** `mission:` = the mission the register was last updated under — it mirrors the existing `last_session:` key and is stamped whenever STATE.md is written. It is **not a liveness claim** ("a mission is running now"); between missions it simply names the state of record, exactly as `updated:` names its date. Vaults without the key stay honest-absent — never an error (the sibling proposal's derive-where-honest law applies unchanged).

**Why:** supervision surfaces that render a vault's posture need the current mission machine-readably. Evidence from Emacs.aDNA (Operation Luthier): the `adna/sidebar` self-panel's `mission` field rendered `∅` from genesis through M21 because the phase string encodes the mission only by prose convention (AAR-M4 follow-up d — honest-absent was correct, but the key's absence was the gap, not the renderer). Session logs across the fleet already carry `mission:` de facto (Emacs.aDNA sessions M11→M22); mission cards carry `mission_id:`. STATE.md — the register the collectors actually parse — is the one place the key is missing.

**Cost/shape:** one optional key; no schema break; adoption vehicle = each vault's next STATE write + the template release train, same as the siblings.

**Running on this node:** Emacs.aDNA STATE.md carries `mission: M22` as of 2026-07-19 (M22 close); the sidebar self-panel resolves it on the existing frontmatter path with zero renderer changes.

**Consumers:** Emacs.aDNA `adna/sidebar` self-panel + `adna/mcp` `read_vault_state` · Home `skill_inventory_refresh` v2 derivations (if adopted beside `phase:`/`campaigns:`) · graph_card/node_home mission field (currently honest-absent).

**Precedent:** mission-frontmatter conventions upstream cleanly — `idea_upstream_model_tier_mission_fields.md` (executor_tier/token_budget_estimated) shipped in governance v8.4.
