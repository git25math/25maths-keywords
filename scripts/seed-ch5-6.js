#!/usr/bin/env node
// Seed: CIE Ch5 (Mensuration) + Ch6 (Trigonometry) + Edexcel Ch5 (Vectors & Transformations) + Ch6 (Stats & Probability)
// Usage: node scripts/seed-ch5-6.js > scripts/seed-ch5-6.sql

var edits = [];
function add(board, id, module, data) {
  edits.push({ board: board, section_id: id, module: module, data: data });
}

/* ══════════════════════════════════════════════════
   CIE 0580 — Chapter 5: Mensuration (5.1 – 5.5)
   ══════════════════════════════════════════════════ */

// ── 5.1 Units of measure ──
add('cie', '5.1', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Metric units</b>: length (mm, cm, m, km), mass (g, kg, t), capacity (ml, cl, l).<br>' +
    '• $1\\text{ km} = 1000\\text{ m}$, $1\\text{ m} = 100\\text{ cm}$, $1\\text{ cm} = 10\\text{ mm}$.<br>' +
    '• $1\\text{ kg} = 1000\\text{ g}$, $1\\text{ tonne} = 1000\\text{ kg}$, $1\\text{ litre} = 1000\\text{ ml} = 1000\\text{ cm}^3$.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Convert between units: multiply to go smaller → larger count, divide to go larger → smaller count.<br>' +
    '• <b>Area conversions</b>: $1\\text{ m}^2 = 10\\,000\\text{ cm}^2$ (multiply factor <b>squared</b>).<br>' +
    '• <b>Volume conversions</b>: $1\\text{ m}^3 = 1\\,000\\,000\\text{ cm}^3$ (multiply factor <b>cubed</b>).<br>' +
    '• <b>Compound measures</b>: speed $= \\frac{d}{t}$, density $= \\frac{m}{V}$, population density $= \\frac{\\text{population}}{\\text{area}}$.<br><br>' +
    '<b>Watch Out!</b><br>' +
    'When converting area or volume, apply the conversion factor twice (area) or three times (volume). E.g. $2\\text{ m}^2 = 2 \\times 10\\,000 = 20\\,000\\text{ cm}^2$.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>公制单位</b>：长度 (mm, cm, m, km)，质量 (g, kg, t)，容量 (ml, cl, l)。<br>' +
    '• $1\\text{ km} = 1000\\text{ m}$, $1\\text{ m} = 100\\text{ cm}$, $1\\text{ cm} = 10\\text{ mm}$。<br>' +
    '• $1\\text{ kg} = 1000\\text{ g}$, $1\\text{ tonne} = 1000\\text{ kg}$, $1\\text{ litre} = 1000\\text{ ml} = 1000\\text{ cm}^3$。<br>' +
    '<br>' +
    '<b>关键技能</b><br>' +
    '• 单位换算：换算为更小单位时用乘法 → 数值变大；换算为更大单位时用除法 → 数值变小。<br>' +
    '• <b>面积换算</b>：$1\\text{ m}^2 = 10\\,000\\text{ cm}^2$（乘换算因子的<b>平方</b>）。<br>' +
    '• <b>体积换算</b>：$1\\text{ m}^3 = 1\\,000\\,000\\text{ cm}^3$（乘换算因子的<b>立方</b>）。<br>' +
    '• <b>复合度量</b>：速度 $= \\frac{d}{t}$，密度 $= \\frac{m}{V}$，人口密度 $= \\frac{\\text{population}}{\\text{area}}$。<br>' +
    '<br>' +
    '<b>注意！</b><br>' +
    '进行面积或体积换算时，需应用两次（面积）或三次（体积）换算因子。例如：$2\\text{ m}^2 = 2 \\times 10\\,000 = 20\\,000\\text{ cm}^2$。'
});

add('cie', '5.1', 'examples', {
  content:
    '<b>Worked Example 1</b> [2 marks]<br>' +
    'Convert $3.5\\text{ m}^2$ to $\\text{cm}^2$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$3.5 \\times 10\\,000 = 35\\,000\\text{ cm}^2$<br><br>' +
    '<b>Worked Example 2</b> [3 marks]<br>' +
    'A block of metal has mass 540 g and volume $200\\text{ cm}^3$. Find the density in g/cm$^3$. Another block of the same metal has volume $350\\text{ cm}^3$. Find its mass.<br><br>' +
    '<b>Solution:</b><br>' +
    'Density $= \\frac{540}{200} = 2.7\\text{ g/cm}^3$<br>' +
    'Mass $= 2.7 \\times 350 = 945$ g',
  content_zh:
    '<b>经典例题 1</b> [2 分]<br>' +
    '将 $3.5\\text{ m}^2$ 换算为 cm$^2$。<br><br>' +
    '<b>解答：</b>$3.5 \\times 10\\,000 = 35\\,000\\text{ cm}^2$<br><br>' +
    '<b>经典例题 2</b> [3 分]<br>' +
    '金属块质量 540 g，体积 $200\\text{ cm}^3$。另一块同材料体积 $350\\text{ cm}^3$，求质量。<br><br>' +
    '<b>解答：</b>密度 $= 2.7\\text{ g/cm}^3$，质量 $= 945$ g'
});

// ── 5.2 Area and perimeter ──
add('cie', '5.2', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Rectangle</b>: $A = lw$, $P = 2(l+w)$.<br>' +
    '• <b>Triangle</b>: $A = \\frac{1}{2}bh$ (perpendicular height).<br>' +
    '• <b>Parallelogram</b>: $A = bh$.<br>' +
    '• <b>Trapezium</b>: $A = \\frac{1}{2}(a+b)h$.<br>' +
    '• <b>Kite</b>: $A = \\frac{1}{2}d_1 d_2$ (diagonals).<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Break compound shapes into simpler shapes.<br>' +
    '• Find shaded area by subtraction: whole shape minus removed part.<br>' +
    '• Use $A = \\frac{1}{2}ab\\sin C$ for non-right-angled triangles (Extended).<br><br>' +
    '<b>Exam Tip</b><br>' +
    'Always check you are using the <b>perpendicular</b> height, not a slant side.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>长方形</b>：$A = lw$，$P = 2(l+w)$。<br>' +
    '• <b>三角形</b>：$A = \\frac{1}{2}bh$（垂直高度）。<br>' +
    '• <b>平行四边形</b>：$A = bh$。<br>' +
    '• <b>梯形</b>：$A = \\frac{1}{2}(a+b)h$。<br>' +
    '• <b>筝形</b>：$A = \\frac{1}{2}d_1 d_2$（对角线）。<br>' +
    '<br>' +
    '<b>关键技能</b><br>' +
    '• 将复合图形分解为更简单的图形。<br>' +
    '• 通过减法求阴影部分面积：整体图形减去扣除部分。<br>' +
    '• 对于非直角三角形，使用 $A = \\frac{1}{2}ab\\sin C$（进阶部分）。<br>' +
    '<br>' +
    '<b>考试技巧</b><br>' +
    '务必检查你使用的是<b>垂直</b>高度，而非斜边。'
});

add('cie', '5.2', 'examples', {
  content:
    '<b>Worked Example</b> [4 marks]<br>' +
    'A trapezium has parallel sides 8 cm and 14 cm and perpendicular height 6 cm. Find its area.<br><br>' +
    '<b>Solution:</b><br>' +
    '$A = \\frac{1}{2}(8 + 14) \\times 6 = \\frac{1}{2} \\times 22 \\times 6 = 66\\text{ cm}^2$<br><br>' +
    '<b>Worked Example 2</b> (Extended) [3 marks]<br>' +
    'Triangle $PQR$: $PQ = 9$ cm, $PR = 7$ cm, $\\angle P = 48°$. Find the area.<br><br>' +
    '<b>Solution:</b><br>' +
    '$A = \\frac{1}{2} \\times 9 \\times 7 \\times \\sin 48° = 31.5 \\times 0.7431 = 23.4\\text{ cm}^2$',
  content_zh:
    '<b>经典例题</b> [4 分]<br>' +
    '梯形平行边 8 cm 和 14 cm，高 6 cm，求面积。<br><br>' +
    '<b>解答：</b>$A = \\frac{1}{2}(8+14) \\times 6 = 66\\text{ cm}^2$<br><br>' +
    '<b>经典例题 2</b>（Extended）[3 分]<br>' +
    '$PQ = 9$, $PR = 7$, $\\angle P = 48°$。<br>' +
    '<b>解答：</b>$A = \\frac{1}{2}(9)(7)\\sin 48° = 23.4\\text{ cm}^2$'
});

