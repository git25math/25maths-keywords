#!/usr/bin/env node
// Seed: CIE Ch2 (Algebra & Graphs) + Edexcel Ch2 (Equations, Formulae & Identities)
// Usage: node scripts/seed-ch2.js > scripts/seed-ch2.sql

var edits = [];
function add(board, id, module, data) {
  edits.push({ board: board, section_id: id, module: module, data: data });
}

/* ══════════════════════════════════════════════════
   CIE 0580 — Chapter 2: Algebra and graphs (2.1 – 2.13)
   ══════════════════════════════════════════════════ */

// ── 2.1 Algebraic notation and substitution ──
add('cie', '2.1', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• In algebra, letters represent unknown values or variables.<br>' +
    '• <b>Coefficient</b>: the number in front of a variable. In $5x$, the coefficient is 5.<br>' +
    '• <b>Term</b>: a number, variable, or product of both. E.g. $3x^2$, $-7y$, $4$.<br>' +
    '• <b>Expression</b>: a collection of terms (no = sign). E.g. $2x + 3y - 1$.<br>' +
    '• <b>Equation</b>: an expression equal to something. E.g. $2x + 3 = 11$.<br>' +
    '• <b>Formula</b>: an equation relating variables. E.g. $A = \\pi r^2$.<br>' +
    '• <b>Identity</b>: true for ALL values. Uses $\\equiv$. E.g. $2(x+1) \\equiv 2x + 2$.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Substitute values into expressions and formulae.<br>' +
    '• Use correct notation: $ab$ means $a \\times b$; $\\frac{a}{b}$ means $a \\div b$.<br>' +
    '• Remember: $x$ means $1x$; $-x^2$ means $-(x^2)$, not $(-x)^2$.<br><br>' +
    '<b>Watch Out!</b><br>' +
    '$-3^2 = -9$ but $(-3)^2 = 9$. Always check if the negative is inside or outside the brackets.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• 代数中字母代表未知数或变量。<br>' +
    '• <b>系数</b>：变量前的数字。$5x$ 中系数是 5。<br>' +
    '• <b>项</b>：数字、变量或其乘积。<br>' +
    '• <b>表达式</b>：项的集合（无等号）。<br>' +
    '• <b>方程</b>：含等号。<b>公式</b>：关联变量的方程。<br>' +
    '• <b>恒等式</b>：对所有值成立，用 $\\equiv$ 表示。<br><br>' +
    '<b>注意！</b><br>' +
    '$-3^2 = -9$，但 $(-3)^2 = 9$。注意负号在括号内还是外。'
});

add('cie', '2.1', 'examples', {
  content:
    '<b>Worked Example</b> [3 marks]<br>' +
    'Given $a = -2$, $b = 3$, $c = -5$, find the value of:<br>' +
    '(a) $3a^2 - 2b$ &nbsp;&nbsp; (b) $\\frac{b - c}{a}$<br><br>' +
    '<b>Solution:</b><br>' +
    '(a) $3(-2)^2 - 2(3) = 3(4) - 6 = 12 - 6 = 6$<br><br>' +
    '(b) $\\frac{3 - (-5)}{-2} = \\frac{8}{-2} = -4$<br><br>' +
    '<b>Exam Tip:</b> Always use brackets when substituting negative numbers to avoid sign errors.',
  content_zh:
    '<b>经典例题</b> [3 分]<br>' +
    '已知 $a = -2$, $b = 3$, $c = -5$，求：<br>' +
    '(a) $3a^2 - 2b$ &nbsp;&nbsp; (b) $\\frac{b - c}{a}$<br><br>' +
    '<b>解答：</b><br>' +
    '(a) $3(-2)^2 - 2(3) = 12 - 6 = 6$<br>' +
    '(b) $\\frac{3-(-5)}{-2} = \\frac{8}{-2} = -4$<br><br>' +
    '<b>考试技巧：</b>代入负数时一定要加括号。'
});

// ── 2.2 Rearranging formulae ──
add('cie', '2.2', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Rearranging</b> (changing the subject): isolate a variable on one side.<br>' +
    '• Use inverse operations in reverse order of BIDMAS.<br>' +
    '• Whatever you do to one side, you must do to the other.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Rearrange simple formulae: $v = u + at$ → $t = \\frac{v - u}{a}$.<br>' +
    '• Handle squares and roots: $A = \\pi r^2$ → $r = \\sqrt{\\frac{A}{\\pi}}$.<br><br>' +
    '<b>Extended Only</b><br>' +
    '• Rearrange where the subject appears twice: collect terms, factorise, divide.<br>' +
    'E.g. $\\frac{ax + b}{cx + d} = e$ → make $x$ the subject.<br><br>' +
    '<b>Watch Out!</b><br>' +
    'When taking a square root, consider both positive and negative roots if the context requires it.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>变换公式</b>：将某个变量移到等号一边。<br>' +
    '• 用逆运算，按 BIDMAS 逆序操作。<br>' +
    '• 等号两边做相同运算。<br><br>' +
    '<b>Extended 扩展</b><br>' +
    '• 变量出现两次时：合并同类项 → 提取公因式 → 除。<br><br>' +
    '<b>注意！</b><br>' +
    '开方时根据情况考虑正负两个根。'
});

add('cie', '2.2', 'examples', {
  content:
    '<b>Worked Example 1</b> [2 marks]<br>' +
    'Make $r$ the subject of $V = \\frac{4}{3}\\pi r^3$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$\\frac{3V}{4\\pi} = r^3$<br>' +
    '$r = \\sqrt[3]{\\frac{3V}{4\\pi}}$<br><br>' +
    '<b>Worked Example 2</b> (Extended) [3 marks]<br>' +
    'Make $x$ the subject of $y = \\frac{x + 3}{x - 1}$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$y(x - 1) = x + 3$<br>' +
    '$xy - y = x + 3$<br>' +
    '$xy - x = y + 3$<br>' +
    '$x(y - 1) = y + 3$<br>' +
    '$x = \\frac{y + 3}{y - 1}$',
  content_zh:
    '<b>经典例题 1</b> [2 分]<br>' +
    '将 $V = \\frac{4}{3}\\pi r^3$ 变为以 $r$ 为主语。<br><br>' +
    '<b>解答：</b>$r = \\sqrt[3]{\\frac{3V}{4\\pi}}$<br><br>' +
    '<b>经典例题 2</b>（Extended）[3 分]<br>' +
    '将 $y = \\frac{x + 3}{x - 1}$ 变为以 $x$ 为主语。<br><br>' +
    '<b>解答：</b><br>' +
    '$y(x-1) = x+3$ → $xy - x = y+3$ → $x(y-1) = y+3$<br>' +
    '$x = \\frac{y+3}{y-1}$'
});

