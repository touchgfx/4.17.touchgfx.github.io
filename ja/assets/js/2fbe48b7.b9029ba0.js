"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1905],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},22425:function(e,t,r){var n=r(67294);class a extends n.Component{render(){return n.createElement("div",{class:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,r){var n=r(67294),a=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,o=e.height,l=(0,a.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:o,src:l})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:o,src:l})),n.createElement("p",null,e.children))}},46749:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return k},default:function(){return h},frontMatter:function(){return g},metadata:function(){return b},toc:function(){return v}});var n=r(3905),a=r(44035),o=r(22425),l=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&d(e,r,t[r]);if(p)for(var r of p(t))c.call(t,r)&&d(e,r,t[r]);return e};const g={id:"box-progress",title:"Box Progress\uff08\u30dc\u30c3\u30af\u30b9\uff65\u30d7\u30ed\u30b0\u30ec\u30b9\uff09"},k=void 0,b={unversionedId:"development/ui-development/ui-components/progress-indicators/box-progress",id:"development/ui-development/ui-components/progress-indicators/box-progress",title:"Box Progress\uff08\u30dc\u30c3\u30af\u30b9\uff65\u30d7\u30ed\u30b0\u30ec\u30b9\uff09",description:"Box Progress\u306f\u3001\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9Image\uff08\u753b\u50cf\uff09\u4e0a\u3067\u30b7\u30f3\u30d7\u30eb\u306aBox\uff08\u30dc\u30c3\u30af\u30b9\uff09\u3092\u9032\u6357\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u3068\u3057\u3066\u4f7f\u7528\u3057\u3066\u3001\u73fe\u5728\u306e\u9032\u6357\u72b6\u6cc1\u3092\u793a\u3057\u307e\u3059\u3002 \u30dc\u30c3\u30af\u30b9\u306e\u8272\u3001\u30a2\u30eb\u30d5\u30a1\u5024\u3001\u30dc\u30c3\u30af\u30b9\u304c\u9032\u3080\u65b9\u5411\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002 \u30ab\u30b9\u30bf\u30e0\uff65\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u753b\u50cf\u3092\u4f5c\u6210\u3057\u3001\u305d\u308c\u306b\u5408\u3046\u3088\u3046\u306b\u3001\u9032\u6357\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u306e\u3055\u307e\u3056\u307e\u306a\u30d1\u30e9\u30e1\u30fc\u30bf\uff08\u4f4d\u7f6e\u3084\u30b5\u30a4\u30ba\u306a\u3069\uff09\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/progress-indicators/box-progress.mdx",sourceDirName:"development/ui-development/ui-components/progress-indicators",slug:"/development/ui-development/ui-components/progress-indicators/box-progress",permalink:"/4.17/ja/docs/development/ui-development/ui-components/progress-indicators/box-progress",draft:!1,tags:[],version:"current",frontMatter:{id:"box-progress",title:"Box Progress\uff08\u30dc\u30c3\u30af\u30b9\uff65\u30d7\u30ed\u30b0\u30ec\u30b9\uff09"},sidebar:"docs",previous:{title:"Slide Menu\uff08\u30b9\u30e9\u30a4\u30c9\uff65\u30e1\u30cb\u30e5\u30fc\uff09",permalink:"/4.17/ja/docs/development/ui-development/ui-components/containers/slide-menu"},next:{title:"Image Progress\uff08\u753b\u50cf\u30d7\u30ed\u30b0\u30ec\u30b9\uff09",permalink:"/4.17/ja/docs/development/ui-development/ui-components/progress-indicators/image-progress"}},f={},v=[{value:"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7",id:"widget-group",level:2},{value:"\u30d7\u30ed\u30d1\u30c6\u30a3",id:"properties",level:2},{value:"\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3",id:"interactions",level:2},{value:"\u30a2\u30af\u30b7\u30e7\u30f3",id:"actions",level:3},{value:"\u30c8\u30ea\u30ac",id:"triggers",level:3},{value:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9",id:"performance",level:2},{value:"\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9",id:"generated-code",level:3},{value:"\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9",id:"user-code",level:3}],N={toc:v};function h(e){var t,r=e,{components:l}=r,d=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},N),d),i(t,s({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Box Progress\u306f\u3001\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9",(0,n.kt)("a",m({parentName:"p"},{href:"../images/image"}),"Image\uff08\u753b\u50cf\uff09"),"\u4e0a\u3067\u30b7\u30f3\u30d7\u30eb\u306a",(0,n.kt)("a",m({parentName:"p"},{href:"../shapes/box"}),"Box\uff08\u30dc\u30c3\u30af\u30b9\uff09"),"\u3092\u9032\u6357\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u3068\u3057\u3066\u4f7f\u7528\u3057\u3066\u3001\u73fe\u5728\u306e\u9032\u6357\u72b6\u6cc1\u3092\u793a\u3057\u307e\u3059\u3002 \u30dc\u30c3\u30af\u30b9\u306e\u8272\u3001\u30a2\u30eb\u30d5\u30a1\u5024\u3001\u30dc\u30c3\u30af\u30b9\u304c\u9032\u3080\u65b9\u5411\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002 \u30ab\u30b9\u30bf\u30e0\uff65\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u753b\u50cf\u3092\u4f5c\u6210\u3057\u3001\u305d\u308c\u306b\u5408\u3046\u3088\u3046\u306b\u3001\u9032\u6357\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u306e\u3055\u307e\u3056\u307e\u306a\u30d1\u30e9\u30e1\u30fc\u30bf\uff08\u4f4d\u7f6e\u3084\u30b5\u30a4\u30ba\u306a\u3069\uff09\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/box-progress/widget-appearance.webp",mdxType:"Figure"},"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3067\u5b9f\u884c\u3055\u308c\u308bBox Progress"),(0,n.kt)("h2",m({},{id:"widget-group"}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7"),(0,n.kt)("p",null,"Box Progress\u306f\u3001TouchGFX Designer\u306eProgress Indicators\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7\u5185\u306b\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/box-progress/widget-group-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u306eBox Progress"),(0,n.kt)("h2",m({},{id:"properties"}),"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,n.kt)("p",null,"TouchGFX Designer\u306eBox Progress\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u30d7\u30ed\u30d1\u30c6\u30a3\uff65\u30b0\u30eb\u30fc\u30d7")),(0,n.kt)("th",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u8aac\u660e")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Name")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u540d\u524d\u3002 Name\u306f\u3001TouchGFX Designer\u304a\u3088\u3073\u30b3\u30fc\u30c9\u3067\u4f7f\u7528\u3055\u308c\u308b\u4e00\u610f\u306e\u8b58\u5225\u5b50\u3067\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Location")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"X\u304a\u3088\u3073Y\u306f\u3001\u89aa\u3092\u57fa\u6e96\u3068\u3057\u3066\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5de6\u4e0a\u9685\u306e\u4f4d\u7f6e\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"W\u304a\u3088\u3073H\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5e45\u3068\u9ad8\u3055\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),"Box Progress\u306e\u30b5\u30a4\u30ba\u306f\u3001\u9078\u629e\u3057\u305f\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u753b\u50cf\u306e\u30b5\u30a4\u30ba\u306b\u3088\u3063\u3066\u6c7a\u307e\u308a\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"Lock\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u73fe\u5728\u306eX\u3001Y\u3001W\u3001H\u3067\u30ed\u30c3\u30af\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30ed\u30c3\u30af\u3059\u308b\u3068\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u3092\u901a\u3057\u305f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3082\u7121\u52b9\u306b\u306a\u308a\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"Visible\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u53ef\u8996\u6027\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 ",(0,n.kt)("br",null),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u975e\u8868\u793a\u306b\u3059\u308b\u3068\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u3092\u901a\u3057\u305f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3082\u7121\u52b9\u306b\u306a\u308a\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Style")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Style\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u4e8b\u524d\u5b9a\u7fa9\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u9078\u629e\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u4e8b\u524d\u5b9a\u7fa9\u3055\u308c\u305f\u5024\u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002",(0,n.kt)("br",null),"\u3053\u308c\u3089\u306e\u30b9\u30bf\u30a4\u30eb\u306b\u306f\u3001\u81ea\u7531\u306b\u4f7f\u7528\u3067\u304d\u308b\u753b\u50cf\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Image & Color")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Background\u306f\u3001\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u753b\u50cf\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"Progress\u306f\u3001\u9032\u6357\u30dc\u30c3\u30af\u30b9\u306e\u8272\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Progress Position")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"X\u304a\u3088\u3073Y\u5ea7\u6a19\u306f\u3001\u9032\u6357\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u306e\u4f4d\u7f6e\u3092\u57fa\u6e96\u3068\u3057\u3066\u9032\u6357\u30dc\u30c3\u30af\u30b9\u306e\u5de6\u4e0a\u9685\u306e\u4f4d\u7f6e\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"W\u304a\u3088\u3073H\u306f\u3001\u9032\u6357\u30dc\u30c3\u30af\u30b9\u306e\u5e45\u3068\u9ad8\u3055\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Values")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Range Min\u304a\u3088\u3073Range Max\u306f\u3001\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u306e\u6700\u5c0f\u304a\u3088\u3073\u6700\u5927\u6574\u6570\u5024\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"Initial\u306f\u3001\u9032\u6357\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u306e\u521d\u671f\u5024\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002Steps Total\u306f\u3001\u9032\u6357\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u304c\u65b0\u3057\u3044\u5024\u3092\u30ec\u30dd\u30fc\u30c8\u3059\u308b\u3068\u304d\u306e\u9593\u9694\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001\u9032\u6357\u30920%\u300110%\u300120%\u3001...100%\u3068\u3044\u3046\u7c92\u5ea6\u3067\u30ec\u30dd\u30fc\u30c8\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3001\u30c8\u30fc\u30bf\u30eb\u5024\u306f10\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"Steps Min\u306f\u3001\u9032\u6357\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u304c\u793a\u3059\u6700\u5c0f\u30b9\u30c6\u30c3\u30d7\u6570\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Appearance")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Direction\u306f\u3001\u9032\u6357\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u306e\u9032\u884c\u65b9\u5411\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"Alpha\u306f\u3001\u9032\u6357\u30dc\u30c3\u30af\u30b9\u306e\u900f\u660e\u5ea6\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30a2\u30eb\u30d5\u30a1\u5024\u306e\u7bc4\u56f2\u306f\u30010\uff5e255\u3067\u3059\u3002 0\u306f\u5b8c\u5168\u306b\u900f\u660e\u3067\u3001255\u306f\u5857\u308a\u3064\u3076\u3055\u308c\u305f\u72b6\u614b\u3067\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Mixins")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Draggable\u306f\u3001\u5b9f\u884c\u6642\u306b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30c9\u30e9\u30c3\u30b0\u53ef\u80fd\u306b\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"ClickListener\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u30af\u30ea\u30c3\u30af\u3055\u308c\u305f\u3068\u304d\u306b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u767a\u884c\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"FadeAnimator\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304cAlpha\u5024\u3078\u306e\u5909\u66f4\u3092\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5316\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,n.kt)("br",null),(0,n.kt)("br",null),"MoveAnimator\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304cX\u304a\u3088\u3073Y\u5024\u3078\u306e\u5909\u66f4\u3092\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5316\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")))),(0,n.kt)("h2",m({},{id:"interactions"}),"\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001Box Progress\u306b\u3088\u3063\u3066\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u308b\u30a2\u30af\u30b7\u30e7\u30f3\u3068\u30c8\u30ea\u30ac\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,n.kt)("h3",m({},{id:"actions"}),"\u30a2\u30af\u30b7\u30e7\u30f3"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u56fa\u6709\u306e\u30a2\u30af\u30b7\u30e7\u30f3")),(0,n.kt)("th",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u8aac\u660e")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Set value")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u9032\u6357\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u306e\u5024\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u6a19\u6e96\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30a2\u30af\u30b7\u30e7\u30f3")),(0,n.kt)("th",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u8aac\u660e")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Move widget")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u6642\u9593\u306e\u7d4c\u904e\u306b\u4f34\u3063\u3066\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u65b0\u3057\u3044\u4f4d\u7f6e\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Fade widget")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u6642\u9593\u306e\u7d4c\u904e\u306b\u4f34\u3063\u3066\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30a2\u30eb\u30d5\u30a1\u5024\u3092\u5909\u66f4\u3057\u307e\u3059\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Hide widget")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u975e\u8868\u793a\u306b\u3057\u307e\u3059\uff08\u53ef\u8996\u6027\u3092false\u306b\u8a2d\u5b9a\u3057\u307e\u3059\uff09\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Show widget")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u975e\u8868\u793a\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u8868\u793a\u3057\u307e\u3059\uff08\u53ef\u8996\u6027\u3092true\u306b\u8a2d\u5b9a\u3057\u307e\u3059\uff09\u3002")))),(0,n.kt)("h3",m({},{id:"triggers"}),"\u30c8\u30ea\u30ac"),(0,n.kt)("p",null,"Box Progress\u306f\u30c8\u30ea\u30ac\u3092\u767a\u884c\u3057\u307e\u305b\u3093\u3002"),(0,n.kt)("h2",m({},{id:"performance"}),"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9"),(0,n.kt)("p",null,"Box Progress\u306f\u30dc\u30c3\u30af\u30b9\u3068\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u753b\u50cf\u3067\u69cb\u6210\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u305f\u3081\u3001Box Progress\u306f\u753b\u50cf\u63cf\u753b\u306b\u4f9d\u5b58\u3057\u3001\u307b\u3068\u3093\u3069\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u4e0a\u3067\u9ad8\u901f\u51e6\u7406\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3067\u3042\u308b\u3068\u898b\u306a\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u753b\u50cf\u63cf\u753b\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,n.kt)("a",m({parentName:"p"},{href:"../general-ui-component-performance"}),"\u4e00\u822c\u7684\u306aUI\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9"),"\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h2",m({},{id:"examples"}),"\u4f8b"),(0,n.kt)("h3",m({},{id:"generated-code"}),"\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9"),(0,n.kt)("p",null,"\u30d3\u30e5\u30fc\u306e\u57fa\u5e95\u30af\u30e9\u30b9\u306e\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9\u3092\u898b\u308b\u3068\u3001TouchGFX Designer\u306b\u3088\u308bBox Progress\u306e\u8a2d\u5b9a\u65b9\u6cd5\u304c\u308f\u304b\u308a\u307e\u3059\u3002"),(0,n.kt)(o.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"boxProgress.setXY(148, 126);\nboxProgress.setProgressIndicatorPosition(2, 2, 180, 16);\nboxProgress.setRange(0, 100);\nboxProgress.setDirection(touchgfx::AbstractDirectionProgress::RIGHT);\nboxProgress.setBackground(touchgfx::Bitmap(BITMAP_BLUE_PROGRESSINDICATORS_BG_MEDIUM_PROGRESS_INDICATOR_BG_SQUARE_0_DEGREES_ID));\nboxProgress.setColor(touchgfx::Color::getColorFrom24BitRGB(0, 151, 255));\nboxProgress.setValue(0);\n")),(0,n.kt)("h3",m({},{id:"user-code"}),"\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9"),(0,n.kt)("p",null,"\u6b21\u306e\u4f8b\u306f\u3001\u9032\u6357\u3092\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u3059\u308b\u305f\u3081\u306b\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"handleTickEvent()"),"\u95a2\u6570\u3092\u5b9f\u88c5\u3059\u308b\u65b9\u6cd5\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002 \u3053\u306e\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001",(0,n.kt)("a",m({parentName:"p"},{href:"box-progress"}),"\u3053\u306e\u8a18\u4e8b\u306e\u5192\u982d"),"\u3067\u793a\u3057\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)(o.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void handleTickEvent();\nprotected:\n    bool increase = true;\n};\n")),(0,n.kt)(o.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),'void Screen1View::handleTickEvent()\n{\n    int currentValue = boxProgress.getValue();\n    int16_t max;\n    int16_t min;\n    boxProgress.getRange(min, max);\n\n    if (currentValue == min)\n    {\n        increase = true;\n    }\n    else if (currentValue == max)\n    {\n        increase = false;\n    }\n\n    int nextValue = increase == true ? currentValue+1 : currentValue-1;\n\n    boxProgress.setValue(nextValue);\n}```\n currentValue+1 : currentValue-1; boxProgress.setValue(nextValue); } </code></pre>\n\n<Tip>\n\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9\u3067\u306f\u3001\u3053\u308c\u3089\u306e\u95a2\u6570\u3084\u3001BoxProgress\u30af\u30e9\u30b9\u3067\u4f7f\u7528\u53ef\u80fd\u306a\u305d\u306e\u4ed6\u306e\u95a2\u6570\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5916\u89b3\u3092\u5909\u66f4\u3059\u308b\u5834\u5408\u306b\u306f\u3001 <InlineCode>boxProgress.invalidate()</InlineCode> \u3092\u547c\u3073\u51fa\u3057\u3066\u3001\u518d\u63cf\u753b\u3092\u884c\u3046\u5fc5\u8981\u304c\u3042\u308b\u3053\u3068\u3092\u5fd8\u308c\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002\n</Tip>\n\n### TouchGFX Designer\u306e\u4f8b {#touchgfx-designer-examples}\n\nBox Progress\u3092\u3055\u3089\u306b\u63a2\u7d22\u3059\u308b\u306b\u306f\u3001\u6b21\u306eUI\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3001TouchGFX Designer\u5185\u3067\u65b0\u3057\u3044\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002\n\n<Figure imageSource="/img/development/ui-development/ui-templates/progress-indicator-example-v4.17.webp">TouchGFX Designer\u306eProgress Indicator Example UI\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8</Figure>\n\n## API\u53c2\u7167 {#api-reference}\n\n<FurtherReading>\n  <li>\n    <Link to="../../../../api/classes/classtouchgfx_1_1_box_progress">BoxProgress\u30af\u30e9\u30b9\u306eAPI\u53c2\u7167</Link>\n  </li>\n</FurtherReading>\n')))}h.isMDXComponent=!0}}]);