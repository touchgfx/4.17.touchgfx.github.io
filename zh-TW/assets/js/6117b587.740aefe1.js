(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4216],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),h=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=h(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=h(a),u=r,m=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var h=2;h<i;h++)l[h]=a[h];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},22425:function(e,t,a){"use strict";var n=a(67294);class r extends n.Component{render(){return n.createElement("div",{class:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,a){"use strict";var n=a(67294),r=a(25026);t.Z=function(e){const t=e.noShadow||!1,a=e.width,i=e.height,l=(0,r.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:a,height:i,src:l})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:a,height:i,src:l})),n.createElement("p",null,e.children))}},88678:function(e,t,a){"use strict";var n=a(67294);class r extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{class:e},n.createElement("div",{class:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=r},37793:function(e,t,a){"use strict";var n=a(67294),r=a(88678);const i=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends n.Component{render(){return n.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=l},35096:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,{b:function(){return n},Z:function(){return r}})},25026:function(e,t,a){"use strict";a.d(t,{C:function(){return i},Z:function(){return l}});var n=a(11368),r=a(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(n)return t+a;const l=a.startsWith(t)?a:t+a.replace(/^\//,"");return i?e+l:l}(t,e,a,n)}}function l(e,t={}){const{withBaseUrl:a}=i();return a(e,t)}},99306:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return g},contentTitle:function(){return f},metadata:function(){return k},toc:function(){return y},default:function(){return w}});var n=a(3905),r=a(44035),i=a(37793),l=a(22425),o=Object.defineProperty,s=Object.defineProperties,h=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&u(e,a,t[a]);if(p)for(var a of p(t))c.call(t,a)&&u(e,a,t[a]);return e};const g={id:"touchgfx-on-lowcost-hardware",title:"TouchGFX on Low Cost Hardware"},f=void 0,k={unversionedId:"development/scenarios/touchgfx-on-lowcost-hardware",id:"development/scenarios/touchgfx-on-lowcost-hardware",isDocsHomePage:!1,title:"TouchGFX on Low Cost Hardware",description:"This section discusses how to use TouchGFX on low cost hardware with limited amount of RAM and flash, no acceleration and slow connection to external flash and display.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/scenarios/touchgfx-on-lowcost-hardware.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/touchgfx-on-lowcost-hardware",permalink:"/4.17/zh-TW/docs/development/scenarios/touchgfx-on-lowcost-hardware",version:"current",frontMatter:{id:"touchgfx-on-lowcost-hardware",title:"TouchGFX on Low Cost Hardware"},sidebar:"docs",previous:{title:"Creating Dynamic L8 Images",permalink:"/4.17/zh-TW/docs/development/ui-development/scenarios/creating-dynamic-l8-images"},next:{title:"Lowering Memory Usage with Partial Framebuffer",permalink:"/4.17/zh-TW/docs/development/scenarios/lowering-memory-usage-with-partial-framebuffer"}},y=[{value:"Hardware Overview",id:"hardware-overview",children:[{value:"GPIO Allocation",id:"gpio-allocation",children:[]},{value:"Starting a Project",id:"starting-a-project",children:[]}]},{value:"Display Updates",id:"display-updates",children:[{value:"Drawing Speed",id:"drawing-speed",children:[]}]},{value:"TouchGFX Limitations with Serial Flash",id:"touchgfx-limitations-with-serial-flash",children:[{value:"Texture Mapper",id:"texture-mapper",children:[]},{value:"Bitmap Painter",id:"bitmap-painter",children:[]},{value:"L8 Palette",id:"l8-palette",children:[]}]},{value:"Drivers",id:"drivers",children:[{value:"Display",id:"display",children:[]},{value:"External flash",id:"external-flash",children:[]},{value:"Buttons",id:"buttons",children:[]}]}],b={toc:y};function w(e){var t,a=e,{components:o}=a,u=((e,t)=>{var a={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},b),u),s(t,h({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"This section discusses how to use TouchGFX on low cost hardware with limited amount of RAM and flash, no acceleration and slow connection to external flash and display."),(0,n.kt)("p",null,"We will try to give some advice on writing the best applications of the given hardware."),(0,n.kt)("p",null,"Throughout this section we will use the TouchGFX board setup for the STM32G071 nucleo board with the X-Nucleo-GFX01M1 expansion board as example hardware."),(0,n.kt)(r.Z,{imageSource:"/img/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer/g071-with-gfx01m1.png",mdxType:"Figure"},"Nucleo-G071RB with X-Nucleo-GFX01M1 expansion board"),(0,n.kt)("h2",m({},{id:"hardware-overview"}),"Hardware Overview"),(0,n.kt)("p",null,"The hardware setup in this kit consist of the STM32G071 MCU, a SPI NOR flash, a SPI display, and joystick button."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Component")),(0,n.kt)("th",m({parentName:"tr"},{align:"right"}),"\xa0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"MCU"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"STM32G071RB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"MCU RAM"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"32 Kb")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"MCU Flash"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"128 Kb")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Display"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"Displaytech DT022CTFT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Display resolution"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"240 x 320")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Display controller"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"ILI9341V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Display connection"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"SPI")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Display connection speed"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"32 MHz")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"NOR Flash"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"Macronix MX25L6433F")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"NOR Flash size"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"64 Mbit")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"NOR Flash connection speed"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"32 MHz")))),(0,n.kt)("p",null,"The display is connected to the SPI1 peripheral and the flash is connected to the SPI2 peripheral. This allows the MCU to read data from the flash while transmitting data to the display."),(0,n.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/g071-gfx01m1-architecture.png",width:"500px",mdxType:"Figure"},"Nucleo-G071RB with X-Nucleo-GFX01M1 architecture"),(0,n.kt)("h3",m({},{id:"gpio-allocation"}),"GPIO Allocation"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u4fe1\u865f")),(0,n.kt)("th",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"GPIO Pin")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Display CS"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"PB5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Display DCX"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"PB3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Display SCK"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"PA5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Display MOSI"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"PA7")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Display TE"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"PA0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Flash CS"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"PB9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Flash SCK"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"PB13")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Flash MOSI"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"PC3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Flash MISO"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"PC2")))),(0,n.kt)("p",null,"The table above lists the GPIO allocation for the signals to the flash and display. These signal can be monitored with a oscilloscope or logic analyzer. This is very usefull during debugging of e.g. performance problems."),(0,n.kt)("h3",m({},{id:"starting-a-project"}),"Starting a Project"),(0,n.kt)("p",null,'It is easy to start a project for the STM32G071RB Nucleo evaluation kit in the TouchGFX Designer. Click on the "Create New" button and search for STM32G071 Nucleo.  This board setup is developed specifically for the Nucleo-G071RB kit with the X-Nucleo-GFX01M1 display shield.'),(0,n.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/g071-start-new-project-4.17.png",mdxType:"Figure"},"New project for Nucleo-G071RB"),(0,n.kt)("p",null,"The TouchGFX board setup supports the NOR flash, the display, and the buttons. The display can be used both in portrait and horisontal mode."),(0,n.kt)("p",null,"The display orientation can be change in the TouchGFX Designer in the ",(0,n.kt)("em",{parentName:"p"},"Config -> Display")," section:"),(0,n.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/portrait-4.17.png",mdxType:"Figure"},"Selecting portrait or horizontal display orientation"),(0,n.kt)("p",null,"The display on the X-Nucleo-GFX01M1 shield is natively portrait orientated (higher than wide), but it can easily be used with horizontal orientation."),(0,n.kt)("h2",m({},{id:"display-updates"}),"Display Updates"),(0,n.kt)("p",null,"As mentioned above the display resolution is 240 x 320 pixels. A total of 76.800 pixels or 153.600 bytes. The SPI connection between the MCU and the display is running at 32 MHz. This allows us to transfer 4 MBytes/s or 2M pixels/s."),(0,n.kt)("p",null,"The refresh rate of the display is 76.1 Hz which gives us a frame time of 13.14 ms."),(0,n.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/display-te.png",mdxType:"Figure"},"Tearing effect signal from the display"),(0,n.kt)("p",null,"This means that we have at most 13 ms to send data for the next frame. In that time we can send 2.000.000 pixels/s / 76 fps = 26.280 pixels / frame or 34% of a full screen.",(0,n.kt)("br",{parentName:"p"}),"\n","In practice we cannot sustain that transfer speed on the SPI bus because of the protocol overhead so we cannot expect to send more than approximately 30% of a full frame."),(0,n.kt)("p",null,"If the application updates more than that amount of pixels the hardware cannot complete the transmission within the frame time. The result is that the display will start showing the updated frame before it is completely updated. The user will then in some cases see a mix of the old frame and the new frame."),(0,n.kt)("p",null,"For some animations this is not noticeable to the user, for others the result will be unacceptable."),(0,n.kt)("p",null,"We therefore recommend to keep the level of updates below the 30% limit. \u5982 by incrementally updating the frame step-by-step."),(0,n.kt)("p",null,"Because of this, it is generally better to expand an item on the screen, than moving the item."),(0,n.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/star.png",width:"400",mdxType:"Figure"},"Tearing effect signal from the display"),(0,n.kt)("p",null,"When the star is moved to the right, all the pixels covered by the star must be updated. When the star is expanded only the new pixels must be updated. The pixels updated in previous frame remain unchanged."),(0,n.kt)("h3",m({},{id:"drawing-speed"}),"Drawing Speed"),(0,n.kt)("p",null,"The transmission to the display is running at maximum 32 MHz."),(0,n.kt)("p",null,"The serial flash can run at the same speed as the display transmission. This means that the serial flash is fast enough to feed bits to the display at maximum speed."),(0,n.kt)("p",null,"This is only achieved if the pixel format of an image in the flash is RGB565. In this case is two bytes read from the flash equal to 1 pixel, which is also two bytes on the display.",(0,n.kt)("br",{parentName:"p"}),"\n","If the pixel format in the flash is ARGB8888, we need to read double the amount of data from the flash to produce a pixel on the display, and the serial flash will not be able to keep up with the display."),(0,n.kt)("p",null,"When this happens we are not sending data to the display continously and it will not be possible to update all 30% of the display in a frame. One possibility is to move the image to internal flash, another of course to change the pixel format."),(0,n.kt)("p",null,"Other widgets are not bound by the speed of the flash. \u5982 the Box Widget, which draws a colored rectangle. This widget is of course very fast and much faster than the display transmission. Other widgets like Line and Circle uses much more CPU resources. These Widget are not able to produce pixels in the speed they can be transmitted to the display. Using these Widgets an application cannot expect to be able to update 30% of the display in every frame."),(0,n.kt)("p",null,"Find about pixel rendering complexity ",(0,n.kt)("a",m({parentName:"p"},{href:"../../basic-concepts/performance#the-complexity-of-rendering-the-pixels"}),"here")),(0,n.kt)("h2",m({},{id:"touchgfx-limitations-with-serial-flash"}),"TouchGFX Limitations with Serial Flash"),(0,n.kt)("p",null,"TouchGFX on STM32G0 with serial flash has a few limitations that the application programmer must be aware of."),(0,n.kt)("h3",m({},{id:"texture-mapper"}),"Texture Mapper"),(0,n.kt)("p",null,"The texture mapper widgets (Texture Mapper, Animation Texture Mapper, Scalable Image) can not draw an image that is stored in the external SPI flash. The reason is that it is not possible to get an acceptable performance of e.g. image rotation with an image stored in a serial flash."),(0,n.kt)("p",null,"To use an image with a texture mapper you must store the image in internal flash or RAM. An image is easily stored in internal flash by modifying the image configuration in TouchGFX Designer."),(0,n.kt)("p",null,'Go to the Images tab and select the image. In the right side of the window, change the "Section" attribute to "IntFlashSection".'),(0,n.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/image-internal-4.17.png",mdxType:"Figure"},"Placing an image in internal flash"),(0,n.kt)("p",null,"The texture mapper code is too large to include in all projects. It is therefore disabled pr. default for STM32G0 projects. This means that you must enable the texture mapper before you can use it in your STM32G0 projects."),(0,n.kt)("p",null,'Go to the "Config" tab, select "Framework Features", and click the relevant texture mapper or a group of texture mappers.'),(0,n.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/enabling-texture-mapper-4.17.png",mdxType:"Figure"},"Enabling a texture mapper for a specific image format"),(0,n.kt)("p",null,"It is also possible to temporarily move an image to RAM using the ",(0,n.kt)("a",m({parentName:"p"},{href:"/4.17/zh-TW/docs/development/ui-development/touchgfx-engine-features/caching-bitmaps"}),"Bitmap Cache")),(0,n.kt)("h3",m({},{id:"bitmap-painter"}),"Bitmap Painter"),(0,n.kt)("p",null,"Line, Circle, and Dynamic Graph widgets can be colored with an image. This is not possible with images located in the SPI flash. Images used with these widgets must be placed in internal flash or RAM."),(0,n.kt)("h3",m({},{id:"l8-palette"}),"L8 Palette"),(0,n.kt)("p",null,"Images in L8 format can be used on hardware with a serial flash. The limitation is that the palette data must be in the internal flash (also for performance reasons)."),(0,n.kt)("p",null,'The palette can be moved to internal flash by changing the "Extra Section" to "IntFlashSection" in the TouchGFX Designer.'),(0,n.kt)("h2",m({},{id:"drivers"}),"Drivers"),(0,n.kt)("p",null,"The TouchGFX board setup is created using the TouchGFX Generator. Read more about the Generator ",(0,n.kt)("a",m({parentName:"p"},{href:"/4.17/zh-TW/docs/development/touchgfx-hal-development/touchgfx-generator"}),"here"),". The TouchGFX Generator generates a HAL layer that links the TouchGFX framework with a set of low-level drivers (already implemented in this TouchGFX board setup). The low-level drivers for this application template are located in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Core/Src")," folder in your project."),(0,n.kt)("p",null,"The drivers are in 3 files:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Driver")),(0,n.kt)("th",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"File")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Display"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Core/Src/MB1642BDisplayDriver.c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Flash"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Core/Src/MB1642BDataReader.c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Buttons"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Core/Src/MB1642BButtonController.cpp")))),(0,n.kt)("h3",m({},{id:"display"}),"Display"),(0,n.kt)("p",null,"The display uses a fairly standard SPI protocol. A number of registers is the diplay can be written to configure the display. The chip select is asserted when data is transmitted to the display. An extra GPIO, DCX, is used to differentiate command bytes from data bytes."),(0,n.kt)("p",null,"The driver uses a DMA channel to send display pixel data. This allows the transmission to run while the MCU is calculating pixels. An DMA complete interrupt is used to free the memory transmitted for reuse in a future drawing and to restart the transmission if new data is already available."),(0,n.kt)("p",null,"Configuration data is not send with DMA, because the CS and CDX pins must be toggle between and in the small configuration packages."),(0,n.kt)("p",null,"The driver uses the SPI in 8 bit mode when sending configuration data, but changes to 16-bit mode when transmitting the pixel data. The reason for this is that the MCU memory is read in little endian mode. A pixel in RGB565 format is stored in RAM with the low byte (G and B) first and the high byte (R and G) second. This order is preserved when the 8-bit SPI is reading the memory for transmission. When the SPI is in 16-bit mode, the data is read as 16-bit RGB565 from memory and transmitted in correct order for the display."),(0,n.kt)("p",null,"A driver not using 16-bit DMA must swap the bytes in a pixel before transmitting."),(0,n.kt)("h4",m({},{id:"initialisation"}),"Initialisation"),(0,n.kt)("p",null,"The display initialisation is found in the function ",(0,n.kt)("inlineCode",{parentName:"p"},"MB1642BDisplayDriver_DisplayInit(void)")),(0,n.kt)("p",null,"The driver sends 6 commands to the display which follows the recommended power on sequence:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Exit Sleep Mode (11h)"),(0,n.kt)("li",{parentName:"ol"},"Enter Normal Mode (13h)"),(0,n.kt)("li",{parentName:"ol"},"Set Memory Access Control (36h) with MX and BGR bits set"),(0,n.kt)("li",{parentName:"ol"},"Set Pixel Format (3Ah) with format 16 bits"),(0,n.kt)("li",{parentName:"ol"},"Tearing Effect Line On (35h)"),(0,n.kt)("li",{parentName:"ol"},"Set Tear Scanline (44h) with line = 0")),(0,n.kt)("p",null,"The driver sleeps for 100 ms between these command."),(0,n.kt)("h4",m({},{id:"tearing-effect"}),"Tearing Effect"),(0,n.kt)("p",null,"The Tearing Effect (TE) signal from the display is very important. It allows the application to synchronize correctly with the display. This helps the application to avoid tearing on the display. The display asserts the signal whenever it starts an update cycle. The MCU uses this signal to also sending data to the display."),(0,n.kt)("p",null,"The TE signal is connected to the external interrupt input of the MCU. CubeMx generates and configures an interrupt on this pin."),(0,n.kt)("p",null,"The callback in the driver signal TouchGFX to start drawing:"),(0,n.kt)(l.Z,{mdxType:"CodeHeader"},"MB1642BDisplayDriver.c"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"void HAL_GPIO_EXTI_Rising_Callback(uint16_t GPIO_Pin)\n{\n  ...\n  touchgfxSignalVSync();\n}\n")),(0,n.kt)("h3",m({},{id:"external-flash"}),"External flash"),(0,n.kt)("p",null,"The SPI NOR flash on the display shield is a standard SPI flash. The driver is simpler than the display driver. No special initialisation is required to read data from the flash."),(0,n.kt)("p",null,"The driver can read data using polled SPI (busy waiting for each byte) or DMA. The time to start a DMA reception is similar to the time it takes to read 20 bytes in polled mode, so it is often slower for short reads. On the other hand, the DMA continues to run during interrupt and can run in the background when the MCU is busy rendering pixels. For this reason both methods are used."),(0,n.kt)("p",null,"The flash driver is using another DMA channel than the display driver, so both reception of data and transmission of pixels can run concurrently."),(0,n.kt)("h4",m({},{id:"linker-script"}),"Linker Script"),(0,n.kt)("p",null,"The linker controls where the various data in the application is located. This is specified in the linker script. Here is the first part of the linker script for the gcc compiler:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"MEMORY\n{\n  RAM        (xrw)    : ORIGIN = 0x20000000,   LENGTH = 36K\n  FLASH      (rx)     : ORIGIN = 0x8000000,    LENGTH = 128K\n  SPI_FLASH  (r)      : ORIGIN = 0x90000000,   LENGTH = 8M\n}\n")),(0,n.kt)("p",null,"It declares the NOR flash as starting from the address 0x90000000. This value is arbitrarily chosen but required by the flash loader."),(0,n.kt)("p",null,"This next section puts the image (ExtFlashSection) and font (FontFlashSection) data in the SPI flash."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"  ExtFlashSection :\n  {\n    *(ExtFlashSection ExtFlashSection.*)\n    *(.gnu.linkonce.r.*)\n    . = ALIGN(0x4);\n  } >SPI_FLASH\n\n  FontFlashSection :\n  {\n    *(FontFlashSection FontFlashSection.*)\n    *(.gnu.linkonce.r.*)\n    . = ALIGN(0x4);\n  } >SPI_FLASH\n")),(0,n.kt)("p",null,"Other data can be put into the SPI flash by adding similar sections to the linker script."),(0,n.kt)("h4",m({},{id:"flash-loader"}),"\u5feb\u9583\u8a18\u61b6\u9ad4\u4e0b\u8f09"),(0,n.kt)("p",null,"The G071 TouchGFX board setup contains a flash loader for STM32CubeProgrammer. This flash loader can write data to the SPI NOR flash."),(0,n.kt)("p",null,"The flash loader is found in the file ",(0,n.kt)("inlineCode",{parentName:"p"},"gcc/S25FL032P_STM32G071B-NUCLEO.stldr")),(0,n.kt)("p",null,"A STM32CubeIde project can be flashed directly from the IDE, but an IAR or Keil application must be flashed from STM32CubeProgrammer."),(0,n.kt)("p",null,"The flashloader is not available in STM32CubeProgrammer initially, so it must be installed by copying the stldr to the installation:"),(0,n.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/copying-stldr.png",mdxType:"Figure"},"Copy flash loader to STM32CubeProgrammer installation"),(0,n.kt)("p",null,"Now the flashloader can be selected in STM32CubeProgrammer as normal:"),(0,n.kt)(r.Z,{imageSource:"/img/development/scenarios/touchgfx-on-lowcost-hardware/select-stldr.png",mdxType:"Figure"},"Copy flash loader to STM32CubeProgrammer installation"),(0,n.kt)(i.Z,{mdxType:"Tip"},"The flash loader is only working with the specific GPIO configuration that is used on the Nucleo-G071RB board.",(0,n.kt)("p",null,"If a different GPIO configuration for the serial flash is used on\ncustom hardware, the flash loader must be modified similarly.")),(0,n.kt)("h3",m({},{id:"buttons"}),"Buttons"),(0,n.kt)("p",null,"The button driver is very simple. It samples the state of the 5 GPIOs used for the joystick on MB1642B and the blue user button on the Nucleo board."),(0,n.kt)("p",null,"This button driver is installed as BottonController in TouchGFX. This means that the button presses are available directly in the TouchGFX Designer to use in interactions. They can also be used in user code like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::handleKeyEvent(uint8_t key)\n{\n    if (key == '6')\n    {\n        application().gotoScreen2Screen();\n    }\n}\n")),(0,n.kt)("p",null,"The key codes used are:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Key")),(0,n.kt)("th",m({parentName:"tr"},{align:"right"}),(0,n.kt)("strong",{parentName:"th"},"\u7a0b\u5f0f\u78bc")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Left"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"'4'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Right"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"'6'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Up"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"'8'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Down"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"'2'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Center"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"'5'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Blue User Button"),(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"'0'")))),(0,n.kt)("p",null,"These keys are also available in the Simulator bye using the keyboard numpad."))}w.isMDXComponent=!0}}]);