// ── 5.3 Circles, arcs and sectors ──
add('cie', '5.3', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Circle</b>: circumference $C = 2\\pi r = \\pi d$, area $A = \\pi r^2$.<br>' +
    '• <b>Arc length</b> $= \\frac{\\theta}{360} \\times 2\\pi r$.<br>' +
    '• <b>Sector area</b> $= \\frac{\\theta}{360} \\times \\pi r^2$.<br>' +
    '• <b>Perimeter of sector</b> $=$ arc length $+ 2r$.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Find arc length and sector area given angle and radius.<br>' +
    '• Find the angle given the arc or area.<br>' +
    '• Find the radius given the area or circumference.<br><br>' +
    '<b>Watch Out!</b><br>' +
    'Perimeter of a sector is NOT just the arc. You must add the two radii: $P = \\frac{\\theta}{360} \\times 2\\pi r + 2r$.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>圆</b>：周长 $C = 2\\pi r = \\pi d$，面积 $A = \\pi r^2$。<br>' +
    '• <b>弧长</b> $= \\frac{\\theta}{360} \\times 2\\pi r$。<br>' +
    '• <b>扇形面积</b> $= \\frac{\\theta}{360} \\times \\pi r^2$。<br>' +
    '• <b>扇形周长</b> $=$ 弧长 $+ 2r$。<br>' +
    '<br>' +
    '<b>关键技能</b><br>' +
    '• 已知角度和半径，求弧长和扇形面积。<br>' +
    '• 已知弧长或面积，求角度。<br>' +
    '• 已知面积或周长，求半径。<br>' +
    '<br>' +
    '<b>注意！</b><br>' +
    '扇形的周长不仅是弧长。你必须加上两条半径：$P = \\frac{\\theta}{360} \\times 2\\pi r + 2r$。'
});

add('cie', '5.3', 'examples', {
  content:
    '<b>Worked Example</b> [4 marks]<br>' +
    'A sector has radius 12 cm and angle $150°$. Find (a) the arc length, (b) the area, (c) the perimeter.<br><br>' +
    '<b>Solution:</b><br>' +
    '(a) Arc $= \\frac{150}{360} \\times 2\\pi \\times 12 = \\frac{5}{12} \\times 24\\pi = 10\\pi = 31.4$ cm<br>' +
    '(b) Area $= \\frac{150}{360} \\times \\pi \\times 144 = 60\\pi = 188.5\\text{ cm}^2$<br>' +
    '(c) Perimeter $= 31.4 + 2(12) = 31.4 + 24 = 55.4$ cm',
  content_zh:
    '<b>经典例题</b> [4 分]<br>' +
    '扇形半径 12 cm，角 $150°$。求弧长、面积、周长。<br><br>' +
    '<b>解答：</b>(a) 弧长 $= 10\\pi = 31.4$ cm<br>' +
    '(b) 面积 $= 60\\pi = 188.5\\text{ cm}^2$<br>' +
    '(c) 周长 $= 31.4 + 24 = 55.4$ cm'
});

// ── 5.4 Surface area and volume ──
add('cie', '5.4', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Cuboid</b>: $V = lwh$, SA $= 2(lw + lh + wh)$.<br>' +
    '• <b>Prism</b>: $V = \\text{cross-section} \\times \\text{length}$.<br>' +
    '• <b>Cylinder</b>: $V = \\pi r^2 h$, curved SA $= 2\\pi rh$, total SA $= 2\\pi rh + 2\\pi r^2$.<br>' +
    '• <b>Cone</b>: $V = \\frac{1}{3}\\pi r^2 h$, curved SA $= \\pi rl$ ($l$ = slant height, $l^2 = r^2 + h^2$).<br>' +
    '• <b>Sphere</b>: $V = \\frac{4}{3}\\pi r^3$, SA $= 4\\pi r^2$.<br>' +
    '• <b>Pyramid</b>: $V = \\frac{1}{3} \\times \\text{base area} \\times h$.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Find volume and surface area of compound solids (e.g. hemisphere on cylinder).<br>' +
    '• Find missing dimensions given volume or surface area.<br>' +
    '• Use Pythagoras to find slant height of a cone.<br><br>' +
    '<b>Exam Tip</b><br>' +
    'Formulae for cone, sphere, and pyramid are given on the formula sheet — but practise using them.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>长方体</b>：$V = lwh$，SA $= 2(lw + lh + wh)$。<br>' +
    '• <b>棱柱</b>：$V = \\text{cross-section} \\times \\text{length}$。<br>' +
    '• <b>圆柱体</b>：$V = \\pi r^2 h$，侧面积 $= 2\\pi rh$，总表面积 $= 2\\pi rh + 2\\pi r^2$。<br>' +
    '• <b>圆锥体</b>：$V = \\frac{1}{3}\\pi r^2 h$，侧面积 $= \\pi rl$（$l$ = 斜高, $l^2 = r^2 + h^2$）。<br>' +
    '• <b>球体</b>：$V = \\frac{4}{3}\\pi r^3$，SA $= 4\\pi r^2$。<br>' +
    '• <b>棱锥</b>：$V = \\frac{1}{3} \\times \\text{base area} \\times h$。<br>' +
    '<br>' +
    '<b>关键技能</b><br>' +
    '• 求复合几何体的体积和表面积（例如圆柱体上的半球）。<br>' +
    '• 已知体积或表面积求缺失的尺寸。<br>' +
    '• 使用勾股定理求圆锥的斜高。<br>' +
    '<br>' +
    '<b>考试技巧</b><br>' +
    '公式表上提供了圆锥、球体和棱锥的公式 —— 但要通过练习掌握它们的使用方法。'
});

add('cie', '5.4', 'examples', {
  content:
    '<b>Worked Example</b> [5 marks]<br>' +
    'A solid is made from a cylinder (radius 5 cm, height 10 cm) with a hemisphere on top. Find the total volume and total surface area.<br><br>' +
    '<b>Solution:</b><br>' +
    '<b>Volume:</b><br>' +
    'Cylinder: $\\pi \\times 25 \\times 10 = 250\\pi$<br>' +
    'Hemisphere: $\\frac{1}{2} \\times \\frac{4}{3}\\pi \\times 125 = \\frac{250\\pi}{3}$<br>' +
    'Total $= 250\\pi + \\frac{250\\pi}{3} = \\frac{1000\\pi}{3} = 1047\\text{ cm}^3$<br><br>' +
    '<b>Surface area:</b><br>' +
    'Cylinder curved: $2\\pi \\times 5 \\times 10 = 100\\pi$<br>' +
    'Base circle: $\\pi \\times 25 = 25\\pi$<br>' +
    'Hemisphere curved: $2\\pi \\times 25 = 50\\pi$<br>' +
    'Total $= 100\\pi + 25\\pi + 50\\pi = 175\\pi = 550\\text{ cm}^2$<br><br>' +
    '<b>Watch Out:</b> No top circle on the cylinder (hemisphere covers it) and no flat face on the hemisphere.',
  content_zh:
    '<b>经典例题</b> [5 分]<br>' +
    '一个几何体由一个圆柱体（半径 5 cm，高 10 cm）及其顶部的半球体组成。求其总体积和总表面积。<br>' +
    '<br>' +
    '<b>解答：</b><br>' +
    '<b>体积：</b><br>' +
    '圆柱体：$\\pi \\times 25 \\times 10 = 250\\pi$<br>' +
    '半球体：$\\frac{1}{2} \\times \\frac{4}{3}\\pi \\times 125 = \\frac{250\\pi}{3}$<br>' +
    '总计 $= 250\\pi + \\frac{250\\pi}{3} = \\frac{1000\\pi}{3} = 1047\\text{ cm}^3$<br>' +
    '<br>' +
    '<b>表面积：</b><br>' +
    '圆柱侧面积：$2\\pi \\times 5 \\times 10 = 100\\pi$<br>' +
    '底面圆面积：$\\pi \\times 25 = 25\\pi$<br>' +
    '半球曲面面积：$2\\pi \\times 25 = 50\\pi$<br>' +
    '总计 $= 100\\pi + 25\\pi + 50\\pi = 175\\pi = 550\\text{ cm}^2$<br>' +
    '<br>' +
    '<b>注意！</b> 圆柱顶部没有圆（被半球覆盖了），且半球没有平面。'
});

