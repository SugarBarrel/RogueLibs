(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[872],{4214:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var a=n(7294),i=n(1756);function o(t){var e=t.children,n=t.language;return a.createElement(i.Z,{className:"language-"+(n||"csharp")},e.replace(/\t/g,"    "))}},9309:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var a=n(2122),i=n(9756),o=n(7294),r=["children"];function s(t){var e=t.children,n=(0,i.Z)(t,r);return o.createElement("div",(0,a.Z)({role:"tabpanel"},n),e)}},8952:function(t,e,n){"use strict";n.d(e,{Z:function(){return p}});var a=n(7294),i=n(9443);var o=function(){var t=(0,a.useContext)(i.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},r=n(6010),s="tabItem_2O3c",l="tabItemActive_Fpbe",u="tab_1pgU";var m=37,c=39;var p=function(t){var e=t.lazy,n=t.block,i=t.defaultValue,p=t.values,d=t.groupId,b=t.className,g=o(),h=g.tabGroupChoices,f=g.setTabGroupChoices,C=(0,a.useState)(i),k=C[0],I=C[1],w=a.Children.toArray(t.children),v=[];if(null!=d){var y=h[d];null!=y&&y!==k&&p.some((function(t){return t.value===y}))&&I(y)}var T=function(t){var e=t.currentTarget,n=v.indexOf(e),a=p[n].value;I(a),null!=d&&(f(d,a),setTimeout((function(){var t,n,a,i,o,r,s,u;(t=e.getBoundingClientRect(),n=t.top,a=t.left,i=t.bottom,o=t.right,r=window,s=r.innerHeight,u=r.innerWidth,n>=0&&o<=u&&i<=s&&a>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(l),setTimeout((function(){return e.classList.remove(l)}),2e3))}),150))},N=function(t){var e,n;switch(t.keyCode){case c:var a=v.indexOf(t.target)+1;n=v[a]||v[0];break;case m:var i=v.indexOf(t.target)-1;n=v[i]||v[v.length-1]}null==(e=n)||e.focus()},S=function(t,e){return e.value===t||e.values&&-1!=e.values.indexOf(t)};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},b)},p.map((function(t){var e=t.value,n=t.label;return a.createElement("li",{role:"tab",tabIndex:k===e?0:-1,"aria-selected":k===e,className:(0,r.Z)("tabs__item",s,{"tabs__item--active":k===e}),key:e,ref:function(t){return v.push(t)},onKeyDown:N,onFocus:T,onClick:T},n)}))),e?(0,a.cloneElement)(w.filter((function(t){return S(k,t.props)}))[0],{className:u}):a.createElement("div",null,w.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:!S(k,t.props),className:u})}))),a.createElement("br",null))}},9944:function(t,e,n){"use strict";n.r(e),n.d(e,{contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return d}});var a=n(2122),i=n(9756),o=(n(7294),n(3905)),r=n(8952),s=n(9309),l=(n(4996),n(4214)),u=["components"],m={},c="Usable Items",p={unversionedId:"items/usable-items",id:"items/usable-items",isDocsHomePage:!1,title:"Usable Items",description:"Making items usable",source:"@site/docs/items/usable-items.mdx",sourceDirName:"items",slug:"/items/usable-items",permalink:"/RogueLibs/docs/items/usable-items",editUrl:"https://github.com/Abbysssal/RogueLibs/edit/master/website/docs/items/usable-items.mdx",version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Creating a Custom Item",permalink:"/RogueLibs/docs/items/create-item"},next:{title:"Combinable Items",permalink:"/RogueLibs/docs/items/combinable-items"}},d=[{value:"Making items usable",id:"making-usable",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:d};function g(t){var e=t.components,n=(0,i.Z)(t,u);return(0,o.kt)("wrapper",(0,a.Z)({},b,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usable-items"},"Usable Items"),(0,o.kt)("h2",{id:"making-usable"},"Making items usable"),(0,o.kt)("p",null,"Just implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"IItemUsable")," interface in your item's class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyUsableItem.cs"',title:'"MyUsableItem.cs"'},"// highlight-next-line\npublic class MyUsableItem : CustomItem, IItemUsable\n{\n    // highlight-next-line\n    public bool UseItem() { /* ... */ }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"UseItem"),"'s return value indicates whether the item was successfully used. Returning ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," will also play an animation. When returning ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", you can play a ",(0,o.kt)("inlineCode",{parentName:"p"},'"CantDo"')," sound, and optionally make the current owner say why the item cannot be used:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'        if (cantUse)\n        {\n            gc.audioHandler.Play(Owner, "CantDo");\n            Owner.SayDialogue("CantUseItemBecause...");\n            // don\'t forget to create a dialogue with that id\n            return false;\n        }\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You're responsible for decrementing the item's ",(0,o.kt)("inlineCode",{parentName:"p"},"Count"),". So, don't forget to do that."))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(r.Z,{defaultValue:"jokebook",values:[{label:"Joke Book",value:"jokebook"},{label:"Adrenaline Shot",value:"adrenalineshot"},{label:"Wild Bypasser",value:"wildbypasser"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"jokebook",mdxType:"TabItem"},(0,o.kt)("p",null,"A simple usable item that allows the player to use the Joke ability."),(0,o.kt)(l.Z,{mdxType:"CodeSnippet"},'namespace RogueLibsCore.Test\n{\n\t[ItemCategories(RogueCategories.Usable, RogueCategories.Social)]\n\tpublic class JokeBook : CustomItem, IItemUsable\n\t{\n\t\t[RLSetup]\n\t\tpublic static void Setup()\n\t\t{\n\t\t\tRogueLibs.CreateCustomItem<JokeBook>()\n\t\t\t\t.WithName(new CustomNameInfo("Joke Book"))\n\t\t\t\t.WithDescription(new CustomNameInfo("Always wanted to be a Comedian? Now you can! (kind of)"))\n\t\t\t\t.WithSprite(Properties.Resources.JokeBook)\n\t\t\t\t.WithUnlock(new ItemUnlock\n\t\t\t\t{\n\t\t\t\t\tUnlockCost = 10,\n\t\t\t\t\tCharacterCreationCost = 3,\n\t\t\t\t\tLoadoutCost = 3,\n\t\t\t\t\tPrerequisites = { "Comedian_BQ" },\n\t\t\t\t});\n\t\t}\n\n\t\tpublic override void SetupDetails()\n\t\t{\n\t\t\tItem.itemType = ItemTypes.Tool;\n\t\t\tItem.itemValue = 40;\n\t\t\tItem.initCount = 10;\n\t\t\tItem.rewardCount = 10;\n\t\t\tItem.stackable = true;\n\t\t\tItem.hasCharges = true;\n\t\t\tItem.goesInToolbar = true;\n\t\t}\n\t\tpublic bool UseItem()\n\t\t{\n\t\t\tif (Owner.statusEffects.makingJoke) return false;\n\n\t\t\tstring prev = Owner.specialAbility;\n\t\t\tOwner.specialAbility = "Joke";\n\t\t\tOwner.statusEffects.PressedSpecialAbility();\n\t\t\tOwner.specialAbility = prev;\n\n\t\t\tCount--;\n\t\t\treturn true;\n\t\t}\n\t}\n}\n')),(0,o.kt)(s.Z,{value:"adrenalineshot",mdxType:"TabItem"},(0,o.kt)("p",null,'A simple usable item that gives the player an effect called "Adrenaline". You can see Adrenaline effect\'s implementation in ',(0,o.kt)("a",{parentName:"p",href:"../traits/create-effect#examples"},"Creating a Custom Effect: Examples"),"."),(0,o.kt)(l.Z,{mdxType:"CodeSnippet"},'namespace RogueLibsCore.Test\n{\n\t[ItemCategories(RogueCategories.Drugs, RogueCategories.Melee, RogueCategories.Usable)]\n\tpublic class AdrenalineShot : CustomItem, IItemUsable\n\t{\n\t\t[RLSetup]\n\t\tpublic static void Setup()\n\t\t{\n\t\t\tRogueLibs.CreateCustomItem<AdrenalineShot>()\n\t\t\t\t.WithName(new CustomNameInfo("Adrenaline Shot"))\n\t\t\t\t.WithDescription(new CustomNameInfo("Gives you a ton of boosts for a short period of time."))\n\t\t\t\t.WithSprite(Properties.Resources.AdrenalineShot)\n\t\t\t\t.WithUnlock(new ItemUnlock\n\t\t\t\t{\n\t\t\t\t\tUnlockCost = 10,\n\t\t\t\t\tCharacterCreationCost = 4,\n\t\t\t\t\tLoadoutCost = 4,\n\t\t\t\t\tPrerequisites = { "KillerThrower", "Antidote", "RagePoison" },\n\t\t\t\t});\n\n\t\t\tRogueLibs.CreateCustomName("AdrenalineElectronic", "Dialogue",\n\t\t\t\tnew CustomNameInfo("I don\'t have a circulatory system."));\n\t\t}\n\n\t\tpublic override void SetupDetails()\n\t\t{\n\t\t\tItem.itemType = ItemTypes.Consumable;\n\t\t\tItem.healthChange = 20;\n\t\t\tItem.itemValue = 60;\n\t\t\tItem.initCount = 1;\n\t\t\tItem.rewardCount = 2;\n\t\t\tItem.stackable = true;\n\t\t\tItem.goesInToolbar = true;\n\t\t}\n\t\t[IgnoreChecks("FullHealth")]\n\t\tpublic bool UseItem()\n\t\t{\n\t\t\tif (Owner.electronic)\n\t\t\t{\n\t\t\t\tOwner.SayDialogue("AdrenalineElectronic");\n\t\t\t\tgc.audioHandler.Play(Owner, "CantDo");\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tOwner.AddEffect<Adrenaline>();\n\t\t\tgc.audioHandler.Play(Owner, "UseSyringe");\n\t\t\tCount--;\n\t\t\treturn true;\n\t\t}\n\t}\n}\n')),(0,o.kt)(s.Z,{value:"wildbypasser",mdxType:"TabItem"},(0,o.kt)("p",null,"A more complicated usable item, based on Wall Bypasser's code (see ",(0,o.kt)("inlineCode",{parentName:"p"},"ItemFunctions.UseItem"),")."),(0,o.kt)(l.Z,{mdxType:"CodeSnippet"},'using UnityEngine;\n\nnamespace RogueLibsCore.Test\n{\n\t[ItemCategories(RogueCategories.Technology, RogueCategories.Usable, RogueCategories.Stealth)]\n\tpublic class WildBypasser : CustomItem, IItemUsable\n\t{\n\t\t[RLSetup]\n\t\tpublic static void Setup()\n\t\t{\n\t\t\tRogueLibs.CreateCustomItem<WildBypasser>()\n\t\t\t\t.WithName(new CustomNameInfo("Wild Bypasser"))\n\t\t\t\t.WithDescription(new CustomNameInfo("Warps you in the direction you\'re facing. Teleports through any amount of walls."))\n\t\t\t\t.WithSprite(Properties.Resources.WildBypasser)\n\t\t\t\t.WithUnlock(new ItemUnlock\n\t\t\t\t{\n\t\t\t\t\tUnlockCost = 10,\n\t\t\t\t\tCharacterCreationCost = 2,\n\t\t\t\t\tLoadoutCost = 2,\n\t\t\t\t\tPrerequisites = { "WallBypasser" },\n\t\t\t\t});\n\t\t}\n\n\t\tpublic override void SetupDetails()\n\t\t{\n\t\t\tItem.itemType = ItemTypes.Tool;\n\t\t\tItem.itemValue = 60;\n\t\t\tItem.initCount = 1;\n\t\t\tItem.rewardCount = 1;\n\t\t\tItem.stackable = true;\n\t\t\tItem.goesInToolbar = true;\n\t\t}\n\t\tpublic bool UseItem()\n\t\t{\n\t\t\tVector3 position = Owner.agentHelperTr.localPosition = Vector3.zero;\n\t\t\tTileData tileData;\n\t\t\tint limit = 0;\n\t\t\tdo\n\t\t\t{\n\t\t\t\tposition.x += 0.64f;\n\t\t\t\tOwner.agentHelperTr.localPosition = position;\n\t\t\t\ttileData = gc.tileInfo.GetTileData(Owner.agentHelperTr.position);\n\n\t\t\t} while ((gc.tileInfo.IsOverlapping(Owner.agentHelperTr.position, "Anything")\n\t\t\t\t|| tileData.wallMaterial != wallMaterialType.None) && limit++ < 250);\n\n\t\t\tif (limit > 250)\n\t\t\t{\n\t\t\t\tgc.audioHandler.Play(Owner, "CantDo");\n\t\t\t\treturn false;\n\t\t\t}\n\n\t\t\tOwner.SpawnParticleEffect("Spawn", Owner.tr.position);\n\t\t\tOwner.Teleport(Owner.agentHelperTr.position, false, true);\n\t\t\tOwner.rb.velocity = Vector2.zero;\n\n\t\t\tif (!(Owner.HasTrait("ThiefToolsMayNotSubtract2")\n\t\t\t\t\t&& gc.percentChance(Owner.DetermineLuck(80, "ThiefToolsMayNotSubtract", true)))\n\t\t\t\t&& !(Owner.HasTrait("ThiefToolsMayNotSubtract")\n\t\t\t\t\t&& gc.percentChance(Owner.DetermineLuck(40, "ThiefToolsMayNotSubtract", true))))\n\t\t\t\tCount--;\n\n\t\t\tOwner.SpawnParticleEffect("Spawn", Owner.tr.position, false);\n\t\t\tgc.audioHandler.Play(Owner, "Spawn");\n\t\t\treturn true;\n\t\t}\n\t}\n}\n'))))}g.isMDXComponent=!0}}]);