<script>
    import { stores } from '@sapper/app';
    import { createEventDispatcher, onMount } from 'svelte';
    import videoData from './video-data.js';

    export let p5;
    export let width = 960;
    export let height = 540;

    const { page } = stores();
    let queryClip = $page.query;

    if (typeof queryClip.video === 'undefined') {
        queryClip.video = 'lalaland';
    }

    let videoContent = videoData.find(x => x.id === queryClip.video);

    let gui,
        pis,
        clip,
        carpertaGui,
        myGui,
        radius,
        video,
        canvas,
        guiContainer,
        poseNet;

    let poses = [];
    let particles = [];
    let clicked = false;
    let sound = false;
    let pause = true;
    let save = false;
    let trail = false;
    let colors = videoContent.color;
    let paso = videoContent.keyPoint;
    let bodyPoint = [
        'Wrist',
        'Eye',
        'Ear',
        'Shoulder',
        'Elbow',
        'Hip',
        'Knee',
        'Ankle',
    ];

    let volumen = 0;
    let textoIntro = 'Load Video';

    export function setup() {
        canvas = p5.createCanvas(960, 540);
        gui = new dat.GUI({ autoPlace: false });

        guiContainer = document.getElementById('datGui');
        guiContainer.appendChild(gui.domElement);

        myGui = new GuiOptions();
        carpertaGui = gui.addFolder('Select options');
        carpertaGui.add(myGui, 'Particle_size', 0, 4);
        carpertaGui.add(myGui, 'Voluen', 0, 1);
        carpertaGui.add(myGui, 'Disable_Video');
        carpertaGui.add(myGui, 'Trail');
        carpertaGui.add(myGui, 'Pause');
        carpertaGui.add(myGui, 'Save');
        carpertaGui.add(myGui, 'listBodyPart', bodyPoint);
        carpertaGui.open();

        initVideo();

        p5.strokeWeight(2);
        p5.fill(255);
        p5.angleMode(p5.DEGREES);
        p5.strokeJoin(p5.ROUND);
        p5.textAlign(p5.CENTER, p5.CENTER);
        p5.textSize(24);
    }

    function initVideo() {
        video = p5.createVideo(
            'dancepose/' + myGui.listClip + '.mp4',
            videoLoaded
        );
    }

    export function draw() {
        radius = myGui.Particle_size;
        paso = myGui.listBodyPart;
        pause = myGui.Pause;
        trail = myGui.Trail;

        if (myGui.Trail) {
            //myGui.Disable_Video = true;
            p5.background(0, 20);
        } else {
            //myGui.Disable_Video = false;
            if (p5.frameCount % 50 == 0) {
                //p5.background(0);
            }
        }

        if (myGui.Save) {
            p5.save('movida.svg');
            myGui.Save = false;
        }

        if (!clicked) {
            p5.text(textoIntro, width / 2 - 10, height / 2 + 20);
        }

        if (clicked) {
            if (pause) {
                video.pause();
            } else {
                video.play();
            }
        }

        video.volume(myGui.Voluen);

        if (!myGui.Disable_Video) {
            p5.image(video, 0, 0, width, height);
        }
        drawParticles(paso);
        paso = bodyPoint;

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

        C = p5.floor(p5.random(0, 3));
        let Rmax = dis > 20 ? 35 - dis : p5.random(2, 8);
        particles.push(new Particle(X, Y, C, Rmax, paso));
        particles.push(new Particle(X, Y, C, Rmax, paso));
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
                this.r = this.rMax * maclaurinCosine(this.delta);
                //this.r = this.rMax * p5.cos(this.delta);
                this.delta += this.speed;
                if (this.delta > 1.0) {
                    this.delta = 1.0;
                    this.isDeg = true;
                }
            } else {
                this.r = this.rMax * circularOut(this.delta);
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
            // p5.fill(colors[this.colorIndex]);

            p5.push();
            p5.translate(this.pos.x, this.pos.y);
            p5.rotate(this.theta);

            p5.rect(this.r, this.r, this.r * radius, this.r * radius);
            //p5.point(10, 10);
            p5.pop();

            this.theta -= this.thetaSpeed;
            this.pos.y -= this.ySpeed;

            // if (paso == "default") {
            // } else {
            //   this.pos.y -= this.ySpeed;
            // }
            // //this.pos.x -= this.ySpeed;
            this.xNoise += 0.01;
        }
    }

    function GuiOptions() {
        this.Particle_size = 0.6;
        this.Voluen = volumen;
        this.Disable_Video = false;
        this.listBodyPart = paso;
        this.listClip = queryClip.video;
        this.Trail = trail;
        this.Pause = false;
        this.Save = save;
    }

    function videoLoaded() {
        textoIntro = 'Load IA model...';
        p5.textSize(25);
        video.size(960, 540);
        p5.text(textoIntro, width / 2 - 10, height / 2 + 20);
        poseNet = ml5.poseNet(video, modelReady);
        poseNet.on('pose', function(results) {
            poses = results;
        });
        video.hide();
    }

    function modelReady() {
        console.log('cargando el  modelos');
        let logodpContainer = document.getElementById('logodp');
        logodpContainer.remove();
        textoIntro = 'Click to play';
        p5.textSize(30);
        p5.text(textoIntro, width / 2, height / 2);
        video.volume(0);
        video.loop();
        clicked = true;
    }

    function maclaurinCosine(_x) {
        var nTerms = 6; // anything less is fouled

        _x *= p5.PI;
        var xp = 1.0;
        var x2 = _x * _x;

        var sig = 1.0;
        var fact = 1.0;
        var _y = xp;

        for (var i = 0; i < nTerms; i++) {
            xp *= x2;
            sig = 0 - sig;
            fact *= i * 2 + 1;
            fact *= i * 2 + 2;
            _y += sig * (xp / fact);
        }

        _y = (1.0 - _y) / 2.0;

        return _y;
    }
    function circularOut(_x) {
        return p5.sqrt((2 - _x) * _x);
    }
</script>
