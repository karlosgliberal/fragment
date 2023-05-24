import { _ as _inherits, a as _classCallCheck, b as init, s as safe_not_equal, c as _assertThisInitialized, d as dispatch_dev, e as _createClass, S as SvelteComponentDev, M as globals, X as stores$1, Y as validate_store, Z as component_subscribe, v as validate_slots, $ as createEventDispatcher, P as onMount, g as _getPrototypeOf, h as _possibleConstructorReturn, G as noop } from './client.60cf2230.js';

var videoData = [{
  id: 'lalaland',
  title: 'La La Land',
  img: 'dancepose/lalaland.svg',
  keyPoint: 'Ankle',
  theme: '0',
  particle: 'square',
  size: ['960', '540'],
  color: [[209, 172, 40, 250], [212, 16, 46, 250], [180, 75, 187, 250]]
}, {
  id: 'fred',
  title: 'Fred Astaire y Ginger Rogers en Sombrero de copa',
  img: 'dancepose/fred.svg',
  keyPoint: 'Wrist',
  theme: '0',
  particle: 'square',
  size: ['960', '540'],
  color: [[247, 23, 53, 220], [65, 234, 212, 220], [255, 159, 28, 220]]
}, {
  id: 'billye',
  title: 'Billy eliot',
  img: 'dancepose/billy.svg',
  keyPoint: 'Shoulder',
  theme: '0',
  particle: 'square',
  size: ['960', '540'],
  color: [[4, 157, 217, 220], [235, 165, 31, 220], [249, 249, 249, 220]]
}, {
  id: 'rain',
  title: 'Singing In The Rain ',
  img: 'dancepose/rain.svg',
  keyPoint: 'Ankle',
  theme: '0',
  particle: 'square',
  size: ['960', '540'],
  color: [[221, 255, 247, 220], [18, 230, 206, 220], [233, 12, 218, 220]]
}];

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var console_1 = globals.console;

