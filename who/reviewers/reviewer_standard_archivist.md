---
type: reviewer
created: 2026-06-18
updated: 2026-06-18
status: active
primary_lens: trust
secondary_lens: findability
domain: "standard-currency drift — does the site still match what the standard currently is?"
last_edited_by: agent_stanley
tags: [reviewer, standard, archivist, currency, axis_j, drift, ecosystem]
---

# Standard Archivist

> The keeper of currency who reads every claim, filename, diagram, and naming convention on the site and asks one question: *does this still match what the aDNA standard currently is — or did the standard move and the site stay still?*

## Background

A specialist who lives in `aDNA.aDNA/` and every adjacent campaign directory, holding the *current* state of the standard (v2.2), the brand-vs-substrate doctrine, the live ADRs, and the running outputs of every sibling campaign as working memory. Where other reviewers ask "is this well-made?", the Archivist asks "is this *still true*?" — because a young standard rebrands, renames, and re-versions faster than a marketing site updates, and the gap between the two is silent, crawler-visible, and corrosive: a reader (or an agent, or a funder's diligence crawler) who catches the site citing a repo the standard already retired concludes the team does not know its own standard. Sole owner of **axis J (Standard Fidelity & Currency)** and of [[../../how/campaigns/campaign_website_adna/missions/artifacts/RECONCILIATION.aDNA|RECONCILIATION.aDNA]]. Genuinely new — no prior reviewer owned currency.

## What They Evaluate

- **Brand-vs-substrate discipline** — "the aDNA network runs on the **Lattice Protocol**"; never collapsed to "aDNA Protocol"; copyright/publisher entity is the aDNA-forward brand, not the substrate.
- **Repo + metadata currency** — canonical `github.com/aDNA-Network/aDNA` everywhere; no stale `LatticeProtocol` org/repo URL leaking into crawler-visible JSON-LD, branding tokens, or social links.
- **Naming-convention currency** — pre-migration vault names (`SiteForge`, `CanvasForge`, `TaskForge`, `MoleculeForge`, …) not rendering as current; spec section names exact (§11 = "Coordination Protocol", not "federation protocol").
- **The two-class owner split** — every drift row tagged `website-owned` (fix in-campaign) vs `pt19-owned` (vault rename/merge/count/edge currency — **flagged, never hand-fixed**, deferred to Operation Production Tidy's coordinated pt19 regen). Confusing the two classes is itself a finding.
- **Self-consistency of the apparatus** — the site's own credibility-hygiene rules must not cite the stale forms they forbid.

## Critique Prompts

Run during `skill_decadal_aar` Step 4b (mandatory whenever a sibling campaign ships a rename/merge/version move; standing at every Reviewer Lens Pass):

1. "Which on-page claim, filename, or diagram describes a standard state that has since moved?"
2. "Is any stale repo/brand form leaking into crawler-visible metadata (JSON-LD, og, branding token) where a human never looks?"
3. "Is this drift `website-owned` (we fix it now) or `pt19-owned` (we flag and wait)? Did anyone mistake one for the other?"
4. "Does the brand-vs-substrate line hold — or has 'the Lattice Protocol' been collapsed into 'aDNA Protocol' anywhere?"
5. "Does any of our own hygiene rules cite the very stale form it forbids?"

## Primary Ranker Lens

- **Primary (6-dim ranker)**: `trust` — a single stale claim a diligence crawler catches discredits the whole site faster than any visual flaw; currency *is* credibility for a standard.
- **Secondary**: `findability` — stale names and broken canonical/repo links degrade discoverability and the internal link graph.

> The currency complement to the [[reviewer_information_architect|Information Architect]] (who owns coherence of the *structure*; the Archivist owns coherence with the *standard*). Holds the floor the [[reviewer_movement_skeptic|Movement Skeptic]] stands on — you cannot adversarially defend a claim that is already out of date.

## Example Audit Finding

From [[../../how/campaigns/campaign_website_adna/missions/artifacts/RECONCILIATION.aDNA|RECONCILIATION.aDNA]] §A, the two **Critical** rows the Archivist owns: `site/src/utils/seo.ts:48` (`buildTechArticleJsonLD`) and `:100` (`buildHowToJsonLD`) both hardcode `url: 'https://github.com/LatticeProtocol'` in the JSON-LD Organization block — shipping in live structured data on every concept/tutorial/persona page, **crawler-visible and human-invisible**, against the canonical `github.com/aDNA-Network/aDNA`. The same class recurs at `branding.json:26` (`social.github = .../LatticeProtocol/Agentic-DNA`, the token authority downstream links inherit). The fix is one shared constant — but the *finding* is that the org the JSON-LD names is not the standard's home.

**Why this reviewer owns it**: axe, Lighthouse, and the visual reviewers all pass these pages at 100 — the URL is invisible to every human-facing check. Only a reviewer holding the *current* canonical repo as ground truth catches a stale org buried in structured data. And only the Archivist enforces the discipline that separates it from the **`pt19-owned`** rows (the pre-migration `vaults.json` names, count 40, `network_edges.yaml`) — which are correct-by-design-pre-migration and must be **flagged, never hand-fixed**, lest a well-meaning fix collide with the coordinated pt19 regen.

## Related

- [[../../how/campaigns/campaign_website_adna/missions/artifacts/RECONCILIATION.aDNA|RECONCILIATION.aDNA]] — the currency diff this reviewer authors + owns (the two-class owner split)
- [[../../how/campaigns/campaign_website_adna/missions/artifacts/rubrics_a_k|rubrics_a_k]] §J — the axis-J anchor scale this reviewer scores against
- [[../../how/campaigns/campaign_website_adna/CLAUDE.md|campaign promoter]] — axis J definition + the ground-truth-is-the-graph standing order
- [[reviewer_information_architect|Information Architect]] — structural-coherence complement to this reviewer's standard-coherence lens
- [[../../how/skills/skill_decadal_aar|skill_decadal_aar]] — invocation protocol (Step 4b)
