"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8331],{4214:function(e,t,n){n.d(t,{Z:function(){return i}});var o=n(7294),a=n(1736);function i(e){var t=e.children,n=e.language;return o.createElement(a.Z,{className:"language-"+(n||"csharp")},t.replace(/\t/g,"    "))}},1016:function(e,t,n){n.d(t,{Z:function(){return s}});var o=n(7462),a=n(3366),i=n(7294),r=["children"];function s(e){var t=e.children,n=(0,a.Z)(e,r);return i.createElement("div",(0,o.Z)({role:"tabpanel"},n),t)}},250:function(e,t,n){n.d(t,{Z:function(){return m}});var o=n(7294),a=n(5773),i=n(6010),r="tabItem_V91s",s="tabItemActive_JsUu",l="tab_ntnM";var u=37,c=39;function m(e){var t=e.lazy,n=e.defaultValue,m=e.values,p=e.groupId,d=(0,a.UB)(),k=d.tabGroupChoices,h=d.setTabGroupChoices,v=(0,o.useState)(n),C=v[0],g=v[1],f=o.Children.toArray(e.children),b=[];if(null!=p){var I=k[p];null!=I&&I!==C&&m.some((function(e){return e.value===I}))&&g(I)}var N=function(e){var t=e.currentTarget,n=b.indexOf(t),o=m[n].value;g(o),null!=p&&(h(p,o),setTimeout((function(){var e,n,o,a,i,r,l,u;(e=t.getBoundingClientRect(),n=e.top,o=e.left,a=e.bottom,i=e.right,r=window,l=r.innerHeight,u=r.innerWidth,n>=0&&i<=u&&a<=l&&o>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},H=function(e){var t;switch(e.keyCode){case c:var n=b.indexOf(e.target)+1;t=b[n]||b[0];break;case u:var o=b.indexOf(e.target)-1;t=b[o]||b[b.length-1];break;default:return}t.focus()},S=function(e,t){return t.value===e||t.values&&-1!=t.values.indexOf(e)};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:"tabs"},m.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,className:(0,i.Z)("tabs__item",r,{"tabs__item--active":C===t}),key:t,ref:function(e){return e&&b.push(e)},onKeyDown:H,onFocus:N,onClick:N},n)}))),t?o.cloneElement(f.find((function(e){return S(C,e.props)})),{className:l}):o.createElement("div",null,f.map((function(e,t){return o.cloneElement(e,{key:t,hidden:!S(C,e.props),className:l})}))),o.createElement("br",null))}},2103:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return k},default:function(){return v}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=n(250),s=n(1016),l=(n(4996),n(4214)),u=n(5306),c=["components"],m={},p="\u0425\u0443\u043a\u0438",d={unversionedId:"dev/hooks/hooks",id:"dev/hooks/hooks",title:"\u0425\u0443\u043a\u0438",description:"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 IHook",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/dev/hooks/hooks.mdx",sourceDirName:"dev/hooks",slug:"/dev/hooks/",permalink:"/RogueLibs/ru/docs/dev/hooks/",editUrl:"https://github.com/SugarBarrel/RogueLibs/edit/main/website/docs/dev/hooks/hooks.mdx",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u043f\u0430\u0442\u0447\u0435\u0439",permalink:"/RogueLibs/ru/docs/dev/patching-utilities"},next:{title:"\u0424\u0430\u0431\u0440\u0438\u043a\u0438 \u0445\u0443\u043a\u043e\u0432",permalink:"/RogueLibs/ru/docs/dev/hooks/hook-factories"}},k=[{value:"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 <code>IHook</code>",id:"ihook",children:[],level:2},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"usage",children:[],level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"examples",children:[],level:2}],h={toc:k};function v(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u0445\u0443\u043a\u0438"},"\u0425\u0443\u043a\u0438"),(0,i.kt)("h2",{id:"ihook"},"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ",(0,i.kt)("inlineCode",{parentName:"h2"},"IHook")),(0,i.kt)("p",null,"\u0418\u0442\u0430\u043a, \u0445\u0443\u043a - \u044d\u0442\u043e \u043e\u0431\u044a\u0435\u043a\u0442, \u043f\u0440\u0438\u0446\u0435\u043f\u043b\u044f\u0435\u043c\u044b\u0439 \u043a \u0434\u0440\u0443\u0433\u043e\u043c\u0443 \u043e\u0431\u044a\u0435\u043a\u0442\u0443. \u0412 RogueLibs \u0442\u0438\u043f\u044b \u0445\u0443\u043a\u043e\u0432 \u043d\u0430\u0441\u043b\u0435\u0434\u0443\u044e\u0442 \u043e\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"IHook")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"IHook<T>"),"."),(0,i.kt)("p",null,"RogueLibsPatcher.dll \u0441\u043e\u0437\u0434\u0430\u0451\u0442 \u043f\u043e\u043b\u044f \u043f\u043e\u0434 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f\u043c\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"__RogueLibsHooks")," \u0432\u043e \u0432\u0441\u0435\u0445 \u0442\u0438\u043f\u0430\u0445, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u0438\u0446\u0435\u043f\u0438\u0442\u044c \u0445\u0443\u043a\u0438. \u041e\u0431\u044a\u0435\u043a\u0442 \u043a\u043b\u0430\u0441\u0441\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"IHookController")," \u043f\u043e\u0442\u043e\u043c \u043d\u0430\u0437\u043d\u0430\u0447\u0430\u0435\u0442\u0441\u044f \u0432 \u044d\u0442\u043e \u043f\u043e\u043b\u0435 \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u0440\u0438\u0446\u0435\u043f\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u0445\u0443\u043a\u0430\u043c\u0438. \u041e\u043d \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043c\u0435\u0442\u043e\u0434\u044b \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f, \u043f\u0440\u0438\u0446\u0435\u043f\u043b\u0435\u043d\u0438\u044f \u0438 \u043e\u0442\u0446\u0435\u043f\u043b\u0435\u043d\u0438\u044f \u0445\u0443\u043a\u043e\u0432 \u043e\u0442 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430. \u0414\u0443\u043c\u0430\u0439\u0442\u0435 \u043e \u043d\u0451\u043c \u043a\u0430\u043a \u043e \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438 \u0445\u0443\u043a\u043e\u0432."),(0,i.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0441\u0432\u043e\u0438 \u0445\u0443\u043a\u0438 \u043d\u0430\u0441\u043b\u0435\u0434\u0443\u044f \u043e\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"IHook<T>")," \u0438\u043b\u0438 \u043e\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"HookBase<T>"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomHook.cs"',title:'"MyCustomHook.cs"'},'public class MyCustomHook : HookBase<InvItem>\n{\n    protected override void Initialize() { }\n    \n    public void StoreInfo(string data)\n    {\n        Debug.Log($"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043e {data}.");\n        Data = data;\n    }\n    public string LoadInfo()\n    {\n        Debug.Log($"\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043e {Data}.");\n        return Data;\n    }\n    private string Data;\n}\n')),(0,i.kt)("h2",{id:"usage"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,i.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0445\u0443\u043a\u0438 \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0432\u0441\u044f\u043a\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'MyCustomHook hook = item.AddHook<MyCustomHook>();\nhook.StoreInfo("\u043a\u0430\u043a\u0430\u044f-\u0442\u043e-\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f");\n')),(0,i.kt)("p",null,"\u041f\u043e\u0442\u043e\u043c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u0443 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u0433\u0434\u0435-\u043d\u0438\u0431\u0443\u0434\u044c \u0432 \u0434\u0440\u0443\u0433\u043e\u043c \u043c\u0435\u0441\u0442\u0435:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"MyCustomHook hook = item.GetHook<MyCustomHook>();\nif (hook != null)\n{\n    string data = hook.LoadInfo();\n}\n")),(0,i.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0438\u0446\u0435\u043f\u043b\u044f\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0445\u0443\u043a\u043e\u0432 \u043e\u0434\u043d\u043e\u0433\u043e \u0442\u0438\u043f\u0430 \u0442\u043e\u0436\u0435:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'MyCustomHook hook = item.AddHook<MyCustomHook>();\nhook.StoreInfo("\u043a\u0430\u043a\u0430\u044f-\u0442\u043e-\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f");\nMyCustomHook hook = item.AddHook<MyCustomHook>();\nhook.StoreInfo("\u0447\u0442\u043e-\u0442\u043e-\u0434\u0440\u0443\u0433\u043e\u0435");\nMyCustomHook hook = item.AddHook<MyCustomHook>();\nhook.StoreInfo("\u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c-\u0435\u0449\u0451");\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"foreach (MyCustomHook hook in item.GetHooks<MyCustomHook>())\n{\n    string data = hook.LoadInfo();\n}\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u0421\u043e\u0432\u0435\u0442 \u043e\u0442 \u043f\u0440\u043e\u0444\u0438: \u0424\u0430\u0431\u0440\u0438\u043a\u0438 \u0445\u0443\u043a\u043e\u0432")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u0440\u0438\u0446\u0435\u043f\u043b\u044f\u0442\u044c \u0445\u0443\u043a\u0438 \u043a \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u043c \u043f\u0440\u044f\u043c\u043e \u043a\u043e\u0433\u0434\u0430 \u043e\u043d\u0438 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u044e\u0442\u0441\u044f, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",(0,i.kt)("a",{parentName:"p",href:"./hook-factories"},"\u0424\u0430\u0431\u0440\u0438\u043a\u0438 \u0445\u0443\u043a\u043e\u0432"),"."))),(0,i.kt)("h2",{id:"examples"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,i.kt)("p",null,"\u041a\u0441\u0442\u0430\u0442\u0438, \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0435 \u043a\u043b\u0430\u0441\u0441\u044b (",(0,i.kt)("inlineCode",{parentName:"p"},"CustomItem"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomTrait"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomEffect"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomAbility")," \u0438 \u0434\u0440\u0443\u0433\u0438\u0435) \u0442\u043e\u0436\u0435 \u0445\u0443\u043a\u0438:"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0445 \u043a\u043b\u0430\u0441\u0441\u043e\u0432 \u0432 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SugarBarrel/RogueLibs/tree/main/RogueLibsCore/Hooks"},"\u0438\u0441\u0445\u043e\u0434\u043d\u043e\u043c \u043a\u043e\u0434\u0435 RogueLibs"),"."))),(0,i.kt)(r.Z,{defaultValue:"spicerack",values:[{label:"Spice Rack",value:"spicerack"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"spicerack",mdxType:"TabItem"},(0,i.kt)("p",null,"\u041e\u0442\u043b\u0438\u0447\u043d\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 \u0441 \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u043c\u0438 \u0445\u0443\u043a\u0430\u043c\u0438, \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u044e\u0449\u0438\u043c\u0438 \u043f\u0440\u0438\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b."),(0,i.kt)("p",null,"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043f\u0440\u0438\u043c\u0435\u0440 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u043c\u043e\u0433\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430 ",(0,i.kt)("a",{parentName:"p",href:"../items/combinable-items#examples"},"\u0442\u0443\u0442"),"."),(0,i.kt)(l.Z,{mdxType:"CodeSnippet"},u.Z))))}v.isMDXComponent=!0},5306:function(e,t){t.Z='using UnityEngine;\n\nnamespace RogueLibsCore.Test\n{\n    [ItemCategories(RogueCategories.Food, RogueCategories.Health)]\n    public class SpiceRack : CustomItem, IItemCombinable\n    {\n        [RLSetup]\n        public static void Setup()\n        {\n            RogueLibs.CreateCustomItem<SpiceRack>()\n                .WithName(new CustomNameInfo("Spice Rack"))\n                .WithDescription(new CustomNameInfo("Combine with any food item to increase its healing properties."))\n                .WithSprite(Properties.Resources.SpiceRack)\n                .WithUnlock(new ItemUnlock\n                {\n                    UnlockCost = 10,\n                    LoadoutCost = 3,\n                    CharacterCreationCost = 2,\n                    Prerequisites = { VanillaItems.FoodProcessor },\n                });\n\n            SeasonCursorText = RogueLibs.CreateCustomName("SeasonItem", NameTypes.Interface, new CustomNameInfo("Season"));\n        }\n        private static CustomName SeasonCursorText = null!;\n\n        public override void SetupDetails()\n        {\n            Item.itemType = ItemTypes.Combine;\n            Item.itemValue = 4;\n            Item.initCount = 10;\n            Item.rewardCount = 15;\n            Item.stackable = true;\n            Item.hasCharges = true;\n        }\n        public bool CombineFilter(InvItem other)\n        {\n            if (other.itemType != ItemTypes.Food || other.healthChange is 0\n                || !other.Categories.Contains(RogueCategories.Food)) return false;\n\n            SpicedHook? hook = other.GetHook<SpicedHook>();\n            return hook is null || hook.Spiciness < 3;\n        }\n        public bool CombineItems(InvItem other)\n        {\n            if (!CombineFilter(other)) return false;\n\n            SpicedHook hook = other.GetHook<SpicedHook>() ?? other.AddHook<SpicedHook>();\n            hook.IncreaseSpiciness();\n\n            Count--;\n            gc.audioHandler.Play(Owner, VanillaAudio.CombineItem);\n            return true;\n        }\n        public CustomTooltip CombineCursorText(InvItem other) => SeasonCursorText;\n        public CustomTooltip CombineTooltip(InvItem other)\n        {\n            if (!CombineFilter(other)) return default;\n\n            SpicedHook? hook = other.GetHook<SpicedHook>();\n            int bonus = hook is null ? (int)Mathf.Ceil(other.healthChange / 4f) : hook.HealthBonus;\n            return new CustomTooltip($"+{bonus}", Color.green);\n        }\n\n        private class SpicedHook : HookBase<InvItem>\n        {\n            protected override void Initialize()\n                => HealthBonus = (int)Mathf.Ceil(Instance.healthChange / 4f);\n\n            public int HealthBonus { get; private set; }\n            public int Spiciness { get; private set; }\n\n            public void IncreaseSpiciness()\n            {\n                if (Spiciness is 3) return;\n\n                Spiciness++;\n                Instance.healthChange += HealthBonus;\n            }\n        }\n    }\n}\n'}}]);