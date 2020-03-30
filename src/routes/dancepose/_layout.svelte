<script>
    export let segment;
</script>

<svelte:head>
    <title>Dance Pose</title>
    <meta name="segment" content={segment} />
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap"
        rel="stylesheet" />
    <style>
        .quicksand {
            font-family: 'Nunito', sans-serif;
        }
    </style>
</svelte:head>

<slot />
