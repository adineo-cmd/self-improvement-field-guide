import tabs from './tabs.json';
import { eliteChapters } from './elite';

// The full guide: Part I chapters parsed from the workbook (tabs.json) followed
// by the hand-authored Part II chapters (the elite curriculum).
export const chapters: any[] = [...tabs, ...eliteChapters];

export function chapterName(t: any) {
  return t.sheet
    .toLowerCase()
    .split(' ')
    .map((w: string) => (w ? w.charAt(0).toUpperCase() + w.slice(1) : w))
    .join(' ');
}

export function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/&/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
