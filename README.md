# The Field Guide

A static reference site built from `Self_Improvement_Master_Workbook.xlsx`: thirteen chapters
of evidence-graded social knowledge — what the science says, how to practice it, the myths to
drop, the exact words to say — plus a 12-week practice program and the bibliography behind it.

**Stack:** Astro 6, static output, no client-side JavaScript. Content lives in the workbook;
the site reads generated JSON.

## Working on it

```sh
npm install
npm run data      # re-parse data/Self_Improvement_Master_Workbook.xlsx → src/data/*.json
npm run dev       # local dev server
npm run check     # astro check (types + diagnostics)
npm run build     # production build into dist/
```

The parsed JSON in `src/data/` is committed, so the site builds without Python. Re-run
`npm run data` after editing the workbook (requires Python 3 with `openpyxl`).

## Layout

- `data/` — the source workbook
- `scripts/build_data.py` — workbook → `src/data/*.json`
- `src/data/` — site metadata (`site.ts`) + generated content JSON
- `src/components/` — Evidence-strength stamp, Entry renderer, chrome
- `src/pages/` — home (contents + weak-spot finder), `/chapters/[slug]`, `/plan`, `/sources`, `/about`, 404

For building yourself up and defending against manipulation — never for tearing anyone down.
