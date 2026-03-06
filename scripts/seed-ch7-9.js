#!/usr/bin/env node
// Seed: CIE Ch7 (Transformations & Vectors) + Ch8 (Probability) + Ch9 (Statistics)
// Usage: node scripts/seed-ch7-9.js > scripts/seed-ch7-9.sql

var edits = [];
function add(board, id, module, data) {
  edits.push({ board: board, section_id: id, module: module, data: data });
}

/* ══════════════════════════════════════════════════
   CIE 0580 — Chapter 7: Transformations and vectors (7.1 – 7.4)
   ══════════════════════════════════════════════════ */

// ── 7.1 Transformations ──
add('cie', '7.1', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Translation</b>: every point moves by the same vector $\\binom{a}{b}$. Shape and size unchanged.<br>' +
    '• <b>Reflection</b>: mirror image in a line. Give the <b>equation</b> of the mirror line (e.g. $y = x$, $x = 3$).<br>' +
    '• <b>Rotation</b>: turn about a fixed point. Give <b>centre</b>, <b>angle</b>, and <b>direction</b> (clockwise/anticlockwise).<br>' +
    '• <b>Enlargement</b>: scale from a centre. Give <b>centre</b> and <b>scale factor</b> $k$.<br>' +
    '&nbsp;&nbsp;$k > 1$: larger. $0 < k < 1$: smaller. $k < 0$: inverted (Extended).<br><br>' +
    '<b>Extended Only</b><br>' +
    '• <b>Shear</b>: shape distorted parallel to an invariant line. Shear factor $= \\frac{\\text{displacement}}{\\text{distance from invariant line}}$.<br>' +
    '• <b>Stretch</b>: enlargement in one direction only. Perpendicular to an invariant line. Stretch factor $= \\frac{\\text{new distance}}{\\text{original distance}}$.<br>' +
    '• <b>Transformation matrices</b> (2×2): rotation, reflection, enlargement, shear, stretch.<br><br>' +
    '<b>Exam Tip</b><br>' +
    '"Describe fully" = name + all details. Miss the centre of rotation = lose a mark.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>平移</b>：向量 $\\binom{a}{b}$。<b>反射</b>：给出镜像线方程。<br>' +
    '• <b>旋转</b>：给出中心、角度、方向。<b>放大</b>：给出中心和缩放因子。<br><br>' +
    '<b>仅 Extended</b><br>' +
    '• <b>剪切</b>：沿不变线平行变形。剪切因子 = $\\frac{位移}{到不变线距离}$。<br>' +
    '• <b>拉伸</b>：沿垂直于不变线方向缩放。<br>' +
    '• 变换矩阵（2×2）。<br><br>' +
    '<b>考试技巧</b>"Describe fully"= 名称 + 所有细节。'
});

add('cie', '7.1', 'examples', {
  content:
    '<b>Worked Example 1</b> [3 marks]<br>' +
    'Describe fully the single transformation that maps $A(1,2)$, $B(3,2)$, $C(3,4)$ to $A\'(-2,1)$, $B\'(-2,3)$, $C\'(-4,3)$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$(x,y) \\rightarrow (-y, x)$: this is a <b>rotation</b>, $90°$ <b>anticlockwise</b>, centre <b>$(0,0)$</b>.<br><br>' +
    '<b>Worked Example 2</b> [2 marks]<br>' +
    'Triangle $P$ is reflected in the line $y = -x$ to give triangle $Q$. Describe the single transformation from $P$ to $Q$.<br><br>' +
    '<b>Solution:</b><br>' +
    '<b>Reflection</b> in the line $y = -x$.',
  content_zh:
    '<b>经典例题 1</b> [3 分]<br>' +
    '描述将 $(1,2),(3,2),(3,4)$ 映射到 $(-2,1),(-2,3),(-4,3)$ 的变换。<br><br>' +
    '<b>解答：</b>绕 $(0,0)$ <b>逆时针旋转 $90°$</b>。<br><br>' +
    '<b>经典例题 2</b> [2 分]<br>' +
    '关于 $y = -x$ 的<b>反射</b>。'
});

// ── 7.2 Vectors in 2D ──
add('cie', '7.2', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• A <b>vector</b> has magnitude and direction: $\\vec{AB}$, $\\mathbf{a}$, or $\\binom{x}{y}$.<br>' +
    '• <b>Column vector</b> $\\binom{3}{-2}$: 3 right, 2 down.<br>' +
    '• <b>Addition</b>: $\\binom{a}{b} + \\binom{c}{d} = \\binom{a+c}{b+d}$. <b>Subtraction</b>: $\\mathbf{a} - \\mathbf{b} = \\mathbf{a} + (-\\mathbf{b})$.<br>' +
    '• <b>Scalar multiplication</b>: $k\\binom{a}{b} = \\binom{ka}{kb}$.<br>' +
    '• $-\\mathbf{a}$ reverses direction. $\\vec{BA} = -\\vec{AB}$.<br>' +
    '• <b>Equal vectors</b>: same magnitude AND direction (same column vector).<br>' +
    '• <b>Parallel vectors</b>: one is a scalar multiple of the other.<br><br>' +
    '<b>Exam Tip</b><br>' +
    'Vectors are not the same as coordinates! $\\binom{3}{4}$ is a movement, not a position.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• 向量有大小和方向。列向量 $\\binom{3}{-2}$：右 3 下 2。<br>' +
    '• 加法：分量相加。标量乘法：每个分量乘以标量。<br>' +
    '• $-\\mathbf{a}$ 反向。$\\vec{BA} = -\\vec{AB}$。<br>' +
    '• 相等向量：大小和方向都相同。平行向量：标量倍数关系。<br><br>' +
    '<b>考试技巧</b>向量是移动，不是位置！'
});

