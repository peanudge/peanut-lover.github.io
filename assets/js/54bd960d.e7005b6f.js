"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3969],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=i,g=p["".concat(s,".").concat(f)]||p[f]||c[f]||o;return n?r.createElement(g,a(a({ref:t},m),{},{components:n})):r.createElement(g,a({ref:t},m))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3348:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={title:"Prefix Sum",description:"\uc54c\uace0\ub9ac\uc998(GenomicRangeQuery) - \uad6c\uac04\ud569",slug:"prefix-sum",authors:"jiho",tags:["algorithm","prefix-sum","GenomicRangeQuery"],toc_min_heading_level:2,toc_max_heading_level:5},a="\uad6c\uac04 \ud569 Prefix Sum",l={permalink:"/prefix-sum",source:"@site/blog/2023-02-10-prefix-sum.md",title:"Prefix Sum",description:"\uc54c\uace0\ub9ac\uc998(GenomicRangeQuery) - \uad6c\uac04\ud569",date:"2023-02-10T00:00:00.000Z",formattedDate:"February 10, 2023",tags:[{label:"algorithm",permalink:"/tags/algorithm"},{label:"prefix-sum",permalink:"/tags/prefix-sum"},{label:"GenomicRangeQuery",permalink:"/tags/genomic-range-query"}],readingTime:2.24,hasTruncateMarker:!1,authors:[{name:"Jiho Shon",title:"Frontend Developer in miso.inc",url:"https://github.com/peanut-lover",imageURL:"https://avatars.githubusercontent.com/u/20085849?v=4",key:"jiho"}],frontMatter:{title:"Prefix Sum",description:"\uc54c\uace0\ub9ac\uc998(GenomicRangeQuery) - \uad6c\uac04\ud569",slug:"prefix-sum",authors:"jiho",tags:["algorithm","prefix-sum","GenomicRangeQuery"],toc_min_heading_level:2,toc_max_heading_level:5},nextItem:{title:"\ube14\ub85c\uadf8 \ub9ac\ubdf0 \uae30\ub2a5 \ucd94\uac00\ud558\uae30(using Utterances)",permalink:"/utterances"}},s={authorsImageUrls:[void 0]},u=[],m={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\ud56d\uc0c1 \ucf54\ub529\ud14c\uc2a4\ud2b8\uc5d0\uc11c \uc790\uc8fc \ud2c0\ub9ac\ub294 \uc720\ud615\uc778 \uad6c\uac04 \ud569\uc744 \uc774\ubc88\uc5d0 \ud55c\ubc88 \uc815\ub9ac\ud574\ubcf4\ub824\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ub9e4\ubc88 \ub9cc\ub0a0 \ub54c\ub9c8\ub2e4 \uace0\uc0dd\ud558\uace0 \ud798\ub4e4\uac8c \ud588\ub358 Prefix\ub97c \uba38\ub9ac \uc18d\uc5d0 \uac01\uc778\uc2dc\ud0a4\uae30\uc704\ud574\uc11c \uae00\ub85c \uc815\ub9ac\ud574\ubcf4\ub824\ud569\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uad6c\uac04 \ud569\uc774 \ubb54\uc9c0?"),(0,i.kt)("li",{parentName:"ul"},"\uad6c\uac04 \ud569\uc744 \uc751\uc6a9\ud55c \uc0ac\ub840\ub4e4 \ud655\uc778"),(0,i.kt)("li",{parentName:"ul"},"\uba38\ub9ac\uc18d\uc5d0 \ud45c\uc900\ud654\uc2dc\ud0ac \uc544\uc774\ub514\uc5b4")),(0,i.kt)("h1",{id:"\uad6c\uac04-\ud569\uc774\ub780"},"\uad6c\uac04 \ud569\uc774\ub780?"),(0,i.kt)("p",null,"\uc6b0\uc120,\uad6c\uac04 \ud569\uc740 \uce90\uc2dc\ud6a8\uacfc(memoization)\ub97c \uc774\uc6a9\ud55c \ud6a8\uc728\uc131 \ucd5c\uc801\ud654 \uae30\ubc95\uc774\ub77c \uc0dd\uac01\ud558\uba74 \ub420\ub4ef\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uce90\uc2dc \ubc29\ubc95\uc740 \ub2e4\uc591\ud558\uc9c0\ub9cc \uad6c\uac04\ud569\uc740 \ud2b9\ud788, ",(0,i.kt)("strong",{parentName:"p"},"\ubb34\uc5b8\uac00\ub97c \ubbf8\ub9ac \ud569\uc73c\ub85c \ub204\uc801\uc2dc\ucf1c\ub193\uace0")," \ub098\uc911\uc5d0 \ube60\ub978 \uc5f0\uc0b0\uc744 \uc704\ud574 \ub098\uc911\uc5d0 \ubbf8\ub9ac \uacc4\uc0b0\ud55c \ub0b4\uc6a9\uc744 \ud65c\uc6a9\ud574\uc11c \uac12\uc744 \uc5bb\uc5b4\ub0b4\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ud2b9\uc815 \uc704\uce58 \uc0ac\uc774\uc758 \uac12\uc744 \ube60\ub974\uac8c \ubc18\ubcf5\ud574\uc11c \uc5bb\uc5b4\ub0bc\ub824\uba74 \uc774 \uc54c\uace0\ub9ac\uc998\uc744 \ud544\uc218\ub85c \uae30\uc5b5\ub0b4\ub193\ub294 \uac83\uc774 \uc88b\uaca0\ub2e4."),(0,i.kt)("p",null,"\uad6c\uac04\ub0b4\uc5d0 \ub4f1\uc7a5 \uc5ec\ubd80, \uad6c\uac04\uc758 \ud569\uc744 \uccb4\ud06c\ud558\ub294\ub370 \uc6a9\uc774\ud55c \uac83 \uac19\ub2e4."),(0,i.kt)("h1",{id:"\uad6c\uac04-\ud569\uc744-\uc751\uc694\ud55c-\uc0ac\ub840"},"\uad6c\uac04 \ud569\uc744 \uc751\uc694\ud55c \uc0ac\ub840"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://app.codility.com/programmers/lessons/5-prefix_sums/genomic_range_query/"},"https://app.codility.com/programmers/lessons/5-prefix_sums/genomic_range_query/")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// you can write to stdout for debugging purposes, e.g.\n// console.log('this is a debug message');\n\nconst impactFactor = {\n  A: 1,\n  C: 2,\n  G: 3,\n  T: 4,\n};\n\nfunction solution(S, P, Q) {\n  const answer = [];\n  const prefixSums = {\n    A: Array(S.length).fill(0),\n    C: Array(S.length).fill(0),\n    G: Array(S.length).fill(0),\n    T: Array(S.length).fill(0),\n  };\n\n  for (let i = 0; i < S.length; i++) {\n    const s = S[i];\n\n    for (const letter of Object.keys(prefixSums)) {\n      if (i === 0) {\n        prefixSums[letter][i] = 0;\n      } else {\n        prefixSums[letter][i] = prefixSums[letter][i - 1];\n      }\n\n      if (letter === s) {\n        prefixSums[letter][i] += 1;\n      }\n    }\n  }\n\n  for (let k = 0; k < P.length; k++) {\n    const startIdx = P[k];\n    const endIdx = Q[k];\n\n    let minimum = Infinity;\n\n    for (const letter of Object.keys(prefixSums)) {\n      const startLetterCount =\n        startIdx !== 0 ? prefixSums[letter][startIdx - 1] : 0;\n      const endLetterCount = prefixSums[letter][endIdx];\n\n      if (endLetterCount - startLetterCount > 0) {\n        minimum = Math.min(minimum, impactFactor[letter]);\n      }\n    }\n\n    answer.push(minimum);\n  }\n  return answer;\n}\n")))}c.isMDXComponent=!0}}]);