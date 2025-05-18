// scripts/optimize-images.js
const imagemin = require('imagemin').default;
const mozjpeg = require('imagemin-mozjpeg').default;
const pngquant = require('imagemin-pngquant').default;
const webp = require('imagemin-webp').default;
const path = require('path');
const fs = require('fs');
const fg = require('fast-glob');

const inputDir = 'src/assets/images';
const outputDir = 'src/assets/images-optimized';

async function optimizeImages() {
  // Tworzenie katalogu wyjściowego jeśli nie istnieje
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Pobierz wszystkie pliki JPG/PNG
  const files = await fg(`${inputDir}/**/*.{jpg,jpeg,png}`);

  if (files.length === 0) {
    console.log('Brak plików do optymalizacji.');
    return;
  }

  console.log(`🔍 Znaleziono ${files.length} plików do optymalizacji...`);

  for (const file of files) {
    const relativePath = path.relative(inputDir, file);
    const targetPath = path.join(outputDir, relativePath);
    const targetDir = path.dirname(targetPath);

    // Tworzenie podkatalogów
    fs.mkdirSync(targetDir, { recursive: true });

    // Wczytaj i zoptymalizuj obraz
    const optimized = await imagemin([file], {
      plugins: [
        mozjpeg({ quality: 75 }),
        pngquant({ quality: [0.6, 0.8] })
      ]
    });

    // Zapisz zoptymalizowany JPG/PNG
    fs.writeFileSync(targetPath, optimized[0].data);

    // WebP
    const webpOutputPath = targetPath.replace(/\.(jpe?g|png)$/i, '.webp');
    const webpBuffer = await imagemin.buffer(fs.readFileSync(file), {
      plugins: [webp({ quality: 75 })]
    });
    fs.writeFileSync(webpOutputPath, webpBuffer);

    console.log(`✅ ${relativePath} → zoptymalizowany + WebP`);
  }

  console.log('🎉 Wszystkie obrazy zoptymalizowane.');
}

optimizeImages();
