(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3948],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),p=u(n),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,i(i({ref:e},s),{},{components:n})):r.createElement(m,i({ref:e},s))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},43861:function(t,e,n){"use strict";var r=n(67294);class a extends r.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return r.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=a},31217:function(t,e,n){"use strict";n.d(e,{Z:function(){return b}});var r=n(67294),a=n(73727),o=n(11368),i=n(35096),l=n(84487);const c=(0,r.createContext)({collectLink:()=>{}});var u=n(25026),s=n(67023),d=Object.defineProperty,p=Object.defineProperties,f=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,h=(t,e,n)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,v=(t,e)=>{for(var n in e||(e={}))k.call(e,n)&&h(t,n,e[n]);if(m)for(var n of m(e))g.call(e,n)&&h(t,n,e[n]);return t};var b=function(t){var e,n=t,{isNavLink:d,to:h,href:b,activeClassName:N,isActive:y,"data-noBrokenLinkCheck":_,autoAddBaseUrl:O=!0}=n,w=((t,e)=>{var n={};for(var r in t)k.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&m)for(var r of m(t))e.indexOf(r)<0&&g.call(t,r)&&(n[r]=t[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:x}}=(0,o.Z)(),{withBaseUrl:P}=(0,u.C)(),j=(0,r.useContext)(c),F=h||b,T=(0,i.Z)(F),C=null==F?void 0:F.replace("pathname://","");let E=void 0!==C?(D=C,O&&(t=>t.startsWith("/"))(D)?P(D):D):void 0;var D;E&&T&&(E=(0,s.applyTrailingSlash)(E,x));const M=(0,r.useRef)(!1),I=d?a.OL:a.rU,Z=l.Z.canUseIntersectionObserver;let L;(0,r.useEffect)((()=>(!Z&&T&&null!=E&&window.docusaurus.prefetch(E),()=>{Z&&L&&L.disconnect()})),[E,Z,T]);const S=null!==(e=null==E?void 0:E.startsWith("#"))&&void 0!==e&&e,U=!E||!T||S;return E&&T&&!S&&!_&&j.collectLink(E),U?r.createElement("a",v(v({href:E},F&&!T&&{target:"_blank",rel:"noopener noreferrer"}),w)):r.createElement(I,v((A=v({},w),p(A,f({onMouseEnter:()=>{M.current||null==E||(window.docusaurus.preload(E),M.current=!0)},innerRef:t=>{var e,n;Z&&t&&T&&(e=t,n=()=>{null!=E&&window.docusaurus.prefetch(E)},L=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(L.unobserve(e),L.disconnect(),n())}))})),L.observe(e))},to:E||""}))),d&&{isActive:y,activeClassName:N}));var A}},35096:function(t,e,n){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!r(t)}n.d(e,{b:function(){return r},Z:function(){return a}})},25026:function(t,e,n){"use strict";n.d(e,{C:function(){return o},Z:function(){return i}});var r=n(11368),a=n(35096);function o(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(t,e,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return e+n;const i=n.startsWith(e)?n:e+n.replace(/^\//,"");return o?t+i:i}(e,t,n,r)}}function i(t,e={}){const{withBaseUrl:n}=o();return n(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(t.startsWith("#"))return t;if(void 0===e)return t;const[n]=t.split(/[#?]/),r="/"===n?"/":(a=n,e?function(t){return t.endsWith("/")?t:`${t}/`}(a):function(t){return t.endsWith("/")?t.slice(0,-1):t}(a));var a;return t.replace(n,r)}},67023:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var o=n(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return r(o).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},87987:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return m},contentTitle:function(){return k},metadata:function(){return g},toc:function(){return h},default:function(){return b}});var r=n(3905),a=n(31217),o=n(43861),i=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,f=(t,e)=>{for(var n in e||(e={}))s.call(e,n)&&p(t,n,e[n]);if(u)for(var n of u(e))d.call(e,n)&&p(t,n,e[n]);return t};const m={title:"FontManager"},k=void 0,g={unversionedId:"api/classes/classtouchgfx_1_1_font_manager",id:"api/classes/classtouchgfx_1_1_font_manager",isDocsHomePage:!1,title:"FontManager",description:"This class is the entry point for looking up a font based on a font id.",source:"@site/docs/api/classes/classtouchgfx_1_1_font_manager.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_font_manager",permalink:"/4.17/ja/docs/api/classes/classtouchgfx_1_1_font_manager",version:"current",frontMatter:{title:"FontManager"},sidebar:"docs",previous:{title:"FontContextualFormsTable",permalink:"/4.17/ja/docs/api/classes/structtouchgfx_1_1_font_contextual_forms_table"},next:{title:"FontProvider",permalink:"/4.17/ja/docs/api/classes/classtouchgfx_1_1_font_provider"}},h=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"getFont",id:"getfont",children:[]},{value:"setFontProvider",id:"setfontprovider",children:[]}]}],v={toc:h};function b(t){var e,n=t,{components:i}=n,p=((t,e)=>{var n={};for(var r in t)s.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&u)for(var r of u(t))e.indexOf(r)<0&&d.call(t,r)&&(n[r]=t[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(e=f(f({},v),p),l(e,c({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null," This class is the entry point for looking up a font based on a font id.\nMust be initialized with the appropriate ",(0,r.kt)("a",f({parentName:"p"},{href:"classtouchgfx_1_1_font_provider"}),"FontProvider")," by the application. "),(0,r.kt)("h2",f({},{id:"public-functions"}),"Public Functions"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:"right"})),(0,r.kt)("th",f({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"}),(0,r.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_font"}),"Font")," *"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_font_manager#function-getfont",mdxType:"Link"},"getFont")),"(",(0,r.kt)("a",f({parentName:"td"},{href:"../namespacetouchgfx#typedef-fontid"}),"FontId")," fontId)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Gets a font.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"}),"void"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_font_manager#function-setfontprovider",mdxType:"Link"},"setFontProvider")),"(",(0,r.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_font_provider"}),"FontProvider")," * fontProvider)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Sets the font provider.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"right"})),(0,r.kt)("td",f({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",f({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,r.kt)(o.Z,{url:"classtouchgfx_1_1_font_manager#function-getfont",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",f({},{id:"getfont"}),"getFont"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"static","\xa0","Font *","\xa0",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_font_manager#function-getfont",mdxType:"Link"},"getFont")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("a",f({parentName:"td"},{href:"../namespacetouchgfx#typedef-fontid"}),"FontId")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"fontId"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",f({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Gets a font. "),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"fontId"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"The FontId of the font to get."))))),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("p",null,"The font with a FontId of fontId. ")))),(0,r.kt)(o.Z,{url:"classtouchgfx_1_1_font_manager#function-setfontprovider",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",f({},{id:"setfontprovider"}),"setFontProvider"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,r.kt)(a.Z,{to:"classtouchgfx_1_1_font_manager#function-setfontprovider",mdxType:"Link"},"setFontProvider")),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",f({parentName:"tr"},{align:null}),(0,r.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_font_provider"}),"FontProvider")," *"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"fontProvider"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",f({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})),(0,r.kt)("td",f({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Sets the font provider. "),(0,r.kt)("p",null,"Must be initialized with the appropriate ",(0,r.kt)("a",f({parentName:"p"},{href:"classtouchgfx_1_1_font_provider"}),"FontProvider")," by the application."),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:null})),(0,r.kt)("th",f({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:null}),"fontProvider"),(0,r.kt)("td",f({parentName:"tr"},{align:null}),"Sets the font provider. Must be initialized with the appropriate ",(0,r.kt)("a",f({parentName:"td"},{href:"classtouchgfx_1_1_font_provider"}),"FontProvider")," by the application."))))))))}b.isMDXComponent=!0}}]);