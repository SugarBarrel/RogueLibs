"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9207],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1016:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7462),o=n(7294);function r(e){let{children:t,...n}=e;return o.createElement("div",(0,a.Z)({role:"tabpanel"},n),t)}},5878:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7294),o=n(6550),r=n(1980),i=n(7392),l=n(12);function s(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??s(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const i=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,r._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(i.location.search);t.set(l,e),i.replace({...i.location,search:t.toString()})}),[l,i])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,r=u(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[p,m]=d({queryString:n,groupId:o}),[g,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,l.Nk)(n);return[o,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),h=(()=>{const e=p??g;return c({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!c({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),m(e),k(e)}),[m,k,r]),tabValues:r}}var m=n(6010);const g={tabItem:"tabItem_V91s",tabItemActive:"tabItemActive_JsUu",blink:"blink_ZPVS",tab:"tab_ntnM"};const k={left:37,right:39};function h(e){const{lazy:t,defaultValue:n,values:o,groupId:r}=e,i=a.Children.toArray(e.children),{tabValues:l,selectedValue:s,selectValue:u}=p({children:i,defaultValue:n,values:o,groupId:r}),c=[],d=e=>{const t=e.currentTarget,n=o[c.indexOf(t)].value;u(n),null!=r&&setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:o}=e.getBoundingClientRect(),{innerHeight:r,innerWidth:i}=window;return t>=0&&o<=i&&a<=r&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(g.tabItemActive),setTimeout((()=>t.classList.remove(g.tabItemActive)),2e3))}),150)},h=e=>{let t;switch(e.keyCode){case k.right:{const n=c.indexOf(e.target)+1;t=c[n]||c[0];break}case k.left:{const n=c.indexOf(e.target)-1;t=c[n]||c[c.length-1];break}default:return}t.focus()},b=(e,t)=>t.value===e||t.values&&-1!=t.values.indexOf(e);return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:"tabs"},o.map((e=>{let{value:t,label:n}=e;return a.createElement("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,className:(0,m.Z)("tabs__item",g.tabItem,{"tabs__item--active":s===t}),key:t,ref:e=>e&&c.push(e),onKeyDown:h,onFocus:d,onClick:d},n)}))),t?a.cloneElement(i.find((e=>b(s,e.props))),{className:g.tab}):a.createElement("div",null,i.map(((e,t)=>a.cloneElement(e,{key:t,hidden:!b(s,e.props),className:g.tab})))),a.createElement("br",null))}},2168:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(7462),o=(n(7294),n(3905)),r=n(5878),i=n(1016);n(4996);const l={},s="Configuring Unlocks",u={unversionedId:"dev/unlocks/configuring-unlocks",id:"dev/unlocks/configuring-unlocks",title:"Configuring Unlocks",description:"Custom unlocks' displayed names, descriptions, images, buttons and their order in the list can be configured. You can even determine your own unlock conditions, change the displayed text and sprites conditionally and stuff like that.",source:"@site/docs/dev/unlocks/configuring-unlocks.mdx",sourceDirName:"dev/unlocks",slug:"/dev/unlocks/configuring-unlocks",permalink:"/RogueLibs/docs/dev/unlocks/configuring-unlocks",draft:!1,editUrl:"https://github.com/SugarBarrel/RogueLibs/edit/main/website/docs/dev/unlocks/configuring-unlocks.mdx",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Custom Unlocks",permalink:"/RogueLibs/docs/dev/unlocks/custom-unlocks"},next:{title:"Custom Names",permalink:"/RogueLibs/docs/dev/names/custom-names"}},c={},d=[{value:"Sorting",id:"sorting",level:2},{value:"Overrideable methods",id:"methods",level:2},{value:"<code>UnlockWrapper</code>",id:"unlockwrapper",level:3},{value:"<code>DisplayedUnlock</code>",id:"displayedunlock",level:3},{value:"Examples",id:"examples",level:2}],p={toc:d},m="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuring-unlocks"},"Configuring Unlocks"),(0,o.kt)("p",null,"Custom unlocks' displayed names, descriptions, images, buttons and their order in the list can be configured. You can even determine your own unlock conditions, change the displayed text and sprites conditionally and stuff like that."),(0,o.kt)("h2",{id:"sorting"},"Sorting"),(0,o.kt)("p",null,"Unlocks are first sorted by their ",(0,o.kt)("inlineCode",{parentName:"p"},"SortingOrder"),", then by their state (unlocked, purchasable, available and locked), and then by their ",(0,o.kt)("inlineCode",{parentName:"p"},"SortingIndex"),". You can ignore the sorting by the state by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"IgnoreStateSorting")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("p",null,"Here's an example of how this sorting would work:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SortingOrder = -400"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Unlocked"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SortingIndex = -3"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SortingIndex = 1"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SortingIndex = 2"),";"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Purchasable"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"..."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Available"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"..."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Locked"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"..."))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SortingOrder = -3"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"..."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SortingOrder = 0")," (vanilla unlocks go here, with sorting index of 0):",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"..."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SortingOrder = 1"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"..."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SortingOrder = 500"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"...")))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The menu might get weird or even crash if not all unlocks on the current ",(0,o.kt)("inlineCode",{parentName:"p"},"SortingOrder")," have ",(0,o.kt)("inlineCode",{parentName:"p"},"IgnoreStateSorting")," set to the same value. So make sure that all other unlocks have ",(0,o.kt)("inlineCode",{parentName:"p"},"IgnoreStateSorting")," set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," too.")),(0,o.kt)("h2",{id:"methods"},"Overrideable methods"),(0,o.kt)("h3",{id:"unlockwrapper"},(0,o.kt)("inlineCode",{parentName:"h3"},"UnlockWrapper")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="UnlockWrapper.cs"',title:'"UnlockWrapper.cs"'},"// called when the unlock is initialized and integrated into the game\npublic virtual void SetupUnlock() { }\n\n// called pretty often to determine if it can be unlocked right now\npublic virtual void UpdateUnlock()\n{\n    if ((Unlock.nowAvailable = !Unlock.unlocked && CanBeUnlocked()) && UnlockCost is 0)\n        gc.unlocks.DoUnlockForced(Name, Type);\n}\n\n// determines whether the unlock can be unlocked right now\npublic virtual bool CanBeUnlocked() => UnlockCost > -1\n    && Unlock.prerequisites.TrueForAll(c => gc.sessionDataBig.unlocks.Exists(u => u.unlockName == c && u.unlocked));\n\n// gets the unlock's raw name, without any rich text, costs and values\npublic virtual string GetName() => gc.nameDB.GetName(Name, Unlock.unlockNameType);\n\n// gets the unlock's raw description, without any rich text, costs and values\npublic virtual string GetDescription() => gc.nameDB.GetName(Name, Unlock.unlockDescriptionType);\n\n// gets the unlock's image (displayed in the menus)\npublic virtual Sprite GetImage() => RogueFramework.ExtraSprites.TryGetValue(Name, out Sprite image) ? image;\n")),(0,o.kt)("admonition",{title:"Pro-tip",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can see for yourself how these methods are implemented in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SugarBarrel/RogueLibs/blob/main/RogueLibsCore/Hooks/Unlocks/UnlockWrapper.cs"},"RogueLibs' source code"),".")),(0,o.kt)("h3",{id:"displayedunlock"},(0,o.kt)("inlineCode",{parentName:"h3"},"DisplayedUnlock")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="DisplayedUnlock.cs"',title:'"DisplayedUnlock.cs"'},"// called when the button is updated. `UpdateUnlock` is called right before this.\npublic virtual void UpdateButton() => UpdateButton(IsEnabled, UnlockButtonState.Selected, UnlockButtonState.Normal);\n\nprotected void UpdateButton(bool isEnabledOrSelected, UnlockButtonState selected, UnlockButtonState normal)\n{\n    Text = GetFancyName();\n    State = IsUnlocked ? isEnabledOrSelected ? selected : normal\n        : Unlock.nowAvailable && UnlockCost > -1 ? UnlockButtonState.Purchasable\n        : UnlockButtonState.Locked;\n}\n\n// called when the button is pressed. See other unlocks' implementations for more info\npublic abstract void OnPushedButton();\n\n// gets the unlock's \"fancy\" name, with rich text formatting, costs and point values\npublic virtual string GetFancyName()\n{\n    /* A lot of stuff, see RogueLibs' source code for more information */\n}\n\n// gets the unlock's \"fancy\" description, with rich text formatting, cancellations, prerequisites and recommendations\npublic virtual string GetFancyDescription()\n{\n    /* A lot of stuff, see RogueLibs' source code for more information */\n}\n")),(0,o.kt)("admonition",{title:"Pro-tip",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can see for yourself how these methods are implemented in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SugarBarrel/RogueLibs/blob/main/RogueLibsCore/Hooks/Unlocks/DisplayedUnlock.cs"},"RogueLibs' source code"),".")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(r.Z,{defaultValue:"present",values:[{label:"Present (sprite variations)",value:"present"},{label:"Random Items Button",value:"randomitems"},{label:"Categories",value:"categories"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"present",mdxType:"TabItem"},(0,o.kt)("p",null,"Let's say, you want to make an ",(0,o.kt)("a",{parentName:"p",href:"../custom-sprites#sprite-variations"},"item called Present, and it has 3 different sprites"),"."),(0,o.kt)("p",null,"First of all, you'll need to create an unlock class deriving from ",(0,o.kt)("inlineCode",{parentName:"p"},"ItemUnlock"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="PresentUnlock.cs"',title:'"PresentUnlock.cs"'},"// highlight-next-line\npublic class PresentUnlock : ItemUnlock\n{\n}\n")),(0,o.kt)("p",null,"Now you can override the ",(0,o.kt)("inlineCode",{parentName:"p"},"DisplayedUnlock"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"GetImage")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="PresentUnlock.cs"',title:'"PresentUnlock.cs"'},'public class PresentUnlock : ItemUnlock\n{\n    public override Sprite GetImage()\n    {\n        int rnd = new System.Random().Next(3) + 1;\n        return gc.gameResources.itemDic[$"Present{rnd}"];\n    }\n}\n')),(0,o.kt)("p",null,"Then just use your custom unlock in the custom item's initialization:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Present.cs"',title:'"Present.cs"'},'public class Present : CustomItem, IItemUsable\n{\n    [RLSetup]\n    public static void Setup()\n    {\n        RogueLibs.CreateCustomItem<Present>()\n            .WithName(new CustomNameInfo("Present"))\n            .WithDescription(new CustomNameInfo("Open it!"))\n            .WithSprite(Properties.Resources.Present)\n            // highlight-next-line\n            .WithUnlock(new PresentUnlock\n            {\n                UnlockCost = 5,\n                CharacterCreationCost = 3,\n                LoadoutCost = 3\n            });\n    }\n}\n'))),(0,o.kt)(i.Z,{value:"randomitems",mdxType:"TabItem"},(0,o.kt)("p",null,"A simple example - a button in the Item Teleporter's menu, that gives you 5 random items."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="RandomItemsButton.cs"',title:'"RandomItemsButton.cs"'},'public class RandomItemsButton : ItemUnlock\n{\n    [RLSetup]\n    public static void Setup()\n    {\n        RogueLibs.CreateCustomUnlock(new RandomItemsButton())\n            .WithName(new CustomNameInfo("Random Items")\n            .WithDescription(new CustomNameInfo("Gives you 5 random items"));\n    }\n\n    public RandomItemsButton()\n    {\n        SortingOrder = -100; // appear on top of the menu\n        IsAvailable = false;\n        IsAvailableInCC = false;\n        IsAvailableInItemTeleporter = true; // only in Item Teleporter\n    }\n\n    public override void OnPushedButton()\n    {\n        System.Random rnd = new System.Random();\n        for (int i = 0; i < 5; i++)\n        {\n            UnlockWrapper item;\n            do\n            {\n                int index = rnd.Next(Menu.Unlocks.Count);\n                UnlockWrapper item = Menu.Unlocks[index];\n            }\n            // make sure that you don\'t accidentally purchase a locked item\n            while (!item.IsUnlocked && item != this);\n\n            // it\'d be way better and safer to spawn the item yourself,\n            // but for the sake of simplicity, we\'ll just simulate the button push\n            item.OnPushedButton();\n        }\n    }\n}\n'))),(0,o.kt)(i.Z,{value:"categories",mdxType:"TabItem"},(0,o.kt)("p",null,"So, you want to make categories, like in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SugarBarrel/aToM"},"aToM"),"? Here you go!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCategory.cs"',title:'"MyCategory.cs"'},'public class MyCategory : MutatorUnlock\n{\n    [RLSetup]\n    public static void Setup()\n    {\n        MyCategory category = new MyCategory("MyCustomCategory1");\n        RogueLibs.CreateCustomUnlock(category)\n            .WithName(new CustomNameInfo("My Custom Category 1"))\n            .WithDescription(new CustomNameInfo("My Custom Category 1 is very cool and does a lot of great stuff"));\n\n        category.SortingOrder = -59;\n        category.SortingIndex = -1;\n        int i = 0;\n        foreach (MutatorUnlock mutator in mutators1)\n        {\n            mutator.SortingOrder = -59;\n            mutator.SortingIndex = i;\n            category.Contents.Add(mutator);\n        }\n        Categories.Add(category);\n        \n        category = new MyCategory("MyCustomCategory2");\n        RogueLibs.CreateCustomUnlock(category)\n            .WithName(new CustomNameInfo("My Custom Category 2"))\n            .WithDescription(new CustomNameInfo("My Custom Category 2 is really great and accomplishes a ton of cool things"));\n\n        category.SortingOrder = -58;\n        category.SortingIndex = -1;\n        i = 0;\n        foreach (MutatorUnlock mutator in mutators2)\n        {\n            mutator.SortingOrder = -58;\n            mutator.SortingIndex = i;\n            category.Contents.Add(mutator);\n        }\n        Categories.Add(category);\n        \n        RogueLibs.CreateCustomName("CategoryShow", "Interface", new CustomNameInfo("Show"));\n        RogueLibs.CreateCustomName("CategoryHide", "Interface", new CustomNameInfo("Hide"));\n    }\n\n    public MyCategory(string name) : base(name) { }\n\n    public List<UnlockWrapper> Contents = new List<UnlockWrapper>();\n    public static List<MyCategory> Categories = new List<MyCategory>();\n\n    private bool isExpanded;\n    public bool IsExpanded\n    {\n        get => isExpanded;\n        set\n        {\n            if (isExpanded != (isExpanded = value)) // if the value changed\n            {\n                // make current category\'s mutators available/unavailable\n                foreach (UnlockWrapper mutator in Contents)\n                    mutator.IsAvailable = value;\n                \n                // if it was expanded, close all other categories\n                if (value)\n                    foreach (MyCategory category in Categories)\n                        if (category != this) category.IsExpanded = false;\n            }\n        }\n    }\n\n    public override string GetFancyName()\n    {\n        string name = base.GetFancyName();\n        name += " - " +  gc.nameDB.GetName(IsExpanded ? "CategoryHide" : "CategoryShow", "Interface");\n        return name;\n    }\n    public override void OnPushedButton()\n    {\n        if (Menu!.Type == UnlocksMenuType.MutatorMenu)\n        {\n            PlaySound("ClickButton");\n            // toggle the IsExpanded property\n            IsExpanded = !IsExpanded;\n            // reopen the menu to update the buttons list\n            ((CustomScrollingMenu)Menu).Menu.OpenScrollingMenu();\n        }\n        else base.OnPushedButton();\n    }\n}\n')))))}g.isMDXComponent=!0}}]);