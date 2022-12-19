"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[434],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return k}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},c="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=p(a),g=r,k=c["".concat(d,".").concat(g)]||c[g]||s[g]||l;return a?n.createElement(k,i(i({ref:e},u),{},{components:a})):n.createElement(k,i({ref:e},u))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[c]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},43861:function(t,e,a){var n=a(67294);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},65530:function(t,e,a){a.r(e),a.d(e,{assets:function(){return h},contentTitle:function(){return m},default:function(){return x},frontMatter:function(){return k},metadata:function(){return N},toc:function(){return f}});var n=a(3905),r=a(39130),l=a(43861),i=Object.defineProperty,o=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(t,e,a)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,g=(t,e)=>{for(var a in e||(e={}))u.call(e,a)&&s(t,a,e[a]);if(p)for(var a of p(e))c.call(e,a)&&s(t,a,e[a]);return t};const k={title:"Texts"},m=void 0,N={unversionedId:"api/classes/classtouchgfx_1_1_texts",id:"api/classes/classtouchgfx_1_1_texts",title:"Texts",description:"",source:"@site/docs/api/classes/classtouchgfx_1_1_texts.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_texts",permalink:"/4.17/zh-CN/docs/api/classes/classtouchgfx_1_1_texts",draft:!1,tags:[],version:"current",frontMatter:{title:"Texts"},sidebar:"docs",previous:{title:"TextProvider",permalink:"/4.17/zh-CN/docs/api/classes/classtouchgfx_1_1_text_provider"},next:{title:"TextureMapper",permalink:"/4.17/zh-CN/docs/api/classes/classtouchgfx_1_1_texture_mapper"}},h={},f=[{value:"Public Functions",id:"public-functions",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"getLanguage",id:"getlanguage",level:3},{value:"setLanguage",id:"setlanguage",level:3},{value:"setTranslation",id:"settranslation",level:3},{value:"getText",id:"gettext",level:3}],b={toc:f};function x(t){var e,a=t,{components:i}=a,s=((t,e)=>{var a={};for(var n in t)u.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&p)for(var n of p(t))e.indexOf(n)<0&&c.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=g(g({},b),s),o(e,d({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null," Class for setting language and getting texts.\nThe language set will determine which texts will be used in the application. "),(0,n.kt)("h2",g({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",g({parentName:"tr"},{align:"right"})),(0,n.kt)("th",g({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"}),(0,n.kt)("a",g({parentName:"td"},{href:"../namespacetouchgfx#typedef-languageid"}),"LanguageId")),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_texts#function-getlanguage",mdxType:"Link"},"getLanguage")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Gets the current language.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_texts#function-setlanguage",mdxType:"Link"},"setLanguage")),"(",(0,n.kt)("a",g({parentName:"td"},{href:"../namespacetouchgfx#typedef-languageid"}),"LanguageId")," id)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Sets the current language for texts.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"}),"void"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_texts#function-settranslation",mdxType:"Link"},"setTranslation")),"(",(0,n.kt)("a",g({parentName:"td"},{href:"../namespacetouchgfx#typedef-languageid"}),"LanguageId")," id, const void * translation)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Adds or replaces a translation.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"}),"const ",(0,n.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_unicode#typedef-unicodechar"}),"Unicode::UnicodeChar")," *"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_texts#function-gettext",mdxType:"Link"},"getText")),"(",(0,n.kt)("a",g({parentName:"td"},{href:"../namespacetouchgfx#typedef-typedtextid"}),"TypedTextId")," id) const")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Get text in the set language.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",g({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_texts#function-getlanguage",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",g({},{id:"getlanguage"}),"getLanguage"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),"static","\xa0","LanguageId","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_texts#function-getlanguage",mdxType:"Link"},"getLanguage")),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",g({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Gets the current language. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"The id of the language. ")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_texts#function-setlanguage",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",g({},{id:"setlanguage"}),"setLanguage"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_texts#function-setlanguage",mdxType:"Link"},"setLanguage")),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("a",g({parentName:"td"},{href:"../namespacetouchgfx#typedef-languageid"}),"LanguageId")),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"id"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Sets the current language for texts. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),"id"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"The id of the language."))))))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_texts#function-settranslation",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",g({},{id:"settranslation"}),"setTranslation"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),"static","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_texts#function-settranslation",mdxType:"Link"},"setTranslation")),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("a",g({parentName:"td"},{href:"../namespacetouchgfx#typedef-languageid"}),"LanguageId")),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"id ,"),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"const void *"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"translation"),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Adds or replaces a translation. "),(0,n.kt)("p",null,"This function allows an application to add a translation at runtime."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),"id"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"The id of the language to add or replace.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),"translation"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"A pointer to the translation in flash or RAM."))))))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_texts#function-gettext",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",g({},{id:"gettext"}),"getText"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),"const Unicode::UnicodeChar *","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_texts#function-gettext",mdxType:"Link"},"getText")),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("a",g({parentName:"td"},{href:"../namespacetouchgfx#typedef-typedtextid"}),"TypedTextId")),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"id"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Get text in the set language. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),"id"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"The id of the text to lookup."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"The text.")),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"See also:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",g({parentName:"p"},{href:"classtouchgfx_1_1_texts#function-setlanguage"}),"setLanguage"))))))}x.isMDXComponent=!0}}]);