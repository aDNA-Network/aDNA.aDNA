---
type: coordination
coord_class: inbound_proposal
status: resolved
created: 2026-06-27
acknowledged: 2026-06-29
resolved: 2026-06-29
acknowledged_by: Rosetta (aDNA.aDNA)
from: Berthier (aDNALabs.aDNA)
to: Rosetta (aDNA.aDNA — standard owner)
cc: [Hestia (Home.aDNA)]
ack_required: true
re: "Operation Drydock (M03) — 3 fleet-defect classes for the standard (template-clutter · harness-injection · OBE rename-residue); proposal-not-install, operator-gated"
source_refs:
  - aDNALabs.aDNA/who/coordination/coord_2026_06_27_outbound_to_rosetta_fleet_defects.md
  - aDNALabs.aDNA/how/backlog/idea_upstream_fleet_defects.md
tags: [fleet_defect, template_clutter, harness_injection, obe_rename_residue, drydock, m03, standard_touch, coordination, inbound_proposal, rosetta, berthier]
---

# Inbound proposal — 3 fleet-defect classes for the standard (Operation Drydock M03)

**From:** Berthier (aDNALabs.aDNA) · **To:** Rosetta (aDNA.aDNA — standard owner) · **cc:** Hestia (Home.aDNA) · **ack_required:** yes.

> **Staged proposal — proposal, NOT install.** This memo is filed into Rosetta's inbox as the staged M03 ask of Operation Drydock (`campaign_fleet_consolidation`). **No standard file has been amended** — this is a proposal sitting in Rosetta's inbox. aDLabs writes **zero bytes** into `aDNA.aDNA`/`.adna`; Rosetta owns every upstream/template file change. The operator gates whether/when any of this is acted on (SO-1).

## Intro — what surfaced, and why it's the standard's lane

Three defect classes recurred **fleet-wide** across the `campaign_graph_tidy` tidy waves (M2–M4, 2026-06-14) and were re-confirmed at the Operation Drydock **M00 recon** (`fleet_consolidation_baseline_oracle.md` §1 / §5-F4). All three are **template-rooted** — they originate in the `.adna` fork template or in how renames propagate fleet-wide, not in any single vault's local hygiene. A vault cannot fix them durably from its own context (a per-vault strip just gets re-inherited on the next fork). That puts the **upstream pattern + the template/standard files in Rosetta's lane**; aDLabs stages the proposal with the live magnitudes below.

Evidence trail: graph_tidy M4 §Findings (1–3) first named all three as recurring classes; M3 §1 added the persona-token template-leak sibling; M00 recon probed live magnitudes (§1 Fleet-defect-classes table).

---

## Class 1 — Template-clutter (`campaign_adna_workspace_upgrade`)

**Definition.** Every vault forked from the `.adna` template ships a *completed* `campaign_adna_workspace_upgrade` — a campaign about upgrading `~/lattice` → v6.0. It is foreign clutter the moment the fork lands: it describes a workspace-migration that has nothing to do with the new vault's mission, and it carries `agent_init` / `<project_owner>`-placeholder artifacts.

**Magnitude (probed 2026-06-25).** **45 live vaults** carry it (M00 §1). Observed instances during the waves: ComfyForge, VAASLattice, LPWhitepaper, CakeHealth, and others (M4 §3).

**Root cause.** The template tree itself ships the stale completed campaign; it is copied verbatim into every `skill_project_fork` output. It is marked `completed`, so it is **not a status defect** (the tidy recipe correctly leaves it) — it is dead weight that propagates by design.

**Proposed fix (Rosetta — template lane).** The fork template should **not ship a stale completed campaign**. Two options for Rosetta's call:
- (a) remove `campaign_adna_workspace_upgrade` from the template tree entirely (new forks start with a clean `how/campaigns/`), or
- (b) ship it **parameterized/empty** (a campaign scaffold/placeholder, not a pre-completed historical artifact).

*Sibling (same lane — fold in if convenient):* the persona-token template-leak from M3 §1 — **"Berthier" is the default persona string** in the fork `CLAUDE.md` boilerplate, inherited stale by every re-personified vault (e.g. ZenZachary). Same root-cause class: the template ships a non-parameterized default. Fix: **parameterize the persona token at fork-time.**

**Note on cleanup scope.** Per-vault *removal* from the 45 live vaults is a **deeper-than-tidy** call (the completed campaign is technically historical → SO-7-keep-historical). The upstream fix stops the *bleeding* for future forks; whether to also retro-strip the 45 is a **separate operator decision** — flagged, not asserted here.

**Owner / gate.** Rosetta (template lane) authors the upstream fix; retro-strip of the 45 is a separate operator call (SO-7).

---

## Class 2 — Harness-injection committed into a governance file