add('cie', '7.2', 'examples', {
  content:
    '<b>Worked Example</b> [3 marks]<br>' +
    '$\\mathbf{p} = \\binom{4}{-3}$, $\\mathbf{q} = \\binom{-1}{5}$. Find (a) $\\mathbf{p} + 2\\mathbf{q}$, (b) show $\\mathbf{p}$ and $\\binom{-8}{6}$ are parallel.<br><br>' +
    '<b>Solution:</b><br>' +
    '(a) $\\mathbf{p} + 2\\mathbf{q} = \\binom{4}{-3} + \\binom{-2}{10} = \\binom{2}{7}$<br><br>' +
    '(b) $\\binom{-8}{6} = -2\\binom{4}{-3} = -2\\mathbf{p}$, so they are parallel (scalar multiple).',
  content_zh:
    '<b>经典例题</b> [3 分]<br>' +
    '$\\mathbf{p} = \\binom{4}{-3}$，$\\mathbf{q} = \\binom{-1}{5}$。<br><br>' +
    '(a) $\\mathbf{p} + 2\\mathbf{q} = \\binom{2}{7}$<br>' +
    '(b) $\\binom{-8}{6} = -2\\mathbf{p}$，故平行。'
});

// ── 7.3 Magnitude of a vector ──
add('cie', '7.3', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• The <b>magnitude</b> (modulus) of $\\mathbf{a} = \\binom{x}{y}$ is $|\\mathbf{a}| = \\sqrt{x^2 + y^2}$.<br>' +
    '• A <b>unit vector</b> has magnitude 1: $\\hat{\\mathbf{a}} = \\frac{\\mathbf{a}}{|\\mathbf{a}|}$.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Calculate the magnitude of a vector.<br>' +
    '• Find the distance between two points using $|\\vec{AB}|$.<br>' +
    '• Compare vector magnitudes to determine which is longer.<br><br>' +
    '<b>Exam Tip</b><br>' +
    'The magnitude is always positive. $|\\mathbf{a}|$ is just Pythagoras applied to the components.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• 向量 $\\binom{x}{y}$ 的<b>模</b>：$|\\mathbf{a}| = \\sqrt{x^2 + y^2}$。<br>' +
    '• 单位向量：$\\hat{\\mathbf{a}} = \\frac{\\mathbf{a}}{|\\mathbf{a}|}$，模为 1。<br><br>' +
    '<b>考试技巧</b>模始终为正，就是分量的勾股定理。'
});

add('cie', '7.3', 'examples', {
  content:
    '<b>Worked Example</b> [3 marks]<br>' +
    '$\\vec{AB} = \\binom{5}{-12}$. Find $|\\vec{AB}|$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$|\\vec{AB}| = \\sqrt{5^2 + (-12)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$<br><br>' +
    '<b>Worked Example 2</b> [2 marks]<br>' +
    '$\\mathbf{v} = \\binom{3}{4}$. Find the unit vector in the direction of $\\mathbf{v}$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$|\\mathbf{v}| = \\sqrt{9+16} = 5$. Unit vector $= \\frac{1}{5}\\binom{3}{4} = \\binom{0.6}{0.8}$',
  content_zh:
    '<b>经典例题</b> [3 分]<br>' +
    '$\\vec{AB} = \\binom{5}{-12}$，求 $|\\vec{AB}|$。<br><b>解答：</b>$\\sqrt{169} = 13$<br><br>' +
    '<b>经典例题 2</b> [2 分]<br>' +
    '$\\mathbf{v} = \\binom{3}{4}$，求单位向量。<br><b>解答：</b>$\\frac{1}{5}\\binom{3}{4} = \\binom{0.6}{0.8}$'
});

