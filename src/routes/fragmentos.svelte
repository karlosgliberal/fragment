<script>
    import Page from '../components/Page.svelte';
    import SimpleSketch from '../components/SimpleSketch.svelte';
    import P5Canvas from '../components/P5Canvas.svelte';
</script>

<svelte:head>
    <!-- <script src="p5.func.js">

    </script> -->
    <script src="https://cdn.jsdelivr.net/npm/p5@1.0.0/lib/p5.js">

    </script>
    <script src="https://unpkg.com/ml5@0.5.0/dist/ml5.min.js">

    </script>
    <title>About</title>
</svelte:head>

<Page>
    <h1 class="text-white">Fragmentos</h1>
    <p class="text-white">Pequeñas piezas de imagineria</p>
    <P5Canvas sketch={SimpleSketch} />
</Page>
