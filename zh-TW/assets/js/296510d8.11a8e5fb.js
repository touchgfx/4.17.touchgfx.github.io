"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1887],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return g}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=c(r),h=i,g=p["".concat(u,".").concat(h)]||p[h]||m[h]||o;return r?n.createElement(g,l(l({ref:t},s),{},{components:r})):n.createElement(g,l({ref:t},s))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=h;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[p]="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),i=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,o=e.height,l=(0,i.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:o,src:l})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:o,src:l})),n.createElement("p",null,e.children))}},39487:function(e,t,r){var n=r(67294),i=r(25026);t.Z=function(e){const t=e.width,r=e.height,o=e.points||[],l=(0,i.Z)(e.imageSource);return n.createElement("div",{style:{position:"relative"}},n.createElement("div",{class:"figure"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:t,height:r,src:l})),o.map((function(e,t){return n.createElement("svg",{style:{position:"absolute",top:0,left:0,pointerEvents:"none"},viewBox:"0 0 500 500"},n.createElement("g",{transform:"translate("+e[0]+", "+e[1]+")"},n.createElement("path",{id:"p1",d:"M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.659 5.381-1.078 1.274-2.303 2.722-3.341 4.697-1.038-1.976-2.263-3.423-3.341-4.697-1.601-1.893-2.659-3.143-2.659-5.381 0-2.984 2.804-5.602 6-5.602z",fill:"white",stroke:"black"}),n.createElement("text",{x:"11.7",y:"9.5","font-size":"x-small","dominant-baseline":"middle","text-anchor":"middle"},t+1)))})),n.createElement("p",null,e.children)))}},88678:function(e,t,r){var n=r(67294);class i extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{class:e},n.createElement("div",{class:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},93054:function(e,t,r){var n=r(67294),i=r(88678);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends n.Component{render(){return n.createElement(i.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}t.Z=l},82985:function(e,t,r){var n=r(67294);class i extends n.Component{render(){return n.createElement("code",{class:"shortcut"},this.props.children)}}t.Z=i},68179:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return k},default:function(){return x},frontMatter:function(){return T},metadata:function(){return v},toc:function(){return b}});var n=r(3905),i=r(44035),o=r(39487),l=r(82985),a=r(93054),u=r(39130),c=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&d(e,r,t[r]);if(m)for(var r of m(t))g.call(t,r)&&d(e,r,t[r]);return e};const T={id:"tutorial-01",title:"\u6559\u7a0b1\uff1a\u5617\u8a66\u4f7f\u7528\u7bc4\u4f8b"},k=void 0,v={unversionedId:"tutorials/tutorial-01",id:"tutorials/tutorial-01",title:"\u6559\u7a0b1\uff1a\u5617\u8a66\u4f7f\u7528\u7bc4\u4f8b",description:"\u8acb\u8ddf\u96a8\u672c\u6559\u7a0b\u5b78\u7fd2TouchGFX\u7684\u57fa\u790e\u77e5\u8b58\u3002 \u672c\u6559\u7a0b\u5c07\u5c55\u793a\u5982\u4f55\u5b89\u88ddTouchGFX\uff0c\u4ee5\u53ca\u5982\u4f55\u904b\u884c\u96a8\u9644\u7684TouchGFX Simulator\u548cSTM32\u8a55\u4f30\u5957\u4ef6\u7bc4\u4f8b\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/tutorials/tutorial-01.mdx",sourceDirName:"tutorials",slug:"/tutorials/tutorial-01",permalink:"/4.17/zh-TW/docs/tutorials/tutorial-01",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-01",title:"\u6559\u7a0b1\uff1a\u5617\u8a66\u4f7f\u7528\u7bc4\u4f8b"},sidebar:"docs",previous:{title:"TouchGFX\u4e2d\u7684\u5354\u529b\u5ee0\u5546\u7d44\u4ef6",permalink:"/4.17/zh-TW/docs/miscellaneous/3rd-party-components-in-touchgfx"},next:{title:"\u6559\u7a0b2\uff1a\u5275\u5efa\u60a8\u81ea\u5df1\u7684\u61c9\u7528",permalink:"/4.17/zh-TW/docs/tutorials/tutorial-02"}},y={},b=[{value:"\u5165\u9580",id:"getting-started",level:2},{value:"\u4f7f\u7528TouchGFX Simulator\u904b\u884c\u7bc4\u4f8b",id:"running-an-example-using-touchgfx-simulator",level:2},{value:"\u9078\u64c7\u4e3b\u984c",id:"\u9078\u64c7\u4e3b\u984c",level:3},{value:"\u9078\u64c7UI\u7bc4\u672c",id:"selecting-a-ui-template",level:3},{value:"\u5275\u5efa\u5c08\u6848",id:"creating-a-project",level:3},{value:"\u904b\u884cTouchGFX Simulator",id:"running-touchgfx-simulator",level:3},{value:"\u5728STM32\u8a55\u4f30\u5957\u4ef6\u4e0a\u904b\u884c\u7bc4\u4f8b",id:"running-an-example-on-an-stm32-evaluation-kit",level:2}],w={toc:b};function x(e){var t,r=e,{components:c}=r,d=((e,t)=>{var r={};for(var n in e)h.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&m)for(var n of m(e))t.indexOf(n)<0&&g.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},w),d),s(t,p({components:c,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u8acb\u8ddf\u96a8\u672c\u6559\u7a0b\u5b78\u7fd2TouchGFX\u7684\u57fa\u790e\u77e5\u8b58\u3002 \u672c\u6559\u7a0b\u5c07\u5c55\u793a\u5982\u4f55\u5b89\u88ddTouchGFX\uff0c\u4ee5\u53ca\u5982\u4f55\u904b\u884c\u96a8\u9644\u7684TouchGFX Simulator\u548cSTM32\u8a55\u4f30\u5957\u4ef6\u7bc4\u4f8b\u3002"),(0,n.kt)("h2",f({},{id:"getting-started"}),"\u5165\u9580"),(0,n.kt)("p",null,"\u9996\u5148\uff0c\u78ba\u4fdd\u60a8\u5df2\u5b89\u88dd\u4e86TouchGFX Designer\u3002 \u9ede\u64ca",(0,n.kt)("a",f({parentName:"p"},{href:"../introduction/installation"}),"\u6b64\u8655"),"\u95b1\u8b80\u95dc\u65bc\u5982\u4f55\u4e0b\u8f09\u548c\u5b89\u88ddTouchGFX\u7684\u66f4\u591a\u5167\u5bb9\u3002"),(0,n.kt)("h2",f({},{id:"running-an-example-using-touchgfx-simulator"}),"\u4f7f\u7528TouchGFX Simulator\u904b\u884c\u7bc4\u4f8b"),(0,n.kt)("p",null,"\u901a\u904eTouchGFX Designer\u53ef\u7372\u53d6TouchGFX\u7684\u8a31\u591aUI\u7bc4\u4f8b\u3002 \u9019\u4e9b\u7bc4\u4f8b\u53ef\u4ee5\u5e6b\u52a9\u60a8\u5b78\u7fd2\u66f4\u591a\u5177\u9ad4\u7684TouchGFX\u4e3b\u984c\uff0c\u5b83\u5011\u90fd\u5c08\u6ce8\u65bc\u4e00\u500b\u7279\u5b9a\u7684TouchGFX\u4e3b\u984c\u6216\u5c0f\u5de5\u5177\u3002"),(0,n.kt)("h3",f({},{id:"\u9078\u64c7\u4e3b\u984c"}),"\u9078\u64c7\u4e3b\u984c"),(0,n.kt)("p",null,"TouchGFX Designer\u6709\u6dfa\u8272\u548c\u6df1\u8272\u5169\u7a2e\u8272\u5f69\u4e3b\u984c\u3002 \u5728\u60a8\u7b2c\u4e00\u6b21\u555f\u52d5TouchGFX Designer\u6642\uff0c\u60a8\u6703\u88ab\u8981\u6c42\u9078\u64c7\u4e00\u500b\u4e3b\u984c\u3002 \u9078\u64c7\u662f\u53ef\u4ee5\u65e5\u5f8c\u66f4\u6539\u7684\u3002"),(0,n.kt)(o.Z,{points:[[270,172]],imageSource:"/img/tutorials/tutorial-01/select-theme.webp",mdxType:"FigureWithPoints"},"\u9078\u64c7\u4e3b\u984c"),(0,n.kt)("p",null,"\u9078\u64c7\u4e00\u500b\u4e3b\u984c\u4e26\u9ede\u64ca \u201c\u78ba\u5b9a\u201d (1)\u3002 \u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u6211\u5011\u5c07\u4f7f\u7528\u6dfa\u8272\u4e3b\u984c\u3002"),(0,n.kt)("h3",f({},{id:"selecting-a-ui-template"}),"\u9078\u64c7UI\u7bc4\u672c"),(0,n.kt)("p",null,"\u60a8\u65e2\u53ef\u4ee5\u5c07\u7bc4\u4f8b\u4f5c\u70ba\u5c08\u6848\u7684\u8d77\u9ede\uff0c\u4e5f\u53ef\u4ee5\u5c07\u5b83\u5011\u4f5c\u70ba\u53c3\u8003\u7bc4\u4f8b\u3002 \u60a8\u53ef\u4ee5\u5728PC\u4e0a\uff08\u4f7f\u7528TouchGFX Simulator\uff09\u3001STM32\u8a55\u4f30\u5957\u4ef6\u4e0a\u751a\u81f3\u662f\u57fa\u65bcSTM32\u7684\u5ba2\u88fd\u5316\u786c\u9ad4\u4e0a\u904b\u884c\u7bc4\u4f8b\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u70ba\u4e86\u5f9e\u7bc4\u4f8b\u555f\u52d5\u5c08\u6848\uff0c\u9ede\u64ca\u5de6\u4e0a\u89d2\u7684\u201cExamples\u201d\u5716\u793a (1)\uff1a")),(0,n.kt)(o.Z,{points:[[10,30]],imageSource:"/img/tutorials/tutorial-01/select-examples.webp",mdxType:"FigureWithPoints"},"\u6253\u958b\u7bc4\u4f8b"),(0,n.kt)("p",null,"\u73fe\u5728\uff0cTouchGFX Designer\u5c07\u986f\u793a\u5305\u542b\u53ef\u7528UI\u7bc4\u4f8b\u7684\u8996\u7a97\u3002"),(0,n.kt)(o.Z,{points:[[110,50]],imageSource:"/img/tutorials/tutorial-01/all-examples.webp",mdxType:"FigureWithPoints"},"\u9078\u64c7\u4e00\u500b\u7bc4\u4f8b"),(0,n.kt)("p",null,"\u9078\u64c7\u201cAnimated Image Example\u201d(1)\u3002"),(0,n.kt)(o.Z,{points:[[420,200]],imageSource:"/img/tutorials/tutorial-01/animated-image-selected.webp",mdxType:"FigureWithPoints"},"\u52d5\u756b\u5716\u50cf\u7bc4\u4f8b\u5df2\u9078\u4e2d"),(0,n.kt)("h3",f({},{id:"creating-a-project"}),"\u5275\u5efa\u5c08\u6848"),(0,n.kt)("p",null,"\u73fe\u5728\uff0c\u60a8\u53ef\u4ee5\u7528TouchGFX Designer\u5275\u5efa\u5c08\u6848\u3002 \u6211\u5011\u5728\u53f3\u5074\u8a2d\u5b9a\u4e86\u5c08\u6848\u540d\u7a31\u201cMyAnimatedImageExample\u201d\u3002 \u8acb\u6ce8\u610f\uff0c\u60a8\u9084\u53ef\u4ee5\u9078\u64c7\u5c08\u6848\u6240\u5c6c\u7684\u8cc7\u6599\u593e (1)\u3002"),(0,n.kt)("p",null,"\u9ede\u64ca\u201cCreate\u201d\u5275\u5efa\u5c08\u6848\u3002 \u73fe\u5728\uff0cTouchGFX Designer\u5c07\u57fa\u65bc\u7bc4\u4f8b\u5275\u5efa\u5b8c\u6574\u5c08\u6848\u3002 \u6b64\u904e\u7a0b\u9700\u8981\u7684\u6642\u9593\u96a8\u4e0b\u8f09\u901f\u5ea6\u800c\u8b8a\u5316\u3002"),(0,n.kt)("h3",f({},{id:"running-touchgfx-simulator"}),"\u904b\u884cTouchGFX Simulator"),(0,n.kt)("p",null,"TouchGFX Designer\u73fe\u5df2\u986f\u793a\u7d44\u5408\u5c08\u6848\u3002 \u70ba\u4e86\u904b\u884cWindows\u6a21\u64ec\u5668\uff0c\u9ede\u64ca\u53f3\u4e0b\u89d2\u7684\u201cRun Simulator\u201d\u6309\u9215 (1) \u6216\u8005\u6309\u4e0b\u9375\u76e4\u4e0a\u7684 ",(0,n.kt)(l.Z,{mdxType:"Shortcut"},"F5\u9375")," \u3002"),(0,n.kt)(o.Z,{points:[[463,245]],imageSource:"/img/tutorials/tutorial-01/the-project-is-ready-4-17.webp",mdxType:"FigureWithPoints"},"\u5c08\u6848\u5c31\u7dd2"),(0,n.kt)("p",null,"TouchGFX Simulator\u73fe\u5728\u986f\u793a\u70ba\u5e38\u898f\u7684Windows\u61c9\u7528\u3002 \u6a19\u984c\u5217\u986f\u793a\u61c9\u7528\u540d\u7a31\u3002 \u9ede\u64ca\u201cStart\u201d\u6309\u9215\u53ef\u8207\u7bc4\u4f8b\u4ea4\u4e92\u3002"),(0,n.kt)(i.Z,{width:"50%",imageSource:"/img/tutorials/tutorial-01/the-touchgfx-simulator-4-17.webp",mdxType:"Figure"},"The TouchGFX Simulator"),(0,n.kt)("p",null,"\u5728\u7e7c\u7e8c\u5b78\u7fd2\u6559\u7a0b\u4e4b\u524d\uff0c\u5982\u679c\u60a8\u9858\u610f\uff0c\u53ef\u4ee5\u518d\u5617\u8a66\u4e00\u4e9b\u7bc4\u4f8b\u3002 \u8207\u4e4b\u524d\u4e00\u6a23\uff0c\u53ea\u9700\u9ede\u64ca\u201cFile\u201d>\u201cNew \u201d\u4e26\u9078\u64c7\u65b0\u7684UI\u7bc4\u672c\u3002"),(0,n.kt)("h2",f({},{id:"running-an-example-on-an-stm32-evaluation-kit"}),"\u5728STM32\u8a55\u4f30\u5957\u4ef6\u4e0a\u904b\u884c\u7bc4\u4f8b"),(0,n.kt)("p",null,"\u5728\u9019\u4e00\u6b65\u4e2d\uff0c\u60a8\u5c07\u5b78\u7fd2\u5982\u4f55\u555f\u52d5STM32F746-Disco\u958b\u767c\u677f\u7684\u5c08\u6848\uff0c\u4ee5\u53ca\u5982\u4f55\u5728\u8a72\u958b\u767c\u677f\u4e0a\u904b\u884c\u4e00\u500bTouchGFX\u7bc4\u4f8b\u3002 \u5982\u679c\u60a8\u6c92\u6709STM32\u8a55\u4f30\u5957\u4ef6\uff0c\u53ef\u4ee5\u76f4\u63a5\u8df3\u904e\u9019\u4e00\u6b65\u3002 \u5982\u679c\u60a8\u6709\u5176\u4ed6SMT32\u8a55\u4f30\u5957\u4ef6\uff0c\u8acb\u67e5\u770b\u652f\u63f4\u7684\u958b\u767c\u677f\u5217\u8868\u4e2d\u662f\u5426\u5305\u542b\u60a8\u7684\u5957\u4ef6\u3002"),(0,n.kt)("p",null,"TouchGFX Designer\u6709\u4e00\u500b\u9810\u88fd\u61c9\u7528\u7bc4\u672c\u6e05\u55ae\uff0c\u5176\u4e2d\u5305\u542b\u5404\u7a2e\u4e0d\u540cSMT32\u8a55\u4f30\u5957\u4ef6\u7684\u5c0d\u61c9\u7bc4\u672c\u3002 \u70ba\u4e86\u57fa\u65bc\u9019\u6a23\u7684\u7bc4\u672c\u5275\u5efa\u5c08\u6848\uff0c\u9ede\u64ca\u5de6\u4e0a\u89d2\u7684\u201c\u7bc4\u4f8b\u201d\u5716\u793a\uff0c\u5728TouchGFX Designer\u4e2d\u91cd\u65b0\u958b\u59cb\u65b0\u5efa\u5c08\u6848\u3002"),(0,n.kt)(o.Z,{points:[[10,30]],imageSource:"/img/tutorials/tutorial-01/select-examples.webp",mdxType:"FigureWithPoints"},"\u5f9e\u7bc4\u4f8b\u958b\u59cb"),(0,n.kt)("p",null,"\u9078\u64c7\u201cAnimated Image Example\u201d\uff08\u82e5\u5c1a\u672a\u9078\u4e2d\uff09\u3002 \u9ede\u64ca\u201cSelect Hardware\u201d\u6309\u9215\u9078\u64c7\u7279\u5b9a\u786c\u9ad4\u3002 \u9810\u8a2d\u7684\u201cSimulator\u201d\u53ea\u5141\u8a31\u5728Windows\u4e0a\u904b\u884c\u3002"),(0,n.kt)(o.Z,{points:[[70,10]],imageSource:"/img/tutorials/tutorial-01/animated-image-selected.webp",mdxType:"FigureWithPoints"},"\u52d5\u756b\u5716\u50cf\u7bc4\u4f8b\u5df2\u9078\u4e2d"),(0,n.kt)("p",null,"TouchGFX Designer\u73fe\u5df2\u986f\u793a\u53ef\u7528\u7684\u786c\u9ad4\u8a2d\u5b9a\uff1a"),(0,n.kt)(o.Z,{points:[[176,140],[440,215]],imageSource:"/img/tutorials/tutorial-01/select-hardware.webp",mdxType:"FigureWithPoints"},"\u52d5\u756b\u5716\u50cf\u7bc4\u4f8b\u5df2\u9078\u4e2d"),(0,n.kt)("p",null,"\u5c0d\u65bc\u9019\u4e00\u6b65\uff0c\u6211\u5011\u5c07\u4f7f\u7528STM32F746-Disco\u958b\u767c\u677f\uff0c\u56e0\u6b64\u9ede\u64ca\u201cSTM32F746GDiscovery Kit\u201d(1) \u4e26\u9ede\u64ca\u201cSelect\u201d(2)\u3002"),(0,n.kt)("p",null,"\u73fe\u5728\u53ef\u4ee5\u5275\u5efa\u5c08\u6848\u3002 \u5982\u679c\u60a8\u9858\u610f\uff0c\u53ef\u4ee5\u66f4\u6539\u61c9\u7528\u540d\u7a31\u3002 \u9019\u88e1\u6211\u5011\u5c07\u5b83\u6539\u6210\u4e86\u201cMyAnimatedImageExample746\u201d\u3002 \u9ede\u64ca\u201cCreate\u201d\u6309\u9215\u7e7c\u7e8c\u3002"),(0,n.kt)(o.Z,{points:[[460,240]],imageSource:"/img/tutorials/tutorial-01/create-the-final-project-4-17.webp",mdxType:"FigureWithPoints"},"\u5275\u5efa\u5c08\u6848"),(0,n.kt)("p",null,"\u5c08\u6848\u7684\u5916\u89c0\u8207\u6211\u5011\u5728\u4e0a\u4e00\u6b65\u4e2d\u770b\u5230\u7684\u985e\u4f3c\u3002 \u552f\u4e00\u7684\u5340\u5225\u662f\uff0c\u73fe\u5728\u201cRun Simulator\u201d\u6309\u9215 (2) \u7684\u65c1\u908a\u591a\u4e86\u4e00\u500b\u201cRun Target\u201d\u6309\u9215 (1)\u3002 \u5728\u60a8\u6309\u4e0b\u6b64\u6309\u9215\uff08\u6216\u9375\u76e4\u4e0a\u7684 ",(0,n.kt)(l.Z,{mdxType:"Shortcut"},"F6")," />\uff09\u6642\uff0cTouchGFX Designer\u4f7f\u7528GNU ARM C++\u7de8\u8b6f\u5668\u7de8\u8b6f\u5c08\u6848\uff0c\u4e26\u5c07\u61c9\u7528\u71d2\u9304\u5230\u76ee\u6a19\u786c\u9ad4\u3002 \u6b64\u904e\u7a0b\u53ef\u80fd\u9700\u8981\u5e7e\u5206\u9418\uff0c\u5177\u9ad4\u53d6\u6c7a\u65bc\u96fb\u8166\u7684\u901f\u5ea6\u548c\u61c9\u7528\u7684\u8907\u96dc\u5ea6\u3002 TouchGFX Designer\u5e95\u90e8\u7684\u72c0\u614b\u5217\u5c07\u8f38\u51fa\u9032\u5ea6\u3002 \u5982\u9700\u95dc\u65bc\u5efa\u69cb\u548c\u71d2\u9304\u6b65\u9a5f\u7684\u66f4\u591a\u8cc7\u8a0a\uff0c\u53ef\u6309\u4e0b\u201cDetailed Log\u201d\u6309\u9215 (3) ",(0,n.kt)(l.Z,{mdxType:"Shortcut"},"\uff08\u6216\u9375\u76e4\u4e0a\u7684Alt + L")," \u9375\uff09\u3002"),(0,n.kt)(o.Z,{points:[[480,250],[465,250],[100,250],[0,240]],imageSource:"/img/tutorials/tutorial-01/the-project-is-ready-2-4-17.webp",mdxType:"FigureWithPoints"},"\u5c08\u6848\u5c31\u7dd2"),(0,n.kt)("p",null,"\u7576\u71d2\u9304\u5b8c\u6210\u6642\uff0cTouchGFX Designer\u5c07\u5728\u72c0\u614b\u5217\u4e2d\u5beb\u5165\u201c\u71d2\u9304\u5b8c\u6210\u201d\u3002 \u73fe\u5728\uff0c\u60a8\u61c9\u770b\u5230\u61c9\u7528\u5728\u958b\u767c\u677f\u4e0a\u904b\u884c\u3002"),(0,n.kt)(a.Z,{mdxType:"Note"},"\u70ba\u4e86\u71d2\u9304\u76ee\u6a19\u786c\u9ad4\uff0c\u60a8\u9700\u8981\u5b89\u88ddSTM32CubeProgrammer / ST-Link Utility\uff1a",(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)(u.Z,{to:"https://www.st.com/en/development-tools/stm32cubeprog.html",target:"_blank",mdxType:"Link"},"STM32CubeProgrammer")),(0,n.kt)("li",null,(0,n.kt)(u.Z,{to:"https://www.st.com/en/development-tools/stsw-link004.html",target:"_blank",mdxType:"Link"},"STM32ST-LINKUtility")))),(0,n.kt)("p",null,"\u5982\u679c\u60a8\u9ede\u64ca\u53f3\u4e0b\u89d2\u7684\u201cFiles\u201d\u6309\u9215 (4)\uff0cTouchGFX Designer\u5c07\u6253\u958b\u6a94\u6848\u700f\u89bd\u5668\uff0c\u5176\u4e2d\u986f\u793a\u4e86\u65b0\u5c08\u6848\u6240\u5728\u7684\u76ee\u9304\u3002 \u5c0e\u822a\u5230 ",(0,n.kt)("inlineCode",{parentName:"p"},"build\\bin")," \uff0c\u53ef\u4ee5\u770b\u5230\u4ee5\u4e0b\u6a94\uff1a"),(0,n.kt)(i.Z,{imageSource:"/img/tutorials/tutorial-01/the-projects-binary-files.webp",mdxType:"Figure"},"\u5c08\u6848\u7684\u4e8c\u9032\u4f4d\u6a94\u6848\u3002"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"target.hex")," \u6587\u4ef6\u662f\u958b\u767c\u677f\u7684STM32\u61c9\u7528\u3002 \u9019\u662fTouchGFX Designer\u525b\u624d\u7a0b\u5f0f\u8a2d\u8a08\u5230\u958b\u767c\u677f\u4e0a\u7684\u6a94\u6848\u3002"),(0,n.kt)("p",null,"\u60a8\u9084\u53ef\u4ee5\u4f7f\u7528STM32CubeProgrammer\u6216ST-Link Utility\u624b\u52d5\u71d2\u9304\u958b\u767c\u677f\u3002 \u53c3\u898b",(0,n.kt)("a",f({parentName:"p"},{href:"../development/ui-development/working-with-touchgfx/compiling-and-flashing"}),"\u201c\u7de8\u8b6f&\u71d2\u9304\u201d"),"\u9801\u9762\u77ad\u89e3\u8a73\u7d30\u8cc7\u8a0a\u3002"))}x.isMDXComponent=!0}}]);