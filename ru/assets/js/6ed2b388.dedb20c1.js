"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1685],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=m(n),c=i,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||r;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8318:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=n(7462),i=(n(7294),n(3905));const r={title:"RogueLibs v3.5.0 enters beta",author:"Abbysssal",author_title:"Creator of RogueLibs",author_url:"https://github.com/Chasmical",author_image_url:"https://github.com/Chasmical.png",tags:["roguelibs"],description:"Information about the v3.5.0-beta",image:"https://i.imgur.com/XaNGCx7.png",hide_table_of_contents:!1},o=void 0,l={permalink:"/RogueLibs/ru/blog/2022/01/30/roguelibs-v3.5.0-beta",editUrl:"https://github.com/Chasmical/RogueLibs/edit/main/website/blog/blog/2022-01-30/roguelibs-v3.5.0-beta.mdx",source:"@site/blog/2022-01-30/roguelibs-v3.5.0-beta.mdx",title:"RogueLibs v3.5.0 enters beta",description:"Information about the v3.5.0-beta",date:"2022-01-30T00:00:00.000Z",formattedDate:"30 \u044f\u043d\u0432\u0430\u0440\u044f 2022 \u0433.",tags:[{label:"roguelibs",permalink:"/RogueLibs/ru/blog/tags/roguelibs"}],readingTime:1.305,hasTruncateMarker:!0,authors:[{name:"Abbysssal",title:"Creator of RogueLibs",url:"https://github.com/Chasmical",imageURL:"https://github.com/Chasmical.png"}],frontMatter:{title:"RogueLibs v3.5.0 enters beta",author:"Abbysssal",author_title:"Creator of RogueLibs",author_url:"https://github.com/Chasmical",author_image_url:"https://github.com/Chasmical.png",tags:["roguelibs"],description:"Information about the v3.5.0-beta",image:"https://i.imgur.com/XaNGCx7.png",hide_table_of_contents:!1},nextItem:{title:"What I hate about SoR",permalink:"/RogueLibs/ru/blog/2021/08/31/what-i-hate-about-sor"}},p={authorsImageUrls:[void 0]},m=[],s={toc:m},d="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Today RogueLibs v3.5.0 enters a long beta, because there's a huge list of stuff that needs to be done before the release, mainly adding new custom interactions without adding more patches. You'll be able to download the beta version on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Chasmical/RogueLibs/releases"},"RogueLibs' releases page"),"."),(0,i.kt)("p",null,"Just like the localization system in v3.1.0, v3.5.0 will completely replace the vanilla interactions system. The original code in these places is absolutely awful and inconsistent. So, we'll have to rewrite every single vanilla interaction to be moddable."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9597).Z,width:"1096",height:"497"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},'In RogueLibs v3.5.0-beta.X all of the objects will have this button. And by "that button" I mean the "I am patched!" one, not "Make Offering of Human Body" one. It will be removed from the v3.5.0 full release, of course.')),(0,i.kt)("p",null,'Click "Read More" to see the entire to-do list.'),(0,i.kt)("p",null,"\u274c",(0,i.kt)("inlineCode",{parentName:"p"},"Agent"),", \u2705",(0,i.kt)("inlineCode",{parentName:"p"},"AirConditioner"),", \u2705",(0,i.kt)("inlineCode",{parentName:"p"},"AlarmButton"),", \u2705",(0,i.kt)("inlineCode",{parentName:"p"},"Altar"),", \u2705",(0,i.kt)("inlineCode",{parentName:"p"},"AmmoDispenser"),", \u274c",(0,i.kt)("inlineCode",{parentName:"p"},"ArcadeGame"),", \u274c",(0,i.kt)("inlineCode",{parentName:"p"},"ATMMachine"),", \u274c",(0,i.kt)("inlineCode",{parentName:"p"},"AugmentationBooth"),", \u2705",(0,i.kt)("inlineCode",{parentName:"p"},"Barbecue"),", \u274c",(0,i.kt)("inlineCode",{parentName:"p"},"BarbedWire"),", \u274c",(0,i.kt)("inlineCode",{parentName:"p"},"Bars"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"BarStool"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"Bathtub"),", \u274c",(0,i.kt)("inlineCode",{parentName:"p"},"Bed"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"Boulder"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"BoulderSmall"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"Bush"),", \u274c",(0,i.kt)("inlineCode",{parentName:"p"},"CapsuleMachine"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"Chair"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"ChestBasic"),", \u274c",(0,i.kt)("inlineCode",{parentName:"p"},"CloneMachine"),", \u274c",(0,i.kt)("inlineCode",{parentName:"p"},"Computer"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"Counter"),", \u274c",(0,i.kt)("inlineCode",{parentName:"p"},"Crate"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"Desk"),", \u274c",(0,i.kt)("inlineCode",{parentName:"p"},"Door"),", \u274c",(0,i.kt)("inlineCode",{parentName:"p"},"Elevator"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"ExplodingBarrel"),", \u274c",(0,i.kt)("inlineCode",{parentName:"p"},"FireHydrant"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"FirePlace"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"FireSpewer"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"FlameGrate"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"FlamingBarrel"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"GasVent"),", \u274c",(0,i.kt)("inlineCode",{parentName:"p"},"Generator"),", \u274c",(0,i.kt)("inlineCode",{parentName:"p"},"Generator2"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"Gravestone"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),", \u274c",(0,i.kt)("inlineCode",{parentName:"p"},"Jukebox"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"KillerPlant"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"Lamp"),", \u274c",(0,i.kt)("inlineCode",{parentName:"p"},"LaserEmitter"),", \u274c",(0,i.kt)("inlineCode",{parentName:"p"},"LoadoutMachine"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"LockdownWall"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"Manhole"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"MineCart"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"MovieScreen"),", \u274c",(0,i.kt)("inlineCode",{parentName:"p"},"PawnShopMachine"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"Plant"),", \u274c",(0,i.kt)("inlineCode",{parentName:"p"},"Podium"),", \u274c",(0,i.kt)("inlineCode",{parentName:"p"},"PoliceBox"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"PoolTable"),", \u274c",(0,i.kt)("inlineCode",{parentName:"p"},"PowerBox"),", \u274c",(0,i.kt)("inlineCode",{parentName:"p"},"Refrigerator"),", \u274c",(0,i.kt)("inlineCode",{parentName:"p"},"Safe"),", \u274c",(0,i.kt)("inlineCode",{parentName:"p"},"SatelliteDish"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"SawBlade"),", \u274c",(0,i.kt)("inlineCode",{parentName:"p"},"SecurityCam"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"Shelf"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"Sign"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"SlimeBarrel"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"SlimePuddle"),", \u274c",(0,i.kt)("inlineCode",{parentName:"p"},"SlotMachine"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"Speaker"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"StartingPoint"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"Stove"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"SwitchBasic"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"Table"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"TableBig"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"Television"),", \u274c",(0,i.kt)("inlineCode",{parentName:"p"},"Toilet"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"Train"),", \u274c",(0,i.kt)("inlineCode",{parentName:"p"},"TrapDoor"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"TrashCan"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"Tree"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"Tube"),", \u274c",(0,i.kt)("inlineCode",{parentName:"p"},"Turntables"),", \u274c",(0,i.kt)("inlineCode",{parentName:"p"},"Turret"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"VendorCart"),", \u274c(?)",(0,i.kt)("inlineCode",{parentName:"p"},"WasteBasket"),", \u274c",(0,i.kt)("inlineCode",{parentName:"p"},"WaterPump"),", \u274c",(0,i.kt)("inlineCode",{parentName:"p"},"Well"),", \u274c",(0,i.kt)("inlineCode",{parentName:"p"},"Window"),"."),(0,i.kt)("admonition",{title:"Legend",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u274c - not implemented, \ud83d\udd39 - not tested, \u2705 - implemented, (?) - may be tricky to implement.")),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/m3zuHSwQw2"},"#modding channel")," on the ",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/invite/streetsofrogue"},"official SoR's Discord server")," for an up-to-date information. The list in this article will not be updated."))}u.isMDXComponent=!0},9597:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-b9e5ad9c8cef2ea5f300209d6747fa7e.png"}}]);