"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6895],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1016:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(3117),i=n(102),r=n(7294),o=["children"];function l(e){var t=e.children,n=(0,i.Z)(e,o);return r.createElement("div",(0,a.Z)({role:"tabpanel"},n),t)}},2099:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7294),i=n(9443);var r=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(6010),l="tabItem_2O3c",s="tabItemActive_Fpbe",p="tab_1pgU";var u=37,c=39;function m(e){var t=e.lazy,n=e.defaultValue,i=e.values,m=e.groupId,d=r(),g=d.tabGroupChoices,h=d.setTabGroupChoices,k=(0,a.useState)(n),v=k[0],N=k[1],f=a.Children.toArray(e.children),y=[];if(null!=m){var b=g[m];null!=b&&b!==v&&i.some((function(e){return e.value===b}))&&N(b)}var w=function(e){var t=e.currentTarget,n=y.indexOf(t),a=i[n].value;N(a),null!=m&&(h(m,a),setTimeout((function(){var e,n,a,i,r,o,l,p;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,o=window,l=o.innerHeight,p=o.innerWidth,n>=0&&r<=p&&i<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},C=function(e){var t;switch(e.keyCode){case c:var n=y.indexOf(e.target)+1;t=y[n]||y[0];break;case u:var a=y.indexOf(e.target)-1;t=y[a]||y[y.length-1];break;default:return}t.focus()},x=function(e,t){return t.value===e||t.values&&-1!=t.values.indexOf(e)};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:"tabs"},i.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":v===t}),key:t,ref:function(e){return e&&y.push(e)},onKeyDown:C,onFocus:w,onClick:w},n)}))),t?a.cloneElement(f.find((function(e){return x(v,e.props)})),{className:p}):a.createElement("div",null,f.map((function(e,t){return a.cloneElement(e,{key:t,hidden:!x(v,e.props),className:p})}))),a.createElement("br",null))}},2573:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),o=(n(2099),n(1016),n(4996)),l=["components"],s={},p="Getting Started",u={unversionedId:"dev/getting-started",id:"dev/getting-started",title:"Getting Started",description:"Required software",source:"@site/docs/dev/getting-started.mdx",sourceDirName:"dev",slug:"/dev/getting-started",permalink:"/RogueLibs/docs/dev/getting-started",editUrl:"https://github.com/Abbysssal/RogueLibs/edit/main/website/docs/dev/getting-started.mdx",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Frequently Encountered Problems",permalink:"/RogueLibs/docs/user/troubleshooting"},next:{title:"Creating a Custom Item",permalink:"/RogueLibs/docs/dev/items/create-item"}},c=[{value:"Required software",id:"tools",children:[],level:2},{value:"Creating a project",id:"creating-project",children:[],level:2},{value:"Referencing RogueLibs and game&#39;s assembly",id:"references",children:[],level:2},{value:"Writing a basic plugin",id:"basic-plugin",children:[],level:2},{value:"&quot;Hello World!&quot; plugin example",id:"hello-world",children:[],level:2}],m={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("h2",{id:"tools"},"Required software"),(0,r.kt)("p",null,"First of all, you'll need to install these tools:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/dnSpy/dnSpy/releases/latest"},"dnSpy"))," - a .NET assembly editor (and a debugger, but it's way too tedious to make it work for BepInEx and plugins). You're not gonna edit assemblies, just view them to see how the game and/or other plugins works.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://visualstudio.microsoft.com/downloads/"},"Visual Studio 2019 Community"))," - the Integrated Development Environment (IDE for short) that you'll be working in."))),(0,r.kt)("h2",{id:"creating-project"},"Creating a project"),(0,r.kt)("p",null,"Alright, open Visual Studio and ",(0,r.kt)("strong",{parentName:"p"},"Create a new project"),":"),(0,r.kt)("img",{src:(0,o.Z)("/img/setup/creating-project.png"),width:"800"}),(0,r.kt)("p",null,"Find and select a template called ",(0,r.kt)("strong",{parentName:"p"},"Class Library (.NET Framework)"),", then click ",(0,r.kt)("strong",{parentName:"p"},"Next"),":"),(0,r.kt)("img",{src:(0,o.Z)("/img/setup/selecting-template.png"),width:"800"}),(0,r.kt)("p",null,"Enter your project's name, without spaces or hyphens, just letters. Select .NET Framework ",(0,r.kt)("strong",{parentName:"p"},"version 4.5.2"),", then click ",(0,r.kt)("strong",{parentName:"p"},"Create"),"."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Pro-tip: Repositories directory")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can create a directory for your repositories in the root of one of your drives, for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"D:\\repos"),". It's way shorter, more accessible and simpler to use than the default ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\Users\\$USER\\source\\repos"),"."))),(0,r.kt)("img",{src:(0,o.Z)("/img/setup/configuring-project.png"),width:"800"}),(0,r.kt)("h2",{id:"references"},"Referencing RogueLibs and game's assembly"),(0,r.kt)("p",null,"Create a folder called ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Libraries"))," in your solution's directory. We'll put all referenced ",(0,r.kt)("inlineCode",{parentName:"p"},".dll"),"s in there."),(0,r.kt)("img",{src:(0,o.Z)("/img/setup/libraries-folder.png"),width:"800"}),(0,r.kt)("p",null,"Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"<GameName>_Data/Managed")," in the game's root, grab the following files and put them in ",(0,r.kt)("inlineCode",{parentName:"p"},"Libraries"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Assembly-CSharp.dll"))," - assembly with all of the game's code."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"netstandard.dll"))," - Idk, for some reason, it's required sometimes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"UnityEngine.dll"))," and ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"UnityEngine.CoreModule.dll"))," - Unity assemblies.")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you don't have a required assembly referenced, you'll see an error in Visual Studio's ",(0,r.kt)("strong",{parentName:"p"},"Error List"),".",(0,r.kt)("br",null),"In that case, go to ",(0,r.kt)("inlineCode",{parentName:"p"},"<GameName>_Data/Managed")," again and grab the missing assembly."))),(0,r.kt)("p",null,"Then go to ",(0,r.kt)("inlineCode",{parentName:"p"},"BepInEx/core")," in the game's root and grab these too:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"BepInEx.dll"))," and ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"BepInEx.xml")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"0Harmony.dll")," and ",(0,r.kt)("inlineCode",{parentName:"em"},"0Harmony.xml")," - in case you want to transpile-patch or do the patching yourself."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/Abbysssal/RogueLibs/releases/latest"},"Download the latest RogueLibs version"),".")),(0,r.kt)("p",null,"You'll need only two files: ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"RogueLibsCore.dll")," and ",(0,r.kt)("inlineCode",{parentName:"strong"},"RogueLibsCore.xml")),". Put them in ",(0,r.kt)("inlineCode",{parentName:"p"},"Libraries")," too:"),(0,r.kt)("img",{src:(0,o.Z)("/img/setup/libraries-folder-2.png"),width:"800"}),(0,r.kt)("p",null,"Now open Visual Studio, find your project in ",(0,r.kt)("strong",{parentName:"p"},"Solution Explorer"),", right-click on ",(0,r.kt)("strong",{parentName:"p"},"References")," and click ",(0,r.kt)("strong",{parentName:"p"},"Add Reference..."),":"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Btw, you can remove all of the default references."))),(0,r.kt)("img",{src:(0,o.Z)("/img/setup/references.png"),width:"400"}),(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},"Reference Manager")," click ",(0,r.kt)("strong",{parentName:"p"},"Browse..."),", select all ",(0,r.kt)("inlineCode",{parentName:"p"},".dll"),"s in your ",(0,r.kt)("inlineCode",{parentName:"p"},"Libraries")," folder and click ",(0,r.kt)("strong",{parentName:"p"},"Add"),"."),(0,r.kt)("img",{src:(0,o.Z)("/img/setup/references-2.png"),width:"800"}),(0,r.kt)("h2",{id:"basic-plugin"},"Writing a basic plugin"),(0,r.kt)("p",null,"Add all necessary ",(0,r.kt)("inlineCode",{parentName:"p"},"using"),"s:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Class1.cs"',title:'"Class1.cs"'},"// highlight-start\nusing System;\nusing System.IO;\nusing System.Linq;\nusing System.Collections;\nusing System.Collections.Generic;\nusing System.Reflection;\nusing System.Text;\nusing BepInEx;\nusing UnityEngine;\nusing RogueLibsCore;\n// highlight-end\n\nnamespace MyCoolMod\n{\n    public class Class1\n    {\n        \n    }\n}\n")),(0,r.kt)("p",null,"Add a class deriving from ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseUnityPlugin"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCoolPlugin.cs"',title:'"MyCoolPlugin.cs"'},"namespace MyCoolMod\n{\n    // highlight-next-line\n    public class MyCoolPlugin : BaseUnityPlugin\n    {\n    }\n}\n")),(0,r.kt)("p",null,"Add a ",(0,r.kt)("inlineCode",{parentName:"p"},"BepInPlugin")," attribute to it with your plugin's ",(0,r.kt)("abbr",{title:"Globally Unique Identifier"},"GUID"),", name and version.",(0,r.kt)("br",{parentName:"p"}),"\n","You can also put ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"s right into the attribute, without using ",(0,r.kt)("inlineCode",{parentName:"p"},"const"),"s, if you want."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCoolPlugin.cs"',title:'"MyCoolPlugin.cs"'},'// highlight-next-line\n[BepInPlugin(pluginGUID, pluginName, pluginVersion)]\npublic class MyCoolPlugin : BaseUnityPlugin\n{\n    // highlight-start\n    public const string pluginGUID = "myusername.streetsofrogue.mycoolmod";\n    public const string pluginName = "My Cool Mod";\n    public const string pluginVersion = "0.1.0";\n    // highlight-end\n}\n')),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Once you've published your mod, ",(0,r.kt)("strong",{parentName:"p"},"do not change its GUID!")," If you do, all dependency trees related to your mod will break. Even if no one uses your mod as a framework, some developers might have added ",(0,r.kt)("inlineCode",{parentName:"p"},"BepInIncompatibility")," with your mod's GUID. If you want to change the GUID, then create a new mod, replacing the old one."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Pro-tip: Semantic versioning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"I recommend using ",(0,r.kt)("a",{parentName:"p",href:"https://semver.org"},"semantic versioning")," in your mods."))),(0,r.kt)("p",null,"Add a ",(0,r.kt)("inlineCode",{parentName:"p"},"BepInDependency")," attribute with RogueLibs and add Unity's ",(0,r.kt)("inlineCode",{parentName:"p"},"Awake()")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCoolPlugin.cs"',title:'"MyCoolPlugin.cs"'},'[BepInPlugin(pluginGUID, pluginName, pluginVersion)]\n// highlight-next-line\n[BepInDependency(RogueLibs.GUID, RogueLibs.CompiledVersion)]\npublic class MyCoolPlugin : BaseUnityPlugin\n{\n    public const string pluginGUID = "myusername.streetsofrogue.mycoolmod";\n    public const string pluginName = "My Cool Mod";\n    public const string pluginVersion = "0.1.0";\n\n    // highlight-start\n    public void Awake()\n    {\n        // your code goes here\n    }\n    // highlight-end\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Now just explore the docs and make stuff!")),(0,r.kt)("h2",{id:"hello-world"},'"Hello World!" plugin example'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCoolPlugin.cs"',title:'"MyCoolPlugin.cs"'},'using System;\nusing System.IO;\nusing System.Linq;\nusing System.Collections;\nusing System.Collections.Generic;\nusing System.Reflection;\nusing System.Text;\nusing BepInEx;\nusing UnityEngine;\nusing RogueLibsCore;\n\nnamespace MyCoolMod\n{\n    [BepInPlugin(pluginGUID, pluginName, pluginVersion)]\n    [BepInDependency(RogueLibs.GUID, RogueLibs.CompiledVersion)]\n    public class MyCoolPlugin : BaseUnityPlugin\n    {\n        public const string pluginGUID = "myusername.streetsofrogue.mycoolmod";\n        public const string pluginName = "My Cool Mod";\n        public const string pluginVersion = "0.1.0";\n\n        public static ManualLogSource MyLogger;\n        // so you can reference it in patches\n\n        public void Awake()\n        {\n            MyLogger = Logger;\n            Logger.LogMessage("Hello World!");\n        }\n    }\n}\n')))}d.isMDXComponent=!0}}]);