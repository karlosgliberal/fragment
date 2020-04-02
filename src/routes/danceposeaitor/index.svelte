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

<div class="bg-black">

    <NavSlim />

    <div class="flex flex-col xl:flex-row pt-12 mt-2">

        <div class="flex items-center justify-center overflow-hidden">
            <P5Canvas sketch={SimpleSketch} width="960" height="540" />

        </div>
    </div>

    <Page />
    <Footer />
</div>
