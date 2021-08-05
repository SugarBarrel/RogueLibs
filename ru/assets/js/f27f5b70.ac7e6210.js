(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[266],{9247:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var a=t(2122),o=t(9756),i=(t(7294),t(3905)),s=t(8952),r=t(9309),c=(t(4996),["components"]),l={},u="\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u043f\u0430\u0442\u0447\u0435\u0439",p={unversionedId:"dev/patching-utilities",id:"dev/patching-utilities",isDocsHomePage:!1,title:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u043f\u0430\u0442\u0447\u0435\u0439",description:"\u0410\u0442\u0440\u0438\u0431\u0443\u0442 RLSetup",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/dev/patching-utilities.mdx",sourceDirName:"dev",slug:"/dev/patching-utilities",permalink:"/RogueLibs/ru/docs/dev/patching-utilities",editUrl:"https://github.com/Abbysssal/RogueLibs/edit/master/website/docs/dev/patching-utilities.mdx",version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e",permalink:"/RogueLibs/ru/docs/dev/extra"},next:{title:"\u0425\u0443\u043a\u0438",permalink:"/RogueLibs/ru/docs/dev/hooks/hooks"}},d=[{value:"\u0410\u0442\u0440\u0438\u0431\u0443\u0442 <code>RLSetup</code>",id:"rlsetup",children:[]},{value:"<code>RoguePatcher</code>",id:"roguepatcher",children:[]},{value:"\u0412\u0441\u043f\u043e\u043c\u043e\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u044b \u0434\u043b\u044f \u0442\u0440\u0430\u043d\u0441\u043f\u0438\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",id:"transpiler-helper-methods",children:[]}],m={toc:d};function h(e){var n=e.components,t=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u0443\u0442\u0438\u043b\u0438\u0442\u044b-\u0434\u043b\u044f-\u043f\u0430\u0442\u0447\u0435\u0439"},"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u043f\u0430\u0442\u0447\u0435\u0439"),(0,i.kt)("h2",{id:"rlsetup"},"\u0410\u0442\u0440\u0438\u0431\u0443\u0442 ",(0,i.kt)("inlineCode",{parentName:"h2"},"RLSetup")),(0,i.kt)("p",null,"\u0422\u0430\u043a \u043a\u0430\u043a RogueLibs \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442 \u0432\u0441\u0451 \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0435 \u043a\u0430\u043a \u043a\u043b\u0430\u0441\u0441\u044b, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u0431\u044b\u0442\u044c \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u043a\u043b\u0430\u0441\u0441 \u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"Awake")," \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u043b\u0430\u0433\u0438\u043d\u0430. \u0418\u043c\u0435\u043d\u043d\u043e \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0442\u0443\u0442 \u0435\u0441\u0442\u044c \u0430\u0442\u0440\u0438\u0431\u0443\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"RLSetup"),". \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0433\u043e \u043a \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u043c\u0443 \u043c\u0435\u0442\u043e\u0434\u0443 \u0438 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0448 \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0439 \u043a\u043b\u0430\u0441\u0441 \u0442\u0430\u043c."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomItem.cs"',title:'"MyCustomItem.cs"'},'public class MyCustomItem : CustomItem\n{\n    // highlight-start\n    [RLSetup]\n    public static void Setup()\n    // highlight-end\n    {\n        RogueLibs.CreateCustomItem<MyCustomItem>()\n            .WithName(new CustomNameInfo("Name"))\n            .WithDescription(new CustomNameInfo("Description"))\n            .WithSprite(Properties.Resources.Sprite)\n            .WithUnlock(new ItemUnlock());\n        \n        RogueLibs.CreateCustomName("SomeName", "Dialogue", new CustomNameInfo("Text"));\n    }\n}\n')),(0,i.kt)("p",null,"\u0412\u0430\u043c \u043f\u0440\u043e\u0441\u0442\u043e \u043d\u0430\u0434\u043e \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0437\u0432\u0430\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u043c\u0435\u0442\u043e\u0434 \u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"Awake")," \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u043b\u0430\u0433\u0438\u043d\u0430:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCoolPlugin.cs"',title:'"MyCoolPlugin.cs"'},"    public void Awake()\n    {\n        // highlight-next-line\n        RogueLibs.LoadFromAssembly();\n        /* ... */\n    }\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u0421\u043e\u0432\u0435\u0442 \u043e\u0442 \u043f\u0440\u043e\u0444\u0438")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u0421\u0435\u0440\u044c\u0451\u0437\u043d\u043e, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0435\u0433\u043e. \u042d\u0442\u043e \u0442\u0430\u043a\u0436\u0435 \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u0441 \u0432\u0435\u0440\u0441\u0438\u043e\u043d\u0438\u043d\u0433\u043e\u043c. \u0412\u0441\u0451 \u0432 \u043e\u0434\u043d\u043e\u043c \u043c\u0435\u0441\u0442\u0435."))),(0,i.kt)("h2",{id:"roguepatcher"},(0,i.kt)("inlineCode",{parentName:"h2"},"RoguePatcher")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"RoguePatcher")," - \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439 \u0432\u0441\u043f\u043e\u043c\u043e\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043a\u043b\u0430\u0441\u0441, \u0434\u0435\u043b\u0430\u044e\u0449\u0438\u0439 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u0430\u0442\u0447\u0435\u0439 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u0431\u044b\u0441\u0442\u0440\u0435\u0435 \u0438 \u043f\u0440\u043e\u0449\u0435. \u0415\u0441\u043b\u0438 \u0432\u0430\u043c \u043d\u0430\u0434\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044f (\u043f\u043e\u0440\u044f\u0434\u043e\u043a \u043f\u0430\u0442\u0447\u0435\u0439, \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442 \u0438 \u0442.\u043f.), \u0442\u043e\u0433\u0434\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u044b Harmony."),(0,i.kt)(s.Z,{defaultValue:"roguepatcher",values:[{label:"RoguePatcher",value:"roguepatcher"},{label:"Harmony",value:"harmony"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"roguepatcher",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"RoguePatcher patcher = new RoguePatcher(this);\n\npatcher.Postfix(typeof(StatusEffects), nameof(StatusEffects.hasStatusEffect));\n\npatcher.Postfix(typeof(InvDatabase), nameof(InvDatabase.ChooseArmor), new Type[1] { typeof(string) });\n"))),(0,i.kt)(r.Z,{value:"harmony",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"Harmony harmony = new Harmony(pluginGUID);\n\nMethodInfo original = AccessTools.Method(typeof(StatusEffects), nameof(StatusEffects.hasStatusEffect));\nMethodInfo patch = AccessTools.Method(GetType(), nameof(MyPatchMethod));\nharmony.Patch(original, new HarmonyMethod(patch));\n\noriginal = AccessTools.Method(typeof(InvDatabase), nameof(InvDatabase.ChooseArmor), new Type[1] { typeof(string) });\npatch = AccessTools.Method(GetType(), nameof(MyPatchMethod2));\nharmony.Patch(original, new HarmonyMethod(patch));\n")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u0421\u043e\u0432\u0435\u0442 \u043e\u0442 \u043f\u0440\u043e\u0444\u0438")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u0412\u043c\u0435\u0441\u0442\u043e \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u043d\u0438\u044f \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0439 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u0442\u0440\u043e\u043a, \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0439\u0442\u0435 \u0438\u0445 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0433\u043e \u0441\u043b\u043e\u0432\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"nameof"),". \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0441\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0441\u043b\u0438 \u043c\u0435\u0442\u043e\u0434, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0430\u0442\u0447\u0438\u0442\u044c, \u043d\u0435 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0439."))),(0,i.kt)("p",null,"\u041c\u0435\u0442\u043e\u0434\u044b-\u043f\u0430\u0442\u0447\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0438\u043c\u0435\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0438\u043c\u044f: ",(0,i.kt)("inlineCode",{parentName:"p"},"<\u0426\u0435\u043b\u0435\u0432\u043e\u0439\u0422\u0438\u043f>_<\u0426\u0435\u043b\u0435\u0432\u043e\u0439\u041c\u0435\u0442\u043e\u0434>"),". \u0412 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0432\u044b\u0448\u0435, ",(0,i.kt)("inlineCode",{parentName:"p"},"RoguePatcher")," \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043a\u0430\u0442\u044c \u043c\u0435\u0442\u043e\u0434\u044b-\u043f\u0430\u0442\u0447\u0438 \u0441 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f\u043c\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"StatusEffects_hasStatusEffect")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"InvDatabase_ChooseArmor")," \u0432 \u043a\u043b\u0430\u0441\u0441\u0435 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u043b\u0430\u0433\u0438\u043d\u0430."),(0,i.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0442\u0438\u043f, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0431\u0443\u0434\u0443\u0442 \u0438\u0441\u043a\u0430\u0442\u044c\u0441\u044f \u043c\u0435\u0442\u043e\u0434\u044b-\u043f\u0430\u0442\u0447\u0438. \u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0435\u0433\u043e \u0432 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440\u0435 \u0438\u043b\u0438 \u0432\u044b\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u043c\u0435\u0436\u0434\u0443 \u043f\u0430\u0442\u0447\u0430\u043c\u0438:"),(0,i.kt)(s.Z,{defaultValue:"roguepatcher",values:[{label:"RoguePatcher",value:"roguepatcher"},{label:"Harmony",value:"harmony"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"roguepatcher",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public class MyCoolPlugin : BaseUnityPlugin\n{\n    public void Awake()\n    {\n        // highlight-next-line\n        RoguePatcher patcher = new RoguePatcher(this, typeof(MyCoolPatches));\n\n        patcher.Postfix(typeof(StatusEffects), nameof(StatusEffects.hasStatusEffect));\n\n        // highlight-next-line\n        patcher.TypeWithPatches = typeof(MyEvenCoolerPatches);\n\n        patcher.Postfix(typeof(InvDatabase), nameof(InvDatabase.ChooseArmor), new Type[1] { typeof(string) });\n    }\n}\npublic class MyCoolPatches\n{\n    public static void StatusEffects_hasStatusEffect(StatusEffects __instance)\n    {\n        /* ... */\n    }\n}\npublic class MyEvenCoolerPatches\n{\n    public static void InvDatabase_ChooseArmor(InvDatabase __instance, string previousArmorName)\n    {\n        /* ... */\n    }\n}\n"))),(0,i.kt)(r.Z,{value:"harmony",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public class MyCoolPlugin : BaseUnityPlugin\n{\n    public void Awake()\n    {\n        Harmony harmony = new Harmony(pluginGUID);\n\n        MethodInfo original = AccessTools.Method(typeof(StatusEffects), nameof(StatusEffects.hasStatusEffect));\n        MethodInfo patch = AccessTools.Method(typeof(MyCoolPatches), nameof(MyPatchMethod));\n        harmony.Patch(original, new HarmonyMethod(patch));\n\n        original = AccessTools.Method(typeof(InvDatabase), nameof(InvDatabase.ChooseArmor), new Type[1] { typeof(string) });\n        patch = AccessTools.Method(typeof(MyEvenCoolerPatches), nameof(MyPatchMethod2));\n        harmony.Patch(original, new HarmonyMethod(patch));\n    }\n}\npublic class MyCoolPatches\n{\n    public static void MyPatchMethod(StatusEffects __instance)\n    {\n        /* ... */\n    }\n}\npublic class MyEvenCoolerPatches\n{\n    public static void MyPatchMethod2(InvDatabase __instance, string previousArmorName)\n    {\n        /* ... */\n    }\n}\n")))),(0,i.kt)("h2",{id:"transpiler-helper-methods"},"\u0412\u0441\u043f\u043e\u043c\u043e\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u044b \u0434\u043b\u044f \u0442\u0440\u0430\u043d\u0441\u043f\u0438\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"),(0,i.kt)("p",null,"\u0422\u0440\u0430\u043d\u0441\u043f\u0438\u043b\u044f\u0442\u043e\u0440\u044b \u0434\u043e\u0432\u043e\u043b\u044c\u043d\u043e \u0441\u043b\u043e\u0436\u043d\u044b\u0435."),(0,i.kt)("p",null,"\u0412\u043e\u0442 \u043f\u0440\u0438\u043c\u0435\u0440 \u0438\u0437 RogueLibs:"),(0,i.kt)(s.Z,{defaultValue:"helper",values:[{label:"\u0412\u0441\u043f\u043e\u043c\u043e\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u044b",value:"helper"},{label:"Harmony",value:"harmony"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"helper",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public static IEnumerable<CodeInstruction> StatusEffects_AddStatusEffect(IEnumerable<CodeInstruction> codeEnumerable)\n    => codeEnumerable.AddRegionAfter(\n        new Func<CodeInstruction, bool>[]\n        {\n            i => i.IsLdloc(),\n            i => i.opcode == OpCodes.Ldarg_3,\n            i => i.opcode == OpCodes.Stfld && i.StoresField(causingAgentField),\n        },\n        new Func<CodeInstruction[], CodeInstruction>[]\n        {\n            a => a[0],\n            _ => new CodeInstruction(OpCodes.Ldarg_0),\n            _ => new CodeInstruction(OpCodes.Call, typeof(RogueLibsPlugin).GetMethod(nameof(SetupEffectHook))),\n        });\n\nprivate static readonly FieldInfo causingAgentField = typeof(StatusEffect).GetField(nameof(StatusEffect.causingAgent));\n"))),(0,i.kt)(r.Z,{value:"harmony",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public static IEnumerable<CodeInstruction> StatusEffects_AddStatusEffect(IEnumerable<CodeInstruction> code)\n{\n    bool searching = true;\n    int current = 0;\n    CodeInstruction[] matches = new CodeInstruction[after.Length];\n    foreach (CodeInstruction instr in code)\n    {\n        yield return instr;\n        if (searching)\n        {\n            if (current is 0 ? instr.IsLdloc()\n                : current is 1 ? instr.opcode == OpCodes.Ldarg_3\n                : instr.opcode == OpCodes.Stfld && instr.StoresField(causingAgentField))\n            {\n                matches[current] = instr;\n                if (++current is 3)\n                {\n                    searching = false;\n                    yield return matches[0];\n                    yield return new CodeInstruction(OpCodes.Ldarg_0);\n                    yield return new CodeInstruction(OpCodes.Call, typeof(RogueLibsPlugin).GetMethod(nameof(SetupEffectHook)));\n                }\n            }\n            else current = 0;\n        }\n    }\n}\n\nprivate static readonly FieldInfo causingAgentField = typeof(StatusEffect).GetField(nameof(StatusEffect.causingAgent));\n")),(0,i.kt)("p",null,"\u0414\u0430, \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u043f\u0440\u043e\u0441\u0442\u043e. \u041d\u043e \u044d\u0442\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u044d\u0442\u043e \u043e\u0447\u0435\u043d\u044c \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u043f\u0440\u0438\u043c\u0435\u0440."))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u0418\u0437\u0431\u0435\u0433\u0430\u0439\u0442\u0435 \u0442\u044f\u0436\u0451\u043b\u044b\u0445 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0439")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u041f\u0440\u0438 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0438 \u043f\u0440\u0435\u0434\u0438\u043a\u0430\u0442\u043e\u0432, \u043f\u043e\u043c\u043d\u0438\u0442\u0435, \u0447\u0442\u043e \u043e\u043d\u0438 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0432\u044b\u0437\u0432\u0430\u043d\u044b \u0441\u043e\u0442\u043d\u0438 \u0438\u043b\u0438 \u0442\u044b\u0441\u044f\u0447\u0438 \u0440\u0430\u0437. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u0440\u0430\u043d\u0435\u0435 \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"FieldInfo"),", \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u043e\u0435 \u0432\u0430\u0448\u0438\u043c \u043f\u0440\u0435\u0434\u0438\u043a\u0430\u0442\u043e\u043c, \u043f\u0440\u043e\u0441\u0442\u043e \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435 \u0435\u0433\u043e \u0432 \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043f\u043e\u043b\u0435, \u043a\u0430\u043a \u0432 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0432\u044b\u0448\u0435."),(0,i.kt)("p",{parentName:"div"},"\u0422\u0430\u043a\u0438\u0435 \u0442\u044f\u0436\u0451\u043b\u044b\u0435 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u043c\u043e\u0433\u0443\u0442 \u0441\u0442\u043e\u0438\u0442\u044c \u0432\u0430\u043c ",(0,i.kt)("strong",{parentName:"p"},"\u0441\u043e\u0442\u0435\u043d \u043c\u0438\u043b\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434")," \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430 (\u0438\u043b\u0438 \u0434\u0430\u0436\u0435 \u0446\u0435\u043b\u044b\u0435 \u0441\u0435\u043a\u0443\u043d\u0434\u044b, \u0435\u0441\u043b\u0438 \u0432\u044b \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442\u0435 \u043d\u0430\u0434 \u043a\u0440\u0443\u043f\u043d\u044b\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u043c)."))),(0,i.kt)("p",null,"\u0412\u043e\u0442 \u0435\u0449\u0451 \u043e\u0434\u0438\u043d \u043f\u0440\u0438\u043c\u0435\u0440 \u0438\u0437 RogueLibs:"),(0,i.kt)(s.Z,{defaultValue:"helper",values:[{label:"\u0412\u0441\u043f\u043e\u043c\u043e\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u044b",value:"helper"},{label:"Harmony",value:"harmony"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"helper",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'public static IEnumerable<CodeInstruction> Unlocks_LoadInitialUnlocks(IEnumerable<CodeInstruction> codeEnumerable)\n    => codeEnumerable.ReplaceRegion(\n        new Func<CodeInstruction, bool>[]\n        {\n            i => i.opcode == OpCodes.Callvirt && i.Calls(List_Unlock_GetEnumerator),\n            i => i.IsStloc(),\n        },\n        new Func<CodeInstruction, bool>[]\n        {\n            i => i.opcode == OpCodes.Callvirt,\n            i => i.opcode == OpCodes.Endfinally,\n            i => i.opcode == OpCodes.Ldarg_0,\n        },\n        new CodeInstruction[]\n        {\n            new CodeInstruction(OpCodes.Pop),\n            new CodeInstruction(OpCodes.Pop),\n            new CodeInstruction(OpCodes.Call, typeof(RogueLibsPlugin).GetMethod(nameof(LoadUnlockWrappersAndCategorize)))\n        });\n\nprivate static readonly MethodInfo List_Unlock_GetEnumerator = typeof(List<Unlock>).GetMethod("GetEnumerator");\n'))),(0,i.kt)(r.Z,{value:"harmony",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'public static IEnumerable<CodeInstruction> Unlocks_LoadInitialUnlocks(IEnumerable<CodeInstruction> code)\n{\n    int state = 0;\n    int current = 0;\n    CodeInstruction[] beginCache = new CodeInstruction[2];\n    foreach (CodeInstruction instr in code)\n    {\n        if (state is 2)\n            yield return instr;\n        else if (state is 0)\n        {\n            if (current is 0 ? instr.opcode == OpCodes.Callvirt && instr.Calls(List_Unlock_GetEnumerator)\n                : instr.IsStloc())\n            {\n                beginCache[current] = instr;\n                if (++current == 2)\n                {\n                    state = 1;\n                    current = 0;\n                }\n            }\n            else\n            {\n                if (current > 0)\n                {\n                    for (int i = 0; i < current; i++)\n                        yield return beginCache[i];\n                    current = 0;\n                }\n                yield return instr;\n            }\n        }\n        else\n        {\n            if (current is 0 ? instr.opcode == OpCodes.Callvirt\n                : current is 1 ? instr.opcode == OpCodes.Endfinally\n                : instr.opcode == OpCodes.Ldarg_0)\n            {\n                if (++current == 3)\n                {\n                    yield return new CodeInstruction(OpCodes.Pop);\n                    yield return new CodeInstruction(OpCodes.Pop);\n                    yield return new CodeInstruction(OpCodes.Call, typeof(RogueLibsPlugin).GetMethod(nameof(LoadUnlockWrappersAndCategorize)));\n                }\n            }\n            else current = 0;\n        }\n    }\n}\n\nprivate static readonly MethodInfo List_Unlock_GetEnumerator = typeof(List<Unlock>).GetMethod("GetEnumerator");\n')),(0,i.kt)("p",null,"\u0412\u0441\u0451 \u0435\u0449\u0451 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u0440\u043e\u0441\u0442\u043e. \u042f \u043f\u0440\u043e\u0441\u0442\u043e \u043d\u0435 \u0445\u043e\u0447\u0443 \u0442\u0440\u0430\u0442\u0438\u0442\u044c \u0441\u0432\u043e\u0451 \u0432\u0440\u0435\u043c\u044f \u043d\u0430 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0441\u043b\u043e\u0436\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u043c\u0435\u0440\u0430."))))}h.isMDXComponent=!0}}]);