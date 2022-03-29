"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3451],{4214:function(e,n,t){t.d(n,{Z:function(){return a}});var o=t(7294),i=t(1736);function a(e){var n=e.children,t=e.language;return o.createElement(i.Z,{className:"language-"+(t||"csharp")},n.replace(/\t/g,"    "))}},2725:function(e,n,t){t.d(n,{Z:function(){return i}});var o=t(7294);function i(e){var n=e.color,t=(e.size||14)+"px";return o.createElement("div",{style:{display:"inline"}},o.createElement("div",{style:{display:"inline-block",width:t,height:t,background:n,marginRight:"2px"}}),o.createElement("div",{style:{display:"inline"}},n))}},5880:function(e,n,t){t.d(n,{Z:function(){return r}});var o=t(7294),i=t(6010),a={container:"container_ek75",cursorLocked:"cursorLocked_H61i",normal:"normal_n5ah",hoverable:"hoverable_F5EM",selected:"selected_mneN",locked:"locked_H8Qp",sprite:"sprite_ZRUo",tooltip:"tooltip_QxcU",count:"count_Z8Fk"};function r(e){var n=e.sprite,t=e.tooltip,r=e.tooltipColor,l=e.count,s=e.countColor,u=e.hoverable,m=e.cantClick,c=e.type,p=void 0===c?"normal":c,d=e.onClick;return o.createElement("div",{onClick:d,className:(0,i.Z)(a.container,m&&a.cursorLocked,p&&a[p],u&&a.hoverable)},n&&o.createElement("img",{key:"sprite",className:a.sprite,src:n}),t&&o.createElement("span",{key:"tooltip",className:a.tooltip,style:{color:r||"#FFED00"}},t),l&&o.createElement("span",{key:"count",className:a.count,style:{color:s||"#FFFFFF"}},l))}},1016:function(e,n,t){t.d(n,{Z:function(){return l}});var o=t(7462),i=t(3366),a=t(7294),r=["children"];function l(e){var n=e.children,t=(0,i.Z)(e,r);return a.createElement("div",(0,o.Z)({role:"tabpanel"},t),n)}},250:function(e,n,t){t.d(n,{Z:function(){return c}});var o=t(7294),i=t(5773),a=t(6010),r="tabItem_V91s",l="tabItemActive_JsUu",s="tab_ntnM";var u=37,m=39;function c(e){var n=e.lazy,t=e.defaultValue,c=e.values,p=e.groupId,d=(0,i.UB)(),C=d.tabGroupChoices,b=d.setTabGroupChoices,h=(0,o.useState)(t),f=h[0],g=h[1],v=o.Children.toArray(e.children),I=[];if(null!=p){var k=C[p];null!=k&&k!==f&&c.some((function(e){return e.value===k}))&&g(k)}var y=function(e){var n=e.currentTarget,t=I.indexOf(n),o=c[t].value;g(o),null!=p&&(b(p,o),setTimeout((function(){var e,t,o,i,a,r,s,u;(e=n.getBoundingClientRect(),t=e.top,o=e.left,i=e.bottom,a=e.right,r=window,s=r.innerHeight,u=r.innerWidth,t>=0&&a<=u&&i<=s&&o>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(l),setTimeout((function(){return n.classList.remove(l)}),2e3))}),150))},T=function(e){var n;switch(e.keyCode){case m:var t=I.indexOf(e.target)+1;n=I[t]||I[0];break;case u:var o=I.indexOf(e.target)-1;n=I[o]||I[I.length-1];break;default:return}n.focus()},S=function(e,n){return n.value===e||n.values&&-1!=n.values.indexOf(e)};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:"tabs"},c.map((function(e){var n=e.value,t=e.label;return o.createElement("li",{role:"tab",tabIndex:f===n?0:-1,"aria-selected":f===n,className:(0,a.Z)("tabs__item",r,{"tabs__item--active":f===n}),key:n,ref:function(e){return e&&I.push(e)},onKeyDown:T,onFocus:y,onClick:y},t)}))),n?o.cloneElement(v.find((function(e){return S(f,e.props)})),{className:s}):o.createElement("div",null,v.map((function(e,n){return o.cloneElement(e,{key:n,hidden:!S(f,e.props),className:s})}))),o.createElement("br",null))}},598:function(e,n,t){t.r(n),t.d(n,{PreviewTooltip:function(){return g},contentTitle:function(){return h},default:function(){return k},frontMatter:function(){return b},metadata:function(){return f},toc:function(){return v}});var o=t(7462),i=t(3366),a=t(7294),r=t(3905),l=t(250),s=t(1016),u=t(4996),m=t(2725),c=t(5880),p=t(4214),d=t(5306),C=["components"],b={},h="\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b",f={unversionedId:"dev/items/combinable-items",id:"dev/items/combinable-items",title:"\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b",description:"\u0414\u0435\u043b\u0430\u0435\u043c \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u043c\u044b\u043c\u0438",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/dev/items/combinable-items.mdx",sourceDirName:"dev/items",slug:"/dev/items/combinable-items",permalink:"/RogueLibs/ru/docs/dev/items/combinable-items",editUrl:"https://github.com/SugarBarrel/RogueLibs/edit/main/website/docs/dev/items/combinable-items.mdx",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b",permalink:"/RogueLibs/ru/docs/dev/items/usable-items"},next:{title:"\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b",permalink:"/RogueLibs/ru/docs/dev/items/targetable-items"}};function g(e){e.props;var n=(0,a.useState)((0,u.Z)("/img/TestItem.png")),t=n[0],o=n[1],i=(0,a.useState)("#FFED00"),l=i[0],s=i[1],m=(0,a.useState)("$123"),p=m[0],d=m[1];return(0,r.kt)("div",{style:{padding:"10px",border:"5px dashed var(--ifm-menu-color-background-hover)",width:"max-content"}},(0,r.kt)("input",{type:"file",accept:"image/*",onChange:function(e){if(e.target.files[0]){var n=new FileReader;n.addEventListener("load",(function(){return o(n.result)})),n.readAsDataURL(e.target.files[0])}},style:{margin:"5px"}}),(0,r.kt)("div",{style:{margin:"5px"}},(0,r.kt)(c.Z,{sprite:t,tooltip:p,tooltipColor:l,mdxType:"InventorySlot"})),(0,r.kt)("input",{type:"text",placeholder:"$123",onChange:function(e){return d(e.target.value)},style:{fontSize:"22px",margin:"5px"}}),(0,r.kt)("input",{type:"color",value:l,onChange:function(e){return s(e.target.value)}}))}var v=[{value:"\u0414\u0435\u043b\u0430\u0435\u043c \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u043c\u044b\u043c\u0438",id:"making-combinable",children:[{value:"\u041f\u0440\u0435\u0432\u044c\u044e \u0441\u043b\u043e\u0442\u0430 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u044f",id:"slot-preview",children:[],level:3}],level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"examples",children:[],level:2}],I={PreviewTooltip:g,toc:v};function k(e){var n=e.components,t=(0,i.Z)(e,C);return(0,r.kt)("wrapper",(0,o.Z)({},I,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u043c\u044b\u0435-\u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b"},"\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b"),(0,r.kt)("h2",{id:"making-combinable"},"\u0414\u0435\u043b\u0430\u0435\u043c \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u043c\u044b\u043c\u0438"),(0,r.kt)("p",null,"\u041f\u0440\u043e\u0441\u0442\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0439\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ",(0,r.kt)("inlineCode",{parentName:"p"},"IItemCombinable")," \u0432 \u043a\u043b\u0430\u0441\u0441\u0435 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCombinableItem.cs"',title:'"MyCombinableItem.cs"'},"// highlight-next-line\npublic class MyCombinableItem : CustomItem, IItemCombinable\n{\n    // highlight-start\n    public bool CombineFilter(InvItem other) { /* ... */ }\n    public bool CombineItems(InvItem other) { /* ... */ }\n    public CustomTooltip CombineTooltip(InvItem other) { /* ... */ }\n    public CustomTooltip CombineCursorText(InvItem other) { /* ... */ }\n    // highlight-end\n}\n")),(0,r.kt)("p",null,"\u041f\u043b\u044e\u0441, \u0442\u0438\u043f \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c ",(0,r.kt)("inlineCode",{parentName:"p"},'"Combine"'),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"    public override void SetupDetails()\n    {\n        // highlight-next-line\n        Item.itemType = ItemTypes.Combine;\n        /* ... */\n    }\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CombineFilter")," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u043a\u0430\u043a\u0438\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u0431\u0443\u0434\u0443\u0442 \u043f\u043e\u0434\u0441\u0432\u0435\u0447\u0438\u0432\u0430\u0442\u044c\u0441\u044f, \u043f\u0440\u0438 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0438 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CombineItems")," \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u0442 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u043f\u0440\u0435\u0434\u043c\u0435\u0442 \u0441 \u0434\u0440\u0443\u0433\u0438\u043c. \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043b\u0438 \u0431\u044b\u043b\u0438 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u044b \u0438\u043b\u0438 \u043d\u0435\u0442. \u041e\u0431\u044b\u0447\u043d\u043e, \u0435\u0441\u043b\u0438 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u043d\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u044b, \u043f\u0440\u043e\u0438\u0433\u0440\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0437\u0432\u0443\u043a ",(0,r.kt)("inlineCode",{parentName:"p"},'"CantDo"'),". \u0412\u043e\u0437\u0432\u0440\u0430\u0442 ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u043e\u0438\u0433\u0440\u044b\u0432\u0430\u0435\u0442 \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u044e."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CombineTooltip")," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0442\u0435\u043a\u0441\u0442 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438 \u0432 \u043b\u0435\u0432\u043e\u043c \u0432\u0435\u0440\u0445\u043d\u0435\u043c \u0443\u0433\u043b\u0443 \u0441\u043b\u043e\u0442\u0430 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u044f. ",(0,r.kt)("inlineCode",{parentName:"p"},"Text")," \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043d\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u0441\u044f \u043a\u0430\u043a \u043f\u0443\u0441\u0442\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430, \u0438 Color \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043d\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u0441\u044f \u043a\u0430\u043a ",(0,r.kt)(m.Z,{color:"#FFED00",mdxType:"ColorSquare"}),". ",(0,r.kt)("a",{parentName:"p",href:"#slot-preview"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u043d\u0438\u0436\u0435"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CombineCursorText")," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0442\u0435\u043a\u0441\u0442 \u0432\u043e\u0437\u043b\u0435 \u043a\u0443\u0440\u0441\u043e\u0440\u0430 \u043d\u0430\u0434 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u043c \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u043e\u043c. ",(0,r.kt)("inlineCode",{parentName:"p"},"Text")," \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043d\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),' \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u0441\u044f \u043a\u0430\u043a "\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0442\u044c", \u0438 ',(0,r.kt)("inlineCode",{parentName:"p"},"Color")," \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043d\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u0441\u044f \u043a\u0430\u043a ",(0,r.kt)(m.Z,{color:"#FFFFFF",mdxType:"ColorSquare"}),"."),(0,r.kt)("h3",{id:"slot-preview"},"\u041f\u0440\u0435\u0432\u044c\u044e \u0441\u043b\u043e\u0442\u0430 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u044f"),(0,r.kt)("p",null,"\u0425\u043e\u0442\u0438\u0442\u0435 \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u043a\u0430\u043a \u0432\u0430\u0448 ",(0,r.kt)("inlineCode",{parentName:"p"},"CombineTooltip")," \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0432 \u0438\u0433\u0440\u0435? \u0417\u0430\u0446\u0435\u043d\u0438\u0442\u0435 \u044d\u0442\u043e\u0442 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442:"),(0,r.kt)(g,{mdxType:"PreviewTooltip"}),(0,r.kt)("h2",{id:"examples"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,r.kt)(l.Z,{defaultValue:"ammobox",values:[{label:"\u0426\u0435\u043d\u0442\u0440\u0438\u0444\u0443\u0433\u0430",value:"centrifuge"},{label:"\u0421\u0442\u043e\u0439\u043a\u0430 \u0441\u043e \u0441\u043f\u0435\u0446\u0438\u044f\u043c\u0438",value:"spicerack"},{label:"\u042f\u0449\u0438\u043a \u0441 \u0431\u043e\u0435\u043f\u0440\u0438\u043f\u0430\u0441\u0430\u043c\u0438",value:"ammobox"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"centrifuge",mdxType:"TabItem"},(0,r.kt)("p",null,"\u041f\u0440\u043e\u0441\u0442\u043e\u0439 \u043f\u0440\u0438\u043c\u0435\u0440, \u043e\u0431\u0440\u0430\u0449\u0430\u044e\u0449\u0438\u0439 \u044d\u0444\u0444\u0435\u043a\u0442\u044b \u0432 \u0428\u043f\u0440\u0438\u0446\u0430\u0445."),(0,r.kt)(p.Z,{mdxType:"CodeSnippet"},'using System.Collections.Generic;\nusing System.Linq;\n\nnamespace RogueLibsCore.Test\n{\n    public class Centrifuge : CustomItem, IItemCombinable\n    {\n        [RLSetup]\n        public static void Setup()\n        {\n            /*\n            RogueLibs.CreateCustomItem<Centrifuge>()\n                .WithName(new CustomNameInfo("Centrifuge"))\n                .WithDescription(new CustomNameInfo("Combine with a syringe to invert its effect."))\n                .WithSprite(Properties.Resources.Centrifuge)\n                .WithUnlock(new ItemUnlock\n                {\n                    UnlockCost = 10,\n                    LoadoutCost = 5,\n                    CharacterCreationCost = 3,\n                    Prerequisites = { VanillaItems.Antidote },\n                });\n            */\n        }\n\n        public override void SetupDetails()\n        {\n            Item.itemType = ItemTypes.Combine;\n            Item.itemValue = 8;\n            Item.initCount = 10;\n            Item.stackable = true;\n            Item.hasCharges = true;\n        }\n\n        private static readonly Dictionary<string, string> invertDictionary = new Dictionary<string, string>\n        {\n            [VanillaEffects.Poisoned] = VanillaEffects.RegenerateHealth,\n            [VanillaEffects.Slow] = VanillaEffects.Fast,\n            [VanillaEffects.Weak] = VanillaEffects.Strength,\n            [VanillaEffects.Acid] = VanillaEffects.Invincible,\n            [VanillaEffects.Confused] = VanillaEffects.Invisible,\n        };\n        static Centrifuge()\n        {\n            foreach (KeyValuePair<string, string> pair in invertDictionary.ToArray())\n                invertDictionary.Add(pair.Value, pair.Key);\n        }\n\n        public bool CombineFilter(InvItem other) => other.invItemName == VanillaItems.Syringe\n            && other.contents.Count > 0 && invertDictionary.ContainsKey(other.contents[0]);\n        public bool CombineItems(InvItem other)\n        {\n            if (!CombineFilter(other)) return false;\n\n            other.contents[0] = invertDictionary[other.contents[0]];\n\n            Count--;\n            gc.audioHandler.Play(Owner, VanillaAudio.CombineItem);\n            return true;\n        }\n        public CustomTooltip CombineCursorText(InvItem other) => default;\n        public CustomTooltip CombineTooltip(InvItem other) => default;\n    }\n}\n')),(0,r.kt)(s.Z,{value:"spicerack",mdxType:"TabItem"},(0,r.kt)("p",null,"\u041f\u0440\u043e\u0441\u0442\u043e\u0439 \u043f\u0440\u0438\u043c\u0435\u0440, \u0441\u043e ",(0,r.kt)("em",{parentName:"p"},"\u0441\u043f\u0435\u0446\u0438"),"\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0445\u0443\u043a\u0430\u043c\u0438 \u0434\u043b\u044f \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u043f\u0440\u0438\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0439 \u0435\u0434\u044b."),(0,r.kt)(p.Z,{mdxType:"CodeSnippet"},d.Z)),(0,r.kt)(s.Z,{value:"ammobox",mdxType:"TabItem"},(0,r.kt)("p",null,"\u0414\u043e\u0432\u043e\u043b\u044c\u043d\u043e \u0441\u043b\u043e\u0436\u043d\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 \u0441 \u043a\u0443\u0447\u0435\u0439 \u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0438."),(0,r.kt)(p.Z,{mdxType:"CodeSnippet"},'using UnityEngine;\n\nnamespace RogueLibsCore.Test\n{\n    [ItemCategories(RogueCategories.Technology, RogueCategories.GunAccessory, RogueCategories.Guns)]\n    public class AmmoBox : CustomItem, IItemCombinable\n    {\n        [RLSetup]\n        public static void Setup()\n        {\n            RogueLibs.CreateCustomItem<AmmoBox>()\n                .WithName(new CustomNameInfo("Ammo Box"))\n                .WithDescription(new CustomNameInfo("Combine with any refillable weapon to refill it. Limited ammo."))\n                .WithSprite(Properties.Resources.AmmoBox)\n                .WithUnlock(new ItemUnlock\n                {\n                    UnlockCost = 10,\n                    LoadoutCost = 5,\n                    CharacterCreationCost = 3,\n                    Prerequisites = { VanillaItems.KillAmmunizer },\n                });\n        }\n\n        public override void SetupDetails()\n        {\n            Item.itemType = ItemTypes.Combine;\n            Item.itemValue = 4;\n            Item.initCount = 100;\n            Item.rewardCount = 200;\n            Item.hasCharges = true;\n            Item.stackable = true;\n        }\n        public bool CombineFilter(InvItem other) => other.itemType == ItemTypes.WeaponProjectile && !other.noRefills;\n        public bool CombineItems(InvItem other)\n        {\n            if (!CombineFilter(other))\n            {\n                gc.audioHandler.Play(Owner, VanillaAudio.CantDo);\n                return false;\n            }\n            if (other.invItemCount >= other.maxAmmo)\n            {\n                Owner.SayDialogue("AmmoDispenserFull");\n                gc.audioHandler.Play(Owner, VanillaAudio.CantDo);\n                return false;\n            }\n\n            int amountToRefill = other.maxAmmo - other.invItemCount;\n            float singleCost = (float)other.itemValue / other.maxAmmo;\n            if (Owner.oma.superSpecialAbility && (Owner.agentName == VanillaAgents.Soldier || Owner.agentName == VanillaAgents.Doctor))\n                singleCost = 0f;\n\n            int affordableAmount = (int)Mathf.Ceil(Count / singleCost);\n            int willBeBought = Mathf.Min(affordableAmount, amountToRefill);\n            int willBeReduced = (int)Mathf.Min(Count, willBeBought * singleCost);\n\n            Count -= willBeReduced;\n            other.invItemCount += willBeBought;\n            Owner.SayDialogue("AmmoDispenserFilled");\n            gc.audioHandler.Play(Owner, VanillaAudio.BuyItem);\n            return true;\n        }\n\n        public CustomTooltip CombineTooltip(InvItem other)\n        {\n            if (!CombineFilter(other)) return default;\n\n            int amountToRefill = other.maxAmmo - other.invItemCount;\n            if (amountToRefill == 0) return default;\n\n            float singleCost = (float)other.itemValue / other.maxAmmo;\n            if (Owner.oma.superSpecialAbility && (Owner.agentName == VanillaAgents.Soldier || Owner.agentName == VanillaAgents.Doctor))\n                singleCost = 0f;\n            int cost = (int)Mathf.Floor(amountToRefill * singleCost);\n            int canAfford = (int)Mathf.Ceil(Count / singleCost);\n\n            return "+" + Mathf.Min(amountToRefill, canAfford) + " (" + Mathf.Min(cost, Count) + ")";\n        }\n\n        public CustomTooltip CombineCursorText(InvItem other) => gc.nameDB.GetName("RefillGun", NameTypes.Interface);\n        // it\'s one of the vanilla dialogues, so there\'s no need to define it in the mod\n    }\n}\n'))))}k.isMDXComponent=!0},5306:function(e,n){n.Z='using UnityEngine;\n\nnamespace RogueLibsCore.Test\n{\n    [ItemCategories(RogueCategories.Food, RogueCategories.Health)]\n    public class SpiceRack : CustomItem, IItemCombinable\n    {\n        [RLSetup]\n        public static void Setup()\n        {\n            RogueLibs.CreateCustomItem<SpiceRack>()\n                .WithName(new CustomNameInfo("Spice Rack"))\n                .WithDescription(new CustomNameInfo("Combine with any food item to increase its healing properties."))\n                .WithSprite(Properties.Resources.SpiceRack)\n                .WithUnlock(new ItemUnlock\n                {\n                    UnlockCost = 10,\n                    LoadoutCost = 3,\n                    CharacterCreationCost = 2,\n                    Prerequisites = { VanillaItems.FoodProcessor },\n                });\n\n            SeasonCursorText = RogueLibs.CreateCustomName("SeasonItem", NameTypes.Interface, new CustomNameInfo("Season"));\n        }\n        private static CustomName SeasonCursorText = null!;\n\n        public override void SetupDetails()\n        {\n            Item.itemType = ItemTypes.Combine;\n            Item.itemValue = 4;\n            Item.initCount = 10;\n            Item.rewardCount = 15;\n            Item.stackable = true;\n            Item.hasCharges = true;\n        }\n        public bool CombineFilter(InvItem other)\n        {\n            if (other.itemType != ItemTypes.Food || other.healthChange is 0\n                || !other.Categories.Contains(RogueCategories.Food)) return false;\n\n            SpicedHook? hook = other.GetHook<SpicedHook>();\n            return hook is null || hook.Spiciness < 3;\n        }\n        public bool CombineItems(InvItem other)\n        {\n            if (!CombineFilter(other)) return false;\n\n            SpicedHook hook = other.GetHook<SpicedHook>() ?? other.AddHook<SpicedHook>();\n            hook.IncreaseSpiciness();\n\n            Count--;\n            gc.audioHandler.Play(Owner, VanillaAudio.CombineItem);\n            return true;\n        }\n        public CustomTooltip CombineCursorText(InvItem other) => SeasonCursorText;\n        public CustomTooltip CombineTooltip(InvItem other)\n        {\n            if (!CombineFilter(other)) return default;\n\n            SpicedHook? hook = other.GetHook<SpicedHook>();\n            int bonus = hook is null ? (int)Mathf.Ceil(other.healthChange / 4f) : hook.HealthBonus;\n            return new CustomTooltip($"+{bonus}", Color.green);\n        }\n\n        private class SpicedHook : HookBase<InvItem>\n        {\n            protected override void Initialize()\n                => HealthBonus = (int)Mathf.Ceil(Instance.healthChange / 4f);\n\n            public int HealthBonus { get; private set; }\n            public int Spiciness { get; private set; }\n\n            public void IncreaseSpiciness()\n            {\n                if (Spiciness is 3) return;\n\n                Spiciness++;\n                Instance.healthChange += HealthBonus;\n            }\n        }\n    }\n}\n'}}]);