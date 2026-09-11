---
type: artifact
artifact_class: operator_queue_reconciliation
campaign: campaign_haussmann
title: "The operator queue, re-derived at the object — 2026-09-11"
created: 2026-09-11
updated: 2026-09-11
status: active
last_edited_by: agent_rosetta
executor_tier: opus
derived_by_session: session_stanley_20260911_110421_haussmann_queue_reconcile
grounded_in:
  - "every `status:` frontmatter in what/decisions/ (54 files, read not counted)"
  - "`#needs-human` sweep across the vault, each hit re-probed at its object"
  - "STATE.md owed list + phase field, checked against the artifacts they name"
tags: [artifact, haussmann, operator_gate, reconciliation, needs_human, claim_rot]
---

# The operator queue, re-derived at the object

> **Why this exists.** A cold read of the queue on 2026-09-11 re-presented **two decisions that had already
> been taken and shipped**, plus a missing instrument that exists. The queue was not wrong about the work; it
> was wrong about what was left, which is the only thing a queue is for.
>
> ⭐⭐ ***A stale owed-row does not merely misinform — it spends operator attention on a closed question.***
> Every entry below was re-probed at its object. Where the probe contradicted the record, the record was
> corrected (SO-6: struck, never deleted) and the row registered at [[claim_register]] §26.

## 0 · ADRs — the queue is EMPTY, and it is not the queue anyone meant

**53 `accepted` · 1 `amended` · 0 `proposed`**, derived by reading the `status:` line of all 54 `adr_*.md`
frontmatters (`adr_index.md` is an index, not an ADR, and is excluded).

The single non-`accepted` file, **ADR-013**, is **not an open decision** — its index row records it ratified
2026-05-13 per operator decision D-StdADR; `amended` marks a 2026-06-11 revision. Nothing is blocked by it.

⚠ **ADR numbers 015 and 018–021 are unassigned by design** (`adr_index.md` F-CHM-206). Do not read the gaps as
missing ADRs. ⚠ **ADR-008 reads "inactive" in its body** while its frontmatter is `accepted` — that is where
STATE's "1 inactive" comes from.

> ***"Outstanding ADRs" and "outstanding gates" are different queues, and only the second is non-empty.***
> The ADR queue has been empty since ADR-056 was ratified 2026-09-04.

## 1 · CLOSED BY MEASUREMENT — do not re-present these

| Was in the queue | Probe | Verdict |
|---|---|---|
| **⊳ D-D — the docs-repo license** (`p2_replan.md`, `#needs-human`, "legal edge") | `LICENSE` = MIT, "Copyright (c) 2026 aDNA Labs", committed `8e0efa4`, on `origin/main`, raw URL **200** `[D]` | ✅ **RULED 2026-08-19 AND SHIPPED.** ⛔ The tag survived in **two** places, one of them **directly above its own ruling** |
| **`sweep/jsonld_census.md` has no instrument** (STATE owed list) | `scripts/jsonld_census.mjs` + `jsonld_census_redtest.mjs` at the **vault root**, committed `7956b97` | ✅ **BUILT 2026-09-09.** A re-check scoped to `site/scripts/` returns a false MISSING — the census wants the repo root, the build wants `site/` |
| **Venus's membership-vocabulary asks** (`idea_upstream_…pre_admission_tier.md`, `status: open`) | Reply delivered 2026-09-11; three asks, three dispositions | ◐ **PARTIALLY RULED.** `A2` endorsed, `A3` rescued from deferral. ⛔ **`A1` is genuinely still open** — see §2 |
| **P4.4b `B3` / `B2b`** (STATE `phase:` field) | Mission frontmatter `status: completed`; B2b shipped `bar_provenance.json` + `gate-53` (`1f495c6`); B3 `4bbbe01` | ✅ **BOTH CLOSED 2026-09-02.** A peer review re-reported these as open **because it read this field** |
| **"Five increments BUILT AND UNSEEN / no deploy GO'd"** (STATE `phase:`) | Five deploys 09-04 → 09-11; prod `681c814`, probe 8/0 | ✅ **ALL LIVE.** The sentence outlived all five deploys that falsified it |
| **Berthier's Windows-CLI routing** (inbox, `ack_required: true`) | Reply delivered 09-11; backlog idea `status: accepted`, `accepted_by: operator` | ✅ **ACK DISCHARGED.** What remains is *writing the recipe*, not deciding |

