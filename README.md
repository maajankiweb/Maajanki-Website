# MaaJanki Web Tech Enterprise Admin Dashboard

![MaaJanki Web Tech](https://raw.githubusercontent.com/maajankiweb/Maajanki-Website/main/public/images/MaaJanki-Web-Tech-Logo.webp)

A production-ready, enterprise-grade Multi-Page Admin Dashboard & Web Platform built for **MaaJanki Web Tech** featuring modern SaaS UI aesthetics (inspired by Linear, Vercel, and Stripe), real-time MongoDB lead analytics, interactive Leaflet map tracking, customizable Recharts analytics, Clerk authentication guards, and lightning-fast Core Web Vitals performance.

---

## 🚀 Key Features

- **Enterprise SaaS Aesthetics**: Clean glassmorphism cards, `#FD6A02` brand theme, dark/light mode switching, and smooth micro-animations.
- **Multi-Page App Router Architecture**: Dedicated Next.js URL routes for all dashboard sections (`/admin`, `/admin/all-leads`, `/admin/forms/contact`, `/admin/customers-crm`, `/admin/ai-insights`, etc.) with root URL aliases.
- **Collapsible Responsive Sidebar**: Link-based navigation with active page highlights, badges, auto-expanding nested menus, and mobile drawer.
- **Sticky Header**: Live global search, quick actions dropdown (Create Lead, Add User, Export Report), notification bell with unread badge counter, language switcher (`EN` / `HI`), and Clerk UserButton profile menu.
- **Dashboard Overview**: KPI cards for Total Leads, Today's Leads, Monthly Revenue, Conversion Rate, Active Visitors, and Open Tickets with interactive sparklines and percentage trends.
- **Recharts Analytics Suite**: Revenue growth area charts, lead source donut charts, weekly traffic stacked bar charts, and visitor-to-deal conversion funnel.
- **Global Map Analytics**: Interactive Leaflet map displaying offices, client hubs, and geographic lead distribution with custom popups and region summaries.
- **Advanced Lead Management**: MongoDB Atlas API integration (`/api/admin/leads`), multi-field search, status filtering (`new`, `contacted`, `qualified`, `closed`, `spam`), inline status updating, priority tags, lead deletion, CSV export, and pagination.
- **Website Forms Analytics**: Form performance breakdown for 8 capture forms (Contact Form, Audit Form, AI Chatbot, Footer Popup, Promo Popup, Brochure Download, Callback Request, Newsletter).
- **Customers & CRM Module**: Client directory, active account contracts, deal values, contact details, and account retention analytics.
- **Calendar & Follow-ups**: Interactive call scheduling, agenda view, lead reminders, and touchpoint logs.
- **Reports & Exports**: Report builder with custom date filtering, compliance logging, and PDF/CSV export capabilities.
- **Team Performance & Velocity**: Agent leaderboard, response speed metrics, conversion rates, and SLA benchmarks.
- **AI Insights & Recommendations**: Smart lead predictions, best contact time window analysis, and automated spam isolation.
- **Tasks & Kanban Board**: Drag-and-drop workflow board across To Do, In Progress, Under Review, and Completed stages.
- **Security & Settings**: Role permissions, Clerk 2FA security rules, API webhooks, and a confirmation logout modal.
- **Browser Speed Optimization**: AVIF/WebP image formats, 1-year asset caching headers, `optimizePackageImports` tree-shaking, and lazy-loaded analytics scripts.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Library**: [React 18](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & Glassmorphism design system
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **Data Table**: [TanStack Table](https://tanstack.com/table)
- **Maps**: [React Leaflet](https://react-leaflet.js.org/) & Leaflet
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Authentication**: [Clerk Auth](https://clerk.com/)
- **Database**: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) with Mongoose

---

## 📁 Repository Structure

```
├── app/
│   ├── layout.js                     # Root HTML Layout, Preconnect Hints & Lazy Scripts
│   ├── globals.css                   # Global CSS, Design Tokens, & Content-Visibility
│   ├── admin/
│   │   ├── admin.css                 # Custom Glassmorphism Styles & Design Tokens
│   │   ├── layout.js                 # Clerk Auth & Admin Email Restriction Guard
│   │   ├── page.js                   # Dashboard Overview Route (/admin)
│   │   ├── all-leads/                # Route: /admin/all-leads
│   │   ├── new-leads/                # Route: /admin/new-leads
│   │   ├── contacted-leads/          # Route: /admin/contacted-leads
│   │   ├── qualified-leads/          # Route: /admin/qualified-leads
│   │   ├── closed-leads/             # Route: /admin/closed-leads
│   │   ├── spam-leads/               # Route: /admin/spam-leads
│   │   ├── forms/[type]/             # Route: /admin/forms/* (8 website capture forms)
│   │   ├── ai-insights/              # Route: /admin/ai-insights
│   │   ├── global-map-analytics/     # Route: /admin/global-map-analytics
│   │   ├── customers-crm/            # Route: /admin/customers-crm
│   │   ├── tasks-kanban/             # Route: /admin/tasks-kanban
│   │   ├── calendar-followups/       # Route: /admin/calendar-followups
│   │   ├── reports-exports/          # Route: /admin/reports-exports
│   │   ├── team-performance/         # Route: /admin/team-performance
│   │   └── settings-security/        # Route: /admin/settings-security
│   ├── api/
│   │   └── admin/leads/              # REST API Endpoint for MongoDB Lead Operations
├── components/
│   ├── admin/
│   │   ├── AdminShell.jsx            # Shared Client Layout & Admin Context Provider
│   │   ├── AdminHeader.jsx           # Top Navigation Bar & Quick Actions
│   │   ├── AdminSidebar.jsx          # Collapsible Link Navigation Drawer
│   │   ├── DashboardOverview.jsx     # Top KPI Cards & Sparklines
│   │   ├── AnalyticsCharts.jsx       # Recharts Revenue, Traffic, & Funnel Suite
│   │   ├── LeadMap.jsx               # React Leaflet World Map Component
│   │   ├── LeadsTable.jsx            # TanStack Data Table & CSV Exporter
│   │   ├── WebsiteFormsAnalytics.jsx # Form Metric Performance Breakdown
│   │   ├── CustomersCRM.jsx          # Enterprise Client Directory & CRM
│   │   ├── CalendarFollowups.jsx     # Call Schedule & Follow-up Agenda
│   │   ├── ReportsExports.jsx        # Report Builder & Exporter
│   │   ├── TeamPerformance.jsx       # Agent Leaderboard & Response Velocity
│   │   ├── AIInsights.jsx            # Lead Intelligence & Predictions
│   │   ├── ActivityFeed.jsx          # Real-time Activity Timeline
│   │   ├── NotificationCenter.jsx    # Notification Dropdown
│   │   ├── TasksKanban.jsx           # Workflow Task Kanban Board
│   │   ├── AdminSettings.jsx         # Security & API Webhook Settings
│   │   └── LogoutModal.jsx           # Confirmation Logout Dialog
├── lib/
│   ├── db.js                         # MongoDB Atlas Mongoose Connection Helper
│   └── models/Lead.js                # Mongoose Lead Schema
├── public/                           # Static Assets & Icons
├── next.config.js                    # Speed Caching, Tree-Shaking, & URL Redirects
├── .env.example                      # Template Environment Variables
├── package.json
└── README.md
```

---

## ⚙️ Installation & Running Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/maajankiweb/Maajanki-Website.git
   cd Maajanki-Website
   ```

2. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Configure Environment Variables**:
   Create a `.env.local` file by copying `.env.example`:
   ```bash
   cp .env.example .env.local
   ```
   Fill in your Clerk API Keys and MongoDB Atlas connection URI.

4. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000/admin` in your browser.

5. **Build for Production**:
   ```bash
   npm run build
   npm start
   ```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**MaaJanki Web Tech** - [Official Website](https://maajankiwebtech.com)
