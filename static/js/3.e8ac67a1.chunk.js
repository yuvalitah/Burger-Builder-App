(this["webpackJsonpburger-application"]=this["webpackJsonpburger-application"]||[]).push([[3],{105:function(e,t,a){"use strict";var n=a(10),i=a(0),c=(a(1),a(106)),l=a.n(c);t.a=function(e){var t=null,a=[l.a.InputElement];e.invalid&&e.shouldValidate&&e.touched&&a.push(l.a.Invalid);var c=null;switch(e.invalid&&e.touched&&(c=Object(i.jsxs)("p",{className:l.a.ValidationError,children:["Please enter a valid ",e.valueType]})),e.elementType){case"input":t=Object(i.jsx)("input",Object(n.a)(Object(n.a)({className:a.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"textarea":t=Object(i.jsx)("textarea",Object(n.a)(Object(n.a)({className:a.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"select":t=Object(i.jsx)("select",{className:a.join(" "),value:e.value,onChange:e.changed,children:e.elementConfig.options.map((function(e){return Object(i.jsx)("option",{value:e.value,children:e.displayValue},e.value)}))});break;default:t=Object(i.jsx)("input",Object(n.a)(Object(n.a)({className:a.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}))}return Object(i.jsxs)("div",{className:l.a.Input,children:[Object(i.jsx)("label",{className:l.a.Label,children:e.label}),t,c]})}},106:function(e,t,a){e.exports={Input:"Input_Input__161Ey",Label:"Input_Label__1qT1V",InputElement:"Input_InputElement__1O_Yj",Invalid:"Input_Invalid__1ghvd",ValidationError:"Input_ValidationError__MVVJk"}},107:function(e,t,a){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__1FDIh"}},108:function(e,t,a){e.exports={ContactData:"ContactData_ContactData__2M_pl"}},112:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(1),c=a(55),l=a(35),r=a(107),u=a.n(r),o=function(e){return Object(n.jsxs)("div",{className:u.a.CheckoutSummary,children:[Object(n.jsx)("h1",{children:"We hope it tastes well!"}),Object(n.jsx)("div",{style:{width:"100%",margin:"auto"},children:Object(n.jsx)(c.a,{ingredients:e.ingredients})}),Object(n.jsx)(l.a,{btnType:"Danger",clicked:e.checkoutCancelled,children:"CANCEL"}),Object(n.jsx)(l.a,{btnType:"Success",clicked:e.checkoutContinued,children:"CONTINUE"})]})},d=a(5),s=a(23),p=a(21),h=a(108),v=a.n(h),j=a(18),b=a(36),g=a(105),m=a(14),f=a(45),O=a(15),y=a(4),C=Object(m.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onOrderBurger:function(t,a){return e(O.g(t,a))}}}))(Object(f.a)((function(e){var t=Object(i.useState)({name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP Code"},value:"",validation:{required:!0,minLength:5,maxLength:5},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-Mail"},value:"",validation:{required:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",valid:!0}}),a=Object(p.a)(t,2),c=a[0],r=a[1],u=Object(i.useState)(!1),o=Object(p.a)(u,2),d=o[0],h=o[1],j=[];for(var m in c)j.push({id:m,config:c[m]});var f=Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a={country:"",deliveryMethod:"",email:"",name:"",street:"",zipCode:""};for(var n in c)a[n]=c[n].value;var i={ingredients:e.ings,price:e.price,orderData:a,userId:e.userId};e.onOrderBurger(i,e.token)},children:[j.map((function(e){return Object(n.jsx)(g.a,{elementType:e.config.elementType,elementConfig:e.config.elementConfig,value:e.config.value,invalid:!e.config.valid,shouldValidate:e.config.validation,touched:e.config.touched,valueType:e.id,changed:function(t){return function(e,t){var a=Object(y.b)(c[t],{value:e.target.value,valid:Object(y.a)(e.target.value,c[t].validation),touched:!0}),n=Object(y.b)(c,Object(s.a)({},t,a)),i=!0;for(var l in n)i=n[l].valid&&i;r(n),h(i)}(t,e.id)}},e.id)})),Object(n.jsx)(l.a,{btnType:"Success",disabled:!d,children:"ORDER"})]});return e.loading&&(f=Object(n.jsx)(b.a,{})),Object(n.jsxs)("div",{className:v.a.ContactData,children:[Object(n.jsx)("h4",{children:"Enter your contact data"}),f]})}),j.a));t.default=Object(m.b)((function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}}))((function(e){var t=Object(n.jsx)(d.a,{to:"/"});if(e.ings){var a=e.purchased?Object(n.jsx)(d.a,{to:"/"}):null;t=Object(n.jsxs)("div",{children:[a,Object(n.jsx)(o,{ingredients:e.ings,checkoutCancelled:function(){e.history.goBack()},checkoutContinued:function(){e.history.replace("/checkout/contact-data")}}),Object(n.jsx)(d.b,{path:e.match.path+"/contact-data",component:C})]})}return t}))}}]);
//# sourceMappingURL=3.e8ac67a1.chunk.js.map