---
type: runbook
runbook_id: runbook_lattice_home_install
created: 2026-05-29
updated: 2026-10-15   # ARCADE A1.2 dead-CLI sweep: substrate source archived → Archive.aDNA/TerminalGo.aDNA (read-only); the ~/.local/bin/lattice link removed 2026-10-06; prior 2026-05-29
status: active
persona: rosetta
last_edited_by: agent_rosetta
substrate_pin: "CMux.aDNA HEAD 7747a15a (lift source per skill_lattice_home_install step 1) — ⛩ 2026-10-15: the lineage CMux.aDNA → Terminal.aDNA (Go) → TerminalGo.aDNA is ARCHIVED at Archive.aDNA/TerminalGo.aDNA (2026-10-06); read the pin there, read-only. CMux.aDNA / Cmux.aDNA at the root are 30-day shims (Home §C), not live pointers"
tags: [runbook, lattice_home_pattern, install, smoke_verify, drift_audit, m2_close_gate]
---

# Runbook — aDNA.aDNA Lattice Home install + smoke-verify

> Operator-facing procedure for installing, verifying, rolling back, and
> drift-auditing the aDNA.aDNA Lattice Home substrate. Authored at
> campaign_lattice_home_pattern M2 close. Self-reference: this runbook lives
> inside the substrate it documents (Standing Order #8).

## §1. Install (passive — default)

Passive mode does nothing observable beyond confirming the substrate is in place.
No user-scope writes. Operator invokes `lattice home` from the vault root.

```bash
cd ~/aDNA/aDNA.aDNA
bash how/configs/bin/install.sh --passive    # or just: bash how/configs/bin/install.sh
./how/configs/bin/lattice home               # renders the splash
```

## §2. Install (active — opt-in)

Active mode symlinks two artifacts into user scope:

- `~/.local/bin/lattice-adna` → `<vault>/how/configs/bin/lattice`
- `~/.zsh/conf.d/55-lattice-home.zsh` → `<vault>/how/configs/conf.d/55-lattice-home.zsh`

Note the **vault-prefixed name** `lattice-adna` (not `lattice`) — coexists with
any existing `~/.local/bin/lattice` from a CMux install. *(⛩ 2026-10-06: that link
was removed with the Go console's archive — Terminal.aDNA cutover packet row 13; the
successor console CLI is `adnaterm`. The coexistence rule stays; it now guards nothing.)*

```bash
cd ~/aDNA/aDNA.aDNA
bash how/configs/bin/install.sh --active
lattice-adna home                            # from any subdir of the vault
```

## §3. 10-row smoke-verify chain (mandatory M2 close gate)

Per `skill_lattice_home_install` step 5. Run from the vault root.

| # | Command | Expected |
|---|---------|----------|
| 1 | `bash -n how/configs/bin/lattice && bash -n how/configs/bin/install.sh && bash -n how/configs/bin/uninstall.sh` | exit 0 (syntax clean) |
| 2 | `bash how/configs/bin/install.sh --dry-run --active` | logs `would-link …`; zero side-effects |
| 3 | `bash how/configs/bin/install.sh --active` | 1-2 `link …` lines; idempotent re-run returns `ok …` (not `link …`) |
| 4 | `lattice-adna home` (from vault root) | 5-block splash with `🧬 aDNA / Rosetta` badge + substituted git/mission data |
| 5 | `ADNA_LATTICE=0 lattice-adna home` | rc=1; `suppressed (ADNA_LATTICE=0)` on stderr; no splash |
| 6 | `cd /tmp && lattice-adna home; cd -` | rc=1; `suppressed (PWD not inside vault root …)` on stderr |
| 7 | Visual confirm splash row `OPEN MISSIONS`: at least one `▶ <slug>` if vault has active missions, else `(none)` | matches `grep -lE "^status: (planned\|in_progress\|active)$" how/campaigns/*/missions/*.md` |
| 8 | Visual confirm splash row `CAPABILITY`: `providers:` field reads `claude-code ✓` (or `◌` if Claude CLI absent on PATH) | matches `command -v claude` |
| 9 | `bash how/configs/bin/uninstall.sh` | 1-2 `unlink …` lines; substrate intact in vault |
| 10 | `bash how/configs/bin/install.sh --active` (round-trip) | re-creates symlinks cleanly; clean state achievable |

**Pass criterion**: all 10 rows pass. Failure on any row → fix before commit.

## §4. Rollback

```bash
bash how/configs/bin/uninstall.sh    # removes user-scope symlinks; idempotent
```

Substrate files at `how/configs/` remain in the vault. Re-install at any time.

## §5. Drift audit (SO-LH-1; annual or operator-triggered)

Compare aDNA.aDNA's parameterized `cmd_home` against the CMux substrate pin — ⛩ since 2026-10-06 the substrate's vault is archived, so read the pin from the archive (read-only; same repo, same SHA):

```bash
diff <(awk '/^cmd_home\(\)/,/^}/' ~/aDNA/aDNA.aDNA/how/configs/bin/lattice) \
     <(git -C ~/aDNA/Archive.aDNA/TerminalGo.aDNA show 7747a15a:how/configs/bin/lattice | awk '/^cmd_home\(\)/,/^}/')
```

*(Was `git -C ~/aDNA/Cmux.aDNA …` — that path is a 30-day root shim onto the archive, not a live vault. Canonical-instance #2 — this vault — is the live canonical of the pattern now; #1 is archived with the Go console.)*

Severity table (per `skill_lattice_home_install` step 6):

| Divergence | Severity | Action |
|---|---|---|
| < 5% | OK | No action; pin holds |
| 5-20% | Acceptable | Document in STATE.md "Pattern drift notes" |
| 20-40% | Flag | File operator decision: re-converge or fork |
| > 40% | Critical | Halt new-vault inheritance; re-evaluate pattern |

Current substrate diff at M2 close documented in mission spec Mission Close Notes.

## Cross-references

- [[pattern_lattice_home]] — the pattern this runbook supports
- [[skill_lattice_home_install]] — the 6-step recipe (Step 5 = §3 above)
- [[mission_lhp_m2_adna_vault_install]] — the mission that produced this substrate
- CMux substrate origin: `Cmux.aDNA/how/configs/{bin/lattice, home/home_template.md, conf.d/55-cmux-home.zsh, bin/install.sh, bin/uninstall.sh}` at SHA `7747a15a` — ⛩ archived 2026-10-06 → `Archive.aDNA/TerminalGo.aDNA/how/configs/…` (read-only)
