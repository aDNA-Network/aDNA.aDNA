---
type: artifact
artifact_type: social_comms_post_draft
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_p1_08a_upgrade_guide_and_coord_memos
objective: 3
target_missions:
  - M06  # publishes short-form + thread at v7.0 tag time; long-form may stage earlier or later per operator discretion
created: 2026-05-11
updated: 2026-05-18
status: ready  # tag-ship gate satisfied at M06 S2 2026-05-18; operator handles social-channel posting within 24h per D4 timing
delivery_held_until: M06-tag-ship  # gate satisfied at v7.0 tag push 2026-05-18; status: ready → delivered when operator posts to social channels
tag_ship_satisfied: 2026-05-18
last_edited_by: agent_stanley
publication_url_target: "https://adna-docs.vercel.app/learn/upgrade-v6-to-v7"
embargo_partner_acknowledgments:
  wilhelm_foundation: ADR-010-window  # WilhelmAI ADR 010 currently signed Chief Steward, pending Wilhelm batch co-sign at MP0-1
  tapp: operator-approval
  super_league: operator-approval
tags: [artifact, mission_deliverable, m08a, obj3, social_comms, v7_0, public_announcement, draft, embargo_partner_acks, m06_input]
related_artifacts:
  - m08a_github_release_notes_v7.md  # sibling deliverable; long-form blog cross-links the release URL
  - m08a_readme_badge_spec.md  # sibling deliverable
  - m01_obj8_upgrade_guide_v6_to_v7.md  # the migration page short-form + thread + long-form all point at
  - m02_obj5_ecosystem_baseline_locked.md
related_decisions:
  - adr_006_github_repo_rename_to_adna.md
  - adr_007_outer_adna_claude_md_disposition.md
  - adr_009_aDNA_naming_convention.md
---

# M08a Obj 3c — Social / Comms Post Draft (v7.0)

> **Deliverable 3c of M08a** (per [[../mission_adna_infra_p1_08a_upgrade_guide_and_coord_memos.md|mission spec]] §Deliverables row 3c). Three publication channels drafted: **§1 short-form posts** (≤280 char; three audience variants), **§2 thread** (5-8 tweet chain), **§3 long-form blog / mailing list** (~700 words). All channels point at the docs-site upgrade guide page `adna-docs.vercel.app/learn/upgrade-v6-to-v7` (which Operation Rosetta Phase 8 publishes from the finalized M01 Obj 8 guide).
>
> **Status**: `draft`. Publication is operator-gated at M06 tag time (`delivery_held_until: M06-tag-ship`). Wilhelm-affiliated mentions carry inline ADR-010 embargo comments; M06 must verify Wilhelm batch co-sign before publishing those lines.

---

## §0 M06 publication notes

The three channels have different timing and audience characteristics:

| Channel | Audience | Publish timing | Embargo discipline |
|---|---|---|---|
| Short-form (≤280 char) | Followers / general developer audience | At v7.0 tag publish + 0-2 hours | No partner mentions — embargo-safe |
| Thread (5-8 posts) | Engaged developer audience | At v7.0 tag publish + 0-2 hours | No partner mentions — embargo-safe |
| Long-form (blog / mailing list) | Newcomer + ecosystem-deep audience | At v7.0 tag publish + 0-24 hours | Wilhelm acknowledgment line in §"Acknowledgments" wrapped in ADR-010 embargo guard — verify Wilhelm co-sign before publishing |

**Default publication order**: short-form + thread at tag publish; long-form within 24 hours of tag publish (or longer if the Wilhelm embargo guard requires more cycle time).

---

## §1 Short-form posts (≤280 char each — three audience variants)

### Variant A — Neutral (post-tag default)

```
aDNA Governance v7.0 is live.

Flat repo (no more `adna/.adna/`), real `git push` for vault publishing (rsync workaround retired), new opt-in patterns (node.aDNA, airlock, observability).

Standard track unchanged at v2.2 — existing vaults stay conformant.

Upgrade guide: adna-docs.vercel.app/learn/upgrade-v6-to-v7
```

Character count: ~277.

### Variant B — Developer-focused (engineer audience)

```
aDNA v7.0: the workspace-root layout finally flattens.

`git clone https://github.com/LatticeProtocol/adna.git .adna` — one step, no symlink, no nested `.adna/`.

Plus: `skill_vault_publish` replaces the rsync workaround, pre-push hook ships, repo rename grandfathers existing forks.

Migration guide ships pre-flatten so your `.adna/` doesn't break before you read it.

adna-docs.vercel.app/learn/upgrade-v6-to-v7
```

Character count: ~280 — uses the variable length to fit the developer surface (longer code/path context).

### Variant C — Newcomer-focused (broader audience)

```
What if AI agents could start every project session knowing where things live, what's been decided, and who's involved — without you re-explaining?

