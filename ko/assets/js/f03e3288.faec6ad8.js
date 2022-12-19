"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7131],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),s=a,k=u["".concat(c,".").concat(s)]||u[s]||m[s]||i;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=l},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},37793:function(e,t,n){var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=l},91583:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return N},default:function(){return x},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return w}});var r=n(3905),a=n(44035),i=n(29415),l=n(37793),o=n(31217),c=n(39130),p=n(22425),d=Object.defineProperty,u=Object.defineProperties,m=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&h(e,n,t[n]);if(s)for(var n of s(t))g.call(t,n)&&h(e,n,t[n]);return e};const f={id:"digital-clock",title:"Digital Clock"},N=void 0,b={unversionedId:"development/ui-development/ui-components/miscellaneous/digital-clock",id:"development/ui-development/ui-components/miscellaneous/digital-clock",title:"Digital Clock",description:"TouchGFX\uc5d0\uc11c Digital Clock\uc740 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc544\ub0a0\ub85c\uadf8 \uc2dc\uacc4 \ubc14\ub298\uc744 \uc0ac\uc6a9\ud574 \uc2dc\uac04\uc744 \ud45c\uc2dc\ud558\ub294 AnalogClock\uacfc \ub2ec\ub9ac \ub514\uc9c0\ud138 \ud14d\uc2a4\ud2b8\ub97c \uc0ac\uc6a9\ud574 \uc2dc\uac04\uc744 \ud45c\uc2dc\ud560 \uc218 \uc788\ub294 \uc704\uc82f\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/miscellaneous/digital-clock.mdx",sourceDirName:"development/ui-development/ui-components/miscellaneous",slug:"/development/ui-development/ui-components/miscellaneous/digital-clock",permalink:"/4.17/ko/docs/development/ui-development/ui-components/miscellaneous/digital-clock",draft:!1,tags:[],version:"current",frontMatter:{id:"digital-clock",title:"Digital Clock"},sidebar:"docs",previous:{title:"Analog Clock",permalink:"/4.17/ko/docs/development/ui-development/ui-components/miscellaneous/analog-clock"},next:{title:"Dynamic Graph",permalink:"/4.17/ko/docs/development/ui-development/ui-components/miscellaneous/dynamic-graph"}},y={},w=[{value:"\uc704\uc82f \uadf8\ub8f9",id:"widget-group",level:2},{value:"\uc18d\uc131",id:"properties",level:2},{value:"\uc2dc\uac04",id:"time",level:3},{value:"\uc778\ud130\ub799\uc158",id:"interactions",level:2},{value:"\uc561\uc158",id:"actions",level:3},{value:"\ud2b8\ub9ac\uac70",id:"triggers",level:3},{value:"\uc131\ub2a5",id:"performance",level:2},{value:"\uc608\uc81c",id:"examples",level:2},{value:"\uc0dd\uc131 \ucf54\ub4dc",id:"generated-code",level:3},{value:"\uc0ac\uc6a9\uc790 \ucf54\ub4dc",id:"user-code",level:3},{value:"TouchGFX Designer Example",id:"touchgfx-designer-examples",level:3},{value:"API \ucc38\uc870",id:"api-reference",level:2}],C={toc:w};function x(e){var t,n=e,{components:d}=n,h=((e,t)=>{var n={};for(var r in e)k.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=v(v({},C),h),u(t,m({components:d,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX\uc5d0\uc11c Digital Clock\uc740 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc544\ub0a0\ub85c\uadf8 \uc2dc\uacc4 \ubc14\ub298\uc744 \uc0ac\uc6a9\ud574 \uc2dc\uac04\uc744 \ud45c\uc2dc\ud558\ub294 ",(0,r.kt)("a",v({parentName:"p"},{href:"analog-clock"}),"AnalogClock"),"\uacfc \ub2ec\ub9ac \ub514\uc9c0\ud138 \ud14d\uc2a4\ud2b8\ub97c \uc0ac\uc6a9\ud574 \uc2dc\uac04\uc744 \ud45c\uc2dc\ud560 \uc218 \uc788\ub294 \uc704\uc82f\uc785\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/digital-clock/widget-appearance.webp",mdxType:"Figure"},"\uc2dc\ubbac\ub808\uc774\ud130\uc5d0\uc11c \uc2e4\ud589 \uc911\uc778 Digital Clock(\uac00\uc18d \uc601\uc0c1)"),(0,r.kt)("h2",v({},{id:"widget-group"}),"\uc704\uc82f \uadf8\ub8f9"),(0,r.kt)("p",null,"Digital Clock\uc740 TouchGFX Designer\uc758 Miscellaneous \uc704\uc82f \uadf8\ub8f9\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/digital-clock/widget-group-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\uc758 Digital Clock"),(0,r.kt)("h2",v({},{id:"properties"}),"\uc18d\uc131"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc18d\uc131 \uadf8\ub8f9")),(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc18d\uc131 \uc124\uba85")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\uc704\uc82f ",(0,r.kt)("em",{parentName:"td"},"\uc774\ub984"),"\uc785\ub2c8\ub2e4. ",(0,r.kt)("em",{parentName:"td"},"\uc774\ub294 TouchGFX Designer\uc640 \ucf54\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uace0\uc720 \uc2dd\ubcc4\uc790\uc785\ub2c8\ub2e4."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"X")," \uc640 ",(0,r.kt)("em",{parentName:"td"},"Y"),"\ub294 \uc0c1\uc704 \ub178\ub4dc\ub97c \uae30\uc900\uc73c\ub85c \uc704\uc82f\uc758 \uc67c\ucabd \uc0c1\ub2e8 \ubaa8\ud241\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"W")," \uc640 ",(0,r.kt)("em",{parentName:"td"},"H"),"\ub294 \uc704\uc82f\uc758 \uac00\ub85c \ubc0f \uc138\ub85c \uae38\uc774\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Lock"),"\uc740 \ud604\uc7ac\uc758 X, Y, W, H \uc704\uce58\uc5d0\uc11c \uc704\uc82f\uc758 \uace0\uc815 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\uc704\uc82f\uc744 \ud604\uc7ac \uc704\uce58\uc5d0 \uace0\uc815\uc2dc\ud0a4\uba74 \uc2a4\ud06c\ub9b0\uc744 \ud1b5\ud55c \uc704\uc82f \uc778\ud130\ub799\uc158\ub3c4 \ube44\ud65c\uc131\ud654\ub429\ub2c8\ub2e4. "),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Visible"),"\uc740 \uc704\uc82f\uc758 \ud45c\uc2dc \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("em",{parentName:"td"},"\uc704\uc82f\uc744 \ubcf4\uc774\uc9c0 \uc54a\uac8c \ud558\uba74 \uc2a4\ud06c\ub9b0\uc744 \ud1b5\ud55c \uc704\uc82f \uc778\ud130\ub799\uc158\ub3c4 \ube44\ud65c\uc131\ud654\ub429\ub2c8\ub2e4."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Time")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Use Am/Pm"),"\uc740 \uc2dc\uac04\uc5d0 \ub300\ud55c 12h \ub610\ub294 24h \ud615\uc2dd \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Display Leading Zero for Hours"),"\ub294 \uc2dc\uac04\uc744 \ub098\ud0c0\ub0bc \ub54c \uc120\ud589\ud558\ub294 0\uc758 \uc0ac\uc6a9 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Display Seconds"),"\ub294 \ucd08\uc758 \ud45c\uc2dc \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Initial Time"),"\uc740 \uc2dc\uacc4\uc5d0 \ud45c\uc2dc\ub418\ub294 \ucd08\uae30 \uc2dc\uac04\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Text")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Single Use")," \ub610\ub294 ",(0,r.kt)("em",{parentName:"td"},"Resource"),"\ub294 Digital Clock\uc5d0 \uc0ac\uc6a9\ud560 \ud14d\uc2a4\ud2b8 \ub9ac\uc18c\uc2a4\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"\ud14d\uc2a4\ud2b8\uac00 \uc62c\ubc14\ub974\uac8c \ud45c\uc2dc\ub418\ub824\uba74 \uc640\uc77c\ub4dc\uce74\ub4dc\uac00 \ud3ec\ud568\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Appearance")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Text Color"),"\ub294 Digital Clock\uc5d0\uc11c \ud14d\uc2a4\ud2b8 \uc0c9\uc0c1\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Alpha"),"\ub294 \uc704\uc82f\uc758 \ud22c\uba85\ub3c4\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"}," \uc704\uc82f\uc758 \uc54c\ud30c \uac12 \ubc94\uc704\ub294 0\ubd80\ud130 255\uae4c\uc9c0\uc785\ub2c8\ub2e4. 0\uc740 \uc644\uc804 \uc644\uc804 \ud22c\uba85\uc744, 255\ub294 \ubd88\ud22c\uba85\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixins")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"Draggable"),"\uc740 \ub7f0\ud0c0\uc784 \uc2dc \uc704\uc82f\uc758 \ub4dc\ub798\uadf8 \uac00\ub2a5 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"ClickListener"),"\ub294 \ud074\ub9ad\ud588\uc744 \ub54c \uc704\uc82f\uc758 \ucf5c\ubc31 \uc2e4\ud589 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"FadeAnimator"),"\ub294 \uc704\uc82f\uc758 ",(0,r.kt)("em",{parentName:"td"},"\uc54c\ud30c")," \uac12 \ubcc0\uacbd\uc5d0 \ub300\ud55c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"MoveAnimator"),"\ub294 \uc704\uc82f\uc758 ",(0,r.kt)("em",{parentName:"td"},"X")," \ubc0f ",(0,r.kt)("em",{parentName:"td"},"Y")," \uac12 \ubcc0\uacbd\uc5d0 \ub300\ud55c \uc560\ub2c8\uba54\uc774\uc158 \ucc98\ub9ac \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.")))),(0,r.kt)("h3",v({},{id:"time"}),"\uc2dc\uac04"),(0,r.kt)("p",null,"Time \uc18d\uc131 \uadf8\ub8f9\uc740 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ub2e4\ub978 \uc18d\uc131\uc744 \ubcc0\uacbd\ud558\uc5ec \uc2dc\uac04 \ud45c\uc2dc \ubc29\ubc95\uc744 \uc870\uc815\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 ",(0,r.kt)("em",{parentName:"p"},"Use Am/Pm"),"\uc744 \ud1a0\uae00\ud558\uba74 24\uc2dc\uac04 \ub610\ub294 12\uc2dc\uac04 AM/PM \uc911 \ud558\ub098\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c ",(0,r.kt)("em",{parentName:"p"},"Display Leading Zero for Hours"),"\ub97c \ud1a0\uae00\ud558\uba74 10\uc2dc \ubbf8\ub9cc \uc2dc\uac04\uc758 \ud45c\uc2dc \ubc29\ubc95(\uc608: 09:10:00 \ub610\ub294 9:10:00)\uc744, \uadf8\ub9ac\uace0 ",(0,r.kt)("em",{parentName:"p"},"Display Seconds\ub97c")," \ud1a0\uae00\ud558\uba74 \ucd08\uc758 \ud45c\uc2dc \uc5ec\ubd80(\uc608: 9:10:00 \ub610\ub294 9:10)\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"Am/Pm\uc744 \uc120\ud0dd\ud558\uba74 \ucf54\ub4dc \uc0dd\uc131\ub3c4 \uc57d\uac04 \ubc14\ub01d\ub2c8\ub2e4. Analog Clock\uc5d0\uc11c \uc2dc\uac04\uc744 \ucd08\uae30\ud654\ud560 \ub54c \ub2e4\uc74c \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"p"},"initializeTime24Hour(uint8_t hour, uint8_t minute, uint8_t second)")),(0,r.kt)("p",null,"12\uc2dc\uac04 \ud45c\uae30\ubc95\uc744 \uc0ac\uc6a9\ud560 \uacbd\uc6b0 \ub2e4\uc74c \ud568\uc218\uac00 \uc0ac\uc6a9\ub429\ub2c8\ub2e4.",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"p"},"initializeTime12Hour(uint8_t hour, uint8_t minute, uint8_t second, bool am)")),(0,r.kt)("p",null,"\uc2dc\uacc4\uc5d0 \ud45c\uc2dc\ub418\ub294 \uc2dc\uac04\uc744 \uc5c5\ub370\uc774\ud2b8\ud560 \ub54c \ub2e4\uc74c \ud568\uc218 \uc911 \ud558\ub098\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"p"},"setTime24Hour(uint8_t hour, uint8_t minute, uint8_t second)"),(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"p"},"setTime12Hour(uint8_t hour, uint8_t minute, uint8_t second, bool am)")),(0,r.kt)("h2",v({},{id:"interactions"}),"\uc778\ud130\ub799\uc158"),(0,r.kt)("p",null,"Digital Clock\uc5d0\uc11c \uc9c0\uc6d0\ub418\ub294 \uc561\uc158\uacfc \ud2b8\ub9ac\uac70\ub294 \ub2e4\uc74c \uc139\uc158\uc5d0\uc11c \uc124\uba85\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",v({},{id:"actions"}),"\uc561\uc158"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\ud45c\uc900 \uc704\uc82f \uc561\uc158")),(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\uc124\uba85")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\uc2dc\uac04\uc774 \uc9c0\ub098\uba74\uc11c \uc704\uc82f\uc744 \uc0c8\ub85c\uc6b4 \uc704\uce58\ub85c \uc774\ub3d9\uc2dc\ud0b5\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Fade widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\uc2dc\uac04\uc774 \uc9c0\ub098\uba74\uc11c \uc704\uc82f\uc758 \uc54c\ud30c \uac12\uc744 \ubcc0\uacbd\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\uc704\uc82f\uc744 \uc228\uae41\ub2c8\ub2e4(visibility\ub97c false\ub85c \uc124\uc815).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"\uc228\uae34 \uc704\uc82f\uc774 \ubcf4\uc774\ub3c4\ub85d \ub9cc\ub4ed\ub2c8\ub2e4(visibility\ub97c true\ub85c \uc124\uc815).")))),(0,r.kt)("h3",v({},{id:"triggers"}),"\ud2b8\ub9ac\uac70"),(0,r.kt)("p",null,"Digital Clock\uc740 \ud2b8\ub9ac\uac70\ub97c \uc2e4\ud589\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",v({},{id:"performance"}),"\uc131\ub2a5"),(0,r.kt)("p",null,"Digital Clock\uc740 ",(0,r.kt)("a",v({parentName:"p"},{href:"text-area"}),"\ud14d\uc2a4\ud2b8 \uc601\uc5ed"),"\uc73c\ub85c \uad6c\uc131\ub418\uc5b4 \uc131\ub2a5\uc5d0 \uc720\uc758\ubbf8\ud55c \uc601\ud5a5\uc744 \ubbf8\uce58\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \ub300\ubd80\ubd84\uc758 \ud50c\ub7ab\ud3fc\uc5d0\uc11c \uc18d\ub3c4\uac00 \ube60\ub978 \uc704\uc82f\uc73c\ub85c \uc54c\ub824\uc838 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub9ac\uae30 \uc131\ub2a5\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,r.kt)("a",v({parentName:"p"},{href:"../general-ui-component-performance"}),"\uc77c\ubc18 UI \uad6c\uc131\uc694\uc18c \uc131\ub2a5")," \uc139\uc158\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)("h2",v({},{id:"examples"}),"\uc608\uc81c"),(0,r.kt)("h3",v({},{id:"generated-code"}),"\uc0dd\uc131 \ucf54\ub4dc"),(0,r.kt)("p",null,"View \uae30\ubcf8 \ud074\ub798\uc2a4\uc758 \uc0dd\uc131 \ucf54\ub4dc\ub97c \ubcf4\uba74 TouchGFX Designer\uc5d0\uc11c Digital Clock\uc774 \uc5b4\ub5bb\uac8c \uc124\uc815\ub418\ub294\uc9c0 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(p.Z,{mdxType:"CodeHeader"},"mainViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n#include <texts/TextKeysAndLanguages.hpp>\n\nmainViewBase::mainViewBase()\n{\n    digitalClock.setPosition(75, 88, 331, 97);\n    digitalClock.setColor(touchgfx::Color::getColorFrom24BitRGB(0, 30, 65));\n    digitalClock.setTypedText(touchgfx::TypedText(T_SINGLEUSEID2));\n    digitalClock.displayLeadingZeroForHourIndicator(true);\n    digitalClock.setDisplayMode(touchgfx::DigitalClock::DISPLAY_24_HOUR);\n    digitalClock.setTime24Hour(7, 7, 0);\n\n    add(digitalClock);\n}\n\nvoid mainViewBase::setupScreen()\n{\n\n}\n')),(0,r.kt)(l.Z,{mdxType:"Tip"},"\uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc758 DigitalClock \ud074\ub798\uc2a4\uc5d0\uc11c \uc704\uc758 \ud568\uc218\uc640 \ub098\uba38\uc9c0 \ud568\uc218\ub4e4\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc704\uc82f\uc758 \ubaa8\uc591\uc744 \ubc14\uafb8\uace0 \uc2f6\ub2e4\uba74 ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"digitalClock.invalidate()")," \ud568\uc218\ub97c \ud638\ucd9c\ud558\uc5ec \uac15\uc81c\ub85c \ub2e4\uc2dc \uadf8\ub9ac\uae30\ub97c \ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("h3",v({},{id:"user-code"}),"\uc0ac\uc6a9\uc790 \ucf54\ub4dc"),(0,r.kt)("p",null,"\ub2e4\uc74c \uc608\uc81c\ub294 \uc2dc\uacc4\ub97c \ucc98\uc74c\uc5d0 \uc124\uc815\ud558\ub294 \ubc29\ubc95\uc744 \ub098\ud0c0\ub0b8 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)(p.Z,{mdxType:"CodeHeader"},"mainView.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"#ifndef MAINVIEW_HPP\n#define MAINVIEW_HPP\n\n#include <gui_generated/main_screen/mainViewBase.hpp>\n#include <gui/main_screen/mainPresenter.hpp>\n\nclass mainView : public mainViewBase\n{\npublic:\n    mainView();\n    virtual ~mainView() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void handleTickEvent();\n\nprotected:\n    int tickCounter;\n    int digitalHours;\n    int digitalMinutes;\n    int digitalSeconds;\n};\n\n#endif // MAINVIEW_HPP\n\n")),(0,r.kt)(p.Z,{mdxType:"CodeHeader"},"mainView.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"#include <gui/main_screen/mainView.hpp>\n\nmainView::mainView()\n{\n}\n\nvoid mainView::setupScreen()\n{\n    mainViewBase::setupScreen();\n    digitalHours = digitalClock.getCurrentHour();\n    digitalMinutes = digitalClock.getCurrentMinute();\n    digitalSeconds = digitalClock.getCurrentSecond();\n}\n\nvoid mainView::tearDownScreen()\n{\n    mainViewBase::tearDownScreen();\n}\n\nvoid mainView::handleTickEvent()\n{\n    tickCounter++;\n\n    if (tickCounter % 60 == 0)\n    {\n        if (++digitalSeconds >= 60)\n        {\n            digitalSeconds = 0;\n            if (++digitalMinutes >= 60)\n            {\n                digitalMinutes = 0;\n                if (++digitalHours >= 24)\n                {\n                    digitalHours = 0;\n                }\n            }\n        }\n\n        // Update the clock\n        digitalClock.setTime24Hour(digitalHours, digitalMinutes, digitalSeconds);\n    }\n}\n")),(0,r.kt)("h3",v({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Example"),(0,r.kt)("p",null,"Digital Clock\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\ub824\uba74TouchGFX Designer\uc5d0\uc11c \ub2e4\uc74c Example\uc744 \uc0ac\uc6a9\ud574 \uc0c8\ub85c\uc6b4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc0dd\uc131\ud558\uc2ed\uc2dc\uc624."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/clock-example-v4.17.webp",mdxType:"Figure"},"TouchGFX Designer\uc758 Clock Example"),(0,r.kt)("h2",v({},{id:"api-reference"}),"API \ucc38\uc870"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(c.Z,{to:"../../../../api/classes/classtouchgfx_1_1_digital_clock",mdxType:"Link"},"DigitalClock \ud074\ub798\uc2a4\uc5d0 \ub300\ud55c API \ucc38\uc870"))))}x.isMDXComponent=!0}}]);