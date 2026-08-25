---
type: evidence
packet: machine_eye_delta
campaign: campaign_haussmann
mission: mission_haussmann_p2_6_midscore
objective: O0
title: "Machine-eye delta — production, 2026-08-19 (vs the 2026-08-16 baseline pack d58ea13)"
created: 2026-08-19
updated: 2026-08-19
status: active
last_edited_by: agent_rosetta
probe_target: https://adna.network
tags: [evidence, haussmann, p2_6, machine_eye, d10]
---

# Machine-eye delta — D10 (machine legibility & agent-readiness)

All rows `[D]` — live production probes run 2026-08-19, after the P2.5 deploy (`tree=db4b34f`).
Baseline for comparison: the genesis machine-eye packet in `evidence/machine_eye/machine_eye.md`,
pinned at `d58ea13`.

## Result: one item moved, and it moved *before* the mission that was scoped to move it

| Probe | Baseline (2026-08-16) | Now (2026-08-19) | Δ |
|---|---|---|---|
| `.md` twins (`/get-started.md`, `/about.md`, `/learn/what-is-adna.md`) | 404 | **404 ×3** | — |
| Registry JSON (`/vaults.json`, `/api/vaults.json`, `/registry.json`) | 404 | **404 ×3** | — |
| MCP descriptor (`/.well-known/mcp.json`) | 404 | **404** | — |
| `Accept: text/markdown` negotiation on `/about/` | serves HTML | **serves `text/html; charset=utf-8`** | — |
| `/llms.txt` | 200 | **200, 2,057 bytes** | — |
| `/llms-full.txt` | "a 2 KB index wearing a corpus name" | **200, 2,476 bytes** — still an index, not a corpus | — |
| llms.txt referenced in site HTML | 0 | **0 across `/`, `/get-started/`, `/about/`** | — |
| `Organization` structured data | *"no Organization JSON-LD anywhere sitewide, no sameAs, no Dataset"* (P3.2 scope) | **present as `WebSite.publisher`, with `sameAs` ×2** | ▲ **moved** |
| `Dataset` structured data | absent | **absent** | — |

## The one delta, attributed

`site/src/utils/seo.ts` emits a single `ld+json` block per page: `@type: WebSite` carrying a nested
`publisher` of `@type: Organization`, with `sameAs: [community.adna.network, github.com/aDNA-Network]`.

**Attribution: P1.2** (`mission_haussmann_p1_2_state_of_network`). `git log -S'sameAs' -- site/src` returns
`099e557` / `9e0fd06` / `eff6670`, all P1.2 commits, and the source says so in its own comment
(`seo.ts:11` — *"HAUSSMANN P1.2 added `sameAs` — the machine-readable half of the §7.1 clone-site
defense"*). It was a side effect of canonical-identity single-sourcing, not of any D10 work.

**Consequence for the re-plan**: P3.2's acceptance criterion reads *"Organization+sameAs on every page,
Dataset on registry"*. Half of that already shipped, unremarked, at P1.2. P3.2's scope **shrinks** —
what remains is `Dataset` on the registry, the versioned JSON endpoint, schema-dts in the build, and
the three zero-JSON-LD pages. This is the "scope goes down as often as up" case the Storyweave
precedent warns to look for.

Caveat kept on the record: the Organization is **nested as `publisher`**, not a top-level entity.
Whether that satisfies P3.2's intent is a scoring/scope judgment, not a fact — recorded here as the
measurement, and left to the scorers and the re-plan to weigh.

## Two measurement artifacts caught in this probe — method notes, not site findings

Both are recorded because the campaign's law cuts both ways: an instrument that misreports the site
is the same defect class as a page that misreports itself.

1. **`grep -c` counts matching *lines*, not occurrences.** Served HTML is effectively one long line,
   so `grep -c "$s"` returns `1` for "at least one match somewhere on the page" and `0` otherwise —
   it cannot distinguish one occurrence from twenty, and it silently reads as a count. The first pass
   of this probe used it and produced two apparent regressions (R-118's `no projects yet`, R-119's
   `onboarding interview`) that a Python `re.finditer` pass showed to be **one legitimate occurrence
   each, both correct copy**. Use occurrence counting with context extraction, never `grep -c`, on
   single-line HTML.
2. **String presence ≠ entity presence in JSON-LD.** Grepping for `"@type": "Organization"` matched —
   but the match was a *nested* `publisher`, not a top-level Organization. A probe that greps the raw
   HTML will report an entity the parsed graph does not have at the level claimed. Parse the
   `ld+json` blocks and inspect `@type` per node.

Both belong in the campaign's probe discipline; routed to the re-plan as a floor-raise for the
gate/probe toolkit.
