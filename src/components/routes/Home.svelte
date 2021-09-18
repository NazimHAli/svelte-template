<style lang="scss">
    @import "src/styles/variables.scss";
</style>

<script lang="ts">
    export let name: string;

    import Hero from "src/components/content/Hero.svelte";
    import ContentSection from "src/components/content/ContentSection.svelte";
    import Featured from "src/components/content/Featured.svelte";
</script>

<p class="hidden">{name}</p>
<Hero />

<section class="container mx-auto">
    <Featured />
</section>

<span
    class="flex px-2 h-64 w-full hline my-10 text-white text-5xl items-center
    justify-center uppercase"
>
    A big beautiful title right here muhahhaaha
</span>

<section class="container mx-auto">
    <ContentSection />
</section>
