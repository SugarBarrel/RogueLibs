(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3089],{6165:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var n=a(9756),r=a(7294),l=a(6010),i=a(5194),c=a(6742),s="sidebar_2ahu",o="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",v=a(4973);function f(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,v.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var h=a(571),E=["sidebar","toc","children"];var p=function(e){var t=e.sidebar,a=e.toc,c=e.children,s=(0,n.Z)(e,E),o=t&&t.items.length>0;return r.createElement(i.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},o&&r.createElement("aside",{className:"col col--3"},r.createElement(f,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o})},c),a&&r.createElement("div",{className:"col col--2"},r.createElement(h.Z,{toc:a})))))}},4428:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var n=a(7294),r=a(2263),l=a(6165),i=a(3146),c=a(6742),s=a(4973);var o=function(e){var t=e.metadata,a=t.previousPage,r=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(c.Z,{className:"pagination-nav__link",to:a},n.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.createElement(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&n.createElement(c.Z,{className:"pagination-nav__link",to:r},n.createElement("div",{className:"pagination-nav__label"},n.createElement(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},m=a(3018);var u=function(e){var t=e.metadata,a=e.items,c=e.sidebar,s=(0,r.Z)().siteConfig.title,u=t.blogDescription,d=t.blogTitle,g="/"===t.permalink?s:d;return n.createElement(l.Z,{title:g,description:u,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:c},a.map((function(e){var t=e.content;return n.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:t.metadata.truncated},n.createElement(t,null))})),n.createElement(o,{metadata:t}))}},3146:function(e,t,a){"use strict";a.d(t,{Z:function(){return f}});var n=a(7294),r=a(6010),l=a(3905),i=a(4973),c=a(6742),s=a(3018),o=a(2238),m=a(1217),u=a(6146),d="blogPostTitle_GeHD",g="blogPostData_291c",v="blogPostDetailsFull_3kfx";var f=function(e){var t,a,f,h=(a=(0,s.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),E=e.children,p=e.frontMatter,b=e.metadata,_=e.truncated,Z=e.isBlogPostPage,N=void 0!==Z&&Z,k=b.date,T=b.formattedDate,L=b.permalink,w=b.tags,y=b.readingTime,C=b.title,x=b.editUrl,I=p.author,A=p.image,P=p.keywords,M=p.author_url||p.authorURL,R=p.author_title||p.authorTitle,O=p.author_image_url||p.authorImageURL;return n.createElement(n.Fragment,null,n.createElement(m.Z,{keywords:P,image:A}),n.createElement("article",{className:N?void 0:"margin-bottom--xl"},(f=N?"h1":"h2",n.createElement("header",null,n.createElement(f,{className:d},N?C:n.createElement(c.Z,{to:L},C)),n.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:k},T),y&&n.createElement(n.Fragment,null," \xb7 ",h(y))),n.createElement("div",{className:"avatar margin-vert--md"},O&&n.createElement(c.Z,{className:"avatar__photo-link avatar__photo",href:M},n.createElement("img",{src:O,alt:I})),n.createElement("div",{className:"avatar__intro"},I&&n.createElement(n.Fragment,null,n.createElement("div",{className:"avatar__name"},n.createElement(c.Z,{href:M},I)),n.createElement("small",{className:"avatar__subtitle"},R)))))),n.createElement("div",{className:"markdown"},n.createElement(l.Zo,{components:o.Z},E)),(w.length>0||_)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(t={},t[v]=N,t))},w.length>0&&n.createElement("div",{className:"col"},n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),w.map((function(e){var t=e.label,a=e.permalink;return n.createElement(c.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),N&&x&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:x})),!N&&_&&n.createElement("div",{className:"col text--right"},n.createElement(c.Z,{to:b.permalink,"aria-label":"Read more about "+C},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},6146:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var n=a(7294),r=a(4973),l=a(2122),i=a(9756),c=a(6010),s="iconEdit_2_ui",o=["className"],m=function(e){var t=e.className,a=(0,i.Z)(e,o);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.Z)(s,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function u(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(m,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2238:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var n=a(2122),r=a(7294),l=a(6742),i=a(1756),c=a(6627),s=a(6010),o=a(3018),m="details_1VDD";function u(e){var t=Object.assign({},e);return r.createElement(o.PO,(0,n.Z)({},t,{className:(0,s.Z)("alert alert--info",m,t.className)}))}var d={code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(i.Z,e):r.createElement("code",e)},a:function(e){return r.createElement(l.Z,e)},pre:function(e){var t,a=e.children;return(0,r.isValidElement)(null==a||null==(t=a.props)?void 0:t.children)?null==a?void 0:a.props.children:r.createElement(i.Z,(0,r.isValidElement)(a)?null==a?void 0:a.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),a=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),l=r.createElement(r.Fragment,null,t.filter((function(e){return e!==a})));return r.createElement(u,(0,n.Z)({},e,{summary:a}),l)},h1:(0,c.Z)("h1"),h2:(0,c.Z)("h2"),h3:(0,c.Z)("h3"),h4:(0,c.Z)("h4"),h5:(0,c.Z)("h5"),h6:(0,c.Z)("h6")}},571:function(e,t,a){"use strict";a.d(t,{r:function(){return s},Z:function(){return o}});var n=a(7294),r=a(6010);var l=function(e,t,a){var r=(0,n.useState)(void 0),l=r[0],i=r[1];(0,n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var r=0,c=!1,s=document.getElementsByClassName(e);r<s.length&&!c;){var o=s[r],m=o.href,u=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===u&&(l&&l.classList.remove(t),o.classList.add(t),i(o),c=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i="tableOfContents_35-E",c="table-of-contents__link";function s(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:c,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(s,{isChild:!0,toc:e.children}))}))):null}var o=function(e){var t=e.toc;return l(c,"table-of-contents__link--active",100),n.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar")},n.createElement(s,{toc:t}))}},5420:function(e,t,a){"use strict";a.d(t,{Do:function(){return c},Xq:function(){return s}});var n=a(7294),r=a(3018),l="roguestorage.";function i(){var e=(0,n.useState)(null),t=e[0],a=e[1],i=(0,n.useState)([]),c=i[0],s=(i[1],(0,n.useCallback)((function(e,n){if(null!==t){t[e]=n,(0,r.WA)("roguestorage."+e).set(n),a(t);var l={slotName:e,value:n};c.forEach((function(e){return e(l)}))}}),[t]));return(0,n.useEffect)((function(){var e={};try{(0,r._f)().forEach((function(t){if(t.startsWith(l)){var a=t.substring(l.length),n=(0,r.WA)(t).get();null!==n&&(e[a]=n);var i={slotName:a,value:n};c.forEach((function(e){return e(i)}))}})),a(e)}catch(t){console.error(t)}console.log("Storage set")}),[]),{get:function(e){return a=e,null===t?null:null!=(n=t[a])?n:null;var a,n},set:function(e,t){return s(e,t)},delete:function(e){return function(e){if(null!==t){delete t[e],(0,r.WA)("roguestorage."+e).del(),a(t);var n={slotName:e,value:null};c.forEach((function(e){return e(n)}))}}(e)},subscribe:function(e){return c.push(e)},unsubscribe:function(e){var t=c.indexOf(e);-1!=t&&c.splice(t,1)}}}var c=n.createContext({});function s(e){var t=e.children,a=i();return n.createElement(c.Provider,{key:"storageProvider",value:a},t)}},6627:function(e,t,a){"use strict";a.d(t,{N:function(){return v},Z:function(){return f}});var n=a(2122),r=a(9756),l=a(7294),i=a(6010),c=a(4973),s=a(3018),o="enhancedAnchor_3KR1",m="heading_19KT",u="h1Heading_24eg",d=["children"],g=["id"],v=function(e){var t=e.children,a=(0,r.Z)(e,d);return l.createElement("header",null,l.createElement("h1",(0,n.Z)({},a,{id:void 0,className:u}),t))},f=function(e){return"h1"===e?v:(t=e,function(e){var a=e.id,u=(0,r.Z)(e,g),d=(0,s.LU)().navbar.hideOnScroll;return a?l.createElement(t,(0,n.Z)({className:m},u),l.createElement("a",{className:"hash-link",href:"#"+a,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#"),u.children,l.createElement("a",{id:a,"aria-hidden":"true",tabIndex:-1,className:(0,i.Z)("anchor",d||o)})):l.createElement(t,u)});var t}},2024:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var n=a(7294),r=a(6482),l=a(5420);function i(e){return n.createElement(l.Xq,null,n.createElement(r.Z,e))}}}]);