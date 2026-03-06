#!/usr/bin/env node
// Seed: CIE Ch3 (Coordinate geometry) + Edexcel Ch3 (Sequences, functions & graphs)
var edits = [];
function add(b, id, mod, data) { edits.push({ board: b, section_id: id, module: mod, data: data }); }

/* ══════════════════════════════════════════════════
   CIE 0580 — Chapter 3: Coordinate geometry (3.1 – 3.7)
   ══════════════════════════════════════════════════ */

// ── 3.1 Coordinates ──
add('cie', '3.1', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• The <b>Cartesian plane</b> has a horizontal $x$-axis and vertical $y$-axis, crossing at the <b>origin</b> $(0, 0)$.<br>' +
    '• A point is written as $(x, y)$. The $x$-coordinate comes first.<br>' +
    '• <b>Four quadrants</b>: Q1 $(+, +)$, Q2 $(-, +)$, Q3 $(-, -)$, Q4 $(+, -)$.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Plot and read coordinates in all four quadrants.<br>' +
    '• Identify coordinates from geometric shapes drawn on axes.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>笛卡尔坐标系</b>有一个水平的 $x$ 轴和一个垂直的 $y$ 轴，它们在<b>原点</b> $(0, 0)$ 相交。<br>' +
    '• 点记作 $(x, y)$。$x$ 坐标排在第一位。<br>' +
    '• <b>四个象限</b>：Q1 $(+, +)$，Q2 $(-, +)$，Q3 $(-, -)$，Q4 $(+, -)$。<br>' +
    '<br>' +
    '<b>关键技能</b><br>' +
    '• 在所有四个象限中绘制和读取坐标。<br>' +
    '• 从坐标轴上绘制的几何图形中识别坐标。'
});

add('cie', '3.1', 'examples', {
  content:
    '<b>Worked Example</b> [2 marks]<br>' +
    'A rectangle has vertices at $A(1, 2)$, $B(5, 2)$, $C(5, 6)$. Find $D$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$D$ must complete the rectangle: same $x$ as $A$, same $y$ as $C$.<br>' +
    '$D = (1, 6)$<br><br>' +
    '<b>Exam Tip:</b> Sketch the shape on axes to visualise the missing vertex.',
  content_zh:
    '<b>经典例题</b> [2 分]<br>' +
    '一个长方形的顶点位于 $A(1, 2)$，$B(5, 2)$，$C(5, 6)$。求 $D$ 的坐标。<br>' +
    '<br>' +
    '<b>解答：</b><br>' +
    '$D$ 必须完善该长方形：其 $x$ 坐标与 $A$ 相同，$y$ 坐标与 $C$ 相同。<br>' +
    '$D = (1, 6)$<br>' +
    '<br>' +
    '<b>考试技巧：</b>在轴线上草绘该形状，以便直观观察缺失的顶点。'
});

// ── 3.2 Drawing linear graphs ──
add('cie', '3.2', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• A linear graph is a straight line. Equation: $y = mx + c$.<br>' +
    '• To draw: make a table of at least 3 values of $(x, y)$, plot, and join with a ruler.<br>' +
    '• Special lines: $y = c$ is horizontal; $x = a$ is vertical.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Draw lines from equations. Read equations from graphs.<br>' +
    '• Find where two lines intersect (solve simultaneously).<br><br>' +
    '<b>Exam Tip</b><br>' +
    'Use 3 points to draw a line — the third point checks for errors.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• 线性图是一条直线。方程为：$y = mx + c$。<br>' +
    '• 绘制方法：列出至少 3 组 $(x, y)$ 值的表格，描点，并用直尺连接。<br>' +
    '• 特殊直线：$y = c$ 是水平线；$x = a$ 是垂直线。<br>' +
    '<br>' +
    '<b>关键技能</b><br>' +
    '• 根据方程画线。从图表中读取方程。<br>' +
    '• 找到两条直线的交点（联立求解）。<br>' +
    '<br>' +
    '<b>考试技巧</b><br>' +
    '使用 3 个点来画线 —— 第三个点用于检查错误。'
});

