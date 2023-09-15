"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5838],{4214:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(614);function o(e){let{children:t,language:n}=e;return a.createElement(r.Z,{className:"language-"+(n||"csharp")},t.replace(/\t/g,"    "))}},1016:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7462),r=n(7294);function o(e){let{children:t,...n}=e;return r.createElement("div",(0,a.Z)({role:"tabpanel"},n),t)}},5878:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7294),r=n(6550),o=n(1980),i=n(7392),l=n(12);function s(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??s(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const i=(0,r.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(i.location.search);t.set(l,e),i.replace({...i.location,search:t.toString()})}),[l,i])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=u(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[p,d]=m({queryString:n,groupId:r}),[b,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,l.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),f=(()=>{const e=p??b;return c({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!c({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),g(e)}),[d,g,o]),tabValues:o}}var d=n(6010);const b={tabItem:"tabItem_V91s",tabItemActive:"tabItemActive_JsUu",blink:"blink_ZPVS",tab:"tab_ntnM"};const g={left:37,right:39};function f(e){const{lazy:t,defaultValue:n,values:r,groupId:o}=e,i=a.Children.toArray(e.children),{tabValues:l,selectedValue:s,selectValue:u}=p({children:i,defaultValue:n,values:r,groupId:o}),c=[],m=e=>{const t=e.currentTarget,n=r[c.indexOf(t)].value;u(n),null!=o&&setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:r}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:i}=window;return t>=0&&r<=i&&a<=o&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(b.tabItemActive),setTimeout((()=>t.classList.remove(b.tabItemActive)),2e3))}),150)},f=e=>{let t;switch(e.keyCode){case g.right:{const n=c.indexOf(e.target)+1;t=c[n]||c[0];break}case g.left:{const n=c.indexOf(e.target)-1;t=c[n]||c[c.length-1];break}default:return}t.focus()},h=(e,t)=>t.value===e||t.values&&-1!=t.values.indexOf(e);return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:"tabs"},r.map((e=>{let{value:t,label:n}=e;return a.createElement("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,className:(0,d.Z)("tabs__item",b.tabItem,{"tabs__item--active":s===t}),key:t,ref:e=>e&&c.push(e),onKeyDown:f,onFocus:m,onClick:m},n)}))),t?a.cloneElement(i.find((e=>h(s,e.props))),{className:b.tab}):a.createElement("div",null,i.map(((e,t)=>a.cloneElement(e,{key:t,hidden:!h(s,e.props),className:b.tab})))),a.createElement("br",null))}},8038:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>p,default:()=>I,frontMatter:()=>m,metadata:()=>d,toc:()=>g});var a=n(7462),r=(n(7294),n(3905)),o=n(5878),i=n(1016),l=(n(4996),n(4214));const s='namespace RogueLibsCore.Test\n{\n    [ItemCategories(RogueCategories.Usable, RogueCategories.Social)]\n    public class JokeBook : CustomItem, IItemUsable\n    {\n        [RLSetup]\n        public static void Setup()\n        {\n            RogueLibs.CreateCustomItem<JokeBook>()\n                .WithName(new CustomNameInfo("Joke Book"))\n                .WithDescription(new CustomNameInfo("Always wanted to be a Comedian? Now you can! (kind of)"))\n                .WithSprite(Properties.Resources.JokeBook)\n                .WithUnlock(new ItemUnlock\n                {\n                    UnlockCost = 10,\n                    LoadoutCost = 5,\n                    CharacterCreationCost = 3,\n                    Prerequisites = { VanillaAgents.Comedian + "_BQ" },\n                });\n        }\n\n        public override void SetupDetails()\n        {\n            Item.itemType = ItemTypes.Tool;\n            Item.itemValue = 15;\n            Item.initCount = 10;\n            Item.rewardCount = 10;\n            Item.stackable = true;\n            Item.hasCharges = true;\n            Item.goesInToolbar = true;\n        }\n        public bool UseItem()\n        {\n            if (Owner!.statusEffects.makingJoke) return false;\n\n            string prev = Owner.specialAbility;\n            Owner.specialAbility = VanillaAbilities.Joke;\n            Owner.statusEffects.PressedSpecialAbility();\n            Owner.specialAbility = prev;\n\n            Count--;\n            return true;\n        }\n    }\n}\n',u='namespace RogueLibsCore.Test\n{\n    [ItemCategories(RogueCategories.Drugs, RogueCategories.Melee, RogueCategories.Usable)]\n    public class AdrenalineShot : CustomItem, IItemUsable\n    {\n        [RLSetup]\n        public static void Setup()\n        {\n            RogueLibs.CreateCustomItem<AdrenalineShot>()\n                .WithName(new CustomNameInfo("Adrenaline Shot"))\n                .WithDescription(new CustomNameInfo("Gives you a ton of boosts for a short period of time."))\n                .WithSprite(Properties.Resources.AdrenalineShot)\n                .WithUnlock(new ItemUnlock\n                {\n                    UnlockCost = 10,\n                    LoadoutCost = 5,\n                    CharacterCreationCost = 3,\n                    Prerequisites = { VanillaItems.RagePoison, VanillaItems.Antidote },\n                });\n\n            RogueLibs.CreateCustomName("AdrenalineElectronic", NameTypes.Dialogue,\n                new CustomNameInfo("I don\'t have a circulatory system."));\n        }\n\n        public override void SetupDetails()\n        {\n            Item.itemType = ItemTypes.Consumable;\n            Item.healthChange = 20;\n            Item.itemValue = 60;\n            Item.initCount = 1;\n            Item.rewardCount = 2;\n            Item.stackable = true;\n            Item.goesInToolbar = true;\n        }\n        [IgnoreChecks("FullHealth")]\n        public bool UseItem()\n        {\n            if (Owner!.electronic)\n            {\n                Owner.SayDialogue("AdrenalineElectronic");\n                gc.audioHandler.Play(Owner, VanillaAudio.CantDo);\n                return false;\n            }\n            Owner.AddEffect<Adrenaline>();\n            gc.audioHandler.Play(Owner, VanillaAudio.UseSyringe);\n            Count--;\n            return true;\n        }\n    }\n}\n',c='using UnityEngine;\n\nnamespace RogueLibsCore.Test\n{\n    [ItemCategories(RogueCategories.Technology, RogueCategories.Usable, RogueCategories.Stealth)]\n    public class WildBypasser : CustomItem, IItemUsable\n    {\n        [RLSetup]\n        public static void Setup()\n        {\n            RogueLibs.CreateCustomItem<WildBypasser>()\n                .WithName(new CustomNameInfo("Wild Bypasser"))\n                .WithDescription(new CustomNameInfo("Warps you in the direction you\'re facing. Teleports through any amount of walls."))\n                .WithSprite(Properties.Resources.WildBypasser)\n                .WithUnlock(new ItemUnlock\n                {\n                    UnlockCost = 10,\n                    LoadoutCost = 7,\n                    CharacterCreationCost = 3,\n                    Prerequisites = { VanillaItems.WallBypasser },\n                });\n        }\n\n        public override void SetupDetails()\n        {\n            Item.itemType = ItemTypes.Tool;\n            Item.itemValue = 60;\n            Item.initCount = 2;\n            Item.rewardCount = 3;\n            Item.stackable = true;\n            Item.goesInToolbar = true;\n        }\n        public bool UseItem()\n        {\n            Vector3 position = Owner!.agentHelperTr.localPosition = Vector3.zero;\n            TileData tileData;\n            int limit = 0;\n            do\n            {\n                position.x += 0.64f;\n                Owner.agentHelperTr.localPosition = position;\n                tileData = gc.tileInfo.GetTileData(Owner.agentHelperTr.position);\n\n            } while ((gc.tileInfo.IsOverlapping(Owner.agentHelperTr.position, "Anything")\n                || tileData.wallMaterial != wallMaterialType.None) && limit++ < 250);\n\n            if (limit > 250)\n            {\n                gc.audioHandler.Play(Owner, VanillaAudio.CantDo);\n                return false;\n            }\n\n            Owner.SpawnParticleEffect("Spawn", Owner.tr.position);\n            Owner.Teleport(Owner.agentHelperTr.position, false, true);\n            Owner.rb.velocity = Vector2.zero;\n\n            if (!(Owner.HasTrait(VanillaTraits.IntrusionArtist)\n                    && gc.percentChance(Owner.DetermineLuck(80, "ThiefToolsMayNotSubtract", true)))\n                && !(Owner.HasTrait(VanillaTraits.IntrusionArtist2)\n                    && gc.percentChance(Owner.DetermineLuck(40, "ThiefToolsMayNotSubtract", true))))\n                Count--;\n\n            Owner.SpawnParticleEffect("Spawn", Owner.tr.position, false);\n            gc.audioHandler.Play(Owner, VanillaAudio.Spawn);\n            return true;\n        }\n    }\n}\n',m={},p="\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b",d={unversionedId:"dev/items/usable-items",id:"dev/items/usable-items",title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b",description:"\u0414\u0435\u043b\u0430\u0435\u043c \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u043c\u0438",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/dev/items/usable-items.mdx",sourceDirName:"dev/items",slug:"/dev/items/usable-items",permalink:"/RogueLibs/ru/docs/dev/items/usable-items",draft:!1,editUrl:"https://github.com/SugarBarrel/RogueLibs/edit/main/website/docs/dev/items/usable-items.mdx",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"\u0421\u043e\u0437\u0434\u0430\u0451\u043c \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0439 \u043f\u0440\u0435\u0434\u043c\u0435\u0442",permalink:"/RogueLibs/ru/docs/dev/items/create-item"},next:{title:"\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b",permalink:"/RogueLibs/ru/docs/dev/items/combinable-items"}},b={},g=[{value:"\u0414\u0435\u043b\u0430\u0435\u043c \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u043c\u0438",id:"making-usable",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"examples",level:2}],f={toc:g},h="wrapper";function I(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435-\u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b"),(0,r.kt)("h2",{id:"making-usable"},"\u0414\u0435\u043b\u0430\u0435\u043c \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u043c\u0438"),(0,r.kt)("p",null,"\u041f\u0440\u043e\u0441\u0442\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0439\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ",(0,r.kt)("inlineCode",{parentName:"p"},"IItemUsable")," \u0432 \u043a\u043b\u0430\u0441\u0441\u0435 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyUsableItem.cs"',title:'"MyUsableItem.cs"'},"// highlight-next-line\npublic class MyUsableItem : CustomItem, IItemUsable\n{\n    // highlight-next-line\n    public bool UseItem() { /* ... */ }\n}\n")),(0,r.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"UseItem")," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442, \u0431\u044b\u043b \u043b\u0438 \u043f\u0440\u0435\u0434\u043c\u0435\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d. \u0412\u043e\u0437\u0432\u0440\u0430\u0442 ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u043e\u0438\u0433\u0440\u044b\u0432\u0430\u0435\u0442 \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u044e. \u041f\u0440\u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0438\u0433\u0440\u0430\u0442\u044c \u0437\u0432\u0443\u043a ",(0,r.kt)("inlineCode",{parentName:"p"},'"CantDo"'),", \u0438, \u043c\u043e\u0436\u0435\u0442, \u0437\u0430\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430 \u0441\u043a\u0430\u0437\u0430\u0442\u044c, \u043f\u043e\u0447\u0435\u043c\u0443 \u043f\u0440\u0435\u0434\u043c\u0435\u0442 \u043d\u0435\u043b\u044c\u0437\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'        if (cantUse)\n        {\n            gc.audioHandler.Play(Owner, "CantDo");\n            Owner.SayDialogue("CantUseItemBecause...");\n            // \u043d\u0435 \u0437\u0430\u0431\u0443\u0434\u044c\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u0438\u0430\u043b\u043e\u0433 \u0441 \u044d\u0442\u0438\u043c \u0430\u0439\u0434\u0438\n            return false;\n        }\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u041e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0437\u0430 \u0443\u043c\u0435\u043d\u044c\u0448\u0435\u043d\u0438\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"Count")," \u043b\u0435\u0436\u0438\u0442 \u043d\u0430 \u0432\u0430\u0441. \u0422\u0430\u043a \u0447\u0442\u043e, \u043d\u0435 \u0437\u0430\u0431\u044b\u0432\u0430\u0439\u0442\u0435 \u0434\u0435\u043b\u0430\u0442\u044c \u044d\u0442\u043e.")),(0,r.kt)("h2",{id:"examples"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,r.kt)(o.Z,{defaultValue:"jokebook",values:[{label:"\u0421\u0431\u043e\u0440\u043d\u0438\u043a \u0448\u0443\u0442\u043e\u043a",value:"jokebook"},{label:"\u0410\u0434\u0440\u0435\u043d\u0430\u043b\u0438\u043d",value:"adrenalineshot"},{label:"\u0423\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0440\u043e\u0445\u043e\u0434 \u0441\u043a\u0432\u043e\u0437\u044c \u0441\u0442\u0435\u043d\u044b",value:"wildbypasser"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"jokebook",mdxType:"TabItem"},(0,r.kt)("p",null,"\u041f\u0440\u043e\u0441\u0442\u043e\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u043f\u0440\u0435\u0434\u043c\u0435\u0442, \u0434\u0430\u044e\u0449\u0438\u0439 \u0438\u0433\u0440\u043e\u043a\u0443 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c \u0428\u0443\u0442\u043a\u0430."),(0,r.kt)(l.Z,{mdxType:"CodeSnippet"},s)),(0,r.kt)(i.Z,{value:"adrenalineshot",mdxType:"TabItem"},(0,r.kt)("p",null,'\u041f\u0440\u043e\u0441\u0442\u043e\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u043f\u0440\u0435\u0434\u043c\u0435\u0442, \u0434\u0430\u044e\u0449\u0438\u0439 \u0438\u0433\u0440\u043e\u043a\u0443 \u044d\u0444\u0444\u0435\u043a\u0442 "\u0410\u0434\u0440\u0435\u043d\u0430\u043b\u0438\u043d". \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u044d\u0444\u0444\u0435\u043a\u0442\u0430 \u0410\u0434\u0440\u0435\u043d\u0430\u043b\u0438\u043d \u0432 ',(0,r.kt)("a",{parentName:"p",href:"../traits/create-effect#examples"},"\u0421\u043e\u0437\u0434\u0430\u0451\u043c \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0439 \u044d\u0444\u0444\u0435\u043a\u0442: \u041f\u0440\u0438\u043c\u0435\u0440\u044b"),"."),(0,r.kt)(l.Z,{mdxType:"CodeSnippet"},u)),(0,r.kt)(i.Z,{value:"wildbypasser",mdxType:"TabItem"},(0,r.kt)("p",null,"\u0411\u043e\u043b\u0435\u0435 \u0441\u043b\u043e\u0436\u043d\u044b\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u043f\u0440\u0435\u0434\u043c\u0435\u0442, \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043d\u0430 \u043a\u043e\u0434\u0435 \u041f\u0440\u043e\u0445\u043e\u0434\u0430 \u0441\u043a\u0432\u043e\u0437\u044c \u0441\u0442\u0435\u043d\u044b (\u0441\u043c. ",(0,r.kt)("inlineCode",{parentName:"p"},"ItemFunctions.UseItem"),")."),(0,r.kt)(l.Z,{mdxType:"CodeSnippet"},c))))}I.isMDXComponent=!0}}]);