(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{1480:function(e,t,n){},1503:function(e,t,n){},1504:function(e,t,n){},1508:function(e,t,n){},1509:function(e,t,n){},1510:function(e,t,n){},1511:function(e,t,n){},1515:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(25),c=n.n(i),s=(n(55),n(56),n(19)),l=n(8),o=(n(57),n(6)),u=n.n(o),d=n(10),j=n(20),b=n(45),h=n(21),p=n(23),O=n(26),f=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){return Object(j.a)(this,n),t.call(this,e)}return n}(Object(O.a)(Error)),x=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){return Object(j.a)(this,n),t.call(this,e)}return n}(Object(O.a)(Error)),m=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){return Object(j.a)(this,n),t.call(this,e)}return n}(Object(O.a)(Error)),v=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){return Object(j.a)(this,n),t.call(this,e)}return n}(Object(O.a)(Error)),g=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){return Object(j.a)(this,n),t.call(this,e)}return n}(Object(O.a)(Error)),y=n(59)(a.a),w=n(5),S={username:"Aron",token:"aabbcc",uid:66,clientId:"exampleclientId",favorites:[],accountType:"external"},k=function(e){for(var t=[],n=0;n<e;n++)t.push({id:n,poster:S.uid,title:w.name.jobTitle(),description:w.lorem.words(15),clientId:w.company.companyName(),type:w.random.arrayElement(["internal","external"]),timePosted:w.date.recent(),applications:[{id:w.random.number(),applicantId:w.random.number(),applicantName:w.name.firstName(),applicantSeniority:w.random.arrayElement(["Junior","Senior"]),timeApplied:w.date.recent(),applicationStatus:"rifiutato"},{id:w.random.number(),applicantId:w.random.number(),applicantName:w.name.firstName(),applicantSeniority:w.random.arrayElement(["Junior","Senior"]),timeApplied:w.date.recent(),applicationStatus:"ricevuto"},{id:w.random.number(),applicantId:w.random.number(),applicantName:w.name.firstName(),applicantSeniority:w.random.arrayElement(["Junior","Senior"]),timeApplied:w.date.recent(),applicationStatus:"review"},{id:w.random.number(),applicantId:w.random.number(),applicantName:w.name.firstName(),applicantSeniority:w.random.arrayElement(["Junior","Senior"]),timeApplied:w.date.recent(),applicationStatus:"confermato"},{id:w.random.number(),applicantId:w.random.number(),applicantName:w.name.firstName(),applicantSeniority:w.random.arrayElement(["Junior","Senior"]),timeApplied:w.date.recent(),applicationStatus:"ricevuto"}]});return t},N={currentUser:S,callBuilder:k,applicationBuilder:function(e){for(var t=[],n=0;n<e;n++)t.push({applicantId:w.random.number(),applicantName:w.name.firstName(),applicationStatus:w.random.arrayElement(["ricevuto","confermato","rifiutato","review"]),id:w.random.number(),timeApplied:w.date.recent(),applicantSeniority:w.random.arrayElement(["junior","senior"]),target:k(1)[0]});return t}},C=function(e,t){switch(console.log(e),e){case"invalid_json":t(new v(e));break;case"existing_username":t(new v("username_taken"));break;case"server_failure":t(new g(e));break;case"no_token":t(new x(e));break;case"wrong_credentials":t(new m(e));break;case"token_expired":t(new x(e));break;case"must_be_post":throw new g("This should never emerge in prod. \n        There is a GET request that should be POST.")}},P=n(3),E=(n(1480),n(1));var A=function(e){var t,n=Object(r.useState)("signin"),a=Object(P.a)(n,2),i=a[0],c=a[1],s=Object(r.useState)(""),l=Object(P.a)(s,2),o=l[0],u=l[1],d=Object(r.useState)(""),j=Object(P.a)(d,2),b=j[0],h=j[1],p=Object(r.useState)("internal"),O=Object(P.a)(p,2),f=O[0],x=O[1],m=Object(r.useState)(),v=Object(P.a)(m,2),g=v[0],y=v[1],w=function(t){t.preventDefault(),e.setUsernameAndPassword({username:o,password:b})},S=function(t){t.preventDefault(),e.registerWithUsernameAndPassword({username:o,password:b,type:f,clientId:g})};return t="signin"===i?Object(E.jsxs)("div",{className:"main",children:[Object(E.jsx)("h1",{className:"text-center",children:"Accedi"}),e.errorMessage&&Object(E.jsx)("div",{className:"alert alert-danger",children:e.errorMessage}),Object(E.jsxs)("form",{onSubmit:"signin"===i?w:S,children:[Object(E.jsxs)("label",{htmlFor:"username",children:["Username:"," ",Object(E.jsx)("input",{required:!0,type:"text",id:"username",onChange:function(e){return u(e.target.value)}})]}),Object(E.jsxs)("label",{htmlFor:"password",children:["Password:"," ",Object(E.jsx)("input",{required:!0,type:"password",id:"password",onChange:function(e){return h(e.target.value)}})]}),Object(E.jsx)("div",{className:"submit text-center",children:Object(E.jsx)("input",{required:!0,className:"btn btn-primary mt-3",type:"submit",value:"Log In"})})]})]}):Object(E.jsxs)("div",{className:"main",children:[Object(E.jsx)("h1",{className:"text-center",children:"Crea account"}),e.errorMessage&&Object(E.jsx)("div",{className:"alert alert-danger",children:e.errorMessage}),Object(E.jsxs)("form",{onSubmit:"signin"===i?w:S,children:[Object(E.jsxs)("label",{htmlFor:"username",children:["Username:"," ",Object(E.jsx)("input",{minLength:1,required:!0,type:"text",id:"username",placeholder:"INSICURO",onChange:function(e){return u(e.target.value)}})]}),Object(E.jsxs)("label",{htmlFor:"password",children:["Password:"," ",Object(E.jsx)("input",{minLength:1,required:!0,type:"password",id:"password",placeholder:"INSICURO",onChange:function(e){return h(e.target.value)}})]}),Object(E.jsxs)("label",{htmlFor:"accountType",children:["Tipo di account:",Object(E.jsxs)("select",{id:"accountType",value:f,onChange:function(e){var t;x("internal"===(t=e.target.value)?"internal":"external"===t?"external":"internal")},children:[Object(E.jsx)("option",{value:"internal",children:"internal"}),Object(E.jsx)("option",{value:"external",children:"external"})]})]}),"external"===f&&Object(E.jsxs)("label",{htmlFor:"clientId",children:["Id Cliente (nome azienda):",Object(E.jsx)("input",{required:!0,value:g,type:"text",id:"clientId",onChange:function(e){return y(e.target.value)}})]}),Object(E.jsx)("div",{className:"submit text-center",children:Object(E.jsx)("input",{required:!0,className:"btn btn-primary mt-3",type:"submit",value:"Sign Up"})})]})]}),Object(E.jsx)("div",{className:"auth-wrapper",children:Object(E.jsxs)("div",{className:"auth-box",children:[Object(E.jsxs)("div",{className:"auth-nav",children:[Object(E.jsx)("div",{className:"text-center auth-nav-item ".concat("signin"===i&&"active"),onClick:function(){e.nullError(),c("signin")},children:"Sign In"}),Object(E.jsx)("div",{className:"text-center auth-nav-item ".concat("signup"===i&&"active"),onClick:function(){e.nullError(),c("signup")},children:"Sign Up"})]}),t]})})},T=n(46),I=n.n(T);n(1502),n(1503);var D=function(e){return Object(E.jsx)("div",{className:"loader",children:Object(E.jsx)(I.a,{type:"Circles",color:"blue"})})},U=a.a.createContext(null),z=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(j.a)(this,n),(r=t.call(this,e)).nullError=function(){r.setState({errorMessage:""})},r.setUsernameAndPassword=function(e){r.setState({usernameAndPassword:e})},r.handleAuthSuccess=function(e){r.setState({loading:!1}),console.log("auth success"),console.log(e),r.setState({isAuthenticated:!0,user:e})},r.handleTokenReceived=function(e){localStorage.setItem("authToken",e),r.authenticate()},r.handleAuthFailure=function(e){if(r.setState({loading:!1}),e instanceof f&&r.state.usernameAndPassword)(t=r.state.usernameAndPassword,new Promise(function(){var e=Object(d.a)(u.a.mark((function e(n,r){var a,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!y){e.next=3;break}return r(new m("wrong_credentials")),e.abrupt("return");case 3:return a={method:"POST",body:JSON.stringify(t)},e.next=6,fetch("/api/authenticateWithUsernameAndPassword",a);case 6:if((i=e.sent).ok){e.next=16;break}return e.t0=C,e.next=11,i.text();case 11:e.t1=e.sent,e.t2=r,(0,e.t0)(e.t1,e.t2),e.next=21;break;case 16:return e.t3=n,e.next=19,i.text();case 19:e.t4=e.sent,(0,e.t3)(e.t4);case 21:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())).then(r.handleTokenReceived).catch(r.handleAuthFailure);else{if(e instanceof f&&!r.state.usernameAndPassword)return void console.log("No token was found and user has not provided credentials yet.");if(e instanceof m&&"token_expired"===e.message)return;if(e instanceof m&&"server_failure"===e.message)return void r.setState({errorMessage:"Errore nel server. Riprovare pi\xf9 tardi."});if(e instanceof m&&"wrong_credentials"===e.message)return void r.setState({usernameAndPassword:void 0,errorMessage:"Credenziali rifiutate"});if(!(e instanceof x))throw e;r.setState({usernameAndPassword:void 0,errorMessage:""})}var t},r.handleSignupSuccess=function(e){r.setState({loading:!1}),e.token&&localStorage.setItem("authToken",e.token),r.setState({user:e,isAuthenticated:!0})},r.handleSignupFailure=function(e){if(r.setState({loading:!1}),e instanceof v&&"username_taken"===e.message)r.setState({errorMessage:"Questo username esiste gi\xe0."});else if(e instanceof v&&"invalid_json"===e.message)r.setState({errorMessage:"Errore. Controlla di aver inserito tutto correttamente"});else{if(!(e instanceof v&&"server_failure"===e.message))throw e;r.setState({errorMessage:"Errore nel server. Riprova pi\xf9 tardi."})}},r.authenticate=function(){r.setState({loading:!0}),new Promise(function(){var e=Object(d.a)(u.a.mark((function e(t,n){var r,a,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!y){e.next=3;break}return t(N.currentUser),e.abrupt("return");case 3:if(r=localStorage.getItem("authToken")){e.next=9;break}return n(new f("no_token")),e.abrupt("return");case 9:return a={method:"POST",headers:[["authorization",r]]},e.next=12,fetch("/api/authenticateWithToken",a);case 12:if((i=e.sent).ok){e.next=22;break}return e.t0=C,e.next=17,i.text();case 17:e.t1=e.sent,e.t2=n,(0,e.t0)(e.t1,e.t2),e.next=27;break;case 22:return e.t3=t,e.next=25,i.json();case 25:e.t4=e.sent,(0,e.t3)(e.t4);case 27:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()).then(r.handleAuthSuccess).catch(r.handleAuthFailure)},r.register=function(e){window.confirm("\n      Non usare username o password che utilizzi altrove! \n      Non sono tenuti in maniera sicura nel database!\n      ")&&(r.setState({loading:!0}),function(e){return new Promise((function(t,n){if(y)n(new v("username_taken"));else{var r={method:"POST",body:JSON.stringify(e)};fetch("/api/registerUser",r).then(function(){var e=Object(d.a)(u.a.mark((function e(r){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.ok){e.next=7;break}return e.next=3,r.text();case 3:a=e.sent,C(a,n),e.next=12;break;case 7:return e.t0=t,e.next=10,r.json();case 10:e.t1=e.sent,(0,e.t0)(e.t1);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}))}(e).then(r.handleSignupSuccess).catch(r.handleSignupFailure))},r.alterUserFavorites=function(e,t){var n=r.state.user;if(n){var a,i,c;"add"===e?null===n||void 0===n||null===(a=n.favorites)||void 0===a||a.push(t):n.favorites=null===n||void 0===n||null===(i=n.favorites)||void 0===i?void 0:i.filter((function(e){return e!=t})),r.setState({user:n});var s=(null===(c=r.state.user)||void 0===c?void 0:c.token)?r.state.user.token:"",l={method:"POST",body:JSON.stringify({id:t,operation:e}),headers:[["authorization",s]]};fetch("/api/updateUserFavorites",l).then(function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=7;break}return e.t0=alert,e.next=4,t.text();case 4:e.t1=e.sent,e.t2="could not update server favorites: "+e.t1,(0,e.t0)(e.t2);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},r.addUserApplicationLocally=function(e){var t,n=r.state.user;null===n||void 0===n||null===(t=n.applications)||void 0===t||t.push(e),r.setState({user:n})},r.state={isAuthenticated:!1,user:null,errorMessage:"",loading:!1},r}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.authenticate()}},{key:"componentDidUpdate",value:function(e,t){var n,r,a,i;(null===(n=t.usernameAndPassword)||void 0===n?void 0:n.username)===(null===(r=this.state.usernameAndPassword)||void 0===r?void 0:r.username)&&(null===(a=this.state.usernameAndPassword)||void 0===a?void 0:a.password)===(null===(i=t.usernameAndPassword)||void 0===i?void 0:i.password)||this.authenticate()}},{key:"render",value:function(){return this.state.loading?Object(E.jsx)(D,{}):this.state.isAuthenticated&&this.state.user?Object(E.jsx)(U.Provider,{value:{user:this.state.user,editFavorites:this.alterUserFavorites,editApplications:this.addUserApplicationLocally},children:this.props.children}):Object(E.jsx)(A,{nullError:this.nullError,errorMessage:this.state.errorMessage,registerWithUsernameAndPassword:this.register,setUsernameAndPassword:this.setUsernameAndPassword})}}]),n}(a.a.Component),M=n(17),F=function(){return new Promise(function(){var e=Object(d.a)(u.a.mark((function e(t,n){var r,a,i,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!y){e.next=4;break}return r=N.callBuilder(10),t(r),e.abrupt("return");case 4:return a=localStorage.getItem("authToken"),i={method:"GET",headers:[["authorization",a||""],["Content-Type","application/json"]]},e.next=9,fetch("/api/getJobCalls",i);case 9:if((c=e.sent).ok){e.next=19;break}return e.t0=C,e.next=14,c.text();case 14:e.t1=e.sent,e.t2=n,(0,e.t0)(e.t1,e.t2),e.next=23;break;case 19:return e.next=21,c.json();case 21:s=e.sent,t(s.map((function(e){return e.timePosted=new Date(e.timePosted),e})));case 23:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},J=function(){var e=Object(d.a)(u.a.mark((function e(t,n){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.token?t.token:"",a={method:"POST",body:JSON.stringify(n),headers:[["authorization",r]]},e.next=4,fetch("/api/createJobCall",a);case 4:if(e.sent.ok){e.next=9;break}return e.abrupt("return",!1);case 9:return e.abrupt("return",!0);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),_=function(){var e=Object(d.a)(u.a.mark((function e(t,n){var r,a,i,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!y){e.next=2;break}return e.abrupt("return",N.callBuilder(2)[0]);case 2:return r=t.token?t.token:"",a={method:"GET",headers:[["authorization",r]]},i="/api/getJobCallDetails/"+n,e.next=7,fetch(i,a);case 7:if(!(c=e.sent).ok){e.next=17;break}return e.next=11,c.json();case 11:return(s=e.sent).timePosted=new Date(s.timePosted),s.applications&&(console.log(s.applications),s.applications=s.applications.map((function(e){return Object(M.a)(Object(M.a)({},e),{},{timeApplied:new Date(e.timeApplied)})}))),e.abrupt("return",s);case 17:return e.abrupt("return",null);case 18:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),L=function(){var e=Object(d.a)(u.a.mark((function e(t,n,r){var a,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!y){e.next=2;break}return e.abrupt("return",!0);case 2:return a=r.token?r.token:"",i={method:"POST",headers:[["authorization",a]],body:JSON.stringify({applicationId:n,newStatus:t})},e.next=6,fetch("/api/updateApplicationStatus",i);case 6:if(e.sent.ok){e.next=11;break}return e.abrupt("return",!1);case 11:return e.abrupt("return",!0);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),R=function(){var e=Object(d.a)(u.a.mark((function e(t,n,r){var a,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!y){e.next=2;break}return e.abrupt("return",!0);case 2:return a=t.token?t.token:"",i={method:"POST",headers:[["authorization",a]],body:JSON.stringify({callId:n,seniority:r})},e.next=6,fetch("/api/createJobApplication",i);case 6:if(e.sent.ok){e.next=11;break}return e.abrupt("return",!1);case 11:return e.abrupt("return",!0);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),B=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,r,a,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!y){e.next=2;break}return e.abrupt("return",N.callBuilder(10));case 2:return n=t.token?t.token:"",r={method:"GET",headers:[["authorization",n]]},e.next=6,fetch("/api/getUserPosts",r);case 6:if((a=e.sent).ok){e.next=16;break}return e.t0=console,e.next=11,a.text();case 11:throw e.t1=e.sent,e.t0.log.call(e.t0,e.t1),new Error("failure");case 16:return e.next=18,a.json();case 18:return i=(i=e.sent).map((function(e){return Object(M.a)(Object(M.a)({},e),{},{timePosted:new Date(e.timePosted)})})),console.log(i),e.abrupt("return",i);case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,r,a,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!y){e.next=2;break}return e.abrupt("return",N.applicationBuilder(10));case 2:return n=t.token?t.token:"",r={method:"GET",headers:[["authorization",n]]},e.next=6,fetch("/api/getUserApplications",r);case 6:if((a=e.sent).ok){e.next=11;break}throw new Error("failure");case 11:return e.next=13,a.json();case 13:return i=(i=e.sent).map((function(e){return Object(M.a)(Object(M.a)({},e),{},{timeApplied:new Date(e.timeApplied)})})),console.log(i),e.abrupt("return",i);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(e){switch(e){case"confermato":return"green";case"review":return"orange";case"ricevuto":return"blue";case"rifiutato":return"red"}};function Q(e){var t=e.call.applications,n=Object(r.useState)(""),a=Object(P.a)(n,2),i=a[0],c=a[1],s=Object(r.useState)(!1),l=Object(P.a)(s,2),o=l[0],u=l[1],d=function(t,n){y||(u(!0),L(t,n,e.user).then((function(t){t?e.refresh():c("Non \xe8 stato possibile aggiornare lo stato"),u(!1)})))};return o?Object(E.jsx)(D,{}):t?Object(E.jsxs)("div",{className:"call-view user-owner text-left p-3",children:[Object(E.jsx)("h1",{children:e.call.title}),Object(E.jsx)("small",{children:e.call.timePosted.toLocaleDateString()}),Object(E.jsx)("p",{children:e.call.description}),i&&Object(E.jsx)("div",{className:"alert alert-danger",children:i}),Object(E.jsxs)("table",{className:"table table-striped",children:[Object(E.jsx)("thead",{className:"thead-dark",children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{children:"Nome"}),Object(E.jsx)("th",{children:"Seniority"}),Object(E.jsx)("th",{children:"Data"}),Object(E.jsx)("th",{children:"Status"}),Object(E.jsx)("th",{children:"CV"}),Object(E.jsx)("th",{children:"Azioni"})]})}),Object(E.jsx)("tbody",{children:t.map((function(e){return Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:e.applicantName}),Object(E.jsx)("td",{children:e.applicantSeniority}),Object(E.jsx)("td",{children:e.timeApplied.toLocaleDateString()}),Object(E.jsx)("td",{style:{color:H(e.applicationStatus),fontWeight:"bold"},children:e.applicationStatus}),Object(E.jsx)("td",{children:Object(E.jsx)("a",{href:"#",children:"Scarica CV"})}),Object(E.jsxs)("td",{className:"actions-tooltip",children:[Object(E.jsx)("span",{onClick:function(){return d("ricevuto",e.id)},children:"Ricevuto"}),Object(E.jsx)("span",{onClick:function(){return d("review",e.id)},children:"Review"}),Object(E.jsx)("span",{onClick:function(){return d("confermato",e.id)},children:"Confermato"}),Object(E.jsx)("span",{onClick:function(){return d("rifiutato",e.id)},children:"Rifiutato"})]})]},e.id)}))})]})]}):Object(E.jsx)("h1",{children:"No applications"})}function V(e){var t,n=null===(t=e.user.applications)||void 0===t?void 0:t.includes(e.call.id),a=Object(r.useState)(""),i=Object(P.a)(a,2),c=i[0],s=i[1],l=Object(r.useState)("junior"),o=Object(P.a)(l,2),j=o[0],b=o[1],h=Object(r.useState)(!1),p=Object(P.a)(h,2),O=p[0],f=p[1],x=Object(r.useContext)(U),m=function(){var t=Object(d.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),f(!0),t.next=4,R(e.user,e.call.id,j);case 4:t.sent?(null===x||void 0===x||x.editApplications(e.call.id),f(!1),e.refresh()):(s("Non siamo riusciti ad effettuare la tua application"),f(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=n?Object(E.jsx)("div",{className:"alert alert-info",children:"Hai gi\xe0 mandato la tua candidatura a questa call."}):Object(E.jsxs)("form",{onSubmit:m,children:[Object(E.jsx)("section",{children:Object(E.jsxs)("label",{htmlFor:"seniority",children:["Seniority:",Object(E.jsxs)("select",{id:"seniority",value:j,onChange:function(e){return b(e.target.value)},children:[Object(E.jsx)("option",{value:"junior",children:"Junior"}),Object(E.jsx)("option",{value:"senior",children:"Senior"})]})]})}),Object(E.jsx)("input",{type:"submit",value:"Submit",className:"btn btn-primary"})]});return O?Object(E.jsx)(D,{}):Object(E.jsxs)("div",{className:"call-view user-not-owner text-left p-3",children:[Object(E.jsx)("h1",{children:e.call.title}),Object(E.jsx)("small",{children:e.call.timePosted.toLocaleDateString()}),Object(E.jsx)("p",{children:e.call.description}),c&&Object(E.jsx)("div",{className:"alert alert-danger",children:c}),v]})}n(1504);var G,W,K=function(e){var t,n=Object(r.useState)(""),a=Object(P.a)(n,2),i=a[0],c=a[1],s=Object(r.useState)(null),l=Object(P.a)(s,2),o=l[0],u=l[1],d=Object(r.useState)(!1),j=Object(P.a)(d,2),b=j[0],h=j[1],p=Object(r.useState)(!1),O=Object(P.a)(p,2),f=O[0],x=O[1],m=Object(r.useContext)(U),v=e.match.params.id;m&&(t=m.user),Object(r.useEffect)((function(){x(!0),t&&_(t,v).then((function(e){e?(console.log(e),u(e),x(!1)):(c("Non siamo riusciti a scaricare i dati"),x(!1))})).catch((function(){return c("Non siamo riusciti a scaricare i dati")}))}),[]),Object(r.useEffect)((function(){var e;(null===(e=t)||void 0===e?void 0:e.uid)===(null===o||void 0===o?void 0:o.poster)?h(!0):h(!1)}),[h,t,o]);var g=function(){x(!0),t&&_(t,v).then((function(e){e?(u(e),x(!1)):(c("Non siamo riusciti a scaricare i dati"),x(!1))})).catch((function(){return c("Non siamo riusciti a scaricare i dati")}))};return f?Object(E.jsx)(D,{}):i?Object(E.jsx)("div",{className:"alert alert-danger",children:i}):t&&o?b?Object(E.jsx)(Q,{refresh:g,user:t,call:o}):Object(E.jsx)(V,{refresh:g,user:t,call:o}):Object(E.jsx)("h1",{children:i})},X=n(50);function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Z(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function $(e,t){var n=e.title,a=e.titleId,i=Z(e,["title","titleId"]);return r.createElement("svg",Y({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,ref:t,"aria-labelledby":a},i),n?r.createElement("title",{id:a},n):null,G||(G=r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),W||(W=r.createElement("path",{d:"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"})))}var ee,te,ne=r.forwardRef($);n.p;function re(){return(re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ae(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function ie(e,t){var n=e.title,a=e.titleId,i=ae(e,["title","titleId"]);return r.createElement("svg",re({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,ref:t,"aria-labelledby":a},i),n?r.createElement("title",{id:a},n):null,ee||(ee=r.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),te||(te=r.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})))}var ce,se,le=r.forwardRef(ie);n.p;function oe(){return(oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ue(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function de(e,t){var n=e.title,a=e.titleId,i=ue(e,["title","titleId"]);return r.createElement("svg",oe({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,ref:t,"aria-labelledby":a},i),n?r.createElement("title",{id:a},n):null,ce||(ce=r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),se||(se=r.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})))}var je=r.forwardRef(de);n.p;n.p;var be=ne,he=le,pe=je;var Oe=function(e){var t,n=Object(r.useState)(!1),a=Object(P.a)(n,2),i=a[0],c=a[1],s=Object(r.useState)(""),l=Object(P.a)(s,2),o=l[0],u=l[1],d=Object(r.useState)(""),j=Object(P.a)(d,2),b=j[0],h=j[1],p=Object(r.useContext)(U);if(p){var O=p.user;t=Object(E.jsxs)("div",{className:"add-call-form",children:[Object(E.jsx)("h1",{children:"Aggiungi call"}),Object(E.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:o,description:b};e.addCall(n),u(""),h(""),c(!1)},className:"add-call",children:[Object(E.jsx)("table",{cellPadding:1,children:Object(E.jsxs)("tbody",{children:[Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:Object(E.jsx)("label",{htmlFor:"title",children:"Titolo:"})}),Object(E.jsx)("td",{children:Object(E.jsx)("input",{type:"text",id:"title",value:o,onChange:function(e){var t=e.target.value;return u(t)}})})]}),Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:Object(E.jsx)("label",{htmlFor:"description",children:"Descrizione: "})}),Object(E.jsx)("td",{children:Object(E.jsx)("textarea",{cols:25,id:"description",value:b,onChange:function(e){var t=e.target.value;return h(t)}})})]}),Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:Object(E.jsx)("label",{htmlFor:"type",children:"Tipo: "})}),Object(E.jsx)("td",{children:Object(E.jsx)("input",{type:"text",readOnly:!0,value:O.accountType})})]}),"external"===O.accountType&&Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:Object(E.jsx)("label",{htmlFor:"clientid",children:"Codice cliente: "})}),Object(E.jsx)("td",{children:Object(E.jsx)("input",{type:"text",id:"clientid",readOnly:!0,value:O.clientId})})]})]})}),Object(E.jsx)("small",{className:"text-center mt-3",children:"Non \xe8 un bug che 'tipo' e 'codice cliente' non siano editabili. Il server prende queste due informazioni direttamente dall'oggetto utente autenticato."}),Object(E.jsxs)("div",{className:"buttons",children:[Object(E.jsx)("input",{type:"submit",value:"Submit",className:"btn btn-primary"}),Object(E.jsx)("button",{className:"btn btn-secondary",onClick:function(){u(""),h(""),c(!1)},children:"Annulla"})]})]})]})}return Object(E.jsxs)("div",{className:"call-card text-left",children:[Object(E.jsx)("div",{className:"call-taskbar",style:{backgroundColor:"grey"}}),Object(E.jsx)("div",{className:"call-add-box",onClick:function(){return c(!0)},children:Object(E.jsx)(pe,{})}),i&&t]})};var fe=function(e){var t,n="internal"===e.type?"blue":"orange",a=Object(r.useContext)(U),i=null===a||void 0===a?void 0:a.user,c=null===a||void 0===a?void 0:a.editFavorites,l=null===i||void 0===i||null===(t=i.favorites)||void 0===t?void 0:t.includes(e.id);return Object(E.jsxs)("div",{className:"call-card text-left",children:[Object(E.jsxs)("div",{className:"call-taskbar",style:{backgroundColor:n},children:[e.type,Object(E.jsx)("div",{className:l?"bookmark-icon bookmark-selected":"bookmark-icon",onClick:function(){l&&i?c&&c("remove",e.id):c&&c("add",e.id)},children:Object(E.jsx)(be,{})})]}),Object(E.jsxs)("div",{className:"body p-3",children:[Object(E.jsx)("div",{children:Object(E.jsx)("h2",{children:e.title})}),"external"===e.type&&Object(E.jsx)("div",{children:Object(E.jsx)("span",{children:e.clientId})}),Object(E.jsx)("div",{children:Object(E.jsx)("span",{children:e.timePosted.toLocaleDateString()})})]}),Object(E.jsx)("div",{className:"button-apply",children:Object(E.jsx)("button",{className:"btn btn-primary",children:Object(E.jsx)(s.b,{to:"/call/".concat(e.id),children:"Apply"})})})]})};n(1508);var xe=function(e){var t,n=Object(r.useState)("title"),a=Object(P.a)(n,2),i=a[0],c=a[1],s=Object(r.useState)(""),l=Object(P.a)(s,2),o=l[0],u=l[1],d=Object(r.useState)(""),j=Object(P.a)(d,2),b=j[0],h=j[1];switch(Object(r.useEffect)((function(){e.setQueryType(i),e.setQuery(o),e.setClientIdQuery(b)}),[i,o,b]),i){case"external":t=Object(E.jsxs)("div",{className:"filter-body",children:[Object(E.jsxs)("section",{children:[Object(E.jsx)("input",{type:"text",placeholder:"Cerca titolo",value:o,onChange:function(e){u(e.target.value)}}),Object(E.jsx)(he,{})]}),Object(E.jsxs)("section",{children:[Object(E.jsx)("input",{type:"text",placeholder:"Cerca codice cliente",value:b,onChange:function(e){h(e.target.value)}}),Object(E.jsx)(he,{})]})]});break;case"internal":case"title":t=Object(E.jsx)("div",{className:"filter-body",children:Object(E.jsxs)("section",{children:[" ",Object(E.jsx)("input",{type:"text",placeholder:"Cerca titolo",value:o,onChange:function(e){u(e.target.value)}}),Object(E.jsx)(he,{})]})})}return Object(E.jsxs)("div",{className:"filter-bar text-left",children:[t,Object(E.jsxs)("select",{value:i,onChange:function(e){var t;c("internal"===(t=e.target.value)?"internal":"external"===t?"external":"title")},children:[Object(E.jsx)("option",{value:"internal",children:"Call interne"}),Object(E.jsx)("option",{value:"external",children:"Call esterne"}),Object(E.jsx)("option",{value:"title",children:"Cerca per titolo"})]})]})};function me(e,t,n){return n?n.includes(e.id)&&n.includes(t.id)||!n.includes(e.id)&&!n.includes(t.id)?e.timePosted<t.timePosted?1:-1:n.includes(e.id)?-1:1:0}var ve=function(){var e=Object(r.useState)([]),t=Object(P.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(null),c=Object(P.a)(i,2),s=c[0],l=c[1],o=Object(r.useState)([]),j=Object(P.a)(o,2),b=j[0],h=j[1],p=Object(r.useState)("title"),O=Object(P.a)(p,2),f=O[0],x=O[1],m=Object(r.useState)(""),v=Object(P.a)(m,2),g=v[0],w=v[1],S=Object(r.useState)(""),k=Object(P.a)(S,2),N=k[0],C=k[1],A=Object(r.useState)(!1),T=Object(P.a)(A,2),I=T[0],z=T[1],_=Object(r.useContext)(U),L=null===_||void 0===_?void 0:_.user,R=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!y){e.next=2;break}return e.abrupt("return");case 2:if(!L){e.next=7;break}return e.next=5,J(L,t).catch((function(){return!1}));case 5:e.sent?F().then((function(e){a(e),h(e)})).catch((function(){l("Errore nel download delle call")})):l("Non siamo riusciti a creare la tua call");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){h("title"===f?n.filter((function(e){return e.title.includes(g)})):"external"===f?n.filter((function(e){var t;return"external"===e.type&&(null===(t=e.clientId)||void 0===t?void 0:t.includes(N))&&e.title.includes(g)})):"internal"===f?n.filter((function(e){return"internal"===e.type&&e.title.includes(g)})):n)}),[g,f,N,n]),Object(r.useEffect)((function(){z(!0),F().then((function(e){e=e.sort((function(e,t){return me(e,t,null===L||void 0===L?void 0:L.favorites)})),a(e),h(e),z(!1)})).catch((function(e){l("Error"),z(!1)}))}),[]),Object(r.useEffect)((function(){var e=n.sort((function(e,t){return me(e,t,null===L||void 0===L?void 0:L.favorites)}));a(Object(X.a)(e))}),[_]),I?Object(E.jsx)(D,{}):Object(E.jsxs)("div",{className:"dashboard",children:[s&&Object(E.jsx)("div",{className:"alert alert-danger",children:s}),Object(E.jsx)(xe,{setQuery:w,setQueryType:x,setClientIdQuery:C}),Object(E.jsxs)("div",{className:"calls",children:[s&&Object(E.jsx)("div",{className:"alert alert-danger",children:s}),Object(E.jsx)(Oe,{addCall:R}),b.map((function(e){return Object(E.jsx)(fe,Object(M.a)({},e),e.id)}))]})]})};n(1509);var ge=function(){var e=Object(r.useState)([]),t=Object(P.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(""),c=Object(P.a)(i,2),s=c[0],l=c[1],o=Object(r.useState)(!1),u=Object(P.a)(o,2),d=u[0],j=u[1],b=Object(r.useContext)(U);Object(r.useEffect)((function(){j(!0),b&&q(b.user).then((function(e){a(e),j(!1)})).catch((function(e){l("Non \xe8 stato possibile ottenere i tuoi post"),j(!1)}))}),[]);var h=n.map((function(e){var t,n,r;return Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:null===(t=e.target)||void 0===t?void 0:t.title}),Object(E.jsx)("td",{children:e.timeApplied.toLocaleDateString()}),Object(E.jsx)("td",{children:null===(n=e.target)||void 0===n?void 0:n.type}),Object(E.jsx)("td",{children:e.applicationStatus}),Object(E.jsx)("td",{className:"no-linebreak",children:Object(E.jsx)("a",{href:"/call/".concat(null===(r=e.target)||void 0===r?void 0:r.id),children:"Vai a call"})})]},e.id)}));return d?Object(E.jsx)(D,{}):Object(E.jsxs)("div",{className:"user-applications text-left p-4",children:[Object(E.jsx)("h1",{className:"text-center mb-3",children:"Candidature"}),s&&Object(E.jsx)("div",{className:"alert alert-danger",children:s}),Object(E.jsxs)("table",{className:"table table-striped table-responsive-sm",children:[Object(E.jsx)("thead",{className:"thead-dark",children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{children:"Titolo"}),Object(E.jsx)("th",{children:"Data"}),Object(E.jsx)("th",{children:"Tipo"}),Object(E.jsx)("th",{children:"Stato"}),Object(E.jsx)("th",{children:"Link"})]})}),Object(E.jsx)("tbody",{children:n&&h})]})]})};n(1510);var ye=function(){var e=Object(r.useState)([]),t=Object(P.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(""),c=Object(P.a)(i,2),s=c[0],l=c[1],o=Object(r.useState)(!1),u=Object(P.a)(o,2),d=u[0],j=u[1],b=Object(r.useContext)(U);Object(r.useEffect)((function(){j(!0),b&&B(b.user).then((function(e){a(e),j(!1)})).catch((function(e){l("Non \xe8 stato possibile ottenere i tuoi post"),j(!1)}))}),[]);var h=n.map((function(e){var t;return Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:e.title}),Object(E.jsx)("td",{children:e.timePosted.toLocaleDateString()}),Object(E.jsx)("td",{children:null===(t=e.applications)||void 0===t?void 0:t.length}),Object(E.jsx)("td",{className:"no-linebreak",children:Object(E.jsx)("a",{href:"/call/".concat(e.id),children:"Vai a call"})})]},e.id)}));return d?Object(E.jsx)(D,{}):Object(E.jsxs)("div",{className:"user-posts text-left p-4",children:[Object(E.jsx)("h1",{className:"text-center mb-3",children:"Post"}),s&&Object(E.jsx)("div",{className:"alert alert-danger",children:s}),Object(E.jsxs)("table",{className:"table table-striped table-responsive-sm",children:[Object(E.jsx)("thead",{className:"thead-dark",children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{children:"Titolo"}),Object(E.jsx)("th",{children:"Data"}),Object(E.jsx)("th",{children:"Candidature"}),Object(E.jsx)("th",{children:"Link"})]})}),Object(E.jsx)("tbody",{children:n&&h})]})]})},we=n(15),Se=n(1518);n(1511);var ke=function(){return Object(E.jsxs)(we.a,{expand:"sm",bg:"light",children:[Object(E.jsx)(we.a.Brand,{children:"Aron Winkler"}),Object(E.jsx)(we.a.Toggle,{"aria-controls":"navbar-nav"}),Object(E.jsx)(we.a.Collapse,{id:"navbar-nav",children:Object(E.jsxs)(Se.a,{className:"ml-auto mynav-nav",children:[Object(E.jsx)(we.a.Text,{children:Object(E.jsx)(s.b,{to:"/",children:"Dashboard"})}),Object(E.jsx)(we.a.Text,{children:Object(E.jsx)(s.b,{to:"/posts",children:"Post"})}),Object(E.jsx)(we.a.Text,{children:Object(E.jsx)(s.b,{to:"/applications",children:"Candidature"})}),Object(E.jsx)(we.a.Text,{children:Object(E.jsx)("a",{href:"#",children:"GitHub"})}),Object(E.jsx)(we.a.Text,{children:Object(E.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),localStorage.removeItem("authToken"),window.location.reload()},children:"Logout"})})]})})]})};var Ne=function(){return Object(E.jsx)(z,{children:Object(E.jsx)("div",{className:"App",children:Object(E.jsxs)(s.a,{children:[Object(E.jsx)(ke,{}),Object(E.jsxs)(l.c,{children:[Object(E.jsx)(l.a,{exact:!0,path:"/",component:ve}),Object(E.jsx)(l.a,{path:"/call/:id",component:K}),Object(E.jsx)(l.a,{path:"/posts",component:ye}),Object(E.jsx)(l.a,{path:"/applications",component:ge})]})]})})})};c.a.render(Object(E.jsx)(a.a.StrictMode,{children:Object(E.jsx)(Ne,{})}),document.getElementById("root"))},56:function(e,t,n){},57:function(e,t,n){}},[[1515,1,2]]]);
//# sourceMappingURL=main.5bb8cfb1.chunk.js.map