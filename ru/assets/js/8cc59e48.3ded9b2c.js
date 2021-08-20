(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1213],{1079:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return p},default:function(){return c}});var n=a(2122),s=a(9756),o=(a(7294),a(3905)),r=a(1429),i=a(1016),l=["components"],u={},d="useStorageArray",m={unversionedId:"site/hooks/useStorageArray",id:"site/hooks/useStorageArray",isDocsHomePage:!1,title:"useStorageArray",description:"useStorageArray is used to store strings in the browser's local storage.",source:"@site/docs/site/hooks/useStorageArray.mdx",sourceDirName:"site/hooks",slug:"/site/hooks/useStorageArray",permalink:"/RogueLibs/ru/docs/site/hooks/useStorageArray",editUrl:"https://github.com/Abbysssal/RogueLibs/edit/main/website/docs/site/hooks/useStorageArray.mdx",version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"useStorage",permalink:"/RogueLibs/ru/docs/site/hooks/useStorage"}},p=[{value:"Signature",id:"signature",children:[]},{value:"Usage",id:"usage",children:[]}],g={toc:p};function c(e){var t=e.components,a=(0,s.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usestoragearray"},(0,o.kt)("inlineCode",{parentName:"h1"},"useStorageArray")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useStorageArray")," is used to store strings in the browser's local storage.",(0,o.kt)("br",{parentName:"p"}),"\n","It also synchronizes all instances using the same storage slot."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It works just like ",(0,o.kt)("a",{parentName:"p",href:"./useStorage"},(0,o.kt)("inlineCode",{parentName:"a"},"useStorage"))," but with string arrays instead of single strings.",(0,o.kt)("br",{parentName:"p"}),"\n","It joins the stored strings with a semicolon (",(0,o.kt)("inlineCode",{parentName:"p"},";"),"), like this: ",(0,o.kt)("inlineCode",{parentName:"p"},"value1;value2;value3"),"."))),(0,o.kt)("h2",{id:"signature"},"Signature"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function (\n  slotName: string | null, // name of the storage slot to use\n  defaultValues?: string[] | (() => string[] | undefined), // default values of the storage slot\n  onChange?: (values: string[]) => void // change event handler\n): [\n    string[], // current values\n    React.Dispatch<React.SetStateAction<string[]>> // function to set the values\n  ]\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If ",(0,o.kt)("inlineCode",{parentName:"p"},"slotName")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", the hook works just like a ",(0,o.kt)("inlineCode",{parentName:"p"},"useState"),"."))),(0,o.kt)(r.Z,{defaultValue:"ts",values:[{value:"ts",label:"TypeScript"},{value:"js",label:"JavaScript"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import useStorageArray from "../hooks/useStorageArray";\n\nexport default function ({/* your props */}: Props) {\n\n  const [values, setValues] = useStorageArray("my.storage.slot", []);\n\n  /* ... */\n}\n'))),(0,o.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import useStorageArray from "../hooks/useStorageArray";\n\nexport default function ({/* your props */}) {\n\n  const [values, setValues] = useStorageArray("my.storage.slot", []);\n\n  /* ... */\n}\n')))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The values are read from the local storage in an ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook, so, on the first render, the values will be the default ones."))))}c.isMDXComponent=!0}}]);