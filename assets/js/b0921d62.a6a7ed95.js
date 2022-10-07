"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1864],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>d});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(i),d=a,b=c["".concat(s,".").concat(d)]||c[d]||p[d]||l;return i?n.createElement(b,r(r({ref:t},m),{},{components:i})):n.createElement(b,r({ref:t},m))}));function d(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=i.length,r=new Array(l);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var u=2;u<l;u++)r[u]=i[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},1016:(e,t,i)=>{i.d(t,{Z:()=>l});var n=i(7462),a=i(7294);function l(e){let{children:t,...i}=e;return a.createElement("div",(0,n.Z)({role:"tabpanel"},i),t)}},250:(e,t,i)=>{i.d(t,{Z:()=>p});var n=i(7294),a=i(7094),l=i(6010);const r="tabItem_V91s",o="tabItemActive_JsUu",s="tab_ntnM";const u=37,m=39;function p(e){const{lazy:t,defaultValue:i,values:p,groupId:c}=e,{tabGroupChoices:d,setTabGroupChoices:b}=(0,a.U)(),[y,h]=(0,n.useState)(i),k=n.Children.toArray(e.children),g=[];if(null!=c){const e=d[c];null!=e&&e!==y&&p.some((t=>t.value===e))&&h(e)}const C=e=>{const t=e.currentTarget,i=g.indexOf(t),n=p[i].value;h(n),null!=c&&(b(c,n),setTimeout((()=>{(function(e){const{top:t,left:i,bottom:n,right:a}=e.getBoundingClientRect(),{innerHeight:l,innerWidth:r}=window;return t>=0&&a<=r&&n<=l&&i>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((()=>t.classList.remove(o)),2e3))}),150))},f=e=>{let t;switch(e.keyCode){case m:{const i=g.indexOf(e.target)+1;t=g[i]||g[0];break}case u:{const i=g.indexOf(e.target)-1;t=g[i]||g[g.length-1];break}default:return}t.focus()},N=(e,t)=>t.value===e||t.values&&-1!=t.values.indexOf(e);return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:"tabs"},p.map((e=>{let{value:t,label:i}=e;return n.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,l.Z)("tabs__item",r,{"tabs__item--active":y===t}),key:t,ref:e=>e&&g.push(e),onKeyDown:f,onFocus:C,onClick:C},i)}))),t?n.cloneElement(k.find((e=>N(y,e.props))),{className:s}):n.createElement("div",null,k.map(((e,t)=>n.cloneElement(e,{key:t,hidden:!N(y,e.props),className:s})))),n.createElement("br",null))}},297:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var n=i(7462),a=(i(7294),i(3905)),l=i(250),r=i(1016);i(4996);const o={},s="Creating a Custom Ability",u={unversionedId:"dev/items/abilities/create-ability",id:"dev/items/abilities/create-ability",title:"Creating a Custom Ability",description:"Special abilities in SoR are actually implemented as items. They have SetupDetails, Count, and exist in the owner's inventory, just like items. The CustomAbility class provided by RogueLibs inherits from the CustomItem class and provides a default implementation of SetupDetails. Just like with custom items, you can use interfaces to expand your ability's functionality: IAbilityRechargeable, IAbilityChargeable, IAbilityTargetable.",source:"@site/docs/dev/items/abilities/create-ability.mdx",sourceDirName:"dev/items/abilities",slug:"/dev/items/abilities/create-ability",permalink:"/RogueLibs/docs/dev/items/abilities/create-ability",draft:!1,editUrl:"https://github.com/SugarBarrel/RogueLibs/edit/main/website/docs/dev/items/abilities/create-ability.mdx",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Inventory Checks",permalink:"/RogueLibs/docs/dev/items/inventory-checks"},next:{title:"Rechargeable Abilities",permalink:"/RogueLibs/docs/dev/items/abilities/rechargeable-abilities"}},m={},p=[{value:"<code>CustomAbility</code> class",id:"customability",level:2},{value:"<code>SetupDetails</code>",id:"setupdetails",level:3},{value:"Initialization",id:"initialization",level:2},{value:"Unlock Properties",id:"unlock-properties",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-a-custom-ability"},"Creating a Custom Ability"),(0,a.kt)("p",null,"Special abilities in SoR are actually implemented as items. They have ",(0,a.kt)("inlineCode",{parentName:"p"},"SetupDetails"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Count"),", and exist in the owner's inventory, just like items. The ",(0,a.kt)("inlineCode",{parentName:"p"},"CustomAbility")," class provided by RogueLibs inherits from the ",(0,a.kt)("inlineCode",{parentName:"p"},"CustomItem")," class and provides a default implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"SetupDetails"),". Just like with custom items, you can use interfaces to expand your ability's functionality: ",(0,a.kt)("a",{parentName:"p",href:"/RogueLibs/docs/dev/items/abilities/rechargeable-abilities"},(0,a.kt)("inlineCode",{parentName:"a"},"IAbilityRechargeable")),", ",(0,a.kt)("a",{parentName:"p",href:"/RogueLibs/docs/dev/items/abilities/chargeable-abilities"},(0,a.kt)("inlineCode",{parentName:"a"},"IAbilityChargeable")),", ",(0,a.kt)("a",{parentName:"p",href:"/RogueLibs/docs/dev/items/abilities/targetable-abilities"},(0,a.kt)("inlineCode",{parentName:"a"},"IAbilityTargetable")),"."),(0,a.kt)("h2",{id:"customability"},(0,a.kt)("inlineCode",{parentName:"h2"},"CustomAbility")," class"),(0,a.kt)("p",null,"To make a custom ability, you need to create a class deriving from ",(0,a.kt)("inlineCode",{parentName:"p"},"CustomAbility"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomAbility.cs"',title:'"MyCustomAbility.cs"'},"// highlight-next-line\npublic class MyCustomAbility : CustomAbility\n{\n    /* ... */\n}\n")),(0,a.kt)("p",null,"You only need to implement 2 methods: ",(0,a.kt)("inlineCode",{parentName:"p"},"OnAdded")," is called when a character receives this special ability, and ",(0,a.kt)("inlineCode",{parentName:"p"},"OnPressed")," is called when the player uses the ability. There's no ",(0,a.kt)("inlineCode",{parentName:"p"},"OnRemoved")," at the moment, because it's not implemented in SoR."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomAbility.cs"',title:'"MyCustomAbility.cs"'},"public class MyCustomAbility : CustomAbility\n{\n    // highlight-start\n    public override void OnAdded() { /* ... */ }\n    public override void OnPressed() { /* ... */ }\n    // highlight-end\n}\n")),(0,a.kt)("h3",{id:"setupdetails"},(0,a.kt)("inlineCode",{parentName:"h3"},"SetupDetails")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SetupDetails")," is overriden by ",(0,a.kt)("inlineCode",{parentName:"p"},"CustomAbility")," and here's its implementation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"    public override void SetupDetails()\n    {\n        Item.stackable = true;\n        Item.initCount = 0;\n        Item.lowCountThreshold = 100;\n    }\n")),(0,a.kt)("p",null,"This method should work for most abilities, but if you need something more sophisticated, then override it yourself."),(0,a.kt)("h2",{id:"initialization"},"Initialization"),(0,a.kt)("p",null,"Just call the ",(0,a.kt)("inlineCode",{parentName:"p"},"CreateCustomAbility")," method with your ability's type as a parameter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomAbility.cs"',title:'"MyCustomAbility.cs"'},"public class MyCustomAbility : CustomAbility\n{\n    [RLSetup]\n    public static void Setup()\n    {\n        // highlight-next-line\n        RogueLibs.CreateCustomAbility<MyCustomAbility>();\n    }\n}\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"See more about the ",(0,a.kt)("inlineCode",{parentName:"p"},"RLSetup")," attribute ",(0,a.kt)("a",{parentName:"p",href:"../../patching-utilities#rlsetup"},"here"),".")),(0,a.kt)("p",null,"You can set your ability's name and description using ",(0,a.kt)("inlineCode",{parentName:"p"},"WithName")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"WithDescription")," methods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomAbility.cs"',title:'"MyCustomAbility.cs"'},'public class MyCustomAbility : CustomAbility\n{\n    [RLSetup]\n    public static void Setup()\n    {\n        RogueLibs.CreateCustomAbility<MyCustomAbility>()\n            // highlight-start\n            .WithName(new CustomNameInfo("My Custom Ability"))\n            .WithDescription(new CustomNameInfo("My Custom Ability is very cool and does a lot of great stuff"));\n            // highlight-end\n    }\n}\n')),(0,a.kt)("p",null,"You can do the same with sprites and unlocks:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomAbility.cs"',title:'"MyCustomAbility.cs"'},'public class MyCustomAbility : CustomAbility\n{\n    [RLSetup]\n    public static void Setup()\n    {\n        RogueLibs.CreateCustomAbility<MyCustomAbility>()\n            .WithName(new CustomNameInfo("My Custom Ability"))\n            .WithDescription(new CustomNameInfo("My Custom Ability is very cool and does a lot of great stuff"));\n            // highlight-start\n            .WithSprite(Properties.Resources.MyCustomAbility)\n            .WithUnlock(new AbilityUnlock { UnlockCost = 10, CharacterCreationCost = 5 });\n            // highlight-end\n    }\n}\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"See ",(0,a.kt)("a",{parentName:"p",href:"../../names/custom-names"},"Custom Names"),", ",(0,a.kt)("a",{parentName:"p",href:"../../custom-sprites"},"Custom Sprites")," for more info.")),(0,a.kt)("h2",{id:"unlock-properties"},"Unlock Properties"),(0,a.kt)("p",null,"You can use the following properties when initializing ",(0,a.kt)("inlineCode",{parentName:"p"},"AbilityUnlock"),"s:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"UnlockCost")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"0")),(0,a.kt)("td",{parentName:"tr",align:null},"Unlock cost of the ability, in nuggets. If set to 0, it will unlock automatically, once all prerequisites are unlocked.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"CharacterCreationCost")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"1")),(0,a.kt)("td",{parentName:"tr",align:null},"Cost of the ability in Character Creation, in points.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"IsAvailable")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:null},"Determines whether the ability is available in the ... Well, there's no menu for custom abilities at the moment, but if there was, this property would determine whether it's available in that menu.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"IsAvailableInCC")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:null},"Determines whether the ability is available in the Character Creation menu.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Prerequisites")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Determines what unlocks must be unlocked in order to unlock this ability.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Recommendations")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Just shows these unlocks in a separate Recommendations paragraph in the menus.")))),(0,a.kt)("p",null,"Other properties ",(0,a.kt)("strong",{parentName:"p"},"should not")," be used during initialization."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(l.Z,{defaultValue:"",values:[{label:"",value:""}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title=""',title:'""'},"")))))}d.isMDXComponent=!0}}]);