const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const replacements = [
  { search: /text-gold/g, replace: 'text-crimson' },
  { search: /text-gold-light/g, replace: 'text-crimson' },
  { search: /border-gold/g, replace: 'border-crimson' },
  { search: /bg-maroon/g, replace: 'bg-white' },
  { search: /bg-bg-dark/g, replace: 'bg-bg-light' },
  { search: /text-ivory/g, replace: 'text-charcoal' },
  { search: /text-ivory\/90/g, replace: 'text-charcoal/90' },
  { search: /text-ivory\/80/g, replace: 'text-charcoal/80' },
  { search: /glass-card-red/g, replace: 'glass-card-light' },
  { search: /bg-bg-red/g, replace: 'bg-bg-light' },
];

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      
      for (const { search, replace } of replacements) {
        if (search.test(content)) {
          content = content.replace(search, replace);
          modified = true;
        }
      }
      
      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

processDirectory(srcDir);
