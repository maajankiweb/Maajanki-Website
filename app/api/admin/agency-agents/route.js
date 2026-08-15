import { NextResponse } from 'next/server';

// Server-side cache for fetched GitHub agency agents
let cachedAgents = null;
let lastFetchTime = 0;
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour TTL cache

// Category map to organize GitHub folder paths into human readable domains
const CATEGORY_MAP = {
  engineering: { name: 'Engineering & Code', icon: '💻', badge: 'Dev' },
  marketing: { name: 'Marketing & SEO', icon: '📢', badge: 'Growth' },
  sales: { name: 'Sales & Outreach', icon: '💼', badge: 'Revenue' },
  security: { name: 'Security & SecOps', icon: '🔒', badge: 'SecOps' },
  design: { name: 'Design & UX', icon: '🎨', badge: 'Design' },
  'paid-media': { name: 'Paid Media & Ads', icon: '💰', badge: 'Ads' },
  product: { name: 'Product Management', icon: '📊', badge: 'Product' },
  'project-management': { name: 'Project Management', icon: '🎬', badge: 'Agile' },
  testing: { name: 'Testing & QA', icon: '🧪', badge: 'QA' },
  finance: { name: 'Finance & Accounting', icon: '💵', badge: 'Finance' },
  'game-development': { name: 'Game Development', icon: '🎮', badge: 'GameDev' },
  gis: { name: 'GIS & Mapping', icon: '🗺️', badge: 'Geo' },
  healthcare: { name: 'Healthcare & Clinical', icon: '🩺', badge: 'Health' },
  'spatial-computing': { name: 'Spatial Computing', icon: '🥽', badge: 'XR' },
  specialized: { name: 'Specialized Agents', icon: '⚡', badge: 'Special' },
  strategy: { name: 'Strategy & Intel', icon: '🎯', badge: 'Strategy' },
  support: { name: 'Support & Operations', icon: '🛟', badge: 'Support' },
};

