# Svelte template

Svelte starter template/boilerplate using a modern build process - Vite as the default bundler or [Webpack 5](https://github.com/NazimHAli/svelte-template/releases/tag/webpack5) if needed/preferred, PostCSS, PurgeCSS, code splitting, lazy loading, simple, vanilla SPA router in TypeScript, unit testing, integration testing.

![Build](https://github.com/NazimHAli/svelte-template/workflows/Build/badge.svg)
![Performance](https://github.com/NazimHAli/svelte-template/workflows/Performance/badge.svg)
![Tests](https://github.com/NazimHAli/svelte-template/workflows/Tests/badge.svg)

## Features

-   Svelte with TypeScript
-   Vite as the default bundler
    -   [Webpack 5 version](https://github.com/NazimHAli/svelte-template/releases/tag/webpack5) still available
-   TailwindCSS
-   PostCSS: Autoprefixer, PurgeCSS
-   Code splitting
-   Lazy loading
-   GitHub actions to run build, unit and Cypress tests

## Quick start

```
yarn install
yarn dev
```

## [View Demo](https://svelte-template-prod.vercel.app/)

![Screenshot](screenshot.png)

### What if I want to use the minimal Svelte template instead?

Execute the helper script.

```
node scripts/useDefaultSvelteTemplate.js
```

## Deploying

Production build assets are stored in `dist`. Static assets can be deployed to any server that supports it. Easy to deploy to any static host provider.

Google App Engine example configuration stored in `app.yaml` and demo deployed to vercel.

## Goals

1. Use web dev best practices
2. Improve TypeScript
3. Keep [PageSpeed](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fsource-285017.uc.r.appspot.com%2F&tab=desktop) score > 90

-   Current score is ~90-100, but need to make it real by adding services, logging..etc and use that score

## TODO

-   [x] Cleanup unused packages
-   [ ] Add unit tests
-   [x] Add integration tests
-   [ ] Add visual regression tests
-   [x] Add performance tests
-   [ ] Add accessibility tests
-   [x] Add more pages
-   [ ] Add real API services
-   [ ] Update documentation
-   [ ] Create virtual scroller
-   [ ] Migrate Javascript modules to TypeScript

## Contributions welcome!

Can start with the list of items in the TODO section.
