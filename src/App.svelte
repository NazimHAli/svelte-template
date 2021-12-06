<script lang="ts">
    import { onMount, afterUpdate } from "svelte";
    import Router from "simple-spa-router-ts";

    /*
     * Global components
     */
    import Navigation from "./components/Navigation.svelte";
    import { SvelteComponent, tick } from "svelte/internal";
    import createObserver from "./utils/intersectionObserver";

    let currentComponent: SvelteComponent;
    let currentPage: string;
    let renderFooter: boolean = false;
    let Footer: SvelteComponent;

    function setCurrentPage(name) {
        import(`./components/routes/${name}.svelte`).then((module) => {
            currentComponent = module.default;
            currentPage = name;
        });
    }

    function handleLoadFooter(entries: any[]) {
        if (entries[0].isIntersecting) {
            import("./components/Footer.svelte").then((module) => {
                // @ts-ignore
                Footer = module.default;
            });
        }
    }

    onMount(() => {
        const router = new Router({
            mode: "hash",
            root: "/",
        });

        router
            .addRoute(/about/, () => {
                setCurrentPage("About");
            })
            .addRoute(/contact/, () => {
                setCurrentPage("Contact");
            })
            .addRoute(/meow/, () => {
                setCurrentPage("Meow");
            })
            .addRoute(/products/, () => {
                setCurrentPage("Products");
            })
            .addRoute("", () => {
                setCurrentPage("Home");
            });
    });

    afterUpdate(async () => {
        if (!renderFooter) {
            renderFooter = true;
            await tick();
            setTimeout(() => {
                createObserver(
                    document.getElementById("observerElement"),
                    handleLoadFooter
                );
            }, 500);
        }
    });
</script>

<Navigation currentPage="{currentPage}" />

<!-- Dynamically select component based on currentComponent value -->
<svelte:component this="{currentComponent}" />

<svelte:component this="{Footer}" />
<span id="observerElement"></span>