// Fallback agent dataset in case GitHub API hits rate limit or network is offline
const FALLBACK_AGENTS = [
  {
    id: 'frontend-developer',
    name: 'Frontend Developer',
    category: 'engineering',
    categoryName: 'Engineering & Code',
    categoryBadge: 'Dev',
    icon: '💻',
    role: 'React / Next.js Implementation & Core Web Vitals Specialist',
    description: 'Expert frontend developer specializing in Next.js App Router, Tailwind/Vanilla CSS, responsive design, and Lighthouse performance optimization.',
    capabilities: ['Next.js 15 App Router', 'CSS/Tailwind UI Systems', 'Core Web Vitals Optimization', 'Responsive Mobile-First Layouts'],
    systemPrompt: `You are the Senior Frontend Developer for MaaJanki Web Tech. You specialize in Next.js 15, React 19, CSS design systems, and Web Vitals performance. Your code is clean, modular, accessible, and responsive.`,
    path: 'engineering/frontend-developer.md',
  },
  {
    id: 'seo-specialist',
    name: 'SEO Specialist',
    category: 'marketing',
    categoryName: 'Marketing & SEO',
    categoryBadge: 'Growth',
    icon: '📢',
    role: 'Technical SEO, Keyword Intent & Programmatic Ranking Expert',
    description: 'Specialist in technical SEO audits, schema JSON-LD injection, sitemaps, IndexNow automation, and organic search ranking growth.',
    capabilities: ['Technical SEO Audits', 'Schema.org JSON-LD Generation', 'Keyword Intent Mapping', 'Core Web Vitals & Indexing'],
    systemPrompt: `You are the Lead SEO Specialist at MaaJanki Web Tech. You design technical SEO strategies, sitemap setups, schema markup, and organic ranking campaigns for enterprise and SMB clients.`,
    path: 'marketing/seo-specialist.md',
  },
  {
    id: 'ai-citation-strategist',
    name: 'AI Citation Strategist (AEO/GEO)',
    category: 'marketing',
    categoryName: 'Marketing & SEO',
    categoryBadge: 'Growth',
    icon: '🤖',
    role: 'Generative Engine Optimization & LLM Search Visibility Specialist',
    description: 'Optimizes website content and entity linkages to get cited across ChatGPT, Claude, Perplexity, and Gemini search results.',
    capabilities: ['LLM Context Optimization', 'Entity Linking & Wikidata', 'Structured Data Injection', 'AI Crawler Policy Management'],
    systemPrompt: `You are the AI Citation Strategist at MaaJanki Web Tech. You optimize sites for AI search engines like Perplexity, ChatGPT, and Claude to ensure brand entities earn maximum citations.`,
    path: 'marketing/ai-citation-strategist.md',
  },
  {
    id: 'discovery-coach',
    name: 'Discovery Coach',
    category: 'sales',
    categoryName: 'Sales & Outreach',
    categoryBadge: 'Revenue',
    icon: '💼',
    role: 'B2B Sales Discovery & Client Qualification Specialist',
    description: 'Coaches sales teams on discovery methodologies, current-state mapping, pain point quantification, and deal closing strategies.',
    capabilities: ['Discovery Call Question Scripts', 'Pain Point Quantification', 'B2B Client Qualification', 'Objection Handling Strategies'],
    systemPrompt: `You are the B2B Discovery Coach for MaaJanki Web Tech. You analyze client lead inquiries, identify core business pains, and prepare discovery call questions and proposals.`,
    path: 'sales/discovery-coach.md',
  },
  {
    id: 'security-architect',
    name: 'Security Architect',
    category: 'security',
    categoryName: 'Security & SecOps',
    categoryBadge: 'SecOps',
    icon: '🔒',
    role: 'Zero-Trust Architecture & Web Application Security Specialist',
    description: 'Enforces security headers, authentication guardrails, rate limiting, and zero-trust API protection across web applications.',
    capabilities: ['API Security & Auth Guards', 'OWASP Top 10 Prevention', 'Security Headers & CSP', 'Zero-Trust Credential Hygiene'],
    systemPrompt: `You are the Senior Security Architect at MaaJanki Web Tech. You audit web applications, enforce security headers, protect API endpoints, and remediate vulnerabilities.`,
    path: 'security/security-architect.md',
  },
  {
    id: 'reality-checker',
    name: 'Reality Checker (QA)',
    category: 'testing',
    categoryName: 'Testing & QA',
    categoryBadge: 'QA',
    icon: '🧪',
    role: 'Evidence-Based Production Readiness & Quality Assurance Auditor',
    description: 'Strict QA auditor who validates runtime code correctness, prevents premature approvals, and demands concrete proof before launch.',
    capabilities: ['Production Readiness Audits', 'Edge Case & Error Handling Checks', 'Cross-Browser Verification', 'Regression Testing'],
    systemPrompt: `You are the Reality Checker QA Specialist at MaaJanki Web Tech. You review code and features for bugs, missing edge cases, and performance flaws before production deployment.`,
    path: 'testing/reality-checker.md',
  },
  {
    id: 'growth-hacker',
    name: 'Growth Hacker & CRO',
    category: 'marketing',
    categoryName: 'Marketing & SEO',
    categoryBadge: 'Growth',
    icon: '🚀',
    role: 'Conversion Rate Optimization & Funnel Velocity Specialist',
    description: 'Optimizes lead capture forms, CTA button contrast, exit popups, and landing page conversion funnels to maximize inquiries.',
    capabilities: ['Conversion Rate Optimization', 'Lead Capture Popup Strategy', 'A/B Testing Experiments', 'CTA Copywriting'],
    systemPrompt: `You are the Growth Hacker & CRO Specialist at MaaJanki Web Tech. You analyze user funnels and design high-converting lead capture mechanics.`,
    path: 'marketing/growth-hacker.md',
  },
  {
    id: 'brand-guardian',
    name: 'Brand Guardian',
    category: 'design',
    categoryName: 'Design & UX',
    categoryBadge: 'Design',
    icon: '🎨',
    role: 'Visual Identity, Color Palette & Design System Specialist',
    description: 'Maintains brand visual consistency, luxury dark mode elevation, custom typography hierarchies, and premium glassmorphism styling.',
    capabilities: ['Design System Tokens', 'Color Hierarchy & Contrast', 'Typography & Spacing Standards', 'Visual Aesthetics Governance'],
    systemPrompt: `You are the Brand Guardian at MaaJanki Web Tech. You enforce sleek visual aesthetics, glassmorphism card elevation, and brand color palette consistency.`,
    path: 'design/brand-guardian.md',
  },
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const forceSync = searchParams.get('sync') === 'true';

  const now = Date.now();
  if (!forceSync && cachedAgents && (now - lastFetchTime < CACHE_TTL_MS)) {
    return NextResponse.json({
      success: true,
      source: 'cache',
      syncTime: new Date(lastFetchTime).toISOString(),
      total: cachedAgents.length,
      agents: cachedAgents,
    });
  }

  try {
    // Fetch recursive repository tree from GitHub
    const treeRes = await fetch(
      'https://api.github.com/repos/msitarzewski/agency-agents/git/trees/main?recursive=1',
      {
        headers: {
          'User-Agent': 'MaaJankiWebTech-AdminDashboard',
          Accept: 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 },
      }
    );

    if (!treeRes.ok) {
      throw new Error(`GitHub API returned status ${treeRes.status}`);
    }

    const treeData = await treeRes.json();
    const markdownFiles = (treeData.tree || []).filter(
      (item) => item.type === 'blob' && item.path.endsWith('.md') && !item.path.startsWith('.') && item.path.includes('/')
    );

    // Parse files into agent objects
    const fetchedAgents = markdownFiles.map((file) => {
      const parts = file.path.split('/');
      const catKey = parts[0].toLowerCase();
      const rawName = parts[parts.length - 1].replace(/\.md$/i, '');
      const formattedName = rawName
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');

      const catObj = CATEGORY_MAP[catKey] || {
        name: catKey.toUpperCase(),
        icon: '🤖',
        badge: 'Agent',
      };

      const rawUrl = `https://raw.githubusercontent.com/msitarzewski/agency-agents/main/${file.path}`;

      return {
        id: rawName,
        name: formattedName,
        category: catKey,
        categoryName: catObj.name,
        categoryBadge: catObj.badge,
        icon: catObj.icon,
        role: `${formattedName} (${catObj.name})`,
        description: `Specialized ${formattedName} agent persona from msitarzewski/agency-agents GitHub repository.`,
        capabilities: [
          `Specialized ${catObj.name} Workflows`,
          'Proven Deliverables & Best Practices',
          'Domain Expertise & Persona Prompting',
          'Instant Copy & AI Chat Integration',
        ],
        rawUrl: rawUrl,
        path: file.path,
        sha: file.sha,
      };
    });

    if (fetchedAgents.length > 0) {
      cachedAgents = fetchedAgents;
      lastFetchTime = now;

      return NextResponse.json({
        success: true,
        source: 'github-live',
        syncTime: new Date(now).toISOString(),
        total: fetchedAgents.length,
        agents: fetchedAgents,
      });
    }
  } catch (err) {
    console.warn('GitHub Agency Agents Fetch Warning (Using Fallback Dataset):', err.message);
  }

  // Fallback if GitHub rate limited
  cachedAgents = FALLBACK_AGENTS;
  lastFetchTime = now;

  return NextResponse.json({
    success: true,
    source: 'fallback-built-in',
    syncTime: new Date(now).toISOString(),
    total: FALLBACK_AGENTS.length,
    agents: FALLBACK_AGENTS,
  });
}
