(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[875],{4875:function(r,n,e){"use strict";e.r(n),e.d(n,{Cast:function(){return v}});var t=e(5861),a=e(9439),u=e(4687),c=e.n(u),i=e(7689),s=e(2791),o=e(555),p=e.n(o),f=e(184),h=function(r){var n=r.profile_path,e=r.original_name,t=r.character;return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:n?"https://image.tmdb.org/t/p/w200/"+n:p(),alt:e}),(0,f.jsx)("h4",{children:e}),(0,f.jsxs)("p",{children:["Character: ",t||"No information"]})]})},l=e(4390),v=function(){var r=(0,i.UO)().movieId,n=(0,s.useState)([]),e=(0,a.Z)(n,2),u=e[0],o=e[1],p=(0,s.useState)(""),v=(0,a.Z)(p,2),d=v[0],g=v[1];return(0,s.useEffect)((function(){function n(){return n=(0,t.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,l.uV)(r);case 2:e=n.sent,o(e);case 4:case"end":return n.stop()}}),n)}))),n.apply(this,arguments)}(function(){return n.apply(this,arguments)})().catch((function(r){g("Something went wrong, please try again later"),console.error(r)}))}),[r]),d?(0,f.jsx)("h1",{children:d}):(0,f.jsxs)("div",{children:[(0,f.jsx)("ul",{children:null===u||void 0===u?void 0:u.map((function(r){return(0,f.jsx)(h,{profile_path:r.profile_path,original_name:r.original_name,character:r.character},r.id)}))}),!u.length&&(0,f.jsx)("p",{children:"We don't have any cast for this movie"})]})}},555:function(){},4390:function(r,n,e){"use strict";e.d(n,{$7:function(){return h},Hx:function(){return f},Mc:function(){return o},uV:function(){return p},wr:function(){return s}});var t=e(5861),a=e(4687),u=e.n(a),c=e(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="2123fea73978ac77fe6a3f347cf7ced6",s=function(){var r=(0,t.Z)(u().mark((function r(){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/trending/all/day",{params:{api_key:i}});case 2:return n=r.sent,r.abrupt("return",n.data.results);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,t.Z)(u().mark((function r(n){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(n),{params:{api_key:i,language:"en-US"}});case 2:return e=r.sent,r.abrupt("return",e.data);case 4:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),p=function(){var r=(0,t.Z)(u().mark((function r(n){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(n,"/credits"),{params:{api_key:i,language:"en-US"}});case 2:return e=r.sent,r.abrupt("return",e.data.cast);case 4:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),f=function(){var r=(0,t.Z)(u().mark((function r(n){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(n,"/reviews"),{params:{api_key:i,language:"en-US",page:1}});case 2:return e=r.sent,r.abrupt("return",e.data.results);case 4:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),h=function(){var r=(0,t.Z)(u().mark((function r(n){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/search/movie",{params:{api_key:i,query:n,language:"en-US",page:1,include_adult:!1}});case 2:return e=r.sent,r.abrupt("return",e.data.results);case 4:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=875.38a21cd0.chunk.js.map