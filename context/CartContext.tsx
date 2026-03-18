"use client";

import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { CartItem, Product } from "@/types/index";

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: "ADD_ITEM"; product: Product; size: string }
  | { type: "REMOVE_ITEM"; productId: number; size: string }
  | { type: "UPDATE_QTY"; productId: number; size: string; quantity: number }
  | { type: "CLEAR_CART" };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find(
        (i) => i.product.id === action.product.id && i.size === action.size
      );
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.product.id === action.product.id && i.size === action.size
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }
      return {
        items: [...state.items, { product: action.product, size: action.size, quantity: 1 }],
      };
    }
    case "REMOVE_ITEM":
      return {
        items: state.items.filter(
          (i) => !(i.product.id === action.productId && i.size === action.size)
        ),
      };
    case "UPDATE_QTY":
      if (action.quantity <= 0) {
        return {
          items: state.items.filter(
            (i) => !(i.product.id === action.productId && i.size === action.size)
          ),
        };
      }
      return {
        items: state.items.map((i) =>
          i.product.id === action.productId && i.size === action.size
            ? { ...i, quantity: action.quantity }
            : i
        ),
      };
    case "CLEAR_CART":
      return { items: [] };
    default:
      return state;
  }
};

interface CartContextType {
  items: CartItem[];
  totalCount: number;
  totalPrice: number;
  addItem: (product: Product, size: string) => void;
  removeItem: (productId: number, size: string) => void;
  updateQty: (productId: number, size: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const totalCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = state.items.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        totalCount,
        totalPrice,
        addItem: (product, size) => dispatch({ type: "ADD_ITEM", product, size }),
        removeItem: (productId, size) => dispatch({ type: "REMOVE_ITEM", productId, size }),
        updateQty: (productId, size, quantity) =>
          dispatch({ type: "UPDATE_QTY", productId, size, quantity }),
        clearCart: () => dispatch({ type: "CLEAR_CART" }),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};