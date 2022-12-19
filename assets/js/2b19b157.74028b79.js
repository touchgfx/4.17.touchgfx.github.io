"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6365],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,h=p["".concat(u,".").concat(m)]||p[m]||f[m]||a;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),o=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,a=e.height,i=(0,o.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:a,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:a,src:i})),n.createElement("p",null,e.children))}},91238:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return h},default:function(){return v},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return y}});var n=r(3905),o=r(44035),a=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(u)for(var r of u(t))s.call(t,r)&&p(e,r,t[r]);return e};const m={id:"what-is-touchgfx",title:"What is TouchGFX?"},h=void 0,d={unversionedId:"introduction/what-is-touchgfx",id:"introduction/what-is-touchgfx",title:"What is TouchGFX?",description:"",source:"@site/docs/introduction/what-is-touchgfx.mdx",sourceDirName:"introduction",slug:"/introduction/what-is-touchgfx",permalink:"/4.17/docs/introduction/what-is-touchgfx",draft:!1,tags:[],version:"current",frontMatter:{id:"what-is-touchgfx",title:"What is TouchGFX?"},sidebar:"docs",previous:{title:"Welcome",permalink:"/4.17/docs/introduction/welcome"},next:{title:"Installation",permalink:"/4.17/docs/introduction/installation"}},g={},y=[],b={toc:y};function v(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},b),p),i(t,c({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"TouchGFX is delivered as one X-Cube package the ",(0,n.kt)("em",{parentName:"p"},"X-Cube-TouchGFX"),"."),(0,n.kt)("p",null,"With this you have all you need to do a full implementation of your GUI application for STM32 based hardware. TouchGFX consists of three main parts - two tools and one framework. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"TouchGFX Designer:")," An easy-to-use GUI builder in TouchGFX that lets you create the visual appearance of your TouchGFX application."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"TouchGFX Generator:")," A STM32CubeMX plugin where the user can configure and generate a custom TouchGFX Abstraction Layer (AL) for their STM32-based hardware."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"TouchGFX Engine:")," The TouchGFX C++ framework that drives the UI application. Handles screen updates, user events and timing. The advanced TouchGFX technology is optimized for STM32 microcontrollers, giving you maximum performance with minimum  CPU load and memory usage.")),(0,n.kt)(o.Z,{imageSource:"/img/introduction/what-is-touchgfx/touchgfx-components.webp",noShadow:!0,mdxType:"Figure"}))}v.isMDXComponent=!0}}]);