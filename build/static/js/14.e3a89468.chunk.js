(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[14],{160:function(e,t,n){},184:function(e,t,n){"use strict";n.r(t);var r=n(81),a=n(0),c=n.n(a),u=n(67),o=n(12),i=n(66);n(160);t.default=function(e){var t=e.movieId,n=e.match,l=Object(a.useState)([]),s=Object(r.a)(l,2),f=s[0],m=s[1],b=Object(o.c)();return Object(a.useEffect)((function(){b(Object(i.a)(!0));var e=n.url.split("/");Object(u.e)("get",Object(u.c)(t||e[2],"/reviews")).then((function(e){return m(e.results)})).catch((function(e){return console.log(e)})).finally((function(){return b(Object(i.a)(!1))}))}),[t,n.url,b]),c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,f.length?"Reviews":"No Reviews"),c.a.createElement("ul",{className:"reviews"},f&&f.map((function(e){return c.a.createElement("li",{className:"reviews__item",key:e.id},c.a.createElement("p",{className:"reviews__author"},e.author),c.a.createElement("br",null),c.a.createElement("p",null,e.content))}))))}},81:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(21);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,c=void 0;try{for(var u,o=e[Symbol.iterator]();!(r=(u=o.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(i){a=!0,c=i}finally{try{r||null==o.return||o.return()}finally{if(a)throw c}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=14.e3a89468.chunk.js.map