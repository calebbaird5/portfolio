#!/bin/bash

rm -rf ./docs/*
cp -r ./.output/public/* ./docs
cd docs
mv _nuxt nuxt

find . -type f \( -name "*.js" -o -name "*.css" -o -name "*.html" \) -exec sed -i -e 's/portfolio\/_nuxt/portfolio\/nuxt/g' {} \;
find . -name '*-e' -type f -delete
