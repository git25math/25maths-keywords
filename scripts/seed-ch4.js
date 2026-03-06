#!/usr/bin/env node
// Seed: CIE Ch4 (Geometry) + Edexcel Ch4 (Geometry & Trigonometry)
// Usage: node scripts/seed-ch4.js > scripts/seed-ch4.sql

var edits = [];
function add(board, id, module, data) {
  edits.push({ board: board, section_id: id, module: module, data: data });
}

/* ══════════════════════════════════════════════════
   CIE 0580 — Chapter 4: Geometry (4.1 – 4.8)
   ══════════════════════════════════════════════════ */

// ── 4.1 Geometrical terms ──
add('cie', '4.1', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• A <b>point</b> has no size. A <b>line</b> extends infinitely in both directions. A <b>line segment</b> has two endpoints.<br>' +
    '• A <b>ray</b> starts at a point and extends infinitely in one direction.<br>' +
    '• <b>Parallel lines</b> ($\\parallel$) never meet. <b>Perpendicular lines</b> ($\\perp$) meet at $90°$.<br>' +
    '• <b>Types of angle</b>: acute ($< 90°$), right ($= 90°$), obtuse ($90° < \\theta < 180°$), reflex ($> 180°$).<br>' +
    '• <b>Polygon</b>: a closed 2D shape with straight sides. <b>Regular polygon</b>: all sides and angles equal.<br>' +
    '• <b>Diagonal</b>: a line joining two non-adjacent vertices.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Identify and name types of triangles (scalene, isosceles, equilateral, right-angled).<br>' +
    '• Identify quadrilaterals and their properties (square, rectangle, parallelogram, rhombus, trapezium, kite).<br>' +
    '• Use correct notation: $\\overline{AB}$ for a line segment, $\\angle ABC$ for an angle.<br><br>' +
    '<b>Exam Tip</b><br>' +
    'Know the properties of each special quadrilateral — examiners often test "which shape has exactly one pair of parallel sides?" (trapezium).',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>点</b>没有大小。<b>直线</b>两端无限延伸。<b>线段</b>有两个端点。<br>' +
    '• <b>平行线</b>（$\\parallel$）永不相交。<b>垂线</b>（$\\perp$）成 $90°$。<br>' +
    '• 角的分类：锐角（$< 90°$）、直角（$= 90°$）、钝角（$90°$~$180°$）、优角（$> 180°$）。<br>' +
    '• <b>多边形</b>：直边封闭图形。<b>正多边形</b>：边和角都相等。<br><br>' +
    '<b>考试技巧</b><br>' +
    '熟记每种特殊四边形的性质——"恰好一组平行边"是梯形。'
});

add('cie', '4.1', 'examples', {
  content:
    '<b>Worked Example</b> [3 marks]<br>' +
    'A quadrilateral has two pairs of equal adjacent sides but its diagonals are NOT equal. Name the shape and state its properties.<br><br>' +
    '<b>Solution:</b><br>' +
    'The shape is a <b>kite</b>.<br>' +
    'Properties: two pairs of equal adjacent sides, one pair of equal angles, diagonals cross at right angles, one diagonal bisects the other.<br><br>' +
    '<b>Exam Tip:</b> "Adjacent" means next to each other — not opposite.',
  content_zh:
    '<b>经典例题</b> [3 分]<br>' +
    '一个四边形有两组相邻等边但对角线不等。命名并说明性质。<br><br>' +
    '<b>解答：</b><b>筝形（Kite）</b>。性质：两组相邻等边、一组对角相等、对角线互相垂直、一条对角线平分另一条。'
});

// ── 4.2 Geometrical constructions ──
add('cie', '4.2', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Ruler and compasses only</b> — do NOT erase construction arcs.<br>' +
    '• <b>Perpendicular bisector</b> of $AB$: set compass > half $AB$, draw arcs from $A$ and $B$, join intersections.<br>' +
    '• <b>Angle bisector</b>: from vertex draw arc cutting both arms, then arcs from those points, join vertex to intersection.<br>' +
    '• <b>Perpendicular from a point to a line</b>: from the point draw arcs cutting the line at two points, then perpendicular bisector of those two points.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Construct triangles given SSS, SAS, or ASA.<br>' +
    '• Construct a $60°$ angle (equilateral triangle construction).<br>' +
    '• Construct a $90°$ angle (perpendicular bisector).<br><br>' +
    '<b>Watch Out!</b><br>' +
    'Always leave your construction arcs visible. The examiner needs to see them to award marks.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• 只用直尺和圆规——<b>不要擦掉作图弧线</b>。<br>' +
    '• <b>中垂线</b>：圆规张开大于线段一半，分别从两端画弧交于两点，连线。<br>' +
    '• <b>角平分线</b>：从顶点画弧交两臂，再从两交点画弧，连接顶点与交点。<br><br>' +
    '<b>注意！</b><br>' +
    '必须保留作图弧线，考官需要看到才能给分。'
});

add('cie', '4.2', 'examples', {
  content:
    '<b>Worked Example</b> [3 marks]<br>' +
    'Construct triangle $ABC$ where $AB = 8$ cm, $AC = 6$ cm, $BC = 7$ cm.<br><br>' +
    '<b>Solution:</b><br>' +
    '1. Draw $AB = 8$ cm.<br>' +
    '2. Set compass to 6 cm, draw arc from $A$.<br>' +
    '3. Set compass to 7 cm, draw arc from $B$.<br>' +
    '4. Mark intersection as $C$. Join $AC$ and $BC$.<br><br>' +
    '<b>Exam Tip:</b> Measure your base line accurately — a 1 mm error at the start leads to bigger errors later.',
  content_zh:
    '<b>经典例题</b> [3 分]<br>' +
    '作三角形 $ABC$：$AB = 8$ cm，$AC = 6$ cm，$BC = 7$ cm。<br><br>' +
    '<b>解答：</b>1. 画 $AB = 8$ cm。2. 圆规开 6 cm，从 $A$ 画弧。3. 圆规开 7 cm，从 $B$ 画弧。4. 交点为 $C$，连线。'
});

// ── 4.3 Scale drawings and bearings ──
add('cie', '4.3', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• A <b>scale drawing</b> uses a ratio, e.g. $1 : 20\\,000$ means 1 cm on the map = $20\\,000$ cm = 200 m in real life.<br>' +
    '• <b>Bearings</b> are measured clockwise from <b>North</b>, always written as <b>three figures</b>: e.g. $045°$, $210°$, $008°$.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Convert between map distances and real distances using the scale.<br>' +
    '• Measure and draw bearings using a protractor.<br>' +
    '• Find a <b>back bearing</b>: add or subtract $180°$.<br><br>' +
    '<b>Watch Out!</b><br>' +
    'Bearings are always FROM a point. "The bearing of $B$ from $A$" means stand at $A$ and measure the angle to $B$.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>比例图</b>：比例尺如 $1:20\\,000$ 表示图上 1 cm = 实际 200 m。<br>' +
    '• <b>方位角</b>：从<b>北方</b>顺时针量，必须写成<b>三位数</b>：如 $045°$，$210°$。<br><br>' +
    '<b>关键技巧</b><br>' +
    '• 反方位角：加或减 $180°$。<br>' +
    '• "$B$ 从 $A$ 的方位角"——站在 $A$ 看 $B$。'
});

