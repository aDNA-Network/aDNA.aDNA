---
type: governance
scope: workspace
created: 2026-05-25
updated: 2026-08-17   # + pre-push gate law (D-41), Obsidian allow-list CLOSED (D-44), non-git-store scanning (D-57), inert-control rule, instrument law (D-46/D-60/F-M-A7-1/2); ratification block PROPOSED (Chambellan M-A6; Rosetta edit — authored_by unchanged)
last_edited_by: agent_rosetta
status: active
canonical_at: /Users/stanley/aDNA/aDNA.aDNA/what/doctrine/doctrine_secret_scanning.md
lifted_from: /Users/stanley/aDNA/ScienceStanley.aDNA/how/governance/doctrine_secret_scanning.md (M01 2026-05-25; generalized to workspace scope; Obsidian allow-list pattern added)
authored_by: campaign_node_credentials M01 (Hestia / Home.aDNA)
authority: Home.aDNA broker pattern per adr_002 + adr_003
related:
  - /Users/stanley/aDNA/aDNA.aDNA/what/doctrine/doctrine_credential_handling.md
  - /Users/stanley/aDNA/aDNA.aDNA/what/doctrine/doctrine_key_rotation.md
tags: [governance, doctrine, security, secrets, pre_commit, gitleaks, obsidian, workspace_scope]
---

# Doctrine: Pre-Commit Secret Scanning (workspace-level)

## Purpose

Catch accidental secret commits **before** they enter git history. Once a secret value lands in any commit (even a later-reverted one), it must be treated as compromised and rotated per `doctrine_key_rotation.md`. Pre-commit scanning is the cheapest place to enforce the "no key values in vault files" rule from `doctrine_credential_handling.md` §6.

> **Lift note**: this file is the workspace-canonical version. Predecessor `ScienceStanley.aDNA/how/governance/doctrine_secret_scanning.md` (2026-05-21) was authored in SS scope and is retained there for SS-historical context with a canonical-pointer note at top of file. New behavior MUST be added here.

## Scope: per-vault, not workspace-wide

`~/aDNA/` itself is **not** a git repository, so it carries no pre-commit hook. Each `<vault>.aDNA/` directory that IS a git repository installs its own pre-commit hook locally (git hooks live outside the tracked tree). Workspace doctrine sets the pattern; each vault installs it.

Vaults that should carry this hook today (those with a git repository):

- All `<name>.aDNA/` vaults that have been initialized with `git init`
- `lattice-protocol/`, `latlab/`, `lattice-labs/`, `rare-archive/`, `rareharness/`, `latlab-lab/`

Vaults that do NOT need this hook (no git repository): `~/aDNA/` (workspace root), `_archive/`, `_inbox/`, `modules/`, `lattices/`, `datasets/`, `results/`, `shared/`, `llama.cpp/` (vendored), `lunarpro-build-kit/` (vendored).

> **Amendment (Chambellan M-A6, 2026-08-17) — two corrections to this section.**
>
> 1. **The lists above carry pre-Homecoming loci.** Several named paths have since moved or been archived
>    (`latlab/` → `Jupyter.aDNA/what/lab/`, `lattice-labs/` → `Archive.aDNA/lattice-labs`, `modules/ lattices/
>    datasets/ shared/` archived at PT pt16). They are **annotated, not rewritten** (SO-7): the membership rule
>    they express — *every vault that is a git repository installs the hook; the workspace root is not one* —
>    is unchanged and is what binds. Per `doctrine_credential_handling.md` §6.9, re-verify a named locus at use.
> 2. ⚠ **"No git repository" was silently being read as "nothing to scan". It is not.** The largest
>    credential-bearing surface on this node is a **non-git store** (`~/.claude/`), and the entire apparatus
>    this doctrine describes — pre-commit hooks, pre-push gates, history scans — is **structurally blind** to it.
>    See §Scanning non-git stores below. A fleet that is 100% hook-conformant is still unscanned there.

## Tool of Choice

