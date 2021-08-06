(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[838],{4214:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var a=n(7294),i=n(1756);function o(t){var e=t.children,n=t.language;return a.createElement(i.Z,{className:"language-"+(n||"csharp")},e.replace(/\t/g,"    "))}},6260:function(t,e,n){"use strict";n.r(e),n.d(e,{contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return d}});var a=n(2122),i=n(9756),o=(n(7294),n(3905)),r=n(8952),s=n(9309),l=(n(4996),n(4214)),u=["components"],m={},c="\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b",p={unversionedId:"dev/items/usable-items",id:"dev/items/usable-items",isDocsHomePage:!1,title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b",description:"\u0414\u0435\u043b\u0430\u0435\u043c \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u043c\u0438",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/dev/items/usable-items.mdx",sourceDirName:"dev/items",slug:"/dev/items/usable-items",permalink:"/RogueLibs/ru/docs/dev/items/usable-items",editUrl:"https://github.com/Abbysssal/RogueLibs/edit/master/website/docs/dev/items/usable-items.mdx",version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"\u0421\u043e\u0437\u0434\u0430\u0451\u043c \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0439 \u043f\u0440\u0435\u0434\u043c\u0435\u0442",permalink:"/RogueLibs/ru/docs/dev/items/create-item"},next:{title:"\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b",permalink:"/RogueLibs/ru/docs/dev/items/combinable-items"}},d=[{value:"\u0414\u0435\u043b\u0430\u0435\u043c \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u043c\u0438",id:"making-usable",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"examples",children:[]}],g={toc:d};function b(t){var e=t.components,n=(0,i.Z)(t,u);return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435-\u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b"),(0,o.kt)("h2",{id:"making-usable"},"\u0414\u0435\u043b\u0430\u0435\u043c \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u043c\u0438"),(0,o.kt)("p",null,"\u041f\u0440\u043e\u0441\u0442\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0439\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ",(0,o.kt)("inlineCode",{parentName:"p"},"IItemUsable")," \u0432 \u043a\u043b\u0430\u0441\u0441\u0435 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyUsableItem.cs"',title:'"MyUsableItem.cs"'},"// highlight-next-line\npublic class MyUsableItem : CustomItem, IItemUsable\n{\n    // highlight-next-line\n    public bool UseItem() { /* ... */ }\n}\n")),(0,o.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"UseItem")," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442, \u0431\u044b\u043b \u043b\u0438 \u043f\u0440\u0435\u0434\u043c\u0435\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d. \u0412\u043e\u0437\u0432\u0440\u0430\u0442 ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u043e\u0438\u0433\u0440\u044b\u0432\u0430\u0435\u0442 \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u044e. \u041f\u0440\u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0438\u0433\u0440\u0430\u0442\u044c \u0437\u0432\u0443\u043a ",(0,o.kt)("inlineCode",{parentName:"p"},'"CantDo"'),", \u0438, \u043c\u043e\u0436\u0435\u0442, \u0437\u0430\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430 \u0441\u043a\u0430\u0437\u0430\u0442\u044c, \u043f\u043e\u0447\u0435\u043c\u0443 \u043f\u0440\u0435\u0434\u043c\u0435\u0442 \u043d\u0435\u043b\u044c\u0437\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'        if (cantUse)\n        {\n            gc.audioHandler.Play(Owner, "CantDo");\n            Owner.SayDialogue("CantUseItemBecause...");\n            // \u043d\u0435 \u0437\u0430\u0431\u0443\u0434\u044c\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u0438\u0430\u043b\u043e\u0433 \u0441 \u044d\u0442\u0438\u043c \u0430\u0439\u0434\u0438\n            return false;\n        }\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u041e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0437\u0430 \u0443\u043c\u0435\u043d\u044c\u0448\u0435\u043d\u0438\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"Count")," \u043b\u0435\u0436\u0438\u0442 \u043d\u0430 \u0432\u0430\u0441. \u0422\u0430\u043a \u0447\u0442\u043e, \u043d\u0435 \u0437\u0430\u0431\u044b\u0432\u0430\u0439\u0442\u0435 \u0434\u0435\u043b\u0430\u0442\u044c \u044d\u0442\u043e."))),(0,o.kt)("h2",{id:"examples"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,o.kt)(r.Z,{defaultValue:"jokebook",values:[{label:"\u0421\u0431\u043e\u0440\u043d\u0438\u043a \u0448\u0443\u0442\u043e\u043a",value:"jokebook"},{label:"\u0410\u0434\u0440\u0435\u043d\u0430\u043b\u0438\u043d",value:"adrenalineshot"},{label:"\u0423\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0440\u043e\u0445\u043e\u0434 \u0441\u043a\u0432\u043e\u0437\u044c \u0441\u0442\u0435\u043d\u044b",value:"wildbypasser"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"jokebook",mdxType:"TabItem"},(0,o.kt)("p",null,"\u041f\u0440\u043e\u0441\u0442\u043e\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u043f\u0440\u0435\u0434\u043c\u0435\u0442, \u0434\u0430\u044e\u0449\u0438\u0439 \u0438\u0433\u0440\u043e\u043a\u0443 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c \u0428\u0443\u0442\u043a\u0430."),(0,o.kt)(l.Z,{mdxType:"CodeSnippet"},'namespace RogueLibsCore.Test\n{\n\t[ItemCategories(RogueCategories.Usable, RogueCategories.Social)]\n\tpublic class JokeBook : CustomItem, IItemUsable\n\t{\n\t\t[RLSetup]\n\t\tpublic static void Setup()\n\t\t{\n\t\t\tRogueLibs.CreateCustomItem<JokeBook>()\n\t\t\t\t.WithName(new CustomNameInfo("Joke Book"))\n\t\t\t\t.WithDescription(new CustomNameInfo("Always wanted to be a Comedian? Now you can! (kind of)"))\n\t\t\t\t.WithSprite(Properties.Resources.JokeBook)\n\t\t\t\t.WithUnlock(new ItemUnlock\n\t\t\t\t{\n\t\t\t\t\tUnlockCost = 10,\n\t\t\t\t\tLoadoutCost = 5,\n\t\t\t\t\tCharacterCreationCost = 3,\n\t\t\t\t\tPrerequisites = { VanillaAgents.Comedian + "_BQ" },\n\t\t\t\t});\n\t\t}\n\n\t\tpublic override void SetupDetails()\n\t\t{\n\t\t\tItem.itemType = ItemTypes.Tool;\n\t\t\tItem.itemValue = 15;\n\t\t\tItem.initCount = 10;\n\t\t\tItem.rewardCount = 10;\n\t\t\tItem.stackable = true;\n\t\t\tItem.hasCharges = true;\n\t\t\tItem.goesInToolbar = true;\n\t\t}\n\t\tpublic bool UseItem()\n\t\t{\n\t\t\tif (Owner.statusEffects.makingJoke) return false;\n\n\t\t\tstring prev = Owner.specialAbility;\n\t\t\tOwner.specialAbility = VanillaAbilities.Joke;\n\t\t\tOwner.statusEffects.PressedSpecialAbility();\n\t\t\tOwner.specialAbility = prev;\n\n\t\t\tCount--;\n\t\t\treturn true;\n\t\t}\n\t}\n}\n')),(0,o.kt)(s.Z,{value:"adrenalineshot",mdxType:"TabItem"},(0,o.kt)("p",null,'\u041f\u0440\u043e\u0441\u0442\u043e\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u043f\u0440\u0435\u0434\u043c\u0435\u0442, \u0434\u0430\u044e\u0449\u0438\u0439 \u0438\u0433\u0440\u043e\u043a\u0443 \u044d\u0444\u0444\u0435\u043a\u0442 "\u0410\u0434\u0440\u0435\u043d\u0430\u043b\u0438\u043d". \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u044d\u0444\u0444\u0435\u043a\u0442\u0430 \u0410\u0434\u0440\u0435\u043d\u0430\u043b\u0438\u043d \u0432 ',(0,o.kt)("a",{parentName:"p",href:"../traits/create-effect#examples"},"\u0421\u043e\u0437\u0434\u0430\u0451\u043c \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0439 \u044d\u0444\u0444\u0435\u043a\u0442: \u041f\u0440\u0438\u043c\u0435\u0440\u044b"),"."),(0,o.kt)(l.Z,{mdxType:"CodeSnippet"},'namespace RogueLibsCore.Test\n{\n\t[ItemCategories(RogueCategories.Drugs, RogueCategories.Melee, RogueCategories.Usable)]\n\tpublic class AdrenalineShot : CustomItem, IItemUsable\n\t{\n\t\t[RLSetup]\n\t\tpublic static void Setup()\n\t\t{\n\t\t\tRogueLibs.CreateCustomItem<AdrenalineShot>()\n\t\t\t\t.WithName(new CustomNameInfo("Adrenaline Shot"))\n\t\t\t\t.WithDescription(new CustomNameInfo("Gives you a ton of boosts for a short period of time."))\n\t\t\t\t.WithSprite(Properties.Resources.AdrenalineShot)\n\t\t\t\t.WithUnlock(new ItemUnlock\n\t\t\t\t{\n\t\t\t\t\tUnlockCost = 10,\n\t\t\t\t\tLoadoutCost = 5,\n\t\t\t\t\tCharacterCreationCost = 3,\n\t\t\t\t\tPrerequisites = { VanillaItems.RagePoison, VanillaItems.Antidote },\n\t\t\t\t});\n\n\t\t\tRogueLibs.CreateCustomName("AdrenalineElectronic", NameTypes.Dialogue,\n\t\t\t\tnew CustomNameInfo("I don\'t have a circulatory system."));\n\t\t}\n\n\t\tpublic override void SetupDetails()\n\t\t{\n\t\t\tItem.itemType = ItemTypes.Consumable;\n\t\t\tItem.healthChange = 20;\n\t\t\tItem.itemValue = 60;\n\t\t\tItem.initCount = 1;\n\t\t\tItem.rewardCount = 2;\n\t\t\tItem.stackable = true;\n\t\t\tItem.goesInToolbar = true;\n\t\t}\n\t\t[IgnoreChecks("FullHealth")]\n\t\tpublic bool UseItem()\n\t\t{\n\t\t\tif (Owner.electronic)\n\t\t\t{\n\t\t\t\tOwner.SayDialogue("AdrenalineElectronic");\n\t\t\t\tgc.audioHandler.Play(Owner, VanillaAudio.CantDo);\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tOwner.AddEffect<Adrenaline>();\n\t\t\tgc.audioHandler.Play(Owner, VanillaAudio.UseSyringe);\n\t\t\tCount--;\n\t\t\treturn true;\n\t\t}\n\t}\n}\n')),(0,o.kt)(s.Z,{value:"wildbypasser",mdxType:"TabItem"},(0,o.kt)("p",null,"\u0411\u043e\u043b\u0435\u0435 \u0441\u043b\u043e\u0436\u043d\u044b\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u043f\u0440\u0435\u0434\u043c\u0435\u0442, \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043d\u0430 \u043a\u043e\u0434\u0435 \u041f\u0440\u043e\u0445\u043e\u0434\u0430 \u0441\u043a\u0432\u043e\u0437\u044c \u0441\u0442\u0435\u043d\u044b (\u0441\u043c. ",(0,o.kt)("inlineCode",{parentName:"p"},"ItemFunctions.UseItem"),")."),(0,o.kt)(l.Z,{mdxType:"CodeSnippet"},'using UnityEngine;\n\nnamespace RogueLibsCore.Test\n{\n\t[ItemCategories(RogueCategories.Technology, RogueCategories.Usable, RogueCategories.Stealth)]\n\tpublic class WildBypasser : CustomItem, IItemUsable\n\t{\n\t\t[RLSetup]\n\t\tpublic static void Setup()\n\t\t{\n\t\t\tRogueLibs.CreateCustomItem<WildBypasser>()\n\t\t\t\t.WithName(new CustomNameInfo("Wild Bypasser"))\n\t\t\t\t.WithDescription(new CustomNameInfo("Warps you in the direction you\'re facing. Teleports through any amount of walls."))\n\t\t\t\t.WithSprite(Properties.Resources.WildBypasser)\n\t\t\t\t.WithUnlock(new ItemUnlock\n\t\t\t\t{\n\t\t\t\t\tUnlockCost = 10,\n\t\t\t\t\tLoadoutCost = 7,\n\t\t\t\t\tCharacterCreationCost = 3,\n\t\t\t\t\tPrerequisites = { VanillaItems.WallBypasser },\n\t\t\t\t});\n\t\t}\n\n\t\tpublic override void SetupDetails()\n\t\t{\n\t\t\tItem.itemType = ItemTypes.Tool;\n\t\t\tItem.itemValue = 60;\n\t\t\tItem.initCount = 2;\n\t\t\tItem.rewardCount = 3;\n\t\t\tItem.stackable = true;\n\t\t\tItem.goesInToolbar = true;\n\t\t}\n\t\tpublic bool UseItem()\n\t\t{\n\t\t\tVector3 position = Owner.agentHelperTr.localPosition = Vector3.zero;\n\t\t\tTileData tileData;\n\t\t\tint limit = 0;\n\t\t\tdo\n\t\t\t{\n\t\t\t\tposition.x += 0.64f;\n\t\t\t\tOwner.agentHelperTr.localPosition = position;\n\t\t\t\ttileData = gc.tileInfo.GetTileData(Owner.agentHelperTr.position);\n\n\t\t\t} while ((gc.tileInfo.IsOverlapping(Owner.agentHelperTr.position, "Anything")\n\t\t\t\t|| tileData.wallMaterial != wallMaterialType.None) && limit++ < 250);\n\n\t\t\tif (limit > 250)\n\t\t\t{\n\t\t\t\tgc.audioHandler.Play(Owner, VanillaAudio.CantDo);\n\t\t\t\treturn false;\n\t\t\t}\n\n\t\t\tOwner.SpawnParticleEffect("Spawn", Owner.tr.position);\n\t\t\tOwner.Teleport(Owner.agentHelperTr.position, false, true);\n\t\t\tOwner.rb.velocity = Vector2.zero;\n\n\t\t\tif (!(Owner.HasTrait(VanillaTraits.IntrusionArtist)\n\t\t\t\t\t&& gc.percentChance(Owner.DetermineLuck(80, "ThiefToolsMayNotSubtract", true)))\n\t\t\t\t&& !(Owner.HasTrait(VanillaTraits.IntrusionArtist2)\n\t\t\t\t\t&& gc.percentChance(Owner.DetermineLuck(40, "ThiefToolsMayNotSubtract", true))))\n\t\t\t\tCount--;\n\n\t\t\tOwner.SpawnParticleEffect("Spawn", Owner.tr.position, false);\n\t\t\tgc.audioHandler.Play(Owner, VanillaAudio.Spawn);\n\t\t\treturn true;\n\t\t}\n\t}\n}\n'))))}b.isMDXComponent=!0}}]);