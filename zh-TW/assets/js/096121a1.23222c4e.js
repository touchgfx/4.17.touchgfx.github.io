(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8050],{3905:function(t,a,e){"use strict";e.d(a,{Zo:function(){return p},kt:function(){return f}});var n=e(67294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function o(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var m=n.createContext({}),d=function(t){var a=n.useContext(m),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},p=function(t){var a=d(t.components);return n.createElement(m.Provider,{value:a},t.children)},u={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},s=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=d(e),f=r,k=s["".concat(m,".").concat(f)]||s[f]||u[f]||l;return e?n.createElement(k,i(i({ref:a},p),{},{components:e})):n.createElement(k,i({ref:a},p))}));function f(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=s;var o={};for(var m in a)hasOwnProperty.call(a,m)&&(o[m]=a[m]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=e[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}s.displayName="MDXCreateElement"},43861:function(t,a,e){"use strict";var n=e(67294);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}a.Z=r},31217:function(t,a,e){"use strict";e.d(a,{Z:function(){return h}});var n=e(67294),r=e(73727),l=e(11368),i=e(35096),o=e(84487);const m=(0,n.createContext)({collectLink:()=>{}});var d=e(25026),p=e(67023),u=Object.defineProperty,s=Object.defineProperties,f=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,g=(t,a,e)=>a in t?u(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,y=(t,a)=>{for(var e in a||(a={}))c.call(a,e)&&g(t,e,a[e]);if(k)for(var e of k(a))N.call(a,e)&&g(t,e,a[e]);return t};var h=function(t){var a,e=t,{isNavLink:u,to:g,href:h,activeClassName:b,isActive:_,"data-noBrokenLinkCheck":v,autoAddBaseUrl:x=!0}=e,T=((t,a)=>{var e={};for(var n in t)c.call(t,n)&&a.indexOf(n)<0&&(e[n]=t[n]);if(null!=t&&k)for(var n of k(t))a.indexOf(n)<0&&N.call(t,n)&&(e[n]=t[n]);return e})(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:w}}=(0,l.Z)(),{withBaseUrl:D}=(0,d.C)(),O=(0,n.useContext)(m),P=g||h,B=(0,i.Z)(P),F=null==P?void 0:P.replace("pathname://","");let j=void 0!==F?(Z=F,x&&(t=>t.startsWith("/"))(Z)?D(Z):Z):void 0;var Z;j&&B&&(j=(0,p.applyTrailingSlash)(j,w));const L=(0,n.useRef)(!1),C=u?r.OL:r.rU,E=o.Z.canUseIntersectionObserver;let R;(0,n.useEffect)((()=>(!E&&B&&null!=j&&window.docusaurus.prefetch(j),()=>{E&&R&&R.disconnect()})),[j,E,B]);const M=null!==(a=null==j?void 0:j.startsWith("#"))&&void 0!==a&&a,S=!j||!B||M;return j&&B&&!M&&!v&&O.collectLink(j),S?n.createElement("a",y(y({href:j},P&&!B&&{target:"_blank",rel:"noopener noreferrer"}),T)):n.createElement(C,y((H=y({},T),s(H,f({onMouseEnter:()=>{L.current||null==j||(window.docusaurus.preload(j),L.current=!0)},innerRef:t=>{var a,e;E&&t&&B&&(a=t,e=()=>{null!=j&&window.docusaurus.prefetch(j)},R=new window.IntersectionObserver((t=>{t.forEach((t=>{a===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(R.unobserve(a),R.disconnect(),e())}))})),R.observe(a))},to:j||""}))),u&&{isActive:_,activeClassName:b}));var H}},35096:function(t,a,e){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}e.d(a,{b:function(){return n},Z:function(){return r}})},25026:function(t,a,e){"use strict";e.d(a,{C:function(){return l},Z:function(){return i}});var n=e(11368),r=e(35096);function l(){const{siteConfig:{baseUrl:t="/",url:a}={}}=(0,n.Z)();return{withBaseUrl:(e,n)=>function(t,a,e,{forcePrependBaseUrl:n=!1,absolute:l=!1}={}){if(!e)return e;if(e.startsWith("#"))return e;if((0,r.b)(e))return e;if(n)return a+e;const i=e.startsWith(a)?e:a+e.replace(/^\//,"");return l?t+i:i}(a,t,e,n)}}function i(t,a={}){const{withBaseUrl:e}=l();return e(t,a)}},67271:function(t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(t,a){if(t.startsWith("#"))return t;if(void 0===a)return t;const[e]=t.split(/[#?]/),n="/"===e?"/":(r=e,a?function(t){return t.endsWith("/")?t:`${t}/`}(r):function(t){return t.endsWith("/")?t.slice(0,-1):t}(r));var r;return t.replace(e,n)}},67023:function(t,a,e){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(a,"__esModule",{value:!0}),a.uniq=a.applyTrailingSlash=void 0;var r=e(67271);Object.defineProperty(a,"applyTrailingSlash",{enumerable:!0,get:function(){return n(r).default}});var l=e(11080);Object.defineProperty(a,"uniq",{enumerable:!0,get:function(){return n(l).default}})},11080:function(t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(t){return Array.from(new Set(t))}},85008:function(t,a,e){"use strict";e.r(a),e.d(a,{frontMatter:function(){return k},contentTitle:function(){return c},metadata:function(){return N},toc:function(){return g},default:function(){return h}});var n=e(3905),r=e(31217),l=e(43861),i=Object.defineProperty,o=Object.defineProperties,m=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(t,a,e)=>a in t?i(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,f=(t,a)=>{for(var e in a||(a={}))p.call(a,e)&&s(t,e,a[e]);if(d)for(var e of d(a))u.call(a,e)&&s(t,e,a[e]);return t};const k={title:"DisplayTransformation"},c=void 0,N={unversionedId:"api/classes/classtouchgfx_1_1_display_transformation",id:"api/classes/classtouchgfx_1_1_display_transformation",isDocsHomePage:!1,title:"DisplayTransformation",description:"Defines transformations from display space to framebuffer space.",source:"@site/docs/api/classes/classtouchgfx_1_1_display_transformation.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_display_transformation",permalink:"/4.17/zh-TW/docs/api/classes/classtouchgfx_1_1_display_transformation",version:"current",frontMatter:{title:"DisplayTransformation"},sidebar:"docs",previous:{title:"DigitalClock",permalink:"/4.17/zh-TW/docs/api/classes/classtouchgfx_1_1_digital_clock"},next:{title:"DMA_Interface",permalink:"/4.17/zh-TW/docs/api/classes/classtouchgfx_1_1_d_m_a___interface"}},g=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"transformDisplayToFrameBuffer",id:"transformdisplaytoframebuffer",children:[]},{value:"transformDisplayToFrameBuffer",id:"transformdisplaytoframebuffer-1",children:[]},{value:"transformDisplayToFrameBuffer",id:"transformdisplaytoframebuffer-2",children:[]},{value:"transformDisplayToFrameBuffer",id:"transformdisplaytoframebuffer-3",children:[]},{value:"transformDisplayToFrameBuffer",id:"transformdisplaytoframebuffer-4",children:[]},{value:"transformDisplayToFrameBuffer",id:"transformdisplaytoframebuffer-5",children:[]},{value:"transformFrameBufferToDisplay",id:"transformframebuffertodisplay",children:[]},{value:"transformFrameBufferToDisplay",id:"transformframebuffertodisplay-1",children:[]}]}],y={toc:g};function h(t){var a,e=t,{components:i}=e,s=((t,a)=>{var e={};for(var n in t)p.call(t,n)&&a.indexOf(n)<0&&(e[n]=t[n]);if(null!=t&&d)for(var n of d(t))a.indexOf(n)<0&&u.call(t,n)&&(e[n]=t[n]);return e})(e,["components"]);return(0,n.kt)("wrapper",(a=f(f({},y),s),o(a,m({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null," Defines transformations from display space to framebuffer space.\nThe display might be (considered) in portrait mode from 0,0 to 272,480, while the actual framebuffer is from 0,0 to 480,272. This class handles the transformations. "),(0,n.kt)("h2",f({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:"right"})),(0,n.kt)("th",f({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"Link"},"transformDisplayToFrameBuffer")),"(float & x, float & y)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Transform x,y from display to framebuffer coordinates.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"Link"},"transformDisplayToFrameBuffer")),"(float & x, float & y, const ",(0,n.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," & in)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Transform x,y from coordinates relative to the in rect to framebuffer coordinates.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"Link"},"transformDisplayToFrameBuffer")),"(int16_t & x, int16_t & y)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Transform x,y from display to framebuffer coordinates.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"Link"},"transformDisplayToFrameBuffer")),"(int16_t & x, int16_t & y, const ",(0,n.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," & in)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Transform x,y from coordinates relative to the in rect to framebuffer coordinates.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"Link"},"transformDisplayToFrameBuffer")),"(",(0,n.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," & r)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Transform rectangle from display to framebuffer coordinates.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"Link"},"transformDisplayToFrameBuffer")),"(",(0,n.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," & r, const ",(0,n.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," & in)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Transform rectangle r from coordinates relative to the in rect to framebuffer coordinates.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_display_transformation#function-transformframebuffertodisplay",mdxType:"Link"},"transformFrameBufferToDisplay")),"(int16_t & x, int16_t & y)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Transform x,y from framebuffer to display coordinates.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_display_transformation#function-transformframebuffertodisplay",mdxType:"Link"},"transformFrameBufferToDisplay")),"(",(0,n.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," & r)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Transform rectangle from framebuffer to display coordinates.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"right"})),(0,n.kt)("td",f({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",f({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",f({},{id:"transformdisplaytoframebuffer"}),"transformDisplayToFrameBuffer"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"Link"},"transformDisplayToFrameBuffer")),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"float &"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"x ,"),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"float &"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"y"),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Transform x,y from display to framebuffer coordinates. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"x"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"the x part to translate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"y"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"the y part to translate."))))))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",f({},{id:"transformdisplaytoframebuffer-1"}),"transformDisplayToFrameBuffer"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"Link"},"transformDisplayToFrameBuffer")),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"float &"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"x ,"),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"float &"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"y ,"),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"const ",(0,n.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," &"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"in"),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Transform x,y from coordinates relative to the in rect to framebuffer coordinates. "),(0,n.kt)("p",null,"Transform x,y from coordinates relative to the in rect to framebuffer coordinates."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"x"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"the x part to translate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"y"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"the y part to translate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"in"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"the rectangle defining the coordinate space."))))))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",f({},{id:"transformdisplaytoframebuffer-2"}),"transformDisplayToFrameBuffer"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"Link"},"transformDisplayToFrameBuffer")),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"int16_t &"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"x ,"),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"int16_t &"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"y"),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Transform x,y from display to framebuffer coordinates. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"x"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"the x part to translate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"y"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"the y part to translate."))))))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",f({},{id:"transformdisplaytoframebuffer-3"}),"transformDisplayToFrameBuffer"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"Link"},"transformDisplayToFrameBuffer")),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"int16_t &"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"x ,"),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"int16_t &"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"y ,"),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"const ",(0,n.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," &"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"in"),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Transform x,y from coordinates relative to the in rect to framebuffer coordinates. "),(0,n.kt)("p",null,"Transform x,y from coordinates relative to the in rect to framebuffer coordinates."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"x"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"the x part to translate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"y"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"the y part to translate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"in"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"the rectangle defining the coordinate space."))))))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",f({},{id:"transformdisplaytoframebuffer-4"}),"transformDisplayToFrameBuffer"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"Link"},"transformDisplayToFrameBuffer")),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," &"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"r"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Transform rectangle from display to framebuffer coordinates. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"r"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"the rectangle to translate."))))))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",f({},{id:"transformdisplaytoframebuffer-5"}),"transformDisplayToFrameBuffer"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_display_transformation#function-transformdisplaytoframebuffer",mdxType:"Link"},"transformDisplayToFrameBuffer")),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," &"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"r ,"),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"const ",(0,n.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," &"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"in"),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Transform rectangle r from coordinates relative to the in rect to framebuffer coordinates. "),(0,n.kt)("p",null,"Transform rectangle r from coordinates relative to the in rect to framebuffer coordinates."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"r"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"the rectangle to translate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"in"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"the rectangle defining the coordinate space."))))))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_display_transformation#function-transformframebuffertodisplay",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",f({},{id:"transformframebuffertodisplay"}),"transformFrameBufferToDisplay"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_display_transformation#function-transformframebuffertodisplay",mdxType:"Link"},"transformFrameBufferToDisplay")),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"int16_t &"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"x ,"),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"int16_t &"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"y"),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Transform x,y from framebuffer to display coordinates. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"x"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"the x part to translate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"y"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"the y part to translate."))))))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_display_transformation#function-transformframebuffertodisplay",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",f({},{id:"transformframebuffertodisplay-1"}),"transformFrameBufferToDisplay"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_display_transformation#function-transformframebuffertodisplay",mdxType:"Link"},"transformFrameBufferToDisplay")),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," &"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"r"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",f({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})),(0,n.kt)("td",f({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Transform rectangle from framebuffer to display coordinates. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:null})),(0,n.kt)("th",f({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"r"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"the rectangle to translate."))))))))}h.isMDXComponent=!0}}]);