"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { totalCount } = useCart();

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        height: "72px",
        background: "rgba(14,14,14,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2rem",
      }}
    >
      <Link href="/">
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.5rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            color: "var(--accent)",
          }}
        >
          ÉCLAT
        </span>
      </Link>

      <nav style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <Link href="/" style={{ fontSize: "0.8rem", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
          KOLEKSIYON
        </Link>
        <Link
          href="/cart"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            background: totalCount > 0 ? "var(--accent)" : "var(--surface)",
            color: totalCount > 0 ? "#0e0e0e" : "var(--text)",
            padding: "0.5rem 1.2rem",
            borderRadius: "2px",
            fontSize: "0.8rem",
            letterSpacing: "0.08em",
            fontWeight: 500,
            border: "1px solid var(--border)",
            transition: "all 0.2s ease",
          }}
        >
          <CartIcon />
          SEPET
          {totalCount > 0 && (
            <span
              style={{
                background: "#0e0e0e",
                color: "var(--accent)",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.7rem",
                fontWeight: 700,
              }}
            >
              {totalCount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}

function CartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}