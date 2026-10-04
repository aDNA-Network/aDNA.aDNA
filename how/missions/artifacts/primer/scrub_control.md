---
type: artifact
mission_id: mission_primer_adna_for_data_engineers
objective: O0
title: "Primer scrub control — the write-gate grep list (adapted from RiemannCommons write_gate_checklist) and the record of its runs; must go RED on a planted path before it is believed"
created: 2026-10-03
updated: 2026-10-04
status: active
last_edited_by: agent_rosetta
executor_tier: fable
executor_runtime: claude
session: session_stanley_20261003_213535_garnier_rulings_and_lanes
tags: [artifact, primer, o0, data_engineer]
---

# Scrub control — the write gate for the primer and the cover note

[I] Adapted from `~/aDNA/RiemannCommons.aDNA/what/write_gate_checklist.md` (7 items) to the mission's §Scrub (8 rules). The control is a grep list run over **both** outgoing files (`what/docs/adna_primer_for_data_engineers.md`, `how/missions/artifacts/primer/cover_note_andy.md`). **A control that returns 0 on v0.1 before any scrub is a broken control** — O3 plants one home-vault path, runs the list, and must see it go red before the 0-hit run on v1.0 counts.

## The grep list (run as `grep -nE -f` over each file; every hit is a finding)

| # | Rule (mission §Scrub) | Pattern(s) | Notes |
|---|---|---|---|
| 1 | No home-vault paths | `~/aDNA/` · `/Users/` · `[A-Za-z]+\.aDNA/(what|how|who)/` · `\.adna/` | vault *names* may appear as glossed examples; a *path* may not |
| 2 | No workspace identifiers | `session_[a-z]+_[0-9]{8}` · `coord_20[0-9]{2}_` · `mission_[a-z0-9_]+` · `gate_id` · `[0-9a-f]{7,40}` preceded by \`` or "commit" · `GR-[0-9]` · `DP[0-9]` · `P[0-9]\.[0-9]` (mission IDs) | SHAs: 7–40 hex in backticks; allow none |
| 3 | No credential names | `C1[0-9]{2}\b` · `[A-Z_]+_TOKEN` · `[A-Z_]+_API_KEY` · `op://` · `Keychain` · `1Password` · `broker` | describe "a credential broker", never name an entry |
| 4 | No local-only vault names | `share_omics` · `RareGraph` · `Datarooms` · `aiLP` · `AILedger` · `GOTFN` · `Bearly` · `Fluxer` · `Emissary` · `dmRoster` · `#agent-comms` | Fluxer runtime/state is Aspasia's "does not publish" ruling |
| 5 | No live campaign state / codenames unexplained | `GARNIER` · `HAUSSMANN` · `Operation [A-Z][a-z]+` · `vitrine` · `Primer` (as a codename) · `Boulogne` · `Causeway` · `Lutetia` | allowed only in a sentence that explains it, past tense — reviewer reads each hit |
| 6 | Persona names carry a gloss | `Rosetta` · `Hestia` · `Berthier` · `Vauban` · `Talos` · `Ledoux` · `Ariel` · `Aspasia` · `Noether` · `Venus` · `Hygieia` · `Vitruvius` · `Mondrian` · `Galileo` · `Prometheus` · `Ilmarinen` | each hit must sit beside a gloss ("the node vault's agent, *Hestia*") or be replaced |
| 7 | Public surfaces only | `localhost` · `127\.0\.0\.1` · `:[0-9]{4}\b` · `10\.43\.` · `exxact` · `lsu-l2` · `tailscale` · `mesh` · `codeberg` · `forgejo\.` · `LatticeProtocol/` (as a repo link) · `whitepaper` (link) | counsel embargo: LatticeProtocol code distribution — describe, never link |
| 8 | gitleaks | `gitleaks detect --no-git --source <file>` | both files; 0 findings |

Also: `privacy_class` · `T0` / `T1` (WilhelmAI-local tiers) · `[D]` / `[I]` / `[R]` / `[A]` tags (internal provenance notation — explained once in §6 or stripped) · `⛩` (internal gate glyph — strip).

## Runs

| Date | File · version | Planted? | Hits | Result |
|---|---|---|---|---|
| 2026-10-04 | v0.2 draft + one planted path (`~/aDNA/Home.aDNA/what/inventory/` appended to a scratch copy) | yes | **1** (rule 1, `~/aDNA/`) | **RED ✓** — the control fires (`session_stanley_20261004_033400_garnier_f_hygieia_inbox_dp12_primer_o3`; pattern file = the 8 rules + the "Also" row, 71 regexes, `grep -nE -f`) |
| 2026-10-04 | v0.2 body (below the frontmatter fence) | no | **0** | clean; frontmatter checked separately: 0 (its `last_edited_by: agent_rosetta` is the file's own attribution and does not match the persona rule's `\bRosetta\b`); gitleaks `--no-git` 0 findings |
| — | (O4: v1.0, both files) | no | 0 required | — |
