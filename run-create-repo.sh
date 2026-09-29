#!/bin/bash

# Run first these:
# chmod +x repo-create.sh
#
# Then run the script:
# ./repo-create.sh 2>&1 | tee repo-create.log

set -Eeuo pipefail
set -x
trap 'echo "❌ ERROR on line $LINENO"' ERR

REPO="Primuse-Pte-Ltd/llm-council"
REMOTE_URL="https://github.com/Primuse-Pte-Ltd/llm-council.git"

echo "=== 1. Check GitHub CLI version ==="
gh --version

echo "=== 2. Check authentication status ==="
gh auth status

echo "=== 3. Check current git remotes ==="
git remote -v || true

echo "=== 4. Check org exists ==="
gh api orgs/Primuse-Pte-Ltd --jq '.login'

echo "=== 5. Check if repo already exists ==="
if gh repo view "$REPO" --json nameWithOwner,viewerPermission >/dev/null 2>&1; then
  echo "Repo already exists: $REPO"
else
  echo "Repo does not exist, creating..."
  gh repo create "$REPO" --private
fi

echo "=== 6. Initialize git if needed ==="
if [ ! -d .git ]; then
  git init
fi

echo "=== 7. Ensure there is at least one commit ==="
if ! git rev-parse --verify HEAD >/dev/null 2>&1; then
  git add .
  git commit --trailer "Made-with: Cursor" -m "first commit"
fi

echo "=== 8. Rename branch to main ==="
git branch -M main

echo "=== 9. Configure remote origin ==="
if git remote get-url origin >/dev/null 2>&1; then
  git remote set-url origin "$REMOTE_URL"
else
  git remote add origin "$REMOTE_URL"
fi

echo "=== 10. Setup GitHub auth for git ==="
gh auth setup-git

echo "=== 11. Push to GitHub ==="
git push -u origin main

echo "=== 12. Final checks ==="
git status -sb
git remote -v
gh repo view "$REPO" --json nameWithOwner,viewerPermission

echo "✅ DONE"