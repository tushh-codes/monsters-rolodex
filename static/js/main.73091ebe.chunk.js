(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),c=n(3),o=n.n(c),a=(n(12),n(4)),i=n(5),u=n(7),h=n(6),j=(n(13),n(14),n(0)),l=function(e){return Object(j.jsxs)("div",{className:"card-container",children:[Object(j.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),Object(j.jsx)("h2",{children:e.monster.name}),Object(j.jsx)("p",{children:e.monster.email})]})},d=function(e){return Object(j.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(j.jsx)(l,{monster:e},e.id)}))})},b=(n(16),function(e){var t=e.placeholder,n=e.handlechange;return Object(j.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),m=(n(17),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,s=t.searchField,r=n.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())}));return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Monsters Rolodex"}),Object(j.jsx)(b,{placeholder:"Search Monsters",handlechange:function(t){return e.setState({searchField:t.target.value})}}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)(d,{monsters:r})]})}}]),n}(s.Component)),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),s(e),r(e),c(e),o(e)}))};o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),f()}],[[18,1,2]]]);
//# sourceMappingURL=main.73091ebe.chunk.js.map