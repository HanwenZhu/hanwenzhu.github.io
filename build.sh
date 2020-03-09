#!/bin/bash
cd "$(dirname "$0")"
mkdir tmp
bundle exec jekyll build --trace --verbose --incremental --strict_front_matter --destination tmp
rm -rfv _site
mv -fv tmp _site
