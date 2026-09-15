---
type: artifact
created: 2026-09-15
updated: 2026-09-15
last_edited_by: agent_codex
status: proposed
tags: [garnier, p1, authentication, research]
---

# Account-based options for the disposable P1 task

## Verified local route — later 2026-09-15 continuation

[D] Broker inventory C41 identifies the existing Claude session store with `access_pattern: claude_code_internal`. It does not register a portable subscription environment credential for a container. No C41 credential values or host login cache were read. The earlier host sign-in remains valid evidence at its recorded time; disposable subscription access is still unverified.

[D] A separate existing route is available: broker C69 (`INFERENCE_GATEWAY_TOKEN`) authorizes the node's local inference gateway. Its health endpoint and authenticated model listing responded. Qwen2.5-7B returned “OK” through both the local-chat tool and `/v1/messages`, and the fresh disposable container reached the gateway. Qwen3.6's separate 45-second probe timed out; that single probe does not establish that the model is generally unavailable. Receipt: `evidence/research/next_build_account_routes.json`.

[D/R] Claude Code 2.1.223 reached Qwen2.5-7B through this route. Its first task request was rejected because that model does not support the supplied thinking parameter. Setting `CLAUDE_CODE_DISABLE_THINKING=1` only in the disposable process enabled an actual response; the model then supplied invalid `Skill` arguments and fallback instructions. A response is not project creation. [Claude Code compatibility setting](https://code.claude.com/docs/en/env-vars). [[local_model_continuation]] carries the final task and file-check disposition.

[I] This is an observed local-provider route, not a Claude subscription run or evidence that every listed model supports the complete workflow. The broker credential entered an echo-disabled PTY and child environment; no token was placed in Docker configuration. Remaining runtime assistance and scan limitations belong with the run receipt.

## Correction to the blocker

[D] The observed failure was an insufficient-credit response from the selected Anthropic API account. It does not establish that the operator's Claude subscription is unavailable, or that an API top-up is necessary. Earlier funded-API-only wording in the continuation is too narrow. No successful project run is implied by this correction.

## Available approaches

[D] Safe CLI status check at 12:14 UTC: installed Claude Code reports `loggedIn: true`, `authMethod: claude.ai`, `apiProvider: firstParty`; installed Codex reports ChatGPT authentication. `ANTHROPIC_API_KEY` is present in the environment. Only these whitelisted fields were retained in `evidence/research/account_status.json`; no identity, token or raw status output was retained. This confirms host sign-in, not remaining quota or disposable-container access.

- [R/I] **Eligible Claude subscription — preferred for the existing test.** Claude Code supports Claude account authentication for Pro/Max and applicable Team/Enterprise access. An approved API environment key can override subscription sign-in. In a fresh disposable run, use a verified subscription route without the failing API override. This preserves the candidate's exact `claude` command. Current account entitlement, remaining usage and compatibility with the installed CLI have not been checked. [Claude authentication](https://code.claude.com/docs/en/authentication) · [Subscription use](https://support.claude.com/en/articles/11145838-use-claude-code-with-your-pro-or-max-plan).
- [R/I] **ChatGPT account through Codex — an additional path.** Official OpenAI documentation supports ChatGPT sign-in for subscription access and a separate API-key route for usage-based access. This can test aDNA with Codex, but replacing `claude` with `codex` changes the copied command. Record it as additional provider evidence; it does not silently close the current exact-command criterion. The host reports ChatGPT sign-in; OpenAI quota/billing was not checked. [OpenAI authentication](https://learn.chatgpt.com/docs/auth).
- [R/I] **Existing cloud-provider access.** Claude Code documents cloud-provider authentication such as Amazon Bedrock and Google Cloud; access, model configuration and billing must already be available and recorded. This is a configured alternative, not free capacity supplied by the chat account. [Claude authentication](https://code.claude.com/docs/en/authentication).
- [I] **Other agents or local models.** A separate compatibility test is possible after its actual runtime, model and command are specified. No compatibility or equivalence has been demonstrated here. Do not wrap an OpenAI credential as though it were an Anthropic API key.

## Concrete next execution procedure

[I] First verify a supported subscription route through the node broker and its approved credential store. If interactive account authorization is needed, the operator completes the provider's native sign-in flow. Do not extract or copy the host login cache, write a token to evidence or a container configuration, or print a setup-token result in chat. A normal CLI login may persist credentials; do not start it with unverified storage behavior under the node's no-credentials-on-disk rule. Account integration is not achieved merely because the host has the CLI installed.

[I] Once an authorized route is available: create a fresh disposable environment, supply prerequisites, omit conflicting API/provider overrides for the subscription-only process, verify the selected authentication method with secrets redacted, copy the exact public command, submit the exact first task, and run the project/triad/history plus fresh-session checks. Record assistance and provider choice. Keep the failed API attempt intact. Programmatic execution can have different plan limits from interactive use; verify the selected mode rather than assuming shared quota.

[D] This research pass performed no login, broker change, model request, purchase or credential transfer. Human reader records and DP3 remain separate requirements. The implementation work in this sitting was design-context ingestion; this note answers the account question and corrects the continuation.

Related: [[first_task_continuation]] · [[formative_reader_pack]] · [[garnier_quality_research]] · [[mission_garnier_p1_2_quickstart_voice]].
