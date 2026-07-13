/**
 * palette.ts — canonical JS-side mirror of the design palette.
 *
 * `tokens.css` is the source of truth for everything rendered via CSS (it owns the
 * `--color-*` custom properties). But some consumers need literal hex at runtime and
 * CANNOT read a CSS variable — notably the Mermaid client renderer (`themeVariables`
 * is a plain JS config object, resolved before the SVG exists). This module is the
 * single place those JS consumers import their colors from, so the Tokyo-Night hex
 * can't drift copy-by-copy across components (Storyweave P5 M5.2 / B11 — kill scattered
 * hex; the "Mermaid" target).
 *
 * Keep in lockstep with tokens.css: the `tokyoNight` values below mirror the `.dark`
 * block; the brand values mirror branding.css. If a token changes there, change it here.
 */

/** Tokyo-Night surface/foreground ramp — mirrors tokens.css `.dark`. */
export const tokyoNight = {
  base: '#1a1b26', //        --color-bg (dark)
  surface: '#24283b', //     --color-surface (dark)
  surfaceAlt: '#414868', //  elevated secondary surface
  text: '#c0caf5', //        --color-text (dark)
  cyan: '#7dcfff', //        edge / link accent
  purple: '#9d7cd8', //      brand primary (dark)
} as const;

/** Brand accents for the light-mode diagram theme — mirrors branding.css. */
export const brand = {
  primary: '#6d4bb8', //        --brand-primary-dark (AA on white)
  primaryBorder: '#58399c', //  deeper border
  line: '#1f6f9e', //           light-mode edge
  amber: '#e0a84c', //          secondary accent
  offWhite: '#f5f5f5', //       light tertiary surface
  white: '#ffffff',
} as const;

/**
 * Mermaid `themeVariables` for each mode, composed from the palette above. The values
 * are byte-identical to the previous inline literals in MermaidDiagram.astro — this is
 * a single-source refactor, not a recolor (verify with gate-4 axe + a visual diff).
 */
export const mermaidThemeVariables = {
  dark: {
    primaryColor: tokyoNight.surface,
    primaryTextColor: tokyoNight.text,
    primaryBorderColor: tokyoNight.purple,
    lineColor: tokyoNight.cyan,
    secondaryColor: tokyoNight.surfaceAlt,
    tertiaryColor: tokyoNight.base,
    // Pin a dark Tokyo-Night edge-label background so light edge-label text clears AA
    // (mermaid's default #585858 gives only 4.43:1). E4 cycle 154.
    edgeLabelBackground: tokyoNight.base,
  },
  light: {
    primaryColor: brand.primary,
    primaryTextColor: brand.white,
    primaryBorderColor: brand.primaryBorder,
    lineColor: brand.line,
    secondaryColor: brand.amber,
    tertiaryColor: brand.offWhite,
  },
} as const;
