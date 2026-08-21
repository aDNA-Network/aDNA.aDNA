---
type: session
session_id: session_stanley_20260821_153445_haussmann_winddown_p3_1
created: 2026-08-21
updated: 2026-08-21
status: completed
tier: 1
operator: stanley
agent: agent_rosetta
campaign: campaign_haussmann
mission: null   # wind-down + AAR + campaign fold-in + operator status ISS. Not a numbered mission.
executor_tier: opus
token_budget_estimated: "~70–120 kT — wind-down AAR after P3.1, a gap review of the campaign's cold-start surfaces, folding two standing lessons into campaign conventions, routing three follow-ups into P4.4, two upstream backlog proposals, and a phase_exit ISS carrying the Decade-2 status plus the owed Hopper ack"
token_budget_actual: "≈105 kT by content load — inside the ~70–120 kT estimate; above midpoint because the intake was three memos rather than the zero a clean sweep implies"
tags: [session, haussmann, winddown, aar, iss, sitrep, intake]
---

# Session — HAUSSMANN wind-down after P3.1: AAR, campaign fold-in, and the Decade-2 status ISS

Opened on *"Can we wind down + aar and update our planning/context/campaign with any gaps/improvements
… Please also provide a SITREP/campaign status review as a simple ISS."*

## ⛩ Operator rulings (in-chat, session open)

| # | Question | Ruling |
|---|---|---|
| 1 | The ISS is a decision instrument — what should it ask? | **Status review + Hopper's §2 ack as the composite.** A real pending decision, not a manufactured one |
| 2 | How far do the planning/context/campaign updates reach? | **Fold in + route + propose upstream** — conventions, P4.4 routing, charter, and two `idea_upstream_` files |

## 📨 Intake — the sweep caught THREE more unread memos, and one is dated today

`git ls-files --others --exclude-standard who/coordination/` at session open returned **three**
untracked memos. This is the **second consecutive session** where the sweep was load-bearing: yesterday
it caught Hopper's, which had arrived *after* that session's own opening sweep came back clean.

**The pattern is now established well enough to state plainly: peer memos arrive untracked, and they
arrive at any time, including mid-session. The sweep is not a wind-down formality — it is the only
mechanism by which this vault learns that a peer wrote to it.** Four memos in two days were found this
way and zero by any other means.

| From | Memo | `ack_required` | Disposition |
|---|---|---|---|
| **Hopper** (Git.aDNA) | `..._standard_bearer_gate_is_a_noop` | **true** (§2 only) | → the ISS composite decision |
| **Ilmarinen** (Forgejo.aDNA) | `..._public_row_says_genesis` | false | → **a live public-surface defect**; staged to Hestia (pt19) + claim register |
| **Venus** (Network.aDNA) | `..._installer_v041_publish_request` | true | **SUPERSEDED** — do not act |
| **Venus** (Network.aDNA) | `..._publish_target_moved_to_v043` | false, `severity: high` | → operator publish GO owed, for **v0.4.3** |

### Ilmarinen — a false claim is live on adna.network right now

`adna.network/vaults/forgejo/` renders `status: genesis` for a graph that has been a **running service
since 2026-08-08** — ladder P0–P6 closed, other lanes depending on it daily. The registry whose entire
claim is that it publishes real self-published context graphs is, on that row, publishing the opposite
of the truth. Ilmarinen also supplies corrected `note`/`subclass`/`persona_archetype` copy and — usefully
— draws the boundary on what deliberately stays *off* the public page (instance address, ports, container
inventory, the D-9 fleet-registry designation, CI consumers by name).

**This vault cannot fix it.** Campaign convention 5 / **pt19**: `vaults.json` is registry *data*,
Hestia-owned and operator-gated; this campaign fixes projection *code* and **stages data asks as memos**.
So the action is a memo to Hestia plus a claim-register row, not an edit. Ilmarinen says nothing is owed
in reply; the row is owed to the reader regardless.

**And the finding underneath it is one this campaign should adopt.** In Ilmarinen's words:

> *a stale row and a broken row look identical from the outside, and only the named vault can tell you
> which one you have.*

The claim register catches truncation, jargon, and internal paths — all detectable **from the copy
itself**. It is structurally blind to a well-formed sentence that is simply no longer true. That is a
real gap in this campaign's own instrument, and it is exactly the class the operator asked this session
to surface.

### Venus — the memo that was correct when it left and wrong by morning

Yesterday's v0.4.1 publish request was delivered on a genuine probe-clear, stamped after the act, and
re-synced byte-identical. It is **wrong anyway**: the deputy lane cut v0.4.2 and then v0.4.3 while it
sat. The publish target is **v0.4.3** — signed, `.minisig` alongside, MIT LICENSE first in the tarball,
payload `07ae6371…`.

