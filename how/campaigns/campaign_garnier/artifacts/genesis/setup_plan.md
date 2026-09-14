---
type: artifact
created: 2026-09-14
updated: 2026-09-14
status: proposed
last_edited_by: agent_codex
tags: [garnier, genesis]
---

# Setup and reproducibility plan

## Setup actually performed

[D] No package, service, credential, or connector installation was performed. Created campaign-local ignored evidence directories and used installed site dependencies, cached Lighthouse 13.4.1, existing Docker image and Bash 5.3.9. The visual wrapper may create its existing named volume and writes build/cache artifacts; its log is the installation record and must be checked for any npm-ci run.

## Exact instruments and controls

| Instrument | Pin / location | Consumer / setup | Failure control |
|---|---|---|---|
| Astro build | installed 6.1.6, site lockfile | S0/S4; npx astro build only | Existing build failure controls; observe nonzero exit and expected build artifacts. Never regenerate committed registry data. |
| Playwright | 1.59.1 in site lockfile | S0/S4/P4 | Existing gate tests; gate-49 dedicated redtest at P4 before any rebaseline. |
| Visual container | mcr.microsoft.com/playwright:v1.59.1-noble; existing image sha256:b0ab6f3cb99aa7803adbc14d9027ec1785fc6e433b97e134e0f8fe61683b6b53 | Run existing wrapper with Bash 5.3.9; do not edit it in genesis | Preserve the Bash-3 failure and Bash-5 check separately; existing seven-case visual redtest before future changed baselines. |
| Lighthouse | 13.4.1, discovered npm cache | S4; CLI writes only campaign raw evidence; do not call fixture generator | Require expected final URL, form factor and audit keys; an unreachable local URL must not be scored as success. |
| Token/reading/glossary | existing repo scripts and provider imports | S4/P1/P3; explicit --dist path | Run existing selftests; missing dist must fail, thin-prose exclusions stay visible. |
| New word/slop/term instruments | PLAN for P0, no unpinned package | Fixtures + owner file + documented exclusions before implementation | Positive and negative cases for boilerplate, quotations, split DOM nodes, code and deliberate disclosures. |
| ISS | existing Astro.aDNA runtime, source hash recorded at generation | S7; system fonts; local-only file | Check controls and output schema on scratch gate; no live ratification submission by agent. |

## Deferred setup

Unlighthouse remains PLAN until a specific existing provider pin and route configuration are selected at P4. No arbitrary latest install. Image generation remains optional, abstract-only and VisualDNA-governed; no GPU service or paid generation is started in genesis. Missing Figma/Vercel connectors are not installation requests.

## Publication boundary

No deployment, public hosting, registry regeneration, connector connection, credential retrieval, peer write, push or memo delivery. Any later setup crossing that boundary gets a separately reviewable gate. Costs are unknown where no setup has been exercised; do not convert historical Claude billing regressions into Codex actual usage.


Related: [[campaign_garnier]] · [[mission_garnier_genesis]].
