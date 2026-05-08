---
type: artifact
artifact_type: hook_spec
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_planning_01
objective: 4
target_mission: M05  # M05 ships pre-push-sanitize.sh from this spec
target_artifact: .adna/how/standard/hooks/pre-push-sanitize.sh
target_skills:
  - skill_vault_publish.md   # consumes the hook automatically
  - skill_deploy.md          # installs the hook
created: 2026-05-08
updated: 2026-05-08
status: complete
last_edited_by: agent_stanley
tags: [artifact, mission_deliverable, m01, obj4, hook_spec, pre_push, sanitization, layer_contract, m05]
related_artifacts:
  - m01_obj4_publish_naming_adr.md
  - skill_lattice_publish_rewrite_spec.md
  - skill_git_remote_setup_spec.md
  - coord_2026_05_08_publish_rewrite.md
related_decisions:
  - adr_007_outer_adna_claude_md_disposition.md  # template paths
---

# M01 Obj 4 — Pre-Push Sanitization Hook Spec (M05-bound)

> **Deliverable 9 of M01** (per [[../mission_adna_infra_planning_01.md|mission §Deliverables]] row 9). Specifies the `pre-push-sanitize.sh` shell hook installed at `.git/hooks/pre-push`. The hook fires automatically on every `git push`; FAILs abort the push; WARNs prompt operator confirmation. Sibling spec to [[skill_lattice_publish_rewrite_spec.md|skill_lattice_publish_rewrite_spec.md]] and [[skill_git_remote_setup_spec.md|skill_git_remote_setup_spec.md]].

The hook is the trust boundary for vault publishing — it runs without operator action and is the last line of defense against pushing private content, secrets, or accidentally-committed binaries to a public remote.

---

## §1 Hook source location

The canonical hook source lives in the template at:

```
.adna/how/standard/hooks/pre-push-sanitize.sh
```

`how/standard/` is the new directory introduced for shared, vault-agnostic infrastructure scripts (parallels `how/standard/skills/` patterns already in some vaults). M05 creates this directory if it doesn't already exist in the post-M03 flat template.

The installed copy lives at the consuming vault's:

```
.git/hooks/pre-push
```

