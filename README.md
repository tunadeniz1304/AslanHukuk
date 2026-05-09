# Aslan Hukuk Bürosu

Editorial luxury kurumsal site. Astro + React (island'lar) + Tailwind + Framer Motion.

## Stack
- **Astro 5** — statik HTML çıktı, en iyi SEO ve Lighthouse skorları
- **React 18 island'lar** — yalnız etkileşimli bileşenler için JS yüklenir
- **Tailwind CSS** — editorial design tokens (`tailwind.config.mjs`)
- **Framer Motion** — hero, scroll reveal, marquee animasyonları
- **Playfair Display + Source Serif 4 + JetBrains Mono** — tier-1 firma tipografisi

## Geliştirme
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # /dist üretir
npm run preview  # build'i önizler
```

## Sayfalar
- `/` — Anasayfa (editorial hero, manifesto, çalışma alanları, sayılar)
- `/hakkimizda` — Büro hikayesi
- `/calisma-alanlari` — 6 hukuk alanı
- `/ekip` — Avukat kadrosu
- `/iletisim` — Form + harita

## Tasarım Sistemi
- Palet: warm cream paper + near-black ink + restrained gold (`#8a6b2a`) + noir
- Hiçbir yuvarlak köşe yok, hiçbir gölge yok — sadece hairline kurallar
- Yoğun whitespace, büyük editorial tipografi
- AI-slop yok: kart-grid değil, numaralı editorial liste
