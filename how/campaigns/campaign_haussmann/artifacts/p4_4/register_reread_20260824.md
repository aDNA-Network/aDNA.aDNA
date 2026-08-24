---
type: artifact
artifact_type: register_reread
campaign_id: campaign_haussmann
mission_id: mission_haussmann_p4_4_ci_hardening
status: complete
created: 2026-08-24
updated: 2026-08-24
last_edited_by: agent_rosetta
probe_date: 2026-08-24
probe_scope: "local tree at HEAD e328032 + read-only GET against https://adna.network. NOT: lemur's checkout, npm, or any authenticated surface."
tags: [haussmann, p4_4, register, debt, convention_12, convention_14, convention_16]
---

# P4.4 inherited-register re-read — every row at the object, 2026-08-24

> Run **before** scoping P4.4, per the mission's own ⚠ instruction: *"when P4.4 is finally scoped,
> re-read every row against the live tree first, because three of these have already shrunk or changed
> purpose on a re-probe."* It had. **Four more have moved since that sentence was written.**

**Count derived**, never typed: `grep -cE '^\| \*\*F-[a-z]\*\*'` → **19** (`a`–`u`, less withdrawn
`F-s` and `F-t`).

## Disposition summary

| Disposition | Count | Rows |
|---|---|---|
| ✅ **DISCHARGED** — do not build | **3** | `F-b` · `F-h` · `F-q` |
| ◐ **NARROWED** — residue is smaller than the row states | **1** | `F-l` |
| ⚠ **WORSENED** — the row's own figure is now stale low | **4** | `F-k` · `F-m` · `F-n` · `F-o` |
| — **UNCHANGED** — re-confirmed at the object | **11** | `F-a` `F-c` `F-d` `F-e` `F-f` `F-g` `F-i` `F-j` `F-p` `F-r` `F-u` |

**⇒ 3 of 19 rows were already dead, and 4 more understate their own defect.** Scoping P4.4 from the
register as written would have funded three fixes for defects that no longer exist and budgeted four
others against numbers that have drifted.

---

## ✅ Discharged

### `F-b` + `F-q` — the gitleaks false positive, and the baseline that ratcheted

**Both closed by the same instrument**, and neither row says so. `.gitleaks.toml` (landed **P3.4,
2026-08-22**, after both rows were filed) carries a second allowlist suppressing the extracted secret:

```toml
regexes = [ '''^measured\+gating$''' ]
```

**Verified at the object, not cited from P4.2's record** (convention 14 — a green someone else ran is
still someone else's green):

```
$ gitleaks detect --source . --no-banner
881 commits scanned.  no leaks found
```

⭐ **The config's own comment already contains P4.4's lesson**, written by whoever landed it: an
allowlist written against the *readable phrase* (`token pipeline, measured+gating`) silently matches
nothing, because `regexes` match the **Secret** gitleaks extracted, not the surrounding Match —
*"a suppression that suppresses nothing looks identical to one that works until you count."*

⇒ **Strike both rows with this evidence. Build nothing.** The remaining half of F-b's intent — that a
scanner which always cries once stops being read — is satisfied: the baseline is **0**, a threshold
that means something.

### `F-h` — P0.2's header evidence, re-read against the alias

The row asks for an **evidence re-read**, not a rebuild. Performed, read-only, 2026-08-24:

| `vercel.json` `/(.*)` expects | Served on `https://adna.network/` | |
|---|---|---|
| `Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; …` | identical | ✅ |
| `X-Frame-Options: DENY` | identical | ✅ |
| `X-Content-Type-Options: nosniff` | identical | ✅ |
| `Referrer-Policy: strict-origin-when-cross-origin` | identical | ✅ |

**4/4 match by value on the public alias.** P0.2's header claims hold. Row discharged.

⭐ **And doing it by hand produced the design constraint F-f's fix needs.** The alias also serves
`strict-transport-security: max-age=63072000`, which **is not in `vercel.json` at all** — Vercel injects
it. ⇒ **A field-by-field comparator must assert `expected ⊆ served`, never set-equality**, or it
false-fails on a platform-injected header on its very first live run. That is exactly the shape of the
five instruments this campaign has shipped wrong. **Recorded here so F-f's implementer inherits it
instead of discovering it.**

---

## ◐ Narrowed

### `F-l` — the redaction idiom

**Zero live executable uses.** Vault-wide scan (scope stated, per *a negative result is only as wide as
the command that produced it*): whole tree, excluding `node_modules` · `.git` · `dist` · `.astro`.
**11 files match, and all 11 are records** — 7 session-history files, `STATE.md`, the campaign
`CLAUDE.md`, a July Storyweave mission, and F-l's own row. **No script, no gate, no deploy path.**

⚠ **But F-l cannot be closed by a grep, and this is F-q's trap one level down.** The only remaining
matches are the *documentation of the defect*. A future check that greps for the unsafe idiom scores
**11** and concludes it is still in use — the identical mechanism as `F-o`, and as the gitleaks baseline
that ratcheted every time someone honestly wrote down why the scan was clean.

