(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5553],{9800:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return u},default:function(){return k}});var o=n(2122),a=n(9756),i=(n(7294),n(3905)),r=(n(8952),n(9309),n(4996),["components"]),s={},c="\u0424\u0430\u0431\u0440\u0438\u043a\u0438 \u0445\u0443\u043a\u043e\u0432",m={unversionedId:"dev/hooks/hook-factories",id:"dev/hooks/hook-factories",isDocsHomePage:!1,title:"\u0424\u0430\u0431\u0440\u0438\u043a\u0438 \u0445\u0443\u043a\u043e\u0432",description:"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 IHookFactory",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/dev/hooks/hook-factories.mdx",sourceDirName:"dev/hooks",slug:"/dev/hooks/hook-factories",permalink:"/RogueLibs/ru/docs/dev/hooks/hook-factories",editUrl:"https://github.com/Abbysssal/RogueLibs/edit/master/website/docs/dev/hooks/hook-factories.mdx",version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"\u0425\u0443\u043a\u0438",permalink:"/RogueLibs/ru/docs/dev/hooks/hooks"},next:{title:"Introduction",permalink:"/RogueLibs/ru/docs/site/intro"}},u=[{value:"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 <code>IHookFactory</code>",id:"ihookfactory",children:[]},{value:"\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f",id:"initialization",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"examples",children:[]}],l={toc:u};function k(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u0444\u0430\u0431\u0440\u0438\u043a\u0438-\u0445\u0443\u043a\u043e\u0432"},"\u0424\u0430\u0431\u0440\u0438\u043a\u0438 \u0445\u0443\u043a\u043e\u0432"),(0,i.kt)("h2",{id:"ihookfactory"},"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ",(0,i.kt)("inlineCode",{parentName:"h2"},"IHookFactory")),(0,i.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0444\u0430\u0431\u0440\u0438\u043a\u0438 \u0445\u0443\u043a\u043e\u0432 \u043d\u0430\u0441\u043b\u0435\u0434\u0443\u044f \u043e\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"IHookFactory<T>")," \u0438\u043b\u0438 \u043e\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"HookFactoryBase<T>"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomHookFactory.cs"',title:'"MyCustomHookFactory.cs"'},'public class MyCustomHookFactory : HookFactoryBase<InvItem>\n{\n    public override bool TryCreate(InvItem instance, out IHook<InvItem> hook)\n    {\n        if (instance.Categories.Contains("Food"))\n        {\n            hook = new MyCustomHook();\n            return true;\n        }\n        hook = null;\n        return false;\n    }\n}\n')),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u0412\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442 \u0445\u0443\u043a\u0430. \u041d\u0435 \u043f\u0440\u0438\u0446\u0435\u043f\u043b\u044f\u0439\u0442\u0435 \u0435\u0433\u043e \u043a \u043e\u0431\u044a\u0435\u043a\u0442\u0443 \u043f\u043e\u043a\u0430 \u0447\u0442\u043e."))),(0,i.kt)("p",null,"\u041e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0437\u0430 \u043f\u0440\u0438\u0446\u0435\u043f\u043b\u0435\u043d\u0438\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0445 \u0445\u0443\u043a\u043e\u0432 \u043b\u0435\u0436\u0438\u0442 \u043d\u0430 \u0432\u043d\u0435\u0448\u043d\u0435\u043c \u043a\u043e\u0434\u0435:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"if (factory.TryCreate(item, out IHook<InvItem> hook))\n{\n    item.AddHook(hook);\n}\n")),(0,i.kt)("h2",{id:"initialization"},"\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f"),(0,i.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043b\u0438\u0431\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u0432\u043e\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0444\u0430\u0431\u0440\u0438\u043a, \u0438\u043b\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0451 \u0432 \u043a\u043b\u0430\u0441\u0441 ",(0,i.kt)("inlineCode",{parentName:"p"},"RogueFramework"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"RogueFramework.ItemFactories.Add(new MyCustomHookFactory());\n")),(0,i.kt)("h2",{id:"examples"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,i.kt)("p",null,"RogueLibs \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomItemFactory")," \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043f\u043e\u0434\u043e\u0431\u043d\u044b\u0435 \u043a\u043b\u0430\u0441\u0441\u044b \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0445 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u043e\u0432 \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0445\u0443\u043a\u043e\u0432:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public sealed class CustomItemFactory : HookFactoryBase<InvItem>\n{\n    private readonly Dictionary<string, ItemEntry> itemsDict = new Dictionary<string, ItemEntry>();\n    \n    public override bool TryCreate(InvItem instance, out IHook<InvItem> hook)\n    {\n        if (instance != null && itemsDict.TryGetValue(instance.invItemName, out ItemEntry entry))\n        {\n            hook = entry.Initializer();\n            if (hook is CustomItem custom)\n                custom.ItemInfo = entry.ItemInfo;\n            return true;\n        }\n        hook = null;\n        return false;\n    }\n    public ItemInfo AddItem<TItem>() where TItem : CustomItem, new()\n    {\n        ItemInfo info = ItemInfo.Get<TItem>();\n        itemsDict.Add(info.Name, new ItemEntry { Initializer = () => new TItem(), ItemInfo = info });\n        return info;\n    }\n\n    private struct ItemEntry\n    {\n        public Func<IHook<InvItem>> Initializer;\n        public ItemInfo ItemInfo;\n    }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public static void InvItem_SetupDetails(InvItem __instance)\n{\n    foreach (IHookFactory<InvItem> factory in RogueFramework.ItemFactories)\n        if (factory.TryCreate(__instance, out IHook<InvItem> hook))\n        {\n            __instance.AddHook(hook);\n        }\n}\n")))}k.isMDXComponent=!0}}]);