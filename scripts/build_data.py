#!/usr/bin/env python3
"""Parse the Self Improvement Master Workbook into static JSON for the Astro site.

Reads data/Self_Improvement_Master_Workbook.xlsx, writes JSON into src/data/.
Run via `npm run data`. The JSON is committed so the site builds without Python.
"""

import json
import os

from openpyxl import load_workbook

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'data', 'Self_Improvement_Master_Workbook.xlsx')
OUT = os.path.join(ROOT, 'src', 'data')

KNOWLEDGE_COLS = ['science', 'studies', 'strength', 'practice', 'myths', 'drill', 'resource']
SCENARIO_COLS = ['mistake', 'instead', 'words', 'why', 'strength', 'drill', 'resource']
CULTURE_COLS = ['science', 'know', 'story', 'words', 'resource']

# tab name -> (slug, kind, column layout, one-line description for the chapter list)
TABS = [
    ('MIND', 'mind', 'knowledge', KNOWLEDGE_COLS, 'Emotional intelligence, habits, self-talk, and the psychology of self-change.'),
    ('PEOPLE', 'people', 'knowledge', KNOWLEDGE_COLS, 'Friendship, conversation, charisma, and the science of connection.'),
    ('POWER', 'power', 'knowledge', KNOWLEDGE_COLS, 'Influence, negotiation, networking, and leadership — used fairly.'),
    ('SHADOW', 'shadow', 'knowledge', KNOWLEDGE_COLS, 'Human nature, manipulation defense, and the hard situations nobody warns you about.'),
    ('BODY & SIGNALS', 'body-signals', 'knowledge', KNOWLEDGE_COLS, 'Body language truth, looks, strength, and sleep.'),
    ('BRAIN', 'brain', 'knowledge', KNOWLEDGE_COLS, 'Intelligence, memory, learning, and thinking tools.'),
    ('CULTURE', 'culture', 'knowledge', CULTURE_COLS, 'History and art as conversation capital: one good story beats ten facts.'),
    ('SCENARIOS', 'scenarios', 'scenario', SCENARIO_COLS, 'Everyday social playbooks: first impressions, small talk, groups, work, conflict, apologies.'),
    ('DATING', 'dating', 'scenario', SCENARIO_COLS, 'Attraction, approaches, texting, first dates, flirting, consent, and rejection.'),
    ('VOICE & SPEECH', 'voice-speech', 'scenario', SCENARIO_COLS, 'Clear speech, articulation, tone, storytelling, and public speaking.'),
    ('PRESENCE & STYLE', 'presence-style', 'scenario', SCENARIO_COLS, 'Confidence, charisma, gestures, grooming, colour, outfits, photos, and details.'),
    ('SELF & RESILIENCE', 'self-resilience', 'scenario', SCENARIO_COLS, 'Self-compassion, handling blame, boundaries, conflict repair, anxiety, and values.'),
    ('SOCIAL AWARENESS', 'social-awareness', 'scenario', SCENARIO_COLS, 'Reading the room, norms, workplace politics, friendship, humour, and family context.'),
]

