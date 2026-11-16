"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/common/Button";
import { useCart } from "@/contexts/cart-context";

type AddToCartButtonProps = {
  productId: string;
  productName: string;
  className?: string;
};

export function AddToCartButton({
  productId,
  productName,
  className,
}: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;
    const timeout = window.setTimeout(() => setAdded(false), 1600);
    return () => window.clearTimeout(timeout);
  }, [added]);

  return (
    <>
      <Button
        type="button"
        onClick={() => {
          addItem(productId);
          setAdded(true);
        }}
        aria-label={`Tambah ${productName} ke keranjang`}
        className={className}
      >
        {added ? (
          "Ditambahkan ✓"
        ) : (
          <>
            <span aria-hidden="true">+</span>
            <span>Keranjang</span>
          </>
        )}
      </Button>
      <span className="sr-only" aria-live="polite">
        {added ? `${productName} ditambahkan ke keranjang` : ""}
      </span>
    </>
  );
}
