---
type: artifact
title: "P1.2 O1 — consent record: named humans and institutions"
campaign: campaign_haussmann
mission: mission_haussmann_p1_2_state_of_network
objective: O1
created: 2026-08-18
updated: 2026-08-18
status: resolved
last_edited_by: agent_rosetta
tags: [haussmann, p1, consent, trust, gate]
---

# P1.2 O1 — Consent record

> **Why this file exists.** The campaign directive §7 makes *"a named institution or individual appearing
> without verifiable consent"* a **halt condition**. Mission P1.2 surfaces named humans on the site's trust
> path for the first time (hypothesis **H12**). This record is the standing evidence that every name shipped
> by P1.2 has a recorded basis, and what that basis is.

## Ruling authority

**Operator (Stanley Bishop / Founding Architect), in-chat `AskUserQuestion`, 2026-08-18**, during plan
approval for the P1.2 session. The mission's O1 gate is therefore **satisfied before O0 began** rather than
halting mid-execution. Recorded here verbatim per §7.7 (agents author, operators ratify).

## 1 · The operator's own identity

| Field | Ruling | Basis |
|---|---|---|
| Name | **Stanley Bishop** | `[D]` Already public: `ScienceStanley.aDNA/site/src/utils/seo.ts:27` (`name: 'Stanley Bishop'`, schema.org Person JSON-LD), site-wide footer, and the `about.astro` title — all live on stanley.science today. |
| Affiliation 1 | **Founding Architect, aDNA** | `[D]` Already on `/about` as a role; matches repo authorship (register row **R-58**, class `verified`). |
| Affiliation 2 | **Head of AI, Wilhelm Foundation** | `[R]` Ratified `WilhelmAI.aDNA/STATE.md:16` (Chief Steward, in-session gate, 2026-06-11). **See §1.1 — conflict, ruled.** |
| Affiliation 3 | **AI-Scientist in Residence, UCLA Anderson School of Management** | `[D]` Public on stanley.science (`about.astro:205`, `ucla-venture-accelerator.mdx:3`). **See §1.2 — name correction.** |
| Depth | **Current roles + one outbound link** to stanley.science | Operator election. No arXiv / TEDx / prior-role duplication on adna.network — those live on stanley.science and stay there, so there is one place to keep them true. |

### 1.1 The Wilhelm title — conflict surfaced, operator ruled

**The conflict `[D]`.** "Head of AI, Wilhelm Foundation" is ratified in a **private** vault
(`WilhelmAI.aDNA/STATE.md:16`) but the **live public** page says something else — stanley.science's
`rttp-stanford.mdx:18` reads *"the Wilhelm Foundation, where I serve as **Lead AI Architect**."* The
title flip is explicitly **held** behind another vault's gate: `ScienceStanley.aDNA/STATE.md:842` —
*"Stanley 'Lead AI Architect'→'Head of AI at Wilhelm Foundation' title flips when it fires"*, gated on the
AI4U O3 (`wilhelmai.org` noindex→public, human-gated).

Publishing "Head of AI" on adna.network without acting would leave **two live public pages disagreeing
about the same person's title** — precisely what a hostile reader checks, and a self-inflicted instance of
the credibility gap this whole mission exists to close.

**Operator ruling: ship "Head of AI" + stage the flip.** adna.network carries the ratified title, and a
**cross-vault memo** goes to ScienceStanley and WilhelmAI asking them to align stanley.science and release
the held AI4U gate, so the surfaces agree. Memo is a P1.2 deliverable (workspace Rule 10 — cross-vault
writes are memos, never direct edits).

**Residual risk, accepted:** between this deploy and the memo being actioned, the two surfaces disagree.
Mitigation: adna.network states the *ratified* title, the memo is staged in the same session, and the
window is recorded here rather than left to be discovered.

**Publicly verifiable Wilhelm relationship that holds regardless `[D]`:** the operator is co-member and
primary maintainer of the `Wilhelm-Foundation` HuggingFace organization alongside Mikk Cederroth
(`ScienceStanley.aDNA/who/collaborators/collaborator_wilhelm_foundation.md:30`), and sole contributor to
`Wilhelm-Foundation/rare-archive` — both checkable from outside.

### 1.2 "UCLA Anderson GSB" — corrected to the real institution name

