(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[648],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return s},kt:function(){return d}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),u=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=u(t.components);return n.createElement(o.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),k=u(a),d=r,m=k["".concat(o,".").concat(d)]||k[d]||p[d]||l;return a?n.createElement(m,i(i({ref:e},s),{},{components:a})):n.createElement(m,i({ref:e},s))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=t,c.mdxType="string"==typeof t?t:r,i[1]=c;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},43861:function(t,e,a){"use strict";var n=a(67294);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},31217:function(t,e,a){"use strict";a.d(e,{Z:function(){return _}});var n=a(67294),r=a(73727),l=a(11368),i=a(35096),c=a(84487);const o=(0,n.createContext)({collectLink:()=>{}});var u=a(25026),s=a(67023),p=Object.defineProperty,k=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=(t,e,a)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,b=(t,e)=>{for(var a in e||(e={}))f.call(e,a)&&g(t,a,e[a]);if(m)for(var a of m(e))h.call(e,a)&&g(t,a,e[a]);return t};var _=function(t){var e,a=t,{isNavLink:p,to:g,href:_,activeClassName:N,isActive:v,"data-noBrokenLinkCheck":x,autoAddBaseUrl:y=!0}=a,w=((t,e)=>{var a={};for(var n in t)f.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&m)for(var n of m(t))e.indexOf(n)<0&&h.call(t,n)&&(a[n]=t[n]);return a})(a,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O}}=(0,l.Z)(),{withBaseUrl:T}=(0,u.C)(),C=(0,n.useContext)(o),j=g||_,P=(0,i.Z)(j),Z=null==j?void 0:j.replace("pathname://","");let L=void 0!==Z?(D=Z,y&&(t=>t.startsWith("/"))(D)?T(D):D):void 0;var D;L&&P&&(L=(0,s.applyTrailingSlash)(L,O));const E=(0,n.useRef)(!1),G=p?r.OL:r.rU,A=c.Z.canUseIntersectionObserver;let S;(0,n.useEffect)((()=>(!A&&P&&null!=L&&window.docusaurus.prefetch(L),()=>{A&&S&&S.disconnect()})),[L,A,P]);const B=null!==(e=null==L?void 0:L.startsWith("#"))&&void 0!==e&&e,M=!L||!P||B;return L&&P&&!B&&!x&&C.collectLink(L),M?n.createElement("a",b(b({href:L},j&&!P&&{target:"_blank",rel:"noopener noreferrer"}),w)):n.createElement(G,b((V=b({},w),k(V,d({onMouseEnter:()=>{E.current||null==L||(window.docusaurus.preload(L),E.current=!0)},innerRef:t=>{var e,a;A&&t&&P&&(e=t,a=()=>{null!=L&&window.docusaurus.prefetch(L)},S=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(S.unobserve(e),S.disconnect(),a())}))})),S.observe(e))},to:L||""}))),p&&{isActive:v,activeClassName:N}));var V}},35096:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}a.d(e,{b:function(){return n},Z:function(){return r}})},25026:function(t,e,a){"use strict";a.d(e,{C:function(){return l},Z:function(){return i}});var n=a(11368),r=a(35096);function l(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,n.Z)();return{withBaseUrl:(a,n)=>function(t,e,a,{forcePrependBaseUrl:n=!1,absolute:l=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(n)return e+a;const i=a.startsWith(e)?a:e+a.replace(/^\//,"");return l?t+i:i}(e,t,a,n)}}function i(t,e={}){const{withBaseUrl:a}=l();return a(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(t.startsWith("#"))return t;if(void 0===e)return t;const[a]=t.split(/[#?]/),n="/"===a?"/":(r=a,e?function(t){return t.endsWith("/")?t:`${t}/`}(r):function(t){return t.endsWith("/")?t.slice(0,-1):t}(r));var r;return t.replace(a,n)}},67023:function(t,e,a){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=a(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return n(r).default}});var l=a(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return n(l).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},79389:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return m},contentTitle:function(){return f},metadata:function(){return h},toc:function(){return g},default:function(){return _}});var n=a(3905),r=a(31217),l=a(43861),i=Object.defineProperty,c=Object.defineProperties,o=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,k=(t,e,a)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,d=(t,e)=>{for(var a in e||(e={}))s.call(e,a)&&k(t,a,e[a]);if(u)for(var a of u(e))p.call(e,a)&&k(t,a,e[a]);return t};const m={title:"GenericCallback"},f=void 0,h={unversionedId:"api/classes/classtouchgfx_1_1_generic_callback",id:"api/classes/classtouchgfx_1_1_generic_callback",isDocsHomePage:!1,title:"GenericCallback",description:"GenericCallback is the base class for callbacks.",source:"@site/docs/api/classes/classtouchgfx_1_1_generic_callback.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_generic_callback",permalink:"/4.17/docs/api/classes/classtouchgfx_1_1_generic_callback",version:"current",frontMatter:{title:"GenericCallback"},sidebar:"docs",previous:{title:"Gauge",permalink:"/4.17/docs/api/classes/classtouchgfx_1_1_gauge"},next:{title:"GenericCallback<T1,T2,void>",permalink:"/4.17/docs/api/classes/classtouchgfx_1_1_generic_callback_3_01_t1_00_01_t2_00_01void_01_4"}},g=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"execute",id:"execute",children:[]},{value:"isValid",id:"isvalid",children:[]},{value:"~GenericCallback",id:"genericcallback",children:[]}]}],b={toc:g};function _(t){var e,a=t,{components:i}=a,k=((t,e)=>{var a={};for(var n in t)s.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&u)for(var n of u(t))e.indexOf(n)<0&&p.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=d(d({},b),k),c(e,o({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null," GenericCallback is the base class for callbacks.\nThe reason this base class exists, is that a normal ",(0,n.kt)("a",d({parentName:"p"},{href:"structtouchgfx_1_1_callback"}),"Callback")," requires the class type where the callback function resides to be known. This is problematic for ie. framework widgets like ",(0,n.kt)("a",d({parentName:"p"},{href:"classtouchgfx_1_1_abstract_button"}),"AbstractButton"),", on which it should be possible to register a callback on object types that are user-specific and thus unknown to ",(0,n.kt)("a",d({parentName:"p"},{href:"classtouchgfx_1_1_abstract_button"}),"AbstractButton"),". This is solved by having ",(0,n.kt)("a",d({parentName:"p"},{href:"classtouchgfx_1_1_abstract_button"}),"AbstractButton")," contain a pointer to a ",(0,n.kt)("a",d({parentName:"p"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback")," instead. This pointer must then be initialized to point on an instance of ",(0,n.kt)("a",d({parentName:"p"},{href:"structtouchgfx_1_1_callback"}),"Callback"),", created by the user, which is initialized with the appropriate object type."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Template Parameters"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"T1")," The type of the first argument in the member function, or void if none. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"T2")," The type of the second argument in the member function, or void if none. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"T3")," The type of the third argument in the member function, or void if none.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"See"),": ",(0,n.kt)("a",d({parentName:"p"},{href:"structtouchgfx_1_1_callback"}),"Callback")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": As with ",(0,n.kt)("a",d({parentName:"p"},{href:"structtouchgfx_1_1_callback"}),"Callback"),", this class exists in four versions to support callback functions taking zero, one, two or three arguments. "),(0,n.kt)("h2",d({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:"right"})),(0,n.kt)("th",d({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_generic_callback#function-execute",mdxType:"Link"},"execute")),"(T1 val1, T2 val2, T3 val3) =0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"right"})),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Calls the member function.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"right"})),(0,n.kt)("td",d({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_generic_callback#function-isvalid",mdxType:"Link"},"isValid")),"() const =0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"right"})),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Function to check whether the ",(0,n.kt)("a",d({parentName:"td"},{href:"structtouchgfx_1_1_callback"}),"Callback")," has been initialized with values.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"right"})),(0,n.kt)("td",d({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_generic_callback#function-~genericcallback",mdxType:"Link"},"~GenericCallback")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"right"})),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,n.kt)("a",d({parentName:"td"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"right"})),(0,n.kt)("td",d({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",d({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_generic_callback#function-execute",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",d({},{id:"execute"}),"execute"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_generic_callback#function-execute",mdxType:"Link"},"execute")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"T1"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"val1 ,"),(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"=0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"T2"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"val2 ,"),(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"=0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"T3"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"val3"),(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"=0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"=0"),(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Calls the member function. "),(0,n.kt)("p",null,"Do not call execute unless ",(0,n.kt)("a",d({parentName:"p"},{href:"classtouchgfx_1_1_generic_callback#function-isvalid"}),"isValid()")," returns true (ie. a pointer to the object and the function has been set)."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"val1"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"This value will be passed as the first argument in the function call.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"val2"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"This value will be passed as the second argument in the function call.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"val3"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"This value will be passed as the third argument in the function call."))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_callback#function-execute",mdxType:"Link"},"touchgfx::Callback::execute"),", ",(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_callback#function-execute",mdxType:"Link"},"touchgfx::Callback::execute"),", ",(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_callback#function-execute",mdxType:"Link"},"touchgfx::Callback::execute"),", ",(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_callback#function-execute",mdxType:"Link"},"touchgfx::Callback::execute"),", ",(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_callback#function-execute",mdxType:"Link"},"touchgfx::Callback::execute")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_generic_callback#function-isvalid",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",d({},{id:"isvalid"}),"isValid"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_generic_callback#function-isvalid",mdxType:"Link"},"isValid")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"const =0"))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Function to check whether the ",(0,n.kt)("a",d({parentName:"p"},{href:"structtouchgfx_1_1_callback"}),"Callback")," has been initialized with values. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"true If the callback is valid (i.e. safe to call execute). ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_callback#function-isvalid",mdxType:"Link"},"touchgfx::Callback::isValid"),", ",(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_callback#function-isvalid",mdxType:"Link"},"touchgfx::Callback::isValid"),", ",(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_callback#function-isvalid",mdxType:"Link"},"touchgfx::Callback::isValid"),", ",(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_callback#function-isvalid",mdxType:"Link"},"touchgfx::Callback::isValid"),", ",(0,n.kt)(r.Z,{to:"structtouchgfx_1_1_callback#function-isvalid",mdxType:"Link"},"touchgfx::Callback::isValid")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_generic_callback#function-~genericcallback",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",d({},{id:"genericcallback"}),"~GenericCallback"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})),(0,n.kt)("th",d({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"virtual","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_generic_callback#function-~genericcallback",mdxType:"Link"},"~GenericCallback")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null})),(0,n.kt)("td",d({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",d({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Finalizes an instance of the ",(0,n.kt)("a",d({parentName:"p"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback")," class. "))))}_.isMDXComponent=!0}}]);