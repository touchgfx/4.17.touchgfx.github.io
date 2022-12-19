"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8728],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),f=o,d=s["".concat(l,".").concat(f)]||s[f]||m[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,i=(0,o.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=o},93054:function(e,t,n){var r=n(67294),o=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}t.Z=i},37793:function(e,t,n){var r=n(67294),o=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:a},this.props.children)}}t.Z=i},24483:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return g},default:function(){return b},frontMatter:function(){return h},metadata:function(){return v},toc:function(){return T}});var r=n(3905),o=n(44035),a=n(93054),i=n(37793),c=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&f(e,n,t[n]);if(u)for(var n of u(t))m.call(t,n)&&f(e,n,t[n]);return e};const h={id:"scenarios-fmc",title:"FMC & SPI\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9"},g=void 0,v={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-fmc",id:"development/touchgfx-hal-development/scenarios/scenarios-fmc",title:"FMC & SPI\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9",description:"\u3053\u306e\u30b7\u30ca\u30ea\u30aa\u306f\u3001FMC\u306b\u63a5\u7d9a\u3055\u308c\u3066\u3044\u308b\u3001\u307e\u305f\u306fSPI\u7d4c\u7531\u3067\u63a5\u7d9a\u3055\u308c\u3066\u3044\u308bLCD\u306b\u30d4\u30af\u30bb\u30eb\u3092\u8ee2\u9001\u3059\u308b\u969b\u306e\u624b\u9806\u306b\u3064\u3044\u3066\u8aac\u660e\u3059\u308b\u3082\u306e\u3067\u3059\u3002\u3053\u306e2\u3064\u306e\u65b9\u6cd5\u306f\u3044\u304f\u3064\u304b\u306e\u8981\u7d20\u3092\u5171\u6709\u3057\u3066\u3044\u307e\u3059\u3002 \u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u8aac\u660e\u3059\u308b\u30b7\u30ca\u30ea\u30aa\u306f\u3001\u4f8b\u3068\u3057\u3066ST7789H2 LCD\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-fmc.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-fmc",permalink:"/4.17/ja/docs/development/touchgfx-hal-development/scenarios/scenarios-fmc",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-fmc",title:"FMC & SPI\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9"},sidebar:"docs",previous:{title:"LTDC / \u30d1\u30e9\u30ec\u30ebRGB",permalink:"/4.17/ja/docs/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb"},next:{title:"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u8a2d\u5b9a",permalink:"/4.17/ja/docs/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies"}},k={},T=[{value:"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u8ee2\u9001",id:"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u8ee2\u9001",level:2},{value:"FMC",id:"fmc",level:3},{value:"HAL::flushFrameBuffer()\u304b\u3089\u623b\u308b",id:"returning-from-halflushframebuffer",level:2},{value:"TouchGFX\u30c9\u30e9\u30a4\u30d0 / \u30c6\u30a3\u30a2\u30ea\u30f3\u30b0\u52b9\u679c\u4fe1\u53f7",id:"touchgfx-driver--tearing-effect-signal",level:2},{value:"\u7d50\u8ad6",id:"conclusion",level:2}],C=(F="Caution",function(e){return console.warn("Component "+F+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",d({},e))});var F;const y={toc:T};function b(e){var t,n=e,{components:c}=n,f=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},y),f),l(t,p({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u3053\u306e\u30b7\u30ca\u30ea\u30aa\u306f\u3001FMC\u306b\u63a5\u7d9a\u3055\u308c\u3066\u3044\u308b\u3001\u307e\u305f\u306fSPI\u7d4c\u7531\u3067\u63a5\u7d9a\u3055\u308c\u3066\u3044\u308bLCD\u306b\u30d4\u30af\u30bb\u30eb\u3092\u8ee2\u9001\u3059\u308b\u969b\u306e\u624b\u9806\u306b\u3064\u3044\u3066\u8aac\u660e\u3059\u308b\u3082\u306e\u3067\u3059\u3002\u3053\u306e2\u3064\u306e\u65b9\u6cd5\u306f\u3044\u304f\u3064\u304b\u306e\u8981\u7d20\u3092\u5171\u6709\u3057\u3066\u3044\u307e\u3059\u3002 \u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u8aac\u660e\u3059\u308b\u30b7\u30ca\u30ea\u30aa\u306f\u3001\u4f8b\u3068\u3057\u3066ST7789H2 LCD\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"STM32CubeMX\u3067\u3001\u30dc\u30fc\u30c9\u4ed5\u69d8\u306b\u6cbf\u3063\u305fFMC\u307e\u305f\u306fSPI\u306e\u8a2d\u5b9a\u304c\u5b8c\u4e86\u3059\u308c\u3070\u3001TouchGFX Generator\u3092\u4f7f\u7528\u3057\u3066TouchGFX HAL\u3092\u751f\u6210\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u958b\u767a\u8005\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff65\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u66f4\u65b0\u3055\u308c\u305f\u90e8\u5206\u3092\u63a5\u7d9a\u3055\u308c\u305f\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u8ee2\u9001\u3059\u308b\u30b3\u30fc\u30c9\u3092\u4f5c\u6210\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4e0b\u56f3\u306f\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3068\u3057\u3066Custom\u304c\u9078\u629e\u3055\u308c\u305f\u3001TouchGFX Generator\u306e\u8a2d\u5b9a\u3067\u3059\u3002 \u3053\u306e\u8a2d\u5b9a\u306f\u3001TouchGFX Generator\u306b\u5bfe\u3057\u3066\u3001\u958b\u767a\u8005\u304c",(0,r.kt)("strong",{parentName:"p"},"\u624b\u52d5\u3067"),"\u8a2d\u5b9a\u3057\u3066\u30d4\u30af\u30bb\u30eb\u3092\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\uff65\u30e1\u30e2\u30ea\u304b\u3089\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u8ee2\u9001\u3057\u3088\u3046\u3068\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u77e5\u3089\u305b\u308b\u3068\u3068\u3082\u306b\u3001\u305d\u308c\u3092\u5b9f\u73fe\u3059\u308b\u305f\u3081\u306e\u30cf\u30f3\u30c9\u30e9\u3092\u751f\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/touchgfx-hal-development/scenarios/custom-interface.webp",noShadow:!1,mdxType:"Figure"},"TouchGFX Generator\u306e\u8a2d\u5b9a"),(0,r.kt)(i.Z,{mdxType:"Tip"},"SPI\u7d4c\u7531\u3067\u63a5\u7d9a\u3055\u308c\u3066\u3044\u308b\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u306f\u3001Custom\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3092\u9078\u629e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4e00\u822c\u7684\u306b\u3001GRAM\u3092\u5185\u8535\u3057\u305f\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306e\u5834\u5408\u3001\u751f\u6210\u3055\u308c\u305fTouchGFX HAL\u3067\u30e6\u30fc\u30b6\u304c\u8a18\u8ff0\u3059\u308b\u30b3\u30fc\u30c9\u3067\u306f\u3001\u4ee5\u4e0b\u306e\u624b\u9806\u3092\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u518d\u63cf\u753b\u3055\u308c\u308b\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u9818\u57df\u306b\u57fa\u3065\u3044\u3066\u3001\u3053\u306e\u9818\u57df\u306b\u5bfe\u5fdc\u3059\u308bGRAM\u5185\u306e\u5834\u6240\u306b\u3001\u300c\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30ab\u30fc\u30bd\u30eb\u300d\u304a\u3088\u3073\u300c\u30a2\u30af\u30c6\u30a3\u30d6\uff65\u30a6\u30a3\u30f3\u30c9\u30a6\u300d\u3092\u79fb\u52d5\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9001\u3089\u308c\u3066\u304f\u308b\u30d4\u30af\u30bb\u30eb\uff65\u30c7\u30fc\u30bf\u3092GRAM\u306b\u66f8\u304d\u8fbc\u3080\u6e96\u5099\u3092\u6574\u3048\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u30d4\u30af\u30bb\u30eb\uff65\u30c7\u30fc\u30bf\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002")),(0,r.kt)("h2",d({},{id:"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u8ee2\u9001"}),"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u8ee2\u9001"),(0,r.kt)("p",null,"\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u9818\u57df\u304c\u66f4\u65b0\u3055\u308c\u308b\u3068\u3001TouchGFX\u30a8\u30f3\u30b8\u30f3\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"HAL::flushFrameBuffer(Rect r)"),"\u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002 \u3053\u306e\u95a2\u6570\u306f\u3001SPI\u3084FMC\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306e\u3088\u3046\u306b\u3001\u958b\u767a\u8005\u304c\u30d4\u30af\u30bb\u30eb\u3092\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u8ee2\u9001\u3059\u308b\u305f\u3081\u306e\u30b3\u30fc\u30c9\u3092\u624b\u52d5\u3067\u5b9f\u88c5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3068\u304d\u306b\u306f\u30aa\u30fc\u30d0\u30e9\u30a4\u30c9\u3067\u304d\u307e\u3059\u3002 \u5f8c\u8ff0\u3059\u308b\u3088\u3046\u306b\u3001FMC\u30d0\u30f3\u30af\u7d4c\u7531\u3067\u30d4\u30af\u30bb\u30eb\u3092\u8ee2\u9001\u3059\u308b\u95a2\u6570\u306f\u3001TouchGFX Generator\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(a.Z,{mdxType:"Note"},"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u306b\u793a\u3057\u305fST7789H2\u7528\u306e\u30c9\u30e9\u30a4\u30d0\uff65\u30b3\u30fc\u30c9\u306f\u3001\u30dc\u30fc\u30c9\u306e\u7acb\u3061\u4e0a\u3052\u30d5\u30a7\u30fc\u30ba\u3067\u958b\u767a\u3055\u308c\u305f\u3082\u306e\u3067\u3042\u308a\u3001\u6a5f\u80fd\u3059\u308c\u3070\u3001\u591a\u304b\u308c\u5c11\u306a\u304b\u308cTouchGFX Generator\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u308bHAL\u30af\u30e9\u30b9\u306b\u30b3\u30d4\u30fc\u3067\u304d\u307e\u3059\u3002",(0,r.kt)("p",null,"\u30c9\u30e9\u30a4\u30d0\u306f\u3001\u30d4\u30af\u30bb\u30eb\u3092\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u8ee2\u9001\u3057\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306e\u30e1\u30e2\u30ea\u66f8\u8fbc\u307f\u4f4d\u7f6e\u3092\u5236\u5fa1\u3067\u304d\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306e\u30c7\u30fc\u30bf\u30b7\u30fc\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"void  TouchGFXHAL::flushFrameBuffer(const Rect& rect)\n{\n    /* Set Cursor */\n    ST7789H2_SetDisplayWindow(rect.x, rect.y, rect.width, rect.height);\n\n    /* Prepare to write to LCD RAM */\n    __ST7789H2_WriteReg(ST7789H2_WRITE_RAM, (uint8_t*)NULL, 0);\n\n    /* Send Pixels - User defined function */\n    this->copyFrameBufferBlockToLCD(rect);\n}\n")),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u95a2\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"ST7789H2_SetDisplayWindow"),"\u306f\u3001GRAM\u5185\u306e\u4eee\u60f3\u300c\u30ab\u30fc\u30bd\u30eb\u300d\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"x"),"\u304a\u3088\u3073",(0,r.kt)("inlineCode",{parentName:"p"},"y"),"\u5ea7\u6a19\u3092\u3001\u7279\u5b9a\u306e\u30ec\u30b8\u30b9\u30bf\u306b\u66f8\u304d\u8fbc\u3093\u3067\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u3053\u308c\u306fGRAM\u3092\u4f7f\u7528\u3059\u308b\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u3067\u306f\u4e00\u822c\u7684\u306a\u65b9\u6cd5\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-c"}),'extern "C"\nvoid ST7789H2_SetDisplayWindow(uint16_t Xpos, uint16_t Ypos, uint16_t Width, uint16_t Height)\n{\n    uint8_t   parameter[4];\n\n    /* CASET: Column Address Set */\n    parameter[0] = 0x00;\n    parameter[1] = Xpos;\n    parameter[2] = 0x00;\n    parameter[3] = Xpos + Width - 1;\n    ST7789H2_WriteReg(ST7789H2_CASET, parameter, 4);\n\n    /* RASET: Row Address Set */\n    parameter[0] = 0x00;\n    parameter[1] = Ypos;\n    parameter[2] = 0x00;\n    parameter[3] = Ypos + Height - 1;\n    ST7789H2_WriteReg(ST7789H2_RASET, parameter, 4);\n}\n')),(0,r.kt)("p",null,"\u3053\u306e\u4f8b\u3067\u306f\u3001\u6b21\u306b\u793a\u3059\u95a2\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::copyFrameBufferBlockToLCD"),"\u306f\u3001\u66f4\u65b0\u3055\u308c\u305f\u9818\u57df\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"Rect"),"\uff09\u3092\u4e00\u5ea6\u306b1\u30e9\u30a4\u30f3\u305a\u3064\u9001\u4fe1\u3057\u3001\u305d\u308c\u306b\u5fdc\u3058\u3066\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u30dd\u30a4\u30f3\u30bf\u304c\u9032\u3093\u3067\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u30e6\u30fc\u30b6\u5b9a\u7fa9\u306e\u95a2\u6570\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"void TouchGFXHAL::copyFrameBufferBlockToLCD(const Rect& rect)\n{\n    __IO uint16_t* ptr;\n    uint32_t height;\n\n    // This can be accelerated using regular DMA hardware\n    for (height = 0; height < rect.height ; height++)\n    {\n        ptr = getClientFrameBuffer() + rect.x + (height + rect.y) * HAL::DISPLAY_WIDTH;\n        LCD_IO_WriteMultipleData((uint16_t*)ptr, rect.width);\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ptr")," \u3092\u624b\u52d5\u3067\u9032\u3081\u308b\u306e\u3067\u306f\u306a\u304f\u3001TouchGFX Generator\u304c\u751f\u6210\u3059\u308b\u95a2\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"advanceFrameBufferToRect"),"\u304c\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u5185\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"Rect"),"\u306e\u4f4d\u7f6e\u306b\u5f93\u3063\u3066",(0,r.kt)("inlineCode",{parentName:"p"},"ptr")," \u3092\u9032\u3081\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"inline uint8_t* TouchGFXGeneratedHAL::advanceFrameBufferToRect(uint8_t* fbPtr, const touchgfx::Rect& rect) const\n{\n    //       Advance vertically                   Advance horizontally\n    fbPtr += rect.y * lcd().framebufferStride() + rect.x * 2;\n    return fbPtr;\n}\n")),(0,r.kt)("h3",d({},{id:"fmc"}),"FMC"),(0,r.kt)("p",null,"\u5c11\u306a\u304f\u3068\u30821\u3064\u306eFMC\u30d0\u30f3\u30af\u304c\u6b63\u3057\u304f\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308c\u3070\u3001TouchGFX Generator\u306fFMC\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3082\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002 \u3053\u306e\u5834\u5408\u3001TouchGFX Generator\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u308b\u30b3\u30fc\u30c9\u306fCustom\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306e\u30b3\u30fc\u30c9\u3068\u3088\u304f\u4f3c\u3066\u3044\u307e\u3059\u304c\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u63a5\u7d9a\u3055\u308c\u3066\u3044\u308bFMC\u30d0\u30f3\u30af\u3068\u3084\u308a\u53d6\u308a\u3059\u308b\u305f\u3081\u306b\u3001\u95a2\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"LCD_IO_WriteMultipleData"),"\u304c\u751f\u6210\u3055\u308c\u308b\u70b9\u304c\u7570\u306a\u3063\u3066\u3044\u307e\u3059\u3002 \u95a2\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"copyFrameBufferBlockToLCD"),"\u7528\u306b\u524d\u306b\u63d0\u793a\u3057\u305f\u30b3\u30fc\u30c9\u3092\u3082\u3046\u4e00\u5ea6\u898b\u76f4\u3057\u3066\u307f\u308b\u3068\u3001\u3053\u306e\u751f\u6210\u3055\u308c\u305f\u95a2\u6570\u306e\u4f7f\u7528\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(i.Z,{mdxType:"Tip"},"SPI\u304a\u3088\u3073FMC\u306e\u3069\u3061\u3089\u306e\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3067\u3082\u3001\u958b\u767a\u8005\u306f\u30011\uff09\u30ab\u30fc\u30bd\u30eb\u3092\u8a2d\u5b9a\u3057\u30012\uff09GRAM\u306b\u66f8\u304d\u8fbc\u3080\u6e96\u5099\u3092\u3057\u3066\u30013\uff09\u30ab\u30b9\u30bf\u30e0\u306eSPI\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30c9\u30e9\u30a4\u30d0\u304b\u751f\u6210\u3055\u308c\u305fFMC\u30d0\u30f3\u30af\u95a2\u6570\u306e\u3044\u305a\u308c\u304b\u3092\u7d4c\u7531\u3057\u3066\u30d4\u30af\u30bb\u30eb\u3092\u8ee2\u9001\u3059\u308b\u305f\u3081\u306b\u3001flushFrameBuffer()\u95a2\u6570\u3092\u5909\u66f4\u3057\u307e\u3059\u3002 "),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-c"}),"    __weak void LCD_IO_WriteMultipleData(uint16_t* pData, uint32_t Size)\n    {\n        uint32_t  i;\n\n        for (i = 0; i < Size; i++)\n        {\n            FMC_BANK1_WriteData(pData[i]);\n        }\n    }\n")),(0,r.kt)("p",null,"\u6b21\u306e\u56f3\u306f\u3001FMC\u30d0\u30f3\u30af2\u306e\u6709\u52b9\u306a16\u30d3\u30c3\u30c8\u306e\uff08\u5fc5\u9808\uff09\u8a2d\u5b9a\u3092\u793a\u3057\u3066\u3044\u307e\u3059\uff08\u3069\u3061\u3089\u3082\u4f7f\u7528\u3067\u304d\u307e\u3059\uff09\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/touchgfx-hal-development/scenarios/fmc-bank-configuration.webp",width:"600",noShadow:!1,mdxType:"Figure"},"FMC\u30d0\u30f3\u30af\u306e\u8a2d\u5b9a"),(0,r.kt)("p",null,"\u6709\u52b9\u306a\u8a2d\u5b9a\u304c\u5b8c\u4e86\u3059\u308b\u3068\u3001TouchGFX Generator\u3067\u3053\u306e\u30d0\u30f3\u30af\u3092\u9078\u629e\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002 \u4f7f\u7528\u3059\u308b\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306eFMC\u30d0\u30f3\u30af\uff65\u30ec\u30b8\u30b9\u30bf\u306e\u958b\u59cb\u30a2\u30c9\u30ec\u30b9\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/touchgfx-hal-development/scenarios/fmc-interface-selection.webp",width:"500",noShadow:!1,mdxType:"Figure"},"FMC\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306e\u9078\u629e"),(0,r.kt)("p",null,"TouchGFX Generator\u306fFMC\u30d0\u30f3\u30af\u306e\u8a2d\u5b9a\u3092\u691c\u8a3c\u3057\u3001\u554f\u984c\u304c\u898b\u3064\u304b\u308c\u3070\u305d\u308c\u3092\u5831\u544a\u3057\u307e\u3059\u3002"),(0,r.kt)(o.Z,{imageSource:"/img/development/touchgfx-hal-development/scenarios/fmc-bank-configuration-8bit.webp",noShadow:!1,mdxType:"Figure"},"FMC\u306e\u8a2d\u5b9a\u30a8\u30e9\u30fc"),(0,r.kt)("h2",d({},{id:"returning-from-halflushframebuffer"}),"HAL::flushFrameBuffer()\u304b\u3089\u623b\u308b"),(0,r.kt)("p",null,"\u3053\u306e\u95a2\u6570\u304b\u3089\u623b\u308b\u3068\u3001TouchGFX\u30a8\u30f3\u30b8\u30f3\u306f\u30d5\u30ec\u30fc\u30e0\u306e\u6b8b\u308a\u306e\u90e8\u5206\u306e\u63cf\u753b\u3092\u7d9a\u3051\u307e\u3059\u3002 \u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u3078\u306e\u30d4\u30af\u30bb\u30eb\u306e\u8ee2\u9001\u306bDMA\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u3001\u958b\u767a\u8005\u306fDMA\u5b8c\u4e86\u5272\u8fbc\u307f\u4fe1\u53f7\u306b\u3088\u308b\u30bb\u30de\u30d5\u30a9\u3092\u5f85\u6a5f\u3059\u308b\u306a\u3069\u3057\u3066\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"HAL::flushFrameBuffer(Rect& rect)")," \u3059\u3050\u306b\u623b\u3089\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u6b21\u306e\u64ec\u4f3c\u30b3\u30fc\u30c9\u306f\u3001DMA\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"HAL::flushFrameBuffer()")," \u306e\u69cb\u6210\u4f8b\u3092\u793a\u3057\u305f\u3082\u306e\u3067\u3059\u3002 \u3053\u306e\u30b3\u30fc\u30c9\u306f\u3001FreeRTOS\u306e\u30bb\u30de\u30d5\u30a9",(0,r.kt)("inlineCode",{parentName:"p"},"screen_frame_buffer_sem"),"\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"void TouchGFXHAL::flushFrameBuffer(const touchgfx::Rect& rect)\n{\n    uint16_t* fb = HAL::lockFrameBuffer();\n\n    //Prepare display: Set cursor, write to display gram as described previously in this scenario\n\n    //Try to take a display semaphore - Always free at this point\n    xSemaphoreTake(screen_frame_buffer_sem, portMAX_DELAY);\n\n    //Set up DMA\n    screenDMAEnable();\n\n    // Wait for the DMA transfer to complete\n    xSemaphoreTake(screen_frame_buffer_sem, portMAX_DELAY);\n\n    //Unlock framebuffer and give semaphore back\n    HAL::unlockFrameBuffer();\n    xSemaphoreGive(screen_frame_buffer_sem);\n}\n")),(0,r.kt)(C,{mdxType:"Caution"},"TouchGFX Generator\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u305fFMC\u30b3\u30fc\u30c9\u3067\u306fDMA\u3092\u4f7f\u7528\u3057\u307e\u305b\u3093\u3002"),(0,r.kt)("h2",d({},{id:"touchgfx-driver--tearing-effect-signal"}),"TouchGFX\u30c9\u30e9\u30a4\u30d0 / \u30c6\u30a3\u30a2\u30ea\u30f3\u30b0\u52b9\u679c\u4fe1\u53f7"),(0,r.kt)("p",null,"\u4e0a\u8a18TouchGFX Generator\u306e\u8a2d\u5b9a\u3067\u306f\u3001\uff3bApplication Tick Source\uff3d\u3082\uff3bCustom\uff3d\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u306f\u3001TFT\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3092\u5185\u8535\u3057\u3066\u3044\u306a\u3044\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3067\u306f\u4e00\u822c\u7684\u306a\u8a2d\u5b9a\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u300c\u62bd\u8c61\u5316\u30ec\u30a4\u30e4\uff65\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u300d\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u8ff0\u3079\u305f\u3088\u3046\u306b\u3001TouchGFX\u30a8\u30f3\u30b8\u30f3\u306e\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\u306f\u3001\u901a\u5e38\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u304b\u3089\u4fe1\u53f7\u304c\u9001\u3089\u308c\u305f\u6642\u70b9\u3067\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers::signalVSync()"),"\u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u3067\u30d6\u30ed\u30c3\u30af\u89e3\u9664\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30b7\u30ea\u30a2\u30eb\u307e\u305f\u306f8080\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3092\u5099\u3048\u305f\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306e\u5834\u5408\u3001\u901a\u5e38\u306f\u5185\u8535\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u304c\u30c6\u30a3\u30a2\u30ea\u30f3\u30b0\u52b9\u679c(TE) \u306e\u4fe1\u53f7\u3092\u5468\u671f\u7684\u306b\u751f\u6210\u3057\u307e\u3059\u3002\u3053\u306e\u4fe1\u53f7\u306f\u3001\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306eGPIO\u306b\u63a5\u7d9a\u3067\u304d\u307e\u3059\u3002 \u305d\u306e\u5834\u5408\u3001\u901a\u5e38\u306f\u3001GPIO\u306b\u4fe1\u53f7\u304c\u9001\u3089\u308c\u308b\u3068\u5272\u8fbc\u307f\u304c\u767a\u751f\u3059\u308b\u3088\u3046\u306b\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002 \u3053\u306e\u300c\u30c6\u30a3\u30a2\u30ea\u30f3\u30b0\u52b9\u679c\u300d\u5272\u8fbc\u307f\u306b\u3088\u308a\u3001TouchGFX\u30a8\u30f3\u30b8\u30f3\u306e\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\u306e\u30d6\u30ed\u30c3\u30af\u304c\u89e3\u9664\u3055\u308c\u3001\u6b21\u306e\u30d5\u30ec\u30fc\u30e0\u304c\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u307e\u3059\u3002 STM32CubeMX\u3067\u3001\u5fc5\u305a\u3053\u306eGPIO\u3092\u5165\u529b\u306b\u8a2d\u5b9a\u3057\u3001\u305d\u306e\u30d4\u30f3\u306e\u5916\u90e8\u5272\u8fbc\u307f\u3092\u6709\u52b9\u5316\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),'extern "C"\nvoid TE_Handler(void)\n{\n    ...\n    /* Unblock TouchGFX Engine Main Loop to render next frame */\n    OSWrappers::signalVSync();\n    ...\n}\n\n')),(0,r.kt)("h2",d({},{id:"conclusion"}),"\u7d50\u8ad6"),(0,r.kt)("p",null,"TouchGFX Generator\u3067Custom\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff65\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u304b\u3089\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306b\u30d4\u30af\u30bb\u30eb\u3092\u8ee2\u9001\u3059\u308b\u30b3\u30fc\u30c9\u3092\u3001\u958b\u767a\u8005\u304c\u624b\u52d5\u3067\u4f5c\u6210\u3059\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"TouchGFX Generator\u306f\u3001\u95a2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::flushFrameBuffer(Rect& rect)"),"\u3092\u751f\u6210\u3057\u307e\u3059\u3002\u3053\u306e\u95a2\u6570\u306f\u3001\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u9818\u57df\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u304c\u5b8c\u4e86\u3059\u308b\u3068TouchGFX\u306b\u3088\u3063\u3066\u81ea\u52d5\u7684\u306b\u547c\u3073\u51fa\u3055\u308c\u3001\u958b\u767a\u8005\u306f\u3001\u3053\u308c\u3092\u4f7f\u7528\u3057\u3066\u3001\u5f71\u97ff\u3092\u53d7\u3051\u308b\u30d4\u30af\u30bb\u30eb\u3092\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u3001SPI\u3001FMC\u306a\u3069\u306b\u8ee2\u9001\u3067\u304d\u307e\u3059\u3002 \u3044\u305a\u308c\u306e\u5834\u5408\u3067\u3082\u3001\u4ee5\u4e0b\u306e\u624b\u9806\u3092\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u518d\u63cf\u753b\u3055\u308c\u308b\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306e\u9818\u57df\u306b\u57fa\u3065\u3044\u3066\u3001\u3053\u306e\u9818\u57df\u306b\u5bfe\u5fdc\u3059\u308bGRAM\u5185\u306e\u5834\u6240\u306b\u3001\u300c\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30ab\u30fc\u30bd\u30eb\u300d\u304a\u3088\u3073\u300c\u30a2\u30af\u30c6\u30a3\u30d6\uff65\u30a6\u30a3\u30f3\u30c9\u30a6\u300d\u3092\u79fb\u52d5\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9001\u3089\u308c\u3066\u304f\u308b\u30d4\u30af\u30bb\u30eb\uff65\u30c7\u30fc\u30bf\u3092GRAM\u306b\u66f8\u304d\u8fbc\u3080\u6e96\u5099\u3092\u6574\u3048\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u30d4\u30af\u30bb\u30eb\uff65\u30c7\u30fc\u30bf\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002 FMC\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306e\u5834\u5408\u306f\u3001\u3053\u306e\u95a2\u6570\u304c\u751f\u6210\u3055\u308c\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"flushFrameBuffer(Rect& rect)"),"\u306e\u5185\u90e8\u3067\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff08\u3053\u306e\u8a18\u4e8b\u306e\u524d\u534a\u90e8\u3092\u53c2\u7167\uff09\u3002")),(0,r.kt)("p",null,"\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3068\u3057\u3066Custom\u307e\u305f\u306fFMC\u3092\u9078\u629e\u3059\u308b\u5834\u5408\u3001TouchGFX Engine\u306e\u30e1\u30a4\u30f3\uff65\u30eb\u30fc\u30d7\u306e\u30d6\u30ed\u30c3\u30af\u3092\u89e3\u9664\u3059\u308b",(0,r.kt)("inlineCode",{parentName:"p"},"OSWrappers::signalVSync()"),"\u306e\u4fe1\u53f7\u3092\u751f\u6210\u3059\u308b\u30ab\u30b9\u30bf\u30e0\u306eTouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff65\u30c6\u30a3\u30c3\u30af\uff65\u30c9\u30e9\u30a4\u30d0\u306e\u5b9f\u88c5\u3082\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002 \u901a\u5e38\u3001TFT\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3092\u642d\u8f09\u3057\u3066\u3044\u306a\u3044\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3068\u3068\u3082\u306b\u4f7f\u7528\u3055\u308c\u308b\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306f\u3001\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306b\u63a5\u7d9a\u3055\u308c\u308b\u30c6\u30a3\u30a2\u30ea\u30f3\u30b0\u52b9\u679c\u4fe1\u53f7\u3092\u51fa\u529b\u3067\u304d\u307e\u3059\u3002"))}b.isMDXComponent=!0}}]);