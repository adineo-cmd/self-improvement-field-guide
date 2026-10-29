import tabs from '../data/tabs.json';
import plan from '../data/plan.json';
import sources from '../data/sources.json';
import readme from '../data/readme.json';

interface Doc {
  kind: string;
  title: string;
  description: string;
  url: string;
  keywords?: string;
}

const chapterName = (sheet: string) =>
  sheet
    .toLowerCase()
    .split(' ')
    .map((w: string) => (w ? w.charAt(0).toUpperCase() + w.slice(1) : w))
    .join(' ');

const documents: Doc[] = [
  { kind: 'Guide', title: 'Contents', description: 'Thirteen chapters, the weak-spot finder, and the evidence legend.', url: '/' },
  { kind: 'Guide', title: 'The 12-week plan', description: plan.intro[0] ?? 'Three phases, twelve weeks, one five-minute daily drill.', url: '/plan', keywords: 'program weeks drill habits tracker' },
  { kind: 'Guide', title: 'Sources', description: `${sources.studies.length} studies, the books worth your time, and free resources.`, url: '/sources', keywords: 'bibliography studies books' },
  { kind: 'Guide', title: 'How to use this guide', description: readme.intro[0] ?? 'What the guide is and what the evidence labels mean.', url: '/about', keywords: 'readme legend evidence' },
  { kind: 'Guide', title: 'The daily drill', description: "Today's practice, drawn from the whole guide.", url: '/drill', keywords: 'practice today exercise' },
  { kind: 'Guide', title: 'Myth or fact?', description: 'Test the guide: separate the myths from what the studies actually support.', url: '/quiz', keywords: 'quiz game flashcards myths' },
];

for (const t of tabs) {
  const name = chapterName(t.sheet);
  documents.push({ kind: 'Chapter', title: name, description: t.description, url: `/chapters/${t.slug}`, keywords: t.kind });
  for (const e of t.entries as any[]) {
    const anchor = `/chapters/${t.slug}#e${e.num}`;
    const first = (e.science ?? e.mistake ?? e.know ?? '').split(/(?<=[.!?])\s/)[0] ?? '';
    documents.push({
      kind: t.kind === 'scenario' ? 'Playbook' : 'Entry',
      title: e.title,
      description: first.length > 180 ? first.slice(0, 177) + '…' : first,
      url: anchor,
      keywords: `${e.strength ?? ''} ${e.section}`,
    });
  }
}

export const GET = () =>
  new Response(JSON.stringify({ documents }), {
    headers: { 'Content-Type': 'application/json' },
  });