Venus's own framing of the defect class (their F-S395-02) is worth carrying:

| | defect | what catches it |
|---|---|---|
| | we call it unsent; it has arrived | `outbound_stale()` |
| | we fixed our copy; theirs stayed stale | `cmp` at delivery |
| **F-S395-02** | **delivered, byte-identical — and the world moved** | **nothing. Divergence is zero.** |

Both copies agree perfectly and both are wrong. Their adopted convention — *a memo that pins a mutable
external value should state the pin **and its supersession condition** on its face* — applies to this
vault's outbound memos too, and is folded into the campaign conventions this session.

Two operational cautions they flagged, both of which would bite whoever runs the publish:
`installer/DEPLOYMENT.md` is **stale and will break the deploy if followed** (it says merge installer
Content-Type rules into `vercel.json`; `inject_headers.mjs` aborts on any source other than `/(.*)`),
and `.ps1` **must** be served `text/plain` or PowerShell 5.1's `irm … | iex` dies on `byte[]`. The live
mechanism — `installer_routes.json` + `inject_installer_headers.mjs` — already handles both.

⛔ **The publish is not fired here.** It needs the operator's GO and is surfaced in the ISS.

## Gap review — the campaign's cold-start surfaces, read against what P3.1 learned

Five findings. Two were fixed this session; three are reported and left, because fixing them here would
be scope this wind-down was not asked to take.

| # | Finding | Disposition |
|---|---|---|
| **G-1** | **The charter's `updated:` frontmatter has become a changelog.** A single YAML scalar now holds five dated multi-paragraph entries and runs to thousands of characters. A cold agent parsing the frontmatter meets a wall where it expects a date. The vault already has the instrument for this — `skill_state_graduation`, for exactly the case where a governance file accretes past its keep-set and aged content must graduate to a history file **verbatim** | **Reported, not fixed.** Graduating it is a real edit to a ratified charter and deserves its own pass |
| **G-2** | **The charter's mission tables carry no status column.** Six phase tables, 27 rows, and not one says whether the mission is done. Only the 27 mission files hold truth, so any reader of the charter alone is guessing | **Partly fixed** — a derived Decade-2 progress line added under the DP6 order block, explicitly labelled as a summary that will age, with the instruction to re-derive rather than trust it. The structural fix (a status column) is left |
| **G-3** | **Tier drift on P3.1.** The charter said `sonnet`; the mission ran `opus`. The mission file recorded the deviation honestly at O0; the charter did not | **Fixed** — struck through in place, so the change is visible rather than silent |
| **G-4** | **The claim register cannot see staleness** (Ilmarinen). It catches truncation, jargon and internal paths — all properties of the copy. A well-formed sentence that has stopped being true is invisible to it | **Adopted as convention 15**, registered as **R-129**, and staged to Hestia. The register had already looked at this row and passed it |
| **G-5** | **Peer memos arrive untracked, and only the sweep finds them.** Four in two days: Hopper's arrived *after* yesterday's opening sweep came back clean; three more were sitting today. Zero were found by any other mechanism | **Reported.** The sweep is already in the session protocol; what is new is the evidence that it is the *only* channel, and that mid-session arrival is normal rather than exceptional |

## Wind-down AAR (SO#5)

**Worked.** Running the untracked sweep first, before anything else — it changed the shape of the whole
session. Three memos surfaced, one of them a **live false claim on a public page** and one a
**high-severity correction to a memo already sitting in the tree and actionable as written**. Had the
sweep run at the end, as a formality, the wind-down would have been written against a picture that was
wrong in two places. Deriving the mission counts by script rather than reading them off a table also
paid: the per-phase breakdown (P0 4/5, P2 5/6, P3 2/5) is the substance of the ISS's first two sections,
and none of it is typed.

**Didn't.** The ISS's `receiver_url` was wrong on **both** the port and the path, and I would have
shipped it: port 8765 is the **HQ Dashboard**, a uvicorn app that is not a gate receiver at all, and the
POST path is `/save`, not `/gate`. The submit button would have failed silently against someone else's
service. Caught only because the receiver announced its own auto-port-discovery to 8768 and the mismatch
was visible. **I then wrote a malformed round-trip probe** (`decision`/`sections` at top level instead
of `output`) and briefly read the receiver's correct 400 as a receiver fault. Both are the same lapse:
assuming an interface rather than reading it — in a session whose entire subject is instruments that
report success while measuring the wrong thing.

**Finding.** *The instruments that report on other instruments are themselves unverified.* P3.1 found
`check_live_headers.mjs` reading Vercel's login page and calling it ours. Hopper's census found **14
vaults** whose pre-push hook prints `clean ✓` having scanned nothing — this one included, which is why
`gitleaks` ran by hand at every push point. Venus found their own `release.sh` promising a deterministic
payload in a comment and never delivering one on any platform, so **every previously published pin was
never re-derivable from source**. Three vaults, three independent discoveries, one week. The common
shape is not carelessness: each instrument was *written* correctly and *pointed* at the wrong thing, or
never *shown* it could fail. That is why convention 14 has two clauses rather than one.

