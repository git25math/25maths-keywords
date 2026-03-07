#!/usr/bin/env python3
"""Rebuild syllabus-hhk.json with real learning objectives from teaching-units-all.json."""
import json, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TEACHING = '/Users/zhuxingzhe/Project/ExamBoard/25Maths-Dashboard/scripts/output/teaching-units-all.json'
SYLLABUS = os.path.join(ROOT, 'data', 'syllabus-hhk.json')

# Load sources
with open(TEACHING, 'r', encoding='utf-8') as f:
    units_data = json.load(f)['teachingUnits']

with open(SYLLABUS, 'r', encoding='utf-8') as f:
    syllabus = json.load(f)

# Build lookup: "u-y7-1" -> unit data
unit_map = {u['id']: u for u in units_data}

total = 0
for ch in syllabus['chapters']:
    year = ch['num']  # 7-11
    for i, sec in enumerate(ch['sections']):
        unit_id = f'u-y{year}-{i+1}'
        unit = unit_map.get(unit_id)
        if not unit:
            print(f'WARNING: no matching unit for {sec["id"]} -> {unit_id}', file=sys.stderr)
            continue

        # Build numbered core_content string from learning_objectives
        los = unit['learning_objectives']
        lines = [f'{j+1}. {lo}' for j, lo in enumerate(los)]
        sec['core_content'] = '\n'.join(lines)

        # Build sub_units array
        sub_units = []
        for su in unit['sub_units']:
            # Split bilingual title: "English Title 中文标题"
            title_full = su['title']
            # Find where Chinese starts (first CJK char)
            zh_start = -1
            for ci, c in enumerate(title_full):
                if '\u4e00' <= c <= '\u9fff':
                    zh_start = ci
                    break
            if zh_start > 0:
                title_en = title_full[:zh_start].strip()
                title_zh = title_full[zh_start:].strip()
            else:
                title_en = title_full.strip()
                title_zh = ''

            sub_units.append({
                'id': su['id'],
                'title': title_en,
                'title_zh': title_zh,
                'periods': su['periods']
            })
        sec['sub_units'] = sub_units
        total += 1

print(f'Rebuilt {total} sections with learning objectives')

# Write output
with open(SYLLABUS, 'w', encoding='utf-8') as f:
    json.dump(syllabus, f, ensure_ascii=False, indent=2)
    f.write('\n')

print(f'Written to {SYLLABUS}')
