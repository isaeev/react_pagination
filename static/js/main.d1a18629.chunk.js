(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var c=t(7),n=t.n(c),r=t(6),i=t(1),l=(t(13),t(4)),s=t.n(l),o=t(8);function j(e,a){for(var t=[],c=e;c<=a;c+=1)t.push(c);return t}var u=t(0),d=function(e){var a=e.total,t=e.perPage,c=e.currentPage,n=e.onPageChange,r=j(1,a).map((function(e){return"Item ".concat(e)})),i=j(1,Math.ceil(a/t)),l=function(e,a,t){var c=a*(t-1);return Object(o.a)(e.slice(c,c+a))}(r,t,c),d=function(e){n(e)};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("ul",{className:"pagination",children:[Object(u.jsx)("li",{className:s()("page-item",{disabled:c===i[0]}),children:Object(u.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":c===i[0]?"true":"false",onClick:function(){c>1&&d(c-1)},children:"\xab"})}),i.map((function(e){return Object(u.jsx)("li",{className:s()("page-item",{active:c===e}),children:Object(u.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#{link}",onClick:function(){return d(e)},children:e})},e)})),Object(u.jsx)("li",{className:s()("page-item",{disabled:c===i[i.length-1]}),children:Object(u.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":c===i[i.length-1]?"true":"false",onClick:function(){c<i[i.length-1]&&d(c+1)},children:"\xbb"})})]}),Object(u.jsx)("ul",{children:l.map((function(e){return Object(u.jsx)("li",{"data-cy":"item",children:e},e)}))})]})},h=function(){var e=[3,5,10,20],a=Object(i.useState)(1),t=Object(r.a)(a,2),c=t[0],n=t[1],l=Object(i.useState)(e[1]),s=Object(r.a)(l,2),o=s[0],j=s[1];return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:"Items with Pagination"}),Object(u.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(c," (items ").concat((c-1)*o+1," - ").concat(Math.min(c*o,42)," of ").concat(42,")")}),Object(u.jsxs)("div",{className:"form-group row",children:[Object(u.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(u.jsx)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",onChange:function(e){j(+e.target.value),n(1)},value:o,children:e.map((function(e){return Object(u.jsx)("option",{value:e,children:e},e)}))})}),Object(u.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(u.jsx)(d,{total:42,perPage:o,currentPage:c,onPageChange:function(e){return n(e)}})]})};n.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.d1a18629.chunk.js.map