// ── 2.3 Algebraic manipulation ──
add('cie', '2.3', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Collect like terms</b>: $3x + 2x = 5x$; $4x^2 + x$ cannot be simplified.<br>' +
    '• <b>Expand brackets</b>: $a(b + c) = ab + ac$.<br>' +
    '• <b>Expand double brackets</b>: $(x + 2)(x + 3) = x^2 + 5x + 6$.<br>' +
    '• <b>Factorise</b> (reverse of expanding): $6x + 9 = 3(2x + 3)$.<br><br>' +
    '<b>Extended Only</b><br>' +
    '• <b>Factorise quadratics</b>: $x^2 + 5x + 6 = (x + 2)(x + 3)$.<br>' +
    '• <b>Difference of two squares</b>: $a^2 - b^2 = (a + b)(a - b)$.<br>' +
    '• <b>Perfect squares</b>: $a^2 + 2ab + b^2 = (a + b)^2$.<br>' +
    '• <b>Completing the square</b>: $x^2 + bx = (x + \\frac{b}{2})^2 - (\\frac{b}{2})^2$.<br><br>' +
    '<b>Watch Out!</b><br>' +
    '$-(x - 3) = -x + 3$, not $-x - 3$. Distribute the negative sign to ALL terms.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>合并同类项</b>：$3x + 2x = 5x$。<br>' +
    '• <b>展开括号</b>：$a(b+c) = ab + ac$。<br>' +
    '• <b>因式分解</b>：$6x + 9 = 3(2x+3)$。<br><br>' +
    '<b>Extended 扩展</b><br>' +
    '• 二次因式分解：$x^2 + 5x + 6 = (x+2)(x+3)$。<br>' +
    '• 平方差：$a^2 - b^2 = (a+b)(a-b)$。<br>' +
    '• 配方：$x^2 + bx = (x + \\frac{b}{2})^2 - (\\frac{b}{2})^2$。<br><br>' +
    '<b>注意！</b><br>' +
    '$-(x-3) = -x + 3$，负号要分配给括号内每一项。'
});

add('cie', '2.3', 'examples', {
  content:
    '<b>Worked Example 1</b> [2 marks]<br>' +
    'Factorise $x^2 - 7x + 12$.<br><br>' +
    '<b>Solution:</b><br>' +
    'Find two numbers that multiply to $+12$ and add to $-7$: $-3$ and $-4$.<br>' +
    '$x^2 - 7x + 12 = (x - 3)(x - 4)$<br><br>' +
    '<b>Worked Example 2</b> (Extended) [3 marks]<br>' +
    'Write $x^2 + 6x - 4$ in the form $(x + a)^2 + b$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$x^2 + 6x = (x + 3)^2 - 9$<br>' +
    '$x^2 + 6x - 4 = (x + 3)^2 - 9 - 4 = (x + 3)^2 - 13$<br>' +
    'So $a = 3$, $b = -13$.',
  content_zh:
    '<b>经典例题 1</b> [2 分]<br>' +
    '因式分解 $x^2 - 7x + 12$。<br><br>' +
    '<b>解答：</b>找两个数乘积为 $+12$、和为 $-7$：$-3$ 和 $-4$。<br>' +
    '$= (x-3)(x-4)$<br><br>' +
    '<b>经典例题 2</b>（Extended）[3 分]<br>' +
    '将 $x^2 + 6x - 4$ 写成 $(x+a)^2 + b$ 的形式。<br><br>' +
    '<b>解答：</b>$(x+3)^2 - 9 - 4 = (x+3)^2 - 13$'
});

// ── 2.4 Algebraic fractions ──
add('cie', '2.4', 'knowledge', {
  content:
    '<b>Extended Only</b><br><br>' +
    '<b>Recap</b><br>' +
    '• Algebraic fractions follow the SAME rules as numerical fractions.<br>' +
    '• <b>Simplify</b>: factorise numerator and denominator, then cancel common factors.<br>' +
    '• $\\frac{x^2 - 4}{x + 2} = \\frac{(x+2)(x-2)}{x+2} = x - 2$<br><br>' +
    '<b>Operations</b><br>' +
    '• <b>Add/Subtract</b>: find a common denominator.<br>' +
    '• $\\frac{2}{x} + \\frac{3}{x+1} = \\frac{2(x+1) + 3x}{x(x+1)} = \\frac{5x + 2}{x(x+1)}$<br>' +
    '• <b>Multiply</b>: multiply tops and bottoms. Simplify first if possible.<br>' +
    '• <b>Divide</b>: multiply by the reciprocal.<br><br>' +
    '<b>Watch Out!</b><br>' +
    'You can only cancel FACTORS, not individual terms. $\\frac{x + 3}{x}$ does NOT simplify to $3$.',
  content_zh:
    '<b>仅 Extended</b><br><br>' +
    '<b>知识回顾</b><br>' +
    '• 代数分式与数值分式规则相同。<br>' +
    '• <b>化简</b>：分子分母因式分解后约分。<br>' +
    '• <b>加减</b>：通分。<b>乘法</b>：分子乘分子，分母乘分母。<b>除法</b>：乘倒数。<br><br>' +
    '<b>注意！</b><br>' +
    '只能约分因式，不能约分单独的项。$\\frac{x+3}{x} \\neq 3$。'
});

add('cie', '2.4', 'examples', {
  content:
    '<b>Worked Example</b> [4 marks]<br>' +
    'Simplify $\\frac{3}{x-2} - \\frac{1}{x+1}$.<br><br>' +
    '<b>Solution:</b><br>' +
    'Common denominator = $(x-2)(x+1)$<br>' +
    '$= \\frac{3(x+1) - 1(x-2)}{(x-2)(x+1)}$<br>' +
    '$= \\frac{3x + 3 - x + 2}{(x-2)(x+1)}$<br>' +
    '$= \\frac{2x + 5}{(x-2)(x+1)}$<br><br>' +
    '<b>Exam Tip:</b> Be very careful with minus signs when subtracting: $-1(x - 2) = -x + 2$, not $-x - 2$.',
  content_zh:
    '<b>经典例题</b> [4 分]<br>' +
    '化简 $\\frac{3}{x-2} - \\frac{1}{x+1}$。<br><br>' +
    '<b>解答：</b><br>' +
    '通分 $(x-2)(x+1)$：<br>' +
    '$= \\frac{3(x+1) - (x-2)}{(x-2)(x+1)} = \\frac{2x+5}{(x-2)(x+1)}$<br><br>' +
    '<b>考试技巧：</b>减法时注意负号分配：$-(x-2) = -x+2$。'
});

// ── 2.5 Equations ──
add('cie', '2.5', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Linear equations</b>: $ax + b = c$. Solve by inverse operations.<br>' +
    '• Equations with brackets: expand first, then solve.<br>' +
    '• Equations with fractions: multiply both sides by the common denominator.<br><br>' +
    '<b>Extended Only</b><br>' +
    '• <b>Quadratic equations</b>: $ax^2 + bx + c = 0$.<br>' +
    '&nbsp;&nbsp;Method 1: <b>Factorising</b>: $(x + p)(x + q) = 0$ → $x = -p$ or $x = -q$.<br>' +
    '&nbsp;&nbsp;Method 2: <b>Quadratic formula</b>: $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.<br>' +
    '&nbsp;&nbsp;Method 3: <b>Completing the square</b>.<br>' +
    '• <b>Simultaneous equations</b>:<br>' +
    '&nbsp;&nbsp;— Elimination: add/subtract to remove a variable.<br>' +
    '&nbsp;&nbsp;— Substitution: express one variable in terms of the other.<br><br>' +
    '<b>Watch Out!</b><br>' +
    'Quadratic equations have TWO solutions. Do not stop at one!',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>一次方程</b>：$ax + b = c$，逆运算求解。<br>' +
    '• 含分数的方程：两边乘以公分母。<br><br>' +
    '<b>Extended 扩展</b><br>' +
    '• <b>二次方程</b>：$ax^2 + bx + c = 0$。<br>' +
    '&nbsp;&nbsp;方法1：因式分解。方法2：求根公式 $x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$。方法3：配方法。<br>' +
    '• <b>联立方程</b>：消元法或代入法。<br><br>' +
    '<b>注意！</b><br>' +
    '二次方程有两个解，不要只求一个！'
});

