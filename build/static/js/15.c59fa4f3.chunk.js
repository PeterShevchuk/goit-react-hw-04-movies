(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[15],{142:function(e,t,a){},213:function(e,t,a){"use strict";a.r(t);var n=a(83),r=a(0),c=a.n(r),i=a(3),l=a(17),o=a(115),m=a(215),s=a(73),u=a(11),g=a(89),p=a(90),v=a(96),d=a(94),E=function(e){return function(t){Object(v.a)(n,t);var a=Object(d.a)(n);function n(){var e;Object(g.a)(this,n);for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).saveToStorage=function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(a){throw new Error(a)}},e.getFromStorage=function(e){try{var t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(a){throw new Error(a)}},e.removeFromStorage=function(e){try{localStorage.removeItem(e)}catch(t){throw new Error(t)}},e}return Object(p.a)(n,[{key:"render",value:function(){return c.a.createElement(e,Object.assign({},this.props,this))}}]),n}(r.Component)},f=a(14),_=a(23),h=a(30),b=a(24),C=(a(142),Object(r.lazy)((function(){return a.e(14).then(a.bind(null,203))}))),M=Object(r.lazy)((function(){return a.e(17).then(a.bind(null,204))})),y=Object(r.lazy)((function(){return a.e(19).then(a.bind(null,205))})),O=Object(r.lazy)((function(){return a.e(12).then(a.bind(null,206))})),w=Object(r.lazy)((function(){return a.e(13).then(a.bind(null,207))}));t.default=E((function(e){var t=e.match,a=t.url,g=Object(f.d)((function(e){return e})),p=Object(r.useState)([]),v=Object(n.a)(p,2),d=v[0],E=v[1],j=Object(f.c)(),k=g.detalMovie,N=k.title,L=k.poster_path,x=k.backdrop_path,z=k.budget,S=k.genres,I=void 0===S?[]:S,B=k.runtime,F=k.revenue,J=k.popularity,V=k.tagline,T=k.status,A=k.homepage,P=k.original_title,R=k.overview,Z=k.production_companies,$=void 0===Z?[]:Z,q=k.production_countries,D=void 0===q?[]:q,G=k.release_date,H=k.spoken_languages,K=void 0===H?[]:H,Q=k.vote_average,U=k.id,W=Number(Object(i.i)().id);return Object(r.useEffect)((function(){Object(s.e)("get",Object(s.c)(W)).then((function(e){return j(Object(h.b)(e))})).catch((function(e){return console.log(e)})).finally((function(){return j(Object(_.a)(!1))})),Object(s.e)("get",Object(s.c)(W,"/external_ids")).then((function(e){return E(e)})).catch((function(e){return console.log(e)})).finally((function(){return j(Object(_.a)(!1))}))}),[t.url,W,j]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"singleMovie"},N?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"singleMovie__container"},c.a.createElement("img",{className:"singleMovie__poster",alt:N,src:L?u.i+L:x?u.i+x:u.h}),c.a.createElement("ul",{className:"singleMovie__info"},N&&c.a.createElement("li",{className:"singleMovie__item"},c.a.createElement("span",null,"Title: ")," ",N),P!==N&&c.a.createElement("li",{className:"singleMovie__item"},c.a.createElement("span",null,"Original title: ")," ",P),R&&c.a.createElement("li",{className:"singleMovie__item"},c.a.createElement("span",null,"Overview: ")," ",R),Q>0&&c.a.createElement("li",{className:"singleMovie__item singleMovie__item--center"},c.a.createElement(m.a,{readOnly:!0,name:"customized-10",defaultValue:Q||0,max:10,precision:.5,size:"large"})),z>0&&c.a.createElement("li",{className:"singleMovie__item"},c.a.createElement("span",null,"Budget: ")," ",z,"$"),F>0&&c.a.createElement("li",{className:"singleMovie__item"},c.a.createElement("span",null,"revenue: ")," ",F,"$"),I.length>0&&c.a.createElement("li",{className:"singleMovie__item singleMovie__item-list"},c.a.createElement("span",null,"genres: "),c.a.createElement("ul",null,I.map((function(e){return c.a.createElement("li",{key:e.id},e.name)})))),G&&c.a.createElement("li",{className:"singleMovie__item"},c.a.createElement("span",null,"Data: ")," ",G),B>0&&c.a.createElement("li",{className:"singleMovie__item"},c.a.createElement("span",null,"runtime: ")," ","".concat(Math.trunc(B/60),":").concat(B%60<10?B%60+"0":B%60)),$.length>0&&c.a.createElement("li",{className:"singleMovie__item singleMovie__item-list"},c.a.createElement("span",null,"Production companies: "),c.a.createElement("ul",null,$.map((function(e){return c.a.createElement("li",{key:e.name},e.name," ",e.origin_country&&"("+e.origin_country+")")})))),K.length>0&&c.a.createElement("li",{className:"singleMovie__item singleMovie__item-list"},c.a.createElement("span",null,"languages: "),c.a.createElement("ul",null,K.map((function(e){return c.a.createElement("li",{key:e.name},e.name," (",e.iso_639_1,")")})))),D.length>0&&c.a.createElement("li",{className:"singleMovie__item singleMovie__item-list"},c.a.createElement("span",null,"production countries: ")," ",c.a.createElement("ul",null,D.map((function(e){return c.a.createElement("li",{key:e.iso_3166_1},e.name,"(",e.iso_3166_1,")")})))),J>0&&c.a.createElement("li",{className:"singleMovie__item"},c.a.createElement("span",null,"Popularity: ")," ",J),T&&c.a.createElement("li",{className:"singleMovie__item"},c.a.createElement("span",null,"Status: ")," ",T),V&&c.a.createElement("li",{className:"singleMovie__item"},c.a.createElement("span",null,"Tag line: ")," ",V))),c.a.createElement("div",{className:"singleMovie_btns"},c.a.createElement(o.a,{variant:"contained",color:"primary",onClick:function(){g.favoriteMovie.find((function(e){return e.id===W}))?j(Object(b.c)(W)):j(Object(b.a)({poster_path:L,backdrop_path:x,id:U,title:N}))}},g.favoriteMovie.find((function(e){return e.id===W}))?"remove from":"add to"," favorite"),c.a.createElement(o.a,{variant:"contained",color:"primary"},c.a.createElement(l.b,{to:"".concat(a,"/reviews")},"Reviews")),c.a.createElement(o.a,{variant:"contained",color:"primary"},c.a.createElement(l.b,{to:"".concat(a,"/recommendations")},"Recommendations")),c.a.createElement(o.a,{variant:"contained",color:"primary"},c.a.createElement(l.b,{to:"".concat(a,"/similar")},"Similars")),c.a.createElement(o.a,{variant:"contained",color:"primary"},c.a.createElement(l.b,{to:"".concat(a,"/cast")},"Actors")),c.a.createElement(o.a,{variant:"contained",color:"primary"},c.a.createElement(l.b,{to:"".concat(a,"/trailer")},"trailer")),c.a.createElement(o.a,{variant:"contained",color:"primary",href:A,target:"_blank",disabled:!A},"homepage"),d.instagram_id&&c.a.createElement("a",{href:"https://www.instagram.com/".concat(d.instagram_id,"/"),target:"_blank"},c.a.createElement("svg",{fill:"#3f51b5",viewBox:"0 0 50 50",width:"60px",height:"60px"},c.a.createElement("path",{d:"M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"}))),d.facebook_id&&c.a.createElement("a",{href:"https://www.facebook.com/".concat(d.facebook_id,"/"),target:"_blank"},c.a.createElement("svg",{fill:"#3f51b5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"60px",height:"60px"},c.a.createElement("path",{d:"M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368 V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222 c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z"}))),d.twitter_id&&c.a.createElement("a",{href:"https://twitter.com/".concat(d.twitter_id,"/"),target:"_blank"},c.a.createElement("svg",{fill:"#3f51b5",viewBox:"0 0 50 50",width:"60px",height:"60px"},c.a.createElement("path",{d:"M 40 0 L 10 0 C 4.484375 0 0 4.484375 0 10 L 0 40 C 0 45.515625 4.484375 50 10 50 L 40 50 C 45.515625 50 50 45.515625 50 40 L 50 10 C 50 4.484375 45.515625 0 40 0 Z M 34 40.238281 C 34 40.363281 33.945313 40.480469 33.855469 40.5625 C 33.738281 40.664063 31.011719 43 24.742188 43 C 17.230469 43 17 34.617188 17 33.664063 L 17 23.011719 L 13.429688 23 C 13.191406 23 13 22.816406 13 22.578125 L 13 18.808594 C 13 18.632813 13.109375 18.472656 13.273438 18.40625 C 13.34375 18.382813 20.058594 15.773438 20.058594 9.429688 C 20.058594 9.191406 20.253906 9 20.492188 9 L 24.578125 9 C 24.816406 9 25.007813 9.191406 25.007813 9.429688 L 25 17 L 31.5625 17 C 31.800781 17 31.992188 17.207031 31.992188 17.445313 L 31.992188 22.554688 C 31.992188 22.789063 31.800781 23 31.5625 23 L 25 23 C 25 23 25 33.253906 25 33.503906 C 25 33.75 25.226563 36.765625 28.433594 36.765625 C 31.089844 36.765625 33.320313 35.398438 33.34375 35.382813 C 33.476563 35.296875 33.640625 35.292969 33.777344 35.371094 C 33.914063 35.445313 34 35.589844 34 35.746094 Z"}))))):c.a.createElement("h1",{className:"errorMessage"},"404",c.a.createElement("br",null),"Information not found"),c.a.createElement(r.Suspense,{fallback:c.a.createElement("p",null,"Compaling...")},c.a.createElement(i.d,null,c.a.createElement(i.b,{path:"".concat(a,"/reviews"),render:function(e){return c.a.createElement(M,Object.assign({},e,{id:U}))}}),c.a.createElement(i.b,{path:"".concat(a,"/cast"),render:function(e){return c.a.createElement(C,Object.assign({},e,{id:U}))}}),c.a.createElement(i.b,{path:"".concat(a,"/trailer"),render:function(e){return c.a.createElement(y,Object.assign({},e,{movieId:U}))}}),c.a.createElement(i.b,{path:"".concat(a,"/recommendations"),render:function(e){return c.a.createElement(O,Object.assign({},e,{movieId:U}))}}),c.a.createElement(i.b,{path:"".concat(a,"/similar"),render:function(e){return c.a.createElement(w,Object.assign({},e,{movieId:U}))}})))))}))},73:function(e,t,a){"use strict";a.d(t,"b",(function(){return m})),a.d(t,"d",(function(){return s})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return g})),a.d(t,"e",(function(){return p}));var n=a(80),r=a.n(n),c=a(81),i=a(88),l=a.n(i),o=a(11),m=function(e,t){return"".concat(o.f,"/movie/").concat(o.b[t],"?api_key=").concat(o.a).concat(o.j,"&page=").concat(e).concat(o.k)},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return"".concat(o.f,"/search/movie?api_key=").concat(o.a).concat(o.c,"&query=").concat(e,"&page=").concat(t).concat(o.g)},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return"".concat(o.f,"/movie/").concat(e).concat(t,"?api_key=").concat(o.a)},g=function(e){return"".concat(o.f,"/credit/").concat(e,"?api_key=").concat(o.a)},p=function(){var e=Object(c.a)(r.a.mark((function e(t,a){var n,c,i=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>2&&void 0!==i[2]?i[2]:null,e.next=3,l.a[t](a,n);case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=15.c59fa4f3.chunk.js.map