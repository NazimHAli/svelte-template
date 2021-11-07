<style lang="scss">
    @import "src/styles/navigation";
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
    class="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2 shadow-md"
>
    <div class="flex-1 flex justify-between items-center">
        <a href="{navItems[0].link}">
            <img
                src="./images/colorful-gradient-abstract-logo/3410492.jpg"
                alt="Site icon"
                width="80px"
                height="96px"
                class="logo-centered"
            />
        </a>
    </div>

    <label for="menu-toggle" class="pointer-cursor lg:hidden block">
        <button>Menu</button>
    </label>

    <div class="md:hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
        <nav>
            <ul class="nav-list">
                {#each navItems as item}
                    <li>
                        <a
                            class:active="{currentPage === item.name}"
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
