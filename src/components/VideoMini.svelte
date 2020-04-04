<script>
    import { goto } from '@sapper/app';
    export let videoname = 'elvis';

    function handleSubmit() {
        console.log('mdfasd');
        goto(`http://localhost:3000/danceposeaitor?video=${videoname}`);
    }
</script>

<div class="video-card m-2 flex items-center justify-center" style="">

    <div class="absolute" on:click={handleSubmit}>
        <img src="playermini.svg" alt="Play" />
    </div>

    <div>
        <img src="video-one-mini.png" alt="Video 1" />
    </div>

</div>