add('cie', '4.3', 'examples', {
  content:
    '<b>Worked Example</b> [3 marks]<br>' +
    'The bearing of $B$ from $A$ is $065°$. Find the bearing of $A$ from $B$.<br><br>' +
    '<b>Solution:</b><br>' +
    'Back bearing = $065° + 180° = 245°$<br><br>' +
    '<b>Worked Example 2</b> [2 marks]<br>' +
    'On a map with scale $1 : 50\\,000$, two towns are 6.4 cm apart. Find the real distance in km.<br><br>' +
    '<b>Solution:</b><br>' +
    '$6.4 \\times 50\\,000 = 320\\,000$ cm $= 3.2$ km',
  content_zh:
    '<b>经典例题</b> [3 分]<br>' +
    '$B$ 从 $A$ 的方位角为 $065°$。求 $A$ 从 $B$ 的方位角。<br><br>' +
    '<b>解答：</b>反方位角 = $065° + 180° = 245°$<br><br>' +
    '<b>经典例题 2</b> [2 分]<br>' +
    '比例尺 $1:50\\,000$ 的地图上两镇相距 6.4 cm。求实际距离。<br><br>' +
    '<b>解答：</b>$6.4 \\times 50\\,000 = 320\\,000$ cm $= 3.2$ km'
});

// ── 4.4 Similarity and congruence ──
add('cie', '4.4', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Congruent</b> shapes are identical in shape AND size. Tests: SSS, SAS, ASA, RHS.<br>' +
    '• <b>Similar</b> shapes have the same shape but different sizes. Corresponding angles are equal; sides are in the same ratio.<br>' +
    '• <b>Scale factor</b> $k$: if lengths scale by $k$, then areas scale by $k^2$ and volumes by $k^3$.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Prove two triangles are similar (AA, SSS ratio, or SAS ratio).<br>' +
    '• Use scale factors to find missing lengths, areas, and volumes.<br>' +
    '• Area ratio $= \\left(\\frac{l_1}{l_2}\\right)^2$. Volume ratio $= \\left(\\frac{l_1}{l_2}\\right)^3$.<br><br>' +
    '<b>Watch Out!</b><br>' +
    'Make sure you match <b>corresponding</b> sides. Write the triangles in the correct order: $\\triangle ABC \\sim \\triangle DEF$ means $A \\leftrightarrow D$, $B \\leftrightarrow E$, $C \\leftrightarrow F$.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>全等</b>：形状和大小完全相同。判定：SSS、SAS、ASA、RHS。<br>' +
    '• <b>相似</b>：形状相同、大小不同。对应角相等，对应边成比例。<br>' +
    '• 缩放因子 $k$：长度比 $k$，面积比 $k^2$，体积比 $k^3$。<br><br>' +
    '<b>注意！</b><br>' +
    '要对应正确的边。$\\triangle ABC \\sim \\triangle DEF$ 表示 $A \\leftrightarrow D$。'
});

add('cie', '4.4', 'examples', {
  content:
    '<b>Worked Example</b> [4 marks]<br>' +
    'Two similar cylinders have heights 10 cm and 15 cm. The smaller has volume $200\\text{ cm}^3$. Find the volume of the larger.<br><br>' +
    '<b>Solution:</b><br>' +
    'Length scale factor $k = \\frac{15}{10} = 1.5$<br>' +
    'Volume scale factor $= k^3 = 1.5^3 = 3.375$<br>' +
    'Volume $= 200 \\times 3.375 = 675\\text{ cm}^3$<br><br>' +
    '<b>Exam Tip:</b> For area/volume problems, always find the <b>length</b> scale factor first, then square or cube it.',
  content_zh:
    '<b>经典例题</b> [4 分]<br>' +
    '两个相似圆柱高分别为 10 cm 和 15 cm。小圆柱体积 $200\\text{ cm}^3$。求大圆柱体积。<br><br>' +
    '<b>解答：</b>长度比 $k = 1.5$<br>' +
    '体积比 = $k^3 = 3.375$<br>' +
    '体积 $= 200 \\times 3.375 = 675\\text{ cm}^3$'
});

// ── 4.5 Symmetry ──
add('cie', '4.5', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Line symmetry</b>: a mirror line divides the shape into two identical halves.<br>' +
    '• <b>Rotational symmetry</b>: the shape looks the same after rotation of less than $360°$. The <b>order</b> is how many times it matches in one full turn.<br>' +
    '• Regular polygon with $n$ sides: $n$ lines of symmetry, rotational symmetry of order $n$.<br>' +
    '• A circle has infinite lines of symmetry.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Draw lines of symmetry on shapes.<br>' +
    '• State the order of rotational symmetry.<br>' +
    '• Complete a shape given a line of symmetry or rotational symmetry.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>轴对称</b>：镜像线将图形分成完全相同的两半。<br>' +
    '• <b>旋转对称</b>：旋转不到 $360°$ 后图形与原图重合。<b>阶数</b> = 一圈内重合次数。<br>' +
    '• 正 $n$ 边形：$n$ 条对称轴，旋转对称阶数为 $n$。'
});

add('cie', '4.5', 'examples', {
  content:
    '<b>Worked Example</b> [2 marks]<br>' +
    'State the number of lines of symmetry and the order of rotational symmetry of a regular hexagon.<br><br>' +
    '<b>Solution:</b><br>' +
    'Lines of symmetry = $6$<br>' +
    'Order of rotational symmetry = $6$<br><br>' +
    '<b>Worked Example 2</b> [2 marks]<br>' +
    'A shape has rotational symmetry of order 3 but NO lines of symmetry. Give an example.<br><br>' +
    '<b>Solution:</b><br>' +
    'A <b>triskelion</b> (or three identical arms arranged around a centre, like a recycling symbol).',
  content_zh:
    '<b>经典例题</b> [2 分]<br>' +
    '说明正六边形的对称轴数和旋转对称阶数。<br><br>' +
    '<b>解答：</b>对称轴 = $6$，旋转对称阶数 = $6$<br><br>' +
    '<b>经典例题 2</b> [2 分]<br>' +
    '一个图形旋转对称阶数为 3 但无轴对称。举例。<br><br>' +
    '<b>解答：</b>三臂旋转图案（如回收标志）。'
});

// ── 4.6 Angles ──
add('cie', '4.6', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• Angles on a <b>straight line</b> sum to $180°$.<br>' +
    '• Angles at a <b>point</b> sum to $360°$.<br>' +
    '• <b>Vertically opposite</b> angles are equal.<br>' +
    '• Angles in a <b>triangle</b> sum to $180°$. Angles in a <b>quadrilateral</b> sum to $360°$.<br>' +
    '• <b>Interior angle</b> of a regular $n$-gon $= \\frac{(n-2) \\times 180°}{n}$.<br>' +
    '• <b>Exterior angle</b> of a regular $n$-gon $= \\frac{360°}{n}$.<br>' +
    '• Interior + exterior $= 180°$.<br><br>' +
    '<b>Parallel line angles</b><br>' +
    '• <b>Alternate</b> angles ($Z$-shape) are equal.<br>' +
    '• <b>Corresponding</b> angles ($F$-shape) are equal.<br>' +
    '• <b>Co-interior</b> (allied) angles ($C$-shape) sum to $180°$.<br><br>' +
    '<b>Exam Tip</b><br>' +
    'Always give <b>reasons</b> for each step, e.g. "angles on a straight line", "alternate angles".',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• 直线上的角之和 = $180°$。一点处的角之和 = $360°$。<br>' +
    '• 对顶角相等。三角形内角和 = $180°$。四边形内角和 = $360°$。<br>' +
    '• 正 $n$ 边形内角 = $\\frac{(n-2) \\times 180°}{n}$，外角 = $\\frac{360°}{n}$。<br><br>' +
    '<b>平行线角</b><br>' +
    '• 内错角（Z 形）相等。同位角（F 形）相等。同旁内角（C 形）互补 = $180°$。<br><br>' +
    '<b>考试技巧</b><br>' +
    '每步都必须写<b>理由</b>，如"直线上的角"、"内错角"。'
});

