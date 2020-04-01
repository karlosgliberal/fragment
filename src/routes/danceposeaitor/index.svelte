<script>
    import Page from '../../components/Page.svelte';
    import NavSlim from '../../components/NavSlim.svelte';
    import VideoMini from '../../components/VideoMini.svelte';
    import Footer from '../../components/Footer.svelte';
</script>

<div class="bg-graysoft">

    <NavSlim />

    <div class="flex pt-12 mt-2">
        <div class="w-4/12 bg-gray-300 h-auto flex items-center justify-center">
            <div class="w-full h-auto bg-white rounded-sm">
                <div class="flex content-center">
                    <p class="font-lato text-xl">
                        Click on the names to change the shapes
                    </p>
                </div>

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
    <Footer />
</div>
