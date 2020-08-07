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
        console.log("about page");
      })
      .addRoute(/contact/, () => {
        currentComponent = Contact;
        console.log("contact page");
      })
      .addRoute(/meow/, () => {
        currentComponent = Meow;
        console.log("meow page");
      })
      .addRoute(/products/, () => {
        currentComponent = Products;
        console.log("products page");
      })
      .addRoute("", () => {
        currentComponent = HomePage;
        console.log("home page");
      });
  });
</script>

<p class="hidden">{name}</p>

<GlobalStyles />

<Navigation />

<svelte:component this={currentComponent} />

<Footer />