add('cie', '4.6', 'examples', {
  content:
    '<b>Worked Example 1</b> [3 marks]<br>' +
    'A regular polygon has interior angle $156°$. Find the number of sides.<br><br>' +
    '<b>Solution:</b><br>' +
    'Exterior angle $= 180° - 156° = 24°$<br>' +
    '$n = \\frac{360°}{24°} = 15$ sides<br><br>' +
    '<b>Worked Example 2</b> [3 marks]<br>' +
    'In the diagram, $AB \\parallel CD$. Angle $ABE = 55°$ and angle $BED = 90°$. Find angle $CDE$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$\\angle BEA = 180° - 90° - 55° = 35°$ (angles in triangle)<br>' +
    '$\\angle CDE = \\angle BEA = 35°$ (alternate angles, $AB \\parallel CD$)',
  content_zh:
    '<b>经典例题 1</b> [3 分]<br>' +
    '正多边形内角 $156°$，求边数。<br><br>' +
    '<b>解答：</b>外角 = $180° - 156° = 24°$，$n = \\frac{360°}{24°} = 15$<br><br>' +
    '<b>经典例题 2</b> [3 分]<br>' +
    '$AB \\parallel CD$，$\\angle ABE = 55°$，$\\angle BED = 90°$。求 $\\angle CDE$。<br><br>' +
    '<b>解答：</b>$\\angle BEA = 35°$（三角形内角和），$\\angle CDE = 35°$（内错角）'
});

// ── 4.7 Circle theorems ──
add('cie', '4.7', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Parts of a circle</b>: radius, diameter, chord, arc, sector, segment, tangent, secant.<br>' +
    '• Angle at the <b>centre</b> is <b>twice</b> the angle at the circumference (from the same arc).<br>' +
    '• Angle in a <b>semicircle</b> $= 90°$.<br>' +
    '• Angles in the <b>same segment</b> are equal.<br>' +
    '• <b>Opposite angles</b> in a cyclic quadrilateral sum to $180°$.<br>' +
    '• A <b>tangent</b> is perpendicular to the radius at the point of contact.<br>' +
    '• <b>Two tangents</b> from an external point are equal in length.<br>' +
    '• <b>Alternate segment theorem</b>: the angle between a tangent and a chord equals the angle in the alternate segment.<br><br>' +
    '<b>Exam Tip</b><br>' +
    'Learn the exact wording of each theorem — marks are given for correct mathematical language.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• 圆心角 = 2 倍同弧上的圆周角。<br>' +
    '• 半圆中的角 = $90°$。<br>' +
    '• 同弧上的圆周角相等。<br>' +
    '• 圆内接四边形对角互补 = $180°$。<br>' +
    '• 切线 $\\perp$ 半径。外部一点两条切线等长。<br>' +
    '• <b>交替弓形定理</b>：切线与弦的夹角等于交替弓形中的圆周角。<br><br>' +
    '<b>考试技巧</b><br>' +
    '每个定理的准确措辞都要掌握——考官按用语给分。'
});

add('cie', '4.7', 'examples', {
  content:
    '<b>Worked Example</b> [4 marks]<br>' +
    '$O$ is the centre of the circle. $A$, $B$, $C$ are on the circumference. Angle $AOB = 124°$. Find angle $ACB$ and angle $OAB$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$\\angle ACB = \\frac{124°}{2} = 62°$ (angle at centre = twice angle at circumference)<br>' +
    '$\\triangle OAB$ is isosceles ($OA = OB$ = radius).<br>' +
    '$\\angle OAB = \\frac{180° - 124°}{2} = \\frac{56°}{2} = 28°$<br><br>' +
    '<b>Exam Tip:</b> Always state the circle theorem used. Draw radii if they help — $OA = OB$ = radius gives isosceles triangles.',
  content_zh:
    '<b>经典例题</b> [4 分]<br>' +
    '$O$ 为圆心，$A, B, C$ 在圆上。$\\angle AOB = 124°$。求 $\\angle ACB$ 和 $\\angle OAB$。<br><br>' +
    '<b>解答：</b>$\\angle ACB = 62°$（圆心角 = 2 × 圆周角）<br>' +
    '$\\triangle OAB$ 等腰（$OA = OB$），$\\angle OAB = \\frac{56°}{2} = 28°$'
});

// ── 4.8 Constructions and loci ──
add('cie', '4.8', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• A <b>locus</b> is the set of all points satisfying a condition.<br>' +
    '• Locus equidistant from a <b>point</b> → <b>circle</b>.<br>' +
    '• Locus equidistant from a <b>line</b> → <b>pair of parallel lines</b>.<br>' +
    '• Locus equidistant from <b>two points</b> → <b>perpendicular bisector</b>.<br>' +
    '• Locus equidistant from <b>two lines</b> → <b>angle bisector</b>.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Combine multiple loci to find a region (often shaded).<br>' +
    '• "Within 3 cm of $A$" → circle radius 3 cm centred on $A$.<br>' +
    '• "Closer to $AB$ than $AC$" → angle bisector of $\\angle BAC$.<br>' +
    '• "Closer to $A$ than $B$" → perpendicular bisector of $AB$.<br><br>' +
    '<b>Exam Tip</b><br>' +
    'Read every condition. The answer is often the intersection of two or more loci.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>轨迹</b>：满足条件的所有点的集合。<br>' +
    '• 到一点等距 → 圆。到一线等距 → 平行线。<br>' +
    '• 到两点等距 → 中垂线。到两线等距 → 角平分线。<br><br>' +
    '<b>关键技巧</b><br>' +
    '• "距 $A$ 3 cm 内" → 以 $A$ 为圆心、3 cm 为半径的圆。<br>' +
    '• 答案常是两条或多条轨迹的交集。'
});

add('cie', '4.8', 'examples', {
  content:
    '<b>Worked Example</b> [4 marks]<br>' +
    'In triangle $ABC$, find the region that is: (i) closer to $A$ than $B$, (ii) less than 4 cm from $C$, (iii) closer to $AC$ than $BC$.<br><br>' +
    '<b>Solution:</b><br>' +
    '(i) Construct the perpendicular bisector of $AB$. Region on $A$\'s side.<br>' +
    '(ii) Draw circle centre $C$, radius 4 cm. Region inside the circle.<br>' +
    '(iii) Construct the angle bisector of $\\angle ACB$. Region on $AC$\'s side.<br>' +
    'The answer is the intersection of all three regions.<br><br>' +
    '<b>Exam Tip:</b> Use light shading or cross-hatching to clearly show the required region.',
  content_zh:
    '<b>经典例题</b> [4 分]<br>' +
    '在 $\\triangle ABC$ 中找满足以下条件的区域：(i) 离 $A$ 比 $B$ 近，(ii) 距 $C$ 不超过 4 cm，(iii) 离 $AC$ 比 $BC$ 近。<br><br>' +
    '<b>解答：</b>(i) $AB$ 的中垂线，$A$ 侧。(ii) 以 $C$ 为心 4 cm 为半径的圆内。(iii) $\\angle ACB$ 的角平分线，$AC$ 侧。答案是三者交集。'
});

