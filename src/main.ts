import type { SvelteComponentDev } from 'svelte/internal';

let app: SvelteComponentDev;

// Dynamic import example
import('./App.svelte').then(module => {
  const svelteComponent = module.default;

  app = new svelteComponent({
    target: document.body,
    props: {
      name: "world",
    },
  });
});

// Delayed dynamic import example
// setTimeout(() => {
//   import(/* webpackPreload: true */ './App.svelte').then(module => {
//     const svelteComponent = module.default;

//     app = new svelteComponent({
//       target: document.body,
//       props: {
//         name: "world",
//       },
//     });
//   })
// }, 1.0 * 1000);

export default app;
