<script>
    import NavSlim from '../../components/NavSlim.svelte';
    import Footer from '../../components/Footer.svelte';

    export let segment;
</script>

<svelte:head>
    <title>Dance Pose</title>
    <meta name="segment" content={segment} />

</svelte:head>

<div
    class="flex flex-col justify-between w-screen h-screen bg-gray-900
    overflow-hidden">
    <NavSlim {segment} />
    <slot />
    <Footer />
</div>