/* ══════════════════════════════════════════════════
   Edexcel 4MA1 — Chapter 4: Geometry and trigonometry (4.1 – 4.11)
   ══════════════════════════════════════════════════ */

// ── Edexcel 4.1 Angles, lines and triangles ──
add('edexcel', '4.1', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• Angles on a straight line = $180°$. Angles at a point = $360°$.<br>' +
    '• Vertically opposite angles are equal.<br>' +
    '• Angles in a triangle = $180°$.<br>' +
    '• Exterior angle of a triangle = sum of the two interior opposite angles.<br>' +
    '• <b>Parallel line angles</b>: alternate (equal), corresponding (equal), co-interior (sum $180°$).<br>' +
    '• <b>Isosceles triangle</b>: two equal sides → two equal base angles.<br>' +
    '• <b>Equilateral triangle</b>: all sides equal → all angles $60°$.<br><br>' +
    '<b>Exam Tip</b><br>' +
    'Always state your geometric reason in full, e.g. "alternate angles are equal" not just "alternate".',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• 直线上角之和 = $180°$。一点角之和 = $360°$。对顶角相等。<br>' +
    '• 三角形内角和 = $180°$。外角 = 两个不相邻内角之和。<br>' +
    '• 平行线：内错角相等、同位角相等、同旁内角互补。<br>' +
    '• 等腰三角形：两等边 → 两等底角。等边三角形：全 $60°$。<br><br>' +
    '<b>考试技巧</b><br>' +
    '必须完整写出几何理由。'
});

add('edexcel', '4.1', 'examples', {
  content:
    '<b>Worked Example</b> [3 marks]<br>' +
    'In the diagram, $PQ \\parallel RS$. Angle $QPT = 72°$, angle $PTS = 125°$. Find angle $TSR$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$\\angle PTR = 180° - 125° = 55°$ (angles on a straight line)<br>' +
    '$\\angle TPQ = 72°$ and $PQ \\parallel RS$<br>' +
    '$\\angle PTS = \\angle QPT + \\angle PTR = 72° + 55°$ ✓ (check: $127° \\neq 125°$... let me reconsider)<br>' +
    'Using co-interior angles: $\\angle TSR = 180° - 72° = 108°$... <br>' +
    'Actually: $\\angle RTP = 125° - 72° = 53°$ (alternate angle $\\angle QPT = \\angle PTR$... )<br>' +
    'Better approach: $\\angle TSR = 180° - (125° - 72°) = 180° - 53° = 127°$<br>' +
    'Wait — co-interior with $\\angle QPT$: $\\angle TSR + 72° = 180°$... That only works if $T$ is on the transversal.<br><br>' +
    'Cleaner: $\\angle QPT = 72°$, $\\angle PTS = 125°$. Since $PQ \\parallel RS$:<br>' +
    '$\\angle RST = 360° - 125° - 72° - (\\text{reflex...})$<br><br>' +
    'The key relationship: $\\angle QPT + \\angle PTS + \\angle TSR = 360°$ (co-interior angles add to $180°$ on same side)<br>' +
    'No — simply: $\\angle QPS = \\angle QPT + \\angle TPS$.<br><br>' +
    'Let\'s use: alternate angle $\\angle RPT = \\angle QPT = 72°$ is NOT correct since $R$ is not specified.<br><br>' +
    '<i>(Diagrams needed for full solution — in exam, use the given diagram.)</i>',
  content_zh:
    '<b>经典例题</b> [3 分]<br>' +
    '（需要配合图形——考试中利用给定的图。）'
});

// Clean replacement for Edexcel 4.1 examples (UPSERT handles duplicate)
add('edexcel', '4.1', 'examples', {
  content:
    '<b>Worked Example</b> [3 marks]<br>' +
    'Two parallel lines are cut by a transversal. One of the co-interior angles is $63°$. Find the other co-interior angle.<br><br>' +
    '<b>Solution:</b><br>' +
    'Co-interior angles sum to $180°$.<br>' +
    'Other angle $= 180° - 63° = 117°$<br><br>' +
    '<b>Worked Example 2</b> [3 marks]<br>' +
    'In triangle $PQR$, angle $P = 2x$, angle $Q = 3x + 10°$, angle $R = x + 50°$. Find each angle.<br><br>' +
    '<b>Solution:</b><br>' +
    '$2x + 3x + 10 + x + 50 = 180$<br>' +
    '$6x + 60 = 180$ → $6x = 120$ → $x = 20$<br>' +
    '$P = 40°$, $Q = 70°$, $R = 70°$',
  content_zh:
    '<b>经典例题</b> [3 分]<br>' +
    '两平行线被截线所截，一个同旁内角为 $63°$，求另一个。<br><br>' +
    '<b>解答：</b>同旁内角互补：$180° - 63° = 117°$<br><br>' +
    '<b>经典例题 2</b> [3 分]<br>' +
    '$\\triangle PQR$ 中 $P = 2x$，$Q = 3x + 10°$，$R = x + 50°$。求各角。<br><br>' +
    '<b>解答：</b>$6x + 60 = 180$，$x = 20$。$P = 40°, Q = 70°, R = 70°$。'
});

// ── Edexcel 4.2 Polygons ──
add('edexcel', '4.2', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Interior angle sum</b> of an $n$-sided polygon $= (n - 2) \\times 180°$.<br>' +
    '• <b>Exterior angles</b> of any convex polygon sum to $360°$.<br>' +
    '• For a <b>regular</b> $n$-gon: each interior angle $= \\frac{(n-2) \\times 180°}{n}$, each exterior angle $= \\frac{360°}{n}$.<br>' +
    '• Interior angle + exterior angle $= 180°$.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Find the number of sides given an interior or exterior angle.<br>' +
    '• Find missing angles in irregular polygons using the angle sum.<br>' +
    '• Recognise and name polygons: pentagon (5), hexagon (6), heptagon (7), octagon (8), nonagon (9), decagon (10).<br><br>' +
    '<b>Watch Out!</b><br>' +
    'The formula $(n-2) \\times 180°$ gives the TOTAL interior angle sum, not each angle. Divide by $n$ only for regular polygons.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• $n$ 边形内角和 $= (n-2) \\times 180°$。外角和 $= 360°$。<br>' +
    '• 正 $n$ 边形每个内角 $= \\frac{(n-2) \\times 180°}{n}$，外角 $= \\frac{360°}{n}$。<br>' +
    '• 内角 + 外角 = $180°$。<br><br>' +
    '<b>注意！</b><br>' +
    '$(n-2) \\times 180°$ 是内角<b>总和</b>，只有正多边形才能除以 $n$ 求每个角。'
});

add('edexcel', '4.2', 'examples', {
  content:
    '<b>Worked Example 1</b> [2 marks]<br>' +
    'Each exterior angle of a regular polygon is $40°$. How many sides?<br><br>' +
    '<b>Solution:</b><br>' +
    '$n = \\frac{360°}{40°} = 9$ sides (nonagon)<br><br>' +
    '<b>Worked Example 2</b> [3 marks]<br>' +
    'Four angles of a pentagon are $108°$, $115°$, $92°$, and $130°$. Find the fifth angle.<br><br>' +
    '<b>Solution:</b><br>' +
    'Sum $= (5-2) \\times 180° = 540°$<br>' +
    'Fifth angle $= 540° - 108° - 115° - 92° - 130° = 95°$',
  content_zh:
    '<b>经典例题 1</b> [2 分]<br>' +
    '正多边形每个外角 $40°$，求边数。<br><br>' +
    '<b>解答：</b>$n = \\frac{360°}{40°} = 9$（九边形）<br><br>' +
    '<b>经典例题 2</b> [3 分]<br>' +
    '五边形四个角为 $108°, 115°, 92°, 130°$，求第五个角。<br><br>' +
    '<b>解答：</b>内角和 $= 540°$，第五个角 $= 540° - 445° = 95°$。'
});

