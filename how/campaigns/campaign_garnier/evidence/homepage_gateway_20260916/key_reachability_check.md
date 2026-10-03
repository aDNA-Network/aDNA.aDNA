---
type: evidence
created: 2026-09-24
updated: 2026-10-03
status: active
last_edited_by: agent_rosetta
tags: [garnier, p1, formative, stimulus, reachability]
---
# Scorer key-reachability check — formative stimulus `6487444` (port 4466)

[D] Required by [[formative_stimulus_repin_20260916]] §Answer-key impact before any formative
session: *"the scorers must confirm … that the frozen key's expected answers remain reachable within
the three-minute window on the new stimulus — if any expected answer is no longer reachable, that is a
finding against the candidate, not a reason to loosen the key."*

⚠ **Provenance of this record.** [[formative_reader_pack]] (edited 2026-09-17) cited this file as
already existing. It did not (`find` → 0 on 2026-09-24, not gitignored). The check was run and this
record written on **2026-09-24** by `session_stanley_20260924_083249_garnier_reorientation`. The
pack's sentence was true only from this date.

## Stimulus identity, re-verified before the walk

Checkout `~/.cache/garnier-homepage-20260916` at `6487444a365c9c89fabfd61a1ac1eff66efa9354`, `git status`
clean. Preview restarted (`npx astro preview --port 4466 --host 127.0.0.1` from the checkout's `site/`,
existing `dist/`). All **15 routes** in `proposed_formative_stimulus_6487444.json` fetched and
sha256-compared: **15 MATCH / 0 MISMATCH** (method: response-body sha256, same as `frozen_check_close.txt`).

[D] **Re-verified 2026-10-03T21:40Z** (`session_stanley_20261003_213535_garnier_rulings_and_lanes`): the preview was found DOWN at the 2026-10-03 SITREP (connection refused) and restarted with the same command from the same untouched `dist/`; checkout clean at `6487444`; **15 MATCH / 0 MISMATCH** again. ⚠ The preview is a foreground `node` process, not a service — it dies with the shell that started it, so it must be restarted (and these 15 hashes re-checked) immediately before each reader sitting, never assumed up from a prior record.

## Method

Rendered HTML of each stimulus route flattened to text with link targets preserved
(`[href=…]`), then each expected answer in [[reader_protocol]] §Answer key located by reading, with
the click path from `/` recorded. Surface = **rendered text**, which is the surface the key's verb
("find", "locate", "identify") is about (HAUSSMANN convention 17 amendment). "Reachable" means the
artifact is on `/` or behind a labeled path a reader can follow inside three minutes.

## Walk

| Key item | Where it lives on `6487444` | Path from `/` | Reachable |
|---|---|---|---|
| **3-second, all classes** — reusable structure/standard for an agent's context + a present action | `/` hero: *"an open standard for organizing a project's files. Three folders and plain Markdown give people and AI agents a shared map."* + four present-tense paths (Understand / Start a project / Explore the work / Participate) | on-page | ✅ |
| **Engineer 1** — exact initial runnable command or local file example | `/get-started`: `git clone https://github.com/aDNA-Network/aDNA.git ~/aDNA && cd ~/aDNA && claude` (shown twice, with a "what this command does" gloss) | `/` → *Start a project* (1 click) | ✅ — **moved off `/`** as the repin predicted |
| **Engineer 2** — its prerequisite | `/get-started` §Prerequisites: *Git, and Claude Code installed and authenticated…; POSIX shell* | 1 click | ✅ |
| **Engineer 3** — where context/governance lives | `/` *"This site uses the same structure — what/ Knowledge and decisions · how/ Plans and procedures · who/ People and roles"*; `/get-started` *"CLAUDE.md at the root … the router your agent reads first"*, project tree with `CLAUDE.md # the project's own governance` | on-page + 1 click | ✅ |
| **Funder 1** — the named steward | `/` *"stewarded today by Stanley Bishop"* (linked to `/about/`); `/community` *"Stanley Bishop holds decision authority today"* | on-page | ✅ |
| **Funder 2** — something available vs a stated plan | `/vaults` stage labels (**61 planned · 10 in use · 6 genesis**, derived from the rendered page); `/state-of-the-network` *"what actually runs … and what is only planned — each with the date it was last checked"* | `/` → *Explore the work* (1 click); footer → State of the network (1 click) | ✅ |
| **Funder 3** — present contribution / contact ask | `/community`: participation ladder; *"report a confusing instruction, or propose a change"*; *"goes through the repository's issue templates"*; `/get-started` → community contribution standards | `/` → *Participate* (1 click) | ✅ |
| **Scientist 1** — the mechanism | `/learn/what-is-adna`: *"AI agents have the same trouble people do: finding the right file. With no shape to follow, an agent reads the wrong thing…"* + the triad; `/` hero (shared map) | `/` → *Understand aDNA* (1 click) | ✅ |
| **Scientist 2** — source / lineage | GitHub link in the header nav (`aDNA-Network/aDNA`); `/get-started/what-your-agent-reads` source tour with links pinned to release `v8.11` | 1 click (nav) / 2 clicks (Start a project → source tour) | ✅ |
| **Scientist 3** — what evaluation is available or explicitly absent | `/state-of-the-network`: *"The graph on the home page … is not evidence of adoption, and this site will not present it as any"*; *"No vault page carries an externally verified public URL … None has passed yet"*; every "What runs" row dated. **No route on the stimulus uses the words "benchmark" or "evaluation" of the mechanism** — nothing is claimed. | footer → State of the network (1 click) | ✅ with caveat — see below |

## Result

**All expected answers are reachable within the window; no finding against the candidate.** The
engineer's command moved from on-page to one click behind *Start a project*, exactly as the repin's
§Answer-key impact stated.

⚠ **Caveat carried to DP3 (not a key change):** the scientist key accepts *"explicitly absent"*
evaluation. The stimulus is honest by making **no** evaluation claim, and `/state-of-the-network`
explicitly disclaims adoption evidence — but no sentence states that no evaluation of the mechanism
itself exists. A scorer should accept a participant who reports *"no evaluation is offered"* as
having identified an absence; whether the site should say so in words is a P2 lineage/evaluation
framing question ([[reader_review]] already routes synthetic-scientist concerns there). Recorded
here so a scorer disagreement on this item is adjudicated against a written note, not improvised.

⚠ **Divergence to record for DP3 (G4):** the vault `site/` on `vitrine/design` now withholds the
Wilhelm Foundation subnetwork cards from `/commons` and `/about` (G4 option (b), fired 2026-09-24
under the 2026-09-17 ruling). The formative stimulus `6487444` **still renders them** — the checkout
is untouched by design. Formative readers therefore see two cards the site will not publish until the
ADR-010 co-sign lands. This affects no key item (the funder's steward answer is Stanley Bishop, not a
subnetwork) and is a local preview, not a public surface; it is stated so nobody attributes a reader's
mention of the Foundation to a surface the site no longer shows.

Related: [[formative_stimulus_repin_20260916]] · [[formative_reader_pack]] · [[reader_protocol]].