add('cie', '3.2', 'examples', {
  content:
    '<b>Worked Example</b> [3 marks]<br>' +
    'Draw the graph of $y = 2x - 3$ for $-1 \\leq x \\leq 4$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$x = -1$: $y = -5$; $x = 0$: $y = -3$; $x = 2$: $y = 1$; $x = 4$: $y = 5$.<br>' +
    'Plot these points and join with a straight line.<br><br>' +
    '<b>Exam Tip:</b> Always use a ruler for straight-line graphs.',
  content_zh:
    '<b>经典例题</b> [3 分]<br>' +
    '画 $y = 2x - 3$ 在 $-1 \\leq x \\leq 4$ 的图像。<br><br>' +
    '<b>解答：</b>代入 $x = -1, 0, 2, 4$ 得 $y = -5, -3, 1, 5$，描点用直尺连线。'
});

// ── 3.3 Gradient of linear graphs ──
add('cie', '3.3', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Gradient</b> (slope) = $\\frac{\\text{rise}}{\\text{run}} = \\frac{y_2 - y_1}{x_2 - x_1}$.<br>' +
    '• Positive gradient: line goes uphill (left to right).<br>' +
    '• Negative gradient: line goes downhill.<br>' +
    '• Zero gradient: horizontal line. Undefined gradient: vertical line.<br>' +
    '• In $y = mx + c$, $m$ is the gradient.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Calculate gradient from two points.<br>' +
    '• Read gradient from a graph using a right-angled triangle.<br><br>' +
    '<b>Exam Tip</b><br>' +
    'Pick two points far apart on the line for a more accurate gradient calculation.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>斜率（Gradient/slope）</b> = $\\frac{\\text{上升}}{\\text{水平距离}} = \\frac{y_2 - y_1}{x_2 - x_1}$。<br>' +
    '• 正斜率：直线向上倾斜（从左到右）。<br>' +
    '• 负斜率：直线向下倾斜。<br>' +
    '• 零斜率：水平线。未定义斜率：垂直线。<br>' +
    '• 在 $y = mx + c$ 中，$m$ 是斜率。<br>' +
    '<br>' +
    '<b>关键技能</b><br>' +
    '• 根据两点计算斜率。<br>' +
    '• 使用直角三角形从图表中读取斜率。<br>' +
    '<br>' +
    '<b>考试技巧</b><br>' +
    '在直线上选取两个相距较远的点，以获得更准确的斜率计算结果。'
});

add('cie', '3.3', 'examples', {
  content:
    '<b>Worked Example</b> [2 marks]<br>' +
    'Find the gradient of the line through $(2, 5)$ and $(8, -1)$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$m = \\frac{-1 - 5}{8 - 2} = \\frac{-6}{6} = -1$<br><br>' +
    '<b>Exam Tip:</b> Be consistent: always subtract in the same order for both coordinates.',
  content_zh:
    '<b>经典例题</b> [2 分]<br>' +
    '求通过 $(2, 5)$ 和 $(8, -1)$ 的直线的斜率。<br>' +
    '<br>' +
    '<b>解答：</b><br>' +
    '$m = \\frac{-1 - 5}{8 - 2} = \\frac{-6}{6} = -1$<br>' +
    '<br>' +
    '<b>考试技巧：</b>保持一致：始终以相同的顺序减去两个坐标。'
});

// ── 3.4 Length and midpoint ──
add('cie', '3.4', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Distance</b> between $(x_1, y_1)$ and $(x_2, y_2)$:<br>' +
    '$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$ (Pythagoras on the coordinate plane).<br>' +
    '• <b>Midpoint</b>: $M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Calculate the exact distance between two points.<br>' +
    '• Find the midpoint of a line segment.<br><br>' +
    '<b>Exam Tip</b><br>' +
    'Leave answers in surd form if the question says "exact value".',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• $(x_1, y_1)$ 和 $(x_2, y_2)$ 之间的<b>距离</b>：<br>' +
    '$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$（坐标平面上的勾股定理）。<br>' +
    '• <b>中点</b>：$M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$。<br>' +
    '<br>' +
    '<b>关键技能</b><br>' +
    '• 计算两点之间的精确距离。<br>' +
    '• 求线段的中点。<br>' +
    '<br>' +
    '<b>考试技巧</b><br>' +
    '如果题目要求"精确值 (exact value)"，请以根式形式保留答案。'
});

