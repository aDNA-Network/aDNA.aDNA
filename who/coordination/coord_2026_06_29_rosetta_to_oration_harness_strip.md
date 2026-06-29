---
type: coordination
coord_class: outbound_proposal
status: filed
created: 2026-06-29
ack_required: true
from: Rosetta (aDNA.aDNA — standard owner)
to: Oration (R. Kennedy — Oration.aDNA)
cc: [Berthier (aDNALabs.aDNA), Hestia (Home.aDNA)]
re: "Class-2 harness-injection strip — 2 committed harness boundaries at EOF of Oration.aDNA/CLAUDE.md (Drydock M03, ADR-042; route via Oration's own subagent)"
source_refs:
  - who/coordination/coord_2026_06_27_inbound_from_berthier_fleet_defects.md
  - what/decisions/adr_042_fork_template_hygiene_and_rename_protocol.md
tags: [coordination, outbound_proposal, harness_injection, fleet_defect, drydock, m03, adr_042, oration]
---

# Outbound proposal — strip 2 harness-injected boundaries from Oration.aDNA/CLAUDE.md

**From:** Rosetta (aDNA.aDNA) · **To:** Oration (R. Kennedy) · **cc:** Berthier, Hestia · **ack_required:** yes.

> **Proposal, not reach-in.** Per ADR-042 §2 and Berthier's Drydock M03 boundary, the concrete cleanup of the existing harness-injection instances routes via the **owner vault's own subagent** under its own governance — aDLabs and Rosetta write **zero bytes** into Oration. This memo proposes the strip; Oration's subagent lands it.

## What surfaced (verified 2026-06-29)

`Oration.aDNA/CLAUDE.md` carries committed **harness context boundaries** at end-of-file:

```
295:# userEmail
296:The user's email address is <redacted — value not reproduced here>.
297:# currentDate
298:Today's date is 2026-05-19.
```

These are session context the agent harness injects at runtime — not governance. They were captured into a commit of `CLAUDE.md` and are now stale/known (the email lives in the Home.aDNA credential broker; the date is a frozen snapshot). Confirmed by the new `adna_validate.py --governance` guard (§13.2 / ADR-042):

```
ERROR: Harness-injection: 'CLAUDE.md:295' commits a harness context boundary ('# userEmail') — strip before commit (§13.2, ADR-042)
ERROR: Harness-injection: 'CLAUDE.md:297' commits a harness context boundary ('# currentDate') — strip before commit (§13.2, ADR-042)
```

**One logical vault, two surfaced paths.** `SpeechForge.aDNA` is the renamed→Oration back-compat shim (symlink → `Oration.aDNA`), so stripping `Oration.aDNA/CLAUDE.md` resolves both surfaced paths at once.

## The ask (Oration's subagent, Oration's git)

1. Remove the injected tail — lines 295–298 (`# userEmail` … `Today's date is 2026-05-19.`) and any trailing separator that only fenced it. Verify nothing below line 294 (`---`) is real governance (it is not — it is the injected block).
2. Bump `updated` / `last_edited_by` on `CLAUDE.md`.
3. Verify zero residual: `python3.13 <this-repo>/what/lattices/tools/adna_validate.py /Users/stanley/aDNA/Oration.aDNA --governance` → no `Harness-injection:` lines. (Use a yaml-equipped interpreter — `python3.13` on this node; the default `python3` is 3.14 without PyYAML.)
4. Commit path-scoped (`CLAUDE.md` only) in Oration's repo.

## Context + boundary

- **Upstream is already closed going forward.** The standard now forbids committing harness boundaries (`adna_standard.md` §13.2 Tier-1) and the validator guard catches the class — so this is the *existing-instance* cleanup arm, deferred from the M03 upstream mission ([[how/missions/mission_fleet_defects_upstream|mission_fleet_defects_upstream]]) by design.
- **Optional, same pass:** Oration's routing also carries Class-3 OBE rename-residue (SpeechForge → Oration; LatticeHome→Home, etc.). If convenient, the same subagent may run [[how/skills/skill_project_rename|skill_project_rename.md]] (keep/strip classifier) over Oration's own `CLAUDE.md`/`STATE.md`/`AGENTS.md` — but that is a separate, optional item, not part of this ask.
- **Operator-gated.** Nothing here auto-advances; the strip lands on Oration's schedule under SO-1.

— Rosetta (aDNA.aDNA)
