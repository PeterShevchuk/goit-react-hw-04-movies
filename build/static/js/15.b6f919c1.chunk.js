(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[15],{102:function(e,t,n){},198:function(e,t,n){"use strict";n.r(t);var r=n(29),a=n(6),c=n(84),o=n(0),u=n.n(o),i=n(17),s=n(11),l=n(12),p=n(24),f=n(92),b=(n(102),{email:"",password:""});t.default=function(){var e=Object(o.useState)(b),t=Object(c.a)(e,2),n=t[0],h=t[1],d=Object(l.c)(),m=function(e){var t=e.target,c=t.name,o=t.value;h(Object(a.a)(Object(a.a)({},n),{},Object(r.a)({},c,o)))};return Object(o.useEffect)((function(){d(Object(p.a)(!1))}),[d]),u.a.createElement("div",null,u.a.createElement("h1",{className:"title"},"Login"),u.a.createElement("form",{className:"login-form",onSubmit:function(e){e.preventDefault(),d(Object(f.c)(n))}},u.a.createElement("input",{type:"text",name:"email",placeholder:"Email",onChange:m}),u.a.createElement("input",{type:"password",name:"password",placeholder:"Password",onChange:m}),u.a.createElement("button",{type:"submit"},"Sing in"),u.a.createElement("p",null,"If you do not have any account, please ",u.a.createElement(i.b,{to:s.a.registration},"registration"))))}},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(27);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,c=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(i){a=!0,c=i}finally{try{r||null==u.return||u.return()}finally{if(a)throw c}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return h})),n.d(t,"b",(function(){return d}));var r=n(85),a=n.n(r),c=n(86),o=n(89),u=n.n(o),i=n(24),s=n(26),l=n(28),p="https://goit-phonebook-api.herokuapp.com/users/",f=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(Object(i.a)(!0)),t.next=4,u()({method:"post",url:p+"signup",data:e});case 4:r=t.sent,n(Object(s.a)({Token:r.data.token})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:return t.prev=11,n(Object(i.a)(!1)),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(Object(i.a)(!0)),t.next=4,u()({method:"post",url:p+"login",data:e});case 4:r=t.sent,n(Object(s.a)({Token:r.data.token,Name:r.data.user.name})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:return t.prev=11,n(Object(i.a)(!1)),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(Object(i.a)(!0)),t.next=4,u()({method:"post",url:p+"logout",headers:{Authorization:"Bearer ".concat(e)}});case 4:n(Object(s.a)({Token:null,Name:""})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:return t.prev=10,n(Object(i.a)(!1)),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(Object(i.a)(!0)),t.next=4,u()({method:"",url:p+"current",headers:{Authorization:"Bearer ".concat(e)}});case 4:r=t.sent,n(Object(l.b)(r.data)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:return t.prev=11,n(Object(i.a)(!1)),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(e){return t.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=15.b6f919c1.chunk.js.map