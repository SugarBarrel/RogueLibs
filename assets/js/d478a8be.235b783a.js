(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30],{4437:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return p},default:function(){return g}});var n=a(2122),s=a(9756),o=(a(7294),a(3905)),i=a(8952),r=a(9309),l=["components"],u={},d="useStorage",m={unversionedId:"site/hooks/useStorage",id:"site/hooks/useStorage",isDocsHomePage:!1,title:"useStorage",description:"useStorage is used to store strings in the browser's local storage.",source:"@site/docs/site/hooks/useStorage.mdx",sourceDirName:"site/hooks",slug:"/site/hooks/useStorage",permalink:"/RogueLibs/docs/site/hooks/useStorage",editUrl:"https://github.com/Abbysssal/RogueLibs/edit/master/website/docs/site/hooks/useStorage.mdx",version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"useSelector",permalink:"/RogueLibs/docs/site/hooks/useSelector"}},p=[{value:"Signature",id:"signature",children:[]},{value:"Usage",id:"usage",children:[]}],c={toc:p};function g(e){var t=e.components,a=(0,s.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usestorage"},(0,o.kt)("inlineCode",{parentName:"h1"},"useStorage")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useStorage")," is used to store strings in the browser's local storage.",(0,o.kt)("br",{parentName:"p"}),"\n","It also synchronizes all instances using the same storage slot."),(0,o.kt)("h2",{id:"signature"},"Signature"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function (\n  slotName: string | null, // name of the storage slot to use\n  defaultValue?: string | null | (() => string | null), // default value of the storage slot\n  onChange?: (value: string | null) => void // change event handler\n): [\n    string | null, // current value (null \u2261 the storage slot doesn't exist)\n    React.Dispatch<React.SetStateAction<string | null>> // function to set the value\n  ]\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If ",(0,o.kt)("inlineCode",{parentName:"p"},"slotName")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", the hook works just like a ",(0,o.kt)("inlineCode",{parentName:"p"},"useState"),"."))),(0,o.kt)(i.Z,{defaultValue:"ts",values:[{value:"ts",label:"TypeScript"},{value:"js",label:"JavaScript"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import useStorage from "../hooks/useStorage";\n\nexport default function ({/* your props */}: Props) {\n\n  const [value, setValue] = useStorage("my.storage.slot", null);\n\n  /* ... */\n}\n'))),(0,o.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import useStorage from "../hooks/useStorage";\n\nexport default function ({/* your props */}) {\n\n  const [value, setValue] = useStorage("my.storage.slot", null);\n\n  /* ... */\n}\n')))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The value is read from the local storage in an ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook, so, on the first render, the value will have the default value."))))}g.isMDXComponent=!0}}]);