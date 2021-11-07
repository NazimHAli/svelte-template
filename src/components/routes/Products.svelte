<script>
    const productList = [
        { title: "Product 1", imageURL: "https://placeimg.com/250/150/nature" },
        { title: "Product 2", imageURL: "https://placeimg.com/250/150/nature" },
        { title: "Product 3", imageURL: "https://placeimg.com/250/150/nature" },
        { title: "Product 4", imageURL: "https://placeimg.com/250/150/nature" },
        { title: "Product 5", imageURL: "https://placeimg.com/250/150/nature" },
        { title: "Product 6", imageURL: "https://placeimg.com/250/150/nature" },
        { title: "Product 7", imageURL: "https://placeimg.com/250/150/nature" },
        { title: "Product 8", imageURL: "https://placeimg.com/250/150/nature" },
        { title: "Product 9", imageURL: "https://placeimg.com/250/150/nature" },
        {
            title: "Product 10",
            imageURL: "https://placeimg.com/250/150/nature",
        },
        {
            title: "Product 11",
            imageURL: "https://placeimg.com/250/150/nature",
        },
        {
            title: "Product 12",
            imageURL: "https://placeimg.com/250/150/nature",
        },
    ];
</script>

<section
    class="text-gray-500 body-font container mx-auto animated fadeIn delay-700"
>
    <div class="container px-5 my-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
            <h1
                class="sm:text-3xl text-2xl font-medium title-font mb-4
                text-gray-900"
            >
                Products Page
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Main description
            </p>
        </div>
        <div class="flex content-between flex-wrap -m-4">
            {#each productList as item}
                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <div
                        class="bg-size bg-cover bg-center h-48"
                        style="background-image: url({item.imageURL})"
                    ></div>
                    <div class="mt-4">
                        <h3
                            class="text-gray-500 text-xs tracking-widest
                            title-font mb-1"
                        >
                            CATEGORY
                        </h3>
                        <h2 class="text-white title-font text-lg font-medium">
                            {item.title}
                        </h2>
                        <p class="mt-1">$16.00</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style lang="scss">
    .container {
        background-color: #fff;
    }
</style>
