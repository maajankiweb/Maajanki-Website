/**
 * MaaJanki Web Tech — Database Backup & Cleanup Script
 * 
 * PURPOSE: Safely backs up all MongoDB data to JSON files, then cleans collections.
 * SAFETY: Third-party connections (Clerk, GSC, GA4, IndexNow, etc.) are NOT in MongoDB.
 * 
 * Usage: node scripts/db-backup-cleanup.js
 * Backup only: node scripts/db-backup-cleanup.js --backup-only
 */

import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env from .env and .env.local (both files, .env.local takes precedence)
function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  const envContent = fs.readFileSync(filePath, 'utf-8');
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const eqIndex = trimmed.indexOf('=');
      if (eqIndex > 0) {
        const key = trimmed.substring(0, eqIndex).trim();
        let value = trimmed.substring(eqIndex + 1).trim();
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1);
        }
        process.env[key] = value;
      }
    }
  });
}

// Load .env first, then .env.local overrides
loadEnvFile(path.join(__dirname, '..', '.env'));
loadEnvFile(path.join(__dirname, '..', '.env.local'));

const MONGODB_URI = process.env.MONGODB_URI;
const BACKUP_ONLY = process.argv.includes('--backup-only');

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI not found in environment. Check .env.local');
  process.exit(1);
}

async function run() {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('  MaaJanki Web Tech — Database Backup & Cleanup');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`  Mode: ${BACKUP_ONLY ? 'BACKUP ONLY' : 'BACKUP + CLEANUP'}`);
  console.log(`  Time: ${new Date().toISOString()}`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  try {
    // 1. Connect to MongoDB
    console.log('🔗 Connecting to MongoDB Atlas...');
    await mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
      maxPoolSize: 5,
      serverSelectionTimeoutMS: 10000,
    });
    console.log('✅ Connected to MongoDB Atlas successfully.\n');

    const db = mongoose.connection.db;

    // 2. Create backup directory
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    const backupDir = path.join(__dirname, '..', 'backups', `backup-${timestamp}`);
    fs.mkdirSync(backupDir, { recursive: true });
    console.log(`📁 Backup directory: ${backupDir}\n`);

    // 3. Get all collections
    const collections = await db.listCollections().toArray();
    console.log(`📊 Found ${collections.length} collection(s):\n`);

    const backupSummary = [];

    for (const collInfo of collections) {
      const collName = collInfo.name;
      const collection = db.collection(collName);
      const count = await collection.countDocuments();
      
      console.log(`  📦 ${collName}: ${count} document(s)`);

      // Export all documents
      const docs = await collection.find({}).toArray();
      const backupFile = path.join(backupDir, `${collName}.json`);
      fs.writeFileSync(backupFile, JSON.stringify(docs, null, 2), 'utf-8');
      console.log(`     → Backed up to ${collName}.json`);

      backupSummary.push({ collection: collName, count, backupFile });
    }

    console.log('\n✅ All collections backed up successfully.\n');

    // 4. Cleanup (if not backup-only)
    if (!BACKUP_ONLY) {
      console.log('🧹 Starting database cleanup...\n');

      for (const item of backupSummary) {
        if (item.count > 0) {
          const collection = db.collection(item.collection);
          const result = await collection.deleteMany({});
          console.log(`  🗑️  ${item.collection}: Deleted ${result.deletedCount} document(s)`);
        } else {
          console.log(`  ⏭️  ${item.collection}: Already empty, skipping.`);
        }
      }

      console.log('\n✅ Database cleanup complete.\n');

      // 5. Verify cleanup
      console.log('🔍 Verification — Post-cleanup document counts:\n');
      for (const item of backupSummary) {
        const collection = db.collection(item.collection);
        const remaining = await collection.countDocuments();
        const status = remaining === 0 ? '✅' : '⚠️';
        console.log(`  ${status} ${item.collection}: ${remaining} document(s) remaining`);
      }

      // 6. Verify indexes preserved
      console.log('\n🔍 Verification — Indexes preserved:\n');
      for (const item of backupSummary) {
        const collection = db.collection(item.collection);
        const indexes = await collection.indexes();
        console.log(`  📋 ${item.collection}: ${indexes.length} index(es) preserved`);
        indexes.forEach(idx => {
          console.log(`     → ${idx.name}: ${JSON.stringify(idx.key)}`);
        });
      }
    }

    // 7. Summary
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('  SUMMARY');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`  Backup location: ${backupDir}`);
    backupSummary.forEach(item => {
      console.log(`  ${item.collection}: ${item.count} documents backed up`);
    });
    console.log('\n  ⚡ Third-party connections: UNAFFECTED');
    console.log('    ✅ Clerk Authentication — env vars only');
    console.log('    ✅ Google Search Console — env vars only');
    console.log('    ✅ Google Analytics (GA4) — script tag only');
    console.log('    ✅ Microsoft Clarity — script tag only');
    console.log('    ✅ IndexNow (Bing/Yandex) — env vars only');
    console.log('    ✅ Google Sheets — env vars only');
    console.log('    ✅ NVIDIA Chat API — env vars only');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    console.error(error.stack);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB.\n');
    process.exit(0);
  }
}

run();
