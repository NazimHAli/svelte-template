<script lang="ts">
  export let name: string;

  import { onMount } from "svelte";
  import Router from "./utils/router";

  /*
   * Global components
   */
  import GlobalStyles from "./components/GlobalStyles.svelte";
  import Navigation from "./components/Navigation.svelte";
  import Footer from "./components/Footer.svelte";

  /*
   * Components to be routed
   */
  import About from "./components/routes/About.svelte";
  import Contact from "./components/routes/Contact.svelte";
  import Home from "./components/routes/Home.svelte";
  import Meow from "./components/routes/Meow.svelte";
  import Products from "./components/routes/Products.svelte";

  let currentComponent: typeof About;
  let currentPage: string;

  onMount(() => {
    const router = new Router({
      mode: "hash",
      root: "/",
    });

    router
      .addRoute(/about/, () => {
        currentComponent = About;
        currentPage = "About";
      })
      .addRoute(/contact/, () => {
        currentComponent = Contact;
        currentPage = "Contact";
      })
      .addRoute(/meow/, () => {
        currentComponent = Meow;
        currentPage = "Meow";
      })
      .addRoute(/products/, () => {
        currentComponent = Products;
        currentPage = "Products";
      })
      .addRoute("", () => {
        currentComponent = Home;
        currentPage = "Home";
      });
  });
</script>

<p class="hidden">{name}</p>

<GlobalStyles />

<Navigation {currentPage} />

<!-- Dynamically select component based on currentComponent value -->
<svelte:component this={currentComponent} />

<Footer />
