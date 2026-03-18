"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/types/index";
import { useCart } from "@/context/CartContext";

const SIZES = ["XS", "S", "M", "L", "XL"];

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState("");
  const [added, setAdded] = useState(false);
  const [error, setError] = useState(false);

  const handleAdd = () => {
    if (!selectedSize) {
      setError(true);
      setTimeout(() => setError(false), 1500);
      return;
    }
    addItem(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <article
      className="fade-up"
      style={{
        animationDelay: `${index * 0.1}s`,
        opacity: 0,
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", background: "#111" }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        {product.badge && (
          <span
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              background: "var(--accent)",
              color: "#0e0e0e",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              padding: "4px 10px",
              borderRadius: "2px",
            }}
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* Info */}
      <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "1rem", flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.1rem",
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            {product.name}
          </h3>
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1rem",
              fontWeight: 400,
              color: "var(--accent)",
              whiteSpace: "nowrap",
              marginLeft: "0.5rem",
            }}
          >
            ₺{product.price}
          </span>
        </div>

        <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
          {product.description}
        </p>

        {/* Size Selector */}
        <div>
          <p
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              color: "var(--text-muted)",
              marginBottom: "0.5rem",
            }}
          >
            BEDEN {error && <span style={{ color: "#ef4444" }}>— Lütfen seçin</span>}
          </p>
          <div style={{ display: "flex", gap: "0.4rem" }}>
            {SIZES.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                style={{
                  width: "36px",
                  height: "36px",
                  border: selectedSize === size
                    ? "1px solid var(--accent)"
                    : error
                    ? "1px solid #ef4444"
                    : "1px solid var(--border)",
                  background: selectedSize === size ? "var(--accent)" : "transparent",
                  color: selectedSize === size ? "#0e0e0e" : error ? "#ef4444" : "var(--text-muted)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.05em",
                  fontWeight: 500,
                  borderRadius: "2px",
                  transition: "all 0.15s ease",
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add Button */}
        <button
          onClick={handleAdd}
          style={{
            marginTop: "auto",
            padding: "0.75rem",
            background: added ? "#166534" : "var(--accent)",
            color: added ? "#fff" : "#0e0e0e",
            border: "none",
            borderRadius: "2px",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            transition: "all 0.2s ease",
          }}
        >
          {added ? "✓ SEPETe EKLENDİ" : "SEPETe EKLE"}
        </button>
      </div>
    </article>
  );
}