// ── Edexcel 4.3 Symmetry ──
add('edexcel', '4.3', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Line symmetry</b>: a shape can be folded along a line so both halves match exactly.<br>' +
    '• <b>Rotational symmetry</b>: the shape looks the same after rotation less than $360°$.<br>' +
    '• <b>Order of rotational symmetry</b> = number of times shape matches itself in one full turn.<br><br>' +
    '<b>Key Shapes</b><br>' +
    '• Square: 4 lines, order 4. Rectangle: 2 lines, order 2.<br>' +
    '• Equilateral triangle: 3 lines, order 3. Isosceles triangle: 1 line, order 1.<br>' +
    '• Parallelogram: 0 lines, order 2. Rhombus: 2 lines, order 2.<br>' +
    '• Kite: 1 line, order 1. Trapezium (isosceles): 1 line, order 1.<br>' +
    '• Regular $n$-gon: $n$ lines, order $n$.<br><br>' +
    '<b>Exam Tip</b><br>' +
    'A parallelogram has NO lines of symmetry — a common mistake.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>轴对称</b>：沿线折叠两半重合。<b>旋转对称</b>：旋转后与原图重合。<br>' +
    '• 正方形：4 轴、4 阶。长方形：2 轴、2 阶。等边三角形：3 轴、3 阶。<br>' +
    '• 平行四边形：<b>0 轴</b>、2 阶（常见错误！）。菱形：2 轴、2 阶。<br><br>' +
    '<b>考试技巧</b><br>' +
    '平行四边形没有对称轴——这是常见错误。'
});

add('edexcel', '4.3', 'examples', {
  content:
    '<b>Worked Example</b> [2 marks]<br>' +
    'A shape has exactly 2 lines of symmetry and rotational symmetry of order 2. Name two possible shapes.<br><br>' +
    '<b>Solution:</b><br>' +
    '<b>Rectangle</b> and <b>rhombus</b>.<br><br>' +
    '<b>Exam Tip:</b> If a question says "exactly 2 lines", it rules out a square (which has 4).',
  content_zh:
    '<b>经典例题</b> [2 分]<br>' +
    '一个图形恰好有 2 条对称轴和 2 阶旋转对称。说出两种可能的图形。<br><br>' +
    '<b>解答：</b><b>长方形</b>和<b>菱形</b>。<br>' +
    '（正方形有 4 条对称轴，不符合"恰好 2 条"。）'
});

// ── Edexcel 4.4 Measures ──
add('edexcel', '4.4', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Metric units</b>: length (mm, cm, m, km), mass (g, kg, t), capacity (ml, l).<br>' +
    '• <b>Conversions</b>: $1\\text{ km} = 1000\\text{ m}$, $1\\text{ m} = 100\\text{ cm}$, $1\\text{ cm} = 10\\text{ mm}$.<br>' +
    '• $1\\text{ kg} = 1000\\text{ g}$, $1\\text{ tonne} = 1000\\text{ kg}$, $1\\text{ litre} = 1000\\text{ ml}$.<br>' +
    '• $1\\text{ m}^2 = 10\\,000\\text{ cm}^2$. $1\\text{ m}^3 = 1\\,000\\,000\\text{ cm}^3$.<br>' +
    '• <b>Compound measures</b>: speed $= \\frac{\\text{distance}}{\\text{time}}$, density $= \\frac{\\text{mass}}{\\text{volume}}$, pressure $= \\frac{\\text{force}}{\\text{area}}$.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Convert between units including area and volume conversions.<br>' +
    '• Use compound measure formulae to solve problems.<br>' +
    '• <b>Bounds</b> (Higher): a measurement of 5.3 cm to 1 d.p. has bounds $5.25 \\leq x < 5.35$.<br><br>' +
    '<b>Watch Out!</b><br>' +
    'For area: multiply conversion factor <b>twice</b>. $1\\text{ m}^2 = 100^2 = 10\\,000\\text{ cm}^2$. For volume: <b>three times</b>.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• 长度：mm → cm → m → km（×10, ×100, ×1000）。<br>' +
    '• 质量：g → kg → t（×1000）。容量：ml → l（×1000）。<br>' +
    '• 复合量度：速度 = $\\frac{距离}{时间}$，密度 = $\\frac{质量}{体积}$。<br>' +
    '• Higher：上下界——5.3 cm（1位小数）→ $5.25 \\leq x < 5.35$。<br><br>' +
    '<b>注意！</b><br>' +
    '面积换算要平方：$1\\text{ m}^2 = 10\\,000\\text{ cm}^2$。体积要立方。'
});

add('edexcel', '4.4', 'examples', {
  content:
    '<b>Worked Example 1</b> [3 marks]<br>' +
    'A car travels 135 km in 1 hour 30 minutes. Find the average speed in km/h.<br><br>' +
    '<b>Solution:</b><br>' +
    'Time $= 1.5$ hours<br>' +
    'Speed $= \\frac{135}{1.5} = 90$ km/h<br><br>' +
    '<b>Worked Example 2</b> (Higher) [3 marks]<br>' +
    '$p = 4.6$ (1 d.p.) and $q = 0.35$ (2 d.p.). Find the upper bound of $\\frac{p}{q}$.<br><br>' +
    '<b>Solution:</b><br>' +
    'Upper bound of $p = 4.65$. Lower bound of $q = 0.345$.<br>' +
    'Upper bound of $\\frac{p}{q} = \\frac{4.65}{0.345} = 13.478...$<br><br>' +
    '<b>Exam Tip:</b> For max of $\\frac{a}{b}$: use max $a$ and min $b$.',
  content_zh:
    '<b>经典例题 1</b> [3 分]<br>' +
    '汽车 1 小时 30 分钟行驶 135 km，求平均速度。<br><br>' +
    '<b>解答：</b>时间 = 1.5 小时，速度 = $\\frac{135}{1.5} = 90$ km/h<br><br>' +
    '<b>经典例题 2</b>（Higher）[3 分]<br>' +
    '$p = 4.6$（1 位小数），$q = 0.35$（2 位小数）。求 $\\frac{p}{q}$ 的上界。<br><br>' +
    '<b>解答：</b>$p$ 上界 = 4.65，$q$ 下界 = 0.345。$\\frac{4.65}{0.345} = 13.5$'
});

// ── Edexcel 4.5 Construction ──
add('edexcel', '4.5', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Construct</b> means use ruler and compasses only. Leave arcs visible.<br>' +
    '• <b>Perpendicular bisector</b>: from each end of a segment, draw arcs above and below, join intersections.<br>' +
    '• <b>Angle bisector</b>: from vertex draw arc on both arms, then equal arcs from those points, join to vertex.<br>' +
    '• Construct triangles given SSS, SAS, ASA.<br>' +
    '• Construct $60°$ from equilateral triangle. Construct $90°$ from perpendicular bisector.<br><br>' +
    '<b>Loci</b><br>' +
    '• Equidistant from a point → circle.<br>' +
    '• Equidistant from two points → perpendicular bisector.<br>' +
    '• Equidistant from two lines → angle bisector.<br><br>' +
    '<b>Watch Out!</b><br>' +
    '"Draw" allows any method. "Construct" means ruler and compasses only — protractors not allowed.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• "Construct" 只能用直尺和圆规，必须保留弧线。<br>' +
    '• 中垂线：从线段两端画弧交于两点，连线。<br>' +
    '• 角平分线：从顶点画弧交两臂，再画弧交叉，连线。<br><br>' +
    '<b>轨迹</b><br>' +
    '• 等距于一点 → 圆。等距于两点 → 中垂线。等距于两线 → 角平分线。<br><br>' +
    '<b>注意！</b><br>' +
    '"Draw" 可用任何方法。"Construct" 只能用直尺圆规，不能用量角器。'
});

