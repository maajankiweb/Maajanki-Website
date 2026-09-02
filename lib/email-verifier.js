import dns from 'dns';
import { promisify } from 'util';

const resolveMx = promisify(dns.resolveMx);

/**
 * 120+ Popular Disposable & Temporary Email Domains Blacklist (100% Free / In-Memory)
 */
const DISPOSABLE_DOMAINS = new Set([
  // Top temp/disposable providers
  'tempmail.com', '10minutemail.com', 'guerrillamail.com', 'mailinator.com',
  'trashmail.com', 'yopmail.com', 'getairmail.com', 'sharklasers.com',
  'dispostable.com', 'mytemp.email', 'temp-mail.org', 'crazymailing.com',
  'throwawaymail.com', 'dropmail.me', 'fakeinbox.com', 'generator.email',
  'mohmal.com', 'nada.ltd', 'inboxkitten.com', 'tempail.com', 'burnermail.io',
  'temp-mail.io', 'emailondeck.com', 'fakemailgenerator.com', 'tempr.email',
  'discard.email', 'trashmail.net', 'spambog.com', 'mailcatch.com', 'maildrop.cc',
  'harakirimail.com', 'trashmail.me', 'jetable.org', 'meltmail.com', 'trbvm.com',
  'guerrillamailblock.com', 'guerrillamail.net', 'guerrillamail.biz', 'guerrillamail.org',
  'grr.la', 'pokemail.net', 'spam4.me', 'bccto.me', 'chacuo.net', '0815.ru',
  '10minutemail.net', '10minutemail.co.uk', '20minutemail.it', '20minutemail.com',
  'anonbox.net', 'anonymbox.com', 'antichef.com', 'antichef.net', 'binkmail.com',
  'bobmail.info', 'boximail.com', 'brefmail.com', 'bsnow.net', 'bugmenot.com',
  'bupkis.org', 'cachedot.net', 'casualdx.com', 'centermail.com', 'centermail.net',
  'chacuo.com', 'courrieltemporaire.com', 'cust.in', 'daum.net', 'dayrep.com',
  'deadaddress.com', 'deadfake.cf', 'deadfake.ga', 'deadfake.gq', 'deadfake.ml',
  'deadfake.tk', 'despam.it', 'devnullmail.com', 'disposable.com', 'disposableinbox.com',
  'disposablemail.com', 'dodgeit.com', 'dodgit.com', 'drdrb.net', 'dumpmail.de',
  'e-mail.am', 'e4ward.com', 'easytrashmail.com', 'einrot.com', 'email60.com',
  'emailias.com', 'emailmiser.com', 'emailproxsy.com', 'emailsensei.com',
  'emailtemporal.org', 'emailtemporario.com.br', 'emailthe.net', 'emailto.de',
  'emailwarden.com', 'emailx.at.tc', 'emailxfer.com', 'emeil.in', 'emeil.ir',
  'ephemail.net', 'errormail.org', 'etranquil.com', 'etranquil.net', 'etranquil.org',
  'evopo.com', 'ewa.im', 'ezfill.com', 'ezmail.at.tc', 'ezmail.biz', 'ezmail.info',
  'fakedemail.com', 'fakeinformation.com', 'fakemail.fr', 'fastcheetah.com',
  'fastmail.fm', 'fastmail.to', 'fatfreehost.com', 'femail.com', 'femboy.club',
  'filzmail.com', 'fivetenmail.com', 'fleamail.com', 'flingmail.com', 'flyspam.com'
]);

/**
 * Common free consumer email domains (Gmail, Yahoo, Outlook, etc.)
 */
const COMMON_FREE_DOMAINS = new Set([
  'gmail.com', 'googlemail.com', 'yahoo.com', 'yahoo.co.in', 'yahoo.co.uk',
  'outlook.com', 'hotmail.com', 'live.com', 'msn.com', 'icloud.com',
  'me.com', 'aol.com', 'zoho.com', 'proton.me', 'protonmail.com', 'mail.com'
]);

/**
 * Verifies email address using RFC 5322 regex, Disposable Domain Blacklist, and Native DNS MX lookup.
 * 100% Free & Zero-Cost — runs natively on your server.
 * 
 * @param {string} email 
 * @returns {Promise<{ valid: boolean, reason?: string, cleanEmail?: string, domain?: string, isBusinessEmail?: boolean }>}
 */
export async function verifyEmailAddress(email) {
  if (!email || typeof email !== 'string') {
    return { valid: false, reason: 'Email address darj karna anivarya hai.' };
  }

  const cleanEmail = email.trim().toLowerCase();

  // 1. RFC 5322 Syntax Regex Validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(cleanEmail)) {
    return {
      valid: false,
      reason: 'Kripya ek sahi email format darj karein (e.g. name@company.com ya name@gmail.com).'
    };
  }

  const [username, domain] = cleanEmail.split('@');

  // Check username length and basic sanity
  if (!username || username.length < 2 || username.length > 64) {
    return {
      valid: false,
      reason: 'Email ka username bohot chhota ya invalid hai.'
    };
  }

  if (!domain || domain.length < 4 || !domain.includes('.')) {
    return {
      valid: false,
      reason: 'Email domain invalid hai.'
    };
  }

  // 2. Disposable / Temporary Email Blacklist Check
  if (DISPOSABLE_DOMAINS.has(domain)) {
    return {
      valid: false,
      reason: 'Temporary ya disposable email domains (jaise tempmail, mailinator) allowed nahi hain. Kripya apna permanent email use karein.'
    };
  }

  // Subdomain disposable check (e.g., xxx.mailinator.com)
  for (const disp of DISPOSABLE_DOMAINS) {
    if (domain.endsWith('.' + disp)) {
      return {
        valid: false,
        reason: 'Temporary ya disposable email domains allowed nahi hain. Kripya apna genuine email use karein.'
      };
    }
  }

  // 3. Native DNS MX Record Check (Mail Server Exists?)
  // For well-known providers (Gmail, Outlook, Yahoo), we know MX exists instantly (skip DNS query for speed)
  const isFreeProvider = COMMON_FREE_DOMAINS.has(domain);
  const isBusinessEmail = !isFreeProvider;

  if (!isFreeProvider) {
    try {
      // 2.5 second timeout wrapper on DNS resolution to prevent hang
      const mxRecords = await Promise.race([
        resolveMx(domain),
        new Promise((_, reject) => setTimeout(() => reject(new Error('DNS_TIMEOUT')), 2500))
      ]);

      if (!mxRecords || mxRecords.length === 0) {
        return {
          valid: false,
          reason: `Domain "@${domain}" ka koi active mail server (MX record) nahi mila. Kripya deliverable email use karein.`
        };
      }
    } catch (dnsErr) {
      if (dnsErr.code === 'ENOTFOUND' || dnsErr.code === 'ENODATA') {
        return {
          valid: false,
          reason: `Domain "@${domain}" exist nahi karta ya iska mail exchange server inactive hai. Kripya sahi email domain check karein.`
        };
      }
      // If DNS timed out on slow network, allow genuine format to avoid false block
      console.warn(`DNS check notice for ${domain}:`, dnsErr.message);
    }
  }

  return {
    valid: true,
    cleanEmail,
    domain,
    isBusinessEmail,
    isFreeProvider
  };
}
