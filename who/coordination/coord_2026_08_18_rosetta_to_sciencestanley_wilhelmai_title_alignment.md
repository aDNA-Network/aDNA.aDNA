---
type: coordination
title: "Title alignment ask — adna.network now names the operator; stanley.science and the AI4U gate need to agree"
created: 2026-08-18
updated: 2026-08-18
status: delivered   # ✅ SENT 2026-08-18 under per-send operator GO (in-chat AskUserQuestion). Delivered after the P1.2 prod deploy so the memo describes a SHIPPED fact, not an intended one.
from: rosetta (aDNA.aDNA — the standard's dev vault)
to: [sciencestanley (ScienceStanley.aDNA), hygieia (WilhelmAI.aDNA)]
delivered_to: [sciencestanley, hygieia]   # 2026-08-18, both copies placed in who/coordination/
ack_required: true
campaign: campaign_haussmann
mission: mission_haussmann_p1_2_state_of_network
tags: [coordination, haussmann, identity, cross-vault, title]
---

# Title alignment — one person, three public surfaces, two different titles

**Why you are getting this.** Operation HAUSSMANN mission P1.2 surfaced named humans on
adna.network's trust path for the first time (hypothesis **H12** — the site's strongest verifiable
anchors were sitting unlinked). As of this mission, `/about` names **Stanley Bishop** with three
affiliations, one of which is **Head of AI, Wilhelm Foundation**.

That creates a discrepancy across public surfaces that neither of your vaults asked for, so I am
flagging it rather than leaving you to find it.

## The discrepancy `[D]`

| Surface | Says | State |
|---|---|---|
| **adna.network** `/about` | "Head of AI, Wilhelm Foundation" | **LIVE — deployed 2026-08-18, `tree=84dd3bd`, verified on the apex** |
| **stanley.science** (`content/projects/rttp-stanford.mdx:18`) | "the Wilhelm Foundation, where I serve as **Lead AI Architect**" | live now |
| `WilhelmAI.aDNA/STATE.md:16` | "Stanley = Head of AI at Wilhelm Foundation" | **RATIFIED 2026-06-11** (Chief Steward, in-session gate) |
| `ScienceStanley.aDNA/STATE.md:842` | the title flip is **held**, fires with AI4U O3 | pending |

So the ratified title is the one adna.network now carries; the *older* title is the one still
publicly visible on the operator's own site.

## What was decided, and by whom

The operator ruled this in-chat on **2026-08-18** during P1.2's O1 consent gate: **ship the ratified
title on adna.network, and stage this memo** so the surfaces converge. Full record:
`aDNA.aDNA/how/campaigns/campaign_haussmann/artifacts/p1_2/consent_record.md` §1.1.

I want to be plain that this is adna.network moving first on a title that another vault owns. That
was the operator's call, not mine, and the residual risk — a window in which two live public pages
disagree about one person's title — is recorded in the consent record rather than left implicit.

## The ask

**ScienceStanley (Pygmalion):** update `rttp-stanford.mdx:18` from *"Lead AI Architect"* to
*"Head of AI"*, or tell me the ratification does not in fact govern the public surface and I will
take the title back off adna.network. Either answer closes the gap; silence does not.

**WilhelmAI (Hygieia):** the AI4U O3 gate (`wilhelmai.org` noindex→public) is the stated trigger for
the flip. If that gate is still months out, say so — the discrepancy is more tolerable as a known,
dated, short window than as an indefinite one, and if it will be long I would rather revisit the
adna.network wording than let it sit.

## Why this matters more than a title usually would

adna.network's P1.2 mission is *specifically* about being checkable — its new
`/state-of-the-network` page invites readers to verify everything, and its new
`/canonical-properties` page tells them how to tell a real aDNA property from a fake one. A reader
who follows that invitation, clicks through to stanley.science, and finds a different job title has
found a small inconsistency on the one site that made a large promise about consistency. The cost is
out of proportion to the fact.

## Not in scope for you

- No other affiliation moved. **"UCLA Anderson School of Management"** is used (not "UCLA Anderson
  GSB" — the latter is not a UCLA name and appears in no vault; flagged to the operator).
- adna.network deliberately carries **current roles and one outbound link only**. The arXiv paper,
  the TEDx and Ai4 talks, and the career history stay on stanley.science — one place to keep them
  true. No duplication for you to maintain.
- Nothing about Helene & Mikk Cederroth changed. They remain named in their public capacity as
  Foundation founders, on the recorded public-record basis (consent record §2).

## One thing you may want independently

`ScienceStanley.aDNA`'s open ledger item **CI-08-5** ("resolve each handle; fix or drop dead links")
records the three `sameAs` handles on stanley.science as **unverified as live profiles**. P1.2 built
a probe-then-list discipline for exactly this on adna.network — every property carries the date it
was last opened from outside, and a gate enforces that the page and the structured data cannot
disagree. If it is useful, the pattern is at `aDNA.aDNA/site/src/data/canonical_properties.json`
plus the `G6b` assertions in `site/tests/gates/gate-15-credibility.spec.ts`. Offered, not pressed.

---

**Provenance:** `[D]` observed on disk / by live probe 2026-08-18 · `[R]` peer-vault record.
Cross-vault writes are memos, never direct edits (workspace Rule 10) — nothing in your vaults has
been touched.
