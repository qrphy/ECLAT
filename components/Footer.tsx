"use client";

import Link from "next/link";
import { useState } from "react";

const links = {
  Koleksiyon: [
    { label: "Tüm Ürünler", href: "/" },
    { label: "Yeni Gelenler", href: "/" },
    { label: "Çok Satanlar", href: "/" },
    { label: "Sınırlı Edisyon", href: "/" },
  ],
  Yardım: [
    { label: "Beden Rehberi", href: "/" },
    { label: "Kargo & Teslimat", href: "/" },
    { label: "İade & Değişim", href: "/" },
    { label: "S.S.S.", href: "/" },
  ],
  Hakkımızda: [
    { label: "Hikayemiz", href: "/" },
    { label: "Sürdürülebilirlik", href: "/" },
    { label: "İletişim", href: "/" },
    { label: "Kariyer", href: "/" },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg2, #0a0a0a)",
        marginTop: "6rem",
      }}
    >
      {/* Newsletter band */}
      <div
        style={{
          borderBottom: "1px solid var(--border)",
          padding: "3rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
          flexWrap: "wrap",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.4rem",
              fontWeight: 600,
              lineHeight: 1.3,
            }}
          >
            Yeni koleksiyonlardan
            <br />
            <span style={{ color: "var(--accent)" }}>ilk sen haberdar ol.</span>
          </p>
        </div>

        {subscribed ? (
          <p
            style={{
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              color: "#4ade80",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            ✓ &nbsp;Abone oldunuz, teşekkürler!
          </p>
        ) : (
          <form
            onSubmit={handleSubscribe}
            style={{
              display: "flex",
              gap: "0",
              border: "1px solid var(--border)",
              borderRadius: "2px",
              overflow: "hidden",
              minWidth: "320px",
              maxWidth: "440px",
              flex: 1,
            }}
          >
            <input
              type="email"
              placeholder="E-posta adresiniz"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "var(--text)",
                padding: "0.75rem 1rem",
                fontSize: "0.85rem",
              }}
            />
            <button
              type="submit"
              style={{
                background: "var(--accent)",
                color: "#0e0e0e",
                border: "none",
                padding: "0.75rem 1.5rem",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                whiteSpace: "nowrap",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.8")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              ABONE OL
            </button>
          </form>
        )}
      </div>

      {/* Main footer grid */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "3.5rem 2rem",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "3rem",
        }}
      >
        {/* Brand column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <Link href="/">
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "2rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "var(--accent)",
              }}
            >
              ÉCLAT
            </span>
          </Link>
          <p
            style={{
              fontSize: "0.8rem",
              color: "var(--text-muted)",
              lineHeight: 1.9,
              maxWidth: "260px",
            }}
          >
            Her parça bir ifade biçimi. El ile seçilmiş kumaşlar,
            titizlikle işlenmiş detaylar. Günlük giyimin ötesinde.
          </p>

          {/* Social icons */}
          <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
            {[
              { label: "Instagram", icon: igIcon },
              { label: "Twitter / X", icon: xIcon },
              { label: "Pinterest", icon: pinIcon },
            ].map(({ label, icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                style={{
                  width: "36px",
                  height: "36px",
                  border: "1px solid var(--border)",
                  borderRadius: "2px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-muted)",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                  (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(links).map(([title, items]) => (
          <div key={title} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                color: "var(--accent)",
                fontWeight: 500,
                marginBottom: "0.25rem",
              }}
            >
              {title.toUpperCase()}
            </p>
            {items.map((item) => (
              <Link key={item.label} href={item.href}>
                <span
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--text-muted)",
                    display: "block",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--text)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
                  }
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          padding: "1.25rem 2rem",
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", letterSpacing: "0.05em" }}>
          © {new Date().getFullYear()} THREAD. Tüm hakları saklıdır.
        </p>

        <div style={{ display: "flex", gap: "1.5rem" }}>
          {["Gizlilik Politikası", "Kullanım Şartları", "Çerez Tercihleri"].map((t) => (
            <a
              key={t}
              href="#"
              style={{
                fontSize: "0.72rem",
                color: "var(--text-muted)",
                letterSpacing: "0.04em",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
              }
            >
              {t}
            </a>
          ))}
        </div>

        {/* Payment icons */}
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          {["VISA", "MC", "AMEX", "İYZİ"].map((p) => (
            <span
              key={p}
              style={{
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                color: "var(--text-muted)",
                border: "1px solid var(--border)",
                borderRadius: "2px",
                padding: "3px 7px",
              }}
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* SVG icon helpers */
const igIcon = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const xIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L2.006 2.25H8.08l4.262 5.632 5.902-5.632Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const pinIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);