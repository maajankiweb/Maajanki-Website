# MaaJanki Web Tech — Admin Routes Registry

| Route Path | View / Component | Purpose |
|---|---|---|
| `/admin` | `DashboardOverview.jsx` | Executive control center, 8 KPI cards, lead funnel, revenue metrics, recent leads |
| `/admin/all-leads` | `LeadsTable.jsx` | Complete CRM inquiry directory with search, filter, pagination, status changes, export |
| `/admin/new-leads` | `LeadsTable.jsx` | Filtered queue for newly received leads pending response |
| `/admin/contacted-leads` | `LeadsTable.jsx` | Inquiries currently in communication / discovery stages |
| `/admin/qualified-leads` | `LeadsTable.jsx` | High commercial intent proposals and active prospects |
| `/admin/closed-leads` | `LeadsTable.jsx` | Converted clients and won contracts |
| `/admin/spam-leads` | `LeadsTable.jsx` | Honeypot caught and filtered junk submissions |
| `/admin/forms/contact` | `WebsiteFormsAnalytics.jsx` | Contact page inquiry submissions & metrics |
| `/admin/forms/audit` | `WebsiteFormsAnalytics.jsx` | Free website audit request analysis |
| `/admin/forms/footer` | `WebsiteFormsAnalytics.jsx` | Global footer popup capture metrics |
| `/admin/forms/promo` | `WebsiteFormsAnalytics.jsx` | Exit intent & timer promo popup conversion stats |
| `/admin/forms/chatbot` | `WebsiteFormsAnalytics.jsx` | Interactive AI Chatbot automated lead records |
| `/admin/forms/brochure` | `WebsiteFormsAnalytics.jsx` | Service PDF brochure download leads |
| `/admin/forms/newsletter` | `WebsiteFormsAnalytics.jsx` | Email newsletter subscribers list |
| `/admin/forms/callback` | `WebsiteFormsAnalytics.jsx` | Urgent phone callback requests |
| `/admin/agency-agents` | `AgencyAgentsPage` | 17-category agency AI agent hub, prompt library & live chat |
| `/admin/ai-insights` | `AIInsights.jsx` | Google Search Console API metrics, IndexNow push & keyword rankings |
| `/admin/global-map-analytics` | `LeadMap.jsx` | Leaflet geographic client & traffic visualization |
| `/admin/customers-crm` | `CustomersCRM.jsx` | Account management directory, deal value history, customer profiles |
| `/admin/portfolio` | `PortfolioManager.jsx` | Case study CMS editor, dual-image upload & publishing |
| `/admin/tasks-kanban` | `TasksKanban.jsx` | 4-column sprint project management board |
| `/admin/calendar-followups` | `CalendarFollowups.jsx` | Consultation agenda, meeting scheduler & reminders |
| `/admin/reports-exports` | `ReportsExports.jsx` | CSV, JSON & compliance reporting center |
| `/admin/team-performance` | `TeamPerformance.jsx` | Desk efficiency, response time SLA & conversion analytics |
| `/admin/settings-security` | `AdminSettings.jsx` | 2FA rules, Clerk authentication guards, API webhook credentials |