add('edexcel', '4.5', 'examples', {
  content:
    '<b>Worked Example</b> [4 marks]<br>' +
    'A field is a rectangle $ABCD$ with $AB = 80$ m and $BC = 60$ m (scale: 1 cm = 10 m). A tree is planted so it is: (i) more than 50 m from $A$, (ii) closer to $AB$ than $CD$. Shade the region where the tree can be.<br><br>' +
    '<b>Solution:</b><br>' +
    'Scale: $AB = 8$ cm, $BC = 6$ cm.<br>' +
    '(i) Circle centre $A$, radius 5 cm. Region <b>outside</b> the arc.<br>' +
    '(ii) Perpendicular bisector of $AD$ (or $BC$). Region on $AB$\'s side (closer half).<br>' +
    'Shade the intersection.<br><br>' +
    '<b>Exam Tip:</b> Always convert to scale first. Use clear shading and label your loci.',
  content_zh:
    '<b>经典例题</b> [4 分]<br>' +
    '矩形 $ABCD$，$AB = 80$ m，$BC = 60$ m（比例尺 1 cm = 10 m）。树必须：(i) 距 $A$ 超过 50 m，(ii) 离 $AB$ 比 $CD$ 近。画出区域。<br><br>' +
    '<b>解答：</b>(i) 以 $A$ 为心、半径 5 cm 的弧外。(ii) $AD$（或 $BC$）中垂线的 $AB$ 侧。阴影为交集。'
});

// ── Edexcel 4.6 Circle properties ──
add('edexcel', '4.6', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Parts</b>: radius, diameter ($= 2r$), chord, arc, sector, segment, tangent.<br>' +
    '• A tangent is <b>perpendicular</b> to the radius at the point of contact.<br>' +
    '• Two tangents from an external point are <b>equal length</b>.<br><br>' +
    '<b>Higher Only — Circle Theorems</b><br>' +
    '• Angle at centre $= 2 \\times$ angle at circumference (same arc).<br>' +
    '• Angle in a semicircle $= 90°$.<br>' +
    '• Angles in the same segment are equal.<br>' +
    '• Opposite angles in a cyclic quadrilateral sum to $180°$.<br>' +
    '• <b>Alternate segment theorem</b>: angle between tangent and chord = angle in alternate segment.<br><br>' +
    '<b>Exam Tip</b><br>' +
    'Draw extra radii — they create isosceles triangles that help find angles.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• 圆的部分：半径、直径（$= 2r$）、弦、弧、扇形、弓形、切线。<br>' +
    '• 切线 $\\perp$ 接触点处的半径。外点两切线等长。<br><br>' +
    '<b>仅 Higher — 圆定理</b><br>' +
    '• 圆心角 = 2 × 同弧圆周角。半圆角 = $90°$。<br>' +
    '• 同弧弓形角相等。圆内接四边形对角互补。<br>' +
    '• 交替弓形定理：切线与弦的夹角 = 交替弓形中的角。'
});

add('edexcel', '4.6', 'examples', {
  content:
    '<b>Worked Example</b> (Higher) [4 marks]<br>' +
    '$O$ is the centre. $A$, $B$, $C$ are on the circle. Angle $BAC = 35°$. Find angle $BOC$ and angle $OBC$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$\\angle BOC = 2 \\times 35° = 70°$ (angle at centre = twice angle at circumference)<br>' +
    '$\\triangle OBC$ is isosceles ($OB = OC$ = radius).<br>' +
    '$\\angle OBC = \\frac{180° - 70°}{2} = 55°$<br><br>' +
    '<b>Exam Tip:</b> State the theorem and show $OB = OC$ = radius to justify the isosceles triangle.',
  content_zh:
    '<b>经典例题</b>（Higher）[4 分]<br>' +
    '$O$ 为圆心，$A, B, C$ 在圆上。$\\angle BAC = 35°$。求 $\\angle BOC$ 和 $\\angle OBC$。<br><br>' +
    '<b>解答：</b>$\\angle BOC = 70°$（圆心角 = 2 × 圆周角）<br>' +
    '$\\triangle OBC$ 等腰：$\\angle OBC = \\frac{110°}{2} = 55°$'
});

// ── Edexcel 4.7 Geometrical reasoning ──
add('edexcel', '4.7', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Congruent</b> triangles: SSS, SAS, ASA, RHS.<br>' +
    '• <b>Similar</b> shapes: same shape, different size. Corresponding angles equal, sides in ratio.<br>' +
    '• <b>Proof</b> questions require logical steps with reasons.<br><br>' +
    '<b>Higher Only</b><br>' +
    '• Prove triangles are congruent or similar using formal reasoning.<br>' +
    '• Use circle theorems in proofs.<br>' +
    '• <b>Geometric proof structure</b>:<br>' +
    '&nbsp;&nbsp;1. State what you are proving.<br>' +
    '&nbsp;&nbsp;2. List known facts with reasons.<br>' +
    '&nbsp;&nbsp;3. Build to the conclusion step by step.<br><br>' +
    '<b>Exam Tip</b><br>' +
    'In "show that" or "prove" questions, you must write every step — you cannot skip to the answer.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>全等</b>三角形：SSS、SAS、ASA、RHS。<br>' +
    '• <b>相似</b>图形：形状相同、大小不同，对应角相等、边成比例。<br><br>' +
    '<b>仅 Higher</b><br>' +
    '• 证明全等或相似需要正式推理步骤。<br>' +
    '• 几何证明结构：1. 陈述结论 2. 列出已知（附理由）3. 逐步推导。<br><br>' +
    '<b>考试技巧</b><br>' +
    '"证明"题必须写出每一步，不能跳到答案。'
});

add('edexcel', '4.7', 'examples', {
  content:
    '<b>Worked Example</b> (Higher) [4 marks]<br>' +
    'Prove that triangles $ABD$ and $CBD$ are congruent, given $AB = CB$ and $AD = CD$.<br><br>' +
    '<b>Solution:</b><br>' +
    'In $\\triangle ABD$ and $\\triangle CBD$:<br>' +
    '• $AB = CB$ (given)<br>' +
    '• $AD = CD$ (given)<br>' +
    '• $BD = BD$ (common side)<br>' +
    'Therefore $\\triangle ABD \\cong \\triangle CBD$ (SSS).<br><br>' +
    '<b>Exam Tip:</b> Always state the congruence condition used (SSS, SAS, ASA, or RHS) at the end.',
  content_zh:
    '<b>经典例题</b>（Higher）[4 分]<br>' +
    '已知 $AB = CB$，$AD = CD$。证明 $\\triangle ABD \\cong \\triangle CBD$。<br><br>' +
    '<b>解答：</b>• $AB = CB$（已知）• $AD = CD$（已知）• $BD = BD$（公共边）<br>' +
    '∴ $\\triangle ABD \\cong \\triangle CBD$（SSS）'
});

