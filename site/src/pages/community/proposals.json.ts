import type { APIRoute } from 'astro';
import { getSortedProposals, STATE_MACHINE, statusCounts, proposalPath } from '../../utils/proposals';

/**
 * /community/proposals.json — the machine index (HAUSSMANN P3.5 O1; ADR-055 §7).
 *
 * Composed from the SAME collection the pages render (via utils/proposals.ts), so the index and
 * the archive cannot disagree. Advertised in /llms.txt, the site's canonical machine entry point.
 *
 * `schema_version` is here because this is a published interface: an agent that pinned to it needs
 * to know when the shape changes. Absent fields are `null` rather than omitted — an omitted key and
 * a key whose value is genuinely unknown are different facts, and collapsing them is how a consumer
 * ends up inferring a sponsor that does not exist.
 */
export const GET: APIRoute = async ({ site }) => {
  const base = (path: string) => (site ? new URL(path, site).href : `https://adna.network${path}`);
  const proposals = await getSortedProposals();
  const counts = statusCounts(proposals);

  const body = {
    schema_version: '1.0',
    process: {
      name: 'aDNA Enhancement Proposal',
      abbreviation: 'AEP',
      constitution: base(proposalPath(1)),
      archive: base('/community/proposals/'),
      governed_by: 'ADR-055',
      // ADR-055 §5 + §8 — the policy an agent most needs to know before filing, and the
      // measurement we have NOT taken. Both stated; the second is null, not omitted.
      agent_authorship: 'permitted, disclosure required',
      ratification: 'human only',
      median_review_days: null,
    },
    states: STATE_MACHINE.map((s) => ({
      id: s.id,
      meaning: s.meaning,
      terminal: s.terminal,
      count: counts[s.id],
    })),
    count: proposals.length,
    proposals: proposals.map((p) => ({
      number: p.data.number,
      title: p.data.proposal_title,
      status: p.data.status,
      url: base(proposalPath(p.data.number)),
      authors: p.data.authors,
      sponsor: p.data.sponsor,
      authored_by_agent: p.data.authored_by_agent,
      ratified_by: p.data.ratified_by,
      ratified_date: p.data.ratified_date ? p.data.ratified_date.toISOString().slice(0, 10) : null,
      conformance_check: p.data.conformance_check,
      supersedes: p.data.supersedes,
      superseded_by: p.data.superseded_by,
      implements_adr: p.data.implements_adr,
      discussion_url: p.data.discussion_url,
      created: p.data.created.toISOString().slice(0, 10),
    })),
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
