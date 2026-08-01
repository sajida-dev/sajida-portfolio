import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const IMAGE_EXTENSIONS = new Set(['.webp', '.png', '.jpg', '.jpeg', '.avif', '.gif', '.bmp', '.tiff', '.tif']);

// Folders to search (defaults to 'public')
const targetDirsArg = process.argv.slice(2).filter(arg => !arg.startsWith('--'));
const searchRootDirs = targetDirsArg.length > 0
  ? targetDirsArg.map(d => path.resolve(projectRoot, d))
  : [path.resolve(projectRoot, 'public')];

/**
 * Recursively find all folders named 'rotate' within a directory
 */
function findRotateDirectories(dir) {
  let rotateDirs = [];
  if (!fs.existsSync(dir)) return rotateDirs;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.toLowerCase() === 'rotate') {
        rotateDirs.push(fullPath);
      } else {
        rotateDirs = rotateDirs.concat(findRotateDirectories(fullPath));
      }
    }
  }
  return rotateDirs;
}

/**
 * Process and rotate images inside 'rotate' directories 90° counter-clockwise
 */
async function rotateImagesInRotateFolders() {
  console.log('--- 90° Counter-Clockwise Image Rotator ---');
  let totalFound = 0;
  let totalRotated = 0;
  let totalFailed = 0;

  for (const rootDir of searchRootDirs) {
    if (!fs.existsSync(rootDir)) {
      console.warn(`Directory not found: ${rootDir}`);
      continue;
    }

    const rotateDirs = findRotateDirectories(rootDir);
    if (rotateDirs.length === 0) {
      console.log(`No 'rotate' directories found in: ${path.relative(projectRoot, rootDir)}`);
      continue;
    }

    for (const rotateDir of rotateDirs) {
      const parentDir = path.dirname(rotateDir);
      const files = fs.readdirSync(rotateDir);

      for (const file of files) {
        const filePath = path.join(rotateDir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) continue;

        const ext = path.extname(file).toLowerCase();
        if (!IMAGE_EXTENSIONS.has(ext)) continue;

        totalFound++;
        const targetPath = path.join(parentDir, file);
        const relRotatePath = path.relative(projectRoot, filePath);
        const relTargetPath = path.relative(projectRoot, targetPath);

        try {
          console.log(`Rotating 90° CCW: ${relRotatePath} -> ${relTargetPath}`);
          // Read input file into buffer to avoid file locks by sharp on Windows
          const inputBuffer = await fs.promises.readFile(filePath);
          // Rotate 90 degrees counter-clockwise (270 degrees clockwise in sharp)
          const rotatedBuffer = await sharp(inputBuffer).rotate(270).toBuffer();
          await fs.promises.writeFile(targetPath, rotatedBuffer);
          await fs.promises.unlink(filePath);
          totalRotated++;
        } catch (err) {
          console.error(`Failed to rotate ${relRotatePath}:`, err.message);
          totalFailed++;
        }
      }

      // Remove the rotate directory if it's now empty
      const remainingFiles = fs.readdirSync(rotateDir);
      if (remainingFiles.length === 0) {
        fs.rmdirSync(rotateDir);
        console.log(`Cleaned up empty directory: ${path.relative(projectRoot, rotateDir)}`);
      }
    }
  }

  console.log('\n--- Summary ---');
  console.log(`Total images found in 'rotate' folders: ${totalFound}`);
  console.log(`Successfully rotated: ${totalRotated}`);
  if (totalFailed > 0) {
    console.log(`Failed: ${totalFailed}`);
  }
}

rotateImagesInRotateFolders().catch(err => {
  console.error('Fatal error running image rotator:', err);
  process.exit(1);
});
