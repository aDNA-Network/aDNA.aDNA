---
type: session
session_id: session_stanley_20260627T193130Z_looking_glass_charter
user: stanley
started: 2026-06-27T19:31:30Z
status: completed
completed: 2026-06-27T20:00:24Z
intent: "Run mission_looking_glass_planning: turn the campaign_looking_glass seed into a ratifiable charter for the first 'III campaign' pilot (aDNA website ⇄ context coherence). Author charter + scaffolding spec + measurement model + sized mission stubs; present for operator GO at Decision Point 1. Operator scoping: Subject B = site-backing slice; ambition = lean, pattern-first."
token_budget_estimated: "~120 kT (80-200 tier): charter design across 2 subjects + III-scaffolding spec + measurement model + 6 mission stubs; content-novel"
files_modified:
  - how/campaigns/campaign_looking_glass/campaign_looking_glass.md
  - how/campaigns/campaign_looking_glass/missions/mission_looking_glass_planning.md
  - how/backlog/idea_iii_campaign_pattern.md
  - STATE.md
files_created:
  - how/sessions/active/session_stanley_20260627T193130Z_looking_glass_charter.md
  - how/campaigns/campaign_looking_glass/artifacts/scaffolding_spec.md
  - "how/campaigns/campaign_looking_glass/missions/ (M1–M5 sized mission stubs: mission_construct_scaffolding_m01 … mission_closeout_handoff_m05)"
created: 2026-06-27
updated: 2026-06-27
last_edited_by: agent_stanley
tags: [session]
---

# Session — Operation Looking Glass charter (III-campaign pilot)

Plan: `~/.claude/plans/please-read-the-claude-md-swift-stallman.md` (operator-approved).

## Scope (Tier 2 — touches shared governance: STATE.md + a campaign charter)

- **Author the charter** — `campaign_looking_glass.md` seed → full charter (template_campaign): sharpened goal + measurable success criteria (Subject A website + Subject B site-backing context slice), 3 phases (Construct → Review → Improve) with human exit gates, 3 decision points, risk register, verification strategy, instrumentation, terminal III.aDNA handoff, timeline, frontmatter.
- **Author the Part-1 scaffolding spec + measurement model** — `artifacts/scaffolding_spec.md` (candidate III packs + persona/reviewer roster + review process + 3-tier measurement model extending the 281-gate harness).
- **Author sized mission stubs** — M1–M6 under `missions/` (each token_budget + AAR).
- **Bookkeeping** — update `idea_iii_campaign_pattern.md` (instrumentation), close planning mission (objectives + AAR), STATE.md touch, SITREP, gated commit on operator GO.

## Conflict scan

`how/sessions/active/` empty at start (only this file); no concurrent git process; no `.git` locks; HEAD `995c6a9` (the seed); shared `main` clean + ff-safe vs origin.

## Operator scoping decisions (this session, via AskUserQuestion)

- **Subject B scope = site-backing slice** — review only the `what/` context the website actually surfaces/claims; not a full `what/` audit.
- **Ambition = lean, pattern-first pilot** — focused high-signal review + bounded improvement set; optimize for cleanly learning the pattern; defer long-tail fixes.

## Notes / decisions

- **Authoring only** — this mission does not execute Parts 1–3, write to other vaults, or deploy. The charter is gated at DP1; status stays `planning` until operator GO (flips to `active` on GO).
- **Propose, don't build** — name concrete candidate packs/personas/measurement tiers grounded in the asset survey; the actual build is Part-1 execution. No net-new packs/rubrics authored this session.
- Asset survey (read-only): III `core_domain_packs/` has `web_design` + `vault_maintenance` + `inspect_procedures` + `introspect_checks` + `whitepaper_communication` (genuine gap = a `representation_coherence` pack); `who/reviewers/` = 16 personas (gap = a claim-tracer/fact-checker); `who/adopters/` = 16 lenses; `site/tests/gates/` = gate-4…gate-19 + audit sweep (the 281 assertions; `gate-15-credibility` + `gate-14-single-source` are natural fidelity extension points).

## SITREP

**Completed**
- Ran `mission_looking_glass_planning` (M0) → authored the full **Operation Looking Glass charter** (seed → charter; all 7 exit-gate items met): goal + measurable success criteria (A1–A4 site / B1–B3 context), 3 phases (Construct → Review → Improve) with human gates, 3 decision points, risk register, verification strategy, pilot instrumentation, terminal III.aDNA handoff, timeline.
- Authored `artifacts/scaffolding_spec.md` — Part-1 III scaffolding + 3-tier measurement model; reuse-first (5 III packs + the 16-reviewer roster + the 281-gate harness), net-new = `representation_coherence` pack + claim-tracer persona (campaign-local → graduate at the handoff).
- Authored 5 sized mission stubs (M1 Construct → M5 Closeout), each with `token_budget_estimated` + AAR placeholder.
- Updated `idea_iii_campaign_pattern.md` (Extraction section: the 4 instrumentation logs).
- **DP1 RATIFIED** by operator → campaign `status: active`; closed M0 (objectives → completed, AAR, `token_budget_actual` ~125 kT vs ~120 est).
- Bookkeeping: STATE.md (campaign entry → chartered/active · new Current Phase bullet · new Last Session · Next Session Prompt → M1 · frontmatter date) + this session file.

**In progress** — none (mission scope complete).

**Next up** — run **M1 `mission_construct_scaffolding`** (Part 1 Construct: build the III scaffolding + capture baselines → DP2).

**Blockers** — none. *(Recommended, not a blocker: a courtesy coord memo to the Websites.aDNA / Hestia owners at activation, deferred to operator discretion or M1, so the in-flight Websites carve and this pilot deconflict early.)*

**Files touched** — see frontmatter. Created: `campaign_looking_glass.md` (seed→charter rewrite), `artifacts/scaffolding_spec.md`, 5 mission stubs, this session file. Modified: `mission_looking_glass_planning.md` (closed), `idea_iii_campaign_pattern.md`, STATE.md.

**Next Session Prompt** — see STATE.md `## Next Session Prompt` (canonical): run M1 `mission_construct_scaffolding` in aDNA.aDNA (Rosetta) — confirm pack/persona selection, author net-new `representation_coherence` pack + claim-tracer persona campaign-local, implement the 2 representation-coherence gates, enumerate the site-backing slice, capture baselines. Honor pt19 + the Websites carve; no cross-vault writes; M1 gets an AAR + token budget.
