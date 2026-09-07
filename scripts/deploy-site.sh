#!/usr/bin/env bash

set -euo pipefail

script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
root_repo="$(cd -- "$script_dir/.." && pwd)"
codes_dir="$(cd -- "$root_repo/.." && pwd)"
academic_repo="${ACADEMIC_PAGE_DIR:-$codes_dir/academic-page}"
output_dir="$root_repo/build-combined"

if [[ -z "${GIT_SSH_COMMAND:-}" ]]; then
  export GIT_SSH_COMMAND="ssh -o ConnectTimeout=20 -o ServerAliveInterval=5 -o ServerAliveCountMax=3"
fi

require_clean_master() {
  local repository="$1"
  local label="$2"
  local branch

  branch="$(git -C "$repository" branch --show-current)"
  if [[ "$branch" != "master" ]]; then
    printf '%s must be on master before deployment (current: %s).\n' "$label" "$branch" >&2
    exit 1
  fi

  if [[ -n "$(git -C "$repository" status --porcelain)" ]]; then
    printf '%s has uncommitted changes. Commit them before deployment.\n' "$label" >&2
    exit 1
  fi

  git -C "$repository" fetch --quiet origin master
  if [[ "$(git -C "$repository" rev-parse HEAD)" != "$(git -C "$repository" rev-parse origin/master)" ]]; then
    printf '%s master is not synchronized with origin/master. Push or pull first.\n' "$label" >&2
    exit 1
  fi
}

if [[ ! -d "$academic_repo/.git" ]]; then
  printf 'Academic homepage repository not found at: %s\n' "$academic_repo" >&2
  exit 1
fi

require_clean_master "$academic_repo" "academic-page"
require_clean_master "$root_repo" "bonjour-npy.github.io"

ACADEMIC_SITE_URL=https://bonjour-npy.github.io \
  bash "$script_dir/build-combined-site.sh"

git -C "$root_repo" fetch --quiet origin gh-pages

temporary_parent="$(mktemp -d "${TMPDIR:-/tmp}/npy-gh-pages-worktree.XXXXXX")"
deploy_worktree="$temporary_parent/gh-pages"
worktree_added=false

cleanup() {
  if [[ "$worktree_added" == true ]]; then
    git -C "$root_repo" worktree remove --force "$deploy_worktree" >/dev/null 2>&1 || true
  fi
  rm -rf -- "$temporary_parent"
}
trap cleanup EXIT

git -C "$root_repo" worktree add --detach "$deploy_worktree" origin/gh-pages
worktree_added=true

rsync -a --delete --exclude='.git' "$output_dir/" "$deploy_worktree/"
git -C "$deploy_worktree" add -A

if git -C "$deploy_worktree" diff --cached --quiet; then
  printf 'The deployed site is already up to date.\n'
  exit 0
fi

academic_revision="$(git -C "$academic_repo" rev-parse --short=12 HEAD)"
blog_revision="$(git -C "$root_repo" rev-parse --short=12 HEAD)"

git -C "$deploy_worktree" commit \
  -m "Deploy combined site - academic $academic_revision, blog $blog_revision"
git -C "$deploy_worktree" push origin HEAD:gh-pages

printf 'Published the combined site to origin/gh-pages.\n'
