"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6280],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,h=m["".concat(d,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{class:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,r.Z)(e.imageSource);return t?a.createElement("div",{class:"figure noshadow"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:i,src:l})),a.createElement("p",null,e.children)):a.createElement("div",{class:"figure"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:i,src:l})),a.createElement("p",null,e.children))}},29415:function(e,t,n){var a=n(67294),r=n(88678);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=l},88678:function(e,t,n){var a=n(67294);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{class:e},a.createElement("div",{class:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=r},31217:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("code",null,this.props.children)}}t.Z=r},37793:function(e,t,n){var a=n(67294),r=n(88678);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=l},24723:function(e,t,n){n.r(t),n.d(t,{assets:function(){return w},contentTitle:function(){return b},default:function(){return E},frontMatter:function(){return N},metadata:function(){return v},toc:function(){return y}});var a=n(3905),r=n(44035),i=n(29415),l=n(37793),o=n(31217),d=n(39130),s=n(22425),p=Object.defineProperty,m=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&k(e,n,t[n]);if(c)for(var n of c(t))g.call(t,n)&&k(e,n,t[n]);return e};const N={id:"slide-menu",title:"Slide Menu"},b=void 0,v={unversionedId:"development/ui-development/ui-components/containers/slide-menu",id:"development/ui-development/ui-components/containers/slide-menu",title:"Slide Menu",description:"",source:"@site/docs/development/ui-development/ui-components/containers/slide-menu.mdx",sourceDirName:"development/ui-development/ui-components/containers",slug:"/development/ui-development/ui-components/containers/slide-menu",permalink:"/4.17/docs/development/ui-development/ui-components/containers/slide-menu",draft:!1,tags:[],version:"current",frontMatter:{id:"slide-menu",title:"Slide Menu"},sidebar:"docs",previous:{title:"Scroll Wheel",permalink:"/4.17/docs/development/ui-development/ui-components/containers/scroll-wheel"},next:{title:"Box Progress",permalink:"/4.17/docs/development/ui-development/ui-components/progress-indicators/box-progress"}},w={},y=[{value:"Widget Group",id:"widget-group",level:2},{value:"Properties",id:"properties",level:2},{value:"Interactions",id:"interactions",level:2},{value:"Actions",id:"actions",level:3},{value:"Triggers",id:"triggers",level:3},{value:"Performance",id:"performance",level:2},{value:"Examples",id:"examples",level:2},{value:"Generated Code",id:"generated-code",level:3},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",level:3},{value:"API Reference",id:"api-reference",level:2}],x={toc:y};function E(e){var t,n=e,{components:p}=n,k=((e,t)=>{var n={};for(var a in e)h.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&g.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=f(f({},x),k),m(t,u({components:p,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"A Slide Menu in TouchGFX is a specialization of the ",(0,a.kt)("a",f({parentName:"p"},{href:"container"}),"Container")," that consists of an internal ",(0,a.kt)("a",f({parentName:"p"},{href:"container"}),"Container"),", an ",(0,a.kt)("a",f({parentName:"p"},{href:"../images/image"}),"Image")," and an optional ",(0,a.kt)("a",f({parentName:"p"},{href:"../buttons/button"}),"Button"),", which can animate between a collapsed and expanded state."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/slide-menu/widget-appearance.webp",mdxType:"Figure"},"Slide Menu running in the simulator"),(0,a.kt)("h2",f({},{id:"widget-group"}),"Widget Group"),(0,a.kt)("p",null,"The Slide Menu can be found in the Containers widget group in TouchGFX Designer."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/slide-menu/widget-group-v4.17.webp",mdxType:"Figure"},"Slide Menu in TouchGFX Designer"),(0,a.kt)("h2",f({},{id:"properties"}),"Properties"),(0,a.kt)("p",null,"The properties for the Slide Menu are described in the following sections."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Property Group")),(0,a.kt)("th",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Name")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Name")," of the widget. ",(0,a.kt)("em",{parentName:"td"},"Name is the unique identifier used in TouchGFX Designer and code"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Location")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"X")," and ",(0,a.kt)("em",{parentName:"td"},"Y")," specify the top left corner of the widget relative to its parent.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"W")," and ",(0,a.kt)("em",{parentName:"td"},"H")," specify the width and height of the widget.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"The size of a Slide Menu is determined by the size of its background and button images."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Locking the widget also disables interacting with the widget through the screen."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Visible")," specifies the visibility of the widget.",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Expanding Direction")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Expanding Direction")," specifies the direction the Slide Menu should expand.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"State")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"State")," specifies the initial state of the Slide Menu, either collapsed or expanded.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Collapsed: Visible Pixels")," specifies the amount of pixels that should be visible when the state is collapsed.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Expanded: Hidden Pixels")," Specifices the amount of pixels that should be hidden when the state is expanded.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Expanded Timeout")," specifies the amount of time before automatically returning to the collapsed state from the expanded state.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Background")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Background Image")," specifies the image to use as background.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Background Location")," specifies the x,y coordinate of the background image relative to the widgets' coordinates.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Button")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Use Button")," Specifies whether or not to make use of a button to control the state of the widget.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Released Image")," specifies the image to use for the buttons' released state.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Pressed Image")," specifies the image to use for the buttons' pressed state.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Button Location")," specifies the x,y coordinate of the button relative to the widgets' coordinates.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Animation")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Easing")," and ",(0,a.kt)("em",{parentName:"td"},"Easing Option")," specify which easing equation to use for animations.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Duration")," specifies the amount of time the animation should take.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Mixins")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"Draggable")," specifies if the widget is draggable at runtime.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"FadeAnimator")," specifies if the widget can animate changes to its ",(0,a.kt)("em",{parentName:"td"},"Alpha")," value.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,a.kt)("em",{parentName:"td"},"X")," and ",(0,a.kt)("em",{parentName:"td"},"Y")," values.")))),(0,a.kt)("h2",f({},{id:"interactions"}),"Interactions"),(0,a.kt)("p",null,"The actions and triggers supported by the Slide Menu are described in the following sections."),(0,a.kt)("h3",f({},{id:"actions"}),"Actions"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Widget specific action")),(0,a.kt)("th",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Change State of Slide Menu")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Change the state of a Slide Menu to either collapsed or expanded")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Reset Timer of Slide Menu")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Reset the timer automatically returning the Slide Menu state to collapsed")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Standard widget action")),(0,a.kt)("th",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Move widget")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Hide widget")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Show widget")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,a.kt)("h3",f({},{id:"triggers"}),"Triggers"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Trigger")),(0,a.kt)("th",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Slide Menu animation ended")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"A Slide Menu animation from one state to another has ended.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Slide Menu state changed")),(0,a.kt)("td",f({parentName:"tr"},{align:null}),"A Slide Menu has had its state changed.")))),(0,a.kt)("h2",f({},{id:"performance"}),"Performance"),(0,a.kt)("p",null,"A Slide Menu is a ",(0,a.kt)("a",f({parentName:"p"},{href:"container"}),"Container")," type and does not per default appear in the draw chain. Therefore, the performance is mostly dependent on the drawing performance of the children."),(0,a.kt)("p",null,"For more details on drawing performance, read the ",(0,a.kt)("a",f({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,a.kt)("h2",f({},{id:"examples"}),"Examples"),(0,a.kt)("h3",f({},{id:"generated-code"}),"Generated Code"),(0,a.kt)("p",null,"In the generated code for the View base class we can see how the TouchGFX Designer sets up a Slide Menu."),(0,a.kt)(s.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nScreen1ViewBase::Screen1ViewBase()\n{\n    slideMenuName.setup(touchgfx::SlideMenu::EAST,\n        touchgfx::Bitmap(BITMAP_LEFT_SLIDE_MENU_BACKGROUND_ID),\n        touchgfx::Bitmap(BITMAP_LEFT_SLIDE_MENU_BUTTON_ID),\n        touchgfx::Bitmap(BITMAP_LEFT_SLIDE_MENU_BUTTON_ID),\n        0, 0, 49, 111);\n    slideMenuName.setState(touchgfx::SlideMenu::COLLAPSED);\n    slideMenuName.setVisiblePixelsWhenCollapsed(24);\n    slideMenuName.setHiddenPixelsWhenExpanded(0);\n    slideMenuName.setAnimationEasingEquation(touchgfx::EasingEquations::circEaseInOut);\n    slideMenuName.setAnimationDuration(18);\n    slideMenuName.setExpandedStateTimeout(180);\n    slideMenuName.setXY(0, 0);\n\n    add(slideMenuName);\n}\n')),(0,a.kt)(l.Z,{mdxType:"Tip"},"You can use these functions and the others available in the SlideMenu class in user code. Remember to force a redraw by calling ",(0,a.kt)(o.Z,{mdxType:"InlineCode"},"Slide MenuName.invalidate()")," if you change the appearance of the widget."),(0,a.kt)("h3",f({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Examples"),(0,a.kt)("p",null,"To further explore the Slide Menu, try creating a new application within TouchGFX Designer with the following UI template:"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-templates/slide-menu-example-v4.17.webp",mdxType:"Figure"},"Slide Menu Example UI template in TouchGFX Designer"),(0,a.kt)("h2",f({},{id:"api-reference"}),"API Reference"),(0,a.kt)(i.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(d.Z,{to:"../../../../api/classes/classtouchgfx_1_1_slide_menu",mdxType:"Link"},"API reference for the SlideMenu class"))))}E.isMDXComponent=!0}}]);