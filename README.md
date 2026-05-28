# Kelijah Auto Spares & Garage — Website

Production website for Kelijah Auto Spares & Garage, a professional auto service centre in Nairobi, Kenya.

Built by [Athanas Muinde](https://github.com/Mwandii)

---

## Live Site

> kelijah.vercel.app

---

## Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 18 | UI framework |
| Vite | Latest | Build tool |
| Tailwind CSS | v4 | Styling |
| React Router | v6 | Client-side routing |
| Vercel | — | Hosting + deployment |

---

## Features

- Multi-page React app — Homepage, Services, Service Detail, Book Appointment
- Custom Tailwind v4 design system with CSS tokens for colors, fonts, and spacing
- Mobile-first responsive design throughout
- Scroll-triggered entrance animations via IntersectionObserver 
- Lazy loaded images with blur-up placeholder
- Infinite scrolling marquees — trust signals and brands
- Dynamic `/services/:slug` routing — each service has its own page with description, delivery steps, and FAQ accordion
- WhatsApp booking flow — form builds a structured pre-filled message and opens `wa.me` directly. Zero backend required.
- Sticky service detail sidebar on desktop
- Accessible — semantic HTML, ARIA labels, skip-to-content link, keyboard navigable
- `siteData.js` as single source of truth — update content in one place, reflects everywhere

---

## Project Structure

```
kelijah-autospares/
├── public/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── TrustMarquee.jsx
│   │   │   ├── About.jsx
│   │   │   ├── BrandsMarquee.jsx
│   │   │   ├── ServicesGrid.jsx
│   │   │   ├── WhyChooseUs.jsx
│   │   │   ├── HowItWorks.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── CtaStrip.jsx
│   │   │   └── Location.jsx
│   │   └── ui/
│   │       ├── FadeIn.jsx
│   │       ├── LazyImage.jsx
│   │       ├── Button.jsx
│   │       ├── Overline.jsx
│   │       └── SectionHeading.jsx
│   ├── data/
│   │   └── siteData.js
│   ├── hooks/
│   │   ├── useScrolled.js
│   │   └── useInView.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── ServiceDetail.jsx
│   │   └── BookAppointment.jsx
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── vercel.json
└── README.md
```

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Clone the repo
git clone https://github.com/Mwandii/kelijah-autospares.git
cd kelijah-autospares

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env and add the real WhatsApp number

# Start dev server
npm run dev
```

---

## Environment Variables

| Variable | Description | Example |
|---|---|---|
| `VITE_WA_NUMBER` | WhatsApp number — digits only, no `+` or spaces, include country code | `254712345678` |

Create a `.env` file from the example:
```bash
cp .env.example .env
```

Never commit `.env` to version control — it is gitignored.

---

## Updating Content

All site content lives in `src/data/siteData.js`. This is the only file you need to edit for content changes:

- **Business details** — name, address, phone, hours → `BUSINESS` object
- **Services** — title, description, steps, FAQs, image → `SERVICES` array
- **Testimonials** → `TESTIMONIALS` array
- **Why Choose Us** → `WHY_US` array
- **Stats** → `STATS` array
- **Brands** → `BRANDS` array

---

## Replacing Images

All images currently use Unsplash placeholders. To replace with client photos:

1. Add photos to `public/images/`
2. Update the `image` field on each service in `siteData.js`
3. Update `HERO_IMAGE` in `src/components/sections/Hero.jsx`
4. Update `ABOUT_IMAGE` in `src/components/sections/About.jsx`

---

## Google Maps Embed

To add the real garage location:

1. Go to [maps.google.com](https://maps.google.com)
2. Search for the garage address
3. Click **Share → Embed a map → Copy HTML**
4. Copy only the `src="..."` value from the iframe
5. Replace `mapEmbedSrc` in `src/data/siteData.js`

---

## Deployment

The project is deployed on Vercel.

**Environment variable to set in Vercel dashboard:**

| Key | Value |
|---|---|
| `VITE_WA_NUMBER` | Real WhatsApp number (digits only) |

`vercel.json` handles SPA routing so all routes resolve correctly on refresh.

---

## Pages

| Route | Page |
|---|---|
| `/` | Homepage |
| `/services` | Full services catalog |
| `/services/:slug` | Individual service detail |
| `/book-appointment` | WhatsApp booking form |

---

## License

Private client project. Not open for reuse without permission.