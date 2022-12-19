"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2269],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=o,g=s["".concat(c,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=o},37793:function(e,t,n){var r=n(67294),o=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class a extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=a},82121:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return h},default:function(){return P},frontMatter:function(){return g},metadata:function(){return f},toc:function(){return _}});var r=n(3905),o=n(44035),i=n(37793),a=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))s.call(t,n)&&m(e,n,t[n]);return e};const g={id:"example-gpio",title:"\ud2b8\ub9ac\uac70 \uc5ed\ud560\uc744 \ud558\ub294 \uc678\ubd80 \uc774\ubca4\ud2b8"},h=void 0,f={unversionedId:"development/scenarios/example-gpio",id:"development/scenarios/example-gpio",title:"\ud2b8\ub9ac\uac70 \uc5ed\ud560\uc744 \ud558\ub294 \uc678\ubd80 \uc774\ubca4\ud2b8",description:"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 \ubb3c\ub9ac\uc801 \ubc84\ud2bc\uacfc \uac19\uc740 \uc678\ubd80 \uc774\ubca4\ud2b8\ub97c TouchGFX Designer\uc5d0\uc11c \ud2b8\ub9ac\uac70\ub85c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \uc124\uba85\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/scenarios/example-gpio.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/example-gpio",permalink:"/4.17/ko/docs/development/scenarios/example-gpio",draft:!1,tags:[],version:"current",frontMatter:{id:"example-gpio",title:"\ud2b8\ub9ac\uac70 \uc5ed\ud560\uc744 \ud558\ub294 \uc678\ubd80 \uc774\ubca4\ud2b8"},sidebar:"docs",previous:{title:"TouchGFX Board Setup \uc0dd\uc131",permalink:"/4.17/ko/docs/development/scenarios/scenarios-create-at"},next:{title:"TouchGFX Board Setup \uae30\ubc18\uc5d0\uc11c RTOS \uc5c6\uc774 \uc2e4\ud589\ud558\uae30",permalink:"/4.17/ko/docs/development/scenarios/running-without-rtos"}},v={},_=[{value:"Board Bringup",id:"board-bringup",level:2},{value:"TouchGFX HAL Development",id:"touchgfx-hal-development",level:2},{value:"TouchGFX Designer",id:"touchgfx-designer",level:2},{value:"\ub300\uc0c1\uc5d0\uc11c \uc2e4\ud589",id:"running-on-target",level:2},{value:"\ub9c1\ud06c",id:"links",level:2}],b={toc:_};function P(e){var t,n=e,{components:a}=n,m=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},b),m),l(t,c({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 \ubb3c\ub9ac\uc801 \ubc84\ud2bc\uacfc \uac19\uc740 \uc678\ubd80 \uc774\ubca4\ud2b8\ub97c TouchGFX Designer\uc5d0\uc11c \ud2b8\ub9ac\uac70\ub85c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \uc124\uba85\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ubb3c\ub9ac\uc801 \ubc84\ud2bc\uacfc \uac19\uc740 \uc8fc\ubcc0 \uc7a5\uce58\uc758 \uc785\ub825\uc5d0 \uc751\ub2f5\ud558\uae30 \uc704\ud55c \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc694\uad6c \uc0ac\ud56d\uc5d0 \uc758\uac70, MCU\uc758 GPIO \ud540\uc744 \ubcf4\ub4dc \ud68c\ub85c\ub3c4\uc5d0 \ub9de\uac8c \uad6c\uc131\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774 \uc608\uc81c\uc5d0\uc11c\ub294 UI\uac00 \ubb3c\ub9ac\uc801 \ubc84\ud2bc\uc758 \uc791\ub3d9\uc5d0 \ubc18\uc751\ud558\ub3c4\ub85d \ub9cc\ub4dc\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc8fc\uae30 \uc704\ud574 H7B3I-DK\ub97c \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4. \uc774 \uc608\uc81c\uc5d0\uc11c\ub294 \ud3f4\ub9c1\uc744 \uc0ac\uc6a9\ud558\uace0 \uc788\uc9c0\ub9cc, EXTI\ub97c \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/stm32h7b3i-dk-front.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"\ud68c\ub85c\ub3c4\ub294 ","[st.com]","(",(0,r.kt)("a",d({parentName:"p"},{href:"https://www.st.com/content/st_com/en/products/evaluation-tools/product-evaluation-tools/mcu-mpu-eval-tools/stm32"}),"https://www.st.com/content/st_com/en/products/evaluation-tools/product-evaluation-tools/mcu-mpu-eval-tools/stm32")," -mcu-mpu-eval-tools/stm32-discovery-kits/stm32h7b3i-dk.html#)\uc5d0\uc11c \ub2e4\uc6b4\ub85c\ub4dc\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,r.kt)(i.Z,{mdxType:"Tip"},"GPIO \ud540\uc744 \uc77d\uc744 \uc218 \uc788\uc73c\uba74 TouchGFX Designer\uc5d0\uc11c \uc774\ubca4\ud2b8\uc5d0 \ub300\ud55c \ud2b8\ub9ac\uac70\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",d({},{id:"board-bringup"}),"Board Bringup"),(0,r.kt)("p",null,"\uc544\ub798 \uc774\ubbf8\uc9c0\ub294 STM32H7B3I-DK \ubcf4\ub4dc\uc5d0 \ub300\ud55c \ud68c\ub85c\ub3c4\uc758 \uc77c\ubd80\ub97c \ubcf4\uc5ec\uc8fc\uba70, \uadf8 \ub4a4\uc5d0 \ub098\uc624\ub294 \uc608\uc81c\uc5d0\uc11c\ub294 STM32CubeMX\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc801\uc808\ud55c GPIO \ud3ec\ud2b8\uc640 \ud540\uc744 \ubc84\ud2bc \uc0c1\ud0dc\ub97c \uc77d\uae30 \uc704\ud55c \uc785\ub825\uc73c\ub85c \uad6c\uc131\ud588\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"STM32H7B3I-DK TouchGFX \ubcf4\ub4dc \uc124\uc815\uc744 \uae30\ubc18\uc73c\ub85c \uc0c8 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc2dc\uc791\ud569\ub2c8\ub2e4. \uc774\uc5d0 \ub530\ub77c \uc0ac\uc6a9\uc790 \ubc84\ud2bc\uc774 GPIO \ud3ec\ud2b8 C\ud540 13(PC13)\uc5d0 \uc5f0\uacb0\ub429\ub2c8\ub2e4."),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/schematic-userbutton.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/schematic-mcu.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"STM32CubeMX\uc5d0\uc11c PC13\uc744 \uc785\ub825\uc73c\ub85c \uad6c\uc131\ud558\uace0 ",(0,r.kt)("strong",{parentName:"p"},"System Core")," \ubc94\uc8fc\uc758 ",(0,r.kt)("strong",{parentName:"p"},"GPIO")," \uc139\uc158\uc5d0\uc11c \ud480\ub2e4\uc6b4\uc73c\ub85c \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/cubemx-pc13.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/cubemx-gpioconf.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"Pinout View\uc5d0 \uc9c0\uc815\ub41c \uc774\ub984\uc744 \ud1a0\ub300\ub85c STM32CubeMX\uc5d0\uc11c \uc544\ub798\uc640 \uac19\uc740 \ucf54\ub4dc\uac00 \uc0dd\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{4,5}","{4,5}":!0}),"#define MCU_ACTIVE_GPIO_Port GPIOI\n#define VSYNC_FREQ_Pin GPIO_PIN_12\n#define VSYNC_FREQ_GPIO_Port GPIOA\n#define BTN_USER_Pin GPIO_PIN_13\n#define BTN_USER_GPIO_Port GPIOC\n#define LED2_Pin GPIO_PIN_2\n#define LED2_GPIO_Port GPIOG\n#define LCD_INT_Pin GPIO_PIN_2\n")),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{5,10-14}","{5,10-14}":!0}),"static void MX_GPIO_Init(void)\n  __HAL_RCC_GPIOJ_CLK_ENABLE();\n  __HAL_RCC_GPIOI_CLK_ENABLE();\n  __HAL_RCC_GPIOA_CLK_ENABLE();\n  __HAL_RCC_GPIOC_CLK_ENABLE();\n  __HAL_RCC_GPIOD_CLK_ENABLE();\n  __HAL_RCC_GPIOH_CLK_ENABLE();\n  __HAL_RCC_GPIOB_CLK_ENABLE();\n  ...\n    /*Configure GPIO pin : BTN_USER_Pin */\n  GPIO_InitStruct.Pin = BTN_USER_Pin;\n  GPIO_InitStruct.Mode = GPIO_MODE_INPUT;\n  GPIO_InitStruct.Pull = GPIO_PULLDOWN;\n  HAL_GPIO_Init(BTN_USER_GPIO_Port, &GPIO_InitStruct);\n  }\n")),(0,r.kt)("h2",d({},{id:"touchgfx-hal-development"}),"TouchGFX HAL Development"),(0,r.kt)("p",null,"TouchGFX \uc5d4\uc9c4\uc758 \ub80c\ub354\ub9c1 \uc8fc\uae30 \ub3d9\uc548 \uac00\ub2a5\ud55c \uc785\ub825\uc5d0 \ub300\ud55c \ud655\uc778\uc774 \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc785\ub825 \uc0c1\ud0dc\ub97c \uc77d\uc744 \uc218 \uc788\uc73c\uba74(\uc678\ubd80 \uc774\ubca4\ud2b8) TouchGFX HAL\uc740 ButtonController \uc778\ud130\ud398\uc774\uc2a4\ub97c \ud1b5\ud574 \ub80c\ub354\ub9c1 \uc8fc\uae30 \ub3d9\uc548 \uc774 \uc774\ubca4\ud2b8\ub97c \uc77d\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"#include <platform/driver/button/ButtonController.hpp>\nclass H7B3ButtonController : public touchgfx::ButtonController\n{\n    virtual void init() {  }\n    virtual bool sample(uint8_t& key)\n    {\n\n      if (HAL_GPIO_ReadPin(GPIOC, GPIO_PIN_13) != GPIO_PIN_RESET)\n      {\n        key = 1;\n        return true;\n      }\n      return false;\n    }\nprivate:\n\n};\n\n...\nH7B3ButtonController bc;\nvoid touchgfx_init()\n{\n  ...\n  hal.initialize();\n  hal.setButtonController(&bc);\n}\n")),(0,r.kt)("h2",d({},{id:"touchgfx-designer"}),"TouchGFX Designer"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/h7b3-at-4-17.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"TouchGFX Designer\uc5d0\uc11c\uc758 \uc778\ud130\ub799\uc158 \uc2dc ",(0,r.kt)("inlineCode",{parentName:"p"},"ButtonController"),"\uc5d0 \uc758\ud574 \uc0d8\ud50c\ub9c1\ub41c \uac12\uc744 \uc0ac\uc6a9\ud558\ub824\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},".touchgfx")," \ud504\ub85c\uc81d\ud2b8 \ud30c\uc77c\uc5d0 \uc774\ub984/\uac12 \ub9e4\ud551\uc774 \uc0dd\uc131\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-json"}),'    "PhysicalButtons": [],\n')),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-json"}),'    "PhysicalButtons": [\n      {\n        "Key": 1,\n        "Name": "BTN_USER"\n      }\n    ],\n')),(0,r.kt)("p",null,'\uc774\uc81c \uc778\ud130\ub799\uc158\uc744 \uc0dd\uc131\ud560 \ub54c "Hardware Button is clicked"\ub97c \ud2b8\ub9ac\uac70\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. .touchgfx \ud30c\uc77c\uc5d0 \uc815\uc758\ub41c "Key"/"Name" \uc30d\uc744 \uc120\ud0dd\ud558\uba74 \uc0ac\uc6a9\uc790\uac00 "Change screen"\uacfc \uac19\uc740 \uc791\uc5c5\uc744 \uc9c0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.'),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/designer-interaction-4-17.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("h2",d({},{id:"running-on-target"}),"\ub300\uc0c1\uc5d0\uc11c \uc2e4\ud589"),(0,r.kt)("p",null,'TouchGFX Designer\uc5d0\uc11c "Generate code"\ub97c \ub20c\ub7ec STM32CubeIDE \ud504\ub85c\uc81d\ud2b8\ub97c \uc5f4\uace0 \ub514\ubc84\uadf8 \uad6c\uc131\uc744 \uc124\uc815\ud569\ub2c8\ub2e4.'),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/cubeide-debug-config.webp",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("h2",d({},{id:"links"}),"\ub9c1\ud06c"),(0,r.kt)("p",null,(0,r.kt)("a",d({parentName:"p"},{href:"https://www.st.com/content/st_com/en/products/evaluation-tools/product-evaluation-tools/mcu-mpu-eval-tools/stm32-mcu-mpu-eval-tools/stm32-discovery-kits/stm32h7b3i-dk.html#"}),"https://www.st.com/content/st_com/en/products/evaluation-tools/product-evaluation-tools/mcu-mpu-eval-tools/stm32-mcu-mpu-eval-tools/stm32-discovery-kits/stm32h7b3i-dk.html#")))}P.isMDXComponent=!0}}]);