add('cie', '3.4', 'examples', {
  content:
    '<b>Worked Example</b> [3 marks]<br>' +
    'Find the distance and midpoint of $A(1, 3)$ and $B(7, 11)$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$d = \\sqrt{(7-1)^2 + (11-3)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$<br>' +
    '$M = \\left(\\frac{1+7}{2}, \\frac{3+11}{2}\\right) = (4, 7)$',
  content_zh:
    '<b>经典例题</b> [3 分]<br>' +
    '求 $A(1,3)$ 和 $B(7,11)$ 的距离和中点。<br><br>' +
    '<b>解答：</b>$d = \\sqrt{36+64} = 10$，$M = (4, 7)$'
});

// ── 3.5 Equations of linear graphs ──
add('cie', '3.5', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Slope-intercept form</b>: $y = mx + c$ (gradient $m$, $y$-intercept $c$).<br>' +
    '• Given gradient and a point: $y - y_1 = m(x - x_1)$.<br>' +
    '• Given two points: find $m$ first, then use point-slope form.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Write the equation of a line from a graph.<br>' +
    '• Write the equation from gradient + point, or two points.<br>' +
    '• Rearrange between $y = mx + c$ and $ax + by = c$.<br><br>' +
    '<b>Exam Tip</b><br>' +
    'If given a graph, read off the $y$-intercept and calculate the gradient to write $y = mx + c$.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>斜截式</b>：$y = mx + c$（斜率 $m$，$y$ 轴截距 $c$）。<br>' +
    '• 已知斜率和一个点：$y - y_1 = m(x - x_1)$。<br>' +
    '• 已知两点：先求出 $m$，然后使用点斜式。<br>' +
    '<br>' +
    '<b>关键技能</b><br>' +
    '• 根据图像写出直线方程。<br>' +
    '• 根据斜率 + 一个点，或两点写出方程。<br>' +
    '• 在 $y = mx + c$ 和 $ax + by = c$ 之间进行转换。<br>' +
    '<br>' +
    '<b>考试技巧</b><br>' +
    '如果给出图像，读取 $y$ 轴截距并计算斜率以写出 $y = mx + c$。'
});

add('cie', '3.5', 'examples', {
  content:
    '<b>Worked Example</b> [3 marks]<br>' +
    'Find the equation of the line through $(2, 1)$ and $(6, 9)$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$m = \\frac{9-1}{6-2} = \\frac{8}{4} = 2$<br>' +
    '$y - 1 = 2(x - 2)$<br>' +
    '$y = 2x - 3$',
  content_zh:
    '<b>经典例题</b> [3 分]<br>' +
    '求过 $(2,1)$ 和 $(6,9)$ 的直线方程。<br><br>' +
    '<b>解答：</b>$m = 2$，$y - 1 = 2(x-2)$，$y = 2x - 3$'
});

// ── 3.6 Parallel lines ──
add('cie', '3.6', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Parallel lines</b> have the SAME gradient.<br>' +
    '• If $L_1$ has gradient $m$, any line parallel to it also has gradient $m$.<br>' +
    '• To find a parallel line through a given point: use $y - y_1 = m(x - x_1)$ with the same $m$.<br><br>' +
    '<b>Exam Tip</b><br>' +
    'When asked "find the equation of the line parallel to $y = 3x + 1$ through $(2, 5)$", the gradient is 3.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>平行线</b>具有相同的斜率。<br>' +
    '• 如果 $L_1$ 的斜率为 $m$，则任何与其平行的直线斜率也为 $m$。<br>' +
    '• 求过已知点的平行线：使用相同的 $m$ 并代入 $y - y_1 = m(x - x_1)$。<br>' +
    '<br>' +
    '<b>考试技巧</b><br>' +
    '当题目要求"求过点 $(2, 5)$ 且平行于 $y = 3x + 1$ 的直线方程"时，斜率为 3。'
});

