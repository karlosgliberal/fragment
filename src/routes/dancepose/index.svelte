<script>
    import Page from '../../components/Page.svelte';
    import SimpleSketch from '../../components/SimpleSketch.svelte';
    import P5Canvas from '../../components/P5Canvas.svelte';
</script>

<Page>
    <h1 class="text-">Dancepose</h1>
    <p class="text">Pequeñas piezas de imagineria</p>
    <P5Canvas sketch={SimpleSketch} />
    <a class="text-white" href="contacto">contacto</a>
</Page>