// ── 7.4 Vector geometry ──
add('cie', '7.4', 'knowledge', {
  content:
    '<b>Extended Only</b><br><br>' +
    '<b>Recap</b><br>' +
    '• Express position vectors and path vectors in terms of given vectors $\\mathbf{a}$ and $\\mathbf{b}$.<br>' +
    '• <b>Route finding</b>: $\\vec{AC} = \\vec{AB} + \\vec{BC}$ (go via known points).<br>' +
    '• <b>Midpoint</b>: $\\vec{OM} = \\frac{1}{2}(\\vec{OA} + \\vec{OB})$.<br>' +
    '• A point dividing $AB$ in ratio $m:n$: $\\vec{OP} = \\frac{n\\vec{OA} + m\\vec{OB}}{m+n}$.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Prove <b>collinearity</b>: show $\\vec{XY} = k\\vec{XZ}$ (one vector is scalar multiple of the other, sharing point $X$).<br>' +
    '• Prove <b>parallel lines</b>: show $\\vec{PQ} = k\\vec{RS}$ (scalar multiple, no shared point).<br>' +
    '• Prove a quadrilateral is a parallelogram: show opposite sides are equal vectors.<br><br>' +
    '<b>Exam Tip</b><br>' +
    'Work systematically: define $\\vec{OA} = \\mathbf{a}$, $\\vec{OB} = \\mathbf{b}$, then express everything in terms of $\\mathbf{a}$ and $\\mathbf{b}$.',
  content_zh:
    '<b>仅 Extended</b><br><br>' +
    '<b>知识回顾</b><br>' +
    '• 用 $\\mathbf{a}, \\mathbf{b}$ 表示位置向量和路径向量。<br>' +
    '• 路径：$\\vec{AC} = \\vec{AB} + \\vec{BC}$。中点：$\\vec{OM} = \\frac{1}{2}(\\vec{OA} + \\vec{OB})$。<br><br>' +
    '<b>关键技巧</b><br>' +
    '• 共线证明：$\\vec{XY} = k\\vec{XZ}$。<br>' +
    '• 平行证明：$\\vec{PQ} = k\\vec{RS}$（无共点）。<br>' +
    '• 平行四边形：对边向量相等。'
});

add('cie', '7.4', 'examples', {
  content:
    '<b>Worked Example</b> [5 marks]<br>' +
    '$\\vec{OA} = \\mathbf{a}$, $\\vec{OB} = \\mathbf{b}$. $M$ is the midpoint of $OA$, $N$ is the midpoint of $OB$. Show that $MN$ is parallel to $AB$ and $MN = \\frac{1}{2}AB$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$\\vec{OM} = \\frac{1}{2}\\mathbf{a}$, $\\vec{ON} = \\frac{1}{2}\\mathbf{b}$<br>' +
    '$\\vec{MN} = \\vec{MO} + \\vec{ON} = -\\frac{1}{2}\\mathbf{a} + \\frac{1}{2}\\mathbf{b} = \\frac{1}{2}(\\mathbf{b} - \\mathbf{a})$<br>' +
    '$\\vec{AB} = \\mathbf{b} - \\mathbf{a}$<br>' +
    '$\\vec{MN} = \\frac{1}{2}\\vec{AB}$<br>' +
    'Since $\\vec{MN}$ is a scalar multiple of $\\vec{AB}$, they are <b>parallel</b>. Since the scalar is $\\frac{1}{2}$, $MN = \\frac{1}{2}AB$. QED.',
  content_zh:
    '<b>经典例题</b> [5 分]<br>' +
    '$\\vec{OA} = \\mathbf{a}$, $\\vec{OB} = \\mathbf{b}$。$M$ 为 $OA$ 中点，$N$ 为 $OB$ 中点。证明 $MN \\parallel AB$ 且 $MN = \\frac{1}{2}AB$。<br><br>' +
    '<b>解答：</b>$\\vec{MN} = \\frac{1}{2}(\\mathbf{b} - \\mathbf{a}) = \\frac{1}{2}\\vec{AB}$<br>' +
    '标量倍数关系 → 平行，系数 $\\frac{1}{2}$ → 长度为一半。'
});

/* ══════════════════════════════════════════════════
   CIE 0580 — Chapter 8: Probability (8.1 – 8.4)
   ══════════════════════════════════════════════════ */

// ── 8.1 Introduction to probability ──
add('cie', '8.1', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• Probability measures how likely an event is: $0 \\leq P \\leq 1$.<br>' +
    '• $P = 0$: impossible. $P = 1$: certain.<br>' +
    '• $P(\\text{event}) = \\frac{\\text{number of favourable outcomes}}{\\text{total number of equally likely outcomes}}$.<br>' +
    '• $P(A\') = 1 - P(A)$ where $A\'$ means "not $A$".<br><br>' +
    '<b>Key Skills</b><br>' +
    '• List outcomes systematically (sample space diagrams, two-way tables).<br>' +
    '• Find probabilities from frequency tables.<br>' +
    '• Express probability as fractions, decimals, or percentages.<br><br>' +
    '<b>Exam Tip</b><br>' +
    'Always simplify fractions in your final answer unless told otherwise.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• 概率 $0 \\leq P \\leq 1$。0 = 不可能，1 = 必然。<br>' +
    '• $P = \\frac{有利结果数}{总等可能结果数}$。$P(A\') = 1 - P(A)$。<br><br>' +
    '<b>关键技巧</b><br>' +
    '• 用样本空间图或两向表系统列出结果。<br><br>' +
    '<b>考试技巧</b>最终答案化简分数。'
});

