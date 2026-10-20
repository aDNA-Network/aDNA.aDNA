---
type: gate_record
gate_id: arcade_v2_6_gate
campaign_id: campaign_arcade
mission_id: mission_arcade_a4_1_standard_v2_6
title: "G4 — the standard v2.6 cut (RATIFIED 2026-10-20, R43)"
status: ratified   # ⛩ R43 2026-10-20 — all 15 lines signed as recommended; fold LOCAL (R41)
created: 2026-10-20
updated: 2026-10-20
last_edited_by: agent_rosetta
tags: [gate_record, arcade, g4, v2_6, standard, ratification]
---

# G4: the standard v2.6 cut (ratified 2026-10-20, R43)

> Authored at ARCADE A4.1 sitting 1 (2026-10-20). **This is an operator gate. Do NOT auto-advance.** Every ratification
> line below is blank until the operator signs it. Evidence and candidate texts for every row are in
> [[v2_6_cut_queue]] (`how/campaigns/campaign_arcade/artifacts/p4/v2_6_cut_queue.md`).
> To sign: answer "as recommended" or name the rows you change. Sitting 2 fills these lines verbatim and then folds.

```
╭─ campaign_arcade · rosetta ─────────────────────────── 🧬 aDNA / GATE G4 ─╮
│  standard v2.5 → v2.6   ·   md5 094a3266 (unchanged until signature)        │
├────────────────────────────────────────────────────────────────────────────┤
│  QUEUE      8 standard rows to sign  ·  7 hunks carried from G3             │
│             6 same-gate rows (specs · LIP registry · an annex)              │
│             1 Noether reply position set  ·  2 deferred  ·  5 records       │
│  MINOR?     every row argued against §15.4 — none un-conforms an instance   │
│  ⛔ HOLD    Q9 silent → fold + commit LOCAL only (R41); push, the A4.2      │
│             image release and the AEPs wait on Jake's yes                   │
├────────────────────────────────────────────────────────────────────────────┤
│  GATE       G4 — sign 15 lines  (operator; do NOT auto-advance)              │
╰────────────────────────────────────────────────────────────────────────────╯
```

## §0 What signing does, and what it does not

