<style lang="scss">
    @import "src/styles/navigation.scss";

    a.active {
        background-color: #1793d1;
        @apply text-white;
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

<header class="animated fadeIn header">
    <div class="header_logo__container">
        <a href="{navItems[0].link}">
            <img
                src="./images/colorful-gradient-abstract-logo/3410492.jpg"
                alt="Site icon"
                width="80px"
                height="96px"
                class="header_logo__img"
            />
        </a>
    </div>

    <label for="menu-toggle" class="menu-toggle">
        <button>Menu</button>
    </label>

    <div class="menu-container" id="menu">
        <nav>
            <ul class="nav-list">
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