## 2 · GENUINELY OPEN — the real queue, ranked by what it blocks

### ⛩ G1 — `P5.1`: five recruited cold readers · a fresh macOS account · the operator as outsider

**This is the whole critical path and the only thing that matters.** Everything downstream — `P5.2`, DP9,
campaign close — waits here, and **nothing agent-side moves it.**

- **`AC-1`** five recruited readers across 3 profiles (senior engineer · domain expert unfamiliar with agents ·
  prospective contributor). ⛔ **Agents must not recruit.** Brief is `ready_for_operator` at
  `artifacts/p5_1/recruitment_brief.md`; the ask is five people × five minutes.
- **`AC-2`** a **recruited non-builder** (one of the five) runs TTFS on a fresh macOS account. ⭐ **Label the
  artifact for BOTH `P5.1 AC-2` and `P2.6 O0b`** — that labelling is what closes the campaign's
  longest-standing ⛩ for free. ⚠ The criterion text said *operator* until 2026-09-09; AMENDMENT 2 re-instated
  the non-builder and the criterion had not learned it.
- **`AC-3`** operator-as-outsider against `/community/proposals`, CoI declared, **halting before submission**.
- **No ordering.** `AC-2`/`AC-3` may run concurrently (released 2026-09-05).

⛔⛔ **A DEPLOY HOLD GOES LIVE THE MOMENT `evidence/p5_1/` IS NON-EMPTY.** Re-derive the panel build stamp
from the alias' `/.well-known/adna-build.json` **before the first panellist** — do not quote a recorded one.

### ⛩ G2 — check Speed Insights before scheduling the panel *(cheap, and it may move the close date)*

`P5.2` requires both binary gates green **with field data**. The p75 clock started at the 09-07 transport
deploy. **If no reading exists yet, `P5.2` has a second blocker that `P5.1` completing will not clear.** One
dashboard look answers it; an agent cannot — the token is broker-held.

> ⭐ Worth stating plainly because the campaign's mental model is *"P5.1 is the only blocker"*, and that is
> true of the **mission graph** and possibly false of the **calendar**.

### ⛩ G3 — one gate for the peer-ratification queue

The only genuine ratification queue left. Bundle into one sitting:

- **Babbage's two `proposed` upstream findings** — the sharpest item here. **H1 mints unvalidated prose into
  every node's identity**: a correctness defect in node bootstrap, not a vocabulary question. Their memo's own
  header says *"authored by an agent; ratification is the operator's."*
- **Babbage's lease question.**
- **Ilmarinen's upstream filing** (`skill_upstream_contribution` needs approval).
- **Venus `A1`** — the pre-admission-tier vocabulary, the one disposition of three still open (§1).

### ⛩ G4 — H1, the Wilhelm co-sign embargo · **re-probed, LIVE, and higher than previously ranked**

`site/src/data/subnetworks.json` (`generated_at: 2026-07-06`) carries **`attribution: "Wilhelm Foundation
(Helene & Mikk Cederroth)"`** on the `wilhelm_ai` and `rare_archive` entries, and **all four cards render live
on `/commons`** `[D] 2026-09-11`. The written co-sign clearance the audit asked for is **not recorded anywhere
in this vault.**

