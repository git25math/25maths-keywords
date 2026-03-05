-- Helper RPCs for assignments — bypass RLS with auth checks inside.

-- 1. Get a single assignment by ID (teacher or student in class)
CREATE OR REPLACE FUNCTION public.get_assignment(p_id UUID)
RETURNS SETOF public.assignments
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Teacher check
  IF EXISTS (SELECT 1 FROM public.teachers WHERE user_id = auth.uid()) THEN
    RETURN QUERY SELECT * FROM public.assignments WHERE id = p_id LIMIT 1;
    RETURN;
  END IF;

  -- Student: must be in the assignment's class
  IF EXISTS (
    SELECT 1 FROM public.class_students cs
    JOIN public.assignments a ON a.class_id = cs.class_id
    WHERE a.id = p_id AND cs.user_id = auth.uid()
  ) THEN
    RETURN QUERY SELECT * FROM public.assignments WHERE id = p_id LIMIT 1;
    RETURN;
  END IF;

  RETURN;
END;
$$;

-- 2. Soft-delete an assignment (teacher only)
CREATE OR REPLACE FUNCTION public.delete_assignment(p_id UUID)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_teacher_id UUID;
BEGIN
  SELECT id INTO v_teacher_id FROM public.teachers WHERE user_id = auth.uid();
  IF v_teacher_id IS NULL THEN
    RAISE EXCEPTION 'Not a teacher';
  END IF;

  UPDATE public.assignments SET is_deleted = true
  WHERE id = p_id AND teacher_id = v_teacher_id;
END;
$$;
