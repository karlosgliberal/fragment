import { _ as _inherits, a as _classCallCheck, b as init, s as safe_not_equal, c as _assertThisInitialized, d as dispatch_dev, e as _createClass, S as SvelteComponentDev, v as validate_slots, g as _getPrototypeOf, h as _possibleConstructorReturn, j as element, A as space, k as claim_element, l as children, m as detach_dev, D as claim_space, n as attr_dev, o as add_location, p as insert_dev, F as append_dev, q as _slicedToArray, G as noop, B as text, E as claim_text, H as listen_dev, f as create_slot, I as create_component, C as query_selector_all, J as claim_component, K as mount_component, r as get_slot_context, t as get_slot_changes, u as transition_in, y as transition_out, L as destroy_component } from './client.60cf2230.js';

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/components/NavSlim.svelte"; // (22:12) {:else}

function create_else_block_1(ctx) {
  var img;
  var img_src_value;
  var block = {
    c: function create() {
      img = element("img");
      this.h();
    },
    l: function claim(nodes) {
      img = claim_element(nodes, "IMG", {
        src: true,
        alt: true
      });
      this.h();
    },
    h: function hydrate() {
      if (img.src !== (img_src_value = "logo.svg")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "Dance pose");
      add_location(img, file, 22, 16, 970);
    },
    m: function mount(target, anchor) {
      insert_dev(target, img, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(img);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block_1.name,
    type: "else",
    source: "(22:12) {:else}",
    ctx: ctx
  });
  return block;
} // (20:12) {#if segment === undefined}


function create_if_block_1(ctx) {
  var img;
  var img_src_value;
  var block = {
    c: function create() {
      img = element("img");
      this.h();
    },
    l: function claim(nodes) {
      img = claim_element(nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      this.h();
    },
    h: function hydrate() {
      attr_dev(img, "class", "logodance svelte-1yvsh8i");
      if (img.src !== (img_src_value = "logo.svg")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "Dance pose");
      add_location(img, file, 20, 16, 876);
    },
    m: function mount(target, anchor) {
      insert_dev(target, img, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(img);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1.name,
    type: "if",
    source: "(20:12) {#if segment === undefined}",
    ctx: ctx
  });
  return block;
} // (35:12) {:else}


function create_else_block(ctx) {
  var button;
  var t;
  var dispose;
  var block = {
    c: function create() {
      button = element("button");
      t = text("Home");
      this.h();
    },
    l: function claim(nodes) {
      button = claim_element(nodes, "BUTTON", {
        class: true
      });
      var button_nodes = children(button);
      t = claim_text(button_nodes, "Home");
      button_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(button, "class", "uppercase font-bold text-white");
      add_location(button, file, 35, 16, 1428);
    },
    m: function mount(target, anchor, remount) {
      insert_dev(target, button, anchor);
      append_dev(button, t);
      if (remount) dispose();
      dispose = listen_dev(button, "click", handleSubmit, false, false, false);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(button);
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block.name,
    type: "else",
    source: "(35:12) {:else}",
    ctx: ctx
  });
  return block;
} // (29:12) {#if segment === undefined}


function create_if_block(ctx) {
  var a;
  var t;
  var block = {
    c: function create() {
      a = element("a");
      t = text("About");
      this.h();
    },
    l: function claim(nodes) {
      a = claim_element(nodes, "A", {
        href: true,
        class: true
      });
      var a_nodes = children(a);
      t = claim_text(a_nodes, "About");
      a_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "href", "dancepose/about");
      attr_dev(a, "class", "uppercase font-bold text-white");
      add_location(a, file, 29, 16, 1239);
    },
    m: function mount(target, anchor) {
      insert_dev(target, a, anchor);
      append_dev(a, t);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(a);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(29:12) {#if segment === undefined}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var div5;
  var div0;
  var t0;
  var div2;
  var div1;
  var div1_class_value;
  var t1;
  var div4;
  var div3;
  var div3_class_value;
  var div5_class_value;

  function select_block_type(ctx, dirty) {
    if (
    /*segment*/
    ctx[0] === undefined) return create_if_block_1;
    return create_else_block_1;
  }

  var current_block_type = select_block_type(ctx);
  var if_block0 = current_block_type(ctx);

  function select_block_type_1(ctx, dirty) {
    if (
    /*segment*/
    ctx[0] === undefined) return create_if_block;
    return create_else_block;
  }

  var current_block_type_1 = select_block_type_1(ctx);
  var if_block1 = current_block_type_1(ctx);
  var block = {
    c: function create() {
      div5 = element("div");
      div0 = element("div");
      t0 = space();
      div2 = element("div");
      div1 = element("div");
      if_block0.c();
      t1 = space();
      div4 = element("div");
      div3 = element("div");
      if_block1.c();
      this.h();
    },
    l: function claim(nodes) {
      div5 = claim_element(nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      div0 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      children(div0).forEach(detach_dev);
      t0 = claim_space(div5_nodes);
      div2 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      if_block0.l(div1_nodes);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t1 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      div3 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      if_block1.l(div3_nodes);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "w-1/3 h-6 flex justify-star items-center");
      add_location(div0, file, 16, 4, 643);
      attr_dev(div1, "class", div1_class_value =
      /*segment*/
      ctx[0] === undefined ? "pt-10" : "");
      add_location(div1, file, 18, 8, 769);
      attr_dev(div2, "class", "w-1/3 flex items-center justify-center h-6");
      add_location(div2, file, 17, 4, 704);
      attr_dev(div3, "class", div3_class_value = " " + (
      /*segment*/
      ctx[0] === undefined ? "pr-10 pt-8" : "pr-4"));
      add_location(div3, file, 27, 8, 1120);
      attr_dev(div4, "class", "w-1/3 flex items-center justify-end h-6");
      add_location(div4, file, 26, 4, 1058);
      attr_dev(div5, "class", div5_class_value = "flex py-2 " + (
      /*segment*/
      ctx[0] === undefined ? "bg-dark" : ""));
      add_location(div5, file, 15, 0, 574);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div5, anchor);
      append_dev(div5, div0);
      append_dev(div5, t0);
      append_dev(div5, div2);
      append_dev(div2, div1);
      if_block0.m(div1, null);
      append_dev(div5, t1);
      append_dev(div5, div4);
      append_dev(div4, div3);
      if_block1.m(div3, null);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (current_block_type !== (current_block_type = select_block_type(ctx))) {
        if_block0.d(1);
        if_block0 = current_block_type(ctx);

        if (if_block0) {
          if_block0.c();
          if_block0.m(div1, null);
        }
      }

      if (dirty &
      /*segment*/
      1 && div1_class_value !== (div1_class_value =
      /*segment*/
      ctx[0] === undefined ? "pt-10" : "")) {
        attr_dev(div1, "class", div1_class_value);
      }

      if (current_block_type_1 === (current_block_type_1 = select_block_type_1(ctx)) && if_block1) {
        if_block1.p(ctx, dirty);
      } else {
        if_block1.d(1);
        if_block1 = current_block_type_1(ctx);

        if (if_block1) {
          if_block1.c();
          if_block1.m(div3, null);
        }
      }

      if (dirty &
      /*segment*/
      1 && div3_class_value !== (div3_class_value = " " + (
      /*segment*/
      ctx[0] === undefined ? "pr-10 pt-8" : "pr-4"))) {
        attr_dev(div3, "class", div3_class_value);
      }

      if (dirty &
      /*segment*/
      1 && div5_class_value !== (div5_class_value = "flex py-2 " + (
      /*segment*/
      ctx[0] === undefined ? "bg-dark" : ""))) {
        attr_dev(div5, "class", div5_class_value);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div5);
      if_block0.d();
      if_block1.d();
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

function handleSubmit() {
  window.location.replace("/dancepose");
}

function instance($$self, $$props, $$invalidate) {
  var segment = $$props.segment;
  var writable_props = ["segment"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<NavSlim> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("NavSlim", $$slots, []);

  $$self.$set = function ($$props) {
    if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
  };

  $$self.$capture_state = function () {
    return {
      segment: segment,
      handleSubmit: handleSubmit
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [segment];
}

var NavSlim = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(NavSlim, _SvelteComponentDev);

  var _super = _createSuper(NavSlim);

  function NavSlim(options) {
    var _this;

    _classCallCheck(this, NavSlim);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      segment: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "NavSlim",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*segment*/
    ctx[0] === undefined && !("segment" in props)) {
      console.warn("<NavSlim> was created without expected prop 'segment'");
    }

    return _this;
  }

  _createClass(NavSlim, [{
    key: "segment",
    get: function get() {
      throw new Error("<NavSlim>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<NavSlim>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return NavSlim;
}(SvelteComponentDev);

function _createSuper$1(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct$1()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src/components/Footer.svelte";

function create_fragment$1(ctx) {
  var div4;
  var div3;
  var div0;
  var a0;
  var img0;
  var img0_src_value;
  var t0;
  var div1;
  var img1;
  var img1_src_value;
  var t1;
  var div2;
  var a1;
  var img2;
  var img2_src_value;
  var div4_class_value;
  var block = {
    c: function create() {
      div4 = element("div");
      div3 = element("div");
      div0 = element("div");
      a0 = element("a");
      img0 = element("img");
      t0 = space();
      div1 = element("div");
      img1 = element("img");
      t1 = space();
      div2 = element("div");
      a1 = element("a");
      img2 = element("img");
      this.h();
    },
    l: function claim(nodes) {
      div4 = claim_element(nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      div3 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", {});
      var div0_nodes = children(div0);
      a0 = claim_element(div0_nodes, "A", {
        href: true,
        target: true
      });
      var a0_nodes = children(a0);
      img0 = claim_element(a0_nodes, "IMG", {
        src: true,
        alt: true
      });
      a0_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t0 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", {});
      var div1_nodes = children(div1);
      img1 = claim_element(div1_nodes, "IMG", {
        src: true,
        alt: true
      });
      div1_nodes.forEach(detach_dev);
      t1 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {});
      var div2_nodes = children(div2);
      a1 = claim_element(div2_nodes, "A", {
        href: true,
        target: true
      });
      var a1_nodes = children(a1);
      img2 = claim_element(a1_nodes, "IMG", {
        src: true,
        alt: true
      });
      a1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      if (img0.src !== (img0_src_value = "logobiko.svg")) attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "Biko");
      add_location(img0, file$1, 17, 16, 789);
      attr_dev(a0, "href", "https://www.biko2.com/");
      attr_dev(a0, "target", "_blank");
      add_location(a0, file$1, 16, 12, 723);
      add_location(div0, file$1, 15, 8, 705);
      if (img1.src !== (img1_src_value = "more.svg")) attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "More");
      add_location(img1, file$1, 21, 12, 885);
      add_location(div1, file$1, 20, 8, 867);
      if (img2.src !== (img2_src_value = "logobikolabs.svg")) attr_dev(img2, "src", img2_src_value);
      attr_dev(img2, "alt", "Bikolabs");
      add_location(img2, file$1, 25, 16, 1039);
      attr_dev(a1, "href", "https://www.instagram.com/bikolabs/");
      attr_dev(a1, "target", "_blank");
      add_location(a1, file$1, 24, 12, 960);
      add_location(div2, file$1, 23, 8, 942);
      attr_dev(div3, "class", "flex content-center pr-3 py-2");
      add_location(div3, file$1, 14, 4, 653);
      attr_dev(div4, "class", div4_class_value = "flex justify-end " + (
      /*segment*/
      ctx[0] === undefined ? "bgfooter" : "bg-dark") + " " + " svelte-zt2hgp");
      add_location(div4, file$1, 13, 0, 568);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div4, anchor);
      append_dev(div4, div3);
      append_dev(div3, div0);
      append_dev(div0, a0);
      append_dev(a0, img0);
      append_dev(div3, t0);
      append_dev(div3, div1);
      append_dev(div1, img1);
      append_dev(div3, t1);
      append_dev(div3, div2);
      append_dev(div2, a1);
      append_dev(a1, img2);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*segment*/
      1 && div4_class_value !== (div4_class_value = "flex justify-end " + (
      /*segment*/
      ctx[0] === undefined ? "bgfooter" : "bg-dark") + " " + " svelte-zt2hgp")) {
        attr_dev(div4, "class", div4_class_value);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div4);
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

function handleSubmit$1() {
  window.location.replace("/dancepose");
}

function instance$1($$self, $$props, $$invalidate) {
  var segment = $$props.segment;
  var writable_props = ["segment"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Footer> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Footer", $$slots, []);

  $$self.$set = function ($$props) {
    if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
  };

  $$self.$capture_state = function () {
    return {
      segment: segment,
      handleSubmit: handleSubmit$1
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [segment];
}

var Footer = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Footer, _SvelteComponentDev);

  var _super = _createSuper$1(Footer);

  function Footer(options) {
    var _this;

    _classCallCheck(this, Footer);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      segment: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Footer",
      options: options,
      id: create_fragment$1.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*segment*/
    ctx[0] === undefined && !("segment" in props)) {
      console.warn("<Footer> was created without expected prop 'segment'");
    }

    return _this;
  }

  _createClass(Footer, [{
    key: "segment",
    get: function get() {
      throw new Error("<Footer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Footer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Footer;
}(SvelteComponentDev);

function _createSuper$2(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct$2()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$2 = "src/routes/dancepose/_layout.svelte";

function create_fragment$2(ctx) {
  var meta;
  var style;
  var t0;
  var t1;
  var div;
  var t2;
  var t3;
  var div_class_value;
  var current;
  var navslim = new NavSlim({
    props: {
      segment:
      /*segment*/
      ctx[0]
    },
    $$inline: true
  });
  var default_slot_template =
  /*$$slots*/
  ctx[2].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[1], null);
  var footer = new Footer({
    $$inline: true
  });
  var block = {
    c: function create() {
      meta = element("meta");
      style = element("style");
      t0 = text("input[type='checkbox'] {\n  background-color: transparent;\n}\n\n.dg .c input[type='checkbox'] {\n  margin-top: 12px !important;\n}\n\nselect {\n  color: #fffcfc;\n  width: 100%;\n  height: 25px;\n  background-color: #303030;\n}\n\n.dg li:not(.folder) {\n  cursor: auto;\n  height: 40px !important;\n  line-height: 27px;\n  padding: 0 4px;\n}\n\n.dg .c .slider-fg {\n  background: white;\n  max-width: 100%;\n  height: 15px;\n  position: relative;\n  top: -6px;\n}\n\n.dg .slider {\n  float: left;\n  width: 66%;\n  margin-left: 0;\n  margin-right: 0;\n  height: 4px !important;\n  margin-top: 6px;\n  position: relative;\n  top: 13px;\n}\n\n.dg .cr.number input[type='text'] {\n  color: #ffffff !important;\n}\n\n.property-name {\n  padding-top: 3px !important;\n}\n\n.dg .c input[type='text'] {\n  border: 0;\n  margin-top: 4px;\n  padding: 3px;\n  width: 50%;\n  float: right;\n}\n\n.dg .slider {\n  margin-left: 0 !important;\n}\n\n.bga {\n  background-image: url('bgf.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXMvZGFuY2Vwb3NlL19sYXlvdXQuc3ZlbHRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNRO0VBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0VBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0VBQ0ksY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0VBQ0ksWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsY0FBYztBQUNsQjs7QUFFQTtFQUNJLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTO0FBQ2I7O0FBRUE7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsU0FBUztBQUNiOztBQUVBO0VBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0VBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0VBQ0ksU0FBUztFQUNULGVBQWU7RUFDZixZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7QUFDaEI7O0FBRUE7RUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7RUFDSSxnQ0FBZ0M7RUFDaEMsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL3JvdXRlcy9kYW5jZXBvc2UvX2xheW91dC5zdmVsdGUiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZyAuYyBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGVjdCB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmNmYztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZyBsaTpub3QoLmZvbGRlcikge1xuICAgICAgICAgICAgY3Vyc29yOiBhdXRvO1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRnIC5jIC5zbGlkZXItZmcge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IC02cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGcgLnNsaWRlciB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiA2NiU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgIGhlaWdodDogNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IDEzcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGcgLmNyLm51bWJlciBpbnB1dFt0eXBlPSd0ZXh0J10ge1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9wZXJ0eS1uYW1lIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZyAuYyBpbnB1dFt0eXBlPSd0ZXh0J10ge1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZyAuc2xpZGVyIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAuYmdhIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnYmdmLnBuZycpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIH1cbiAgICAiXX0= */");
      t1 = space();
      div = element("div");
      create_component(navslim.$$.fragment);
      t2 = space();
      if (default_slot) default_slot.c();
      t3 = space();
      create_component(footer.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-8pwvzo\"]", document.head);
      meta = claim_element(head_nodes, "META", {
        name: true,
        content: true
      });
      style = claim_element(head_nodes, "STYLE", {});
      var style_nodes = children(style);
      t0 = claim_text(style_nodes, "input[type='checkbox'] {\n  background-color: transparent;\n}\n\n.dg .c input[type='checkbox'] {\n  margin-top: 12px !important;\n}\n\nselect {\n  color: #fffcfc;\n  width: 100%;\n  height: 25px;\n  background-color: #303030;\n}\n\n.dg li:not(.folder) {\n  cursor: auto;\n  height: 40px !important;\n  line-height: 27px;\n  padding: 0 4px;\n}\n\n.dg .c .slider-fg {\n  background: white;\n  max-width: 100%;\n  height: 15px;\n  position: relative;\n  top: -6px;\n}\n\n.dg .slider {\n  float: left;\n  width: 66%;\n  margin-left: 0;\n  margin-right: 0;\n  height: 4px !important;\n  margin-top: 6px;\n  position: relative;\n  top: 13px;\n}\n\n.dg .cr.number input[type='text'] {\n  color: #ffffff !important;\n}\n\n.property-name {\n  padding-top: 3px !important;\n}\n\n.dg .c input[type='text'] {\n  border: 0;\n  margin-top: 4px;\n  padding: 3px;\n  width: 50%;\n  float: right;\n}\n\n.dg .slider {\n  margin-left: 0 !important;\n}\n\n.bga {\n  background-image: url('bgf.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXMvZGFuY2Vwb3NlL19sYXlvdXQuc3ZlbHRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNRO0VBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0VBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0VBQ0ksY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0VBQ0ksWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsY0FBYztBQUNsQjs7QUFFQTtFQUNJLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTO0FBQ2I7O0FBRUE7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsU0FBUztBQUNiOztBQUVBO0VBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0VBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0VBQ0ksU0FBUztFQUNULGVBQWU7RUFDZixZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7QUFDaEI7O0FBRUE7RUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7RUFDSSxnQ0FBZ0M7RUFDaEMsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL3JvdXRlcy9kYW5jZXBvc2UvX2xheW91dC5zdmVsdGUiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZyAuYyBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGVjdCB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmNmYztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZyBsaTpub3QoLmZvbGRlcikge1xuICAgICAgICAgICAgY3Vyc29yOiBhdXRvO1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRnIC5jIC5zbGlkZXItZmcge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IC02cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGcgLnNsaWRlciB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiA2NiU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgIGhlaWdodDogNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IDEzcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGcgLmNyLm51bWJlciBpbnB1dFt0eXBlPSd0ZXh0J10ge1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9wZXJ0eS1uYW1lIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZyAuYyBpbnB1dFt0eXBlPSd0ZXh0J10ge1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZyAuc2xpZGVyIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAuYmdhIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnYmdmLnBuZycpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIH1cbiAgICAiXX0= */");
      style_nodes.forEach(detach_dev);
      head_nodes.forEach(detach_dev);
      t1 = claim_space(nodes);
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      claim_component(navslim.$$.fragment, div_nodes);
      t2 = claim_space(div_nodes);
      if (default_slot) default_slot.l(div_nodes);
      t3 = claim_space(div_nodes);
      claim_component(footer.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Dance Pose";
      attr_dev(meta, "name", "segment");
      attr_dev(meta, "content",
      /*segment*/
      ctx[0]);
      add_location(meta, file$2, 9, 4, 209);
      add_location(style, file$2, 11, 4, 256);
      attr_dev(div, "class", div_class_value = "flex flex-col justify-between w-screen h-screen bga " + (
      /*segment*/
      ctx[0] === undefined ? "overflow-hidden" : ""));
      add_location(div, file$2, 82, 0, 4399);
    },
    m: function mount(target, anchor) {
      append_dev(document.head, meta);
      append_dev(document.head, style);
      append_dev(style, t0);
      insert_dev(target, t1, anchor);
      insert_dev(target, div, anchor);
      mount_component(navslim, div, null);
      append_dev(div, t2);

      if (default_slot) {
        default_slot.m(div, null);
      }

      append_dev(div, t3);
      mount_component(footer, div, null);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (!current || dirty &
      /*segment*/
      1) {
        attr_dev(meta, "content",
        /*segment*/
        ctx[0]);
      }

      var navslim_changes = {};
      if (dirty &
      /*segment*/
      1) navslim_changes.segment =
      /*segment*/
      ctx[0];
      navslim.$set(navslim_changes);

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        2) {
          default_slot.p(get_slot_context(default_slot_template, ctx,
          /*$$scope*/
          ctx[1], null), get_slot_changes(default_slot_template,
          /*$$scope*/
          ctx[1], dirty, null));
        }
      }

      if (!current || dirty &
      /*segment*/
      1 && div_class_value !== (div_class_value = "flex flex-col justify-between w-screen h-screen bga " + (
      /*segment*/
      ctx[0] === undefined ? "overflow-hidden" : ""))) {
        attr_dev(div, "class", div_class_value);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(navslim.$$.fragment, local);
      transition_in(default_slot, local);
      transition_in(footer.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(navslim.$$.fragment, local);
      transition_out(default_slot, local);
      transition_out(footer.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      detach_dev(meta);
      detach_dev(style);
      if (detaching) detach_dev(t1);
      if (detaching) detach_dev(div);
      destroy_component(navslim);
      if (default_slot) default_slot.d(detaching);
      destroy_component(footer);
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
  var segment = $$props.segment;
  var writable_props = ["segment"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Layout> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Layout", $$slots, ['default']);

  $$self.$set = function ($$props) {
    if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
    if ("$$scope" in $$props) $$invalidate(1, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      NavSlim: NavSlim,
      Footer: Footer,
      segment: segment
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [segment, $$scope, $$slots];
}

var Layout = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Layout, _SvelteComponentDev);

  var _super = _createSuper$2(Layout);

  function Layout(options) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {
      segment: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Layout",
      options: options,
      id: create_fragment$2.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*segment*/
    ctx[0] === undefined && !("segment" in props)) {
      console.warn("<Layout> was created without expected prop 'segment'");
    }

    return _this;
  }

  _createClass(Layout, [{
    key: "segment",
    get: function get() {
      throw new Error("<Layout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Layout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Layout;
}(SvelteComponentDev);

export default Layout;
