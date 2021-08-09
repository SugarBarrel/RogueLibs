(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8200],{3099:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return l},default:function(){return k}});var n=o(2122),a=o(9756),i=(o(7294),o(3905)),r=(o(8952),o(9309),o(4996),["components"]),s={},c="Hook Factories",m={unversionedId:"dev/hooks/hook-factories",id:"dev/hooks/hook-factories",isDocsHomePage:!1,title:"Hook Factories",description:"IHookFactory interface",source:"@site/docs/dev/hooks/hook-factories.mdx",sourceDirName:"dev/hooks",slug:"/dev/hooks/hook-factories",permalink:"/RogueLibs/docs/dev/hooks/hook-factories",editUrl:"https://github.com/Abbysssal/RogueLibs/edit/master/website/docs/dev/hooks/hook-factories.mdx",version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Hooks",permalink:"/RogueLibs/docs/dev/hooks/hooks"},next:{title:"Introduction",permalink:"/RogueLibs/docs/site/intro"}},l=[{value:"<code>IHookFactory</code> interface",id:"ihookfactory",children:[]},{value:"Initialization",id:"initialization",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:l};function k(e){var t=e.components,o=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hook-factories"},"Hook Factories"),(0,i.kt)("h2",{id:"ihookfactory"},(0,i.kt)("inlineCode",{parentName:"h2"},"IHookFactory")," interface"),(0,i.kt)("p",null,"You can create hook factories by deriving either from ",(0,i.kt)("inlineCode",{parentName:"p"},"IHookFactory<T>")," or from ",(0,i.kt)("inlineCode",{parentName:"p"},"HookFactoryBase<T>"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomHookFactory.cs"',title:'"MyCustomHookFactory.cs"'},'public class MyCustomHookFactory : HookFactoryBase<InvItem>\n{\n    public override bool TryCreate(InvItem instance, out IHook<InvItem> hook)\n    {\n        if (instance.Categories.Contains("Food"))\n        {\n            hook = new MyCustomHook();\n            return true;\n        }\n        hook = null;\n        return false;\n    }\n}\n')),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You only need to create a hook object. Don't attach it to the instance just yet."))),(0,i.kt)("p",null,"The external code is responsible for attaching the created hooks:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"if (factory.TryCreate(item, out IHook<InvItem> hook))\n{\n    item.AddHook(hook);\n}\n")),(0,i.kt)("h2",{id:"initialization"},"Initialization"),(0,i.kt)("p",null,"You can either implement your own way of using factories or add it to the RogueLibs' ",(0,i.kt)("inlineCode",{parentName:"p"},"RogueFramework")," class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"RogueFramework.ItemFactories.Add(new MyCustomHookFactory());\n")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"RogueLibs uses ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomItemFactory")," and other similar classes to initialize custom items and other hooks:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public sealed class CustomItemFactory : HookFactoryBase<InvItem>\n{\n    private readonly Dictionary<string, ItemEntry> itemsDict = new Dictionary<string, ItemEntry>();\n    \n    public override bool TryCreate(InvItem instance, out IHook<InvItem> hook)\n    {\n        if (instance != null && itemsDict.TryGetValue(instance.invItemName, out ItemEntry entry))\n        {\n            hook = entry.Initializer();\n            if (hook is CustomItem custom)\n                custom.ItemInfo = entry.ItemInfo;\n            return true;\n        }\n        hook = null;\n        return false;\n    }\n    public ItemInfo AddItem<TItem>() where TItem : CustomItem, new()\n    {\n        ItemInfo info = ItemInfo.Get<TItem>();\n        itemsDict.Add(info.Name, new ItemEntry { Initializer = () => new TItem(), ItemInfo = info });\n        return info;\n    }\n\n    private struct ItemEntry\n    {\n        public Func<IHook<InvItem>> Initializer;\n        public ItemInfo ItemInfo;\n    }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public static void InvItem_SetupDetails(InvItem __instance)\n{\n    foreach (IHookFactory<InvItem> factory in RogueFramework.ItemFactories)\n        if (factory.TryCreate(__instance, out IHook<InvItem> hook))\n        {\n            __instance.AddHook(hook);\n        }\n}\n")))}k.isMDXComponent=!0}}]);