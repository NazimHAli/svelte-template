<script lang="ts">
  export let name: string;
  import Navigation from "./components/Navigation.svelte";
  import Footer from "./components/Footer.svelte";
  import GlobalStyles from "./components/GlobalStyles.svelte";
  import Hero from "./components/Hero.svelte";
  import ContentSection from "./components/ContentSection.svelte";
  import Featured from "./components/Featured.svelte";
</script>

<style lang="scss">
  @import "./src/styles/variables.scss";

  .hline {
    background-image: linear-gradient(
        250deg,
        rgba(151, 151, 151, 0.05) 0%,
        rgba(151, 151, 151, 0.05) 33.333%,
        rgba(222, 222, 222, 0.05) 33.333%,
        rgba(222, 222, 222, 0.05) 66.666%,
        rgba(56, 56, 56, 0.05) 66.666%,
        rgba(56, 56, 56, 0.05) 99.999%
      ),
      linear-gradient(
        311deg,
        rgba(70, 70, 70, 0.05) 0%,
        rgba(70, 70, 70, 0.05) 33.333%,
        rgba(210, 210, 210, 0.05) 33.333%,
        rgba(210, 210, 210, 0.05) 66.666%,
        rgba(137, 137, 137, 0.05) 66.666%,
        rgba(137, 137, 137, 0.05) 99.999%
      ),
      linear-gradient(
        272deg,
        rgba(106, 106, 106, 0.05) 0%,
        rgba(106, 106, 106, 0.05) 33.333%,
        rgba(226, 226, 226, 0.05) 33.333%,
        rgba(226, 226, 226, 0.05) 66.666%,
        rgba(25, 25, 25, 0.05) 66.666%,
        rgba(25, 25, 25, 0.05) 99.999%
      ),
      linear-gradient(90deg, rgb(159, 18, 219), rgb(240, 47, 230));
  }
</style>

<GlobalStyles />

<p class="hidden">{name}</p>
<Navigation />
<Hero />
<section class="container mx-auto">
  <Featured />
</section>
<span
  class="flex px-2 h-64 w-full hline my-10 text-white text-5xl items-center
  justify-center uppercase">
  A big beautiful title right here muhahhaaha
</span>
<section class="container mx-auto">
  <ContentSection />
</section>

<Footer />
