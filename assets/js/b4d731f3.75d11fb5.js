"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2047],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),h=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=h(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=h(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var h=2;h<o;h++)i[h]=n[h];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children))}},27386:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return k},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return g}});var r=n(3905),a=n(44035),o=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&p(e,n,t[n]);return e};const d={id:"touchgfx-al-development-introduction",title:"TouchGFX AL Development Introduction"},f=void 0,m={unversionedId:"development/touchgfx-hal-development/touchgfx-al-development-introduction",id:"development/touchgfx-hal-development/touchgfx-al-development-introduction",title:"TouchGFX AL Development Introduction",description:"",source:"@site/docs/development/touchgfx-hal-development/touchgfx-al-development-introduction.mdx",sourceDirName:"development/touchgfx-hal-development",slug:"/development/touchgfx-hal-development/touchgfx-al-development-introduction",permalink:"/4.17/docs/development/touchgfx-hal-development/touchgfx-al-development-introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"touchgfx-al-development-introduction",title:"TouchGFX AL Development Introduction"},sidebar:"docs",previous:{title:"11. Flash Loader",permalink:"/4.17/docs/development/board-bring-up/how-to/11-flash-loader"},next:{title:"Abstraction Layer Architecture",permalink:"/4.17/docs/development/touchgfx-hal-development/touchgfx-architecture"}},b={},g=[{value:"Responsibilities of the Abstraction Layer",id:"responsibilities-of-the-abstraction-layer",level:2},{value:"Example setup: Two framebuffers - MCU with LTDC",id:"example-setup-two-framebuffers---mcu-with-ltdc",level:2}],y={toc:g};function k(e){var t,n=e,{components:o}=n,p=((e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},y),p),i(t,l({components:o,mdxType:"MDXLayout"}))),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/activities-selected-002.webp",noShadow:!0,width:"600",mdxType:"Figure"},"Project activity"),(0,r.kt)("p",null,"The TouchGFX Abstraction Layer (AL), in a TouchGFX application, is the software component that sits between the Board Initialization Code, developed during the Board Bring-Up phase, and the TouchGFX Engine. Its main task is to tie together the Engine with the underlying hardware and operating system. This is done by abstracting the specifics of the underlying hardware and OS such that it can be treated in a unified way by the Engine."),(0,r.kt)("p",null,"The AL consists of two different parts, the Hardware Abstraction Layer (HAL) and the Operating System Abstraction Layer (OSAL)."),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/components-selected-002.webp",noShadow:!0,width:"600",mdxType:"Figure"},"Project component"),(0,r.kt)("p",null,"In this section you will get a general introduction to the principles and responsibilities of the abstraction layer and how it interacts with the TouchGFX Engine. Details on how this is achieved for particular hardware is described in the following sections."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"touchgfx-architecture"}),"Abstraction Layer Architecture")," details the architecture of the AL and shows you how to implement each of the interaction points, called hooks, between the TouchGFX Engine and the AL."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"touchgfx-generator"}),"Generator User Guide")," shows you how to use TouchGFX Generator to create the basis for your AL implementation as well as details on more complex issues."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"scenarios/scenarios-ltdc-parallel-rgb"}),"Scenarios")," gives you concrete detailed examples on how to create ALs for specific hardware setups.")),(0,r.kt)("h2",u({},{id:"responsibilities-of-the-abstraction-layer"}),"Responsibilities of the Abstraction Layer"),(0,r.kt)("p",null,"As explaned in the ",(0,r.kt)("a",u({parentName:"p"},{href:"../../basic-concepts/rendering"}),"Main Loop")," section in the Basic Concepts chapter, the TouchGFX Engine has a main loop that performs three basic steps."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Collect input (Touch coordinates, Buttons)"),(0,r.kt)("li",{parentName:"ol"},"Update the Scene Model"),(0,r.kt)("li",{parentName:"ol"},"Render the Scene Model to the Framebuffer")),(0,r.kt)("p",null,"These three steps ensure the main responsibility of the TouchGFX engine, which is to update the framebuffer to reflect the current state of the application."),(0,r.kt)("p",null,"The actual transfer of framebuffer data to the display as well as the collection of external input is not directly handled by the engine, but instead delegated from the engine to the TouchGFX AL."),(0,r.kt)("p",null,"The main loop will continuously update the framebuffer(s) over and over again. This process must be synchronized with the actual update frequency and readyness of the display to ensure that all frames will be transferred and displayed correctly on the display. If no synchronization takes place the main loop will continuously update and potentionally overwrite the framebuffer(s) before it has been transferred. This synchronization is the responsibility of the AL."),(0,r.kt)("p",null,"The TouchGFX AL also has the responsibility of controlling the framebuffer memory area and the access to it. This means that all accesses of the framebuffer will go through the AL."),(0,r.kt)("p",null,"To detail, the responsibilities of the TouchGFX AL are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Responsibility"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Synchronize TouchGFX Engine main loop with display transfer"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"When the next frame has been calculated and rendered in the available framebuffer, the engine main loop must be halted to make sure that it does not overwrite the newly assembled framebuffer before it has been transferred to the display.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Report touch and physical button events"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Sample if a touch event has occurred and the corresponding coordinates hereof. Sample whether or not any physical button or similar has been activated. Report these events to the engine. ",(0,r.kt)("br",null),"Note that other external events are to be propagated to the TouchGFX application through a different mechanism. Read more on this in the section on ",(0,r.kt)("a",u({parentName:"td"},{href:"../ui-development/touchgfx-engine-features/backend-communication"}),"backend communication"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Synchronize framebuffer access"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"The framebuffer memory is the responsibility of the TouchGFX AL and since it can be accessed by different actors, like the main loop thread and the DMA, TouchGFX AL must offer a way to protect this memory.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Report the next available framebuffer area"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"The AL must be able to answer which part of the current framebuffer can be updated next. In a standard two framebuffer setup, this will always be the complete framebuffer, since in that case you always have one entire framebuffer dedicated for rendering and one for transferring to the display. In a one or partial framebuffer setup this is more complex.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Perform render operations"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"While rendering the scene model, the engine main loop will ask the AL to render parts hereof. A specific TouchGFX AL implementation will utilize the underlying hardware to render graphics primitives. One example is rendering bitmaps on MCUs with the Chrom-ART graphics accelarator. TouchGFX comes with optimized rendering methods built-in for all available platforms, so no need to customize this.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Handle framebuffer transfer to display"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"The engine informs the AL which part of which framebuffer must be transferred. The AL should initiate this transfer making sure that the pixels eventually end up on the physical display.")))),(0,r.kt)("p",null,"Since TouchGFX AL is a passive software module, not having its own thread or similar, it must perform its actions through certain hooks (functions) called from the TouchGFX Engine main loop or through interrupts."),(0,r.kt)("p",null,"The available set of hooks and interrupts are depicted below."),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/al-introduction/al-hooks-00.webp",noShadow:!0,mdxType:"Figure"},"Available hooks and interrupts"),(0,r.kt)("p",null,"It is up to the AL developer to implement these hooks so that the responsibilities of the AL are covered given the underlying hardware and operating system. If the AL developer needs other means to support the  responsibilities, the developer can setup interrupts to activate at certain points. Examples of this is LTDC vertical synchronization interrupt and a hardware timer. The ",(0,r.kt)("em",{parentName:"p"},"I1: Display ready")," interrupt is an example of a vertical synchronization interrupt. Note that the setup of these interrupts is considered a part of the AL development."),(0,r.kt)("h2",u({},{id:"example-setup-two-framebuffers---mcu-with-ltdc"}),"Example setup: Two framebuffers - MCU with LTDC"),(0,r.kt)("p",null,"One common setup is having two framebuffers with an MCU with LTDC. The AL actions for each hook will in this setup most often be as follows."),(0,r.kt)("p",null,"Setup the AL to react to the LTDC VSYNC interrupt such that I1 is executed each time the display is ready to receive a new frame. This is used to synchronize the main loop with the display."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Hooks and Interrupts"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Actions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"I1: Display ready"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Setup the LTDC VSYNC interrupt to trigger this.",(0,r.kt)("br",null)," Unblock the main loop and initiate framebuffer transfer of the framebuffer prepared in previous frame")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"H1: Report touch and physical button events"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Return any information on touch events or physical button clicks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"H2: Get next available framebuffer area"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Using the double buffer setup simply return the entire framebuffer area of the framebuffer not currently being transferred to the display")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"H3: Perform render operations"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Depends on the capabilities of the MCU. Perform the hardware assisted render operations and software fallback for the rest")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"H4: Rendering of area complete"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"No action")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"H5: Rendering done"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Block the main loop")))),(0,r.kt)("p",null,"This setup gives the following execution flow:"),(0,r.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/al-introduction/al-actions-00.webp",noShadow:!0,mdxType:"Figure"},"Execution flow in setup with two framebuffers and an MCU with LTDC"),(0,r.kt)("p",null,"This describes the overall design of the AL for this setup. The following sections goes into depth on how to implement Abstraction Layers."))}k.isMDXComponent=!0}}]);