function create_fragment(ctx) {
  var block = {
    c: noop,
    l: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var $page;
  var p5 = $$props.p5;
  var _$$props$width = $$props.width,
      width = _$$props$width === void 0 ? 960 : _$$props$width;
  var _$$props$height = $$props.height,
      height = _$$props$height === void 0 ? 540 : _$$props$height;

  var _stores = stores$1(),
      page = _stores.page;

  validate_store(page, "page");
  component_subscribe($$self, page, function (value) {
    return $$invalidate(22, $page = value);
  });
  var queryClip = $page.query;

  if (typeof queryClip.video === "undefined") {
    queryClip.video = "fred";
  }

  var videoContent = videoData.find(function (x) {
    return x.id === queryClip.video;
  });
  var gui, pis, clip, carpertaGui, myGui, radius, video, canvas, guiContainer, poseNet;
  var poses = [];
  var particles = [];
  var clicked = false;
  var sound = false;
  var pause = true;
  var save = false;
  var videoFrame = false;
  var trail = false;
  var colors = videoContent.color;
  var ox, oy;
  var paso = videoContent.keyPoint;
  var bodyPoint = ["Wrist", "Eye", "Ear", "Shoulder", "Elbow", "Hip", "Knee", "Ankle"];
  var volumen = 0.5;
  var textoIntro = "";

  function setup() {
    canvas = p5.createCanvas(960, 540);
    gui = new dat.GUI({
      autoPlace: false
    });
    guiContainer = document.getElementById("datGui");
    guiContainer.appendChild(gui.domElement);
    myGui = new GuiOptions();
    carpertaGui = gui.addFolder("Select options");
    carpertaGui.add(myGui, "Particle_size", 0, 4).name("Particle size");
    carpertaGui.add(myGui, "Volumen", 0, 1).name("Volume");
    carpertaGui.add(myGui, "Disable_Video").name("Disable video");
    carpertaGui.add(myGui, "Trail").name("Trail");
    carpertaGui.add(myGui, "particleDirection").name("Particle direction");
    carpertaGui.add(myGui, "Pause").name("Pause video");
    carpertaGui.add(myGui, "listBodyPart", bodyPoint).name("Body points");
    carpertaGui.add(myGui, "Save").name("Save frame");
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
    video = p5.createVideo("dancepose/" + myGui.listClip + ".mp4", videoLoaded);
  }

  function draw() {
    radius = myGui.Particle_size;
    paso = myGui.listBodyPart;
    pause = myGui.Pause;
    trail = myGui.Trail;

    if (myGui.Disable_Video) {
      p5.background(0);
    }

    if (myGui.Trail) ; //p5.background(0);


    if (save) {
      p5.save("capturaDancePose.png");
      save = false;
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

    if (!myGui.Trail && !myGui.Disable_Video) {
      p5.image(video, 0, 0, width, height);
    }

    drawParticles(paso);
    video.volume(myGui.Volumen);
    paso = bodyPoint;

    for (var i = 0; i < particles.length; i++) {
      particles[i].display();
    }

    for (var j = 0; j < particles.length; j++) {
      if (particles[j].isFinished) {
        if (p5.frameCount % 50 == 0) {
          particles.splice(j, 1);
        }
      }
    }
  }

  function drawParticles(bodyPoint) {
    for (var i = 0; i < poses.length; i++) {
      var pose = poses[i].pose;

      for (var j = 0; j < pose.keypoints.length; j++) {
        var keypoint = pose.keypoints[j];

        if (p5.frameCount % 2 == 0 && (keypoint.part === "right" + bodyPoint || keypoint.part === "left" + bodyPoint) && keypoint.score > 0.15) {
          createParticle(keypoint.position.x, keypoint.position.y, paso);
        }
      }
    }
  }

  function createParticle(keypointx, keypointy, paso) {
    var targetX = keypointx;
    var targetY = keypointy;
    var randomTheta = p5.random(360);
    var randomR = 1;
    var X = targetX + randomR * p5.cos(randomTheta);
    var Y = targetY + randomR * p5.sin(randomTheta); //let dis = p5.dist(targetX, targetY, X, Y);

    var C;
    C = p5.floor(p5.random(3));
    var Rmax = p5.random(3, 6); //let Rmax = dis > 20 ? 35 - dis : p5.random(2, 8);

    particles.push(new Particle(X, Y, C, Rmax, paso));
    particles.push(new Particle(X, Y, C, Rmax, paso));
  }

  var Particle = /*#__PURE__*/function () {
    function Particle(tmpX, tmpY, tmpC, tmpRmax, paso) {
      _classCallCheck(this, Particle);

      this.pos = p5.createVector(tmpX, tmpY);
      this.paso = paso;
      this.rMax = tmpRmax;
      this.theta = p5.random(360);
      this.thetaSpeed = p5.random(-4, 4);
      this.r = 0;
      this.delta = 0;
      this.speed = 1 * 1.5 / 30;
      this.life = this.rMax * 2;
      this.isDeg = false;
      this.isFinished = false;
      this.colorIndex = tmpC;
      this.ySpeed = p5.random(0.2, 2);
      this.xNoise = p5.random(1);
    }

    _createClass(Particle, [{
      key: "display",
      value: function display() {
        if (!this.isDeg) {
          // this.r = this.rMax * maclaurinCosine(this.delta);
          this.r = this.rMax * circularOut(this.delta); //this.r = this.rMax * p5.cos(this.delta);

          this.delta += this.speed;

          if (this.delta > 1) {
            this.delta = 1;
            this.isDeg = true;
          }
        } else {
          this.r = this.rMax * circularOut(this.delta);
          this.delta -= this.speed * 1.5;

          if (this.delta < 0) {
            this.delta = 0;
            this.isFinished = true;
          }
        } // this.pos.x =
        //     this.pos.x +
        //     this.xNoise +
        //     p5.map(p5.noise(this.xNoise), 0, 1, -50, 50);


        this.pos.x = this.pos.x + p5.map(p5.noise(this.xNoise), 0, 1, -5, 5);
        p5.noFill();
        p5.stroke(colors[this.colorIndex]); // p5.fill(colors[this.colorIndex]);

        p5.push();
        p5.translate(this.pos.x, this.pos.y);
        p5.rotate(this.theta);
        p5.beginShape();

        for (var i = 0; i < 4; i++) {
          p5.vertex(this.r * radius * p5.cos(i * 360 / 4), this.r * radius * p5.sin(i * 360 / 4));
        }

        p5.endShape(p5.CLOSE); // p5.rect(this.r, this.r, this.r * radius, this.r * radius);
        //p5.point(10, 10);

        p5.pop();
        this.theta += this.thetaSpeed;

        if (myGui.particleDirection) {
          this.pos.y -= this.ySpeed;
        } else {
          this.pos.y += this.ySpeed;
        } //if (paso == "default") {
        // } else {
        //   this.pos.y -= this.ySpeed;
        // }
        // //this.pos.x -= this.ySpeed;


        this.xNoise += 0.01;
      }
    }]);

    return Particle;
  }();

  function GuiOptions() {
    this.Particle_size = 0.4;
    this.Volumen = volumen;
    this.Disable_Video = false;
    this.listBodyPart = paso;
    this.listClip = queryClip.video;
    this.Trail = trail;
    this.Pause = false;
    this.particleDirection = false;

    this.Save = function () {
      save = true;
      console.log("save frame");
    };
  }

  function videoLoaded() {
    textoIntro = "Loading AI model...";
    p5.textSize(25);
    video.size(960, 540);
    p5.text(textoIntro, width / 2 - 10, height / 2 + 20);
    poseNet = ml5.poseNet(video, modelReady);
    poseNet.on("pose", function (results) {
      poses = results;
    });
    video.hide();
  }

  function modelReady() {
    console.log("cargando el  modelos");
    var logodpContainer = document.getElementById("logodp");
    logodpContainer.remove();
    textoIntro = "";
    p5.textSize(30);
    p5.text(textoIntro, width / 2, height / 2);
    video.volume(0);
    video.loop();
    clicked = true;
  }

  function maclaurinCosine(_x) {
    var nTerms = 6; // anything less is fouled

    _x *= p5.PI;
    var xp = 1;
    var x2 = _x * _x;
    var sig = 1;
    var fact = 1;
    var _y = xp;

    for (var i = 0; i < nTerms; i++) {
      xp *= x2;
      sig = 0 - sig;
      fact *= i * 2 + 1;
      fact *= i * 2 + 2;
      _y += sig * (xp / fact);
    }

    _y = (1 - _y) / 2;
    return _y;
  }

  function circularOut(_x) {
    return p5.sqrt((2 - _x) * _x);
  }

  var writable_props = ["p5", "width", "height"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn("<Sketch> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Sketch", $$slots, []);

  $$self.$set = function ($$props) {
    if ("p5" in $$props) $$invalidate(1, p5 = $$props.p5);
    if ("width" in $$props) $$invalidate(2, width = $$props.width);
    if ("height" in $$props) $$invalidate(3, height = $$props.height);
  };

  $$self.$capture_state = function () {
    return {
      stores: stores$1,
      createEventDispatcher: createEventDispatcher,
      onMount: onMount,
      videoData: videoData,
      p5: p5,
      width: width,
      height: height,
      page: page,
      queryClip: queryClip,
      videoContent: videoContent,
      gui: gui,
      pis: pis,
      clip: clip,
      carpertaGui: carpertaGui,
      myGui: myGui,
      radius: radius,
      video: video,
      canvas: canvas,
      guiContainer: guiContainer,
      poseNet: poseNet,
      poses: poses,
      particles: particles,
      clicked: clicked,
      sound: sound,
      pause: pause,
      save: save,
      videoFrame: videoFrame,
      trail: trail,
      colors: colors,
      ox: ox,
      oy: oy,
      paso: paso,
      bodyPoint: bodyPoint,
      volumen: volumen,
      textoIntro: textoIntro,
      setup: setup,
      initVideo: initVideo,
      draw: draw,
      drawParticles: drawParticles,
      createParticle: createParticle,
      Particle: Particle,
      GuiOptions: GuiOptions,
      videoLoaded: videoLoaded,
      modelReady: modelReady,
      maclaurinCosine: maclaurinCosine,
      circularOut: circularOut,
      $page: $page
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("p5" in $$props) $$invalidate(1, p5 = $$props.p5);
    if ("width" in $$props) $$invalidate(2, width = $$props.width);
    if ("height" in $$props) $$invalidate(3, height = $$props.height);
    if ("queryClip" in $$props) queryClip = $$props.queryClip;
    if ("videoContent" in $$props) videoContent = $$props.videoContent;
    if ("gui" in $$props) gui = $$props.gui;
    if ("pis" in $$props) pis = $$props.pis;
    if ("clip" in $$props) clip = $$props.clip;
    if ("carpertaGui" in $$props) carpertaGui = $$props.carpertaGui;
    if ("myGui" in $$props) myGui = $$props.myGui;
    if ("radius" in $$props) radius = $$props.radius;
    if ("video" in $$props) video = $$props.video;
    if ("canvas" in $$props) canvas = $$props.canvas;
    if ("guiContainer" in $$props) guiContainer = $$props.guiContainer;
    if ("poseNet" in $$props) poseNet = $$props.poseNet;
    if ("poses" in $$props) poses = $$props.poses;
    if ("particles" in $$props) particles = $$props.particles;
    if ("clicked" in $$props) clicked = $$props.clicked;
    if ("sound" in $$props) sound = $$props.sound;
    if ("pause" in $$props) pause = $$props.pause;
    if ("save" in $$props) save = $$props.save;
    if ("videoFrame" in $$props) videoFrame = $$props.videoFrame;
    if ("trail" in $$props) trail = $$props.trail;
    if ("colors" in $$props) colors = $$props.colors;
    if ("ox" in $$props) ox = $$props.ox;
    if ("oy" in $$props) oy = $$props.oy;
    if ("paso" in $$props) paso = $$props.paso;
    if ("bodyPoint" in $$props) bodyPoint = $$props.bodyPoint;
    if ("volumen" in $$props) volumen = $$props.volumen;
    if ("textoIntro" in $$props) textoIntro = $$props.textoIntro;
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [page, p5, width, height, setup, draw];
}

var Sketch = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Sketch, _SvelteComponentDev);

  var _super = _createSuper(Sketch);

  function Sketch(options) {
    var _this;

    _classCallCheck(this, Sketch);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      p5: 1,
      width: 2,
      height: 3,
      setup: 4,
      draw: 5
    }, [-1, -1]);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Sketch",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*p5*/
    ctx[1] === undefined && !("p5" in props)) {
      console_1.warn("<Sketch> was created without expected prop 'p5'");
    }

    return _this;
  }

  _createClass(Sketch, [{
    key: "p5",
    get: function get() {
      throw new Error("<Sketch>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Sketch>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "width",
    get: function get() {
      throw new Error("<Sketch>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Sketch>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "height",
    get: function get() {
      throw new Error("<Sketch>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Sketch>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "setup",
    get: function get() {
      return this.$$.ctx[4];
    },
    set: function set(value) {
      throw new Error("<Sketch>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "draw",
    get: function get() {
      return this.$$.ctx[5];
    },
    set: function set(value) {
      throw new Error("<Sketch>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Sketch;
}(SvelteComponentDev);

export { Sketch as S, videoData as v };
