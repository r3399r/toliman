(this.webpackJsonptoliman=this.webpackJsonptoliman||[]).push([[34],{109:function(e,t,c){e.exports={content:"Edit_content__1fCKD",q:"Edit_q__jwYtu",ans:"Edit_ans__27WM8",preview:"Edit_preview__Sxhvb",image:"Edit_image__1pbXs"}},129:function(e,t,c){"use strict";c.r(t);var a=c(89),n=c(123),s=c(158),i=c(125),j=c(159),r=c(124),o=c(0),b=c(104),u=c(33),O=c(44),d=c(109),l=c.n(d),h=c(1);t.default=function(){var e=Object(o.useState)(),t=Object(a.a)(e,2),c=t[0],d=t[1],v=Object(o.useState)(!1),x=Object(a.a)(v,2),p=x[0],f=x[1],g=Object(o.useState)(""),_=Object(a.a)(g,2),m=_[0],w=_[1],S=Object(o.useState)(""),C=Object(a.a)(S,2),E=C[0],N=C[1],q=Object(o.useState)(""),J=Object(a.a)(q,2),k=J[0],y=J[1],T=Object(o.useState)(""),I=Object(a.a)(T,2),A=I[0],D=I[1],B=Object(o.useState)(!1),G=Object(a.a)(B,2),K=G[0],M=G[1];Object(o.useEffect)((function(){w(Date.now().toString(16))}),[k,A]),Object(o.useEffect)((function(){f(!0),c&&clearTimeout(c);var e=setTimeout((function(){f(!1)}),600);d(e)}),[k,A]);var W={id:m,chapter:E,question:k,answer:A,hasImage:K};return Object(h.jsxs)("div",{className:l.a.content,children:[Object(h.jsx)("div",{children:"\u4fee\u6539"}),Object(h.jsx)(s.a,{placeholder:"\u8cbc\u4e0aJSON",onChange:function(e){try{var t=e.target.value,c=JSON.parse(t);void 0!==c.question&&void 0!==c.question&&void 0!==c.answer&&void 0!==c.hasImage||n.b.error("\u683c\u5f0f\u4e0d\u7b26"),N(c.chapter),y(c.question),D(c.answer),M(c.hasImage)}catch(a){n.b.error("\u683c\u5f0f\u4e0d\u7b26")}}}),Object(h.jsx)("div",{children:"\u7ae0\u7bc0"}),Object(h.jsx)(i.a.Group,{options:O.b,onChange:function(e){N(e.target.value)},value:E}),Object(h.jsx)("div",{children:"\u984c\u76ee"}),Object(h.jsx)(s.a.TextArea,{rows:4,placeholder:"\u8f38\u5165\u984c\u76ee",onChange:function(e){y(e.target.value)},value:k}),Object(h.jsx)("div",{children:"\u7b54\u6848"}),Object(h.jsx)(s.a.TextArea,{rows:2,placeholder:"\u8f38\u5165\u7b54\u6848",onChange:function(e){D(e.target.value)},value:A}),Object(h.jsx)("div",{children:Object(h.jsx)(j.a,{id:"hasImage",checked:K,onClick:function(){M(!K)},children:"\u662f\u5426\u6709\u5716"})}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{className:l.a.preview,children:[!0===p&&Object(h.jsx)("div",{children:"\u7522\u751f\u4e2d..."}),!1===p&&k&&Object(h.jsx)(u.a,{text:k}),!1===p&&A&&Object(h.jsx)(u.a,{className:l.a.ans,text:"Ans: "+A,allowBlock:!1})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("div",{children:JSON.stringify(W)}),Object(h.jsx)("div",{children:Object(h.jsx)(b.CopyToClipboard,{text:JSON.stringify(W),onCopy:function(){n.b.success("\u5df2\u8907\u88fd")},children:Object(h.jsx)(r.a,{children:"\u8907\u88fd\u6587\u5b57"})})})]})}}}]);
//# sourceMappingURL=34.ab38af6d.chunk.js.map