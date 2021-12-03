(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7549],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return d},kt:function(){return p}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var c=r.createContext({}),u=function(t){var e=r.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,c=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),s=u(a),p=n,y=s["".concat(c,".").concat(p)]||s[p]||k[p]||o;return a?r.createElement(y,i(i({ref:e},d),{},{components:a})):r.createElement(y,i({ref:e},d))}));function p(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=s;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},43861:function(t,e,a){"use strict";var r=a(67294);class n extends r.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return r.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=n},31217:function(t,e,a){"use strict";a.d(e,{Z:function(){return _}});var r=a(67294),n=a(73727),o=a(11368),i=a(35096),l=a(84487);const c=(0,r.createContext)({collectLink:()=>{}});var u=a(25026),d=a(67023),k=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,b=(t,e,a)=>e in t?k(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,h=(t,e)=>{for(var a in e||(e={}))m.call(e,a)&&b(t,a,e[a]);if(y)for(var a of y(e))f.call(e,a)&&b(t,a,e[a]);return t};var _=function(t){var e,a=t,{isNavLink:k,to:b,href:_,activeClassName:g,isActive:v,"data-noBrokenLinkCheck":N,autoAddBaseUrl:x=!0}=a,w=((t,e)=>{var a={};for(var r in t)m.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(null!=t&&y)for(var r of y(t))e.indexOf(r)<0&&f.call(t,r)&&(a[r]=t[r]);return a})(a,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O}}=(0,o.Z)(),{withBaseUrl:T}=(0,u.C)(),A=(0,r.useContext)(c),P=b||_,C=(0,i.Z)(P),j=null==P?void 0:P.replace("pathname://","");let L=void 0!==j?(Z=j,x&&(t=>t.startsWith("/"))(Z)?T(Z):Z):void 0;var Z;L&&C&&(L=(0,d.applyTrailingSlash)(L,O));const D=(0,r.useRef)(!1),F=k?n.OL:n.rU,E=l.Z.canUseIntersectionObserver;let H;(0,r.useEffect)((()=>(!E&&C&&null!=L&&window.docusaurus.prefetch(L),()=>{E&&H&&H.disconnect()})),[L,E,C]);const I=null!==(e=null==L?void 0:L.startsWith("#"))&&void 0!==e&&e,M=!L||!C||I;return L&&C&&!I&&!N&&A.collectLink(L),M?r.createElement("a",h(h({href:L},P&&!C&&{target:"_blank",rel:"noopener noreferrer"}),w)):r.createElement(F,h((S=h({},w),s(S,p({onMouseEnter:()=>{D.current||null==L||(window.docusaurus.preload(L),D.current=!0)},innerRef:t=>{var e,a;E&&t&&C&&(e=t,a=()=>{null!=L&&window.docusaurus.prefetch(L)},H=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(H.unobserve(e),H.disconnect(),a())}))})),H.observe(e))},to:L||""}))),k&&{isActive:v,activeClassName:g}));var S}},35096:function(t,e,a){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function n(t){return void 0!==t&&!r(t)}a.d(e,{b:function(){return r},Z:function(){return n}})},25026:function(t,e,a){"use strict";a.d(e,{C:function(){return o},Z:function(){return i}});var r=a(11368),n=a(35096);function o(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,r.Z)();return{withBaseUrl:(a,r)=>function(t,e,a,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if((0,n.b)(a))return a;if(r)return e+a;const i=a.startsWith(e)?a:e+a.replace(/^\//,"");return o?t+i:i}(e,t,a,r)}}function i(t,e={}){const{withBaseUrl:a}=o();return a(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(t.startsWith("#"))return t;if(void 0===e)return t;const[a]=t.split(/[#?]/),r="/"===a?"/":(n=a,e?function(t){return t.endsWith("/")?t:`${t}/`}(n):function(t){return t.endsWith("/")?t.slice(0,-1):t}(n));var n;return t.replace(a,r)}},67023:function(t,e,a){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var n=a(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return r(n).default}});var o=a(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return r(o).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},35082:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return y},contentTitle:function(){return m},metadata:function(){return f},toc:function(){return b},default:function(){return _}});var r=a(3905),n=a(31217),o=a(43861),i=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,s=(t,e,a)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,p=(t,e)=>{for(var a in e||(e={}))d.call(e,a)&&s(t,a,e[a]);if(u)for(var a of u(e))k.call(e,a)&&s(t,a,e[a]);return t};const y={title:"Layout"},m=void 0,f={unversionedId:"api/classes/structtouchgfx_1_1_keyboard_1_1_layout",id:"api/classes/structtouchgfx_1_1_keyboard_1_1_layout",isDocsHomePage:!1,title:"Layout",description:"Definition of the keyboard layout.",source:"@site/docs/api/classes/structtouchgfx_1_1_keyboard_1_1_layout.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_keyboard_1_1_layout",permalink:"/4.17/zh-TW/docs/api/classes/structtouchgfx_1_1_keyboard_1_1_layout",version:"current",frontMatter:{title:"Layout"},sidebar:"docs",previous:{title:"KeyMappingList",permalink:"/4.17/zh-TW/docs/api/classes/structtouchgfx_1_1_keyboard_1_1_key_mapping_list"},next:{title:"LCD",permalink:"/4.17/zh-TW/docs/api/classes/classtouchgfx_1_1_l_c_d"}},b=[{value:"Public Attributes",id:"public-attributes",children:[]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"bitmap",id:"bitmap",children:[]},{value:"callbackAreaArray",id:"callbackareaarray",children:[]},{value:"keyArray",id:"keyarray",children:[]},{value:"keyFont",id:"keyfont",children:[]},{value:"keyFontColor",id:"keyfontcolor",children:[]},{value:"numberOfCallbackAreas",id:"numberofcallbackareas",children:[]},{value:"numberOfKeys",id:"numberofkeys",children:[]},{value:"textAreaFont",id:"textareafont",children:[]},{value:"textAreaFontColor",id:"textareafontcolor",children:[]},{value:"textAreaPosition",id:"textareaposition",children:[]}]}],h={toc:b};function _(t){var e,a=t,{components:i}=a,s=((t,e)=>{var a={};for(var r in t)d.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(null!=t&&u)for(var r of u(t))e.indexOf(r)<0&&k.call(t,r)&&(a[r]=t[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(e=p(p({},h),s),l(e,c({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null," Definition of the keyboard layout.\nThe keyboard can handle changing layouts, so different keyboard modes can be implemented by changing layouts and key mappings. "),(0,r.kt)("h2",p({},{id:"public-attributes"}),"Public Attributes"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:"right"})),(0,r.kt)("th",p({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:"right"}),(0,r.kt)("a",p({parentName:"td"},{href:"../namespacetouchgfx#typedef-bitmapid"}),"BitmapId")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_keyboard_1_1_layout#variable-bitmap",mdxType:"Link"},"bitmap")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:"right"})),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"The bitmap used for the keyboard layout.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:"right"})),(0,r.kt)("td",p({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:"right"}),(0,r.kt)("a",p({parentName:"td"},{href:"structtouchgfx_1_1_keyboard_1_1_callback_area"}),"CallbackArea")," *"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_keyboard_1_1_layout#variable-callbackareaarray",mdxType:"Link"},"callbackAreaArray")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:"right"})),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"The array of areas and corresponding callbacks.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:"right"})),(0,r.kt)("td",p({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:"right"}),"const ",(0,r.kt)("a",p({parentName:"td"},{href:"structtouchgfx_1_1_keyboard_1_1_key"}),"Key")," *"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_keyboard_1_1_layout#variable-keyarray",mdxType:"Link"},"keyArray")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:"right"})),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"The keys on the keyboard layout.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:"right"})),(0,r.kt)("td",p({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:"right"}),(0,r.kt)("a",p({parentName:"td"},{href:"../namespacetouchgfx#typedef-fontid"}),"FontId")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_keyboard_1_1_layout#variable-keyfont",mdxType:"Link"},"keyFont")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:"right"})),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"The font used for the keys.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:"right"})),(0,r.kt)("td",p({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:"right"}),(0,r.kt)("a",p({parentName:"td"},{href:"structtouchgfx_1_1colortype"}),"colortype")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_keyboard_1_1_layout#variable-keyfontcolor",mdxType:"Link"},"keyFontColor")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:"right"})),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"The color used for the keys.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:"right"})),(0,r.kt)("td",p({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:"right"}),"uint8_t"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_keyboard_1_1_layout#variable-numberofcallbackareas",mdxType:"Link"},"numberOfCallbackAreas")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:"right"})),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"The number of areas and corresponding callbacks.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:"right"})),(0,r.kt)("td",p({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:"right"}),"uint8_t"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_keyboard_1_1_layout#variable-numberofkeys",mdxType:"Link"},"numberOfKeys")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:"right"})),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"The number of keys on this keyboard layout.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:"right"})),(0,r.kt)("td",p({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:"right"}),(0,r.kt)("a",p({parentName:"td"},{href:"classtouchgfx_1_1_typed_text"}),"TypedText")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_keyboard_1_1_layout#variable-textareafont",mdxType:"Link"},"textAreaFont")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:"right"})),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"The font used for typing text.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:"right"})),(0,r.kt)("td",p({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:"right"}),(0,r.kt)("a",p({parentName:"td"},{href:"structtouchgfx_1_1colortype"}),"colortype")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_keyboard_1_1_layout#variable-textareafontcolor",mdxType:"Link"},"textAreaFontColor")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:"right"})),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"The color used for the typing text.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:"right"})),(0,r.kt)("td",p({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:"right"}),(0,r.kt)("a",p({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_keyboard_1_1_layout#variable-textareaposition",mdxType:"Link"},"textAreaPosition")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:"right"})),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"The area where text is written.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:"right"})),(0,r.kt)("td",p({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",p({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,r.kt)(o.Z,{url:"structtouchgfx_1_1_keyboard_1_1_layout#variable-bitmap",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",p({},{id:"bitmap"}),"bitmap"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",p({parentName:"p"},{href:"../namespacetouchgfx#typedef-bitmapid"}),"BitmapId")," bitmap ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The bitmap used for the keyboard layout. "))),(0,r.kt)(o.Z,{url:"structtouchgfx_1_1_keyboard_1_1_layout#variable-callbackareaarray",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",p({},{id:"callbackareaarray"}),"callbackAreaArray"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",p({parentName:"p"},{href:"structtouchgfx_1_1_keyboard_1_1_callback_area"}),"CallbackArea")," * callbackAreaArray ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The array of areas and corresponding callbacks. "))),(0,r.kt)(o.Z,{url:"structtouchgfx_1_1_keyboard_1_1_layout#variable-keyarray",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",p({},{id:"keyarray"}),"keyArray"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"const ",(0,r.kt)("a",p({parentName:"p"},{href:"structtouchgfx_1_1_keyboard_1_1_key"}),"Key")," * keyArray ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The keys on the keyboard layout. "))),(0,r.kt)(o.Z,{url:"structtouchgfx_1_1_keyboard_1_1_layout#variable-keyfont",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",p({},{id:"keyfont"}),"keyFont"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",p({parentName:"p"},{href:"../namespacetouchgfx#typedef-fontid"}),"FontId")," keyFont ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The font used for the keys. "))),(0,r.kt)(o.Z,{url:"structtouchgfx_1_1_keyboard_1_1_layout#variable-keyfontcolor",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",p({},{id:"keyfontcolor"}),"keyFontColor"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",p({parentName:"p"},{href:"structtouchgfx_1_1colortype"}),"colortype")," keyFontColor ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The color used for the keys. "))),(0,r.kt)(o.Z,{url:"structtouchgfx_1_1_keyboard_1_1_layout#variable-numberofcallbackareas",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",p({},{id:"numberofcallbackareas"}),"numberOfCallbackAreas"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint8_t numberOfCallbackAreas ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The number of areas and corresponding callbacks. "))),(0,r.kt)(o.Z,{url:"structtouchgfx_1_1_keyboard_1_1_layout#variable-numberofkeys",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",p({},{id:"numberofkeys"}),"numberOfKeys"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint8_t numberOfKeys ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The number of keys on this keyboard layout. "))),(0,r.kt)(o.Z,{url:"structtouchgfx_1_1_keyboard_1_1_layout#variable-textareafont",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",p({},{id:"textareafont"}),"textAreaFont"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",p({parentName:"p"},{href:"classtouchgfx_1_1_typed_text"}),"TypedText")," textAreaFont ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The font used for typing text. "))),(0,r.kt)(o.Z,{url:"structtouchgfx_1_1_keyboard_1_1_layout#variable-textareafontcolor",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",p({},{id:"textareafontcolor"}),"textAreaFontColor"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",p({parentName:"p"},{href:"structtouchgfx_1_1colortype"}),"colortype")," textAreaFontColor ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The color used for the typing text. "))),(0,r.kt)(o.Z,{url:"structtouchgfx_1_1_keyboard_1_1_layout#variable-textareaposition",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",p({},{id:"textareaposition"}),"textAreaPosition"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",p({parentName:"p"},{href:"classtouchgfx_1_1_rect"}),"Rect")," textAreaPosition ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The area where text is written. "))))}_.isMDXComponent=!0}}]);