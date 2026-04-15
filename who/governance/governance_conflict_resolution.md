---
type: governance
created: 2026-04-14
updated: 2026-04-14
status: active
last_edited_by: agent_stanley
tags: [governance, community, conflict-resolution]
---

# Conflict Resolution

## Purpose

Define how disagreements, disputes, and behavioral issues are handled within the aDNA community. This process extends the Challenge Phase from the [[who/governance/governance_agent_protocol|agent protocol]] — the same principle (argue to the right answer, then commit) applies to human-to-human interactions, not just agent-to-human ones.

## Guiding Principles

1. **Assume good intent.** Most conflicts arise from miscommunication, not malice. Start with questions, not accusations.
2. **Address behavior, not identity.** "This contribution doesn't meet the quality gates" is feedback. "You don't belong here" is a [[who/governance/governance_code_of_conduct|code of conduct]] violation.
3. **Resolve at the lowest level possible.** Most disagreements resolve with a direct conversation. Escalation is available but should not be the default.
4. **Document outcomes, not drama.** When a resolution is reached, record the decision and rationale. The emotional arc is not the artifact.

## Escalation Ladder

### Level 1: Direct Conversation

The parties involved discuss the issue directly — in a PR thread, issue comment, or private message. Most technical disagreements (naming conventions, architecture choices, contribution scope) resolve here.

**Resolution**: The parties agree on an outcome. If agreement cannot be reached, escalate to Level 2.

### Level 2: Mediated Discussion

A project maintainer facilitates a structured conversation between the parties. The mediator does not decide — they ensure both sides are heard and guide toward a resolution.

**Process**:
1. Each party states their position and reasoning (written, in an issue or document)
2. Mediator identifies common ground and points of disagreement
3. Parties work toward a resolution with mediator guidance
4. Resolution is recorded as a decision in the relevant issue or PR

**Resolution**: Mediator-guided agreement. If the parties remain deadlocked, escalate to Level 3.

### Level 3: Maintainer Decision

When mediation fails, the project maintainer makes a binding decision. The maintainer reviews the positions, consults the aDNA standard and community values, and decides.

**Process**:
1. Maintainer reviews all prior discussion
2. Maintainer may request additional input from other maintainers or the community
3. Maintainer publishes a written decision with rationale
4. Decision is final for the specific issue

This mirrors the [[who/governance/governance_agent_protocol|agent protocol]]'s operator override: after the challenge phase, the human with authority decides and the team commits.

### Level 4: Code of Conduct Enforcement

For behavioral issues (not technical disagreements), enforcement follows the [[who/governance/governance_code_of_conduct|Code of Conduct]] process: private conversation → warning → temporary suspension → permanent ban.

## Scope

This process applies to:
- Technical disagreements about contributions, architecture, or standard interpretation
- Interpersonal conflicts between community participants
- Disputes about contribution credit or attribution
- Disagreements about side-quest methodology or results

This process does NOT apply to:
- Agent-to-human disagreements during active sessions (handled by the [[who/governance/governance_agent_protocol|agent protocol]] Challenge Phase)
- Security vulnerabilities (report privately to maintainers)

## Anti-Patterns

| Anti-Pattern | Why It Fails | Instead |
|-------------|-------------|---------|
| Silent withdrawal | Issue festers, contributor leaves | Raise the issue explicitly at Level 1 |
| Public shaming | Damages trust, chills participation | Address behavior privately first |
| Appeal-shopping | Undermines resolution authority | Follow the escalation ladder in order |
| Relitigating decided issues | Prevents forward progress | Accept Level 3 decisions; propose new evidence if circumstances change |

## Related

- [[who/governance/governance_agent_protocol|Agent Protocol]] — the partnership model and Challenge Phase this process extends
- [[who/governance/governance_code_of_conduct|Code of Conduct]] — behavioral standards and enforcement
- [[who/governance/governance_contribution_standards|Contribution Standards]] — what good contributions look like
