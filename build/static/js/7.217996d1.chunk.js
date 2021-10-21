(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[7],{106:function(e,t,a){"use strict";var n=a(33),s=a(24),c=a(111),i=a(112),r=function(){function e(){Object(c.a)(this,e)}return Object(i.a)(e,null,[{key:"clear",value:function(){localStorage.clear()}},{key:"remove",value:function(e,t){var a=localStorage.getItem(e);if(a){var n=JSON.parse(a);localStorage.setItem(e,JSON.stringify(n.filter((function(e){return!o(e,t)}))))}}},{key:"create",value:function(e,t){var a=localStorage.getItem(e);if(!a)return localStorage.setItem(e,JSON.stringify([t]));var n=JSON.parse(a);n.push(t),localStorage.setItem(e,JSON.stringify(n))}},{key:"findOne",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=localStorage.getItem(e);if(a){var n=JSON.parse(a);return l(t)?n[0]:n.find((function(e){return o(e,t)}))}}},{key:"find",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=localStorage.getItem(e);if(!a)return[];var n=JSON.parse(a);return l(t)?n:n.filter((function(e){return o(e,t)}))}},{key:"update",value:function(e,t,a){this.remove(e,t);var n=this.findOne(e,t),c=Object(s.a)(Object(s.a)({},n),a);return this.create(e,c)}},{key:"has",value:function(e,t){var a=this.findOne(e,t);return!!a&&!l(a)}}]),e}(),l=function(e){return"{}"===JSON.stringify(e)},o=function(e,t){for(var a=0,s=Object.entries(t),c=0,i=s;c<i.length;c++){var r=Object(n.a)(i[c],2),l=r[0],o=r[1];e[l]===o&&a++}return a===s.length};t.a=r},107:function(e,t,a){"use strict";var n=a(9),s=a.n(n),c=(a(1),a(2));t.a=function(e){return Object(c.jsx)("div",{className:s()("-space-x-2 px-2",e.className),children:Object(c.jsx)("div",{className:"w-full h-32",children:Object(c.jsx)("div",{className:"bg-gray-600 w-full h-full"})})})}},108:function(e,t,a){"use strict";var n=a(9),s=a.n(n),c=(a(1),a(22)),i=a(11),r=a(38),l=a(2);t.a=function(e){var t;return Object(l.jsxs)(i.b,{to:"/info/".concat(e.slug),children:[Object(l.jsxs)("div",{className:s()("relative shadow-lg group",e.className),children:[Object(l.jsx)(r.a,{src:e.thumbnail,alt:e.name,className:s()("w-full h-32 object-cover rounded-md rounded-b-none")}),Object(l.jsx)("div",{className:"absolute inset-0 invisible group-hover:visible bg-black bg-opacity-60 flex items-center justify-center",children:Object(l.jsx)(c.c,{size:50,className:"text-white"})}),Object(l.jsx)("div",{className:"px-2 py-1 absolute top-2 left-2 max-w-24 bg-black rounded-md bg-opacity-80",children:Object(l.jsx)("p",{className:"text-white text-xs line-clamp-1",children:e.time||(null===(t=e.latestEpisode)||void 0===t?void 0:t.name)})})]}),Object(l.jsx)("div",{className:s()("bg-background-darker p-3 w-full space-y-2 rounded-b-md min-h-4"),children:Object(l.jsx)("p",{className:"uppercase text-white font-medium text-sm line-clamp-2",children:e.name})})]})}},138:function(e,t,a){},162:function(e,t,a){"use strict";a.r(t);var n=a(24),s=a(1),c=a.n(s),i=a(106),r=a(11),l=a(33),o=a(107),u=a(108),d=a(122),b=a.n(d),j=a(105),m=a(9),f=a.n(m),h=a(2);function v(e){var t=e.onClick;return Object(h.jsx)("div",{className:f()("bg-black absolute -right-6 transform -translate-y-1/2 top-1/2 p-3 cursor-pointer z-10"),style:{borderRadius:"50%"},onClick:t,children:Object(h.jsx)(j.c,{size:20,className:"text-white"})})}function x(e){var t=e.onClick;return Object(h.jsx)("div",{className:f()("bg-black absolute -left-6 transform -translate-y-1/2 top-1/2 p-3 cursor-pointer z-10"),style:{borderRadius:"50%"},onClick:t,children:Object(h.jsx)(j.b,{size:20,className:"text-white"})})}var O={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,nextArrow:Object(h.jsx)(v,{}),prevArrow:Object(h.jsx)(x,{})},g=function(e){var t=Object(s.useState)(!1),a=Object(l.a)(t,2),i=a[0],r=a[1],o=Object(s.useCallback)((function(){r(!0)}),[r]),u=Object(s.useCallback)((function(e){i&&(e.stopPropagation(),e.preventDefault(),r(!1))}),[i]),d=Object(n.a)(Object(n.a)({},O),e.settings);return Object(h.jsx)(b.a,Object(n.a)(Object(n.a)({onSwipe:o},d),{},{children:c.a.Children.map(e.children,(function(e){return Object(h.jsx)("div",{onClickCapture:u,children:e})}))}))},p=a(40),N=(a(138),{slidesToShow:5,slidesToScroll:5,infinite:!1,dots:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}}]}),y=function(e){var t=e.data,a=void 0===t?[]:t,c=e.settings,i=e.isLoading,r=Object(n.a)(Object(n.a)({},N),c),d=Object(s.useState)(r.slidesToScroll),b=Object(l.a)(d,2),j=b[0],m=b[1];return Object(s.useEffect)((function(){var e=function(){var e=window.innerWidth,t=r.responsive,a=r.slidesToScroll;e>t[0].breakpoint&&m(a);for(var n=1;n<=r.responsive.length;n++){var s=t[t.length-n];if(e<=s.breakpoint){var c=s.settings;m(c.slidesToShow);break}}};window.addEventListener("resize",e),e()}),[]),i?Object(h.jsx)(p.a,{className:"flex flex-wrap",children:new Array(j).fill(null).map((function(e,t){return Object(h.jsx)(o.a,{className:"w-1/".concat(j)},t)}))}):a.length?Object(h.jsx)(g,{settings:r,children:a.map((function(e){return Object(s.createElement)(u.a,Object(n.a)(Object(n.a)({},e),{},{key:e.slug}))}))}):Object(h.jsx)("div",{className:"w-full h-full flex items-center justify-center",children:Object(h.jsx)("p",{className:"text-gray-300 text-base ",children:"Kh\xf4ng c\xf3"})})},w=a(159),k=a(39),S=function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return Object(w.a)([{category:e,slug:t}],(function(){return Object(k.b)({category:e,slug:t})}),{enabled:a})},C=function(e){var t=e.title,a=e.to,n=e.category,s=void 0===n?"":n,c=e.slug,i=void 0===c?"":c,l=e.data,o=S(s,i,!Array.isArray(l)),u=o.data,d=o.isLoading;return Object(h.jsxs)("div",{className:"mt-6",children:[Object(h.jsxs)("div",{className:"flex items-baseline justify-between space-x-2 text-white mb-3",children:[Object(h.jsx)("h1",{className:"text-2xl font-medium",children:t}),a&&Object(h.jsx)(r.b,{to:a,children:Object(h.jsx)("h1",{className:"text-base text-gray-400 hover:text-secondary transition duration-300",children:"Xem t\u1ea5t c\u1ea3"})})]}),Object(h.jsx)(y,{data:l||(null===u||void 0===u?void 0:u.data),isLoading:d})]})},T=a(46),J=a(38),z=function(e){var t=e.iconSize,a=void 0===t?16:t,n=e.icon,s=e.className,c=e.iconClassName,i=e.textClassName,r=e.text;return Object(h.jsxs)("div",{className:f()("flex items-center",s),children:[Object(h.jsx)(n,{size:a,className:c}),Object(h.jsx)("p",{className:f()("line-clamp-1",i),children:r})]})},I=function(e){return Object(h.jsx)(r.b,{to:"/info/".concat(e.slug),children:Object(h.jsxs)("div",{className:"relative h-80",children:[Object(h.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent rounded-md to-black bg-opacity-80",children:Object(h.jsxs)("div",{className:"absolute bottom-0 w-2/3 space-y-2 p-6",children:[Object(h.jsx)("h1",{className:"text-white text-3xl line-clamp-2 font-medium",children:e.name}),Object(h.jsx)("div",{className:"flex items-center",children:Object(h.jsx)(z,{icon:T.b,iconClassName:"text-gray-400 mr-1",text:e.views.toString(),textClassName:"text-white text-sm"})})]})}),Object(h.jsx)(J.a,{src:e.thumbnail,alt:e.name,className:"rounded-md w-full h-full object-cover"})]})})},E=function(){return Object(w.a)("slides",k.c)},A=function(){var e=E(),t=e.data;return e.isLoading?Object(h.jsx)(p.a,{className:"w-full h-80",children:Object(h.jsx)("div",{className:"bg-gray-600 h-full w-full"})}):Object(h.jsx)(g,{children:null===t||void 0===t?void 0:t.map((function(e){return Object(s.createElement)(I,Object(n.a)(Object(n.a)({},e),{},{key:e.slug}))}))})},L=[{title:"Xem g\u1ea7n \u0111\xe2y",data:i.a.find("recent").reverse()},{title:"M\u1edbi c\u1eadp nh\u1eadt",category:"recently"},{category:"recommended",title:"H\xf4m nay xem g\xec?"},{category:"ranking",slug:"ngay",title:"Xem nhi\u1ec1u trong ng\xe0y"}];t.default=function(){return Object(h.jsxs)("div",{className:"px-8 py-20 lg:px-20 lg:py-24 w-full h-full space-y-6",children:[Object(h.jsx)("div",{className:"hidden md:block",children:Object(h.jsx)(A,{})}),Object(h.jsx)("div",{className:"space-y-6",children:L.map((function(e,t){return Object(s.createElement)(C,Object(n.a)(Object(n.a)({},e),{},{key:t}))}))})]})}}}]);
//# sourceMappingURL=7.217996d1.chunk.js.map