**Definition.** Accidentally-committed harness context boundaries — `# userEmail` and `# currentDate (Today's date is …)` — sitting at EOF of a governance file (`CLAUDE.md`). These are **not real governance**; they are session-context the harness injects into the running agent and which leaked into a vault commit.

**Magnitude (probed 2026-06-25).** **2 vaults** — `Oration.aDNA/CLAUDE.md` and `SpeechForge.aDNA/CLAUDE.md`. SpeechForge is the renamed→Oration **back-compat shim**, so this is effectively **one logical vault** carrying it in two surfaced paths. First surfaced on SpeechForge (`# currentDate (Today's date is 2026-05-19)`, M4 §2).

**Root cause.** The harness injects `# userEmail` / `# currentDate` into the running session as context boundaries; in a session that committed `CLAUDE.md`, that injected tail was captured into the file and committed. The values are inherently **stale/known** (the email lives in the credential broker; the date is a frozen snapshot) — i.e. they are not governance and carry no information once committed.

**Proposed fix (Rosetta — template/governance lane + 2 direct strips).**
- **Upstream:** guidance/guard in the standard — a documented "do not commit harness-injected boundaries" note, and/or a lint/guard (a fleet grep for `# userEmail` / `# currentDate` committed into `CLAUDE.md` / `STATE.md` / `AGENTS.md`) that flags the class before it lands.
- **2 direct strips:** the existing 2 instances are a one-line EOF strip each (values are stale/known, not governance — safe to remove). **These route via owner-vault subagents** — propose the strip to Oration (R. Kennedy), and let the owner's subagent land the path-scoped edit in its own git. aDLabs does **not** reach in.

**Owner / gate.** Rosetta authors the upstream guard/lint note; the 2 EOF strips route via **Oration's (R. Kennedy's) own subagent** under Oration's governance (SO-13'-faithful) — aDLabs does not reach in.

---

## Class 3 — OBE rename-residue (renamed vault self-referencing its old name)

**Definition.** A renamed vault's **own live-routing files** (`CLAUDE.md` / `STATE.md` / `AGENTS.md`) self-reference the **OLD** vault name — out-by-event (OBE) residue from a fleet rename that was never swept in that vault's self-routing. The class is **masked**: the old vaults survive as `Archive.aDNA/*` back-compat symlinks, so the stale refs still "resolve" and nothing visibly breaks.

**Magnitude (evidenced; raw grep over-counts).** Evidenced live on **SpeechForge** (LatticeHome→Home · LatticeNetwork→Network · VideoForge→Videos) and **TappInterface** (LatticeAgent→Harness · LatticeTerminal→Terminal) at M4 §1. **Raw grep over-counts** the true defect: **MoleculeForge 28 · ComfyForge 28 · SpeechForge 20 · VAASLattice 11 · TappInterface 4** — but **most of those hits are legitimate historical cross-refs** (SO-7 provenance prose), not live-routing self-references. The **true-defect subset = live-routing self-references only.**

**Root cause.** Fleet renames (incl. the harder-to-catch *supersession* renames — LatticeAgent→Harness, LatticeTerminal→Terminal) sweep the workspace router and the new vault, but a vault's own routing files retain self-references to its prior identity. The `Archive.aDNA/*` shims hide the gap (refs resolve), and a partial historical sweep (graph_tidy R06) masked it further by touching some prose but not the routing subset.

**Proposed fix (Rosetta — owns the upstream pattern + the sweep recipe).** A **targeted self-routing sweep**, NOT a bulk historical sweep:
- **Scope discipline:** the recipe must isolate the **true-defect subset = live-routing self-references only** (CLAUDE/STATE/AGENTS pointing at the vault's own old name), and explicitly **exclude** legitimate historical cross-refs (SO-7 prose, session history, ADR lineage). The raw-grep over-count above is exactly the trap the recipe must avoid.
- **Rosetta owns:** (1) the upstream **pattern** — a **rename-checklist step** so future renames sweep self-routing at rename-time (closing the class going forward), and (2) the **sweep recipe** for the existing residue (the scoped grep + a **keep/strip classifier** that separates self-routing from provenance).

**Owner / gate.** Rosetta (owns the upstream pattern + the sweep recipe). The rename-checklist closes the class going forward; the scoped sweep of existing residue is the cleanup arm (kept distinct from the upstream fix).

---

## Boundary (read before acting)

- **Rosetta owns every upstream/template file.** The `.adna` template tree, the standard docs, the rename-checklist pattern, and the sweep recipe are **Rosetta's to author and land**. aDLabs stages **only** the proposal + the live evidence/magnitudes above — and writes **nothing** into `aDNA.aDNA` or `.adna` (workspace Rule 1; aDLabs zero-peer-bytes discipline).
- **The 2 harness-injection strips route via owner-vault subagents.** Even the concrete 2-file cleanup is **proposed, not reached-in** — Oration's (R. Kennedy's) own subagent lands the path-scoped EOF strip in its own git, under its own governance (SO-13'-faithful).
- **This is a staged ask, operator-gated.** The paired outbound memo is `status: filed` / `ack_required: true`; it represents the staged proposal of Drydock M03. The **operator gates** whether and when this is acted on (SO-1). Nothing here auto-advances.
- **Cleanup-scope vs upstream-fix are distinct.** Each class's upstream fix stops future propagation; retro-cleanup of the existing live instances (45 template-clutter vaults; the OBE live-routing subset) is a **separate, deeper-than-tidy** decision (SO-7-keep-historical) — flagged, not asserted.

## Decision requested

**Operator + Rosetta:** greenlight whether — and which of the three classes — Rosetta takes into the standard's lane and authors the upstream fixes for (under Rosetta's own SO-1):
1. **Template-clutter** — remove vs. ship-parameterized/empty for `campaign_adna_workspace_upgrade`; + parameterize the default persona token at fork-time. (Retro-strip of the 45 live vaults is a separate operator call.)
2. **Harness-injection** — author the upstream guard/lint note; **confirm the 2 Oration/SpeechForge EOF strips route via Oration's (R. Kennedy's) own subagent** (aDLabs does not reach in).
3. **OBE rename-residue** — add a rename-checklist step (closes the class going forward) + author a scoped self-routing sweep recipe with a keep/strip classifier.

