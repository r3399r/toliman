(this.webpackJsonptoliman=this.webpackJsonptoliman||[]).push([[43],{134:function(e,t,n){e.exports={content:"Bank_content__3PHIH",id:"Bank_id__Kj0Tj",ans:"Bank_ans__1tTlP",img:"Bank_img__1W1Ul"}},139:function(e,t,n){"use strict";var a=n(48),r=n(3),o=n(0),c=n(69),i=n(32),u=n.n(i),l=n(64),s=n(92),d=o.createContext(null),f=d.Provider,p=d,b=n(63),v=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},y=function(e,t){var n,i=o.useContext(p),d=o.useContext(s.b),f=d.getPrefixCls,y=d.direction,h=o.useRef(),m=Object(l.a)(t,h);o.useEffect((function(){Object(b.a)(!("optionType"in e),"Radio","`optionType` is only support in Radio.Group.")}),[]);var j=e.prefixCls,O=e.className,g=e.children,x=e.style,C=v(e,["prefixCls","className","children","style"]),k=f("radio",j),w=Object(r.a)({},C);i&&(w.name=i.name,w.onChange=function(t){var n,a;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(a=null===i||void 0===i?void 0:i.onChange)||void 0===a||a.call(i,t)},w.checked=e.value===i.value,w.disabled=e.disabled||i.disabled);var E=u()("".concat(k,"-wrapper"),(n={},Object(a.a)(n,"".concat(k,"-wrapper-checked"),w.checked),Object(a.a)(n,"".concat(k,"-wrapper-disabled"),w.disabled),Object(a.a)(n,"".concat(k,"-wrapper-rtl"),"rtl"===y),n),O);return o.createElement("label",{className:E,style:x,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},o.createElement(c.a,Object(r.a)({},w,{type:"radio",prefixCls:k,ref:m})),void 0!==g?o.createElement("span",null,g):null)},h=o.forwardRef(y);h.displayName="Radio";var m=h,j=n(50),O=n(68),g=n(60);var x=o.forwardRef((function(e,t){var n=o.useContext(s.b),c=n.getPrefixCls,i=n.direction,l=o.useContext(g.b),d=Object(O.a)(e.defaultValue,{value:e.value}),p=Object(j.a)(d,2),b=p[0],v=p[1];return o.createElement(f,{value:{onChange:function(t){var n=b,a=t.target.value;"value"in e||v(a);var r=e.onChange;r&&a!==n&&r(t)},value:b,disabled:e.disabled,name:e.name}},function(){var n,s=e.prefixCls,d=e.className,f=void 0===d?"":d,p=e.options,v=e.optionType,y=e.buttonStyle,h=void 0===y?"outline":y,j=e.disabled,O=e.children,g=e.size,x=e.style,C=e.id,k=e.onMouseEnter,w=e.onMouseLeave,E=c("radio",s),P="".concat(E,"-group"),_=O;if(p&&p.length>0){var N="button"===v?"".concat(E,"-button"):E;_=p.map((function(e){return"string"===typeof e?o.createElement(m,{key:e,prefixCls:N,disabled:j,value:e,checked:b===e},e):o.createElement(m,{key:"radio-group-value-options-".concat(e.value),prefixCls:N,disabled:e.disabled||j,value:e.value,checked:b===e.value,style:e.style},e.label)}))}var S=g||l,K=u()(P,"".concat(P,"-").concat(h),(n={},Object(a.a)(n,"".concat(P,"-").concat(S),S),Object(a.a)(n,"".concat(P,"-rtl"),"rtl"===i),n),f);return o.createElement("div",Object(r.a)({},function(e){return Object.keys(e).reduce((function(t,n){return"data-"!==n.substr(0,5)&&"aria-"!==n.substr(0,5)&&"role"!==n||"data-__"===n.substr(0,7)||(t[n]=e[n]),t}),{})}(e),{className:K,style:x,onMouseEnter:k,onMouseLeave:w,id:C,ref:t}),_)}())})),C=o.memo(x),k=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},w=function(e,t){var n=o.useContext(p),a=o.useContext(s.b).getPrefixCls,c=e.prefixCls,i=k(e,["prefixCls"]),u=a("radio-button",c);return n&&(i.checked=e.value===n.value,i.disabled=e.disabled||n.disabled),o.createElement(m,Object(r.a)({prefixCls:u},i,{type:"radio",ref:t}))},E=o.forwardRef(w),P=m;P.Button=E,P.Group=C;t.a=P},146:function(e,t,n){"use strict";n.r(t);var a=n(90),r=n(139),o=n(44),c=n.n(o),i=n(0),u=n(88),l=n(33),s=n(43),d=n(134),f=n.n(d),p=n(1);t.default=function(){var e=Object(i.useState)(),t=Object(a.a)(e,2),n=t[0],o=t[1],d=function(e){e.target.src="/toliman/images/09.PNG"};return Object(p.jsxs)("div",{className:f.a.content,children:[Object(p.jsx)(r.a.Group,{options:s.b,onChange:function(e){o(c.a.filter(s.a,{chapter:e.target.value}))}}),n&&Object(p.jsx)(u.a,{children:n.map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:f.a.id,children:["id: ",e.id,", \u7ae0\u7bc0: ",e.chapter]}),!0===e.hasImage&&Object(p.jsx)("img",{className:f.a.img,src:"/toliman/images/".concat(e.id,".PNG"),alt:"",role:"presentation",onError:d}),Object(p.jsx)(l.a,{text:e.question}),Object(p.jsx)(l.a,{text:"Ans: ".concat(e.answer),className:f.a.ans})]},e.id)}))})]})}},35:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},68:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(50),r=n(0);function o(e,t){var n=t||{},o=n.defaultValue,c=n.value,i=n.onChange,u=n.postState,l=r.useState((function(){return void 0!==c?c:void 0!==o?"function"===typeof o?o():o:"function"===typeof e?e():e})),s=Object(a.a)(l,2),d=s[0],f=s[1],p=void 0!==c?c:d;u&&(p=u(p));var b=r.useRef(i);b.current=i;var v=r.useCallback((function(e){f(e),p!==e&&b.current&&b.current(e,p)}),[p,b]),y=r.useRef(!0);return r.useEffect((function(){y.current?y.current=!1:void 0===c&&f(c)}),[c]),[p,v]}},69:function(e,t,n){"use strict";var a=n(3),r=n(48),o=n(59),c=n(47),i=n(51),u=n(52),l=n(53),s=n(54),d=n(0),f=n.n(d),p=n(32),b=n.n(p),v=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(e){var a;Object(i.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,r=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),r&&r({target:Object(c.a)(Object(c.a)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var r="checked"in e?e.checked:e.defaultChecked;return a.state={checked:r},a}return Object(u.a)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,c=t.className,i=t.style,u=t.name,l=t.id,s=t.type,d=t.disabled,p=t.readOnly,v=t.tabIndex,y=t.onClick,h=t.onFocus,m=t.onBlur,j=t.onKeyDown,O=t.onKeyPress,g=t.onKeyUp,x=t.autoFocus,C=t.value,k=t.required,w=Object(o.a)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),E=Object.keys(w).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=w[t]),e}),{}),P=this.state.checked,_=b()(n,c,(e={},Object(r.a)(e,"".concat(n,"-checked"),P),Object(r.a)(e,"".concat(n,"-disabled"),d),e));return f.a.createElement("span",{className:_,style:i},f.a.createElement("input",Object(a.a)({name:u,id:l,type:s,required:k,readOnly:p,disabled:d,tabIndex:v,className:"".concat(n,"-input"),checked:!!P,onClick:y,onFocus:h,onBlur:m,onKeyUp:g,onKeyDown:j,onKeyPress:O,onChange:this.handleChange,autoFocus:x,ref:this.saveInput,value:C},E)),f.a.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?Object(c.a)(Object(c.a)({},t),{},{checked:e.checked}):null}}]),n}(d.Component);v.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},t.a=v},88:function(e,t,n){"use strict";var a=n(35),r=n(32),o=n.n(r),c=n(89),i=n.n(c),u=n(1);t.a=function(e){var t=e.children;return Object(u.jsx)("div",{className:i.a.grid,children:t.map((function(e,t){return Object(u.jsx)("div",{className:o()(i.a.card,Object(a.a)({},i.a.left,t%2===0)),children:e},t)}))})}},89:function(e,t,n){e.exports={grid:"GridWith2Col_grid__zLYRh",left:"GridWith2Col_left__27tqY",card:"GridWith2Col_card__JkVrM"}},90:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(u){r=!0,o=u}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=43.40e72f44.chunk.js.map