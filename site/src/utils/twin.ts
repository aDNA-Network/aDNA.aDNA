/**
 * twin.ts — the markdown-twin emission lock (HAUSSMANN P3.1, ADR-056 clause 1).
 *
 * One module owns what a twin *is*, so the three derivation tiers cannot drift into three
 * different notions of one. Tiers A/B render through `[...path].md.ts`; tier C renders
 * post-build through `scripts/emit_bespoke_twins.mjs`, which imports the pointer block from
 * here rather than restating it.
 *
 * WHY TWINS EXIST (machine_eye B4, re-probed live 2026-08-19):
 *   - `.md` twins            10/10 → 404
 *   - `Accept: text/markdown` → byte-identical body, literal same ETag
 *   - the string "llms"       → 0 occurrences across every page HTML probed
 * For a site whose thesis is agent-navigable context, those read as evidence against the
 * product claim, not as missing features. D10 sat at 3/5 and could not reach anchor 4.
 *
 * THE NO-DRIFT LAW: a twin is *derived*, never authored. Tier A is the source the HTML
 * renders from; tiers B and C derive from the same projection / the built artifact. An
 * authored twin would be a second home for the page's prose — it would pass on the day it
 * was written and rot silently after. This campaign already has a live instance of exactly
 * that failure (P2.5: a fabricated transcript cut from one page while the identical false
 * mechanism stayed asserted twice in the surrounding prose).
 *
 * This is pattern A1, owed upstream to WebForge — which has neither twins nor negotiation.
 */

/**
 * The build-time snapshot day, stamped once per build.
 *
 * Deliberately NOT written into `twin_manifest.json`: a date in a committed artifact churns
 * the tree every day the build runs, and this repo has already been bitten by exactly that
 * (`build_vaults_data.mjs` date-only churn after UTC midnight — the standing instruction is
 * "restore, don't commit"). The date belongs in emitted output only.
 *
 * WHY IT SAYS "(UTC)". This is UTC, and the first build to render it did so at 22:18 local on
 * 2026-08-20 — printing `2026-08-21`. Both halves of that are defensible (the campaign's deploy
 * records are UTC too), but an undated-zone date on a line whose whole job is honesty invites
 * the reader to compare it against the changelog's local dates and conclude one of them is
 * wrong. Naming the zone costs five characters and removes the ambiguity instead of picking a
 * side and hoping nobody checks.
 */
export const BUILD_DAY = `${new Date().toISOString().slice(0, 10)} (UTC)`;

export const SITE_ORIGIN_FALLBACK = 'https://adna.network';

/**
 * The pointer block that front-loads every twin (MCP's verified convention: a machine surface
 * that advertises the index rather than assuming the reader already knows it).
 *
 * Visible text, not an HTML comment. Nothing about a machine surface should be hidden from the
 * human who opens it — and P0.5 stripped this site's HTML comments for that same reason.
 *
 * Line 3 is WebForge FR-N/N2's snapshot-honesty line (`what/lib/gates/emit_llms.mjs`), which the
 * pattern register flags as absent from this site's `llms.txt`. It earns its place on its own
 * terms too: `llms.txt` narrates a live-sounding vault count and a reader had no way to date it.
 */
export function pointerBlock(canonicalPath: string, origin: string = SITE_ORIGIN_FALLBACK): string {
  const base = origin.replace(/\/$/, '');
  const canonical = `${base}${canonicalPath}`;
  return [
    `> Markdown twin of ${canonical}`,
    `> Index: ${base}/llms.txt · Full corpus: ${base}/llms-full.txt`,
    `> State is a build-time snapshot generated ${BUILD_DAY}; nothing here is live.`,
    '',
  ].join('\n');
}

/** Every component tag that may appear in a collection body, and how a twin renders it. */
const COMPONENT_HANDLERS: Record<string, 'mermaid' | 'describe'> = {
  MermaidDiagram: 'mermaid',
  TriadDiagram: 'describe',
  ConvergenceFunnel: 'describe',
  Image: 'describe',
};

const DESCRIBE_LABEL: Record<string, string> = {
  TriadDiagram: 'Diagram: the three legs of the aDNA triad (what/ · how/ · who/).',
  ConvergenceFunnel: 'Diagram: the convergence funnel (campaign → mission → objective → session).',
  Image: 'Image',
};

