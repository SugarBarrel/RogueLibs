(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[583],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),v=s(r),d=o,m=v["".concat(c,".").concat(d)]||v[d]||f[d]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=v;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},3919:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},4996:function(e,t,r){"use strict";r.d(t,{C:function(){return i},Z:function(){return a}});var n=r(2263),o=r(3919);function i(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,a=i.forcePrependBaseUrl,u=void 0!==a&&a,c=i.absolute,s=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(u)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+l:l}(i,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},9443:function(e,t,r){"use strict";var n=(0,r(7294).createContext)(void 0);t.Z=n},9309:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(2122),o=r(9756),i=r(7294),a=["children"];function u(e){var t=e.children,r=(0,o.Z)(e,a);return i.createElement("div",(0,n.Z)({role:"tabpanel"},r),t)}},8952:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var n=r(7294),o=r(9443);var i=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},a=r(6010),u="tabItem_2O3c",c="tabItemActive_Fpbe",s="tab_1pgU";var l=37,f=39;var v=function(e){var t=e.lazy,r=e.block,o=e.defaultValue,v=e.values,d=e.groupId,m=e.className,p=i(),b=p.tabGroupChoices,h=p.setTabGroupChoices,g=(0,n.useState)(o),y=g[0],k=g[1],w=n.Children.toArray(e.children),O=[];if(null!=d){var x=b[d];null!=x&&x!==y&&v.some((function(e){return e.value===x}))&&k(x)}var C=function(e){var t=e.currentTarget,r=O.indexOf(t),n=v[r].value;k(n),null!=d&&(h(d,n),setTimeout((function(){var e,r,n,o,i,a,u,s;(e=t.getBoundingClientRect(),r=e.top,n=e.left,o=e.bottom,i=e.right,a=window,u=a.innerHeight,s=a.innerWidth,r>=0&&i<=s&&o<=u&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},N=function(e){var t,r;switch(e.keyCode){case f:var n=O.indexOf(e.target)+1;r=O[n]||O[0];break;case l:var o=O.indexOf(e.target)-1;r=O[o]||O[O.length-1]}null==(t=r)||t.focus()},E=function(e,t){return t.value===e||t.values&&-1!=t.values.indexOf(e)};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},m)},v.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,a.Z)("tabs__item",u,{"tabs__item--active":y===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:N,onFocus:C,onClick:C},r)}))),t?(0,n.cloneElement)(w.filter((function(e){return E(y,e.props)}))[0],{className:s}):n.createElement("div",null,w.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:!E(y,e.props),className:s})}))),n.createElement("br",null))}},8854:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return v}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),a=(r(8952),r(9309),r(4996),["components"]),u={},c="Overriding Default Behavior*",s={unversionedId:"unlocks/overriding-behavior",id:"unlocks/overriding-behavior",isDocsHomePage:!1,title:"Overriding Default Behavior*",description:"",source:"@site/docs/unlocks/overriding-behavior.mdx",sourceDirName:"unlocks",slug:"/unlocks/overriding-behavior",permalink:"/RogueLibs/ru/docs/unlocks/overriding-behavior",editUrl:"https://github.com/Abbysssal/RogueLibs/edit/master/website/docs/unlocks/overriding-behavior.mdx",version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Custom Mutators*",permalink:"/RogueLibs/ru/docs/unlocks/custom-mutators"},next:{title:"Custom Names",permalink:"/RogueLibs/ru/docs/names/custom-names"}},l=[],f={toc:l};function v(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overriding-default-behavior"},"Overriding Default Behavior*"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Work-In-Progress")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"})))}v.isMDXComponent=!0},6010:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}r.d(t,{Z:function(){return o}})}}]);