add('cie', '3.6', 'examples', {
  content:
    '<b>Worked Example</b> [2 marks]<br>' +
    'Find the equation of the line parallel to $y = -2x + 5$ that passes through $(3, 1)$.<br><br>' +
    '<b>Solution:</b><br>' +
    'Gradient $m = -2$ (same as the given line).<br>' +
    '$y - 1 = -2(x - 3)$<br>' +
    '$y = -2x + 7$',
  content_zh:
    '<b>经典例题</b> [2 分]<br>' +
    '求平行于 $y = -2x+5$、过 $(3,1)$ 的直线方程。<br><br>' +
    '<b>解答：</b>$m = -2$，$y - 1 = -2(x-3)$，$y = -2x + 7$'
});

// ── 3.7 Perpendicular lines ──
add('cie', '3.7', 'knowledge', {
  content:
    '<b>Extended Only</b><br><br>' +
    '<b>Recap</b><br>' +
    '• <b>Perpendicular lines</b> meet at 90°.<br>' +
    '• If one line has gradient $m$, a perpendicular line has gradient $-\\frac{1}{m}$.<br>' +
    '• Product of gradients of perpendicular lines = $-1$: $m_1 \\times m_2 = -1$.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Find the gradient of a perpendicular line.<br>' +
    '• Write the equation of a perpendicular through a given point.<br>' +
    '• Find the perpendicular bisector of a line segment (passes through midpoint, perpendicular gradient).<br><br>' +
    '<b>Watch Out!</b><br>' +
    'The negative reciprocal of $\\frac{2}{3}$ is $-\\frac{3}{2}$, not $-\\frac{2}{3}$.',
  content_zh:
    '<b>仅 Extended</b><br>' +
    '<br>' +
    '<b>知识回顾</b><br>' +
    '• <b>垂直线</b>相交成 90°。<br>' +
    '• 如果一条直线的斜率为 $m$，则其垂直线的斜率为 $-\\frac{1}{m}$。<br>' +
    '• 垂直线斜率之积 = $-1$：$m_1 \\times m_2 = -1$。<br>' +
    '<br>' +
    '<b>关键技能</b><br>' +
    '• 求垂直线的斜率。<br>' +
    '• 写出通过给定点的垂直线方程。<br>' +
    '• 求线段的垂直平分线（通过中点，具有垂直斜率）。<br>' +
    '<br>' +
    '<b>注意！</b><br>' +
    '$\\frac{2}{3}$ 的负倒数是 $-\\frac{3}{2}$，而不是 $-\\frac{2}{3}$。'
});

add('cie', '3.7', 'examples', {
  content:
    '<b>Worked Example</b> [3 marks]<br>' +
    'Line $L$ passes through $A(1, 4)$ and $B(5, 2)$. Find the equation of the perpendicular bisector of $AB$.<br><br>' +
    '<b>Solution:</b><br>' +
    'Midpoint: $M = (3, 3)$<br>' +
    'Gradient of $AB$: $m = \\frac{2-4}{5-1} = -\\frac{1}{2}$<br>' +
    'Perpendicular gradient: $m_{\\perp} = 2$<br>' +
    '$y - 3 = 2(x - 3)$<br>' +
    '$y = 2x - 3$<br><br>' +
    '<b>Exam Tip:</b> Perpendicular bisector = midpoint + negative reciprocal gradient.',
  content_zh:
    '<b>经典例题</b> [3 分]<br>' +
    '直线 $L$ 通过 $A(1, 4)$ 和 $B(5, 2)$。求 $AB$ 的垂直平分线方程。<br>' +
    '<br>' +
    '<b>解答：</b><br>' +
    '中点：$M = (3, 3)$<br>' +
    '$AB$ 的斜率：$m = \\frac{2-4}{5-1} = -\\frac{1}{2}$<br>' +
    '垂直斜率：$m_{\\perp} = 2$<br>' +
    '$y - 3 = 2(x - 3)$<br>' +
    '$y = 2x - 3$<br>' +
    '<br>' +
    '<b>考试技巧：</b>垂直平分线 = 中点 + 负倒数斜率。'
});

