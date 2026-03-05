#!/bin/bash
set -e
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

# Core JS: concatenate in index.html load order → esbuild minify → single bundle
# (homework.js excluded — lazy-loaded for students with classes + teachers)
cat js/config.js js/levels-loader.js js/storage.js js/particles.js \
    js/auth.js js/ui.js js/mastery.js js/syllabus.js js/study.js js/battle.js \
    js/review.js js/quiz.js js/spell.js js/match.js js/export.js \
    js/stats.js js/practice.js js/app.js | \
    npx esbuild --loader=js --minify > js/app.bundle.min.js

# Homework module (lazy-loaded separately)
npx esbuild js/homework.js --minify --outfile=js/homework.min.js

# CSS minify
npx esbuild css/style.css --minify --outfile=css/style.min.css

echo "=== Build complete ==="
ls -lh js/app.bundle.min.js js/homework.min.js css/style.min.css
printf "JS bundle gzip: "; gzip -c js/app.bundle.min.js | wc -c
printf "JS homework gzip: "; gzip -c js/homework.min.js | wc -c
printf "CSS gzip: "; gzip -c css/style.min.css | wc -c
