(this["webpackJsonpget-scripts"]=this["webpackJsonpget-scripts"]||[]).push([[0],{38:function(e,t,n){},56:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),c=n.n(s),r=n(31),i=n.n(r),o=n(8),u=n(2),l=n(4),j=n(6),b=n(5),h=(n(38),n(3)),d=n(9),p=n(14),O=n(17),g=n.n(O),v=new(function(){function e(){Object(u.a)(this,e),this.auth=g.a.create({baseURL:"https://loglister.herokuapp.com",withCredentials:!0})}return Object(l.a)(e,[{key:"signup",value:function(e,t){return this.auth.post("/auth/signup",{username:e,password:t}).then((function(e){return e.data}))}},{key:"login",value:function(e,t){return this.auth.post("/auth/login",{username:e,password:t}).then((function(e){return e.data}))}},{key:"logout",value:function(){return this.auth.get("/auth/logout").then((function(e){return e.data}))}},{key:"me",value:function(){return this.auth.get("/auth/me").then((function(e){return e.data}))}}]),e}()),m=c.a.createContext(),x=m.Consumer,f=m.Provider,y=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={isLoggedIn:!1,isLoading:!0,user:null},e.signup=function(t,n){v.signup(t,n).then((function(t){return e.setState({isLoggedIn:!0,user:t})})).catch((function(t){return e.setState({isLoggedIn:!1,user:null})}))},e.login=function(t,n){v.login(t,n).then((function(t){return e.setState({isLoggedIn:!0,user:t})})).catch((function(t){return e.setState({isLoggedIn:!1,user:null})}))},e.logout=function(){v.logout().then((function(){return e.setState({isLoggedIn:!1,user:null})})).catch((function(e){return console.log(e)}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;v.me().then((function(t){return e.setState({isLoggedIn:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedIn:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoggedIn,n=e.isLoading,s=e.user,c=this.signup,r=this.login,i=this.logout;return n?Object(a.jsx)("p",{children:"Loading"}):Object(a.jsx)(f,{value:{isLoggedIn:t,isLoading:n,user:s,signup:c,login:r,logout:i},children:this.props.children})}}]),n}(c.a.Component),L=function(e){return function(t){Object(j.a)(s,t);var n=Object(b.a)(s);function s(){return Object(u.a)(this,s),n.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var t=this;return Object(a.jsx)(x,{children:function(n){var s=n.isLoggedIn,c=n.isLoading,r=n.user,i=n.signup,o=n.login,u=n.logout;return Object(a.jsx)(e,Object(p.a)(Object(p.a)({},t.props),{},{isLoggedIn:s,isLoading:c,user:r,signup:i,login:o,logout:u}))}})}}]),s}(c.a.Component)},N=(n(56),L(function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e,t,n,s;return Object(a.jsx)("nav",{className:" navbar navbar-bottom",children:Object(a.jsx)("div",{className:"",id:"nav",children:Object(a.jsx)("ul",{className:"navbar-nav",children:this.props.isLoggedIn?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsxs)("div",{className:"navbar-texticon",children:[Object(a.jsxs)("p",{children:["username: ",this.props.user&&this.props.user.username]}),Object(a.jsx)("a",{href:"#nav",onClick:this.props.logout,children:"Logout"})]})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("div",{className:"navbar-texticon",children:Object(a.jsxs)(o.c,(e={className:"navbar-icontitle",to:"/user"},Object(d.a)(e,"className","navbar-button"),Object(d.a)(e,"children",[Object(a.jsx)("img",{className:"navbar-icon",alt:"nav-icon",src:"./../icons/user.png"}),Object(a.jsx)("p",{className:"navbar-title",children:"My Logs"})]),e))})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("div",{className:"navbar-texticon",children:Object(a.jsxs)(o.c,(t={className:"navbar-icontitle",to:"/favorites"},Object(d.a)(t,"className","navbar-button"),Object(d.a)(t,"children",[Object(a.jsx)("img",{className:"navbar-icon",alt:"nav-icon",src:"./../icons/search.png"}),Object(a.jsx)("p",{className:"navbar-title",children:"Favorites"})]),t))})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("div",{className:"navbar-texticon",children:Object(a.jsxs)(o.c,(n={className:"navbar-icontitle",to:"/list/new"},Object(d.a)(n,"className","navbar-button"),Object(d.a)(n,"children",[Object(a.jsx)("img",{className:"navbar-icon",alt:"nav-icon",src:"./../icons/add.png"}),Object(a.jsx)("p",{className:"navbar-title",children:"New list"})]),n))})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("div",{className:"navbar-texticon",children:Object(a.jsxs)(o.c,(s={className:"navbar-icontitle",to:"/settings"},Object(d.a)(s,"className","navbar-button"),Object(d.a)(s,"children",[Object(a.jsx)("img",{className:"navbar-icon",alt:"nav-icon",src:"./../icons/setting.png"}),Object(a.jsx)("p",{className:"navbar-title",children:"Settings"})]),s))})})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(o.b,{to:"/login",className:"navbar-button",children:"Login"}),Object(a.jsx)(o.b,{to:"/signup",className:"navbar-button",children:"Sign Up"})]})})})})}}]),n}(s.Component)));var w=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Home Page"})})},C=L(function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,s=n.password;e.props.signup(a,s)},e.handleChange=function(t){var n=t.target,a=n.name,s=n.value;e.setState(Object(d.a)({},a,s))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Sign Up"}),Object(a.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(a.jsx)("label",{children:"Username:"}),Object(a.jsx)("input",{type:"text",name:"username",value:t,onChange:this.handleChange}),Object(a.jsx)("label",{children:"Password:"}),Object(a.jsx)("input",{type:"password",name:"password",value:n,onChange:this.handleChange}),Object(a.jsx)("input",{type:"submit",value:"Signup"})]}),Object(a.jsx)("p",{children:"Already have account?"}),Object(a.jsx)(o.b,{to:"/login",children:" Login"})]})}}]),n}(s.Component)),I=L(function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,s=n.password;e.props.login(a,s)},e.handleChange=function(t){var n=t.target,a=n.name,s=n.value;e.setState(Object(d.a)({},a,s))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Login"}),Object(a.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(a.jsx)("label",{children:"Username:"}),Object(a.jsx)("input",{type:"text",name:"username",value:t,onChange:this.handleChange}),Object(a.jsx)("label",{children:"Password:"}),Object(a.jsx)("input",{type:"password",name:"password",value:n,onChange:this.handleChange}),Object(a.jsx)("input",{type:"submit",value:"Login"})]})]})}}]),n}(s.Component)),S=new function e(){var t=this;Object(u.a)(this,e),this.getAllUserInfo=function(){return t.api.get("/")},this.api=g.a.create({baseURL:"https://loglister.herokuapp.com",withCredentials:!0})},k=L(function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={userInfo:{},infoShown:{}},e.getUserInfo=function(){S.getAllUserInfo().then((function(t){return e.setState({userInfo:t.data,infoShown:t.data.listsId[4]})})).catch((function(e){return console.log(e)}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getUserInfo()}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Private Route"}),Object(a.jsxs)("h2",{children:["Welcome ",this.props.user&&this.props.user.username]})]})}}]),n}(s.Component));var U=L((function(e){var t=e.isLoggedIn,n=e.isLoading,s=e.component,c=e.exact,r=e.path;return n?"Loading":Object(a.jsx)(h.b,{exact:c,path:r,render:function(e){return t?Object(a.jsx)(h.a,{to:"/user"}):Object(a.jsx)(s,Object(p.a)({},e))}})}));var A=L((function(e){var t=e.isLoggedIn,n=e.isLoading,s=e.component,c=e.exact,r=e.path;return n?"Loading":Object(a.jsx)(h.b,{exact:c,path:r,render:function(e){return t?Object(a.jsx)(s,Object(p.a)({},e)):Object(a.jsx)(h.a,{to:"/login"})}})})),F=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:"favoriiiiiiiiiites"})}}]),n}(s.Component),P=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:"settings"})}}]),n}(s.Component),D=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:"listNew"})}}]),n}(s.Component),M=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(N,{}),Object(a.jsxs)(h.d,{children:[Object(a.jsx)(h.b,{exact:!0,path:"/",component:w}),Object(a.jsx)(U,{exact:!0,path:"/signup",component:C}),Object(a.jsx)(U,{exact:!0,path:"/login",component:I}),Object(a.jsx)(A,{exact:!0,path:"/user",component:k}),Object(a.jsx)(A,{exact:!0,path:"/favorites",component:F}),Object(a.jsx)(A,{exact:!0,path:"/settings",component:P}),Object(a.jsx)(A,{exact:!0,path:"/list/new",component:D}),Object(a.jsx)(A,{exact:!0,path:"/list/:listId",component:D})]})]})}}]),n}(s.Component);i.a.render(Object(a.jsx)(o.a,{children:Object(a.jsx)(y,{children:Object(a.jsx)(M,{})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.75cc5a16.chunk.js.map