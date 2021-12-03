(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7918],{97756:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return $}});var n=a(67294),r=a(31217),l=a(30910);var i=function(e){const{metadata:t}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(r.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(l.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(r.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(l.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},o=a(11368),s=a(33204),c=a(3068),d=Object.defineProperty,m=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,v=(e,t,a)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const f={unreleased:function({siteTitle:e,versionMetadata:t}){return n.createElement(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:n.createElement("b",null,t.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function({siteTitle:e,versionMetadata:t}){return n.createElement(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:n.createElement("b",null,t.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){const t=f[e.versionMetadata.banner];return n.createElement(t,((e,t)=>{for(var a in t||(t={}))u.call(t,a)&&v(e,a,t[a]);if(m)for(var a of m(t))p.call(t,a)&&v(e,a,t[a]);return e})({},e))}function h({to:e,onClick:t}){return n.createElement(l.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{latestVersionLink:n.createElement("b",null,n.createElement(r.Z,{to:e,onClick:t},n.createElement(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink}.")}function g({versionMetadata:e}){const{siteConfig:{title:t,url:a}}=(0,o.Z)(),{pluginId:r}=(0,s.gA)({failfast:!0}),{savePreferredVersionName:l}=(0,c.J)(r),{latestDocSuggestion:i,latestVersionSuggestion:d}=(0,s.Jo)(r);null!=i||(m=d).docs.find((e=>e.id===m.mainDocId));var m;return n.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},n.createElement("div",null,n.createElement(b,{siteTitle:t,versionMetadata:e})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{to:a,onClick:()=>l(d.name)})))}var E=function({versionMetadata:e}){return"none"===e.banner?n.createElement(n.Fragment,null):n.createElement(g,{versionMetadata:e})},y=a(3730);function _({lastUpdatedAt:e,formattedLastUpdatedAt:t}){return n.createElement(l.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*e).toISOString()},t))}}," on {date}")}function O({lastUpdatedBy:e}){return n.createElement(l.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,e)}}," by {user}")}function N({lastUpdatedAt:e,formattedLastUpdatedAt:t,lastUpdatedBy:a}){return n.createElement(n.Fragment,null,n.createElement(l.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:e&&t?n.createElement(_,{lastUpdatedAt:e,formattedLastUpdatedAt:t}):"",byUser:a?n.createElement(O,{lastUpdatedBy:a}):""}},"Last updated{atDate}{byUser}"),!1)}var w=a(86010);var L=function(e,t,a){const[r,l]=(0,n.useState)(void 0);(0,n.useEffect)((()=>{function n(){const n=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=a}));if(t){if(t.getBoundingClientRect().top>=a){const a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(n){let a=0,i=!1;const o=document.getElementsByClassName(e);for(;a<o.length&&!i;){const e=o[a],{href:s}=e,c=decodeURIComponent(s.substring(s.indexOf("#")+1));n.id===c&&(r&&r.classList.remove(t),e.classList.add(t),l(e),i=!0),a+=1}}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),()=>{document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},k="tableOfContents_35-E";const U="table-of-contents__link";function T({toc:e,isChild:t}){return e.length?n.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:U,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(T,{isChild:!0,toc:e.children}))))):null}var Z=function({toc:e}){return L(U,"table-of-contents__link--active",100),n.createElement("div",{className:(0,w.Z)(k,"thin-scrollbar")},n.createElement(T,{toc:e}))},j="iconEdit_2_ui",A=Object.defineProperty,P=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,I=(e,t,a)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var S=e=>{var t=e,{className:a}=t,r=((e,t)=>{var a={};for(var n in e)x.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&P)for(var n of P(e))t.indexOf(n)<0&&C.call(e,n)&&(a[n]=e[n]);return a})(t,["className"]);return n.createElement("svg",((e,t)=>{for(var a in t||(t={}))x.call(t,a)&&I(e,a,t[a]);if(P)for(var a of P(t))C.call(t,a)&&I(e,a,t[a]);return e})({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,w.Z)(j,a),"aria-hidden":"true"},r),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function B({editUrl:e}){return n.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener"},n.createElement(S,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var M=a(50186),D="docItemContainer_33ec",V="lastUpdated_3DPF",F="docItemCol_3FnS",z=Object.defineProperty,R=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,J=(e,t,a)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var $=function(e){const{content:t,versionMetadata:a}=e,{metadata:r,frontMatter:l}=t,{image:o,keywords:c,hide_title:d,hide_table_of_contents:m}=l,{description:u,title:p,editUrl:v,lastUpdatedAt:f,formattedLastUpdatedAt:b,lastUpdatedBy:h}=r,{pluginId:g}=(0,s.gA)({failfast:!0}),_=(0,s.gB)(g).length>1,O=!d&&void 0===t.contentTitle;return n.createElement(n.Fragment,null,n.createElement(y.Z,((e,t)=>{for(var a in t||(t={}))q.call(t,a)&&J(e,a,t[a]);if(R)for(var a of R(t))H.call(t,a)&&J(e,a,t[a]);return e})({},{title:p,description:u,keywords:c,image:o})),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,w.Z)("col",{[F]:!m})},n.createElement(E,{versionMetadata:a}),n.createElement("div",{className:D},n.createElement("article",null,_&&n.createElement("span",{className:"badge badge--secondary"},"Version: ",a.label),n.createElement("div",{className:"markdown"},O&&n.createElement(M.N,null,p),n.createElement(t,null)),(v||f||h)&&n.createElement("footer",{className:"row docusaurus-mt-lg"},n.createElement("div",{className:"col"},v&&n.createElement(B,{editUrl:v})),n.createElement("div",{className:(0,w.Z)("col",V)},(f||h)&&n.createElement(N,{lastUpdatedAt:f,formattedLastUpdatedAt:b,lastUpdatedBy:h})))),n.createElement(i,{metadata:r}))),!m&&t.toc&&n.createElement("div",{className:"col col--3"},n.createElement(Z,{toc:t.toc}))))}},50186:function(e,t,a){"use strict";a.d(t,{N:function(){return g},Z:function(){return E}});var n=a(67294),r=a(86010),l=a(30910),i=a(3068),o="enhancedAnchor_2LWZ",s="h1Heading_27L5",c=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,f=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,b=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&f(e,a,t[a]);if(u)for(var a of u(t))v.call(t,a)&&f(e,a,t[a]);return e},h=(e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&v.call(e,n)&&(a[n]=e[n]);return a};const g=function(e){var t,a=h(e,[]);return n.createElement("header",null,n.createElement("h1",(t=b({},a),d(t,m({id:void 0,className:s}))),a.children))};var E=e=>{return"h1"===e?g:(t=e,function(e){var a=e,{id:s}=a,c=h(a,["id"]);const{navbar:{hideOnScroll:d}}=(0,i.LU)();return s?n.createElement(t,b({},c),n.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,r.Z)("anchor",{[o]:!d}),id:s}),c.children,n.createElement("a",{className:"hash-link",href:`#${s}`,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):n.createElement(t,b({},c))});var t}}}]);