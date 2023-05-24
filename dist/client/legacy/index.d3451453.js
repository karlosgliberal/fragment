import { i as identity, _ as _inherits, a as _classCallCheck, b as init, s as safe_not_equal, c as _assertThisInitialized, d as dispatch_dev, e as _createClass, S as SvelteComponentDev, f as create_slot, v as validate_slots, g as _getPrototypeOf, h as _possibleConstructorReturn, j as element, k as claim_element, l as children, m as detach_dev, n as attr_dev, o as add_location, p as insert_dev, q as _slicedToArray, r as get_slot_context, t as get_slot_changes, u as transition_in, w as add_render_callback, x as create_in_transition, y as transition_out, z as create_out_transition, A as space, B as text, C as query_selector_all, D as claim_space, E as claim_text, F as append_dev, G as noop } from './client.60cf2230.js';

function fade(node, _ref2) {
  var _ref2$delay = _ref2.delay,
      delay = _ref2$delay === void 0 ? 0 : _ref2$delay,
      _ref2$duration = _ref2.duration,
      duration = _ref2$duration === void 0 ? 400 : _ref2$duration,
      _ref2$easing = _ref2.easing,
      easing = _ref2$easing === void 0 ? identity : _ref2$easing;
  var o = +getComputedStyle(node).opacity;
  return {
    delay: delay,
    duration: duration,
    easing: easing,
    css: function css(t) {
      return "opacity: ".concat(t * o);
    }
  };
}

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/components/Page.svelte";

function create_fragment(ctx) {
  var div;
  var div_intro;
  var div_outro;
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[2].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[1], null);
  var block = {
    c: function create() {
      div = element("div");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      if (default_slot) default_slot.l(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class",
      /*className*/
      ctx[0]);
      add_location(div, file, 15, 0, 404);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      if (default_slot) {
        default_slot.m(div, null);
      }

      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

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
      /*className*/
      1) {
        attr_dev(div, "class",
        /*className*/
        ctx[0]);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      add_render_callback(function () {
        if (div_outro) div_outro.end(1);
        if (!div_intro) div_intro = create_in_transition(div, fade, {
          delay: TRANSITION_DURATION,
          duration: TRANSITION_DURATION
        });
        div_intro.start();
      });
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      if (div_intro) div_intro.invalidate();
      div_outro = create_out_transition(div, fade, {
        duration: TRANSITION_DURATION
      });
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      if (default_slot) default_slot.d(detaching);
      if (detaching && div_outro) div_outro.end();
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

var TRANSITION_DURATION = 400;

function instance($$self, $$props, $$invalidate) {
  var _$$props$className = $$props.className,
      className = _$$props$className === void 0 ? "" : _$$props$className;
  var writable_props = ["className"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Page> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Page", $$slots, ['default']);

  $$self.$set = function ($$props) {
    if ("className" in $$props) $$invalidate(0, className = $$props.className);
    if ("$$scope" in $$props) $$invalidate(1, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      fade: fade,
      className: className,
      TRANSITION_DURATION: TRANSITION_DURATION
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("className" in $$props) $$invalidate(0, className = $$props.className);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [className, $$scope, $$slots];
}

var Page = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Page, _SvelteComponentDev);

  var _super = _createSuper(Page);

  function Page(options) {
    var _this;

    _classCallCheck(this, Page);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      className: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Page",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(Page, [{
    key: "className",
    get: function get() {
      throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Page;
}(SvelteComponentDev);

function _createSuper$1(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct$1()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src/routes/index.svelte";

function create_fragment$1(ctx) {
  var t0;
  var div1;
  var div0;
  var img;
  var img_src_value;
  var t1;
  var div3;
  var div2;
  var a;
  var t2;
  var block = {
    c: function create() {
      t0 = space();
      div1 = element("div");
      div0 = element("div");
      img = element("img");
      t1 = space();
      div3 = element("div");
      div2 = element("div");
      a = element("a");
      t2 = text("Dancepose");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1taq64t\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", {
        id: true,
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      img = claim_element(div0_nodes, "IMG", {
        src: true,
        alt: true
      });
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t1 = claim_space(nodes);
      div3 = claim_element(nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      a = claim_element(div2_nodes, "A", {
        class: true,
        href: true
      });
      var a_nodes = children(a);
      t2 = claim_text(a_nodes, "Dancepose");
      a_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Fragment";
      if (img.src !== (img_src_value = "fragment.png")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "");
      add_location(img, file$1, 19, 8, 889);
      attr_dev(div0, "class", "flex");
      add_location(div0, file$1, 18, 4, 862);
      attr_dev(div1, "id", "centercenter");
      attr_dev(div1, "class", "flex justify-center w-full svelte-1avg9ha");
      add_location(div1, file$1, 17, 0, 799);
      attr_dev(a, "class", "inline-block border-solid border hover:border-black\n            border-gray-500 uppercase py-3 px-10 transition duration-150\n            ease-in-out transform hover:scale-105");
      attr_dev(a, "href", "dancepose");
      add_location(a, file$1, 25, 8, 1010);
      attr_dev(div2, "class", "flex");
      add_location(div2, file$1, 24, 4, 983);
      attr_dev(div3, "class", "flex justify-center w-");
      add_location(div3, file$1, 23, 0, 942);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, div1, anchor);
      append_dev(div1, div0);
      append_dev(div0, img);
      insert_dev(target, t1, anchor);
      insert_dev(target, div3, anchor);
      append_dev(div3, div2);
      append_dev(div2, a);
      append_dev(a, t2);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div1);
      if (detaching) detach_dev(t1);
      if (detaching) detach_dev(div3);
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
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Routes> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Routes", $$slots, []);

  $$self.$capture_state = function () {
    return {
      Page: Page
    };
  };

  return [];
}

var Routes = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Routes, _SvelteComponentDev);

  var _super = _createSuper$1(Routes);

  function Routes(options) {
    var _this;

    _classCallCheck(this, Routes);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Routes",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  return Routes;
}(SvelteComponentDev);

export default Routes;
