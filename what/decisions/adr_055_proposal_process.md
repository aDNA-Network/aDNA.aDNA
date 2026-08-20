---
type: adr
adr_number: "055"
title: "The aDNA proposal process: numbered, stated, archived, machine-indexed"
status: accepted   # ⛩ RATIFIED 2026-08-20 at P3.5 O0 (operator, in-session AskUserQuestion) — see the Ratification block
created: 2026-08-16
updated: 2026-08-20
last_edited_by: agent_rosetta
campaign_id: campaign_haussmann
supersedes: ""
superseded_by: ""
tags: [adr, haussmann, proposals, governance, d8, d9]
---

# ADR-055 — Numbered proposal process

## Status

**Accepted** — ⛩ ratified 2026-08-20 at mission **P3.5 O0**. Anatomy fixed at genesis from exemplar
evidence (2026-08-16); the constitution below authored at P3.5 and ratified there. The genesis Context and
Decision-space sections are preserved unedited; §§1–8 are the completion.

## Context

No public proposal process exists (H15) — the largest governance gap vs the Archetype-B reference: MCP scored **D8 = 5** from both cohort scorers on its 8-state SEP process with conformance gates `[D cohort]`. The proven anatomy across PEPs / TC39 / EIPs `[D dossier]`: **immutable numbers** · a public **status machine including terminal states** · **tables-first** archive surfaces · **author/champion credit** · a **self-describing constitution** (PEP-1 pattern) · a **machine-readable index**. The vault already runs a rigorous internal decision system (ADRs + §7.7 ratification) — the public process is its community-facing sibling.

## Decision space

1. **Name + numbering**: e.g. "AEP" (aDNA Enhancement Proposal), numbers immutable once assigned.
2. **States**: draft → review → accepted → final, + rejected/withdrawn/superseded (terminal states visible — honesty about outcomes).
3. **Who files + where discussed**: anyone via the repo (template + the P1.1 channels); agent authors disclosed, with human ratification required for acceptance (the vault's own doctrine, made public policy — the D8 check-12 differentiator).
4. **Relationship to internal ADRs**: ADRs govern this vault; AEPs govern the standard's public evolution; a ratified AEP may spawn implementing ADRs.
5. **Honest-youth posture**: the constitution states current occupancy plainly (7.2's correction — "the process is new; numbers 2+ are unassigned" is credible, silence is not).

## Recommendation

Smallest real version: constitution + archive + JSON index + proposal #1 traversing real states (dogfooded from a genuine pending decision, e.g. the URL-casing law).

---

## §1 — The decision, in one paragraph

Adopt the **aDNA Enhancement Proposal (AEP)** process: sequentially numbered proposals, numbers **immutable
once assigned**, moving through an **8-state public machine** whose terminal states are as visible as its
successful ones, archived **tables-first** at `/community/proposals/` with per-proposal author and sponsor
credit, indexed for machines at `/community/proposals.json`, and **self-describing** — the process is itself
**AEP-1**, authored by an agent and ratified by the operator, which demonstrates the authorship policy on
the very first item rather than asserting it.

## §2 — Name and numbering law

**AEP — aDNA Enhancement Proposal.** Cited as `AEP-1`, `AEP-2` (unpadded in prose and headings);
filenames zero-pad to four digits (`aep-0001-<slug>.md`) so the archive sorts correctly past 999.

**The numbering law: a number, once assigned, is never reassigned, never reused, and never withdrawn** —
including for proposals that are rejected or withdrawn. A gap in the sequence is therefore impossible, and
the archive's count of *rejected* proposals is as retrievable as its count of accepted ones. This is
**archive-never-delete (SO-6) rendered as UI**, and it is the property that makes the surface evidence
rather than advertising.

Numbers are assigned when a proposal enters `draft` — not at acceptance. A number is not an endorsement.

## §3 — The state machine

Eight states, calibrated against MCP's SEP process (the instrument's own D8 reference `[D cohort]`):

| State | Meaning | Terminal |
|---|---|---|
| `draft` | Authored, number assigned, not yet under review | no |
| `review` | Under public review; a sponsor is engaged | no |
| `accepted` | Ratified by the operator; implementation may begin | no |
| `final` | Implemented **and** enforced by the standard's own checks (see §4) | **yes** |
| `rejected` | Reviewed and declined, with the reason recorded on the proposal | **yes** |
| `withdrawn` | Retracted by its author before a decision | **yes** |
| `superseded` | Replaced by a later AEP, which is named on it | **yes** |
| `dormant` | No sponsor activity; revivable by anyone, never deleted | no |

Forward transitions are `draft → review → accepted → final`. Any non-terminal state may go to `withdrawn`
or `dormant`; `review` may go to `rejected`; `accepted` or `final` may go to `superseded`. **A terminal
state is terminal for that number** — a revived idea is a *new* AEP that names the one it descends from.

## §4 — The conformance gate before `final`

`accepted` means the decision is made. **`final` means the standard enforces it.** An AEP reaches `final`
only when a check in the standard's own tooling — `adna_validate`, the site gate suite, or the compliance
checker — will fail if the rule is violated. Until such a check exists, the proposal stays `accepted`, and
the archive shows it as `accepted`, not as done.

This is the aDNA-native analogue of MCP's SEP-2484 conformance-test gate, and it is the mechanism that
stops the process becoming a wishlist. It also means the archive's `final` column is a **claim the suite
backs**, which is the only kind of claim this campaign permits (convention 1).

## §5 — Who files, who sponsors, who ratifies

- **Anyone may file.** The route is the `change_proposal` issue template on `aDNA-Network/aDNA`; a change
  that is normative — it alters what the standard requires of a conforming vault — escalates from an issue
  to an AEP. Non-normative changes stay ordinary issues and PRs, and the process page says so, because a
  process that swallows every typo fix is one nobody uses.
- **A sponsor** is a person who has agreed to shepherd the proposal through review. Proposals without one
  go `dormant` rather than lingering in `review` — the state exists so the archive can be honest about
  stalling.
- **Agents may author.** Authorship by an agent is **disclosed on the proposal**, in a required field, not
  in a footnote. This is the vault's own operating doctrine (SO-1, §7.7: *agents author, operators
  ratify*) stated as public policy, and it doubles as the **stated AI-assisted-contribution policy** that
  the instrument's D9 check 10 asks for — where, as the instrument notes, *silence on the question is
  itself a signal*.
