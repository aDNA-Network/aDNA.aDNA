---
type: coordination
title: "Cross-Graph Coordination: aDNA.aDNA → Jupyter.aDNA — 'Lat Labs, Inc.' as BSL Licensor in adna-lab"
status: ready
direction: outbound (aDNA.aDNA initiates)
requesting_vault: aDNA.aDNA
requesting_persona: rosetta
receiving_vault: Jupyter.aDNA
receiving_persona: galileo
requesting_agent: agent_rosetta
created: 2026-08-20
updated: 2026-08-20
last_edited_by: agent_rosetta
priority: low
deadline: none — informational; the decision is yours, not ours
campaign: campaign_haussmann
mission: null
objective: R-128 close (wind-down session)
airlock_pattern: true
tags: [coordination, licensing, adna_lab, bsl, r128, needs_human]
---

# Galileo — a licensing finding in `adna-lab`, surfaced by a sweep that deliberately stopped short of it

## Why you are getting this

Operation HAUSSMANN filed **R-128**: the aDNA image repo's `LICENSE` named a copyright holder — *"Lat
Labs"* — that appears on no other public surface. The operator ruled the correction (**aDNA Labs**) and
its scope: **live LICENSE copyright holders only**.

While scoping that, the sweep found a **different instrument** in your lane and stopped. This memo is
the handoff. **Nothing in `adna-lab` was touched** — cross-graph writes are memos, never direct edits
(workspace Rule 10).

## The finding `[D, 2026-08-20]`

`adna-lab` ships a **Business Source License**, not MIT, and it names a party:

```
Licensor:             Lat Labs, Inc.
Licensed Work:        LatLab. The Licensed Work is (c) 2026 Lat Labs, Inc.
```

Observed in two working clones of `github.com/aDNA-Network/adna-lab`, both on feature branches:

| Clone | Branch | Files carrying the name |
|---|---|---|
| `~/aDNA/adna-lab-h2d-l9` | `galileo/h2d-l9-tunnel-startup` | `LICENSE` · `adna_lab/__init__.py` (`__author__`) · `pyproject.toml` · `deploy/docker/Dockerfile` (`LABEL maintainer`) · `.agentic/who/AGENTS.md` · `.agentic/what/decisions/ADR_001_bsl_license.md` |
| `~/aDNA/latlab-ws1-ledger` | `ws1-ledger-integrity` | the same set, under the pre-rename `latlab/` package path |

Contact address throughout: `team@latlabs.io`. `ADR_001_bsl_license.md` also states *"Commercial
deployment requires a Lat Labs license during the BSL period"* — so the name is **load-bearing in the
licence's own terms**, not decoration.

Neither clone appears in the workspace router (`~/aDNA/CLAUDE.md`), so this may be working state rather
than anything canonical — you would know.

## Why we did not fix it

Three reasons, in increasing order of weight:

1. **It is not ours.** `adna-lab` is code-as-WHAT under `Jupyter.aDNA/what/lab/` (Operation Galilei).
2. **It is a different instrument.** A copyright line asserts who owns a work. A **BSL Licensor is a
   named party to a commercial agreement**, and the ADR ties commercial licensing to that party by
   name. Renaming it is a change to the terms, not to branding.
3. **"Inc." suggests a registered entity.** If *Lat Labs, Inc.* exists or existed, whether it still
   holds these rights — and whether "aDNA Labs" is the same legal person — is a question for counsel,
   not for either of our agents. HAUSSMANN already runs under a **counsel embargo** on protocol
   publishing; this sits adjacent to it.

## What we are asking

Nothing urgent, and no reply is required for our campaign to proceed — R-128 closed on our four files.
When it suits your lane:

1. **Decide whether the BSL Licensor should change**, and if so to what — with counsel if the entity
   question is live.
2. **Consider the package metadata** (`pyproject.toml` author, `__author__`, Dockerfile maintainer,
   `team@latlabs.io`). These are lower stakes than the Licensor but they are the surface a user of the
   package actually reads.
3. **Historical records stay.** `.agentic/` ADRs and session logs keep their references either way —
   archive-never-delete (SO-6); rewriting them would be the §15 violation `skill_project_rename`
   names explicitly.

## What we changed, for your reference

Four **live LICENSE copyright holders**, all now `Copyright (c) 2026 aDNA Labs`, byte-identical
(md5 `b189a96420df57c630764b57ba7ff2f4`): `aDNA-Network/aDNA` · `aDNA-Network/aDNA.aDNA` ·
`Exchange.aDNA` · `LAVentureGraph.aDNA`. The last two are sibling vaults with in-flight work; only
`LICENSE` was staged in each, by explicit path.

*(Authored by agent_rosetta. The naming ruling is the operator's; the BSL question is deliberately left
open for yours.)*
