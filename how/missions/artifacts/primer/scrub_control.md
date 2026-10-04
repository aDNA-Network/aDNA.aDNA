---
type: artifact
mission_id: mission_primer_adna_for_data_engineers
objective: O0
title: "Primer scrub control — the write-gate grep list (adapted from RiemannCommons write_gate_checklist) and the record of its runs; must go RED on a planted path before it is believed"
created: 2026-10-03
updated: 2026-10-04   # O4 runs appended (v1.0: 0/0/0, planted 1, gitleaks 0 ×3)
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
| 1 | No home-vault paths | `~/aDNA/` · `/Users/` · `[A-Za-z]+\.aDNA/(what|how|who)/` · `~/aDNA/\.adna/` · `/Users/[^ ]*\.adna/` | vault *names* may appear as glossed examples; a *path* may not. ⛩ **Narrowed 2026-10-04 (O3)**: the bare `\.adna/` pattern was over-broad — it is the public template's install path (Standard §3.5, public README) and the reader's own clone has it; the §8 validator command needs it. Only the home-rooted forms are home-vault paths. Red-proved after the change: `~/aDNA/.adna/CLAUDE.md` still fires. |
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
| 2026-10-04 | v0.2 body after round 2 (31 correctness items applied) | no | **0** (one hit on the old bare `\.adna/` pattern — the §8 validator command — led to the rule-1 narrowing above; re-run 0; planted copy still 1; gitleaks 0) | clean |
| 2026-10-04 | v0.2 body (below the frontmatter fence) | no | **0** | clean; frontmatter checked separately: 0 (its `last_edited_by: agent_rosetta` is the file's own attribution and does not match the persona rule's `\bRosetta\b`); gitleaks `--no-git` 0 findings |
| 2026-10-04 | **v1.0** body (byte-identical to v0.2's) | no | **0** | clean (`session_stanley_20261004_041949_garnier_g_inbox_primer_o4_s21b`; 76-regex list rebuilt from this table — the O3 scratch file did not survive the session, so the list was re-derived, not reused) |
| 2026-10-04 | v1.0 frontmatter | no | **1 → 0** | the first v1.0 `updated:` comment named the authoring mission's ID (rule 2, `mission_[a-z0-9_]+`) — reworded to "the authoring mission file"; re-run 0 |
| 2026-10-04 | v1.0 body + one planted path (`~/aDNA/Home.aDNA/what/inventory/`) | yes | **1** | **RED ✓** — the rebuilt control fires |
| 2026-10-04 | `cover_note_andy.md` (whole file, frontmatter included) | no | **0** | clean; 2,547 chars derived; one *correctness* fix made before the hash (the note had said the standard "requires agent authorship to be disclosed" — the standard has no such sentence; `grep -i disclos adna_standard.md` → 0; reworded to what is true: every file records who last touched it) |
| 2026-10-04 | gitleaks `--no-git` on the .md, the .pdf and the cover note | no | **0** | no leaks found ×3 |
