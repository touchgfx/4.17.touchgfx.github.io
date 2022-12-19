"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2573],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),p=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},u="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=p(a),s=r,m=u["".concat(c,".").concat(s)]||u[s]||g[s]||l;return a?n.createElement(m,i(i({ref:e},d),{},{components:a})):n.createElement(m,i({ref:e},d))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},43861:function(t,e,a){var n=a(67294);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},62116:function(t,e,a){a.r(e),a.d(e,{assets:function(){return b},contentTitle:function(){return k},default:function(){return v},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return f}});var n=a(3905),r=a(39130),l=a(43861),i=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,g=(t,e,a)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,s=(t,e)=>{for(var a in e||(e={}))d.call(e,a)&&g(t,a,e[a]);if(p)for(var a of p(e))u.call(e,a)&&g(t,a,e[a]);return t};const m={title:"Draggable"},k=void 0,h={unversionedId:"api/classes/classtouchgfx_1_1_draggable",id:"api/classes/classtouchgfx_1_1_draggable",title:"Draggable",description:"",source:"@site/docs/api/classes/classtouchgfx_1_1_draggable.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_draggable",permalink:"/4.17/docs/api/classes/classtouchgfx_1_1_draggable",draft:!1,tags:[],version:"current",frontMatter:{title:"Draggable"},sidebar:"docs",previous:{title:"DragEvent",permalink:"/4.17/docs/api/classes/classtouchgfx_1_1_drag_event"},next:{title:"Drawable",permalink:"/4.17/docs/api/classes/classtouchgfx_1_1_drawable"}},b={},f=[{value:"Public Functions",id:"public-functions",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"Draggable",id:"draggable",level:3},{value:"handleDragEvent",id:"handledragevent",level:3}],N={toc:f};function v(t){var e,a=t,{components:i}=a,g=((t,e)=>{var a={};for(var n in t)d.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&p)for(var n of p(t))e.indexOf(n)<0&&u.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=s(s({},N),g),o(e,c({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null," Mix-in class that extends a class to become Draggable, which means that the object on screen can be freely moved around using the touch screen. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Template Parameters"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"T")," specifies the type to extend with the ",(0,n.kt)("a",s({parentName:"li"},{href:"classtouchgfx_1_1_draggable"}),"Draggable")," behavior. ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Inherits from"),": T"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Inherited by"),":  ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_snapper",mdxType:"Link"},"Snapper","<"," T ",">")),(0,n.kt)("h2",s({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:"right"})),(0,n.kt)("th",s({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_draggable#function-draggable",mdxType:"Link"},"Draggable")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,n.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_draggable"}),"Draggable")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_draggable#function-handledragevent",mdxType:"Link"},"handleDragEvent")),"(const ",(0,n.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_drag_event"}),"DragEvent")," & event)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Called when dragging the ",(0,n.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_draggable"}),"Draggable")," object.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"right"})),(0,n.kt)("td",s({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",s({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_draggable#function-draggable",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",s({},{id:"draggable"}),"Draggable"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_draggable#function-draggable",mdxType:"Link"},"Draggable")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",s({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Initializes a new instance of the ",(0,n.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_draggable"}),"Draggable")," class. "),(0,n.kt)("p",null,"Make the object touchable. "))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_draggable#function-handledragevent",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",s({},{id:"handledragevent"}),"handleDragEvent"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_draggable#function-handledragevent",mdxType:"Link"},"handleDragEvent")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"const ",(0,n.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_drag_event"}),"DragEvent")," &"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"event"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})),(0,n.kt)("td",s({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Called when dragging the ",(0,n.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_draggable"}),"Draggable")," object. "),(0,n.kt)("p",null,"The object is moved according to the drag event."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null})),(0,n.kt)("th",s({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"event"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The drag event."))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_snapper#function-handledragevent",mdxType:"Link"},"touchgfx::Snapper::handleDragEvent")))))}v.isMDXComponent=!0}}]);