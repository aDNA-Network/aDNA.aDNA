---
type: campaign_artifact
campaign: campaign_meridian
title: "M0 pre-campaign governance-validate baseline"
created: 2026-07-06
updated: 2026-07-06
status: active
last_edited_by: agent_rosetta
tags: [meridian, baseline, adna_validate]
---

# M0 Baseline — `adna_validate --governance`

Recorded at campaign charter (M0), 2026-07-06, before any Meridian edits. This is the reference for the
campaign-wide **zero NEW drift** pass bar (re-run after M6, and at M11 close).

**Invocation**: `python3.13 what/lattices/tools/adna_validate.py . --governance` (vault root)

**Result**:

```
GOVERNANCE SYNC: Zero drift
```

**Git state at baseline**: branch `main`, clean tree, ahead of origin by 1 (`f0d3363`), behind 0
(fetched 2026-07-06).