- **Only a human ratifies.** No AEP reaches `accepted` on an agent's say-so. The ratifying operator is
  named on the proposal with the date, in the same 4-field block this vault's ADRs carry.

## §6 — AEP vs ADR

| | ADR | AEP |
|---|---|---|
| Governs | this vault's own construction | the **standard's** public evolution |
| Audience | operator + agents working here | anyone implementing aDNA |
| Filed by | agents, in-vault | anyone, in public |
| Lives at | `what/decisions/` | `site/src/content/proposals/` → `/community/proposals/` |

A ratified AEP **may spawn implementing ADRs**; an ADR never becomes an AEP retroactively. **The existing
ADR corpus is not renumbered, re-badged, or migrated** — it is this vault's record and stays that way.
*(Its size is deliberately not quoted here: `ls what/decisions/adr_*.md` returns **53** files while the
numbering reaches **058**, so any single figure typed into this sentence would be wrong against one of the
two readings. Convention 1 — a count a page narrates must be derived, not typed.)*
AEP-1 is the first AEP because the process starts now, and the archive must not imply a history it does
not have.

## §7 — Surface, placement, and the machine index

**Placement: `/community/proposals/`, not a top-level `/proposals/`.** ADR-049 caps the primary navigation
at **7 items with no load-bearing overflow**, and it is currently at 7 (`gate-13`, `NAV_MAX_ITEMS`) — a
top-level route would require amending a ratified constraint. The placement is also the correct one on the
merits: the process is the community-facing sibling of the ADR system, and `/community` is where the
participation ladder and governance record already live. Reachable from `/community` and the footer.

- **Constitution page** — renders AEP-1, self-describing, per the PEP-1 / EIP-1 / TC39 / W3C-Process
  pattern shared by all four process-primary exemplars `[D dossier §2.3]`.
- **Numbered archive** — **tables-first**, status machine visible, author + sponsor credited per row.
- **Machine index** — `/community/proposals.json`, versioned, composed from **the same content collection
  the pages render**, so the two can never disagree (KW-14 / gate-14 single-source discipline).
  Advertised in `/llms.txt`, the site's canonical machine entry point.

## §8 — Honest-youth posture

The process page states current occupancy **derived from the collection, never typed**: how many AEPs
exist and how many sit in each state. On the day it ships that is a very small number, and saying so is
the credible move — 7.2's correction. The page carries no invented activity, no fabricated review
timelines, and **no published responsiveness metric until one has actually been measured** (the
instrument's D9 anchor-5 item; claiming it unmeasured would be the exact defect this campaign exists to
end).

