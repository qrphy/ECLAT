"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, totalPrice, totalCount, removeItem, updateQty } = useCart();

  if (items.length === 0) {
    return (
      <div
        className="fade-in"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
          gap: "1.5rem",
          color: "var(--text-muted)",
        }}
      >
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem" }}>Sepetiniz boş</p>
        <Link
          href="/"
          style={{
            padding: "0.75rem 2rem",
            background: "var(--accent)",
            color: "#0e0e0e",
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            borderRadius: "2px",
          }}
        >
          KOLEKSİYONA GİT
        </Link>
      </div>
    );
  }

  return (
    <div
      className="fade-in"
      style={{ maxWidth: "960px", margin: "0 auto", padding: "3rem 2rem" }}
    >
      <h1
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "2rem",
          marginBottom: "0.5rem",
        }}
      >
        Sepetim
      </h1>
      <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "2.5rem" }}>
        {totalCount} ürün
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "2rem", alignItems: "start" }}>
        {/* Items */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {items.map((item) => (
            <div
              key={`${item.product.id}-${item.size}`}
              style={{
                display: "flex",
                gap: "1.25rem",
                padding: "1.25rem",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
              }}
            >
              {/* Thumbnail */}
              <div
                style={{
                  width: "90px",
                  height: "110px",
                  position: "relative",
                  borderRadius: "2px",
                  overflow: "hidden",
                  flexShrink: 0,
                  background: "#111",
                }}
              >
                <Image
                  src={item.product.image}
                  alt={item.product.name}
                  fill
                  sizes="90px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Details */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem" }}>
                    {item.product.name}
                  </h3>
                  <span style={{ color: "var(--accent)", fontFamily: "'Playfair Display', serif" }}>
                    ₺{item.product.price * item.quantity}
                  </span>
                </div>

                <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.08em" }}>
                  BEDEN: {item.size} · ₺{item.product.price} / adet
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "auto" }}>
                  {/* Qty */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid var(--border)",
                      borderRadius: "2px",
                      overflow: "hidden",
                    }}
                  >
                    <button
                      onClick={() => updateQty(item.product.id, item.size, item.quantity - 1)}
                      style={{
                        width: "32px",
                        height: "32px",
                        background: "transparent",
                        border: "none",
                        color: "var(--text-muted)",
                        fontSize: "1rem",
                      }}
                    >
                      −
                    </button>
                    <span
                      style={{
                        width: "32px",
                        height: "32px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.85rem",
                        borderLeft: "1px solid var(--border)",
                        borderRight: "1px solid var(--border)",
                      }}
                    >
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQty(item.product.id, item.size, item.quantity + 1)}
                      style={{
                        width: "32px",
                        height: "32px",
                        background: "transparent",
                        border: "none",
                        color: "var(--text-muted)",
                        fontSize: "1rem",
                      }}
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.product.id, item.size)}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "var(--text-muted)",
                      fontSize: "0.75rem",
                      letterSpacing: "0.08em",
                      textDecoration: "underline",
                    }}
                  >
                    Kaldır
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            padding: "1.5rem",
            position: "sticky",
            top: "90px",
          }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.1rem",
              marginBottom: "1.5rem",
              paddingBottom: "1rem",
              borderBottom: "1px solid var(--border)",
            }}
          >
            Sipariş Özeti
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <Row label="Ara Toplam" value={`₺${totalPrice}`} />
            <Row label="Kargo" value="Ücretsiz" accent />
            <Row label="İndirim" value="—" muted />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "1rem",
              borderTop: "1px solid var(--border)",
              marginBottom: "1.5rem",
            }}
          >
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem" }}>Toplam</span>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", color: "var(--accent)" }}>
              ₺{totalPrice}
            </span>
          </div>

          <Link href="/checkout">
            <button
              style={{
                width: "100%",
                padding: "1rem",
                background: "var(--accent)",
                color: "#0e0e0e",
                border: "none",
                borderRadius: "2px",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              ÖDEMEYE GEÇ →
            </button>
          </Link>

          <Link href="/" style={{ display: "block", textAlign: "center", marginTop: "1rem" }}>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.05em" }}>
              ← Alışverişe devam et
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  accent,
  muted,
}: {
  label: string;
  value: string;
  accent?: boolean;
  muted?: boolean;
}) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem" }}>
      <span style={{ color: "var(--text-muted)" }}>{label}</span>
      <span style={{ color: accent ? "#4ade80" : muted ? "var(--text-muted)" : "var(--text)" }}>
        {value}
      </span>
    </div>
  );
}