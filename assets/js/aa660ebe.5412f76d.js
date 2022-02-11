"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8227],{4214:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),i=a(1736);function o(e){var t=e.children,a=e.language;return n.createElement(i.Z,{className:"language-"+(a||"csharp")},t.replace(/\t/g,"    "))}},1016:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7462),i=a(3366),o=a(7294),r=["children"];function l(e){var t=e.children,a=(0,i.Z)(e,r);return o.createElement("div",(0,n.Z)({role:"tabpanel"},a),t)}},250:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),i=a(5773),o=a(6010),r="tabItem_V91s",l="tabItemActive_JsUu",s="tab_ntnM";var u=37,m=39;function c(e){var t=e.lazy,a=e.defaultValue,c=e.values,d=e.groupId,p=(0,i.UB)(),h=p.tabGroupChoices,g=p.setTabGroupChoices,v=(0,n.useState)(a),f=v[0],k=v[1],C=n.Children.toArray(e.children),b=[];if(null!=d){var w=h[d];null!=w&&w!==f&&c.some((function(e){return e.value===w}))&&k(w)}var N=function(e){var t=e.currentTarget,a=b.indexOf(t),n=c[a].value;k(n),null!=d&&(g(d,n),setTimeout((function(){var e,a,n,i,o,r,s,u;(e=t.getBoundingClientRect(),a=e.top,n=e.left,i=e.bottom,o=e.right,r=window,s=r.innerHeight,u=r.innerWidth,a>=0&&o<=u&&i<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},T=function(e){var t;switch(e.keyCode){case m:var a=b.indexOf(e.target)+1;t=b[a]||b[0];break;case u:var n=b.indexOf(e.target)-1;t=b[n]||b[b.length-1];break;default:return}t.focus()},I=function(e,t){return t.value===e||t.values&&-1!=t.values.indexOf(e)};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:"tabs"},c.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,o.Z)("tabs__item",r,{"tabs__item--active":f===t}),key:t,ref:function(e){return e&&b.push(e)},onKeyDown:T,onFocus:N,onClick:N},a)}))),t?n.cloneElement(C.find((function(e){return I(f,e.props)})),{className:s}):n.createElement("div",null,C.map((function(e,t){return n.cloneElement(e,{key:t,hidden:!I(f,e.props),className:s})}))),n.createElement("br",null))}},159:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return p}});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),r=a(250),l=a(1016),s=(a(4996),a(4214)),u=["components"],m={},c="Recharging Items",d={unversionedId:"dev/items/recharging-items",id:"dev/items/recharging-items",title:"Recharging Items",description:"Making items rechargeable",source:"@site/docs/dev/items/recharging-items.mdx",sourceDirName:"dev/items",slug:"/dev/items/recharging-items",permalink:"/RogueLibs/docs/dev/items/recharging-items",editUrl:"https://github.com/SugarBarrel/RogueLibs/edit/main/website/docs/dev/items/recharging-items.mdx",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Targetable Items +",permalink:"/RogueLibs/docs/dev/items/targetable-items-plus"},next:{title:"Melee Weapons*",permalink:"/RogueLibs/docs/dev/items/weapons/melee-weapons"}},p=[{value:"Making items rechargeable",id:"making-rechargeable",children:[],level:2},{value:"Presets",id:"presets",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2}],h={toc:p};function g(e){var t=e.components,a=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"recharging-items"},"Recharging Items"),(0,o.kt)("h2",{id:"making-rechargeable"},"Making items rechargeable"),(0,o.kt)("p",null,"If you want to make a rechargeable item, you'll have to make use of the ",(0,o.kt)("a",{parentName:"p",href:"../extra#update-interfaces"},(0,o.kt)("inlineCode",{parentName:"a"},"IDoUpdate")," interface"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyRechargeableItem.cs"',title:'"MyRechargeableItem.cs"'},"// highlight-next-line\npublic class MyRechargeableItem : CustomItem, IDoUpdate\n{\n    /* ... */\n}\n")),(0,o.kt)("h2",{id:"presets"},"Presets"),(0,o.kt)("p",null,"Here's a couple of useful presets:"),(0,o.kt)(r.Z,{defaultValue:"cooldown",values:[{label:"Cooldown",value:"cooldown"},{label:"Charge",value:"charge"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cooldown",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Cooldown")," represents the amount of seconds to wait until full recharge."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"    public float Cooldown { get; private set; }\n    public void Update() => Cooldown = Mathf.Max(Cooldown - Time.deltaTime, 0f);\n")),(0,o.kt)("p",null,"With adjustable recharging speed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"    public float RechargeSpeed = 1f;\n\n    public float Cooldown { get; private set; }\n    public void Update() => Cooldown = Mathf.Max(Cooldown - Time.deltaTime * RechargeSpeed, 0f);\n")),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"    public bool UseItem()\n    {\n        if (Cooldown != 0f) return false;\n        /* ... */\n        Cooldown = 1.5f;\n        return true;\n    }\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can use other activation methods too, like ",(0,o.kt)("inlineCode",{parentName:"p"},"CombineItems"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"TargetObject"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"TargetPosition")," and etc."))),(0,o.kt)("p",null,"If you want to display ",(0,o.kt)("inlineCode",{parentName:"p"},"Cooldown")," as the item's count, then override the ",(0,o.kt)("inlineCode",{parentName:"p"},"GetCountString")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"    public override CustomTooltip GetCountString()\n    {\n        if (Cooldown != 0f) return new CustomTooltip(Cooldown, Color.red);\n        return base.GetCountString(); // display default count\n    }\n"))),(0,o.kt)(l.Z,{value:"charge",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Charge"),' represents the amount of seconds of "stored up energy".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"    public float Charge { get; private set; } = 5f;\n    public void Update() => Charge = Mathf.Min(Charge + Time.deltaTime, 5f);\n")),(0,o.kt)("p",null,"With adjustable charging speed and maximum charge:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"    public float ChargeSpeed = 1f, MaxCharge = 5f;\n\n    public float Charge { get; private set; } = 5f;\n    public void Update() => Charge = Mathf.Min(Charge + Time.deltaTime * ChargeSpeed, MaxCharge);\n")),(0,o.kt)("p",null,"Plus, with a charging delay:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"    public float DelayThreshold = 3f, ChargeSpeed = 1f, MaxCharge = 5f;\n\n    private float lastUsage;\n    public float Charge { get; private set; } = 5f;\n    public void Update()\n    {\n        if (lastUsage + DelayThreshold < Time.time)\n            Charge = Mathf.Min(Charge + Time.deltaTime * ChargeSpeed, MaxCharge);\n    }\n")),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"    public bool UseItem()\n    {\n        if (Charge < 1.5f) return false;\n        /* ... */\n        Charge -= 1.5f;\n        lastUsage = Time.time;\n        return true;\n    }\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can use other activation methods too, like ",(0,o.kt)("inlineCode",{parentName:"p"},"CombineItems"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"TargetObject"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"TargetPosition")," and etc."))),(0,o.kt)("p",null,"If you want to display ",(0,o.kt)("inlineCode",{parentName:"p"},"Charge")," as the item's count, then override the ",(0,o.kt)("inlineCode",{parentName:"p"},"GetCountString")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'    public override CustomTooltip GetCountString()\n    {\n        string text = $"{Charge} ({base.GetCountString()})"; // display both charge and count\n        Color color = Color.Lerp(Color.red, Color.white, Charge / MaxCharge);\n        // color between red and white: red - no charge, white - full charge\n        return new CustomTooltip(text, color);\n    }\n')))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There's also a vanilla way of recharging items, but it's really messy and unreliable."))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(r.Z,{defaultValue:"quantumfud",values:[{label:"Quantum Fud",value:"quantumfud"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"quantumfud",mdxType:"TabItem"},(0,o.kt)(s.Z,{mdxType:"CodeSnippet"},'using UnityEngine;\n\nnamespace RogueLibsCore.Test\n{\n    [ItemCategories(RogueCategories.Food, RogueCategories.Technology)]\n    public class QuantumFud : CustomItem, IItemUsable, IDoUpdate\n    {\n        [RLSetup]\n        public static void Setup()\n        {\n            RogueLibs.CreateCustomItem<QuantumFud>()\n                .WithName(new CustomNameInfo("Quantum Fud"))\n                .WithDescription(new CustomNameInfo("A very complicated piece of quantum technology. When you eat it, its quantum equivalent clone is consumed, while the original thing remains intact."))\n                .WithSprite(Properties.Resources.QuantumFud)\n                .WithUnlock(new ItemUnlock\n                {\n                    UnlockCost = 10,\n                    LoadoutCost = 15,\n                    CharacterCreationCost = 10,\n                   Prerequisites = { VanillaItems.FoodProcessor },\n                });\n        }\n\n        public override void SetupDetails()\n        {\n            Item.itemType = ItemTypes.Food;\n            Item.itemValue = 180;\n            Item.healthChange = 1;\n            Item.cantBeCloned = true;\n            Item.goesInToolbar = true;\n        }\n\n        public float Cooldown { get; set; }\n        public void Update() => Cooldown = Mathf.Max(Cooldown - Time.deltaTime, 0f);\n\n        public bool UseItem()\n        {\n            if (Cooldown != 0f) return false;\n\n            int heal = new ItemFunctions().DetermineHealthChange(Item, Owner);\n            Owner.statusEffects.ChangeHealth(heal);\n\n            if (Owner.HasTrait(VanillaTraits.ShareTheHealth)\n                || Owner.HasTrait(VanillaTraits.ShareTheHealth2))\n                new ItemFunctions().GiveFollowersHealth(Owner, heal);\n\n            gc.audioHandler.Play(Owner, VanillaAudio.UseFood);\n            Cooldown = 0.5f;\n            return true;\n        }\n    }\n}\n'))))}g.isMDXComponent=!0}}]);