(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[967],{4214:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});var i=n(7294),a=n(1756);function r(t){var e=t.children,n=t.language;return i.createElement(a.Z,{className:"language-"+(n||"csharp")},e.replace(/\t/g,"    "))}},9309:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var i=n(2122),a=n(9756),r=n(7294),l=["children"];function s(t){var e=t.children,n=(0,a.Z)(t,l);return r.createElement("div",(0,i.Z)({role:"tabpanel"},n),e)}},8952:function(t,e,n){"use strict";n.d(e,{Z:function(){return m}});var i=n(7294),a=n(9443);var r=function(){var t=(0,i.useContext)(a.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},l=n(6010),s="tabItem_2O3c",o="tabItemActive_Fpbe",c="tab_1pgU";var u=37,d=39;var m=function(t){var e=t.lazy,n=t.block,a=t.defaultValue,m=t.values,p=t.groupId,b=t.className,h=r(),g=h.tabGroupChoices,v=h.setTabGroupChoices,f=(0,i.useState)(a),k=f[0],N=f[1],C=i.Children.toArray(t.children),y=[];if(null!=p){var w=g[p];null!=w&&w!==k&&m.some((function(t){return t.value===w}))&&N(w)}var R=function(t){var e=t.currentTarget,n=y.indexOf(e),i=m[n].value;N(i),null!=p&&(v(p,i),setTimeout((function(){var t,n,i,a,r,l,s,c;(t=e.getBoundingClientRect(),n=t.top,i=t.left,a=t.bottom,r=t.right,l=window,s=l.innerHeight,c=l.innerWidth,n>=0&&r<=c&&a<=s&&i>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(o),setTimeout((function(){return e.classList.remove(o)}),2e3))}),150))},x=function(t){var e,n;switch(t.keyCode){case d:var i=y.indexOf(t.target)+1;n=y[i]||y[0];break;case u:var a=y.indexOf(t.target)-1;n=y[a]||y[y.length-1]}null==(e=n)||e.focus()},A=function(t,e){return e.value===t||e.values&&-1!=e.values.indexOf(t)};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},b)},m.map((function(t){var e=t.value,n=t.label;return i.createElement("li",{role:"tab",tabIndex:k===e?0:-1,"aria-selected":k===e,className:(0,l.Z)("tabs__item",s,{"tabs__item--active":k===e}),key:e,ref:function(t){return y.push(t)},onKeyDown:x,onFocus:R,onClick:R},n)}))),e?(0,i.cloneElement)(C.filter((function(t){return A(k,t.props)}))[0],{className:c}):i.createElement("div",null,C.map((function(t,e){return(0,i.cloneElement)(t,{key:e,hidden:!A(k,t.props),className:c})}))),i.createElement("br",null))}},7146:function(t,e,n){"use strict";n.r(e),n.d(e,{contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return p}});var i=n(2122),a=n(9756),r=(n(7294),n(3905)),l=n(8952),s=n(9309),o=(n(4996),n(4214)),c=["components"],u={},d="\u041f\u0435\u0440\u0435\u0437\u0430\u0440\u044f\u0436\u0430\u0435\u043c\u044b\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438",m={unversionedId:"items/abilities/rechargeable-abilities",id:"items/abilities/rechargeable-abilities",isDocsHomePage:!1,title:"\u041f\u0435\u0440\u0435\u0437\u0430\u0440\u044f\u0436\u0430\u0435\u043c\u044b\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438",description:"\u0414\u0435\u043b\u0430\u0435\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u043f\u0435\u0440\u0435\u0437\u0430\u0440\u044f\u0436\u0430\u0435\u043c\u044b\u043c\u0438",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/items/abilities/rechargeable-abilities.mdx",sourceDirName:"items/abilities",slug:"/items/abilities/rechargeable-abilities",permalink:"/RogueLibs/ru/docs/items/abilities/rechargeable-abilities",editUrl:"https://github.com/Abbysssal/RogueLibs/edit/master/website/docs/items/abilities/rechargeable-abilities.mdx",version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"\u0421\u043e\u0437\u0434\u0430\u0451\u043c \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u0443\u044e \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c",permalink:"/RogueLibs/ru/docs/items/abilities/create-ability"},next:{title:"\u0417\u0430\u0440\u044f\u0436\u0430\u0435\u043c\u044b\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438",permalink:"/RogueLibs/ru/docs/items/abilities/chargeable-abilities"}},p=[{value:"\u0414\u0435\u043b\u0430\u0435\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u043f\u0435\u0440\u0435\u0437\u0430\u0440\u044f\u0436\u0430\u0435\u043c\u044b\u043c\u0438",id:"making-rechargeable",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"examples",children:[]}],b={toc:p};function h(t){var e=t.components,n=(0,a.Z)(t,c);return(0,r.kt)("wrapper",(0,i.Z)({},b,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u043f\u0435\u0440\u0435\u0437\u0430\u0440\u044f\u0436\u0430\u0435\u043c\u044b\u0435-\u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438"},"\u041f\u0435\u0440\u0435\u0437\u0430\u0440\u044f\u0436\u0430\u0435\u043c\u044b\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438"),(0,r.kt)("h2",{id:"making-rechargeable"},"\u0414\u0435\u043b\u0430\u0435\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u043f\u0435\u0440\u0435\u0437\u0430\u0440\u044f\u0436\u0430\u0435\u043c\u044b\u043c\u0438"),(0,r.kt)("p",null,"\u041f\u0440\u043e\u0441\u0442\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0439\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ",(0,r.kt)("inlineCode",{parentName:"p"},"IAbilityRechargeable")," \u0432 \u043a\u043b\u0430\u0441\u0441\u0435 \u0432\u0430\u0448\u0435\u0439 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyRechargeableAbility.cs"',title:'"MyRechargeableAbility.cs"'},"// highlight-next-line\npublic class MyRechargeableAbility : CustomAbility, IAbilityRechargeable\n{\n    // highlight-next-line\n    public void OnRecharging(AbilityRechargingArgs e) { /* ... */ }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Count")," \u0442\u0443\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043a\u0430\u043a \u0432\u0440\u0435\u043c\u044f \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0438\u0437 \u0441\u0435\u0431\u044f \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0434\u043e \u043f\u043e\u043b\u043d\u043e\u0439 \u043f\u0435\u0440\u0435\u0437\u0430\u0440\u044f\u0434\u043a\u0438."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u0421\u043e\u0432\u0435\u0442 \u043e\u0442 \u043f\u0440\u043e\u0444\u0438")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0435\u0433\u043e \u043d\u0430 0, \u043a\u043e\u0433\u0434\u0430 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043f\u0435\u0440\u0435\u0437\u0430\u0440\u044f\u0436\u0435\u043d\u0430, \u0438 \u043d\u0430 1, \u043a\u043e\u0433\u0434\u0430 \u043e\u043d\u0430 \u043f\u0435\u0440\u0435\u0437\u0430\u0440\u044f\u0436\u0430\u0435\u0442\u0441\u044f (\u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u043c\u044b\u0439 \u0442\u0435\u043a\u0441\u0442, \u0435\u0441\u043b\u0438 \u0445\u043e\u0442\u0438\u0442\u0435), \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u0432\u043e\u0439 \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c \u043f\u0435\u0440\u0435\u0437\u0430\u0440\u044f\u0434\u043a\u0438. \u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 ",(0,r.kt)("a",{parentName:"p",href:"../recharging-items"},"\u041f\u0435\u0440\u0435\u0437\u0430\u0440\u044f\u0436\u0430\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b"),"."))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"OnRecharging")," \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043a\u0430\u043a ",(0,r.kt)("inlineCode",{parentName:"p"},"Update")," \u0432 Unity, \u043d\u043e \u0441 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u043c \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043e\u043c (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, 1 \u0441\u0435\u043a\u0443\u043d\u0434\u0430):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"    public void OnRecharging(AbilityRechargingArgs e)\n    {\n        // highlight-next-line\n        e.UpdateDelay = 2f; // 1 update every 2 seconds\n        Count--;\n    }\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u041e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0437\u0430 \u0443\u043c\u0435\u043d\u044c\u0448\u0435\u043d\u0438\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"Count")," \u043b\u0435\u0436\u0438\u0442 \u043d\u0430 \u0432\u0430\u0441. \u0422\u0430\u043a \u0447\u0442\u043e, \u043d\u0435 \u0437\u0430\u0431\u044b\u0432\u0430\u0439\u0442\u0435 \u044d\u0442\u043e \u0434\u0435\u043b\u0430\u0442\u044c.",(0,r.kt)("br",{parentName:"p"}),"\n","\u0421\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c \u043f\u0435\u0440\u0435\u0441\u0442\u0430\u043d\u0435\u0442 \u043f\u0435\u0440\u0435\u0437\u0430\u0440\u044f\u0436\u0430\u0442\u044c\u0441\u044f \u043a\u0430\u043a \u0442\u043e\u043b\u044c\u043a\u043e ",(0,r.kt)("inlineCode",{parentName:"p"},"Count")," \u0434\u043e\u0441\u0442\u0438\u0433\u043d\u0435\u0442 0. \u0427\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u0437\u0430\u0440\u044f\u0434\u043a\u0443 \u0437\u0430\u043d\u043e\u0432\u043e, \u0432\u044b\u0441\u0442\u0430\u0432\u044c\u0442\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"Count")," \u043d\u0430 \u043b\u044e\u0431\u043e\u0435 \u0434\u0440\u0443\u0433\u043e\u0435 \u0447\u0438\u0441\u043b\u043e."))),(0,r.kt)("h2",{id:"examples"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,r.kt)(l.Z,{defaultValue:"titan",values:[{label:"Titan",value:"titan"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"titan",mdxType:"TabItem"},(0,r.kt)(o.Z,{mdxType:"CodeSnippet"},'namespace RogueLibsCore.Test\n{\n\tpublic class Titan : CustomAbility, IAbilityRechargeable\n\t{\n\t\t[RLSetup]\n\t\tpublic static void Setup()\n\t\t{\n\t\t\tRogueLibs.CreateCustomAbility<Titan>()\n\t\t\t\t.WithName(new CustomNameInfo("Titan"))\n\t\t\t\t.WithDescription(new CustomNameInfo("Willpower alone isn\'t enough in battle."))\n\t\t\t\t.WithSprite(Properties.Resources.Titan)\n\t\t\t\t.WithUnlock(new AbilityUnlock\n\t\t\t\t{\n\t\t\t\t\tUnlockCost = 10,\n\t\t\t\t\tCharacterCreationCost = 10,\n\t\t\t\t\tPrerequisites = { "Giantizer" },\n\t\t\t\t});\n\t\t}\n\n\t\tpublic override void OnAdded() { }\n\t\tpublic override void OnPressed()\n\t\t{\n\t\t\tif (Count != 0)\n\t\t\t{\n\t\t\t\tgc.audioHandler.Play(Owner, "CantDo");\n\t\t\t\treturn;\n\t\t\t}\n\t\t\tOwner.statusEffects.AddStatusEffect("Giant", 15);\n\t\t\tCount = 30;\n\t\t}\n\t\tpublic void OnRecharging(AbilityRechargingArgs e)\n\t\t{\n\t\t\te.UpdateDelay = 1f;\n\t\t\tCount--;\n\t\t}\n\t}\n}\n'))))}h.isMDXComponent=!0}}]);