import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "4rem 2rem" }}>
      {/* Hero */}
      <div
        className="fade-in"
        style={{
          textAlign: "center",
          marginBottom: "4rem",
          borderBottom: "1px solid var(--border)",
          paddingBottom: "3rem",
        }}
      >
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.3em",
            color: "var(--text-muted)",
            marginBottom: "1rem",
          }}
        >
          2025 KOLEKSİYONU
        </p>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Premium Tişört
          <br />
          <span style={{ color: "var(--accent)" }}>Koleksiyonu</span>
        </h1>
        <p
          style={{
            marginTop: "1.5rem",
            color: "var(--text-muted)",
            fontSize: "0.9rem",
            maxWidth: "400px",
            margin: "1.5rem auto 0",
            lineHeight: 1.8,
          }}
        >
          El ile seçilmiş kumaşlar, titizlikle işlenmiş detaylar.
          Her parça bir ifade biçimi.
        </p>
      </div>

      {/* Product Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </div>
  );
}