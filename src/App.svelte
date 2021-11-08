<script lang="ts">
    import { onMount } from "svelte";
    import Router from "./utils/router";

    /*
     * Global components
     */
    import Navigation from "./components/Navigation.svelte";
    import Footer from "./components/Footer.svelte";
    import type { SvelteComponent } from "svelte/internal";

    let currentComponent: SvelteComponent;
    let currentPage: string;

    function setCurrentPage(name) {
        import(`./components/routes/${name}.svelte`).then((module) => {
            currentComponent = module.default;
            currentPage = name;
        });
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
</script>

<main>
    <Navigation currentPage="{currentPage}" />

    <!-- Dynamically select component based on currentComponent value -->
    <svelte:component this="{currentComponent}" />

    <Footer />
</main>
