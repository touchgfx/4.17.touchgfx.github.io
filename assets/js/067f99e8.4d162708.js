(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5507],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),p=i,f=h["".concat(c,".").concat(p)]||h[p]||d[p]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2083:function(e,t,n){"use strict";var r=n(67294);class i extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=i},51948:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return f},metadata:function(){return m},toc:function(){return g},default:function(){return y}});var r=n(3905),i=n(2083),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&d(e,n,t[n]);if(c)for(var n of c(t))u.call(t,n)&&d(e,n,t[n]);return e};const p={id:"screen-definition-and-mvp",title:"The Screen Concept"},f=void 0,m={unversionedId:"development/ui-development/software-architecture/screen-definition-and-mvp",id:"development/ui-development/software-architecture/screen-definition-and-mvp",isDocsHomePage:!1,title:"The Screen Concept",description:'In TouchGFX applications, you can have any number of "Screens". A screen in TouchGFX is a logical grouping of UI elements (widgets) and their associated business logic. A screen consists of two classes: a View class containing all the widgets that are shown on this screen, and a Presenter containing business logic for this screen.',source:"@site/docs/development/ui-development/software-architecture/screen-definition-and-mvp.mdx",sourceDirName:"development/ui-development/software-architecture",slug:"/development/ui-development/software-architecture/screen-definition-and-mvp",permalink:"/4.17/docs/development/ui-development/software-architecture/screen-definition-and-mvp",version:"current",frontMatter:{id:"screen-definition-and-mvp",title:"The Screen Concept"},sidebar:"docs",previous:{title:"Model-View-Presenter Design Pattern",permalink:"/4.17/docs/development/ui-development/software-architecture/model-view-presenter-design-pattern"},next:{title:"Code Structure",permalink:"/4.17/docs/development/ui-development/software-architecture/code-structure"}},g=[{value:"Defining Screens",id:"defining-screens",children:[]},{value:"Currently Active Screen",id:"currently-active-screen",children:[]},{value:"Model-View-Presenter in TouchGFX",id:"model-view-presenter-in-touchgfx",children:[{value:"Model",id:"model",children:[]},{value:"View",id:"view",children:[]},{value:"Presenter",id:"presenter",children:[]}]}],w={toc:g};function y(e){var t,n=e,{components:o}=n,d=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=h(h({},w),d),a(t,s({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,'In TouchGFX applications, you can have any number of "Screens". A screen in TouchGFX is a logical grouping of UI elements (widgets) and their associated business logic. A screen consists of two classes: a View class containing all the widgets that are shown on this screen, and a Presenter containing business logic for this screen.'),(0,r.kt)("p",null,"You can choose to implement your entire application within the context of a single screen (meaning you only have one View and one Presenter), but we recommend splitting unrelated parts of your UI into different screens, for two reasons:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"TouchGFX includes a memory allocation scheme that automatically allocates the necessary RAM needed for the most RAM-consuming screen. Only this amount will be allocated, and this RAM block is reused across all screens in your application."),(0,r.kt)("li",{parentName:"ol"},"Having several screens makes your UI code much easier to maintain.")),(0,r.kt)("h3",h({},{id:"defining-screens"}),"Defining Screens"),(0,r.kt)("p",null,"There are no exact rules as to how your application should be divided into screens, but there are certain guidelines that might assist you in deciding what screens should make up your specific application. Areas of the UI that are visually and functionally unrelated should be kept in different screens."),(0,r.kt)("p",null,'If you consider a very simple thermostat application which has a main temperature readout display and a configuration menu, it would be a good idea to create a "Main Screen" for the temperature readout and a "Settings Screen" for showing the configuration menu.'),(0,r.kt)("p",null,"The View for the Main Screen would contain widgets for a background image, a few text areas for showing temperature and a button for switching to the configuration menu. The View for the configuration on the other hand would probably contain widgets for showing a list of configuration options and a different background image. If the configuration menu is capable of editing many different types of settings (dates, names with keyboard, temperatures, units etc.), this screen will grow large in complexity."),(0,r.kt)("p",null,"In that case it might be beneficial to further divide the configuration menu into one screen showing the overall tree of menu options, and a different screen for editing a specific value. But this is something you will learn as your project progresses."),(0,r.kt)("h3",h({},{id:"currently-active-screen"}),"Currently Active Screen"),(0,r.kt)("p",null,"Because of the way TouchGFX allocates memory for screens (only allocating for biggest View and biggest Presenter), only one View and one Presenter can be active at a time. So if your thermostat application is displaying the temperature readout, then the configuration menu screen is not running anywhere, and in fact is not even allocated."),(0,r.kt)("p",null,'If events are received from the "backend" (all your non-UI code that does the actual work of the thermostat) or from hardware peripherals, then these events can be delegated to the currently active screen.'),(0,r.kt)("p",null,"This provides a useful separation of concerns because some events will be of interest only to certain screens in your application. For instance, a received event notifying of a change in current temperature could be handled only by the main screen (which would update the text area showing current temperature), whereas the configuration screen could simply discard this event as it is of no interest since current temperature is not being displayed in this screen."),(0,r.kt)("h2",h({},{id:"model-view-presenter-in-touchgfx"}),"Model-View-Presenter in TouchGFX"),(0,r.kt)("p",null,"TouchGFX follows the Model-View-Presenter (MVP) design pattern as described in ",(0,r.kt)("a",h({parentName:"p"},{href:"model-view-presenter-design-pattern"}),"Model-View-Presenter Design Pattern"),". The TouchGFX screen concept ties into the overall Model-View-Presenter architecture by classes that inherit from the View and Presenter classes in TouchGFX. So when adding a new screen to your application in TouchGFX Designer it creates both a new specific View class and a Presenter class to represent that particular screen."),(0,r.kt)("p",null,"The content and responsibility of the MVP classes in a TouchGFX application are as follows."),(0,r.kt)("h3",h({},{id:"model"}),"Model"),(0,r.kt)("p",null,"The Model class is a singleton class which is always alive and has two purposes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Store state information for the UI. The Views and Presenters are deallocated when switching screen, so they cannot be used to store information which should be kept across screen transitions. Use the Model for this instead."),(0,r.kt)("li",{parentName:"ol"},"Act as an interface towards the backend system, relaying events to and from the currently active screen.")),(0,r.kt)("p",null,"The Model class is automatically setup to have a pointer to the currently active presenter. When changes occur in the Model the current active Presenter is notified of the change. This is done via methods in the ModelListener interface in the application."),(0,r.kt)("p",null,"New applications generated by the Designer will automatically have a Model class ready to be used by the UI."),(0,r.kt)("h3",h({},{id:"view"}),"View"),(0,r.kt)("p",null,"The View class (or more specifically, a class that derives from the TouchGFX View class) contains the widgets that are shown in this view as member objects. It also contains a ",(0,r.kt)(i.Z,{mdxType:"InlineCode"},"setupScreen")," and a ",(0,r.kt)(i.Z,{mdxType:"InlineCode"},"tearDownScreen")," function, which gets automatically called when this screen is entered/exited. Typically you would configure your widgets in the ",(0,r.kt)(i.Z,{mdxType:"InlineCode"},"setupScreen")," function."),(0,r.kt)("p",null,"Your View will also contain a pointer to the associated Presenter. This pointer is set up automatically by the framework. Using this pointer you can communicate UI events like button clicks to the Presenter."),(0,r.kt)("h3",h({},{id:"presenter"}),"Presenter"),(0,r.kt)("p",null,'Your Presenter class (again, a class that derives from the TouchGFX Presenter class) is responsible for the business logic of the currently active screen. It will receive "backend" events from the Model, and UI events from the View and decide which action to take. For instance, if an alarm event is received from the Model, the Presenter might decide to tell the View that an alarm popup dialog should be displayed.'))}y.isMDXComponent=!0}}]);