add('cie', '8.1', 'examples', {
  content:
    '<b>Worked Example</b> [3 marks]<br>' +
    'A bag contains 4 red, 3 blue, and 5 green balls. A ball is picked at random. Find the probability it is (a) blue, (b) not green.<br><br>' +
    '<b>Solution:</b><br>' +
    'Total $= 4 + 3 + 5 = 12$<br>' +
    '(a) $P(\\text{blue}) = \\frac{3}{12} = \\frac{1}{4}$<br>' +
    '(b) $P(\\text{not green}) = 1 - \\frac{5}{12} = \\frac{7}{12}$',
  content_zh:
    '<b>经典例题</b> [3 分]<br>' +
    '袋中 4 红 3 蓝 5 绿，随机取一个。求 (a) 蓝色 (b) 不是绿色的概率。<br><br>' +
    '<b>解答：</b>总 12 个。(a) $\\frac{3}{12} = \\frac{1}{4}$ (b) $1 - \\frac{5}{12} = \\frac{7}{12}$'
});

// ── 8.2 Relative and expected frequencies ──
add('cie', '8.2', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Relative frequency</b> $= \\frac{\\text{number of times event occurs}}{\\text{total number of trials}}$.<br>' +
    '• As the number of trials increases, relative frequency approaches the <b>theoretical probability</b>.<br>' +
    '• <b>Expected frequency</b> $= P(\\text{event}) \\times \\text{number of trials}$.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Estimate probability from experimental data.<br>' +
    '• Compare experimental and theoretical probabilities.<br>' +
    '• Calculate expected number of occurrences.<br><br>' +
    '<b>Exam Tip</b><br>' +
    '"Estimate the probability" = use relative frequency. "Calculate the probability" = use equally likely outcomes.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>相对频率</b> = $\\frac{事件发生次数}{总试验次数}$。试验次数越多越接近理论概率。<br>' +
    '• <b>期望频率</b> = $P \\times$ 试验次数。<br><br>' +
    '<b>考试技巧</b><br>' +
    '"估计概率" = 用相对频率。"计算概率" = 用等可能结果。'
});

add('cie', '8.2', 'examples', {
  content:
    '<b>Worked Example</b> [3 marks]<br>' +
    'A biased coin is flipped 200 times and lands heads 118 times. (a) Estimate the probability of heads. (b) If flipped 500 times, how many heads are expected?<br><br>' +
    '<b>Solution:</b><br>' +
    '(a) $P(H) \\approx \\frac{118}{200} = 0.59$<br>' +
    '(b) Expected heads $= 0.59 \\times 500 = 295$',
  content_zh:
    '<b>经典例题</b> [3 分]<br>' +
    '有偏硬币抛 200 次，正面 118 次。(a) 估计正面概率。(b) 抛 500 次预计几次正面。<br><br>' +
    '<b>解答：</b>(a) $0.59$ (b) $0.59 \\times 500 = 295$'
});

// ── 8.3 Combined events ──
add('cie', '8.3', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>AND rule</b> (independent events): $P(A \\text{ and } B) = P(A) \\times P(B)$.<br>' +
    '• <b>OR rule</b> (mutually exclusive): $P(A \\text{ or } B) = P(A) + P(B)$.<br>' +
    '• <b>Tree diagrams</b>: multiply along branches (AND), add between branches (OR).<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Draw and use tree diagrams for two or more successive events.<br>' +
    '• "With replacement" vs "without replacement": probabilities change in the second case.<br>' +
    '• "At least one" = $1 - P(\\text{none})$.<br><br>' +
    '<b>Watch Out!</b><br>' +
    'Check whether the events are "with replacement" or "without replacement". Without replacement means the second probability changes.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• AND：$P(A \\cap B) = P(A) \\times P(B)$（独立）。OR：$P(A \\cup B) = P(A) + P(B)$（互斥）。<br>' +
    '• 树形图：沿分支乘，不同分支加。<br>' +
    '• 有放回 vs 无放回：无放回时第二次概率变化。<br>' +
    '• "至少一个" = $1 - P$(一个也没有)。<br><br>' +
    '<b>注意！</b>先判断有放回还是无放回！'
});

add('cie', '8.3', 'examples', {
  content:
    '<b>Worked Example</b> [4 marks]<br>' +
    'A bag has 6 red and 4 blue balls. Two are picked <b>without replacement</b>. Find $P$(both different colours).<br><br>' +
    '<b>Solution:</b><br>' +
    '$P(\\text{RB}) = \\frac{6}{10} \\times \\frac{4}{9} = \\frac{24}{90}$<br>' +
    '$P(\\text{BR}) = \\frac{4}{10} \\times \\frac{6}{9} = \\frac{24}{90}$<br>' +
    '$P(\\text{different}) = \\frac{24}{90} + \\frac{24}{90} = \\frac{48}{90} = \\frac{8}{15}$<br><br>' +
    '<b>Alternative:</b> $P(\\text{different}) = 1 - P(\\text{same}) = 1 - \\frac{30+12}{90} = 1 - \\frac{42}{90} = \\frac{48}{90} = \\frac{8}{15}$',
  content_zh:
    '<b>经典例题</b> [4 分]<br>' +
    '6 红 4 蓝，不放回取两个。求颜色不同的概率。<br><br>' +
    '<b>解答：</b>$P(RB) + P(BR) = \\frac{24}{90} + \\frac{24}{90} = \\frac{8}{15}$'
});

