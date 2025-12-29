const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const sharp = require('sharp');

// Promisify filesystem operations
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

// Image extensions to process
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif'];
// Directories to process
const DIRECTORIES = ['public/projects', 'public/tech'];
// Output quality (1-100)
const JPEG_QUALITY = 80;
const PNG_QUALITY = 80;
const WEBP_QUALITY = 75;

/**
 * Recursively finds all image files in a directory
 */
async function findImages(dir) {
    const files = await readdir(dir);
    const images = [];

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stats = await stat(filePath);

        if (stats.isDirectory()) {
            const subDirImages = await findImages(filePath);
            images.push(...subDirImages);
        } else {
            const ext = path.extname(file).toLowerCase();
            if (IMAGE_EXTENSIONS.includes(ext)) {
                images.push(filePath);
            }
        }
    }

    return images;
}

/**
 * Optimizes a single image file
 */
async function optimizeImage(imagePath) {
    const ext = path.extname(imagePath).toLowerCase();
    const filename = path.basename(imagePath, ext);
    const dirname = path.dirname(imagePath);

    try {
        // Load image with sharp
        const image = sharp(imagePath);
        const metadata = await image.metadata();

        // If image is already small, skip optimization
        if (metadata.size && metadata.size < 50 * 1024) {
            console.log(`Skipping ${imagePath} - already optimized`);
            return;
        }

        // Create optimized version in same directory
        const optimizedPath = path.join(dirname, `${filename}${ext}`);

        if (ext === '.jpg' || ext === '.jpeg') {
            await image
                .jpeg({ quality: JPEG_QUALITY, progressive: true })
                .toFile(optimizedPath + '.temp');
        } else if (ext === '.png') {
            await image
                .png({ quality: PNG_QUALITY, compressionLevel: 9 })
                .toFile(optimizedPath + '.temp');
        } else {
            await image.toFile(optimizedPath + '.temp');
        }

        // Create WebP version for modern browsers
        await image
            .webp({ quality: WEBP_QUALITY })
            .toFile(path.join(dirname, `${filename}.webp`));

        // Replace original with optimized version
        fs.unlinkSync(imagePath);
        fs.renameSync(optimizedPath + '.temp', imagePath);

        console.log(`Optimized ${imagePath}`);

    } catch (error) {
        console.error(`Error optimizing ${imagePath}:`, error.message);
    }
}

/**
 * Main function to optimize all images
 */
async function optimizeImages() {
    try {
        // Process each directory
        for (const directory of DIRECTORIES) {
            const dir = path.join(process.cwd(), directory);
            console.log(`Scanning ${dir} for images...`);

            // Find all images
            const images = await findImages(dir);
            console.log(`Found ${images.length} images in ${dir}`);

            // Process each image
            for (const imagePath of images) {
                await optimizeImage(imagePath);
            }
        }

        console.log('Image optimization complete!');
    } catch (error) {
        console.error('Error during image optimization:', error);
    }
}

// Run optimization if this file is executed directly
if (require.main === module) {
    optimizeImages();
}

module.exports = { optimizeImages };