**Gitleaks** (`https://github.com/gitleaks/gitleaks`) — Apache 2.0, single binary, sensible defaults, low false-positive rate on prose-heavy repos. Alternative: `trufflehog`. Operator may swap per vault; doctrine is tool-neutral.

## Install (operator action)

Gitleaks is **not** installed by default. To install on macOS:

```sh
brew install gitleaks
```

To verify:

```sh
gitleaks version
```

## Pre-Commit Hook

A pre-commit hook at `<vault>/.git/hooks/pre-commit` (vault-local, not tracked by git) runs gitleaks against staged changes only. Hook should:

1. Skip with warning if gitleaks is not on PATH (don't block — so contributors without gitleaks can still commit)
2. Run `gitleaks protect --staged --no-banner --redact` against staged hunks
3. Exit non-zero if a finding is reported, blocking the commit

### Hook source (recommended; identical across vaults)

Create `<vault>/.git/hooks/pre-commit` (mode 0755) with:

```sh
#!/bin/sh
# Vault secret-scan pre-commit hook.
# Skips silently if gitleaks not installed (warn only, do not block).
if ! command -v gitleaks >/dev/null 2>&1; then
  echo "gitleaks not installed — secret scan SKIPPED. See /Users/stanley/aDNA/aDNA.aDNA/what/doctrine/doctrine_secret_scanning.md to install." >&2
  exit 0
fi
gitleaks protect --staged --no-banner --redact
status=$?
if [ $status -ne 0 ]; then
  echo ""
  echo "Commit blocked: gitleaks detected secrets in staged changes."
  echo "Review findings above, remove or .gitleaks.toml-allowlist intentional matches, then re-commit."
  echo "Doctrine: /Users/stanley/aDNA/aDNA.aDNA/what/doctrine/doctrine_secret_scanning.md"
  exit $status
fi
exit 0
```

This hook is **not committed** (git hooks live outside the tree). Each vault's contributors install locally. To bootstrap on a fresh clone, a vault's `bin/install-hooks.sh` could be added — out of scope for this doctrine; vault-discretionary.

## The pre-push gate (Chambellan M-A6 amendment — D-41)

The pre-commit hook above is the *cheap* gate. The **pre-push gate is the load-bearing one**, because a commit is local and a push is not. Charter **D-41** measured the fleet and found the gate almost entirely notional:

| Population | Vaults | State |
|---|---|---|
| `git/hooks/pre-push.gitleaks.sh` (the common hook) | **41** | **Ineffective by control flow** — `gitleaks git --pre-commit \|\| gitleaks detect` makes the full-history fallback a **de-facto no-op** whenever nothing is staged at push time, which is the ordinary case |
| Hardened fail-closed hook (`Network.aDNA` family) | **3** | **Effective** — fail-closed and functionally correct |
| `how/standard/hooks/pre-push-sanitize.sh` (vault-*publish* sanitizer) | **2** | **Not a gitleaks gate at all** — a different job, mistaken for this one |
| Nothing | **48** | No gate |

**41 + 3 + 2 + 48 = 94 vaults. Only 3 of 94 — 3.2% — have an effective gate.** (Figures cited from charter D-41, not re-measured here.)

### Ruling: the hardened fail-closed hook is the fleet standard

**One artifact of record, lifted from the `Network.aDNA` family to a canonical home in the standard.** Not a control-flow patch to the 41-vault hook. The reasoning, because the alternative is genuinely arguable:

1. **The "cheaper fix" is not cheaper.** Patching F1's control flow and installing a known-good hook are the *same physical act* — write one file into `.git/hooks/`. The propagation cost is identical, so cheapness cannot decide it.
2. **A fix serves 41 vaults; an artifact serves 91.** The 2 sanitizer vaults and the 48 bare vaults need an artifact regardless — they have nothing to patch. Choosing the fix leaves the fleet running **two hook lineages** and solves under half the population.
3. **Only one candidate has evidence.** The hardened hook was *measured* fail-closed and functionally correct across 3 vaults. A freshly-patched F1 would have zero fleet-hours at the moment of a 91-vault wave.
4. **Two lineages defeat conformance measurement.** With one artifact of record, conformance is a **hash comparison**; with two, every future census must re-classify hooks by reading their control flow — which is exactly how F1's defect survived this long.
5. **F1's defect is the D-60 class.** An instrument that *appears* to gate and does not is worse than no instrument: it produces a clean signal over an unexamined population. Doctrine does not preserve a lineage whose signature failure is false assurance.

**Costs, recorded rather than smoothed**: the hardened hook is `Network.aDNA`'s work and must be **lifted with Venus's co-sign** to a canonical home (`aDNA.aDNA/how/standard/hooks/`, alongside the publish sanitizer) before any wave runs · the 2 sanitizer vaults need **both** hooks, since the publish sanitizer and the gitleaks gate do different jobs — D-41 shows they were confused for one another, so this must be stated, not assumed · a fail-closed gate will block pushes on machines without gitleaks, which is the intended behavior and must be announced before the wave, not discovered during it.

> **This section is the LAW. The propagation wave is NOT executed here** — it is a separately carded act
> (M-A6's own prohibition). No hook file anywhere was created, modified, or installed by this amendment.

### Commit-time warns; push-time fails closed (the asymmetry, stated so it is not copy-pasted away)

The pre-commit hook above **deliberately passes when gitleaks is absent** (§Pre-Commit Hook step 1: "skip with warning… don't block"), so a contributor without gitleaks can still work locally. **The pre-push gate must do the opposite: absent gitleaks ⇒ non-zero exit.** Local work is recoverable; a push is not. Any hook that inherits the commit-time warn-and-pass behavior at push time is **non-conformant by definition**, whatever else it does.

### Conformance, defined so it can be re-measured

A vault **conforms** iff all four hold. This is written for M-A3's instrument to re-run without judgment calls:

1. **Present + executable** — `.git/hooks/pre-push` exists, mode includes `+x`.
2. **Identity** — its content hash equals the canonical artifact's, **or** it sources the canonical artifact by path. (Hash equality is the machine-checkable form; sourcing is permitted so a vault may add local checks around the gate without forking it.)
3. **Fails closed** — with gitleaks absent from `PATH`, the hook exits **non-zero**.
4. **Scans the right thing** — the push range or full history, **not** only the staged index. The F1 defect is exactly a hook that passes 1–3 by inspection and fails 4 in practice.

**Measurement**: 1–2 by file probe + hash; 3–4 by a three-case behavioral probe — (a) gitleaks absent → expect non-zero, (b) planted non-placeholder finding inside the push range with an empty index → expect non-zero, (c) clean range → expect zero. Case (b) is the one that catches F1, and it **must use a non-placeholder value** — see §Positive controls must fire.

## False-Positive Handling

If gitleaks flags an intentional pattern (documentation example, redacted key snippet, prefix-only incident reference), allowlist it in `<vault>/.gitleaks.toml` at repo root.

### Allowlist by path + pattern, not by raw value

```toml
[allowlist]
description = "intentional patterns that look secret-shaped"

[[allowlist.regexes]]
description = "documentation prefix-only references for revoked SI-1/SI-2 incident; ≤2 secret bits per doctrine_credential_handling §6.1"
regex = '''vcp_[0-9A-Za-z]{2}[\.~](?:\.|~|\b)'''  # 2-char prefix only
paths = ['''who/coordination/incident_.*\.md''']
```

Document the allowlist entry inline with a comment explaining what's allowed and why. The pattern is allowed because it carries ≤2 secret bits AND is bounded to incident narrative files AND refers to a revoked credential — per `doctrine_credential_handling.md` §6.1.

### Obsidian allow-list pattern

Some vaults are dual-purpose Obsidian + git vaults (e.g. `Home.aDNA/`, `lattice-labs/`). Obsidian's `.obsidian/` config directory and `.trash/` recovered files can contain false-positive-shaped strings. Allowlist:

```toml
[[allowlist.paths]]
description = "Obsidian config + trash; no secrets land here by policy"
paths = [
  '''\.obsidian/.*''',
  '''\.trash/.*''',
]
```

If a real secret DID land in `.obsidian/` (e.g. a plugin's local API key), that's an Obsidian-plugin-config issue to escalate, NOT a pattern to allowlist. The allowlist is for Obsidian's structural noise, not for secrets-leaked-into-Obsidian.

#### Closing the allow-list (Chambellan M-A6 amendment — D-44)

**This section named a pattern on 2026-05-31 and was never applied.** Charter **D-44** measured the cost: **24 vaults carry pure `.obsidian/plugins/terminal/main.js` noise** — every one of them a `generic-api-key` finding that a human must dismiss by hand, in a corpus where 42 of 94 vaults reported findings at all. A false-positive class that everyone knows to ignore is not harmless; it is the **noise floor that hides the real hit**, and it teaches every reader that a red result means nothing.

> ⚠ **Two populations, deliberately not merged.** D-44's **24 vaults** = the Obsidian `terminal/main.js` noise
> class. Charter **D-24**'s **13 owning graphs** = the `fixture_by_design` population (a *different* class:
> intentional test fixtures, spanning Archive ×3 · aDNALabs · Canvas · ComfyUI · Context · Harness · Molecules ·
> Obsidian · Oration · PercySleep · TappProtocol · Terminal · ZenZachary — and superseding an earlier
> "ComfyUI + Obsidian hook corpora" attribution). They overlap in *vaults* but are different findings with
> different remedies: **allow-list** the first, **exclude-and-separately-report** the second. Merging their
> counts is how "15" once became two vaults' worth of attribution.

**Spec — apply verbatim per vault; a wave may run it unattended.**

Add to `<vault>/.gitleaks.toml` (create if absent). Structural noise only, path-scoped, no value-based rules:

```toml
[[allowlist.paths]]
description = "Obsidian structural noise — plugin bundles + app config + trash. Policy: no secrets land here. Chambellan D-44, 2026-08-17."
paths = [
  '''\.obsidian/plugins/[^/]+/main\.js''',   # minified plugin bundles — the D-44 class
  '''\.obsidian/plugins/[^/]+/styles\.css''',
  '''\.obsidian/.*\.json''',                  # app + plugin config
  '''\.trash/.*''',
]
```

**Three constraints that keep this an allow-list and not a blindfold:**

1. **Path-scoped, never value-scoped.** No regex here matches a *value*. A value-based allowlist entry would suppress the same string everywhere in the vault; a path entry suppresses only where policy says secrets never land.
2. **`.obsidian/plugins/*/data.json` is the known exception** — plugin *data* files are exactly where a plugin's own API key would sit, and the `''\.obsidian/.*\.json''` line above **does cover them**. A vault whose plugins hold credentials must narrow that line (e.g. to `\.obsidian/(app|appearance|core-plugins|workspace)\.json`) rather than accept the broad form. **Narrowing is per-vault and requires a stated reason in the description field.**
3. **Applying this does not make a vault clean.** It makes its findings *legible*. Every vault that lands this entry must be re-scanned afterward and its remaining findings triaged — charter **D-45**'s 18 vaults with non-`.obsidian` `generic-api-key` hits are precisely the population this allow-list stops hiding.

**Status**: spec written and applicable; **not applied by M-A6** (this card writes law, not waves). The application is M-A7's or a successor wave's, and D-45's triage rides with it.

## Bypass Discipline

**Never use `git commit --no-verify` to skip the hook on a real commit.** If gitleaks flags something:

- If it's a real secret: remove it, rotate the underlying credential per `doctrine_key_rotation.md`, then re-commit
- If it's a false positive: add it to `.gitleaks.toml` and re-commit
- If gitleaks is misbehaving: file a finding in the vault's `who/coordination/`, investigate; don't bypass

Bypass is only acceptable in emergency hotfix contexts where the operator has explicitly authorized it AND a follow-up scan + rotation has been scheduled.

## Scanning non-git stores (Chambellan M-A6 amendment — D-57)

Everything above this line assumes git. **The largest credential-bearing surface measured on this node is not a git repository**, and no hook — pre-commit, pre-push, or CI — can see it.

### The transcript vector, named

Agent transcripts are a **first-class secret surface** and are hereby named as one. Measured (charter **D-27** as corrected by **D-55**): `~/.claude/` holds **3,203 distinct `.jsonl`** transcripts (**3,357** if symlinks are followed — four Operation Homecoming symlinks point back into the same tree and double-count ~154 files), ~4 GB, growing during the session that counts it. Scanned (**D-58**): **420 findings across 94 files**, of which **17 sit on high-specificity rules** — `private-key` ×9, `github-pat` ×3, `anthropic-api-key` ×2, `github-oauth` ×2, `aws-access-token` ×1 — ages **2–22 days**. **This is not historical residue. Key material transits transcripts now.**

**Standing rule from D-55**: *any count or scan of this store declares its symlink handling.* Two probes that disagree about what counts as one file are not comparable, and the difference will be read as change. (Same root as the parity law below: an identity comparison is sound only once both sides agree what a row is.)

### Reach is not efficacy — the "clean-within-reach" rule

`gitleaks dir` **reaches** `~/.claude/` (measured: 4m52s over 4.15 GB). Its **efficacy there is 5 of 8** planted shapes: it **misses Anthropic API keys, AWS access-key ids, and passwords embedded in connection URIs**.

> **Therefore: a clean scan of a non-git store is reported "clean-within-reach", never "clean."**
> Every report line, every dashboard cell, every summary sentence. The caveat is not a footnote to be
> dropped when the finding count is zero — **zero is exactly when it matters**, because zero is when a
> reader stops looking.

This binds any store, not just this one: a scanner's report is scoped to the shapes it can detect over the paths it actually walked. State both, or state nothing.

### The wired instance (verified 2026-08-17, Home `f5e4501`)

Per the operator's **DP-10** ruling (S197, item 4 = nightly cadence), the Population-A residue scan is **live**, and it is the reference implementation of this section:

- launchd job `home.adna.residue-scan` (`gui/501`, daily 03:17), running `gitleaks dir` over **all of `~/.claude/`** with `--redact`.
- **Every report line carries the clean-within-reach caveat** (the 5-of-8 efficacy is printed with the result, not stored in a doctrine nobody reads at 03:17).
- **A scope guard exits 3 on any symlink pointing toward Population B** — the never-scanned third-party store (charter **D-31**: 24 third-party home directories, four carrying 51 transcripts belonging to *other people*). Population B is **out of scope by ruling**, and the guard makes that mechanical rather than aspirational. An exit-3 is a **stop**, not a warning.
- Its positive control is a **non-placeholder synthetic value** and **fired at wiring**.
- ⚠ Charter **D-59**'s `preserve_in_place` surface (S47, PRESERVE—LEGAL) is **deliberately NOT scanned** (DP-10 item 3 = (a)). A store may be knowingly out of scope; what is forbidden is a store being out of scope *without anyone knowing*.

### Duration is not a guarantee (F-M-A7-2)

The first unattended pass ran **well past the ~5-minute estimate carried in the ruling** — a deliberate consequence of running under `LowPriorityIO` + `Nice 10`, trading wall-clock for not disturbing the operator's machine. Three rules:

1. **An estimate in a ruling is an estimate, not a contract.** A cadence job that exceeds it has not failed.
2. **A watchdog must not read a long pass as a hang.** Any supervision of a scan job declares a timeout derived from the *niceness-adjusted* worst case, or it declares none at all — a watchdog that kills a healthy nightly scan produces silent non-coverage, which is the failure this whole section exists to prevent.
3. **A cadence job declares its niceness trade** where its schedule is documented. Whoever reads "03:17 nightly" must be able to see that it was deliberately slowed, or they will eventually "fix" it.

## Positive controls must fire (Chambellan M-A6 amendment — the inert-control rule)

A sweep that reports zero proves nothing unless something was proven able to make it report one.

⚠ **The rule exists because a control silently failed to be a control.** At D-57's first attempt, the planted positive control **could not fire**: its value contained `EXAMPLE`, and gitleaks' own placeholder allowlist suppresses such values by design. The scan reported clean; the control reported clean; both were meaningless, and nothing in the output said so.

**The rule:**

1. **Every sweep, scan, or gate probe runs a positive control, and the control must FIRE.** A control that does not fire invalidates the run — the run is re-designed, not re-interpreted.
2. **Controls use non-placeholder synthetic values.** Anything a scanner allowlists as obviously-fake is disqualified: `EXAMPLE`, `TEST`, `XXXX`, `foo`, `changeme`, the well-known vendor-documentation key constants (AWS's canonical `AKIA…EXAMPLE` sample id and its peers — **do not transcribe them here or anywhere; they are recognizable by shape and every fleet scan re-adjudicates them as noise**), and any string the tool's own default allowlist matches. **Check the tool's allowlist before choosing the value, not after the control fails to fire.**
3. **Synthetic means synthetic.** Never plant a real credential, never plant a truncated real credential, never plant a rotated-but-once-real one. The control is a *shape*, generated for the purpose, discarded after.
4. **Controls are dual-sided where the instrument permits**: a planted finding must be **caught**, and a known-clean input must **pass**. One-sided controls miss the instrument that fires on everything.
5. **The mask must not contain what the sweep looks for.** A redaction token or placeholder used inside a sweep's own output must be checked against the sweep's pattern — a mask carrying the searched-for string makes the sweep report a phantom hit on itself.

## Instrument law (Chambellan M-A6 amendment — D-46 / D-60 / F-M-A7-1)

Scanning-adjacent, and the reason it sits in this doctrine: **every rule above is only as true as the instrument that measures it.** Three laws, each earned by a distinct failure this campaign found on disk.

### 1. Parity means multisets, never id sets (D-46 / D-60)

> **Any `md` ↔ `yaml` parity check over a register that permits duplicate ids compares row
> MULTISETS or row identity — never id SETS. A pair-existence check may not be labeled parity.**

Both halves of that sentence are earned:

- **D-46** — a duplicate id (`C55` twice in the `.md`, once in the `.yaml`) did not merely double-book a name: **it hid a gap**. A set comparison saw `C55` present on both sides and reported clean while an entire substrate-tier SSH key had no yaml entry at all. *A duplicate id does not double-book, it conceals.*
- **D-60** — a checker named `check_structural_parity.py` printed the column header `rows=` while its actual test evaluated whether **both files exist**. A planted break (an orphan yaml row *plus* a duplicate md id) **failed to fail it**. A prior "structural-parity PASS exit 0" therefore meant only *both halves are present* — a cheap legible proxy promoted to the thing it stands for, **with a label that actively misled**.

**Therefore**: an instrument's label is part of its contract. Name it for what it tests (`check_both_files_exist`), or make it test what its name claims. And any parity claim is accompanied by the statement that its checker was **proven able to fail** — on both break shapes, orphan-row and duplicate-id.

### 2. An instrument that certifies a change must be re-validated against the **post-change** population before the change runs (F-M-A7-1)

The parity checker's `MD_ROW` regex was `C\d{2}` — **exactly two digits**. The 28-row mint executed under ADR-011 crossed **C99 → C100**, so the checker would have thrown a **false failure on the very run meant to certify the mint**. Widened to `C\d{2,3}` before the run.

This is the **second** instrument in this campaign to age out under the change it certifies — M-A2's remedy naming a specific free id (`→ C60`) went stale three days after authoring when C60 was issued to something else (charter **D-47**). **n = 2 ⇒ a class**, and it is named here:

> **Before an instrument certifies a change, validate it against the population the change will
> produce — not the population that exists today.** A self-test against yesterday's shape is not that.
> Ask specifically: *does this change cross a boundary my instrument encodes?* — a digit width, an id
> range, a row count, a filename pattern, an enum's set of legal values, a date format.

Both instances share one signature: **the instrument encodes an incidental property of the current population as if it were a rule.** Two digits was never the law; it was a description of every id that happened to exist when the regex was written.

### 3. An instrument's clean report is scoped to what it enumerated

The general form of §Reach is not efficacy, and the reason all three laws live together: **every one of these failures produced a clean signal over an unexamined population.** A gate that no-ops (D-41), a parity check that checks existence (D-60), a set comparison blind to duplicates (D-46), a control that cannot fire (D-57), a scanner blind to three key shapes (D-57), a locus pointing at an archived file (D-28). **Six instruments, one failure mode.** When an instrument reports clean, the load-bearing question is never "is it clean?" — it is **"what did this actually look at?"**

## CI Backstop

Local hook can be skipped (uninstalled, bypassed). A CI-side gitleaks job is a stronger backstop; deferred until each vault has CI configured for security scans. Until then, operator periodically runs `gitleaks detect --no-banner` against full history as a manual audit.

For vaults with GitHub Actions: add `.github/workflows/gitleaks.yml` per gitleaks' standard CI recipe (single job; runs on push + PR).

## Post-Rotation Audit Pattern

After a credential rotation per `doctrine_key_rotation.md` step 7, run gitleaks against the FULL history (not just staged):

```sh
cd <vault>.aDNA
gitleaks detect --no-banner --redact
```

If a hit lands, the old credential was already compromised before rotation — file `who/coordination/incident_<YYYYMMDD>_<scope>.md` per the incident-template pattern in `doctrine_credential_handling.md` §5.1.

## Ratification record (§7.7) — Chambellan M-A6 amendment

> Authored by an agent; **owned by the operator**. `proposed` until signed; not in force before signature.
> ⚠ Signing the pre-push ruling **authorizes the law, not the wave** — the 91-vault propagation is a
> separately carded act and requires Venus's co-sign on lifting the hardened hook.

| Field | Value |
|---|---|
| **decision** | Adopt the Chambellan M-A6 amendments to this doctrine: **§Scope amendment** (locus annotations + non-git-store blindness) · **§The pre-push gate** (D-41 — the `Network.aDNA` hardened fail-closed hook is the fleet standard, chosen over patching F1's control flow; commit-warns/push-fails-closed asymmetry; 4-part conformance definition + 3-case behavioral probe) · **§Closing the allow-list** (D-44 — applicable `.gitleaks.toml` spec, with D-24's fixture class held separate) · **§Scanning non-git stores** (D-57 — the transcript vector named; clean-within-reach; the wired nightly job; F-M-A7-2 duration/niceness) · **§Positive controls must fire** (the inert-control rule) · **§Instrument law** (D-46/D-60 multiset parity · **F-M-A7-1** re-validate-before-certifying · scoped-clean-report) |
| **ratified-by** | *(operator — unsigned)* |
| **date** | *(unsigned)* |
| **status** | **proposed** |

**What the operator is signing, in plain terms**: that "clean" is a claim about an instrument's reach and must say so; that a control which cannot fire invalidates its run; that parity means comparing rows, not names; that an instrument must be checked against the change it is about to certify; and that the fleet gets **one** pre-push hook of record — the fail-closed one — rather than a patched second lineage.

**Findings discharged here**: **D-24** (fixture class, 13 graphs) · **D-41** (pre-push gate law) · **D-44** (Obsidian allow-list closed) · **D-46** + **D-60** (parity law) · **D-57** (non-git-store scanning + inert control) · **D-55** (symlink declaration) · **D-58** (transcript vector live) · **F-M-A7-1** · **F-M-A7-2**.

## Related Doctrine

- [[doctrine_credential_handling]] — workspace-level handling discipline (NAMES ONLY, URI-not-value, `head -c N`, backup exclusion)
- [[doctrine_key_rotation]] — what to do *after* a leak is detected
- `Home.aDNA/what/decisions/adr_002_credential_broker_pattern.md` — broker architecture
- `Home.aDNA/what/inventory/inventory_credentials.md` — per-credential inventory (the canonical NAMES-ONLY surface gitleaks should never flag)
- Per-vault `.gitignore` — explicit secret-file patterns (`.env`, `.env.*`, `*.key`, `secrets.json`, etc.)
- Per-vault `.gitleaks.toml` — vault-specific allowlist (false-positive bounded patterns)
