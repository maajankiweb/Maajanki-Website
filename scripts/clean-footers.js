const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'app');

function cleanDirectory(dir) {
  let updatedCount = 0;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      updatedCount += cleanDirectory(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.js') || entry.name.endsWith('.jsx'))) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('FooterSection')) {
        content = content.replace(/import\s+FooterSection\s+from\s+['"]@\/components\/FooterWithPopup['"];?\r?\n?/g, '');
        content = content.replace(/<FooterSection\s*\/?>\r?\n?/g, '');
        fs.writeFileSync(fullPath, content, 'utf8');
        updatedCount++;
      }
    }
  }
  return updatedCount;
}

const total = cleanDirectory(appDir);
console.log(`✅ Successfully cleaned duplicate FooterSection from ${total} app pages`);
