<script>
    import FeaturedCard from "@/components/content/FeaturedCard.svelte";

    const featuredCards = [
        { title: "Title 1", description: "Description content 1" },
        { title: "Title 2", description: "Description content 2" },
        { title: "Title 3", description: "Description content 3" },
    ];
</script>

<section class="text-center item-center text-gray-700 body-font">
    <div class="text-center my-10 animated fadeIn">
        <h1
            class="sm:text-3xl text-2xl font-medium title-font text-gray-900
            mb-4"
        >
            Heading 1
        </h1>
        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Sub-heading 1
        </p>
        <div class="flex mt-6 justify-center">
            <div class="w-48 h-1 rounded-full bg-blue-500 inline-flex"></div>
        </div>
    </div>
    <div class="grid grid-cols-3 justify-center">
        {#each featuredCards as card}
            <FeaturedCard card="{card}" />
        {/each}
    </div>
    <button
        class="flex mx-auto mt-16 text-white bg-gray-900 border-0 py-2 px-8
        focus:outline-none hover:bg-blue-900 rounded text-lg"
    >
        Button
    </button>
</section>
