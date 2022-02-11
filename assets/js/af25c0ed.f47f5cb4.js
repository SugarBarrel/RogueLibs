"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1590],{4214:function(t,e,a){a.d(e,{Z:function(){return r}});var n=a(7294),i=a(1736);function r(t){var e=t.children,a=t.language;return n.createElement(i.Z,{className:"language-"+(a||"csharp")},e.replace(/\t/g,"    "))}},1016:function(t,e,a){a.d(e,{Z:function(){return l}});var n=a(7462),i=a(3366),r=a(7294),o=["children"];function l(t){var e=t.children,a=(0,i.Z)(t,o);return r.createElement("div",(0,n.Z)({role:"tabpanel"},a),e)}},250:function(t,e,a){a.d(e,{Z:function(){return d}});var n=a(7294),i=a(5773),r=a(6010),o="tabItem_V91s",l="tabItemActive_JsUu",s="tab_ntnM";var u=37,m=39;function d(t){var e=t.lazy,a=t.defaultValue,d=t.values,p=t.groupId,c=(0,i.UB)(),h=c.tabGroupChoices,k=c.setTabGroupChoices,g=(0,n.useState)(a),C=g[0],N=g[1],v=n.Children.toArray(t.children),b=[];if(null!=p){var f=h[p];null!=f&&f!==C&&d.some((function(t){return t.value===f}))&&N(f)}var T=function(t){var e=t.currentTarget,a=b.indexOf(e),n=d[a].value;N(n),null!=p&&(k(p,n),setTimeout((function(){var t,a,n,i,r,o,s,u;(t=e.getBoundingClientRect(),a=t.top,n=t.left,i=t.bottom,r=t.right,o=window,s=o.innerHeight,u=o.innerWidth,a>=0&&r<=u&&i<=s&&n>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(l),setTimeout((function(){return e.classList.remove(l)}),2e3))}),150))},y=function(t){var e;switch(t.keyCode){case m:var a=b.indexOf(t.target)+1;e=b[a]||b[0];break;case u:var n=b.indexOf(t.target)-1;e=b[n]||b[b.length-1];break;default:return}e.focus()},w=function(t,e){return e.value===t||e.values&&-1!=e.values.indexOf(t)};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:"tabs"},d.map((function(t){var e=t.value,a=t.label;return n.createElement("li",{role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,className:(0,r.Z)("tabs__item",o,{"tabs__item--active":C===e}),key:e,ref:function(t){return t&&b.push(t)},onKeyDown:y,onFocus:T,onClick:T},a)}))),e?n.cloneElement(v.find((function(t){return w(C,t.props)})),{className:s}):n.createElement("div",null,v.map((function(t,e){return n.cloneElement(t,{key:e,hidden:!w(C,t.props),className:s})}))),n.createElement("br",null))}},7352:function(t,e,a){a.r(e),a.d(e,{contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return c}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=a(250),l=a(1016),s=(a(4996),a(4214)),u=["components"],m={},d="Creating a Custom Trait",p={unversionedId:"dev/traits/create-trait",id:"dev/traits/create-trait",title:"Creating a Custom Trait",description:"CustomTrait class",source:"@site/docs/dev/traits/create-trait.mdx",sourceDirName:"dev/traits",slug:"/dev/traits/create-trait",permalink:"/RogueLibs/docs/dev/traits/create-trait",editUrl:"https://github.com/SugarBarrel/RogueLibs/edit/main/website/docs/dev/traits/create-trait.mdx",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Targetable Abilities",permalink:"/RogueLibs/docs/dev/items/abilities/targetable-abilities"},next:{title:"Creating a Custom Effect",permalink:"/RogueLibs/docs/dev/traits/create-effect"}},c=[{value:"<code>CustomTrait</code> class",id:"customtrait",children:[],level:2},{value:"Updating",id:"updating",children:[],level:2},{value:"Initialization",id:"initialization",children:[],level:2},{value:"Unlock Properties",id:"unlock-properties",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2}],h={toc:c};function k(t){var e=t.components,a=(0,i.Z)(t,u);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-a-custom-trait"},"Creating a Custom Trait"),(0,r.kt)("h2",{id:"customtrait"},(0,r.kt)("inlineCode",{parentName:"h2"},"CustomTrait")," class"),(0,r.kt)("p",null,"To make a custom trait, you need to create a class deriving from ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomTrait"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomTrait.cs"',title:'"MyCustomTrait.cs"'},"// highlight-next-line\npublic class MyCustomTrait : CustomTrait\n{\n    /* ... */\n}\n")),(0,r.kt)("p",null,"There are 2 methods that you need to implement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomTrait.cs"',title:'"MyCustomTrait.cs"'},"public class MyCustomTrait : CustomTrait\n{\n    // highlight-start\n    public override void OnAdded() { /* ... */ }\n    public override void OnRemoved() { /* ... */ }\n    // highlight-end\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"OnAdded")," is called when the trait is added to a character, and ",(0,r.kt)("inlineCode",{parentName:"p"},"OnRemoved")," is called when it's removed from a character."),(0,r.kt)("h2",{id:"updating"},"Updating"),(0,r.kt)("p",null,"You can make your trait updateable by implementing the ",(0,r.kt)("inlineCode",{parentName:"p"},"ITraitUpdateable")," interface:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomTrait.cs"',title:'"MyCustomTrait.cs"'},"public class MyCustomTrait : CustomTrait, ITraitUpdateable\n{\n    public void OnUpdated(TraitUpdatedArgs e) { /* ... */ }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"OnUpdated")," works like Unity's ",(0,r.kt)("inlineCode",{parentName:"p"},"Update"),", but with a settable interval (default is 1 second):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"    public void OnUpdated(TraitUpdatedArgs e)\n    {\n        // highlight-next-line\n        e.UpdateDelay = 0.5f; // 2 updates per second\n        /* ... */\n    }\n")),(0,r.kt)("h2",{id:"initialization"},"Initialization"),(0,r.kt)("p",null,"Just call the ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateCustomTrait")," method with your trait's type as a parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomTrait.cs"',title:'"MyCustomTrait.cs"'},"public class MyCustomTrait : CustomTrait\n{\n    [RLSetup]\n    public static void Setup()\n    {\n        // highlight-next-line\n        RogueLibs.CreateCustomTrait<MyCustomTrait>();\n    }\n}\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"See more about the ",(0,r.kt)("inlineCode",{parentName:"p"},"RLSetup")," attribute ",(0,r.kt)("a",{parentName:"p",href:"../patching-utilities#rlsetup"},"here"),"."))),(0,r.kt)("p",null,"You can set your trait's name and description using ",(0,r.kt)("inlineCode",{parentName:"p"},"WithName")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"WithDescription")," methods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomTrait.cs"',title:'"MyCustomTrait.cs"'},'public class MyCustomTrait : CustomTrait\n{\n    [RLSetup]\n    public static void Setup()\n    {\n        RogueLibs.CreateCustomTrait<MyCustomTrait>()\n            // highlight-start\n            .WithName(new CustomNameInfo("My Custom Trait"))\n            .WithDescription(new CustomNameInfo("My Custom Trait is very cool and does a lot of great stuff"));\n            // highlight-end\n    }\n}\n')),(0,r.kt)("p",null,"You can do the same with sprites and unlocks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomTrait.cs"',title:'"MyCustomTrait.cs"'},'public class MyCustomTrait : CustomTrait\n{\n    [RLSetup]\n    public static void Setup()\n    {\n        RogueLibs.CreateCustomTrait<MyCustomTrait>();\n            .WithName(new CustomNameInfo("My Custom Trait"))\n            .WithDescription(new CustomNameInfo("My Custom Trait is very cool and does a lot of great stuff"));\n            // highlight-start\n            // the sprite will be displayed only in the menus (optional)\n            .WithSprite(Properties.Resources.MyCustomTrait)\n            .WithUnlock(new TraitUnlock { UnlockCost = 10, CharacterCreationCost = 5 });\n            // highlight-end\n    }\n}\n')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"See ",(0,r.kt)("a",{parentName:"p",href:"../names/custom-names"},"Custom Names"),", ",(0,r.kt)("a",{parentName:"p",href:"../custom-sprites"},"Custom Sprites")," for more info."))),(0,r.kt)("h2",{id:"unlock-properties"},"Unlock Properties"),(0,r.kt)("p",null,"You can use the following properties when initializing ",(0,r.kt)("inlineCode",{parentName:"p"},"TraitUnlock"),"s:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UnlockCost")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:null},"Unlock cost of the trait, in nuggets. If set to 0, it will unlock automatically, once all prerequisites are unlocked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CharacterCreationCost")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:null},"Cost of the trait in Character Creation, in points.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IsAvailable")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"Determines whether the trait is available in the Traits menu.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IsAvailableInCC")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"Determines whether the trait is available in the Character Creation menu.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Cancellations")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Determines what traits cannot co-exist with this trait.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Prerequisites")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Determines what unlocks must be unlocked in order to unlock this trait.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Recommendations")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Just shows these unlocks in a separate Recommendations paragraph in the menus.")))),(0,r.kt)("p",null,"Other properties should not be used during initialization."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)(o.Z,{defaultValue:"smoker",values:[{label:"Smoker",value:"smoker"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"smoker",mdxType:"TabItem"},(0,r.kt)(s.Z,{mdxType:"CodeSnippet"},'using System;\n\nnamespace RogueLibsCore.Test\n{\n    public class Smoker : CustomTrait, ITraitUpdateable\n    {\n        [RLSetup]\n        public static void Setup()\n        {\n            RogueLibs.CreateCustomTrait<Smoker>()\n                .WithName(new CustomNameInfo("Smoker"))\n                .WithDescription(new CustomNameInfo("Randomly cough, alerting enemies"))\n                .WithUnlock(new TraitUnlock { CharacterCreationCost = -4 });\n\n            RogueLibs.CreateCustomName("Smoker_Cough1", NameTypes.Dialogue, new CustomNameInfo("*Cough*"));\n            RogueLibs.CreateCustomName("Smoker_Cough2", NameTypes.Dialogue, new CustomNameInfo("*Cough* *CouGH*"));\n            RogueLibs.CreateCustomName("Smoker_Cough3", NameTypes.Dialogue, new CustomNameInfo("*coUGH* *COUgh*"));\n        }\n\n        public override void OnAdded() { }\n        public override void OnRemoved() { }\n        public void OnUpdated(TraitUpdatedArgs e)\n        {\n            e.UpdateDelay = 5f;\n\n            int rnd = new Random().Next(0, 5);\n            if (rnd == 0)\n            {\n                rnd = new Random().Next(3) + 1;\n                Owner.SayDialogue($"Smoker_Cough{rnd}");\n                gc.audioHandler.Play(Owner, VanillaAudio.AgentAnnoyed);\n\n                Noise noise = gc.spawnerMain.SpawnNoise(Owner.tr.position, 1f, Owner, "Attract", Owner);\n                noise.distraction = true;\n            }\n        }\n    }\n}\n'))))}k.isMDXComponent=!0}}]);