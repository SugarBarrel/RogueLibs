"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1690],{4214:function(t,e,n){n.d(e,{Z:function(){return i}});var a=n(7294),r=n(9055);function i(t){var e=t.children,n=t.language;return a.createElement(r.Z,{className:"language-"+(n||"csharp")},e.replace(/\t/g,"    "))}},2725:function(t,e,n){n.d(e,{Z:function(){return r}});var a=n(7294);function r(t){var e=t.color,n=(t.size||14)+"px";return a.createElement("div",{style:{display:"inline"}},a.createElement("div",{style:{display:"inline-block",width:n,height:n,background:e,marginRight:"2px"}}),a.createElement("div",{style:{display:"inline"}},e))}},1016:function(t,e,n){n.d(e,{Z:function(){return o}});var a=n(3117),r=n(102),i=n(7294),l=["children"];function o(t){var e=t.children,n=(0,r.Z)(t,l);return i.createElement("div",(0,a.Z)({role:"tabpanel"},n),e)}},2099:function(t,e,n){n.d(e,{Z:function(){return p}});var a=n(7294),r=n(9443);var i=function(){var t=(0,a.useContext)(r.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},l=n(6010),o="tabItem_2O3c",s="tabItemActive_Fpbe",u="tab_1pgU";var c=37,m=39;function p(t){var e=t.lazy,n=t.defaultValue,r=t.values,p=t.groupId,g=i(),d=g.tabGroupChoices,b=g.setTabGroupChoices,h=(0,a.useState)(n),f=h[0],v=h[1],C=a.Children.toArray(t.children),T=[];if(null!=p){var k=d[p];null!=k&&k!==f&&r.some((function(t){return t.value===k}))&&v(k)}var w=function(t){var e=t.currentTarget,n=T.indexOf(e),a=r[n].value;v(a),null!=p&&(b(p,a),setTimeout((function(){var t,n,a,r,i,l,o,u;(t=e.getBoundingClientRect(),n=t.top,a=t.left,r=t.bottom,i=t.right,l=window,o=l.innerHeight,u=l.innerWidth,n>=0&&i<=u&&r<=o&&a>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(s),setTimeout((function(){return e.classList.remove(s)}),2e3))}),150))},y=function(t){var e;switch(t.keyCode){case m:var n=T.indexOf(t.target)+1;e=T[n]||T[0];break;case c:var a=T.indexOf(t.target)-1;e=T[a]||T[T.length-1];break;default:return}e.focus()},O=function(t,e){return e.value===t||e.values&&-1!=e.values.indexOf(t)};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:"tabs"},r.map((function(t){var e=t.value,n=t.label;return a.createElement("li",{role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":f===e}),key:e,ref:function(t){return t&&T.push(t)},onKeyDown:y,onFocus:w,onClick:w},n)}))),e?a.cloneElement(C.find((function(t){return O(f,t.props)})),{className:u}):a.createElement("div",null,C.map((function(t,e){return a.cloneElement(t,{key:e,hidden:!O(f,t.props),className:u})}))),a.createElement("br",null))}},3605:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return d}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=n(2099),o=n(1016),s=(n(4996),n(2725)),u=n(4214),c=["components"],m={},p="\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b",g={unversionedId:"dev/items/targetable-items",id:"dev/items/targetable-items",title:"\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b",description:"\u0414\u0435\u043b\u0430\u0435\u043c \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u043c\u0438",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/dev/items/targetable-items.mdx",sourceDirName:"dev/items",slug:"/dev/items/targetable-items",permalink:"/RogueLibs/ru/docs/dev/items/targetable-items",editUrl:"https://github.com/Abbysssal/RogueLibs/edit/main/website/docs/dev/items/targetable-items.mdx",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b",permalink:"/RogueLibs/ru/docs/dev/items/combinable-items"},next:{title:"\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b +",permalink:"/RogueLibs/ru/docs/dev/items/targetable-items-plus"}},d=[{value:"\u0414\u0435\u043b\u0430\u0435\u043c \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u043c\u0438",id:"making-targetable",children:[],level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"examples",children:[],level:2}],b={toc:d};function h(t){var e=t.components,n=(0,r.Z)(t,c);return(0,i.kt)("wrapper",(0,a.Z)({},b,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0435-\u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b"},"\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b"),(0,i.kt)("h2",{id:"making-targetable"},"\u0414\u0435\u043b\u0430\u0435\u043c \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u043c\u0438"),(0,i.kt)("p",null,"\u041f\u0440\u043e\u0441\u0442\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0439\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ",(0,i.kt)("inlineCode",{parentName:"p"},"IItemTargetable")," \u0432 \u043a\u043b\u0430\u0441\u0441\u0435 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyTargetableItem.cs"',title:'"MyTargetableItem.cs"'},"// highlight-next-line\npublic class MyTargetableItem : CustomItem, IItemTargetable\n{\n    // highlight-start\n    public bool TargetFilter(PlayfieldObject target) { /* ... */ }\n    public bool TargetObject(PlayfieldObject target) { /* ... */ }\n    public CustomTooltip TargetCursorText(PlayfieldObject target) { /* ... */ }\n    // highlight-end\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TargetFilter")," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u043a\u0430\u043a\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043f\u043e\u0434\u0441\u0432\u0435\u0447\u0435\u043d\u044b, \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TargetObject")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u043f\u0440\u0435\u0434\u043c\u0435\u0442 \u043d\u0430 \u0446\u0435\u043b\u0438. \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043b\u0438 \u043e\u043d \u0431\u044b\u043b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d \u0438\u043b\u0438 \u043d\u0435\u0442. \u0415\u0441\u043b\u0438 \u043f\u0440\u0435\u0434\u043c\u0435\u0442 \u043d\u0435\u043b\u044c\u0437\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0438\u0433\u0440\u0430\u0442\u044c \u0437\u0432\u0443\u043a ",(0,i.kt)("inlineCode",{parentName:"p"},'"CantDo"')," \u0438 \u0437\u0430\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0438\u0433\u0440\u043e\u043a\u0430 \u0441\u043a\u0430\u0437\u0430\u0442\u044c \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c. \u0412\u043e\u0437\u0432\u0440\u0430\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u043e\u0438\u0433\u0440\u0430\u0435\u0442 \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u044e."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TargetCursorText")," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0442\u0435\u043a\u0441\u0442 \u0432\u043e\u0437\u043b\u0435 \u043a\u0443\u0440\u0441\u043e\u0440\u0430 \u043d\u0430\u0434 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c. ",(0,i.kt)("inlineCode",{parentName:"p"},"Text")," \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043d\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),' \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u0441\u044f \u043a\u0430\u043a "\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c", \u0438 ',(0,i.kt)("inlineCode",{parentName:"p"},"Color")," \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043d\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u0441\u044f \u043a\u0430\u043a ",(0,i.kt)(s.Z,{color:"#FFFFFF",mdxType:"ColorSquare"}),"."),(0,i.kt)("h2",{id:"examples"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,i.kt)(l.Z,{defaultValue:"spytron3000",values:[{label:"\u0428\u043f\u0438\u043e\u043d\u043e\u0442\u0440\u043e\u043d 3000",value:"spytron3000"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"spytron3000",mdxType:"TabItem"},(0,i.kt)("p",null,"\u0428\u043f\u0438\u043e\u043d\u043e\u0442\u0440\u043e\u043d 3000 \u0438\u0437 Team Fortress 2. \u041c\u0430\u0441\u043a\u0438\u0440\u0443\u0435\u0442 \u0432\u0430\u0441 \u043f\u043e\u0434 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0430 \u0438 \u043a\u043e\u043f\u0438\u0440\u0443\u0435\u0442 \u0438\u0445 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044f \u0441 \u0434\u0440\u0443\u0433\u0438\u043c\u0438."),(0,i.kt)(u.Z,{mdxType:"CodeSnippet"},'namespace RogueLibsCore.Test\n{\n\t[ItemCategories(RogueCategories.Social, RogueCategories.Stealth,\n\t\tRogueCategories.Technology, RogueCategories.Usable)]\n\tpublic class SPYTRON3000 : CustomItem, IItemTargetable\n\t{\n\t\t[RLSetup]\n\t\tpublic static void Setup()\n\t\t{\n\t\t\tRogueLibs.CreateCustomItem<SPYTRON3000>()\n\t\t\t\t.WithName(new CustomNameInfo("SPYTRON 3000"))\n\t\t\t\t.WithDescription(new CustomNameInfo("Always wanted to be someone else? Now you can!"))\n\t\t\t\t.WithSprite(Properties.Resources.SPYTRON3000)\n\t\t\t\t.WithUnlock(new ItemUnlock\n\t\t\t\t{\n\t\t\t\t\tUnlockCost = 10,\n\t\t\t\t\tLoadoutCost = 2,\n\t\t\t\t\tCharacterCreationCost = 3,\n\t\t\t\t\tPrerequisites = { VanillaItems.BodySwapper },\n\t\t\t\t});\n\n\t\t\tDisguiseCursorText = RogueLibs.CreateCustomName("Disguise", NameTypes.Interface, new CustomNameInfo("Disguise as"));\n\t\t}\n\t\tprivate static CustomName DisguiseCursorText;\n\n\t\tpublic override void SetupDetails()\n\t\t{\n\t\t\tItem.itemType = ItemTypes.Tool;\n\t\t\tItem.itemValue = 40;\n\t\t\tItem.initCount = 2;\n\t\t\tItem.rewardCount = 3;\n\t\t\tItem.stackable = true;\n\t\t\tItem.goesInToolbar = true;\n\t\t}\n\t\tpublic bool TargetFilter(PlayfieldObject target) => target is Agent a && a != Owner;\n\t\tpublic bool TargetObject(PlayfieldObject targetObj)\n\t\t{\n\t\t\tif (!TargetFilter(targetObj)) return false;\n\t\t\tAgent target = (Agent)targetObj;\n\n\t\t\tstring prev = Owner.agentName;\n\t\t\tOwner.agentName = target.agentName;\n\n\t\t\tOwner.relationships.CopyLooks(target);\n\t\t\tforeach (Relationship rel in target.relationships.RelList)\n\t\t\t{\n\t\t\t\tRelationship otherRel = rel.agent.relationships.GetRelationship(target);\n\n\t\t\t\tOwner.relationships.SetRel(rel.agent, rel.relType);\n\t\t\t\tOwner.relationships.SetRelHate(rel.agent, 0);\n\t\t\t\tOwner.relationships.GetRelationship(rel.agent).secretHate = rel.secretHate;\n\t\t\t\tOwner.relationships.GetRelationship(rel.agent).mechHate = rel.mechHate;\n\n\t\t\t\trel.agent.relationships.SetRel(Owner, otherRel.relType);\n\t\t\t\trel.agent.relationships.SetRelHate(Owner, 0);\n\t\t\t\trel.agent.relationships.GetRelationship(Owner).secretHate = otherRel.secretHate;\n\t\t\t\trel.agent.relationships.GetRelationship(Owner).mechHate = otherRel.mechHate;\n\t\t\t}\n\t\t\ttarget.relationships.SetRel(Owner, "Hateful");\n\t\t\ttarget.relationships.SetRelHate(Owner, 25);\n\n\t\t\tOwner.agentName = prev;\n\n\t\t\tOwner.gc.audioHandler.Play(Owner, VanillaAudio.Spawn);\n\t\t\tOwner.gc.spawnerMain.SpawnParticleEffect("Spawn", Owner.tr.position, 0f);\n\n\t\t\tCount--;\n\t\t\tItem.invInterface.HideTarget();\n\t\t\treturn true;\n\t\t}\n\t\tpublic CustomTooltip TargetCursorText(PlayfieldObject _) => DisguiseCursorText;\n\t}\n}\n'))))}h.isMDXComponent=!0}}]);