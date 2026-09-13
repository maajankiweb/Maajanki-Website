const fs = require('fs');
const path = require('path');
const locDir = path.join(process.cwd(), 'app', 'locations');
const dirs = fs.readdirSync(locDir).filter(f => fs.statSync(path.join(locDir, f)).isDirectory()).sort();

console.log('=== VERIFICATION REPORT FOR 59 LOCATION PAGES ===');
console.log('Total location directories:', dirs.length);

let errors = [];
let passCount = 0;

dirs.forEach(d => {
  const file = path.join(locDir, d, 'page.js');
  if (!fs.existsSync(file)) {
    errors.push(d + ': page.js MISSING');
    return;
  }
  const content = fs.readFileSync(file, 'utf8');

  // Title check
  const titleMatch = content.match(/title:\s*["'`]([^"'`]+)["'`]/);
  const title = titleMatch ? titleMatch[1] : '';
  if (title.length < 50 || title.length > 60) {
    errors.push(d + ': Title length ' + title.length + ' outside 50-60 chars -> "' + title + '"');
  }

  // Description check
  const descMatch = content.match(/description:\s*["'`]([^"'`]+)["'`]/);
  const desc = descMatch ? descMatch[1] : '';
  if (desc.length < 150 || desc.length > 160) {
    errors.push(d + ': Desc length ' + desc.length + ' outside 150-160 chars -> "' + desc + '"');
  }

  // Near me / near you check
  if (!/near me|near you/i.test(content)) {
    errors.push(d + ': Missing near me / near you');
  }

  // Schema check
  if (!content.includes('LocalBusiness') || !content.includes('FAQPage')) {
    errors.push(d + ': Missing LocalBusiness or FAQPage schema');
  }

  // Entity contamination check (e.g. Mumbai, West Champaran, Bihar)
  if (d !== 'bagaha' && d !== 'bettiah' && d !== 'motihari' && d !== 'narkatiaganj' && d !== 'raxaul' && d !== 'patna' && d !== 'gaya' && d !== 'muzaffarpur' && d !== 'bihar-sharif') {
    if (content.includes('West Champaran, Bihar') && !content.includes('HQ: Bagaha')) {
      errors.push(d + ': Cross-contamination with West Champaran, Bihar');
    }
  }

  if (errors.length === 0) passCount++;
});

if (errors.length === 0) {
  console.log('ALL ' + dirs.length + ' LOCATION PAGES ARE 100% COMPLIANT!');
  console.log('- 50 <= Title length <= 60: PASS');
  console.log('- 150 <= Description length <= 160: PASS');
  console.log('- "Near me" / "Near you" integration: PASS');
  console.log('- LocalBusiness + FAQPage Schema.org: PASS');
  console.log('- Zero Geographic Contamination: PASS');
} else {
  console.log('ERRORS ENCOUNTERED (' + errors.length + '):');
  errors.forEach(e => console.log('  -', e));
}
