(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[140],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return b}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(r),b=i,d=m["".concat(u,".").concat(b)]||m[b]||f[b]||a;return r?n.createElement(d,o(o({ref:t},l),{},{components:r})):n.createElement(d,o({ref:t},l))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3919:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return i}})},4996:function(e,t,r){"use strict";r.d(t,{C:function(){return a},Z:function(){return o}});var n=r(2263),i=r(3919);function a(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,o=a.forcePrependBaseUrl,c=void 0!==o&&o,u=a.absolute,s=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if((0,i.b)(r))return r;if(c)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+l:l}(a,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},9443:function(e,t,r){"use strict";var n=(0,r(7294).createContext)(void 0);t.Z=n},9309:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(2122),i=r(9756),a=r(7294),o=["children"];function c(e){var t=e.children,r=(0,i.Z)(e,o);return a.createElement("div",(0,n.Z)({role:"tabpanel"},r),t)}},8952:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(7294),i=r(9443);var a=function(){var e=(0,n.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=r(6010),c="tabItem_2O3c",u="tabItemActive_Fpbe",s="tab_1pgU";var l=37,f=39;var m=function(e){var t=e.lazy,r=e.block,i=e.defaultValue,m=e.values,b=e.groupId,d=e.className,p=a(),v=p.tabGroupChoices,h=p.setTabGroupChoices,g=(0,n.useState)(i),y=g[0],w=g[1],O=n.Children.toArray(e.children),k=[];if(null!=b){var x=v[b];null!=x&&x!==y&&m.some((function(e){return e.value===x}))&&w(x)}var C=function(e){var t=e.currentTarget,r=k.indexOf(t),n=m[r].value;w(n),null!=b&&(h(b,n),setTimeout((function(){var e,r,n,i,a,o,c,s;(e=t.getBoundingClientRect(),r=e.top,n=e.left,i=e.bottom,a=e.right,o=window,c=o.innerHeight,s=o.innerWidth,r>=0&&a<=s&&i<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},N=function(e){var t,r;switch(e.keyCode){case f:var n=k.indexOf(e.target)+1;r=k[n]||k[0];break;case l:var i=k.indexOf(e.target)-1;r=k[i]||k[k.length-1]}null==(t=r)||t.focus()},E=function(e,t){return t.value===e||t.values&&-1!=t.values.indexOf(e)};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},d)},m.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,o.Z)("tabs__item",c,{"tabs__item--active":y===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:N,onFocus:C,onClick:C},r)}))),t?(0,n.cloneElement)(O.filter((function(e){return E(y,e.props)}))[0],{className:s}):n.createElement("div",null,O.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:!E(y,e.props),className:s})}))),n.createElement("br",null))}},3857:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var n=r(2122),i=r(9756),a=(r(7294),r(3905)),o=(r(8952),r(9309),r(4996),["components"]),c={},u="Rechargeable Abilities*",s={unversionedId:"items/rechargeable-abilities",id:"items/rechargeable-abilities",isDocsHomePage:!1,title:"Rechargeable Abilities*",description:"",source:"@site/docs/items/rechargeable-abilities.mdx",sourceDirName:"items",slug:"/items/rechargeable-abilities",permalink:"/RogueLibs/ru/docs/items/rechargeable-abilities",editUrl:"https://github.com/Abbysssal/RogueLibs/edit/master/website/docs/items/rechargeable-abilities.mdx",version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Creating a Custom Ability*",permalink:"/RogueLibs/ru/docs/items/create-ability"},next:{title:"Chargeable Abilities*",permalink:"/RogueLibs/ru/docs/items/chargeable-abilities"}},l=[],f={toc:l};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rechargeable-abilities"},"Rechargeable Abilities*"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Work-In-Progress")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"})))}m.isMDXComponent=!0},6010:function(e,t,r){"use strict";function n(e){var t,r,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(i&&(i+=" "),i+=r);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,r=0,i="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}r.d(t,{Z:function(){return i}})}}]);