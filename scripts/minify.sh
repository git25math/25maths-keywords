#!/bin/bash
set -e
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

# Core JS: concatenate in index.html load order → esbuild minify → single bundle
cat js/config.js js/levels-loader.js js/storage.js js/particles.js \
    js/auth.js js/ui.js js/mastery.js js/study.js js/battle.js \
    js/review.js js/quiz.js js/spell.js js/match.js js/export.js \
    js/stats.js js/homework.js js/app.js | \
    npx esbuild --loader=js --minify > js/app.bundle.min.js

# CSS minify
npx esbuild css/style.css --minify --outfile=css/style.min.css

echo "=== Build complete ==="
ls -lh js/app.bundle.min.js css/style.min.css
printf "JS  gzip: "; gzip -c js/app.bundle.min.js | wc -c
printf "CSS gzip: "; gzip -c css/style.min.css | wc -c
