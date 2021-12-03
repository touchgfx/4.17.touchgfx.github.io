(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6847],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return s},kt:function(){return m}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),c=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=c(t.components);return n.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),k=c(a),m=r,u=k["".concat(d,".").concat(m)]||k[m]||p[m]||i;return a?n.createElement(u,l(l({ref:e},s),{},{components:a})):n.createElement(u,l({ref:e},s))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=k;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},43861:function(t,e,a){"use strict";var n=a(67294);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},31217:function(t,e,a){"use strict";a.d(e,{Z:function(){return _}});var n=a(67294),r=a(73727),i=a(11368),l=a(35096),o=a(84487);const d=(0,n.createContext)({collectLink:()=>{}});var c=a(25026),s=a(67023),p=Object.defineProperty,k=Object.defineProperties,m=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,N=(t,e,a)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,f=(t,e)=>{for(var a in e||(e={}))g.call(e,a)&&N(t,a,e[a]);if(u)for(var a of u(e))h.call(e,a)&&N(t,a,e[a]);return t};var _=function(t){var e,a=t,{isNavLink:p,to:N,href:_,activeClassName:b,isActive:y,"data-noBrokenLinkCheck":v,autoAddBaseUrl:x=!0}=a,w=((t,e)=>{var a={};for(var n in t)g.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&u)for(var n of u(t))e.indexOf(n)<0&&h.call(t,n)&&(a[n]=t[n]);return a})(a,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:T}}=(0,i.Z)(),{withBaseUrl:O}=(0,c.C)(),P=(0,n.useContext)(d),L=N||_,Z=(0,l.Z)(L),S=null==L?void 0:L.replace("pathname://","");let C=void 0!==S?(D=S,x&&(t=>t.startsWith("/"))(D)?O(D):D):void 0;var D;C&&Z&&(C=(0,s.applyTrailingSlash)(C,T));const j=(0,n.useRef)(!1),E=p?r.OL:r.rU,A=o.Z.canUseIntersectionObserver;let M;(0,n.useEffect)((()=>(!A&&Z&&null!=C&&window.docusaurus.prefetch(C),()=>{A&&M&&M.disconnect()})),[C,A,Z]);const R=null!==(e=null==C?void 0:C.startsWith("#"))&&void 0!==e&&e,I=!C||!Z||R;return C&&Z&&!R&&!v&&P.collectLink(C),I?n.createElement("a",f(f({href:C},L&&!Z&&{target:"_blank",rel:"noopener noreferrer"}),w)):n.createElement(E,f((W=f({},w),k(W,m({onMouseEnter:()=>{j.current||null==C||(window.docusaurus.preload(C),j.current=!0)},innerRef:t=>{var e,a;A&&t&&Z&&(e=t,a=()=>{null!=C&&window.docusaurus.prefetch(C)},M=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(M.unobserve(e),M.disconnect(),a())}))})),M.observe(e))},to:C||""}))),p&&{isActive:y,activeClassName:b}));var W}},35096:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}a.d(e,{b:function(){return n},Z:function(){return r}})},25026:function(t,e,a){"use strict";a.d(e,{C:function(){return i},Z:function(){return l}});var n=a(11368),r=a(35096);function i(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,n.Z)();return{withBaseUrl:(a,n)=>function(t,e,a,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(n)return e+a;const l=a.startsWith(e)?a:e+a.replace(/^\//,"");return i?t+l:l}(e,t,a,n)}}function l(t,e={}){const{withBaseUrl:a}=i();return a(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(t.startsWith("#"))return t;if(void 0===e)return t;const[a]=t.split(/[#?]/),n="/"===a?"/":(r=a,e?function(t){return t.endsWith("/")?t:`${t}/`}(r):function(t){return t.endsWith("/")?t.slice(0,-1):t}(r));var r;return t.replace(a,n)}},67023:function(t,e,a){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=a(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return n(r).default}});var i=a(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return n(i).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},72137:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return u},contentTitle:function(){return g},metadata:function(){return h},toc:function(){return N},default:function(){return _}});var n=a(3905),r=a(31217),i=a(43861),l=Object.defineProperty,o=Object.defineProperties,d=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,k=(t,e,a)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,m=(t,e)=>{for(var a in e||(e={}))s.call(e,a)&&k(t,a,e[a]);if(c)for(var a of c(e))p.call(e,a)&&k(t,a,e[a]);return t};const u={title:"View"},g=void 0,h={unversionedId:"api/classes/classtouchgfx_1_1_view",id:"api/classes/classtouchgfx_1_1_view",isDocsHomePage:!1,title:"View",description:"This is a generic touchgfx::Screen specialization for normal applications.",source:"@site/docs/api/classes/classtouchgfx_1_1_view.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_view",permalink:"/4.17/zh-TW/docs/api/classes/classtouchgfx_1_1_view",version:"current",frontMatter:{title:"View"},sidebar:"docs",previous:{title:"Vector4",permalink:"/4.17/zh-TW/docs/api/classes/classtouchgfx_1_1_vector4"},next:{title:"Widget",permalink:"/4.17/zh-TW/docs/api/classes/classtouchgfx_1_1_widget"}},N=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Protected Attributes",id:"protected-attributes",children:[]},{value:"Additional inherited members",id:"additional-inherited-members",children:[{value:'Public Functions inherited from <Link to="classtouchgfx_1_1_screen">Screen</Link>',id:"public-functions-inherited-from-screen",children:[]},{value:'Protected Functions inherited from <Link to="classtouchgfx_1_1_screen">Screen</Link>',id:"protected-functions-inherited-from-screen",children:[]},{value:'Protected Attributes inherited from <Link to="classtouchgfx_1_1_screen">Screen</Link>',id:"protected-attributes-inherited-from-screen",children:[]}]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"bind",id:"bind",children:[]},{value:"View",id:"view",children:[]}]},{value:"Protected Attributes Documentation",id:"protected-attributes-documentation",children:[{value:"presenter",id:"presenter",children:[]}]}],f={toc:N};function _(t){var e,a=t,{components:l}=a,k=((t,e)=>{var a={};for(var n in t)s.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&c)for(var n of c(t))e.indexOf(n)<0&&p.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=m(m({},f),k),o(e,d({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null," This is a generic ",(0,n.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_screen"}),"touchgfx::Screen")," specialization for normal applications.\nIt provides a link to the ",(0,n.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_presenter"}),"Presenter")," class."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Template Parameters"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"T")," The type of ",(0,n.kt)("a",m({parentName:"li"},{href:"classtouchgfx_1_1_presenter"}),"Presenter")," associated with this view.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"See"),": ",(0,n.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_screen"}),"Screen")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": All views in the application must be a subclass of this type. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Inherits from"),":  ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_screen",mdxType:"Link"},"Screen")),(0,n.kt)("h2",m({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:"right"})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_view#function-bind",mdxType:"Link"},"bind")),"(T & presenter)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Binds an instance of a specific ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_presenter"}),"Presenter")," type (subclass) to the ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_view"}),"View")," instance.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_view#function-view",mdxType:"Link"},"View")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",m({},{id:"protected-attributes"}),"Protected Attributes"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:"right"})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"T *"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_view#variable-presenter",mdxType:"Link"},"presenter")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Pointer to the ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_presenter"}),"Presenter")," associated with this view.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",m({},{id:"additional-inherited-members"}),"Additional inherited members"),(0,n.kt)("h3",m({},{id:"public-functions-inherited-from-screen"}),"Public Functions inherited from ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_screen",mdxType:"Link"},"Screen")),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:"right"})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_screen#function-aftertransition",mdxType:"Link"},"afterTransition")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Called by ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_application#function-handletickevent"}),"Application::handleTickEvent()")," when the transition to the screen is done.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_screen#function-bindtransition",mdxType:"Link"},"bindTransition")),"(",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_transition"}),"Transition")," & trans)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Enables the transition to access the containers.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_screen#function-draw",mdxType:"Link"},"draw")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Tells the screen to draw its entire area.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_screen#function-draw",mdxType:"Link"},"draw")),"(",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," & rect)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Tell the screen to draw the specified area.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_container"}),"Container")," &"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_screen#function-getrootcontainer",mdxType:"Link"},"getRootContainer")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Obtain a reference to the root container of this screen.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"int16_t"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_screen#function-getscreenheight",mdxType:"Link"},"getScreenHeight")),"() const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Gets height of the current screen.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"int16_t"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_screen#function-getscreenwidth",mdxType:"Link"},"getScreenWidth")),"() const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Gets width of the current screen.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_screen#function-handleclickevent",mdxType:"Link"},"handleClickEvent")),"(const ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_click_event"}),"ClickEvent")," & event)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Traverse the drawables in reverse z-order and notify them of a click event.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_screen#function-handledragevent",mdxType:"Link"},"handleDragEvent")),"(const ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_drag_event"}),"DragEvent")," & event)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Traverse the drawables in reverse z-order and notify them of a drag event.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_screen#function-handlegestureevent",mdxType:"Link"},"handleGestureEvent")),"(const ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_gesture_event"}),"GestureEvent")," & event)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Handle gestures.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_screen#function-handlekeyevent",mdxType:"Link"},"handleKeyEvent")),"(uint8_t key)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Called by the ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_application"}),"Application"),' on the reception of a "key", the meaning of which is platform/application specific.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_screen#function-handletickevent",mdxType:"Link"},"handleTickEvent")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Called by the ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_application"}),"Application")," on the current screen with a frequency of ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_application#variable-tick_interval_ms"}),"Application::TICK_INTERVAL_MS"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_screen#function-jsmoc",mdxType:"Link"},"JSMOC")),"(const ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," & invalidatedArea, ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_drawable"}),"Drawable")," * widgetToDraw)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Recursive JSMOC function.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_screen#function-screen",mdxType:"Link"},"Screen")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_screen"}),"Screen")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_screen#function-setupscreen",mdxType:"Link"},"setupScreen")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Called by ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_application#function-switchscreen"}),"Application::switchScreen()")," when this screen is going to be displayed.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_screen#function-startsmoc",mdxType:"Link"},"startSMOC")),"(const ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," & invalidatedArea)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Starts a JSMOC run, analyzing what parts of what widgets should be redrawn.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_screen#function-teardownscreen",mdxType:"Link"},"tearDownScreen")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Called by ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_application#function-switchscreen"}),"Application::switchScreen()")," when this screen will no longer be displayed.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"bool"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_screen#function-usingsmoc",mdxType:"Link"},"usingSMOC")),"() const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Determines if using JSMOC.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_screen#function-~screen",mdxType:"Link"},"~Screen")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_screen"}),"Screen")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null})))))),(0,n.kt)("h3",m({},{id:"protected-functions-inherited-from-screen"}),"Protected Functions inherited from ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_screen",mdxType:"Link"},"Screen")),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:"right"})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_screen#function-add",mdxType:"Link"},"add")),"(",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_drawable"}),"Drawable")," & d)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Add a drawable to the content container.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_screen#function-insert",mdxType:"Link"},"insert")),"(",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_drawable"}),"Drawable")," * previous, ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_drawable"}),"Drawable")," & d)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Inserts a ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_drawable"}),"Drawable")," after a specific child node.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_screen#function-invalidate",mdxType:"Link"},"invalidate")),"() const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Tell the framework that this entire ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_screen"}),"Screen")," needs to be redrawn.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_screen#function-invalidaterect",mdxType:"Link"},"invalidateRect")),"(",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," & invalidatedArea) const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Request that a region of this screen is redrawn.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_screen#function-remove",mdxType:"Link"},"remove")),"(",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_drawable"}),"Drawable")," & d)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Removes a drawable from the content container.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_screen#function-usesmocdrawing",mdxType:"Link"},"useSMOCDrawing")),"(bool enabled)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Determines whether to use JSMOC or painter's algorithm for drawing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null})))))),(0,n.kt)("h3",m({},{id:"protected-attributes-inherited-from-screen"}),"Protected Attributes inherited from ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_screen",mdxType:"Link"},"Screen")),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:"right"})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_container"}),"Container")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_screen#variable-container",mdxType:"Link"},"container")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"The container contains the contents of the screen.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_drawable"}),"Drawable")," *"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_screen#variable-focus",mdxType:"Link"},"focus")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"The drawable currently in focus (set when DOWN_PRESSED is received).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",m({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(i.Z,{url:"classtouchgfx_1_1_view#function-bind",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",m({},{id:"bind"}),"bind"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_view#function-bind",mdxType:"Link"},"bind")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"T &"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"presenter"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Binds an instance of a specific ",(0,n.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_presenter"}),"Presenter")," type (subclass) to the ",(0,n.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_view"}),"View")," instance. "),(0,n.kt)("p",null,"This function is called automatically when a new presenter/view pair is activated."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"presenter"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"The specific ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_presenter"}),"Presenter")," to be associated with the ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_view"}),"View"),"."))))))),(0,n.kt)(i.Z,{url:"classtouchgfx_1_1_view#function-view",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",m({},{id:"view"}),"View"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_view#function-view",mdxType:"Link"},"View")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",m({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"})),(0,n.kt)("h2",m({},{id:"protected-attributes-documentation"}),"Protected Attributes Documentation"),(0,n.kt)(i.Z,{url:"classtouchgfx_1_1_view#variable-presenter",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",m({},{id:"presenter"}),"presenter"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"T * presenter ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"Pointer to the ",(0,n.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_presenter"}),"Presenter")," associated with this view. "))))}_.isMDXComponent=!0}}]);