// ── 8.4 Conditional probability ──
add('cie', '8.4', 'knowledge', {
  content:
    '<b>Extended Only</b><br><br>' +
    '<b>Recap</b><br>' +
    '• <b>Conditional probability</b>: $P(A | B)$ = probability of $A$ given that $B$ has occurred.<br>' +
    '• $P(A | B) = \\frac{P(A \\cap B)}{P(B)}$.<br>' +
    '• In tree diagrams: "without replacement" naturally gives conditional probabilities (second branch changes).<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Use two-way tables or Venn diagrams to find conditional probabilities.<br>' +
    '• <b>Venn diagrams</b>: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.<br>' +
    '• Read $P(A | B)$ from a Venn diagram: focus on the $B$ circle, find the $A \\cap B$ portion.<br><br>' +
    '<b>Exam Tip</b><br>' +
    '"Given that" always means conditional probability. The denominator is the "given" group.',
  content_zh:
    '<b>仅 Extended</b><br><br>' +
    '<b>知识回顾</b><br>' +
    '• 条件概率：$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$。<br>' +
    '• 韦恩图：$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$。<br>' +
    '• "given that" = 条件概率，分母是"给定"的那组。<br><br>' +
    '<b>考试技巧</b>"Given that"总意味着条件概率。'
});

add('cie', '8.4', 'examples', {
  content:
    '<b>Worked Example</b> [4 marks]<br>' +
    'In a class of 30: 18 play football, 12 play tennis, 5 play both. A student is chosen at random. Find (a) $P$(football or tennis), (b) $P$(tennis | football).<br><br>' +
    '<b>Solution:</b><br>' +
    '(a) $P(F \\cup T) = \\frac{18 + 12 - 5}{30} = \\frac{25}{30} = \\frac{5}{6}$<br><br>' +
    '(b) $P(T | F) = \\frac{P(T \\cap F)}{P(F)} = \\frac{5/30}{18/30} = \\frac{5}{18}$<br><br>' +
    '<b>Exam Tip:</b> With Venn diagrams, fill in the intersection FIRST, then work outwards.',
  content_zh:
    '<b>经典例题</b> [4 分]<br>' +
    '30 人中 18 人踢足球，12 人打网球，5 人两项都玩。<br><br>' +
    '(a) $P(F \\cup T) = \\frac{25}{30} = \\frac{5}{6}$<br>' +
    '(b) $P(T|F) = \\frac{5}{18}$'
});

/* ══════════════════════════════════════════════════
   CIE 0580 — Chapter 9: Statistics (9.1 – 9.7)
   ══════════════════════════════════════════════════ */

// ── 9.1 Classifying and tabulating data ──
add('cie', '9.1', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Qualitative data</b>: non-numerical (colour, type). <b>Quantitative data</b>: numerical.<br>' +
    '• <b>Discrete</b>: counted, specific values (number of siblings). <b>Continuous</b>: measured, any value in a range (height).<br>' +
    '• <b>Frequency table</b>: tally marks → frequency column.<br>' +
    '• <b>Grouped frequency table</b>: data sorted into class intervals. Use $\\leq$ or $<$ for boundaries.<br>' +
    '• <b>Two-way table</b>: organises data by two categories.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Choose appropriate class intervals (equal width, no gaps, no overlaps).<br>' +
    '• Read and construct two-way tables.<br>' +
    '• Find totals and missing values in frequency tables.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>定性数据</b>：非数值。<b>定量数据</b>：数值。<br>' +
    '• <b>离散</b>：计数。<b>连续</b>：测量，范围内任意值。<br>' +
    '• 频率表：画正字 → 频率列。分组频率表：等宽分组，无间隙无重叠。<br>' +
    '• 双向表：按两个类别整理数据。'
});

add('cie', '9.1', 'examples', {
  content:
    '<b>Worked Example</b> [2 marks]<br>' +
    'Classify each as discrete or continuous: (a) Number of pets, (b) Temperature, (c) Shoe size, (d) Time taken.<br><br>' +
    '<b>Solution:</b><br>' +
    '(a) Discrete (counted)<br>' +
    '(b) Continuous (measured)<br>' +
    '(c) Discrete (specific values: 5, 5.5, 6, ...)<br>' +
    '(d) Continuous (measured)<br><br>' +
    '<b>Exam Tip:</b> Shoe sizes look continuous but are actually discrete — only certain values exist.',
  content_zh:
    '<b>经典例题</b> [2 分]<br>' +
    '分类：(a) 宠物数 (b) 温度 (c) 鞋码 (d) 所用时间。<br><br>' +
    '<b>解答：</b>(a) 离散 (b) 连续 (c) 离散 (d) 连续'
});

