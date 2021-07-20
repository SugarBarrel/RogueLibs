(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[726],{4214:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var a=n(7294),r=n(1756);function i(t){var e=t.children,n=t.language;return a.createElement(r.Z,{className:"language-"+(n||"csharp")},e.replace(/\t/g,"    "))}},2725:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});var a=n(7294);function r(t){var e=t.color,n=(t.size||14)+"px";return a.createElement("div",{style:{display:"inline"}},a.createElement("div",{style:{display:"inline-block",width:n,height:n,background:e,marginRight:"2px"}}),a.createElement("div",{style:{display:"inline"}},e))}},9309:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var a=n(2122),r=n(9756),i=n(7294),l=["children"];function s(t){var e=t.children,n=(0,r.Z)(t,l);return i.createElement("div",(0,a.Z)({role:"tabpanel"},n),e)}},8952:function(t,e,n){"use strict";n.d(e,{Z:function(){return p}});var a=n(7294),r=n(9443);var i=function(){var t=(0,a.useContext)(r.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},l=n(6010),s="tabItem_2O3c",o="tabItemActive_Fpbe",u="tab_1pgU";var c=37,m=39;var p=function(t){var e=t.lazy,n=t.block,r=t.defaultValue,p=t.values,g=t.groupId,d=t.className,b=i(),h=b.tabGroupChoices,f=b.setTabGroupChoices,v=(0,a.useState)(r),T=v[0],k=v[1],w=a.Children.toArray(t.children),C=[];if(null!=g){var y=h[g];null!=y&&y!==T&&p.some((function(t){return t.value===y}))&&k(y)}var O=function(t){var e=t.currentTarget,n=C.indexOf(e),a=p[n].value;k(a),null!=g&&(f(g,a),setTimeout((function(){var t,n,a,r,i,l,s,u;(t=e.getBoundingClientRect(),n=t.top,a=t.left,r=t.bottom,i=t.right,l=window,s=l.innerHeight,u=l.innerWidth,n>=0&&i<=u&&r<=s&&a>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(o),setTimeout((function(){return e.classList.remove(o)}),2e3))}),150))},I=function(t){var e,n;switch(t.keyCode){case m:var a=C.indexOf(t.target)+1;n=C[a]||C[0];break;case c:var r=C.indexOf(t.target)-1;n=C[r]||C[C.length-1]}null==(e=n)||e.focus()},R=function(t,e){return e.value===t||e.values&&-1!=e.values.indexOf(t)};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},d)},p.map((function(t){var e=t.value,n=t.label;return a.createElement("li",{role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,className:(0,l.Z)("tabs__item",s,{"tabs__item--active":T===e}),key:e,ref:function(t){return C.push(t)},onKeyDown:I,onFocus:O,onClick:O},n)}))),e?(0,a.cloneElement)(w.filter((function(t){return R(T,t.props)}))[0],{className:u}):a.createElement("div",null,w.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:!R(T,t.props),className:u})}))),a.createElement("br",null))}},7714:function(t,e,n){"use strict";n.r(e),n.d(e,{contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return d}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),l=n(8952),s=n(9309),o=(n(4996),n(2725)),u=n(4214),c=["components"],m={},p="Targetable Items",g={unversionedId:"items/targetable-items",id:"items/targetable-items",isDocsHomePage:!1,title:"Targetable Items",description:"Making items targetable",source:"@site/docs/items/targetable-items.mdx",sourceDirName:"items",slug:"/items/targetable-items",permalink:"/RogueLibs/docs/items/targetable-items",editUrl:"https://github.com/Abbysssal/RogueLibs/edit/master/website/docs/items/targetable-items.mdx",version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Combinable Items",permalink:"/RogueLibs/docs/items/combinable-items"},next:{title:"Targetable Items +",permalink:"/RogueLibs/docs/items/targetable-items-plus"}},d=[{value:"Making items targetable",id:"making-targetable",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:d};function h(t){var e=t.components,n=(0,r.Z)(t,c);return(0,i.kt)("wrapper",(0,a.Z)({},b,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"targetable-items"},"Targetable Items"),(0,i.kt)("h2",{id:"making-targetable"},"Making items targetable"),(0,i.kt)("p",null,"Just implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"IItemTargetable")," interface in your item's class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyTargetableItem.cs"',title:'"MyTargetableItem.cs"'},"// highlight-next-line\npublic class MyTargetableItem : CustomItem, IItemTargetable\n{\n    // highlight-start\n    public bool TargetFilter(PlayfieldObject target) { /* ... */ }\n    public bool TargetObject(PlayfieldObject target) { /* ... */ }\n    public CustomTooltip TargetCursorText(PlayfieldObject target) { /* ... */ }\n    // highlight-end\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TargetFilter")," determines what objects will be highlighted, when using the current item."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TargetObject")," uses the current item on the target. The return value indicates whether it was a success or not. You can play a ",(0,i.kt)("inlineCode",{parentName:"p"},'"CantDo"')," sound and make the player say something, if the item cannot be used. Returning ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," will also play an animation."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TargetCursorText")," determines the text under the cursor when hovering over the specified object. You can also specify the cursor text's color. Text set to ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),' will default to "Use", and Color set to ',(0,i.kt)("inlineCode",{parentName:"p"},"null")," will default to ",(0,i.kt)(o.Z,{color:"#FFFFFF",mdxType:"ColorSquare"}),"."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)(l.Z,{defaultValue:"spytron3000",values:[{label:"SPYTRON 3000",value:"spytron3000"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"spytron3000",mdxType:"TabItem"},(0,i.kt)("p",null,"SPYTRON 3000 from Team Fortress 2. Makes you look like the selected person and copies their relationships."),(0,i.kt)(u.Z,{mdxType:"CodeSnippet"},'namespace RogueLibsCore.Test\n{\n\t[ItemCategories(RogueCategories.Social, RogueCategories.Stealth,\n\t\tRogueCategories.Technology, RogueCategories.Usable)]\n\tpublic class SPYTRON3000 : CustomItem, IItemTargetable\n\t{\n\t\t[RLSetup]\n\t\tpublic static void Setup()\n\t\t{\n\t\t\tRogueLibs.CreateCustomItem<SPYTRON3000>()\n\t\t\t\t.WithName(new CustomNameInfo("SPYTRON 3000"))\n\t\t\t\t.WithDescription(new CustomNameInfo("Always wanted to be someone else? Now you can!"))\n\t\t\t\t.WithSprite(Properties.Resources.SPYTRON3000)\n\t\t\t\t.WithUnlock(new ItemUnlock\n\t\t\t\t{\n\t\t\t\t\tUnlockCost = 10,\n\t\t\t\t\tCharacterCreationCost = 3,\n\t\t\t\t\tLoadoutCost = 2,\n\t\t\t\t});\n\n\t\t\tRogueLibs.CreateCustomName("Disguise", "Interface", new CustomNameInfo("Disguise as"));\n\t\t}\n\n\t\tpublic override void SetupDetails()\n\t\t{\n\t\t\tItem.itemType = ItemTypes.Tool;\n\t\t\tItem.itemValue = 40;\n\t\t\tItem.initCount = 2;\n\t\t\tItem.rewardCount = 3;\n\t\t\tItem.stackable = true;\n\t\t\tItem.goesInToolbar = true;\n\t\t}\n\t\tpublic bool TargetFilter(PlayfieldObject target) => target is Agent a && a != Owner;\n\t\tpublic bool TargetObject(PlayfieldObject targetObj)\n\t\t{\n\t\t\tif (!TargetFilter(targetObj)) return false;\n\t\t\tAgent target = (Agent)targetObj;\n\n\t\t\tstring prev = Owner.agentName;\n\t\t\tOwner.agentName = target.agentName;\n\n\t\t\tOwner.relationships.CopyLooks(target);\n\t\t\tforeach (Relationship rel in target.relationships.RelList)\n\t\t\t{\n\t\t\t\tRelationship otherRel = rel.agent.relationships.GetRelationship(target);\n\n\t\t\t\tOwner.relationships.SetRel(rel.agent, rel.relType);\n\t\t\t\tOwner.relationships.SetRelHate(rel.agent, 0);\n\t\t\t\tOwner.relationships.GetRelationship(rel.agent).secretHate = rel.secretHate;\n\t\t\t\tOwner.relationships.GetRelationship(rel.agent).mechHate = rel.mechHate;\n\n\t\t\t\trel.agent.relationships.SetRel(Owner, otherRel.relType);\n\t\t\t\trel.agent.relationships.SetRelHate(Owner, 0);\n\t\t\t\trel.agent.relationships.GetRelationship(Owner).secretHate = otherRel.secretHate;\n\t\t\t\trel.agent.relationships.GetRelationship(Owner).mechHate = otherRel.mechHate;\n\t\t\t}\n\t\t\ttarget.relationships.SetRel(Owner, "Hateful");\n\t\t\ttarget.relationships.SetRelHate(Owner, 25);\n\n\t\t\tOwner.agentName = prev;\n\n\t\t\tOwner.gc.audioHandler.Play(Owner, "Spawn");\n\t\t\tOwner.gc.spawnerMain.SpawnParticleEffect("Spawn", Owner.tr.position, 0f);\n\n\t\t\tCount--;\n\t\t\tItem.invInterface.HideTarget();\n\t\t\treturn true;\n\t\t}\n\t\tpublic CustomTooltip TargetCursorText(PlayfieldObject _) => gc.nameDB.GetName("Disguise", "Interface");\n\t}\n}\n'))))}h.isMDXComponent=!0}}]);