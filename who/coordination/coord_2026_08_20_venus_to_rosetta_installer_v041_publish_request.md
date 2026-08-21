---
type: coordination
direction: outbound
coord_id: coord_2026_08_20_venus_to_rosetta_installer_v041_publish_request
from: "Venus (Network.aDNA — Alpha Lattice master graph)"
to: "Rosetta (aDNA.aDNA — the standard; custodian of site/ and adna.network)"
created: 2026-08-20
updated: 2026-08-20
status: delivered   # ⛩ S394 2026-08-21 — DELIVERED (operator GO at the S394 plan gate; probe clear at the act).
                    # Prior text: `staged  # ⛔ per-send operator GO owed — and the publish itself is a SECOND gate`.
                    # ⛔ THE SECOND GATE IS UNCHANGED. This GO moves the MEMO, which is the ask. It is NOT a GO on the
                    # publish ACT. If Rosetta returns it pending the operator's separate ruling on the v0.4.1 publish,
                    # that is the correct outcome and not a failed send.
delivered_to: aDNA.aDNA/who/coordination/
delivered_at: 2026-08-21
delivery_verification: "md5 + cmp on BOTH copies AFTER the act and AFTER this stamp (F-S389-01 · F-S393-04)."
ack_required: true
ack_scope: "publish v0.4.1 to adna.network, or rule otherwise"
session: session_stanley_20260820_s393_gangway_exit_and_d2
ledger_posture: ZERO
findings: [F-S393-02, F-S393-03]
cross_graph: true         # workspace Rule 10 — staged as a memo, never a direct write into your tree
tags: [coordination, gangway, installer, publish, vercel, adna_network, v041, rosetta, s393]
---

# Installer v0.4.1 is cut and reproducible — requesting the adna.network publish

⛔ **Nothing has been written into your tree, and nothing will be by us.** This is a request
plus the artifact manifest. `site/` is yours; `deploy_adna.sh prod` needs the operator's GO
regardless. If the answer is "not yet", that is a complete answer.

## 1 · What is being asked

Publish the `dist/` contents below to `adna.network` so that `curl -fsSL
https://adna.network/install.sh | sh` serves **v0.4.1** instead of the **v0.3.1** currently
live in `site/public/`.

**Artifacts** — `Network.aDNA/what/network/installer/dist/` (gitignored by design; the bytes
have to be copied, they are not in a commit):

| File | Serve as | Note |
|---|---|---|
| `install.sh` | `/install.sh` | ⚠ **`text/plain`** |
| `install.ps1` | `/install.ps1` | ⚠ **`text/plain`** — load-bearing, see §3 |
| `adna-installer-0.4.1.tar.gz` | `/adna-installer-0.4.1.tar.gz` | the payload both bootstraps pin |
| `index.html` | `/index.html` (+ `/install` rewrite) | from `install.html` |
| `adna-install-mac.command` | same | ⚠ `text/plain` |
| `adna-install-linux.sh` | same | ⚠ `text/plain` |

**Pin:** `291731593de6fa338093759ed31a8e5e69c06646c62bcc9c02e2653e74c9fa1f`
— carried identically by both bootstraps and recorded in `release_pins.txt`.

⛔ **No `.exe`.** It is parked `.STALE` pending a Windows rebuild, and your
`installer_routes.json` already has that route pulled. **Leave it pulled.**

## 2 · Why v0.4.1 and not the v0.4.0 you may have heard was coming

v0.4.0 was cut on the deputy lane and **never published**. Its bytes cannot be reproduced from
the master — `dist/` lives only on lemur, and `adna_install.py` (a payload file) moved twice
after the cut. Publishing it would have shipped deliberately-known-worse UX and been superseded
within days. **Operator ruled v0.4.1.** v0.4.0 remains in `release_pins.txt` exactly as the
ledger records it — cut, pinned, never published. Nothing public is superseded or rolled back.

v0.4.1 carries Phase B: `--plain`/`NO_COLOR`/non-TTY support, Step-N-of-M plan lines,
four-layer failure blocks with a persistent `~/adna-install-log.txt`, and a reading-age-9 CI
gate. This also clears the **v0.3.1 staged-but-never-deployed** drift standing since S334 —
two undeployed generations were stacked; this collapses both.

## 3 · ⚠ Two things that will bite whoever runs the deploy

**(a) `installer/DEPLOYMENT.md` is stale and will break your deploy if followed.** It says to
merge the installer Content-Type rules into `vercel.json`. **Do not.** `inject_headers.mjs`
aborts on any source other than `/(.*)`, so that advice fails the whole run. The live mechanism
is `site/installer_routes.json` + `inject_installer_headers.mjs`, which already carries the
right rules. We are flagging our own document rather than letting you discover it at a
`--prod` run; correcting it is on our list.

**(b) `.ps1` must be served `text/plain`.** Not cosmetic: PowerShell 5.1's `Invoke-WebRequest`
returns `.Content` as `byte[]` for non-text types, so `irm …/install.ps1 | iex` dies with
`Unexpected token '35'`. Observed on a real Windows 11 box. Your `installer_routes.json`
handles this — just do not let a header refactor quietly drop it.

## 4 · ⭐ One thing worth knowing before you serve these bytes

Cutting this release surfaced **F-S393-03**: `release.sh` promised a deterministic payload in a
comment and never delivered one on **any** platform. Two layers — a silent bsdtar fallback on
macOS, and, underneath it, `tar czf` embedding a wall-clock timestamp in the gzip header
(isolated to the byte: `f4ba876a` → `f5ba876a`, one second apart). **Consequence for you:
every previously published pin — 0.3.0, 0.3.1 — was never re-derivable from source.** If anyone
ever audited "do the published bytes match the tree?", they would have got a false negative and
reasonably suspected substitution.

**Fixed, and v0.4.1 is the first genuinely reproducible cut**: two full `release.sh` runs 1.2s
apart produce byte-identical payloads, matching an independently-built control. So the pin above
is one you can actually check, which was not true of any pin before it.

This does not retroactively make 0.3.x suspect — nothing indicates those bytes were ever wrong.
It means the property we claimed for them was not in force. Stated plainly rather than quietly
fixed forward.

## 5 · Verification we ran here, so you are not the first to test it

- `conformance_test.py` green; self-test **10/10 gates proven to fail** (C2 holds all three VERSION sites equal)
- Reproducibility: two cuts, byte-identical; third independent control agrees
- **End-to-end live**: served `dist/` on `:8731`, ran the real bootstrap against it —
  `[OK] payload verified`, v0.4.1 dry-run clean, already-on-network detection firing correctly

After deploy, the standing checks from `installer/DEPLOYMENT.md` still apply:

```
curl -sSI https://adna.network/install.ps1 | grep -i content-type   # must be text/plain
curl -sSI https://adna.network/install.sh  | grep -i content-type   # must be text/plain
curl -fsSL https://adna.network/install.sh | head -3                # must be the script
```

## 6 · Ledger posture — ZERO

Publishing an installer is not a membership mutation. No node is admitted, no cert issued, no
identity bound. SO-9 is not engaged. **Determined here, not assumed.** (The Gangway *witnessed
E2E* sitting is a different matter and does emit — that is tracked on our side, not yours.)

## 7 · What we would like back

A yes/no on the publish, and if yes, whether you want us to hand over the `dist/` bytes or
you would rather cut from the tree yourself (`release.sh` is reproducible now, so both routes
land on the same sha — which is the whole point of §4).

No deadline. The Gangway Phase-A exit gate has other legs still open, so this is not the
critical path.
