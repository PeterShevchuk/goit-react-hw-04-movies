(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[9],{154:function(e,t,a){},195:function(e,t,a){"use strict";a.r(t);var n=a(85),r=a.n(n),o=a(86),c=a(93),i=a(94),u=a(98),s=a(96),p=a(0),l=a.n(p),m=a(206),d=a(153),f=a(205),g=a(196),h=a(12),v=a(24),b=a(80),A=a(81),w=a(35),_=a(26),j=(a(154),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),u=0;u<n;u++)i[u]=arguments[u];return(e=t.call.apply(t,[this].concat(i))).updateMovies=Object(o.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.Loader(!0);case 2:return t.next=4,Object(b.e)("get",Object(b.b)(e.props.page,e.props.HomeLoad)).then((function(t){return e.props.setMovie(t)}));case 4:e.props.Loader(!1);case 5:case"end":return t.stop()}}),t)}))),e.componentDidMount=function(){e.updateMovies()},e.componentDidUpdate=function(){var t=Object(o.a)(r.a.mark((function t(a,n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.props.page!==a.page){t.next=3;break}return t.abrupt("return");case 3:e.updateMovies();case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.handleChangeTabs=function(){var t=Object(o.a)(r.a.mark((function t(a,n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n!==e.props.HomeLoad){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.props.handleChange(1);case 4:return t.next=6,e.props.changeOptions({HomeLoad:n});case 6:e.updateMovies();case 7:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.movies,a=e.totalPages,n=e.HomeLoad,r=e.page,o=e.handleChange;return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{square:!0},l.a.createElement(f.a,{value:n,indicatorColor:"primary",textColor:"primary",onChange:this.handleChangeTabs,"aria-label":"disabled tabs example",centered:!0},l.a.createElement(g.a,{label:"Popular"}),l.a.createElement(g.a,{label:"Top"}),l.a.createElement(g.a,{label:"upcoming"}),l.a.createElement(g.a,{label:"Now playing"}))),l.a.createElement("ul",{className:"movies__list"},t.map((function(e){return l.a.createElement(A.a,Object.assign({key:e.id},e))}))),l.a.createElement(m.a,{color:"primary",count:a,page:r,onChange:function(e,t){return o(t)}}))}}]),a}(p.Component)),O={setMovie:w.c,handleChange:w.b,Loader:v.a,changeOptions:_.a};t.default=Object(h.b)((function(e){return{movies:e.homePage.movies,page:e.homePage.page,totalPages:e.homePage.totalPages,HomeValue:e.homePage.HomeValue,HomeLoad:e.options.HomeLoad}}),O)(j)},76:function(e,t,a){"use strict";a.d(t,"g",(function(){return n})),a.d(t,"f",(function(){return r})),a.d(t,"a",(function(){return o})),a.d(t,"d",(function(){return c})),a.d(t,"c",(function(){return i})),a.d(t,"h",(function(){return u})),a.d(t,"i",(function(){return s})),a.d(t,"e",(function(){return p})),a.d(t,"b",(function(){return l}));var n="https://image.tmdb.org/t/p/".concat(["w500","original"][localStorage.getItem("SiteOptions")?JSON.parse(localStorage.getItem("SiteOptions")).LoadImage:0]),r="https://cdn.shopify.com/s/files/1/1841/2299/products/032_RGB_grande.jpg?v=1589096608",o="2f2663043f4e6e1c1ca2fc9d3ec31eb9",c="https://api.themoviedb.org/3",i="&language=en-US",u="&region=ua",s="&primary_release_year=2020",p="&include_adult=false",l=["popular","top_rated","upcoming","now_playing"]},80:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"d",(function(){return p})),a.d(t,"c",(function(){return l})),a.d(t,"a",(function(){return m})),a.d(t,"e",(function(){return d}));var n=a(85),r=a.n(n),o=a(86),c=a(89),i=a.n(c),u=a(76),s=function(e,t){return"".concat(u.d,"/movie/").concat(u.b[t],"?api_key=").concat(u.a).concat(u.h,"&page=").concat(e).concat(u.i)},p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return"".concat(u.d,"/search/movie?api_key=").concat(u.a).concat(u.c,"&query=").concat(e,"&page=").concat(t).concat(u.e)},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return"".concat(u.d,"/movie/").concat(e).concat(t,"?api_key=").concat(u.a)},m=function(e){return"".concat(u.d,"/credit/").concat(e,"?api_key=").concat(u.a)},d=function(){var e=Object(o.a)(r.a.mark((function e(t,a){var n,o,c=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>2&&void 0!==c[2]?c[2]:null,e.next=3,i.a[t](a,n);case 3:return o=e.sent,e.abrupt("return",o.data);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},81:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(3),c=a(12),i=a(25),u=a(76),s=a(82),p=a.n(s);a(83);t.a=function(e){var t=e.poster_path,a=e.backdrop_path,n=e.id,s=e.title,l=e.adult,m=Object(c.c)(),d=Object(o.g)();return r.a.createElement("li",{className:"movies__item"},r.a.createElement("img",{onClick:function(){d.push("/movies/".concat(n))},className:"movies__img",src:t?u.g+t:a?u.g+a:u.f,alt:s}),r.a.createElement("p",{className:"movies__title"},l&&"(18+)"," ",s," "),"/movies/favorite"===d.location.pathname&&r.a.createElement("img",{className:"movies__favorite-remove",alt:n,src:p.a,onClick:function(){return m(Object(i.c)(n))}}))}},82:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAY0lEQVRIiWNgGAWDGBxnYGD4j4aPUcvww1gMJxcfxmYBE7Vcigf8p4MdQwAw4pGjVhBhtYMecYwVjFo8avGoxaMWj1o8avHQsvgJFcx/TI4mT6hGcht5jxgYGDwodPgoGMIAAIf9LS9I+wcVAAAAAElFTkSuQmCC"},83:function(e,t,a){}}]);
//# sourceMappingURL=9.0cec9b81.chunk.js.map