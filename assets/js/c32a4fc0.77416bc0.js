"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3074],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1839:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:3},o="SideBar Layout",c={unversionedId:"css-basic-concepts/sidebar/index",id:"css-basic-concepts/sidebar/index",title:"SideBar Layout",description:"\uc0ac\uc774\ub4dc\ubc14\uac00 \uc788\ub294 \ub808\uc774\uc544\uc6c3\uc744 \uad6c\uc131\ud558\uae30",source:"@site/docs/css-basic-concepts/sidebar/index.md",sourceDirName:"css-basic-concepts/sidebar",slug:"/css-basic-concepts/sidebar/",permalink:"/docs/css-basic-concepts/sidebar/",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Header Layout",permalink:"/docs/css-basic-concepts/header/"}},s={},l=[{value:"\uc8fc\uc758\ud560 \uc810",id:"\uc8fc\uc758\ud560-\uc810",level:2}],p={toc:l};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sidebar-layout"},"SideBar Layout"),(0,a.kt)("p",null,"\uc0ac\uc774\ub4dc\ubc14\uac00 \uc788\ub294 \ub808\uc774\uc544\uc6c3\uc744 \uad6c\uc131\ud558\uae30"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"SideBar Image",src:n(9944).Z,width:"385",height:"379"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="container">\n  <div class="side"></div>\n  <div class="content"></div>\n</div>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".container {\n  display: flex;\n  flex-direction: row;\n}\n\n.side {\n  flex-shrink: 0;\n  width: 300px;\n}\n\n.content {\n  flex-grow: 1;\n  min-width: 0;\n}\n")),(0,a.kt)("h2",{id:"\uc8fc\uc758\ud560-\uc810"},"\uc8fc\uc758\ud560 \uc810"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"min-width"),"\ub97c ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"\uc73c\ub85c \ucc98\ub9ac\ud558\ub294 \uc774\uc720\ub294 \ucd08\uae30 \uac12\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"auto")," \uc774\uae30 \ub54c\ubb38\uc5d0 \uc790\uc2dd \uc694\uc18c\uc758 \ucd5c\ub300 \ud06c\uae30\uac00 min-width\ub85c \uc9c0\uc815\ub41c\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"flex-direction: row-reverse;"),"\ub85c \ubcc0\uacbd\ud558\uba74 \uc6b0\uce21 \uc0ac\uc774\ub4dc \ubc14\ub85c \uc27d\uac8c \ubcc0\uacbd \uac00\ub2a5"))))}d.isMDXComponent=!0},9944:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/OnlySideMenu-1b63f90700880a88edcce1f974e19f02.jpg"}}]);