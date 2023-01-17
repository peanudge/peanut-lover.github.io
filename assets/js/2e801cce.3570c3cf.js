"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[450],{6029:t=>{t.exports=JSON.parse('{"blogPosts":[{"id":"ast","metadata":{"permalink":"/ast","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-01-17-component-tracking-using-ast.md","source":"@site/blog/2023-01-17-component-tracking-using-ast.md","title":"AST \ubd84\uc11d\uc744 \ud65c\uc6a9\ud574\uc11c \ucef4\ud3ec\ub10c\ud2b8 \ucd94\uc801\ud574\ubcf4\uae30","description":"Webpack Plugin\uc744 \ud65c\uc6a9\ud574\uc11c Component \uc0ac\uc6a9 \ub0b4\uc5ed \ud655\uc778\ud558\ub294 \ud504\ub85c\uc81d\ud2b8","date":"2023-01-17T00:00:00.000Z","formattedDate":"January 17, 2023","tags":[{"label":"ast","permalink":"/tags/ast"},{"label":"webpack","permalink":"/tags/webpack"},{"label":"design-system","permalink":"/tags/design-system"},{"label":"react","permalink":"/tags/react"}],"readingTime":23.185,"hasTruncateMarker":true,"authors":[{"name":"Jiho Shon","title":"Frontend Developer in miso.inc","url":"https://github.com/peanut-lover","imageURL":"https://avatars.githubusercontent.com/u/20085849?v=4","key":"jiho"}],"frontMatter":{"title":"AST \ubd84\uc11d\uc744 \ud65c\uc6a9\ud574\uc11c \ucef4\ud3ec\ub10c\ud2b8 \ucd94\uc801\ud574\ubcf4\uae30","description":"Webpack Plugin\uc744 \ud65c\uc6a9\ud574\uc11c Component \uc0ac\uc6a9 \ub0b4\uc5ed \ud655\uc778\ud558\ub294 \ud504\ub85c\uc81d\ud2b8","slug":"ast","authors":"jiho","tags":["ast","webpack","design-system","react"],"toc_min_heading_level":2,"toc_max_heading_level":5},"nextItem":{"title":"\ube14\ub85c\uadf8 \uc2dc\uc791\uc744 \uc54c\ub9ac\uba70...","permalink":"/welcome-docusaurus-v2"}},"content":"2022 \ud328\uc2a4\ud2b8 \ucea0\ud37c\uc2a4\uc5d0\uc11c \uc9c4\ud589\ud558\ub294 inner circle \ub514\uc790\uc778\uc2dc\uc2a4\ud15c(\uae40\ubbfc\ud0dc \uba58\ud1a0\ub2d8) \uc2a4\ud130\ub514\uc5d0\uc11c \uc2dc\ub3c4\ud574\ubcf4\uc558\ub358 \ub0b4\uc6a9\uc744 \uc815\ub9ac\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4.\\n\\n\ud504\ub85c\uc81d\ud2b8\ub97c \uc9c4\ud589\ud558\uae30 \uc55e\uc11c \uc8fc\uc81c\ub97c \uc815\ud558\uae30\uae4c\uc9c0 \ud55c\ub2ec \uc815\ub3c4\ub97c \uace0\ubbfc\ud588\uc5c8\uc2b5\ub2c8\ub2e4. \uadf8\ub9cc\ud07c \ub514\uc790\uc778 \uc2dc\uc2a4\ud15c\uc758 \uc815\uc758 \uc790\uccb4\uac00 \uc870\uc9c1, \ud504\ub85c\uc81d\ud2b8\ub9c8\ub2e4 \ub2ec\ub77c\uc9c8\ub9cc\ud07c \ucd94\uc0c1\uc801\uc778 \uc8fc\uc81c\uc774\uae30\uc5d0 \ud300\uc6d0\ub4e4\uacfc \ud569\uc758\ub41c \ubaa9\ud45c\ub97c \uc120\uc815\ud558\uae30\uac00 \uc27d\uc9c0\uc54a\uc558\uc2b5\ub2c8\ub2e4.\\n\\n\uadf8\ub798\uc11c \ub2e4\ub978 \uc870\uc9c1\uc774 \uc0ac\uc6a9\ud558\ub294 \ub514\uc790\uc778 \uc2dc\uc2a4\ud15c \uc790\uccb4\ub97c \uc9d1\uc911\ud558\uae30\ubcf4\ub2e4\ub294 \ud604\uc7ac \uac1c\ubc1c\uc790\uc640 \ub514\uc790\uc774\ub108\uac00 \ud611\uc5c5\ud558\ub294\ub370\uc5d0 \uc788\uc5b4\uc11c \ubc29\ud574\uac00 \ub418\ub294 \ubb38\uc81c\uc5d0 \ub300\ud55c \ubb38\uc81c\uc815\uc758\ub97c \ud574\ubcf4\uace0 \uadf8 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\ub294 \ub3c4\uad6c \ud639\uc740 \uc6cc\ud06c\ud50c\ub85c\uc6b0\ub97c \ud55c\ubc88 \uac1c\uc120\ud574\ubcf4\ub294 \ubc29\ud5a5\uc73c\ub85c \uace0\ubbfc\uc744 \uc2dc\uc791\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4.\\n\\n\x3c!--truncate--\x3e\\n\\n\uac1c\ubc1c\uc790, \ub514\uc790\uc774\ub108 \uc9c0\uc778\ub4e4\uacfc \uc778\ud130\ubdf0\ub97c \ud1b5\ud574 \ub514\uc790\uc778 \uc2dc\uc2a4\ud15c\uc5d0\uc11c\uc758 \uc5ec\ub7ec \ubb38\uc81c\ub4e4\uc744 \ud30c\uc545\ud574\ubcfc \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.\\n\\n> \uac1c\ubc1c\uc790\uc640 \ub514\uc790\uc774\ub108\uac00 \ubc14\ub77c\ubcf4\ub294 \ub514\uc790\uc778 \uc2dc\uc2a4\ud15c\uc758 \uc2dc\uac01\uc740 \uad49\uc7a5\ud788 \ub2ec\ub790\uace0 \ub514\uc790\uc774\ub108\uac00 \ub8e9\uc564\ud544 \uc77c\uce58\uc2dc\ud0a4\uae30 \uc704\ud574\uc11c\ub294 \uac1c\ubc1c\uc790\ub4e4\uacfc\uc758 \ucee4\ubba4\ub2c8\ucf00\uc774\uc158 \ube44\uc6a9\uc774 \ub9ce\uc774 \ud544\uc694\ud568.\\n\\n\uc0ac\uc2e4 \uadf8 \uc678\uc5d0 \uc6d0\ud65c\ud55c \ub514\uc790\uc778 \uc2dc\uc2a4\ud15c\uc744 \ud1b5\ud55c \uc6cc\ud06c\ud50c\ub85c\uc6b0\ub97c \ubc29\ud574\ud558\ub294 \ub2e4\uc591\ud55c \uc694\uc18c\uac00 \uc788\uc5c8\uc9c0\ub9cc \uc6b0\uc120\uc21c\uc704\ub97c \uc815\ud560 \ub9cc\ud07c \ub9ce\uc740 \uc815\ubcf4\ub97c \uc218\uc9d1\ud558\uae30\uac00 \uc5b4\ub824\uc6cc\uc11c **\uac1c\uc778\uc801\uc778** \uacbd\ud5d8\uc5d0\uc11c \uac00\uc7a5 \ud06c\uac8c \uac1c\uc120\ud558\uace0 \uc2f6\uc740 \uc694\uc18c\ub97c \ud574\uacb0\ud574\ubcf4\uace0 \uc2f6\uc5b4\uc11c \uc8fc\uad00\uc744 \ub9ce\uc774 \ubc18\uc601\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4. (\uc77c\uc774 \uc544\ub2c8\ub77c \uc0ac\uc774\ub4dc \ud504\ub85c\uc81d\ud2b8\uc774\uae30\uc5d0 \ud83d\ude09)\\n\\n\uc11c\ub450\uac00 \uae38\uc5c8\uace0 \uc774\ubc88 PoC(Proof Of Concept) \ub97c \ud1b5\ud574 \ud574\uacb0\ud558\uace0 \uc2f6\uc740 \ubb38\uc81c\ub97c \uc815\uc758\ud574\ubcf4\uba74 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4.\\n\\n# \ubb38\uc81c\uc815\uc758\\n\\n\u270f\ufe0f \\"\ub514\uc790\uc778\uc640 \uac1c\ubc1c\uc790\uac00 \ucef4\ud3ec\ub10c\ud2b8\ub97c **\uc5b8\uc81c \uc5b4\ub514\uc11c \uc5b4\ub5bb\uac8c** \uc0ac\uc6a9\ud558\ub294\uc9c0 \ucd94\uc801\ud558\ub294 \uac83\uc740 \uc27d\uc9c0 \uc54a\ub2e4. \ud2b9\ud788, \ubb38\uc11c\ud654\uac00 \ub418\uc5b4\uc788\uc9c0\uc54a\ub2e4\uba74 \ub514\uc790\uc774\ub108\uac00 \ud63c\uc790 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc0ac\uc6a9\ub418\ub294 \ud654\uba74\uc744 \ucc3e\ub294 \uac83 \uc790\uccb4\uac00 \ubd88\uac00\ub2a5\ud560 \uc218\ub3c4 \uc788\ub2e4.\\"\\n\\n\ucd5c\uadfc \\"\ub370\uc774\ud130 \ubb38\ud574\ub825\\"\uc774\ub77c\ub294 \ucc45\uc744 \ud1b5\ud574 \ubc30\uc6b4 \uac83\uc744 \ud55c\ubc88 \uc368\uba39\uc5b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \ubb38\uc81c\uc815\uc758\ub97c \uc81c\ub300\ub85c \ud558\uae30\uc704\ud574 \uc778\uacfc \uad00\uacc4\ub97c \uc815\ud655\ud788 \ud574\ubcf4\uc544\uc57c\ud560 \uac83 \uac19\uc2b5\ub2c8\ub2e4.\\n\\n\\"\uc0ac\uc6a9\ub418\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc27d\uac8c \ubabb \ucc3e\ub294 \uac83\\"\uc774 \ubb38\uc81c \uc77c\uae4c\uc694?\\n\\n\ucef4\ud3ec\ub10c\ud2b8\ub97c \uc65c \ucc3e\uc544\uc57c\ud560\uae4c\uc694? \uc77c\uad00\uc131(\ub8e9\uc564\ud544)\uc744 \uc720\uc9c0\ud558\uae30 \uc704\ud574\uc11c\ub77c\uace0 \ub9d0\ud560 \uc218 \uc788\uaca0\ub124\uc694. \uc774\ub7f0 \uce21\uba74\uc5d0\uc11c \ubcf4\uba74 \ucef4\ud3f0\ub10c\ud2b8\ub97c \uc27d\uac8c \ubabb\ucc3e\ub294 \uac83\uc740 \ucef4\ud3ec\ub10c\ud2b8 \uc77c\uad00\uc131\uc744 \uc720\uc9c0\ud558\uae30\uac00 \uc5b4\ub835\ub2e4\uc758 \uc6d0\uc778\uc774 \ub420 \uc218 \uc788\uc744 \uac83 \uac19\uc2b5\ub2c8\ub2e4.\\n\\n\uacb0\uad6d, **\ucef4\ud3ec\ub10c\ud2b8 \uc77c\uad00\uc131\uc744 \uc720\uc9c0\ud558\uae30 \uc5b4\ub835\ub2e4**\uac00 \uc9c4\uc9dc \ubb38\uc81c\uc774\uace0 \uadf8 \ubb38\uc81c\uc758 \uc6d0\uc778 \uc911\uc5d0 \ud558\ub098\uc778 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc27d\uac8c \ucc3e\uc744 \uc218 \uc5c6\ub2e4\ub294 \uac83\uc744 \ud574\uacb0\ud558\uae30 \uc704\ud574 \uc800\ud76c\ub294 \uc774\ubc88 PoC\ub97c \uc9c4\ud589\ud55c\ub2e4\uace0 \ubcfc \uc218 \uc788\uaca0\uc2b5\ub2c8\ub2e4.\\n\\n> \ud83d\udc40 \uc65c \uc77c\uad00\uc131\uc774 \uc720\uc9c0\ub418\uc5b4\uc57c\ud558\ub290\ub0d0?\ub77c\uace0 \ub610 \ud55c\ubc88 \uc0dd\uac01\ud574\ubcfc \uc218 \uc788\uc9c0\ub9cc \ub110\ub9ac \uc54c\ub824\uc9c4 \ub514\uc790\uc778 \uc2dc\uc2a4\ud15c\uc758 \uc7a5\uc810\uc911 \ud558\ub098\uc774\uae30\uc5d0 \ucda9\ubd84\ud788 \uc99d\uba85\ub418\uc5c8\uae30\uc5d0 \uc774 \uc815\ub3c4 \ubb38\uc81c\uc815\uc758\ub77c\uba74 \ucda9\ubd84\ud560 \uac83 \uac19\uc2b5\ub2c8\ub2e4.\\n\\n# \ud574\uacb0 \ubc29\uc548\\n\\n\ubb38\uc81c \uc815\uc758\uc640 \uadf8 \ubb38\uc81c\uc758 \uc6d0\uc778\uc744 \ud655\uc778\ud588\uc73c\ub2c8 \uc774\ubc88\uc5d0\ub294 \uadf8 \uc6d0\uc778\uc744 \ud574\uacb0\ud560 \ubc29\uc548\uc5d0 \ub300\ud574 \uc0dd\uac01\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.\\n\\n\uc544\uc8fc \uac10\uc0ac\ud558\uac8c\ub3c4 \ubc30\uc2dc\uc2dc \ub514\uc790\uc778\uc2dc\uc2a4\ud15c \uad6c\uc131\uc744 \uc18c\uac1c\ud558\ub294 \uc720\ud29c\ube0c \uc601\uc0c1\uc774 \uacf5\uac1c\ub418\uc5b4\uc788\uc5c8\uc2b5\ub2c8\ub2e4. \ud504\ub7ec\ub355\ud2b8\ubcc4\ub85c \uc5b4\ub514\uc11c \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc0ac\uc6a9\ub418\ub294\uc9c0 \ube4c\ub4dc\ud0c0\uc784\uc5d0 \uc5bb\uc5b4\ub0b4\ub294 \uacfc\uc815\uc744 \ud1a0\ub300\ub85c \ub354 \ub9ce\uc740 \uc815\ubcf4\ub97c \uc5bb\uc5b4 \ub0bc \uc218 \uc788\uc9c0\uc54a\uc744\uae4c\ud558\ub294 \uc544\uc774\ub514\uc5b4\uac00 \uc0dd\uae30\uac8c \ub418\uc5c8\uace0 \ud574\uacb0\ubc29\uc548\uc774 \ub420 \uc218\ub3c4 \uc788\uc744 \uac83 \uac19\uc544\uc11c \ud574\ub2f9 \uc8fc\uc81c\ub85c PoC\ub97c \ub9cc\ub4e4\uc5b4 \ubcf4\uae30\ub85c \ud588\uc2b5\ub2c8\ub2e4.\\n\\n\ucef4\ud3ec\ub10c\ud2b8\uac00 \uc5b4\ub514\uc11c \uc5b4\ub5bb\uac8c \uc0ac\uc6a9\ub418\ub294\uc9c0\ub294 \uc6f9\ud329\uc758 AST \ubd84\uc11d\uacfc\uc815\uacfc Module Resolving \uacfc\uc815\uc5d0 \uac1c\uc785\ud574\uc11c \ud504\ub85c\uc81d\ud2b8\ub0b4\uc5d0 \ucef4\ud3ec\ub10c\ud2b8 \uc0ac\uc6a9 \uc815\ubcf4\ub97c \ucd94\ucd9c\ud574\ubcf4\ub824\ud569\ub2c8\ub2e4.\\n\\nAST \ubd84\uc11d\ud558\ub294 \ubc29\ubc95\uc740 \uba85\ud655\ud55c \uacfc\uc815\uc774\ub098 \uc790\ub8cc\uac00 \ucda9\ubd84\uce58 \uc54a\uc544\uc11c \uc624\ud508\uc18c\uc2a4\ub098 \ud639\uc740 under the hood \uc218\uc900\uc758 \ube14\ub85c\uae45\uc744 \ucc3e\uc544\uc11c \uc2dc\ud589\ucc29\uc624\ub97c \ub9ce\uc774 \ud574\ubd10\uc57c\ud588\uc2b5\ub2c8\ub2e4.\\n\\n# Webpack Build \uc2dc \ud2b9\uc815 React Component \ucd94\uc801\ud558\uae30\\n\\n:::caution\\n\\n\uc2e4\uc81c \uc798 \ub3d9\uc791\ud558\ub294 \ucf54\ub4dc\ub294 \ud574\ub2f9 \ud504\ub85c\uc81d\ud2b8\ub97c \ucc38\uc870\ud574\uc8fc\uc138\uc694.\\n\\nhttps://github.com/InnerCircleA/mono-repo/tree/main/packages/component-tracking-plugin\\n\\n:::\\n\\n\uc5b4\ub5a4 \uc791\uc5c5\ub4e4\uc744 \ud574\uc57c\ud560 \uc9c0 \uc815\ub9ac\ud574\ubcf4\uba74 3\uac00\uc9c0 \uc815\ub3c4\uc758 \uc791\uc5c5\uc744 \ud574\uc57c\ud588\uc2b5\ub2c8\ub2e4.\\n\\n- \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ubaa8\ub4c8\uc744 \ube4c\ub4dc\uc2dc \ub9ac\uc561\ud2b8 \ucef4\ud3ec\ub10c\ud2b8 \uc0ac\uc6a9\uc815\ubcf4\ub97c \uc218\uc9d1\ud560 \ubc29\ubc95 \uad6c\ud604\\n  - AST \ubd84\uc11d \ub2e8\uacc4\uc5d0\uc11c \ub9ac\uc561\ud2b8 Element \uc0dd\uc131 \ud568\uc218 \ud638\ucd9c\uc744 \ubd84\uc11d\\n- \ucef4\ud3ec\ub10c\ud2b8\uac00 **\uc5b4\ub5a4 \ud654\uba74\uc5d0\uc11c** \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc0ac\uc6a9\ub418\uc5c8\ub294\uc9c0\uc5d0 \ub300\ud55c \uc815\ubcf4 \uc218\uc9d1\\n- \uc704 \uc815\ubcf4\ub97c \uc885\ud569\ud574\uc11c JSON \uacb0\uacfc\ub85c \ucd9c\ub825\\n\\n\uc0ac\uc2e4 \uc704 PoC\ub97c \uc218\ud589 \ud6c4 \uc218\uc9d1\ub41c output\ub97c \uc5b4\ub5bb\uac8c \ucc98\ub9ac\ud560\uc9c0\ub294 \ub2e4\uc591\ud560 \uc218 \uc788\uc73c\ub098 \uc774\ubc88 \uad00\uc2ec\uc0ac\uac00 \uc544\ub2c8\uae30\uc5d0 \uc704 \uc138\uac00\uc9c0 \ub2e8\uacc4\uae4c\uc9c0\ub97c \ubaa9\ud45c\ub85c \uc815\ud588\uc2b5\ub2c8\ub2e4.\\n\\n## \ucee4\uc2a4\ud140 Webpack Plugin \uc0dd\uc131\\n\\n\uc6f9\ud329 \ud50c\ub7ec\uadf8\uc778\uc740 webpack hook\uc744 \uc774\uc6a9\ud574\uc11c \ubc88\ub4e4\ub9c1 \uacfc\uc815\uc5d0 \uac1c\uc785\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucee4\uc2a4\ud140 \ud50c\ub7ec\uadf8\uc778\uc740 \uc544\ub798\uc640 \uac19\uc774 \uc815\uc758\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n> https://webpack.js.org/contribute/writing-a-plugin/#root\\n\\n```javascript\\nclass MyExampleWebpackPlugin {\\n  apply(compiler) {\\n    // \uc5ec\uae30\uc11c \ud6c5\uc744 \uc774\uc6a9\ud574\uc11c \uc815\ubcf4 \uc218\uc9d1\\n  }\\n}\\n```\\n\\n\uc0ac\uc2e4 \uc5ec\uae30\uc11c \uc911\uc694\ud55c \uac83\uc740 \uc6f9\ud329\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ud6c5\ub4e4\uc774 \uc5b4\ub5a4 \uac83\ub4e4\uc774 \uc788\ub294\uc9c0 \uc54c\uace0 \uc5b4\ub5bb\uac8c \ucc3e\uc544\uc11c \ud65c\uc6a9\ud558\ub290\ub0d0\ub97c \uc544\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4. \ud558\uc9c0\ub9cc [\uacf5\uc2dd\ubb38\uc11c](https://webpack.js.org/api/compiler-hooks/)\ub9cc \ubd10\ub3c4 \uc81c\uacf5\ub418\ub294 \ud6c5\ub4e4\uc758 \uc591\uc5d0 \uc555\ub3c4\ub418\uae30\ub3c4\ud569\ub2c8\ub2e4. \ud559\uc2b5\uc744 \uc704\ud574\uc11c \ud50c\ub7ec\uadf8\uc778\uc5d0\uc11c \ud6c5\ub4e4\uc744 \ud558\ub098\uc529 \ud638\ucd9c\ud574\ubcf4\uba74\uc11c \uacfc\uc815\uc744 \ud655\uc778\ud558\ub294 \ubc29\ud5a5\uc73c\ub85c \uc811\uadfc\ud558\uac70\ub098 [Webpack \uc624\ud508\uc18c\uc2a4](https://github.com/webpack/webpack)\uc5d0\uc11c \ud6c5\ub4e4\uc774 \uc5b4\ub514\uc11c \ud638\ucd9c\ub418\ub294\uc9c0 \ucc3e\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n\ud558\uc9c0\ub9cc \uae30\ucd08 \uc9c0\uc2dd\uc5c6\uc774 \uc6f9\ud329 \ud50c\ub7ec\uadf8\uc778 \uc81c\uc791\uc744 \uc2dc\uc791\ud558\uae30\uc5d0\ub294 \ud559\uc2b5\uace1\uc120\uc774 \ub108\ubb34 \uac00\ud30c\ub974\ub2c8 \uc804\uccb4\uc801\uc778 \uadf8\ub9bc\uc744 \uba38\ub9ac\uc18d\uc5d0 \uadf8\ub9ac\ub294 \ub370\uc5d0 \ub3c4\uc6c0\uc774 \ub9ce\uc774 \ub418\uc5c8\ub358 \ube14\ub85c\uadf8 \uae00\uc744 \ucd94\uac00\ub85c \uacf5\uc720\ud558\uaca0\uc2b5\ub2c8\ub2e4.\\n\\n> https://indepth.dev/posts/1482/an-in-depth-perspective-on-webpacks-bundling-process\\n\\n\uc704 \ube14\ub85c\uadf8\uc5d0\uc11c\ub294 \uc6f9\ud329\uc774 \uc5b4\ub5a4 \uacfc\uc815\uc744 \uac70\uccd0\uc11c \ubc88\ub4e4\ub9c1\ub41c \uacb0\uacfc\ubb3c\uc744 \ub9cc\ub4e4\uc5b4 \ub0b4\ub294\uc9c0\ub97c \ub2e4\uc774\uc5b4\uadf8\ub7a8\uacfc \uac04\ub2e8\ud55c \uc608\uc2dc\ucf54\ub4dc\ub97c \ud1b5\ud574 \uc798 \uc124\uba85\ud574\uc8fc\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc6f9\ud504\ub860\ud2b8 \uac1c\ubc1c\uc790\ub77c\uba74 \ud55c\ubc88 \uc77d\uc5b4\ubcf4\uba74 \ub9ce\uc740 \ub3c4\uc6c0\uc774 \ub420 \uac83 \uac19\uc2b5\ub2c8\ub2e4.\\n\\n\uc704 \uae00\uc744 \uc77d\uc5b4\ubcf4\uba74 entry file(\uc9c4\uc785\uc810, \uc8fc\ub85c index.js)\uc744 \uc2dc\uc791\uc73c\ub85c \uc5b4\ub5bb\uac8c dependency graph\ub97c \uc0dd\uc131\ud558\uace0 \ucc98\ub9ac\ud558\ub294\uc9c0 \ud070 \uadf8\ub9bc\uc744 \uadf8\ub824\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n// \uc124\uba85\uc774 \ub354 \ud544\uc694\ud560\uae4c?\\n\\n## AST \ubd84\uc11d \ub2e8\uacc4\uc5d0\uc11c `_jsx()` \ud638\ucd9c \ud655\uc778\ud558\uae30\\n\\n\uc790! \uc774\uc81c \uc6f9\ud329 \ubc88\ub4e4\ub9c1 \uacfc\uc815 \uc911 \ud2b9\uc815 \ubaa8\ub4c8\uc758 AST \ubd84\uc11d \uc911 \uac01 \ub2e8\uacc4\ub97c hooking\ud560 \uc218 \uc788\ub294 \uba87\uac00\uc9c0 \ud6c5\uc744 \uc18c\uac1c\ud558\uace0 \uadf8 \ud6c5\uc744 \uc774\uc6a9\ud574\uc11c \ubb34\uc5c7\uc744 \uc5bb\uc744 \uc218 \uc788\uc744\uc9c0 \ud55c\ubc88 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.\\n\\n```javascript\\nclass ComponentTrackingPlugin {\\n  apply(complier) {\\n    compiler.hooks.normalModuleFactory.tap(className, (factory) => {\\n      factory.hooks.parser\\n        .for(\\"javascript/auto\\")\\n        .tap(className, (parser, options) => {\\n          // TODO: Use Parsing Hooks\\n        });\\n    });\\n  }\\n}\\n```\\n\\n\uc704\uc640 \uac19\uc774 `factory.hooks.parser` \ub0b4\uc5d0\uc11c \ubaa8\ub4c8(\ud558\ub098\uc758 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ud30c\uc77c)\ub0b4\uc5d0\uc11c JS Syntx \uc694\uc18c\ub4e4\uc744\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub294 \ud6c5\ub4e4\uc774 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n> \ud83d\udea7 \uc2e4\uc81c \ud2b8\ub79c\uc2a4\ud30c\uc77c\ub9c1\ub41c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ucf54\ub4dc\uc5d0\uc11c ReactElement \ub97c \uc0dd\uc131\ud558\ub294 \ucf54\ub4dc\ub4e4\uc744 \ud0d0\uc9c0\ud560 \ubc29\ubc95\uc740 \uc5b4\ub5a4 babel plugin\uc73c\ub85c \ubcc0\ud615\ub418\uc5c8\uc73c\ub0d0 \ub4f1\ub4f1\uc5d0 \ub530\ub77c \ub2e4\uc591\ud560 \uc218 \uc788\uc5b4\uc11c case by case\ub97c \ubaa8\ub450 \ud574\uacb0\ud574\uc904 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\ub294 \uac83\uc740 \ubb34\ub9ac\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n>\\n> \uadf8\ub798\uc11c \ub300\ud45c\uc801\uc778 boilerplate\uc778 `CRA(create-react-app)`, `next-js` \uc758 \uae30\ubcf8 \ube4c\ub4dc \uc138\ud305\uc744 \ub300\uc0c1\uc73c\ub85c \uace0\uc815\uc73c\ub85c \uc815\ud574\ub450\uace0 \ud50c\ub7ec\uadf8\uc778\uc744 \uac1c\ubc1c\ud558\ub294 \uac83\uc774 \uc774\uc0c1\uc801\uc77c \uac83 \uac19\uc2b5\ub2c8\ub2e4. \uc774\ub807\uac8c \ud55c\ub2e4\ud574\ub3c4 \ub2e4\uc591\ud55c \uc608\uc678\ucf00\uc774\uc2a4\uac00 \uc0dd\uae38 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n[React 17 \uc774\uc0c1 \ubd80\ud130\ub294 \uc801\uc6a9\ub418\ub294 JSX Transform \uc5c5\ub370\uc774\ud2b8](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)\ub97c \uc801\uadf9\uc774\uc6a9\ud574\ubcf4\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4.\\n\\n```javascript\\n// Inserted by a compiler (don\'t import it yourself!)\\nimport { jsx as _jsx } from \\"react/jsx-runtime\\";\\n\\nfunction App() {\\n  return _jsx(\\"h1\\", { children: \\"Hello world\\" });\\n}\\n```\\n\\n\ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \ud56d\uc0c1 \uc704\uc640 \uac19\uc740 \ud615\ud0dc\ub85c React Component\ub97c \uc0ac\uc6a9\ud55c\ub2e4\uace0 \uac00\uc815\ud55c\ub2e4\uba74 \uc800\ud76c\ub294 AST \ubd84\uc11d\uc5d0\uc11c `_jsx`\uac00 \ud638\ucd9c\ub418\uc5c8\ub294\uc9c0\ub97c \ucc3e\uc544\ub0b4\uba74 \ucef4\ud3ec\ub10c\ud2b8 \uc815\ubcf4\ub97c \uc5bb\uc5b4\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n\ubcf8\uaca9\uc801\uc73c\ub85c AST Tree\uc5d0 \uc811\uadfc\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.\\n\\n`parser.hooks.finish` \ud6c5\uc744 \uc774\uc6a9\ud574\uc11c \ubaa8\ub4c8\uc758 AST Tree\ub97c \ud0d1\uc0c9\ud558\uba74\uc11c `_jsx`\uac00 \ud638\ucd9c\ub41c \uacf3\ub4e4\uc744 \uc218\uc9d1\ud558\ub294 \ucf54\ub4dc\ub97c \uc791\uc131\ud574\ubd05\uc2dc\ub2e4.\\n\\n```javascript\\nconst estraverse = require(\'estraverse\');\\n\\nconst checkJSXCallExpression = (expression) =>{\\n\\treturn expression.type === \'CallExpression\'\\n\\t\\t&& expression.callee?.type === \'Identifier\'\\n\\t\\t&& (expression.callee.name === \'_jsx\' || expression.callee.name === \'_jsxDEV\'); // _jsxDev \ub294 webpack development mode\uc5d0\uc11c \ucc98\ub9ac\ub428\\n}\\n\\nclass ComponentTrackingPlugin {\\n\\tconstructor() {\\n\\t\\tthis.componentInfoMap = new Map();\\n\\t}\\n\\t apply(complier) {\\n\\t\\t compiler.hooks.normalModuleFactory.tap(className, (factory) => {\\n\\t\\t\\tfactory.hooks.parser\\n\\t\\t\\t\\t.for(\'javascript/auto\')\\n\\t\\t\\t\\t.tap(className, (parser, options) => {\\n\\t\\t\\t\\t    parser.hooks.finish.tap(className, (ast) => {\\n\\t\\t\\t\\t\\t\\tconst currentNormalModule = parser.state.module; // Module Data\\n\\t\\t\\t\\t\\t    const componentNames = [];\\n\\t\\t\\t\\t\\t\\testraverse.traverse(ast, {\\n\\t\\t\\t\\t\\t\\t\\tenter: function (node, parent) {\\n\\t\\t\\t\\t\\t\\t\\t\\tif(checkJSXCallExpression(node)) {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tconst jsxCallExpression = node;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tconst args = jsxCallExpression.arguments;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tconst elementType = args[0];\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tif (elementType.type !== \'Identifier\') return;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tcomponentNames.push(elementType.name);\\n\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t});\\n\\t\\t\\t\\t\\t\\tthis.componentInfoMap.set(currentNormalModule, componentNames);\\n\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t});\\n\\t\\t\\t});\\n\\t }\\n}\\n```\\n\\n\uc704 \ucf54\ub4dc\ub294 \ub2e8\uc21c\ud558\uac8c `_jsx(Button, {}, [])` \ub77c\ub294 \ud45c\ud604\uc774 \uc788\uc744 \ub54c `Button` \ub97c \uc218\uc9d1\ud558\uac8c \ub429\ub2c8\ub2e4. \uc774\ub7f0 \uc2dd\uc73c\ub85c \ub9ac\uc561\ud2b8 \ucef4\ud3ec\ub10c\ud2b8 \uc774\ub984\uc744 \uc218\uc9d1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc544\uc8fc \uac04\ub2e8\ud788 AST \ucc98\ub9ac\ubc29\uc2dd\uc744 \uc18c\uac1c\ud55c \uac83\uc774\uace0 \uc774\uac83 \uc678\uc5d0\ub3c4 \ub9ce\uc740 \uc608\uc678\ucc98\ub9ac\ub97c \ud574\uc918\uc57c\ud560 \uac83\uc785\ub2c8\ub2e4. [ast explorer \ud234](https://astexplorer.net) \ub97c \uc774\uc6a9\ud574\uc11c \uc2e4\uc81c \ucf54\ub4dc\uac00 \uc5b4\ub5bb\uac8c AST \ud2b8\ub9ac\ub85c \ubcc0\ud615\ub418\ub294\uc9c0 \uc774\ud574\ud558\uace0 \ucc98\ub9ac\ud574\uc8fc\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4.\\n\\n\uadf8 \uc678 \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc774\ub984 \ubfd0\ub9cc\uc544\ub2c8\ub77c props \uc815\ubcf4, \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc0ac\uc6a9\ub41c \ud398\uc774\uc9c0\ub97c \uc218\uc9d1\ud558\uace0 \uc2f6\ub2e4\uba74 \uc544\ub798 \ud504\ub85c\uc81d\ud2b8\ub97c \ucc38\uc870\ud574\uc8fc\uc138\uc694.\\n\\n> https://github.com/InnerCircleA/mono-repo/tree/main/packages/component-tracking-plugin\\n\\n\uc704 \uc791\uc5c5\uc744 \ubc14\ud0d5\uc73c\ub85c \uc9c4\ud589\ud558\ub2e4\ubcf4\uba74 \ubaa8\ub4c8(\uc18c\uc2a4\ud30c\uc77c \ud558\ub098) \ub9c8\ub2e4 \ucf54\ub4dc\ub97c \ud1b5\ud574 \uc5bb\uc744 \uc218 \uc788\ub294 \uc815\ubcf4\ub4e4\uc774 \uc788\ub2e4. \ub2e4\ub9cc, \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc790\uccb4\uac00 \uba38\uc2e0 readable\ud558\uc9c0\uc54a\uc544 \ucf54\ub4dc\uc791\uc131\uc5d0 \uac15\ud55c \uaddc\uce59\uc774 \uc801\uc6a9\ub418\uc5b4\uc788\uc5b4\uc57c \uc720\uc758\ubbf8\ud55c \uc815\ubcf4\ub97c \uc5bb\uc5b4\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n\uadf8\ub9ac\uace0 \uc5ec\uae30\uae4c\uc9c0 \uc791\uc5c5\uc744 \ud588\uc744 \ub54c \uac01 \ubaa8\ub4c8\ub9c8\ub2e4 \ucef4\ud3ec\ub10c\ud2b8 \uc0ac\uc6a9\uc5ec\ubd80\ub97c **\uc57d\ud558\uac8c \ucd94\uce21**\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. **\uc57d\ud558\uac8c \ucd94\uce21**\ud55c\ub2e4\uace0 \ud45c\ud604\ud55c \uc774\uc720\ub294 \ubaa8\ub4c8\uc548\uc5d0 `<Component/>` \ub77c\ub294 \ud45c\ud604\uc774 \uc788\ub2e4\ub294 \uac83\ub9cc\uc73c\ub85c \ucef4\ud3ec\ub10c\ud2b8 \uc0ac\uc6a9\ub410\ub2e4\uace0 \ud45c\ud604\ud560 \uc218 \uc5c6\uc744 \uc218\ub3c4 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4.\\n\\n> \ud83e\uddd0 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ubcf8\uc5f0\uc758 \uba38\uc2e0\ub9ac\ub354\ube14\ud558\uc9c0\uc54a\uc740 \ud2b9\uc131\uc744 \uadf9\ubcf5\ud558\uae30 \uc704\ud574\uc11c\ub294 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc758 \ub3c4\uc6c0\uc774 \ud544\uc694\ud558\uc9c0\uc54a\uc744\uae4c \uc0dd\uac01\uc774\ub4ed\ub2c8\ub2e4.\\n> \ucd94\ud6c4 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8 AST \ubd84\uc11d\uc744 \ud55c\ubc88 \uc2dc\ub3c4\ud574\ubcfc \uc608\uc815\uc785\ub2c8\ub2e4.\\n\\n## Module Graph \uc774\uc6a9\ud574\uc11c \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc0ac\uc6a9\ud558\ub294 \ud398\uc774\uc9c0 \ucc3e\uc544\ub0b4\uae30\\n\\n\uc704 \uc791\uc5c5\uae4c\uc9c0 \ud558\uac8c\ub418\uba74 Module\uacfc \uc0ac\uc6a9\ub418\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc758 \uc815\ubcf4\ub97c 1:1\ub85c \ub9f5\ud551\uc2dc\ud0ac \uc218 \uc788\uc9c0\ub9cc \uc774\ub7f0 \uc815\ubcf4\uac00 \ud06c\uac8c \uc758\ubbf8\uac00 \uc788\uc744\uae4c\uc694?\\n\\n\ud558\ub098\uc758 \ud504\ub85c\uc81d\ud2b8\uc5d0 **ConfirmButton\uc740 N\uac1c \uc0ac\uc6a9, CancelButtom\uc740 M\uac1c \uc0ac\uc6a9** \uc774\ub7f0 \uc815\ubcf4\uac00 \ub514\uc790\uc774\ub108, \uac1c\ubc1c\uc790\uc5d0\uac8c \ubcf4\uc5ec\uc9c4\ub2e4\ud574\uc11c \ub3c4\uc6c0\uc774 \ub420 \uac83 \uac19\uc9c4\uc54a\uc2b5\ub2c8\ub2e4. \ub300\uc2e0 \uc5b4\ub5a4 \ud398\uc774\uc9c0\uc5d0\uc11c \uc5b4\ub5a4 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc0ac\uc6a9\ub418\uc5c8\ub2e4\uc640 \uac19\uc740 \uc815\ubcf4\ub97c \uc81c\uacf5\ud560 \uc218 \uc788\ub2e4\uba74 \uc801\uc5b4\ub3c4 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc0ac\uc6a9\ub41c \ud504\ub85c\uc81d\ud2b8\ub97c \ucc3e\ub294 \uc2dc\uac04\uc774 \ub2e8\ucd95\ub418\ub294 \uac83\uacfc \uac19\uc740 \ub3c4\uc6c0\uc774 \ub420 \uac83\uc73c\ub85c \ubcf4\uc785\ub2c8\ub2e4.\\n\\n\uadf8\ub7fc \uc6b0\uc120, \uc5b4\ub5a4 \ubaa8\ub4c8\uc774 \ud398\uc774\uc9c0 \ubaa8\ub4c8\uc77c\uc9c0 \ud310\ub2e8\ud560 \ubc29\ubc95\uc740 \uc0dd\uac01\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.\\n\uc55e\uc11c \ub9d0\ud558\uba74 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 AST\ub97c \ubd84\uc11d\ud558\ub294 \ub2e8\uacc4\uc5d0\uc11c\ub294 \ubaa8\ub4c8\uc774 \ud398\uc774\uc9c0 \ucef4\ud3ec\ub10c\ud2b8\uc778\uc9c0\ub97c \uad6c\ubd84\ud558\ub294 \uac83\uc740 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4. \uc800\ud76c\ub294 \uc0ac\ub78c\uc774\uae30\uc5d0 \ub9ce\uc740 \ub9e5\ub77d\uc0c1\uc5d0\uc11c \uc774\ub984\uacfc UI \ud2b9\uc131\ub4e4\uc744 \ubcf4\uace0 \ud310\ub2e8\ud558\uae30\uc5d0 \uac00\ub2a5\ud558\uc9c0\ub9cc \uae30\uacc4\ub294 \uc27d\uac8c \ud310\ub2e8\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\\n\\n\uadf8\ub798\uc11c \uace0\uc548\ud574\ub0b8 \ubc29\ubc95\uc740 **\ud2b9\ubcc4\ud55c \ud45c\uc2dd\uc778 Anotation**\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \uc608\ub97c\ub4e4\uba74 \uc800\ub294 `page()`\ub77c\ub294 \ud568\uc218\uac00 \ubaa8\ub4c8\uc758 \uac00\uc7a5 \ubc14\uae65 scope\uc5d0 \ud638\ucd9c\ub418\uc5c8\uc744 \ub54c, \ud574\ub2f9 \ubaa8\ub4c8\uc740 \ud398\uc774\uc9c0 \ubaa8\ub4c8\uc774\ub77c\uace0 \ud310\ub2e8\ud558\ub3c4\ub85d \uaddc\uce59\uc744 \uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n\uc704 \ubc29\ubc95\uc744 \uc774\uc6a9\ud558\uba74 AST \ubd84\uc11d\ub2e8\uacc4\uc5d0\uc11c Page\ub85c \uad6c\ubd84\ub418\ub294 \ubaa8\ub4c8\uacfc \ud398\uc774\uc9c0 \uc815\ubcf4\ub97c \ub530\ub85c \ubaa8\uc544\ub458 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n```javascript\\n\\nconst checkPageModuleFromStatement = (statement) => {\\n\\treturn statement.type === \\"ExpressionStatement\\"\\n\\t\\t\\t&& statement.expression.type === \\"CallExpression\\"\\n\\t\\t\\t&& statement.expression.callee.type === \\"Identifier\\"\\n\\t\\t\\t&& statement.expression.callee.name === \\"page\\"\\n}\\n\\nclass ComponentTrackingPlugin {\\n\\tconstructor() {\\n\\t\\tthis.componentInfoMap = new Map();\\n\\t\\tthis.pageInfoMap = new Map();\\n\\t}\\n\\tapply(complier) {\\n\\t\\tcompiler.hooks.normalModuleFactory.tap(className, (factory) => {\\n\\t\\t\\tfactory.hooks.parser\\n\\t\\t\\t\\t.for(\'javascript/auto\')\\n\\t\\t\\t\\t.tap(className, (parser, options) => {\\n\\t\\t\\t\\t\\tconst currentNormalModule = parser.state.module;\\n\\n\\t\\t\\t\\t\\tparser.hooks.statement.tap(className, (statement) => {\\n\\t\\t\\t\\t\\t\\t if(checkPageModuleFromStatement(statement)) {\\n\\t\\t\\t\\t\\t\\t\\tconst descriptionFile =\\n\\t\\t\\t\\t\\t\\t\\t\\tcurrentNormalModule.resourceResolveData.descriptionFileData;\\n\\t\\t\\t\\t\\t\\t\\tthis.pageInfoMap.set(currentNormalModule, {\\n\\t\\t\\t\\t\\t\\t\\t\\tproject: `${descriptionFile.name}@${descriptionFile.version}`,\\n\\t\\t\\t\\t\\t\\t\\t\\tpath: path.basename(currentNormalModule.resource)\\n\\t\\t\\t\\t\\t\\t\\t});\\n\\t\\t\\t\\t\\t\\t }\\n\\t\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\t\\t// ...\\n\\t\\t\\t\\t});\\n\\t\\t\\t});\\n\\t}\\n}\\n```\\n\\n\uc704\uc640 \uac19\uc774 Page \ubaa8\ub4c8\uacfc \ubaa8\ub4c8\uc758 \uc815\ubcf4(\ud30c\uc77c\uc774\ub984, \ud504\ub85c\uc81d\ud2b8 \uc774\ub984)\uc744 \uc218\uc9d1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uc804\uc5d0 \uc0ac\uc6a9\ud588\ub358 `parser.hooks.finish` \ub97c \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc9c0\ub9cc \uc804\uccb4 AST \ud2b8\ub9ac\uac00 \ud544\uc694\ud55c \uc791\uc5c5\uc740 \uc544\ub2c8\uae30\uc5d0 `parser.hooks.statement` \ud6c5\uc744 \uc0ac\uc6a9\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4.\\n\\n\uc9c0\uae08\uae4c\uc9c0 \ubaa8\ub4c8\ubcc4 \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc758 \uc0ac\uc6a9 \ub0b4\uc5ed\uacfc \ud398\uc774\uc9c0 \ubaa8\ub4c8\uc774 \uc5b4\ub5a4 \ubaa8\ub4c8\uc778\uc9c0 \uc54c\uc544\ub0bc \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.\\n\\n\ub9c8\uc9c0\ub9c9\uc73c\ub85c \ud560 \uc791\uc5c5\uc740 \ubaa8\ub4c8\uac04\uc758 \uc5f0\uacb0\uad00\uacc4\ub97c \ud1b5\ud574 \uc5b4\ub5a4 \ud398\uc774\uc9c0\uc5d0 \uc5b4\ub5a4 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc18d\ud574 \uc788\ub294\uc9c0\ub97c \uc5f0\uacb0\ud574\uc8fc\uba74 \ub429\ub2c8\ub2e4. webpack \ub0b4\ubd80\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 `moduleGraph` \uac1d\uccb4\ub97c \uc774\uc6a9\ud558\uba74 \ubaa8\ub4c8\uac04\uc758 \uc758\uc874\uad00\uacc4\ub97c \ud0d0\uc0c9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n```javascript\\n\\nfunction traverseModuleGraph(rooteNormalModule, graphModuleMap, checkModuleCallback) {\\n\\tconst visited = new Map();\\n\\tconst traverse = (crtNode) => {\\n\\t\\tif (visited.get(crtNode)) return;\\n\\n\\t\\tvisited.set(crtNode, true);\\n\\t\\tconst correspondingGraphModule = graphModuleMap.get(crtNode);\\n\\n\\t\\tif (!correspondingGraphModule) return;\\n\\n\\t\\tcheckModuleCallback(crtNode, correspondingGraphModule);\\n\\n\\t\\tconst childrens = new Set(\\n\\t\\t\\tArray.from(correspondingGraphModule.outgoingConnections || [], (c) => c.module)\\n\\t\\t);\\n\\n\\t\\tfor (const c of childrens) {\\n\\t\\t\\ttraverse(c);\\n\\t\\t}\\n\\t};\\n\\ttraverse(rooteNormalModule);\\n}\\n\\nclass ComponentTrackingPlugin {\\n\\tconstructor() {\\n\\t\\tthis.componentInfoMap = new Map();\\n\\t\\tthis.pageInfoMap = new Map();\\n\\t}\\n\\tapply(complier) {\\n\\t\\t// ...\\n\\n\\t\\tcompiler.hooks.compilation.tap(className, (compilation) => {\\n\\t\\t\\tcompilation.hooks.finishModules.tap(className, (modules) => {\\n\\t\\t\\t\\tconst { moduleGraph: { _moduleMap: moduleMap } } = compilation;\\n\\t\\t\\t\\tfor(const [pageNormalModule, pageInfo] of this.pageInfoMap) {\\n\\t\\t\\t\\t\\ttraverseModuleGraph(\\n\\t\\t\\t\\t\\t\\tpargeNormalModule,\\n\\t\\t\\t\\t\\t\\tmoduleMap,\\n\\t\\t\\t\\t\\t\\t(normalModule, graphModule) => {\\n\\t\\t\\t\\t\\t\\t\\tif(this.componentInfoMap.has(normalModule)) {\\n\\t\\t\\t\\t\\t\\t\\t\\tpageInfo.components = [\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t...pageInfo.components,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t...this.componentInfoMap.get(normalModule)\\n\\t\\t\\t\\t\\t\\t\\t\\t];\\n\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t});\\n\\t\\t\\t\\t}\\n\\t\\t\\t});\\n\\t\\t});\\n\\t}\\n}\\n```\\n\\n\ubaa8\ub4c8 \uc758\uc874\uc131 \uadf8\ub798\ud504\uc744 \ud0d0\uc0c9\ud558\uae30 \uc704\ud574\uc11c `traverseModuleGraph` \ub77c\ub294 \ud568\uc218\ub97c \ub9cc\ub4e4\uc5c8\ub294\ub370 \uc704\uc5d0\uc11c \uc18c\uac1c\ud588\ub358 [\uc6f9\ud329 \ubc88\ub4e4\ub9c1 \uacfc\uc815](https://indepth.dev/posts/1482/an-in-depth-perspective-on-webpacks-bundling-process) \uae00\uc758 \ub0b4\uc6a9\uc744 \ucc38\uc870\ud588\uc2b5\ub2c8\ub2e4.\\n\\n\uac04\ub2e8\ud788 \ud574\ub2f9 \ud568\uc218\ub97c \uc124\uba85\ud574\ubcf4\uba74, \uc6f9\ud329\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \ubaa8\ub4c8 \uc18c\uc2a4 \ud30c\uc77c\uc744 \ud30c\uc2f1\ub41c \uacb0\uacfc\ubb3c\uc778 `NormalModule` \uac1d\uccb4\ub97c \uadf8\ub798\ud504\uac04\uc758 \uc5f0\uacb0\uc815\ubcf4\uac00 \ucd94\uac00\ub41c \uac1d\uccb4\ub97c `ModuleGraphModule` \ub77c\ub294 \uac1d\uccb4\ub85c \ub2e4\ub8f9\ub2c8\ub2e4. \uadf8\ub798\uc11c \ud0d0\uc0c9\uc5d0 \ud544\uc694\ud55c \uadf8\ub798\ud504 \ubaa8\ub4c8\uac04\uc758 \uc5f0\uacb0\uc815\ubcf4\uc778 `moduleMap`\uc744 \ub450\ubc88\uc9f8 \uc778\uc790\ub85c \ub123\uc5b4\uc8fc\uac8c \ub429\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \ubaa8\ub4c8\uc744 \ud0d0\uc0c9\ud560 \ub54c\ub9c8\ub2e4 \ud638\ucd9c\ub418\ub294 callback \ud568\uc218\ub97c \uc678\ubd80\ub85c \ub178\ucd9c\uc2dc\ucf1c\uc11c \ud558\uc704 \ubaa8\ub4c8\uc774 \ud0d0\uc0c9\ub420 \ub584\ub9c8\ub2e4 \uc678\ubd80\uc5d0\uc11c \ud2b9\ubcc4\ud55c \ucc98\ub9ac\ud574\uc904 \uc218 \uc788\ub3c4\ub85d \ud574\uc8fc\uc5c8\uc2b5\ub2c8\ub2e4.\\n\\n\uc774\uc81c component \uc815\ubcf4\ub97c page module\uacfc \uc5f0\uacb0\ud574\uc8fc\uae30\ub9cc\ud558\uba74 \uc800\ud76c\uac00 \uc6d0\ud558\ub294 \ucd5c\uc885\uc801\uc778 \uacb0\uacfc\ubb3c\uc778 \ud398\uc774\uc9c0 \ubaa8\ub4c8\ub9c8\ub2e4 \uc5b4\ub5a4 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc788\ub294\uc9c0\ub97c \ud655\uc778\ud560 \uc218 \uc788\uac8c\ub429\ub2c8\ub2e4.\\n\\n\ucd5c\uc885\uc801\uc73c\ub85c \uacb0\uacfc\ubb3c\uc744 \ubf51\uc544\ub0bc \uc218 \uc788\ub294 \uc801\uc808\ud55c hook\uc744 \ucc3e\uc544\ubcf4\ub2c8 \ucef4\ud30c\uc77c\uc774 \ub05d\ub098\ub294 \ud6c5\uc778 `compiler.hooks.done` \uc744 \uc774\uc6a9\ud574\uc11c \ucd5c\uc885 \uacb0\uacfc\ubb3c\uc744 JSON \ud30c\uc77c\ub85c \ucd9c\ub825\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.\\n\\n```javascript\\nclass ComponentTrackingPlugin {\\n  constructor() {\\n    this.componentInfoMap = new Map();\\n    this.pageInfoMap = new Map();\\n  }\\n  apply() {\\n    // ...\\n    compiler.hooks.done.tap(className, () => {\\n      if (!this.done) return;\\n      const result = JSON.stringify(Array.from(this.pageInfoMap.values()));\\n      fs.writeFile(\\"tracking.json\\", result, (err) => {\\n        if (err) console.log(err);\\n        else {\\n          console.log(\\"Generate tracking.json\\\\n\\");\\n        }\\n      });\\n    });\\n  }\\n}\\n```\\n\\n\ucd5c\uc885\uc801\uc73c\ub85c 3\uac1c\uc758 webpack \ud6c5\uc744 \uc774\uc6a9\ud574\uc11c \uc544\ub798\uc640 \uac19\uc740 \uacb0\uacfc\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n```json\\n[\\n  {\\n    \\"project\\": \\"sample1\\",\\n    \\"path\\": \\"HomePage.js\\",\\n    \\"components\\": [\\"Button\\"]\\n  },\\n  {\\n    \\"project\\": \\"sample1\\",\\n    \\"path\\": \\"DetailPage.js\\",\\n    \\"components\\": [\\"Button\\", \\"Button\\"]\\n  }\\n]\\n```\\n\\n\uc0ac\uc2e4 \uc704\uc758 \uc815\ubcf4 \uc815\ub3c4\ub85c\ub294 \uc5b4\ub5a4 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc5b4\ub5a4 \ud398\uc774\uc9c0\uc5d0 \uba87\ubc88 \uc0ac\uc6a9\ub418\uc5c8\ub290\ub0d0 \uc815\ub3c4\uc758 \uc815\ubcf4\ub9cc \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n# \uc815\ub9ac\\n\\n\uac04\ub2e8\ud788 \ucee4\uc2a4\ud140 Webpack Plugin\ub97c \uc774\uc6a9\ud574\uc11c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ubc88\ub4e4\ub9c1 \uc2dc\uc810\uc5d0 \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc0ac\uc6a9\uc744 \ucd94\uc801\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4. \uc544\ub9c8 \ucd94\uac00\uc801\uc778 \uc815\ubcf4\ub3c4 AST\ubd84\uc11d\uc744 \uc798\ud55c\ub2e4\uba74 \uc5bb\uc5b4\ub0bc \uc218 \uc788\uc744 \uac83 \uac19\uc2b5\ub2c8\ub2e4.\\n\\n\ud558\uc9c0\ub9cc \ud2b8\ub79c\uc2a4\ud30c\uc77c\ub9c1\ub41c \uacb0\uacfc\ubb3c\uc744 \uac00\uc9c0\uace0 AST \ubd84\uc11d\ud574\uc57c\ud558\uae30\uc5d0 \uc608\uce21\ud558\uc9c0 \ubabb\ud55c \uacbd\uc6b0\uac00 \ub9ce\uc774 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub798\uc11c \uc2e4\uc81c\ub85c \ud65c\uc6a9\ud574\ubcf4\ub824\ud55c\ub2e4\uba74 \uc544\ub9c8 \ud300\uc774\ub098 \ud504\ub85c\uc81d\ud2b8 \ub2e8\uc704\ub85c \uac15\ud55c \uaddc\uce59\uc744 \ub46c\uc57c\ud560 \ub4ef\ud569\ub2c8\ub2e4.\\n\\n# PoC \uacb0\ub860\\n\\n\uc774\ubc88 PoC \ud504\ub85c\uc81d\ud2b8\ub97c \uc9c4\ud589\ud558\uae30 \uc804\uc5d0 \ud655\uc2e0\uc744 \uac00\uc84c\ub358 \uc774\uc720\ub294 \uac1c\ubc1c\uc790\uac00 \ucf54\ub4dc\ub97c \ub4a4\uc801\uac70\ub9ac\uba70 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc0ac\uc6a9\ub418\ub294 \ubd80\ubd84\uc744 \ucc3e\uc544\ub2e4\ub2c8\ub294 \ud615\ud0dc\ub294 \ucf54\ub4dc\uac00 \ucda9\ubd84\ud788 \ud574\uacb0\ud574\uc904 \uc218 \uc788\uc744 \uac83\uc774\ub77c\uace0 \uc0dd\uac01\ud588\uc5c8\uae30 \ub54c\ubb38\uc774\uc5c8\uc2b5\ub2c8\ub2e4. \uc6f9\ud329\uc774\ub77c\ub294 \ubc88\ub4e4\ub7ec\uc758 \ub3c4\uc6c0\uc744 \ud06c\uac8c \ubc1b\uc544\uc11c \uc9c4\ud589\ud574\ubcf4\uc558\uace0 \uacb0\uacfc\uc801\uc73c\ub85c \uac1c\ubc1c \uc5ed\ub7c9\uc774 \ucda9\ubd84\ud788 \ubc1b\uccd0\uc900\ub2e4\uba74 \ub514\uc790\uc774\ub108 \ud639\uc740 \uac1c\ubc1c\uc790\uac00 \ub9e4\ubc88 \ud2b9\uc815 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc5b4\ub514\uc5d0\uc11c \uc0ac\uc6a9\ub410\ub294\uc9c0 \ucad3\uc544\ub2e4\ub2c8\uc9c0 \uc54a\uc544\ub3c4 \ub420 \uac83\uc73c\ub85c \ud655\uc778\ud588\uc2b5\ub2c8\ub2e4.\\n\\n\ub354\ud574\uc11c \ud070 \uc870\uc9c1\uc5d0\uc11c \ucf54\uc5b4 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\uc790\ub4e4\uc774 \uc5b4\ub5bb\uac8c \uc0ac\uc6a9\ud558\uace0 \uc788\ub294\uc9c0 \uad81\uae08\ud558\ub2e4\uba74 Component\ub4e4\uc758 props\ub97c \uc704\uc758 \uacfc\uc815\ucc98\ub7fc \uc720\uc0ac\ud558\uac8c \ucd94\ucd9c\ud574\uc11c \uc5b4\ub5a4 \ubc29\ud5a5\uc73c\ub85c \ub514\uc790\uc778 \ucef4\ud3ec\ub10c\ud2b8 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \ud655\uc7a5\ud558\uace0 \uac1c\uc120\ud574\ub098\uac00\uc57c\ud560\uc9c0 \ud575\uc2ec \uc9c0\ud45c\ub85c \ud65c\uc6a9\ud560 \uc218\ub3c4 \uc788\uc744 \uac83 \uac19\uc2b5\ub2c8\ub2e4."},{"id":"welcome-docusaurus-v2","metadata":{"permalink":"/welcome-docusaurus-v2","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-12-04-intro-post.md","source":"@site/blog/2022-12-04-intro-post.md","title":"\ube14\ub85c\uadf8 \uc2dc\uc791\uc744 \uc54c\ub9ac\uba70...","description":"This is my first post on Docusaurus 2.","date":"2022-12-04T00:00:00.000Z","formattedDate":"December 4, 2022","tags":[{"label":"intro","permalink":"/tags/intro"},{"label":"docusaurus-v2","permalink":"/tags/docusaurus-v-2"}],"readingTime":1.155,"hasTruncateMarker":true,"authors":[{"name":"Jiho Shon","title":"Frontend Developer in miso.inc","url":"https://github.com/peanut-lover","imageURL":"https://avatars.githubusercontent.com/u/20085849?v=4","key":"jiho"}],"frontMatter":{"title":"\ube14\ub85c\uadf8 \uc2dc\uc791\uc744 \uc54c\ub9ac\uba70...","description":"This is my first post on Docusaurus 2.","slug":"welcome-docusaurus-v2","authors":"jiho","tags":["intro","docusaurus-v2"],"toc_min_heading_level":2,"toc_max_heading_level":5},"prevItem":{"title":"AST \ubd84\uc11d\uc744 \ud65c\uc6a9\ud574\uc11c \ucef4\ud3ec\ub10c\ud2b8 \ucd94\uc801\ud574\ubcf4\uae30","permalink":"/ast"}},"content":"\uc548\ub155\ud558\uc138\uc694. \ube14\ub85c\uadf8 \uc8fc\uc778\uc785\ub2c8\ub2e4.\\n\\n\uc55e\uc73c\ub85c \uc804\ubb38\uc801\uc778 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790\ub85c \uc131\uc7a5\ud558\uae30 \uc704\ud574\uc11c\\n\ub2e4\uc591\ud55c \uc88b\uc740 \uae00\ub4e4\uc744 \uc791\uc131\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.\\n\\n\uc798\ubabb\ub41c \ub0b4\uc6a9 \ud639\uc740 \uc218\uc815\uc774 \ud544\uc694\ud55c \ub0b4\uc6a9\uc774 \uc788\ub2e4\uba74 \uc544\ub08c\uc5c6\uc774 \ud53c\ub4dc\ubc31\uc774 \uc8fc\uc2dc\uba74 \uac10\uc0ac\ud560 \uac83 \uac19\uc2b5\ub2c8\ub2e4.\\n\\n\uae00\uc4f0\ub294\ub370 \uc7ac\uc8fc\ub294 \uc5c6\uc9c0\ub9cc \ub9ce\uc774 \ud574\ubd10\uc57c \ub298\uac70\ub77c\uace0 \uc0dd\uac01\uc774 \ub4ed\ub2c8\ub2e4! \uac10\uc0ac\ud569\ub2c8\ub2e4.\\n\\n\x3c!--truncate--\x3e\\n\\n## 2023\\n\\n\uccab \ube14\ub85c\uadf8\uc758 \uc2dc\uc791\uc744 \uc54c\ub9ac\uba70 \ud3ec\uc2a4\ud305 TODO \ub9ac\uc2a4\ud2b8\ub97c \ub0a8\uaca8\ub450\uace0\uc790 \ud569\ub2c8\ub2e4.\\n\\n- [x] AST\ubd84\uc11d\uc744 \ud65c\uc6a9\ud574\uc11c \ucef4\ud3ec\ub10c\ud2b8 \ucd94\uc801\ud558\uae30\\n\\n- [ ] Amplify\ub97c \ud65c\uc6a9\ud55c \ud480\uc2a4\ud0dd \ud504\ub85c\uc81d\ud2b8 \uac1c\ubc1c\\n\\n- [ ] Storybook Design System Guide \uc815\ub9ac\\n\\n- [ ] \ub9ac\uc561\ud2b8\uc5d0\uc11c\uc758 \uac00\ub3c5\uc131\uc774\ub780?\\n  - \ube44\ub3d9\uae30 \ucc98\ub9ac \ubc29\uc2dd(Suspense)\\n  - useEffect \ub0a8\ubc1c\uc740 \ub3c5\uc774 \ub420\ub4ef.\\n  - \uc88b\uc740 react builtin hook\ub4e4\uc744 \uc54c\uc544\ubcf4\uace0 \uc0ac\uc6a9\ud574\ubcf4\uae30."}]}')}}]);