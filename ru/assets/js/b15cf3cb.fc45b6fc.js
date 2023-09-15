"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7577],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1016:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7462),a=r(7294);function o(e){let{children:t,...r}=e;return a.createElement("div",(0,n.Z)({role:"tabpanel"},r),t)}},5878:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(7294),a=r(6550),o=r(1980),i=r(7392),s=r(12);function u(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function l(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function c(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const i=(0,a.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=l(e),[i,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[m,d]=p({queryString:r,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,s.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),g=(()=>{const e=m??f;return c({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{g&&u(g)}),[g]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var d=r(6010);const f={tabItem:"tabItem_V91s",tabItemActive:"tabItemActive_JsUu",blink:"blink_ZPVS",tab:"tab_ntnM"};const b={left:37,right:39};function g(e){const{lazy:t,defaultValue:r,values:a,groupId:o}=e,i=n.Children.toArray(e.children),{tabValues:s,selectedValue:u,selectValue:l}=m({children:i,defaultValue:r,values:a,groupId:o}),c=[],p=e=>{const t=e.currentTarget,r=a[c.indexOf(t)].value;l(r),null!=o&&setTimeout((()=>{(function(e){const{top:t,left:r,bottom:n,right:a}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:i}=window;return t>=0&&a<=i&&n<=o&&r>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(f.tabItemActive),setTimeout((()=>t.classList.remove(f.tabItemActive)),2e3))}),150)},g=e=>{let t;switch(e.keyCode){case b.right:{const r=c.indexOf(e.target)+1;t=c[r]||c[0];break}case b.left:{const r=c.indexOf(e.target)-1;t=c[r]||c[c.length-1];break}default:return}t.focus()},v=(e,t)=>t.value===e||t.values&&-1!=t.values.indexOf(e);return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:"tabs"},a.map((e=>{let{value:t,label:r}=e;return n.createElement("li",{role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,className:(0,d.Z)("tabs__item",f.tabItem,{"tabs__item--active":u===t}),key:t,ref:e=>e&&c.push(e),onKeyDown:g,onFocus:p,onClick:p},r)}))),t?n.cloneElement(i.find((e=>v(u,e.props))),{className:f.tab}):n.createElement("div",null,i.map(((e,t)=>n.cloneElement(e,{key:t,hidden:!v(u,e.props),className:f.tab})))),n.createElement("br",null))}},7438:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=r(7462),a=(r(7294),r(3905)),o=(r(5878),r(1016),r(4996));const i={},s="\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0435 \u0441\u043f\u0440\u0430\u0439\u0442\u044b",u={unversionedId:"dev/custom-sprites",id:"dev/custom-sprites",title:"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0435 \u0441\u043f\u0440\u0430\u0439\u0442\u044b",description:"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0441\u043f\u0440\u0430\u0439\u0442\u044b \u043a\u0430\u043a \u0440\u0435\u0441\u0443\u0440\u0441\u044b",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/dev/custom-sprites.mdx",sourceDirName:"dev",slug:"/dev/custom-sprites",permalink:"/RogueLibs/ru/docs/dev/custom-sprites",draft:!1,editUrl:"https://github.com/SugarBarrel/RogueLibs/edit/main/website/docs/dev/custom-sprites.mdx",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"\u041f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0445 \u0438\u043c\u0451\u043d",permalink:"/RogueLibs/ru/docs/dev/names/name-providers"},next:{title:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e",permalink:"/RogueLibs/ru/docs/dev/extra"}},l={},c=[{value:"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0441\u043f\u0440\u0430\u0439\u0442\u044b \u043a\u0430\u043a \u0440\u0435\u0441\u0443\u0440\u0441\u044b",id:"sprites-as-resources",level:2},{value:"<code>RogueSprite</code>",id:"roguesprite",level:2},{value:"\u0420\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0441\u043f\u0440\u0430\u0439\u0442\u044b",id:"sprite-variations",level:2}],p={toc:c},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0435-\u0441\u043f\u0440\u0430\u0439\u0442\u044b"},"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0435 \u0441\u043f\u0440\u0430\u0439\u0442\u044b"),(0,a.kt)("h2",{id:"sprites-as-resources"},"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0441\u043f\u0440\u0430\u0439\u0442\u044b \u043a\u0430\u043a \u0440\u0435\u0441\u0443\u0440\u0441\u044b"),(0,a.kt)("p",null,"\u0412\u043e-\u043f\u0435\u0440\u0432\u044b\u0445, \u043a\u043e\u0434\u0438\u0440\u0443\u0439\u0442\u0435 \u0432\u0430\u0448\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0432 PNG \u0438\u043b\u0438 JPG \u0444\u043e\u0440\u043c\u0430\u0442\u0435, \u0430 \u0430\u0443\u0434\u0438\u043e\u043a\u043b\u0438\u043f\u044b \u0432 MP3, OGG \u0438\u043b\u0438 WAV."),(0,a.kt)("p",null,"\u041f\u043e\u0442\u043e\u043c \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432 \u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0438 \u0441\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0444\u0430\u0439\u043b \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432, \u0435\u0441\u043b\u0438 \u0435\u0433\u043e \u0442\u0430\u043c \u043d\u0435\u0442\u0443."),(0,a.kt)("img",{src:(0,o.Z)("/img/setup/resources.png"),width:"600"}),(0,a.kt)("p",null,"\u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"Resources.resx")," \u0432 \u0432\u0430\u0448\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0432 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0435\u043c \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u0435 \u0438 \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0432 \u043a\u043e\u043d\u0435\u0446:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'  \x3c!-- ... --\x3e\n// highlight-start\n  <data name="MyAwesomeSprite" type="System.Resources.ResXFileRef, System.Windows.Forms">\n    <value>..\\Resources\\MyAwesomeSprite.png;System.Byte[], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089</value>\n  </data>\n// highlight-end\n</root>\n')),(0,a.kt)("p",null,"\u0412\u0430\u043c \u043d\u0430\u0434\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0430\u0442\u0440\u0438\u0431\u0443\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," \u0438 \u043f\u0435\u0440\u0432\u0443\u044e \u0447\u0430\u0441\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," \u0434\u043b\u044f \u0432\u0430\u0448\u0438\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432. \u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u0432\u044b \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0431\u0440\u0430\u0449\u0430\u0442\u044c\u0441\u044f \u043a \u043d\u0438\u043c \u0442\u0430\u043a: ",(0,a.kt)("inlineCode",{parentName:"p"},"Properties.Resources.MyAwesomeSprite"),". \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u0435\u043b\u0430\u0442\u044c \u0442\u043e \u0436\u0435 \u0441\u0430\u043c\u043e\u0435 \u0438 \u0441 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u0442\u0438\u043f\u0430\u043c\u0438 \u0444\u0430\u0439\u043b\u043e\u0432, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0430\u0443\u0434\u0438\u043e\u043a\u043b\u0438\u043f\u0430\u043c\u0438, \u0448\u0440\u0438\u0444\u0442\u0430\u043c\u0438 \u0438 \u043c\u043e\u0434\u0435\u043b\u044f\u043c\u0438."),(0,a.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},".resx"),' \u0444\u0430\u0439\u043b\u0430, \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0432\u043e\u0451 \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0438 \u043f\u0435\u0440\u0435\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043a\u043e\u0434 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432, \u043d\u0430\u0436\u0430\u0432 \u043f\u0440\u0430\u0432\u043e\u0439 \u043a\u043d\u043e\u043f\u043a\u043e\u0439 \u043f\u043e Resources.resx \u0438 \u0432\u044b\u0431\u0440\u0430\u0432 "Run Custom Tool".'),(0,a.kt)("img",{src:(0,o.Z)("img/custom-sprites/run-custom-tool.png"),width:"400"}),(0,a.kt)("h2",{id:"roguesprite"},(0,a.kt)("inlineCode",{parentName:"h2"},"RogueSprite")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u0415\u0441\u043b\u0438 \u0432\u0430\u043c \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e, \u043f\u043e\u0447\u0435\u043c\u0443 \u043e\u043d \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"RogueSprite"),", \u0430 \u043d\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"CustomSprite"),", \u043a\u0430\u043a \u043f\u043e\u0447\u0442\u0438 \u0432\u0441\u0435 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0448\u0442\u0443\u043a\u0438 \u0432 RogueLibs (",(0,a.kt)("inlineCode",{parentName:"p"},"CustomItem"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"CustomTrait"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"CustomEffect"),"), \u043d\u0443 \u0447\u0442\u043e \u0436, \u044d\u0442\u043e \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043e\u043d \u0432\u0435\u0434\u0451\u0442 \u0441\u0435\u0431\u044f \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u043f\u043e-\u0434\u0440\u0443\u0433\u043e\u043c\u0443. ",(0,a.kt)("inlineCode",{parentName:"p"},"CustomItem"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"CustomTrait")," \u0438 \u0434\u0440. - \u0445\u0443\u043a\u0438, \u0432 \u0442\u043e \u0432\u0440\u0435\u043c\u044f \u043a\u0430\u043a ",(0,a.kt)("inlineCode",{parentName:"p"},"RogueSprite"),", \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438, \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u0445\u0443\u043a\u043e\u0432. \u0410 \u0435\u0449\u0451, \u044f \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u043b \u043d\u0435\u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0438 \u0440\u0430\u0431\u043e\u0442\u044b, \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0432 \u044d\u0442\u043e\u0439 TK2D \u0435\u0440\u0443\u043d\u0434\u0435 \u0438 \u044f \u043f\u0440\u043e\u0441\u0442\u043e \u0445\u043e\u0442\u0435\u043b \u043e\u0442\u043b\u0438\u0447\u0438\u0442\u044c \u0435\u0433\u043e \u043e\u0442 \u0434\u0440\u0443\u0433\u0438\u0445 \u043a\u043b\u0430\u0441\u0441\u043e\u0432.")),(0,a.kt)("p",null,"\u041e\u0431\u044b\u0447\u043d\u043e, \u043d\u043e\u0432\u044b\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"RogueSprite")," \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0432\u043e\u0442 \u0442\u0430\u043a:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"RogueLibs.CreateCustomItem<MyCustomItem>()\n    ...\n    // highlight-next-line\n    .WithSprite(Properties.Resources.MyCustomItem);\n")),(0,a.kt)("p",null,"\u041d\u043e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0438\u0445 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u0442\u043e\u0436\u0435, \u043d\u043e \u0432 \u0442\u0430\u043a\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0432\u0430\u043c \u043f\u0440\u0438\u0434\u0451\u0442\u0441\u044f \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0438 \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f. \u041e\u0431\u043b\u0430\u0441\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0441\u043f\u0440\u0430\u0439\u0442\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0432 \u043a\u0430\u043a\u0438\u0445 \u043e\u0431\u043b\u0430\u0441\u0442\u044f\u0445 \u0438\u0433\u0440\u044b \u0441\u043f\u0440\u0430\u0439\u0442 \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d. ",(0,a.kt)("inlineCode",{parentName:"p"},"SpriteScope.Items")," \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430\u0445, ",(0,a.kt)("inlineCode",{parentName:"p"},"SpriteScope.Objects")," - \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u0445, \u0438 \u0442.\u0434. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043e\u0431\u043b\u0430\u0441\u0442\u0435\u0439 \u0442\u043e\u0436\u0435, \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0432 \u0438\u0445 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"|"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'RogueLibs.CreateCustomSprite("name", SpriteScope.Items, Properties.Resources.ResourceName);\n')),(0,a.kt)("p",null,"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, RogueLibs \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0432\u0435\u0441\u044c \u0444\u0430\u0439\u043b \u0434\u043b\u044f \u0442\u0435\u043a\u0441\u0442\u0443\u0440\u044b. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043d\u0443\u0436\u043d\u0443\u044e \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0442\u0435\u043a\u0441\u0442\u0443\u0440\u044b ",(0,a.kt)("inlineCode",{parentName:"p"},"Rect")," \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u043c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'RogueLibs.CreateCustom("name", SpriteScope.Items, Properties.Resources.ResourceName,\n                                // highlight-next-line\n                                new Rect(0f, 0f, 64f, 64f));\n')),(0,a.kt)("img",{src:(0,o.Z)("img/custom-sprites/coordinate-system.png"),width:"400"}),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 \u0442\u0435\u043a\u0441\u0442\u0443\u0440\u044b \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u043c, \u043e\u0442\u043b\u0438\u0447\u0430\u044e\u0449\u0438\u043c\u0441\u044f \u043e\u0442 64x64, \u0442\u043e \u0432\u0430\u043c \u0442\u0430\u043a\u0436\u0435 \u043d\u0430\u0434\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c PPU (pixels-per-unit) \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'RogueLibs.CreateCustom("name", SpriteScope.Items, Properties.Resources.ResourceName,\n                                // highlight-next-line\n                                new Rect(64f, 64f, 128f, 128f), 128f);\n')),(0,a.kt)("h2",{id:"sprite-variations"},"\u0420\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0441\u043f\u0440\u0430\u0439\u0442\u044b"),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430 \u0431\u043e\u043b\u0435\u0435 \u043e\u0434\u043d\u043e\u0433\u043e \u0441\u043f\u0440\u0430\u0439\u0442\u0430, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"InvItem.LoadItemSprite")," \u0432 ",(0,a.kt)("inlineCode",{parentName:"p"},"SetupDetails")," \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Present : CustomItem, IItemUsable\n{\n    [RLSetup]\n    public static void Setup()\n    {\n        RogueLibs.CreateCustomItem<Present>()\n            /* ... */\n            .WithSprite(Properties.Resources.Present);\n\n        RogueLibs.CreateCustomSprite("Present2", SpriteScope.Items, Properties.Resources.Present2);\n        RogueLibs.CreateCustomSprite("Present3", SpriteScope.Items, Properties.Resources.Present3);\n    }\n\n    public override void SetupDetails()\n    {\n        /* ... */\n        int rnd = new Random().Next(3) + 1;\n        // \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435 \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e x, \u0442\u0430\u043a\u043e\u0435 \u0447\u0442\u043e 1 \u2264 x \u2264 3\n\n        if (rnd != 1) // \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0434\u0440\u0443\u0433\u043e\u0439 \u0441\u043f\u0440\u0430\u0439\u0442, \u0435\u0441\u043b\u0438 \u044d\u0442\u043e 2 \u0438\u043b\u0438 3\n        Item.LoadItemSprite($"Present{rnd}");\n\n        // \u0435\u0441\u043b\u0438 \u044d\u0442\u043e 1, \u0441\u043f\u0440\u0430\u0439\u0442 "Present" \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e\n    }\n}\n')),(0,a.kt)("p",null,"\u042d\u0442\u043e\u0442 \u043f\u0440\u0438\u043c\u0435\u0440 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0441\u043b\u0438 \u043f\u0440\u0435\u0434\u043c\u0435\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442. \u0412 \u041e\u0431\u0432\u0435\u0441\u0435 \u0438 \u041c\u0435\u043d\u044e \u043d\u0430\u0433\u0440\u0430\u0434 \u0443 \u043d\u0435\u0433\u043e \u0432\u0441\u0435\u0433\u0434\u0430 \u0431\u0443\u0434\u0435\u0442 \u0441\u043f\u0440\u0430\u0439\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"Present"),". \u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0447\u0442\u043e\u0431\u044b \u0441\u043f\u0440\u0430\u0439\u0442 \u0432 \u043c\u0435\u043d\u044e \u0442\u0430\u043a\u0436\u0435 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e \u0432\u044b\u0431\u0438\u0440\u0430\u043b\u0441\u044f, \u0432\u0430\u043c \u043f\u0440\u0438\u0434\u0451\u0442\u0441\u044f ",(0,a.kt)("a",{parentName:"p",href:"./unlocks/configuring-unlocks#examples"},"\u043f\u0435\u0440\u0435\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043c\u0435\u0442\u043e\u0434 ",(0,a.kt)("inlineCode",{parentName:"a"},"DisplayedUnlock.GetImage")),"."))}d.isMDXComponent=!0}}]);