(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[11],{132:function(e,t,n){},191:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),i=n(15),l=n(107),o=n(190),u=n(67),s=n(63),m=n(85),p=n(12),d=n(66),f=n(4),g=function(e){return{type:f.b,payload:e}},v=n(86),_=(n(132),Object(a.lazy)((function(){return n.e(12).then(n.bind(null,183))}))),E=Object(a.lazy)((function(){return n.e(14).then(n.bind(null,184))})),b=Object(a.lazy)((function(){return n.e(16).then(n.bind(null,185))}));t.default=Object(m.a)((function(e){var t=e.match,n=t.url,m=Object(p.d)((function(e){return e})),f=Object(p.c)(),h=m.detalMovie,y=h.title,M=h.poster_path,O=h.backdrop_path,j=h.budget,N=h.genres,k=void 0===N?[]:N,w=h.runtime,S=h.revenue,z=h.popularity,I=h.tagline,J=h.status,x=h.homepage,C=h.original_title,F=h.overview,T=h.production_companies,A=void 0===T?[]:T,B=h.production_countries,P=void 0===B?[]:B,R=h.release_date,$=h.spoken_languages,q=void 0===$?[]:$,D=h.vote_average,G=h.id,U=Number(Object(c.i)().id);return Object(a.useEffect)((function(){Object(u.e)("get",Object(u.c)(U)).then((function(e){return f(g(e))})).catch((function(e){return console.log(e)})).finally((function(){return f(Object(d.a)(!1))}))}),[t.url,U,f]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"singleMovie"},y?r.a.createElement("div",{className:"singleMovie__container"},r.a.createElement("img",{className:"singleMovie__poster",alt:y,src:M?s.g+M:O?s.g+O:s.e}),r.a.createElement("ul",{className:"singleMovie__info"},y&&r.a.createElement("li",{className:"singleMovie__item"},r.a.createElement("span",null,"Title: ")," ",y),C!==y&&r.a.createElement("li",{className:"singleMovie__item"},r.a.createElement("span",null,"Original title: ")," ",C),F&&r.a.createElement("li",{className:"singleMovie__item"},r.a.createElement("span",null,"Overview: ")," ",F),D>0&&r.a.createElement("li",{className:"singleMovie__item singleMovie__item--center"},r.a.createElement(o.a,{readOnly:!0,name:"customized-10",defaultValue:D,max:10,precision:.5,size:"large"})),j>0&&r.a.createElement("li",{className:"singleMovie__item"},r.a.createElement("span",null,"Budget: ")," ",j,"$"),S>0&&r.a.createElement("li",{className:"singleMovie__item"},r.a.createElement("span",null,"revenue: ")," ",S,"$"),k.length>0&&r.a.createElement("li",{className:"singleMovie__item singleMovie__item-list"},r.a.createElement("span",null,"genres: "),r.a.createElement("ul",null,k.map((function(e){return r.a.createElement("li",{key:e.id},e.name)})))),R&&r.a.createElement("li",{className:"singleMovie__item"},r.a.createElement("span",null,"Data: ")," ",R),w>0&&r.a.createElement("li",{className:"singleMovie__item"},r.a.createElement("span",null,"runtime: ")," ","".concat(Math.trunc(w/60),":").concat(w%60<10?w%60+"0":w%60)),A.length>0&&r.a.createElement("li",{className:"singleMovie__item singleMovie__item-list"},r.a.createElement("span",null,"Production companies: "),r.a.createElement("ul",null,A.map((function(e){return r.a.createElement("li",{key:e.name},e.name," ",e.origin_country&&"("+e.origin_country+")")})))),q.length>0&&r.a.createElement("li",{className:"singleMovie__item singleMovie__item-list"},r.a.createElement("span",null,"languages: "),r.a.createElement("ul",null,q.map((function(e){return r.a.createElement("li",{key:e.name},e.name," (",e.iso_639_1,")")})))),P.length>0&&r.a.createElement("li",{className:"singleMovie__item singleMovie__item-list"},r.a.createElement("span",null,"production countries: ")," ",r.a.createElement("ul",null,P.map((function(e){return r.a.createElement("li",{key:e.iso_3166_1},e.name,"(",e.iso_3166_1,")")})))),z>0&&r.a.createElement("li",{className:"singleMovie__item"},r.a.createElement("span",null,"Popularity: ")," ",z),J&&r.a.createElement("li",{className:"singleMovie__item"},r.a.createElement("span",null,"Status: ")," ",J),I&&r.a.createElement("li",{className:"singleMovie__item"},r.a.createElement("span",null,"Tag line: ")," ",I),r.a.createElement("li",{className:"singleMovie__item"},r.a.createElement(l.a,{variant:"contained",color:"primary",onClick:function(){m.favoriteMovie.find((function(e){return e.id===U}))?f(Object(v.b)(U)):f(Object(v.a)({poster_path:M,backdrop_path:O,id:G,title:y}))}},m.favoriteMovie.find((function(e){return e.id===U}))?"remove from":"add to"," favorite"),r.a.createElement(l.a,{variant:"contained",color:"primary"},r.a.createElement(i.b,{to:"".concat(n,"/reviews")},"Reviews")),r.a.createElement(l.a,{variant:"contained",color:"primary"},r.a.createElement(i.b,{to:"".concat(n,"/cast")},"Actors")),r.a.createElement(l.a,{variant:"contained",color:"primary"},r.a.createElement(i.b,{to:"".concat(n,"/trailer")},"trailer")),r.a.createElement(l.a,{variant:"contained",color:"primary",href:x,target:"_blank",disabled:!x},"homepage")))):r.a.createElement("h1",{className:"errorMessage"},"404",r.a.createElement("br",null),"Information not found"),r.a.createElement(a.Suspense,{fallback:r.a.createElement("p",null,"Compaling...")},r.a.createElement(c.d,null,r.a.createElement(c.b,{path:"".concat(n,"/reviews"),render:function(e){return r.a.createElement(E,Object.assign({},e,{id:G}))}}),r.a.createElement(c.b,{path:"".concat(n,"/cast"),render:function(e){return r.a.createElement(_,Object.assign({},e,{id:G}))}}),r.a.createElement(c.b,{path:"".concat(n,"/trailer"),render:function(e){return r.a.createElement(b,Object.assign({},e,{movieId:G}))}})))))}))},63:function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"g",(function(){return r})),n.d(t,"e",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return o})),n.d(t,"h",(function(){return u})),n.d(t,"i",(function(){return s})),n.d(t,"d",(function(){return m}));var a="https://image.tmdb.org/t/p/w500/",r="https://image.tmdb.org/t/p/original/",c="https://cdn.shopify.com/s/files/1/1841/2299/products/032_RGB_grande.jpg?v=1589096608",i="2f2663043f4e6e1c1ca2fc9d3ec31eb9",l="https://api.themoviedb.org/3",o="&language=en-US",u="&region=ua",s="&primary_release_year=2020",m="&include_adult=false"},66:function(e,t,n){"use strict";var a=n(4);t.a=function(e){return{type:a.j,payload:e}}},67:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return m})),n.d(t,"a",(function(){return p})),n.d(t,"e",(function(){return d}));var a=n(73),r=n.n(a),c=n(74),i=n(82),l=n.n(i),o=n(63),u=function(e,t){return"".concat(o.c,"/movie/").concat(t,"?api_key=").concat(o.a).concat(o.h,"&page=").concat(e).concat(o.i)},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return"".concat(o.c,"/search/movie?api_key=").concat(o.a).concat(o.b,"&query=").concat(e,"&page=").concat(t).concat(o.d)},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return"".concat(o.c,"/movie/").concat(e).concat(t,"?api_key=").concat(o.a)},p=function(e){return"".concat(o.c,"/credit/").concat(e,"?api_key=").concat(o.a)},d=function(){var e=Object(c.a)(r.a.mark((function e(t,n){var a,c,i=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.length>2&&void 0!==i[2]?i[2]:null,e.next=3,l.a[t](n,a);case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},85:function(e,t,n){"use strict";var a=n(75),r=n(76),c=n(78),i=n(77),l=n(0),o=n.n(l);t.a=function(e){return function(t){Object(c.a)(l,t);var n=Object(i.a)(l);function l(){var e;Object(a.a)(this,l);for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return(e=n.call.apply(n,[this].concat(r))).saveToStorage=function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(n){throw new Error(n)}},e.getFromStorage=function(e){try{var t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(n){throw new Error(n)}},e.removeFromStorage=function(e){try{localStorage.removeItem(e)}catch(t){throw new Error(t)}},e}return Object(r.a)(l,[{key:"render",value:function(){return o.a.createElement(e,Object.assign({},this.props,this))}}]),l}(l.Component)}},86:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var a=n(4),r=function(e){return{type:a.c,payload:e}},c=function(e){return{type:a.d,payload:e}}}}]);
//# sourceMappingURL=11.80217f4e.chunk.js.map