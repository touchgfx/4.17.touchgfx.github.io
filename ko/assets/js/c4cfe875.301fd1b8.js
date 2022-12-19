"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5325],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(r),m=o,h=u["".concat(l,".").concat(m)]||u[m]||s[m]||i;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),o=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:r,height:i,src:a})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:r,height:i,src:a})),n.createElement("p",null,e.children))}},29415:function(e,t,r){var n=r(67294),o=r(88678);const i=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class a extends n.Component{render(){return n.createElement(o.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=a},88678:function(e,t,r){var n=r(67294);class o extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{class:e},n.createElement("div",{class:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=o},21517:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return g},default:function(){return w},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return k}});var n=r(3905),o=r(39130),i=r(29415),a=r(44035),c=Object.defineProperty,l=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&m(e,r,t[r]);if(p)for(var r of p(t))s.call(t,r)&&m(e,r,t[r]);return e};const f={id:"embedded-graphics",title:"\uc784\ubca0\ub514\ub4dc \uadf8\ub798\ud53d"},g=void 0,b={unversionedId:"basic-concepts/embedded-graphics",id:"basic-concepts/embedded-graphics",title:"\uc784\ubca0\ub514\ub4dc \uadf8\ub798\ud53d",description:"\uc784\ubca0\ub514\ub4dc \uadf8\ub798\ud53d\uc774\ub780 \ub9ce\uc740 \uc758\ubbf8\ub97c \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/basic-concepts/embedded-graphics.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/embedded-graphics",permalink:"/4.17/ko/docs/basic-concepts/embedded-graphics",draft:!1,tags:[],version:"current",frontMatter:{id:"embedded-graphics",title:"\uc784\ubca0\ub514\ub4dc \uadf8\ub798\ud53d"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/4.17/ko/docs/introduction/getting-started"},next:{title:"\uc0c9\uc0c1 \ud615\uc2dd",permalink:"/4.17/ko/docs/basic-concepts/color-formats"}},v={},k=[{value:"4\uac00\uc9c0 \uc8fc\uc694 \uc694\uc18c",id:"the-four-main-parts",level:2},{value:"MCU",id:"mcu",level:3},{value:"RAM",id:"ram",level:3},{value:"\ud50c\ub798\uc2dc",id:"flash",level:3},{value:"\ub514\uc2a4\ud50c\ub808\uc774",id:"display",level:3}],y={toc:k};function w(e){var t,r=e,{components:c}=r,m=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=h(h({},y),m),l(t,d({components:c,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\uc784\ubca0\ub514\ub4dc \uadf8\ub798\ud53d\uc774\ub780 \ub9ce\uc740 \uc758\ubbf8\ub97c \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uba3c\uc800 \uc784\ubca0\ub514\ub4dc\uc5d0 \ub300\ud55c \ud574\uc11d\uc740 \uc0ac\ub78c\ub4e4\ub9c8\ub2e4 \ub2e4\ub985\ub2c8\ub2e4. \uc5b4\ub5a4 \uc0ac\ub78c\ub4e4\uc740 \uc784\ubca0\ub514\ub4dc \uc2dc\uc2a4\ud15c\uc744 \uc6b4\uc601 \uccb4\uc81c\uac00 \uc5c6\uace0, RAM, ROM \ub610\ub294 GPIO\ub3c4 \uac70\uc758 \uc5c6\uc774 \uc815\ub9d0\ub85c \uc2e0\ub8b0\ud560 \uc218 \uc788\ub294 \uad6c\ud615\uc758 8\ube44\ud2b8 \ub9c8\uc774\ud06c\ub85c\ucee8\ud2b8\ub864\ub7ec\ub77c\uace0 \uc0dd\uac01\ud558\ub294\uac00 \ud558\uba74, \ub610 \uc5b4\ub5a4 \uc0ac\ub78c\ub4e4\uc740 \ubaa8\ub4e0 \uac83\uc744 \uae30\uac00\ubc14\uc774\ud2b8 \uc218\uc900\uc73c\ub85c \ub192\uc778 \ucd5c\uc2e0 \uc2a4\ub9c8\ud2b8\ud3f0\uc73c\ub85c \uc5ec\uae41\ub2c8\ub2e4."),(0,n.kt)("p",null,"\ub450 \ubc88\uc9f8, \uadf8\ub798\ud53d\uc774\ub77c\ub294 \ud45c\ud604\uc5d0 \ub300\ud574\uc11c\ub3c4 \ud574\uc11d\uc774 \uc5c7\uac08\ub9bd\ub2c8\ub2e4. \uc990\uaca8 \uc0ac\uc6a9\ud558\ub294 \ud398\uc778\ud305 \ud504\ub85c\uadf8\ub7a8\uc5d0 \uc6d0\ud558\ub294 \ud53d\uc140\uc744 \uadf8\ub9ac\ub294 \uac83\uc774\ub77c\uace0 \ud574\uc11d\ud558\ub294 \uc0ac\ub78c\uc774 \uc788\ub294\uac00 \ud558\uba74, \uac8c\uc774\ubc0d \ucf58\uc194\uc5d0\uc11c \uc2e4\ud589\ub418\ub294 3D \ub80c\ub354\ub9c1 \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub77c\uace0 \ud574\uc11d\ud558\ub294 \uc0ac\ub78c\ub4e4\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"TouchGFX\uc5d0\uac8c \uc784\ubca0\ub514\ub4dc \uc2dc\uc2a4\ud15c\uc774\ub780 STM32 \ub9c8\uc774\ud06c\ub85c\ucee8\ud2b8\ub864\ub7ec \uae30\ubc18\uc758 \uc2dc\uc2a4\ud15c\uc744 \ucd1d\uce6d\ud569\ub2c8\ub2e4. \ub610\ud55c \uadf8\ub798\ud53d\uc774\ub780 \ucd08\ub2f9 60\ud504\ub808\uc784\uc73c\ub85c \uc2e4\ud589\ub418\ub294 \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ud0d1\uc7ac\ud55c \ub300\ud654\ud615 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ub9d0\ud569\ub2c8\ub2e4."),(0,n.kt)("h2",h({},{id:"the-four-main-parts"}),"4\uac00\uc9c0 \uc8fc\uc694 \uc694\uc18c"),(0,n.kt)("p",null,"\uc774\ub7ec\ud55c \ud50c\ub7ab\ud3fc\uc5d0\uc11c \uadf8\ub798\ud53d \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc2e4\ud589\ud558\ub824\uba74 \uba3c\uc800 \uc9c1\uc811 \uad00\ub828\ub41c 4\uac00\uc9c0 \uc8fc\uc694 \uad6c\uc131\uc694\uc18c\ub97c \uace0\ub824\ud569\ub2c8\ub2e4. \uadf8 \ubc16\uc5d0\ub3c4 \uc5ec\ub7ec \uac00\uc9c0 \uad6c\uc131\uc694\uc18c\uac00 \uc784\ubca0\ub514\ub4dc \uc2dc\uc2a4\ud15c\uc5d0 \ud3ec\ud568\ub420 \uc218 \uc788\uc9c0\ub9cc \uadf8\ub798\ud53d \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \ub300\ud55c \uad00\ub828\uc131\uc740 \ube44\uad50\uc801 \uc801\uc2b5\ub2c8\ub2e4."),(0,n.kt)(a.Z,{imageSource:"/img/basic-concepts/embedded-graphics-primer/4-main-parts.webp",noShadow:"true",mdxType:"Figure"},"MCU, RAM, \ud50c\ub798\uc2dc \ubc0f \ub514\uc2a4\ud50c\ub808\uc774"),(0,n.kt)("p",null,"\uc694\uc57d \ud558\uc790\uba74, TouchGFX\ub294 MCU\ub97c \uc0ac\uc6a9\ud574 \ud50c\ub798\uc2dc\uc5d0\uc11c \uc694\uc18c\ub4e4\uc744 \uc870\ud569\ud558\uc5ec \uc774\ubbf8\uc9c0\ub97c \uc0dd\uc131\ud55c \ud6c4 RAM\uc5d0 \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4. \uc774\ub807\uac8c \uc870\ud569\ub41c \uc774\ubbf8\uc9c0\ub294 \ub514\uc2a4\ud50c\ub808\uc774\ub85c \uc804\uc1a1\ub429\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ud504\ub85c\uc138\uc2a4\uac00 \ud544\uc694\ud55c \ub9cc\ud07c \ucd5c\ub300\ud55c \ub9ce\uc774 \ubc18\ubcf5\ub429\ub2c8\ub2e4."),(0,n.kt)("h3",h({},{id:"mcu"}),"MCU"),(0,n.kt)("p",null,"MCU\ub294 \uc704\uc758 \ud504\ub85c\uc138\uc2a4\uc5d0\uc11c \uc911\uc694\ud55c \uc5ed\ud560\uc744 \ud558\ub294\ub370, \ud50c\ub798\uc2dc\uc5d0\uc11c \uc774\ubbf8\uc9c0\ub97c \uc77d\uc5b4\uc640\uc11c RAM\uc5d0 \uc791\uc131\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ubc18\ud22c\uba85 \ube68\uac04\uc0c9 \ud14d\uc2a4\ud2b8\ub97c \ubcd1\ud569\ud560 \uacbd\uc6b0 \ud574\ub2f9\ud558\ub294 \uc0c9\uc0c1\uc744 \uacc4\uc0b0\ud558\uc5ec RAM\uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4. \ub610\ud55c \uc6d0\uc758 \ud53d\uc140\uc744 \ubaa8\ub450 \ub80c\ub354\ub9c1\ud558\uc5ec RAM\uc5d0 \uc800\uc7a5\ud558\uace0, RAM\uc758 \uc774\ubbf8\uc9c0\ub97c \ub514\uc2a4\ud50c\ub808\uc774\ub85c \uc804\uc1a1\ud569\ub2c8\ub2e4."),(0,n.kt)(a.Z,{imageSource:"/img/basic-concepts/mcu-internal.svg",noShadow:"true",width:240,mdxType:"Figure"},"MCU\ub294 CPU, \ub0b4\ubd80 \ud50c\ub798\uc2dc, \ub0b4\ubd80 RAM \ub4f1\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,"STM32 MCU\ub294 LTDC, Chrom-ART, Chrom-GRC \ub4f1 \uadf8\ub798\ud53d\uc744 \uad6c\ud604\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub418\ub294 \uc804\uc6a9 \uae30\ub2a5\ub4e4\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,n.kt)(i.Z,{mdxType:"FurtherReading"},"\uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,n.kt)(o.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-mcu",mdxType:"Link"},"MCU \uc120\ud0dd \uac00\uc774\ub4dc"),"\uc640 ",(0,n.kt)(o.Z,{to:"../development/board-bring-up/how-to/02-cpu-running",mdxType:"Link"},"MCU \uc124\uc815\uc5d0 \ub300\ud55c \ubcf4\ub4dc \ube0c\ub9c1 \uc5c5 \uac00\uc774\ub4dc"),"\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,n.kt)("h3",h({},{id:"ram"}),"RAM"),(0,n.kt)("p",null,"RAM\uc740 \ucd5c\uc885\uc801\uc73c\ub85c \uacc4\uc0b0\ub41c \uc774\ubbf8\uc9c0(",(0,n.kt)("a",h({parentName:"p"},{href:"framebuffer"}),"\ud504\ub808\uc784\ubc84\ud37c"),")\uac00 \uc800\uc7a5\ub418\ub294 \uacf5\uac04\uc785\ub2c8\ub2e4. \uadf8\ub798\ud53d\uc774 \uc5c5\ub370\uc774\ud2b8\ub418\uc5c8\uc744 \ub54c \uc774\ub7ec\ud55c RAM\uc5d0 \uc800\uc7a5\ub41c \uc774\ubbf8\uc9c0\ub97c \uc77d\uace0 \uc4f0\ub294 \uac83\uc740 MCU\uc785\ub2c8\ub2e4. \uc774\ud6c4 \ucd5c\uc885 \uc774\ubbf8\uc9c0\ub97c \ub514\uc2a4\ud50c\ub808\uc774\ub85c \uc804\uc1a1\ud560 \ub54c \ud55c \ubc88 \ub354 \uc77d\uc5b4\uc635\ub2c8\ub2e4."),(0,n.kt)("p",null,"\ub300\ubd80\ubd84 \uacbd\uc6b0 \ucd5c\uc885 \uc774\ubbf8\uc9c0\ub294 MCU\uc758 \ub0b4\ubd80 RAM\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4. \ub2e4\ub9cc \ucd5c\uc885 \uc774\ubbf8\uc9c0\ub97c \ub0b4\ubd80 RAM\uc5d0 \uc800\uc7a5\ud560 \uc218 \uc5c6\ub294 \uacbd\uc6b0\uc5d0\ub294 \uc678\ubd80 RAM\uc744 \uad6c\uc131\uc5d0 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)(i.Z,{mdxType:"FurtherReading"},"\uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,n.kt)(o.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-external-memories",mdxType:"Link"},"RAM \uc120\ud0dd \uac00\uc774\ub4dc"),"\uc640 ",(0,n.kt)(o.Z,{to:"../development/board-bring-up/how-to/04-enable-external-ram",mdxType:"Link"},"RAM \uc124\uc815\uc5d0 \ub300\ud55c \ubcf4\ub4dc \ube0c\ub9c1 \uc5c5 \uac00\uc774\ub4dc"),"\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,n.kt)("h3",h({},{id:"flash"}),"\ud50c\ub798\uc2dc"),(0,n.kt)("p",null,"\ud50c\ub798\uc2dc\ub294 \ubaa8\ub4e0 \uc815\uc801 \ub370\uc774\ud130\uac00 \uc800\uc7a5\ub418\ub294 \uacf5\uac04\uc73c\ub85c, \uc774\ubbf8\uc9c0, \uae00\uaf34, \ud14d\uc2a4\ud2b8\uac00 \uc5ec\uae30\uc5d0 \ud574\ub2f9\ud569\ub2c8\ub2e4. \ud50c\ub798\uc2dc\uc5d0 \uc800\uc7a5\ub41c \ub0b4\uc6a9\uc740 MCU\uc5d0\uc11c \uc77d\uc5b4\uc640\uc11c RAM\uc5d0 \uc791\uc131\ub418\uac70\ub098, RAM\uacfc \uc870\ud569\ub429\ub2c8\ub2e4."),(0,n.kt)("p",null,"\ub0b4\ubd80 \ud50c\ub798\uc2dc\ub294 \ubcf4\ud1b5 \uadf8\ub798\ud53d \uc560\uc14b\uc744 \ubaa8\ub450 \uc800\uc7a5\ud560 \ub9cc\ud07c \uc6a9\ub7c9\uc774 \ud06c\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \uc678\uc7a5 \ud50c\ub798\uc2dc\ub97c \uad6c\uc131\uc5d0 \ucd94\uac00\ud558\ub294 \uacbd\uc6b0\uac00 \ub300\ubd80\ubd84\uc785\ub2c8\ub2e4. \ub9e4\uc6b0 \ub2e8\uc21c\ud55c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c\ub294 \ub0b4\ubd80 \ud50c\ub798\uc2dc\ub9cc\uc73c\ub85c\ub3c4 \ucda9\ubd84\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,"\ud50c\ub798\uc2dc\ub294 \uba54\ubaa8\ub9ac \ub9e4\ud551\uc744 \uc9c0\uc6d0\ud558\ub294 \uac83\uc774 \uc88b\uc740\ub370, \uc774\ub294 \ud50c\ub798\uc2dc\uc5d0\uc11c \ud53d\uc140\uc744 \uc9c1\uc811 \uc77d\uc5b4\uc640\uc11c RAM\uc5d0 \uc791\uc131\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uadf8\ub807\uc9c0 \uc54a\uace0 \ud50c\ub798\uc2dc\uac00 \uba54\ubaa8\ub9ac \ub9e4\ud551\uc744 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294\ub2e4\uba74 \ud50c\ub798\uc2dc \ub0b4\uc6a9\uc744 RAM\uc73c\ub85c \uc804\uc1a1\ud558\uc5ec \ud574\ub2f9 \uc704\uce58\uc5d0\uc11c \uc77d\uc5b4\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)(i.Z,{mdxType:"FurtherReading"},"\uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,n.kt)(o.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-external-memories",mdxType:"Link"},"\ud50c\ub798\uc2dc \uc120\ud0dd \uac00\uc774\ub4dc"),"\uc640 ",(0,n.kt)(o.Z,{to:"../development/board-bring-up/how-to/06-flash-external-addressable",mdxType:"Link"},"\ud50c\ub798\uc2dc \uc124\uc815\uc5d0 \ub300\ud55c \ubcf4\ub4dc \ube0c\ub9c1 \uc5c5 \uac00\uc774\ub4dc"),"\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,n.kt)("h3",h({},{id:"display"}),"\ub514\uc2a4\ud50c\ub808\uc774"),(0,n.kt)("p",null,"\ub514\uc2a4\ud50c\ub808\uc774\ub294 \uc774\ubbf8\uc9c0\ub97c \uc0ac\ub78c\ub4e4\uc5d0\uac8c \uc2e4\uc81c\ub85c \ubcf4\uc5ec\uc8fc\ub294 \uacf5\uac04\uc785\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uacc4\uc0b0\ub41c \uc774\ubbf8\uc9c0(\ud504\ub808\uc784\ubc84\ud37c)\uac00 RAM\uc5d0 \uc800\uc7a5\ub41c \ud6c4 MCU\ub97c \ud1b5\ud574 \uc8fc\uae30\uc801\uc73c\ub85c \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \uc804\uc1a1\ub429\ub2c8\ub2e4."),(0,n.kt)(i.Z,{mdxType:"FurtherReading"},"\uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,n.kt)(o.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-display",mdxType:"Link"},"\ub514\uc2a4\ud50c\ub808\uc774 \uc120\ud0dd \uac00\uc774\ub4dc"),"\uc640 ",(0,n.kt)(o.Z,{to:"../development/board-bring-up/how-to/03-display-internal",mdxType:"Link"},"\ub514\uc2a4\ud50c\ub808\uc774 \uc124\uc815\uc5d0 \ub300\ud55c \ubcf4\ub4dc \ube0c\ub9c1 \uc5c5 \uac00\uc774\ub4dc"),"\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,n.kt)(i.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,"\uac00\ub2a5\ud55c \ud558\ub4dc\uc6e8\uc5b4 \uc120\ud0dd \uc635\uc158\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,n.kt)(o.Z,{to:"../development/hardware-selection/hardware-selection-introduction",mdxType:"Link"},"\ud558\ub4dc\uc6e8\uc5b4 \uc120\ud0dd"),"\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,n.kt)("li",null,"\ubcf4\ub4dc \ubc0f \uad6c\uc131\uc694\uc18c \uc124\uc815\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,n.kt)(o.Z,{to:"../development/board-bring-up/board-introduction",mdxType:"Link"},"\ubcf4\ub4dc \ube0c\ub9c1 \uc5c5"),"\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624.")))}w.isMDXComponent=!0}}]);