# Svelte template

Starter Svelte template using a modern build process with WebPack, PurgeCSS, code splitting, lazy loading, unit testing, integration testing.

[![Dependecy Status](https://david-dm.org/NazimAli2017/svelte-template.svg)](https://david-dm.org/NazimAli2017/svelte-template)  
[![devDependencies Status](https://david-dm.org/NazimAli2017/svelte-template/dev-status.svg)](https://david-dm.org/NazimAli2017/svelte-template?type=dev)

![Cypress Tests](https://github.com/NazimAli2017/svelte-template/workflows/Cypress%20Tests/badge.svg)
![Yarn Build](https://github.com/NazimAli2017/svelte-template/workflows/Yarn%20Build/badge.svg?branch=master)
![Website Performance](https://github.com/NazimAli2017/svelte-template/workflows/Website%20Performance/badge.svg)
![Artifacts](https://github.com/NazimAli2017/svelte-template/workflows/Artifacts/badge.svg)

![Screenshot](screenshot.png)

[View Demo](https://source-285017.uc.r.appspot.com/)

## Quick start

```
yarn install
yarn dev
yarn test
```

### What if I want to use the minimal Svelte template instead?

Execute the helper script from the repo root.

```
node scripts/useDefaultSvelteTemplate.js
```

## Deploying

Production build assets are stored in `public/dist`  
Static assets can be deployed to any server that supports it. Should be just as easy to deploy to other static host providers like AWS, Netlify, or Firebase.

Google App Engine example configuration stored in `app.yaml` and deployed to the demo URL.

## Goals

1. Use web dev best practices
2. Improve TypeScript
3. Keep [PageSpeed](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fsource-285017.uc.r.appspot.com%2F) score > 90

- Current score is 100, but need to make it real by adding services, logging..etc and use that score

## Features

- Svelte with TypeScript
- WebPack
- TailwindCSS
- PostCSS: Autoprefixer, PurgeCSS
- Code splitting
- Lazy loading
- GitHub actions to run build and Cypress tests

## TODO

- [x] Cleanup unused packages
- [ ] Add unit tests
- [ ] Add integration tests
- [ ] Add visual regression tests
- [ ] Add performance tests
- [ ] Add accessibility tests
- [ ] Add more pages
- [ ] Add real API services
- [ ] Update documentation
- [ ] Create virtual scroller
- [ ] Migrate Javascript modules to TypeScript

## Contributions welcome!

Can start with the list of items in the TODO section.
