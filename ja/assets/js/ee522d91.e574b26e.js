(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9449],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),l=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=l(t.components);return n.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),f=l(r),d=a,b=f["".concat(u,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(b,o(o({ref:e},s),{},{components:r})):n.createElement(b,o({ref:e},s))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},43861:function(t,e,r){"use strict";var n=r(67294);class a extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=a},31217:function(t,e,r){"use strict";r.d(e,{Z:function(){return y}});var n=r(67294),a=r(73727),i=r(11368),o=r(35096),c=r(84487);const u=(0,n.createContext)({collectLink:()=>{}});var l=r(25026),s=r(67023),p=Object.defineProperty,f=Object.defineProperties,d=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,_=(t,e,r)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,v=(t,e)=>{for(var r in e||(e={}))m.call(e,r)&&_(t,r,e[r]);if(b)for(var r of b(e))h.call(e,r)&&_(t,r,e[r]);return t};var y=function(t){var e,r=t,{isNavLink:p,to:_,href:y,activeClassName:g,isActive:k,"data-noBrokenLinkCheck":O,autoAddBaseUrl:w=!0}=r,j=((t,e)=>{var r={};for(var n in t)m.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&b)for(var n of b(t))e.indexOf(n)<0&&h.call(t,n)&&(r[n]=t[n]);return r})(r,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:x}}=(0,i.Z)(),{withBaseUrl:P}=(0,l.C)(),C=(0,n.useContext)(u),N=_||y,E=(0,o.Z)(N),T=null==N?void 0:N.replace("pathname://","");let D=void 0!==T?(A=T,w&&(t=>t.startsWith("/"))(A)?P(A):A):void 0;var A;D&&E&&(D=(0,s.applyTrailingSlash)(D,x));const S=(0,n.useRef)(!1),Z=p?a.OL:a.rU,B=c.Z.canUseIntersectionObserver;let L;(0,n.useEffect)((()=>(!B&&E&&null!=D&&window.docusaurus.prefetch(D),()=>{B&&L&&L.disconnect()})),[D,B,E]);const M=null!==(e=null==D?void 0:D.startsWith("#"))&&void 0!==e&&e,U=!D||!E||M;return D&&E&&!M&&!O&&C.collectLink(D),U?n.createElement("a",v(v({href:D},N&&!E&&{target:"_blank",rel:"noopener noreferrer"}),j)):n.createElement(Z,v((I=v({},j),f(I,d({onMouseEnter:()=>{S.current||null==D||(window.docusaurus.preload(D),S.current=!0)},innerRef:t=>{var e,r;B&&t&&E&&(e=t,r=()=>{null!=D&&window.docusaurus.prefetch(D)},L=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(L.unobserve(e),L.disconnect(),r())}))})),L.observe(e))},to:D||""}))),p&&{isActive:k,activeClassName:g}));var I}},35096:function(t,e,r){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!n(t)}r.d(e,{b:function(){return n},Z:function(){return a}})},25026:function(t,e,r){"use strict";r.d(e,{C:function(){return i},Z:function(){return o}});var n=r(11368),a=r(35096);function i(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(t,e,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(n)return e+r;const o=r.startsWith(e)?r:e+r.replace(/^\//,"");return i?t+o:o}(e,t,r,n)}}function o(t,e={}){const{withBaseUrl:r}=i();return r(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(t.startsWith("#"))return t;if(void 0===e)return t;const[r]=t.split(/[#?]/),n="/"===r?"/":(a=r,e?function(t){return t.endsWith("/")?t:`${t}/`}(a):function(t){return t.endsWith("/")?t.slice(0,-1):t}(a));var a;return t.replace(r,n)}},67023:function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var a=r(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return n(a).default}});var i=r(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return n(i).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},57782:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return b},contentTitle:function(){return m},metadata:function(){return h},toc:function(){return _},default:function(){return y}});var n=r(3905),a=r(31217),i=r(43861),o=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,f=(t,e,r)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,d=(t,e)=>{for(var r in e||(e={}))s.call(e,r)&&f(t,r,e[r]);if(l)for(var r of l(e))p.call(e,r)&&f(t,r,e[r]);return t};const b={title:"CacheTableEntry"},m=void 0,h={unversionedId:"api/classes/structtouchgfx_1_1_bitmap_1_1_cache_table_entry",id:"api/classes/structtouchgfx_1_1_bitmap_1_1_cache_table_entry",isDocsHomePage:!1,title:"CacheTableEntry",description:"Cache bookkeeping.",source:"@site/docs/api/classes/structtouchgfx_1_1_bitmap_1_1_cache_table_entry.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_bitmap_1_1_cache_table_entry",permalink:"/4.17/ja/docs/api/classes/structtouchgfx_1_1_bitmap_1_1_cache_table_entry",version:"current",frontMatter:{title:"CacheTableEntry"},sidebar:"docs",previous:{title:"CacheableContainer",permalink:"/4.17/ja/docs/api/classes/classtouchgfx_1_1_cacheable_container"},next:{title:"Callback",permalink:"/4.17/ja/docs/api/classes/structtouchgfx_1_1_callback"}},_=[{value:"Public Attributes",id:"public-attributes",children:[]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"data",id:"data",children:[]}]}],v={toc:_};function y(t){var e,r=t,{components:o}=r,f=((t,e)=>{var r={};for(var n in t)s.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&l)for(var n of l(t))e.indexOf(n)<0&&p.call(t,n)&&(r[n]=t[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(e=d(d({},v),f),c(e,u({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Cache bookkeeping. "),(0,n.kt)("h2",d({},{id:"public-attributes"}),"Public Attributes"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:"right"})),(0,n.kt)("th",d({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"right"}),"uint8_t *"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(a.Z,{to:"structtouchgfx_1_1_bitmap_1_1_cache_table_entry#variable-data",mdxType:"Link"},"data")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"right"})),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Pointer to location of image data for this ",(0,n.kt)("a",d({parentName:"td"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap")," in the cache. 0 if bitmap not cached.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"right"})),(0,n.kt)("td",d({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",d({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,n.kt)(i.Z,{url:"structtouchgfx_1_1_bitmap_1_1_cache_table_entry#variable-data",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",d({},{id:"data"}),"data"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"uint8_t * data ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"Pointer to location of image data for this ",(0,n.kt)("a",d({parentName:"p"},{href:"classtouchgfx_1_1_bitmap"}),"Bitmap")," in the cache. 0 if bitmap not cached. "))))}y.isMDXComponent=!0}}]);