<script>
    import SimpleSketch from './sketch.svelte';
    import P5Canvas from '../../components/P5Canvas.svelte';
    import VideoMini from '../../components/VideoMini.svelte';
    import videoData from './video-data.js';
</script>

<div class="flex justify-center">
    <div class="flex justify-center content-center pl-100">
        <div id="datGui" class="datGui text-black" />
        <div id="logodp" class="fixed m-24">
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
