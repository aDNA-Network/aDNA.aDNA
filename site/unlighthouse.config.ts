/**
 * Unlighthouse sweep config (HAUSSMANN P4.4b B2a — AC3 as amended, signed 2026-08-26).
 *
 * The sweep runs over the CI-BUILT artifact (a local preview of dist/), whole-site:
 * dynamic sampling is OFF so every route is scanned, not a per-group sample — "whole-site"
 * is the claim, so the config must not silently narrow it. Desktop device, matching the
 * basis of the bars below.
 *
 * ⚠ BUDGET PROVENANCE (B2b, HELD — do not "fix" this here): the performance bar is
 * TRANSCRIBED from gate-19's standing BUDGET (tests/gates/gate-19-lighthouse-budget.spec.ts,
 * Perf ≥ 90), which is itself UN-SOURCED (campaign register row F-e; looser than WebForge's
 * content_static 95). Source-hashed provenance is B2b's owed work (AC4 ◐, gated on ⊳ D-E).
 * This file names the source it transcribed from and the date (2026-08-28), per convention
 * 4's interim clause — transcription reported as a gap, never as adoption.
 *
 * UNLIGHTHOUSE_BUDGET_PERF exists for the red-proof harness (V3 needs a run that goes red);
 * CI does not set it, so CI always runs the standing bar.
 *
 * ⚠ THROTTLING IS PINNED TO THE BAR'S OWN INSTRUMENT, measured not assumed (2026-08-28 `[D]`):
 * Unlighthouse's CI default applied MOBILE 4G network throttling (rttMs 150, 1.6 Mbps) to a
 * DESKTOP form factor — a hybrid no preset defines — and scored this site 0.78 where gate-19's
 * fixture instrument (`lighthouse --preset=desktop`: rttMs 40, 10.24 Mbps, 1× CPU) records
 * 0.95–1.0. A bar transcribed from one instrument and enforced by a stricter hybrid is two
 * instruments sharing one number. The block below is the desktop preset's own constants, so
 * the sweep measures on the same basis as the bar it enforces.
 */
export default {
  site: process.env.UNLIGHTHOUSE_SITE ?? 'http://localhost:4462',
  scanner: {
    device: 'desktop',
    throttle: true,
    dynamicSampling: false,
    sitemap: true,
  },
  lighthouseOptions: {
    throttling: {
      // lighthouse --preset=desktop (simulated) — the instrument gate-19's bars came from
      rttMs: 40,
      throughputKbps: 10 * 1024,
      cpuSlowdownMultiplier: 1,
      requestLatencyMs: 0,
      downloadThroughputKbps: 0,
      uploadThroughputKbps: 0,
    },
  },
  ci: {
    budget: {
      performance: Number(process.env.UNLIGHTHOUSE_BUDGET_PERF ?? 90),
    },
  },
};
