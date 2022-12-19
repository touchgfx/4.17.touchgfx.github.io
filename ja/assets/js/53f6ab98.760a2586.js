"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1090],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return b}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),p=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},s=function(t){var e=p(t.components);return r.createElement(o.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=p(a),k=n,b=u["".concat(o,".").concat(k)]||u[k]||d[k]||l;return a?r.createElement(b,c(c({ref:e},s),{},{components:a})):r.createElement(b,c({ref:e},s))}));function b(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,c=new Array(l);c[0]=k;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[u]="string"==typeof t?t:n,c[1]=i;for(var p=2;p<l;p++)c[p]=a[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},43861:function(t,e,a){var r=a(67294);class n extends r.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return r.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=n},91769:function(t,e,a){a.r(e),a.d(e,{assets:function(){return _},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return b},metadata:function(){return h},toc:function(){return f}});var r=a(3905),n=a(39130),l=a(43861),c=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(t,e,a)=>e in t?c(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,k=(t,e)=>{for(var a in e||(e={}))s.call(e,a)&&d(t,a,e[a]);if(p)for(var a of p(e))u.call(e,a)&&d(t,a,e[a]);return t};const b={title:"CallbackArea"},m=void 0,h={unversionedId:"api/classes/structtouchgfx_1_1_keyboard_1_1_callback_area",id:"api/classes/structtouchgfx_1_1_keyboard_1_1_callback_area",title:"CallbackArea",description:"",source:"@site/docs/api/classes/structtouchgfx_1_1_keyboard_1_1_callback_area.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_keyboard_1_1_callback_area",permalink:"/4.17/ja/docs/api/classes/structtouchgfx_1_1_keyboard_1_1_callback_area",draft:!1,tags:[],version:"current",frontMatter:{title:"CallbackArea"},sidebar:"docs",previous:{title:"Callback<dest_type,void,void,void>",permalink:"/4.17/ja/docs/api/classes/structtouchgfx_1_1_callback_3_01dest__type_00_01void_00_01void_00_01void_01_4"},next:{title:"Canvas",permalink:"/4.17/ja/docs/api/classes/classtouchgfx_1_1_canvas"}},_={},f=[{value:"Public Attributes",id:"public-attributes",level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",level:2},{value:"callback",id:"callback",level:3},{value:"highlightBitmapId",id:"highlightbitmapid",level:3},{value:"keyArea",id:"keyarea",level:3}],g={toc:f};function y(t){var e,a=t,{components:c}=a,d=((t,e)=>{var a={};for(var r in t)s.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(null!=t&&p)for(var r of p(t))e.indexOf(r)<0&&u.call(t,r)&&(a[r]=t[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(e=k(k({},g),d),i(e,o({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Mapping from rectangle to a callback method to execute. "),(0,r.kt)("h2",k({},{id:"public-attributes"}),"Public Attributes"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:"right"})),(0,r.kt)("th",k({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"}),(0,r.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback")," *"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_keyboard_1_1_callback_area#variable-callback",mdxType:"Link"},"callback")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),'The callback to execute, when the area is "pressed". The callback should be a Callback',"<","YourClass",">"," member in the class using the keyboard.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"}),(0,r.kt)("a",k({parentName:"td"},{href:"../namespacetouchgfx#typedef-bitmapid"}),"BitmapId")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_keyboard_1_1_callback_area#variable-highlightbitmapid",mdxType:"Link"},"highlightBitmapId")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),'A bitmap to show when the area is "pressed".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"}),(0,r.kt)("a",k({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")),(0,r.kt)("td",k({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(n.Z,{to:"structtouchgfx_1_1_keyboard_1_1_callback_area#variable-keyarea",mdxType:"Link"},"keyArea")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"The area occupied by a key.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:"right"})),(0,r.kt)("td",k({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",k({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,r.kt)(l.Z,{url:"structtouchgfx_1_1_keyboard_1_1_callback_area#variable-callback",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",k({},{id:"callback"}),"callback"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback")," * callback ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,'The callback to execute, when the area is "pressed". The callback should be a Callback',"<","YourClass",">"," member in the class using the keyboard. "))),(0,r.kt)(l.Z,{url:"structtouchgfx_1_1_keyboard_1_1_callback_area#variable-highlightbitmapid",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",k({},{id:"highlightbitmapid"}),"highlightBitmapId"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",k({parentName:"p"},{href:"../namespacetouchgfx#typedef-bitmapid"}),"BitmapId")," highlightBitmapId ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,'A bitmap to show when the area is "pressed". '))),(0,r.kt)(l.Z,{url:"structtouchgfx_1_1_keyboard_1_1_callback_area#variable-keyarea",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",k({},{id:"keyarea"}),"keyArea"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",k({parentName:"p"},{href:"classtouchgfx_1_1_rect"}),"Rect")," keyArea ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The area occupied by a key. "))))}y.isMDXComponent=!0}}]);