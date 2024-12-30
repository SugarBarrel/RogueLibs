"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4013],{2462:(e,t,s)=>{s.d(t,{Z:()=>n});s(7294);var a=s(512),i=s(2695),r=s(9322),l=s(5893);function n(e){const{sidebar:t,toc:s,children:n,...c}=e,o=t&&t.items.length>0;return(0,l.jsx)(i.Z,{...c,children:(0,l.jsx)("div",{className:"container margin-vert--lg",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)(r.Z,{sidebar:t}),(0,l.jsx)("main",{className:(0,a.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"https://schema.org/Blog",children:n}),s&&(0,l.jsx)("div",{className:"col col--2",children:s})]})})})}},1223:(e,t,s)=>{s.r(t),s.d(t,{default:()=>j});s(7294);var a=s(512),i=s(5999);const r=()=>(0,i.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var l=s(1944),n=s(5281),c=s(2462),o=s(3008),d=s(2503);const m={tag:"tag_Nnez"};var h=s(5893);function g(e){let{letterEntry:t}=e;return(0,h.jsxs)("article",{children:[(0,h.jsx)(d.Z,{as:"h2",id:t.letter,children:t.letter}),(0,h.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,h.jsx)("li",{className:m.tag,children:(0,h.jsx)(o.Z,{...e})},e.permalink)))}),(0,h.jsx)("hr",{})]})}function b(e){let{tags:t}=e;const s=function(e){const t={};return Object.values(e).forEach((e=>{const s=function(e){return e[0].toUpperCase()}(e.label);t[s]??=[],t[s].push(e)})),Object.entries(t).sort(((e,t)=>{let[s]=e,[a]=t;return s.localeCompare(a)})).map((e=>{let[t,s]=e;return{letter:t,tags:s.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return(0,h.jsx)("section",{className:"margin-vert--lg",children:s.map((e=>(0,h.jsx)(g,{letterEntry:e},e.letter)))})}var u=s(197);function j(e){let{tags:t,sidebar:s}=e;const i=r();return(0,h.jsxs)(l.FG,{className:(0,a.Z)(n.k.wrapper.blogPages,n.k.page.blogTagsListPage),children:[(0,h.jsx)(l.d,{title:i}),(0,h.jsx)(u.Z,{tag:"blog_tags_list"}),(0,h.jsxs)(c.Z,{sidebar:s,children:[(0,h.jsx)(d.Z,{as:"h1",children:i}),(0,h.jsx)(b,{tags:t})]})]})}},3008:(e,t,s)=>{s.d(t,{Z:()=>n});s(7294);var a=s(512),i=s(3692);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=s(5893);function n(e){let{permalink:t,label:s,count:n}=e;return(0,l.jsxs)(i.Z,{href:t,className:(0,a.Z)(r.tag,n?r.tagWithCount:r.tagRegular),children:[s,n&&(0,l.jsx)("span",{children:n})]})}},3961:(e,t,s)=>{s.d(t,{c:()=>l});var a=s(7294),i=s(6550),r=s(8596);function l(e){const{pathname:t}=(0,i.TH)();return(0,a.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,r.Mg)(e.permalink,t))}(e,t)))),[e,t])}},9322:(e,t,s)=>{s.d(t,{Z:()=>b});s(7294);var a=s(7524),i=s(512),r=s(3692),l=s(5999),n=s(3961);const c={sidebar:"sidebar_brwN",sidebarItemTitle:"sidebarItemTitle_r4Q1",sidebarItemList:"sidebarItemList_QwSx",sidebarItem:"sidebarItem_lnhn",sidebarItemLink:"sidebarItemLink_yNGZ",sidebarItemLinkActive:"sidebarItemLinkActive_oSRm"};var o=s(5893);function d(e){let{sidebar:t}=e;const s=(0,n.c)(t.items);return(0,o.jsx)("aside",{className:"col col--3",children:(0,o.jsxs)("nav",{className:(0,i.Z)(c.sidebar,"thin-scrollbar"),"aria-label":(0,l.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,o.jsx)("div",{className:c.sidebarItemTitle,children:"New posts (2024\u2013)"}),(0,o.jsx)("div",{style:{marginBottom:"2rem",fontWeight:"bold",fontSize:"1.2rem"},children:(0,o.jsx)(r.Z,{to:"https://chsm.dev/blog",style:{color:"#fbb946"},children:"Blog moved to chsm.dev \ud83e\udc85"})}),(0,o.jsx)("div",{className:(0,i.Z)(c.sidebarItemTitle,"margin-bottom--md"),children:"Blog archive (2022\u201324)"}),(0,o.jsx)("ul",{className:(0,i.Z)(c.sidebarItemList,"clean-list"),children:s.map((e=>(0,o.jsx)("li",{className:c.sidebarItem,children:(0,o.jsx)(r.Z,{isNavLink:!0,to:e.permalink,className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var m=s(3102);function h(e){let{sidebar:t}=e;const s=(0,n.c)(t.items);return(0,o.jsxs)("ul",{className:"menu__list",children:[(0,o.jsx)("div",{children:"New posts (2024\u2013)"}),(0,o.jsx)("div",{style:{marginBottom:"2rem",fontWeight:"bold",fontSize:"1.2rem",marginLeft:"1rem"},children:(0,o.jsx)(r.Z,{to:"https://chsm.dev/blog",style:{color:"#fbb946"},children:"Blog moved to chsm.dev \ud83e\udc85"})}),(0,o.jsx)("div",{children:"Blog archive (2022\u201324)"}),s.map((e=>(0,o.jsx)("li",{className:"menu__list-item",children:(0,o.jsx)(r.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))]})}function g(e){return(0,o.jsx)(m.Zo,{component:h,props:e})}function b(e){let{sidebar:t}=e;const s=(0,a.i)();return t?.items.length?"mobile"===s?(0,o.jsx)(g,{sidebar:t}):(0,o.jsx)(d,{sidebar:t}):null}}}]);