(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1364],{8173:function(e,t,n){"use strict";function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,{Z:function(){return r}})},6902:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var o=n(7294),r="browserWindow_1hK2",i="browserWindowHeader_3KQg",a="buttons_30GN",l="browserWindowAddressBar_3JC2",s="dot_1FQH",u="browserWindowMenuIcon_2SC9",c="bar_2gUh",p="browserWindowBody_2GyV";function d(e){var t=e.children,n=e.minHeight,d=e.url;return o.createElement("div",null,o.createElement("div",{className:r,style:{minHeight:n}},o.createElement("div",{className:i},o.createElement("div",{className:a},o.createElement("span",{className:s,style:{background:"#f25f58"}}),o.createElement("span",{className:s,style:{background:"#fbbe3c"}}),o.createElement("span",{className:s,style:{background:"#58cb42"}})),o.createElement("div",{className:l},d),o.createElement("div",{className:u},o.createElement("div",null,o.createElement("span",{className:c}),o.createElement("span",{className:c}),o.createElement("span",{className:c})))),o.createElement("div",{className:p},t)),o.createElement("br",null))}},9937:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var o=n(9756),r=n(8173),i=n(7294),a=n(9763),l=n(7851),s="container_1tQ_",u=["items","children","height","width","onClick","interactive"];function c(e){for(var t,n=e.items,c=e.children,p=e.height,d=e.width,m=e.onClick,v=e.interactive,g=(0,o.Z)(e,u),y=function(e,t,n,o){var a=[],s=[],u=function(e){if(o)for(var t=s.length;t<o;t++)s.push({hoverable:!1});c(e)},c=function(e){a.push({items:s,type:e||"normal"}),s=[]};if(e)for(var p,d=(0,r.Z)(e);!(p=d()).done;){var m=p.value;if(Array.isArray(m)){s.length>0&&u();for(var v,g=(0,r.Z)(m);!(v=g()).done;){var y=v.value;s.push(y)}u()}else s.push(m),s.length===o&&u()}s.length>0&&u();for(var h,k=(0,r.Z)(i.Children.toArray(t));!(h=k()).done;){var f,S=h.value,Z=null==S||null==(f=S.props)?void 0:f.mdxType;if("InventorySlot"===Z)s.push(Object.assign({},S.props)),s.length===o&&u();else if("InventoryRow"===Z){var I;s.length>0&&u();var x=(0,l.F)(S.props.items,S.props.children,S.props.width||o);(I=s).push.apply(I,x),c(S.props.type)}}if(s.length>0&&u(),n)for(var N=a.length;N<n;N++){for(var w=0;w<(o||1);w++)s.push({hoverable:!1});u()}return a}(n,c,p,d),h=[],k=(0,r.Z)(y);!(t=k()).done;)for(var f,S=t.value,Z=(0,r.Z)(S.items);!(f=Z()).done;){var I=f.value;h.push(I.uid)}g.group&&(g.group="inventory."+g.group);var x=(0,a.Z)(h,g),N=x[0],w=x[1],C=function(e,t,n){v&&n&&w.toggle(n),m&&m({uid:n,row:e,column:t})};return i.createElement("div",{className:s},y.map((function(e,t){for(var n,o=(0,r.Z)(e.items);!(n=o()).done;){var a=n.value;v&&void 0===a.hoverable&&(a.hoverable=!0),a.uid&&(N.includes(a.uid)?a.type="selected":w.isLocked(a.uid)&&(a.type="locked"))}return i.createElement(l.Z,{key:t,type:e.type,items:e.items,onClick:function(e){return C(t,e.index,e.uid)}})})))}},7851:function(e,t,n){"use strict";n.d(t,{Z:function(){return v},F:function(){return m}});var o=n(2122),r=n(9756),i=n(8173),a=n(7294),l=n(9763),s=n(6010),u=n(2823),c="row_2biz",p="toolbar_1xeL",d=["items","children","width","type","onClick","interactive"];function m(e,t,n){for(var o,r=e||[],l=(0,i.Z)(a.Children.toArray(t));!(o=l()).done;){var s,u=o.value;"InventorySlot"===(null==u||null==(s=u.props)?void 0:s.mdxType)&&r.push(Object.assign({},u.props))}if(n)for(var c=r.length;c<n;c++)r.push({hoverable:!1});return r}function v(e){var t=e.items,n=e.children,i=e.width,v=e.type,g=e.onClick,y=e.interactive,h=(0,r.Z)(e,d),k=m(t,n,i);h.group&&(h.group="inventory."+h.group);var f=(0,l.Z)(k.map((function(e){return e.uid})),h),S=f[0],Z=f[1],I=function(e,t){y&&t&&Z.toggle(t),g&&g({uid:t,index:e})};return a.createElement("div",{className:(0,s.Z)(c,"toolbar"==v&&p)},k.map((function(e,t){var n;y&&e.uid&&(S.includes(e.uid)?(e.type="selected",n=!0):Z.isLocked(e.uid)?(e.type="locked",n=!1):n=!0,void 0===e.hoverable&&(e.hoverable=n));return"toolbar"==v&&(e.tooltip=t+1,e.tooltipColor=void 0),a.createElement(u.Z,(0,o.Z)({key:t},e,{onClick:function(){return I(t,e.uid)}}))})))}},2823:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var o=n(7294),r=n(4996),i="container_NKD0",a="slot_PnA2",l="hoverslot_1P8J",s="sprite_26gF",u="tooltip_o3oT",c="count_2_VC";function p(e){var t=e.sprite,n=e.tooltip,p=e.tooltipColor,d=e.count,m=e.countColor,v=e.hoverable,g=e.type,y=void 0===g?"normal":g,h=e.onClick,k=y?(0,r.Z)("/img/components/InventorySlot/"+y+".png"):void 0,f=y?(0,r.Z)("/img/components/InventorySlot/"+y+"Hover.png"):void 0,S="locked"==y?.15625:1;return o.createElement("div",{className:i,onClick:h,style:{cursor:v?"pointer":"inherit"}},y&&o.createElement(o.Fragment,null,v&&o.createElement("img",{key:"hoverslot",className:l,src:f}),o.createElement("img",{key:"slot",className:a,src:k})),t&&o.createElement("img",{key:"sprite",style:{opacity:S},className:s,src:t}),n&&o.createElement("span",{key:"tooltip",className:u,style:{opacity:S,color:p||"#FFED00"}},n),d&&o.createElement("span",{key:"count",className:c,style:{opacity:S,color:m||"#FFFFFF"}},d))}},9763:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(7294),r=n(5420);function i(e,t){var n=t.defaultValues,i=t.minChoices,a=t.maxChoices,l=t.lockChoices,s=t.group,u=t.onChange,c=null!=i?i:0,p=null!=a?a:1;-1==p&&(p=1/0);var d=function(e,t,n){if(e&&e.includes(";"))throw new Error("Storage slot name cannot contain ';'!");var i=(0,o.useContext)(r.Do),a=(0,o.useState)((function(){var e;return"function"==typeof t&&(t=t()),null!=(e=t)?e:[]})),l=a[0],s=a[1],u=function(t){if(t.slotName==e){var o=t.value?t.value.split(";"):[];s(o),n&&n(o)}};return(0,o.useEffect)((function(){return null==e?function(){}:(i.subscribe(u),function(){return i.unsubscribe(u)})}),[]),[l,function(t){"function"==typeof t&&(t=t(l)),null!=e?null!=t?i.set(e,t.join(";")):i.delete(e):(null===t&&(t=[]),s(t),n&&n(t))}]}(s,(function(){if("function"==typeof n&&(n=n()),void 0===n){if(n=[],e)for(var t=e.filter((function(e){return void 0!==e})),o=Math.min(t.length,c),r=0;r<o;r++)n.push(t[r])}else Array.isArray(n)||(n=[n]);if(n.length<c||n.length>p)throw new Error("Invalid default values count: "+c+" \u2264 "+n.length+" \u2264 "+p);if(l&&c==p)throw new Error("Cannot lock choices when Min and Max choices are equal.");return n}),(function(e){return u&&u(e)})),m=d[0],v=d[1],g=function(e){if(!(m.includes(e)||l&&m.length>=p)){for(;m.length>=p;)m.shift();var t=m.concat(e);v(t)}},y=function(e){var t=m.indexOf(e);if(-1!=t&&!(m.length<=c)){var n=m.slice();n.splice(t,1),v(n)}};return[m,{add:g,remove:y,toggle:function(e){m.includes(e)?y(e):g(e)},set:function(e){if((e=e.filter((function(e,t,n){return n.indexOf(e)==t}))).length!=m.length||!e.every((function(e,t){return m.indexOf(e)==t}))){if(e.length<c||e.length>p)throw new Error("Invalid default values count: "+c+" \u2264 "+e.length+" \u2264 "+p);v(e)}},isLocked:function(e){if(!l)return!1;var t=m.includes(e);return m.length==(t?c:p)}}]}},5420:function(e,t,n){"use strict";n.d(t,{Do:function(){return l},Xq:function(){return s}});var o=n(7294),r=n(3018),i="roguestorage.";function a(){var e=(0,o.useState)(null),t=e[0],n=e[1],a=(0,o.useState)([]),l=a[0],s=(a[1],(0,o.useCallback)((function(e,o){if(null!==t){t[e]=o,(0,r.WA)("roguestorage."+e).set(o),n(t);var i={slotName:e,value:o};l.forEach((function(e){return e(i)}))}}),[t]));return(0,o.useEffect)((function(){var e={};try{(0,r._f)().forEach((function(t){if(t.startsWith(i)){var n=t.substring(i.length),o=(0,r.WA)(t).get();null!==o&&(e[n]=o);var a={slotName:n,value:o};l.forEach((function(e){return e(a)}))}})),n(e)}catch(t){console.error(t)}console.log("Storage set")}),[]),{get:function(e){return n=e,null===t?null:null!=(o=t[n])?o:null;var n,o},set:function(e,t){return s(e,t)},delete:function(e){return function(e){if(null!==t){delete t[e],(0,r.WA)("roguestorage."+e).del(),n(t);var o={slotName:e,value:null};l.forEach((function(e){return e(o)}))}}(e)},subscribe:function(e){return l.push(e)},unsubscribe:function(e){var t=l.indexOf(e);-1!=t&&l.splice(t,1)}}}var l=o.createContext({});function s(e){var t=e.children,n=a();return o.createElement(l.Provider,{key:"storageProvider",value:n},t)}},3608:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return v},contentTitle:function(){return g},metadata:function(){return y},toc:function(){return h},default:function(){return f}});var o=n(2122),r=n(9756),i=(n(7294),n(3905)),a=n(4996),l=n(6902),s=n(9937),u=n(7851),c=n(2823),p=n(8952),d=n(9309),m=["components"],v={},g="useSelector",y={unversionedId:"site/hooks/useSelector",id:"site/hooks/useSelector",isDocsHomePage:!1,title:"useSelector",description:"useSelector hook is useful, when you need to add/remove/toggle certain values.",source:"@site/docs/site/hooks/useSelector.mdx",sourceDirName:"site/hooks",slug:"/site/hooks/useSelector",permalink:"/RogueLibs/ru/docs/site/hooks/useSelector",editUrl:"https://github.com/Abbysssal/RogueLibs/edit/master/website/docs/site/hooks/useSelector.mdx",version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"InventoryGrid",permalink:"/RogueLibs/ru/docs/site/components/InventoryGrid"},next:{title:"useStorage",permalink:"/RogueLibs/ru/docs/site/hooks/useStorage"}},h=[{value:"Props",id:"props",children:[]},{value:"Usage",id:"usage",children:[]},{value:"<code>minChoices</code> and <code>maxChoices</code>",id:"minchoices-maxchoices",children:[]},{value:"<code>defaultValues</code>",id:"default-values",children:[]},{value:"<code>lockChoices</code>",id:"lockchoices",children:[]},{value:"<code>group</code>",id:"group",children:[]},{value:"<code>onChange</code> event",id:"onchange-event",children:[]}],k={toc:h};function f(e){var t=e.components,n=(0,r.Z)(e,m);return(0,i.kt)("wrapper",(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"useselector"},(0,i.kt)("inlineCode",{parentName:"h1"},"useSelector")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useSelector")," hook is useful, when you need to add/remove/toggle certain values."),(0,i.kt)("p",null,"For example, it's used inside ",(0,i.kt)("inlineCode",{parentName:"p"},"InventoryRow"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"InventoryGrid")," and other interactive components:"),(0,i.kt)(s.Z,{interactive:!0,minChoices:1,maxChoices:3,mdxType:"InventoryGrid"},(0,i.kt)(u.Z,{mdxType:"InventoryRow"},(0,i.kt)(c.Z,{uid:"1",sprite:(0,a.Z)("/img/Generic.png"),mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"2",sprite:(0,a.Z)("/img/Generic2.png"),mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"3",sprite:(0,a.Z)("/img/Generic3.png"),mdxType:"InventorySlot"})),(0,i.kt)(u.Z,{mdxType:"InventoryRow"},(0,i.kt)(c.Z,{uid:"4",sprite:(0,a.Z)("/img/Generic4.png"),mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"5",sprite:(0,a.Z)("/img/Generic5.png"),mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"6",sprite:(0,a.Z)("/img/Generic6.png"),mdxType:"InventorySlot"}))),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export type Props = SelectorParameters & {\n  availableValues: (string | undefined)[] | null,\n}\nexport interface SelectorParameters {\n  defaultValues?: string | string[] | (() => string | string[] | undefined),\n  minChoices?: number,\n  maxChoices?: number,\n  lockChoices?: boolean,\n  group?: string,\n  onChange?: (values: string[]) => void,\n}\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)(p.Z,{defaultValue:"ts",values:[{value:"ts",label:"TypeScript"},{value:"js",label:"JavaScript"}],mdxType:"Tabs"},(0,i.kt)(d.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import useSelector, { SelectorParameters } from "../hooks/useSelector";\n\nexport type Props = SelectorParameters & {\n  /* your props */\n}\n\nexport default function ({/* your props */ ...pars}: Props) {\n\n  if (pars.group) pars.group = `some.storage.slot.path.${pars.group}`;\n  const [values, controller] = useSelector(availableValues, pars);\n\n  /* ... */\n}\n'))),(0,i.kt)(d.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import useSelector from "../hooks/useSelector";\n\nexport default function ({/* your props */ ...pars}) {\n\n  if (pars.group) pars.group = `some.storage.slot.path.${pars.group}`;\n  const [values, controller] = useSelector(availableValues, pars);\n\n  /* ... */\n}\n')))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"availableValues")," is the array of all possible selected values. Set it to ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," if the creation of such array is not possible."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"At the moment it's used only to select default values."))),(0,i.kt)("p",null,"Then you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"controller"),"'s functions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export type SelectorController = {\n  add: (value: string) => void,     // adds a value\n  remove: (values: string) => void, // removes a value\n  toggle: (values: string) => void, // toggles a value\n  set: (values: string[]) => void,  // sets the selected values\n  isLocked: (value: string) => boolean,\n  // alias for (values.length == (values.includes(value) ? MinChoices : MaxChoices))\n}\n")),(0,i.kt)("p",null,"In the examples below we'll be using ",(0,i.kt)("inlineCode",{parentName:"p"},"InventoryRow")," to show some of the features."),(0,i.kt)("h2",{id:"minchoices-maxchoices"},(0,i.kt)("inlineCode",{parentName:"h2"},"minChoices")," and ",(0,i.kt)("inlineCode",{parentName:"h2"},"maxChoices")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"  minChoices?: number, // default: 0\n  maxChoices?: number, // default: 1\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"minChoices")," specifies the minimum amount of selected slots.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"maxChoices")," specifies the maximum amount of selected slots. -1 \u2261 \u221e."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<InventoryRow interactive={true} minChoices={1} maxChoices={3}>\n  <InventorySlot uid="1" sprite={useBaseUrl("/img/Generic.png")}/>\n  <InventorySlot uid="2" sprite={useBaseUrl("/img/Generic2.png")} count={25}/>\n  <InventorySlot uid="3" sprite={useBaseUrl("/img/Generic3.png")} count={25} tooltip="$13"/>\n  <InventorySlot uid="4" sprite={useBaseUrl("/img/Generic4.png")} count="$13" tooltip={25}/>\n  <InventorySlot uid="5" sprite={useBaseUrl("/img/Generic5.png")} tooltip={25}/>\n  <InventorySlot uid="6" sprite={useBaseUrl("/img/Generic6.png")}/>\n</InventoryRow>\n')),(0,i.kt)(l.Z,{mdxType:"BrowserWindow"},(0,i.kt)(u.Z,{interactive:!0,minChoices:1,maxChoices:3,mdxType:"InventoryRow"},(0,i.kt)(c.Z,{uid:"1",sprite:(0,a.Z)("/img/Generic.png"),mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"2",sprite:(0,a.Z)("/img/Generic2.png"),count:25,mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"3",sprite:(0,a.Z)("/img/Generic3.png"),count:25,tooltip:"$13",mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"4",sprite:(0,a.Z)("/img/Generic4.png"),count:"$13",tooltip:25,mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"5",sprite:(0,a.Z)("/img/Generic5.png"),tooltip:25,mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"6",sprite:(0,a.Z)("/img/Generic6.png"),mdxType:"InventorySlot"}))),(0,i.kt)("h2",{id:"default-values"},(0,i.kt)("inlineCode",{parentName:"h2"},"defaultValues")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"  defaultValues?: string | string[] | (() => string | string[] | undefined),\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"defaultValues")," can be a single string, an array of strings or a lazy function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<InventoryRow interactive={true} maxChoices={3} defaultValues={["2", "4"]}>\n  <InventorySlot uid="1" sprite={useBaseUrl("/img/Generic.png")}/>\n  <InventorySlot uid="2" sprite={useBaseUrl("/img/Generic2.png")} count={25}/>\n  <InventorySlot uid="3" sprite={useBaseUrl("/img/Generic3.png")} count={25} tooltip="$13"/>\n  <InventorySlot uid="4" sprite={useBaseUrl("/img/Generic4.png")} count="$13" tooltip={25}/>\n  <InventorySlot uid="5" sprite={useBaseUrl("/img/Generic5.png")} tooltip={25}/>\n  <InventorySlot uid="6" sprite={useBaseUrl("/img/Generic6.png")}/>\n</InventoryRow>\n')),(0,i.kt)(l.Z,{mdxType:"BrowserWindow"},(0,i.kt)(u.Z,{interactive:!0,maxChoices:3,defaultValues:["2","4"],mdxType:"InventoryRow"},(0,i.kt)(c.Z,{uid:"1",sprite:(0,a.Z)("/img/Generic.png"),mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"2",sprite:(0,a.Z)("/img/Generic2.png"),count:25,mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"3",sprite:(0,a.Z)("/img/Generic3.png"),count:25,tooltip:"$13",mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"4",sprite:(0,a.Z)("/img/Generic4.png"),count:"$13",tooltip:25,mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"5",sprite:(0,a.Z)("/img/Generic5.png"),tooltip:25,mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"6",sprite:(0,a.Z)("/img/Generic6.png"),mdxType:"InventorySlot"}))),(0,i.kt)("p",null,"If not set, or if the lazy function returns ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),", picks the first ",(0,i.kt)("inlineCode",{parentName:"p"},"minChoices")," values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<InventoryRow interactive={true} minChoices={3} maxChoices={-1}>\n  <InventorySlot uid="1" sprite={useBaseUrl("/img/Generic.png")}/>\n  <InventorySlot uid="2" sprite={useBaseUrl("/img/Generic2.png")} count={25}/>\n  <InventorySlot uid="3" sprite={useBaseUrl("/img/Generic3.png")} count={25} tooltip="$13"/>\n  <InventorySlot uid="4" sprite={useBaseUrl("/img/Generic4.png")} count="$13" tooltip={25}/>\n  <InventorySlot uid="5" sprite={useBaseUrl("/img/Generic5.png")} tooltip={25}/>\n  <InventorySlot uid="6" sprite={useBaseUrl("/img/Generic6.png")}/>\n</InventoryRow>\n')),(0,i.kt)(l.Z,{mdxType:"BrowserWindow"},(0,i.kt)(u.Z,{interactive:!0,minChoices:3,maxChoices:-1,mdxType:"InventoryRow"},(0,i.kt)(c.Z,{uid:"1",sprite:(0,a.Z)("/img/Generic.png"),mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"2",sprite:(0,a.Z)("/img/Generic2.png"),count:25,mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"3",sprite:(0,a.Z)("/img/Generic3.png"),count:25,tooltip:"$13",mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"4",sprite:(0,a.Z)("/img/Generic4.png"),count:"$13",tooltip:25,mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"5",sprite:(0,a.Z)("/img/Generic5.png"),tooltip:25,mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"6",sprite:(0,a.Z)("/img/Generic6.png"),mdxType:"InventorySlot"}))),(0,i.kt)("h2",{id:"lockchoices"},(0,i.kt)("inlineCode",{parentName:"h2"},"lockChoices")),(0,i.kt)("p",null,'You can "lock" the selected values with ',(0,i.kt)("inlineCode",{parentName:"p"},"lockChoices"),".",(0,i.kt)("br",{parentName:"p"}),"\n","When the maximum selectable amount is reached, non-selected slots change to ",(0,i.kt)("inlineCode",{parentName:"p"},'"locked"')," type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<InventoryRow interactive={true} maxChoices={2} lockChoices={true}>\n  <InventorySlot uid="1" sprite={useBaseUrl("/img/Generic.png")}/>\n  <InventorySlot uid="2" sprite={useBaseUrl("/img/Generic2.png")} count={25}/>\n  <InventorySlot uid="3" sprite={useBaseUrl("/img/Generic3.png")} count={25} tooltip="$13"/>\n  <InventorySlot uid="4" sprite={useBaseUrl("/img/Generic4.png")} count="$13" tooltip={25}/>\n  <InventorySlot uid="5" sprite={useBaseUrl("/img/Generic5.png")} tooltip={25}/>\n  <InventorySlot uid="6" sprite={useBaseUrl("/img/Generic6.png")}/>\n</InventoryRow>\n')),(0,i.kt)(l.Z,{mdxType:"BrowserWindow"},(0,i.kt)(u.Z,{interactive:!0,maxChoices:2,lockChoices:!0,mdxType:"InventoryRow"},(0,i.kt)(c.Z,{uid:"1",sprite:(0,a.Z)("/img/Generic.png"),mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"2",sprite:(0,a.Z)("/img/Generic2.png"),count:25,mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"3",sprite:(0,a.Z)("/img/Generic3.png"),count:25,tooltip:"$13",mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"4",sprite:(0,a.Z)("/img/Generic4.png"),count:"$13",tooltip:25,mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"5",sprite:(0,a.Z)("/img/Generic5.png"),tooltip:25,mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"6",sprite:(0,a.Z)("/img/Generic6.png"),mdxType:"InventorySlot"}))),(0,i.kt)("h2",{id:"group"},(0,i.kt)("inlineCode",{parentName:"h2"},"group")),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"group")," to save the selected values in the local storage.",(0,i.kt)("br",{parentName:"p"}),"\n","Try selecting some slots and then reloading the page."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<InventoryRow interactive={true} group="useSelectorDemo" maxChoices={4}>\n  <InventorySlot uid="1" sprite={useBaseUrl("/img/Generic.png")}/>\n  <InventorySlot uid="2" sprite={useBaseUrl("/img/Generic2.png")} count={25}/>\n  <InventorySlot uid="3" sprite={useBaseUrl("/img/Generic3.png")} count={25} tooltip="$13"/>\n  <InventorySlot uid="4" sprite={useBaseUrl("/img/Generic4.png")} count="$13" tooltip={25}/>\n  <InventorySlot uid="5" sprite={useBaseUrl("/img/Generic5.png")} tooltip={25}/>\n  <InventorySlot uid="6" sprite={useBaseUrl("/img/Generic6.png")}/>\n</InventoryRow>\n')),(0,i.kt)(l.Z,{mdxType:"BrowserWindow"},(0,i.kt)(u.Z,{interactive:!0,group:"useSelectorDemo",maxChoices:4,mdxType:"InventoryRow"},(0,i.kt)(c.Z,{uid:"1",sprite:(0,a.Z)("/img/Generic.png"),mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"2",sprite:(0,a.Z)("/img/Generic2.png"),count:25,mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"3",sprite:(0,a.Z)("/img/Generic3.png"),count:25,tooltip:"$13",mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"4",sprite:(0,a.Z)("/img/Generic4.png"),count:"$13",tooltip:25,mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"5",sprite:(0,a.Z)("/img/Generic5.png"),tooltip:25,mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"6",sprite:(0,a.Z)("/img/Generic6.png"),mdxType:"InventorySlot"}))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Pro-tip: Local Storage")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"See the stored data in ",(0,i.kt)("strong",{parentName:"p"},"Developer Tools > Application > Storage > Local Storage"),"."))),(0,i.kt)("p",null,"You can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"group")," to synchronize choices between different instances of components:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<InventoryRow interactive={true} group="useSelectorDemo2" maxChoices={2}>\n  <InventorySlot uid="1" sprite={useBaseUrl("/img/Generic.png")}/>\n  <InventorySlot uid="2" sprite={useBaseUrl("/img/Generic2.png")} count={25}/>\n  <InventorySlot uid="3" sprite={useBaseUrl("/img/Generic3.png")} count={25} tooltip="$13"/>\n  <InventorySlot uid="4" sprite={useBaseUrl("/img/Generic4.png")} count="$13" tooltip={25}/>\n  <InventorySlot type={null}/>\n  <InventorySlot type={null}/>\n</InventoryRow>\n<InventoryRow interactive={true} group="useSelectorDemo2" maxChoices={2}>\n  <InventorySlot type={null}/>\n  <InventorySlot type={null}/>\n  <InventorySlot uid="3" sprite={useBaseUrl("/img/Generic3.png")} count={25} tooltip="$13"/>\n  <InventorySlot uid="4" sprite={useBaseUrl("/img/Generic4.png")} count="$13" tooltip={25}/>\n  <InventorySlot uid="5" sprite={useBaseUrl("/img/Generic5.png")} tooltip={25}/>\n  <InventorySlot uid="6" sprite={useBaseUrl("/img/Generic6.png")}/>\n</InventoryRow>\n')),(0,i.kt)(l.Z,{mdxType:"BrowserWindow"},(0,i.kt)(u.Z,{interactive:!0,group:"useSelectorDemo2",maxChoices:2,mdxType:"InventoryRow"},(0,i.kt)(c.Z,{uid:"1",sprite:(0,a.Z)("/img/Generic.png"),mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"2",sprite:(0,a.Z)("/img/Generic2.png"),count:25,mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"3",sprite:(0,a.Z)("/img/Generic3.png"),count:25,tooltip:"$13",mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"4",sprite:(0,a.Z)("/img/Generic4.png"),count:"$13",tooltip:25,mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{type:null,mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{type:null,mdxType:"InventorySlot"})),(0,i.kt)(u.Z,{interactive:!0,group:"useSelectorDemo2",maxChoices:2,mdxType:"InventoryRow"},(0,i.kt)(c.Z,{type:null,mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{type:null,mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"3",sprite:(0,a.Z)("/img/Generic3.png"),count:25,tooltip:"$13",mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"4",sprite:(0,a.Z)("/img/Generic4.png"),count:"$13",tooltip:25,mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"5",sprite:(0,a.Z)("/img/Generic5.png"),tooltip:25,mdxType:"InventorySlot"}),(0,i.kt)(c.Z,{uid:"6",sprite:(0,a.Z)("/img/Generic6.png"),mdxType:"InventorySlot"}))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Note the behavior, when a slot that doesn't exist in one of the rows is selected in another row."))),(0,i.kt)("h2",{id:"onchange-event"},(0,i.kt)("inlineCode",{parentName:"h2"},"onChange")," event"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"onChange")," doesn't necessarily mean that the values changed. Just that they ",(0,i.kt)("strong",{parentName:"p"},"could")," be different."))}f.isMDXComponent=!0}}]);