/* ══════════════════════════════════════════════════
   EDEXCEL 4MA1 — Chapter 3: Sequences, functions and graphs (3.1 – 3.4)
   ══════════════════════════════════════════════════ */

// ── Edexcel 3.1 Sequences ──
add('edexcel', '3.1', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• A <b>sequence</b> is an ordered list of numbers following a pattern.<br>' +
    '• <b>Term-to-term rule</b>: how to get from one term to the next.<br>' +
    '• <b>$n$th term</b> (position-to-term): $T_n$ gives any term directly.<br>' +
    '• <b>Arithmetic</b>: constant difference $d$. $T_n = a + (n-1)d$ or $T_n = dn + (a - d)$.<br><br>' +
    '<b>Higher Only</b><br>' +
    '• <b>Quadratic sequences</b>: second differences are constant. $T_n = an^2 + bn + c$.<br>' +
    '• <b>Geometric sequences</b>: constant ratio $r$. $T_n = ar^{n-1}$.<br>' +
    '• <b>Fibonacci-type</b>: each term = sum of previous two.<br><br>' +
    '<b>Exam Tip</b><br>' +
    'Always check your formula with $n = 1, 2, 3$.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>数列</b>是按某种规律排列的一组数字。<br>' +
    '• <b>逐项规则</b>：如何从一项得到下一项。<br>' +
    '• <b>第 $n$ 项</b>（通项）：$T_n$ 可直接给出任意项。<br>' +
    '• <b>等差数列</b>：公差 $d$ 为常数。$T_n = a + (n-1)d$ 或 $T_n = dn + (a - d)$。<br>' +
    '<br>' +
    '<b>仅 Higher</b><br>' +
    '• <b>二阶等差数列</b>：二阶差分为常数。$T_n = an^2 + bn + c$。<br>' +
    '• <b>等比数列</b>：公比 $r$ 为常数。$T_n = ar^{n-1}$。<br>' +
    '• <b>斐波那契型</b>：每一项等于前两项之和。<br>' +
    '<br>' +
    '<b>考试技巧</b><br>' +
    '务必用 $n = 1, 2, 3$ 来检查你的公式。'
});

add('edexcel', '3.1', 'examples', {
  content:
    '<b>Worked Example 1</b> [2 marks]<br>' +
    'Find the $n$th term of $7, 11, 15, 19, ...$<br><br>' +
    '<b>Solution:</b><br>' +
    '$d = 4$, $T_n = 4n + 3$. Check: $T_1 = 7$ ✓<br><br>' +
    '<b>Worked Example 2</b> (Higher) [4 marks]<br>' +
    'Find the $n$th term of $2, 8, 18, 32, 50, ...$<br><br>' +
    '<b>Solution:</b><br>' +
    '1st diff: $6, 10, 14, 18$. 2nd diff: $4, 4, 4$ → $a = 2$.<br>' +
    '$T_n = 2n^2 + bn + c$.<br>' +
    '$n = 1$: $2 + b + c = 2$ → $b + c = 0$.<br>' +
    '$n = 2$: $8 + 2b + c = 8$ → $2b + c = 0$.<br>' +
    '$b = 0, c = 0$. $T_n = 2n^2$.',
  content_zh:
    '<b>经典例题 1</b> [2 分]<br>' +
    '求 $7, 11, 15, 19, ...$ 的通项。<br><br>' +
    '<b>解答：</b>$d = 4$，$T_n = 4n + 3$<br><br>' +
    '<b>经典例题 2</b>（Higher）[4 分]<br>' +
    '求 $2, 8, 18, 32, 50, ...$ 的通项。<br><br>' +
    '<b>解答：</b>二阶差 = 4，$a = 2$，解得 $T_n = 2n^2$'
});

