(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[349],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),c=r,N=s["".concat(d,".").concat(c)]||s[c]||k[c]||l;return n?a.createElement(N,i(i({ref:t},m),{},{components:n})):a.createElement(N,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7161:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return s}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i=["components"],o={},d="\u0421\u043e\u0431\u044b\u0442\u0438\u044f \u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0432 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0435",p={unversionedId:"dev-items/inventory-events",id:"dev-items/inventory-events",isDocsHomePage:!1,title:"\u0421\u043e\u0431\u044b\u0442\u0438\u044f \u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0432 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0435",description:"\u0421\u043e\u0431\u044b\u0442\u0438\u044f \u0432 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0435",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/dev-items/inventory-events.mdx",sourceDirName:"dev-items",slug:"/dev-items/inventory-events",permalink:"/RogueLibs/ru/docs/dev-items/inventory-events",editUrl:"https://github.com/Abbysssal/RogueLibs/edit/master/docs/docs/dev-items/inventory-events.mdx",version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u043c\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b",permalink:"/RogueLibs/ru/docs/dev-items/combinable-items"},next:{title:"\u0414\u0440\u0443\u0433\u0438\u0435 \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u0432\u0435\u0449\u0438",permalink:"/RogueLibs/ru/docs/dev-extra/other"}},m=[{value:"\u0421\u043e\u0431\u044b\u0442\u0438\u044f \u0432 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0435",id:"inventory-events",children:[]},{value:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0432 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0435",id:"inventory-checks",children:[{value:"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0432 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0435",id:"adding-checks",children:[]},{value:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0432 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e",id:"default-checks",children:[]}]}],k={toc:m};function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u0441\u043e\u0431\u044b\u0442\u0438\u044f-\u0438-\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438-\u0432-\u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0435"},"\u0421\u043e\u0431\u044b\u0442\u0438\u044f \u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0432 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0435"),(0,l.kt)("h2",{id:"inventory-events"},"\u0421\u043e\u0431\u044b\u0442\u0438\u044f \u0432 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0435"),(0,l.kt)("p",null,"\u041a\u043b\u0430\u0441\u0441 ",(0,l.kt)("inlineCode",{parentName:"p"},"InventoryEvents")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0432\u044b\u0437\u043e\u0432\u0430 \u0438 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0438 \u043d\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u044f, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u0441 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0451\u043c, \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430, \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u043e\u0432 \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430 \u043d\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0435 \u0438 \u0434\u0440. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c ",(0,l.kt)("inlineCode",{parentName:"p"},"InventoryEvents"),", \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0439 \u0441 \u0438\u0432\u0435\u043d\u0442\u0430\u0440\u0451\u043c, \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043c\u0435\u0442\u043e\u0434\u0430-\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"GetEvents()"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"InventoryEvents events = Inventory.GetEvents();\n")),(0,l.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u044d\u0442\u0438 \u0441\u043e\u0431\u044b\u0442\u0438\u044f:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"events.OnItemUsed += Events_OnItemUsed;\n...\npublic void Events_OnItemUsed(OnItemUsedArgs e)\n{\n    ...\n}\n")),(0,l.kt)("p",null,"\u0422\u0443\u0442 \u0442\u0430\u043a\u0436\u0435 \u0435\u0441\u0442\u044c \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 ",(0,l.kt)("inlineCode",{parentName:"p"},"InventoryEvents"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442 ",(0,l.kt)("strong",{parentName:"p"},"\u0432\u0441\u0435")," \u0441\u043e\u0431\u044b\u0442\u0438\u044f:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"InventoryEvents.Global.OnItemsCombined += Global_OnItemsCombined;\n...\npublic void Global_OnItemsCombined(OnItemsCombinedArgs e)\n{\n    ...\n}\n")),(0,l.kt)("h2",{id:"inventory-checks"},"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0432 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0435"),(0,l.kt)("p",null,"\u0418\u0442\u0430\u043a, \u0432\u043c\u0435\u0441\u0442\u043e \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u0441\u0432\u043e\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'if (Owner.statusEffects.hasTrait("BloodRestoresHealth"))\n{\n    Owner.SayDialogue("WontEatThis");\n    return;\n}\nif (Owner.statusEffects.hasTrait("OilRestoresHealth"))\n{\n    Owner.SayDialogue("WontEatThat");\n    return;\n}\nif (Owner.health == Owner.maxHealth)\n{\n    Owner.SayDialogue("NoImFull");\n    return;\n}\n...\n')),(0,l.kt)("p",null,"RogueLibs \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0434\u0435\u043b\u0430\u0442\u044c \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 - ",(0,l.kt)("strong",{parentName:"p"},"\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0432 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0435"),', \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0430 \u0432\u0441\u0435\u0445 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430\u0445, \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u043c \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f\u043c (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u043c\u0435\u044e\u0442 \u0442\u0438\u043f "Food" \u0438 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e "Alcohol"). \u042d\u0442\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0432 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0435 \u0442\u0430\u043a\u0436\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u044e\u0442 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u043e\u0441\u0442\u044b\u0435 \u0432\u0435\u0449\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0434\u0434\u0435\u0440\u044b \u0437\u0430\u0431\u044b\u0432\u0430\u044e\u0442 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430 \u0438\u0437 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u044f \u0438\u043b\u0438 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f, \u043a\u043e\u0433\u0434\u0430 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430 \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u0440\u0430\u0432\u043d\u044b\u043c 0.'),(0,l.kt)("h3",{id:"adding-checks"},"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0432 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0435"),(0,l.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("span",{style:{filter:"invert(100%)"}},(0,l.kt)("b",null,"\u041e\u0442\u043a\u0440\u044b\u0442\u044b\u0439 API \u043f\u0440\u043e\u0432\u0435\u0440\u043e\u043a \u0432 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0435 \u043c\u043e\u0436\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c\u0441\u044f.")))),(0,l.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u0442\u044c \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u044c ",(0,l.kt)("inlineCode",{parentName:"p"},'"Vegetarian"'),", \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0434\u0430\u0432\u0430\u0442\u044c \u0438\u0433\u0440\u043e\u043a\u0430\u043c \u0443\u043f\u043e\u0442\u0440\u0435\u0431\u043b\u044f\u0442\u044c \u0435\u0434\u0443 \u0441 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0435\u0439 ",(0,l.kt)("inlineCode",{parentName:"p"},'"Meat"'),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'InventoryEvents.OnItemUseCheck += e =>\n{\n    if (!e.Item.IgnoresUseItemCheck("Vegetarian") && e.User.HasTrait("Vegetarian")\n        && e.Item.itemType == ItemTypes.Food && e.Item.Categories.Contains("Meat"))\n    {\n        // \u0434\u0435\u043b\u0430\u0435\u043c \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0438\u0433\u0440\u043e\u043a\u0443 \u043f\u043e\u0447\u0435\u043c\u0443 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c\n        e.User.gc.audioHandler.Play(e.User, "CantDo");\n        // \u0441\u0442\u0430\u0432\u0438\u043c Cancel \u0438 Handled \u043d\u0430 true\n        e.Cancel = e.Handled = true;\n    }\n};\n')),(0,l.kt)("p",null,"\u0423 \u043a\u043b\u0430\u0441\u0441\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"RogueEventArgs")," \u0435\u0441\u0442\u044c \u0434\u0432\u0430 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430: ",(0,l.kt)("inlineCode",{parentName:"p"},"Cancel")," \u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"Handled"),". \u0415\u0441\u043b\u0438 \u0432\u044b\u0441\u0442\u0430\u0432\u0438\u0442\u044c ",(0,l.kt)("inlineCode",{parentName:"p"},"Handled")," \u043d\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", \u0442\u043e \u0432\u0441\u0435 \u0434\u0440\u0443\u0433\u0438\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u044b. \u0415\u0441\u0442\u044c \u0432\u044b\u0441\u0442\u0430\u0432\u0438\u0442\u044c ",(0,l.kt)("inlineCode",{parentName:"p"},"Cancel")," \u043d\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", \u0442\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u043f\u0440\u043e\u0438\u0437\u043e\u0439\u0442\u0438, \u043d\u0435 \u043f\u0440\u043e\u0438\u0437\u043e\u0439\u0434\u0451\u0442. \u041e\u0431\u044b\u0447\u043d\u043e, \u043e\u043d\u0438 \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043d\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e."),(0,l.kt)("p",null,"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0432 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u043e\u0438\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043e\u043c ",(0,l.kt)("inlineCode",{parentName:"p"},"IgnoreChecks"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'[ItemCategories(RogueCategories.Food, RogueCategories.Weird, "Meat")]\npublic class MysteryFood : CustomItem, IItemUsable\n{\n    // highlight-next-line\n    [IgnoreChecks("Vegetarian")]\n    public void UseItem()\n    {\n        e.User.ChangeHealth(Item.healthChange);\n        Count--;\n        e.User.SayDialogue("\u041c\u043c\u043c, \u0432\u043a\u0443\u0441\u043d\u043e. \u0418\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e, \u0447\u0442\u043e \u0436\u0435 \u0442\u0430\u043c \u0431\u044b\u043b\u043e...");\n        UseItemAnim();\n    }\n}\n')),(0,l.kt)("h3",{id:"default-checks"},"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0432 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"),(0,l.kt)("h4",{id:"useitem-checks"},(0,l.kt)("inlineCode",{parentName:"h4"},"UseItem")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u0423\u0441\u043b\u043e\u0432\u0438\u044f"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u0424\u0440\u0430\u0437\u0430"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Ghost")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u0418\u0433\u0440\u043e\u043a - \u043f\u0440\u0438\u0437\u0440\u0430\u043a."),(0,l.kt)("td",{parentName:"tr",align:"left"},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"CantInteract")),(0,l.kt)("td",{parentName:"tr",align:"left"},'\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u044c "\u0411\u0435\u0437\u043c\u043e\u0437\u0433\u043b\u044b\u0439", ',(0,l.kt)("strong",{parentName:"td"},"\u041d\u0415")," \u0442\u0438\u043f Food."),(0,l.kt)("td",{parentName:"tr",align:"left"},'"???" \u0438\u043b\u0438 "\u0420-\u0440-\u0440-\u0440-\u0440!!!!!"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"OnlyOil")),(0,l.kt)("td",{parentName:"tr",align:"left"},'\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u044c "\u0411\u0435\u043d\u0437\u0438\u043d\u043e\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c", \u0442\u0438\u043f Food \u0438 (\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f Food \u0438\u043b\u0438 Alcohol).'),(0,l.kt)("td",{parentName:"tr",align:"left"},'"\u041c\u043d\u0435 \u043d\u0443\u0436\u0435\u043d \u0431\u0435\u043d\u0437\u0438\u043d..."')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"OnlyOilMedicine")),(0,l.kt)("td",{parentName:"tr",align:"left"},'\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u044c "\u0411\u0435\u043d\u0437\u0438\u043d\u043e\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c", \u0442\u0438\u043f Consumable \u0438 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f Health.'),(0,l.kt)("td",{parentName:"tr",align:"left"},'"\u041c\u043d\u0435 \u043d\u0443\u0436\u0435\u043d \u0431\u0435\u043d\u0437\u0438\u043d..."')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"OnlyBlood")),(0,l.kt)("td",{parentName:"tr",align:"left"},'\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u044c "\u041a\u0440\u043e\u0432\u043e\u043f\u0438\u0439\u0446\u0430", \u0442\u0438\u043f Food \u0438 (\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f Food \u0438\u043b\u0438 Alcohol).'),(0,l.kt)("td",{parentName:"tr",align:"left"},'"\u0424\u0443, \u0433\u0430\u0434\u043e\u0441\u0442\u044c, \u044f \u043d\u0435 \u0431\u0443\u0434\u0443 \u044d\u0442\u043e \u0435\u0441\u0442\u044c!"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"OnlyBloodMedicine")),(0,l.kt)("td",{parentName:"tr",align:"left"},'\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u044c "\u041a\u0440\u043e\u0432\u043e\u043f\u0438\u0439\u0446\u0430", \u0442\u0438\u043f Consumable \u0438 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f Health.'),(0,l.kt)("td",{parentName:"tr",align:"left"},'"\u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0430 \u0434\u043b\u044f \u043b\u044e\u0434\u0435\u0439, \u043c\u043d\u0435 \u043d\u0443\u0436\u043d\u0430 \u041a\u0420\u041e\u0412\u042c!"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"OnlyCharge")),(0,l.kt)("td",{parentName:"tr",align:"left"},'\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u044c "\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439", \u0442\u0438\u043f Food \u0438 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f Food.'),(0,l.kt)("td",{parentName:"tr",align:"left"},'"\u0423 \u043c\u0435\u043d\u044f \u043d\u0435\u0442 \u0436\u0435\u043b\u0443\u0434\u043a\u0430."')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"OnlyHumanFlesh")),(0,l.kt)("td",{parentName:"tr",align:"left"},'\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u044c "\u042f\u0440\u044b\u0439 \u043a\u0430\u043d\u043d\u0438\u0431\u0430\u043b\u0438\u0437\u043c", \u0442\u0438\u043f Food \u0438 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f Food.'),(0,l.kt)("td",{parentName:"tr",align:"left"},'"\u0424\u0443, \u0433\u0430\u0434\u043e\u0441\u0442\u044c, \u044f \u043d\u0435 \u0431\u0443\u0434\u0443 \u044d\u0442\u043e \u0435\u0441\u0442\u044c!"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"HealthFull")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u0417\u0434\u043e\u0440\u043e\u0432\u044c\u0435 \u0438\u0433\u0440\u043e\u043a\u0430 \u043f\u043e\u043b\u043d\u043e\u0435 \u0438 ",(0,l.kt)("inlineCode",{parentName:"td"},"healthChange")," \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430 \u0431\u043e\u043b\u044c\u0448\u0435 0."),(0,l.kt)("td",{parentName:"tr",align:"left"},'"\u041d\u0435 \u043d\u0430\u0434\u043e, \u0443 \u043c\u0435\u043d\u044f \u0438 \u0442\u0430\u043a \u0432\u0441\u0435 \u0432 \u043f\u043e\u0440\u044f\u0434\u043a\u0435!"')))),(0,l.kt)("h4",{id:"combinefilter-checks"},(0,l.kt)("inlineCode",{parentName:"h4"},"CombineFilter")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u0423\u0441\u043b\u043e\u0432\u0438\u044f"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u0427\u0442\u043e \u043f\u0440\u043e\u0438\u0437\u043e\u0439\u0434\u0451\u0442"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"StackItems")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u0423 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u043e\u0432 \u043e\u0434\u043d\u043e \u0438 \u0442\u043e \u0436\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u041e\u043d\u0438 \u0431\u0443\u0434\u0443\u0442 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u044b \u0432 \u043e\u0434\u0438\u043d")))),(0,l.kt)("h4",{id:"combineitems-checks"},(0,l.kt)("inlineCode",{parentName:"h4"},"CombineItems")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u0423\u0441\u043b\u043e\u0432\u0438\u044f"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u0427\u0442\u043e \u043f\u0440\u043e\u0438\u0437\u043e\u0439\u0434\u0451\u0442"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"StopOnZero")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430 \u0440\u0430\u0432\u043d\u043e 0, \u0438\u043b\u0438 \u043f\u0440\u0435\u0434\u043c\u0435\u0442 \u043d\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0435"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u0412\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435/\u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e")))),(0,l.kt)("h4",{id:"combinetooltip-checks"},(0,l.kt)("inlineCode",{parentName:"h4"},"CombineTooltip")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u0423\u0441\u043b\u043e\u0432\u0438\u044f"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u0427\u0442\u043e \u043f\u0440\u043e\u0438\u0437\u043e\u0439\u0434\u0451\u0442"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"CombineFilter")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u041c\u0435\u0442\u043e\u0434 ",(0,l.kt)("inlineCode",{parentName:"td"},"CombineFilter")," \u0432\u0435\u0440\u043d\u0443\u043b ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," \u0434\u043b\u044f \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u041f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0430 \u0431\u0443\u0434\u0435\u0442 \u043f\u0443\u0441\u0442\u043e\u0439")))),(0,l.kt)("h4",{id:"targetfilter-checks"},(0,l.kt)("inlineCode",{parentName:"h4"},"TargetFilter")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u0423\u0441\u043b\u043e\u0432\u0438\u044f"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u0427\u0442\u043e \u043f\u0440\u043e\u0438\u0437\u043e\u0439\u0434\u0451\u0442"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Distance")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u0426\u0435\u043b\u0435\u0432\u043e\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 \u043d\u0430 \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0438 \u0431\u043e\u043b\u044c\u0448\u0435 15 \u0435\u0434\u0438\u043d\u0438\u0446"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"ButlerBot")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u0426\u0435\u043b\u044c - \u0420\u043e\u0431\u043e\u0442-\u0434\u0432\u043e\u0440\u0435\u0446\u043a\u0438\u0439"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"EmptyMech")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u0426\u0435\u043b\u044c - \u043f\u0443\u0441\u0442\u043e\u0439 \u041c\u0435\u0445"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h4",{id:"targetobject-checks"},(0,l.kt)("inlineCode",{parentName:"h4"},"TargetObject")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u0423\u0441\u043b\u043e\u0432\u0438\u044f"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u0427\u0442\u043e \u043f\u0440\u043e\u0438\u0437\u043e\u0439\u0434\u0451\u0442"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"StopOnZero")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430 \u0440\u0430\u0432\u043d\u043e 0, \u0438\u043b\u0438 \u043f\u0440\u0435\u0434\u043c\u0435\u0442 \u043d\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0435"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u0412\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435/\u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e")))),(0,l.kt)("h4",{id:"targettooltip-checks"},(0,l.kt)("inlineCode",{parentName:"h4"},"TargetTooltip")),(0,l.kt)("p",null,"\u041d\u0435\u0442\u0443."))}s.isMDXComponent=!0}}]);