import fs from 'fs';

const filePath = './src/storage/storage.json';

export function save(data) {
  const videoContentString = JSON.stringify(data);
  fs.writeFileSync(filePath, videoContentString, 'utf-8');
}

export function load() {
  const fileBuffer = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(fileBuffer);
  return data;
}
