(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8400],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),d=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=d(n),m=r,k=s["".concat(u,".").concat(m)]||s[m]||c[m]||l;return n?a.createElement(k,i(i({ref:e},p),{},{components:n})):a.createElement(k,i({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},43861:function(t,e,n){"use strict";var a=n(67294);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},31217:function(t,e,n){"use strict";n.d(e,{Z:function(){return b}});var a=n(67294),r=n(73727),l=n(11368),i=n(35096),o=n(84487);const u=(0,a.createContext)({collectLink:()=>{}});var d=n(25026),p=n(67023),c=Object.defineProperty,s=Object.defineProperties,m=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,f=(t,e,n)=>e in t?c(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,h=(t,e)=>{for(var n in e||(e={}))N.call(e,n)&&f(t,n,e[n]);if(k)for(var n of k(e))g.call(e,n)&&f(t,n,e[n]);return t};var b=function(t){var e,n=t,{isNavLink:c,to:f,href:b,activeClassName:_,isActive:y,"data-noBrokenLinkCheck":v,autoAddBaseUrl:x=!0}=n,O=((t,e)=>{var n={};for(var a in t)N.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&k)for(var a of k(t))e.indexOf(a)<0&&g.call(t,a)&&(n[a]=t[a]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:w}}=(0,l.Z)(),{withBaseUrl:I}=(0,d.C)(),P=(0,a.useContext)(u),T=f||b,L=(0,i.Z)(T),E=null==T?void 0:T.replace("pathname://","");let C=void 0!==E?(F=E,x&&(t=>t.startsWith("/"))(F)?I(F):F):void 0;var F;C&&L&&(C=(0,p.applyTrailingSlash)(C,w));const Z=(0,a.useRef)(!1),j=c?r.OL:r.rU,q=o.Z.canUseIntersectionObserver;let U;(0,a.useEffect)((()=>(!q&&L&&null!=C&&window.docusaurus.prefetch(C),()=>{q&&U&&U.disconnect()})),[C,q,L]);const R=null!==(e=null==C?void 0:C.startsWith("#"))&&void 0!==e&&e,D=!C||!L||R;return C&&L&&!R&&!v&&P.collectLink(C),D?a.createElement("a",h(h({href:C},T&&!L&&{target:"_blank",rel:"noopener noreferrer"}),O)):a.createElement(j,h((S=h({},O),s(S,m({onMouseEnter:()=>{Z.current||null==C||(window.docusaurus.preload(C),Z.current=!0)},innerRef:t=>{var e,n;q&&t&&L&&(e=t,n=()=>{null!=C&&window.docusaurus.prefetch(C)},U=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(U.unobserve(e),U.disconnect(),n())}))})),U.observe(e))},to:C||""}))),c&&{isActive:y,activeClassName:_}));var S}},35096:function(t,e,n){"use strict";function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!a(t)}n.d(e,{b:function(){return a},Z:function(){return r}})},25026:function(t,e,n){"use strict";n.d(e,{C:function(){return l},Z:function(){return i}});var a=n(11368),r=n(35096);function l(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(t,e,n,{forcePrependBaseUrl:a=!1,absolute:l=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return e+n;const i=n.startsWith(e)?n:e+n.replace(/^\//,"");return l?t+i:i}(e,t,n,a)}}function i(t,e={}){const{withBaseUrl:n}=l();return n(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(t.startsWith("#"))return t;if(void 0===e)return t;const[n]=t.split(/[#?]/),a="/"===n?"/":(r=n,e?function(t){return t.endsWith("/")?t:`${t}/`}(r):function(t){return t.endsWith("/")?t.slice(0,-1):t}(r));var r;return t.replace(n,a)}},67023:function(t,e,n){"use strict";var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=n(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var l=n(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return a(l).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},58712:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return k},contentTitle:function(){return N},metadata:function(){return g},toc:function(){return f},default:function(){return b}});var a=n(3905),r=n(31217),l=n(43861),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m=(t,e)=>{for(var n in e||(e={}))p.call(e,n)&&s(t,n,e[n]);if(d)for(var n of d(e))c.call(e,n)&&s(t,n,e[n]);return t};const k={title:"Point4"},N=void 0,g={unversionedId:"api/classes/classtouchgfx_1_1_point4",id:"api/classes/classtouchgfx_1_1_point4",isDocsHomePage:!1,title:"Point4",description:"This class represents a homogeneous 3D point.",source:"@site/docs/api/classes/classtouchgfx_1_1_point4.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_point4",permalink:"/4.17/docs/api/classes/classtouchgfx_1_1_point4",version:"current",frontMatter:{title:"Point4"},sidebar:"docs",previous:{title:"Point3D",permalink:"/4.17/docs/api/classes/structtouchgfx_1_1_point3_d"},next:{title:"Presenter",permalink:"/4.17/docs/api/classes/classtouchgfx_1_1_presenter"}},f=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Additional inherited members",id:"additional-inherited-members",children:[{value:'Public Functions inherited from <Link to="classtouchgfx_1_1_quadruple">Quadruple</Link>',id:"public-functions-inherited-from-quadruple",children:[]},{value:'Protected Functions inherited from <Link to="classtouchgfx_1_1_quadruple">Quadruple</Link>',id:"protected-functions-inherited-from-quadruple",children:[]},{value:'Protected Attributes inherited from <Link to="classtouchgfx_1_1_quadruple">Quadruple</Link>',id:"protected-attributes-inherited-from-quadruple",children:[]}]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"Point4",id:"point4",children:[]},{value:"Point4",id:"point4-1",children:[]}]}],h={toc:f};function b(t){var e,n=t,{components:i}=n,s=((t,e)=>{var n={};for(var a in t)p.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&d)for(var a of d(t))e.indexOf(a)<0&&c.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=m(m({},h),s),o(e,u({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null," This class represents a homogeneous 3D point. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See"),": ",(0,a.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_quadruple"}),"Quadruple")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Inherits from"),":  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_quadruple",mdxType:"Link"},"Quadruple")),(0,a.kt)("h2",m({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:"right"})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_point4#function-point4",mdxType:"Link"},"Point4")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,a.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_point4"}),"Point4")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_point4#function-point4",mdxType:"Link"},"Point4")),"(float x, float y, float z)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,a.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_point4"}),"Point4")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",m({},{id:"additional-inherited-members"}),"Additional inherited members"),(0,a.kt)("h3",m({},{id:"public-functions-inherited-from-quadruple"}),"Public Functions inherited from ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_quadruple",mdxType:"Link"},"Quadruple")),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:"right"})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION float"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_quadruple#function-getelement",mdxType:"Link"},"getElement")),"(int row) const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Gets an element.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION float"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_quadruple#function-getw",mdxType:"Link"},"getW")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Get w coordinate.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION float"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_quadruple#function-getx",mdxType:"Link"},"getX")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Get x coordinate.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION float"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_quadruple#function-gety",mdxType:"Link"},"getY")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Get y coordinate.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION float"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_quadruple#function-getz",mdxType:"Link"},"getZ")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Get z coordinate.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION void"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_quadruple#function-setelement",mdxType:"Link"},"setElement")),"(int row, float value)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Sets an element.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION void"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_quadruple#function-setw",mdxType:"Link"},"setW")),"(float value)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Sets a w coordinate.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION void"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_quadruple#function-setx",mdxType:"Link"},"setX")),"(float value)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Sets an x coordinate.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION void"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_quadruple#function-sety",mdxType:"Link"},"setY")),"(float value)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Sets a y coordinate.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION void"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_quadruple#function-setz",mdxType:"Link"},"setZ")),"(float value)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Sets a z coordinate.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("h3",m({},{id:"protected-functions-inherited-from-quadruple"}),"Protected Functions inherited from ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_quadruple",mdxType:"Link"},"Quadruple")),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:"right"})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_quadruple#function-quadruple",mdxType:"Link"},"Quadruple")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,a.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_quadruple"}),"Quadruple")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_quadruple#function-quadruple",mdxType:"Link"},"Quadruple")),"(float x, float y, float z, float w)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,a.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_quadruple"}),"Quadruple")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("h3",m({},{id:"protected-attributes-inherited-from-quadruple"}),"Protected Attributes inherited from ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_quadruple",mdxType:"Link"},"Quadruple")),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:"right"})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"float"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_quadruple#variable-elements",mdxType:"Link"},"elements")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The elements","[4]",".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",m({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_point4#function-point4",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",m({},{id:"point4"}),"Point4"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"FORCE_INLINE_FUNCTION","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_point4#function-point4",mdxType:"Link"},"Point4")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Initializes a new instance of the ",(0,a.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_point4"}),"Point4")," class. "))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_point4#function-point4",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",m({},{id:"point4-1"}),"Point4"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"FORCE_INLINE_FUNCTION","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_point4#function-point4",mdxType:"Link"},"Point4")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"float"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"x ,"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"float"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"y ,"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"float"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"z"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Initializes a new instance of the ",(0,a.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_point4"}),"Point4")," class. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"x"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The x coordinate.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"y"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The y coordinate.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"z"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The z coordinate."))))))))}b.isMDXComponent=!0}}]);