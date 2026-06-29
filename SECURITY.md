# Security Policy

aDNA is an open standard and a set of plain-Markdown, local-first knowledge vaults. The
project ships no runtime service by default — most of what lives here is documentation,
templates, and agent context. Even so, we take coordinated disclosure seriously. This policy
tells you how to report a vulnerability and what to expect.

## Scope

**In scope**

- The published standard and templates (the `.adna/` tree, skills, governance templates).
- The website tooling and build scripts in this repository (`site/`, `scripts/`).
- Any workflow this repository executes (CI workflows, the gate harness).

**Out of scope**

- Third-party tools the standard composes with (Obsidian, Claude Code, git hosts) — report
  those to their respective maintainers.
- Self-managed deployments and private vaults you run on your own infrastructure.

## Reporting a vulnerability

**Please report privately — do not open a public issue for a security problem.**

Preferred channel: open a private report through **GitHub Security Advisories** on the
canonical repository →
<https://github.com/aDNA-Network/aDNA/security/advisories/new>

If you cannot use GitHub Security Advisories, open a minimal public issue that says only
"security report — please open a private channel" (with no details), and a maintainer will
follow up privately.

Where you can, include: a description of the issue, the affected file / route / script, steps
to reproduce, and the impact you foresee.

## What to expect

- **Acknowledgement** — we aim to acknowledge a report within a few business days.
- **Assessment** — we confirm the issue, determine severity and affected versions, and keep
  you updated as we investigate.
- **Coordinated disclosure** — we agree a disclosure timeline with you and credit you in the
  advisory unless you prefer to remain anonymous.

## Securing your own vault

aDNA vaults are local-first by design and are not pushed to a remote unless you configure one.
Treat your vault's inventory, credentials index, and node identity as sensitive, and never
commit real secrets — the standard's credential-handling doctrine keeps secret *names*, never
secret *values*, in the vault.
