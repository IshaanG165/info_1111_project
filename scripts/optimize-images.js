import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '../public');

async function optimizeImage(inputPath, outputPath, options = {}) {
  try {
    await sharp(inputPath)
      .resize(options.width, options.height, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ quality: 80 })
      .toFile(outputPath);
    console.log(`Optimized: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
  }
}

async function optimizeImages() {
  const imagesDir = path.join(publicDir, 'images');
  const files = fs.readdirSync(imagesDir);

  for (const file of files) {
    const inputPath = path.join(imagesDir, file);
    const outputPath = path.join(imagesDir, `optimized-${file}`);
    
    if (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')) {
      await optimizeImage(inputPath, outputPath, {
        width: 1920,
        height: 1080
      });
    }
  }
}

optimizeImages().catch(console.error); 