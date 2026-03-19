"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useCart } from "@/context/CartContext";

const menuData = [
  {
    category: "TSHIRT",
    items: [
      { label: "Tümü", href: "/" },
      { label: "Basic", href: "/" },
      { label: "Oversize", href: "/" },
      { label: "Graphic", href: "/" },
    ],
  },
  {
    category: "SWEATSHIRT",
    items: [
      { label: "Tümü", href: "/" },
      { label: "Basic", href: "/" },
      { label: "Kapüşonlu", href: "/" },
      { label: "Fermuarlı", href: "/" },
    ],
  },
  {
    category: "PANTOLON",
    items: [
      { label: "Tümü", href: "/" },
      { label: "Baggy", href: "/" },
      { label: "Jogger", href: "/" },
      { label: "Şort", href: "/" },
    ],
  },
];

export default function Header() {
  const { totalCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close menu on route change / scroll lock
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 200,
          height: "72px",
          background: "rgba(14,14,14,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          padding: "0 2rem",
        }}
      >
        {/* LEFT — hamburger */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menüyü aç"
            style={{
              background: "transparent",
              border: "none",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              padding: "6px",
              cursor: "pointer",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: i === 1 ? "18px" : "24px",
                  height: "1.5px",
                  background: menuOpen ? "var(--accent)" : "var(--text)",
                  borderRadius: "1px",
                  transition: "width 0.2s ease, background 0.2s ease",
                }}
              />
            ))}
          </button>
        </div>

        {/* CENTER — logo */}
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.5rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "var(--accent)",
              whiteSpace: "nowrap",
            }}
          >
            ÉCLAT
          </span>
        </Link>

        {/* RIGHT — cart */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
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
        </div>
      </header>

      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 150,
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(2px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Slide-in menu panel */}
      <div
        ref={menuRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 180,
          width: "min(420px, 90vw)",
          height: "100dvh",
          background: "var(--bg2, #0a0a0a)",
          borderRight: "1px solid var(--border)",
          transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
        }}
      >
        {/* Panel header */}
        <div
          style={{
            height: "72px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 2rem",
            borderBottom: "1px solid var(--border)",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              color: "var(--text-muted)",
            }}
          >
            KOLEKSİYON
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Kapat"
            style={{
              background: "transparent",
              border: "none",
              color: "var(--text-muted)",
              cursor: "pointer",
              padding: "4px",
              lineHeight: 1,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Menu categories */}
        <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "2.5rem", flex: 1 }}>
          {menuData.map(({ category, items }, ci) => (
            <div key={category} style={{ animationDelay: `${ci * 0.06}s` }}>
              {/* Category title */}
              <p
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  color: "var(--accent)",
                  fontWeight: 500,
                  marginBottom: "1rem",
                }}
              >
                {category}
              </p>

              {/* Items */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0.7rem 0",
                      borderBottom: "1px solid var(--border)",
                      color: "var(--text)",
                      fontSize: "0.95rem",
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 400,
                      transition: "color 0.15s, padding-left 0.2s",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                      (e.currentTarget as HTMLElement).style.paddingLeft = "0.5rem";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--text)";
                      (e.currentTarget as HTMLElement).style.paddingLeft = "0";
                    }}
                  >
                    {item.label}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ opacity: 0.4 }}>
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Panel footer */}
        <div
          style={{
            padding: "1.5rem 2rem",
            borderTop: "1px solid var(--border)",
            display: "flex",
            gap: "1.5rem",
            flexShrink: 0,
          }}
        >
          {["Yeni Gelenler", "İndirimler", "Kampanyalar"].map((t) => (
            <Link
              key={t}
              href="/"
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.08em",
                color: "var(--text-muted)",
                transition: "color 0.15s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
            >
              {t}
            </Link>
          ))}
        </div>
      </div>
    </>
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