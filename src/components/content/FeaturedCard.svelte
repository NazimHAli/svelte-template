<script>
    export let card = {};
</script>

<div class="animated fadeIn">
    <div class="grid justify-center">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Arch Linux"
            role="img"
            class="arch transition duration-500 ease-in-out transform
            hover:scale-110"
            width="80"
            height="80"
            viewBox="0 0 512 512"
        >
            <path
                d="m255.97 71.5c-14.288 35.029-22.905 57.942-38.812 91.93 9.753
                10.338 21.724 22.378 41.166
                35.975-20.902-8.601-35.159-17.236-45.814-26.197-20.358
                42.481-52.254 102.992-116.98 219.292 50.873-29.37 90.308-47.476
                127.06-54.385-1.578-6.788-2.475-14.13-2.414-21.791l.06-1.629c.807-32.593
                17.762-57.657 37.846-55.955 20.085 1.702 35.696 29.519 34.889
                62.111-.152 6.133-.843 12.033-2.052 17.505 36.353 7.111 75.367
                25.172 125.551
                54.144-9.896-18.218-18.728-34.64-27.163-50.281-13.286-10.297-27.144-23.7-55.411-38.208
                19.429 5.048 33.341 10.873 44.184
                17.384-85.757-159.666-92.702-180.882-122.11-249.895z"
                fill="#1793d1"></path>
        </svg>
    </div>
    <div class="flex-grow">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
            {card.title}
        </h2>
        <p class="leading-relaxed text-base">{card.description}</p>
        <a href="#12" class="mt-3 text-blue-500 inline-flex items-center">
            Click Meow
            <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
            >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
        </a>
    </div>
</div>
