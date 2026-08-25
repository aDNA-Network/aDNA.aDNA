---
type: artifact
title: "P1.2 O3 — visual evidence set (T0 headless captures)"
campaign: campaign_haussmann
mission: mission_haussmann_p1_2_state_of_network
objective: O3
created: 2026-08-18
updated: 2026-08-18
status: active
last_edited_by: agent_rosetta
tags: [haussmann, p1, evidence, captures, a11y]
---

# P1.2 visual evidence

Captured with the canonical T0 harness (`scripts/visual_capture.mjs`, headless Playwright — never a
logged-in Chrome; [[doctrine_visual_inspection]]) against a local preview at
`http://localhost:4402`, tree `9e0fd06`, 2026-08-18.

**4 surfaces × 6 viewports × 2 themes = 48 captures**, plus two axe reports.

| Surface | Why captured |
|---|---|
| `/state-of-the-network/` | new — the dated four-strata disclosure |
| `/canonical-properties/` | new — the §7.1 clone-site defense |
| `/` | the hero proof-of-life re-placement + the manifesto reframe |
| `/about` | the named human + band 4's rebuild |

## Accessibility result

**axe: 0 violations on all four surfaces, in BOTH themes.** Zero console errors.

`--axe` covers `themes[0]` only, so the harness was **run twice** — once with `--themes dark`, once
with `--themes light`. Results: `capture_report.json` (dark) and `capture_report_light.json` (light).
A single run reporting "axe 0" would have covered only half the site's palette; this is the standing
trap in this instrument.

## What is committed, and what is not

Committed: the **three cited captures** below plus both axe reports (≈2.6 MB).

| File | The finding it evidences |
|---|---|
| `home__desktop__dark.png` | proof block now renders **above** the stat strip, carrying the disclosure sentence and both links — the Berthier placement item and §7.3's line-of-sight requirement, in one frame |
| `state-of-the-network__desktop__dark.png` | all four strata render; derived counts correct (74 / 15 / 14 / 59 / 57-10-7); horizon callout intact; both new footer links present |
| `canonical-properties__mobile__light.png` | **320px** — the label/value grid collapses to one column and long repository names wrap; no horizontal overflow. This is the width the design avoided a `<table>` for |

**Not committed:** the remaining 45 PNGs (≈28 MB) stay on disk, uncommitted. They exist and were
reviewed; committing a full 6-viewport × 2-theme set per mission is what put ~72 MB of capture sets
in this campaign's tree and triggered the still-open ⛩ evidence-retention ruling. Until that ruling
lands, this mission follows the P1.1 precedent: **commit the subset the record actually cites**,
leave the rest recoverable by re-running the harness — which is cheap, deterministic
(`reducedMotion` is pinned), and reproducible from the tree hash above.

Re-run:

```
node scripts/visual_capture.mjs --base http://localhost:4402 \
  --routes /state-of-the-network/,/canonical-properties/,/,/about \
  --viewports all --themes dark --axe --out <dir>
```

…then again with `--themes light --report <dir>/capture_report_light.json`.
