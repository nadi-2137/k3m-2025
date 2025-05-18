// scripts/optimize-images.js
const imagemin = require('imagemin').default;
const mozjpeg = require('imagemin-mozjpeg').default;
const pngquant = require('imagemin-pngquant').default;
const webp = require('imagemin-webp').default;
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const fg = require('fast-glob');

const inputDir = 'src/assets/images';
const outputDir = 'src/assets/images-optimized';

const resizeVariants = [
  { suffix: '-lg', width: 1920, height: 1080, fit: 'inside' },
  { suffix: '-280x192', width: 280, height: 192 },
  { suffix: '-340x192', width: 340, height: 192 },
  { suffix: '-436x192', width: 436, height: 192 },
  { suffix: '-280x288', width: 280, height: 288 },
  { suffix: '-md', width: 896, fit: 'inside' }
];

function cleanOutputDirectory() {
  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true, force: true });
  }
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeBuffer(buffer) {
  return await imagemin.buffer(buffer, {
    plugins: [
      mozjpeg({ quality: 75 }),
      pngquant({ quality: [0.6, 0.8] })
    ]
  });
}

async function writeOptimizedVariants(file, relativePath, image) {
  const ext = path.extname(relativePath);
  const base = path.basename(relativePath, ext);
  const dir = path.dirname(relativePath);
  const inputBuffer = await fs.promises.readFile(file);

  // Org version
  const orgPath = path.join(outputDir, dir, `${base}-org${ext}`);
  const orgWebpPath = orgPath.replace(/\.(jpe?g|png)$/i, '.webp');
  fs.mkdirSync(path.dirname(orgPath), { recursive: true });
  const optimizedOrg = await optimizeBuffer(inputBuffer);
  await fs.promises.writeFile(orgPath, optimizedOrg);
  const webpOrg = await imagemin.buffer(inputBuffer, { plugins: [webp({ quality: 75 })] });
  await fs.promises.writeFile(orgWebpPath, webpOrg);

  // Resize + optimize variants
  for (const variant of resizeVariants) {
    const outPath = path.join(outputDir, dir, `${base}${variant.suffix}${ext}`);
    const outWebpPath = outPath.replace(/\.(jpe?g|png)$/i, '.webp');

    const resizedBuffer = await sharp(inputBuffer)
      .resize({
        width: variant.width,
        height: variant.height,
        fit: variant.fit || 'cover'
      })
      .toBuffer();

    const optimized = await optimizeBuffer(resizedBuffer);
    const webpBuf = await imagemin.buffer(resizedBuffer, { plugins: [webp({ quality: 75 })] });

    await fs.promises.writeFile(outPath, optimized);
    await fs.promises.writeFile(outWebpPath, webpBuf);
  }

  console.log(`✅ ${relativePath} → org, lg, md, fixed sizes + WebP`);
}

async function optimizeImages() {
  cleanOutputDirectory();

  const files = await fg(`${inputDir}/**/*.{jpg,jpeg,png}`);

  if (files.length === 0) {
    console.log('Brak plików do optymalizacji.');
    return;
  }

  console.log(`🔍 Znaleziono ${files.length} plików do optymalizacji...`);

  for (const file of files) {
    const relativePath = path.relative(inputDir, file);
    await writeOptimizedVariants(file, relativePath);
  }

  console.log('🎉 Wszystkie obrazy zoptymalizowane i przeskalowane.');
}

optimizeImages();
