const https = require('https');
const http = require('http');
const { exec } = require('child_process');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

console.log('⏰ Starting 24-Hour Automated Sitemap & GSC Sync Service...');

function runDailySync() {
  console.log(`\n======================================================`);
  console.log(`[${new Date().toISOString()}] 🔄 EXECUTING 24-HOUR SITEMAP & SEARCH ENGINE SYNC`);
  console.log(`======================================================`);

  exec('node scripts/generate-sitemap.js && node scripts/submit-indexnow.js && node scripts/auto-backlink-syndicate.js', { cwd: rootDir }, (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ Sync error: ${error.message}`);
      return;
    }
    if (stdout) console.log(stdout);
    if (stderr) console.warn(stderr);
    console.log(`✅ [SUCCESS] 24-Hour Sitemap Sync Completed! Next sync scheduled in 24 hours.`);
  });
}

// Run immediately on launch
runDailySync();

// Schedule to repeat every 24 hours (86,400,000 milliseconds)
const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;
setInterval(runDailySync, TWENTY_FOUR_HOURS);
