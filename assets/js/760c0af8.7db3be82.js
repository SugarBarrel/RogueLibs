"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7863],{4214:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(814);function i(e){let{children:t,language:a}=e;return n.createElement(r.Z,{className:"language-"+(a||"csharp")},t.replace(/\t/g,"    "))}},1016:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7462),r=a(7294);function i(e){let{children:t,...a}=e;return r.createElement("div",(0,n.Z)({role:"tabpanel"},a),t)}},5878:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7294),r=a(6550),i=a(1980),o=a(7392),s=a(12);function l(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??l(a);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const o=(0,r.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(o.location.search);t.set(s,e),o.replace({...o.location,search:t.toString()})}),[s,o])]}function d(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,i=u(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[d,m]=f({queryString:a,groupId:r}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,s.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:r}),v=(()=>{const e=d??p;return c({value:e,tabValues:i})?e:null})();(0,n.useLayoutEffect)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),m(e),h(e)}),[m,h,i]),tabValues:i}}var m=a(6010);const p={tabItem:"tabItem_V91s",tabItemActive:"tabItemActive_JsUu",blink:"blink_ZPVS",tab:"tab_ntnM"};const h={left:37,right:39};function v(e){const{lazy:t,defaultValue:a,values:r,groupId:i}=e,o=n.Children.toArray(e.children),{tabValues:s,selectedValue:l,selectValue:u}=d({children:o,defaultValue:a,values:r,groupId:i}),c=[],f=e=>{const t=e.currentTarget,a=r[c.indexOf(t)].value;u(a),null!=i&&setTimeout((()=>{(function(e){const{top:t,left:a,bottom:n,right:r}=e.getBoundingClientRect(),{innerHeight:i,innerWidth:o}=window;return t>=0&&r<=o&&n<=i&&a>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p.tabItemActive),setTimeout((()=>t.classList.remove(p.tabItemActive)),2e3))}),150)},v=e=>{let t;switch(e.keyCode){case h.right:{const a=c.indexOf(e.target)+1;t=c[a]||c[0];break}case h.left:{const a=c.indexOf(e.target)-1;t=c[a]||c[c.length-1];break}default:return}t.focus()},b=(e,t)=>t.value===e||t.values&&-1!=t.values.indexOf(e);return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:"tabs"},r.map((e=>{let{value:t,label:a}=e;return n.createElement("li",{role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,className:(0,m.Z)("tabs__item",p.tabItem,{"tabs__item--active":l===t}),key:t,ref:e=>e&&c.push(e),onKeyDown:v,onFocus:f,onClick:f},a)}))),t?n.cloneElement(o.find((e=>b(l,e.props))),{className:p.tab}):n.createElement("div",null,o.map(((e,t)=>n.cloneElement(e,{key:t,hidden:!b(l,e.props),className:p.tab})))),n.createElement("br",null))}},5600:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>v,frontMatter:()=>u,metadata:()=>f,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),i=a(5878),o=a(1016),s=(a(4996),a(4214));const l='namespace RogueLibsCore.Test\n{\n    [EffectParameters(EffectLimitations.RemoveOnDeath | EffectLimitations.RemoveOnKnockOut)]\n    public class Adrenaline : CustomEffect\n    {\n        [RLSetup]\n        public static void Setup()\n        {\n            RogueLibs.CreateCustomEffect<Adrenaline>()\n                 .WithName(new CustomNameInfo("Adrenaline"))\n                 .WithDescription(new CustomNameInfo("Gives you a ton of boosts for a short period of time."));\n        }\n\n        public override int GetEffectTime() => 15;\n        public override int GetEffectHate() => 0;\n        public override void OnAdded()\n        {\n            Owner.ChangeHealth(20);\n            Owner.SetStrength(Owner.strengthStatMod + 2);\n            Owner.SetEndurance(Owner.enduranceStatMod + 2);\n            Owner.SetAccuracy(Owner.accuracyStatMod - 1);\n            Owner.SetSpeed(Owner.speedStatMod + 2);\n            Owner.critChance += 30;\n        }\n        public override void OnRemoved()\n        {\n            Owner.SetStrength(Owner.strengthStatMod - 2);\n            Owner.SetEndurance(Owner.enduranceStatMod - 2);\n            Owner.SetAccuracy(Owner.accuracyStatMod + 1);\n            Owner.SetSpeed(Owner.speedStatMod - 2);\n            Owner.critChance -= 30;\n        }\n        public override void OnUpdated(EffectUpdatedArgs e)\n        {\n            e.UpdateDelay = 1f;\n            CurrentTime--;\n        }\n    }\n}\n',u={},c="Creating a Custom Effect",f={unversionedId:"dev/traits/create-effect",id:"dev/traits/create-effect",title:"Creating a Custom Effect",description:"RogueLibs provides classes and methods to create custom effects, and an interface to make status effects updateable. Just like items and traits, custom effects derive from a hook class, CustomEffect. If you want the effect to have some kind of a passive effect, then you might need to patch that in yourself.",source:"@site/docs/dev/traits/create-effect.mdx",sourceDirName:"dev/traits",slug:"/dev/traits/create-effect",permalink:"/RogueLibs/docs/dev/traits/create-effect",draft:!1,editUrl:"https://github.com/SugarBarrel/RogueLibs/edit/main/website/docs/dev/traits/create-effect.mdx",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Creating a Custom Trait",permalink:"/RogueLibs/docs/dev/traits/create-trait"},next:{title:"Creating a Custom Interaction",permalink:"/RogueLibs/docs/dev/interactions/create-interaction"}},d={},m=[{value:"<code>CustomEffect</code> class",id:"customeffect",level:2},{value:"Initialization",id:"initialization",level:2},{value:"Examples",id:"examples",level:2}],p={toc:m},h="wrapper";function v(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-a-custom-effect"},"Creating a Custom Effect"),(0,r.kt)("p",null,"RogueLibs provides classes and methods to create custom effects, and an interface to make status effects updateable. Just like items and traits, custom effects derive from a hook class, ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomEffect"),". If you want the effect to have some kind of a passive effect, then you might need to patch that in yourself."),(0,r.kt)("h2",{id:"customeffect"},(0,r.kt)("inlineCode",{parentName:"h2"},"CustomEffect")," class"),(0,r.kt)("p",null,"To make a custom effect, you need to create a class deriving from ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomEffect"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomEffect.cs"',title:'"MyCustomEffect.cs"'},"// highlight-next-line\npublic class MyCustomEffect : CustomEffect\n{\n    /* ... */\n}\n")),(0,r.kt)("p",null,"There are 5 methods that you need to implement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomEffect.cs"',title:'"MyCustomEffect.cs"'},"public class MyCustomEffect : CustomEffect\n{\n    // highlight-start\n    public override int GetEffectTime() { /* ... */ }\n    public override int GetEffectHate() { /* ... */ }\n    public override void OnAdded() { /* ... */ }\n    public override void OnRemoved() { /* ... */ }\n    public override void OnUpdated(EffectUpdatedArgs e) { /* ... */ }\n    // highlight-end\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GetEffectTime"),' determines the default status effect time. Traits like "Longer Status Effects", "Longer Status Effects +" and "Shorter Status Effects" are applied after calling this method.'),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GetEffectHate")," determines how much hate other characters will get towards the character who inflicted the status effect on them. Usually, it's 5 for negative effects and 0 for positive effects."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"GetEffectTime")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"GetEffectHate")," are called on partially initialized hooks, so the effect's owner might not actually have the effect. Do not initialize any effect-specific variables in these methods.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"OnAdded")," is called when the effect is added to a character, and ",(0,r.kt)("inlineCode",{parentName:"p"},"OnRemoved")," is called when it's removed from a character."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"OnUpdated")," works like Unity's ",(0,r.kt)("inlineCode",{parentName:"p"},"Update"),", but with a settable interval (default is 1 second):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"    public override void OnUpdated(EffectUpdatedArgs e)\n    {\n        // highlight-next-line\n        e.UpdateDelay = 0.5f; // 2 updates per second\n        /* ... */\n        // highlight-next-line\n        CurrentTime--;\n    }\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You're responsible for decrementing the effect's ",(0,r.kt)("inlineCode",{parentName:"p"},"CurrentTime"),". So, don't forget to do that.")),(0,r.kt)("p",null,"All custom effect classes should have an ",(0,r.kt)("inlineCode",{parentName:"p"},"EffectParameters")," attribute. You can specify whether your effect should be removed on death, on knockout or between levels. Default is ",(0,r.kt)("inlineCode",{parentName:"p"},"RemoveOnDeath"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"[EffectParameters(EffectLimitations.RemoveOnDeath | EffectLimitations.RemoveOnKnockOut)]\npublic class MyCustomEffect : CustomEffect\n{\n    /* ... */\n}\n")),(0,r.kt)("h2",{id:"initialization"},"Initialization"),(0,r.kt)("p",null,"Just call the ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateCustomEffect")," method with your effect's type as a parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomEffect.cs"',title:'"MyCustomEffect.cs"'},"public class MyCustomEffect : CustomEffect\n{\n    [RLSetup]\n    public static void Setup()\n    {\n        // highlight-next-line\n        RogueLibs.CreateCustomEffect<MyCustomEffect>();\n    }\n}\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"See more about the ",(0,r.kt)("inlineCode",{parentName:"p"},"RLSetup")," attribute ",(0,r.kt)("a",{parentName:"p",href:"../patching-utilities#rlsetup"},"here"),".")),(0,r.kt)("p",null,"You can set your effect's name and description using ",(0,r.kt)("inlineCode",{parentName:"p"},"WithName")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"WithDescription")," methods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomEffect.cs"',title:'"MyCustomEffect.cs"'},'public class MyCustomEffect : CustomEffect\n{\n    [RLSetup]\n    public static void Setup()\n    {\n        RogueLibs.CreateCustomEffect<MyCustomEffect>()\n            // highlight-start\n            .WithName(new CustomNameInfo("My Custom Effect"))\n            .WithDescription(new CustomNameInfo("My Custom Effect is very cool and does a lot of great stuff"));\n            // highlight-end\n    }\n}\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"../names/custom-names"},"Custom Names")," for more info.")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)(i.Z,{defaultValue:"adrenaline",values:[{label:"Adrenaline",value:"adrenaline"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"adrenaline",mdxType:"TabItem"},(0,r.kt)("p",null,"A simple effect that just gives a temporary boost to some stats. You can see Adrenaline Shot's (item that gives this effect) implementation in ",(0,r.kt)("a",{parentName:"p",href:"../items/usable-items#examples"},"Usable Items: Examples"),"."),(0,r.kt)(s.Z,{mdxType:"CodeSnippet"},l))))}v.isMDXComponent=!0}}]);