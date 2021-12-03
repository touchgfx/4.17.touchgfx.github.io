(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6290],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),g=a,m=c["".concat(s,".").concat(g)]||c[g]||p[g]||i;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){"use strict";var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children))}},29415:function(e,t,n){"use strict";var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=l},88678:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},2083:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},60204:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("i",null,this.props.children)}}t.Z=a},10630:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("i",null,this.props.children)}}t.Z=a},37793:function(e,t,n){"use strict";var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=l},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(67294),a=n(73727),i=n(11368),l=n(35096),o=n(84487);const s=(0,r.createContext)({collectLink:()=>{}});var u=n(25026),d=n(67023),p=Object.defineProperty,c=Object.defineProperties,g=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&k(e,n,t[n]);if(m)for(var n of m(t))f.call(t,n)&&k(e,n,t[n]);return e};var v=function(e){var t,n=e,{isNavLink:p,to:k,href:v,activeClassName:b,isActive:w,"data-noBrokenLinkCheck":N,autoAddBaseUrl:x=!0}=n,T=((e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:P}}=(0,i.Z)(),{withBaseUrl:E}=(0,u.C)(),Z=(0,r.useContext)(s),O=k||v,C=(0,l.Z)(O),A=null==O?void 0:O.replace("pathname://","");let I=void 0!==A?(G=A,x&&(e=>e.startsWith("/"))(G)?E(G):G):void 0;var G;I&&C&&(I=(0,d.applyTrailingSlash)(I,P));const _=(0,r.useRef)(!1),M=p?a.OL:a.rU,S=o.Z.canUseIntersectionObserver;let D;(0,r.useEffect)((()=>(!S&&C&&null!=I&&window.docusaurus.prefetch(I),()=>{S&&D&&D.disconnect()})),[I,S,C]);const j=null!==(t=null==I?void 0:I.startsWith("#"))&&void 0!==t&&t,B=!I||!C||j;return I&&C&&!j&&!N&&Z.collectLink(I),B?r.createElement("a",y(y({href:I},O&&!C&&{target:"_blank",rel:"noopener noreferrer"}),T)):r.createElement(M,y((L=y({},T),c(L,g({onMouseEnter:()=>{_.current||null==I||(window.docusaurus.preload(I),_.current=!0)},innerRef:e=>{var t,n;S&&e&&C&&(t=e,n=()=>{null!=I&&window.docusaurus.prefetch(I)},D=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.unobserve(t),D.disconnect(),n())}))})),D.observe(t))},to:I||""}))),p&&{isActive:w,activeClassName:b}));var L}},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return l}});var r=n(11368),a=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+l:l}(t,e,n,r)}}function l(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),r="/"===n?"/":(a=n,t?function(e){return e.endsWith("/")?e:`${e}/`}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));var a;return e.replace(n,r)}},67023:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},26712:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return b},contentTitle:function(){return w},metadata:function(){return N},toc:function(){return x},default:function(){return P}});var r=n(3905),a=n(44035),i=n(29415),l=n(10630),o=n(37793),s=n(2083),u=n(60204),d=n(31217),p=n(22425),c=Object.defineProperty,g=Object.defineProperties,m=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&y(e,n,t[n]);if(h)for(var n of h(t))k.call(t,n)&&y(e,n,t[n]);return e};const b={id:"gauge",title:"Gauge"},w=void 0,N={unversionedId:"development/ui-development/ui-components/miscellaneous/gauge",id:"development/ui-development/ui-components/miscellaneous/gauge",isDocsHomePage:!1,title:"Gauge",description:"A Gauge is a widget capable of drawing a needle and arc indicating a given value within a specified range.",source:"@site/docs/development/ui-development/ui-components/miscellaneous/gauge.mdx",sourceDirName:"development/ui-development/ui-components/miscellaneous",slug:"/development/ui-development/ui-components/miscellaneous/gauge",permalink:"/4.17/docs/development/ui-development/ui-components/miscellaneous/gauge",version:"current",frontMatter:{id:"gauge",title:"Gauge"},sidebar:"docs",previous:{title:"Dynamic Graph",permalink:"/4.17/docs/development/ui-development/ui-components/miscellaneous/dynamic-graph"},next:{title:"General UI Component Performance",permalink:"/4.17/docs/development/ui-development/ui-components/general-ui-component-performance"}},x=[{value:"Widget Group",id:"widget-group",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[]},{value:"Triggers",id:"triggers",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[]},{value:"User Code",id:"user-code",children:[]},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],T={toc:x};function P(e){var t,n=e,{components:c}=n,y=((e,t)=>{var n={};for(var r in e)f.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&h)for(var r of h(e))t.indexOf(r)<0&&k.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=v(v({},T),y),g(t,m({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"A Gauge is a widget capable of drawing a needle and arc indicating a given value within a specified range."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/gauge/widget-appearance.gif",mdxType:"Figure"},"Gauge running in the simulator"),(0,r.kt)("h2",v({},{id:"widget-group"}),"Widget Group"),(0,r.kt)("p",null,"The gauge can be found in the Miscellaneous widget group in TouchGFX Designer."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/gauge/widget-group-v4.17.png",mdxType:"Figure"},"Gauge in TouchGFX Designer"),(0,r.kt)("h2",v({},{id:"properties"}),"Properties"),(0,r.kt)("p",null,"The properties for a Gauge in TouchGFX Designer."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Group")),(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Property"},"Name")," of the widget. ",(0,r.kt)(u.Z,{mdxType:"InlineNote"},"Name is the unique identifier used in TouchGFX Designer and code"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Property"},"X")," and ",(0,r.kt)(l.Z,{mdxType:"Property"},"Y")," specify the top left corner of the widget relative to its parent.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"W")," and ",(0,r.kt)(l.Z,{mdxType:"Property"},"H")," specify the width and height of the widget.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,r.kt)("br",null),(0,r.kt)(u.Z,{mdxType:"InlineNote"},"Locking the widget also disables interacting with the widget through the screen."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"Visible")," specifies the visibility of the widget. ",(0,r.kt)(u.Z,{mdxType:"InlineNote"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Style")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Property"},"Style")," specifies a predefined setup of the widget, that sets select properties to predefined values.",(0,r.kt)("br",null),(0,r.kt)(u.Z,{mdxType:"InlineNote"},"These styles contain images that are free to use"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Background")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Property"},"Background Image")," specifies the image to be used as background.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"Background offset")," specifies the x- and y-axis offset of the selected background image.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Gauge")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Property"},"Rotation Center")," specifies the x- and y-axis point in the widget at which the needle and arc should rotate.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"Start and End Angle")," specify the start and end angle of the needle and arc.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"Value Range")," specifies the minimum and maximum integer values of the indicator.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"Initial Value")," specifies the initial value of the gauge.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Animation")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Property"},"Animate Movement")," specifies if animation of the needle and arc are enabled.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"Easing")," and ",(0,r.kt)(l.Z,{mdxType:"Property"},"Easing Option")," specify the easing equation used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Needle")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Property"},"Needle Image")," specifies the image to be used as background.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"Needle Rotation Center")," specifies the position in the needle image around which it will rotate.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"Moving Rendering Algorithm")," specifies the algorithm used to draw the needle image while moving to new value.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"Steady Rendering Algorithm")," specifies the algorithm used to draw the needle image while stationary.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Arc")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Property"},"Use Arc")," specifies whether or not to use an arc.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"Image/Color")," specifies either a color or an image to use as fill for the arc.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"Set Arc position"),"  specifies whether or not to override the default arc size and position.",(0,r.kt)("br",null),(0,r.kt)(u.Z,{mdxType:"InlineNote"},"By default arc is placed in 0, 0 and has the same size as the gauge itself. Overriding the default setting is useful when you want to use an image as painter for the arc, but the arc, and thus the image, is smaller than the size of the gauge. So instead of having a large image of the size of the gauge with a lot of transparent lines, the the image can be cut to the wanted size and place the arc at a specific position. The arc will still follow the same rotation center."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"Arc Position X and Y")," specifies the x- and y-axis position of the arc.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"Arc Width and Height")," specifies the size of the arc.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"Radius")," specifies the radius of the arc.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"Line Width")," specifies the line width of the arc. ",(0,r.kt)(u.Z,{mdxType:"InlineNote"},"If the value is 0, the arc is as large as the radius."),(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)(l.Z,{mdxType:"Property"},"Cap Style")," specifies line ending style of the arc. ",(0,r.kt)(u.Z,{mdxType:"InlineNote"},"If the line width is set to 0, the capstyle selected will have no effect."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"Arc on top of Needle")," specifies whether or not the arc is on top of the needle.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Appearance")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Property"},"Alpha")," specifies the transparency of the widget. ",(0,r.kt)(u.Z,{mdxType:"InlineNote"},"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixins")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Property"},"Draggable")," specifies if the widget is draggable at runtime.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"FadeAnimator")," specifies if the widget can animate changes to its ",(0,r.kt)(l.Z,{mdxType:"Property"},"Alpha")," value.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,r.kt)(l.Z,{mdxType:"Property"},"X")," and ",(0,r.kt)(l.Z,{mdxType:"Property"},"Y")," values.")))),(0,r.kt)("p",null,"By default arc is placed in 0, 0 and has the same size as the gauge itself. Overriding the default setting is useful when you want to use an image as painter for the arc, but the arc, and thus the image, is smaller than the size of the gauge. So instead of having a large image of the size of the gauge with a lot of transparent lines, the the image can be cut to the wanted size and place the arc at a specific position.\nThe arc will still follow the same rotation center."),(0,r.kt)("h2",v({},{id:"interactions"}),"Interactions"),(0,r.kt)("p",null,"The actions and triggers supported by a Gauge in TouchGFX Designer."),(0,r.kt)("h3",v({},{id:"actions"}),"Actions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Widget specific actions")),(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Set value")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Set the value of the Gauge.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Update value")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Update the value of the Gauge with a duration.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Standard widget actions")),(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Fade widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,r.kt)("h3",v({},{id:"triggers"}),"Triggers"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Trigger")),(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Gauge value set")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Will be triggered for both instant updates and intermediate steps during an update animation. Will only trigger when the new value differs from the current one.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Gauge value updated")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Will be triggered when an update animation is completed. If duration of the update is 0 the update will happen instantly but will still trigger this event.")))),(0,r.kt)("h2",v({},{id:"performance"}),"Performance"),(0,r.kt)("p",null,"A Gauge consists of an ",(0,r.kt)("a",v({parentName:"p"},{href:"../images/image"}),"Image"),", ",(0,r.kt)("a",v({parentName:"p"},{href:"../shapes/circle"}),"Circle")," and a ",(0,r.kt)("a",v({parentName:"p"},{href:"../images/texture-mapper"}),"Texture Mapper"),"."),(0,r.kt)("p",null,"The Circle and Texture Mapper components are MCU resource intensive components. Therefore, the Gauge is considered a demanding widget on most platforms."),(0,r.kt)("p",null,"For more details on drawing performance, read the ",(0,r.kt)("a",v({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,r.kt)("h2",v({},{id:"examples"}),"Examples"),(0,r.kt)("h3",v({},{id:"generated-code"}),"Generated Code"),(0,r.kt)("p",null,"In the generated code for the View base class we can see how the Designer sets up a Gauge."),(0,r.kt)(p.Z,{mdxType:"CodeHeader"},"MainViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nmainViewBase::mainViewBase()\n{\n    gauge.setBackground(touchgfx::Bitmap(BITMAP_BLUE_GAUGES_ORIGINAL_GAUGE_BACKGROUND_STYLE_01_ID));\n    gauge.setPosition(115, 11, 251, 251);\n    gauge.setCenter(125, 125);\n    gauge.setStartEndAngle(-85, 85);\n    gauge.setRange(0, 100);\n    gauge.setValue(0);\n    gauge.setEasingEquation(touchgfx::EasingEquations::elasticEaseOut);\n    gauge.setNeedle(BITMAP_BLUE_NEEDLES_ORIGINAL_GAUGE_NEEDLE_STYLE_01_ID, 11, 55);\n    gauge.setMovingNeedleRenderingAlgorithm(touchgfx::TextureMapper::BILINEAR_INTERPOLATION);\n    gauge.setSteadyNeedleRenderingAlgorithm(touchgfx::TextureMapper::BILINEAR_INTERPOLATION);\n    gauge.setArcVisible();\n    gaugePainter.setBitmap(touchgfx::Bitmap(BITMAP_BLUE_GAUGES_ORIGINAL_GAUGE_FILL_STYLE_01_ID));\n    gauge.getArc().setPainter(gaugePainter);\n    gauge.getArc().setRadius(94);\n    gauge.getArc().setLineWidth(14);\n    gauge.getArc().setCapPrecision(180);\n    gauge.setArcPosition(28, 30, 196, 88);\n\n    add(gauge);\n}\n')),(0,r.kt)(o.Z,{mdxType:"Tip"},"You can use these functions and the others available in the Gauge class in user code. Remember to force a redraw by calling ",(0,r.kt)(s.Z,{mdxType:"InlineCode"},"gauge.invalidate()")," if you change the appearance of the widget."),(0,r.kt)("h3",v({},{id:"user-code"}),"User Code"),(0,r.kt)("p",null,"To set the value of the Gauge, ",(0,r.kt)("inlineCode",{parentName:"p"},"setValue(int value)")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"updateValue(int value, uint16_t duration)")," can be used."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"setValue(int value)")," will immediately move the needle and arc to the new value with no animation."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"updateValue(int value, uint16_t duration)")," animates needle and arc to new value over the defined duration in ticks. If duration is equal to 0, the update will be done immediately. The animation used will be the one defined on the gauge using ",(0,r.kt)("inlineCode",{parentName:"p"},"setEasingEquation(EasingEquation easingEquation)")),(0,r.kt)(p.Z,{mdxType:"CodeHeader"},"MainView.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"#include <gui/main_screen/MainView.hpp>\n\nMainView::MainView()\n{\n    tickCounter = 0;\n}\n\nvoid MainView::handleTickEvent()\n{\n    tickCounter++;\n\n    // Change value every 120 tick.\n    if (tickCounter % 120 == 0)\n    {\n      // Insert data point\n      gauge.updateValue(/* new integer value */, 30); // animates needle and arc to new value with a duration of 30 ticks\n    }\n}\n")),(0,r.kt)("h3",v({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Examples"),(0,r.kt)("p",null,"To further explore the Gauge, try creating a new application within TouchGFX Designer with one of the following UI templates:"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/gauge-example-v4.17.png",mdxType:"Figure"},"Gauge Example UI template in TouchGFX Designer"),(0,r.kt)("h2",v({},{id:"api-reference"}),"API Reference"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(d.Z,{to:"../../../../api/classes/classtouchgfx_1_1_gauge",mdxType:"Link"},"API reference for the Gauge class"))))}P.isMDXComponent=!0}}]);