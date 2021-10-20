(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2154],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,h=s["".concat(c,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){"use strict";var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children))}},88678:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,n){"use strict";var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:i},this.props.children)}}t.Z=l},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return l}});var r=n(11368),a=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+l:l}(t,e,n,r)}}function l(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},32096:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return g},metadata:function(){return b},toc:function(){return k},default:function(){return v}});var r=n(3905),a=n(44035),i=n(93054),l=n(22425),o=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&m(e,n,t[n]);if(p)for(var n of p(t))s.call(t,n)&&m(e,n,t[n]);return e};const f={id:"04-enable-external-ram",title:"4. External RAM",sidebar_label:"4. External RAM"},g=void 0,b={unversionedId:"development/board-bring-up/how-to/04-enable-external-ram",id:"development/board-bring-up/how-to/04-enable-external-ram",isDocsHomePage:!1,title:"4. External RAM",description:"\uac1c\uc694",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/04-enable-external-ram.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/04-enable-external-ram",permalink:"/4.17/ko/docs/development/board-bring-up/how-to/04-enable-external-ram",version:"current",sidebarPosition:4,frontMatter:{id:"04-enable-external-ram",title:"4. External RAM",sidebar_label:"4. External RAM"},sidebar:"docs",previous:{title:"3. Framebuffer in internal RAM",permalink:"/4.17/ko/docs/development/board-bring-up/how-to/03-display-internal"},next:{title:"5. Framebuffer in external RAM",permalink:"/4.17/ko/docs/development/board-bring-up/how-to/05-display-external"}},k=[{value:"\uac1c\uc694",id:"motivation",children:[]},{value:"\ubaa9\ud45c",id:"goal",children:[{value:"\ud655\uc778",id:"verification",children:[]}]},{value:"\uc804\uc81c \uc870\uac74",id:"prerequisites",children:[]},{value:"\uc2e4\ud589",id:"do",children:[{value:"\ucd94\uac00 \uad6c\uc131",id:"further-configuration",children:[]},{value:"RAM \ud14c\uc2a4\ud2b8",id:"testing-the-ram",children:[]}]}],M={toc:k};function v(e){var t,n=e,{components:o}=n,m=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=h(h({},M),m),c(t,u({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h2",h({},{id:"motivation"}),"\uac1c\uc694"),(0,r.kt)("p",null,"\uc774 \ub2e8\uacc4\uc5d0\uc11c\ub294 \uc678\ubd80 SDRAM\uc744 \ud65c\uc131\ud654\ud569\ub2c8\ub2e4. \ub2e4\uc591\ud55c \ud574\uc0c1\ub3c4\uc5d0\uc11c \ub0b4\ubd80 RAM\uc5d0 \ud504\ub808\uc784 \ubc84\ud37c\ub97c \ubc30\uce58\ud558\uae30\uc5d0\ub294 \uadf8 \ud06c\uae30\uac00 \ub108\ubb34 \ud06c\uae30 \ub54c\ubb38\uc5d0 \uadf8\ub798\ud53d \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c\ub294 \ubcf4\ud1b5 \uc678\ubd80 RAM\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. 2~3\uac1c\uc758 \ud504\ub808\uc784 \ubc84\ud37c\ub97c \uc0ac\uc6a9\ud558\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c\ub294 \uc678\ubd80 RAM\uc774 \ub354\ub354\uc6b1 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,r.kt)(i.Z,{mdxType:"Note"},"\uc678\ubd80 RAM\uc774 \ubcf4\ub4dc \ube0c\ub9c1\uc5c5\uacfc \uad00\ub828\uc774 \uc5c6\ub2e4\uba74 \uc774 \ub2e8\uacc4\ub97c \uac74\ub108\ub6f0\uc2ed\uc2dc\uc624."),(0,r.kt)("p",null,"\ud504\ub808\uc784 \ubc84\ud37c\ub97c \uc678\ubd80 RAM\uc5d0 \ubc30\uce58\ud560 \ub54c\ub294 \uc678\ubd80 RAM\uc5d0\uc11c \ub2e4\uc74c\uc744 \ud655\uc778\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc77d\uae30\uc640 \uc4f0\uae30\uac00 \uac00\ub2a5\ud55c\uc9c0 \uc5ec\ubd80"),(0,r.kt)("li",{parentName:"ul"},"\uc6d0\ud558\ub294 \uc18d\ub3c4(\ubcf4\ud1b5 \ucd5c\ub300 \uc18d\ub3c4) \ub85c \uc2e4\ud589\ub418\ub294\uc9c0 \uc5ec\ubd80")),(0,r.kt)("h2",h({},{id:"goal"}),"\ubaa9\ud45c"),(0,r.kt)("p",null,"\uc774 \uc139\uc158\uc758 \ubaa9\ud45c\ub294 \uc678\ubd80 RAM\uc744 \ud65c\uc131\ud654\ud558\uc5ec \uc5ec\uae30\uc5d0\uc11c \ub370\uc774\ud130 \uc77d\uae30 \ubc0f \uc4f0\uae30\ub97c \uc218\ud589\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",h({},{id:"verification"}),"\ud655\uc778"),(0,r.kt)("p",null,"\ub2e4\uc74c\uc740 \uc774 \uc139\uc158\uc5d0\uc11c \ud655\uc778\ud574\uc57c \ud560 \uc0ac\ud56d\uc785\ub2c8\ub2e4."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null}),"\ud655\uc778\uc0ac\ud56d"),(0,r.kt)("th",h({parentName:"tr"},{align:null}),"\ud655\uc778\uadfc\uac70"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\uc678\ubd80 RAM\uc774 \uc77d\uae30 \uac00\ub2a5\ud55c\uc9c0 \uc5ec\ubd80"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\uc678\ubd80 RAM\uc744 \ud504\ub808\uc784 \ubc84\ud37c \uc704\uce58\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294\uc9c0 \uc5ec\ubd80")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\uc678\ubd80 RAM\uc774 \uc4f0\uae30 \uac00\ub2a5\ud55c\uc9c0 \uc5ec\ubd80"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\uc678\ubd80 RAM\uc744 \ud504\ub808\uc784 \ubc84\ud37c \uc704\uce58\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294\uc9c0 \uc5ec\ubd80")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\uc678\ubd80 RAM \uc131\ub2a5"),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\uadf8\ub798\ud53d \uc131\ub2a5\uc774 \uc678\ubd80 RAM\uc758 \ud504\ub808\uc784 \ubc84\ud37c\uc5d0\uc11c \uc218\uc6a9 \uac00\ub2a5\ud55c\uc9c0 \uc5ec\ubd80")))),(0,r.kt)("h2",h({},{id:"prerequisites"}),"\uc804\uc81c \uc870\uac74"),(0,r.kt)("p",null,"\ub2e4\uc74c\uc740 \uc774 \ub2e8\uacc4\uc5d0 \ub300\ud55c \uc804\uc81c \uc870\uac74\uc785\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"RAM \uc815\ubcf4(\uc77c\ubc18\uc801\uc73c\ub85c \uc81c\uc870\uc0ac \ub370\uc774\ud130 \uc2dc\ud2b8\uc758 \uc815\ubcf4)"),(0,r.kt)("li",{parentName:"ul"},"MCU\uc640 \uc678\ubd80 RAM \uac04 \uc5f0\uacb0 \uc815\ubcf4")),(0,r.kt)("h2",h({},{id:"do"}),"\uc2e4\ud589"),(0,r.kt)("p",null,"The external SDRAM controller is configured in STM32CubeMX under Connectivity -> FMC -> SDRAM1:"),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/external-ram/cubemx-01.png",noShadow:!1,width:"600",mdxType:"Figure"},"SDRAM \uad6c\uc131"),(0,r.kt)("p",null,'AHB \ud074\ub85d(HCLK) \uc740 FMC \uba54\ubaa8\ub9ac \ucee8\ud2b8\ub864\ub7ec\ub97c \uc704\ud55c \ucc38\uc870 \ud074\ub85d\uc785\ub2c8\ub2e4. "Clock Configuration" \uc544\ub798\uc5d0\uc11c \ud074\ub85d \uc8fc\ud30c\uc218\ub97c \ud655\uc778\ud558\uace0, \uc774\ub97c \uc0ac\uc6a9\ud574 \ub2e4\uc591\ud55c SDRAM \ud074\ub85d \uc0ac\uc774\ud074\uc744 \uacc4\uc0b0\ud558\uc138\uc694.'),(0,r.kt)("p",null,"\ubc18\ub4dc\uc2dc SDRAM\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 GPIO\ub97c \ubaa8\ub450 \uad6c\uc131\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/external-ram/cubemx-02.png",noShadow:!1,width:"600",mdxType:"Figure"},"SDRAM GPIO \uad6c\uc131"),(0,r.kt)("h3",h({},{id:"further-configuration"}),"\ucd94\uac00 \uad6c\uc131"),(0,r.kt)("p",null,"\uc77c\ubd80 RAM \uce69\uc5d0\uc11c\ub294 \ucd94\uac00\uc801\uc778 \uc7a5\uce58\ubcc4 \uad6c\uc131 \uc791\uc5c5\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. This cannot be configured in STM32CubeMX, but must be done in the C code. The STM32Cube HAL contains functions to send commands to the device. \uc608\ub97c \ub4e4\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4:"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"FMC_SDRAM_CommandTypeDef Command;\n\n/* Step 1: Configure a clock configuration enable command */\nCommand.CommandMode            = FMC_SDRAM_CMD_CLK_ENABLE;\nCommand.CommandTarget          = FMC_SDRAM_CMD_TARGET_BANK1;\nCommand.AutoRefreshNumber      = 1;\nCommand.ModeRegisterDefinition = 0;\n\n/* Send the command */\nHAL_SDRAM_SendCommand(&hsdram1, &Command, SDRAM_TIMEOUT);\n")),(0,r.kt)("h3",h({},{id:"testing-the-ram"}),"RAM \ud14c\uc2a4\ud2b8"),(0,r.kt)("p",null,"\uc678\ubd80 RAM\uc744 \uad6c\uc131\ud55c \ud6c4\uc5d0\ub294 \uc774\ub97c \ud14c\uc2a4\ud2b8\ud574\uc57c \ud569\ub2c8\ub2e4. \ucd5c\uc18c\ud55c \ub2e4\uc74c\uacfc \uac19\uc740 \uc0ac\ud56d\uc744 \ud14c\uc2a4\ud2b8\ud574\uc57c \ud569\ub2c8\ub2e4:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"RAM\uc774 \ub514\ubc84\uac70\uc5d0 \ud45c\uc2dc\ub418\ub294\uc9c0 \uc5ec\ubd80"),(0,r.kt)("li",{parentName:"ul"},"RAM\uc774 \uc804\uccb4 \ubc94\uc704\uc5d0\uc11c \uc77d\uae30\uc640 \uc4f0\uae30\uac00 \uac00\ub2a5\ud55c\uc9c0 \uc5ec\ubd80"),(0,r.kt)("li",{parentName:"ul"},"\uc608\uc0c1\ub300\ub85c \uc131\ub2a5\uc774 \ubc1c\ud718\ub418\ub294\uc9c0 \uc5ec\ubd80")),(0,r.kt)("p",null,"\uba54\ubaa8\ub9ac \ucee8\ud2b8\ub864\ub7ec\ub294 \uc720\ud615\uc5d0 \ub530\ub77c \uc678\ubd80 \uba54\ubaa8\ub9ac\uc5d0 \ub300\ud574 \uace0\uc815 \uc8fc\uc18c \ub9e4\ud551\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc8fc\uc18c\ub294 \ub9c8\uc774\ud06c\ub85c\ucee8\ud2b8\ub864\ub7ec\uc758 \ub370\uc774\ud130 \uc2dc\ud2b8\uc5d0\uc11c \ud655\uc778\ud558\uc2ed\uc2dc\uc624. SDRAM\uc740 \ubcf4\ud1b5 0xC0000000(bank1) \ub610\ub294 0xD0000000(bank2) \uc73c\ub85c \ub9e4\ud551\ub429\ub2c8\ub2e4."),(0,r.kt)("h4",h({},{id:"test-ram-is-visible-in-the-debugger"}),"RAM\uc774 \ub514\ubc84\uac70\uc5d0 \ud45c\uc2dc\ub418\ub294\uc9c0 \ud14c\uc2a4\ud2b8."),(0,r.kt)("p",null,"RAM\uc774 \ud65c\uc131\ud654\ub420 \ub54c \uccab \ud14c\uc2a4\ud2b8\ub85c \ub514\ubc84\uac70\uc5d0\uc11c RAM\uc744 \uc561\uc138\uc2a4\ud569\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \uba54\ubaa8\ub9ac\uc5d0 \ub300\ud55c \uc77d\uae30 \ubc0f \uc4f0\uae30 \uc791\uc5c5\uc758 \uac00\ub2a5 \uc5ec\ubd80\ub97c \uac04\ud3b8\ud558\uac8c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \ud574\ub2f9 \uc8fc\uc18c\uc5d0\uc11c \uba54\ubaa8\ub9ac \ubdf0\uc5b4\ub97c \uc5f4\uae30\ub9cc \ud558\uba74 \ub429\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/board-bring-up/external-ram/iar-01.png",noShadow:!1,width:"600",mdxType:"Figure"},"\ub514\ubc84\uac70\ub97c \uc774\uc6a9\ud574 0xD0000000\uc758 Bank2 \uc5d0\uc11c \uba54\ubaa8\ub9ac \ud14c\uc2a4\ud2b8"),(0,r.kt)("h4",h({},{id:"ram-is-readable-and-writeable-in-the-whole-range"}),"RAM\uc774 \uc804\uccb4 \ubc94\uc704\uc5d0\uc11c \uc77d\uae30\uc640 \uc4f0\uae30\uac00 \uac00\ub2a5\ud55c\uc9c0 \uc5ec\ubd80"),(0,r.kt)("p",null,"\ub2e4\uc74c \ud14c\uc2a4\ud2b8\ub294 \uc678\ubd80 \uba54\ubaa8\ub9ac\uc5d0 \ub354 \ub9ce\uc740 \ub370\uc774\ud130\ub97c \uc4f8 \uc218 \uc788\ub3c4\ub85d \uc18c\uaddc\ubaa8 \ud504\ub85c\uadf8\ub7a8\uc744 \uc791\uc131\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \ub418\ub3c4\ub85d\uc774\uba74 \uc804\uccb4 \uba54\ubaa8\ub9ac\ub97c \ud14c\uc2a4\ud2b8\ud558\uc2ed\uc2dc\uc624. \uc774\uac83\uc740 \uc2dc\uc791\uc810\uc785\ub2c8\ub2e4:"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"uint32_t *externalRAM = 0xC000000;\nconst uint32_t size = 1000;\n\n//write external RAM\nfor(int i = 0; i < size; i++)\n{\n    externalRAM[i] = i;\n}\n")),(0,r.kt)("p",null,"\uc774\uc81c \ub514\ubc84\uac70\uc5d0\uc11c \uba54\ubaa8\ub9ac\ub97c \ub2e4\uc2dc \ud655\uc778\ud569\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \uc77c\ubd80 \uc8fc\uc18c \ud540\uc774 \uc5f0\uacb0 \ub610\ub294 \uad50\uccb4\ub418\uc9c0 \uc54a\ub294 \uacbd\uc6b0\uc5d0 \uba87 \uac00\uc9c0 \uc720\ud615\uc758 \uc624\ub958\ub97c \ubc1d\ud790 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uac12 \ud328\ud134\uc744 \ub2ec\ub9ac\ud558\uba74\uc11c \ud14c\uc2a4\ud2b8\ub97c \uc2dc\ub3c4\ud574\uc57c \ud569\ub2c8\ub2e4. 0, 1, 2, 3 \uac19\uc774 \ub0ae\uc740 \uc22b\uc790\ub97c \uc4f0\uba74 \uc77c\ubd80 \ub370\uc774\ud130 \ud540\uc758 \ubd88\ub7c9 \uc5ec\ubd80\ub97c \ubc1d\ud790 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc18c\uaddc\ubaa8 \ud504\ub85c\uadf8\ub7a8\uc744 \uc774\uc6a9\ud574 \uba54\ubaa8\ub9ac\ub97c \uc77d\uc744 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4:"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),'uint32_t *externalRAM = 0xC000000;\nconst uint32_t size = 1000;\n\n//read external RAM\nfor(int i = 0; i < size; i++)\n{\n    ASSERT(externalRAM[i] == i, "external RAM not as expected");\n}\n')),(0,r.kt)("p",null,"\uc774\ub7ec\ud55c \ud14c\uc2a4\ud2b8\ub85c \uc8fc\uc18c\uc758 \uc815\ud655\uc131 \uc5ec\ubd80\ub294 \uc54c \uc218\ub294 \uc5c6\ub2e4\ub294 \uc810\uc5d0 \uc720\uc758\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)("p",null,"\ubaa8\ub4e0 \uba54\ubaa8\ub9ac \uc140\uc744 \ud14c\uc2a4\ud2b8\ud558\uc2ed\uc2dc\uc624. \ub354 \uae34 \ub8e8\ud504\ub97c \uc2e4\ud589\ud558\uac70\ub098 \uc2dc\uc791 \uc8fc\uc18c\ub97c \ubcc0\uacbd\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \ud14c\uc2a4\ud2b8\ub97c \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h4",h({},{id:"performance-is-as-expected"}),"\uc608\uc0c1\ub300\ub85c \uc131\ub2a5\uc774 \ubc1c\ud718\ub418\ub294\uc9c0 \uc5ec\ubd80"),(0,r.kt)("p",null,"\uc774\uc81c, \uc678\ubd80 RAM\uc758 \uc131\ub2a5\uc744 \ud14c\uc2a4\ud2b8\ud574\uc57c \ud569\ub2c8\ub2e4. \ud504\ub808\uc784 \ubc84\ud37c\uac00 \uc678\ubd80 \uba54\ubaa8\ub9ac\uc5d0 \uc788\uc744 \ub54c\ub294 \uc131\ub2a5\uc774 \uc911\uc694\ud569\ub2c8\ub2e4. \uba54\ubaa8\ub9ac \uc18d\ub3c4\uac00 \ub290\ub9ac\uba74 \uc2dc\uc2a4\ud15c\uc758 \uadf8\ub798\ud53d \uc131\ub2a5\uc774 \uc800\ud558\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"RAM\uc758 \uc77d\uae30, \uc4f0\uae30 \ubc0f \uc218\uc815 \uc18d\ub3c4\ub97c \ud14c\uc2a4\ud2b8\ud558\uc2ed\uc2dc\uc624. \uadf8\ub798\ud53d \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c\ub294 \ubcf4\ud1b5 \ud55c \uba54\ubaa8\ub9ac\uc5d0\uc11c \ub2e4\ub978 \uba54\ubaa8\ub9ac\ub85c \ub9ce\uc740 \ub370\uc774\ud130\uac00 \ubcf5\uc0ac\ub429\ub2c8\ub2e4. \uadf8\ub9ac\uae30 \uc791\uc5c5 \uc911\uc5d0\ub294 \ud504\ub808\uc784 \ubc84\ud37c\uc5d0 \ub300\ud55c \uc4f0\uae30 \uc791\uc5c5\uc774 \ub9ce\uc544\uc9c0\uace0, \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \uc804\uc1a1\ud560 \ub54c\ub294 \uc77d\uae30 \uc791\uc5c5\uc774 \ub9ce\uc544\uc9d1\ub2c8\ub2e4. \ud14c\uc2a4\ud2b8 \ud504\ub85c\uadf8\ub7a8\uc5d0\uc11c \uc774\ub97c \uc2dc\ubbac\ub808\uc774\uc158\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"volatile uint32_t *externalRAM = 0xC000000;\nuint32_t sourcedata[10000];\nconst uint32_t size = 10000;\n\nint begin = HAL_GetTick();\n//write external RAM\nfor(int i = 0; i < size; i++)\n{\n    externalRAM[i] = sourcedata[i];\n}\nint end = HAL_GetTick();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"int begin = HAL_GetTick();\n//Read external RAM\nfor(int i = 0; i < size; i++)\n{\n    sourcedata[i] = externalRAM[i];\n}\nint end = HAL_GetTick();\n")),(0,r.kt)("p",null,"\uadf8\ub798\ud53d \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub294 \uc608\ub97c \ub4e4\uc5b4 \ubc31\uadf8\ub77c\uc6b4\ub4dc\uc5d0\uc11c \uc774\ubbf8\uc9c0\ub97c \ube14\ub80c\ub529\ud560 \ub54c \ud504\ub808\uc784 \ubc84\ud37c\uc5d0\uc11c \ub370\uc774\ud130 \uc77d\uae30 \ubc0f \uc4f0\uae30 \uc791\uc5c5\uc744 \uc218\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"//Time modifying external RAM\nint begin = HAL_GetTick();\nfor(int i = 0; i < size; i++)\n{\n    externalRAM[i] += 2;\n}\nint end = HAL_GetTick();\n")),(0,r.kt)("p",null,"\uba54\ubaa8\ub9ac \uc18d\ub3c4\uc640 \uc6d0\ud558\ub294 \uc815\ud655\ub3c4\uc5d0 \ub530\ub77c \ubcf4\ub2e4 \uc2e0\ub8b0\ud560 \uc218 \uc788\ub294 \uacb0\uacfc\ub97c \uc5bb\uae30 \uc704\ud574 \ud14c\uc2a4\ud2b8\ub97c 100\ud68c\uac00\ub7c9 \ubc18\ubcf5\uc801\uc73c\ub85c \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc678\ubd80 RAM\uc5d0\uc11c \ud074\ub85d\uc774 \ub108\ubb34 \ube60\ub978 \uc18d\ub3c4\ub85c \uc0dd\uc131\ub418\uba74 \uc77d\uae30 \ub610\ub294 \uc4f0\uae30 \uc791\uc5c5 \uc911\uc5d0 \uc798\ubabb\ub41c \uac12\uc774 \ub098\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc624\ub958\ub294 \uac04\ub2e8\ud55c \ud14c\uc2a4\ud2b8\ub85c\ub294 \ud655\uc778\uc774 \uc5b4\ub824\uc6b8 \uc218 \uc788\uc9c0\ub9cc, \ub514\uc2a4\ud50c\ub808\uc774\uc5d0\ub294 \ud45c\uc2dc\ub429\ub2c8\ub2e4."))}v.isMDXComponent=!0}}]);