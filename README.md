# MaaJanki Web Tech Enterprise Admin Dashboard

![MaaJanki Admin Dashboard](https://raw.githubusercontent.com/maajankiweb/Maajanki-Website/main/public/admin-preview.png)

A production-ready, enterprise-grade Admin Dashboard built for **MaaJanki Web Tech** featuring modern SaaS UI aesthetics (inspired by Linear, Vercel, and Stripe), real-time MongoDB lead analytics, interactive Leaflet map tracking, customizable Recharts analytics, and Clerk authentication guards.

---

## 🚀 Key Features

- **Enterprise SaaS Aesthetics**: Clean glassmorphism cards, `#FF6B00` brand color, dark/light theme switching, and smooth micro-animations.
- **Collapsible Responsive Sidebar**: Collapsible navigation with active page highlights, badges, nested menus for Lead Management & Website Forms, and mobile drawer.
- **Sticky Header**: Live global search, quick actions dropdown (Create Lead, Add User, Export Report), notification bell with unread badge counter, language switcher (`EN` / `HI`), and Clerk UserButton profile menu.
- **Dashboard Overview**: KPI cards for Total Leads, Today's Leads, Monthly Revenue, Conversion Rate, Active Visitors, and Open Tickets with interactive sparklines and percentage trends.
- **Recharts Analytics Suite**: Revenue growth area charts, lead source donut charts, weekly traffic stacked bar charts, and visitor-to-deal conversion funnel.
- **Global Map Analytics**: Interactive Leaflet map displaying offices, client hubs, and geographic lead distribution with custom popups and region summaries.
- **Advanced Lead Management**: MongoDB Atlas API integration (`/api/admin/leads`), multi-field search, status filtering (`new`, `contacted`, `qualified`, `closed`, `spam`), inline status updating, priority tags, lead deletion, CSV export, and pagination.
- **Website Forms Analytics**: Form performance breakdown for 8 capture forms (Contact Form, Audit Form, AI Chatbot, Footer Popup, Promo Popup, Brochure Download, Callback Request, Newsletter).
- **AI Insights & Recommendations**: Smart lead predictions, best contact time window analysis, and automated spam isolation.
- **Real-time Activity Timeline**: Live operational event stream for leads, payments, and system updates.
- **Tasks & Kanban Board**: Drag-and-drop workflow board across To Do, In Progress, Under Review, and Completed stages.
- **Security & Settings**: Role permissions, Clerk 2FA security rules, API webhooks, and a confirmation logout modal.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Library**: [React 18](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Glassmorphism design system
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
│   ├── admin/
│   │   ├── admin.css          # Custom Design System Tokens & Glassmorphism Styles
│   │   ├── layout.js          # Clerk Auth & Admin Email Restriction Guard
│   │   └── page.js            # Main Dashboard Container & State Controller
│   ├── api/
│   │   └── admin/leads/       # REST API Endpoint for MongoDB Lead Operations
├── components/
│   ├── admin/
│   │   ├── AdminHeader.jsx          # Top Navigation Bar & Quick Actions
│   │   ├── AdminSidebar.jsx         # Collapsible Navigation Drawer
│   │   ├── DashboardOverview.jsx    # Top KPI Cards & Sparklines
│   │   ├── AnalyticsCharts.jsx      # Recharts Revenue, Traffic, & Funnel Suite
│   │   ├── LeadMap.jsx              # React Leaflet World Map Component
│   │   ├── LeadsTable.jsx           # TanStack Data Table & CSV Exporter
│   │   ├── WebsiteFormsAnalytics.jsx# Form Metric Performance Breakdown
│   │   ├── AIInsights.jsx           # Lead Intelligence & Predictions
│   │   ├── ActivityFeed.jsx         # Real-time Activity Timeline
│   │   ├── NotificationCenter.jsx   # Notification Dropdown
│   │   ├── TasksKanban.jsx          # Workflow Task Kanban Board
│   │   ├── AdminSettings.jsx        # Security & API Webhook Settings
│   │   └── LogoutModal.jsx          # Confirmation Logout Dialog
├── lib/
│   ├── db.js                  # MongoDB Atlas Mongoose Connection Helper
│   └── models/Lead.js         # Mongoose Lead Schema
├── public/                    # Static Assets
├── .env.example               # Template Environment Variables
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
