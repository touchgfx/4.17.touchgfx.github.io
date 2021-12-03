(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1251],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){"use strict";var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children))}},29415:function(e,t,n){"use strict";var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=o},88678:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},2083:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},60204:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("i",null,this.props.children)}}t.Z=a},10630:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("i",null,this.props.children)}}t.Z=a},37793:function(e,t,n){"use strict";var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=o},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(67294),a=n(73727),i=n(11368),o=n(35096),l=n(84487);const c=(0,r.createContext)({collectLink:()=>{}});var s=n(25026),d=n(67023),u=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&f(e,n,t[n]);if(h)for(var n of h(t))k.call(t,n)&&f(e,n,t[n]);return e};var y=function(e){var t,n=e,{isNavLink:u,to:f,href:y,activeClassName:w,isActive:b,"data-noBrokenLinkCheck":T,autoAddBaseUrl:C=!0}=n,N=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&h)for(var r of h(e))t.indexOf(r)<0&&k.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:x}}=(0,i.Z)(),{withBaseUrl:P}=(0,s.C)(),O=(0,r.useContext)(c),_=f||y,A=(0,o.Z)(_),Z=null==_?void 0:_.replace("pathname://","");let E=void 0!==Z?(S=Z,C&&(e=>e.startsWith("/"))(S)?P(S):S):void 0;var S;E&&A&&(E=(0,d.applyTrailingSlash)(E,x));const H=(0,r.useRef)(!1),D=u?a.OL:a.rU,M=l.Z.canUseIntersectionObserver;let I;(0,r.useEffect)((()=>(!M&&A&&null!=E&&window.docusaurus.prefetch(E),()=>{M&&I&&I.disconnect()})),[E,M,A]);const j=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,B=!E||!A||j;return E&&A&&!j&&!T&&O.collectLink(E),B?r.createElement("a",v(v({href:E},_&&!A&&{target:"_blank",rel:"noopener noreferrer"}),N)):r.createElement(D,v((V=v({},N),p(V,m({onMouseEnter:()=>{H.current||null==E||(window.docusaurus.preload(E),H.current=!0)},innerRef:e=>{var t,n;M&&e&&A&&(t=e,n=()=>{null!=E&&window.docusaurus.prefetch(E)},I=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(I.unobserve(t),I.disconnect(),n())}))})),I.observe(t))},to:E||""}))),u&&{isActive:b,activeClassName:w}));var V}},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(11368),a=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),r="/"===n?"/":(a=n,t?function(e){return e.endsWith("/")?e:`${e}/`}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));var a;return e.replace(n,r)}},67023:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},43812:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return w},contentTitle:function(){return b},metadata:function(){return T},toc:function(){return C},default:function(){return x}});var r=n(3905),a=n(44035),i=n(29415),o=n(10630),l=n(37793),c=n(2083),s=n(60204),d=n(31217),u=n(22425),p=Object.defineProperty,m=Object.defineProperties,h=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&v(e,n,t[n]);if(g)for(var n of g(t))f.call(t,n)&&v(e,n,t[n]);return e};const w={id:"analog-clock",title:"Analog Clock"},b=void 0,T={unversionedId:"development/ui-development/ui-components/miscellaneous/analog-clock",id:"development/ui-development/ui-components/miscellaneous/analog-clock",isDocsHomePage:!1,title:"Analog Clock",description:"An Analog Clock is a widget that enables the display of a classic analog watch, as opposed to the DigitalClock which displays time with text. The clock uses a background image as the clock face. The hour, minute and second hands are each using an image and rotate around a configurable center.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/miscellaneous/analog-clock.mdx",sourceDirName:"development/ui-development/ui-components/miscellaneous",slug:"/development/ui-development/ui-components/miscellaneous/analog-clock",permalink:"/4.17/zh-TW/docs/development/ui-development/ui-components/miscellaneous/analog-clock",version:"current",frontMatter:{id:"analog-clock",title:"Analog Clock"},sidebar:"docs",previous:{title:"Text Area",permalink:"/4.17/zh-TW/docs/development/ui-development/ui-components/miscellaneous/text-area"},next:{title:"Digital Clock",permalink:"/4.17/zh-TW/docs/development/ui-development/ui-components/miscellaneous/digital-clock"}},C=[{value:"Widget Group",id:"widget-group",children:[]},{value:"Properties",id:"properties",children:[{value:"Time",id:"time",children:[]},{value:"Clock Hands",id:"clock-hands",children:[]},{value:"Animation",id:"animation",children:[]}]},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[]},{value:"Triggers",id:"triggers",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[]},{value:"User Code",id:"user-code",children:[]},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],N={toc:C};function x(e){var t,n=e,{components:p}=n,v=((e,t)=>{var n={};for(var r in e)k.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&g)for(var r of g(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=y(y({},N),v),m(t,h({components:p,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"An Analog Clock is a widget that enables the display of a classic analog watch, as opposed to the ",(0,r.kt)("a",y({parentName:"p"},{href:"digital-clock"}),"DigitalClock")," which displays time with text. The clock uses a background image as the clock face. The hour, minute and second hands are each using an image and rotate around a configurable center."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/widget-appearance.gif",mdxType:"Figure"},"Analog Clock running in the simulator (sped up footage)"),(0,r.kt)("h2",y({},{id:"widget-group"}),"Widget Group"),(0,r.kt)("p",null,"The Analog Clock can be found in the Miscellaneous widget group in TouchGFX Designer."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/widget-group-v4.17.png",mdxType:"Figure"},"Analog Clock in TouchGFX Designer"),(0,r.kt)("h2",y({},{id:"properties"}),"Properties"),(0,r.kt)("p",null,"The properties for a Analog Clock in TouchGFX Designer."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Group")),(0,r.kt)("th",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Property"},"Name")," of the widget. ",(0,r.kt)(s.Z,{mdxType:"InlineNote"},"Name is the unique identifier used in TouchGFX Designer and code."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Property"},"X")," and ",(0,r.kt)(o.Z,{mdxType:"Property"},"Y")," specify the top left corner of the widget relative to its parent.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"W")," and ",(0,r.kt)(o.Z,{mdxType:"Property"},"H")," specify the width and height of the widget.",(0,r.kt)("br",null),(0,r.kt)(s.Z,{mdxType:"InlineNote"},"The size of a Analog Clock is taken from the size of the associated image and cannot be altered except by changing the image."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,r.kt)("br",null),(0,r.kt)(s.Z,{mdxType:"InlineNote"},"Locking the widget also disables interacting with the widget through the screen."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"Visible")," specifies the visibility of the widget. ",(0,r.kt)(s.Z,{mdxType:"InlineNote"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Style")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Property"},"Style")," specifies a predefined setup of the widget, that sets select properties to predefined values.",(0,r.kt)("br",null),(0,r.kt)(s.Z,{mdxType:"InlineNote"},"These styles contain images that are free to use"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Appearance")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Property"},"Image")," specifies the image to be used as background.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"Rotation Center X")," and ",(0,r.kt)(o.Z,{mdxType:"Property"},"Rotation Center Y")," specifies the point at which the clock hands should rotate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Time")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Property"},"Use Am/Pm")," specifies if time should be in 12h or 24h format.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"Initial Time")," specifies the initial time the clock shows.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Clock Hands")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Property"},"Clock Hands")," specifies which clock hands ",(0,r.kt)(s.Z,{mdxType:"InlineNote"},"(Second, Minute and Hour Hand)")," the Analog Clock should show and the order of the hands.",(0,r.kt)("br",null),"Each clock hand can set a ",(0,r.kt)(o.Z,{mdxType:"Property"},"Hand Image")," and their rotation point by setting ",(0,r.kt)(o.Z,{mdxType:"Property"},"Rotation Position X")," and ",(0,r.kt)(o.Z,{mdxType:"Property"},"Rotation Position Y"),".",(0,r.kt)("br",null),(0,r.kt)("br",null),"The Minute and Hour Hand have the option to use sweeping hand motion by setting ",(0,r.kt)(o.Z,{mdxType:"Property"},"Sweeping Movement"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Animations")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Property"},"Animate Clock Hand Movement")," specifies if animation of the clock hands are enabled.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"Duration")," specifies how long the amination is.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"Easing")," and ",(0,r.kt)(o.Z,{mdxType:"Property"},"Easing Option")," specify the easing equation used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixins")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Property"},"Draggable")," specifies if the widget is draggable at runtime.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,r.kt)(o.Z,{mdxType:"Property"},"X")," and ",(0,r.kt)(o.Z,{mdxType:"Property"},"Y")," values.")))),(0,r.kt)("h3",y({},{id:"time"}),"Time"),(0,r.kt)("p",null,"The Time property group allows the user to set the initial time of the clock widget and whether or not to use Am/Pm standard."),(0,r.kt)("p",null,"Choosing Am/Pm also results in a slight code generation change. Instead of using the following function in Analog Clock to initialize the time:",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"p"},"initializeTime24Hour(uint8_t hour, uint8_t minute, uint8_t second)")),(0,r.kt)("p",null,"The following function is used when using 12-hour notation:",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"p"},"initializeTime12Hour(uint8_t hour, uint8_t minute, uint8_t second, bool am)")),(0,r.kt)("p",null,"To update the time displayed by the clock, one of the following functions can be used.",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"p"},"setTime24Hour(uint8_t hour, uint8_t minute, uint8_t second)"),(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"p"},"setTime12Hour(uint8_t hour, uint8_t minute, uint8_t second, bool am)")),(0,r.kt)("h3",y({},{id:"clock-hands"}),"Clock Hands"),(0,r.kt)("p",null,"In the Clock Hands property group, the user can define which hands to use and their z-order. The hand defined first will be rendered above the others."),(0,r.kt)("h4",y({},{id:"hour-minute-and-second-hands"}),"Hour, Minute and Second Hands"),(0,r.kt)("p",null,"Each hand needs an image and a rotation position. The rotation position determines the point at which the defined hand image should rotate around itself."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/analog-clock-hands-props-v4.17.png",mdxType:"Figure"},"Clock hand properties"),(0,r.kt)("p",null,"The hour and minute hands have the ability to use ",(0,r.kt)(o.Z,{mdxType:"Property"},"Sweeping Movement"),". When this option is enabled the hand will no longer do an instantaneous jump from one position to another."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/analog-clock-no-sweeping-movement.gif",mdxType:"Figure"},"Sweeping movement disabled"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/analog-clock-with-sweeping-movement.gif",mdxType:"Figure"},"Sweeping movement enabled"),(0,r.kt)("h3",y({},{id:"animation"}),"Animation"),(0,r.kt)("p",null,"The animation section allows the user to define more advanced hand movement. However, if the hour and minute hand have ",(0,r.kt)(o.Z,{mdxType:"Property"},"Sweeping Movement")," enabled, they will not animate."),(0,r.kt)("p",null,"In the following example the animation duration is set to '30', easing is set to 'Bounce' with 'Out' as its easing option:"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/analog-clock-animation.gif",mdxType:"Figure"},"Example of a clock animation"),(0,r.kt)("h2",y({},{id:"interactions"}),"Interactions"),(0,r.kt)("p",null,"The actions and triggers supported by an Analog Clock are described in the following sections."),(0,r.kt)("h3",y({},{id:"actions"}),"Actions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Standard widget actions")),(0,r.kt)("th",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,r.kt)("h3",y({},{id:"triggers"}),"Triggers"),(0,r.kt)("p",null,"An Analog Clock does not emit any triggers."),(0,r.kt)("h2",y({},{id:"performance"}),"Performance"),(0,r.kt)("p",null,"An Analog Clock consists of an ",(0,r.kt)("a",y({parentName:"p"},{href:"../images/image"}),"Image")," and three ",(0,r.kt)("a",y({parentName:"p"},{href:"../images/texture-mapper"}),"Texture Mappers"),", which are MCU resource intensive components. Therefore, an Analog Clock is considered a demanding widget on most platforms."),(0,r.kt)("p",null,"For more details on drawing performance, read the ",(0,r.kt)("a",y({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,r.kt)("h2",y({},{id:"examples"}),"Examples"),(0,r.kt)("h3",y({},{id:"generated-code"}),"Generated Code"),(0,r.kt)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up an Analog Clock."),(0,r.kt)(u.Z,{mdxType:"CodeHeader"},"mainViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",y({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nmainViewBase::mainViewBase()\n{\n    analogClock.setXY(124, 15);\n    analogClock.setBackground(BITMAP_BLUE_CLOCKS_BACKGROUNDS_CLOCK_STANDARD_BACKGROUND_ID, 116, 116);\n    analogClock.setupMinuteHand(BITMAP_BLUE_CLOCKS_HANDS_CLOCK_STANDARD_MINUTE_HAND_ID, 7, 67);\n    analogClock.setMinuteHandSecondCorrection(false);\n    analogClock.setupHourHand(BITMAP_BLUE_CLOCKS_HANDS_CLOCK_STANDARD_HOUR_HAND_ID, 7, 52);\n    analogClock.setHourHandMinuteCorrection(false);\n    analogClock.setupSecondHand(BITMAP_BLUE_CLOCKS_HANDS_CLOCK_STANDARD_SECOND_HAND_ID, 3, 66);\n    analogClock.initializeTime24Hour(10, 10, 0);\n\n    add(analogClock);\n}\n\nvoid mainViewBase::setupScreen()\n{\n\n}\n')),(0,r.kt)(l.Z,{mdxType:"Tip"},"You can use these functions and the others available in the AnalogClock class in user code. Remember to force a redraw by calling ",(0,r.kt)(c.Z,{mdxType:"InlineCode"},"analogClock.invalidate()")," if you change the appearance of the widget."),(0,r.kt)("h3",y({},{id:"user-code"}),"User Code"),(0,r.kt)("p",null,"The following example shows how to set up clock movement:"),(0,r.kt)(u.Z,{mdxType:"CodeHeader"},"mainView.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",y({parentName:"pre"},{className:"language-cpp"}),"#ifndef MAINVIEW_HPP\n#define MAINVIEW_HPP\n\n#include <gui_generated/main_screen/mainViewBase.hpp>\n#include <gui/main_screen/mainPresenter.hpp>\n\nclass mainView : public mainViewBase\n{\npublic:\n    mainView();\n    virtual ~mainView() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void handleTickEvent();\n\nprotected:\n    int tickCounter;\n    int analogHours;\n    int analogMinutes;\n    int analogSeconds;\n};\n\n#endif // MAINVIEW_HPP\n\n")),(0,r.kt)(u.Z,{mdxType:"CodeHeader"},"mainView.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",y({parentName:"pre"},{className:"language-cpp"}),"#include <gui/main_screen/mainView.hpp>\n\nmainView::mainView()\n{\n}\n\nvoid mainView::setupScreen()\n{\n    mainViewBase::setupScreen();\n    analogHours = analogClock.getCurrentHour();\n    analogMinutes = analogClock.getCurrentMinute();\n    analogSeconds = analogClock.getCurrentSecond();\n}\n\nvoid mainView::tearDownScreen()\n{\n    mainViewBase::tearDownScreen();\n}\n\nvoid mainView::handleTickEvent()\n{\n    tickCounter++;\n\n    if (tickCounter % 60 == 0)\n    {\n        if (++analogSeconds >= 60)\n        {\n            analogSeconds = 0;\n            if (++analogMinutes >= 60)\n            {\n                analogMinutes = 0;\n                if (++analogHours >= 24)\n                {\n                    analogHours = 0;\n                }\n            }\n        }\n\n        // Update the clocks\n        analogClock.setTime24Hour(analogHours, analogMinutes, analogSeconds);\n    }\n}\n")),(0,r.kt)("h3",y({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Examples"),(0,r.kt)("p",null,"To further explore the Analog Clock, try creating a new application within TouchGFX Designer with the following Example:"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/clock-example-v4.17.png",mdxType:"Figure"},"Clock Example in TouchGFX Designer"),(0,r.kt)("h2",y({},{id:"api-reference"}),"API Reference"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(d.Z,{to:"../../../../api/classes/classtouchgfx_1_1_analog_clock",mdxType:"Link"},"API reference for the AnalogClock class"))))}x.isMDXComponent=!0}}]);