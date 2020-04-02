<script>
    import Page from '../../components/Page.svelte';
    import NavSlim from '../../components/NavSlim.svelte';
    import VideoMini from '../../components/VideoMini.svelte';
    import Footer from '../../components/Footer.svelte';
    import Dancehuman from './Dancehuman.svelte';
    import SimpleSketch from './sketch.svelte';
    import P5Canvas from '../../components/P5Canvas.svelte';

    function handleMessage(event) {
        alert(event.detail.text);
    }
</script>

<div class="bg-white">

    <NavSlim />

    <div class="flex flex-col xl:flex-row pt-12 mt-2">
        <div class="w-full xl:w-1/3 flex items-center justify-center p-4">

            <div class="w-full h-auto bg-white border rounded-lg p-4">
                <div class="flex content-center flex-col">
                    <p class="font-lato text-xl text-center py-3" />
                    <div class="pt-4">
                        <Dancehuman />
                        <!-- <img class="center" src={Dancehuman} alt="" /> -->
                    </div>
                </div>

            </div>

        </div>
        <div
            class="w-full xl:w-2/3 flex Xitems-center Xjustify-center
            overflow-hidden">
            <P5Canvas sketch={SimpleSketch} width="960" height="540" />

        </div>
    </div>

    <div class="container mx-auto py-10">
        <div class="title-border">Play with more videos</div>
        <div
            class="flex justify-center xl:justify-between flex-wrap flex-column
            lg:flex-row content-around">
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
