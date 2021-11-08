import "./styles/global.scss";

let app;

// Dynamically import component
// @ts-ignore
import("./App.svelte").then((module) => {
    const svelteComponent = module.default;

    app = new svelteComponent({
        target: document.body,
    });
});

export default app;
