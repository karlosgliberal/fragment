<script>
    export let Data;
</script>

<div class="slider">
    {#each Data as img}{img.url}{/each}
</div>
<div class="buttons" />
