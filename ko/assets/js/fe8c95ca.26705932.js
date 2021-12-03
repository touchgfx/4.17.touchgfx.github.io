(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7969],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return p}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),s=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),d=s(n),p=r,m=d["".concat(o,".").concat(p)]||d[p]||k[p]||l;return n?a.createElement(m,i(i({ref:e},u),{},{components:n})):a.createElement(m,i({ref:e},u))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=t,c.mdxType="string"==typeof t?t:r,i[1]=c;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43861:function(t,e,n){"use strict";var a=n(67294);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},31217:function(t,e,n){"use strict";n.d(e,{Z:function(){return N}});var a=n(67294),r=n(73727),l=n(11368),i=n(35096),c=n(84487);const o=(0,a.createContext)({collectLink:()=>{}});var s=n(25026),u=n(67023),k=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,g=(t,e,n)=>e in t?k(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,b=(t,e)=>{for(var n in e||(e={}))h.call(e,n)&&g(t,n,e[n]);if(m)for(var n of m(e))f.call(e,n)&&g(t,n,e[n]);return t};var N=function(t){var e,n=t,{isNavLink:k,to:g,href:N,activeClassName:v,isActive:_,"data-noBrokenLinkCheck":y,autoAddBaseUrl:x=!0}=n,w=((t,e)=>{var n={};for(var a in t)h.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&m)for(var a of m(t))e.indexOf(a)<0&&f.call(t,a)&&(n[a]=t[a]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O}}=(0,l.Z)(),{withBaseUrl:C}=(0,s.C)(),P=(0,a.useContext)(o),T=g||N,j=(0,i.Z)(T),E=null==T?void 0:T.replace("pathname://","");let L=void 0!==E?(A=E,x&&(t=>t.startsWith("/"))(A)?C(A):A):void 0;var A;L&&j&&(L=(0,u.applyTrailingSlash)(L,O));const D=(0,a.useRef)(!1),Z=k?r.OL:r.rU,M=c.Z.canUseIntersectionObserver;let I;(0,a.useEffect)((()=>(!M&&j&&null!=L&&window.docusaurus.prefetch(L),()=>{M&&I&&I.disconnect()})),[L,M,j]);const S=null!==(e=null==L?void 0:L.startsWith("#"))&&void 0!==e&&e,U=!L||!j||S;return L&&j&&!S&&!y&&P.collectLink(L),U?a.createElement("a",b(b({href:L},T&&!j&&{target:"_blank",rel:"noopener noreferrer"}),w)):a.createElement(Z,b((B=b({},w),d(B,p({onMouseEnter:()=>{D.current||null==L||(window.docusaurus.preload(L),D.current=!0)},innerRef:t=>{var e,n;M&&t&&j&&(e=t,n=()=>{null!=L&&window.docusaurus.prefetch(L)},I=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(I.unobserve(e),I.disconnect(),n())}))})),I.observe(e))},to:L||""}))),k&&{isActive:_,activeClassName:v}));var B}},35096:function(t,e,n){"use strict";function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!a(t)}n.d(e,{b:function(){return a},Z:function(){return r}})},25026:function(t,e,n){"use strict";n.d(e,{C:function(){return l},Z:function(){return i}});var a=n(11368),r=n(35096);function l(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(t,e,n,{forcePrependBaseUrl:a=!1,absolute:l=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return e+n;const i=n.startsWith(e)?n:e+n.replace(/^\//,"");return l?t+i:i}(e,t,n,a)}}function i(t,e={}){const{withBaseUrl:n}=l();return n(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(t.startsWith("#"))return t;if(void 0===e)return t;const[n]=t.split(/[#?]/),a="/"===n?"/":(r=n,e?function(t){return t.endsWith("/")?t:`${t}/`}(r):function(t){return t.endsWith("/")?t.slice(0,-1):t}(r));var r;return t.replace(n,a)}},67023:function(t,e,n){"use strict";var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=n(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var l=n(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return a(l).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},13836:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return m},contentTitle:function(){return h},metadata:function(){return f},toc:function(){return g},default:function(){return N}});var a=n(3905),r=n(31217),l=n(43861),i=Object.defineProperty,c=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,d=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,p=(t,e)=>{for(var n in e||(e={}))u.call(e,n)&&d(t,n,e[n]);if(s)for(var n of s(e))k.call(e,n)&&d(t,n,e[n]);return t};const m={title:"ClickListener"},h=void 0,f={unversionedId:"api/classes/classtouchgfx_1_1_click_listener",id:"api/classes/classtouchgfx_1_1_click_listener",isDocsHomePage:!1,title:"ClickListener",description:"Mix-in class that extends a class with a click action event that is called when the class receives a click event.",source:"@site/docs/api/classes/classtouchgfx_1_1_click_listener.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_click_listener",permalink:"/4.17/ko/docs/api/classes/classtouchgfx_1_1_click_listener",version:"current",frontMatter:{title:"ClickListener"},sidebar:"docs",previous:{title:"ClickEvent",permalink:"/4.17/ko/docs/api/classes/classtouchgfx_1_1_click_event"},next:{title:"Color",permalink:"/4.17/ko/docs/api/classes/classtouchgfx_1_1_color"}},g=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Protected Attributes",id:"protected-attributes",children:[]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"ClickListener",id:"clicklistener",children:[]},{value:"handleClickEvent",id:"handleclickevent",children:[]},{value:"setClickAction",id:"setclickaction",children:[]}]},{value:"Protected Attributes Documentation",id:"protected-attributes-documentation",children:[{value:"clickAction",id:"clickaction",children:[]}]}],b={toc:g};function N(t){var e,n=t,{components:i}=n,d=((t,e)=>{var n={};for(var a in t)u.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&s)for(var a of s(t))e.indexOf(a)<0&&k.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=p(p({},b),d),c(e,o({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null," Mix-in class that extends a class with a click action event that is called when the class receives a click event. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Template Parameters"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"T")," specifies the type to extend with the ",(0,a.kt)("a",p({parentName:"li"},{href:"classtouchgfx_1_1_click_listener"}),"ClickListener")," behavior. ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Inherits from"),": T"),(0,a.kt)("h2",p({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:"right"})),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_listener#function-clicklistener",mdxType:"Link"},"ClickListener")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,a.kt)("a",p({parentName:"td"},{href:"classtouchgfx_1_1_click_listener"}),"ClickListener")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_listener#function-handleclickevent",mdxType:"Link"},"handleClickEvent")),"(const ",(0,a.kt)("a",p({parentName:"td"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," & event)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Ensures that the clickEvent is propagated to the super class T and to the clickAction listener.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"}),"void"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_listener#function-setclickaction",mdxType:"Link"},"setClickAction")),"(",(0,a.kt)("a",p({parentName:"td"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback"),"<"," const T <, const ",(0,a.kt)("a",p({parentName:"td"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," & ",">"," & callback)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Associates an action to be performed when the class T is clicked.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",p({},{id:"protected-attributes"}),"Protected Attributes"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:"right"})),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"}),(0,a.kt)("a",p({parentName:"td"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback"),"<"," const T <, const ",(0,a.kt)("a",p({parentName:"td"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," & ",">"," *"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_listener#variable-clickaction",mdxType:"Link"},"clickAction")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"The callback to be executed when T is clicked.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"right"})),(0,a.kt)("td",p({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",p({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_click_listener#function-clicklistener",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",p({},{id:"clicklistener"}),"ClickListener"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_listener#function-clicklistener",mdxType:"Link"},"ClickListener")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",p({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Initializes a new instance of the ",(0,a.kt)("a",p({parentName:"p"},{href:"classtouchgfx_1_1_click_listener"}),"ClickListener")," class. "),(0,a.kt)("p",null,"Make the object touchable. "))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_click_listener#function-handleclickevent",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",p({},{id:"handleclickevent"}),"handleClickEvent"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_listener#function-handleclickevent",mdxType:"Link"},"handleClickEvent")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"const ",(0,a.kt)("a",p({parentName:"td"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," &"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"event"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",p({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Ensures that the clickEvent is propagated to the super class T and to the clickAction listener. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"event"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Information about the click."))))))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_click_listener#function-setclickaction",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",p({},{id:"setclickaction"}),"setClickAction"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_listener#function-setclickaction",mdxType:"Link"},"setClickAction")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("a",p({parentName:"td"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback"),"<"," const T <, const ",(0,a.kt)("a",p({parentName:"td"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," & ",">"," &"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"callback"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",p({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Associates an action to be performed when the class T is clicked. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null})),(0,a.kt)("th",p({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"callback"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"The callback to be executed. The callback will be given a reference to T."))))))),(0,a.kt)("h2",p({},{id:"protected-attributes-documentation"}),"Protected Attributes Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_click_listener#variable-clickaction",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",p({},{id:"clickaction"}),"clickAction"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,(0,a.kt)("a",p({parentName:"p"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback"),"<"," const T <, const ",(0,a.kt)("a",p({parentName:"p"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," & ",">"," * clickAction ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The callback to be executed when T is clicked. "))))}N.isMDXComponent=!0}}]);