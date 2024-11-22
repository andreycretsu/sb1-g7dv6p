import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function prepareExtension() {
  const distDir = path.resolve(__dirname, '../dist');
  const publicDir = path.resolve(__dirname, '../public');

  try {
    // Ensure dist directory exists
    await fs.mkdir(distDir, { recursive: true });
    await fs.mkdir(path.resolve(distDir, 'icons'), { recursive: true });

    // Copy manifest and icons
    await fs.copyFile(
      path.resolve(publicDir, 'manifest.json'),
      path.resolve(distDir, 'manifest.json')
    );

    // Copy icons
    const iconSizes = ['16', '32', '48', '128'];
    for (const size of iconSizes) {
      await fs.copyFile(
        path.resolve(publicDir, `icons/icon${size}.png`),
        path.resolve(distDir, `icons/icon${size}.png`)
      );
    }

    // Copy popup.html
    await fs.copyFile(
      path.resolve(__dirname, '../popup.html'),
      path.resolve(distDir, 'popup.html')
    );

    console.log('Extension files prepared successfully');
  } catch (error) {
    console.error('Error preparing extension:', error);
    process.exit(1);
  }
}

prepareExtension();