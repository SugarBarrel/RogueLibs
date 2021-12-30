"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1016:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(3117),a=n(102),o=n(7294),i=["children"];function s(e){var t=e.children,n=(0,a.Z)(e,i);return o.createElement("div",(0,r.Z)({role:"tabpanel"},n),t)}},2099:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7294),a=n(9443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),s="tabItem_2O3c",l="tabItemActive_Fpbe",u="tab_1pgU";var c=37,p=39;function m(e){var t=e.lazy,n=e.defaultValue,a=e.values,m=e.groupId,d=o(),f=d.tabGroupChoices,v=d.setTabGroupChoices,g=(0,r.useState)(n),h=g[0],b=g[1],k=r.Children.toArray(e.children),y=[];if(null!=m){var N=f[m];null!=N&&N!==h&&a.some((function(e){return e.value===N}))&&b(N)}var w=function(e){var t=e.currentTarget,n=y.indexOf(t),r=a[n].value;b(r),null!=m&&(v(m,r),setTimeout((function(){var e,n,r,a,o,i,s,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,s=i.innerHeight,u=i.innerWidth,n>=0&&o<=u&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},S=function(e){var t;switch(e.keyCode){case p:var n=y.indexOf(e.target)+1;t=y[n]||y[0];break;case c:var r=y.indexOf(e.target)-1;t=y[r]||y[y.length-1];break;default:return}t.focus()},O=function(e,t){return t.value===e||t.values&&-1!=t.values.indexOf(e)};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:"tabs"},a.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":h===t}),key:t,ref:function(e){return e&&y.push(e)},onKeyDown:S,onFocus:w,onClick:w},n)}))),t?r.cloneElement(k.find((function(e){return O(h,e.props)})),{className:u}):r.createElement("div",null,k.map((function(e,t){return r.cloneElement(e,{key:t,hidden:!O(h,e.props),className:u})}))),r.createElement("br",null))}},3082:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=n(2099),s=n(1016),l=["components"],u={},c="useStorage",p={unversionedId:"site/hooks/useStorage",id:"site/hooks/useStorage",title:"useStorage",description:"useStorage is used to store strings in the browser's local storage.",source:"@site/docs/site/hooks/useStorage.mdx",sourceDirName:"site/hooks",slug:"/site/hooks/useStorage",permalink:"/RogueLibs/ru/docs/site/hooks/useStorage",editUrl:"https://github.com/Abbysssal/RogueLibs/edit/main/website/docs/site/hooks/useStorage.mdx",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"useSelector",permalink:"/RogueLibs/ru/docs/site/hooks/useSelector"},next:{title:"useStorageArray",permalink:"/RogueLibs/ru/docs/site/hooks/useStorageArray"}},m=[{value:"Signature",id:"signature",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],d={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usestorage"},(0,o.kt)("inlineCode",{parentName:"h1"},"useStorage")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useStorage")," is used to store strings in the browser's local storage.",(0,o.kt)("br",{parentName:"p"}),"\n","It also synchronizes all instances using the same storage slot."),(0,o.kt)("h2",{id:"signature"},"Signature"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function (\n  slotName: string | null, // name of the storage slot to use\n  defaultValue?: string | null | (() => string | null), // default value of the storage slot\n  onChange?: (value: string | null) => void // change event handler\n): [\n    string | null, // current value (null \u2261 the storage slot doesn't exist)\n    React.Dispatch<React.SetStateAction<string | null>> // function to set the value\n  ]\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If ",(0,o.kt)("inlineCode",{parentName:"p"},"slotName")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", the hook works just like a ",(0,o.kt)("inlineCode",{parentName:"p"},"useState"),"."))),(0,o.kt)(i.Z,{defaultValue:"ts",values:[{value:"ts",label:"TypeScript"},{value:"js",label:"JavaScript"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import useStorage from "../hooks/useStorage";\n\nexport default function ({/* your props */}: Props) {\n\n  const [value, setValue] = useStorage("my.storage.slot", null);\n\n  /* ... */\n}\n'))),(0,o.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import useStorage from "../hooks/useStorage";\n\nexport default function ({/* your props */}) {\n\n  const [value, setValue] = useStorage("my.storage.slot", null);\n\n  /* ... */\n}\n')))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The value is read from the local storage in an ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook, so, on the first render, the value will be the default one."))))}f.isMDXComponent=!0}}]);