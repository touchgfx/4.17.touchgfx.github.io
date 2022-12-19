"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3424],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),o=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,a=e.height,i=(0,o.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:a,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:a,src:i})),n.createElement("p",null,e.children))}},68745:function(e,t,r){r.r(t),r.d(t,{assets:function(){return w},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return f},metadata:function(){return h},toc:function(){return v}});var n=r(3905),o=r(44035),a=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&d(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&d(e,r,t[r]);return e};const f={id:"hardware-selection-introduction",title:"\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u9078\u629e\u306e\u6982\u8981"},m=void 0,h={unversionedId:"development/hardware-selection/hardware-selection-introduction",id:"development/hardware-selection/hardware-selection-introduction",title:"\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u9078\u629e\u306e\u6982\u8981",description:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u696d",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/hardware-selection/hardware-selection-introduction.mdx",sourceDirName:"development/hardware-selection",slug:"/development/hardware-selection/hardware-selection-introduction",permalink:"/4.17/ja/docs/development/hardware-selection/hardware-selection-introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"hardware-selection-introduction",title:"\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u9078\u629e\u306e\u6982\u8981"},sidebar:"docs",previous:{title:"\u958b\u767a\u306e\u6982\u8981",permalink:"/4.17/ja/docs/development/development-introduction"},next:{title:"\u4e88\u5099\u8003\u5bdf",permalink:"/4.17/ja/docs/development/hardware-selection/preliminary-considerations"}},w={},v=[],y={toc:v};function b(e){var t,r=e,{components:a}=r,d=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},y),d),i(t,c({components:a,mdxType:"MDXLayout"}))),(0,n.kt)(o.Z,{imageSource:"/img/development/hardware-selection/activities-selected-000.webp",noShadow:!0,width:"600",mdxType:"Figure"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u696d"),(0,n.kt)(o.Z,{imageSource:"/img/development/hardware-selection/components-selected-000.webp",noShadow:!0,width:"600",mdxType:"Figure"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\uff65\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"),(0,n.kt)("p",null,"\u30b0\u30e9\u30d5\u30a3\u30ab\u30eb\uff65\u30e6\u30fc\u30b6\uff65\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306e\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3092\u9078\u629e\u3059\u308b\u5834\u5408\u306b\u306f\u3001\u591a\u304f\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u8003\u616e\u3057\u3001\u8a55\u4fa1\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001\u30de\u30a4\u30af\u30ed\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u3001\u5916\u90e8\u30e1\u30e2\u30ea\u3001UI\u306e\u6027\u80fd\u306a\u3069\u306b\u95a2\u3059\u308b\u8003\u616e\u3059\u308b\u3079\u304d\u4e8b\u9805\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u9078\u629e\u306e\u524d\u306b\u4e88\u5099\u8003\u5bdf\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u8aad\u3080\u3053\u3068\u3092\u304a\u3059\u3059\u3081\u3057\u307e\u3059\u3002\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u306e\u9078\u629e\u306b\u5f71\u97ff\u3059\u308b\u3044\u304f\u3064\u304b\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3084\u6c7a\u5b9a\u4e8b\u9805\u304c\u8a18\u8f09\u3055\u308c\u3066\u304a\u308a\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"preliminary-considerations"}),"\u4e88\u5099\u8003\u5bdf")," - \u9069\u5207\u306a\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u3092\u9078\u5b9a\u3059\u308b\u4f5c\u696d\u306b\u5165\u308b\u524d\u306b\u8003\u616e\u3059\u3079\u304d\u3044\u304f\u3064\u304b\u306e\u6307\u91dd\u3068\u6ce8\u610f\u4e8b\u9805\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"hardware-components/hardware-selection-mcu"}),"\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8")," - \u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\uff65\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u69cb\u6210\u3059\u308b\u3055\u307e\u3056\u307e\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u95a2\u3059\u308b\u60c5\u5831\u3068\u3001\u305d\u308c\u3089\u304cTouchGFX\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u53ca\u307c\u3059\u5f71\u97ff\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002")))}b.isMDXComponent=!0}}]);