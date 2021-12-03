(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6498],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=m(n),p=r,d=g["".concat(s,".").concat(p)]||g[p]||c[p]||i;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{class:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){"use strict";var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,o=(0,r.Z)(e.imageSource);return t?a.createElement("div",{class:"figure noshadow"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:i,src:o})),a.createElement("p",null,e.children)):a.createElement("div",{class:"figure"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:i,src:o})),a.createElement("p",null,e.children))}},29415:function(e,t,n){"use strict";var a=n(67294),r=n(88678);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=o},88678:function(e,t,n){"use strict";var a=n(67294);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{class:e},a.createElement("div",{class:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=r},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var a=n(67294),r=n(73727),i=n(11368),o=n(35096),l=n(84487);const s=(0,a.createContext)({collectLink:()=>{}});var m=n(25026),u=n(67023),c=Object.defineProperty,g=Object.defineProperties,p=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&k(e,n,t[n]);if(d)for(var n of d(t))f.call(t,n)&&k(e,n,t[n]);return e};var v=function(e){var t,n=e,{isNavLink:c,to:k,href:v,activeClassName:y,isActive:N,"data-noBrokenLinkCheck":w,autoAddBaseUrl:T=!0}=n,x=((e,t)=>{var n={};for(var a in e)h.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&d)for(var a of d(e))t.indexOf(a)<0&&f.call(e,a)&&(n[a]=e[a]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O}}=(0,i.Z)(),{withBaseUrl:_}=(0,m.C)(),L=(0,a.useContext)(s),E=k||v,I=(0,o.Z)(E),G=null==E?void 0:E.replace("pathname://","");let R=void 0!==G?(B=G,T&&(e=>e.startsWith("/"))(B)?_(B):B):void 0;var B;R&&I&&(R=(0,u.applyTrailingSlash)(R,O));const P=(0,a.useRef)(!1),j=c?r.OL:r.rU,C=l.Z.canUseIntersectionObserver;let S;(0,a.useEffect)((()=>(!C&&I&&null!=R&&window.docusaurus.prefetch(R),()=>{C&&S&&S.disconnect()})),[R,C,I]);const F=null!==(t=null==R?void 0:R.startsWith("#"))&&void 0!==t&&t,A=!R||!I||F;return R&&I&&!F&&!w&&L.collectLink(R),A?a.createElement("a",b(b({href:R},E&&!I&&{target:"_blank",rel:"noopener noreferrer"}),x)):a.createElement(j,b((M=b({},x),g(M,p({onMouseEnter:()=>{P.current||null==R||(window.docusaurus.preload(R),P.current=!0)},innerRef:e=>{var t,n;C&&e&&I&&(t=e,n=()=>{null!=R&&window.docusaurus.prefetch(R)},S=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.unobserve(t),S.disconnect(),n())}))})),S.observe(t))},to:R||""}))),c&&{isActive:N,activeClassName:y}));var M}},35096:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return o}});var a=n(11368),r=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+o:o}(t,e,n,a)}}function o(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),a="/"===n?"/":(r=n,t?function(e){return e.endsWith("/")?e:`${e}/`}(r):function(e){return e.endsWith("/")?e.slice(0,-1):e}(r));var r;return e.replace(n,a)}},67023:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var i=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(i).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},82235:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return k},metadata:function(){return b},toc:function(){return v},default:function(){return N}});var a=n(3905),r=n(44035),i=n(22425),o=n(29415),l=n(31217),s=Object.defineProperty,m=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&d(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&d(e,n,t[n]);return e};const f={id:"using-the-l8-image-format-to-reduce-memory-consumption",title:"Using the L8 Image Format to Reduce Memory Consumption"},k=void 0,b={unversionedId:"development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption",id:"development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption",isDocsHomePage:!1,title:"Using the L8 Image Format to Reduce Memory Consumption",description:"Images in the L8 format take up less flash storage and are faster to draw than e.g. ARGB8888.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption.mdx",sourceDirName:"development/ui-development/scenarios",slug:"/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption",permalink:"/4.17/zh-TW/docs/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption",version:"current",frontMatter:{id:"using-the-l8-image-format-to-reduce-memory-consumption",title:"Using the L8 Image Format to Reduce Memory Consumption"},sidebar:"docs",previous:{title:"Loading Images at Runtime",permalink:"/4.17/zh-TW/docs/development/ui-development/scenarios/loading-images-at-runtime"},next:{title:"Creating Dynamic L8 Images",permalink:"/4.17/zh-TW/docs/development/ui-development/scenarios/creating-dynamic-l8-images"}},v=[{value:"Example L8 Image",id:"example-l8-image",children:[]},{value:"Using  L8 Images in TouchGFX Designer",id:"using--l8-images-in-touchgfx-designer",children:[]},{value:"Transparent Images",id:"transparent-images",children:[]},{value:"Converting an image to 256 colors",id:"converting-an-image-to-256-colors",children:[{value:"Paint.NET",id:"paintnet",children:[]},{value:"ImageMagick",id:"imagemagick",children:[]},{value:"Comparison",id:"comparison",children:[]}]},{value:"Manual Configuration",id:"manual-configuration",children:[]}],y={toc:v};function N(e){var t,n=e,{components:s}=n,d=((e,t)=>{var n={};for(var a in e)g.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=h(h({},y),d),m(t,u({components:s,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Images in the L8 format take up less flash storage and are faster to draw than e.g. ARGB8888."),(0,a.kt)("p",null,"An image in L8 format consists of a color palette and a pixel array: The color palette lists up to 256 different colors specified in either 16-bit format RGB565, 24-bit format RGB888, or 32-bit format ARGB8888. The pixel array consists of one byte for each pixel. This byte is an index into the color palette (list of colors), pointing out the color for the pixel. The TouchGFX framework draws an L8 image by reading the pixels one-by-one, looking up the colors in the palette and writing these to the framebuffer. This happens automatically and is accelerated by the STM32 Chrom-ART hardware accelerator, if available on the hardware."),(0,a.kt)("p",null,"8-bit per pixel means that one L8 image can use 256 different colors. Another L8 image can use 256 other colors, since the two images each have their own palette."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/l8-image-with-4x4-pixels-and-palette-with-4-colors.png",mdxType:"Figure"},"An L8 image with 4 x 4 pixels and a palette with 4 colors"),(0,a.kt)("p",null,"Pixels are one byte (8-bit) each. The size of the pixels is therefore width x height bytes. The palette colors can be 16-bit, 24-bit, or 32 bit colors. Each color definition will therefore take up 2, 3, or 4 bytes."),(0,a.kt)("p",null,"Solid images should be stored in L8_RGB565 if the framebuffer is 16-bit (RGB565 format). If the framebuffer is 24-bit (RGB888) the L8 images must be stored in L8_RGB888 format. If the image is transparent the 32-bit format (ARGB8888) must be used:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Format")),(0,a.kt)("th",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Framebuffer format")),(0,a.kt)("th",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Supports transparent pixels")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),"L8_RGB565"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"16-bit RGB565"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"No")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),"L8_RGB888"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"24-bit RGB888"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"No")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),"L8_ARGB8888"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"Both"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"Yes")))),(0,a.kt)(o.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,"Read more about palette image formats here: ",(0,a.kt)(l.Z,{to:"https://en.wikipedia.org/wiki/Indexed_color",mdxType:"Link"},"https://en.wikipedia.org/wiki/Indexed_color"))),(0,a.kt)("h2",h({},{id:"example-l8-image"}),"Example L8 Image"),(0,a.kt)("p",null,"Here is a typical logo image. This image only uses 16 different colors:"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-with-16-24bit-colors.png",mdxType:"Figure"},"200 x 200 pixels L8 image with 16 different 24-bit colors."),(0,a.kt)("p",null,"The size in flash of this image is significant lower than the original image in the standard 24-bit format (RGB888). The table below lists the flash usage for this concrete image for the three different palette formats and for the non L8 format"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Format")),(0,a.kt)("th",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Size of pixels (bytes)")),(0,a.kt)("th",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Size of palette (bytes)")),(0,a.kt)("th",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Total size (bytes)")),(0,a.kt)("th",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Reduction in %")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),"RGB888"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"120,000"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"0"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"120,000"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),"L8_RGB565"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"40,000"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"32"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"40,032"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"66.6%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),"L8_RGB888"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"40,000"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"48"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"40,048"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"66.6%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),"L8_ARGB8888"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"40,000"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"64"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"40,064"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"66.6%")))),(0,a.kt)("p",null,"We see that the size reduction is very large, and that the size of the palette is insignificant on a medium sized image."),(0,a.kt)("h2",h({},{id:"using--l8-images-in-touchgfx-designer"}),"Using  L8 Images in TouchGFX Designer"),(0,a.kt)("p",null,"It is very easy to use the L8 image format in TouchGFX. The only thing to do is to configure the image converter to convert the image from PNG to L8 format. Here we will go through the whole process:"),(0,a.kt)("p",null,"Start a new project in the TouchGFX Designer. Copy your image to the assets/images folder in the new project:"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-in-assets-images-folder.png",mdxType:"Figure"},"Images folder of TouchGFX project"),(0,a.kt)("p",null,"Now go to the TouchGFX Designer and click the ",(0,a.kt)("a",h({parentName:"p"},{href:"../designer-user-guide/images-view"}),"Images tab")," in the top bar and select the image:"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-in-touchgfx-designer-images-4.17.png",mdxType:"Figure"},"Logo in Images view of TouchGFX Designer"),(0,a.kt)("p",null,"On the right side on the window, select image format L8_RGB888 (this example is running 24 bit colors)."),(0,a.kt)("p",null,"An image Widget can now be inserted on the canvas (here we inserted a Box in the background):"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-in-touchgfx-designer-canvas-4.17.png",mdxType:"Figure"},"Image widget on Canvas in TouchGFX Designer"),(0,a.kt)("p",null,"Nothing needs to be changed in the UI code. The Image Converter converts the PNG file and generates an image in L8 format because of the configuration we did in the Images tab."),(0,a.kt)("h2",h({},{id:"transparent-images"}),"Transparent Images"),(0,a.kt)("p",null,"As mentioned above it is also possible to use L8 format for images with transparency."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/button-image-32bit-non-opaque-argb8888.png",mdxType:"Figure"},"170 x 60 pixels button image in 32 bit format ARGB8888"),(0,a.kt)("p",null,"The above image uses 108 colors (many shades of blue). This image can use the format L8_ARGB8888. The size will be significantly lower:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Format")),(0,a.kt)("th",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Size of pixels (bytes)")),(0,a.kt)("th",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Size of palette (bytes)")),(0,a.kt)("th",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Total size (bytes)")),(0,a.kt)("th",h({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Reduction in %")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),"ARGB888"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"40,800"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"0"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"40,800"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),"L8_ARGB8888"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"10,200"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"432"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"10,632"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"73.9%")))),(0,a.kt)("h2",h({},{id:"converting-an-image-to-256-colors"}),"Converting an image to 256 colors"),(0,a.kt)("p",null,"Many images use more than 256 colors. This is common for images that are photo-realistic or images with gradients. These images cannot directly be converted to L8 image format in the TouchGFX Designer, because they contain to many colors."),(0,a.kt)("p",null,"In many cases though, it is possible to reduce the number of colors used in a specific image. Ideally, a graphics artist will convert/supply the images in 256 colors, however image manipulation tools can also perform the conversion without loosing too much of the image quality."),(0,a.kt)("h3",h({},{id:"paintnet"}),"Paint.NET"),(0,a.kt)("p",null,"The simplest way is to use Paint.NET. Open the original image and use Save As to save the image in another file. In the Save Configuration dialog, select 8-bit, as pixel depth:"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/paint-dot-net-convert-to-8bit.png",mdxType:"Figure"},"Paint.NET saving image in 8 bit format"),(0,a.kt)("p",null,"Now use the new PNG in your project. Remember to select the L8_ARGB8888 format in the ",(0,a.kt)("a",h({parentName:"p"},{href:"../designer-user-guide/images-view"}),"Images tab"),' in the TouchGFX Designer. Shadows are not handled very well, but icons with transparent edges looks good in many cases. It is possible to adjust the "Transparency threshold" value and in some cases improve the result.'),(0,a.kt)("h3",h({},{id:"imagemagick"}),"ImageMagick"),(0,a.kt)("p",null,"Another suitable tool, that sometimes results in better L8 images, is ImageMagick (download from ",(0,a.kt)("a",h({parentName:"p"},{href:"https://imagemagick.org/"}),"www.imagemagick.org"),"). This tool can convert images from the command line. This makes it suitable for use in scripts. To convert the clock_bg.png to an image using at most 256 colors, use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{}),"magick convert clock_bg.png -colors 256 clock_bg_l8_256.png\n")),(0,a.kt)("p",null,"ImageMagick can also tell you how many colors are used in an image. Use this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cmd"}),"magick identify -format %k Blue_Buttons_Round_Edge_small.png\n")),(0,a.kt)("h3",h({},{id:"comparison"}),"Comparison"),(0,a.kt)("p",null,"The three images (original, L8 using Paint.NET, L8 using ImageMagick) are seen below for comparison:"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/clock-image-original-paint-dot-net-image-magick-comparison.png",mdxType:"Figure"},"Clock image comparison, left to right: original, Paint.NET, ImageMagick"),(0,a.kt)("p",null,"The middle clock lost the details in the border shadow. In both cases the central part of the clock background looks useable."),(0,a.kt)("h2",h({},{id:"manual-configuration"}),"Manual Configuration"),(0,a.kt)("p",null,"It is also possible to select image formats without using the TouchGFX Designer. The image formats are specified in file application.config located in the project root:"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"application.config"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-JSON"}),'{\n  "image_configuration": {\n    images": {\n      "Blue_Buttons_Round_Edge_small.png": {\n        "format": "L8_ARGB8888"\n      }\n    },\n    "dither_algorithm": "2",\n    "alpha_dither": "yes",\n    "layout_rotation": "0",\n    "opaque_image_format": "RGB888",\n    "nonopaque_image_format": "ARGB8888",\n    "section": "ExtFlashSection",\n    "extra_section": "ExtFlashSection"\n  }\n}\n')),(0,a.kt)("p",null,'The "images" section under "image_configuration" specifies the format for individual images. If an image is not mentioned here, the image will be generated in the default format (opaque_image_format or nonopaque_image_format).'),(0,a.kt)("p",null,"We recommend using the TouchGFX Designer for image configuration when possible."))}N.isMDXComponent=!0}}]);