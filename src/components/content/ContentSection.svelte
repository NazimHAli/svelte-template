<script>
    import InfoCard from "@/components/content/InfoCard.svelte";
    import createObserver from "@/utils/intersectionObserver";
    import { onMount } from "svelte";

    onMount(() => {
        const elementsToObserve = document.querySelectorAll("#infocard");

        elementsToObserve.forEach((element) => {
            createObserver(element);
        });
    });
</script>

<section class="mt-10 text-gray-800 text-center">
    <h1 class="text-2xl">Add data to your section, just make it smooth.</h1>
    <h3 class="font-light">Section sub-heading because just meow.</h3>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <InfoCard cardTitle="Card 1" cardDescription="Card description 1" />
        <InfoCard cardTitle="Card 2" cardDescription="Card description 2" />
        <InfoCard cardTitle="Card 3" cardDescription="Card description 3" />
    </div>
</section>
