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

    <div class="flex h-64">
        <div class="w-4/12 bg-gray-300 h-auto flex items-center justify-center">
            uno
        </div>
        <div
            class="w-8/12 bg-gray-500 h-auto flex items-center justify-center
            overflow-hidden">
            aqui video
        </div>
    </div>

    <div class="container mx-auto py-5 ">
        <div class="title-border py-5">More videos</div>
        <div class="flex justify-between">
            <VideoMini />
            <VideoMini />
            <VideoMini />
            <VideoMini />
            <VideoMini />
        </div>
    </div>

    <Page />
</div>
