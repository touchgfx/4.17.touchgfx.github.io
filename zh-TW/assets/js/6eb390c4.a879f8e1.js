(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6062],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return h}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,g=p["".concat(s,".").concat(h)]||p[h]||c[h]||a;return n?i.createElement(g,o(o({ref:t},d),{},{components:n})):i.createElement(g,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},44035:function(e,t,n){"use strict";var i=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,o=(0,r.Z)(e.imageSource);return t?i.createElement("div",{class:"figure noshadow"},i.createElement("a",{href:o,target:"_blank"},i.createElement("img",{width:n,height:a,src:o})),i.createElement("p",null,e.children)):i.createElement("div",{class:"figure"},i.createElement("a",{href:o,target:"_blank"},i.createElement("img",{width:n,height:a,src:o})),i.createElement("p",null,e.children))}},2083:function(e,t,n){"use strict";var i=n(67294);class r extends i.Component{render(){return i.createElement("code",null,this.props.children)}}t.Z=r},60204:function(e,t,n){"use strict";var i=n(67294);class r extends i.Component{render(){return i.createElement("i",null,this.props.children)}}t.Z=r},35096:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}n.d(t,{b:function(){return i},Z:function(){return r}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return o}});var i=n(11368),r=n(35096);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,i.Z)();return{withBaseUrl:(n,i)=>function(e,t,n,{forcePrependBaseUrl:i=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(i)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+o:o}(t,e,n,i)}}function o(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},90082:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return f},metadata:function(){return w},toc:function(){return v},default:function(){return k}});var i=n(3905),r=n(44035),a=n(60204),o=n(2083),l=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&h(e,n,t[n]);if(d)for(var n of d(t))p.call(t,n)&&h(e,n,t[n]);return e};const m={id:"images-view",title:"Images View"},f=void 0,w={unversionedId:"development/ui-development/designer-user-guide/images-view",id:"development/ui-development/designer-user-guide/images-view",isDocsHomePage:!1,title:"Images View",description:"The Images View is used to manage the images used in a TouchGFX application (located under the assets\\images folder). It includes 2 sections: the Tree View (left side) and the Table View (right side).",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/images-view.mdx",sourceDirName:"development/ui-development/designer-user-guide",slug:"/development/ui-development/designer-user-guide/images-view",permalink:"/4.17/zh-TW/docs/development/ui-development/designer-user-guide/images-view",version:"current",frontMatter:{id:"images-view",title:"Images View"},sidebar:"docs",previous:{title:"Canvas View",permalink:"/4.17/zh-TW/docs/development/ui-development/designer-user-guide/canvas-view"},next:{title:"Texts View",permalink:"/4.17/zh-TW/docs/development/ui-development/designer-user-guide/texts-view"}},v=[{value:"Tree View",id:"tree-view",children:[]},{value:"Table View",id:"table-view",children:[]}],b={toc:v};function k(e){var t,n=e,{components:l}=n,h=((e,t)=>{var n={};for(var i in e)c.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&d)for(var i of d(e))t.indexOf(i)<0&&p.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=g(g({},b),h),s(t,u({components:l,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"The Images View is used to manage the images used in a TouchGFX application (located under the ",(0,i.kt)(o.Z,{mdxType:"InlineCode"},"assets\\images")," folder). It includes 2 sections: the ",(0,i.kt)("a",g({parentName:"p"},{href:"#tree-view"}),"Tree View")," (left side) and the ",(0,i.kt)("a",g({parentName:"p"},{href:"#table-view"}),"Table View")," (right side)."),(0,i.kt)("p",null,"The default configuration values for an image can be changed in the ",(0,i.kt)("a",g({parentName:"p"},{href:"config-view#default-image-configuration"}),"Default Image Configuration")," in the ",(0,i.kt)("a",g({parentName:"p"},{href:"config-view"}),"Config View"),"."),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/designer-user-guide/images-view/designer-images-view-4.17.png",mdxType:"Figure"},"Images View in TouchGFX Designer"),(0,i.kt)("h2",g({},{id:"tree-view"}),"Tree View"),(0,i.kt)("p",null,"The Tree View provides an overview of the images and folders present in your application. The width of the Tree View can be changed by dragging the grid-splitter thumb to suit your needs."),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/designer-user-guide/images-view/designer-images-tree-view-4.17.png",mdxType:"Figure"},"The Tree View in Images View"),(0,i.kt)("p",null,"You can add images to the ",(0,i.kt)(o.Z,{mdxType:"InlineCode"},"assets\\images"),' folder by clicking the "+" button on the top right of the Images View, or by dragging the images directly to the Tree View from the File Explorer. Images added to the ',(0,i.kt)(o.Z,{mdxType:"InlineCode"},"assets\\images")," folder will automatically show up in the Image Manager."),(0,i.kt)("p",null,"Clicking on a folder node will show the images in that folder in the Table View (clicking on the root folder \u201cimages\u201d will show all images in the application, including images located in subfolders)."),(0,i.kt)("p",null,"Clicking on an image node will also show the other images under the same folder in the Table View and select it such that its properties can be changed in the right side properties view."),(0,i.kt)("p",null,"Clicking the chevron next to a folder will collapse or expand the folder."),(0,i.kt)("p",null,"Clicking the chevron on the right of the Tree View will collapse or expand the Tree View."),(0,i.kt)("h2",g({},{id:"table-view"}),"Table View"),(0,i.kt)("p",null,"The Table View shows a list of the images located under the currently selected folder and contains different columns corresponding to different properties for an image."),(0,i.kt)("p",null,"One or more image can be selected by setting a checkmark in the first column of the desired image's row. The change of properties will be applied to all selected images."),(0,i.kt)("p",null,"When the value of a cell is grayed out, it means that the default value is used. When an explicit value has been set on an Image, for example changing the default Image Format value to ARGB8888, the cell will darken. The default values can be set within the ",(0,i.kt)("a",g({parentName:"p"},{href:"config-view"}),"Config View"),"."),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/designer-user-guide/images-view/designer-images-table-view-4.17.png",mdxType:"Figure"},"The Table View in Images"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Image:"),(0,i.kt)("br",null)," The preview of the image. Hovering over an image preview will show the preview in an increased size. Clicking the preview will open the image in the default application associated with .png images (for example paint.net)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Name:"),(0,i.kt)("br",null)," The name of the image in the folder."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Uses:"),(0,i.kt)("br",null)," The number of times the image has been used."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Size:"),(0,i.kt)("br",null)," The Width and Height of an image."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Image Format:"),(0,i.kt)("br",null)," Format of an image. Available options vary on the what is supported by the hardware."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Dither Algorithm:"),(0,i.kt)("br",null)," Sets the dither algortihm used for the selected image."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"0 - No dither: ",(0,i.kt)(a.Z,{mdxType:"InlineNote"},"no dithering is applied to the image. This is the setting with the highest performance since no alteration is made. However, depending on the image, the quality of the image may also degrade visually at lower color depths.")),(0,i.kt)("li",{parentName:"ul"},"1 - Floyd-Steinberg: ",(0,i.kt)(a.Z,{mdxType:"InlineNote"},"diffuses the error to neighboring pixels, resulting in fine-grained dithering but sacrificing sharpness.")),(0,i.kt)("li",{parentName:"ul"},"2 - Jarvis, Judice and Ninke: ",(0,i.kt)(a.Z,{mdxType:"InlineNote"},"diffuses the error to pixels one step further away compared to Floyd-Steinberg, resulting in coarser dithering but a sharper image. The slowest of the 3 error-diffusion dithering algorithms.")),(0,i.kt)("li",{parentName:"ul"},"3 - Stucki: ",(0,i.kt)(a.Z,{mdxType:"InlineNote"},"based on minimized average error dithering but faster and cleaner."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Alpha Dither:"),(0,i.kt)("br",null)," Sets whether or not to use the dither algortihm thourgh the alpha channel."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Layout Rotation:"),(0,i.kt)("br",null)," Algorithm dither used  of an image. Available options vary on the selected color depth of the project."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Section:"),(0,i.kt)("br",null)," The memory location where the image is stored on the target hardware. The available sections depend on the TouchGFX Board Setup that the project was created with."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Extra Section:"),(0,i.kt)("br",null)," When using L8 image formats you can choose to store the color table in a different memory location. The available sections depend on the TouchGFX Board Setup that the project was created with."),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/designer-user-guide/images-view/designer-images-view-menu-4.17.png",mdxType:"Figure"},"The dropdown menu in the first cell of the Table View in Images"),(0,i.kt)("p",null,"Multiple images can be selected with the checkmark box in the first cell on the left of the Table View. This cell also contains a dropdown menu with four options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Copy image id"),(0,i.kt)("br",null)," Copy the id of the image which can be referenced in code"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delete"),(0,i.kt)("br",null)," Delete the image in the associated folder"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Open"),(0,i.kt)("br",null)," Open the image in the default application associated with .png images"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Open folder"),(0,i.kt)("br",null)," Open the folder contaning the image in the File Explorer")),(0,i.kt)("p",null,"This dropdown menu can also be opened by right-clicking on an Image's corresponding Line."))}k.isMDXComponent=!0}}]);