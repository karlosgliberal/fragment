<script>
    import Page from '../../components/Page.svelte';
    import NavSlim from '../../components/NavSlim.svelte';
    import Footer from '../../components/Footer.svelte';
    import SimpleSketch from './sketch.svelte';
    import P5Canvas from '../../components/P5Canvas.svelte';
</script>

<div class="flex flex-col justify-between w-screen h-screen">
    <NavSlim />
    <div class="flex items-center justify-center mr-24">
        <div class="flex justify-center content-center pl-100">
            <div id="datGui" class="text-black" />
            <P5Canvas sketch={SimpleSketch} width="960" height="540" />
        </div>
    </div>
    <Footer />
</div>
