<script>
    export let segment;
</script>

<svelte:head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <meta name="author" content="" />
    <meta name="segment" content={segment} />

    <script src="https://cdn.jsdelivr.net/npm/p5@1.0.0/lib/p5.js">

    </script>
    <script src="https://unpkg.com/ml5@0.5.0/dist/ml5.min.js">

    </script>
    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.6/dat.gui.min.js">

    </script>
</svelte:head>

<slot />
