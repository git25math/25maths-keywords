-- 题目编辑覆盖表（超管可编辑练习题，覆盖静态 JSON 数据）
CREATE TABLE IF NOT EXISTS public.question_edits (
  qid TEXT PRIMARY KEY,                    -- 'c001', 'e001'
  board TEXT NOT NULL,                     -- 'cie' | 'edx'
  data JSONB NOT NULL,                     -- {q, o, a, e, cat, topic, d}
  status TEXT DEFAULT 'active',            -- 'active' | 'hidden'
  updated_by UUID REFERENCES auth.users(id),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.question_edits ENABLE ROW LEVEL SECURITY;

-- 所有人可读（应用端合并数据需要）
CREATE POLICY "public_read" ON public.question_edits
  FOR SELECT USING (true);

-- 仅超管可写
CREATE POLICY "admin_insert" ON public.question_edits
  FOR INSERT WITH CHECK (auth.jwt()->>'email' = 'zhuxingda86@hotmail.com');
CREATE POLICY "admin_update" ON public.question_edits
  FOR UPDATE USING (auth.jwt()->>'email' = 'zhuxingda86@hotmail.com');
CREATE POLICY "admin_delete" ON public.question_edits
  FOR DELETE USING (auth.jwt()->>'email' = 'zhuxingda86@hotmail.com');

-- 图片存储桶
INSERT INTO storage.buckets (id, name, public) VALUES ('question-images', 'question-images', true)
  ON CONFLICT (id) DO NOTHING;

CREATE POLICY "public_read_images" ON storage.objects
  FOR SELECT USING (bucket_id = 'question-images');
CREATE POLICY "admin_upload_images" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'question-images' AND auth.jwt()->>'email' = 'zhuxingda86@hotmail.com');
CREATE POLICY "admin_delete_images" ON storage.objects
  FOR DELETE USING (bucket_id = 'question-images' AND auth.jwt()->>'email' = 'zhuxingda86@hotmail.com');
