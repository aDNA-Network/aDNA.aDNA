---
type: context
created: 2026-07-03
updated: 2026-07-03
last_edited_by: agent_rosetta_builder_a
status: active
role: consumer                                  # this vault CITES; it does not own the pinned code
repo: lattice-protocol
producer_vault: LatticeProtocol.aDNA
producer_codepin: LatticeProtocol.aDNA/what/context/codepin.md   # the AUTHORITATIVE pin (Noether owns it)
pinned_surface: "LatticeProtocol.aDNA/what/latticeprotocol/.agentic/specs/ — the LP spec set (lattice-core · lattice-federation · lattice-ledger · lattice-objects · lattice-sdk · lattice-backends · lattice-cli · lattice-deploy)"
pinned_sha: 8cb6e1e73be18abb310e3adef863e6aeeef46e9a
pinned_short: 8cb6e1e
pin_date: 2026-07-03
refresh_protocol: "pin-FOLLOW only — advance this recorded pin at a Champollion phase close, and only after a deliberate re-check of the consumer citations against the newer spec surface (never auto-follow the producer)"
verify: "git -C ~/aDNA/LatticeProtocol.aDNA/what/latticeprotocol rev-parse HEAD"   # in-vault tree (survives the code-home symlink retirement); output MUST start with pinned_sha
consumers:
  - what/tutorials/tutorial_exchange_adoption_path.md
  - how/campaigns/campaign_champollion/artifacts/conformance_bilateral.md   # the M5.2 mutual-conformance record
tags: [codepin, upstream_pin, lattice_protocol, sha_pinned, consumer_pin, champollion, cross_graph]
---

# Codepin — `lattice-protocol` spec surface (this vault's CONSUMER pin)

> **Plain-language first**: this vault (`aDNA.aDNA`, Rosetta) *teaches and cites* the Lattice Protocol — but the code and its specs live in another vault (`LatticeProtocol.aDNA`). A citation is only true against a specific snapshot of that other vault. This file records **which snapshot our teaching is true against**: LP spec commit `8cb6e1e`. If LP advances past `8cb6e1e`, that gap is not a bug — it is the codepin working: our lag becomes a visible, greppable fact instead of silent rot. See [[../patterns/pattern_cross_graph_codepin|pattern_cross_graph_codepin]] for the full mechanism.

## Single-source rule (and this vault's place in it)

The **authoritative** pin for `lattice-protocol` is the producer's file — `LatticeProtocol.aDNA/what/context/codepin.md` (Noether owns it; it carries the 7-consumer producer sweep). **This file is a consumer-side pin**: it records the commit *this vault's* citations were last deliberately verified against, and lists *our* citation surfaces (the `consumers:` block above) as the sweep checklist for when this vault performs a pin-follow.

- **Pin-advance** is the producer's act (LP advances its own `pinned_sha` when it re-verifies its docs against new code).
- **Pin-follow** is this vault's act (we advance *this* recorded pin only after a deliberate re-check of our citations). Staying behind the producer is legitimate — do it visibly. Never script an auto-follow of LP's latest SHA (that reintroduces the silent rot the codepin exists to kill; anti-pattern §5 of the pattern).

## What is pinned

The **LP spec set** at `what/latticeprotocol/.agentic/specs/` — the machine-checkable specification surface this vault teaches against (`lattice-core`, `lattice-federation`, `lattice-ledger`, `lattice-objects`, `lattice-sdk`, plus `lattice-backends` / `lattice-cli` / `lattice-deploy`). This vault teaches the Lattice Protocol's module/dataset/lattice model and its federation/composition concepts; those spec files are the source of truth for that teaching. This vault **cites at the pin and never re-specifies** — truth ownership is split **spec: LP · teaching: aDNA.aDNA** (recorded in [[../../who/coordination/coord_2026_07_02_rosetta_to_noether_champollion_carnot_alignment|the Champollion⇄Carnot alignment memo]] §2).

## Verify (machine check)

```bash
git -C ~/aDNA/LatticeProtocol.aDNA/what/latticeprotocol rev-parse HEAD
# output MUST start with 8cb6e1e — if it does not, LP has advanced; re-check before trusting our citations
```

The `verify:` target is the **in-vault** LP code tree (`what/latticeprotocol/`), chosen so it survives the retirement of the legacy `~/aDNA/lattice-protocol` back-compat symlink (mirrors LP's own §2.1 relocation-safety choice).

## Refresh history (the worked cycle — mirrors the pattern's live example)

- **2026-07-03 (Champollion M6.1 — consumer codepin filed at the followed pin `8cb6e1e`)**: this file created to memorialize, in machine-checkable form, the pin-follow this vault performed at **M5.2** (2026-07-02). Prior to M5.2 this vault taught at `47935b6`; the M5.2 bilateral conformance check verified LP spec@`47935b6` == spec@`8cb6e1e` (empty `.agentic/specs/` diff — [[../../how/campaigns/campaign_champollion/artifacts/conformance_bilateral|conformance_bilateral]] §1/§4) and the fable review ratified the follow at **zero teaching change**. This vault's recorded consumer pin is therefore **`8cb6e1e`**, matching LP's authoritative `codepin.md`. That drift-visible → re-verify → follow arc is the pattern's worked example completed in the open.

> **Next follow**: at a future Champollion phase close, and only after deliberately re-checking the `consumers:` citations against LP's then-current spec surface. Until then, this vault stays on `8cb6e1e` — and that is correct, not lax.

## Related

- [[../patterns/pattern_cross_graph_codepin|pattern_cross_graph_codepin]] — the pattern this file instantiates (consumer side)
- [[../tutorials/tutorial_exchange_adoption_path|tutorial_exchange_adoption_path]] — a consumer surface that teaches against this pin
- [[../../who/coordination/coord_2026_07_02_rosetta_to_noether_champollion_carnot_alignment|Champollion⇄Carnot alignment memo]] — the seam contract (spec: LP · teaching: this vault)
