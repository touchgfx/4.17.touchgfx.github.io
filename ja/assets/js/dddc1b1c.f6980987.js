(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4328],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,g=d["".concat(c,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(g,l(l({ref:t},s),{},{components:n})):a.createElement(g,l({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var a=n(67294);class i extends a.Component{render(){return a.createElement("div",{class:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=i},44035:function(e,t,n){"use strict";var a=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,r=e.height,l=(0,i.Z)(e.imageSource);return t?a.createElement("div",{class:"figure noshadow"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:r,src:l})),a.createElement("p",null,e.children)):a.createElement("div",{class:"figure"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:r,src:l})),a.createElement("p",null,e.children))}},35096:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return i}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return r},Z:function(){return l}});var a=n(11368),i=n(35096);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:r=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(a)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return r?e+l:l}(t,e,n,a)}}function l(e,t={}){const{withBaseUrl:n}=r();return n(e,t)}},73589:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return g},contentTitle:function(){return h},metadata:function(){return f},toc:function(){return y},default:function(){return v}});var a=n(3905),i=n(44035),r=n(22425),l=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(p)for(var n of p(t))m.call(t,n)&&d(e,n,t[n]);return e};const g={id:"creating-dynamic-l8-images",title:"Creating Dynamic L8 Images"},h=void 0,f={unversionedId:"development/ui-development/scenarios/creating-dynamic-l8-images",id:"development/ui-development/scenarios/creating-dynamic-l8-images",isDocsHomePage:!1,title:"Creating Dynamic L8 Images",description:"This section explains the use of dynamic L8 images and especially how to create the palette.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/scenarios/creating-dynamic-l8-images.mdx",sourceDirName:"development/ui-development/scenarios",slug:"/development/ui-development/scenarios/creating-dynamic-l8-images",permalink:"/4.17/ja/docs/development/ui-development/scenarios/creating-dynamic-l8-images",version:"current",frontMatter:{id:"creating-dynamic-l8-images",title:"Creating Dynamic L8 Images"},sidebar:"docs",previous:{title:"Using the L8 Image Format to Reduce Memory Consumption",permalink:"/4.17/ja/docs/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption"},next:{title:"TouchGFX on Low Cost Hardware",permalink:"/4.17/ja/docs/development/scenarios/touchgfx-on-lowcost-hardware"}},y=[{value:"Dynamic L8 Images",id:"dynamic-l8-images",children:[{value:"Creating a Dynamic L8 image with 24-bit palette",id:"creating-a-dynamic-l8-image-with-24-bit-palette",children:[]},{value:"Accessing the palette",id:"accessing-the-palette",children:[]}]},{value:"Dynamic L8 Bitmap Example",id:"dynamic-l8-bitmap-example",children:[{value:"Manipulating the Palette",id:"manipulating-the-palette",children:[]}]}],b={toc:y};function v(e){var t,n=e,{components:l}=n,d=((e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},b),d),o(t,c({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"This section explains the use of dynamic L8 images and especially how to create the palette."),(0,a.kt)("p",null,"Read in general about ",(0,a.kt)("a",u({parentName:"p"},{href:"../touchgfx-engine-features/dynamic-bitmaps"}),"Dynamic Bitmaps here")," and about the ",(0,a.kt)("a",u({parentName:"p"},{href:"using-the-l8-image-format-to-reduce-memory-consumption"}),"L8 image format here"),"."),(0,a.kt)("h2",u({},{id:"dynamic-l8-images"}),"Dynamic L8 Images"),(0,a.kt)("p",null,"Dynamic L8 bitmaps are created like any other dynamic bitmap, except that we also have to specify the type of palette  to create for the bitmap."),(0,a.kt)("p",null,"TouchGFX supports 3 types of palettes:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Palette")),(0,a.kt)("th",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"CLUT_FORMAT_L8_ARGB8888"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"32-bit, 8 bits for each of red, green, blue and per pixel alpha channel")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"CLUT_FORMAT_L8_RGB888"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"24-bit, 8 bits for each of red, green and blue, no per pixel alpha channel")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"CLUT_FORMAT_L8_RGB565"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"16-bit, 5 bits for red, 6 bits for green, 5 bits for blue, no per pixel alpha channel")))),(0,a.kt)("h3",u({},{id:"creating-a-dynamic-l8-image-with-24-bit-palette"}),"Creating a Dynamic L8 image with 24-bit palette"),(0,a.kt)("p",null,"Here we create a 100x100 pixels L8 bitmap with a 24-bit palette:"),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"BitmapId dynamicBitmap1 = Bitmap::dynamicBitmapCreateL8(100, 100, Bitmap::CLUT_FORMAT_L8_RGB888, 256);\n")),(0,a.kt)("p",null,"This call allocated a 100x100 L8 bitmap and a 24-bit palette in the bitmap cache. The palette holds 256 colors for dynamic bitmaps, but this number can be adjusted to the desired size to reduce memory waste."),(0,a.kt)("h3",u({},{id:"accessing-the-palette"}),"Accessing the palette"),(0,a.kt)("p",null,"Right after the pixels (on the first 32-bit aligned address) are 2 bytes containing the L8 palette format (stored little endian), followed by 2 bytes containing the number of entries in the palette (stored little endian), followed by the actual palette colors. This means the palette colors are located 4 bytes after the pixels (32-bit aligned)."),(0,a.kt)("p",null,"We can get a pointer to the (so far uninitialized) palette like this:"),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"//Get a pointer to the bitmap data (pixels and palette)\nuint8_t* data = Bitmap::dynamicBitmapGetAddress(dynamicBitmap1);\n\n//1 byte pr pixel, round up to 32-bit\nuint32_t byteSize = 100*100;\nbyteSize = ((byteSize + 3) & ~3);\n\n//Palette size is saved in byte 2 and 3\nint palSize = (data[3] << 8) | data[2];\n\n//Palette starts four bytes after the pixels\nuint8_t* pal = (data + byteSize + 4);\n")),(0,a.kt)("h2",u({},{id:"dynamic-l8-bitmap-example"}),"Dynamic L8 Bitmap Example"),(0,a.kt)("p",null,"We will now go through an example of creating a dynamic L8 bitmap and manipulating the palette. Manipulating the palette if not a typical thing to do for a general application. The example serves the purpose of illustrating how to access and generate a palette."),(0,a.kt)("p",null,"First we create a Screen in TouchGFXDesigner and insert a white Box in the background and an Image at e.g. x=140, y=8:"),(0,a.kt)(i.Z,{imageSource:"/img/development/ui-development/scenarios/creating-dynamic-l8-images/designer-img-4.17.png",mdxType:"Figure"},"Creating a Screen"),(0,a.kt)("p",null,"Now generate the code and open the Screen1View.cpp file. We must insert code in ",(0,a.kt)("em",{parentName:"p"},"setupScreen")," to initialize the bitmap cache and create a dynamic bitmap."),(0,a.kt)("p",null,"We create a bitmap of 200*256 pixels. Remember each pixel in an L8 bitmap is one byte. We color each row of the image with a different color. First row has color 0, last row has color 255."),(0,a.kt)("p",null,"Then we initialize the colors in the palette. We calculate the start address of the palette and set the RGB values of the 256 colors. Here we create colors that go from green to red and back to green again."),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),'#ifdef SIMULATOR\nuint32_t cacheBuffer[320*1024/4]; //simulate PSRAM\nuint16_t* psram = (uint16_t*)cacheBuffer;\n#else\nuint16_t* psram = (uint16_t*)(0xd0000000 + 480*272*2*2); //Address after two 16bit framebuffers\n#endif\n\nScreen1View::Screen1View()\n{\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n\n    //Create one dynamic bitmap\n    Bitmap::setCache(psram, 320*1024, 1); //320Kb cache\n    const uint16_t palSize = 256;\n    BitmapId dynamicBitmap1 = Bitmap::dynamicBitmapCreateL8(200, 256, Bitmap::CLUT_FORMAT_L8_RGB888, palSize);\n    imageDynamic.setBitmap(Bitmap(dynamicBitmap1));\n\n    if (dynamicBitmap1 == BITMAP_INVALID)\n    {\n        touchgfx_printf("Unable to create dynamic bitmap\\n");\n    }\n    else\n    {\n        uint8_t* data = Bitmap::dynamicBitmapGetAddress(dynamicBitmap1);\n\n        uint8_t* pixel = data;\n        //make colored rows\n        for (int y = 0; y<256; y++)\n        {\n            for (int x = 0; x<200; x++)\n            {\n                *pixel++ = y;\n            }\n        }\n\n        uint32_t byteSize = 200*256;\n        byteSize = ((byteSize + 3) & ~3);\n\n        //Palette starts four bytes after the pixels\n        uint8_t* pal = (data + byteSize + 4);\n\n        //Make palette with 256 colors from green to red to green\n        for (int i = 0; i < palSize; i++)\n        {\n            //BGR\n            pal[i * 3 + 0] = 0x00;\n            pal[i * 3 + 1] = 127 * (1 + cosf(i * 6.28f / (palSize - 1)));\n            pal[i * 3 + 2] = 255 * (sinf(i * 3.14f / (palSize - 1)));\n        }\n    }\n}\n')),(0,a.kt)("p",null,"This gives us a Screen that looks like this:"),(0,a.kt)(i.Z,{imageSource:"/img/development/ui-development/scenarios/creating-dynamic-l8-images/img-20200225-151937.bmp",mdxType:"Figure"},"Showing L8 image"),(0,a.kt)("h3",u({},{id:"manipulating-the-palette"}),"Manipulating the Palette"),(0,a.kt)("p",null,"Since we have access to the palette used for the dynamic L8 bitmap, we can easily manipulate it."),(0,a.kt)("p",null,"Here we cycle the colors one index down and force a redraw of the image in every frame:"),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"...\nvoid Screen1View::handleTickEvent()\n{\n    //get palette address\n    uint8_t* data = Bitmap::dynamicBitmapGetAddress(imageDynamic.getBitmap());\n    uint32_t byteSize = 200*256;\n    byteSize = ((byteSize + 3) & ~3);\n    const int palSize = (data[3] << 8) | data[2];\n    uint8_t* pal = (data + byteSize + 4);\n\n    //Cycle palette, copy color 0\n    int8_t blue = pal[0], green = pal[1], red = pal[2];\n\n    //Move palette down, 1->0, 2->1, ...\n    for (int i = 3; i < palSize * 3; i++)\n    {\n        pal[i - 3] = pal[i];\n    }\n\n    //Insert color 0 as color 255\n    pal[(palSize - 1) * 3 + 0] = blue;\n    pal[(palSize - 1) * 3 + 1] = green;\n    pal[(palSize - 1) * 3 + 2] = red;\n\n    //Force redraw by invalidating\n    imageDynamic.invalidate();\n}\n")),(0,a.kt)("p",null,'This will move colors in the dynamic bitmap "upwards":'),(0,a.kt)(i.Z,{width:"200",imageSource:"/img/development/ui-development/scenarios/creating-dynamic-l8-images/demo.gif",mdxType:"Figure"},"Cycling the L8 palette"))}v.isMDXComponent=!0}}]);