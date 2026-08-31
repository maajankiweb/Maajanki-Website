# MaaJanki Web Tech — Admin QA & Production Checklist

## 1. Security & Authentication Checks
- [x] Clerk Server-Side Auth guard active on `/admin/*` via `app/admin/layout.js`
- [x] Admin email allowlist validation (`ALLOWED_ADMIN_EMAILS`) rejects unauthorized Google/Clerk accounts
- [x] Sensitive API keys (MongoDB, GSC Private Key, Clerk Secret, NVIDIA API) stored exclusively in server-side environment variables
- [x] Admin routes marked `noindex, nofollow, noarchive, nosnippet` in metadata

## 2. Layout & Responsive UI
- [x] Desktop layout (1440px): 260px fixed sidebar, sticky topbar, fluid main content
- [x] Collapsible sidebar toggle (260px -> 72px icon-only with tooltips)
- [x] Mobile drawer navigation (<768px) with backdrop overlay and touch handling
- [x] Dark / Light theme toggle with `localStorage` persistence and zero-flicker CSS variable tokens
- [x] Unified Lucide React icon system across all navigation and action controls

## 3. Operations & CRM Functionality
- [x] Database Backup & Cleanup script (`scripts/db-backup-cleanup.js`) executed with zero third-party disconnection
- [x] Lead Management (`/admin/all-leads`, `/admin/new-leads`, etc.) with filtering, search, pagination, and status updates
- [x] Website Forms analytics covering all 8 capture endpoints (`/admin/forms/*`)
- [x] AI Insights & Google Search Console integration with live ranking keywords and IndexNow trigger
- [x] Customers CRM directory with deal values, tier filters, and client profile modal
- [x] Portfolio CMS Manager with dual-image configuration and live CRUD API
- [x] Project Tasks Kanban board with column stage transitions
- [x] Calendar & touchpoint follow-up scheduler
- [x] Data export center (CSV & raw JSON dumps)
- [x] Team performance leaderboard with response time SLA metrics
