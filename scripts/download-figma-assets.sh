#!/usr/bin/env bash
# Temporary helper: downloads the homepage assets exported from Figma into public/.
# The Figma asset URLs expire ~7 days after they were generated. Delete this script
# once the files are downloaded (and committed).
set -euo pipefail

cd "$(dirname "$0")/.."
BASE="https://www.figma.com/api/mcp/asset/0d802c99-3bca-4671-b31a-2e47a0457785"

download() {
  mkdir -p "public/$(dirname "$2")"
  curl -fsSL "$BASE/$1" -o "public/$2"
  echo "ok  $2"
}

# Hero
download 3c2f2.png images/hero/artisan-bread.png

# Categories
download 81aff.png images/categories/roti-manis.png
download 797fb.png images/categories/roti-tawar.png
download 7e609.png images/categories/croissant.png
download 1c6b7.png images/categories/donat.png
download df391.png images/categories/cake.png
download cd5d4.png images/categories/cookies.png

# Products
download 92039.png images/products/roti-cokelat.png
download 5aac8.png images/products/croissant-butter.png
download 5497c.png images/products/roti-keju.png
download 3fc2d.png images/products/donat-cokelat.png
download 0e5c6.png images/products/cinnamon-roll.png
download f0009.png images/products/roti-sobek.png

# Promo
download 8c388.png images/promo/weekend-croissant-coffee.png

# Testimonials
download 1a328.png images/testimonials/dinda-putri.png
download 36ed9.png images/testimonials/rizky-pratama.png
download aab76.png images/testimonials/sarah-wijaya.png

# Icons
download c5eda.svg icons/search.svg
download 0efad.svg icons/shopping-bag.svg
download 2842b.svg icons/shop-arrow.svg
download c9ede.svg icons/fresh-bread.svg
download 82236.svg icons/feature-fresh.svg
download 4891f.svg icons/feature-quality.svg
download 5f530.svg icons/feature-price.svg
download 7160c.svg icons/feature-delivery.svg
download 9c5ed.svg icons/mail.svg
download 270d2.svg icons/whatsapp.svg
download 9b929.svg icons/email.svg
download f143b.svg icons/instagram.svg

echo "Done: 29 assets downloaded into public/."