// ── Edexcel 4.8 Trigonometry and Pythagoras' theorem ──
add('edexcel', '4.8', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Pythagoras</b>: $a^2 + b^2 = c^2$ where $c$ is the hypotenuse.<br>' +
    '• <b>SOHCAHTOA</b>:<br>' +
    '&nbsp;&nbsp;$\\sin\\theta = \\frac{\\text{Opp}}{\\text{Hyp}}$, $\\cos\\theta = \\frac{\\text{Adj}}{\\text{Hyp}}$, $\\tan\\theta = \\frac{\\text{Opp}}{\\text{Adj}}$.<br>' +
    '• Label: <b>Hypotenuse</b> (longest, opposite right angle), <b>Opposite</b> (across from angle), <b>Adjacent</b> (next to angle).<br><br>' +
    '<b>Higher Only</b><br>' +
    '• <b>Sine rule</b>: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$. Use when you have a side-angle pair.<br>' +
    '• <b>Cosine rule</b>: $a^2 = b^2 + c^2 - 2bc\\cos A$. Use when you have SAS or SSS.<br>' +
    '• <b>Area</b> $= \\frac{1}{2}ab\\sin C$.<br>' +
    '• <b>3D Pythagoras</b>: diagonal $= \\sqrt{l^2 + w^2 + h^2}$.<br>' +
    '• <b>3D trigonometry</b>: find right triangles within 3D shapes.<br><br>' +
    '<b>Watch Out!</b><br>' +
    'Check your calculator is in <b>degree</b> mode, not radians!',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>勾股定理</b>：$a^2 + b^2 = c^2$（$c$ 为斜边）。<br>' +
    '• <b>SOHCAHTOA</b>：$\\sin = \\frac{对}{斜}$，$\\cos = \\frac{邻}{斜}$，$\\tan = \\frac{对}{邻}$。<br><br>' +
    '<b>仅 Higher</b><br>' +
    '• 正弦定则：$\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$。余弦定则：$a^2 = b^2 + c^2 - 2bc\\cos A$。<br>' +
    '• 面积 $= \\frac{1}{2}ab\\sin C$。<br>' +
    '• 3D 勾股：对角线 $= \\sqrt{l^2 + w^2 + h^2}$。<br><br>' +
    '<b>注意！</b>确保计算器在角度模式（degree），不是弧度（radian）！'
});

add('edexcel', '4.8', 'examples', {
  content:
    '<b>Worked Example 1</b> [3 marks]<br>' +
    'A right-angled triangle has legs 5 cm and 12 cm. Find the hypotenuse.<br><br>' +
    '<b>Solution:</b><br>' +
    '$c = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$ cm<br><br>' +
    '<b>Worked Example 2</b> [3 marks]<br>' +
    'In a right-angled triangle, the hypotenuse is 10 cm and one angle is $35°$. Find the opposite side.<br><br>' +
    '<b>Solution:</b><br>' +
    '$\\sin 35° = \\frac{\\text{Opp}}{10}$<br>' +
    'Opp $= 10 \\sin 35° = 10 \\times 0.5736 = 5.74$ cm<br><br>' +
    '<b>Worked Example 3</b> (Higher) [4 marks]<br>' +
    'In $\\triangle ABC$: $a = 8$, $b = 6$, $\\angle C = 60°$. Find side $c$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$c^2 = 8^2 + 6^2 - 2(8)(6)\\cos 60°$<br>' +
    '$= 64 + 36 - 96 \\times 0.5 = 100 - 48 = 52$<br>' +
    '$c = \\sqrt{52} = 7.21$ cm (3 s.f.)',
  content_zh:
    '<b>经典例题 1</b> [3 分]<br>' +
    '直角三角形两直角边 5 cm 和 12 cm，求斜边。<br>' +
    '<b>解答：</b>$c = \\sqrt{25 + 144} = 13$ cm<br><br>' +
    '<b>经典例题 2</b> [3 分]<br>' +
    '斜边 10 cm，角 $35°$，求对边。<br>' +
    '<b>解答：</b>$10\\sin 35° = 5.74$ cm<br><br>' +
    '<b>经典例题 3</b>（Higher）[4 分]<br>' +
    '$a = 8, b = 6, \\angle C = 60°$，求 $c$。<br>' +
    '<b>解答：</b>$c^2 = 64 + 36 - 48 = 52$，$c = 7.21$ cm'
});

// ── Edexcel 4.9 Mensuration of 2D shapes ──
add('edexcel', '4.9', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Rectangle</b>: area $= l \\times w$, perimeter $= 2(l + w)$.<br>' +
    '• <b>Triangle</b>: area $= \\frac{1}{2} \\times b \\times h$.<br>' +
    '• <b>Parallelogram</b>: area $= b \\times h$ (perpendicular height).<br>' +
    '• <b>Trapezium</b>: area $= \\frac{1}{2}(a + b) \\times h$.<br>' +
    '• <b>Circle</b>: area $= \\pi r^2$, circumference $= 2\\pi r = \\pi d$.<br>' +
    '• <b>Sector</b>: arc length $= \\frac{\\theta}{360} \\times 2\\pi r$, area $= \\frac{\\theta}{360} \\times \\pi r^2$.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Find areas of compound shapes by splitting into rectangles, triangles, etc.<br>' +
    '• Find shaded areas by subtraction.<br>' +
    '• Convert between units: $1\\text{ m}^2 = 10\\,000\\text{ cm}^2$.<br><br>' +
    '<b>Watch Out!</b><br>' +
    'Use the <b>perpendicular</b> height, not the slant height, for triangles and parallelograms.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• 长方形面积 $= l \\times w$。三角形面积 $= \\frac{1}{2}bh$。<br>' +
    '• 平行四边形面积 $= bh$。梯形面积 $= \\frac{1}{2}(a+b)h$。<br>' +
    '• 圆面积 $= \\pi r^2$，周长 $= 2\\pi r$。<br>' +
    '• 扇形弧长 $= \\frac{\\theta}{360} \\times 2\\pi r$，面积 $= \\frac{\\theta}{360} \\times \\pi r^2$。<br><br>' +
    '<b>注意！</b><br>' +
    '三角形和平行四边形用<b>垂直高</b>，不是斜边高。'
});

add('edexcel', '4.9', 'examples', {
  content:
    '<b>Worked Example 1</b> [3 marks]<br>' +
    'A sector has radius 8 cm and angle $120°$. Find the area and arc length.<br><br>' +
    '<b>Solution:</b><br>' +
    'Area $= \\frac{120}{360} \\times \\pi \\times 8^2 = \\frac{1}{3} \\times 64\\pi = 67.0\\text{ cm}^2$<br>' +
    'Arc length $= \\frac{120}{360} \\times 2\\pi \\times 8 = \\frac{16\\pi}{3} = 16.8$ cm<br><br>' +
    '<b>Worked Example 2</b> [3 marks]<br>' +
    'A rectangular garden is 12 m by 8 m. A circular pond of radius 2 m is in the centre. Find the area of grass.<br><br>' +
    '<b>Solution:</b><br>' +
    'Rectangle area $= 12 \\times 8 = 96\\text{ m}^2$<br>' +
    'Pond area $= \\pi \\times 2^2 = 4\\pi = 12.57\\text{ m}^2$<br>' +
    'Grass $= 96 - 12.57 = 83.4\\text{ m}^2$',
  content_zh:
    '<b>经典例题 1</b> [3 分]<br>' +
    '扇形半径 8 cm，角 $120°$，求面积和弧长。<br><br>' +
    '<b>解答：</b>面积 $= \\frac{1}{3} \\times 64\\pi = 67.0\\text{ cm}^2$，弧长 $= \\frac{16\\pi}{3} = 16.8$ cm<br><br>' +
    '<b>经典例题 2</b> [3 分]<br>' +
    '12 m × 8 m 花园中有半径 2 m 的圆形池塘，求草地面积。<br><br>' +
    '<b>解答：</b>$96 - 4\\pi = 83.4\\text{ m}^2$'
});