**Change.** Conventions **13, 14, 15** added to the campaign — AC-coherence before ratification;
demonstrated-to-fail *and* reached-its-target for instruments; the staleness blind spot with its
inbound and outbound faces. Three follow-ups (**F-f/F-g/F-h**) routed into P4.4's mission file, where
the work is scoped, rather than left in an AAR. Two `idea_upstream_` proposals filed, the second of
which **answers Hopper's §4** — they flagged the near-identical ADR-011 A4 clause as standard-shaped and
explicitly ours to call, and filing it is cheaper than a second memo.

**Follow-up.** **G-1** (charter frontmatter graduation) and **G-2** (no status column) are open and
deliberately unfixed. **P4.4 now carries 8 inherited items** and has become the campaign's debt sink —
flagged in the ISS as possibly deserving its own scoping pass. Owed to peers: **Hopper §2** (the ISS
composite), **Venus** (the v0.4.3 publish GO — the ISS §4 decision), **Hestia** (R-129, staged).
Ilmarinen asked for nothing and gets the correction anyway.

**Budget (ADR-016 / SO#11).** Estimated **~70–120 kT**; actual **≈105 kT** by content load — inside the
range, above midpoint because the intake was three memos rather than the zero a clean sweep would have
implied, and one of them re-opened a public-surface claim.

## Deploys

**None.** The live surface is correct as of `tree=f053431` (P3.1). This session shipped no site change.

## SITREP

**Completed.** Wind-down after P3.1: intake of 3 unread peer memos · a 5-finding gap review · 3 standing
conventions folded into the campaign · 3 follow-ups routed to P4.4 · charter refreshed with a derived
progress line · R-129 registered and staged to Hestia · 2 upstream proposals filed · a 4-section
`phase_exit` ISS generated, round-trip-proven, and opened.

**In progress.** Nothing. All objectives closed.

**Blockers.** None. **Four decisions await the operator**, three of them surfaced in the ISS: the
`.adna/` template pre-push gate (composite), the v0.4.3 installer publish, ADR-056 at the P3 exit, and
⛩ O0b.

**Next up.** **P3.2** — the registry as data. Scope already shrank.

**Files touched.**

**Created** — this session file · `who/coordination/coord_2026_08_21_rosetta_to_hestia_forgejo_row_stale.md` ·
`how/backlog/idea_upstream_mission_ac_coherence_check.md` ·
`how/backlog/idea_upstream_verification_instrument_discipline.md` ·
`how/gates/haussmann_decade2_sitrep.html` (+ `.pending`)

**Modified** — campaign `CLAUDE.md` (conventions 13–15) ·
`missions/mission_haussmann_p4_4_ci_hardening.md` (F-f/F-g/F-h + F-b recurrence) ·
`campaign_haussmann.md` (P3.1/P3.5 rows, tier drift, derived progress line) ·
`evidence/claims/claim_register.md` (§12, R-129)

**Received (committed as delivered)** — Ilmarinen ×1 · Venus ×2

## Next Session Prompt

> You are Rosetta in ~/aDNA/aDNA.aDNA. HAUSSMANN Decade 2: P4.5a ✅ · P3.5 ✅ · P3.1 ✅ (deployed
> `tree=f053431`). **Next is P3.2** — execute
> `how/campaigns/campaign_haussmann/missions/mission_haussmann_p3_2_registry_json.md` with the campaign
> `CLAUDE.md`. **Read conventions 13–15 first** — 13 in particular: before you accept P3.2's budget,
> read its acceptance criteria against each other and confirm the stated method can satisfy the stated
> test, because the last two missions both shipped with an internally inconsistent spec. P3.2's scope
> already SHRANK (`Organization`+`sameAs` landed unremarked at P1.2 — see
> `evidence/machine_eye/machine_eye_delta_p2_6.md`); what remains is `Dataset` on the registry, the
> versioned JSON endpoint, schema-dts at build, and the three zero-JSON-LD pages. Honor pt19 — read
> `vaults.json`, never regenerate it. **Run the untracked-memo sweep at open AND at close**
> (`git ls-files --others --exclude-standard who/coordination/`): four peer memos arrived in two days
> and every one was found that way. Check `how/gates/haussmann_decade2_sitrep.output.json` — if it
> exists, the operator has ruled on the `.adna/` template gate and the v0.4.3 publish, and both need
> acting on. Open items: ADR-056 ratification at the P3 exit, ⛩ O0b, and R-129 staged to Hestia.

## Files touched

*(see SITREP above)*
