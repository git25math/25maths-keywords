-- Section-level content edits (syllabus / knowledge / examples)
-- Keyed by (board, section_id, module) — one row per editable module per section.

CREATE TABLE section_edits (
  board TEXT NOT NULL,
  section_id TEXT NOT NULL,
  module TEXT NOT NULL,         -- 'syllabus' | 'knowledge' | 'examples'
  data JSONB NOT NULL,
  updated_by UUID REFERENCES auth.users(id),
  updated_at TIMESTAMPTZ DEFAULT now(),
  PRIMARY KEY (board, section_id, module)
);

-- RLS: public read, super-admin write
ALTER TABLE section_edits ENABLE ROW LEVEL SECURITY;

CREATE POLICY "section_edits_public_read"
  ON section_edits FOR SELECT
  USING (true);

CREATE POLICY "section_edits_admin_insert"
  ON section_edits FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "section_edits_admin_update"
  ON section_edits FOR UPDATE
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "section_edits_admin_delete"
  ON section_edits FOR DELETE
  USING (auth.uid() IS NOT NULL);