// ── Edexcel 3.2 Function notation ──
add('edexcel', '3.2', 'knowledge', {
  content:
    '<b>Higher Only</b><br><br>' +
    '<b>Recap</b><br>' +
    '• <b>Function notation</b>: $f(x) = 2x + 3$ means "the function $f$ maps $x$ to $2x + 3$".<br>' +
    '• $f(5) = 2(5) + 3 = 13$.<br>' +
    '• <b>Composite functions</b>: $fg(x) = f(g(x))$. Do $g$ first, then $f$.<br>' +
    '• <b>Inverse functions</b>: $f^{-1}(x)$ undoes $f$. Swap $x$ and $y$, then rearrange.<br>' +
    '• $ff^{-1}(x) = f^{-1}f(x) = x$.<br>' +
    '• The graph of $f^{-1}$ is the reflection of $f$ in $y = x$.<br><br>' +
    '<b>Watch Out!</b><br>' +
    '$fg(x) \\neq gf(x)$ — composition is NOT commutative.',
  content_zh:
    '<b>仅 Higher</b><br><br>' +
    '<b>知识回顾</b><br>' +
    '• 函数符号：$f(x) = 2x + 3$。<br>' +
    '• 复合函数：$fg(x) = f(g(x))$，先 $g$ 后 $f$。<br>' +
    '• 反函数：$f^{-1}(x)$，交换 $x, y$ 后解出。<br>' +
    '• $f^{-1}$ 图像是 $f$ 关于 $y = x$ 的对称。<br><br>' +
    '<b>注意！</b>$fg(x) \\neq gf(x)$。'
});

add('edexcel', '3.2', 'examples', {
  content:
    '<b>Worked Example</b> [5 marks]<br>' +
    '$f(x) = 3x - 1$, $g(x) = x^2 + 4$.<br>' +
    '(a) Find $gf(2)$. (b) Find $fg(x)$. (c) Find $f^{-1}(x)$.<br><br>' +
    '<b>Solution:</b><br>' +
    '(a) $f(2) = 5$, $g(5) = 29$. So $gf(2) = 29$.<br>' +
    '(b) $fg(x) = f(x^2 + 4) = 3(x^2 + 4) - 1 = 3x^2 + 11$.<br>' +
    '(c) $y = 3x - 1$ → $x = 3y - 1$ → $y = \\frac{x + 1}{3}$.<br>' +
    '$f^{-1}(x) = \\frac{x + 1}{3}$.',
  content_zh:
    '<b>经典例题</b> [5 分]<br>' +
    '$f(x) = 3x-1$, $g(x) = x^2+4$。<br>' +
    '(a) $gf(2)$ (b) $fg(x)$ (c) $f^{-1}(x)$<br><br>' +
    '<b>解答：</b>(a) $f(2)=5, g(5)=29$<br>' +
    '(b) $3x^2 + 11$<br>' +
    '(c) $f^{-1}(x) = \\frac{x+1}{3}$'
});

