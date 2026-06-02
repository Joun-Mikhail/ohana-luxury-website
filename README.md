# OHANA — Handmade Pearl Bags & Accessories

> Premium landing page for [OHANA by Sara](https://www.instagram.com/ohanabysara/), a handmade pearl bag brand based in Alexandria, Egypt.

---

## Features

- Full single-page design with hero, collections, custom order, reviews, and size guide sections
- WhatsApp order flow — product buttons and a custom order form both open WhatsApp with a pre-filled message
- Scroll reveal animations and a seamless marquee ticker
- Mobile-first responsive layout with a sticky CTA on small screens
- Google Fonts (Cormorant Garamond + Inter) for a luxury editorial feel
- Instagram link and direct WhatsApp contact (+20 12 29884278)

## Project structure

```
├── index.html          # Main page
├── styles.css          # All styling (custom properties, responsive)
├── script.js           # Interactions: order buttons, form, reveal, marquee
└── assets/
    ├── brand/          # Logo and favicon
    └── images/         # Product and editorial photos
```

## Preview

Open `index.html` in any browser — no build step needed.

## Deploy to Netlify (fastest)

1. Go to [netlify.com](https://netlify.com) and sign in
2. Drag and drop this entire folder onto the dashboard
3. Copy the generated URL and paste it in the Instagram bio

## Customization

| What | Where |
|------|-------|
| Prices | Product cards in `index.html` |
| Product photos | `assets/images/` |
| WhatsApp number | Top of `script.js` (`WHATSAPP_NUMBER`) |
| Brand colors | CSS custom properties at the top of `styles.css` |
| Delivery / deposit terms | Custom order section in `index.html` |

---

Built with plain HTML, CSS, and vanilla JavaScript — no frameworks, no dependencies.
