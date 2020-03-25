<script>
    import Nav from '../components/Nav.svelte';

    export let segment;
</script>

<svelte:head>
    <!-- <script src="p5.func.js">

    </script> -->
    <script src="https://cdn.jsdelivr.net/npm/p5@1.0.0/lib/p5.js">

    </script>
    <script src="https://unpkg.com/ml5@0.5.0/dist/ml5.min.js">

    </script>
</svelte:head>

<Nav {segment} />

<main class="flex-grow relative h-full flex flex-col">
    <slot />
</main>
