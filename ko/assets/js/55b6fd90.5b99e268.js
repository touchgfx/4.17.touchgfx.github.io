(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7876],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(r),h=a,m=s["".concat(c,".").concat(h)]||s[h]||p[h]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},22425:function(e,t,r){"use strict";var n=r(67294);class a extends n.Component{render(){return n.createElement("div",{class:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,r){"use strict";var n=r(67294),a=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:o,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:o,src:i})),n.createElement("p",null,e.children))}},88678:function(e,t,r){"use strict";var n=r(67294);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{class:e},n.createElement("div",{class:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,r){"use strict";var n=r(67294),a=r(88678);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}t.Z=i},37793:function(e,t,r){"use strict";var n=r(67294),a=r(88678);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}t.Z=i},35096:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},25026:function(e,t,r){"use strict";r.d(t,{C:function(){return o},Z:function(){return i}});var n=r(11368),a=r(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(n)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return o?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=o();return r(e,t)}},92589:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return g},contentTitle:function(){return b},metadata:function(){return v},toc:function(){return k},default:function(){return w}});var n=r(3905),a=r(44035),o=r(93054),i=r(37793),l=r(22425),c=Object.defineProperty,d=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&m(e,r,t[r]);if(p)for(var r of p(t))h.call(t,r)&&m(e,r,t[r]);return e};const g={id:"08-hardware-acceleration",title:"8. Hardware acceleration",sidebar_label:"8. Hardware acceleration"},b=void 0,v={unversionedId:"development/board-bring-up/how-to/08-hardware-acceleration",id:"development/board-bring-up/how-to/08-hardware-acceleration",isDocsHomePage:!1,title:"8. Hardware acceleration",description:"\uac1c\uc694",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/08-hardware-acceleration.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/08-hardware-acceleration",permalink:"/4.17/ko/docs/development/board-bring-up/how-to/08-hardware-acceleration",version:"current",sidebarPosition:8,frontMatter:{id:"08-hardware-acceleration",title:"8. Hardware acceleration",sidebar_label:"8. Hardware acceleration"},sidebar:"docs",previous:{title:"7. External flash in block mode",permalink:"/4.17/ko/docs/development/board-bring-up/how-to/07-flash-external-nonaddressable"},next:{title:"9. Touch Controller",permalink:"/4.17/ko/docs/development/board-bring-up/how-to/09-touch-controller"}},k=[{value:"\uac1c\uc694",id:"motivation",children:[]},{value:"\ubaa9\ud45c",id:"goal",children:[{value:"\ud655\uc778",id:"verification",children:[]}]},{value:"\uc804\uc81c \uc870\uac74",id:"prerequisites",children:[]},{value:"\uc2e4\ud589",id:"do",children:[{value:"\ud504\ub808\uc784 \ubc84\ud37c \uba54\ubaa8\ub9ac\uc5d0 \uc4f0\uae30",id:"write-to-framebuffer-memory",children:[]},{value:"\uc608\uc0c1\ub300\ub85c \uc131\ub2a5\uc774 \ubc1c\ud718\ub418\ub294\uc9c0 \uc5ec\ubd80",id:"performance-is-as-expected",children:[]}]}],C={toc:k};function w(e){var t,r=e,{components:c}=r,m=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&h.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},C),m),d(t,u({components:c,mdxType:"MDXLayout"}))),(0,n.kt)("h2",f({},{id:"motivation"}),"\uac1c\uc694"),(0,n.kt)("p",null,"Chrom-ART(DMA2D) \uadf8\ub798\ud53d \uac00\uc18d\uae30\ub294 \uba54\ubaa8\ub9ac\uc5d0\uc11c \uc774\ubbf8\uc9c0 \ub370\uc774\ud130\uc758 \ubd80\ubd84\uc744 \uc804\uc1a1\ud558\uace0 \uc774\uac83\uc744 \ud504\ub808\uc784 \ubc84\ud37c\uc5d0\uc11c \uadf8\ub9ac\uac70\ub098 \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Chrom-ART\ub294 \ub0b4\ubd80 \ub610\ub294 \uc678\ubd80 \uba54\ubaa8\ub9ac\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uc77d\uc5b4\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub9c8\ucc2c\uac00\uc9c0\ub85c \ub0b4\ubd80 \ub610\ub294 \uc678\ubd80 \uba54\ubaa8\ub9ac\uc5d0 \uc4f0\uae30\ub3c4 \uac00\ub2a5\ud569\ub2c8\ub2e4. \uadf8\ub798\ud53d\uc744 \uc218\ud589\ud560 \ub54c \ud65c\uc6a9\uc774 \uac00\ub2a5\ud558\uba70, \uadf8\ub798\ud53d \uc131\ub2a5\uc744 \ud68d\uae30\uc801\uc73c\ub85c \uac1c\uc120\ud558\ub294 \ub3d9\uc2dc\uc5d0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 MCU \uc0ac\uc6a9\ub7c9\uc744 \ub300\ud3ed \uc904\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"\ubaa8\ub4e0 \uc81c\ud488\uc740 \uc544\ub2c8\uc9c0\ub9cc \ub300\ubd80\ubd84\uc758 STM32 \ucee8\ud2b8\ub864\ub7ec\uc5d0\ub294 Chrom-ART \uac00\uc18d\uae30\ub97c \ud3ec\ud568\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ub370\uc774\ud130 \uc2dc\ud2b8\ub97c \ud655\uc778\ud558\uc2ed\uc2dc\uc624. DMA2D\ub294 \ucf54\ub4dc\uc640 \uc124\uba85\uc11c\uc5d0 \uc0ac\uc6a9\ub418\ub294 Chrom-ART\uc758 \ucf54\ub4dc \uc774\ub984\uc785\ub2c8\ub2e4."),(0,n.kt)(o.Z,{mdxType:"Note"},"Chrom-ART\ub97c \uc0ac\uc6a9\ud558\ub294 \ud558\ub4dc\uc6e8\uc5b4 \uac00\uc18d\uc774 \ubcf4\ub4dc \ube0c\ub9c1\uc5c5\uacfc \uad00\ub828\uc774 \uc5c6\ub2e4\uba74 \uc774 \ub2e8\uacc4\ub97c \uac74\ub108\ub6f0\uc2ed\uc2dc\uc624."),(0,n.kt)("h2",f({},{id:"goal"}),"\ubaa9\ud45c"),(0,n.kt)("p",null,"\uc774 \ub2e8\uacc4\uc758 \ubaa9\ud45c\ub294 Chrom-ART\ub97c \ud65c\uc131\ud654\ud558\uc5ec \uc774\ub97c \uc774\uc6a9\ud574 \ub370\uc774\ud130 \uc77d\uae30 \ubc0f \uc4f0\uae30\ub97c \uc218\ud589\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \ubaa9\ud45c\ub294 Chrom-ART \uce69\uc758 \uae30\ub2a5\uc744 \uac80\ud1a0\ud558\ub294 \uac83\uc774",(0,n.kt)("strong",{parentName:"p"},"\uc544\ub2c8\ub77c"),", Chrom-ART \uce21\uba74\uc5d0\uc11c \uba54\ubaa8\ub9ac \uc778\ud130\ud398\uc774\uc2a4\uac00 \uc81c \uae30\ub2a5\uc744 \ud558\ub294\uc9c0 \ud655\uc778\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,n.kt)("h3",f({},{id:"verification"}),"\ud655\uc778"),(0,n.kt)("p",null,"\ub2e4\uc74c\uc740 \uc774 \uc139\uc158\uc5d0\uc11c \ud655\uc778\ud574\uc57c \ud560 \uc0ac\ud56d\uc785\ub2c8\ub2e4:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:null}),"\ud655\uc778\uc0ac\ud56d"),(0,n.kt)("th",f({parentName:"tr"},{align:null}),"\ud655\uc778\uadfc\uac70"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Chrom-ART\uc758 \uad6c\uc131 \uc5ec\ubd80"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"\uc6d0\ud558\ub294 \uadf8\ub798\ud53d\uc744 \uadf8\ub9ac\ub294 \ub370 Chrom-ART\uac00 \uc0ac\uc6a9 \uac00\ub2a5\ud55c\uc9c0 \uc5ec\ubd80")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Chrom-ART\uc5d0\uc11c \uba54\ubaa8\ub9ac \uc77d\uae30\uac00 \uac00\ub2a5\ud55c\uc9c0 \uc5ec\ubd80"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"\uadf8\ub798\ud53d(M2M) \uc744 \uadf8\ub9ac\ub294 \ub370 Chrom-ART\uac00 \uc0ac\uc6a9 \uac00\ub2a5\ud55c\uc9c0 \uc5ec\ubd80")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Chrom-ART\uc5d0\uc11c \uba54\ubaa8\ub9ac \uc4f0\uae30\uac00 \uac00\ub2a5\ud55c\uc9c0 \uc5ec\ubd80"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"\uadf8\ub798\ud53d(M2M \ubc0f R2M) \uc744 \uadf8\ub9ac\ub294 \ub370 Chrom-ART\uac00 \uc0ac\uc6a9 \uac00\ub2a5\ud55c\uc9c0 \uc5ec\ubd80")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Chrom-ART \uc131\ub2a5"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"Chrom-ART\uac00 \uc6d0\ud558\ub294 \uadf8\ub798\ud53d \uc131\ub2a5\uc744 \ubc1c\ud718\ud558\ub294\uc9c0 \uc5ec\ubd80")))),(0,n.kt)("h2",f({},{id:"prerequisites"}),"\uc804\uc81c \uc870\uac74"),(0,n.kt)("p",null,"\ub2e4\uc74c\uc740 \uc774 \ub2e8\uacc4\uc5d0 \ub300\ud55c \uc804\uc81c \uc870\uac74\uc785\ub2c8\ub2e4:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Chrom-ART\ub97c \uc7a5\ucc29\ud55c MCU")),(0,n.kt)("h2",f({},{id:"do"}),"\uc2e4\ud589"),(0,n.kt)("p",null,"The Chrom-ART is configured in STM32CubeMX under the ",(0,n.kt)("em",{parentName:"p"},"Multimedia -> DMA2D")," category. DMA2D\ub97c \ud65c\uc131\ud654\ud558\uace0 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \ub530\ub77c ",(0,n.kt)("em",{parentName:"p"},"\uc804\uc1a1")," \ubaa8\ub4dc\uc640\xa0",(0,n.kt)("em",{parentName:"p"},"\uc0c9\uc0c1")," \ubaa8\ub4dc\ub97c \uad6c\uc131\ud558\uc2ed\uc2dc\uc624."),(0,n.kt)("p",null,"\uc544\ub798 \uadf8\ub9bc\uc5d0\uc11c\ub294 DMA2D\uac00 \uba54\ubaa8\ub9ac\uac04 \uc804\uc1a1 \ubaa8\ub4dc \ubc0f RGB565 \uc0c9\uc0c1 \ubaa8\ub4dc\ub97c \uc704\ud574 \ud65c\uc131\ud654 \ubc0f \uad6c\uc131\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \ub9de\ub294 \uc0c9\uc0c1 \ubaa8\ub4dc\ub97c \uc120\ud0dd\ud558\uc2ed\uc2dc\uc624."),(0,n.kt)(a.Z,{imageSource:"/img/development/board-bring-up/hwaccel/cubemx-dma2d.png",noShadow:!0,width:"600",mdxType:"Figure"},"Chrom-ART \uad6c\uc131"),(0,n.kt)("p",null,"DMA2D \uc804\uc5ed \uc778\ud130\ub7fd\ud2b8\ub294 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ud504\ub808\uc784 \ubc84\ud37c \uc561\uc138\uc2a4\ub97c \ub3d9\uae30\ud654\ud558\ub294 \ub370 \uc911\uc694\ud569\ub2c8\ub2e4. Ensure that the global interupt is enabled (NVIC tab) and that code generation for interrupt handlers is enabled (Code Generation tab) in the STM32CubeMX NVIC settings as shown below. \uc774 \ub2e8\uacc4\uc5d0\uc11c \uc6b0\uc120\uc21c\uc704\ub294 \uc911\uc694\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,n.kt)(a.Z,{imageSource:"/img/development/board-bring-up/hwaccel/cubemx-nvic-dma2d.png",noShadow:!0,width:"600",mdxType:"Figure"},"Chrom-ART \uc778\ud130\ub7fd\ud2b8 \ud65c\uc131\ud654"),(0,n.kt)(a.Z,{imageSource:"/img/development/board-bring-up/hwaccel/cubemx-nvic-dma2d-codegen.png",noShadow:!0,width:"600",mdxType:"Figure"},"Chrom-ART \uc778\ud130\ub7fd\ud2b8 \ud578\ub4e4\ub7ec \ucf54\ub4dc \uc0dd\uc131 \ud65c\uc131\ud654"),(0,n.kt)("h3",f({},{id:"write-to-framebuffer-memory"}),"\ud504\ub808\uc784 \ubc84\ud37c \uba54\ubaa8\ub9ac\uc5d0 \uc4f0\uae30"),(0,n.kt)("p",null,"\ub2e4\uc74c\uc740 \ub300\uc0c1 \uba54\ubaa8\ub9ac(\ub808\uc9c0\uc2a4\ud130\uc5d0\uc11c \uba54\ubaa8\ub9ac\ub85c) \uc758 \uc0ac\uac01\ud615\uc5d0 \ud2b9\uc815 \uc0c9\uc0c1\uc744 \ucc44\uc6b0\ub294 \ucf54\ub4dc\uc5d0 \ub300\ud55c \uac1c\uc694\uc785\ub2c8\ub2e4. Check STM32Cube Firmware packs for a concrete project for your MCU."),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"main.c"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),'#include "stm32f7xx_hal.h"\n#include "stm32f7xx_hal_dma2d.h"\n...\n\nuint32_t color = 0xF800; //Red in RGB565\n\nhdma2d.Init.Mode = DMA2D_R2M;\nhdma2d.Init.ColorMode = DMA2D_RGB565;\n\nMODIFY_REG(hdma2d.Instance->CR, DMA2D_CR_MODE, DMA2D_R2M);\nMODIFY_REG(hdma2d.Instance->OPFCCR, DMA2D_OPFCCR_CM, DMA2D_RGB565);\nMODIFY_REG(hdma2d.Instance->OOR, DMA2D_OOR_LO, displayWidth - rectangleWidth);\n\nhdma2d.LayerCfg[1].InputColorMode = CM_RGB565;\nhdma2d.LayerCfg[1].InputOffset = 0;\n\nHAL_DMA2D_ConfigLayer(&hdma2d, 1);\n\nHAL_DMA2D_Start_IT(&hdma2d, color, (unsigned int)dstPtr, rectangleWidth, rectangleHeight);\n\n')),(0,n.kt)("p",null,"If the Transfer Completed setup is configured correctly in STM32CubeMX, a custom handler can be assigned to handle this event:"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"    hdma2d.XferCpltCallback = DMA2D_XferCpltCallback;\n")),(0,n.kt)("p",null,"\ub610\ud55c \ud578\ub4e4\ub7ec\ub97c \ub2e4\uc74c\uacfc \uac19\uc774 \uc815\uc758\ud558\uc5ec Transfer Completed \uc778\ud130\ub7fd\ud2b8 \uad6c\uc131\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),'extern "C" {\n    static void DMA2D_XferCpltCallback(DMA2D_HandleTypeDef* handle)\n    {\n        //Ensure that you this callback is called\n    }\n}\n')),(0,n.kt)("p",null,"\ud53d\uc140 \ub370\uc774\ud130\ub97c \uc774\uc6a9\ud574 \uba54\ubaa8\ub9ac\uc5d0 \ud3ec\uc778\ud130\ub97c \uc81c\uacf5\ud568\uc73c\ub85c\uc368 Memory-to-Memory\ub97c \ud14c\uc2a4\ud2b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"HAL_DMA2D_Start_IT(&hdma2d,\n    (unsigned int)srcPtr,\n    (unsigned int)dstPtr,\n    displayWidth - nrOfPixels);\n\n")),(0,n.kt)("h3",f({},{id:"performance-is-as-expected"}),"\uc608\uc0c1\ub300\ub85c \uc131\ub2a5\uc774 \ubc1c\ud718\ub418\ub294\uc9c0 \uc5ec\ubd80"),(0,n.kt)("p",null,"Chrom-ART\uc758 \uc131\ub2a5\uc744 \uba54\ubaa8\ub9ac \uc77d\uae30 \ubc0f \uc4f0\uae30\ub97c \uc218\ud589\ud55c \uc774\uc804 \ub2e8\uacc4\uc5d0\uc11c \ub098\uc628 \uc131\ub2a5 \uacb0\uacfc\uc640 \ube44\uad50\ud558\uc2ed\uc2dc\uc624. Chrom-ART\ub97c \ud65c\uc6a9\ud558\ub294 \ucf54\ub4dc\ub294 \uc774\uc804\uc758 CPU \uc77d\uae30/\uc4f0\uae30 \uc791\uc5c5\ubcf4\ub2e4 \uc131\ub2a5\uc774 \ub6f0\uc5b4\ub0a0 \uac83\uc73c\ub85c \uae30\ub300\ub429\ub2c8\ub2e4."),(0,n.kt)(i.Z,{mdxType:"Tip"},"\ubc00\ub9ac\ucd08\ub85c \uce74\uc6b4\ud305\ud558\ub294 sysTick\ubcf4\ub2e4 \uc815\ud655\ud558\uac8c \uc911\ub2e8\uc810 \uac04\uc5d0 \uc18c\uc694\ub41c \ud074\ub85d \uc0ac\uc774\ud074\uc744 \uce21\uc815\ud558\ub824\uba74 `CCSTEP` \ud074\ub85d \uc0ac\uc774\ud074 \ub808\uc9c0\uc2a4\ud130\uc758 \uac12\uc744 \uc0ac\uc6a9\ud558\uc2ed\uc2dc\uc624."))}w.isMDXComponent=!0}}]);