(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[101],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(2263),a=n(3919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,s=void 0!==o&&o,c=i.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},9309:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(2122),a=n(9756),i=n(7294),o=["children"];function s(e){var t=e.children,n=(0,a.Z)(e,o);return i.createElement("div",(0,r.Z)({role:"tabpanel"},n),t)}},8952:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(7294),a=n(9443);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(6010),s="tabItem_2O3c",c="tabItemActive_Fpbe",l="tab_1pgU";var u=37,p=39;var m=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,m=e.values,d=e.groupId,h=e.className,f=i(),v=f.tabGroupChoices,g=f.setTabGroupChoices,k=(0,r.useState)(a),N=k[0],b=k[1],y=r.Children.toArray(e.children),w=[];if(null!=d){var C=v[d];null!=C&&C!==N&&m.some((function(e){return e.value===C}))&&b(C)}var x=function(e){var t=e.currentTarget,n=w.indexOf(t),r=m[n].value;b(r),null!=d&&(g(d,r),setTimeout((function(){var e,n,r,a,i,o,s,l;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,s=o.innerHeight,l=o.innerWidth,n>=0&&i<=l&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},S=function(e){var t,n;switch(e.keyCode){case p:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case u:var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()},R=function(e,t){return t.value===e||t.values&&-1!=t.values.indexOf(e)};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},h)},m.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":N===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:S,onFocus:x,onClick:x},n)}))),t?(0,r.cloneElement)(y.filter((function(e){return R(N,e.props)}))[0],{className:l}):r.createElement("div",null,y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:!R(N,e.props),className:l})}))),r.createElement("br",null))}},7383:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=(n(8952),n(9309),n(4996)),s=["components"],c={},l="Custom Sprites",u={unversionedId:"custom-sprites",id:"custom-sprites",isDocsHomePage:!1,title:"Custom Sprites",description:"Adding sprites as resources",source:"@site/docs/custom-sprites.mdx",sourceDirName:".",slug:"/custom-sprites",permalink:"/RogueLibs/docs/custom-sprites",editUrl:"https://github.com/Abbysssal/RogueLibs/edit/master/website/docs/custom-sprites.mdx",version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Custom Name Providers",permalink:"/RogueLibs/docs/names/name-providers"},next:{title:"Extra Stuff",permalink:"/RogueLibs/docs/extra"}},p=[{value:"Adding sprites as resources",id:"sprites-as-resources",children:[]},{value:"<code>RogueSprite</code>",id:"roguesprite",children:[]},{value:"Sprite variations",id:"sprite-variations",children:[]}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"custom-sprites"},"Custom Sprites"),(0,i.kt)("h2",{id:"sprites-as-resources"},"Adding sprites as resources"),(0,i.kt)("p",null,"First of all, get your sprites and convert them to PNG or JPEG, if they're not already PNG- or JPEG-encoded."),(0,i.kt)("p",null,"Then, change the files' extensions to ",(0,i.kt)("inlineCode",{parentName:"p"},".bin"),". This way Visual Studio will recognize the files as binary data instead of bitmaps."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Unfortunately, we can't import images from bitmaps, because Unity's System.Drawing.dll is just filled with stubs. So, we'll have to import images as binary data, until someone finds a better solution."))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Screenshot needed"))),(0,i.kt)("p",null,"Right-click on your project, go a-a-all the way down and click ",(0,i.kt)("strong",{parentName:"p"},"Properties"),":"),(0,i.kt)("img",{src:(0,o.Z)("/img/dev-extra/sprites/project-properties.png"),width:"300"}),(0,i.kt)("p",null,"Go to ",(0,i.kt)("strong",{parentName:"p"},"Resources")," tab and click on ",(0,i.kt)("em",{parentName:"p"},"that")," button to create a resources file:"),(0,i.kt)("img",{src:(0,o.Z)("/img/dev-extra/sprites/create-resources.png"),width:"800"}),(0,i.kt)("p",null,"Select ",(0,i.kt)("strong",{parentName:"p"},"Add resource")," at the top of the menu and click ",(0,i.kt)("strong",{parentName:"p"},"Add existing file..."),":"),(0,i.kt)("img",{src:(0,o.Z)("/img/dev-extra/sprites/add-resource.png"),width:"600"}),(0,i.kt)("p",null,"Now just find your images (with ",(0,i.kt)("inlineCode",{parentName:"p"},".bin")," extension) and add them as resources:"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Screenshot needed"))),(0,i.kt)("p",null,"Now you should be able to reference your sprites' data from the code like this: ",(0,i.kt)("inlineCode",{parentName:"p"},"Properties.Resources.<ResourceName>"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you get an error, then make sure that the default namespace, that is specified in project's properties in ",(0,i.kt)("strong",{parentName:"p"},"Application")," tab, is the same as the one you're using."))),(0,i.kt)("h2",{id:"roguesprite"},(0,i.kt)("inlineCode",{parentName:"h2"},"RogueSprite")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you're wondering, why it's called ",(0,i.kt)("inlineCode",{parentName:"p"},"RogueSprite")," and not ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomSprite"),", like most of the things in RogueLibs (",(0,i.kt)("inlineCode",{parentName:"p"},"CustomItem"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomTrait"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomEffect"),"), well, that's because it behaves slightly differently from others. ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomItem"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomTrait")," and etc. are hooks, while ",(0,i.kt)("inlineCode",{parentName:"p"},"RogueSprite"),", technically, is a collection of hooks. Also, it took an incredible amount of time and work to figure out that TK2D stuff and I just wanted to distinguish it from other classes."))),(0,i.kt)("p",null,"Normally, new instances of ",(0,i.kt)("inlineCode",{parentName:"p"},"RogueSprite")," are created like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"RogueLibs.CreateCustomItem<MyCustomItem>()\n    ...\n    // highlight-next-line\n    .WithSprite(Properties.Resources.MyCustomItem);\n")),(0,i.kt)("p",null,"But you can create them directly too, although you'll have to specify a name and a scope. Scope of the sprite determines what areas of the game the sprite will be available in. ",(0,i.kt)("inlineCode",{parentName:"p"},"SpriteScope.Items")," will work only on items, ",(0,i.kt)("inlineCode",{parentName:"p"},"SpriteScope.Objects")," - only on objects, and etc. You can specify multiple scopes too by combining them with ",(0,i.kt)("inlineCode",{parentName:"p"},"|")," operator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'RogueLibs.CreateCustomSprite("name", SpriteScope.Items, Properties.Resources.ResourceName);\n')),(0,i.kt)("p",null,"By default, RogueLibs uses the entire file as a texture. You can specify the region of the texture used with a ",(0,i.kt)("inlineCode",{parentName:"p"},"Rect")," parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'RogueLibs.CreateCustom("name", SpriteScope.Items, Properties.Resources.ResourceName,\n                                // highlight-next-line\n                                new Rect(32f, 32f, 64f, 64f));\n')),(0,i.kt)("p",null,"If you're going to use non-64x64 textures, then you need to specify the PPU (pixels-per-unit) parameter too:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'RogueLibs.CreateCustom("name", SpriteScope.Items, Properties.Resources.ResourceName,\n                                // highlight-next-line\n                                new Rect(64f, 64f, 128f, 128f), 128f);\n')),(0,i.kt)("h2",{id:"sprite-variations"},"Sprite variations"),(0,i.kt)("p",null,"If you have more than 1 sprite for your item, use ",(0,i.kt)("inlineCode",{parentName:"p"},"InvItem.LoadItemSprite")," in your item's ",(0,i.kt)("inlineCode",{parentName:"p"},"SetupDetails"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Present : CustomItem, IItemUsable\n{\n    [RLSetup]\n    public static void Setup()\n    {\n        RogueLibs.CreateCustomItem<Present>()\n            /* ... */\n            .WithSprite(Properties.Resources.Present);\n\n        RogueLibs.CreateCustomSprite("Present2", SpriteScope.Items, Properties.Resources.Present2);\n        RogueLibs.CreateCustomSprite("Present3", SpriteScope.Items, Properties.Resources.Present3);\n    }\n\n    public override void SetupDetails()\n    {\n        /* ... */\n        int rnd = new Random().Next(3) + 1;\n        // random integer x, such that 1 \u2264 x \u2264 3\n\n        if (rnd != 1) // load a different sprite if it\'s 2 or 3\n            Item.LoadItemSprite($"Present{rnd}");\n\n        // if it\'s 1, then the default "Present" will be used\n    }\n}\n')),(0,i.kt)("p",null,"This example works only if an item actually exists. In the Loadout and Rewards menus it will always have the ",(0,i.kt)("inlineCode",{parentName:"p"},"Present")," sprite. If you want the sprite in the menus to be randomly selected too, you'll have to ",(0,i.kt)("a",{parentName:"p",href:"./unlocks/overriding-behavior#examples"},"override the ",(0,i.kt)("inlineCode",{parentName:"a"},"DisplayedUnlock.GetImage")," method"),"."))}d.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);