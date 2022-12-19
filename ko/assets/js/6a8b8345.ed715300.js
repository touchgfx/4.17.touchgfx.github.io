"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1184],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,d=s["".concat(l,".").concat(m)]||s[m]||f[m]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,i=(0,o.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children))}},47331:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return v}});var r=n(3905),o=n(44035),a=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&s(e,n,t[n]);return e};const m={id:"scenarios-spi",title:"SPI"},d=void 0,h={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-spi",id:"development/touchgfx-hal-development/scenarios/scenarios-spi",title:"SPI",description:'\ub2e4\uc74c \uc2dc\ub098\ub9ac\uc624\ub294 SPI\ub97c \uc0ac\uc6a9\ud574 TouchGFX Generator\uc5d0\uc11c "Custom" \ub514\uc2a4\ud50c\ub808\uc774 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc120\ud0dd\ud560 \ub54c TouchGFX \ub4dc\ub77c\uc774\ubc84 \uc0dd\uc131\uacfc \uad00\ub828\ub41c \ub2e8\uacc4\ub4e4\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ub2e8\uacc4\ub4e4\uc740 MCU\uc5d0 \uc784\ubca0\ub514\ub4dc \ub514\uc2a4\ud50c\ub808\uc774 \ucee8\ud2b8\ub864\ub7ec\uac00 \uc7a5\ucc29\ub418\uc9c0 \uc54a\uc740 \ub2e4\ub978 \ub514\uc2a4\ud50c\ub808\uc774 \uc778\ud130\ud398\uc774\uc2a4\uc758 \ub2e8\uacc4\ub4e4\uacfc \ub3d9\uc77c\ud569\ub2c8\ub2e4.',source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-spi.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-spi",permalink:"/4.17/ko/docs/development/touchgfx-hal-development/scenarios/scenarios-spi",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-spi",title:"SPI"}},g={},v=[{value:"\ud504\ub808\uc784 \ubc84\ud37c \uc804\uc1a1",id:"transfering-the-framebuffer",level:2},{value:"flushFrameBuffer\uc5d0\uc11c \ubc18\ud658",id:"returning-from-flushframebuffer",level:2}],y={toc:v};function b(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},y),s),i(t,c({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,'\ub2e4\uc74c \uc2dc\ub098\ub9ac\uc624\ub294 SPI\ub97c \uc0ac\uc6a9\ud574 TouchGFX Generator\uc5d0\uc11c "Custom" \ub514\uc2a4\ud50c\ub808\uc774 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc120\ud0dd\ud560 \ub54c TouchGFX \ub4dc\ub77c\uc774\ubc84 \uc0dd\uc131\uacfc \uad00\ub828\ub41c \ub2e8\uacc4\ub4e4\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ub2e8\uacc4\ub4e4\uc740 MCU\uc5d0 \uc784\ubca0\ub514\ub4dc \ub514\uc2a4\ud50c\ub808\uc774 \ucee8\ud2b8\ub864\ub7ec\uac00 \uc7a5\ucc29\ub418\uc9c0 \uc54a\uc740 \ub2e4\ub978 \ub514\uc2a4\ud50c\ub808\uc774 \uc778\ud130\ud398\uc774\uc2a4\uc758 \ub2e8\uacc4\ub4e4\uacfc \ub3d9\uc77c\ud569\ub2c8\ub2e4.'),(0,r.kt)("p",null,'\uc77c\ub2e8 STM32CubeMX\uc5d0\uc11c SPI \uc8fc\ubcc0 \uc7a5\uce58\uac00 \uad6c\uc131\ub418\uba74 TouchGFX Generator\uc5d0\uc11c "Custom" \ub514\uc2a4\ud50c\ub808\uc774 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc774\uc6a9\ud574 HAL\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \uac1c\ubc1c\uc790\ub294 \uc9c1\uc811 \uc791\uc131\ud55c \ub3c5\uc810 \ub4dc\ub77c\uc774\ubc84\ub97c \uc0ac\uc6a9\ud574 \ud504\ub808\uc784 \ubc84\ud37c\uc758 \uc5c5\ub370\uc774\ud2b8\ub41c \ubd80\ubd84\uc744 \uc5f0\uacb0\ub41c \ub514\uc2a4\ud50c\ub808\uc774\ub85c \uc804\uc1a1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub9bc X\ub294 Custom \ub514\uc2a4\ud50c\ub808\uc774 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc120\ud0dd\ud558\uba74 \uc0dd\uc131\ub41c \ucf54\ub4dc\uc5d0\uc11c \ud504\ub808\uc784 \ubc84\ud37c\uc758 \uc5c5\ub370\uc774\ud2b8\ub41c \ubd80\ubd84\uc774 \ub514\uc2a4\ud50c\ub808\uc774\ub85c \uc804\uc1a1\ub420 \uc218 \uc788\ub3c4\ub85d \ud558\ub294 TouchGFX Generator \uad6c\uc131\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4.'),(0,r.kt)(o.Z,{imageSource:"/img/development/touchgfx-hal-development/scenarios/custom-interface.webp",noShadow:!0,mdxType:"Figure"},"\ud504\ub85c\uc81d\ud2b8 \ud65c\ub3d9"),(0,r.kt)("p",null,"\uc77c\ubc18\uc801\uc73c\ub85c, 8080 \ub610\ub294 SPI \ub514\uc2a4\ud50c\ub808\uc774 \uac19\uc774 \uc784\ubca0\ub514\ub4dc GRAM\uc774 \uc7a5\ucc29\ub41c \ub514\uc2a4\ud50c\ub808\uc774\uc758 \uacbd\uc6b0\uc5d0\ub294 \ub4dc\ub77c\uc774\ubc84\uac00 \ub2e4\uc74c\uacfc \uac19\uc774 \uad6c\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'\ub2e4\uc2dc \uadf8\ub9ac\uace0\uc790 \ud558\ub294 \ud504\ub808\uc784 \ubc84\ud37c\uc758 \uc601\uc5ed\uc744 \uae30\uc900\uc73c\ub85c \uc774\uc640 \uc77c\uce58\ud558\ub294 GRAM\uc758 \ud55c \uc7a5\uc18c\ub85c "\ub514\uc2a4\ud50c\ub808\uc774 \ucee4\uc11c"\ub97c \uc774\ub3d9\uc2dc\ud0b5\ub2c8\ub2e4.'),(0,r.kt)("li",{parentName:"ol"},"GRAM\uc5d0 \uc785\ub825\ub418\ub294 \ud53d\uc140 \ub370\uc774\ud130\ub97c \uae30\ub85d\ud560 \uc900\ube44\ub97c \ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"\ud53d\uc140 \ub370\uc774\ud130\ub97c \uc804\uc1a1\ud569\ub2c8\ub2e4.")),(0,r.kt)("h2",f({},{id:"transfering-the-framebuffer"}),"\ud504\ub808\uc784 \ubc84\ud37c \uc804\uc1a1"),(0,r.kt)("p",null,"\ud504\ub808\uc784 \ubc84\ud37c\uc758 \uc601\uc5ed\uc774 \uc5c5\ub370\uc774\ud2b8\ub418\uba74 TouchGFX Engine\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"HAL::flushFrameBuffer"),"\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"TouchGFX Engine\uc5d0\uc11c \ub098\uc628 \uc2e0\ud638(S?)\uc5d0 \ubc18\uc751\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"void  TouchGFXHAL::flushFrameBuffer(const Rect& rect)\n{\n    /* Set Cursor */\n    __ST7789H2_SetDisplayWindow(rect.x, rect.y, rect.width, rect.height);\n\n    /* Prepare to write to LCD RAM */\n    ST7789H2_WriteReg(ST7789H2_WRITE_RAM, (uint8_t*)NULL, 0);\n\n    /* Send Pixels */\n    this->copyFrameBufferBlockToLCD(rect);\n}\n")),(0,r.kt)("p",null,"\uc544\ub798\uc758",(0,r.kt)("inlineCode",{parentName:"p"},"\xa0__ST7789H2_SetDisplayWindow\xa0"),'\ud568\uc218\ub294 GRAM\uc744 \uc0ac\uc6a9\ud558\ub294 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0\uc11c \ubcf4\ud1b5 \uadf8\ub7ec\ud558\ub4ef\uc774 \ud2b9\uc815 \ub808\uc9c0\uc2a4\ud130\uc5d0 \uae30\ub85d\ud558\uc5ec GRAM\uc758 \uac00\uc0c1 "cursor"\uc5d0 \ub300\ud55c',(0,r.kt)("inlineCode",{parentName:"p"}," x"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," \uc88c\ud45c\ub97c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-c"}),'extern "C"\nvoid __ST7789H2_SetDisplayWindow(uint16_t Xpos, uint16_t Ypos, uint16_t Width, uint16_t Height)\n{\n    uint8_t   parameter[4];\n\n    /* CASET: Column Address Set */\n    parameter[0] = 0x00;\n    parameter[1] = Xpos;\n    parameter[2] = 0x00;\n    parameter[3] = Xpos + Width - 1;\n    ST7789H2_WriteReg(ST7789H2_CASET, parameter, 4);\n\n    /* RASET: Row Address Set */\n    parameter[0] = 0x00;\n    parameter[1] = Ypos;\n    parameter[2] = 0x00;\n    parameter[3] = Ypos + Height - 1;\n    ST7789H2_WriteReg(ST7789H2_RASET, parameter, 4);\n}\n')),(0,r.kt)("p",null,"\uc544\ub798\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::copyFrameBufferBlockToLCD "),"\ud568\uc218\ub294 \uc5c5\ub370\uc774\ud2b8\ub41c \uc601\uc5ed(",(0,r.kt)("inlineCode",{parentName:"p"},"Rect"),")\uc758 \ub77c\uc778\uc744 \ud55c\ubc88\uc5d0 \ud558\ub098\uc529 \uc804\uc1a1\ud558\uace0 \ud504\ub808\uc784 \ubc84\ud37c \ud3ec\uc778\ud130\ub97c \uadf8\uc5d0 \ub9de\uac8c \uc9c4\ud589\ub418\uac8c \ud558\ub294 \ube44\uacf5\uac1c \ud568\uc218\uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"void TouchGFXHAL::copyFrameBufferBlockToLCD(const Rect rect)\n{\n    __IO uint16_t* ptr;\n    uint32_t height;\n\n    // Use default implementation (CPU copy!).\n    // This can be accelerated using regular DMA hardware\n    for (height = 0; height < rect.height ; height++)\n    {\n        ptr = getClientFrameBuffer() + rect.x + (height + rect.y)  * BSP_LCD_GetXSize();\n        LCD_IO_WriteMultipleData((uint16_t*)ptr, rect.width);\n    }\n}\n")),(0,r.kt)("h2",f({},{id:"returning-from-flushframebuffer"}),"flushFrameBuffer\uc5d0\uc11c \ubc18\ud658"),(0,r.kt)("p",null,"\uc774 \ud568\uc218\uac00 \ubc18\ud658\ub418\uba74 TouchGFX Engine\uc740 \ud574\ub2f9 \ud568\uc218\ub85c \ub3cc\uc544\uac11\ub2c8\ub2e4. DMA\ub97c \uc0ac\uc6a9\ud574 \uc804\uc1a1\uc744 \ud558\uace0 \uc2f6\uc740 \uac1c\ubc1c\uc790\ub294 DMA Completed \uc778\ud130\ub7fd\ud2b8\uc5d0\uc11c \uc2e0\ud638\uac00 \uc804\uc1a1\ub418\ub294 \uc138\ub9c8\ud3ec\uc5b4\uc5d0\uc11c \ub300\uae30\ud568\uc73c\ub85c\uc368 ",(0,r.kt)("inlineCode",{parentName:"p"},"HAL::flushFrameBuffer(Rect& rect)"),"\uac00 \ubc18\ud658\ub418\uc9c0 \uc54a\ub3c4\ub85d \ud574\uc57c \ud569\ub2c8\ub2e4."))}b.isMDXComponent=!0}}]);