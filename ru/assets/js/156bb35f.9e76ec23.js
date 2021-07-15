(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[922],{2268:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(2122),a=n(9756),i=n(7294),o=n(1756),l=["children","language"];function s(e){var t=e.children,n=e.language,s=(0,a.Z)(e,l);return i.createElement(o.Z,(0,r.Z)({className:n||"language-csharp"},s),t.replace(/\t/g,"    "))}},7052:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(9756),a=n(7294),i=["color","size"];function o(e){var t=e.color,n=e.size;(0,r.Z)(e,i);return n=(n||14)+"px",a.createElement("div",{style:{display:"inline"}},a.createElement("div",{style:{display:"inline-block",width:n,height:n,background:t,marginRight:"2px"}}),a.createElement("div",{style:{display:"inline"}},t))}},9309:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(2122),a=n(9756),i=n(7294),o=["children"];function l(e){var t=e.children,n=(0,a.Z)(e,o);return i.createElement("div",(0,r.Z)({role:"tabpanel"},n),t)}},8952:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(7294),a=n(9443);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(6010),l="tabItem_2O3c",s="tabItemActive_Fpbe",u="tab_1pgU";var c=37,m=39;var p=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,p=e.values,g=e.groupId,d=e.className,b=i(),h=b.tabGroupChoices,f=b.setTabGroupChoices,T=(0,r.useState)(a),v=T[0],w=T[1],k=r.Children.toArray(e.children),C=[];if(null!=g){var y=h[g];null!=y&&y!==v&&p.some((function(e){return e.value===y}))&&w(y)}var I=function(e){var t=e.currentTarget,n=C.indexOf(t),r=p[n].value;w(r),null!=g&&(f(g,r),setTimeout((function(){var e,n,r,a,i,o,l,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,l=o.innerHeight,u=o.innerWidth,n>=0&&i<=u&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case m:var r=C.indexOf(e.target)+1;n=C[r]||C[0];break;case c:var a=C.indexOf(e.target)-1;n=C[a]||C[C.length-1]}null==(t=n)||t.focus()},N=function(e,t){return t.value===e||t.values&&-1!=t.values.indexOf(e)};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":v===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:x,onFocus:I,onClick:I},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return N(v,e.props)}))[0],{className:u}):r.createElement("div",null,k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:!N(v,e.props),className:u})}))),r.createElement("br",null))}},7024:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return d}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=n(8952),l=n(9309),s=(n(4996),n(7052)),u=n(2268),c=["components"],m={},p="Targetable Items +",g={unversionedId:"items/targetable-items-plus",id:"items/targetable-items-plus",isDocsHomePage:!1,title:"Targetable Items +",description:"Making items targetable anywhere",source:"@site/docs/items/targetable-items-plus.mdx",sourceDirName:"items",slug:"/items/targetable-items-plus",permalink:"/RogueLibs/ru/docs/items/targetable-items-plus",editUrl:"https://github.com/Abbysssal/RogueLibs/edit/master/website/docs/items/targetable-items-plus.mdx",version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Targetable Items",permalink:"/RogueLibs/ru/docs/items/targetable-items"},next:{title:"Recharging Items",permalink:"/RogueLibs/ru/docs/items/recharging-items"}},d=[{value:"Making items targetable anywhere",id:"making-targetable-anywhere",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"targetable-items-"},"Targetable Items +"),(0,i.kt)("h2",{id:"making-targetable-anywhere"},"Making items targetable anywhere"),(0,i.kt)("p",null,"Just implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"IItemTargetableAnywhere")," interface in your item's class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyTargetableAnywhereItem.cs"',title:'"MyTargetableAnywhereItem.cs"'},"// highlight-next-line\npublic class MyTargetableAnywhereItem : CustomItem, IItemTargetableAnywhere\n{\n    // highlight-start\n    public bool TargetFilter(Vector2 position) { /* ... */ }\n    public bool TargetPosition(Vector2 position) { /* ... */ }\n    public CustomTooltip TargetCursorText(Vector2 position) { /* ... */ }\n    // highlight-end\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TargetFilter")," determines where the cursor should be highlighted, when using the current item."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TargetPosition")," uses the current item on the position. The return value indicates whether it was a success or not. You can play a ",(0,i.kt)("inlineCode",{parentName:"p"},'"CantDo"')," sound and make the player say something, if the item cannot be used. Returning ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," will also play an animation."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TargetCursorText")," determines the text under the cursor when hovering over the specified position. You can also specify the cursor text's color. Text set to ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),' will default to "Use", and Color set to ',(0,i.kt)("inlineCode",{parentName:"p"},"null")," will default to ",(0,i.kt)(s.Z,{color:"#FFFFFF",mdxType:"ColorSquare"}),"."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)(o.Z,{defaultValue:"usableteleporter",values:[{label:"Usable Teleporter",value:"usableteleporter"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"usableteleporter",mdxType:"TabItem"},(0,i.kt)(u.Z,{mdxType:"CodeSnippet"},'using UnityEngine;\n\nnamespace RogueLibsCore.Test\n{\n    [ItemCategories(RogueCategories.Usable, RogueCategories.Technology, RogueCategories.Stealth)]\n    public class UsableTeleporter : CustomItem, IItemTargetableAnywhere\n    {\n        [RLSetup]\n        public static void Setup()\n        {\n            RogueLibs.CreateCustomItem<UsableTeleporter>()\n                .WithName(new CustomNameInfo("Usable Teleporter"))\n                .WithDescription(new CustomNameInfo("Teleports you somewhere. Has limited uses."))\n                .WithSprite(Properties.Resources.UsableTeleporter)\n                .WithUnlock(new ItemUnlock\n                {\n                    UnlockCost = 10,\n                    CharacterCreationCost = 3,\n                    LoadoutCost = 3,\n                    Prerequisites = { "QuickEscapeTeleporter" },\n                });\n\n            RogueLibs.CreateCustomName("TeleportHere", "Interface", new CustomNameInfo("Teleport here"));\n        }\n\n        public override void SetupDetails()\n        {\n            Item.itemType = ItemTypes.Tool;\n            Item.itemValue = 30;\n            Item.initCount = 2;\n            Item.rewardCount = 3;\n            Item.stackable = true;\n            Item.goesInToolbar = true;\n        }\n        public bool TargetFilter(Vector2 position)\n        {\n            TileData tileData = gc.tileInfo.GetTileData(position);\n            return !gc.tileInfo.IsOverlapping(position, "Anything") && tileData.wallMaterial == wallMaterialType.None;\n        }\n        public bool TargetPosition(Vector2 position)\n        {\n            if (!TargetFilter(position)) return false;\n\n            Owner.SpawnParticleEffect("Spawn", Owner.tr.position);\n            Owner.Teleport(position, false, true);\n            Owner.rb.velocity = Vector2.zero;\n            Owner.SpawnParticleEffect("Spawn", Owner.tr.position, false);\n            gc.audioHandler.Play(Owner, "Spawn");\n\n            Count--;\n            return true;\n        }\n        public CustomTooltip TargetCursorText(Vector2 position) => gc.nameDB.GetName("TeleportHere", "Interface");\n    }\n}\n'))))}h.isMDXComponent=!0}}]);