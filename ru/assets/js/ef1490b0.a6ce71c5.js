"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1690],{4214:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r=n(1736);function i(e){var t=e.children,n=e.language;return a.createElement(r.Z,{className:"language-"+(n||"csharp")},t.replace(/\t/g,"    "))}},2725:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.color,n=(e.size||14)+"px";return a.createElement("div",{style:{display:"inline"}},a.createElement("div",{style:{display:"inline-block",width:n,height:n,background:t,marginRight:"2px"}}),a.createElement("div",{style:{display:"inline"}},t))}},1016:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7462),r=n(3366),i=n(7294),l=["children"];function o(e){var t=e.children,n=(0,r.Z)(e,l);return i.createElement("div",(0,a.Z)({role:"tabpanel"},n),t)}},250:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7294),r=n(5773),i=n(6010),l="tabItem_V91s",o="tabItemActive_JsUu",s="tab_ntnM";var u=37,c=39;function m(e){var t=e.lazy,n=e.defaultValue,m=e.values,p=e.groupId,g=(0,r.UB)(),d=g.tabGroupChoices,b=g.setTabGroupChoices,h=(0,a.useState)(n),f=h[0],v=h[1],C=a.Children.toArray(e.children),T=[];if(null!=p){var k=d[p];null!=k&&k!==f&&m.some((function(e){return e.value===k}))&&v(k)}var w=function(e){var t=e.currentTarget,n=T.indexOf(t),a=m[n].value;v(a),null!=p&&(b(p,a),setTimeout((function(){var e,n,a,r,i,l,s,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,l=window,s=l.innerHeight,u=l.innerWidth,n>=0&&i<=u&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},y=function(e){var t;switch(e.keyCode){case c:var n=T.indexOf(e.target)+1;t=T[n]||T[0];break;case u:var a=T.indexOf(e.target)-1;t=T[a]||T[T.length-1];break;default:return}t.focus()},O=function(e,t){return t.value===e||t.values&&-1!=t.values.indexOf(e)};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:"tabs"},m.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":f===t}),key:t,ref:function(e){return e&&T.push(e)},onKeyDown:y,onFocus:w,onClick:w},n)}))),t?a.cloneElement(C.find((function(e){return O(f,e.props)})),{className:s}):a.createElement("div",null,C.map((function(e,t){return a.cloneElement(e,{key:t,hidden:!O(f,e.props),className:s})}))),a.createElement("br",null))}},3605:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=n(250),o=n(1016),s=(n(4996),n(2725)),u=n(4214),c=["components"],m={},p="\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b",g={unversionedId:"dev/items/targetable-items",id:"dev/items/targetable-items",title:"\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b",description:"\u0414\u0435\u043b\u0430\u0435\u043c \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u043c\u0438",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/dev/items/targetable-items.mdx",sourceDirName:"dev/items",slug:"/dev/items/targetable-items",permalink:"/RogueLibs/ru/docs/dev/items/targetable-items",editUrl:"https://github.com/SugarBarrel/RogueLibs/edit/main/website/docs/dev/items/targetable-items.mdx",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b",permalink:"/RogueLibs/ru/docs/dev/items/combinable-items"},next:{title:"\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b +",permalink:"/RogueLibs/ru/docs/dev/items/targetable-items-plus"}},d=[{value:"\u0414\u0435\u043b\u0430\u0435\u043c \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u043c\u0438",id:"making-targetable",children:[],level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"examples",children:[],level:2}],b={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0435-\u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b"},"\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b"),(0,i.kt)("h2",{id:"making-targetable"},"\u0414\u0435\u043b\u0430\u0435\u043c \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u043c\u0438"),(0,i.kt)("p",null,"\u041f\u0440\u043e\u0441\u0442\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0439\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ",(0,i.kt)("inlineCode",{parentName:"p"},"IItemTargetable")," \u0432 \u043a\u043b\u0430\u0441\u0441\u0435 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyTargetableItem.cs"',title:'"MyTargetableItem.cs"'},"// highlight-next-line\npublic class MyTargetableItem : CustomItem, IItemTargetable\n{\n    // highlight-start\n    public bool TargetFilter(PlayfieldObject target) { /* ... */ }\n    public bool TargetObject(PlayfieldObject target) { /* ... */ }\n    public CustomTooltip TargetCursorText(PlayfieldObject target) { /* ... */ }\n    // highlight-end\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TargetFilter")," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u043a\u0430\u043a\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043f\u043e\u0434\u0441\u0432\u0435\u0447\u0435\u043d\u044b, \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TargetObject")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u043f\u0440\u0435\u0434\u043c\u0435\u0442 \u043d\u0430 \u0446\u0435\u043b\u0438. \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043b\u0438 \u043e\u043d \u0431\u044b\u043b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d \u0438\u043b\u0438 \u043d\u0435\u0442. \u0415\u0441\u043b\u0438 \u043f\u0440\u0435\u0434\u043c\u0435\u0442 \u043d\u0435\u043b\u044c\u0437\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0438\u0433\u0440\u0430\u0442\u044c \u0437\u0432\u0443\u043a ",(0,i.kt)("inlineCode",{parentName:"p"},'"CantDo"')," \u0438 \u0437\u0430\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0438\u0433\u0440\u043e\u043a\u0430 \u0441\u043a\u0430\u0437\u0430\u0442\u044c \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c. \u0412\u043e\u0437\u0432\u0440\u0430\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u043e\u0438\u0433\u0440\u0430\u0435\u0442 \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u044e."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TargetCursorText")," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0442\u0435\u043a\u0441\u0442 \u0432\u043e\u0437\u043b\u0435 \u043a\u0443\u0440\u0441\u043e\u0440\u0430 \u043d\u0430\u0434 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c. ",(0,i.kt)("inlineCode",{parentName:"p"},"Text")," \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043d\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),' \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u0441\u044f \u043a\u0430\u043a "\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c", \u0438 ',(0,i.kt)("inlineCode",{parentName:"p"},"Color")," \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043d\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u0441\u044f \u043a\u0430\u043a ",(0,i.kt)(s.Z,{color:"#FFFFFF",mdxType:"ColorSquare"}),"."),(0,i.kt)("h2",{id:"examples"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,i.kt)(l.Z,{defaultValue:"spytron3000",values:[{label:"\u0428\u043f\u0438\u043e\u043d\u043e\u0442\u0440\u043e\u043d 3000",value:"spytron3000"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"spytron3000",mdxType:"TabItem"},(0,i.kt)("p",null,"\u0428\u043f\u0438\u043e\u043d\u043e\u0442\u0440\u043e\u043d 3000 \u0438\u0437 Team Fortress 2. \u041c\u0430\u0441\u043a\u0438\u0440\u0443\u0435\u0442 \u0432\u0430\u0441 \u043f\u043e\u0434 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0430 \u0438 \u043a\u043e\u043f\u0438\u0440\u0443\u0435\u0442 \u0438\u0445 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044f \u0441 \u0434\u0440\u0443\u0433\u0438\u043c\u0438."),(0,i.kt)(u.Z,{mdxType:"CodeSnippet"},'namespace RogueLibsCore.Test\n{\n    [ItemCategories(RogueCategories.Social, RogueCategories.Stealth,\n        RogueCategories.Technology, RogueCategories.Usable)]\n    public class SPYTRON3000 : CustomItem, IItemTargetable\n    {\n        [RLSetup]\n        public static void Setup()\n        {\n            RogueLibs.CreateCustomItem<SPYTRON3000>()\n                .WithName(new CustomNameInfo("SPYTRON 3000"))\n                .WithDescription(new CustomNameInfo("Always wanted to be someone else? Now you can!"))\n                .WithSprite(Properties.Resources.SPYTRON3000)\n                .WithUnlock(new ItemUnlock\n                {\n                    UnlockCost = 10,\n                    LoadoutCost = 2,\n                    CharacterCreationCost = 3,\n                    Prerequisites = { VanillaItems.BodySwapper },\n                });\n\n            DisguiseCursorText = RogueLibs.CreateCustomName("Disguise", NameTypes.Interface, new CustomNameInfo("Disguise as"));\n        }\n        private static CustomName DisguiseCursorText = null!;\n\n        public override void SetupDetails()\n        {\n            Item.itemType = ItemTypes.Tool;\n            Item.itemValue = 40;\n            Item.initCount = 2;\n            Item.rewardCount = 3;\n            Item.stackable = true;\n            Item.goesInToolbar = true;\n        }\n        public bool TargetFilter(PlayfieldObject target) => target is Agent a && a != Owner;\n        public bool TargetObject(PlayfieldObject targetObj)\n        {\n            if (!TargetFilter(targetObj)) return false;\n            Agent target = (Agent)targetObj;\n\n            string prev = Owner.agentName;\n            Owner.agentName = target.agentName;\n\n            Owner.relationships.CopyLooks(target);\n            foreach (Relationship rel in target.relationships.RelList)\n            {\n                Relationship otherRel = rel.agent.relationships.GetRelationship(target);\n\n                Owner.relationships.SetRel(rel.agent, rel.relType);\n                Owner.relationships.SetRelHate(rel.agent, 0);\n                Owner.relationships.GetRelationship(rel.agent).secretHate = rel.secretHate;\n                Owner.relationships.GetRelationship(rel.agent).mechHate = rel.mechHate;\n\n                rel.agent.relationships.SetRel(Owner, otherRel.relType);\n                rel.agent.relationships.SetRelHate(Owner, 0);\n                rel.agent.relationships.GetRelationship(Owner).secretHate = otherRel.secretHate;\n                rel.agent.relationships.GetRelationship(Owner).mechHate = otherRel.mechHate;\n            }\n            target.relationships.SetRel(Owner, "Hateful");\n            target.relationships.SetRelHate(Owner, 25);\n\n            Owner.agentName = prev;\n\n            Owner.gc.audioHandler.Play(Owner, VanillaAudio.Spawn);\n            Owner.gc.spawnerMain.SpawnParticleEffect("Spawn", Owner.tr.position, 0f);\n\n            Count--;\n            Item.invInterface.HideTarget();\n            return true;\n        }\n        public CustomTooltip TargetCursorText(PlayfieldObject _) => DisguiseCursorText;\n    }\n}\n'))))}h.isMDXComponent=!0}}]);