(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6764],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),k=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=k(t.components);return a.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),u=k(n),m=r,s=u["".concat(o,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(s,i(i({ref:e},p),{},{components:n})):a.createElement(s,i({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=t,c.mdxType="string"==typeof t?t:r,i[1]=c;for(var k=2;k<l;k++)i[k]=n[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43861:function(t,e,n){"use strict";var a=n(67294);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},31217:function(t,e,n){"use strict";n.d(e,{Z:function(){return y}});var a=n(67294),r=n(73727),l=n(11368),i=n(35096),c=n(84487);const o=(0,a.createContext)({collectLink:()=>{}});var k=n(25026),p=n(67023),d=Object.defineProperty,u=Object.defineProperties,m=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,N=(t,e,n)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,f=(t,e)=>{for(var n in e||(e={}))g.call(e,n)&&N(t,n,e[n]);if(s)for(var n of s(e))h.call(e,n)&&N(t,n,e[n]);return t};var y=function(t){var e,n=t,{isNavLink:d,to:N,href:y,activeClassName:v,isActive:_,"data-noBrokenLinkCheck":b,autoAddBaseUrl:x=!0}=n,w=((t,e)=>{var n={};for(var a in t)g.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&s)for(var a of s(t))e.indexOf(a)<0&&h.call(t,a)&&(n[a]=t[a]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:T}}=(0,l.Z)(),{withBaseUrl:E}=(0,k.C)(),O=(0,a.useContext)(o),L=N||y,P=(0,i.Z)(L),Z=null==L?void 0:L.replace("pathname://","");let C=void 0!==Z?(D=Z,x&&(t=>t.startsWith("/"))(D)?E(D):D):void 0;var D;C&&P&&(C=(0,p.applyTrailingSlash)(C,T));const j=(0,a.useRef)(!1),S=d?r.OL:r.rU,A=c.Z.canUseIntersectionObserver;let H;(0,a.useEffect)((()=>(!A&&P&&null!=C&&window.docusaurus.prefetch(C),()=>{A&&H&&H.disconnect()})),[C,A,P]);const R=null!==(e=null==C?void 0:C.startsWith("#"))&&void 0!==e&&e,F=!C||!P||R;return C&&P&&!R&&!b&&O.collectLink(C),F?a.createElement("a",f(f({href:C},L&&!P&&{target:"_blank",rel:"noopener noreferrer"}),w)):a.createElement(S,f((G=f({},w),u(G,m({onMouseEnter:()=>{j.current||null==C||(window.docusaurus.preload(C),j.current=!0)},innerRef:t=>{var e,n;A&&t&&P&&(e=t,n=()=>{null!=C&&window.docusaurus.prefetch(C)},H=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(H.unobserve(e),H.disconnect(),n())}))})),H.observe(e))},to:C||""}))),d&&{isActive:_,activeClassName:v}));var G}},35096:function(t,e,n){"use strict";function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!a(t)}n.d(e,{b:function(){return a},Z:function(){return r}})},25026:function(t,e,n){"use strict";n.d(e,{C:function(){return l},Z:function(){return i}});var a=n(11368),r=n(35096);function l(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(t,e,n,{forcePrependBaseUrl:a=!1,absolute:l=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return e+n;const i=n.startsWith(e)?n:e+n.replace(/^\//,"");return l?t+i:i}(e,t,n,a)}}function i(t,e={}){const{withBaseUrl:n}=l();return n(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(t.startsWith("#"))return t;if(void 0===e)return t;const[n]=t.split(/[#?]/),a="/"===n?"/":(r=n,e?function(t){return t.endsWith("/")?t:`${t}/`}(r):function(t){return t.endsWith("/")?t.slice(0,-1):t}(r));var r;return t.replace(n,a)}},67023:function(t,e,n){"use strict";var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=n(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var l=n(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return a(l).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},38940:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return g},metadata:function(){return h},toc:function(){return N},default:function(){return y}});var a=n(3905),r=n(31217),l=n(43861),i=Object.defineProperty,c=Object.defineProperties,o=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m=(t,e)=>{for(var n in e||(e={}))p.call(e,n)&&u(t,n,e[n]);if(k)for(var n of k(e))d.call(e,n)&&u(t,n,e[n]);return t};const s={title:"ClickEvent"},g=void 0,h={unversionedId:"api/classes/classtouchgfx_1_1_click_event",id:"api/classes/classtouchgfx_1_1_click_event",isDocsHomePage:!1,title:"ClickEvent",description:"A click event.",source:"@site/docs/api/classes/classtouchgfx_1_1_click_event.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_click_event",permalink:"/4.17/ko/docs/api/classes/classtouchgfx_1_1_click_event",version:"current",frontMatter:{title:"ClickEvent"},sidebar:"docs",previous:{title:"ClickButtonTrigger",permalink:"/4.17/ko/docs/api/classes/classtouchgfx_1_1_click_button_trigger"},next:{title:"ClickListener",permalink:"/4.17/ko/docs/api/classes/classtouchgfx_1_1_click_listener"}},N=[{value:"Public Types",id:"public-types",children:[]},{value:"Public Functions",id:"public-functions",children:[]},{value:"Additional inherited members",id:"additional-inherited-members",children:[{value:'Public Types inherited from <Link to="classtouchgfx_1_1_event">Event</Link>',id:"public-types-inherited-from-event",children:[]},{value:'Public Functions inherited from <Link to="classtouchgfx_1_1_event">Event</Link>',id:"public-functions-inherited-from-event",children:[]}]},{value:"Public Types Documentation",id:"public-types-documentation",children:[{value:"ClickEventType",id:"clickeventtype",children:[]}]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"ClickEvent",id:"clickevent",children:[]},{value:"getEventType",id:"geteventtype",children:[]},{value:"getForce",id:"getforce",children:[]},{value:"getType",id:"gettype",children:[]},{value:"getX",id:"getx",children:[]},{value:"getY",id:"gety",children:[]},{value:"setType",id:"settype",children:[]},{value:"setX",id:"setx",children:[]},{value:"setY",id:"sety",children:[]}]}],f={toc:N};function y(t){var e,n=t,{components:i}=n,u=((t,e)=>{var n={};for(var a in t)p.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&k)for(var a of k(t))e.indexOf(a)<0&&d.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=m(m({},f),u),c(e,o({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null," A click event.\nThe semantics of this event is slightly depending on hardware platform. ClickEvents are generated by the ",(0,a.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_h_a_l"}),"HAL")," layer."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See"),": ",(0,a.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_event"}),"Event")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Inherits from"),":  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_event",mdxType:"Link"},"Event")),(0,a.kt)("h2",m({},{id:"public-types"}),"Public Types"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"enum"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_event#enum-clickeventtype",mdxType:"Link"},"ClickEventType"))," { PRESSED, RELEASED, CANCEL }")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Values that represent click event types.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",m({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:"right"})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_event#function-clickevent",mdxType:"Link"},"ClickEvent")),"(",(0,a.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_click_event#enum-clickeventtype"}),"ClickEventType")," type, int16_t x, int16_t y, int16_t force =0)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,a.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0",(0,a.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_event#enum-eventtype"}),"Event::EventType")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_event#function-geteventtype",mdxType:"Link"},"getEventType")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Gets event type.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"int16_t"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_event#function-getforce",mdxType:"Link"},"getForce")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Gets the force of the click.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),(0,a.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_click_event#enum-clickeventtype"}),"ClickEventType")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_event#function-gettype",mdxType:"Link"},"getType")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Gets the click type of this event.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"int16_t"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_event#function-getx",mdxType:"Link"},"getX")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Gets the x coordinate of this event.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"int16_t"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_event#function-gety",mdxType:"Link"},"getY")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Gets the y coordinate of this event.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"void"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_event#function-settype",mdxType:"Link"},"setType")),"(",(0,a.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_click_event#enum-clickeventtype"}),"ClickEventType")," type)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Sets the click type of this event.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"void"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_event#function-setx",mdxType:"Link"},"setX")),"(int16_t x)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Sets the x coordinate of this event.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"void"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_event#function-sety",mdxType:"Link"},"setY")),"(int16_t y)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Sets the y coordinate of this event.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",m({},{id:"additional-inherited-members"}),"Additional inherited members"),(0,a.kt)("h3",m({},{id:"public-types-inherited-from-event"}),"Public Types inherited from ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_event",mdxType:"Link"},"Event")),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:"right"})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"enum"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_event#enum-eventtype",mdxType:"Link"},"EventType"))," { EVENT_CLICK, EVENT_DRAG, EVENT_GESTURE }")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The event types.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("h3",m({},{id:"public-functions-inherited-from-event"}),"Public Functions inherited from ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_event",mdxType:"Link"},"Event")),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:"right"})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_event#function-~event",mdxType:"Link"},"~Event")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,a.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_event"}),"Event")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",m({},{id:"public-types-documentation"}),"Public Types Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_click_event#enum-clickeventtype",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",m({},{id:"clickeventtype"}),"ClickEventType"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header",markdown:"1"},(0,a.kt)("p",null,"enum ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_event#enum-clickeventtype",mdxType:"Link"},"ClickEventType"))),(0,a.kt)("div",{class:"api-container-content api-container-content-enum",markdown:"1"},(0,a.kt)("p",null,"Values that represent click event types. "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_click_event#enumvalue-pressed",mdxType:"DoxybookHeaderLink"})," PRESSED"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"An enum constant representing the pressed option.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_click_event#enumvalue-released",mdxType:"DoxybookHeaderLink"})," RELEASED"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"An enum constant representing the released option.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_click_event#enumvalue-cancel",mdxType:"DoxybookHeaderLink"})," CANCEL"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"An enum constant representing the cancel option.")))))),(0,a.kt)("h2",m({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_click_event#function-clickevent",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",m({},{id:"clickevent"}),"ClickEvent"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_event#function-clickevent",mdxType:"Link"},"ClickEvent")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_click_event#enum-clickeventtype"}),"ClickEventType")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"type ,"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"int16_t"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"x ,"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"int16_t"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"y ,"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"int16_t"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"force  =0"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Initializes a new instance of the ",(0,a.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," class. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"type"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The type of the click event.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"x"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The x coordinate of the click event.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"y"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The y coordinate of the click event.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"force"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"(Optional) The force of the click. On touch displays this usually means how hard the user pressed on the display. On the windows platform, this will always be zero."))))))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_click_event#function-geteventtype",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",m({},{id:"geteventtype"}),"getEventType"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"virtual","\xa0","Event::EventType","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_event#function-geteventtype",mdxType:"Link"},"getEventType")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets event type. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The type of this event. ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_event#function-geteventtype",mdxType:"Link"},"touchgfx::Event::getEventType")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_click_event#function-getforce",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",m({},{id:"getforce"}),"getForce"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"int16_t","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_event#function-getforce",mdxType:"Link"},"getForce")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"const"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets the force of the click. "),(0,a.kt)("p",null,"On touch displays this usually means how hard the user pressed on the display. On the windows platform, this will always be zero."),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The force of the click. ")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_click_event#function-gettype",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",m({},{id:"gettype"}),"getType"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ClickEventType","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_event#function-gettype",mdxType:"Link"},"getType")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"const"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets the click type of this event. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The click type of this event. ")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_click_event#function-getx",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",m({},{id:"getx"}),"getX"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"int16_t","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_event#function-getx",mdxType:"Link"},"getX")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"const"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets the x coordinate of this event. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The x coordinate of this event. ")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_click_event#function-gety",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",m({},{id:"gety"}),"getY"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"int16_t","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_event#function-gety",mdxType:"Link"},"getY")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"const"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Gets the y coordinate of this event. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"The y coordinate of this event. ")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_click_event#function-settype",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",m({},{id:"settype"}),"setType"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_event#function-settype",mdxType:"Link"},"setType")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_click_event#enum-clickeventtype"}),"ClickEventType")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"type"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Sets the click type of this event. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"type"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The type to set."))))))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_click_event#function-setx",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",m({},{id:"setx"}),"setX"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_event#function-setx",mdxType:"Link"},"setX")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"int16_t"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"x"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Sets the x coordinate of this event. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"x"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The x coordinate of this event."))))))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_click_event#function-sety",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",m({},{id:"sety"}),"setY"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_click_event#function-sety",mdxType:"Link"},"setY")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"int16_t"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"y"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Sets the y coordinate of this event. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"y"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The y coordinate of this event."))))))))}y.isMDXComponent=!0}}]);