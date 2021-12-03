(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[716],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return s}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),k=p(n),s=r,h=k["".concat(d,".").concat(s)]||k[s]||c[s]||i;return n?a.createElement(h,l(l({ref:e},u),{},{components:n})):a.createElement(h,l({ref:e},u))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},43861:function(t,e,n){"use strict";var a=n(67294);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},31217:function(t,e,n){"use strict";n.d(e,{Z:function(){return _}});var a=n(67294),r=n(73727),i=n(11368),l=n(35096),o=n(84487);const d=(0,a.createContext)({collectLink:()=>{}});var p=n(25026),u=n(67023),c=Object.defineProperty,k=Object.defineProperties,s=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,N=(t,e,n)=>e in t?c(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,f=(t,e)=>{for(var n in e||(e={}))g.call(e,n)&&N(t,n,e[n]);if(h)for(var n of h(e))m.call(e,n)&&N(t,n,e[n]);return t};var _=function(t){var e,n=t,{isNavLink:c,to:N,href:_,activeClassName:b,isActive:y,"data-noBrokenLinkCheck":v,autoAddBaseUrl:w=!0}=n,x=((t,e)=>{var n={};for(var a in t)g.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&h)for(var a of h(t))e.indexOf(a)<0&&m.call(t,a)&&(n[a]=t[a]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:T}}=(0,i.Z)(),{withBaseUrl:O}=(0,p.C)(),L=(0,a.useContext)(d),P=N||_,C=(0,l.Z)(P),Z=null==P?void 0:P.replace("pathname://","");let I=void 0!==Z?(E=Z,w&&(t=>t.startsWith("/"))(E)?O(E):E):void 0;var E;I&&C&&(I=(0,u.applyTrailingSlash)(I,T));const j=(0,a.useRef)(!1),D=c?r.OL:r.rU,F=o.Z.canUseIntersectionObserver;let U;(0,a.useEffect)((()=>(!F&&C&&null!=I&&window.docusaurus.prefetch(I),()=>{F&&U&&U.disconnect()})),[I,F,C]);const H=null!==(e=null==I?void 0:I.startsWith("#"))&&void 0!==e&&e,R=!I||!C||H;return I&&C&&!H&&!v&&L.collectLink(I),R?a.createElement("a",f(f({href:I},P&&!C&&{target:"_blank",rel:"noopener noreferrer"}),x)):a.createElement(D,f((S=f({},x),k(S,s({onMouseEnter:()=>{j.current||null==I||(window.docusaurus.preload(I),j.current=!0)},innerRef:t=>{var e,n;F&&t&&C&&(e=t,n=()=>{null!=I&&window.docusaurus.prefetch(I)},U=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(U.unobserve(e),U.disconnect(),n())}))})),U.observe(e))},to:I||""}))),c&&{isActive:y,activeClassName:b}));var S}},35096:function(t,e,n){"use strict";function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!a(t)}n.d(e,{b:function(){return a},Z:function(){return r}})},25026:function(t,e,n){"use strict";n.d(e,{C:function(){return i},Z:function(){return l}});var a=n(11368),r=n(35096);function i(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(t,e,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return e+n;const l=n.startsWith(e)?n:e+n.replace(/^\//,"");return i?t+l:l}(e,t,n,a)}}function l(t,e={}){const{withBaseUrl:n}=i();return n(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(t.startsWith("#"))return t;if(void 0===e)return t;const[n]=t.split(/[#?]/),a="/"===n?"/":(r=n,e?function(t){return t.endsWith("/")?t:`${t}/`}(r):function(t){return t.endsWith("/")?t.slice(0,-1):t}(r));var r;return t.replace(n,a)}},67023:function(t,e,n){"use strict";var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=n(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var i=n(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return a(i).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},49183:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return h},contentTitle:function(){return g},metadata:function(){return m},toc:function(){return N},default:function(){return _}});var a=n(3905),r=n(31217),i=n(43861),l=Object.defineProperty,o=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,k=(t,e,n)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,s=(t,e)=>{for(var n in e||(e={}))u.call(e,n)&&k(t,n,e[n]);if(p)for(var n of p(e))c.call(e,n)&&k(t,n,e[n]);return t};const h={title:"GlyphNode"},g=void 0,m={unversionedId:"api/classes/structtouchgfx_1_1_glyph_node",id:"api/classes/structtouchgfx_1_1_glyph_node",isDocsHomePage:!1,title:"GlyphNode",description:"struct providing information about a glyph.",source:"@site/docs/api/classes/structtouchgfx_1_1_glyph_node.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_glyph_node",permalink:"/4.17/zh-CN/docs/api/classes/structtouchgfx_1_1_glyph_node",version:"current",frontMatter:{title:"GlyphNode"},sidebar:"docs",previous:{title:"Gestures",permalink:"/4.17/zh-CN/docs/api/classes/classtouchgfx_1_1_gestures"},next:{title:"GPIO",permalink:"/4.17/zh-CN/docs/api/classes/classtouchgfx_1_1_g_p_i_o"}},N=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Public Attributes",id:"public-attributes",children:[]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"advance",id:"advance",children:[]},{value:"height",id:"height",children:[]},{value:"kerningTablePos",id:"kerningtablepos",children:[]},{value:"setTop",id:"settop",children:[]},{value:"top",id:"top",children:[]},{value:"width",id:"width",children:[]}]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"_advance",id:"_advance",children:[]},{value:"_height",id:"_height",children:[]},{value:"_kerningTablePos",id:"_kerningtablepos",children:[]},{value:"_top",id:"_top",children:[]},{value:"_width",id:"_width",children:[]},{value:"dataOffset",id:"dataoffset",children:[]},{value:"flags",id:"flags",children:[]},{value:"kerningTableSize",id:"kerningtablesize",children:[]},{value:"left",id:"left",children:[]},{value:"unicode",id:"unicode",children:[]}]}],f={toc:N};function _(t){var e,n=t,{components:l}=n,k=((t,e)=>{var n={};for(var a in t)u.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&p)for(var a of p(t))e.indexOf(a)<0&&c.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=s(s({},f),k),o(e,d({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null," struct providing information about a glyph.\nUsed by ",(0,a.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_l_c_d"}),"LCD")," when rendering. "),(0,a.kt)("h2",s({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:"right"})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION uint16_t"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_glyph_node#function-advance",mdxType:"Link"},"advance")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),'Gets the "advance" value where the 9th bit is stored in flags.')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION uint16_t"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_glyph_node#function-height",mdxType:"Link"},"height")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),'Gets the "height" value where the 9th bit is stored in flags.')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION uint16_t"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_glyph_node#function-kerningtablepos",mdxType:"Link"},"kerningTablePos")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),'Gets the "kerningTablePos" value where the 8th and 9th bits are stored in flags.')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION void"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_glyph_node#function-settop",mdxType:"Link"},"setTop")),"(int16_t newTop)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Sets a new value for top.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION int16_t"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_glyph_node#function-top",mdxType:"Link"},"top")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),'Gets the "top" value where the 9th bit and the sign bit are stored in flags.')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION uint16_t"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_glyph_node#function-width",mdxType:"Link"},"width")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),'Gets the "width" value where the 9th bit is stored in flags.')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",s({},{id:"public-attributes"}),"Public Attributes"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:"right"})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),"uint8_t"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_glyph_node#variable-_advance",mdxType:"Link"},"_advance")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Width of the glyph (including space to the left and right)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),"uint8_t"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_glyph_node#variable-_height",mdxType:"Link"},"_height")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Height of the actual glyph data.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),"uint8_t"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_glyph_node#variable-_kerningtablepos",mdxType:"Link"},"_kerningTablePos")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Where are the kerning information for this glyph stored in the kerning table.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),"uint8_t"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_glyph_node#variable-_top",mdxType:"Link"},"_top")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Vertical offset from baseline of the glyph.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),"uint8_t"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_glyph_node#variable-_width",mdxType:"Link"},"_width")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Width of the actual glyph data.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),"uint32_t"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_glyph_node#variable-dataoffset",mdxType:"Link"},"dataOffset")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The index to the data of this glyph.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),"uint8_t"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_glyph_node#variable-flags",mdxType:"Link"},"flags")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Additional glyph flags (font encoding and extra precision for width/height/top/advance)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),"uint8_t"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_glyph_node#variable-kerningtablesize",mdxType:"Link"},"kerningTableSize")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"How many entries are there in the kerning table (following kerningTablePos) for this glyph.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),"int8_t"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_glyph_node#variable-left",mdxType:"Link"},"left")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Horizontal offset from the left of the glyph.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"}),(0,a.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_unicode#typedef-unicodechar"}),"Unicode::UnicodeChar")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_glyph_node#variable-unicode",mdxType:"Link"},"unicode")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The Unicode of this glyph.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"right"})),(0,a.kt)("td",s({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",s({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_glyph_node#function-advance",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",s({},{id:"advance"}),"advance"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"FORCE_INLINE_FUNCTION uint16_t","\xa0",(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_glyph_node#function-advance",mdxType:"Link"},"advance")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"const"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,'Gets the "advance" value where the 9th bit is stored in flags. '),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,'the right value of "advance". ')))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_glyph_node#function-height",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",s({},{id:"height"}),"height"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"FORCE_INLINE_FUNCTION uint16_t","\xa0",(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_glyph_node#function-height",mdxType:"Link"},"height")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"const"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,'Gets the "height" value where the 9th bit is stored in flags. '),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,'the right value of "height". ')))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_glyph_node#function-kerningtablepos",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",s({},{id:"kerningtablepos"}),"kerningTablePos"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"FORCE_INLINE_FUNCTION uint16_t","\xa0",(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_glyph_node#function-kerningtablepos",mdxType:"Link"},"kerningTablePos")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"const"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,'Gets the "kerningTablePos" value where the 8th and 9th bits are stored in flags. '),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,'the right value of "kerningTablePos". ')))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_glyph_node#function-settop",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",s({},{id:"settop"}),"setTop"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"FORCE_INLINE_FUNCTION void","\xa0",(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_glyph_node#function-settop",mdxType:"Link"},"setTop")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"int16_t"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"newTop"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Sets a new value for top. "),(0,a.kt)("p",null,"Used to adjust the vertical position of a glyph - this is used when positioning some Thai glyphs and some Arabic glyphs."),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"newTop"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The new top."))))))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_glyph_node#function-top",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",s({},{id:"top"}),"top"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"FORCE_INLINE_FUNCTION int16_t","\xa0",(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_glyph_node#function-top",mdxType:"Link"},"top")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"const"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,'Gets the "top" value where the 9th bit and the sign bit are stored in flags. '),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,'the right value of "top". ')))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_glyph_node#function-width",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",s({},{id:"width"}),"width"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})),(0,a.kt)("th",s({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"FORCE_INLINE_FUNCTION uint16_t","\xa0",(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_glyph_node#function-width",mdxType:"Link"},"width")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"const"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,'Gets the "width" value where the 9th bit is stored in flags. '),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,'the right value of "width". ')))),(0,a.kt)("h2",s({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_glyph_node#variable-_advance",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",s({},{id:"_advance"}),"_advance"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"uint8_t _advance ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Width of the glyph (including space to the left and right) "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_glyph_node#variable-_height",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",s({},{id:"_height"}),"_height"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"uint8_t _height ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Height of the actual glyph data. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_glyph_node#variable-_kerningtablepos",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",s({},{id:"_kerningtablepos"}),"_kerningTablePos"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"uint8_t _kerningTablePos ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Where are the kerning information for this glyph stored in the kerning table. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_glyph_node#variable-_top",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",s({},{id:"_top"}),"_top"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"uint8_t _top ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Vertical offset from baseline of the glyph. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_glyph_node#variable-_width",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",s({},{id:"_width"}),"_width"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"uint8_t _width ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Width of the actual glyph data. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_glyph_node#variable-dataoffset",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",s({},{id:"dataoffset"}),"dataOffset"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"uint32_t dataOffset ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The index to the data of this glyph. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_glyph_node#variable-flags",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",s({},{id:"flags"}),"flags"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"uint8_t flags ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Additional glyph flags (font encoding and extra precision for width/height/top/advance) "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_glyph_node#variable-kerningtablesize",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",s({},{id:"kerningtablesize"}),"kerningTableSize"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"uint8_t kerningTableSize ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"How many entries are there in the kerning table (following kerningTablePos) for this glyph. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_glyph_node#variable-left",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",s({},{id:"left"}),"left"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"int8_t left ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"Horizontal offset from the left of the glyph. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_glyph_node#variable-unicode",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",s({},{id:"unicode"}),"unicode"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,(0,a.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_unicode#typedef-unicodechar"}),"Unicode::UnicodeChar")," unicode ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The Unicode of this glyph. "))))}_.isMDXComponent=!0}}]);