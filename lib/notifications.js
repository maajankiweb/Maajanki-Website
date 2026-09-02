import fs from 'fs';
import path from 'path';

/**
 * Dispatch WhatsApp notification to Admin upon form submission
 * Recipient: Ashish Kumar (+91 9006543913 / info@maajankiwebtech.com / maajankiweb@gmail.com)
 */
export async function sendWhatsAppNotification(leadData) {
  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'medium'
  });

  const messageText = `🚀 *NEW INQUIRY CAPTURED — MAAJANKI WEB TECH*
━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 *Client Name:* ${leadData.name || 'N/A'}
📧 *Email:* ${leadData.email || 'N/A'}
📞 *Phone:* ${leadData.phone || 'N/A'}
🎯 *Service Requested:* ${leadData.service || 'General Inquiry'}
🌐 *Source Form:* ${leadData.source || 'Website'}
🔗 *Page URL:* ${leadData.url || 'https://maajankiwebtech.com'}
💬 *Client Message:* ${leadData.message ? `"${leadData.message}"` : 'No custom message provided'}
⏰ *Timestamp:* ${timestamp}
━━━━━━━━━━━━━━━━━━━━━━━━━━━
👉 *Admin Base:* https://maajankiwebtech.com/admin/all-leads`;

  const adminPhone = process.env.WHATSAPP_RECIPIENT_NUMBER || process.env.ADMIN_WHATSAPP_NUMBER || '919006543913';
  const whatsappApiUrl = process.env.WHATSAPP_API_URL || null;
  const whatsappToken = process.env.WHATSAPP_ACCESS_TOKEN || process.env.WHATSAPP_API_KEY || null;

  let deliveryStatus = 'logged_to_audit_stream';
  let apiResponse = null;

  // 1. Attempt WhatsApp Cloud API / Webhook if configured
  if (whatsappApiUrl && whatsappToken) {
    try {
      const res = await fetch(whatsappApiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${whatsappToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: adminPhone,
          type: 'text',
          text: { body: messageText }
        })
      });

      if (res.ok) {
        deliveryStatus = 'delivered_via_api';
        apiResponse = await res.json().catch(() => ({}));
      } else {
        deliveryStatus = `api_error_status_${res.status}`;
      }
    } catch (err) {
      deliveryStatus = `network_fallback: ${err.message}`;
    }
  }

  // 2. Reliable Fallback Logger
  const logEntry = {
    event: 'WHATSAPP_LEAD_NOTIFICATION',
    status: deliveryStatus,
    recipient: adminPhone,
    adminEmail: 'maajankiweb@gmail.com',
    lead: {
      name: leadData.name,
      email: leadData.email,
      phone: leadData.phone,
      service: leadData.service,
      source: leadData.source
    },
    message: messageText,
    timestamp: new Date().toISOString()
  };

  try {
    const logsDir = path.join(process.cwd(), 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    const logFilePath = path.join(logsDir, 'whatsapp-notifications.log');
    fs.appendFileSync(logFilePath, JSON.stringify(logEntry) + '\n');
  } catch (fsErr) {
    console.warn('Notification log file write notice:', fsErr.message);
  }

  console.log(`\x1b[32m[WhatsApp Notification Dispatcher]\x1b[0m ${deliveryStatus} for lead "${leadData.name}" (${leadData.email})`);

  return { success: true, status: deliveryStatus };
}
