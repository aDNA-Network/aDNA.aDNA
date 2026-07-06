---
type: campaign_artifact
campaign: campaign_meridian
title: "Meridian Findings Ledger — tri-surface review sweep"
created: 2026-07-06
updated: 2026-07-06
status: active
last_edited_by: agent_rosetta
tags: [meridian, findings, review]
---

# Meridian Findings Ledger

Findings from the P1 review sweeps (M3 vault/graph/repo lane · M4 website lane), plus residue verified
from prior campaigns. Disposition vocabulary (Looking Glass pattern): **fix-here** (this campaign, names
the mission) · **escalate** (owner + memo) · **defer** (backlog idea, named) · **watch** (record only).
Effort: S / M / L. L items require explicit DP1 call-out.

**Finding ID convention**: `F-MER-<lane><n>` — lanes A (vault/residue) · B (website).

## Lane A — campaign residue + vault/graph/repo (M3, 2026-07-06)

| ID | Finding | Evidence | Effort | Proposed disposition |
|----|---------|----------|--------|----------------------|
| F-MER-A1 | **STATE.md re-bloating fast** — dieted 554→47.7 KB on 2026-07-01, back to 115.9 KB (+143% in 5 days); ⏭ QUEUED = 24 banners / 38.5 KB (33% of file); ~7 *completed* campaigns still carry full verbose paragraphs | `git show 4e493ce:STATE.md`=47,695 B vs `wc -c`=115,866 B; QUEUED bytes 38,470 | M | **fix-here-M6** (shed stale banners + compress completed-campaign rows → STATE_archive) + defer:`idea_state_prompt_shed_on_close` (accepted) |
| F-MER-A2 | **README tree-block counts stale** — "26 base templates" (actual 41→**42** after M1) + "26 agent recipes" (actual 50); plus M1's new template makes ALL 41-claims stale by one (MANIFEST/CLAUDE/glossary_template) | `README.md:290,295`; M1 added `template_ratification_record` | S | **fix-here-M6** (full count-surface sync to 42/50) |
| F-MER-A3 | **compliance_checker.py footguns** — writes report files to vault root (not gitignored; dirtied tree mid-review, reverted), needs python3.13, scores 0.0% on Rosetta content types (vocab lacks concept/pattern/glossary/template/tutorial) | tool run + `git check-ignore` | S–M | **defer** (file tool-hardening backlog idea at M6) |
| F-MER-A4 | Legacy frontmatter gaps — 4/25 sampled files missing required fields, all historical (2026-05 sessions + 2 old mission files) | structural sample | S | **watch** |
| F-MER-A5 | ~14 coordination memos `ack_required: true` unanswered (Argus 8d · Hestia install_sha 8d · 6 Champollion-propagation 4d · Hestia lighthouse-cosign 7d; +2 Wilhelm 0d = expected M1 output) | who/coordination/ scan | — | **watch** (owner-driven, cross-vault) |
| F-MER-A6 | Terminal-campaign status residue — `campaign_rosetta` top-doc `status: active` (may be intentional); 12 STR design-spec artifacts `proposed`; ~40 artifacts in completed campaigns `active` (artifacts aren't lifecycle-closed by convention) | frontmatter scan | S | **watch** (convention question, not per-file defect) |
| F-MER-A7 | ~24 backlog ideas shipped in v8.4 still `status: accepted` (no post-ship close-out ran) + 4 individual stale statuses (from M5's census) | [[v8_6_release_candidate]] §stale-statuses | S | **fix-here-M6** (batch flip accepted→resolved with ship evidence) |
| F-MER-A8 | **Oration.aDNA CLAUDE.md carries a committed harness-injection incl. the operator's email (PII)** at L338–341 (`# userEmail` + `# currentDate`, genesis-time paste, ADR-042 §13.2 class); in git history; Oration was pushed at Concord → likely on the remote | M2 recon + `adna_validate` (2 residual errors post-M2, correctly pre-existing) | S (tip-strip) | **fix-tip via DP1 add-on** (DP0 direct-by-default covers it); **history-scrub = operator ruling at DP1** |
| F-MER-A9 | ContextCommons.aDNA README is uncustomized base-template boilerplate (title "Agentic-DNA", tree labeled "Agentic-DNA/", customize-markers); + its templates trigger-table documents only the 22 base (12 CC templates missing) | M2 recon | M | **defer** → CC-hygiene backlog flag (structural, beyond count scope) |
| F-MER-A10 | Pre-existing CLAUDE↔CHANGELOG governance-version mismatches: ContextCommons (7.1 vs 6.0) + Network (6.0 vs 7.0) — validate warnings | `adna_validate` warnings (both vaults) | S | **watch** (each vault's own next hygiene pass) |

**Verified-clean (M3)**: Concord close-out real (4/4 sampled adoption commits exist; roster traceable) · all other campaigns/missions terminal · governance validator **Zero drift** · counts agree on 5/6 surfaces (41 templates [pre-M1] / 50 skills / 16 reviewers / **27 subtopics correct** — Champollion's "28" had counted the recipes index; DROPPED) · 0% real broken wikilinks (3/120 = intentional template placeholders) · sessions/active clean · no stale git locks · README repo refs current.

## Lane B — website (M4, 2026-07-06)

| ID | Finding | Evidence | Effort | Proposed disposition |
|----|---------|----------|--------|----------------------|
| F-MER-B1 | **Latent RED gate in tree** — G20 claim-trace manifest hardcodes expected `"v2.3"` but `standard.ts` moved to v2.5 (Champollion M4.4, 2026-07-02); the 304/304 green (2026-06-28) predates the bump — next gate run FAILS | `tests/gates/fixtures/claim_trace_manifest.json:28,33` vs `src/data/standard.ts:24` | S | **fix-here-M7** (pre-req: gates can't certify the deploy until fixed) |
| F-MER-B2 | Registry vault count stale by ~14 — site renders **54** (vaults.json `generated_at: 2026-06-24`); Home.aDNA inventory now **68** (2026-07-03) — undercounts on /, /vaults, /network, /vaults/graph, llms.txt | `src/data/vaults.json` vs `inventory_vaults.yaml` | S | **fix-here-M7** (regen via `sync:vaults`) + **escalate**: Hestia/pt19 FYI memo |
| F-MER-B3 | `install_truth.json` stale (A-04) — `generated: 2026-06-10`, `template_sha: 74cb761`; `.adna` now at v8.5 (`e38a8f0`), image `05be58e` | `src/data/install_truth.json:11,16` | S | **fix-here-M7** (regen via `sync:install` after `.adna` parity check) + same memo |
| F-MER-B4 | **A-11 + A-12 already IMPLEMENTED in source but UNDEPLOYED** — hero functional line + LP gloss landed 2026-06-28 (`9485882`); live site (2026-06-21) predates them | `HomeHero.astro:30` | S | **fix-here** (M10 deploy ships them) + M9 gate lock |
| F-MER-B5 | Changed surfaces since 304/304 unasserted — M6.1 NetworkDiagram + A-11/A-12 hero copy have no gate coverage | `NetworkDiagram.astro`; `HomeHero.astro:30` | S | **fix-here-M9-gate** |
| F-MER-B6 | A-02 RE-ENTERED — reading-guide spec line-refs drifted, worsened by the M6.1 full v2.5 body port | `src/content/reference/reading-guide.mdx` | S | **fix-here-M7** |
| F-MER-B7 | Obsidian vault note renders stale name + truncated sentence ("analog to Cmux.aDNA…", "ratified at.") — source text lives in Hestia's inventory | `src/data/vaults.json:1384` → `/vaults/obsidian` lede | S | **escalate** (rides the Hestia/pt19 memo; regen carries the fix once inventory corrected) |
| F-MER-B8 | A-14 RE-ENTERED — glossary preview mid-word truncation ("…eac…") reads-as-bug on a public surface | glossary accordion | S | **fix-here-M7** (word-boundary truncation) |
| F-MER-B9 | `standard.ts` docstring claims spec "stays a v2.3-body snapshot" — M6.1 re-mirrored it to v2.5; +`design-rationale.mdx:8` "Companion to v2.3" comment | `src/data/standard.ts:19-22` vs `specification.mdx:6` | S | **fix-here-M7** (comment-only) |
| F-MER-B10 | `/security` (new at LG M4) not in the curated `@audit` a11y sweep | M4 remeasure note | S | **fix-here-M9-gate** |

**Long-tail re-triage (M4)**: RE-ENTER A-02 (→B6) + A-14 (→B8). STAY-DEFERRED: A-05 ("16+" defensible) · A-08 (nav IA, M, risky pre-deploy) · A-10 (icon polish) · A-13 (editorial redundancy) · A-17 (educator rubric, M content) · A-18 (node-operator path, depends on get-started restructure) · A-19 (SPDX signal, low ROI). A-06 stays the boxed M8 spike.

**Verified-clean (M4)**: llms.txt/llms-full currency-safe by construction (single-source from `standard.ts`+`vaults.json`) · gate-21 dynamic (reads live version — passes at v2.5) · renamed-vault mentions all intentional historical KEEPs except B7 · no user-visible wrong version claims · skills=50/templates=41 site counts current (trued at M4.4) · spec body genuinely v2.5.

**Undeployed delta (DP2 evidence-pack input)**: new routes `/security` · `/org-context-graphs` · `/learn/concepts/dual-audience-writing` (+redirect) · `/rss.xml` (+feed discovery); hero A-11+A-12; learn-onramp block; NetworkDiagram SSR re-implementation; spec v2.3→v2.5 across ~19 surfaces (skills 15→50, templates 32→41); full v2.5 spec body port; federation horizon caveat (/enterprise, /educators); WebForge rename sweep; first-tutorial designation.

## Bounded improvement set (proposed → DP1)

All S/M effort; no L items beyond the pre-chartered M8 spike. Numbered for DP1 reference.

**M6 (vault) — 4 items**
1. Count-surface sync: README tree-block (26/26 → 42/50) + all 41→42 template claims (MANIFEST · CLAUDE.md · glossary_template · README) + correct the local mirror's "upstream-shipped at v8.5" note → v8.4 (evidence: RC row I3). *(F-MER-A2)*
2. STATE.md re-diet: archive-shift QUEUED banners older than the live arc (keep ~6–8) + compress the ~7 completed-campaign paragraphs to one-line rows with archive pointers. Target ≤ 60 KB. *(F-MER-A1; SO-6 archive-never-delete)*
3. Backlog batch status-flip: ~24 shipped-in-v8.4 `accepted` → `resolved` with one-line ship evidence + M5's 4 individual fixes. *(F-MER-A7)*
4. File the compliance_checker tool-hardening backlog idea (scratch outdir + content-type vocab + python3.13 note). *(F-MER-A3 → defer instrument)*

**M7 (site) — 6 items**
5. G20 manifest v2.3→v2.5 fix — **pre-req for any gate run**. *(F-MER-B1)*
6. Data regen: `.adna` v8.5-parity check → `npm run sync:install` + `sync:vaults` → commit (54→68 vault count; SHA → v8.5). *(F-MER-B2/B3)*
7. A-02: reading-guide spec line-refs re-anchored to the v2.5 body. *(F-MER-B6)*
8. A-14: glossary preview word-boundary truncation. *(F-MER-B8)*
9. Comment currency: `standard.ts` docstring + `design-rationale.mdx` "v2.3" comment. *(F-MER-B9)*
10. Consolidated Hestia/pt19 memo: regen FYI + inventory items owed on her side (Obsidian note text B7; inventory currency cadence). *(F-MER-B2/B3/B7 escalation half)*

**M9 (gates) — 3 items**
11. New gate: hero asserts A-11 functional-def phrase + A-12 LP gloss. *(F-MER-B4/B5)*
12. New gate: NetworkDiagram SSR renders ≥6 labels, no-JS visible. *(F-MER-B5)*
13. Add `/security` to the `@audit` a11y sweep. *(F-MER-B10)*

**M2-lane add-on — 1 item**
14. Oration CLAUDE.md harness-injection tip-strip (remove L338–341 `# userEmail`/`# currentDate` paste; surgical commit on `master`; push still held). *(F-MER-A8; DP0 direct-by-default; the deeper history-scrub is a separate DP1 operator ruling)*

**M8 (pre-chartered, boxed)**: A-06 graph pre-render spike — unchanged.

**Watches (no action)**: F-MER-A4/A5/A6 · long-tail stay-deferred set (A-05/08/10/13/17/18/19) · Wilhelm acks.

### DP1 ruling

**RESOLVED 2026-07-06** (operator, AskUserQuestion at the P1 exit gate):
- **Fix set: FULL 14-item set ratified** (4 vault + 6 site + 3 gates + Oration tip-strip). A-06 spike stays boxed/severable at DP2.
- **Oration PII (F-MER-A8): tip-strip now, history-scrub DEFERRED** to Oration's own lane (backlog flag filed there or watch-listed here); proportionate given the address is a public brand email.

Ratification record (4-field): decision = DP1 fix-set + PII handling · ratified-by = operator (stanley) · date = 2026-07-06 · status = accepted.
