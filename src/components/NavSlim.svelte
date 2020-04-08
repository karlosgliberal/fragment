<script>
    export let segment;
    console.log(segment);

    function handleSubmit() {
        console.log('mdfasd');
        window.location.replace(`/dancepose`);
    }
</script>

<style>
    .asimetrico {
        background-image: linear-gradient(#000, #000000);
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 56%);
        /* clip-path: polygon(100% 100%, 0 100%, 0 0, 100% calc(100% - 4vw)); */
        /* change the calc height to a percentage height to get alternate responsive behavior*/
    }
    .logodance {
        width: 235px;
        height: auto;
    }
</style>

<div class="flex py-6">
    <div class="w-1/3 h-6 flex justify-star items-center" />
    <div class="w-1/3 flex items-center justify-center h-6">
        <div class="pt-5">
            <img class="logodance" src="logo.svg" alt="Dance pose" />
        </div>
    </div>
    <div class="w-1/3 flex items-center justify-end h-6">
        <div class="pr-6">
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