// ── Edexcel 3.3 Graphs ──
add('edexcel', '3.3', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Linear</b>: $y = mx + c$. Straight line.<br>' +
    '• <b>Quadratic</b>: $y = ax^2 + bx + c$. Parabola.<br>' +
    '• <b>Cubic</b>: $y = ax^3 + ...$. S-shaped.<br>' +
    '• <b>Reciprocal</b>: $y = \\frac{a}{x}$. Hyperbola with asymptotes along axes.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Plot graphs from tables of values.<br>' +
    '• Find solutions graphically (intersections with $x$-axis or other curves).<br>' +
    '• Read off and interpret gradients, intercepts, and turning points.<br><br>' +
    '<b>Higher Only</b><br>' +
    '• <b>Exponential</b>: $y = a^x$ (growth), $y = a^{-x}$ (decay).<br>' +
    '• <b>Trig graphs</b>: $\\sin x$, $\\cos x$, $\\tan x$ with period and amplitude.<br>' +
    '• <b>Transformations</b>: $f(x) + a$ (up), $f(x + a)$ (left), $af(x)$ (vertical stretch), $f(ax)$ (horizontal compress).<br>' +
    '• <b>Tangent to a curve</b>: draw tangent, calculate gradient.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>线性</b>：$y = mx + c$。直线。<br>' +
    '• <b>二次</b>：$y = ax^2 + bx + c$。抛物线。<br>' +
    '• <b>三次</b>：$y = ax^3 + ...$。S 形曲线。<br>' +
    '• <b>反比例</b>：$y = \\frac{a}{x}$。渐近线沿坐标轴的双曲线。<br>' +
    '<br>' +
    '<b>关键技能</b><br>' +
    '• 根据数值表绘制图表。<br>' +
    '• 利用图表寻找解（与 $x$ 轴或其他曲线的交点）。<br>' +
    '• 读取并解释斜率、截距和拐点。<br>' +
    '<br>' +
    '<b>仅 Higher</b><br>' +
    '• <b>指数</b>：$y = a^x$（增长），$y = a^{-x}$（衰减）。<br>' +
    '• <b>三角函数图表</b>：带有周期和振幅的 $\\sin x$，$\\cos x$，$\\tan x$。<br>' +
    '• <b>变换</b>：$f(x) + a$（向上），$f(x + a)$（向左），$af(x)$（垂直拉伸），$f(ax)$（水平压缩）。<br>' +
    '• <b>曲线的切线</b>：绘制切线，计算斜率。'
});

add('edexcel', '3.3', 'examples', {
  content:
    '<b>Worked Example</b> [4 marks]<br>' +
    'The graph of $y = f(x)$ has a maximum at $(2, 5)$. Write down the coordinates of the maximum of:<br>' +
    '(a) $y = f(x) + 3$ &nbsp;&nbsp; (b) $y = f(x - 4)$ &nbsp;&nbsp; (c) $y = -f(x)$<br><br>' +
    '<b>Solution:</b><br>' +
    '(a) Shift up 3: $(2, 8)$<br>' +
    '(b) Shift right 4: $(6, 5)$<br>' +
    '(c) Reflect in $x$-axis: $(2, -5)$ — this becomes a <b>minimum</b>.<br><br>' +
    '<b>Exam Tip:</b> $f(x - a)$ shifts RIGHT, $f(x + a)$ shifts LEFT. The sign is opposite to what you might expect.',
  content_zh:
    '<b>经典例题</b> [4 分]<br>' +
    '$y = f(x)$ 的图像在 $(2, 5)$ 处有一个极大值点。写出以下函数极大值点的坐标：<br>' +
    '(a) $y = f(x) + 3$ &nbsp;&nbsp; (b) $y = f(x - 4)$ &nbsp;&nbsp; (c) $y = -f(x)$<br>' +
    '<br>' +
    '<b>解答：</b><br>' +
    '(a) 向上平移 3 个单位：$(2, 8)$<br>' +
    '(b) 向右平移 4 个单位：$(6, 5)$<br>' +
    '(c) 关于 $x$ 轴翻折：$(2, -5)$ —— 这会变成一个<b>极小值点</b>。<br>' +
    '<br>' +
    '<b>考试技巧：</b>$f(x - a)$ 向右平移，$f(x + a)$ 向左平移。符号与你预期的相反。'
});