⇒ **Real, named third parties are published on a live public page under an embargo that was never lifted on
the record.** Either obtain clearance in writing or feature-flag the two cards. ⛔ Worth clearing **before the
panel** — `/commons` is a `gate-49` template and a cold reader lands on it, and the claim register already
scores its copy `unsupported` (R-49, R-52).

### ⛩ G5 — H5, the CoC confidential reporting address · **re-probed, still open**

`CODE_OF_CONDUCT.md:54` routes enforcement **through GitHub only**; line 63 states *"a dedicated confidential
reporting address is a tracked follow-up."* A reporter with a complaint about a maintainer has only a public
channel. Cheap to fix, and it is a credibility item on the same stratum the campaign exists to raise.

## 3 · OPEN BUT NOT QUEUE ITEMS — stated so they stop being re-read as decisions

| Item | Why it is not a gate |
|---|---|
| **`npm login` / ADR-056 clause 5** | ⛩ Ruled **OUT of the gate queue 2026-09-11** — a **credential**, not a decision. It belongs at the broker. It had been re-listed as pending at four consecutive cold starts |
| **`skill_template_release` gate** | Fired at v8.11 on 2026-09-11. Reopens at the **next** release, not now |
| **`F-v`** (VoiceOver sitting) | Deferred **by ruling** to a follow-up campaign |
| **`F-ab`(a)** (~3.3 % `gate-39` flake) | Open by ruling, blocks nothing. *A red on a duration-sensitive gate is a question, not a verdict* |
| **`SS_VERCEL_TOKEN` rotation** (H9) | Hygiene debt; operator-deprioritised (test account). Keep safe-deploy discipline regardless |
| **B1's first p75** | Passive — needs elapsed time and traffic, not a decision. See **G2** |

## 4 · OTHER CAMPAIGNS — real, but nothing HAUSSMANN waits on

⛔ **Do not let these share a sitting with the P5.1 handoff.**

- **H3 — Keystone router rows + first remotes.** Re-probed: all 10 vault dirs exist and carry `luke-mesh`
  remotes; the workspace router carries **one cohort summary row, zero individual rows** `[D]`. ⚠ **Possibly
  superseded rather than open**: Standing Rule 7 (router rows carry routing identity only) is an argument that
  the summary row is the *correct* shape and ten rows would be the defect. **Not ruled here** — the router is
  `Home.aDNA`'s file and moves by memo, never by an edit from this vault (Rule 10).
- **H4 — Fluxer policy floor**, 19 counsel items + the D-3 harvest ruling. `Fluxer.aDNA`'s surface.
- **H6 — registry regen cadence + released-image SHA.** Queued to the operator with a recommendation 2026-07-16.
- **H7 — node-backup SPOF (WI-16)** · **H8 — Dynamo R1 + §8 data ruling.** Both recorded non-blocking.

## 5 · Flagged, NOT edited — an agent's limit, stated

- **`what/decisions/adr_023_*.md:73`** names `adna-docs.vercel.app/vaults/` inside a **ratified contract
  clause**. Rewriting ratified ADR text is not an agent's act (§7.7). **Operator call.** *(Line 146 of the same
  file is a dated historical record and is correctly left alone.)*
- **`adr_006`**, the III result JSONs, and `idea_theme_persistence_bug.md` all name the legacy host as **dated
  provenance where the old name is the subject** — correctly untouched (SO-6/SO-7).

## 6 · What this reconciliation did NOT do

- ⛔ **It did not sweep all `#needs-human` hits to exhaustion.** Five were probed at the object; H4/H6/H7/H8
  were classified by ownership, **not re-verified**. Given that **two of the first five probed were already
  discharged**, assume a similar rate survives in the unprobed set — and treat §4 as *unverified*, not as
  *confirmed open*.
- ⛔ **It did not read 229 docs pages against the claim register.** See [[claim_register]] §26.1.
- ⛔ **It ruled nothing.** Every ⛩ above is the operator's. This artifact re-derives *what is still owed*; it
  does not answer any of it.
