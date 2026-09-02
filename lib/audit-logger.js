import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const LOG_FILE_PATH = path.join(process.cwd(), 'logs', 'audit-trail.jsonl');

/**
 * Ensures log directory exists
 */
function ensureLogDir() {
  const dir = path.dirname(LOG_FILE_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

/**
 * Retrieves the last record's hash to maintain blockchain-style cryptographic chaining
 */
function getLastLogHash() {
  ensureLogDir();
  if (!fs.existsSync(LOG_FILE_PATH)) {
    return 'GENESIS_HASH_MAAJANKI_ZERO_TRUST_INIT';
  }

  try {
    const lines = fs.readFileSync(LOG_FILE_PATH, 'utf-8').trim().split('\n').filter(Boolean);
    if (lines.length === 0) return 'GENESIS_HASH_MAAJANKI_ZERO_TRUST_INIT';
    const lastEntry = JSON.parse(lines[lines.length - 1]);
    return lastEntry.hash || 'GENESIS_HASH_MAAJANKI_ZERO_TRUST_INIT';
  } catch (err) {
    console.warn('Audit log last hash read notice:', err.message);
    return 'GENESIS_HASH_MAAJANKI_ZERO_TRUST_INIT';
  }
}

/**
 * Logs an administrative or security event with SHA-256 cryptographic chain
 */
export async function logAuditEvent({
  actor = 'System / Ashish Kumar',
  actorId = 'admin-ashish',
  action = 'SECURITY_AUDIT',
  category = 'GENERAL',
  resource = 'SYSTEM',
  targetId = 'N/A',
  changes = {},
  ip = '127.0.0.1',
  userAgent = 'Internal Next.js Engine'
}) {
  ensureLogDir();

  const prevHash = getLastLogHash();
  const timestamp = new Date().toISOString();

  const payloadToHash = {
    prevHash,
    timestamp,
    actor,
    actorId,
    action,
    category,
    resource,
    targetId,
    changes,
    ip,
    userAgent
  };

  const hash = crypto
    .createHash('sha256')
    .update(JSON.stringify(payloadToHash))
    .digest('hex');

  const logEntry = {
    ...payloadToHash,
    hash
  };

  try {
    fs.appendFileSync(LOG_FILE_PATH, JSON.stringify(logEntry) + '\n');
  } catch (err) {
    console.error('Failed to append to audit ledger:', err);
  }

  return logEntry;
}

/**
 * Reads recent audit logs with pagination and optional category filtering
 */
export function getRecentAuditLogs(limit = 50, category = 'ALL') {
  ensureLogDir();
  if (!fs.existsSync(LOG_FILE_PATH)) {
    return [];
  }

  try {
    const lines = fs.readFileSync(LOG_FILE_PATH, 'utf-8').trim().split('\n').filter(Boolean);
    const entries = lines.map(line => {
      try {
        return JSON.parse(line);
      } catch {
        return null;
      }
    }).filter(Boolean);

    let filtered = entries;
    if (category && category !== 'ALL') {
      filtered = entries.filter(e => e.category === category || e.action.includes(category));
    }

    return filtered.reverse().slice(0, limit);
  } catch (err) {
    console.error('Failed to read audit logs:', err);
    return [];
  }
}

/**
 * Validates cryptographic integrity of entire audit ledger
 */
export function verifyAuditLedgerIntegrity() {
  ensureLogDir();
  if (!fs.existsSync(LOG_FILE_PATH)) {
    return { verified: true, totalEntries: 0, corruptedAtIndex: null };
  }

  try {
    const lines = fs.readFileSync(LOG_FILE_PATH, 'utf-8').trim().split('\n').filter(Boolean);
    let expectedPrevHash = 'GENESIS_HASH_MAAJANKI_ZERO_TRUST_INIT';

    for (let i = 0; i < lines.length; i++) {
      const entry = JSON.parse(lines[i]);
      if (entry.prevHash !== expectedPrevHash) {
        return { verified: false, totalEntries: lines.length, corruptedAtIndex: i, reason: 'Broken previous hash chain' };
      }

      const { hash, ...dataToHash } = entry;
      const recomputedHash = crypto
        .createHash('sha256')
        .update(JSON.stringify(dataToHash))
        .digest('hex');

      if (hash !== recomputedHash) {
        return { verified: false, totalEntries: lines.length, corruptedAtIndex: i, reason: 'Payload hash tampering detected' };
      }

      expectedPrevHash = hash;
    }

    return { verified: true, totalEntries: lines.length, corruptedAtIndex: null };
  } catch (err) {
    return { verified: false, error: err.message };
  }
}
