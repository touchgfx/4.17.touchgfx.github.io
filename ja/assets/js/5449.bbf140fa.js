/*! For license information please see 5449.bbf140fa.js.LICENSE.txt */
(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5449],{19767:function(e,t,n){"use strict";n.r(t),n.d(t,{__extends:function(){return o},__assign:function(){return u},__rest:function(){return i},__decorate:function(){return c},__param:function(){return a},__metadata:function(){return s},__awaiter:function(){return l},__generator:function(){return f},__createBinding:function(){return d},__exportStar:function(){return p},__values:function(){return v},__read:function(){return g},__spread:function(){return h},__spreadArrays:function(){return m},__spreadArray:function(){return y},__await:function(){return b},__asyncGenerator:function(){return w},__asyncDelegator:function(){return P},__asyncValues:function(){return _},__makeTemplateObject:function(){return O},__importStar:function(){return A},__importDefault:function(){return E},__classPrivateFieldGet:function(){return j},__classPrivateFieldSet:function(){return x}});var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function c(e,t,n,r){var o,u=arguments.length,i=u<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(u<3?o(i):u>3?o(t,n,i):o(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i}function a(e,t){return function(n,r){t(n,r,e)}}function s(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,n,r){return new(n||(n=Promise))((function(o,u){function i(e){try{a(r.next(e))}catch(t){u(t)}}function c(e){try{a(r.throw(e))}catch(t){u(t)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}a((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function c(u){return function(c){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(c){u=[6,c],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}}var d=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function p(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||d(t,e,n)}function v(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,u=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=u.next()).done;)i.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(n=u.return)&&n.call(u)}finally{if(o)throw o.error}}return i}function h(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(g(arguments[t]));return e}function m(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var u=arguments[t],i=0,c=u.length;i<c;i++,o++)r[o]=u[i];return r}function y(e,t,n){if(n||2===arguments.length)for(var r,o=0,u=t.length;o<u;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||t)}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function w(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),u=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){u.push([e,t,n,r])>1||c(e,t)}))})}function c(e,t){try{(n=o[e](t)).value instanceof b?Promise.resolve(n.value.v).then(a,s):l(u[0][2],n)}catch(r){l(u[0][3],r)}var n}function a(e){c("next",e)}function s(e){c("throw",e)}function l(e,t){e(t),u.shift(),u.length&&c(u[0][0],u[0][1])}}function P(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:b(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function _(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=v(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,o,(t=e[n](t)).done,t.value)}))}}}function O(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var D=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function A(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&d(t,e,n);return D(t,e),t}function E(e){return e&&e.__esModule?e:{default:e}}function j(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function x(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n}},86010:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(67294),o=n(73727),u=n(11368),i=n(35096),c=n(84487);const a=(0,r.createContext)({collectLink:()=>{}});var s=n(25026),l=n(67023),f=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&m(e,n,t[n]);if(v)for(var n of v(t))h.call(t,n)&&m(e,n,t[n]);return e};var b=function(e){var t,n=e,{isNavLink:f,to:m,href:b,activeClassName:w,isActive:P,"data-noBrokenLinkCheck":_,autoAddBaseUrl:O=!0}=n,D=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&v)for(var r of v(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:A}}=(0,u.Z)(),{withBaseUrl:E}=(0,s.C)(),j=(0,r.useContext)(a),x=m||b,S=(0,i.Z)(x),V=null==x?void 0:x.replace("pathname://","");let C=void 0!==V?(k=V,O&&(e=>e.startsWith("/"))(k)?E(k):k):void 0;var k;C&&S&&(C=(0,l.applyTrailingSlash)(C,A));const L=(0,r.useRef)(!1),I=f?o.OL:o.rU,R=c.Z.canUseIntersectionObserver;let $;(0,r.useEffect)((()=>(!R&&S&&null!=C&&window.docusaurus.prefetch(C),()=>{R&&$&&$.disconnect()})),[C,R,S]);const T=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,M=!C||!S||T;return C&&S&&!T&&!_&&j.collectLink(C),M?r.createElement("a",y(y({href:C},x&&!S&&{target:"_blank",rel:"noopener noreferrer"}),D)):r.createElement(I,y((Z=y({},D),d(Z,p({onMouseEnter:()=>{L.current||null==C||(window.docusaurus.preload(C),L.current=!0)},innerRef:e=>{var t,n;R&&e&&S&&(t=e,n=()=>{null!=C&&window.docusaurus.prefetch(C)},$=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&($.unobserve(t),$.disconnect(),n())}))})),$.observe(t))},to:C||""}))),f&&{isActive:P,activeClassName:w}));var Z}},30910:function(e,t,n){"use strict";n.d(t,{Z:function(){return f},I:function(){return l}});var r=n(67294);const o=/{\w+}/g,u="{}";function i(e,t){const n=[],i=e.replace(o,(e=>{const o=e.substr(1,e.length-2),i=null==t?void 0:t[o];if(void 0!==i){const e=r.isValidElement(i)?i:String(i);return n.push(e),u}return e}));return 0===n.length?e:n.every((e=>"string"==typeof e))?i.split(u).reduce(((e,t,r)=>{var o;return e.concat(t).concat(null!==(o=n[r])&&void 0!==o?o:"")}),""):i.split(u).reduce(((e,t,o)=>[...e,r.createElement(r.Fragment,{key:o},t,n[o])]),[])}function c({children:e,values:t}){return i(e,t)}var a=n(64644);function s({id:e,message:t}){var n;return null!==(n=a[null!=e?e:t])&&void 0!==n?n:t}function l({message:e,id:t},n){var r;return i(null!==(r=s({message:e,id:t}))&&void 0!==r?r:e,n)}function f({children:e,id:t,values:n}){var o;const u=null!==(o=s({message:e,id:t}))&&void 0!==o?o:e;return r.createElement(c,{values:n},u)}},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},26224:function(e,t,n){"use strict";n.r(t),n.d(t,{BrowserRouter:function(){return r.VK},HashRouter:function(){return r.UT},Link:function(){return r.rU},MemoryRouter:function(){return r.VA},NavLink:function(){return r.OL},Prompt:function(){return r.NL},Redirect:function(){return r.l_},Route:function(){return r.AW},Router:function(){return r.F0},StaticRouter:function(){return r.gx},Switch:function(){return r.rs},generatePath:function(){return r.Gn},matchPath:function(){return r.LX},useHistory:function(){return r.k6},useLocation:function(){return r.TH},useParams:function(){return r.UO},useRouteMatch:function(){return r.$B},withRouter:function(){return r.EN}});var r=n(73727)},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return u},Z:function(){return i}});var r=n(11368),o=n(35096);function u(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:u=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=u();return n(e,t)}},92734:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o},useAllPluginInstancesData:function(){return u},usePluginData:function(){return i}});var r=n(11368);function o(){const{globalData:e}=(0,r.Z)();if(!e)throw new Error("Docusaurus global data not found.");return e}function u(e){const t=o()[e];if(!t)throw new Error(`Docusaurus plugin global data not found for "${e}" plugin.`);return t}function i(e,t="default"){const n=u(e)[t];if(!n)throw new Error(`Docusaurus plugin global data not found for "${e}" plugin with id "${t}".`);return n}},90634:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;const r=n(26224);t.getActivePlugin=function(e,t,n={}){const o=Object.entries(e).find((([e,n])=>!!r.matchPath(t,{path:n.path,exact:!1,strict:!1}))),u=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!u&&n.failfast)throw new Error(`Can't find active docs plugin for "${t}" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ${Object.values(e).map((e=>e.path)).join(", ")}`);return u};t.getLatestVersion=e=>e.versions.find((e=>e.isLast));t.getActiveVersion=(e,n)=>{const o=t.getLatestVersion(e);return[...e.versions.filter((e=>e!==o)),o].find((e=>!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})))};t.getActiveDocContext=(e,n)=>{const o=t.getActiveVersion(e,n),u=null==o?void 0:o.docs.find((e=>!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})));return{activeVersion:o,activeDoc:u,alternateDocVersions:u?function(t){const n={};return e.versions.forEach((e=>{e.docs.forEach((r=>{r.id===t&&(n[e.name]=r)}))})),n}(u.id):{}}};t.getDocVersionSuggestions=(e,n)=>{const r=t.getLatestVersion(e),o=t.getActiveDocContext(e,n);return{latestDocSuggestion:null==o?void 0:o.alternateDocVersions[r.name],latestVersionSuggestion:r}}},52922:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;const r=n(19767),o=n(26224),u=r.__importStar(n(92734)),i=n(90634);t.useAllDocsData=()=>{var e;return null!==(e=u.default()["docusaurus-plugin-content-docs"])&&void 0!==e?e:{}};t.useDocsData=e=>u.usePluginData("docusaurus-plugin-content-docs",e);t.useActivePlugin=(e={})=>{const n=t.useAllDocsData(),{pathname:r}=o.useLocation();return i.getActivePlugin(n,r,e)};t.useActivePluginAndVersion=(e={})=>{const n=t.useActivePlugin(e),{pathname:r}=o.useLocation();if(n){return{activePlugin:n,activeVersion:i.getActiveVersion(n.pluginData,r)}}};t.useVersions=e=>t.useDocsData(e).versions;t.useLatestVersion=e=>{const n=t.useDocsData(e);return i.getLatestVersion(n)};t.useActiveVersion=e=>{const n=t.useDocsData(e),{pathname:r}=o.useLocation();return i.getActiveVersion(n,r)};t.useActiveDocContext=e=>{const n=t.useDocsData(e),{pathname:r}=o.useLocation();return i.getActiveDocContext(n,r)};t.useDocVersionSuggestions=e=>{const n=t.useDocsData(e),{pathname:r}=o.useLocation();return i.getDocVersionSuggestions(n,r)}},3730:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(67294),o=n(9671),u=n(3068),i=n(25026);function c({title:e,description:t,keywords:n,image:c}){const{image:a}=(0,u.LU)(),s=(0,u.pe)(e),l=(0,i.Z)(c||a,{absolute:!0});return r.createElement(o.Z,null,e&&r.createElement("title",null,s),e&&r.createElement("meta",{property:"og:title",content:s}),t&&r.createElement("meta",{name:"description",content:t}),t&&r.createElement("meta",{property:"og:description",content:t}),n&&r.createElement("meta",{name:"keywords",content:Array.isArray(n)?n.join(","):n}),l&&r.createElement("meta",{property:"og:image",content:l}),l&&r.createElement("meta",{name:"twitter:image",content:l}))}},33204:function(e,t,n){"use strict";n.d(t,{Iw:function(){return r.useActiveDocContext},gA:function(){return r.useActivePlugin},WS:function(){return r.useActivePluginAndVersion},zu:function(){return r.useActiveVersion},_r:function(){return r.useAllDocsData},Jo:function(){return r.useDocVersionSuggestions},zh:function(){return r.useDocsData},yW:function(){return r.useLatestVersion},gB:function(){return r.useVersions}});var r=n(52922)},3068:function(e,t,n){"use strict";n.d(t,{pl:function(){return K},HX:function(){return v},L5:function(){return B},kM:function(){return H},WA:function(){return a},os:function(){return g},Mg:function(){return y},_f:function(){return s},bc:function(){return p},l5:function(){return f},nT:function(){return Q},J:function(){return F},Oh:function(){return W},SL:function(){return j},c2:function(){return A},D9:function(){return E},LU:function(){return o},pe:function(){return b}});var r=n(11368);function o(){return(0,r.Z)().siteConfig.themeConfig}function u(e="localStorage"){if("undefined"==typeof window)throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");if("none"===e)return null;try{return window[e]}catch(n){return t=n,i||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",t),i=!0),null}var t}let i=!1;const c={get:()=>null,set:()=>{},del:()=>{}};const a=(e,t)=>{if("undefined"==typeof window)return function(e){function t(){throw new Error(`Illegal storage API usage for storage key "${e}".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.`)}return{get:t,set:t,del:t}}(e);const n=u(null==t?void 0:t.persistence);return null===n?c:{get:()=>n.getItem(e),set:t=>n.setItem(e,t),del:()=>n.removeItem(e)}};function s(e="localStorage"){const t=u(e);if(!t)return[];const n=[];for(let r=0;r<t.length;r+=1){const e=t.key(r);null!==e&&n.push(e)}return n}var l=n(5977);function f(){const{siteConfig:{baseUrl:e,url:t},i18n:{defaultLocale:n,currentLocale:o}}=(0,r.Z)(),{pathname:u}=(0,l.TH)(),i=o===n?e:e.replace(`/${o}/`,"/"),c=u.replace(e,"");return{createUrl:function({locale:e,fullyQualified:r}){return`${r?t:""}${function(e){return e===n?`${i}`:`${i}${e}/`}(e)}${c}`}}}const d=/title=(["'])(.*?)\1/;function p(e){var t,n;return null!==(n=null===(t=null==e?void 0:e.match(d))||void 0===t?void 0:t[2])&&void 0!==n?n:""}const v="default";function g(e,t){return`docs-${e}-${t}`}var h=n(33204);const m=!!h._r,y=(e,t)=>{const n=e=>!e||(null==e?void 0:e.endsWith("/"))?e:`${e}/`;return n(e)===n(t)},b=e=>{const{siteConfig:t={}}=(0,r.Z)(),{title:n,titleDelimiter:o="|"}=t;return e&&e.trim().length?`${e.trim()} ${o} ${n}`:n};var w=n(67294);const P=["zero","one","two","few","many","other"];function _(e){return P.filter((t=>e.includes(t)))}const O={locale:"en",pluralForms:_(["one","other"]),select:e=>1===e?"one":"other"};function D(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,w.useMemo)((()=>{if(!Intl.PluralRules)return console.error("Intl.PluralRules not available!\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n        "),O;try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:_(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n`),O}}),[e])}function A(){const e=D();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];{r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms}), but the message contains ${r.length} plural forms: ${e} `);const o=n.select(t),u=n.pluralForms.indexOf(o);return r[Math.min(u,r.length-1)]}}(n,t,e)}}function E(e){const t=(0,w.useRef)();return(0,w.useEffect)((()=>{t.current=e})),t.current}function j(e){const t=(0,l.TH)(),n=E(t),r=(0,w.useRef)(!0);(0,w.useEffect)((()=>{r.current?r.current=!1:e({location:t,previousLocation:n})}),[t])}const x=e=>`docs-preferred-version-${e}`;var S={save:(e,t,n)=>{a(x(e),{persistence:t}).set(n)},read:(e,t)=>a(x(e),{persistence:t}).get(),clear:(e,t)=>{a(x(e),{persistence:t}).del()}},V=Object.defineProperty,C=Object.defineProperties,k=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,$=(e,t,n)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function T({pluginIds:e,versionPersistence:t,allDocsData:n}){const r={};return e.forEach((e=>{r[e]=function(e){const r=S.read(e,t);return n[e].versions.some((e=>e.name===r))?{preferredVersionName:r}:(S.clear(e,t),{preferredVersionName:null})}(e)})),r}function M(){const e=(0,h._r)(),t=o().docs.versionPersistence,n=(0,w.useMemo)((()=>Object.keys(e)),[e]),[r,u]=(0,w.useState)((()=>function(e){const t={};return e.forEach((e=>{t[e]={preferredVersionName:null}})),t}(n)));(0,w.useEffect)((()=>{u(T({allDocsData:e,versionPersistence:t,pluginIds:n}))}),[e,t,n]);return[r,(0,w.useMemo)((()=>({savePreferredVersion:function(e,n){S.save(e,t,n),u((t=>{return r=((e,t)=>{for(var n in t||(t={}))I.call(t,n)&&$(e,n,t[n]);if(L)for(var n of L(t))R.call(t,n)&&$(e,n,t[n]);return e})({},t),C(r,k({[e]:{preferredVersionName:n}}));var r}))}})),[u])]}const Z=(0,w.createContext)(null);function B({children:e}){return m?w.createElement(N,null,e):w.createElement(w.Fragment,null,e)}function N({children:e}){const t=M();return w.createElement(Z.Provider,{value:t},e)}function U(){const e=(0,w.useContext)(Z);if(!e)throw new Error('Can\'t find docs preferred context, maybe you forgot to use the "DocsPreferredVersionContextProvider"?');return e}function F(e="default"){const t=(0,h.zh)(e),[n,r]=U(),{preferredVersionName:o}=n[e];return{preferredVersion:o?t.versions.find((e=>e.name===o)):null,savePreferredVersionName:(0,w.useCallback)((t=>{r.savePreferredVersion(e,t)}),[r])}}function W(){const e=(0,h._r)(),[t]=U();const n=Object.keys(e),r={};return n.forEach((n=>{r[n]=function(n){const r=e[n],{preferredVersionName:o}=t[n];return o?r.versions.find((e=>e.name===o)):null}(n)})),r}const H={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagsPostPage:"blog-tags-post-page",docPage:"doc-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docPages:"docs-wrapper",mdxPages:"mdx-wrapper"}},z=a("docusaurus.announcement.dismiss"),G=a("docusaurus.announcement.id"),q=()=>"true"===z.get(),J=e=>z.set(String(e)),X=(0,w.createContext)(null),K=({children:e})=>{const t=(()=>{const{announcementBar:e}=o(),{isClient:t}=(0,r.Z)(),[n,u]=(0,w.useState)((()=>!!t&&q()));(0,w.useEffect)((()=>{u(q())}),[]);const i=(0,w.useCallback)((()=>{J(!0),u(!0)}),[]);return(0,w.useEffect)((()=>{if(!e)return;const{id:t}=e;let n=G.get();"annoucement-bar"===n&&(n="announcement-bar");const r=t!==n;G.set(t),r&&J(!1),!r&&q()||u(!1)}),[]),(0,w.useMemo)((()=>({isClosed:n,close:i})),[n])})();return w.createElement(X.Provider,{value:t},e)},Q=()=>{const e=(0,w.useContext)(X);if(!e)throw new Error("useAnnouncementBar(): AnnouncementBar not found in React context: make sure to use the AnnouncementBarProvider on top of the tree");return e}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),r="/"===n?"/":(o=n,t?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(n,r)}},67023:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var u=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(u).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}}}]);