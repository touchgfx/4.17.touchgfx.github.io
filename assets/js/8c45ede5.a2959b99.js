(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9485],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var r=n(67294);class i extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=i},44035:function(e,t,n){"use strict";var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,o=(0,i.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:a,src:o})),r.createElement("p",null,e.children))}},29415:function(e,t,n){"use strict";var r=n(67294),i=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=o},88678:function(e,t,n){"use strict";var r=n(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},2083:function(e,t,n){"use strict";var r=n(67294);class i extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=i},60204:function(e,t,n){"use strict";var r=n(67294);class i extends r.Component{render(){return r.createElement("i",null,this.props.children)}}t.Z=i},10630:function(e,t,n){"use strict";var r=n(67294);class i extends r.Component{render(){return r.createElement("i",null,this.props.children)}}t.Z=i},37793:function(e,t,n){"use strict";var r=n(67294),i=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:a},this.props.children)}}t.Z=o},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(67294),i=n(73727),a=n(11368),o=n(35096),l=n(84487);const s=(0,r.createContext)({collectLink:()=>{}});var c=n(25026),u=n(67023),d=Object.defineProperty,p=Object.defineProperties,h=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&k(e,n,t[n]);if(m)for(var n of m(t))f.call(t,n)&&k(e,n,t[n]);return e};var y=function(e){var t,n=e,{isNavLink:d,to:k,href:y,activeClassName:v,isActive:w,"data-noBrokenLinkCheck":N,autoAddBaseUrl:x=!0}=n,T=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:P}}=(0,a.Z)(),{withBaseUrl:I}=(0,c.C)(),O=(0,r.useContext)(s),B=k||y,E=(0,o.Z)(B),Z=null==B?void 0:B.replace("pathname://","");let _=void 0!==Z?(W=Z,x&&(e=>e.startsWith("/"))(W)?I(W):W):void 0;var W;_&&E&&(_=(0,u.applyTrailingSlash)(_,P));const C=(0,r.useRef)(!1),D=d?i.OL:i.rU,j=l.Z.canUseIntersectionObserver;let S;(0,r.useEffect)((()=>(!j&&E&&null!=_&&window.docusaurus.prefetch(_),()=>{j&&S&&S.disconnect()})),[_,j,E]);const A=null!==(t=null==_?void 0:_.startsWith("#"))&&void 0!==t&&t,M=!_||!E||A;return _&&E&&!A&&!N&&O.collectLink(_),M?r.createElement("a",b(b({href:_},B&&!E&&{target:"_blank",rel:"noopener noreferrer"}),T)):r.createElement(D,b((L=b({},T),p(L,h({onMouseEnter:()=>{C.current||null==_||(window.docusaurus.preload(_),C.current=!0)},innerRef:e=>{var t,n;j&&e&&E&&(t=e,n=()=>{null!=_&&window.docusaurus.prefetch(_)},S=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.unobserve(t),S.disconnect(),n())}))})),S.observe(t))},to:_||""}))),d&&{isActive:w,activeClassName:v}));var L}},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return o}});var r=n(11368),i=n(35096);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),r="/"===n?"/":(i=n,t?function(e){return e.endsWith("/")?e:`${e}/`}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));var i;return e.replace(n,r)}},67023:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},29251:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return v},contentTitle:function(){return w},metadata:function(){return N},toc:function(){return x},default:function(){return P}});var r=n(3905),i=n(44035),a=n(29415),o=n(10630),l=n(37793),s=n(2083),c=n(60204),u=n(31217),d=n(22425),p=Object.defineProperty,h=Object.defineProperties,m=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&b(e,n,t[n]);if(g)for(var n of g(t))k.call(t,n)&&b(e,n,t[n]);return e};const v={id:"button-with-icon",title:"Button With Icon"},w=void 0,N={unversionedId:"development/ui-development/ui-components/buttons/button-with-icon",id:"development/ui-development/ui-components/buttons/button-with-icon",isDocsHomePage:!1,title:"Button With Icon",description:"A Button With Icon in TouchGFX is a widget that is aware of touch events and can send a callback when the Button With Icon is released. Each state, pressed and released, is associated with an image and an icon.",source:"@site/docs/development/ui-development/ui-components/buttons/button-with-icon.mdx",sourceDirName:"development/ui-development/ui-components/buttons",slug:"/development/ui-development/ui-components/buttons/button-with-icon",permalink:"/4.17/docs/development/ui-development/ui-components/buttons/button-with-icon",version:"current",frontMatter:{id:"button-with-icon",title:"Button With Icon"},sidebar:"docs",previous:{title:"Button With Label",permalink:"/4.17/docs/development/ui-development/ui-components/buttons/button-with-label"},next:{title:"Toggle Button",permalink:"/4.17/docs/development/ui-development/ui-components/buttons/toggle-button"}},x=[{value:"Widget Group",id:"widget-group",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[]},{value:"Triggers",id:"triggers",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[]},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],T={toc:x};function P(e){var t,n=e,{components:p}=n,b=((e,t)=>{var n={};for(var r in e)f.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&g)for(var r of g(e))t.indexOf(r)<0&&k.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=y(y({},T),b),h(t,m({components:p,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"A Button With Icon in TouchGFX is a widget that is aware of touch events and can send a callback when the Button With Icon is released. Each state, pressed and released, is associated with an image and an icon."),(0,r.kt)("p",null,"The Button With Icon can be replicated with the ",(0,r.kt)("a",y({parentName:"p"},{href:"flex-button"}),"Flex Button"),". A Flex Button is a more configurable button that takes up a bit more RAM in exchange for flexibility."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-components/button-with-icon/widget-appearance.png",mdxType:"Figure"},"Button With Icon running in the simulator"),(0,r.kt)("h2",y({},{id:"widget-group"}),"Widget Group"),(0,r.kt)("p",null,"The Button With Icon can be found in the Buttons widget group in TouchGFX Designer."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-components/button-with-icon/widget-group-v4.17.png",mdxType:"Figure"},"Button With Icon in TouchGFX Designer"),(0,r.kt)("h2",y({},{id:"properties"}),"Properties"),(0,r.kt)("p",null,"The properties for a Button With Icon in TouchGFX Designer."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Group")),(0,r.kt)("th",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Property"},"Name")," of the widget. ",(0,r.kt)(c.Z,{mdxType:"InlineNote"},"Name is the unique identifier used in TouchGFX Designer and code"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Property"},"X")," and ",(0,r.kt)(o.Z,{mdxType:"Property"},"Y")," specify the top left corner of the widget relative to its parent.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"W")," and ",(0,r.kt)(o.Z,{mdxType:"Property"},"H")," specify the width and height of the widget.",(0,r.kt)("br",null),(0,r.kt)(c.Z,{mdxType:"InlineNote"},"The size of a Button With Icon is determined by the size of the selected images."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,r.kt)("br",null),(0,r.kt)(c.Z,{mdxType:"InlineNote"},"Locking the widget also disables interacting with the widget through the screen."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"Visible")," specifies the visibility of the widget.",(0,r.kt)("br",null),(0,r.kt)(c.Z,{mdxType:"InlineNote"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Image")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Property"},"Button Style")," specifies a predefined setup of the widget, that sets select properties to predefined values.",(0,r.kt)("br",null),(0,r.kt)(c.Z,{mdxType:"InlineNote"},"These styles contain images that are free to use"),".",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"Released Image")," and ",(0,r.kt)(o.Z,{mdxType:"Property"},"Pressed Image")," specify the images assigned to the pressed and released states from the Designer skin library or the Project folder.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Icon")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Property"},"Icon Style")," specifies a predefined setup of the widget, that sets select properties to predefined values.",(0,r.kt)("br",null),(0,r.kt)(c.Z,{mdxType:"InlineNote"},"These styles contain images that are free to use"),".",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"Released Icon")," and ",(0,r.kt)(o.Z,{mdxType:"Property"},"Pressed Icon")," specify the images assigned to the pressed and released states of the icon from the Designer skin library or the Project folder.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Icon Location")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Property"},"X")," and ",(0,r.kt)(o.Z,{mdxType:"Property"},"Y")," specify the top left corner of the icon relative to its parent.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"W")," and ",(0,r.kt)(o.Z,{mdxType:"Property"},"H")," specify the width and height of the icon, based on the selected image.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Appearance")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Property"},"Alpha")," specifies the transparency of the widget.",(0,r.kt)("br",null),(0,r.kt)(c.Z,{mdxType:"InlineNote"},"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixins")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Property"},"Draggable")," specifies if the widget is draggable at runtime.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"FadeAnimator")," specifies if the widget can animate changes to its ",(0,r.kt)(o.Z,{mdxType:"Property"},"Alpha")," value.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,r.kt)(o.Z,{mdxType:"Property"},"X")," and ",(0,r.kt)(o.Z,{mdxType:"Property"},"Y")," values.")))),(0,r.kt)("h2",y({},{id:"interactions"}),"Interactions"),(0,r.kt)("p",null,"The actions and triggers supported by the Button With Icon are described in the following sections."),(0,r.kt)("h3",y({},{id:"actions"}),"Actions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Standard widget action")),(0,r.kt)("th",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Fade widget")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,r.kt)("h3",y({},{id:"triggers"}),"Triggers"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Trigger")),(0,r.kt)("th",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Button is clicked")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),"A Button With Icon has been clicked.")))),(0,r.kt)("h2",y({},{id:"performance"}),"Performance"),(0,r.kt)("p",null,"The Button With Icon is composed of four images and is dependent on image drawing. Therefore, a Button With Icon is considered a fast performing widget on most platforms."),(0,r.kt)("p",null,"For more details on image drawing performance, read the ",(0,r.kt)("a",y({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,r.kt)("h2",y({},{id:"examples"}),"Examples"),(0,r.kt)("h3",y({},{id:"generated-code"}),"Generated Code"),(0,r.kt)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a Button With Icon."),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",y({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nScreen1ViewBase::Screen1ViewBase() :\n    buttonCallback(this, &Screen1ViewBase::buttonCallbackHandler)\n{\n    buttonWithIconName.setXY(155, 106);\n    buttonWithIconName.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_ID), touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_PRESSED_ID), touchgfx::Bitmap(BITMAP_BLUE_ICONS_ADD_NEW_32_ID), touchgfx::Bitmap(BITMAP_BLUE_ICONS_ADD_NEW_32_ID));\n    buttonWithIconName.setIconXY(71, 16);\n    buttonWithIconName.setAction(buttonCallback);\n\n    add(buttonWithIconName);\n}\n\nvoid Screen1ViewBase::buttonCallbackHandler(const touchgfx::AbstractButton& src)\n{\n    if (&src == &buttonWithIconName)\n    {\n        //InteractionName\n        //When buttonName clicked calls the new virtual function "functionName()" set by the user\n        functionName();\n    }\n}\n')),(0,r.kt)(l.Z,{mdxType:"Tip"},"You can use these functions and the others available in the ButtonWithIcon class in user code. Remember to force a redraw by calling ",(0,r.kt)(s.Z,{mdxType:"InlineCode"},"buttonWithIconName.invalidate()")," if you change the appearance of the widget."),(0,r.kt)("h3",y({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Examples"),(0,r.kt)("p",null,"To further explore the Button With Icon, try creating a new application within TouchGFX Designer with the following UI template:"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-templates/transition-example-v4.17.png",mdxType:"Figure"},"Transition Example UI template in TouchGFX Designer"),(0,r.kt)("h2",y({},{id:"api-reference"}),"API Reference"),(0,r.kt)(a.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(u.Z,{to:"../../../../api/classes/classtouchgfx_1_1_button_with_icon",mdxType:"Link"},"API reference for the ButtonWithIcon class"))))}P.isMDXComponent=!0}}]);