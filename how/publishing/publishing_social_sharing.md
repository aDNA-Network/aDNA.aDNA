---
type: publishing
created: 2026-04-16
updated: 2026-04-16
status: active
target: social
last_edited_by: agent_stanley
tags: [publishing, social, og-images, sharing]
---

# publishing_social_sharing

## Overview

When someone shares an aDNA.aDNA page on social media, a branded preview image and description appear automatically. This document describes the OG (Open Graph) image system, section-aware selection logic, and how to configure social previews for the vault and its GitHub repository.

## OG Image System

Five branded OG images (1200x630px) cover the site's content sections. Each uses the aDNA teal gradient palette with decorative DNA helix motifs and section-specific titles.

| Image | File | Sections Served |
|-------|------|----------------|
| Default | `site/public/images/og-default.png` | Homepage, get-started, changelog, fallback |
| Learn | `site/public/images/og-learn.png` | Concepts, tutorials, comparisons (`/learn/*`) |
| Patterns | `site/public/images/og-patterns.png` | Pattern library (`/patterns/*`) |
| Reference | `site/public/images/og-reference.png` | Specification, glossary (`/reference/*`, `/glossary/*`) |
| Community | `site/public/images/og-community.png` | Community roles, adopter personas (`/community/*`, `/adopters/*`) |

### Generation

Images are generated from SVG templates using `@resvg/resvg-js`:

```bash
node site/scripts/generate-og-images.mjs
```

The script renders SVG with the aDNA brand gradient (`#0A4F52` to `#071E1F`), accent circles, and section-specific text. Output lands in `site/public/images/`. Re-run after changing branding.

### Section-Aware Selection

The `SEOHead.astro` component selects the correct OG image based on the current page path:

| Path Prefix | OG Image |
|-------------|----------|
| `/learn/` | og-learn.png |
| `/patterns/` | og-patterns.png |
| `/reference/`, `/glossary/` | og-reference.png |
| `/community/`, `/adopters/` | og-community.png |
| Everything else | og-default.png |

Every page also gets an auto-generated `<meta name="description">` from the first paragraph of its content (truncated to 155 characters by the [[publishing_vault_to_site|transform pipeline]]).

## GitHub Repository Preview

The repository at `github.com/LatticeProtocol/aDNA.aDNA` can display a social preview image when linked from external sites. Upload `og-default.png` at:

> Repository Settings > General > Social preview > Edit > Upload an image

This is a manual one-time step.

## Sharing Checklist

When publishing new content to the site:

- [ ] Verify the page's URL falls under a recognized path prefix for OG selection
- [ ] Check the auto-generated meta description is meaningful (first paragraph matters)
- [ ] Test social preview with a link validator (e.g., OpenGraph.xyz or Twitter Card Validator)
- [ ] For new site sections, add a path rule to `SEOHead.astro` and consider a new OG image

## Self-Reference

This OG system was built during Phase 4.5 (M23) and demonstrates a practical application of the [[concept_dual_audience|Dual Audience]] principle: developers see the implementation details (SVG templates, path-based selection, component architecture), while non-developers see branded previews that build trust before they even visit the site. The OG images themselves carry the aDNA visual identity into every social platform where a page link appears.

## Related

- [[publishing_vault_to_site|Vault-to-Site Pipeline]] — the build pipeline that includes description generation
- [[publishing_content_mapping|Content Mapping]] — the section architecture that OG selection mirrors
- [[concept_dual_audience|Dual Audience]] — the principle this system demonstrates in practice
- [[pattern_fair_envelope|FAIR Envelope]] — metadata best practices that extend to social metadata
