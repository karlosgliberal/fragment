<script>
    // Import some UI
    import Slider from './Slider.svelte';
    // import p5func from './p5.func.js';

    // This will get passed in with the P5 instance
    export let p5;

    // Size of the canvas in pixels
    export let width = 256;
    export let height = 256;
    let classifier;
    let img;
    let video;
    let poseNet;
    let poses = [];

    let particles = [];
    // let e = new p5.Ease();
    let ox, oy;
    let colors = [];
    const canvasScale = 0.5;
    let clicked = false;
    let paso = 'Wrist';
    var bodyPoint = [
        //"Nose",
        'Wrist',
        'Eye',
        'Ear',
        'Shoulder',
        'Elbow',
        'Hip',
        'Knee',
        'Ankle',
    ];

    // A prop/variable
    let radius = 0.5;

    export function preload() {}

    // Setup a static artwork
    export function setup() {
        p5.createCanvas(width, height);
        console.log('ml5 version:', ml5.version);
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
