(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1378],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),f=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=f(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=f(r),m=a,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var f=2;f<i;f++)o[f]=r[f];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},44035:function(e,t,r){"use strict";var n=r(67294),a=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,i=e.height,o=(0,a.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:i,src:o})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:i,src:o})),n.createElement("p",null,e.children))}},29415:function(e,t,r){"use strict";var n=r(67294),a=r(88678);const i=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=o},88678:function(e,t,r){"use strict";var n=r(67294);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{class:e},n.createElement("div",{class:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var n=r(67294),a=r(73727),i=r(11368),o=r(35096),l=r(84487);const s=(0,n.createContext)({collectLink:()=>{}});var f=r(25026),c=r(67023),u=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&g(e,r,t[r]);if(h)for(var r of h(t))b.call(t,r)&&g(e,r,t[r]);return e};var v=function(e){var t,r=e,{isNavLink:u,to:g,href:v,activeClassName:k,isActive:w,"data-noBrokenLinkCheck":x,autoAddBaseUrl:O=!0}=r,M=((e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&h)for(var n of h(e))t.indexOf(n)<0&&b.call(e,n)&&(r[n]=e[n]);return r})(r,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:T}}=(0,i.Z)(),{withBaseUrl:A}=(0,f.C)(),N=(0,n.useContext)(s),E=g||v,C=(0,o.Z)(E),j=null==E?void 0:E.replace("pathname://","");let P=void 0!==j?(R=j,O&&(e=>e.startsWith("/"))(R)?A(R):R):void 0;var R;P&&C&&(P=(0,c.applyTrailingSlash)(P,T));const S=(0,n.useRef)(!1),D=u?a.OL:a.rU,F=l.Z.canUseIntersectionObserver;let Z;(0,n.useEffect)((()=>(!F&&C&&null!=P&&window.docusaurus.prefetch(P),()=>{F&&Z&&Z.disconnect()})),[P,F,C]);const I=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,_=!P||!C||I;return P&&C&&!I&&!x&&N.collectLink(P),_?n.createElement("a",y(y({href:P},E&&!C&&{target:"_blank",rel:"noopener noreferrer"}),M)):n.createElement(D,y((L=y({},M),p(L,m({onMouseEnter:()=>{S.current||null==P||(window.docusaurus.preload(P),S.current=!0)},innerRef:e=>{var t,r;F&&e&&C&&(t=e,r=()=>{null!=P&&window.docusaurus.prefetch(P)},Z=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(Z.unobserve(t),Z.disconnect(),r())}))})),Z.observe(t))},to:P||""}))),u&&{isActive:w,activeClassName:k}));var L}},35096:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},25026:function(e,t,r){"use strict";r.d(t,{C:function(){return i},Z:function(){return o}});var n=r(11368),a=r(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(n)return t+r;const o=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+o:o}(t,e,r,n)}}function o(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[r]=e.split(/[#?]/),n="/"===r?"/":(a=r,t?function(e){return e.endsWith("/")?e:`${e}/`}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));var a;return e.replace(r,n)}},67023:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=r(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(a).default}});var i=r(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(i).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},9409:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return d},contentTitle:function(){return b},metadata:function(){return g},toc:function(){return y},default:function(){return k}});var n=r(3905),a=r(44035),i=r(29415),o=r(31217),l=Object.defineProperty,s=Object.defineProperties,f=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&m(e,r,t[r]);if(c)for(var r of c(t))p.call(t,r)&&m(e,r,t[r]);return e};const d={id:"framebuffer",title:"Framebuffer"},b=void 0,g={unversionedId:"basic-concepts/framebuffer",id:"basic-concepts/framebuffer",isDocsHomePage:!1,title:"Framebuffer",description:"A framebuffer is a piece of memory that is updated by the graphics engine to contain the next image to be shown on the display.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/basic-concepts/framebuffer.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/framebuffer",permalink:"/4.17/ko/docs/basic-concepts/framebuffer",version:"current",frontMatter:{id:"framebuffer",title:"Framebuffer"},sidebar:"docs",previous:{title:"Color Formats",permalink:"/4.17/ko/docs/basic-concepts/color-formats"},next:{title:"Graphics Engine",permalink:"/4.17/ko/docs/basic-concepts/graphics-engine"}},y=[{value:"Colors",id:"colors",children:[]},{value:"Display",id:"display",children:[]},{value:"Location of framebuffer",id:"location-of-framebuffer",children:[{value:"Internal RAM",id:"internal-ram",children:[]},{value:"External RAM",id:"external-ram",children:[]},{value:"Display with embedded RAM",id:"display-with-embedded-ram",children:[]}]},{value:"Amount of framebuffers",id:"amount-of-framebuffers",children:[{value:"One framebuffer",id:"one-framebuffer",children:[]},{value:"More than one framebuffer",id:"more-than-one-framebuffer",children:[]},{value:"Less than one framebuffer",id:"less-than-one-framebuffer",children:[]}]},{value:"Memory consumption",id:"memory-consumption",children:[]}],v={toc:y};function k(e){var t,r=e,{components:l}=r,m=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=h(h({},v),m),s(t,f({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"A framebuffer is a piece of memory that is updated by the graphics engine to contain the next image to be shown on the display."),(0,n.kt)("p",null,"The framebuffer is a contiguous part of RAM of a given size."),(0,n.kt)(a.Z,{imageSource:"/img/basic-concepts/framebuffer-contiguous-memory.svg",noShadow:"true",mdxType:"Figure"},"Framebuffer memory"),(0,n.kt)("p",null,"A framebuffer has an associated width and height. Therefore we typically think of a framebuffer as being a two dimensional part of memory, indexable by x, y coordinates."),(0,n.kt)(a.Z,{imageSource:"/img/basic-concepts/framebuffer-2d-memory.svg",noShadow:"true",mdxType:"Figure"},"2D framebuffer memory"),(0,n.kt)("p",null,"A framebuffer has an associated color format. Each entry in the framebuffer will be a color in this color format. We will refer to each such entry in the framebuffer as a pixel."),(0,n.kt)("p",null,"We can update the color of a pixel at position x,y in the framebuffer by calculating the memory address of the pixel within the framebuffer and updating the stored color."),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"uint32_t pixelAddress = x + y * WIDTH;\nframebuffer[ pixelAddress ] = newColor;\n")),(0,n.kt)("p",null,"Similarly we can obtain the color of a pixel in the framebuffer and use this in calculations. For instance darkening the color of a pixel in the framebuffer (assuming we have a ",(0,n.kt)("inlineCode",{parentName:"p"},"darken")," function available)."),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"uint32_t pixelAddress = x + y * WIDTH;\nframebuffer[ pixelAddress ] = darken( framebuffer[ pixelAddress ] );\n")),(0,n.kt)("p",null,"Often the framebuffer memory is not written and read pixel by pixel as above, but by utilizing the underlying hardware capabilities of the system, e.g. the Chrom-ART DMA."),(0,n.kt)("h2",h({},{id:"colors"}),"Colors"),(0,n.kt)("p",null,"In TouchGFX the pixel color format of a framebuffer can be either:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Grayscale")," 1, 2 or 4 bits per pixel (bpp) grayscale, or"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"High or true color")," 16, 24 or 32 bpp color")),(0,n.kt)("p",null,"The more bits per pixels used the more distinct colors can be represented by the framebuffer, moreover the more bits per pixels used the more memory will be consumed by the framebuffer."),(0,n.kt)("h2",h({},{id:"display"}),"Display"),(0,n.kt)("p",null,"The contents of the framebuffer is what is ultimately transferred to and seen on the physical display. Therefore it is very common to have the same pixel width and height of the framebuffer and the display."),(0,n.kt)(a.Z,{imageSource:"/img/basic-concepts/display-and-framebuffer.svg",noShadow:"true",mdxType:"Figure"},"24 bpp framebuffer contents and resulting display"),(0,n.kt)(i.Z,{mdxType:"FurtherReading"},"See the section on ",(0,n.kt)(o.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-display",mdxType:"Link"},"display technologies")," to learn more on different display types."),(0,n.kt)("h2",h({},{id:"location-of-framebuffer"}),"Location of framebuffer"),(0,n.kt)("p",null,"One oversimplified view of a microcontroller based graphics system is here."),(0,n.kt)(a.Z,{imageSource:"/img/basic-concepts/simplified-graphics-system.png",noShadow:!0,width:"400",mdxType:"Figure"},"Oversimplified view of graphics system"),(0,n.kt)("p",null,"A framebuffer can be placed either internally in the MCU or in external RAM."),(0,n.kt)(a.Z,{imageSource:"/img/basic-concepts/framebuffer-placement.png",noShadow:"true",width:"600",mdxType:"Figure"},"Possible locations of framebuffer"),(0,n.kt)("p",null,"Each possible location has potential benefits and drawbacks."),(0,n.kt)("h3",h({},{id:"internal-ram"}),"Internal RAM"),(0,n.kt)("p",null,"Placing the framebuffer in RAM internal to the MCU makes the read and write access to the framebuffer as fast as possible. This means that your TouchGFX application will run as smooth as possible. Conversely, internal RAM is a very scarce resource and one that is used by many parts of a system, therefore occupying a large part of this with a framebuffer might be infeasible."),(0,n.kt)("p",null,"If feasible, having a framebuffer in internal RAM, could reduce the overall cost of the system as no additional RAM is needed."),(0,n.kt)("h3",h({},{id:"external-ram"}),"External RAM"),(0,n.kt)("p",null,"If the system has external RAM, placing the framebuffer here is an alternative to placing it in internal RAM. The read and write access to external RAM will typically be slower than to the internal RAM, but the amount of external RAM will typically be much larger. Therefore this is sometimes the only viable solution."),(0,n.kt)("p",null,"The MCU might have capabilities, like caching, that makes access to external RAM faster. See the section on ",(0,n.kt)(o.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-mcu",mdxType:"Link"},"MCU")," for details."),(0,n.kt)("h3",h({},{id:"display-with-embedded-ram"}),"Display with embedded RAM"),(0,n.kt)("p",null,'Depending on the type of display in the system there might be memory embedded on the display. This memory holds the contents of the "physical" pixels of the display. Having this pixel memory in the display implies that the MCU can be idle while the display is still alive.'),(0,n.kt)("p",null,"Placing a TouchGFX framebuffer in the RAM of the display is not possible, as the memory of the display is not memory mapped and is not intended nor suitable for random pixel reads or writes. Instead TouchGFX places the framebuffer in internal or external RAM and transfers this to the display RAM when appropriate."),(0,n.kt)("h2",h({},{id:"amount-of-framebuffers"}),"Amount of framebuffers"),(0,n.kt)("p",null,"TouchGFX can use one, multiple, or less than one framebuffer in the application. The amount of framebuffers might impact the visual appearance, performance and memory consumption of the application."),(0,n.kt)("h3",h({},{id:"one-framebuffer"}),"One framebuffer"),(0,n.kt)("p",null,"One framebuffer is enough to hold precisely all pixels that are to be transferred to the display. One framebuffer (at least) is needed when the display has no display RAM on board. In this case one framebuffer is ideal when the complexity of the displayed graphics does not induce any visual artifacts."),(0,n.kt)("h3",h({},{id:"more-than-one-framebuffer"}),"More than one framebuffer"),(0,n.kt)("p",null,"In TouchGFX, having multiple framebuffers means having two framebuffers. One framebuffer is used for writing the next resulting image, the other framebuffer is used for transferring to the display. This implies that no visual artifacts, e.g. tearing, will appear."),(0,n.kt)("h3",h({},{id:"less-than-one-framebuffer"}),"Less than one framebuffer"),(0,n.kt)("p",null,"Having less than one framebuffer in general implies that"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"less memory is consumed"),(0,n.kt)("li",{parentName:"ul"},"more drawing operations will be performed"),(0,n.kt)("li",{parentName:"ul"},"more transfers to display needed")),(0,n.kt)("p",null,"In TouchGFX less than one framebuffer is denoted a partial framebuffer. The partial framebuffer scheme is available only for displays with display RAM."),(0,n.kt)("h2",h({},{id:"memory-consumption"}),"Memory consumption"),(0,n.kt)("p",null,"The amount of colors and the number of pixels in the framebuffer determines the memory consumed by the framebuffer."),(0,n.kt)("p",null,"In general the amount of memory used by a framebuffer is ",(0,n.kt)("strong",{parentName:"p"}," width ","*"," height ","*"," color depth in bits / 8 ")," bytes."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",h({parentName:"tr"},{align:"right"}),"Resolution (pixels)"),(0,n.kt)("th",h({parentName:"tr"},{align:"right"}),"Colors (bpp)"),(0,n.kt)("th",h({parentName:"tr"},{align:"right"}),"Calculation"),(0,n.kt)("th",h({parentName:"tr"},{align:"right"}),"Memory consumed (byte)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:"right"}),"800x480"),(0,n.kt)("td",h({parentName:"tr"},{align:"right"}),"16 bpp"),(0,n.kt)("td",h({parentName:"tr"},{align:"right"}),"800 ","*"," 480 ","*"," 16 / 8"),(0,n.kt)("td",h({parentName:"tr"},{align:"right"}),"768.000 B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:"right"}),"480x272"),(0,n.kt)("td",h({parentName:"tr"},{align:"right"}),"24 bpp"),(0,n.kt)("td",h({parentName:"tr"},{align:"right"}),"480 ","*"," 272 ","*"," 24 / 8"),(0,n.kt)("td",h({parentName:"tr"},{align:"right"}),"391.680 B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",h({parentName:"tr"},{align:"right"}),"100x100"),(0,n.kt)("td",h({parentName:"tr"},{align:"right"}),"8 bpp"),(0,n.kt)("td",h({parentName:"tr"},{align:"right"}),"100 ","*"," 100 ","*","  8 / 8"),(0,n.kt)("td",h({parentName:"tr"},{align:"right"}),"10.000 B")))),(0,n.kt)("p",null,"When having more than one framebuffer the amount of memory consumed will be correspondingly larger. For example when having a double buffering scheme, using two framebuffers, will consume twice the amount of memory."),(0,n.kt)("p",null,"When having less than one framebuffer the amount of memory is explicitly allocated and controlled by the application. The memory consumption is therefore completely customizable, but be warned that using too little will harm the overall graphics performance."),(0,n.kt)(i.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,"The STM32 ",(0,n.kt)(o.Z,{to:"https://www.st.com/content/ccc/resource/technical/document/application_note/group0/25/ca/f9/b4/ae/fc/4e/1e/DM00287603/files/DM00287603.pdf/jcr:content/translations/en.DM00287603.pdf",mdxType:"Link"},"LTDC")," display controller document has further details on framebuffers")))}k.isMDXComponent=!0}}]);