⇒ **Residue is one vault-doctrine note** (`doctrine_credential_handling`: the ≤6-char-prefix rule
governs how a leaked value is *referenced afterwards*; nothing governs the probes that *produce* one).
**Not a gate. Do not build a grep for this.**

---

## ⚠ Worsened — the row's own figure is stale low

| Row | Row says | Measured 2026-08-24 | Delta |
|---|---|---|---|
| `F-k` | `.adna/` has no pre-push hook (`FAIL_NONE`) | **confirmed** — `../.adna/.git/hooks/pre-push` **does not exist**. ⚠ **And this vault's own hook is md5 `216aaca254b97d69819562d506afca29` = the proven v1 no-op**, not v2 | the row scopes the defect to `.adna/`; **the vault running the release skill is itself uncovered** |
| `F-m` | `adr_index.md` is **twelve** ADRs behind | index: **41** ADRs, highest row **046**, `updated: 2026-07-02`. Disk: **54** files, highest **`adr_059`** | **twelve → thirteen** (047–059) |
| `F-n` | MANIFEST **45** days behind STATE | `MANIFEST.updated: 2026-07-06` vs `STATE.updated: 2026-08-24` | **45 → 49** days |
| `F-o` | `mcp` returns **5** incidental hits in `llms-full.txt` | **11** hits (corpus 962,847 bytes) | **5 → 11 in three days** |

⭐ **`F-o` is the row that proves its own thesis while you read it.** It predicts that a static probe
over a growing corpus drifts until a future `grep -c` misreads the item as moved. In the three days
since it was filed the count **more than doubled** — with, as far as this probe can tell, nothing new
claiming an MCP capability. The row is not just true; it is accelerating.

⚠ **`F-k`'s widening is the one that changes an owner.** Hopper's finding was about `.adna/`. Measured
here, **`aDNA.aDNA` itself runs the v1 no-op** — so the vault that will *fire* `skill_template_release`
to ship the fail-closed v2 is not itself protected by it, and every "gitleaks clean" this campaign has
recorded rested on the **by-hand** `gitleaks detect`, never on the hook. That is already written down as
an erratum on the P3.5 session record; what is new is that it is still true today.

---

## — Unchanged, re-confirmed at the object

| Row | Probe | Result |
|---|---|---|
| `F-a` | `gate-4-a11y.spec.ts:79` | `.withTags(['wcag2a','wcag2aa'])` — best-practice still invisible |
| `F-c` | `grep -rn derive_register_counts site/ .github/` | **0 hits** — still hand-run and hand-pasted |
| `F-d` | `gate-26-claim-register.spec.ts` | no `retired`/`cut` status; only FALSE→ABSENT and verified→PRESENT |
| `F-e` | `find . -name lighthouse_profiles.json` | **0 hits** vault-wide — convention 4 still unfollowable, every gate-19 bar still a transcription |
| `F-f` | `check_live_headers.mjs:75` | `expected.filter(k => !res.headers.has(k.toLowerCase()))` — **names only**. The file admits it at `:53` |
| `F-g` | `astro.config.mjs:32–33,57` | the dual-root walk and the misleading *"cannot be defeated by hook ordering"* comment both still there |
| `F-i` | `gate-27-leak-lint.spec.ts` walk | `.endsWith('.html') \|\| .endsWith('.md')` — `.json` still invisible |
| `F-j` | `npx astro check` | **26 errors, 0 warnings, 69 hints** across 161 files — **exactly** the row's figure, unchanged |
| `F-p` | `gate-17-agentic.spec.ts:226` | `test.skip(!existsSync(configPath), …)` — guards on the file, not the routes |
| `F-r` | grep the struck R-95 wording | 1 file: `src/content/changelog/2026-08-22.md`; **zero page hits** — exactly as described |
| `F-u` | `git cat-file -t 30c8163` / `f4fa9c5` | **both fail** — lemur has not pushed; **freeze holds**; `deploy_adna.sh` still has a clean-tree guard and no alias lease |

---

## Convention-16 habit, discharged for this session

Any session touching `site/` re-probes the surfaces its phase shipped, against the alias, before
trusting a `completed` status. Read-only GET, 2026-08-24:

| Surface | Code |
|---|---|
| `/` · `/state-of-the-network` · `/api/registry.v1.json` · `/vaults.json` · `/llms.txt` | **200 · 200 · 200 · 200 · 200** |

`install.sh` still pins `VERSION="0.3.1"` — **the post-restore state F-s describes, unchanged.** No new
deploy has landed from either checkout since 2026-08-24T02:44:59Z. The site is internally consistent and
regressed to the older release, which is the known and accepted state under the freeze.

## What this changes for scoping

1. **Three rows are dead** (`F-b`, `F-h`, `F-q`) — remove them from P4.4's scope entirely.
2. **One is a doctrine note, not a gate** (`F-l`) — and must *not* get a grep-based checker.
3. **Four are worse than budgeted** (`F-k`, `F-m`, `F-n`, `F-o`) — `F-o` in particular is time-sensitive.
4. **`F-f` inherits a free design constraint** from F-h's discharge: `expected ⊆ served`, never equality.
5. **The register's real live count is 16**, of which **1** (`F-l`) is documentation-only.
