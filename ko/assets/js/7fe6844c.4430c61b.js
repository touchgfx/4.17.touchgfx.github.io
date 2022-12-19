"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5923],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),m=i,d=p["".concat(l,".").concat(m)]||p[m]||g[m]||a;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},22425:function(e,n,t){var r=t(67294);class i extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}n.Z=i},44035:function(e,n,t){var r=t(67294),i=t(25026);n.Z=function(e){const n=e.noShadow||!1,t=e.width,a=e.height,o=(0,i.Z)(e.imageSource);return n?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:t,height:a,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:t,height:a,src:o})),r.createElement("p",null,e.children))}},29415:function(e,n,t){var r=t(67294),i=t(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}n.Z=o},88678:function(e,n,t){var r=t(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}n.Z=i},97429:function(e,n,t){t.r(n),t.d(n,{assets:function(){return h},contentTitle:function(){return v},default:function(){return x},frontMatter:function(){return k},metadata:function(){return f},toc:function(){return b}});var r=t(3905),i=t(44035),a=t(29415),o=t(39130),c=t(22425),l=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,C=(e,n)=>{for(var t in n||(n={}))g.call(n,t)&&d(e,t,n[t]);if(p)for(var t of p(n))m.call(n,t)&&d(e,t,n[t]);return e};const k={id:"custom-triggers-and-actions",title:"\ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70 \ubc0f \uc561\uc158"},v=void 0,f={unversionedId:"development/ui-development/touchgfx-engine-features/custom-triggers-and-actions",id:"development/ui-development/touchgfx-engine-features/custom-triggers-and-actions",title:"\ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70 \ubc0f \uc561\uc158",description:"TouchGFX Designer\uc5d0\uc11c\ub294 \ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70 \ubc0f \uc561\uc158\uc744 \uc0ac\uc6a9\ud574 \uc790\uc2e0\ub9cc\uc758 \uc0c1\ud638\uc791\uc6a9 \uad6c\uc131\uc694\uc18c\ub97c \uc815\uc758\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uac01 \uc2a4\ud06c\ub9b0\ub9c8\ub2e4 \uc561\uc158 \uadf8\ub8f9(C++\uc5d0\uc11c \uac04\ub2e8\ud55c void \uba54\uc18c\ub4dc)\uc744 \ucd94\uac00\ud55c \ud6c4 TouchGFX Designer\ub294 \ubb3c\ub860\uc774\uace0 \ucf54\ub4dc\uc5d0\uc11c\ub3c4 \ud638\ucd9c\ud558\uc5ec \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\uc5d0\uc11c\ub3c4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ubc18\uc751\ud558\ub294 \ud2b8\ub9ac\uac70 \uadf8\ub8f9(C++\uc5d0\uc11c \ucf5c\ubc31\uacfc \ub3d9\uc77c)\uc744 \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uc139\uc158\uc5d0\uc11c\ub294 \uc774\ub7ec\ud55c \uae30\ub2a5\uc744 \uc0b4\ud3b4\ubcf4\uba74\uc11c \ubcf4\ub2e4 \ub9e4\ub044\ub7fd\uace0 \ub3d9\uc801\uc778 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc81c\uc791\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions",permalink:"/4.17/ko/docs/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions",draft:!1,tags:[],version:"current",frontMatter:{id:"custom-triggers-and-actions",title:"\ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70 \ubc0f \uc561\uc158"},sidebar:"docs",previous:{title:"\uc0c1\ud638\uc791\uc6a9",permalink:"/4.17/ko/docs/development/ui-development/designer-user-guide/interactions-view"},next:{title:"\ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108",permalink:"/4.17/ko/docs/development/ui-development/touchgfx-engine-features/custom-containers"}},h={},b=[{value:"\ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70",id:"custom-triggers",level:2},{value:"\ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70 \ucd94\uac00\ud558\uae30",id:"adding-custom-triggers",level:3},{value:"\uc0c1\ud638\uc791\uc6a9\uc5d0\uc11c \ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70 \uc2e4\ud589\ud558\uae30",id:"emitting-custom-triggers-from-interactions",level:3},{value:"\uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc5d0\uc11c \ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70 \uc2e4\ud589\ud558\uae30",id:"emitting-custom-triggers-from-user-code",level:3},{value:"\uc0c1\ud638\uc791\uc6a9\uc5d0\uc11c \ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70\uc5d0 \ubc18\uc751\ud558\uae30",id:"reacting-to-custom-triggers-from-interactions",level:3},{value:"\uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc5d0\uc11c \ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70\uc5d0 \ubc18\uc751\ud558\uae30",id:"reacting-to-custom-triggers-from-user-code",level:3},{value:"\ucee4\uc2a4\ud140 \uc561\uc158",id:"custom-actions",level:2},{value:"\ucee4\uc2a4\ud140 \uc561\uc158 \ucd94\uac00\ud558\uae30",id:"adding-custom-actions",level:3},{value:"\uc0c1\ud638\uc791\uc6a9\uc5d0\uc11c \ucee4\uc2a4\ud140 \uc561\uc158 \ud638\ucd9c\ud558\uae30",id:"calling-custom-action-from-interactions",level:3},{value:"\uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc5d0\uc11c \ucee4\uc2a4\ud140 \uc561\uc158 \ud638\ucd9c\ud558\uae30",id:"calling-custom-action-from-user-code",level:3},{value:"\uc0c1\ud638\uc791\uc6a9\uc5d0\uc11c \ucee4\uc2a4\ud140 \uc561\uc158\uc5d0 \ub3d9\uc791 \ucd94\uac00\ud558\uae30",id:"adding-behaviour-to-custom-actions-from-interactions",level:3},{value:"\uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc5d0\uc11c \ucee4\uc2a4\ud140 \uc561\uc158\uc5d0 \ub3d9\uc791 \ucd94\uac00\ud558\uae30",id:"adding-behaviour-to-custom-actions-from-user-code",level:3}],y={toc:b};function x(e){var n,t=e,{components:l}=t,d=((e,n)=>{var t={};for(var r in e)g.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&p)for(var r of p(e))n.indexOf(r)<0&&m.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=C(C({},y),d),s(n,u({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"TouchGFX Designer\uc5d0\uc11c\ub294 \ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70 \ubc0f \uc561\uc158\uc744 \uc0ac\uc6a9\ud574 \uc790\uc2e0\ub9cc\uc758 \uc0c1\ud638\uc791\uc6a9 \uad6c\uc131\uc694\uc18c\ub97c \uc815\uc758\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uac01 \uc2a4\ud06c\ub9b0\ub9c8\ub2e4 \uc561\uc158 \uadf8\ub8f9(C++\uc5d0\uc11c \uac04\ub2e8\ud55c void \uba54\uc18c\ub4dc)\uc744 \ucd94\uac00\ud55c \ud6c4 TouchGFX Designer\ub294 \ubb3c\ub860\uc774\uace0 \ucf54\ub4dc\uc5d0\uc11c\ub3c4 \ud638\ucd9c\ud558\uc5ec \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\uc5d0\uc11c\ub3c4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ubc18\uc751\ud558\ub294 \ud2b8\ub9ac\uac70 \uadf8\ub8f9(C++\uc5d0\uc11c \ucf5c\ubc31\uacfc \ub3d9\uc77c)\uc744 \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uc139\uc158\uc5d0\uc11c\ub294 \uc774\ub7ec\ud55c \uae30\ub2a5\uc744 \uc0b4\ud3b4\ubcf4\uba74\uc11c \ubcf4\ub2e4 \ub9e4\ub044\ub7fd\uace0 \ub3d9\uc801\uc778 TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc81c\uc791\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",C({},{id:"custom-triggers"}),"\ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70"),(0,r.kt)("p",null,"\ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70\ub294 \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\uc5d0\uc11c \uc0dd\uc131\ub429\ub2c8\ub2e4. \uc774\ub294 C++ \ucf5c\ubc31 \ud615\ud0dc\ub85c \uc0dd\uc131\ub418\uba70, \uc0c1\ud638\uc791\uc6a9 \uc2dc\uc2a4\ud15c \ub610\ub294 \uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc5d0\uc11c \uc2e4\ud589\ub418\uac70\ub098 \ubc18\uc751\uc744 \uc77c\uc73c\ud0a4\uae30\ub3c4 \ud569\ub2c8\ub2e4."),(0,r.kt)("h3",C({},{id:"adding-custom-triggers"}),"\ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70 \ucd94\uac00\ud558\uae30"),(0,r.kt)("p",null,"\ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70 \ucd94\uac00\ub294 \uc544\ub798 \uc774\ubbf8\uc9c0\uc640 \uac19\uc774 \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\uc758 Properties \ud0ed\uc5d0\uc11c ",(0,r.kt)("strong",{parentName:"p"},"Triggers")," \uc139\uc158\uc5d0 \uc788\ub294 \u201c+\u201d \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc5ec \uc218\ud589\ub429\ub2c8\ub2e4."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/adding-custom-trigger-4.17.webp",mdxType:"Figure"},"\ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70 \ucd94\uac00\ud558\uae30"),(0,r.kt)("p",null,"\ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70\uac00 \uc0dd\uc131\ub418\uba74 \uc544\ub798 \uc774\ubbf8\uc9c0\uc640 \uac19\uc774 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc635\uc158\uc774 \ucd94\uac00\ub429\ub2c8\ub2e4."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/editing-custom-trigger-4.17.webp",mdxType:"Figure"},"\ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70 \ud3b8\uc9d1\ud558\uae30"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Name"),(0,r.kt)("br",null)," \uc5ec\uae30\uc11c \uc9c0\uc815\ub41c \uc774\ub984\uc740 \uc0c1\ud638\uc791\uc6a9 \uc2dc\uc2a4\ud15c\uc5d0\uc11c, \uadf8\ub9ac\uace0 \uc0dd\uc131\ub41c \ucf54\ub4dc \ud30c\uc77c\uc5d0\uc11c \ucc38\uc870 \ubaa9\uc801\uc73c\ub85c \uc0ac\uc6a9\ub418\uba70, \ucf54\ub4dc \uc608\uc81c\ub294 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"CustomContainer1Base.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",C({parentName:"pre"},{className:"language-cpp",metastring:"{11-14,24-30,37}","{11-14,24-30,37}":!0}),"class CustomContainer1Base : public touchgfx::Container\n{\npublic:\n    CustomContainer1Base();\n    virtual ~CustomContainer1Base() {}\n    virtual void initialize();\n\n    /*\n     * Custom Trigger Callback Setters\n     */\n    void setTrigger1Callback(touchgfx::GenericCallback<>& callback)\n    {\n        this->trigger1Callback = &callback;\n    }\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());\n    }\n\n    /*\n     * Custom Trigger Emitters\n     */\n    virtual void emitTrigger1Callback()\n    {\n        if (trigger1Callback && trigger1Callback->isValid())\n        {\n            this->trigger1Callback->execute();\n        }\n    }\n\nprivate:\n\n    /*\n     * Custom Trigger Callback Declarations\n     */\n    touchgfx::GenericCallback<>* trigger1Callback;\n\n};\n")),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"CustomContainer1Base.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",C({parentName:"pre"},{className:"language-cpp",metastring:"{2}","{2}":!0}),"CustomContainer1Base::CustomContainer1Base() :\n    trigger1Callback(0)\n{\n    setWidth(250);\n    setHeight(250);\n}\n\nvoid CustomContainer1Base::initialize()\n{\n\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),(0,r.kt)("br",null)," \uc5ec\uae30\uc5d0 \uc785\ub825\ud558\ub294 \ud14d\uc2a4\ud2b8\ub294 \uc0c1\ud638\uc791\uc6a9 \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uc0ac\uc6a9\ub418\uba70, \uc0c1\ud638\uc791\uc6a9 \uc2dc\uc2a4\ud15c\uc5d0\uc11c \ud2b8\ub9ac\uac70\ub97c \uc120\ud0dd\ud560 \ub54c \ub9c8\uc6b0\uc2a4 \ucee4\uc11c\ub97c \ud2b8\ub9ac\uac70 \uc704\ub85c \uac00\uc838\uac00\uba74 \ud45c\uc2dc\ub429\ub2c8\ub2e4. \uc124\uba85\uc744 \uc785\ub825\ud558\uc9c0 \uc54a\uc73c\uba74 ",(0,r.kt)("a",C({parentName:"p"},{href:"#emitting-custom-triggers-from-interactions"}),"\uc0c1\ud638\uc791\uc6a9\uc5d0\uc11c \ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70 \uc2e4\ud589\ud558\uae30")," \uc139\uc158\uc5d0 \ub098\uc640 \uc788\ub294 \uac83\ucc98\ub7fc \ud45c\uc900 \uc124\uba85\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),(0,r.kt)("br",null)," Type\uc744 \ud65c\uc131\ud654\ud558\uba74 \ud2b9\uc815 \uc720\ud615\uc73c\ub85c \uc9c0\uc815\ub41c \uac12\uc744 \ubc18\ud658\ud558\ub294 \ud2b8\ub9ac\uac70\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc720\ud615\uc740 \ubaa9\ub85d\uc5d0\uc11c \uc120\ud0dd\ud558\uac70\ub098, \ud639\uc740 \uc6d0\ud558\ub294 \uc720\ud615\uc744 \uc9c1\uc811 \uc791\uc131\ud558\uc5ec \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc544\ub798\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"bool")," \uc120\ud0dd \uc2dc \uc0dd\uc131\ub418\ub294 \ucf54\ub4dc\uc785\ub2c8\ub2e4."),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"CustomContainer1Base.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",C({parentName:"pre"},{className:"language-cpp",metastring:"{11-14,24-30,37}","{11-14,24-30,37}":!0}),"class CustomContainer1Base : public touchgfx::Container\n{\npublic:\n    CustomContainer1Base();\n    virtual ~CustomContainer1Base() {}\n    virtual void initialize();\n\n    /*\n     * Custom Trigger Callback Setters\n     */\n    void setTrigger1Callback(touchgfx::GenericCallback<bool>& callback)\n    {\n        this->trigger1Callback = &callback;\n    }\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());\n    }\n\n    /*\n     * Custom Trigger Emitters\n     */\n    virtual void emitTrigger1Callback(bool value)\n    {\n        if (trigger1Callback && trigger1Callback->isValid())\n        {\n            this->trigger1Callback->execute(value);\n        }\n    }\n\nprivate:\n\n    /*\n     * Custom Trigger Callback Declarations\n     */\n    touchgfx::GenericCallback<bool>* trigger1Callback;\n\n};\n")),(0,r.kt)("h3",C({},{id:"emitting-custom-triggers-from-interactions"}),"\uc0c1\ud638\uc791\uc6a9\uc5d0\uc11c \ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70 \uc2e4\ud589\ud558\uae30"),(0,r.kt)("p",null,"\ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70\ub294 \uc0c1\ud638\uc791\uc6a9 \uc2dc\uc2a4\ud15c\uc744 \uc0ac\uc6a9\ud574 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70\uac00 \uc18d\ud55c \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\uc758 Interaction \ud0ed\uc5d0\uc11c \uc0c8\ub85c\uc6b4 \uc0c1\ud638\uc791\uc6a9\uc744 \uc0dd\uc131\ud55c \ud6c4 \uc544\ub798 \uc774\ubbf8\uc9c0\uc640 \uac19\uc774 \ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70\ub97c \uc561\uc158\uc73c\ub85c \uc120\ud0dd\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/emitting-a-custom-trigger-from-interaction-4.17.webp",mdxType:"Figure"},"\uc0c1\ud638\uc791\uc6a9\uc5d0\uc11c \ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70 \uc2e4\ud589\ud558\uae30"),(0,r.kt)("p",null,"\uc704 \uc774\ubbf8\uc9c0\uc640 \uac19\uc774 \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\uc5d0 \ucd94\uac00\ub41c \ubc84\ud2bc\uc744 \ud074\ub9ad\ud560 \ub54c\ub9c8\ub2e4 \ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70\uac00 \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70\uc5d0\uc11c Type\uc774 \ud65c\uc131\ud654\ub418\uc5b4 \uc788\uc73c\uba74 \uc544\ub798 \uc774\ubbf8\uc9c0\uc640 \uac19\uc774 \ud30c\ub77c\ubbf8\ud130 \uac12, \uc989 \ubcc0\uc218\ub97c \uc9c0\uc815\ud574\uc57c \ud569\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\uc11c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"bool"),"\uc774 Type\uc73c\ub85c \uc9c0\uc815\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/parameter-specification-when-emitting-custom-trigger-from-interaction-4.17.webp",mdxType:"Figure"},"\uc0c1\ud638\uc791\uc6a9\uc5d0\uc11c \uc2e4\ud589\ud560 \ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70\uc758 \ub9e4\uac1c\ubcc0\uc218 \uc9c0\uc815\ud558\uae30"),(0,r.kt)("h3",C({},{id:"emitting-custom-triggers-from-user-code"}),"\uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc5d0\uc11c \ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70 \uc2e4\ud589\ud558\uae30"),(0,r.kt)("p",null,'\ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70\ub294 \uc0dd\uc131\ub41c \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\uc5d0\uc11c \uc0c1\uc18d\ub418\ub294 \uc0ac\uc6a9\uc790 \ucf54\ub4dc \ud074\ub798\uc2a4 \ud30c\uc77c\uc5d0\uc11c\ub3c4 \uc2e4\ud589\ub429\ub2c8\ub2e4. \uc0dd\uc131\ub41c \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\uc5d0\uc11c \uc774\ub984\uc774 "trigger1"\uc778 \ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70\uc5d0 \ub300\ud574 \uc544\ub798 \uba54\uc18c\ub4dc\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.'),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"CustomContainer1Base.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",C({parentName:"pre"},{className:"language-cpp",metastring:"{24-30}","{24-30}":!0}),"virtual void emitTrigger1Callback(bool value)\n{\n    if (trigger1Callback && trigger1Callback->isValid())\n    {\n        this->trigger1Callback->execute(value);\n    }\n}\n")),(0,r.kt)("p",null,"\uc774 \ud568\uc218\ub294 \uc0c1\uc18d\ub418\ub294 \uc0ac\uc6a9\uc790 \ucf54\ub4dc \ud074\ub798\uc2a4 \ud30c\uc77c\uc5d0\uc11c \ub36e\uc5b4\uc4f0\uac70\ub098 \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",C({},{id:"reacting-to-custom-triggers-from-interactions"}),"\uc0c1\ud638\uc791\uc6a9\uc5d0\uc11c \ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70\uc5d0 \ubc18\uc751\ud558\uae30"),(0,r.kt)("p",null,"\ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70\uac00 \ud3ec\ud568\ub41c \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\ub97c \uc2a4\ud06c\ub9b0\uc5d0 \ucd94\uac00\ud558\uba74 \ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70\ub97c \uc544\ub798 \uc774\ubbf8\uc9c0\uc640 \uac19\uc774 \uc2a4\ud06c\ub9b0\uc758 \uc0c1\ud638\uc791\uc6a9\uc5d0 \uc788\ub294 \ud2b8\ub9ac\uac70\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc0c1\ud638\uc791\uc6a9\uc5d0\uc11c \ud2b8\ub9ac\uac70\ub85c \uc120\ud0dd\ud560 \ub54c \ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70\uc758 \uc774\ub984\uc744 \uc9c0\uc815\ud558\ub294 \uaddc\uce59\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"<Custom Container Name> <Custom Trigger name> happens"),"."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/selecting-custom-trigger-as-trigger-on-interaction-4.17.webp",mdxType:"Figure"},"\uc0c1\ud638\uc791\uc6a9\uc5d0\uc11c \ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70\ub97c \ud2b8\ub9ac\uac70\ub85c \uc120\ud0dd\ud558\uae30"),(0,r.kt)("p",null,"\ud2b8\ub9ac\uac70\ub97c \uc120\ud0dd\ud55c \ud6c4 \ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70\uac00 \ub3d9\uc77c\ud558\uac8c \ud3ec\ud568\ub41c \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108 \uc778\uc2a4\ud134\uc2a4\uac00 \uc5ec\ub7ec \uac1c\uc778 \uacbd\uc6b0\uc5d0\ub294 \ud574\ub2f9 \uad6c\uc131\uc694\uc18c\ub97c \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc778\uc2a4\ud134\uc2a4\uac00 \ud558\ub098 \ubc16\uc5d0 \uc5c6\ub2e4\uba74 \uc790\ub3d9\uc73c\ub85c \uc120\ud0dd\ub429\ub2c8\ub2e4."),(0,r.kt)("h3",C({},{id:"reacting-to-custom-triggers-from-user-code"}),"\uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc5d0\uc11c \ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70\uc5d0 \ubc18\uc751\ud558\uae30"),(0,r.kt)("p",null,'\uc544\ub798 \ucf54\ub4dc \uc608\uc81c\uc640 \uac19\uc774 \ucf5c\ubc31\uc744 \uad6c\ud604\ud558\uba74 \uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc5d0\uc11c\ub3c4 \ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70\uc5d0 \ubc18\uc751\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\uc11c \ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70 \uc774\ub984\uc774 "trigger1"\uc778 \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\uac00 \uc2a4\ud06c\ub9b0\uc5d0 \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc2a4\ud06c\ub9b0\uc73c\ub85c \ubd80\ud130 \uc0c1\uc18d\ub41c \uc0ac\uc6a9\uc790 \ucf54\ub4dc \ud074\ub798\uc2a4 \ud30c\uc77c\uc5d0\uc11c \uac15\uc870 \ud45c\uc2dc\ub41c \ub77c\uc778\ub4e4\uc740 \ucf5c\ubc31/\ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70\ub97c \uad6c\ud604\ud558\uae30 \uc704\ud574 \ucd94\uac00\ub41c \uac83\uc785\ub2c8\ub2e4.'),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",C({parentName:"pre"},{className:"language-cpp",metastring:"{10-18}","{10-18}":!0}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n\nprivate:\n    /*\n     * Callback Declarations\n     */\n    touchgfx::Callback<Screen1View> customContainer1Trigger1Callback;\n\n    /*\n     * Callback Handler Declarations\n     */\n    void customContainer1Trigger1CallbackHandler();\n};\n\n")),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",C({parentName:"pre"},{className:"language-cpp",metastring:"{4,6,19-22}","{4,6,19-22}":!0}),"#include <gui/screen1_screen/Screen1View.hpp>\n\nScreen1View::Screen1View():\n    customContainer1Trigger1Callback(this, &Screen1View::customContainer1Trigger1CallbackHandler)\n{\n    customContainer1.setTrigger1Callback(customContainer1Trigger1Callback);\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n}\n\nvoid Screen1View::tearDownScreen()\n{\n    Screen1ViewBase::tearDownScreen();\n}\n\nvoid Screen1View::customContainer1Trigger1CallbackHandler()\n{\n    //Your code here.\n}\n")),(0,r.kt)("h2",C({},{id:"custom-actions"}),"\ucee4\uc2a4\ud140 \uc561\uc158"),(0,r.kt)("p",null,"\ucee4\uc2a4\ud140 \uc561\uc158\uc740 \uc2a4\ud06c\ub9b0\uacfc \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\uc5d0\uc11c \uc0dd\uc131\ub429\ub2c8\ub2e4. \uc774\ub294 \uac00\uc0c1 C++ \uba54\uc18c\ub4dc \ud615\ud0dc\ub85c \uc0dd\uc131\ub418\uba70, \uc0c1\ud638\uc791\uc6a9 \uc2dc\uc2a4\ud15c \ub610\ub294 \uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc5d0\uc11c \uc2e4\ud589\ub429\ub2c8\ub2e4. \ucee4\uc2a4\ud140 \uc561\uc158\uc758 \uad6c\ud604 \ubc0f \ub3d9\uc791\uc740 \uc0c1\ud638\uc791\uc6a9 \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uad6c\uc131\ud558\uac70\ub098, \ud639\uc740 \uc0ac\uc6a9\uc790 \ucf54\ub4dc \ud074\ub798\uc2a4 \ud30c\uc77c\uc5d0\uc11c \uc0dd\uc131\ub41c C++ \uba54\uc18c\ub4dc\ub97c \ub36e\uc5b4\uc368\uc11c \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",C({},{id:"adding-custom-actions"}),"\ucee4\uc2a4\ud140 \uc561\uc158 \ucd94\uac00\ud558\uae30"),(0,r.kt)("p",null,"\ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70 \ucd94\uac00\ub294 \uc544\ub798 \uc774\ubbf8\uc9c0\uc640 \uac19\uc774 \uc2a4\ud06c\ub9b0 \ub610\ub294 \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\uc758 Properties \ud0ed\uc5d0\uc11c ",(0,r.kt)("strong",{parentName:"p"},"Actions")," \uc139\uc158\uc5d0 \uc788\ub294 \u201c+\u201d \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc5ec \uc218\ud589\ub429\ub2c8\ub2e4."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/adding-custom-action-4.17.webp",mdxType:"Figure"},"\ucee4\uc2a4\ud140 \uc561\uc158 \ucd94\uac00\ud558\uae30"),(0,r.kt)("p",null,"\ucee4\uc2a4\ud140 \uc561\uc158\uc774 \uc0dd\uc131\ub418\uba74 \uc544\ub798 \uc774\ubbf8\uc9c0\uc640 \uac19\uc774 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc635\uc158\uc774 \ucd94\uac00\ub429\ub2c8\ub2e4."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/editing-custom-action-4.17.webp",mdxType:"Figure"},"\ucee4\uc2a4\ud140 \uc561\uc158 \ud3b8\uc9d1\ud558\uae30"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Name"),(0,r.kt)("br",null)," \uc5ec\uae30\uc5d0 \uc9c0\uc815\ub41c \uc774\ub984\uc740 \uc0c1\ud638\uc791\uc6a9 \uc2dc\uc2a4\ud15c\uc5d0\uc11c, \uadf8\ub9ac\uace0 \uc0dd\uc131\ub41c \ucf54\ub4dc \ud30c\uc77c\uc5d0\uc11c \ucd94\uac00\ub85c \ucc38\uc870\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\uba70, \ucf54\ub4dc \uc608\uc81c\ub294 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"CustomContainer1Base.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",C({parentName:"pre"},{className:"language-cpp",metastring:"{11}","{11}":!0}),"class CustomContainer1Base : public touchgfx::Container\n{\npublic:\n    CustomContainer1Base();\n    virtual ~CustomContainer1Base() {}\n    virtual void initialize();\n\n    /*\n     * Custom Actions\n     */\n    virtual void action1();\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());\n    }\n\nprivate:\n\n};\n")),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"CustomContainer1Base.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",C({parentName:"pre"},{className:"language-cpp",metastring:"{12-15}","{12-15}":!0}),"CustomContainer1Base::CustomContainer1Base()\n{\n    setWidth(250);\n    setHeight(250);\n}\n\nvoid CustomContainer1Base::initialize()\n{\n\n}\n\nvoid CustomContainer1Base::action1()\n{\n\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),(0,r.kt)("br",null)," \uc5ec\uae30\uc5d0 \uc785\ub825\ud558\ub294 \ud14d\uc2a4\ud2b8\ub294 \uc0c1\ud638\uc791\uc6a9 \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uc0ac\uc6a9\ub418\uba70, \uc0c1\ud638\uc791\uc6a9 \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uc561\uc158\uc744 \uc120\ud0dd\ud560 \ub54c \ub9c8\uc6b0\uc2a4 \ucee4\uc11c\ub97c \uc561\uc158 \uc704\ub85c \uac00\uc838\uac00\uba74 \ud45c\uc2dc\ub429\ub2c8\ub2e4. \uc124\uba85\uc744 \uc785\ub825\ud558\uc9c0 \uc54a\uc73c\uba74 ",(0,r.kt)("a",C({parentName:"p"},{href:"#calling-custom-action-from-interactions"}),"\uc0c1\ud638\uc791\uc6a9\uc5d0\uc11c \ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70 \uc2e4\ud589\ud558\uae30")," \uc139\uc158\uc5d0 \ub098\uc640 \uc788\ub294 \uac83\ucc98\ub7fc \ud45c\uc900 \uc124\uba85\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"Call <Name> on <Screen or Custom Container Name>"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),(0,r.kt)("br",null)," Type\uc744 \ud65c\uc131\ud654\ud558\uba74 \ud2b9\uc815 \uc720\ud615\uc73c\ub85c \uc9c0\uc815\ub41c \ud30c\ub77c\ubbf8\ud130\uac00 \ud544\uc694\ud55c \uc561\uc158\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc720\ud615\uc740 \ubaa9\ub85d\uc5d0\uc11c \uc120\ud0dd\ud558\uac70\ub098, \ud639\uc740 \uc6d0\ud558\ub294 \uc720\ud615\uc744 \uc9c1\uc811 \uc791\uc131\ud558\uc5ec \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc544\ub798\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"bool")," \uc120\ud0dd \uc2dc \uc0dd\uc131\ub418\ub294 \ucf54\ub4dc\uc785\ub2c8\ub2e4."),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"CustomContainer1Base.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",C({parentName:"pre"},{className:"language-cpp",metastring:"{11}","{11}":!0}),"/*\n * Custom Actions\n */\nvirtual void action1(bool value);\n")),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"CustomContainer1Base.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",C({parentName:"pre"},{className:"language-cpp"}),"void CustomContainer1Base::action1(bool value)\n{\n\n}\n")),(0,r.kt)("h3",C({},{id:"calling-custom-action-from-interactions"}),"\uc0c1\ud638\uc791\uc6a9\uc5d0\uc11c \ucee4\uc2a4\ud140 \uc561\uc158 \ud638\ucd9c\ud558\uae30"),(0,r.kt)("p",null,"\ucee4\uc2a4\ud140 \uc561\uc158\uc774 \uc0dd\uc131\ub418\uba74 \uc0c1\ud638\uc791\uc6a9 \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uc0dd\uc131\ub41c \uc561\uc158\uc744 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc561\uc158\uc744 \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\uc5d0\uc11c \uc0dd\uc131\ud55c \ud6c4 \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\ub97c \uc2a4\ud06c\ub9b0\uc5d0 \ucd94\uac00\ud588\ub2e4\uba74 \uc544\ub798 \uc774\ubbf8\uc9c0\uc640 \uac19\uc774 \uc2a4\ud06c\ub9b0\uc758 Interaction \ud0ed\uc5d0\uc11c \uc561\uc158\uc744 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/executing-custom-action-from-interaction-4.17.webp",mdxType:"Figure"},"\uc0c1\ud638\uc791\uc6a9\uc5d0\uc11c \ucee4\uc2a4\ud140 \uc561\uc158 \uc2e4\ud589\ud558\uae30"),(0,r.kt)("p",null,"\uc561\uc158\uc744 \uc120\ud0dd\ud55c \ud6c4 \ub3d9\uc77c\ud55c \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108 \uc778\uc2a4\ud134\uc2a4\uac00 \uc5ec\ub7ec \uac1c\uc778 \uacbd\uc6b0\uc5d0\ub294 \ud574\ub2f9 \uad6c\uc131\uc694\uc18c\ub97c \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc778\uc2a4\ud134\uc2a4\uac00 \ud558\ub098 \ubc16\uc5d0 \uc5c6\ub2e4\uba74 \uc790\ub3d9\uc73c\ub85c \uc120\ud0dd\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ucee4\uc2a4\ud140 \uc561\uc158\uc5d0\uc11c Type\uc774 \ud65c\uc131\ud654\ub418\uc5b4 \uc788\uc73c\uba74 \ud30c\ub77c\ubbf8\ud130 \uac12, \uc989 \ubcc0\uc218\ub97c \uc544\ub798 \uc774\ubbf8\uc9c0\uc640 \uac19\uc774 \uc9c0\uc815\ud574\uc57c \ud569\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\uc11c\ub294",(0,r.kt)("inlineCode",{parentName:"p"},"bool")," Type\uc73c\ub85c \uc9c0\uc815\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/parameter-specification-when-executing-custom-action-from-interaction-4.17.webp",mdxType:"Figure"},"\uc0c1\ud638\uc791\uc6a9\uc5d0\uc11c \uc2e4\ud589\ud560 \ucee4\uc2a4\ud140 \uc561\uc158\uc758 \ub9e4\uac1c\ubcc0\uc218 \uc9c0\uc815\ud558\uae30"),(0,r.kt)("h3",C({},{id:"calling-custom-action-from-user-code"}),"\uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc5d0\uc11c \ucee4\uc2a4\ud140 \uc561\uc158 \ud638\ucd9c\ud558\uae30"),(0,r.kt)("p",null,'\ucee4\uc2a4\ud140 \uc561\uc158\uc740 \uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc5d0\uc11c \uc9c1\uc811 \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc544\ub798 \ucf54\ub4dc \uc608\uc81c\uc5d0\uc11c\ub294 \uc774\ub984\uc774 "action1"\uc778 \ucee4\uc2a4\ud140 \uc561\uc158\uc774 \ud3ec\ud568\ub41c \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4. \uc774 \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\ub97c \uc2a4\ud06c\ub9b0\uc5d0 \ucd94\uac00\ud558\uc5ec \uc544\ub798\uc640 \uac19\uc740 \ucf54\ub4dc\uac00 \uc0dd\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4.'),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",C({parentName:"pre"},{className:"language-cpp",metastring:"{4-6}","{4-6}":!0}),"Screen1ViewBase::Screen1ViewBase()\n{\n\n    customContainer11.setXY(50, 11);\n\n    add(customContainer11);\n}\n\nvoid Screen1ViewBase::setupScreen()\n{\n    customContainer11.initialize();\n}\n")),(0,r.kt)("p",null,"\uc0ac\uc6a9\uc790 \ucf54\ub4dc \ud074\ub798\uc2a4 \ud30c\uc77c\uc778 ",(0,r.kt)("inlineCode",{parentName:"p"},"Screen1View"),"\uc5d0\uc11c \uc544\ub798\uc640 \uac19\uc774 \ucee4\uc2a4\ud140 \uc561\uc158 \u201caction1\u201d\uc744 \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub54c \uc0ac\uc6a9\uc790 \ucf54\ub4dc \ud074\ub798\uc2a4 \ud30c\uc77c\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"Screen1ViewBase"),"\uc5d0\uc11c \uc0c1\uc18d\ub429\ub2c8\ub2e4."),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",C({parentName:"pre"},{className:"language-cpp",metastring:"{3}","{3}":!0}),"Screen1View::Screen1View()\n{\n    customContainer11.action1();\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n}\n\nvoid Screen1View::tearDownScreen()\n{\n    Screen1ViewBase::tearDownScreen();\n}\n")),(0,r.kt)("h3",C({},{id:"adding-behaviour-to-custom-actions-from-interactions"}),"\uc0c1\ud638\uc791\uc6a9\uc5d0\uc11c \ucee4\uc2a4\ud140 \uc561\uc158\uc5d0 \ub3d9\uc791 \ucd94\uac00\ud558\uae30"),(0,r.kt)("p",null,"\uc0c1\ud638\uc791\uc6a9 \uc2dc\uc2a4\ud15c\uc744 \uc0ac\uc6a9\ud558\uba74 \ucee4\uc2a4\ud140 \uc561\uc158\uc5d0 \ub3d9\uc791\uc744 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucee4\uc2a4\ud140 \uc561\uc158\uc774 \uc18d\ud55c \uc2a4\ud06c\ub9b0 \ub610\ub294 \ucee4\uc2a4\ud140 \ucee8\ud14c\uc774\ub108\uc758 Interaction \ud0ed\uc5d0\uc11c \uc0c8\ub85c\uc6b4 \uc0c1\ud638\uc791\uc6a9\uc744 \uc0dd\uc131\ud55c \ud6c4 \uc544\ub798 \uc774\ubbf8\uc9c0\uc640 \uac19\uc774 \ucee4\uc2a4\ud140 \uc561\uc158\uc744 \ud2b8\ub9ac\uac70\ub85c \uc120\ud0dd\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions/selecting-custom-action-as-trigger-on-interaction-4.17.webp",mdxType:"Figure"},"\uc0c1\ud638\uc791\uc6a9\uc5d0\uc11c \ucee4\uc2a4\ud140 \uc561\uc158\uc744 \ud2b8\ub9ac\uac70\ub85c \uc120\ud0dd\ud558\uae30"),(0,r.kt)("p",null,"\uc774\uc81c \ucee4\uc2a4\ud140 \uc561\uc158\uc744 \ud638\ucd9c\ud560 \ub54c\ub9c8\ub2e4 \uc0c1\ud638\uc791\uc6a9\uc5d0\uc11c \uc815\uc758\ub41c \ubaa8\ub4e0 \uc561\uc158\uc774 \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,r.kt)("h3",C({},{id:"adding-behaviour-to-custom-actions-from-user-code"}),"\uc0ac\uc6a9\uc790 \ucf54\ub4dc\uc5d0\uc11c \ucee4\uc2a4\ud140 \uc561\uc158\uc5d0 \ub3d9\uc791 \ucd94\uac00\ud558\uae30"),(0,r.kt)("p",null,"\ucee4\uc2a4\ud140 \uc561\uc158\uc740 \uc544\ub798 \uc774\ubbf8\uc9c0\uc640 \uac19\uc774 \uc0ac\uc6a9\uc790 \ucf54\ub4dc \ud074\ub798\uc2a4\uc778 ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomContainer1"),"\uc5d0\uc11c\ub3c4 \uc561\uc158\uc744 \ub36e\uc5b4\uc368\uc11c \ub3d9\uc791\uc744 \uad6c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub54c \uc0ac\uc6a9\uc790 \ucf54\ub4dc \ud074\ub798\uc2a4\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomContainer1Base"),"\uc5d0\uc11c \uc0c1\uc18d\ub429\ub2c8\ub2e4."),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"CustomContainer1.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",C({parentName:"pre"},{className:"language-cpp",metastring:"{9}","{9}":!0}),"class CustomContainer1 : public CustomContainer1Base\n{\npublic:\n    CustomContainer1();\n    virtual ~CustomContainer1() {}\n\n    virtual void initialize();\n\n    void action1();\n\nprotected:\n};\n")),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"CustomContainer1.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",C({parentName:"pre"},{className:"language-cpp",metastring:"{11-14}","{11-14}":!0}),"CustomContainer1::CustomContainer1()\n{\n\n}\n\nvoid CustomContainer1::initialize()\n{\n    CustomContainer1Base::initialize();\n}\n\nvoid CustomContainer1::action1()\n{\n    //Your code here\n}\n")),(0,r.kt)(a.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(o.Z,{to:"../../../tutorials/tutorial-05",mdxType:"Link"},"\uc790\uc2b5\uc11c 5: \ucee4\uc2a4\ud140 \ud2b8\ub9ac\uac70 \ubc0f \uc561\uc158 \uc0dd\uc131\ud558\uae30"))))}x.isMDXComponent=!0}}]);