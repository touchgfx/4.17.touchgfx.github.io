(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2266],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return c},kt:function(){return k}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),u=d(a),k=r,m=u["".concat(o,".").concat(k)]||u[k]||s[k]||l;return a?n.createElement(m,i(i({ref:e},c),{},{components:a})):n.createElement(m,i({ref:e},c))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},43861:function(t,e,a){"use strict";var n=a(67294);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},31217:function(t,e,a){"use strict";a.d(e,{Z:function(){return b}});var n=a(67294),r=a(73727),l=a(11368),i=a(35096),p=a(84487);const o=(0,n.createContext)({collectLink:()=>{}});var d=a(25026),c=a(67023),s=Object.defineProperty,u=Object.defineProperties,k=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,N=(t,e,a)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,f=(t,e)=>{for(var a in e||(e={}))g.call(e,a)&&N(t,a,e[a]);if(m)for(var a of m(e))h.call(e,a)&&N(t,a,e[a]);return t};var b=function(t){var e,a=t,{isNavLink:s,to:N,href:b,activeClassName:_,isActive:v,"data-noBrokenLinkCheck":y,autoAddBaseUrl:x=!0}=a,w=((t,e)=>{var a={};for(var n in t)g.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&m)for(var n of m(t))e.indexOf(n)<0&&h.call(t,n)&&(a[n]=t[n]);return a})(a,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O}}=(0,l.Z)(),{withBaseUrl:T}=(0,d.C)(),P=(0,n.useContext)(o),S=N||b,D=(0,i.Z)(S),j=null==S?void 0:S.replace("pathname://","");let E=void 0!==j?(C=j,x&&(t=>t.startsWith("/"))(C)?T(C):C):void 0;var C;E&&D&&(E=(0,c.applyTrailingSlash)(E,O));const L=(0,n.useRef)(!1),Z=s?r.OL:r.rU,A=p.Z.canUseIntersectionObserver;let H;(0,n.useEffect)((()=>(!A&&D&&null!=E&&window.docusaurus.prefetch(E),()=>{A&&H&&H.disconnect()})),[E,A,D]);const I=null!==(e=null==E?void 0:E.startsWith("#"))&&void 0!==e&&e,M=!E||!D||I;return E&&D&&!I&&!y&&P.collectLink(E),M?n.createElement("a",f(f({href:E},S&&!D&&{target:"_blank",rel:"noopener noreferrer"}),w)):n.createElement(Z,f((U=f({},w),u(U,k({onMouseEnter:()=>{L.current||null==E||(window.docusaurus.preload(E),L.current=!0)},innerRef:t=>{var e,a;A&&t&&D&&(e=t,a=()=>{null!=E&&window.docusaurus.prefetch(E)},H=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(H.unobserve(e),H.disconnect(),a())}))})),H.observe(e))},to:E||""}))),s&&{isActive:v,activeClassName:_}));var U}},35096:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}a.d(e,{b:function(){return n},Z:function(){return r}})},25026:function(t,e,a){"use strict";a.d(e,{C:function(){return l},Z:function(){return i}});var n=a(11368),r=a(35096);function l(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,n.Z)();return{withBaseUrl:(a,n)=>function(t,e,a,{forcePrependBaseUrl:n=!1,absolute:l=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(n)return e+a;const i=a.startsWith(e)?a:e+a.replace(/^\//,"");return l?t+i:i}(e,t,a,n)}}function i(t,e={}){const{withBaseUrl:a}=l();return a(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(t.startsWith("#"))return t;if(void 0===e)return t;const[a]=t.split(/[#?]/),n="/"===a?"/":(r=a,e?function(t){return t.endsWith("/")?t:`${t}/`}(r):function(t){return t.endsWith("/")?t.slice(0,-1):t}(r));var r;return t.replace(a,n)}},67023:function(t,e,a){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=a(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return n(r).default}});var l=a(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return n(l).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},18607:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return m},contentTitle:function(){return g},metadata:function(){return h},toc:function(){return N},default:function(){return b}});var n=a(3905),r=a(31217),l=a(43861),i=Object.defineProperty,p=Object.defineProperties,o=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(t,e,a)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,k=(t,e)=>{for(var a in e||(e={}))c.call(e,a)&&u(t,a,e[a]);if(d)for(var a of d(e))s.call(e,a)&&u(t,a,e[a]);return t};const m={title:"Snapper"},g=void 0,h={unversionedId:"api/classes/classtouchgfx_1_1_snapper",id:"api/classes/classtouchgfx_1_1_snapper",isDocsHomePage:!1,title:"Snapper",description:"A mix-in that will make class T draggable and able to snap to a position when a drag operation has ended.",source:"@site/docs/api/classes/classtouchgfx_1_1_snapper.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_snapper",permalink:"/4.17/docs/api/classes/classtouchgfx_1_1_snapper",version:"current",frontMatter:{title:"Snapper"},sidebar:"docs",previous:{title:"SlideTransition",permalink:"/4.17/docs/api/classes/classtouchgfx_1_1_slide_transition"},next:{title:"SnapshotWidget",permalink:"/4.17/docs/api/classes/classtouchgfx_1_1_snapshot_widget"}},N=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Additional inherited members",id:"additional-inherited-members",children:[{value:'Public Functions inherited from <Link to="classtouchgfx_1_1_draggable">touchgfx::Draggable&lt; T &gt;</Link>',id:"public-functions-inherited-from-touchgfxdraggable-t-",children:[]}]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"handleClickEvent",id:"handleclickevent",children:[]},{value:"handleDragEvent",id:"handledragevent",children:[]},{value:"setDragAction",id:"setdragaction",children:[]},{value:"setSnappedAction",id:"setsnappedaction",children:[]},{value:"setSnapPosition",id:"setsnapposition",children:[]},{value:"Snapper",id:"snapper",children:[]}]}],f={toc:N};function b(t){var e,a=t,{components:i}=a,u=((t,e)=>{var a={};for(var n in t)c.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&d)for(var n of d(t))e.indexOf(n)<0&&s.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=k(k({},f),u),p(e,o({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null," A mix-in that will make class T draggable and able to snap to a position when a drag operation has ended.\nThe mix-in is able to perform callbacks when the snapper gets dragged and when the ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_snapper"}),"Snapper")," snaps to its snap position."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Template Parameters"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"T")," specifies the type to enable the Snap behavior to. ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"See"),": ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_draggable#function-draggable"}),"Draggable","<","T>")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Inherits from"),":  ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_draggable",mdxType:"Link"},"touchgfx::Draggable","<"," T ",">"),", T"),(0,n.kt)("h2",k({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:"right"})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_snapper#function-handleclickevent",mdxType:"Link"},"handleClickEvent")),"(const ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," & event)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Handles the click events when the ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_snapper"}),"Snapper")," is clicked.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_snapper#function-handledragevent",mdxType:"Link"},"handleDragEvent")),"(const ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_drag_event"}),"DragEvent")," & event)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Called when dragging the ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_draggable"}),"Draggable")," object.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_snapper#function-setdragaction",mdxType:"Link"},"setDragAction")),"(",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback"),"<"," const ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_drag_event"}),"DragEvent")," & ",">"," & callback)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Associates an action to be performed when the ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_snapper"}),"Snapper")," is dragged.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_snapper#function-setsnappedaction",mdxType:"Link"},"setSnappedAction")),"(",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback"),"<",">"," & callback)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Associates an action to be performed when the ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_snapper"}),"Snapper")," is snapped.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_snapper#function-setsnapposition",mdxType:"Link"},"setSnapPosition")),"(int16_t x, int16_t y)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Sets the position the ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_snapper"}),"Snapper")," should snap to.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_snapper#function-snapper",mdxType:"Link"},"Snapper")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",k({},{id:"additional-inherited-members"}),"Additional inherited members"),(0,n.kt)("h3",k({},{id:"public-functions-inherited-from-touchgfxdraggable-t-"}),"Public Functions inherited from ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_draggable",mdxType:"Link"},"touchgfx::Draggable","<"," T ",">")),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:"right"})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_draggable#function-draggable",mdxType:"Link"},"Draggable")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_draggable"}),"Draggable")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",k({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_snapper#function-handleclickevent",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"handleclickevent"}),"handleClickEvent"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_snapper#function-handleclickevent",mdxType:"Link"},"handleClickEvent")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"const ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," &"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"event"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Handles the click events when the ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_snapper"}),"Snapper")," is clicked. "),(0,n.kt)("p",null,"It saves its current position as the snap position if the ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_snapper"}),"Snapper")," is pressed. This happens when the drag operation starts."),(0,n.kt)("p",null,"The snapper will then move to the snap position when the click is released. This happens when the drag operation ends."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"event"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The click event."))))))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_snapper#function-handledragevent",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"handledragevent"}),"handleDragEvent"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_snapper#function-handledragevent",mdxType:"Link"},"handleDragEvent")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"const ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_drag_event"}),"DragEvent")," &"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"event"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Called when dragging the ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_draggable"}),"Draggable")," object. "),(0,n.kt)("p",null,"The object is moved according to the drag event."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"event"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The drag event."))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_draggable#function-handledragevent",mdxType:"Link"},"touchgfx::Draggable::handleDragEvent")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_snapper#function-setdragaction",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"setdragaction"}),"setDragAction"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_snapper#function-setdragaction",mdxType:"Link"},"setDragAction")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback"),"<"," const ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_drag_event"}),"DragEvent")," & ",">"," &"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Associates an action to be performed when the ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_snapper"}),"Snapper")," is dragged. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The callback will be executed with the ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_drag_event"}),"DragEvent"),"."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"See also:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback"))))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_snapper#function-setsnappedaction",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"setsnappedaction"}),"setSnappedAction"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_snapper#function-setsnappedaction",mdxType:"Link"},"setSnappedAction")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback"),"<",">"," &"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Associates an action to be performed when the ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_snapper"}),"Snapper")," is snapped. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The callback to be executed on snap."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"See also:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback"))))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_snapper#function-setsnapposition",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"setsnapposition"}),"setSnapPosition"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_snapper#function-setsnapposition",mdxType:"Link"},"setSnapPosition")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"int16_t"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"x ,"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"int16_t"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"y"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Sets the position the ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_snapper"}),"Snapper")," should snap to. "),(0,n.kt)("p",null,"This position will be overridden with the Snappers current position when the ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_snapper"}),"Snapper")," is pressed."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"x"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The x coordinate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"y"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The y coordinate."))))))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_snapper#function-snapper",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"snapper"}),"Snapper"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_snapper#function-snapper",mdxType:"Link"},"Snapper")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"})))}b.isMDXComponent=!0}}]);