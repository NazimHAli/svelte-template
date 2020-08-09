<style>
  .hero {
    @apply shadow-inner;
    @apply py-10;
    @apply bg-gray-900;
    /* background: #7f7fd5;
    background: linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5); */

    background-image: radial-gradient(
        circle at 16% 83%,
        rgba(148, 148, 148, 0.06) 0%,
        rgba(148, 148, 148, 0.06) 50%,
        rgba(63, 63, 63, 0.06) 50%,
        rgba(63, 63, 63, 0.06) 100%
      ),
      radial-gradient(
        circle at 68% 87%,
        rgba(66, 66, 66, 0.06) 0%,
        rgba(66, 66, 66, 0.06) 50%,
        rgba(105, 105, 105, 0.06) 50%,
        rgba(105, 105, 105, 0.06) 100%
      ),
      radial-gradient(
        circle at 38% 50%,
        rgba(123, 123, 123, 0.06) 0%,
        rgba(123, 123, 123, 0.06) 50%,
        rgba(172, 172, 172, 0.06) 50%,
        rgba(172, 172, 172, 0.06) 100%
      ),
      linear-gradient(90deg, hsl(18, 0%, 1%), hsl(18, 0%, 1%));
  }
</style>

<section class="hero text-white">
  <div
    class="container mx-auto flex flex-wrap flex-col md:flex-row items-center"
  >
    <!--Left Col-->
    <div
      class="flex flex-col w-full md:w-3/5 justify-center items-start
      text-center md:text-left animated fadeInLeft"
    >
      <p class="uppercase w-full">My awesome message right here ma!</p>
      <h1 class="my-4 text-5xl font-bold leading-tight text-gray-100">
        Second awesome message to everyone!!!
      </h1>
      <p class="leading-normal text-2xl mb-8">Third sub message!!!</p>
    </div>
    <!--Right Col-->
    <div class="w-full md:w-2/5 text-center">
      <p class="animated fadeInRight">Right side text</p>
    </div>
  </div>
</section>