add('cie', '2.5', 'examples', {
  content:
    '<b>Worked Example 1</b> [3 marks]<br>' +
    'Solve $\\frac{2x+1}{3} - \\frac{x-2}{4} = 2$.<br><br>' +
    '<b>Solution:</b><br>' +
    'Multiply by 12: $4(2x+1) - 3(x-2) = 24$<br>' +
    '$8x + 4 - 3x + 6 = 24$<br>' +
    '$5x + 10 = 24$<br>' +
    '$5x = 14$, $x = 2.8$<br><br>' +
    '<b>Worked Example 2</b> (Extended) [3 marks]<br>' +
    'Solve $2x^2 + 5x - 3 = 0$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$(2x - 1)(x + 3) = 0$<br>' +
    '$x = \\frac{1}{2}$ or $x = -3$',
  content_zh:
    '<b>经典例题 1</b> [3 分]<br>' +
    '解方程 $\\frac{2x+1}{3} - \\frac{x-2}{4} = 2$。<br><br>' +
    '<b>解答：</b>两边乘12：$4(2x+1) - 3(x-2) = 24$<br>' +
    '$5x + 10 = 24$，$x = 2.8$<br><br>' +
    '<b>经典例题 2</b>（Extended）[3 分]<br>' +
    '解 $2x^2 + 5x - 3 = 0$。<br><br>' +
    '<b>解答：</b>$(2x-1)(x+3) = 0$，$x = \\frac{1}{2}$ 或 $x = -3$'
});

// ── 2.6 Inequalities ──
add('cie', '2.6', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Inequality symbols</b>: $<$ (less than), $>$ (greater than), $\\leq$ (less than or equal to), $\\geq$ (greater than or equal to).<br>' +
    '• Solve like equations, but <b>reverse the inequality when multiplying or dividing by a negative</b>.<br>' +
    '• Represent solutions on a number line: open circle ○ for $<, >$; filled circle ● for $\\leq, \\geq$.<br><br>' +
    '<b>Extended Only</b><br>' +
    '• Solve <b>quadratic inequalities</b>: solve the equation first, then test regions.<br>' +
    '• $x^2 - 4 < 0$ → $(x-2)(x+2) < 0$ → $-2 < x < 2$.<br>' +
    '• Represent on a <b>graph</b>: shade the region satisfying the inequality.<br><br>' +
    '<b>Watch Out!</b><br>' +
    'If you multiply or divide by $-1$, FLIP the inequality: $-x > 3$ becomes $x < -3$.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• 不等号：$<, >, \\leq, \\geq$。<br>' +
    '• 解法与方程类似，但<b>乘除负数时不等号翻转</b>。<br>' +
    '• 数轴表示：空心圈 = 不包含端点，实心圈 = 包含。<br><br>' +
    '<b>Extended 扩展</b><br>' +
    '• 二次不等式：先解方程，再判断区间。<br>' +
    '• $x^2 - 4 < 0$ → $-2 < x < 2$。<br><br>' +
    '<b>注意！</b><br>' +
    '乘除负数时不等号必须翻转！'
});

add('cie', '2.6', 'examples', {
  content:
    '<b>Worked Example 1</b> [2 marks]<br>' +
    'Solve $3 - 2x \\leq 7$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$-2x \\leq 4$<br>' +
    '$x \\geq -2$ (dividing by $-2$, flip the sign)<br><br>' +
    '<b>Worked Example 2</b> (Extended) [3 marks]<br>' +
    'Solve $x^2 - 5x + 6 > 0$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$(x-2)(x-3) > 0$<br>' +
    'Critical values: $x = 2$ and $x = 3$.<br>' +
    'Test regions: $x < 2$ → positive ✓, $2 < x < 3$ → negative ✗, $x > 3$ → positive ✓<br>' +
    'Answer: $x < 2$ or $x > 3$.',
  content_zh:
    '<b>经典例题 1</b> [2 分]<br>' +
    '解 $3 - 2x \\leq 7$。<br><br>' +
    '<b>解答：</b>$-2x \\leq 4$，除以 $-2$ 翻转不等号：$x \\geq -2$<br><br>' +
    '<b>经典例题 2</b>（Extended）[3 分]<br>' +
    '解 $x^2 - 5x + 6 > 0$。<br><br>' +
    '<b>解答：</b>$(x-2)(x-3) > 0$<br>' +
    '临界值 $x = 2, 3$。测试区间得 $x < 2$ 或 $x > 3$。'
});

// ── 2.7 Sequences ──
add('cie', '2.7', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• A <b>sequence</b> is an ordered list of numbers following a rule.<br>' +
    '• <b>Term-to-term rule</b>: describes how to get from one term to the next.<br>' +
    '• <b>Position-to-term rule</b> ($n$th term): gives any term directly. E.g. $T_n = 3n + 1$.<br>' +
    '• <b>Arithmetic sequence</b>: constant difference $d$. $T_n = a + (n-1)d$.<br><br>' +
    '<b>Extended Only</b><br>' +
    '• <b>Quadratic sequences</b>: second differences are constant. $T_n = an^2 + bn + c$.<br>' +
    '• Finding $a$: $a = \\frac{\\text{2nd difference}}{2}$. Then find $b$ and $c$ using known terms.<br><br>' +
    '<b>Exam Tip</b><br>' +
    'Always check your $n$th term formula by substituting $n = 1, 2, 3$ to verify it gives the correct terms.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>数列</b>：按规则排列的数。<br>' +
    '• <b>等差数列</b>：公差 $d$ 恒定。$T_n = a + (n-1)d$。<br><br>' +
    '<b>Extended 扩展</b><br>' +
    '• <b>二次数列</b>：二阶差恒定。$T_n = an^2 + bn + c$。<br>' +
    '• $a = \\frac{\\text{二阶差}}{2}$，再代入已知项求 $b$ 和 $c$。<br><br>' +
    '<b>考试技巧</b><br>' +
    '用 $n = 1, 2, 3$ 代入验证通项公式。'
});

add('cie', '2.7', 'examples', {
  content:
    '<b>Worked Example 1</b> [2 marks]<br>' +
    'Find the $n$th term of: $5, 8, 11, 14, ...$<br><br>' +
    '<b>Solution:</b><br>' +
    'Common difference $d = 3$. First term $a = 5$.<br>' +
    '$T_n = 3n + 2$<br>' +
    'Check: $T_1 = 5$ ✓, $T_2 = 8$ ✓<br><br>' +
    '<b>Worked Example 2</b> (Extended) [4 marks]<br>' +
    'Find the $n$th term of: $3, 9, 19, 33, 51, ...$<br><br>' +
    '<b>Solution:</b><br>' +
    '1st differences: $6, 10, 14, 18$<br>' +
    '2nd differences: $4, 4, 4$ → $a = \\frac{4}{2} = 2$<br>' +
    '$T_n = 2n^2 + bn + c$<br>' +
    '$n = 1$: $2 + b + c = 3$ → $b + c = 1$<br>' +
    '$n = 2$: $8 + 2b + c = 9$ → $2b + c = 1$<br>' +
    'Solving: $b = 0$, $c = 1$<br>' +
    '$T_n = 2n^2 + 1$',
  content_zh:
    '<b>经典例题 1</b> [2 分]<br>' +
    '求 $5, 8, 11, 14, ...$ 的通项。<br><br>' +
    '<b>解答：</b>公差 $d = 3$，$T_n = 3n + 2$<br><br>' +
    '<b>经典例题 2</b>（Extended）[4 分]<br>' +
    '求 $3, 9, 19, 33, 51, ...$ 的通项。<br><br>' +
    '<b>解答：</b>二阶差 = 4，$a = 2$<br>' +
    '$T_n = 2n^2 + bn + c$，代入解得 $b = 0, c = 1$<br>' +
    '$T_n = 2n^2 + 1$'
});

