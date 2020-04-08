<script>
    export let segment;
    console.log(segment);

    function handleSubmit() {
        console.log('mdfasd');
        window.location.replace(`/dancepose`);
    }
</script>

<style>
    .logodance {
        width: 235px;
        height: auto;
    }
</style>

<div class="flex py-6 {segment === undefined ? 'bg-dark' : ''}">
    <div class="w-1/3 h-6 flex justify-star items-center" />
    <div class="w-1/3 flex items-center justify-center h-6">
        <div class="pt-10">
            {#if segment === undefined}
                <img class="logodance" src="logo.svg" alt="Dance pose" />
            {:else}
                <img src="logo.svg" alt="Dance pose" />
            {/if}
        </div>
    </div>
    <div class="w-1/3 flex items-center justify-end h-6">
        <div class="pr-10 pt-8">
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
