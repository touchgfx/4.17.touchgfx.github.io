(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4387],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,m=p["".concat(u,".").concat(d)]||p[d]||f[d]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},44035:function(e,t,r){"use strict";var n=r(67294),o=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:r,height:i,src:a})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:r,height:i,src:a})),n.createElement("p",null,e.children))}},31217:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var n=r(67294),o=r(73727),i=r(11368),a=r(35096),c=r(84487);const u=(0,n.createContext)({collectLink:()=>{}});var l=r(25026),s=r(67023),f=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,v=(e,t,r)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&v(e,r,t[r]);if(m)for(var r of m(t))b.call(t,r)&&v(e,r,t[r]);return e};var y=function(e){var t,r=e,{isNavLink:f,to:v,href:y,activeClassName:w,isActive:O,"data-noBrokenLinkCheck":k,autoAddBaseUrl:T=!0}=r,j=((e,t)=>{var r={};for(var n in e)h.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&m)for(var n of m(e))t.indexOf(n)<0&&b.call(e,n)&&(r[n]=e[n]);return r})(r,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:P}}=(0,i.Z)(),{withBaseUrl:E}=(0,l.C)(),x=(0,n.useContext)(u),C=v||y,N=(0,a.Z)(C),_=null==C?void 0:C.replace("pathname://","");let X=void 0!==_?(G=_,T&&(e=>e.startsWith("/"))(G)?E(G):G):void 0;var G;X&&N&&(X=(0,s.applyTrailingSlash)(X,P));const S=(0,n.useRef)(!1),F=f?o.OL:o.rU,W=c.Z.canUseIntersectionObserver;let D;(0,n.useEffect)((()=>(!W&&N&&null!=X&&window.docusaurus.prefetch(X),()=>{W&&D&&D.disconnect()})),[X,W,N]);const U=null!==(t=null==X?void 0:X.startsWith("#"))&&void 0!==t&&t,Z=!X||!N||U;return X&&N&&!U&&!k&&x.collectLink(X),Z?n.createElement("a",g(g({href:X},C&&!N&&{target:"_blank",rel:"noopener noreferrer"}),j)):n.createElement(F,g((M=g({},j),p(M,d({onMouseEnter:()=>{S.current||null==X||(window.docusaurus.preload(X),S.current=!0)},innerRef:e=>{var t,r;W&&e&&N&&(t=e,r=()=>{null!=X&&window.docusaurus.prefetch(X)},D=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.unobserve(t),D.disconnect(),r())}))})),D.observe(t))},to:X||""}))),f&&{isActive:O,activeClassName:w}));var M}},35096:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},25026:function(e,t,r){"use strict";r.d(t,{C:function(){return i},Z:function(){return a}});var n=r(11368),o=r(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(n)return t+r;const a=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+a:a}(t,e,r,n)}}function a(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[r]=e.split(/[#?]/),n="/"===r?"/":(o=r,t?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(r,n)}},67023:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=r(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(o).default}});var i=r(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(i).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},44098:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return m},contentTitle:function(){return h},metadata:function(){return b},toc:function(){return v},default:function(){return y}});var n=r(3905),o=r(31217),i=r(44035),a=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))f.call(t,r)&&p(e,r,t[r]);return e};const m={id:"welcome",title:"TouchGFX\u6587\u4ef6",sidebar_label:"Welcome",description:"The documentation site for TouchGFX - a user-friendly graphical C++ tool for creating powerful embedded touch applications."},h=void 0,b={unversionedId:"introduction/welcome",id:"introduction/welcome",isDocsHomePage:!1,title:"TouchGFX\u6587\u4ef6",description:"The documentation site for TouchGFX - a user-friendly graphical C++ tool for creating powerful embedded touch applications.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/introduction/welcome.mdx",sourceDirName:"introduction",slug:"/introduction/welcome",permalink:"/4.17/zh-TW/docs/introduction/welcome",version:"current",frontMatter:{id:"welcome",title:"TouchGFX\u6587\u4ef6",sidebar_label:"Welcome",description:"The documentation site for TouchGFX - a user-friendly graphical C++ tool for creating powerful embedded touch applications."},sidebar:"docs",next:{title:"\u4ec0\u9ebc\u662fTouchGFX\uff1f",permalink:"/4.17/zh-TW/docs/introduction/what-is-touchgfx"}},v=[{value:"\u95dc\u65bc\u672c\u6587\u4ef6",id:"about-this-documentation",children:[{value:"\u76ee\u6a19\u4f7f\u7528\u8005",id:"target-user",children:[]}]}],g={toc:v};function y(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&f.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},g),p),c(t,u({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u6b61\u8fce\u4f7f\u7528TouchGFX\u7684\u5b98\u65b9\u6587\u4ef6\uff01"),(0,n.kt)(i.Z,{imageSource:"/img/introduction/welcome/frontpage-4.17.png",noShadow:"true",mdxType:"Figure"}),(0,n.kt)("p",null,"\u5982\u679c\u60a8\u662f\u672c\u6587\u4ef6\u6216TouchGFX\u7684\u65b0\u4f7f\u7528\u8005\uff0c\u6211\u5011\u5efa\u8b70\u60a8\u900f\u904e\u95b1\u8b80\u672c\u6587\u4ef6\u4f86\u5927\u6982\u4e86\u89e3\u6587\u4e2d\u5167\u5bb9\u3002 \u5074\u908a\u6b04\u4e2d\u7684\u76ee\u9304\u4f7f\u60a8\u53ef\u4ee5\u8f15\u9b06\u5b58\u53d6\u6587\u4e2d\u611f\u8208\u8da3\u7684\u4e3b\u984c\u3002 \u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528\u641c\u5c0b\u529f\u80fd\u3002"),(0,n.kt)("h2",d({},{id:"about-this-documentation"}),"\u95dc\u65bc\u672c\u6587\u4ef6"),(0,n.kt)("p",null,"\u672c\u7db2\u7ad9\u7684\u4e3b\u8981\u6587\u4ef6\u5206\u70ba\u4ee5\u4e0b\u90e8\u5206\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"what-is-touchgfx"}),(0,n.kt)("strong",{parentName:"a"},"\u7c21\u4ecb"))," - \u95b1\u8b80\u6709\u95dcTouchGFX\u7684\u57fa\u790e\u8cc7\u8a0a\u548c\u5b89\u88dd\u6307\u5357\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"../basic-concepts/embedded-graphics"}),(0,n.kt)("strong",{parentName:"a"},"\u57fa\u672c\u6982\u5ff5"))," - \u4ecb\u7d39\u95dc\u9375\u5716\u5f62\u6982\u5ff5\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"../development/development-introduction"}),(0,n.kt)("strong",{parentName:"a"},"\u958b\u767c"))," - \u5982\u4f55\u958b\u767cTouchGFX\u61c9\u7528\uff0c\u5305\u62ec\u7d50\u69cb\u3001\u5de5\u4f5c\u6d41\u7a0b\u548c\u5de5\u5177\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"../tutorials/tutorial-01"}),(0,n.kt)("strong",{parentName:"a"},"\u6559\u5b78"))," - TouchGFX\u6559\u5b78\u96c6\u5408\u3002")),(0,n.kt)("h3",d({},{id:"target-user"}),"\u76ee\u6a19\u4f7f\u7528\u8005"),(0,n.kt)("p",null,"\u672cTouchGFX\u6587\u4ef6\u7684\u76ee\u6a19\u8b80\u8005\u70ba\u5728C++\u548cSTM32\u4e0a\u7684\u5d4c\u5165\u5f0fGUI\u958b\u767c\u9818\u57df\u5177\u6709\u76f8\u61c9\u57fa\u790e\u77e5\u8b58\u8207\u6280\u80fd\u7684\u8edf\u9ad4\u958b\u767c\u4eba\u54e1\u3002 \u5d4c\u5165\u5f0fGUI\u958b\u767c\u65b0\u624b\u53ef\u53c3\u95b1\u300c\u57fa\u672c\u6982\u5ff5\uff08Basic Concepts\uff09\u300d\u7ae0\u7bc0\uff0c\u540c\u6642\u6240\u6709\u7684\u958b\u767c\u8005\u90fd\u53ef\u4ee5\u5728\u5faa\u5e8f\u6f38\u9032\u5730\u7684\u6307\u5357\u548c\u6559\u5b78\u4e2d\u5f97\u5230\u6536\u7372\u4ee5\u5229GUI\u958b\u767c\u66f4\u70ba\u9806\u5229\u3002"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"\u6211\u5011\u771f\u7684\u5f88\u5e0c\u671b\u4ee5\u4efb\u4f55\u65b9\u5f0f\u6539\u9032\u6b64\u6587\u4ef6\u3002**\u5982\u679c\u60a8\u4e0d\u7406\u89e3\u67d0\u4e9b\u5167\u5bb9\uff0c\u6216\u5728\u6587\u4ef6\u4e2d\u627e\u4e0d\u5230\u60f3\u8981\u7684\u5167\u5bb9\uff0c\u8acb\u900f\u904e",(0,n.kt)(o.Z,{to:"https://community.st.com/s/topic/0TO0X0000003iw6WAA/touchgfx",target:"_blank",mdxType:"Link"},"\u8ad6\u58c7"),"\u8b93\u6211\u5011\u77e5\u9053\uff0c\u4ee5\u5e6b\u52a9\u6211\u5011\u6539\u9032\u672c\u6587\u4ef6\u3002")))}y.isMDXComponent=!0}}]);