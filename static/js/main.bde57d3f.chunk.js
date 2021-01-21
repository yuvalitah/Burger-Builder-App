(this["webpackJsonpburger-application"]=this["webpackJsonpburger-application"]||[]).push([[0],[,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"n",(function(){return c})),n.d(t,"p",(function(){return i})),n.d(t,"f",(function(){return a})),n.d(t,"k",(function(){return o})),n.d(t,"l",(function(){return u})),n.d(t,"j",(function(){return s})),n.d(t,"m",(function(){return d})),n.d(t,"h",(function(){return l})),n.d(t,"i",(function(){return j})),n.d(t,"g",(function(){return b})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return f})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return g})),n.d(t,"o",(function(){return O}));var r="ADD_INGREDIENT",c="REMOVE_INGREDIENT",i="SET_INGREDIENTS",a="FETCH_INGREDIENTS_FAILED",o="PURCHASE_BURGER_START",u="PURCHASE_BURGER_SUCCESS",s="PURCHASE_BURGER_FAIL",d="PURCHASE_INIT",l="FETCH_ORDERS_START",j="FETCH_ORDERS_SUCCESS",b="FETCH_ORDERS_FAIL",p="AUTH_START",f="AUTH_SUCCESS",h="AUTH_FAIL",g="AUTH_LOGOUT",O="SET_AUTH_REDIRECT_PATH"},,function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(10),c=function(e,t){return Object(r.a)(Object(r.a)({},e),t)},i=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}return n}},,,,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"i",(function(){return a})),n.d(t,"f",(function(){return o})),n.d(t,"g",(function(){return s})),n.d(t,"h",(function(){return d})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return g})),n.d(t,"d",(function(){return h})),n.d(t,"j",(function(){return O})),n.d(t,"c",(function(){return _}));var r=n(2),c=n(18),i=function(e){return{type:r.a,ingredientName:e}},a=function(e){return{type:r.n,ingredientName:e}},o=function(){return function(e){c.a.get("https://burger-application-93383.firebaseio.com/ingredients.json").then((function(t){return e((n=t.data,{type:r.p,ingredients:n}));var n})).catch((function(t){return e({type:r.f})}))}},u=n(10),s=function(e,t){return function(n){n({type:r.k}),c.a.post("/orders.json?auth="+t,e).then((function(t){n(function(e,t){return{type:r.l,orderId:e,orderData:t}}(t.data.name,e))})).catch((function(e){return n(function(e){return{type:r.j,error:e}}(e))}))}},d=function(){return{type:r.m}},l=function(e,t){return function(n){n({type:r.h});var i="?auth=".concat(e,'&orderBy="userId"&equalTo="').concat(t,'"');c.a.get("/orders.json"+i).then((function(e){var t,c=[];for(var i in e.data)c.push(Object(u.a)(Object(u.a)({},e.data[i]),{},{id:i}));n((t=c,{type:r.i,orders:t}))})).catch((function(e){return function(e){return{type:r.g,error:e}}(e)}))}},j=n(32),b=n.n(j),p=function(e,t){return{type:r.e,idToken:e,userId:t}},f=function(e){return function(t){setTimeout((function(){t(h())}),1e3*e)}},h=function(){return{type:r.c}},g=function(e,t,n){return function(c){c({type:r.d});var i={email:e,password:t,returnSecureToken:!0},a="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDt8t0H6_pXngtd_wQ74zsNmU8G1JvYL5g";n||(a="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDt8t0H6_pXngtd_wQ74zsNmU8G1JvYL5g"),b.a.post(a,i).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("expirationDate",t.toString()),c(p(e.data.idToken,e.data.localId)),c(f(e.data.expiresIn))})).catch((function(e){c(function(e){return{type:r.b,error:e}}(e.response.data.error))}))}},O=function(e){return{type:r.o,path:e}},_=function(){return function(e){var t=JSON.parse(JSON.parse(localStorage.getItem("persist:rootReducer"))?JSON.parse(localStorage.getItem("persist:rootReducer")).auth:null),n=t?t.token:null;if(n){var r=new Date(localStorage.getItem("expirationDate"));if(r>new Date){var c=t.userId;e(p(n,c)),e(f((r.getTime()-(new Date).getTime())/1e3))}else e(h())}else e(h())}}},function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2vbxL",BreadTop:"BurgerIngredient_BreadTop__3WZCr",Seeds1:"BurgerIngredient_Seeds1__NO-kX",Seeds2:"BurgerIngredient_Seeds2__1SiyR",Meat:"BurgerIngredient_Meat__2toVZ",Cheese:"BurgerIngredient_Cheese__ecY23",Salad:"BurgerIngredient_Salad__icck1",Bacon:"BurgerIngredient_Bacon__Iy4W1"}},,function(e,t,n){"use strict";var r=n(32),c=n.n(r).a.create({baseURL:"https://burger-application-93383.firebaseio.com/"});t.a=c},,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__2MYL-",Open:"SideDrawer_Open__34KBf",Close:"SideDrawer_Close__9QZSC",Logo:"SideDrawer_Logo__11zMB"}},,,,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__3VVAe",Label:"BuildControl_Label__3lpLe",Less:"BuildControl_Less__1dc80",More:"BuildControl_More__2swqa"}},,,,function(e,t,n){"use strict";var r=n(0),c=(n(1),n(60)),i=n.n(c);t.a=function(e){return e.show?Object(r.jsx)("div",{className:i.a.Backdrop,onClick:e.clicked}):null}},function(e,t,n){"use strict";var r=n(0),c=(n(1),n(63)),i=n.n(c),a=n(30);t.a=function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(a.a,{show:e.show,clicked:e.modalClosed}),Object(r.jsx)("div",{className:i.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"},children:e.children})]})}},,,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__3HLtl",Logo:"Toolbar_Logo__3efVB",DesktopOnly:"Toolbar_DesktopOnly__2qmqL"}},function(e,t,n){"use strict";var r=n(0),c=(n(1),n(44)),i=n.n(c);t.a=function(e){return Object(r.jsx)("button",{disabled:e.disabled,className:[i.a.Button,i.a[e.btnType]].join(" "),onClick:e.clicked,children:e.children})}},function(e,t,n){"use strict";var r=n(0),c=(n(1),n(64)),i=n.n(c);t.a=function(){return Object(r.jsx)("div",{className:i.a.Loader,children:"Loading..."})}},,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2_jNg",active:"NavigationItem_active__3IrPL"}},,,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__2FUBA",OrderButton:"BuildControls_OrderButton__KNXNl",enable:"BuildControls_enable__2rBSM"}},function(e,t,n){e.exports={Button:"Button_Button__3SdNT",Success:"Button_Success__1PGXh",Danger:"Button_Danger__1eGWm"}},function(e,t,n){"use strict";var r=n(0),c=n(10),i=n(65),a=n(66),o=n(72),u=n(70),s=n(1),d=n(31);t.a=function(e,t){return function(n){Object(o.a)(l,n);var s=Object(u.a)(l);function l(){var e;Object(i.a)(this,l);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=s.call.apply(s,[this].concat(n))).state={error:null},e.reqInterceptor=void 0,e.resInterceptor=void 0,e.errorConfirmedHandler=function(){e.setState({error:null})},e}return Object(a.a)(l,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){return e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.a,{show:this.state.error,modalClosed:this.errorConfirmedHandler,children:this.state.error?this.state.error.message:null}),Object(r.jsx)(e,Object(c.a)({},this.props))]})}}]),l}(s.Component)}},,,,,,,,,,function(e,t,n){"use strict";var r=n(0),c=n(71),i=(n(1),n(62)),a=n.n(i),o=n(16),u=n.n(o),s=function(e){var t=null;switch(e.type){case"bread-bottom":t=Object(r.jsx)("div",{className:u.a.BreadBottom});break;case"bread-top":t=Object(r.jsxs)("div",{className:u.a.BreadTop,children:[Object(r.jsx)("div",{className:u.a.Seeds1}),Object(r.jsx)("div",{className:u.a.Seeds2})]});break;case"meat":t=Object(r.jsx)("div",{className:u.a.Meat});break;case"cheese":t=Object(r.jsx)("div",{className:u.a.Cheese});break;case"salad":t=Object(r.jsx)("div",{className:u.a.Salad});break;case"bacon":t=Object(r.jsx)("div",{className:u.a.Bacon});break;default:t=null}return t};t.a=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(c.a)(Array(e.ingredients[t])).map((function(e,n){return Object(r.jsx)(s,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return Object(r.jsxs)("div",{className:a.a.Burger,children:[Object(r.jsx)(s,{type:"bread-top"}),t.length?t:Object(r.jsx)("p",{children:"Please start adding Ingredients!"}),Object(r.jsx)(s,{type:"bread-bottom"})]})}},function(e,t,n){e.exports={Content:"Layout_Content__3-AC0"}},function(e,t,n){e.exports={Logo:"Logo_Logo__wP2ht"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__3Uee5"}},function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__kw8Jq"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3pc8q"}},,function(e,t,n){e.exports={Burger:"Burger_Burger__dRCoW"}},function(e,t,n){e.exports={Modal:"Modal_Modal__2cLky"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__Ltu0j",load2:"Spinner_load2__3VHns"}},,,,,,,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),i=n.n(c),a=n(27),o=n.n(a),u=(n(78),n(11)),s=n.n(u),d=n(17),l=n(21),j=n(56),b=n.n(j),p=n(34),f=n.n(p),h=n.p+"static/media/burger-logo.ec69c7f6.png",g=n(57),O=n.n(g),_=function(){return Object(r.jsx)("div",{className:O.a.Logo,children:Object(r.jsx)("img",{src:h,alt:"MyBurger"})})},x=n(58),m=n.n(x),v=n(39),B=n.n(v),S=n(19),I=function(e){return Object(r.jsx)("li",{className:B.a.NavigationItem,children:Object(r.jsx)(S.b,{to:e.link,exact:e.exact,activeClassName:B.a.active,children:e.children})})},k=function(e){return Object(r.jsxs)("ul",{className:m.a.NavigationItems,children:[Object(r.jsx)(I,{link:"/Burger-Builder-App",exact:!0,children:"Burger Builder"}),e.isAuthenticated?Object(r.jsx)(I,{link:"/Burger-Builder-App/orders",children:"Orders"}):null,e.isAuthenticated?Object(r.jsx)(I,{link:"/Burger-Builder-App/logout",children:"Logout"}):Object(r.jsx)(I,{link:"/Burger-Builder-App/auth",children:"Authenticate"})]})},N=n(59),A=n.n(N),y=function(e){return Object(r.jsxs)("div",{className:A.a.DrawerToggle,onClick:e.clicked,children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})},C=function(e){return Object(r.jsxs)("header",{className:f.a.Toolbar,children:[Object(r.jsx)(y,{clicked:e.drawerToggleClicked}),Object(r.jsx)("div",{className:f.a.Logo,children:Object(r.jsx)(_,{})}),Object(r.jsx)("nav",{className:f.a.DesktopOnly,children:Object(r.jsx)(k,{isAuthenticated:e.isAuth})})]})},T=n(22),w=n.n(T),E=n(30),L=function(e){var t=[w.a.SideDrawer,w.a.Close];return e.open&&(t=[w.a.SideDrawer,w.a.Open]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(E.a,{show:e.open,clicked:e.closed}),Object(r.jsxs)("div",{className:t.join(" "),onClick:e.closed,children:[Object(r.jsx)("div",{className:w.a.Logo,children:Object(r.jsx)(_,{})}),Object(r.jsx)("nav",{children:Object(r.jsx)(k,{isAuthenticated:e.isAuth})})]})]})},R=n(14),D=Object(R.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))((function(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),i=n[0],a=n[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(C,{isAuth:e.isAuthenticated,drawerToggleClicked:function(){a(!i)}}),Object(r.jsx)(L,{isAuth:e.isAuthenticated,open:i,closed:function(){a(!1)}}),Object(r.jsx)("main",{className:b.a.Content,children:e.children})]})})),P=n(10),U=n(55),H=n(43),M=n.n(H),F=n(26),z=n.n(F),G=function(e){return Object(r.jsxs)("div",{className:z.a.BuildControl,children:[Object(r.jsx)("div",{className:z.a.Label,children:e.label}),Object(r.jsx)("button",{className:z.a.Less,onClick:e.removed,disabled:e.disabled,children:"Less"}),Object(r.jsx)("button",{className:z.a.More,onClick:e.added,children:"More"})]})},q=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],J=function(e){return Object(r.jsxs)("div",{className:M.a.BuildControls,children:[Object(r.jsxs)("p",{children:["Current Price: ",Object(r.jsx)("strong",{children:e.price.toFixed(2)})]}),q.map((function(t){return Object(r.jsx)(G,{label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]},t.label)})),Object(r.jsx)("button",{className:M.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered,children:e.isAuth?"ORDER NOW":"SIGN UP TO ORDER"})]})},W=n(31),V=n(35),X=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{style:{textTransform:"capitalize"},children:t}),":"," ",e.ingredients[t]]},t)}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:"Your Order"}),Object(r.jsx)("p",{children:"A delicious burger with the following ingredients:"}),Object(r.jsx)("ul",{children:t}),Object(r.jsx)("p",{children:Object(r.jsxs)("strong",{children:["Total Price: ",e.price.toFixed(2)]})}),Object(r.jsx)("p",{children:"Continue to Checkout"}),Object(r.jsx)(V.a,{btnType:"Danger",clicked:e.purchaseCancelled,children:"CANCEL"}),Object(r.jsx)(V.a,{btnType:"Success",clicked:e.purchaseContinued,children:"CONTINUE"})]})},Y=n(36),Q=n(45),Z=n(18),K=n(15),$=Object(R.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}}),(function(e){return{onIngredientAdded:function(t){return e(K.a(t))},onIngredientRemoved:function(t){return e(K.i(t))},onInitIngredients:function(){return e(K.f())},onInitPurchase:function(){return e(K.h())},onSetAuthRedirectPath:function(t){return e(K.j(t))}}}))(Object(Q.a)((function(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),i=n[0],a=n[1];Object(c.useEffect)((function(){(function(){var t=Object(d.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.onInitIngredients();case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var o=function(){a(!1)},u=Object(P.a)({},e.ings);for(var j in u)u[j]=u[j]<=0;var b=Object(r.jsx)(Y.a,{}),p=e.error?Object(r.jsx)("p",{children:"Ingredients can't be loaded!"}):Object(r.jsx)(Y.a,{});return e.ings&&(p=Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(U.a,{ingredients:e.ings}),Object(r.jsx)(J,{ingredientAdded:e.onIngredientAdded,ingredientRemoved:e.onIngredientRemoved,disabled:u,price:e.price,purchasable:function(e){var t=0;for(var n in e)t+=e[n];return t>0}(e.ings),isAuth:e.isAuthenticated,ordered:function(){e.isAuthenticated?a(!0):(e.onSetAuthRedirectPath("/Burger-Builder-App/checkout"),e.history.push("/Burger-Builder-App/auth"))}})]}),b=Object(r.jsx)(X,{ingredients:e.ings,price:e.price,purchaseCancelled:o,purchaseContinued:function(){e.onInitPurchase(),e.history.push("/Burger-Builder-App/checkout")}})),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(W.a,{show:i,modalClosed:o,children:b}),p]})}),Z.a)),ee=n(5),te=Object(R.b)(null,(function(e){return{onLogout:function(){return e(K.d())}}}))((function(e){return Object(c.useEffect)((function(){(function(){var t=Object(d.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.onLogout();case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(r.jsx)(ee.a,{to:"/Burger-Builder-App"})})),ne=function(e){return function(t){var n=Object(c.useState)(null),i=Object(l.a)(n,2),a=i[0],o=i[1];Object(c.useEffect)((function(){(function(){var t=Object(d.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e().then((function(e){return o(e.default)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var u=a;return u?Object(r.jsx)(u,Object(P.a)({},t)):null}},re=Object(R.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{onTryAutoSignup:function(){return e(K.c())}}}))((function(e){Object(c.useEffect)((function(){(function(){var t=Object(d.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.onTryAutoSignup();case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var t=ne((function(){return n.e(3).then(n.bind(null,112))})),i=ne((function(){return n.e(5).then(n.bind(null,113))})),a=ne((function(){return n.e(4).then(n.bind(null,111))})),o=Object(r.jsxs)(ee.d,{children:[Object(r.jsx)(ee.b,{path:"/Burger-Builder-App/auth",component:a}),Object(r.jsx)(ee.b,{path:"/Burger-Builder-App",exact:!0,component:$}),Object(r.jsx)(ee.a,{to:"/Burger-Builder-App"})]});return e.isAuthenticated&&(o=Object(r.jsxs)(ee.d,{children:[Object(r.jsx)(ee.b,{path:"/Burger-Builder-App/checkout",component:t}),Object(r.jsx)(ee.b,{path:"/Burger-Builder-App/orders",component:i}),Object(r.jsx)(ee.b,{path:"/Burger-Builder-App/logout",component:te}),Object(r.jsx)(ee.b,{path:"/Burger-Builder-App/auth",component:a}),Object(r.jsx)(ee.b,{path:"/Burger-Builder-App",exact:!0,component:$}),Object(r.jsx)(ee.a,{to:"/Burger-Builder-App"})]})),Object(r.jsx)("div",{children:Object(r.jsx)(D,{children:o})})})),ce=n(12),ie=n(67),ae=n(33),oe=n(68),ue=n.n(oe),se=n(23),de=n(2),le=n(4),je={ingredients:null,totalPrice:4,error:!1,building:!1},be={salad:.5,cheese:.4,meat:1.3,bacon:.7},pe=function(e,t){var n=Object(se.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:Object(le.b)(e.ingredients,n),totalPrice:e.totalPrice+be[t.ingredientName],building:!0};return Object(le.b)(e,r)},fe=function(e,t){var n=Object(se.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:Object(le.b)(e.ingredients,n),totalPrice:e.totalPrice-be[t.ingredientName],building:!0};return Object(le.b)(e,r)},he=function(e,t){return Object(le.b)(e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},totalPrice:4,error:!1,building:!1})},ge=function(e,t){return Object(le.b)(e,{error:!0})},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case de.a:return pe(e,t);case de.n:return fe(e,t);case de.p:return he(e,t);case de.f:return ge(e);default:return e}},_e={orders:[],loading:!1,purchased:!1},xe=function(e,t){return Object(le.b)(e,{purchased:!1})},me=function(e,t){return Object(le.b)(e,{loading:!0})},ve=function(e,t){var n=Object(le.b)(t.orderData,{id:t.orderId});return Object(le.b)(e,{loading:!1,purchased:!0,orders:e.orders.concat(n)})},Be=function(e,t){return Object(le.b)(e,{loading:!1})},Se=function(e,t){return Object(le.b)(e,{loading:!0})},Ie=function(e,t){return Object(le.b)(e,{orders:t.orders,loading:!1})},ke=function(e,t){return Object(le.b)(e,{loading:!1})},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case de.m:return xe(e);case de.k:return me(e);case de.l:return ve(e,t);case de.j:return Be(e);case de.h:return Se(e);case de.i:return Ie(e,t);case de.g:return ke(e);default:return e}},Ae={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/Burger-Builder-App"},ye=function(e,t){return Object(le.b)(e,{error:null,loading:!0})},Ce=function(e,t){return Object(le.b)(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})},Te=function(e,t){return Object(le.b)(e,{error:t.error,loading:!1})},we=function(e,t){return Object(le.b)(e,{token:null,userId:null})},Ee=function(e,t){return Object(le.b)(e,{authRedirectPath:t.path})},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case de.d:return ye(e);case de.e:return Ce(e,t);case de.b:return Te(e,t);case de.c:return we(e);case de.o:return Ee(e,t);default:return e}},Re=Object(ce.c)({burgerBuilder:Oe,order:Ne,auth:Le}),De={key:"rootReducer",storage:ue.a},Pe=Object(ae.a)(De,Re),Ue=n(69),He=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ce.d,Me=Object(ce.e)(Pe,He(Object(ce.a)(ie.a))),Fe=Object(ae.b)(Me),ze=Object(r.jsx)(R.a,{store:Me,children:Object(r.jsx)(S.a,{children:Object(r.jsx)(Ue.a,{persistor:Fe,children:Object(r.jsx)(re,{})})})});o.a.render(Object(r.jsxs)(i.a.StrictMode,{children:[ze," "]}),document.getElementById("root"))}],[[104,1,2]]]);
//# sourceMappingURL=main.bde57d3f.chunk.js.map