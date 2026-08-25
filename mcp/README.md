# adna-mcp-server

An [MCP](https://modelcontextprotocol.io) server over the aDNA standard's own documentation corpus
and vault registry at [adna.network](https://adna.network).

aDNA is an open standard for organising project knowledge so both humans and agents can navigate it.
This server is the standard's own machine door: it lets an agent search, read and query the aDNA
corpus through MCP rather than by scraping HTML.

## Install

```
claude mcp add adna -- npx -y adna-mcp-server
```

Any MCP client works — the server speaks **stdio**. Generic form:

```json
{
  "mcpServers": {
    "adna": { "command": "npx", "args": ["-y", "adna-mcp-server"] }
  }
}
```

Requires Node **20 or later**.

## Tools

| Tool | What it does |
|---|---|
| `search_docs` | Full-text search across the published corpus. Returns page paths, titles and snippets. |
| `fetch_page` | Fetch one page as markdown, via its `.md` twin. |
| `query_registry` | Query the vault registry — filter by slug, class, status or tier; optionally include declared relationships. |
| `lookup_spec_glossary` | Look up a canonical term in the glossary, or a section of the specification. |

## What this server does not do

Stated because a tool description that overclaims is worse than one that is missing:

- **There is no hosted endpoint.** This is a stdio server you run locally. It is not a URL.
- **It does not read live vault state.** adna.network publishes a build-time snapshot. Every response
  carries a provenance block with the snapshot's own dates and caveat, verbatim — a registry row is
  self-declared by its vault and reflects a single operator-run node.
- **It does not write anything**, to the site or anywhere else. Every tool is a read.
- **It has no coverage the published corpus does not have.** A page that adna.network does not
  publish as markdown is not reachable here.

## How it reads the site

Three public surfaces, fetched at call time and cached for the process lifetime:

| Surface | Used by |
|---|---|
| `/llms-full.txt` | `search_docs`, `lookup_spec_glossary` |
| `/<path>.md` | `fetch_page`, `lookup_spec_glossary` |
| `/api/registry.v1.json` | `query_registry` |

`query_registry` pins the **versioned** registry URL rather than the canonical `/vaults.json`. Both
serve identical bytes, but the versioned twin is the one under a stated deprecation contract: a
breaking change lands at a new versioned URL and the previous version keeps serving for at least 90
days.

Fetching at call time rather than bundling a snapshot is deliberate. A bundled corpus would answer
confidently with whatever was true on the day it was published, wearing this project's authority.

## Development

```
npm install
npm run build      # tsc → dist/
npm run smoke      # fresh-client handshake + one real call per tool, against the live site
npm run redtest    # mutate the world under the server; every assertion must fire
```

`smoke` spawns the built server as a separate process and drives it with the official MCP client —
the builder does not self-certify. Its green is not believed until `redtest` has demonstrated the
assertions able to fail: `redtest` stands up decoy origins that return 200 with the wrong
content-type, unparseable payloads and wrong-shaped JSON, and requires each guard to catch them. It
also runs the entire smoke suite against a decoy and requires it to exit non-zero.

Point either at a different origin with `ADNA_ORIGIN`.

## Provenance

Design of record: **ADR-056 §mcp** in the [aDNA vault](https://adna.network), authored at
HAUSSMANN P3.3. License: MIT.