// ── Edexcel 4.10 3D shapes and volume ──
add('edexcel', '4.10', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Cube</b>: $V = l^3$, SA $= 6l^2$.<br>' +
    '• <b>Cuboid</b>: $V = lwh$, SA $= 2(lw + lh + wh)$.<br>' +
    '• <b>Prism</b>: $V = \\text{cross-section area} \\times \\text{length}$.<br>' +
    '• <b>Cylinder</b>: $V = \\pi r^2 h$, curved SA $= 2\\pi rh$, total SA $= 2\\pi rh + 2\\pi r^2$.<br>' +
    '• <b>Cone</b>: $V = \\frac{1}{3}\\pi r^2 h$, curved SA $= \\pi r l$ (where $l$ = slant height).<br>' +
    '• <b>Sphere</b>: $V = \\frac{4}{3}\\pi r^3$, SA $= 4\\pi r^2$.<br>' +
    '• <b>Pyramid</b>: $V = \\frac{1}{3} \\times \\text{base area} \\times h$.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Find volumes and surface areas of compound 3D shapes.<br>' +
    '• Convert units: $1\\text{ m}^3 = 1\\,000\\,000\\text{ cm}^3$; $1\\text{ litre} = 1000\\text{ cm}^3$.<br><br>' +
    '<b>Watch Out!</b><br>' +
    'Cone and pyramid have the $\\frac{1}{3}$ factor. Sphere uses $\\frac{4}{3}$. These are given on the formula sheet.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• 正方体：$V = l^3$。长方体：$V = lwh$。<br>' +
    '• 棱柱：$V = 截面积 \\times 长$。圆柱：$V = \\pi r^2 h$。<br>' +
    '• 圆锥：$V = \\frac{1}{3}\\pi r^2 h$。球：$V = \\frac{4}{3}\\pi r^3$。<br>' +
    '• 棱锥：$V = \\frac{1}{3} \\times 底面积 \\times h$。<br><br>' +
    '<b>注意！</b><br>' +
    '锥和棱锥有 $\\frac{1}{3}$。球有 $\\frac{4}{3}$。这些公式会在考试卷上给出。'
});

add('edexcel', '4.10', 'examples', {
  content:
    '<b>Worked Example 1</b> [3 marks]<br>' +
    'A cylinder has radius 5 cm and height 12 cm. Find its volume.<br><br>' +
    '<b>Solution:</b><br>' +
    '$V = \\pi \\times 5^2 \\times 12 = 300\\pi = 942\\text{ cm}^3$ (3 s.f.)<br><br>' +
    '<b>Worked Example 2</b> [4 marks]<br>' +
    'A hemisphere has radius 6 cm. Find the total surface area.<br><br>' +
    '<b>Solution:</b><br>' +
    'Curved surface $= \\frac{1}{2} \\times 4\\pi r^2 = 2\\pi \\times 36 = 72\\pi$<br>' +
    'Flat circle $= \\pi r^2 = 36\\pi$<br>' +
    'Total SA $= 72\\pi + 36\\pi = 108\\pi = 339\\text{ cm}^2$ (3 s.f.)<br><br>' +
    '<b>Exam Tip:</b> For a hemisphere, don\'t forget the flat circular base in the total surface area.',
  content_zh:
    '<b>经典例题 1</b> [3 分]<br>' +
    '圆柱半径 5 cm，高 12 cm，求体积。<br><br>' +
    '<b>解答：</b>$V = 300\\pi = 942\\text{ cm}^3$<br><br>' +
    '<b>经典例题 2</b> [4 分]<br>' +
    '半球半径 6 cm，求总表面积。<br><br>' +
    '<b>解答：</b>曲面 $72\\pi$ + 底面 $36\\pi$ = $108\\pi = 339\\text{ cm}^2$'
});

// ── Edexcel 4.11 Similarity ──
add('edexcel', '4.11', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Similar</b> shapes: same shape, different size. All corresponding angles equal, all corresponding sides in the same ratio.<br>' +
    '• <b>Scale factor</b> $k = \\frac{\\text{new length}}{\\text{original length}}$.<br>' +
    '• If length ratio is $k$, then <b>area ratio</b> $= k^2$ and <b>volume ratio</b> $= k^3$.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Identify similar triangles using AA (two angles equal).<br>' +
    '• Find missing lengths using the scale factor.<br>' +
    '• Use area and volume ratios in real-world problems (paint needed, capacity, etc.).<br><br>' +
    '<b>Higher Only</b><br>' +
    '• Prove two triangles are similar.<br>' +
    '• Use similarity with area and volume scale factors in multi-step problems.<br><br>' +
    '<b>Exam Tip</b><br>' +
    'If given area ratio, square root to get length ratio. If given volume ratio, cube root.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>相似</b>：形状相同、大小不同。对应角相等、对应边成比例。<br>' +
    '• 缩放因子 $k$：长度比 $k$，面积比 $k^2$，体积比 $k^3$。<br><br>' +
    '<b>关键技巧</b><br>' +
    '• AA 判定相似。<br>' +
    '• 已知面积比 → 开方得长度比。已知体积比 → 开立方。<br><br>' +
    '<b>仅 Higher</b><br>' +
    '• 证明相似 + 多步面积/体积缩放问题。'
});

add('edexcel', '4.11', 'examples', {
  content:
    '<b>Worked Example 1</b> [3 marks]<br>' +
    'Two similar triangles have sides 6 cm and 9 cm. The area of the smaller is $20\\text{ cm}^2$. Find the area of the larger.<br><br>' +
    '<b>Solution:</b><br>' +
    'Scale factor $k = \\frac{9}{6} = 1.5$<br>' +
    'Area ratio $= 1.5^2 = 2.25$<br>' +
    'Area $= 20 \\times 2.25 = 45\\text{ cm}^2$<br><br>' +
    '<b>Worked Example 2</b> [4 marks]<br>' +
    'Two similar containers have volumes $250\\text{ cm}^3$ and $2000\\text{ cm}^3$. The height of the smaller is 10 cm. Find the height of the larger.<br><br>' +
    '<b>Solution:</b><br>' +
    'Volume ratio $= \\frac{2000}{250} = 8$<br>' +
    'Length ratio $= \\sqrt[3]{8} = 2$<br>' +
    'Height $= 10 \\times 2 = 20$ cm',
  content_zh:
    '<b>经典例题 1</b> [3 分]<br>' +
    '两相似三角形边长 6 cm 和 9 cm，小的面积 $20\\text{ cm}^2$，求大的面积。<br><br>' +
    '<b>解答：</b>$k = 1.5$，面积比 $= 2.25$，面积 $= 45\\text{ cm}^2$<br><br>' +
    '<b>经典例题 2</b> [4 分]<br>' +
    '两相似容器体积 $250$ 和 $2000\\text{ cm}^3$，小的高 10 cm，求大的高。<br><br>' +
    '<b>解答：</b>体积比 $= 8$，长度比 $= \\sqrt[3]{8} = 2$，高 $= 20$ cm'
});

/* ══════════════════════════════════════════════════
   OUTPUT SQL
   ══════════════════════════════════════════════════ */
console.log('-- Section content seed: CIE Ch4 + Edexcel Ch4');
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
