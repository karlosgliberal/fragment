<script>
    import Page from '../../components/Page.svelte';
    import NavSlim from '../../components/NavSlim.svelte';
    import SimpleSketch from './sketch.svelte';
    import P5Canvas from '../../components/P5Canvas.svelte';
</script>

<NavSlim />

<Page>
    <h1 class="text-">Dancepose</h1>
    <p class="text">Pequeñas piezas de imagineria</p>
    <P5Canvas sketch={SimpleSketch} width="960" height="540" />

</Page>
