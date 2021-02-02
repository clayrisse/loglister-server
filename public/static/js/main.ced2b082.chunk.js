(this["webpackJsonpget-scripts"]=this["webpackJsonpget-scripts"]||[]).push([[0],{38:function(e,t,n){},56:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n(1),a=n.n(i),r=n(31),c=n.n(r),o=n(8),l=n(2),j=n(3),b=n(5),u=n(4),h=(n(38),n(6)),d=n(14),O=n(17),p=n.n(O),m=new(function(){function e(){Object(l.a)(this,e),this.auth=p.a.create({baseURL:"https://loglister.herokuapp.com",withCredentials:!0})}return Object(j.a)(e,[{key:"signup",value:function(e,t){return this.auth.post("/auth/signup",{username:e,password:t}).then((function(e){return e.data}))}},{key:"login",value:function(e,t){return this.auth.post("/auth/login",{username:e,password:t}).then((function(e){return e.data}))}},{key:"logout",value:function(){return this.auth.get("/auth/logout").then((function(e){return e.data}))}},{key:"me",value:function(){return this.auth.get("/auth/me").then((function(e){return e.data}))}}]),e}()),g=a.a.createContext(),x=g.Consumer,f=g.Provider,v=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={isLoggedIn:!1,isLoading:!0,user:null},e.signup=function(t,n){m.signup(t,n).then((function(t){return e.setState({isLoggedIn:!0,user:t})})).catch((function(t){return e.setState({isLoggedIn:!1,user:null})}))},e.login=function(t,n){m.login(t,n).then((function(t){return e.setState({isLoggedIn:!0,user:t})})).catch((function(t){return e.setState({isLoggedIn:!1,user:null})}))},e.logout=function(){m.logout().then((function(){return e.setState({isLoggedIn:!1,user:null})})).catch((function(e){return console.log(e)}))},e.me=function(){m.me().then((function(t){return e.setState({isLoggedIn:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedIn:!1,user:null,isLoading:!1})}))},e.destroyUser=function(){e.setState({isLoggedIn:!1,user:null,isLoading:!1})},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;m.me().then((function(t){return e.setState({isLoggedIn:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedIn:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoggedIn,n=e.isLoading,i=e.user,a=this.signup,r=this.login,c=this.logout,o=this.destroyUser,l=this.me;return n?Object(s.jsx)("p",{children:"Loading"}):Object(s.jsx)(f,{value:{isLoggedIn:t,isLoading:n,user:i,signup:a,login:r,logout:c,destroyUser:o,me:l},children:this.props.children})}}]),n}(a.a.Component),y=function(e){return function(t){Object(b.a)(i,t);var n=Object(u.a)(i);function i(){return Object(l.a)(this,i),n.apply(this,arguments)}return Object(j.a)(i,[{key:"render",value:function(){var t=this;return Object(s.jsx)(x,{children:function(n){var i=n.isLoggedIn,a=n.isLoading,r=n.user,c=n.signup,o=n.login,l=n.logout,j=n.destroyUser,b=n.me;return Object(s.jsx)(e,Object(d.a)(Object(d.a)({},t.props),{},{isLoggedIn:i,isLoading:a,user:r,signup:c,login:o,logout:l,destroyUser:j,me:b}))}})}}]),i}(a.a.Component)},L=(n(56),y(function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(s.jsx)("nav",{className:" navbar navbar-bottom",children:Object(s.jsx)("div",{className:"",id:"nav",children:Object(s.jsx)("ul",{className:"navbar-nav",children:this.props.isLoggedIn&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("div",{className:"navbar-texticon",children:Object(s.jsxs)(o.c,{className:"navbar-icontitle navbar-button",to:"/user",children:[Object(s.jsx)("img",{id:"nav-avatar",className:"navbar-icon",alt:"nav-icon",src:this.props.user.image?this.props.user.image:"./../icons/user.png"}),Object(s.jsx)("p",{className:"navbar-title",children:"My Logs"})]})})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("div",{className:"navbar-texticon",children:Object(s.jsxs)(o.c,{className:"navbar-icontitle navbar-button",to:"/list/new",children:[Object(s.jsx)("img",{className:"navbar-icon",alt:"nav-icon",src:"./../icons/addwhite.png"}),Object(s.jsx)("p",{className:"navbar-title",children:"New list"})]})})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("div",{className:"navbar-texticon",children:Object(s.jsxs)(o.c,{className:"navbar-icontitle navbar-button",to:"/settings",children:[Object(s.jsx)("img",{className:"navbar-icon",alt:"nav-icon",src:"./../icons/settings.png"}),Object(s.jsx)("p",{className:"navbar-title",children:"Settings"})]})})})]})})})})}}]),n}(i.Component)));var I=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:"Home Page"})})},C=n(9),N=y(function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={username:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,s=n.username,i=n.password;e.props.signup(s,i)},e.handleChange=function(t){var n=t.target,s=n.name,i=n.value;e.setState(Object(C.a)({},s,i))},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Sign Up"}),Object(s.jsx)("br",{})," ",Object(s.jsx)("br",{}),Object(s.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(s.jsx)("label",{children:"Username:"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",name:"username",value:t,onChange:this.handleChange,required:!0}),Object(s.jsx)("br",{})," ",Object(s.jsx)("br",{}),Object(s.jsx)("label",{children:"Password:"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"password",name:"password",value:n,onChange:this.handleChange,required:!0}),Object(s.jsx)("br",{})," ",Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"submit",value:"Signup"})]}),Object(s.jsx)("br",{})," ",Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:"Already have account?"}),Object(s.jsx)(o.b,{to:"/login",children:'Go to "Login"'})]})}}]),n}(i.Component)),k=y(function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={username:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,s=n.username,i=n.password;e.props.login(s,i)},e.handleChange=function(t){var n=t.target,s=n.name,i=n.value;e.setState(Object(C.a)({},s,i))},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Login"}),Object(s.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{children:"Username:"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",name:"username",value:t,onChange:this.handleChange,required:!0}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{children:"Password:"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"password",name:"password",value:n,onChange:this.handleChange,required:!0}),Object(s.jsx)("br",{})," ",Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"submit",value:"Login"})]}),Object(s.jsx)("br",{})," ",Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:"Already have account?"}),Object(s.jsx)(o.b,{to:"/signup",children:'Go to "Sign up"'})]})}}]),n}(i.Component)),w=new function e(){var t=this;Object(l.a)(this,e),this.getAllUserInfo=function(){return t.api.get("/api/user")},this.editUser=function(e){return t.api.put("/api/user",e)},this.uploadImage=function(e){return t.api.post("/api/user/upload",e)},this.deleteUser=function(){return t.api.delete("/api/user")},this.getOneList=function(e){return t.api.get("/api/list/".concat(e))},this.createList=function(e){return t.api.post("/api/list",e)},this.editList=function(e,n){return t.api.put("/api/list/".concat(e),n)},this.deleteOneList=function(e){return t.api.delete("/api/list/".concat(e))},this.getOneItem=function(e){return t.api.get("/api/item/".concat(e))},this.createItem=function(e,n){return t.api.post("/api/item/".concat(e),n)},this.editItem=function(e){return t.api.put("/api/item/".concat(e))},this.checkItem=function(e,n){return t.api.put("/api/item/check/".concat(e),n)},this.deleteOneItem=function(e){return t.api.delete("/api/item/".concat(e))},this.api=p.a.create({baseURL:"https://loglister.herokuapp.com",withCredentials:!0})},S=y(function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={listArr:[],editorsArr:[],infoShown:""},e.getUserInfo=function(){w.getAllUserInfo().then((function(t){console.log("response.data derrr user-----------",t.data),e.setState({listArr:t.data.listsId,editorsArr:t.data.editorsListsId,infoShown:JSON.parse(JSON.stringify(t.data))})})).catch((function(e){return console.log(e)}))},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getUserInfo()}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:this.props.user&&this.props.user.username}),Object(s.jsx)("br",{}),Object(s.jsx)("hr",{className:"hr-big"}),Object(s.jsxs)("div",{className:"listing",children:[Object(s.jsx)("h2",{children:"Listas"}),Object(s.jsx)("br",{}),this.state.listArr.map((function(e,t){return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"itemrow",children:Object(s.jsx)(o.b,{to:"list/".concat(e._id),children:e.name})}),Object(s.jsx)("hr",{className:"hr-small"})]},e._id)})),Object(s.jsx)("br",{}),this.state.editorsArr.map((function(e,t){return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"itemrow item-editor",children:Object(s.jsx)(o.b,{to:"list/".concat(e._id),children:e.name})}),Object(s.jsx)("hr",{className:"hr-small"})]},e._id)})),Object(s.jsx)("br",{})]}),Object(s.jsx)("hr",{className:"hr-big"}),Object(s.jsxs)("div",{className:"listing",children:[Object(s.jsx)("h2",{children:"Things to do"}),Object(s.jsx)("br",{}),this.state.listArr.map((function(e,t){return e.listItems.map((function(e){if(!1===e.isDone)return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"itemrow",children:Object(s.jsx)(o.b,{to:"list/".concat(e.listId),children:e.title})}),Object(s.jsx)("hr",{className:"hr-small"})]},e._id)}))})),this.state.editorsArr.map((function(e,t){return e.listItems.map((function(e){if(!1===e.isDone)return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"itemrow item-editor",children:Object(s.jsx)(o.b,{to:"list/".concat(e.listId),children:e.title})}),Object(s.jsx)("hr",{className:"hr-small"})]},e._id)}))}))]}),Object(s.jsx)("br",{})]})}}]),n}(i.Component));var D=y((function(e){var t=e.isLoggedIn,n=e.isLoading,i=e.component,a=e.exact,r=e.path;return n?"Loading":Object(s.jsx)(h.b,{exact:a,path:r,render:function(e){return t?Object(s.jsx)(h.a,{to:"/user"}):Object(s.jsx)(i,Object(d.a)({},e))}})}));var U=y((function(e){var t=e.isLoggedIn,n=e.isLoading,i=e.component,a=e.exact,r=e.path;return n?"Loading":Object(s.jsx)(h.b,{exact:a,path:r,render:function(e){return t?Object(s.jsx)(i,Object(d.a)({},e)):Object(s.jsx)(h.a,{to:"/login"})}})})),A=y(function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{children:"favoriiiiiiiiiites"})}}]),n}(i.Component)),P=y(function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={username:"",password:"",image:"",isPrivate:!1,deleteconfirm:!1},e.getUserInfo=function(){w.getAllUserInfo().then((function(t){e.setState({username:t.data.username,password:t.data.password,image:t.data.image,isPrivate:t.data.isPrivate})})).catch((function(e){return console.log(e)}))},e.handleIsPrivateCheckbox=function(t){var n=t.target,s=n.name,i=n.checked;e.setState(Object(C.a)({},s,i))},e.handleChange=function(t){var n=t.target,s=n.name,i=n.value;e.setState(Object(C.a)({},s,i))},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,s={username:n.username,password:n.password,isPrivate:n.isPrivate,image:n.image};w.editUser(s).then((function(){e.getUserInfo(),e.props.me(),e.props.history.push("/user")})).catch((function(e){return console.log(e)}))},e.handleDelete=function(){w.deleteUser().then((function(){e.props.destroyUser(),e.props.history.push("/login")})).catch((function(e){return console.log(e)}))},e.toggleDeleteConfirm=function(){return e.setState({deleteconfirm:!e.state.deleteconfirm})},e.handleFileUpload=function(t){var n=t.target.files[0],s=new FormData;s.append("image",n),w.uploadImage(s).then((function(t){e.setState({image:t.data.secure_url})})).catch((function(e){console.log("Error while uploading the file: ",e)}))},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getUserInfo()}},{key:"render",value:function(){var e=this,t=this.props.logout,n=this.state,i=n.username,a=n.password,r=n.isPrivate;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Settings"}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{className:"btnsetting",onClick:t,children:Object(s.jsx)("img",{src:"./../icons/logout.png",height:"40px",alt:"trash"})}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"inputform",children:[Object(s.jsx)("label",{children:"Locked"}),Object(s.jsx)("input",{type:"checkbox",checked:r,id:"private-input",name:"isPrivate",onChange:this.handleIsPrivateCheckbox})]}),Object(s.jsx)("br",{}),Object(s.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(s.jsx)("label",{children:"Image"}),Object(s.jsx)("br",{}),Object(s.jsx)("img",{style:{width:"100px"},src:this.state.image&&this.state.image,alt:""}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{name:"image",type:"file",onChange:this.handleFileUpload}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{children:"Username:"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",name:"username",value:i,onChange:this.handleChange}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{children:"Password:"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"password",name:"password",value:a,onChange:this.handleChange}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{className:"btnform",type:"submit",children:"Save Changes"}),Object(s.jsx)("br",{})," ",Object(s.jsx)("br",{})]}),Object(s.jsxs)("button",{onClick:this.toggleDeleteConfirm,className:"btnform",children:[Object(s.jsx)("img",{src:"./../icons/trash.png",height:"15px",alt:"trash"}),"Delete User"]}),Object(s.jsx)("br",{})," ",Object(s.jsx)("br",{}),this.state.deleteconfirm&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("p",{children:"Are you sure?"}),Object(s.jsx)("button",{onClick:function(){return e.handleDelete()},children:"YES"}),Object(s.jsx)("button",{onClick:this.toggleDeleteConfirm,children:"NO"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{})]})]})}}]),n}(i.Component)),F=y(function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={name:"",type:"list",background:"",editorsName:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,s={name:n.name,type:n.type,background:n.background,editorsName:n.editorsName};w.createList(s).then((function(t){var n=t.data._id;e.props.history.push("/list/".concat(n))})).catch((function(e){return console.log(e)}))},e.handleChange=function(t){var n=t.target,s=n.name,i=n.value;e.setState(Object(C.a)({},s,i))},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=(e.type,e.background,e.editorsName);return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Add"}),Object(s.jsx)("br",{})," ",Object(s.jsx)("br",{}),Object(s.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(s.jsx)("label",{children:"List name:"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",name:"name",value:t,onChange:this.handleChange,required:!0}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{children:"Editor's Username:"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",name:"editorsName",value:n,onChange:this.handleChange}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{type:"submit",className:"btnform",children:"Create List"})]})]})}}]),n}(i.Component)),_=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={title:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state.title,s=e.props.listId;w.createItem(s,{title:n}).then((function(t){console.log("addedItem",t),e.props.getListInfo()})).catch((function(e){return console.log(e)})),e.setState({title:""})},e.handleChange=function(t){var n=t.target,s=n.name,i=n.value;e.setState(Object(C.a)({},s,i))},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state.title;return Object(s.jsx)("div",{children:Object(s.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(s.jsx)("input",{type:"text",name:"title",value:e,onChange:this.handleChange,required:!0}),Object(s.jsx)("button",{type:"submit",id:"add-item-icon",className:"btnform ",children:Object(s.jsx)("img",{src:"./../icons/add.png",height:"12px",alt:"trash"})})]})})}}]),n}(i.Component),E=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={title:"",notes:"",isDone:!1},e.handleIsDoneCheck=function(t){var n=!e.state.isDone;w.checkItem(e.props.itemId,{isDone:n}).then((function(){return e.props.getListInfo()})).catch((function(e){return console.log(e)}))},e.getItemInfo=function(t){w.getOneItem(t).then((function(t){e.setState({isDone:t.data.isDone,title:t.data.title,notes:t.data.notes})})).catch((function(e){return console.log(e)}))},e.handleDeleteItem=function(t){var n=e.props.itemId;w.deleteOneItem(n).then((function(t){console.log("deletedList",t),e.props.getListInfo()})).catch((function(e){return console.log(e)}))},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getItemInfo(this.props.itemId)}},{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"itemrow",children:[Object(s.jsxs)("div",{clasName:"leftrow",children:[Object(s.jsx)("input",{type:"checkbox",checked:this.state.isDone,name:"isDone",onChange:this.handleIsDoneCheck}),Object(s.jsx)("label",{children:this.state.title})]}),Object(s.jsx)("div",{clasName:"rightrow",children:Object(s.jsx)("button",{onClick:this.handleDeleteItem,className:"btnform btnsetting",children:Object(s.jsx)("img",{src:"./../icons/trash.png",height:"16px",alt:"trash"})})})]}),Object(s.jsx)("hr",{className:"hr-small"})]})}}]),n}(i.Component),q=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={name:"",type:"list",background:"",editorsName:"",isPrivate:!0,deleteconfirm:!1},e.handleIsPrivateCheckbox=function(t){var n=t.target,s=n.name,i=n.checked;e.setState(Object(C.a)({},s,i))},e.toggleDeleteConfirm=function(){return e.setState({deleteconfirm:!e.state.deleteconfirm})},e.handleDeleteList=function(t){var n=e.props.listInfo._id;w.deleteOneList(n).then((function(t){console.log("deletedList",t),e.props.goToUserPage()})).catch((function(e){return console.log(e)}))},e.handleFormSubmit=function(t){t.preventDefault();var n=e.props.listInfo._id,s=e.state,i={name:s.name,type:s.type,background:s.background,editorsName:s.editorsName,isPrivate:s.isPrivate};console.log("edit sended------------"),w.editList(n,i).then((function(t){console.log("createdList",t),e.props.getListInfo(),e.props.toggleListEdit()})).catch((function(e){return console.log(e)}))},e.handleChange=function(t){var n=t.target,s=n.name,i=n.value;e.setState(Object(C.a)({},s,i))},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props.listInfo,t=e.name,n=e.type,i=e.background,a=e.editorsName,r=e.isPrivate;return Object(s.jsx)("div",{className:"list-edit",children:Object(s.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(s.jsx)("button",{type:"submit",className:"btnform",children:"Edit List"}),Object(s.jsx)("br",{})," ",Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"inputform",children:[Object(s.jsx)("label",{children:"Locked"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"checkbox",checked:r,id:"private-input",name:"isPrivate",onChange:this.handleIsPrivateCheckbox})]}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{children:"Name:"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",name:"name",placeholder:t,onChange:this.handleChange}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{children:"Type:"}),Object(s.jsx)("br",{}),Object(s.jsxs)("select",{placeholder:n,onChange:this.handleChange,name:"type",children:[Object(s.jsx)("option",{value:"list",children:"list"}),Object(s.jsx)("option",{value:"todo",default:!0,children:"todo"}),Object(s.jsx)("option",{value:"log",children:"log"}),Object(s.jsx)("option",{value:"cyclelist",children:"cyclelist"})]}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{children:"Background:"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",name:"background",placeholder:i,onChange:this.handleChange}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{children:"Editor's Username:"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",name:"editorsName",value:a,onChange:this.handleChange}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{onClick:this.toggleDeleteConfirm,children:"Delete List"}),!this.state.deleteconfirm&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:"Are you sure?"}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{onClick:this.toggleDeleteConfirm,children:"NO"}),Object(s.jsx)("button",{onClick:this.handleDeleteList,children:"YES"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{})]})]})})}}]),n}(i.Component),M=(n(62),y(function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={chosenList:[],itemListArr:[],settingsOn:!1,isDone:!1},e.toggleListEdit=function(){console.log("this.props.user._id",e.props.user._id),console.log("this.state.chosenList.ownerId",e.state.chosenList.ownerId),e.setState({settingsOn:!e.state.settingsOn})},e.goToUserPage=function(){return e.props.history.push("/user")},e.getListInfo=function(){var t=e.props.match.params.listId;w.getOneList(t).then((function(t){e.setState({chosenList:t.data,itemListArr:t.data.listItems})})).catch((function(e){return console.log(e)}))},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getListInfo()}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"dad-div",children:[Object(s.jsx)("h1",{children:this.state.chosenList.name}),Object(s.jsx)("p",{children:this.state.ownerId}),Object(s.jsx)("button",{className:"btnsetting",onClick:this.toggleListEdit,children:Object(s.jsx)("img",{src:"./../icons/settings.png",height:"20px",alt:"trash"})}),Object(s.jsx)("br",{}),this.state.settingsOn&&Object(s.jsx)(q,{goToUserPage:this.goToUserPage,getListInfo:this.getListInfo,listInfo:this.state.chosenList,toggleListEdit:this.toggleListEdit}),Object(s.jsx)(_,{listId:this.state.chosenList._id,getListInfo:this.getListInfo}),Object(s.jsx)("br",{}),Object(s.jsx)("hr",{className:"hr-big"}),Object(s.jsxs)("div",{className:"listing",children:[Object(s.jsx)("h2",{children:"Still to do"}),Object(s.jsx)("br",{}),this.state.itemListArr.map((function(t){return!t.isDone&&Object(s.jsx)(E,{itemId:t._id,getListInfo:e.getListInfo},t._id)}))]}),Object(s.jsx)("br",{}),Object(s.jsx)("hr",{className:"hr-big"}),Object(s.jsxs)("div",{className:"listing",children:[Object(s.jsx)("h2",{children:"Done"}),Object(s.jsx)("br",{}),this.state.itemListArr.map((function(t){return t.isDone&&Object(s.jsx)(E,{itemId:t._id,getListInfo:e.getListInfo},t._id)}))]})]})}}]),n}(i.Component))),T=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(L,{}),Object(s.jsxs)(h.d,{children:[Object(s.jsx)(h.b,{exact:!0,path:"/",component:I}),Object(s.jsx)(D,{exact:!0,path:"/signup",component:N}),Object(s.jsx)(D,{exact:!0,path:"/login",component:k}),Object(s.jsx)(U,{exact:!0,path:"/user",component:S}),Object(s.jsx)(U,{exact:!0,path:"/favorites",component:A}),Object(s.jsx)(U,{exact:!0,path:"/settings",component:P}),Object(s.jsx)(U,{exact:!0,path:"/list/new",component:F}),Object(s.jsx)(U,{exact:!0,path:"/list/:listId",component:M})]})]})}}]),n}(i.Component);c.a.render(Object(s.jsx)(o.a,{children:Object(s.jsx)(v,{children:Object(s.jsx)(T,{})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.ced2b082.chunk.js.map