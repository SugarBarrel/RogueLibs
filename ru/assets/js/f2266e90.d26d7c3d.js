"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3451],{4214:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(7294),i=n(614);function a(e){let{children:t,language:n}=e;return o.createElement(i.Z,{className:"language-"+(n||"csharp")},t.replace(/\t/g,"    "))}},2725:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(7294);function i(e){let{color:t,size:n}=e,i=(n||14)+"px";return o.createElement("div",{style:{display:"inline"}},o.createElement("div",{style:{display:"inline-block",width:i,height:i,background:t,marginRight:"2px"}}),o.createElement("div",{style:{display:"inline"}},t))}},5880:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(7294),i=n(6010);const a={container:"container_ek75",cursorLocked:"cursorLocked_H61i",normal:"normal_n5ah",hoverable:"hoverable_F5EM",selected:"selected_mneN",locked:"locked_H8Qp",sprite:"sprite_ZRUo",tooltip:"tooltip_QxcU",count:"count_Z8Fk"};function l(e){let{sprite:t,tooltip:n,tooltipColor:l,count:r,countColor:s,hoverable:u,cantClick:m,type:c="normal",onClick:p}=e;return o.createElement("div",{onClick:p,className:(0,i.Z)(a.container,m&&a.cursorLocked,c&&a[c],u&&a.hoverable)},t&&o.createElement("img",{key:"sprite",className:a.sprite,src:t}),n&&o.createElement("span",{key:"tooltip",className:a.tooltip,style:{color:l||"#FFED00"}},n),r&&o.createElement("span",{key:"count",className:a.count,style:{color:s||"#FFFFFF"}},r))}},1016:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(7462),i=n(7294);function a(e){let{children:t,...n}=e;return i.createElement("div",(0,o.Z)({role:"tabpanel"},n),t)}},5878:(e,t,n)=>{n.d(t,{Z:()=>C});var o=n(7294),i=n(6550),a=n(1980),l=n(7392),r=n(12);function s(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:i}}=e;return{value:t,label:n,attributes:o,default:i}}))}function u(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??s(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function c(e){let{queryString:t=!1,groupId:n}=e;const l=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,a._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(l.location.search);t.set(r,e),l.replace({...l.location,search:t.toString()})}),[r,l])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,a=u(e),[l,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:a}))),[p,d]=c({queryString:n,groupId:i}),[b,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,r.Nk)(n);return[i,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:i}),C=(()=>{const e=p??b;return m({value:e,tabValues:a})?e:null})();(0,o.useLayoutEffect)((()=>{C&&s(C)}),[C]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),h(e)}),[d,h,a]),tabValues:a}}var d=n(6010);const b={tabItem:"tabItem_V91s",tabItemActive:"tabItemActive_JsUu",blink:"blink_ZPVS",tab:"tab_ntnM"};const h={left:37,right:39};function C(e){const{lazy:t,defaultValue:n,values:i,groupId:a}=e,l=o.Children.toArray(e.children),{tabValues:r,selectedValue:s,selectValue:u}=p({children:l,defaultValue:n,values:i,groupId:a}),m=[],c=e=>{const t=e.currentTarget,n=i[m.indexOf(t)].value;u(n),null!=a&&setTimeout((()=>{(function(e){const{top:t,left:n,bottom:o,right:i}=e.getBoundingClientRect(),{innerHeight:a,innerWidth:l}=window;return t>=0&&i<=l&&o<=a&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(b.tabItemActive),setTimeout((()=>t.classList.remove(b.tabItemActive)),2e3))}),150)},C=e=>{let t;switch(e.keyCode){case h.right:{const n=m.indexOf(e.target)+1;t=m[n]||m[0];break}case h.left:{const n=m.indexOf(e.target)-1;t=m[n]||m[m.length-1];break}default:return}t.focus()},f=(e,t)=>t.value===e||t.values&&-1!=t.values.indexOf(e);return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:"tabs"},i.map((e=>{let{value:t,label:n}=e;return o.createElement("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,className:(0,d.Z)("tabs__item",b.tabItem,{"tabs__item--active":s===t}),key:t,ref:e=>e&&m.push(e),onKeyDown:C,onFocus:c,onClick:c},n)}))),t?o.cloneElement(l.find((e=>f(s,e.props))),{className:b.tab}):o.createElement("div",null,l.map(((e,t)=>o.cloneElement(e,{key:t,hidden:!f(s,e.props),className:b.tab})))),o.createElement("br",null))}},598:(e,t,n)=>{n.r(t),n.d(t,{PreviewTooltip:()=>v,assets:()=>g,contentTitle:()=>C,default:()=>T,frontMatter:()=>h,metadata:()=>f,toc:()=>I});var o=n(7462),i=n(7294),a=n(3905),l=n(5878),r=n(1016),s=n(4996),u=n(2725),m=n(5880),c=n(4214);const p='using System.Collections.Generic;\nusing System.Linq;\n\nnamespace RogueLibsCore.Test\n{\n    public class Centrifuge : CustomItem, IItemCombinable\n    {\n        [RLSetup]\n        public static void Setup()\n        {\n            /*\n            RogueLibs.CreateCustomItem<Centrifuge>()\n                .WithName(new CustomNameInfo("Centrifuge"))\n                .WithDescription(new CustomNameInfo("Combine with a syringe to invert its effect."))\n                .WithSprite(Properties.Resources.Centrifuge)\n                .WithUnlock(new ItemUnlock\n                {\n                    UnlockCost = 10,\n                    LoadoutCost = 5,\n                    CharacterCreationCost = 3,\n                    Prerequisites = { VanillaItems.Antidote },\n                });\n            */\n        }\n\n        public override void SetupDetails()\n        {\n            Item.itemType = ItemTypes.Combine;\n            Item.itemValue = 8;\n            Item.initCount = 10;\n            Item.stackable = true;\n            Item.hasCharges = true;\n        }\n\n        private static readonly Dictionary<string, string> invertDictionary = new Dictionary<string, string>\n        {\n            [VanillaEffects.Poisoned] = VanillaEffects.RegenerateHealth,\n            [VanillaEffects.Slow] = VanillaEffects.Fast,\n            [VanillaEffects.Weak] = VanillaEffects.Strength,\n            [VanillaEffects.Acid] = VanillaEffects.Invincible,\n            [VanillaEffects.Confused] = VanillaEffects.Invisible,\n        };\n        static Centrifuge()\n        {\n            foreach (KeyValuePair<string, string> pair in invertDictionary.ToArray())\n                invertDictionary.Add(pair.Value, pair.Key);\n        }\n\n        public bool CombineFilter(InvItem other) => other.invItemName == VanillaItems.Syringe\n            && other.contents.Count > 0 && invertDictionary.ContainsKey(other.contents[0]);\n        public bool CombineItems(InvItem other)\n        {\n            if (!CombineFilter(other)) return false;\n\n            other.contents[0] = invertDictionary[other.contents[0]];\n\n            Count--;\n            gc.audioHandler.Play(Owner, VanillaAudio.CombineItem);\n            return true;\n        }\n        public CustomTooltip CombineCursorText(InvItem other) => default;\n        public CustomTooltip CombineTooltip(InvItem other) => default;\n    }\n}\n';var d=n(5306);const b='using UnityEngine;\n\nnamespace RogueLibsCore.Test\n{\n    [ItemCategories(RogueCategories.Technology, RogueCategories.GunAccessory, RogueCategories.Guns)]\n    public class AmmoBox : CustomItem, IItemCombinable\n    {\n        [RLSetup]\n        public static void Setup()\n        {\n            RogueLibs.CreateCustomItem<AmmoBox>()\n                .WithName(new CustomNameInfo("Ammo Box"))\n                .WithDescription(new CustomNameInfo("Combine with any refillable weapon to refill it. Limited ammo."))\n                .WithSprite(Properties.Resources.AmmoBox)\n                .WithUnlock(new ItemUnlock\n                {\n                    UnlockCost = 10,\n                    LoadoutCost = 5,\n                    CharacterCreationCost = 3,\n                    Prerequisites = { VanillaItems.KillAmmunizer },\n                });\n        }\n\n        public override void SetupDetails()\n        {\n            Item.itemType = ItemTypes.Combine;\n            Item.itemValue = 4;\n            Item.initCount = 100;\n            Item.rewardCount = 200;\n            Item.hasCharges = true;\n            Item.stackable = true;\n        }\n        public bool CombineFilter(InvItem other) => other.itemType == ItemTypes.WeaponProjectile && !other.noRefills;\n        public bool CombineItems(InvItem other)\n        {\n            if (!CombineFilter(other))\n            {\n                gc.audioHandler.Play(Owner, VanillaAudio.CantDo);\n                return false;\n            }\n            if (other.invItemCount >= other.maxAmmo)\n            {\n                Owner!.SayDialogue("AmmoDispenserFull");\n                gc.audioHandler.Play(Owner, VanillaAudio.CantDo);\n                return false;\n            }\n\n            int amountToRefill = other.maxAmmo - other.invItemCount;\n            float singleCost = (float)other.itemValue / other.maxAmmo;\n            if (Owner!.oma.superSpecialAbility && Owner.agentName is VanillaAgents.Soldier or VanillaAgents.Doctor)\n                singleCost = 0f;\n\n            int affordableAmount = (int)Mathf.Ceil(Count / singleCost);\n            int willBeBought = Mathf.Min(affordableAmount, amountToRefill);\n            int willBeReduced = (int)Mathf.Min(Count, willBeBought * singleCost);\n\n            Count -= willBeReduced;\n            other.invItemCount += willBeBought;\n            Owner.SayDialogue("AmmoDispenserFilled");\n            gc.audioHandler.Play(Owner, VanillaAudio.BuyItem);\n            return true;\n        }\n\n        public CustomTooltip CombineTooltip(InvItem other)\n        {\n            if (!CombineFilter(other)) return default;\n\n            int amountToRefill = other.maxAmmo - other.invItemCount;\n            if (amountToRefill == 0) return default;\n\n            float singleCost = (float)other.itemValue / other.maxAmmo;\n            if (Owner!.oma.superSpecialAbility && Owner.agentName is VanillaAgents.Soldier or VanillaAgents.Doctor)\n                singleCost = 0f;\n            int cost = (int)Mathf.Floor(amountToRefill * singleCost);\n            int canAfford = (int)Mathf.Ceil(Count / singleCost);\n\n            return "+" + Mathf.Min(amountToRefill, canAfford) + " (" + Mathf.Min(cost, Count) + ")";\n        }\n\n        public CustomTooltip CombineCursorText(InvItem other) => gc.nameDB.GetName("RefillGun", NameTypes.Interface);\n        // it\'s one of the vanilla dialogues, so there\'s no need to define it in the mod\n    }\n}\n',h={},C="\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b",f={unversionedId:"dev/items/combinable-items",id:"dev/items/combinable-items",title:"\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b",description:"\u0414\u0435\u043b\u0430\u0435\u043c \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u043c\u044b\u043c\u0438",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/dev/items/combinable-items.mdx",sourceDirName:"dev/items",slug:"/dev/items/combinable-items",permalink:"/RogueLibs/ru/docs/dev/items/combinable-items",draft:!1,editUrl:"https://github.com/SugarBarrel/RogueLibs/edit/main/website/docs/dev/items/combinable-items.mdx",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b",permalink:"/RogueLibs/ru/docs/dev/items/usable-items"},next:{title:"\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b",permalink:"/RogueLibs/ru/docs/dev/items/targetable-items"}},g={};function v(e){let{props:t}=e;const[n,o]=(0,i.useState)((0,s.Z)("/img/TestItem.png")),[l,r]=(0,i.useState)("#FFED00"),[u,c]=(0,i.useState)("$123");return(0,a.kt)("div",{style:{padding:"10px",border:"5px dashed var(--ifm-menu-color-background-hover)",width:"max-content"}},(0,a.kt)("input",{type:"file",accept:"image/*",onChange:e=>{if(e.target.files[0]){const t=new FileReader;t.addEventListener("load",(()=>o(t.result))),t.readAsDataURL(e.target.files[0])}},style:{margin:"5px"}}),(0,a.kt)("div",{style:{margin:"5px"}},(0,a.kt)(m.Z,{sprite:n,tooltip:u,tooltipColor:l,mdxType:"InventorySlot"})),(0,a.kt)("input",{type:"text",placeholder:"$123",onChange:e=>c(e.target.value),style:{fontSize:"22px",margin:"5px"}}),(0,a.kt)("input",{type:"color",value:l,onChange:e=>r(e.target.value)}))}const I=[{value:"\u0414\u0435\u043b\u0430\u0435\u043c \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u043c\u044b\u043c\u0438",id:"making-combinable",level:2},{value:"\u041f\u0440\u0435\u0432\u044c\u044e \u0441\u043b\u043e\u0442\u0430 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u044f",id:"slot-preview",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"examples",level:2}],k={PreviewTooltip:v,toc:I},y="wrapper";function T(e){let{components:t,...n}=e;return(0,a.kt)(y,(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u043c\u044b\u0435-\u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b"},"\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b"),(0,a.kt)("h2",{id:"making-combinable"},"\u0414\u0435\u043b\u0430\u0435\u043c \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u043c\u044b\u043c\u0438"),(0,a.kt)("p",null,"\u041f\u0440\u043e\u0441\u0442\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0439\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ",(0,a.kt)("inlineCode",{parentName:"p"},"IItemCombinable")," \u0432 \u043a\u043b\u0430\u0441\u0441\u0435 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCombinableItem.cs"',title:'"MyCombinableItem.cs"'},"// highlight-next-line\npublic class MyCombinableItem : CustomItem, IItemCombinable\n{\n    // highlight-start\n    public bool CombineFilter(InvItem other) { /* ... */ }\n    public bool CombineItems(InvItem other) { /* ... */ }\n    public CustomTooltip CombineTooltip(InvItem other) { /* ... */ }\n    public CustomTooltip CombineCursorText(InvItem other) { /* ... */ }\n    // highlight-end\n}\n")),(0,a.kt)("p",null,"\u041f\u043b\u044e\u0441, \u0442\u0438\u043f \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c ",(0,a.kt)("inlineCode",{parentName:"p"},'"Combine"'),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"    public override void SetupDetails()\n    {\n        // highlight-next-line\n        Item.itemType = ItemTypes.Combine;\n        /* ... */\n    }\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CombineFilter")," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u043a\u0430\u043a\u0438\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u0431\u0443\u0434\u0443\u0442 \u043f\u043e\u0434\u0441\u0432\u0435\u0447\u0438\u0432\u0430\u0442\u044c\u0441\u044f, \u043f\u0440\u0438 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0438 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CombineItems")," \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u0442 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u043f\u0440\u0435\u0434\u043c\u0435\u0442 \u0441 \u0434\u0440\u0443\u0433\u0438\u043c. \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043b\u0438 \u0431\u044b\u043b\u0438 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u044b \u0438\u043b\u0438 \u043d\u0435\u0442. \u041e\u0431\u044b\u0447\u043d\u043e, \u0435\u0441\u043b\u0438 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u043d\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u044b, \u043f\u0440\u043e\u0438\u0433\u0440\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0437\u0432\u0443\u043a ",(0,a.kt)("inlineCode",{parentName:"p"},'"CantDo"'),". \u0412\u043e\u0437\u0432\u0440\u0430\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u043e\u0438\u0433\u0440\u044b\u0432\u0430\u0435\u0442 \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u044e."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CombineTooltip")," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0442\u0435\u043a\u0441\u0442 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438 \u0432 \u043b\u0435\u0432\u043e\u043c \u0432\u0435\u0440\u0445\u043d\u0435\u043c \u0443\u0433\u043b\u0443 \u0441\u043b\u043e\u0442\u0430 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u044f. ",(0,a.kt)("inlineCode",{parentName:"p"},"Text")," \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043d\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u0441\u044f \u043a\u0430\u043a \u043f\u0443\u0441\u0442\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430, \u0438 Color \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043d\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u0441\u044f \u043a\u0430\u043a ",(0,a.kt)(u.Z,{color:"#FFED00",mdxType:"ColorSquare"}),". ",(0,a.kt)("a",{parentName:"p",href:"#slot-preview"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u043d\u0438\u0436\u0435"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CombineCursorText")," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0442\u0435\u043a\u0441\u0442 \u0432\u043e\u0437\u043b\u0435 \u043a\u0443\u0440\u0441\u043e\u0440\u0430 \u043d\u0430\u0434 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u043c \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u043e\u043c. ",(0,a.kt)("inlineCode",{parentName:"p"},"Text")," \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043d\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),' \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u0441\u044f \u043a\u0430\u043a "\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0442\u044c", \u0438 ',(0,a.kt)("inlineCode",{parentName:"p"},"Color")," \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043d\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u0441\u044f \u043a\u0430\u043a ",(0,a.kt)(u.Z,{color:"#FFFFFF",mdxType:"ColorSquare"}),"."),(0,a.kt)("h3",{id:"slot-preview"},"\u041f\u0440\u0435\u0432\u044c\u044e \u0441\u043b\u043e\u0442\u0430 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u044f"),(0,a.kt)("p",null,"\u0425\u043e\u0442\u0438\u0442\u0435 \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u043a\u0430\u043a \u0432\u0430\u0448 ",(0,a.kt)("inlineCode",{parentName:"p"},"CombineTooltip")," \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0432 \u0438\u0433\u0440\u0435? \u0417\u0430\u0446\u0435\u043d\u0438\u0442\u0435 \u044d\u0442\u043e\u0442 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442:"),(0,a.kt)(v,{mdxType:"PreviewTooltip"}),(0,a.kt)("h2",{id:"examples"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,a.kt)(l.Z,{defaultValue:"ammobox",values:[{label:"\u0426\u0435\u043d\u0442\u0440\u0438\u0444\u0443\u0433\u0430",value:"centrifuge"},{label:"\u0421\u0442\u043e\u0439\u043a\u0430 \u0441\u043e \u0441\u043f\u0435\u0446\u0438\u044f\u043c\u0438",value:"spicerack"},{label:"\u042f\u0449\u0438\u043a \u0441 \u0431\u043e\u0435\u043f\u0440\u0438\u043f\u0430\u0441\u0430\u043c\u0438",value:"ammobox"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"centrifuge",mdxType:"TabItem"},(0,a.kt)("p",null,"\u041f\u0440\u043e\u0441\u0442\u043e\u0439 \u043f\u0440\u0438\u043c\u0435\u0440, \u043e\u0431\u0440\u0430\u0449\u0430\u044e\u0449\u0438\u0439 \u044d\u0444\u0444\u0435\u043a\u0442\u044b \u0432 \u0428\u043f\u0440\u0438\u0446\u0430\u0445."),(0,a.kt)(c.Z,{mdxType:"CodeSnippet"},p)),(0,a.kt)(r.Z,{value:"spicerack",mdxType:"TabItem"},(0,a.kt)("p",null,"\u041f\u0440\u043e\u0441\u0442\u043e\u0439 \u043f\u0440\u0438\u043c\u0435\u0440, \u0441\u043e ",(0,a.kt)("em",{parentName:"p"},"\u0441\u043f\u0435\u0446\u0438"),"\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0445\u0443\u043a\u0430\u043c\u0438 \u0434\u043b\u044f \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u043f\u0440\u0438\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0439 \u0435\u0434\u044b."),(0,a.kt)(c.Z,{mdxType:"CodeSnippet"},d.Z)),(0,a.kt)(r.Z,{value:"ammobox",mdxType:"TabItem"},(0,a.kt)("p",null,"\u0414\u043e\u0432\u043e\u043b\u044c\u043d\u043e \u0441\u043b\u043e\u0436\u043d\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 \u0441 \u043a\u0443\u0447\u0435\u0439 \u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0438."),(0,a.kt)(c.Z,{mdxType:"CodeSnippet"},b))))}T.isMDXComponent=!0},5306:(e,t,n)=>{n.d(t,{Z:()=>o});const o='using UnityEngine;\n\nnamespace RogueLibsCore.Test\n{\n    [ItemCategories(RogueCategories.Food, RogueCategories.Health)]\n    public class SpiceRack : CustomItem, IItemCombinable\n    {\n        [RLSetup]\n        public static void Setup()\n        {\n            RogueLibs.CreateCustomItem<SpiceRack>()\n                .WithName(new CustomNameInfo("Spice Rack"))\n                .WithDescription(new CustomNameInfo("Combine with any food item to increase its healing properties."))\n                .WithSprite(Properties.Resources.SpiceRack)\n                .WithUnlock(new ItemUnlock\n                {\n                    UnlockCost = 10,\n                    LoadoutCost = 3,\n                    CharacterCreationCost = 2,\n                    Prerequisites = { VanillaItems.FoodProcessor },\n                });\n\n            SeasonCursorText = RogueLibs.CreateCustomName("SeasonItem", NameTypes.Interface, new CustomNameInfo("Season"));\n        }\n        private static CustomName SeasonCursorText = null!;\n\n        public override void SetupDetails()\n        {\n            Item.itemType = ItemTypes.Combine;\n            Item.itemValue = 4;\n            Item.initCount = 10;\n            Item.rewardCount = 15;\n            Item.stackable = true;\n            Item.hasCharges = true;\n        }\n        public bool CombineFilter(InvItem other)\n        {\n            if (other.itemType != ItemTypes.Food || other.healthChange is 0\n                || !other.Categories.Contains(RogueCategories.Food)) return false;\n\n            SpicedHook? hook = other.GetHook<SpicedHook>();\n            return hook is null || hook.Spiciness < 3;\n        }\n        public bool CombineItems(InvItem other)\n        {\n            if (!CombineFilter(other)) return false;\n\n            SpicedHook hook = other.GetHook<SpicedHook>() ?? other.AddHook<SpicedHook>();\n            hook.IncreaseSpiciness();\n\n            Count--;\n            gc.audioHandler.Play(Owner, VanillaAudio.CombineItem);\n            return true;\n        }\n        public CustomTooltip CombineCursorText(InvItem other) => SeasonCursorText;\n        public CustomTooltip CombineTooltip(InvItem other)\n        {\n            if (!CombineFilter(other)) return default;\n\n            SpicedHook? hook = other.GetHook<SpicedHook>();\n            int bonus = hook is null ? (int)Mathf.Ceil(other.healthChange / 4f) : hook.HealthBonus;\n            return new CustomTooltip($"+{bonus}", Color.green);\n        }\n\n        private class SpicedHook : HookBase<InvItem>\n        {\n            protected override void Initialize()\n                => HealthBonus = (int)Mathf.Ceil(Instance.healthChange / 4f);\n\n            public int HealthBonus { get; private set; }\n            public int Spiciness { get; private set; }\n\n            public void IncreaseSpiciness()\n            {\n                if (Spiciness is 3) return;\n\n                Spiciness++;\n                Instance.healthChange += HealthBonus;\n            }\n        }\n    }\n}\n'}}]);