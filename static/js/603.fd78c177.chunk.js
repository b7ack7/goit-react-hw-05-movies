"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[603],{603:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var r,a,i=t(861),s=t(439),o=t(687),c=t.n(o),u=t(689),l=t(87),p=t(791),d=t(390),f=t(617),v=t(168),h=t(686),x=(0,h.Z)(l.rU)(r||(r=(0,v.Z)(['\ndisplay: inline-flex;\nalign-items: center;\ngap: 4px;\npadding: 4px 0;\nmargin-bottom: 12px;\ncolor: black;\ntext-decoration: none;\nfont-weight: 500;\nposition: relative;\ntransition: color 250ms var(--timing-function);\n::after {\n    content: "";\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    display: block;\n    height: 2px;\n    border-radius: 2px;\n    background-color: red;\n    width: 0%;\n    transition: width 250ms var(--timing-function);\n}\n:hover::after,\n:focus::after {\n    color: red;\n    width: 100%;\n}\n:hover,\n:focus {\n    color: red;\n}\n']))),g=t(184),m=function(e){var n=e.to;return(0,g.jsxs)(x,{to:n,children:[(0,g.jsx)(f.jTe,{size:"16"}),"Go back"]})},j=h.Z.div(a||(a=(0,v.Z)(["\ndisplay: flex;\ngap: 12px;\npadding-bottom: 8px;\nborder-bottom: 1px solid black;\n"]))),w=function(e){var n=e.poster_path,t=e.title,r=e.release_date,a=e.vote_average,i=e.overview,s=e.genres;return(0,g.jsxs)(j,{children:[n&&(0,g.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/"+n,alt:t}),(0,g.jsxs)("div",{children:[(0,g.jsxs)("h2",{children:[t," (",null===r||void 0===r?void 0:r.slice(0,4),")"]}),(0,g.jsxs)("p",{children:["User Score: ",Math.round(10*a),"%"]}),(0,g.jsx)("h3",{children:"Overview"}),(0,g.jsx)("p",{children:i}),(0,g.jsx)("h3",{children:"Genres"}),(0,g.jsx)("p",{children:null===s||void 0===s?void 0:s.map((function(e){return e.name})).join(" ")})]})]})},b=t(873),_=function(){var e,n,t=(0,u.UO)().movieId,r=(0,p.useState)({}),a=(0,s.Z)(r,2),o=a[0],f=a[1],v=(0,p.useState)(""),h=(0,s.Z)(v,2),x=h[0],j=h[1],_=null!==(e=null===(n=(0,u.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";return(0,p.useEffect)((function(){function e(){return e=(0,i.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.Mc)(t);case 2:n=e.sent,f(n);case 4:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}(function(){return e.apply(this,arguments)})().catch((function(e){j("The resource you requested could not be found."),console.error(e)}))}),[t]),x?(0,g.jsxs)("div",{children:[(0,g.jsx)(m,{to:_}),(0,g.jsx)("h1",{children:x})]}):(0,g.jsxs)("div",{children:[(0,g.jsx)(m,{to:_}),(0,g.jsx)(w,{poster_path:o.poster_path,title:o.title,release_date:o.release_date,vote_average:o.vote_average,overview:o.overview,genres:o.genres}),(0,g.jsx)("p",{children:"Additional information"}),(0,g.jsxs)("ul",{style:{borderBottom:"1px solid black",paddingBottom:12},children:[(0,g.jsx)("li",{children:(0,g.jsx)(l.rU,{to:"cast",state:{from:_},children:"Cast"})}),(0,g.jsx)("li",{children:(0,g.jsx)(l.rU,{to:"reviews",state:{from:_},children:"Reviews"})})]}),(0,g.jsx)(p.Suspense,{fallback:(0,g.jsx)(b.a,{}),children:(0,g.jsx)(u.j3,{})})]})}},390:function(e,n,t){t.d(n,{$7:function(){return d},Hx:function(){return p},Mc:function(){return u},uV:function(){return l},wr:function(){return c}});var r=t(861),a=t(687),i=t.n(a),s=t(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="2123fea73978ac77fe6a3f347cf7ced6",c=function(){var e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/trending/all/day",{params:{api_key:o}});case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(n),{params:{api_key:o,language:"en-US"}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(n,"/credits"),{params:{api_key:o,language:"en-US"}});case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(n,"/reviews"),{params:{api_key:o,language:"en-US",page:1}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/search/movie",{params:{api_key:o,query:n,language:"en-US",page:1,include_adult:!1}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=603.fd78c177.chunk.js.map