!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="77c8e59f-9600-4a71-a6cf-de16f869e8ed",e._sentryDebugIdIdentifier="sentry-dbid-77c8e59f-9600-4a71-a6cf-de16f869e8ed")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"bf88a36fac1d7da309f25d9bd002b7838d121687"},(()=>{"use strict";var e={},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}t.m=e,t.c=n,t.amdO={},(()=>{var e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",n="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",o=e=>{e&&e.d<1&&(e.d=1,e.forEach(e=>e.r--),e.forEach(e=>e.r--?e.r++:e()))},a=t=>t.map(t=>{if(null!==t&&"object"==typeof t){if(t[e])return t;if(t.then){var a=[];a.d=0,t.then(e=>{c[n]=e,o(a)},e=>{c[r]=e,o(a)});var c={};return c[e]=e=>e(a),c}}var i={};return i[e]=e=>{},i[n]=t,i});t.a=(t,c,i)=>{i&&((f=[]).d=-1);var f,d,s,b,u=new Set,p=t.exports,_=new Promise((e,n)=>{b=n,s=e});_[n]=p,_[e]=e=>(f&&e(f),u.forEach(e),_.catch(e=>{})),t.exports=_,c(t=>{d=a(t);var o,c=()=>d.map(e=>{if(e[r])throw e[r];return e[n]}),i=new Promise(n=>{(o=()=>n(c)).r=0;var t=e=>e!==f&&!u.has(e)&&(u.add(e),e&&!e.d&&(o.r++,e.push(o)));d.map(n=>n[e](t))});return o.r?i:c()},e=>(e?b(_[r]=e):s(p),o(f))),f&&f.d<0&&(f.d=0)}})(),(()=>{var e=[];t.O=(n,r,o,a)=>{if(r){a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a];return}for(var i=1/0,c=0;c<e.length;c++){for(var[r,o,a]=e[c],f=!0,d=0;d<r.length;d++)i>=a&&Object.keys(t.O).every(e=>t.O[e](r[d]))?r.splice(d--,1):(f=!1,a<i&&(i=a));if(f){e.splice(c--,1);var s=o();void 0!==s&&(n=s)}}return n}})(),t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},(()=>{var e,n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;t.t=function(r,o){if(1&o&&(r=this(r)),8&o||"object"==typeof r&&r&&(4&o&&r.__esModule||16&o&&"function"==typeof r.then))return r;var a=Object.create(null);t.r(a);var c={};e=e||[null,n({}),n([]),n(n)];for(var i=2&o&&r;"object"==typeof i&&!~e.indexOf(i);i=n(i))Object.getOwnPropertyNames(i).forEach(e=>c[e]=()=>r[e]);return c.default=()=>r,t.d(a,c),a}})(),t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce((n,r)=>(t.f[r](e,n),n),[])),t.u=e=>"js/chunk."+(({170:"npm-async-swr",230:"npm-async-intl-segmenter-polyfill-rs",421:"npm-async-html2canvas",681:"npm-async-graphql",712:"npm-async-string_decoder",945:"npm-async-token-types",1006:"npm-async-pdf-lib",1584:"npm-async-buffer",1638:"npm-async-ieee754",1663:"npm-async-@marsidev",2107:"npm-async-@blocksuite",2394:"npm-async-@pdf-lib",2683:"npm-async-@radix-ui",2786:"npm-async-check-password-strength",3095:"npm-async-bytes",3685:"npm-async-cmdk",4073:"npm-async-readable-web-to-node-stream",4368:"npm-async-util-deprecate",4477:"npm-async-file-type",4654:"npm-async-jotai-devtools",4697:"npm-async-base64-js",4712:"npm-async-jotai-scope",4922:"npm-async-lodash-es",4999:"npm-async-foxact",5111:"npm-async-readable-stream",6007:"npm-async-animejs",6351:"npm-async-react-paginate",6814:"npm-async-image-blob-reduce",7065:"npm-async-events",7834:"npm-async-strtok3",8335:"app-async",8347:"npm-async-react-virtuoso",8352:"npm-async-peek-readable",8385:"npm-async-pako",8763:"npm-async-jotai",8772:"npm-async-shiki",9020:"npm-async-safe-buffer",9070:"npm-async-inherits",9141:"npm-async-@shikijs"})[e]||e)+"-"+({21:"07bf3953",170:"91715d30",210:"d6092d17",230:"ac7c8a13",274:"23c4bc28",421:"74c94117",472:"f01e925e",615:"8e6bc6a9",626:"2c181081",646:"d8c2eada",681:"fba49d1f",712:"17946468",867:"5525626f",945:"c42c473f",963:"54a5f9e6",1001:"b4696640",1006:"1f552213",1058:"97fea1c4",1068:"b8f00f93",1149:"ff2e7eec",1344:"0b714588",1401:"c912ccd1",1584:"26bf253a",1638:"5083654a",1663:"521b5122",2077:"51b91435",2107:"48823e13",2297:"0eff2f8a",2394:"36b75a1c",2683:"5b36bb37",2786:"dae31633",2966:"ccebd21e",2995:"7bfae787",3095:"94ae411e",3208:"6f58c891",3266:"a46918d3",3392:"a3768d05",3397:"6d892adc",3685:"a8b4aba0",3749:"d005d3bb",3813:"37ae1ce7",4073:"a212cc10",4163:"a3af4f2f",4368:"f409366f",4477:"52505308",4511:"49b9b76e",4579:"d6d2e212",4654:"44fe3f46",4677:"f60fbdd9",4697:"5e44414b",4712:"39266907",4720:"c572ae47",4861:"9a75d128",4873:"9b0a1a07",4922:"b4a9101f",4999:"9dbc30bc",5111:"a27b04f5",5383:"e439f540",5412:"76567985",5423:"4b8461bc",5670:"76db0ff9",5804:"a84a0203",6007:"2c3875e5",6116:"91d76c22",6351:"a1b04203",6610:"eecd6935",6814:"ee4f6405",6820:"6b8eee09",7016:"96dfb72c",7053:"d4034ee5",7062:"108bd9c4",7065:"dff58e81",7190:"1e265724",7442:"2ef9bea2",7509:"4f5452ad",7644:"4b3ea655",7776:"4f4ee82e",7833:"87e443b1",7834:"9862e8b3",8129:"b7dcd4b7",8232:"a70b0327",8255:"1879b0d2",8335:"307618f3",8347:"489fd2fd",8352:"de334bbf",8385:"3ad06606",8536:"80595dee",8588:"28203efe",8763:"bc577add",8772:"462d73f4",9020:"f3109a3c",9070:"28b82503",9083:"d7278805",9141:"c36b5180",9271:"38960ffb",9435:"f293b521",9507:"f0982a0c",9539:"7727ca58",9679:"c842969a"})[e]+".js",t.miniCssF=e=>"app-async.b4305593.css",t.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={},n="@affine/web:";t.l=(r,o,a,c)=>{if(e[r]){e[r].push(o);return}if(void 0!==a)for(var i,f,d=document.getElementsByTagName("script"),s=0;s<d.length;s++){var b=d[s];if(b.getAttribute("src")==r||b.getAttribute("data-webpack")==n+a){i=b;break}}i||(f=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",n+a),i.src=r),e[r]=[o];var u=(n,t)=>{i.onerror=i.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach(e=>e(t)),n)return n(t)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),f&&document.head.appendChild(i)}})(),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.p="https://prod.affineassets.com/",(()=>{if("undefined"!=typeof document){var e=(e,n,r,o,a)=>{var c=document.createElement("link");return c.rel="stylesheet",c.type="text/css",t.nc&&(c.nonce=t.nc),c.onerror=c.onload=t=>{if(c.onerror=c.onload=null,"load"===t.type)o();else{var r=t&&t.type,i=t&&t.target&&t.target.href||n,f=Error("Loading CSS chunk "+e+" failed.\n("+r+": "+i+")");f.name="ChunkLoadError",f.code="CSS_CHUNK_LOAD_FAILED",f.type=r,f.request=i,c.parentNode&&c.parentNode.removeChild(c),a(f)}},c.href=n,r?r.parentNode.insertBefore(c,r.nextSibling):document.head.appendChild(c),c},n=(e,n)=>{for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}for(var c=document.getElementsByTagName("style"),r=0;r<c.length;r++){var o=c[r],a=o.getAttribute("data-href");if(a===e||a===n)return o}},r=r=>new Promise((o,a)=>{var c=t.miniCssF(r),i=t.p+c;if(n(c,i))return o();e(r,i,null,o,a)}),o={9121:0};t.f.miniCss=(e,n)=>{o[e]?n.push(o[e]):0!==o[e]&&({8335:1})[e]&&n.push(o[e]=r(e).then(()=>{o[e]=0},n=>{throw delete o[e],n}))}}})(),(()=>{var e={9121:0,1869:0};t.f.j=(n,r)=>{var o=t.o(e,n)?e[n]:void 0;if(0!==o){if(o)r.push(o[2]);else if(/^(1869|8335|9121)$/.test(n))e[n]=0;else{var a=new Promise((t,r)=>o=e[n]=[t,r]);r.push(o[2]=a);var c=t.p+t.u(n),i=Error();t.l(c,r=>{if(t.o(e,n)&&(0!==(o=e[n])&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.src;i.message="Loading chunk "+n+" failed.\n("+a+": "+c+")",i.name="ChunkLoadError",i.type=a,i.request=c,o[1](i)}},"chunk-"+n,n)}}},t.O.j=n=>0===e[n];var n=(n,r)=>{var o,a,[c,i,f]=r,d=0;if(c.some(n=>0!==e[n])){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(f)var s=f(t)}for(n&&n(r);d<c.length;d++)a=c[d],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(s)},r=globalThis.webpackChunk_affine_web=globalThis.webpackChunk_affine_web||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))})(),t.nc=void 0,(()=>{var e,n,r,o,a,c,i,f,d,s,b,u,p,_,l,m,y,g,v,h,w,x,k,j,E,S,O,A,P,C,N,T,q={},B={88444:function(){return{"./intl_segmenter_polyfill_rs_bg.js":{__wbindgen_object_drop_ref:function(n){return void 0===e&&(e=t.c[8867].exports),e.bk(n)},__wbg_segments_new:function(e){return void 0===n&&(n=t.c[8867].exports),n.ZH(e)},__wbindgen_is_undefined:function(e){return void 0===r&&(r=t.c[8867].exports),r.vU(e)},__wbindgen_in:function(e,n){return void 0===o&&(o=t.c[8867].exports),o.zE(e,n)},__wbindgen_string_get:function(e,n){return void 0===a&&(a=t.c[8867].exports),a.qN(e,n)},__wbindgen_is_object:function(e){return void 0===c&&(c=t.c[8867].exports),c.qv(e)},__wbindgen_string_new:function(e,n){return void 0===i&&(i=t.c[8867].exports),i.yc(e,n)},__wbg_makeiter_99ccd6b658d32814:function(e){return void 0===f&&(f=t.c[8867].exports),f.aE(e)},__wbg_new_abda76e883ba8a5f:function(){return void 0===d&&(d=t.c[8867].exports),d.V5()},__wbg_stack_658279fe44541cf6:function(e,n){return void 0===s&&(s=t.c[8867].exports),s.u$(e,n)},__wbg_error_f851667af71bcfc6:function(e,n){return void 0===b&&(b=t.c[8867].exports),b.Xu(e,n)},__wbindgen_object_clone_ref:function(e){return void 0===u&&(u=t.c[8867].exports),u.BZ(e)},__wbindgen_jsval_loose_eq:function(e,n){return void 0===p&&(p=t.c[8867].exports),p.U8(e,n)},__wbindgen_boolean_get:function(e){return void 0===_&&(_=t.c[8867].exports),_.Nh(e)},__wbindgen_number_get:function(e,n){return void 0===l&&(l=t.c[8867].exports),l.sW(e,n)},__wbindgen_error_new:function(e,n){return void 0===m&&(m=t.c[8867].exports),m.Rj(e,n)},__wbindgen_number_new:function(e){return void 0===y&&(y=t.c[8867].exports),y.QR(e)},__wbindgen_bigint_from_u64:function(e){return void 0===g&&(g=t.c[8867].exports),g.Qg(e)},__wbg_getwithrefkey_4a92a5eca60879b9:function(e,n){return void 0===v&&(v=t.c[8867].exports),v.T9(e,n)},__wbg_set_9182712abebf82ef:function(e,n,r){return void 0===h&&(h=t.c[8867].exports),h.ET(e,n,r)},__wbg_new_9fb8d994e1c0aaac:function(){return void 0===w&&(w=t.c[8867].exports),w.hJ()},__wbg_instanceof_ArrayBuffer_e7d53d51371448e2:function(e){return void 0===x&&(x=t.c[8867].exports),x.tK(e)},__wbg_getPrototypeOf_a6e87842bce6351b:function(e){return void 0===k&&(k=t.c[8867].exports),k.u8(e)},__wbg_new_4a703d5c73064dfb:function(e,n){return void 0===j&&(j=t.c[8867].exports),j.gZ(e,n)},__wbg_buffer_a448f833075b71ba:function(e){return void 0===E&&(E=t.c[8867].exports),E.x0(e)},__wbg_new_8f67e318f15d7254:function(e){return void 0===S&&(S=t.c[8867].exports),S.BL(e)},__wbg_set_2357bf09366ee480:function(e,n,r){return void 0===O&&(O=t.c[8867].exports),O.mS(e,n,r)},__wbg_length_1d25fa9e4ac21ce7:function(e){return void 0===A&&(A=t.c[8867].exports),A.IF(e)},__wbg_instanceof_Uint8Array_bced6f43aed8c1aa:function(e){return void 0===P&&(P=t.c[8867].exports),P.M7(e)},__wbindgen_debug_string:function(e,n){return void 0===C&&(C=t.c[8867].exports),C.rl(e,n)},__wbindgen_throw:function(e,n){return void 0===N&&(N=t.c[8867].exports),N.Qn(e,n)},__wbindgen_memory:function(){return void 0===T&&(T=t.c[8867].exports),T.Py()}}}}},L={230:[88444]};t.w={},t.f.wasm=function(e,n){(L[e]||[]).forEach(function(r,o){var a=q[r];if(a)n.push(a);else{var c,i=B[r](),f=fetch(t.p+""+({230:{88444:"8c24c73ee6a8578f953f"}})[e][r]+".module.wasm");i&&"function"==typeof i.then&&"function"==typeof WebAssembly.compileStreaming?c=Promise.all([WebAssembly.compileStreaming(f),i]).then(function(e){return WebAssembly.instantiate(e[0],e[1])}):"function"==typeof WebAssembly.instantiateStreaming?c=WebAssembly.instantiateStreaming(f,i):c=f.then(function(e){return e.arrayBuffer()}).then(function(e){return WebAssembly.instantiate(e,i)}),n.push(q[r]=c.then(function(e){return t.w[r]=(e.instance||e).exports}))}})}})()})();