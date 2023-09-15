"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2610],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,u(u({ref:t},c),{},{components:r})):n.createElement(f,u({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,u[1]=l;for(var s=2;s<o;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1016:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7462),a=r(7294);function o(e){let{children:t,...r}=e;return a.createElement("div",(0,n.Z)({role:"tabpanel"},r),t)}},5878:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(7294),a=r(6550),o=r(1980),u=r(7392),l=r(12);function i(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function s(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??i(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function c(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const u=(0,a.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(u.location.search);t.set(l,e),u.replace({...u.location,search:t.toString()})}),[l,u])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=s(e),[u,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[m,d]=p({queryString:r,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,l.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),v=(()=>{const e=m??f;return c({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{v&&i(v)}),[v]);return{selectedValue:u,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var d=r(6010);const f={tabItem:"tabItem_V91s",tabItemActive:"tabItemActive_JsUu",blink:"blink_ZPVS",tab:"tab_ntnM"};const b={left:37,right:39};function v(e){const{lazy:t,defaultValue:r,values:a,groupId:o}=e,u=n.Children.toArray(e.children),{tabValues:l,selectedValue:i,selectValue:s}=m({children:u,defaultValue:r,values:a,groupId:o}),c=[],p=e=>{const t=e.currentTarget,r=a[c.indexOf(t)].value;s(r),null!=o&&setTimeout((()=>{(function(e){const{top:t,left:r,bottom:n,right:a}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:u}=window;return t>=0&&a<=u&&n<=o&&r>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(f.tabItemActive),setTimeout((()=>t.classList.remove(f.tabItemActive)),2e3))}),150)},v=e=>{let t;switch(e.keyCode){case b.right:{const r=c.indexOf(e.target)+1;t=c[r]||c[0];break}case b.left:{const r=c.indexOf(e.target)-1;t=c[r]||c[c.length-1];break}default:return}t.focus()},g=(e,t)=>t.value===e||t.values&&-1!=t.values.indexOf(e);return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:"tabs"},a.map((e=>{let{value:t,label:r}=e;return n.createElement("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,className:(0,d.Z)("tabs__item",f.tabItem,{"tabs__item--active":i===t}),key:t,ref:e=>e&&c.push(e),onKeyDown:v,onFocus:p,onClick:p},r)}))),t?n.cloneElement(u.find((e=>g(i,e.props))),{className:f.tab}):n.createElement("div",null,u.map(((e,t)=>n.cloneElement(e,{key:t,hidden:!g(i,e.props),className:f.tab})))),n.createElement("br",null))}},3487:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));r(5878),r(1016),r(4996);const o={},u="\u041f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0445 \u0438\u043c\u0451\u043d",l={unversionedId:"dev/names/name-providers",id:"dev/names/name-providers",title:"\u041f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0445 \u0438\u043c\u0451\u043d",description:"\u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u043a\u0430\u043a\u0430\u044f-\u0442\u043e \u0441\u043b\u043e\u0436\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0439, \u0442\u043e \u0432\u0430\u043c \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0433\u043e\u0434\u0438\u0442\u044c\u0441\u044f INameProvider. \u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0442\u0441\u044f \u043c\u0435\u0442\u043e\u0434\u043e\u043c NameDB.GetName \u0432 \u0431\u043e\u043b\u0435\u0435 \u043e\u0431\u043e\u0431\u0449\u0451\u043d\u043d\u043e\u043c \u0432\u0438\u0434\u0435. \u041f\u0440\u043e\u0441\u0442\u043e \u0441\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u043a\u043b\u0430\u0441\u0441 \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u044e\u0449\u0438\u0439 INameProvider \u0438 \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0435\u0433\u043e \u0432 RogueFramework.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/dev/names/name-providers.mdx",sourceDirName:"dev/names",slug:"/dev/names/name-providers",permalink:"/RogueLibs/ru/docs/dev/names/name-providers",draft:!1,editUrl:"https://github.com/SugarBarrel/RogueLibs/edit/main/website/docs/dev/names/name-providers.mdx",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0435 \u044f\u0437\u044b\u043a\u0438*",permalink:"/RogueLibs/ru/docs/dev/names/custom-languages"},next:{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0435 \u0441\u043f\u0440\u0430\u0439\u0442\u044b",permalink:"/RogueLibs/ru/docs/dev/custom-sprites"}},i={},s=[],c={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b-\u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0445-\u0438\u043c\u0451\u043d"},"\u041f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0445 \u0438\u043c\u0451\u043d"),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u043a\u0430\u043a\u0430\u044f-\u0442\u043e \u0441\u043b\u043e\u0436\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0439, \u0442\u043e \u0432\u0430\u043c \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0433\u043e\u0434\u0438\u0442\u044c\u0441\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"INameProvider"),". \u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0442\u0441\u044f \u043c\u0435\u0442\u043e\u0434\u043e\u043c ",(0,a.kt)("inlineCode",{parentName:"p"},"NameDB.GetName")," \u0432 \u0431\u043e\u043b\u0435\u0435 \u043e\u0431\u043e\u0431\u0449\u0451\u043d\u043d\u043e\u043c \u0432\u0438\u0434\u0435. \u041f\u0440\u043e\u0441\u0442\u043e \u0441\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u043a\u043b\u0430\u0441\u0441 \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u044e\u0449\u0438\u0439 ",(0,a.kt)("inlineCode",{parentName:"p"},"INameProvider")," \u0438 \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0435\u0433\u043e \u0432 ",(0,a.kt)("inlineCode",{parentName:"p"},"RogueFramework"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyNameProvider.cs"',title:'"MyNameProvider.cs"'},'public class MyNameProvider : INameProvider\n{\n    public void GetName(string name, string type, ref string? result)\n    {\n        if (name.StartsWith("fake_"))\n        {\n            string sub = name.Substring("fake_".Length);\n            result = LanguageService.NameDB.GetName(sub, type);\n        }\n    }\n}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u0415\u0441\u043b\u0438 \u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0439 ",(0,a.kt)("inlineCode",{parentName:"p"},"NameDB.GetName")," \u0432\u0435\u0440\u043d\u0443\u043b \u0441\u0442\u0440\u043e\u043a\u0443 \u0441 \u043e\u0448\u0438\u0431\u043a\u043e\u0439 (\u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0443\u044e\u0441\u044f \u0441 ",(0,a.kt)("inlineCode",{parentName:"p"},"E_"),"), ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043d\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"RogueFramework.NameProviders.Add(new MyNameProvider());\n")),(0,a.kt)("p",null,"\u0412\u043e\u0442 \u0431\u043e\u043b\u0435\u0435 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u043d\u044b\u0439 \u0438 \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440, \u043e\u043d, \u043a\u0441\u0442\u0430\u0442\u0438, \u0443\u0436\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d \u0432 RogueLibs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public class DialogueNameProvider : INameProvider\n{\n    public void GetName(string name, string type, ref string? result)\n    {\n        if (result is null && type == "Dialogue" && name.StartsWith("NA_"))\n        {\n            string sub = name.Substring("NA_".Length);\n            string newResult = LanguageService.NameDB.GetName(sub, type);\n            if (!newResult.StartsWith("E_")) result = newResult;\n        }\n    }\n}\n')),(0,a.kt)("p",null,"\u041e\u0431\u044b\u0447\u043d\u043e, \u0438\u0433\u0440\u0430 \u0438\u0449\u0435\u0442 \u0434\u0438\u0430\u043b\u043e\u0433\u0438 \u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435: ",(0,a.kt)("inlineCode",{parentName:"p"},"<\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0430>_<\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u0414\u0438\u0430\u043b\u043e\u0433\u0430>"),". \u0415\u0441\u043b\u0438 \u0442\u0430\u043a\u043e\u0433\u043e \u0438\u043c\u0435\u043d\u0438 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442, \u0442\u043e\u0433\u0434\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"NA_<\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u0438\u0430\u043b\u043e\u0433\u0430>")," (NA - No Agent - \u0431\u0435\u0437 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0430) \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432\u043c\u0435\u0441\u0442\u043e \u043d\u0435\u0433\u043e. \u042d\u0442\u043e\u0442 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440 \u0438\u043c\u0451\u043d \u0442\u0430\u043a\u0436\u0435 \u0438\u0449\u0435\u0442 \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0435 \u0438\u043c\u044f \u043f\u0440\u043e\u0441\u0442\u043e \u0441 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c \u0434\u0438\u0430\u043b\u043e\u0433\u0430. \u042d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430\u043c \u043f\u0438\u0441\u0430\u0442\u044c \u0438\u043c\u0435\u043d\u0430 \u0434\u0438\u0430\u043b\u043e\u0433\u043e\u0432 \u0431\u0435\u0437 \u044d\u0442\u043e\u0433\u043e \u043d\u0430\u0434\u043e\u0435\u0434\u043b\u0438\u0432\u043e\u0433\u043e ",(0,a.kt)("inlineCode",{parentName:"p"},"NA_")," \u0432 \u043d\u0430\u0447\u0430\u043b\u0435."))}m.isMDXComponent=!0}}]);