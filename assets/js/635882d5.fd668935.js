"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5399],{4214:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),i=a(814);function r(e){let{children:t,language:a}=e;return n.createElement(i.Z,{className:"language-"+(a||"csharp")},t.replace(/\t/g,"    "))}},1016:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7462),i=a(7294);function r(e){let{children:t,...a}=e;return i.createElement("div",(0,n.Z)({role:"tabpanel"},a),t)}},5878:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(7294),i=a(6550),r=a(1980),l=a(7392),s=a(12);function o(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:i}}=e;return{value:t,label:a,attributes:n,default:i}}))}function u(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??o(a);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function g(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function c(e){let{queryString:t=!1,groupId:a}=e;const l=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,r._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(l.location.search);t.set(s,e),l.replace({...l.location,search:t.toString()})}),[s,l])]}function d(e){const{defaultValue:t,queryString:a=!1,groupId:i}=e,r=u(e),[l,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[d,b]=c({queryString:a,groupId:i}),[m,p]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,r]=(0,s.Nk)(a);return[i,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:i}),h=(()=>{const e=d??m;return g({value:e,tabValues:r})?e:null})();(0,n.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!g({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),b(e),p(e)}),[b,p,r]),tabValues:r}}var b=a(6010);const m={tabItem:"tabItem_V91s",tabItemActive:"tabItemActive_JsUu",blink:"blink_ZPVS",tab:"tab_ntnM"};const p={left:37,right:39};function h(e){const{lazy:t,defaultValue:a,values:i,groupId:r}=e,l=n.Children.toArray(e.children),{tabValues:s,selectedValue:o,selectValue:u}=d({children:l,defaultValue:a,values:i,groupId:r}),g=[],c=e=>{const t=e.currentTarget,a=i[g.indexOf(t)].value;u(a),null!=r&&setTimeout((()=>{(function(e){const{top:t,left:a,bottom:n,right:i}=e.getBoundingClientRect(),{innerHeight:r,innerWidth:l}=window;return t>=0&&i<=l&&n<=r&&a>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(m.tabItemActive),setTimeout((()=>t.classList.remove(m.tabItemActive)),2e3))}),150)},h=e=>{let t;switch(e.keyCode){case p.right:{const a=g.indexOf(e.target)+1;t=g[a]||g[0];break}case p.left:{const a=g.indexOf(e.target)-1;t=g[a]||g[g.length-1];break}default:return}t.focus()},f=(e,t)=>t.value===e||t.values&&-1!=t.values.indexOf(e);return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:"tabs"},i.map((e=>{let{value:t,label:a}=e;return n.createElement("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,className:(0,b.Z)("tabs__item",m.tabItem,{"tabs__item--active":o===t}),key:t,ref:e=>e&&g.push(e),onKeyDown:h,onFocus:c,onClick:c},a)}))),t?n.cloneElement(l.find((e=>f(o,e.props))),{className:m.tab}):n.createElement("div",null,l.map(((e,t)=>n.cloneElement(e,{key:t,hidden:!f(o,e.props),className:m.tab})))),n.createElement("br",null))}},1707:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>g,default:()=>h,frontMatter:()=>u,metadata:()=>c,toc:()=>b});var n=a(7462),i=(a(7294),a(3905)),r=a(5878),l=a(1016),s=(a(4996),a(4214));const o='using System.Collections.Generic;\nusing System.Linq;\nusing UnityEngine;\n\nnamespace RogueLibsCore.Test\n{\n    public class Hug : CustomAbility, IAbilityTargetable\n    {\n        [RLSetup]\n        public static void Setup()\n        {\n            RogueLibs.CreateCustomAbility<Hug>()\n                .WithName(new CustomNameInfo("Hug"))\n                .WithDescription(new CustomNameInfo("Sneak up behind people. And HUG THEM!!"))\n                .WithSprite(Properties.Resources.Hug)\n                .WithUnlock(new AbilityUnlock { UnlockCost = 5, CharacterCreationCost = 5 });\n\n            RogueLibs.CreateCustomName("HugNegative1", NameTypes.Dialogue, new CustomNameInfo("Huh? What are you doing?"));\n            RogueLibs.CreateCustomName("HugNegative2", NameTypes.Dialogue, new CustomNameInfo("Excuse me?!"));\n            RogueLibs.CreateCustomName("HugNegative3", NameTypes.Dialogue, new CustomNameInfo("Stop it!"));\n            RogueLibs.CreateCustomName("HugPositive1", NameTypes.Dialogue, new CustomNameInfo("Oh.. Thanks."));\n            RogueLibs.CreateCustomName("HugPositive2", NameTypes.Dialogue, new CustomNameInfo("Um.. Okay.."));\n            RogueLibs.CreateCustomName("HugPositive3", NameTypes.Dialogue, new CustomNameInfo("?.."));\n            RogueLibs.CreateCustomName("HugForgive1", NameTypes.Dialogue, new CustomNameInfo("Oh.. Okay, I forgive you."));\n            RogueLibs.CreateCustomName("HugForgive2", NameTypes.Dialogue, new CustomNameInfo("Alright, I forgive you."));\n            RogueLibs.CreateCustomName("HugForgive3", NameTypes.Dialogue, new CustomNameInfo("Okay... Don\'t worry about that.."));\n        }\n\n        public override void OnAdded() { }\n        public PlayfieldObject? FindTarget()\n        {\n            Agent? closest = null;\n            float distance = float.MaxValue;\n            foreach (Agent agent in Owner!.interactionHelper.TriggerList\n                .Where(static go => go.CompareTag("AgentSprite"))\n                .Select(static go => go.GetComponent<ObjectSprite>().agent))\n            {\n                if (!huggedList.Contains(agent) && !agent.dead && !agent.ghost && !Owner.ghost && !agent.hologram\n                    && agent.go.activeSelf && !agent.mechFilled && !agent.mechEmpty)\n                {\n                    float dist = Vector2.Distance(Owner.curPosition, agent.curPosition);\n                    if (dist < distance)\n                    {\n                        closest = agent;\n                        distance = dist;\n                    }\n                }\n            }\n            return closest;\n        }\n        private readonly List<Agent> huggedList = new List<Agent>();\n        public override void OnPressed()\n        {\n            if (CurrentTarget is null)\n            {\n                gc.audioHandler.Play(Owner, VanillaAudio.CantDo);\n            }\n            else\n            {\n                Agent target = (Agent)CurrentTarget;\n                int rnd = new System.Random().Next(3) + 1;\n\n                relStatus code = target.relationships.GetRelCode(Owner);\n                if (code is relStatus.Friendly or relStatus.Submissive)\n                {\n                    target.SayDialogue("HugPositive" + rnd);\n                    target.relationships.SetRel(Owner, "Loyal");\n                }\n                else if (code == relStatus.Loyal)\n                {\n                    target.SayDialogue("HugPositive" + rnd);\n                    target.relationships.SetRel(Owner, "Aligned");\n                }\n                else if (code == relStatus.Aligned)\n                {\n                    target.SayDialogue("HugPositive" + rnd);\n                }\n                else if (code == relStatus.Neutral)\n                {\n                    target.SayDialogue("HugNegative" + rnd);\n                    target.relationships.SetRel(Owner, "Annoyed");\n                    target.relationships.SetStrikes(Owner, 2);\n                    target.statusEffects.annoyeders.Add(Owner);\n                    gc.audioHandler.Play(target, VanillaAudio.AgentAnnoyed);\n                    return;\n                }\n                else if (code == relStatus.Annoyed)\n                {\n                    target.SayDialogue("HugForgive" + rnd);\n                    target.relationships.SetRel(Owner, "Neutral");\n                }\n                else if (code == relStatus.Hostile)\n                {\n                    return;\n                }\n                target.relationships.SetStrikes(Owner, 0);\n                gc.audioHandler.Play(target, VanillaAudio.AgentOK);\n                huggedList.Add(target);\n            }\n        }\n    }\n}\n',u={},g="Targetable Abilities",c={unversionedId:"dev/items/abilities/targetable-abilities",id:"dev/items/abilities/targetable-abilities",title:"Targetable Abilities",description:"Custom abilities can be made targetable by implementing the IAbilityTargetable interface. You can determine the target of the special ability (for example, the closest agent), and a special ability indicator will be displayed over it. Then you'll be able to access the determined target through the CurrentTarget property.",source:"@site/docs/dev/items/abilities/targetable-abilities.mdx",sourceDirName:"dev/items/abilities",slug:"/dev/items/abilities/targetable-abilities",permalink:"/RogueLibs/docs/dev/items/abilities/targetable-abilities",draft:!1,editUrl:"https://github.com/SugarBarrel/RogueLibs/edit/main/website/docs/dev/items/abilities/targetable-abilities.mdx",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Chargeable Abilities",permalink:"/RogueLibs/docs/dev/items/abilities/chargeable-abilities"},next:{title:"Creating a Custom Trait",permalink:"/RogueLibs/docs/dev/traits/create-trait"}},d={},b=[{value:"Making abilities targetable",id:"making-targetable",level:2},{value:"Examples",id:"examples",level:2}],m={toc:b},p="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"targetable-abilities"},"Targetable Abilities"),(0,i.kt)("p",null,"Custom abilities can be made targetable by implementing the ",(0,i.kt)("inlineCode",{parentName:"p"},"IAbilityTargetable")," interface. You can determine the target of the special ability (for example, the closest agent), and a special ability indicator will be displayed over it. Then you'll be able to access the determined target through the ",(0,i.kt)("inlineCode",{parentName:"p"},"CurrentTarget")," property."),(0,i.kt)("h2",{id:"making-targetable"},"Making abilities targetable"),(0,i.kt)("p",null,"Just implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"IAbilityTargetable")," interface in your ability's class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyTargetableAbility.cs"',title:'"MyTargetableAbility.cs"'},"// highlight-next-line\npublic class MyTargetableAbility : CustomAbility, IAbilityTargetable\n{\n    // highlight-next-line\n    public PlayfieldObject FindTarget() { /* ... */ }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"FindTarget")," determines the closest (or the most compatible/applicable) target, that the ability can be used on right now. If the ability cannot be used right now, you should return ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),". Then, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"CurrentTarget")," in any of the methods:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'    public override void OnPressed()\n    {\n        if (CurrentTarget is null)\n        {\n            gc.audioHandler.Play(Owner, "CantDo");\n            return;\n        }\n        /* ... */\n    }\n')),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)(r.Z,{defaultValue:"hug",values:[{label:"Hug",value:"hug"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"hug",mdxType:"TabItem"},(0,i.kt)(s.Z,{mdxType:"CodeSnippet"},o))))}h.isMDXComponent=!0}}]);