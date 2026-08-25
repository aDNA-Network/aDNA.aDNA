---
type: backlog
subtype: upstream_idea
created: 2026-08-23
updated: 2026-08-24
status: proposed
last_edited_by: agent_hestia
origin_vault: Home.aDNA
origin_persona: hestia
target_skill: how/skills/skill_open_iss.md
related: [skill_create_iss, skill_watch_iss, adr_028_iss_architecture, adr_029_iss_standard_touch]
findings: [F-GATE-02, F-GATE-04, F-GATE-05, F-GATE-06]
severity: high
tags: [upstream, iss, operator_gate, provenance, stale_tab, frontmost_unique, f_gate_06, copy_drift, canonical_vs_copies, browser_of_record, receiver_0_4_2_provenance_landed]
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

---

## ▸ APPENDED 2026-08-24 (Hestia, P5.4 wave-11 sitting) — F-GATE-06, and the finding CHANGED UNDER MEASUREMENT

**What was going to be filed:** *"`skill_open_iss` defaults to Safari; the operator rules in Chrome, so
the open step strands the gate."* Home has been carrying that sentence since the wave-9 sitting.

🔴 **It is wrong about the canonical skill, and checking took one `grep`.** The canonical
`aDNA.aDNA/how/skills/skill_open_iss.md` (`updated: 2026-05-29`, md5 `829f9530…`) reads:

> *"Browsers present: Google Chrome (default for ISS gates), Safari. **Chrome is the default for ISS
> gates.** Safari blocks `file://` pages from loading image subresources … so images render **broken** in
> Safari."*

**The canonical was already correct, and it was corrected for exactly this reason.**

### ⭐ The real finding is worse, and it is this idea's own closing paragraph coming true

| copy | `updated` | md5 | says |
|---|---|---|---|
| `aDNA.aDNA/how/skills/` — **canonical** | **2026-05-29** | `829f9530…` | *"Google Chrome (default for ISS gates)"* |
| `Astro.aDNA/how/skills/` | **2026-05-21** | `fdd7cd2c…` | 🔴 *"Safari (default), Google Chrome"* |
| `WebForge.aDNA/how/skills/` | **2026-05-21** | `fdd7cd2c…` | 🔴 *"Safari (default), Google Chrome"* |

**The 05-29 correction never propagated.** Both downstream copies are byte-identical to each other and
**three months stale**, and their whole pattern block — the AppleScript, the `open POSIX file` form, the
variants table — is written **for Safari**, the browser the canonical singles out as the one that renders
image gates broken over `file://`.

⇒ **This idea's closing paragraph — *"with three copies in the fleet, editing one would create the drift
this idea is about"* — is not a hypothetical. It already happened, to the fix.** And the drift runs in the
direction that hurts: **consumers reach the stale copy.** Home's own federated route is
`Home.aDNA/how/federation/astro/` → **Astro's copy** → **Safari**. An agent that follows Home's wrapper
faithfully gets the wrong browser *and* the broken-image failure mode, while the canonical sits corrected
and unread.

🔑 **A canonical that cannot prove its copies match it is not canonical; it is one of three opinions.**
The remedy this idea should carry is therefore **not** "change a default" — the default is already right
where it counts — but **a propagation check**: `skill_open_iss` (and its siblings) need a copy-census the
way `Git.aDNA`'s wrapper does, so a corrected canonical is detectably ahead of its copies.

### ✅ And the cheap remedy this idea asked for HAS LANDED — which is what makes the better rule possible

This idea's *"record provenance in the artifact"* section asked for `source` / `user_agent` /
`remote_addr` on the verdict, noting *"the receiver already has all three at write time and discards
them."* **Receiver `0.4.2` now writes all three.** Verified first-hand on
`Home.aDNA/how/gates/p5_4_wave10_shape_gate.output.json`:

```
"receiver": { "version": "0.4.2", "remote_addr": "127.0.0.1", "receiver_port": 8767,
              "user_agent": "…Chrome/151.0.0.0 Safari/537.36" }
```

⇒ **the browser of record is now DERIVABLE rather than assumed**, and that is the rule worth adding to the
canonical skill: *open the gate in the browser the last verdict on this node was posted from; fall back to
the documented default only when no receiver log exists.* It could not have been written before `0.4.2`.

⚠ **Scope, stated so it is not over-read:** one `user_agent` string is *the last ruler*, not *the
operator's preference*. It is a better default than a hardcoded one, not a proof of anything.

**Filed, not fixed** — three copies, and a unilateral edit to one is the move that produced the table
above. Home takes no cross-vault edit here. Home-side action taken instead: Home's own gate-opening step
derives the browser from the receiver log, and Home's memory of *"canonical defaults to Safari"* is struck
as **false of the canonical and true only of the copy Home's wrapper reaches**.
