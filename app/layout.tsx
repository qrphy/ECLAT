import type { Metadata } from "next";
import "@/style/globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ÉCLAT",
  description: "El seçimi premium tişörtler",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <CartProvider>
          <Header />
          <main style={{ minHeight: "calc(100vh - 72px)" }}>{children}</main>
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}