/**
 * MDX body → plain markdown.
 *
 * Measured before it was written, not assumed: only 15 of 113 collection files carry components,
 * and every one is a diagram or image embed. So this is a narrow transform over a known set, not
 * a general MDX compiler — and it is written to FAIL LOUDLY on anything outside that set.
 *
 * The loud throw is deliberate (convention 7's own lesson): P2.1 lost a registry lookup because a
 * miss was `.filter(Boolean)`-ed into a silent drop. A component this doesn't know about would
 * otherwise vanish from the twin while the HTML still rendered it — a drift channel opened by the
 * very function written to prevent one.
 */
export function mdxBodyToMarkdown(body: string, sourceId: string): string {
  let out = body;

  // Frontmatter is Astro's, not the vault's — the twin carries the rendered content, and the
  // pointer block supplies provenance. (The publishing pipeline's frontmatter strip is a known,
  // self-documented property of this site; see /how/publishing/vault-to-site.)
  out = out.replace(/^---\n[\s\S]*?\n---\n/, '');

  // Component imports are machinery, not content.
  out = out.replace(/^import\s+.*?from\s+['"].*?['"];?\s*$/gm, '');

  // <MermaidDiagram chart={`…`} caption="…" /> → a fenced mermaid block.
  // The diagram SOURCE survives as diagram source, which is strictly better markdown than the
  // rendered SVG would be — an agent can read the topology instead of parsing path geometry.
  out = out.replace(
    /<MermaidDiagram\s+chart=\{`([\s\S]*?)`\}([^>]*?)\/>/g,
    (_m, chart: string, rest: string) => {
      const caption = /caption="([^"]*)"/.exec(rest)?.[1];
      return ['```mermaid', chart.trim(), '```', caption ? `\n*${caption}*` : ''].join('\n');
    },
  );

  // Remaining known components degrade to a labelled line. State absence; never invent content
  // for it — the rule emit_llms.mjs applies to its own missing rows.
  for (const [tag, mode] of Object.entries(COMPONENT_HANDLERS)) {
    if (mode !== 'describe') continue;
    out = out.replace(new RegExp(`<${tag}\\b([^>]*?)\\/>`, 'g'), (_m, attrs: string) => {
      const caption = /caption="([^"]*)"/.exec(attrs)?.[1];
      const alt = /alt="([^"]*)"/.exec(attrs)?.[1];
      const label = DESCRIBE_LABEL[tag] ?? `Embedded ${tag}`;
      return `*[${caption ?? alt ?? label}]*`;
    });
  }

  // Fail loudly on anything unhandled, but never mistake ordinary markdown for a component:
  // fenced code and inline code legitimately contain capitalised tags (this site documents
  // JSX and HTML), so both are masked out before the check.
  const masked = out.replace(/```[\s\S]*?```/g, '').replace(/`[^`\n]*`/g, '');
  const unknown = [...masked.matchAll(/<([A-Z][A-Za-z0-9]*)\b/g)]
    .map((m) => m[1])
    .filter((tag) => !(tag in COMPONENT_HANDLERS));
  if (unknown.length) {
    throw new Error(
      `twin: unhandled MDX component(s) in ${sourceId}: ${[...new Set(unknown)].join(', ')}. ` +
        'Add a handler in src/utils/twin.ts — a component with no handler would vanish from the ' +
        'twin while the HTML still renders it, which is the drift channel twins exist to prevent.',
    );
  }

  return out.replace(/\n{3,}/g, '\n\n').trim();
}

/** Assemble a finished twin: pointer block, then title, then body. */
export function renderTwin(opts: {
  canonicalPath: string;
  title: string;
  body: string;
  origin?: string;
}): string {
  const { canonicalPath, title, body, origin } = opts;
  const heading = /^#\s/m.test(body.split('\n').slice(0, 3).join('\n')) ? '' : `# ${title}\n\n`;
  return `${pointerBlock(canonicalPath, origin)}\n${heading}${body}\n`;
}

/** `/learn/concepts/triad/` → `learn/concepts/triad` — the param a `[...path].md.ts` route wants. */
export function pathToTwinParam(canonicalPath: string): string {
  return canonicalPath.replace(/^\//, '').replace(/\/$/, '');
}
