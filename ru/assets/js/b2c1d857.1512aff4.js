(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[242],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,b=p["".concat(u,".").concat(f)]||p[f]||c[f]||i;return n?o.createElement(b,a(a({ref:t},m),{},{components:n})):o.createElement(b,a({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}n.d(t,{b:function(){return o},Z:function(){return r}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return a}});var o=n(2263),r=n(3919);function i(){var e=(0,o.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var i=void 0===o?{}:o,a=i.forcePrependBaseUrl,l=void 0!==a&&a,u=i.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(l)return t+n;var m=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+m:m}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},9443:function(e,t,n){"use strict";var o=(0,n(7294).createContext)(void 0);t.Z=o},3328:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var o=n(9756),r=n(7294),i=n(4996),a="container_373Z",l="slot_32Ts",u="sprite_ipAF",s="tooltip_2_kr",m="count_39FS",c=["sprite","tooltip","tooltipColor","count","countColor"];function p(e){var t=e.sprite,n=e.tooltip,p=e.tooltipColor,f=e.count,b=e.countColor;(0,o.Z)(e,c);return r.createElement("div",{className:a},r.createElement("img",{key:"slot",className:l,src:(0,i.Z)("/img/SetupDetailsGenerator/ToolbarSlot.png")}),null==t?[]:r.createElement("img",{key:"sprite",className:u,src:t}),null==n?[]:r.createElement("span",{key:"tooltip",className:s},r.createElement("span",{style:{color:p||"#FFED00"}},n)),null==f?[]:r.createElement("span",{key:"count",className:m},r.createElement("span",{style:{color:b||"#FFFFFF"}},f)))}},9309:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var o=n(2122),r=n(9756),i=n(7294),a=["children"];function l(e){var t=e.children,n=(0,r.Z)(e,a);return i.createElement("div",(0,o.Z)({role:"tabpanel"},n),t)}},8952:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var o=n(7294),r=n(9443);var i=function(){var e=(0,o.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},a=n(6010),l="tabItem_2O3c",u="tabItemActive_Fpbe",s="tab_1pgU";var m=37,c=39;var p=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,p=e.values,f=e.groupId,b=e.className,d=i(),h=d.tabGroupChoices,v=d.setTabGroupChoices,g=(0,o.useState)(r),C=g[0],y=g[1],I=o.Children.toArray(e.children),k=[];if(null!=f){var w=h[f];null!=w&&w!==C&&p.some((function(e){return e.value===w}))&&y(w)}var x=function(e){var t=e.currentTarget,n=k.indexOf(t),o=p[n].value;y(o),null!=f&&(v(f,o),setTimeout((function(){var e,n,o,r,i,a,l,s;(e=t.getBoundingClientRect(),n=e.top,o=e.left,r=e.bottom,i=e.right,a=window,l=a.innerHeight,s=a.innerWidth,n>=0&&i<=s&&r<=l&&o>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},T=function(e){var t,n;switch(e.keyCode){case c:var o=k.indexOf(e.target)+1;n=k[o]||k[0];break;case m:var r=k.indexOf(e.target)-1;n=k[r]||k[k.length-1]}null==(t=n)||t.focus()},O=function(e,t){return t.value===e||t.values&&-1!=t.values.indexOf(e)};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},b)},p.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,className:(0,a.Z)("tabs__item",l,{"tabs__item--active":C===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:T,onFocus:x,onClick:x},n)}))),t?(0,o.cloneElement)(I.filter((function(e){return O(C,e.props)}))[0],{className:s}):o.createElement("div",null,I.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:!O(C,e.props),className:s})}))),o.createElement("br",null))}},9006:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return f},metadata:function(){return b},toc:function(){return d},PreviewTooltip:function(){return h},default:function(){return g}});var o=n(2122),r=n(9756),i=n(7294),a=n(3905),l=n(8952),u=n(9309),s=n(4996),m=n(3328),c=["components"],p={},f="Combinable Items",b={unversionedId:"items/combinable-items",id:"items/combinable-items",isDocsHomePage:!1,title:"Combinable Items",description:"Making items combinable",source:"@site/docs/items/combinable-items.mdx",sourceDirName:"items",slug:"/items/combinable-items",permalink:"/RogueLibs/ru/docs/items/combinable-items",editUrl:"https://github.com/Abbysssal/RogueLibs/edit/master/website/docs/items/combinable-items.mdx",version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Usable Items",permalink:"/RogueLibs/ru/docs/items/usable-items"},next:{title:"Targetable Items",permalink:"/RogueLibs/ru/docs/items/targetable-items"}},d=[{value:"Making items combinable",id:"making-combinable",children:[{value:"Inventory Slot Preview",id:"slot-preview",children:[]}]},{value:"Examples",id:"examples",children:[]}];function h(e){e.props;var t=(0,i.useState)((0,s.Z)("/img/SetupDetailsGenerator/TestItem.png")),n=t[0],o=t[1],r=(0,i.useState)("#FFED00"),l=r[0],u=r[1],c=(0,i.useState)("$123"),p=c[0],f=c[1];return(0,a.kt)("div",{style:{padding:"10px",border:"5px dashed var(--ifm-menu-color-background-hover)",width:"max-content"}},(0,a.kt)("input",{type:"file",accept:"image/*",onChange:function(e){if(e.target.files[0]){var t=new FileReader;t.addEventListener("load",(function(){return o(t.result)})),t.readAsDataURL(e.target.files[0])}},style:{margin:"5px"}}),(0,a.kt)("div",{style:{margin:"5px"}},(0,a.kt)(m.Z,{sprite:n,tooltip:p,tooltipColor:l,mdxType:"InventorySlot"})),(0,a.kt)("input",{type:"text",placeholder:"$123",onChange:function(e){return f(e.target.value)},style:{fontSize:"22px",margin:"5px"}}),(0,a.kt)("input",{type:"color",value:l,onChange:function(e){return u(e.target.value)}}))}var v={toc:d,PreviewTooltip:h};function g(e){var t=e.components,n=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"combinable-items"},"Combinable Items"),(0,a.kt)("h2",{id:"making-combinable"},"Making items combinable"),(0,a.kt)("p",null,"Just implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"IItemCombinable")," interface in your item's class:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCombinableItem.cs"',title:'"MyCombinableItem.cs"'},"// highlight-next-line\npublic class MyCombinableItem : CustomItem, IItemCombinable\n{\n    // highlight-start\n    public bool CombineFilter(InvItem other) { /* ... */ }\n    public bool CombineItems(InvItem other) { /* ... */ }\n    public CustomTooltip CombineTooltip(InvItem other) { /* ... */ }\n    public CustomTooltip CombineCursorText(InvItem other) { /* ... */ }\n    // highlight-end\n}\n")),(0,a.kt)("p",null,"Plus, your item's type must be ",(0,a.kt)("inlineCode",{parentName:"p"},'"Combine"'),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"    public override void SetupDetails()\n    {\n        // highlight-next-line\n        Item.itemType = ItemTypes.Combine;\n        /* ... */\n    }\n")),(0,a.kt)("h3",{id:"slot-preview"},"Inventory Slot Preview"),(0,a.kt)("p",null,"Wanna see how your ",(0,a.kt)("inlineCode",{parentName:"p"},"CombineTooltip")," will look in the game? Check out this small tool:"),(0,a.kt)(h,{mdxType:"PreviewTooltip"}),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(l.Z,{defaultValue:"ammobox",values:[{label:"Ammo Box",value:"ammobox"}],mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"ammobox",mdxType:"TabItem"},(0,a.kt)("p",null,"A pretty complicated example with a lot of math."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="AmmoBox.cs"',title:'"AmmoBox.cs"'},'[ItemCategories(RogueCategories.Technology, RogueCategories.GunAccessory, RogueCategories.Guns)]\npublic class AmmoBox : CustomItem, IItemCombinable\n{\n    public override void SetupDetails()\n    {\n        Item.itemType = ItemTypes.Combine;\n        Item.itemValue = 4;\n        Item.initCount = 100;\n        Item.rewardCount = 200;\n        Item.hasCharges = true;\n        Item.stackable = true;\n    }\n    public bool CombineFilter(InvItem other) => other.itemType == ItemTypes.WeaponProjectile && !other.noRefills;\n    public bool CombineItems(InvItem other)\n    {\n        if (!CombineFilter(other)) return false;\n\n        int amountToRefill = other.maxAmmo - other.invItemCount;\n        float singleCost = (float)other.itemValue / other.maxAmmo;\n        if (Owner.oma.superSpecialAbility && (Owner.agentName == "Soldier" || Owner.agentName == "Doctor"))\n            singleCost = 0f;\n        if (other.invItemCount >= other.maxAmmo)\n        {\n            Owner.SayDialogue("AmmoDispenserFull");\n            gc.audioHandler.Play(Owner, "CantDo");\n            return false;\n        }\n\n        int affordableAmount = (int)Mathf.Ceil(Count / singleCost);\n        int willBeBought = Mathf.Min(affordableAmount, amountToRefill);\n        int willBeReduced = (int)Mathf.Min(Count, willBeBought * singleCost);\n\n        Count -= willBeReduced;\n        other.invItemCount += willBeBought;\n        Owner.SayDialogue("AmmoDispenserFilled");\n        gc.audioHandler.Play(Owner, "BuyItem");\n        return true;\n    }\n    public CustomTooltip CombineTooltip(InvItem other)\n    {\n        if (!CombineFilter(other)) return null;\n\n        int amountToRefill = other.maxAmmo - other.invItemCount;\n        if (amountToRefill == 0) return null;\n\n        float singleCost = (float)other.itemValue / other.maxAmmo;\n        if (Owner.oma.superSpecialAbility && (Owner.agentName == "Soldier" || Owner.agentName == "Doctor"))\n            singleCost = 0f;\n        int cost = (int)Mathf.Floor(amountToRefill * singleCost);\n        int canAfford = (int)Mathf.Ceil(Count / singleCost);\n\n        return "+" + Mathf.Min(amountToRefill, canAfford) + " (" + Mathf.Min(cost, Count) + ")";\n    }\n    public CustomTooltip CombineCursorText(InvItem other) => gc.nameDB.GetName("RefillGun", "Interface");\n    // it\'s one of the vanilla dialogues, so there\'s no need to define it in the mod\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'RogueLibs.CreateCustomItem<AmmoBox>()\n    .WithName(new CustomNameInfo("Ammo Box"))\n    .WithDescription(new CustomNameInfo("Combine with any refillable weapon to refill it. Limited ammo."))\n    .WithSprite(Properties.Resources.AmmoBox)\n    .WithUnlock(new ItemUnlock\n    {\n        UnlockCost = 10,\n        CharacterCreationCost = 3,\n        LoadoutCost = 3,\n        Prerequisites = { "AmmoProcessor", "KillProfiterAmmo", "AmmoCapacityMod" },\n    });\n')))))}g.isMDXComponent=!0},6010:function(e,t,n){"use strict";function o(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);