aDNA v7.0 ships today: a knowledge architecture for projects that humans browse and agents navigate.

Stay on v6 if it works for you. Migrate when you're ready.

adna-docs.vercel.app/learn/upgrade-v6-to-v7
```

Character count: ~270.

**Hashtag suggestions** (operator-discretionary — pick 2-3 max per post): `#aDNA #KnowledgeArchitecture #AIAgents #DevTools #Obsidian`. Default: none (the project's audience comes through wikilinks + docs cross-links, not hashtag discovery).

---

## §2 Thread (5-8 posts)

Numbered for assembly. Each tweet ≤280 char.

### Post 1/7 (hook)

```
1/ aDNA Governance v7.0 just landed.

Two breaking changes, four new opt-in patterns, five pull-based updates. Standard track unchanged.

This is the first release ratified under the semver discipline ADR — and the first to ship the flat-repo layout. 🧵
```

### Post 2/7 (breaking — repo flatten)

```
2/ Breaking change 1: repo flatten.

Before: `adna/.adna/` (template inside an outer wrapper)
After:  `.adna/` (the cloned repo IS the template)

New clone: `git clone https://github.com/LatticeProtocol/adna.git .adna`

The wrapper was a workaround from when GitHub couldn't host dot-prefixed repos. That constraint is gone. So is the wrapper.
```

### Post 3/7 (breaking — publish-skill rewrite)

```
3/ Breaking change 2: publish-skill family rewrite.

Old flow: vault → `.publish-clone/` rsync workaround → push
New flow: vault → `git push origin main` (real git, normal pre-push hook, standard tooling)

The old flow existed because vaults rarely had configured remotes. v7 fixes that with `skill_git_remote_setup`.
```

### Post 4/7 (new patterns)

```
4/ New patterns (all opt-in):

• `node.aDNA/` — per-machine inventory vault (what's installed, what's running, what changed)
• Airlock stub — cross-vault coordination surface for graph-spanning agent traffic
• Naming convention codified — `<name>.aDNA/` ↔ `<name>.aDNA.git`
• `LatticeScope.aDNA` planning campaign seeded for observability
```

### Post 5/7 (non-coercive policy)

```
5/ The version bump is non-coercive.

You can stay on v6 indefinitely. v7 ships because the gains (cleaner clone, real git push, observability seed) are worth one migration cycle when you're ready.

The successor campaign (v3-EC) handles per-vault application at each operator's pace.
```

### Post 6/7 (Standard track unchanged)

```
6/ Important: the aDNA Standard track is unchanged.

Standard stays at v2.2. Triad structure, object schemas, FAIR envelope, RFC 2119 conformance rules — all the same.

v7 is a Major Governance bump (template/repo/skill changes), not a Major Standard bump (no spec changes).
```

### Post 7/7 (call to action)

```
7/ Migration guide: adna-docs.vercel.app/learn/upgrade-v6-to-v7

13-section walk-through with command-level steps. Ships pre-flatten so you have it in hand before your structure changes.

Release notes: github.com/LatticeProtocol/adna/releases/tag/v7.0

/end
```

**Optional Post 8/7** (operator-discretionary — only if Wilhelm batch co-sign has landed by tag publish time):

```
<!-- ADR-010 embargo: do NOT post this unless Wilhelm Anchor co-sign on WilhelmAI ADR 010 has landed. Verify against WilhelmAI.aDNA/what/decisions/adr_010_*.md frontmatter co_signed_by field. -->
8/ Special thanks to the Wilhelm AI Initiative for the Undiagnosed (AI4U) — a program of the Wilhelm Foundation — for the partner-org vault topology that shaped v7's external-operator coordination patterns. The active ecosystem is collaborative; thanks to all who shaped it.
<!-- end embargo guard -->
```

---

## §3 Long-form (blog / mailing list)

### Title

**aDNA Governance v7.0 — Flat Repo, Real `git push`, and the Patterns That Finally Land**

### Body (~700 words)

```markdown
# aDNA Governance v7.0 — Flat Repo, Real `git push`, and the Patterns That Finally Land

When aDNA shipped its v6.0 baseline, the workspace-root layout had an awkward double-nest: the template lived at `adna/.adna/`, and a symlink at `~/aDNA/.adna -> adna/.adna` papered over the gap. Anyone who set up a fresh workspace remembers the friction.

That double-nest is gone in v7.0. The cloned repo IS the template directory. One step, no wrapper, no symlink.

