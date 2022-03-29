"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[13],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1016:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7462),a=n(3366),o=n(7294),i=["children"];function c(e){var t=e.children,n=(0,a.Z)(e,i);return o.createElement("div",(0,r.Z)({role:"tabpanel"},n),t)}},250:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7294),a=n(5773),o=n(6010),i="tabItem_V91s",c="tabItemActive_JsUu",s="tab_ntnM";var u=37,l=39;function m(e){var t=e.lazy,n=e.defaultValue,m=e.values,p=e.groupId,d=(0,a.UB)(),f=d.tabGroupChoices,v=d.setTabGroupChoices,b=(0,r.useState)(n),g=b[0],w=b[1],h=r.Children.toArray(e.children),y=[];if(null!=p){var O=f[p];null!=O&&O!==g&&m.some((function(e){return e.value===O}))&&w(O)}var k=function(e){var t=e.currentTarget,n=y.indexOf(t),r=m[n].value;w(r),null!=p&&(v(p,r),setTimeout((function(){var e,n,r,a,o,i,s,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,s=i.innerHeight,u=i.innerWidth,n>=0&&o<=u&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},x=function(e){var t;switch(e.keyCode){case l:var n=y.indexOf(e.target)+1;t=y[n]||y[0];break;case u:var r=y.indexOf(e.target)-1;t=y[r]||y[y.length-1];break;default:return}t.focus()},N=function(e,t){return t.value===e||t.values&&-1!=t.values.indexOf(e)};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:"tabs"},m.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":g===t}),key:t,ref:function(e){return e&&y.push(e)},onKeyDown:x,onFocus:k,onClick:k},n)}))),t?r.cloneElement(h.find((function(e){return N(g,e.props)})),{className:s}):r.createElement("div",null,h.map((function(e,t){return r.cloneElement(e,{key:t,hidden:!N(g,e.props),className:s})}))),r.createElement("br",null))}},3166:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=(n(250),n(1016),n(4996),["components"]),c={},s="\u041e\u0440\u0443\u0436\u0438\u0435 \u0431\u043b\u0438\u0436\u043d\u0435\u0433\u043e \u0431\u043e\u044f*",u={unversionedId:"dev/items/weapons/melee-weapons",id:"dev/items/weapons/melee-weapons",title:"\u041e\u0440\u0443\u0436\u0438\u0435 \u0431\u043b\u0438\u0436\u043d\u0435\u0433\u043e \u0431\u043e\u044f*",description:"",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/dev/items/weapons/melee-weapons.mdx",sourceDirName:"dev/items/weapons",slug:"/dev/items/weapons/melee-weapons",permalink:"/RogueLibs/ru/docs/dev/items/weapons/melee-weapons",editUrl:"https://github.com/SugarBarrel/RogueLibs/edit/main/website/docs/dev/items/weapons/melee-weapons.mdx",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"\u041f\u0435\u0440\u0435\u0437\u0430\u0440\u044f\u0436\u0430\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b",permalink:"/RogueLibs/ru/docs/dev/items/recharging-items"},next:{title:"\u041a\u0438\u0434\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043e\u0440\u0443\u0436\u0438\u0435*",permalink:"/RogueLibs/ru/docs/dev/items/weapons/thrown-weapons"}},l=[],m={toc:l};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u043e\u0440\u0443\u0436\u0438\u0435-\u0431\u043b\u0438\u0436\u043d\u0435\u0433\u043e-\u0431\u043e\u044f"},"\u041e\u0440\u0443\u0436\u0438\u0435 \u0431\u043b\u0438\u0436\u043d\u0435\u0433\u043e \u0431\u043e\u044f*"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Work-In-Progress")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"})))}p.isMDXComponent=!0}}]);