- **Does:** sitting 2 folds the signed rows into `what/docs/adna_standard.md` as **v2.6**. The four surfaces move together (§15.4). The cut is **committed locally**. The Noether reply is written `outbound_ready`.
- **Does not:** push, release the image (A4.2), file the AEPs, or name the company anywhere. Under **R41** those wait on Q9 (Jake's yes/no in the 10-19 Lannes memo §0) or the operator's explicit word.
- **Already signed:** aDNA.aDNA ADR-066 clauses 1–4 (G3, R34–R37). Their 7 hunks fold with the cut, and no line is owed here.

## §1 Standard text (folds into v2.6)

Each line reads: **recommendation** · alternatives. Ratification fields are left blank.

**A1 · aDNA.aDNA ADR-063 E-1 (§4.1 reads against §5.5).** *Recommended: accept as drafted.* · amend · decline (the contradiction stays, recorded).
- **Decision:** accept E-1 as drafted · **Ratified-by:** Stanley (operator), R43 "Signed as recommended" · **Date:** 2026-10-20 · **Status:** accepted

**A2 · aDNA.aDNA ADR-063 E-2 (§15.1 archive-don't-delete).** *Recommended: accept as drafted.* · decline (hunk 6 uses its alternate opening).
- **Decision:** accept E-2 as drafted · **Ratified-by:** Stanley (operator), R43 "Signed as recommended" · **Date:** 2026-10-20 · **Status:** accepted

**A4 · §19.6 ADR numbering + §6.4 `adr_`/`campaign_`/`coord_` (R10's words, T-1).** *Recommended: accept T-1.* · amend · rule only (pattern note, no standard text).
- **Decision:** accept T-1 (§19.6 numbering + §6.4 `adr_`/`campaign_`/`coord_`) · **Ratified-by:** Stanley (operator), R43 "Signed as recommended" · **Date:** 2026-10-20 · **Status:** accepted

**A5 · `token_estimate` SHOULD be `ceil(bytes/4)` (q9, T-2).** *Recommended: accept T-2.* · defer · decline.
- **Decision:** accept T-2 (`ceil(bytes/4)` SHOULD) · **Ratified-by:** Stanley (operator), R43 "Signed as recommended" · **Date:** 2026-10-20 · **Status:** accepted

**A6 · Graph Exchange cross-reference: §5.3 example + new §19.7 (T-3).** *Recommended: accept T-3.* · §5.3 example only · defer.
- **Decision:** accept T-3 (§5.3 example + §19.7 Graph Exchange) · **Ratified-by:** Stanley (operator), R43 "Signed as recommended" · **Date:** 2026-10-20 · **Status:** accepted

**A7 · The campaign layer as optional extension §19.8 (T-5 heads a–e).** *Recommended: accept as an optional extension (MAY/SHOULD); the normative core waits for v3.0.* · defer the whole item to v3.0 · decline.
- **Decision:** accept §19.8 Campaigns as an optional extension (heads a–e); normative core to v3.0 · **Ratified-by:** Stanley (operator), R43 "Signed as recommended" · **Date:** 2026-10-20 · **Status:** accepted

**A8 · Noether's M-A1 v2.6 SHOULD rider as aDNA.aDNA ADR-067 → §19.9 (T-6).** *Recommended: accept clauses 1, 2 and 4. Clause 3 (the v3.0 MUST) is logged for the major window. In force only after Part C's six answers are sent. AEP at publication.* · defer the whole package to its own sitting · decline.
- **Decision:** accept clauses 1, 2, 4 as aDNA.aDNA ADR-067 → §19.9; clause 3 logged for v3.0; in force after the C1 reply is sent; AEP at publication · **Ratified-by:** Stanley (operator), R43 "Signed as recommended" · **Date:** 2026-10-20 · **Status:** accepted

**A9a · A minimal `federation_ref` clause in §5.3 (q10, T-4).** *Recommended: accept T-4 (wrapper meaning only; "declared", never verified).* · defer · decline.
- **Decision:** accept T-4 (wrapper meaning only; declared, never verified) · **Ratified-by:** Stanley (operator), R43 "Signed as recommended" · **Date:** 2026-10-20 · **Status:** accepted

*Deferred (no line): A9b, a closed wrapper `status` vocabulary, goes to the v3.0 window or its own ADR. The evidence is in queue §1.*

## §2 Same gate, not standard text

**B1 · `spec_graph_exchange` §5.1 one-clause amendment (q2) → v0.2.** *Recommended: accept.* · decline.
- **Decision:** accept the §5.1 one-clause amendment → spec v0.2 · **Ratified-by:** Stanley (operator), R43 "Signed as recommended" · **Date:** 2026-10-20 · **Status:** accepted

**B2 · `spec_graph_exchange` L2-4 v1.1 wording, "real directory" (q3) → v0.2. The live count is 3, re-measured.** *Recommended: accept.* · keep the narrow reading.
- **Decision:** accept the L2-4 v1.1 wording → spec v0.2 · **Ratified-by:** Stanley (operator), R43 "Signed as recommended" · **Date:** 2026-10-20 · **Status:** accepted

**B3 · Derivability, an 11th compliance dimension (q4).** *Recommended: route to A4.2 (governance + `compliance_checker.py`, not the standard).* · decline.
- **Decision:** route to A4.2 (governance + `compliance_checker.py`) · **Ratified-by:** Stanley (operator), R43 "Signed as recommended" · **Date:** 2026-10-20 · **Status:** routed

**B4 · `lip_registry.md` (b) rows (q5).** *Recommended: ratify 0003 · 0005 · 0007; keep 0006 · 0008–0011 proposed until each steward confirms; record 0001 · 0002 · 0004 as predecessor-only.* · ratify all 11 as derived · hold all.
- **Decision:** ratify 0003 · 0005 · 0007; 0006 · 0008–0011 stay proposed; 0001 · 0002 · 0004 recorded predecessor-only · **Ratified-by:** Stanley (operator), R43 "Signed as recommended" · **Date:** 2026-10-20 · **Status:** accepted (partial, as recommended)

**B5 · `spec_platform_ecosystem` threat-model hook repoint to Terminal's idea file (q8) → v0.5.** *Recommended: accept.* · defer to the next natural bump.
- **Decision:** accept the hook repoint → spec v0.5 · **Ratified-by:** Stanley (operator), R43 "Signed as recommended" · **Date:** 2026-10-20 · **Status:** accepted

**B6 · aDNA.aDNA ADR-062 annex rider ii path → `LatticeProtocol.aDNA/what/schemas/` (Noether 10-10).** *Recommended: accept as a dated annex erratum, old path struck, not deleted.* · leave as is.
- **Decision:** accept as a dated annex erratum, old path struck · **Ratified-by:** Stanley (operator), R43 "Signed as recommended" · **Date:** 2026-10-20 · **Status:** accepted

## §3 Part C: the Noether reply's positions

**C1 · One reply to Noether answering 10-03 · 10-07 · 10-08 · 10-10 + the M-A1 six questions, with the positions in queue §4.** *Recommended: as tabled (per-item overrides welcome). Write it `outbound_ready` in sitting 2; the send is its own GO.* · hold the reply until A4.2.
- **Decision:** the reply's positions as tabled in queue §4; written outbound_ready, send its own GO · **Ratified-by:** Stanley (operator), R43 "Signed as recommended" · **Date:** 2026-10-20 · **Status:** accepted

## §3a Post-signature erratum (2026-10-20, before publication)

Not a new gate line, and the fifteen signatures above stand as written. Noether's post-fold read found §19.9 item 5
(row A8's fold) disagreeing with A8's own Q5 position. **Ruled at A4.2 sitting 2 (operator, AskUserQuestion):**
- **R51** · adopt Noether's clause (a pin file for a byte-for-byte copy; the check compares with the master's hash; item 4 reconciled).
- **R52** · restore item 2's "no normalization", and mark the roster as held by its steward graph and not publicly readable.

Folded as one `<!-- v2.6 errata … -->` header line. v2.6 stays v2.6 because it is unpublished. aDNA.aDNA ADR-067 carries a dated erratum note.

## §4 After signature (sitting 2, in order)

1. Re-run the open reads: Q9 · R38 trigger · md5 `094a3266`.
2. Fill these lines verbatim. Then fill aDNA.aDNA ADR-063's §7.7 rows, and draft aDNA.aDNA ADR-067 from the LP draft (credited) with its §7.7 row.
3. Fold in the queue §1 order, re-finding every anchor by `grep -nF`. Move the four surfaces together. Hand-qualify every ADR number.
4. Apply B1 · B2 · B5 · B6. Update the `lip_registry.md` rows. Record B3 in the A4.2 card.
5. Write the Noether reply `outbound_ready`.
6. Run the validator for zero drift and gitleaks, commit with explicit paths, and **do not push** while R41 holds.
