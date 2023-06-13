const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const MAX_SIZE = 200 * 1024; // 200KB

async function compressImage(inputPath, outputPath) {
  let stats = fs.statSync(inputPath);
  let fileSizeInBytes = stats['size'];
  let quality = 99; // Start from highest quality

  if (fileSizeInBytes > MAX_SIZE) {
    let buffer = await sharp(inputPath).jpeg({ quality: quality }).toBuffer();

    fs.writeFileSync(outputPath, buffer);

    stats = fs.statSync(outputPath);
    fileSizeInBytes = stats['size'];

    // Reduce quality if the image size is still too big
    while (fileSizeInBytes > MAX_SIZE && quality > 0) {
      quality -= 5; // Reduce quality by 5

      buffer = await sharp(inputPath).jpeg({ quality: quality }).toBuffer();

      fs.writeFileSync(outputPath, buffer);

      stats = fs.statSync(outputPath);
      fileSizeInBytes = stats['size'];
    }

    console.log(`Image ${inputPath} compressed and written to ${outputPath}`);
  } else {
    // If image is already under MAX_SIZE, copy the file as it is
    fs.copyFileSync(inputPath, outputPath);
    console.log(`Image ${inputPath} copied without changes`);
  }
}

// Iterate over all .png files in a directory
const directoryPath = path.join(__dirname, '../arc');

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  // Process each .png file
  files.forEach((file) => {
    if (path.extname(file) === '.png') {
      const inputPath = path.join(directoryPath, file);
      const outputPath = path.join(__dirname, file.replace('.png', '.jpg')); // output to current directory, keep same name, but change extension to .jpg

      compressImage(inputPath, outputPath);
    }
  });
});
