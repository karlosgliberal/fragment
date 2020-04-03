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

<div class="flex flex-col justify-between w-screen h-screen">
    <NavSlim />
    <div
        class="flex items-center justify-center border border-red-600 border-1">
        <div class="flex justify-center content-center">
            <P5Canvas sketch={SimpleSketch} width="700" height="525" />
        </div>
    </div>
    <Footer />
</div>
