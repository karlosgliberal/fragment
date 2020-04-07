<script>
    export let segment;
    console.log(segment);

    function handleSubmit() {
        console.log('mdfasd');
        window.location.replace(`/dancepose`);
    }
</script>

<div class="flex bg-black py-3">
    <div class="w-1/3 h-6 flex justify-star items-center" />
    <div class="w-1/3 flex items-center justify-center h-6">
        <div>
            <img src="logo.svg" alt="Dance pose" />
        </div>
    </div>
    <div class="w-1/3 flex items-center justify-end h-6">
        <div class="pr-4">
            {#if segment === undefined}
                <a
                    href="dancepose/about"
                    class="uppercase font-bold text-white">
                    About
                </a>
            {:else}
                <button
                    class="uppercase font-bold text-white"
                    on:click={handleSubmit}>
                    Home
                </button>
            {/if}
        </div>
    </div>
</div>
