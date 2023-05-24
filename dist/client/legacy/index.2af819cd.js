import { _ as _inherits, a as _classCallCheck, b as init, s as safe_not_equal, c as _assertThisInitialized, d as dispatch_dev, e as _createClass, S as SvelteComponentDev, M as globals, v as validate_slots, N as assign, O as exclude_internal_props, P as onMount, g as _getPrototypeOf, h as _possibleConstructorReturn, j as element, A as space, k as claim_element, l as children, m as detach_dev, D as claim_space, o as add_location, n as attr_dev, p as insert_dev, F as append_dev, G as noop, Q as binding_callbacks, R as goto, H as listen_dev, q as _slicedToArray, T as validate_each_argument, I as create_component, J as claim_component, K as mount_component, u as transition_in, y as transition_out, L as destroy_component, U as group_outros, V as check_outros, W as destroy_each } from './client.60cf2230.js';
import { S as SimpleSketch, v as videoData } from './sketch.d151924b.js';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var console_1 = globals.console;
var file = "src/components/P5Canvas.svelte";

function create_fragment(ctx) {
  var main;
  var div0;
  var t;
  var div1;
  var block = {
    c: function create() {
      main = element("main");
      div0 = element("div");
      t = space();
      div1 = element("div");
      this.h();
    },
    l: function claim(nodes) {
      main = claim_element(nodes, "MAIN", {});
      var main_nodes = children(main);
      div0 = claim_element(main_nodes, "DIV", {});
      children(div0).forEach(detach_dev);
      t = claim_space(main_nodes);
      div1 = claim_element(main_nodes, "DIV", {
        class: true
      });
      children(div1).forEach(detach_dev);
      main_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(div0, file, 103, 4, 3229);
      attr_dev(div1, "class", "canvas-container xl:pl-3");
      add_location(div1, file, 104, 4, 3267);
      add_location(main, file, 102, 0, 3218);
    },
    m: function mount(target, anchor) {
      insert_dev(target, main, anchor);
      append_dev(main, div0);
      /*div0_binding*/

      ctx[7](div0);
      append_dev(main, t);
      append_dev(main, div1);
      /*div1_binding*/

      ctx[8](div1);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(main);
      /*div0_binding*/

      ctx[7](null);
      /*div1_binding*/

      ctx[8](null);
    }
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

var width = 256;
var height = 256;

function addHooks(p5Target, instance) {
  var setter = instance.$set;

  if (typeof setter !== "function") {
    console.warn("Component did not provide $set function");
    return;
  }

  instance.$set = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    console.log("has changed", args);
    return setter.apply(instance, args);
  }; // when the component is updated, trigger a re-draw if p5 is not looping


  var update = instance.$$.update || function () {};

  instance.$$.update = function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var ret = update.apply(instance, args);
    if (p5Target && !p5Target._loop) p5Target.redraw();
    return ret;
  };
}

function attachFunctions(p5Target, instance, Component) {
  var funcs = Object.getOwnPropertyNames(Component.prototype).filter(function (prop) {
    return prop != "constructor";
  });
  funcs.forEach(function (key) {
    if (key.startsWith("$")) {
      return;
    }

    var fn;

    try {
      fn = instance[key];
    } catch (_) {
      return; // ignore svelte no-accessor error
    }

    if (typeof fn === "function") {
      if (key === "destroy") console.warn("Do not export destroy() function in your components");
      p5Target[key] = fn;

      if (key === "setup") {
        var setup = fn;

        p5Target[key] = function () {
          var _console;

          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          (_console = console).log.apply(_console, args);

          p5Target.width = width;
          p5Target.height = height;
          return setup.call.apply(setup, [instance].concat(args));
        };
      }
    }
  });
}

function instance($$self, $$props, $$invalidate) {
  var _$$props = $$props,
      sketch = _$$props.sketch;

  var props = _objectSpread({}, $$props);

  delete props.sketch;
  if ("p5" in props) console.warn("p5 has been passed into props, it will be ignored");
  if ("target" in props) console.warn("target has been passed into props, it will be ignored");
  var lastInstance;
  var propContainer, canvasContainer;

  function update() {
    if (lastInstance) {
      lastInstance.remove();
      lastInstance = null;
    }

    if (sketch) {
      new p5(function (p) {
        p.width = width;
        p.height = height;
        var target = propContainer;
        var instance = new sketch({
          target: target,
          props: _objectSpread({
            width: p.width,
            height: p.height
          }, props, {
            target: target,
            p5: p
          })
        });
        attachFunctions(p, instance, sketch);
        addHooks(p, instance);
        lastInstance = p;
      }, canvasContainer);
    }
  }

  var _$$props2 = $$props,
      _$$props2$$$slots = _$$props2.$$slots,
      $$slots = _$$props2$$$slots === void 0 ? {} : _$$props2$$$slots,
      $$scope = _$$props2.$$scope;
  validate_slots("P5Canvas", $$slots, []);

  function div0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      $$invalidate(0, propContainer = $$value);
    });
  }

  function div1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      $$invalidate(1, canvasContainer = $$value);
    });
  }

  $$self.$set = function ($$new_props) {
    $$invalidate(6, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("sketch" in $$new_props) $$invalidate(2, sketch = $$new_props.sketch);
  };

  $$self.$capture_state = function () {
    return {
      onMount: onMount,
      sketch: sketch,
      width: width,
      height: height,
      props: props,
      lastInstance: lastInstance,
      propContainer: propContainer,
      canvasContainer: canvasContainer,
      update: update,
      addHooks: addHooks,
      attachFunctions: attachFunctions
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(6, $$props = assign(assign({}, $$props), $$new_props));
    if ("sketch" in $$props) $$invalidate(2, sketch = $$new_props.sketch);
    if ("lastInstance" in $$props) lastInstance = $$new_props.lastInstance;
    if ("propContainer" in $$props) $$invalidate(0, propContainer = $$new_props.propContainer);
    if ("canvasContainer" in $$props) $$invalidate(1, canvasContainer = $$new_props.canvasContainer);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*canvasContainer, sketch, propContainer*/
    7) {
       {
        if (canvasContainer) update();
      }
    }
  };

  $$props = exclude_internal_props($$props);
  return [propContainer, canvasContainer, sketch, lastInstance, props, update, $$props, div0_binding, div1_binding];
}