// ── 5.5 Compound shapes ──
add('cie', '5.5', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Compound shapes</b> combine two or more basic shapes.<br>' +
    '• Split the shape into rectangles, triangles, circles, trapeziums, etc.<br>' +
    '• <b>Addition method</b>: area of whole = sum of parts.<br>' +
    '• <b>Subtraction method</b>: area of whole shape minus removed sections.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Find unknown dimensions from the given information.<br>' +
    '• Calculate perimeters of compound shapes — only count <b>outer</b> edges.<br>' +
    '• Solve problems combining 2D and 3D compound shapes.<br><br>' +
    '<b>Exam Tip</b><br>' +
    'Sketch and label each sub-shape separately. This makes it easier to identify all dimensions.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>组合图形</b>由两个或多个基本图形组合而成。<br>' +
    '• 将图形分解为长方形、三角形、圆、梯形等。<br>' +
    '• <b>相加法</b>：整体面积 = 各部分面积之和。<br>' +
    '• <b>相减法</b>：整体面积减去移除的部分。<br>' +
    '<br>' +
    '<b>关键技能</b><br>' +
    '• 根据给定信息找出未知的边长。<br>' +
    '• 计算组合图形的周长 —— 只计算<b>外部</b>边长。<br>' +
    '• 解决结合 2D 和 3D 组合图形的问题。<br>' +
    '<br>' +
    '<b>考试技巧</b><br>' +
    '分别画出每个子图形并标注。这使得识别所有尺寸变得更加容易。'
});

add('cie', '5.5', 'examples', {
  content:
    '<b>Worked Example</b> [4 marks]<br>' +
    'An L-shaped room is 10 m by 8 m with a 4 m by 3 m rectangle removed from one corner. Find the area and perimeter.<br><br>' +
    '<b>Solution:</b><br>' +
    'Area $= (10 \\times 8) - (4 \\times 3) = 80 - 12 = 68\\text{ m}^2$<br>' +
    'Perimeter: trace the outside: $10 + 8 + 6 + 3 + 4 + 5 = 36$ m<br>' +
    '(or $10 + 8 + (10-4) + 3 + 4 + (8-3) = 36$ m)<br><br>' +
    '<b>Exam Tip:</b> For perimeter, trace around the outside of the shape to make sure you count every edge.',
  content_zh:
    '<b>经典例题</b> [4 分]<br>' +
    '一个 L 形房间的长宽分别为 10 m 和 8 m，其中一个角被扣除了一个 4 m 乘以 3 m 的长方形。求其面积和周长。<br>' +
    '<br>' +
    '<b>解答：</b><br>' +
    '面积 $= (10 \\times 8) - (4 \\times 3) = 80 - 12 = 68\\text{ m}^2$<br>' +
    '周长：沿外围追踪：$10 + 8 + 6 + 3 + 4 + 5 = 36$ m<br>' +
    '(或者 $10 + 8 + (10-4) + 3 + 4 + (8-3) = 36$ m)<br>' +
    '<br>' +
    '<b>考试技巧：</b> 对于周长，沿图形外围追踪一圈，确保计算到每一条边。'
});

/* ══════════════════════════════════════════════════
   CIE 0580 — Chapter 6: Trigonometry (6.1 – 6.6)
   ══════════════════════════════════════════════════ */

// ── 6.1 Pythagoras' theorem ──
add('cie', '6.1', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• In a right-angled triangle: $a^2 + b^2 = c^2$ where $c$ is the <b>hypotenuse</b> (longest side, opposite the right angle).<br>' +
    '• To find the hypotenuse: $c = \\sqrt{a^2 + b^2}$.<br>' +
    '• To find a shorter side: $a = \\sqrt{c^2 - b^2}$.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Apply Pythagoras in 2D problems (distances, diagonals).<br>' +
    '• <b>3D Pythagoras</b> (Extended): find the space diagonal $d = \\sqrt{l^2 + w^2 + h^2}$.<br>' +
    '• Use Pythagoras to check if a triangle is right-angled: if $a^2 + b^2 = c^2$, yes.<br><br>' +
    '<b>Watch Out!</b><br>' +
    'The hypotenuse is always opposite the right angle. Always identify it first before applying the theorem.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• 在直角三角形中：$a^2 + b^2 = c^2$，其中 $c$ 是<b>斜边</b>（最长边，直角的对边）。<br>' +
    '• 求斜边：$c = \\sqrt{a^2 + b^2}$。<br>' +
    '• 求较短边：$a = \\sqrt{c^2 - b^2}$。<br>' +
    '<br>' +
    '<b>关键技能</b><br>' +
    '• 在 2D 问题（距离、对角线）中应用勾股定理。<br>' +
    '• <b>3D 勾股定理</b>（拓展）：求空间对角线 $d = \\sqrt{l^2 + w^2 + h^2}$。<br>' +
    '• 使用勾股定理检查三角形是否为直角三角形：如果 $a^2 + b^2 = c^2$，则是。<br>' +
    '<br>' +
    '<b>注意！</b><br>' +
    '斜边总是直角的对边。在应用定理之前，务必先确定斜边。'
});

add('cie', '6.1', 'examples', {
  content:
    '<b>Worked Example 1</b> [2 marks]<br>' +
    'Find the hypotenuse of a right triangle with legs 6 cm and 8 cm.<br><br>' +
    '<b>Solution:</b><br>' +
    '$c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$ cm<br><br>' +
    '<b>Worked Example 2</b> (Extended) [3 marks]<br>' +
    'A cuboid is $3 \\times 4 \\times 12$. Find the space diagonal.<br><br>' +
    '<b>Solution:</b><br>' +
    '$d = \\sqrt{3^2 + 4^2 + 12^2} = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13$',
  content_zh:
    '<b>经典例题 1</b> [2 分]<br>' +
    '直角边 6 cm 和 8 cm，求斜边。<br><b>解答：</b>$\\sqrt{100} = 10$ cm<br><br>' +
    '<b>经典例题 2</b>（Extended）[3 分]<br>' +
    '长方体 $3 \\times 4 \\times 12$，求空间对角线。<br><b>解答：</b>$\\sqrt{169} = 13$'
});

// ── 6.2 Right-angled triangles ──
add('cie', '6.2', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>SOHCAHTOA</b>:<br>' +
    '&nbsp;&nbsp;$\\sin\\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}$<br>' +
    '&nbsp;&nbsp;$\\cos\\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}$<br>' +
    '&nbsp;&nbsp;$\\tan\\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}}$<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Find a missing side: identify which ratio involves the known side and the unknown side.<br>' +
    '• Find a missing angle: use the inverse function ($\\sin^{-1}$, $\\cos^{-1}$, $\\tan^{-1}$).<br>' +
    '• <b>Angle of elevation</b>: looking UP from horizontal. <b>Angle of depression</b>: looking DOWN from horizontal.<br><br>' +
    '<b>Exam Tip</b><br>' +
    'Label the sides O, A, H relative to the angle you are using. Then choose the correct ratio.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>SOHCAHTOA</b>：<br>' +
    '&nbsp;&nbsp;$\\sin\\theta = \\frac{\\text{对边}}{\\text{斜边}}$<br>' +
    '&nbsp;&nbsp;$\\cos\\theta = \\frac{\\text{邻边}}{\\text{斜边}}$<br>' +
    '&nbsp;&nbsp;$\\tan\\theta = \\frac{\\text{对边}}{\\text{邻边}}$<br>' +
    '<br>' +
    '<b>关键技能</b><br>' +
    '• 求未知边：确定哪个比率涉及已知边和未知边。<br>' +
    '• 求未知角：使用反函数（$\\sin^{-1}$，$\\cos^{-1}$，$\\tan^{-1}$）。<br>' +
    '• <b>仰角</b>：从水平线向上看。<b>俯角</b>：从水平线向下看。<br>' +
    '<br>' +
    '<b>考试技巧</b><br>' +
    '相对于你正在使用的角，将各边标注为 O（对边）、A（邻边）、H（斜边）。然后选择正确的比率。'
});

