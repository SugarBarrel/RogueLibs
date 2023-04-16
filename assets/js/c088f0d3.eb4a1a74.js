"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6750],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,f=c["".concat(i,".").concat(d)]||c[d]||p[d]||o;return n?a.createElement(f,s(s({ref:t},m),{},{components:n})):a.createElement(f,s({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1016:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7462),r=n(7294);function o(e){let{children:t,...n}=e;return r.createElement("div",(0,a.Z)({role:"tabpanel"},n),t)}},5878:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7294),r=n(6550),o=n(1980),s=n(7392),l=n(12);function i(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??i(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function c(e){let{queryString:t=!1,groupId:n}=e;const s=(0,r.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(s.location.search);t.set(l,e),s.replace({...s.location,search:t.toString()})}),[l,s])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=u(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[p,d]=c({queryString:n,groupId:r}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,l.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),h=(()=>{const e=p??f;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,o]),tabValues:o}}var d=n(6010);const f={tabItem:"tabItem_V91s",tabItemActive:"tabItemActive_JsUu",blink:"blink_ZPVS",tab:"tab_ntnM"};const g={left:37,right:39};function h(e){const{lazy:t,defaultValue:n,values:r,groupId:o}=e,s=a.Children.toArray(e.children),{tabValues:l,selectedValue:i,selectValue:u}=p({children:s,defaultValue:n,values:r,groupId:o}),m=[],c=e=>{const t=e.currentTarget,n=r[m.indexOf(t)].value;u(n),null!=o&&setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:r}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:s}=window;return t>=0&&r<=s&&a<=o&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(f.tabItemActive),setTimeout((()=>t.classList.remove(f.tabItemActive)),2e3))}),150)},h=e=>{let t;switch(e.keyCode){case g.right:{const n=m.indexOf(e.target)+1;t=m[n]||m[0];break}case g.left:{const n=m.indexOf(e.target)-1;t=m[n]||m[m.length-1];break}default:return}t.focus()},b=(e,t)=>t.value===e||t.values&&-1!=t.values.indexOf(e);return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:"tabs"},r.map((e=>{let{value:t,label:n}=e;return a.createElement("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,className:(0,d.Z)("tabs__item",f.tabItem,{"tabs__item--active":i===t}),key:t,ref:e=>e&&m.push(e),onKeyDown:h,onFocus:c,onClick:c},n)}))),t?a.cloneElement(s.find((e=>b(i,e.props))),{className:f.tab}):a.createElement("div",null,s.map(((e,t)=>a.cloneElement(e,{key:t,hidden:!b(i,e.props),className:f.tab})))),a.createElement("br",null))}},6903:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),o=n(5878),s=n(1016);n(4996);const l={},i="Custom Names",u={unversionedId:"dev/names/custom-names",id:"dev/names/custom-names",title:"Custom Names",description:"Custom localization in RogueLibs is implemented using instances of the CustomName class, which contain all languages' translations at the same time (which isn't really efficient, but whatever). You can integrate your custom names into the game using the RogueLibs.CreateCustomName(...) method.",source:"@site/docs/dev/names/custom-names.mdx",sourceDirName:"dev/names",slug:"/dev/names/custom-names",permalink:"/RogueLibs/docs/dev/names/custom-names",draft:!1,editUrl:"https://github.com/SugarBarrel/RogueLibs/edit/main/website/docs/dev/names/custom-names.mdx",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Configuring Unlocks",permalink:"/RogueLibs/docs/dev/unlocks/configuring-unlocks"},next:{title:"Custom Languages*",permalink:"/RogueLibs/docs/dev/names/custom-languages"}},m={},c=[{value:"<code>CustomNameInfo</code> structure",id:"customnameinfo",level:2},{value:"<code>CustomName</code> class",id:"customname",level:2},{value:"Usage",id:"usage",level:2}],p={toc:c},d="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"custom-names"},"Custom Names"),(0,r.kt)("p",null,"Custom localization in RogueLibs is implemented using instances of the ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomName")," class, which contain all languages' translations at the same time (which isn't really efficient, but whatever). You can integrate your custom names into the game using the ",(0,r.kt)("inlineCode",{parentName:"p"},"RogueLibs.CreateCustomName(...)")," method."),(0,r.kt)("h2",{id:"customnameinfo"},(0,r.kt)("inlineCode",{parentName:"h2"},"CustomNameInfo")," structure"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CustomNameInfo")," structure is used to create custom names and transfer localization data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'CustomNameInfo emptyInfo = new CustomNameInfo();\nCustomNameInfo nameInfo = new CustomNameInfo("english text");\n')),(0,r.kt)("p",null,"You can add more translations to the custom names too:"),(0,r.kt)(o.Z,{defaultValue:"indexer",values:[{label:"Indexer properties",value:"indexer"},{label:"Named properties",value:"named"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"indexer",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'nameInfo = new CustomNameInfo\n{\n    [LanguageCode.French] = "texte fran\xe7ais",\n    [LanguageCode.Spanish] = "texto en espa\xf1ol",\n};\n// or\nnameInfo[LanguageCode.French] = "texte fran\xe7ais";\nnameInfo[LanguageCode.Spanish] = "texto en espa\xf1ol";\n')),(0,r.kt)("p",null,"You can also use your own language codes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'nameInfo[(LanguageCode)123] = "\u65e5\u672c\u8a9e\u30c6\u30ad\u30b9\u30c8";\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See more info in ",(0,r.kt)("a",{parentName:"p",href:"./custom-languages"},"Custom Languages"),"."))),(0,r.kt)(s.Z,{value:"named",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'nameInfo = new CustomNameInfo\n{\n    French = "texte fran\xe7ais",\n    Spanish = "texto en espa\xf1ol",\n};\n// or\nnameInfo.French = "texte fran\xe7ais";\nnameInfo.Spanish = "texto en espa\xf1ol";\n')))),(0,r.kt)("p",null,"Unlike dictionaries, both ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomName")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomNameInfo")," return ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", if they don't contain the specified ",(0,r.kt)("inlineCode",{parentName:"p"},"LanguageCode"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"string translation = nameInfo[(LanguageCode)123];\n// returns null, if that language is not specified\nstring display = translation ?? nameInfo.English;\n")),(0,r.kt)("h2",{id:"customname"},(0,r.kt)("inlineCode",{parentName:"h2"},"CustomName")," class"),(0,r.kt)("p",null,"Usually, ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomName"),"s are created automatically, when you add names and descriptions to your items, traits, abilities and etc.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'RogueLibs.CreateCustomItem<MyCustomItem>()\n    .WithName(new CustomNameInfo("English name")\n    {\n        French = "nom fran\xe7ais",\n        Spanish = "nombre espa\xf1ol",\n    })\n    .WithDescription(new CustomNameInfo("English description")\n    {\n        French = "description fran\xe7aise",\n        Spanish = "descripci\xf3n en espa\xf1ol",\n    });\n')),(0,r.kt)("p",null,"You can initialize them yourself too, although you have to provide the name and type of the ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomName")," yourself:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'CustomName name = RogueLibs.CreateCustomName("Name", "Type", new CustomNameInfo("Info"));\n')),(0,r.kt)("p",null,"If you're going to use the second method, here's the list of types used in the game:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Item")," - item and special ability names;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Description")," - item, special ability, trait, status effect and agent descriptions;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"StatusEffect")," - trait and status effect names;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Interface")," - interface buttons, labels and stuff;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Unlock")," - mutator and Big Quest names and descriptions;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Object")," - object and chunk type names;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Agent")," - agent names;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Dialogue")," - agent dialogue lines;")),(0,r.kt)("admonition",{title:"Pro-tip: Name type const strings",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use string consts in the ",(0,r.kt)("inlineCode",{parentName:"p"},"NameTypes")," static class to avoid typos.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"If you want to use your custom names in the game, use ",(0,r.kt)("inlineCode",{parentName:"p"},"NameDB.GetName()")," or any other methods that use it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'string dialogue = gc.nameDB.GetName("CryForHelp", NameTypes.Dialogue);\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'Owner.SayDialogue("CryForHelp");\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CustomName"),"s and ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomNameInfo"),"s also can be implicitly converted into ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomTooltip"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Recycler : CustomItem, IItemCombinable\n{\n    [RLSetup]\n    public static void Setup()\n    {\n        recycleTooltip = RogueLibs.CreateCustomName("Recycle", NameTypes.Interface, new CustomNameInfo\n        {\n            English = "Recycle",\n            Russian = "\u041f\u0435\u0440\u0435\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c",\n        });\n    }\n    private static CustomName recycleTooltip;\n\n    /* ... */\n    public CustomTooltip CombineTooltip(InvItem _) => recycleTooltip;\n}\n')))}f.isMDXComponent=!0}}]);