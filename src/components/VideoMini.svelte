<script>
    import { goto } from '@sapper/app';
    export let id = 'lalaland';
    export let img = 'lalaland';

    function handleSubmit() {
        console.log('mdfasd');
        window.location.replace(`/dancepose?video=${id}`);
    }
</script>

<div class="video-card m-2 flex items-center justify-center" style="">

    <div class="absolute" on:click={handleSubmit}>
        <img src="playermini.svg" alt="Play" />
    </div>

    <div>
        <img src={img} alt="Video 1" />
    </div>

</div>
