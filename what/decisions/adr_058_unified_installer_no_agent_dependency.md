---
type: adr
adr_number: "058"
title: "One installer: joining the network and getting the workspace, with no AI-assistant dependency"
status: accepted
created: 2026-08-16
updated: 2026-08-16
last_edited_by: agent_venus
campaign_id: ""
supersedes: ""
superseded_by: ""
amends: "adr_034_public_face_repo_release_architecture"
tags: [adr, install, onboarding, public-face, adr-034]
---

# ADR-058 — One installer, and no AI-assistant dependency

## Status

**Accepted.**

| Field | Value |
|---|---|
| Decision | Unify the node installer and the workspace install behind one command; remove Claude Code from the required path |
| Ratified by | Operator (Jake) |
| Date | 2026-08-16 |
| Status | accepted |

Authored by an agent (Venus, guest-writing in this vault under explicit operator authorization for
this change — the reader-only invariant was waived for it, not repealed). Ratified by the operator
in session, which is what makes it `accepted` rather than `proposed`.

## Context

ADR-034 established the public face as a clone-and-run workspace image, and
`build_install_truth.mjs` projects that into `install_truth.json` as the single source every
install surface renders. The canonical one-liner it produces is:

```
git clone https://github.com/aDNA-Network/aDNA.git ~/aDNA && cd ~/aDNA && claude
```

That command ends in `claude`. Getting started therefore *required* Claude Code — an install, an
account, and a subscription — before a person could see anything. Separately, `Network.aDNA` built
a node installer so partners could join the Alpha Lattice mesh without an agent on the machine at
all. Two installs, one domain, and only one of them was reachable by someone who does not already
have an AI coding assistant.

The two were also genuinely different products, which is why the collision was not obvious until
the node installer needed a URL: one sets up a knowledge workspace, the other joins a network.

## Decision

**One command does both, and neither half requires an AI assistant.**

1. `https://adna.network/install.sh` (and `install.ps1` on Windows) is the node installer. It
   joins the network **and**, as an optional final step, clones the aDNA workspace to the same
   `~/aDNA` that ADR-034 specifies.
2. The two halves stay **independent**. The mesh works with no workspace; the workspace works with
   no mesh. `--no-workspace` / `-NoWorkspace` opts out. Neither is a precondition for the other.
3. **Nothing in the path requires Claude Code.** The installer's closing line tells the user to
   open the workspace with a text editor, Obsidian, or an AI assistant *if they use one* — and
   says plainly that nothing requires any of them.
4. The workspace clone is **non-fatal**. A human is waiting to approve the enrollment request; a
   missing `git` or a failed clone must not discard that. It never overwrites an existing `~/aDNA`.
5. There are now three double-click surfaces over the same install path — `.command` (macOS),
   `.sh` (Linux), `.exe` (Windows) — so the non-technical path needs no terminal at all.

## Consequences

- `install_truth.json` gains an additive `node_installer` block. `one_liner` and `commands` are
  **unchanged**, so every existing rendered surface and the gate that enforces them keep working.
- The installer does **not** hardcode the clone URL. It mirrors `canonical_repo_git` and
  `clone_target` from this vault's `install_truth.json`, and
  `Network.aDNA/what/network/installer/conformance_test.py` gate **C6** fails if they disagree —
  so the website and the installer cannot tell a new user two different things.
- **Not done here, deliberately:** the home hero still leads with the ADR-034 workspace one-liner.
  Switching which install the front page leads with is a site-design decision, not a correctness
  fix, and is left as a follow-up rather than changed unilaterally.
- **Hosting requirement:** `.ps1` must be served as `text/plain`. Windows PowerShell 5.1 returns
  `Invoke-WebRequest .Content` as a `byte[]` for `application/octet-stream`, so `irm … | iex`
  receives a list of character codes and dies. `site/vercel.json` sets this; removing it silently
  breaks the Windows one-liner. Observed on a real Windows 11 machine, not theorised.
- **Still unsigned.** Windows SmartScreen and macOS Gatekeeper both warn on first run until an
  Authenticode certificate and an Apple Developer ID are purchased. Until then the click-install
  works but is not the seamless experience it is meant to be.

## Relationship to ADR-034

Amends, does not supersede. ADR-034's canonical repo, clone target, embedded standard, and legacy
redirect semantics all stand unchanged. This ADR removes the trailing `claude` from the *required*
path and gives the workspace clone a second, agent-free delivery route.
