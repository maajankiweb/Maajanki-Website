# MaaJanki Web Tech — Admin Dashboard Architecture

## 1. System Overview
The **MaaJanki Web Tech Admin Dashboard** is a custom, enterprise-grade SaaS and CRM management suite built for managing digital marketing leads, AI agents, website capture forms, analytics, portfolio projects, client deals, and operations workflows.

- **URL Base**: `https://maajankiwebtech.com/admin`
- **Framework**: Next.js 15 App Router (React 18/19)
- **Authentication**: Clerk Enterprise Auth (`@clerk/nextjs`) with 3-tier authorization guards
- **Database**: MongoDB Atlas via Mongoose with cached connection pools (`lib/db.js`)
- **Iconography**: Lucide React SVG icon system
- **Styling Architecture**: Custom CSS Design Tokens (`app/admin/design-tokens.css`) supporting seamless Zero-Runtime Dark/Light Mode switching

---

## 2. Component Hierarchy & Layout Tree

```
app/admin/layout.js (Server Component - Clerk Auth & Email Allowlist Guard)
 └─ components/admin/AdminShell.jsx (Client Master Context Provider & CSS Grid Shell)
     ├─ components/admin/AdminSidebar.jsx (Collapsible Navigation & Drawer)
     ├─ components/admin/AdminHeader.jsx (Sticky Topbar, Breadcrumbs, Search, Theme Toggle)
     └─ <Page Component>
         ├─ /admin                           -> DashboardOverview.jsx
         ├─ /admin/all-leads                 -> LeadsTable.jsx (All leads)
         ├─ /admin/new-leads                 -> LeadsTable.jsx (status: New)
         ├─ /admin/contacted-leads           -> LeadsTable.jsx (status: Contacted)
         ├─ /admin/qualified-leads           -> LeadsTable.jsx (status: Qualified)
         ├─ /admin/closed-leads              -> LeadsTable.jsx (status: Closed)
         ├─ /admin/spam-leads                -> LeadsTable.jsx (status: Spam)
         ├─ /admin/forms/[type]              -> WebsiteFormsAnalytics.jsx
         ├─ /admin/agency-agents             -> AgencyAgentsPage (Standalone AI Studio)
         ├─ /admin/ai-insights               -> AIInsights.jsx (GSC & GA4 Engine)
         ├─ /admin/global-map-analytics      -> LeadMap.jsx (Leaflet Geographic Map)
         ├─ /admin/customers-crm             -> CustomersCRM.jsx (Client Directory)
         ├─ /admin/portfolio                 -> PortfolioManager.jsx (CMS Project Manager)
         ├─ /admin/tasks-kanban              -> TasksKanban.jsx (Project Sprints)
         ├─ /admin/calendar-followups        -> CalendarFollowups.jsx (Touchpoint Scheduler)
         ├─ /admin/reports-exports           -> ReportsExports.jsx (CSV/JSON Exporter)
         ├─ /admin/team-performance          -> TeamPerformance.jsx (Operations SLA Metrics)
         └─ /admin/settings-security         -> AdminSettings.jsx (2FA, API & Audit Logs)
```

---

## 3. Database Schema & Data Models

### `Lead` Model (`lib/models/Lead.js`)
- `name`: Lead contact person name (String)
- `email`: Lead email address (String, indexed)
- `phone`: Contact phone number (String)
- `service`: Requested agency service (String)
- `message`: Specific project requirements or audit URL (String)
- `source`: Capture form source (`contact-page`, `website-audit`, `footer-popup`, `homepage-promo-popup`, `chatbot`, `brochure`, `other`)
- `status`: Lifecycle stage (`New`, `Contacted`, `Qualified`, `Closed`, `Spam`)
- `timestamps`: `createdAt`, `updatedAt`

### `Portfolio` Model (`lib/models/Portfolio.js`)
- `title`: Project title (String)
- `category`: Service domain (`Web Development`, `SEO`, `SaaS`, etc.)
- `description`: Client case study summary (String)
- `fullImage`: High-resolution full screenshot for homepage showcase (String)
- `heroImage`: Section thumbnail for `/portfolio` catalog (String)
- `link`: Live client website URL (String)
- `featured`: Homepage promotion flag (Boolean)
- `order`: Display priority sequence (Number)

---

## 4. Third-Party Integrations & Security Boundary
All third-party services are decoupled from the MongoDB persistence layer and configured via environment variables and direct HTTP APIs:

1. **Clerk Authentication**: Zero credentials in DB; tokens validated via `@clerk/nextjs/server`.
2. **Google Search Console**: Authenticated via Service Account JWT (`GSC_CLIENT_EMAIL`, `GSC_PRIVATE_KEY`).
3. **Google Analytics 4**: Streamed client-side via GTM `G-CGPN1G03DW`.
4. **Microsoft Clarity**: Session replays enabled via async script `u4zs398tm0`.
5. **IndexNow**: Instant notification to Bing/Yandex search engines (`INDEXNOW_KEY`).
6. **Google Sheets Webhook**: Real-time sync for inbound lead capture notifications.
7. **NVIDIA Chat API / Gemini**: AI proxy for assistant interactions and lead scoring.
