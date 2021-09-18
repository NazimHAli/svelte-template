<style lang="scss">
    li {
        a {
            @apply block;
            @apply relative;
            @apply my-1;
            @apply px-10;
            @apply text-black;
            @apply duration-500;

            &.active {
                background-color: #1793d1;
                @apply text-white;
            }

            &:before {
                content: "";
                @apply absolute;
                @apply top-0;
                @apply left-0;
                @apply w-full;
                @apply h-full;
                @apply border-black;
                @apply border-t-2;
                transform: scaleY(1);
                @apply opacity-0;
                @apply duration-300;
            }
            &:after {
                content: "";
                @apply absolute;
                @apply top-0;
                @apply left-0;
                @apply w-full;
                @apply h-full;
                @apply bg-pink-600;
                transform: scale(0);
                @apply opacity-0;
                @apply duration-300;
                z-index: -1;
            }
            &:hover {
                @apply text-white;
                &:before {
                    transform: scaleY(1);
                    @apply opacity-100;
                }
                &:after {
                    transform: scaleY(1);
                    @apply opacity-100;
                }
            }
        }
    }

</style>

<script lang="ts">
    export let currentPage: string;

    const navItems = [
        { name: "Home", link: "/#/" },
        { name: "About", link: "/#/about" },
        { name: "Products", link: "/#/products" },
        { name: "Contact", link: "/#/contact" },
        { name: "Meow", link: "/#/meow" },
    ];

</script>

<header
    class="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2
    animated fadeIn shadow-md"
>
    <div class="flex-1 flex justify-between items-center">
        <a href="{navItems[0].link}">
            <img
                src="./images/colorful-gradient-abstract-logo/3410492.jpg"
                alt="Site icon"
                width="80rem"
            />
        </a>
    </div>

    <label for="menu-toggle" class="pointer-cursor lg:hidden block">
        <button>Menu</button>
    </label>

    <div class="md:hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
        <nav>
            <ul
                class="lg:flex items-center justify-between text-base
                text-gray-800 pt-4 lg:pt-0"
            >
                {#each navItems as item}
                    <li>
                        <a
                            class:active="{currentPage === item.name}"
                            class="lg:p-4 py-3 px-0"
                            data-test="menu-{item.name.toLowerCase()}"
                            href="{item.link}"
                            on:click="{() => (currentPage = item.name)}"
                        >
                            {item.name}
                        </a>
                    </li>
                {/each}
            </ul>
        </nav>
    </div>
</header>
