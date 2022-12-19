"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5591],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=d(n),m=l,g=s["".concat(u,".").concat(m)]||s[m]||c[m]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[s]="string"==typeof e?e:l,o[1]=a;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),l=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,o=(0,l.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),l=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(l.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=o},88678:function(e,t,n){var r=n(67294);class l extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=l},65407:function(e,t,n){var r=n(67294),l=n(25026);t.Z=function(e){var t,n;const i=(0,l.Z)(e.url),o=null!=(t=e.width)?t:"100%",a=null!=(n=e.height)?n:"100%";return r.createElement("div",{class:"loop-video"},r.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:o,height:a},r.createElement("source",{src:i,type:"video/mp4"}),"Your browser does not support the video tag."),r.createElement("p",null,e.children))}},82985:function(e,t,n){var r=n(67294);class l extends r.Component{render(){return r.createElement("code",{class:"shortcut"},this.props.children)}}t.Z=l},21235:function(e,t,n){n.r(t),n.d(t,{assets:function(){return w},contentTitle:function(){return f},default:function(){return x},frontMatter:function(){return h},metadata:function(){return y},toc:function(){return C}});var r=n(3905),l=n(39130),i=n(44035),o=n(29415),a=n(82985),u=n(65407),d=Object.defineProperty,p=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&v(e,n,t[n]);if(c)for(var n of c(t))g.call(t,n)&&v(e,n,t[n]);return e};const h={id:"canvas-view",title:"Canvas View\uff08\u30ad\u30e3\u30f3\u30d0\u30b9\uff65\u30d3\u30e5\u30fc\uff09"},f=void 0,y={unversionedId:"development/ui-development/designer-user-guide/canvas-view",id:"development/ui-development/designer-user-guide/canvas-view",title:"Canvas View\uff08\u30ad\u30e3\u30f3\u30d0\u30b9\uff65\u30d3\u30e5\u30fc\uff09",description:"\u30ad\u30e3\u30f3\u30d0\u30b9\u306f\u3001\u5b9f\u884c\u4e2d\u306b\u8868\u793a\u3055\u308c\u308b\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306e\u8996\u899a\u8868\u73fe\u3092\u63d0\u4f9b\u3059\u308b\u3053\u3068\u3067\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30b0\u30e9\u30d5\u30a3\u30ab\u30eb\u90e8\u5206\u306e\u69cb\u7bc9\u306b\u4f7f\u7528\u3055\u308c\u308b\u30d3\u30e5\u30fc\u3067\u3059\u3002 \u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3084\u30b7\u30b9\u30c6\u30e0\u5404\u90e8\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u306a\u3069\u3001\u52d5\u7684\u306a\u8981\u7d20\u3092\u3053\u3053\u3067\u8a18\u8ff0\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/canvas-view.mdx",sourceDirName:"development/ui-development/designer-user-guide",slug:"/development/ui-development/designer-user-guide/canvas-view",permalink:"/4.17/ja/docs/development/ui-development/designer-user-guide/canvas-view",draft:!1,tags:[],version:"current",frontMatter:{id:"canvas-view",title:"Canvas View\uff08\u30ad\u30e3\u30f3\u30d0\u30b9\uff65\u30d3\u30e5\u30fc\uff09"},sidebar:"docs",previous:{title:"Main Window\uff08\u30e1\u30a4\u30f3\uff65\u30a6\u30a3\u30f3\u30c9\u30a6\uff09",permalink:"/4.17/ja/docs/development/ui-development/designer-user-guide/main-window"},next:{title:"Images View\uff08\u753b\u50cf\u30d3\u30e5\u30fc\uff09",permalink:"/4.17/ja/docs/development/ui-development/designer-user-guide/images-view"}},w={},C=[{value:"Left Side Bar\uff08\u5de6\u306e\u30b5\u30a4\u30c9\uff65\u30d0\u30fc\uff09",id:"left-side-bar",level:2},{value:"Screens\u3068Custom Containers",id:"screens--custom-containers",level:3},{value:"Canvas\uff08\u30ad\u30e3\u30f3\u30d0\u30b9\uff09",id:"canvas",level:2},{value:"Widget Menu\uff08\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30e1\u30cb\u30e5\u30fc\uff09",id:"widget-menu",level:3},{value:"Widget Selection\uff08\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u9078\u629e\uff09",id:"widget-selection",level:3},{value:"Widget Positioning\uff08\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u914d\u7f6e\uff09",id:"widget-positioning",level:3},{value:"Widget Order Controls\uff08\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u9806\u5e8f\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\uff09",id:"widget-order-controls",level:3},{value:"Content Clipping Control\uff08\u30b3\u30f3\u30c6\u30f3\u30c4\uff65\u30af\u30ea\u30c3\u30d4\u30f3\u30b0\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\uff09",id:"content-clipping-control",level:3},{value:"History Controls\uff08\u5c65\u6b74\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\uff09",id:"history-controls",level:3},{value:"Zoom Controls\uff08\u30ba\u30fc\u30e0\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\uff09",id:"zoom-controls",level:3},{value:"Right Side Bar\uff08\u53f3\u306e\u30b5\u30a4\u30c9\uff65\u30d0\u30fc\uff09",id:"right-side-bar",level:2},{value:"Properties\uff08\u30d7\u30ed\u30d1\u30c6\u30a3\uff09",id:"properties",level:3},{value:"Interactions\uff08\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\uff09",id:"interactions",level:3}],b={toc:C};function x(e){var t,n=e,{components:d}=n,v=((e,t)=>{var n={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=k(k({},b),v),p(t,s({components:d,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u30ad\u30e3\u30f3\u30d0\u30b9\u306f\u3001\u5b9f\u884c\u4e2d\u306b\u8868\u793a\u3055\u308c\u308b\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306e\u8996\u899a\u8868\u73fe\u3092\u63d0\u4f9b\u3059\u308b\u3053\u3068\u3067\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30b0\u30e9\u30d5\u30a3\u30ab\u30eb\u90e8\u5206\u306e\u69cb\u7bc9\u306b\u4f7f\u7528\u3055\u308c\u308b\u30d3\u30e5\u30fc\u3067\u3059\u3002 \u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u3084\u30b7\u30b9\u30c6\u30e0\u5404\u90e8\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u306a\u3069\u3001\u52d5\u7684\u306a\u8981\u7d20\u3092\u3053\u3053\u3067\u8a18\u8ff0\u3057\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/canvas-view/designer-canvas-view-4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u306eCanvas View"),(0,r.kt)("h2",k({},{id:"left-side-bar"}),"Left Side Bar\uff08\u5de6\u306e\u30b5\u30a4\u30c9\uff65\u30d0\u30fc\uff09"),(0,r.kt)("p",null,"\u5de6\u5074\u306e\u30b5\u30a4\u30c9\uff65\u30d0\u30fc\u306b\u306f\u30bf\u30d6\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u304c\u3042\u308a\u3001",(0,r.kt)("a",k({parentName:"p"},{href:"#screens--custom-containers"}),"Screens\u3068Custom Containers"),"\u306e\u9593\u3092\u79fb\u52d5\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("h3",k({},{id:"screens--custom-containers"}),"Screens\u3068Custom Containers"),(0,r.kt)("p",null,"Screens\u30bf\u30d6\u3068Custom Containers\u30bf\u30d6\u306e\u3069\u3061\u3089\u306b\u3082\u3001\u5404\u30b9\u30af\u30ea\u30fc\u30f3\u304a\u3088\u3073\u5404\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u306b\u3042\u308b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u6982\u8981\u3092\u793a\u3059\u30c4\u30ea\u30fc\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u4ed6\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u542b\u3080\u3053\u3068\u304c\u3067\u304d\u308b\u3001\u30c4\u30ea\u30fc\u5185\u306e\u3059\u3079\u3066\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u540d\u306e\u6a2a\u306e\u30b7\u30a7\u30d6\u30ed\u30f3\uff08\u5c71\u5f62\u306e\u77e2\u5370\uff09\u3092\u62bc\u3059\u3068\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u6298\u308a\u305f\u305f\u3080\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30b9\u30af\u30ea\u30fc\u30f3\u3001\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u3001\u305d\u306e\u4e2d\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u9806\u5e8f\u306f\u3001\u4ed6\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u3001\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u4e0a\u307e\u305f\u306f\u4e0b\u306b\u305d\u308c\u3092\u30c9\u30e9\u30c3\u30b0\u3059\u308b\u3053\u3068\u3067\u5909\u66f4\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u306f\u3001",(0,r.kt)("a",k({parentName:"p"},{href:"#widget-order-controls"}),"widget order controls"),"\u3092\u4f7f\u7528\u3057\u3066\u9806\u5e8f\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u9806\u5e8f\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u3067\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u9806\u5e8f\u304c\u6c7a\u307e\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30b3\u30f3\u30c6\u30ca\uff65\u30bf\u30a4\u30d7\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306b\u306f\u5b50\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002\u5b50\u3092\u8ffd\u52a0\u3059\u308b\u306b\u306f\u3001\u30c4\u30ea\u30fc\u8868\u793a\u5185\u3067\u305d\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u4e0a\u306b\u5225\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30c9\u30e9\u30c3\u30b0\u3057\u307e\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30c9\u30e9\u30c3\u30b0\u3057\u3066\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u9593\u3067\u79fb\u52d5\u3055\u305b\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u8907\u6570\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u9078\u629e\u3059\u308b\u306b\u306f\u3001Ctrl\u30ad\u30fc\u3092\u62bc\u3057\u306a\u304c\u3089\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,'Screens / Custom Containers\u306f\u3001"+"\u30dc\u30bf\u30f3\u3092\u62bc\u3059\u3053\u3068\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002 Custom Containers\u306f\u3001',(0,r.kt)("a",k({parentName:"p"},{href:"#widget-menu"}),"Widget Menu"),"\u304b\u3089\u30b9\u30af\u30ea\u30fc\u30f3\u3084\u4ed6\u306e\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u306b\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u30b3\u30f3\u30c6\u30ca\u306f'Custom Containers'\u3068\u3044\u3046\u540d\u524d\u306e\u72ec\u81ea\u306e\u30ab\u30c6\u30b4\u30ea\u3067\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"Screens\u3001Custom Containers\u3001Widgets\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u53f3\u30af\u30ea\u30c3\u30af\uff65\u30e1\u30cb\u30e5\u30fc\u3082\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u540d\u524d\u306e\u5909\u66f4"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"F2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u524a\u9664"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Del"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u30b3\u30d4\u30fc"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Ctrl + C"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u8cbc\u308a\u4ed8\u3051"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Ctrl + V"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u4e0a\u3078\u79fb\u52d5"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Ctrl + F"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u4e0b\u3078\u79fb\u52d5"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Ctrl + B"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u30bd\u30fc\u30b9\uff65\u30d5\u30a1\u30a4\u30eb\u306e\u7de8\u96c6*"),(0,r.kt)("td",k({parentName:"tr"},{align:null}))))),(0,r.kt)("p",null," ","*","\u30b9\u30af\u30ea\u30fc\u30f3\u3068\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u306e\u307f\u3067\u4f7f\u7528\u53ef\u80fd"),(0,r.kt)(u.Z,{width:"40%",height:"40%",url:"/videos/development/ui-development/designer-user-guide/canvas-view/designer-canvas-view-tree.mp4",mdxType:"LoopVideo"},"\u5de6\u306e\u30b5\u30a4\u30c9\uff65\u30d0\u30fc\u306eScreens\u306e\u30c4\u30ea\u30fc"),(0,r.kt)("h2",k({},{id:"canvas"}),"Canvas\uff08\u30ad\u30e3\u30f3\u30d0\u30b9\uff09"),(0,r.kt)("p",null,"\u30d3\u30e5\u30fc\u306e\u4e0a\u90e8\u306b\u306f",(0,r.kt)("a",k({parentName:"p"},{href:"#widget-menu"}),"Widget Menu"),"\u304c\u3042\u308a\u3001\u3053\u3053\u306b\u4f7f\u7528\u53ef\u80fd\u306a\u3059\u3079\u3066\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30d3\u30e5\u30fc\u306e\u4e2d\u592e\u306b\u306f\u30ad\u30e3\u30f3\u30d0\u30b9\u304c\u3042\u308a\u3001\u73fe\u5728\u9078\u629e\u4e2d\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u307e\u305f\u306f\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u306e\u30d3\u30e5\u30fc\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30d3\u30e5\u30fc\u306e\u4e0b\u90e8\u306b\u306f\u3001",(0,r.kt)("a",k({parentName:"p"},{href:"#zoom-controls"}),"Zoom Controls"),"\u3084",(0,r.kt)("a",k({parentName:"p"},{href:"#content-clipping-control"}),"Content Clipping Control"),"\u306a\u3069\u3001\u3055\u307e\u3056\u307e\u306a\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(u.Z,{url:"/videos/development/ui-development/designer-user-guide/canvas-view/designer-canvas-view.mp4",mdxType:"LoopVideo"},"Canvas View\u306e\u4e2d\u306eCanvas"),(0,r.kt)("h3",k({},{id:"widget-menu"}),"Widget Menu\uff08\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30e1\u30cb\u30e5\u30fc\uff09"),(0,r.kt)("p",null,"Widget Menu\u306e\u4e2d\u306eAll widget group\u30bf\u30d6\u3001\u307e\u305f\u306f\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\u306e ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"A")," \u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u4f7f\u7528\u53ef\u80fd\u306a\u3059\u3079\u3066\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u30ab\u30c6\u30b4\u30ea\u5206\u985e\u3055\u308c\u305f\u30ea\u30b9\u30c8\u304c\u958b\u304d\u307e\u3059\u3002 \u7279\u5b9a\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7\u306e\u30bf\u30d6\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u305d\u306e\u30ab\u30c6\u30b4\u30ea\u5185\u306e\u4f7f\u7528\u53ef\u80fd\u306a\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30ea\u30b9\u30c8\u304c\u958b\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u73fe\u5728\u9078\u629e\u3055\u308c\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u30b9\u30af\u30ea\u30fc\u30f3\u307e\u305f\u306f\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u306e\u30ad\u30e3\u30f3\u30d0\u30b9\u306b\u305d\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,'All widget group\u306b\u306f\u691c\u7d22\u30d5\u30a3\u30fc\u30eb\u30c9\u3082\u3042\u308a\u3001\u3053\u3053\u3067\u306f\u30d5\u30a1\u30b8\u30fc\u691c\u7d22\u3092\u5229\u7528\u3057\u3066\u3001\u691c\u7d22\u5165\u529b\u306b\u6700\u3082\u9069\u5408\u3059\u308b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u6700\u9069\u306a\u7d50\u679c\u304c\u30cf\u30a4\u30e9\u30a4\u30c8\u8868\u793a\u3055\u308c\u307e\u3059\u3002 \u30d5\u30a1\u30b8\u30fc\u691c\u7d22\u306a\u306e\u3067\u3001\u305f\u3068\u3048\u3070"bwl"\u3068\u5165\u529b\u3057\u3066"Button With Label"\u3092\u898b\u3064\u3051\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u7565\u8a9e\u30821\u3064\u306e\u30d5\u30a1\u30af\u30bf\u30fc\u3060\u304b\u3089\u3067\u3059\u3002 \u691c\u7d22\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u4f55\u304b\u5165\u529b\u3057\u305f\u5f8c\u3001 ',(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Enter")," \u30ad\u30fc\u3092\u62bc\u3059\u3068\u3001\u30cf\u30a4\u30e9\u30a4\u30c8\u3055\u308c\u305f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u30ad\u30e3\u30f3\u30d0\u30b9\u306b\u633f\u5165\u3055\u308c\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30e1\u30cb\u30e5\u30fc\u304c\u9589\u3058\u307e\u3059\u3002"),(0,r.kt)(u.Z,{url:"/videos/development/ui-development/designer-user-guide/canvas-view/widget-menu.mp4",mdxType:"LoopVideo"},"Canvas view\u306eWidget Menu"),(0,r.kt)("h3",k({},{id:"widget-selection"}),"Widget Selection\uff08\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u9078\u629e\uff09"),(0,r.kt)("p",null,"\u4e0a\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306b\u793a\u3059\u3088\u3046\u306b\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306f\u5358\u7d14\u306b\u30ad\u30e3\u30f3\u30d0\u30b9\u4e0a\u3067\u30af\u30ea\u30c3\u30af\u3059\u308b\u3060\u3051\u3067\u9078\u629e\u3067\u304d\u307e\u3059\u3002 \u8907\u6570\u9078\u629e\u3082\u53ef\u80fd\u3067\u3001\u30ad\u30fc\u30dc\u30fc\u30c9\u4e0a\u3067 ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Ctrl")," \u30ad\u30fc\u3092\u62bc\u3057\u306a\u304c\u3089\u8907\u6570\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",k({},{id:"widget-positioning"}),"Widget Positioning\uff08\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u914d\u7f6e\uff09"),(0,r.kt)("p",null,"\u4e0a\u306e\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306b\u793a\u3059\u3088\u3046\u306b\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306fThumb\u3092\u30c9\u30e9\u30c3\u30b0\u3059\u308b\u3053\u3068\u3067\u79fb\u52d5\u3084\u30b5\u30a4\u30ba\u5909\u66f4\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u77e2\u5370\u30ad\u30fc\u3092\u4f7f\u7528\u3057\u3066\u3001\u9078\u629e\u3057\u305f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u30921\u30d4\u30af\u30bb\u30eb\u3060\u3051\u79fb\u52d5\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 Ctrl\u30ad\u30fc\u3092 ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"\u62bc\u3057\u306a\u304c\u3089")," \u77e2\u5370\u30ad\u30fc\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u9078\u629e\u3057\u305f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c10\u30d4\u30af\u30bb\u30eb\u79fb\u52d5\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",k({},{id:"widget-order-controls"}),"Widget Order Controls\uff08\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u9806\u5e8f\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\uff09"),(0,r.kt)("p",null,"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306ez-\u30aa\u30fc\u30c0\u30fc\u306f\u3001Bring Forward\u304a\u3088\u3073Send Backwards\u306e\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\u306b\u3088\u3063\u3066\u64cd\u4f5c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u3063\u3066Screens\u307e\u305f\u306fCustom Containers\u30c4\u30ea\u30fc\u5185\u306e\u9806\u5e8f\u3082\u5909\u66f4\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"Bring Forward\u306f ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Ctrl + F"),"\u3092\u62bc\u3059\u3053\u3068\u3067\u30c8\u30ea\u30ac\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"Send Backward\u306f ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Ctrl + B"),"\u3092\u62bc\u3059\u3053\u3068\u3067\u30c8\u30ea\u30ac\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("h3",k({},{id:"content-clipping-control"}),"Content Clipping Control\uff08\u30b3\u30f3\u30c6\u30f3\u30c4\uff65\u30af\u30ea\u30c3\u30d4\u30f3\u30b0\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\uff09"),(0,r.kt)("p",null,"\u30ad\u30e3\u30f3\u30d0\u30b9\u3067\u306f\u3001Screen\u3001Custom Container\u3001\u304a\u3088\u3073\u30b3\u30f3\u30c6\u30ca\uff65\u30bf\u30a4\u30d7\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5b50\u306e\u5883\u754c\u5916\u306b\u3042\u308b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u30af\u30ea\u30c3\u30d4\u30f3\u30b0\u3055\u308c\u307e\u3059\u3002 \u30b3\u30f3\u30c6\u30f3\u30c4\uff65\u30af\u30ea\u30c3\u30d4\u30f3\u30b0\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u306b\u3088\u308a\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u5b8c\u5168\u306b\u30af\u30ea\u30c3\u30d4\u30f3\u30b0\u3059\u308b\u306e\u304b\u3001\u90e8\u5206\u7684\u306b\u8868\u793a\u3059\u308b\u306e\u304b\u3092\u5207\u308a\u66ff\u3048\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/canvas-view/content-clipping-toggle-button-4.17.webp",mdxType:"Figure"},"Canvas View\u3067\u306e\u30af\u30ea\u30c3\u30d4\u30f3\u30b0\u3055\u308c\u305f\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u8868\u793a / \u975e\u8868\u793a\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb"),(0,r.kt)("p",null,"\u4e0b\u306e\u753b\u50cf\u3067\u306f\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u5883\u754c\u304b\u3089\u534a\u5206\u306f\u307f\u51fa\u305f\u72b6\u614b\u3067\u30dc\u30c3\u30af\u30b9\u304c\u914d\u7f6e\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u30b3\u30f3\u30c6\u30f3\u30c4\uff65\u30af\u30ea\u30c3\u30d4\u30f3\u30b0\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3067\u3001\u30af\u30ea\u30c3\u30d4\u30f3\u30b0\u3055\u308c\u305f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u8868\u793a\u3059\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3059\u308b\u3068\u3001\u30dc\u30c3\u30af\u30b9\u306f\u5b8c\u5168\u306b\u306f\u8868\u793a\u3055\u308c\u307e\u305b\u3093\u304c\u3001\u5883\u754c\u5916\u306b\u3042\u308b\u90e8\u5206\u306f\u4f4e\u3044\u5f69\u5ea6\u3067\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/canvas-view/clipped-content-4.17.webp",mdxType:"Figure"},"\u30af\u30ea\u30c3\u30d4\u30f3\u30b0\u3055\u308c\u305f\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u8868\u793a / \u975e\u8868\u793a\u306b\u3057\u305f\u5834\u5408\u306e\u3001\u30dc\u30c3\u30af\u30b9\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u8868\u793a\u306e\u9055\u3044"),(0,r.kt)("h3",k({},{id:"history-controls"}),"History Controls\uff08\u5c65\u6b74\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\uff09"),(0,r.kt)("p",null,"\u30ad\u30e3\u30f3\u30d0\u30b9\u4e0a\u3067\u5b9f\u884c\u3055\u308c\u305f\u5909\u66f4\u306e\u5c65\u6b74\u306f\u3001",(0,r.kt)("a",k({parentName:"p"},{href:"file-menu"}),"File Menu"),"\u306e",(0,r.kt)("a",k({parentName:"p"},{href:"file-menu#edit"}),"Edit"),"\u3067\u3001\u5143\u306b\u623b\u3057\u305f\u308a\u3084\u308a\u76f4\u3057\u305f\u308a\u3067\u304d\u307e\u3059\u3002",(0,r.kt)("br",null),"\u30b9\u30af\u30ea\u30fc\u30f3\u304a\u3088\u3073\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u3054\u3068\u306b\u3001\u305d\u308c\u305e\u308c\u72ec\u81ea\u306e\u5c65\u6b74\u304c\u7dad\u6301\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u3001\u7279\u5b9a\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u4e0a\u3067\u5b9f\u884c\u3055\u308c\u305f\u5909\u66f4\u3092\u5143\u306b\u623b\u3057\u305f\u308a\u3084\u308a\u76f4\u3057\u305f\u308a\u3059\u308b\u306b\u306f\u3001\u305d\u306e\u5f53\u8a72\u30b9\u30af\u30ea\u30fc\u30f3\u3092\u30ad\u30e3\u30f3\u30d0\u30b9\u4e0a\u306b\u8868\u793a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u5c65\u6b74\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u306f\u3001 ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Ctrl + Z")," \u304a\u3088\u3073 ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Ctrl + Y"),"\u3092\u62bc\u3059\u3053\u3068\u3067\u30c8\u30ea\u30ac\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("h3",k({},{id:"zoom-controls"}),"Zoom Controls\uff08\u30ba\u30fc\u30e0\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\uff09"),(0,r.kt)("p",null,"\u30ad\u30e3\u30f3\u30d0\u30b9\u306e\u30ba\u30fc\u30e0\uff65\u30ec\u30d9\u30eb\u306f\u3001\u30ad\u30e3\u30f3\u30d0\u30b9\u4e0b\u90e8\u306e\u30ba\u30fc\u30e0\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3067\u5236\u5fa1\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30ad\u30e3\u30f3\u30d0\u30b9\u3092\u4e2d\u592e\u306b\u914d\u7f6e\u3057\u3066100%\u306e\u30ba\u30fc\u30e0\u500d\u7387\u306b\u623b\u3059\u306b\u306f\u3001Reset Canvas\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/canvas-view/zoom-controls-4.17.webp",mdxType:"Figure"},"Canvas View\u3067\u306e\u30ba\u30fc\u30e0\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb"),(0,r.kt)("p",null,"\u30ba\u30fc\u30e0\u64cd\u4f5c\u306f\u4ee5\u4e0b\u306e\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u5b9f\u884c\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("table",{"spaces-before":"0"},(0,r.kt)("tr",null,(0,r.kt)("th",null),(0,r.kt)("th",null),(0,r.kt)("th",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"25%\u30ba\u30fc\u30e0"),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Ctrl + 1")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Ctrl + \u30c6\u30f3\u30ad\u30fc1"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"50%\u30ba\u30fc\u30e0"),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Ctrl + 2")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Ctrl + \u30c6\u30f3\u30ad\u30fc2"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"75%\u30ba\u30fc\u30e0"),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Ctrl + 3")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Ctrl + \u30c6\u30f3\u30ad\u30fc3"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"100%\u30ba\u30fc\u30e0"),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Ctrl + 4")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Ctrl + \u30c6\u30f3\u30ad\u30fc4"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u62e1\u5927"),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Ctrl + \u30de\u30a6\u30b9\uff65\u30db\u30a4\u30fc\u30eb\u3092\u4e0a\u3078")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Ctrl + '+'"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u7e2e\u5c0f"),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Ctrl + \u30de\u30a6\u30b9\uff65\u30db\u30a4\u30fc\u30eb\u3092\u4e0b\u3078")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Ctrl + '-'"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u30ba\u30fc\u30e0\u306e\u30ea\u30bb\u30c3\u30c8"),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Ctrl + 0")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Ctrl + \u30c6\u30f3\u30ad\u30fc0")))),(0,r.kt)("h2",k({},{id:"right-side-bar"}),"Right Side Bar\uff08\u53f3\u306e\u30b5\u30a4\u30c9\uff65\u30d0\u30fc\uff09"),(0,r.kt)("p",null,"\u53f3\u5074\u306e\u30b5\u30a4\u30c9\uff65\u30d0\u30fc\u306b\u306f\u30bf\u30d6\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u304c\u3042\u308a\u3001\u73fe\u5728\u9078\u629e\u3055\u308c\u3066\u3044\u308b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e",(0,r.kt)("a",k({parentName:"p"},{href:"#properties"}),"Properties"),"\u3084\u3001\u30ad\u30e3\u30f3\u30d0\u30b9\u306b\u73fe\u5728\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u30b9\u30af\u30ea\u30fc\u30f3\u307e\u305f\u306f\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u306e",(0,r.kt)("a",k({parentName:"p"},{href:"#interactions"}),"Interactions"),"\u306b\u79fb\u52d5\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("h3",k({},{id:"properties"}),"Properties\uff08\u30d7\u30ed\u30d1\u30c6\u30a3\uff09"),(0,r.kt)("p",null,"Properties\u30bf\u30d6\u306b\u306f\u3001\u73fe\u5728\u9078\u629e\u3055\u308c\u3066\u3044\u308bWidget / Screen / Custom Container\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002 \u9078\u629e\u3055\u308c\u3066\u3044\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u540d\u524d\u304c\u30d7\u30ed\u30d1\u30c6\u30a3\uff65\u30ea\u30b9\u30c8\u306e\u4e0a\u90e8\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002 \u305d\u306e\u540d\u524d\u306e\u5de6\u5074\u306b\u3042\u308b\u30a2\u30a4\u30b3\u30f3\u306e\u4e0a\u306b\u30ab\u30fc\u30bd\u30eb\u3092\u5408\u308f\u305b\u308b\u3068\u3001\u8aac\u660e\u30c6\u30ad\u30b9\u30c8\u304c\u8868\u793a\u3055\u308c\u3001\u30a2\u30a4\u30b3\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u30ea\u30f3\u30af\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/canvas-view/properties-tab-4.17.webp",mdxType:"Figure"},"\u30dc\u30c3\u30af\u30b9\u306e\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,r.kt)("h3",k({},{id:"interactions"}),"Interactions\uff08\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\uff09"),(0,r.kt)("p",null,"Interactions\u30bf\u30d6\u306b\u306f\u3001\u30ad\u30e3\u30f3\u30d0\u30b9\u306b\u73fe\u5728\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u30b9\u30af\u30ea\u30fc\u30f3\u307e\u305f\u306f\u30ab\u30b9\u30bf\u30e0\uff65\u30b3\u30f3\u30c6\u30ca\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,'\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3092\u8ffd\u52a0\u3059\u308b\u306b\u306f\u3001"+"\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u307e\u3059\u3002'),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/canvas-view/interactions-tab-4.17.webp",mdxType:"Figure"},"Interactions\u306e\u8ffd\u52a0"),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(l.Z,{to:"interactions-view",mdxType:"Link"},"Interactions"))))}x.isMDXComponent=!0}}]);