---
title: "AEP-1: The aDNA Enhancement Proposal process"
description: "How changes to the aDNA standard are proposed, reviewed, decided, and archived — who may file, and what a proposal must satisfy to be called final."
page_type: proposal
number: 1
proposal_title: "The aDNA Enhancement Proposal process"
status: final
created: 2026-08-20
updated: 2026-08-20
authors: ["Stanley Sekar"]
sponsor: "Stanley Sekar"
authored_by_agent: "agent_rosetta (Claude)"
ratified_by: "Stanley Sekar, Founding Architect"
ratified_date: 2026-08-20
conformance_check: "site/tests/gates/gate-37-proposal-process.spec.ts"
superseded_by: null
supersedes: null
implements_adr: "ADR-055"
discussion_url: "https://github.com/aDNA-Network/aDNA/issues"
---

This proposal describes the process by which the aDNA standard changes. It is itself an AEP, filed
through the process it describes, so that the process has been used at least once before anyone is asked
to use it.

## Why a process at all

aDNA is a standard. A standard that one person can change silently is a preference with good
documentation. The difference between the two is a public record: what was proposed, who proposed it,
what was decided, and — the part most projects omit — **what was decided against**.

This process is deliberately small. It is not a foundation, a working-group structure, or a voting
system. It is a numbered list, a set of states, and a rule about who may say yes.

## The numbering law

Proposals are numbered sequentially from 1 and cited as `AEP-1`, `AEP-2`.

**A number, once assigned, is never reassigned, never reused, and never removed** — including for
proposals that are rejected or withdrawn. There are no gaps in the sequence, and a rejected proposal is
as retrievable as an accepted one.

This is the load-bearing rule. It means the archive cannot be curated after the fact: you can read what
this project turned down, and judge it on that. A number is assigned when a proposal is first written
down, not when it is agreed to. **A number is not an endorsement.**

## The states

| State | What it means | Terminal |
|---|---|---|
| `draft` | Written down, numbered, not yet under review | no |
| `review` | Under public review; a sponsor is shepherding it | no |
| `accepted` | Decided yes; implementation may begin | no |
| `final` | Implemented *and* enforced — see below | **yes** |
| `rejected` | Reviewed and declined, with the reason recorded | **yes** |
| `withdrawn` | Retracted by its author before a decision | **yes** |
| `superseded` | Replaced by a later proposal, which is named on it | **yes** |
| `dormant` | Nobody is shepherding it; revivable by anyone | no |

Proposals move forward `draft → review → accepted → final`. Anything not yet terminal can be withdrawn or
go dormant; a proposal in review can be rejected; something accepted or final can later be superseded.

**A terminal state is terminal for that number.** If a rejected idea comes back, it comes back as a new
proposal that names the one it descends from. The old number keeps its old outcome.

`dormant` exists because proposals stall, and a process that cannot say so accumulates a review queue
that is quietly fictional.

## What `final` requires

`accepted` means the decision is made. **`final` means the standard enforces it.**

A proposal reaches `final` only when a check in aDNA's own tooling — `adna_validate`, the site gate suite,
or the compliance checker — **will fail if the rule is violated**. Until that check exists, the proposal
stays `accepted`, and this archive shows it as `accepted`.

That distinction is the whole difference between a standard and a wishlist. It also means the `final`
column here is a claim the test suite backs, rather than a claim about intent.

## Who may file, sponsor, and decide

**Anyone may file.** Open a change proposal on the
[aDNA repository](https://github.com/aDNA-Network/aDNA/issues). If the change is *normative* — if it
alters what the standard requires of a conforming vault — it becomes an AEP. If it does not, it stays an
ordinary issue or pull request, which is faster for everyone. A process that swallows every typo fix is a
process nobody uses.

**A sponsor** is a person who has agreed to shepherd a proposal through review. Proposals without one go
`dormant` rather than sitting in `review` indefinitely.

**Agents may author proposals, and their authorship is disclosed.** Every proposal carries a field naming
the agent that drafted it, if one did. This one was drafted by an agent. That disclosure is a required
field rather than a convention, because disclosure that can be omitted is disclosure that will be
omitted.

**Only a human ratifies.** No proposal reaches `accepted` on an agent's say-so. The person who ratified
it is named on the proposal, with the date. This is not a policy adopted for the occasion — it is how
this project already operates internally, written down where it can be held to.

## Proposals and internal decisions

aDNA keeps a second, older record: Architecture Decision Records, in the vault at `what/decisions/`.
They are not the same thing and neither replaces the other.

| | ADR | AEP |
|---|---|---|
| Governs | how this project builds its own vault | how the **standard** evolves |
| Audience | the maintainers and their agents | anyone implementing aDNA |
| Filed by | agents, internally | anyone, in public |

An accepted AEP may produce ADRs that implement it. The existing ADR record is not renumbered or
converted into proposals — it is this project's own history and stays that way. **AEP-1 is the first AEP
because the process starts now**, and this archive should not imply a history it does not have.

## The state of the process, honestly

This process is new — it began on 20 August 2026. The archive below it is short, and most numbers are
unassigned. The counts shown on the proposals page are read from the archive itself rather than typed
into the page, so they cannot flatter it.

There is no published median review time here, because none has been measured. When there is enough
history to compute one, it will appear. An unmeasured metric is not a small dishonesty in a document
about how decisions get made.
