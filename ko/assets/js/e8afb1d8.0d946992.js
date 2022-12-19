"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6744],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),c=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return l.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,h=p["".concat(u,".").concat(d)]||p[d]||m[d]||i;return n?l.createElement(h,o(o({ref:t},s),{},{components:n})):l.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[p]="string"==typeof e?e:r,o[1]=a;for(var c=2;c<i;c++)o[c]=n[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){var l=n(67294);class r extends l.Component{render(){return l.createElement("div",{class:"code-header"},l.createElement("div",null,l.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){var l=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,o=(0,r.Z)(e.imageSource);return t?l.createElement("div",{class:"figure noshadow"},l.createElement("a",{href:o,target:"_blank"},l.createElement("img",{width:n,height:i,src:o})),l.createElement("p",null,e.children)):l.createElement("div",{class:"figure"},l.createElement("a",{href:o,target:"_blank"},l.createElement("img",{width:n,height:i,src:o})),l.createElement("p",null,e.children))}},39487:function(e,t,n){var l=n(67294),r=n(25026);t.Z=function(e){const t=e.width,n=e.height,i=e.points||[],o=(0,r.Z)(e.imageSource);return l.createElement("div",{style:{position:"relative"}},l.createElement("div",{class:"figure"},l.createElement("a",{href:o,target:"_blank"},l.createElement("img",{width:t,height:n,src:o})),i.map((function(e,t){return l.createElement("svg",{style:{position:"absolute",top:0,left:0,pointerEvents:"none"},viewBox:"0 0 500 500"},l.createElement("g",{transform:"translate("+e[0]+", "+e[1]+")"},l.createElement("path",{id:"p1",d:"M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.659 5.381-1.078 1.274-2.303 2.722-3.341 4.697-1.038-1.976-2.263-3.423-3.341-4.697-1.601-1.893-2.659-3.143-2.659-5.381 0-2.984 2.804-5.602 6-5.602z",fill:"white",stroke:"black"}),l.createElement("text",{x:"11.7",y:"9.5","font-size":"x-small","dominant-baseline":"middle","text-anchor":"middle"},t+1)))})),l.createElement("p",null,e.children)))}},29415:function(e,t,n){var l=n(67294),r=n(88678);const i=l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},l.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends l.Component{render(){return l.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=o},88678:function(e,t,n){var l=n(67294);class r extends l.Component{render(){const e=`highlight highlight-${this.props.type}`;return l.createElement("div",{class:e},l.createElement("div",{class:"highlight-heading"},l.createElement("h5",null,l.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),l.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=r},99625:function(e,t,n){n.r(t),n.d(t,{assets:function(){return E},contentTitle:function(){return C},default:function(){return S},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return b}});var l=n(3905),r=n(39130),i=n(44035),o=n(39487),a=n(29415),u=n(22425),c=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&g(e,n,t[n]);if(m)for(var n of m(t))h.call(t,n)&&g(e,n,t[n]);return e};const f={id:"tutorial-04",title:"\ud29c\ud1a0\ub9ac\uc5bc4: \ucee4\uc2a4\ud140 \ub3d9\uc791\uc744 \ucd94\uac00\ud558\uc5ec Scroll Wheel \uc0dd\uc131\ud558\uae30"},C=void 0,v={unversionedId:"tutorials/tutorial-04",id:"tutorials/tutorial-04",title:"\ud29c\ud1a0\ub9ac\uc5bc4: \ucee4\uc2a4\ud140 \ub3d9\uc791\uc744 \ucd94\uac00\ud558\uc5ec Scroll Wheel \uc0dd\uc131\ud558\uae30",description:"\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c\ub294 Custom Container\uc640 Scroll Wheel\uc774\ub77c\ub294 \ub450 \uac00\uc9c0 \uc704\uc82f\uc744 \uc0dd\uc131\ud558\uc5ec \uad6c\uc131\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. Custom Container\ub294 \uc5ec\ub7ec \uac00\uc9c0 \ub2e4\ub978 \uc704\uc82f\uc744 \uacb0\ud569\ud558\uc5ec \uc0c8\ub85c\uc6b4 \uc704\uc82f\uc744 \ub9cc\ub4e4 \uc218 \uc788\uac8c \ud574\uc8fc\ub294 \uc704\uc82f\uc73c\ub85c, \ud574\ub2f9 \uc704\uc82f\ub4e4\uc758 \ud2b9\uc815 \ub3d9\uc791\uc774 Custom Container \uc704\uc82f\uc5d0 \ucd94\uac00\ub429\ub2c8\ub2e4. Scroll Wheel\uc740 \ub2e4\uc218\uc758 \uc120\ud0dd \uac00\ub2a5\ud55c \ud56d\ubaa9\uc73c\ub85c \uad6c\uc131\ub41c \uc2a4\ud06c\ub864 \uba54\ub274\ub97c \ub9cc\ub4e4 \ub54c \uc0ac\uc6a9\ub418\ub294 \uc704\uc82f\uc785\ub2c8\ub2e4. \uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c\ub3c4 \uc0ac\uc6a9\uc790 \ucf54\ub4dc\ub97c \uc0dd\uc131\ud558\uc5ec \uc704\uc82f\uc758 \ub3d9\uc791\uc744 \ubcc0\uacbd\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/tutorials/tutorial-04.mdx",sourceDirName:"tutorials",slug:"/tutorials/tutorial-04",permalink:"/4.17/ko/docs/tutorials/tutorial-04",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-04",title:"\ud29c\ud1a0\ub9ac\uc5bc4: \ucee4\uc2a4\ud140 \ub3d9\uc791\uc744 \ucd94\uac00\ud558\uc5ec Scroll Wheel \uc0dd\uc131\ud558\uae30"},sidebar:"docs",previous:{title:"\ud29c\ud1a0\ub9ac\uc5bc3: \uba40\ud2f0 \uc2a4\ud06c\ub9b0\uc744 \uc0ac\uc6a9\ud558\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158",permalink:"/4.17/ko/docs/tutorials/tutorial-03"},next:{title:"\ud29c\ud1a0\ub9ac\uc5bc5: \ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70 \ubc0f \uc561\uc158 \uc0dd\uc131\ud558\uae30",permalink:"/4.17/ko/docs/tutorials/tutorial-05"}},E={},b=[{value:"1\ub2e8\uacc4: Custom Container \uc0dd\uc131\ud558\uae30",id:"step-1-creating-a-custom-container",level:2},{value:"Custom Container\uc5d0 \uc704\uc82f \ucd94\uac00\ud558\uae30",id:"adding-widgets-to-the-custom-container",level:3},{value:"\uc2a4\ud06c\ub9b0\uc5d0 Custom Container \ucd94\uac00\ud558\uae30",id:"adding-the-custom-container-to-a-screen",level:3},{value:"2\ub2e8\uacc4: Scroll Wheel \uc0dd\uc131\ud558\uae30",id:"step-2-creating-a-scroll-wheel",level:2},{value:"Scroll Wheel \uc0dd\uc131\ud558\uae30",id:"creating-the-scroll-wheel",level:3},{value:"Scroll Wheel\uc5d0 \ud56d\ubaa9 \ucd94\uac00\ud558\uae30",id:"adding-items-to-the-scroll-wheel",level:3},{value:"3\ub2e8\uacc4: \uc0ac\uc6a9\uc790 \ucf54\ub4dc\ub97c Scroll Wheel\uc5d0 \ucd94\uac00\ud558\uae30",id:"step-3-adding-user-code-to-scroll-wheel",level:2},{value:"MenuElement\uc758 \uc774\ubbf8\uc9c0 \ubc0f \ud14d\uc2a4\ud2b8 \ubcc0\uacbd\ud558\uae30",id:"change-image-and-text-in-menuelement",level:3},{value:"\uc2a4\ud06c\ub864 \ud720 \ud56d\ubaa9 \uc5c5\ub370\uc774\ud2b8\ud558\uae30",id:"update-the-items-in-the-scroll-wheel",level:3},{value:"4\ub2e8\uacc4: Scroll Wheel\uc5d0 \ucee4\uc2a4\ud140 \ub3d9\uc791 \ucd94\uac00\ud558\uae30",id:"step-4-adding-custom-behavior-to-scroll-wheel",level:2},{value:"MenuElement\uc5d0 \ucee4\uc2a4\ud140 \ub3d9\uc791 \ucd94\uac00\ud558\uae30",id:"add-custom-behavior-to-menuelement",level:3}],y={toc:b};function S(e){var t,c=e,{components:g}=c,f=((e,t)=>{var n={};for(var l in e)d.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&m)for(var l of m(e))t.indexOf(l)<0&&h.call(e,l)&&(n[l]=e[l]);return n})(c,["components"]);return(0,l.kt)("wrapper",(t=k(k({},y),f),s(t,p({components:g,mdxType:"MDXLayout"}))),(0,l.kt)("p",null,"\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c\ub294 Custom Container\uc640 Scroll Wheel\uc774\ub77c\ub294 \ub450 \uac00\uc9c0 \uc704\uc82f\uc744 \uc0dd\uc131\ud558\uc5ec \uad6c\uc131\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. Custom Container\ub294 \uc5ec\ub7ec \uac00\uc9c0 \ub2e4\ub978 \uc704\uc82f\uc744 \uacb0\ud569\ud558\uc5ec \uc0c8\ub85c\uc6b4 \uc704\uc82f\uc744 \ub9cc\ub4e4 \uc218 \uc788\uac8c \ud574\uc8fc\ub294 \uc704\uc82f\uc73c\ub85c, \ud574\ub2f9 \uc704\uc82f\ub4e4\uc758 \ud2b9\uc815 \ub3d9\uc791\uc774 Custom Container \uc704\uc82f\uc5d0 \ucd94\uac00\ub429\ub2c8\ub2e4. Scroll Wheel\uc740 \ub2e4\uc218\uc758 \uc120\ud0dd \uac00\ub2a5\ud55c \ud56d\ubaa9\uc73c\ub85c \uad6c\uc131\ub41c \uc2a4\ud06c\ub864 \uba54\ub274\ub97c \ub9cc\ub4e4 \ub54c \uc0ac\uc6a9\ub418\ub294 \uc704\uc82f\uc785\ub2c8\ub2e4. \uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c\ub3c4 \uc0ac\uc6a9\uc790 \ucf54\ub4dc\ub97c \uc0dd\uc131\ud558\uc5ec \uc704\uc82f\uc758 \ub3d9\uc791\uc744 \ubcc0\uacbd\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774\ubc88\uc5d0\ub294 \ub354 \ud070 \uc2a4\ud06c\ub9b0\uc744 \uc0ac\uc6a9\ud558\uae30 \ub54c\ubb38\uc5d0 \ud574\uc0c1\ub3c4\uac00 800x480 \ud53d\uc140\uc778 \ubcf4\ub4dc(\uc608: STM32F469 Discovery)\uc5d0 \ub9de\ucdb0 \uc0c8 \ud504\ub85c\uc81d\ud2b8\ub97c \uc2dc\uc791\ud558\uac70\ub098 \uc2dc\ubbac\ub808\uc774\ud130\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"Custom Container \ubc0f Scroll Wheel\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,l.kt)("a",k({parentName:"p"},{href:"../development/ui-development/touchgfx-engine-features/custom-containers"}),"Custom Containers")," \ud398\uc774\uc9c0\uc640 ",(0,l.kt)("a",k({parentName:"p"},{href:"../development/ui-development/ui-components/containers/scroll-wheel"}),"Scroll Wheel")," \ud398\uc774\uc9c0\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,l.kt)("p",null,"\ud29c\ud1a0\ub9ac\uc5bc\uc5d0 \uc0ac\uc6a9\ub418\ub294 \uadf8\ub798\ud53d\uc740 \uc774 ",(0,l.kt)("a",{target:"_blank",href:n(38197).Z},"\ub9c1\ud06c"),"\uc5d0\uc11c \ub2e4\uc6b4\ub85c\ub4dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc560\uc14b(assets) \uc544\ub798 \uc774\ubbf8\uc9c0 \ud3f4\ub354\uc5d0 \ub2e4\uc6b4\ub85c\ub4dc\ud55c \ud30c\uc77c\uc758 \uc555\ucd95\uc744 \ud574\uc81c\ud569\ub2c8\ub2e4. \uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0 \uc0ac\uc6a9\ub41c \ud504\ub85c\uc81d\ud2b8\uc758 \uc774\ubbf8\uc9c0 \ud3f4\ub354 \uacbd\ub85c\ub294 MyApplication2\\assets\\images\uc785\ub2c8\ub2e4."),(0,l.kt)("h2",k({},{id:"step-1-creating-a-custom-container"}),"1\ub2e8\uacc4: Custom Container \uc0dd\uc131\ud558\uae30"),(0,l.kt)("p",null,"\ud29c\ud1a0\ub9ac\uc5bc2\uc758 1\ub2e8\uacc4\uc640 \ub9c8\ucc2c\uac00\uc9c0\ub85c, \uba3c\uc800 TouchGFX Designer\ub97c \uc0ac\uc6a9\ud574 \uc0c8\ub85c\uc6b4 \ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4. \uc0c8\ub85c\uc6b4 \ud504\ub85c\uc81d\ud2b8\uac00 \uc900\ube44\ub418\uba74 TouchGFX Designer\uc758 Screens \ud0ed\uc5d0\uc11c Container \ud0ed\uc73c\ub85c(1) \uc774\ub3d9\ud569\ub2c8\ub2e4."),(0,l.kt)(o.Z,{points:[[56,5]],imageSource:"/img/tutorials/tutorial-04/selecting-cc-4-17.webp",mdxType:"FigureWithPoints"},"Custom Container \uba54\ub274 \uc120\ud0dd"),(0,l.kt)("p",null,"Custom Container \uc0dd\uc131 \ud0ed\uc740 Screens \ud0ed\uacfc \uc720\uc0ac\ud558\uc5ec \uc0c8\ub85c\uc6b4 Custom Cointainer\ub97c \uc0dd\uc131\ud558\ub294 \ubc29\ubc95\uc740 \uc0c8\ub85c\uc6b4 \uc2a4\ud06c\ub9b0\uc744 \uc0dd\uc131\ud558\ub294 \ubc29\ubc95\uacfc \ub3d9\uc77c\ud569\ub2c8\ub2e4. Custom Container\uac00 \uc0dd\uc131\ub418\uba74 \uc704\uc82f\uc744 \ucd94\uac00\ud558\uac70\ub098, Custom Container\uc758 \ud06c\uae30\uc640 \uc774\ub984\uc744 \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,'Container \ud0ed\uc5d0\uc11c "+" \ubc84\ud2bc(1)\uc744 \uc0ac\uc6a9\ud574 \uc0c8\ub85c\uc6b4 Custom Container\ub97c \uc0dd\uc131\ud55c \ud6c4 \uc774\ub984\uc744 "MenuElement"(2)\ub85c, \uac00\ub85c \uae38\uc774\ub97c 390\uc73c\ub85c, \uc138\ub85c \uae38\uc774\ub97c 70\uc73c\ub85c(3) \ubcc0\uacbd\ud569\ub2c8\ub2e4.',(0,l.kt)(o.Z,{points:[[56,8],[435,8],[435,35]],imageSource:"/img/tutorials/tutorial-04/creating-cc-4-17.webp",mdxType:"FigureWithPoints"},"Custom Container \uc0dd\uc131 \ubc0f \uc18d\uc131 \uc124\uc815")),(0,l.kt)("h3",k({},{id:"adding-widgets-to-the-custom-container"}),"Custom Container\uc5d0 \uc704\uc82f \ucd94\uac00\ud558\uae30"),(0,l.kt)("p",null,"Custom Container\ub97c \uc0dd\uc131\ud558\uace0 \uc18d\uc131\uc744 \uc124\uc815\ud588\ub2e4\uba74 \uc774\uc81c \uc704\uc82f\uc744 Custom Container\uc5d0 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c \uc0ac\uc6a9\ub41c Custom Container\ub294 \uc774\ubbf8\uc9c0, \uadf8\ub9ac\uace0 \uc640\uc77c\ub4dc\uce74\ub4dc\uac00 \ud3ec\ud568\ub41c \ud14d\uc2a4\ud2b8 \uc601\uc5ed\uc73c\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4."),(0,l.kt)(a.Z,{mdxType:"FurtherReading"},"\ud14d\uc2a4\ud2b8\ub97c \uc640\uc77c\ub4dc\uce74\ub4dc\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,l.kt)(r.Z,{to:"../development/ui-development/touchgfx-engine-features/texts-and-fonts#wildcards",mdxType:"Link"},"\ud14d\uc2a4\ud2b8 \ubc0f \uae00\uaf34 \ud398\uc774\uc9c0"),"\uc5d0\uc11c \uc640\uc77c\ub4dc\uce74\ub4dc \uc139\uc158\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,l.kt)("p",null,"\ub450 \uc704\uc82f\uc740 \ub2e4\uc74c\uacfc \uac19\uc740 \ubc29\uc2dd\uc73c\ub85c \uc0bd\uc785\ub429\ub2c8\ub2e4."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",k({parentName:"tr"},{align:null}),"\uc704\uc82f"),(0,l.kt)("th",k({parentName:"tr"},{align:null}),"\uc18d\uc131"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",k({parentName:"tr"},{align:null}),"\uc774\ubbf8\uc9c0"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),(0,l.kt)("ul",null,(0,l.kt)("li",null,"\uc774\ub984: icon"),(0,l.kt)("li",null,"\uc774\ubbf8\uc9c0: icon00.png"),(0,l.kt)("li",null,"Location:",(0,l.kt)("ul",null,(0,l.kt)("li",null,"X: 34"),(0,l.kt)("li",null,"Y: 17")))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",k({parentName:"tr"},{align:null}),"TextArea"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),(0,l.kt)("ul",null,(0,l.kt)("li",null,"\uc774\ub984: text"),(0,l.kt)("li",null,"Location:",(0,l.kt)("ul",null,(0,l.kt)("li",null,"X: 93, Y: 23"))),(0,l.kt)("li",null,"Text:",(0,l.kt)("ul",null,(0,l.kt)("li",null,"Text: Menu Element ","<","value",">"),(0,l.kt)("li",null,"Wildcard 1:",(0,l.kt)("ul",null,(0,l.kt)("li",null,"\ucd08\uae30 \uac12: 00"),(0,l.kt)("li",null,"\ubc84\ud37c \ud06c\uae30: 3"))),(0,l.kt)("li",null,"Typography: 20px"),(0,l.kt)("li",null,"Alignment: \uc67c\ucabd"))),(0,l.kt)("li",null,"Appearance:",(0,l.kt)("ul",null,(0,l.kt)("li",null,"Color: #FFFFFFFF")))))))),(0,l.kt)(i.Z,{imageSource:"/img/tutorials/tutorial-04/adding-content-cc-4-17.webp",mdxType:"Figure"},"Custom Container\uc5d0 \ub0b4\uc6a9 \ucd94\uac00\ud558\uae30(TextArea \uc120\ud0dd)"),(0,l.kt)("h3",k({},{id:"adding-the-custom-container-to-a-screen"}),"\uc2a4\ud06c\ub9b0\uc5d0 Custom Container \ucd94\uac00\ud558\uae30"),(0,l.kt)("p",null,'\uc774\uc81c Screens \ud0ed\uc73c\ub85c \ub3cc\uc544\uac00\uc11c Custom Container \uc544\ub798\uc758 \uc704\uc82f \uba54\ub274\uc5d0\uc11c "MenuElement\u201d(1)\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.',(0,l.kt)("br",{parentName:"p"}),"\n","\ubc30\uacbd\uc73c\ub85c \uac80\uc740\uc0c9 \ubc15\uc2a4\ub97c \ubc30\uce58\ud558\uace0 \uc0dd\uc131\ub41c Custom Container\ub97c \uce94\ubc84\uc2a4\uc5d0 \ucd94\uac00\ud569\ub2c8\ub2e4. \uc774\ub54c \uc0bd\uc785\ub41c Containers\ub97c \uc2a4\ud06c\ub9b0\uc5d0\uc11c \uc790\uc720\ub86d\uac8c \uc6c0\uc9c1\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\uc67c\ucabd \uc704\uc82f \ubaa9\ub85d(2)\uc5d0 Custom Containers\uac00 \ud55c \uac00\uc9c0 \uc694\uc18c\ub85c \ud45c\uc2dc\ub429\ub2c8\ub2e4.",(0,l.kt)(o.Z,{points:[[330,10],[50,25]],imageSource:"/img/tutorials/tutorial-04/inserting-cc-4-17.webp",mdxType:"FigureWithPoints"},"Custom Container\ub97c \uc704\uc82f\uc73c\ub85c \uc2a4\ud06c\ub9b0\uc5d0 \uc0bd\uc785\ud558\uae30")),(0,l.kt)("h2",k({},{id:"step-2-creating-a-scroll-wheel"}),"2\ub2e8\uacc4: Scroll Wheel \uc0dd\uc131\ud558\uae30"),(0,l.kt)("p",null,'2\ub2e8\uacc4\uc5d0\uc11c\ub294 1\ub2e8\uacc4\uc5d0\uc11c \ub9cc\ub4e0 Custom Container\uc778 "MenuElement"\ub97c \uc0ac\uc6a9\ud574 Scroll Wheel\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4. 1\ub2e8\uacc4\uc5d0\uc11c \uc124\uba85\ud588\ub4ef\uc774 Scroll Wheel\uc740 \ub2e4\uc218\uc758 \uc120\ud0dd \uac00\ub2a5\ud55c \ud56d\ubaa9\uc73c\ub85c \uad6c\uc131\ub41c \uc2a4\ud06c\ub864 \uba54\ub274\ub97c \ub9cc\ub4e4 \ub54c \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uc2a4\ud06c\ub864\ud558\uba74 \ud720\uc758 \ud56d\ubaa9\ub4e4\uc774 \ub3d9\uc801\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ub418\uace0, \ud55c \ud56d\ubaa9 \uc120\ud0dd\ud558\uba74 \uac15\uc870 \ud45c\uc2dc\ub429\ub2c8\ub2e4.'),(0,l.kt)("p",null,"Scroll Wheel\uc5d0 \ud56d\ubaa9\uc744 \ucd94\uac00\ud558\ub824\uba74 \u201c\ud56d\ubaa9 \ud15c\ud50c\ub9bf\u201d\uc73c\ub85c \uc0ac\uc6a9\ud560 Custom Container\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4. \uc5ec\uae30\uc11c \u201c\ud56d\ubaa9 \ud15c\ud50c\ub9bf\u201d\uc774\ub77c\ub294 \uac1c\ub150\uc740 Custom Container\uc758 \uc704\uc82f\uc744 \uc2a4\ud06c\ub864 \ud720\uc5d0 \ud3ec\ud568\ub418\ub294 \ud56d\ubaa9\uc744 \ub9cc\ub4e4 \uae30\ucd08\ub85c \uc0ac\uc6a9\ud558\ub294 \ub370\uc11c \ube44\ub86f\ub41c \uac83\uc73c\ub85c, \uc0ac\uc6a9\uc790 \ucf54\ub4dc\ub97c \uc0ac\uc6a9\ud574 \ub7f0\ud0c0\uc784\uc5d0 \ud56d\ubaa9\uc758 \uc704\uc82f\uc744 \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",k({},{id:"creating-the-scroll-wheel"}),"Scroll Wheel \uc0dd\uc131\ud558\uae30"),(0,l.kt)("p",null,'Scroll Wheel\uc744 \uc0dd\uc131\ud558\ub824\uba74 \uba3c\uc800 \uc2a4\ud06c\ub9b0\uc5d0 \uc774\ubbf8 \uc0bd\uc785\ub41c Custom Containers\ub97c \uc81c\uac70\ud558\uc5ec \ubc30\uacbd\uc5d0 \uac80\uc740\uc0c9 \ubc15\uc2a4\ub9cc \ub0a8\uaca8\ub461\ub2c8\ub2e4. Containers \uc139\uc158 \uc544\ub798 \uc704\uc82f \uba54\ub274\uc5d0\uc11c Scroll Wheel\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4(1). Scroll Wheel\uc744 \uc0dd\uc131\ud558\uace0 Location \uc18d\uc131\uc5d0\uc11c X\ub97c 208, Y\ub97c 45, \uadf8\ub9ac\uace0 H\ub97c 390\uc73c\ub85c \uc124\uc815\ud55c \ub2e4\uc74c \uc774\ub984\uc744 "scrollWheel"\ub85c \ubcc0\uacbd\ud569\ub2c8\ub2e4.'),(0,l.kt)(o.Z,{points:[[280,65]],imageSource:"/img/tutorials/tutorial-04/insert-sw-4-17.webp",mdxType:"FigureWithPoints"},"Scroll Wheel\uc744 \uc0bd\uc785\ud558\uace0 \uc774\ub984 \ubc0f \uc704\uce58 \uc18d\uc131 \uc124\uc815\ud558\uae30"),(0,l.kt)("h3",k({},{id:"adding-items-to-the-scroll-wheel"}),"Scroll Wheel\uc5d0 \ud56d\ubaa9 \ucd94\uac00\ud558\uae30"),(0,l.kt)("p",null,'Scroll Wheel \uc18d\uc131 "Item Template\u201d \uc544\ub798\uc758 \ub4dc\ub86d\ub2e4\uc6b4 \ubaa9\ub85d\uc744 \uc0ac\uc6a9\ud574 1\ub2e8\uacc4\uc5d0\uc11c \uc0dd\uc131\ud55c "MenuElement"\ub97c "Item Template"\uc73c\ub85c \uc120\ud0dd\ud569\ub2c8\ub2e4(1). Scroll Wheel\uc5d0 \ud3ec\ud568\ub418\ub294 \ud56d\ubaa9 \uc218 \uc5ed\uc2dc "Item Template\u201d \uc544\ub798\uc5d0\uc11c \uc124\uc815\ud569\ub2c8\ub2e4. \ud56d\ubaa9 \uc218\ub97c 20\uc73c\ub85c \uc124\uc815\ud569\ub2c8\ub2e4.',(0,l.kt)("br",{parentName:"p"}),"\n",'Scroll Wheel\uc740 \uc120\ud0dd\ud55c \ud56d\ubaa9\uc744 \uac15\uc870 \ud45c\uc2dc\ud558\uc5ec \uc791\ub3d9\ud558\uae30 \ub54c\ubb38\uc5d0 "List Apperance" \uc18d\uc131 \uc544\ub798\uc5d0 \uc788\ub294 "Selected Item Offset"\uc744 \uc124\uc815\ud558\uba74(2) UI\uc5d0\uc11c \uc120\ud0dd\ud55c \ud56d\ubaa9\uc758 \uc704\uce58\uac00 \uacb0\uc815\ub429\ub2c8\ub2e4. \uc120\ud0dd\ud55c \ud56d\ubaa9\uc774 Scroll Wheel\uc5d0\uc11c \uac00\uc6b4\ub370 \uc788\uc5b4\uc57c \ud558\uae30 \ub54c\ubb38\uc5d0 "Selected Item Offset"\uc744 (390-70)/2 = 160\uc73c\ub85c \uc124\uc815\ud569\ub2c8\ub2e4.'),(0,l.kt)(o.Z,{points:[[435,80],[435,130]],imageSource:"/img/tutorials/tutorial-04/add-cc-to-sw-4-17.webp",mdxType:"FigureWithPoints"},"Custom Container\ub97c Scroll Wheel\uc5d0 \ucd94\uac00\ud55c \ud6c4 \uc18d\uc131 \uc870\uc815\ud558\uae30"),(0,l.kt)("p",null,'1\ub2e8\uacc4\uc5d0\uc11c \ub2e4\uc6b4\ub85c\ub4dc\ud55c .zip \ud30c\uc77c\uc5d0\ub294 background.png\uc640 overlay.png\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ub450 \ud30c\uc77c\uc740 "scrollWheel\u201d\uc758 \uc601\uc5ed\uc744 \uac15\uc870 \ud45c\uc2dc\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\uba70, \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uc774\ubbf8\uc9c0 \uc704\uc82f\uc73c\ub85c \ucd94\uac00\ub429\ub2c8\ub2e4. \ub450 \uc774\ubbf8\uc9c0 \uc911 \ud558\ub098\ub294 "scrollWheel" \uc601\uc5ed\uc744 \uac15\uc870\ud558\uc5ec \ud45c\uc2dc\ud558\ub294 \ubc30\uacbd\uc774\uace0, \ub098\uba38\uc9c0 \ud558\ub098\ub294 "scrollWheel\u201d\uc758 \uac00\uc7a5\uc790\ub9ac\ub85c \uc774\ub3d9\ud588\uc744 \ub54c \u201cscrollWheel\u201d\uc758 \ud56d\ubaa9\uc744 \uc228\uae30\ub294 \uc624\ubc84\ub808\uc774\uc785\ub2c8\ub2e4.'),(0,l.kt)("p",null,'background.png \uc774\ubbf8\uc9c0\uc758 \uc704\uce58\ub294 X = 205 \ubc0f Y = 45\uc774\uba70, "scrollWheel" \ub4a4\uc5d0 \uc788\uae30 \ub54c\ubb38\uc5d0 "scrollWheel"\uc758 \ud56d\ubaa9\uc774 \ubc30\uacbd \uc704\uc5d0 \uadf8\ub824\uc9c0\uac8c \ub429\ub2c8\ub2e4. overlay.png \uc774\ubbf8\uc9c0\uc758 \uc704\uce58\ub294 X = 0 \ubc0f Y = 0\uc774\uba70, "scrollWheel" \uc704\uc5d0 \ubc30\uce58\ub429\ub2c8\ub2e4. \uc989, \ud56d\ubaa9\uc774 overlay.png \uc544\ub798\uc5d0 \uadf8\ub824\uc9c0\uac8c \ub418\uae30 \ub54c\ubb38\uc5d0 overlay.png\uac00 \ud22c\uba85\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0\uc5d0\ub294 \ud56d\ubaa9\uc774 \ubcf4\uc774\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.'),(0,l.kt)("p",null,"\uadf8 \ubc16\uc5d0\ub3c4 CTRL-F\uc640 CTRL-B\ub97c \ub204\ub974\uba74 \uc704\uc82f\uc774 \uc704\uc82f \ubaa9\ub85d\uc5d0\uc11c \uac01\uac01 \uc55e\ub4a4\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4."),(0,l.kt)(i.Z,{imageSource:"/img/tutorials/tutorial-04/graphics-added-4-17.webp",mdxType:"Figure"},"Scroll Wheel\uc744 \uc0ac\uc6a9\ud574 \uc2a4\ud06c\ub9b0\uc5d0 \ucd94\uac00\ub41c \uadf8\ub798\ud53d"),(0,l.kt)("p",null,'\uc55e\uc5d0\uc11c "scrollWheel"\uc5d0 \ub300\ud55c \uc815\uc801 \uc18d\uc131\ub9cc \uc870\uc815\ud588\uae30 \ub54c\ubb38\uc5d0 \ub85c\uc9c1\uc740 \ucd94\uac00\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc2e4\ud589\ud574\ub3c4 20\uac1c \ud56d\ubaa9\uc73c\ub85c \uad6c\uc131\ub41c \uc2a4\ud06c\ub864 \uba54\ub274\uc5d0 \ubaa8\ub450 \ub3d9\uc77c\ud55c \uac83\ub9cc \ud45c\uc2dc\ub429\ub2c8\ub2e4. \ub2e4\uc74c \ub2e8\uacc4\uc5d0\uc11c\ub294 \ub7f0\ud0c0\uc784\uc5d0\uc11c \ud720 \ud56d\ubaa9\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \uc0ac\uc6a9\uc790 \ucf54\ub4dc\ub97c \uc0ac\uc6a9\ud574 "scrollWheel"\uc5d0 \ub85c\uc9c1\uc744 \ucd94\uac00\ud558\uaca0\uc2b5\ub2c8\ub2e4.'),(0,l.kt)("h2",k({},{id:"step-3-adding-user-code-to-scroll-wheel"}),"3\ub2e8\uacc4: \uc0ac\uc6a9\uc790 \ucf54\ub4dc\ub97c Scroll Wheel\uc5d0 \ucd94\uac00\ud558\uae30"),(0,l.kt)("p",null,'\uc55e\uc5d0\uc11c TouchGFX Designer\uc5d0\uc11c ,\u201cscrollWheel\u201d, Scroll Wheel\uc744 \uc0dd\uc131\ud574\uc11c \uad6c\uc131\ud588\ub2e4\uba74 \uc774\ubc88\uc5d0\ub294 \uc0ac\uc6a9\uc790 \ucf54\ub4dc\ub97c \ud1b5\ud574\uc11c "scrollWheel\u201d \ud56d\ubaa9\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \ub85c\uc9c1\uc744 \uc0dd\uc131\ud558\uaca0\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\uba74 \ud720 \ud56d\ubaa9\uc758 \uc704\uce58\uc5d0 \ub530\ub77c \ub2e4\ub978 \uadf8\ub798\ud53d\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc774 \ub2e8\uacc4\uc5d0\uc11c\ub294 Designer \uc0dd\uc131 \ucf54\ub4dc\uc640 \uc0ac\uc6a9\uc790 \ucf54\ub4dc\ub97c \ud1b5\ud569\ud574\uc57c \ud569\ub2c8\ub2e4. Designer \ucf54\ub4dc\uc640 \uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc758 \ud1b5\ud569 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ',(0,l.kt)("a",k({parentName:"p"},{href:"../development/ui-development/software-architecture/code-structure"}),"\ucf54\ub4dc \uad6c\uc870 \ud398\uc774\uc9c0"),"\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",k({},{id:"change-image-and-text-in-menuelement"}),"MenuElement\uc758 \uc774\ubbf8\uc9c0 \ubc0f \ud14d\uc2a4\ud2b8 \ubcc0\uacbd\ud558\uae30"),(0,l.kt)("p",null,'Scroll Wheel \ud56d\ubaa9\uc740 1\ub2e8\uacc4\uc5d0\uc11c \uc0dd\uc131\ud55c Custom Container\uc778 "MenuElement\u201d \uc5d0 \ub530\ub77c \ub2e4\ub974\uae30 \ub54c\ubb38\uc5d0 \uc544\uc774\ucf58\uc744 \ubcc0\uacbd\ud558\uace0 \uc640\uc77c\ub4dc\uce74\ub4dc\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \uc0ac\uc6a9\uc790 \ucf54\ub4dc\ub97c "MenuElement"\uc5d0 \ucd94\uac00\ud574\uc57c \ud569\ub2c8\ub2e4.',(0,l.kt)("br",{parentName:"p"}),"\n",'TouchGFX Designer\uc5d0\uc11c Custom Container\ub97c \uc0dd\uc131\ud558\uba74 Custom Container\uc640 \ub3d9\uc77c\ud55c \uc774\ub984\uc73c\ub85c .hpp \ud30c\uc77c\uacfc .cpp \ud30c\uc77c\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4. \uc0ac\uc6a9\uc790 \ucf54\ub4dc\uac00 \ud1b5\ud569\ub418\uc5b4\uc57c \ud558\ub294 \ud30c\uc77c\uc774 \ubc14\ub85c \uc774 \ub450 \ud30c\uc77c\uc785\ub2c8\ub2e4. \uc774 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc608\uc2dc\uc5d0\uc11c "MenuElement"\uc5d0 \uc0dd\uc131\ub418\ub294 \ub450 \ud30c\uc77c\uc758 \uc704\uce58\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.'),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"MyApplication2\\gui\\include\\gui\\containers\\MenuElement.hpp")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"MyApplication2\\gui\\src\\containers\\MenuElement.cpp")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"setNumber(int no)"),' \ud568\uc218\ub97c "MenuElement"\uc5d0 \ucd94\uac00\ud558\uba74 \u201cscrollWheel\u201d\uc5d0\uc11c \ud56d\ubaa9\uc758 \ud14d\uc2a4\ud2b8\uc640 \uc544\uc774\ucf58\uc744 \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ud568\uc218\ub294 ',(0,l.kt)("inlineCode",{parentName:"p"},"no")," \ubcc0\uc218\ub97c \uc0ac\uc6a9\ud574 \uc774\ubbf8\uc9c0 \uc704\uc82f\uc5d0\uc11c \ud45c\uc2dc\ud560 \uc544\uc774\ucf58\uc744 \uacb0\uc815\ud558\uace0 TextArea \uc704\uc82f\uc758 \uc640\uc77c\ub4dc\uce74\ub4dc\ub97c ",(0,l.kt)("inlineCode",{parentName:"p"},"no")," \uac12\uc73c\ub85c \ubcc0\uacbd\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,'TextArea\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uc22b\uc790\uac00 0~9\uc774\uae30 \ub54c\ubb38\uc5d0 \uae30\ubcf8 \ud0c0\uc774\ud3ec\uadf8\ub798\ud53c\uc5d0\uc11c\ub3c4 "0~9"\ub97c "\uc640\uc77c\ub4dc\uce74\ub4dc \ubc94\uc704"\uc5d0 \ucd94\uac00\ud574\uc57c \ud569\ub2c8\ub2e4.'),(0,l.kt)("p",null,"F4\ub97c \ub20c\ub7ec TouchGFX Designer\uc5d0\uc11c \ud30c\uc77c\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"setNumber(int no)"),"\uc758 \uc120\uc5b8\uacfc \uad6c\ud604\uc740 \uc544\ub798\uc640 \uac19\uc774 ",(0,l.kt)("inlineCode",{parentName:"p"},"MenuElement.hpp"),"\uc5d0\uc11c \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4."),(0,l.kt)(u.Z,{mdxType:"CodeHeader"},"TouchGFX/gui/include/gui/containers/MenuElement.hpp"),(0,l.kt)("pre",null,(0,l.kt)("code",k({parentName:"pre"},{className:"language-cpp",metastring:"{5,15-42}","{5,15-42}":!0}),"#ifndef MENUELEMENT_HPP\n#define MENUELEMENT_HPP\n\n#include <gui_generated/containers/MenuElementBase.hpp>\n#include <BitmapDatabase.hpp>\n\nclass MenuElement : public MenuElementBase\n{\npublic:\n    MenuElement();\n    virtual ~MenuElement() {}\n\n    virtual void initialize();\n\n    void setNumber(int no)\n    {\n        Unicode::itoa(no, textBuffer, TEXT_SIZE, 10);\n        switch (no % 7)\n        {\n        case 0:\n        icon.setBitmap(Bitmap(BITMAP_ICON00_ID));\n            break;\n        case 1:\n        icon.setBitmap(Bitmap(BITMAP_ICON01_ID));\n            break;\n        case 2:\n        icon.setBitmap(Bitmap(BITMAP_ICON02_ID));\n            break;\n        case 3:\n        icon.setBitmap(Bitmap(BITMAP_ICON03_ID));\n            break;\n        case 4:\n        icon.setBitmap(Bitmap(BITMAP_ICON04_ID));\n            break;\n        case 5:\n        icon.setBitmap(Bitmap(BITMAP_ICON05_ID));\n            break;\n        case 6:\n        icon.setBitmap(Bitmap(BITMAP_ICON06_ID));\n            break;\n        }\n    }\nprotected:\n};\n\n#endif // MENUELEMENT_HPP\n\n")),(0,l.kt)("p",null,'\uc704 \ucf54\ub4dc\ub294 \ube44\ud2b8\ub9f5 \uc815\uc758\ub97c \uc0ac\uc6a9\ud574 \ud504\ub85c\uc81d\ud2b8 \uc774\ubbf8\uc9c0\ub97c \ucc38\uc870\ud569\ub2c8\ub2e4. \ube44\ud2b8\ub9f5 \uc815\uc758\ub97c \uac00\uc838\uc624\ub824\uba74 \uc704\uc640 \uac19\uc774 "BitmapDatabase.hpp\u201d \ud30c\uc77c\uc744 \ucd94\uac00\ud574\uc57c \ud569\ub2c8\ub2e4.'),(0,l.kt)("p",null,"\ucf54\ub4dc\ub97c \ucd94\uac00\ud558\uc5ec MenuElement\uc758 \ub0b4\uc6a9\uc774 \uc5c5\ub370\uc774\ud2b8\ub418\uc5c8\uc73c\uba74 \uc774\uc81c Scroll Wheel \ud56d\ubaa9\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \ucf54\ub4dc\ub97c \ucd94\uac00\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("h3",k({},{id:"update-the-items-in-the-scroll-wheel"}),"\uc2a4\ud06c\ub864 \ud720 \ud56d\ubaa9 \uc5c5\ub370\uc774\ud2b8\ud558\uae30"),(0,l.kt)("p",null,"TouchGFX Designer\ub294 Scroll Wheel\uc744 \ub9cc\ub4e4\uba74\uc11c Screen \uae30\ubcf8 \ud074\ub798\uc2a4\uc5d0\uc11c \uac00\uc0c1 \ud568\uc218\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4. \uc774 \uac00\uc0c1 \ud568\uc218\ub294 \uc2a4\ud06c\ub864 \ud720\uc5d0 \uc0c8\ub85c\uc6b4 \ud56d\ubaa9\uc774 \ud45c\uc2dc\ub420 \ub54c\ub9c8\ub2e4 \ud638\ucd9c\ub429\ub2c8\ub2e4. \uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc5d0\uc11c \uc774 \ud568\uc218\ub97c \uc7ac\uc815\uc758\ud558\uba74 \ucf54\ub4dc\uac00 \uc2a4\ud06c\ub864 \ud720 \ud56d\ubaa9\uacfc \uc0c1\ud638\uc791\uc6a9\ud560 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ud568\uc218\uc758 \uc774\ub984\uc740 Scroll Wheel \uc774\ub984\uc5d0 UpdatedItem\uc774 \ucd94\uac00\ub418\uc5b4 \uacb0\uc815\ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0 \uc0ac\uc6a9\ub41c \ud568\uc218\uc758 \uc774\ub984\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"scrollWheelUpdateItem(MenuElement& item, int16_t itemIndex)"),"\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc5ec\uae30\uc11c \ub9e4\uac1c\ubcc0\uc218 ",(0,l.kt)("inlineCode",{parentName:"p"},"itemIndex"),"\ub294 \ud604\uc7ac \uc5c5\ub370\uc774\ud2b8 \uc911\uc778 \ud56d\ubaa9\uc744 \uc54c\ub824\uc8fc\ub294 \uc778\ub371\uc2a4 \uac12\uc774\uace0, ",(0,l.kt)("inlineCode",{parentName:"p"},"item"),"\uc740 \ud604\uc7ac Scroll Wheel\uc5d0 \ud45c\uc2dc\ub418\ub294 MenuElement \uc778\uc2a4\ud134\uc2a4\uc5d0 \ub300\ud55c \ucc38\uc870\uc785\ub2c8\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"itemIndex"),"\uac00 \ud604\uc7ac \uc5c5\ub370\uc774\ud2b8 \uc911\uc778 \ud56d\ubaa9\uc744 \uc54c\ub824\uc8fc\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"setNumber()"),"\uac00 \ud638\ucd9c\ub418\uc5b4 ",(0,l.kt)("inlineCode",{parentName:"p"},"itemIndex")," \uac12\uc5d0 \ub530\ub77c \uc5c5\ub370\uc774\ud2b8 \uc911\uc778 \ud56d\ubaa9 \ub0b4\uc6a9\uc744 \ubcc0\uacbd\ud569\ub2c8\ub2e4. Scroll Wheel \ud56d\ubaa9\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \ucf54\ub4dc\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)(u.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,l.kt)("pre",null,(0,l.kt)("code",k({parentName:"pre"},{className:"language-cpp",metastring:"{14-17}","{14-17}":!0}),"#ifndef SCREEN1VIEW_HPP\n#define SCREEN1VIEW_HPP\n\n#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <gui/screen1_screen/Screen1Presenter.hpp>\n\nclass Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void scrollWheelUpdateItem(MenuElement& item, int16_t itemIndex)\n    {\n        item.setNumber(itemIndex);\n    }\nprotected:\n};\n\n#endif // SCREEN1VIEW_HPP\n")),(0,l.kt)("p",null,"\uc774\uc81c \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2dc\ubbac\ub808\uc774\ud130\ub97c \uc2e4\ud589\ud558\uba74 \uc778\ub371\uc2a4 \uac12\uacfc \uc544\uc774\ucf58\uc774 \ud3ec\ud568\ub41c \ud56d\ubaa9\uc758 \ud14d\uc2a4\ud2b8\uac00 \ud45c\uc2dc\ub418\ub294 \ud56d\ubaa9\uc5d0 \ub530\ub77c \ubc14\ub01d\ub2c8\ub2e4. \uc544\ub798 \uc774\ubbf8\uc9c0\ub294 \ucf54\ub4dc\ub97c \uad6c\ud604\ud558\uc5ec \uc2dc\ubbac\ub808\uc774\ud130\ub97c \uc2e4\ud589\ud55c \uc608\uc2dc\uc785\ub2c8\ub2e4."),(0,l.kt)(i.Z,{imageSource:"/img/tutorials/tutorial-04/running-sim.webp",mdxType:"Figure"},"\uc2dc\ubbac\ub808\uc774\ud130 \uc2e4\ud589\ud558\uae30"),(0,l.kt)("h2",k({},{id:"step-4-adding-custom-behavior-to-scroll-wheel"}),"4\ub2e8\uacc4: Scroll Wheel\uc5d0 \ucee4\uc2a4\ud140 \ub3d9\uc791 \ucd94\uac00\ud558\uae30"),(0,l.kt)("p",null,"\ud29c\ud1a0\ub9ac\uc5bc 4\uc758 \ub9c8\uc9c0\ub9c9 \ub2e8\uacc4\uc5d0\uc11c\ub294 Scroll Wheel\uc5d0 \ucee4\uc2a4\ud140 \ub3d9\uc791\uc744 \ucd94\uac00\ud558\uc5ec \ud56d\ubaa9\uc744 \uc2a4\ud06c\ub864\ud560 \ub54c \uc6d0\ud615 \ud328\ud134\uc73c\ub85c \uc774\ub3d9\ud558\uc5ec \ub9c8\uce58 \ub2e4\uc774\uc5bc\ucc98\ub7fc \uc6c0\uc9c1\uc774\ub3c4\ub85d \ub9cc\ub4e4\uc5b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",k({},{id:"add-custom-behavior-to-menuelement"}),"MenuElement\uc5d0 \ucee4\uc2a4\ud140 \ub3d9\uc791 \ucd94\uac00\ud558\uae30"),(0,l.kt)("p",null,'Scroll Wheel\uc5d0 \ud45c\uc2dc\ub418\ub294 \uac01 \ud56d\ubaa9\ub9c8\ub2e4 \uc774\ubbf8\uc9c0 \ubc0f \ud14d\uc2a4\ud2b8 \uc704\uc82f\uc758 \uac00\ub85c \uc704\uce58\ub97c \ubc14\uafd4\uc8fc\uba74 \uc2a4\ud06c\ub864 \ud720\uc774 \ub2e4\uc774\uc5bc \ud328\ud134\uc73c\ub85c \uc6c0\uc9c1\uc785\ub2c8\ub2e4. \uc774\ub97c \uc704\ud574 "MenuElement"\uc758 ',(0,l.kt)("inlineCode",{parentName:"p"},"setY()")," \ud568\uc218\ub97c ",(0,l.kt)("inlineCode",{parentName:"p"},"MenuElement.hpp"),"\uc5d0\uc11c \uc7ac\uc815\uc758\ud569\ub2c8\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"setY()")," \ud568\uc218\ub294 \uc138\ub85c \ubc29\ud5a5\uc73c\ub85c \uc6c0\uc9c1\uc77c \ub54c\ub9c8\ub2e4 \ud638\ucd9c\ub418\uc5b4 Custom Container\ub97c \uc0c8 \uc704\uce58\uc5d0 \ub2e4\uc2dc \uadf8\ub9ac\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \ud558\uc9c0\ub9cc ",(0,l.kt)("inlineCode",{parentName:"p"},"setY()"),"\ub97c \uc7ac\uc815\uc758\ud558\uba74 Scroll Wheel\uc744 \uc2a4\ud06c\ub864\ud560 \ub54c\ub9c8\ub2e4 \ucee8\ud14c\uc774\ub108 \ub0b4\uc5d0\uc11c \uc774\ubbf8\uc9c0 \ubc0f \ud14d\uc2a4\ud2b8 \uc704\uc82f\uc758 \uc704\uce58\ub97c \uac00\ub85c \ubc29\ud5a5\uc73c\ub85c \ubcc0\uacbd\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc544\ub798 \uc774\ubbf8\uc9c0\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"MenuElement.hpp"),"\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"setY()")," \ud568\uc218\ub97c \uc0c8\ub85c \uad6c\ud604\ud558\uc5ec \ub450 \uc704\uc82f\uc758 \uc704\uce58\ub97c \ubcc0\uacbd\ud558\ub294 \ubc29\ubc95\uc744 \uc124\uba85\ud55c \uac83\uc785\ub2c8\ub2e4. \uc5ec\uae30\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"math.h"),"\ub3c4 \ucd94\uac00\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)(u.Z,{mdxType:"CodeHeader"},"MenuElement.hpp"),(0,l.kt)("pre",null,(0,l.kt)("code",k({parentName:"pre"},{className:"language-cpp",metastring:"{6,16-39}","{6,16-39}":!0}),"#ifndef MENUELEMENT_HPP\n#define MENUELEMENT_HPP\n\n#include <gui_generated/containers/MenuElementBase.hpp>\n#include <BitmapDatabase.hpp>\n#include <math.h>\n\nclass MenuElement : public MenuElementBase\n{\npublic:\n    MenuElement();\n    virtual ~MenuElement() {}\n\n    virtual void initialize();\n\n    //Adjusts the position of the text and the icon, based in the calculated offset(x)\n    void offset(int16_t x)\n    {\n        icon.setX(30 + x);\n        text.setX(80 + x);\n    }\n\n    //The new declaration and implementation of the setY() function\n    virtual void setY(int16_t y)\n    {\n        //set Y as normal\n        MenuElementBase::setY(y);\n\n        const int circleRadius = 250;\n\n        //center around middle of background\n        y = y + getHeight() / 2 - 390 /2;\n\n        //calculate x\n        float x_f = circleRadius - sqrtf((float)((circleRadius * circleRadius) - (y * y)));\n        int16_t x = (int16_t)(x_f + 0.5f);\n\n        offset(x);\n    }\n\n    ...\n")),(0,l.kt)("p",null,"\uc774\uc81c \uc0c8\ub85c\uc6b4 ",(0,l.kt)("inlineCode",{parentName:"p"},"setY()")," \ud568\uc218\uac00 \uad6c\ud604\ub418\uc5b4 \uc2dc\ubbac\ub808\uc774\ud130\ub97c \uc2e4\ud589\ud558\uba74 Scroll Wheel\uc774 \uc624\ubc84\ub808\uc774\uc758 \uace1\uc120\uc744 \ub530\ub77c \ub2e4\uc774\uc5bc \ud328\ud134\uc73c\ub85c \uc6c0\uc9c1\uc785\ub2c8\ub2e4."),(0,l.kt)(i.Z,{imageSource:"/img/tutorials/tutorial-04/running-sim-02.webp",mdxType:"Figure"},"\uc2dc\ubbac\ub808\uc774\ud130 \uc2e4\ud589\ud558\uae30"),(0,l.kt)("p",null,"\uc774\uac83\uc73c\ub85c \ud29c\ud1a0\ub9ac\uc5bc4\ub97c \ub9c8\uce58\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)(a.Z,{mdxType:"FurtherReading"},"\uc5ec\uae30\uc5d0\uc11c \uc0ac\uc6a9\ub41c \uac1c\ub150\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uace0 \uc2f6\ub2e4\uba74 \uc544\ub798 \ud398\uc774\uc9c0\uc5d0\uc11c \uba87 \uac00\uc9c0 \uac1c\ub150\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \ub2e4\ub8e8\uace0 \uc788\uc73c\ub2c8 \ucc38\uc870\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.",(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)(r.Z,{to:"../development/ui-development/ui-components/containers/scroll-wheel",mdxType:"Link"},"Scroll Wheel \ud398\uc774\uc9c0"),"\uc5d0\ub294 TouchGFX Designer\uc5d0\uc11c Scroll Wheel\uc744 \uc0dd\uc131\ud558\uc5ec \uad6c\uc131\ud558\ub294 \ubc29\ubc95\uc744 \ube44\ub86f\ud574 \uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc5d0\uc11c \ub85c\uc9c1\uc744 \uc0dd\uc131\ud558\ub294 \ubc29\ubc95\uc774 \uc124\uba85\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",null,(0,l.kt)(r.Z,{to:"../development/ui-development/touchgfx-engine-features/custom-containers",mdxType:"Link"},"Custom Container \ud398\uc774\uc9c0"),"\uc5d0\ub294 Custom Container\uc758 \uac1c\ub150\uacfc \uc0ac\uc6a9 \ubc29\ubc95\uc774 \ub098\uc640 \uc788\uc2b5\ub2c8\ub2e4."))))}S.isMDXComponent=!0},38197:function(e,t,n){t.Z=n.p+"assets/files/touchgfx-tutorial-04-fea43cce73bad37b8df3f2deaa9f7bd1.zip"}}]);