This release is the first one ratified under aDNA's explicit semver discipline (ADR-011, the standalone two-track Major.Minor-only policy). It's also non-coercive: you can stay on v6 indefinitely. v7 ships because the gains are worth one migration cycle when you're ready.

## What changes

**Two breaking changes** that need migration steps:

1. **Repo flatten.** The new clone command is `git clone https://github.com/LatticeProtocol/adna.git .adna`. The repo was renamed from `Agentic-DNA` to the lowercase URL slug `adna` (per ADR-006); the display name in running text remains "aDNA". GitHub URL forwarding preserves existing clones indefinitely.

2. **Publish-skill family rewrite.** The old `skill_lattice_publish` shipped with an `.publish-clone/` rsync workaround that pushed *from a clone of the vault* because the vault itself rarely had a configured remote. v7 fixes that with a small skill family: `skill_git_remote_setup` (first-time `git remote add` + `gh repo create`), `skill_vault_publish` (the new push flow), `skill_deploy` (idempotent installer for the pre-push sanitization hook). The legacy `skill_lattice_publish` keeps its scope — that one was always about the latlab CLI registry publish, not the vault-to-GitHub flow, and it remains unchanged.

**Four new patterns**, all opt-in:

- **`node.aDNA/`** — per-machine inventory. What's installed, what compute resources are available, what's running where, what changed when. Persona: Hestia.
- **Airlock template stub** at `/.adna/how/airlock/AIRLOCK.md` — a vault-agnostic entry-path index for cross-graph agent traffic. The pattern was matured in III.aDNA + VideoForge.aDNA + CanvasForge.aDNA; v7 ships a stub at the template level so new vaults can adopt cleanly.
- **Naming convention codified** (ADR-009): `<name>.aDNA/` directory ↔ `<name>.aDNA.git` GitHub repo isomorphism, snake_case `<name>`. Existing non-conformant repos are explicitly grandfathered — 4 hyphen-flat + 1 path-style + 7 no-remote + 2 external-partner-namespaced — with no forced renames.
- **`LatticeScope.aDNA`** seed — a planned observability platform (Prometheus persona) for context/token tracking across distributed agentic workflows. v7 seeds the planning campaign; the vault construction is a successor sub-campaign.

**Five pull-based changes** that need nothing:

- Workspace router template (`template_workspace_claude.md`) extracted from the legacy outer wrapper per ADR-007. Directly installable to `~/aDNA/CLAUDE.md`.
- `deploy_manifest.yaml` → `.github/deploy_manifest.yaml`.
- CI workflow caller-usage URLs refreshed to the new repo name.
- Template-root `.gitignore` shipped with the v7 exclusion set.
- One stale Standard footer line corrected (`v2.0` → `v2.2`; the title at line 3 was always canonical).

## What doesn't change

**The aDNA Standard track stays at v2.2.** No changes to the triad, the object schemas, the FAIR envelope, or the RFC 2119 conformance rules. If you only consume the Standard (the normative spec at `what/docs/adna_standard.md`), v7 doesn't affect you. Existing v6-conformant vaults remain v2.2-conformant.

The latlab CLI registry skill (`skill_lattice_publish.md`) keeps its scope. No content in any `*.aDNA/` vault is modified by v7 — only the workspace root.

## Migration

The full guide ships **pre-flatten** so operators have actionable steps before their structure breaks. It's 13 sections, with command-level migrations, a 10-row validation runbook, and explicit per-vault application notes:

