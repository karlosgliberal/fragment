<script context="module">
    export async function preload(page, session) {
        console.log('movdiasssss');
    }
</script>

<script>
    import Page from '../../components/Page.svelte';
    import NavSlim from '../../components/NavSlim.svelte';
    import Footer from '../../components/Footer.svelte';
    import SimpleSketch from './sketch.svelte';
    import P5Canvas from '../../components/P5Canvas.svelte';
    import VideoMini from '../../components/VideoMini.svelte';
</script>

<div class="flex flex-col justify-between w-screen h-screen bg-a">
    <NavSlim />
    <div class="flex justify-center">
        <div class="flex justify-center content-center pl-100">
            <div id="datGui" class="datGui text-black" />
            <div id="logodp" class="fixed m-24">
                <img src="logodp.gif" alt="" />
            </div>
            <P5Canvas sketch={SimpleSketch} width="960" height="540" />
        </div>
        <div
            class=" flex flex-col videosmini justify-between h-full text-center
            pl-4">
            <VideoMini />
            <VideoMini videoname="fred" />
            <VideoMini />
            <VideoMini />
        </div>

    </div>
    <Footer />
</div>
