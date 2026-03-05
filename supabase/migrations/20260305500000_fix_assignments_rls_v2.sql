-- Fix RLS v2: use SECURITY DEFINER helpers to avoid RLS recursion
-- The subqueries in assignment policies query teachers/classes tables,
-- which have their own RLS. This can block the subquery results.

-- Helper: get current user's teacher.id (bypasses teachers RLS)
CREATE OR REPLACE FUNCTION public.my_teacher_id()
RETURNS UUID LANGUAGE sql STABLE SECURITY DEFINER AS $$
  SELECT id FROM public.teachers WHERE user_id = auth.uid() LIMIT 1;
$$;

-- Helper: get class IDs owned by current teacher (bypasses classes RLS)
CREATE OR REPLACE FUNCTION public.my_class_ids()
RETURNS SETOF UUID LANGUAGE sql STABLE SECURITY DEFINER AS $$
  SELECT id FROM public.classes WHERE teacher_id = public.my_teacher_id();
$$;

-- Drop previous policies
DROP POLICY IF EXISTS "kw_assign_select" ON public.assignments;
DROP POLICY IF EXISTS "kw_assign_insert" ON public.assignments;
DROP POLICY IF EXISTS "kw_assign_update" ON public.assignments;
DROP POLICY IF EXISTS "kw_assign_delete" ON public.assignments;

-- SELECT: teacher or student in the class
CREATE POLICY "kw_assign_select" ON public.assignments FOR SELECT TO authenticated
USING (
  teacher_id = public.my_teacher_id()
  OR class_id IN (SELECT class_id FROM public.class_students WHERE user_id = auth.uid())
);

-- INSERT: must be the teacher AND own the class
CREATE POLICY "kw_assign_insert" ON public.assignments FOR INSERT TO authenticated
WITH CHECK (
  teacher_id = public.my_teacher_id()
  AND class_id IN (SELECT public.my_class_ids())
);

-- UPDATE: only the creating teacher
CREATE POLICY "kw_assign_update" ON public.assignments FOR UPDATE TO authenticated
USING (teacher_id = public.my_teacher_id());

-- DELETE: only the creating teacher
CREATE POLICY "kw_assign_delete" ON public.assignments FOR DELETE TO authenticated
USING (teacher_id = public.my_teacher_id());
