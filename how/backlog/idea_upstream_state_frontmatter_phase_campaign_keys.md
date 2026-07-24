---
type: backlog_idea
idea_class: upstream_contribution
from_vault: Home.aDNA
from_persona: hestia
created: 2026-07-06
updated: 2026-07-24
status: resolved   # SHIPPED at v8.7 (Operation Cleanroom, 2026-07-13, item 2) — verified live in .adna/STATE.md frontmatter (phase: + campaigns: seeded); closed at Refit M5 vNext triage 2026-07-24
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

## Disposition — Refit M5 vNext triage (2026-07-24) · **CLOSE-AS-SHIPPED**

**Ruling: factual close (no G2 decision needed).** The two optional keys shipped at **v8.7** (Operation Cleanroom,
2026-07-13, item 2) and are **live in `.adna/STATE.md`** frontmatter right now (verified 2026-07-24):

```yaml
phase: "production"        # optional · machine-readable one-line current phase (honest-absent if omitted)
campaigns: []              # optional · active campaign ids (machine-readable list; honest-absent → [])
```

Every new fork inherits them; the schema is permissive (`additionalProperties: true`) so no schema break shipped.
`status: proposed → resolved`. **The `mission:` key** ([[idea_upstream_mission_frontmatter_key]], Archimedes) is the
natural **third sibling** and is NOT yet shipped → it carries forward as a v8.9 roadmap item, batched with the
phase-display grammar. See [[vnext_roadmap]] §Closed-as-shipped + §v8.9 (STATE-convention family).
