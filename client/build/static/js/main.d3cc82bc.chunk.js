(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{36:function(e,t,s){},46:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){},73:function(e,t,s){},74:function(e,t,s){},75:function(e,t,s){},76:function(e,t,s){},77:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(28),r=s.n(n),i=s(6),l=s(2),o=s(19),j=function(e,t){switch(t.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:!0};case"UPDATE_START":return Object(o.a)(Object(o.a)({},e),{},{isFetching:!0});case"UPDATE_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"UPDATE_FAILURE":return{user:e.user,isFetching:!1,error:!0};case"LOGOUT":return{user:null,isFetching:!1,error:!1};default:return e}},u=s(0),b={user:JSON.parse(localStorage.getItem("user"))||null,isFetching:!1,error:!1},d=Object(a.createContext)(b),p=function(e){var t=e.children,s=Object(a.useReducer)(j,b),c=Object(l.a)(s,2),n=c[0],r=c[1];return Object(a.useEffect)((function(){localStorage.setItem("user",JSON.stringify(n.user))}),[n.user]),Object(u.jsx)(d.Provider,{value:{user:n.user,isFetching:n.isFetching,error:n.error,dispatch:r},children:t})};s(36);function O(){var e=Object(a.useContext)(d),t=e.user,s=e.dispatch;return Object(u.jsxs)("div",{className:"bar",children:[Object(u.jsxs)("div",{className:"topLeft",children:[Object(u.jsx)("i",{className:"topIcon fab fa-facebook-square"}),Object(u.jsx)("i",{className:"topIcon fab fa-twitter-square"}),Object(u.jsx)("i",{className:"topIcon fab fa-pinterest-square"}),Object(u.jsx)("i",{className:"topIcon fab fa-instagram-square"})]}),Object(u.jsx)("div",{className:"topCenter",children:Object(u.jsxs)("ul",{className:"topList",children:[Object(u.jsx)("li",{className:"topListItem",children:Object(u.jsx)(i.b,{className:"link",to:"/",children:"HOME"})}),Object(u.jsx)("li",{className:"topListItem",children:Object(u.jsx)(i.b,{className:"link",to:"/about",children:"ABOUT"})}),Object(u.jsx)("li",{className:"topListItem",children:Object(u.jsx)(i.b,{className:"link",to:"/contactus",children:"CONTACT"})}),Object(u.jsx)("li",{className:"topListItem",children:Object(u.jsx)(i.b,{className:"link",to:"/write",children:"WRITE"})}),t&&"admin"===t.role?Object(u.jsx)("li",{className:"topListItem",children:Object(u.jsx)(i.b,{className:"link",to:"/admin",children:"ADMIN"})}):Object(u.jsx)("div",{}),Object(u.jsx)("li",{className:"topListItem",onClick:function(){s({type:"LOGOUT"})},children:t&&"LOGOUT"})]})}),Object(u.jsx)("div",{className:"topRight",children:t?Object(u.jsx)(i.b,{to:"/settings",children:Object(u.jsx)("img",{className:"topImg",src:"http://localhost:5000/images/"+t.profilePic,alt:""})}):Object(u.jsxs)("ul",{className:"topList",children:[Object(u.jsx)("li",{className:"topListItem",children:Object(u.jsx)(i.b,{className:"link",to:"/login",children:"LOGIN"})}),Object(u.jsx)("li",{className:"topListItem",children:Object(u.jsx)(i.b,{className:"link",to:"/register",children:"REGISTER"})})]})})]})}var x=s(3),h=s.n(x),m=s(7);s(46);function f(){return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("div",{className:"headerTitles",children:Object(u.jsx)("span",{className:"headerTitleLg",children:"Blog"})}),Object(u.jsx)("img",{className:"headerImg",src:"https://beckyvandijk.com/wp-content/uploads/2018/06/responsible-blogger-1-Large-1000x500.jpg",alt:""})]})}s(47);function g(e){var t=e.post;return Object(u.jsxs)("div",{className:"post",children:[t.photo&&Object(u.jsx)("img",{className:"postImg",src:"http://localhost:5000/images/"+t.photo,alt:""}),Object(u.jsxs)("div",{className:"postInfo",children:[Object(u.jsx)("div",{className:"postCats",children:t.categories.map((function(e){return Object(u.jsx)("span",{className:"postCat",children:e.name})}))}),Object(u.jsx)(i.b,{to:"/post/".concat(t._id),className:"link",children:Object(u.jsx)("span",{className:"postTitle",children:t.title})}),Object(u.jsx)("hr",{}),Object(u.jsxs)("span",{className:"postDate",children:[new Date(t.createdAt).toDateString(),Object(u.jsxs)("p",{children:[" category :  ",t.category," "]})]})]}),Object(u.jsx)("p",{className:"postDesc",children:t.desc})]})}s(48);function v(e){var t=e.posts;return Object(u.jsx)("div",{className:"posts",children:t.map((function(e){return Object(u.jsx)(g,{post:e})}))})}var N=s(5),y=s.n(N);s(67);function w(e){e.posts;var t=e.handleCategorie,s=Object(a.useState)([]),c=Object(l.a)(s,2),n=c[0],r=c[1];return Object(a.useEffect)((function(){(function(){var e=Object(m.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/api/categories");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(u.jsxs)("div",{className:"sidebar",children:[Object(u.jsxs)("div",{className:"sidebarItem",children:[Object(u.jsx)("span",{className:"sidebarTitle",children:"ABOUT ME"}),Object(u.jsx)(i.b,{to:"/myposts",children:Object(u.jsx)("button",{children:" My Posts "})}),Object(u.jsx)("img",{src:"https://as2.ftcdn.net/v2/jpg/01/58/41/01/500_F_158410140_ECNBx9OhabPdCtjwTYldf1O0khDrUddZ.jpg",alt:""}),Object(u.jsxs)("p",{children:[Object(u.jsx)("br",{})," ",Object(u.jsx)("tr",{})," To say hello or to discuss a project, ",Object(u.jsx)("br",{})," ",Object(u.jsx)("tr",{})," ",Object(u.jsx)("br",{})," ",Object(u.jsx)("tr",{}),"My email address: rahoubarouis5@gmail.com ",Object(u.jsx)("br",{})," ",Object(u.jsx)("tr",{}),Object(u.jsx)("br",{})," ",Object(u.jsx)("tr",{}),Object(u.jsx)("br",{}),"Goodbye ! \ud83d\ude09"]})]}),Object(u.jsxs)("div",{className:"sidebarItem",children:[Object(u.jsx)("span",{className:"sidebarTitle",children:"CATEGORIES"}),Object(u.jsx)("ul",{className:"sidebarList",children:n.map((function(e){return Object(u.jsx)("div",{className:"link",onClick:function(){return t(e.name)},children:Object(u.jsx)("li",{className:"sidebarListItem",children:e.name})})}))})]}),Object(u.jsxs)("div",{className:"sidebarItem",children:[Object(u.jsx)("span",{className:"sidebarTitle",children:"FOLLOW US"}),Object(u.jsxs)("div",{className:"sidebarSocial",children:[Object(u.jsx)("i",{className:"sidebarIcon fab fa-facebook-square"}),Object(u.jsx)("i",{className:"sidebarIcon fab fa-twitter-square"}),Object(u.jsx)("i",{className:"sidebarIcon fab fa-pinterest-square"}),Object(u.jsx)("i",{className:"sidebarIcon fab fa-instagram-square"})]})]})]})}s(68);var I=s(4);function S(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),s=t[0],c=t[1],n=Object(I.f)().search;Object(a.useEffect)((function(){(function(){var e=Object(m.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/api/posts"+n);case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]);var r=Object(a.useState)([]),i=Object(l.a)(r,2),o=i[0],j=i[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(f,{}),Object(u.jsxs)("div",{className:"home",children:[0===o.length?Object(u.jsx)(v,{posts:s}):Object(u.jsx)("div",{children:Object(u.jsx)(v,{posts:o})}),Object(u.jsx)(w,{posts:s,handleCategorie:function(e){var t=s.filter((function(t){return t.title.toUpperCase().includes(e.toUpperCase())}));t.length,j(t)}})]})]})}s(69);function k(){var e=Object(a.useRef)(),t=Object(a.useRef)(),s=Object(a.useContext)(d),c=s.dispatch,n=s.isFetching,r=function(){var s=Object(m.a)(h.a.mark((function s(a){var n;return h.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return a.preventDefault(),c({type:"LOGIN_START"}),s.prev=2,s.next=5,y.a.post("/api/auth/login",{username:e.current.value,password:t.current.value});case 5:n=s.sent,c({type:"LOGIN_SUCCESS",payload:n.data}),s.next=12;break;case 9:s.prev=9,s.t0=s.catch(2),c({type:"LOGIN_FAILURE"});case 12:case"end":return s.stop()}}),s,null,[[2,9]])})));return function(e){return s.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"login",children:[Object(u.jsx)("span",{className:"loginTitle",children:"Login"}),Object(u.jsxs)("form",{className:"loginForm",onSubmit:r,children:[Object(u.jsx)("label",{children:"Username"}),Object(u.jsx)("input",{type:"text",className:"loginInput",placeholder:"Enter your username...",ref:e}),Object(u.jsx)("label",{children:"Password"}),Object(u.jsx)("input",{type:"password",className:"loginInput",placeholder:"Enter your password...",ref:t}),Object(u.jsx)("button",{className:"loginButton",type:"submit",disabled:n,children:"Login"})]}),Object(u.jsx)("button",{className:"loginRegisterButton",children:Object(u.jsx)(i.b,{className:"link",to:"/register",children:"Register"})})]})}s(70);function T(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),r=Object(l.a)(n,2),o=r[0],j=r[1],b=Object(a.useState)(""),d=Object(l.a)(b,2),p=d[0],O=d[1],x=Object(a.useState)(!1),f=Object(l.a)(x,2),g=f[0],v=f[1],N=function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),v(!1),e.prev=2,e.next=5,y.a.post("/api/auth/register",{username:s,email:o,password:p});case 5:e.sent.data&&window.location.replace("/login"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),v(!0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"register",children:[Object(u.jsx)("span",{className:"registerTitle",children:"Register"}),Object(u.jsxs)("form",{className:"registerForm",onSubmit:N,children:[Object(u.jsx)("label",{children:"Username"}),Object(u.jsx)("input",{type:"text",className:"registerInput",placeholder:"Enter your username...",onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("label",{children:"Email"}),Object(u.jsx)("input",{type:"text",className:"registerInput",placeholder:"Enter your email...",onChange:function(e){return j(e.target.value)}}),Object(u.jsx)("label",{children:"Password"}),Object(u.jsx)("input",{type:"password",className:"registerInput",placeholder:"Enter your password...",onChange:function(e){return O(e.target.value)}}),Object(u.jsx)("button",{className:"registerButton",type:"submit",children:"Register"})]}),Object(u.jsx)("button",{className:"registerLoginButton",children:Object(u.jsx)(i.b,{className:"link",to:"/login",children:"Login"})}),g&&Object(u.jsx)("span",{style:{color:"red",marginTop:"10px"},children:"Something went wrong!"})]})}s(71);function C(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),r=Object(l.a)(n,2),i=r[0],o=r[1],j=Object(a.useState)(""),b=Object(l.a)(j,2),p=b[0],O=b[1],x=Object(a.useState)(""),f=Object(l.a)(x,2),g=f[0],v=f[1],N=Object(a.useState)(!1),I=Object(l.a)(N,2),S=I[0],k=I[1],T=Object(a.useContext)(d),C=T.user,L=T.dispatch,E=function(){var e=Object(m.a)(h.a.mark((function e(t){var a,c,n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),L({type:"UPDATE_START"}),a={userId:C._id,username:i,email:p,password:g},!s){e.next=16;break}return c=new FormData,n=Date.now()+s.name,c.append("name",n),c.append("file",s),a.profilePic=n,e.prev=9,e.next=12,y.a.post("api/upload",c);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.prev=16,e.next=19,y.a.put("api/users/"+C._id,a);case 19:r=e.sent,k(!0),L({type:"UPDATE_SUCCESS",payload:r.data}),e.next=27;break;case 24:e.prev=24,e.t1=e.catch(16),L({type:"UPDATE_FAILURE"});case 27:case"end":return e.stop()}}),e,null,[[9,14],[16,24]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"settings",children:[Object(u.jsxs)("div",{className:"settingsWrapper",children:[Object(u.jsxs)("div",{className:"settingsTitle",children:[Object(u.jsx)("span",{className:"settingsUpdateTitle",children:"Update Your Account"}),Object(u.jsx)("span",{className:"settingsDeleteTitle",children:"Delete Account"})]}),Object(u.jsxs)("form",{className:"settingsForm",onSubmit:E,children:[Object(u.jsx)("label",{children:"Profile Picture"}),Object(u.jsxs)("div",{className:"settingsPP",children:[Object(u.jsx)("img",{src:s?URL.createObjectURL(s):"http://localhost:5000/images/"+C.profilePic,alt:""}),Object(u.jsx)("label",{htmlFor:"fileInput",children:Object(u.jsx)("i",{className:"settingsPPIcon far fa-user-circle"})}),Object(u.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:function(e){return c(e.target.files[0])}})]}),Object(u.jsx)("label",{children:"Username"}),Object(u.jsx)("input",{type:"text",placeholder:C.username,onChange:function(e){return o(e.target.value)}}),Object(u.jsx)("label",{children:"Email"}),Object(u.jsx)("input",{type:"email",placeholder:C.email,onChange:function(e){return O(e.target.value)}}),Object(u.jsx)("label",{children:"Password"}),Object(u.jsx)("input",{type:"password",onChange:function(e){return v(e.target.value)}}),Object(u.jsx)("button",{className:"settingsSubmit",type:"submit",children:"Update"}),S&&Object(u.jsx)("span",{style:{color:"green",textAlign:"center",marginTop:"20px"},children:"Profile has been updated..."})]})]}),Object(u.jsx)(w,{})]})}s(72),s(73);function L(){var e=Object(I.f)().pathname.split("/")[2],t=Object(a.useState)({}),s=Object(l.a)(t,2),c=s[0],n=s[1],r=Object(a.useContext)(d).user,o=Object(a.useState)(""),j=Object(l.a)(o,2),b=j[0],p=j[1],O=Object(a.useState)(""),x=Object(l.a)(O,2),f=x[0],g=x[1],v=Object(a.useState)(!1),N=Object(l.a)(v,2),w=N[0],S=N[1];Object(a.useEffect)((function(){(function(){var t=Object(m.a)(h.a.mark((function t(){var s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("/api/posts/"+e);case 2:s=t.sent,n(s.data),p(s.data.title),g(s.data.desc);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),console.log(r);var k=function(){var e=Object(m.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.delete("/api/posts/".concat(c._id),{data:{username:r.username,role:r.role}});case 3:window.location.replace("/"),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(m.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.put("/api/posts/".concat(c._id),{username:r.username,title:b,desc:f});case 3:S(!1),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"singlePost",children:Object(u.jsxs)("div",{className:"singlePostWrapper",children:[c.photo&&Object(u.jsx)("img",{src:"http://localhost:5000/images/"+c.photo,alt:"",className:"singlePostImg"}),w?Object(u.jsx)("input",{type:"text",value:b,className:"singlePostTitleInput",autoFocus:!0,onChange:function(e){return p(e.target.value)}}):Object(u.jsxs)("h1",{className:"singlePostTitle",children:[b,c.username===(null===r||void 0===r?void 0:r.username)&&Object(u.jsxs)("div",{className:"singlePostEdit",children:[Object(u.jsx)("i",{className:"singlePostIcon far fa-edit",onClick:function(){return S(!0)}}),Object(u.jsx)("i",{className:"singlePostIcon far fa-trash-alt",onClick:k})]})]}),"admin"===r.role?Object(u.jsxs)("div",{style:{},children:[Object(u.jsx)("i",{className:"singlePostIcon far fa-trash-alt",onClick:k})," "]}):Object(u.jsx)("div",{}),Object(u.jsxs)("div",{className:"singlePostInfo",children:[Object(u.jsxs)("span",{className:"singlePostAuthor",children:["Author:",Object(u.jsx)(i.b,{to:"/?user=".concat(c.username),className:"link",children:Object(u.jsxs)("b",{children:[" ",c.username]})})]}),Object(u.jsx)("span",{className:"singlePostDate",children:new Date(c.createdAt).toDateString()})]}),w?Object(u.jsx)("textarea",{className:"singlePostDescInput",value:f,onChange:function(e){return g(e.target.value)}}):Object(u.jsx)("p",{className:"singlePostDesc",children:f}),w&&Object(u.jsx)("button",{className:"singlePostButton",onClick:T,children:"Update"})]})})}function E(){return Object(u.jsxs)("div",{className:"single",children:[Object(u.jsx)(L,{}),Object(u.jsx)(w,{})]})}s(74);function P(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),r=Object(l.a)(n,2),i=r[0],o=r[1],j=Object(a.useState)(null),b=Object(l.a)(j,2),p=b[0],O=b[1],x=Object(a.useState)(""),f=Object(l.a)(x,2),g=f[0],v=f[1],N=Object(a.useContext)(d).user,w=Object(a.useState)([]),I=Object(l.a)(w,2),S=I[0],k=I[1];Object(a.useEffect)((function(){(function(){var e=Object(m.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/api/categories");case 2:t=e.sent,k(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log(S);var T=function(){var e=Object(m.a)(h.a.mark((function e(t){var a,c,n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a={username:N.username,title:s,desc:i,category:g},!p){e.next=15;break}return c=new FormData,n=Date.now()+p.name,c.append("name",n),c.append("file",p),a.photo=n,e.prev=8,e.next=11,y.a.post("/api/upload",c);case 11:e.next=15;break;case 13:e.prev=13,e.t0=e.catch(8);case 15:return e.prev=15,e.next=18,y.a.post("/api/posts",a);case 18:r=e.sent,window.location.replace("/post/"+r.data._id),e.next=24;break;case 22:e.prev=22,e.t1=e.catch(15);case 24:case"end":return e.stop()}}),e,null,[[8,13],[15,22]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"write",children:[p&&Object(u.jsx)("img",{className:"writeImg",src:URL.createObjectURL(p),alt:""}),Object(u.jsxs)("form",{className:"writeForm",onSubmit:T,children:[Object(u.jsxs)("div",{className:"writeFormGroup",children:[Object(u.jsx)("label",{htmlFor:"fileInput",children:Object(u.jsx)("i",{className:"writeIcon fas fa-plus"})}),Object(u.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:function(e){return O(e.target.files[0])}}),Object(u.jsx)("input",{type:"text",placeholder:"Title",className:"writeInput",autoFocus:!0,onChange:function(e){return c(e.target.value)}})]}),Object(u.jsxs)("select",{placeholder:"choose category..",style:{marginLeft:"193px"},onChange:function(e){return v(e.target.value)},children:[Object(u.jsx)("option",{value:"Music",children:"Music"}),Object(u.jsx)("option",{value:"Voyage",children:"Voyage"}),Object(u.jsx)("option",{value:"Nature",children:"Nature"}),Object(u.jsx)("option",{value:"Family",children:"Family"}),Object(u.jsx)("option",{value:"Love",children:"Love"}),Object(u.jsx)("option",{value:"Animals",children:"Animals"}),Object(u.jsx)("option",{value:"Food",children:"Food"}),Object(u.jsx)("option",{value:"Friends",children:"Friends"}),Object(u.jsx)("option",{value:"Books",children:"Books"})]}),Object(u.jsx)("div",{className:"writeFormGroup",children:Object(u.jsx)("textarea",{placeholder:"Tell your story...",type:"text",className:"writeInput writeText",onChange:function(e){return o(e.target.value)}})}),Object(u.jsx)("button",{className:"writeSubmit",type:"submit",children:"Publish"})]})]})}var F=s(30);s(75);function U(){return Object(u.jsxs)("div",{className:"form",children:[Object(u.jsx)("h1",{"data-text":"Hey you! Do not hesitate to contact us",children:"Hey you! Do not hesitate to contact us"}),Object(u.jsxs)("form",{className:"contact-form",onSubmit:function(e){e.preventDefault(),F.a.sendForm("service_ef3e5fd","template_e9fkwrv",e.target,"user_7hFjUnV0zZyaEOaFaIKsq").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)}))},children:[Object(u.jsx)("input",{type:"hidden",name:"contact_number"}),Object(u.jsx)("label",{children:"Name"}),Object(u.jsx)("input",{type:"text",name:"user_name",placeholder:"Write your name..."}),Object(u.jsx)("label",{children:"Email"}),Object(u.jsx)("input",{type:"email",name:"user_email",placeholder:"  Write your Email..."}),Object(u.jsx)("label",{children:"Message"}),Object(u.jsx)("textarea",{name:"message",placeholder:"Write your Message..."}),Object(u.jsx)("input",{type:"submit",value:"Send"})]})]})}s(76);function D(){return Object(u.jsxs)("div",{className:"about",children:[Object(u.jsxs)("div",{className:"aboutTitles",children:[Object(u.jsx)("div",{className:"aboutTitleLg",children:Object(u.jsx)("h3",{children:"About US:"})}),Object(u.jsx)("div",{className:"aboutTextLg",children:Object(u.jsxs)("h3",{children:[" Welcome to my blog ! \ud83d\ude09 ",Object(u.jsx)("tr",{}),Object(u.jsx)("br",{}),"I am rihab, I live in Tunis, I am a front-end developper. ",Object(u.jsx)("tr",{}),Object(u.jsx)("br",{}),"So! ",Object(u.jsx)("tr",{}),Object(u.jsx)("br",{}),"On our blog you will find: ",Object(u.jsx)("tr",{}),Object(u.jsx)("br",{}),"* ideas for destinations for going abroad. ",Object(u.jsx)("tr",{}),"* Practical advice for traveling with your favorites. ",Object(u.jsx)("tr",{}),"* Good addresses in to see nature, restaurants, etc. ",Object(u.jsx)("tr",{}),"* good books to read.",Object(u.jsx)("tr",{}),"* beautiful music to listen to!",Object(u.jsx)("tr",{}),"etc ..."]})})]}),Object(u.jsx)("img",{className:"aboutImg",src:"https://www.journaldugeek.com/content/uploads/2020/10/texture-2100024-1280-640x478.jpg",alt:""})]})}var A=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"            Admin Dashboard"})})},_=function(){var e=Object(a.useContext)(d).user,t=Object(a.useState)([]),s=Object(l.a)(t,2),c=s[0],n=s[1];Object(a.useEffect)((function(){(function(){var e=Object(m.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/api/posts");case 2:t=e.sent,n(t.data),console.log(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]);var r=c.filter((function(t){return t.username===e.username}));return console.log(r),Object(u.jsxs)("div",{className:"cont",children:[Object(u.jsx)("h1",{children:"My Posts"}),r.map((function(e){return Object(u.jsx)("div",{className:"display",children:Object(u.jsx)(g,{post:e})})}))]})};var R=function(){var e=Object(a.useContext)(d).user;return Object(u.jsxs)(i.a,{children:[Object(u.jsx)(O,{}),Object(u.jsxs)(I.c,{children:[Object(u.jsx)(I.a,{exact:!0,path:"/",component:S}),Object(u.jsx)(I.a,{exact:!0,path:"/register",children:e?Object(u.jsx)(S,{}):Object(u.jsx)(T,{})}),Object(u.jsx)(I.a,{exact:!0,path:"/login",children:e?Object(u.jsx)(S,{}):Object(u.jsx)(k,{})}),Object(u.jsx)(I.a,{exact:!0,path:"/write",children:e?Object(u.jsx)(P,{}):Object(u.jsx)(T,{})}),Object(u.jsx)(I.a,{exact:!0,path:"/settings",children:e?Object(u.jsx)(C,{}):Object(u.jsx)(T,{})}),Object(u.jsx)(I.a,{exact:!0,path:"/post/:postId",children:e?Object(u.jsx)(E,{}):Object(u.jsx)(k,{})}),Object(u.jsx)(I.a,{exact:!0,path:"/admin",component:A}),Object(u.jsx)(I.a,{exact:!0,path:"/contactus",children:e?Object(u.jsx)(U,{}):Object(u.jsx)(T,{})}),Object(u.jsx)(I.a,{exact:!0,path:"/myposts",children:e?Object(u.jsx)(_,{}):Object(u.jsx)(k,{})}),Object(u.jsx)(I.a,{exact:!0,path:"/about",children:Object(u.jsx)(D,{})})]})]})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(p,{children:Object(u.jsx)(R,{})})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.d3cc82bc.chunk.js.map