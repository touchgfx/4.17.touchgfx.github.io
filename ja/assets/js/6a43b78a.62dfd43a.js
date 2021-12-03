(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8101],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),g=i,h=p["".concat(l,".").concat(g)]||p[g]||d[g]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},44035:function(e,t,n){"use strict";var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,o=(0,i.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children))}},2083:function(e,t,n){"use strict";var r=n(67294);class i extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=i},60204:function(e,t,n){"use strict";var r=n(67294);class i extends r.Component{render(){return r.createElement("i",null,this.props.children)}}t.Z=i},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return o}});var r=n(11368),i=n(35096);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},29498:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return f},metadata:function(){return y},toc:function(){return b},default:function(){return v}});var r=n(3905),i=n(44035),a=n(60204),o=n(2083),s=Object.defineProperty,l=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&g(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&g(e,n,t[n]);return e};const m={id:"texts-view",title:"Texts View"},f=void 0,y={unversionedId:"development/ui-development/designer-user-guide/texts-view",id:"development/ui-development/designer-user-guide/texts-view",isDocsHomePage:!1,title:"Texts View",description:"The Texts View in the TouchGFX Designer is used for configuring texts, translations and typographies in a project. The view consists of three tabs: Single Use, Resources and Typographies.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/texts-view.mdx",sourceDirName:"development/ui-development/designer-user-guide",slug:"/development/ui-development/designer-user-guide/texts-view",permalink:"/4.17/ja/docs/development/ui-development/designer-user-guide/texts-view",version:"current",frontMatter:{id:"texts-view",title:"Texts View"},sidebar:"docs",previous:{title:"Images View",permalink:"/4.17/ja/docs/development/ui-development/designer-user-guide/images-view"},next:{title:"Config View",permalink:"/4.17/ja/docs/development/ui-development/designer-user-guide/config-view"}},b=[{value:"Single Use &amp; Resources",id:"single-use--resources",children:[{value:"Resource Text",id:"resource-text",children:[]},{value:"Single Use Text",id:"single-use-text",children:[]},{value:"Translations",id:"translations",children:[]},{value:"Translations Specifics",id:"translations-specifics",children:[]},{value:"Adding languages",id:"adding-languages",children:[]}]},{value:"Typographies",id:"typographies",children:[{value:"Add New Typography",id:"add-new-typography",children:[]}]}],w={toc:b};function v(e){var t,n=e,{components:s}=n,g=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=h(h({},w),g),l(t,u({components:s,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"The Texts View in the TouchGFX Designer is used for configuring texts, translations and typographies in a project. The view consists of three tabs: ",(0,r.kt)("a",h({parentName:"p"},{href:"#single-use-text"}),"Single Use"),", ",(0,r.kt)("a",h({parentName:"p"},{href:"#resource-text"}),"Resources")," and ",(0,r.kt)("a",h({parentName:"p"},{href:"#typographies"}),"Typographies"),"."),(0,r.kt)("h2",h({},{id:"single-use--resources"}),"Single Use & Resources"),(0,r.kt)("p",null,"The Single Use and Resouces tabs both contain an overview of texts, they are however different from each other."),(0,r.kt)("h3",h({},{id:"resource-text"}),"Resource Text"),(0,r.kt)("p",null,"Resource texts can be reused on any number of widgets and actions in the TouchGFX Designer. To add a new Resource text, click the button labeled 'ADD NEW RESOURCE' in the Resources tab. One or more Resource texts can be deleted by setting a checkmark in the first column of the desired text rows and clicking the button labeled 'DELETE SELECTED RESOURCES'."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-texts-view-resources.png",mdxType:"Figure"},"Resource texts in Texts View"),(0,r.kt)("h3",h({},{id:"single-use-text"}),"Single Use Text"),(0,r.kt)("p",null,"Single Use texts are only used once, and cannot be used by more than one widget or action at a time. They are added automatically when used on a widget or action, and are deleted automatically when the widget or action is deleted or changed to use a Resource text instead.",(0,r.kt)("br",null)),(0,r.kt)("p",null,"One or more Single Use text can be converted to a Resource text by setting a checkmark in the first column of the desired text's row and clicking the button labeled 'CONVERT TO RESOURCE'."),(0,r.kt)("p",null,"The Single Use text overview columns labeled 'Location' and 'Widget' show which Screen/Custom Container and Widget the widget is used on."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-texts-view-single-use.png",mdxType:"Figure"},"Single Use texts in Texts View"),(0,r.kt)("h3",h({},{id:"translations"}),"Translations"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Typography:"),(0,r.kt)("br",null)," Specifies which typography the text and all its translations should use as default. These can be added and configured in the ",(0,r.kt)("a",h({parentName:"p"},{href:"#typographies"}),"Typographies")," tab."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Alignment:"),(0,r.kt)("br",null)," Specifies the horizontal alignment the text and all its translations should use as default. Possible values are Left, Right, and Center."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Direction:"),(0,r.kt)("br",null)," Specifies which text direction the text and all its translations should use as default. Possible values are LTR (Left-to-Right) and RTL (Right-to-Left), the default being LTR. The RTL option is primarily used for Arabic, Hebrew or other languages written from right to left."),(0,r.kt)("h3",h({},{id:"translations-specifics"}),"Translations Specifics"),(0,r.kt)("p",null,"Each translation can overwrite the default Typography, Alignment and Direction. To reveal these controls simply hover the mouse cursor over a translation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Translation Specific Typography:"),(0,r.kt)("br",null)," Setting a translation specific typography is easily done through the inline Typography selector, as shown in the figure below."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-texts-view-translation-specific-typography.png",mdxType:"Figure"},"How to set Translation Specific Typography"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Translation Specific Alignment:"),(0,r.kt)("br",null)," Setting a translation specific alignment is easily done through the inline Alignment selector, as shown in the figure below."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-texts-view-translation-specific-alignment.png",mdxType:"Figure"},"How to set Translation Specific Alignment"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Translation Specific Direction:"),(0,r.kt)("br",null)," Setting a translation specific direction is easily done through the inline Direction selector, as shown in the figure below."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-texts-view-translation-specific-direction.png",mdxType:"Figure"},"How to set Translation Specific Direction"),(0,r.kt)("h3",h({},{id:"adding-languages"}),"Adding languages"),(0,r.kt)("p",null,"To add a new language, simply press the button labeled 'ADD NEW LANGUAGE'. The popup in the figure below will appear, where the name of the language can be configured, and whether or not to use the translations from another language."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-texts-view-add-new-language-popup.png",mdxType:"Figure"},"Add New Language popup"),(0,r.kt)("h2",h({},{id:"typographies"}),"Typographies"),(0,r.kt)("p",null,"In the Typographies tab an overview of all typographies in a project can be found, as shown in the figure below."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-texts-view-typographies.png",mdxType:"Figure"},"Texts view in TouchGFX Designer"),(0,r.kt)("p",null,"One or more Typographies can be deleted by setting a checkmark in the first column of the desired typography rows and clicking the button labeled 'DELETE SELECTED TYPOGRAPHIES'."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Uses:"),(0,r.kt)("br",null)," The number of times the typography has been used in texts."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Typography Name:"),(0,r.kt)("br",null)," The name of the typography, which can be referenced in code."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Font:"),(0,r.kt)("br",null)," The name of the font to use for the given typography.",(0,r.kt)("br",null)," You can choose between all installed fonts in Windows, or add your own fonts in the ",(0,r.kt)(o.Z,{mdxType:"InlineCode"},"assets/fonts")," folder. ",(0,r.kt)(a.Z,{mdxType:"InlineNote"},"When adding fonts to this folder, the TouchGFX Designer needs to be restarted to load them.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Size:"),(0,r.kt)("br",null)," The font size of the typography."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Bpp:"),(0,r.kt)("br",null)," Bits per pixel. The number of bits that are used per pixel to represent the font. Legal values are 1, 2, 4, 8."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fallback Character:"),(0,r.kt)("br",null)," If TouchGFX needs to render a character, but the glyph is unavailable, the character specified in this column is used. Value can be a single character, a unicode value ",(0,r.kt)(a.Z,{mdxType:"InlineNote"},"(in decimal or hexadecimal e.g. 0xABCD)"),", the special keyword 'skip' or simply blank."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Wildcard Characters:"),(0,r.kt)("br",null),' Characters that should be available to display in the TouchGFX application. This is recommended over using a dummy text. A dummy text will generate all glyphs, but also the actual string (e.g. "0123456789-"). Putting "0123456789-" in this column will generate the glyphs, but not a string.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Widget Wildcard Characters:"),(0,r.kt)("br",null)," These are characters which some widgets that require a wildcard will add. The ",(0,r.kt)("a",h({parentName:"p"},{href:"../ui-components/miscellaneous/digital-clock"}),"Digital Clock"),' widget will add "0123456789 :APM" to this field.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Wildcard Ranges:"),(0,r.kt)("br",null),' This is similar to Wildcard Characters, but ranges can easily be specified, e.g. "0-9,A-F" will be the same as putting "0123456789ABCDEF" in the Wildcard Characters column. Ranges can also be specified as numbers. For example "0-9" can also be specified as "48-57" or "0x30-0x39". Please note that the quotes should not be entered.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ellipsis Character:"),(0,r.kt)("br",null)," This character is used to truncate long text in text areas."),(0,r.kt)("h3",h({},{id:"add-new-typography"}),"Add New Typography"),(0,r.kt)("p",null,"To add a new typography, simply press the button labeled 'ADD NEW TYPOGRAPHY'. A new line at the bottom of the list of typographies will be added, where the name of the typography, font, size and color depth can be configured."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-texts-view-add-new-typography.png",mdxType:"Figure"},"Add New Typography"))}v.isMDXComponent=!0}}]);