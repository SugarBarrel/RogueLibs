(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[921],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,k=d["".concat(s,".").concat(p)]||d[p]||m[p]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return i}});var a=n(2263),r=n(3919);function o(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,l=void 0!==i&&i,s=o.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(l)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+c:c}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},9309:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(2122),r=n(9756),o=n(7294),i=["children"];function l(e){var t=e.children,n=(0,r.Z)(e,i);return o.createElement("div",(0,a.Z)({role:"tabpanel"},n),t)}},8952:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(7294),r=n(9443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),l="tabItem_2O3c",s="tabItemActive_Fpbe",u="tab_1pgU";var c=37,m=39;var d=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,d=e.values,p=e.groupId,k=e.className,g=o(),h=g.tabGroupChoices,f=g.setTabGroupChoices,v=(0,a.useState)(r),b=v[0],y=v[1],N=a.Children.toArray(e.children),C=[];if(null!=p){var w=h[p];null!=w&&w!==b&&d.some((function(e){return e.value===w}))&&y(w)}var U=function(e){var t=e.currentTarget,n=C.indexOf(t),a=d[n].value;y(a),null!=p&&(f(p,a),setTimeout((function(){var e,n,a,r,o,i,l,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,u=i.innerWidth,n>=0&&o<=u&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},I=function(e){var t,n;switch(e.keyCode){case m:var a=C.indexOf(e.target)+1;n=C[a]||C[0];break;case c:var r=C.indexOf(e.target)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()},S=function(e,t){return t.value===e||t.values&&-1!=t.values.indexOf(e)};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},k)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:I,onFocus:U,onClick:U},n)}))),t?(0,a.cloneElement)(N.filter((function(e){return S(b,e.props)}))[0],{className:u}):a.createElement("div",null,N.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:!S(b,e.props),className:u})}))),a.createElement("br",null))}},8410:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return d},default:function(){return k}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=n(8952),l=n(9309),s=(n(4996),["components"]),u={},c="Overriding Default Behavior",m={unversionedId:"unlocks/overriding-behavior",id:"unlocks/overriding-behavior",isDocsHomePage:!1,title:"Overriding Default Behavior",description:"Sorting",source:"@site/docs/unlocks/overriding-behavior.md",sourceDirName:"unlocks",slug:"/unlocks/overriding-behavior",permalink:"/RogueLibs/ru/docs/unlocks/overriding-behavior",editUrl:"https://github.com/Abbysssal/RogueLibs/edit/master/website/docs/unlocks/overriding-behavior.md",version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Custom Unlocks",permalink:"/RogueLibs/ru/docs/unlocks/custom-unlocks"},next:{title:"Custom Names",permalink:"/RogueLibs/ru/docs/names/custom-names"}},d=[{value:"Sorting",id:"sorting",children:[]},{value:"Overrideable methods",id:"methods",children:[{value:"<code>UnlockWrapper</code>",id:"unlockwrapper",children:[]},{value:"<code>DisplayedUnlock</code>",id:"displayedunlock",children:[]}]},{value:"Examples",id:"examples",children:[]}],p={toc:d};function k(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overriding-default-behavior"},"Overriding Default Behavior"),(0,o.kt)("h2",{id:"sorting"},"Sorting"),(0,o.kt)("p",null,"If you want your unlock to be at the top of the menu, set the ",(0,o.kt)("inlineCode",{parentName:"p"},"SortingOrder")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"SortingIndex")," properties."),(0,o.kt)("p",null,"Unlocks are first sorted by their ",(0,o.kt)("inlineCode",{parentName:"p"},"SortingOrder"),", then by their state (unlocked, purchasable, available and locked), and then by their ",(0,o.kt)("inlineCode",{parentName:"p"},"SortingIndex"),". You can ignore the sorting by the state by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"IgnoreStateSorting")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("p",null,"Here's an example of how it would work:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SortingOrder = -400"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Unlocked"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SortingIndex = -3"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SortingIndex = 1"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SortingIndex = 2"),";"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Purchasable"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"..."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Available"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"..."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Locked"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"..."))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SortingOrder = -3"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"..."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SortingOrder = 0")," (vanilla unlocks go here):",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"..."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SortingOrder = 1"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"..."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SortingOrder = 500"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"...")))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The menu might get weird or even crash if not all unlocks on the current ",(0,o.kt)("inlineCode",{parentName:"p"},"SortingOrder")," have ",(0,o.kt)("inlineCode",{parentName:"p"},"IgnoreStateSorting")," set to the same value. So make sure that all other unlocks have ",(0,o.kt)("inlineCode",{parentName:"p"},"IgnoreStateSorting")," set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," too."))),(0,o.kt)("h2",{id:"methods"},"Overrideable methods"),(0,o.kt)("h3",{id:"unlockwrapper"},(0,o.kt)("inlineCode",{parentName:"h3"},"UnlockWrapper")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="UnlockWrapper.cs"',title:'"UnlockWrapper.cs"'},'// called when the unlock is initialized and integrated into the game\npublic virtual void SetupUnlock() { }\n\n// called pretty often to determine if it can be unlocked right now\npublic virtual void UpdateUnlock()\n{\n    if ((Unlock.nowAvailable = !Unlock.unlocked && CanBeUnlocked()) && UnlockCost is 0)\n        gc.unlocks.DoUnlockForced(Name, Type);\n}\n\n// determines whether the unlock can be unlocked right now\npublic virtual bool CanBeUnlocked() => UnlockCost > -1\n    && Unlock.prerequisites.All(c => gc.sessionDataBig.unlocks.Exists(u => u.unlockName == c && u.unlocked));\n\n// gets the unlock\'s raw name, without any rich text, costs and values\npublic virtual string GetName() => IsUnlocked || Unlock.nowAvailable ? gc.nameDB.GetName(Name, Unlock.unlockNameType) : "?????";\n\n// gets the unlock\'s raw description, without any rich text, costs and values\npublic virtual string GetDescription() => IsUnlocked || Unlock.nowAvailable ? gc.nameDB.GetName(Name, Unlock.unlockDescriptionType) : "?????";\n\n// gets the unlock\'s image (displayed in the menus)\npublic virtual Sprite GetImage() => (IsUnlocked || Unlock.nowAvailable)\n    && RogueFramework.ExtraSprites.TryGetValue(Name, out Sprite image) ? image : null;\n')),(0,o.kt)("h3",{id:"displayedunlock"},(0,o.kt)("inlineCode",{parentName:"h3"},"DisplayedUnlock")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="DisplayedUnlock.cs"',title:'"DisplayedUnlock.cs"'},"// called when the button is updated. `UpdateUnlock` is called right before this.\npublic virtual void UpdateButton() => UpdateButton(IsEnabled, UnlockButtonState.Selected, UnlockButtonState.Normal);\n\nprotected void UpdateButton(bool isEnabledOrSelected, UnlockButtonState selected, UnlockButtonState normal)\n{\n    Text = GetFancyName();\n    State = IsUnlocked ? isEnabledOrSelected ? selected : normal\n        : Unlock.nowAvailable && UnlockCost > -1 ? UnlockButtonState.Purchasable\n        : UnlockButtonState.Locked;\n}\n\n// called when the button is pressed. See other unlocks' implementations for more info\npublic abstract void OnPushedButton();\n\n// gets the unlock's \"fancy\" name, with rich text formatting, costs and point values\npublic virtual string GetFancyName()\n{\n    /* A lot of stuff, see RogueLibs' source code for more information */\n}\n\n// gets the unlock's \"fancy\" description, with rich text formatting, cancellations, prerequisites and recommendations\npublic virtual string GetFancyDescription()\n{\n    /* A lot of stuff, see RogueLibs' source code for more information */\n}\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Pro-tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can see for yourself how these methods are implemented in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Abbysssal/RogueLibs/blob/master/RogueLibsCore/Hooks/Unlocks/UnlockWrapper.cs"},"RogueLibs' source code"),"."))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(i.Z,{defaultValue:"present",values:[{label:"Present (sprite variations)",value:"present"},{label:"Random Items Button",value:"randomitems"},{label:"Categories",value:"categories"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"present",mdxType:"TabItem"},(0,o.kt)("p",null,"Let's say, you want to make an ",(0,o.kt)("a",{parentName:"p",href:"../custom-sprites#sprite-variations"},"item called Present, and it has 3 different sprites"),"."),(0,o.kt)("p",null,"First of all, you'll need to create an unlock class deriving from ",(0,o.kt)("inlineCode",{parentName:"p"},"ItemUnlock"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="PresentUnlock.cs"',title:'"PresentUnlock.cs"'},"// highlight-next-line\npublic class PresentUnlock : ItemUnlock\n{\n}\n")),(0,o.kt)("p",null,"Now you can override the ",(0,o.kt)("inlineCode",{parentName:"p"},"DisplayedUnlock"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"GetImage")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="PresentUnlock.cs"',title:'"PresentUnlock.cs"'},'public class PresentUnlock : ItemUnlock\n{\n    public override Sprite GetImage()\n    {\n        int rnd = new System.Random().Next(3) + 1;\n        return (IsUnlocked || Unlock.nowAvailable) && rnd != 1\n            && gc.gameResources.itemDic.TryGetValue($"Present{rnd}", out Sprite sprite)\n            ? sprite : base.GetImage();\n    }\n}\n')),(0,o.kt)("p",null,"Then just use your custom unlock in the custom item's initialization:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Present.cs"',title:'"Present.cs"'},'public class Present : CustomItem, IItemUsable\n{\n    [RLSetup]\n    public static void Setup()\n    {\n        RogueLibs.CreateCustomItem<Present>()\n            .WithName(new CustomNameInfo("Present"))\n            .WithDescription(new CustomNameInfo("Open it!"))\n            .WithSprite(Properties.Resources.Present)\n            // highlight-next-line\n            .WithUnlock(new PresentUnlock\n            {\n                UnlockCost = 5,\n                CharacterCreationCost = 3,\n                LoadoutCost = 3\n            });\n    }\n}\n'))),(0,o.kt)(l.Z,{value:"randomitems",mdxType:"TabItem"},(0,o.kt)("p",null,"A simple example - a button in the Item Teleporter's menu, that gives you 5 random items."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="RandomItemsButton.cs"',title:'"RandomItemsButton.cs"'},'public class RandomItemsButton : ItemUnlock\n{\n    [RLSetup]\n    public static void Setup()\n    {\n        RogueLibs.CreateCustomUnlock(new RandomItemsButton(),\n            new CustomNameInfo("Name"),\n            new CustomNameInfo("Description"));\n        // this API will probably change\n    }\n\n    public RandomItemsButton()\n    {\n        SortingOrder = -100; // appear on top of the menu\n        IsAvailable = false;\n        IsAvailableInCC = false;\n        IsAvailableInItemTeleporter = true; // only in Item Teleporter\n    }\n\n    public override void OnPushedButton()\n    {\n        System.Random rnd = new System.Random();\n        for (int i = 0; i < 5; i++)\n        {\n            UnlockWrapper item;\n            do\n            {\n                int index = rnd.Next(Menu.Unlocks.Count);\n                UnlockWrapper item = Menu.Unlocks[index];\n            }\n            // make sure that you don\'t accidentally purchase a locked item\n            while (!item.IsUnlocked && item != this);\n\n            // it\'d be way better and safer to spawn the item yourself,\n            // but for the sake of simplicity, we\'ll just simulate the button push\n            item.OnPushedButton();\n        }\n    }\n}\n'))),(0,o.kt)(l.Z,{value:"categories",mdxType:"TabItem"},(0,o.kt)("p",null,"So, you want to make categories, like in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Abbysssal/aToM"},"aToM"),"? Here you go!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyCategory.cs"',title:'"MyCategory.cs"'},'public class MyCategory : MutatorUnlock\n{\n    [RLSetup]\n    public static void Setup()\n    {\n        MyCategory category = new MyCategory("MyCustomCategory1");\n        RogueLibs.CreateCustomUnlock(category,\n            new CustomNameInfo("My Custom Category 1"),\n            new CustomNameInfo("My Custom Category 1 is very cool and does a lot of great stuff"));\n\n        category.SortingOrder = -59;\n        category.SortingIndex = -1;\n        int i = 0;\n        foreach (MutatorUnlock mutator in mutators1)\n        {\n            mutator.SortingOrder = -59;\n            mutator.SortingIndex = i;\n            category.Contents.Add(mutator);\n        }\n        Categories.Add(category);\n        \n        category = new MyCategory("MyCustomCategory2");\n        RogueLibs.CreateCustomUnlock(category,\n            new CustomNameInfo("My Custom Category 2"),\n            new CustomNameInfo("My Custom Category 2 is really great and accomplishes a ton of cool things"));\n\n        category.SortingOrder = -58;\n        category.SortingIndex = -1;\n        i = 0;\n        foreach (MutatorUnlock mutator in mutators2)\n        {\n            mutator.SortingOrder = -58;\n            mutator.SortingIndex = i;\n            category.Contents.Add(mutator);\n        }\n        Categories.Add(category);\n        \n        RogueLibs.CreateCustomName("CategoryShow", "Interface", new CustomNameInfo("Show"));\n        RogueLibs.CreateCustomName("CategoryHide", "Interface", new CustomNameInfo("Hide"));\n    }\n\n    public MyCategory(string name) : base(name) { }\n\n    public List<UnlockWrapper> Contents = new List<UnlockWrapper>();\n    public static List<MyCategory> Categories = new List<MyCategory>();\n\n    private bool isExpanded;\n    public bool IsExpanded\n    {\n        get => isExpanded;\n        set\n        {\n            if (isExpanded != (isExpanded = value)) // if the value changed\n            {\n                // make current category\'s mutators available/unavailable\n                foreach (UnlockWrapper mutator in Contents)\n                    mutator.IsAvailable = value;\n                \n                // if it was expanded, close all other categories\n                if (value)\n                    foreach (MyCategory category in Categories)\n                        if (category != this) category.IsExpanded = false;\n            }\n        }\n    }\n\n    public override void GetFancyName()\n    {\n        string name = base.GetFancyName();\n        name += " - " +  gc.nameDB.GetName(IsExpanded ? "CategoryHide" : "CategoryShow", "Interface");\n        return name;\n    }\n    public override void OnPushedButton()\n    {\n        if (Menu.Type == UnlocksMenuType.MutatorMenu)\n        {\n            PlaySound("ClickButton");\n            // toggle the IsExpanded property\n            IsExpanded = !IsExpanded;\n            // reopen the menu to update the buttons list\n            ((CustomScrollingMenu)Menu).Menu.OpenScrollingMenu();\n        }\n        else base.OnPushedButton();\n    }\n}\n')))))}k.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);