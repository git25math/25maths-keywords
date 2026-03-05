-- Fix assignments RLS policies for Keywords compatibility
-- The original policies (from 25maths-website) use teacher_id = auth.uid(),
-- but Keywords stores teachers.id (not auth.uid()) in assignments.teacher_id.
-- This migration drops ALL existing assignment policies and recreates them
-- using the Keywords teachers/classes model.

-- ═══ DROP ALL EXISTING POLICIES ═══
DROP POLICY IF EXISTS "assign_select" ON public.assignments;
DROP POLICY IF EXISTS "assign_insert" ON public.assignments;
DROP POLICY IF EXISTS "assign_update" ON public.assignments;
DROP POLICY IF EXISTS "teacher_insert" ON public.assignments;
DROP POLICY IF EXISTS "teacher_update" ON public.assignments;
DROP POLICY IF EXISTS "teacher_delete" ON public.assignments;

-- ═══ ENSURE RLS IS ENABLED ═══
ALTER TABLE public.assignments ENABLE ROW LEVEL SECURITY;

-- ═══ RECREATE CLEAN POLICIES ═══

-- SELECT: teacher who created it, or students in the class
CREATE POLICY "kw_assign_select" ON public.assignments FOR SELECT TO authenticated
USING (
  teacher_id IN (SELECT id FROM public.teachers WHERE user_id = auth.uid())
  OR class_id IN (
    SELECT class_id FROM public.class_students WHERE user_id = auth.uid()
  )
);

-- INSERT: teacher must own the class
CREATE POLICY "kw_assign_insert" ON public.assignments FOR INSERT TO authenticated
WITH CHECK (
  teacher_id IN (SELECT id FROM public.teachers WHERE user_id = auth.uid())
  AND class_id IN (
    SELECT id FROM public.classes
    WHERE teacher_id IN (SELECT id FROM public.teachers WHERE user_id = auth.uid())
  )
);

-- UPDATE: only the creating teacher
CREATE POLICY "kw_assign_update" ON public.assignments FOR UPDATE TO authenticated
USING (teacher_id IN (SELECT id FROM public.teachers WHERE user_id = auth.uid()));

-- DELETE: only the creating teacher
CREATE POLICY "kw_assign_delete" ON public.assignments FOR DELETE TO authenticated
USING (teacher_id IN (SELECT id FROM public.teachers WHERE user_id = auth.uid()));
