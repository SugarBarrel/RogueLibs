"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4798],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1016:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7462),o=n(7294);function r(e){let{children:t,...n}=e;return o.createElement("div",(0,a.Z)({role:"tabpanel"},n),t)}},250:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7294),o=n(7094),r=n(6010);const i="tabItem_V91s",s="tabItemActive_JsUu",l="tab_ntnM";const c=37,u=39;function p(e){const{lazy:t,defaultValue:n,values:p,groupId:d}=e,{tabGroupChoices:h,setTabGroupChoices:m}=(0,o.U)(),[f,y]=(0,a.useState)(n),g=a.Children.toArray(e.children),b=[];if(null!=d){const e=h[d];null!=e&&e!==f&&p.some((t=>t.value===e))&&y(e)}const v=e=>{const t=e.currentTarget,n=b.indexOf(t),a=p[n].value;y(a),null!=d&&(m(d,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:o}=e.getBoundingClientRect(),{innerHeight:r,innerWidth:i}=window;return t>=0&&o<=i&&a<=r&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((()=>t.classList.remove(s)),2e3))}),150))},C=e=>{let t;switch(e.keyCode){case u:{const n=b.indexOf(e.target)+1;t=b[n]||b[0];break}case c:{const n=b.indexOf(e.target)-1;t=b[n]||b[b.length-1];break}default:return}t.focus()},k=(e,t)=>t.value===e||t.values&&-1!=t.values.indexOf(e);return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:"tabs"},p.map((e=>{let{value:t,label:n}=e;return a.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,r.Z)("tabs__item",i,{"tabs__item--active":f===t}),key:t,ref:e=>e&&b.push(e),onKeyDown:C,onFocus:v,onClick:v},n)}))),t?a.cloneElement(g.find((e=>k(f,e.props))),{className:l}):a.createElement("div",null,g.map(((e,t)=>a.cloneElement(e,{key:t,hidden:!k(f,e.props),className:l})))),a.createElement("br",null))}},5792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(7462),o=(n(7294),n(3905)),r=n(250),i=n(1016);n(4996);const s={},l="Patching Utilities",c={unversionedId:"dev/patching-utilities",id:"dev/patching-utilities",title:"Patching Utilities",description:"RogueLibs provides several utilities to help you with patching. Whether you use Harmony's attributes, Harmony instances directly, RogueLibs' stuff or something else, is your choice. All of them have their own pros and cons. You can learn more about Harmony here.",source:"@site/docs/dev/patching-utilities.mdx",sourceDirName:"dev",slug:"/dev/patching-utilities",permalink:"/RogueLibs/docs/dev/patching-utilities",draft:!1,editUrl:"https://github.com/SugarBarrel/RogueLibs/edit/main/website/docs/dev/patching-utilities.mdx",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Extra Stuff",permalink:"/RogueLibs/docs/dev/extra"},next:{title:"Hooks",permalink:"/RogueLibs/docs/dev/hooks/"}},u={},p=[{value:"<code>RLSetup</code> attribute",id:"rlsetup",level:2},{value:"<code>RoguePatcher</code>",id:"roguepatcher",level:2},{value:"Transpiler helper methods",id:"transpiler-helper-methods",level:2}],d={toc:p};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"patching-utilities"},"Patching Utilities"),(0,o.kt)("p",null,"RogueLibs provides several utilities to help you with patching. Whether you use Harmony's attributes, Harmony instances directly, RogueLibs' stuff or something else, is your choice. All of them have their own pros and cons. You can learn more ",(0,o.kt)("a",{parentName:"p",href:"https://harmony.pardeike.net/articles/intro.html"},"about Harmony here"),"."),(0,o.kt)("h2",{id:"rlsetup"},(0,o.kt)("inlineCode",{parentName:"h2"},"RLSetup")," attribute"),(0,o.kt)("p",null,"Since RogueLibs handles custom stuff as classes, you might forget to initialize a new class in your plugin's ",(0,o.kt)("inlineCode",{parentName:"p"},"Awake"),". That's why ",(0,o.kt)("inlineCode",{parentName:"p"},"RLSetup")," attribute is here. You can just add it to a static method, and initialize your custom thing in there."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomItem.cs"',title:'"MyCustomItem.cs"'},'public class MyCustomItem : CustomItem\n{\n    // highlight-start\n    [RLSetup]\n    public static void Setup()\n    // highlight-end\n    {\n        RogueLibs.CreateCustomItem<MyCustomItem>()\n            .WithName(new CustomNameInfo("Name"))\n            .WithDescription(new CustomNameInfo("Description"))\n            .WithSprite(Properties.Resources.Sprite)\n            .WithUnlock(new ItemUnlock());\n        \n        RogueLibs.CreateCustomName("SomeName", "Dialogue", new CustomNameInfo("Text"));\n    }\n}\n')),(0,o.kt)("p",null,"You'll just have to call the following method in your plugin's ",(0,o.kt)("inlineCode",{parentName:"p"},"Awake"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCoolPlugin.cs"',title:'"MyCoolPlugin.cs"'},"    public void Awake()\n    {\n        // highlight-next-line\n        RogueLibs.LoadFromAssembly();\n        /* ... */\n    }\n")),(0,o.kt)("admonition",{title:"Pro-tip",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Seriously, you should use it. It helps with versioning too. All of the logic in one place.")),(0,o.kt)("h2",{id:"roguepatcher"},(0,o.kt)("inlineCode",{parentName:"h2"},"RoguePatcher")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"RoguePatcher")," is a small helper class that makes writing patches a little bit faster and easier. If you need more control (patch order, priority, etc.), then you should use the original Harmony methods."),(0,o.kt)(r.Z,{defaultValue:"roguepatcher",values:[{label:"RoguePatcher",value:"roguepatcher"},{label:"Harmony",value:"harmony"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"roguepatcher",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"RoguePatcher patcher = new RoguePatcher(this);\n\npatcher.Postfix(typeof(StatusEffects), nameof(StatusEffects.hasStatusEffect));\n\npatcher.Postfix(typeof(InvDatabase), nameof(InvDatabase.ChooseArmor), new Type[1] { typeof(string) });\n"))),(0,o.kt)(i.Z,{value:"harmony",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"Harmony harmony = new Harmony(pluginGUID);\n\nMethodInfo original = AccessTools.Method(typeof(StatusEffects), nameof(StatusEffects.hasStatusEffect));\nMethodInfo patch = AccessTools.Method(GetType(), nameof(MyPatchMethod));\nharmony.Patch(original, new HarmonyMethod(patch));\n\noriginal = AccessTools.Method(typeof(InvDatabase), nameof(InvDatabase.ChooseArmor), new Type[1] { typeof(string) });\npatch = AccessTools.Method(GetType(), nameof(MyPatchMethod2));\nharmony.Patch(original, new HarmonyMethod(patch));\n")))),(0,o.kt)("admonition",{title:"Pro-tip",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Instead of specifying method names using strings, you should specify them using the ",(0,o.kt)("inlineCode",{parentName:"p"},"nameof")," keyword. Use string names only if the method you're trying to patch is not public.")),(0,o.kt)("p",null,"Patch methods should have the following name: ",(0,o.kt)("inlineCode",{parentName:"p"},"<TargetType>_<TargetMethod>"),". In the example above, ",(0,o.kt)("inlineCode",{parentName:"p"},"RoguePatcher")," will search for patch methods called ",(0,o.kt)("inlineCode",{parentName:"p"},"StatusEffects_hasStatusEffect")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"InvDatabase_ChooseArmor")," in your plugin's class."),(0,o.kt)("p",null,"You can change the type to search patch methods in. Specify it in the constructor or set the property between patches:"),(0,o.kt)(r.Z,{defaultValue:"roguepatcher",values:[{label:"RoguePatcher",value:"roguepatcher"},{label:"Harmony",value:"harmony"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"roguepatcher",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public class MyCoolPlugin : BaseUnityPlugin\n{\n    public void Awake()\n    {\n        // highlight-next-line\n        RoguePatcher patcher = new RoguePatcher(this, typeof(MyCoolPatches));\n\n        patcher.Postfix(typeof(StatusEffects), nameof(StatusEffects.hasStatusEffect));\n\n        // highlight-next-line\n        patcher.TypeWithPatches = typeof(MyEvenCoolerPatches);\n\n        patcher.Postfix(typeof(InvDatabase), nameof(InvDatabase.ChooseArmor), new Type[1] { typeof(string) });\n    }\n}\npublic class MyCoolPatches\n{\n    public static void StatusEffects_hasStatusEffect(StatusEffects __instance)\n    {\n        /* ... */\n    }\n}\npublic class MyEvenCoolerPatches\n{\n    public static void InvDatabase_ChooseArmor(InvDatabase __instance, string previousArmorName)\n    {\n        /* ... */\n    }\n}\n"))),(0,o.kt)(i.Z,{value:"harmony",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public class MyCoolPlugin : BaseUnityPlugin\n{\n    public void Awake()\n    {\n        Harmony harmony = new Harmony(pluginGUID);\n\n        MethodInfo original = AccessTools.Method(typeof(StatusEffects), nameof(StatusEffects.hasStatusEffect));\n        MethodInfo patch = AccessTools.Method(typeof(MyCoolPatches), nameof(MyPatchMethod));\n        harmony.Patch(original, new HarmonyMethod(patch));\n\n        original = AccessTools.Method(typeof(InvDatabase), nameof(InvDatabase.ChooseArmor), new Type[1] { typeof(string) });\n        patch = AccessTools.Method(typeof(MyEvenCoolerPatches), nameof(MyPatchMethod2));\n        harmony.Patch(original, new HarmonyMethod(patch));\n    }\n}\npublic class MyCoolPatches\n{\n    public static void MyPatchMethod(StatusEffects __instance)\n    {\n        /* ... */\n    }\n}\npublic class MyEvenCoolerPatches\n{\n    public static void MyPatchMethod2(InvDatabase __instance, string previousArmorName)\n    {\n        /* ... */\n    }\n}\n")))),(0,o.kt)("h2",{id:"transpiler-helper-methods"},"Transpiler helper methods"),(0,o.kt)("p",null,"Transpilers are kind of complicated, since they use a low-level Intermediate Language (IL) instead of C# (branches, loops and conditions are the hardest part in here). As an example, here's one of the simplest transpilers from RogueLibs:"),(0,o.kt)(r.Z,{defaultValue:"helper",values:[{label:"Helper methods",value:"helper"},{label:"Harmony",value:"harmony"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"helper",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public static IEnumerable<CodeInstruction> StatusEffects_AddStatusEffect(IEnumerable<CodeInstruction> codeEnumerable)\n    => codeEnumerable.AddRegionAfter(\n        new Func<CodeInstruction, bool>[]\n        {\n            i => i.IsLdloc(),\n            i => i.opcode == OpCodes.Ldarg_3,\n            i => i.opcode == OpCodes.Stfld && i.StoresField(causingAgentField),\n        },\n        new Func<CodeInstruction[], CodeInstruction>[]\n        {\n            a => a[0],\n            _ => new CodeInstruction(OpCodes.Ldarg_0),\n            _ => new CodeInstruction(OpCodes.Call, typeof(RogueLibsPlugin).GetMethod(nameof(SetupEffectHook))),\n        });\n\nprivate static readonly FieldInfo causingAgentField = typeof(StatusEffect).GetField(nameof(StatusEffect.causingAgent));\n"))),(0,o.kt)(i.Z,{value:"harmony",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public static IEnumerable<CodeInstruction> StatusEffects_AddStatusEffect(IEnumerable<CodeInstruction> code)\n{\n    bool searching = true;\n    int current = 0;\n    CodeInstruction[] matches = new CodeInstruction[after.Length];\n    foreach (CodeInstruction instr in code)\n    {\n        yield return instr;\n        if (searching)\n        {\n            if (current is 0 ? instr.IsLdloc()\n                : current is 1 ? instr.opcode == OpCodes.Ldarg_3\n                : instr.opcode == OpCodes.Stfld && instr.StoresField(causingAgentField))\n            {\n                matches[current] = instr;\n                if (++current is 3)\n                {\n                    searching = false;\n                    yield return matches[0];\n                    yield return new CodeInstruction(OpCodes.Ldarg_0);\n                    yield return new CodeInstruction(OpCodes.Call, typeof(RogueLibsPlugin).GetMethod(nameof(SetupEffectHook)));\n                }\n            }\n            else current = 0;\n        }\n    }\n}\n\nprivate static readonly FieldInfo causingAgentField = typeof(StatusEffect).GetField(nameof(StatusEffect.causingAgent));\n")),(0,o.kt)("p",null,"Yeah, it looks easy. But that's only because it's a very simple example."))),(0,o.kt)("admonition",{title:"Avoid heavy calculations",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When writing predicates, keep in mind that they might get called hundreds or thousands of times. For example, you can pre-calculate the ",(0,o.kt)("inlineCode",{parentName:"p"},"FieldInfo")," value, used by your predicate, just put it in a static readonly field, like in the example above."),(0,o.kt)("p",{parentName:"admonition"},"Heavy calculations like that can cost you ",(0,o.kt)("strong",{parentName:"p"},"hundreds of milliseconds")," of start-up time (or even entire seconds, if you're working on a big project).")),(0,o.kt)("p",null,"Here's another example from RogueLibs:"),(0,o.kt)(r.Z,{defaultValue:"helper",values:[{label:"Helper methods",value:"helper"},{label:"Harmony",value:"harmony"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"helper",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'public static IEnumerable<CodeInstruction> Unlocks_LoadInitialUnlocks(IEnumerable<CodeInstruction> codeEnumerable)\n    => codeEnumerable.ReplaceRegion(\n        new Func<CodeInstruction, bool>[]\n        {\n            i => i.opcode == OpCodes.Callvirt && i.Calls(List_Unlock_GetEnumerator),\n            i => i.IsStloc(),\n        },\n        new Func<CodeInstruction, bool>[]\n        {\n            i => i.opcode == OpCodes.Callvirt,\n            i => i.opcode == OpCodes.Endfinally,\n            i => i.opcode == OpCodes.Ldarg_0,\n        },\n        new CodeInstruction[]\n        {\n            new CodeInstruction(OpCodes.Pop),\n            new CodeInstruction(OpCodes.Pop),\n            new CodeInstruction(OpCodes.Call, typeof(RogueLibsPlugin).GetMethod(nameof(LoadUnlockWrappersAndCategorize))),\n        });\n\nprivate static readonly MethodInfo List_Unlock_GetEnumerator = typeof(List<Unlock>).GetMethod("GetEnumerator");\n'))),(0,o.kt)(i.Z,{value:"harmony",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'public static IEnumerable<CodeInstruction> Unlocks_LoadInitialUnlocks(IEnumerable<CodeInstruction> code)\n{\n    int state = 0;\n    int current = 0;\n    CodeInstruction[] beginCache = new CodeInstruction[2];\n    foreach (CodeInstruction instr in code)\n    {\n        if (state is 2)\n            yield return instr;\n        else if (state is 0)\n        {\n            if (current is 0 ? instr.opcode == OpCodes.Callvirt && instr.Calls(List_Unlock_GetEnumerator)\n                : instr.IsStloc())\n            {\n                beginCache[current] = instr;\n                if (++current == 2)\n                {\n                    state = 1;\n                    current = 0;\n                }\n            }\n            else\n            {\n                if (current > 0)\n                {\n                    for (int i = 0; i < current; i++)\n                        yield return beginCache[i];\n                    current = 0;\n                }\n                yield return instr;\n            }\n        }\n        else\n        {\n            if (current is 0 ? instr.opcode == OpCodes.Callvirt\n                : current is 1 ? instr.opcode == OpCodes.Endfinally\n                : instr.opcode == OpCodes.Ldarg_0)\n            {\n                if (++current == 3)\n                {\n                    yield return new CodeInstruction(OpCodes.Pop);\n                    yield return new CodeInstruction(OpCodes.Pop);\n                    yield return new CodeInstruction(OpCodes.Call, typeof(RogueLibsPlugin).GetMethod(nameof(LoadUnlockWrappersAndCategorize)));\n                }\n            }\n            else current = 0;\n        }\n    }\n}\n\nprivate static readonly MethodInfo List_Unlock_GetEnumerator = typeof(List<Unlock>).GetMethod("GetEnumerator");\n')),(0,o.kt)("p",null,"Still relatively simple. I just don't want to spend my time writing a really complicated example."))),(0,o.kt)("admonition",{title:"BTHarmonyUtils",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You might also want to consider using BlazingTwist's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/BlazingTwist/BTHarmonyUtils"},"BTHarmonyUtils"),". It provides several useful transpiler-patching utilities, similar to the ones in RogueLibs. It is easier to use, but I don't think there's any documentation on it.")))}h.isMDXComponent=!0}}]);