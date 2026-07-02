---
type: pattern
created: 2026-07-02
updated: 2026-07-02
status: draft
pattern_category: operational
applies_to: [governance, inventory, campaigns, all_categories]
campaign_id: campaign_champollion
instances:
  - "Home.aDNA (Hestia) — the node shim ledger: `campaign_workspace_houseclean/disposition_ledger_v2.md` §C standing registry (class/window/retire-condition/owner; conjunctive retirement; pre-authorized waves), ratified Spring Clean THE-gate 2026-06-10, enforced by `skill_node_health_check` S13"
  - "aDNA.aDNA (this vault) — workspace Rule 9 is the rule text (register-at-creation; conjunctive retirement); the upstream proposal `how/backlog/idea_upstream_shim_window_discipline.md` (accepted, fold_batch marked) is authored here"
graduation: "2 vault-level adoptions live (registry: Home.aDNA §C · rule-text + upstream proposal: this vault). A third VAULT running its own registered shim ledger graduates this file from draft. Sibling to pattern_credential_broker via the one-time-grant / registered-lifecycle family, split because register-at-creation + conjunctive retirement is a distinct lesson from credential non-egress (see Provenance)."
last_edited_by: agent_rosetta
tags: [pattern, shim, symlink, back_compat, registry, window_discipline, conjunctive_retirement, rename, archive, health_check, lifecycle, hestia, champollion]
---

# pattern_shim_registry

> **Plain-language version first**: when you rename or archive a project, the old name doesn't just vanish — other files still point at it, so you leave a **shim**: a back-compat symlink that quietly forwards the old path to the new one, so nothing breaks the instant you rename. The trouble is that shims are invisible debt. Un-tracked, they pile up forever (nobody dares delete one, because *maybe* something still depends on it) — or somebody deletes one too early and a consumer snaps. This pattern makes every shim a **registered, first-class object** with a little life-story: its *class* (rename? archive? code-move?), its *window* (a default 30-day clock), its *retire-condition*, and its *owner*. And it never retires a shim just because the clock ran out — retirement is **conjunctive**: the window must lapse **AND** a fleet-wide search must find zero live references still using the old name **AND** the owner must sign off. A lapsed clock alone proves nothing. The result: shims become auditable infrastructure you can safely reap in batches, instead of either eternal cruft or landmines.

## 1. Problem

Renames, archives, subsumptions, and code-home moves are constant in a growing workspace (this node has done dozens — `SiteForge.aDNA → Astro.aDNA`, `TaskForge.aDNA → Operations.aDNA`, `lattice-protocol → LatticeProtocol.aDNA/what/latticeprotocol`, and so on). Each leaves a back-compat symlink so live references don't break at the moment of the move. Untracked, shims fail in *both directions at once*:

1. **They accumulate forever.** Nobody knows whether a given shim is still load-bearing, so nobody dares remove it. The workspace root silts up with symlinks whose purpose is lost.
2. **They get retired too early.** Someone sees an old shim, assumes it's dead, deletes it — and a consumer that still pointed at the old path snaps.
3. **Date-only windows are wrong in both directions.** A lapsed 30-day window says *nothing* about whether live references remain — retiring on the date alone risks breakage. And a *default* window on a shim that should actually retire on **evidence** (e.g. a rename shim waiting on downstream consumer-wrapper re-federation) misleads a wave-executor into reaping something whose true condition hasn't fired.

The naive alternatives — "retire on a timer" or "never retire" — are the two failure modes themselves. What's needed is a way to make each shim's *lifecycle* explicit and its retirement *conjunctive* (multiple conditions, not one clock).

## 2. The mechanism

