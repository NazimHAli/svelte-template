import sharp from "sharp";
import { resolve, relative, join, dirname } from "path";
import glob from "glob";
import {
    access,
    mkdir,
    existsSync,
    lstatSync,
    readdirSync,
    unlinkSync,
    rmdirSync,
} from "fs";

const publicFolderDist = resolve(__dirname, "dist");
const publicFolderDistImages = resolve(__dirname, "dist/images");
const srcImages = resolve(__dirname, "src/images/**/*.jpg");

/*
 * Create folder(s) if doesn't exist
 */
const createFoldersRecursively = (folderToCreate) => {
    access(folderToCreate, (error) => {
        if (error) {
            mkdir(folderToCreate, { recursive: true }, (err) => {
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
    if (existsSync(path) && lstatSync(path).isDirectory()) {
        readdirSync(path).forEach((file, _) => {
            const currentPath = `${path}/${file}`;

            if (lstatSync(currentPath).isDirectory()) {
                deleteAllFolders(currentPath);
            } else {
                unlinkSync(currentPath);
            }
        });

        rmdirSync(path);
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
            const relativeFilePath = relative(__dirname, file).replace(
                "src/",
                ""
            );
            const newFile = join(resolve("dist"), relativeFilePath);
            const newFileDir = dirname(newFile);

            createFoldersRecursively(newFileDir);

            sharp(file)
                .resize(300, 200)
                .toFormat("webp")
                .toFile(newFile)
                .catch((err) => {
                    console.error(`Sharp failed with the error: ${err}`);
                });
        });
    });
};

// Clean up
deleteAllFolders(publicFolderDist);
// Create folders
createFoldersRecursively(publicFolderDistImages);
// Optimize images
optimizeImages(srcImages);
