"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8279],{4214:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(614);function l(e){let{children:t,language:a}=e;return n.createElement(r.Z,{className:"language-"+(a||"csharp")},t.replace(/\t/g,"    "))}},2725:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294);function r(e){let{color:t,size:a}=e,r=(a||14)+"px";return n.createElement("div",{style:{display:"inline"}},n.createElement("div",{style:{display:"inline-block",width:r,height:r,background:t,marginRight:"2px"}}),n.createElement("div",{style:{display:"inline"}},t))}},1016:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7462),r=a(7294);function l(e){let{children:t,...a}=e;return r.createElement("div",(0,n.Z)({role:"tabpanel"},a),t)}},5878:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(7294),r=a(6550),l=a(1980),i=a(7392),s=a(12);function o(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??o(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const i=(0,r.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function p(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=u(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[p,d]=m({queryString:a,groupId:r}),[g,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,s.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),b=(()=>{const e=p??g;return c({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),h(e)}),[d,h,l]),tabValues:l}}var d=a(6010);const g={tabItem:"tabItem_V91s",tabItemActive:"tabItemActive_JsUu",blink:"blink_ZPVS",tab:"tab_ntnM"};const h={left:37,right:39};function b(e){const{lazy:t,defaultValue:a,values:r,groupId:l}=e,i=n.Children.toArray(e.children),{tabValues:s,selectedValue:o,selectValue:u}=p({children:i,defaultValue:a,values:r,groupId:l}),c=[],m=e=>{const t=e.currentTarget,a=r[c.indexOf(t)].value;u(a),null!=l&&setTimeout((()=>{(function(e){const{top:t,left:a,bottom:n,right:r}=e.getBoundingClientRect(),{innerHeight:l,innerWidth:i}=window;return t>=0&&r<=i&&n<=l&&a>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(g.tabItemActive),setTimeout((()=>t.classList.remove(g.tabItemActive)),2e3))}),150)},b=e=>{let t;switch(e.keyCode){case h.right:{const a=c.indexOf(e.target)+1;t=c[a]||c[0];break}case h.left:{const a=c.indexOf(e.target)-1;t=c[a]||c[c.length-1];break}default:return}t.focus()},f=(e,t)=>t.value===e||t.values&&-1!=t.values.indexOf(e);return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:"tabs"},r.map((e=>{let{value:t,label:a}=e;return n.createElement("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,className:(0,d.Z)("tabs__item",g.tabItem,{"tabs__item--active":o===t}),key:t,ref:e=>e&&c.push(e),onKeyDown:b,onFocus:m,onClick:m},a)}))),t?n.cloneElement(i.find((e=>f(o,e.props))),{className:g.tab}):n.createElement("div",null,i.map(((e,t)=>n.cloneElement(e,{key:t,hidden:!f(o,e.props),className:g.tab})))),n.createElement("br",null))}},2596:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>g});var n=a(7462),r=(a(7294),a(3905)),l=a(5878),i=a(1016),s=(a(4996),a(2725)),o=a(4214);const u='namespace RogueLibsCore.Test\n{\n    [ItemCategories(RogueCategories.Social, RogueCategories.Stealth,\n        RogueCategories.Technology, RogueCategories.Usable)]\n    public class SPYTRON3000 : CustomItem, IItemTargetable\n    {\n        [RLSetup]\n        public static void Setup()\n        {\n            RogueLibs.CreateCustomItem<SPYTRON3000>()\n                .WithName(new CustomNameInfo("SPYTRON 3000"))\n                .WithDescription(new CustomNameInfo("Always wanted to be someone else? Now you can!"))\n                .WithSprite(Properties.Resources.SPYTRON3000)\n                .WithUnlock(new ItemUnlock\n                {\n                    UnlockCost = 10,\n                    LoadoutCost = 2,\n                    CharacterCreationCost = 3,\n                    Prerequisites = { VanillaItems.BodySwapper },\n                });\n\n            DisguiseCursorText = RogueLibs.CreateCustomName("Disguise", NameTypes.Interface, new CustomNameInfo("Disguise as"));\n        }\n        private static CustomName DisguiseCursorText = null!;\n\n        public override void SetupDetails()\n        {\n            Item.itemType = ItemTypes.Tool;\n            Item.itemValue = 40;\n            Item.initCount = 2;\n            Item.rewardCount = 3;\n            Item.stackable = true;\n            Item.goesInToolbar = true;\n        }\n        public bool TargetFilter(PlayfieldObject target) => target is Agent a && a != Owner;\n        public bool TargetObject(PlayfieldObject targetObj)\n        {\n            if (!TargetFilter(targetObj)) return false;\n            Agent target = (Agent)targetObj;\n\n            string prev = Owner!.agentName;\n            Owner.agentName = target.agentName;\n\n            Owner.relationships.CopyLooks(target);\n            foreach (Relationship rel in target.relationships.RelList)\n            {\n                Relationship otherRel = rel.agent.relationships.GetRelationship(target);\n\n                Owner.relationships.SetRel(rel.agent, rel.relType);\n                Owner.relationships.SetRelHate(rel.agent, 0);\n                Owner.relationships.GetRelationship(rel.agent).secretHate = rel.secretHate;\n                Owner.relationships.GetRelationship(rel.agent).mechHate = rel.mechHate;\n\n                rel.agent.relationships.SetRel(Owner, otherRel.relType);\n                rel.agent.relationships.SetRelHate(Owner, 0);\n                rel.agent.relationships.GetRelationship(Owner).secretHate = otherRel.secretHate;\n                rel.agent.relationships.GetRelationship(Owner).mechHate = otherRel.mechHate;\n            }\n            target.relationships.SetRel(Owner, "Hateful");\n            target.relationships.SetRelHate(Owner, 25);\n\n            Owner.agentName = prev;\n\n            Owner.gc.audioHandler.Play(Owner, VanillaAudio.Spawn);\n            Owner.gc.spawnerMain.SpawnParticleEffect("Spawn", Owner.tr.position, 0f);\n\n            Count--;\n            Item.invInterface.HideTarget();\n            return true;\n        }\n        public CustomTooltip TargetCursorText(PlayfieldObject? _) => DisguiseCursorText;\n    }\n}\n',c={},m="Targetable Items",p={unversionedId:"dev/items/targetable-items",id:"dev/items/targetable-items",title:"Targetable Items",description:"Custom items can be made targetable by implementing the IItemTargetable interface. You can define what kind of objects, agents, items on the ground, projectiles or whatever, your item is compatible with, what happens when you use the item on that thing, and what text to display under the mouse cursor when hovering over something.",source:"@site/docs/dev/items/targetable-items.mdx",sourceDirName:"dev/items",slug:"/dev/items/targetable-items",permalink:"/RogueLibs/docs/dev/items/targetable-items",draft:!1,editUrl:"https://github.com/SugarBarrel/RogueLibs/edit/main/website/docs/dev/items/targetable-items.mdx",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Combinable Items",permalink:"/RogueLibs/docs/dev/items/combinable-items"},next:{title:"Targetable Items +",permalink:"/RogueLibs/docs/dev/items/targetable-items-plus"}},d={},g=[{value:"Making items targetable",id:"making-targetable",level:2},{value:"Examples",id:"examples",level:2}],h={toc:g},b="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(b,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"targetable-items"},"Targetable Items"),(0,r.kt)("p",null,"Custom items can be made targetable by implementing the ",(0,r.kt)("inlineCode",{parentName:"p"},"IItemTargetable")," interface. You can define what kind of objects, agents, items on the ground, projectiles or whatever, your item is compatible with, what happens when you use the item on that thing, and what text to display under the mouse cursor when hovering over something."),(0,r.kt)("h2",{id:"making-targetable"},"Making items targetable"),(0,r.kt)("p",null,"Just implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"IItemTargetable")," interface in your item's class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyTargetableItem.cs"',title:'"MyTargetableItem.cs"'},"// highlight-next-line\npublic class MyTargetableItem : CustomItem, IItemTargetable\n{\n    // highlight-start\n    public bool TargetFilter(PlayfieldObject target) { /* ... */ }\n    public bool TargetObject(PlayfieldObject target) { /* ... */ }\n    public CustomTooltip TargetCursorText(PlayfieldObject target) { /* ... */ }\n    // highlight-end\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TargetFilter")," determines what objects will be highlighted, when using the current item."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TargetObject")," uses the current item on the target. The return value indicates whether it was a success or not. You can play a ",(0,r.kt)("inlineCode",{parentName:"p"},'"CantDo"')," sound and make the player say something, if the item cannot be used. Returning ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," will also play an animation."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TargetCursorText")," determines the text under the cursor when hovering over the specified object. ",(0,r.kt)("inlineCode",{parentName:"p"},"Text")," set to ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),' will default to "Use", and ',(0,r.kt)("inlineCode",{parentName:"p"},"Color")," set to ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," will default to ",(0,r.kt)(s.Z,{color:"#FFFFFF",mdxType:"ColorSquare"}),"."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)(l.Z,{defaultValue:"spytron3000",values:[{label:"SPYTRON 3000",value:"spytron3000"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"spytron3000",mdxType:"TabItem"},(0,r.kt)("p",null,"SPYTRON 3000 from Team Fortress 2. Makes you look like the selected person and copies their relationships."),(0,r.kt)(o.Z,{mdxType:"CodeSnippet"},u))))}f.isMDXComponent=!0}}]);