add('cie', '6.2', 'examples', {
  content:
    '<b>Worked Example</b> [4 marks]<br>' +
    'From the top of a 25 m cliff, the angle of depression to a boat is $32°$. Find the horizontal distance from the base of the cliff to the boat.<br><br>' +
    '<b>Solution:</b><br>' +
    'The angle of depression from top = angle of elevation from boat = $32°$.<br>' +
    '$\\tan 32° = \\frac{25}{d}$ → $d = \\frac{25}{\\tan 32°} = \\frac{25}{0.6249} = 40.0$ m<br><br>' +
    '<b>Exam Tip:</b> Draw a clear diagram. Angle of depression from the top equals the angle of elevation from the bottom (alternate angles).',
  content_zh:
    '<b>经典例题</b> [4 分]<br>' +
    '从 25 m 高的悬崖顶部看一艘船的俯角为 $32°$。求从悬崖底部到船的水平距离。<br>' +
    '<br>' +
    '<b>解答：</b><br>' +
    '顶部的俯角 = 船的仰角 = $32°$。<br>' +
    '$\\tan 32° = \\frac{25}{d}$ → $d = \\frac{25}{\\tan 32°} = \\frac{25}{0.6249} = 40.0$ m<br>' +
    '<br>' +
    '<b>考试技巧：</b>画一个清晰的图示。顶部的俯角等于底部的仰角（内错角）。'
});

// ── 6.3 Exact trigonometric values ──
add('cie', '6.3', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    'You must know these exact values (no calculator):<br><br>' +
    '• $0°$: $\\sin = 0$, $\\cos = 1$, $\\tan = 0$<br>' +
    '• $30°$: $\\sin = \\frac{1}{2}$, $\\cos = \\frac{\\sqrt{3}}{2}$, $\\tan = \\frac{1}{\\sqrt{3}}$<br>' +
    '• $45°$: $\\sin = \\frac{\\sqrt{2}}{2}$, $\\cos = \\frac{\\sqrt{2}}{2}$, $\\tan = 1$<br>' +
    '• $60°$: $\\sin = \\frac{\\sqrt{3}}{2}$, $\\cos = \\frac{1}{2}$, $\\tan = \\sqrt{3}$<br>' +
    '• $90°$: $\\sin = 1$, $\\cos = 0$, $\\tan$ = undefined<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Derive values from the 45-45-90 triangle (sides $1, 1, \\sqrt{2}$) and 30-60-90 triangle (sides $1, \\sqrt{3}, 2$).<br>' +
    '• Use exact values in calculations without a calculator.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '必须记住（不用计算器）：<br>' +
    '• $\\sin 30° = \\frac{1}{2}$, $\\cos 30° = \\frac{\\sqrt{3}}{2}$, $\\tan 30° = \\frac{1}{\\sqrt{3}}$<br>' +
    '• $\\sin 45° = \\cos 45° = \\frac{\\sqrt{2}}{2}$, $\\tan 45° = 1$<br>' +
    '• $\\sin 60° = \\frac{\\sqrt{3}}{2}$, $\\cos 60° = \\frac{1}{2}$, $\\tan 60° = \\sqrt{3}$<br><br>' +
    '来源：45-45-90 三角形（边 $1, 1, \\sqrt{2}$）和 30-60-90 三角形（边 $1, \\sqrt{3}, 2$）。'
});

add('cie', '6.3', 'examples', {
  content:
    '<b>Worked Example</b> [3 marks]<br>' +
    'Without a calculator, find the exact value of $\\frac{\\sin 60°}{\\cos 30°} + \\tan 45°$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$\\sin 60° = \\frac{\\sqrt{3}}{2}$, $\\cos 30° = \\frac{\\sqrt{3}}{2}$, $\\tan 45° = 1$<br>' +
    '$\\frac{\\frac{\\sqrt{3}}{2}}{\\frac{\\sqrt{3}}{2}} + 1 = 1 + 1 = 2$<br><br>' +
    '<b>Worked Example 2</b> [2 marks]<br>' +
    'An equilateral triangle has side 4 cm. Find the exact area.<br><br>' +
    '<b>Solution:</b><br>' +
    'Height $= 4\\sin 60° = 4 \\times \\frac{\\sqrt{3}}{2} = 2\\sqrt{3}$<br>' +
    'Area $= \\frac{1}{2} \\times 4 \\times 2\\sqrt{3} = 4\\sqrt{3}\\text{ cm}^2$',
  content_zh:
    '<b>经典例题</b> [3 分]<br>' +
    '不用计算器求 $\\frac{\\sin 60°}{\\cos 30°} + \\tan 45°$ 的精确值。<br><br>' +
    '<b>解答：</b>$\\frac{\\frac{\\sqrt{3}}{2}}{\\frac{\\sqrt{3}}{2}} + 1 = 2$<br><br>' +
    '<b>经典例题 2</b> [2 分]<br>' +
    '等边三角形边长 4 cm，求精确面积。<br>' +
    '<b>解答：</b>高 $= 2\\sqrt{3}$，面积 $= 4\\sqrt{3}\\text{ cm}^2$'
});

// ── 6.4 Trigonometric functions ──
add('cie', '6.4', 'knowledge', {
  content:
    '<b>Extended Only</b><br><br>' +
    '<b>Recap</b><br>' +
    '• <b>Sine curve</b> $y = \\sin x$: period $360°$, amplitude 1, passes through origin.<br>' +
    '• <b>Cosine curve</b> $y = \\cos x$: period $360°$, amplitude 1, starts at $(0, 1)$.<br>' +
    '• <b>Tangent curve</b> $y = \\tan x$: period $180°$, has vertical asymptotes at $90°, 270°$, etc.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Sketch trig graphs for $0° \\leq x \\leq 360°$ (or beyond).<br>' +
    '• Use symmetry of trig graphs to find multiple solutions: e.g. if $\\sin x = 0.5$, then $x = 30°$ or $x = 150°$.<br>' +
    '• Solve equations like $\\sin x = k$ in a given range.<br><br>' +
    '<b>Exam Tip</b><br>' +
    'Sketch the graph to see how many solutions exist in the given range. CAST diagram helps determine signs in each quadrant.',
  content_zh:
    '<b>仅限进阶 (Extended Only)</b><br>' +
    '<br>' +
    '<b>知识回顾</b><br>' +
    '• <b>正弦曲线</b> $y = \\sin x$：周期为 $360°$，振幅为 1，过原点。<br>' +
    '• <b>余弦曲线</b> $y = \\cos x$：周期为 $360°$，振幅为 1，起始于 $(0, 1)$。<br>' +
    '• <b>正切曲线</b> $y = \\tan x$：周期为 $180°$，在 $90°, 270°$ 等处有垂直渐近线。<br>' +
    '<br>' +
    '<b>关键技能</b><br>' +
    '• 绘制 $0° \\leq x \\leq 360°$（或更大范围）的三角函数图像。<br>' +
    '• 利用三角函数图像的对称性寻找多个解：例如，若 $\\sin x = 0.5$，则 $x = 30°$ 或 $x = 150°$。<br>' +
    '• 在给定范围内解方程，如 $\\sin x = k$。<br>' +
    '<br>' +
    '<b>考试技巧</b><br>' +
    '绘制图像以查看在给定范围内存在多少个解。CAST 图有助于确定每个象限中的符号。'
});

