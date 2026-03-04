-- Migration: notifications + assignment extensions
-- Date: 2026-03-05

-- 1. Add wrong_words column to assignment_results
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='assignment_results' AND column_name='wrong_words') THEN
    ALTER TABLE public.assignment_results ADD COLUMN wrong_words JSONB DEFAULT '[]';
  END IF;
END $$;

-- 2. Add custom_vocabulary column to assignments (for custom error-word assignments)
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='assignments' AND column_name='custom_vocabulary') THEN
    ALTER TABLE public.assignments ADD COLUMN custom_vocabulary JSONB DEFAULT NULL;
  END IF;
END $$;

-- 3. notifications: in-app notification system
CREATE TABLE IF NOT EXISTS public.notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id),
  type TEXT NOT NULL DEFAULT 'info',
  title TEXT NOT NULL,
  body TEXT DEFAULT '',
  link_type TEXT DEFAULT '',
  link_id TEXT DEFAULT '',
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT now()
);
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='notifications' AND policyname='user_read_own') THEN
    CREATE POLICY "user_read_own" ON public.notifications FOR SELECT
      USING (user_id = auth.uid());
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='notifications' AND policyname='user_update_own') THEN
    CREATE POLICY "user_update_own" ON public.notifications FOR UPDATE
      USING (user_id = auth.uid());
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='notifications' AND policyname='teacher_insert') THEN
    CREATE POLICY "teacher_insert" ON public.notifications FOR INSERT
      WITH CHECK (EXISTS (SELECT 1 FROM teachers WHERE user_id = auth.uid()));
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='notifications' AND policyname='student_insert') THEN
    CREATE POLICY "student_insert" ON public.notifications FOR INSERT
      WITH CHECK (auth.uid() IS NOT NULL);
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS idx_notifications_user_id ON public.notifications(user_id, is_read, created_at DESC);
