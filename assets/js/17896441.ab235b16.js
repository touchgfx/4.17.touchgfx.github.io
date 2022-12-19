"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7918],{48704:function(e,t,n){var a=n(67294),i=n(11368),o=n(39130),s=n(33084),r=n(2686),l=n(74742),c=n(92879),u=Object.defineProperty,d=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const h={unreleased:function({siteTitle:e,versionMetadata:t}){return a.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:a.createElement("b",null,t.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function({siteTitle:e,versionMetadata:t}){return a.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:a.createElement("b",null,t.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function f(e){const t=h[e.versionMetadata.banner];return a.createElement(t,((e,t)=>{for(var n in t||(t={}))m.call(t,n)&&v(e,n,t[n]);if(d)for(var n of d(t))b.call(t,n)&&v(e,n,t[n]);return e})({},e))}function p({to:e,onClick:t,versionLabel:n}){return a.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:n,latestVersionLink:a.createElement("b",null,a.createElement(o.Z,{to:e,onClick:t},a.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function g({versionMetadata:e}){const{siteConfig:{title:t,url:n,customFields:o}}=(0,i.Z)(),{pluginId:s}=(0,r.gA)({failfast:!0}),{savePreferredVersionName:c}=(0,l.J)(s),{latestVersionSuggestion:u}=(0,r.Jo)(s),[d,m]=(0,a.useState)([]);(0,a.useEffect)((()=>{fetch("/newestVersion.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){m(e)}))}),[]);const b=d[0];return void 0===b||b===u.label?a.createElement(a.Fragment,null):a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},a.createElement("div",null,a.createElement(f,{siteTitle:t,versionMetadata:e})),a.createElement("div",{className:"margin-top--md"},a.createElement(p,{to:n,onClick:()=>c(u.name),versionLabel:b})))}t.Z=function(){const e=(0,c.E)();return a.createElement(g,{versionMetadata:e})}}}]);