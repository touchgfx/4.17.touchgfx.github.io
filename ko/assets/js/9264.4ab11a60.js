(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9264,9514,6073],{19743:function(e,t,n){"use strict";n.r(t);var r=n(67294),a=n(26389),o=n(30910);t.default=function(){return r.createElement(a.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},36044:function(e,t){"use strict";t.Z=()=>null},42012:function(e,t,n){"use strict";n.d(t,{Z:function(){return N}});var r=n(67294),a=n(73935),o=n(11368),l=n(5977),c=n(25026),s=n(31217),i=n(9671),u=n(2199),m=n(57052),h=n(16747),d=n(81567),f=n(30910),p="searchBox_1ZXk",b=Object.defineProperty,g=Object.defineProperties,E=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,P=(e,t,n)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))v.call(t,n)&&P(e,n,t[n]);if(k)for(var n of k(t))C.call(t,n)&&P(e,n,t[n]);return e},O=(e,t)=>g(e,E(t));let w=null;function Z({hit:e,children:t}){return r.createElement(s.Z,{to:e.url},t)}function S({state:e,onClose:t}){const{generateSearchPageLink:n}=(0,u.Z)();return r.createElement(s.Z,{to:n(e.query),onClick:t},"See all ",e.context.nbHits," results")}function F(e){var t,s,u=e,{contextualSearch:b}=u,g=((e,t)=>{var n={};for(var r in e)v.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&k)for(var r of k(e))t.indexOf(r)<0&&C.call(e,r)&&(n[r]=e[r]);return n})(u,["contextualSearch"]);const{siteMetadata:E}=(0,o.Z)(),P=(0,d.Z)(),F=null!=(s=null==(t=g.searchParameters)?void 0:t.facetFilters)?s:[],N=b?[...P,...F]:F,x=O(y({},g.searchParameters),{facetFilters:N}),{withBaseUrl:I}=(0,c.C)(),R=(0,l.k6)(),j=(0,r.useRef)(null),T=(0,r.useRef)(null),[A,B]=(0,r.useState)(!1),[_,M]=(0,r.useState)(null),$=(0,r.useCallback)((()=>w?Promise.resolve():Promise.all([n.e(3763).then(n.bind(n,83763)),Promise.all([n.e(532),n.e(6945)]).then(n.bind(n,46945)),Promise.all([n.e(532),n.e(2210)]).then(n.bind(n,9846))]).then((([{DocSearchModal:e}])=>{w=e}))),[]),D=(0,r.useCallback)((()=>{$().then((()=>{j.current=document.createElement("div"),document.body.insertBefore(j.current,document.body.firstChild),B(!0)}))}),[$,B]),L=(0,r.useCallback)((()=>{B(!1),j.current.remove()}),[B]),U=(0,r.useCallback)((e=>{$().then((()=>{B(!0),M(e.key)}))}),[$,B,M]),V=(0,r.useRef)({navigate({itemUrl:e}){R.push(e)}}).current,W=(0,r.useRef)((e=>e.map((e=>{const t=document.createElement("a");return t.href=e.url,t.pathname.endsWith("/")&&(t.pathname=t.pathname.replace(/\/$/,"")),O(y({},e),{url:I(`${t.pathname}${t.hash}`)})})))).current,Y=(0,r.useMemo)((()=>e=>r.createElement(S,O(y({},e),{onClose:L}))),[L]),q=(0,r.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",E.docusaurusVersion),e)),[E.docusaurusVersion]);(0,m.D)({isOpen:A,onOpen:D,onClose:L,onInput:U,searchButtonRef:T});const H=(0,f.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return r.createElement(r.Fragment,null,r.createElement(i.Z,null,r.createElement("link",{rel:"preconnect",href:`https://${g.appId}-dsn.algolia.net`,crossOrigin:"anonymous"})),r.createElement("div",{className:p},r.createElement(h.a,{onTouchStart:$,onFocus:$,onMouseOver:$,onClick:D,ref:T,translations:{buttonText:H,buttonAriaLabel:H}})),A&&(0,a.createPortal)(r.createElement(w,O(y({onClose:L,initialScrollY:window.scrollY,initialQuery:_,navigator:V,transformItems:W,hitComponent:Z,resultsFooterComponent:Y,transformSearchClient:q},g),{searchParameters:x})),j.current))}var N=function(){const{siteConfig:e}=(0,o.Z)();return r.createElement(F,y({},e.themeConfig.algolia))}}}]);