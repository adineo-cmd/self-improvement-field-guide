const modules = import.meta.glob('./cases/*.ts', { eager: true });

export interface CaseBlock {
  case: string;
  situations: { if: string; then: string }[];
}

export interface ChapterCases {
  entries?: Record<number, CaseBlock>;
  sections?: Record<string, CaseBlock>;
}

// Authored case-study enrichment, one file per chapter slug.
// Part I chapters use `sections` (keyed by section title); Part II uses `entries` (keyed by entry num).
export const caseFiles: Record<string, ChapterCases> = {};
for (const [path, mod] of Object.entries(modules)) {
  const slug = path.split('/').pop()!.replace('.ts', '');
  caseFiles[slug] = (mod as any).cases;
}