// ── 9.2 Interpreting statistical data ──
add('cie', '9.2', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Bar charts</b>: compare frequencies of categories. Gaps between bars.<br>' +
    '• <b>Pie charts</b>: angle $= \\frac{\\text{frequency}}{\\text{total}} \\times 360°$. Show proportion, not frequency.<br>' +
    '• <b>Pictograms</b>: symbols represent data. Key shows how many each symbol means.<br>' +
    '• <b>Line graphs</b>: show trends over time. Join points with straight lines.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Read values from charts and graphs.<br>' +
    '• Compare data shown in different formats.<br>' +
    '• Critique misleading graphs (broken scales, unequal intervals, etc.).<br><br>' +
    '<b>Exam Tip</b><br>' +
    'When reading pie charts, find the total first. Then angle ÷ 360 × total = frequency.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• 柱状图：比较频率，柱间有间隙。饼图：角度 = $\\frac{频率}{总数} \\times 360°$。<br>' +
    '• 象形图：符号代表数据，须有图例。折线图：时间趋势。<br><br>' +
    '<b>考试技巧</b><br>' +
    '读饼图先找总数，再用角度计算频率。'
});

add('cie', '9.2', 'examples', {
  content:
    '<b>Worked Example</b> [3 marks]<br>' +
    'A pie chart represents 120 students. The "Maths" sector has angle $90°$. How many students chose Maths? If 30 students chose Science, find the angle for Science.<br><br>' +
    '<b>Solution:</b><br>' +
    'Maths: $\\frac{90}{360} \\times 120 = 30$ students.<br>' +
    'Science: $\\frac{30}{120} \\times 360° = 90°$',
  content_zh:
    '<b>经典例题</b> [3 分]<br>' +
    '饼图代表 120 名学生，"数学"扇形角 $90°$。多少人选数学？30 人选科学，求角度。<br><br>' +
    '<b>解答：</b>数学 $= \\frac{90}{360} \\times 120 = 30$ 人。科学角度 $= \\frac{30}{120} \\times 360° = 90°$。'
});

// ── 9.3 Averages and measures of spread ──
add('cie', '9.3', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Mean</b> $= \\frac{\\sum x}{n}$. For frequency table: $\\bar{x} = \\frac{\\sum fx}{\\sum f}$.<br>' +
    '• <b>Median</b>: middle value of ordered data. Position $= \\frac{n+1}{2}$. For grouped data, use interpolation or cumulative frequency.<br>' +
    '• <b>Mode</b>: most frequent value. <b>Modal class</b>: class with highest frequency.<br>' +
    '• <b>Range</b> $=$ max $-$ min.<br><br>' +
    '<b>Extended Only</b><br>' +
    '• For grouped data, mean uses <b>midpoints</b> and gives an <b>estimate</b>.<br>' +
    '• <b>Interquartile range</b> $= Q_3 - Q_1$. Less affected by outliers than range.<br><br>' +
    '<b>Exam Tip</b><br>' +
    'The mean is affected by extreme values (outliers). The median is more robust.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• 平均值 $= \\frac{\\sum x}{n}$。频率表：$\\bar{x} = \\frac{\\sum fx}{\\sum f}$。<br>' +
    '• 中位数：有序数据中间值。众数：频率最高。<br>' +
    '• 极差 = 最大 - 最小。<br>' +
    '• Extended：分组数据用组中值估算平均值。IQR $= Q_3 - Q_1$。<br><br>' +
    '<b>考试技巧</b>均值受极端值影响，中位数更稳健。'
});

add('cie', '9.3', 'examples', {
  content:
    '<b>Worked Example</b> [4 marks]<br>' +
    'Grouped frequency table:<br>' +
    '| Score | 0-9 | 10-19 | 20-29 | 30-39 |<br>' +
    '| Freq  | 3   | 8     | 12    | 7     |<br>' +
    'Estimate the mean.<br><br>' +
    '<b>Solution:</b><br>' +
    'Midpoints: 4.5, 14.5, 24.5, 34.5<br>' +
    '$\\sum fx = 3(4.5) + 8(14.5) + 12(24.5) + 7(34.5)$<br>' +
    '$= 13.5 + 116 + 294 + 241.5 = 665$<br>' +
    '$\\sum f = 30$<br>' +
    'Estimated mean $= \\frac{665}{30} = 22.2$',
  content_zh:
    '<b>经典例题</b> [4 分]<br>' +
    '分组频率表（组中值 4.5, 14.5, 24.5, 34.5；频率 3, 8, 12, 7）。估算平均值。<br><br>' +
    '<b>解答：</b>$\\frac{13.5 + 116 + 294 + 241.5}{30} = \\frac{665}{30} = 22.2$'
});

// ── 9.4 Statistical charts and diagrams ──
add('cie', '9.4', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Stem-and-leaf diagram</b>: organises raw data. Must be ordered with a key. E.g. $3 | 2$ means 32.<br>' +
    '• <b>Back-to-back</b> stem-and-leaf: compares two data sets on the same stem.<br>' +
    '• <b>Frequency polygon</b>: plot midpoints of class intervals, join with straight lines.<br>' +
    '• Can read median, quartiles, and range from an ordered stem-and-leaf diagram.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Construct an ordered stem-and-leaf diagram.<br>' +
    '• Find the median from a stem-and-leaf diagram.<br>' +
    '• Draw and interpret frequency polygons.<br><br>' +
    '<b>Exam Tip</b><br>' +
    'Remember: stems go on the left, leaves on the right, and leaves must be in order.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>茎叶图</b>：有序排列原始数据，必须有图例。如 $3|2$ 表示 32。<br>' +
    '• 背靠背茎叶图：比较两组数据。<br>' +
    '• 频率折线图：用组中值画点连线。<br><br>' +
    '<b>考试技巧</b>茎在左，叶在右，叶必须有序排列。'
});

