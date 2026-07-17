const fs = require('fs');
const content = fs.readFileSync('tilda.css', 'utf8');
const regex = /url\(['"]?(https?:\/\/[^\s"'>\)]+?\.(?:png|jpg|jpeg|gif|webp|svg))['"]?\)/gi;
let m;
const urls = new Set();
while ((m = regex.exec(content)) !== null) {
  urls.add(m[1]);
}
console.log(Array.from(urls).join('\n'));
