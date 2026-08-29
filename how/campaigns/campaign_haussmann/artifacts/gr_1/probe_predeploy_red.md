---
type: artifact
artifact_class: deploy_probe_record
campaign: campaign_haussmann
operation: operation_grande_revue
mission: mission_haussmann_gr_1_trust_path
phase: GR
title: "GR-1 live probe — PRE-DEPLOY run against production (red-proof)"
created: 2026-08-28
updated: 2026-08-28
status: active
last_edited_by: agent_rosetta
session: session_stanley_20260828_193824_haussmann_go_gate_push
tags: [artifact, haussmann, gr_1, deploy_probe, red_proof]
---

# GR-1 live probe — PRE-DEPLOY run against production (red-proof)

Run **2026-08-29T02:4xZ** against `https://adna.network`, **before** the GR-1 deploy.
Alias serving **`51af717`** at the time of the run (stamp re-read, not quoted forward).

**Purpose: prove the probe discriminates.** Every FAIL below is a GR-1 deliverable; the 13 PASSes are
assertions that already held. ⭐ That mix is what makes this a red-**proof** rather than a probe that
merely fails at everything — P3.5's finding was that *a red run is the only moment an assertion's
vacuous branch is exercised*, after its probe "passed 2 checks against a site without the feature".

**Post-deploy the same script must return 26 PASS / 0 FAIL.**

```
HAUSSMANN GR-1 live probe → https://adna.network
================================================================

alias is serving: 51af717

  PASS  / responds 200
  PASS  the BaseLayout stylesheet is linked from /
  FAIL  served stylesheet carries no inlined font — found 1
  PASS  /get-started/what-your-agent-reads/ responds 200
  FAIL  cites release v8.9, not a bare commit sha
  FAIL  no 40-hex commit sha in a source link
  PASS  the page publishes its source links — found 2
  FAIL  source link resolves publicly (404) — …/tree/0364d85cba4253e1234178a61abba0e551dd79e2/.adna — HTTP 404
  PASS  /get-started.md responds 200
  FAIL  the twin carries the <name> placeholder
  FAIL  the check command is intact, not collapsed to ~/aDNA/.aDNA
  FAIL  the explanatory sentence is not an empty code span
  FAIL  the unscoped "Nothing is sent anywhere" is gone
  PASS  the agent step is disclosed (Anthropic named)
  FAIL  the command count is corrected to three
  FAIL  the wrong count "except the last two" is gone
  PASS  /reference/ responds 200
  FAIL  the card reads "Visual Identity v2"
  FAIL  the mislabelled "Visual Identity v3" is gone
  PASS  /llms.txt responds 200
  FAIL  the present-tense protocol claim is absent
  PASS  the derived counts survived the rewrite
  PASS  /privacy/ responds 200
  PASS  /accessibility/ responds 200
  PASS  /api/registry.v1.json responds 200
  PASS  the build stamp is readable

================================================================
  13 PASS / 13 FAIL   (alias serving 51af717)
================================================================
```

## What the red run independently confirms about the live site

These are not predictions carried from the mission record — they are **production, measured now**:

- **The provenance pin is dead in public.** `…/tree/0364d85cba…/.adna` returns **HTTP 404** from
  `adna.network`'s own published link. P1-3 is live at this moment.
- **The twin still serves corrupted commands** — no `<name>`, the collapsed `~/aDNA/.aDNA/what`, and
  the empty code span in *"Replace `` with…"*.
- **The unscoped privacy claim is still live**, next to a command that ends `&& claude`.
- **The stylesheet still inlines a font** the production CSP refuses.

## What the PASSes prove — the half that is easy to skip

⭐ **13 controls passing is what separates this from a broken script.** `/privacy/`,
`/accessibility/` and `/api/registry.v1.json` all answer 200; the build stamp is readable; the
`llms.txt` derived counts are intact; `/reference/` and `/get-started.md` both serve. So each FAIL
above is a statement about **the specific claim**, not about the probe's ability to reach the site.

⚠ **One PASS is worth naming because it is a partial:** *"the agent step is disclosed (Anthropic
named)"* passes **pre**-deploy. `/get-started.md` already mentions Anthropic in its prerequisites
callout. That assertion is therefore **weak on its own** — it is the *scope clause* that is new, and
the load-bearing assertion for it is the adjacent `"Nothing is sent anywhere" is gone`, which fails
correctly. Recorded rather than left for a reader to mistake for coverage.

## Surface discipline (convention 17, 2026-08-26 amendment)

Each assertion picks the surface matching its claim's **verb**, and says so in the script:

| Claim shape | Surface used | Why |
|---|---|---|
| a reader encounters this sentence | the `.md` **twin** | Astro splits phrases across source line breaks; a literal HTML match reports a live sentence ABSENT — **this campaign shipped exactly that false negative at P4.5b** |
| the DOM contains this label | **HTML** (`/reference/`) | it is a rendered card label, not prose |
| the served CSS contains this byte | the **served stylesheet**, fetched by href | not the source, which is not what production serves |
| this URL resolves for a stranger | **GitHub itself**, `HEAD` request | the entire defect was a pin that resolved locally and nowhere else — a local check would reproduce the original error |

## Next

⛩ **The deploy GO is the operator's and has not been taken.** On GO:
`site/scripts/deploy_adna.sh prod` → re-run this probe → expect **26 PASS / 0 FAIL** → record the
result at `probe_postdeploy_green.md`, the deploy ID in the session log **and** `STATE.md`, and
re-read `/.well-known/adna-build.json` to confirm the alias moved.
