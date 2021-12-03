(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[733],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),s=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=s(n),k=r,h=p["".concat(o,".").concat(k)]||p[k]||d[k]||i;return n?a.createElement(h,c(c({ref:e},u),{},{components:n})):a.createElement(h,c({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,c=new Array(i);c[0]=p;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l.mdxType="string"==typeof t?t:r,c[1]=l;for(var s=2;s<i;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},43861:function(t,e,n){"use strict";var a=n(67294);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},31217:function(t,e,n){"use strict";n.d(e,{Z:function(){return b}});var a=n(67294),r=n(73727),i=n(11368),c=n(35096),l=n(84487);const o=(0,a.createContext)({collectLink:()=>{}});var s=n(25026),u=n(67023),d=Object.defineProperty,p=Object.defineProperties,k=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,m=(t,e,n)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,g=(t,e)=>{for(var n in e||(e={}))_.call(e,n)&&m(t,n,e[n]);if(h)for(var n of h(e))f.call(e,n)&&m(t,n,e[n]);return t};var b=function(t){var e,n=t,{isNavLink:d,to:m,href:b,activeClassName:v,isActive:N,"data-noBrokenLinkCheck":y,autoAddBaseUrl:x=!0}=n,w=((t,e)=>{var n={};for(var a in t)_.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&h)for(var a of h(t))e.indexOf(a)<0&&f.call(t,a)&&(n[a]=t[a]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O}}=(0,i.Z)(),{withBaseUrl:E}=(0,s.C)(),P=(0,a.useContext)(o),C=m||b,j=(0,c.Z)(C),T=null==C?void 0:C.replace("pathname://","");let D=void 0!==T?(A=T,x&&(t=>t.startsWith("/"))(A)?E(A):A):void 0;var A;D&&j&&(D=(0,u.applyTrailingSlash)(D,O));const L=(0,a.useRef)(!1),Z=d?r.OL:r.rU,S=l.Z.canUseIntersectionObserver;let G;(0,a.useEffect)((()=>(!S&&j&&null!=D&&window.docusaurus.prefetch(D),()=>{S&&G&&G.disconnect()})),[D,S,j]);const M=null!==(e=null==D?void 0:D.startsWith("#"))&&void 0!==e&&e,I=!D||!j||M;return D&&j&&!M&&!y&&P.collectLink(D),I?a.createElement("a",g(g({href:D},C&&!j&&{target:"_blank",rel:"noopener noreferrer"}),w)):a.createElement(Z,g((U=g({},w),p(U,k({onMouseEnter:()=>{L.current||null==D||(window.docusaurus.preload(D),L.current=!0)},innerRef:t=>{var e,n;S&&t&&j&&(e=t,n=()=>{null!=D&&window.docusaurus.prefetch(D)},G=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(G.unobserve(e),G.disconnect(),n())}))})),G.observe(e))},to:D||""}))),d&&{isActive:N,activeClassName:v}));var U}},35096:function(t,e,n){"use strict";function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!a(t)}n.d(e,{b:function(){return a},Z:function(){return r}})},25026:function(t,e,n){"use strict";n.d(e,{C:function(){return i},Z:function(){return c}});var a=n(11368),r=n(35096);function i(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(t,e,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return e+n;const c=n.startsWith(e)?n:e+n.replace(/^\//,"");return i?t+c:c}(e,t,n,a)}}function c(t,e={}){const{withBaseUrl:n}=i();return n(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(t.startsWith("#"))return t;if(void 0===e)return t;const[n]=t.split(/[#?]/),a="/"===n?"/":(r=n,e?function(t){return t.endsWith("/")?t:`${t}/`}(r):function(t){return t.endsWith("/")?t.slice(0,-1):t}(r));var r;return t.replace(n,a)}},67023:function(t,e,n){"use strict";var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=n(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var i=n(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return a(i).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},93300:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return h},contentTitle:function(){return _},metadata:function(){return f},toc:function(){return m},default:function(){return b}});var a=n(3905),r=n(31217),i=n(43861),c=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(t,e,n)=>e in t?c(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,k=(t,e)=>{for(var n in e||(e={}))u.call(e,n)&&p(t,n,e[n]);if(s)for(var n of s(e))d.call(e,n)&&p(t,n,e[n]);return t};const h={title:"GraphClickEvent"},_=void 0,f={unversionedId:"api/classes/classtouchgfx_1_1_abstract_data_graph_1_1_graph_click_event",id:"api/classes/classtouchgfx_1_1_abstract_data_graph_1_1_graph_click_event",isDocsHomePage:!1,title:"GraphClickEvent",description:"An object of this type is passed with each callback that is sent when the graph is clicked.",source:"@site/docs/api/classes/classtouchgfx_1_1_abstract_data_graph_1_1_graph_click_event.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_abstract_data_graph_1_1_graph_click_event",permalink:"/4.17/zh-CN/docs/api/classes/classtouchgfx_1_1_abstract_data_graph_1_1_graph_click_event",version:"current",frontMatter:{title:"GraphClickEvent"},sidebar:"docs",previous:{title:"Gradients",permalink:"/4.17/zh-CN/docs/api/classes/structtouchgfx_1_1_gradients"},next:{title:"GraphDragEvent",permalink:"/4.17/zh-CN/docs/api/classes/classtouchgfx_1_1_abstract_data_graph_1_1_graph_drag_event"}},m=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Public Attributes",id:"public-attributes",children:[]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"GraphClickEvent",id:"graphclickevent",children:[]}]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"clickEvent",id:"clickevent",children:[]},{value:"index",id:"index",children:[]}]}],g={toc:m};function b(t){var e,n=t,{components:c}=n,p=((t,e)=>{var n={};for(var a in t)u.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&s)for(var a of s(t))e.indexOf(a)<0&&d.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=k(k({},g),p),l(e,o({components:c,mdxType:"MDXLayout"}))),(0,a.kt)("p",null," An object of this type is passed with each callback that is sent when the graph is clicked.\nThe object contains the data index that was pressed and the details of the click event, e.g. PRESSED, RELEASED and screen coordinates. "),(0,a.kt)("h2",k({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:"right"})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_click_event#function-graphclickevent",mdxType:"Link"},"GraphClickEvent")),"(int16_t i, const ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," & event)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_click_event"}),"GraphClickEvent")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",k({},{id:"public-attributes"}),"Public Attributes"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:"right"})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"const ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," &"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_click_event#variable-clickevent",mdxType:"Link"},"clickEvent")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The ClickEvent that caused the callback to be executed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"int16_t"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_click_event#variable-index",mdxType:"Link"},"index")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The index of the item clicked.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",k({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_click_event#function-graphclickevent",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"graphclickevent"}),"GraphClickEvent"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_click_event#function-graphclickevent",mdxType:"Link"},"GraphClickEvent")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"int16_t"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"i ,"),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"const ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," &"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"event"),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Initializes a new instance of the ",(0,a.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_click_event"}),"GraphClickEvent")," class. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"i"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The index of the item clicked.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"event"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The ",(0,a.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," that caused the callback to be executed."))))),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"See also:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,(0,a.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_abstract_data_graph#function-setclickaction"}),"setClickAction"))))),(0,a.kt)("h2",k({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_click_event#variable-clickevent",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"clickevent"}),"clickEvent"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"const ",(0,a.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," & clickEvent ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The ClickEvent that caused the callback to be executed. "))),(0,a.kt)(i.Z,{url:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_click_event#variable-index",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"index"}),"index"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"int16_t index ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The index of the item clicked. "))))}b.isMDXComponent=!0}}]);