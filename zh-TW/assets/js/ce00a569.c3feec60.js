"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5158],{3905:function(t,a,e){e.d(a,{Zo:function(){return k},kt:function(){return s}});var n=e(67294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function o(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var d=n.createContext({}),p=function(t){var a=n.useContext(d),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},k=function(t){var a=p(t.components);return n.createElement(d.Provider,{value:a},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,k=o(t,["components","mdxType","originalType","parentName"]),c=p(e),u=r,s=c["".concat(d,".").concat(u)]||c[u]||m[u]||l;return e?n.createElement(s,i(i({ref:a},k),{},{components:e})):n.createElement(s,i({ref:a},k))}));function s(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=u;var o={};for(var d in a)hasOwnProperty.call(a,d)&&(o[d]=a[d]);o.originalType=t,o[c]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=e[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},43861:function(t,a,e){var n=e(67294);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}a.Z=r},26109:function(t,a,e){e.r(a),e.d(a,{assets:function(){return N},contentTitle:function(){return g},default:function(){return v},frontMatter:function(){return s},metadata:function(){return h},toc:function(){return _}});var n=e(3905),r=e(39130),l=e(43861),i=Object.defineProperty,o=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(t,a,e)=>a in t?i(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,u=(t,a)=>{for(var e in a||(a={}))k.call(a,e)&&m(t,e,a[e]);if(p)for(var e of p(a))c.call(a,e)&&m(t,e,a[e]);return t};const s={title:"Canvas"},g=void 0,h={unversionedId:"api/classes/classtouchgfx_1_1_canvas",id:"api/classes/classtouchgfx_1_1_canvas",title:"Canvas",description:"",source:"@site/docs/api/classes/classtouchgfx_1_1_canvas.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_canvas",permalink:"/4.17/zh-TW/docs/api/classes/classtouchgfx_1_1_canvas",draft:!1,tags:[],version:"current",frontMatter:{title:"Canvas"},sidebar:"docs",previous:{title:"CallbackArea",permalink:"/4.17/zh-TW/docs/api/classes/structtouchgfx_1_1_keyboard_1_1_callback_area"},next:{title:"CanvasWidget",permalink:"/4.17/zh-TW/docs/api/classes/classtouchgfx_1_1_canvas_widget"}},N={},_=[{value:"Public Functions",id:"public-functions",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"Canvas",id:"canvas",level:3},{value:"lineTo",id:"lineto",level:3},{value:"lineTo",id:"lineto-1",level:3},{value:"moveTo",id:"moveto",level:3},{value:"moveTo",id:"moveto-1",level:3},{value:"render",id:"render",level:3},{value:"~Canvas",id:"canvas-1",level:3}],f={toc:_};function v(t){var a,e=t,{components:i}=e,m=((t,a)=>{var e={};for(var n in t)k.call(t,n)&&a.indexOf(n)<0&&(e[n]=t[n]);if(null!=t&&p)for(var n of p(t))a.indexOf(n)<0&&c.call(t,n)&&(e[n]=t[n]);return e})(e,["components"]);return(0,n.kt)("wrapper",(a=u(u({},f),m),o(a,d({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null," Class for easy rendering using CanvasWidgetRenderer.\nThe ",(0,n.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_canvas"}),"Canvas")," class will make implementation of a new ",(0,n.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_canvas_widget"}),"CanvasWidget"),' very easy. The few simple primitives allows moving a "pen" and drawing the outline of a shape which can then be rendered.'),(0,n.kt)("p",null,"The ",(0,n.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_canvas"}),"Canvas")," class has been optimized to eliminate drawing unnecessary lines outside the currently invalidated rectangle. "),(0,n.kt)("h2",u({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:"right"})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_canvas#function-canvas",mdxType:"Link"},"Canvas")),"(const ",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_canvas_widget"}),"CanvasWidget")," * _widget, const ",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," & invalidatedArea)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_canvas"}),"Canvas")," Constructor.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_canvas#function-lineto",mdxType:"Link"},"lineTo")),"(",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"CWRUtil::Q5")," x, ",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"CWRUtil::Q5")," y)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Draw line from the current (x, y) to the new (x, y) as part of the shape being drawn.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"}),"template \\","<","typename T \\",">",(0,n.kt)("br",null),"void"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_canvas#function-lineto",mdxType:"Link"},"lineTo")),"(T x, T y)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Draw line from the current (x, y) to the new (x, y) as part of the shape being drawn.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_canvas#function-moveto",mdxType:"Link"},"moveTo")),"(",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"CWRUtil::Q5")," x, ",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"CWRUtil::Q5")," y)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Move the current pen position to (x, y).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"}),"template \\","<","typename T \\",">",(0,n.kt)("br",null),"void"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_canvas#function-moveto",mdxType:"Link"},"moveTo")),"(T x, T y)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Move the current pen position to (x, y).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"}),"bool"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_canvas#function-render",mdxType:"Link"},"render")),"(uint8_t customAlpha =255)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Render the graphical shape drawn using ",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_canvas#function-moveto"}),"moveTo()")," and ",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_canvas#function-lineto"}),"lineTo()")," with the given Painter.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_canvas#function-~canvas",mdxType:"Link"},"~Canvas")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_canvas"}),"Canvas")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"right"})),(0,n.kt)("td",u({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",u({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_canvas#function-canvas",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",u({},{id:"canvas"}),"Canvas"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_canvas#function-canvas",mdxType:"Link"},"Canvas")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"const ",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_canvas_widget"}),"CanvasWidget")," *"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"_widget ,"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"const ",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," &"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"invalidatedArea"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_canvas"}),"Canvas")," Constructor. "),(0,n.kt)("p",null,"Locks the framebuffer and prepares for drawing only in the allowed area which has been invalidated. The color depth of the ",(0,n.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_l_c_d"}),"LCD")," is taken into account."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"_widget"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"a pointer to the ",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_canvas_widget"}),"CanvasWidget")," using this ",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_canvas"}),"Canvas"),". Used for getting the canvas dimensions.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"invalidatedArea"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"the are which should be updated."))))),(0,n.kt)("div",{class:"api-note",markdown:"1"},(0,n.kt)("h5",null,"Note"),(0,n.kt)("p",null,"Locks the framebuffer. ")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_canvas#function-lineto",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",u({},{id:"lineto"}),"lineTo"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_canvas#function-lineto",mdxType:"Link"},"lineTo")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"CWRUtil::Q5")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"x ,"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"CWRUtil::Q5")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"y"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Draw line from the current (x, y) to the new (x, y) as part of the shape being drawn. "),(0,n.kt)("p",null,"As for moveTo, lineTo commands completely outside the drawing are are discarded."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"x"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"The x coordinate for the pen position in ",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"CWRUtil::Q5")," format.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"y"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"The y coordinate for the pen position in ",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"CWRUtil::Q5")," format."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"See also:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"CWRUtil::Q5"),", ",(0,n.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_canvas#function-moveto"}),"moveTo"))))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_canvas#function-lineto",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",u({},{id:"lineto-1"}),"lineTo"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_canvas#function-lineto",mdxType:"Link"},"lineTo")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"T"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"x ,"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"T"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"y"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Draw line from the current (x, y) to the new (x, y) as part of the shape being drawn. "),(0,n.kt)("p",null,"As for moveTo, lineTo commands completely outside the drawing are are discarded."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Template Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"T"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"either int or float."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"x"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"The x coordinate for the pen position.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"y"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"The y coordinate for the pen position."))))))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_canvas#function-moveto",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",u({},{id:"moveto"}),"moveTo"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_canvas#function-moveto",mdxType:"Link"},"moveTo")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"CWRUtil::Q5")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"x ,"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"CWRUtil::Q5")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"y"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Move the current pen position to (x, y). "),(0,n.kt)("p",null,"If the pen is outside the drawing area, nothing is done, but the coordinates are saved in case the next operation is lineTo a coordinate which is inside (or on the opposite side of) the drawing area."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"x"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"The x coordinate for the pen position in ",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"CWRUtil::Q5")," format.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"y"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"The y coordinate for the pen position in ",(0,n.kt)("a",u({parentName:"td"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"CWRUtil::Q5")," format."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"See also:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_c_w_r_util_1_1_q5"}),"CWRUtil::Q5"),", ",(0,n.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_canvas#function-lineto"}),"lineTo"))))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_canvas#function-moveto",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",u({},{id:"moveto-1"}),"moveTo"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_canvas#function-moveto",mdxType:"Link"},"moveTo")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"T"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"x ,"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"T"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"y"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Move the current pen position to (x, y). "),(0,n.kt)("p",null,"If the pen is outside (above or below) the drawing area, nothing is done, but the coordinates are saved in case the next operation is lineTo a coordinate which is inside (or on the opposite side of) the drawing area."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Template Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"T"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Either int or float."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"x"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"The x coordinate for the pen position.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"y"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"The y coordinate for the pen position."))))))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_canvas#function-render",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",u({},{id:"render"}),"render"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"bool","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_canvas#function-render",mdxType:"Link"},"render")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"uint8_t"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"customAlpha  =255"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Render the graphical shape drawn using ",(0,n.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_canvas#function-moveto"}),"moveTo()")," and ",(0,n.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_canvas#function-lineto"}),"lineTo()")," with the given Painter. "),(0,n.kt)("p",null,"The shape is automatically closed, i.e. a ",(0,n.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_canvas#function-lineto"}),"lineTo()")," is automatically inserted connecting the current pen position with the initial pen position given in the first ",(0,n.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_canvas#function-moveto"}),"moveTo()")," command."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"customAlpha"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"(Optional) Alpha to apply to the entire canvas. Useful if the canvas is part of a more complex container setup that needs to be faded. Default is solid."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"true if the widget was rendered, false if insufficient memory was available to render the widget. ")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_canvas#function-~canvas",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",u({},{id:"canvas-1"}),"~Canvas"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})),(0,n.kt)("th",u({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"virtual","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_canvas#function-~canvas",mdxType:"Link"},"~Canvas")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null})),(0,n.kt)("td",u({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",u({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Finalizes an instance of the ",(0,n.kt)("a",u({parentName:"p"},{href:"classtouchgfx_1_1_canvas"}),"Canvas")," class. "),(0,n.kt)("div",{class:"api-note",markdown:"1"},(0,n.kt)("h5",null,"Note"),(0,n.kt)("p",null,"Unlocks the framebuffer. ")))))}v.isMDXComponent=!0}}]);