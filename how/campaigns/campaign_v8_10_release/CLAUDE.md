---
type: governance
title: "v8.10 release campaign governance — read before firing"
campaign: campaign_v8_10_release
created: 2026-09-07
updated: 2026-09-07
status: active
last_edited_by: agent_rosetta
tags: [governance, campaign_v8_10_release, template_release]
---

# v8.10 release governance — read before any fire step

**Charter**: [[campaign_v8_10_release]] (§2 carries the six ⛩ rulings; §5 the fire sequence).
**Payload of record**: `campaign_haussmann/artifacts/template_release/release_staging_ledger.md`
— authored, staged and dry-run GREEN under HAUSSMANN **before this campaign existed**.
**Skill**: `how/skills/skill_template_release.md`. **Precedents**: v8.6 · v8.7 · v8.8 · v8.9.

## Conventions in force

1. ⛔ **Never modify `.adna/` outside the ratified payload** (workspace Standing Rule 1). The
   release *syncs* `.adna/` from the shipped clone; it does not hand-edit it as a working tree.
2. **Rows are hypotheses.** Re-verify every payload row against disk at fire time. **Two of this
   ledger's rows failed that check on their first re-read** (charter §3) — v8.6 reverted a wrong
   `cp` on exactly this omission, and v8.8 caught a false pointer in the flagship `CLAUDE.md`.
3. **Any extra path in the assembled clone's `git status` is a NO-GO**, not a note.
4. **Controls before conclusions.** C1 (executable byte-identity) is load-bearing: it separates
   *the prose was rewritten* from *the program was changed*. A green run of a control that was
   green yesterday proves nothing about today's tree — re-run it.
5. **Derive, never carry.** Every count, limit and pin — schema limits from
   `src/content.config.ts`, versions by `grep`, the hook version from `LAYER_CONTRACT_VERSION`.
   *A derived total can still carry an underived breakdown, and the breakdown is what the
   conclusion rests on.*
6. **Push precedes deploy, each its own ⛩ GO.** `inject_build_stamp.mjs:83` stamps `git rev-parse
   HEAD` and **nothing checks HEAD is public** — deploying an unpushed tree publishes a commit no
   stranger can resolve.
7. **Tags only; never move a pushed tag.** A miss ships as a follow-up commit to `main`.
8. **Cross-vault writes are memos, never direct edits** (Rule 10). The two Q3 memos are **staged**;
   delivery is a separate outward act with its own ⛩ GO.
9. **No new instrument at this sitting's tail.** Conventions 15/16/17 each ruled this shape: *the
   habit costs a sentence and cannot itself be wrong; the checker costs a sitting and can.*
10. **Re-run the suite AFTER the record edits.** `gate-41` reads governance frontmatter, so a close
    cascade that edits `STATE.md` is a change the suite can see; re-review `MANIFEST.md`
    **genuinely**, never date-bump (G41d's ratchet is at **0**).

## Build + deploy discipline

- **`npx astro build`**, never `npm run build`; then `node scripts/inject_redirects.mjs .`, or
  gate-30 reds on a perfectly good tree. Any in-container `gate-49` run rebuilds `dist/` and drops
  the redirect config — **re-inject after it**.
- **`/` IS a `gate-49` template.** A changelog entry moves the homepage strip and forces a `home`
  re-baseline. Confirm the red **in-container first**, regenerate, then **assert the control**
  (exactly the expected files changed; the untouched ones prove nothing leaked). ⚠ `AMENDMENT 1`
  recorded `home` as noise at 17/19 px and supplies a **ready-made wrong explanation** for any small
  diff — ask what the page *says* changed, not only how many pixels moved.
- **Deploy**: `site/scripts/deploy_adna.sh prod` only; token by **env var** (`SS_VERCEL_TOKEN`),
  never `--token`; **no override flags**; record the `deploy_record` in the session log **and**
  `STATE.md`.
- **Stamp sessions with `date -u`** — UTC has been a day ahead of local PDT.
- **`grep -c` exits 1 on zero** (`|| echo 0` prints `0\n0` — use `grep -rli`) · **`git mv` stages
  the pre-edit blob** (re-`git add` explicitly) · **`git` can vanish from PATH** →
  `/opt/homebrew/bin/git`.
