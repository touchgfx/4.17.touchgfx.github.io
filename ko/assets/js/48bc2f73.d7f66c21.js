(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5421],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{class:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){"use strict";var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,o=(0,r.Z)(e.imageSource);return t?a.createElement("div",{class:"figure noshadow"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:i,src:o})),a.createElement("p",null,e.children)):a.createElement("div",{class:"figure"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:i,src:o})),a.createElement("p",null,e.children))}},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var a=n(67294),r=n(73727),i=n(11368),o=n(35096),s=n(84487);const l=(0,a.createContext)({collectLink:()=>{}});var c=n(25026),d=n(67023),u=Object.defineProperty,p=Object.defineProperties,h=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&b(e,n,t[n]);if(f)for(var n of f(t))g.call(t,n)&&b(e,n,t[n]);return e};var k=function(e){var t,n=e,{isNavLink:u,to:b,href:k,activeClassName:y,isActive:w,"data-noBrokenLinkCheck":T,autoAddBaseUrl:F=!0}=n,C=((e,t)=>{var n={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&f)for(var a of f(e))t.indexOf(a)<0&&g.call(e,a)&&(n[a]=e[a]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:R}}=(0,i.Z)(),{withBaseUrl:S}=(0,c.C)(),O=(0,a.useContext)(l),D=b||k,_=(0,o.Z)(D),N=null==D?void 0:D.replace("pathname://","");let x=void 0!==N?(P=N,F&&(e=>e.startsWith("/"))(P)?S(P):P):void 0;var P;x&&_&&(x=(0,d.applyTrailingSlash)(x,R));const M=(0,a.useRef)(!1),j=u?r.OL:r.rU,G=s.Z.canUseIntersectionObserver;let A;(0,a.useEffect)((()=>(!G&&_&&null!=x&&window.docusaurus.prefetch(x),()=>{G&&A&&A.disconnect()})),[x,G,_]);const E=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,I=!x||!_||E;return x&&_&&!E&&!T&&O.collectLink(x),I?a.createElement("a",v(v({href:x},D&&!_&&{target:"_blank",rel:"noopener noreferrer"}),C)):a.createElement(j,v((L=v({},C),p(L,h({onMouseEnter:()=>{M.current||null==x||(window.docusaurus.preload(x),M.current=!0)},innerRef:e=>{var t,n;G&&e&&_&&(t=e,n=()=>{null!=x&&window.docusaurus.prefetch(x)},A=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(A.unobserve(t),A.disconnect(),n())}))})),A.observe(t))},to:x||""}))),u&&{isActive:w,activeClassName:y}));var L}},35096:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return o}});var a=n(11368),r=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+o:o}(t,e,n,a)}}function o(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),a="/"===n?"/":(r=n,t?function(e){return e.endsWith("/")?e:`${e}/`}(r):function(e){return e.endsWith("/")?e.slice(0,-1):e}(r));var r;return e.replace(n,a)}},67023:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var i=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(i).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},94373:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return g},metadata:function(){return b},toc:function(){return v},default:function(){return y}});var a=n(3905),r=n(44035),i=n(31217),o=n(22425),s=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&h(e,n,t[n]);if(d)for(var n of d(t))p.call(t,n)&&h(e,n,t[n]);return e};const m={id:"using-serial-flash",title:"Using Serial Flash for images and fonts"},g=void 0,b={unversionedId:"development/scenarios/using-serial-flash",id:"development/scenarios/using-serial-flash",isDocsHomePage:!1,title:"Using Serial Flash for images and fonts",description:"This section discusses how to use a serial flash (or other unmapped storage) to store images and fonts. The technique described here is especially usefull on STM32G0 and other deviced with very little RAM.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/scenarios/using-serial-flash.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/using-serial-flash",permalink:"/4.17/ko/docs/development/scenarios/using-serial-flash",version:"current",frontMatter:{id:"using-serial-flash",title:"Using Serial Flash for images and fonts"},sidebar:"docs",previous:{title:"Using Non-Memory Mapped Flash for Storing Images",permalink:"/4.17/ko/docs/development/scenarios/using-non-memory-mapped-flash"},next:{title:"Using Non-Memory Mapped Flash for Font Data",permalink:"/4.17/ko/docs/development/scenarios/fonts-in-unmapped-flash"}},v=[{value:"Configuration",id:"configuration",children:[]},{value:"Implementation",id:"implementation",children:[]},{value:"Images",id:"images",children:[]},{value:"Font data",id:"font-data",children:[]}],k={toc:v};function y(e){var t,n=e,{components:s}=n,h=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&d)for(var a of d(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=f(f({},k),h),l(t,c({components:s,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"This section discusses how to use a serial flash (or other unmapped storage) to store images and fonts. The technique described here is especially usefull on STM32G0 and other deviced with very little RAM."),(0,a.kt)("p",null,"See the article ",(0,a.kt)("a",f({parentName:"p"},{href:"lowering-memory-usage-with-partial-framebuffer"}),"Lowering Memory Usage with Partial Framebuffer")," for a introduction to partial framebuffers which are often used together with a serial flash.",(0,a.kt)("br",{parentName:"p"}),"\n","See also the article ",(0,a.kt)("a",f({parentName:"p"},{href:"using-non-memory-mapped-flash"}),"Using Non-Memory Mapped Flash for storing images")," for an introduction to caching bitmaps from unmapped flash to RAM."),(0,a.kt)("h2",f({},{id:"configuration"}),"Configuration"),(0,a.kt)("p",null,'To use a serial flash with your TouchGFX application you must change the TouchGFX Generator configuration to enable the "External Data Reader" in "Additional Features".'),(0,a.kt)(r.Z,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/additional-features-data-reader.png",width:"520",noShadow:!0,mdxType:"Figure"},"Additional Features: Data Reader"),(0,a.kt)("p",null,"With this feature enabled the TouchGFX Generator changes the configuration to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"LCD16bppSerialFlash")," LCD class. It also generates a subclass of the ",(0,a.kt)("inlineCode",{parentName:"p"},"touchgfx::FlashDataReader"),":"),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFXConfiguration.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{2-2,8-9}","{2-2,8-9}":!0}),"static TouchGFXDataReader dataReader;\nstatic LCD16bppSerialFlash display(dataReader);\nstatic ApplicationFontProvider fontProvider;\n...\nvoid touchgfx_init()\n{\n    ...\n    hal.setDataReader(&dataReader);\n    fontProvider.setFlashReader(&dataReader);\n    ...\n}\n")),(0,a.kt)("p",null,"This code creates an instance of the ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXDataReader")," class and passes that instance to the display object, to the HAL object, and to the ApplicationFontProvider object. These three objects will use the dataReader object to access data in the serial flash. The data can be both images and font data."),(0,a.kt)("p",null,"The system programmer must finish the implementation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXDataReader")," class to actually read data from a flash."),(0,a.kt)("h2",f({},{id:"implementation"}),"Implementation"),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"TouchGFXDataReader")," class implements the ",(0,a.kt)("a",f({parentName:"p"},{href:"../../api/classes/classtouchgfx_1_1_flash_data_reader/#public-functions"}),(0,a.kt)("em",{parentName:"a"},"touchgfx::FlashDataReader"))," interface. This interface has the following 4 methods that needs to be implemented on a specific hardware."),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"include/touchgfx/hal/FlashDataReader.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"    bool addressIsAddressable(const void* address)\n    void copyData(const void* src, void* dst, uint32_t bytes)\n    void startFlashLineRead(const void* src, uint32_t bytes)\n    const uint8_t* waitFlashReadComplete()\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"addressIsAddressable")," method is used by the ",(0,a.kt)("inlineCode",{parentName:"p"},"LCD16bppSerialFlash")," class to decide if some data can be directly read (i.e. is located in internal RAM or internal flash) or if it should be read through the dataReader object."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"copyData"),"*` method is used to copy data synchronously from the flash to RAM. This function is typically used when the data is not further processed. \uc608\ub97c \ub4e4\uba74  when copying a solid image to a framebuffer."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"startFlashLineRead")," method is used when multiple lines of data are required from the flash. The ",(0,a.kt)("inlineCode",{parentName:"p"},"startFlashLineRead")," method initiates a read of data. The method can initiate an asynchronous read and should return immediately after starting the read. The ",(0,a.kt)("em",{parentName:"p"},"waitFlashReadComplete")," method should wait for the read to finish, and return a pointer to a buffer holding the data."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"LCD16bppSerialFlash")," can issue one flash read while processing the previously read data (in some situations). This means that at least two buffers are required in the dataReader to gain full concurrency."),(0,a.kt)("p",null,"The TouchGFX Generator generates the ",(0,a.kt)("inlineCode",{parentName:"p"},"FlashDataReader")," in two classes: ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedDataReader")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXDataReader"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedDataReader")," is the superclass of the two and contains a default implementation. If that implementation is not suitable, the application programmer can change the implementation of the virtual functions in the ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXDataReader")," class."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedDataReader")," implementation calls C-functions to do the work. These application are implemented by the system programmer."),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"TouchGFX/target/generated/TouchGFXGeneratedDataReader.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),'extern "C" __weak void DataReader_WaitForReceiveDone();\nextern "C" __weak void DataReader_ReadData(uint32_t address24, uint8_t* buffer, uint32_t length);\nextern "C" __weak void DataReader_StartDMAReadData(uint32_t address24, uint8_t* buffer, uint32_t length);\n\nvoid TouchGFXGeneratedDataReader::startFlashLineRead(const void* src, uint32_t bytes)\n{\n    /* Start transfer using DMA */\n    DataReader_StartDMAReadData((uint32_t)src, (readToBuffer1 ? buffer1 : buffer2), bytes);\n}\n')),(0,a.kt)("p",null,"The implementation is found in the ",(0,a.kt)("inlineCode",{parentName:"p"},"MB1642BDataReader.c")," file:"),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"Core/Src/MB1642BDataReader.c"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"void DataReader_StartDMAReadData(uint32_t address24, uint8_t* buffer, uint32_t length)\n{\n    readDataDMA(address24, buffer, length);\n}\n\nvoid readDataDMA(uint32_t address24, uint8_t* buffer, uint32_t length)\n{\n    // Pull Flash CS pin low\n    isReceivingData = 1;\n    FLASH_CS_GPIO_Port->BRR = FLASH_CS_Pin;\n\n    *((__IO uint8_t*)&hspi2.Instance->DR) = CMD_READ;\n\n    ...\n}\n")),(0,a.kt)("p",null,"This implementation is specific to the protocol used by the flash and the GPIO used for SPI and CS. All three C functions must be implemented for the ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedDataReader")," class to work."),(0,a.kt)("h2",f({},{id:"images"}),"Images"),(0,a.kt)("p",null,"As mentioned in the introduction the ",(0,a.kt)("inlineCode",{parentName:"p"},"LCD16bppSerialFlash")," class can read image pixels through the dataReader object. For this to work we must change the lnker script to put images in an address range outside the internal flash range."),(0,a.kt)("p",null,"On the STM32G071 we have selected the address 0x90000000 as start address for the serial flash:"),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"gcc/STM32G071RBTX_FLASH.ld"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{}),"MEMORY\n{\n  RAM        (xrw)    : ORIGIN = 0x20000000,   LENGTH = 36K\n  FLASH      (rx)     : ORIGIN = 0x8000000,    LENGTH = 128K\n  SPI_FLASH  (r)      : ORIGIN = 0x90000000,   LENGTH = 8M\n}\n\n/* Sections */\nSECTIONS\n{\n  ...\n\n  ExtFlashSection :\n  {\n    *(ExtFlashSection ExtFlashSection.*)\n    *(.gnu.linkonce.r.*)\n    . = ALIGN(0x4);\n  } >SPI_FLASH\n\n  FontFlashSection :\n  {\n    *(FontFlashSection FontFlashSection.*)\n    *(.gnu.linkonce.r.*)\n    . = ALIGN(0x4);\n  } >SPI_FLASH\n}\n")),(0,a.kt)("p",null,"This puts the ",(0,a.kt)("inlineCode",{parentName:"p"},"ExtFlashSection")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"FontFlashSection")," into the 0x90000000 address range."),(0,a.kt)("p",null,"The remaining task is to write the data to the external flash using a flasher tool."),(0,a.kt)("p",null,"A short description on writing flash loaders for STM32CubeProgrammer can be found in section 2.3.3 in this document:"),(0,a.kt)(i.Z,{to:"https://www.st.com/resource/en/user_manual/dm00403500-stm32cubeprogrammer-software-description-stmicroelectronics.pdf#page=25",mdxType:"Link"},"UM2237 STMCubeProgrammer User Manual"),(0,a.kt)("h2",f({},{id:"font-data"}),"Font data"),(0,a.kt)("p",null,"The above linker script puts the font pixel data and the font character metadata (with and height) into the external flash (both types of data are in the FontFlashSection). This data is also read through the dataReader object when drawing characters on the Screen"),(0,a.kt)("p",null,'If you are not using the "Unmapped Storage Format" for your you must change the linker script and the file ',(0,a.kt)("inlineCode",{parentName:"p"},"include/touchgfx/hal/Config.hpp")," to move the font character metadata to internal flash."),(0,a.kt)("p",null,"See the article about ",(0,a.kt)("a",f({parentName:"p"},{href:"fonts-in-unmapped-flash"}),"Fonts in unmapped storage")," for more information on the font formats."))}y.isMDXComponent=!0}}]);