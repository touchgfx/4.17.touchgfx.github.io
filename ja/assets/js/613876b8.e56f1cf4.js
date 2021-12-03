(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3427],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return k}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=u(n),k=a,m=s["".concat(c,".").concat(k)]||s[k]||p[k]||l;return n?r.createElement(m,o(o({ref:e},d),{},{components:n})):r.createElement(m,o({ref:e},d))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},43861:function(t,e,n){"use strict";var r=n(67294);class a extends r.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return r.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=a},31217:function(t,e,n){"use strict";n.d(e,{Z:function(){return N}});var r=n(67294),a=n(73727),l=n(11368),o=n(35096),i=n(84487);const c=(0,r.createContext)({collectLink:()=>{}});var u=n(25026),d=n(67023),p=Object.defineProperty,s=Object.defineProperties,k=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,g=(t,e,n)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,_=(t,e)=>{for(var n in e||(e={}))h.call(e,n)&&g(t,n,e[n]);if(m)for(var n of m(e))f.call(e,n)&&g(t,n,e[n]);return t};var N=function(t){var e,n=t,{isNavLink:p,to:g,href:N,activeClassName:b,isActive:y,"data-noBrokenLinkCheck":v,autoAddBaseUrl:x=!0}=n,w=((t,e)=>{var n={};for(var r in t)h.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&m)for(var r of m(t))e.indexOf(r)<0&&f.call(t,r)&&(n[r]=t[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:C}}=(0,l.Z)(),{withBaseUrl:T}=(0,u.C)(),O=(0,r.useContext)(c),P=g||N,j=(0,o.Z)(P),I=null==P?void 0:P.replace("pathname://","");let L=void 0!==I?(Z=I,x&&(t=>t.startsWith("/"))(Z)?T(Z):Z):void 0;var Z;L&&j&&(L=(0,d.applyTrailingSlash)(L,C));const D=(0,r.useRef)(!1),E=p?a.OL:a.rU,S=i.Z.canUseIntersectionObserver;let A;(0,r.useEffect)((()=>(!S&&j&&null!=L&&window.docusaurus.prefetch(L),()=>{S&&A&&A.disconnect()})),[L,S,j]);const M=null!==(e=null==L?void 0:L.startsWith("#"))&&void 0!==e&&e,B=!L||!j||M;return L&&j&&!M&&!v&&O.collectLink(L),B?r.createElement("a",_(_({href:L},P&&!j&&{target:"_blank",rel:"noopener noreferrer"}),w)):r.createElement(E,_((U=_({},w),s(U,k({onMouseEnter:()=>{D.current||null==L||(window.docusaurus.preload(L),D.current=!0)},innerRef:t=>{var e,n;S&&t&&j&&(e=t,n=()=>{null!=L&&window.docusaurus.prefetch(L)},A=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(A.unobserve(e),A.disconnect(),n())}))})),A.observe(e))},to:L||""}))),p&&{isActive:y,activeClassName:b}));var U}},35096:function(t,e,n){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!r(t)}n.d(e,{b:function(){return r},Z:function(){return a}})},25026:function(t,e,n){"use strict";n.d(e,{C:function(){return l},Z:function(){return o}});var r=n(11368),a=n(35096);function l(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(t,e,n,{forcePrependBaseUrl:r=!1,absolute:l=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return e+n;const o=n.startsWith(e)?n:e+n.replace(/^\//,"");return l?t+o:o}(e,t,n,r)}}function o(t,e={}){const{withBaseUrl:n}=l();return n(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(t.startsWith("#"))return t;if(void 0===e)return t;const[n]=t.split(/[#?]/),r="/"===n?"/":(a=n,e?function(t){return t.endsWith("/")?t:`${t}/`}(a):function(t){return t.endsWith("/")?t.slice(0,-1):t}(a));var a;return t.replace(n,r)}},67023:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var l=n(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return r(l).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},34443:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return m},contentTitle:function(){return h},metadata:function(){return f},toc:function(){return g},default:function(){return N}});var r=n(3905),a=n(31217),l=n(43861),o=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(t,e,n)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,k=(t,e)=>{for(var n in e||(e={}))d.call(e,n)&&s(t,n,e[n]);if(u)for(var n of u(e))p.call(e,n)&&s(t,n,e[n]);return t};const m={title:"I2CTouchController"},h=void 0,f={unversionedId:"api/classes/classtouchgfx_1_1_i2_c_touch_controller",id:"api/classes/classtouchgfx_1_1_i2_c_touch_controller",isDocsHomePage:!1,title:"I2CTouchController",description:"Specific I2C-enabled type of Touch Controller.",source:"@site/docs/api/classes/classtouchgfx_1_1_i2_c_touch_controller.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_i2_c_touch_controller",permalink:"/4.17/ja/docs/api/classes/classtouchgfx_1_1_i2_c_touch_controller",version:"current",frontMatter:{title:"I2CTouchController"},sidebar:"docs",previous:{title:"I2C",permalink:"/4.17/ja/docs/api/classes/classtouchgfx_1_1_i2_c"},next:{title:"IconButtonStyle",permalink:"/4.17/ja/docs/api/classes/classtouchgfx_1_1_icon_button_style"}},g=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Protected Attributes",id:"protected-attributes",children:[]},{value:"Additional inherited members",id:"additional-inherited-members",children:[{value:'Public Functions inherited from <Link to="classtouchgfx_1_1_touch_controller">TouchController</Link>',id:"public-functions-inherited-from-touchcontroller",children:[]}]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"I2CTouchController",id:"i2ctouchcontroller",children:[]},{value:"init",id:"init",children:[]},{value:"sampleTouch",id:"sampletouch",children:[]},{value:"~I2CTouchController",id:"i2ctouchcontroller-1",children:[]}]},{value:"Protected Attributes Documentation",id:"protected-attributes-documentation",children:[{value:"i2c",id:"i2c",children:[]}]}],_={toc:g};function N(t){var e,n=t,{components:o}=n,s=((t,e)=>{var n={};for(var r in t)d.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&u)for(var r of u(t))e.indexOf(r)<0&&p.call(t,r)&&(n[r]=t[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(e=k(k({},_),s),i(e,c({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null," Specific I2C-enabled type of Touch Controller. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"See"),": ",(0,r.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_touch_controller"}),"TouchController")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Inherits from"),":  ",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_touch_controller",mdxType:"Link"},"TouchController")),(0,r.kt)("h2",k({},{id:"public-functions"}),"Public Functions"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:"right"})),(0,r.kt)("th",k({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_i2_c_touch_controller#function-i2ctouchcontroller",mdxType:"Link"},"I2CTouchController")),"(",(0,r.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_i2_c"}),"I2C")," & i2c)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Constructor.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_i2_c_touch_controller#function-init",mdxType:"Link"},"init")),"() =0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Initializes touch controller.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_i2_c_touch_controller#function-sampletouch",mdxType:"Link"},"sampleTouch")),"(int32_t & x, int32_t & y) =0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Checks whether the touch screen is being touched, and if so, what coordinates.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_i2_c_touch_controller#function-~i2ctouchcontroller",mdxType:"Link"},"~I2CTouchController")),"()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",k({},{id:"protected-attributes"}),"Protected Attributes"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:"right"})),(0,r.kt)("th",k({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"}),(0,r.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_i2_c"}),"I2C")," &"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_i2_c_touch_controller#variable-i2c",mdxType:"Link"},"i2c")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_i2_c"}),"I2C")," driver.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",k({},{id:"additional-inherited-members"}),"Additional inherited members"),(0,r.kt)("h3",k({},{id:"public-functions-inherited-from-touchcontroller"}),"Public Functions inherited from ",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_touch_controller",mdxType:"Link"},"TouchController")),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:"right"})),(0,r.kt)("th",k({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_touch_controller#function-~touchcontroller",mdxType:"Link"},"~TouchController")),"()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,r.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_touch_controller"}),"TouchController")," class.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",k({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,r.kt)(l.Z,{url:"classtouchgfx_1_1_i2_c_touch_controller#function-i2ctouchcontroller",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",k({},{id:"i2ctouchcontroller"}),"I2CTouchController"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_i2_c_touch_controller#function-i2ctouchcontroller",mdxType:"Link"},"I2CTouchController")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_i2_c"}),"I2C")," &"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"i2c"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",k({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Constructor. "),(0,r.kt)("p",null,"Initializes ",(0,r.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_i2_c"}),"I2C")," driver."),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"i2c"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_i2_c"}),"I2C")," driver."))))))),(0,r.kt)(l.Z,{url:"classtouchgfx_1_1_i2_c_touch_controller#function-init",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",k({},{id:"init"}),"init"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_i2_c_touch_controller#function-init",mdxType:"Link"},"init")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"=0"))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Initializes touch controller. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_touch_controller#function-init",mdxType:"Link"},"touchgfx::TouchController::init")))),(0,r.kt)(l.Z,{url:"classtouchgfx_1_1_i2_c_touch_controller#function-sampletouch",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",k({},{id:"sampletouch"}),"sampleTouch"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_i2_c_touch_controller#function-sampletouch",mdxType:"Link"},"sampleTouch")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"int32_t &"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"x ,"),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"=0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"int32_t &"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"y"),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"=0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"=0"),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Checks whether the touch screen is being touched, and if so, what coordinates. "),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"x"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"The x position of the touch.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"y"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"The y position of the touch."))))),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("p",null,"True if a touch has been detected, otherwise false. ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_touch_controller#function-sampletouch",mdxType:"Link"},"touchgfx::TouchController::sampleTouch")))),(0,r.kt)(l.Z,{url:"classtouchgfx_1_1_i2_c_touch_controller#function-~i2ctouchcontroller",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",k({},{id:"i2ctouchcontroller-1"}),"~I2CTouchController"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})),(0,r.kt)("th",k({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"virtual","\xa0",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_i2_c_touch_controller#function-~i2ctouchcontroller",mdxType:"Link"},"~I2CTouchController")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",k({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"})),(0,r.kt)("h2",k({},{id:"protected-attributes-documentation"}),"Protected Attributes Documentation"),(0,r.kt)(l.Z,{url:"classtouchgfx_1_1_i2_c_touch_controller#variable-i2c",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",k({},{id:"i2c"}),"i2c"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_i2_c"}),"I2C")," & i2c ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_i2_c"}),"I2C")," driver. "))))}N.isMDXComponent=!0}}]);