Every shim symlink is a **registry row**, created in the *same action* that creates the shim. The registry is a single standing ledger (here: `Home.aDNA`'s houseclean `disposition_ledger_v2.md` **§C**, which outlives its campaign by charter). Each row carries four facts:

| Field | Role |
|---|---|
| **class** | rename · archive · subsume · federation · functional (code-home) · merge-archive · host-move · deprecation-alias — the *kind* of move, which shapes the retire-condition |
| **window** | default **30 days**; *dropped entirely* on evidence-keyed rows (a date would mislead) |
| **retire-condition** | the conjunctive test that must pass (see below) |
| **owner** | who acks retirement — often Hestia (the registry keeper), sometimes a persona whose vault the shim serves |

Three rules make it work, and they are the heart of the pattern:

- **Register at creation.** A shim without a registry row is a health-check *failure*, not a tolerated omission. The registration and the `ln -s` are one action.
- **Retirement is conjunctive.** A shim retires only when: **window lapsed** *AND* **workspace ref-sweep = zero** (excluding `_archive/` + session history — historical prose keeps the old name forever and never counts) *AND* **owner-ack** where owner ≠ the registry keeper. **A lapsed window alone never auto-retires** — it is a necessary condition, never a sufficient one. (The window is even operator-*waivable*: it's a self-imposed pause between "approved" and "fire," not a technical gate.)
- **Evidence-keyed rows drop the date.** Some shims retire on a downstream *event* (consumer wrappers re-pointed, a code-home restructure), not a calendar. Those rows omit the window column outright, so no executor mistakes a lapsed date for readiness.

Two further disciplines fall out of these:

- **Batched, pre-authorized waves.** Retirements don't each open a fresh operator gate — they batch into operator-pre-authorized *waves*, each fired as a dated one-line confirmation carrying its ref-sweep proof. (Live: W1 · W2 · W3 waves on this node.)
- **Health-check enforcement + re-read-before-mutate.** A node health-check step (`skill_node_health_check` S13) scans top-level symlinks against the registry: unregistered → hard flag (exit code); registered-but-missing + window-lapse → warnings; evidence-keyed rows never lapse-warn. And because dispatched legs land between missions, the ledger is **re-read immediately before any mutation** (a discipline earned by getting caught twice in one day on this node).

### 2.1 Deprecation notices are bound to their shim

A deprecation-notice file (the human-readable "this path moved" banner) is **bound** to the shim it describes: it is updated or retired in the *same action* that retires the shim. An orphaned notice pointing at a shim that's already gone is its own small rot; binding prevents it.

## 3. Live instances (the structure IS the lesson)

**Registry side — the standing ledger (read-only reference; the node vault owns it):**
- `Home.aDNA/how/campaigns/campaign_workspace_houseclean/disposition_ledger_v2.md` **§C** — the canonical shim registry: dozens of rows across the classes above (rename shims on three pre-auth waves; federation shims owned by Venus and explicitly *do-not-touch*; functional/code-home shims marked *indefinite / annual review*; the evidence-keyed `VideoForge.aDNA → Videos.aDNA` row that drops its window; the huge ADR-045 wrapper-relocation *batch* row). Ratified at the Spring Clean THE-gate (2026-06-10, SC-4 §B); installed at SC-7 with the health-check wired the same mission. It is a **standing** section — it outlives its own campaign.

**Rule + proposal side — this vault + the workspace (self-reference, concrete paths):**
- **Workspace Rule 9** (`~/aDNA/CLAUDE.md`) is the rule *text*: "every shim symlink is registered at creation with class, window, retire-condition, and owner … retirement requires window-lapse + verified ref-sweep-zero + owner-ack — a lapsed window alone never auto-retires." The registry §C is what Rule 9 points to.
- [[../../how/backlog/idea_upstream_shim_window_discipline|idea_upstream_shim_window_discipline]] lives *in this vault* — the upstream proposal to bake the discipline into the `.adna/` template (a Standing Rule + a registry-section template + a health-check step). It is `status: accepted` and already `fold_batch:`-marked for the Champollion M6.1 release candidate. Notably, Rule 9 *forward-cites this filing's path* — the rule shipped one mission ahead of the proposal, which the proposal's own note records.

> **The honest divergence, recorded not hidden**: the registry does *not* pretend "ref-sweep = zero" is always cleanly achievable. For a renamed-with-history vault (`LatticeNetwork.aDNA → Network.aDNA`), the live-routing surface is 0 but **~463 historical prose mentions persist** and are kept verbatim — they never count toward the sweep, and the row explicitly defers "what ref-sweep-zero *means* here" to a co-decision between the owner (Venus) and the keeper (Hestia). The pattern's rule ("excluding session history + `_archive/`") is exactly the mechanism that lets a history-bearing rename retire at all: it distinguishes *live routing* from *historical citation*, and only the former gates retirement.

## 4. Adoption (copy, don't re-derive)

**Standing up a registry (you are the node / registry keeper):**
1. Create one **standing** ledger section (survives any campaign it lives inside) as the single home for all shim rows.
2. On *every* rename/archive/move: in the same action that creates the shim symlink, append a row — **class · window (default 30d, or *drop it* if evidence-keyed) · retire-condition · owner**.
3. State the **conjunctive** retire-condition in the row: window-lapse *AND* ref-sweep-zero (excl. `_archive/` + session history) *AND* owner-ack where owner ≠ keeper.
4. Bind any deprecation-notice file to its shim (retire together).
5. Wire a **health-check** step that flags unregistered top-level symlinks with an exit code; warn (don't fail) on registered-but-missing or window-lapse; never lapse-warn evidence-keyed rows.
6. Retire in **pre-authorized waves** — batch, fire each as a dated one-liner with ref-sweep proof; **re-read the ledger immediately before any mutation**.

**Creating a single shim (you own a vault being renamed/moved):**
1. Register the row in the same action as the `ln -s`. An unregistered shim is a health-check failure.
2. If your shim retires on a downstream *event* (wrappers re-federated, code-home restructured), make it **evidence-keyed** — drop the window column.
3. When your retire-condition fires, ack to the keeper; don't self-retire out of band.

## 5. When NOT to use / anti-pattern

- **A move with genuinely zero references** (a brand-new path nothing points at yet) needs no shim and no row — the registry is for *back-compat* symlinks that exist because live references still resolve through the old path.
- **Anti-pattern — the unregistered shim.** A symlink created without a row is invisible debt and a health-check failure; the registration is not optional paperwork, it *is* the shim's existence in the ledger.
- **Anti-pattern — retire-on-timer.** Deleting a shim because its 30-day window lapsed, without the ref-sweep and owner-ack, is the exact breakage the conjunctive rule prevents. The window is necessary, never sufficient.
- **Anti-pattern — a date on an evidence-keyed shim.** Putting a default window on a shim that should wait for a downstream event misleads a wave-executor into reaping it early. Drop the date; state the evidence.
- **Anti-pattern — the orphaned notice.** Retiring a shim but leaving its "this moved" banner behind (or vice-versa) is half-rot; notice and shim retire in one action.
- **Anti-pattern — counting historical prose in the sweep.** Session records and `_archive/` keep old names forever by design; a renamed-with-history vault would *never* reach zero if you counted them. The sweep is live-routing only.

## Forward integration (fold stub)

**`fold_batch: champollion_m6_1_rc`** — WHO: Rosetta (aDNA.aDNA), for ratification at Champollion **G3**, shipped via **M6.1**'s release candidate through `skill_template_release`; WHAT: the Standing-Rule text + a registry-section template + a node-health-check step folded into the `.adna/` fork-base, so any fresh workspace inherits shim-window discipline (the pre-existing, already-accepted upstream proposal is [[../../how/backlog/idea_upstream_shim_window_discipline|idea_upstream_shim_window_discipline]], carrying its own `fold_batch: champollion_m6_1_rc`). WHEN/HOW defer to M6.1's RC. Do NOT touch any template file or `.adna/` here.

## Provenance & graduation

Harvested at Operation Champollion **M3.2** (Pattern Harvest II, 2026-07-02, Rosetta/this vault) from the live `Home.aDNA` §C standing shim registry (Spring Clean, Hestia) and this vault's workspace Rule 9 + the already-accepted upstream proposal. **Instances: 2 vault-level adoptions** (registry: Home.aDNA §C · rule-text + proposal holder: this vault) — a third VAULT running its own registered shim ledger graduates this file from `status: draft`; the template fold rides the M6.1 RC per the fold stub. **Split-call reasoning** (one line, per the M3.2 brief): this pattern and [[pattern_credential_broker|the credential broker]] were authored as **two** patterns — they share only the "one-time-grant / registered-lifecycle" *family resemblance*; this pattern's core lesson (**register-at-creation** + **conjunctive retirement**) is orthogonal to the broker's core lesson (credential **non-egress** + names-only), so a single file would conflate two distinct disciplines. Related patterns: [[pattern_credential_broker]] (the non-egress sibling in the same lifecycle family), [[pattern_order_of_battle]] (a disposition ledger whose rows, like shim rows, each carry an owner + a firing condition), [[pattern_agents_md]] (both narrow the working set — the health-check flags what shouldn't be there, an AGENTS.md gates what to load).