// ── Edexcel 3.4 Calculus ──
add('edexcel', '3.4', 'knowledge', {
  content:
    '<b>Higher Only</b><br><br>' +
    '<b>Recap</b><br>' +
    '• <b>Differentiation</b>: if $y = ax^n$, then $\\frac{dy}{dx} = anx^{n-1}$.<br>' +
    '• $\\frac{dy}{dx}$ gives the <b>gradient of the curve</b> at any point.<br>' +
    '• <b>Turning points</b>: set $\\frac{dy}{dx} = 0$.<br>' +
    '• Nature: $\\frac{d^2y}{dx^2} > 0$ → min; $\\frac{d^2y}{dx^2} < 0$ → max.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Differentiate polynomials.<br>' +
    '• Find and classify turning points.<br>' +
    '• Find the equation of a tangent at a given point.<br><br>' +
    '<b>Exam Tip</b><br>' +
    'For tangent equation: find $\\frac{dy}{dx}$ at the point (= gradient $m$), then use $y - y_1 = m(x - x_1)$.',
  content_zh:
    '<b>仅 Higher</b><br>' +
    '<br>' +
    '<b>知识回顾</b><br>' +
    '• <b>求导</b>：如果 $y = ax^n$，那么 $\\frac{dy}{dx} = anx^{n-1}$。<br>' +
    '• $\\frac{dy}{dx}$ 给出了曲线在任意点处的<b>斜率</b>。<br>' +
    '• <b>拐点</b>：令 $\\frac{dy}{dx} = 0$。<br>' +
    '• 性质：$\\frac{d^2y}{dx^2} > 0$ → 极小值；$\\frac{d^2y}{dx^2} < 0$ → 极大值。<br>' +
    '<br>' +
    '<b>关键技能</b><br>' +
    '• 多项式求导。<br>' +
    '• 寻找并分类拐点。<br>' +
    '• 在给定点处求切线方程。<br>' +
    '<br>' +
    '<b>考试技巧</b><br>' +
    '对于切线方程：求出该点处的 $\\frac{dy}{dx}$（即斜率 $m$），然后使用 $y - y_1 = m(x - x_1)$。'
});

add('edexcel', '3.4', 'examples', {
  content:
    '<b>Worked Example</b> [5 marks]<br>' +
    '$y = x^3 - 6x^2 + 9x + 2$. Find the turning points and determine their nature.<br><br>' +
    '<b>Solution:</b><br>' +
    '$\\frac{dy}{dx} = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x-1)(x-3)$<br>' +
    'Set $= 0$: $x = 1$ or $x = 3$.<br><br>' +
    '$\\frac{d^2y}{dx^2} = 6x - 12$<br>' +
    'At $x = 1$: $6 - 12 = -6 < 0$ → <b>maximum</b>. $y = 1 - 6 + 9 + 2 = 6$.<br>' +
    'At $x = 3$: $18 - 12 = 6 > 0$ → <b>minimum</b>. $y = 27 - 54 + 27 + 2 = 2$.<br><br>' +
    'Max $(1, 6)$, Min $(3, 2)$.',
  content_zh:
    '<b>经典例题</b> [5 分]<br>' +
    '$y = x^3 - 6x^2 + 9x + 2$。找到拐点并确定其性质。<br>' +
    '<br>' +
    '<b>解答：</b><br>' +
    '$\\frac{dy}{dx} = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x-1)(x-3)$<br>' +
    '令其 $= 0$：$x = 1$ 或 $x = 3$。<br>' +
    '<br>' +
    '$\\frac{d^2y}{dx^2} = 6x - 12$<br>' +
    '当 $x = 1$ 时：$6 - 12 = -6 < 0$ → <b>极大值</b>。$y = 1 - 6 + 9 + 2 = 6$。<br>' +
    '当 $x = 3$ 时：$18 - 12 = 6 > 0$ → <b>极小值</b>。$y = 27 - 54 + 27 + 2 = 2$。<br>' +
    '<br>' +
    '极大值点 $(1, 6)$，极小值点 $(3, 2)$。'
});

/* OUTPUT SQL */
console.log('-- Section content seed: CIE Ch3 + Edexcel Ch3');
console.log('-- Generated ' + edits.length + ' rows\n');
edits.forEach(function(e) {
  var j = JSON.stringify(e.data).replace(/'/g, "''");
  console.log("INSERT INTO section_edits (board, section_id, module, data) VALUES ('" + e.board + "', '" + e.section_id + "', '" + e.module + "', '" + j + "'::jsonb) ON CONFLICT (board, section_id, module) DO UPDATE SET data = EXCLUDED.data, updated_at = now();");
});
console.log('\n-- Done: ' + edits.length + ' rows upserted');
