---
type: scope_note
created: 2026-07-07
mission: mission_site_story_review_charter
objective: O1
persona: agent_rosetta
tags: [scope, storyweave, o1, baseline]
---

# O1 — Baseline & scope (verified vs live)

**Currency (O1a):** `git log d687f4a..HEAD -- site/` is **empty** → the `site/` tree is unchanged since the Meridian M10 deploy; working tree clean. **Live adna.network == committed HEAD.** Spot-confirmed on live: home shows **"68 of them"** vaults + **"v2.5 Current Version"** (matches Meridian M10). Operator's conditional "deploy if a newer build exists" **did not fire** — nothing newer to deploy.

**Surfaces verified reachable (11/11, HTTP 200, 0 console errors, 741–1616 ms):**

| Surface | URL | title / h1 |
|---|---|---|
| home | `/` | The aDNA Network |
| what-is-adna | `/learn/what-is-adna` | What is aDNA? |
| get-started | `/get-started` | Get Started |
| learn | `/learn` | Learn aDNA |
| vaults | `/vaults` | The vault registry |
| vaults-graph | `/vaults/graph` | The network, drawn |
| network | `/network` | The network of aDNA computers |
| commons | `/commons` | A commons, not a catalog. |
| community | `/community` | Community |
| use-cases | `/use-cases` | Use Cases |
| reference | `/reference` | Reference |

(Full route surface = ~130 pages incl. 12 concepts · 9 tutorials · 5 comparisons · 8 patterns · ~40 vault details · 77 glossary · 6 persona hubs. The 11 above are the mission's **key surfaces**; deep pages sampled in O3/O4.)

**Dimension list (18) — confirmed unchanged** from the dossier §4. No scope drift. **Deltas from dossier:** none material — the site is at the state the dossier describes (deployed 2026-07-06). The only environmental delta this run: **Chrome MCP extension not connected** → live persona walkthrough + GIFs (motion, live mobile interaction) deferred to O4; static screenshot evidence captured via Playwright instead.

**Scope confirmed:** 18 dimensions × 11 key surfaces (+ sampled deep pages) → O2 reference (done) · O3 dimension review (done, first-pass) · O4 persona red-team · O5 storytelling · O6 synthesis · O7 charter · O8 ratification.
