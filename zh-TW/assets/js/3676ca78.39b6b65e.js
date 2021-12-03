(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3960],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,g=p["".concat(l,".").concat(d)]||p[d]||h[d]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},95506:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return g},toc:function(){return f},default:function(){return b}});var a=n(3905),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))u.call(t,n)&&c(e,n,t[n]);return e};const p={id:"languages-and-characters",title:"Languages and Characters"},d=void 0,g={unversionedId:"development/ui-development/touchgfx-engine-features/languages-and-characters",id:"development/ui-development/touchgfx-engine-features/languages-and-characters",isDocsHomePage:!1,title:"Languages and Characters",description:"TouchGFX enables internationalized and localized applications.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/languages-and-characters.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/languages-and-characters",permalink:"/4.17/zh-TW/docs/development/ui-development/touchgfx-engine-features/languages-and-characters",version:"current",frontMatter:{id:"languages-and-characters",title:"Languages and Characters"},sidebar:"docs",previous:{title:"Texts and Fonts",permalink:"/4.17/zh-TW/docs/development/ui-development/touchgfx-engine-features/texts-and-fonts"},next:{title:"Button",permalink:"/4.17/zh-TW/docs/development/ui-development/ui-components/buttons/button"}},f=[{value:"Languages",id:"languages",children:[]},{value:"Characters",id:"characters",children:[]},{value:"Writing Direction",id:"writing-direction",children:[]},{value:"Contextual Shaping",id:"contextual-shaping",children:[]},{value:"List of Supported Languages",id:"list-of-supported-languages",children:[{value:"Left-to-Right Languages",id:"left-to-right-languages",children:[]},{value:"Right-to-Left Languages",id:"right-to-left-languages",children:[]}]},{value:"Unsupported Languages",id:"unsupported-languages",children:[]}],m={toc:f};function b(e){var t,n=e,{components:r}=n,c=((e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=h(h({},m),c),i(t,o({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"TouchGFX enables internationalized and localized applications."),(0,a.kt)("p",null,"TouchGFX does this by supporting a wide range of languages and characters and by understanding text layout mechanisms, such as writing direction and contextual shaping."),(0,a.kt)("h2",h({},{id:"languages"}),"Languages"),(0,a.kt)("p",null,"The languages supported are the languages of the Unicode basic multilingual plane with the restriction that only Left-to-Right or Right-to-Left writing systems are supported. This implies that languages such as Arabic, Chinese, English and many more are supported, maybe with a few limitations. Urdu and Burmese are examples of languages that are currently not supported."),(0,a.kt)("h2",h({},{id:"characters"}),"Characters"),(0,a.kt)("p",null,"The encoding of characters is based on the Unicode standard. 16-bit unicodes are supported, i.e. Unicodes from 0x0000 to 0xFFFF are supported. Some languages may use the Private Use Area from 0xE000-0xE3FF for special characters in a given font (e.g. Devanagari)."),(0,a.kt)("h2",h({},{id:"writing-direction"}),"Writing Direction"),(0,a.kt)("p",null,"TouchGFX supports Left-to-Right (LTR) and Right-to-Left (RTL) writing systems. There is no built-in support for Top-to-Bottom writing systems."),(0,a.kt)("p",null,'It should be noted that RTL does not mean that text is written backwards (compared to LTR). It means that WORDS are written starting from the right towards the left. For Arabic and Hebrew, this is the correct setting. "TouchGFX" will not be written "XFGhcuoT" but the direction of words (or collection of workds) can be controlled using the RTL/LTR setting.'),(0,a.kt)("p",null,'The handling of LTR and RTL writing inside TouchGFX applications respects mixing of the two to some degree. This is known as bidirectional script support. A subset of the official rules for bidirectional writing is supported by TouchGFX. This means that for example "10:45", "3.14159", "STMicroelectronics TouchGFX" and others are recognized and written fully LTR even in an RTL text.'),(0,a.kt)("p",null,"For RTL text, some parts of the text must thus be written LTR. This text is found and collected; all characters that are non-RTL letters are collected. Characters such as color (:), dot (.), comma (,), space (","\xa0",') will also "tie together" two consecutive LTR parts. This is what makes sure that "10:45" is handled as a single LTR entity whereas "Mark:" (ending in a color) will get the colon to the left as Arabic and Hebrew speaking countries would expect, i.e. "',"<","some Arabic message",">",' :Mark" where the colon is on the left side in the RTL text.'),(0,a.kt)("p",null,"Please note that numbers used in the Latin character set (0-9), as well as numbers used in the Arabic character set, are all handled as LTR characters to make sure that numbers show up properly on the display."),(0,a.kt)("p",null,'It should also be noted that the writing direction is very important when a text contains a mix of LTR entities and RTL entities. Also note, that it cannot be determined if a text is RTL or LTR by examining the characters in the text. If a text contains first a hebrew word (RTL) and then an english word (LTR), the output on display will depend on the writing direction of the text. If the text is set to be RTL the output would look something like this: "English werbeH" because the entire text is RTL so the first word must be written to the far right, but if the text is set to be LTR the output would look something like this: "werbeH English" because the text should start with the first word at the far left. The RTL versus LTR setting cannot be determined automatically because an English text may contain Hebrew words, just like a Hebrew text may contain English words.'),(0,a.kt)("p",null,"Another important issue regarding RTL text is the automatic swapping of parenthesis characters. These are (, ), {, }, ","[, ]",", ","<",", ",">",". All these are automatically swapped with the opposite character to ensure that text looks correct. Please note that there is no automatic conversion from Latin numbers to Arabic numbers. This must be done by the user before displaying the text, should this be desired."),(0,a.kt)("h2",h({},{id:"contextual-shaping"}),"Contextual Shaping"),(0,a.kt)("p",null,"Certain scripts will select a different form of one or more characters/glyphs depending on the context of the character. As an example the Arabic alphabet has different contextual forms for the letters in the alphabet, depending on the position of the letter inside the word. TouchGFX supports such contextual shaping of languages by implementing a simplied set of rules for combining characters. Also, some diacritics are placed using custom logic to determine the vertical position - this is particularly true for Arabic, Thai and Devanagari."),(0,a.kt)("h2",h({},{id:"list-of-supported-languages"}),"List of Supported Languages"),(0,a.kt)("p",null,"It is difficult to provide an exhaustive list of all supported languages. In general, standard glyphs without special re-ordering or positioning rules are supported. Some languages, such as Hindi (Devanagari) and Arabic, with special rules have been included in TouchGFX."),(0,a.kt)("h3",h({},{id:"left-to-right-languages"}),"Left-to-Right Languages"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Simple languages using latin characters")),(0,a.kt)("p",null,"In general, simple languages using characters and glyphs that do not require special re-ordering or positioning are supported. These languages include, but is not limited to, these:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bosnian, Bulgarian, Croatian, Czech, Danish, Dutch, English, Estonian, Finnish, French, German, Hungarian, Italian, Latvian, ithuanian, Norwegian, Polish, Portuguese, Romanian, Serbian, Slovenian, Slovak, Spanish, Swedish, Turkish, Ukrainian")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Simple languages using special character sets")),(0,a.kt)("p",null,"Some languages still follow simple positioning rules, but use a different set of characters and glyphs. These are also support and include, but is not limited to, these:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Chinese, Greek, Japanese, Russian")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Other")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Thai has limited support. Tone marks are positioned (vertically) using TouchGFX rules."),(0,a.kt)("li",{parentName:"ul"},"Hindi (Devanagari) has limited support. Some characters may be placed slightly wrong, but text should not be unreadable.")),(0,a.kt)("h3",h({},{id:"right-to-left-languages"}),"Right-to-Left Languages"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Simple languages using special character sets")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hebrew, Indonesian, Khazakh")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Languages with different ligatures for different forms (isolated, initial, middle, final)")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Arabic (Sequences of more than four characters are not recognized and converted to one ligature. These are: Sallallahou Alayhe Wasallam, Jallajalalouhou and Rial Sign). Some diacritics may be placed slightly incorrect."),(0,a.kt)("li",{parentName:"ul"},"Farsi"),(0,a.kt)("li",{parentName:"ul"},'Malay (\u0762 "Keheh with dot above" only supported in isolated form)')),(0,a.kt)("h2",h({},{id:"unsupported-languages"}),"Unsupported Languages"),(0,a.kt)("p",null,"The following languages are known to be unsupported because they rely on extensive use of ligatures, digraphs and vertical positioning:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Urdu, Burmese")))}b.isMDXComponent=!0}}]);