# ECLAT

> A dark, minimal e-commerce UI built with Next.js 14 and TypeScript.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

## ✨ Özellikler

- 🛍️ Ürün listeleme — beden seçimi ile sepete ekleme
- 🛒 Dinamik sepet — adet güncelleme, ürün kaldırma, anlık toplam
- 💳 2 adımlı ödeme akışı — teslimat & kart bilgileri, form validasyonu
- 🌑 Dark gold tema — Playfair Display + DM Sans tipografi
- ⚡ App Router & Server Components ile hızlı yükleme
- 📦 Context API ile global state yönetimi (sıfır bağımlılık)

## 🗂️ Proje Yapısı

├── app/
│   ├── page.tsx          # Ürün listesi
│   ├── cart/page.tsx     # Sepet
│   └── checkout/page.tsx # Ödeme
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ProductCard.tsx
├── context/
│   └── CartContext.tsx   # Global sepet state
├── data/
│   └── products.ts       # Ürün verileri
└── types/
    └── index.ts

## 🚀 Kurulum

git clone https://github.com/qrphy/ECLAT.git
cd eclat
npm install
npm run dev

Uygulama http://localhost:3000 adresinde çalışacaktır.

## 🛠️ Teknolojiler

- **Next.js 14** — App Router, Server & Client Components
- **TypeScript** — Tip güvenli geliştirme
- **CSS Variables** — Tema yönetimi, sıfır CSS framework
- **useReducer** — Sepet state yönetimi

## 📄 Lisans

MIT
