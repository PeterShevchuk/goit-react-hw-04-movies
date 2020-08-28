(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[12],{129:function(e,o,a){},130:function(e,o,a){"use strict";var t=a(53),i=a(3),r=a(0),n=(a(1),a(54)),c=a(57),l=r.forwardRef((function(e,o){var a=e.classes,c=e.className,l=e.component,d=void 0===l?"div":l,s=e.square,p=void 0!==s&&s,b=e.elevation,m=void 0===b?1:b,u=e.variant,h=void 0===u?"elevation":u,g=Object(t.a)(e,["classes","className","component","square","elevation","variant"]);return r.createElement(d,Object(i.a)({className:Object(n.a)(a.root,c,"outlined"===h?a.outlined:a["elevation".concat(m)],!p&&a.rounded),ref:o},g))}));o.a=Object(c.a)((function(e){var o={};return e.shadows.forEach((function(e,a){o["elevation".concat(a)]={boxShadow:e}})),Object(i.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},o)}),{name:"MuiPaper"})(l)},183:function(e,o,a){"use strict";a.r(o);var t=a(0),i=a.n(t),r=a(3),n=a(53),c=(a(1),a(54)),l=a(57),d=a(60),s=a(130),p=t.forwardRef((function(e,o){var a=e.classes,i=e.className,l=e.color,p=void 0===l?"primary":l,b=e.position,m=void 0===b?"fixed":b,u=Object(n.a)(e,["classes","className","color","position"]);return t.createElement(s.a,Object(r.a)({square:!0,component:"header",elevation:4,className:Object(c.a)(a.root,a["position".concat(Object(d.a)(m))],a["color".concat(Object(d.a)(p))],i,"fixed"===m&&"mui-fixed"),ref:o},u))})),b=Object(l.a)((function(e){var o="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:o,color:e.palette.getContrastText(o)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(p),m=a(72),u=t.forwardRef((function(e,o){var a=e.classes,i=e.className,l=e.component,d=void 0===l?"div":l,s=e.disableGutters,p=void 0!==s&&s,b=e.variant,m=void 0===b?"regular":b,u=Object(n.a)(e,["classes","className","component","disableGutters","variant"]);return t.createElement(d,Object(r.a)({className:Object(c.a)(a.root,a[m],i,!p&&a.gutters),ref:o},u))})),h=Object(l.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:Object(m.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(u),g=a(97),v=a(8);a(129),o.default=function(){return i.a.createElement(b,{position:"static"},i.a.createElement(h,null,i.a.createElement(g.a,{color:"inherit"},i.a.createElement(v.b,{to:"/",className:"link",exact:!0},"Home")),i.a.createElement(g.a,{color:"inherit"},i.a.createElement(v.b,{to:"/movies",className:"link"},"Search movies")),i.a.createElement(g.a,{color:"inherit"},i.a.createElement(v.b,{to:"/movies/favorite",className:"link"},"Favorite movies"))))}},97:function(e,o,a){"use strict";var t=a(53),i=a(3),r=a(0),n=(a(1),a(54)),c=a(57),l=a(74),d=a(181),s=a(60),p=r.forwardRef((function(e,o){var a=e.children,c=e.classes,l=e.className,p=e.color,b=void 0===p?"default":p,m=e.component,u=void 0===m?"button":m,h=e.disabled,g=void 0!==h&&h,v=e.disableElevation,x=void 0!==v&&v,y=e.disableFocusRipple,f=void 0!==y&&y,S=e.endIcon,k=e.focusVisibleClassName,O=e.fullWidth,j=void 0!==O&&O,C=e.size,z=void 0===C?"medium":C,w=e.startIcon,R=e.type,N=void 0===R?"button":R,E=e.variant,I=void 0===E?"text":E,T=Object(t.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),$=w&&r.createElement("span",{className:Object(n.a)(c.startIcon,c["iconSize".concat(Object(s.a)(z))])},w),L=S&&r.createElement("span",{className:Object(n.a)(c.endIcon,c["iconSize".concat(Object(s.a)(z))])},S);return r.createElement(d.a,Object(i.a)({className:Object(n.a)(c.root,c[I],l,"inherit"===b?c.colorInherit:"default"!==b&&c["".concat(I).concat(Object(s.a)(b))],"medium"!==z&&[c["".concat(I,"Size").concat(Object(s.a)(z))],c["size".concat(Object(s.a)(z))]],x&&c.disableElevation,g&&c.disabled,j&&c.fullWidth),component:u,disabled:g,focusRipple:!f,focusVisibleClassName:Object(n.a)(c.focusVisible,k),ref:o,type:N},T),r.createElement("span",{className:c.label},$,a,L))}));o.a=Object(c.a)((function(e){return{root:Object(i.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(l.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(l.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(l.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(l.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(l.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(l.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(l.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(p)}}]);
//# sourceMappingURL=12.c2430e96.chunk.js.map