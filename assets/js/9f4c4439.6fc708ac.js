(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9933],{8173:function(e,t,n){"use strict";function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,{Z:function(){return r}})},4110:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var o=n(7294),r="browserWindow_1hK2",i="browserWindowHeader_3KQg",l="buttons_30GN",s="browserWindowAddressBar_3JC2",a="dot_1FQH",c="browserWindowMenuIcon_2SC9",p="bar_2gUh",u="browserWindowBody_2GyV";function m(e){var t=e.children,n=e.url;return o.createElement("div",null,o.createElement("div",{className:r},o.createElement("div",{className:i},o.createElement("div",{className:l},o.createElement("span",{className:a,style:{background:"#f25f58"}}),o.createElement("span",{className:a,style:{background:"#fbbe3c"}}),o.createElement("span",{className:a,style:{background:"#58cb42"}})),o.createElement("div",{className:s},n),o.createElement("div",{className:c},o.createElement("div",null,o.createElement("span",{className:p}),o.createElement("span",{className:p}),o.createElement("span",{className:p})))),o.createElement("div",{className:u},t)),o.createElement("br",null))}},7851:function(e,t,n){"use strict";n.d(t,{Z:function(){return v},F:function(){return d}});var o=n(2122),r=n(9756),i=n(8173),l=n(7294),s=n(9763),a=n(6010),c=n(2380),p="row_2biz",u="toolbar_1xeL",m=["items","children","width","type","onClick","interactive"];function d(e,t,n){for(var o,r=e||[],s=(0,i.Z)(l.Children.toArray(t));!(o=s()).done;){var a,c=o.value;"InventorySlot"===(null==c||null==(a=c.props)?void 0:a.mdxType)&&r.push(Object.assign({},c.props))}if(n)for(var p=r.length;p<n;p++)r.push({hoverable:!1});return r}function v(e){var t=e.items,n=e.children,i=e.width,v=e.type,g=e.onClick,y=e.interactive,f=(0,r.Z)(e,m),k=d(t,n,i);f.group&&(f.group="inventory."+f.group);var h=(0,s.Z)(k.map((function(e){return e.uid})),f),I=h[0],w=h[1],S=function(e,t){y&&t&&w.toggle(t),g&&g({uid:t,index:e})};return l.createElement("div",{className:(0,a.Z)(p,"toolbar"==v&&u)},k.map((function(e,t){if(y&&void 0===e.hoverable&&(e.hoverable=!0),e.uid){var n=I.includes(e.uid),r=w.isLocked(e.uid);n?e.type="selected":r&&(e.type="locked"),r&&(e.cantClick=!0)}return"toolbar"==v&&(e.tooltip=t+1,e.tooltipColor=void 0),l.createElement(c.Z,(0,o.Z)({key:t},e,{onClick:function(){return S(t,e.uid)}}))})))}},2380:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var o=n(7294),r=n(6010),i={container:"container_2sPt",cursorLocked:"cursorLocked_2zgq",normal:"normal_3G0b",hoverable:"hoverable_21Ge",selected:"selected_3EXb",locked:"locked_S145",sprite:"sprite_7g3Y",tooltip:"tooltip_2Zg4",count:"count_2Mnn"};function l(e){var t=e.sprite,n=e.tooltip,l=e.tooltipColor,s=e.count,a=e.countColor,c=e.hoverable,p=e.cantClick,u=e.type,m=void 0===u?"normal":u,d=e.onClick;return o.createElement("div",{onClick:d,className:(0,r.Z)(i.container,p&&i.cursorLocked,m&&i[m],c&&i.hoverable)},t&&o.createElement("img",{key:"sprite",className:i.sprite,src:t}),n&&o.createElement("span",{key:"tooltip",className:i.tooltip,style:{color:l||"#FFED00"}},n),s&&o.createElement("span",{key:"count",className:i.count,style:{color:a||"#FFFFFF"}},s))}},9763:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(7294),r=n(5420);function i(e,t){var n=t.defaultValues,i=t.minChoices,l=t.maxChoices,s=t.lockChoices,a=t.group,c=t.onChange,p=null!=i?i:0,u=null!=l?l:1;-1==u&&(u=1/0);var m=function(e,t,n){var i=(0,o.useContext)(r.Do),l=(0,o.useState)((function(){var e;return"function"==typeof t&&(t=t()),null!=(e=t)?e:[]})),s=l[0],a=l[1],c=function(t){if(t.slotName==e){var o=t.value?t.value.split(";"):[];a(o),n&&n(o)}};return(0,o.useEffect)((function(){return null==e?function(){}:(i.subscribe(c),function(){return i.unsubscribe(c)})}),[]),[s,function(t){"function"==typeof t&&(t=t(s)),null!=e?null!=t?i.set(e,t.join(";")):i.delete(e):(null===t&&(t=[]),a(t),n&&n(t))}]}(null!=a?a:null,(function(){if("function"==typeof n&&(n=n()),void 0===n){if(n=[],e)for(var t=e.filter((function(e){return void 0!==e})),o=Math.min(t.length,p),r=0;r<o;r++)n.push(t[r])}else Array.isArray(n)||(n=[n]);if(n.length<p||n.length>u)throw new Error("Invalid default values count: "+p+" \u2264 "+n.length+" \u2264 "+u);if(s&&p==u)throw new Error("Cannot lock choices when Min and Max choices are equal.");return n}),(function(e){return c&&c(e)})),d=m[0],v=m[1],g=function(e){if(!(d.includes(e)||s&&d.length>=u)){for(;d.length>=u;)d.shift();var t=d.concat(e);v(t)}},y=function(e){var t=d.indexOf(e);if(-1!=t&&!(d.length<=p)){var n=d.slice();n.splice(t,1),v(n)}};return[d,{add:g,remove:y,toggle:function(e){d.includes(e)?y(e):g(e)},set:function(e){if((e=e.filter((function(e,t,n){return n.indexOf(e)==t}))).length!=d.length||!e.every((function(e,t){return d.indexOf(e)==t}))){if(e.length<p||e.length>u)throw new Error("Invalid default values count: "+p+" \u2264 "+e.length+" \u2264 "+u);v(e)}},isLocked:function(e){return d.includes(e)?d.length==p:!!s&&d.length==u}}]}},5420:function(e,t,n){"use strict";n.d(t,{Do:function(){return s},Xq:function(){return a}});var o=n(7294),r=n(3018),i="roguestorage.";function l(){var e=(0,o.useState)(null),t=e[0],n=e[1],l=(0,o.useState)([]),s=l[0],a=(l[1],(0,o.useCallback)((function(e,o){if(null!==t){t[e]=o,(0,r.WA)("roguestorage."+e).set(o),n(t);var i={slotName:e,value:o};s.forEach((function(e){return e(i)}))}}),[t]));return(0,o.useEffect)((function(){var e={};try{(0,r._f)().forEach((function(t){if(t.startsWith(i)){var n=t.substring(i.length),o=(0,r.WA)(t).get();null!==o&&(e[n]=o);var l={slotName:n,value:o};s.forEach((function(e){return e(l)}))}})),n(e)}catch(t){console.error(t)}console.log("Storage set")}),[]),{get:function(e){return n=e,null===t?null:null!=(o=t[n])?o:null;var n,o},set:function(e,t){return a(e,t)},delete:function(e){return function(e){if(null!==t){delete t[e],(0,r.WA)("roguestorage."+e).del(),n(t);var o={slotName:e,value:null};s.forEach((function(e){return e(o)}))}}(e)},subscribe:function(e){return s.push(e)},unsubscribe:function(e){var t=s.indexOf(e);-1!=t&&s.splice(t,1)}}}var s=o.createContext({});function a(e){var t=e.children,n=l();return o.createElement(s.Provider,{key:"storageProvider",value:n},t)}},2621:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return v},default:function(){return y}});var o=n(2122),r=n(9756),i=(n(7294),n(3905)),l=n(4996),s=n(4110),a=n(2380),c=n(7851),p=["components"],u={},m="InventoryRow",d={unversionedId:"site/components/InventoryRow",id:"site/components/InventoryRow",isDocsHomePage:!1,title:"InventoryRow",description:"Props",source:"@site/docs/site/components/InventoryRow.mdx",sourceDirName:"site/components",slug:"/site/components/InventoryRow",permalink:"/RogueLibs/docs/site/components/InventoryRow",editUrl:"https://github.com/Abbysssal/RogueLibs/edit/main/website/docs/site/components/InventoryRow.mdx",version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"InventorySlot",permalink:"/RogueLibs/docs/site/components/InventorySlot"},next:{title:"InventoryGrid",permalink:"/RogueLibs/docs/site/components/InventoryGrid"}},v=[{value:"Props",id:"props",children:[]},{value:"Typical usage",id:"typical-usage",children:[]},{value:"Minimum width",id:"minimum-width",children:[]},{value:"Row types",id:"row-types",children:[]},{value:"onClick event",id:"onclick-event",children:[]},{value:"Interactive",id:"interactive",children:[]}],g={toc:v};function y(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"inventoryrow"},(0,i.kt)("inlineCode",{parentName:"h1"},"InventoryRow")),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Props as SlotProps } from '@site/src/components/InventorySlot';\nimport { SelectorParameters } from '@site/src/components/hooks/useSelector';\n\nexport type Props = SelectorParameters & {\n  items?: SlotProps[],        // (not recommended) props of slots to display\n  children?: React.ReactNode, // InventorySlot children to display\n  width?: number, // minimum width of the row\n\n  type?: \"normal\" | \"toolbar\",        // type of the row\n  onClick?: (e: RowSlotArgs) => void, // click event handler\n  interactive?: boolean, // determines whether slots can be selected\n}\nexport type RowSlotArgs = {\n  uid: string | undefined, // Unique Identifier of the clicked slot\n  index: number,           // index of the clicked slot\n}\n")),(0,i.kt)("h2",{id:"typical-usage"},"Typical usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<InventoryRow>\n  <InventorySlot sprite={useBaseUrl("/img/Generic.png")}/>\n  <InventorySlot sprite={useBaseUrl("/img/Generic2.png")} count={25}/>\n  <InventorySlot sprite={useBaseUrl("/img/Generic3.png")} count={25} tooltip="$13"/>\n  <InventorySlot sprite={useBaseUrl("/img/Generic4.png")} count="$13" tooltip={25}/>\n  <InventorySlot sprite={useBaseUrl("/img/Generic5.png")} tooltip={25}/>\n  <InventorySlot sprite={useBaseUrl("/img/Generic6.png")}/>\n</InventoryRow>\n')),(0,i.kt)(s.Z,{mdxType:"BrowserWindow"},(0,i.kt)(c.Z,{mdxType:"InventoryRow"},(0,i.kt)(a.Z,{sprite:(0,l.Z)("/img/Generic.png"),mdxType:"InventorySlot"}),(0,i.kt)(a.Z,{sprite:(0,l.Z)("/img/Generic2.png"),count:25,mdxType:"InventorySlot"}),(0,i.kt)(a.Z,{sprite:(0,l.Z)("/img/Generic3.png"),count:25,tooltip:"$13",mdxType:"InventorySlot"}),(0,i.kt)(a.Z,{sprite:(0,l.Z)("/img/Generic4.png"),count:"$13",tooltip:25,mdxType:"InventorySlot"}),(0,i.kt)(a.Z,{sprite:(0,l.Z)("/img/Generic5.png"),tooltip:25,mdxType:"InventorySlot"}),(0,i.kt)(a.Z,{sprite:(0,l.Z)("/img/Generic6.png"),mdxType:"InventorySlot"}))),(0,i.kt)("h2",{id:"minimum-width"},"Minimum width"),(0,i.kt)("p",null,"If the provided amount of slots is less than the specified ",(0,i.kt)("inlineCode",{parentName:"p"},"width"),", the remaining space is filled with empty slots:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<InventoryRow width={8}>\n  <InventorySlot sprite={useBaseUrl("/img/Generic.png")}/>\n  <InventorySlot sprite={useBaseUrl("/img/Generic2.png")} count={25}/>\n  <InventorySlot sprite={useBaseUrl("/img/Generic3.png")} count={25} tooltip="$13"/>\n  <InventorySlot sprite={useBaseUrl("/img/Generic4.png")} count="$13" tooltip={25}/>\n  <InventorySlot sprite={useBaseUrl("/img/Generic5.png")} tooltip={25}/>\n  <InventorySlot sprite={useBaseUrl("/img/Generic6.png")}/>\n</InventoryRow>\n')),(0,i.kt)(s.Z,{mdxType:"BrowserWindow"},(0,i.kt)(c.Z,{width:8,mdxType:"InventoryRow"},(0,i.kt)(a.Z,{sprite:(0,l.Z)("/img/Generic.png"),mdxType:"InventorySlot"}),(0,i.kt)(a.Z,{sprite:(0,l.Z)("/img/Generic2.png"),count:25,mdxType:"InventorySlot"}),(0,i.kt)(a.Z,{sprite:(0,l.Z)("/img/Generic3.png"),count:25,tooltip:"$13",mdxType:"InventorySlot"}),(0,i.kt)(a.Z,{sprite:(0,l.Z)("/img/Generic4.png"),count:"$13",tooltip:25,mdxType:"InventorySlot"}),(0,i.kt)(a.Z,{sprite:(0,l.Z)("/img/Generic5.png"),tooltip:25,mdxType:"InventorySlot"}),(0,i.kt)(a.Z,{sprite:(0,l.Z)("/img/Generic6.png"),mdxType:"InventorySlot"}))),(0,i.kt)("h2",{id:"row-types"},"Row types"),(0,i.kt)("p",null,"There are two types of rows: ",(0,i.kt)("inlineCode",{parentName:"p"},'"normal"')," (default) and ",(0,i.kt)("inlineCode",{parentName:"p"},'"toolbar"'),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<InventoryRow type="normal">\n  <InventorySlot sprite={useBaseUrl("/img/Generic.png")}/>\n  <InventorySlot sprite={useBaseUrl("/img/Generic2.png")} count={25}/>\n  <InventorySlot sprite={useBaseUrl("/img/Generic3.png")} count={25} tooltip="$13"/>\n  <InventorySlot sprite={useBaseUrl("/img/Generic4.png")} count="$13" tooltip={25}/>\n  <InventorySlot sprite={useBaseUrl("/img/Generic5.png")} tooltip={25}/>\n  <InventorySlot sprite={useBaseUrl("/img/Generic6.png")}/>\n</InventoryRow>\n<br/>\n<InventoryRow type="toolbar">\n  <InventorySlot sprite={useBaseUrl("/img/Generic.png")}/>\n  <InventorySlot sprite={useBaseUrl("/img/Generic2.png")} count={25}/>\n  <InventorySlot sprite={useBaseUrl("/img/Generic3.png")} count={25} tooltip="$13"/>\n  <InventorySlot sprite={useBaseUrl("/img/Generic4.png")} count="$13" tooltip={25}/>\n  <InventorySlot sprite={useBaseUrl("/img/Generic5.png")} tooltip={25}/>\n  <InventorySlot sprite={useBaseUrl("/img/Generic6.png")}/>\n</InventoryRow>\n')),(0,i.kt)(s.Z,{mdxType:"BrowserWindow"},(0,i.kt)(c.Z,{type:"normal",mdxType:"InventoryRow"},(0,i.kt)(a.Z,{sprite:(0,l.Z)("/img/Generic.png"),mdxType:"InventorySlot"}),(0,i.kt)(a.Z,{sprite:(0,l.Z)("/img/Generic2.png"),count:25,mdxType:"InventorySlot"}),(0,i.kt)(a.Z,{sprite:(0,l.Z)("/img/Generic3.png"),count:25,tooltip:"$13",mdxType:"InventorySlot"}),(0,i.kt)(a.Z,{sprite:(0,l.Z)("/img/Generic4.png"),count:"$13",tooltip:25,mdxType:"InventorySlot"}),(0,i.kt)(a.Z,{sprite:(0,l.Z)("/img/Generic5.png"),tooltip:25,mdxType:"InventorySlot"}),(0,i.kt)(a.Z,{sprite:(0,l.Z)("/img/Generic6.png"),mdxType:"InventorySlot"})),(0,i.kt)("br",null),(0,i.kt)(c.Z,{type:"toolbar",mdxType:"InventoryRow"},(0,i.kt)(a.Z,{sprite:(0,l.Z)("/img/Generic.png"),mdxType:"InventorySlot"}),(0,i.kt)(a.Z,{sprite:(0,l.Z)("/img/Generic2.png"),count:25,mdxType:"InventorySlot"}),(0,i.kt)(a.Z,{sprite:(0,l.Z)("/img/Generic3.png"),count:25,tooltip:"$13",mdxType:"InventorySlot"}),(0,i.kt)(a.Z,{sprite:(0,l.Z)("/img/Generic4.png"),count:"$13",tooltip:25,mdxType:"InventorySlot"}),(0,i.kt)(a.Z,{sprite:(0,l.Z)("/img/Generic5.png"),tooltip:25,mdxType:"InventorySlot"}),(0,i.kt)(a.Z,{sprite:(0,l.Z)("/img/Generic6.png"),mdxType:"InventorySlot"}))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"As you can see, ",(0,i.kt)("inlineCode",{parentName:"p"},'"toolbar"')," overrides slots' tooltips and adds a blue outline."))),(0,i.kt)("h2",{id:"onclick-event"},"onClick event"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<InventoryRow interactive={true} onClick={e => console.log(e)}>\n  <InventorySlot sprite={useBaseUrl("/img/Generic.png")}/>\n  <InventorySlot sprite={useBaseUrl("/img/Generic2.png")} count={25}/>\n  <InventorySlot sprite={useBaseUrl("/img/Generic3.png")} count={25} tooltip="$13"/>\n  <InventorySlot sprite={useBaseUrl("/img/Generic4.png")} count="$13" tooltip={25}/>\n  <InventorySlot sprite={useBaseUrl("/img/Generic5.png")} tooltip={25}/>\n  <InventorySlot sprite={useBaseUrl("/img/Generic6.png")}/>\n</InventoryRow>\n')),(0,i.kt)(s.Z,{mdxType:"BrowserWindow"},(0,i.kt)(c.Z,{interactive:!0,onClick:function(e){return console.log(e)},mdxType:"InventoryRow"},(0,i.kt)(a.Z,{sprite:(0,l.Z)("/img/Generic.png"),mdxType:"InventorySlot"}),(0,i.kt)(a.Z,{sprite:(0,l.Z)("/img/Generic2.png"),count:25,mdxType:"InventorySlot"}),(0,i.kt)(a.Z,{sprite:(0,l.Z)("/img/Generic3.png"),count:25,tooltip:"$13",mdxType:"InventorySlot"}),(0,i.kt)(a.Z,{sprite:(0,l.Z)("/img/Generic4.png"),count:"$13",tooltip:25,mdxType:"InventorySlot"}),(0,i.kt)(a.Z,{sprite:(0,l.Z)("/img/Generic5.png"),tooltip:25,mdxType:"InventorySlot"}),(0,i.kt)(a.Z,{sprite:(0,l.Z)("/img/Generic6.png"),mdxType:"InventorySlot"}))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"See the output in ",(0,i.kt)("strong",{parentName:"p"},"Developer Tools > Console"),"."))),(0,i.kt)("h2",{id:"interactive"},"Interactive"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"interactive={true}")," makes all of the slots hoverable, and allows you to use ",(0,i.kt)("inlineCode",{parentName:"p"},"useSelector")," parameters."),(0,i.kt)("p",null,"To make slots selectable you'll have to assign ",(0,i.kt)("inlineCode",{parentName:"p"},"uid"),"s to them."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"See ",(0,i.kt)("a",{parentName:"strong",href:"../hooks/useSelector"},(0,i.kt)("inlineCode",{parentName:"a"},"useSelector"))," for more info.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<InventoryRow interactive={true} defaultValues={["1", "3"]}\n  minChoices={1} maxChoices={3} lockChoices={true} onChange={e => console.log(e)}>\n  <InventorySlot uid="1" sprite={useBaseUrl("/img/Generic.png")}/>\n  <InventorySlot uid="2" sprite={useBaseUrl("/img/Generic2.png")} count={25}/>\n  <InventorySlot uid="3" sprite={useBaseUrl("/img/Generic3.png")} count={25} tooltip="$13"/>\n  <InventorySlot uid="4" sprite={useBaseUrl("/img/Generic4.png")} count="$13" tooltip={25}/>\n  <InventorySlot uid="5" sprite={useBaseUrl("/img/Generic5.png")} tooltip={25}/>\n  <InventorySlot uid="6" sprite={useBaseUrl("/img/Generic6.png")}/>\n</InventoryRow>\n')),(0,i.kt)(s.Z,{mdxType:"BrowserWindow"},(0,i.kt)(c.Z,{interactive:!0,defaultValues:["1","3"],minChoices:1,maxChoices:3,lockChoices:!0,onChange:function(e){return console.log(e)},mdxType:"InventoryRow"},(0,i.kt)(a.Z,{uid:"1",sprite:(0,l.Z)("/img/Generic.png"),mdxType:"InventorySlot"}),(0,i.kt)(a.Z,{uid:"2",sprite:(0,l.Z)("/img/Generic2.png"),count:25,mdxType:"InventorySlot"}),(0,i.kt)(a.Z,{uid:"3",sprite:(0,l.Z)("/img/Generic3.png"),count:25,tooltip:"$13",mdxType:"InventorySlot"}),(0,i.kt)(a.Z,{uid:"4",sprite:(0,l.Z)("/img/Generic4.png"),count:"$13",tooltip:25,mdxType:"InventorySlot"}),(0,i.kt)(a.Z,{uid:"5",sprite:(0,l.Z)("/img/Generic5.png"),tooltip:25,mdxType:"InventorySlot"}),(0,i.kt)(a.Z,{uid:"6",sprite:(0,l.Z)("/img/Generic6.png"),mdxType:"InventorySlot"}))))}y.isMDXComponent=!0}}]);