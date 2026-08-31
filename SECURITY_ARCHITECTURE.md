# MaaJanki Web Tech — Enterprise Admin Security Architecture

## 1. Multi-Layered Defense-in-Depth Model

The MaaJanki Web Tech Admin Dashboard implements a 5-tier zero-trust security perimeter:

```
[ Incoming Request ]
        │
        ▼
[ Tier 1: Edge & Middleware Guard ]
  ├─ Clerk Session Authentication Check
  ├─ Dedicated Robots Header (X-Robots-Tag: noindex, nofollow, noarchive, nosnippet)
  ├─ Strict Transport Security (HSTS - max-age=63072000; includeSubDomains; preload)
  ├─ Frame Protection (X-Frame-Options: DENY)
  ├─ MIME Sniffing Defense (X-Content-Type-Options: nosniff)
  ├─ Cross-Origin Policy (Referrer-Policy: strict-origin-when-cross-origin)
  └─ Device Hardware Locks (Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=())
        │
        ▼
[ Tier 2: Centralized API Security Engine (lib/admin-auth.js) ]
  ├─ Sliding Window Rate Limiting (60 RPM per IP / 5 RPM for bulk indexing)
  ├─ Strict CSRF / Origin Verification (Blocks cross-site state mutations)
  ├─ Clerk Session & User Identity Validation
  └─ Server-Side Email Allowlist (`ALLOWED_ADMIN_EMAILS`)
        │
        ▼
[ Tier 3: Payload Sanitization & Injection Defense ]
  ├─ Deep Recursive Object Sanitizer (Strips MongoDB `$` and operator injections)
  ├─ Input XSS Stripping (HTML & Script Tag neutralizer)
  └─ Strict Mongoose Schema Type Constraints & Validations
        │
        ▼
[ Tier 4: Client-Side Session Armor (components/admin/) ]
  ├─ Inactivity Auto-Lock Timer (15 Minutes with Blur Backdrop & Screen Encryption)
  ├─ Manual One-Click Session Lock in Topbar
  └─ Zero PII Exposure to unauthenticated browsers
        │
        ▼
[ Tier 5: Security Audit Log & Telemetry ]
  ├─ Live Event Queue (`recordSecurityEvent`) logging IP, actor, action, and timestamp
  └─ Dedicated Security Telemetry API (`/api/admin/security`)
```

---

## 2. API Endpoints Security Matrix

| API Route | Methods | Authentication | CSRF Guard | Rate Limit | Sanitizer | Audit Logged |
|---|---|---|---|---|---|---|
| `/api/admin/leads` | GET, PATCH, DELETE | Clerk + Email Allowlist | ✅ Strict | 60 RPM | ✅ Recursive | ✅ Yes |
| `/api/admin/portfolio` | GET, POST | Clerk + Email Allowlist | ✅ Strict | 60 RPM | ✅ Recursive | ✅ Yes |
| `/api/admin/portfolio/[id]` | PATCH, DELETE | Clerk + Email Allowlist | ✅ Strict | 60 RPM | ✅ Recursive | ✅ Yes |
| `/api/admin/gsc-analytics` | GET | Clerk + Email Allowlist | N/A (Read) | 60 RPM | ✅ Input | ✅ Yes |
| `/api/admin/indexnow` | POST | Clerk + Email Allowlist | ✅ Strict | 5 RPM | ✅ Input | ✅ Yes |
| `/api/admin/agency-agents/chat`| POST | Clerk + Email Allowlist | ✅ Strict | 20 RPM | ✅ Input | ✅ Yes |
| `/api/admin/reactivate-leads`| GET | Clerk + Email Allowlist | N/A (Read) | 60 RPM | ✅ Input | ✅ Yes |
| `/api/admin/security` | GET | Clerk + Email Allowlist | N/A (Read) | 60 RPM | ✅ Output | ✅ Yes |

---

## 3. Threat Mitigation Summary

1. **SQL / NoSQL Injection**:
   - Every input payload passes through `sanitizePayload()` and `sanitizeString()`, stripping `$` operators, brackets, and injection vectors before reaching Mongoose queries.
2. **Cross-Site Request Forgery (CSRF)**:
   - All state-altering methods (`POST`, `PATCH`, `DELETE`, `PUT`) verify the `Origin` and `Referer` headers against `maajankiwebtech.com` and `localhost`.
3. **Cross-Site Scripting (XSS)**:
   - Strict script tag stripping on inputs; React JSX automatic HTML entity encoding prevents arbitrary execution in the browser DOM.
4. **Clickjacking & UI Redressing**:
   - `X-Frame-Options: DENY` header blocks embedding the admin panel in unauthorized `<iframe>` or external windows.
5. **Credential & Secret Key Hygiene**:
   - Secrets (`MONGODB_URI`, `CLERK_SECRET_KEY`, `GSC_PRIVATE_KEY`, `NVIDIA_API_KEY`, `ADMIN_SECRET_KEY`) reside exclusively in server-side environment variables and are never exported to client JavaScript bundles.
6. **Search Engine Crawler Isolation**:
   - Dedicated `X-Robots-Tag: noindex, nofollow, noarchive, nosnippet, noimageindex` header prevents admin URLs from being cached or indexed in public search results.
7. **Physical & Screen Snoop Defense**:
   - Auto-lock timer triggers after 15 minutes of idle time, requiring PIN verification to decrypt and display dashboard contents.
