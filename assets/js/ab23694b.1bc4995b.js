(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[150],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return o}});var a=n(2263),r=n(3919);function i(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,l=void 0!==o&&o,s=i.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},9309:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(2122),r=n(9756),i=n(7294),o=["children"];function l(e){var t=e.children,n=(0,r.Z)(e,o);return i.createElement("div",(0,a.Z)({role:"tabpanel"},n),t)}},8952:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(7294),r=n(9443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(6010),l="tabItem_2O3c",s="tabItemActive_Fpbe",c="tab_1pgU";var u=37,m=39;var p=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,p=e.values,d=e.groupId,f=e.className,k=i(),v=k.tabGroupChoices,h=k.setTabGroupChoices,g=(0,a.useState)(r),N=g[0],b=g[1],y=a.Children.toArray(e.children),w=[];if(null!=d){var C=v[d];null!=C&&C!==N&&p.some((function(e){return e.value===C}))&&b(C)}var U=function(e){var t=e.currentTarget,n=w.indexOf(t),a=p[n].value;b(a),null!=d&&(h(d,a),setTimeout((function(){var e,n,a,r,i,o,l,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,c=o.innerWidth,n>=0&&i<=c&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case m:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case u:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()},x=function(e,t){return t.value===e||t.values&&-1!=t.values.indexOf(e)};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},f)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":N===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:O,onFocus:U,onClick:U},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return x(N,e.props)}))[0],{className:c}):a.createElement("div",null,y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:!x(N,e.props),className:c})}))),a.createElement("br",null))}},8047:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=(n(8952),n(9309),n(4996),["components"]),l={},s="Custom Unlocks",c={unversionedId:"unlocks/custom-unlocks",id:"unlocks/custom-unlocks",isDocsHomePage:!1,title:"Custom Unlocks",description:"UnlockWrapper class",source:"@site/docs/unlocks/custom-unlocks.md",sourceDirName:"unlocks",slug:"/unlocks/custom-unlocks",permalink:"/RogueLibs/docs/unlocks/custom-unlocks",editUrl:"https://github.com/Abbysssal/RogueLibs/edit/master/website/docs/unlocks/custom-unlocks.md",version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Creating a Custom Effect",permalink:"/RogueLibs/docs/traits/create-effect"},next:{title:"Overriding Default Behavior",permalink:"/RogueLibs/docs/unlocks/overriding-behavior"}},u=[{value:"<code>UnlockWrapper</code> class",id:"unlockwrapper",children:[]},{value:"<code>DisplayedUnlock</code> class",id:"displayedunlock",children:[]},{value:"Unlock classes",id:"unlock-classes",children:[]},{value:"Initialization",id:"initialization",children:[]}],m={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"custom-unlocks"},"Custom Unlocks"),(0,i.kt)("h2",{id:"unlockwrapper"},(0,i.kt)("inlineCode",{parentName:"h2"},"UnlockWrapper")," class"),(0,i.kt)("p",null,"All of the unlocks in the game are wrapped in a more flexible class - ",(0,i.kt)("inlineCode",{parentName:"p"},"UnlockWrapper"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"UnlockWrapper")," provides methods to get the unlock's name, description, image and other stuff."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You probably shouldn't implement ",(0,i.kt)("inlineCode",{parentName:"p"},"UnlockWrapper")," directly. Use the classes described later on the page."))),(0,i.kt)("h2",{id:"displayedunlock"},(0,i.kt)("inlineCode",{parentName:"h2"},"DisplayedUnlock")," class"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DisplayedUnlock")," derives from the ",(0,i.kt)("inlineCode",{parentName:"p"},"UnlockWrapper")," class. It provides methods to display the unlock in the in-game menus."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You shouldn't implement ",(0,i.kt)("inlineCode",{parentName:"p"},"DisplayedUnlock")," directly either. Use the classes described later on the page."))),(0,i.kt)("h2",{id:"unlock-classes"},"Unlock classes"),(0,i.kt)("p",null,"RogueLibs provides the following classes that you can derive from:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ItemUnlock")," - for items;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AbilityUnlock")," - for abilities;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TraitUnlock")," - for traits;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MutatorUnlock")," - for mutators;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AgentUnlock")," - for agents;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BigQuestUnlock")," - for agent Big Quests;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ExtraUnlock")," - for achievements and other stuff;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FloorUnlock")," - for floor unlocks;")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"There's also a couple of classes that are in RogueLibs only for compatibility reasons."))),(0,i.kt)("h2",{id:"initialization"},"Initialization"),(0,i.kt)("p",null,"You can initialize your unlocks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomItem.cs"',title:'"MyCustomItem.cs"'},'public class MyCustomItem : CustomItem\n{\n    [RLSetup]\n    public static void Setup()\n    {\n        RogueLibs.CreateCustomItem<MyCustomItem>();\n            .WithName(new CustomNameInfo("My Custom Item"))\n            .WithDescription(new CustomNameInfo("My Custom Item is very cool and does a lot of great stuff"));\n            .WithSprite(Properties.Resources.MyCustomItem)\n            // highlight-next-line\n            .WithUnlock(new ItemUnlock\n            {\n                UnlockCost = 10,\n                CharacterCreationCost = 5,\n                LoadoutCost = 4,\n            });\n    }\n}\n')),(0,i.kt)("p",null,"Or you can just initialize them directly (in case of mutators):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'RogueLibs.CreateCustomUnlock(new MutatorUnlock("MyMutator"),\n    new CustomNameInfo("Mutator Name"),\n    new CustomNameInfo("Mutator Description"));\n')),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This API is subject to change. It will be replaced with a ",(0,i.kt)("inlineCode",{parentName:"p"},"MutatorBuilder")," or something like that."))))}p.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);