add('cie', '9.4', 'examples', {
  content:
    '<b>Worked Example</b> [3 marks]<br>' +
    'Data: 23, 31, 18, 27, 35, 22, 29, 31, 24, 38, 19, 26. Draw a stem-and-leaf diagram and find the median.<br><br>' +
    '<b>Solution:</b><br>' +
    'Key: $1|8$ means 18<br>' +
    '$1 \\;|\\; 8 \\; 9$<br>' +
    '$2 \\;|\\; 2 \\; 3 \\; 4 \\; 6 \\; 7 \\; 9$<br>' +
    '$3 \\;|\\; 1 \\; 1 \\; 5 \\; 8$<br><br>' +
    '12 values → median = average of 6th and 7th: $\\frac{26 + 27}{2} = 26.5$',
  content_zh:
    '<b>经典例题</b> [3 分]<br>' +
    '数据 12 个值，画茎叶图求中位数。<br><br>' +
    '<b>解答：</b>第 6 个和第 7 个的平均：$\\frac{26 + 27}{2} = 26.5$'
});

// ── 9.5 Scatter diagrams and correlation ──
add('cie', '9.5', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• A <b>scatter diagram</b> shows the relationship between two variables.<br>' +
    '• <b>Positive correlation</b>: as one increases, the other increases (points go up-right).<br>' +
    '• <b>Negative correlation</b>: as one increases, the other decreases (points go down-right).<br>' +
    '• <b>No correlation</b>: no clear pattern.<br>' +
    '• <b>Line of best fit</b>: straight line through the data that best represents the trend. Should pass near the <b>mean point</b> $(\\bar{x}, \\bar{y})$.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Plot scatter diagrams and draw a line of best fit by eye.<br>' +
    '• Describe the type and strength of correlation.<br>' +
    '• Use the line of best fit to make predictions (interpolation is more reliable than extrapolation).<br><br>' +
    '<b>Watch Out!</b><br>' +
    'Correlation does NOT mean causation. Two correlated variables may both be caused by a third factor.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• 散点图显示两变量关系。<br>' +
    '• 正相关：同增。负相关：一增一减。无相关：无规律。<br>' +
    '• 最佳拟合线：过均值点 $(\\bar{x}, \\bar{y})$ 附近。<br>' +
    '• 内插比外推更可靠。<br><br>' +
    '<b>注意！</b>相关性 ≠ 因果关系。'
});

add('cie', '9.5', 'examples', {
  content:
    '<b>Worked Example</b> [3 marks]<br>' +
    'A student plots temperature against ice cream sales. The points show a clear upward trend. (a) Describe the correlation. (b) Estimate sales at 25°C if the line of best fit passes through $(20, 150)$ and $(30, 250)$.<br><br>' +
    '<b>Solution:</b><br>' +
    '(a) <b>Strong positive correlation</b>: as temperature increases, sales increase.<br>' +
    '(b) Gradient $= \\frac{250-150}{30-20} = 10$ sales per °C.<br>' +
    'At 25°C: $150 + 5 \\times 10 = 200$ sales.<br><br>' +
    '<b>Exam Tip:</b> State correlation type AND direction. "Positive" alone is not enough — say "positive correlation".',
  content_zh:
    '<b>经典例题</b> [3 分]<br>' +
    '温度 vs 冰淇淋销量散点图呈上升趋势。<br><br>' +
    '(a) <b>强正相关</b>：温度升高，销量增加。<br>' +
    '(b) 斜率 $= 10$，25°C 时 $= 200$。'
});

// ── 9.6 Cumulative frequency ──
add('cie', '9.6', 'knowledge', {
  content:
    '<b>Extended Only</b><br><br>' +
    '<b>Recap</b><br>' +
    '• <b>Cumulative frequency</b> = running total of frequencies.<br>' +
    '• Plot cumulative frequency at the <b>upper class boundary</b> of each class.<br>' +
    '• The curve is always S-shaped (increasing, never decreases).<br><br>' +
    '<b>Reading from the curve</b><br>' +
    '• Median: read at $\\frac{n}{2}$.<br>' +
    '• Lower quartile ($Q_1$): at $\\frac{n}{4}$. Upper quartile ($Q_3$): at $\\frac{3n}{4}$.<br>' +
    '• IQR $= Q_3 - Q_1$.<br>' +
    '• Percentiles: e.g. 10th percentile at $\\frac{10}{100} \\times n$.<br><br>' +
    '<b>Box-and-whisker plot</b><br>' +
    '• Shows: minimum, $Q_1$, median, $Q_3$, maximum.<br>' +
    '• Useful for comparing distributions side by side.<br><br>' +
    '<b>Exam Tip</b><br>' +
    'Plot points at the upper boundary, not the midpoint. Join with a smooth S-curve, not straight lines.',
  content_zh:
    '<b>仅 Extended</b><br><br>' +
    '<b>知识回顾</b><br>' +
    '• 累积频率 = 频率累加。画在每组的<b>上界</b>处。曲线呈 S 形。<br>' +
    '• 中位数在 $\\frac{n}{2}$。$Q_1$ 在 $\\frac{n}{4}$，$Q_3$ 在 $\\frac{3n}{4}$。IQR $= Q_3 - Q_1$。<br><br>' +
    '<b>箱线图</b>：最小值, $Q_1$, 中位数, $Q_3$, 最大值。<br><br>' +
    '<b>考试技巧</b>画在上界处，用光滑 S 曲线连接。'
});

