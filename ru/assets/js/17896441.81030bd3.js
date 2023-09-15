"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7918],{8945:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ie});var a=n(7294),l=n(1944),r=n(902);const o=a.createContext(null);function c(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(o.Provider,{value:l},t)}function s(){const e=(0,a.useContext)(o);if(null===e)throw new r.i6("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:n}=s();return a.createElement(l.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var d=n(6010),m=n(7524),u=n(7462),v=n(5999),b=n(2244);function h(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,v.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&a.createElement(b.Z,(0,u.Z)({},t,{subLabel:a.createElement(v.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(b.Z,(0,u.Z)({},n,{subLabel:a.createElement(v.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function p(){const{metadata:e}=s();return a.createElement(h,{previous:e.previous,next:e.next})}var f=n(2263),E=n(9960),g=n(143),L=n(5281),N=n(373),C=n(4477);const k={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(v.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(v.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function Z(e){const t=k[e.versionMetadata.banner];return a.createElement(t,e)}function _(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(v.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(E.Z,{to:n,onClick:l},a.createElement(v.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function x(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:l}}=(0,f.Z)(),{pluginId:r}=(0,g.gA)({failfast:!0}),{savePreferredVersionName:o}=(0,N.J)(r),{latestDocSuggestion:c,latestVersionSuggestion:s}=(0,g.Jo)(r),i=c??(m=s).docs.find((e=>e.id===m.mainDocId));var m;return a.createElement("div",{className:(0,d.Z)(t,L.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(Z,{siteTitle:l,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(_,{versionLabel:s.label,to:i.path,onClick:()=>o(s.name)})))}function T(e){let{className:t}=e;const n=(0,C.E)();return n.banner?a.createElement(x,{className:t,versionMetadata:n}):null}function H(e){let{className:t}=e;const n=(0,C.E)();return n.badge?a.createElement("span",{className:(0,d.Z)(t,L.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(v.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function U(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(v.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function y(e){let{lastUpdatedBy:t}=e;return a.createElement(v.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function A(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:L.k.common.lastUpdated},a.createElement(v.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(U,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(y,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var w=n(4881),I=n(1526);const M={lastUpdated:"lastUpdated_vwxv"};function B(e){return a.createElement("div",{className:(0,d.Z)(L.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(I.Z,e)))}function O(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:r}=e;return a.createElement("div",{className:(0,d.Z)(L.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(w.Z,{editUrl:t})),a.createElement("div",{className:(0,d.Z)("col",M.lastUpdated)},(n||l)&&a.createElement(A,{lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function S(){const{metadata:e}=s(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:o}=e,c=o.length>0,i=!!(t||n||r);return c||i?a.createElement("footer",{className:(0,d.Z)(L.k.docs.docFooter,"docusaurus-mt-lg")},c&&a.createElement(B,{tags:o}),i&&a.createElement(O,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var V=n(6043),P=n(3743);const D={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function R(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,u.Z)({type:"button"},n,{className:(0,d.Z)("clean-btn",D.tocCollapsibleButton,!t&&D.tocCollapsibleButtonExpanded,n.className)}),a.createElement(v.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const F={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function W(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:o,toggleCollapsed:c}=(0,V.u)({initialState:!0});return a.createElement("div",{className:(0,d.Z)(F.tocCollapsible,!o&&F.tocCollapsibleExpanded,n)},a.createElement(R,{collapsed:o,onClick:c}),a.createElement(V.z,{lazy:!0,className:F.tocCollapsibleContent,collapsed:o},a.createElement(P.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const q={tocMobile:"tocMobile_ITEo"};function z(){const{toc:e,frontMatter:t}=s();return a.createElement(W,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(L.k.docs.docTocMobile,q.tocMobile)})}var $=n(9407);function j(){const{toc:e,frontMatter:t}=s();return a.createElement($.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:L.k.docs.docTocDesktop})}var G=n(6597),J=n(5203);function Y(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=s();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,d.Z)(L.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(G.Z,{as:"h1"},n)),a.createElement(J.Z,null,t))}var K=n(3438),Q=n(8596),X=n(4996);function ee(e){return a.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const te={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function ne(){const e=(0,X.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(E.Z,{"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},a.createElement(ee,{className:te.breadcrumbHomeIcon})))}const ae={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function le(e){let{children:t,href:n,isLast:l}=e;const r="breadcrumbs__link";return l?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(E.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r},t)}function re(e){let{children:t,active:n,index:l,addMicrodata:r}=e;return a.createElement("li",(0,u.Z)({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(l+1)}))}function oe(){const e=(0,K.s1)(),t=(0,Q.Ns)();return e?a.createElement("nav",{className:(0,d.Z)(L.k.docs.docBreadcrumbs,ae.breadcrumbsContainer),"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(ne,null),e.map(((t,n)=>{const l=n===e.length-1;return a.createElement(re,{key:n,active:l,index:n,addMicrodata:!!t.href},a.createElement(le,{href:t.href,isLast:l},t.label))})))):null}const ce={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function se(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=s(),n=(0,m.i)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?a.createElement(z,null):void 0,desktop:!r||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(j,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.Z)("col",!n.hidden&&ce.docItemCol)},a.createElement(T,null),a.createElement("div",{className:ce.docItemContainer},a.createElement("article",null,a.createElement(oe,null),a.createElement(H,null),n.mobile,a.createElement(Y,null,t),a.createElement(S,null)),a.createElement(p,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function ie(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(c,{content:e.content},a.createElement(l.FG,{className:t},a.createElement(i,null),a.createElement(se,null,a.createElement(n,null))))}},9407:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),l=n(7294),r=n(6010),o=n(3743);const c={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},s="table-of-contents__link toc-highlight",i="table-of-contents__link--active";function d(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,r.Z)(c.tableOfContents,"thin-scrollbar",t)},l.createElement(o.Z,(0,a.Z)({},n,{linkClassName:s,linkActiveClassName:i})))}},3743:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(7462),l=n(7294),r=n(6668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function i(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>s(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function d(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,l.useRef)(void 0),n=d();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),s=i(c,{anchorTopOffset:n.current}),d=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const v=l.memo(u);function b(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:d,maxHeadingLevel:u,...b}=e;const h=(0,r.L)(),p=d??h.tableOfContents.minHeadingLevel,f=u??h.tableOfContents.maxHeadingLevel,E=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>c({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:p,maxHeadingLevel:f});return m((0,l.useMemo)((()=>{if(s&&i)return{linkClassName:s,linkActiveClassName:i,minHeadingLevel:p,maxHeadingLevel:f}}),[s,i,p,f])),l.createElement(v,(0,a.Z)({toc:E,className:n,linkClassName:s},b))}},4477:(e,t,n)=>{n.d(t,{E:()=>c,q:()=>o});var a=n(7294),l=n(902);const r=a.createContext(null);function o(e){let{children:t,version:n}=e;return a.createElement(r.Provider,{value:n},t)}function c(){const e=(0,a.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}},6597:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),l=n(7294),r=n(6010),o=n(5999),c=n(6668);const s={anchor:"anchor_q0b4",anchorWithStickyNavbar:"anchorWithStickyNavbar_loeA",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_emO8"};function i(e){let{as:t,id:n,...i}=e;const{navbar:{hideOnScroll:d}}=(0,c.L)();return n?l.createElement(t,(0,a.Z)({},i,{className:(0,r.Z)("anchor",s.anchor,{[s.anchorWithHideOnScrollNavbar]:d,[s.anchorWithStickyNavbar]:!d}),id:n}),l.createElement("a",{className:"hash-link",href:`#${n}`,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")," ",i.children):l.createElement(t,i)}function d(e){let{as:t,...n}=e;return"h1"===t?l.createElement("h1",(0,a.Z)({},n,{id:void 0}),n.children):l.createElement(i,(0,a.Z)({as:t},n))}}}]);