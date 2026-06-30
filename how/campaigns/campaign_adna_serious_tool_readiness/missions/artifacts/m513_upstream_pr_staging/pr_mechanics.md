---
type: artifact
created: 2026-06-10
updated: 2026-06-10
status: completed
last_edited_by: agent_stanley
tags: [artifact, pr]
---

# PR mechanics — throwaway-clone procedure (never touches `~/aDNA/.adna`)

> The vault-side "ready-to-PR diff" in the backlog idea was **sweep-mangled** (WS-5 rewrote its quoted
> `~/lattice` "before" strings) — so the diff is ALWAYS reconstructed from the upstream content itself,
> never copied from vault-side quotes. (Sweep-blind-spot lesson, 2026-06-10.)

```bash
gh auth status                                   # ScienceStanley; needs push or fork rights on LatticeProtocol/aDNA
git clone https://github.com/LatticeProtocol/aDNA.git /tmp/adna-pr-install-flow
cd /tmp/adna-pr-install-flow
git checkout -b docs/install-root-flip

# Apply the flips to the FIVE active-surface files only (verify each hunk against pr_description.md):
#   README.md · how/templates/template_workspace_claude.md · how/quests/quest_l1_onboarding.md
#   what/docs/projects_folder_pattern.md · what/docs/aDNA_overview.md
# ~/lattice → ~/aDNA  +  LatticeProtocol/adna → LatticeProtocol/aDNA  +  README back-compat note.

rg -n "~/lattice|LatticeProtocol/adna\b" <the five files>   # expect: only the back-compat mention
git diff --stat                                              # expect: exactly 5 files
git add -A && git commit
git push -u origin docs/install-root-flip                    # fork-push fallback: gh repo fork --remote
gh pr create --repo LatticeProtocol/aDNA --title "docs: flip new-user workspace default ~/lattice → ~/aDNA (+ canonical repo slug)" --body-file <pr_description body>
rm -rf /tmp/adna-pr-install-flow
```

Record the PR URL in: the session record · `STATE.md` Pending Manual Actions · the backlog idea's Disposition.
Local `.adna` picks the change up via `git -C ~/aDNA/.adna pull` **after merge** (normal update path).
