(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1756],{4973:function(e,t,n){"use strict";n.d(t,{Z:function(){return p},I:function(){return u}});var r=n(7294),o=/{\w+}/g,s="{}";function a(e,t){var n=[],a=e.replace(o,(function(e){var o=e.substr(1,e.length-2),a=null==t?void 0:t[o];if(void 0!==a){var l=r.isValidElement(a)?a:String(a);return n.push(l),s}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?a.split(s).reduce((function(e,t,r){var o;return e.concat(t).concat(null!==(o=n[r])&&void 0!==o?o:"")}),""):a.split(s).reduce((function(e,t,o){return[].concat(e,[r.createElement(r.Fragment,{key:o},t,n[o])])}),[])}function l(e){var t=e.children,n=e.values;if("string"!=typeof t)throw console.warn("Illegal <Interpolate> children",t),new Error("The Docusaurus <Interpolate> component only accept simple string values");return a(t,n)}var c=n(4644);function i(e){var t,n=e.id,r=e.message;return null!==(t=c[null!=n?n:r])&&void 0!==t?t:r}function u(e,t){var n,r=e.message;return a(null!==(n=i({message:r,id:e.id}))&&void 0!==n?n:r,t)}function p(e){var t,n=e.children,o=e.id,s=e.values;if("string"!=typeof n)throw console.warn("Illegal <Translate> children",n),new Error("The Docusaurus <Translate> component only accept simple string values");var a=null!==(t=i({message:n,id:o}))&&void 0!==t?t:n;return r.createElement(l,{values:s},a)}},1756:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var r=n(2122),o=n(7294),s=n(6010),a={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},l={Prism:n(7410).Z,theme:a};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},y=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=i({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=i({},n,{backgroundColor:null}),o};function g(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var h=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),c(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,s=i({},g(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),a=t.getThemeDict(t.props);return void 0!==a&&(s.style=a.plain),void 0!==o&&(s.style=void 0!==s.style?i({},s.style,o):o),void 0!==n&&(s.key=n),r&&(s.className+=" "+r),s})),c(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,s=t.getThemeDict(t.props);if(void 0!==s){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return s[n[0]];var a=r?{display:"inline-block"}:{},l=n.map((function(e){return s[e]}));return Object.assign.apply(Object,[a].concat(l))}})),c(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,s=e.token,a=i({},g(e,["key","className","style","token"]),{className:"token "+s.types.join(" "),children:s.content,style:t.getStyleForToken(s),key:void 0});return void 0!==o&&(a.style=void 0!==a.style?i({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),c(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var s=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),s}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,s=this.getThemeDict(this.props),a=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],s=0,a=0,l=[],c=[l];a>-1;){for(;(s=r[a]++)<o[a];){var i=void 0,d=t[a],g=n[a][s];if("string"==typeof g?(d=a>0?d:["plain"],i=g):(d=y(d,g.type),g.alias&&(d=y(d,g.alias)),i=g.content),"string"==typeof i){var h=i.split(u),f=h.length;l.push({types:d,content:h[0]});for(var m=1;m<f;m++)p(l),c.push(l=[]),l.push({types:d,content:h[m]})}else a++,t.push(d),n.push(i),r.push(0),o.push(i.length)}a--,t.pop(),n.pop(),r.pop(),o.pop()}return p(l),c}(void 0!==a?this.tokenize(t,r,a,n):[r]),className:"prism-code language-"+n,style:void 0!==s?s.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);var f=n(7594),m=n.n(f),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},b=n(5350),k=n(3018),j=function(){var e=(0,k.LU)().prism,t=(0,b.Z)().isDarkTheme,n=e.theme||v,r=e.darkTheme||n;return t?r:n},E=n(4973),T="codeBlockContainer_K1bP",x="codeBlockContent_hGly",w="codeBlockTitle_eoMF",C="codeBlock_23N8",N="copyButton_Ue-o",B="codeBlockLines_39YC",L=/{([\d,-]+)}/,P=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")};function Z(e){var t=e.children,n=e.className,a=e.metastring,c=e.title,i=(0,k.LU)().prism,u=(0,o.useState)(!1),p=u[0],y=u[1],d=(0,o.useState)(!1),g=d[0],f=d[1];(0,o.useEffect)((function(){f(!0)}),[]);var v=(0,k.bc)(a)||c,b=(0,o.useRef)(null),Z=[],S=j(),D=Array.isArray(t)?t.join(""):t;if(a&&L.test(a)){var I=a.match(L)[1];Z=m()(I).filter((function(e){return e>0}))}var O=n&&n.replace(/language-/,"");!O&&i.defaultLanguage&&(O=i.defaultLanguage);var _=D.replace(/\n$/,"");if(0===Z.length&&void 0!==O){for(var A,z="",R=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return P(["js","jsBlock"]);case"jsx":case"tsx":return P(["js","jsBlock","jsx"]);case"html":return P(["js","jsBlock","html"]);case"python":case"py":return P(["python"]);default:return P()}}(O),F=D.replace(/\n$/,"").split("\n"),$=0;$<F.length;){var U=$+1,G=F[$].match(R);if(null!==G){switch(G.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":z+=U+",";break;case"highlight-start":A=U;break;case"highlight-end":z+=A+"-"+(U-1)+","}F.splice($,1)}else $+=1}Z=m()(z),_=F.join("\n")}var K=function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,o=document.createElement("textarea"),s=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";var a=document.getSelection(),l=!1;a.rangeCount>0&&(l=a.getRangeAt(0)),r.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(i){}o.remove(),l&&(a.removeAllRanges(),a.addRange(l)),s&&s.focus()}(_),y(!0),setTimeout((function(){return y(!1)}),2e3)};return o.createElement(h,(0,r.Z)({},l,{key:String(g),theme:S,code:_,language:O}),(function(e){var t=e.className,n=e.style,a=e.tokens,l=e.getLineProps,c=e.getTokenProps;return o.createElement("div",{className:T},v&&o.createElement("div",{style:n,className:w},v),o.createElement("div",{className:(0,s.Z)(x,O)},o.createElement("pre",{tabIndex:0,className:(0,s.Z)(t,C,"thin-scrollbar"),style:n},o.createElement("code",{className:B},a.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return Z.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),o.createElement("span",(0,r.Z)({key:t},n),e.map((function(e,t){return o.createElement("span",(0,r.Z)({key:t},c({token:e,key:t})))})))})))),o.createElement("button",{ref:b,type:"button","aria-label":(0,E.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,s.Z)(N,"clean-btn"),onClick:K},p?o.createElement(E.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.createElement(E.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},2924:function(e,t,n){"use strict";var r=n(7294).createContext(void 0);t.Z=r},5350:function(e,t,n){"use strict";var r=n(7294),o=n(2924);t.Z=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,s]=t;if(r&&s){r=parseInt(r),s=parseInt(s);const e=r<s?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(s+=e);for(let t=r;t!==s;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);