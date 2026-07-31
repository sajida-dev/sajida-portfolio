import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Image extensions to convert to .webp
const TARGET_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.gif', '.bmp', '.tiff', '.tif', '.avif', '.heic']);

// Folders to search for images (defaulting to 'public')
const targetDirsArg = process.argv.slice(2).filter(arg => !arg.startsWith('--'));
const targetDirs = targetDirsArg.length > 0
  ? targetDirsArg.map(d => path.resolve(projectRoot, d))
  : [path.resolve(projectRoot, 'public')];

// Code directories/files where image path references might need updating
const CODE_DIRS = [
  path.resolve(projectRoot, 'data'),
  path.resolve(projectRoot, 'components'),
  path.resolve(projectRoot, 'app')
];
const CODE_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.jsx', '.json', '.html', '.css']);

/**
 * Get all files recursively in a directory
 */
function getFilesRecursively(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(filePath));
    } else {
      results.push(filePath);
    }
  });
  return results;
}

/**
 * Update image references in code files when images are converted
 */
function updateCodeReferences(replacements) {
  if (replacements.length === 0) return;

  const codeFiles = [];
  CODE_DIRS.forEach(dir => {
    if (fs.existsSync(dir)) {
      codeFiles.push(...getFilesRecursively(dir).filter(f => CODE_EXTENSIONS.has(path.extname(f).toLowerCase())));
    }
  });

  let totalReplacements = 0;

  codeFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let updated = content;

    replacements.forEach(({ oldBasename, newBasename }) => {
      if (updated.includes(oldBasename)) {
        updated = updated.split(oldBasename).join(newBasename);
      }
    });

    if (updated !== content) {
      fs.writeFileSync(file, updated, 'utf8');
      console.log(`[Code Update] Updated references in: ${path.relative(projectRoot, file)}`);
      totalReplacements++;
    }
  });

  if (totalReplacements > 0) {
    console.log(`Successfully updated image references across ${totalReplacements} code file(s).`);
  }
}

/**
 * Main conversion function
 */
async function convertImagesToWebp() {
  console.log('--- WebP Image Converter ---');
  let totalFound = 0;
  let totalConverted = 0;
  let totalFailed = 0;
  const replacements = [];

  for (const targetDir of targetDirs) {
    if (!fs.existsSync(targetDir)) {
      console.warn(`Directory not found: ${targetDir}`);
      continue;
    }

    const files = getFilesRecursively(targetDir);

    for (const filePath of files) {
      const ext = path.extname(filePath).toLowerCase();
      if (!TARGET_EXTENSIONS.has(ext)) continue;

      totalFound++;
      const dirName = path.dirname(filePath);
      const baseName = path.basename(filePath, ext);
      const webpPath = path.join(dirName, `${baseName}.webp`);
      const relPathOriginal = path.relative(projectRoot, filePath);
      const relPathWebp = path.relative(projectRoot, webpPath);

      console.log(`Converting: ${relPathOriginal} -> ${relPathWebp}`);

      try {
        // Read file and convert to webp (handling animated gifs too)
        const isGif = ext === '.gif';
        await sharp(filePath, { animated: isGif })
          .webp({ quality: 80 })
          .toFile(webpPath);

        // Verify newly created webp file exists and has size > 0
        if (fs.existsSync(webpPath) && fs.statSync(webpPath).size > 0) {
          // Remove the original non-webp image file
          fs.unlinkSync(filePath);
          console.log(`  ✓ Converted & deleted original: ${relPathOriginal}`);
          totalConverted++;

          replacements.push({
            oldBasename: path.basename(filePath),
            newBasename: `${baseName}.webp`
          });
        } else {
          console.error(`  ✕ Conversion failed or output empty for: ${relPathOriginal}`);
          totalFailed++;
        }
      } catch (err) {
        console.error(`  ✕ Error converting ${relPathOriginal}:`, err.message);
        totalFailed++;
      }
    }
  }

  console.log('\n--- Summary ---');
  console.log(`Found: ${totalFound} non-webp image(s)`);
  console.log(`Converted & Deleted Original: ${totalConverted}`);
  if (totalFailed > 0) console.log(`Failed: ${totalFailed}`);

  // Update references in source code
  if (replacements.length > 0) {
    console.log('\nUpdating code references...');
    updateCodeReferences(replacements);
  }

  console.log('--- Done! ---\n');
}

convertImagesToWebp();
