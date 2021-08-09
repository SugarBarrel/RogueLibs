(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8331],{4214:function(t,e,o){"use strict";o.d(e,{Z:function(){return i}});var n=o(7294),a=o(1756);function i(t){var e=t.children,o=t.language;return n.createElement(a.Z,{className:"language-"+(o||"csharp")},e.replace(/\t/g,"    "))}},6535:function(t,e,o){"use strict";o.r(e),o.d(e,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return k},toc:function(){return d},default:function(){return C}});var n=o(2122),a=o(9756),i=(o(7294),o(3905)),s=o(8952),r=o(9309),u=(o(4996),o(4214)),l=o(5306),m=["components"],p={},c="\u0425\u0443\u043a\u0438",k={unversionedId:"dev/hooks/hooks",id:"dev/hooks/hooks",isDocsHomePage:!1,title:"\u0425\u0443\u043a\u0438",description:"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 IHook",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/dev/hooks/hooks.mdx",sourceDirName:"dev/hooks",slug:"/dev/hooks/hooks",permalink:"/RogueLibs/ru/docs/dev/hooks/hooks",editUrl:"https://github.com/Abbysssal/RogueLibs/edit/master/website/docs/dev/hooks/hooks.mdx",version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u043f\u0430\u0442\u0447\u0435\u0439",permalink:"/RogueLibs/ru/docs/dev/patching-utilities"},next:{title:"\u0424\u0430\u0431\u0440\u0438\u043a\u0438 \u0445\u0443\u043a\u043e\u0432",permalink:"/RogueLibs/ru/docs/dev/hooks/hook-factories"}},d=[{value:"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 <code>IHook</code>",id:"ihook",children:[]},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"usage",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"examples",children:[]}],h={toc:d};function C(t){var e=t.components,o=(0,a.Z)(t,m);return(0,i.kt)("wrapper",(0,n.Z)({},h,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u0445\u0443\u043a\u0438"},"\u0425\u0443\u043a\u0438"),(0,i.kt)("h2",{id:"ihook"},"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ",(0,i.kt)("inlineCode",{parentName:"h2"},"IHook")),(0,i.kt)("p",null,"\u0418\u0442\u0430\u043a, \u0445\u0443\u043a - \u044d\u0442\u043e \u043e\u0431\u044a\u0435\u043a\u0442, \u043f\u0440\u0438\u0446\u0435\u043f\u043b\u044f\u0435\u043c\u044b\u0439 \u043a \u0434\u0440\u0443\u0433\u043e\u043c\u0443 \u043e\u0431\u044a\u0435\u043a\u0442\u0443. \u0412 RogueLibs \u0442\u0438\u043f\u044b \u0445\u0443\u043a\u043e\u0432 \u043d\u0430\u0441\u043b\u0435\u0434\u0443\u044e\u0442 \u043e\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"IHook")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"IHook<T>"),"."),(0,i.kt)("p",null,"RogueLibsPatcher.dll \u0441\u043e\u0437\u0434\u0430\u0451\u0442 \u043f\u043e\u043b\u044f \u043f\u043e\u0434 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f\u043c\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"__RogueLibsHooks")," \u0432\u043e \u0432\u0441\u0435\u0445 \u0442\u0438\u043f\u0430\u0445, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u0438\u0446\u0435\u043f\u0438\u0442\u044c \u0445\u0443\u043a\u0438. \u041e\u0431\u044a\u0435\u043a\u0442 \u043a\u043b\u0430\u0441\u0441\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"IHookController")," \u043f\u043e\u0442\u043e\u043c \u043d\u0430\u0437\u043d\u0430\u0447\u0430\u0435\u0442\u0441\u044f \u0432 \u044d\u0442\u043e \u043f\u043e\u043b\u0435 \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u0440\u0438\u0446\u0435\u043f\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u0445\u0443\u043a\u0430\u043c\u0438. \u041e\u043d \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043c\u0435\u0442\u043e\u0434\u044b \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f, \u043f\u0440\u0438\u0446\u0435\u043f\u043b\u0435\u043d\u0438\u044f \u0438 \u043e\u0442\u0446\u0435\u043f\u043b\u0435\u043d\u0438\u044f \u0445\u0443\u043a\u043e\u0432 \u043e\u0442 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430. \u0414\u0443\u043c\u0430\u0439\u0442\u0435 \u043e \u043d\u0451\u043c \u043a\u0430\u043a \u043e \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438 \u0445\u0443\u043a\u043e\u0432."),(0,i.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0441\u0432\u043e\u0438 \u0445\u0443\u043a\u0438 \u043d\u0430\u0441\u043b\u0435\u0434\u0443\u044f \u043e\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"IHook<T>")," \u0438\u043b\u0438 \u043e\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"HookBase<T>"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomHook.cs"',title:'"MyCustomHook.cs"'},'public class MyCustomHook : HookBase<InvItem>\n{\n    protected override void Initialize() { }\n    \n    public void StoreInfo(string data)\n    {\n        Debug.Log($"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043e {data}.");\n        Data = data;\n    }\n    public string LoadInfo()\n    {\n        Debug.Log($"\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043e {Data}.");\n        return Data;\n    }\n    private string Data;\n}\n')),(0,i.kt)("h2",{id:"usage"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,i.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0445\u0443\u043a\u0438 \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0432\u0441\u044f\u043a\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'MyCustomHook hook = item.AddHook<MyCustomHook>();\nhook.StoreInfo("\u043a\u0430\u043a\u0430\u044f-\u0442\u043e-\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f");\n')),(0,i.kt)("p",null,"\u041f\u043e\u0442\u043e\u043c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u0443 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u0433\u0434\u0435-\u043d\u0438\u0431\u0443\u0434\u044c \u0432 \u0434\u0440\u0443\u0433\u043e\u043c \u043c\u0435\u0441\u0442\u0435:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"MyCustomHook hook = item.GetHook<MyCustomHook>();\nif (hook != null)\n{\n    string data = hook.LoadInfo();\n}\n")),(0,i.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0438\u0446\u0435\u043f\u043b\u044f\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0445\u0443\u043a\u043e\u0432 \u043e\u0434\u043d\u043e\u0433\u043e \u0442\u0438\u043f\u0430 \u0442\u043e\u0436\u0435:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'MyCustomHook hook = item.AddHook<MyCustomHook>();\nhook.StoreInfo("\u043a\u0430\u043a\u0430\u044f-\u0442\u043e-\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f");\nMyCustomHook hook = item.AddHook<MyCustomHook>();\nhook.StoreInfo("\u0447\u0442\u043e-\u0442\u043e-\u0434\u0440\u0443\u0433\u043e\u0435");\nMyCustomHook hook = item.AddHook<MyCustomHook>();\nhook.StoreInfo("\u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c-\u0435\u0449\u0451");\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"foreach (MyCustomHook hook in item.GetHooks<MyCustomHook>())\n{\n    string data = hook.LoadInfo();\n}\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u0421\u043e\u0432\u0435\u0442 \u043e\u0442 \u043f\u0440\u043e\u0444\u0438: \u0424\u0430\u0431\u0440\u0438\u043a\u0438 \u0445\u0443\u043a\u043e\u0432")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u0440\u0438\u0446\u0435\u043f\u043b\u044f\u0442\u044c \u0445\u0443\u043a\u0438 \u043a \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u043c \u043f\u0440\u044f\u043c\u043e \u043a\u043e\u0433\u0434\u0430 \u043e\u043d\u0438 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u044e\u0442\u0441\u044f, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",(0,i.kt)("a",{parentName:"p",href:"./hook-factories"},"\u0424\u0430\u0431\u0440\u0438\u043a\u0438 \u0445\u0443\u043a\u043e\u0432"),"."))),(0,i.kt)("h2",{id:"examples"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,i.kt)("p",null,"\u041a\u0441\u0442\u0430\u0442\u0438, \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0435 \u043a\u043b\u0430\u0441\u0441\u044b (",(0,i.kt)("inlineCode",{parentName:"p"},"CustomItem"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomTrait"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomEffect"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomAbility")," \u0438 \u0434\u0440\u0443\u0433\u0438\u0435) \u0442\u043e\u0436\u0435 \u0445\u0443\u043a\u0438:"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0445 \u043a\u043b\u0430\u0441\u0441\u043e\u0432 \u0432 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Abbysssal/RogueLibs/tree/master/RogueLibsCore/Hooks"},"\u0438\u0441\u0445\u043e\u0434\u043d\u043e\u043c \u043a\u043e\u0434\u0435 RogueLibs"),"."))),(0,i.kt)(s.Z,{defaultValue:"spicerack",values:[{label:"Spice Rack",value:"spicerack"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"spicerack",mdxType:"TabItem"},(0,i.kt)("p",null,"\u041e\u0442\u043b\u0438\u0447\u043d\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 \u0441 \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u043c\u0438 \u0445\u0443\u043a\u0430\u043c\u0438, \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u044e\u0449\u0438\u043c\u0438 \u043f\u0440\u0438\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b."),(0,i.kt)("p",null,"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043f\u0440\u0438\u043c\u0435\u0440 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u043c\u043e\u0433\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430 ",(0,i.kt)("a",{parentName:"p",href:"../items/combinable-items#examples"},"\u0442\u0443\u0442"),"."),(0,i.kt)(u.Z,{mdxType:"CodeSnippet"},l.Z))))}C.isMDXComponent=!0},5306:function(t,e){"use strict";e.Z='using UnityEngine;\n\nnamespace RogueLibsCore.Test\n{\n\t[ItemCategories(RogueCategories.Food, RogueCategories.Health)]\n\tpublic class SpiceRack : CustomItem, IItemCombinable\n\t{\n\t\t[RLSetup]\n\t\tpublic static void Setup()\n\t\t{\n\t\t\tRogueLibs.CreateCustomItem<SpiceRack>()\n\t\t\t\t.WithName(new CustomNameInfo("Spice Rack"))\n\t\t\t\t.WithDescription(new CustomNameInfo("Combine with any food item to increase its healing properties."))\n\t\t\t\t.WithSprite(Properties.Resources.SpiceRack)\n\t\t\t\t.WithUnlock(new ItemUnlock\n\t\t\t\t{\n\t\t\t\t\tUnlockCost = 10,\n\t\t\t\t\tLoadoutCost = 3,\n\t\t\t\t\tCharacterCreationCost = 2,\n\t\t\t\t\tPrerequisites = { VanillaItems.FoodProcessor },\n\t\t\t\t});\n\n\t\t\tSeasonCursorText = RogueLibs.CreateCustomName("SeasonItem", NameTypes.Interface, new CustomNameInfo("Season"));\n\t\t}\n\t\tprivate static CustomName SeasonCursorText;\n\n\t\tpublic override void SetupDetails()\n\t\t{\n\t\t\tItem.itemType = ItemTypes.Combine;\n\t\t\tItem.itemValue = 4;\n\t\t\tItem.initCount = 10;\n\t\t\tItem.rewardCount = 15;\n\t\t\tItem.stackable = true;\n\t\t\tItem.hasCharges = true;\n\t\t}\n\t\tpublic bool CombineFilter(InvItem other)\n\t\t{\n\t\t\tif (other.itemType != ItemTypes.Food || other.healthChange is 0\n\t\t\t\t|| !other.Categories.Contains(RogueCategories.Food)) return false;\n\n\t\t\tSpicedHook hook = other.GetHook<SpicedHook>();\n\t\t\treturn hook is null || hook.Spiciness < 3;\n\t\t}\n\t\tpublic bool CombineItems(InvItem other)\n\t\t{\n\t\t\tif (!CombineFilter(other)) return false;\n\n\t\t\tSpicedHook hook = other.GetHook<SpicedHook>() ?? other.AddHook<SpicedHook>();\n\t\t\thook.IncreaseSpiciness();\n\n\t\t\tCount--;\n\t\t\tgc.audioHandler.Play(Owner, VanillaAudio.CombineItem);\n\t\t\treturn true;\n\t\t}\n\t\tpublic CustomTooltip CombineCursorText(InvItem other) => SeasonCursorText;\n\t\tpublic CustomTooltip CombineTooltip(InvItem other)\n\t\t{\n\t\t\tif (!CombineFilter(other)) return default;\n\n\t\t\tSpicedHook hook = other.GetHook<SpicedHook>();\n\t\t\tint bonus = hook is null ? (int)Mathf.Ceil(other.healthChange / 4f) : hook.HealthBonus;\n\t\t\treturn new CustomTooltip($"+{bonus}", Color.green);\n\t\t}\n\n\t\tprivate class SpicedHook : HookBase<InvItem>\n\t\t{\n\t\t\tprotected override void Initialize()\n\t\t\t\t=> HealthBonus = (int)Mathf.Ceil(Instance.healthChange / 4f);\n\n\t\t\tpublic int HealthBonus { get; private set; }\n\t\t\tpublic int Spiciness { get; private set; }\n\n\t\t\tpublic void IncreaseSpiciness()\n\t\t\t{\n\t\t\t\tif (Spiciness is 3) return;\n\n\t\t\t\tSpiciness++;\n\t\t\t\tInstance.healthChange += HealthBonus;\n\t\t\t}\n\t\t}\n\t}\n}\n'}}]);