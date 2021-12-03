(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[622],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29415:function(e,t,n){"use strict";var r=n(67294),o=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class a extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=a},88678:function(e,t,n){"use strict";var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=o},65407:function(e,t,n){"use strict";var r=n(67294),o=n(25026);t.Z=function(e){var t,n;const i=(0,o.Z)(e.url),a=null!=(t=e.width)?t:"100%",l=null!=(n=e.height)?n:"100%";return r.createElement("div",{class:"loop-video"},r.createElement("video",{muted:!0,loop:!0,playsInline:!0,autoPlay:!0,width:a,height:l},r.createElement("source",{src:i,type:"video/mp4"}),"Your browser does not support the video tag."),r.createElement("p",null,e.children))}},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r=n(67294),o=n(73727),i=n(11368),a=n(35096),l=n(84487);const s=(0,r.createContext)({collectLink:()=>{}});var c=n(25026),u=n(67023),p=Object.defineProperty,d=Object.defineProperties,h=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&v(e,n,t[n]);if(f)for(var n of f(t))g.call(t,n)&&v(e,n,t[n]);return e};var w=function(e){var t,n=e,{isNavLink:p,to:v,href:w,activeClassName:y,isActive:x,"data-noBrokenLinkCheck":k,autoAddBaseUrl:O=!0}=n,E=((e,t)=>{var n={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&f)for(var r of f(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:T}}=(0,i.Z)(),{withBaseUrl:D}=(0,c.C)(),j=(0,r.useContext)(s),P=v||w,S=(0,a.Z)(P),C=null==P?void 0:P.replace("pathname://","");let B=void 0!==C?(F=C,O&&(e=>e.startsWith("/"))(F)?D(F):F):void 0;var F;B&&S&&(B=(0,u.applyTrailingSlash)(B,T));const X=(0,r.useRef)(!1),G=p?o.OL:o.rU,Z=l.Z.canUseIntersectionObserver;let L;(0,r.useEffect)((()=>(!Z&&S&&null!=B&&window.docusaurus.prefetch(B),()=>{Z&&L&&L.disconnect()})),[B,Z,S]);const M=null!==(t=null==B?void 0:B.startsWith("#"))&&void 0!==t&&t,N=!B||!S||M;return B&&S&&!M&&!k&&j.collectLink(B),N?r.createElement("a",b(b({href:B},P&&!S&&{target:"_blank",rel:"noopener noreferrer"}),E)):r.createElement(G,b((_=b({},E),d(_,h({onMouseEnter:()=>{X.current||null==B||(window.docusaurus.preload(B),X.current=!0)},innerRef:e=>{var t,n;Z&&e&&S&&(t=e,n=()=>{null!=B&&window.docusaurus.prefetch(B)},L=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(L.unobserve(t),L.disconnect(),n())}))})),L.observe(t))},to:B||""}))),p&&{isActive:x,activeClassName:y}));var _}},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return a}});var r=n(11368),o=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(r)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+a:a}(t,e,n,r)}}function a(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),r="/"===n?"/":(o=n,t?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(n,r)}},67023:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var i=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},14500:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return g},metadata:function(){return v},toc:function(){return b},default:function(){return y}});var r=n(3905),o=n(29415),i=n(31217),a=n(65407),l=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&h(e,n,t[n]);if(u)for(var n of u(t))d.call(t,n)&&h(e,n,t[n]);return e};const m={id:"examples",title:"Examples and Board Specific Demos"},g=void 0,v={unversionedId:"development/ui-development/working-with-touchgfx/examples",id:"development/ui-development/working-with-touchgfx/examples",isDocsHomePage:!1,title:"Examples and Board Specific Demos",description:"To help further explore the possibilities and features of TouchGFX, multiple premade Examples and Demos are made available to the user. These Examples and Demos can be accessed through the Lobby of TouchGFX Designer and all include free-to-use images, code, etc., which means that they can even be used as a base to build your own unique application from. Examples and Demos are combined with TouchGFX Board Setup to create TouchGFX applications. If you are new to TouchGFX, this can be a great starting source of inspiration and knowledge about how TouchGFX applications function.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/examples.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/examples",permalink:"/4.17/ko/docs/development/ui-development/working-with-touchgfx/examples",version:"current",frontMatter:{id:"examples",title:"Examples and Board Specific Demos"},sidebar:"docs",previous:{title:"Debugging",permalink:"/4.17/ko/docs/development/ui-development/working-with-touchgfx/debugging"},next:{title:"Keyboard Shortcuts",permalink:"/4.17/ko/docs/development/ui-development/working-with-touchgfx/keyboard-shortcuts"}},b=[{value:"Examples and Demos",id:"ui-templates",children:[]},{value:"Board Specific Demos",id:"online-applications",children:[]}],w={toc:b};function y(e){var t,n=e,{components:l}=n,h=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},w),h),s(t,c({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"To help further explore the possibilities and features of TouchGFX, multiple premade Examples and Demos are made available to the user. These Examples and Demos can be accessed through the ",(0,r.kt)("a",f({parentName:"p"},{href:"../designer-user-guide/startup-window"}),"Lobby")," of TouchGFX Designer and all include free-to-use images, code, etc., which means that they can even be used as a base to build your own unique application from. Examples and Demos are combined with ",(0,r.kt)("a",f({parentName:"p"},{href:"../../development-introduction#application-templates-ats"}),"TouchGFX Board Setup")," to create TouchGFX applications. If you are new to TouchGFX, this can be a great starting source of inspiration and knowledge about how TouchGFX applications function."),(0,r.kt)("p",null,"Some Examples and Demos focus on single features while others implement several different functionalities found in TouchGFX. Demos are divided into two different types: ",(0,r.kt)("a",f({parentName:"p"},{href:"#ui-templates"}),"Demos")," and ",(0,r.kt)("a",f({parentName:"p"},{href:"#online-applications"}),"Board Specific Demos"),"."),(0,r.kt)("h2",f({},{id:"ui-templates"}),"Examples and Demos"),(0,r.kt)("p",null,"Examples are generally smaller, more self-contained applications that mostly focus on specific features such as different widgets. Examples can run on any STM32 evaluation kit and the PC simulator, but for the best experience it is encouraged to create projects where the resolution of the Example fits the resolution of your board. Some Examples are also built with specific color depths in mind, which means they might not display as well on lower color depth displays."),(0,r.kt)("p",null,"The Demos include several applications made by the TouchGFX team which showcase more features with higher quality UI design. These can be a great place to start to get a feeling for what TouchGFX is capable of."),(0,r.kt)("p",null,'To create an application using an Example or Demo, start by clicking the "Examples" or "Demos" in the top left of the lobby to see the available applications and click on whichever application you want. Optionally, select another resolution and color depth in the drop downs. If you wish to run on a supported hardware click on the "Select Hardware" in the top of the window, choose whichever board you wish and press "Select". Finally, press \'Create\' to create an application from the selected TouchGFX Board Setup and Example or Demo. Press either \'Run Simulator\' or \'Run Target\' to see the application running.'),(0,r.kt)("p",null,"An animation of these steps can be seen below:"),(0,r.kt)(a.Z,{url:"/videos/development/ui-development/working-with-touchgfx/examples/application-template-ui-template.mp4",mdxType:"LoopVideo"},"Creating a project using an Example"),(0,r.kt)("h2",f({},{id:"online-applications"}),"Board Specific Demos"),(0,r.kt)("p",null,"Board Specific Demos are out-of-the-box applications for specific hardware solutions and it is therefore not possible to run these on any other STM32 evaluation kit than the one it was created for (aside from the PC simulator). These applications are generally a lot larger and explore multiple different features of the TouchGFX framework and can also include sample integration with the hardware."),(0,r.kt)("p",null,"To create an application using a Board Specific Demo, first access these by clicking the 'Demos' tab in the top left of the lobby. Click the \"Board Specific Demo\" label in the top of the window to show what applications are available. Click the application you want and finish by pressing 'Create'. Either press 'Run Simulator' or 'Run Target' to see the application running."),(0,r.kt)("p",null,"An animation of these steps can be seen below:"),(0,r.kt)(a.Z,{url:"/videos/development/ui-development/working-with-touchgfx/examples/online-application.mp4",mdxType:"LoopVideo"},"Creating a project using a Board Specific Demo"),(0,r.kt)(o.Z,{mdxType:"FurtherReading"},"To read more about how to create applications using Examples or Demos, see the ",(0,r.kt)(i.Z,{to:"../designer-user-guide/startup-window",mdxType:"Link"},"Lobby section.")))}y.isMDXComponent=!0}}]);