// ── 2.8 Direct and inverse proportion ──
add('cie', '2.8', 'knowledge', {
  content:
    '<b>Extended Only</b><br><br>' +
    '<b>Recap</b><br>' +
    '• <b>Direct proportion</b>: $y \\propto x$ means $y = kx$. When $x$ doubles, $y$ doubles.<br>' +
    '• $y \\propto x^2$: $y = kx^2$. $y \\propto \\sqrt{x}$: $y = k\\sqrt{x}$.<br>' +
    '• <b>Inverse proportion</b>: $y \\propto \\frac{1}{x}$ means $y = \\frac{k}{x}$. When $x$ doubles, $y$ halves.<br>' +
    '• $y \\propto \\frac{1}{x^2}$: $y = \\frac{k}{x^2}$.<br><br>' +
    '<b>Method</b><br>' +
    '1. Write the proportion statement.<br>' +
    '2. Replace $\\propto$ with $= k$ (introduce constant).<br>' +
    '3. Substitute known values to find $k$.<br>' +
    '4. Write the full formula and use it.<br><br>' +
    '<b>Watch Out!</b><br>' +
    '$y \\propto x^2$ does NOT mean $y \\propto x$ squared — they have different relationships.',
  content_zh:
    '<b>仅 Extended</b><br><br>' +
    '<b>知识回顾</b><br>' +
    '• <b>正比例</b>：$y \\propto x$ → $y = kx$。<br>' +
    '• $y \\propto x^2$, $y \\propto \\sqrt{x}$ 等变体。<br>' +
    '• <b>反比例</b>：$y \\propto \\frac{1}{x}$ → $y = \\frac{k}{x}$。<br><br>' +
    '<b>方法</b><br>' +
    '1. 写出比例关系。2. 用 $k$ 替换 $\\propto$。3. 代入已知值求 $k$。4. 写出完整公式。'
});

add('cie', '2.8', 'examples', {
  content:
    '<b>Worked Example</b> [4 marks]<br>' +
    '$y$ is inversely proportional to $x^2$. When $x = 2$, $y = 5$. Find $y$ when $x = 10$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$y = \\frac{k}{x^2}$<br>' +
    '$5 = \\frac{k}{4}$ → $k = 20$<br>' +
    'When $x = 10$: $y = \\frac{20}{100} = 0.2$<br><br>' +
    '<b>Exam Tip:</b> Always find $k$ first using the given pair of values before substituting the new value.',
  content_zh:
    '<b>经典例题</b> [4 分]<br>' +
    '$y$ 与 $x^2$ 成反比。$x = 2$ 时 $y = 5$。求 $x = 10$ 时的 $y$。<br><br>' +
    '<b>解答：</b><br>' +
    '$y = \\frac{k}{x^2}$，代入 $5 = \\frac{k}{4}$，$k = 20$<br>' +
    '$x = 10$ 时：$y = \\frac{20}{100} = 0.2$'
});

// ── 2.9 Graphs in practical situations ──
add('cie', '2.9', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Distance-time graphs</b>: gradient = speed. Horizontal line = stationary.<br>' +
    '• <b>Speed-time graphs</b>: gradient = acceleration. Area under graph = distance.<br>' +
    '• Steeper gradient = faster speed/greater acceleration.<br><br>' +
    '<b>Extended Only</b><br>' +
    '• <b>Curved distance-time</b>: draw a tangent to find the speed at a given time.<br>' +
    '• <b>Area under speed-time</b>: use trapezium rule for curves or split into triangles + rectangles.<br><br>' +
    '<b>Watch Out!</b><br>' +
    'A negative gradient on a speed-time graph means deceleration, NOT going backwards.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>路程-时间图</b>：斜率 = 速度。水平线 = 静止。<br>' +
    '• <b>速度-时间图</b>：斜率 = 加速度。图线下面积 = 路程。<br><br>' +
    '<b>Extended 扩展</b><br>' +
    '• 曲线图：画切线求瞬时速度。<br>' +
    '• 用梯形法则估算面积。<br><br>' +
    '<b>注意！</b><br>' +
    '速度-时间图中负斜率表示减速，不是倒退。'
});

add('cie', '2.9', 'examples', {
  content:
    '<b>Worked Example</b> [3 marks]<br>' +
    'A speed-time graph shows: 0 to 10s accelerating uniformly from 0 to 15 m/s, then constant speed from 10s to 25s. Find the total distance.<br><br>' +
    '<b>Solution:</b><br>' +
    'Phase 1 (triangle): $\\frac{1}{2} \\times 10 \\times 15 = 75$ m<br>' +
    'Phase 2 (rectangle): $15 \\times 15 = 225$ m<br>' +
    'Total = $75 + 225 = 300$ m<br><br>' +
    '<b>Exam Tip:</b> Split the area into simple shapes (triangles, rectangles, trapeziums).',
  content_zh:
    '<b>经典例题</b> [3 分]<br>' +
    '速度-时间图：0-10秒从0均匀加速到15 m/s，10-25秒匀速。求总路程。<br><br>' +
    '<b>解答：</b><br>' +
    '三角形面积：$\\frac{1}{2} \\times 10 \\times 15 = 75$ m<br>' +
    '矩形面积：$15 \\times 15 = 225$ m<br>' +
    '总路程 = $300$ m'
});

// ── 2.10 Graphs of functions ──
add('cie', '2.10', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Linear</b>: $y = mx + c$. Straight line, gradient $m$, $y$-intercept $c$.<br>' +
    '• <b>Quadratic</b>: $y = ax^2 + bx + c$. U-shape ($a > 0$) or ∩-shape ($a < 0$).<br>' +
    '• <b>Cubic</b>: $y = ax^3 + ...$. S-shaped curve.<br>' +
    '• <b>Reciprocal</b>: $y = \\frac{a}{x}$. Two branches in opposite quadrants.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Complete a table of values and plot points.<br>' +
    '• Draw a smooth curve through the points (not dot-to-dot straight lines).<br>' +
    '• Read off solutions where curves cross the $x$-axis or each other.<br><br>' +
    '<b>Extended Only</b><br>' +
    '• <b>Exponential</b>: $y = a^x$. Always positive, crosses $y$-axis at $(0, 1)$.<br>' +
    '• <b>Trigonometric</b>: $y = \\sin x$, $y = \\cos x$, $y = \\tan x$.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>一次函数</b>：$y = mx + c$，直线。<br>' +
    '• <b>二次函数</b>：$y = ax^2 + bx + c$，抛物线。<br>' +
    '• <b>三次函数</b>：S 形曲线。<b>反比例函数</b>：$y = \\frac{a}{x}$，双曲线。<br><br>' +
    '<b>Extended 扩展</b><br>' +
    '• <b>指数函数</b>：$y = a^x$。<br>' +
    '• <b>三角函数</b>：$\\sin x, \\cos x, \\tan x$。'
});

add('cie', '2.10', 'examples', {
  content:
    '<b>Worked Example</b> [4 marks]<br>' +
    'Draw the graph of $y = x^2 - 3x - 4$ for $-2 \\leq x \\leq 5$. Use your graph to solve $x^2 - 3x - 4 = 0$.<br><br>' +
    '<b>Solution:</b><br>' +
    'Table of values:<br>' +
    '$x$: $-2, -1, 0, 1, 2, 3, 4, 5$<br>' +
    '$y$: $6, 0, -4, -6, -6, -4, 0, 6$<br><br>' +
    'The graph crosses the $x$-axis at $x = -1$ and $x = 4$.<br>' +
    'So $x^2 - 3x - 4 = 0$ has solutions $x = -1$ and $x = 4$.<br><br>' +
    '<b>Exam Tip:</b> Solutions to $y = 0$ are where the curve crosses the $x$-axis.',
  content_zh:
    '<b>经典例题</b> [4 分]<br>' +
    '画 $y = x^2 - 3x - 4$ 在 $-2 \\leq x \\leq 5$ 的图像，用图解 $x^2 - 3x - 4 = 0$。<br><br>' +
    '<b>解答：</b>列值表，描点画曲线。<br>' +
    '图像与 $x$ 轴交于 $x = -1$ 和 $x = 4$。'
});

