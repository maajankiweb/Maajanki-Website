import { NextResponse } from 'next/server';
import { validateAdminRequest } from '@/lib/admin-auth';
import { logAuditEvent } from '@/lib/audit-logger';
import fs from 'fs';
import path from 'path';

const FLAGS_FILE = path.join(process.cwd(), 'logs', 'feature-flags.json');

const DEFAULT_FLAGS = [
  {
    key: 'ai_chatbot_assistant',
    name: 'AI Chatbot Assistant (Public)',
    description: 'Enables interactive AI consultation chatbot across public marketing pages.',
    enabled: true,
    rolloutPercentage: 100,
    category: 'AI_SERVICES'
  },
  {
    key: 'whatsapp_lead_dispatcher',
    name: 'WhatsApp Instant Lead Dispatcher',
    description: 'Dispatches instant WhatsApp notifications to +91 9006543913 on form submit.',
    enabled: true,
    rolloutPercentage: 100,
    category: 'NOTIFICATIONS'
  },
  {
    key: 'promo_popup_active',
    name: 'Exit-Intent Promo Popup Modal',
    description: 'Shows conversion discount popup when visitor moves cursor towards exit.',
    enabled: true,
    rolloutPercentage: 100,
    category: 'GROWTH'
  },
  {
    key: 'auto_backlink_syndication',
    name: 'Automated RSS & Backlink Syndicate',
    description: 'Generates automated RSS feeds and pings search engine crawlers post-build.',
    enabled: true,
    rolloutPercentage: 100,
    category: 'SEO'
  },
  {
    key: 'maintenance_mode',
    name: 'Platform Maintenance Mode',
    description: 'Temporarily displays maintenance banner and restricts public form captures.',
    enabled: false,
    rolloutPercentage: 0,
    category: 'SYSTEM'
  },
  {
    key: 'zero_trust_pii_masking',
    name: 'Zero-Trust PII Privacy Masking',
    description: 'Masks client contact details in admin tables until explicit click-to-unmask.',
    enabled: true,
    rolloutPercentage: 100,
    category: 'SECURITY'
  }
];

function getStoredFlags() {
  try {
    if (fs.existsSync(FLAGS_FILE)) {
      const content = fs.readFileSync(FLAGS_FILE, 'utf-8');
      return JSON.parse(content);
    }
  } catch (err) {
    console.warn('Feature flags read notice:', err.message);
  }
  return DEFAULT_FLAGS;
}

function saveStoredFlags(flags) {
  try {
    const dir = path.dirname(FLAGS_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(FLAGS_FILE, JSON.stringify(flags, null, 2));
  } catch (err) {
    console.error('Failed to save feature flags:', err);
  }
}

export async function GET(request) {
  const authValidation = await validateAdminRequest(request);
  if (!authValidation.valid) {
    return authValidation.response;
  }

  const flags = getStoredFlags();
  return NextResponse.json({ success: true, flags });
}

export async function POST(request) {
  const authValidation = await validateAdminRequest(request);
  if (!authValidation.valid) {
    return authValidation.response;
  }

  try {
    const body = await request.json();
    const { key, enabled, rolloutPercentage } = body;

    let flags = getStoredFlags();
    flags = flags.map(f => {
      if (f.key === key) {
        return {
          ...f,
          enabled: enabled !== undefined ? enabled : f.enabled,
          rolloutPercentage: rolloutPercentage !== undefined ? rolloutPercentage : f.rolloutPercentage
        };
      }
      return f;
    });

    saveStoredFlags(flags);

    // Audit log this configuration change
    await logAuditEvent({
      action: 'FEATURE_FLAG_UPDATE',
      category: 'CONFIGURATION',
      resource: 'FEATURE_FLAGS',
      targetId: key,
      changes: { enabled, rolloutPercentage }
    });

    return NextResponse.json({ success: true, flags });
  } catch (error) {
    console.error('Feature Flag Update Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
