import { _ as _inherits, a as _classCallCheck, b as init, s as safe_not_equal, c as _assertThisInitialized, d as dispatch_dev, S as SvelteComponentDev, v as validate_slots, g as _getPrototypeOf, h as _possibleConstructorReturn, j as element, A as space, B as text, k as claim_element, l as children, m as detach_dev, D as claim_space, E as claim_text, n as attr_dev, o as add_location, p as insert_dev, F as append_dev, G as noop } from './client.60cf2230.js';

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/dancepose/about.svelte";

function create_fragment(ctx) {
  var div8;
  var div5;
  var div0;
  var t0;
  var div3;
  var h2;
  var t1;
  var t2;
  var div2;
  var p0;
  var strong;
  var t3;
  var t4;
  var t5;
  var p1;
  var t6;
  var t7;
  var div1;
  var img;
  var img_src_value;
  var t8;
  var p2;
  var t9;
  var t10;
  var p3;
  var t11;
  var t12;
  var p4;
  var t13;
  var br;
  var t14;
  var a;
  var t15;
  var t16;
  var t17;
  var div4;
  var t18;
  var div6;
  var t19;
  var div7;
  var block = {
    c: function create() {
      div8 = element("div");
      div5 = element("div");
      div0 = element("div");
      t0 = space();
      div3 = element("div");
      h2 = element("h2");
      t1 = text("About US");
      t2 = space();
      div2 = element("div");
      p0 = element("p");
      strong = element("strong");
      t3 = text("DancePose");
      t4 = text("\n                    utiliza modelos de machine learning de reconocimiento de\n                    posturas y los saca de su contexto de uso habitual,\n                    despojándolos de su carácter utilitario para generar algo…\n                    simplemente bonito.");
      t5 = space();
      p1 = element("p");
      t6 = text("Se trata de un proyecto de arte generativo que fusiona las\n                    coreografías clásicas que se acomodan en nuestros recuerdos\n                    con inteligencia artificial, ese elemento cada vez más\n                    central en nuestras vidas.");
      t7 = space();
      div1 = element("div");
      img = element("img");
      t8 = space();
      p2 = element("p");
      t9 = text("Un proyecto para interactuar con él, para jugar con la\n                    generación de partículas al ritmo de la música, para\n                    evadirse al menos el tiempo que dura un buen taconeo\n                    mientras explora la simple y a la vez compleja concepción de\n                    lo bonito.");
      t10 = space();
      p3 = element("p");
      t11 = text("Enjoy!");
      t12 = space();
      p4 = element("p");
      t13 = text("* Por exigencias técnicas del modelo de ML, para interactuar\n                    con DancePose necesitas un equipo con una buena CPU.\n                    ");
      br = element("br");
      t14 = text("\n                    Si no cuentas con ello, puedes disfrutar de los vídeos\n                    generados con la herramienta en el\n                    ");
      a = element("a");
      t15 = text("Instagram");
      t16 = text("\n                    de #bikolabs.");
      t17 = space();
      div4 = element("div");
      t18 = space();
      div6 = element("div");
      t19 = space();
      div7 = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div8 = claim_element(nodes, "DIV", {
        class: true
      });
      var div8_nodes = children(div8);
      div5 = claim_element(div8_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      div0 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      children(div0).forEach(detach_dev);
      t0 = claim_space(div5_nodes);
      div3 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      h2 = claim_element(div3_nodes, "H2", {
        class: true
      });
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "About US");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      p0 = claim_element(div2_nodes, "P", {});
      var p0_nodes = children(p0);
      strong = claim_element(p0_nodes, "STRONG", {});
      var strong_nodes = children(strong);
      t3 = claim_text(strong_nodes, "DancePose");
      strong_nodes.forEach(detach_dev);
      t4 = claim_text(p0_nodes, "\n                    utiliza modelos de machine learning de reconocimiento de\n                    posturas y los saca de su contexto de uso habitual,\n                    despojándolos de su carácter utilitario para generar algo…\n                    simplemente bonito.");
      p0_nodes.forEach(detach_dev);
      t5 = claim_space(div2_nodes);
      p1 = claim_element(div2_nodes, "P", {});
      var p1_nodes = children(p1);
      t6 = claim_text(p1_nodes, "Se trata de un proyecto de arte generativo que fusiona las\n                    coreografías clásicas que se acomodan en nuestros recuerdos\n                    con inteligencia artificial, ese elemento cada vez más\n                    central en nuestras vidas.");
      p1_nodes.forEach(detach_dev);
      t7 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      img = claim_element(div1_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      div1_nodes.forEach(detach_dev);
      t8 = claim_space(div2_nodes);
      p2 = claim_element(div2_nodes, "P", {});
      var p2_nodes = children(p2);
      t9 = claim_text(p2_nodes, "Un proyecto para interactuar con él, para jugar con la\n                    generación de partículas al ritmo de la música, para\n                    evadirse al menos el tiempo que dura un buen taconeo\n                    mientras explora la simple y a la vez compleja concepción de\n                    lo bonito.");
      p2_nodes.forEach(detach_dev);
      t10 = claim_space(div2_nodes);
      p3 = claim_element(div2_nodes, "P", {
        class: true
      });
      var p3_nodes = children(p3);
      t11 = claim_text(p3_nodes, "Enjoy!");
      p3_nodes.forEach(detach_dev);
      t12 = claim_space(div2_nodes);
      p4 = claim_element(div2_nodes, "P", {
        class: true
      });
      var p4_nodes = children(p4);
      t13 = claim_text(p4_nodes, "* Por exigencias técnicas del modelo de ML, para interactuar\n                    con DancePose necesitas un equipo con una buena CPU.\n                    ");
      br = claim_element(p4_nodes, "BR", {});
      t14 = claim_text(p4_nodes, "\n                    Si no cuentas con ello, puedes disfrutar de los vídeos\n                    generados con la herramienta en el\n                    ");
      a = claim_element(p4_nodes, "A", {
        href: true,
        target: true
      });
      var a_nodes = children(a);
      t15 = claim_text(a_nodes, "Instagram");
      a_nodes.forEach(detach_dev);
      t16 = claim_text(p4_nodes, "\n                    de #bikolabs.");
      p4_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t17 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      children(div4).forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      t18 = claim_space(div8_nodes);
      div6 = claim_element(div8_nodes, "DIV", {
        class: true
      });
      children(div6).forEach(detach_dev);
      t19 = claim_space(div8_nodes);
      div7 = claim_element(div8_nodes, "DIV", {
        class: true
      });
      children(div7).forEach(detach_dev);
      div8_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "w-0 xl:w-3/12");
      add_location(div0, file, 8, 8, 488);
      attr_dev(h2, "class", "font-ptserif font-bold text-5xl pb-4");
      add_location(h2, file, 10, 12, 596);
      add_location(strong, file, 13, 20, 751);
      add_location(p0, file, 12, 16, 727);
      add_location(p1, file, 20, 16, 1084);
      attr_dev(img, "class", "max-w-full");
      if (img.src !== (img_src_value = "AI.jpg")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "Dancepose");
      add_location(img, file, 27, 20, 1450);
      attr_dev(div1, "class", "pt-3 pb-8");
      add_location(div1, file, 26, 16, 1406);
      add_location(p2, file, 30, 16, 1546);
      attr_dev(p3, "class", "font-bold");
      add_location(p3, file, 37, 16, 1920);
      add_location(br, file, 42, 20, 2168);
      attr_dev(a, "href", "https://www.instagram.com/bikolabs/");
      attr_dev(a, "target", "_blank");
      add_location(a, file, 45, 20, 2325);
      attr_dev(p4, "class", "pt-5 text-sm");
      add_location(p4, file, 39, 16, 1969);
      attr_dev(div2, "class", "font-lato leading-relaxed");
      add_location(div2, file, 11, 12, 671);
      attr_dev(div3, "class", "pt-5 px-3 xl:pt-10 xl:px-10 w-full xl:w-4/6");
      add_location(div3, file, 9, 8, 526);
      attr_dev(div4, "class", "w-0 xl:w-3/12");
      add_location(div4, file, 55, 8, 2593);
      attr_dev(div5, "class", "container flex px-10");
      add_location(div5, file, 7, 4, 445);
      attr_dev(div6, "class", "divider-xl");
      add_location(div6, file, 58, 4, 2639);
      attr_dev(div7, "class", "divider-xl");
      add_location(div7, file, 59, 4, 2670);
      attr_dev(div8, "class", "bg-white h-about svelte-123k8m2");
      add_location(div8, file, 6, 0, 410);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div8, anchor);
      append_dev(div8, div5);
      append_dev(div5, div0);
      append_dev(div5, t0);
      append_dev(div5, div3);
      append_dev(div3, h2);
      append_dev(h2, t1);
      append_dev(div3, t2);
      append_dev(div3, div2);
      append_dev(div2, p0);
      append_dev(p0, strong);
      append_dev(strong, t3);
      append_dev(p0, t4);
      append_dev(div2, t5);
      append_dev(div2, p1);
      append_dev(p1, t6);
      append_dev(div2, t7);
      append_dev(div2, div1);
      append_dev(div1, img);
      append_dev(div2, t8);
      append_dev(div2, p2);
      append_dev(p2, t9);
      append_dev(div2, t10);
      append_dev(div2, p3);
      append_dev(p3, t11);
      append_dev(div2, t12);
      append_dev(div2, p4);
      append_dev(p4, t13);
      append_dev(p4, br);
      append_dev(p4, t14);
      append_dev(p4, a);
      append_dev(a, t15);
      append_dev(p4, t16);
      append_dev(div5, t17);
      append_dev(div5, div4);
      append_dev(div8, t18);
      append_dev(div8, div6);
      append_dev(div8, t19);
      append_dev(div8, div7);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div8);
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

function instance($$self, $$props) {
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<About> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("About", $$slots, []);
  return [];
}

var About = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(About, _SvelteComponentDev);

  var _super = _createSuper(About);

  function About(options) {
    var _this;

    _classCallCheck(this, About);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "About",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return About;
}(SvelteComponentDev);

export default About;
