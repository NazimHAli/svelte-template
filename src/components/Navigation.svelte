<script>
  let currentActiveItem = "Home";
  const navItems = [
    { name: "Home", link: "#1" },
    { name: "About", link: "#2" },
    { name: "Products", link: "#3" },
    { name: "Contact", link: "#4" },
    { name: "Meow", link: "#5" },
  ];
</script>

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

<header
  class="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2
  animated fadeIn shadow-md">
  <div class="flex-1 flex justify-between items-center">
    <a href="#12">
      <img
        src="images/colorful-gradient-abstract-logo/3410492.jpg"
        alt="Site icon"
        width="30px" />
    </a>
  </div>

  <label for="menu-toggle" class="pointer-cursor lg:hidden block">
    <a href="#12">
      <p>Menu</p>
    </a>
  </label>

  <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
    <nav>
      <ul
        class="lg:flex items-center justify-between text-base text-gray-800 pt-4
        lg:pt-0">
        {#each navItems as item}
          <li>
            <a
              class:active={currentActiveItem === item.name}
              class="lg:p-4 py-3 px-0"
              href={item.link}
              on:click={() => (currentActiveItem = item.name)}>
              {item.name}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</header>
