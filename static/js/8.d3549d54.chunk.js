(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[8],{147:function(t,e,r){},178:function(t,e,r){"use strict";r.r(e);var n=r(80),a=r(61),o=r(0),i=r.n(o),c=r(66),u=r(65);r(147);e.default=Object(u.a)((function(t){var e=t.loaderToggle,r=t.saveToStorage,u=(0,t.getFromStorage)("FavoriteMovie");u||r("FavoriteMovie",u=[]);var s=Object(o.useState)(u),f=Object(a.a)(s,2),l=f[0],m=f[1];Object(o.useEffect)((function(){e(!0),e(!1)}),[e]);var v=function(t){r("FavoriteMovie",Object(n.a)(l.filter((function(e){return e.id!==t})))),m(Object(n.a)(l.filter((function(e){return e.id!==t}))))};return i.a.createElement("ul",{className:"movies__list"},!l.length>0&&i.a.createElement("li",null,i.a.createElement("h1",null,"No movies in favorite")),l.length>0&&l.map((function(t){return i.a.createElement(c.a,Object.assign({key:t.id},t,{removeFavorite:v}))})))}))},56:function(t,e,r){"use strict";r.d(e,"f",(function(){return n})),r.d(e,"g",(function(){return a})),r.d(e,"e",(function(){return o})),r.d(e,"a",(function(){return i})),r.d(e,"c",(function(){return c})),r.d(e,"b",(function(){return u})),r.d(e,"h",(function(){return s})),r.d(e,"i",(function(){return f})),r.d(e,"d",(function(){return l}));var n="https://image.tmdb.org/t/p/w500/",a="https://image.tmdb.org/t/p/original/",o="https://cdn.shopify.com/s/files/1/1841/2299/products/032_RGB_grande.jpg?v=1589096608",i="2f2663043f4e6e1c1ca2fc9d3ec31eb9",c="https://api.themoviedb.org/3",u="&language=en-US",s="&region=ua",f="&primary_release_year=2020",l="&include_adult=false"},61:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(64);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(u){a=!0,o=u}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},63:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"a",(function(){return n}))},64:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(63);function a(t,e){if(t){if("string"===typeof t)return Object(n.a)(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(t,e):void 0}}},65:function(t,e,r){"use strict";var n=r(12),a=r(13),o=r(15),i=r(14),c=r(0),u=r.n(c);e.a=function(t){return function(e){Object(o.a)(c,e);var r=Object(i.a)(c);function c(){var t;Object(n.a)(this,c);for(var e=arguments.length,a=new Array(e),o=0;o<e;o++)a[o]=arguments[o];return(t=r.call.apply(r,[this].concat(a))).saveToStorage=function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(r){throw new Error(r)}},t.getFromStorage=function(t){try{var e=localStorage.getItem(t);return e?JSON.parse(e):null}catch(r){throw new Error(r)}},t.removeFromStorage=function(t){try{localStorage.removeItem(t)}catch(e){throw new Error(e)}},t}return Object(a.a)(c,[{key:"render",value:function(){return u.a.createElement(t,Object.assign({},this.props,this))}}]),c}(c.Component)}},66:function(t,e,r){"use strict";var n=r(0),a=r.n(n),o=r(2),i=r(56),c=r(67),u=r.n(c);r(68);e.a=function(t){var e=t.poster_path,r=t.backdrop_path,n=t.id,c=t.title,s=t.removeFavorite,f=t.adult,l=Object(o.g)();return a.a.createElement("li",{className:"movies__item"},a.a.createElement("img",{onClick:function(){l.push("/movies/".concat(n))},className:"movies__img",src:e?i.f+e:r?i.f+r:i.e,alt:c}),a.a.createElement("p",{className:"movies__title"},f&&"(18+)"," ",c," "),s&&a.a.createElement("img",{className:"movies__favorite-remove",alt:n,src:u.a,onClick:function(){return s(n)}}))}},67:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAY0lEQVRIiWNgGAWDGBxnYGD4j4aPUcvww1gMJxcfxmYBE7Vcigf8p4MdQwAw4pGjVhBhtYMecYwVjFo8avGoxaMWj1o8avHQsvgJFcx/TI4mT6hGcht5jxgYGDwodPgoGMIAAIf9LS9I+wcVAAAAAElFTkSuQmCC"},68:function(t,e,r){},80:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(63);var a=r(64);function o(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(a.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=8.d3549d54.chunk.js.map