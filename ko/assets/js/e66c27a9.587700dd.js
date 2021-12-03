(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8166],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return u},kt:function(){return s}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),k=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=k(t.components);return n.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),p=k(a),s=r,m=p["".concat(c,".").concat(s)]||p[s]||d[s]||l;return a?n.createElement(m,o(o({ref:e},u),{},{components:a})):n.createElement(m,o({ref:e},u))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var k=2;k<l;k++)o[k]=a[k];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},43861:function(t,e,a){"use strict";var n=a(67294);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},31217:function(t,e,a){"use strict";a.d(e,{Z:function(){return N}});var n=a(67294),r=a(73727),l=a(11368),o=a(35096),i=a(84487);const c=(0,n.createContext)({collectLink:()=>{}});var k=a(25026),u=a(67023),d=Object.defineProperty,p=Object.defineProperties,s=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,h=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,b=(t,e)=>{for(var a in e||(e={}))f.call(e,a)&&h(t,a,e[a]);if(m)for(var a of m(e))g.call(e,a)&&h(t,a,e[a]);return t};var N=function(t){var e,a=t,{isNavLink:d,to:h,href:N,activeClassName:_,isActive:y,"data-noBrokenLinkCheck":v,autoAddBaseUrl:x=!0}=a,w=((t,e)=>{var a={};for(var n in t)f.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&m)for(var n of m(t))e.indexOf(n)<0&&g.call(t,n)&&(a[n]=t[n]);return a})(a,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:T}}=(0,l.Z)(),{withBaseUrl:B}=(0,k.C)(),O=(0,n.useContext)(c),L=h||N,Z=(0,o.Z)(L),P=null==L?void 0:L.replace("pathname://","");let D=void 0!==P?(F=P,x&&(t=>t.startsWith("/"))(F)?B(F):F):void 0;var F;D&&Z&&(D=(0,u.applyTrailingSlash)(D,T));const A=(0,n.useRef)(!1),R=d?r.OL:r.rU,j=i.Z.canUseIntersectionObserver;let C;(0,n.useEffect)((()=>(!j&&Z&&null!=D&&window.docusaurus.prefetch(D),()=>{j&&C&&C.disconnect()})),[D,j,Z]);const E=null!==(e=null==D?void 0:D.startsWith("#"))&&void 0!==e&&e,M=!D||!Z||E;return D&&Z&&!E&&!v&&O.collectLink(D),M?n.createElement("a",b(b({href:D},L&&!Z&&{target:"_blank",rel:"noopener noreferrer"}),w)):n.createElement(R,b((S=b({},w),p(S,s({onMouseEnter:()=>{A.current||null==D||(window.docusaurus.preload(D),A.current=!0)},innerRef:t=>{var e,a;j&&t&&Z&&(e=t,a=()=>{null!=D&&window.docusaurus.prefetch(D)},C=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(C.unobserve(e),C.disconnect(),a())}))})),C.observe(e))},to:D||""}))),d&&{isActive:y,activeClassName:_}));var S}},35096:function(t,e,a){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}a.d(e,{b:function(){return n},Z:function(){return r}})},25026:function(t,e,a){"use strict";a.d(e,{C:function(){return l},Z:function(){return o}});var n=a(11368),r=a(35096);function l(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,n.Z)();return{withBaseUrl:(a,n)=>function(t,e,a,{forcePrependBaseUrl:n=!1,absolute:l=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(n)return e+a;const o=a.startsWith(e)?a:e+a.replace(/^\//,"");return l?t+o:o}(e,t,a,n)}}function o(t,e={}){const{withBaseUrl:a}=l();return a(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(t.startsWith("#"))return t;if(void 0===e)return t;const[a]=t.split(/[#?]/),n="/"===a?"/":(r=a,e?function(t){return t.endsWith("/")?t:`${t}/`}(r):function(t){return t.endsWith("/")?t.slice(0,-1):t}(r));var r;return t.replace(a,n)}},67023:function(t,e,a){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=a(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return n(r).default}});var l=a(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return n(l).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},63196:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return m},contentTitle:function(){return f},metadata:function(){return g},toc:function(){return h},default:function(){return N}});var n=a(3905),r=a(31217),l=a(43861),o=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(t,e,a)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,s=(t,e)=>{for(var a in e||(e={}))u.call(e,a)&&p(t,a,e[a]);if(k)for(var a of k(e))d.call(e,a)&&p(t,a,e[a]);return t};const m={title:"FrameBufferAllocator"},f=void 0,g={unversionedId:"api/classes/classtouchgfx_1_1_frame_buffer_allocator",id:"api/classes/classtouchgfx_1_1_frame_buffer_allocator",isDocsHomePage:!1,title:"FrameBufferAllocator",description:"This class is an abstract interface for a class allocating partial framebuffer blocks.",source:"@site/docs/api/classes/classtouchgfx_1_1_frame_buffer_allocator.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_frame_buffer_allocator",permalink:"/4.17/ko/docs/api/classes/classtouchgfx_1_1_frame_buffer_allocator",version:"current",frontMatter:{title:"FrameBufferAllocator"},sidebar:"docs",previous:{title:"FontProvider",permalink:"/4.17/ko/docs/api/classes/classtouchgfx_1_1_font_provider"},next:{title:"FullSolidRect",permalink:"/4.17/ko/docs/api/classes/classtouchgfx_1_1_wipe_transition_1_1_full_solid_rect"}},h=[{value:"Protected Types",id:"protected-types",children:[]},{value:"Public Functions",id:"public-functions",children:[]},{value:"Protected Types Documentation",id:"protected-types-documentation",children:[{value:"BlockState",id:"blockstate",children:[]}]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"allocateBlock",id:"allocateblock",children:[]},{value:"freeBlockAfterTransfer",id:"freeblockaftertransfer",children:[]},{value:"getBlockForTransfer",id:"getblockfortransfer",children:[]},{value:"hasBlockReadyForTransfer",id:"hasblockreadyfortransfer",children:[]},{value:"hasEmptyBlock",id:"hasemptyblock",children:[]},{value:"markBlockReadyForTransfer",id:"markblockreadyfortransfer",children:[]},{value:"peekBlockForTransfer",id:"peekblockfortransfer",children:[]},{value:"~FrameBufferAllocator",id:"framebufferallocator",children:[]}]}],b={toc:h};function N(t){var e,a=t,{components:o}=a,p=((t,e)=>{var a={};for(var n in t)u.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&k)for(var n of k(t))e.indexOf(n)<0&&d.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=s(s({},b),p),i(e,c({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null," This class is an abstract interface for a class allocating partial framebuffer blocks.\nThe interface must be implemented by a subclass."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"See"),": ",(0,n.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_many_block_allocator"}),"ManyBlockAllocator")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Inherited by"),":  ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator",mdxType:"Link"},"ManyBlockAllocator","<"," block_size, blocks, bytes_pr_pixel ",">")),(0,n.kt)("h2",s({},{id:"protected-types"}),"Protected Types"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"enum"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#enum-blockstate",mdxType:"Link"},"BlockState"))," { EMPTY, ALLOCATED, DRAWN, SENDING }")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"BlockState is used for internal state of each block.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",s({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:"right"})),(0,n.kt)("th",s({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"}),"virtual","\xa0","uint16_t"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-allocateblock",mdxType:"Link"},"allocateBlock")),"(const uint16_t x, const uint16_t y, const uint16_t width, const uint16_t height, uint8_t ** block) =0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Allocates a framebuffer block.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-freeblockaftertransfer",mdxType:"Link"},"freeBlockAfterTransfer")),"() =0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Free a block after transfer to the LCD.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"}),"virtual","\xa0","const uint8_t *"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-getblockfortransfer",mdxType:"Link"},"getBlockForTransfer")),"(",(0,n.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," & rect) =0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Get the block ready for transfer.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-hasblockreadyfortransfer",mdxType:"Link"},"hasBlockReadyForTransfer")),"() =0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Check if a block is ready for transfer to the LCD.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-hasemptyblock",mdxType:"Link"},"hasEmptyBlock")),"() =0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Check if a block is ready for drawing (the block is empty).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-markblockreadyfortransfer",mdxType:"Link"},"markBlockReadyForTransfer")),"() =0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Marks a previously allocated block as ready to be transferred to the LCD.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"}),"virtual","\xa0","const ",(0,n.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," &"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-peekblockfortransfer",mdxType:"Link"},"peekBlockForTransfer")),"() =0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Get the Rect of the next block to transfer.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-~framebufferallocator",mdxType:"Link"},"~FrameBufferAllocator")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,n.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_frame_buffer_allocator"}),"FrameBufferAllocator")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",s({},{id:"protected-types-documentation"}),"Protected Types Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_frame_buffer_allocator#enum-blockstate",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",s({},{id:"blockstate"}),"BlockState"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header",markdown:"1"},(0,n.kt)("p",null,"enum ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#enum-blockstate",mdxType:"Link"},"BlockState"))),(0,n.kt)("div",{class:"api-container-content api-container-content-enum",markdown:"1"},(0,n.kt)("p",null,"BlockState is used for internal state of each block. "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_frame_buffer_allocator#enumvalue-empty",mdxType:"DoxybookHeaderLink"})," EMPTY"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Block is empty, can be allocated.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_frame_buffer_allocator#enumvalue-allocated",mdxType:"DoxybookHeaderLink"})," ALLOCATED"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Block is allocated for drawing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_frame_buffer_allocator#enumvalue-drawn",mdxType:"DoxybookHeaderLink"})," DRAWN"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Block has been drawn to, can be send.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_frame_buffer_allocator#enumvalue-sending",mdxType:"DoxybookHeaderLink"})," SENDING"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Block is being transmitted to the display.")))))),(0,n.kt)("h2",s({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_frame_buffer_allocator#function-allocateblock",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",s({},{id:"allocateblock"}),"allocateBlock"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"virtual","\xa0","uint16_t","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-allocateblock",mdxType:"Link"},"allocateBlock")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"const uint16_t"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"x ,"),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"=0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"const uint16_t"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"y ,"),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"=0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"const uint16_t"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"width ,"),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"=0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"const uint16_t"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"height ,"),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"=0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"uint8_t **"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"block"),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"=0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"=0"),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Allocates a framebuffer block. "),(0,n.kt)("p",null,"The block will have at least the width requested. The height of the allocated block can be lower than requested if not enough memory is available."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"x"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The absolute x coordinate of the block on the screen.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"y"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The absolute y coordinate of the block on the screen.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"width"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The width of the block.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"height"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The height of the block.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"block"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Pointer to pointer to return the block address in."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"The height of the allocated block. ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-allocateblock",mdxType:"Link"},"touchgfx::ManyBlockAllocator::allocateBlock")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_frame_buffer_allocator#function-freeblockaftertransfer",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",s({},{id:"freeblockaftertransfer"}),"freeBlockAfterTransfer"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-freeblockaftertransfer",mdxType:"Link"},"freeBlockAfterTransfer")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"=0"))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Free a block after transfer to the LCD. "),(0,n.kt)("p",null,"Marks a previously allocated block as transferred and ready to reuse. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-freeblockaftertransfer",mdxType:"Link"},"touchgfx::ManyBlockAllocator::freeBlockAfterTransfer")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_frame_buffer_allocator#function-getblockfortransfer",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",s({},{id:"getblockfortransfer"}),"getBlockForTransfer"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"virtual","\xa0","const uint8_t *","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-getblockfortransfer",mdxType:"Link"},"getBlockForTransfer")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," &"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"rect"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Get the block ready for transfer. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"rect"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Reference to rect to write block x, y, width, and height."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"Returns the address of the block ready for transfer. ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-getblockfortransfer",mdxType:"Link"},"touchgfx::ManyBlockAllocator::getBlockForTransfer")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_frame_buffer_allocator#function-hasblockreadyfortransfer",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",s({},{id:"hasblockreadyfortransfer"}),"hasBlockReadyForTransfer"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-hasblockreadyfortransfer",mdxType:"Link"},"hasBlockReadyForTransfer")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"=0"))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Check if a block is ready for transfer to the LCD. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"True if a block is ready for transfer. ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-hasblockreadyfortransfer",mdxType:"Link"},"touchgfx::ManyBlockAllocator::hasBlockReadyForTransfer")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_frame_buffer_allocator#function-hasemptyblock",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",s({},{id:"hasemptyblock"}),"hasEmptyBlock"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-hasemptyblock",mdxType:"Link"},"hasEmptyBlock")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"=0"))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Check if a block is ready for drawing (the block is empty). "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"True if a block is empty. ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-hasemptyblock",mdxType:"Link"},"touchgfx::ManyBlockAllocator::hasEmptyBlock")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_frame_buffer_allocator#function-markblockreadyfortransfer",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",s({},{id:"markblockreadyfortransfer"}),"markBlockReadyForTransfer"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-markblockreadyfortransfer",mdxType:"Link"},"markBlockReadyForTransfer")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"=0"))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Marks a previously allocated block as ready to be transferred to the LCD. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-markblockreadyfortransfer",mdxType:"Link"},"touchgfx::ManyBlockAllocator::markBlockReadyForTransfer")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_frame_buffer_allocator#function-peekblockfortransfer",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",s({},{id:"peekblockfortransfer"}),"peekBlockForTransfer"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"virtual","\xa0","const Rect &","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-peekblockfortransfer",mdxType:"Link"},"peekBlockForTransfer")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"=0"))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Get the Rect of the next block to transfer. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_rect"}),"Rect")," ready for transfer.")),(0,n.kt)("div",{class:"api-note",markdown:"1"},(0,n.kt)("h5",null,"Note"),(0,n.kt)("p",null,"This function should only be called when the allocator has a block ready for transfer. ")),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"See also:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_frame_buffer_allocator#function-hasblockreadyfortransfer"}),"hasBlockReadyForTransfer"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-peekblockfortransfer",mdxType:"Link"},"touchgfx::ManyBlockAllocator::peekBlockForTransfer")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_frame_buffer_allocator#function-~framebufferallocator",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",s({},{id:"framebufferallocator"}),"~FrameBufferAllocator"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"virtual","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-~framebufferallocator",mdxType:"Link"},"~FrameBufferAllocator")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",s({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Finalizes an instance of the ",(0,n.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_frame_buffer_allocator"}),"FrameBufferAllocator")," class. "))))}N.isMDXComponent=!0}}]);