// ── 2.11 Sketching curves ──
add('cie', '2.11', 'knowledge', {
  content:
    '<b>Extended Only</b><br><br>' +
    '<b>Recap</b><br>' +
    '• <b>Sketching</b> shows the general shape, key features, and approximate positions — not exact plots.<br>' +
    '• Key features to show: $x$-intercepts (roots), $y$-intercept, turning points, asymptotes.<br><br>' +
    '<b>Key Shapes</b><br>' +
    '• $y = x^2$: U-shape through origin.<br>' +
    '• $y = -x^2$: ∩-shape through origin.<br>' +
    '• $y = x^3$: S-curve through origin.<br>' +
    '• $y = \\frac{1}{x}$: two branches, asymptotes along axes.<br>' +
    '• $y = a^x$: exponential growth; $y = a^{-x}$: exponential decay.<br><br>' +
    '<b>Transformations</b><br>' +
    '• $f(x) + a$: shift UP $a$ units.<br>' +
    '• $f(x + a)$: shift LEFT $a$ units.<br>' +
    '• $-f(x)$: reflect in $x$-axis.<br>' +
    '• $f(-x)$: reflect in $y$-axis.',
  content_zh:
    '<b>仅 Extended</b><br><br>' +
    '<b>知识回顾</b><br>' +
    '• <b>草图</b>：展示大致形状和关键特征，不需精确描点。<br>' +
    '• 标出：$x$ 截距、$y$ 截距、顶点、渐近线。<br><br>' +
    '<b>图像变换</b><br>' +
    '• $f(x) + a$：上移 $a$。$f(x+a)$：左移 $a$。<br>' +
    '• $-f(x)$：关于 $x$ 轴翻转。$f(-x)$：关于 $y$ 轴翻转。'
});

add('cie', '2.11', 'examples', {
  content:
    '<b>Worked Example</b> [3 marks]<br>' +
    'Sketch the graph of $y = (x - 2)(x + 1)(x - 4)$, showing all intercepts.<br><br>' +
    '<b>Solution:</b><br>' +
    '$x$-intercepts: $x = 2, -1, 4$ (set each bracket = 0).<br>' +
    '$y$-intercept: $y = (-2)(1)(-4) = 8$.<br>' +
    'Leading term is $x^3$ (positive), so the curve goes from bottom-left to top-right.<br>' +
    'The curve crosses the $x$-axis at each root.<br><br>' +
    '<b>Exam Tip:</b> For cubic sketches, find all $x$-intercepts and the $y$-intercept, then draw the general S-shape.',
  content_zh:
    '<b>经典例题</b> [3 分]<br>' +
    '画 $y = (x-2)(x+1)(x-4)$ 的草图，标出所有截距。<br><br>' +
    '<b>解答：</b><br>' +
    '$x$ 截距：$x = -1, 2, 4$<br>' +
    '$y$ 截距：$y = (-2)(1)(-4) = 8$<br>' +
    '最高次项为 $x^3$（正），曲线从左下到右上。'
});

// ── 2.12 Differentiation ──
add('cie', '2.12', 'knowledge', {
  content:
    '<b>Extended Only</b><br><br>' +
    '<b>Recap</b><br>' +
    '• <b>Differentiation</b> finds the gradient of a curve at any point.<br>' +
    '• If $y = ax^n$, then $\\frac{dy}{dx} = anx^{n-1}$.<br>' +
    '• For $y = x^3 + 2x^2 - 5x + 1$: $\\frac{dy}{dx} = 3x^2 + 4x - 5$.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Find the gradient at a point: substitute $x$ into $\\frac{dy}{dx}$.<br>' +
    '• Find <b>turning points</b>: set $\\frac{dy}{dx} = 0$ and solve.<br>' +
    '• Determine nature: if $\\frac{d^2y}{dx^2} > 0$ → minimum; if $< 0$ → maximum.<br><br>' +
    '<b>Watch Out!</b><br>' +
    'Constants differentiate to 0. The derivative of $5$ is $0$.',
  content_zh:
    '<b>仅 Extended</b><br><br>' +
    '<b>知识回顾</b><br>' +
    '• <b>微分</b>求曲线任意点的斜率。<br>' +
    '• $y = ax^n$ → $\\frac{dy}{dx} = anx^{n-1}$。<br><br>' +
    '<b>关键技能</b><br>' +
    '• 求某点斜率：将 $x$ 代入 $\\frac{dy}{dx}$。<br>' +
    '• 求<b>转折点</b>：令 $\\frac{dy}{dx} = 0$。<br>' +
    '• 判断性质：$\\frac{d^2y}{dx^2} > 0$ → 最小值；$< 0$ → 最大值。'
});

add('cie', '2.12', 'examples', {
  content:
    '<b>Worked Example</b> [5 marks]<br>' +
    'Find the turning points of $y = 2x^3 - 9x^2 + 12x$ and determine their nature.<br><br>' +
    '<b>Solution:</b><br>' +
    '$\\frac{dy}{dx} = 6x^2 - 18x + 12$<br>' +
    'Set $= 0$: $6(x^2 - 3x + 2) = 0$<br>' +
    '$6(x - 1)(x - 2) = 0$ → $x = 1$ or $x = 2$<br><br>' +
    '$\\frac{d^2y}{dx^2} = 12x - 18$<br>' +
    'At $x = 1$: $12(1) - 18 = -6 < 0$ → <b>maximum</b>, $y = 5$.<br>' +
    'At $x = 2$: $12(2) - 18 = 6 > 0$ → <b>minimum</b>, $y = 4$.<br><br>' +
    '<b>Exam Tip:</b> Always find the $y$-values of turning points by substituting back into the original equation.',
  content_zh:
    '<b>经典例题</b> [5 分]<br>' +
    '求 $y = 2x^3 - 9x^2 + 12x$ 的转折点并判断性质。<br><br>' +
    '<b>解答：</b><br>' +
    '$\\frac{dy}{dx} = 6x^2 - 18x + 12 = 0$<br>' +
    '$x = 1$ 或 $x = 2$<br>' +
    '$\\frac{d^2y}{dx^2} = 12x - 18$<br>' +
    '$x = 1$：$-6 < 0$ → 最大值，$y = 5$<br>' +
    '$x = 2$：$6 > 0$ → 最小值，$y = 4$'
});

// ── 2.13 Functions ──
add('cie', '2.13', 'knowledge', {
  content:
    '<b>Extended Only</b><br><br>' +
    '<b>Recap</b><br>' +
    '• A <b>function</b> maps each input to exactly one output. Written as $f(x)$ or $f: x \\mapsto ...$<br>' +
    '• $f(3)$ means substitute $x = 3$ into the function.<br>' +
    '• <b>Composite function</b>: $fg(x) = f(g(x))$. Apply $g$ first, then $f$.<br>' +
    '• <b>Inverse function</b> $f^{-1}(x)$: undoes $f$. Swap $x$ and $y$, then rearrange.<br>' +
    '• The graph of $f^{-1}$ is the reflection of $f$ in the line $y = x$.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Evaluate $f(a)$, $fg(a)$, $f^{-1}(a)$.<br>' +
    '• Find composite and inverse functions algebraically.<br><br>' +
    '<b>Watch Out!</b><br>' +
    '$fg(x) \\neq gf(x)$ in general. Order matters!',
  content_zh:
    '<b>仅 Extended</b><br><br>' +
    '<b>知识回顾</b><br>' +
    '• <b>函数</b>：每个输入对应唯一输出。$f(x)$ 或 $f: x \\mapsto ...$<br>' +
    '• <b>复合函数</b>：$fg(x) = f(g(x))$，先 $g$ 后 $f$。<br>' +
    '• <b>反函数</b> $f^{-1}(x)$：交换 $x, y$ 后解出 $y$。<br>' +
    '• $f^{-1}$ 的图像是 $f$ 关于 $y = x$ 的对称图像。<br><br>' +
    '<b>注意！</b><br>' +
    '$fg(x) \\neq gf(x)$，顺序很重要！'
});

