(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[813],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return s},kt:function(){return _}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),u=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),d=u(n),_=r,k=d["".concat(o,".").concat(_)]||d[_]||p[_]||l;return n?a.createElement(k,i(i({ref:e},s),{},{components:n})):a.createElement(k,i({ref:e},s))}));function _(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=t,c.mdxType="string"==typeof t?t:r,i[1]=c;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43861:function(t,e,n){"use strict";var a=n(67294);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},31217:function(t,e,n){"use strict";n.d(e,{Z:function(){return g}});var a=n(67294),r=n(73727),l=n(11368),i=n(35096),c=n(84487);const o=(0,a.createContext)({collectLink:()=>{}});var u=n(25026),s=n(67023),p=Object.defineProperty,d=Object.defineProperties,_=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,h=(t,e,n)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,b=(t,e)=>{for(var n in e||(e={}))m.call(e,n)&&h(t,n,e[n]);if(k)for(var n of k(e))f.call(e,n)&&h(t,n,e[n]);return t};var g=function(t){var e,n=t,{isNavLink:p,to:h,href:g,activeClassName:v,isActive:N,"data-noBrokenLinkCheck":y,autoAddBaseUrl:x=!0}=n,w=((t,e)=>{var n={};for(var a in t)m.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&k)for(var a of k(t))e.indexOf(a)<0&&f.call(t,a)&&(n[a]=t[a]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O}}=(0,l.Z)(),{withBaseUrl:T}=(0,u.C)(),j=(0,a.useContext)(o),C=h||g,P=(0,i.Z)(C),D=null==C?void 0:C.replace("pathname://","");let E=void 0!==D?(Z=D,x&&(t=>t.startsWith("/"))(Z)?T(Z):Z):void 0;var Z;E&&P&&(E=(0,s.applyTrailingSlash)(E,O));const L=(0,a.useRef)(!1),A=p?r.OL:r.rU,G=c.Z.canUseIntersectionObserver;let S;(0,a.useEffect)((()=>(!G&&P&&null!=E&&window.docusaurus.prefetch(E),()=>{G&&S&&S.disconnect()})),[E,G,P]);const B=null!==(e=null==E?void 0:E.startsWith("#"))&&void 0!==e&&e,M=!E||!P||B;return E&&P&&!B&&!y&&j.collectLink(E),M?a.createElement("a",b(b({href:E},C&&!P&&{target:"_blank",rel:"noopener noreferrer"}),w)):a.createElement(A,b((F=b({},w),d(F,_({onMouseEnter:()=>{L.current||null==E||(window.docusaurus.preload(E),L.current=!0)},innerRef:t=>{var e,n;G&&t&&P&&(e=t,n=()=>{null!=E&&window.docusaurus.prefetch(E)},S=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(S.unobserve(e),S.disconnect(),n())}))})),S.observe(e))},to:E||""}))),p&&{isActive:N,activeClassName:v}));var F}},35096:function(t,e,n){"use strict";function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!a(t)}n.d(e,{b:function(){return a},Z:function(){return r}})},25026:function(t,e,n){"use strict";n.d(e,{C:function(){return l},Z:function(){return i}});var a=n(11368),r=n(35096);function l(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(t,e,n,{forcePrependBaseUrl:a=!1,absolute:l=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return e+n;const i=n.startsWith(e)?n:e+n.replace(/^\//,"");return l?t+i:i}(e,t,n,a)}}function i(t,e={}){const{withBaseUrl:n}=l();return n(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(t.startsWith("#"))return t;if(void 0===e)return t;const[n]=t.split(/[#?]/),a="/"===n?"/":(r=n,e?function(t){return t.endsWith("/")?t:`${t}/`}(r):function(t){return t.endsWith("/")?t.slice(0,-1):t}(r));var r;return t.replace(n,a)}},67023:function(t,e,n){"use strict";var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=n(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var l=n(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return a(l).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},55107:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return k},contentTitle:function(){return m},metadata:function(){return f},toc:function(){return h},default:function(){return g}});var a=n(3905),r=n(31217),l=n(43861),i=Object.defineProperty,c=Object.defineProperties,o=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,_=(t,e)=>{for(var n in e||(e={}))s.call(e,n)&&d(t,n,e[n]);if(u)for(var n of u(e))p.call(e,n)&&d(t,n,e[n]);return t};const k={title:"GenericCallback<T1,T2,void>"},m=void 0,f={unversionedId:"api/classes/classtouchgfx_1_1_generic_callback_3_01_t1_00_01_t2_00_01void_01_4",id:"api/classes/classtouchgfx_1_1_generic_callback_3_01_t1_00_01_t2_00_01void_01_4",isDocsHomePage:!1,title:"GenericCallback<T1,T2,void>",description:"GenericCallback is the base class for callbacks.",source:"@site/docs/api/classes/classtouchgfx_1_1_generic_callback_3_01_t1_00_01_t2_00_01void_01_4.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_generic_callback_3_01_t1_00_01_t2_00_01void_01_4",permalink:"/4.17/ja/docs/api/classes/classtouchgfx_1_1_generic_callback_3_01_t1_00_01_t2_00_01void_01_4",version:"current",frontMatter:{title:"GenericCallback<T1,T2,void>"},sidebar:"docs",previous:{title:"GenericCallback",permalink:"/4.17/ja/docs/api/classes/classtouchgfx_1_1_generic_callback"},next:{title:"GenericCallback<T1,void,void>",permalink:"/4.17/ja/docs/api/classes/classtouchgfx_1_1_generic_callback_3_01_t1_00_01void_00_01void_01_4"}},h=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"execute",id:"execute",children:[]},{value:"isValid",id:"isvalid",children:[]},{value:"~GenericCallback",id:"genericcallback",children:[]}]}],b={toc:h};function g(t){var e,n=t,{components:i}=n,d=((t,e)=>{var n={};for(var a in t)s.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&u)for(var a of u(t))e.indexOf(a)<0&&p.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=_(_({},b),d),c(e,o({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null," ",(0,a.kt)("a",_({parentName:"p"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback")," is the base class for callbacks.\nThe reason this base class exists, is that a normal ",(0,a.kt)("a",_({parentName:"p"},{href:"structtouchgfx_1_1_callback"}),"Callback")," requires the class type where the callback function resides to be known. This is problematic for ie. framework widgets like ",(0,a.kt)("a",_({parentName:"p"},{href:"classtouchgfx_1_1_abstract_button"}),"AbstractButton"),", on which it should be possible to register a callback on object types that are user-specific and thus unknown to ",(0,a.kt)("a",_({parentName:"p"},{href:"classtouchgfx_1_1_abstract_button"}),"AbstractButton"),". This is solved by having ",(0,a.kt)("a",_({parentName:"p"},{href:"classtouchgfx_1_1_abstract_button"}),"AbstractButton")," contain a pointer to a ",(0,a.kt)("a",_({parentName:"p"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback")," instead. This pointer must then be initialized to point on an instance of ",(0,a.kt)("a",_({parentName:"p"},{href:"structtouchgfx_1_1_callback"}),"Callback"),", created by the user, which is initialized with the appropriate object type."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Template Parameters"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"T1")," The type of the first argument in the member function, or void if none. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"T2")," The type of the second argument in the member function, or void if none.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See"),": ",(0,a.kt)("a",_({parentName:"p"},{href:"structtouchgfx_1_1_callback"}),"Callback")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": As with ",(0,a.kt)("a",_({parentName:"p"},{href:"structtouchgfx_1_1_callback"}),"Callback"),", this class exists in four versions to support callback functions taking zero, one, two or three arguments. "),(0,a.kt)("h2",_({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",_({parentName:"tr"},{align:"right"})),(0,a.kt)("th",_({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",_({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_generic_callback_3_01_t1_00_01_t2_00_01void_01_4#function-execute",mdxType:"Link"},"execute")),"(T1 val1, T2 val2) =0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:"right"})),(0,a.kt)("td",_({parentName:"tr"},{align:null}),"Calls the member function.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:"right"})),(0,a.kt)("td",_({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),(0,a.kt)("td",_({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_generic_callback_3_01_t1_00_01_t2_00_01void_01_4#function-isvalid",mdxType:"Link"},"isValid")),"() const =0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:"right"})),(0,a.kt)("td",_({parentName:"tr"},{align:null}),"Function to check whether the ",(0,a.kt)("a",_({parentName:"td"},{href:"structtouchgfx_1_1_callback"}),"Callback")," has been initialized with values.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:"right"})),(0,a.kt)("td",_({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,a.kt)("td",_({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_generic_callback_3_01_t1_00_01_t2_00_01void_01_4#function-~genericcallback",mdxType:"Link"},"~GenericCallback")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:"right"})),(0,a.kt)("td",_({parentName:"tr"},{align:null}),"Finalizes an instance of the void",">"," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:"right"})),(0,a.kt)("td",_({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",_({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_generic_callback_3_01_t1_00_01_t2_00_01void_01_4#function-execute",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",_({},{id:"execute"}),"execute"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_generic_callback_3_01_t1_00_01_t2_00_01void_01_4#function-execute",mdxType:"Link"},"execute")),(0,a.kt)("td",_({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",_({parentName:"tr"},{align:null}),"T1"),(0,a.kt)("td",_({parentName:"tr"},{align:null}),"val1 ,"),(0,a.kt)("td",_({parentName:"tr"},{align:null})),(0,a.kt)("td",_({parentName:"tr"},{align:null}),"=0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:null})),(0,a.kt)("td",_({parentName:"tr"},{align:null})),(0,a.kt)("td",_({parentName:"tr"},{align:null}),"T2"),(0,a.kt)("td",_({parentName:"tr"},{align:null}),"val2"),(0,a.kt)("td",_({parentName:"tr"},{align:null})),(0,a.kt)("td",_({parentName:"tr"},{align:null}),"=0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:null})),(0,a.kt)("td",_({parentName:"tr"},{align:null})),(0,a.kt)("td",_({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",_({parentName:"tr"},{align:null}),"=0"),(0,a.kt)("td",_({parentName:"tr"},{align:null})),(0,a.kt)("td",_({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Calls the member function. "),(0,a.kt)("p",null,"Do not call execute unless ",(0,a.kt)("a",_({parentName:"p"},{href:"classtouchgfx_1_1_generic_callback_3_01_t1_00_01_t2_00_01void_01_4#function-isvalid"}),"isValid()")," returns true (ie. a pointer to the object and the function has been set)."),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:null}),"val1"),(0,a.kt)("td",_({parentName:"tr"},{align:null}),"This value will be passed as the first argument in the function call.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:null}),"val2"),(0,a.kt)("td",_({parentName:"tr"},{align:null}),"This value will be passed as the second argument in the function call."))))))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_generic_callback_3_01_t1_00_01_t2_00_01void_01_4#function-isvalid",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",_({},{id:"isvalid"}),"isValid"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_generic_callback_3_01_t1_00_01_t2_00_01void_01_4#function-isvalid",mdxType:"Link"},"isValid")),(0,a.kt)("td",_({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",_({parentName:"tr"},{align:null})),(0,a.kt)("td",_({parentName:"tr"},{align:null})),(0,a.kt)("td",_({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",_({parentName:"tr"},{align:null}),"const =0"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Function to check whether the ",(0,a.kt)("a",_({parentName:"p"},{href:"structtouchgfx_1_1_callback"}),"Callback")," has been initialized with values. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"true If the callback is valid (i.e. safe to call execute). ")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_generic_callback_3_01_t1_00_01_t2_00_01void_01_4#function-~genericcallback",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",_({},{id:"genericcallback"}),"~GenericCallback"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:null}),"virtual","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_generic_callback_3_01_t1_00_01_t2_00_01void_01_4#function-~genericcallback",mdxType:"Link"},"~GenericCallback")),(0,a.kt)("td",_({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",_({parentName:"tr"},{align:null})),(0,a.kt)("td",_({parentName:"tr"},{align:null})),(0,a.kt)("td",_({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",_({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Finalizes an instance of the void",">"," class. "))))}g.isMDXComponent=!0}}]);