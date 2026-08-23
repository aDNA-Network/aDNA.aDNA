---
type: backlog
subtype: upstream_idea
created: 2026-08-23
updated: 2026-08-23
status: proposed
last_edited_by: agent_hestia
origin_vault: Home.aDNA
origin_persona: hestia
target_skill: how/skills/skill_open_iss.md
related: [skill_create_iss, skill_watch_iss, adr_028_iss_architecture, adr_029_iss_standard_touch]
findings: [F-GATE-02, F-GATE-04, F-GATE-05]
severity: high
tags: [upstream, iss, operator_gate, provenance, stale_tab, frontmost_unique]
---

# Upstream idea — an ISS gate cannot currently prove who ruled it, and the open step cannot prove which tab

**Filed by Hestia (`Home.aDNA`) against the canonical `skill_open_iss`.** Home does **not** edit the
canonical skill — this is the `skill_upstream_contribution` route, and the receiver half belongs to
Vitruvius (`WebForge.aDNA`) rather than to the standard at all. Both halves are recorded together because
they are **one failure surface** seen from two ends.

## 🔴 The evidence that makes this urgent — a REAL ruling was indistinguishable from a FABRICATED one

On **2026-08-22** the same vault produced both, hours apart, on the same gate id:

| | source | `decisions` | notes | `confidence` | `sev_calib` |
|---|---|---|---|---|---|
| **fabricated** (F-GATE-04) | an agent driving the page headlessly *to measure it* | all `approve` (6 §§) | all `null` | 4 | 0.75 |
| **genuine** (operator) | the operator, in a browser | all `approve` (7 §§) | all `null` | 4 | 0.75 |

⇒ 🔴 **F-GATE-05 — the artifact carries no provenance.** The two are **byte-indistinguishable in shape**.
The receiver **keeps no log file**, so the POST could not be attributed either. The *only* structural
difference was **7 sections vs 6** — and that is an accident of an unrelated repair landing between them,
**not a designed control.**

**The genuine ruling was confirmed only by asking the operator in conversation.** That worked, and it does
not scale: *a verdict whose authenticity rests on asking is not a verdict the system can be said to
record.*

## Half A — `skill_open_iss` (the standard's half): **frontmost-and-unique**

The skill opens a gate and positions it. It does **not** verify what it just opened, and both gaps have
now been paid for:

1. **No uniqueness check.** A gate left open from a prior sitting is a **stale tab**, and every visual cue
   on it is identical to the live one. F-GATE-02 destroyed a ruled verdict exactly this way — a stale tab
   re-submitted over a fresh ruling and the receiver answered `200`.
2. **No frontmost verify.** The skill assumes the window it positioned is the one the operator will act in.

**Proposed additions** (macOS/osascript path, matching the skill's existing shape):

- **Enumerate every browser**, not just the default — Chrome *and* Safari *and* Arc — and every window and
  tab, for a URL matching the gate id. **More than one match is an error, not a warning**, and the skill
  should refuse and name the duplicates.
- **Verify frontmost after positioning**, and report what actually came forward rather than assuming.
- **Close-or-name pre-existing matches** before opening a new one.

*Prior art in this workspace:* the `ui-automation-recon-before-return` discipline (idle-gate,
frontmost-verify, capture-and-read before any blind Return) — this is that rule applied to gate-opening.

## Half B — the receiver (Vitruvius's half, recorded here for coherence, **not** proposed to the standard)

`WebForge.aDNA/what/lib/iss/runtime/gate_receiver.py` `do_POST` validates `gate_id` against traversal,
then `output_path.write_text(...)` **unconditionally** — no existence check, no 409, no backup, no append,
and it **clears the sentinel** either way.

Four remedies, in the order they would have prevented the observed incidents:

1. **An already-ruled gate renders an "already ruled" banner.** This is the one that stops the stale-tab
   class at the source.
2. **409 unless `supersede: true`**; predecessor written aside as `<gate_id>.output.<ISO>.superseded.json`.
3. **Distinguish draft from final** — or do not write `.output.json` on a draft at all (F-GATE-04).
4. **Log every POST with its origin** — the incident was unattributable *because there was no log*.

## ⭐ And one that is cheaper than all four: record provenance in the artifact

A `source` / `user_agent` / `remote_addr` field on the verdict would have made this a lookup instead of a
conversation. **The receiver already has all three at write time and discards them.**

## Home-side rule adopted immediately, and offered as doctrine

> **Never drive a live ISS page with automation while its receiver is up.**

Re-measurement after F-GATE-04 was done on a **copy with `data-receiver-url` neutralised**, proven by a
receiver log with no POST after the incident. This rule cost nothing and would have prevented the
fabrication outright.

## Why this is filed rather than fixed

`skill_open_iss.md` is **canonical in `aDNA.aDNA`** with copies in `WebForge.aDNA` and `Astro.aDNA`; the
receiver is `WebForge.aDNA`'s. A unilateral cross-vault edit to a canonical skill is exactly the move the
workspace forbids — and with three copies in the fleet, editing one would create the drift this idea is
about. **Home's canonical md5 at filing: `829f95307deb9ce3eecbe6e7bc2fefdc` (unchanged).**
