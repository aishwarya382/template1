const fs = require('fs');
const content = fs.readFileSync('C:/Users/Aishwarya/.gemini/antigravity/brain/6cc5f2c9-28e6-490b-8445-f187387b15d1/.system_generated/steps/535/content.md', 'utf8');
const regex = /https?:\/\/[^\s"'><\)]+?\.(?:png|jpg|jpeg|gif|webp|svg|mp4)/gi;
const matches = [...new Set(content.match(regex))];
console.log(matches.join('\n'));
