(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(22),a=c.n(n),s=c(7),i=c(2),j=c(0),r=c.n(j),b=c(3),l=r.a.createContext({value:[]}),d=function(e){var t=e.children;return Object(b.jsx)(l.Provider,{value:{value:[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]},children:t})},o=function(){return Object(b.jsx)("h1",{className:"title",children:"Home page"})},x=c(15),h=c.n(x),O=function(){var e=Object(j.useContext)(l).value,t=Object(i.r)().tabId,c=e.find((function(e){return e.id===t}));return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{className:"title",children:"Tabs page"}),Object(b.jsx)("div",{className:"tabs is-boxed",children:Object(b.jsx)("ul",{children:e.map((function(e){return Object(b.jsx)("li",{"data-cy":"Tab",className:h()({"is-active":e.id===t}),children:Object(b.jsx)(s.b,{to:"/tabs/".concat(e.id),children:e.title})},e.id)}))})}),Object(b.jsx)("div",{className:"block","data-cy":"TabContent",children:(null===c||void 0===c?void 0:c.content)||"Please select a tab"})]})},u=function(){return Object(b.jsx)(O,{})},m=function(){return Object(b.jsx)("h1",{className:"title",children:"Page not found"})},v=(c(31),c(32),c(33),function(e){var t=e.isActive;return h()("navbar-item",{"is-active":t})}),f=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"navbar-brand",children:[Object(b.jsx)(s.c,{to:"/",className:v,children:"Home"}),Object(b.jsx)(s.c,{to:"/tabs",className:v,children:"Tabs"})]})})}),Object(b.jsx)("div",{className:"section",children:Object(b.jsx)(i.b,{})})]})},p=function(){return Object(b.jsx)(s.a,{children:Object(b.jsx)(d,{children:Object(b.jsxs)(i.e,{children:[Object(b.jsx)(i.c,{path:"/home",element:Object(b.jsx)(i.a,{to:"/"})}),Object(b.jsxs)(i.c,{path:"/",element:Object(b.jsx)(f,{}),children:[Object(b.jsx)(i.c,{index:!0,element:Object(b.jsx)(o,{})}),Object(b.jsxs)(i.c,{path:"tabs",children:[Object(b.jsx)(i.c,{index:!0,element:Object(b.jsx)(u,{})}),Object(b.jsx)(i.c,{path:":tabId",element:Object(b.jsx)(u,{})})]}),Object(b.jsx)(i.c,{path:"*",element:Object(b.jsx)(m,{})})]})]})})})};a.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.caf4bf95.chunk.js.map