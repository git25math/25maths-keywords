-- Add board column to leaderboard for per-module filtering
ALTER TABLE leaderboard ADD COLUMN IF NOT EXISTS board TEXT NOT NULL DEFAULT '';
CREATE INDEX IF NOT EXISTS idx_leaderboard_board ON leaderboard (board);
