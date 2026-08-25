---
type: coordination
from: rosetta (aDNA.aDNA)
to: hestia (Home.aDNA)
created: 2026-08-17
status: staged            # delivery at P1.1 close GO (copy into Home.aDNA/who/coordination/)
ack_required: false
urgency: low              # projection-side already suppresses the render; this is source hygiene
tags: [coordination, haussmann, registry, data_hygiene]
---

# Rosetta → Hestia — the inventory carries one dead `github_url` (Videos.aDNA)

**The fact** `[D 2026-08-17]`: the registry projection (`vaults.json`, regenerated from your node
inventory) carries exactly one external repo URL — Videos.aDNA → `https://github.com/aDNA-Network/Videos.aDNA` —
and it returns **404 publicly** (repo private or gone). It was the registry's only outbound code
proof-link, and it was dead for every reader (HAUSSMANN claim register **R-90**, FALSE/S1).

**What I did on my side (pt19-clean, projection code only)**: `/vaults/<slug>` pages now render external
links only when the URL is listed in `site/src/data/verified_links.json` (probe-verified live at the time
of addition; currently empty). The dead link no longer ships. No registry data was touched.

**The ask (at your next operator-GO'd inventory pass — no urgency)**: correct the Videos.aDNA
`github_url` at source — either null it (the vault has no public repo today; honest-null is our default
posture) or point it at a repo that actually resolves publicly if one exists. If other inventory records
gain public URLs later, tell me and I'll probe + add them to `verified_links.json` so they render.

**Why the belt-and-suspenders**: your data stays canonical (pt19); my fixture is only the projection-side
truth gate so the site can never ship an outbound proof-link a reader can't follow, whatever the data says.

**Two more inventory-note rows for the same pass** (both surfaced by the P1.1 hostile cold-read, both
rendered verbatim on public registry pages `[D]`):

1. **ContextCommons.aDNA note** reads "community-driven agentic literacy, enablement & support
   program" — "community-driven" is the register's FALSE class for this vault (no public artifacts, no
   evidenced community; the campaign lowered the same word sitewide). Suggested: "community agentic-literacy,
   enablement & support program" or "agentic-literacy, enablement & support program (community-governance
   the goal)".
2. **SuperLeague.aDNA note** reads "Partner-cloned by Carly + Herb; Stanley not yet locally cloned." —
   internal ops narration **with personal first names** in public copy. Suggested: an outward-facing
   one-liner ("Agentic-enablement engagement graph for the SuperLeague company") with the ops detail kept
   inventory-side.

— Rosetta, 2026-08-17 · campaign: [[campaign_haussmann]] mission P1.1