---

## ⊳ D-J — the D9 funnel repair shape

P3.5 absorbed **R-122** (contribution funnel) and **R-123** (docs-repo licence) at ⛩ DP6. R-123 was ruled
**MIT** at ⊳ D-D. R-122's repair shape was not ruled, and a live re-probe at execution **narrowed the
finding**, so it is put to the operator here rather than fired on an agent's reading.

**Re-probed live 2026-08-20 `[D, GitHub raw + API]`:**

| Repo | CONTRIBUTING | CoC | LICENSE |
|---|---|---|---|
| `aDNA-Network/aDNA` — the image, and the CTA target | **`.adna/CONTRIBUTING.md` 200** — present, buried below GitHub's detection paths | **404 — truly absent** | 200 (MIT) |
| `aDNA-Network/aDNA.aDNA` — the docs repo, "Edit this page" target | 200 | 200 | **404 — truly absent** |

R-122 as filed reads *"`CONTRIBUTING.md` 404 **and** `CODE_OF_CONDUCT.md` 404"*. **Half of it is wrong.**
CONTRIBUTING exists in the image repo at `.adna/CONTRIBUTING.md` — GitHub surfaces contributor docs from
the root, `.github/`, or `docs/` only, so it is present and invisible. Only the CoC is genuinely missing
there. Both repos already carry the three issue templates. R-122 is **narrowed in the register with the
correction shown** (the §9.7 pattern), not quietly re-scoped.

**Ruled by the operator in-session, 2026-08-20: fix the advertised door.**

1. Add `CODE_OF_CONDUCT.md` to the image repo — the file is genuinely absent, and
   `.adna/CONTRIBUTING.md` **promises it** (*"will be added in a future update"*), so its absence also
   sustains a promissory claim. Registered as **R-127**.
2. Add a root `CONTRIBUTING.md` to the image repo that **points at** `.adna/CONTRIBUTING.md` rather than
   forking it — one source, two doors. **Workspace Standing Rule 1 forbids modifying `.adna/`**; a new
   root file sits outside that tree and is therefore not a standard-release act.
3. The site CTA stays pointed at `aDNA-Network/aDNA`.
4. **Surface the funnel on the site**, which is where D9 check 3 actually looks (*"CONTRIBUTING linked
   from the site, not only the repo"*). The AI-assisted-contribution policy, the routes, and the CoC all
   already exist — they have simply never been rendered.

**Both pushes are outward, operator-gated acts** (Git-Ops §3) and are fired only on an explicit GO at the
moment of pushing, per ⊳ D-D's own stated condition.

---

## Consequences

The D8 reference gap closes at honest scale; contributors get a real lever on the standard; agents get a
documented, disclosed role; and D9 — the one dimension nine missions never moved — gets its repair. The
cost is a process the project must now actually run: an AEP left in `review` for a year is a visible fact,
which is the point.

## Ratification

- **Decision:** adopt the **AEP** process as specified in §§1–8 — immutable numbering, the 8-state machine,
  the §4 conformance gate before `final`, disclosed agent authorship with human-only ratification, and the
  `/community/proposals/` surface with its JSON index. **AEP-1 is the process itself** (the PEP-1 pattern
  shared by all four process-primary exemplars), so the authorship policy is demonstrated on the first
  item rather than asserted; the first *substantive* proposal is **AEP-2, the URL-casing law**. **⊳ D-J**
  ruled in the same signature: fix the advertised door — CoC + a pointer-style root CONTRIBUTING in the
  image repo, CTA unchanged, funnel surfaced on the site, both pushes GO-gated at the moment of firing.
- **Ratified-by:** Stanley, Founding Architect (operator). · **Date:** 2026-08-20. · **Status:** **accepted**.

> Ratified in-session via `AskUserQuestion` (`session_stanley_20260820_144905_haussmann_p3_5`), three
> questions: ADR ratification · placement · first substantive proposal — all three taken as recommended.
> The placement question was put because ADR-049's 7-item nav cap was the *reason* for the design, and a
> constraint that shapes a decision should be ratifiable alongside it rather than inherited silently.
> *(Authored by agent_rosetta; ratified by the operator — which is the policy this ADR establishes, applied
> to the ADR that establishes it.)*
