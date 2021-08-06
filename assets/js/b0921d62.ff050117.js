(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[864],{2472:function(t,e,i){"use strict";i.r(e),i.d(e,{frontMatter:function(){return m},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var a=i(2122),n=i(9756),l=(i(7294),i(3905)),s=i(8952),r=i(9309),o=(i(4996),["components"]),m={},u="Creating a Custom Ability",p={unversionedId:"dev/items/abilities/create-ability",id:"dev/items/abilities/create-ability",isDocsHomePage:!1,title:"Creating a Custom Ability",description:"CustomAbility class",source:"@site/docs/dev/items/abilities/create-ability.mdx",sourceDirName:"dev/items/abilities",slug:"/dev/items/abilities/create-ability",permalink:"/RogueLibs/docs/dev/items/abilities/create-ability",editUrl:"https://github.com/Abbysssal/RogueLibs/edit/master/website/docs/dev/items/abilities/create-ability.mdx",version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Inventory Checks",permalink:"/RogueLibs/docs/dev/items/inventory-checks"},next:{title:"Rechargeable Abilities",permalink:"/RogueLibs/docs/dev/items/abilities/rechargeable-abilities"}},d=[{value:"<code>CustomAbility</code> class",id:"customability",children:[{value:"<code>SetupDetails</code>",id:"setupdetails",children:[]}]},{value:"Initialization",id:"initialization",children:[]},{value:"Unlock Properties",id:"unlock-properties",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:d};function h(t){var e=t.components,i=(0,n.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"creating-a-custom-ability"},"Creating a Custom Ability"),(0,l.kt)("h2",{id:"customability"},(0,l.kt)("inlineCode",{parentName:"h2"},"CustomAbility")," class"),(0,l.kt)("p",null,"Special abilities are actually really similar to items. They have ",(0,l.kt)("inlineCode",{parentName:"p"},"SetupDetails"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Count")," and exist in the owner's inventory, just like items. To create one, you need to create a class deriving from ",(0,l.kt)("inlineCode",{parentName:"p"},"CustomAbility")," (which derives from ",(0,l.kt)("inlineCode",{parentName:"p"},"CustomItem"),"):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomAbility.cs"',title:'"MyCustomAbility.cs"'},"// highlight-next-line\npublic class MyCustomAbility : CustomAbility\n{\n    /* ... */\n}\n")),(0,l.kt)("p",null,"You only need to implement 2 methods: ",(0,l.kt)("inlineCode",{parentName:"p"},"OnAdded")," is called when a character receives this special ability, and ",(0,l.kt)("inlineCode",{parentName:"p"},"OnPressed")," is called when the player uses the ability. There's no ",(0,l.kt)("inlineCode",{parentName:"p"},"OnRemoved")," at the moment, because it's not implemented in SoR."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomAbility.cs"',title:'"MyCustomAbility.cs"'},"public class MyCustomAbility : CustomAbility\n{\n    // highlight-start\n    public override void OnAdded() { /* ... */ }\n    public override void OnPressed() { /* ... */ }\n    // highlight-end\n}\n")),(0,l.kt)("h3",{id:"setupdetails"},(0,l.kt)("inlineCode",{parentName:"h3"},"SetupDetails")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SetupDetails")," is overriden by ",(0,l.kt)("inlineCode",{parentName:"p"},"CustomAbility")," and here's its implementation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"    public override void SetupDetails()\n    {\n        Item.stackable = true;\n        Item.initCount = 0;\n        Item.lowCountThreshold = 100;\n    }\n")),(0,l.kt)("p",null,"This method should work for most abilities, but if you need something more sophisticated, then override it yourself."),(0,l.kt)("h2",{id:"initialization"},"Initialization"),(0,l.kt)("p",null,"Just call the ",(0,l.kt)("inlineCode",{parentName:"p"},"CreateCustomAbility")," method with your ability's type as a parameter:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomAbility.cs"',title:'"MyCustomAbility.cs"'},"public class MyCustomAbility : CustomAbility\n{\n    [RLSetup]\n    public static void Setup()\n    {\n        // highlight-next-line\n        RogueLibs.CreateCustomAbility<MyCustomAbility>();\n    }\n}\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"See more about the ",(0,l.kt)("inlineCode",{parentName:"p"},"RLSetup")," attribute ",(0,l.kt)("a",{parentName:"p",href:"../../patching-utilities#rlsetup"},"here"),"."))),(0,l.kt)("p",null,"You can set your ability's name and description using ",(0,l.kt)("inlineCode",{parentName:"p"},"WithName")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"WithDescription")," methods:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomAbility.cs"',title:'"MyCustomAbility.cs"'},'public class MyCustomAbility : CustomAbility\n{\n    [RLSetup]\n    public static void Setup()\n    {\n        RogueLibs.CreateCustomAbility<MyCustomAbility>()\n            // highlight-start\n            .WithName(new CustomNameInfo("My Custom Ability"))\n            .WithDescription(new CustomNameInfo("My Custom Ability is very cool and does a lot of great stuff"));\n            // highlight-end\n    }\n}\n')),(0,l.kt)("p",null,"You can do the same with sprites and unlocks:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomAbility.cs"',title:'"MyCustomAbility.cs"'},'public class MyCustomAbility : CustomAbility\n{\n    [RLSetup]\n    public static void Setup()\n    {\n        RogueLibs.CreateCustomAbility<MyCustomAbility>()\n            .WithName(new CustomNameInfo("My Custom Ability"))\n            .WithDescription(new CustomNameInfo("My Custom Ability is very cool and does a lot of great stuff"));\n            // highlight-start\n            .WithSprite(Properties.Resources.MyCustomAbility)\n            .WithUnlock(new AbilityUnlock { UnlockCost = 10, CharacterCreationCost = 5 });\n            // highlight-end\n    }\n}\n')),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"See ",(0,l.kt)("a",{parentName:"p",href:"../../names/custom-names"},"Custom Names"),", ",(0,l.kt)("a",{parentName:"p",href:"../../custom-sprites"},"Custom Sprites")," for more info."))),(0,l.kt)("h2",{id:"unlock-properties"},"Unlock Properties"),(0,l.kt)("p",null,"You can use the following properties when initializing ",(0,l.kt)("inlineCode",{parentName:"p"},"AbilityUnlock"),"s:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"UnlockCost")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null},"Unlock cost of the ability, in nuggets. If set to 0, it will unlock automatically, once all prerequisites are unlocked.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CharacterCreationCost")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")),(0,l.kt)("td",{parentName:"tr",align:null},"Cost of the ability in Character Creation, in points.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"IsAvailable")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"Determines whether the ability is available in the ... Well, there's no menu for custom abilities at the moment, but if there was, this property would determine whether it's available in that menu.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"IsAvailableInCC")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"Determines whether the ability is available in the Character Creation menu.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Prerequisites")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Determines what unlocks must be unlocked in order to unlock this ability.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Recommendations")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Just shows these unlocks in a separate Recommendations paragraph in the menus.")))),(0,l.kt)("p",null,"Other properties should not be used during initialization."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)(s.Z,{defaultValue:"",values:[{label:"",value:""}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title=""',title:'""'},"")))))}h.isMDXComponent=!0}}]);