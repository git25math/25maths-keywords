-- Migration: vocab_levels + assignments (extend) + assignment_results + feedback
-- Date: 2026-03-05

-- 1. vocab_levels: super admin vocabulary override layer
CREATE TABLE IF NOT EXISTS public.vocab_levels (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  board TEXT NOT NULL,
  category TEXT NOT NULL,
  title TEXT NOT NULL,
  title_zh TEXT DEFAULT '',
  timer INT DEFAULT 70,
  combo_bonus INT DEFAULT 2,
  vocabulary JSONB NOT NULL DEFAULT '[]',
  sort_order INT DEFAULT 0,
  is_deleted BOOLEAN DEFAULT FALSE,
  updated_by UUID REFERENCES auth.users(id),
  updated_at TIMESTAMPTZ DEFAULT now()
);
ALTER TABLE public.vocab_levels ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='vocab_levels' AND policyname='read') THEN
    CREATE POLICY "read" ON public.vocab_levels FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='vocab_levels' AND policyname='write') THEN
    CREATE POLICY "write" ON public.vocab_levels FOR INSERT
      WITH CHECK (auth.jwt()->> 'email' = 'zhuxingda86@hotmail.com');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='vocab_levels' AND policyname='update') THEN
    CREATE POLICY "update" ON public.vocab_levels FOR UPDATE
      USING (auth.jwt()->> 'email' = 'zhuxingda86@hotmail.com');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='vocab_levels' AND policyname='delete') THEN
    CREATE POLICY "delete" ON public.vocab_levels FOR DELETE
      USING (auth.jwt()->> 'email' = 'zhuxingda86@hotmail.com');
  END IF;
END $$;

-- 2. assignments: ensure columns exist (table may already exist)
-- Add deck_slugs + deadline columns if missing
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='assignments' AND column_name='deck_slugs') THEN
    ALTER TABLE public.assignments ADD COLUMN deck_slugs TEXT[] NOT NULL DEFAULT '{}';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='assignments' AND column_name='deadline') THEN
    ALTER TABLE public.assignments ADD COLUMN deadline TIMESTAMPTZ NOT NULL DEFAULT now();
  END IF;
END $$;
ALTER TABLE public.assignments ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='assignments' AND policyname='teacher_read') THEN
    CREATE POLICY "teacher_read" ON public.assignments FOR SELECT
      USING (teacher_id IN (SELECT id FROM teachers WHERE user_id = auth.uid())
        OR EXISTS (SELECT 1 FROM class_students WHERE class_id = assignments.class_id AND user_id = auth.uid()));
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='assignments' AND policyname='teacher_insert') THEN
    CREATE POLICY "teacher_insert" ON public.assignments FOR INSERT
      WITH CHECK (teacher_id IN (SELECT id FROM teachers WHERE user_id = auth.uid()));
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='assignments' AND policyname='teacher_delete') THEN
    CREATE POLICY "teacher_delete" ON public.assignments FOR DELETE
      USING (teacher_id IN (SELECT id FROM teachers WHERE user_id = auth.uid()));
  END IF;
END $$;

-- 3. assignment_results: homework grades
CREATE TABLE IF NOT EXISTS public.assignment_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  assignment_id UUID NOT NULL REFERENCES public.assignments(id),
  user_id UUID NOT NULL REFERENCES auth.users(id),
  attempts INT DEFAULT 0,
  correct_count INT DEFAULT 0,
  total_count INT DEFAULT 0,
  completed_at TIMESTAMPTZ,
  last_attempt_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(assignment_id, user_id)
);
ALTER TABLE public.assignment_results ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='assignment_results' AND policyname='student_own') THEN
    CREATE POLICY "student_own" ON public.assignment_results FOR SELECT
      USING (user_id = auth.uid());
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='assignment_results' AND policyname='student_upsert') THEN
    CREATE POLICY "student_upsert" ON public.assignment_results FOR INSERT
      WITH CHECK (user_id = auth.uid());
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='assignment_results' AND policyname='student_update') THEN
    CREATE POLICY "student_update" ON public.assignment_results FOR UPDATE
      USING (user_id = auth.uid());
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='assignment_results' AND policyname='teacher_read_results') THEN
    CREATE POLICY "teacher_read_results" ON public.assignment_results FOR SELECT
      USING (EXISTS (
        SELECT 1 FROM assignments a
        JOIN teachers t ON a.teacher_id = t.id
        WHERE a.id = assignment_results.assignment_id AND t.user_id = auth.uid()
      ));
  END IF;
END $$;

-- 4. feedback: user feedback collection
CREATE TABLE IF NOT EXISTS public.feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  user_email TEXT,
  type TEXT NOT NULL DEFAULT 'other',
  description TEXT NOT NULL,
  steps TEXT DEFAULT '',
  auto_info JSONB DEFAULT '{}',
  status TEXT DEFAULT 'new',
  admin_notes TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now()
);
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='feedback' AND policyname='user_insert') THEN
    CREATE POLICY "user_insert" ON public.feedback FOR INSERT
      WITH CHECK (auth.uid() IS NOT NULL);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='feedback' AND policyname='admin_read') THEN
    CREATE POLICY "admin_read" ON public.feedback FOR SELECT
      USING (auth.jwt()->> 'email' = 'zhuxingda86@hotmail.com'
        OR user_id = auth.uid());
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='feedback' AND policyname='admin_update') THEN
    CREATE POLICY "admin_update" ON public.feedback FOR UPDATE
      USING (auth.jwt()->> 'email' = 'zhuxingda86@hotmail.com');
  END IF;
END $$;
