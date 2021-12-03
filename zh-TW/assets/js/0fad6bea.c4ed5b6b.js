(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2126],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||s[h]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var r=n(67294);class o extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=o},44035:function(e,t,n){"use strict";var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},88678:function(e,t,n){"use strict";var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=o},93054:function(e,t,n){"use strict";var r=n(67294),o=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class a extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:i},this.props.children)}}t.Z=a},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return a}});var r=n(11368),o=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(r)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+a:a}(t,e,n,r)}}function a(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},4040:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return g},metadata:function(){return b},toc:function(){return v},default:function(){return k}});var r=n(3905),o=n(44035),i=n(93054),a=n(22425),c=Object.defineProperty,l=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&h(e,n,t[n]);if(p)for(var n of p(t))d.call(t,n)&&h(e,n,t[n]);return e};const f={id:"10-physical-buttons",title:"10. \u6309\u9215",sidebar_label:"10. \u6309\u9215"},g=void 0,b={unversionedId:"development/board-bring-up/how-to/10-physical-buttons",id:"development/board-bring-up/how-to/10-physical-buttons",isDocsHomePage:!1,title:"10. \u6309\u9215",description:"\u52d5\u6a5f",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/10-physical-buttons.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/10-physical-buttons",permalink:"/4.17/zh-TW/docs/development/board-bring-up/how-to/10-physical-buttons",version:"current",sidebarPosition:10,frontMatter:{id:"10-physical-buttons",title:"10. \u6309\u9215",sidebar_label:"10. \u6309\u9215"},sidebar:"docs",previous:{title:"9. \u89f8\u63a7\u63a7\u5236\u5668",permalink:"/4.17/zh-TW/docs/development/board-bring-up/how-to/09-touch-controller"},next:{title:"11. \u5feb\u9583\u8a18\u61b6\u9ad4\u4e0b\u8f09",permalink:"/4.17/zh-TW/docs/development/board-bring-up/how-to/11-flash-loader"}},v=[{value:"\u52d5\u6a5f",id:"motivation",children:[]},{value:"\u76ee\u6a19",id:"goal",children:[{value:"\u9a57\u8b49",id:"verification",children:[]}]},{value:"\u5148\u6c7a\u689d\u4ef6",id:"prerequisites",children:[]},{value:"\u57f7\u884c",id:"do",children:[{value:"\u6027\u80fd\u7b26\u5408\u9810\u671f",id:"performance-is-as-expected",children:[]}]}],y={toc:v};function k(e){var t,n=e,{components:c}=n,h=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},y),h),l(t,u({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("h2",m({},{id:"motivation"}),"\u52d5\u6a5f"),(0,r.kt)("p",null,"\u6309\u9215\u53ef\u4f5c\u70ba\u5916\u90e8\u4e8b\u4ef6\uff0c\u5728\u61c9\u7528\u7a0b\u5f0f\u958b\u767c\u671f\u9593\u7528\u4f5cTouchGFX Designer\u7684\u89f8\u767c\u4fe1\u865f\uff0c\u4e5f\u53ef\u4ee5\u7c21\u55ae\u5730\u7528\u4f5c\u61c9\u7528\u7a0b\u5f0f\u7684\u5f8c\u7aef\u4e8b\u4ef6\u3002"),(0,r.kt)(i.Z,{mdxType:"Note"},"\u5982\u679c\u60a8\u7684\u958b\u767c\u677f\u7121\u6309\u9215\uff0c\u8acb\u8df3\u904e\u6b64\u6b65\u3002"),(0,r.kt)("h2",m({},{id:"goal"}),"\u76ee\u6a19"),(0,r.kt)("p",null,"\u672c\u7bc0\u7684\u76ee\u6a19\u662f\u958b\u767c\u53ef\u7528\u65bc\u5f8c\u7e8cTouchGFX HAL\u548c/\u6216\u76f8\u95dc\u61c9\u7528\u958b\u767c\u4e2d\u7684\u4ee3\u78bc\u3002"),(0,r.kt)("h3",m({},{id:"verification"}),"\u9a57\u8b49"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u672c\u7bc0\u7684\u9a57\u8b49\u9ede\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"\u9a57\u8b49\u9ede"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"\u57fa\u672c\u539f\u7406"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u8a2d\u5b9aMCU"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u5fc5\u9808\u914d\u7f6eMCU\u7684 GPIO\uff0c\u4ee5\u8b80\u53d6\u6309\u9215\u72c0\u614b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u53ef\u8b80\u53d6\u5df2\u9023\u7dda\u7684GPIO"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u4e00\u65e6\u958b\u767c\u4e86\u7528\u65bc\u5f9eGPIO\u8b80\u53d6\u6309\u9215\u72c0\u614b\u7684\u7a0b\u5f0f\u78bc\uff0c\u5c31\u53ef\u4ee5\u5728\u96a8\u5f8c\u7684TouchGFX HAL\u958b\u767c\u4e2d\u4f7f\u7528\u8a72\u4ee3\u78bc\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u8b80\u53d6\u64cd\u4f5c\u6309\u9810\u671f\u9032\u884c"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u8f2a\u8a62\u662f\u61c9\u7528\u7a0b\u5f0f\u6e32\u67d3\u7b97\u5716\u6642\u9593\u7684\u4e00\u90e8\u5206\u3002 \u5982\u679c\u8f2a\u8a62\u6642\u9593\u592a\u9577\uff0c\u5247\u61c9\u5c07\u5176\u79fb\u81f3\u5176\u4ed6\u7dda\u7a0b\uff0c\u6216\u7522\u751f\u4e2d\u65b7\u3002")))),(0,r.kt)("h2",m({},{id:"prerequisites"}),"\u5148\u6c7a\u689d\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6309\u9375\u5fc5\u9808\u9023\u63a5\u5230MCU\u7684GPIO")),(0,r.kt)("h2",m({},{id:"do"}),"\u57f7\u884c"),(0,r.kt)("p",null,"\u4e0b\u5716\u986f\u793a\u4e86\u6309\u9215\u7684\u96fb\u8def\u5716\u53ca\u8207MCU\u7684\u9023\u7dda"),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/schematic-userbutton.png",noShadow:!0,mdxType:"Figure"}),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/schematic-mcu.png",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"In STM32CubeMX GPIO Port C Pin 13 (PC13) can be configured as an input and configured as a pull-down in the ",(0,r.kt)("strong",{parentName:"p"},"GPIO")," section of the ",(0,r.kt)("strong",{parentName:"p"},"System Core")," category."),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/cubemx-pc13.png",noShadow:!0,mdxType:"Figure"}),(0,r.kt)(o.Z,{imageSource:"/img/development/board-bring-up/gpio/cubemx-gpioconf.png",noShadow:!0,mdxType:"Figure"}),(0,r.kt)("p",null,"The code generated by STM32CubeMX will setup the appropriate GPIO port(s) which can now be read:"),(0,r.kt)(a.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"uint8_t key;\nif (HAL_GPIO_ReadPin(GPIOC, GPIO_PIN_13) != GPIO_PIN_RESET)\n{\n    key = 1;\n}\n")),(0,r.kt)("h3",m({},{id:"performance-is-as-expected"}),"\u6027\u80fd\u7b26\u5408\u9810\u671f"),(0,r.kt)("p",null,"\u5982\u679c\u6309\u9375\u8f2a\u8a62\u7a0b\u5f0f\u78bc\u8207TouchGFX\u61c9\u7528\u7a0b\u5f0f\u5728\u76f8\u540c\u7684\u57f7\u884c\u7dd2\u4e2d\u57f7\u884c\uff0c\u61c9\u7576\u80fd\u57281ms\u5167\u8f2a\u8a62\u6309\u9215\u7684\u72c0\u614b\u3002 \u5982\u679c\u8f2a\u8a62\u901f\u5ea6\u4e0d\u5920\u5feb\uff0c\u53ef\u5728\u5f8c\u671f\u5c07\u8f2a\u8a62\u7a0b\u5f0f\u78bc\u8abf\u6574\u70ba\u7368\u7acb\u5de5\u4f5c\uff0c\u6216\u57fa\u65bc\u4e2d\u65b7\u8b80\u53d6\u6309\u9375\u72c0\u614b\u3002"))}k.isMDXComponent=!0}}]);