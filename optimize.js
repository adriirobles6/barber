import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoryPath = path.join(__dirname, 'src/assets');

async function optimizeImages() {
  try {
    const files = fs.readdirSync(directoryPath);
    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png)$/i) && !file.includes('logo.png')) {
        const filePath = path.join(directoryPath, file);
        const name = path.parse(file).name;
        const outputPath = path.join(directoryPath, `${name}.webp`);
        
        console.log(`Converting ${file} to WebP...`);
        await sharp(filePath)
          .webp({ quality: 80 })
          .toFile(outputPath);
          
        console.log(`Successfully converted ${file} to ${name}.webp`);
      }
    }
  } catch (err) {
    console.error('Error during image optimization:', err);
  }
}

optimizeImages();
