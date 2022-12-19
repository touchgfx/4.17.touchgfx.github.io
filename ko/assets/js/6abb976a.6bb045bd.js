"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8419],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return g}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=i,g=s["".concat(c,".").concat(m)]||s[m]||u[m]||r;return t?a.createElement(g,o(o({ref:n},d),{},{components:t})):a.createElement(g,o({ref:n},d))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},22425:function(e,n,t){var a=t(67294);class i extends a.Component{render(){return a.createElement("div",{class:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}n.Z=i},44035:function(e,n,t){var a=t(67294),i=t(25026);n.Z=function(e){const n=e.noShadow||!1,t=e.width,r=e.height,o=(0,i.Z)(e.imageSource);return n?a.createElement("div",{class:"figure noshadow"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:t,height:r,src:o})),a.createElement("p",null,e.children)):a.createElement("div",{class:"figure"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:t,height:r,src:o})),a.createElement("p",null,e.children))}},29415:function(e,n,t){var a=t(67294),i=t(88678);const r=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends a.Component{render(){return a.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:r},this.props.children)}}n.Z=o},88678:function(e,n,t){var a=t(67294);class i extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{class:e},a.createElement("div",{class:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{class:"highlight-content"},this.props.children))}}n.Z=i},93054:function(e,n,t){var a=t(67294),i=t(88678);const r=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends a.Component{render(){return a.createElement(i.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:r},this.props.children)}}n.Z=o},45008:function(e,n,t){t.r(n),t.d(n,{assets:function(){return b},contentTitle:function(){return v},default:function(){return A},frontMatter:function(){return x},metadata:function(){return f},toc:function(){return w}});var a=t(3905),i=t(39130),r=t(44035),o=t(29415),l=t(22425),c=t(93054),p=Object.defineProperty,d=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,k=(e,n,t)=>n in e?p(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,h=(e,n)=>{for(var t in n||(n={}))m.call(n,t)&&k(e,t,n[t]);if(u)for(var t of u(n))g.call(n,t)&&k(e,t,n[t]);return e};const x={id:"mixins",title:"\ubbf9\uc2a4\uc778"},v=void 0,f={unversionedId:"development/ui-development/touchgfx-engine-features/mixins",id:"development/ui-development/touchgfx-engine-features/mixins",title:"\ubbf9\uc2a4\uc778",description:"Mixin(\uc774\ud558 \ubbf9\uc2a4\uc778)\uc774\ub780 \uc608\ub97c \ub4e4\uc5b4 \uc704\uce58 \ubcc0\uacbd\uc774\ub098 \uc54c\ud30c \uac12 \ubcc0\uacbd\uc744 \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac\ud560 \uc218 \uc788\ub3c4\ub85d \uc704\uc82f\uc758 \uae30\ub2a5\uc744 \ud655\uc7a5\ud558\ub294 \ud074\ub798\uc2a4\ub97c \ub9d0\ud569\ub2c8\ub2e4. Move Animator \ubbf9\uc2a4\uc778\uacfc Fade Animator \ubbf9\uc2a4\uc778\uc740 TouchGFX Designer \uc0c1\ud638\uc791\uc6a9\uc5d0\uc11c \uc704\uce58 \ubcc0\uacbd\uacfc \uc54c\ud30c \uac12 \ubcc0\uacbd\uc744 \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac\ud558\ub294 \ucf54\ub4dc\ub97c \uc0dd\uc131\ud558\ub294 \ub370 \ubc18\ub4dc\uc2dc \ud544\uc694\ud569\ub2c8\ub2e4. \uc774 \ub450 \uac00\uc9c0 \ubbf9\uc2a4\uc778\uc740 TouchGFX Designer\ub97c \ud1b5\ud574, \ud639\uc740 \uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc5d0\uc11c \uc9c1\uc811 \uc704\uc82f\uc5d0 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/mixins.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/mixins",permalink:"/4.17/ko/docs/development/ui-development/touchgfx-engine-features/mixins",draft:!1,tags:[],version:"current",frontMatter:{id:"mixins",title:"\ubbf9\uc2a4\uc778"},sidebar:"docs",previous:{title:"\ubc31\uc5d4\ub4dc \ud1b5\uc2e0",permalink:"/4.17/ko/docs/development/ui-development/touchgfx-engine-features/backend-communication"},next:{title:"\ud14d\uc2a4\ud2b8 \ubc0f \ud3f0\ud2b8",permalink:"/4.17/ko/docs/development/ui-development/touchgfx-engine-features/texts-and-fonts"}},b={},w=[{value:"Move Animator",id:"move-animator",level:2},{value:"\uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc5d0\uc11c Move Animator \uc0ac\uc6a9\ud558\uae30",id:"using-move-animator-in-user-code",level:3},{value:"\uc0ac\uc6a9\uc790 \ucf54\ub4dc\ub97c \ud1b5\ud55c \ucf5c\ubc31 \uad6c\ud604",id:"callback-implementation-in-user-code",level:3},{value:"API \ucc38\uc870",id:"api-reference",level:3},{value:"Fade Animator",id:"fade-animator",level:2},{value:"\uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc5d0\uc11c Fade Animator \uc0ac\uc6a9\ud558\uae30",id:"using-fade-animator-in-user-code",level:3},{value:"\uc0ac\uc6a9\uc790 \ucf54\ub4dc\ub97c \ud1b5\ud55c \ucf5c\ubc31 \uad6c\ud604",id:"callback-implementation-in-user-code-1",level:3},{value:"API \ucc38\uc870",id:"api-reference-1",level:3},{value:"Click Listener",id:"clicklistener",level:2},{value:"\uc0ac\uc6a9\uc790 \ucf54\ub4dc\ub97c \ud1b5\ud55c \ucf5c\ubc31 \uad6c\ud604",id:"callback-implementation-in-user-code-2",level:3},{value:"API \ucc38\uc870",id:"api-reference-2",level:3},{value:"Draggable",id:"draggable",level:2},{value:"API \ucc38\uc870",id:"api-reference-3",level:3}],E={toc:w};function A(e){var n,t=e,{components:p}=t,k=((e,n)=>{var t={};for(var a in e)m.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&u)for(var a of u(e))n.indexOf(a)<0&&g.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=h(h({},E),k),d(n,s({components:p,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Mixin(\uc774\ud558 \ubbf9\uc2a4\uc778)\uc774\ub780 \uc608\ub97c \ub4e4\uc5b4 \uc704\uce58 \ubcc0\uacbd\uc774\ub098 \uc54c\ud30c \uac12 \ubcc0\uacbd\uc744 \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac\ud560 \uc218 \uc788\ub3c4\ub85d \uc704\uc82f\uc758 \uae30\ub2a5\uc744 \ud655\uc7a5\ud558\ub294 \ud074\ub798\uc2a4\ub97c \ub9d0\ud569\ub2c8\ub2e4. Move Animator \ubbf9\uc2a4\uc778\uacfc Fade Animator \ubbf9\uc2a4\uc778\uc740 TouchGFX Designer \uc0c1\ud638\uc791\uc6a9\uc5d0\uc11c \uc704\uce58 \ubcc0\uacbd\uacfc \uc54c\ud30c \uac12 \ubcc0\uacbd\uc744 \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac\ud558\ub294 \ucf54\ub4dc\ub97c \uc0dd\uc131\ud558\ub294 \ub370 \ubc18\ub4dc\uc2dc \ud544\uc694\ud569\ub2c8\ub2e4. \uc774 \ub450 \uac00\uc9c0 \ubbf9\uc2a4\uc778\uc740 TouchGFX Designer\ub97c \ud1b5\ud574, \ud639\uc740 \uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc5d0\uc11c \uc9c1\uc811 \uc704\uc82f\uc5d0 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",h({},{id:"move-animator"}),"Move Animator"),(0,a.kt)("p",null,"\uc704\uce58 \ubcc0\uacbd \uc560\ub2c8\uba54\uc774\ud130\ub294 \uc704\uc82f\uc774 \ud604\uc7ac \uc704\uce58\uc5d0\uc11c \uc9c0\uc815\ub41c \ub9c8\uc9c0\ub9c9 \uc704\uce58\uae4c\uc9c0 \uc774\ub3d9\ud558\ub294 \uac83\uc744 \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac\ud560 \uc218 \uc788\ub294 \ubbf9\uc2a4\uc778\uc785\ub2c8\ub2e4. X \ubc0f Y\ucd95 \ubc29\ud5a5\uc758 \uc704\uce58 \ubcc0\uacbd\uc740 EasingEquation\uc744 \ud1b5\ud574 \uc124\uba85\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774 \ubbf9\uc2a4\uc778\uc740 TouchGFX Designer\uc758 \ud574\ub2f9 \uc704\uc82f \uc18d\uc131\uc744 \uc0ac\uc6a9\ud574 \uc544\ub798 \uc774\ubbf8\uc9c0\uc640 \uac19\uc740 \u201cMixins\u201d \uc139\uc158\uc5d0\uc11c \ud65c\uc131\ud654\ud558\uba74 \uc801\uc6a9\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"Move Animator \ubbf9\uc2a4\uc778\uc740 \uc704\uc82f\uc758 \uc704\uce58\ub97c \ubcc0\uacbd\ud558\ub294 ",(0,a.kt)("a",h({parentName:"p"},{href:"../designer-user-guide/interactions-view"}),"\uc0c1\ud638\uc791\uc6a9"),"\uc774 \uc0dd\uc131\ub418\uba74 \ud574\ub2f9 \uc704\uc82f\uc5d0 \uc790\ub3d9\uc73c\ub85c \uc801\uc6a9\ub429\ub2c8\ub2e4."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/mixins/mixins-move-animator-enabled-4.17.webp",mdxType:"Figure"},"TouchGFX Designer\uc5d0\uc11c \ud65c\uc131\ud654\ub41c Move Animator \ubbf9\uc2a4\uc778"),(0,a.kt)("p",null,"Move Animator\ub97c \ud65c\uc131\ud654\ud558\uba74 \uc544\ub798\uc640 \uac19\uc774 \uc0dd\uc131\ub41c \uc704\uc82f\uc758 \uc120\uc5b8 \uc11c\uba85(signature)\uc774 \ubc14\ub01d\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\uc11c ",(0,a.kt)("a",h({parentName:"p"},{href:"../ui-components/shapes/box"}),"Box"),"\uc758 Move Animator \ubbf9\uc2a4\uc778\uc774 \ud65c\uc131\ud654\ub429\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"touchgfx::MoveAnimator< touchgfx::Box > box;\n")),(0,a.kt)("h3",h({},{id:"using-move-animator-in-user-code"}),"\uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc5d0\uc11c Move Animator \uc0ac\uc6a9\ud558\uae30"),(0,a.kt)("p",null,"Move Animator \ubbf9\uc2a4\uc778\uc774 \uc704\uc82f\uc5d0 \uc801\uc6a9\ub418\uba74 \ud574\ub2f9 \uc704\uc82f\uc774 \ud604\uc7ac \uc704\uce58\uc5d0\uc11c \ub2e4\ub978 \uc704\uce58\ub85c \uc774\ub3d9\ud558\ub294 \uac83\uc744 \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uc139\uc158\uc5d0\uc11c\ub294 \uc774\ub7ec\ud55c \uc0c8 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \ub370\ubaa8\ub97c \uc18c\uac1c\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"TouchGFX Designer\uc758 Box \uc704\uc82f\uc5d0\uc11c Move Animator \ubbf9\uc2a4\uc778\uc744 \ud65c\uc131\ud654\ud558\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"startMoveAnimation")," \uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4. \uc774 \uba54\uc18c\ub4dc\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uc21c\uc11c\ub85c 5\uac00\uc9c0 \uc778\uc218\ub97c \uac16\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"endX: \ubd80\ubaa8\uc640 \uad00\ub828\ud558\uc5ec \uc704\uc82f\uc774 \uc774\ub3d9\ud574\uc57c \ud558\ub294 X \uc704\uce58\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"endY: \ubd80\ubaa8\uc640 \uad00\ub828\ud558\uc5ec \uc704\uc82f\uc774 \uc774\ub3d9\ud574\uc57c \ud558\ub294 Y \uc704\uce58\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"duration: X\ucd95\uacfc Y\ucd95\uc73c\ub85c \uc774\ub3d9\ud558\ub294 \ub370 \uac78\ub9ac\ub294 \uc2dc\uac04(tick)\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"xProgressionEquation: X\ucd95\uc73c\ub85c \uc774\ub3d9\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 EasingEquation\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"yProgressionEquation: Y\ucd95\uc73c\ub85c \uc774\ub3d9\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 EasingEquation\uc785\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\uc544\ub798\ub294 X\ucd95\uacfc Y\ucd95\uc5d0\uc11c linear EasingEquation\uc744 \uc0ac\uc6a9\ud558\uc5ec 40tick \uc2dc\uac04 \ub3d9\uc548 X: 0, Y: 0 \uc88c\ud45c\ub85c \uc774\ub3d9\ud558\ub294 \uc608\uc81c\uc785\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"    box.startMoveAnimation(0, 0, 40, EasingEquations::linearEaseNone, EasingEquations::linearEaseNone);\n")),(0,a.kt)(o.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(i.Z,{to:"../../../api/classes/classtouchgfx_1_1_easing_equations",mdxType:"Link"},"\uc0ac\uc6a9 \uac00\ub2a5\ud55c EasingEquation\uc5d0 \ub300\ud55c API \ucc38\uc870")),(0,a.kt)("li",null,(0,a.kt)(i.Z,{to:"https://easings.net/",mdxType:"Link"},"EasingEquation\uc5d0 \ub300\ud55c \uadf8\ub798\ud53d \uc124\uba85"))),(0,a.kt)("h3",h({},{id:"callback-implementation-in-user-code"}),"\uc0ac\uc6a9\uc790 \ucf54\ub4dc\ub97c \ud1b5\ud55c \ucf5c\ubc31 \uad6c\ud604"),(0,a.kt)("p",null,"Move Animator \ubbf9\uc2a4\uc778\uc774 \uc560\ub2c8\uba54\uc774\uc158\uc744 \uc644\ub8cc\ud558\uba74 \ucf5c\ubc31\uc774 \uc2e4\ud589\ub429\ub2c8\ub2e4. \uc774 \uc139\uc158\uc5d0\uc11c\ub294 \uc774\ub7ec\ud55c \ucf5c\ubc31\uc744 \uad6c\ud604\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \ub370\ubaa8\ub97c \uc18c\uac1c\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"TouchGFX Designer\uc758 Box \uc704\uc82f\uc5d0\uc11c Move Animator \ubbf9\uc2a4\uc778\uc744 \ud65c\uc131\ud654\ud588\ub2e4\uba74 \uc774\uc81c Box \uc704\uc82f\uc774 \uc704\uce58\ud55c \uae30\ubcf8 \ud074\ub798\uc2a4\uc5d0\uc11c \uc0c1\uc18d\ud558\ub294 \uc2a4\ud06c\ub9b0 \ud5e4\ub354 \ud074\ub798\uc2a4 \ud30c\uc77c\uc5d0 \ucf5c\ubc31 \uc120\uc5b8\uacfc \uc774\ubca4\ud2b8 \ucc98\ub9ac \ud568\uc218\ub97c \ucd94\uac00\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{5-6,9-10}","{5-6,9-10}":!0}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    // Declaring callback handler for move animation ended on a Box\n    void boxMoveAnimationEndedHandler(const touchgfx::MoveAnimator<Box>& comp);\n\nprotected:\n    // Declaring callback type of MoveAnimator<Box>\n    Callback <Screen1View, const touchgfx::MoveAnimator<Box>&> boxMoveAnimationEndedCallback;\n};\n")),(0,a.kt)("p",null,"\uadf8\ub7f0 \ub2e4\uc74c \ucf5c\ubc31 \uc120\uc5b8\uacfc \uc774\ubca4\ud2b8 \ucc98\ub9ac \ud568\uc218\ub97c View \uac1d\uccb4\ub85c \ubc14\uc778\ub529\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{2-3}","{2-3}":!0}),"Screen1View::Screen1View() :\n  // In constructor for callback, bind to this view object and bind which function to handle the event.\n  boxMoveAnimationEndedCallback(this, &Screen1View::boxMoveAnimationEndedHandler) { }\n")),(0,a.kt)("p",null,"\ub2e4\uc74c \ub2e8\uacc4\uc5d0\uc11c\ub294 \uc774\ub3d9 \uc560\ub2c8\uba54\uc774\uc158\uc774 \uc885\ub8cc\ub418\uc5c8\uc744 \ub54c \uc0ac\uc6a9\ud560 \ucf5c\ubc31\uc744 Box \uc704\uc82f\uc5d0\uac8c \uc54c\ub824\uc8fc\ub294 \uac83 \uc785\ub2c8\ub2e4. \uc774 \uc791\uc5c5\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"setupScreen()")," \ud30c\uc77c\uc5d0\uc11c \uc791\uc131\ud558\uba70, \ud574\ub2f9 \uc2a4\ud06c\ub9b0\uc73c\ub85c \uc804\ud658\ub420 \ub54c\ub9c8\ub2e4 \ucf5c\ubc31\uc774 \uc124\uc815\ub418\ub3c4\ub85d \ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{3-4}","{3-4}":!0}),"void Screen1View::setupScreen()\n{\n  // Add the callback to box\n  box.setMoveAnimationEndedAction(boxMoveAnimationEndedCallback);\n}\n")),(0,a.kt)("p",null,"\ub9c8\uc9c0\ub9c9\uc73c\ub85c \ucf5c\ubc31\uc744 \ucc98\ub9ac\ud560 ",(0,a.kt)("inlineCode",{parentName:"p"},"boxMoveAnimationEndedHandler")," \ud568\uc218\ub97c \uad6c\ud604\ud569\ub2c8\ub2e4. \ud6a8\uacfc\uc801\uc778 \uc5f0\uc2b5\uc774 \ub420 \uc218 \uc788\ub3c4\ub85d \uc704\uce58 \ubcc0\uacbd \uc560\ub2c8\uba54\uc774\uc158\uc744 \ub9c8\uce5c Box\uac00 \uc2e4\uc81c\ub85c \ud574\ub2f9\ud558\ub294 \u2018box\u2019\uc778\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::boxMoveAnimationEndedHandler(const touchgfx::MoveAnimator<touchgfx::Box>& b)\n{\n    if (&b == &box)\n    {\n        //Implement what should happen when move animation on 'box' has ended here.\n    }\n}\n")),(0,a.kt)("h3",h({},{id:"api-reference"}),"API \ucc38\uc870"),(0,a.kt)(o.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(i.Z,{to:"../../../api/classes/classtouchgfx_1_1_move_animator",mdxType:"Link"},"MoveAnimator \ud074\ub798\uc2a4\uc5d0 \ub300\ud55c API \ucc38\uc870"))),(0,a.kt)("h2",h({},{id:"fade-animator"}),"Fade Animator"),(0,a.kt)("p",null,"Fade Animator\ub294 \uc704\uc82f\uc774 \uc54c\ud30c \uac12\uc744 \ud604\uc7ac \uac12\uc5d0\uc11c \uc9c0\uc815\ub41c \ub9c8\uc9c0\ub9c9 \uac12\uc73c\ub85c \ubcc0\uacbd\ud558\uc5ec \ud398\uc774\ub4dc \ud6a8\uacfc\ub97c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac\ud560 \uc218 \uc788\ub294 \ubbf9\uc2a4\uc778\uc785\ub2c8\ub2e4. \ud398\uc774\ub4dc \uc18d\ub3c4\ub294 EasingEquation\uc744 \ud1b5\ud574 \uc124\uba85\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)(c.Z,{mdxType:"Note"},"\uc54c\ud30c \uac12\uc744 \uad6c\ud604\ud558\ub294 \uc704\uc82f\uc5d0\uc11c\ub9cc Fade Animator \ubbf9\uc2a4\uc778\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c ",(0,a.kt)(i.Z,{to:"../ui-components/containers/container",mdxType:"Link"},"\ucee8\ud14c\uc774\ub108"),"\ucc98\ub7fc \ub2e4\ub978 \uc704\uc82f\uc744 \ud3ec\ud568\ud560 \uc218 \uc788\ub294 \uc704\uc82f\uc774\ub77c\uace0 \ud574\uc11c Fade Animator \ubbf9\uc2a4\uc778\uc744 \uc804\ubd80 \uc9c0\uc6d0\ud558\ub294 \uac83\uc740 \uc544\ub2d9\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774 \ubbf9\uc2a4\uc778\uc740 TouchGFX Designer\uc758 \ud574\ub2f9 \uc704\uc82f \uc18d\uc131\uc744 \uc0ac\uc6a9\ud574 \uc544\ub798 \uc774\ubbf8\uc9c0\uc640 \uac19\uc740 \u201cMixins\u201d \uc139\uc158\uc5d0\uc11c \ud65c\uc131\ud654\ud558\uba74 \uc801\uc6a9\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"Fade Animator \ubbf9\uc2a4\uc778\uc740 0\ubcf4\ub2e4 \ud070 \uc2dc\uac04 \ub3d9\uc548 \uc704\uc82f\uc744 \ud398\uc774\ub4dc \ucc98\ub9ac\ud558\ub294 ",(0,a.kt)("a",h({parentName:"p"},{href:"../designer-user-guide/interactions-view"}),"\uc0c1\ud638\uc791\uc6a9"),"\uc774 \ucd94\uac00\ub418\uba74 \ud574\ub2f9 \uc704\uc82f\uc5d0 \uc790\ub3d9\uc73c\ub85c \uc801\uc6a9\ub429\ub2c8\ub2e4."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/mixins/mixins-fade-animator-enabled-4.17.webp",mdxType:"Figure"},"TouchGFX Designer\uc5d0\uc11c \ud65c\uc131\ud654\ub41c \ud398\uc774\ub4dc \uc560\ub2c8\uba54\uc774\ud130 \ubbf9\uc2a4\uc778"),(0,a.kt)("p",null,"Fade Animator\ub97c \ud65c\uc131\ud654\ud558\uba74 \uc544\ub798\uc640 \uac19\uc774 \uc0dd\uc131\ub41c \uc704\uc82f\uc758 \uc120\uc5b8 \uc11c\uba85\uc774 \ubc14\ub01d\ub2c8\ub2e4. \uc5ec\uae30\uc11c ",(0,a.kt)("a",h({parentName:"p"},{href:"../ui-components/shapes/box"}),"Box"),"\uc758 Fade Animator \ubbf9\uc2a4\uc778\uc774 \ud65c\uc131\ud654\ub429\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"touchgfx::FadeAnimator< touchgfx::Box > box;\n")),(0,a.kt)("h3",h({},{id:"using-fade-animator-in-user-code"}),"\uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc5d0\uc11c Fade Animator \uc0ac\uc6a9\ud558\uae30"),(0,a.kt)("p",null,"Fade Animator \ubbf9\uc2a4\uc778\uc774 \uc704\uc82f\uc5d0 \uc801\uc6a9\ub418\uba74 \ud574\ub2f9 \uc704\uc82f\uc774 \uc54c\ud30c \uac12\uc744 \ud604\uc7ac \uc124\uc815\uc5d0\uc11c \ub2e4\ub978 \uc124\uc815\uc73c\ub85c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uc139\uc158\uc5d0\uc11c\ub294 \uc774\ub7ec\ud55c \uc0c8 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \ub370\ubaa8\ub97c \uc18c\uac1c\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"TouchGFX Designer\uc758 Box \uc704\uc82f\uc5d0\uc11c Fade Animator \ubbf9\uc2a4\uc778\uc744 \ud65c\uc131\ud654\ud558\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"startFadeAnimation")," \uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4. \uc774 \uba54\uc18c\ub4dc\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uc21c\uc11c\ub85c \uc138 \uac00\uc9c0 \uc778\uc218\ub97c \uac16\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"endAlpha: \uc560\ub2c8\uba54\uc774\uc158 \uc885\ub8cc \uc2dc \uc704\uc82f\uc5d0 \uc124\uc815\ub418\uc5b4\uc57c \ud558\ub294 \uc54c\ud30c \uac12\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"duration: \uc560\ub2c8\uba54\uc774\uc158\uc774 \uc0c8\ub85c\uc6b4 \uc54c\ud30c \uac12 \uc124\uc815\uae4c\uc9c0 \uac78\ub9ac\ub294 \uc2dc\uac04(tick)\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"alphaProgressionEquation: \uc54c\ud30c \uac12 \ubcc0\uacbd \uc18d\ub3c4\uc5d0 \uc0ac\uc6a9\ub418\ub294 EasingEquation\uc785\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\uc544\ub798\ub294 linear EasingEquation\uc744 \uc0ac\uc6a9\ud558\uc5ec 40tick \uc2dc\uac04 \ub3d9\uc548 \uc54c\ud30c \uac12\uc744 0\uc73c\ub85c \ubcc0\uacbd\ud558\ub294 \uc608\uc81c\uc785\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"    box.startFadeAnimation(0, 0, 40, EasingEquations::linearEaseNone);\n")),(0,a.kt)(o.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(i.Z,{to:"../../../api/classes/classtouchgfx_1_1_easing_equations",mdxType:"Link"},"\uc0ac\uc6a9 \uac00\ub2a5\ud55c EasingEquation\uc5d0 \ub300\ud55c API \ucc38\uc870")),(0,a.kt)("li",null,(0,a.kt)(i.Z,{to:"https://easings.net/",mdxType:"Link"},"EasingEquation\uc5d0 \ub300\ud55c \uadf8\ub798\ud53d \uc124\uba85"))),(0,a.kt)("h3",h({},{id:"callback-implementation-in-user-code-1"}),"\uc0ac\uc6a9\uc790 \ucf54\ub4dc\ub97c \ud1b5\ud55c \ucf5c\ubc31 \uad6c\ud604"),(0,a.kt)("p",null,"Fade Animator \ubbf9\uc2a4\uc778\uc774 \uc560\ub2c8\uba54\uc774\uc158\uc744 \uc644\ub8cc\ud558\uba74 \ucf5c\ubc31\uc774 \uc2e4\ud589\ub429\ub2c8\ub2e4. \uc774 \uc139\uc158\uc5d0\uc11c\ub294 \uc774\ub7ec\ud55c \ucf5c\ubc31\uc744 \uad6c\ud604\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \ub370\ubaa8\ub97c \uc18c\uac1c\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"TouchGFX Designer\uc758 Box \uc704\uc82f\uc5d0\uc11c Fade Animator \ubbf9\uc2a4\uc778\uc744 \ud65c\uc131\ud654\ud588\ub2e4\uba74 \uc774\uc81c Box \uc704\uc82f\uc774 \uc704\uce58\ud55c \uae30\ubcf8 \ud074\ub798\uc2a4\uc5d0\uc11c \uc0c1\uc18d\ud558\ub294 \uc2a4\ud06c\ub9b0 \ud5e4\ub354 \ud074\ub798\uc2a4 \ud30c\uc77c\uc5d0 \ucf5c\ubc31 \uc120\uc5b8\uacfc \uc774\ubca4\ud2b8 \ucc98\ub9ac \ud568\uc218\ub97c \ucd94\uac00\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{5-6,9-10}","{5-6,9-10}":!0}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    // Declaring callback handler for fade animation ended on a Box\n    void boxFadeAnimationEndedHandler(const touchgfx::FadeAnimator<Box>& comp);\n\nprotected:\n    // Declaring callback type of FadeAnimator<Box>\n    Callback <Screen1View, const touchgfx::FadeAnimator<Box>&> boxFadeAnimationEndedCallback;\n};\n")),(0,a.kt)("p",null,"\uadf8\ub7f0 \ub2e4\uc74c \ucf5c\ubc31 \uc120\uc5b8\uacfc \uc774\ubca4\ud2b8 \ucc98\ub9ac \ud568\uc218\ub97c View \uac1d\uccb4\ub85c \ubc14\uc778\ub529\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{2-3}","{2-3}":!0}),"Screen1View::Screen1View() :\n  // In constructor for callback, bind to this view object and bind which function to handle the event.\n  boxFadeAnimationEndedCallback(this, &Screen1View::boxFadeAnimationEndedHandler) { }\n")),(0,a.kt)("p",null,"\ub2e4\uc74c \ub2e8\uacc4\uc5d0\uc11c\ub294 \uc774\ub3d9 \uc560\ub2c8\uba54\uc774\uc158\uc774 \uc885\ub8cc\ub418\uc5c8\uc744 \ub54c \uc0ac\uc6a9\ud560 \ucf5c\ubc31\uc744 Box \uc704\uc82f\uc5d0\uac8c \uc54c\ub824\uc8fc\ub294 \uac83 \uc785\ub2c8\ub2e4. \uc774 \uc791\uc5c5\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"setupScreen()")," \ud30c\uc77c\uc5d0\uc11c \uc791\uc131\ud558\uba70, \ud574\ub2f9 \uc2a4\ud06c\ub9b0\uc73c\ub85c \uc804\ud658\ub420 \ub54c\ub9c8\ub2e4 \ucf5c\ubc31\uc774 \uc124\uc815\ub418\ub3c4\ub85d \ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{3-4}","{3-4}":!0}),"void Screen1View::setupScreen()\n{\n  // Add the callback to box\n  box.setFadeAnimationEndedAction(boxFadeAnimationEndedCallback);\n}\n")),(0,a.kt)("p",null,"\ub9c8\uc9c0\ub9c9\uc73c\ub85c \ucf5c\ubc31\uc744 \ucc98\ub9ac\ud560 ",(0,a.kt)("inlineCode",{parentName:"p"},"boxFadeAnimationEndedHandler")," \ud568\uc218\ub97c \uad6c\ud604\ud569\ub2c8\ub2e4. \ud6a8\uacfc\uc801\uc778 \uc5f0\uc2b5\uc774 \ub420 \uc218 \uc788\ub3c4\ub85d Fade Animator\uc744 \ub9c8\uce5c Box\uac00 \uc2e4\uc81c\ub85c \ud574\ub2f9\ud558\ub294 \u2018box\u2019\uc778\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::boxFadeAnimationEndedHandler(const touchgfx::FadeAnimator<touchgfx::Box>& b)\n{\n    if (&b == &box)\n    {\n        //Implement what should happen when fade animation on 'box' has ended here.\n    }\n}\n")),(0,a.kt)("h3",h({},{id:"api-reference-1"}),"API \ucc38\uc870"),(0,a.kt)(o.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(i.Z,{to:"../../../api/classes/classtouchgfx_1_1_fade_animator",mdxType:"Link"},"FadeAnimator \ud074\ub798\uc2a4\uc5d0 \ub300\ud55c API \ucc38\uc870"))),(0,a.kt)("h2",h({},{id:"clicklistener"}),"Click Listener"),(0,a.kt)("p",null,"Click Listener\ub294 \ucf5c\ubc31\uc744 \uc0ac\uc6a9\ud574 \uc704\uc82f\uc744 \ud655\uc7a5\ud558\uc5ec \uc704\uc82f\uc774 \ud130\uce58 \uc785\ub825\uc5d0 \uc751\ub2f5\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ud558\ub294 \ubbf9\uc2a4\uc778\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774 \ubbf9\uc2a4\uc778\uc740 TouchGFX Designer\uc758 \ud574\ub2f9 \uc704\uc82f \uc18d\uc131\uc744 \uc0ac\uc6a9\ud574 \uc544\ub798 \uc774\ubbf8\uc9c0\uc640 \uac19\uc740 \u201cMixins\u201d \uc139\uc158\uc5d0\uc11c \ud65c\uc131\ud654\ud558\uba74 \uc801\uc6a9\ub429\ub2c8\ub2e4."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/mixins/mixins-click-listener-enabled-4.17.webp",mdxType:"Figure"},"TouchGFX Designer\uc5d0\uc11c \ud65c\uc131\ud654\ub41c Click Listener \ubbf9\uc2a4\uc778"),(0,a.kt)("p",null,"Click Listener \ubbf9\uc2a4\uc778\uc744 \ud65c\uc131\ud654\ud558\uba74 \uc544\ub798\uc640 \uac19\uc774 \uc0dd\uc131\ub41c \uc704\uc82f\uc758 \uc120\uc5b8 \uc11c\uba85\uc774 \ubc14\ub01d\ub2c8\ub2e4. \uc5ec\uae30\uc11c ",(0,a.kt)("a",h({parentName:"p"},{href:"../ui-components/shapes/box"}),"Box"),"\uc758 Click Listener \ubbf9\uc2a4\uc778\uc774 \ud65c\uc131\ud654\ub429\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"touchgfx::ClickListener< touchgfx::Box > box;\n")),(0,a.kt)("h3",h({},{id:"callback-implementation-in-user-code-2"}),"\uc0ac\uc6a9\uc790 \ucf54\ub4dc\ub97c \ud1b5\ud55c \ucf5c\ubc31 \uad6c\ud604"),(0,a.kt)("p",null,"Click Listener \ubbf9\uc2a4\uc778\uc774 \ud130\uce58 \uc774\ubca4\ud2b8\ub97c \uc218\uc2e0\ud558\uba74 \ucf5c\ubc31\uc774 \uc2e4\ud589\ub429\ub2c8\ub2e4. \uc774 \uc139\uc158\uc5d0\uc11c\ub294 \uc774\ub7ec\ud55c \ucf5c\ubc31\uc744 \uad6c\ud604\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \ub370\ubaa8\ub97c \uc18c\uac1c\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"TouchGFX Designer\uc758 Box \uc704\uc82f\uc5d0\uc11c Click Listener \ubbf9\uc2a4\uc778\uc744 \ud65c\uc131\ud654\ud588\ub2e4\uba74 \uc774\uc81c Box \uc704\uc82f\uc774 \uc704\uce58\ud55c \uae30\ubcf8 \ud074\ub798\uc2a4\uc5d0\uc11c \uc0c1\uc18d\ud558\ub294 \uc2a4\ud06c\ub9b0 \ud5e4\ub354 \ud074\ub798\uc2a4 \ud30c\uc77c\uc5d0 \ucf5c\ubc31 \uc120\uc5b8\uacfc \uc774\ubca4\ud2b8 \ucc98\ub9ac \ud568\uc218\ub97c \ucd94\uac00\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ucf5c\ubc31\uc740 \ubc14\uc778\ub529\ud560 \ud074\ub798\uc2a4 \uc720\ud615, \ucf5c\ubc31\uc774 \uc2dc\uc791\ub418\ub294 \uc704\uc82f, \uadf8\ub9ac\uace0 \ubc1c\uc0dd\ud558\ub294 \uc774\ubca4\ud2b8 \uc720\ud615, \uc138 \uac00\uc9c0\ub97c \uc120\uc5b8\ud574\uc57c \ud569\ub2c8\ub2e4. \uc544\ub798 \uc608\uc81c\uc5d0\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"Screen1View"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"const Box&")," \ubc0f ",(0,a.kt)("inlineCode",{parentName:"p"},"const ClickEvent&"),"\uac00 \uc5ec\uae30\uc5d0 \ud574\ub2f9\ud569\ub2c8\ub2e4."),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{5-6,9-10}","{5-6,9-10}":!0}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    // Declaring callback handler for Box\n    void boxClickHandler(const Box& b, const ClickEvent& e);\n\nprotected:\n    // Declaring callback type of box and clickEvent\n    Callback<Screen1View, const Box&, const ClickEvent&> boxClickedCallback;\n};\n")),(0,a.kt)("p",null,"\uadf8\ub7f0 \ub2e4\uc74c \ucf5c\ubc31 \uc120\uc5b8\uacfc \uc774\ubca4\ud2b8 \ucc98\ub9ac \ud568\uc218\ub97c View \uac1d\uccb4\ub85c \ubc14\uc778\ub529\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{2-3}","{2-3}":!0}),"Screen1View::Screen1View() :\n    // In constructor for callback, bind to this view object and bind which function to handle the event.\n    boxClickedCallback(this, &Screen1View::boxClickHandler) { }\n")),(0,a.kt)("p",null,"\ub2e4\uc74c \ub2e8\uacc4\uc5d0\uc11c\ub294 \ud130\uce58 \ub418\uc5c8\uc744 \ub54c \uc0ac\uc6a9\ud560 \ucf5c\ubc31\uc744  Box \uc704\uc82f\uc5d0\uac8c \uc54c\ub824\uc8fc\ub294 \uac83 \uc785\ub2c8\ub2e4. \uc774 \uc791\uc5c5\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"setupScreen()")," \ud30c\uc77c\uc5d0\uc11c \uc791\uc131\ud558\uba70, \ud574\ub2f9 \uc2a4\ud06c\ub9b0\uc73c\ub85c \uc804\ud658\ub420 \ub54c\ub9c8\ub2e4 \ucf5c\ubc31\uc774 \uc124\uc815\ub418\ub3c4\ub85d \ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{3-4}","{3-4}":!0}),"void Screen1View::setupScreen()\n{\n    // Add the callback to box\n    box.setClickAction(boxClickedCallback);\n}\n")),(0,a.kt)("p",null,"\ub9c8\uc9c0\ub9c9\uc73c\ub85c \ucf5c\ubc31\uc744 \ucc98\ub9ac\ud560 ",(0,a.kt)("inlineCode",{parentName:"p"},"boxClickHandler")," \ud568\uc218\ub97c \uad6c\ud604\ud569\ub2c8\ub2e4. \ud6a8\uacfc\uc801\uc778 \uc5f0\uc2b5\uc774 \ub420 \uc218 \uc788\ub3c4\ub85d \ucf5c\ubc31\uc744 \uc2dc\uc791\ud55c Box\uac00 \uc2e4\uc81c\ub85c \ud574\ub2f9\ud558\ub294 \u2018box\u2019\uc778\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,a.kt)(l.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::boxClickHandler(const Box& b, const ClickEvent& evt)\n{\n    if (&b == &box)\n    {\n        //Implement what should happen when 'box' is touched/clicked here.\n    }\n}\n")),(0,a.kt)("h3",h({},{id:"api-reference-2"}),"API \ucc38\uc870"),(0,a.kt)(o.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(i.Z,{to:"../../../api/classes/classtouchgfx_1_1_click_listener",mdxType:"Link"},"ClickListener \ud074\ub798\uc2a4\uc5d0 \ub300\ud55c API \ucc38\uc870"))),(0,a.kt)("h2",h({},{id:"draggable"}),"Draggable"),(0,a.kt)("p",null,"Draggable\uc740 \ud130\uce58 \uc785\ub825\uc744 \ud1b5\ud574 \uc704\uc82f\uc744 \ub4dc\ub798\uadf8\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ud558\ub294 \ubbf9\uc2a4\uc778\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774 \ubbf9\uc2a4\uc778\uc740 TouchGFX Designer\uc758 \ud574\ub2f9 \uc704\uc82f \uc18d\uc131\uc744 \uc0ac\uc6a9\ud574 \uc544\ub798 \uc774\ubbf8\uc9c0\uc640 \uac19\uc740 \u201cMixins\u201d \uc139\uc158\uc5d0\uc11c \ud65c\uc131\ud654\ud558\uba74 \uc801\uc6a9\ub429\ub2c8\ub2e4."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/mixins/mixins-draggable-enabled-4.17.webp",mdxType:"Figure"},"TouchGFX Designer\uc5d0\uc11c \ud65c\uc131\ud654\ub41c Draggable \ubbf9\uc2a4\uc778"),(0,a.kt)("p",null,"Draggable \ubbf9\uc2a4\uc778\uc744 \ud65c\uc131\ud654\ud558\uba74 \uc544\ub798\uc640 \uac19\uc774 \uc0dd\uc131\ub41c \uc704\uc82f\uc758 \uc120\uc5b8 \uc11c\uba85\uc774 \ubc14\ub01d\ub2c8\ub2e4. \uc5ec\uae30\uc11c ",(0,a.kt)("a",h({parentName:"p"},{href:"../ui-components/shapes/box"}),"Box"),"\uc758 Click Listener \ubbf9\uc2a4\uc778\uc774 \ud65c\uc131\ud654\ub429\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"touchgfx::Draggable< touchgfx::Box > box;\n")),(0,a.kt)("h3",h({},{id:"api-reference-3"}),"API \ucc38\uc870"),(0,a.kt)(o.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(i.Z,{to:"../../../api/classes/classtouchgfx_1_1_draggable",mdxType:"Link"},"Draggable \ud074\ub798\uc2a4\uc5d0 \ub300\ud55c API \ucc38\uc870"))))}A.isMDXComponent=!0}}]);