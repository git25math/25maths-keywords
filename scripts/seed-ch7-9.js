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
    '• <b>平移</b>：每个点都移动相同的向量 $\\binom{a}{b}$。形状和大小保持不变。<br>' +
    '• <b>反射</b>：关于一条线的镜像。给出反射轴的<b>方程</b>（例如 $y = x$，$x = 3$）。<br>' +
    '• <b>旋转</b>：绕固定点旋转。给出<b>中心</b>、<b>角度</b>和<b>方向</b>（顺时针/逆时针）。<br>' +
    '• <b>位似（放大/缩小）</b>：从一个中心按比例缩放。给出<b>中心</b>和<b>比例因子</b> $k$。<br>' +
    '&nbsp;&nbsp;$k > 1$：放大。$0 < k < 1$：缩小。$k < 0$：倒置（仅限进阶）。<br>' +
    '<br>' +
    '<b>仅限进阶 (Extended Only)</b><br>' +
    '• <b>剪切</b>：形状平行于不变线发生扭曲。剪切因子 $= \\frac{\\text{位移}}{\\text{到不变线的距离}}$。<br>' +
    '• <b>拉伸</b>：仅在一个方向上位似。垂直于一条不变线。拉伸因子 $= \\frac{\\text{新距离}}{\\text{原距离}}$。<br>' +
    '• <b>变换矩阵</b> (2×2)：旋转、反射、位似、剪切、拉伸。<br>' +
    '<br>' +
    '<b>考试技巧</b><br>' +
    '"完整描述" = 名称 + 所有细节。遗漏旋转中心 = 扣一分。'
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
    '完整描述将 $A(1,2)$，$B(3,2)$，$C(3,4)$ 映射到 $A\'(-2,1)$，$B\'(-2,3)$，$C\'(-4,3)$ 的单一变换。<br>' +
    '<br>' +
    '<b>解答：</b><br>' +
    '$(x,y) \\rightarrow (-y, x)$：这是一个<b>旋转</b>，<b>逆时针</b> $90°$，中心为 <b>$(0,0)$</b>。<br>' +
    '<br>' +
    '<b>经典例题 2</b> [2 分]<br>' +
    '三角形 $P$ 关于直线 $y = -x$ 对称得到三角形 $Q$。描述从 $P$ 到 $Q$ 的单一变换。<br>' +
    '<br>' +
    '<b>解答：</b><br>' +
    '关于直线 $y = -x$ 的<b>反射</b>。'
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
    '• <b>向量</b>（矢量）具有大小和方向：$\\vec{AB}$，$\\mathbf{a}$，或 $\\binom{x}{y}$。<br>' +
    '• <b>列向量</b> $\\binom{3}{-2}$：向右 3，向下 2。<br>' +
    '• <b>加法</b>：$\\binom{a}{b} + \\binom{c}{d} = \\binom{a+c}{b+d}$。<b>减法</b>：$\\mathbf{a} - \\mathbf{b} = \\mathbf{a} + (-\\mathbf{b})$。<br>' +
    '• <b>数乘</b>：$k\\binom{a}{b} = \\binom{ka}{kb}$。<br>' +
    '• $-\\mathbf{a}$ 反转方向。$\\vec{BA} = -\\vec{AB}$。<br>' +
    '• <b>相等向量</b>：大小和方向均相同（列向量相同）。<br>' +
    '• <b>平行向量</b>：一个向量是另一个向量的倍数（数乘）。<br>' +
    '<br>' +
    '<b>考试技巧</b><br>' +
    '向量与坐标不同！$\\binom{3}{4}$ 表示一种移动，而不是一个位置。'
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
    '• $\\mathbf{a} = \\binom{x}{y}$ 的<b>模</b>（长度）为 $|\\mathbf{a}| = \\sqrt{x^2 + y^2}$。<br>' +
    '• <b>单位向量</b>的模为 1：$\\hat{\\mathbf{a}} = \\frac{\\mathbf{a}}{|\\mathbf{a}|}$。<br>' +
    '<br>' +
    '<b>关键技能</b><br>' +
    '• 计算向量的模。<br>' +
    '• 使用 $|\\vec{AB}|$ 计算两点间的距离。<br>' +
    '• 比较向量的模以确定哪个更长。<br>' +
    '<br>' +
    '<b>考试技巧</b><br>' +
    '模总是正数。$|\\mathbf{a}|$ 只是对分量应用勾股定理。'
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
    '<b>仅限拓展教材 (Extended Only)</b><br>' +
    '<br>' +
    '<b>知识回顾</b><br>' +
    '• 用给定的向量 $\\mathbf{a}$ 和 $\\mathbf{b}$ 表示位置向量和路径向量。<br>' +
    '• <b>寻找路径</b>：$\\vec{AC} = \\vec{AB} + \\vec{BC}$（通过已知点）。<br>' +
    '• <b>中点</b>：$\\vec{OM} = \\frac{1}{2}(\\vec{OA} + \\vec{OB})$。<br>' +
    '• 以比例 $m:n$ 分割 $AB$ 的点：$\\vec{OP} = \\frac{n\\vec{OA} + m\\vec{OB}}{m+n}$。<br>' +
    '<br>' +
    '<b>关键技能</b><br>' +
    '• 证明<b>共线</b>：证明 $\\vec{XY} = k\\vec{XZ}$（其中一个向量是另一个向量的倍数，且共享点 $X$）。<br>' +
    '• 证明<b>平行线</b>：证明 $\\vec{PQ} = k\\vec{RS}$（倍数关系，无共享点）。<br>' +
    '• 证明一个四边形是平行四边形：证明对边是相等的向量。<br>' +
    '<br>' +
    '<b>考试技巧</b><br>' +
    '有系统地进行：定义 $\\vec{OA} = \\mathbf{a}$，$\\vec{OB} = \\mathbf{b}$，然后用 $\\mathbf{a}$ 和 $\\mathbf{b}$ 表示所有内容。'
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
    '• 概率衡量事件发生的可能性：$0 \\leq P \\leq 1$。<br>' +
    '• $P = 0$：不可能。$P = 1$：必然。<br>' +
    '• $P(\\text{事件}) = \\frac{\\text{有利结果的数量}}{\\text{等可能结果的总数}}$。<br>' +
    '• $P(A\') = 1 - P(A)$，其中 $A\'$ 表示"非 $A$"。<br>' +
    '<br>' +
    '<b>关键技能</b><br>' +
    '• 有系统地列出结果（样本空间图、双向表）。<br>' +
    '• 从频数表中寻找概率。<br>' +
    '• 将概率表示为分数、小数或百分比。<br>' +
    '<br>' +
    '<b>考试技巧</b><br>' +
    '除非另有说明，否则请始终在最终答案中化简分数。'
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
    '• <b>相对频数</b> $= \\frac{\\text{事件发生的次数}}{\\text{试验总次数}}$。<br>' +
    '• 随着试验次数的增加，相对频数会接近<b>理论概率</b>。<br>' +
    '• <b>期望频数</b> $= P(\\text{事件}) \\times \\text{试验次数}$。<br>' +
    '<br>' +
    '<b>关键技能</b><br>' +
    '• 从实验数据中估计概率。<br>' +
    '• 比较实验概率与理论概率。<br>' +
    '• 计算预期的发生次数。<br>' +
    '<br>' +
    '<b>考试技巧</b><br>' +
    '"估计概率" = 使用相对频数。"计算概率" = 使用等可能结果。'
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
    '• <b>与规则 (AND rule)</b>（独立事件）：$P(A \\text{ and } B) = P(A) \\times P(B)$。<br>' +
    '• <b>或规则 (OR rule)</b>（互斥事件）：$P(A \\text{ or } B) = P(A) + P(B)$。<br>' +
    '• <b>树状图</b>：沿分支相乘（与），分支之间相加（或）。<br>' +
    '<br>' +
    '<b>关键技能</b><br>' +
    '• 绘制并使用树状图来处理两个或多个连续事件。<br>' +
    '• "放回"与"不放回"：在第二种情况下概率会发生变化。<br>' +
    '• "至少一个" = $1 - P(\\text{一个都没有})$。<br>' +
    '<br>' +
    '<b>注意！</b><br>' +
    '检查事件是"放回"还是"不放回"。不放回意味着第二次抽取的概率会改变。'
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
    '一个袋子里有 6 个红球和 4 个蓝球。<b>不放回地</b>取出两个球。求 $P$(两个球颜色不同) 的概率。<br>' +
    '<br>' +
    '<b>解答：</b><br>' +
    '$P(\\text{RB}) = \\frac{6}{10} \\times \\frac{4}{9} = \\frac{24}{90}$<br>' +
    '$P(\\text{BR}) = \\frac{4}{10} \\times \\frac{6}{9} = \\frac{24}{90}$<br>' +
    '$P(\\text{different}) = \\frac{24}{90} + \\frac{24}{90} = \\frac{48}{90} = \\frac{8}{15}$<br>' +
    '<br>' +
    '<b>另一种方法：</b> $P(\\text{different}) = 1 - P(\\text{same}) = 1 - \\frac{30+12}{90} = 1 - \\frac{42}{90} = \\frac{48}{90} = \\frac{8}{15}$'
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
    '<b>仅限 Extended 课程内容</b><br>' +
    '<br>' +
    '<b>知识回顾</b><br>' +
    '• <b>条件概率</b>：$P(A | B)$ = 在 $B$ 发生的条件下 $A$ 发生的概率。<br>' +
    '• $P(A | B) = \\frac{P(A \\cap B)}{P(B)}$。<br>' +
    '• 在树状图中："不放回"自然会产生条件概率（第二个分支的概率会改变）。<br>' +
    '<br>' +
    '<b>关键技能</b><br>' +
    '• 使用列联表或维恩图来计算条件概率。<br>' +
    '• <b>维恩图</b>：$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$。<br>' +
    '• 从维恩图中读取 $P(A | B)$：关注 $B$ 圆圈，找到其中 $A \\cap B$ 的部分。<br>' +
    '<br>' +
    '<b>考试技巧</b><br>' +
    '"已知 (Given that)"总是意味着条件概率。分母是"已知"的那个群体。'
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
    '在一个 30 人的班级中：18 人踢足球，12 人打网球，5 人两者都参加。随机选择一名学生。求 (a) $P$(足球或网球)，(b) $P$(网球 | 足球)。<br>' +
    '<br>' +
    '<b>解答：</b><br>' +
    '(a) $P(F \\cup T) = \\frac{18 + 12 - 5}{30} = \\frac{25}{30} = \\frac{5}{6}$<br>' +
    '<br>' +
    '(b) $P(T | F) = \\frac{P(T \\cap F)}{P(F)} = \\frac{5/30}{18/30} = \\frac{5}{18}$<br>' +
    '<br>' +
    '<b>考试技巧：</b> 使用维恩图时，先填写交集部分，然后向外扩展。'
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
    '• <b>定性数据</b>：非数值型（颜色、类型）。<b>定量数据</b>：数值型。<br>' +
    '• <b>离散型</b>：计数的，特定值（兄弟姐妹的人数）。<b>连续型</b>：测量的，范围内的任何值（身高）。<br>' +
    '• <b>频数表</b>：计数符号 → 频数列。<br>' +
    '• <b>分组频数表</b>：数据被分类到组区间。使用 $\\leq$ 或 $<$ 作为边界。<br>' +
    '• <b>双向表</b>：按两个类别组织数据。<br>' +
    '<br>' +
    '<b>关键技能</b><br>' +
    '• 选择合适的组区间（等宽、无间隙、无重叠）。<br>' +
    '• 读取和构建双向表。<br>' +
    '• 查找频数表中的总计和缺失值。'
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
    '将以下各项分类为离散型或连续型：(a) 宠物数量，(b) 温度，(c) 鞋码，(d) 所用时间。<br>' +
    '<br>' +
    '<b>解答：</b><br>' +
    '(a) 离散型（计数得出）<br>' +
    '(b) 连续型（测量得出）<br>' +
    '(c) 离散型（特定数值：5, 5.5, 6, ...）<br>' +
    '(d) 连续型（测量得出）<br>' +
    '<br>' +
    '<b>考试技巧：</b> 鞋码看起来像连续的，但实际上是离散的——只存在某些特定的值。'
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
    '• <b>条形图</b>：比较不同类别的频数。条形之间有间隙。<br>' +
    '• <b>饼图</b>：圆心角 $= \\frac{\\text{频数}}{\\text{总计}} \\times 360°$。显示比例，而非频数。<br>' +
    '• <b>象形图</b>：用符号表示数据。图例显示每个符号代表的数量。<br>' +
    '• <b>折线图</b>：显示随时间变化的趋势。用直线连接各点。<br>' +
    '<br>' +
    '<b>关键技能</b><br>' +
    '• 从图表中读取数值。<br>' +
    '• 比较以不同格式显示的数据。<br>' +
    '• 评论误导性的图表（刻度断裂、区间不等，等等）。<br>' +
    '<br>' +
    '<b>考试技巧</b><br>' +
    '读取饼图时，先找到总计。然后 圆心角 ÷ 360 × 总计 = 频数。'
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
    '• <b>平均数</b> $= \\frac{\\sum x}{n}$。对于频数表：$\\bar{x} = \\frac{\\sum fx}{\\sum f}$。<br>' +
    '• <b>中位数</b>：有序数据的中间值。位置 $= \\frac{n+1}{2}$。对于分组数据，使用插值法或累积频数。<br>' +
    '• <b>众数</b>：出现次数最多的数值。<b>众数组</b>：频数最高的组。<br>' +
    '• <b>极差</b> $=$ 最大值 $-$ 最小值。<br>' +
    '<br>' +
    '<b>仅限进阶</b><br>' +
    '• 对于分组数据，平均数使用<b>中点</b>计算，并给出一个<b>估计值</b>。<br>' +
    '• <b>四分位距</b> $= Q_3 - Q_1$。与极差相比，受异常值的影响更小。<br>' +
    '<br>' +
    '<b>考试技巧</b><br>' +
    '平均数受极端值（异常值）的影响。中位数更为稳健。'
});

