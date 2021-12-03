(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[603],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return u},kt:function(){return k}});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=a.createContext({}),c=function(t){var e=a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):d(d({},e),t)),r},u=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=c(r),k=n,m=s["".concat(l,".").concat(k)]||s[k]||p[k]||i;return r?a.createElement(m,d(d({ref:e},u),{},{components:r})):a.createElement(m,d({ref:e},u))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,d=new Array(i);d[0]=s;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:n,d[1]=o;for(var c=2;c<i;c++)d[c]=r[c];return a.createElement.apply(null,d)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},43861:function(t,e,r){"use strict";var a=r(67294);class n extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=n},31217:function(t,e,r){"use strict";r.d(e,{Z:function(){return b}});var a=r(67294),n=r(73727),i=r(11368),d=r(35096),o=r(84487);const l=(0,a.createContext)({collectLink:()=>{}});var c=r(25026),u=r(67023),p=Object.defineProperty,s=Object.defineProperties,k=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,f=(t,e,r)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,h=(t,e)=>{for(var r in e||(e={}))v.call(e,r)&&f(t,r,e[r]);if(m)for(var r of m(e))g.call(e,r)&&f(t,r,e[r]);return t};var b=function(t){var e,r=t,{isNavLink:p,to:f,href:b,activeClassName:N,isActive:y,"data-noBrokenLinkCheck":_,autoAddBaseUrl:x=!0}=r,O=((t,e)=>{var r={};for(var a in t)v.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(null!=t&&m)for(var a of m(t))e.indexOf(a)<0&&g.call(t,a)&&(r[a]=t[a]);return r})(r,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:w}}=(0,i.Z)(),{withBaseUrl:Z}=(0,c.C)(),z=(0,a.useContext)(l),T=f||b,P=(0,d.Z)(T),j=null==T?void 0:T.replace("pathname://","");let L=void 0!==j?(X=j,x&&(t=>t.startsWith("/"))(X)?Z(X):X):void 0;var X;L&&P&&(L=(0,u.applyTrailingSlash)(L,w));const D=(0,a.useRef)(!1),U=p?n.OL:n.rU,C=o.Z.canUseIntersectionObserver;let M;(0,a.useEffect)((()=>(!C&&P&&null!=L&&window.docusaurus.prefetch(L),()=>{C&&M&&M.disconnect()})),[L,C,P]);const E=null!==(e=null==L?void 0:L.startsWith("#"))&&void 0!==e&&e,V=!L||!P||E;return L&&P&&!E&&!_&&z.collectLink(L),V?a.createElement("a",h(h({href:L},T&&!P&&{target:"_blank",rel:"noopener noreferrer"}),O)):a.createElement(U,h((Y=h({},O),s(Y,k({onMouseEnter:()=>{D.current||null==L||(window.docusaurus.preload(L),D.current=!0)},innerRef:t=>{var e,r;C&&t&&P&&(e=t,r=()=>{null!=L&&window.docusaurus.prefetch(L)},M=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(M.unobserve(e),M.disconnect(),r())}))})),M.observe(e))},to:L||""}))),p&&{isActive:y,activeClassName:N}));var Y}},35096:function(t,e,r){"use strict";function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function n(t){return void 0!==t&&!a(t)}r.d(e,{b:function(){return a},Z:function(){return n}})},25026:function(t,e,r){"use strict";r.d(e,{C:function(){return i},Z:function(){return d}});var a=r(11368),n=r(35096);function i(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,a.Z)();return{withBaseUrl:(r,a)=>function(t,e,r,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,n.b)(r))return r;if(a)return e+r;const d=r.startsWith(e)?r:e+r.replace(/^\//,"");return i?t+d:d}(e,t,r,a)}}function d(t,e={}){const{withBaseUrl:r}=i();return r(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(t.startsWith("#"))return t;if(void 0===e)return t;const[r]=t.split(/[#?]/),a="/"===r?"/":(n=r,e?function(t){return t.endsWith("/")?t:`${t}/`}(n):function(t){return t.endsWith("/")?t.slice(0,-1):t}(n));var n;return t.replace(r,a)}},67023:function(t,e,r){"use strict";var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var n=r(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return a(n).default}});var i=r(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return a(i).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},30827:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return m},contentTitle:function(){return v},metadata:function(){return g},toc:function(){return f},default:function(){return b}});var a=r(3905),n=r(31217),i=r(43861),d=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(t,e,r)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,k=(t,e)=>{for(var r in e||(e={}))u.call(e,r)&&s(t,r,e[r]);if(c)for(var r of c(e))p.call(e,r)&&s(t,r,e[r]);return t};const m={title:"Gradients"},v=void 0,g={unversionedId:"api/classes/structtouchgfx_1_1_gradients",id:"api/classes/structtouchgfx_1_1_gradients",isDocsHomePage:!1,title:"Gradients",description:"Gradients contains all the data to interpolate u,v texture coordinates and z coordinates across a planar surface.",source:"@site/docs/api/classes/structtouchgfx_1_1_gradients.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_gradients",permalink:"/4.17/ko/docs/api/classes/structtouchgfx_1_1_gradients",version:"current",frontMatter:{title:"Gradients"},sidebar:"docs",previous:{title:"GPIO",permalink:"/4.17/ko/docs/api/classes/classtouchgfx_1_1_g_p_i_o"},next:{title:"GraphClickEvent",permalink:"/4.17/ko/docs/api/classes/classtouchgfx_1_1_abstract_data_graph_1_1_graph_click_event"}},f=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Public Attributes",id:"public-attributes",children:[]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"Gradients",id:"gradients",children:[]}]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"dOneOverZdX",id:"doneoverzdx",children:[]},{value:"dOneOverZdY",id:"doneoverzdy",children:[]},{value:"dUdXModifier",id:"dudxmodifier",children:[]},{value:"dUOverZdX",id:"duoverzdx",children:[]},{value:"dUOverZdY",id:"duoverzdy",children:[]},{value:"dVdXModifier",id:"dvdxmodifier",children:[]},{value:"dVOverZdX",id:"dvoverzdx",children:[]},{value:"dVOverZdY",id:"dvoverzdy",children:[]},{value:"oneOverZ",id:"oneoverz",children:[]},{value:"UOverZ",id:"uoverz",children:[]},{value:"VOverZ",id:"voverz",children:[]}]}],h={toc:f};function b(t){var e,r=t,{components:d}=r,s=((t,e)=>{var r={};for(var a in t)u.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(null!=t&&c)for(var a of c(t))e.indexOf(a)<0&&p.call(t,a)&&(r[a]=t[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(e=k(k({},h),s),o(e,l({components:d,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Gradients contains all the data to interpolate u,v texture coordinates and z coordinates across a planar surface. "),(0,a.kt)("h2",k({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:"right"})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_gradients#function-gradients",mdxType:"Link"},"Gradients")),"(const ",(0,a.kt)("a",k({parentName:"td"},{href:"structtouchgfx_1_1_point3_d"}),"Point3D")," * vertices)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Initializes a new instance of the TextureMapTypes class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",k({},{id:"public-attributes"}),"Public Attributes"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:"right"})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"float"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_gradients#variable-doneoverzdx",mdxType:"Link"},"dOneOverZdX")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"d(1/z)/dX")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"float"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_gradients#variable-doneoverzdy",mdxType:"Link"},"dOneOverZdY")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"d(1/z)/dY")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),(0,a.kt)("a",k({parentName:"td"},{href:"../namespacetouchgfx#typedef-fixed16_16"}),"fixed16_16")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_gradients#variable-dudxmodifier",mdxType:"Link"},"dUdXModifier")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The dUdX x coordinate modifier.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"float"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_gradients#variable-duoverzdx",mdxType:"Link"},"dUOverZdX")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"d(u/z)/dX")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"float"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_gradients#variable-duoverzdy",mdxType:"Link"},"dUOverZdY")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"d(u/z)/dY")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),(0,a.kt)("a",k({parentName:"td"},{href:"../namespacetouchgfx#typedef-fixed16_16"}),"fixed16_16")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_gradients#variable-dvdxmodifier",mdxType:"Link"},"dVdXModifier")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The dVdX x coordinate modifier.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"float"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_gradients#variable-dvoverzdx",mdxType:"Link"},"dVOverZdX")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"d(v/z)/dX")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"float"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_gradients#variable-dvoverzdy",mdxType:"Link"},"dVOverZdY")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"d(v/z)/dY")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"float"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_gradients#variable-oneoverz",mdxType:"Link"},"oneOverZ")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"1/z for each vertex")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"float"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_gradients#variable-uoverz",mdxType:"Link"},"UOverZ")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"u/z for each vertex")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"float"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_gradients#variable-voverz",mdxType:"Link"},"VOverZ")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"v/z for each vertex")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",k({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_gradients#function-gradients",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"gradients"}),"Gradients"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_gradients#function-gradients",mdxType:"Link"},"Gradients")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"const ",(0,a.kt)("a",k({parentName:"td"},{href:"structtouchgfx_1_1_point3_d"}),"Point3D")," *"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"vertices"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Initializes a new instance of the TextureMapTypes class. "),(0,a.kt)("p",null,"Construct the gradients using three 3D vertices."),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"vertices"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The vertices."))))),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"See also:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,(0,a.kt)("a",k({parentName:"p"},{href:"structtouchgfx_1_1_point3_d"}),"Point3D"))))),(0,a.kt)("h2",k({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_gradients#variable-doneoverzdx",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"doneoverzdx"}),"dOneOverZdX"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"float dOneOverZdX ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"d(1/z)/dX "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_gradients#variable-doneoverzdy",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"doneoverzdy"}),"dOneOverZdY"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"float dOneOverZdY ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"d(1/z)/dY "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_gradients#variable-dudxmodifier",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"dudxmodifier"}),"dUdXModifier"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,(0,a.kt)("a",k({parentName:"p"},{href:"../namespacetouchgfx#typedef-fixed16_16"}),"fixed16_16")," dUdXModifier ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The dUdX x coordinate modifier. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_gradients#variable-duoverzdx",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"duoverzdx"}),"dUOverZdX"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"float dUOverZdX ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"d(u/z)/dX "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_gradients#variable-duoverzdy",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"duoverzdy"}),"dUOverZdY"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"float dUOverZdY ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"d(u/z)/dY "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_gradients#variable-dvdxmodifier",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"dvdxmodifier"}),"dVdXModifier"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,(0,a.kt)("a",k({parentName:"p"},{href:"../namespacetouchgfx#typedef-fixed16_16"}),"fixed16_16")," dVdXModifier ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The dVdX x coordinate modifier. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_gradients#variable-dvoverzdx",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"dvoverzdx"}),"dVOverZdX"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"float dVOverZdX ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"d(v/z)/dX "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_gradients#variable-dvoverzdy",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"dvoverzdy"}),"dVOverZdY"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"float dVOverZdY ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"d(v/z)/dY "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_gradients#variable-oneoverz",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"oneoverz"}),"oneOverZ"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"float oneOverZ ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"1/z for each vertex "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_gradients#variable-uoverz",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"uoverz"}),"UOverZ"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"float UOverZ ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"u/z for each vertex "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_gradients#variable-voverz",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"voverz"}),"VOverZ"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"float VOverZ ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"v/z for each vertex "))))}b.isMDXComponent=!0}}]);