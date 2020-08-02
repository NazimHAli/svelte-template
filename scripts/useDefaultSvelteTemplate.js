const fs = require("fs");
const path = require("path");
const publicFolder = path.resolve(__dirname, "../public");
const srcFolder = path.resolve(__dirname, "../src");

// Minimal template from https://github.com/sveltejs/template/blob/master/src/App.svelte
const minimalAppSvelteTemplate = `<script>
	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>`;

// Minimal template from https://github.com/sveltejs/template/blob/master/src/main.js
const minimalMainTsTemplate = `import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    name: 'world'
  }
});

export default app;`;

const deleteDirectories = (path) => {
  if (fs.existsSync(path) && fs.lstatSync(path).isDirectory()) {
    console.log(`Deleting path recursively: ${path}`);
    fs.readdirSync(path).forEach((file, _) => {
      const currentPath = `${path}/${file}`;

      if (fs.lstatSync(currentPath).isDirectory()) {
        deleteDirectories(currentPath);
      } else {
        fs.unlinkSync(currentPath);
      }
    });

    fs.rmdirSync(path);
  }
};

const createDirectory = (path) => {
  console.log(`Creating empty directory: ${path}`);
  fs.mkdir(path, (err) => {
    if (err) {
      console.log(`Error creating directory: ${path}`);
    }
  });
};

const createFile = (fileName, fileTemplate) => {
  console.log(`Creating new file: ${fileName}`);

  fs.writeFile(fileName, fileTemplate, (err) => {
    if (err) throw err;
  });
};

// Delete public/ and src/ folders/files
deleteDirectories(publicFolder);
deleteDirectories(srcFolder);

// Create empty public/ and src/ folders
createDirectory(publicFolder);
createDirectory(srcFolder);

// Create new files using default Svelte templates
createFile("src/App.svelte", minimalAppSvelteTemplate);
createFile("src/main.ts", minimalMainTsTemplate);

// Required for HtmlWebpackPlugin
createFile("src/favicon.png", "");
