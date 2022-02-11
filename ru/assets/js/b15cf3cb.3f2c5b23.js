"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7577],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,v=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(v,o(o({ref:t},l),{},{components:n})):r.createElement(v,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1016:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7462),a=n(3366),i=n(7294),o=["children"];function s(e){var t=e.children,n=(0,a.Z)(e,o);return i.createElement("div",(0,r.Z)({role:"tabpanel"},n),t)}},250:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7294),a=n(5773),i=n(6010),o="tabItem_V91s",s="tabItemActive_JsUu",p="tab_ntnM";var c=37,l=39;function u(e){var t=e.lazy,n=e.defaultValue,u=e.values,m=e.groupId,d=(0,a.UB)(),v=d.tabGroupChoices,g=d.setTabGroupChoices,k=(0,r.useState)(n),f=k[0],h=k[1],N=r.Children.toArray(e.children),b=[];if(null!=m){var C=v[m];null!=C&&C!==f&&u.some((function(e){return e.value===C}))&&h(C)}var w=function(e){var t=e.currentTarget,n=b.indexOf(t),r=u[n].value;h(r),null!=m&&(g(m,r),setTimeout((function(){var e,n,r,a,i,o,p,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,p=o.innerHeight,c=o.innerWidth,n>=0&&i<=c&&a<=p&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},y=function(e){var t;switch(e.keyCode){case l:var n=b.indexOf(e.target)+1;t=b[n]||b[0];break;case c:var r=b.indexOf(e.target)-1;t=b[r]||b[b.length-1];break;default:return}t.focus()},S=function(e,t){return t.value===e||t.values&&-1!=t.values.indexOf(e)};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:"tabs"},u.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":f===t}),key:t,ref:function(e){return e&&b.push(e)},onKeyDown:y,onFocus:w,onClick:w},n)}))),t?r.cloneElement(N.find((function(e){return S(f,e.props)})),{className:p}):r.createElement("div",null,N.map((function(e,t){return r.cloneElement(e,{key:t,hidden:!S(f,e.props),className:p})}))),r.createElement("br",null))}},7438:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=(n(250),n(1016),n(4996)),s=["components"],p={},c="\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0435 \u0441\u043f\u0440\u0430\u0439\u0442\u044b",l={unversionedId:"dev/custom-sprites",id:"dev/custom-sprites",title:"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0435 \u0441\u043f\u0440\u0430\u0439\u0442\u044b",description:"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0441\u043f\u0440\u0430\u0439\u0442\u044b \u043a\u0430\u043a \u0440\u0435\u0441\u0443\u0440\u0441\u044b",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/dev/custom-sprites.mdx",sourceDirName:"dev",slug:"/dev/custom-sprites",permalink:"/RogueLibs/ru/docs/dev/custom-sprites",editUrl:"https://github.com/SugarBarrel/RogueLibs/edit/main/website/docs/dev/custom-sprites.mdx",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"\u041f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0445 \u0438\u043c\u0451\u043d",permalink:"/RogueLibs/ru/docs/dev/names/name-providers"},next:{title:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e",permalink:"/RogueLibs/ru/docs/dev/extra"}},u=[{value:"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0441\u043f\u0440\u0430\u0439\u0442\u044b \u043a\u0430\u043a \u0440\u0435\u0441\u0443\u0440\u0441\u044b",id:"sprites-as-resources",children:[],level:2},{value:"<code>RogueSprite</code>",id:"roguesprite",children:[],level:2},{value:"\u0420\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0441\u043f\u0440\u0430\u0439\u0442\u044b",id:"sprite-variations",children:[],level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0435-\u0441\u043f\u0440\u0430\u0439\u0442\u044b"},"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0435 \u0441\u043f\u0440\u0430\u0439\u0442\u044b"),(0,i.kt)("h2",{id:"sprites-as-resources"},"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0441\u043f\u0440\u0430\u0439\u0442\u044b \u043a\u0430\u043a \u0440\u0435\u0441\u0443\u0440\u0441\u044b"),(0,i.kt)("p",null,"\u0412\u043e-\u043f\u0435\u0440\u0432\u044b\u0445, \u0432\u043e\u0437\u044c\u043c\u0438\u0442\u0435 \u0441\u0432\u043e\u0438 \u0441\u043f\u0440\u0430\u0439\u0442\u044b \u0438 \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0438\u0445 \u0432 PNG \u0438\u043b\u0438 JPEG, \u0435\u0441\u043b\u0438 \u043e\u043d\u0438 \u0443\u0436\u0435 \u043d\u0435 \u0432 PNG \u0438\u043b\u0438 JPEG \u0444\u043e\u0440\u043c\u0430\u0442\u0435."),(0,i.kt)("p",null,"\u041f\u043e\u0442\u043e\u043c, \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f \u0444\u0430\u0439\u043b\u043e\u0432 \u043d\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},".bin"),". \u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c Visual Studio \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442 \u0444\u0430\u0439\u043b\u044b \u043a\u0430\u043a \u0434\u0432\u043e\u0438\u0447\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432\u043c\u0435\u0441\u0442\u043e \u0440\u0430\u0441\u0442\u0440\u043e\u0432\u044b\u0445 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u043c\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u043c \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0438\u0437 \u0440\u0430\u0441\u0442\u0440\u043e\u0432\u044b\u0445 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439, \u0442\u0430\u043a \u043a\u0430\u043a System.Drawing.dll Unity \u043f\u0440\u043e\u0441\u0442\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d \u043e\u0431\u0440\u0443\u0431\u043a\u0430\u043c\u0438. \u0418 \u043f\u043e\u044d\u0442\u043e\u043c\u0443, \u043d\u0430\u043c \u043f\u0440\u0438\u0434\u0451\u0442\u0441\u044f \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043a\u0430\u043a \u0434\u0432\u043e\u0438\u0447\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435, \u043f\u043e\u043a\u0430 \u043a\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c \u043d\u0435 \u043d\u0430\u0439\u0434\u0451\u0442 \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u0443\u0447\u0448\u0435."))),(0,i.kt)("img",{src:(0,o.Z)("/img/i18n/ru/custom-sprites/rename-bin.png"),width:"500"}),(0,i.kt)("p",null,"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u043e\u0439 \u043a\u043d\u043e\u043f\u043a\u043e\u0439 \u043f\u043e \u0441\u0432\u043e\u0435\u043c\u0443 \u043f\u0440\u043e\u0435\u043a\u0442\u0443, \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0430-\u0430-\u0430\u043c\u044b\u0439 \u043d\u0438\u0437 \u0438 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 ",(0,i.kt)("strong",{parentName:"p"},"\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430"),":"),(0,i.kt)("img",{src:(0,o.Z)("/img/i18n/ru/custom-sprites/project-properties.png"),width:"300"}),(0,i.kt)("p",null,"\u041f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432\u043e \u0432\u043a\u043b\u0430\u0434\u043a\u0443 ",(0,i.kt)("strong",{parentName:"p"},"\u0420\u0435\u0441\u0443\u0440\u0441\u044b")," \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 ",(0,i.kt)("em",{parentName:"p"},"\u0442\u0443")," \u043a\u043d\u043e\u043f\u043a\u0443, \u0447\u0442\u043e\u0431\u044b \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0444\u0430\u0439\u043b \u0441 \u0440\u0435\u0441\u0443\u0440\u0441\u0430\u043c\u0438:"),(0,i.kt)("img",{src:(0,o.Z)("/img/i18n/ru/custom-sprites/create-resources.png"),width:"800"}),(0,i.kt)("p",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 ",(0,i.kt)("strong",{parentName:"p"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0440\u0435\u0441\u0443\u0440\u0441")," \u043d\u0430 \u0432\u0435\u0440\u0445\u0443 \u043c\u0435\u043d\u044e \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 ",(0,i.kt)("strong",{parentName:"p"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439 \u0444\u0430\u0439\u043b..."),":"),(0,i.kt)("img",{src:(0,o.Z)("/img/i18n/ru/custom-sprites/add-resources.png"),width:"600"}),(0,i.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c \u043d\u0430\u0439\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f (\u0441 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435\u043c ",(0,i.kt)("inlineCode",{parentName:"p"},".bin"),") \u0438 \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0438\u0445 \u043a\u0430\u043a \u0440\u0435\u0441\u0443\u0440\u0441\u044b:"),(0,i.kt)("img",{src:(0,o.Z)("/img/i18n/ru/custom-sprites/select-resources.png"),width:"600"}),(0,i.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u0441\u044b\u043b\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432\u0430\u0448\u0438\u0445 \u0441\u043f\u0440\u0430\u0439\u0442\u043e\u0432 \u0438\u0437 \u043a\u043e\u0434\u0430 \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c: ",(0,i.kt)("inlineCode",{parentName:"p"},"Properties.Resources.<\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u0420\u0435\u0441\u0443\u0440\u0441\u0430>"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u043e\u0448\u0438\u0431\u043a\u0430, \u0442\u043e \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u0438\u043c\u0451\u043d \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0435 \u0432 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0432\u043e \u0432\u043a\u043b\u0430\u0434\u043a\u0435 ",(0,i.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"),", \u0442\u043e \u0436\u0435 \u0441\u0430\u043c\u043e\u0435, \u0447\u0442\u043e \u0432\u044b \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435."))),(0,i.kt)("h2",{id:"roguesprite"},(0,i.kt)("inlineCode",{parentName:"h2"},"RogueSprite")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u0415\u0441\u043b\u0438 \u0432\u0430\u043c \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e, \u043f\u043e\u0447\u0435\u043c\u0443 \u043e\u043d \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f ",(0,i.kt)("inlineCode",{parentName:"p"},"RogueSprite"),", \u0430 \u043d\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomSprite"),", \u043a\u0430\u043a \u043f\u043e\u0447\u0442\u0438 \u0432\u0441\u0435 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0448\u0442\u0443\u043a\u0438 \u0432 RogueLibs (",(0,i.kt)("inlineCode",{parentName:"p"},"CustomItem"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomTrait"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomEffect"),"), \u043d\u0443 \u0447\u0442\u043e \u0436, \u044d\u0442\u043e \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043e\u043d \u0432\u0435\u0434\u0451\u0442 \u0441\u0435\u0431\u044f \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u043f\u043e-\u0434\u0440\u0443\u0433\u043e\u043c\u0443. ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomItem"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomTrait")," \u0438 \u0434\u0440. - \u0445\u0443\u043a\u0438, \u0432 \u0442\u043e \u0432\u0440\u0435\u043c\u044f \u043a\u0430\u043a ",(0,i.kt)("inlineCode",{parentName:"p"},"RogueSprite"),", \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438, \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u0445\u0443\u043a\u043e\u0432. \u0410 \u0435\u0449\u0451, \u044f \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u043b \u043d\u0435\u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0438 \u0440\u0430\u0431\u043e\u0442\u044b, \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0432 \u044d\u0442\u043e\u0439 TK2D \u0435\u0440\u0443\u043d\u0434\u0435 \u0438 \u044f \u043f\u0440\u043e\u0441\u0442\u043e \u0445\u043e\u0442\u0435\u043b \u043e\u0442\u043b\u0438\u0447\u0438\u0442\u044c \u0435\u0433\u043e \u043e\u0442 \u0434\u0440\u0443\u0433\u0438\u0445 \u043a\u043b\u0430\u0441\u0441\u043e\u0432."))),(0,i.kt)("p",null,"\u041e\u0431\u044b\u0447\u043d\u043e, \u043d\u043e\u0432\u044b\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"RogueSprite")," \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0432\u043e\u0442 \u0442\u0430\u043a:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"RogueLibs.CreateCustomItem<MyCustomItem>()\n    ...\n    // highlight-next-line\n    .WithSprite(Properties.Resources.MyCustomItem);\n")),(0,i.kt)("p",null,"\u041d\u043e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0438\u0445 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u0442\u043e\u0436\u0435, \u043d\u043e \u0432 \u0442\u0430\u043a\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0432\u0430\u043c \u043f\u0440\u0438\u0434\u0451\u0442\u0441\u044f \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0438 \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f. \u041e\u0431\u043b\u0430\u0441\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0441\u043f\u0440\u0430\u0439\u0442\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0432 \u043a\u0430\u043a\u0438\u0445 \u043e\u0431\u043b\u0430\u0441\u0442\u044f\u0445 \u0438\u0433\u0440\u044b \u0441\u043f\u0440\u0430\u0439\u0442 \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d. ",(0,i.kt)("inlineCode",{parentName:"p"},"SpriteScope.Items")," \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430\u0445, ",(0,i.kt)("inlineCode",{parentName:"p"},"SpriteScope.Objects")," - \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u0445, \u0438 \u0442.\u0434. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043e\u0431\u043b\u0430\u0441\u0442\u0435\u0439 \u0442\u043e\u0436\u0435, \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0432 \u0438\u0445 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"|"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'RogueLibs.CreateCustomSprite("name", SpriteScope.Items, Properties.Resources.ResourceName);\n')),(0,i.kt)("p",null,"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, RogueLibs \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0432\u0435\u0441\u044c \u0444\u0430\u0439\u043b \u0434\u043b\u044f \u0442\u0435\u043a\u0441\u0442\u0443\u0440\u044b. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043d\u0443\u0436\u043d\u0443\u044e \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0442\u0435\u043a\u0441\u0442\u0443\u0440\u044b ",(0,i.kt)("inlineCode",{parentName:"p"},"Rect")," \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u043c:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'RogueLibs.CreateCustom("name", SpriteScope.Items, Properties.Resources.ResourceName,\n                                // highlight-next-line\n                                new Rect(32f, 32f, 64f, 64f));\n')),(0,i.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 \u0442\u0435\u043a\u0441\u0442\u0443\u0440\u044b \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u043c, \u043e\u0442\u043b\u0438\u0447\u0430\u044e\u0449\u0438\u043c\u0441\u044f \u043e\u0442 64x64, \u0442\u043e \u0432\u0430\u043c \u0442\u0430\u043a\u0436\u0435 \u043d\u0430\u0434\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c PPU (pixels-per-unit) \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'RogueLibs.CreateCustom("name", SpriteScope.Items, Properties.Resources.ResourceName,\n                                // highlight-next-line\n                                new Rect(64f, 64f, 128f, 128f), 128f);\n')),(0,i.kt)("h2",{id:"sprite-variations"},"\u0420\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0441\u043f\u0440\u0430\u0439\u0442\u044b"),(0,i.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430 \u0431\u043e\u043b\u0435\u0435 \u043e\u0434\u043d\u043e\u0433\u043e \u0441\u043f\u0440\u0430\u0439\u0442\u0430, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"InvItem.LoadItemSprite")," \u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"SetupDetails")," \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Present : CustomItem, IItemUsable\n{\n    [RLSetup]\n    public static void Setup()\n    {\n        RogueLibs.CreateCustomItem<Present>()\n            /* ... */\n            .WithSprite(Properties.Resources.Present);\n\n        RogueLibs.CreateCustomSprite("Present2", SpriteScope.Items, Properties.Resources.Present2);\n        RogueLibs.CreateCustomSprite("Present3", SpriteScope.Items, Properties.Resources.Present3);\n    }\n\n    public override void SetupDetails()\n    {\n        /* ... */\n        int rnd = new Random().Next(3) + 1;\n        // \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435 \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e x, \u0442\u0430\u043a\u043e\u0435 \u0447\u0442\u043e 1 \u2264 x \u2264 3\n\n        if (rnd != 1) // \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0434\u0440\u0443\u0433\u043e\u0439 \u0441\u043f\u0440\u0430\u0439\u0442, \u0435\u0441\u043b\u0438 \u044d\u0442\u043e 2 \u0438\u043b\u0438 3\n            Item.LoadItemSprite($"Present{rnd}");\n\n        // \u0435\u0441\u043b\u0438 \u044d\u0442\u043e 1, \u0441\u043f\u0440\u0430\u0439\u0442 "Present" \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e\n    }\n}\n')),(0,i.kt)("p",null,"\u042d\u0442\u043e\u0442 \u043f\u0440\u0438\u043c\u0435\u0440 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0441\u043b\u0438 \u043f\u0440\u0435\u0434\u043c\u0435\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442. \u0412 \u041e\u0431\u0432\u0435\u0441\u0435 \u0438 \u041c\u0435\u043d\u044e \u043d\u0430\u0433\u0440\u0430\u0434 \u0443 \u043d\u0435\u0433\u043e \u0432\u0441\u0435\u0433\u0434\u0430 \u0431\u0443\u0434\u0435\u0442 \u0441\u043f\u0440\u0430\u0439\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"Present"),". \u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0447\u0442\u043e\u0431\u044b \u0441\u043f\u0440\u0430\u0439\u0442 \u0432 \u043c\u0435\u043d\u044e \u0442\u0430\u043a\u0436\u0435 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e \u0432\u044b\u0431\u0438\u0440\u0430\u043b\u0441\u044f, \u0432\u0430\u043c \u043f\u0440\u0438\u0434\u0451\u0442\u0441\u044f ",(0,i.kt)("a",{parentName:"p",href:"./unlocks/overriding-behavior#examples"},"\u043f\u0435\u0440\u0435\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043c\u0435\u0442\u043e\u0434 ",(0,i.kt)("inlineCode",{parentName:"a"},"DisplayedUnlock.GetImage")),"."))}d.isMDXComponent=!0}}]);