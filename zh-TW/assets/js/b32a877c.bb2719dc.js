(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[859],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,h=p["".concat(u,".").concat(m)]||p[m]||s[m]||l;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},44035:function(e,t,n){"use strict";var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,o=(0,i.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:l,src:o})),r.createElement("p",null,e.children))}},29415:function(e,t,n){"use strict";var r=n(67294),i=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=o},88678:function(e,t,n){"use strict";var r=n(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},65407:function(e,t,n){"use strict";var r=n(67294),i=n(25026);t.Z=function(e){var t,n;const l=(0,i.Z)(e.url),o=null!=(t=e.width)?t:"100%",a=null!=(n=e.height)?n:"100%";return r.createElement("div",{class:"loop-video"},r.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:o,height:a},r.createElement("source",{src:l,type:"video/mp4"}),"Your browser does not support the video tag."),r.createElement("p",null,e.children))}},82985:function(e,t,n){"use strict";var r=n(67294);class i extends r.Component{render(){return r.createElement("code",{class:"shortcut"},this.props.children)}}t.Z=i},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(67294),i=n(73727),l=n(11368),o=n(35096),a=n(84487);const u=(0,r.createContext)({collectLink:()=>{}});var c=n(25026),d=n(67023),s=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))v.call(t,n)&&k(e,n,t[n]);if(h)for(var n of h(t))g.call(t,n)&&k(e,n,t[n]);return e};var y=function(e){var t,n=e,{isNavLink:s,to:k,href:y,activeClassName:b,isActive:w,"data-noBrokenLinkCheck":T,autoAddBaseUrl:x=!0}=n,C=((e,t)=>{var n={};for(var r in e)v.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&h)for(var r of h(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O,baseUrl:Z}}=(0,l.Z)(),{withBaseUrl:S}=(0,c.C)(),N=(0,r.useContext)(u),E=k||y,P=(0,o.Z)(E),L=null==E?void 0:E.replace("pathname://","");let j=void 0!==L?(R=L,x&&(e=>e.startsWith("/"))(R)?S(R):R):void 0;var R;j&&P&&(j=(0,d.applyTrailingSlash)(j,{trailingSlash:O,baseUrl:Z}));const M=(0,r.useRef)(!1),D=s?i.OL:i.rU,U=a.Z.canUseIntersectionObserver;let A;(0,r.useEffect)((()=>(!U&&P&&null!=j&&window.docusaurus.prefetch(j),()=>{U&&A&&A.disconnect()})),[j,U,P]);const _=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,F=!j||!P||_;return j&&P&&!_&&!T&&N.collectLink(j),F?r.createElement("a",f(f({href:j},E&&!P&&{target:"_blank",rel:"noopener noreferrer"}),C)):r.createElement(D,f((W=f({},C),p(W,m({onMouseEnter:()=>{M.current||null==j||(window.docusaurus.preload(j),M.current=!0)},innerRef:e=>{var t,n;U&&e&&P&&(t=e,n=()=>{null!=j&&window.docusaurus.prefetch(j)},A=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(A.unobserve(t),A.disconnect(),n())}))})),A.observe(t))},to:j||""}))),s&&{isActive:w,activeClassName:b}));var W}},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return l},Z:function(){return o}});var r=n(11368),i=n(35096);function l(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:l=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=l();return n(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[i]=e.split(/[#?]/),l="/"===i||i===r?i:(o=i,n?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(i,l)}},67023:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var l=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(l).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},83956:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return k},contentTitle:function(){return f},metadata:function(){return y},toc:function(){return b},default:function(){return T}});var r=n(3905),i=n(31217),l=n(44035),o=n(29415),a=n(82985),u=n(65407),c=Object.defineProperty,d=Object.defineProperties,s=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&v(e,n,t[n]);if(p)for(var n of p(t))h.call(t,n)&&v(e,n,t[n]);return e};const k={id:"canvas-view",title:"\u756b\u5e03\u8996\u5716"},f=void 0,y={unversionedId:"development/ui-development/designer-user-guide/canvas-view",id:"development/ui-development/designer-user-guide/canvas-view",isDocsHomePage:!1,title:"\u756b\u5e03\u8996\u5716",description:"\u756b\u5e03\u662f\u7528\u65bc\u69cb\u5efa\u61c9\u7528\u5716\u5f62\u90e8\u4ef6\u7684\u8996\u5716\uff0c\u5b83\u63d0\u4f9b\u904b\u884c\u6642\u4ecb\u9762\u5916\u89c0\u7684\u8996\u89ba\u5448\u73fe\u3002 \u9019\u88e1\u63cf\u8ff0\u52d5\u614b\u65b9\u9762\uff0c\u5982\u52d5\u756b\u548c\u7cfb\u7d71\u4e4b\u9593\u7684\u76f8\u4e92\u4f5c\u7528\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/canvas-view.mdx",sourceDirName:"development/ui-development/designer-user-guide",slug:"/development/ui-development/designer-user-guide/canvas-view",permalink:"/4.17/zh-TW/docs/development/ui-development/designer-user-guide/canvas-view",version:"current",frontMatter:{id:"canvas-view",title:"\u756b\u5e03\u8996\u5716"},sidebar:"docs",previous:{title:"\u4e3b\u8996\u7a97",permalink:"/4.17/zh-TW/docs/development/ui-development/designer-user-guide/main-window"},next:{title:"\u5716\u50cf\u8996\u5716",permalink:"/4.17/zh-TW/docs/development/ui-development/designer-user-guide/images-view"}},b=[{value:"\u5de6\u5074\u908a\u6b04",id:"left-side-bar",children:[{value:"Screens &amp; Custom Containers",id:"screens--custom-containers",children:[]}]},{value:"\u756b\u5e03",id:"canvas",children:[{value:"\u5c0f\u5de5\u5177\u529f\u80fd\u8868",id:"widget-menu",children:[]},{value:"\u5c0f\u5de5\u5177\u9078\u64c7",id:"widget-selection",children:[]},{value:"\u5c0f\u5de5\u5177\u5b9a\u4f4d",id:"widget-positioning",children:[]},{value:"\u5c0f\u5de5\u5177\u9806\u5e8f\u63a7\u5236\u9805",id:"widget-order-controls",children:[]},{value:"\u5167\u5bb9\u4fee\u526a\u63a7\u5236",id:"content-clipping-control",children:[]},{value:"\u6b77\u53f2\u63a7\u5236\u9805",id:"history-controls",children:[]},{value:"\u7e2e\u653e\u63a7\u5236\u9805",id:"zoom-controls",children:[]}]},{value:"\u53f3\u5074\u908a\u6b04",id:"right-side-bar",children:[{value:"Properties\u5c6c\u6027",id:"properties",children:[]},{value:"Interactions\u4ea4\u4e92",id:"interactions",children:[]}]}],w={toc:b};function T(e){var t,n=e,{components:c}=n,v=((e,t)=>{var n={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=g(g({},w),v),d(t,s({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u756b\u5e03\u662f\u7528\u65bc\u69cb\u5efa\u61c9\u7528\u5716\u5f62\u90e8\u4ef6\u7684\u8996\u5716\uff0c\u5b83\u63d0\u4f9b\u904b\u884c\u6642\u4ecb\u9762\u5916\u89c0\u7684\u8996\u89ba\u5448\u73fe\u3002 \u9019\u88e1\u63cf\u8ff0\u52d5\u614b\u65b9\u9762\uff0c\u5982\u52d5\u756b\u548c\u7cfb\u7d71\u4e4b\u9593\u7684\u76f8\u4e92\u4f5c\u7528\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/canvas-view/designer-canvas-view-4.17.png",mdxType:"Figure"},"TouchGFX Designer\u7684\u756b\u5e03\u8996\u5716"),(0,r.kt)("h2",g({},{id:"left-side-bar"}),"\u5de6\u5074\u908a\u6b04"),(0,r.kt)("p",null,"\u5de6\u5074\u7684\u5074\u908a\u6b04\u5305\u542b\u4e00\u500b\u7d22\u5f15\u6a19\u7c64\u63a7\u5236\u9805\uff0c\u53ef\u5728",(0,r.kt)("a",g({parentName:"p"},{href:"#screens--custom-containers"}),"screen& Custom Containers"),"\u4e4b\u9593\u5c0e\u822a\u3002"),(0,r.kt)("h3",g({},{id:"screens--custom-containers"}),"Screens & Custom Containers"),(0,r.kt)("p",null,"\u201cScreens \u201d\u9078\u9805\u5361\u548c\u201cCustom Containers\u201d\u9078\u9805\u5361\u90fd\u5305\u542b\u6a39\u72c0\u7d50\u69cb\uff0c\u63d0\u4f9b\u6bcf\u500bscreen/custom container\u4e2d\u5c0f\u5de5\u5177\u7684\u7e3d\u89bd\uff0c\u901a\u904e\u9ede\u64ca\u5c0f\u5de5\u5177\u540d\u7a31\u65c1\u908a\u7684V\u5f62\u6a19\u8a18\uff0c\u53ef\u4ee5\u6298\u758a\u6a39\u72c0\u4e2d\u6bcf\u500b\u53ef\u80fd\u5305\u542b\u5176\u4ed6\u5c0f\u5de5\u5177\u7684\u5c0f\u5de5\u5177\u3002"),(0,r.kt)("p",null,"\u5982\u9700\u66f4\u6539screen/custom container\u548c\u5176\u4e2d\u5c0f\u5de5\u5177\u7684\u9806\u5e8f\uff0c\u53ef\u5c07\u5b83\u5011\u62d6\u653e\u5230\u5176\u4ed6\u87a2\u5e55\u3001\u81ea\u8a02\u5bb9\u5668\u548c\u5c0f\u5de5\u5177\u4e4b\u4e0b\u6216\u4e4b\u4e0a\uff0c\u4e5f\u53ef\u901a\u904e",(0,r.kt)("a",g({parentName:"p"},{href:"#widget-order-controls"}),"widget order controls"),"\u4f86\u66f4\u6539\u3002 \u66f4\u6539\u5c0f\u5de5\u5177\u9806\u5e8f\uff0c\u6c7a\u5b9a\u5c07\u54ea\u500b\u5c0f\u5de5\u5177\u653e\u5728\u5176\u4ed6\u5c0f\u5de5\u5177\u4e4b\u4e0a\u3002"),(0,r.kt)("p",null,"\u5c0d\u65bc\u5c6c\u65bc\u5bb9\u5668\u985e\u578b\u7684\u5c0f\u5de5\u5177\uff0c\u53ef\u4ee5\u70ba\u5176\u6dfb\u52a0\u5b50\u5de5\u5177\uff0c\u65b9\u6cd5\u662f\u5728\u6a39\u72c0\u6aa2\u8996\u4e2d\u5c07\u5c0f\u5de5\u5177\u62d6\u653e\u5230\u5176\u4ed6\u5c0f\u5de5\u5177\u4e4b\u4e0a\u3002 \u6b64\u5916\uff0c\u9084\u53ef\u4ee5\u5c07\u5c0f\u5de5\u5177\u5f9e\u4e00\u500b\u87a2\u5e55\u62d6\u653e\u5230\u53e6\u4e00\u500b\u87a2\u5e55\u3002"),(0,r.kt)("p",null,"\u5728\u9ede\u64ca\u5c0f\u5de5\u5177\u7684\u540c\u6642\u6309\u4f4fCTRL\u9375\u53ef\u4ee5\u9078\u64c7\u591a\u500b\u5c0f\u5de5\u5177\u3002"),(0,r.kt)("p",null,"\u9ede\u64ca\u201c+\u201d\u6309\u9215\u53ef\u5c07Screens/Custom Containers\u6dfb\u52a0\u5230\u9805\u76ee\u3002 \u53ef\u4ee5\u5f9e",(0,r.kt)("a",g({parentName:"p"},{href:"#widget-menu"}),"Widget Menu"),"\u5c07\u81ea\u8a02\u5bb9\u5668\u6dfb\u52a0\u5230\u87a2\u5e55\u548c\u5176\u4ed6\u81ea\u8a02\u5bb9\u5668\uff0c\u53ef\u4ee5\u5728\u5b83\u5011\u81ea\u5df1\u7684\u540d\u70ba\u201cCustom Containers\u201d\u7684\u985e\u5225\u4e2d\u627e\u5230\u5b83\u5011\u3002"),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u87a2\u5e55\u3001\u81ea\u8a02\u5bb9\u5668\u548c\u5c0f\u5de5\u5177\u90fd\u53ef\u6309\u53f3\u9375\u547c\u53eb\u529f\u80fd\u8868\uff0c\u60a8\u53ef\u4ee5\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",g({parentName:"tr"},{align:null})),(0,r.kt)("th",g({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u91cd\u65b0\u547d\u540d"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"F2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u522a\u9664\u5c0f\u5de5\u5177"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"DEL"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u8907\u88fd"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + C"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u8cbc\u4e0a"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + V"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u4e0a\u79fb"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + F"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u4e0b\u79fb"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + B"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"\u7de8\u8f2f\u539f\u59cb\u6a94\u6848*"),(0,r.kt)("td",g({parentName:"tr"},{align:null}))))),(0,r.kt)("p",null," ","*","\u53ea\u80fd\u7528\u65bc\u87a2\u5e55\u548c\u81ea\u8a02\u5bb9\u5668"),(0,r.kt)(u.Z,{width:"40%",height:"40%",url:"/videos/development/ui-development/designer-user-guide/canvas-view/designer-canvas-view-tree.mp4",mdxType:"LoopVideo"},"\u5de6\u5074\u908a\u6b04\u4e2d\u7684\u87a2\u5e55\u6a39\u72c0\u5716"),(0,r.kt)("h2",g({},{id:"canvas"}),"\u756b\u5e03"),(0,r.kt)("p",null,"\u8996\u5716\u9802\u90e8\u5305\u542b",(0,r.kt)("a",g({parentName:"p"},{href:"#widget-menu"}),"Widget Menu"),"\uff0c\u5176\u4e2d\u5305\u542b\u6240\u6709\u53ef\u7528\u7684\u5c0f\u5de5\u5177\u3002"),(0,r.kt)("p",null,"\u8996\u5716\u4e2d\u5fc3\u5305\u542b\u756b\u5e03\uff0c\u986f\u793a\u4e86\u7576\u524d\u9078\u4e2d\u7684\u87a2\u5e55\u6216\u81ea\u8a02\u5bb9\u5668\u3002"),(0,r.kt)("p",null,"\u8996\u5716\u5e95\u90e8\u5305\u542b\u5404\u7a2e\u63a7\u5236\u9805\uff1a",(0,r.kt)("a",g({parentName:"p"},{href:"#zoom-controls"}),"\u7e2e\u653e\u63a7\u5236\u9805"),"\u548c",(0,r.kt)("a",g({parentName:"p"},{href:"#content-clipping-control"}),"\u5167\u5bb9\u4fee\u526a\u63a7\u5236"),"\u3002"),(0,r.kt)(u.Z,{url:"/videos/development/ui-development/designer-user-guide/canvas-view/designer-canvas-view.mp4",mdxType:"LoopVideo"},"\u756b\u5e03\u8996\u5716\u4e2d\u7684\u756b\u5e03"),(0,r.kt)("h3",g({},{id:"widget-menu"}),"\u5c0f\u5de5\u5177\u529f\u80fd\u8868"),(0,r.kt)("p",null,"\u9ede\u64ca\u5c0f\u5de5\u5177\u529f\u80fd\u8868\u4e2d\u7684\u201cAll widget group\u201d\u9078\u9805\u5361\u6216\u5176\u6309\u4e0b\u5176\u5feb\u901f\u9375 ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"A")," \u6253\u958b\u5305\u542b\u5df2\u5206\u985e\u7684\u6240\u6709\u53ef\u7528\u5c0f\u5de5\u5177\u7684\u5217\u8868\u3002 \u9ede\u64ca\u7279\u5b9a\u7684\u5c0f\u5de5\u5177\u7d44\u9078\u9805\u5361\uff0c\u6253\u958b\u8a72\u7279\u5b9a\u5206\u985e\u5305\u542b\u7684\u53ef\u7528\u5c0f\u5de5\u5177\u7684\u5217\u8868\u3002"),(0,r.kt)("p",null,"\u9ede\u64ca\u4e00\u500b\u5c0f\u5de5\u5177\uff0c\u53ef\u5c07\u5176\u6dfb\u52a0\u5230\u7576\u524d\u9078\u4e2d\u4e26\u986f\u793a\u7684\u87a2\u5e55\u6216\u81ea\u8a02\u5bb9\u5668\u7684\u756b\u5e03\u4e0a\u3002"),(0,r.kt)("p",null,"\u201cAll widget group\u201d\u9084\u5305\u542b\u4e00\u500b\u641c\u7d22\u6b04\u4f4d\uff0c\u5b83\u63a1\u7528\u6a21\u7cca\u641c\u7d22\u6280\u8853\uff0c\u5e6b\u52a9\u7528\u6236\u67e5\u627e\u8207\u641c\u7d22\u8f38\u5165\u5339\u914d\u5ea6\u6700\u9ad8\u7684\u5c0f\u5de5\u5177\u3002 \u6700\u4f73\u7d50\u679c\u5c07highlight\u986f\u793a\u3002 \u8209\u4f8b\u4f86\u8aaa\uff0c\u7531\u65bc\u4f7f\u7528\u6a21\u7cca\u641c\u7d22\uff0c\u53ef\u4ee5\u8f38\u5165\u201cbwl\u201d\u4e26\u5f97\u5230\u201cButton With Label\u201d\uff08\u5e36\u6a19\u7c64\u7684\u6309\u9215\uff09\uff0c\u56e0\u70ba\u7c21\u5beb\u662f\u5176\u4e2d\u4e00\u500b\u56e0\u5b50\u3002 \u5728\u641c\u7d22\u6b04\u4f4d\u4e2d\u8f38\u5165\u5167\u5bb9\u5f8c\uff0c\u6309\u4e0b ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Enter\u9375")," \u5c07\u9ad8\u4eae\u986f\u793a\u7684\u5c0f\u5de5\u5177\u63d2\u5165\u756b\u5e03\u4e26\u95dc\u9589\u201c\u5c0f\u5de5\u5177\u529f\u80fd\u8868\u201d\u3002"),(0,r.kt)(u.Z,{url:"/videos/development/ui-development/designer-user-guide/canvas-view/widget-menu.mp4",mdxType:"LoopVideo"},"\u201c\u756b\u5e03\u201d\u8996\u5716\u4e2d\u7684\u201c\u5c0f\u5de5\u5177\u529f\u80fd\u8868\u201d"),(0,r.kt)("h3",g({},{id:"widget-selection"}),"\u5c0f\u5de5\u5177\u9078\u64c7"),(0,r.kt)("p",null,"\u5982\u4e0a\u9762\u7684\u52d5\u756b\u6240\u793a\uff0c\u53ea\u9700\u5728\u756b\u5e03\u4e0a\u9ede\u64ca\u5c0f\u5de5\u5177\u5373\u53ef\u9078\u4e2d\u5b83\u3002 \u9084\u53ef\u4ee5\u591a\u9078\uff0c\u65b9\u6cd5\u662f\u5728\u6309\u4f4f\u9375\u76e4\u4e0a ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Ctrl\u9375")," \u7684\u540c\u6642\u6309\u4e00\u4e0b\u591a\u500b\u5c0f\u5de5\u5177\u3002"),(0,r.kt)("h3",g({},{id:"widget-positioning"}),"\u5c0f\u5de5\u5177\u5b9a\u4f4d"),(0,r.kt)("p",null,"\u5982\u4e0a\u9762\u7684\u52d5\u756b\u6240\u793a\uff0c\u53ef\u901a\u904e\u62d6\u62fd\u5c0f\u5de5\u5177\u7684\u7e2e\u7565\u5716\u4f86\u79fb\u52d5\u5b83\u548c\u6539\u8b8a\u5b83\u7684\u5927\u5c0f\u3002"),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u9084\u53ef\u4ee5\u7528\u65b9\u5411\u9375\u5c07\u9078\u4e2d\u7684\u5c0f\u5de5\u5177\u79fb\u52d51\u500b\u50cf\u7d20\u3002 \u5728\u4f7f\u7528\u65b9\u5411\u9375\u7684\u540c\u6642\u6309\u4f4f ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"Ctrl\u9375")," \u53ef\u4ee5\u5c07\u9078\u4e2d\u7684\u5c0f\u5de5\u5177\u79fb\u52d510\u500b\u50cf\u7d20\u3002"),(0,r.kt)("h3",g({},{id:"widget-order-controls"}),"\u5c0f\u5de5\u5177\u9806\u5e8f\u63a7\u5236\u9805"),(0,r.kt)("p",null,"\u5c0f\u5de5\u5177\u7684\u9806\u5e8f\u53ef\u901a\u904e\u201c\u5411\u524d\u201d\u548c\u201c\u5411\u5f8c\u201d\u5feb\u6377\u65b9\u5f0f\u9032\u884c\u8abf\u6574\uff0c\u5b83\u5011\u5728\u201c\u87a2\u5e55\u201d\u6216\u201c\u81ea\u8a02\u5bb9\u5668\u201d\u6a39\u4e2d\u7684\u9806\u5e8f\u4e5f\u6703\u96a8\u4e4b\u6539\u8b8a\u3002"),(0,r.kt)("p",null,"\u201c\u5411\u524d\u201d\u7684\u89f8\u767c\u65b9\u5f0f\u662f\u6309\u4e0b ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + F"),"."),(0,r.kt)("p",null,"\u201c\u5411\u5f8c\u201d\u7684\u89f8\u767c\u65b9\u5f0f\u662f\u6309\u4e0b ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + B"),"."),(0,r.kt)("h3",g({},{id:"content-clipping-control"}),"\u5167\u5bb9\u4fee\u526a\u63a7\u5236"),(0,r.kt)("p",null,"\u5728\u756b\u5e03\u4e0a\uff0c\u87a2\u5e55\u3001\u81ea\u8a02\u5bb9\u5668\u548c\u5bb9\u5668\u985e\u578b\u5c0f\u5de5\u5177\u7684\u5b50\u5de5\u5177\u7684\u908a\u754c\u4e4b\u5916\u7684\u5c0f\u5de5\u5177\u6703\u88ab\u4fee\u526a\u3002 \u5167\u5bb9\u4fee\u526a\u63a7\u5236\u5728\u5b8c\u5168\u4fee\u526a\u5c0f\u5de5\u5177\u548c\u90e8\u5206\u986f\u793a\u5c0f\u5de5\u5177\u4e4b\u9593\u5207\u63db\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/canvas-view/content-clipping-toggle-button-4.17.png",mdxType:"Figure"},"\u756b\u5e03\u8996\u5716\u4e2d\u7684\u201c\u986f\u793a/\u96b1\u85cf\u4fee\u526a\u5167\u5bb9\u201d\u63a7\u5236"),(0,r.kt)("p",null,"\u5728\u4e0b\u5716\u4e2d\uff0c\u6709\u4e00\u500b\u4e00\u534a\u4f4d\u65bc\u87a2\u5e55\u908a\u754c\u4e4b\u5916\u7684\u65b9\u6846\uff0c\u7576\u5167\u5bb9\u4fee\u526a\u63a7\u5236\u8a2d\u7f6e\u70ba\u986f\u793a\u4fee\u526a\u904e\u7684\u5c0f\u5de5\u5177\u6642\uff0c\u65b9\u6846\u5c07\u4e0d\u5b8c\u5168\u986f\u793a\uff0c\u800c\u662f\u5c07\u908a\u754c\u4e4b\u5916\u7684\u90e8\u5206\u53bb\u98fd\u548c\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/canvas-view/clipped-content-4.17.png",mdxType:"Figure"},"\u986f\u793a\u548c\u96b1\u85cf\u4fee\u526a\u5167\u5bb9\u6642\u65b9\u6846\u5c0f\u5de5\u5177\u7684\u5916\u89c0\u5b58\u5728\u5dee\u7570"),(0,r.kt)("h3",g({},{id:"history-controls"}),"\u6b77\u53f2\u63a7\u5236\u9805"),(0,r.kt)("p",null,"\u901a\u904e",(0,r.kt)("a",g({parentName:"p"},{href:"file-menu"}),"File Menu"),"\u4e2d\u7684",(0,r.kt)("a",g({parentName:"p"},{href:"file-menu#edit"}),"Edit"),"\u529f\u80fd\uff0c\u53ef\u4ee5\u5c07\u5728\u756b\u5e03\u4e0a\u57f7\u884c\u7684\u4fee\u6539\u6b77\u53f2\u64a4\u92b7\u548c\u91cd\u505a\u3002",(0,r.kt)("br",null),"\u7cfb\u7d71\u8a18\u9304\u4e86\u6bcf\u500b\u87a2\u5e55\u548c\u81ea\u8a02\u5bb9\u5668\u7684\u6b77\u53f2\uff0c\u70ba\u4e86\u64a4\u92b7\u6216\u91cd\u505a\u5728\u7279\u5b9a\u87a2\u5e55\u4e0a\u57f7\u884c\u7684\u4fee\u6539\uff0c\u8a72\u7279\u5b9a\u87a2\u5e55\u5fc5\u9808\u986f\u793a\u5728\u756b\u5e03\u4e0a\u3002"),(0,r.kt)("p",null,"\u6b77\u53f2\u63a7\u5236\u9805\u7684\u53e6\u4e00\u7a2e\u89f8\u767c\u65b9\u5f0f\u662f\u6309\u4e0b ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + Z")," \u548c ",(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + Y"),"."),(0,r.kt)("h3",g({},{id:"zoom-controls"}),"\u7e2e\u653e\u63a7\u5236\u9805"),(0,r.kt)("p",null,"\u756b\u5e03\u7684\u7e2e\u653e\u6c34\u6e96\u53ef\u901a\u904e\u756b\u5e03\u5e95\u90e8\u7684\u7e2e\u653e\u63a7\u5236\u9805\u9032\u884c\u63a7\u5236\u3002"),(0,r.kt)("p",null,"\u5982\u9700\u5c07\u756b\u5e03\u5c0d\u4e2d\u4e26\u6062\u5fa9\u81f3100%\u7e2e\u653e\u6bd4\u4f8b\uff0c\u9ede\u64ca\u201cReset Canvas\u201d\u6309\u9215\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/canvas-view/zoom-controls-4.17.png",mdxType:"Figure"},"\u756b\u5e03\u8996\u5716\u4e2d\u7684\u7e2e\u653e\u63a7\u5236\u9805"),(0,r.kt)("p",null,"\u9084\u53ef\u4ee5\u4f7f\u7528\u4e0b\u5217\u5feb\u901f\u9375\u57f7\u884c\u7e2e\u653e\uff1a"),(0,r.kt)("table",{"spaces-before":"0"},(0,r.kt)("tr",null,(0,r.kt)("th",null),(0,r.kt)("th",null),(0,r.kt)("th",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u7e2e\u653e\u6bd4\u4f8b25%"),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + 1")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + NUMPAD 1"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u7e2e\u653e\u6bd4\u4f8b50%"),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + 2")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + NUMPAD 2"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u7e2e\u653e\u6bd4\u4f8b75%"),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + 3")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + NUMPAD 3"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u7e2e\u653e\u6bd4\u4f8b100%"),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + 4")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + NUMPAD 4"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u653e\u5927"),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + \u6ed1\u9f20\u6efe\u8f2a\u5411\u4e0a\u6efe")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + '+'"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u7e2e\u5c0f"),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + \u6ed1\u9f20\u6efe\u8f2a\u5411\u4e0b\u6efe")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + '-'"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u91cd\u7f6e\u7e2e\u653e\u6bd4\u4f8b"),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + 0")),(0,r.kt)("td",null,(0,r.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + NUMPAD 0")))),(0,r.kt)("h2",g({},{id:"right-side-bar"}),"\u53f3\u5074\u908a\u6b04"),(0,r.kt)("p",null,"\u53f3\u5074\u7684\u5074\u908a\u6b04\u5305\u542b\u4e00\u500b\u7d22\u5f15\u6a19\u7c64\u63a7\u5236\u9805\uff0c\u53ef\u5c0e\u822a\u5230\u7576\u524d\u9078\u4e2d\u5c0f\u5de5\u5177\u7684",(0,r.kt)("a",g({parentName:"p"},{href:"#properties"}),"Properties"),"\u9078\u9805\u5361\u548c\u756b\u5e03\u4e0a\u7576\u524d\u770b\u5230\u7684\u87a2\u5e55\u6216\u81ea\u8a02\u5bb9\u5668\u7684",(0,r.kt)("a",g({parentName:"p"},{href:"#interactions"}),"Interactions"),"\u9078\u9805\u5361\u3002"),(0,r.kt)("h3",g({},{id:"properties"}),"Properties\u5c6c\u6027"),(0,r.kt)("p",null,"\u201cProperties\u201d\u9078\u9805\u5361\u5c07\u986f\u793a\u7576\u524d\u9078\u4e2d\u7684\u5c0f\u5de5\u5177/\u87a2\u5e55/\u81ea\u8a02\u5bb9\u5668\u7684\u5c6c\u6027\u3002 \u9078\u4e2d\u5143\u4ef6\u7684\u540d\u7a31\u986f\u793a\u5728\u5c6c\u6027\u6e05\u55ae\u7684\u9802\u90e8\u3002 \u540d\u7a31\u5de6\u5074\u6709\u4e00\u500b\u5716\u793a\uff0c\u5c07\u6ed1\u9f20\u61f8\u505c\u5728\u8a72\u5716\u793a\u4e0a\u6703\u986f\u793a\u63cf\u8ff0\u6027\u6587\u5b57\uff0c\u9ede\u64ca\u8a72\u5716\u793a\u5c07\u9023\u7d50\u5230\u8a72\u5143\u4ef6\u7684\u6587\u6a94\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/canvas-view/properties-tab-4.17.png",mdxType:"Figure"},"\u65b9\u6846\u5c6c\u6027"),(0,r.kt)("h3",g({},{id:"interactions"}),"Interactions\u4ea4\u4e92"),(0,r.kt)("p",null,"\u201c Interactions\u201d\u9078\u9805\u5361\u5c07\u986f\u793a\u7576\u524d\u756b\u5e03\u4e0a\u986f\u793a\u7684\u87a2\u5e55\u6216\u81ea\u8a02\u5bb9\u5668\u7684\u4ea4\u4e92\u3002"),(0,r.kt)("p",null,"\u9ede\u64ca\u201c+\u201d\u6309\u9215\u53ef\u6dfb\u52a0\u4ea4\u4e92\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/ui-development/designer-user-guide/canvas-view/interactions-tab-4.17.png",mdxType:"Figure"},"\u6dfb\u52a0\u4ea4\u4e92"),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(i.Z,{to:"interactions-view",mdxType:"Link"},"\u4ea4\u4e92"))))}T.isMDXComponent=!0}}]);