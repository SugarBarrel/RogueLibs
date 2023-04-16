"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1864],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,b=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return a?i.createElement(b,r(r({ref:t},c),{},{components:a})):i.createElement(b,r({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:n,r[1]=o;for(var u=2;u<l;u++)r[u]=a[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1016:(e,t,a)=>{a.d(t,{Z:()=>l});var i=a(7462),n=a(7294);function l(e){let{children:t,...a}=e;return n.createElement("div",(0,i.Z)({role:"tabpanel"},a),t)}},5878:(e,t,a)=>{a.d(t,{Z:()=>y});var i=a(7294),n=a(6550),l=a(1980),r=a(7392),o=a(12);function s(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:i,default:n}}=e;return{value:t,label:a,attributes:i,default:n}}))}function u(e){const{values:t,children:a}=e;return(0,i.useMemo)((()=>{const e=t??s(a);return function(e){const t=(0,r.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,n.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,i.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function p(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=u(e),[r,s]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=a.find((e=>e.default))??a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:l}))),[p,d]=m({queryString:a,groupId:n}),[b,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,o.Nk)(a);return[n,(0,i.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),y=(()=>{const e=p??b;return c({value:e,tabValues:l})?e:null})();(0,i.useLayoutEffect)((()=>{y&&s(y)}),[y]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),h(e)}),[d,h,l]),tabValues:l}}var d=a(6010);const b={tabItem:"tabItem_V91s",tabItemActive:"tabItemActive_JsUu",blink:"blink_ZPVS",tab:"tab_ntnM"};const h={left:37,right:39};function y(e){const{lazy:t,defaultValue:a,values:n,groupId:l}=e,r=i.Children.toArray(e.children),{tabValues:o,selectedValue:s,selectValue:u}=p({children:r,defaultValue:a,values:n,groupId:l}),c=[],m=e=>{const t=e.currentTarget,a=n[c.indexOf(t)].value;u(a),null!=l&&setTimeout((()=>{(function(e){const{top:t,left:a,bottom:i,right:n}=e.getBoundingClientRect(),{innerHeight:l,innerWidth:r}=window;return t>=0&&n<=r&&i<=l&&a>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(b.tabItemActive),setTimeout((()=>t.classList.remove(b.tabItemActive)),2e3))}),150)},y=e=>{let t;switch(e.keyCode){case h.right:{const a=c.indexOf(e.target)+1;t=c[a]||c[0];break}case h.left:{const a=c.indexOf(e.target)-1;t=c[a]||c[c.length-1];break}default:return}t.focus()},k=(e,t)=>t.value===e||t.values&&-1!=t.values.indexOf(e);return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:"tabs"},n.map((e=>{let{value:t,label:a}=e;return i.createElement("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,className:(0,d.Z)("tabs__item",b.tabItem,{"tabs__item--active":s===t}),key:t,ref:e=>e&&c.push(e),onKeyDown:y,onFocus:m,onClick:m},a)}))),t?i.cloneElement(r.find((e=>k(s,e.props))),{className:b.tab}):i.createElement("div",null,r.map(((e,t)=>i.cloneElement(e,{key:t,hidden:!k(s,e.props),className:b.tab})))),i.createElement("br",null))}},297:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var i=a(7462),n=(a(7294),a(3905)),l=a(5878),r=a(1016);a(4996);const o={},s="Creating a Custom Ability",u={unversionedId:"dev/items/abilities/create-ability",id:"dev/items/abilities/create-ability",title:"Creating a Custom Ability",description:"Special abilities in SoR are actually implemented as items. They have SetupDetails, Count, and exist in the owner's inventory, just like items. The CustomAbility class provided by RogueLibs inherits from the CustomItem class and provides a default implementation of SetupDetails. Just like with custom items, you can use interfaces to expand your ability's functionality: IAbilityRechargeable, IAbilityChargeable, IAbilityTargetable.",source:"@site/docs/dev/items/abilities/create-ability.mdx",sourceDirName:"dev/items/abilities",slug:"/dev/items/abilities/create-ability",permalink:"/RogueLibs/docs/dev/items/abilities/create-ability",draft:!1,editUrl:"https://github.com/SugarBarrel/RogueLibs/edit/main/website/docs/dev/items/abilities/create-ability.mdx",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Inventory Checks",permalink:"/RogueLibs/docs/dev/items/inventory-checks"},next:{title:"Rechargeable Abilities",permalink:"/RogueLibs/docs/dev/items/abilities/rechargeable-abilities"}},c={},m=[{value:"<code>CustomAbility</code> class",id:"customability",level:2},{value:"<code>SetupDetails</code>",id:"setupdetails",level:3},{value:"Initialization",id:"initialization",level:2},{value:"Unlock Properties",id:"unlock-properties",level:2},{value:"Examples",id:"examples",level:2}],p={toc:m},d="wrapper";function b(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"creating-a-custom-ability"},"Creating a Custom Ability"),(0,n.kt)("p",null,"Special abilities in SoR are actually implemented as items. They have ",(0,n.kt)("inlineCode",{parentName:"p"},"SetupDetails"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Count"),", and exist in the owner's inventory, just like items. The ",(0,n.kt)("inlineCode",{parentName:"p"},"CustomAbility")," class provided by RogueLibs inherits from the ",(0,n.kt)("inlineCode",{parentName:"p"},"CustomItem")," class and provides a default implementation of ",(0,n.kt)("inlineCode",{parentName:"p"},"SetupDetails"),". Just like with custom items, you can use interfaces to expand your ability's functionality: ",(0,n.kt)("a",{parentName:"p",href:"/RogueLibs/docs/dev/items/abilities/rechargeable-abilities"},(0,n.kt)("inlineCode",{parentName:"a"},"IAbilityRechargeable")),", ",(0,n.kt)("a",{parentName:"p",href:"/RogueLibs/docs/dev/items/abilities/chargeable-abilities"},(0,n.kt)("inlineCode",{parentName:"a"},"IAbilityChargeable")),", ",(0,n.kt)("a",{parentName:"p",href:"/RogueLibs/docs/dev/items/abilities/targetable-abilities"},(0,n.kt)("inlineCode",{parentName:"a"},"IAbilityTargetable")),"."),(0,n.kt)("h2",{id:"customability"},(0,n.kt)("inlineCode",{parentName:"h2"},"CustomAbility")," class"),(0,n.kt)("p",null,"To make a custom ability, you need to create a class deriving from ",(0,n.kt)("inlineCode",{parentName:"p"},"CustomAbility"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomAbility.cs"',title:'"MyCustomAbility.cs"'},"// highlight-next-line\npublic class MyCustomAbility : CustomAbility\n{\n    /* ... */\n}\n")),(0,n.kt)("p",null,"You only need to implement 2 methods: ",(0,n.kt)("inlineCode",{parentName:"p"},"OnAdded")," is called when a character receives this special ability, and ",(0,n.kt)("inlineCode",{parentName:"p"},"OnPressed")," is called when the player uses the ability. There's no ",(0,n.kt)("inlineCode",{parentName:"p"},"OnRemoved")," at the moment, because it's not implemented in SoR."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomAbility.cs"',title:'"MyCustomAbility.cs"'},"public class MyCustomAbility : CustomAbility\n{\n    // highlight-start\n    public override void OnAdded() { /* ... */ }\n    public override void OnPressed() { /* ... */ }\n    // highlight-end\n}\n")),(0,n.kt)("h3",{id:"setupdetails"},(0,n.kt)("inlineCode",{parentName:"h3"},"SetupDetails")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"SetupDetails")," is overriden by ",(0,n.kt)("inlineCode",{parentName:"p"},"CustomAbility")," and here's its implementation:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"    public override void SetupDetails()\n    {\n        Item.stackable = true;\n        Item.initCount = 0;\n        Item.lowCountThreshold = 100;\n    }\n")),(0,n.kt)("p",null,"This method should work for most abilities, but if you need something more sophisticated, then override it yourself."),(0,n.kt)("h2",{id:"initialization"},"Initialization"),(0,n.kt)("p",null,"Just call the ",(0,n.kt)("inlineCode",{parentName:"p"},"CreateCustomAbility")," method with your ability's type as a parameter:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomAbility.cs"',title:'"MyCustomAbility.cs"'},"public class MyCustomAbility : CustomAbility\n{\n    [RLSetup]\n    public static void Setup()\n    {\n        // highlight-next-line\n        RogueLibs.CreateCustomAbility<MyCustomAbility>();\n    }\n}\n")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"See more about the ",(0,n.kt)("inlineCode",{parentName:"p"},"RLSetup")," attribute ",(0,n.kt)("a",{parentName:"p",href:"../../patching-utilities#rlsetup"},"here"),".")),(0,n.kt)("p",null,"You can set your ability's name and description using ",(0,n.kt)("inlineCode",{parentName:"p"},"WithName")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"WithDescription")," methods:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomAbility.cs"',title:'"MyCustomAbility.cs"'},'public class MyCustomAbility : CustomAbility\n{\n    [RLSetup]\n    public static void Setup()\n    {\n        RogueLibs.CreateCustomAbility<MyCustomAbility>()\n            // highlight-start\n            .WithName(new CustomNameInfo("My Custom Ability"))\n            .WithDescription(new CustomNameInfo("My Custom Ability is very cool and does a lot of great stuff"));\n            // highlight-end\n    }\n}\n')),(0,n.kt)("p",null,"You can do the same with sprites and unlocks:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomAbility.cs"',title:'"MyCustomAbility.cs"'},'public class MyCustomAbility : CustomAbility\n{\n    [RLSetup]\n    public static void Setup()\n    {\n        RogueLibs.CreateCustomAbility<MyCustomAbility>()\n            .WithName(new CustomNameInfo("My Custom Ability"))\n            .WithDescription(new CustomNameInfo("My Custom Ability is very cool and does a lot of great stuff"));\n            // highlight-start\n            .WithSprite(Properties.Resources.MyCustomAbility)\n            .WithUnlock(new AbilityUnlock { UnlockCost = 10, CharacterCreationCost = 5 });\n            // highlight-end\n    }\n}\n')),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"See ",(0,n.kt)("a",{parentName:"p",href:"../../names/custom-names"},"Custom Names"),", ",(0,n.kt)("a",{parentName:"p",href:"../../custom-sprites"},"Custom Sprites")," for more info.")),(0,n.kt)("h2",{id:"unlock-properties"},"Unlock Properties"),(0,n.kt)("p",null,"You can use the following properties when initializing ",(0,n.kt)("inlineCode",{parentName:"p"},"AbilityUnlock"),"s:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"UnlockCost")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"0")),(0,n.kt)("td",{parentName:"tr",align:null},"Unlock cost of the ability, in nuggets. If set to 0, it will unlock automatically, once all prerequisites are unlocked.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"CharacterCreationCost")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"1")),(0,n.kt)("td",{parentName:"tr",align:null},"Cost of the ability in Character Creation, in points.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"IsAvailable")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:null},"Determines whether the ability is available in the ... Well, there's no menu for custom abilities at the moment, but if there was, this property would determine whether it's available in that menu.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"IsAvailableInCC")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:null},"Determines whether the ability is available in the Character Creation menu.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Prerequisites")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Determines what unlocks must be unlocked in order to unlock this ability.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Recommendations")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Just shows these unlocks in a separate Recommendations paragraph in the menus.")))),(0,n.kt)("p",null,"Other properties ",(0,n.kt)("strong",{parentName:"p"},"should not")," be used during initialization."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)(l.Z,{defaultValue:"",values:[{label:"",value:""}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title=""',title:'""'},"")))))}b.isMDXComponent=!0}}]);