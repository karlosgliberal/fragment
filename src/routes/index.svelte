<script>
    import Page from '../components/Page.svelte';
</script>

<style>
    #centercenter {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 80vh;
    }
</style>

<svelte:head>
    <title>Fragment</title>
</svelte:head>
<div id="centercenter" class="flex justify-center w-full">
    <div class="flex">
        <img src="fragment.png" alt="" />
    </div>

</div>
<div class="flex justify-center w-">
    <div class="flex">
        <a
            class="inline-block border-solid border hover:border-black
            border-gray-500 uppercase py-3 px-10 transition duration-150
            ease-in-out transform hover:scale-105"
            href="dancepose">
            Dancepose
        </a>
    </div>
</div>