add('cie', '2.13', 'examples', {
  content:
    '<b>Worked Example</b> [5 marks]<br>' +
    '$f(x) = 2x + 1$, $g(x) = x^2 - 3$.<br>' +
    '(a) Find $fg(2)$. (b) Find $gf(x)$. (c) Find $f^{-1}(x)$.<br><br>' +
    '<b>Solution:</b><br>' +
    '(a) $g(2) = 4 - 3 = 1$, $f(1) = 2(1) + 1 = 3$. So $fg(2) = 3$.<br><br>' +
    '(b) $gf(x) = g(2x+1) = (2x+1)^2 - 3 = 4x^2 + 4x + 1 - 3 = 4x^2 + 4x - 2$.<br><br>' +
    '(c) $y = 2x + 1$. Swap: $x = 2y + 1$. $y = \\frac{x - 1}{2}$.<br>' +
    'So $f^{-1}(x) = \\frac{x - 1}{2}$.',
  content_zh:
    '<b>经典例题</b> [5 分]<br>' +
    '$f(x) = 2x + 1$, $g(x) = x^2 - 3$。<br>' +
    '(a) 求 $fg(2)$。(b) 求 $gf(x)$。(c) 求 $f^{-1}(x)$。<br><br>' +
    '<b>解答：</b><br>' +
    '(a) $g(2) = 1$, $f(1) = 3$。$fg(2) = 3$。<br>' +
    '(b) $gf(x) = (2x+1)^2 - 3 = 4x^2 + 4x - 2$。<br>' +
    '(c) $f^{-1}(x) = \\frac{x-1}{2}$。'
});

/* ══════════════════════════════════════════════════
   EDEXCEL 4MA1 — Chapter 2: Equations, formulae and identities (2.1 – 2.8)
   ══════════════════════════════════════════════════ */

// ── Edexcel 2.1 Use of symbols ──
add('edexcel', '2.1', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• Letters represent unknowns or variables.<br>' +
    '• <b>Expression</b>: no equals sign. E.g. $3x + 2y$.<br>' +
    '• <b>Equation</b>: has an equals sign. E.g. $3x + 2 = 11$.<br>' +
    '• <b>Formula</b>: relates variables. E.g. $s = \\frac{d}{t}$.<br>' +
    '• <b>Identity</b>: true for all values. E.g. $3(x + 1) \\equiv 3x + 3$.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Substitute values into expressions and formulae.<br>' +
    '• Write expressions from word problems.<br>' +
    '• Distinguish between expressions, equations, formulae, and identities.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• 字母代表未知数或变量。<br>' +
    '• <b>表达式</b>：无等号。<b>方程</b>：有等号。<br>' +
    '• <b>公式</b>：变量间的关系。<b>恒等式</b>：对所有值成立。<br><br>' +
    '<b>关键技能</b><br>' +
    '• 代入求值。从文字题写出表达式。区分四种代数形式。'
});

add('edexcel', '2.1', 'examples', {
  content:
    '<b>Worked Example</b> [3 marks]<br>' +
    '$P = 2(l + w)$. Find $P$ when $l = 8.5$ and $w = 3.2$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$P = 2(8.5 + 3.2) = 2(11.7) = 23.4$<br><br>' +
    '<b>Exam Tip:</b> Always show the substitution step — do not jump straight to the answer.',
  content_zh:
    '<b>经典例题</b> [3 分]<br>' +
    '$P = 2(l + w)$，$l = 8.5$，$w = 3.2$ 时求 $P$。<br><br>' +
    '<b>解答：</b>$P = 2(8.5 + 3.2) = 23.4$'
});

// ── Edexcel 2.2 Algebraic manipulation ──
add('edexcel', '2.2', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Collect like terms</b>: $5a + 3a = 8a$, but $5a + 3b$ cannot be simplified.<br>' +
    '• <b>Expand single brackets</b>: $3(2x - 5) = 6x - 15$.<br>' +
    '• <b>Expand double brackets</b>: $(x + 3)(x - 2) = x^2 + x - 6$.<br>' +
    '• <b>Factorise</b>: take out common factors. $12x^2 + 8x = 4x(3x + 2)$.<br><br>' +
    '<b>Higher Only</b><br>' +
    '• Factorise quadratics: $x^2 + 5x + 6 = (x + 2)(x + 3)$.<br>' +
    '• Difference of two squares: $x^2 - 49 = (x + 7)(x - 7)$.<br>' +
    '• <b>Algebraic fractions</b>: simplify, add, subtract using common denominators.<br><br>' +
    '<b>Watch Out!</b><br>' +
    '$(x + 3)^2 = x^2 + 6x + 9$, NOT $x^2 + 9$. Do not forget the middle term!',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• 合并同类项、展开括号、因式分解。<br><br>' +
    '<b>仅 Higher</b><br>' +
    '• 二次因式分解、平方差、代数分式运算。<br><br>' +
    '<b>注意！</b><br>' +
    '$(x+3)^2 = x^2 + 6x + 9$，不是 $x^2 + 9$，别漏中间项！'
});

add('edexcel', '2.2', 'examples', {
  content:
    '<b>Worked Example 1</b> [2 marks]<br>' +
    'Expand and simplify $(3x - 2)(x + 5)$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$= 3x^2 + 15x - 2x - 10 = 3x^2 + 13x - 10$<br><br>' +
    '<b>Worked Example 2</b> (Higher) [2 marks]<br>' +
    'Factorise $6x^2 - 7x - 3$.<br><br>' +
    '<b>Solution:</b><br>' +
    'Find two numbers: product = $6 \\times (-3) = -18$, sum = $-7$: that\'s $-9$ and $2$.<br>' +
    '$6x^2 - 9x + 2x - 3 = 3x(2x - 3) + 1(2x - 3) = (3x + 1)(2x - 3)$',
  content_zh:
    '<b>经典例题 1</b> [2 分]<br>' +
    '展开 $(3x-2)(x+5)$。<br><br>' +
    '<b>解答：</b>$= 3x^2 + 13x - 10$<br><br>' +
    '<b>经典例题 2</b>（Higher）[2 分]<br>' +
    '因式分解 $6x^2 - 7x - 3$。<br><br>' +
    '<b>解答：</b>$(3x+1)(2x-3)$'
});

// ── Edexcel 2.3 Expressions and formulae ──
add('edexcel', '2.3', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Substitution</b>: replace letters with numbers and evaluate.<br>' +
    '• <b>Rearranging formulae</b>: change the subject using inverse operations.<br>' +
    '• E.g. $v = u + at$ → $t = \\frac{v - u}{a}$.<br><br>' +
    '<b>Higher Only</b><br>' +
    '• Rearrange with the subject appearing <b>twice</b>: collect, factorise, divide.<br>' +
    '• E.g. $T = \\frac{ax}{x + b}$ → make $x$ the subject.<br><br>' +
    '<b>Exam Tip</b><br>' +
    'When rearranging, do inverse operations in reverse BIDMAS order: undo add/subtract first, then multiply/divide, then powers/roots.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>代入</b>：用数值替换字母。<br>' +
    '• <b>变换公式</b>：用逆运算改变主语。<br><br>' +
    '<b>仅 Higher</b><br>' +
    '• 变量出现两次时：合并 → 提公因式 → 除。<br><br>' +
    '<b>考试技巧</b><br>' +
    '按逆 BIDMAS 顺序操作：先解加减，再解乘除，最后解幂/根。'
});

