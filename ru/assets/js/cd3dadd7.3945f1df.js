"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6950],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,b=p["".concat(u,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(b,l(l({ref:t},c),{},{components:n})):a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1016:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7462),r=n(7294);function i(e){let{children:t,...n}=e;return r.createElement("div",(0,a.Z)({role:"tabpanel"},n),t)}},5878:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(7294),r=n(6550),i=n(1980),l=n(7392),o=n(12);function u(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function s(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const l=(0,r.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(l.location.search);t.set(o,e),l.replace({...l.location,search:t.toString()})}),[o,l])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=s(e),[l,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[m,d]=p({queryString:n,groupId:r}),[b,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,o.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),k=(()=>{const e=m??b;return c({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{k&&u(k)}),[k]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!c({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),y(e)}),[d,y,i]),tabValues:i}}var d=n(6010);const b={tabItem:"tabItem_V91s",tabItemActive:"tabItemActive_JsUu",blink:"blink_ZPVS",tab:"tab_ntnM"};const y={left:37,right:39};function k(e){const{lazy:t,defaultValue:n,values:r,groupId:i}=e,l=a.Children.toArray(e.children),{tabValues:o,selectedValue:u,selectValue:s}=m({children:l,defaultValue:n,values:r,groupId:i}),c=[],p=e=>{const t=e.currentTarget,n=r[c.indexOf(t)].value;s(n),null!=i&&setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:r}=e.getBoundingClientRect(),{innerHeight:i,innerWidth:l}=window;return t>=0&&r<=l&&a<=i&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(b.tabItemActive),setTimeout((()=>t.classList.remove(b.tabItemActive)),2e3))}),150)},k=e=>{let t;switch(e.keyCode){case y.right:{const n=c.indexOf(e.target)+1;t=c[n]||c[0];break}case y.left:{const n=c.indexOf(e.target)-1;t=c[n]||c[c.length-1];break}default:return}t.focus()},h=(e,t)=>t.value===e||t.values&&-1!=t.values.indexOf(e);return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:"tabs"},r.map((e=>{let{value:t,label:n}=e;return a.createElement("li",{role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,className:(0,d.Z)("tabs__item",b.tabItem,{"tabs__item--active":u===t}),key:t,ref:e=>e&&c.push(e),onKeyDown:k,onFocus:p,onClick:p},n)}))),t?a.cloneElement(l.find((e=>h(u,e.props))),{className:b.tab}):a.createElement("div",null,l.map(((e,t)=>a.cloneElement(e,{key:t,hidden:!h(u,e.props),className:b.tab})))),a.createElement("br",null))}},7222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),i=n(5878),l=n(1016);n(4996);const o={},u="\u0421\u043e\u0437\u0434\u0430\u0451\u043c \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u0443\u044e \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c",s={unversionedId:"dev/items/abilities/create-ability",id:"dev/items/abilities/create-ability",title:"\u0421\u043e\u0437\u0434\u0430\u0451\u043c \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u0443\u044e \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c",description:"\u041a\u043b\u0430\u0441\u0441 CustomAbility",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/dev/items/abilities/create-ability.mdx",sourceDirName:"dev/items/abilities",slug:"/dev/items/abilities/create-ability",permalink:"/RogueLibs/ru/docs/dev/items/abilities/create-ability",draft:!1,editUrl:"https://github.com/SugarBarrel/RogueLibs/edit/main/website/docs/dev/items/abilities/create-ability.mdx",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"\u0418\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u043d\u044b\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438",permalink:"/RogueLibs/ru/docs/dev/items/inventory-checks"},next:{title:"\u041f\u0435\u0440\u0435\u0437\u0430\u0440\u044f\u0436\u0430\u0435\u043c\u044b\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438",permalink:"/RogueLibs/ru/docs/dev/items/abilities/rechargeable-abilities"}},c={},p=[{value:"\u041a\u043b\u0430\u0441\u0441 <code>CustomAbility</code>",id:"customability",level:2},{value:"<code>SetupDetails</code>",id:"setupdetails",level:3},{value:"\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f",id:"initialization",level:2},{value:"\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0440\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043e\u043a",id:"unlock-properties",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"examples",level:2}],m={toc:p},d="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u0441\u043e\u0437\u0434\u0430\u0451\u043c-\u043a\u0430\u0441\u0442\u043e\u043c\u043d\u0443\u044e-\u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c"},"\u0421\u043e\u0437\u0434\u0430\u0451\u043c \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u0443\u044e \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c"),(0,r.kt)("h2",{id:"customability"},"\u041a\u043b\u0430\u0441\u0441 ",(0,r.kt)("inlineCode",{parentName:"h2"},"CustomAbility")),(0,r.kt)("p",null,"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u043d\u0430 \u0441\u0430\u043c\u043e\u043c \u0434\u0435\u043b\u0435 \u043e\u0447\u0435\u043d\u044c \u043f\u043e\u0445\u043e\u0436\u0438 \u043d\u0430 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b. \u0423 \u043d\u0438\u0445 \u0435\u0441\u0442\u044c ",(0,r.kt)("inlineCode",{parentName:"p"},"SetupDetails"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Count")," \u0438 \u043e\u043d\u0438 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442 \u0432 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0435 \u0441\u0432\u043e\u0435\u0433\u043e \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430, \u0442\u0430\u043a \u0436\u0435 \u043a\u0430\u043a \u0438 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b. \u0427\u0442\u043e\u0431\u044b \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u0443\u044e \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c, \u0432\u0430\u043c \u043d\u0430\u0434\u043e \u043f\u0440\u043e\u0441\u0442\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u043b\u0430\u0441\u0441 \u043d\u0430\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u043e\u0442 ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomAbility")," (\u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0430\u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043e\u0442 ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomItem"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomAbility.cs"',title:'"MyCustomAbility.cs"'},"// highlight-next-line\npublic class MyCustomAbility : CustomAbility\n{\n    /* ... */\n}\n")),(0,r.kt)("p",null,"\u0412\u0430\u043c \u043d\u0430\u0434\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c 2 \u043c\u0435\u0442\u043e\u0434\u0430: ",(0,r.kt)("inlineCode",{parentName:"p"},"OnAdded")," \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u043e\u0433\u0434\u0430 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u044d\u0442\u0443 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c, \u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"OnPressed")," \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u043e\u0433\u0434\u0430 \u0438\u0433\u0440\u043e\u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c. \u0422\u0443\u0442 \u043d\u0435\u0442\u0443 ",(0,r.kt)("inlineCode",{parentName:"p"},"OnRemoved")," \u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442, \u0442\u0430\u043a \u043a\u0430\u043a \u044d\u0442\u043e \u043d\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043e \u0432 \u0421\u043e\u0420\u0435."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomAbility.cs"',title:'"MyCustomAbility.cs"'},"public class MyCustomAbility : CustomAbility\n{\n    // highlight-start\n    public override void OnAdded() { /* ... */ }\n    public override void OnPressed() { /* ... */ }\n    // highlight-end\n}\n")),(0,r.kt)("h3",{id:"setupdetails"},(0,r.kt)("inlineCode",{parentName:"h3"},"SetupDetails")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SetupDetails")," \u043f\u0435\u0440\u0435\u0433\u0440\u0443\u0436\u0435\u043d ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomAbility")," \u0438 \u0432\u043e\u0442 \u0435\u0433\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"    public override void SetupDetails()\n    {\n        Item.stackable = true;\n        Item.initCount = 0;\n        Item.lowCountThreshold = 100;\n    }\n")),(0,r.kt)("p",null,"\u042d\u0442\u043e\u0442 \u043c\u0435\u0442\u043e\u0434 \u0434\u043e\u043b\u0436\u0435\u043d \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0434\u043b\u044f \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u0430 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0435\u0439, \u043d\u043e \u0435\u0441\u043b\u0438 \u0432\u0430\u043c \u043d\u0430\u0434\u043e \u0447\u0442\u043e-\u0442\u043e \u0431\u043e\u043b\u0435\u0435 \u0441\u043b\u043e\u0436\u043d\u043e\u0435, \u0442\u043e \u043f\u0435\u0440\u0435\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0435\u0433\u043e \u0441\u0430\u043c\u0438."),(0,r.kt)("h2",{id:"initialization"},"\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f"),(0,r.kt)("p",null,"\u041f\u0440\u043e\u0441\u0442\u043e \u0432\u044b\u0437\u043e\u0432\u0438\u0442\u0435 \u043c\u0435\u0442\u043e\u0434 ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateCustomAbility")," \u0441 \u0442\u0438\u043f\u043e\u043c \u0432\u0430\u0448\u0435\u0439 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomAbility.cs"',title:'"MyCustomAbility.cs"'},"public class MyCustomAbility : CustomAbility\n{\n    [RLSetup]\n    public static void Setup()\n    {\n        // highlight-next-line\n        RogueLibs.CreateCustomAbility<MyCustomAbility>();\n    }\n}\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e\u0431 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"RLSetup")," ",(0,r.kt)("a",{parentName:"p",href:"../../patching-utilities#rlsetup"},"\u0437\u0434\u0435\u0441\u044c"),".")),(0,r.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0438 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0441\u0432\u043e\u0435\u0439 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043c\u0435\u0442\u043e\u0434\u043e\u0432 ",(0,r.kt)("inlineCode",{parentName:"p"},"WithName")," \u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"WithDescription"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomAbility.cs"',title:'"MyCustomAbility.cs"'},'public class MyCustomAbility : CustomAbility\n{\n    [RLSetup]\n    public static void Setup()\n    {\n        RogueLibs.CreateCustomAbility<MyCustomAbility>();\n            // highlight-start\n            .WithName(new CustomNameInfo("My Custom Ability"))\n            .WithDescription(new CustomNameInfo("My Custom Ability is very cool and does a lot of great stuff"));\n            // highlight-end\n    }\n}\n')),(0,r.kt)("p",null,"\u0422\u043e \u0436\u0435 \u0441\u0430\u043c\u043e\u0435 \u043c\u043e\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0438 \u0441\u043e \u0441\u043f\u0440\u0430\u0439\u0442\u0430\u043c\u0438 \u0438 \u0440\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0430\u043c\u0438:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCustomAbility.cs"',title:'"MyCustomAbility.cs"'},'public class MyCustomAbility : CustomAbility\n{\n    [RLSetup]\n    public static void Setup()\n    {\n        RogueLibs.CreateCustomAbility<MyCustomAbility>();\n            .WithName(new CustomNameInfo("My Custom Ability"))\n            .WithDescription(new CustomNameInfo("My Custom Ability is very cool and does a lot of great stuff"));\n            // highlight-start\n            .WithSprite(Properties.Resources.MyCustomAbility)\n            .WithUnlock(new AbilityUnlock { UnlockCost = 10, CharacterCreationCost = 5 });\n            // highlight-end\n    }\n}\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 ",(0,r.kt)("a",{parentName:"p",href:"../../names/custom-names"},"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0435 \u0438\u043c\u0435\u043d\u0430"),", ",(0,r.kt)("a",{parentName:"p",href:"../../custom-sprites"},"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0435 \u0441\u043f\u0440\u0430\u0439\u0442\u044b"),".")),(0,r.kt)("h2",{id:"unlock-properties"},"\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0440\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043e\u043a"),(0,r.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043f\u0440\u0438 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"AbilityUnlock"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u043e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UnlockCost")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0440\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438, \u0432 \u043d\u0430\u0433\u0433\u0435\u0442\u0441\u0430\u0445. \u0415\u0441\u043b\u0438 \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e \u043d\u0430 0, \u0440\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438, \u043a\u0430\u043a \u0442\u043e\u043b\u044c\u043a\u043e \u0432\u0441\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f \u043e\u0442\u043a\u0440\u044b\u0442\u044b.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CharacterCreationCost")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u0432 \u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u0435 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0435\u0439, \u0432 \u043e\u0447\u043a\u0430\u0445.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IsAvailable")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442, \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c \u0432 ... \u041d\u0443, \u0432 \u0438\u0433\u0440\u0435 \u043d\u0435\u0442\u0443 \u043c\u0435\u043d\u044e \u0434\u043b\u044f \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0445 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0435\u0439 \u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442, \u043d\u043e \u0435\u0441\u043b\u0438 \u0431\u044b \u0431\u044b\u043b\u043e, \u0442\u043e \u044d\u0442\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u043b\u043e \u0431\u044b, \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u043b\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c \u0442\u0430\u043c \u0438\u043b\u0438 \u043d\u0435\u0442.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IsAvailableInCC")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442, \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u043b\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c \u0432 \u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u0435 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0435\u0439.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Prerequisites")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u043a\u0430\u043a\u0438\u0435 \u0440\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0440\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u044b, \u0447\u0442\u043e\u0431\u044b \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u044d\u0442\u0443 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Recommendations")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u041f\u0440\u043e\u0441\u0442\u043e \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u044d\u0442\u0438 \u0440\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0438 \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438 \u0432 \u043c\u0435\u043d\u044e.")))),(0,r.kt)("p",null,"\u0414\u0440\u0443\u0433\u0438\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 ",(0,r.kt)("strong",{parentName:"p"},"\u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438."),(0,r.kt)("h2",{id:"examples"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,r.kt)(i.Z,{defaultValue:"",values:[{label:"",value:""}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title=""',title:'""'},"")))))}b.isMDXComponent=!0}}]);