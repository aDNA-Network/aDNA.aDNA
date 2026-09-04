---
type: backlog
created: 2026-09-04
updated: 2026-09-04
status: active
last_edited_by: agent_rosetta
tags: [backlog, mcp, npm, credential, adr_056, haussmann]
---

# Publish `adna-mcp-server` to npm

**Origin.** HAUSSMANN `P3.3`'s ⛩ O2 gate, **retired 2026-09-04** by operator ruling rather than
convened. The gate was not a decision being withheld — it asked for a GO on an act whose prerequisite
does not exist on this node, which is a defect in the gate (P3.3's own O0 rule, fifth instance).
Filed here so the *work* survives the gate's retirement.

## ⛔ Precondition — this is the whole reason the gate could not fire

**There is no npm identity on this node.** Re-verified `[D] 2026-09-04`:

| Probe | Reading |
|---|---|
| `npm whoami` | `ENEEDAUTH` |
| `~/.npmrc` | absent |
| npm token in env | none |
| npm row in the `Home.aDNA` broker credential index | **none** |

⇒ The first act is **credential provision, not publication**: an operator-interactive `npm login`
(browser + OTP), then a broker row so a later agent reaches it by name → env var and the value never
transits the conversation (Standing Rule 6 / ADR-007). ⛔ **Until that row exists, this item is not
agent-reachable** — and saying so here is the point, so it is not rediscovered at a third gate.

## What is already built and waiting

- `mcp/` — the package, **verified from a fresh client process**: 26 smoke assertions, 24 red-test
  mutations, all green. `prepublishOnly: npm run build` rebuilds the gitignored `dist/`.
- Package name **`adna-mcp-server`** (unscoped, ⛩ ruled at P3.3 DEFECT 1 — `@adna` scope ownership is
  unverifiable from this node; unscoped collapses the scope question into this single act).

## What is deliberately NOT shipped, and unblocks only on the publish

All four were **pre-agreed conditional** at P3.3 O3 — a descriptor naming an unpublished package is a
false claim on a machine surface:

1. `/.well-known/mcp.json` — currently **404**, correctly.
2. The `llms.txt` MCP section.
3. The homepage server line + install line.
4. `machine_eye` item 11 — **ABSENT**, and the conformance report leads with it rather than burying it.

## ⚠ Standing consequence

**ADR-056 clause 5 stays `built, not live` indefinitely.** Its ratification debt rider already reads
*"clause 5 is built and **not** live"*, so nothing in the ADR becomes false at P3.3's close. What
changed is the *kind* of not-live: it is no longer **pending a GO** but **pending a credential nobody
has scheduled**. Read the rider as the second from 2026-09-04.

## When it is taken up

1. Provision the npm credential via the `Home.aDNA` broker (Standing Rule 6); add the index row.
2. `npm login` (operator-interactive).
3. From `mcp/`: `npm run smoke && npm run redtest` — **both must exit 0**.
4. `npm publish` (⛩ outward act, its own GO).
5. **Then** ship the four deferred surfaces above, same-diff with their gate coverage (ADR-057), and
   re-probe `machine_eye` item 11 **at the live surface**, never at the prose that routed it (`F-n`).

Related: [[adr_056_agentic_surface_contract]] · [[mission_haussmann_p3_3_mcp_server]] ·
[[doctrine_credential_handling]]