add('cie', '9.3', 'examples', {
  content:
    '<b>Worked Example</b> [4 marks]<br>' +
    'Grouped frequency table:<br>' +
    'Score: 0–9 (freq 3), 10–19 (freq 8), 20–29 (freq 12), 30–39 (freq 7)<br>' +
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
    '• <b>茎叶图</b>：组织原始数据。必须有序且带有图例。例如 $3 | 2$ 表示 32。<br>' +
    '• <b>背对背</b>茎叶图：在同一根茎上比较两组数据集。<br>' +
    '• <b>频数多边形</b>：绘制组区间的组中点，并用直线连接。<br>' +
    '• 可以从有序茎叶图中读取中位数、四分位数和极差。<br>' +
    '<br>' +
    '<b>关键技能</b><br>' +
    '• 构建有序茎叶图。<br>' +
    '• 从茎叶图中求中位数。<br>' +
    '• 绘制并解读频数多边形。<br>' +
    '<br>' +
    '<b>考试技巧</b><br>' +
    '记住：茎在左侧，叶在右侧，且叶子必须有序排列。'
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
    '数据：23, 31, 18, 27, 35, 22, 29, 31, 24, 38, 19, 26。绘制茎叶图并求中位数。<br>' +
    '<br>' +
    '<b>解答：</b><br>' +
    '图例：$1|8$ 表示 18<br>' +
    '$1 \\;|\\; 8 \\; 9$<br>' +
    '$2 \\;|\\; 2 \\; 3 \\; 4 \\; 6 \\; 7 \\; 9$<br>' +
    '$3 \\;|\\; 1 \\; 1 \\; 5 \\; 8$<br>' +
    '<br>' +
    '12 个值 → 中位数 = 第 6 个和第 7 个值的平均数：$\\frac{26 + 27}{2} = 26.5$'
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
    '• <b>散点图</b>显示了两个变量之间的关系。<br>' +
    '• <b>正相关</b>：随着一个变量增加，另一个也增加（点向右上延伸）。<br>' +
    '• <b>负相关</b>：随着一个变量增加，另一个减少（点向右下延伸）。<br>' +
    '• <b>无相关</b>：没有明显的模式。<br>' +
    '• <b>最佳拟合线</b>：穿过数据且最能代表趋势的直线。应经过<b>平均点</b> $(\\bar{x}, \\bar{y})$ 附近。<br>' +
    '<br>' +
    '<b>关键技能</b><br>' +
    '• 绘制散点图并目测画出最佳拟合线。<br>' +
    '• 描述相关性的类型和强度。<br>' +
    '• 使用最佳拟合线进行预测（内插法比外推法更可靠）。<br>' +
    '<br>' +
    '<b>注意！</b><br>' +
    '相关性并不意味着因果关系。两个相关的变量可能都受第三个因素的影响。'
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
    '一名学生绘制了气温与冰淇淋销量的关系图。散点显示出明显的上升趋势。(a) 描述其相关性。(b) 如果最佳拟合线经过 $(20, 150)$ 和 $(30, 250)$，请估算 25°C 时的销量。<br>' +
    '<br>' +
    '<b>解答：</b><br>' +
    '(a) <b>强正相关</b>：随着气温升高，销量增加。<br>' +
    '(b) 斜率 $= \\frac{250-150}{30-20} = 10$ 销量/°C。<br>' +
    '在 25°C 时：$150 + 5 \\times 10 = 200$ 销量。<br>' +
    '<br>' +
    '<b>考试技巧：</b>说明相关性的类型和方向。只说"正"是不够的——要说"正相关"。'
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
    '<b>仅限拓展 (Extended Only)</b><br>' +
    '<br>' +
    '<b>知识回顾</b><br>' +
    '• <b>累积频数</b> = 频数的连续总计。<br>' +
    '• 在每个组的<b>上组界 (upper class boundary)</b>处绘制累积频数。<br>' +
    '• 曲线总是呈 S 形（递增，从不减少）。<br>' +
    '<br>' +
    '<b>从曲线读取数据</b><br>' +
    '• 中位数：在 $\\frac{n}{2}$ 处读取。<br>' +
    '• 下四分位数 ($Q_1$)：在 $\\frac{n}{4}$ 处。上四分位数 ($Q_3$)：在 $\\frac{3n}{4}$ 处。<br>' +
    '• 四分位距 IQR $= Q_3 - Q_1$。<br>' +
    '• 百分位数：例如，第 10 百分位数在 $\\frac{10}{100} \\times n$ 处。<br>' +
    '<br>' +
    '<b>箱线图 (Box-and-whisker plot)</b><br>' +
    '• 显示：最小值、$Q_1$、中位数、$Q_3$、最大值。<br>' +
    '• 适用于并排比较分布。<br>' +
    '<br>' +
    '<b>考试技巧</b><br>' +
    '在边界上限描点，而不是中点。用平滑的 S 形曲线连接，不要用直线。'
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
    '已知累积频数图且 $n = 60$：<br>' +
    '(a) 求中位数、$Q_1$、$Q_3$ 和 IQR。<br>' +
    '(b) 多少人得分超过 70？<br>' +
    '<br>' +
    '<b>解答:</b><br>' +
    '(a) 中位数位于第 $\\frac{60}{2} = 30$ 项 → 横向读取：中位数 $= 55$<br>' +
    '$Q_1$ 位于第 15 项 $= 42$。$Q_3$ 位于第 45 项 $= 68$。<br>' +
    'IQR $= 68 - 42 = 26$<br>' +
    '<br>' +
    '(b) 70 处的 CF $= 48$。超过 70 的人数 $= 60 - 48 = 12$ 名学生。'
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
    '<b>仅限拓展 (Extended Only)</b><br>' +
    '<br>' +
    '<b>知识回顾</b><br>' +
    '• <b>直方图</b>显示连续的分组数据。条形之间<b>没有间隙</b>。<br>' +
    '• 纵轴是<b>频数密度</b>，而不是频数。<br>' +
    '• $\\text{频数密度} = \\frac{\\text{频数}}{\\text{组距}}$。<br>' +
    '• 每个条形的<b>面积</b> = 频数（高度 × 宽度）。<br>' +
    '<br>' +
    '<b>关键技能</b><br>' +
    '• 根据组距<b>不相等</b>的分组频数表绘制直方图。<br>' +
    '• 从直方图中读取频数：频数 $=$ 条形面积 $=$ 频数密度 $\\times$ 组距。<br>' +
    '• 从直方图估算平均数或中位数所在组。<br>' +
    '<br>' +
    '<b>注意！</b><br>' +
    '条形图（柱状图）组距相等并使用频数. 直方图的组距可能不等，并使用频数密度。'
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
    '一个直方图中，$20 \\leq t < 35$ 这一组的条形频数密度为 2.4。求该组的频数。另一组 $35 \\leq t < 40$ 的频数为 15。求其频数密度。<br>' +
    '<br>' +
    '<b>解答：</b><br>' +
    '组 $20 \\leq t < 35$：组距 $= 15$。<br>' +
    '频数 $= 2.4 \\times 15 = 36$。<br>' +
    '<br>' +
    '组 $35 \\leq t < 40$：组距 $= 5$。<br>' +
    '频数密度 $= \\frac{15}{5} = 3$。<br>' +
    '<br>' +
    '<b>考试技巧：</b>务必检查：频数 = 密度 × 组距。如果给出的是面积，除以组距即可得到密度。'
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