var P5Canvas = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(P5Canvas, _SvelteComponentDev);

  var _super = _createSuper(P5Canvas);

  function P5Canvas(options) {
    var _this;

    _classCallCheck(this, P5Canvas);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      sketch: 2
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "P5Canvas",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*sketch*/
    ctx[2] === undefined && !("sketch" in props)) {
      console_1.warn("<P5Canvas> was created without expected prop 'sketch'");
    }

    return _this;
  }

  _createClass(P5Canvas, [{
    key: "sketch",
    get: function get() {
      throw new Error("<P5Canvas>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<P5Canvas>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return P5Canvas;
}(SvelteComponentDev);

function _createSuper$1(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct$1()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src/components/VideoMini.svelte";

function create_fragment$1(ctx) {
  var div2;
  var div0;
  var img0;
  var img0_src_value;
  var t;
  var div1;
  var img1;
  var img1_src_value;
  var dispose;
  var block = {
    c: function create() {
      div2 = element("div");
      div0 = element("div");
      img0 = element("img");
      t = space();
      div1 = element("div");
      img1 = element("img");
      this.h();
    },
    l: function claim(nodes) {
      div2 = claim_element(nodes, "DIV", {
        class: true,
        style: true
      });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      img0 = claim_element(div0_nodes, "IMG", {
        src: true,
        alt: true
      });
      div0_nodes.forEach(detach_dev);
      t = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {});
      var div1_nodes = children(div1);
      img1 = claim_element(div1_nodes, "IMG", {
        src: true,
        alt: true
      });
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      if (img0.src !== (img0_src_value = "playermini.svg")) attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "Play");
      add_location(img0, file$1, 16, 8, 364);
      attr_dev(div0, "class", "absolute");
      add_location(div0, file$1, 15, 4, 333);
      if (img1.src !== (img1_src_value =
      /*img*/
      ctx[0])) attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "Video 1");
      add_location(img1, file$1, 20, 8, 434);
      add_location(div1, file$1, 19, 4, 420);
      attr_dev(div2, "class", "video-card m-2 flex items-center justify-center");
      add_location(div2, file$1, 10, 0, 221);
    },
    m: function mount(target, anchor, remount) {
      insert_dev(target, div2, anchor);
      append_dev(div2, div0);
      append_dev(div0, img0);
      append_dev(div2, t);
      append_dev(div2, div1);
      append_dev(div1, img1);
      if (remount) dispose();
      dispose = listen_dev(div2, "click",
      /*handleSubmit*/
      ctx[1], false, false, false);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*img*/
      1 && img1.src !== (img1_src_value =
      /*img*/
      ctx[0])) {
        attr_dev(img1, "src", img1_src_value);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div2);
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$1($$self, $$props, $$invalidate) {
  var _$$props$id = $$props.id,
      id = _$$props$id === void 0 ? "lalaland" : _$$props$id;
  var _$$props$img = $$props.img,
      img = _$$props$img === void 0 ? "lalaland" : _$$props$img;

  function handleSubmit() {
    window.location.replace("/dancepose?video=".concat(id));
  }

  var writable_props = ["id", "img"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<VideoMini> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("VideoMini", $$slots, []);

  $$self.$set = function ($$props) {
    if ("id" in $$props) $$invalidate(2, id = $$props.id);
    if ("img" in $$props) $$invalidate(0, img = $$props.img);
  };

  $$self.$capture_state = function () {
    return {
      goto: goto,
      id: id,
      img: img,
      handleSubmit: handleSubmit
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("id" in $$props) $$invalidate(2, id = $$props.id);
    if ("img" in $$props) $$invalidate(0, img = $$props.img);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [img, handleSubmit, id];
}

var VideoMini = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(VideoMini, _SvelteComponentDev);

  var _super = _createSuper$1(VideoMini);

  function VideoMini(options) {
    var _this;

    _classCallCheck(this, VideoMini);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      id: 2,
      img: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "VideoMini",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  _createClass(VideoMini, [{
    key: "id",
    get: function get() {
      throw new Error("<VideoMini>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<VideoMini>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "img",
    get: function get() {
      throw new Error("<VideoMini>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<VideoMini>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return VideoMini;
}(SvelteComponentDev);

function _createSuper$2(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct$2()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$2 = "src/routes/dancepose/index.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[0] = list[i].id;
  child_ctx[1] = list[i].img;
  child_ctx[3] = i;
  return child_ctx;
} // (25:8) {#each videoData as { id, img }


function create_each_block(ctx) {
  var current;
  var videomini = new VideoMini({
    props: {
      id:
      /*id*/
      ctx[0],
      img:
      /*img*/
      ctx[1]
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(videomini.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(videomini.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(videomini, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(videomini.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(videomini.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(videomini, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(25:8) {#each videoData as { id, img }",
    ctx: ctx
  });
  return block;
}

function create_fragment$2(ctx) {
  var div4;
  var div2;
  var div0;
  var t0;
  var div1;
  var img;
  var img_src_value;
  var t1;
  var t2;
  var div3;
  var current;
  var p5canvas = new P5Canvas({
    props: {
      sketch: SimpleSketch,
      width: "960",
      height: "540"
    },
    $$inline: true
  });
  var each_value = videoData;
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      div4 = element("div");
      div2 = element("div");
      div0 = element("div");
      t0 = space();
      div1 = element("div");
      img = element("img");
      t1 = space();
      create_component(p5canvas.$$.fragment);
      t2 = space();
      div3 = element("div");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      div4 = claim_element(nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      div2 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {
        id: true,
        class: true
      });
      children(div0).forEach(detach_dev);
      t0 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        id: true,
        class: true
      });
      var div1_nodes = children(div1);
      img = claim_element(div1_nodes, "IMG", {
        src: true,
        alt: true
      });
      div1_nodes.forEach(detach_dev);
      t1 = claim_space(div2_nodes);
      claim_component(p5canvas.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach_dev);
      t2 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(div3_nodes);
      }

      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "id", "datGui");
      attr_dev(div0, "class", "datGui text-black");
      add_location(div0, file$2, 15, 8, 776);
      if (img.src !== (img_src_value = "logodp.webp")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "");
      add_location(img, file$2, 17, 12, 884);
      attr_dev(div1, "id", "logodp");
      attr_dev(div1, "class", "fixed m-24 pl-7");
      add_location(div1, file$2, 16, 8, 830);
      attr_dev(div2, "class", "flex justify-center content-center pl-100 wrap-canvas");
      add_location(div2, file$2, 14, 4, 700);
      attr_dev(div3, "class", " flex flex-col videosmini video-min__wrap justify-between\n        text-center pl-4 pt-2 svelte-1115de4");
      add_location(div3, file$2, 21, 4, 1015);
      attr_dev(div4, "class", "flex justify-center pt-10 pb-16");
      add_location(div4, file$2, 13, 0, 650);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div4, anchor);
      append_dev(div4, div2);
      append_dev(div2, div0);
      append_dev(div2, t0);
      append_dev(div2, div1);
      append_dev(div1, img);
      append_dev(div2, t1);
      mount_component(p5canvas, div2, null);
      append_dev(div4, t2);
      append_dev(div4, div3);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(div3, null);
      }

      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*videoData*/
      0) {
        each_value = videoData;
        validate_each_argument(each_value);

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);

            transition_in(each_blocks[_i4], 1);
          } else {
            each_blocks[_i4] = create_each_block(child_ctx);

            each_blocks[_i4].c();

            transition_in(each_blocks[_i4], 1);

            each_blocks[_i4].m(div3, null);
          }
        }

        group_outros();

        for (_i4 = each_value.length; _i4 < each_blocks.length; _i4 += 1) {
          out(_i4);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(p5canvas.$$.fragment, local);

      for (var _i5 = 0; _i5 < each_value.length; _i5 += 1) {
        transition_in(each_blocks[_i5]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(p5canvas.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        transition_out(each_blocks[_i6]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div4);
      destroy_component(p5canvas);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$2($$self, $$props, $$invalidate) {
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Dancepose> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Dancepose", $$slots, []);

  $$self.$capture_state = function () {
    return {
      SimpleSketch: SimpleSketch,
      P5Canvas: P5Canvas,
      VideoMini: VideoMini,
      videoData: videoData
    };
  };

  return [];
}

var Dancepose = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Dancepose, _SvelteComponentDev);

  var _super = _createSuper$2(Dancepose);

  function Dancepose(options) {
    var _this;

    _classCallCheck(this, Dancepose);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Dancepose",
      options: options,
      id: create_fragment$2.name
    });
    return _this;
  }

  return Dancepose;
}(SvelteComponentDev);

export default Dancepose;