add('cie', '6.4', 'examples', {
  content:
    '<b>Worked Example</b> [3 marks]<br>' +
    'Solve $\\sin x = 0.6$ for $0° \\leq x \\leq 360°$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$x = \\sin^{-1}(0.6) = 36.87°$<br>' +
    'Sine is also positive in Q2: $x = 180° - 36.87° = 143.13°$<br>' +
    '$x = 36.9°$ or $x = 143.1°$ (1 d.p.)<br><br>' +
    '<b>Exam Tip:</b> For $\\sin x = k$ (positive): solutions are $x$ and $180° - x$. For $\\cos x = k$ (positive): solutions are $x$ and $360° - x$.',
  content_zh:
    '<b>经典例题</b> [3 分]<br>' +
    '解 $\\sin x = 0.6$ 对于 $0° \\leq x \\leq 360°$。<br>' +
    '<br>' +
    '<b>解答：</b><br>' +
    '$x = \\sin^{-1}(0.6) = 36.87°$<br>' +
    '正弦在第二象限也是正值：$x = 180° - 36.87° = 143.13°$<br>' +
    '$x = 36.9°$ 或 $x = 143.1°$（保留 1 位小数）<br>' +
    '<br>' +
    '<b>考试技巧：</b>对于 $\\sin x = k$（正值）：解为 $x$ 和 $180° - x$。对于 $\\cos x = k$（正值）：解为 $x$ 和 $360° - x$。'
});

// ── 6.5 Non-right-angled triangles ──
add('cie', '6.5', 'knowledge', {
  content:
    '<b>Extended Only</b><br><br>' +
    '<b>Sine Rule</b><br>' +
    '$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$<br>' +
    'Use when you have: a side and its opposite angle PLUS one other piece.<br><br>' +
    '<b>Cosine Rule</b><br>' +
    '• Finding a side: $a^2 = b^2 + c^2 - 2bc\\cos A$<br>' +
    '• Finding an angle: $\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$<br>' +
    'Use when you have: SAS (two sides + included angle) or SSS (three sides).<br><br>' +
    '<b>Area Formula</b><br>' +
    '$A = \\frac{1}{2}ab\\sin C$<br><br>' +
    '<b>Watch Out!</b><br>' +
    'The <b>ambiguous case</b> of the sine rule: when finding an angle, there may be two possible answers (acute and obtuse). Check if the obtuse answer is valid in context.',
  content_zh:
    '<b>仅 Extended</b><br><br>' +
    '<b>正弦定则</b>：$\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$（有一组对边对角时使用）<br><br>' +
    '<b>余弦定则</b>：$a^2 = b^2 + c^2 - 2bc\\cos A$（SAS 或 SSS 时使用）<br>' +
    '求角：$\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$<br><br>' +
    '<b>面积</b>：$A = \\frac{1}{2}ab\\sin C$<br><br>' +
    '<b>注意！</b>正弦定则的<b>歧义情况</b>：求角时可能有两个解（锐角和钝角）。'
});

add('cie', '6.5', 'examples', {
  content:
    '<b>Worked Example 1</b> [3 marks]<br>' +
    'In $\\triangle ABC$: $A = 40°$, $B = 75°$, $a = 10$ cm. Find side $b$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$\\frac{10}{\\sin 40°} = \\frac{b}{\\sin 75°}$<br>' +
    '$b = \\frac{10 \\sin 75°}{\\sin 40°} = \\frac{10 \\times 0.9659}{0.6428} = 15.0$ cm<br><br>' +
    '<b>Worked Example 2</b> [4 marks]<br>' +
    'In $\\triangle PQR$: $p = 7$, $q = 9$, $r = 5$. Find angle $Q$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$\\cos Q = \\frac{7^2 + 5^2 - 9^2}{2 \\times 7 \\times 5} = \\frac{49 + 25 - 81}{70} = \\frac{-7}{70} = -0.1$<br>' +
    '$Q = \\cos^{-1}(-0.1) = 95.7°$',
  content_zh:
    '<b>经典例题 1</b> [3 分]<br>' +
    '$A = 40°, B = 75°, a = 10$。求 $b$。<br><br>' +
    '<b>解答：</b>$b = \\frac{10\\sin 75°}{\\sin 40°} = 15.0$ cm<br><br>' +
    '<b>经典例题 2</b> [4 分]<br>' +
    '$p = 7, q = 9, r = 5$。求角 $Q$。<br><br>' +
    '<b>解答：</b>$\\cos Q = \\frac{-7}{70} = -0.1$，$Q = 95.7°$'
});

// ── 6.6 3D trigonometry ──
add('cie', '6.6', 'knowledge', {
  content:
    '<b>Extended Only</b><br><br>' +
    '<b>Recap</b><br>' +
    '• In 3D problems, identify <b>right-angled triangles</b> within the solid.<br>' +
    '• Apply <b>Pythagoras</b> and <b>SOHCAHTOA</b> to these 2D cross-sections.<br>' +
    '• Common 3D shapes: cuboid, pyramid, wedge, cone.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Find the <b>angle between a line and a plane</b>: drop a perpendicular from the point to the plane, identify the right triangle.<br>' +
    '• Find the <b>angle between two planes</b>: find the line where they intersect, then draw perpendiculars in each plane to this line.<br>' +
    '• Usually requires <b>two steps</b>: first find a length (using Pythagoras), then an angle (using trig).<br><br>' +
    '<b>Exam Tip</b><br>' +
    'Draw a clear 2D right triangle extracted from the 3D shape. Label all known and unknown sides/angles.',
  content_zh:
    '<b>仅限进阶 (Extended Only)</b><br>' +
    '<br>' +
    '<b>知识回顾</b><br>' +
    '• 在 3D 问题中，识别立体图形内部的<b>直角三角形</b>。<br>' +
    '• 将<b>勾股定理</b>（Pythagoras）和 <b>SOHCAHTOA</b> 应用于这些 2D 截面。<br>' +
    '• 常见的 3D 图形：长方体、棱锥、楔形体、圆锥。<br>' +
    '<br>' +
    '<b>关键技能</b><br>' +
    '• 求<b>直线与平面之间的夹角</b>：从点向平面作垂线，识别直角三角形。<br>' +
    '• 求<b>两个平面之间的夹角</b>：找到它们的交线，然后在每个平面内画出垂直于该交线的垂线。<br>' +
    '• 通常需要<b>两步</b>：首先求长度（利用勾股定理），然后求角度（利用三角函数）。<br>' +
    '<br>' +
    '<b>考试技巧</b><br>' +
    '画出从 3D 图形中提取的清晰 2D 直角三角形。标记所有已知和未知的边/角。'
});

add('cie', '6.6', 'examples', {
  content:
    '<b>Worked Example</b> [5 marks]<br>' +
    'A cuboid has dimensions $8 \\times 6 \\times 4$ cm. Find the angle between the space diagonal $AG$ and the base $ABCD$.<br><br>' +
    '<b>Solution:</b><br>' +
    'Step 1: Find base diagonal $AC = \\sqrt{8^2 + 6^2} = \\sqrt{100} = 10$ cm.<br>' +
    'Step 2: The space diagonal $AG$ goes from $A$ at the base to $G$ at the top. The right triangle has:<br>' +
    '• Base $= AC = 10$ cm (along the base)<br>' +
    '• Height $= CG = 4$ cm (vertical edge)<br>' +
    '$\\tan\\theta = \\frac{4}{10} = 0.4$<br>' +
    '$\\theta = \\tan^{-1}(0.4) = 21.8°$<br><br>' +
    '<b>Exam Tip:</b> Always identify which plane and which line. The angle is measured AT the base.',
  content_zh:
    '<b>经典例题</b> [5 分]<br>' +
    '一个长方体的尺寸为 $8 \\times 6 \\times 4$ cm。求空间对角线 $AG$ 与底面 $ABCD$ 之间的夹角。<br>' +
    '<br>' +
    '<b>解答：</b><br>' +
    '第一步：求底面对角线 $AC = \\sqrt{8^2 + 6^2} = \\sqrt{100} = 10$ cm。<br>' +
    '第二步：空间对角线 $AG$ 从底部的 $A$ 延伸到顶部的 $G$。对应的直角三角形具有：<br>' +
    '• 底边 $= AC = 10$ cm（沿底面）<br>' +
    '• 高度 $= CG = 4$ cm（垂直棱）<br>' +
    '$\\tan\\theta = \\frac{4}{10} = 0.4$<br>' +
    '$\\theta = \\tan^{-1}(0.4) = 21.8°$<br>' +
    '<br>' +
    '<b>考试技巧：</b>始终明确是哪个平面和哪条线。角度是在底面（AT the base）处测量的。'
});

