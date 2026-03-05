#!/usr/bin/env python3
"""Generate 25Maths Curriculum level entries for levels.js from y7-y11-unit-vocabulary.json."""

import json
import re
import sys

SOURCE = '/Users/zhuxingzhe/Project/ExamBoard/25Maths-Dashboard/scripts/output/y7-y11-unit-vocabulary.json'

# Chinese translations for Y11 units that have English-only titles
ZH_TRANSLATIONS = {
    'Differentiation': '微分',
    'Estimation & Bounds': '估算与界限',
    'Functions': '函数',
    'Further Trigonometry': '进阶三角学',
    'Graphs of Trigonometric Functions': '三角函数图像',
    'Quadratic Sequences': '二次数列',
    'Regions & Inequalities': '区域与不等式',
    'Set Notation & Venn Diagrams': '集合符号与韦恩图',
    'Simultaneous Equations': '联立方程组',
    'Statistics and Probability': '统计与概率',
    'Vectors': '向量',
}


def parse_title(raw_title):
    """Parse 'English Title 中文标题' or 'English Title' into (en, zh)."""
    # Try to split at the boundary between ASCII and CJK characters
    m = re.match(r'^(.+?)\s*([\u4e00-\u9fff\u3000-\u303f].*)$', raw_title.strip())
    if m:
        en = m.group(1).strip()
        zh = m.group(2).strip()
        return en, zh
    # Pure English — look up translation
    en = raw_title.strip()
    zh = ZH_TRANSLATIONS.get(en, '')
    if not zh:
        # Try partial match
        for k, v in ZH_TRANSLATIONS.items():
            if k in en or en in k:
                zh = v
                break
    return en, zh


def make_slug(year_num, en_title):
    """Generate slug like '25m-y7-circle'."""
    # Lowercase, keep alphanumeric and spaces, then replace spaces with hyphens
    slug_part = en_title.lower()
    # Remove special chars except spaces and hyphens
    slug_part = re.sub(r"[^a-z0-9\s-]", '', slug_part)
    # Collapse whitespace
    slug_part = re.sub(r'\s+', '-', slug_part.strip())
    # Truncate to reasonable length
    if len(slug_part) > 30:
        slug_part = slug_part[:30].rstrip('-')
    return f'25m-y{year_num}-{slug_part}'


def chunk_vocab(vocab, max_size=10):
    """Split vocabulary into chunks of max_size."""
    chunks = []
    for i in range(0, len(vocab), max_size):
        chunks.append(vocab[i:i + max_size])
    return chunks


def timer_and_combo(word_count):
    """Determine timer and comboBonus based on word count."""
    if word_count >= 9:
        return 70, 2
    elif word_count >= 7:
        return 80, 3
    else:
        return 90, 3


def escape_js_string(s):
    """Escape string for JS single-quoted string."""
    return s.replace('\\', '\\\\').replace("'", "\\'")


def format_level(level):
    """Format a level dict as a JS object literal."""
    v = level['vocabulary']
    vocab_parts = []
    for i, word in enumerate(v):
        en = escape_js_string(word['english'])
        zh = escape_js_string(word['chinese'])
        vocab_parts.append(
            f'    {{id:"{i}",type:"word",content:"{en}"}},{{id:"{i}",type:"def",content:"{zh}"}}'
        )
    vocab_str = ',\n'.join(vocab_parts)

    title = escape_js_string(level['title'])
    title_zh = escape_js_string(level['titleZh'])

    return (
        f"{{\n"
        f"  board: '25m', slug: '{level['slug']}', category: '{level['category']}', "
        f"title: '{title}', titleZh: '{title_zh}', "
        f"timer: {level['timer']}, comboBonus: {level['comboBonus']},\n"
        f"  vocabulary: [\n{vocab_str}\n  ]\n"
        f"}}"
    )


def main():
    with open(SOURCE) as f:
        data = json.load(f)

    levels = []
    year_stats = {}

    # Track per-year unit index to preserve source order
    year_unit_counters = {}
    for unit in data['units']:
        year_group = unit['year_group']  # e.g. "Year 7"
        year_num = int(year_group.split()[-1])
        unit_index = year_unit_counters.get(year_num, 0)
        year_unit_counters[year_num] = unit_index + 1
        category = f'25m-y{year_num}'

        en_title, zh_title = parse_title(unit['title'])
        base_slug = make_slug(year_num, en_title)

        vocab = unit['vocabulary']
        chunks = chunk_vocab(vocab)

        for ci, chunk in enumerate(chunks):
            if len(chunks) == 1:
                slug = base_slug
                title = en_title
                title_zh = zh_title
            else:
                slug = f'{base_slug}-{ci + 1}'
                title = f'{en_title} ({ci + 1})'
                title_zh = f'{zh_title} ({ci + 1})' if zh_title else f'({ci + 1})'

            timer, combo = timer_and_combo(len(chunk))

            levels.append({
                'board': '25m',
                'slug': slug,
                'category': category,
                'title': title,
                'titleZh': title_zh,
                'timer': timer,
                'comboBonus': combo,
                'vocabulary': chunk,
                'year_num': year_num,
                'src_order': unit_index,
            })

        # Track stats
        if year_num not in year_stats:
            year_stats[year_num] = {'units': 0, 'levels': 0, 'words': 0}
        year_stats[year_num]['units'] += 1
        year_stats[year_num]['levels'] += len(chunks)
        year_stats[year_num]['words'] += len(vocab)

    # Sort levels by year, then by order within year
    levels.sort(key=lambda l: (l['year_num'], l['src_order']))

    # Print stats to stderr
    total_levels = 0
    total_words = 0
    for yn in sorted(year_stats):
        s = year_stats[yn]
        print(f"Year {yn}: {s['units']} units -> {s['levels']} levels, {s['words']} words", file=sys.stderr)
        total_levels += s['levels']
        total_words += s['words']
    print(f"TOTAL: {total_levels} levels, {total_words} words", file=sys.stderr)

    # Output JS
    current_year = None
    js_parts = []
    for level in levels:
        yn = level['year_num']
        prefix = ''
        if yn != current_year:
            current_year = yn
            prefix = f'\n/* ═══ Year {yn} ({year_stats[yn]["levels"]} levels, {year_stats[yn]["words"]} words) ═══ */\n\n'
        js_parts.append(prefix + format_level(level))

    # Join with commas
    print(',\n\n'.join(js_parts))


if __name__ == '__main__':
    main()
