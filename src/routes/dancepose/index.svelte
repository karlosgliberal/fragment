<script>
    import SimpleSketch from './sketch.svelte';
    import P5Canvas from '../../components/P5Canvas.svelte';
    import VideoMini from '../../components/VideoMini.svelte';
    import videoData from './video-data.js';
</script>

<style>
    .video-min__wrap {
        height: 540px;
    }
</style>

<div class="flex justify-center pt-10 pb-16">
    <div class="flex justify-center content-center pl-100 wrap-canvas">
        <div id="datGui" class="datGui text-black" />
        <div id="logodp" class="fixed m-24 pl-7">
            <img src="logodp.gif" alt="" />
        </div>
        <P5Canvas sketch={SimpleSketch} width="960" height="540" />
    </div>
    <div
        class=" flex flex-col videosmini video-min__wrap justify-between
        text-center pl-4 pt-2">
        {#each videoData as { id, img }, i}
            <VideoMini {id} {img} />
        {/each}
    </div>

</div>
