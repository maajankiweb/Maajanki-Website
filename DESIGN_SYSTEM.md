# MaaJanki Web Tech — Admin Design System

## 1. Brand Palette & Color Tokens

### Primary Palette
- **Brand Primary Orange**: `#FD6A02` (Accent `#FF6B00`, Hover `#e55e00`)
- **Brand Deep Navy**: `#042544` (Sidebar `#042544`, Dark Surface `#0f172a` / `#0c1222`)
- **Dark Mode Background**: `#0c1222` / `#111827`
- **Light Mode Background**: `#f8fafc` / `#ffffff`

### Semantic Tokens
- **Success**: `#16a34a` (Light: `#f0fdf4`, Border: `#bbf7d0`)
- **Warning / Pending**: `#d97706` (Light: `#fffbeb`, Border: `#fde68a`)
- **Danger / Spam**: `#dc2626` (Light: `#fef2f2`, Border: `#fecaca`)
- **Info / New**: `#2563eb` (Light: `#eff6ff`, Border: `#bfdbfe`)

---

## 2. Typography Hierarchy

- **Display / Big Numbers**: `Outfit` (`--font-display`), Weights: `700`, `800`
- **Headings & UI**: `Inter` (`--font-ui`), Weights: `500`, `600`, `700`
- **Body & Captions**: `Poppins` (`--font-body`), Weights: `400`, `500`
- **Code & Tech IDs**: `JetBrains Mono` / monospace

---

## 3. UI Component Classes

| CSS Class | Component Purpose |
|---|---|
| `.admin-shell` | Master layout container with CSS Grid sidebar and sticky topbar |
| `.admin-sidebar` | Responsive collapsible sidebar (260px expanded / 72px collapsed) |
| `.admin-topbar` | 64px sticky header with breadcrumb navigation, search, and user controls |
| `.admin-card` | Elevated surface with border, shadow, and header/body/footer divisions |
| `.kpi-card` | Metric summary card with icon, large numeric stat, and trend badge |
| `.admin-table-wrap` | Responsive table container with hover rows, sort headers, and action menus |
| `.admin-btn` | Button variants: `.admin-btn-primary`, `.admin-btn-outline`, `.admin-btn-ghost` |
| `.admin-badge` | Status badges: `.admin-badge-new`, `.admin-badge-qualified`, `.admin-badge-closed` |
| `.admin-modal` | Accessible dialog with overlay backdrop blur, header, body, and footer |
| `.admin-input` | Consistent inputs, select boxes, and textareas with focus ring tokens |
| `.admin-empty-state` | Meaningful zero-data illustration container with action CTA |
| `.admin-skeleton` | Shimmer animated placeholder loader for asynchronous data requests |
