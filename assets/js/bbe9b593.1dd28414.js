"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2289],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1016:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7462),o=n(7294);function r(e){let{children:t,...n}=e;return o.createElement("div",(0,a.Z)({role:"tabpanel"},n),t)}},5878:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(7294),o=n(6550),r=n(1980),l=n(7392),i=n(12);function s(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??s(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const l=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,r._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(l.location.search);t.set(i,e),l.replace({...l.location,search:t.toString()})}),[i,l])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,r=u(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[p,d]=m({queryString:n,groupId:o}),[f,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,i.Nk)(n);return[o,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),k=(()=>{const e=p??f;return c({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!c({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),h(e)}),[d,h,r]),tabValues:r}}var d=n(6010);const f={tabItem:"tabItem_V91s",tabItemActive:"tabItemActive_JsUu",blink:"blink_ZPVS",tab:"tab_ntnM"};const h={left:37,right:39};function k(e){const{lazy:t,defaultValue:n,values:o,groupId:r}=e,l=a.Children.toArray(e.children),{tabValues:i,selectedValue:s,selectValue:u}=p({children:l,defaultValue:n,values:o,groupId:r}),c=[],m=e=>{const t=e.currentTarget,n=o[c.indexOf(t)].value;u(n),null!=r&&setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:o}=e.getBoundingClientRect(),{innerHeight:r,innerWidth:l}=window;return t>=0&&o<=l&&a<=r&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(f.tabItemActive),setTimeout((()=>t.classList.remove(f.tabItemActive)),2e3))}),150)},k=e=>{let t;switch(e.keyCode){case h.right:{const n=c.indexOf(e.target)+1;t=c[n]||c[0];break}case h.left:{const n=c.indexOf(e.target)-1;t=c[n]||c[c.length-1];break}default:return}t.focus()},b=(e,t)=>t.value===e||t.values&&-1!=t.values.indexOf(e);return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:"tabs"},o.map((e=>{let{value:t,label:n}=e;return a.createElement("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,className:(0,d.Z)("tabs__item",f.tabItem,{"tabs__item--active":s===t}),key:t,ref:e=>e&&c.push(e),onKeyDown:k,onFocus:m,onClick:m},n)}))),t?a.cloneElement(l.find((e=>b(s,e.props))),{className:f.tab}):a.createElement("div",null,l.map(((e,t)=>a.cloneElement(e,{key:t,hidden:!b(s,e.props),className:f.tab})))),a.createElement("br",null))}},1183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));n(5878),n(1016),n(4996);const r={},l="Custom Unlocks",i={unversionedId:"dev/unlocks/custom-unlocks",id:"dev/unlocks/custom-unlocks",title:"Custom Unlocks",description:"Custom unlocks allow your custom content to be accessed through vanilla menus. Unlike other hooks, unlocks persist throughout the game, and get destroyed and created only when initially loading the game or changing save slots. RogueLibs also creates wrappers around vanilla unlocks, to ensure the compatibility of your unlocks with the vanilla ones.",source:"@site/docs/dev/unlocks/custom-unlocks.mdx",sourceDirName:"dev/unlocks",slug:"/dev/unlocks/custom-unlocks",permalink:"/RogueLibs/docs/dev/unlocks/custom-unlocks",draft:!1,editUrl:"https://github.com/SugarBarrel/RogueLibs/edit/main/website/docs/dev/unlocks/custom-unlocks.mdx",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Creating a Custom Disaster",permalink:"/RogueLibs/docs/dev/disasters/create-disaster"},next:{title:"Configuring Unlocks",permalink:"/RogueLibs/docs/dev/unlocks/configuring-unlocks"}},s={},u=[{value:"Unlock classes",id:"unlock-classes",level:2},{value:"Initialization",id:"initialization",level:2}],c={toc:u},m="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-unlocks"},"Custom Unlocks"),(0,o.kt)("p",null,"Custom unlocks allow your custom content to be accessed through vanilla menus. Unlike other hooks, unlocks persist throughout the game, and get destroyed and created only when initially loading the game or changing save slots. RogueLibs also creates wrappers around vanilla unlocks, to ensure the compatibility of your unlocks with the vanilla ones."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"UnlockWrapper")," is a flexible wrapper around a ",(0,o.kt)("inlineCode",{parentName:"p"},"Unlock")," class, and provides methods to get the unlock's name, description, image and other stuff. It is the base class for any and all custom or vanilla unlocks."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DisplayedUnlock")," derives from the ",(0,o.kt)("inlineCode",{parentName:"p"},"UnlockWrapper")," class. It provides methods to display the unlock in the in-game menus. You can alter or augment your unlock's name and description, and even use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/StyledText.html"},"Unity's rich text formatting"),". Note, that all rich text formatting tags have to be closed (this was introduced in one of the Unity versions)."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"You probably shouldn't implement ",(0,o.kt)("inlineCode",{parentName:"p"},"UnlockWrapper")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"DisplayedUnlock")," directly. Use the classes described below.")),(0,o.kt)("h2",{id:"unlock-classes"},"Unlock classes"),(0,o.kt)("p",null,"RogueLibs provides the following classes that you can derive from:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ItemUnlock")," - for items;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AbilityUnlock")," - for abilities;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TraitUnlock")," - for traits;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MutatorUnlock")," - for mutators;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AgentUnlock")," - for agents;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BigQuestUnlock")," - for agent Big Quests;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ExtraUnlock")," - for achievements and other stuff;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"FloorUnlock")," - for floor unlocks;")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"There's also a couple of classes that are in RogueLibs only for compatibility reasons.")),(0,o.kt)("h2",{id:"initialization"},"Initialization"),(0,o.kt)("p",null,"You can initialize your unlocks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomItem.cs"',title:'"MyCustomItem.cs"'},'public class MyCustomItem : CustomItem\n{\n    [RLSetup]\n    public static void Setup()\n    {\n        RogueLibs.CreateCustomItem<MyCustomItem>()\n            .WithName(new CustomNameInfo("My Custom Item"))\n            .WithDescription(new CustomNameInfo("My Custom Item is very cool and does a lot of great stuff"))\n            .WithSprite(Properties.Resources.MyCustomItem)\n            // highlight-next-line\n            .WithUnlock(new ItemUnlock\n            {\n                UnlockCost = 10,\n                CharacterCreationCost = 5,\n                LoadoutCost = 4,\n            });\n    }\n}\n')),(0,o.kt)("p",null,"Or you can just initialize them directly (like in case of mutators):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'RogueLibs.CreateCustomUnlock(new MutatorUnlock("MyMutator"))\n    .WithName(new CustomNameInfo("Mutator Name"))\n    .WithDescription(new CustomNameInfo("Mutator Description"));\n')))}p.isMDXComponent=!0}}]);