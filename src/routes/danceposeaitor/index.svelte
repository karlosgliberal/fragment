<script>
    import Page from '../../components/Page.svelte';
    import NavSlim from '../../components/NavSlim.svelte';
    import SimpleSketch from './sketch.svelte';
    import P5Canvas from '../../components/P5Canvas.svelte';
    import VideoMini from '../../components/VideoMini.svelte';
    import Data from './slide-data.js';
</script>

<div class="bg-graysoft">

    <NavSlim />

    <div class="flex pt-12 mt-2">
        <div class="w-4/12 bg-gray-300 h-auto flex items-center justify-center">
            <div class="w-full h-auto bg-white rounded-sm">
                <p />
            </div>
        </div>
        <div class="w-8/12 flex items-center justify-center overflow-hidden">
            <img src="video.png" alt="" />
        </div>
    </div>

    <div class="container mx-auto py-5 ">
        <div class="title-border py-5">More videos</div>
        <div
            class="flex justify-between flex-wrap flex-column lg:flex-row
            content-around">
            <VideoMini />
            <VideoMini />
            <VideoMini />
            <VideoMini />
            <VideoMini />
        </div>
    </div>

    <Page />
</div>
