<style lang="scss">
    @import "src/styles/variables.scss";
</style>

<script lang="ts">
    import Hero from "@/components/content/Hero.svelte";
    import ContentSection from "@/components/content/ContentSection.svelte";
    import Featured from "@/components/content/Featured.svelte";
</script>

<main>
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
</main>
