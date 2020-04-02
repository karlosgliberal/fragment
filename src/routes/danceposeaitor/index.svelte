<script>
    import Page from '../../components/Page.svelte';
    import NavSlim from '../../components/NavSlim.svelte';
    import VideoMini from '../../components/VideoMini.svelte';
    import Footer from '../../components/Footer.svelte';
    // import Dancehuman from './Dancehuman.svelte';
    import SimpleSketch from './sketch.svelte';
    import P5Canvas from '../../components/P5Canvas.svelte';

    $: radius = 0.2;
    function handleMessage(event) {
        alert(event.detail.radius);
        // radius = event.detail.radius;
    }
</script>

<div class="bg-white">

    <NavSlim />

    <div class="flex flex-col xl:flex-row pt-12 mt-2">
        <div class="flex justify-center">

            <div class="bg-white xl:px-5 px-2 mx-2 xl:mx-10">
                <div class="flex content-center flex-col">

                    <div class="pt-4">
                        <!-- <Dancehuman on:message={handleMessage} /> -->
                    </div>
                </div>

            </div>

        </div>
        <div class="flex items-center column justify-center">
            <P5Canvas sketch={SimpleSketch} width="700" height="525" />

            <div class="">
                <div class="title-border py-3 text-center">Vídeos</div>
                <div class="flex justify-center flex-col">
                    <VideoMini />
                    <VideoMini />
                    <VideoMini />
                    <VideoMini />
                </div>
            </div>
        </div>
    </div>

    <Page />
    <Footer />
</div>
