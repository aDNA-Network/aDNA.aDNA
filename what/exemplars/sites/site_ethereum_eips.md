---
type: exemplar_site
site: eips.ethereum.org
functional_role: proposal process at scale (types × statuses)
tonal_revolutionary: 25
created: 2026-08-16
updated: 2026-08-16
inspected: 2026-08-16
inspected_lens: craft-reference (Haussmann B.7 dossier)
added_by: campaign_haussmann
persona: rosetta
status: active
last_edited_by: agent_rosetta
hero_word_count: ~28 (definition, not marketing)
section_count: 5
above_fold_focus: definition + category taxonomy
nav_model: taxonomy-as-nav (7 category tabs — All/Core/Networking/Interface/ERC/Meta/Informational)
density_band: dense (link-forward)
demo_as_proof: per-category counts (Core 432 · ERC 610 · 1,129 Standards Track)
needs_operator_capture: []
tags: [exemplar_site, eips, proposal_process, status_machine, citation, haussmann_b11]
---

# site_ethereum_eips — Ethereum EIPs (eips.ethereum.org)

> **The proposal process at four-digit scale** — 1,100+ numbered proposals held legible by a strict **type × status** grid. Where [[site_python_peps]] shows the archive, EIPs shows the *state machine* working in public. Judged from HTML only [I] — outside the 5-capture budget; deep page: EIP-1559.

## Captured (rubric)

- **Hero:** a 28-word **definition** ("EIPs describe standards for the Ethereum platform, including core protocol specifications, client APIs, and contract standards") — zero marketing; tone "requesting Peer Review."
- **Taxonomy-as-nav:** the top nav IS the type system — All · Core · Networking · Interface · ERC · Meta · Informational — with **live counts per category** (Standards Track 1,129 · Core 432 · ERC 610…). The numbers are inventory, not vanity.
- **Status state machine, named in full:** Idea → Draft → Review → Last Call → Final, plus Stagnant / Withdrawn / Living — every terminal and stalled state is a public label.
- **Process anchor:** contribute = "read **EIP-1** first, fork, follow the template, open a PR" — the constitution is an EIP; the pipeline is git.
- **Subscription surfaces:** RSS feeds per slice + Discord channels — the process is *followable*.
- **Item page (EIP-1559):** author list as **linked GitHub handles** (@vbuterin…), Requires: cross-links (EIP-2718, EIP-2930), fixed section skeleton (Abstract → Motivation → Specification → Security Considerations), Discussions-To pointing at the forum, and a formal **Citation block** — a proposal you can cite like a paper.
- **Visual:** near-zero design investment; light-only; the content model does all the work. Tonal ~25.

## Lift for aDNA

- **The one thing to steal: the visible status state machine with per-category counts.** aDNA's ADRs/upstream-ideas/campaign registry should wear its lifecycle labels (proposed/accepted/superseded; per-type counts) as public UI — governance made auditable at a glance, at whatever scale arrives.
- **Requires + Discussions-To + Citation on every item** — provenance edges and cite-ability per proposal; the citation block is the credibility move Haussmann's remediation phase wants.
- **EIP-1-as-constitution + git-as-pipeline** — matches aDNA's actual process; say it this plainly.

## Avoid

- **Zero visual craft** — EIPs proves the model, not the register; adopting its typography-free sprawl would fail the corpus craft bar ([[site_linear]]).
- A home that is *only* taxonomy prose gives a newcomer nothing to do — keep the dual-audience layer.

## Related

- [[_reference_set]] · [[site_tc39]] (stage ladder upstream) · [[site_python_peps]] (archive sibling + JSON twin) · [[site_ethereum]] (the movement face of the same ecosystem)
