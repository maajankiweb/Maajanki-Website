# 🚀 MaaJanki Web Tech — Web Development & Digital Growth Platform

Official repository for **MaaJanki Web Tech** — a high-performance web agency application built with Next.js (App Router), Clerk Authentication, MongoDB Atlas, and Tailwind/Vanilla CSS styling.

![MaaJanki Web Tech Banner](/public/images/pages/main-services-pages/Home-page-image-Maajanki.webp)

---

## ✨ Features

- **🌐 Next.js App Router Architecture**: Ultra-fast Server-Side Rendering (SSR), Static Site Generation (SSG), and Dynamic API Routes.
- **🔐 Secure Clerk Authentication**: Protected Admin Dashboard (`/admin`) backed by Clerk auth guards and allowlist restrictions.
- **📊 Centralized Lead Management**: Instant lead capture into **MongoDB Atlas** across all entry points:
  - Homepage Promo Popup (`homepage-promo-popup`)
  - Footer Project Quote Form (`footer-popup`)
  - Contact Page (`contact-page`)
  - Free Website Audit Form (`website-audit`)
  - Interactive AI Chatbot (`chatbot`)
  - Service Brochure Downloads (`brochure`)
- **🤖 Built-in AI Chatbot**: Integrated AI assistant powering instant customer query resolution and automated lead detection.
- **📍 Dynamic Location & Service Pages**: Over 58 targeted SEO landing pages serving regional and global markets.
- **📥 CSV Export & Status Workflows**: Export leads directly to CSV and update lead status (`new`, `contacted`, `closed`, `archived`) in real-time.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **UI & Styling**: React 19, CSS Modules, Bootstrap, Lucide Icons, FontAwesome
- **Authentication**: [Clerk](https://clerk.com/) (`@clerk/nextjs`)
- **Database**: [MongoDB Atlas](https://www.mongodb.com/atlas) with [Mongoose](https://mongoosejs.com/)
- **Deployment**: Node.js / Hostinger VPS / Vercel

---

## 🚀 Getting Started

### 1. Prerequisites

- **Node.js**: `v18.x` or higher
- **npm**: `v9.x` or higher
- **MongoDB Atlas Connection URI**
- **Clerk Account Keys** (`pk_test_...` and `sk_test_...`)

---

### 2. Environment Setup

Create a `.env` file in the root directory:

```env
# Clerk Authentication Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key
CLERK_SECRET_KEY=sk_test_your_secret_key

# MongoDB Atlas Connection
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/maajanki_db?retryWrites=true&w=majority

# AI Chat & Admin Fallback Keys
NEXT_PUBLIC_CHAT_PROXY_URL=/api/chat
NEXT_PUBLIC_NVIDIA_MODEL=openai/gpt-oss-20b
NVIDIA_API_KEY=your_nvidia_api_key
ADMIN_SECRET_KEY=your_admin_secret_key
```

---

### 3. Installation

```bash
# Clone the repository
git clone https://github.com/maajankiweb/Maajanki-Website.git

# Navigate to project root
cd Maajanki-Website

# Install dependencies
npm install
```

---

### 4. Running Locally

```bash
# Start Next.js development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

- **Main Website**: `http://localhost:3000`
- **Admin Dashboard**: `http://localhost:3000/admin`
- **Sign In Page**: `http://localhost:3000/sign-in`

---

## 📂 Project Structure

```text
├── app/                      # Next.js App Router pages and API endpoints
│   ├── admin/                # Protected Lead Management Dashboard
│   ├── api/                  # Serverless API routes (/api/leads, /api/admin/leads, etc.)
│   ├── contact/              # Contact Page & Lead Capture Form
│   ├── locations/            # 58+ Regional & Global SEO Location Landing Pages
│   ├── services/             # Core Service Pages (SEO, Web Development, SMO, etc.)
│   ├── sign-in/              # Clerk Authentication Sign-in Route
│   ├── sign-up/              # Clerk Authentication Sign-up Route
│   └── layout.js             # Root Layout with Clerk & Client Providers
├── components/               # Reusable UI components
│   ├── Chatbot/              # AI Assistant & Chat Form
│   ├── FooterWithPopup.jsx   # Footer with Project Quote Modal
│   ├── PromoPopup.jsx        # Homepage Promotional Lead Callback Modal
│   └── Navbar.jsx            # Responsive Header Navigation
├── lib/                      # Database & Mongoose Models
│   ├── db.js                 # MongoDB Atlas connection helper
│   └── models/               # Mongoose Schemas (Lead.js)
├── public/                   # Static assets, images, and documents
└── middleware.js             # Clerk & Route Security Middleware
```

---

## 🚢 Deployment Guide

### Option 1: Vercel (Recommended for Next.js)

Vercel provides native zero-config deployment for Next.js App Router.

#### Deploy via Vercel CLI

```bash
# 1. Install Vercel CLI (if not already installed)
npm install -g vercel

# 2. Deploy Preview
npx vercel

# 3. Deploy to Production
npx vercel --prod
```

#### Environment Variables on Vercel:
Add the following in **Vercel Project Settings → Environment Variables**:
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` = `pk_live_...`
- `CLERK_SECRET_KEY` = `sk_live_...`
- `MONGODB_URI` = `mongodb+srv://...`
- `NVIDIA_API_KEY` = `nvapi-...`
- `ADMIN_SECRET_KEY` = `maajanki2026`

---

### Option 2: Hostinger (GitHub Import / Node.js App Setup)

In **Hostinger hPanel → Node.js Web Applications** (or Web Hosting Node.js manager):

1. **Import Repository**: Connect GitHub and select `https://github.com/maajankiweb/Maajanki-Website.git`
2. **Node.js Version**: Select `18.x` or `20.x`
3. **Application Root**: `/`
4. **Application Startup File**: `server.js` (or `node_modules/next/dist/bin/next`)
5. **Build Command**: `npm run build` (or `npm run hostinger:build`)
6. **Environment Variables** (Add in Hostinger hPanel):
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` = `pk_live_your_clerk_publishable_key`
   - `CLERK_SECRET_KEY` = `sk_live_your_clerk_secret_key`
   - `MONGODB_URI` = `mongodb+srv://<username>:<password>@cluster.mongodb.net/maajanki_db`
   - `NVIDIA_API_KEY` = `nvapi-your_nvidia_api_key`
   - `ADMIN_SECRET_KEY` = `your_admin_secret_key`
   - `NODE_ENV` = `production`

---

#### Manual Command Setup (VPS / SSH)

```bash
# 1. Build production bundle
npm run build

# 2. Start production server
npm run hostinger:start  # or npm run start
```

For Hostinger VPS with PM2 process manager:
```bash
# Start with PM2 using custom server.js
pm2 start server.js --name "maajanki-frontend"
```

---

## 🔒 Security & Best Practices

- **Honeypot Spam Protection**: Silent spam filtering on all public lead capture forms.
- **Route Protection**: Server-side layout guards (`auth()`) enforcing authorization on all `/admin` routes.
- **Strict Headers**: HSTS, X-Frame-Options (`DENY`), X-Content-Type-Options (`nosniff`), and Referrer-Policy configured in `next.config.js`.

---

## 📝 License

Copyright © 2026 **MaaJanki Web Tech**. All rights reserved.