/* ══════════════════════════════════════════════════
   Edexcel 4MA1 — Chapter 5: Vectors and transformation geometry (5.1 – 5.2)
   ══════════════════════════════════════════════════ */

// ── Edexcel 5.1 Vectors ──
add('edexcel', '5.1', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• A <b>vector</b> has magnitude (size) and direction. Written as $\\vec{AB}$, $\\mathbf{a}$, or $\\binom{x}{y}$.<br>' +
    '• A <b>scalar</b> has magnitude only (just a number).<br>' +
    '• <b>Column vector</b>: $\\binom{3}{-2}$ means 3 right and 2 down.<br>' +
    '• <b>Addition</b>: $\\binom{a}{b} + \\binom{c}{d} = \\binom{a+c}{b+d}$.<br>' +
    '• <b>Scalar multiplication</b>: $k\\binom{a}{b} = \\binom{ka}{kb}$.<br>' +
    '• <b>Magnitude</b>: $|\\mathbf{a}| = \\sqrt{x^2 + y^2}$.<br>' +
    '• <b>Parallel vectors</b>: one is a scalar multiple of the other.<br>' +
    '• $-\\mathbf{a}$ reverses direction. $\\vec{BA} = -\\vec{AB}$.<br><br>' +
    '<b>Higher Only</b><br>' +
    '• <b>Vector geometry proofs</b>: express vectors in terms of $\\mathbf{a}$ and $\\mathbf{b}$.<br>' +
    '• To prove points are collinear, show one vector is a scalar multiple of another.<br>' +
    '• Midpoint: $\\vec{OM} = \\frac{1}{2}(\\vec{OA} + \\vec{OB})$.<br><br>' +
    '<b>Exam Tip</b><br>' +
    'When finding a route, go via known points: $\\vec{AC} = \\vec{AB} + \\vec{BC}$.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>向量</b>有大小和方向。列向量 $\\binom{3}{-2}$：右 3 下 2。<br>' +
    '• 加法：$\\binom{a}{b} + \\binom{c}{d} = \\binom{a+c}{b+d}$。<br>' +
    '• 标量乘法：$k\\binom{a}{b} = \\binom{ka}{kb}$。模：$|\\mathbf{a}| = \\sqrt{x^2+y^2}$。<br>' +
    '• 平行向量：一个是另一个的标量倍。$-\\mathbf{a}$ 反向。<br><br>' +
    '<b>仅 Higher</b><br>' +
    '• 向量几何证明：用 $\\mathbf{a}, \\mathbf{b}$ 表示向量。<br>' +
    '• 共线：一个向量是另一个的标量倍。<br><br>' +
    '<b>考试技巧</b>经过已知点找路径：$\\vec{AC} = \\vec{AB} + \\vec{BC}$。'
});

add('edexcel', '5.1', 'examples', {
  content:
    '<b>Worked Example 1</b> [2 marks]<br>' +
    '$\\mathbf{a} = \\binom{3}{-1}$ and $\\mathbf{b} = \\binom{-2}{4}$. Find $2\\mathbf{a} + \\mathbf{b}$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$2\\mathbf{a} + \\mathbf{b} = \\binom{6}{-2} + \\binom{-2}{4} = \\binom{4}{2}$<br><br>' +
    '<b>Worked Example 2</b> (Higher) [4 marks]<br>' +
    '$\\vec{OA} = \\mathbf{a}$, $\\vec{OB} = \\mathbf{b}$. $M$ is the midpoint of $AB$. Find $\\vec{OM}$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$\\vec{AB} = \\mathbf{b} - \\mathbf{a}$<br>' +
    '$\\vec{AM} = \\frac{1}{2}\\vec{AB} = \\frac{1}{2}(\\mathbf{b} - \\mathbf{a})$<br>' +
    '$\\vec{OM} = \\vec{OA} + \\vec{AM} = \\mathbf{a} + \\frac{1}{2}(\\mathbf{b} - \\mathbf{a}) = \\frac{1}{2}\\mathbf{a} + \\frac{1}{2}\\mathbf{b} = \\frac{1}{2}(\\mathbf{a} + \\mathbf{b})$',
  content_zh:
    '<b>经典例题 1</b> [2 分]<br>' +
    '$\\mathbf{a} = \\binom{3}{-1}$，$\\mathbf{b} = \\binom{-2}{4}$。求 $2\\mathbf{a} + \\mathbf{b}$。<br><br>' +
    '<b>解答：</b>$\\binom{4}{2}$<br><br>' +
    '<b>经典例题 2</b>（Higher）[4 分]<br>' +
    '$\\vec{OA} = \\mathbf{a}$，$\\vec{OB} = \\mathbf{b}$，$M$ 为 $AB$ 中点。求 $\\vec{OM}$。<br><br>' +
    '<b>解答：</b>$\\vec{OM} = \\frac{1}{2}(\\mathbf{a} + \\mathbf{b})$'
});

// ── Edexcel 5.2 Transformation geometry ──
add('edexcel', '5.2', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Translation</b>: slide by vector $\\binom{a}{b}$. No change in size, shape, or orientation.<br>' +
    '• <b>Reflection</b>: flip in a mirror line. Describe with the <b>equation of the line</b>.<br>' +
    '• <b>Rotation</b>: turn about a centre. Describe with <b>centre, angle, direction</b> (clockwise/anticlockwise).<br>' +
    '• <b>Enlargement</b>: resize from a centre. Describe with <b>centre, scale factor</b>.<br>' +
    '&nbsp;&nbsp;$k > 1$: bigger. $0 < k < 1$: smaller. $k < 0$: inverted (Higher).<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Perform each transformation on a shape on a coordinate grid.<br>' +
    '• <b>Describe</b> a given transformation fully (must include all required details).<br><br>' +
    '<b>Watch Out!</b><br>' +
    '"Describe fully" means you need ALL the details. For rotation: centre + angle + direction. For enlargement: centre + scale factor. Missing any one loses marks.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>平移</b>：按向量 $\\binom{a}{b}$ 滑动。大小、形状或方向没有变化。<br>' +
    '• <b>反射</b>：在镜像线中翻转。用<b>直线方程</b>描述。<br>' +
    '• <b>旋转</b>：绕中心转动。用<b>中心、角度、方向</b>（顺时针/逆时针）描述。<br>' +
    '• <b>位似（放大/缩小）</b>：从中心调整大小。用<b>中心、比例因子</b>描述。<br>' +
    '&nbsp;&nbsp;$k > 1$：变大。$0 < k < 1$：变小。$k < 0$：倒置（仅 Higher）。<br>' +
    '<br>' +
    '<b>关键技能</b><br>' +
    '• 在坐标网格上的图形上执行每种变换。<br>' +
    '• <b>完整描述</b>给定的变换（必须包括所有必需的细节）。<br>' +
    '<br>' +
    '<b>注意！</b><br>' +
    '"Describe fully"（完整描述）意味着你需要所有的细节。对于旋转：中心 + 角度 + 方向。对于位似：中心 + 比例因子。遗漏任何一项都会扣分。'
});

