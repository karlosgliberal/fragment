<script>
    import Page from '../../components/Page.svelte';
    import NavSlim from '../../components/NavSlim.svelte';
    import SimpleSketch from './sketch.svelte';
    import P5Canvas from '../../components/P5Canvas.svelte';
</script>

<div class="bg-graysoft">

    <NavSlim />

    <div class="flex h-64">
        <div class="w-4/12 bg-gray-300 h-auto flex items-center justify-center">
            uno
        </div>
        <div
            class="w-8/12 bg-gray-500 h-auto flex items-center justify-center
            overflow-hidden">
            dos
        </div>
    </div>
    <div class="container md-auto">
        <div class="bg-white overflow-hidden p-4 p-0">
            <div
                class="h-20 w-20 mx-auto rounded-lg bg-red-500 sm:bg-green-500
                md:bg-blue-500 lg:bg-pink-500 xl:bg-teal-500" />
        </div>
    </div>

    <Page />
</div>