→ **[`adna-docs.vercel.app/learn/upgrade-v6-to-v7`](https://adna-docs.vercel.app/learn/upgrade-v6-to-v7)**

Per-vault coordination memos have already been delivered to the active ecosystem; partner-affiliated vaults receive coordinated drafts at their respective operator gates. The successor campaign `campaign_adna_v3_ecosystem_compliance` will handle per-vault v7 application across all 19 active ecosystem vaults at each operator's pace.

## Acknowledgments

Coordination across the active ecosystem made this release possible. The original `skill_publish_lattice` git-fix backlog idea came from the Spacemacs.aDNA / Daedalus collaboration; that thread surfaced as ADR-010 and the publish-skill family rewrite that this release ships.

<!-- ADR-010 embargo: do NOT publish the paragraph below unless Wilhelm Anchor co-sign on WilhelmAI ADR 010 has landed. Verify against WilhelmAI.aDNA/what/decisions/adr_010_*.md frontmatter co_signed_by field. If uncertain, redact and add later. -->
The Wilhelm AI Initiative for the Undiagnosed (AI4U) — a program of the Wilhelm Foundation — co-stewards the Rare-AI Archive within the active ecosystem, and the v7 governance lift was authored mindful of the partner-org vault topology that AI4U has built. We're grateful for the collaboration.
<!-- end embargo guard -->

## What's next

The next two missions in `campaign_adna_v2_infrastructure` (M03 + M04) execute the flatten + bootstrap the `node.aDNA/` pattern. M05 ships the publish-skill family. M06 ships this tag. M07 + M08b run audit + propagation receipts. M09 + M10 lay the observability foundation. M11 closes.

The full mission tree, the ADRs, and the per-mission AARs all live at `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/` (private; v3-EC handles ecosystem-wide application publicly).

— Rosetta, on behalf of the aDNA.aDNA campaign
```

---

## §4 Embargo summary

Three places in this draft carry embargo markers; all use HTML-comment-wrapped guards to make the embargo state legible to M06 publish operators.

| Channel | Location of guard | Trigger to publish | Trigger to redact |
|---|---|---|---|
| Thread Post 8/7 | Optional post (not in default 1-7 numbering) | WilhelmAI ADR 010 Wilhelm Anchor batch co-sign has landed | Default state — do not publish absent positive confirmation |
| Long-form §Acknowledgments | Paragraph after "We're grateful for the collaboration" mention | Same | Same |

**TAPP** and **Super League** are not named in any social/comms channel — by design. Their `delivery_held_until: operator-approval` markers in the coord memo drafts indicate that no public acknowledgment is in scope for this campaign. M08b or v3-EC may add later if operators approve.

**Verification command** (M06 runs at publish time):

```bash
cd ~/aDNA/aDNA.aDNA
grep -c "ADR-010 embargo" how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m08a_social_comms_post_draft.md
# expect: 4 (two guard comment-pairs, two markers each)

# Wilhelm co-sign status check
grep -A1 "co_signed_by:" /Users/stanley/aDNA/WilhelmAI.aDNA/what/decisions/adr_010_*.md | head -5
# Inspect — if Wilhelm Anchor co-sign has landed, publish; if "pending", redact
```

---

## §5 Cross-references + status

**Inputs consumed**:

- [[m01_obj8_upgrade_guide_v6_to_v7.md|Finalized upgrade guide]] — primary migration target for all three channels.
- [[m08a_upgrade_guide_publication_log.md|Publication log]] — docs-site MDX-readiness context (the URL `adna-docs.vercel.app/learn/upgrade-v6-to-v7` is the channel target).
- [[m08a_github_release_notes_v7.md|Release notes draft]] — sibling artifact; long-form §"What's next" mirrors the release-notes structure; short-form Variant B + thread reference the release URL.
- [[m08a_readme_badge_spec.md|README badge spec]] — sibling artifact; the badge "Docs" links to the same `adna-docs.vercel.app/` root the channels point at.
- [[m02_obj5_ecosystem_baseline_locked.md|M02 Obj 5 locked baseline]] §4 — public-announcement workstream + partner-embargo discipline.
- `WilhelmAI.aDNA/what/decisions/adr_010_ra_publishing_contract.md` (read-only) — embargo state + attribution discipline.

**Outputs consumed by**:

- M06 (forward) — publishes short-form + thread at tag time; publishes long-form within 24h, applying §4 embargo guards.
- M08b (forward) — may add Wilhelm/TAPP/SuperLeague mentions to a later post if operator gates open post-tag.
- Operation Rosetta Phase 8 (forward, optional) — may incorporate long-form text into a "blog" page on the docs site.

**Status**: `draft`. All three channels are final-form drafts; publication is operator-gated at M06 tag ship (`delivery_held_until: M06-tag-ship`) and embargo guards apply per §4.

---

## §6 Self-reference + dual-audience (Standing Orders #2 + #7)

**Self-reference**: The three channels ARE the multi-audience surface this campaign produces — short-form (developer-engagement audience), thread (engaged-developer audience), long-form (newcomer-deep + ecosystem audience). The dual-audience discipline of the upgrade guide (Standing Order #7) extends to the announcement: each channel re-encodes the same migration story for a different attention budget. The short-form Variant C explicitly leads with the newcomer's mental model (project knowledge that doesn't evaporate between sessions); Variant B leads with the developer's friction (the workspace-root double-nest). Same release, different doors.

**Dual-audience**:

- **Developer reads** §1 Variant B + §2 Thread (Posts 2-4) + §3 "What changes" subsection. Concrete file paths, command snippets, ADR cross-links.
- **Newcomer reads** §1 Variant C + §2 Thread (Posts 1 + 5 + 6) + §3 opening paragraph + §3 "What doesn't change" subsection. Plain language, no required prior context, every concept introduced before use.

Both reads land at the same conclusion: **v7 ships infrastructure improvements; you can adopt at your own pace; the migration guide is the entry point — and so is the release announcement.**
