#!/usr/bin/env python3
"""
CIE + Edexcel Practice Questions Quality Audit Fix Script
Phase A (relocations) + Phase B (dedup/quality) + Phase D3 (tier fix)

This script modifies questions-cie.json and questions-edx.json in place.
Run from the project root: python3 scripts/fix-questions-audit.py
"""

import json
import sys
import os
from collections import Counter

PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CIE_PATH = os.path.join(PROJECT_ROOT, "data", "questions-cie.json")
EDX_PATH = os.path.join(PROJECT_ROOT, "data", "questions-edx.json")

def load_json(path):
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)

def save_json(path, data):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")

def apply_cie_fixes(questions):
    """Apply all CIE fixes: Phase A1 relocations, B1 dedup, B3 chain deps, B4 LaTeX, D3 tier."""
    q_map = {q["id"]: q for q in questions}
    changes = Counter()

    # =========================================================================
    # PHASE A1: CIE Relocations
    # =========================================================================

    # --- 1.4 → 1.1: Non-directed-number questions (place value / positive ordering) ---
    move_to_1_1 = [
        "c757", "c758", "c760", "c764", "c765", "c766", "c767", "c768",
        "c949", "c950", "c953", "c954", "c955", "c958", "c960"
    ]
    for qid in move_to_1_1:
        if qid in q_map:
            q_map[qid]["s"] = "1.1"
            changes["1.4→1.1"] += 1

    # --- 2.1 → 2.2: Rearranging formulae ---
    for qid in ["c115"]:
        if qid in q_map:
            q_map[qid]["s"] = "2.2"
            changes["2.1→2.2"] += 1

    # --- 2.1 → 2.3: Factorising / expanding ---
    for qid in ["c113", "c116"]:
        if qid in q_map:
            q_map[qid]["s"] = "2.3"
            changes["2.1→2.3"] += 1

    # --- 2.3 → 2.2: Make subject / rearranging ---
    for qid in ["c125", "c130"]:
        if qid in q_map:
            q_map[qid]["s"] = "2.2"
            changes["2.3→2.2"] += 1

    # --- 2.8 → 1.12: Ratio questions ---
    for qid in ["c196", "c201"]:
        if qid in q_map:
            q_map[qid]["s"] = "1.12"
            changes["2.8→1.12"] += 1

    # --- 2.8 → 4.3: Scale drawing ---
    for qid in ["c197"]:
        if qid in q_map:
            q_map[qid]["s"] = "4.3"
            changes["2.8→4.3"] += 1

    # --- 2.11 → 3.2: Linear graph questions (d=1 only) ---
    for qid in ["c102", "c103", "c106", "c107"]:
        if qid in q_map:
            q_map[qid]["s"] = "3.2"
            changes["2.11→3.2"] += 1

    # --- 3.1 → 3.4: Midpoint questions ---
    for qid in ["c275", "c276", "c327", "c330", "c335"]:
        if qid in q_map:
            q_map[qid]["s"] = "3.4"
            changes["3.1→3.4"] += 1

    # --- 3.1 → 7.1: Reflection / translation questions ---
    for qid in ["c273", "c274", "c326", "c328", "c329", "c332", "c333", "c336"]:
        if qid in q_map:
            q_map[qid]["s"] = "7.1"
            changes["3.1→7.1"] += 1

    # --- 3.5 → 3.7: Perpendicular line questions ---
    for qid in ["c378", "c379", "c384"]:
        if qid in q_map:
            q_map[qid]["s"] = "3.7"
            changes["3.5→3.7"] += 1

    # --- 4.6 → 4.7: Cyclic quadrilateral (circle theorem) ---
    for qid in ["c555"]:
        if qid in q_map:
            q_map[qid]["s"] = "4.7"
            changes["4.6→4.7"] += 1

    # --- 5.2 → 5.3: Circle area/circumference/sector ---
    for qid in ["c604", "c605", "c665"]:
        if qid in q_map:
            q_map[qid]["s"] = "5.3"
            changes["5.2→5.3"] += 1

    # --- 6.4 → 6.2: Right-triangle trig (not trig functions) ---
    for qid in ["c1454", "c1456", "c1457", "c1459", "c1460", "c1463"]:
        if qid in q_map:
            q_map[qid]["s"] = "6.2"
            changes["6.4→6.2"] += 1

    # --- 9.4 → 9.7: Histogram / frequency density ---
    for qid in ["c1285", "c1286"]:
        if qid in q_map:
            q_map[qid]["s"] = "9.7"
            changes["9.4→9.7"] += 1

    # =========================================================================
    # PHASE B1: CIE Duplicate Hiding
    # =========================================================================
    # For each duplicate pair, hide the later (higher-numbered) duplicate.
    # "hidden" status prevents display without deleting the question.

    # Section 1.3 exact duplicates:
    # Q25(c733) = Q37(c781) → hide c781
    # Q27(c735) = Q50(c926) → hide c926
    # Q28(c736) = Q51(c927) → hide c927
    # Q4(c028) = Q29(c737) → hide c737
    # Q41(c785) = Q53(c929) → hide c929
    # Q35(c743) = Q58(c934) = Q71(c983) → hide c934, c983
    cie_duplicates_to_hide = [
        "c781", "c926", "c927", "c737", "c929", "c934", "c983"
    ]

    # Section 1.10 exact duplicates:
    # Q1(c805) = Q13(c997) → hide c997
    # Q3(c807) = Q15(c999) → hide c999
    cie_duplicates_to_hide += ["c997", "c999"]

    # Section 1.12 exact duplicate:
    # Q4(c832) = Q15(c1023) → hide c1023
    cie_duplicates_to_hide += ["c1023"]

    # Section 4.5 exact duplicate:
    # Q2(c458) = Q23(c551) → hide c551
    cie_duplicates_to_hide += ["c551"]

    for qid in cie_duplicates_to_hide:
        if qid in q_map:
            q_map[qid]["status"] = "hidden"
            changes["hidden_duplicate"] += 1

    # =========================================================================
    # PHASE B3: Chain Dependency Fixes (make questions standalone)
    # =========================================================================

    # c730 (1.2): "From the previous question" → add context
    if "c730" in q_map:
        q_map["c730"]["q"] = (
            "In a group of 20 students, 15 play Football, 8 play Tennis, "
            "and 5 play both. How many students play Football only?"
        )
        changes["chain_fix"] += 1

    # c917 (1.2): "Using the information from the previous question" → add context
    if "c917" in q_map:
        q_map["c917"]["q"] = (
            "In a class of 40 students, 20 play hockey, 25 play football, "
            "and 8 play both. How many students play football only?"
        )
        changes["chain_fix"] += 1

    # c893 (1.16): "Using the previous question's figures" → add context
    if "c893" in q_map:
        q_map["c893"]["q"] = (
            "A product costs $\\$15$ to produce and is sold for $\\$20$. "
            "What is the profit percentage on the cost price?"
        )
        changes["chain_fix"] += 1

    # c211 (2.9): "For the machine in the previous question" → add context
    if "c211" in q_map:
        q_map["c211"]["q"] = (
            "A machine has a value graph that passes through $(0, 25000)$ and "
            "$(10, 5000)$. What is the annual rate of depreciation?"
        )
        changes["chain_fix"] += 1

    # c694 (5.4): "For the solid in the previous question" → add context
    if "c694" in q_map:
        q_map["c694"]["q"] = (
            "A solid is made of a cylinder with radius 5 cm and height 10 cm, "
            "topped by a hemisphere of radius 5 cm. What is the total surface area? "
            "Give your answer in terms of $\\pi$."
        )
        changes["chain_fix"] += 1

    # =========================================================================
    # PHASE B4: LaTeX Rendering Errors in Section 1.10
    # =========================================================================

    # c806 (Q2): garbled division
    if "c806" in q_map:
        q_map["c806"]["q"] = "Estimate the value of $198.5 \\div 9.9$."
        changes["latex_fix"] += 1

    # c810 (Q6): garbled division in q and e
    if "c810" in q_map:
        q_map["c810"]["q"] = (
            "A calculator shows the answer to $48.7 \\div 9.8$ is $0.4969\\ldots$. "
            "By rounding each number to 1 significant figure, estimate the value to check."
        )
        q_map["c810"]["e"] = (
            "Round to 1 significant figure: $48.7 \\approx 50$ and $9.8 \\approx 10$. "
            "Estimate: $50 \\div 10 = 5$. The calculator answer of $0.4969$ is far too small — "
            "the correct answer should be close to 5."
        )
        changes["latex_fix"] += 1

    # c813 (Q9): garbled division
    if "c813" in q_map:
        q_map["c813"]["q"] = "Estimate the value of $20.3 \\div 0.49$."
        q_map["c813"]["e"] = (
            "Round to 1 significant figure: $20.3 \\approx 20$ and $0.49 \\approx 0.5$. "
            "Estimate: $20 \\div 0.5 = 40$."
        )
        changes["latex_fix"] += 1

    # c1002 (Q18): garbled division
    if "c1002" in q_map:
        q_map["c1002"]["q"] = "Estimate the value of $30.8 \\div 0.49$."
        q_map["c1002"]["e"] = (
            "Round to 1 significant figure: $30.8 \\approx 30$ and $0.49 \\approx 0.5$. "
            "Estimate: $30 \\div 0.5 = 60$."
        )
        changes["latex_fix"] += 1

    # c1008 (Q24): garbled division
    if "c1008" in q_map:
        q_map["c1008"]["q"] = (
            "A calculator shows that $418 \\div 7.9 = 5.291\\ldots$. "
            "By rounding, show that this answer is incorrect and find an estimate for the correct answer."
        )
        changes["latex_fix"] += 1

    # =========================================================================
    # PHASE D3: Tier Anomaly Fix (d=1 → d=2 in Extended-only sections)
    # =========================================================================

    # Section 1.11 (Limits of accuracy): c817-c828 are d=1, should be d=2
    for i in range(817, 829):
        qid = f"c{i:03d}" if i < 1000 else f"c{i}"
        if qid in q_map and q_map[qid]["s"] == "1.11" and q_map[qid]["d"] == 1:
            q_map[qid]["d"] = 2
            changes["d1→d2_tier_fix"] += 1

    # Section 2.11 (Sketching curves): c097-c108 are d=1, should be d=2
    # BUT: c102, c103, c106, c107 were already moved to 3.2 (linear graphs)
    # Those should stay d=1 since 3.2 is Core. Only fix the ones still in 2.11.
    for i in range(97, 109):
        qid = f"c{i:03d}"
        if qid in q_map and q_map[qid]["s"] == "2.11" and q_map[qid]["d"] == 1:
            q_map[qid]["d"] = 2
            changes["d1→d2_tier_fix"] += 1

    # Section 4.7 (Circle theorems): c481-c492 are d=1, should be d=2
    for i in range(481, 493):
        qid = f"c{i:03d}" if i < 1000 else f"c{i}"
        if qid in q_map and q_map[qid]["s"] == "4.7" and q_map[qid]["d"] == 1:
            q_map[qid]["d"] = 2
            changes["d1→d2_tier_fix"] += 1

    print("\n=== CIE Changes Summary ===")
    for key, count in sorted(changes.items()):
        print(f"  {key}: {count}")
    print(f"  TOTAL changes: {sum(changes.values())}")

    return questions


