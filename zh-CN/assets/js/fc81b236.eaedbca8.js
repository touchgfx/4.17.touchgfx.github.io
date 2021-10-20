(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5123],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var r=n(67294);class i extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=i},44035:function(e,t,n){"use strict";var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,a=(0,i.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:o,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:o,src:a})),r.createElement("p",null,e.children))}},29415:function(e,t,n){"use strict";var r=n(67294),i=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class a extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}t.Z=a},88678:function(e,t,n){"use strict";var r=n(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},93054:function(e,t,n){"use strict";var r=n(67294),i=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class a extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}t.Z=a},37793:function(e,t,n){"use strict";var r=n(67294),i=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class a extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}t.Z=a},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var r=n(67294),i=n(73727),o=n(11368),a=n(35096),s=n(84487);const c=(0,r.createContext)({collectLink:()=>{}});var l=n(25026),p=n(67023),u=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&v(e,n,t[n]);if(f)for(var n of f(t))g.call(t,n)&&v(e,n,t[n]);return e};var C=function(e){var t,n=e,{isNavLink:u,to:v,href:C,activeClassName:D,isActive:S,"data-noBrokenLinkCheck":b,autoAddBaseUrl:k=!0}=n,E=((e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&f)for(var r of f(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:_,baseUrl:x}}=(0,o.Z)(),{withBaseUrl:M}=(0,l.C)(),P=(0,r.useContext)(c),T=v||C,O=(0,a.Z)(T),w=null==T?void 0:T.replace("pathname://","");let N=void 0!==w?(j=w,k&&(e=>e.startsWith("/"))(j)?M(j):j):void 0;var j;N&&O&&(N=(0,p.applyTrailingSlash)(N,{trailingSlash:_,baseUrl:x}));const B=(0,r.useRef)(!1),U=u?i.OL:i.rU,I=s.Z.canUseIntersectionObserver;let L;(0,r.useEffect)((()=>(!I&&O&&null!=N&&window.docusaurus.prefetch(N),()=>{I&&L&&L.disconnect()})),[N,I,O]);const A=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,H=!N||!O||A;return N&&O&&!A&&!b&&P.collectLink(N),H?r.createElement("a",y(y({href:N},T&&!O&&{target:"_blank",rel:"noopener noreferrer"}),E)):r.createElement(U,y((R=y({},E),d(R,m({onMouseEnter:()=>{B.current||null==N||(window.docusaurus.preload(N),B.current=!0)},innerRef:e=>{var t,n;I&&e&&O&&(t=e,n=()=>{null!=N&&window.docusaurus.prefetch(N)},L=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(L.unobserve(t),L.disconnect(),n())}))})),L.observe(t))},to:N||""}))),u&&{isActive:S,activeClassName:D}));var R}},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return a}});var r=n(11368),i=n(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(r)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+a:a}(t,e,n,r)}}function a(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[i]=e.split(/[#?]/),o="/"===i||i===r?i:(a=i,n?function(e){return e.endsWith("/")?e:`${e}/`}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));var a;return e.replace(i,o)}},67023:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var o=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},9585:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return y},contentTitle:function(){return C},metadata:function(){return D},toc:function(){return S},default:function(){return k}});var r=n(3905),i=n(44035),o=n(93054),a=n(37793),s=n(22425),c=n(29415),l=n(31217),p=Object.defineProperty,u=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&g(e,n,t[n]);if(m)for(var n of m(t))h.call(t,n)&&g(e,n,t[n]);return e};const y={id:"adding-files-to-stm32cubemx-projet",title:"Adding files to STM32CubeMX project"},C=void 0,D={unversionedId:"development/scenarios/adding-files-to-stm32cubemx-projet",id:"development/scenarios/adding-files-to-stm32cubemx-projet",isDocsHomePage:!1,title:"Adding files to STM32CubeMX project",description:"Additional settings for project generation",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/scenarios/adding-files-to-stm32cubemx-projet.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/adding-files-to-stm32cubemx-projet",permalink:"/4.17/zh-CN/docs/development/scenarios/adding-files-to-stm32cubemx-projet",version:"current",frontMatter:{id:"adding-files-to-stm32cubemx-projet",title:"Adding files to STM32CubeMX project"},sidebar:"docs",previous:{title:"Running without an RTOS on a TouchGFX Board Setup",permalink:"/4.17/zh-CN/docs/development/scenarios/running-without-rtos"},next:{title:"Updating to a new TouchGFX Version",permalink:"/4.17/zh-CN/docs/miscellaneous/updating-to-a-new-touchgfx-version"}},S=[{value:"Additional settings for project generation",id:"additional-settings-for-project-generation",children:[{value:"Entries and syntax",id:"possible-entries-and-syntax",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Impact on generated project",id:"impact-on-generated-project",children:[]}]}],b={toc:S};function k(e){var t,n=e,{components:p}=n,g=((e,t)=>{var n={};for(var r in e)f.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=v(v({},b),g),u(t,d({components:p,mdxType:"MDXLayout"}))),(0,r.kt)("h2",v({},{id:"additional-settings-for-project-generation"}),"Additional settings for project generation"),(0,r.kt)("p",null,"STM32CubeMX allows users to specify additional project settings through the ",(0,r.kt)("inlineCode",{parentName:"p"},".extSettings")," file. These settings will be applied for the specified project upon CubeMX code generation from. The ",(0,r.kt)("inlineCode",{parentName:"p"},".extSettings")," file must be placed in the same project folder and at the same level as the ",(0,r.kt)("inlineCode",{parentName:"p"},".ioc")," file."),(0,r.kt)("h3",v({},{id:"possible-entries-and-syntax"}),"Entries and syntax"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ProjectFiles")," Use the fields in the ",(0,r.kt)("em",{parentName:"p"},"ProjectFiles")," section to specify additional include directories. ",(0,r.kt)("em",{parentName:"p"},"Syntax:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",v({parentName:"pre"},{}),"HeaderPath = <include directory 1 path>;< include directory 2 path >\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Groups")," Use the fields in the ",(0,r.kt)("em",{parentName:"p"},"Groups")," section where to create new groups of files and/or add files to a group. ",(0,r.kt)("em",{parentName:"p"},"Syntax:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",v({parentName:"pre"},{}),"<Group name> = <file pathname1>;< file pathname2>\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Others")," Use the fields in the ",(0,r.kt)("em",{parentName:"p"},"Others")," section where to enable HAL modules and/or specify preprocessor define statements. ",(0,r.kt)("em",{parentName:"p"},"Syntax:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",v({parentName:"pre"},{}),"Define = <define1_name>;<define2_name>\n")))),(0,r.kt)("h3",v({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"The following example specifies additional settings for a STM32H735G-DK project:"),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},".extSettings file for STM32H735G-DK"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-json",metastring:"{2,4-6,8-9}","{2,4-6,8-9}":!0}),"[ProjectFiles]\nHeaderPath=../Drivers/BSP/Components/Common;../Drivers/BSP/STM32H735G-DK\n[Groups]\nDrivers/BSP/STM32H735G-DK=../Drivers/BSP/STM32H735G-DK/stm32h735g_discovery_ospi.c;../Drivers/BSP/STM32H735G-DK/stm32h735g_discovery_ts.c;../Drivers/BSP/STM32H735G-DK/stm32h735g_discovery_bus.c\nDrivers/BSP/Components=../Drivers/BSP/Components/s70kl1281/s70kl1281.c;../Drivers/BSP/Components/mx25lm51245g/mx25lm51245g.c;../Drivers/BSP/Components/ft5336/ft5336.c;../Drivers/BSP/Components/ft5336/ft5336_reg.c\nApplication/User/TouchGFX/target=../TouchGFX/target/CortexMMCUInstrumentation.cpp\n[Others]\nDefine=USE_STM32H735G_DK\nHALModule=I2C\n")),(0,r.kt)("p",null,"The following example specifies additional settings for a STM32H747I-DK project:"),(0,r.kt)(a.Z,{mdxType:"Tip"},"In case of Mult-Core configurations users must specify which Core the files or settings should be added for."),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},".extSettings file for STM32H747I-DISCO"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-json",metastring:"{2,4-6,8-9}","{2,4-6,8-9}":!0}),"[CortexM7:ProjectFiles]\nHeaderPath=../Drivers/BSP/Components/Common;../Drivers/BSP/STM32H747I-Discovery\n[CortexM7:Groups]\nApplication/User/CM7/TouchGFX/target=../CM7/TouchGFX/target/STM32H7Instrumentation.cpp\nDrivers/BSP/Components=../Drivers/BSP/Components/otm8009a/otm8009a.c;../Drivers/BSP/Components/otm8009a/otm8009a_reg.c;../Drivers/BSP/Components/ft6x06/ft6x06.c;../Drivers/BSP/Components/ft6x06/ft6x06_reg.c;../Drivers/BSP/Components/mt25tl01g/mt25tl01g.c;../Drivers/BSP/Components/is42s32800j/is42s32800j.c\nDrivers/BSP/STM32H747I-Discovery=../Drivers/BSP/STM32H747I-Discovery/stm32h747i_discovery_bus.c;../Drivers/BSP/STM32H747I-Discovery/stm32h747i_discovery_qspi.c;../Drivers/BSP/STM32H747I-Discovery/stm32h747i_discovery_sdram.c;../Drivers/BSP/STM32H747I-Discovery/stm32h747i_discovery_ts.c;\n[CortexM7:Others]\nDefine=USE_STM32H747I_DISCO\nHALModule=I2C\n")),(0,r.kt)("h3",v({},{id:"impact-on-generated-project"}),"Impact on generated project"),(0,r.kt)("p",null,"Upon project generation from CubeMX, the presence of this ",(0,r.kt)("inlineCode",{parentName:"p"},".extSettings")," file triggers the update of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The IDE project ",(0,r.kt)("inlineCode",{parentName:"li"},".project")," file in STM32CubeIDE folder")),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},"Update of the project `.project` file (STM32CubeIDE IDE)"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-xml",metastring:"{2,7,12,17,22,27,32,38}","{2,7,12,17,22,27,32,38}":!0}),"        <link>\n            <name>Drivers/BSP/Components/ft5336.c</name>\n            <type>1</type>\n            <locationURI>$%7BPARENT-1-PROJECT_LOC%7D/Drivers/BSP/Components/ft5336/ft5336.c</locationURI>\n        </link>\n        <link>\n            <name>Drivers/BSP/Components/ft5336_reg.c</name>\n            <type>1</type>\n            <locationURI>$%7BPARENT-1-PROJECT_LOC%7D/Drivers/BSP/Components/ft5336/ft5336_reg.c</locationURI>\n        </link>\n        <link>\n            <name>Drivers/BSP/Components/mx25lm51245g.c</name>\n            <type>1</type>\n            <locationURI>$%7BPARENT-1-PROJECT_LOC%7D/Drivers/BSP/Components/mx25lm51245g/mx25lm51245g.c</locationURI>\n        </link>\n        <link>\n            <name>Drivers/BSP/Components/s70kl1281.c</name>\n            <type>1</type>\n            <locationURI>$%7BPARENT-1-PROJECT_LOC%7D/Drivers/BSP/Components/s70kl1281/s70kl1281.c</locationURI>\n        </link>\n        <link>\n            <name>Drivers/BSP/STM32H735G-DK/stm32h735g_discovery_bus.c</name>\n            <type>1</type>\n            <locationURI>$%7BPARENT-1-PROJECT_LOC%7D/Drivers/BSP/STM32H735G-DK/stm32h735g_discovery_bus.c</locationURI>\n        </link>\n        <link>\n            <name>Drivers/BSP/STM32H735G-DK/stm32h735g_discovery_ospi.c</name>\n            <type>1</type>\n            <locationURI>$%7BPARENT-1-PROJECT_LOC%7D/Drivers/BSP/STM32H735G-DK/stm32h735g_discovery_ospi.c</locationURI>\n        </link>\n        <link>\n            <name>Drivers/BSP/STM32H735G-DK/stm32h735g_discovery_ts.c</name>\n            <type>1</type>\n            <locationURI>$%7BPARENT-1-PROJECT_LOC%7D/Drivers/BSP/STM32H735G-DK/stm32h735g_discovery_ts.c</locationURI>\n        </link>\n    ...\n        <link>\n            <name>Application/User/TouchGFX/target/CortexMMCUInstrumentation.cpp</name>\n            <type>1</type>\n            <locationURI>$%7BPARENT-1-PROJECT_LOC%7D/TouchGFX/target/CortexMMCUInstrumentation.cpp</locationURI>\n        </link>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"stm32h7xx_hal_conf.h")," file in the project ",(0,r.kt)("inlineCode",{parentName:"li"},"Inc")," (include) folder due to the presence of the I2C module in the ",(0,r.kt)("inlineCode",{parentName:"li"},".extsettings")," file.")),(0,r.kt)(s.Z,{mdxType:"CodeHeader"},"Update of stm32h7xx_hal_conf.h file to enable selected HAL modules (I2C)"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-c",metastring:"{10}","{10}":!0}),"/* #define HAL_PSSI_MODULE_ENABLED */\n/* #define HAL_DTS_MODULE_ENABLED */\n#define HAL_GPIO_MODULE_ENABLED\n#define HAL_DMA_MODULE_ENABLED\n#define HAL_MDMA_MODULE_ENABLED\n#define HAL_RCC_MODULE_ENABLED\n#define HAL_FLASH_MODULE_ENABLED\n#define HAL_EXTI_MODULE_ENABLED\n#define HAL_PWR_MODULE_ENABLED\n#define HAL_I2C_MODULE_ENABLED\n#define HAL_CORTEX_MODULE_ENABLED\n/* #define HAL_HSEM_MODULE_ENABLED */\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The project view within ",(0,r.kt)("inlineCode",{parentName:"li"},"STM32CubeIDE")," user interface as shown in the below figures.",(0,r.kt)(i.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/adding-files-to-stm32cubemx-projet-bsp.png",width:"400px",mdxType:"Figure"},"New BSP Drivers groups and files added to the project groups"))),(0,r.kt)(i.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/adding-files-to-stm32cubemx-projet-instrumentation.png",width:"399px",mdxType:"Figure"},"New MCU Instrumentation groups and files added to the project groups"),(0,r.kt)(o.Z,{mdxType:"Note"},"Files referenced by the .extSettings file must be manually added by the user into the STM32CubeMX project's folder.",(0,r.kt)("p",null,"For the above STM32H735G-DK example the file CortexMMCUInstrumentation.cpp should be present inside its indicated location /TouchGFX/target/CortexMMCUInstrumentation.cpp")),(0,r.kt)(c.Z,{mdxType:"FurtherReading"},"See Section 6.4 from the UM1718 : ",(0,r.kt)(l.Z,{to:"https://www.st.com/resource/en/user_manual/dm00104712-stm32cubemx-for-stm32-configuration-and-initialization-c-code-generation-stmicroelectronics.pdf",mdxType:"Link"},"STM32CubeMX for STM32 configuration and initialization C code generation"),"."))}k.isMDXComponent=!0}}]);