The operator's ask said *"AI-Scientist in Residence for UCLA Anderson GSB."* **"GSB" is not a UCLA name** —
UCLA's business school is the **Anderson School of Management**; "GSB" is Stanford's naming. A grep for
`\bGSB\b|Graduate School of (Business|Management)` across `ScienceStanley.aDNA/` and `Home.aDNA/` returns
**zero hits** `[D]`. Canonical vault strings are *"AI-Scientist in Residence"* + *"UCLA Anderson School of
Management"* / *"UCLA Anderson's Venture Accelerator"*.

**Shipping the correct name.** A misnamed institution on a page whose entire argument is "check us" would
be the worst possible own goal. Flagged to the operator in the plan of record for override.

### 1.3 Held or unverifiable — NOT published

Found during recon and deliberately excluded (claims move down, never up):

- **"Stanley A. Bishop"** — the middle initial's only evidence is a legacy X handle (`@StanleyABishop`). No
  vault spells out a middle name. Ship "Stanley Bishop".
- **PhD as a completed credential** — the vault records *training* ("PhD work in mathematical quantum field
  theory") with no degree-granting institution and no completion; the public site deliberately says
  *training*, and the operator's own bio says the illness struck *"during my PhD."*
- **UCLA tenure dates / "present"** — `context_project_ucla_venture_accelerator.md:14` lists as declared
  gaps: *"Exact start date"* and *"Whether the role is ongoing or term-limited (unverified as of
  2026-04-16)."*
- **Youthink Academy · Drift Biotechnologies** roles — vault-only, no public counterpart.

### 1.4 Disambiguation note (not shipped, recorded)

The operator's **grandfather was also named Stanley Bishop** (a Palo Alto community pharmacist), stated
publicly on stanley.science (`ucla-venture-accelerator.mdx:22`). Not a P1.2 concern, but anyone later
reconciling identities across properties needs it.

## 2 · The Wilhelm Foundation and its named founders

**Names in question:** Helene & Mikk Cederroth, founders of the Wilhelm Foundation. Register row **R-59**,
class `verified`.

**Status when P1.2 opened: already live.** They are named *today* on `/about` and on `/commons` (via
`subnetworks.json` `attribution` → `SubnetworkCard` + `today-facts`). This is therefore a **standing
exposure to be adjudicated**, not a prospective addition — and adjudicating it is exactly what §7 asks for.

**Operator ruling: public record is sufficient — keep.**

**Recorded basis `[R]`:** both names are published by the Foundation itself at wilhelmfoundation.org/about-us
and independently at chanzuckerberg.com/rao/wilhelm-foundation. These are public figures in their capacity
as named founders of a public foundation, published by that foundation. Naming them in that capacity, with
the relationship stated at its true strength, is supported by the public record.

**Directive §7 disposition: satisfied, not tripped.** The condition is *"appearing without verifiable
consent"*; the appearance has a verifiable public basis, now recorded rather than assumed.

**Scope limit — the discipline that keeps this honest.** They are named **only in their public capacity as
Foundation founders**. P1.2 adds no personal detail, no contact route, no quote, no implied endorsement of
aDNA. The relationship's true strength is stated as the register already has it: the Foundation is a real
anchor partner and hosts `rare-archive` in its own GitHub organization; **no public statement from the
Foundation about aDNA specifically exists** (register R-59: partnership depth is `[I]` from the repo
hosting). The site must not imply otherwise.

**Considered and not taken:** staging a courtesy notice to the Foundation. The operator elected the
public-record basis alone. Available as a follow-up if the relationship deepens or the naming widens.

## 3 · Third parties NOT named by P1.2

No other individual is named on any P1.2 surface. Where a person could otherwise appear:

- **Vault personas** (Rosetta, Hestia, Argus…) are AI agents, not people. `/about` already says so plainly
  and explains why (register row **R-61**) — P1.2 keeps that disclosure and does not dilute it.
- **`rare-archive` contributors** — the state-of-network page states that every commit came from the same
  person who operates this network. That is the operator, self-disclosed. **No other contributor is named**,
  and no contributor count is displayed (directive §8 — no vanity metrics, in either direction).

## 4 · Standing conditions on this record

1. If the Wilhelm Foundation asks to be unnamed or renamed, that request **overrides this record** — act
   first, adjudicate after.
2. Any P2+ mission widening the naming (a person newly named, a quote attributed, an endorsement implied)
   **re-opens O1** and needs its own record. This one covers exactly what P1.2 ships.
3. The §1.1 title window closes when the ScienceStanley/WilhelmAI memo is actioned. Until then the
   disagreement is known and recorded, not discovered.

---

**Provenance:** `[D]` directly observed on disk or by live probe 2026-08-18 · `[R]` third-party public
record · `[I]` inferred. Operator rulings are primary authority per §7.7.
