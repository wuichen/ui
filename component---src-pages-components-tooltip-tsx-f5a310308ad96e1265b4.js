(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{Iro9:function(a,t,e){"use strict";e.d(t,"j",(function(){return n})),e.d(t,"c",(function(){return s})),e.d(t,"l",(function(){return c})),e.d(t,"h",(function(){return o})),e.d(t,"f",(function(){return b})),e.d(t,"a",(function(){return p})),e.d(t,"e",(function(){return l})),e.d(t,"d",(function(){return m})),e.d(t,"m",(function(){return u})),e.d(t,"k",(function(){return i})),e.d(t,"i",(function(){return j})),e.d(t,"g",(function(){return k})),e.d(t,"b",(function(){return O}));var n=["Info","Success","Danger","Primary","Warning","Control","Basic"],s=["start","end","right","left","top","bottom"],c=["click","hover","focus","hint"],o=["Tiny","Small","Medium","Large","Giant"],b=["Rectangle","SemiRound","Round"],p=["filled","outline","ghost","hero"],l=["topRight","topLeft","bottomRight","bottomLeft","topStart","topEnd","bottomStart","bottomEnd"].join(" | "),m=s.join(" | "),u=c.join(" | "),i=n.join(" | "),j=o.join(" | "),k=b.join(" | "),O=p.join(" | ")},fLTe:function(a,t,e){"use strict";e.r(t);var n=e("q1tI"),s=e.n(n),c=e("dsAS"),o=e("1Yd/"),b=e("SB4r"),p=(e("rzGZ"),e("Dq+y"),e("8npG"),e("Ggvi"),e("E5k/"),e("7ljp")),l=e("ux+I"),m=e("Iro9");var u=function(){return s.a.createElement(c.h,{size:"Tiny"},s.a.createElement("header",null,"Popover Placement"),s.a.createElement(c.i,{id:"scrollPlacementId"},m.c.map((function(a){return s.a.createElement(c.R,{key:a,eventListener:"#scrollPlacementId",className:"with-margin inline-block",trigger:"hint",placement:a,content:"Hello",icon:"home"},s.a.createElement(c.f,{fullWidth:!0},a))}))))};var i=function(){return s.a.createElement(c.h,{size:"Tiny"},s.a.createElement("header",null,"Popover Trigger"),s.a.createElement(c.i,{id:"scrollTriggerId"},m.l.map((function(a){return s.a.createElement(c.R,{key:a,eventListener:"#scrollTriggerId",className:"with-margin inline-block",trigger:a,placement:"top",icon:"home"},s.a.createElement(c.f,{fullWidth:!0},a))}))))};var j=function(){return s.a.createElement(c.h,{size:"Tiny"},s.a.createElement("header",null,"Popover Status"),s.a.createElement(c.i,{id:"scrollStatusId"},m.j.map((function(a){return s.a.createElement(c.R,{key:a,eventListener:"#scrollStatusId",className:"with-margin inline-block",trigger:"hint",placement:"top",content:"hello",status:a},s.a.createElement(c.f,{fullWidth:!0},a))}))))},k=e("sx3M");var O={_frontmatter:{}},N=k.a;function r(a){var t=a.components,e=function(a,t){if(null==a)return{};var e,n,s={},c=Object.keys(a);for(n=0;n<c.length;n++)e=c[n],t.indexOf(e)>=0||(s[e]=a[e]);return s}(a,["components"]);return Object(p.b)(N,Object.assign({},O,e,{components:t,mdxType:"MDXLayout"}),Object(p.b)("h2",null,"Tooltip"),Object(p.b)("p",null,"Powerful Tooltip Component, which provides the best UX for your users."),Object(p.b)("div",{className:"note note-info"},Object(p.b)("div",{className:"note-title"},"Note"),Object(p.b)("div",{className:"note-body"},"The pest hard work in OAH UI Tooltip component placement will be changes automatically with clockwise if default placement hide any popover content and if no placement will cover popover content will choose the best one to show the most of contents")),Object(p.b)("h3",null,"Usage"),Object(p.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(p.b)("pre",Object.assign({parentName:"div"},{className:"language-js"}),Object(p.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," Tooltip ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"from")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'oah-ui'"),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(p.b)("p",null,"Tooltip has different placements, such as: top, bottom, left, right, start and end which can be used as following:"),Object(p.b)(l.a,{code:Object(p.b)("div",{className:"gatsby-highlight"},Object(p.b)("pre",{className:"language-jsx"},Object(p.b)("code",null,Object(p.b)("span",{className:"token keyword"},"import")," React ",Object(p.b)("span",{className:"token keyword"},"from")," ",Object(p.b)("span",{className:"token string"},"'react'"),Object(p.b)("span",{className:"token punctuation"},";"),"\n",Object(p.b)("span",{className:"token keyword"},"import")," ",Object(p.b)("span",{className:"token punctuation"},"{")," Card",Object(p.b)("span",{className:"token punctuation"},",")," CardBody",Object(p.b)("span",{className:"token punctuation"},",")," Button",Object(p.b)("span",{className:"token punctuation"},",")," Tooltip ",Object(p.b)("span",{className:"token punctuation"},"}")," ",Object(p.b)("span",{className:"token keyword"},"from")," ",Object(p.b)("span",{className:"token string"},"'oah-ui'"),Object(p.b)("span",{className:"token punctuation"},";"),"\n",Object(p.b)("span",{className:"token keyword"},"import")," ",Object(p.b)("span",{className:"token punctuation"},"{")," placement ",Object(p.b)("span",{className:"token punctuation"},"}")," ",Object(p.b)("span",{className:"token keyword"},"from")," ",Object(p.b)("span",{className:"token string"},"'../shared'"),Object(p.b)("span",{className:"token punctuation"},";"),"\n","\n",Object(p.b)("span",{className:"token keyword"},"function")," ",Object(p.b)("span",{className:"token function"},"Placement"),Object(p.b)("span",{className:"token punctuation"},"("),Object(p.b)("span",{className:"token punctuation"},")")," ",Object(p.b)("span",{className:"token punctuation"},"{"),"\n","  ",Object(p.b)("span",{className:"token keyword"},"return")," ",Object(p.b)("span",{className:"token punctuation"},"("),"\n","    ",Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token punctuation"},"<"),Object(p.b)("span",{className:"token class-name"},"Card"))," ",Object(p.b)("span",{className:"token attr-name"},"size"),Object(p.b)("span",{className:"token attr-value"},Object(p.b)("span",{className:"token punctuation"},"="),Object(p.b)("span",{className:"token punctuation"},'"'),"Tiny",Object(p.b)("span",{className:"token punctuation"},'"')),Object(p.b)("span",{className:"token punctuation"},">")),Object(p.b)("span",{className:"token plain-text"},"\n","      "),Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token punctuation"},"<"),"header"),Object(p.b)("span",{className:"token punctuation"},">")),Object(p.b)("span",{className:"token plain-text"},"Popover Placement"),Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token punctuation"},"</"),"header"),Object(p.b)("span",{className:"token punctuation"},">")),Object(p.b)("span",{className:"token plain-text"},"\n","      "),Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token punctuation"},"<"),Object(p.b)("span",{className:"token class-name"},"CardBody"))," ",Object(p.b)("span",{className:"token attr-name"},"id"),Object(p.b)("span",{className:"token attr-value"},Object(p.b)("span",{className:"token punctuation"},"="),Object(p.b)("span",{className:"token punctuation"},'"'),"scrollPlacementId",Object(p.b)("span",{className:"token punctuation"},'"')),Object(p.b)("span",{className:"token punctuation"},">")),Object(p.b)("span",{className:"token plain-text"},"\n","        "),Object(p.b)("span",{className:"token punctuation"},"{"),"placement",Object(p.b)("span",{className:"token punctuation"},"."),Object(p.b)("span",{className:"token function"},"map"),Object(p.b)("span",{className:"token punctuation"},"("),Object(p.b)("span",{className:"token parameter"},"place")," ",Object(p.b)("span",{className:"token operator"},"=>")," ",Object(p.b)("span",{className:"token punctuation"},"("),"\n","          ",Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token punctuation"},"<"),Object(p.b)("span",{className:"token class-name"},"Tooltip")),"\n","            ",Object(p.b)("span",{className:"token attr-name"},"key"),Object(p.b)("span",{className:"token script language-javascript"},Object(p.b)("span",{className:"token script-punctuation punctuation"},"="),Object(p.b)("span",{className:"token punctuation"},"{"),"place",Object(p.b)("span",{className:"token punctuation"},"}")),"\n","            ",Object(p.b)("span",{className:"token attr-name"},"eventListener"),Object(p.b)("span",{className:"token attr-value"},Object(p.b)("span",{className:"token punctuation"},"="),Object(p.b)("span",{className:"token punctuation"},'"'),"#scrollPlacementId",Object(p.b)("span",{className:"token punctuation"},'"')),"\n","            ",Object(p.b)("span",{className:"token attr-name"},"className"),Object(p.b)("span",{className:"token attr-value"},Object(p.b)("span",{className:"token punctuation"},"="),Object(p.b)("span",{className:"token punctuation"},'"'),"with-margin inline-block",Object(p.b)("span",{className:"token punctuation"},'"')),"\n","            ",Object(p.b)("span",{className:"token attr-name"},"trigger"),Object(p.b)("span",{className:"token attr-value"},Object(p.b)("span",{className:"token punctuation"},"="),Object(p.b)("span",{className:"token punctuation"},'"'),"hint",Object(p.b)("span",{className:"token punctuation"},'"')),"\n","            ",Object(p.b)("span",{className:"token attr-name"},"placement"),Object(p.b)("span",{className:"token script language-javascript"},Object(p.b)("span",{className:"token script-punctuation punctuation"},"="),Object(p.b)("span",{className:"token punctuation"},"{"),"place",Object(p.b)("span",{className:"token punctuation"},"}")),"\n","            ",Object(p.b)("span",{className:"token attr-name"},"content"),Object(p.b)("span",{className:"token attr-value"},Object(p.b)("span",{className:"token punctuation"},"="),Object(p.b)("span",{className:"token punctuation"},'"'),"Hello",Object(p.b)("span",{className:"token punctuation"},'"')),"\n","            ",Object(p.b)("span",{className:"token attr-name"},"icon"),Object(p.b)("span",{className:"token attr-value"},Object(p.b)("span",{className:"token punctuation"},"="),Object(p.b)("span",{className:"token punctuation"},'"'),"home",Object(p.b)("span",{className:"token punctuation"},'"')),"\n","          ",Object(p.b)("span",{className:"token punctuation"},">")),Object(p.b)("span",{className:"token plain-text"},"\n","            "),Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token punctuation"},"<"),Object(p.b)("span",{className:"token class-name"},"Button"))," ",Object(p.b)("span",{className:"token attr-name"},"fullWidth"),Object(p.b)("span",{className:"token punctuation"},">")),Object(p.b)("span",{className:"token punctuation"},"{"),"place",Object(p.b)("span",{className:"token punctuation"},"}"),Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token punctuation"},"</"),Object(p.b)("span",{className:"token class-name"},"Button")),Object(p.b)("span",{className:"token punctuation"},">")),Object(p.b)("span",{className:"token plain-text"},"\n","          "),Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token punctuation"},"</"),Object(p.b)("span",{className:"token class-name"},"Tooltip")),Object(p.b)("span",{className:"token punctuation"},">")),"\n","        ",Object(p.b)("span",{className:"token punctuation"},")"),Object(p.b)("span",{className:"token punctuation"},")"),Object(p.b)("span",{className:"token punctuation"},"}"),Object(p.b)("span",{className:"token plain-text"},"\n","      "),Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token punctuation"},"</"),Object(p.b)("span",{className:"token class-name"},"CardBody")),Object(p.b)("span",{className:"token punctuation"},">")),Object(p.b)("span",{className:"token plain-text"},"\n","    "),Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token punctuation"},"</"),Object(p.b)("span",{className:"token class-name"},"Card")),Object(p.b)("span",{className:"token punctuation"},">")),"\n","  ",Object(p.b)("span",{className:"token punctuation"},")"),Object(p.b)("span",{className:"token punctuation"},";"),"\n",Object(p.b)("span",{className:"token punctuation"},"}"),"\n","\n",Object(p.b)("span",{className:"token keyword"},"export")," ",Object(p.b)("span",{className:"token keyword"},"default")," Placement",Object(p.b)("span",{className:"token punctuation"},";"),"\n"))),mdxType:"DemoComponent"},Object(p.b)(u,{mdxType:"Demo_858869e86e8efd318aad6765f05ce029"})),Object(p.b)("p",null,"Tooltip has a number of triggers which provides an ability to show and hide the component in different ways:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Click mode shows the component when a user clicks on the host element and hides when the user clicks somewhere on the document outside the component.")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Hint provides capability to show the component when the user hovers over the host element and hide when the user hovers out of the host.")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Hover works like hint mode with one exception - when the user moves mouse from host element to the container element the component remains open, so that it is possible to interact with it content.")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Focus mode is applied when user focuses the element."))),Object(p.b)(l.a,{code:Object(p.b)("div",{className:"gatsby-highlight"},Object(p.b)("pre",{className:"language-jsx"},Object(p.b)("code",null,Object(p.b)("span",{className:"token keyword"},"import")," React ",Object(p.b)("span",{className:"token keyword"},"from")," ",Object(p.b)("span",{className:"token string"},"'react'"),Object(p.b)("span",{className:"token punctuation"},";"),"\n",Object(p.b)("span",{className:"token keyword"},"import")," ",Object(p.b)("span",{className:"token punctuation"},"{")," Card",Object(p.b)("span",{className:"token punctuation"},",")," CardBody",Object(p.b)("span",{className:"token punctuation"},",")," Button",Object(p.b)("span",{className:"token punctuation"},",")," Tooltip ",Object(p.b)("span",{className:"token punctuation"},"}")," ",Object(p.b)("span",{className:"token keyword"},"from")," ",Object(p.b)("span",{className:"token string"},"'oah-ui'"),Object(p.b)("span",{className:"token punctuation"},";"),"\n",Object(p.b)("span",{className:"token keyword"},"import")," ",Object(p.b)("span",{className:"token punctuation"},"{")," trigger ",Object(p.b)("span",{className:"token punctuation"},"}")," ",Object(p.b)("span",{className:"token keyword"},"from")," ",Object(p.b)("span",{className:"token string"},"'../shared'"),Object(p.b)("span",{className:"token punctuation"},";"),"\n","\n",Object(p.b)("span",{className:"token keyword"},"function")," ",Object(p.b)("span",{className:"token function"},"Trigger"),Object(p.b)("span",{className:"token punctuation"},"("),Object(p.b)("span",{className:"token punctuation"},")")," ",Object(p.b)("span",{className:"token punctuation"},"{"),"\n","  ",Object(p.b)("span",{className:"token keyword"},"return")," ",Object(p.b)("span",{className:"token punctuation"},"("),"\n","    ",Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token punctuation"},"<"),Object(p.b)("span",{className:"token class-name"},"Card"))," ",Object(p.b)("span",{className:"token attr-name"},"size"),Object(p.b)("span",{className:"token attr-value"},Object(p.b)("span",{className:"token punctuation"},"="),Object(p.b)("span",{className:"token punctuation"},'"'),"Tiny",Object(p.b)("span",{className:"token punctuation"},'"')),Object(p.b)("span",{className:"token punctuation"},">")),Object(p.b)("span",{className:"token plain-text"},"\n","      "),Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token punctuation"},"<"),"header"),Object(p.b)("span",{className:"token punctuation"},">")),Object(p.b)("span",{className:"token plain-text"},"Popover Trigger"),Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token punctuation"},"</"),"header"),Object(p.b)("span",{className:"token punctuation"},">")),Object(p.b)("span",{className:"token plain-text"},"\n","      "),Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token punctuation"},"<"),Object(p.b)("span",{className:"token class-name"},"CardBody"))," ",Object(p.b)("span",{className:"token attr-name"},"id"),Object(p.b)("span",{className:"token attr-value"},Object(p.b)("span",{className:"token punctuation"},"="),Object(p.b)("span",{className:"token punctuation"},'"'),"scrollTriggerId",Object(p.b)("span",{className:"token punctuation"},'"')),Object(p.b)("span",{className:"token punctuation"},">")),Object(p.b)("span",{className:"token plain-text"},"\n","        "),Object(p.b)("span",{className:"token punctuation"},"{"),"trigger",Object(p.b)("span",{className:"token punctuation"},"."),Object(p.b)("span",{className:"token function"},"map"),Object(p.b)("span",{className:"token punctuation"},"("),Object(p.b)("span",{className:"token parameter"},"trigger")," ",Object(p.b)("span",{className:"token operator"},"=>")," ",Object(p.b)("span",{className:"token punctuation"},"("),"\n","          ",Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token punctuation"},"<"),Object(p.b)("span",{className:"token class-name"},"Tooltip")),"\n","            ",Object(p.b)("span",{className:"token attr-name"},"key"),Object(p.b)("span",{className:"token script language-javascript"},Object(p.b)("span",{className:"token script-punctuation punctuation"},"="),Object(p.b)("span",{className:"token punctuation"},"{"),"trigger",Object(p.b)("span",{className:"token punctuation"},"}")),"\n","            ",Object(p.b)("span",{className:"token attr-name"},"eventListener"),Object(p.b)("span",{className:"token attr-value"},Object(p.b)("span",{className:"token punctuation"},"="),Object(p.b)("span",{className:"token punctuation"},'"'),"#scrollTriggerId",Object(p.b)("span",{className:"token punctuation"},'"')),"\n","            ",Object(p.b)("span",{className:"token attr-name"},"className"),Object(p.b)("span",{className:"token attr-value"},Object(p.b)("span",{className:"token punctuation"},"="),Object(p.b)("span",{className:"token punctuation"},'"'),"with-margin inline-block",Object(p.b)("span",{className:"token punctuation"},'"')),"\n","            ",Object(p.b)("span",{className:"token attr-name"},"trigger"),Object(p.b)("span",{className:"token script language-javascript"},Object(p.b)("span",{className:"token script-punctuation punctuation"},"="),Object(p.b)("span",{className:"token punctuation"},"{"),"trigger",Object(p.b)("span",{className:"token punctuation"},"}")),"\n","            ",Object(p.b)("span",{className:"token attr-name"},"placement"),Object(p.b)("span",{className:"token attr-value"},Object(p.b)("span",{className:"token punctuation"},"="),Object(p.b)("span",{className:"token punctuation"},'"'),"top",Object(p.b)("span",{className:"token punctuation"},'"')),"\n","            ",Object(p.b)("span",{className:"token attr-name"},"icon"),Object(p.b)("span",{className:"token attr-value"},Object(p.b)("span",{className:"token punctuation"},"="),Object(p.b)("span",{className:"token punctuation"},'"'),"home",Object(p.b)("span",{className:"token punctuation"},'"')),"\n","          ",Object(p.b)("span",{className:"token punctuation"},">")),Object(p.b)("span",{className:"token plain-text"},"\n","            "),Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token punctuation"},"<"),Object(p.b)("span",{className:"token class-name"},"Button"))," ",Object(p.b)("span",{className:"token attr-name"},"fullWidth"),Object(p.b)("span",{className:"token punctuation"},">")),Object(p.b)("span",{className:"token punctuation"},"{"),"trigger",Object(p.b)("span",{className:"token punctuation"},"}"),Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token punctuation"},"</"),Object(p.b)("span",{className:"token class-name"},"Button")),Object(p.b)("span",{className:"token punctuation"},">")),Object(p.b)("span",{className:"token plain-text"},"\n","          "),Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token punctuation"},"</"),Object(p.b)("span",{className:"token class-name"},"Tooltip")),Object(p.b)("span",{className:"token punctuation"},">")),"\n","        ",Object(p.b)("span",{className:"token punctuation"},")"),Object(p.b)("span",{className:"token punctuation"},")"),Object(p.b)("span",{className:"token punctuation"},"}"),Object(p.b)("span",{className:"token plain-text"},"\n","      "),Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token punctuation"},"</"),Object(p.b)("span",{className:"token class-name"},"CardBody")),Object(p.b)("span",{className:"token punctuation"},">")),Object(p.b)("span",{className:"token plain-text"},"\n","    "),Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token punctuation"},"</"),Object(p.b)("span",{className:"token class-name"},"Card")),Object(p.b)("span",{className:"token punctuation"},">")),"\n","  ",Object(p.b)("span",{className:"token punctuation"},")"),Object(p.b)("span",{className:"token punctuation"},";"),"\n",Object(p.b)("span",{className:"token punctuation"},"}"),"\n","\n",Object(p.b)("span",{className:"token keyword"},"export")," ",Object(p.b)("span",{className:"token keyword"},"default")," Trigger",Object(p.b)("span",{className:"token punctuation"},";"),"\n"))),mdxType:"DemoComponent"},Object(p.b)(i,{mdxType:"Demo_42db9d8bf1efac387414841b03d47ee1"})),Object(p.b)("p",null,"It is also possible to specify tooltip color using ",Object(p.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"status"),":"),Object(p.b)(l.a,{code:Object(p.b)("div",{className:"gatsby-highlight"},Object(p.b)("pre",{className:"language-jsx"},Object(p.b)("code",null,Object(p.b)("span",{className:"token keyword"},"import")," React ",Object(p.b)("span",{className:"token keyword"},"from")," ",Object(p.b)("span",{className:"token string"},"'react'"),Object(p.b)("span",{className:"token punctuation"},";"),"\n",Object(p.b)("span",{className:"token keyword"},"import")," ",Object(p.b)("span",{className:"token punctuation"},"{")," Card",Object(p.b)("span",{className:"token punctuation"},",")," CardBody",Object(p.b)("span",{className:"token punctuation"},",")," Button",Object(p.b)("span",{className:"token punctuation"},",")," Tooltip ",Object(p.b)("span",{className:"token punctuation"},"}")," ",Object(p.b)("span",{className:"token keyword"},"from")," ",Object(p.b)("span",{className:"token string"},"'oah-ui'"),Object(p.b)("span",{className:"token punctuation"},";"),"\n",Object(p.b)("span",{className:"token keyword"},"import")," ",Object(p.b)("span",{className:"token punctuation"},"{")," status ",Object(p.b)("span",{className:"token punctuation"},"}")," ",Object(p.b)("span",{className:"token keyword"},"from")," ",Object(p.b)("span",{className:"token string"},"'../shared'"),Object(p.b)("span",{className:"token punctuation"},";"),"\n","\n",Object(p.b)("span",{className:"token keyword"},"function")," ",Object(p.b)("span",{className:"token function"},"Status"),Object(p.b)("span",{className:"token punctuation"},"("),Object(p.b)("span",{className:"token punctuation"},")")," ",Object(p.b)("span",{className:"token punctuation"},"{"),"\n","  ",Object(p.b)("span",{className:"token keyword"},"return")," ",Object(p.b)("span",{className:"token punctuation"},"("),"\n","    ",Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token punctuation"},"<"),Object(p.b)("span",{className:"token class-name"},"Card"))," ",Object(p.b)("span",{className:"token attr-name"},"size"),Object(p.b)("span",{className:"token attr-value"},Object(p.b)("span",{className:"token punctuation"},"="),Object(p.b)("span",{className:"token punctuation"},'"'),"Tiny",Object(p.b)("span",{className:"token punctuation"},'"')),Object(p.b)("span",{className:"token punctuation"},">")),Object(p.b)("span",{className:"token plain-text"},"\n","      "),Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token punctuation"},"<"),"header"),Object(p.b)("span",{className:"token punctuation"},">")),Object(p.b)("span",{className:"token plain-text"},"Popover Status"),Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token punctuation"},"</"),"header"),Object(p.b)("span",{className:"token punctuation"},">")),Object(p.b)("span",{className:"token plain-text"},"\n","      "),Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token punctuation"},"<"),Object(p.b)("span",{className:"token class-name"},"CardBody"))," ",Object(p.b)("span",{className:"token attr-name"},"id"),Object(p.b)("span",{className:"token attr-value"},Object(p.b)("span",{className:"token punctuation"},"="),Object(p.b)("span",{className:"token punctuation"},'"'),"scrollStatusId",Object(p.b)("span",{className:"token punctuation"},'"')),Object(p.b)("span",{className:"token punctuation"},">")),Object(p.b)("span",{className:"token plain-text"},"\n","        "),Object(p.b)("span",{className:"token punctuation"},"{"),"status",Object(p.b)("span",{className:"token punctuation"},"."),Object(p.b)("span",{className:"token function"},"map"),Object(p.b)("span",{className:"token punctuation"},"("),Object(p.b)("span",{className:"token parameter"},"state")," ",Object(p.b)("span",{className:"token operator"},"=>")," ",Object(p.b)("span",{className:"token punctuation"},"("),"\n","          ",Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token punctuation"},"<"),Object(p.b)("span",{className:"token class-name"},"Tooltip")),"\n","            ",Object(p.b)("span",{className:"token attr-name"},"key"),Object(p.b)("span",{className:"token script language-javascript"},Object(p.b)("span",{className:"token script-punctuation punctuation"},"="),Object(p.b)("span",{className:"token punctuation"},"{"),"state",Object(p.b)("span",{className:"token punctuation"},"}")),"\n","            ",Object(p.b)("span",{className:"token attr-name"},"eventListener"),Object(p.b)("span",{className:"token attr-value"},Object(p.b)("span",{className:"token punctuation"},"="),Object(p.b)("span",{className:"token punctuation"},'"'),"#scrollStatusId",Object(p.b)("span",{className:"token punctuation"},'"')),"\n","            ",Object(p.b)("span",{className:"token attr-name"},"className"),Object(p.b)("span",{className:"token attr-value"},Object(p.b)("span",{className:"token punctuation"},"="),Object(p.b)("span",{className:"token punctuation"},'"'),"with-margin inline-block",Object(p.b)("span",{className:"token punctuation"},'"')),"\n","            ",Object(p.b)("span",{className:"token attr-name"},"trigger"),Object(p.b)("span",{className:"token attr-value"},Object(p.b)("span",{className:"token punctuation"},"="),Object(p.b)("span",{className:"token punctuation"},'"'),"hint",Object(p.b)("span",{className:"token punctuation"},'"')),"\n","            ",Object(p.b)("span",{className:"token attr-name"},"placement"),Object(p.b)("span",{className:"token attr-value"},Object(p.b)("span",{className:"token punctuation"},"="),Object(p.b)("span",{className:"token punctuation"},'"'),"top",Object(p.b)("span",{className:"token punctuation"},'"')),"\n","            ",Object(p.b)("span",{className:"token attr-name"},"content"),Object(p.b)("span",{className:"token attr-value"},Object(p.b)("span",{className:"token punctuation"},"="),Object(p.b)("span",{className:"token punctuation"},'"'),"hello",Object(p.b)("span",{className:"token punctuation"},'"')),"\n","            ",Object(p.b)("span",{className:"token attr-name"},"status"),Object(p.b)("span",{className:"token script language-javascript"},Object(p.b)("span",{className:"token script-punctuation punctuation"},"="),Object(p.b)("span",{className:"token punctuation"},"{"),"state",Object(p.b)("span",{className:"token punctuation"},"}")),"\n","          ",Object(p.b)("span",{className:"token punctuation"},">")),Object(p.b)("span",{className:"token plain-text"},"\n","            "),Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token punctuation"},"<"),Object(p.b)("span",{className:"token class-name"},"Button"))," ",Object(p.b)("span",{className:"token attr-name"},"fullWidth"),Object(p.b)("span",{className:"token punctuation"},">")),Object(p.b)("span",{className:"token punctuation"},"{"),"state",Object(p.b)("span",{className:"token punctuation"},"}"),Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token punctuation"},"</"),Object(p.b)("span",{className:"token class-name"},"Button")),Object(p.b)("span",{className:"token punctuation"},">")),Object(p.b)("span",{className:"token plain-text"},"\n","          "),Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token punctuation"},"</"),Object(p.b)("span",{className:"token class-name"},"Tooltip")),Object(p.b)("span",{className:"token punctuation"},">")),"\n","        ",Object(p.b)("span",{className:"token punctuation"},")"),Object(p.b)("span",{className:"token punctuation"},")"),Object(p.b)("span",{className:"token punctuation"},"}"),Object(p.b)("span",{className:"token plain-text"},"\n","      "),Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token punctuation"},"</"),Object(p.b)("span",{className:"token class-name"},"CardBody")),Object(p.b)("span",{className:"token punctuation"},">")),Object(p.b)("span",{className:"token plain-text"},"\n","    "),Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token tag"},Object(p.b)("span",{className:"token punctuation"},"</"),Object(p.b)("span",{className:"token class-name"},"Card")),Object(p.b)("span",{className:"token punctuation"},">")),"\n","  ",Object(p.b)("span",{className:"token punctuation"},")"),Object(p.b)("span",{className:"token punctuation"},";"),"\n",Object(p.b)("span",{className:"token punctuation"},"}"),"\n","\n",Object(p.b)("span",{className:"token keyword"},"export")," ",Object(p.b)("span",{className:"token keyword"},"default")," Status",Object(p.b)("span",{className:"token punctuation"},";"),"\n"))),mdxType:"DemoComponent"},Object(p.b)(j,{mdxType:"Demo_3bdf724f8234f98af3412fd0463a108c"})),Object(p.b)("h3",null,"Note"),Object(p.b)("div",{className:"note note-warning"},Object(p.b)("div",{className:"note-title"},"Warning!"),Object(p.b)("div",{className:"note-body"},"Please note that ",Object(p.b)("strong",null,"it is not possible")," to add Tooltip component outside Layout component to work with Layout event")))}r.isMDXComponent=!0;var d=e("uHnj"),g=e("igWF"),h=[{name:"trigger",type:"string",description:"Describes when the container will be shown. Available options: "+m.m+" and it Required"},{name:"placement",type:"string",description:"Position will be calculated relatively host element based on the position. Can be "+m.d+". and it Required"},{name:"content",type:"any",description:"Tooltip message"},{name:"icon",type:"string | IconProps",description:"icon css classes or EvaIcon component props"},{name:"status",type:"string",description:"adds specific styles first letter capital: "+m.k},{name:"children",type:"any",description:"this target content can be button link any thing and it Required"},{name:"eventListener",type:"function",description:"component have eventListener to scrollArea but if you want to add eventListener to any other container just pass value that accepted in `querySelector` id: #scroll class: .scroll"},{name:"className",type:"string",description:"You can pass any css class to modify style"},{name:"style",type:"object",description:"You can pass any css object to modify style"}];function y(){return s.a.createElement(c.I,null,s.a.createElement(o.a,{title:"Tooltip Component"}),s.a.createElement(c.n,{breakPoint:{xs:12}},s.a.createElement(b.a,{title:"Tooltip Component"},s.a.createElement(r,null),s.a.createElement(d.a,{name:"Tooltip",props:h}),s.a.createElement(g.a,{keys:["tooltip"]}))))}e.d(t,"default",(function(){return y}))}}]);
//# sourceMappingURL=component---src-pages-components-tooltip-tsx-f5a310308ad96e1265b4.js.map