add('cie', '9.6', 'examples', {
  content:
    '<b>Worked Example</b> [4 marks]<br>' +
    'From a cumulative frequency graph with $n = 60$:<br>' +
    '(a) Find the median, $Q_1$, $Q_3$, and IQR.<br>' +
    '(b) How many scored more than 70?<br><br>' +
    '<b>Solution:</b><br>' +
    '(a) Median at $\\frac{60}{2} = 30$th → read across: median $= 55$<br>' +
    '$Q_1$ at 15th $= 42$. $Q_3$ at 45th $= 68$.<br>' +
    'IQR $= 68 - 42 = 26$<br><br>' +
    '(b) CF at 70 $= 48$. More than 70 $= 60 - 48 = 12$ students.',
  content_zh:
    '<b>经典例题</b> [4 分]<br>' +
    '累积频率图 $n = 60$。求中位数、$Q_1$、$Q_3$、IQR 和 70 分以上人数。<br><br>' +
    '<b>解答：</b>中位数 55，$Q_1 = 42$，$Q_3 = 68$，IQR $= 26$。70 分以上 $= 60 - 48 = 12$ 人。'
});

// ── 9.7 Histograms ──
add('cie', '9.7', 'knowledge', {
  content:
    '<b>Extended Only</b><br><br>' +
    '<b>Recap</b><br>' +
    '• A <b>histogram</b> displays continuous grouped data. <b>No gaps</b> between bars.<br>' +
    '• The vertical axis is <b>frequency density</b>, NOT frequency.<br>' +
    '• $\\text{Frequency density} = \\frac{\\text{frequency}}{\\text{class width}}$.<br>' +
    '• The <b>area</b> of each bar = frequency (height × width).<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Draw a histogram from a grouped frequency table with <b>unequal</b> class widths.<br>' +
    '• Read frequencies from a histogram: frequency $=$ area of bar $=$ frequency density $\\times$ width.<br>' +
    '• Estimate the mean or median class from a histogram.<br><br>' +
    '<b>Watch Out!</b><br>' +
    'Bar charts have equal widths and use frequency. Histograms may have unequal widths and use frequency density.',
  content_zh:
    '<b>仅 Extended</b><br><br>' +
    '<b>知识回顾</b><br>' +
    '• 直方图：连续分组数据，柱间无间隙。<br>' +
    '• 纵轴是<b>频率密度</b>，不是频率。频率密度 $= \\frac{频率}{组距}$。<br>' +
    '• 每根柱的<b>面积</b> = 频率。<br><br>' +
    '<b>注意！</b>柱状图用频率（等宽），直方图用频率密度（可不等宽）。'
});

add('cie', '9.7', 'examples', {
  content:
    '<b>Worked Example</b> [4 marks]<br>' +
    'A histogram shows a bar for $20 \\leq t < 35$ with frequency density 2.4. Find the frequency for this class. Another class $35 \\leq t < 40$ has frequency 15. Find its frequency density.<br><br>' +
    '<b>Solution:</b><br>' +
    'Class $20 \\leq t < 35$: width $= 15$.<br>' +
    'Frequency $= 2.4 \\times 15 = 36$.<br><br>' +
    'Class $35 \\leq t < 40$: width $= 5$.<br>' +
    'Frequency density $= \\frac{15}{5} = 3$.<br><br>' +
    '<b>Exam Tip:</b> Always check: frequency = density × width. If you are given the area, divide by width to get density.',
  content_zh:
    '<b>经典例题</b> [4 分]<br>' +
    '直方图中 $20 \\leq t < 35$ 频率密度 2.4，求频率。$35 \\leq t < 40$ 频率 15，求密度。<br><br>' +
    '<b>解答：</b>频率 $= 2.4 \\times 15 = 36$。密度 $= \\frac{15}{5} = 3$。'
});

/* ══════════════════════════════════════════════════
   OUTPUT SQL
   ══════════════════════════════════════════════════ */
console.log('-- Section content seed: CIE Ch7-9');
console.log('-- Generated ' + edits.length + ' rows');
console.log('');
edits.forEach(function(e) {
  var j = JSON.stringify(e.data).replace(/'/g, "''");
  console.log(
    "INSERT INTO section_edits (board, section_id, module, data) VALUES ('" +
    e.board + "', '" + e.section_id + "', '" + e.module + "', '" +
    j + "'::jsonb) ON CONFLICT (board, section_id, module) DO UPDATE SET data = EXCLUDED.data, updated_at = now();"
  );
});
console.log('');
console.log('-- Done: ' + edits.length + ' rows upserted');
