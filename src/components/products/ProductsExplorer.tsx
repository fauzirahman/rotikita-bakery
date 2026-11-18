"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/layout/Container";
import { CatalogProductCard } from "@/components/products/CatalogProductCard";
import { productCategories } from "@/lib/catalog-data";
import type { Product } from "@/types/home";

const pageSize = 8;

export function ProductsExplorer({
  products,
  initialCategory = "all",
}: {
  products: Product[];
  initialCategory?: string;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState("all");
  const [sort, setSort] = useState("popular");
  const [visibleCount, setVisibleCount] = useState(pageSize);

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("id-ID");
    const filtered = products.filter((product) => {
      const matchesQuery =
        !normalizedQuery ||
        `${product.name} ${product.description ?? ""}`
          .toLocaleLowerCase("id-ID")
          .includes(normalizedQuery);
      const matchesCategory =
        category === "all" || product.categoryId === category;
      const matchesPrice =
        priceRange === "all" ||
        (priceRange === "under-15" && product.price < 15000) ||
        (priceRange === "15-25" &&
          product.price >= 15000 &&
          product.price <= 25000) ||
        (priceRange === "over-25" && product.price > 25000);

      return matchesQuery && matchesCategory && matchesPrice;
    });

    return filtered.sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      if (sort === "newest") {
        return Number(b.badge === "Baru") - Number(a.badge === "Baru");
      }
      return (
        Number(Boolean(b.badge)) - Number(Boolean(a.badge)) ||
        b.rating - a.rating
      );
    });
  }, [category, priceRange, products, query, sort]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  function resetFilters() {
    setQuery("");
    setCategory("all");
    setPriceRange("all");
    setSort("popular");
    setVisibleCount(pageSize);
  }

  return (
    <>
      <section aria-label="Cari dan filter produk" className="bg-white">
        <Container className="py-8 sm:py-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <label className="flex h-12 items-center gap-3 rounded-md border border-input-line bg-cream px-4 lg:w-[360px]">
              <Image src="/icons/search.svg" alt="" width={18} height={18} />
              <span className="sr-only">Cari nama roti</span>
              <input
                type="search"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setVisibleCount(pageSize);
                }}
                placeholder="Cari roti favoritmu..."
                className="min-w-0 flex-1 bg-transparent text-[13px] text-ink outline-none placeholder:text-muted"
              />
            </label>
            <div className="grid grid-cols-2 gap-3 sm:flex">
              <label className="flex h-11 items-center gap-2 rounded-md border border-input-line bg-white px-3 text-[12px] text-muted">
                <span>Harga</span>
                <select
                  aria-label="Filter rentang harga"
                  value={priceRange}
                  onChange={(event) => {
                    setPriceRange(event.target.value);
                    setVisibleCount(pageSize);
                  }}
                  className="min-w-0 bg-transparent font-semibold text-ink outline-none"
                >
                  <option value="all">Semua</option>
                  <option value="under-15">&lt; Rp15.000</option>
                  <option value="15-25">Rp15–25 ribu</option>
                  <option value="over-25">&gt; Rp25.000</option>
                </select>
              </label>
              <label className="flex h-11 items-center gap-2 rounded-md border border-input-line bg-white px-3 text-[12px] text-muted">
                <span>Urutkan</span>
                <select
                  aria-label="Urutkan produk"
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="min-w-0 bg-transparent font-semibold text-ink outline-none"
                >
                  <option value="popular">Terpopuler</option>
                  <option value="price-low">Harga Terendah</option>
                  <option value="price-high">Harga Tertinggi</option>
                  <option value="newest">Terbaru</option>
                </select>
              </label>
            </div>
          </div>

          <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
            {productCategories.map((item) => {
              const active = category === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    setCategory(item.id);
                    setVisibleCount(pageSize);
                  }}
                  className={`shrink-0 rounded-full border px-4 py-2.5 text-[12px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                    active
                      ? "border-brand bg-brand text-white"
                      : "border-line bg-cream text-ink hover:border-brand hover:text-brand"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      <section aria-labelledby="catalog-heading" className="bg-cream">
        <Container className="pb-12 pt-9 sm:pb-16 sm:pt-12">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand">
                Baru keluar dari oven
              </p>
              <h2
                id="catalog-heading"
                className="mt-2 font-display text-[28px] text-ink sm:text-[34px]"
              >
                Pilihan roti untukmu
              </h2>
            </div>
            <p className="shrink-0 text-[12px] text-muted">
              {filteredProducts.length} produk
            </p>
          </div>

          {visibleProducts.length ? (
            <ul className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
              {visibleProducts.map((product) => (
                <li key={product.id}>
                  <CatalogProductCard product={product} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="rounded-xl border border-card-line bg-white px-5 py-14 text-center">
              <h3 className="font-display text-[24px] text-ink">
                Roti belum ditemukan
              </h3>
              <p className="mt-2 text-[13px] text-muted">
                Coba kata kunci atau filter yang berbeda.
              </p>
              <Button
                type="button"
                onClick={resetFilters}
                variant="outline"
                className="mt-5 h-11 rounded-md px-5 text-[13px]"
              >
                Hapus filter
              </Button>
            </div>
          )}

          {visibleCount < filteredProducts.length ? (
            <div className="mt-9 text-center">
              <Button
                type="button"
                variant="outline"
                onClick={() => setVisibleCount((count) => count + pageSize)}
                className="h-12 w-full rounded-md text-[13px] sm:w-auto sm:px-8"
              >
                Muat lebih banyak
              </Button>
            </div>
          ) : null}
        </Container>
      </section>
    </>
  );
}