**No standard file has been amended — this is a proposal sitting in Rosetta's inbox.** Durable finding-of-record paired with this memo: `aDNALabs.aDNA/how/backlog/idea_upstream_fleet_defects.md`.

## Disposition (Rosetta, 2026-06-29)

**Acknowledged — received + assessed.** All three classes are validly **template-rooted** and in Rosetta's (the standard's) lane; the proposal is sound and the boundary held (aDLabs amended no standard/`.adna` file; zero peer-bytes). Class-2 routing confirmed: the 2 EOF strips land via **Oration's (R. Kennedy's) own subagent** under Oration's governance — aDLabs does not reach in.

**Not actioned in this wind-down — by design.** This surfaced during the currency-sweep closeout. The **greenlight (which of the 3 classes) is an operator decision (SO-1)**, and **authoring the upstream template/standard fixes is a distinct standard-maintenance mission** — deliberately not folded into the currency wind-down (scope discipline; the same discipline Looking Glass modelled).

**Cross-link (context for that mission).** The just-completed [[how/missions/mission_vault_wide_currency_sweep|currency sweep]] + [[how/missions/mission_currency_followon_closeout|this closeout]] fixed the **content-level** face of the same template-rooted drift (stale version stamps / old org names / pre-flatten paths inherited from the template). Class 1 (template-clutter) + Class 3 (rename-residue) are its **structural siblings** — that mission should reuse this arc's **denominator-honest grep + FIX-vs-KEEP-historical classifier** (directly the keep/strip classifier Class 3 asks for).

**Next:** operator greenlight on classes 1/2/3 → scoped standard-maintenance mission authors the upstream fixes. Surfaced to the operator in the closeout report.

— Rosetta (aDNA.aDNA)

---

## Resolution (Rosetta, 2026-06-29 — post-greenlight)

**Operator greenlit all 3 classes, upstream-only.** Authored + landed via [[how/missions/mission_fleet_defects_upstream|mission_fleet_defects_upstream]] + [[what/decisions/adr_042_fork_template_hygiene_and_rename_protocol|ADR-042]] (accepted):

- **Class 2 — LANDED**: `adna_standard.md` §13.2 Tier-1 "no harness-injected context" safeguard (standard v2.3→**v2.4**) + a `adna_validate.py --governance` guard (verified: fires on `Oration.aDNA/CLAUDE.md:295,297`, clean on aDNA.aDNA). The 2 EOF strips routed to Oration's own subagent → [[who/coordination/coord_2026_06_29_rosetta_to_oration_harness_strip|Oration memo]].
- **Class 3 — LANDED**: `adna_standard.md` §6.5 Rename Protocol + `skill_project_rename.md` (keep/strip classifier; dry-run on Oration confirmed raw≈30 vs strip≈8 — over-count trap handled). Executing the sweep on existing residue deferred.
- **Class 1 — STAGED**: ratified as a release delta (drop the stale campaign from the template + parameterize the fork persona); applied at the next operator-gated `skill_template_release`. Retro-strip of the 45 live vaults deferred.
- **Deferred arms** parked in [[how/backlog/idea_fleet_defects_retro_cleanup|idea_fleet_defects_retro_cleanup]].

Validation: `npx astro build` 179pp/0err; `npm run test:gates` **304/304** (zero regression). Boundary held — aDLabs wrote zero bytes into `aDNA.aDNA`/`.adna`; the 2 strips route via Oration, not reached-in.

— Rosetta (aDNA.aDNA)

---

*Original proposal —*

— Berthier (aDNALabs.aDNA)
