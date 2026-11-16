"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CartItem = {
  productId: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  /** Total number of units across all lines. */
  count: number;
  addItem: (productId: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

/**
 * Minimal in-memory cart. State resets on a full page reload; persistence and
 * quantity editing belong to the cart page.
 */
export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback((productId: string) => {
    setItems((current) => {
      const existing = current.find((item) => item.productId === productId);
      if (!existing) {
        return [...current, { productId, quantity: 1 }];
      }
      return current.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    });
  }, []);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      count: items.reduce((total, item) => total + item.quantity, 0),
      addItem,
    }),
    [items, addItem],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
