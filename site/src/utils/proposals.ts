/**
 * proposals.ts — the single source for the AEP surface (HAUSSMANN P3.5; ADR-055).
 *
 * The archive page, the per-proposal pages, and the machine index at /community/proposals.json
 * all read through here. That is the point: ADR-055 §7 requires the JSON index to be composed
 * from the same collection the pages render, so the two can never disagree. A second accessor
 * would reintroduce exactly the drift gate-14 exists to prevent.
 */
import { getCollection, type CollectionEntry } from 'astro:content';

export type Proposal = CollectionEntry<'proposals'>;

export type ProposalState =
  | 'draft'
  | 'review'
  | 'accepted'
  | 'final'
  | 'rejected'
  | 'withdrawn'
  | 'superseded'
  | 'dormant';

/**
 * ADR-055 §3. This array is the ONLY place the state machine is written down on the site — the
 * page renders it, the JSON index serves it, and the collection schema's enum is checked against
 * it by gate-37. Three copies of a state list is how a ninth state quietly appears in one of them.
 */
export const STATE_MACHINE: ReadonlyArray<{
  id: ProposalState;
  meaning: string;
  terminal: boolean;
}> = [
  { id: 'draft', meaning: 'Written down and numbered, not yet under review.', terminal: false },
  { id: 'review', meaning: 'Under public review; a sponsor is shepherding it.', terminal: false },
  { id: 'accepted', meaning: 'Decided yes; implementation may begin.', terminal: false },
  {
    id: 'final',
    meaning: 'Implemented and enforced by a check that fails when the rule is violated.',
    terminal: true,
  },
  { id: 'rejected', meaning: 'Reviewed and declined, with the reason recorded.', terminal: true },
  { id: 'withdrawn', meaning: 'Retracted by its author before a decision.', terminal: true },
  { id: 'superseded', meaning: 'Replaced by a later proposal, which is named on it.', terminal: true },
  { id: 'dormant', meaning: 'Nobody is shepherding it; revivable by anyone.', terminal: false },
];

/** By number, ascending. The numbering law (§2) makes this a stable, gapless ordering. */
export async function getSortedProposals(): Promise<Proposal[]> {
  const all = await getCollection('proposals');
  return all.sort((a, b) => a.data.number - b.data.number);
}

/** Occupancy per state, with every state present — including the zeroes, which are the honest part. */
export function statusCounts(proposals: Proposal[]): Record<ProposalState, number> {
  const counts = Object.fromEntries(STATE_MACHINE.map((s) => [s.id, 0])) as Record<
    ProposalState,
    number
  >;
  for (const p of proposals) counts[p.data.status as ProposalState] += 1;
  return counts;
}

/** Canonical route for a proposal. Lowercase and unpadded, per ADR-051's slug law. */
export function proposalPath(number: number): string {
  return `/community/proposals/aep-${number}/`;
}