(`.git/hooks/` is git's standard hook directory; not version-controlled.)

The installer skill ([[skill_lattice_publish_rewrite_spec.md|skill_deploy.md]] sketch in §6 of that spec) copies the source to the install location with `chmod +x`.

---

## §2 Hook trigger

`git push` invokes `.git/hooks/pre-push` automatically before any data is sent to the remote. Stdin contains the refs being pushed (one line per ref: `<local-ref> <local-sha> <remote-ref> <remote-sha>`). The hook can examine the local working tree, the staged content, and the commit graph being pushed.

Exit code semantics (matched against mission spec [[../mission_adna_infra_planning_01.md|mission §Obj 4]] line 326–327):

| Exit | Meaning | Git behavior |
|---|---|---|
| **0** | Clean — sanitization passed | Push proceeds normally |
| **1** | FAIL — sanitization violation | Push **aborted** by git automatically; nothing reaches the remote |
| **2** | WARN — borderline finding requiring operator confirmation | Hook prompts operator via tty; if operator confirms (`y`), the hook exits 0 to allow the push; if rejected, hook exits 1 |

Exit code 2 is **internal** to the hook — git does not have a built-in WARN-prompt semantic. The hook runs an interactive prompt itself, then transitions internally to 0 or 1 based on operator response.

---

## §3 Sanitization rules — LAYER_CONTRACT §4 v0.1

> **LAYER_CONTRACT** is a forward-reference to a v7.x+ document that will formalize vault-layer content boundaries (what private/local/operator-only content looks like, where it can live, how it's identified). M05 ships this hook with **§4 v0.1** rules as defined below; later LAYER_CONTRACT documents extend or refine the ruleset. The hook source carries a version comment (`# LAYER_CONTRACT_VERSION=4.0.1`) so deployments can be audited for which sanitization version they enforce.

### Rule R1 — Local/private directory leakage (FAIL)

The hook scans the **set of files about to be pushed** (computed via `git diff --name-only $remote_sha $local_sha`) for any path under:

- `what/local/`
- `how/local/`
- `who/operators/`
- `deploy/`
- `.publish-clone/`
- `.publish-clone.bak/`
- `private/` (any top-level `private/` directory)

Any match → **exit 1 (FAIL)**. Reason: these paths are gitignored by template default; a match means either `.gitignore` was edited to remove an exclusion (intentional but operator should confirm via re-push after explicit override) OR an operator force-added a file under one of these paths (almost always a mistake).

The hook prints the offending paths and exits.

### Rule R2 — Secret-pattern matches (FAIL)

The hook runs a regex scan over the **content of files about to be pushed** for high-confidence secret patterns:

| Pattern (regex) | What it catches |
|---|---|
| `(?i)(api[_-]?key|secret[_-]?key|access[_-]?token)\s*[:=]\s*['"]?[A-Za-z0-9_\-]{20,}` | API/secret/access keys |
| `(?i)(github[_-]?token|gh[_-]?token)\s*[:=]\s*['"]?gh[ps]_[A-Za-z0-9]{36,}` | GitHub PAT (modern format) |
| `(?i)openai[_-]?api[_-]?key\s*[:=]\s*['"]?sk-[A-Za-z0-9]{40,}` | OpenAI API keys |
| `(?i)anthropic[_-]?api[_-]?key\s*[:=]\s*['"]?sk-ant-[A-Za-z0-9_\-]{40,}` | Anthropic API keys |
| `-----BEGIN (RSA \|EC \|OPENSSH \|)PRIVATE KEY-----` | Embedded private keys |
| `(?i)aws_secret_access_key\s*[:=]\s*['"]?[A-Za-z0-9/+=]{40}` | AWS secret access keys |
| `(?i)latlab[_-]?token\s*[:=]\s*['"]?[A-Za-z0-9_\-]{20,}` | latlab API tokens |

Match → **exit 1 (FAIL)**. The hook **does not print the matched value** — it prints the file path + line number + redacted excerpt (first 4 chars of the secret + `***`).

False-positive override: operators can mark a line as audited-safe by appending the comment `# pragma: allowlist secret` (matching the `detect-secrets` convention). Lines with this comment are exempt.

### Rule R3 — Filename patterns (FAIL)

The hook FAILs on any pushed file matching:

- `\.env$`, `\.env\..*$` (environment files)
- `id_rsa$`, `id_ed25519$`, `id_ecdsa$`, `id_dsa$` (SSH private keys)
- `.*\.pem$` matching `BEGIN .*PRIVATE KEY` content (handled by R2 anyway, but filename heuristic adds a cheap front-line check)
- `\.netrc$`, `\.npmrc$` containing `_authToken=` lines
- `secrets?\.(yaml|yml|json|toml|ini)$` (operator-discipline filename pattern)

### Rule R4 — Large binary files (WARN)

Any pushed file > 10 MB → **exit 2 (WARN)**. Reason: large binaries usually shouldn't live in vault repos (git LFS or external object storage is the right home). The operator confirms intentional inclusion.

The threshold is configurable via `SANITIZE_MAX_BYTES` env var (default `10485760` = 10 MiB).

### Rule R5 — Frontmatter `confidential` / `private` flags (FAIL)

Any pushed `.md` file whose YAML frontmatter contains `confidential: true` or `private: true` → **exit 1 (FAIL)**. These flags exist for vault content that the author flagged as not-for-publish; pushing them is almost always wrong.

The hook reads the frontmatter using a small awk/sed parser (no Python dependency) — only checks the first `---`-bounded YAML block at the top of the file.

### Rule R6 — Frontmatter `status: draft` (WARN)

Any pushed `.md` file with `status: draft` in frontmatter → **exit 2 (WARN)**. Reason: drafts are conventionally not published. Operator confirms intent (e.g., publishing an in-progress notebook for collaboration) before push proceeds.

### Rule R7 — Operator-defined deny list (FAIL)

The hook reads `.adna/sanitize_deny.txt` (template-shipped, can be vault-overridden as `sanitize_deny.txt` at vault root) for additional path/regex deny patterns. Each line is either a literal path prefix or a regex prefixed by `re:`. Matches → **exit 1 (FAIL)**.

Default template content:
```
# .adna/sanitize_deny.txt
# Lines starting with # are comments. Empty lines ignored.
# Literal path prefix: just the path
# Regex: prefix with "re:"

# (No default deny lines beyond R1 patterns; vault operators add as needed.)
```

---

## §4 Hook script outline (~80 lines of bash)

M05 implements the hook as a single bash script. Outline:

```bash
#!/usr/bin/env bash
# pre-push-sanitize.sh — vault publish sanitization
# Source: .adna/how/standard/hooks/pre-push-sanitize.sh
# Installed by: skill_deploy
# LAYER_CONTRACT_VERSION=4.0.1
set -euo pipefail

# ---- Configuration ----
SANITIZE_MAX_BYTES="${SANITIZE_MAX_BYTES:-10485760}"  # 10 MiB
DENY_FILE_TEMPLATE=".adna/sanitize_deny.txt"
DENY_FILE_VAULT="sanitize_deny.txt"

# ---- Read git push refs from stdin ----
declare -a refs
while read -r local_ref local_sha remote_ref remote_sha; do
  [[ "$local_sha" = "0000000000000000000000000000000000000000" ]] && continue  # delete
  refs+=("$remote_sha..$local_sha")
done

# ---- Compute the set of files about to be pushed ----
mapfile -t pushed_files < <(
  for range in "${refs[@]}"; do
    git diff --name-only "$range"
  done | sort -u
)

[[ ${#pushed_files[@]} -eq 0 ]] && exit 0

# ---- Track findings ----
fail_findings=()
warn_findings=()

# ---- R1: Local/private directory leakage ----
for f in "${pushed_files[@]}"; do
  case "$f" in
    what/local/*|how/local/*|who/operators/*|deploy/*|\
    .publish-clone/*|.publish-clone.bak/*|private/*)
      fail_findings+=("R1: $f (private path leakage)")
      ;;
  esac
done

# ---- R2: Secret-pattern matches (over file content) ----
# (loop over pushed_files, check git show $local_sha:$f or working tree, run grep -P
#  with the regex set above; redact matched values when reporting)
# ... (~25 lines)

# ---- R3: Filename patterns ----
# (case statement against the patterns)
# ... (~10 lines)

# ---- R4: Large binary files (WARN) ----
for f in "${pushed_files[@]}"; do
  size=$(git cat-file -s "$local_sha:$f" 2>/dev/null || echo 0)
  [[ "$size" -gt "$SANITIZE_MAX_BYTES" ]] && warn_findings+=("R4: $f (size $size bytes > threshold)")
done

# ---- R5: Frontmatter confidential / private (FAIL) ----
# (small awk parser to extract first --- block; check for matches)
# ... (~10 lines)

# ---- R6: Frontmatter status: draft (WARN) ----
# (similar parser; warn list)
# ... (~5 lines)

# ---- R7: Operator-defined deny list (FAIL) ----
for deny_file in "$DENY_FILE_TEMPLATE" "$DENY_FILE_VAULT"; do
  [[ -f "$deny_file" ]] || continue
  while IFS= read -r line; do
    [[ -z "$line" || "$line" =~ ^# ]] && continue
    if [[ "$line" =~ ^re: ]]; then
      pattern="${line#re:}"
      for f in "${pushed_files[@]}"; do
        [[ "$f" =~ $pattern ]] && fail_findings+=("R7: $f (deny: $pattern)")
      done
    else
      for f in "${pushed_files[@]}"; do
        [[ "$f" == "$line"* ]] && fail_findings+=("R7: $f (deny: $line)")
      done
    fi
  done < "$deny_file"
done

# ---- Decision ----
if [[ ${#fail_findings[@]} -gt 0 ]]; then
  echo ""
  echo "❌ pre-push-sanitize: FAIL — push aborted"
  printf '  %s\n' "${fail_findings[@]}"
  echo ""
  echo "Remediate the findings above (or add 'pragma: allowlist secret' on false-positive secret lines), recommit, then retry."
  exit 1
fi

if [[ ${#warn_findings[@]} -gt 0 ]]; then
  echo ""
  echo "⚠ pre-push-sanitize: WARN — borderline findings"
  printf '  %s\n' "${warn_findings[@]}"
  echo ""
  read -p "Continue with push? [y/N] " yn </dev/tty
  if [[ "$yn" =~ ^[Yy]$ ]]; then
    echo "INFO: operator confirmed; proceeding with push."
    exit 0
  else
    echo "INFO: push aborted by operator."
    exit 1
  fi
fi

echo "✓ pre-push-sanitize: clean ($(echo "${#pushed_files[@]}") files checked)"
exit 0
```

This outline is ~80 lines. M05 fills in the rule implementations (~25 lines for R2, ~10 each for R3 and R5, ~5 for R6) — total estimated final size ~130 lines.

---

## §5 Self-test mode

The hook supports a `--self-test` invocation (used by `skill_deploy` per [[skill_lattice_publish_rewrite_spec.md|skill_deploy.md sketch]]):

```bash
.git/hooks/pre-push --self-test
```

In self-test mode, the hook ignores stdin and runs the rules against a known-clean and known-dirty fixture set:

```
.adna/how/standard/hooks/test_fixtures/clean/
  what/concepts/example_concept.md   # valid published content
  README.md                          # standard repo file

.adna/how/standard/hooks/test_fixtures/dirty/
  what/local/notes.md                # R1 violation
  fake_with_secret.md                # R2 violation (contains pretend API key)
  config/.env                        # R3 violation
  large_binary.bin                   # R4 violation (10 MB+ stub via dd)
  draft_post.md                      # R6 violation (status: draft)
```

Self-test exits 0 if the hook produced FAIL on the dirty fixture and CLEAN on the clean fixture, exits 1 otherwise. This catches install-time corruption and regression in the rules.

---

## §6 Bypass mechanism

For operators who genuinely need to push despite a finding (rare; e.g., publishing a debug binary intentionally over the warn threshold; pushing a draft for collaboration with a co-author):

```bash
git push --no-verify origin main
```

`--no-verify` is git's standard escape hatch. The hook is bypassed entirely; nothing is logged in the vault. (The publish receipt mechanism in [[skill_lattice_publish_rewrite_spec.md|skill_vault_publish.md]] §3.5 records `force_unsafe=true` if the *skill-driven* publish flow is used with the bypass parameter — that's the audit-trail-preserving path. `git push --no-verify` directly is the silent-bypass path, and operators are trusted to use it sparingly.)

---

## §7 Performance

The hook runs synchronously between `git push` invocation and data transfer. Performance budget:

| Operation | Expected cost (1000 files, ~10 MB total) |
|---|---|
| R1 path matching | < 5 ms (regex per file in bash) |
| R2 content scanning | ~50 ms (grep -P over file content) |
| R3 filename patterns | < 5 ms |
| R4 size check | < 50 ms (one `git cat-file -s` per file) |
| R5/R6 frontmatter | ~30 ms (awk pass over .md files) |
| R7 deny list | < 5 ms |
| **Total** | **~150 ms** |

For a typical aDNA vault publish (10–50 files changed, < 1 MB), the hook completes in < 50 ms. The performance budget allows comfortably-larger vaults.

---

## §8 Self-reference (Standing Order #2)

The hook IS the v7.0 demonstration of the campaign's "the vault is the git repo" insight ([[../mission_adna_infra_planning_01.md|mission §Obj 4 §Core insight]]): instead of an external rsync workaround that filtered content into a separate `.publish-clone/`, the hook lets the vault remain the repo while still enforcing publish-discipline. The same outcome (no private content leaks to the remote) is achieved with a smaller, more git-native mechanism.

The dual-audience test passes when:
- A developer reads §3 and can implement each rule independently.
- A newcomer reads §1–§2 and understands "this is the thing that protects the public remote from accidents" without needing to know what LAYER_CONTRACT means yet.

The hook is also itself a content artifact — its source lives in the template under `how/standard/hooks/`, where it can be read, audited, and version-controlled like any other vault content. Standing Order #2 is satisfied: the publishing infrastructure follows the same content conventions as the published content.

---

## §9 Forward-references

- **M05** ships the hook source from this spec; ships `skill_deploy.md` to install it.
- **M07** §Obj 7 (b.1) naming-convention audit may add a Rule R8 (naming-convention violations FAIL) once ADR-009 is `accepted`. Reserved for that pass.
- **`campaign_adna_v3_ecosystem_compliance` M05-EC** verifies every opted-in vault has the hook installed at correct version (`LAYER_CONTRACT_VERSION` matches expected).
- **Future LAYER_CONTRACT documents** (post-v7.0) may extend §3 with additional rules; the hook's version comment makes the rule-set version explicit.

Status: **spec, ready for M05**.
