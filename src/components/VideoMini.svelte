<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function playVideo() {
        dispatch('message', {
            name: 'fredand',
        });
    }
</script>

<div class="video-card m-2 flex items-center justify-center" style="">

    <div class="absolute" on:click={playVideo}>
        <img src="playermini.svg" alt="Play" />
    </div>

    <div>
        <img src="video-one-mini.png" alt="Video 1" />
    </div>

</div>