add('edexcel', '2.3', 'examples', {
  content:
    '<b>Worked Example</b> (Higher) [3 marks]<br>' +
    'Make $x$ the subject of $y = \\frac{3x + 2}{x - 1}$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$y(x - 1) = 3x + 2$<br>' +
    '$xy - y = 3x + 2$<br>' +
    '$xy - 3x = y + 2$<br>' +
    '$x(y - 3) = y + 2$<br>' +
    '$x = \\frac{y + 2}{y - 3}$<br><br>' +
    '<b>Exam Tip:</b> Get all terms with $x$ on one side, everything else on the other, then factorise out $x$.',
  content_zh:
    '<b>经典例题</b>（Higher）[3 分]<br>' +
    '将 $y = \\frac{3x+2}{x-1}$ 变为以 $x$ 为主语。<br><br>' +
    '<b>解答：</b><br>' +
    '$xy - y = 3x + 2$ → $xy - 3x = y + 2$ → $x(y-3) = y+2$<br>' +
    '$x = \\frac{y+2}{y-3}$'
});

// ── Edexcel 2.4 Linear equations ──
add('edexcel', '2.4', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Linear equations</b> have the variable to the power 1 only.<br>' +
    '• Solve by doing the same operation to both sides.<br>' +
    '• Equations with brackets: expand first.<br>' +
    '• Equations with fractions: multiply by the common denominator.<br>' +
    '• Variables on both sides: collect variable terms on one side, numbers on the other.<br><br>' +
    '<b>Key Skills</b><br>' +
    '• Solve $ax + b = c$, $a(x + b) = c$, $\\frac{ax + b}{c} = d$.<br>' +
    '• Set up and solve equations from word problems.<br><br>' +
    '<b>Exam Tip</b><br>' +
    'Always check your answer by substituting it back into the original equation.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>一次方程</b>：变量幂次为 1。两边做相同运算求解。<br>' +
    '• 含括号：先展开。含分数：先通分。<br>' +
    '• 变量在两边：变量移一边，数字移另一边。<br><br>' +
    '<b>考试技巧</b><br>' +
    '把答案代回原方程检验。'
});

add('edexcel', '2.4', 'examples', {
  content:
    '<b>Worked Example</b> [3 marks]<br>' +
    'Solve $\\frac{5x - 3}{4} = \\frac{x + 2}{3}$.<br><br>' +
    '<b>Solution:</b><br>' +
    'Multiply by 12: $3(5x - 3) = 4(x + 2)$<br>' +
    '$15x - 9 = 4x + 8$<br>' +
    '$11x = 17$<br>' +
    '$x = \\frac{17}{11}$<br><br>' +
    '<b>Exam Tip:</b> Cross-multiply or find the LCM of the denominators.',
  content_zh:
    '<b>经典例题</b> [3 分]<br>' +
    '解 $\\frac{5x-3}{4} = \\frac{x+2}{3}$。<br><br>' +
    '<b>解答：</b>两边乘12：$3(5x-3) = 4(x+2)$<br>' +
    '$11x = 17$，$x = \\frac{17}{11}$'
});

// ── Edexcel 2.5 Proportion ──
add('edexcel', '2.5', 'knowledge', {
  content:
    '<b>Higher Only</b><br><br>' +
    '<b>Recap</b><br>' +
    '• $y \\propto x$ → $y = kx$ (direct proportion).<br>' +
    '• $y \\propto x^2$ → $y = kx^2$. $y \\propto x^3$ → $y = kx^3$.<br>' +
    '• $y \\propto \\frac{1}{x}$ → $y = \\frac{k}{x}$ (inverse proportion).<br>' +
    '• $y \\propto \\frac{1}{x^2}$ → $y = \\frac{k}{x^2}$.<br><br>' +
    '<b>Method</b><br>' +
    '1. Write the proportionality statement.<br>' +
    '2. Replace $\\propto$ with $= k$.<br>' +
    '3. Substitute to find $k$.<br>' +
    '4. Write the complete equation and use it.<br><br>' +
    '<b>Exam Tip</b><br>' +
    'Read the question carefully: "directly proportional to the square of $x$" means $y \\propto x^2$, not $y \\propto x$.',
  content_zh:
    '<b>仅 Higher</b><br><br>' +
    '<b>知识回顾</b><br>' +
    '• 正比例：$y = kx$, $y = kx^2$ 等。反比例：$y = \\frac{k}{x}$, $y = \\frac{k}{x^2}$。<br><br>' +
    '<b>方法</b><br>' +
    '1. 写出比例关系。2. 用 $k$ 替换 $\\propto$。3. 代入求 $k$。4. 用公式求解。'
});

add('edexcel', '2.5', 'examples', {
  content:
    '<b>Worked Example</b> [4 marks]<br>' +
    '$y$ is directly proportional to $\\sqrt{x}$. When $x = 16$, $y = 10$. Find $y$ when $x = 25$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$y = k\\sqrt{x}$<br>' +
    '$10 = k\\sqrt{16} = 4k$ → $k = 2.5$<br>' +
    'When $x = 25$: $y = 2.5 \\times \\sqrt{25} = 2.5 \\times 5 = 12.5$<br><br>' +
    '<b>Exam Tip:</b> Always state the equation with $k$ found before substituting the new value.',
  content_zh:
    '<b>经典例题</b> [4 分]<br>' +
    '$y$ 与 $\\sqrt{x}$ 成正比。$x = 16$ 时 $y = 10$。求 $x = 25$ 时 $y$。<br><br>' +
    '<b>解答：</b>$y = k\\sqrt{x}$，$10 = 4k$，$k = 2.5$<br>' +
    '$x = 25$：$y = 2.5 \\times 5 = 12.5$'
});

// ── Edexcel 2.6 Simultaneous linear equations ──
add('edexcel', '2.6', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• <b>Simultaneous equations</b> are two equations with two unknowns.<br>' +
    '• <b>Elimination method</b>: make coefficients of one variable equal, then add/subtract.<br>' +
    '• <b>Substitution method</b>: express one variable in terms of the other, then substitute.<br><br>' +
    '<b>Higher Only</b><br>' +
    '• Solve one linear and one non-linear (e.g. one quadratic): use substitution.<br>' +
    '• E.g. $y = 2x + 1$ and $x^2 + y^2 = 25$: substitute $y$ into the second equation.<br><br>' +
    '<b>Exam Tip</b><br>' +
    'After finding one variable, substitute back to find the other. Always find BOTH values.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• <b>联立方程</b>：两个方程两个未知数。<br>' +
    '• <b>消元法</b>：使一个变量系数相同，加减消去。<br>' +
    '• <b>代入法</b>：用一个变量表示另一个，代入。<br><br>' +
    '<b>仅 Higher</b><br>' +
    '• 一个一次方程 + 一个非线性方程：用代入法。<br><br>' +
    '<b>考试技巧</b><br>' +
    '求出一个变量后代回求另一个，两个值都要求！'
});

