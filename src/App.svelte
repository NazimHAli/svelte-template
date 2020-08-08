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
  import HomePage from "./components/routes/HomePage.svelte";
  import Meow from "./components/routes/Meow.svelte";
  import Products from "./components/routes/Products.svelte";

  let currentComponent: typeof About;

  onMount(() => {
    const router = new Router({
      mode: "hash",
      root: "/",
    });

    router
      .addRoute(/about/, () => {
        currentComponent = About;
      })
      .addRoute(/contact/, () => {
        currentComponent = Contact;
      })
      .addRoute(/meow/, () => {
        currentComponent = Meow;
      })
      .addRoute(/products/, () => {
        currentComponent = Products;
      })
      .addRoute("", () => {
        currentComponent = HomePage;
      });
  });
</script>

<p class="hidden">{name}</p>

<GlobalStyles />

<Navigation />

<svelte:component this={currentComponent} />

<Footer />
