---
type: backlog_idea
idea_class: upstream_contribution
from_vault: Home.aDNA
from_persona: hestia
created: 2026-07-06
status: proposed
target: "STATE.md template frontmatter (.adna base + template_state) — fleet convention"
origin: "Home ADR-007 (inventory_vaults row-schema v2, Hearthfire P1 2026-07-06) — the derive-where-honest population law for phase/campaigns"
tags: [backlog, upstream, state_frontmatter, phase, campaigns, machine_readable, inventory_v2, graph_card, hearthfire, hestia]
---

# Upstream idea — machine-readable `phase:` / `campaigns:` STATE.md frontmatter keys (fleet convention)

**Ask:** make two frontmatter keys a fleet convention in the STATE.md template:

```yaml
phase: "P4 — fleet rollout"        # one line, current phase, machine-readable
campaigns: [campaign_fleet_home_pages, campaign_node_hub]   # active campaign ids
```

**Why:** Home's inventory row-schema v2 (ADR-007) enriches the 68-row `inventory_vaults.yaml` — the weave source for WebForge's shipped `graph_card`/`node_home` hub surfaces — under a **derive-where-honest law**: `phase`/`campaigns` populate ONLY from machine-readable STATE frontmatter; prose banners are never parsed (WebForge's own OQ-3 counsel — build-time STATE-prose parsing is unreliable). Today almost no vault carries these keys, so the hub renders those fields honest-absent. With the convention in the template (+ adopted opportunistically at each vault's next STATE touch), coverage grows fleet-wide with **zero hand-maintenance in Home's inventory** — refresh derives it.

**Cost/shape:** two optional keys; no schema break; vaults without them stay honest-absent (never an error). Natural adoption vehicles: the template release train, per-class frontmatter profiles (ADR-044's lane), and each campaign's next STATE write.

**Consumers:** `skill_inventory_refresh` v2 derivations (Home) → `inventory_vaults` rows → graph_card `phase`/`campaigns` fields + any future Surface API `/state` projection (which these keys also feed cleanly).

**Sibling idea filed the same session:** `idea_upstream_node_manifest_interview_emission.md`.
