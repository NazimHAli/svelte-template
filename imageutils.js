const sharp = require("sharp");
const path = require("path");
const glob = require("glob");
const fs = require("fs");

const publicFolder = path.resolve(__dirname, "public");
const publicFolderDist = `${publicFolder}/dist`;
const publicFolderDistImages = `${publicFolderDist}/images`;
const srcImages = `${publicFolder}/images/**/*.jpg`;

/*
 * Create folder(s) if doesn't exist
 */
const createFoldersRecursively = (folderToCreate) => {
  fs.access(folderToCreate, (error) => {
    if (error) {
      fs.mkdir(folderToCreate, { recursive: true }, (err) => {
        if (err) {
          console.log(`Error creating directory: ${folderToCreate}`);
        }
      });
    }
  });
};

/*
 * Delete folders recursively
 */
const deleteAllFolders = (path) => {
  if (fs.existsSync(path) && fs.lstatSync(path).isDirectory()) {
    fs.readdirSync(path).forEach((file, _) => {
      const currentPath = `${path}/${file}`;

      if (fs.lstatSync(currentPath).isDirectory()) {
        deleteAllFolders(currentPath);
      } else {
        fs.unlinkSync(currentPath);
      }
    });

    fs.rmdirSync(path);
  }
};

/*
 * Optimize images using sharp
 */
const optimizeImages = (imagesGlob) => {
  glob(imagesGlob, (err, files) => {
    if (err) {
      console.log(`Glob error: ${err}`);
      return;
    }

    files.forEach((file) => {
      const relativeFilePath = path
        .relative(__dirname, file)
        .replace("public/images", "");
      const newFile = `${publicFolderDistImages}${relativeFilePath}`;
      const newFileDir = path.dirname(newFile);

      createFoldersRecursively(newFileDir);

      sharp(file)
        .resize(300, 200)
        .toFormat("webp")
        .toFile(newFile)
        .catch((err) => console.log(`Sharp failed with the error: ${err}`));
    });
  });
};

// Clean up
deleteAllFolders(publicFolderDist);
// Create folders
createFoldersRecursively(publicFolderDistImages);
// Optimize images
optimizeImages(srcImages);
