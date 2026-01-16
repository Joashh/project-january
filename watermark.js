const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

const inputDir = './images/street/full';
const outputDir = './images/street/watermarked';

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

fs.readdirSync(inputDir).forEach(file => {
  if (!file.toLowerCase().endsWith('.jpg')) return;

  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, file);

  sharp(inputPath)
    .metadata()
    .then(meta => {
      const watermarkSvg = `
<svg width="${meta.width}" height="${meta.height}">
  <text
    x="${meta.width / 2}"
    y="${meta.height/2}"
    font-size="${meta.width / 15}"
    font-family="Arial"
    fill="white"
    fill-opacity="0.2"
    text-anchor="middle"
    dominant-baseline="bottom"
    transform="rotate(-30 ${meta.width / 2} ${meta.height})"
  >
    © Al Benavente
  </text>
</svg>
`;

      return sharp(inputPath)
        .composite([{ input: Buffer.from(watermarkSvg) }])
        .jpeg({ quality: 90 })
        .toFile(outputPath);
    })
    .then(() => console.log(`Watermarked: ${file}`))
    .catch(err => console.error(err));
});