add('edexcel', '5.2', 'examples', {
  content:
    '<b>Worked Example 1</b> [3 marks]<br>' +
    'Triangle $A$ has vertices $(1,1)$, $(3,1)$, $(1,4)$. It is rotated $90°$ clockwise about the origin. Find the image vertices.<br><br>' +
    '<b>Solution:</b><br>' +
    '$90°$ clockwise: $(x, y) \\rightarrow (y, -x)$<br>' +
    '$(1,1) \\rightarrow (1,-1)$, $(3,1) \\rightarrow (1,-3)$, $(1,4) \\rightarrow (4,-1)$<br><br>' +
    '<b>Worked Example 2</b> [3 marks]<br>' +
    'Describe fully the single transformation that maps triangle $P$ at $(2,3), (6,3), (6,5)$ to triangle $Q$ at $(4,6), (12,6), (12,10)$.<br><br>' +
    '<b>Solution:</b><br>' +
    '<b>Enlargement</b>, scale factor <b>2</b>, centre <b>$(0, 0)$</b>.<br>' +
    '(Each coordinate is doubled, so centre is origin.)',
  content_zh:
    '<b>经典例题 1</b> [3 分]<br>' +
    '三角形顶点 $(1,1), (3,1), (1,4)$，绕原点顺时针旋转 $90°$。求像。<br><br>' +
    '<b>解答：</b>$(x,y) \\rightarrow (y,-x)$：$(1,-1), (1,-3), (4,-1)$<br><br>' +
    '<b>经典例题 2</b> [3 分]<br>' +
    '描述变换：$P(2,3),(6,3),(6,5)$ → $Q(4,6),(12,6),(12,10)$。<br><br>' +
    '<b>解答：</b>以原点为中心、缩放因子 2 的<b>放大</b>。'
});

/* ══════════════════════════════════════════════════
   Edexcel 4MA1 — Chapter 6: Statistics and probability (6.1 – 6.3)
   ══════════════════════════════════════════════════ */

// ── Edexcel 6.1 Graphical representation of data ──
add('edexcel', '6.1', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Bar chart</b>: bars for categorical data. Gaps between bars.<br>' +
    '• <b>Pictogram</b>: pictures represent data. Include a key.<br>' +
    '• <b>Pie chart</b>: angles proportional to frequency. Total = $360°$.<br>' +
    '• <b>Line graph</b>: for time series data. Plot points and join.<br>' +
    '• <b>Stem-and-leaf diagram</b>: ordered raw data display. Must include a key.<br>' +
    '• <b>Frequency polygon</b>: plot midpoints of classes, join with straight lines.<br>' +
    '• <b>Scatter diagram</b>: show relationship between two variables. Describe <b>correlation</b> (positive, negative, none).<br><br>' +
    '<b>Higher Only</b><br>' +
    '• <b>Histogram</b>: frequency density $= \\frac{\\text{frequency}}{\\text{class width}}$. <b>No gaps</b> between bars.<br>' +
    '• <b>Cumulative frequency</b>: running total plotted at upper class boundary. S-shaped curve.<br>' +
    '• <b>Box plot</b> (box-and-whisker): min, LQ, median, UQ, max.<br><br>' +
    '<b>Exam Tip</b><br>' +
    'In histograms, the <b>area</b> of each bar represents frequency, not the height.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>柱状图</b>：用于分类数据的条形。条形之间有间隔。<br>' +
    '• <b>象形图</b>：图片代表数据。包括图例（Key）。<br>' +
    '• <b>饼图</b>：角度与频率成正比。总计 $= 360°$。<br>' +
    '• <b>折线图</b>：用于时间序列数据。描点并连接。<br>' +
    '• <b>茎叶图</b>：有序原始数据显示。必须包括图例（Key）。<br>' +
    '• <b>频率多边形</b>：描出各组的中点，用直线连接。<br>' +
    '• <b>散点图</b>：显示两个变量之间的关系。描述<b>相关性</b>（正相关、负相关、无相关）。<br>' +
    '<br>' +
    '<b>仅 Higher</b><br>' +
    '• <b>直方图</b>：频率密度 $= \\frac{\\text{frequency}}{\\text{class width}}$。条形之间<b>没有间隔</b>。<br>' +
    '• <b>累积频率</b>：在组上限描出的累计总量。S 形曲线。<br>' +
    '• <b>箱线图</b>（盒须图）：最小值、下四分位数（LQ）、中位数、上四分位数（UQ）、最大值。<br>' +
    '<br>' +
    '<b>考试技巧</b><br>' +
    '在直方图中，每个条形的<b>面积</b>代表频率，而不是高度。'
});

add('edexcel', '6.1', 'examples', {
  content:
    '<b>Worked Example 1</b> [2 marks]<br>' +
    '40 students took a test. Draw a pie chart angle for the 15 who scored A.<br><br>' +
    '<b>Solution:</b><br>' +
    'Angle $= \\frac{15}{40} \\times 360° = 135°$<br><br>' +
    '<b>Worked Example 2</b> (Higher) [3 marks]<br>' +
    'A grouped frequency table has class $10 \\leq x < 25$ with frequency 30. Find the frequency density and bar height for the histogram.<br><br>' +
    '<b>Solution:</b><br>' +
    'Class width $= 25 - 10 = 15$<br>' +
    'Frequency density $= \\frac{30}{15} = 2$<br>' +
    'The bar has height 2 and width from 10 to 25.',
  content_zh:
    '<b>经典例题 1</b> [2 分]<br>' +
    '40 名学生中 15 人得 A，画饼图角度。<br><b>解答：</b>$\\frac{15}{40} \\times 360° = 135°$<br><br>' +
    '<b>经典例题 2</b>（Higher）[3 分]<br>' +
    '分组频率表：$10 \\leq x < 25$，频率 30。求频率密度。<br><b>解答：</b>组距 15，频率密度 $= \\frac{30}{15} = 2$'
});

// ── Edexcel 6.2 Statistical measures ──
add('edexcel', '6.2', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Mean</b> $= \\frac{\\text{sum of values}}{\\text{number of values}}$. For grouped data: $\\bar{x} = \\frac{\\sum fx}{\\sum f}$ (use midpoints).<br>' +
    '• <b>Median</b>: middle value when data is ordered. Position: $\\frac{n+1}{2}$.<br>' +
    '• <b>Mode</b>: most common value. Can have no mode or multiple modes.<br>' +
    '• <b>Range</b> $=$ largest $-$ smallest.<br><br>' +
    '<b>Higher Only</b><br>' +
    '• <b>Interquartile range (IQR)</b> $= Q_3 - Q_1$. Measures the spread of the middle 50%.<br>' +
    '• From cumulative frequency: median at $\\frac{n}{2}$, $Q_1$ at $\\frac{n}{4}$, $Q_3$ at $\\frac{3n}{4}$.<br>' +
    '• Compare distributions using an average (mean or median) AND a measure of spread (range or IQR).<br><br>' +
    '<b>Exam Tip</b><br>' +
    'For grouped data, the mean uses midpoints so it is an <b>estimate</b>. Say "estimated mean".',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>平均数 (Mean)</b> $= \\frac{\\text{sum of values}}{\\text{number of values}}$。对于分组数据：$\\bar{x} = \\frac{\\sum fx}{\\sum f}$（使用组中值）。<br>' +
    '• <b>中位数 (Median)</b>：数据排序后的中间值。位置：$\\frac{n+1}{2}$。<br>' +
    '• <b>众数 (Mode)</b>：最常见的值。可以没有众数或有多个众数。<br>' +
    '• <b>极差 (Range)</b> $=$ largest $-$ smallest。<br>' +
    '<br>' +
    '<b>仅 Higher</b><br>' +
    '• <b>四分位距 (IQR)</b> $= Q_3 - Q_1$。衡量中间 50% 数据的离散程度。<br>' +
    '• 根据累积频数：中位数位于 $\\frac{n}{2}$，$Q_1$ 位于 $\\frac{n}{4}$，$Q_3$ 位于 $\\frac{3n}{4}$。<br>' +
    '• 使用平均数（平均值或中位数）以及离散程度（极差或 IQR）来比较分布。<br>' +
    '<br>' +
    '<b>考试技巧</b><br>' +
    '对于分组数据，平均数使用组中值计算，因此它是一个<b>估计值</b>。请表述为"估计平均数 (estimated mean)"。'
});

