(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8100],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return c},kt:function(){return k}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),u=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=u(t.components);return n.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),s=u(a),k=r,m=s["".concat(d,".").concat(k)]||s[k]||p[k]||l;return a?n.createElement(m,i(i({ref:e},c),{},{components:a})):n.createElement(m,i({ref:e},c))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},43861:function(t,e,a){"use strict";var n=a(67294);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},31217:function(t,e,a){"use strict";a.d(e,{Z:function(){return b}});var n=a(67294),r=a(73727),l=a(11368),i=a(35096),o=a(84487);const d=(0,n.createContext)({collectLink:()=>{}});var u=a(25026),c=a(67023),p=Object.defineProperty,s=Object.defineProperties,k=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,f=(t,e,a)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,h=(t,e)=>{for(var a in e||(e={}))N.call(e,a)&&f(t,a,e[a]);if(m)for(var a of m(e))g.call(e,a)&&f(t,a,e[a]);return t};var b=function(t){var e,a=t,{isNavLink:p,to:f,href:b,activeClassName:_,isActive:y,"data-noBrokenLinkCheck":v,autoAddBaseUrl:x=!0}=a,O=((t,e)=>{var a={};for(var n in t)N.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&m)for(var n of m(t))e.indexOf(n)<0&&g.call(t,n)&&(a[n]=t[n]);return a})(a,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:w}}=(0,l.Z)(),{withBaseUrl:I}=(0,u.C)(),T=(0,n.useContext)(d),L=f||b,C=(0,i.Z)(L),E=null==L?void 0:L.replace("pathname://","");let P=void 0!==E?(F=E,x&&(t=>t.startsWith("/"))(F)?I(F):F):void 0;var F;P&&C&&(P=(0,c.applyTrailingSlash)(P,w));const Z=(0,n.useRef)(!1),j=p?r.OL:r.rU,q=o.Z.canUseIntersectionObserver;let U;(0,n.useEffect)((()=>(!q&&C&&null!=P&&window.docusaurus.prefetch(P),()=>{q&&U&&U.disconnect()})),[P,q,C]);const R=null!==(e=null==P?void 0:P.startsWith("#"))&&void 0!==e&&e,V=!P||!C||R;return P&&C&&!R&&!v&&T.collectLink(P),V?n.createElement("a",h(h({href:P},L&&!C&&{target:"_blank",rel:"noopener noreferrer"}),O)):n.createElement(j,h((D=h({},O),s(D,k({onMouseEnter:()=>{Z.current||null==P||(window.docusaurus.preload(P),Z.current=!0)},innerRef:t=>{var e,a;q&&t&&C&&(e=t,a=()=>{null!=P&&window.docusaurus.prefetch(P)},U=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(U.unobserve(e),U.disconnect(),a())}))})),U.observe(e))},to:P||""}))),p&&{isActive:y,activeClassName:_}));var D}},35096:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}a.d(e,{b:function(){return n},Z:function(){return r}})},25026:function(t,e,a){"use strict";a.d(e,{C:function(){return l},Z:function(){return i}});var n=a(11368),r=a(35096);function l(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,n.Z)();return{withBaseUrl:(a,n)=>function(t,e,a,{forcePrependBaseUrl:n=!1,absolute:l=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(n)return e+a;const i=a.startsWith(e)?a:e+a.replace(/^\//,"");return l?t+i:i}(e,t,a,n)}}function i(t,e={}){const{withBaseUrl:a}=l();return a(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(t.startsWith("#"))return t;if(void 0===e)return t;const[a]=t.split(/[#?]/),n="/"===a?"/":(r=a,e?function(t){return t.endsWith("/")?t:`${t}/`}(r):function(t){return t.endsWith("/")?t.slice(0,-1):t}(r));var r;return t.replace(a,n)}},67023:function(t,e,a){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=a(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return n(r).default}});var l=a(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return n(l).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},74272:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return m},contentTitle:function(){return N},metadata:function(){return g},toc:function(){return f},default:function(){return b}});var n=a(3905),r=a(31217),l=a(43861),i=Object.defineProperty,o=Object.defineProperties,d=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(t,e,a)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,k=(t,e)=>{for(var a in e||(e={}))c.call(e,a)&&s(t,a,e[a]);if(u)for(var a of u(e))p.call(e,a)&&s(t,a,e[a]);return t};const m={title:"Vector4"},N=void 0,g={unversionedId:"api/classes/classtouchgfx_1_1_vector4",id:"api/classes/classtouchgfx_1_1_vector4",isDocsHomePage:!1,title:"Vector4",description:"This class represents a homogeneous 3D vector.",source:"@site/docs/api/classes/classtouchgfx_1_1_vector4.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_vector4",permalink:"/4.17/docs/api/classes/classtouchgfx_1_1_vector4",version:"current",frontMatter:{title:"Vector4"},sidebar:"docs",previous:{title:"Vector",permalink:"/4.17/docs/api/classes/classtouchgfx_1_1_vector"},next:{title:"View",permalink:"/4.17/docs/api/classes/classtouchgfx_1_1_view"}},f=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Additional inherited members",id:"additional-inherited-members",children:[{value:'Public Functions inherited from <Link to="classtouchgfx_1_1_quadruple">Quadruple</Link>',id:"public-functions-inherited-from-quadruple",children:[]},{value:'Protected Functions inherited from <Link to="classtouchgfx_1_1_quadruple">Quadruple</Link>',id:"protected-functions-inherited-from-quadruple",children:[]},{value:'Protected Attributes inherited from <Link to="classtouchgfx_1_1_quadruple">Quadruple</Link>',id:"protected-attributes-inherited-from-quadruple",children:[]}]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"crossProduct",id:"crossproduct",children:[]},{value:"Vector4",id:"vector4",children:[]},{value:"Vector4",id:"vector4-1",children:[]}]}],h={toc:f};function b(t){var e,a=t,{components:i}=a,s=((t,e)=>{var a={};for(var n in t)c.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&u)for(var n of u(t))e.indexOf(n)<0&&p.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=k(k({},h),s),o(e,d({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null," This class represents a homogeneous 3D vector. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"See"),": ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_quadruple"}),"Quadruple")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Inherits from"),":  ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_quadruple",mdxType:"Link"},"Quadruple")),(0,n.kt)("h2",k({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:"right"})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_vector4"}),"Vector4")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_vector4#function-crossproduct",mdxType:"Link"},"crossProduct")),"(const ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_vector4"}),"Vector4")," & operand)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Cross product.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_vector4#function-vector4",mdxType:"Link"},"Vector4")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_vector4"}),"Vector4")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_vector4#function-vector4",mdxType:"Link"},"Vector4")),"(float x, float y, float z)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_vector4"}),"Vector4")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",k({},{id:"additional-inherited-members"}),"Additional inherited members"),(0,n.kt)("h3",k({},{id:"public-functions-inherited-from-quadruple"}),"Public Functions inherited from ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_quadruple",mdxType:"Link"},"Quadruple")),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:"right"})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION float"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_quadruple#function-getelement",mdxType:"Link"},"getElement")),"(int row) const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Gets an element.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION float"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_quadruple#function-getw",mdxType:"Link"},"getW")),"() const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Get w coordinate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION float"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_quadruple#function-getx",mdxType:"Link"},"getX")),"() const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Get x coordinate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION float"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_quadruple#function-gety",mdxType:"Link"},"getY")),"() const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Get y coordinate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION float"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_quadruple#function-getz",mdxType:"Link"},"getZ")),"() const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Get z coordinate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION void"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_quadruple#function-setelement",mdxType:"Link"},"setElement")),"(int row, float value)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Sets an element.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION void"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_quadruple#function-setw",mdxType:"Link"},"setW")),"(float value)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Sets a w coordinate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION void"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_quadruple#function-setx",mdxType:"Link"},"setX")),"(float value)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Sets an x coordinate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION void"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_quadruple#function-sety",mdxType:"Link"},"setY")),"(float value)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Sets a y coordinate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION void"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_quadruple#function-setz",mdxType:"Link"},"setZ")),"(float value)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Sets a z coordinate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("h3",k({},{id:"protected-functions-inherited-from-quadruple"}),"Protected Functions inherited from ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_quadruple",mdxType:"Link"},"Quadruple")),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:"right"})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_quadruple#function-quadruple",mdxType:"Link"},"Quadruple")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_quadruple"}),"Quadruple")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_quadruple#function-quadruple",mdxType:"Link"},"Quadruple")),"(float x, float y, float z, float w)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_quadruple"}),"Quadruple")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("h3",k({},{id:"protected-attributes-inherited-from-quadruple"}),"Protected Attributes inherited from ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_quadruple",mdxType:"Link"},"Quadruple")),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:"right"})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"}),"float"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_quadruple#variable-elements",mdxType:"Link"},"elements")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The elements","[4]",".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:"right"})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",k({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_vector4#function-crossproduct",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"crossproduct"}),"crossProduct"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"FORCE_INLINE_FUNCTION Vector4","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_vector4#function-crossproduct",mdxType:"Link"},"crossProduct")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"const ",(0,n.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_vector4"}),"Vector4")," &"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"operand"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Cross product. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"operand"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The second operand."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"The result of the operation. ")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_vector4#function-vector4",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"vector4"}),"Vector4"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"FORCE_INLINE_FUNCTION","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_vector4#function-vector4",mdxType:"Link"},"Vector4")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Initializes a new instance of the ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_vector4"}),"Vector4")," class. "))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_vector4#function-vector4",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",k({},{id:"vector4-1"}),"Vector4"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"FORCE_INLINE_FUNCTION","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_vector4#function-vector4",mdxType:"Link"},"Vector4")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"float"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"x ,"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"float"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"y ,"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"float"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"z"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Initializes a new instance of the ",(0,n.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_vector4"}),"Vector4")," class. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null})),(0,n.kt)("th",k({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"x"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The x coordinate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"y"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The y coordinate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"z"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The z coordinate."))))))))}b.isMDXComponent=!0}}]);