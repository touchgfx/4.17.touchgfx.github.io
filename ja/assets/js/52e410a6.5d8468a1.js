"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1361],{3905:function(t,a,e){e.d(a,{Zo:function(){return d},kt:function(){return s}});var n=e(67294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function i(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var k=n.createContext({}),c=function(t){var a=n.useContext(k),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},d=function(t){var a=c(t.components);return n.createElement(k.Provider,{value:a},t.children)},m="mdxType",p={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,k=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=c(e),u=r,s=m["".concat(k,".").concat(u)]||m[u]||p[u]||l;return e?n.createElement(s,o(o({ref:a},d),{},{components:e})):n.createElement(s,o({ref:a},d))}));function s(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,o=new Array(l);o[0]=u;var i={};for(var k in a)hasOwnProperty.call(a,k)&&(i[k]=a[k]);i.originalType=t,i[m]="string"==typeof t?t:r,o[1]=i;for(var c=2;c<l;c++)o[c]=e[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},43861:function(t,a,e){var n=e(67294);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}a.Z=r},96430:function(t,a,e){e.r(a),e.d(a,{assets:function(){return h},contentTitle:function(){return f},default:function(){return _},frontMatter:function(){return s},metadata:function(){return g},toc:function(){return N}});var n=e(3905),r=e(39130),l=e(43861),o=Object.defineProperty,i=Object.defineProperties,k=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(t,a,e)=>a in t?o(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,u=(t,a)=>{for(var e in a||(a={}))d.call(a,e)&&p(t,e,a[e]);if(c)for(var e of c(a))m.call(a,e)&&p(t,e,a[e]);return t};const s={title:"ManyBlockAllocator"},f=void 0,g={unversionedId:"api/classes/classtouchgfx_1_1_many_block_allocator",id:"api/classes/classtouchgfx_1_1_many_block_allocator",title:"ManyBlockAllocator",description:"",source:"@site/docs/api/classes/classtouchgfx_1_1_many_block_allocator.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_many_block_allocator",permalink:"/4.17/ja/docs/api/classes/classtouchgfx_1_1_many_block_allocator",draft:!1,tags:[],version:"current",frontMatter:{title:"ManyBlockAllocator"},sidebar:"docs",previous:{title:"LockFreeDMA_Queue",permalink:"/4.17/ja/docs/api/classes/classtouchgfx_1_1_lock_free_d_m_a___queue"},next:{title:"Matrix4x4",permalink:"/4.17/ja/docs/api/classes/classtouchgfx_1_1_matrix4x4"}},h={},N=[{value:"Public Functions",id:"public-functions",level:2},{value:"Additional inherited members",id:"additional-inherited-members",level:2},{value:'Protected Types inherited from <Link to="classtouchgfx_1_1_frame_buffer_allocator">FrameBufferAllocator</Link>',id:"protected-types-inherited-from-framebufferallocator",level:3},{value:'Public Functions inherited from <Link to="classtouchgfx_1_1_frame_buffer_allocator">FrameBufferAllocator</Link>',id:"public-functions-inherited-from-framebufferallocator",level:3},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"allocateBlock",id:"allocateblock",level:3},{value:"freeBlockAfterTransfer",id:"freeblockaftertransfer",level:3},{value:"getBlockForTransfer",id:"getblockfortransfer",level:3},{value:"hasBlockReadyForTransfer",id:"hasblockreadyfortransfer",level:3},{value:"hasEmptyBlock",id:"hasemptyblock",level:3},{value:"ManyBlockAllocator",id:"manyblockallocator",level:3},{value:"markBlockReadyForTransfer",id:"markblockreadyfortransfer",level:3},{value:"peekBlockForTransfer",id:"peekblockfortransfer",level:3}],b={toc:N};function _(t){var a,e=t,{components:o}=e,p=((t,a)=>{var e={};for(var n in t)d.call(t,n)&&a.indexOf(n)<0&&(e[n]=t[n]);if(null!=t&&c)for(var n of c(t))a.indexOf(n)<0&&m.call(t,n)&&(e[n]=t[n]);return e})(e,["components"]);return(0,n.kt)("wrapper",(a=u(u({},b),p),i(a,k({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null," This class is partial framebuffer allocator using multiple blocks.\nNew buffers can be allocated until no free blocks are available. After transfer to ",(0,n.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_l_c_d"}),"LCD"),", a block is queued for allocation again."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"See"),": ",(0,n.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_frame_buffer_allocator"}),"FrameBufferAllocator")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Inherits from"),":  ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator",mdxType:"Link"},"FrameBufferAllocator")),(0,n.kt)("h2",u({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:"right"})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"}),"virtual","\xa0","uint16_t"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-allocateblock",mdxType:"Link"},"allocateBlock")),"(const uint16_t x, const uint16_t y, const uint16_t width, const uint16_t height, uint8_t ** block)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Allocates a framebuffer block.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-freeblockaftertransfer",mdxType:"Link"},"freeBlockAfterTransfer")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Free a block after transfer to the ",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_l_c_d"}),"LCD"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"}),"virtual","\xa0","const uint8_t *"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-getblockfortransfer",mdxType:"Link"},"getBlockForTransfer")),"(",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," & rect)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Get the block ready for transfer.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-hasblockreadyfortransfer",mdxType:"Link"},"hasBlockReadyForTransfer")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Check if a block is ready for transfer to the ",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_l_c_d"}),"LCD"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-hasemptyblock",mdxType:"Link"},"hasEmptyBlock")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Check if a block is ready for drawing (the block is empty).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-manyblockallocator",mdxType:"Link"},"ManyBlockAllocator")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-markblockreadyfortransfer",mdxType:"Link"},"markBlockReadyForTransfer")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Marks a previously allocated block as ready to be transferred to the ",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_l_c_d"}),"LCD"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"}),"virtual","\xa0","const ",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," &"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-peekblockfortransfer",mdxType:"Link"},"peekBlockForTransfer")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Get the Rect of the next block to transfer.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",u({},{id:"additional-inherited-members"}),"Additional inherited members"),(0,n.kt)("h3",u({},{id:"protected-types-inherited-from-framebufferallocator"}),"Protected Types inherited from ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator",mdxType:"Link"},"FrameBufferAllocator")),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:"right"})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"}),"enum"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#enum-blockstate",mdxType:"Link"},"BlockState"))," { EMPTY, ALLOCATED, DRAWN, SENDING }")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"BlockState is used for internal state of each block.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null})))))),(0,n.kt)("h3",u({},{id:"public-functions-inherited-from-framebufferallocator"}),"Public Functions inherited from ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator",mdxType:"Link"},"FrameBufferAllocator")),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:"right"})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-~framebufferallocator",mdxType:"Link"},"~FrameBufferAllocator")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_frame_buffer_allocator"}),"FrameBufferAllocator")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",u({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_many_block_allocator#function-allocateblock",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",u({},{id:"allocateblock"}),"allocateBlock"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"virtual","\xa0","uint16_t","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-allocateblock",mdxType:"Link"},"allocateBlock")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"const uint16_t"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"x ,"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"const uint16_t"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"y ,"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"const uint16_t"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"width ,"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"const uint16_t"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"height ,"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"uint8_t **"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"block"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Allocates a framebuffer block. "),(0,n.kt)("p",null,"The block will have at least the width requested. The height of the allocated block can be lower than requested if not enough memory is available."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"x"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"The absolute x coordinate of the block on the screen.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"y"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"The absolute y coordinate of the block on the screen.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"width"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"The width of the block.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"height"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"The height of the block.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"block"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Pointer to pointer to return the block address in."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"The height of the allocated block. ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-allocateblock",mdxType:"Link"},"touchgfx::FrameBufferAllocator::allocateBlock")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_many_block_allocator#function-freeblockaftertransfer",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",u({},{id:"freeblockaftertransfer"}),"freeBlockAfterTransfer"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-freeblockaftertransfer",mdxType:"Link"},"freeBlockAfterTransfer")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",u({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Free a block after transfer to the ",(0,n.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_l_c_d"}),"LCD"),". "),(0,n.kt)("p",null,"Marks a previously allocated block as transferred and ready to reuse. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-freeblockaftertransfer",mdxType:"Link"},"touchgfx::FrameBufferAllocator::freeBlockAfterTransfer")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_many_block_allocator#function-getblockfortransfer",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",u({},{id:"getblockfortransfer"}),"getBlockForTransfer"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"virtual","\xa0","const uint8_t *","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-getblockfortransfer",mdxType:"Link"},"getBlockForTransfer")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," &"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"rect"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Get the block ready for transfer. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"rect"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Reference to rect to write block x, y, width, and height."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"Returns the address of the block ready for transfer. ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-getblockfortransfer",mdxType:"Link"},"touchgfx::FrameBufferAllocator::getBlockForTransfer")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_many_block_allocator#function-hasblockreadyfortransfer",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",u({},{id:"hasblockreadyfortransfer"}),"hasBlockReadyForTransfer"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-hasblockreadyfortransfer",mdxType:"Link"},"hasBlockReadyForTransfer")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",u({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Check if a block is ready for transfer to the ",(0,n.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_l_c_d"}),"LCD"),". "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"True if a block is ready for transfer. ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-hasblockreadyfortransfer",mdxType:"Link"},"touchgfx::FrameBufferAllocator::hasBlockReadyForTransfer")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_many_block_allocator#function-hasemptyblock",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",u({},{id:"hasemptyblock"}),"hasEmptyBlock"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-hasemptyblock",mdxType:"Link"},"hasEmptyBlock")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",u({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Check if a block is ready for drawing (the block is empty). "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"True if a block is empty. ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-hasemptyblock",mdxType:"Link"},"touchgfx::FrameBufferAllocator::hasEmptyBlock")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_many_block_allocator#function-manyblockallocator",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",u({},{id:"manyblockallocator"}),"ManyBlockAllocator"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-manyblockallocator",mdxType:"Link"},"ManyBlockAllocator")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",u({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"})),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_many_block_allocator#function-markblockreadyfortransfer",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",u({},{id:"markblockreadyfortransfer"}),"markBlockReadyForTransfer"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-markblockreadyfortransfer",mdxType:"Link"},"markBlockReadyForTransfer")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",u({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Marks a previously allocated block as ready to be transferred to the ",(0,n.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_l_c_d"}),"LCD"),". "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-markblockreadyfortransfer",mdxType:"Link"},"touchgfx::FrameBufferAllocator::markBlockReadyForTransfer")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_many_block_allocator#function-peekblockfortransfer",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",u({},{id:"peekblockfortransfer"}),"peekBlockForTransfer"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"virtual","\xa0","const Rect &","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-peekblockfortransfer",mdxType:"Link"},"peekBlockForTransfer")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",u({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Get the Rect of the next block to transfer. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_rect"}),"Rect")," ready for transfer.")),(0,n.kt)("div",{class:"api-note",markdown:"1"},(0,n.kt)("h5",null,"Note"),(0,n.kt)("p",null,"This function should only be called when the allocator has a block ready for transfer. ")),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"See also:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_many_block_allocator#function-hasblockreadyfortransfer"}),"hasBlockReadyForTransfer"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-peekblockfortransfer",mdxType:"Link"},"touchgfx::FrameBufferAllocator::peekBlockForTransfer")))))}_.isMDXComponent=!0}}]);