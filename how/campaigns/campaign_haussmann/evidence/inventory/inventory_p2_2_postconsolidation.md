# P2.2 O3 — local page inventory (post-consolidation)

Source: `site/dist` (local build, NOT production — P2.2 is undeployed). Instrument:
`how/campaigns/campaign_haussmann/artifacts/p2_2/crawl_local_inventory.mjs`. All [D].

## 0. Scope

- Built pages: **194**
- Reachable from `/` by internal-link BFS: **194**
- Max depth: **3**

## 1. Orphans (built but unreachable from home)

None.

## 2. Duplicate `<title>`

None.

## 3. Duplicate `<h1>`

- "aDNA" — `/glossary/glossary-adna/`, `/vaults/adna/`

## 4. High-value reachability (≤2 clicks from home)

| page | built | depth | ≤2 clicks |
|---|:---:|:---:|:---:|
| `/get-started/` | yes | 1 | YES |
| `/learn/what-is-adna/` | yes | 1 | YES |
| `/reference/specification/` | yes | 1 | YES |
| `/vaults/` | yes | 1 | YES |
| `/vaults/graph/` | yes | 1 | YES |
| `/community/` | yes | 1 | YES |
| `/glossary/` | yes | 1 | YES |
| `/changelog/` | yes | 1 | YES |
| `/network/` | yes | 1 | YES |
| `/commons/` | yes | 1 | YES |

**10/10** high-value pages reachable in ≤2 clicks.

## 5. Internal links with no built target

- `/patterns/content-as-code/` ← 1 page(s), e.g. `/glossary/glossary-content-as-code/`
- `/vaults/Astro.aDNA/` ← 1 page(s), e.g. `/`
- `/vaults/ContextCommons.aDNA/` ← 1 page(s), e.g. `/commons/`
- `/vaults/Harness.aDNA/` ← 1 page(s), e.g. `/`
- `/vaults/III.aDNA/` ← 1 page(s), e.g. `/`
- `/vaults/Molecules.aDNA/` ← 1 page(s), e.g. `/`
- `/vaults/Oration.aDNA/` ← 1 page(s), e.g. `/`
- `/vaults/RareArchive.aDNA/` ← 2 page(s), e.g. `/commons/`
- `/vaults/RemoteControl.aDNA/` ← 1 page(s), e.g. `/`
- `/vaults/TappProtocol.aDNA/` ← 1 page(s), e.g. `/`
- `/vaults/VAAS.aDNA/` ← 1 page(s), e.g. `/`
- `/vaults/WilhelmAI.aDNA/` ← 2 page(s), e.g. `/commons/`
- `/vaults/aDNA.aDNA/` ← 1 page(s), e.g. `/`
- `/vaults/wga.aDNA/` ← 1 page(s), e.g. `/commons/`

