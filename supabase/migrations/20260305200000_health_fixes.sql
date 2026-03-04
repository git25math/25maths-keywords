-- v1.1.1 Health fixes: RLS enhancement + missing indexes + soft delete

-- 1. Enhance assignments RLS: INSERT/DELETE with class ownership check + new UPDATE policy
DROP POLICY IF EXISTS "teacher_insert" ON public.assignments;
CREATE POLICY "teacher_insert" ON public.assignments FOR INSERT
  WITH CHECK (
    teacher_id IN (SELECT id FROM teachers WHERE user_id = auth.uid())
    AND class_id IN (SELECT id FROM classes WHERE teacher_id IN
      (SELECT id FROM teachers WHERE user_id = auth.uid()))
  );

DROP POLICY IF EXISTS "teacher_delete" ON public.assignments;
CREATE POLICY "teacher_delete" ON public.assignments FOR DELETE
  USING (teacher_id IN (SELECT id FROM teachers WHERE user_id = auth.uid()));

CREATE POLICY "teacher_update" ON public.assignments FOR UPDATE
  USING (teacher_id IN (SELECT id FROM teachers WHERE user_id = auth.uid()));

-- 2. Missing indexes for performance
CREATE INDEX IF NOT EXISTS idx_assignments_class ON assignments(class_id);
CREATE INDEX IF NOT EXISTS idx_ar_user ON assignment_results(user_id);
CREATE INDEX IF NOT EXISTS idx_ar_assignment ON assignment_results(assignment_id);
CREATE INDEX IF NOT EXISTS idx_cs_class ON class_students(class_id);
CREATE INDEX IF NOT EXISTS idx_vl_board_cat ON vocab_levels(board, category);
CREATE INDEX IF NOT EXISTS idx_fb_created ON feedback(created_at DESC);

-- 3. Soft delete column for assignments
ALTER TABLE public.assignments ADD COLUMN IF NOT EXISTS is_deleted BOOLEAN DEFAULT FALSE;
