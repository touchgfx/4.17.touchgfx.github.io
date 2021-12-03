(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5041],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),g=o,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},22425:function(e,t,r){"use strict";var n=r(67294);class o extends n.Component{render(){return n.createElement("div",{class:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}t.Z=o},44035:function(e,t,r){"use strict";var n=r(67294),o=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,a=e.height,i=(0,o.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:a,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:a,src:i})),n.createElement("p",null,e.children))}},29415:function(e,t,r){"use strict";var n=r(67294),o=r(88678);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class i extends n.Component{render(){return n.createElement(o.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=i},88678:function(e,t,r){"use strict";var n=r(67294);class o extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{class:e},n.createElement("div",{class:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=o},2083:function(e,t,r){"use strict";var n=r(67294);class o extends n.Component{render(){return n.createElement("code",null,this.props.children)}}t.Z=o},60204:function(e,t,r){"use strict";var n=r(67294);class o extends n.Component{render(){return n.createElement("i",null,this.props.children)}}t.Z=o},10630:function(e,t,r){"use strict";var n=r(67294);class o extends n.Component{render(){return n.createElement("i",null,this.props.children)}}t.Z=o},37793:function(e,t,r){"use strict";var n=r(67294),o=r(88678);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends n.Component{render(){return n.createElement(o.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:a},this.props.children)}}t.Z=i},31217:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var n=r(67294),o=r(73727),a=r(11368),i=r(35096),s=r(84487);const l=(0,n.createContext)({collectLink:()=>{}});var c=r(25026),p=r(67023),d=Object.defineProperty,u=Object.defineProperties,g=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,k=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&k(e,r,t[r]);if(m)for(var r of m(t))f.call(t,r)&&k(e,r,t[r]);return e};var y=function(e){var t,r=e,{isNavLink:d,to:k,href:y,activeClassName:v,isActive:x,"data-noBrokenLinkCheck":w,autoAddBaseUrl:P=!0}=r,N=((e,t)=>{var r={};for(var n in e)h.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&m)for(var n of m(e))t.indexOf(n)<0&&f.call(e,n)&&(r[n]=e[n]);return r})(r,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:T}}=(0,a.Z)(),{withBaseUrl:Z}=(0,c.C)(),O=(0,n.useContext)(l),E=k||y,C=(0,i.Z)(E),I=null==E?void 0:E.replace("pathname://","");let B=void 0!==I?(S=I,P&&(e=>e.startsWith("/"))(S)?Z(S):S):void 0;var S;B&&C&&(B=(0,p.applyTrailingSlash)(B,T));const D=(0,n.useRef)(!1),j=d?o.OL:o.rU,_=s.Z.canUseIntersectionObserver;let M;(0,n.useEffect)((()=>(!_&&C&&null!=B&&window.docusaurus.prefetch(B),()=>{_&&M&&M.disconnect()})),[B,_,C]);const A=null!==(t=null==B?void 0:B.startsWith("#"))&&void 0!==t&&t,R=!B||!C||A;return B&&C&&!A&&!w&&O.collectLink(B),R?n.createElement("a",b(b({href:B},E&&!C&&{target:"_blank",rel:"noopener noreferrer"}),N)):n.createElement(j,b((G=b({},N),u(G,g({onMouseEnter:()=>{D.current||null==B||(window.docusaurus.preload(B),D.current=!0)},innerRef:e=>{var t,r;_&&e&&C&&(t=e,r=()=>{null!=B&&window.docusaurus.prefetch(B)},M=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.unobserve(t),M.disconnect(),r())}))})),M.observe(t))},to:B||""}))),d&&{isActive:x,activeClassName:v}));var G}},35096:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},25026:function(e,t,r){"use strict";r.d(t,{C:function(){return a},Z:function(){return i}});var n=r(11368),o=r(35096);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:a=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(n)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return a?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=a();return r(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[r]=e.split(/[#?]/),n="/"===r?"/":(o=r,t?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(r,n)}},67023:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=r(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(o).default}});var a=r(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(a).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},14020:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return v},contentTitle:function(){return x},metadata:function(){return w},toc:function(){return P},default:function(){return T}});var n=r(3905),o=r(44035),a=r(29415),i=r(37793),s=r(10630),l=r(2083),c=r(60204),p=r(31217),d=r(22425),u=Object.defineProperty,g=Object.defineProperties,m=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,b=(e,t,r)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&b(e,r,t[r]);if(h)for(var r of h(t))k.call(t,r)&&b(e,r,t[r]);return e};const v={id:"box-progress",title:"Box Progress"},x=void 0,w={unversionedId:"development/ui-development/ui-components/progress-indicators/box-progress",id:"development/ui-development/ui-components/progress-indicators/box-progress",isDocsHomePage:!1,title:"Box Progress",description:"A Box Progress shows the current progress by using a simple Box as the progress indicator on top of a background Image. The Color, the Alpha of the box and the Direction towards which the box will progress can be configured. It is possible to create a custom background image and change the different parameters of the progress indicator such as the position and the size to fit the custom background image.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/progress-indicators/box-progress.mdx",sourceDirName:"development/ui-development/ui-components/progress-indicators",slug:"/development/ui-development/ui-components/progress-indicators/box-progress",permalink:"/4.17/zh-CN/docs/development/ui-development/ui-components/progress-indicators/box-progress",version:"current",frontMatter:{id:"box-progress",title:"Box Progress"},sidebar:"docs",previous:{title:"Slide Menu",permalink:"/4.17/zh-CN/docs/development/ui-development/ui-components/containers/slide-menu"},next:{title:"Image Progress",permalink:"/4.17/zh-CN/docs/development/ui-development/ui-components/progress-indicators/image-progress"}},P=[{value:"Widget Group",id:"widget-group",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Interactions",id:"interactions",children:[{value:"\u52a8\u4f5c",id:"actions",children:[]},{value:"Triggers",id:"triggers",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[]},{value:"User Code",id:"user-code",children:[]},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],N={toc:P};function T(e){var t,r=e,{components:u}=r,b=((e,t)=>{var r={};for(var n in e)f.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&h)for(var n of h(e))t.indexOf(n)<0&&k.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=y(y({},N),b),g(t,m({components:u,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"A Box Progress shows the current progress by using a simple ",(0,n.kt)("a",y({parentName:"p"},{href:"../shapes/box"}),"Box")," as the progress indicator on top of a background ",(0,n.kt)("a",y({parentName:"p"},{href:"../images/image"}),"Image"),". The ",(0,n.kt)(s.Z,{mdxType:"Property"},"Color"),", the ",(0,n.kt)(s.Z,{mdxType:"Property"},"Alpha")," of the box and the ",(0,n.kt)(s.Z,{mdxType:"Property"},"Direction")," towards which the box will progress can be configured. It is possible to create a custom background image and change the different parameters of the progress indicator such as the position and the size to fit the custom background image."),(0,n.kt)(o.Z,{imageSource:"/img/development/ui-development/ui-components/box-progress/widget-appearance.gif",mdxType:"Figure"},"Box Progress running in the simulator"),(0,n.kt)("h2",y({},{id:"widget-group"}),"Widget Group"),(0,n.kt)("p",null,"The Box Progress can be found in the Progress Indicators widget group in TouchGFX Designer."),(0,n.kt)(o.Z,{imageSource:"/img/development/ui-development/ui-components/box-progress/widget-group-v4.17.png",mdxType:"Figure"},"Box Progress in TouchGFX Designer"),(0,n.kt)("h2",y({},{id:"properties"}),"Properties"),(0,n.kt)("p",null,"The properties for a Box Progress in TouchGFX Designer."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",y({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Property Group")),(0,n.kt)("th",y({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Name")),(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)(s.Z,{mdxType:"Property"},"Name")," of the widget. ",(0,n.kt)(c.Z,{mdxType:"InlineNote"},"Name is the unique identifier used in TouchGFX Designer and code."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Location")),(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)(s.Z,{mdxType:"Property"},"X")," and ",(0,n.kt)(s.Z,{mdxType:"Property"},"Y")," specify the top left corner of the widget relative to its parent.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(s.Z,{mdxType:"Property"},"W")," and ",(0,n.kt)(s.Z,{mdxType:"Property"},"H")," specify the width and height of the widget.",(0,n.kt)("br",null),(0,n.kt)(c.Z,{mdxType:"InlineNote"},"The size of a Box Progress is determined by the size of the selected background image."),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(s.Z,{mdxType:"Property"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,n.kt)("br",null),(0,n.kt)(c.Z,{mdxType:"InlineNote"},"Locking the widget also disables interacting with the widget through the screen."),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(s.Z,{mdxType:"Property"},"Visible")," specifies the visibility of the widget. ",(0,n.kt)("br",null)," ",(0,n.kt)(c.Z,{mdxType:"InlineNote"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Style")),(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)(s.Z,{mdxType:"Property"},"Style")," specifies a predefined setup of the widget, that sets select properties to predefined values.",(0,n.kt)("br",null),(0,n.kt)(c.Z,{mdxType:"InlineNote"},"These styles contain images that are free to use."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Image & Color")),(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)(s.Z,{mdxType:"Property"},"Background")," sets the background image.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(s.Z,{mdxType:"Property"},"Progress")," sets the color of the progress box.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Progress Position")),(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)(s.Z,{mdxType:"Property"},"X")," and ",(0,n.kt)(s.Z,{mdxType:"Property"},"Y")," coordinates specify the top left corner of the progress box relative to the position of the Progress Indicator.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(s.Z,{mdxType:"Property"},"W")," and ",(0,n.kt)(s.Z,{mdxType:"Property"},"H")," specify the width and height of the progress box.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Values")),(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)(s.Z,{mdxType:"Property"},"Range Min")," and ",(0,n.kt)(s.Z,{mdxType:"Property"},"Range Max")," specify the minimum and maximum integer values of the indicator.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(s.Z,{mdxType:"Property"},"Initial")," specifies the initial value of the progress indicator.",(0,n.kt)(s.Z,{mdxType:"Property"},"Steps Total")," specifies at what granularity the progress indicator reports new values. For instance, if the progress needs to be reported as 0%, 10%, 20%, ..., 100%, the total value should be set to 10.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(s.Z,{mdxType:"Property"},"Steps Min")," specifies the minimum steps the progress indicator shows.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Appearance")),(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)(s.Z,{mdxType:"Property"},"Direction")," specifies in which direction the progress indicator should progress.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(s.Z,{mdxType:"Property"},"Alpha")," specifies the transparency of the progress box. ",(0,n.kt)(c.Z,{mdxType:"InlineNote"},"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Mixins")),(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)(s.Z,{mdxType:"Property"},"Draggable")," specifies if the widget is draggable at runtime.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(s.Z,{mdxType:"Property"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(s.Z,{mdxType:"Property"},"FadeAnimator")," specifies if the widget can animate changes to its ",(0,n.kt)(s.Z,{mdxType:"Property"},"Alpha")," value.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(s.Z,{mdxType:"Property"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,n.kt)(s.Z,{mdxType:"Property"},"X")," and ",(0,n.kt)(s.Z,{mdxType:"Property"},"Y")," values.")))),(0,n.kt)("h2",y({},{id:"interactions"}),"Interactions"),(0,n.kt)("p",null,"The actions and triggers supported by the Box Progress are described in the following sections."),(0,n.kt)("h3",y({},{id:"actions"}),"\u52a8\u4f5c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",y({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Widget specific actions")),(0,n.kt)("th",y({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Set value")),(0,n.kt)("td",y({parentName:"tr"},{align:null}),"Set the value of the progress indicator.")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",y({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Standard widget actions")),(0,n.kt)("th",y({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Move widget")),(0,n.kt)("td",y({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Fade widget")),(0,n.kt)("td",y({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Hide widget")),(0,n.kt)("td",y({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",y({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Show widget")),(0,n.kt)("td",y({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,n.kt)("h3",y({},{id:"triggers"}),"Triggers"),(0,n.kt)("p",null,"The Box Progress does not emit any triggers."),(0,n.kt)("h2",y({},{id:"performance"}),"Performance"),(0,n.kt)("p",null,"A Box Progress consists of a Box and a background Image. Therefore, the Box Progress is dependent on image drawing and is considered a fast performing widget on most platforms."),(0,n.kt)("p",null,"For more details on image drawing performance, read the ",(0,n.kt)("a",y({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,n.kt)("h2",y({},{id:"examples"}),"Examples"),(0,n.kt)("h3",y({},{id:"generated-code"}),"Generated Code"),(0,n.kt)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a Box Progress."),(0,n.kt)(d.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",y({parentName:"pre"},{className:"language-cpp"}),"boxProgress.setXY(148, 126);\nboxProgress.setProgressIndicatorPosition(2, 2, 180, 16);\nboxProgress.setRange(0, 100);\nboxProgress.setDirection(touchgfx::AbstractDirectionProgress::RIGHT);\nboxProgress.setBackground(touchgfx::Bitmap(BITMAP_BLUE_PROGRESSINDICATORS_BG_MEDIUM_PROGRESS_INDICATOR_BG_SQUARE_0_DEGREES_ID));\nboxProgress.setColor(touchgfx::Color::getColorFrom24BitRGB(0, 151, 255));\nboxProgress.setValue(0);\n")),(0,n.kt)("h3",y({},{id:"user-code"}),"User Code"),(0,n.kt)("p",null,"The following example illustrates how to implement the ",(0,n.kt)("inlineCode",{parentName:"p"},"handleTickEvent()")," function to simulate progress. Running this code creates the application shown at the ",(0,n.kt)("a",y({parentName:"p"},{href:"box-progress"}),"beginning of this article"),"."),(0,n.kt)(d.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,n.kt)("pre",null,(0,n.kt)("code",y({parentName:"pre"},{className:"language-cpp"}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void handleTickEvent();\nprotected:\n    bool increase = true;\n};\n")),(0,n.kt)(d.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",y({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::handleTickEvent()\n{\n    int currentValue = boxProgress.getValue();\n    int16_t max;\n    int16_t min;\n    boxProgress.getRange(min, max);\n\n    if (currentValue == min)\n    {\n        increase = true;\n    }\n    else if (currentValue == max)\n    {\n        increase = false;\n    }\n\n    int nextValue = increase == true ? currentValue+1 : currentValue-1;\n\n    boxProgress.setValue(nextValue);\n}\n")),(0,n.kt)(i.Z,{mdxType:"Tip"},"You can use these functions and the others available in the BoxProgress class in user code. Remember to force a redraw by calling ",(0,n.kt)(l.Z,{mdxType:"InlineCode"},"boxProgress.invalidate()")," if you change the appearance of the widget."),(0,n.kt)("h3",y({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Examples"),(0,n.kt)("p",null,"To further explore the Box Progress, try creating a new application within TouchGFX Designer with the following UI template:"),(0,n.kt)(o.Z,{imageSource:"/img/development/ui-development/ui-templates/progress-indicator-example-v4.17.png",mdxType:"Figure"},"Progress Indicator Example UI template in TouchGFX Designer"),(0,n.kt)("h2",y({},{id:"api-reference"}),"API Reference"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,(0,n.kt)(p.Z,{to:"../../../../api/classes/classtouchgfx_1_1_box_progress",mdxType:"Link"},"API reference for the BoxProgress class"))))}T.isMDXComponent=!0}}]);