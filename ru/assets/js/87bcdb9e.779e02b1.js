"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[880],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=i(r),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,u(u({ref:t},c),{},{components:r})):n.createElement(m,u({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,u[1]=l;for(var i=2;i<o;i++)u[i]=r[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1016:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7462),a=r(7294);function o(e){let{children:t,...r}=e;return a.createElement("div",(0,n.Z)({role:"tabpanel"},r),t)}},5878:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(7294),a=r(6550),o=r(1980),u=r(7392),l=r(12);function s(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function i(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??s(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function c(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const u=(0,a.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(u.location.search);t.set(l,e),u.replace({...u.location,search:t.toString()})}),[l,u])]}function d(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=i(e),[u,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[d,f]=p({queryString:r,groupId:a}),[m,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,l.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),v=(()=>{const e=d??m;return c({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{v&&s(v)}),[v]);return{selectedValue:u,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),f(e),b(e)}),[f,b,o]),tabValues:o}}var f=r(6010);const m={tabItem:"tabItem_V91s",tabItemActive:"tabItemActive_JsUu",blink:"blink_ZPVS",tab:"tab_ntnM"};const b={left:37,right:39};function v(e){const{lazy:t,defaultValue:r,values:a,groupId:o}=e,u=n.Children.toArray(e.children),{tabValues:l,selectedValue:s,selectValue:i}=d({children:u,defaultValue:r,values:a,groupId:o}),c=[],p=e=>{const t=e.currentTarget,r=a[c.indexOf(t)].value;i(r),null!=o&&setTimeout((()=>{(function(e){const{top:t,left:r,bottom:n,right:a}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:u}=window;return t>=0&&a<=u&&n<=o&&r>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(m.tabItemActive),setTimeout((()=>t.classList.remove(m.tabItemActive)),2e3))}),150)},v=e=>{let t;switch(e.keyCode){case b.right:{const r=c.indexOf(e.target)+1;t=c[r]||c[0];break}case b.left:{const r=c.indexOf(e.target)-1;t=c[r]||c[c.length-1];break}default:return}t.focus()},h=(e,t)=>t.value===e||t.values&&-1!=t.values.indexOf(e);return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:"tabs"},a.map((e=>{let{value:t,label:r}=e;return n.createElement("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,className:(0,f.Z)("tabs__item",m.tabItem,{"tabs__item--active":s===t}),key:t,ref:e=>e&&c.push(e),onKeyDown:v,onFocus:p,onClick:p},r)}))),t?n.cloneElement(u.find((e=>h(s,e.props))),{className:m.tab}):n.createElement("div",null,u.map(((e,t)=>n.cloneElement(e,{key:t,hidden:!h(s,e.props),className:m.tab})))),n.createElement("br",null))}},6731:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));r(5878),r(1016),r(4996);const o={},u="\u041a\u0438\u0434\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043e\u0440\u0443\u0436\u0438\u0435*",l={unversionedId:"dev/items/weapons/thrown-weapons",id:"dev/items/weapons/thrown-weapons",title:"\u041a\u0438\u0434\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043e\u0440\u0443\u0436\u0438\u0435*",description:"",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/dev/items/weapons/thrown-weapons.mdx",sourceDirName:"dev/items/weapons",slug:"/dev/items/weapons/thrown-weapons",permalink:"/RogueLibs/ru/docs/dev/items/weapons/thrown-weapons",draft:!1,editUrl:"https://github.com/SugarBarrel/RogueLibs/edit/main/website/docs/dev/items/weapons/thrown-weapons.mdx",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"\u041e\u0440\u0443\u0436\u0438\u0435 \u0431\u043b\u0438\u0436\u043d\u0435\u0433\u043e \u0431\u043e\u044f*",permalink:"/RogueLibs/ru/docs/dev/items/weapons/melee-weapons"},next:{title:"\u041e\u0440\u0443\u0436\u0438\u0435 \u0434\u0430\u043b\u044c\u043d\u0435\u0433\u043e \u0431\u043e\u044f*",permalink:"/RogueLibs/ru/docs/dev/items/weapons/projectile-weapons"}},s={},i=[],c={toc:i},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u043a\u0438\u0434\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435-\u043e\u0440\u0443\u0436\u0438\u0435"},"\u041a\u0438\u0434\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043e\u0440\u0443\u0436\u0438\u0435*"),(0,a.kt)("admonition",{title:"Work-In-Progress",type:"info"}))}d.isMDXComponent=!0}}]);