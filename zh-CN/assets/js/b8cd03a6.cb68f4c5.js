(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2351],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=s(n),u=i,m=h["".concat(c,".").concat(u)]||h[u]||d[u]||l;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var r=n(67294);class i extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=i},44035:function(e,t,n){"use strict";var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,l=e.height,a=(0,i.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:l,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:l,src:a})),r.createElement("p",null,e.children))}},29415:function(e,t,n){"use strict";var r=n(67294),i=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class a extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)}}t.Z=a},88678:function(e,t,n){"use strict";var r=n(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},2083:function(e,t,n){"use strict";var r=n(67294);class i extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=i},60204:function(e,t,n){"use strict";var r=n(67294);class i extends r.Component{render(){return r.createElement("i",null,this.props.children)}}t.Z=i},10630:function(e,t,n){"use strict";var r=n(67294);class i extends r.Component{render(){return r.createElement("i",null,this.props.children)}}t.Z=i},37793:function(e,t,n){"use strict";var r=n(67294),i=n(88678);const l=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class a extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)}}t.Z=a},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r=n(67294),i=n(73727),l=n(11368),a=n(35096),o=n(84487);const c=(0,r.createContext)({collectLink:()=>{}});var s=n(25026),p=n(67023),d=Object.defineProperty,h=Object.defineProperties,u=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&k(e,n,t[n]);if(m)for(var n of m(t))g.call(t,n)&&k(e,n,t[n]);return e};var w=function(e){var t,n=e,{isNavLink:d,to:k,href:w,activeClassName:b,isActive:v,"data-noBrokenLinkCheck":x,autoAddBaseUrl:S=!0}=n,C=((e,t)=>{var n={};for(var r in e)f.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:T}}=(0,l.Z)(),{withBaseUrl:I}=(0,s.C)(),N=(0,r.useContext)(c),W=k||w,P=(0,a.Z)(W),Z=null==W?void 0:W.replace("pathname://","");let E=void 0!==Z?(O=Z,S&&(e=>e.startsWith("/"))(O)?I(O):O):void 0;var O;E&&P&&(E=(0,p.applyTrailingSlash)(E,T));const D=(0,r.useRef)(!1),_=d?i.OL:i.rU,V=o.Z.canUseIntersectionObserver;let B;(0,r.useEffect)((()=>(!V&&P&&null!=E&&window.docusaurus.prefetch(E),()=>{V&&B&&B.disconnect()})),[E,V,P]);const j=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,L=!E||!P||j;return E&&P&&!j&&!x&&N.collectLink(E),L?r.createElement("a",y(y({href:E},W&&!P&&{target:"_blank",rel:"noopener noreferrer"}),C)):r.createElement(_,y((U=y({},C),h(U,u({onMouseEnter:()=>{D.current||null==E||(window.docusaurus.preload(E),D.current=!0)},innerRef:e=>{var t,n;V&&e&&P&&(t=e,n=()=>{null!=E&&window.docusaurus.prefetch(E)},B=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(B.unobserve(t),B.disconnect(),n())}))})),B.observe(t))},to:E||""}))),d&&{isActive:v,activeClassName:b}));var U}},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return l},Z:function(){return a}});var r=n(11368),i=n(35096);function l(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:l=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(r)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+a:a}(t,e,n,r)}}function a(e,t={}){const{withBaseUrl:n}=l();return n(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),r="/"===n?"/":(i=n,t?function(e){return e.endsWith("/")?e:`${e}/`}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));var i;return e.replace(n,r)}},67023:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var l=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(l).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1957:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return b},contentTitle:function(){return v},metadata:function(){return x},toc:function(){return S},default:function(){return T}});var r=n(3905),i=n(44035),l=n(29415),a=n(10630),o=n(37793),c=n(2083),s=n(60204),p=n(31217),d=n(22425),h=Object.defineProperty,u=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,w=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&y(e,n,t[n]);if(f)for(var n of f(t))k.call(t,n)&&y(e,n,t[n]);return e};const b={id:"scroll-wheel",title:"Scroll Wheel"},v=void 0,x={unversionedId:"development/ui-development/ui-components/containers/scroll-wheel",id:"development/ui-development/ui-components/containers/scroll-wheel",isDocsHomePage:!1,title:"Scroll Wheel",description:"The Scroll Wheel is a scrollable menu containing multiple items, which are dynamically updated when scrolling through the items in the wheel, and the item which is selected is moved into focus. Enabling the code to react to interactions with the Scroll Wheel, different callbacks can be invoked based on the interaction with the items in the wheel.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/containers/scroll-wheel.mdx",sourceDirName:"development/ui-development/ui-components/containers",slug:"/development/ui-development/ui-components/containers/scroll-wheel",permalink:"/4.17/zh-CN/docs/development/ui-development/ui-components/containers/scroll-wheel",version:"current",frontMatter:{id:"scroll-wheel",title:"Scroll Wheel"},sidebar:"docs",previous:{title:"Scroll List",permalink:"/4.17/zh-CN/docs/development/ui-development/ui-components/containers/scroll-list"},next:{title:"Slide Menu",permalink:"/4.17/zh-CN/docs/development/ui-development/ui-components/containers/slide-menu"}},S=[{value:"Widget Group",id:"widget-group",children:[]},{value:"Properties",id:"properties",children:[{value:"Item Templates",id:"item-templates",children:[]}]},{value:"Interactions",id:"interactions",children:[{value:"\u52a8\u4f5c",id:"actions",children:[]},{value:"Triggers",id:"triggers",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[]},{value:"User Code",id:"user-code",children:[]},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],C={toc:S};function T(e){var t,n=e,{components:h}=n,y=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&f)for(var r of f(e))t.indexOf(r)<0&&k.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=w(w({},C),y),u(t,m({components:h,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"The Scroll Wheel is a scrollable menu containing multiple items, which are dynamically updated when scrolling through the items in the wheel, and the item which is selected is moved into focus. Enabling the code to react to interactions with the Scroll Wheel, different callbacks can be invoked based on the interaction with the items in the wheel."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-components/scroll-wheel/widget-appearance.gif",mdxType:"Figure"},"Scroll Wheel running in the simulator"),(0,r.kt)("h2",w({},{id:"widget-group"}),"Widget Group"),(0,r.kt)("p",null,"The Scroll Wheel can be found in the Containers widget group in TouchGFX Designer."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-components/scroll-wheel/widget-group-v4.17.png",mdxType:"Figure"},"Scroll Wheel in TouchGFX Designer"),(0,r.kt)("h2",w({},{id:"properties"}),"Properties"),(0,r.kt)("p",null,"The properties for a Scroll Wheel in TouchGFX Designer."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",w({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Group")),(0,r.kt)("th",w({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",w({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",w({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Property"},"Name")," of the widget. ",(0,r.kt)(s.Z,{mdxType:"InlineNote"},"Name is the unique identifier used in TouchGFX Designer and code."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",w({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Type")),(0,r.kt)("td",w({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Property"},"Type")," specifies whether the Scroll Wheel is oriented vertically or horizontally.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",w({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",w({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Property"},"X")," and ",(0,r.kt)(a.Z,{mdxType:"Property"},"Y")," specify the top left corner of the widget relative to its parent.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(a.Z,{mdxType:"Property"},"W")," and ",(0,r.kt)(a.Z,{mdxType:"Property"},"H")," specify the width and height of the widget.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(a.Z,{mdxType:"Property"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,r.kt)("br",null),(0,r.kt)(s.Z,{mdxType:"InlineNote"},"Locking the widget also disables interacting with the widget through the screen."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(a.Z,{mdxType:"Property"},"Visible")," specifies the visibility of the widget.",(0,r.kt)("br",null),(0,r.kt)(s.Z,{mdxType:"InlineNote"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",w({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Item Template")),(0,r.kt)("td",w({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Property"},"Item Template")," specifies which CustomContainer to use as template.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(a.Z,{mdxType:"Property"},"Number of Items")," specifies the number of items present in the Scroll Wheel.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(a.Z,{mdxType:"Property"},"Initial Selected Item")," specifies which item is selected first.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(a.Z,{mdxType:"Property"},"Use Selected Style Template")," specifies whether to use a separate template for the selected item.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(a.Z,{mdxType:"Property"},"Selected Style Template")," specifies which CustomContainer to use as selected template.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",w({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"List Appearance")),(0,r.kt)("td",w({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Property"},"Circular")," specifies if the items in the Scroll Wheel will loop when reaching the end.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(a.Z,{mdxType:"Property"},"Selected Item Offset")," specifies the location of the selected item.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(a.Z,{mdxType:"Property"},"Item Margin")," specifies the spacing between items.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(a.Z,{mdxType:"Property"},"Extra Size Before")," and ",(0,r.kt)(a.Z,{mdxType:"Property"},"Extra Size After")," specify the size of the area in which ",(0,r.kt)(a.Z,{mdxType:"Property"},"Selected Style Template")," is shown.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(a.Z,{mdxType:"Property"},"Margin Before")," and ",(0,r.kt)(a.Z,{mdxType:"Property"},"Margin After")," specify the size of the margin before and after the area in which ",(0,r.kt)(a.Z,{mdxType:"Property"},"Selected Style Template")," is shown.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",w({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Animation")),(0,r.kt)("td",w({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Property"},"Easing")," and ",(0,r.kt)(a.Z,{mdxType:"Property"},"Easing Option")," specify which easing equation to use for animations.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(a.Z,{mdxType:"Property"},"Swipe Acc.")," and ",(0,r.kt)(a.Z,{mdxType:"Property"},"Drag Acc.")," specify the acceleration when scrolling.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",w({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixins")),(0,r.kt)("td",w({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{mdxType:"Property"},"Draggable")," specifies if the widget is draggable at runtime.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(a.Z,{mdxType:"Property"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(a.Z,{mdxType:"Property"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,r.kt)(a.Z,{mdxType:"Property"},"X")," and ",(0,r.kt)(a.Z,{mdxType:"Property"},"Y")," values.")))),(0,r.kt)("h3",w({},{id:"item-templates"}),"Item Templates"),(0,r.kt)("p",null,"The items in a Scroll List are based on a concept called ",(0,r.kt)(a.Z,{mdxType:"Property"},"Item Template")," which is a ",(0,r.kt)("a",w({parentName:"p"},{href:"../../touchgfx-engine-features/custom-containers"}),"CustomContainer")," that serves as a base for the graphical elements for the items in the Scroll Wheel. To highlight the selected item, the Scroll Wheel has the option to select an Item Template called ",(0,r.kt)(a.Z,{mdxType:"Property"},"Selected Style Template"),", which is only used for the selected item. Before creating a Scroll Wheel, a CustomContainer for the Item Template, along with a ",(0,r.kt)(a.Z,{mdxType:"Property"},"Selected Style Template")," if enabled, should be created."),(0,r.kt)("p",null,"After the Scroll Wheel is created, the CustomContainer can be selected under the property ",(0,r.kt)(a.Z,{mdxType:"Property"},"Item Template"),". When selecting the Custom Container for the ",(0,r.kt)(a.Z,{mdxType:"Property"},"Item Template"),", the Scroll Wheel resizes to fit with the size property that is not in the scrollable direction (",(0,r.kt)(s.Z,{mdxType:"InlineNote"},"width for vertical orientation and height for horizontal orientation"),") of the selected Custom Container. Changing the other size property (",(0,r.kt)(s.Z,{mdxType:"InlineNote"},"height for vertical orientation and width for horizontal orientation"),") determines the number of items visible."),(0,r.kt)("h2",w({},{id:"interactions"}),"Interactions"),(0,r.kt)("p",null,"The actions and triggers supported by the Scroll Wheel are described in the following sections."),(0,r.kt)("h3",w({},{id:"actions"}),"\u52a8\u4f5c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",w({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Standard widget action")),(0,r.kt)("th",w({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",w({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",w({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",w({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",w({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,r.kt)("h3",w({},{id:"triggers"}),"Triggers"),(0,r.kt)("p",null,"A Scroll Wheel does not emit any triggers."),(0,r.kt)("h2",w({},{id:"performance"}),"Performance"),(0,r.kt)("p",null,"A Scroll Wheel is a ",(0,r.kt)("a",w({parentName:"p"},{href:"container"}),"Container")," type, and does not per default appear in the draw chain. Therefore, the performance is wholly dependent on the drawing performance of the children."),(0,r.kt)("p",null,"For more details on drawing performance, read the ",(0,r.kt)("a",w({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,r.kt)("h2",w({},{id:"examples"}),"Examples"),(0,r.kt)("h3",w({},{id:"generated-code"}),"Generated Code"),(0,r.kt)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a Scroll Wheel."),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",w({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nScreen1ViewBase::Screen1ViewBase() :\n    updateItemCallback(this, &Screen1ViewBase::updateItemCallbackHandler)\n{\n    scrollWheel.setPosition(140, 10, 200, 252);\n    scrollWheel.setHorizontal(false);\n    scrollWheel.setCircular(false);\n    scrollWheel.setEasingEquation(touchgfx::EasingEquations::backEaseIn);\n    scrollWheel.setSwipeAcceleration(10);\n    scrollWheel.setDragAcceleration(10);\n    scrollWheel.setNumberOfItems(60);\n    scrollWheel.setSelectedItemOffset(100);\n    scrollWheel.setSelectedItemExtraSize(0, 0);\n    scrollWheel.setSelectedItemMargin(0, 0);\n    scrollWheel.setDrawableSize(50, 3);\n    scrollWheel.setDrawables(scrollWheelListItems, updateItemCallback,\n                              scrollWheelSelectedListItems, updateItemCallback);\n    scrollWheel.animateToItem(0, 0);\n\n    add(scrollWheel);\n}\n\nvoid Screen1ViewBase::setupScreen()\n{\n    scrollWheel.initialize();\n    for (int i = 0; i < scrollWheelListItems.getNumberOfDrawables(); i++)\n    {\n        scrollWheelListItems[i].initialize();\n    }\n    for (int i = 0; i < scrollWheelSelectedListItems.getNumberOfDrawables(); i++)\n    {\n        scrollWheelSelectedListItems[i].initialize();\n    }\n}\n\nvoid Screen1ViewBase::updateItemCallbackHandler(touchgfx::DrawableListItemsInterface* items, int16_t containerIndex, int16_t itemIndex)\n{\n    if (items == &scrollWheelListItems)\n    {\n        touchgfx::Drawable* d = items->getDrawable(containerIndex);\n        TextContainer* cc = (TextContainer*)d;\n        scrollWheelUpdateItem(*cc, itemIndex);\n    }\n    else if (items == &scrollWheelSelectedListItems)\n    {\n        touchgfx::Drawable* d = items->getDrawable(containerIndex);\n        TextCenterContainer* cc = (TextCenterContainer*)d;\n        scrollWheelUpdateCenterItem(*cc, itemIndex);\n    }\n}\n')),(0,r.kt)(o.Z,{mdxType:"Tip"},"You can use these functions and the others available in the ScrollWheel class in user code. Remember to force a redraw by calling ",(0,r.kt)(c.Z,{mdxType:"InlineCode"},"scrollWheel.invalidate()")," if you change the appearance of the widget."),(0,r.kt)("h3",w({},{id:"user-code"}),"User Code"),(0,r.kt)("p",null,"After the graphical elements for the Scroll Wheel and its properties are set, user code can be written to update the items in the Scroll Wheel. The header file for the Screen1ViewBase class which is generated by the TouchGFX Designer is shown below:"),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",w({parentName:"pre"},{className:"language-cpp",metastring:"{8-11,13-16}","{8-11,13-16}":!0}),"class Screen1ViewBase : public touchgfx::View\n{\npublic:\n    Screen1ViewBase();\n    virtual ~Screen1ViewBase() {}\n    virtual void setupScreen();\n\n    virtual void scrollWheel1UpdateItem(CustomContainer1& item, int16_t itemIndex)\n    {\n        // Override and implement this function in Screen1\n    }\n\n    virtual void scrollWheel1UpdateCenterItem(CustomContainer2& item, int16_t itemIndex)\n    {\n        // Override and implement this function in Screen1\n    }\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(Application::getInstance());\n    }\n\n    touchgfx::BoxWithBorder boxWithBorder1;\n    touchgfx::ScrollWheelWithSelectionStyle scrollWheel1;\n    touchgfx::DrawableListItems<CustomContainer1, 6> scrollWheel1ListItems;\n    touchgfx::DrawableListItems<CustomContainer2, 2> scrollWheel1SelectedListItems;\n\nprivate:\n    void updateItemCallbackHandler(DrawableListItemsInterface* items, int16_t containerIndex, int16_t itemIndex);\n    touchgfx::Callback<Screen1ViewBase, DrawableListItemsInterface*, int16_t, int16_t> updateItemCallback;\n\n};\n")),(0,r.kt)("p",null,"When the TouchGFX Designer generates the code for Scroll Wheel, the functions ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollWheel1UpdateItem")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollWheel1UpdateCenterItem"),", highlighted above, is created for the user to override and update the items in the Scroll Wheel."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateItem")," function is always generated for a Scroll Wheel and can be implemented to updated the contained items, while the ",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateCenterItem")," function updates the item based on the ",(0,r.kt)(a.Z,{mdxType:"Property"},"Selected Style Template")," and is therefore only generated if the usage of a ",(0,r.kt)(a.Z,{mdxType:"Property"},"Selected Style Template")," is selected. Other than updating different items, the two functions contain the same parameters used for updating the items in the the Scroll Wheel."),(0,r.kt)("p",null,"The parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"itemIndex")," contains the index value of the item, which is used to identify which item is being updated. The parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"item")," is a reference to a visible item in the Scroll Wheel. Updating the appearance for the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"item")," results in an update to the render for a visible item in the Scroll Wheel."),(0,r.kt)("p",null,"An example implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollWheel1UpdateItem")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollWheel1UpdateCenterItem")," in the user code files ",(0,r.kt)("inlineCode",{parentName:"p"},"Screen1View.hpp")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Screen1View.cpp")," is shown below:"),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",w({parentName:"pre"},{className:"language-cpp"}),"#ifndef SCREEN1_VIEW_HPP\n#define SCREEN1_VIEW_HPP\n\n#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <gui/screen1_screen/Screen1Presenter.hpp>\n\nclass Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n\n    virtual void scrollWheel1UpdateItem(CustomContainer1& item, int16_t itemIndex);\n    virtual void scrollWheel1UpdateCenterItem(CustomContainer2& item, int16_t itemIndex);\nprotected:\n};\n\n#endif // SCREEN1_VIEW_HPP\n")),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",w({parentName:"pre"},{className:"language-cpp"}),"#include <gui/screen1_screen/Screen1View.hpp>\n\nScreen1View::Screen1View()\n{\n\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n}\n\nvoid Screen1View::tearDownScreen()\n{\n    Screen1ViewBase::tearDownScreen();\n}\n\nvoid Screen1View::scrollWheel1UpdateItem(CustomContainer1& item, int16_t itemIndex)\n{\n    item.setIndex(itemIndex);\n}\n\nvoid Screen1View::scrollWheel1UpdateCenterItem(CustomContainer2& item, int16_t itemIndex)\n{\n    item.setIndex(itemIndex);\n}\n")),(0,r.kt)("p",null,"In the header file ",(0,r.kt)("inlineCode",{parentName:"p"},"Screen1View.hpp"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollWheel1UpdateItem")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"scrollWheel1UpdateCenterItem")," functions are overridden and are then implemented in ",(0,r.kt)("inlineCode",{parentName:"p"},"Screen1View.cpp"),"."),(0,r.kt)("p",null,"The goal of this example is to update the text in the Item Template with the index value of the items which are visible, like the example shown ",(0,r.kt)("a",w({parentName:"p"},{href:"scroll-wheel"}),"in the beginning of this section"),". Since both the Item Template and the Selected Style Template are based on CustomContainer, a ",(0,r.kt)("inlineCode",{parentName:"p"},"setIndex")," function is created for both CustomContainers. The ",(0,r.kt)("inlineCode",{parentName:"p"},"setIndex")," function is able to take the ",(0,r.kt)("inlineCode",{parentName:"p"},"itemIndex")," parameter and update the text in the Item Template and the Selected Style Template. Calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"setIndex")," for an item results in an update to the appearance of the visible items thereby showing their index value."),(0,r.kt)("h3",w({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Examples"),(0,r.kt)("p",null,"To further explore the Scroll Wheel, try creating a new application within TouchGFX Designer with one of the following UI templates:"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-templates/scroll-wheel-and-list-example-v4.17.png",mdxType:"Figure"},"Scroll Wheel and List Example UI Template in TouchGFX Designer"),(0,r.kt)("h2",w({},{id:"api-reference"}),"API Reference"),(0,r.kt)(l.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(p.Z,{to:"../../../../api/classes/classtouchgfx_1_1_scroll_wheel",mdxType:"Link"},"API reference for the ScrollWheel class"))))}T.isMDXComponent=!0}}]);