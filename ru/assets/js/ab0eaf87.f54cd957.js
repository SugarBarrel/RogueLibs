(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[739],{4214:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});var i=n(7294),a=n(1756);function r(t){var e=t.children,n=t.language;return i.createElement(a.Z,{className:"language-"+(n||"csharp")},e.replace(/\t/g,"    "))}},9309:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var i=n(2122),a=n(9756),r=n(7294),l=["children"];function o(t){var e=t.children,n=(0,a.Z)(t,l);return r.createElement("div",(0,i.Z)({role:"tabpanel"},n),e)}},8952:function(t,e,n){"use strict";n.d(e,{Z:function(){return m}});var i=n(7294),a=n(9443);var r=function(){var t=(0,i.useContext)(a.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},l=n(6010),o="tabItem_2O3c",s="tabItemActive_Fpbe",u="tab_1pgU";var c=37,d=39;var m=function(t){var e=t.lazy,n=t.block,a=t.defaultValue,m=t.values,p=t.groupId,g=t.className,b=r(),h=b.tabGroupChoices,f=b.setTabGroupChoices,v=(0,i.useState)(a),C=v[0],k=v[1],w=i.Children.toArray(t.children),y=[];if(null!=p){var N=h[p];null!=N&&N!==C&&m.some((function(t){return t.value===N}))&&k(N)}var x=function(t){var e=t.currentTarget,n=y.indexOf(e),i=m[n].value;k(i),null!=p&&(f(p,i),setTimeout((function(){var t,n,i,a,r,l,o,u;(t=e.getBoundingClientRect(),n=t.top,i=t.left,a=t.bottom,r=t.right,l=window,o=l.innerHeight,u=l.innerWidth,n>=0&&r<=u&&a<=o&&i>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(s),setTimeout((function(){return e.classList.remove(s)}),2e3))}),150))},A=function(t){var e,n;switch(t.keyCode){case d:var i=y.indexOf(t.target)+1;n=y[i]||y[0];break;case c:var a=y.indexOf(t.target)-1;n=y[a]||y[y.length-1]}null==(e=n)||e.focus()},O=function(t,e){return e.value===t||e.values&&-1!=e.values.indexOf(t)};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},g)},m.map((function(t){var e=t.value,n=t.label;return i.createElement("li",{role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":C===e}),key:e,ref:function(t){return y.push(t)},onKeyDown:A,onFocus:x,onClick:x},n)}))),e?(0,i.cloneElement)(w.filter((function(t){return O(C,t.props)}))[0],{className:u}):i.createElement("div",null,w.map((function(t,e){return(0,i.cloneElement)(t,{key:e,hidden:!O(C,t.props),className:u})}))),i.createElement("br",null))}},6011:function(t,e,n){"use strict";n.r(e),n.d(e,{contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return p}});var i=n(2122),a=n(9756),r=(n(7294),n(3905)),l=n(8952),o=n(9309),s=(n(4996),n(4214)),u=["components"],c={},d="\u0417\u0430\u0440\u044f\u0436\u0430\u0435\u043c\u044b\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438",m={unversionedId:"items/chargeable-abilities",id:"items/chargeable-abilities",isDocsHomePage:!1,title:"\u0417\u0430\u0440\u044f\u0436\u0430\u0435\u043c\u044b\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438",description:"\u0414\u0435\u043b\u0430\u0435\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u0437\u0430\u0440\u044f\u0436\u0430\u0435\u043c\u044b\u043c\u0438",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/items/chargeable-abilities.mdx",sourceDirName:"items",slug:"/items/chargeable-abilities",permalink:"/RogueLibs/ru/docs/items/chargeable-abilities",editUrl:"https://github.com/Abbysssal/RogueLibs/edit/master/website/docs/items/chargeable-abilities.mdx",version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"\u041f\u0435\u0440\u0435\u0437\u0430\u0440\u044f\u0436\u0430\u0435\u043c\u044b\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438",permalink:"/RogueLibs/ru/docs/items/rechargeable-abilities"},next:{title:"\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438",permalink:"/RogueLibs/ru/docs/items/targetable-abilities"}},p=[{value:"\u0414\u0435\u043b\u0430\u0435\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u0437\u0430\u0440\u044f\u0436\u0430\u0435\u043c\u044b\u043c\u0438",id:"making-chargeable",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"examples",children:[]}],g={toc:p};function b(t){var e=t.components,n=(0,a.Z)(t,u);return(0,r.kt)("wrapper",(0,i.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u0437\u0430\u0440\u044f\u0436\u0430\u0435\u043c\u044b\u0435-\u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438"},"\u0417\u0430\u0440\u044f\u0436\u0430\u0435\u043c\u044b\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438"),(0,r.kt)("h2",{id:"making-chargeable"},"\u0414\u0435\u043b\u0430\u0435\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u0437\u0430\u0440\u044f\u0436\u0430\u0435\u043c\u044b\u043c\u0438"),(0,r.kt)("p",null,"\u041f\u0440\u043e\u0441\u0442\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0439\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ",(0,r.kt)("inlineCode",{parentName:"p"},"IAbilityChargeable")," \u0432 \u043a\u043b\u0430\u0441\u0441\u0435 \u0432\u0430\u0448\u0435\u0439 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyChargeableAbility.cs"',title:'"MyChargeableAbility.cs"'},"// highlight-next-line\npublic class MyChargeableAbility : CustomAbility, IAbilityChargeable\n{\n    // highlight-start\n    public void OnHeld(AbilityHeldArgs e) { /* ... */ }\n    public void OnReleased(AbilityReleasedArgs e) { /* ... */ }\n    // highlight-end\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"OnHeld")," \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u0436\u0434\u044b\u0439 \u043a\u0430\u0434\u0440 ",(0,r.kt)("em",{parentName:"p"},"(\u0432\u0440\u043e\u0434\u0435 \u043a\u0430\u043a?)")," \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043a\u043d\u043e\u043f\u043a\u0430 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f. ",(0,r.kt)("inlineCode",{parentName:"p"},"OnReleased")," \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0430 \u043a\u0430\u0434\u0440\u0435, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043a\u043d\u043e\u043f\u043a\u0430 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u043e\u0442\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0441\u044f. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0438\u0445 \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 ",(0,r.kt)("inlineCode",{parentName:"p"},"OnPressed")," \u0434\u043b\u044f \u0437\u0430\u0440\u044f\u0434\u043a\u0438 \u0432\u0430\u0448\u0435\u0439 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u0438 \u0432\u0441\u044f\u043a\u043e\u0435 \u0442\u0430\u043a\u043e\u0435."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u041c\u0435\u0442\u043e\u0434 ",(0,r.kt)("inlineCode",{parentName:"p"},"AbilityHeldArgs.Interrupt()")," \u0435\u0449\u0451 \u0432 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f."))),(0,r.kt)("h2",{id:"examples"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,r.kt)(l.Z,{defaultValue:"kamikaze",values:[{label:"Kamikaze",value:"kamikaze"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kamikaze",mdxType:"TabItem"},(0,r.kt)(s.Z,{mdxType:"CodeSnippet"},'using UnityEngine;\n\nnamespace RogueLibsCore.Test\n{\n\tpublic class Kamikaze : CustomAbility, IAbilityChargeable, IDoUpdate\n\t{\n\t\t[RLSetup]\n\t\tpublic static void Setup()\n\t\t{\n\t\t\tRogueLibs.CreateCustomAbility<Kamikaze>()\n\t\t\t\t.WithName(new CustomNameInfo("Kamikaze"))\n\t\t\t\t.WithDescription(new CustomNameInfo("Charge up and explode everything around you."))\n\t\t\t\t.WithSprite(Properties.Resources.Kamikaze)\n\t\t\t\t.WithUnlock(new AbilityUnlock { UnlockCost = 20, CharacterCreationCost = 20 });\n\t\t}\n\n\t\tpublic float Charge { get; private set; }\n\t\tpublic bool IsCharging { get; private set; }\n\n\t\tpublic override void OnAdded() { }\n\t\tpublic override void OnPressed()\n\t\t{\n\t\t\tIsCharging = true;\n\t\t\tgc.audioHandler.Play(Owner, "GeneratorHiss");\n\t\t\tOwner.objectMult.chargingSpecialLunge = true;\n\t\t}\n\t\tpublic override CustomTooltip GetCountString()\n\t\t{\n\t\t\tif (Charge is 0) return default;\n\t\t\tstring text = $"{Charge:#.#}s";\n\t\t\tColor color = Color.Lerp(Color.white, Color.red, Charge / 10f);\n\t\t\tif (Charge > 10f)\n\t\t\t{\n\t\t\t\ttext = "BOOM!";\n\t\t\t\tcolor = Color.Lerp(Color.white, Color.red, Mathf.PingPong(Time.time * 5, 1f));\n\t\t\t}\n\t\t\treturn new CustomTooltip(text, color);\n\t\t}\n\t\tpublic void OnHeld(AbilityHeldArgs e)\n\t\t{\n\t\t\tCharge += Time.deltaTime;\n\t\t\te.HeldTime = Charge;\n\t\t\tif (Charge > 10f)\n\t\t\t{\n\t\t\t\tOwner.objectMult.chargingSpecialLunge = true;\n\t\t\t}\n\t\t}\n\t\tpublic void OnReleased(AbilityReleasedArgs e)\n\t\t{\n\t\t\tIsCharging = false;\n\t\t\tOwner.objectMult.chargingSpecialLunge = false;\n\t\t\tif (e.HeldTime > 10f)\n\t\t\t{\n\t\t\t\tOwner.AddEffect("Resurrection", new CreateEffectInfo(1) { DontShowText = true, IgnoreElectronic = true });\n\t\t\t\tgc.spawnerMain.SpawnExplosion(Owner, Owner.tr.position, "Huge", false, -1, false, true).noOwnCheck = true;\n\t\t\t\tCharge = 0f;\n\t\t\t}\n\t\t\tgc.audioHandler.Stop(Owner, "GeneratorHiss");\n\t\t}\n\t\tpublic void Update()\n\t\t{\n\t\t\tif (!IsCharging) Charge = Mathf.Max(Charge - Time.deltaTime * 5f, 0f);\n\t\t}\n\t}\n}\n'))))}b.isMDXComponent=!0}}]);