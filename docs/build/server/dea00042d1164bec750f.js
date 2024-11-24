var InkAPI=(()=>{var oe=Object.create;var k=Object.defineProperty;var me=Object.getOwnPropertyDescriptor;var fe=Object.getOwnPropertyNames;var ue=Object.getPrototypeOf,de=Object.prototype.hasOwnProperty;var i=(s,t)=>()=>(t||s((t={exports:{}}).exports,t),t.exports),pe=(s,t)=>{for(var a in t)k(s,a,{get:t[a],enumerable:!0})},K=(s,t,a,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let l of fe(t))!de.call(s,l)&&l!==a&&k(s,l,{get:()=>t[l],enumerable:!(r=me(t,l))||r.enumerable});return s};var Y=(s,t,a)=>(a=s!=null?oe(ue(s)):{},K(t||!s||!s.__esModule?k(a,"default",{value:s,enumerable:!0}):a,s)),he=s=>K(k({},"__esModule",{value:!0}),s);var J=i(y=>{"use strict";Object.defineProperty(y,"__esModule",{value:!0});y.status=xe;var W={CONTINUE:{code:100,status:"Continue"},PROCESSING:{code:102,status:"Processing"},OK:{code:200,status:"OK"},CREATED:{code:201,status:"Created"},ACCEPTED:{code:202,status:"Accepted"},EMPTY:{code:204,status:"No Content"},RESET:{code:205,status:"Reset Content"},PARTIAL:{code:206,status:"Partial Content"},MOVED:{code:301,status:"Moved Permanently"},FOUND:{code:302,status:"Found"},REDIRECT:{code:303,status:"See Other"},CACHE:{code:304,status:"Not Modified"},TEMPORARY:{code:307,status:"Temporary Redirect"},PERMANENT:{code:308,status:"Permanent Redirect"},ABORT:{code:309,status:"Aborted"},BAD_REQUEST:{code:400,status:"Bad Request"},UNAUTHORIZED:{code:401,status:"Unauthorized"},FORBIDDEN:{code:403,status:"Forbidden"},NOT_FOUND:{code:404,status:"Not Found"},BAD_METHOD:{code:405,status:"Method Not Allowed"},NOT_ACCEPTABLE:{code:406,status:"Not Acceptable"},REQUEST_TIMEOUT:{code:408,status:"Request Timeout"},CONFLICT:{code:409,status:"Conflict"},GONE:{code:410,status:"Gone"},LENGTH_REQUIRED:{code:411,status:"Length Required"},TOO_LARGE:{code:413,status:"Payload Too Large"},TOO_LONG:{code:414,status:"URI Too Long"},UNSUPPORTED_TYPE:{code:415,status:"Unsupported Media Type"},BAD_RANGE:{code:416,status:"Range Not Satisfiable"},BAD_EXPECTATION:{code:417,status:"Expectation Failed"},MISDIRECTED:{code:421,status:"Misdirected Request"},UNPROCESSABLE:{code:422,status:"Unprocessable Content"},LOCKED:{code:423,status:"Locked"},BAD_DEPENDENCY:{code:424,status:"Failed Dependency"},UPGRADE_REQUIRED:{code:426,status:"Upgrade Required"},BAD_PRECONDITION:{code:428,status:"Precondition Required"},TOO_MANY:{code:429,status:"Too Many Requests"},HEADER_TOO_LARGE:{code:431,status:"Request Header Fields Too Large"},LEGAL_REASONS:{code:451,status:"Unavailable For Legal Reasons"},ERROR:{code:500,status:"Internal Server Error"},NOT_IMPLEMENTED:{code:501,status:"Not Implemented"},BAD_GATEWAY:{code:502,status:"Bad Gateway"},UNAVAILABLE:{code:503,status:"Service Unavailable"},RESPONSE_TIMEOUT:{code:504,status:"Gateway Timeout"},BAD_VERSION:{code:505,status:"HTTP Version Not Supported"},INSUFFICIENT_STORAGE:{code:507,status:"Insufficient Storage"},INFINITE_LOOP:{code:508,status:"Loop Detected"},NETWORK_AUTHENTICATION_REQUIRED:{code:511,status:"Network Authentication Required"}};y.default=W;function xe(s){return Object.values(W).find(t=>t.code===s)}});var j=i(N=>{"use strict";Object.defineProperty(N,"__esModule",{value:!0});var be=J(),I=class s extends Error{static try(t){return{catch:a=>{try{return t()}catch(r){if(r instanceof s)return a(r,r.type);if(r instanceof Error){let l=s.upgrade(r);return a(l,l.type)}else if(typeof r=="string"){let l=s.for(r);return a(l,l.type)}return a(r,"unknown")}}}}static for(t,...a){return a.forEach(function(r){t=t.replace("%s",String(r))}),new this(t)}static forErrors(t){let a=new this("Invalid Parameters");return a.withErrors(t),a}static require(t,a,...r){if(!t){for(let l of r)a=a.replace("%s",l);throw new this(a)}}static upgrade(t,a=500){if(t instanceof s)return t;let r=new this(t.message,a);return r.name=t.name,r.stack=t.stack,r}get code(){return this._code}get end(){return this._end}get errors(){return Object.assign({},this._errors)}get start(){return this._start}get type(){return this._type}constructor(t,a=500){var r;super(t),this._errors={},this._start=0,this._end=0,this.name=this.constructor.name,this._type=this.constructor.name,this._code=a,this._status=((r=(0,be.status)(a))===null||r===void 0?void 0:r.status)||"Unknown"}toJSON(){return JSON.stringify(this.toResponse(),null,2)}toResponse(t=0,a=0){let r={code:this._code,status:this._status,error:this.message,start:this._start,end:this._end,stack:this.trace(t,a)};return Object.keys(this._errors).length>0&&(r.errors=this._errors),r}trace(t=0,a=0){return typeof this.stack!="string"?[]:this.stack.split(`
`).slice(t,a||this.stack.length).map(l=>l.trim()).map(l=>{if(!l.startsWith("at"))return!1;let[m,O,E]=l.split(" ");E||(E=`(${O})`,O="<none>");let[ce,ne,ie]=E.substring(1,E.length-1).split(":");return{method:O,file:ce,line:parseInt(ne)||0,char:parseInt(ie)||0}}).filter(Boolean)}withCode(t){return this._code=t,this}withErrors(t){return this._errors=t,this}withPosition(t,a){return this._start=t,this._end=a,this}};N.default=I});var Q=i(u=>{"use strict";var ge=u&&u.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(u,"__esModule",{value:!0});var Te=ge(j()),D=class extends Te.default{};u.default=D});var A=i(R=>{"use strict";Object.defineProperty(R,"__esModule",{value:!0});var L=class{get length(){return this._elements.size}constructor(t=[]){this._elements=new Set,t.forEach(a=>this._elements.add(a))}add(t){this._elements.add(t)}toArray(){return Array.from(this._elements)}toString(){return Array.from(this._elements).filter(Boolean).map(t=>t.toString()).join("")}};R.default=L});var d=i(P=>{"use strict";Object.defineProperty(P,"__esModule",{value:!0});var _e=new Map;P.default=_e});var M=i(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});var S=class{get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(t,a=!1){this._escape=a,this._value=t}toString(){return this.value}};C.default=S});var U=i(p=>{"use strict";var Ee=p&&p.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(p,"__esModule",{value:!0});var ke=Ee(A()),ye=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],q=class{get attributes(){return this._attributes}get children(){return this._children}get name(){return this._name}get props(){return this._props}constructor(t,a={},r="",l=[]){this._attributes={},this._name=t,this._attributes=a,this._props=r,this._children=new ke.default(l)}toString(){let t=Object.entries(this._attributes),a=t.length>0?" "+t.map(([l,m])=>{if(typeof m=="string"&&!/["<>\n]/.test(m))return`${l}="${m}"`;if(typeof m=="boolean")return m?l:""}).join(" "):"";if(ye.includes(this._name))return`<${this._name}${a} />`;let r=this._children.toString();return`<${this._name}${a}>${r}</${this._name}>`}};p.default=q});var H=i(h=>{"use strict";var Z=h&&h.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(h,"__esModule",{value:!0});var we=Z(M()),V=Z(U()),B=class{static render(t){return t.filter(Boolean).map(a=>a.toString()).join("")}static registry(t,a=new Set){return t.forEach(r=>{r instanceof V.default&&(["html","head","body"].includes(r.name)||a.add(r),r.name!=="head"&&r.children.length>0&&this.registry(r.children.toArray(),a))}),a}static createElement(t,a,r,l=[]){return new V.default(t,a,r,l)}static createText(t,a=!0){return new we.default(t,a)}};h.default=B});var X=i(x=>{"use strict";var G=x&&x.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(x,"__esModule",{value:!0});var ve=G(j()),f=G(d()),z=G(H()),F=class{bindings(t={}){f.default.set("props",t||{}),f.default.set("env",Object.assign(Object.assign({},process.env||{}),{BUILD_ID:this.id(),APP_DATA:btoa(JSON.stringify(Object.assign(Object.assign({},Object.fromEntries(f.default.entries())),{env:Object.assign(Object.assign({},Object.fromEntries(Object.entries(process.env||{}).filter(l=>l[0].startsWith("PUBLIC_")))),{BUILD_ID:this.id()})})))}));let a=z.default.registry(this.template());return`{ ${Array.from(a.values()).map((l,m)=>l.props!=="{ }"?`'${m}': ${l.props}`:"").filter(l=>l!=="").join(", ")} }`}render(t={}){f.default.set("props",t||{}),f.default.set("env",Object.assign(Object.assign({},process.env||{}),{BUILD_ID:this.id(),APP_DATA:btoa(JSON.stringify(Object.assign(Object.assign({},Object.fromEntries(f.default.entries())),{env:Object.assign(Object.assign({},Object.fromEntries(Object.entries(process.env||{}).filter(l=>l[0].startsWith("PUBLIC_")))),{BUILD_ID:this.id()})})))}));let a=this.template(),r=z.default.render(a).trim();if(!r.toLowerCase().startsWith("<html"))throw ve.default.for("Document must start with an <html> tag.");return`<!DOCTYPE html>
${r}`}_toNodeList(t){return typeof t=="object"&&typeof t.nodeType=="number"?[t]:Array.isArray(t)&&t.every(a=>typeof a=="object"&&typeof a.nodeType=="number")?t:[z.default.createText(String(t))]}};x.default=F});var ee=i(b=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0});b.InkEmitter=void 0;var w=class{emit(t,a){return this}on(t,a){return this}once(t,a){return this}unbind(t,a){return this}};b.InkEmitter=w;var Oe=new w;b.default=Oe});var te=i(g=>{"use strict";var Ie=g&&g.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(g,"__esModule",{value:!0});var Ne=Ie(d());function je(s){let t=Ne.default.get("env")||{};return s?t[s]||null:t}g.default=je});var se=i(T=>{"use strict";var De=T&&T.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(T,"__esModule",{value:!0});T.default=Re;var Le=De(d());function Re(){return Le.default.get("props")||{}}});var re=i(c=>{"use strict";var Ae=c&&c.__createBinding||(Object.create?function(s,t,a,r){r===void 0&&(r=a);var l=Object.getOwnPropertyDescriptor(t,a);(!l||("get"in l?!t.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(s,r,l)}:function(s,t,a,r){r===void 0&&(r=a),s[r]=t[a]}),Pe=c&&c.__setModuleDefault||(Object.create?function(s,t){Object.defineProperty(s,"default",{enumerable:!0,value:t})}:function(s,t){s.default=t}),Se=c&&c.__importStar||function(){var s=function(t){return s=Object.getOwnPropertyNames||function(a){var r=[];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(r[r.length]=l);return r},s(t)};return function(t){if(t&&t.__esModule)return t;var a={};if(t!=null)for(var r=s(t),l=0;l<r.length;l++)r[l]!=="default"&&Ae(a,t,r[l]);return Pe(a,t),a}}(),o=c&&c.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(c,"__esModule",{value:!0});c.InkText=c.InkException=c.InkEmitter=c.InkElement=c.InkRegistry=c.InkDocument=c.InkCollection=c.props=c.emitter=c.env=c.data=void 0;var Ce=o(Q());c.InkException=Ce.default;var Me=o(A());c.InkCollection=Me.default;var qe=o(X());c.InkDocument=qe.default;var Ue=o(H());c.InkRegistry=Ue.default;var Be=o(U());c.InkElement=Be.default;var ae=Se(ee());c.emitter=ae.default;Object.defineProperty(c,"InkEmitter",{enumerable:!0,get:function(){return ae.InkEmitter}});var He=o(M());c.InkText=He.default;var ze=o(d());c.data=ze.default;var Fe=o(te());c.env=Fe.default;var Ge=o(se());c.props=Ge.default});var $=i((nt,le)=>{le.exports={...re()}});var Ke={};pe(Ke,{default:()=>v});var e=Y($()),_=Y($());var n=function(s,...t){let a=$e(s);for(let r=0;r<t.length;r++)a=a.replace("%s",String(t[r]));return a},$e=function(s){return s};var v=class extends e.InkDocument{id(){return"dea00042d1164bec750f"}styles(){return`@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;`}template(){let t="/ink/index.html",a=n("Ink - The reactive web component template engine."),r=n("Ink is a template engine that generates web components and support reactivity.");return[e.InkRegistry.createText(`
`,!1),e.InkRegistry.createElement("html",{},"{ }",[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("head",{},"{ }",[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{charset:"utf-8"},"{ 'charset': `utf-8` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"},"{ 'name': `viewport`, 'content': `width=device-width, initial-scale=1` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("title",{},"{ }",[...this._toNodeList(a)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"description",content:r},"{ 'name': `description`, 'content': description }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:title",content:a},"{ 'property': `og:title`, 'content': title }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:description",content:r},"{ 'property': `og:description`, 'content': description }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:image",content:"https://stackpress.github.io/ink/ink-logo.png"},"{ 'property': `og:image`, 'content': `https://stackpress.github.io/ink/ink-logo.png` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:url",content:`https://stackpress.github.io/ink${t}`},"{ 'property': `og:url`, 'content': `https://stackpress.github.io/ink${url}` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:type",content:"website"},"{ 'property': `og:type`, 'content': `website` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:card",content:"summary"},"{ 'name': `twitter:card`, 'content': `summary` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:site",content:"@stackpress"},"{ 'name': `twitter:site`, 'content': `@stackpress` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:title",content:a},"{ 'name': `twitter:title`, 'content': title }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:description",content:r},"{ 'name': `twitter:description`, 'content': description }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:image",content:"https://stackpress.github.io/ink/ink-logo.png"},"{ 'name': `twitter:image`, 'content': `https://stackpress.github.io/ink/ink-logo.png` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"favicon",href:"/ink/favicon.ico"},"{ 'rel': `favicon`, 'href': `/ink/favicon.ico` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"shortcut icon",type:"image/png",href:"/ink/favicon.png"},"{ 'rel': `shortcut icon`, 'type': `image/png`, 'href': `/ink/favicon.png` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"},"{ 'rel': `stylesheet`, 'type': `text/css`, 'href': `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",media:"(prefers-color-scheme:light)",href:"https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/light.css"},"{ 'rel': `stylesheet`, 'media': `(prefers-color-scheme:light)`, 'href': `https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/light.css` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",media:"(prefers-color-scheme:dark)",href:"https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/dark.css"},"{ 'rel': `stylesheet`, 'media': `(prefers-color-scheme:dark)`, 'href': `https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/dark.css` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:"/ink/styles/global.css"},"{ 'rel': `stylesheet`, 'type': `text/css`, 'href': `/ink/styles/global.css` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:`/ink/build/client/${(0,_.env)("BUILD_ID")}.css`},"{ 'rel': `stylesheet`, 'type': `text/css`, 'href': `/ink/build/client/${env('BUILD_ID')}.css` }"),e.InkRegistry.createText(`
  
  `,!1),e.InkRegistry.createElement("script",{"data-app":(0,_.env)("APP_DATA"),src:`/ink/build/client/${(0,_.env)("BUILD_ID")}.js`},"{ 'data-app': env('APP_DATA'), 'src': `/ink/build/client/${env('BUILD_ID')}.js` }"),e.InkRegistry.createText(`
  `,!1),...(0,_.env)("NODE_ENV")==="development"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("script",{src:"/dev.js"},"{ 'src': `/dev.js` }"),e.InkRegistry.createText(`
  `,!1)]:[],e.InkRegistry.createText(`
`,!1)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("body",{class:"light bg-t-0 tx-t-1 tx-arial"},"{ 'class': `light bg-t-0 tx-t-1 tx-arial` }",[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("panel-layout",{},"{ }",[e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("header",{},"{ }",[e.InkRegistry.createElement("menu",{class:"flex flex-center-y px-20 py-15 m-0 bg-t-1"},"{ 'class': `flex flex-center-y px-20 py-15 m-0 bg-t-1` }",[e.InkRegistry.createText(`
  `,!1),...t!=="/ink/index.html"&&t!=="/ink/500.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("i",{class:"fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1",click:toggle},"{ 'class': `fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1`, 'click': toggle }",[]),e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("div",{class:"flex-grow"},"{ 'class': `flex-grow` }",[]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{href:"/ink"},"{ 'href': `/ink` }",[e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("img",{alt:"Ink Logo",class:"h-26 mr-10",src:"/ink/ink-icon.png"},"{ 'alt': `Ink Logo`, 'class': `h-26 mr-10`, 'src': `/ink/ink-icon.png` }"),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("nav",{class:"flex flex-center-y"},"{ 'class': `flex flex-center-y` }",[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"tx-primary",href:"/ink/docs/index.html"},"{ 'class': `tx-primary`, 'href': `/ink/docs/index.html` }",[e.InkRegistry.createText("Docs",!1)]),e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"tx-t-1 tx-5xl ml-10",href:"https://github.com/stackpress/ink",target:"_blank"},"{ 'class': `tx-t-1 tx-5xl ml-10`, 'href': `https://github.com/stackpress/ink`, 'target': `_blank` }",[e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("i",{class:"fab fa-github"},"{ 'class': `fab fa-github` }",[]),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"bg-h-cb3837 pill tx-t-1 tx-lg ml-5 p-5 tx-center",href:"https://www.npmjs.com/package/@stackpress/ink",target:"_blank"},"{ 'class': `bg-h-cb3837 pill tx-t-1 tx-lg ml-5 p-5 tx-center`, 'href': `https://www.npmjs.com/package/@stackpress/ink`, 'target': `_blank` }",[e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("i",{class:"fab fa-npm tx-white"},"{ 'class': `fab fa-npm tx-white` }",[]),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
`,!1)])]),e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("main",{class:"scroll-auto"},"{ 'class': `scroll-auto` }",[e.InkRegistry.createText(`
        `,!1),e.InkRegistry.createElement("section",{class:"bg-t-1 py-40 tx-center w-full"},"{ 'class': `bg-t-1 py-40 tx-center w-full` }",[e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("img",{class:"h-100",src:"/ink/ink-logo.png",alt:"Ink Logo"},"{ 'class': `h-100`, 'src': `/ink/ink-logo.png`, 'alt': `Ink Logo` }"),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-30 py-30 tx-lh-36"},"{ 'p': true, 'trim': true, 'class': `tx-30 py-30 tx-lh-36` }",[e.InkRegistry.createText(`
            The reactive web component template engine.
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("element-button",{primary:!0,xl:!0,rounded:!0,class:"mr-10",href:"/ink/docs/getting-started.html"},"{ 'primary': true, 'xl': true, 'rounded': true, 'class': `mr-10`, 'href': `/ink/docs/getting-started.html` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(n("Get Started")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("element-button",{secondary:!0,xl:!0,rounded:!0,class:"inline-block",href:"/ink/docs/index.html"},"{ 'secondary': true, 'xl': true, 'rounded': true, 'class': `inline-block`, 'href': `/ink/docs/index.html` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(n("Read the Docs")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
        `,!1)]),e.InkRegistry.createText(`
        `,!1),e.InkRegistry.createElement("section",{class:"m-auto mw-960 px-20"},"{ 'class': `m-auto mw-960 px-20` }",[e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"p-20 tx-center tx-lh-36 tx-18"},"{ 'p': true, 'trim': true, 'class': `p-20 tx-center tx-lh-36 tx-18` }",[e.InkRegistry.createText(`
            Ink is a modern HTML markup language and a server first 
            template engine with a built-in parser/compiler that 
            generates web components and supports reactivity.
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("ide-app",{class:"block",title:"Basic Example"},"{ 'class': `block`, 'title': `Basic Example` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"flex bg-white md-block"},"{ 'class': `flex bg-white md-block` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,trim:!0,detab:16,class:"basis-half"},"{ 'numbers': true, 'trim': true, 'detab': 16, 'class': `basis-half` }",[...this._toNodeList(`
                <style>
                  h1 { font-weight: bold; }
                </style>
                <script>
                  const name = 'world';
                </script>
                <h1>Hello {name}!</h1>
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-preview",{class:"basis-half"},"{ 'class': `basis-half` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{},"{ }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("h1",{},"{ }",[...this._toNodeList(n("Hello world!"))]),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
        `,!1)]),e.InkRegistry.createText(`
        `,!1),e.InkRegistry.createElement("section",{class:"bg-t-1 m-auto py-40 px-20 tx-center"},"{ 'class': `bg-t-1 m-auto py-40 px-20 tx-center` }",[e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("ul",{class:"flex flex-center list-none p-0 tx-center md-block"},"{ 'class': `flex flex-center list-none p-0 tx-center md-block` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("li",{class:"w-third mw-300 md-mw-400 md-w-auto md-m-auto"},"{ 'class': `w-third mw-300 md-mw-400 md-w-auto md-m-auto` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"p-10"},"{ 'class': `p-10` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("h3",{class:"mb-20 tx-upper"},"{ 'class': `mb-20 tx-upper` }",[e.InkRegistry.createText(`
                  `,!1),...this._toNodeList(n("Expressive Markup")),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-16 tx-lh-24"},"{ 'p': true, 'trim': true, 'class': `tx-16 tx-lh-24` }",[e.InkRegistry.createText(`
                  Any data type as attributes. Easily express logic with 
                  markup directives like if, each, and try catch. 
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("li",{class:"w-third mw-300 md-mw-400 md-w-auto md-m-auto md-mt-20"},"{ 'class': `w-third mw-300 md-mw-400 md-w-auto md-m-auto md-mt-20` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"p-10"},"{ 'class': `p-10` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("h3",{class:"mb-20 tx-upper"},"{ 'class': `mb-20 tx-upper` }",[e.InkRegistry.createText(`
                  `,!1),...this._toNodeList(n("Reactive Signals")),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-16 tx-lh-24"},"{ 'p': true, 'trim': true, 'class': `tx-16 tx-lh-24` }",[e.InkRegistry.createText(`
                  Easily transition from backend logic to reactive states.
                  No Hydration and no memoization needed.
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("li",{class:"w-third mw-300 md-mw-400 md-w-auto md-m-auto md-mt-20"},"{ 'class': `w-third mw-300 md-mw-400 md-w-auto md-m-auto md-mt-20` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"p-10"},"{ 'class': `p-10` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("h3",{class:"mb-20 tx-upper"},"{ 'class': `mb-20 tx-upper` }",[e.InkRegistry.createText(`
                  `,!1),...this._toNodeList(n("Bare Metal")),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-16 tx-lh-24"},"{ 'p': true, 'trim': true, 'class': `tx-16 tx-lh-24` }",[e.InkRegistry.createText(`
                  Work with the DOM directly. Import any web components 
                  from any source. Works with Lit, HTMX.
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
        `,!1)]),e.InkRegistry.createText(`
        `,!1),e.InkRegistry.createElement("section",{class:"m-auto mw-960 px-20 py-40"},"{ 'class': `m-auto mw-960 px-20 py-40` }",[e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h3",{class:"mt-40 mb-20 tx-center tx-upper"},"{ 'class': `mt-40 mb-20 tx-center tx-upper` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(n("Server Setup")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-center tx-lh-24 mb-20"},"{ 'p': true, 'trim': true, 'class': `tx-center tx-lh-24 mb-20` }",[e.InkRegistry.createText(`
            Ink can be used with popular server 
            frameworks in just a few lines of code.
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("ide-app",{title:"Server Example"},"{ 'title': `Server Example` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",numbers:!0,trim:!0,detab:14},"{ 'lang': `js`, 'numbers': true, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              import ink from '@stackpress/ink/compiler';
              //make a ink compiler
              const compiler = ink();
              //render HTML
              const results = compiler.render('./page.ink');
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("h3",{class:"mt-40 mb-20 tx-center tx-upper"},"{ 'class': `mt-40 mb-20 tx-center tx-upper` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(n("Props")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-center tx-lh-24 mb-20"},"{ 'p': true, 'trim': true, 'class': `tx-center tx-lh-24 mb-20` }",[e.InkRegistry.createText(`
            Import your component props and use immediately
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("ide-app",{title:"Props Example"},"{ 'title': `Props Example` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"flex bg-white md-block"},"{ 'class': `flex bg-white md-block` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,trim:!0,detab:16,class:"basis-half"},"{ 'numbers': true, 'trim': true, 'detab': 16, 'class': `basis-half` }",[...this._toNodeList(`
                <style>
                  h1 { font-weight: bold; }
                </style>
                <script>
                  import { props } from '@stackpress/ink';
                  const { name } = props();
                </script>
                <h1>Hello {name}!</h1>
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-preview",{class:"basis-half"},"{ 'class': `basis-half` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{},"{ }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("h1",{},"{ }",[...this._toNodeList(n("Hello world!"))]),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("h3",{class:"mt-40 mb-20 tx-center tx-upper"},"{ 'class': `mt-40 mb-20 tx-center tx-upper` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(n("Reactive Signals")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-center tx-lh-24 mb-20"},"{ 'p': true, 'trim': true, 'class': `tx-center tx-lh-24 mb-20` }",[e.InkRegistry.createText(`
            Use signals to manage state changes and re-renders.
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("ide-app",{title:"Signal Example"},"{ 'title': `Signal Example` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"flex bg-white md-block"},"{ 'class': `flex bg-white md-block` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,trim:!0,detab:16,class:"basis-half"},"{ 'numbers': true, 'trim': true, 'detab': 16, 'class': `basis-half` }",[...this._toNodeList(`
                <style>
                  h1 { font-weight: bold; }
                </style>
                <script>
                  import { signal } from '@stackpress/ink';
                  const name = signal('world');
                  name.value += '!';
                </script>
                <h1>Hello {name.value}</h1>
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-preview",{class:"basis-half"},"{ 'class': `basis-half` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{},"{ }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("h1",{},"{ }",[...this._toNodeList(n("Hello world!"))]),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("h3",{class:"mt-40 mb-20 tx-center tx-upper"},"{ 'class': `mt-40 mb-20 tx-center tx-upper` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(n("Components and Templates")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-center tx-lh-24 mb-20"},"{ 'p': true, 'trim': true, 'class': `tx-center tx-lh-24 mb-20` }",[e.InkRegistry.createText(`
            Import components and templates for reusability.
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("ide-app",{title:"Import Example"},"{ 'title': `Import Example` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"flex bg-white md-block"},"{ 'class': `flex bg-white md-block` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,trim:!0,detab:16,class:"basis-half"},"{ 'numbers': true, 'trim': true, 'detab': 16, 'class': `basis-half` }",[...this._toNodeList(`
                <!-- page.html -->
                <link rel="import" href="./my-heading.html" />
                <script>
                  const name = 'world';
                </script>
                <my-heading {name}>Hello</my-heading>
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{class:"basis-half b-t-1 b-solid by-0 bl-1 br-0 md-b-0",trim:!0,detab:16},"{ 'class': `basis-half b-t-1 b-solid by-0 bl-1 br-0 md-b-0`, 'trim': true, 'detab': 16 }",[...this._toNodeList(`
                <!-- my-heading.html -->
                <script>
                  import { props } from '@stackpress/ink';
                  const { name, children } = props();
                </script>
                <h1>{children} {name}</h1>
              `)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("h3",{class:"mt-40 mb-20 tx-center tx-upper"},"{ 'class': `mt-40 mb-20 tx-center tx-upper` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(n("Conditionals and Iterations")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-center tx-lh-24 mb-20"},"{ 'p': true, 'trim': true, 'class': `tx-center tx-lh-24 mb-20` }",[e.InkRegistry.createText(`
            Case for conditions and iterations in an expressive way.
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("ide-app",{title:"Conditional + Iteration Example"},"{ 'title': `Conditional + Iteration Example` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"flex bg-white md-block"},"{ 'class': `flex bg-white md-block` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,trim:!0,detab:16,class:"basis-half"},"{ 'numbers': true, 'trim': true, 'detab': 16, 'class': `basis-half` }",[...this._toNodeList(`
                <script>
                  const name = 'world';
                  const show = name === "world";
                </script>

                <if true=show>
                  <h1>Hello {name}</h1>
                </if>
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{class:"basis-half b-t-1 b-solid by-0 bl-1 br-0 md-b-0",trim:!0,detab:16},"{ 'class': `basis-half b-t-1 b-solid by-0 bl-1 br-0 md-b-0`, 'trim': true, 'detab': 16 }",[...this._toNodeList(`
                <script>
                  const list = [ 'a', 'b', 'c' ];
                </script>
                <ul>
                  <each key=i value=item from=list>
                    <li>{i}: {item}</li>
                  </each>
                </ul>
              `)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
        `,!1)]),e.InkRegistry.createText(`
        `,!1),e.InkRegistry.createElement("section",{class:"m-auto px-20 py-40 tx-center bg-t-2"},"{ 'class': `m-auto px-20 py-40 tx-center bg-t-2` }",[e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h3",{class:"tx-h-242424 tx-30 tx-upper"},"{ 'class': `tx-h-242424 tx-30 tx-upper` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(n("Works With Popular Server Frameworks")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("div",{class:"flex flex-center flex-wrap mx-auto mt-40 mb-0 sm-block"},"{ 'class': `flex flex-center flex-wrap mx-auto mt-40 mb-0 sm-block` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block basis-third mb-20",href:"https://expressjs.com/",target:"_blank"},"{ 'class': `block basis-third mb-20`, 'href': `https://expressjs.com/`, 'target': `_blank` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("img",{class:"h-60",src:"https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",alt:"Express"},"{ 'class': `h-60`, 'src': `https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png`, 'alt': `Express` }"),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block basis-third mb-20",href:"https://fastify.dev/",target:"_blank"},"{ 'class': `block basis-third mb-20`, 'href': `https://fastify.dev/`, 'target': `_blank` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("img",{class:"h-60",src:"https://upload.wikimedia.org/wikipedia/commons/0/0a/Fastify_logo.svg",alt:"Fastify"},"{ 'class': `h-60`, 'src': `https://upload.wikimedia.org/wikipedia/commons/0/0a/Fastify_logo.svg`, 'alt': `Fastify` }"),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block basis-third mb-20",href:"https://hapi.dev/",target:"_blank"},"{ 'class': `block basis-third mb-20`, 'href': `https://hapi.dev/`, 'target': `_blank` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("img",{class:"h-60",src:"https://raw.githubusercontent.com/hapijs/assets/master/images/hapi.png",alt:"Hapi"},"{ 'class': `h-60`, 'src': `https://raw.githubusercontent.com/hapijs/assets/master/images/hapi.png`, 'alt': `Hapi` }"),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block basis-third mb-20",href:"https://koajs.com/",target:"_blank"},"{ 'class': `block basis-third mb-20`, 'href': `https://koajs.com/`, 'target': `_blank` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("img",{class:"h-60",src:"https://cdn.icon-icons.com/icons2/2699/PNG/512/koajs_logo_icon_168379.png",alt:"Koa"},"{ 'class': `h-60`, 'src': `https://cdn.icon-icons.com/icons2/2699/PNG/512/koajs_logo_icon_168379.png`, 'alt': `Koa` }"),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block basis-third mb-20",href:"https://nestjs.com/",target:"_blank"},"{ 'class': `block basis-third mb-20`, 'href': `https://nestjs.com/`, 'target': `_blank` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("img",{class:"h-60",src:"https://cdn.icon-icons.com/icons2/2699/PNG/512/nestjs_logo_icon_169927.png",alt:"NestJS"},"{ 'class': `h-60`, 'src': `https://cdn.icon-icons.com/icons2/2699/PNG/512/nestjs_logo_icon_169927.png`, 'alt': `NestJS` }"),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block basis-third mb-20",href:"http://restify.com/",target:"_blank"},"{ 'class': `block basis-third mb-20`, 'href': `http://restify.com/`, 'target': `_blank` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("img",{class:"h-60",src:"https://raw.githubusercontent.com/restify/node-restify/gh-images/logo/png/restify_logo_black_transp_288x288.png?raw=true",alt:"Restify"},"{ 'class': `h-60`, 'src': `https://raw.githubusercontent.com/restify/node-restify/gh-images/logo/png/restify_logo_black_transp_288x288.png?raw=true`, 'alt': `Restify` }"),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
        `,!1)]),e.InkRegistry.createText(`
        `,!1),e.InkRegistry.createElement("section",{class:"bg-t-1 m-auto py-40 px-20"},"{ 'class': `bg-t-1 m-auto py-40 px-20` }",[e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h3",{class:"tx-26 tx-center"},"{ 'class': `tx-26 tx-center` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(n("Ink Loves Developers!")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("section",{class:"flex flex-wrap md-block"},"{ 'class': `flex flex-wrap md-block` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("tweet-box",{class:"block basis-third lg-basis-half",name:"Joff Tiquez",handle:"@jrtiquez",href:"https://twitter.com/jrtiquez",src:"https://github.com/jofftiquez.png"},"{ 'class': `block basis-third lg-basis-half`, 'name': `Joff Tiquez`, 'handle': `@jrtiquez`, 'href': `https://twitter.com/jrtiquez`, 'src': `https://github.com/jofftiquez.png` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("p",{},"{ }",[e.InkRegistry.createText("Im a vue developer. No need for this. OSSPH does not support this project.",!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("tweet-box",{class:"block basis-third lg-basis-half",name:"Primeagen",handle:"@theprimeagen",href:"https://twitter.com/ThePrimeagen",src:"https://pbs.twimg.com/profile_images/1759330620160049152/2i_wkOoK_400x400.jpg"},"{ 'class': `block basis-third lg-basis-half`, 'name': `Primeagen`, 'handle': `@theprimeagen`, 'href': `https://twitter.com/ThePrimeagen`, 'src': `https://pbs.twimg.com/profile_images/1759330620160049152/2i_wkOoK_400x400.jpg` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("p",{},"{ }",[e.InkRegistry.createText("Ink? Never heard of it...",!1),e.InkRegistry.createElement("br",{},"{ }"),e.InkRegistry.createText('"The Name..."',!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("tweet-box",{class:"block basis-third lg-basis-half",name:"Kristian Quirapas",handle:"@YourCompanyCTO",href:"https://twitter.com/YourCompanyCTO",src:"https://avatars.githubusercontent.com/u/85150796?v=4"},"{ 'class': `block basis-third lg-basis-half`, 'name': `Kristian Quirapas`, 'handle': `@YourCompanyCTO`, 'href': `https://twitter.com/YourCompanyCTO`, 'src': `https://avatars.githubusercontent.com/u/85150796?v=4` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("p",{},"{ }",[e.InkRegistry.createText("Ink is good news for Node developers. I'm a rust developer so it don't matter to me.",!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("tweet-box",{class:"block basis-third lg-basis-half",name:"Drizzle Team",handle:"@drizzle.team",href:"https://twitter.com/DrizzleORM",src:"https://pbs.twimg.com/profile_images/1767809210060877824/mAtEmNk0_400x400.jpg"},"{ 'class': `block basis-third lg-basis-half`, 'name': `Drizzle Team`, 'handle': `@drizzle.team`, 'href': `https://twitter.com/DrizzleORM`, 'src': `https://pbs.twimg.com/profile_images/1767809210060877824/mAtEmNk0_400x400.jpg` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("p",{},"{ }",[e.InkRegistry.createText("Ink copied this section from us. We are the original.",!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("tweet-box",{class:"block basis-third lg-basis-half",name:"Chris B",handle:"@cblanquera",href:"https://twitter.com/cblanquera",src:"https://avatars.githubusercontent.com/u/120378?v=4"},"{ 'class': `block basis-third lg-basis-half`, 'name': `Chris B`, 'handle': `@cblanquera`, 'href': `https://twitter.com/cblanquera`, 'src': `https://avatars.githubusercontent.com/u/120378?v=4` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("p",{},"{ }",[e.InkRegistry.createText("After creating the Ink project, I am really excited to get back to ReactJS.",!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("tweet-box",{class:"block basis-third lg-basis-half",name:"Theo",handle:"@t3dotgg",href:"https://twitter.com/t3dotgg",src:"https://yt3.googleusercontent.com/4NapxEtLcHQ6wN2zA_DMmkOk47RFb_gy6sjSmUZGg_ARHjlIUjFsrNFddrcKMkTYpBNxCp3J=s160-c-k-c0x00ffffff-no-rj"},"{ 'class': `block basis-third lg-basis-half`, 'name': `Theo`, 'handle': `@t3dotgg`, 'href': `https://twitter.com/t3dotgg`, 'src': `https://yt3.googleusercontent.com/4NapxEtLcHQ6wN2zA_DMmkOk47RFb_gy6sjSmUZGg_ARHjlIUjFsrNFddrcKMkTYpBNxCp3J=s160-c-k-c0x00ffffff-no-rj` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("p",{},"{ }",[e.InkRegistry.createText("Ink? no thanks. Keep your stack front end. App router for life.",!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
        `,!1)]),e.InkRegistry.createText(`
        `,!1),e.InkRegistry.createElement("section",{class:"m-auto py-40 px-20 tx-center"},"{ 'class': `m-auto py-40 px-20 tx-center` }",[e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h3",{class:"tx-26 mb-20"},"{ 'class': `tx-26 mb-20` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(n("What are you waiting for?")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("element-button",{primary:!0,xl:!0,rounded:!0,class:"inline-block",style:"margin-right:10px;",href:"/ink/docs/getting-started.html"},"{ 'primary': true, 'xl': true, 'rounded': true, 'class': `inline-block`, 'style': `margin-right:10px;`, 'href': `/ink/docs/getting-started.html` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(n("Get Started")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("element-button",{secondary:!0,xl:!0,rounded:!0,class:"inline-block",href:"/ink/docs/index.html"},"{ 'secondary': true, 'xl': true, 'rounded': true, 'class': `inline-block`, 'href': `/ink/docs/index.html` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(n("Read the Docs")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
        `,!1)]),e.InkRegistry.createText(`
      `,!1)]),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
`,!1)])]}};return he(Ke);})();
