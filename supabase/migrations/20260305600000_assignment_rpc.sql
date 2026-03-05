-- Bypass assignments RLS entirely with SECURITY DEFINER RPC functions.
-- Auth checks done inside the function.

CREATE OR REPLACE FUNCTION public.create_assignment(
  p_class_id UUID,
  p_title TEXT,
  p_deck_slugs TEXT[],
  p_deadline TIMESTAMPTZ,
  p_custom_vocabulary JSONB DEFAULT NULL
)
RETURNS UUID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_teacher_id UUID;
  v_id UUID;
BEGIN
  -- Auth: caller must be a teacher
  SELECT id INTO v_teacher_id FROM public.teachers WHERE user_id = auth.uid();
  IF v_teacher_id IS NULL THEN
    RAISE EXCEPTION 'Not a teacher';
  END IF;

  -- Auth: teacher must own the class
  IF NOT EXISTS (SELECT 1 FROM public.classes WHERE id = p_class_id AND teacher_id = v_teacher_id) THEN
    RAISE EXCEPTION 'Class not owned by teacher';
  END IF;

  INSERT INTO public.assignments (class_id, teacher_id, title, deck_slugs, deadline, custom_vocabulary)
  VALUES (p_class_id, v_teacher_id, p_title, p_deck_slugs, p_deadline, p_custom_vocabulary)
  RETURNING id INTO v_id;

  RETURN v_id;
END;
$$;
