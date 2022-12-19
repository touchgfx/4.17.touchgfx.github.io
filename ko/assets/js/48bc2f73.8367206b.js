"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5421],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(n),m=r,f=s["".concat(p,".").concat(m)]||s[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{class:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,i=(0,r.Z)(e.imageSource);return t?a.createElement("div",{class:"figure noshadow"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:o,src:i})),a.createElement("p",null,e.children)):a.createElement("div",{class:"figure"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:o,src:i})),a.createElement("p",null,e.children))}},90016:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return h},default:function(){return F},frontMatter:function(){return f},metadata:function(){return k},toc:function(){return v}});var a=n(3905),r=n(44035),o=n(22425),i=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(d)for(var n of d(t))s.call(t,n)&&u(e,n,t[n]);return e};const f={id:"using-serial-flash",title:"\uc774\ubbf8\uc9c0\uc640 \uae00\uaf34\uc5d0\uc11c \uc9c1\ub82c \ud50c\ub798\uc2dc \uc0ac\uc6a9"},h=void 0,k={unversionedId:"development/scenarios/using-serial-flash",id:"development/scenarios/using-serial-flash",title:"\uc774\ubbf8\uc9c0\uc640 \uae00\uaf34\uc5d0\uc11c \uc9c1\ub82c \ud50c\ub798\uc2dc \uc0ac\uc6a9",description:"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 \uc9c1\ub82c \ud50c\ub798\uc2dc(\ub610\ub294 \uae30\ud0c0 \ub9e4\ud551\ub418\uc9c0 \uc54a\uc740 \uc2a4\ud1a0\ub9ac\uc9c0)\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc774\ubbf8\uc9c0\uc640 \uae00\uaf34\uc744 \uc800\uc7a5\ud558\ub294 \ubc29\ubc95\uc744 \uc124\uba85\ud569\ub2c8\ub2e4. \uc5ec\uae30\uc5d0 \uc124\uba85\ub41c \uae30\uc220\uc740 STM32G0\uacfc RAM \uc6a9\ub7c9\uc774 \ub9e4\uc6b0 \uc791\uc740 \uae30\ud0c0 \ub514\ubc14\uc774\uc2a4\uc5d0\uc11c \ud2b9\ud788 \uc720\uc6a9\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/scenarios/using-serial-flash.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/using-serial-flash",permalink:"/4.17/ko/docs/development/scenarios/using-serial-flash",draft:!1,tags:[],version:"current",frontMatter:{id:"using-serial-flash",title:"\uc774\ubbf8\uc9c0\uc640 \uae00\uaf34\uc5d0\uc11c \uc9c1\ub82c \ud50c\ub798\uc2dc \uc0ac\uc6a9"},sidebar:"docs",previous:{title:"\uba54\ubaa8\ub9ac \ub9e4\ud551 \ubaa8\ub4dc\uac00 \uc544\ub2cc \ud50c\ub798\uc2dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc774\ubbf8\uc9c0 \uc800\uc7a5",permalink:"/4.17/ko/docs/development/scenarios/using-non-memory-mapped-flash"},next:{title:"\uae00\uaf34 \ub370\uc774\ud130\uc5d0 \uba54\ubaa8\ub9ac \ub9e4\ud551 \ubaa8\ub4dc\uac00 \uc544\ub2cc \ud50c\ub798\uc2dc \uc0ac\uc6a9",permalink:"/4.17/ko/docs/development/scenarios/fonts-in-unmapped-flash"}},g={},v=[{value:"\uad6c\uc131",id:"configuration",level:2},{value:"\uad6c\ud604",id:"implementation",level:2},{value:"\uc774\ubbf8\uc9c0",id:"images",level:2},{value:"\uae00\uaf34 \ub370\uc774\ud130",id:"font-data",level:2}],b={toc:v};function F(e){var t,n=e,{components:i}=n,u=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&d)for(var a of d(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},b),u),l(t,p({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\uc774 \uc139\uc158\uc5d0\uc11c\ub294 \uc9c1\ub82c \ud50c\ub798\uc2dc(\ub610\ub294 \uae30\ud0c0 \ub9e4\ud551\ub418\uc9c0 \uc54a\uc740 \uc2a4\ud1a0\ub9ac\uc9c0)\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc774\ubbf8\uc9c0\uc640 \uae00\uaf34\uc744 \uc800\uc7a5\ud558\ub294 \ubc29\ubc95\uc744 \uc124\uba85\ud569\ub2c8\ub2e4. \uc5ec\uae30\uc5d0 \uc124\uba85\ub41c \uae30\uc220\uc740 STM32G0\uacfc RAM \uc6a9\ub7c9\uc774 \ub9e4\uc6b0 \uc791\uc740 \uae30\ud0c0 \ub514\ubc14\uc774\uc2a4\uc5d0\uc11c \ud2b9\ud788 \uc720\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc8fc\ub85c \uc9c1\ub82c \ud50c\ub798\uc2dc\uc640 \ud568\uaed8 \uc0ac\uc6a9\ub418\ub294 \ubd80\ubd84 \ud504\ub808\uc784 \ubc84\ud37c\uc5d0 \ub300\ud55c \ub0b4\uc6a9\uc740 ",(0,a.kt)("a",m({parentName:"p"},{href:"lowering-memory-usage-with-partial-framebuffer"}),"\ubd80\ubd84 \ud504\ub808\uc784 \ubc84\ud37c\ub97c \ud1b5\ud55c \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9 \uc808\uac10")," \ubb38\uc11c\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624.",(0,a.kt)("br",{parentName:"p"}),"\n","\uba54\ubaa8\ub9ac \ub9e4\ud551 \ubaa8\ub4dc\uac00 \uc544\ub2cc \ud50c\ub798\uc2dc\uc5d0\uc11c RAM\uc73c\ub85c \ube44\ud2b8\ub9f5\uc744 \uce90\uc2f1\ud558\ub294 \ubc29\ubc95\uc740 ",(0,a.kt)("a",m({parentName:"p"},{href:"using-non-memory-mapped-flash"}),"\uba54\ubaa8\ub9ac \ub9e4\ud551 \ubaa8\ub4dc\uac00 \uc544\ub2cc \ud50c\ub798\uc2dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc774\ubbf8\uc9c0 \uc800\uc7a5")," \ubb38\uc11c\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,a.kt)("h2",m({},{id:"configuration"}),"\uad6c\uc131"),(0,a.kt)("p",null,'TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc9c1\ub82c \ud50c\ub798\uc2dc\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 "Additional Features"\uc5d0\uc11c "External Data Reader"\ub97c \ud65c\uc131\ud654\ud558\ub3c4\ub85d TouchGFX Generator \uad6c\uc131\uc744 \ubcc0\uacbd\ud574\uc57c \ud569\ub2c8\ub2e4.'),(0,a.kt)(r.Z,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/additional-features-data-reader.webp",width:"520",noShadow:!0,mdxType:"Figure"},"Additional Features: Data Reader"),(0,a.kt)("p",null,"\uc774 \uae30\ub2a5\uc744 \ud65c\uc131\ud654\ud558\uba74 TouchGFX Generator\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"LCD16bppSerialFlash")," LCD \ud074\ub798\uc2a4\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \uad6c\uc131\uc744 \ubcc0\uacbd\ud569\ub2c8\ub2e4. \ub610\ud55c ",(0,a.kt)("inlineCode",{parentName:"p"},"touchgfx::FlashDataReader"),"\uc758 \ud558\uc704 \ud074\ub798\uc2a4\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFXConfiguration.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-cpp",metastring:"{2-2,8-9}","{2-2,8-9}":!0}),"static TouchGFXDataReader dataReader;\nstatic LCD16bppSerialFlash display(dataReader);\nstatic ApplicationFontProvider fontProvider;\n...\nvoid touchgfx_init()\n{\n    ...\n    hal.setDataReader(&dataReader);\n    fontProvider.setFlashReader(&dataReader);\n    ...\n}\n")),(0,a.kt)("p",null,"\uc774 \ucf54\ub4dc\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXDataReader")," \ud074\ub798\uc2a4\uc758 \uc778\uc2a4\ud134\uc2a4\ub97c \uc0dd\uc131\ud558\uace0, \ud574\ub2f9 \uc778\uc2a4\ud134\uc2a4\ub97c \ub514\uc2a4\ud50c\ub808\uc774 \uac1d\uccb4, HAL \uac1d\uccb4 \ubc0f ApplicationFontProvider \uac1d\uccb4\uc5d0 \uc804\ub2ec\ud569\ub2c8\ub2e4. \uc774\ub4e4 \uc138 \uac00\uc9c0 \uac1d\uccb4\ub294 dataReader \uac1d\uccb4\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc9c1\ub82c \ud50c\ub798\uc2dc\uc758 \ub370\uc774\ud130\uc5d0 \uc561\uc138\uc2a4\ud569\ub2c8\ub2e4. \uc774\ubbf8\uc9c0 \ub370\uc774\ud130\uc640 \uae00\uaf34 \ub370\uc774\ud130 \ubaa8\ub450 \ub370\uc774\ud130\uac00 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc2dc\uc2a4\ud15c \ud504\ub85c\uadf8\ub798\uba38\uac00 \uc2e4\uc81c\ub85c \ud50c\ub798\uc2dc\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uc77d\uc744 \uc218 \uc788\uc73c\ub824\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXDataReader")," \ud074\ub798\uc2a4\uc758 \uad6c\ud604\uc744 \uc644\ub8cc\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("h2",m({},{id:"implementation"}),"\uad6c\ud604"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"TouchGFXDataReader")," \ud074\ub798\uc2a4\ub294 ",(0,a.kt)("a",m({parentName:"p"},{href:"../../api/classes/classtouchgfx_1_1_flash_data_reader/#public-functions"}),(0,a.kt)("em",{parentName:"a"},"touchgfx::FlashDataReader"))," \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604\ud569\ub2c8\ub2e4. \uc774 \uc778\ud130\ud398\uc774\uc2a4\uc758 \uacbd\uc6b0, \ud2b9\uc815 \ud558\ub4dc\uc6e8\uc5b4\uc5d0\uc11c \ub2e4\uc74c\uacfc \uac19\uc740 4\uac1c\uc758 \uba54\uc18c\ub4dc\ub97c \uad6c\ud604\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"include/touchgfx/hal/FlashDataReader.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"    bool addressIsAddressable(const void* address)\n    void copyData(const void* src, void* dst, uint32_t bytes)\n    void startFlashLineRead(const void* src, uint32_t bytes)\n    const uint8_t* waitFlashReadComplete()\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"addressIsAddressable")," \uba54\uc18c\ub4dc\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"LCD16bppSerialFlash")," \ud074\ub798\uc2a4\uac00 \uc77c\ubd80 \ub370\uc774\ud130\uc5d0 \ub300\ud574 \uc9c1\uc811 \uc77d\uae30\ub97c \uc218\ud589\ud560 \uc218 \uc788\ub294\uc9c0(\ub0b4\ubd80 RAM \ub610\ub294 \ub0b4\ubd80 \ud50c\ub798\uc2dc\uc5d0 \uc800\uc7a5\ub418\uc5b4 \uc788\ub294\uc9c0), \uc544\ub2c8\uba74 dataReader \uac1d\uccb4\ub97c \ud1b5\ud574 \uc77d\uae30\ub97c \uc218\ud589\ud574\uc57c \ud558\ub294\uc9c0\ub97c \uacb0\uc815\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"copyData"),"*` \uba54\uc18c\ub4dc\ub294 \ud50c\ub798\uc2dc\uc5d0\uc11c RAM\uc73c\ub85c \ub370\uc774\ud130\ub97c \ub3d9\uae30\uc2dd\uc73c\ub85c \ubcf5\uc0ac\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uc774 \ud568\uc218\ub294 \ubcf4\ud1b5 \ub370\uc774\ud130\uac00 \ucd94\uac00 \ucc98\ub9ac\ub418\uc9c0 \uc54a\uc744 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uba74  \uc194\ub9ac\ub4dc \uc774\ubbf8\uc9c0\ub97c \ud504\ub808\uc784 \ubc84\ud37c\uc5d0 \ubcf5\uc0ac\ud560 \ub54c \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"startFlashLineRead")," \uba54\uc18c\ub4dc\ub294 \ud50c\ub798\uc2dc\uc5d0\uc11c \uc5ec\ub7ec \ub77c\uc778\uc758 \ub370\uc774\ud130\uac00 \ud544\uc694\ud560 \ub54c \uc0ac\uc6a9\ub429\ub2c8\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"p"},"startFlashLineRead")," \uba54\uc18c\ub4dc\ub294 \ub370\uc774\ud130 \uc77d\uae30\ub97c \uac1c\uc2dc\ud569\ub2c8\ub2e4. \uc774 \uba54\uc18c\ub4dc\ub294 \ube44\ub3d9\uae30\uc2dd \uc77d\uae30 \uc791\uc5c5\uc744 \uac1c\uc2dc\ud560 \uc218 \uc788\uc73c\uba70, \uc77d\uae30\uac00 \uc2dc\uc791\ub418\uba74 \uc989\uc2dc \uac12\uc744 \ubc18\ud658\ud574\uc57c \ud569\ub2c8\ub2e4. ",(0,a.kt)("em",{parentName:"p"},"waitFlashReadComplete")," \uba54\uc18c\ub4dc\ub294 \uc77d\uae30\uac00 \uc644\ub8cc\ub420 \ub54c\uae4c\uc9c0 \uae30\ub2e4\ub824\uc57c \ud558\uba70, \ub370\uc774\ud130\ub97c \ubcf4\uc720\ud558\uace0 \uc788\ub294 \ubc84\ud37c\uc5d0 \ud3ec\uc778\ud130\ub97c \ubc18\ud658\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"LCD16bppSerialFlash"),"\ub294 \uc0c1\ud669\uc5d0 \ub530\ub77c \uc774\uc804\uc5d0 \uc77d\uc740 \ub370\uc774\ud130\ub97c \ucc98\ub9ac\ud558\ub294 \ub3d9\uc548 \ud558\ub098\uc758 \ud50c\ub798\uc2dc \uc77d\uae30\ub97c \ubc1c\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc644\uc804\ud55c \ub3d9\uc2dc\uc131\uc744 \ub2ec\uc131\ud558\uae30 \uc704\ud574\uc11c\ub294 dataReader\uc5d0 \ubc84\ud37c\uac00 \ub450 \uac1c \uc774\uc0c1 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"TouchGFX Generator\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedDataReader"),"\uc640 ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXDataReader"),"\uc758 \ub450 \uac00\uc9c0 \ud074\ub798\uc2a4\uc5d0\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"FlashDataReader"),"\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedDataReader"),"\ub294 \ub450 \ud074\ub798\uc2a4\uc758 \uc288\ud37c \ud074\ub798\uc2a4\ub85c, \uae30\ubcf8 \uc2e4\ud589\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4. \uc774 \uc2e4\ud589\uc774 \uc801\ud569\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0, \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ud504\ub85c\uadf8\ub798\uba38\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXDataReader")," \ud074\ub798\uc2a4\uc5d0\uc11c \uad6c\ud604\ub41c \uac00\uc0c1 \ud568\uc218\ub97c \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedDataReader")," \uc2e4\ud589\uc740 \uc774 \uc791\uc5c5\uc744 \uc218\ud589\ud558\uae30 \uc704\ud574 C \ud568\uc218\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4. \uc774\ub4e4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 \uc2dc\uc2a4\ud15c \ud504\ub85c\uadf8\ub798\uba38\uac00 \uad6c\ud604\ud569\ub2c8\ub2e4."),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFX/target/generated/TouchGFXGeneratedDataReader.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),'extern "C" __weak void DataReader_WaitForReceiveDone();\nextern "C" __weak void DataReader_ReadData(uint32_t address24, uint8_t* buffer, uint32_t length);\nextern "C" __weak void DataReader_StartDMAReadData(uint32_t address24, uint8_t* buffer, uint32_t length);\n\nvoid TouchGFXGeneratedDataReader::startFlashLineRead(const void* src, uint32_t bytes)\n{\n    /* Start transfer using DMA */\n    DataReader_StartDMAReadData((uint32_t)src, (readToBuffer1 ? buffer1 : buffer2), bytes);\n}\n')),(0,a.kt)("p",null,"\uad6c\ud604\ub41c \uacb0\uacfc\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"MB1642BDataReader.c")," \ud30c\uc77c\uc5d0\uc11c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"Core/Src/MB1642BDataReader.c"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"void DataReader_StartDMAReadData(uint32_t address24, uint8_t* buffer, uint32_t length)\n{\n    readDataDMA(address24, buffer, length);\n}\n\nvoid readDataDMA(uint32_t address24, uint8_t* buffer, uint32_t length)\n{\n    // Pull Flash CS pin low\n    isReceivingData = 1;\n    FLASH_CS_GPIO_Port->BRR = FLASH_CS_Pin;\n\n    *((__IO uint8_t*)&hspi2.Instance->DR) = CMD_READ;\n\n    ...\n}\n")),(0,a.kt)("p",null,"\uc774\ub7ec\ud55c \uad6c\ud604\uc740 \ud50c\ub798\uc2dc\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \ud504\ub85c\ud1a0\ucf5c\uacfc SPI \ubc0f CS\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 GPIO\uc5d0 \ud55c \ud569\ub2c8\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedDataReader")," \ud074\ub798\uc2a4\uac00 \uc791\ub3d9\ud558\ub824\uba74 \uc138 \uac00\uc9c0 C \ud568\uc218\ub97c \ubaa8\ub450 \uad6c\ud604\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("h2",m({},{id:"images"}),"\uc774\ubbf8\uc9c0"),(0,a.kt)("p",null,"\uc11c\ub860\uc5d0\uc11c \uc5b8\uae09\ud588\ub4ef\uc774 ",(0,a.kt)("inlineCode",{parentName:"p"},"LCD16bppSerialFlash")," \ud074\ub798\uc2a4\ub294 dataReader \uac1d\uccb4\ub97c \ud1b5\ud574 \uc774\ubbf8\uc9c0 \ud53d\uc140\uc744 \uc77d\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \uc704\ud574 \ub0b4\ubd80 \ud50c\ub798\uc2dc \ubc94\uc704 \ubc16\uc758 \uc8fc\uc18c \ubc94\uc704\uc5d0 \uc774\ubbf8\uc9c0\ub97c \uc800\uc7a5\ud558\ub3c4\ub85d \ub9c1\ucee4 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \ubcc0\uacbd\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"STM32G071\uc5d0\uc11c\ub294 \uc9c1\ub82c \ud50c\ub798\uc2dc\uc758 \uc2dc\uc791 \uc8fc\uc18c\ub85c 0x90000000 \uc8fc\uc18c\ub97c \uc120\ud0dd\ud588\uc2b5\ub2c8\ub2e4."),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"gcc/STM32G071RBTX_FLASH.ld"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"MEMORY\n{\n  RAM        (xrw)    : ORIGIN = 0x20000000,   LENGTH = 36K\n  FLASH      (rx)     : ORIGIN = 0x8000000,    LENGTH = 128K\n  SPI_FLASH  (r)      : ORIGIN = 0x90000000,   LENGTH = 8M\n}\n\n/* Sections */\nSECTIONS\n{\n  ...\n\n  ExtFlashSection :\n  {\n    *(ExtFlashSection ExtFlashSection.*)\n    *(.gnu.linkonce.r.*)\n    . = ALIGN(0x4);\n  } >SPI_FLASH\n\n  FontFlashSection :\n  {\n    *(FontFlashSection FontFlashSection.*)\n    *(.gnu.linkonce.r.*)\n    . = ALIGN(0x4);\n  } >SPI_FLASH\n}\n")),(0,a.kt)("p",null,"\uc774\ub807\uac8c \ud558\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"ExtFlashSection"),"\uacfc ",(0,a.kt)("inlineCode",{parentName:"p"},"FontFlashSection"),"\uc774 0x90000000 \uc8fc\uc18c \ubc94\uc704 \ub0b4\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774\uc81c \ud50c\ub798\uc2dc \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc678\ubd80 \ud50c\ub798\uc2dc\uc5d0 \ub370\uc774\ud130\ub97c \uae30\ub85d\ud558\ub294 \uc791\uc5c5\ub9cc \ub0a8\uc558\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"STM32CubeProgrammer\uc6a9 \ud50c\ub798\uc2dc \ub85c\ub354\ub97c \uc791\uc131\ud558\ub294 \ubc29\ubc95\uc740 \uc774 \ubb38\uc11c\uc758 \uc139\uc158 2.3.3 ",(0,a.kt)("a",m({parentName:"p"},{href:"https://www.st.com/resource/en/user_manual/dm00403500-stm32cubeprogrammer-software-description-stmicroelectronics.pdf#page=25"}),"UM2237 STMCubeProgrammer \uc0ac\uc6a9\uc790 \ub9e4\ub274\uc5bc\uc5d0\uc11c \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("h2",m({},{id:"font-data"}),"\uae00\uaf34 \ub370\uc774\ud130"),(0,a.kt)("p",null,"\uc704\uc758 \ub9c1\ucee4 \uc2a4\ud06c\ub9bd\ud2b8\ub294 \uae00\uaf34 \ud53d\uc140 \ub370\uc774\ud130\uc640 \uae00\uaf34 \ubb38\uc790 \uba54\ud0c0 \ub370\uc774\ud130(\ub108\ube44 \ubc0f \ub192\uc774)\ub97c \uc678\ubd80 \ud50c\ub798\uc2dc\uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4(\ub450 \uc720\ud615\uc758 \ub370\uc774\ud130 \ubaa8\ub450 FontFlashSection\uc5d0 \uc800\uc7a5). \ud654\uba74\uc5d0 \ubb38\uc790\ub97c \uadf8\ub824 \ub123\uc744 \ub54c dataReader \uac1d\uccb4\ub97c \ud1b5\ud574\uc11c\ub3c4 \uc774 \ub370\uc774\ud130\ub97c \uc77d\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,'"Unmapped Storage Format"\uc744 \uc0ac\uc6a9\ud558\uace0 \uc788\uc9c0 \uc54a\uc740 \uacbd\uc6b0\uc5d0\ub294 \ub9c1\ucee4 \uc2a4\ud06c\ub9bd\ud2b8\uc640 ',(0,a.kt)("inlineCode",{parentName:"p"},"include/touchgfx/hal/Config.hpp")," \ud30c\uc77c\uc744 \ubcc0\uacbd\ud574 \uae00\uaf34 \ubb38\uc790 \uba54\ud0c0 \ub370\uc774\ud130\ub97c \ub0b4\ubd80 \ud50c\ub798\uc2dc\ub85c \uc62e\uaca8\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uae00\uaf34 \ud615\uc2dd\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,a.kt)("a",m({parentName:"p"},{href:"fonts-in-unmapped-flash"}),"\ub9e4\ud551\ub418\uc9c0 \uc54a\uc740 \uc2a4\ud1a0\ub9ac\uc9c0\uc758 \uae00\uaf34"),"\uc5d0 \ub300\ud55c \ubb38\uc11c\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."))}F.isMDXComponent=!0}}]);