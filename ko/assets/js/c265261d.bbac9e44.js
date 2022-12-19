"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6062],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),u=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),s=a,k=c["".concat(p,".").concat(s)]||c[s]||m[s]||r;return n?l.createElement(k,i(i({ref:t},d),{},{components:n})):l.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},44035:function(e,t,n){var l=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,r=e.height,i=(0,a.Z)(e.imageSource);return t?l.createElement("div",{class:"figure noshadow"},l.createElement("a",{href:i,target:"_blank"},l.createElement("img",{width:n,height:r,src:i})),l.createElement("p",null,e.children)):l.createElement("div",{class:"figure"},l.createElement("a",{href:i,target:"_blank"},l.createElement("img",{width:n,height:r,src:i})),l.createElement("p",null,e.children))}},29415:function(e,t,n){var l=n(67294),a=n(88678);const r=l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},l.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends l.Component{render(){return l.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:r},this.props.children)}}t.Z=i},88678:function(e,t,n){var l=n(67294);class a extends l.Component{render(){const e=`highlight highlight-${this.props.type}`;return l.createElement("div",{class:e},l.createElement("div",{class:"highlight-heading"},l.createElement("h5",null,l.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),l.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,n){var l=n(67294),a=n(88678);const r=l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},l.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends l.Component{render(){return l.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:r},this.props.children)}}t.Z=i},46291:function(e,t,n){n.r(t),n.d(t,{assets:function(){return N},contentTitle:function(){return v},default:function(){return T},frontMatter:function(){return g},metadata:function(){return y},toc:function(){return f}});var l=n(3905),a=n(44035),r=n(93054),i=n(29415),o=n(39130),p=Object.defineProperty,u=Object.defineProperties,d=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&k(e,n,t[n]);if(c)for(var n of c(t))s.call(t,n)&&k(e,n,t[n]);return e};const g={id:"hardware-selection-display",title:"\ub514\uc2a4\ud50c\ub808\uc774"},v=void 0,y={unversionedId:"development/hardware-selection/hardware-components/hardware-selection-display",id:"development/hardware-selection/hardware-components/hardware-selection-display",title:"\ub514\uc2a4\ud50c\ub808\uc774",description:"\ud5a5\uc0c1\ub41c \uc0ac\uc6a9\uc790 \uacbd\ud5d8, \ub354 \ud06c\uace0 \uc0c8\ub85c\uc6cc\uc9c4 \ub514\uc2a4\ud50c\ub808\uc774 \ub0b4\uc7a5 \uadf8\ub9ac\uace0 \uad6c\ud615 \uc138\uadf8\uba3c\ud2b8 \ub514\uc2a4\ud50c\ub808\uc774\ub97c \uc800\ud574\uc0c1\ub3c4 \ubc0f \uace0\ud574\uc0c1\ub3c4 \ub514\uc2a4\ud50c\ub808\uc774\ub85c \uad50\uccb4\ud568\uc73c\ub85c\uc368 \uc81c\ud488\uc774 \ub354\uc6b1 \ub2e4\ucc44\ub85c\uc6cc\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/hardware-selection/hardware-components/hardware-selection-display.mdx",sourceDirName:"development/hardware-selection/hardware-components",slug:"/development/hardware-selection/hardware-components/hardware-selection-display",permalink:"/4.17/ko/docs/development/hardware-selection/hardware-components/hardware-selection-display",draft:!1,tags:[],version:"current",frontMatter:{id:"hardware-selection-display",title:"\ub514\uc2a4\ud50c\ub808\uc774"},sidebar:"docs",previous:{title:"MCU",permalink:"/4.17/ko/docs/development/hardware-selection/hardware-components/hardware-selection-mcu"},next:{title:"\uc678\ubd80 \uba54\ubaa8\ub9ac",permalink:"/4.17/ko/docs/development/hardware-selection/hardware-components/hardware-selection-external-memories"}},N={},f=[{value:"\ub514\uc2a4\ud50c\ub808\uc774 \uc608\uc2dc",id:"examples-of-displays",level:2},{value:"LCD-TFT",id:"lcd-tft",level:3},{value:"MIP",id:"mip",level:3},{value:"ePaper/eInk",id:"epapereink",level:3},{value:"\ub514\uc2a4\ud50c\ub808\uc774 \uc778\ud130\ud398\uc774\uc2a4 \uac1c\uc694",id:"display-interface-overview",level:2},{value:"\ubc1d\uae30 \ubc0f \ubc31\ub77c\uc774\ud2b8",id:"brightness-and-backlight",level:3},{value:"\uc2dc\uc57c \uc704\uce58 \ubc0f \uc0c9 \ubc18\uc804",id:"viewing-position-and-color-inversion",level:3},{value:"\ub514\uc2a4\ud50c\ub808\uc774 \uc218\uba85(lifetime)",id:"display-lifetime",level:3},{value:"\ud53d\uc140 \ubc00\ub3c4",id:"pixel-density",level:3},{value:"\ub3d9\uc801 \uc0c9\uc0c1 \ubc94\uc704",id:"dynamic-color-range",level:4},{value:"\uc548\ud2f0 \uc568\ub9ac\uc5b4\uc2f1",id:"anti-aliasing",level:4},{value:"\ud658\uacbd",id:"environment",level:3},{value:"\ud130\uce58\uc2dd/\ube44\ud130\uce58\uc2dd \ub514\uc2a4\ud50c\ub808\uc774",id:"touch--non-touch-displays",level:3},{value:"\uc815\uc804\uc2dd \ud130\uce58",id:"capacitive-touch",level:4},{value:"\uac10\uc555\uc2dd \ud130\uce58",id:"resistive-touch",level:4},{value:"\ube44\ud130\uce58\uc2dd",id:"non-touch",level:4},{value:"RAM \ub0b4\uc7a5 \ub514\uc2a4\ud50c\ub808\uc774",id:"displays-with-ram",level:3},{value:"\ube44(Non)\uc815\uc0ac\uac01\ud615 \ud53d\uc140/\ud53d\uc140 \uc885\ud6a1\ube44",id:"non-square-pixels--pixel-aspect-ratio",level:3},{value:"\ucee4\ubc84 \ub80c\uc988",id:"cover-lense",level:3}],w={toc:f};function T(e){var t,n=e,{components:p}=n,k=((e,t)=>{var n={};for(var l in e)m.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&c)for(var l of c(e))t.indexOf(l)<0&&s.call(e,l)&&(n[l]=e[l]);return n})(n,["components"]);return(0,l.kt)("wrapper",(t=h(h({},w),k),u(t,d({components:p,mdxType:"MDXLayout"}))),(0,l.kt)("p",null,"\ud5a5\uc0c1\ub41c \uc0ac\uc6a9\uc790 \uacbd\ud5d8, \ub354 \ud06c\uace0 \uc0c8\ub85c\uc6cc\uc9c4 \ub514\uc2a4\ud50c\ub808\uc774 \ub0b4\uc7a5 \uadf8\ub9ac\uace0 \uad6c\ud615 \uc138\uadf8\uba3c\ud2b8 \ub514\uc2a4\ud50c\ub808\uc774\ub97c \uc800\ud574\uc0c1\ub3c4 \ubc0f \uace0\ud574\uc0c1\ub3c4 \ub514\uc2a4\ud50c\ub808\uc774\ub85c \uad50\uccb4\ud568\uc73c\ub85c\uc368 \uc81c\ud488\uc774 \ub354\uc6b1 \ub2e4\ucc44\ub85c\uc6cc\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774 \ucc55\ud130\uc5d0\uc11c\ub294 \uc784\ubca0\ub514\ub4dc GUI \uc81c\ud488\uc5d0 \uc0ac\uc6a9\ud560 \ub514\uc2a4\ud50c\ub808\uc774\ub97c \uc120\ud0dd\ud560 \ub54c \uace0\ub824\ud574\uc57c \ud560 \uc0ac\ud56d\uc744 \uc911\uc810\uc801\uc73c\ub85c \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)(a.Z,{imageSource:"/img/development/hardware-selection/display/displays.webp",noShadow:!0,mdxType:"Figure"},"\ub2e4\uc591\ud55c \uc720\ud615\uc758 \ub514\uc2a4\ud50c\ub808\uc774"),(0,l.kt)(r.Z,{mdxType:"Note"},"\uc77c\ubc18\uc801\uc73c\ub85c TouchGFX\ub294 \ubaa8\ub4e0 \uc885\ub958\uc758 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0\uc11c \uc2e4\ud589\ub418\uba70 \ub514\uc2a4\ud50c\ub808\uc774 \uae30\uc220\uc774\ub098 \uc778\ud130\ud398\uc774\uc2a4, \uc2dc\uc57c\uac01, \ubc1d\uae30 \ub4f1\uc5d0 \uc601\ud5a5\uc744 \ubc1b\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",h({},{id:"examples-of-displays"}),"\ub514\uc2a4\ud50c\ub808\uc774 \uc608\uc2dc"),(0,l.kt)("p",null,"\ub514\uc2a4\ud50c\ub808\uc774\uc758 \ud575\uc2ec \uc694\uc778\uc774 \uac01\uae30 \ub2e4\ub974\uae30 \ub54c\ubb38\uc5d0 \uc801\ud569\ud55c \ub514\uc2a4\ud50c\ub808\uc774 \uae30\uc220\uc744 \uc120\ud0dd\ud558\uae30\uac00 \uc27d\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub2e4\uc74c \ucc55\ud130\uc5d0\uc11c\ub294 \uc62c\ubc14\ub978 \uc120\ud0dd\uc744 \ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub418\ub3c4\ub85d \ub2e4\uc591\ud55c \uae30\uc220\ub4e4\uc744 \uac1c\ub7b5\uc801\uc73c\ub85c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uac01 \uc720\ud615\uc758 \ub514\uc2a4\ud50c\ub808\uc774\ub294 \ub0b4/\uc678\ubd80 \ub514\uc2a4\ud50c\ub808\uc774 \ucee8\ud2b8\ub864\ub7ec\uc640 \ud504\ub808\uc784 \ubc84\ud37c\uc6a9 RAM\uc744 \uac00\uc9c0\uace0 \uc788\uc73c\uba70 \uc11c\ub85c \ub2e4\ub978 \ubc29\uc2dd\uc73c\ub85c \uad6c\ub3d9\uc774 \uac00\ub2a5\ud55c \ud53d\uc140\uc758 \ud589\uacfc \uc5f4\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. GUI\uc5d0\uc11c \ubcc0\uacbd\uc0ac\ud56d\uc774 \uc788\uc744 \ub54c\ub9cc \uc5c5\ub370\uc774\ud2b8\uac00 \uc9c4\ud589\ub418\uae30 \ub54c\ubb38\uc5d0 \ube48\ubc88\ud55c \uc5c5\ub370\uc774\ud2b8\ub97c \ud544\uc694\ub85c \ud558\uc9c0 \uc54a\ub294 \uae30\uc220\uc774 \uc788\ub294 \ubc18\uba74\uc5d0 \uac01 \ud53d\uc140\uc744 \uc218\uc2dc\ub85c \uc5c5\ub370\uc774\ud2b8\ud574\uc57c \ud558\ub294 \uae30\uc220\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc544\uc8fc \ub2e4\uc591\ud55c \ub514\uc2a4\ud50c\ub808\uc774 \uae30\uc220\ub4e4\uc774 \ucd9c\uc2dc\ub418\uc5b4 \uc788\ub294\ub370, \uadf8\uc911 \uac00\uc7a5 \ub9ce\uc774 \uc0ac\uc6a9\ub418\ub294 \ub514\uc2a4\ud50c\ub808\uc774 \uae30\uc220\ub4e4\uc744 \uc18c\uac1c\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",h({},{id:"lcd-tft"}),"LCD-TFT"),(0,l.kt)("p",null,"TFT\ub294 Thin-Film-Transistor \uc758 \uc57d\uc790\ub85c, \uc561\ud2f0\ube0c \ub9e4\ud2b8\ub9ad\uc2a4\uac00 \uc788\ub294 LCD \ub514\uc2a4\ud50c\ub808\uc774\uc758 \ubcc0\ud615\uc785\ub2c8\ub2e4. LCD-TFT\ub294 \ud574\uc0c1\ub3c4, \ud06c\uae30, \uc778\ud130\ud398\uc774\uc2a4, \uac00\uaca9\ub300 \ub4f1\uc774 \ub2e4\uc591\ud558\ubbc0\ub85c \uc784\ubca0\ub514\ub4dc \uc81c\ud488\uc5d0 \ub110\ub9ac \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,"TFT-LCD\uc758 \ubcc0\ud615 \uc81c\ud488\uc73c\ub85c\ub294 TN \ud328\ub110\uacfc IPS \ud328\ub110\uc774 \uc788\uc2b5\ub2c8\ub2e4. IPS TFT-LCD \uc81c\ud488\uc5d0\ub294 STM32F769 DISCO\uc640 STM32H747 DISCO\uac00 \uc788\uc73c\uba70, \ub450 \ud328\ub110 \ubaa8\ub450 800*480 MIPI-DSI TFT IPS LCD \ub514\uc2a4\ud50c\ub808\uc774\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4. TFT-LCD TN \ub514\uc2a4\ud50c\ub808\uc774\uc5d0\ub294 STM32F746G DISCO\uc640 STM32H7B3I-DK\uac00 \uc788\uc2b5\ub2c8\ub2e4. \ub450 \uae30\uc220 \ubaa8\ub450 \ub2e4\uc591\ud55c \ud488\uc9c8\uc758 \uc81c\ud488\uc774 \ucd9c\uc2dc\ub418\uc5b4 \uc788\uace0 \uc0c9\uc0c1 \ud45c\ud604\uacfc \uc2dc\uc57c\uac01\uc5d0\uc11c \uc57d\uac04\uc758 \ucc28\uc774\uac00 \uc788\uc744 \uc218 \uc788\uc9c0\ub9cc IPS \ud328\ub110\uc774 \uc8fc\ub85c \uc131\ub2a5\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,l.kt)(a.Z,{imageSource:"/img/development/hardware-selection/display/display-layers.webp",noShadow:!0,mdxType:"Figure"},"LCD-TFT \uacc4\uce35 \uc608\uc2dc"),(0,l.kt)("h3",h({},{id:"mip"}),"MIP"),(0,l.kt)("p",null,"MIP\ub294 Memory In Pixel\uc758 \uc57d\uc790\ub85c, \ud654\uba74\uc5d0\uc11c \ubcc0\uacbd\uc774 \uc788\uc744 \ub54c\ub9cc \uc804\uc6d0/\ub370\uc774\ud130\uac00 \ud544\uc694\ud55c \ud53d\uc140 \uae30\uc220\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. MIP \ub514\uc2a4\ud50c\ub808\uc774\ub294 \uc800\uc804\ub825 \uc81c\ud488\uc73c\ub85c, \uc800\uc0c9\uc0c1\ubd80\ud130 \ud480 \uceec\ub7ec\uae4c\uc9c0 \ubaa8\ub4e0 GUI\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",h({},{id:"epapereink"}),"ePaper/eInk"),(0,l.kt)("p",null,"eInk \ub514\uc2a4\ud50c\ub808\uc774\ub294 \uc800\uc0c9\uc0c1 \ub514\uc2a4\ud50c\ub808\uc774\ub85c, \uc804\ub825 \uc18c\ube44\uac00 \uc801\uace0 \uc2dc\uc57c\uac01\uc774 \ub113\uc73c\uba70 \uac00\ub3c5\uc131\uc774 \ub192\uc740 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uac00\uc7a5 \uc801\ud569\ud569\ub2c8\ub2e4. TouchGFX \uc758 \uac1c\ubc1c \ud30c\ud2b8\ub108\uc778 SDATAWAY\uc5d0\uc11c\ub294 STM32F412\uc5d0\uc11c TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc2e4\ud589\ud558\ub294 eInk \ub514\uc2a4\ud50c\ub808\uc774\ub97c \uc2dc\uc5f0\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. (",(0,l.kt)("a",h({parentName:"p"},{href:"https://www.touchgfx.com/cases/e-ink/"}),"https://www.touchgfx.com/cases/e-ink/")," \ucc38\uc870)."),(0,l.kt)(a.Z,{imageSource:"/img/development/hardware-selection/display/e-ink.webp",noShadow:!0,mdxType:"Figure"},"E-Ink"),(0,l.kt)("h2",h({},{id:"display-interface-overview"}),"\ub514\uc2a4\ud50c\ub808\uc774 \uc778\ud130\ud398\uc774\uc2a4 \uac1c\uc694"),(0,l.kt)("p",null,"\ub514\uc2a4\ud50c\ub808\uc774\ub294 \ub2e4\uc591\ud55c \uc778\ud130\ud398\uc774\uc2a4\ub97c \ud1b5\ud574 MCU\uc5d0 \uc5f0\uacb0\ub429\ub2c8\ub2e4. \ub514\uc2a4\ud50c\ub808\uc774 \uc778\ud130\ud398\uc774\uc2a4\ub294 \ub9e4\uac1c\ubcc0\uc218\uc5d0 \ub530\ub77c \ub2e4\ub985\ub2c8\ub2e4. \uc544\ub798 \uc139\uc158\uc5d0\uc11c\ub294 \ud544\uc694\ud55c \ud540\uc758 \uac1c\uc218\ub098 \uac16\uac00\uc9c0 \ud574\uc0c1\ub3c4\ub97c \uc9c0\uc6d0\ud558\ub294 \ucd5c\ub300 \ub300\uc5ed\ud3ed\uacfc \uac19\uc740 \uadf8\ub798\ud53d \uad00\ub828 \ub9e4\uac1c\ubcc0\uc218\uc5d0 \ub300\ud574 \uc0b4\ud3b4\ubd05\ub2c8\ub2e4."),(0,l.kt)("p",null,"TouchGFX\ub294 \ubaa8\ub4e0 \ub514\uc2a4\ud50c\ub808\uc774 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc73c\uba70, STM32 \ub9c8\uc774\ud06c\ub85c\ucee8\ud2b8\ub864\ub7ec\ub294 Motorola 6800, Intel 8080, SPI, RGB-TFT \ubc0f MIPI-DSI\uc5d0 \uc5f0\uacb0\ub418\ub294 \ub514\uc2a4\ud50c\ub808\uc774 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ub2e4\uc591\ud558\uac8c \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",h({parentName:"tr"},{align:null}),"\uc778\ud130\ud398\uc774\uc2a4"),(0,l.kt)("th",h({parentName:"tr"},{align:null}),"\ud540 \uac1c\uc218"),(0,l.kt)("th",h({parentName:"tr"},{align:null}),"\ubaa9\ud45c \ud574\uc0c1\ub3c4"),(0,l.kt)("th",h({parentName:"tr"},{align:null}),"\ucd5c\ub300 \ub300\uc5ed\ud3ed"),(0,l.kt)("th",h({parentName:"tr"},{align:null}),"\uc7a5\uc810"),(0,l.kt)("th",h({parentName:"tr"},{align:null}),"\ub2e8\uc810"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",h({parentName:"tr"},{align:null}),"SPI"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"4*"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"\ucd5c\ub300 480*272"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"16 MHz"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"I2C\ubcf4\ub2e4 \ube60\ub978 \uac04\ub2e8\ud55c \ud558\ub4dc\uc6e8\uc5b4 \uc778\ud130\ud398\uc774\uc2a4,"),(0,l.kt)("td",h({parentName:"tr"},{align:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",h({parentName:"tr"},{align:null}),"\ubcd1\ub82c 8080/6800 (FMC)"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"8/16*"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"\ucd5c\ub300 480*272"),(0,l.kt)("td",h({parentName:"tr"},{align:null})),(0,l.kt)("td",h({parentName:"tr"},{align:null})),(0,l.kt)("td",h({parentName:"tr"},{align:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",h({parentName:"tr"},{align:null}),"RGB-TFT (LTDC)"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"8/18/24*"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"\ucd5c\ub300 1280*800"),(0,l.kt)("td",h({parentName:"tr"},{align:null})),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"\uace0\uc131\ub2a5, \ub0ae\uc740 \ube44\uc6a9"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"\ub9ce\uc740 \ud540 \uac1c\uc218, \ubcd1\ub82c \ud1b5\uc2e0\uc740 EMC \ubb38\uc81c\ub97c \uc77c\uc73c\ud0ac \uc218 \uc788\uc73c\uba70 \ub354 \ub192\uc740 \ud074\ub85d \uc8fc\ud30c\uc218\uac00 \ud544\uc694\ud560 \uc218 \uc788\uc74c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",h({parentName:"tr"},{align:null}),"MIPI-DSI (LTDC)"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"4/10"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"\ucd5c\ub300 1280*800"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"80Mbps ~ 1.5Gbps"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"\uace0\uc131\ub2a5, \uc801\uc740 \ud540 \uac1c\uc218"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"\ubcf5\uc7a1\ud55c \ud504\ub85c\ud1a0\ucf5c \ubc0f \ub4dc\ub77c\uc774\ubc84")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",h({parentName:"tr"},{align:null}),"LVDS**"),(0,l.kt)("td",h({parentName:"tr"},{align:null})),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"1366*768"),(0,l.kt)("td",h({parentName:"tr"},{align:null})),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"\ub0ae\uc740 EMC/\uac04\uc12d, \ube60\ub978 \uc18d\ub3c4"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"\ube0c\ub9ac\uc9c0 \ud544\uc694\ud568")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud130\uce58, \uc804\uc6d0, \uc81c\uc5b4 \uc2e0\ud638 \ub4f1\uc744 \uc704\ud574 \ubcc4\ub3c4\uc758 \ud540\uc774 \ud544\uc694\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"** LVDS \ub514\uc2a4\ud50c\ub808\uc774\uc640 \uc5f0\uacb0\ud558\ub824\uba74 \ube0c\ub9ac\uc9c0\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.")),(0,l.kt)("h3",h({},{id:"brightness-and-backlight"}),"\ubc1d\uae30 \ubc0f \ubc31\ub77c\uc774\ud2b8"),(0,l.kt)("p",null,"\ubc1d\uae30\ub294 \uc8fc\ub85c cd/m\xb2 \ub2e8\uc704\ub85c \uce21\uc815\ub429\ub2c8\ub2e4. \ubc31\ub77c\uc774\ud2b8\ub294 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0\uc11c \uc804\ub825 \uc18c\ubaa8\uac00 \uac00\uc7a5 \ud070 \ubd80\ubd84\uc785\ub2c8\ub2e4. \ud587\ube5b\uc5d0\uc11c\ub294 600cd/m\xb2 \uc815\ub3c4\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. \ubc1d\uae30\ub97c \ub192\uc774\uac8c \ub418\uba74 \uc628\ub3c4\uac00 \ub192\uc544\uc838\uc11c LED\uc758 \uc218\uba85\uc774 \uc904\uc5b4\ub4ed\ub2c8\ub2e4."),(0,l.kt)("h3",h({},{id:"viewing-position-and-color-inversion"}),"\uc2dc\uc57c \uc704\uce58 \ubc0f \uc0c9 \ubc18\uc804"),(0,l.kt)("p",null,"\ub514\uc2a4\ud50c\ub808\uc774\ub97c \uc81c\ud488\uc5d0 \ub0b4\uc7a5\ud560 \ub54c\ub294 \uc0ac\uc6a9\uc790\uac00 \uac00\uc9c8 \uc218 \uc788\ub294 \uc2dc\uc57c \uc704\uce58\ub97c \uc608\uc0c1 \ubc0f \ud30c\uc545\ud558\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4. \uc77c\ubd80 \ub514\uc2a4\ud50c\ub808\uc774\uc758 \uacbd\uc6b0 \ud2b9\uc815\ud55c \uc2dc\uc57c \uc704\uce58\uc5d0\uc11c \uc0c9 \ubc18\uc804\uc774 \uc77c\uc5b4\ub0a0 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc989, \uc0ac\uc6a9\uc790\uac00 \uadf8\ub798\ud53d \ub514\uc790\uc774\ub108\uc5d0 \uc758\ud574 \ub514\uc790\uc778\ub41c \uc815\ud655\ud55c \uc0c9\uc0c1\uc744 \ubcf4\uba74\uc11c GUI\ub97c \uc6b4\uc6a9\ud558\uace0 \uacbd\ud5d8\ud560 \uc218 \uc788\ub3c4\ub85d \uc62c\ubc14\ub978 \uc704\uce58\uc5d0 \ub514\uc2a4\ud50c\ub808\uc774\ub97c \uc124\uce58\ud558\ub294 \uac83\uc774 \uae4c\ub2e4\ub85c\uc6b8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"TN \ud328\ub110\uc5d0\uc11c\ub294 \uc0c9 \ubc18\uc804\uc774 \uc77c\uc5b4\ub0a0 \uc218 \uc788\uc2b5\ub2c8\ub2e4. SWV \ud544\ub984\uc744 \ucd94\uac00\ud558\uba74 \uc2dc\uc57c\uac01\uc744 \ub192\uc774\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)(a.Z,{imageSource:"/img/development/hardware-selection/display/viewing-position.webp",mdxType:"Figure"},"\uc2dc\uc57c \uc704\uce58\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9c0\ub294 \uc0c9\uc0c1"),(0,l.kt)("h3",h({},{id:"display-lifetime"}),"\ub514\uc2a4\ud50c\ub808\uc774 \uc218\uba85(lifetime)"),(0,l.kt)("p",null,"\uc218\uba85(lifetime)\uc774\ub780 \ub514\uc2a4\ud50c\ub808\uc774\uac00 25\ub3c4\uc5d0\uc11c \uc808\ubc18 \ubc1d\uae30\uc5d0 \ub3c4\ub2ec\ud560 \ub54c\uae4c\uc9c0\uc758 \uc2dc\uac04\uc73c\ub85c \uc815\uc758\ub429\ub2c8\ub2e4. \uc81c\ud488\uc758 \ub77c\uc774\ud504 \uc0ac\uc774\ud074(life cycle)\uc774 \uae34 \uacbd\uc6b0\uc5d0\ub294 \uc774 \ub9e4\uac1c\ubcc0\uc218\ub97c \ubc18\ub4dc\uc2dc \uace0\ub824\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("h3",h({},{id:"pixel-density"}),"\ud53d\uc140 \ubc00\ub3c4"),(0,l.kt)("p",null,"\ud53d\uc140 \ubc00\ub3c4\ub294 \uc778\uce58 \ub610\ub294 \ud3c9\ubc29 \uc778\uce58\ub2f9 \ud45c\uc2dc\ub418\ub294 \ud53d\uc140\uc758 \uc218\ub85c \uc815\uc758\ub429\ub2c8\ub2e4. \uc801\ud569\ud55c \ud53d\uc140 \ubc00\ub3c4\ub294 \ucd5c\uc885 \uc0ac\uc6a9\uc790\uc758 \uae30\ub300\uce58, \ud658\uacbd, \ub514\uc790\uc778 \uc694\uad6c\uc0ac\ud56d \ub4f1\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9d1\ub2c8\ub2e4. \uc774\ub7f0 \uc810\uc744 \uace0\ub824\ud574 \ubcfc \ub54c \uace0\uc0ac\uc591 \ud734\ub300\ud3f0\uc740 6.1\uc778\uce58 2340x1080\uc5d0\uc11c \uc81c\uacf1 \uc778\uce58\ub2f9 \ud53d\uc140 \ubc00\ub3c4\uac00 178,500\uc778 \ubc18\uba74, \uc77c\ubc18\uc801\uc73c\ub85c \uc0ac\uc6a9\ub418\ub294 5\uc778\uce58 TFT \ub514\uc2a4\ud50c\ub808\uc774\ub294 800x480\uc5d0\uc11c \uc81c\uacf1 \uc778\uce58\ub2f9 \ud53d\uc140 \ubc00\ub3c4\uac00 34.816\uc785\ub2c8\ub2e4."),(0,l.kt)(a.Z,{imageSource:"/img/development/hardware-selection/display/pixel-density.webp",noShadow:!0,mdxType:"Figure"},"\uc800/\uc911/\uace0 \ud53d\uc140 \ubc00\ub3c4"),(0,l.kt)("p",null,"\uc81c\uacf1 \uc778\uce58\ub2f9 \ud53d\uc140 \ub2e8\uc704\ub85c \uce21\uc815\ub418\ub294 \uc77c\ubd80 \ud45c\uc900 \ud574\uc0c1\ub3c4, \ub514\uc2a4\ud50c\ub808\uc774 \ud06c\uae30 \ubc0f \ud53d\uc140 \ubc00\ub3c4(PPI",(0,l.kt)("sup",null,"2"),"):"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",h({parentName:"tr"},{align:null})),(0,l.kt)("th",h({parentName:"tr"},{align:null})),(0,l.kt)("th",h({parentName:"tr"},{align:null})))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",h({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"QVGA 320*240")),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"2.4\u201d (27,777 PPI",(0,l.kt)("sup",null,"2"),")"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"3.5\u201d (13,061 PPI",(0,l.kt)("sup",null,"2"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",h({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"WQVGA 480*272")),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"4,3\u201d (16,462 PPI",(0,l.kt)("sup",null,"2"),")"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"5\u201d (12,175 PPI",(0,l.kt)("sup",null,"2"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",h({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"HVGA 480*320")),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"3.5\u201d (27,167 PPI",(0,l.kt)("sup",null,"2"),")"),(0,l.kt)("td",h({parentName:"tr"},{align:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",h({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"VGA 640*480")),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"5,7\u201d (19,698 PPI",(0,l.kt)("sup",null,"2"),")"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"6.4 (15,625 PPI",(0,l.kt)("sup",null,"2"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",h({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"WVGA 800*480")),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"4\u201d (54,400 PPI",(0,l.kt)("sup",null,"2"),")"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"5\u201d (34,816 PPI",(0,l.kt)("sup",null,"2"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",h({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"WSVGA 1024*600")),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"7\u201d (28,746 PPI",(0,l.kt)("sup",null,"2"),")"),(0,l.kt)("td",h({parentName:"tr"},{align:null}),"10,1\u201d (13,808 PPI",(0,l.kt)("sup",null,"2"),")")))),(0,l.kt)("p",null,"\uc77c\ubd80 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uacbd\uc6b0 \ub514\uc2a4\ud50c\ub808\uc774\ub97c \uc544\uc8fc \uc790\uc138\ud788 \uc0b4\ud3b4\ubcf4\uc9c0 \uc54a\ub294 \ud55c\uc740 \uadf8 \ucc28\uc774\ub97c \uc2dd\ubcc4\ud558\uae30 \uc5b4\ub835\uc2b5\ub2c8\ub2e4. \ud53d\uc140 \ubc00\ub3c4\uc758 \uc608\ub85c STM32F476DISCO(16,462 PPI",(0,l.kt)("sup",null,"2"),")\uc640 STM32F769DISCO(54,400 PPI",(0,l.kt)("sup",null,"2"),")\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc704\uc5d0 \ub098\uc640 \uc788\ub294 \uc5ec\ub7ec \ud53d\uc140 \ubc00\ub3c4\ub294 \uacbd\uc6b0\uc5d0 \ub530\ub77c \ub3d9\uc801 \uc0c9\uc0c1 \ubc94\uc704\uc640 \uc548\ud2f0 \uc568\ub9ac\uc5b4\uc2f1\uc5d0 \uc601\ud5a5\uc744 \uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h4",h({},{id:"dynamic-color-range"}),"\ub3d9\uc801 \uc0c9\uc0c1 \ubc94\uc704"),(0,l.kt)("p",null,"\ub3d9\uc801 \uc0c9\uc0c1 \ubc94\uc704\ub294 \ud751\uc0c9 \ubc0f \ubc31\uc0c9\uacfc \uac19\uc774 \ub300\uc870\ub418\ub294 \ub450 \uc0c9\uc0c1 \uac04\uc758 \ube44\uc728\uc785\ub2c8\ub2e4. \uc704\uc758 \uc608\uc5d0\uc11c \ud30c\ub780\uc0c9\uacfc \ud770\uc0c9\uc5d0\ub294 \ub2e4\ub978 \uc218\uc900\uc758 \ud770\uc0c9\uacfc \ud30c\ub780\uc0c9\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc67c\ucabd \uadf8\ub9bc\uc740 \ud53d\uc140 \ubc00\ub3c4\uac00 \ub0ae\uace0 \uc624\ub978\ucabd \uadf8\ub9bc\uc740 \ud45c\ud604\ub418\ub294 \ubaa8\ub4e0 \uc0c9\uc0c1\uc744 \ubcf4\uc5ec\uc8fc\uae30 \uc704\ud574 \ub9ce\uc740 \ud53d\uc140\uc744 \uac00\uc9c0\uace0 \uc788\uc5b4 \ub2e4\ub978 \uc0c9\uc0c1\uacfc \uac00\uc7a5\uc790\ub9ac \uc0ac\uc774\uc758 \uc804\ud658\uc774 \ub354 \ubd80\ub4dc\ub7fd\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h4",h({},{id:"anti-aliasing"}),"\uc548\ud2f0 \uc568\ub9ac\uc5b4\uc2f1"),(0,l.kt)("p",null,"\ud53d\uc140 \ubc00\ub3c4\uac00 \ub108\ubb34 \ub0ae\uc73c\uba74 \uacc4\ub2e8 \ud6a8\uacfc\uac00 \ub098\ud0c0\ub0a0 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc548\ud2f0 \uc568\ub9ac\uc5b4\uc2f1\uc744 \uc0ac\uc6a9\ud558\uba74 \uc774\ubbf8\uc9c0\uc5d0\uc11c \uc774\ub7ec\ud55c \uacc4\ub2e8 \ud6a8\uacfc\uac00 \ub098\ud0c0\ub098\ub294 \uac00\uc7a5\uc790\ub9ac\ub97c \ub9e4\ub044\ub7fd\uac8c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucc98\uc74c \ub450 \uac1c\uc758 \ud30c\ub780\uc0c9 \uc6d0\uc744 \ubcf4\uba74 \uacc4\ub2e8 \ud6a8\uacfc\uac00 \ub098\ud0c0\ub09c \uac83\uc744 \uc54c \uc218 \uc788\ub294\ub370, \uc774\ub294 \ud53d\uc140 \ubc00\ub3c4\ub85c \uc778\ud574 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0\uc11c \ud53d\uc140\uc744 \ucda9\ubd84\ud788 \ud45c\ud604\ud560 \uc218 \uc5c6\uae30 \ub54c\ubb38\uc5d0 \uc548\ud2f0 \uc568\ub9ac\uc5b4\uc2f1\uc744 \ucda9\ubd84\ud788 \uc801\uc6a9\ud560 \ub9cc\ud07c \uc0c9\uc0c1 \ubc94\uc704\ub97c \ud3ed\ub113\uac8c \uc801\uc6a9\ud558\uc9c0 \ubabb\ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,l.kt)(a.Z,{imageSource:"/img/development/hardware-selection/display/anti-aliasing.webp",noShadow:!0,mdxType:"Figure"},"\uc548\ud2f0 \uc568\ub9ac\uc5b4\uc2f1"),(0,l.kt)("h3",h({},{id:"environment"}),"\ud658\uacbd"),(0,l.kt)("p",null,"\ud658\uacbd\uc740 \uc0ac\uc6a9\ud560 \ub514\uc2a4\ud50c\ub808\uc774\ub97c \uacb0\uc815\ud560 \ub54c \ubc18\ub4dc\uc2dc \uace0\ub824\ud574\uc57c \ud560 \uc694\uc778\uc785\ub2c8\ub2e4. \ub2e4\uc74c\uacfc \uac19\uc740 \uc0ac\ud56d\uc744 \uc790\ubb38\ud574\ubd10\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\ub514\uc2a4\ud50c\ub808\uc774\uac00 \uc9c1\uc0ac\uad11\uc120\uc5d0 \ub178\ucd9c\ub418\ub294\uac00?")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\ucda9\uaca9\uc5d0 \uac15\ud574\uc57c \ud558\ub294 \uac70\uce5c \ud658\uacbd\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294\uac00?")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\uc7a5\uac11\uc744 \ub07c\uace0 \ucde8\uae09\ud558\uace0 \uc788\ub294\uac00?")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\ud30c\uc190 \ubc29\uc9c0\uac00 \ud544\uc694\ud55c\uac00?")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\ubb3c\ub9ac\uc801 \ubc84\ud2bc\uc73c\ub85c\ub9cc \uc791\ub3d9\ub418\uace0 \uc788\ub294\uac00?"))),(0,l.kt)("p",null,"\uc774\ub7ec\ud55c \uc9c8\ubb38\uc5d0 \ub2f5\ud558\ub2e4 \ubcf4\uba74 \uc5b4\ub5a4 \ud130\uce58 \uae30\uc220\uc774 \uc801\ud569\ud55c\uc9c0, \ub354 \ub098\uc544\uac00 \ud130\uce58 \uae30\uc220 \uc790\uccb4\uac00 \ud544\uc694\ud55c\uc9c0 \uc5ec\ubd80\ub97c \uc798 \ud310\ub2e8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)(r.Z,{mdxType:"Note"},"TouchGFX\ub294 \ud130\uce58\uc2dd/\ube44\ud130\uce58\uc2dd \ub514\uc2a4\ud50c\ub808\uc774\uc5d0\uc11c \uc2e4\ud589\uc774 \ub418\uba70, TouchGFX GUI\ub294 \ubc84\ud2bc, \uc190 \ubc0f \uc74c\uc131 \uc81c\uc2a4\ucc98\ub85c\ub3c4 \uc81c\uc5b4\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",h({},{id:"touch--non-touch-displays"}),"\ud130\uce58\uc2dd/\ube44\ud130\uce58\uc2dd \ub514\uc2a4\ud50c\ub808\uc774"),(0,l.kt)("p",null,"\ud604\uc7ac \uac10\uc555\uc2dd, \uc815\uc801\uc2dd(\ud45c\uba74\ud615, \ud22c\uc601\ud615), SAW \ud130\uce58\uc2dd, \uc801\uc678\uc120 \ud130\uce58\uc2dd \ub4f1 \ub2e4\uc591\ud55c \ud130\uce58 \uae30\uc220\uc774 \ucd9c\uc2dc\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uc139\uc158\uc5d0\uc11c\ub294 \uc774\ub7ec\ud55c \uae30\uc220\ub4e4 \uc911 \uc77c\ubd80\ub9cc \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h4",h({},{id:"capacitive-touch"}),"\uc815\uc804\uc2dd \ud130\uce58"),(0,l.kt)("p",null,"\uac00\uc7a5 \uc778\uae30 \uc788\ub294 \ud130\uce58 \uae30\uc220 \uc911 \ud558\ub098\ub85c, \uc544\ub798\uc640 \uac19\uc740 \ub450 \uac00\uc9c0 \uc13c\uc2f1 \uae30\uc220\ub85c \uad6c\ud604\ub429\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud55c \uc190\uac00\ub77d\uc73c\ub85c \ud130\uce58\ud560 \uc218 \uc788\ub294 \uc790\uccb4 \uc815\uc804\uc2dd \ud130\uce58 \uae30\uc220"),(0,l.kt)("li",{parentName:"ul"},"\uba40\ud2f0 \ud130\uce58\ub97c \uc9c0\uc6d0\ud558\uc9c0\ub9cc \ubb3c\uc774\ub098 \uc2b5\uae30\uc5d0 \ub178\ucd9c\ub418\uba74 \ud130\uce58 \uac10\ub3c4\uac00 \ub5a8\uc5b4\uc9c0\ub294 \uc0c1\ud638 \uc815\uc804\uc2dd \ud130\uce58 \uae30\uc220(TouchGFX\uc5d0\uc11c\ub294 \uba40\ud2f0 \ud130\uce58\uac00 \uc9c0\uc6d0\ub418\uc9c0 \uc54a\uc74c)")),(0,l.kt)("p",null,"STM32H7B3I DISCO, STM32H750 DISCO, STM32F746G DISCO\uc640 \uac19\uc774 \ub300\ub2e4\uc218\uc758 STM32 DISCO \ubcf4\ub4dc\ub4e4\uc740 \uc815\uc804\uc2dd \ud130\uce58 \uae30\uc220\uc744 \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h4",h({},{id:"resistive-touch"}),"\uac10\uc555\uc2dd \ud130\uce58"),(0,l.kt)("p",null,"\uac10\uc555\uc2dd \ud130\uce58\ub294 \uae30\uacc4\uc2dd \uc555\ub825\uc73c\ub85c \ub3d9\ucc29\ud558\ub294 \uac04\ub2e8\ud55c \uae30\uc220\uc774\uba70 ADC\ub098 \uac04\ub2e8\ud55c \ud130\uce58 \ucee8\ud2b8\ub864\ub7ec\ub9cc\uc744 \ud544\uc694\ub85c\ud569\ub2c8\ub2e4. \uae30\uc220 \uc131\uc219\ub3c4\ub85c \uc778\ud574 \uac00\uaca9\uc774 \uc800\ub834\ud569\ub2c8\ub2e4. \ud45c\uba74\uc774 \uae01\ud798\uacfc \ub9c8\ubaa8\uc5d0 \ub354 \uc798 \ubcf4\ud638\ub418\uae30 \ub54c\ubb38\uc5d0 \ud30c\uc190 \ubc29\uc9c0\uac00 \ub354 \uc5b4\ub824\uc6b0\uba70 \ud0dc\uc591\uad11 \uc544\ub798 \uac00\ub3c5\uc131\uc774 \ub354 \ub0ae\uc2b5\ub2c8\ub2e4. STM32F429 DISCO \ubcf4\ub4dc\ub294TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc9c0\uc6d0\ub418\ub294 \uac10\uc555\uc2dd \ud130\uce58\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,l.kt)("h4",h({},{id:"non-touch"}),"\ube44\ud130\uce58\uc2dd"),(0,l.kt)("p",null,"GUI\uac00 \ubc84\ud2bc\uc73c\ub85c \uc81c\uc5b4\ub418\uc5b4 \uc774\ubbf8\uc9c0/\ube44\ub514\uc624\ub9cc \ud45c\uc2dc\ub418\uac70\ub098 \ub2e4\ub978 \uc7a5\uce58\ub97c \ud1b5\ud574 \uc678\ubd80\uc5d0\uc11c \uc81c\uc5b4\ub418\ub294 \uacbd\uc6b0\uc5d0\ub294 \uc81c\ud488\uc5d0 \ud130\uce58 \uae30\uc220\uc744 \ucd94\uac00\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \ub514\uc2a4\ud50c\ub808\uc774\uc5d0 \ud130\uce58 \uacc4\uce35\uc744 \ucd94\uac00\ud558\uc9c0 \uc54a\uc73c\uba74 \uac00\uaca9\uc774 \ub0ae\uc544\uc9d1\ub2c8\ub2e4."),(0,l.kt)("h3",h({},{id:"displays-with-ram"}),"RAM \ub0b4\uc7a5 \ub514\uc2a4\ud50c\ub808\uc774"),(0,l.kt)("p",null,"Motorla 6800, Intel 8080, SPI \ub610\ub294 MIPI-DSI \uc778\ud130\ud398\uc774\uc2a4\uac00 \ud3ec\ud568\ub41c \ub514\uc2a4\ud50c\ub808\uc774\uc5d0\ub294 \ubcf4\ud1b5 \ud558\ub098\uc758 \uc804\uccb4 \ud504\ub808\uc784 \ubc84\ud37c\uc758 \ud06c\uae30\ub97c \uac00\uc9c0\ub294 RAM(GRAM)\uc774 \ub0b4\uc7a5\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc720\ud615\uc758 \ub514\uc2a4\ud50c\ub808\uc774\ub294 SPI, FMC \ub610\ub294 DSI-\ud638\uc2a4\ud2b8(LTDC)\ub97c \ud1b5\ud574 MCU\uc5d0 \uc5f0\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub450 \ubc88\uc9f8 RAM(\ud504\ub808\uc784 \ubc84\ud37c)\uc740 \ub514\uc2a4\ud50c\ub808\uc774 RAM \uc678\ubd80\uc5d0 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4(MCU \ub610\ub294 \uc678\ubd80 RAM)."),(0,l.kt)(a.Z,{imageSource:"/img/development/hardware-selection/display/gram-mipi.webp",noShadow:!0,mdxType:"Figure"},"MIPI-DSI \ub514\uc2a4\ud50c\ub808\uc774"),(0,l.kt)("p",null,"\ud504\ub808\uc784 \ubc84\ud37c\ub97c \uc800\uc7a5\ud558\uae30 \uc704\ud55c \uc678\ubd80 RAM(MCU \uc678\ubd80)\uc774 \ud544\uc694\ud558\uc9c0 \uc54a\uace0 MCU\uc5d0\uc11c \ub0b4\ubd80 RAM\uc774 \uc0ac\uc6a9\ub418\ub294 \uacbd\uc6b0\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. MCU RAM\uc774 \ud558\ub098\uc758 \uc804\uccb4 \ud504\ub808\uc784 \ubc84\ud37c \ud06c\uae30 \ubcf4\ub2e4 \uc791\uc740 \uacbd\uc6b0, \ud5c8\uc6a9\ud558\ub294 \ud504\ub808\uc784 \ubc84\ud37c \uc810\uc720\ub7c9\uc774 \ub9e4\uc6b0 \uc801\uc740 TouchGFX \ubd80\ubd84 \ud504\ub808\uc784 \ubc84\ud37c \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\ub3c4 \ud55c \ubc29\ubc95\uc785\ub2c8\ub2e4."),(0,l.kt)(i.Z,{mdxType:"FurtherReading"},"\uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,l.kt)(o.Z,{to:"../../scenarios/lowering-memory-usage-with-partial-framebuffer",mdxType:"Link"},"\ubd80\ubd84 \ud504\ub808\uc784 \ubc84\ud37c \uc139\uc158\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624.")),(0,l.kt)(a.Z,{imageSource:"/img/development/hardware-selection/display/gram-spi.webp",noShadow:!0,mdxType:"Figure"},"SPI \ub514\uc2a4\ud50c\ub808\uc774"),(0,l.kt)("h3",h({},{id:"non-square-pixels--pixel-aspect-ratio"}),"\ube44(Non)\uc815\uc0ac\uac01\ud615 \ud53d\uc140/\ud53d\uc140 \uc885\ud6a1\ube44"),(0,l.kt)("p",null,"\uac00\uc7a5 \uc77c\ubc18\uc801\uc778 \ud53d\uc140 \ubaa8\uc591\uc740 \uc815\uc0ac\uac01\ud615\uc774\uc9c0\ub9cc \uc77c\ubd80 \ub514\uc2a4\ud50c\ub808\uc774\ub294 \uc815\uc0ac\uac01\ud615\uc774 \uc544\ub2cc \ud53d\uc140\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ud53d\uc140 \ube44\uc728\uc740 \ud53d\uc140 \ub108\ube44\uc640 \ud53d\uc140 \ub192\uc774 \uac04\uc758 \ube44\uc728\uc785\ub2c8\ub2e4. \ub530\ub77c\uc11c \ub108\ube44\uac00 100 \ud53d\uc140\uc774\uace0 \ub192\uc774\uac00 100 \ud53d\uc140\uc778 \uc815\uc0ac\uac01\ud615 \ud53d\uc140\uc744 \uc0ac\uc6a9\ud560 \uacbd\uc6b0 \uc885\ud6a1\ube44\ub294 1/1\uc774 \ub429\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc815\uc0ac\uac01\ud615\uc774 \uc544\ub2cc \ud53d\uc140\uc740 \ud53d\uc140 \uc885\ud6a1\ube44\uac00 \ub2ec\ub77c\uc9d1\ub2c8\ub2e4. \uadf8\ub798\ud53d \ub514\uc790\uc774\ub108\uac00 \uc774\ub97c \uace0\ub824\ud558\uc9c0 \uc54a\uc73c\uba74 \ube44\ud2b8\ub9f5\uc774 \uc544\ub798 \uc608\uc2dc\uc640 \uac19\uc774 \ud655\uc7a5\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)(a.Z,{imageSource:"/img/development/hardware-selection/display/pixel-aspect.webp",noShadow:!0,mdxType:"Figure"},"\ud655\uc7a5\ub41c \ube44\ud2b8\ub9f5"),(0,l.kt)("h3",h({},{id:"cover-lense"}),"\ucee4\ubc84 \ub80c\uc988"),(0,l.kt)("p",null,"\ub514\uc2a4\ud50c\ub808\uc774\ub294 \ub0b4\uc7a5\ud615 GUI \uc81c\ud488\uc758 \uc5bc\uad74\uc774\ubbc0\ub85c, \ucee4\ubc84 \ub80c\uc988\ub97c \ucd94\uac00\ud558\uba74 \uc678\uad00\uacfc \ub290\ub08c\uc744 \uac1c\uc120\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucee4\ubc84 \ub80c\uc988\ub85c \ub514\uc790\uc778, \uae01\ud798 \ubc29\uc9c0, \ucda9\uaca9 \uac15\ub3c4, \uc0c9\uc0c1 \ub4f1\uc744 \uac1c\uc120\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}T.isMDXComponent=!0}}]);