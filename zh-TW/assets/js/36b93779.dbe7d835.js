(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1099],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,h=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(h,a(a({ref:t},s),{},{components:r})):n.createElement(h,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88678:function(e,t,r){"use strict";var n=r(67294);class o extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{class:e},n.createElement("div",{class:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=o},93054:function(e,t,r){"use strict";var n=r(67294),o=r(88678);const i=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class a extends n.Component{render(){return n.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:i},this.props.children)}}t.Z=a},31217:function(e,t,r){"use strict";r.d(t,{Z:function(){return k}});var n=r(67294),o=r(73727),i=r(11368),a=r(35096),l=r(84487);const u=(0,n.createContext)({collectLink:()=>{}});var c=r(25026),s=r(67023),p=Object.defineProperty,d=Object.defineProperties,f=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,b=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&b(e,r,t[r]);if(h)for(var r of h(t))v.call(t,r)&&b(e,r,t[r]);return e};var k=function(e){var t,r=e,{isNavLink:p,to:b,href:k,activeClassName:y,isActive:O,"data-noBrokenLinkCheck":w,autoAddBaseUrl:P=!0}=r,j=((e,t)=>{var r={};for(var n in e)m.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&h)for(var n of h(e))t.indexOf(n)<0&&v.call(e,n)&&(r[n]=e[n]);return r})(r,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:C}}=(0,i.Z)(),{withBaseUrl:T}=(0,c.C)(),x=(0,n.useContext)(u),E=b||k,N=(0,a.Z)(E),M=null==E?void 0:E.replace("pathname://","");let S=void 0!==M?(_=M,P&&(e=>e.startsWith("/"))(_)?T(_):_):void 0;var _;S&&N&&(S=(0,s.applyTrailingSlash)(S,C));const Z=(0,n.useRef)(!1),D=p?o.OL:o.rU,U=l.Z.canUseIntersectionObserver;let W;(0,n.useEffect)((()=>(!U&&N&&null!=S&&window.docusaurus.prefetch(S),()=>{U&&W&&W.disconnect()})),[S,U,N]);const A=null!==(t=null==S?void 0:S.startsWith("#"))&&void 0!==t&&t,L=!S||!N||A;return S&&N&&!A&&!w&&x.collectLink(S),L?n.createElement("a",g(g({href:S},E&&!N&&{target:"_blank",rel:"noopener noreferrer"}),j)):n.createElement(D,g((I=g({},j),d(I,f({onMouseEnter:()=>{Z.current||null==S||(window.docusaurus.preload(S),Z.current=!0)},innerRef:e=>{var t,r;U&&e&&N&&(t=e,r=()=>{null!=S&&window.docusaurus.prefetch(S)},W=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(W.unobserve(t),W.disconnect(),r())}))})),W.observe(t))},to:S||""}))),p&&{isActive:O,activeClassName:y}));var I}},35096:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},25026:function(e,t,r){"use strict";r.d(t,{C:function(){return i},Z:function(){return a}});var n=r(11368),o=r(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(n)return t+r;const a=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+a:a}(t,e,r,n)}}function a(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[r]=e.split(/[#?]/),n="/"===r?"/":(o=r,t?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(r,n)}},67023:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=r(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(o).default}});var i=r(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(i).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},58895:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return h},contentTitle:function(){return m},metadata:function(){return v},toc:function(){return b},default:function(){return k}});var n=r(3905),o=r(31217),i=r(93054),a=Object.defineProperty,l=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&d(e,r,t[r]);if(c)for(var r of c(t))p.call(t,r)&&d(e,r,t[r]);return e};const h={id:"11-flash-loader",title:"11. \u5feb\u9583\u8a18\u61b6\u9ad4\u4e0b\u8f09",sidebar_label:"11. \u5feb\u9583\u8a18\u61b6\u9ad4\u4e0b\u8f09"},m=void 0,v={unversionedId:"development/board-bring-up/how-to/11-flash-loader",id:"development/board-bring-up/how-to/11-flash-loader",isDocsHomePage:!1,title:"11. \u5feb\u9583\u8a18\u61b6\u9ad4\u4e0b\u8f09",description:"\u52d5\u6a5f",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/11-flash-loader.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/11-flash-loader",permalink:"/4.17/zh-TW/docs/development/board-bring-up/how-to/11-flash-loader",version:"current",sidebarPosition:11,frontMatter:{id:"11-flash-loader",title:"11. \u5feb\u9583\u8a18\u61b6\u9ad4\u4e0b\u8f09",sidebar_label:"11. \u5feb\u9583\u8a18\u61b6\u9ad4\u4e0b\u8f09"},sidebar:"docs",previous:{title:"10. \u6309\u9215",permalink:"/4.17/zh-TW/docs/development/board-bring-up/how-to/10-physical-buttons"},next:{title:"TouchGFX AL \u958b\u767c\u7c21\u4ecb",permalink:"/4.17/zh-TW/docs/development/touchgfx-hal-development/touchgfx-al-development-introduction"}},b=[{value:"\u52d5\u6a5f",id:"motivation",children:[]},{value:"\u76ee\u6a19",id:"goal",children:[{value:"\u9a57\u8b49",id:"verification",children:[]}]},{value:"\u5148\u6c7a\u689d\u4ef6",id:"prerequisites",children:[]},{value:"\u57f7\u884c",id:"do",children:[{value:"STM32CubeProgrammer\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u8edf\u9ad4",id:"flash-loader-for-stm32cubeprogrammer",children:[]},{value:"\u57fa\u65bc\u61c9\u7528\u7a0b\u5f0f\u7684\u5c08\u6709\u89e3\u6c7a\u65b9\u6848",id:"proprietary-application-based-solution",children:[]},{value:"\u6e2c\u8a66",id:"testing",children:[]}]}],g={toc:b};function k(e){var t,r=e,{components:a}=r,d=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},g),d),l(t,u({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h2",f({},{id:"motivation"}),"\u52d5\u6a5f"),(0,n.kt)("p",null,"\u5728\u8a72\u6b65\u9a5f\u4e2d\uff0c\u6211\u5011\u5c07\u8a0e\u8ad6\u5982\u4f55\u628a\u6578\u64da\u8f09\u5165\u5230\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u3002  \u7de8\u8b6f\u5668\u5c07\u7de8\u8b6f\u5c08\u6848\u4e2d\u7684\u6587\u5b57\u3001\u5b57\u9ad4\u548c\u5716\u50cf\uff0c\u4e26\u5c07\u9019\u4e9b\u6578\u64da\u751f\u6210\u4e8c\u9032\u4f4d\u6216\u5341\u516d\u9032\u4f4d\u6a94\u3002 \u6b64\u6578\u64da\u901a\u5e38\u88ab\u653e\u5165\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u3002 \u5167\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u88ab\u4fdd\u7559\u7528\u65bc\u7a0b\u5f0f\u4ee3\u78bc\u3002"),(0,n.kt)("p",null,"\u5728\u958b\u767c\u904e\u7a0b\u4e2d\uff0c\u6211\u5011\u9700\u8981\u4e00\u7a2e\u65b9\u6cd5\u5c07\u8cc7\u6599\u5beb\u5165\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\uff0c\u4f46\u5f9e\u57f7\u884c\u5feb\u9583\u8a18\u61b6\u9ad4\u8b80\u53d6\u8cc7\u6599\u7684\u7a0b\u5f0f\u6642\u5c31\u6c92\u5fc5\u8981\u505a\u5beb\u5165\u64cd\u4f5c\u3002"),(0,n.kt)("p",null,"\u5169\u7a2e\u5c07\u8cc7\u6599\u5beb\u5165\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u5e38\u898b\u65b9\u6cd5\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u70baSTM32CubeProgrammer\u64b0\u5beb\u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u8edf\u9ad4"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u57fa\u65bc\u61c9\u7528\u7a0b\u5f0f\u7684\u5c08\u6709\u89e3\u6c7a\u65b9\u6848")),(0,n.kt)(i.Z,{mdxType:"Note"},"\u5982\u679c\u60a8\u7684\u958b\u767c\u677f\u6c92\u6709\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\uff0c\u8acb\u8df3\u904e\u6b64\u6b65\u9a5f"),(0,n.kt)("h2",f({},{id:"goal"}),"\u76ee\u6a19"),(0,n.kt)("p",null,"\u672c\u7bc0\u7684\u76ee\u7684\u70ba\u9078\u64c7\u4e26\u958b\u767c\u4e00\u7a2e\u5c07\u6578\u64da\u8f09\u5165\u5230\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u6a5f\u5236\u3002"),(0,n.kt)("h3",f({},{id:"verification"}),"\u9a57\u8b49"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u662f\u672c\u7bc0\u7684\u9a57\u8b49\u9ede\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:null}),"\u9a57\u8b49\u9ede"),(0,n.kt)("th",f({parentName:"tr"},{align:null}),"\u57fa\u672c\u539f\u7406"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"\u6578\u64da\u53ef\u4ee5\u5237\u5165"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),"\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u53ef\u7528\u65bc\u5f71\u50cf\u5b58\u5132")))),(0,n.kt)("h2",f({},{id:"prerequisites"}),"\u5148\u6c7a\u689d\u4ef6"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u662f\u6b64\u6b65\u9a5f\u7684\u5148\u6c7a\u689d\u4ef6\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6709\u95dc\u5feb\u9583\u8a18\u61b6\u9ad4\u7684\u8cc7\u8a0a\uff0c\u67e5\u95b1\u8cc7\u6599\u624b\u518a"),(0,n.kt)("li",{parentName:"ul"},"\u95dc\u65bcMCU\u8207\u5916\u90e8\u5feb\u9583\u8a18\u61b6\u9ad4\u4e4b\u9593\u7684\u9023\u63a5\u7684\u8cc7\u8a0a")),(0,n.kt)("h2",f({},{id:"do"}),"\u57f7\u884c"),(0,n.kt)("h3",f({},{id:"flash-loader-for-stm32cubeprogrammer"}),"STM32CubeProgrammer\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u8edf\u9ad4"),(0,n.kt)(o.Z,{target:"_blank",to:"https://www.st.com/en/development-tools/stm32cubeprog.html",mdxType:"Link"},"STM32CubeProgrammer"),"\u5e36\u6709\u7528\u65bc\u5404\u7a2eSTM32\u8a55\u4f30\u5957\u4ef6\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u7a0b\u5f0f\u3002 \u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u8edf\u9ad4\u662f\u53ef\u88dd\u8f09\u5230MCU\u7684RAM\u4e2d\u7684\u5c0f\u7a0b\u5f0f\uff0c\u4ee5\u4fbf\u5c0d\u5feb\u9583\u8a18\u61b6\u9ad4\u9032\u884c\u7a0b\u5f0f\u8a2d\u8a08\u3002",(0,n.kt)("p",null,"The flash loader consists of two parts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Configuration of the GPIOs and flash interface that are required to communicate with the flash"),(0,n.kt)("li",{parentName:"ul"},"The flashing algorithm that knows the sequence of commands required to write in the flash")),(0,n.kt)("p",null,"\u9019\u4e9b\u901a\u5e38\u57fa\u65bc\u73fe\u6709\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u88dd\u8f09\u7a0b\u5f0f\u3002 \u5982\u679c\u60a8\u53ef\u4ee5\u70ba\u6b63\u5728\u4f7f\u7528\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u627e\u5230\u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u8edf\u9ad4\uff0c\u6700\u597d\u4ee5\u8a72\u8edf\u9ad4\u4f5c\u70ba\u57fa\u790e\u4e26\u4fee\u6539GPIO\u90e8\u5206\u3002 \u5982\u679c\u60a8\u901a\u904e\u8907\u88fd\u8a55\u4f30\u5957\u4ef6\u4e2d\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u96fb\u8def\u4f86\u8a2d\u8a08\u786c\u9ad4\uff0c\u5247\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u8a72\u5957\u4ef6\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u88dd\u8f09\u8edf\u9ad4\u3002 \u9019\u4e5f\u662f\u63a8\u85a6\u65b9\u6cd5\u3002"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"STM32CubeProgrammer"),"\u96a8\u9644\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u8edf\u9ad4\u5c08\u6848\u4f4d\u65bc\u5b89\u88dd\u8cc7\u6599\u593e\u4e2d\uff0c\u5176\u8def\u5f91\u901a\u5e38\u70ba\uff1a",(0,n.kt)("em",{parentName:"p"},"C:\\Program Files\\STMicroelectronics\\STM32Cube\\STM32CubeProgrammer\\bin\\ExternalLoader")),(0,n.kt)("p",null,"\u63d0\u4f9b\u4e00\u4e9b\u4f5c\u70baIAR Embedded Workbench\uff0cKeil\u8207TrueStudio\u7684\u539f\u59cb\u78bc\u5c08\u6848\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u8edf\u9ad4\u3002"),(0,n.kt)("h3",f({},{id:"proprietary-application-based-solution"}),"\u57fa\u65bc\u61c9\u7528\u7a0b\u5f0f\u7684\u5c08\u6709\u89e3\u6c7a\u65b9\u6848"),(0,n.kt)("p",null,"\u53e6\u4e00\u7a2e\u89e3\u6c7a\u65b9\u6848\u662f\u5c07\u5feb\u9583\u8a18\u61b6\u9ad4\u8f09\u5165\u7a0b\u5f0f\u78bc\u5305\u542b\u5230\u61c9\u7528\u7a0b\u5f0f\u672c\u8eab\u3002 \u8a72\u7406\u5ff5\u662f\uff0c\u60a8\u7684\u61c9\u7528\u7a0b\u5f0f\u4e2d\u5df2\u5b58\u5728\u5feb\u9583\u8a18\u61b6\u9ad4\u914d\u7f6e\uff08\u4ee5\u4fbf\u53ef\u4ee5\u5f9e\u5176\u8f09\u5165\uff09\uff0c\u4e5f\u8a31\u60a8\u901a\u904e\u4e4b\u524d\u7684\u6e2c\u8a66\u5df2\u7d93\u77e5\u9053\u5982\u4f55\u5beb\u4e00\u584a\u4ee3\u78bc\u5230\u5feb\u9583\u8a18\u61b6\u9ad4\u4e2d\u3002 \u7136\u5f8c\uff0c\u60a8\u53ea\u9700\u4e00\u7a2e\u5c07\u65b0\u7684\u5feb\u9583\u8a18\u61b6\u9ad4\u6578\u64da\u50b3\u8f38\u5230\u60a8\u7684\u61c9\u7528\u7a0b\u5f0f\u7684\u65b9\u6cd5\u3002 \u4e00\u7a2e\u65b9\u6cd5\u662f\u900f\u904eUART\u3002 \u61c9\u7528\u7a0b\u5f0f\u63a5\u6536\u6578\u64da\u6d41\uff0c\u4e26\u5c07\u6578\u64da\u9010\u584a\u5beb\u5165\u5feb\u9583\u8a18\u61b6\u9ad4\u3002"),(0,n.kt)("p",null,"\u5728\u8a72\u64cd\u4f5c\u57f7\u884c\u671f\u9593\uff0c\u5feb\u9583\u8a18\u61b6\u9ad4\u7121\u6cd5\u8655\u65bc\u8a18\u61b6\u9ad4\u6620\u5c04\u6a21\u5f0f\uff0c\u56e0\u6b64\u901a\u5e38\u5fc5\u9808\u5c07\u61c9\u7528\u7a0b\u5f0f\u7f6e\u65bc\u7279\u6b8a\u6a21\u5f0f\u3002"),(0,n.kt)("p",null,"\u53ef\u5728\u7db2\u8def\u627e\u5230\u7528\u65bc\u4f4d\u5143\u7d44\u50b3\u8f38\u7684\u958b\u6e90\u89e3\u6c7a\u65b9\u6848\u3002 \u4f8b\u5982\uff0cY-modem\u5354\u5b9a\u5728\u8cc7\u6599\u4e0a\u63d0\u4f9b16\u4f4d\u5143 CRC\u3002"),(0,n.kt)("h3",f({},{id:"testing"}),"\u6e2c\u8a66"),(0,n.kt)("p",null,"\u5728\u6578\u64da\u5df2\u5beb\u5165\u5feb\u9583\u8a18\u61b6\u9ad4\u5f8c\uff0c\u6e2c\u8a66\u662f\u5426\u53ef\u4ee5\u6b63\u78ba\u8b80\u53d6\u3002 \u4f7f\u7528\u5728\u524d\u5e7e\u7bc0\u4e2d\u958b\u767c\u7684\u5c0f\u578b\u6e2c\u8a66\u7a0b\u5f0f\u3002"),(0,n.kt)("p",null,"\u5efa\u8b70\u7acb\u5373\u5fb9\u5e95\u6e2c\u8a66\u6574\u500b\u5feb\u9583\u8a18\u61b6\u9ad4\uff0c\u4ee5\u5118\u65e9\u767c\u73fe\u53ef\u80fd\u5b58\u5728\u7684\u554f\u984c\u3002"))}k.isMDXComponent=!0}}]);