def apply_edx_fixes(questions):
    """Apply all Edexcel fixes: Phase A2 relocations, B2 dedup, A2b hide, B5 topic."""
    q_map = {q["id"]: q for q in questions}
    changes = Counter()

    # =========================================================================
    # PHASE A2: Edexcel Relocations
    # =========================================================================

    # --- 2.4 → 2.5: Proportion questions (e145-e156) ---
    for i in range(145, 157):
        qid = f"e{i:03d}"
        if qid in q_map:
            q_map[qid]["s"] = "2.5"
            q_map[qid]["topic"] = "Proportion"
            changes["2.4→2.5"] += 1

    # --- 2.4 → 2.6: Simultaneous equations (e157-e168) ---
    for i in range(157, 169):
        qid = f"e{i:03d}"
        if qid in q_map:
            q_map[qid]["s"] = "2.6"
            q_map[qid]["topic"] = "Simultaneous Linear Equations"
            changes["2.4→2.6"] += 1

    # --- 5.1 → 5.2: Transformation questions (e901-e912) ---
    for i in range(901, 913):
        qid = f"e{i:03d}"
        if qid in q_map:
            q_map[qid]["s"] = "5.2"
            q_map[qid]["topic"] = "Transformation Geometry"
            changes["5.1→5.2"] += 1

    # --- 3.1 → 3.2: Function notation questions (e733-e744) ---
    for i in range(733, 745):
        qid = f"e{i:03d}"
        if qid in q_map:
            q_map[qid]["s"] = "3.2"
            q_map[qid]["topic"] = "Function Notation"
            changes["3.1→3.2"] += 1

    # --- 3.1 → 3.3: Graph-of-sequence questions (e745-e756, e793-e804) ---
    for i in list(range(745, 757)) + list(range(793, 805)):
        qid = f"e{i:03d}"
        if qid in q_map:
            q_map[qid]["s"] = "3.3"
            q_map[qid]["topic"] = "Graphs"
            changes["3.1→3.3"] += 1

    # --- 4.9 → 4.10: 3D mensuration ---
    for qid in ["e421", "e422", "e424", "e425", "e427", "e429"]:
        if qid in q_map:
            q_map[qid]["s"] = "4.10"
            changes["4.9→4.10"] += 1

    # =========================================================================
    # PHASE A2b: Hide out-of-scope questions
    # =========================================================================
    out_of_scope = [
        "e812",  # integration
        "e813",  # definite integration
        "e816",  # area under curve via integration
        "e809",  # second derivative
        "e936",  # shear transformation
        "e361",  # perimeter cost (not geometrical reasoning)
    ]
    for qid in out_of_scope:
        if qid in q_map:
            q_map[qid]["status"] = "hidden"
            changes["hidden_out_of_scope"] += 1

    # =========================================================================
    # PHASE B2: Edexcel Duplicate Hiding
    # =========================================================================
    # e842 = e878 (6.3): hide e842 (keep e878)
    # e222 = e351 (both 4.3): hide e351
    # e210 (4.2) = e350 (4.3): hide e210
    # e064 (2.6) = e160 (moved to 2.6): hide e160
    edx_duplicates_to_hide = ["e842", "e351", "e210", "e160"]
    for qid in edx_duplicates_to_hide:
        if qid in q_map:
            q_map[qid]["status"] = "hidden"
            changes["hidden_duplicate"] += 1

    # =========================================================================
    # PHASE B5: Topic field normalization for section 4.11
    # =========================================================================
    for q in questions:
        if q["s"] == "4.11" and q.get("topic") == "Geometry":
            q["topic"] = "Similarity"
            changes["topic_fix_4.11"] += 1

    print("\n=== Edexcel Changes Summary ===")
    for key, count in sorted(changes.items()):
        print(f"  {key}: {count}")
    print(f"  TOTAL changes: {sum(changes.values())}")

    return questions


