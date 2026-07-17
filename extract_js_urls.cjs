const https = require('https');
https.get('https://static.tildacdn.net/ws/project8424802/tilda-blocks-page146061523.min.js?t=1783194421', (res) => {
  let data = '';
  res.on('data', d => data += d);
  res.on('end', () => {
    const regex = /https?:\/\/[^\s"'><\)]+?\.(?:png|jpg|jpeg|gif|webp|svg|mp4)/gi;
    const matches = [...new Set(data.match(regex))];
    console.log(matches.join('\n'));
  });
});
