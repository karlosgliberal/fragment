function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function i(t,e,n,r){if(t){const o=l(t,e,n,r);return t[0](o)}}function l(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function u(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}function f(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function p(t,e){t.appendChild(e)}function d(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function y(){return $(" ")}function b(){return $("")}function v(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function _(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function E(t){return Array.from(t.childNodes)}function S(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;for(;e<o.attributes.length;){const t=o.attributes[e];n[t.name]?e++:o.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):g(e)}function w(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return $(e)}function x(t){return w(t," ")}function A(t,e){e=""+e,t.data!==e&&(t.data=e)}function j(t,e=document.body){return Array.from(e.querySelectorAll(t))}let P;function R(t){P=t}function C(){if(!P)throw new Error("Function called outside component initialization");return P}const L=[],q=[],k=[],N=[],T=Promise.resolve();let O=!1;function U(t){k.push(t)}let M=!1;const D=new Set;function I(){if(!M){M=!0;do{for(let t=0;t<L.length;t+=1){const e=L[t];R(e),H(e.$$)}for(L.length=0;q.length;)q.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];D.has(e)||(D.add(e),e())}k.length=0}while(L.length);for(;N.length;)N.pop()();O=!1,M=!1,D.clear()}}function H(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}const B=new Set;let J;function F(){J={r:0,c:[],p:J}}function K(){J.r||o(J.c),J=J.p}function V(t,e){t&&t.i&&(B.delete(t),t.i(e))}function z(t,e,n,r){if(t&&t.o){if(B.has(t))return;B.add(t),J.c.push(()=>{B.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function G(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],a=e[s];if(a){for(const t in c)t in a||(r[t]=1);for(const t in a)o[t]||(n[t]=a[t],o[t]=1);t[s]=a}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function X(t){return"object"==typeof t&&null!==t?t:{}}function W(t){t&&t.c()}function Y(t,e){t&&t.l(e)}function Q(t,e,r){const{fragment:c,on_mount:a,on_destroy:i,after_update:l}=t.$$;c&&c.m(e,r),U(()=>{const e=a.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(U)}function Z(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function tt(t,e){-1===t.$$.dirty[0]&&(L.push(t),O||(O=!0,T.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function et(e,n,s,c,a,i,l=[-1]){const u=P;R(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let d=!1;if(p.ctx=s?s(e,f,(t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&a(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),d&&tt(e,t)),n}):[],p.update(),d=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),n.target){if(n.hydrate){const t=E(n.target);p.fragment&&p.fragment.l(t),t.forEach(m)}else p.fragment&&p.fragment.c();n.intro&&V(e.$$.fragment),Q(e,n.target,n.anchor),I()}R(u)}class nt{$destroy(){Z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const rt=[];function ot(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!rt.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),rt.push(n,e)}if(t){for(let t=0;t<rt.length;t+=2)rt[t][0](rt[t+1]);rt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,a=t){const i=[c,a];return o.push(i),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const st={},ct=()=>({});function at(t){let e,n,r,o,s,c,a,f,h,$,b,v,w,A,P;const R=t[2].default,C=i(R,t,t[1],null);return{c(){e=g("meta"),n=g("meta"),r=g("meta"),o=g("meta"),s=g("meta"),c=g("meta"),a=g("meta"),f=g("script"),$=g("script"),v=g("script"),A=y(),C&&C.c(),this.h()},l(t){const i=j('[data-svelte="svelte-bdhqu"]',document.head);e=S(i,"META",{charset:!0}),n=S(i,"META",{name:!0,content:!0}),r=S(i,"META",{"http-equiv":!0,content:!0}),o=S(i,"META",{name:!0,content:!0}),s=S(i,"META",{name:!0,content:!0}),c=S(i,"META",{name:!0,content:!0}),a=S(i,"META",{name:!0,content:!0}),f=S(i,"SCRIPT",{src:!0}),E(f).forEach(m),$=S(i,"SCRIPT",{src:!0}),E($).forEach(m),v=S(i,"SCRIPT",{src:!0}),E(v).forEach(m),i.forEach(m),A=x(t),C&&C.l(t),this.h()},h(){_(e,"charset","UTF-8"),_(n,"name","viewport"),_(n,"content","width=device-width, initial-scale=1.0"),_(r,"http-equiv","X-UA-Compatible"),_(r,"content","ie=edge"),_(o,"name","description"),_(o,"content",""),_(s,"name","keywords"),_(s,"content",""),_(c,"name","author"),_(c,"content",""),_(a,"name","segment"),_(a,"content",t[0]),f.src!==(h="https://cdn.jsdelivr.net/npm/p5@1.0.0/lib/p5.js")&&_(f,"src","https://cdn.jsdelivr.net/npm/p5@1.0.0/lib/p5.js"),$.src!==(b="https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.6/dat.gui.min.js")&&_($,"src","https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.6/dat.gui.min.js"),v.src!==(w="https://unpkg.com/ml5@0.5.0/dist/ml5.min.js")&&_(v,"src","https://unpkg.com/ml5@0.5.0/dist/ml5.min.js")},m(t,i){p(document.head,e),p(document.head,n),p(document.head,r),p(document.head,o),p(document.head,s),p(document.head,c),p(document.head,a),p(document.head,f),p(document.head,$),p(document.head,v),d(t,A,i),C&&C.m(t,i),P=!0},p(t,[e]){(!P||1&e)&&_(a,"content",t[0]),C&&C.p&&2&e&&C.p(l(R,t,t[1],null),u(R,t[1],e,null))},i(t){P||(V(C,t),P=!0)},o(t){z(C,t),P=!1},d(t){m(e),m(n),m(r),m(o),m(s),m(c),m(a),m(f),m($),m(v),t&&m(A),C&&C.d(t)}}}function it(t,e,n){let{segment:r}=e,{$$slots:o={},$$scope:s}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[r,s,o]}class lt extends nt{constructor(t){super(),et(this,t,it,at,c,{segment:0})}}function ut(t){let e,n,r=t[1].stack+"";return{c(){e=g("pre"),n=$(r)},l(t){e=S(t,"PRE",{});var o=E(e);n=w(o,r),o.forEach(m)},m(t,r){d(t,e,r),p(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&A(n,r)},d(t){t&&m(e)}}}function ft(e){let n,r,o,s,c,a,i,l,u,f=e[1].message+"";document.title=n=e[0];let h=e[2]&&e[1].stack&&ut(e);return{c(){r=y(),o=g("h1"),s=$(e[0]),c=y(),a=g("p"),i=$(f),l=y(),h&&h.c(),u=b()},l(t){j('[data-svelte="svelte-4sldlf"]',document.head).forEach(m),r=x(t),o=S(t,"H1",{});var n=E(o);s=w(n,e[0]),n.forEach(m),c=x(t),a=S(t,"P",{});var p=E(a);i=w(p,f),p.forEach(m),l=x(t),h&&h.l(t),u=b()},m(t,e){d(t,r,e),d(t,o,e),p(o,s),d(t,c,e),d(t,a,e),p(a,i),d(t,l,e),h&&h.m(t,e),d(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&A(s,t[0]),2&e&&f!==(f=t[1].message+"")&&A(i,f),t[2]&&t[1].stack?h?h.p(t,e):(h=ut(t),h.c(),h.m(u.parentNode,u)):h&&(h.d(1),h=null)},i:t,o:t,d(t){t&&m(r),t&&m(o),t&&m(c),t&&m(a),t&&m(l),h&&h.d(t),t&&m(u)}}}function pt(t,e,n){let{status:r}=e,{error:o}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}class dt extends nt{constructor(t){super(),et(this,t,pt,ft,c,{status:0,error:1})}}function mt(t){let n,r;const o=[{segment:t[2][1]},t[4].props];var s=t[4].component;function c(t){let n={$$slots:{default:[$t]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}if(s)var a=new s(c(t));return{c(){a&&W(a.$$.fragment),n=b()},l(t){a&&Y(a.$$.fragment,t),n=b()},m(t,e){a&&Q(a,t,e),d(t,n,e),r=!0},p(t,e){const r=20&e?G(o,[4&e&&{segment:t[2][1]},16&e&&X(t[4].props)]):{};if(160&e&&(r.$$scope={dirty:e,ctx:t}),s!==(s=t[4].component)){if(a){F();const t=a;z(t.$$.fragment,1,0,()=>{Z(t,1)}),K()}s?(W((a=new s(c(t))).$$.fragment),V(a.$$.fragment,1),Q(a,n.parentNode,n)):a=null}else s&&a.$set(r)},i(t){r||(a&&V(a.$$.fragment,t),r=!0)},o(t){a&&z(a.$$.fragment,t),r=!1},d(t){t&&m(n),a&&Z(a,t)}}}function ht(t){let e;const n=new dt({props:{error:t[0],status:t[1]}});return{c(){W(n.$$.fragment)},l(t){Y(n.$$.fragment,t)},m(t,r){Q(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(V(n.$$.fragment,t),e=!0)},o(t){z(n.$$.fragment,t),e=!1},d(t){Z(n,t)}}}function gt(t){let n,r;const o=[t[5].props];var s=t[5].component;function c(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}if(s)var a=new s(c());return{c(){a&&W(a.$$.fragment),n=b()},l(t){a&&Y(a.$$.fragment,t),n=b()},m(t,e){a&&Q(a,t,e),d(t,n,e),r=!0},p(t,e){const r=32&e?G(o,[X(t[5].props)]):{};if(s!==(s=t[5].component)){if(a){F();const t=a;z(t.$$.fragment,1,0,()=>{Z(t,1)}),K()}s?(W((a=new s(c())).$$.fragment),V(a.$$.fragment,1),Q(a,n.parentNode,n)):a=null}else s&&a.$set(r)},i(t){r||(a&&V(a.$$.fragment,t),r=!0)},o(t){a&&z(a.$$.fragment,t),r=!1},d(t){t&&m(n),a&&Z(a,t)}}}function $t(t){let e,n,r=t[5]&&gt(t);return{c(){r&&r.c(),e=b()},l(t){r&&r.l(t),e=b()},m(t,o){r&&r.m(t,o),d(t,e,o),n=!0},p(t,n){t[5]?r?(r.p(t,n),V(r,1)):(r=gt(t),r.c(),V(r,1),r.m(e.parentNode,e)):r&&(F(),z(r,1,1,()=>{r=null}),K())},i(t){n||(V(r),n=!0)},o(t){z(r),n=!1},d(t){r&&r.d(t),t&&m(e)}}}function yt(t){let e,n,r,o;const s=[ht,mt],c=[];function a(t,e){return t[0]?0:1}return e=a(t),n=c[e]=s[e](t),{c(){n.c(),r=b()},l(t){n.l(t),r=b()},m(t,n){c[e].m(t,n),d(t,r,n),o=!0},p(t,o){let i=e;e=a(t),e===i?c[e].p(t,o):(F(),z(c[i],1,1,()=>{c[i]=null}),K(),n=c[e],n||(n=c[e]=s[e](t),n.c()),V(n,1),n.m(r.parentNode,r))},i(t){o||(V(n),o=!0)},o(t){z(n),o=!1},d(t){c[e].d(t),t&&m(r)}}}function bt(t){let n;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[yt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);const s=new lt({props:o});return{c(){W(s.$$.fragment)},l(t){Y(s.$$.fragment,t)},m(t,e){Q(s,t,e),n=!0},p(t,[e]){const n=12&e?G(r,[4&e&&{segment:t[2][0]},8&e&&X(t[3].props)]):{};183&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(V(s.$$.fragment,t),n=!0)},o(t){z(s.$$.fragment,t),n=!1},d(t){Z(s,t)}}}function vt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:c}=e,{level0:a}=e,{level1:i=null}=e,{level2:l=null}=e;var u,f;return u=st,f=r,C().$$.context.set(u,f),t.$set=t=>{"stores"in t&&n(6,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,i=t.level1),"level2"in t&&n(5,l=t.level2)},[o,s,c,a,i,l,r]}class _t extends nt{constructor(t){super(),et(this,t,vt,bt,c,{stores:6,error:0,status:1,segments:2,level0:3,level1:4,level2:5})}}const Et=[/^\/dancepose\/video-data\/?$/],St=[{js:()=>import("./index.5eeaad59.js"),css:[]},{js:()=>import("./_layout.e4c177e9.js"),css:[]},{js:()=>import("./index.5651d7dc.js"),css:[]},{js:()=>import("./sketch.f8ebe92f.js"),css:[]},{js:()=>import("./about.18d67daa.js"),css:[]}],wt=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/dancepose\/?$/,parts:[{i:1},{i:2}]},{pattern:/^\/dancepose\/sketch\/?$/,parts:[{i:1},{i:3}]},{pattern:/^\/dancepose\/about\/?$/,parts:[{i:1},{i:4}]}];const xt="undefined"!=typeof __SAPPER__&&__SAPPER__;let At,jt,Pt,Rt=!1,Ct=[],Lt="{}";const qt={page:ot({}),preloading:ot(null),session:ot(xt&&xt.session)};let kt,Nt;qt.session.subscribe(async t=>{if(kt=t,!Rt)return;Nt=!0;const e=Bt(new URL(location.href)),n=jt={},{redirect:r,props:o,branch:s}=await Vt(e);n===jt&&await Kt(r,s,o,e.page)});let Tt,Ot=null;let Ut,Mt=1;const Dt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},It={};function Ht(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Bt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(xt.baseUrl))return null;let e=t.pathname.slice(xt.baseUrl.length);if(""===e&&(e="/"),!Et.some(t=>t.test(e)))for(let n=0;n<wt.length;n+=1){const r=wt[n],o=r.pattern.exec(e);if(o){const n=Ht(t.search),s=r.parts[r.parts.length-1],c=s.params?s.params(o):{},a={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:o,page:a}}}}function Jt(){return{x:pageXOffset,y:pageYOffset}}async function Ft(t,e,n,r){if(e)Ut=e;else{const t=Jt();It[Ut]=t,e=Ut=++Mt,It[Ut]=n?t:{x:0,y:0}}Ut=e,At&&qt.preloading.set(!0);const o=Ot&&Ot.href===t.href?Ot.promise:Vt(t);Ot=null;const s=jt={},{redirect:c,props:a,branch:i}=await o;if(s===jt&&(await Kt(c,i,a,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=It[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}It[Ut]=t,t&&scrollTo(t.x,t.y)}}async function Kt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Bt(new URL(t,document.baseURI));return n?(Dt[e.replaceState?"replaceState":"pushState"]({id:Ut},"",t),Ft(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(qt.page.set(r),qt.preloading.set(!1),At)At.$set(n);else{n.stores={page:{subscribe:qt.page.subscribe},preloading:{subscribe:qt.preloading.subscribe},session:qt.session},n.level0={props:await Pt};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Gt(t.nextSibling);Gt(t),Gt(e)}At=new _t({target:Tt,props:n,hydrate:!0})}Ct=e,Lt=JSON.stringify(r.query),Rt=!0,Nt=!1}async function Vt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let a;Pt||(Pt=xt.preloaded[0]||ct.call(c,{host:n.host,path:n.path,query:n.query,params:{}},kt));let i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=await Promise.all(e.parts.map(async(e,a)=>{const f=r[a];if(function(t,e,n,r){if(r!==Lt)return!0;const o=Ct[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(a,f,l,o)&&(u=!0),s.segments[i]=r[a+1],!e)return{segment:f};const p=i++;if(!Nt&&!u&&Ct[a]&&Ct[a].part===e.i)return Ct[a];u=!1;const{default:d,preload:m}=await function(t){const e="string"==typeof t.css?[]:t.css.map(zt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(St[e.i]);let h;return h=Rt||!xt.preloaded[a+1]?m?await m.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},kt):{}:xt.preloaded[a+1],s[`level${p}`]={component:d,props:h,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,a=[]}return{redirect:o,props:s,branch:a}}function zt(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Gt(t){t.parentNode.removeChild(t)}function Xt(t){const e=Bt(new URL(t,document.baseURI));if(e)return Ot&&t===Ot.href||function(t,e){Ot={href:t,promise:e}}(t,Vt(e)),Ot.promise}let Wt;function Yt(t){clearTimeout(Wt),Wt=setTimeout(()=>{Qt(t)},20)}function Qt(t){const e=te(t.target);e&&"prefetch"===e.rel&&Xt(e.href)}function Zt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=te(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Bt(o);if(s){Ft(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),Dt.pushState({id:Ut},"",o.href)}}function te(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function ee(t){if(It[Ut]=Jt(),t.state){const e=Bt(new URL(location.href));e?Ft(e,t.state.id):location.href=location.href}else Mt=Mt+1,function(t){Ut=t}(Mt),Dt.replaceState({id:Ut},"",location.href)}const ne=()=>{return t=st,C().$$.context.get(t);var t};var re;re={target:document.querySelector("#sapper")},"scrollRestoration"in Dt&&(Dt.scrollRestoration="manual"),function(t){Tt=t}(re.target),addEventListener("click",Zt),addEventListener("popstate",ee),addEventListener("touchstart",Qt),addEventListener("mousemove",Yt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Dt.replaceState({id:Mt},"",e);const n=new URL(location.href);if(xt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:c,error:a}=xt;Pt||(Pt=s&&s[0]),Kt(null,[],{error:a,status:c,session:o,level0:{props:Pt},level1:{props:{status:c,error:a},component:dt},segments:s},{host:e,path:n,query:Ht(r),params:{}})}();const r=Bt(n);return r?Ft(r,Mt,!0,t):void 0});export{f as A,q as B,K as C,h as D,F as E,ne as F,a as G,nt as S,y as a,S as b,x as c,m as d,g as e,E as f,w as g,_ as h,et as i,d as j,p as k,v as l,i as m,t as n,W as o,Y as p,j as q,Q as r,c as s,$ as t,l as u,u as v,V as w,z as x,Z as y,e as z};
