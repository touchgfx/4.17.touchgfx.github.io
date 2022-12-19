"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[622],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,h=m["".concat(p,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[m]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29415:function(e,t,n){var r=n(67294),o=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=l},88678:function(e,t,n){var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=o},65407:function(e,t,n){var r=n(67294),o=n(25026);t.Z=function(e){var t,n;const i=(0,o.Z)(e.url),l=null!=(t=e.width)?t:"100%",a=null!=(n=e.height)?n:"100%";return r.createElement("div",{class:"loop-video"},r.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:l,height:a},r.createElement("source",{src:i,type:"video/mp4"}),"Your browser does not support the video tag."),r.createElement("p",null,e.children))}},24150:function(e,t,n){n.r(t),n.d(t,{assets:function(){return x},contentTitle:function(){return g},default:function(){return b},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return y}});var r=n(3905),o=n(29415),i=n(39130),l=n(65407),a=Object.defineProperty,p=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&d(e,n,t[n]);if(u)for(var n of u(t))s.call(t,n)&&d(e,n,t[n]);return e};const f={id:"examples",title:"Example \ubc0f Board Specific Demo"},g=void 0,v={unversionedId:"development/ui-development/working-with-touchgfx/examples",id:"development/ui-development/working-with-touchgfx/examples",title:"Example \ubc0f Board Specific Demo",description:"TouchGFX\ub294 \uc5ec\ub7ec \uac00\uc9c0 \uac00\ub2a5\uc131\uacfc \uae30\ub2a5\uc744 \ub354 \uc0b4\ud3b4\ubcfc \uc218 \uc788\ub3c4\ub85d \ub2e4\uc218\uc758 Example\uacfc Demo\ub97c \uc0ac\uc804 \uc81c\uc791\ud558\uc5ec \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc81c\uacf5\ud569\ub2c8\ub2e4. TouchGFX Designer\uc758 Lobby\ub97c \ud1b5\ud574 \uc774\ub7ec\ud55c Example\uacfc Demo\uc5d0 \uc561\uc138\uc2a4\ud560 \uc218 \uc788\uc73c\uba70, \uc5ec\uae30\uc5d0\ub294 \ubb34\ub8cc \uc774\ubbf8\uc9c0, \ucf54\ub4dc \ub4f1\uc774 \ud3ec\ud568\ub418\uc5b4 \uc790\uccb4\uc801\uc73c\ub85c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uac1c\ubc1c\ud560 \ub54c \uae30\ucd08 \uc790\ub8cc\ub85c\ub3c4 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Example\uacfc Demo\uc5d0\ub294 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\ub294 TouchGFX Board Setup\uc774 \ud568\uaed8 \uc81c\uacf5\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c TouchGFX\ub97c \ucc98\uc74c \uc0ac\uc6a9\ud558\ub294 \ucd08\ubcf4\uc790\ub77c\uba74 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uae30\ub2a5\uc5d0 \ub300\ud55c \uc544\uc774\ub514\uc5b4\uc640 \uc815\ubcf4\ub97c \uc5bb\uc744 \uc218 \uc788\ub294 \ucd9c\ubc1c\uc810\uc774 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/examples.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/examples",permalink:"/4.17/ko/docs/development/ui-development/working-with-touchgfx/examples",draft:!1,tags:[],version:"current",frontMatter:{id:"examples",title:"Example \ubc0f Board Specific Demo"},sidebar:"docs",previous:{title:"\ub514\ubc84\uae45",permalink:"/4.17/ko/docs/development/ui-development/working-with-touchgfx/debugging"},next:{title:"\ud0a4\ubcf4\ub4dc \ub2e8\ucd95\ud0a4",permalink:"/4.17/ko/docs/development/ui-development/working-with-touchgfx/keyboard-shortcuts"}},x={},y=[{value:"Example\uacfc Demo",id:"ui-templates",level:2},{value:"Board Specific Demo",id:"online-applications",level:2}],w={toc:y};function b(e){var t,n=e,{components:a}=n,d=((e,t)=>{var n={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=h(h({},w),d),p(t,c({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX\ub294 \uc5ec\ub7ec \uac00\uc9c0 \uac00\ub2a5\uc131\uacfc \uae30\ub2a5\uc744 \ub354 \uc0b4\ud3b4\ubcfc \uc218 \uc788\ub3c4\ub85d \ub2e4\uc218\uc758 Example\uacfc Demo\ub97c \uc0ac\uc804 \uc81c\uc791\ud558\uc5ec \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc81c\uacf5\ud569\ub2c8\ub2e4. TouchGFX Designer\uc758 ",(0,r.kt)("a",h({parentName:"p"},{href:"../designer-user-guide/startup-window"}),"Lobby"),"\ub97c \ud1b5\ud574 \uc774\ub7ec\ud55c Example\uacfc Demo\uc5d0 \uc561\uc138\uc2a4\ud560 \uc218 \uc788\uc73c\uba70, \uc5ec\uae30\uc5d0\ub294 \ubb34\ub8cc \uc774\ubbf8\uc9c0, \ucf54\ub4dc \ub4f1\uc774 \ud3ec\ud568\ub418\uc5b4 \uc790\uccb4\uc801\uc73c\ub85c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uac1c\ubc1c\ud560 \ub54c \uae30\ucd08 \uc790\ub8cc\ub85c\ub3c4 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Example\uacfc Demo\uc5d0\ub294 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\ub294 ",(0,r.kt)("a",h({parentName:"p"},{href:"../../development-introduction#application-templates-ats"}),"TouchGFX Board Setup"),"\uc774 \ud568\uaed8 \uc81c\uacf5\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c TouchGFX\ub97c \ucc98\uc74c \uc0ac\uc6a9\ud558\ub294 \ucd08\ubcf4\uc790\ub77c\uba74 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uae30\ub2a5\uc5d0 \ub300\ud55c \uc544\uc774\ub514\uc5b4\uc640 \uc815\ubcf4\ub97c \uc5bb\uc744 \uc218 \uc788\ub294 \ucd9c\ubc1c\uc810\uc774 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"Example\uacfc Demo \uc911\uc5d0\ub294 \ub2e8\uc77c \uae30\ub2a5\uc5d0 \ucd08\uc810\uc744 \ub454 \uac83\uc774 \uc788\ub294 \ubc18\uba74 TouchGFX\uc5d0\uc11c \uc5ec\ub7ec \uac00\uc9c0 \ub2e4\uc591\ud55c \uae30\ub2a5\uc744 \uad6c\ud604\ud558\ub294 \uac83\ub4e4\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. Demo\ub294 ",(0,r.kt)("a",h({parentName:"p"},{href:"#ui-templates"}),"Demo"),"\uc640 ",(0,r.kt)("a",h({parentName:"p"},{href:"#online-applications"}),"Board Specific Demo"),"\ub85c \uad6c\ubd84\ub429\ub2c8\ub2e4."),(0,r.kt)("h2",h({},{id:"ui-templates"}),"Example\uacfc Demo"),(0,r.kt)("p",null,"Example\uc774\ub780 \uc77c\ubc18\uc801\uc73c\ub85c \uc6a9\ub7c9\uc774 \uc791\uc740 \uc790\ub9bd\ud615 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ub9d0\ud558\uba70, \uc8fc\ub85c \uac01\uc885 \uc704\uc82f \ub4f1 \ud2b9\uc815 \uae30\ub2a5\uc5d0 \uc911\uc810\uc744 \ub450\uace0 \uc788\uc2b5\ub2c8\ub2e4. Example\uc740 \ubaa8\ub4e0 STM32 \ud3c9\uac00 \ud0a4\ud2b8\uc640 PC \uc2dc\ubbac\ub808\uc774\ud130\uc5d0\uc11c \uc2e4\ud589\ub418\uc9c0\ub9cc \ucd5c\uc0c1\uc758 \uacbd\ud5d8\uc744 \uc6d0\ud55c\ub2e4\uba74 Example\uc758 \ud574\uc0c1\ub3c4\uac00 \ubcf4\ub4dc\uc758 \ud574\uc0c1\ub3c4\uc5d0 \ub9de\ub294 \uacbd\uc6b0\uc5d0 \ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. \uc77c\ubd80 Example\uc740 \ud2b9\uc815 \uc0c9 \uc2ec\ub3c4\ub97c \uc5fc\ub450\uc5d0 \ub450\uace0 \ube4c\ub4dc\ub418\uc5b4 \uc0c9 \uc2ec\ub3c4\uac00 \ub0ae\uc740 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0\uc11c\ub294 \ud45c\uc2dc\ub418\uc9c0 \uc54a\uc744 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"Demo\uc5d0\ub294 TouchGFX \ud300\uc5d0\uc11c \ud488\uc9c8 \ub192\uc740 UI \uc124\uacc4\uc640 \ud568\uaed8 \ub354\uc6b1 \ub2e4\uc591\ud55c \uae30\ub2a5\uc744 \uc120\ubcf4\uc77c \ubaa9\uc801\uc73c\ub85c \uc0dd\uc131\ud55c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\ub4e4\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \ucc98\uc74c\uc5d0 TouchGFX\uc758 \uae30\ub2a5\uc744 \uc54c\uc544\ubcf4\ub294 \ub370 \ud6a8\uacfc\uc801\uc778 \ucd9c\ubc1c\uc810\uc774 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,'Example\uc774\ub098 Demo\ub97c \uc0ac\uc6a9\ud574 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud558\ub824\uba74 \uba3c\uc800 \ub85c\ube44\uc5d0\uc11c \uc67c\ucabd \uc0c1\ub2e8\uc5d0 \uc788\ub294 "Examples" \ub610\ub294 "Demos"\ub97c \ud074\ub9ad\ud558\uc5ec \uc0ac\uc6a9 \uac00\ub2a5\ud55c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc788\ub294\uc9c0 \ud655\uc778\ud55c \ud6c4 \uc6d0\ud558\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4. \uc635\uc158\uc73c\ub85c \ub4dc\ub86d\ub2e4\uc6b4 \uba54\ub274\uc5d0\uc11c \ub2e4\ub978 \ud574\uc0c1\ub3c4\uc640 \uc0c9 \uc2ec\ub3c4\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc9c0\uc6d0\ub418\ub294 \ud558\ub4dc\uc6e8\uc5b4\uc5d0\uc11c \uc2e4\ud589\ud558\ub824\uba74 \ucc3d \uc0c1\ub2e8\uc5d0 \uc788\ub294 "Select Hardware"\ub97c \ud074\ub9ad\ud558\uace0 \uc6d0\ud558\ub294 \ubcf4\ub4dc\ub97c \uc120\ud0dd\ud55c \ub2e4\uc74c "Select"\ub97c \ub204\ub985\ub2c8\ub2e4. \ub9c8\uc9c0\ub9c9\uc73c\ub85c \'Create\'\ub97c \ud074\ub9ad\ud558\uba74 \uc120\ud0dd\ud55c TouchGFX Board Setup \ubc0f Example \ub610\ub294 Demo\uc5d0\uc11c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4. \uc774\uc81c \'Run Simulator\' \ub610\ub294 \'Run Target\'\uc744 \ud074\ub9ad\ud558\uba74 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc2e4\ud589\ub418\ub294 \ubaa8\uc2b5\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.'),(0,r.kt)("p",null,"\uc704\uc5d0\uc11c \uc124\uba85\ud55c \uc0dd\uc131 \ub2e8\uacc4\ub97c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac\ud558\uba74 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)(l.Z,{url:"/videos/development/ui-development/working-with-touchgfx/examples/application-template-ui-template.mp4",mdxType:"LoopVideo"},"Example\uc744 \uc0ac\uc6a9\ud574 \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131\ud558\uae30"),(0,r.kt)("h2",h({},{id:"online-applications"}),"Board Specific Demo"),(0,r.kt)("p",null,"Board Specific Demo\ub294 \ud2b9\uc815 \ud558\ub4dc\uc6e8\uc5b4 \uc194\ub8e8\uc158\uc5d0 \ub9de\ucdb0 \ud2b9\ubcc4\ud558\uac8c \uc0dd\uc131\ub41c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774\ubbc0\ub85c \ub300\uc0c1 \ud558\ub4dc\uc6e8\uc5b4\uac00 \uc544\ub2cc STM32 \ud3c9\uac00 \ud0a4\ud2b8(PC \uc2dc\ubbac\ub808\uc774\ud130 \uc81c\uc678)\uc5d0\uc11c\ub294 \uc2e4\ud589\ub418\uc9c0 \uc54a\uc744 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 \uc77c\ubc18\uc801\uc73c\ub85c \uc6a9\ub7c9\uc774 \ud6e8\uc52c \ucee4\uc11c TouchGFX \ud504\ub808\uc784\uc6cc\ud06c\uc758 \uac01\uc885 \uae30\ub2a5\uc744 \uc0b4\ud3b4\ubcfc \uc218 \uc788\uc744 \ubfd0\ub9cc \uc544\ub2c8\ub77c \ud558\ub4dc\uc6e8\uc5b4 \ud1b5\ud569\uc774 \uc0d8\ud50c\ub85c \ud3ec\ud568\ub418\ub294 \uacbd\uc6b0\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"Board Specific Demo\ub97c \uc0ac\uc6a9\ud574 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud558\ub824\uba74 \uba3c\uc800 \ub85c\ube44\uc5d0\uc11c \uc67c\ucabd \uc0c1\ub2e8\uc5d0 \uc788\ub294 'Demos' \ud0ed\uc744 \ud074\ub9ad\ud558\uc5ec \uc561\uc138\uc2a4\ud569\ub2c8\ub2e4. \ucc3d \uc0c1\ub2e8\uc5d0 \uc788\ub294 \"Board Specific Demo\" \ub77c\ubca8\uc744 \ud074\ub9ad\ud558\uc5ec \uc0ac\uc6a9 \uac00\ub2a5\ud55c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ud655\uc778\ud569\ub2c8\ub2e4. \ub9c8\uc9c0\ub9c9\uc73c\ub85c \uc6d0\ud558\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uacfc 'Create'\ub97c \ucc28\ub840\ub85c \ud074\ub9ad\ud558\uc5ec \uc644\ub8cc\ud569\ub2c8\ub2e4. \uc774\uc81c 'Run Simulator' \ub610\ub294 'Run Target'\uc744 \ud074\ub9ad\ud558\uba74 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc2e4\ud589\ub418\ub294 \ubaa8\uc2b5\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc704\uc5d0\uc11c \uc124\uba85\ud55c \uc0dd\uc131 \ub2e8\uacc4\ub97c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac\ud558\uba74 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)(l.Z,{url:"/videos/development/ui-development/working-with-touchgfx/examples/online-application.mp4",mdxType:"LoopVideo"},"Board Specific Demo\ub97c \uc0ac\uc6a9\ud574 \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131\ud558\uae30"),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},"Example\uc774\ub098 Demo\ub97c \ud1b5\ud55c \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc0dd\uc131 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uace0 \uc2f6\ub2e4\uba74 ",(0,r.kt)(i.Z,{to:"../designer-user-guide/startup-window",mdxType:"Link"},"Lobby \uc139\uc158"),"\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."))}b.isMDXComponent=!0}}]);