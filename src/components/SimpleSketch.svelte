<script>
    // Import some UI
    import Slider from './Slider.svelte';

    // This will get passed in with the P5 instance
    export let p5;

    // Size of the canvas in pixels
    export let width = 256;
    export let height = 256;

    // A prop/variable
    let radius = 0.5;

    // Setup a static artwork
    export function setup() {
        p5.createCanvas(width, height);
        //p5.noLoop();
    }

    // Render it
    export function draw() {
        p5.background('black');

        const diameter = radius * p5.min(width, height);
        p5.circle(width / 2, height / 2, diameter * p5.frameCount * 0.02);
    }
</script>

<!-- Wire up the GUI to your props -->
<Slider label="Radius" bind:value={radius} />
