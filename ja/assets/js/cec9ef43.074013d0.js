"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9152],{3905:function(t,n,e){e.d(n,{Zo:function(){return p},kt:function(){return h}});var a=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function c(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var i=a.createContext({}),u=function(t){var n=a.useContext(i),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},p=function(t){var n=u(t.components);return a.createElement(i.Provider,{value:n},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),s=u(e),m=r,h=s["".concat(i,".").concat(m)]||s[m]||d[m]||l;return e?a.createElement(h,o(o({ref:n},p),{},{components:e})):a.createElement(h,o({ref:n},p))}));function h(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=e.length,o=new Array(l);o[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=t,c[s]="string"==typeof t?t:r,o[1]=c;for(var u=2;u<l;u++)o[u]=e[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,e)}m.displayName="MDXCreateElement"},43861:function(t,n,e){var a=e(67294);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}n.Z=r},2e4:function(t,n,e){e.r(n),e.d(n,{assets:function(){return _},contentTitle:function(){return k},default:function(){return b},frontMatter:function(){return h},metadata:function(){return g},toc:function(){return f}});var a=e(3905),r=e(39130),l=e(43861),o=Object.defineProperty,c=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(t,n,e)=>n in t?o(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,m=(t,n)=>{for(var e in n||(n={}))p.call(n,e)&&d(t,e,n[e]);if(u)for(var e of u(n))s.call(n,e)&&d(t,e,n[e]);return t};const h={title:"TouchController"},k=void 0,g={unversionedId:"api/classes/classtouchgfx_1_1_touch_controller",id:"api/classes/classtouchgfx_1_1_touch_controller",title:"TouchController",description:"",source:"@site/docs/api/classes/classtouchgfx_1_1_touch_controller.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_touch_controller",permalink:"/4.17/ja/docs/api/classes/classtouchgfx_1_1_touch_controller",draft:!1,tags:[],version:"current",frontMatter:{title:"TouchController"},sidebar:"docs",previous:{title:"TouchCalibration",permalink:"/4.17/ja/docs/api/classes/classtouchgfx_1_1_touch_calibration"},next:{title:"Transition",permalink:"/4.17/ja/docs/api/classes/classtouchgfx_1_1_transition"}},_={},f=[{value:"Public Functions",id:"public-functions",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"init",id:"init",level:3},{value:"sampleTouch",id:"sampletouch",level:3},{value:"~TouchController",id:"touchcontroller",level:3}],N={toc:f};function b(t){var n,e=t,{components:o}=e,d=((t,n)=>{var e={};for(var a in t)p.call(t,a)&&n.indexOf(a)<0&&(e[a]=t[a]);if(null!=t&&u)for(var a of u(t))n.indexOf(a)<0&&s.call(t,a)&&(e[a]=t[a]);return e})(e,["components"]);return(0,a.kt)("wrapper",(n=m(m({},N),d),c(n,i({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Basic Touch Controller interface. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Inherited by"),":  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_i2_c_touch_controller",mdxType:"Link"},"I2CTouchController"),",  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_no_touch_controller",mdxType:"Link"},"NoTouchController"),",  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_s_d_l2_touch_controller",mdxType:"Link"},"SDL2TouchController"),",  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_s_d_l_touch_controller",mdxType:"Link"},"SDLTouchController")),(0,a.kt)("h2",m({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:"right"})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_touch_controller#function-init",mdxType:"Link"},"init")),"() =0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Initializes touch controller.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_touch_controller#function-sampletouch",mdxType:"Link"},"sampleTouch")),"(int32_t & x, int32_t & y) =0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Checks whether the touch screen is being touched, and if so, what coordinates.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_touch_controller#function-~touchcontroller",mdxType:"Link"},"~TouchController")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,a.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_touch_controller"}),"TouchController")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"right"})),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",m({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_touch_controller#function-init",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",m({},{id:"init"}),"init"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_touch_controller#function-init",mdxType:"Link"},"init")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"=0"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Initializes touch controller. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_no_touch_controller#function-init",mdxType:"Link"},"touchgfx::NoTouchController::init"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_s_d_l2_touch_controller#function-init",mdxType:"Link"},"touchgfx::SDL2TouchController::init"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_s_d_l_touch_controller#function-init",mdxType:"Link"},"touchgfx::SDLTouchController::init"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_i2_c_touch_controller#function-init",mdxType:"Link"},"touchgfx::I2CTouchController::init")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_touch_controller#function-sampletouch",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",m({},{id:"sampletouch"}),"sampleTouch"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_touch_controller#function-sampletouch",mdxType:"Link"},"sampleTouch")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"int32_t &"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"x ,"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"=0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"int32_t &"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"y"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"=0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"=0"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Checks whether the touch screen is being touched, and if so, what coordinates. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"x"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The x position of the touch.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"y"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The y position of the touch."))))),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"True if a touch has been detected, otherwise false. ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reimplemented by"),": ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_no_touch_controller#function-sampletouch",mdxType:"Link"},"touchgfx::NoTouchController::sampleTouch"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_s_d_l2_touch_controller#function-sampletouch",mdxType:"Link"},"touchgfx::SDL2TouchController::sampleTouch"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_s_d_l_touch_controller#function-sampletouch",mdxType:"Link"},"touchgfx::SDLTouchController::sampleTouch"),", ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_i2_c_touch_controller#function-sampletouch",mdxType:"Link"},"touchgfx::I2CTouchController::sampleTouch")))),(0,a.kt)(l.Z,{url:"classtouchgfx_1_1_touch_controller#function-~touchcontroller",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",m({},{id:"touchcontroller"}),"~TouchController"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"virtual","\xa0",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_touch_controller#function-~touchcontroller",mdxType:"Link"},"~TouchController")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",m({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Finalizes an instance of the ",(0,a.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_touch_controller"}),"TouchController")," class. "))))}b.isMDXComponent=!0}}]);