add('edexcel', '2.6', 'examples', {
  content:
    '<b>Worked Example 1</b> [3 marks]<br>' +
    'Solve: $3x + 2y = 16$ and $5x - 2y = 24$.<br><br>' +
    '<b>Solution:</b><br>' +
    'Add: $8x = 40$ → $x = 5$<br>' +
    'Substitute: $15 + 2y = 16$ → $2y = 1$ → $y = 0.5$<br><br>' +
    '<b>Worked Example 2</b> (Higher) [5 marks]<br>' +
    'Solve: $y = x + 3$ and $x^2 + y^2 = 29$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$x^2 + (x+3)^2 = 29$<br>' +
    '$x^2 + x^2 + 6x + 9 = 29$<br>' +
    '$2x^2 + 6x - 20 = 0$ → $x^2 + 3x - 10 = 0$<br>' +
    '$(x + 5)(x - 2) = 0$ → $x = -5$ or $x = 2$<br>' +
    '$y = -2$ or $y = 5$',
  content_zh:
    '<b>经典例题 1</b> [3 分]<br>' +
    '解：$3x + 2y = 16$，$5x - 2y = 24$。<br><br>' +
    '<b>解答：</b>相加：$8x = 40$，$x = 5$，$y = 0.5$<br><br>' +
    '<b>经典例题 2</b>（Higher）[5 分]<br>' +
    '解：$y = x+3$ 和 $x^2 + y^2 = 29$。<br><br>' +
    '<b>解答：</b>代入得 $2x^2 + 6x - 20 = 0$<br>' +
    '$x = -5, y = -2$ 或 $x = 2, y = 5$'
});

// ── Edexcel 2.7 Quadratic equations ──
add('edexcel', '2.7', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• A <b>quadratic equation</b> has the form $ax^2 + bx + c = 0$.<br>' +
    '• <b>Factorising</b>: $(x + p)(x + q) = 0$ → $x = -p$ or $x = -q$.<br><br>' +
    '<b>Higher Only</b><br>' +
    '• <b>Quadratic formula</b>: $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.<br>' +
    '• <b>Completing the square</b>: $x^2 + bx + c = (x + \\frac{b}{2})^2 - (\\frac{b}{2})^2 + c$.<br>' +
    '• <b>Discriminant</b> $D = b^2 - 4ac$:<br>' +
    '&nbsp;&nbsp;$D > 0$: two distinct real roots.<br>' +
    '&nbsp;&nbsp;$D = 0$: one repeated root.<br>' +
    '&nbsp;&nbsp;$D < 0$: no real roots.<br><br>' +
    '<b>Watch Out!</b><br>' +
    'The equation must be in the form $= 0$ before factorising or using the formula.',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• 二次方程：$ax^2 + bx + c = 0$。<br>' +
    '• 因式分解法求解。<br><br>' +
    '<b>仅 Higher</b><br>' +
    '• 求根公式：$x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$。<br>' +
    '• 配方法。<br>' +
    '• 判别式 $D = b^2 - 4ac$：$D > 0$ 两个实根，$D = 0$ 一个重根，$D < 0$ 无实根。<br><br>' +
    '<b>注意！</b><br>' +
    '使用公式前方程必须等于 0。'
});

add('edexcel', '2.7', 'examples', {
  content:
    '<b>Worked Example 1</b> [3 marks]<br>' +
    'Solve $x^2 - 8x + 15 = 0$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$(x - 3)(x - 5) = 0$ → $x = 3$ or $x = 5$<br><br>' +
    '<b>Worked Example 2</b> (Higher) [3 marks]<br>' +
    'Solve $3x^2 + 2x - 4 = 0$. Give your answers to 2 d.p.<br><br>' +
    '<b>Solution:</b><br>' +
    '$x = \\frac{-2 \\pm \\sqrt{4 + 48}}{6} = \\frac{-2 \\pm \\sqrt{52}}{6}$<br>' +
    '$x = \\frac{-2 + 7.211...}{6} = 0.87$ or $x = \\frac{-2 - 7.211...}{6} = -1.54$<br><br>' +
    '<b>Exam Tip:</b> When using the formula, calculate the discriminant first, then the two values of $x$ separately.',
  content_zh:
    '<b>经典例题 1</b> [3 分]<br>' +
    '解 $x^2 - 8x + 15 = 0$。<br><br>' +
    '<b>解答：</b>$(x-3)(x-5) = 0$，$x = 3$ 或 $x = 5$<br><br>' +
    '<b>经典例题 2</b>（Higher）[3 分]<br>' +
    '解 $3x^2 + 2x - 4 = 0$（保留 2 位小数）。<br><br>' +
    '<b>解答：</b>$x = \\frac{-2 \\pm \\sqrt{52}}{6}$<br>' +
    '$x = 0.87$ 或 $x = -1.54$'
});

// ── Edexcel 2.8 Inequalities ──
add('edexcel', '2.8', 'knowledge', {
  content:
    '<b>Recap</b><br>' +
    '• $<$ less than, $>$ greater than, $\\leq$ less than or equal, $\\geq$ greater than or equal.<br>' +
    '• Solve like equations. <b>Flip the sign when multiplying/dividing by negative.</b><br>' +
    '• Number line: open circle (○) for strict inequalities, filled (●) for $\\leq, \\geq$.<br>' +
    '• List integer values that satisfy an inequality.<br><br>' +
    '<b>Higher Only</b><br>' +
    '• <b>Quadratic inequalities</b>: solve the equation, then determine which regions satisfy the inequality.<br>' +
    '• <b>Graphical inequalities</b>: shade regions, use solid line for $\\leq/\\geq$, dashed for $</>$.<br><br>' +
    '<b>Exam Tip</b><br>' +
    'For "list the integers" questions, remember to include endpoints if the inequality allows (≤ or ≥).',
  content_zh:
    '<b>知识回顾</b><br>' +
    '• 不等号：$<, >, \\leq, \\geq$。<br>' +
    '• 解法同方程，乘除负数翻转不等号。<br>' +
    '• 数轴：空心圈 = 不含端点，实心圈 = 含端点。<br><br>' +
    '<b>仅 Higher</b><br>' +
    '• 二次不等式：先解方程，再判断区间。<br>' +
    '• 图形不等式：实线表示 $\\leq/\\geq$，虚线表示 $</>$。<br><br>' +
    '<b>考试技巧</b><br>' +
    '"列出满足条件的整数"时注意是否包含端点。'
});

add('edexcel', '2.8', 'examples', {
  content:
    '<b>Worked Example 1</b> [2 marks]<br>' +
    'Solve $-3 < 2x + 1 \\leq 9$. List the integer values of $x$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$-3 < 2x + 1 \\leq 9$<br>' +
    '$-4 < 2x \\leq 8$<br>' +
    '$-2 < x \\leq 4$<br>' +
    'Integer values: $-1, 0, 1, 2, 3, 4$<br><br>' +
    '<b>Worked Example 2</b> (Higher) [3 marks]<br>' +
    'Solve $x^2 - 3x - 10 \\leq 0$.<br><br>' +
    '<b>Solution:</b><br>' +
    '$(x - 5)(x + 2) \\leq 0$<br>' +
    'Roots: $x = 5$ and $x = -2$.<br>' +
    'The quadratic is ≤ 0 between the roots: $-2 \\leq x \\leq 5$.',
  content_zh:
    '<b>经典例题 1</b> [2 分]<br>' +
    '解 $-3 < 2x + 1 \\leq 9$，列出整数值。<br><br>' +
    '<b>解答：</b>$-2 < x \\leq 4$<br>' +
    '整数：$-1, 0, 1, 2, 3, 4$<br><br>' +
    '<b>经典例题 2</b>（Higher）[3 分]<br>' +
    '解 $x^2 - 3x - 10 \\leq 0$。<br><br>' +
    '<b>解答：</b>$(x-5)(x+2) \\leq 0$<br>' +
    '根之间：$-2 \\leq x \\leq 5$'
});

/* ══════════════════════════════════════════════════
   OUTPUT SQL
   ══════════════════════════════════════════════════ */
console.log('-- Section content seed: CIE Ch2 + Edexcel Ch2');
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
