"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2028],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),u=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),s=r,g=d["".concat(c,".").concat(s)]||d[s]||m[s]||l;return n?i.createElement(g,a(a({ref:t},p),{},{components:n})):i.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:r,a[1]=o;for(var u=2;u<l;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},22425:function(e,t,n){var i=n(67294);class r extends i.Component{render(){return i.createElement("div",{class:"code-header"},i.createElement("div",null,i.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){var i=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,a=(0,r.Z)(e.imageSource);return t?i.createElement("div",{class:"figure noshadow"},i.createElement("a",{href:a,target:"_blank"},i.createElement("img",{width:n,height:l,src:a})),i.createElement("p",null,e.children)):i.createElement("div",{class:"figure"},i.createElement("a",{href:a,target:"_blank"},i.createElement("img",{width:n,height:l,src:a})),i.createElement("p",null,e.children))}},29415:function(e,t,n){var i=n(67294),r=n(88678);const l=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class a extends i.Component{render(){return i.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=a},88678:function(e,t,n){var i=n(67294);class r extends i.Component{render(){const e=`highlight highlight-${this.props.type}`;return i.createElement("div",{class:e},i.createElement("div",{class:"highlight-heading"},i.createElement("h5",null,i.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),i.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=r},31217:function(e,t,n){var i=n(67294);class r extends i.Component{render(){return i.createElement("code",null,this.props.children)}}t.Z=r},37793:function(e,t,n){var i=n(67294),r=n(88678);const l=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},i.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class a extends i.Component{render(){return i.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}t.Z=a},27789:function(e,t,n){n.r(t),n.d(t,{assets:function(){return N},contentTitle:function(){return b},default:function(){return x},frontMatter:function(){return f},metadata:function(){return y},toc:function(){return w}});var i=n(3905),r=n(44035),l=n(29415),a=n(37793),o=n(31217),c=n(39130),u=n(22425),p=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&h(e,n,t[n]);if(s)for(var n of s(t))k.call(t,n)&&h(e,n,t[n]);return e};const f={id:"digital-clock",title:"Digital Clock\uff08\u30c7\u30b8\u30bf\u30eb\uff65\u30af\u30ed\u30c3\u30af\uff09"},b=void 0,y={unversionedId:"development/ui-development/ui-components/miscellaneous/digital-clock",id:"development/ui-development/ui-components/miscellaneous/digital-clock",title:"Digital Clock\uff08\u30c7\u30b8\u30bf\u30eb\uff65\u30af\u30ed\u30c3\u30af\uff09",description:"TouchGFX\u306eDigital Clock\u306f\u3001\u30a2\u30ca\u30ed\u30b0\u6642\u8a08\u306e\u91dd\u3092\u4f7f\u7528\u3057\u3066\u6642\u9593\u3092\u8868\u793a\u3059\u308bAnalogClock\u3068\u306f\u5bfe\u7167\u7684\u306b\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u30c7\u30b8\u30bf\u30eb\uff65\u30c6\u30ad\u30b9\u30c8\u3067\u6642\u9593\u3092\u8868\u793a\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/miscellaneous/digital-clock.mdx",sourceDirName:"development/ui-development/ui-components/miscellaneous",slug:"/development/ui-development/ui-components/miscellaneous/digital-clock",permalink:"/4.17/ja/docs/development/ui-development/ui-components/miscellaneous/digital-clock",draft:!1,tags:[],version:"current",frontMatter:{id:"digital-clock",title:"Digital Clock\uff08\u30c7\u30b8\u30bf\u30eb\uff65\u30af\u30ed\u30c3\u30af\uff09"},sidebar:"docs",previous:{title:"Analog Clock\uff08\u30a2\u30ca\u30ed\u30b0\uff65\u30af\u30ed\u30c3\u30af\uff09",permalink:"/4.17/ja/docs/development/ui-development/ui-components/miscellaneous/analog-clock"},next:{title:"Dynamic Graph\uff08\u30c0\u30a4\u30ca\u30df\u30c3\u30af\uff65\u30b0\u30e9\u30d5\uff09",permalink:"/4.17/ja/docs/development/ui-development/ui-components/miscellaneous/dynamic-graph"}},N={},w=[{value:"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7",id:"widget-group",level:2},{value:"\u30d7\u30ed\u30d1\u30c6\u30a3",id:"properties",level:2},{value:"Time",id:"time",level:3},{value:"\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3",id:"interactions",level:2},{value:"\u30a2\u30af\u30b7\u30e7\u30f3",id:"actions",level:3},{value:"\u30c8\u30ea\u30ac",id:"triggers",level:3},{value:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9",id:"performance",level:2},{value:"\u4f8b",id:"examples",level:2},{value:"\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9",id:"generated-code",level:3},{value:"\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9",id:"user-code",level:3},{value:"TouchGFX Designer\u306e\u4f8b",id:"touchgfx-designer-examples",level:3},{value:"API\u53c2\u7167",id:"api-reference",level:2}],C={toc:w};function x(e){var t,n=e,{components:p}=n,h=((e,t)=>{var n={};for(var i in e)g.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&s)for(var i of s(e))t.indexOf(i)<0&&k.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=v(v({},C),h),d(t,m({components:p,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"TouchGFX\u306eDigital Clock\u306f\u3001\u30a2\u30ca\u30ed\u30b0\u6642\u8a08\u306e\u91dd\u3092\u4f7f\u7528\u3057\u3066\u6642\u9593\u3092\u8868\u793a\u3059\u308b",(0,i.kt)("a",v({parentName:"p"},{href:"analog-clock"}),"AnalogClock"),"\u3068\u306f\u5bfe\u7167\u7684\u306b\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u30c7\u30b8\u30bf\u30eb\uff65\u30c6\u30ad\u30b9\u30c8\u3067\u6642\u9593\u3092\u8868\u793a\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3067\u3059\u3002"),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/digital-clock/widget-appearance.webp",mdxType:"Figure"},"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3067\u5b9f\u884c\u3055\u308c\u308bDigital Clock\uff08\u901f\u5ea6\u3092\u4e0a\u3052\u305f\u6620\u50cf\uff09"),(0,i.kt)("h2",v({},{id:"widget-group"}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7"),(0,i.kt)("p",null,"Digital Clock\u306f\u3001TouchGFX Designer\u306eMiscellaneous\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30b0\u30eb\u30fc\u30d7\u5185\u306b\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/digital-clock/widget-group-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u306eDigital Clock"),(0,i.kt)("h2",v({},{id:"properties"}),"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",v({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"th"},"\u30d7\u30ed\u30d1\u30c6\u30a3\uff65\u30b0\u30eb\u30fc\u30d7")),(0,i.kt)("th",v({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"th"},"\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u8aac\u660e")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",v({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"td"},"Name")),(0,i.kt)("td",v({parentName:"tr"},{align:null}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u540d\u524d\u3002 Name\u306f\u3001TouchGFX Designer\u304a\u3088\u3073\u30b3\u30fc\u30c9\u3067\u4f7f\u7528\u3055\u308c\u308b\u4e00\u610f\u306e\u8b58\u5225\u5b50\u3067\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",v({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"td"},"Location")),(0,i.kt)("td",v({parentName:"tr"},{align:null}),"X\u304a\u3088\u3073Y\u306f\u3001\u89aa\u3092\u57fa\u6e96\u3068\u3057\u3066\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5de6\u4e0a\u9685\u306e\u4f4d\u7f6e\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,i.kt)("br",null),(0,i.kt)("br",null),"W\u304a\u3088\u3073H\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5e45\u3068\u9ad8\u3055\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,i.kt)("br",null),(0,i.kt)("br",null),"Lock\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u73fe\u5728\u306eX\u3001Y\u3001W\u3001H\u3067\u30ed\u30c3\u30af\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,i.kt)("br",null),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30ed\u30c3\u30af\u3059\u308b\u3068\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u3092\u901a\u3057\u305f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3082\u7121\u52b9\u306b\u306a\u308a\u307e\u3059\u3002",(0,i.kt)("br",null),(0,i.kt)("br",null),"Visible\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u53ef\u8996\u6027\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u975e\u8868\u793a\u306b\u3059\u308b\u3068\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u3092\u901a\u3057\u305f\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3068\u306e\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u3082\u7121\u52b9\u306b\u306a\u308a\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",v({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"td"},"Time")),(0,i.kt)("td",v({parentName:"tr"},{align:null}),"Use Am/Pm\u306f\u3001\u6642\u9593\u8868\u793a\u309212\u6642\u9593\u5f62\u5f0f\u306b\u3059\u308b\u306e\u304b24\u6642\u9593\u5f62\u5f0f\u306b\u3059\u308b\u306e\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,i.kt)("br",null),(0,i.kt)("br",null),"Display Leading Zero for Hours\u306f\u3001\u6642\u9593\u306b\u5bfe\u3057\u3066\u5148\u884c\u30bc\u30ed\u3092\u6709\u52b9\u306b\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,i.kt)("br",null),(0,i.kt)("br",null),"Display Seconds\u306f\u3001\u79d2\u306e\u8868\u793a\u3092\u6709\u52b9\u306b\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,i.kt)("br",null),(0,i.kt)("br",null),"Initial Time\u306f\u3001\u6642\u8a08\u304c\u8868\u793a\u3059\u308b\u521d\u671f\u6642\u9593\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",v({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"td"},"Text")),(0,i.kt)("td",v({parentName:"tr"},{align:null}),"Single Use\u307e\u305f\u306fResource\u306f\u3001Digital Clock\u306b\u4f7f\u7528\u3059\u308b\u30c6\u30ad\u30b9\u30c8\uff65\u30ea\u30bd\u30fc\u30b9\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,i.kt)("br",null),"\u6b63\u3057\u304f\u6a5f\u80fd\u3059\u308b\u306b\u306f\u3001\u30c6\u30ad\u30b9\u30c8\u306b\u30ef\u30a4\u30eb\u30c9\u30ab\u30fc\u30c9\u304c\u5fc5\u8981\u3067\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",v({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"td"},"Appearance")),(0,i.kt)("td",v({parentName:"tr"},{align:null}),"Text Color\u306f\u3001Digital Clock\u306e\u30c6\u30ad\u30b9\u30c8\u306e\u8272\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,i.kt)("br",null),(0,i.kt)("br",null),"Alpha\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u900f\u660e\u5ea6\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,i.kt)("br",null),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30a2\u30eb\u30d5\u30a1\u5024\u306e\u7bc4\u56f2\u306f\u30010\uff5e255\u3067\u3059\u3002 0\u306f\u5b8c\u5168\u306b\u900f\u660e\u3067\u3001255\u306f\u5857\u308a\u3064\u3076\u3055\u308c\u305f\u72b6\u614b\u3067\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",v({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"td"},"Mixins")),(0,i.kt)("td",v({parentName:"tr"},{align:null}),"Draggable\u306f\u3001\u5b9f\u884c\u6642\u306b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u30c9\u30e9\u30c3\u30b0\u53ef\u80fd\u306b\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,i.kt)("br",null),(0,i.kt)("br",null),"ClickListener\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u30af\u30ea\u30c3\u30af\u3055\u308c\u305f\u3068\u304d\u306b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u767a\u884c\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,i.kt)("br",null),(0,i.kt)("br",null),"FadeAnimator\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304cAlpha\u5024\u3078\u306e\u5909\u66f4\u3092\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5316\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,i.kt)("br",null),(0,i.kt)("br",null),"MoveAnimator\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304cX\u304a\u3088\u3073Y\u5024\u3078\u306e\u5909\u66f4\u3092\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5316\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")))),(0,i.kt)("h3",v({},{id:"time"}),"Time"),(0,i.kt)("p",null,"Time\u30d7\u30ed\u30d1\u30c6\u30a3\uff65\u30b0\u30eb\u30fc\u30d7\u306f\u3001\u3055\u307e\u3056\u307e\u306a\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u3067\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u304a\u3051\u308b\u6642\u9593\u306e\u8868\u793a\u65b9\u6cd5\u3092\u8abf\u6574\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002 Use Am/Pm\u3092\u5207\u308a\u66ff\u3048\u308b\u3053\u3068\u3067\u300124\u6642\u9593\u8868\u793a\u3092\u4f7f\u7528\u3059\u308b\u306e\u304b\u300112\u6642\u9593\u3068AM/PM\u306b\u3088\u308b\u8868\u793a\u3092\u4f7f\u7528\u3059\u308b\u306e\u304b\u3092\u9078\u629e\u3067\u304d\u307e\u3059\u3002 Display Leading Zero for Hours\u306e\u5207\u308a\u66ff\u3048\u306b\u3088\u3063\u3066\u300110\u6642\u3088\u308a\u524d\u306e\u6642\u9593\u306e\u8868\u793a\u65b9\u6cd5\uff08\u4f8b: 09:10:00\u30689:10:00\u306e\u3069\u3061\u3089\u304b\uff09\u3092\u6307\u5b9a\u3057\u3001Display Seconds\u3067\u3001\u79d2\u306e\u8868\u793a\u306e\u30aa\u30f3 / \u30aa\u30d5\u3092\u5207\u308a\u66ff\u3048\u307e\u3059\uff08\u4f8b: 9:10:00\u30689:10\u306e\u3069\u3061\u3089\u304b\uff09\u3002"),(0,i.kt)("p",null,"Am/Pm\u3092\u9078\u629e\u3059\u308b\u3068\u3001\u30b3\u30fc\u30c9\u751f\u6210\u3082\u308f\u305a\u304b\u306b\u5909\u66f4\u3055\u308c\u307e\u3059\u3002 \u6642\u9593\u3092\u521d\u671f\u5316\u3059\u308b\u305f\u3081\u306b\u3001Analog Clock\u3067\u6b21\u306e\u95a2\u6570:",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"p"},"initializeTime24Hour(uint8_t hour, uint8_t minute, uint8_t second)")),(0,i.kt)("p",null,"\u3092\u4f7f\u7528\u3059\u308b\u4ee3\u308f\u308a\u306b\u3001\u6b21\u306e\u95a2\u6570\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\uff0812\u6642\u9593\u8868\u793a\u306e\u5834\u5408\uff09:",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"p"},"initializeTime12Hour(uint8_t hour, uint8_t minute, uint8_t second, bool am)")),(0,i.kt)("p",null,"\u30af\u30ed\u30c3\u30af\u306b\u3088\u3063\u3066\u8868\u793a\u3055\u308c\u308b\u6642\u9593\u3092\u66f4\u65b0\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u95a2\u6570\u306e\u3044\u305a\u308c\u304b\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"p"},"setTime24Hour(uint8_t hour, uint8_t minute, uint8_t second)"),(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"p"},"setTime12Hour(uint8_t hour, uint8_t minute, uint8_t second, bool am)")),(0,i.kt)("h2",v({},{id:"interactions"}),"\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001Digital Clock\u306b\u3088\u3063\u3066\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u308b\u30a2\u30af\u30b7\u30e7\u30f3\u3068\u30c8\u30ea\u30ac\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,i.kt)("h3",v({},{id:"actions"}),"\u30a2\u30af\u30b7\u30e7\u30f3"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",v({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"th"},"\u6a19\u6e96\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff65\u30a2\u30af\u30b7\u30e7\u30f3")),(0,i.kt)("th",v({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"th"},"\u8aac\u660e")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",v({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"td"},"Move widget")),(0,i.kt)("td",v({parentName:"tr"},{align:null}),"\u6642\u9593\u306e\u7d4c\u904e\u306b\u4f34\u3063\u3066\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u65b0\u3057\u3044\u4f4d\u7f6e\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",v({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"td"},"Fade widget")),(0,i.kt)("td",v({parentName:"tr"},{align:null}),"\u6642\u9593\u306e\u7d4c\u904e\u306b\u4f34\u3063\u3066\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u30a2\u30eb\u30d5\u30a1\u5024\u3092\u5909\u66f4\u3057\u307e\u3059\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",v({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"td"},"Hide widget")),(0,i.kt)("td",v({parentName:"tr"},{align:null}),"\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u975e\u8868\u793a\u306b\u3057\u307e\u3059\uff08\u53ef\u8996\u6027\u3092false\u306b\u8a2d\u5b9a\u3057\u307e\u3059\uff09\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",v({parentName:"tr"},{align:null}),(0,i.kt)("strong",{parentName:"td"},"Show widget")),(0,i.kt)("td",v({parentName:"tr"},{align:null}),"\u975e\u8868\u793a\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u8868\u793a\u3057\u307e\u3059\uff08\u53ef\u8996\u6027\u3092true\u306b\u8a2d\u5b9a\u3057\u307e\u3059\uff09\u3002")))),(0,i.kt)("h3",v({},{id:"triggers"}),"\u30c8\u30ea\u30ac"),(0,i.kt)("p",null,"Digital Clock\u306f\u30c8\u30ea\u30ac\u3092\u767a\u884c\u3057\u307e\u305b\u3093\u3002"),(0,i.kt)("h2",v({},{id:"performance"}),"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9"),(0,i.kt)("p",null,"Digital Clock\u306f1\u3064\u306e",(0,i.kt)("a",v({parentName:"p"},{href:"text-area"}),"TextArea"),"\u3067\u69cb\u6210\u3055\u308c\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u7279\u306b\u76ee\u7acb\u3063\u305f\u5f71\u97ff\u306f\u4e0e\u3048\u307e\u305b\u3093\u3002 \u3053\u306e\u305f\u3081\u3001Digital Clock\u306f\u307b\u3068\u3093\u3069\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u4e0a\u3067\u9ad8\u901f\u51e6\u7406\u306e\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3067\u3042\u308b\u3068\u898b\u306a\u3055\u308c\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u63cf\u753b\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u300c",(0,i.kt)("a",v({parentName:"p"},{href:"../general-ui-component-performance"}),"\u4e00\u822c\u7684\u306aUI\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9"),"\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("h2",v({},{id:"examples"}),"\u4f8b"),(0,i.kt)("h3",v({},{id:"generated-code"}),"\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9"),(0,i.kt)("p",null,"\u30d3\u30e5\u30fc\u306e\u57fa\u5e95\u30af\u30e9\u30b9\u306e\u751f\u6210\u6e08\u307f\u30b3\u30fc\u30c9\u3092\u898b\u308b\u3068\u3001TouchGFX Designer\u306b\u3088\u308bDigital Clock\u306e\u8a2d\u5b9a\u65b9\u6cd5\u304c\u308f\u304b\u308a\u307e\u3059\u3002"),(0,i.kt)(u.Z,{mdxType:"CodeHeader"},"mainViewBase.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n#include <texts/TextKeysAndLanguages.hpp>\n\nmainViewBase::mainViewBase()\n{\n    digitalClock.setPosition(75, 88, 331, 97);\n    digitalClock.setColor(touchgfx::Color::getColorFrom24BitRGB(0, 30, 65));\n    digitalClock.setTypedText(touchgfx::TypedText(T_SINGLEUSEID2));\n    digitalClock.displayLeadingZeroForHourIndicator(true);\n    digitalClock.setDisplayMode(touchgfx::DigitalClock::DISPLAY_24_HOUR);\n    digitalClock.setTime24Hour(7, 7, 0);\n\n    add(digitalClock);\n}\n\nvoid mainViewBase::setupScreen()\n{\n\n}\n')),(0,i.kt)(a.Z,{mdxType:"Tip"},"\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9\u3067\u306f\u3001\u3053\u308c\u3089\u306e\u95a2\u6570\u3084\u3001DigitalClock\u30af\u30e9\u30b9\u3067\u4f7f\u7528\u53ef\u80fd\u306a\u305d\u306e\u4ed6\u306e\u95a2\u6570\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306e\u5916\u89b3\u3092\u5909\u66f4\u3059\u308b\u5834\u5408\u306b\u306f\u3001 ",(0,i.kt)(o.Z,{mdxType:"InlineCode"},"digitalClock.invalidate()")," \u3092\u547c\u3073\u51fa\u3057\u3066\u3001\u518d\u63cf\u753b\u3092\u884c\u3046\u5fc5\u8981\u304c\u3042\u308b\u3053\u3068\u3092\u5fd8\u308c\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("h3",v({},{id:"user-code"}),"\u30e6\u30fc\u30b6\uff65\u30b3\u30fc\u30c9"),(0,i.kt)("p",null,"\u6b21\u306e\u4f8b\u306f\u3001\u30af\u30ed\u30c3\u30af\u306e\u958b\u59cb\u306e\u8a2d\u5b9a\u65b9\u6cd5\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)(u.Z,{mdxType:"CodeHeader"},"mainView.hpp"),(0,i.kt)("pre",null,(0,i.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"#ifndef MAINVIEW_HPP\n#define MAINVIEW_HPP\n\n#include <gui_generated/main_screen/mainViewBase.hpp>\n#include <gui/main_screen/mainPresenter.hpp>\n\nclass mainView : public mainViewBase\n{\npublic:\n    mainView();\n    virtual ~mainView() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void handleTickEvent();\n\nprotected:\n    int tickCounter;\n    int digitalHours;\n    int digitalMinutes;\n    int digitalSeconds;\n};\n\n#endif // MAINVIEW_HPP\n\n")),(0,i.kt)(u.Z,{mdxType:"CodeHeader"},"mainView.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"#include <gui/main_screen/mainView.hpp>\n\nmainView::mainView()\n{\n}\n\nvoid mainView::setupScreen()\n{\n    mainViewBase::setupScreen();\n    digitalHours = digitalClock.getCurrentHour();\n    digitalMinutes = digitalClock.getCurrentMinute();\n    digitalSeconds = digitalClock.getCurrentSecond();\n}\n\nvoid mainView::tearDownScreen()\n{\n    mainViewBase::tearDownScreen();\n}\n\nvoid mainView::handleTickEvent()\n{\n    tickCounter++;\n\n    if (tickCounter % 60 == 0)\n    {\n        if (++digitalSeconds >= 60)\n        {\n            digitalSeconds = 0;\n            if (++digitalMinutes >= 60)\n            {\n                digitalMinutes = 0;\n                if (++digitalHours >= 24)\n                {\n                    digitalHours = 0;\n                }\n            }\n        }\n\n        // Update the clock\n        digitalClock.setTime24Hour(digitalHours, digitalMinutes, digitalSeconds);\n    }\n}\n")),(0,i.kt)("h3",v({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer\u306e\u4f8b"),(0,i.kt)("p",null,"Digital Clock\u3092\u3055\u3089\u306b\u63a2\u7d22\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u4f8b\u3092\u4f7f\u7528\u3057\u3066\u3001TouchGFX Designer\u5185\u3067\u65b0\u3057\u3044\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-templates/clock-example-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u306eDigital Clock"),(0,i.kt)("h2",v({},{id:"api-reference"}),"API\u53c2\u7167"),(0,i.kt)(l.Z,{mdxType:"FurtherReading"},(0,i.kt)("li",null,(0,i.kt)(c.Z,{to:"../../../../api/classes/classtouchgfx_1_1_digital_clock",mdxType:"Link"},"DigitalClock\u30af\u30e9\u30b9\u306eAPI\u53c2\u7167"))))}x.isMDXComponent=!0}}]);