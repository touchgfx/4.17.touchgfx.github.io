(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2883],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return h},kt:function(){return p}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),d=s(n),p=o,f=d["".concat(l,".").concat(p)]||d[p]||u[p]||r;return n?a.createElement(f,i(i({ref:t},h),{},{components:n})):a.createElement(f,i({ref:t},h))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var a=n(67294);class o extends a.Component{render(){return a.createElement("div",{class:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=o},44035:function(e,t,n){"use strict";var a=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,r=e.height,i=(0,o.Z)(e.imageSource);return t?a.createElement("div",{class:"figure noshadow"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:r,src:i})),a.createElement("p",null,e.children)):a.createElement("div",{class:"figure"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:r,src:i})),a.createElement("p",null,e.children))}},35096:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return o}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return r},Z:function(){return i}});var a=n(11368),o=n(35096);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:r=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(a)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return r?e+i:i}(t,e,n,a)}}function i(e,t={}){const{withBaseUrl:n}=r();return n(e,t)}},34523:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return m},metadata:function(){return g},toc:function(){return b},default:function(){return v}});var a=n(3905),o=n(44035),r=n(22425),i=Object.defineProperty,c=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))u.call(t,n)&&d(e,n,t[n]);return e};const f={id:"font-cache",title:"Font Caching"},m=void 0,g={unversionedId:"development/ui-development/touchgfx-engine-features/font-cache",id:"development/ui-development/touchgfx-engine-features/font-cache",isDocsHomePage:!1,title:"Font Caching",description:"This section describes how to use the font cache to handle binary fonts in TouchGFX.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/font-cache.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/font-cache",permalink:"/4.17/ja/docs/development/ui-development/touchgfx-engine-features/font-cache",version:"current",frontMatter:{id:"font-cache",title:"Font Caching"},sidebar:"docs",previous:{title:"Binary Fonts",permalink:"/4.17/ja/docs/development/ui-development/touchgfx-engine-features/using-binary-fonts"},next:{title:"Binary Translations",permalink:"/4.17/ja/docs/development/ui-development/touchgfx-engine-features/using-binary-translations"}},b=[{value:"Font Caching",id:"font-caching",children:[]},{value:"Using the Font Cache in application code",id:"using-the-font-cache-in-application-code",children:[]},{value:"Caching Letters",id:"caching-letters",children:[]},{value:"Caching Ligatures",id:"caching-ligatures",children:[]},{value:"Memory Usage",id:"memory-usage",children:[]},{value:"Caching GSUB Tables",id:"caching-gsub-tables",children:[]},{value:"Implementing the Font File Reader",id:"implementing-the-font-file-reader",children:[]}],y={toc:b};function v(e){var t,n=e,{components:i}=n,d=((e,t)=>{var n={};for(var a in e)h.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=p(p({},y),d),c(t,l({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"This section describes how to use the font cache to handle binary fonts in TouchGFX."),(0,a.kt)("p",null,"Read first about ",(0,a.kt)("a",p({parentName:"p"},{href:"using-binary-fonts"}),"binary fonts"),"."),(0,a.kt)("h2",p({},{id:"font-caching"}),"Font Caching"),(0,a.kt)("p",null,"Recall that using binary fonts require the whole font to be loaded to memory. This can in some cases be undesireable if the font is large, e.g. with large Chinese fonts."),(0,a.kt)("p",null,"Font caching allows an application to load from external memory only the letters required to show a string. This means that the whole font does not need to reside in the addressable flash or RAM, but can be stored on a larger file system."),(0,a.kt)("p",null,"In the drawing below, the compiled-in font, Font2, has been replaced by the font cache. When TouchGFX is drawing a text, that uses Font2, TouchGFX will find the pointer to the ",(0,a.kt)("inlineCode",{parentName:"p"},"CachedFont")," object in the font table. This special font will lookup the letters in the FontCache object."),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/scenarios/using-font-cache/fontcache1.png",noShadow:"true",width:"600",mdxType:"Figure"},"Using a cached font"),(0,a.kt)("p",null,'The CachedFont is setup with a pointer to the linked-in font (Font2 above). When TouchGFX asks the CachedFont for a specific letter, the cachedFont will first look in the normal Font it is replacing (Font2). This font may be an empty font, but can also be a "normal" font containing a selection of some often used letters. If the font does not contain the required letter, the CachedFont will look into the FontCache to see if the letter has been loaded from the file system.'),(0,a.kt)("p",null,"This principle limits the amount of letters that must be cached, as we do not need to cache letters already found in the normal font."),(0,a.kt)("h2",p({},{id:"using-the-font-cache-in-application-code"}),"Using the Font Cache in application code"),(0,a.kt)("p",null,"Before the application can install a CachedFont it must also create a FontCache, a memory buffer, and a file system reader object:"),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp"}),"uint8_t fontdata[5120]; //Memory buffer for the font cache, 5Kb\nFontCache fontCache;\nCachedFont cachedFont;  //Cached Font object\nFileDataReader reader;  //Filesystem reader object\n")),(0,a.kt)("p",null,"The FontCache must be linked to the buffer and the reader:"),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp"}),"//setup the font cache with buffer and size; and file reader object\nfontCache.setMemory(fontdata, 5120);\nfontCache.setReader(&reader);\n")),(0,a.kt)("p",null,"Now the application can setup the font cache, initialize the CachedFont and pass it to TouchGFX."),(0,a.kt)("p",null,"The font cache requires a TextId to initialize a CachedFont object. The TextId is used to lookup the font that the CachedFont must point to. This secures that you are replacing the font used by the text that you have on your display:"),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp"}),"//initialize the cachedFont object to the font used by T_SINGLEUSEID1\nTypedText text = TypedText(T_SINGLEUSEID1);\nfontCache.initializeCachedFont(text, &cachedFont);\n\n//replace the linked in font in TouchGFX with cachedFont\nTypedTextDatabase::setFont(DEFAULT, &cachedFont);\n")),(0,a.kt)("p",null,"The code above can be put anywhere in the application. If the cached font is only used in a specific view, this view can be a good place to insert the code."),(0,a.kt)("h2",p({},{id:"caching-letters"}),"Caching Letters"),(0,a.kt)("p",null,"The font cache is still empty. Before we can show any letters they must be read from the font cache. This is done by passing an array of unicodes (a string) to the font cache. In this example we just pass the text from T_SINGLEUSEID1."),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp"}),"//cache the glyphs used by the text T_SINGLEUSEID1\nUnicode::UnicodeChar* str = const_cast<Unicode::UnicodeChar*>(text.getText());\nbool b = fontCache.cacheString(text, str);\n")),(0,a.kt)("p",null,"The font cache will load the letters found in the ",(0,a.kt)("inlineCode",{parentName:"p"},"str")," array through the reader object. The read unicodes will be linked to the font that is used by the TextId ",(0,a.kt)("inlineCode",{parentName:"p"},"text")," argument."),(0,a.kt)("p",null,"The application is responsible for configuring the reader object to load from the correct file."),(0,a.kt)("h2",p({},{id:"caching-ligatures"}),"Caching Ligatures"),(0,a.kt)("p",null,"For languages that convert sequences of unicodes to other unicodes before displaying (e.g. Arabic and Devanagari) the above method is not good. It caches the original unicodes and not the unicodes that are displayed after conversion. This method will convert the given unicodes and cache the required unicodes (after conversion):"),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp"}),"//cache the glyphs used by the text T_SINGLEUSEID1 after conversion\nUnicode::UnicodeChar* str = const_cast<Unicode::UnicodeChar*>(text.getText());\nbool b = fontCache.cacheLigatures(cachedFont, text, str);\n")),(0,a.kt)("h2",p({},{id:"memory-usage"}),"Memory Usage"),(0,a.kt)("p",null,"The font cache can calculate the current amount used memory:"),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp"}),'touchgfx_printf("Memory usage %d\\n", fontCache.getMemoryUsage());\n')),(0,a.kt)("h2",p({},{id:"caching-gsub-tables"}),"Caching GSUB Tables"),(0,a.kt)("p",null,'Some fonts use a GSUB table while rendering. These are only a few fonts for eastern languages, e.g. Devanagari fonts. The GSUB tables allow the font system to reorder characters and substitute sequences of characters for other "combination" characters.'),(0,a.kt)("p",null,"The Font Cache can load this GSUB table from the file system. If it is not loaded, the font is not displayed correctly as the GSUB table is then not available to the text rendering system."),(0,a.kt)("p",null,"The GSUB table is loaded by supplying an extra argument when initializing the cached font:"),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{3-3}","{3-3}":!0}),"//initialize the cachedFont and load the GSUB table\ntext = TypedText(T_SINGLEUSEID1);\nfontCache.initializeCachedFont(text, &cachedFont, true);\n")),(0,a.kt)("h2",p({},{id:"implementing-the-font-file-reader"}),"Implementing the Font File Reader"),(0,a.kt)("p",null,"The FileDataReader class used in the above example code is not included in TouchGFX as it is dependant on the operating system you are using."),(0,a.kt)("p",null,'Here is an example for normal "stdio" compatible file systems.'),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{5-5,13-13,17-17,21-21}","{5-5,13-13,17-17,21-21}":!0}),'class FileDataReader : public FontDataReader\n{\npublic:\n    virtual ~FileDataReader() { }\n    virtual void open()\n    {\n        fp = fopen("Font_verdana_20_4bpp.bin", "rb");\n        if (!fp)\n        {\n            touchgfx_printf("Unable to open font file!!!\\n");\n        }\n    }\n    virtual void close()\n    {\n        fclose(fp);\n    }\n    virtual void setPosition(uint32_t position)\n    {\n        fseek(fp, position, SEEK_SET);\n    }\n    virtual void readData(void* out, uint32_t numberOfBytes)\n    {\n        fread(out, numberOfBytes, 1, fp);\n    }\nprivate:\n    FILE* fp;\n};\n')),(0,a.kt)("p",null,"The FileDataReader class implements the FontDataReader interface from FontCache.hpp:"),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"FontCache.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-cpp",metastring:"{5-8}","{5-8}":!0}),"class FontDataReader\n{\npublic:\n    virtual ~FontDataReader() { }\n    virtual void open() = 0;\n    virtual void close() = 0;\n    virtual void setPosition(uint32_t position) = 0;\n    virtual void readData(void* out, uint32_t numberOfBytes) = 0;\n};\n")))}v.isMDXComponent=!0}}]);