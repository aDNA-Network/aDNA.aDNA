/**
 * network_state.ts — every number the site states about its own scale, derived in one place.
 *
 * HAUSSMANN P1.2. The home page, /about, and /state-of-the-network all narrate the same facts about
 * how big this network is and who runs it. Before this module they would each have derived (or
 * worse, typed) their own copy of those numbers, which is the KW-14 defect class: a page that
 * narrates a count it did not compute drifts silently the moment the registry regenerates.
 *
 * One module, imported by all three, so the surfaces CANNOT disagree — the discipline enforced
 * structurally instead of by review. Nothing here is a literal; every value traces to a committed
 * data file, and the accompanying gate-20 manifest rows make that machine-checkable.
 *
 * pt19: this module READS the registry. It never writes it. Registry data is Hestia-owned and
 * operator-gated; a wrong number here is fixed at the projection, or asked for by memo — never by
 * editing vaults.json.
 */
import vaultsData from './vaults.json';
import subnetworksData from './subnetworks.json';
import verifiedLinks from './verified_links.json';
import { statusLabel } from '../utils/vaultLabels';

interface VaultRecord {
  vault_slug: string;
  status?: string | null;
  github_url?: string | null;
}
interface EdgeRecord {
  source: string;
  target: string;
  type?: string;
}

const vaults = vaultsData.vaults as VaultRecord[];
const edges = vaultsData.edges as EdgeRecord[];

/** Total vaults in the registry. */
export const vaultCount: number = vaultsData.vault_count;

/** Declared relationships between vaults. */
export const edgeCount: number = edges.length;

/** Vaults touched by at least one declared relationship. */
export const connectedCount: number = new Set(edges.flatMap((e) => [e.source, e.target])).size;

/**
 * Vaults that declare no relationship at all. Shown, not hidden: /vaults/graph already calls this
 * "honest topology, not missing data", and the state-of-the-network page keeps that register.
 */
export const unconnectedCount: number = vaultCount - connectedCount;

/**
 * Vault counts by public stage label, highest first.
 *
 * MUST route through `statusLabel()`. The registry carries a `genesis_stub` status whose raw token
 * is internal vocabulary — gate-27 hard-fails on it, including inside attributes. `statusLabel()`
 * folds it into `genesis`, which is why the public genesis figure is one higher than the raw
 * `status: 'genesis'` count.
 */
export const statusCounts: { label: string; count: number }[] = Object.entries(
  vaults.reduce<Record<string, number>>((acc, v) => {
    const label = statusLabel(v.status);
    acc[label] = (acc[label] || 0) + 1;
    return acc;
  }, {}),
).map(([label, count]) => ({ label, count }))
  .sort((a, b) => b.count - a.count);

/** Vaults recording a code repository at all — whether or not it resolves publicly. */
export const recordedRepoCount: number = vaults.filter((v) => v.github_url).length;

/**
 * External URLs that have passed the probe gate (P1.1 / claim register R-90).
 * Empty is the healthy, honest state — a URL cannot render on a vault page until a human has opened
 * it from outside, logged out, and recorded the date.
 */
export const verifiedUrlCount: number = (verifiedLinks.verified_urls as unknown[]).length;

interface SubnetworkRecord {
  id: string;
  display_name: string;
  public_url?: string | null;
}
const subnetworks = subnetworksData.subnetworks as SubnetworkRecord[];

/** Subnetworks declared on the network. */
export const subnetworkCount: number = subnetworks.length;

/** Subnetworks with a public property a reader can open today. */
export const subnetworksWithPublicUrl: number = subnetworks.filter((s) => s.public_url).length;

/** The day the registry was last regenerated from the node inventory. */
export const registryGeneratedAt: string = vaultsData.generated_at;

/**
 * The day the subnetwork records were last synced.
 * Deliberately surfaced even though it lags the registry by weeks — the gap is an honest signal
 * about the pace of the thing being described, and hiding it would be the defect, not the gap.
 */
export const subnetworksGeneratedAt: string = subnetworksData.generated_at;
