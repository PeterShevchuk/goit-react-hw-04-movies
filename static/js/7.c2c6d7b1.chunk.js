(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[7],{128:function(e,t,a){},175:function(e,t,a){"use strict";a.r(t);var n=a(61),r=a(0),o=a.n(r),i=a(2),c=a(97),l=a(59),s=a(56),d=a(65),u=a(66);a(128);t.default=Object(d.a)((function(e){var t=e.match,a=e.loaderToggle,d=(e.saveToStorage,e.getFromStorage),m=Object(r.useState)([]),p=Object(n.a)(m,2),b=p[0],g=p[1],f=b.person,h=b.job,v=b.media_type,y=b.media,S=b.department,x=String(Object(i.i)().id),_=Object(i.g)();return Object(r.useEffect)((function(){a(!0),Object(l.e)("get",Object(l.a)(x)).then((function(e){return g(e)})).catch((function(e){return console.log(e)})).finally((function(){return a(!1)}))}),[a,t.url,x,d]),o.a.createElement(o.a.Fragment,null,f&&o.a.createElement("div",{className:"singleActors"},o.a.createElement("div",{className:"singleActors__container"},o.a.createElement("img",{className:"singleActors__poster",alt:f.name,src:f.profile_path?s.g+f.profile_path:s.e}),o.a.createElement("ul",{className:"singleActors__info"},f.name&&o.a.createElement("li",{className:"singleActors__item"},o.a.createElement("span",null,"Name: ")," ",f.name),h&&o.a.createElement("li",{className:"singleActors__item"},o.a.createElement("span",null,"job: ")," ",h),S&&o.a.createElement("li",{className:"singleActors__item"},o.a.createElement("span",null,"departmen: ")," ",S),f.popularity&&o.a.createElement("li",{className:"singleActors__item"},o.a.createElement("span",null,"popularity: ")," ",f.popularity),v&&o.a.createElement("li",{className:"singleActors__item"},o.a.createElement("span",null,"Type Movie: ")," ",v," ",f.adult&&"(+18)"))),y&&o.a.createElement("div",null,o.a.createElement("h2",null,"Media"),o.a.createElement("div",{className:"actor__media"},o.a.createElement("div",{className:"actor__media-img"},o.a.createElement("img",{src:s.g+y.poster_path,alt:y.name,width:"300"})),o.a.createElement("div",null,o.a.createElement("ul",{className:"singleActors__info"},y.title&&o.a.createElement("li",{className:"singleActors__item"},o.a.createElement("span",null,"Title: ")," ",y.title," ",y.adult&&"(+18)"),y.release_date&&o.a.createElement("li",{className:"singleActors__item"},o.a.createElement("span",null,"release date: ")," ",y.release_date),y.overview&&o.a.createElement("li",{className:"singleActors__item"},o.a.createElement("span",null,"Overview: ")," ",y.overview),y.popularity>0&&o.a.createElement("li",{className:"singleActors__item"},o.a.createElement("span",null,"Popularity: ")," ",y.popularity),y.character&&o.a.createElement("li",{className:"singleActors__item"},o.a.createElement("span",null,"character: ")," ",y.character),y.tagline&&o.a.createElement("li",{className:"singleActors__item"},o.a.createElement("span",null,"Tag line: ")," ",y.tagline)),o.a.createElement("div",{className:"singleActors__info-seeMore"},o.a.createElement(c.a,{variant:"contained",color:"primary",onClick:function(){return e=y.id,void _.push("/movies/".concat(e));var e}},"See more info"))))),f.known_for&&o.a.createElement("div",null,o.a.createElement("h2",null,"Actor films"),o.a.createElement("ul",{className:"actor__films"},f.known_for.map((function(e){return o.a.createElement(u.a,Object.assign({key:e.id},e))}))))))}))},56:function(e,t,a){"use strict";a.d(t,"f",(function(){return n})),a.d(t,"g",(function(){return r})),a.d(t,"e",(function(){return o})),a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return l})),a.d(t,"h",(function(){return s})),a.d(t,"i",(function(){return d})),a.d(t,"d",(function(){return u}));var n="https://image.tmdb.org/t/p/w500/",r="https://image.tmdb.org/t/p/original/",o="https://cdn.shopify.com/s/files/1/1841/2299/products/032_RGB_grande.jpg?v=1589096608",i="2f2663043f4e6e1c1ca2fc9d3ec31eb9",c="https://api.themoviedb.org/3",l="&language=en-US",s="&region=ua",d="&primary_release_year=2020",u="&include_adult=false"},59:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"d",(function(){return d})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return m})),a.d(t,"e",(function(){return p}));var n=a(69),r=a.n(n),o=a(70),i=a(73),c=a.n(i),l=a(56),s=function(e,t){return"".concat(l.c,"/movie/").concat(t,"?api_key=").concat(l.a).concat(l.h,"&page=").concat(e).concat(l.i)},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return"".concat(l.c,"/search/movie?api_key=").concat(l.a).concat(l.b,"&query=").concat(e,"&page=").concat(t).concat(l.d)},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return"".concat(l.c,"/movie/").concat(e).concat(t,"?api_key=").concat(l.a)},m=function(e){return"".concat(l.c,"/credit/").concat(e,"?api_key=").concat(l.a)},p=function(){var e=Object(o.a)(r.a.mark((function e(t,a){var n,o,i=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>2&&void 0!==i[2]?i[2]:null,e.next=3,c.a[t](a,n);case 3:return o=e.sent,e.abrupt("return",o.data);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},61:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(64);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(l){r=!0,o=l}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},63:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,"a",(function(){return n}))},64:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(63);function r(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n.a)(e,t):void 0}}},65:function(e,t,a){"use strict";var n=a(12),r=a(13),o=a(15),i=a(14),c=a(0),l=a.n(c);t.a=function(e){return function(t){Object(o.a)(c,t);var a=Object(i.a)(c);function c(){var e;Object(n.a)(this,c);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).saveToStorage=function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(a){throw new Error(a)}},e.getFromStorage=function(e){try{var t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(a){throw new Error(a)}},e.removeFromStorage=function(e){try{localStorage.removeItem(e)}catch(t){throw new Error(t)}},e}return Object(r.a)(c,[{key:"render",value:function(){return l.a.createElement(e,Object.assign({},this.props,this))}}]),c}(c.Component)}},66:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(2),i=a(56),c=a(67),l=a.n(c);a(68);t.a=function(e){var t=e.poster_path,a=e.backdrop_path,n=e.id,c=e.title,s=e.removeFavorite,d=e.adult,u=Object(o.g)();return r.a.createElement("li",{className:"movies__item"},r.a.createElement("img",{onClick:function(){u.push("/movies/".concat(n))},className:"movies__img",src:t?i.f+t:a?i.f+a:i.e,alt:c}),r.a.createElement("p",{className:"movies__title"},d&&"(18+)"," ",c," "),s&&r.a.createElement("img",{className:"movies__favorite-remove",alt:n,src:l.a,onClick:function(){return s(n)}}))}},67:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAY0lEQVRIiWNgGAWDGBxnYGD4j4aPUcvww1gMJxcfxmYBE7Vcigf8p4MdQwAw4pGjVhBhtYMecYwVjFo8avGoxaMWj1o8avHQsvgJFcx/TI4mT6hGcht5jxgYGDwodPgoGMIAAIf9LS9I+wcVAAAAAElFTkSuQmCC"},68:function(e,t,a){},97:function(e,t,a){"use strict";var n=a(53),r=a(3),o=a(0),i=(a(1),a(54)),c=a(57),l=a(74),s=a(181),d=a(60),u=o.forwardRef((function(e,t){var a=e.children,c=e.classes,l=e.className,u=e.color,m=void 0===u?"default":u,p=e.component,b=void 0===p?"button":p,g=e.disabled,f=void 0!==g&&g,h=e.disableElevation,v=void 0!==h&&h,y=e.disableFocusRipple,S=void 0!==y&&y,x=e.endIcon,_=e.focusVisibleClassName,E=e.fullWidth,A=void 0!==E&&E,j=e.size,w=void 0===j?"medium":j,O=e.startIcon,k=e.type,N=void 0===k?"button":k,C=e.variant,z=void 0===C?"text":C,I=Object(n.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),T=O&&o.createElement("span",{className:Object(i.a)(c.startIcon,c["iconSize".concat(Object(d.a)(w))])},O),R=x&&o.createElement("span",{className:Object(i.a)(c.endIcon,c["iconSize".concat(Object(d.a)(w))])},x);return o.createElement(s.a,Object(r.a)({className:Object(i.a)(c.root,c[z],l,"inherit"===m?c.colorInherit:"default"!==m&&c["".concat(z).concat(Object(d.a)(m))],"medium"!==w&&[c["".concat(z,"Size").concat(Object(d.a)(w))],c["size".concat(Object(d.a)(w))]],v&&c.disableElevation,f&&c.disabled,A&&c.fullWidth),component:b,disabled:f,focusRipple:!S,focusVisibleClassName:Object(i.a)(c.focusVisible,_),ref:t,type:N},I),o.createElement("span",{className:c.label},T,a,R))}));t.a=Object(c.a)((function(e){return{root:Object(r.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(l.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(l.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(l.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(l.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(l.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(l.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(l.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(u)}}]);
//# sourceMappingURL=7.c2c6d7b1.chunk.js.map