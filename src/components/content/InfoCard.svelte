<script>
    export let cardTitle;
    export let cardDescription;

</script>

<div
    id="infocard"
    class="rounded-lg shadow-lg bg-white my-3 border-solid border-4
    border-gray-200 transition duration-1000 ease-in-out opacity-0"
>
    <div class="flex justify-between border-b border-gray-100 px-5 py-4">
        <div>
            <span class="font-bold text-gray-700 text-lg">{cardTitle}</span>
        </div>
    </div>

    <div class="px-10 py-5 text-gray-600">{cardDescription}</div>

    <div class="px-5 py-4 flex justify-end">
        <button
            class="text-sm py-2 px-3 text-gray-500 hover:text-gray-600
            transition duration-150"
        >
            Read more
        </button>
    </div>
</div>
