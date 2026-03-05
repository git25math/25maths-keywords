-- RPC to list assignments for a class (bypasses RLS).
-- Teachers see all assignments they created; students see assignments for their class.

CREATE OR REPLACE FUNCTION public.list_class_assignments(p_class_id UUID)
RETURNS SETOF public.assignments
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_teacher_id UUID;
BEGIN
  -- Check if caller is the teacher of this class
  SELECT id INTO v_teacher_id FROM public.teachers WHERE user_id = auth.uid();
  IF v_teacher_id IS NOT NULL THEN
    RETURN QUERY
      SELECT * FROM public.assignments
      WHERE class_id = p_class_id AND is_deleted = false
      ORDER BY created_at DESC;
    RETURN;
  END IF;

  -- Check if caller is a student in this class
  IF EXISTS (SELECT 1 FROM public.class_students WHERE class_id = p_class_id AND user_id = auth.uid()) THEN
    RETURN QUERY
      SELECT * FROM public.assignments
      WHERE class_id = p_class_id AND is_deleted = false
      ORDER BY deadline ASC;
    RETURN;
  END IF;

  -- Not authorized: return empty
  RETURN;
END;
$$;
