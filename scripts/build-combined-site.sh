#!/usr/bin/env bash

set -euo pipefail

script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
root_repo="$(cd -- "$script_dir/.." && pwd)"
codes_dir="$(cd -- "$root_repo/.." && pwd)"
academic_repo="${ACADEMIC_PAGE_DIR:-$codes_dir/academic-page}"
output_dir="$root_repo/build-combined"
academic_site_url="${ACADEMIC_SITE_URL:-https://bonjour-npy.github.io}"

bundle_command="${BUNDLE_BIN:-}"
if [[ -z "$bundle_command" ]]; then
  for candidate in \
    /opt/homebrew/opt/ruby@3.2/bin/bundle \
    /usr/local/opt/ruby@3.2/bin/bundle \
    "$(command -v bundle 2>/dev/null || true)"; do
    if [[ -n "$candidate" && -x "$candidate" ]]; then
      bundle_command="$candidate"
      break
    fi
  done
fi

if [[ ! -f "$academic_repo/Gemfile" || ! -f "$academic_repo/_config.yml" ]]; then
  printf 'Academic homepage repository not found at: %s\n' "$academic_repo" >&2
  printf 'Keep it beside this repository or set ACADEMIC_PAGE_DIR.\n' >&2
  exit 1
fi

if [[ -z "$bundle_command" ]]; then
  printf 'Bundler was not found. Install the academic-page Ruby dependencies first.\n' >&2
  exit 1
fi

for required_command in npm rsync; do
  if ! command -v "$required_command" >/dev/null 2>&1; then
    printf 'Required command not found: %s\n' "$required_command" >&2
    exit 1
  fi
done

temporary_dir="$(mktemp -d "${TMPDIR:-/tmp}/npy-combined-site.XXXXXX")"
staging_dir="$temporary_dir/site"
blog_build_dir="$temporary_dir/blog"
academic_override_config="$temporary_dir/academic-root.yml"

cleanup() {
  rm -rf -- "$temporary_dir"
}
trap cleanup EXIT

mkdir -p "$staging_dir" "$blog_build_dir"
printf 'url: "%s"\nbaseurl: ""\n' "$academic_site_url" > "$academic_override_config"

printf 'Building academic homepage for / ...\n'
(
  cd -- "$academic_repo"
  "$bundle_command" exec jekyll build \
    --config "$academic_repo/_config.yml,$academic_override_config" \
    --destination "$staging_dir"
)

printf 'Building Docusaurus blog for /blog/ ...\n'
(
  cd -- "$root_repo"
  npm run build -- --out-dir "$blog_build_dir"
)

mkdir -p "$staging_dir/blog"
rsync -a --delete "$blog_build_dir/" "$staging_dir/blog/"
touch "$staging_dir/.nojekyll"

if [[ -f "$staging_dir/robots.txt" ]]; then
  printf 'Sitemap: https://bonjour-npy.github.io/blog/sitemap.xml\n' >> "$staging_dir/robots.txt"
else
  printf '%s\n' \
    'Sitemap: https://bonjour-npy.github.io/sitemap.xml' \
    'Sitemap: https://bonjour-npy.github.io/blog/sitemap.xml' \
    > "$staging_dir/robots.txt"
fi

mkdir -p "$output_dir"
rsync -a --delete "$staging_dir/" "$output_dir/"

printf 'Combined site built at: %s\n' "$output_dir"
printf 'Preview it with: npm run serve:combined\n'
