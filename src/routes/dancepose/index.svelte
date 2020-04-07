<script>
    import SimpleSketch from './sketch.svelte';
    import P5Canvas from '../../components/P5Canvas.svelte';
    import VideoMini from '../../components/VideoMini.svelte';
    import videoData from './video-data.js';
</script>

<!-- <style>
    .asimetrico {
        background-image: linear-gradient(#000000, #000000);
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 4vw));
        /* change the calc height to a percentage height to get alternate responsive behavior*/
    }
</style> -->

<div class="flex justify-center pt-20 pb-16">
    <div class="flex justify-center content-center pl-100 wrap-canvas">
        <div id="datGui" class="datGui text-black" />
        <div id="logodp" class="fixed m-24 pl-7">
            <img src="logodp.gif" alt="" />
        </div>
        <P5Canvas sketch={SimpleSketch} width="960" height="540" />
    </div>
    <div
        class=" flex flex-col videosmini justify-between h-full text-center pl-4
        pt-2">
        {#each videoData as { id, img }, i}
            <VideoMini {id} {img} />
        {/each}
    </div>

</div>
