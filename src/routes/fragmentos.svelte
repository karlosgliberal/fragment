<script>
    import Page from '../components/Page.svelte';
    import SimpleSketch from '../components/SimpleSketch.svelte';
    import P5Canvas from '../components/P5Canvas.svelte';
</script>

<svelte:head>
    <script src="https://cdn.jsdelivr.net/npm/p5@1.0.0/lib/p5.js">

    </script>
    <title>About</title>
</svelte:head>

<Page>
    <h1 class="text-white">Fragmentos</h1>

    <p class="text-white">Pequeñas piezas de imagineria</p>
    <P5Canvas sketch={SimpleSketch} color="#99B7FF" />
</Page>
