<script>
    import Page from '../../components/Page.svelte';
    import SimpleSketch from './sketch.svelte';
    import P5Canvas from '../../components/P5Canvas.svelte';
</script>

<Page>
    <div class="bg-darkblue text-white">
        <h1 class="text-graysoft">AAAAAAAA</h1>
    </div>
    <h1 class="text-">Dancepose</h1>
    <p class="text">Pequeñas piezas de imagineria</p>
    <P5Canvas sketch={SimpleSketch} width="960" height="540" />
    <a class="text-white" href="contacto">contacto</a>
</Page>
