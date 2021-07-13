(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[726],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),g=a,f=p["".concat(s,".").concat(g)]||p[g]||m[g]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(2263),a=n(3919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,l=void 0!==o&&o,s=i.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(l)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+c:c}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},9309:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(2122),a=n(9756),i=n(7294),o=["children"];function l(e){var t=e.children,n=(0,a.Z)(e,o);return i.createElement("div",(0,r.Z)({role:"tabpanel"},n),t)}},8952:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(7294),a=n(9443);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(6010),l="tabItem_2O3c",s="tabItemActive_Fpbe",u="tab_1pgU";var c=37,m=39;var p=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,p=e.values,g=e.groupId,f=e.className,b=i(),d=b.tabGroupChoices,h=b.setTabGroupChoices,v=(0,r.useState)(a),y=v[0],O=v[1],w=r.Children.toArray(e.children),T=[];if(null!=g){var C=d[g];null!=C&&C!==y&&p.some((function(e){return e.value===C}))&&O(C)}var k=function(e){var t=e.currentTarget,n=T.indexOf(t),r=p[n].value;O(r),null!=g&&(h(g,r),setTimeout((function(){var e,n,r,a,i,o,l,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,l=o.innerHeight,u=o.innerWidth,n>=0&&i<=u&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},I=function(e){var t,n;switch(e.keyCode){case m:var r=T.indexOf(e.target)+1;n=T[r]||T[0];break;case c:var a=T.indexOf(e.target)-1;n=T[a]||T[T.length-1]}null==(t=n)||t.focus()},R=function(e,t){return t.value===e||t.values&&-1!=t.values.indexOf(e)};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},f)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":y===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:I,onFocus:k,onClick:k},n)}))),t?(0,r.cloneElement)(w.filter((function(e){return R(y,e.props)}))[0],{curSelected:y,className:u}):r.createElement("div",null,w.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:!R(y,e.props),selectedValue:y,className:u})}))),r.createElement("br",null))}},2766:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return p},default:function(){return f}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=n(8952),l=n(9309),s=(n(4996),["components"]),u={},c="Targetable Items",m={unversionedId:"items/targetable-items",id:"items/targetable-items",isDocsHomePage:!1,title:"Targetable Items",description:"Making items targetable",source:"@site/docs/items/targetable-items.mdx",sourceDirName:"items",slug:"/items/targetable-items",permalink:"/RogueLibs/ru/docs/items/targetable-items",editUrl:"https://github.com/Abbysssal/RogueLibs/edit/master/docs/docs/items/targetable-items.mdx",version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Combinable Items",permalink:"/RogueLibs/ru/docs/items/combinable-items"},next:{title:"Targetable Items +",permalink:"/RogueLibs/ru/docs/items/targetable-items-plus"}},p=[{value:"Making items targetable",id:"making-targetable",children:[]},{value:"Examples",id:"examples",children:[]}],g={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"targetable-items"},"Targetable Items"),(0,i.kt)("h2",{id:"making-targetable"},"Making items targetable"),(0,i.kt)("p",null,"Just implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"IItemTargetable")," interface in your item's class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyTargetableItem.cs"',title:'"MyTargetableItem.cs"'},"// highlight-next-line\npublic class MyTargetableItem : CustomItem, IItemTargetable\n{\n    // highlight-start\n    public bool TargetFilter(PlayfieldObject target) { /* ... */ }\n    public bool TargetObject(PlayfieldObject target) { /* ... */ }\n    public CustomTooltip TargetCursorText(PlayfieldObject target) { /* ... */ }\n    // highlight-end\n}\n")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)(o.Z,{defaultValue:"spytron3000",values:[{label:"SPYTRON 3000",value:"spytron3000"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"spytron3000",mdxType:"TabItem"},(0,i.kt)("p",null,"SPYTRON 3000 from Team Fortress 2. Makes you look like the selected person and copies their relationships."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="SPYTRON3000.cs"',title:'"SPYTRON3000.cs"'},'[ItemCategories(RogueCategories.Social, RogueCategories.Stealth,\n    RogueCategories.Technology, RogueCategories.Usable)]\npublic class SPYTRON3000 : CustomItem, IItemTargetable\n{\n    public override void SetupDetails()\n    {\n        Item.itemType = ItemTypes.Tool;\n        Item.itemValue = 40;\n        Item.initCount = 2;\n        Item.rewardCount = 3;\n        Item.stackable = true;\n        Item.goesInToolbar = true;\n    }\n    public bool TargetFilter(PlayfieldObject target) => target is Agent a && a != Owner;\n    public bool TargetObject(PlayfieldObject targetObj)\n    {\n        if (!TargetFilter(targetObj)) return false;\n\n        Agent target = (Agent)obj;\n        \n        string prev = Owner.agentName;\n        Owner.agentName = target.agentName;\n\n        Owner.relationships.CopyLooks(target);\n\n        Owner.gc.audioHandler.Play(Owner, "Spawn");\n        Owner.gc.spawnerMain.SpawnParticleEffect("Spawn", Owner.tr.position, 0f);\n\n        foreach (Relationship rel in target.relationships.RelList)\n        {\n            Relationship otherRel = rel.agent.relationships.GetRelationship(target);\n\n            Owner.relationships.SetRel(rel.agent, rel.relType);\n            Owner.relationships.SetRelHate(rel.agent, 0);\n            Owner.relationships.GetRelationship(rel.agent).secretHate = rel.secretHate;\n            Owner.relationships.GetRelationship(rel.agent).mechHate = rel.mechHate;\n\n            rel.agent.relationships.SetRel(Owner, otherRel.relType);\n            rel.agent.relationships.SetRelHate(Owner, 0);\n            rel.agent.relationships.GetRelationship(Owner).secretHate = otherRel.secretHate;\n            rel.agent.relationships.GetRelationship(Owner).mechHate = otherRel.mechHate;\n        }\n\n        target.relationships.SetRel(Owner, "Hateful");\n        target.relationships.SetRelHate(Owner, 25);\n        Owner.agentName = prev;\n\n        Count--;\n        Item.invInterface.HideTarget();\n    }\n    public CustomTooltip TargetCursorText(PlayfieldObject _) => gc.nameDB.GetName("Disguise", "Interface");\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'RogueLibs.CreateCustomItem<SPYTRON3000>()\n    .WithName(new CustomNameInfo("SPYTRON 3000"))\n    .WithDescription(new CustomNameInfo("Always wanted to be someone else? Now you can!"))\n    .WithSprite(Properties.Resources.SPYTRON3000)\n    .WithUnlock(new ItemUnlock { UnlockCost = 10, CharacterCreationCost = 3, LoadoutCost = 2 });\n\nRogueLibs.CreateCustomName("Disguise", "Interface", new CustomNameInfo("Disguise as"));\n')))))}f.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);