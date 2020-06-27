(this["webpackJsonpe-commerce-react"]=this["webpackJsonpe-commerce-react"]||[]).push([[0],{50:function(e,n,t){e.exports=t(84)},55:function(e,n,t){},61:function(e,n,t){},63:function(e,n,t){},64:function(e,n,t){},66:function(e,n,t){},67:function(e,n,t){},77:function(e,n,t){},78:function(e,n,t){},79:function(e,n,t){},80:function(e,n,t){},81:function(e,n,t){},84:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(17),c=t.n(i),l=(t(55),t(13)),o=t.n(l),u=t(2),s=t(18),m=t(8),d=t(5),p=(t(61),t(3)),b=t(4);function f(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 75px 5% 0;\n  max-width: 1200px;\n  margin: auto;\n\n  @media all and (min-width: 768px) {\n    padding: 80px 80px 0;\n  }\n"]);return f=function(){return e},e}var g=b.a.div(f());function h(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return h=function(){return e},e}var v=Object(b.a)(g)(h()),E=t(19),O=t(6),y=(t(63),t(64),Object(m.g)((function(e){var n=e.title,t=e.imageUrl,a=e.size,i=e.linkUrl,c=e.history,l=e.match;return r.a.createElement("div",{className:"menu-item ".concat(a),onClick:function(){c.push("".concat(l.url).concat(i))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(t,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},n.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))),j=Object(O.a)([function(e){return e.directory}],(function(e){return e.sections})),w=Object(O.b)({sections:j}),k=Object(d.b)(w)((function(e){var n=e.sections;return r.a.createElement("div",{className:"directory-menu"},n.map((function(e){var n=e.id,t=Object(E.a)(e,["id"]);return r.a.createElement(y,Object.assign({key:n},t))})))})),x=function(){return r.a.createElement(v,null,r.a.createElement(k,null))},N=Object(O.a)([function(e){return e.shop}],(function(e){return e.collections}));t(66),t(67);function U(){var e=Object(p.a)(['\n  min-width: 165px;\n  width: auto;\n  margin: 5px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 10px;\n  font-size: 15px;\n  background-color: black;\n  color: white;\n  text-transform: uppercase;\n  font-family: "Open Sans Condensed";\n  font-weight: bolder;\n  border: 1px solid transparent;\n  cursor: pointer;\n  transition: all 0.3s ease-out;\n  display: flex;\n  justify-content: center;\n\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n  &.google-sign-in {\n    background-color: #4285f4;\n    color: white;\n    border-color: #4285f4;\n    &:hover {\n      background-color: #1f6de8;\n      color: white;\n      border-color: #1f6de8;\n    }\n  }\n\n  &.inverted {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n\n    &:hover {\n      background-color: black;\n      color: white;\n      border: none;\n    }\n  }\n  &.disabled,\n  &.disabled:hover,\n  &:disabled,\n  &:disabled:hover {\n    background-color: grey;\n    color: white;\n    border-color: grey;\n    cursor: not-allowed;\n  }\n']);return U=function(){return e},e}var I=b.a.button(U()),C=function(e){var n=e.children,t=(e.handleClick,Object(E.a)(e,["children","handleClick"])),a=["custom-button"],i=t.classes;return a=i&&i.length?a.concat(i):a,r.a.createElement(I,Object.assign({className:a.join(" ")},t),n)},S=function(e){return{type:"ADD_ITEM",payload:e}},T=Object(d.b)(null,(function(e){return{addItem:function(n){return e(S(n))}}}))((function(e){var n=e.item,t=e.addItem,a=n.imageUrl,i=n.name,c=n.price;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(a,")")}},r.a.createElement(C,{classes:"inverted",onClick:function(e){return t(n)}},"Add to cart")),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},i),r.a.createElement("span",{className:"price"},"$",c)))})),H=function(e){var n=e.title,t=(e.routeName,e.items);return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},n.toUpperCase()),r.a.createElement("div",{className:"preview"},t.filter((function(e,n){return n<4})).map((function(e){return r.a.createElement(T,{key:e.id,item:e})}))))},A=Object(O.b)({collections:N}),R=Object(d.b)(A)((function(e){var n=e.collections;return r.a.createElement("div",{className:"collections"},Object.values(n).map((function(e){var n=e.id,t=Object(E.a)(e,["id"]);return r.a.createElement(H,Object.assign({key:n},t))})))}));function D(){var e=Object(p.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return D=function(){return e},e}function P(){var e=Object(p.a)(["\n  font-size: 38px;\n  margin: 0 auto 30px;\n"]);return P=function(){return e},e}var B=b.a.h2(P()),L=b.a.div(D()),_=Object(d.b)((function(e,n){return{collection:(t=n.match.params.collectionId,Object(O.a)([N],(function(e){return e[t]})))(e)};var t}))((function(e){var n=e.collection;return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null,n.title),r.a.createElement(L,null,n.items.map((function(e){return r.a.createElement(T,{key:e.id,item:e})}))))})),G=function(e){var n=e.match;return r.a.createElement(g,null,r.a.createElement(m.b,{path:"".concat(n.path),exact:!0,component:R}),r.a.createElement(m.b,{path:"".concat(n.path,"/:collectionId"),component:_}))},M=t(21),z=t(85);function q(){var e=Object(p.a)(["\n  span {\n    color: #a5a3a3;\n  }\n"]);return q=function(){return e},e}function W(){var e=Object(p.a)(["\n  overflow-x: hidden;\n  > button {\n    display: block;\n    margin: 1rem auto;\n    color: #4285f4;\n    border: none;\n    background-color: transparent;\n    &:hover,\n    &:active,\n    &:focus {\n      background-color: transparent;\n      color: #4285f4;\n      border: none;\n      outline: none;\n    }\n  }\n"]);return W=function(){return e},e}var F=Object(b.a)(g)(W()),V=b.a.div(q()),J=t(25),K=t.n(J),Q=(t(71),t(75),function(){var e=Object(s.a)(o.a.mark((function e(n){var t,a,r,i,c,l=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=l.length>1&&void 0!==l[1]?l[1]:{},n){e.next=3;break}return e.abrupt("return");case 3:return a=X.doc("users/".concat(n.uid)),e.next=6,a.get();case 6:if(e.sent.exists){e.next=18;break}return r=n.displayName,i=n.email,c=(new Date).getTime(),e.prev=10,e.next=13,a.set(Object(u.a)({displayName:r,email:i,createdAt:c},t));case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(10),console.log("Error creating user: "+e.t0.message);case 18:return e.abrupt("return",a);case 19:case"end":return e.stop()}}),e,null,[[10,15]])})));return function(n){return e.apply(this,arguments)}}());K.a.initializeApp({apiKey:"AIzaSyD5D-aKxbZYPbALDsdDwolqwRZ2SFW0bPw",authDomain:"e-commerce-react-4ee4d.firebaseapp.com",databaseURL:"https://e-commerce-react-4ee4d.firebaseio.com",projectId:"e-commerce-react-4ee4d",storageBucket:"e-commerce-react-4ee4d.appspot.com",messagingSenderId:"1051492961569",appId:"1:1051492961569:web:564a25d821f2b127a70260",measurementId:"G-ED3VZNZVW7"});var Y=K.a.auth(),X=K.a.firestore(),Z=new K.a.auth.GoogleAuthProvider;Z.setCustomParameters({prompt:"select_account"});K.a;var $=t(27),ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,r=Object(a.useState)(e),i=Object(M.a)(r,2),c=i[0],l=i[1],o=Object(a.useState)({}),s=Object(M.a)(o,2),m=s[0],d=s[1],p=Object(a.useState)(!1),b=Object(M.a)(p,2),f=b[0],g=b[1];Object(a.useEffect)((function(){0===Object.keys(m).length&&f&&(g(!1),t(c))}),[m,f,t,c]);var h=function(t){t&&t.preventDefault(),g(!0),d(n(c,e))},v=function(e){e.persist();var n=e.target,t=n.value,a=n.name,r=Object(u.a)(Object(u.a)({},c[a]),{},{value:t});l((function(e){return Object(u.a)(Object(u.a)({},e),{},Object($.a)({},a,Object(u.a)({},r)))}))};return{errors:m,values:c,setErrors:d,handleSubmit:h,handleInputChange:v}};t(77);function ne(){var e=Object(p.a)(["\n  display: inline-block;\n  color: red;\n  font-size: 1rem;\n"]);return ne=function(){return e},e}var te=b.a.span(ne()),ae=r.a.memo((function(e){var n=e.message;return n?r.a.createElement(te,null,n):null})),re=function(e){var n=e.handleChange,t=e.error,a=e.label,i=Object(E.a)(e,["handleChange","error","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input ".concat(t?"error":"")},i,{onChange:n})),a?r.a.createElement("label",{className:"".concat(i.value?"shrink":""," form-input-label")},a):null,r.a.createElement(ae,{message:t}))},ie=function(e){return{type:"AUTH_ERROR",payload:e}},ce=function(e){return e.user},le=Object(O.a)([ce],(function(e){return e.currentUser})),oe=Object(O.a)([ce],(function(e){return e.loading})),ue=Object(O.a)([ce],(function(e){return e.errors}));function se(){var e=Object(p.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin: 0 -5px;\n"]);return se=function(){return e},e}function me(){var e=Object(p.a)(["\n  width: 100%;\n  max-width: 380px;\n  transition: all 0.3s ease-out;\n  position: relative;\n  margin: auto;\n  text-align: center;\n  &.display-enter {\n    opacity: 0;\n    transform: translateX(-1000px);\n  }\n  &.display-enter-active {\n    opacity: 1;\n    transform: translateX(0);\n  }\n"]);return me=function(){return e},e}var de=b.a.div(me()),pe=b.a.div(se()),be=Object(O.b)({currentUser:le,loading:oe,authErrors:ue}),fe=Object(d.b)(be,(function(e){return{authStartHandler:function(){return e({type:"AUTH_START"})},authErrorHandler:function(n){return e(ie(n))}}}))((function(e){var n=e.initFormData,t=e.validateForm,a=e.currentUser,i=e.authStartHandler,c=e.authErrorHandler,l=e.loading,u=e.authErrors,d=ee(n,t,function(){var e=Object(s.a)(o.a.mark((function e(n){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(),t=n.email,a=n.password,e.prev=2,e.next=5,Y.signInWithEmailAndPassword(t.value,a.value);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),c(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(n){return e.apply(this,arguments)}}()),p=d.errors,b=d.values,f=d.handleSubmit,g=d.handleInputChange;return r.a.createElement(de,null,a?r.a.createElement(m.a,{to:"/"}):null,r.a.createElement("h2",null,"I already have an account"),r.a.createElement("p",null,"Sign in with your email end password."),r.a.createElement("form",{action:"",onSubmit:function(e){return e.preventDefault()},noValidate:!0},Object.keys(b).map((function(e){var n=b[e];return r.a.createElement(re,{key:e,type:n.type,label:n.label,name:e,value:n.value,error:p[e]||"",handleChange:g})})),r.a.createElement(pe,null,r.a.createElement(C,{type:"submit",disabled:l,onClick:function(e){e.preventDefault(),l||f()}},"SIGN IN"),r.a.createElement(C,{type:"submit",disabled:l,onClick:function(e){e.preventDefault(),l||(i(),Y.signInWithPopup(Z))},classes:["google-sign-in"]},"SIGN IN WITH GOOGLE"))),r.a.createElement(ae,{message:u||""}))})),ge=Object(O.b)({currentUser:le,loading:oe,authErrors:ue}),he=Object(d.b)(ge,(function(e){return{authStartHandler:function(){return e({type:"AUTH_START"})},authErrorHandler:function(n){return e(ie(n))}}}))((function(e){var n=e.initFormData,t=e.validateForm,a=e.currentUser,i=e.authStartHandler,c=e.authErrorHandler,l=e.loading,u=e.authErrors,d=ee(n,t,function(){var e=Object(s.a)(o.a.mark((function e(n){var t,a,r,l,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(),t=n.email,a=n.password,r=n.displayName,e.prev=2,e.next=5,Y.createUserWithEmailAndPassword(t.value,a.value);case 5:return l=e.sent,u=l.user,e.next=9,Q(u,{displayName:r.value});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),c(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(n){return e.apply(this,arguments)}}()),p=d.errors,b=d.values,f=d.handleSubmit,g=d.handleInputChange;return r.a.createElement(de,null,a?r.a.createElement(m.a,{to:"/"}):null,r.a.createElement("h2",null,"I do not have an account"),r.a.createElement("p",null,"Sign up with your email end password."),r.a.createElement("form",{action:"",onSubmit:function(e){return e.preventDefault()},noValidate:!0},Object.keys(b).map((function(e){var n=b[e];return r.a.createElement(re,{key:e,type:n.type,label:n.label,name:e,value:n.value,error:p[e]||"",handleChange:g})})),r.a.createElement(pe,null,r.a.createElement(C,{type:"submit",disabled:l,onClick:function(e){e.preventDefault(),l||f()}},"SIGN UP"))),r.a.createElement(ae,{message:u||""}))})),ve={email:{type:"email",label:"Email",validation:{required:!0,isEmail:!0},value:""},password:{type:"password",label:"Password",validation:{required:!0,minLength:6},value:""}},Ee={displayName:{type:"text",label:"Display Name",validation:{required:!0},value:""},email:{type:"email",label:"Email",validation:{required:!0,isEmail:!0},value:""},password:{type:"password",label:"Password",validation:{required:!0,minLength:6},value:""},confirmPassword:{type:"password",label:"Confirm Password",validation:{required:!0,confirmPassword:!0},value:""}},Oe=t(48),ye=function(e,n){return e&&e.trim().length>=n},je=function(e){return e&&e.length>0},we=function(e,n){return e===n},ke=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n={};for(var t in e){var a=e[t],r=a.validation,i=a.value,c=a.label;if(r.required&&!je(i))n[t]=c+" is required";else if(r.isEmail&&!ke(i))n[t]="Email address is invalid";else if(r.minLength&&!ye(i,r.minLength))n[t]="Min length is "+r.minLength+" signes";else if(r.confirmPassword){var l=e.password.value;we(i,l)||(n[t]="Passwords do not match.")}}return n},Ne=function(e,n){return e.find((function(e){return e.id===n.id}))?e.map((function(e){return e.id===n.id?Object(u.a)(Object(u.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(Oe.a)(e),[Object(u.a)(Object(u.a)({},n),{},{quantity:1})])},Ue=function(e,n){return 1===n.quantity?Ie(e,n):e.map((function(e){return e.id===n.id?Object(u.a)(Object(u.a)({},e),{},{quantity:e.quantity-1}):e}))},Ie=function(e,n){return e.filter((function(e){return e.id!==n.id}))},Ce=Object(d.b)(null,(function(e){return{clearAuthErrorHandler:function(){return e({type:"CLEAR_AUTH_ERROR"})}}}))((function(e){var n=e.clearAuthErrorHandler,t=Object(a.useState)(!1),i=Object(M.a)(t,2),c=i[0],l=i[1],o={timeout:300,classNames:"display",exit:!1,unmountOnExit:!0};return r.a.createElement(F,null,r.a.createElement(C,{onClick:function(e){e.preventDefault(),n(),l((function(e){return!e}))}},r.a.createElement(V,null,c?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"SING\xa0IN"),"\xa0/\xa0SING\xa0UP"):r.a.createElement(r.a.Fragment,null,"SING\xa0IN\xa0/\xa0",r.a.createElement("span",null,"SING\xa0UP")))),r.a.createElement(z.a,Object.assign({in:c},o),r.a.createElement(he,{initFormData:Ee,validateForm:xe})),r.a.createElement(z.a,Object.assign({in:!c},o),r.a.createElement(fe,{initFormData:ve,validateForm:xe})))}));function Se(){var e=Object(p.a)(["\n  margin: auto;\n  max-width: 1200px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 15px 5%;\n  position: relative;\n  @media all and (min-width: 768px) {\n    padding: 13px 80px;\n  }\n"]);return Se=function(){return e},e}function Te(){var e=Object(p.a)(["\n  width: 100%;\n  background: white;\n  left: 0;\n  top: 0;\n  position: absolute;\n  z-index: 100;\n  box-shadow: 0px 0 20px rgba(0, 0, 0, 0.2);\n  position: fixed;\n"]);return Te=function(){return e},e}var He=b.a.header(Te()),Ae=b.a.div(Se());function Re(){return(Re=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function De(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var Pe=r.a.createElement("g",null),Be=r.a.createElement("g",null),Le=r.a.createElement("g",null),_e=r.a.createElement("g",null),Ge=r.a.createElement("g",null),Me=r.a.createElement("g",null),ze=r.a.createElement("g",null),qe=r.a.createElement("g",null),We=r.a.createElement("g",null),Fe=r.a.createElement("g",null),Ve=r.a.createElement("g",null),Je=r.a.createElement("g",null),Ke=r.a.createElement("g",null),Qe=r.a.createElement("g",null),Ye=r.a.createElement("g",null),Xe=function(e){var n=e.svgRef,t=e.title,a=De(e,["svgRef","title"]);return r.a.createElement("svg",Re({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:n},a),t?r.a.createElement("title",null,t):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Pe,Be,Le,_e,Ge,Me,ze,qe,We,Fe,Ve,Je,Ke,Qe,Ye)},Ze=r.a.forwardRef((function(e,n){return r.a.createElement(Xe,Re({svgRef:n},e))})),$e=(t.p,t(78),function(e){return e.cart}),en=Object(O.a)([$e],(function(e){return e.cartItems})),nn=Object(O.a)([$e],(function(e){return e.cartHidden})),tn=Object(O.a)([en],(function(e){return e.reduce((function(e,n){return e+n.quantity}),0)})),an=Object(O.a)([en],(function(e){return e.reduce((function(e,n){return e+n.quantity*n.price}),0)})),rn=Object(O.b)({cartItemsSum:tn}),cn=r.a.memo(Object(d.b)(rn,(function(e){return{toggleCarHandler:function(){return e({type:"TOGGLE_CART_HIDDEN"})}}}))((function(e){var n=e.toggleCarHandler,t=e.cartItemsSum;return r.a.createElement("div",{className:"cart-icon",onClick:n},r.a.createElement(Ze,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},t))}))),ln=(t(79),t(80),function(e){var n=e.item,t=n.imageUrl,a=n.price,i=n.name,c=n.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:t,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("div",{className:"name"},i),r.a.createElement("div",{className:"price"},c,"\xa0x\xa0$",a)))}),on=Object(O.b)({cartItems:en}),un=Object(m.g)(Object(d.b)(on,(function(e){return{toggleCarHandler:function(){return e({type:"TOGGLE_CART_HIDDEN"})}}}))((function(e){var n=e.cartItems,t=e.toggleCarHandler,a=e.history;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},n&&n.length?n.map((function(e){return r.a.createElement(ln,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-message"},"Your cart is empty")),r.a.createElement(C,{classes:n&&n.length?[]:["disabled"],onClick:function(){t(),n&&n.length&&a.push("/checkout")}},"GO TO CHECKOUT"))}))),sn=function(e){return function(n){return function(t){return r.a.createElement(z.a,e,r.a.createElement(n,t))}}},mn=t(11);function dn(){var e=Object(p.a)(["\nmargin-right: auto;\n"]);return dn=function(){return e},e}function pn(){var e=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  flex: 1;\n"]);return pn=function(){return e},e}var bn=b.a.nav(pn()),fn=Object(b.a)(mn.b)(dn());function gn(){return(gn=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function hn(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var vn=r.a.createElement("title",null,"Group"),En=r.a.createElement("desc",null,"Created with Sketch."),On=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),yn=function(e){var n=e.svgRef,t=e.title,a=hn(e,["svgRef","title"]);return r.a.createElement("svg",gn({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:n},a),void 0===t?vn:t?r.a.createElement("title",null,t):null,En,On)},jn=r.a.forwardRef((function(e,n){return r.a.createElement(yn,gn({svgRef:n},e))}));t.p;function wn(){var e=Object(p.a)(['\n  width: 100%;\n  padding: 10px 15px;\n  font-weight: bold;\n  position: relative;\n  color: #a5a3a3;\n  border-bottom: 1px solid #a5a3a3;\n  cursor: pointer;\n  text-align: center;\n  &:hover,\n  &.active {\n    color: black;\n  }\n  @media all and (min-width: 481px) {\n    border: none;\n    width: auto;\n    &:after {\n      content: "";\n      width: 0;\n      height: 2px;\n      position: absolute;\n      bottom: 5px;\n      left: 50%;\n      background-color: #bebebe;\n      transition: all 0.3s ease-out;\n      visibility: hidden;\n    }\n    &:hover,\n    &.active {\n      &:after {\n        left: 12%;\n        width: 76%;\n        visibility: visible;\n      }\n    }\n  }\n']);return wn=function(){return e},e}function kn(){var e=Object(p.a)(["\n  margin-right: auto;\n"]);return kn=function(){return e},e}function xn(){var e=Object(p.a)(["\n  display: ",";\n  width: 100%;\n  position: absolute;\n  top: 76px;\n  left: 0;\n  flex-direction: column;\n  background-color: white;\n  border-top: 1px solid #a5a3a3;\n  overflow: hidden;\n\n  @media all and (min-width: 481px) {\n    display: flex;\n    width: auto;\n    flex-direction: row;\n    align-items: center;\n    border: none;\n    position: static;\n  }\n"]);return xn=function(){return e},e}var Nn=b.a.div(xn(),(function(e){return e.isActive?"flex":"none"})),Un=(Object(b.a)(mn.c)(kn()),Object(b.a)(mn.c)(wn())),In=Object(O.b)({currentUser:le}),Cn=r.a.memo(Object(d.b)(In)((function(e){var n=e.showMenu,t=e.currentUser,a=e.clicked;return r.a.createElement(Nn,{isActive:n,onClick:a},r.a.createElement(Un,{to:"/shop"},"SHOP"),r.a.createElement(Un,{to:"/contact"},"CONTACT"),t?r.a.createElement(Un,{as:"div",onClick:function(){Y.signOut()}},"SIGN OUT"):r.a.createElement(Un,{to:"/sign-in"},"SIGN IN"))})));function Sn(){var e=Object(p.a)(["\n  cursor: pointer;\n  transition: all 0.3s ease-out;\n\n  > div {\n    background: #a5a3a3;\n    width: 28px;\n    height: 4px;\n    margin-bottom: 5px;\n    transition: all 0.3s ease-out;\n    &:last-child {\n      margin: 0;\n    }\n  }\n  &:hover {\n    div {\n      background-color: black;\n    }\n  }\n  &.active {\n    transform: rotate(180deg);\n    > div {\n      background-color: black;\n      &:nth-child(1) {\n        transform: rotate(45deg) translate(7px, 5px);\n      }\n      &:nth-child(2) {\n        opacity: 0;\n      }\n      &:nth-child(3) {\n        transform: rotate(-45deg) translate(8px, -5px);\n      }\n    }\n  }\n\n  @media all and (min-width: 481px) {\n    display: none;\n  }\n"]);return Sn=function(){return e},e}var Tn=b.a.div(Sn()),Hn=r.a.memo((function(e){return r.a.createElement(Tn,{className:"".concat(e.showMenu?"active":""),onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))})),An=r.a.memo((function(){var e=Object(a.useState)(!1),n=Object(M.a)(e,2),t=n[0],i=n[1],c=Object(a.useCallback)((function(){i((function(e){return!e}))}),[]);return r.a.createElement(bn,null,r.a.createElement(fn,{to:"/"},r.a.createElement(jn,null)),r.a.createElement(Cn,{clicked:c,showMenu:t}),r.a.createElement(Hn,{clicked:c,showMenu:t}))})),Rn=Object(O.b)({cartHidden:nn}),Dn=r.a.memo(Object(d.b)(Rn)((function(e){var n=e.cartHidden,t=sn({in:!n,timeout:{appear:0,enter:300,exit:0},appear:!0,classNames:"display",unmountOnExit:!0,exit:!1})(un);return r.a.createElement(He,null,r.a.createElement(Ae,null,r.a.createElement(An,null),r.a.createElement(cn,null),r.a.createElement(t,null)))})));function Pn(){var e=Object(p.a)(["\n  text-align: center;\n  margin-top: 40px;\n  font-size: 24px;\n  color: red;\n"]);return Pn=function(){return e},e}function Bn(){var e=Object(p.a)(["\n  margin-top: 30px;\n  text-align: right;\n  font-size: 36px;\n"]);return Bn=function(){return e},e}function Ln(){var e=Object(p.a)(["\n  text-transform: capitalize;\n  width: 23%;\n  &:last-child {\n    width: 8%;\n  }\n  span {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n  }\n"]);return Ln=function(){return e},e}function _n(){var e=Object(p.a)(["\n  width: 100%;\n  padding: 10px 0;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid darkgrey;\n"]);return _n=function(){return e},e}function Gn(){var e=Object(p.a)(["\n  margin: 50px auto 0;\n  button {\n    margin: 30px 0 30px auto;\n  }\n"]);return Gn=function(){return e},e}var Mn=Object(b.a)(g)(Gn()),zn=b.a.div(_n()),qn=b.a.div(Ln()),Wn=b.a.div(Bn()),Fn=b.a.div(Pn()),Vn=(t(81),Object(d.b)(null,(function(e){return{clearItemHandler:function(n){return e(function(e){return{type:"CLEAR_ITEM",payload:e}}(n))},addItemHandler:function(n){return e(S(n))},deleteItemHandler:function(n){return e(function(e){return{type:"DELETE_ITEM",payload:e}}(n))}}}))((function(e){var n=e.item,t=e.deleteItemHandler,a=e.addItemHandler,i=e.clearItemHandler;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:n.imageUrl,alt:"item"})),r.a.createElement("div",{className:"name"},n.name),r.a.createElement("div",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return t(n)}},"\u276e"),r.a.createElement("span",{className:"value"},n.quantity),r.a.createElement("div",{className:"arrow",onClick:function(){return a(n)}},"\u276f")),r.a.createElement("div",{className:"price"},"$",n.price),r.a.createElement("div",{className:"remove-button",onClick:function(){return i(n)}},r.a.createElement("span",{role:"img","aria-label":"Remove"},"\u274c")))}))),Jn=t(86),Kn=function(e){var n=e.items;return r.a.createElement(Jn.a,null,n.map((function(e){return r.a.createElement(z.a,{key:e.id,timeout:300,classNames:"move"},r.a.createElement(Vn,{item:e}))})))},Qn=t(44),Yn=t.n(Qn),Xn=Object(d.b)(null,(function(e){return{clearAllItemsHandler:function(){return e({type:"CLEAR_ALL_ITEMS"})}}}))((function(e){var n=e.price,t=e.clearAllItemsHandler,a=100*n;return r.a.createElement(Yn.a,{label:"Pay Now",name:"E-commerce",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(n),amount:a,panelLabel:"Pay Now",token:function(e){console.log(e),t(),alert("Payment successful")},stripeKey:"pk_test_51GxxPBIQf4t2bfJRx2DnlRbDE0Ellhb5eFrnBu3p02QHW0RaDix9BhraVNTSOQRK5L6UC9O0cw0YvEfXyBoXEFsp00sDtlVRBb"})})),Zn=Object(O.b)({cartItems:en,cartTotal:an}),$n=Object(d.b)(Zn)((function(e){var n=e.cartItems,t=e.cartTotal;return r.a.createElement(Mn,null,r.a.createElement(zn,null,r.a.createElement(qn,null,r.a.createElement("span",null,"Product")),r.a.createElement(qn,null,r.a.createElement("span",null,"Description")),r.a.createElement(qn,null,r.a.createElement("span",null,"Quantyti")),r.a.createElement(qn,null,r.a.createElement("span",null,"Price")),r.a.createElement(qn,null,r.a.createElement("span",null,"Remove"))),r.a.createElement(Kn,{items:n}),r.a.createElement(Wn,null,r.a.createElement("span",null,"Total:\xa0$",t)),r.a.createElement(Fn,null,"*Please use the following test credit card for payments*",r.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 01/25 - CVV: 123"),t?r.a.createElement(Xn,{price:t}):null)})),et=Object(d.b)(null,(function(e){return{signInHandler:function(n){return e(function(e){return{type:"AUTH_SUCCESS",payload:e}}(n))},signOutHandler:function(){return e({type:"AUTH_LOGOUT"})}}}))((function(e){return Object(a.useEffect)((function(){var n=Y.onAuthStateChanged(function(){var n=Object(s.a)(o.a.mark((function n(t){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=7;break}return n.next=3,Q(t);case 3:n.sent.onSnapshot((function(n){e.signInHandler(Object(u.a)({id:n.id},n.data()))})),n.next=8;break;case 7:e.signOutHandler();case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());return function(){return n()}}),[e]),r.a.createElement("div",{className:"App"},r.a.createElement(Dn,null),r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0,component:x}),r.a.createElement(m.b,{path:"/shop",component:G}),r.a.createElement(m.b,{path:"/sign-in",exact:!0,component:Ce}),r.a.createElement(m.b,{path:"/checkout",exact:!0,component:$n}),r.a.createElement(m.a,{to:"/"})))})),nt=t(45),tt=t(15),at=t(29),rt=t(46),it=t.n(rt),ct=t(47),lt={currentUser:null,loading:!1,errors:null},ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.payload;switch(t){case"AUTH_START":return Object(u.a)(Object(u.a)({},e),{},{loading:!0,errors:null});case"AUTH_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{loading:!1,errors:null,currentUser:a});case"AUTH_ERROR":return Object(u.a)(Object(u.a)({},e),{},{loading:!1,errors:a});case"CLEAR_AUTH_ERROR":return Object(u.a)(Object(u.a)({},e),{},{errors:null});case"AUTH_LOGOUT":return Object(u.a)(Object(u.a)({},e),{},{currentUser:null});default:return e}},ut={cartHidden:!0,cartItems:[]},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.payload;switch(t){case"TOGGLE_CART_HIDDEN":return Object(u.a)(Object(u.a)({},e),{},{cartHidden:!e.cartHidden});case"ADD_ITEM":return Object(u.a)(Object(u.a)({},e),{},{cartItems:Ne(e.cartItems,a)});case"DELETE_ITEM":return Object(u.a)(Object(u.a)({},e),{},{cartItems:Ue(e.cartItems,a)});case"CLEAR_ITEM":return Object(u.a)(Object(u.a)({},e),{},{cartItems:Ie(e.cartItems,a)});case"CLEAR_ALL_ITEMS":return Object(u.a)({},ut);default:return e}},mt={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,n=arguments.length>1?arguments[1]:void 0;return n.type,e},pt={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},bt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,n=arguments.length>1?arguments[1]:void 0;return n.type,e},ft={key:"root",storage:t.n(ct).a,whitelist:["cart"]},gt=Object(tt.c)({user:ot,cart:st,directory:dt,shop:bt}),ht=Object(at.a)(ft,gt),vt=[it.a],Et=Object(tt.d)(ht,tt.a.apply(void 0,vt)),Ot=Object(at.b)(Et);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d.a,{store:Et},r.a.createElement(mn.a,{basename:"/e-commerce-react"},r.a.createElement(nt.a,{persistor:Ot},r.a.createElement(et,null))))),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.9b6a6fe7.chunk.js.map