add('edexcel', '6.2', 'examples', {
  content:
    '<b>Worked Example 1</b> [3 marks]<br>' +
    'Five students scored: 45, 62, 58, 71, 54. Find the mean, median, and range.<br><br>' +
    '<b>Solution:</b><br>' +
    'Mean $= \\frac{45+62+58+71+54}{5} = \\frac{290}{5} = 58$<br>' +
    'Ordered: 45, 54, 58, 62, 71. Median $= 58$<br>' +
    'Range $= 71 - 45 = 26$<br><br>' +
    '<b>Worked Example 2</b> (Higher) [4 marks]<br>' +
    'From a cumulative frequency graph, $n = 80$. Read off the median and IQR.<br><br>' +
    '<b>Solution:</b><br>' +
    'Median at $\\frac{80}{2} = 40$th value. Read across: median $= 52$.<br>' +
    '$Q_1$ at 20th value $= 43$. $Q_3$ at 60th value $= 64$.<br>' +
    'IQR $= 64 - 43 = 21$.',
  content_zh:
    '<b>经典例题 1</b> [3 分]<br>' +
    '五名学生的得分为：45, 62, 58, 71, 54。求平均数、中位数和极差。<br>' +
    '<br>' +
    '<b>解答：</b><br>' +
    '平均数 $= \\frac{45+62+58+71+54}{5} = \\frac{290}{5} = 58$<br>' +
    '排序后：45, 54, 58, 62, 71。中位数 $= 58$<br>' +
    '极差 $= 71 - 45 = 26$<br>' +
    '<br>' +
    '<b>经典例题 2</b>（Higher）[4 分]<br>' +
    '根据累积频数图，$n = 80$。读出中位数和四分位距（IQR）。<br>' +
    '<br>' +
    '<b>解答：</b><br>' +
    '中位数位于第 $\\frac{80}{2} = 40$ 个数值处。水平读取：中位数 $= 52$。<br>' +
    '$Q_1$ 位于第 20 个数值处 $= 43$。$Q_3$ 位于第 60 个数值处 $= 64$。<br>' +
    'IQR $= 64 - 43 = 21$。'
});

// ── Edexcel 6.3 Probability ──
add('edexcel', '6.3', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• $P(\\text{event}) = \\frac{\\text{favourable outcomes}}{\\text{total outcomes}}$. Always $0 \\leq P \\leq 1$.<br>' +
    '• $P(\\text{not } A) = 1 - P(A)$.<br>' +
    '• <b>Sample space</b>: list of all outcomes. Use tables or lists for combined events.<br>' +
    '• <b>Relative frequency</b> $= \\frac{\\text{number of times event occurs}}{\\text{total trials}}$. Better estimate with more trials.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• <b>Tree diagrams</b>: multiply along branches (AND), add between branches (OR).<br>' +
    '• <b>Independent events</b>: $P(A \\text{ and } B) = P(A) \\times P(B)$.<br>' +
    '• <b>Mutually exclusive</b>: $P(A \\text{ or } B) = P(A) + P(B)$.<br><br>' +
    '<b>Higher Only</b><br>' +
    '• <b>Conditional probability</b>: $P(A | B) = \\frac{P(A \\cap B)}{P(B)}$.<br>' +
    '• <b>Without replacement</b>: probabilities change on second pick.<br>' +
    '• <b>Venn diagrams</b>: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.<br><br>' +
    '<b>Watch Out!</b><br>' +
    '"At least one" is easiest solved as $1 - P(\\text{none})$.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• $P(\\text{事件}) = \\frac{\\text{有利结果}}{\\text{总结果}}$。概率值始终满足 $0 \\leq P \\leq 1$。<br>' +
    '• $P(\\text{非 } A) = 1 - P(A)$。<br>' +
    '• <b>样本空间 (Sample space)</b>：列出所有可能结果的完整清单。对于组合事件，建议使用表格或列表进行系统列举。<br>' +
    '• <b>相对频率 (Relative frequency)</b> $= \\frac{\\text{事件发生的次数}}{\\text{总试验次数}}$。随着试验次数的增加，相对频率对理论概率的估算会越发准确。<br><br>' +
    '<b>关键技能</b><br>' +
    '• <b>树状图 (Tree diagrams)</b>：沿路径的分支相乘（表示"且" AND），不同路径的分支结果相加（表示"或" OR）。<br>' +
    '• <b>独立事件 (Independent events)</b>：$P(A \\text{ 且 } B) = P(A) \\times P(B)$。<br>' +
    '• <b>互斥事件 (Mutually exclusive)</b>：$P(A \\text{ 或 } B) = P(A) + P(B)$。<br><br>' +
    '<b>仅 Higher</b><br>' +
    '• <b>条件概率 (Conditional probability)</b>：$P(A | B) = \\frac{P(A \\cap B)}{P(B)}$。<br>' +
    '• <b>不放回抽样 (Without replacement)</b>：在第二次抽取时，由于总数和符合条件数通常都会减少，概率会随之改变。<br>' +
    '• <b>韦恩图 (Venn diagrams)</b>：$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$。<br><br>' +
    '<b>注意！</b><br>' +
    '解决"至少一个 (At least one)"类问题时，最简便的方法通常是使用补集计算：$1 - P(\\text{一个都没有})$。'
});

add('edexcel', '6.3', 'examples', {
  content:
    '<b>Worked Example 1</b> [3 marks]<br>' +
    'A bag has 5 red and 3 blue balls. One is picked at random, not replaced, then another is picked. Find the probability both are red.<br><br>' +
    '<b>Solution:</b><br>' +
    '$P(\\text{1st red}) = \\frac{5}{8}$<br>' +
    '$P(\\text{2nd red} | \\text{1st red}) = \\frac{4}{7}$<br>' +
    '$P(\\text{both red}) = \\frac{5}{8} \\times \\frac{4}{7} = \\frac{20}{56} = \\frac{5}{14}$<br><br>' +
    '<b>Worked Example 2</b> (Higher) [3 marks]<br>' +
    '$P(A) = 0.6$, $P(B) = 0.3$, $P(A \\cap B) = 0.15$. Find $P(A \\cup B)$ and determine if $A$ and $B$ are independent.<br><br>' +
    '<b>Solution:</b><br>' +
    '$P(A \\cup B) = 0.6 + 0.3 - 0.15 = 0.75$<br>' +
    'Check: $P(A) \\times P(B) = 0.18 \\neq 0.15$, so NOT independent.<br><br>' +
    '<b>Exam Tip:</b> Independent ⟺ $P(A \\cap B) = P(A) \\times P(B)$.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• $P(\\text{event}) = \\frac{\\text{favourable outcomes}}{\\text{total outcomes}}$。始终满足 $0 \\leq P \\leq 1$。<br>' +
    '• $P(\\text{not } A) = 1 - P(A)$。<br>' +
    '• <b>样本空间 (Sample space)</b>：列出所有结果的清单。对于复合事件，使用表格或列表。<br>' +
    '• <b>相对频数 (Relative frequency)</b> $= \\frac{\\text{number of times event occurs}}{\\text{total trials}}$。试验次数越多，估计效果越好。<br>' +
    '<br>' +
    '<b>关键技能</b><br>' +
    '• <b>树状图</b>：沿分叉相乘（AND），分叉间相加（OR）。<br>' +
    '• <b>独立事件</b>：$P(A \\text{ and } B) = P(A) \\times P(B)$。<br>' +
    '• <b>互斥事件</b>：$P(A \\text{ or } B) = P(A) + P(B)$。<br>' +
    '<br>' +
    '<b>仅 Higher</b><br>' +
    '• <b>条件概率</b>：$P(A | B) = \\frac{P(A \\cap B)}{P(B)}$。<br>' +
    '• <b>不放回 (Without replacement)</b>：第二次抽取的概率会发生变化。<br>' +
    '• <b>维恩图 (Venn diagrams)</b>：$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$。<br>' +
    '<br>' +
    '<b>注意！</b><br>' +
    '"至少一个"最容易通过 $1 - P(\\text{none})$ 来解答。'
});

/* ══════════════════════════════════════════════════
   OUTPUT SQL
   ══════════════════════════════════════════════════ */
console.log('-- Section content seed: CIE Ch5-6 + Edexcel Ch5-6');
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
