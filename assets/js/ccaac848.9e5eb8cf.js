"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8320],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),p=a,f=d["".concat(u,".").concat(p)]||d[p]||m[p]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1016:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7462),a=r(7294);function o(e){let{children:t,...r}=e;return a.createElement("div",(0,n.Z)({role:"tabpanel"},r),t)}},5878:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(7294),a=r(6550),o=r(1980),i=r(7392),l=r(12);function u(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function s(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function c(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:r}=e;const i=(0,a.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(i.location.search);t.set(l,e),i.replace({...i.location,search:t.toString()})}),[l,i])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=s(e),[i,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[m,p]=d({queryString:r,groupId:a}),[f,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,l.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),g=(()=>{const e=m??f;return c({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{g&&u(g)}),[g]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),p(e),v(e)}),[p,v,o]),tabValues:o}}var p=r(6010);const f={tabItem:"tabItem_V91s",tabItemActive:"tabItemActive_JsUu",blink:"blink_ZPVS",tab:"tab_ntnM"};const v={left:37,right:39};function g(e){const{lazy:t,defaultValue:r,values:a,groupId:o}=e,i=n.Children.toArray(e.children),{tabValues:l,selectedValue:u,selectValue:s}=m({children:i,defaultValue:r,values:a,groupId:o}),c=[],d=e=>{const t=e.currentTarget,r=a[c.indexOf(t)].value;s(r),null!=o&&setTimeout((()=>{(function(e){const{top:t,left:r,bottom:n,right:a}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:i}=window;return t>=0&&a<=i&&n<=o&&r>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(f.tabItemActive),setTimeout((()=>t.classList.remove(f.tabItemActive)),2e3))}),150)},g=e=>{let t;switch(e.keyCode){case v.right:{const r=c.indexOf(e.target)+1;t=c[r]||c[0];break}case v.left:{const r=c.indexOf(e.target)-1;t=c[r]||c[c.length-1];break}default:return}t.focus()},b=(e,t)=>t.value===e||t.values&&-1!=t.values.indexOf(e);return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:"tabs"},a.map((e=>{let{value:t,label:r}=e;return n.createElement("li",{role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,className:(0,p.Z)("tabs__item",f.tabItem,{"tabs__item--active":u===t}),key:t,ref:e=>e&&c.push(e),onKeyDown:g,onFocus:d,onClick:d},r)}))),t?n.cloneElement(i.find((e=>b(u,e.props))),{className:f.tab}):n.createElement("div",null,i.map(((e,t)=>n.cloneElement(e,{key:t,hidden:!b(u,e.props),className:f.tab})))),n.createElement("br",null))}},8019:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));r(5878),r(1016),r(4996);const o={},i="Custom Name Providers",l={unversionedId:"dev/names/name-providers",id:"dev/names/name-providers",title:"Custom Name Providers",description:"If you have some kind of a complicated localization logic, then you might want to create your own INameProvider. This way you can control what strings are returned by NameDB.GetName in a more generic way. You can even hook up your localization provider, if you don't like the localization system provided by RogueLibs.",source:"@site/docs/dev/names/name-providers.mdx",sourceDirName:"dev/names",slug:"/dev/names/name-providers",permalink:"/RogueLibs/docs/dev/names/name-providers",draft:!1,editUrl:"https://github.com/SugarBarrel/RogueLibs/edit/main/website/docs/dev/names/name-providers.mdx",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Custom Languages*",permalink:"/RogueLibs/docs/dev/names/custom-languages"},next:{title:"Custom Sprites and Resources",permalink:"/RogueLibs/docs/dev/custom-sprites"}},u={},s=[{value:"<code>INameProvider</code> interface",id:"inameprovider",level:2}],c={toc:s},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-name-providers"},"Custom Name Providers"),(0,a.kt)("p",null,"If you have some kind of a complicated localization logic, then you might want to create your own ",(0,a.kt)("inlineCode",{parentName:"p"},"INameProvider"),". This way you can control what strings are returned by ",(0,a.kt)("inlineCode",{parentName:"p"},"NameDB.GetName")," in a more generic way. You can even hook up your localization provider, if you don't like the localization system provided by RogueLibs."),(0,a.kt)("h2",{id:"inameprovider"},(0,a.kt)("inlineCode",{parentName:"h2"},"INameProvider")," interface"),(0,a.kt)("p",null,"Just create a class implementing ",(0,a.kt)("inlineCode",{parentName:"p"},"INameProvider")," and add it to ",(0,a.kt)("inlineCode",{parentName:"p"},"RogueFramework"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyNameProvider.cs"',title:'"MyNameProvider.cs"'},'public class MyNameProvider : INameProvider\n{\n    public void GetName(string name, string type, ref string? result)\n    {\n        if (name.StartsWith("fake_"))\n        {\n            string sub = name.Substring("fake_".Length);\n            result = LanguageService.NameDB.GetName(sub, type);\n        }\n    }\n}\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If the original ",(0,a.kt)("inlineCode",{parentName:"p"},"NameDB.GetName")," returned an error string (with ",(0,a.kt)("inlineCode",{parentName:"p"},"E_")," prefix), ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"RogueFramework.NameProviders.Add(new MyNameProvider());\n")),(0,a.kt)("p",null,"Here's a more practical and useful example, that is already implemented in RogueLibs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public class DialogueNameProvider : INameProvider\n{\n    public void GetName(string name, string type, ref string? result)\n    {\n        if (result is null && type == "Dialogue" && name.StartsWith("NA_"))\n        {\n            string sub = name.Substring("NA_".Length);\n            string newResult = LanguageService.NameDB.GetName(sub, type);\n            if (!newResult.StartsWith("E_")) result = newResult;\n        }\n    }\n}\n')),(0,a.kt)("p",null,"Normally, the game looks for dialogue names of the following format: ",(0,a.kt)("inlineCode",{parentName:"p"},"<AgentName>_<DialogueName>"),". If such a name doesn't exist, then ",(0,a.kt)("inlineCode",{parentName:"p"},"NA_<DialogueName>")," (NA - No Agent) is used instead. This name provider will also look for a name with just the dialogue name. This allows the developers to write dialogue names without that annoying and often confusing ",(0,a.kt)("inlineCode",{parentName:"p"},"NA_")," prefix."))}m.isMDXComponent=!0}}]);