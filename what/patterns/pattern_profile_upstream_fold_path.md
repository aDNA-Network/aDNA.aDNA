---
type: pattern
created: 2026-10-20
updated: 2026-10-20
status: proposed          # graduated at ARCADE A5.2 (R66) from the campaign's A3.3 process note; becomes accepted only on the operator's §7.7
pattern_category: federation
applies_to: [decisions, coordination, backlog, profiles, standard_versions]
graduated_from: how/campaigns/campaign_arcade/artifacts/p3/lister_fold_path.md   # the A3.3 process note (proposed at G3); ephemeral detail stripped
instances:
  - "aDNA.aDNA (this vault) — the first profile's four profile-seam candidates took steps 3 · 5 · 6 · 7 early: read and dispositioned at ARCADE A3.1, decided as aDNA.aDNA ADR-066 (accepted 2026-10-19), filed publicly as AEP-4, folded into standard v2.6 and released in template v8.13 (2026-10-20). Steps 1–2 and 8–9 wait on the steward's own upstream AAR."
last_edited_by: agent_rosetta
tags: [pattern, federation, profile, upstream, fold_path, aep, adr, version_cut, memos_not_edits]
---

# pattern_profile_upstream_fold_path — how a profile's findings become standard text

> **Plain version first.** A *profile* is a specialised version of aDNA that a team builds for its own field. The medical one is the first. Building it, that team will find things the general standard should change. This pattern is the route those findings take back into the standard. Every step has one owner. The two teams never edit each other's files: each sends notes, and each changes only its own work.

## Problem

A profile lives in its steward's graph, often in another estate (another owner, another repository, another governance chain). The steward knows things the standard needs. Without a defined route, two failures are typical:

1. **The edit across the fence.** Someone "just fixes" the other side's file. The change then has no owner who ratified it, and the other side's history gains a write it never chose.
2. **The silent fold.** A finding slides into the standard's text without a decision record. A reader of the standard cannot tell what was decided, by whom, or why. A profile can then become a fork while everyone believes it is still a profile.

## Solution

Nine steps, each with one owner. Only two boundaries are ever crossed, and both are crossed by memo.

| # | Step | Owner | Boundary |
|---|---|---|---|
| 1 | **Upstream AAR** in the steward's graph: candidates with IDs, the standard section each touches, a proposed disposition | steward | none |
| 2 | **Memo** to the standard's desk naming the AAR's path and commit. The AAR stays where it is | steward (the send is theirs) | **estate → standard**, by memo |
| 3 | **Read at the object.** One disposition per candidate: accept-now · next minor · next major · decline (with reason) | standard's desk | none |
| 4 | **Private proposal** per accepted cluster, as a backlog idea citing the candidate IDs and the steward's commit | standard's desk | none |
| 5 | **ADR** for the standard's text, `proposed`, with one ratification line per independent clause. The deltas go in a diff artifact; the standard file stays byte-unchanged | standard's desk authors · operator ratifies | none |
| 6 | **AEP** for the public record when the change is normative (it alters what a conforming vault must do). The AEP cites the implementing ADR and never re-badges it | standard's desk authors · a human sponsor · operator ratifies | **public** |
| 7 | **Version cut.** Fold the ratified deltas into the standard, bump the version, move every version surface together, release to the image | standard's desk · operator GO per outward act | **public** |
| 8 | **Reply memo** to the steward with each candidate's final disposition and the version that carries it. The steward re-pins | standard's desk (send GO) · steward (re-pin) | **standard → estate**, by memo |
| 9 | **Listing**, on the steward's release: a row in the profiles list with its own ratification line | standard's desk, at the steward's request · operator ratifies | none |

**Invariants**:
- Neither side writes the other's files.
- No candidate becomes standard text without passing steps 5 and 7.
- **Listing (9) never implies folding (5–7), and folding never implies listing.** A profile can be listed and change nothing upstream; a finding can be folded before the profile ships.

**For a developer.** Steps 2 and 8 run under the coordination drop-box doctrine (`what/doctrine/doctrine_coordination_dropbox.md`): stamp before the copy, read the recipient's HEAD in the same command, and treat the recipient's commit as the receipt. Step 6 is [[adr_055_proposal_process|aDNA.aDNA ADR-055]] §5. Step 7 is standard §15.4 plus [[skill_template_release]]. Step 9's list lives in `what/docs/profiles/AGENTS.md`, and each listed profile is described by [[template_profile_spec]]. The seam that makes a profile a profile and not a fork is [[adr_066_conformance_profiles_release_integrity|aDNA.aDNA ADR-066]] (the profile declaration plus the release-integrity hash manifest).

## When to Use

- A team maintaining a profile, an extension or a domain overlay has findings about the base standard.
- Any upstream proposal that originates **in a graph the standard's desk does not own**. If it originates inside the standard's own vault, [[skill_upstream_contribution]] (backlog idea → gate) is the shorter route.
- **Do not use it for** a profile's own content: that is the steward's, end to end.

## Example (from this vault)

This vault is the standard's desk, so its own directories show the pattern at work:
- **Step 3**: the first profile's Phase-1 candidates were read and dispositioned one by one in a campaign artifact (`how/campaigns/campaign_arcade/artifacts/p3/`): 10 accept-now · 14 next minor · 1 next major · 0 declined.
- **Step 5**: four of them, the profile seam itself, were decided as [[adr_066_conformance_profiles_release_integrity|aDNA.aDNA ADR-066]], with four independent ratification lines, all accepted on 2026-10-19.
- **Step 6**: the change is normative, so it was filed publicly as AEP-4 at publication. AEP-4 records that the decision came before the filing, rather than pretending otherwise.
- **Step 7**: the deltas were folded into `what/docs/adna_standard.md` at v2.6 and released in template v8.13.
- **Step 9**: `what/docs/profiles/AGENTS.md` ships with the profile list **empty** on purpose. Nothing is listed until a steward releases, so steps 7 and 9 are visibly separate.

The fold path was itself found to have a gap while it was being written: step 6 had not been taken for aDNA.aDNA ADR-066. The gap was recorded as "AEP owed" and closed at publication. That record is how the pattern earns its place: a step that was skipped could be seen to have been skipped.

## Anti-Pattern

| What | Why it breaks |
|---|---|
| Editing the steward's candidates file to "mark them done" | A write across the estate boundary; the steward's history gains a change it never chose. Reply by memo (step 8) |
| Folding a candidate straight into the standard because it is obviously right | No decision record; the version bump carries an unexplained change. Every fold passes an ADR (step 5) |
| Treating a listing as a ratification of the profile's content | Listing says the profile exists and declares its seam; it does not make the profile's text part of the standard |
| Filing the AEP before publication is cleared | The AEP is a public surface; holds on public naming apply to it as to any other public page |

## Related

[[adr_066_conformance_profiles_release_integrity]] · [[adr_055_proposal_process]] · [[template_profile_spec]] · [[skill_upstream_contribution]] · [[pattern_federation_readiness]] · [[pattern_coordination_countersign]] · [[glossary_commercial_home]]
