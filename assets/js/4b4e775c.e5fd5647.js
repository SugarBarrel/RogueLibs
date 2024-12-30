"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6895],{1974:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=n(5893),r=n(1151),s=(n(5878),n(1016),n(4996));const i={},a="Getting Started",l={id:"dev/getting-started",title:"Getting Started",description:"Welcome to the SoR mod-making guide featuring RogueLibs! Library and tools provided by RogueLibs really simplify the modding process, but you'll still need some basic C# knowledge to get started. If you have any questions, feel free to ask them in the official Discord's #\ud83d\udd27|modding channel.",source:"@site/docs/dev/getting-started.mdx",sourceDirName:"dev",slug:"/dev/getting-started",permalink:"/RogueLibs/docs/dev/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/Chasmical/RogueLibs/edit/main/website/docs/dev/getting-started.mdx",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Frequently Encountered Problems",permalink:"/RogueLibs/docs/user/troubleshooting"},next:{title:"Creating a Custom Item",permalink:"/RogueLibs/docs/dev/items/create-item"}},u={},d=[{value:"Required software",id:"tools",level:2},{value:"New Way of Modding",id:"new-way-of-modding",level:2},{value:"Workspace Structure",id:"workspace-structure",level:2},{value:"<code>.ref</code> - References",id:"references",level:3},{value:"<code>.events</code> - PluginBuildEvents",id:"pluginbuildevents",level:3},{value:"Solution Folders",id:"solution-folders",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,o.jsxs)(t.p,{children:["Welcome to the SoR mod-making guide featuring RogueLibs! Library and tools provided by RogueLibs really simplify the modding process, but you'll still need some basic C# knowledge to get started. If you have any questions, feel free to ask them in the official Discord's ",(0,o.jsx)(t.a,{href:"https://discord.gg/m3zuHSwQw2",children:"#\ud83d\udd27|modding"})," channel."]}),"\n","\n","\n",(0,o.jsx)(t.h2,{id:"tools",children:"Required software"}),"\n",(0,o.jsx)(t.p,{children:"First of all, you'll need to install these tools:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.a,{href:"https://github.com/dnSpy/dnSpy/releases/latest",children:"dnSpy"})})," - a .NET assembly editor (and a debugger, but it's way too tedious to make it work for BepInEx and plugins). You're not gonna edit assemblies, just view them to see how the game and/or other plugins work."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.a,{href:"https://visualstudio.microsoft.com/downloads/",children:"Visual Studio 2022 Community"})})," - the Integrated Development Environment (IDE for short) that you'll be working in."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"new-way-of-modding",children:"New Way of Modding"}),"\n",(0,o.jsxs)(t.p,{children:["Instead of creating a project manually, we'll be using a ",(0,o.jsx)(t.strong,{children:"special template"})," with a ton of advantages!"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["The template is SDK-style, which means that:","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"You'll be able to use most of the features of the latest C# versions!"}),"\n",(0,o.jsx)(t.li,{children:"Less messing around with the settings and configurations!"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.li,{children:"No DLL Hell. All of the references are in a single designated folder!"}),"\n",(0,o.jsx)(t.li,{children:"PluginBuildEvents utility will move your mods to BepInEx/plugins automatically!"}),"\n",(0,o.jsx)(t.li,{children:"The template contains the base code to quickly start developing your mod!"}),"\n",(0,o.jsx)(t.li,{children:"Most of the stuff you could possibly need is already in the template!"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"You can just copy-paste the template, and start working on your mod in less than a minute!"}),"\n",(0,o.jsx)(t.h2,{id:"workspace-structure",children:"Workspace Structure"}),"\n",(0,o.jsxs)(t.p,{children:["First of all, ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.a,{href:"https://drive.google.com/file/d/1d1FH0Gh7egp7Z4QugsCF4aCE4-NgWD1X/view?usp=sharing",children:"download the workspace template"})})," and extract the ",(0,o.jsx)(t.code,{children:"sor-repos"})," folder."]}),"\n",(0,o.jsx)(t.admonition,{title:"Pro-tip: Managing repository directories",type:"tip",children:(0,o.jsxs)(t.p,{children:["You should put your repositories close to the root of the drive, so that they have much shorter and more manageable paths, like ",(0,o.jsx)(t.code,{children:"D:\\sor-repos"}),", ",(0,o.jsx)(t.code,{children:"F:\\rim-repos"})," (for Rimworld mods), ",(0,o.jsx)(t.code,{children:"E:\\uni-repos"})," (for university stuff) and etc. This way you'll always know the exact path to your projects, and all errors and warnings regarding the files will be much shorter and will contain less unnecessary information."]})}),"\n",(0,o.jsx)(t.p,{children:"Now let's see what this workspace has to offer!"}),"\n",(0,o.jsxs)(t.h3,{id:"references",children:[(0,o.jsx)(t.code,{children:".ref"})," - References"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:".ref"})," directory will contain all of the references for your mods. There are two kinds of them:"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:(0,o.jsx)(t.strong,{children:"Static references"})})," (that is, the ones that aren't updated frequently and mostly remain the same) are stored in the ",(0,o.jsx)(t.code,{children:"static"})," subdirectory. Most of the stuff that you can find in the ",(0,o.jsx)(t.code,{children:"/StreetsOfRogue_Data/Managed"})," directory goes here."]}),"\n",(0,o.jsx)("img",{src:(0,s.Z)("/img/setup/ref-static.png"),width:"600"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:(0,o.jsx)(t.strong,{children:"Dynamic references"})})," (the ones that change often) are ",(0,o.jsx)(t.code,{children:"Assembly-CSharp.dll"})," (that contains the game code) and ",(0,o.jsx)(t.code,{children:"RogueLibsCore.dll"})," (RogueLibs library). They are stored in the ",(0,o.jsx)(t.code,{children:".ref"})," directory itself, so you can update them more easily."]}),"\n",(0,o.jsx)("img",{src:(0,s.Z)("/img/setup/ref.png"),width:"600"}),"\n",(0,o.jsx)(t.admonition,{title:"Pro-tip: Documentation files",type:"tip",children:(0,o.jsxs)(t.p,{children:["Some references have documentation as a separate file, like ",(0,o.jsx)(t.code,{children:"RogueLibsCore.xml"}),". Make sure that you place it next to the .dll in the same folder. If you do, you'll be able to look up documentation on types and members right in Visual Studio!"]})}),"\n",(0,o.jsxs)(t.h3,{id:"pluginbuildevents",children:[(0,o.jsx)(t.code,{children:".events"})," - PluginBuildEvents"]}),"\n",(0,o.jsx)(t.p,{children:"PluginBuildEvents is a simple utility for copying your mods over to the BepInEx/plugins directory. The default project template includes it as a post-build event, so you just need to build your mod, and its file will be automatically moved!"}),"\n",(0,o.jsxs)(t.admonition,{title:"Non-Steam versions of the game",type:"note",children:[(0,o.jsx)(t.p,{children:"If you haven't purchased the Steam version of the game (or if you somehow messed up the Steam's installation path in the registry), then specify the full path to the game's root directory in the properties of your project (right-click on it in the Solution Explorer and select Properties > Build > Events):"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:'"$(SolutionDir)\\..\\.events\\PluginBuildEvents.exe" "$(TargetPath)" "D:\\Games\\Streets of Rogue"\n'})})]}),"\n",(0,o.jsx)(t.h3,{id:"solution-folders",children:"Solution Folders"}),"\n",(0,o.jsx)(t.p,{children:"All other folders should contain solutions with your projects:"}),"\n",(0,o.jsx)("img",{src:(0,s.Z)("/img/setup/solutions.png"),width:"600"}),"\n",(0,o.jsx)(t.p,{children:"To create a new one, just copy-paste the template one. You can also modify the template to fit your specific needs."})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1016:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var o=n(5893);function r(e){let{children:t,...n}=e;return(0,o.jsx)("div",{role:"tabpanel",...n,children:t})}},5878:(e,t,n)=>{n.d(t,{Z:()=>y});var o=n(7294),r=n(6550),s=n(469),i=n(1980),a=n(7392),l=n(12);function u(e){return function(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:r}}=e;return{value:t,label:n,attributes:o,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,a.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const s=(0,r.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=d(e),[a,u]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:i}))),[p,m]=h({queryString:n,groupId:r}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,l.Nk)(n);return[r,(0,o.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),b=(()=>{const e=p??f;return c({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{b&&u(b)}),[b]);return{selectedValue:a,selectValue:(0,o.useCallback)((e=>{if(!c({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);u(e),m(e),g(e)}),[m,g,i]),tabValues:i}}var m=n(512);const f={tabItem:"tabItem_V91s",tabItemActive:"tabItemActive_JsUu",blink:"blink_ZPVS",tab:"tab_ntnM"};var g=n(5893);const b={left:37,right:39};function y(e){const{lazy:t,defaultValue:n,values:r,groupId:s}=e,i=o.Children.toArray(e.children),{tabValues:a,selectedValue:l,selectValue:u}=p({children:i,defaultValue:n,values:r,groupId:s}),d=[],c=e=>{const t=e.currentTarget,n=r[d.indexOf(t)].value;u(n),null!=s&&setTimeout((()=>{(function(e){const{top:t,left:n,bottom:o,right:r}=e.getBoundingClientRect(),{innerHeight:s,innerWidth:i}=window;return t>=0&&r<=i&&o<=s&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(f.tabItemActive),setTimeout((()=>t.classList.remove(f.tabItemActive)),2e3))}),150)},h=e=>{let t;switch(e.keyCode){case b.right:{const n=d.indexOf(e.target)+1;t=d[n]||d[0];break}case b.left:{const n=d.indexOf(e.target)-1;t=d[n]||d[d.length-1];break}default:return}t.focus()},y=(e,t)=>t.value===e||t.values&&-1!=t.values.indexOf(e);return(0,g.jsxs)("div",{className:"tabs-container",children:[(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:"tabs",children:r.map((e=>{let{value:t,label:n}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,className:(0,m.Z)("tabs__item",f.tabItem,{"tabs__item--active":l===t}),ref:e=>e&&d.push(e),onKeyDown:h,onFocus:c,onClick:c,children:n},t)}))}),t?o.cloneElement(i.find((e=>y(l,e.props))),{className:f.tab}):(0,g.jsx)("div",{children:i.map(((e,t)=>o.cloneElement(e,{key:t,hidden:!y(l,e.props),className:f.tab})))}),(0,g.jsx)("br",{})]})}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var o=n(7294);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);