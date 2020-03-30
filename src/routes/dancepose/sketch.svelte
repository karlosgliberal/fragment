<script>
    import Slider from '../../components/Slider.svelte';
    export let target;
    export let p5;
    export let width = 960;
    export let height = 540;

    let targetP5 = target;
    let classifier;
    let img;
    let video;
    let poseNet;
    let poses = [];
    let canvas;

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

    var volumen = 0.8;
    var sound = false;
    var pause = false;
    var choreography = true;
    var videoImagen = true;
    let radius = 0.5;

    export function preload() {}

    function modelReady() {
        //select("#status").html("Model Loaded");
    }

    export function setup() {
        canvas = p5.createCanvas(960, 540);
        canvas.mousePressed(canvasMousePressed);
        video = p5.createVideo('fredastaire.mp4', videoLoaded);
        poseNet = ml5.poseNet(video, modelReady);
        poseNet.on('pose', function(results) {
            poses = results;
        });
        video.hide();
        colors[0] = p5.color(247, 23, 53, 220);
        colors[1] = p5.color(65, 234, 212, 220);
        colors[2] = p5.color(255, 159, 28, 220);

        colors[3] = p5.color(247, 23, 53, 220);
        colors[4] = p5.color(255, 255, 255, 220);
        colors[5] = p5.color(1, 22, 39, 220);

        p5.strokeWeight(2);
        p5.fill(255);
        p5.angleMode(p5.DEGREES);
        p5.strokeJoin(p5.ROUND);
        p5.textAlign(p5.CENTER, p5.CENTER);
        p5.textSize(40);
    }

    export function draw() {
        p5.background(0);
        if (!clicked) {
            p5.text('PLAY', width / 2, height / 2);
        }

        if (clicked) {
            if (pause) {
                video.pause();
            } else {
                video.play();
            }
        }

        video.volume(volumen);
        p5.image(video, 0, 0, width, height);
        drawParticles(paso);

        if (choreography) {
            if (video.time() >= 29.5 && video.time() <= 53) {
                paso = 'Ankle';
            }
        } else {
            paso = bodyPoint;
        }

        for (let i = 0; i < particles.length; i++) {
            particles[i].display();
        }

        for (let j = 0; j < particles.length; j++) {
            if (particles[j].isFinished) {
                if (p5.frameCount % 50 == 0) {
                    particles.splice(j, 1);
                }
            }
        }
    }

    function stopSketch() {
        video.volume(0);
        video.stop();
        clicked = false;
    }

    function videoLoaded() {
        video.size(960, 540);
    }

    function canvasMousePressed() {
        if (!clicked) {
            video.volume(0);
            video.loop();
            clicked = true;
        }
    }

    function drawParticles(bodyPoint) {
        for (let i = 0; i < poses.length; i++) {
            let pose = poses[i].pose;
            for (let j = 0; j < pose.keypoints.length; j++) {
                let keypoint = pose.keypoints[j];
                if (
                    p5.frameCount % 2 == 0 &&
                    (keypoint.part === 'right' + bodyPoint ||
                        keypoint.part === 'left' + bodyPoint) &&
                    keypoint.score > 0.15
                ) {
                    createParticle(
                        keypoint.position.x,
                        keypoint.position.y,
                        paso
                    );
                }
            }
        }
    }

    function createParticle(keypointx, keypointy, paso) {
        let targetX = keypointx;
        let targetY = keypointy;

        let randomTheta = p5.random(360);
        let randomR = p5.random(5);

        let X = targetX + randomR * p5.cos(randomTheta);
        let Y = targetY + randomR * p5.sin(randomTheta);

        let dis = p5.dist(targetX, targetY, X, Y);
        let C;

        C = p5.floor(p5.random(3, 6));
        let Rmax = dis > 20 ? 35 - dis : p5.random(2, 8);
        particles.push(new Particle(X, Y, C, Rmax, paso));
        //  particles.push(new Particle(X, Y, C, Rmax, paso));
    }

    class Particle {
        constructor(tmpX, tmpY, tmpC, tmpRmax, paso) {
            this.pos = p5.createVector(tmpX, tmpY);
            this.paso = paso;
            this.rMax = tmpRmax;
            this.theta = p5.random(360);
            this.thetaSpeed = p5.random(-4);
            this.r = 0;
            this.delta = 0;
            this.speed = (1 * 1.5) / 30;
            this.isDeg = false;
            this.isFinished = false;
            this.colorIndex = tmpC;
            this.ySpeed = 2;
            this.xNoise = p5.random(1.0);
        }

        display() {
            if (!this.isDeg) {
                // this.r = this.rMax * e.maclaurinCosine(this.delta);
                this.r = this.rMax * p5.cos(this.delta);
                this.delta += this.speed;
                if (this.delta > 1.0) {
                    this.delta = 1.0;
                    this.isDeg = true;
                }
            } else {
                this.r = this.rMax * p5.sin(this.delta);
                this.delta -= this.speed * 1.5;
                if (this.delta < 0.0) {
                    this.delta = 0.0;
                    this.isFinished = true;
                }
            }
            this.pos.x =
                this.pos.x +
                this.xNoise +
                p5.map(p5.noise(this.xNoise), 0, 1, -5, 5);

            p5.noFill();
            p5.stroke(colors[this.colorIndex]);

            p5.push();
            p5.translate(this.pos.x, this.pos.y);
            p5.rotate(this.theta);

            // if (paso == "default") {
            p5.rect(this.r, this.r, this.r * radius, this.r * radius);
            p5.strokeWeight(3);
            //point(10, 10);}
            p5.pop();

            this.theta += this.thetaSpeed;
            this.pos.y -= this.ySpeed;

            // if (paso == "default") {
            // } else {
            //   this.pos.y -= this.ySpeed;
            // }
            // //this.pos.x -= this.ySpeed;
            this.xNoise += 0.01;
        }
    }
</script>

<button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    label="Boton"
    on:click={stopSketch}>
    ..
</button>
<Slider label="Radius" bind:value={radius} />
