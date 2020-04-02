<script>
    import Page from '../../components/Page.svelte';
    import NavSlim from '../../components/NavSlim.svelte';
    import VideoMini from '../../components/VideoMini.svelte';
    import Footer from '../../components/Footer.svelte';
    // import Dancehuman from './Dancehuman.svelte';
    import SimpleSketch from './sketch.svelte';
    import P5Canvas from '../../components/P5Canvas.svelte';
</script>

<div class="bg-white">

    <NavSlim />
    <P5Canvas sketch={SimpleSketch} width="700" height="525" />

    <Page />
    <Footer />
</div>