SMALL = {'a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'in', 'of', 'on', 'or', 'the', 'to', 'vs'}


def smart_title(t):
    if not t.isupper():
        return t
    words = t.title().split()
    return ' '.join(w if i == 0 or w.lower() not in SMALL else w.lower() for i, w in enumerate(words))


def rows_of(wb, name):
    ws = wb[name]
    out = []
    for row in ws.iter_rows(values_only=True):
        vals = ['' if v is None else str(v).strip() for v in row]
        while vals and not vals[-1]:
            vals.pop()
        out.append(vals)
    while out and not out[-1]:
        out.pop()
    return out


def parse_tab(rows, cols):
    """Rows: [#, Topic, ...cols]. ALL-CAPS single-cell rows are section dividers."""
    entries, section = [], ''
    width = len(cols)
    for r in rows[4:]:
        if not r or not any(r):
            continue
        cells = (r + [''] * (width + 2))[:width + 2]
        first = cells[0].strip()
        rest = [c for c in cells[1:] if c]
        if not first.isdigit() and not rest:
            section = smart_title(first)
            continue
        if not first.isdigit():
            continue
        e = {'num': int(first), 'title': smart_title(cells[1].strip()), 'section': section}
        for key, val in zip(cols, cells[2:]):
            e[key] = val
        entries.append(e)
    return entries


def main():
    os.makedirs(OUT, exist_ok=True)
    wb = load_workbook(SRC, data_only=True)

    tabs = []
    for name, slug, kind, cols, desc in TABS:
        rows = rows_of(wb, name)
        entries = parse_tab(rows, cols)
        tabs.append({
            'slug': slug,
            'sheet': name,
            'kind': kind,
            'description': desc,
            'hint': rows[2][1] if len(rows) > 2 and len(rows[2]) > 1 else '',
            'columns': cols,
            'entries': entries,
        })
    json.dump(tabs, open(os.path.join(OUT, 'tabs.json'), 'w'), indent=1)

    # --- ACTION_PLAN -------------------------------------------------------
    ap = rows_of(wb, 'ACTION_PLAN')
    plan = {'intro': [ap[1][0], ap[2][0]], 'phases': [], 'microHabits': [],
            'missionLadder': [], 'tracker': [], 'review': []}
    cur_phase = None
    section = ''
    header_cols = []  # column indices of the active sub-table, taken from its header row

    def cells_at(r, cols):
        return [r[c] if c < len(r) else '' for c in cols]

    for i, r in enumerate(ap[4:], start=4):
        if not r or not any(r):
            continue
        head = r[0]
        if head == '12-WEEK PROGRAM':
            continue
        if head.startswith('PHASE'):
            cur_phase = {'title': head.split(': ', 1)[-1].title(), 'range': head.split(': ')[0].split('- ', 1)[-1], 'weeks': []}
            plan['phases'].append(cur_phase)
            continue
        if head in ('MICRO-HABIT MENU', 'MISSION LADDER', '30-DAY TRACKER', 'WEEKLY REVIEW'):
            section = {'MICRO-HABIT MENU': 'habits', 'MISSION LADDER': 'ladder',
                       '30-DAY TRACKER': 'tracker', 'WEEKLY REVIEW': 'review'}[head]
            header_cols = []
            continue
        if '#' in r and (not head or head == '#'):
            # header row of a sub-table: remember the '#' column and each labelled column
            num_col = next((j for j, c in enumerate(r) if c == '#'), 0)
            header_cols = [num_col] + [j for j, c in enumerate(r) if c and j != num_col]
            continue
        if section == 'tracker':
            name = next((c for c in r if c), '')
            if name and name != 'Habit' and not name.startswith('Tip:'):
                plan['tracker'].append(name)
            continue
        if not header_cols:
            continue
        f = cells_at(r, header_cols)
        if not f[0].isdigit():
            continue
        if section == 'habits':
            plan['microHabits'].append({'n': int(f[0]), 'area': f[1], 'habit': f[2] if len(f) > 2 else ''})
        elif section == 'ladder':
            plan['missionLadder'].append({'n': int(f[0]), 'level': f[1] if len(f) > 1 else '',
                                          'mission': f[2] if len(f) > 2 else '', 'why': f[3] if len(f) > 3 else ''})
        elif section == 'review':
            plan['review'].append({'n': int(f[0]), 'q': f[1] if len(f) > 1 else ''})
        elif cur_phase is not None and section == '':
            cur_phase['weeks'].append({
                'num': int(f[0]),
                'week': f[1] if len(f) > 1 else '',
                'theme': f[2] if len(f) > 2 else '',
                'drill': f[3] if len(f) > 3 else '',
                'mission': f[4] if len(f) > 4 else '',
                'body': f[5] if len(f) > 5 else '',
                'brain': f[6] if len(f) > 6 else '',
                'culture': f[7] if len(f) > 7 else '',
            })
    json.dump(plan, open(os.path.join(OUT, 'plan.json'), 'w'), indent=1)

    # --- SOURCES -----------------------------------------------------------
    src = rows_of(wb, 'SOURCES')
    sources = {'studies': [], 'books': [], 'resources': [], 'readingOrder': []}
    section = ''
    for r in src:
        if not r or not any(r):
            continue
        head = r[0]
        if head.startswith('STUDIES'):
            section = 'studies'
            continue
        if head.startswith('BOOKS'):
            section = 'books'
            continue
        if head.startswith('FREE RESOURCES'):
            section = 'resources'
            continue
        if head.startswith('SUGGESTED READING'):
            section = 'order'
            continue
        cells = r[1:] if not head else r
        if section == 'studies' and len(cells) >= 3 and cells[0] and cells[0].lower() != 'study (author, year)':
            sources['studies'].append({'name': cells[0], 'finding': cells[1], 'usedIn': cells[2]})
        elif section == 'books' and len(cells) >= 2 and cells[0] and cells[0].lower() != 'title':
            sources['books'].append({'title': cells[0], 'author': cells[1] if len(cells) > 1 else '',
                                     'why': cells[2] if len(cells) > 2 else '', 'area': cells[3] if len(cells) > 3 else ''})
        elif section == 'resources' and len(cells) >= 2 and cells[0] and cells[0].lower() != 'resource':
            sources['resources'].append({'name': cells[0], 'type': cells[1] if len(cells) > 1 else '',
                                         'bestFor': cells[2] if len(cells) > 2 else ''})
        elif section == 'order':
            n = next((int(c) for c in r[:3] if c.isdigit()), None)
            if n is not None:
                after = [c for c in r if c and not c.isdigit()]
                sources['readingOrder'].append({'n': n, 'text': ' '.join(after)})
    json.dump(sources, open(os.path.join(OUT, 'sources.json'), 'w'), indent=1)

    # --- README ------------------------------------------------------------
    rm = rows_of(wb, 'README')
    readme = {'intro': [], 'blocks': [], 'contents': []}
    section = ''
    for r in rm:
        if not r or not any(r):
            continue
        head = r[0]
        if head == 'README':
            continue
        if head == 'CONTENTS':
            section = 'contents'
            continue
        if section == 'contents':
            cells = [c for c in r if c]
            if len(cells) >= 2 and cells[0].lower() != 'tab':
                readme['contents'].append({'tab': cells[0], 'purpose': cells[1]})
            continue
        title = r[1] if len(r) > 1 else ''
        text = r[2] if len(r) > 2 else ''
        if head and len(r) == 1 and not head.isupper():
            readme['intro'].append(head)
        elif title and not text:
            readme['blocks'].append({'title': smart_title(title), 'text': ''})
        elif text and readme['blocks']:
            readme['blocks'][-1]['text'] = (readme['blocks'][-1]['text'] + ' ' + text).strip()
    json.dump(readme, open(os.path.join(OUT, 'readme.json'), 'w'), indent=1)

    counts = {
        'tabs': [(t['slug'], len(t['entries'])) for t in tabs],
        'entries': sum(len(t['entries']) for t in tabs),
        'phases': len(plan['phases']),
        'weeks': sum(len(p['weeks']) for p in plan['phases']),
        'microHabits': len(plan['microHabits']),
        'studies': len(sources['studies']),
        'books': len(sources['books']),
        'resources': len(sources['resources']),
        'readingOrder': len(sources['readingOrder']),
    }
    print(json.dumps(counts, indent=1))


if __name__ == '__main__':
    main()
