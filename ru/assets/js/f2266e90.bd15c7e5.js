"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3451],{4214:function(t,e,n){n.d(e,{Z:function(){return a}});var o=n(7294),i=n(9055);function a(t){var e=t.children,n=t.language;return o.createElement(i.Z,{className:"language-"+(n||"csharp")},e.replace(/\t/g,"    "))}},2725:function(t,e,n){n.d(e,{Z:function(){return i}});var o=n(7294);function i(t){var e=t.color,n=(t.size||14)+"px";return o.createElement("div",{style:{display:"inline"}},o.createElement("div",{style:{display:"inline-block",width:n,height:n,background:e,marginRight:"2px"}}),o.createElement("div",{style:{display:"inline"}},e))}},5880:function(t,e,n){n.d(e,{Z:function(){return r}});var o=n(7294),i=n(6010),a={container:"container_2sPt",cursorLocked:"cursorLocked_2zgq",normal:"normal_3G0b",hoverable:"hoverable_21Ge",selected:"selected_3EXb",locked:"locked_S145",sprite:"sprite_7g3Y",tooltip:"tooltip_2Zg4",count:"count_2Mnn"};function r(t){var e=t.sprite,n=t.tooltip,r=t.tooltipColor,l=t.count,s=t.countColor,u=t.hoverable,m=t.cantClick,c=t.type,p=void 0===c?"normal":c,d=t.onClick;return o.createElement("div",{onClick:d,className:(0,i.Z)(a.container,m&&a.cursorLocked,p&&a[p],u&&a.hoverable)},e&&o.createElement("img",{key:"sprite",className:a.sprite,src:e}),n&&o.createElement("span",{key:"tooltip",className:a.tooltip,style:{color:r||"#FFED00"}},n),l&&o.createElement("span",{key:"count",className:a.count,style:{color:s||"#FFFFFF"}},l))}},1016:function(t,e,n){n.d(e,{Z:function(){return l}});var o=n(3117),i=n(102),a=n(7294),r=["children"];function l(t){var e=t.children,n=(0,i.Z)(t,r);return a.createElement("div",(0,o.Z)({role:"tabpanel"},n),e)}},2099:function(t,e,n){n.d(e,{Z:function(){return p}});var o=n(7294),i=n(9443);var a=function(){var t=(0,o.useContext)(i.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},r=n(6010),l="tabItem_2O3c",s="tabItemActive_Fpbe",u="tab_1pgU";var m=37,c=39;function p(t){var e=t.lazy,n=t.defaultValue,i=t.values,p=t.groupId,d=a(),C=d.tabGroupChoices,b=d.setTabGroupChoices,h=(0,o.useState)(n),f=h[0],g=h[1],v=o.Children.toArray(t.children),I=[];if(null!=p){var k=C[p];null!=k&&k!==f&&i.some((function(t){return t.value===k}))&&g(k)}var y=function(t){var e=t.currentTarget,n=I.indexOf(e),o=i[n].value;g(o),null!=p&&(b(p,o),setTimeout((function(){var t,n,o,i,a,r,l,u;(t=e.getBoundingClientRect(),n=t.top,o=t.left,i=t.bottom,a=t.right,r=window,l=r.innerHeight,u=r.innerWidth,n>=0&&a<=u&&i<=l&&o>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(s),setTimeout((function(){return e.classList.remove(s)}),2e3))}),150))},T=function(t){var e;switch(t.keyCode){case c:var n=I.indexOf(t.target)+1;e=I[n]||I[0];break;case m:var o=I.indexOf(t.target)-1;e=I[o]||I[I.length-1];break;default:return}e.focus()},S=function(t,e){return e.value===t||e.values&&-1!=e.values.indexOf(t)};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:"tabs"},i.map((function(t){var e=t.value,n=t.label;return o.createElement("li",{role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,className:(0,r.Z)("tabs__item",l,{"tabs__item--active":f===e}),key:e,ref:function(t){return t&&I.push(t)},onKeyDown:T,onFocus:y,onClick:y},n)}))),e?o.cloneElement(v.find((function(t){return S(f,t.props)})),{className:u}):o.createElement("div",null,v.map((function(t,e){return o.cloneElement(t,{key:e,hidden:!S(f,t.props),className:u})}))),o.createElement("br",null))}},598:function(t,e,n){n.r(e),n.d(e,{PreviewTooltip:function(){return g},contentTitle:function(){return h},default:function(){return k},frontMatter:function(){return b},metadata:function(){return f},toc:function(){return v}});var o=n(3117),i=n(102),a=n(7294),r=n(3905),l=n(2099),s=n(1016),u=n(4996),m=n(2725),c=n(5880),p=n(4214),d=n(5306),C=["components"],b={},h="\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b",f={unversionedId:"dev/items/combinable-items",id:"dev/items/combinable-items",title:"\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b",description:"\u0414\u0435\u043b\u0430\u0435\u043c \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u043c\u044b\u043c\u0438",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/dev/items/combinable-items.mdx",sourceDirName:"dev/items",slug:"/dev/items/combinable-items",permalink:"/RogueLibs/ru/docs/dev/items/combinable-items",editUrl:"https://github.com/Abbysssal/RogueLibs/edit/main/website/docs/dev/items/combinable-items.mdx",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b",permalink:"/RogueLibs/ru/docs/dev/items/usable-items"},next:{title:"\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b",permalink:"/RogueLibs/ru/docs/dev/items/targetable-items"}};function g(t){t.props;var e=(0,a.useState)((0,u.Z)("/img/TestItem.png")),n=e[0],o=e[1],i=(0,a.useState)("#FFED00"),l=i[0],s=i[1],m=(0,a.useState)("$123"),p=m[0],d=m[1];return(0,r.kt)("div",{style:{padding:"10px",border:"5px dashed var(--ifm-menu-color-background-hover)",width:"max-content"}},(0,r.kt)("input",{type:"file",accept:"image/*",onChange:function(t){if(t.target.files[0]){var e=new FileReader;e.addEventListener("load",(function(){return o(e.result)})),e.readAsDataURL(t.target.files[0])}},style:{margin:"5px"}}),(0,r.kt)("div",{style:{margin:"5px"}},(0,r.kt)(c.Z,{sprite:n,tooltip:p,tooltipColor:l,mdxType:"InventorySlot"})),(0,r.kt)("input",{type:"text",placeholder:"$123",onChange:function(t){return d(t.target.value)},style:{fontSize:"22px",margin:"5px"}}),(0,r.kt)("input",{type:"color",value:l,onChange:function(t){return s(t.target.value)}}))}var v=[{value:"\u0414\u0435\u043b\u0430\u0435\u043c \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u043c\u044b\u043c\u0438",id:"making-combinable",children:[{value:"\u041f\u0440\u0435\u0432\u044c\u044e \u0441\u043b\u043e\u0442\u0430 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u044f",id:"slot-preview",children:[],level:3}],level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"examples",children:[],level:2}],I={PreviewTooltip:g,toc:v};function k(t){var e=t.components,n=(0,i.Z)(t,C);return(0,r.kt)("wrapper",(0,o.Z)({},I,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u043c\u044b\u0435-\u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b"},"\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b"),(0,r.kt)("h2",{id:"making-combinable"},"\u0414\u0435\u043b\u0430\u0435\u043c \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u043c\u044b\u043c\u0438"),(0,r.kt)("p",null,"\u041f\u0440\u043e\u0441\u0442\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0439\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ",(0,r.kt)("inlineCode",{parentName:"p"},"IItemCombinable")," \u0432 \u043a\u043b\u0430\u0441\u0441\u0435 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCombinableItem.cs"',title:'"MyCombinableItem.cs"'},"// highlight-next-line\npublic class MyCombinableItem : CustomItem, IItemCombinable\n{\n    // highlight-start\n    public bool CombineFilter(InvItem other) { /* ... */ }\n    public bool CombineItems(InvItem other) { /* ... */ }\n    public CustomTooltip CombineTooltip(InvItem other) { /* ... */ }\n    public CustomTooltip CombineCursorText(InvItem other) { /* ... */ }\n    // highlight-end\n}\n")),(0,r.kt)("p",null,"\u041f\u043b\u044e\u0441, \u0442\u0438\u043f \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c ",(0,r.kt)("inlineCode",{parentName:"p"},'"Combine"'),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"    public override void SetupDetails()\n    {\n        // highlight-next-line\n        Item.itemType = ItemTypes.Combine;\n        /* ... */\n    }\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CombineFilter")," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u043a\u0430\u043a\u0438\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u0431\u0443\u0434\u0443\u0442 \u043f\u043e\u0434\u0441\u0432\u0435\u0447\u0438\u0432\u0430\u0442\u044c\u0441\u044f, \u043f\u0440\u0438 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0438 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CombineItems")," \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u0442 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u043f\u0440\u0435\u0434\u043c\u0435\u0442 \u0441 \u0434\u0440\u0443\u0433\u0438\u043c. \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043b\u0438 \u0431\u044b\u043b\u0438 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u044b \u0438\u043b\u0438 \u043d\u0435\u0442. \u041e\u0431\u044b\u0447\u043d\u043e, \u0435\u0441\u043b\u0438 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u043d\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u044b, \u043f\u0440\u043e\u0438\u0433\u0440\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0437\u0432\u0443\u043a ",(0,r.kt)("inlineCode",{parentName:"p"},'"CantDo"'),". \u0412\u043e\u0437\u0432\u0440\u0430\u0442 ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u043e\u0438\u0433\u0440\u044b\u0432\u0430\u0435\u0442 \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u044e."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CombineTooltip")," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0442\u0435\u043a\u0441\u0442 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438 \u0432 \u043b\u0435\u0432\u043e\u043c \u0432\u0435\u0440\u0445\u043d\u0435\u043c \u0443\u0433\u043b\u0443 \u0441\u043b\u043e\u0442\u0430 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u044f. ",(0,r.kt)("inlineCode",{parentName:"p"},"Text")," \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043d\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u0441\u044f \u043a\u0430\u043a \u043f\u0443\u0441\u0442\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430, \u0438 Color \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043d\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u0441\u044f \u043a\u0430\u043a ",(0,r.kt)(m.Z,{color:"#FFED00",mdxType:"ColorSquare"}),". ",(0,r.kt)("a",{parentName:"p",href:"#slot-preview"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u043d\u0438\u0436\u0435"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CombineCursorText")," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0442\u0435\u043a\u0441\u0442 \u0432\u043e\u0437\u043b\u0435 \u043a\u0443\u0440\u0441\u043e\u0440\u0430 \u043d\u0430\u0434 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u043c \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u043e\u043c. ",(0,r.kt)("inlineCode",{parentName:"p"},"Text")," \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043d\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),' \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u0441\u044f \u043a\u0430\u043a "\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0442\u044c", \u0438 ',(0,r.kt)("inlineCode",{parentName:"p"},"Color")," \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043d\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u0441\u044f \u043a\u0430\u043a ",(0,r.kt)(m.Z,{color:"#FFFFFF",mdxType:"ColorSquare"}),"."),(0,r.kt)("h3",{id:"slot-preview"},"\u041f\u0440\u0435\u0432\u044c\u044e \u0441\u043b\u043e\u0442\u0430 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u044f"),(0,r.kt)("p",null,"\u0425\u043e\u0442\u0438\u0442\u0435 \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u043a\u0430\u043a \u0432\u0430\u0448 ",(0,r.kt)("inlineCode",{parentName:"p"},"CombineTooltip")," \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0432 \u0438\u0433\u0440\u0435? \u0417\u0430\u0446\u0435\u043d\u0438\u0442\u0435 \u044d\u0442\u043e\u0442 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442:"),(0,r.kt)(g,{mdxType:"PreviewTooltip"}),(0,r.kt)("h2",{id:"examples"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,r.kt)(l.Z,{defaultValue:"ammobox",values:[{label:"\u0426\u0435\u043d\u0442\u0440\u0438\u0444\u0443\u0433\u0430",value:"centrifuge"},{label:"\u0421\u0442\u043e\u0439\u043a\u0430 \u0441\u043e \u0441\u043f\u0435\u0446\u0438\u044f\u043c\u0438",value:"spicerack"},{label:"\u042f\u0449\u0438\u043a \u0441 \u0431\u043e\u0435\u043f\u0440\u0438\u043f\u0430\u0441\u0430\u043c\u0438",value:"ammobox"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"centrifuge",mdxType:"TabItem"},(0,r.kt)("p",null,"\u041f\u0440\u043e\u0441\u0442\u043e\u0439 \u043f\u0440\u0438\u043c\u0435\u0440, \u043e\u0431\u0440\u0430\u0449\u0430\u044e\u0449\u0438\u0439 \u044d\u0444\u0444\u0435\u043a\u0442\u044b \u0432 \u0428\u043f\u0440\u0438\u0446\u0430\u0445."),(0,r.kt)(p.Z,{mdxType:"CodeSnippet"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace RogueLibsCore.Test\n{\n\tpublic class Centrifuge : CustomItem, IItemCombinable\n\t{\n\t\t[RLSetup]\n\t\tpublic static void Setup()\n\t\t{\n\t\t\t/*\n\t\t\tRogueLibs.CreateCustomItem<Centrifuge>()\n\t\t\t\t.WithName(new CustomNameInfo("Centrifuge"))\n\t\t\t\t.WithDescription(new CustomNameInfo("Combine with a syringe to invert its effect."))\n\t\t\t\t.WithSprite(Properties.Resources.Centrifuge)\n\t\t\t\t.WithUnlock(new ItemUnlock\n\t\t\t\t{\n\t\t\t\t\tUnlockCost = 10,\n\t\t\t\t\tLoadoutCost = 5,\n\t\t\t\t\tCharacterCreationCost = 3,\n\t\t\t\t\tPrerequisites = { VanillaItems.Antidote },\n\t\t\t\t});\n\t\t\t*/\n\t\t}\n\n\t\tpublic override void SetupDetails()\n\t\t{\n\t\t\tItem.itemType = ItemTypes.Combine;\n\t\t\tItem.itemValue = 8;\n\t\t\tItem.initCount = 10;\n\t\t\tItem.stackable = true;\n\t\t\tItem.hasCharges = true;\n\t\t}\n\n\t\tprivate static readonly Dictionary<string, string> invertDictionary = new Dictionary<string, string>\n\t\t{\n\t\t\t[VanillaEffects.Poisoned] = VanillaEffects.RegenerateHealth,\n\t\t\t[VanillaEffects.Slow] = VanillaEffects.Fast,\n\t\t\t[VanillaEffects.Weak] = VanillaEffects.Strength,\n\t\t\t[VanillaEffects.Acid] = VanillaEffects.Invincible,\n\t\t\t[VanillaEffects.Confused] = VanillaEffects.Invisible,\n\t\t};\n\t\tstatic Centrifuge()\n\t\t{\n\t\t\tforeach (KeyValuePair<string, string> pair in invertDictionary.ToArray())\n\t\t\t\tinvertDictionary.Add(pair.Value, pair.Key);\n\t\t}\n\n\t\tpublic bool CombineFilter(InvItem other) => other.invItemName == VanillaItems.Syringe\n\t\t\t&& other.contents.Count > 0 && invertDictionary.ContainsKey(other.contents[0]);\n\t\tpublic bool CombineItems(InvItem other)\n\t\t{\n\t\t\tif (!CombineFilter(other)) return false;\n\n\t\t\tother.contents[0] = invertDictionary[other.contents[0]];\n\n\t\t\tCount--;\n\t\t\tgc.audioHandler.Play(Owner, VanillaAudio.CombineItem);\n\t\t\treturn true;\n\t\t}\n\t\tpublic CustomTooltip CombineCursorText(InvItem other) => default;\n\t\tpublic CustomTooltip CombineTooltip(InvItem other) => default;\n\t}\n}\n')),(0,r.kt)(s.Z,{value:"spicerack",mdxType:"TabItem"},(0,r.kt)("p",null,"\u041f\u0440\u043e\u0441\u0442\u043e\u0439 \u043f\u0440\u0438\u043c\u0435\u0440, \u0441\u043e ",(0,r.kt)("em",{parentName:"p"},"\u0441\u043f\u0435\u0446\u0438"),"\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0445\u0443\u043a\u0430\u043c\u0438 \u0434\u043b\u044f \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u043f\u0440\u0438\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0439 \u0435\u0434\u044b."),(0,r.kt)(p.Z,{mdxType:"CodeSnippet"},d.Z)),(0,r.kt)(s.Z,{value:"ammobox",mdxType:"TabItem"},(0,r.kt)("p",null,"\u0414\u043e\u0432\u043e\u043b\u044c\u043d\u043e \u0441\u043b\u043e\u0436\u043d\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 \u0441 \u043a\u0443\u0447\u0435\u0439 \u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0438."),(0,r.kt)(p.Z,{mdxType:"CodeSnippet"},'using UnityEngine;\n\nnamespace RogueLibsCore.Test\n{\n\t[ItemCategories(RogueCategories.Technology, RogueCategories.GunAccessory, RogueCategories.Guns)]\n\tpublic class AmmoBox : CustomItem, IItemCombinable\n\t{\n\t\t[RLSetup]\n\t\tpublic static void Setup()\n\t\t{\n\t\t\tRogueLibs.CreateCustomItem<AmmoBox>()\n\t\t\t\t.WithName(new CustomNameInfo("Ammo Box"))\n\t\t\t\t.WithDescription(new CustomNameInfo("Combine with any refillable weapon to refill it. Limited ammo."))\n\t\t\t\t.WithSprite(Properties.Resources.AmmoBox)\n\t\t\t\t.WithUnlock(new ItemUnlock\n\t\t\t\t{\n\t\t\t\t\tUnlockCost = 10,\n\t\t\t\t\tLoadoutCost = 5,\n\t\t\t\t\tCharacterCreationCost = 3,\n\t\t\t\t\tPrerequisites = { VanillaItems.KillAmmunizer },\n\t\t\t\t});\n\t\t}\n\n\t\tpublic override void SetupDetails()\n\t\t{\n\t\t\tItem.itemType = ItemTypes.Combine;\n\t\t\tItem.itemValue = 4;\n\t\t\tItem.initCount = 100;\n\t\t\tItem.rewardCount = 200;\n\t\t\tItem.hasCharges = true;\n\t\t\tItem.stackable = true;\n\t\t}\n\t\tpublic bool CombineFilter(InvItem other) => other.itemType == ItemTypes.WeaponProjectile && !other.noRefills;\n\t\tpublic bool CombineItems(InvItem other)\n\t\t{\n\t\t\tif (!CombineFilter(other))\n\t\t\t{\n\t\t\t\tgc.audioHandler.Play(Owner, VanillaAudio.CantDo);\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tif (other.invItemCount >= other.maxAmmo)\n\t\t\t{\n\t\t\t\tOwner.SayDialogue("AmmoDispenserFull");\n\t\t\t\tgc.audioHandler.Play(Owner, VanillaAudio.CantDo);\n\t\t\t\treturn false;\n\t\t\t}\n\n\t\t\tint amountToRefill = other.maxAmmo - other.invItemCount;\n\t\t\tfloat singleCost = (float)other.itemValue / other.maxAmmo;\n\t\t\tif (Owner.oma.superSpecialAbility && (Owner.agentName == VanillaAgents.Soldier || Owner.agentName == VanillaAgents.Doctor))\n\t\t\t\tsingleCost = 0f;\n\n\t\t\tint affordableAmount = (int)Mathf.Ceil(Count / singleCost);\n\t\t\tint willBeBought = Mathf.Min(affordableAmount, amountToRefill);\n\t\t\tint willBeReduced = (int)Mathf.Min(Count, willBeBought * singleCost);\n\n\t\t\tCount -= willBeReduced;\n\t\t\tother.invItemCount += willBeBought;\n\t\t\tOwner.SayDialogue("AmmoDispenserFilled");\n\t\t\tgc.audioHandler.Play(Owner, VanillaAudio.BuyItem);\n\t\t\treturn true;\n\t\t}\n\n\t\tpublic CustomTooltip CombineTooltip(InvItem other)\n\t\t{\n\t\t\tif (!CombineFilter(other)) return default;\n\n\t\t\tint amountToRefill = other.maxAmmo - other.invItemCount;\n\t\t\tif (amountToRefill == 0) return default;\n\n\t\t\tfloat singleCost = (float)other.itemValue / other.maxAmmo;\n\t\t\tif (Owner.oma.superSpecialAbility && (Owner.agentName == VanillaAgents.Soldier || Owner.agentName == VanillaAgents.Doctor))\n\t\t\t\tsingleCost = 0f;\n\t\t\tint cost = (int)Mathf.Floor(amountToRefill * singleCost);\n\t\t\tint canAfford = (int)Mathf.Ceil(Count / singleCost);\n\n\t\t\treturn "+" + Mathf.Min(amountToRefill, canAfford) + " (" + Mathf.Min(cost, Count) + ")";\n\t\t}\n\n\t\tpublic CustomTooltip CombineCursorText(InvItem other) => gc.nameDB.GetName("RefillGun", NameTypes.Interface);\n\t\t// it\'s one of the vanilla dialogues, so there\'s no need to define it in the mod\n\t}\n}\n'))))}k.isMDXComponent=!0},5306:function(t,e){e.Z='using UnityEngine;\n\nnamespace RogueLibsCore.Test\n{\n\t[ItemCategories(RogueCategories.Food, RogueCategories.Health)]\n\tpublic class SpiceRack : CustomItem, IItemCombinable\n\t{\n\t\t[RLSetup]\n\t\tpublic static void Setup()\n\t\t{\n\t\t\tRogueLibs.CreateCustomItem<SpiceRack>()\n\t\t\t\t.WithName(new CustomNameInfo("Spice Rack"))\n\t\t\t\t.WithDescription(new CustomNameInfo("Combine with any food item to increase its healing properties."))\n\t\t\t\t.WithSprite(Properties.Resources.SpiceRack)\n\t\t\t\t.WithUnlock(new ItemUnlock\n\t\t\t\t{\n\t\t\t\t\tUnlockCost = 10,\n\t\t\t\t\tLoadoutCost = 3,\n\t\t\t\t\tCharacterCreationCost = 2,\n\t\t\t\t\tPrerequisites = { VanillaItems.FoodProcessor },\n\t\t\t\t});\n\n\t\t\tSeasonCursorText = RogueLibs.CreateCustomName("SeasonItem", NameTypes.Interface, new CustomNameInfo("Season"));\n\t\t}\n\t\tprivate static CustomName SeasonCursorText;\n\n\t\tpublic override void SetupDetails()\n\t\t{\n\t\t\tItem.itemType = ItemTypes.Combine;\n\t\t\tItem.itemValue = 4;\n\t\t\tItem.initCount = 10;\n\t\t\tItem.rewardCount = 15;\n\t\t\tItem.stackable = true;\n\t\t\tItem.hasCharges = true;\n\t\t}\n\t\tpublic bool CombineFilter(InvItem other)\n\t\t{\n\t\t\tif (other.itemType != ItemTypes.Food || other.healthChange is 0\n\t\t\t\t|| !other.Categories.Contains(RogueCategories.Food)) return false;\n\n\t\t\tSpicedHook hook = other.GetHook<SpicedHook>();\n\t\t\treturn hook is null || hook.Spiciness < 3;\n\t\t}\n\t\tpublic bool CombineItems(InvItem other)\n\t\t{\n\t\t\tif (!CombineFilter(other)) return false;\n\n\t\t\tSpicedHook hook = other.GetHook<SpicedHook>() ?? other.AddHook<SpicedHook>();\n\t\t\thook.IncreaseSpiciness();\n\n\t\t\tCount--;\n\t\t\tgc.audioHandler.Play(Owner, VanillaAudio.CombineItem);\n\t\t\treturn true;\n\t\t}\n\t\tpublic CustomTooltip CombineCursorText(InvItem other) => SeasonCursorText;\n\t\tpublic CustomTooltip CombineTooltip(InvItem other)\n\t\t{\n\t\t\tif (!CombineFilter(other)) return default;\n\n\t\t\tSpicedHook hook = other.GetHook<SpicedHook>();\n\t\t\tint bonus = hook is null ? (int)Mathf.Ceil(other.healthChange / 4f) : hook.HealthBonus;\n\t\t\treturn new CustomTooltip($"+{bonus}", Color.green);\n\t\t}\n\n\t\tprivate class SpicedHook : HookBase<InvItem>\n\t\t{\n\t\t\tprotected override void Initialize()\n\t\t\t\t=> HealthBonus = (int)Mathf.Ceil(Instance.healthChange / 4f);\n\n\t\t\tpublic int HealthBonus { get; private set; }\n\t\t\tpublic int Spiciness { get; private set; }\n\n\t\t\tpublic void IncreaseSpiciness()\n\t\t\t{\n\t\t\t\tif (Spiciness is 3) return;\n\n\t\t\t\tSpiciness++;\n\t\t\t\tInstance.healthChange += HealthBonus;\n\t\t\t}\n\t\t}\n\t}\n}\n'}}]);