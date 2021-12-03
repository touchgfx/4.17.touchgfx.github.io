(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5325],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return p}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(r),p=i,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||a;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},44035:function(e,t,r){"use strict";var n=r(67294),i=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,a=e.height,o=(0,i.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:a,src:o})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:a,src:o})),n.createElement("p",null,e.children))}},29415:function(e,t,r){"use strict";var n=r(67294),i=r(88678);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends n.Component{render(){return n.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=o},88678:function(e,t,r){"use strict";var n=r(67294);class i extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{class:e},n.createElement("div",{class:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},31217:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var n=r(67294),i=r(73727),a=r(11368),o=r(35096),s=r(84487);const l=(0,n.createContext)({collectLink:()=>{}});var c=r(25026),d=r(67023),u=Object.defineProperty,h=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,b=(e,t,r)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&b(e,r,t[r]);if(m)for(var r of m(t))g.call(t,r)&&b(e,r,t[r]);return e};var v=function(e){var t,r=e,{isNavLink:u,to:b,href:v,activeClassName:w,isActive:k,"data-noBrokenLinkCheck":O,autoAddBaseUrl:T=!0}=r,x=((e,t)=>{var r={};for(var n in e)f.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&m)for(var n of m(e))t.indexOf(n)<0&&g.call(e,n)&&(r[n]=e[n]);return r})(r,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:M}}=(0,a.Z)(),{withBaseUrl:C}=(0,c.C)(),E=(0,n.useContext)(l),j=b||v,R=(0,o.Z)(j),A=null==j?void 0:j.replace("pathname://","");let P=void 0!==A?(Z=A,T&&(e=>e.startsWith("/"))(Z)?C(Z):Z):void 0;var Z;P&&R&&(P=(0,d.applyTrailingSlash)(P,M));const S=(0,n.useRef)(!1),U=u?i.OL:i.rU,L=s.Z.canUseIntersectionObserver;let F;(0,n.useEffect)((()=>(!L&&R&&null!=P&&window.docusaurus.prefetch(P),()=>{L&&F&&F.disconnect()})),[P,L,R]);const I=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,D=!P||!R||I;return P&&R&&!I&&!O&&E.collectLink(P),D?n.createElement("a",y(y({href:P},j&&!R&&{target:"_blank",rel:"noopener noreferrer"}),x)):n.createElement(U,y((_=y({},x),h(_,p({onMouseEnter:()=>{S.current||null==P||(window.docusaurus.preload(P),S.current=!0)},innerRef:e=>{var t,r;L&&e&&R&&(t=e,r=()=>{null!=P&&window.docusaurus.prefetch(P)},F=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(F.unobserve(t),F.disconnect(),r())}))})),F.observe(t))},to:P||""}))),u&&{isActive:k,activeClassName:w}));var _}},35096:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return i}})},25026:function(e,t,r){"use strict";r.d(t,{C:function(){return a},Z:function(){return o}});var n=r(11368),i=r(35096);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:a=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,i.b)(r))return r;if(n)return t+r;const o=r.startsWith(t)?r:t+r.replace(/^\//,"");return a?e+o:o}(t,e,r,n)}}function o(e,t={}){const{withBaseUrl:r}=a();return r(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[r]=e.split(/[#?]/),n="/"===r?"/":(i=r,t?function(e){return e.endsWith("/")?e:`${e}/`}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));var i;return e.replace(r,n)}},67023:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=r(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(i).default}});var a=r(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(a).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},71677:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return f},contentTitle:function(){return g},metadata:function(){return b},toc:function(){return y},default:function(){return w}});var n=r(3905),i=r(31217),a=r(29415),o=r(44035),s=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(d)for(var r of d(t))h.call(t,r)&&p(e,r,t[r]);return e};const f={id:"embedded-graphics",title:"Embedded Graphics"},g=void 0,b={unversionedId:"basic-concepts/embedded-graphics",id:"basic-concepts/embedded-graphics",isDocsHomePage:!1,title:"Embedded Graphics",description:"The term embedded graphics means many things.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/basic-concepts/embedded-graphics.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/embedded-graphics",permalink:"/4.17/ko/docs/basic-concepts/embedded-graphics",version:"current",frontMatter:{id:"embedded-graphics",title:"Embedded Graphics"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/4.17/ko/docs/introduction/getting-started"},next:{title:"Color Formats",permalink:"/4.17/ko/docs/basic-concepts/color-formats"}},y=[{value:"The four main parts",id:"the-four-main-parts",children:[{value:"MCU",id:"mcu",children:[]},{value:"RAM",id:"ram",children:[]},{value:"Flash",id:"flash",children:[]},{value:"Display",id:"display",children:[]}]}],v={toc:y};function w(e){var t,r=e,{components:s}=r,p=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&d)for(var n of d(e))t.indexOf(n)<0&&h.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},v),p),l(t,c({components:s,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"The term embedded graphics means many things."),(0,n.kt)("p",null,"First of, the word embedded means different things to different people. To some an embedded system means a very dependable old 8 bit microcontroller, with no operating system, and virtually no RAM, ROM or GPIO. To others it might mean a modern day smart phone with gigabytes of everything."),(0,n.kt)("p",null,"Secondly, the word graphics has many interpretations. To some it means drawing your own pixels in your favourite painting program. To others again it means the 3D rendering software running on your gaming console."),(0,n.kt)("p",null,"To TouchGFX, embedded systems mean any system based on an STM32 microcontroller. And graphics means interactive applications with a user interface running at 60 frames per second."),(0,n.kt)("h2",m({},{id:"the-four-main-parts"}),"The four main parts"),(0,n.kt)("p",null,"In order to do graphics applications on such platforms, we consider four main components directly involved. Naturally many more components might be present in an embedded system, but these are less related to the display of graphics."),(0,n.kt)(o.Z,{imageSource:"/img/basic-concepts/embedded-graphics-primer/4-main-parts.png",noShadow:"true",mdxType:"Figure"},"MCU, RAM, Flash and display"),(0,n.kt)("p",null,"In short, TouchGFX, using the MCU, creates and updates an image in RAM, by assembling parts from flash. The assembled image is transferred to the display. This process is repeated as often as possible and needed."),(0,n.kt)("h3",m({},{id:"mcu"}),"MCU"),(0,n.kt)("p",null,"The MCU is doing all the heavy lifting in this process. It reads images in flash and writes them to RAM. It calculates the resulting colors when merging a semi-transparent red text onto an image and saves these to RAM. It renders and stores all the pixels of a circle to RAM. It transfers the image from RAM to the display."),(0,n.kt)(o.Z,{imageSource:"/img/basic-concepts/mcu-internal.svg",noShadow:"true",width:240,mdxType:"Figure"},"The MCU provides the CPU, internal flash, internal RAM and much more"),(0,n.kt)("p",null,"STM32 MCUs have specific capabilities, like LTDC, Chrom-ART, Chrom-GRC, ..., that help in the realization of graphics."),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},"See the ",(0,n.kt)(i.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-mcu",mdxType:"Link"},"guide for selecting the right MCU")," and the ",(0,n.kt)(i.Z,{to:"../development/board-bring-up/how-to/02-cpu-running",mdxType:"Link"},"board bring up guide for setting up the MCU"),"."),(0,n.kt)("h3",m({},{id:"ram"}),"RAM"),(0,n.kt)("p",null,"RAM is where the resulting calculated image (",(0,n.kt)("a",m({parentName:"p"},{href:"framebuffer"}),"framebuffer"),") is stored. The RAM is being read and written by the MCU when updating the graphics. And read again when the resulting image is transferred to the display."),(0,n.kt)("p",null,"In many cases the resulting image is stored in RAM internal to the MCU. In cases where it is not feasible to have the resulting image in internal RAM, external RAM can be added to the setup."),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},"See the ",(0,n.kt)(i.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-external-memories",mdxType:"Link"},"guide for selecting the right RAM")," and the ",(0,n.kt)(i.Z,{to:"../development/board-bring-up/how-to/04-enable-external-ram",mdxType:"Link"},"board bring up guide for setting up the RAM"),"."),(0,n.kt)("h3",m({},{id:"flash"}),"Flash"),(0,n.kt)("p",null,"Flash is where all static data is placed. Images, fonts and texts. The flash is read by the MCU and the contents written to or combined with the RAM."),(0,n.kt)("p",null,"Most often an external flash is added to the setup, as the internal flash is seldomly large enough to hold all graphics assets. For very simple applications the internal flash is enough."),(0,n.kt)("p",null,"Ideally the flash is memory mapped, such that pixels can be read directly from the flash and written to RAM. Otherwise, when the flash is not memory mapped, the contents of the flash can be transferred to RAM and then read from there instead."),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},"See the ",(0,n.kt)(i.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-external-memories",mdxType:"Link"},"guide for selecting the right flash")," and the ",(0,n.kt)(i.Z,{to:"../development/board-bring-up/how-to/06-flash-external-addressable",mdxType:"Link"},"board bring up guide for setting up the flash"),"."),(0,n.kt)("h3",m({},{id:"display"}),"Display"),(0,n.kt)("p",null,"The display is where the image is actually displayed to the eyes of a person."),(0,n.kt)("p",null,"The calculated image (framebuffer) stored in RAM is sent by the MCU to the display at regular intervals."),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},"See the ",(0,n.kt)(i.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-display",mdxType:"Link"}," guide for selecting the right display")," and the ",(0,n.kt)(i.Z,{to:"../development/board-bring-up/how-to/03-display-internal",mdxType:"Link"},"board bring up guide for setting up the display"),"."),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,"See ",(0,n.kt)(i.Z,{to:"../development/hardware-selection/hardware-selection-introduction",mdxType:"Link"},"Hardware selection")," for details on the possible hardware choices."),(0,n.kt)("li",null,"See ",(0,n.kt)(i.Z,{to:"../development/board-bring-up/board-introduction",mdxType:"Link"},"Board Bring Up")," for details on setting up the board and components.")))}w.isMDXComponent=!0}}]);