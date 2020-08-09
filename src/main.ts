import type { SvelteComponent } from "svelte/internal";

let app: SvelteComponent;

// Dynamically import component
import("./App.svelte").then((module) => {
  const svelteComponent = module.default;

  app = new svelteComponent({
    target: document.body,
    props: {
      name: "svelte-app",
    },
  });
});

export default app;
