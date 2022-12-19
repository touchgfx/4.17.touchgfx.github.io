"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4233],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,m=d["".concat(s,".").concat(c)]||d[c]||h[c]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},44035:function(e,t,n){var i=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,o=(0,r.Z)(e.imageSource);return t?i.createElement("div",{class:"figure noshadow"},i.createElement("a",{href:o,target:"_blank"},i.createElement("img",{width:n,height:a,src:o})),i.createElement("p",null,e.children)):i.createElement("div",{class:"figure"},i.createElement("a",{href:o,target:"_blank"},i.createElement("img",{width:n,height:a,src:o})),i.createElement("p",null,e.children))}},29415:function(e,t,n){var i=n(67294),r=n(88678);const a=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends i.Component{render(){return i.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=o},88678:function(e,t,n){var i=n(67294);class r extends i.Component{render(){const e=`highlight highlight-${this.props.type}`;return i.createElement("div",{class:e},i.createElement("div",{class:"highlight-heading"},i.createElement("h5",null,i.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),i.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=r},82985:function(e,t,n){var i=n(67294);class r extends i.Component{render(){return i.createElement("code",{class:"shortcut"},this.props.children)}}t.Z=r},26382:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return k},default:function(){return T},frontMatter:function(){return f},metadata:function(){return w},toc:function(){return v}});var i=n(3905),r=n(44035),a=n(82985),o=n(29415),l=n(39130),s=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&m(e,n,t[n]);if(d)for(var n of d(t))c.call(t,n)&&m(e,n,t[n]);return e};const f={id:"config-view",title:"Config View"},k=void 0,w={unversionedId:"development/ui-development/designer-user-guide/config-view",id:"development/ui-development/designer-user-guide/config-view",title:"Config View",description:"",source:"@site/docs/development/ui-development/designer-user-guide/config-view.mdx",sourceDirName:"development/ui-development/designer-user-guide",slug:"/development/ui-development/designer-user-guide/config-view",permalink:"/4.17/docs/development/ui-development/designer-user-guide/config-view",draft:!1,tags:[],version:"current",frontMatter:{id:"config-view",title:"Config View"},sidebar:"docs",previous:{title:"Texts View",permalink:"/4.17/docs/development/ui-development/designer-user-guide/texts-view"},next:{title:"Interactions",permalink:"/4.17/docs/development/ui-development/designer-user-guide/interactions-view"}},b={},v=[{value:"General",id:"general",level:2},{value:"Display",id:"display",level:2},{value:"Default Image Configuration",id:"default-image-configuration",level:2},{value:"Text Configuration",id:"text-configuration",level:2},{value:"Simulator",id:"simulator",level:2},{value:"Build",id:"build",level:2},{value:"Framework Features",id:"framework-features",level:2}],y={toc:v};function T(e){var t,n=e,{components:s}=n,m=((e,t)=>{var n={};for(var i in e)h.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&d)for(var i of d(e))t.indexOf(i)<0&&c.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=g(g({},y),m),p(t,u({components:s,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"In the Config View various settings affecting the project can be configured in the following sections: ",(0,i.kt)("a",g({parentName:"p"},{href:"#general"}),"General"),", ",(0,i.kt)("a",g({parentName:"p"},{href:"#display"}),"Display"),", ",(0,i.kt)("a",g({parentName:"p"},{href:"#default-image-configuration"}),"Default Image Configuration"),", ",(0,i.kt)("a",g({parentName:"p"},{href:"#text-configuration"}),"Text Configuration"),", ",(0,i.kt)("a",g({parentName:"p"},{href:"#simulator"}),"Simulator"),", ",(0,i.kt)("a",g({parentName:"p"},{href:"#simulator"}),"Build")," and ",(0,i.kt)("a",g({parentName:"p"},{href:"#framework-features"}),"Framework Features"),"."),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-4.17.webp",mdxType:"Figure"},"General settings in Config View"),(0,i.kt)("h2",g({},{id:"general"}),"General"),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-general-4.17.webp",mdxType:"Figure"},"General settings in Config View"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Application Name"),(0,i.kt)("br",null),"\nApplication name is a readonly field, displaying the name that was chosen for the application when it was created."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TouchGFX Board Setup"),(0,i.kt)("br",null),"\nThis field shows the TouchGFX Board Setup the application was created with, if this information is not available 'N/A' will be displayed.",(0,i.kt)("br",null),"\nIf this information is available, the name of the TouchGFX Board Setup will be displayed along with the version."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Selected Language"),(0,i.kt)("br",null),"\nThis dropdown contains the languages configured in the ",(0,i.kt)("a",g({parentName:"p"},{href:"texts-view"}),"Texts")," View, and selects which language should be displayed at startup of the project."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Skin"),(0,i.kt)("br",null),"\nThis dropdown sets which of the two built-in styles to use for widgets that support setting a style, options are 'Blue' or 'Dark'. ",(0,i.kt)("em",{parentName:"p"},"If a widget has been configured with a style from the 'Blue' skin, and the skin is changed to 'Dark', the widget will automatically switch to a corresponding style in the 'Dark' skin.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Startup Screen"),(0,i.kt)("br",null),"\nThis dropdown contains all the screens that have been added to the project, and selects which screen to display at startup of the project."),(0,i.kt)("h2",g({},{id:"display"}),"Display"),(0,i.kt)("p",null,"In this section the settings for the Display can be configured."),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-display-4.17.webp",mdxType:"Figure"},"Display settings in Config View"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Dimensions"),(0,i.kt)("br",null),"\nThe size of the display can be set through the ",(0,i.kt)("em",{parentName:"p"},"W(width)")," and ",(0,i.kt)("em",{parentName:"p"},"H(height)")," properties. However if the size has been configured by the TouchGFX Board Setup, configuration of the size will be disabled."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Display Orientation"),(0,i.kt)("br",null),"\nThe orientation of the display can be toggled between Landscape and Portrait orientations. This will also affect how images used in a project are converted to cpp files."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Color Depth"),(0,i.kt)("br",null),"\nThis dropdown contains the color depths that are available to a project. These are determined by the TouchGFX Board Setup used to create a project."),(0,i.kt)("h2",g({},{id:"default-image-configuration"}),"Default Image Configuration"),(0,i.kt)("p",null,"In this section the default configuration used for images in a project can be set. These settings will affect all images in the project, unless they are overwriten in the ",(0,i.kt)("a",g({parentName:"p"},{href:"images-view"}),"Images")," View"),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-default-image-configuration-4.17.webp",mdxType:"Figure"},"Default Image Configuration settings in Config View"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Opaque Image Format"),(0,i.kt)("br",null),"\nThis dropdown sets which format images that have only opaque pixel data should be generated with. The available image formats in this dropdown depend on the selected color depth of the project."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Non Opaque Image Format"),(0,i.kt)("br",null),"\nThis dropdown sets which format images that have non-opaque pixel data should be generated with. The available image formats in this dropdown depend on the selected color depth of the project."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Section"),(0,i.kt)("br",null),"\nThis dropdown sets the location where image data should be stored on the target hardware. The available sections in this dropdown depend on the TouchGFX Board Setup that the project was created with."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Extra Section"),(0,i.kt)("br",null),"\nWhen using L8 image formats you can choose to store the color table in a different section using this dropdown. The available sections in this dropdown depend on the TouchGFX Board Setup that the project was created with."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Dither Algorithm"),(0,i.kt)("br",null),"\nThis dropdown sets the dithering algorithm used for images."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"No dither: ",(0,i.kt)("em",{parentName:"li"},"no dithering is applied to the image. This is the setting with the highest performance since no alteration is made. However, depending on the image, the quality of the image may also degrade visually at lower color depths.")),(0,i.kt)("li",{parentName:"ul"},"Floyd-Steinberg: ",(0,i.kt)("em",{parentName:"li"},"diffuses the error to neighboring pixels, resulting in fine-grained dithering but sacrificing sharpness.")),(0,i.kt)("li",{parentName:"ul"},"Jarvis, Judice and Ninke: ",(0,i.kt)("em",{parentName:"li"},"diffuses the error to pixels one step further away compared to Floyd-Steinberg, resulting in coarser dithering but a sharper image. The slowest of the 3 error-diffusion dithering algorithms.")),(0,i.kt)("li",{parentName:"ul"},"Stucki: ",(0,i.kt)("em",{parentName:"li"},"based on minimized average error dithering but faster and cleaner."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Alpha Dither"),(0,i.kt)("br",null),"\nThis dropdown sets whether or not to use the dither algorithm through the alpha channel."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Layout Rotaion"),(0,i.kt)("br",null),"\nThis dropdown specifies the rotation of the image data when generated. If the screen orientation is changed, use this to correctly render images in the new orientation."),(0,i.kt)("h2",g({},{id:"text-configuration"}),"Text Configuration"),(0,i.kt)("p",null,"In this section options for text rendering and storage can be configured by checking the boxes that fit your project's needs."),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-text-configuration-4.17.webp",mdxType:"Figure"},"Text Configuration settings in Config View"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Remap texts"),(0,i.kt)("br",null),"\nThis option defines whether or not translations that are identical should be remapped.\nRemapping texts will combine identical translations and suffixes across all languages, typographies and alignments, resulting in a reduced footprint.",(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"p"},"This option is mutually exclusive with the option 'Binary translation files'")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"A4"),(0,i.kt)("br",null),"\nThis option defines whether or not the horizontal pixel data of glyphs byte are aligned into an A4 format.",(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"p"},"This only affects typographies that are configured as 4bpp")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Binary translation files"),(0,i.kt)("br",null),"\nThis option defines whether or not the translations in a project should be moved into binary files that can be loaded at runtime.",(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"p"},"This option is mutually exclusive with the option 'Remap texts'")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Binary font files"),(0,i.kt)("br",null),"\nThis option defines whether or not the font files in a project should be moved into binary files that can be loaded at runtime."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Mapped storage format"),(0,i.kt)("br",null),"\nThis option defines if the font files in a project should be output in mapped storage format."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Unmapped storage format"),(0,i.kt)("br",null),"\nThis option defines if the font files in a project should be output in unmapped storage format."),(0,i.kt)(o.Z,{mdxType:"FurtherReading"},(0,i.kt)(l.Z,{to:"../touchgfx-engine-features/texts-and-fonts",mdxType:"Link"},"Text and Fonts")),(0,i.kt)("h2",g({},{id:"simulator"}),"Simulator"),(0,i.kt)("p",null,"In this section, a skin can be added to the Simulator when running it. A skin can be added for both Landscape and Portrait orientated projects.\nThe ",(0,i.kt)("em",{parentName:"p"},"X")," and ",(0,i.kt)("em",{parentName:"p"},"Y")," properties determine the position of the simulator on the skin."),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-simulator-4.17.webp",mdxType:"Figure"},"Simulator settings in Config View"),(0,i.kt)("p",null,"Below is a demonstration of a simulator running with a skin.",(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"p"},"When a simulator runs with a skin, the standard window controls are hidden. To close the simulator press")," ",(0,i.kt)(a.Z,{mdxType:"Shortcut"},"Esc")),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-simulator-skin.webp",mdxType:"Figure"},"Simulator running with a skin"),(0,i.kt)("h2",g({},{id:"build"}),"Build"),(0,i.kt)("p",null,"In this section the commands that are executed when pressing ",(0,i.kt)("a",g({parentName:"p"},{href:"main-window#run-simulator"}),"'Run Simulator'"),", ",(0,i.kt)("a",g({parentName:"p"},{href:"main-window#run-target"}),"'Run Target'")," and ",(0,i.kt)("a",g({parentName:"p"},{href:"main-window#generate-code"}),"'Generate Code'"),", can be overwritten."),(0,i.kt)("p",null,"To overwrite a command, simply write any command in the text boxes. To reset a command, if it has been overwritten, press the 'Reset' label next to the name of the Command."),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-build-4.17.webp",mdxType:"Figure"},"Build settings in Config View"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Generate Assets Command"),(0,i.kt)("br",null)),(0,i.kt)("p",null,"This command is usually set up to generate text and image assets, and is executed after the TouchGFX Designer has generated the code."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Post Generate Command"),(0,i.kt)("br",null),"\nThis command is usually used to update various project files. The built-in ",(0,i.kt)("inlineCode",{parentName:"p"},"touchgfx update_project")," commandline tool supports updating the following project files:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Visual Studio (.vcxproj)"),(0,i.kt)("li",{parentName:"ul"},"Keil (.uvprojx)"),(0,i.kt)("li",{parentName:"ul"},"IAR (.ewp & .ipcf)"),(0,i.kt)("li",{parentName:"ul"},"STM32CubeIDE (.project & .cproject)"),(0,i.kt)("li",{parentName:"ul"},"STM32CubeMX (.ioc)")),(0,i.kt)("p",null,"However, any command that needs to be executed after code generation can be written here."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Compile Simulator Command"),(0,i.kt)("br",null),"\nThis command executes the compilation of a project for the simulator, usually by executing the Makefile generated by the TouchGFX Designer."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Run Simulator Command"),(0,i.kt)("br",null),"\nThis command executes the startup of the simulator.exe."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Post Generate Target Command"),(0,i.kt)("br",null),"\nThis command is usually used to update various project files, mostly STM32CubeMX (.ioc) project files."),(0,i.kt)("p",null,"However, any command that needs to be executed after code generation can be written here."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Compile Target Command"),(0,i.kt)("br",null),"\nThis command executes the compilation of a project for the target hardware."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Flash Target Command"),(0,i.kt)("br",null),"\nThis command executes the flashing of a project to the target hardware."),(0,i.kt)("h2",g({},{id:"framework-features"}),"Framework Features"),(0,i.kt)("p",null,"In this section features in the framework, specifically which image formats the Texture Mapper widget supports, can be enabled/disabled. This can be used for optimizing the code size a project takes up on the target hardware."),(0,i.kt)("p",null,"The available options displayed in this section depend upon which color depth has been chosen for the project. In the image below the image formats for a 24 bit color depth Texture Mapper is shown."),(0,i.kt)(r.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-framework-features-4.17.webp",mdxType:"Figure"},"Framework Features settings for 24bpp in Config View"))}T.isMDXComponent=!0}}]);