def print_section_stats(questions, label):
    """Print per-section question counts and difficulty distribution."""
    sections = {}
    hidden_count = 0
    for q in questions:
        if q.get("status") == "hidden":
            hidden_count += 1
            continue
        s = q["s"]
        d = q["d"]
        if s not in sections:
            sections[s] = Counter()
        sections[s][d] += 1

    print(f"\n=== {label} Section Stats (excluding hidden) ===")
    print(f"{'Section':<8} {'Total':<6} {'d=1':<5} {'d=2':<5}")
    print("-" * 30)
    total = 0
    for s in sorted(sections.keys(), key=lambda x: [float(p) for p in x.split(".")]):
        sec = sections[s]
        t = sum(sec.values())
        total += t
        print(f"{s:<8} {t:<6} {sec.get(1,0):<5} {sec.get(2,0):<5}")
    print(f"{'TOTAL':<8} {total:<6}")
    print(f"Hidden: {hidden_count}")


def main():
    print("Loading data files...")
    cie = load_json(CIE_PATH)
    edx = load_json(EDX_PATH)

    print(f"CIE: {len(cie)} questions")
    print(f"Edexcel: {len(edx)} questions")

    # Apply fixes
    cie = apply_cie_fixes(cie)
    edx = apply_edx_fixes(edx)

    # Print stats
    print_section_stats(cie, "CIE")
    print_section_stats(edx, "Edexcel")

    # Save
    if "--dry-run" not in sys.argv:
        print("\nSaving changes...")
        save_json(CIE_PATH, cie)
        save_json(EDX_PATH, edx)
        print("Done! Files saved.")
    else:
        print("\n[DRY RUN] No files modified.")


if __name__ == "__main__":
    main()
