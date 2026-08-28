/**
 * Field Core-Web-Vitals instrument (HAUSSMANN P4.4b B1 — AC2 as replaced + amended).
 *
 * Collects the CWV field metrics via the `web-vitals` library and EMITS each one
 * in-page: pushed onto `window.__adnaVitals` and dispatched as an `adna:vital`
 * CustomEvent. Gate-50 asserts both halves (shipped AND emitting) — an inert
 * instrument fails the suite, per V4's amended limb ("shipped is not wired").
 *
 * Deliberately zero-network. Three standing constraints rule out any transport
 * from this module today: the CSP is `connect-src 'self'` (vercel.json) so no
 * off-origin beacon can pass; the site is `output: 'static'` so no same-origin
 * POST collector exists; and gate-42 fails the suite on any failed request
 * across every route. Delivery to a dashboard is the operator-gated half of
 * AC2 (Vercel Speed Insights enablement — named as owed on the mission's face,
 * never claimed here). When that lands, the transport is added at its own gate
 * and /privacy is updated BEFORE it ships, per that page's own commitment.
 *
 * Registration runs once per hard navigation (module scope). Soft navigations
 * via <ClientRouter /> do not re-register: web-vitals metrics are defined per
 * page load, and re-registering after a view transition double-reports.
 */
import { onCLS, onFCP, onINP, onLCP, onTTFB, type Metric } from 'web-vitals';

export interface AdnaVital {
  name: Metric['name'];
  value: number;
  rating: Metric['rating'];
  id: string;
}

declare global {
  interface Window {
    __adnaVitals?: AdnaVital[];
  }
}

function emit(metric: Metric): void {
  const vital: AdnaVital = {
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
    id: metric.id,
  };
  (window.__adnaVitals ??= []).push(vital);
  window.dispatchEvent(new CustomEvent<AdnaVital>('adna:vital', { detail: vital }));
}

// TTFB and FCP report promptly on load — they are what makes emission
// observable on a single page view (V4). LCP/CLS/INP finalize on
// visibility change / interaction and arrive when they arrive.
onTTFB(emit);
onFCP(emit);
onLCP(emit);
onCLS(emit);
onINP(emit);
