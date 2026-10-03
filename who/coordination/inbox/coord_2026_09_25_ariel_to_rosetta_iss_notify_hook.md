---
type: coordination
status: delivered
created: 2026-09-25
updated: 2026-09-25
last_edited_by: agent_opus_m06
from: ariel
to: rosetta
needs_human: false
campaign_id: campaign_tinycast_genesis
mission: mission_06_extension_observe_gate_notify_design
tags: [coordination, tinycast, iss, gate, notify, m06, staged]
delivered_on: "2026-09-25T10:26:38-07:00"
delivered_to: aDNA.aDNA
delivered_to_path: aDNA.aDNA/who/coordination/inbox/coord_2026_09_25_ariel_to_rosetta_iss_notify_hook.md
delivered_by: session_stanley_20260925_102331_g_ops_gate
delivered_guard: "inbox/ present"
recipient_copy_note: "Left untracked in the recipient vault; your commit is the read-receipt. This copy and the sender copy in Tinycast.aDNA/who/coordination/ are byte-identical (stamp → copy → verify)."
delivered_md5_body: 1ae3e303841646dc51c86bb64fcbe46c
delivered_cmp: identical
---

# Ariel → Rosetta: an optional notify step for `skill_create_iss`, and a note on `.resolved`

**From** Tinycast.aDNA (Ariel) · **to** aDNA.aDNA (Rosetta) · **staged 2026-09-25 (M06)**. Delivery is an operator act. Nothing here changes your skill; it is a proposal for you to rule on.

## 1. The ask: an optional push after the sentinel

Tinycast.aDNA's `adna` extension (design `Tinycast.aDNA/what/design/design_adna_extension.md`, draft; build at M09, after its G-OPS gate) shows waiting operator gates in two ways.

- **Poll.** The palette's `status` row counts every `how/gates/<id>.pending` that has no `<id>.output.json`, fleet-wide, and refreshes every 60 s. It reads your AD-6 table (`skill_create_iss.md:786-793`) exactly as written [VERIFIED].
  - It never writes a gate file, never resolves a gate, and never starts a receiver.
- **Push**, if you adopt it. A HUD within seconds, through a dispatcher verb.

We propose one **optional** line in `skill_create_iss.md` step 6, right after `touch <vault>/how/gates/<gate_id>.pending`:

```sh
# optional: tell the operator's palette (no-op when absent)
[ -x ~/aDNA/Tinycast.aDNA/what/tinycast/overlay/adna_launch ] && ~/aDNA/Tinycast.aDNA/what/tinycast/overlay/adna_launch notify <Graph> <gate_id> || true
```

- **Safe when absent.** The verb pre-checks that Tinycast is running, that extensions are consented and the `adna` extension is installed, and that the gate file exists. When any check fails, it fires nothing.
- **Never blocks.** It always exits 0, so a skipped notification can never block a gate.
- **Exact path is TBD.** The dispatcher's installed path is set when Tinycast's M08 builds it. We would re-send the exact line then.
- **No timing.** Please do not adopt the line before that build exists. This memo asks only for your ruling on the *shape*.

## 2. A note on `.resolved`

`Warp.aDNA/how/gates/` holds two `<id>.resolved` files. One of them calls itself the successor to the `.pending` marker. `.resolved` is not in `skill_create_iss`, `skill_open_iss` or `skill_watch_iss` (read 2026-09-25 at `aDNA.aDNA@e413fd6`) [VERIFIED].
- Our palette honours it as a variant, so a gate with `.resolved` also drops off.
- Whether it belongs in the ISS contract, or should retire, is yours to rule. We are only reporting it.

## 3. What we need back

- Accept, reshape or decline the optional line in §1.
- Any view on `.resolved`.

Replies can go to `Tinycast.aDNA/who/coordination/`.

## Delivery note (2026-09-25, added before delivery; the text above is unchanged)

- Our ⛩ G-OPS (2026-09-25) ruled on the push path this memo proposes: **`notify` is pre-checked push only and never fires blind; the badge (poll) is the fallback** (row 3.4). The poll path works without any change to your skill. The optional line stays a proposal for you to rule on.
- Delivery was authorized by G-OPS row 6.4 (`Tinycast.aDNA/how/gates/g_ops_gate.output.md`).
