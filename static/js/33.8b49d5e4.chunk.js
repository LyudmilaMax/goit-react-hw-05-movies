"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[33],{460:function(n,e,t){t.d(e,{Bt:function(){return x},Ny:function(){return p},Tg:function(){return s},wK:function(){return m},y:function(){return d}});var r=t(861),a=t(757),i=t.n(a),o=t(243);o.Z.defaults.baseURL="https://api.themoviedb.org/";var c="fba338e92d7feb991f2d168ce8330321";function s(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/3/trending/movie/day",{params:{api_key:c}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/3/movie/".concat(e),{params:{api_key:c,language:"en-US"}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/3/movie/".concat(e,"/credits"),{params:{api_key:c,language:"en-US"}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/3/movie/".concat(e,"/reviews"),{params:{api_key:c,language:"en-US"}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/3/search/movie",{params:{api_key:c,language:"en-US",query:e}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},33:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var r,a,i,o,c,s,u,p,l,d,f,x,h,m=t(861),g=t(439),v=t(757),b=t.n(v),Z=t(689),w=t(791),k=t(460),y=t(168),j=t(444),P=t(87),_=j.ZP.button(r||(r=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n  height: 32px;\n  padding: 8px 16px;\n  margin-bottom: 16px;\n  text-align: center;\n  line-height: 1.63;\n  font-weight: 500;\n  font-size: 16px;\n  border: 1px solid grey;\n  border-radius: 4px;\n  border-color: orangered;\n  color: black;\n  background: #f5f4fa;\n  box-shadow: rgb(164 156 156) 1px 1px 3px 1px;\n  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    background-color: rgba(63, 39, 30, 0.25);\n    color: black;\n  }\n"]))),U=j.ZP.div(a||(a=(0,y.Z)(["\n  display: flex;\n  border-bottom: 1px solid black;\n"]))),S=j.ZP.h1(i||(i=(0,y.Z)(["\n  margin-left: 24px;\n  margin-bottom: 14px;\n"]))),z=j.ZP.img(o||(o=(0,y.Z)(["\n  width: 300px;\n  height: 400px;\n  object-fit: cover;\n"]))),C=j.ZP.div(c||(c=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),L=j.ZP.p(s||(s=(0,y.Z)(["\n  margin-left: 24px;\n  margin-bottom: 14px;\n  font-size: 18px;\n  font-weight: 600;\n"]))),O=j.ZP.h2(u||(u=(0,y.Z)(["\n  margin-left: 24px;\n  margin-bottom: 14px;\n"]))),R=j.ZP.p(p||(p=(0,y.Z)(["\n  margin-left: 24px;\n  margin-bottom: 14px;\n"]))),G=j.ZP.h3(l||(l=(0,y.Z)(["\n  margin-left: 24px;\n  margin-bottom: 14px;\n"]))),N=j.ZP.p(d||(d=(0,y.Z)(["\n  margin-left: 24px;\n  margin-bottom: 14px;\n"]))),T=j.ZP.div(f||(f=(0,y.Z)(["\n  margin-top: 14px;\n  margin-bottom: 14px;\n  margin-left: 8px;\n  padding: 8px 0px;\n"]))),q=j.ZP.h3(x||(x=(0,y.Z)(["\n  margin-bottom: 14px;\n"]))),A=(0,j.ZP)(P.OL)(h||(h=(0,y.Z)(["\n  color: black;\n  font-weight: 500;\n  margin-right: 14px;\n  text-decoration: underline;\n  &:hover {\n    color: orangered;\n  }\n  &.active {\n    color: white;\n    background-color: orangered;\n  }\n"]))),B=t(184),E=function(){var n=(0,Z.UO)().movieId,e=(0,w.useState)(null),t=(0,g.Z)(e,2),r=t[0],a=t[1],i=(0,Z.s0)(),o=(0,Z.TH)(),c=(0,w.useRef)(o);if((0,w.useEffect)((function(){var e=function(){var e=(0,m.Z)(b().mark((function e(){var t;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,k.Ny)(n);case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n]),!r)return(0,B.jsx)("h2",{children:"\u0414\u0430\u043d\u0438\u0439 \u0444\u0456\u043b\u044c\u043c \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u0456\u0439"});var s=r.popularity,u=r.poster_path,p=r.genres,l=r.title,d=r.overview,f=p.map((function(n){return n.name})).join(" "),x=u?"https://image.tmdb.org/t/p/w500/".concat(u):"https://podkapot.com.ua/static-files/img/html/vizit/search-no-find.png";return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(_,{type:"button",onClick:function(){var n,e;i(null!==(n=null===(e=c.current.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/")},children:"Go back"}),(0,B.jsxs)(U,{children:[(0,B.jsx)(z,{width:"200",src:x,alt:l}),(0,B.jsxs)(C,{children:[(0,B.jsx)(S,{children:l}),(0,B.jsxs)(L,{children:["User score: ",Math.ceil(s),"%"]}),(0,B.jsx)(O,{children:"Overview"}),(0,B.jsx)(R,{children:d}),(0,B.jsx)(G,{children:"Genres"}),(0,B.jsx)(N,{children:f})]})]}),(0,B.jsxs)(T,{children:[(0,B.jsx)(q,{children:"Additional information: "}),(0,B.jsx)(A,{to:"cast",children:"Cast"}),(0,B.jsx)(A,{to:"reviews",children:"Reviews"})]}),(0,B.jsx)(w.Suspense,{fallback:(0,B.jsx)("div",{children:"Loading..."}),children:(0,B.jsx)(Z.j3,{})})]})}}}]);
//# sourceMappingURL=33.8b49d5e4.chunk.js.map