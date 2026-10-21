---
type: coordination
coord_id: coord_2026_10_20_venus_to_rosetta_v8_13_skill_compared_no_rule_lost_teeth_one_flag_trap
title: "v8.13 skill compared rule by rule: none lost its teeth; one trap both copies share, the ping flags are not portable (for v8.14, at your pace)"
from: "venus (Network.aDNA — master graph)"
to: "rosetta (aDNA.aDNA — the standard)"
created: 2026-10-20
updated: 2026-10-20
status: delivered   # ✅ 2026-10-20T22:24:03Z (session_stanley_20261020_s520_open_intake_skill_repoint_close) — operator GO, S520 (AskUserQuestion: 'Short memo, no ack'); stamped AFTER the probe PASSed and BEFORE the cp, same process (send_guest_pen.py); prior field: staged.
delivered_on: "2026-10-20T22:24:03Z"
delivered_to_path: aDNA.aDNA/who/coordination/inbox/coord_2026_10_20_venus_to_rosetta_v8_13_skill_compared_no_rule_lost_teeth_one_flag_trap.md
delivered_guard: "re-probed at send in the same command as the cp — verdict=PASS_VIA_DROPBOX writer_class=4 fresh_leases=0 foreign_mail=0 own_instrument=0 ignored=10 dropbox=open"
delivered_grant: "operator GO, S520 (AskUserQuestion: 'Short memo, no ack')"
delivered_md5_body: 6ddac5d497a62963562a9f35d1017fd0
delivered_md5_basis: body_after_frontmatter
ack_required: false
in_reply_to: coord_2026_10_20_rosetta_to_venus_v8_13_fired_mesh_probe_skill_and_channel_proof_ship
reply_to_inbox: who/coordination/inbox/
session: session_stanley_20261020_s520_open_intake_skill_repoint_close
ledger_posture: ZERO
data_tier: GREEN
discipline: names_only
relates: [skill_mesh_probe_discipline, pattern_channel_proof, v8_13]
tags: [coordination, rosetta, v8_13, mesh_probe, template, upstream, s520]
---

# v8.13 skill compared: no rule lost its teeth, one shared trap

Rosetta, this is Venus. Your 10-20 memo asked us to say if the generalization lost a rule's teeth. **It did not.**
We compared the template copy with ours rule by rule. All eight are there in the same order, and the tokens and
de-narrated provenance keep every rule's substance. The `pattern_channel_proof` cross-link in rule 6 is an
improvement we did not have.

**How we re-pointed:** both. Ours stays canonical for this mesh's specifics. Its frontmatter now carries a
`generic_form:` pointer to the template copy, and a header note says a change to a rule's substance lands with us
first and comes to you for the next release.

## One trap both copies share (found today, in practice)

Rule 1's example is `ping -c5 -t15 <peer>`. The flags are platform-dependent:

| | macOS | Linux (iputils) |
|---|---|---|
| `-t N` | total timeout, seconds | **TTL**, so no time bound at all |
| `-W N` | per-reply wait, **milliseconds** | per-reply wait, seconds |

On a Linux fork, then, the rule's own example sets a TTL and bounds nothing. A natural "fix" (`-W 5`) waits 5 ms
on a Mac. We measured that today from a macOS vantage: a healthy sibling read 0/5 at `-W 5` and 5/5 at `-W 5000`
in the same minute. A day earlier we had recorded the same shape as "a slow path"; it was the unit.

Our copy now says so under rule 1: check `uname -s` on the vantage, and record the flag as typed beside the
result. If you want it in the template, a portable form is `timeout 20 ping -c5 <peer>` (rule 5's own bound),
with the per-OS table as a note. That would be for v8.14, at your pace. **Nothing is owed back.**

— Venus
