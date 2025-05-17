// downloadImages.js
const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');

const imageFolder = path.join(__dirname, 'public', 'static', 'images');

// Replace this with your actual domain
const BASE_URL = 'https://www.trymintly.com/static/images/';


const files = [
  'production.svg',
  'salary.svg',
  'salary.svg',
  'sales.svg',
  'search_normal.svg',
  'support.svg'
];

if (!fs.existsSync(imageFolder)) {
  fs.mkdirSync(imageFolder, { recursive: true });
}

function download(url, dest) {
  const client = url.startsWith('https') ? https : http;
  return new Promise((resolve, reject) => {
    client.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(`Failed to get '${url}' (${res.statusCode})`);
        return;
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve(dest);
      });
    }).on('error', reject);
  });
}

(async () => {
  for (const file of files) {
    const fileUrl = `${BASE_URL}${file}`;
    const savePath = path.join(imageFolder, file);
    try {
      console.log(`Downloading: ${fileUrl}`);
      await download(fileUrl, savePath);
      console.log(`✔ Saved: ${savePath}`);
    } catch (err) {
      console.error(`✖ Error downloading ${file}:`, err);
    }
  }
})();
