(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{15:function(e,t,a){e.exports={List:"Contacts_List__2V3YO",Button:"Contacts_Button__3WuIa"}},16:function(e,t,a){e.exports={Label:"Filter_Label__1q_sH",Input:"Filter_Input__2MQXK"}},17:function(e,t,a){e.exports={Title:"App_Title__2qxNr"}},36:function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),s=a(7),i=a.n(s),o=a(12),l=a(38),u=a(6),b=a.n(u),j=a(3),d=a(4),O={getSubmitData:Object(d.b)("contacts/getSubmitData"),handleDelete:Object(d.b)("contacts/handleDelete"),changeFilterValue:Object(d.b)("contacts/changeFilterValue")},m=a(1),h=function(e){e.submitMethod;var t=Object(j.b)(),a=Object(c.useState)(""),n=Object(o.a)(a,2),r=n[0],s=n[1],i=Object(c.useState)(""),u=Object(o.a)(i,2),d=u[0],h=u[1],p=Object(c.useState)(""),f=Object(o.a)(p,2),x=f[0],_=f[1],g=Object(l.a)(),v=function(e){var t=e.target,a=t.value,n=t.name,c=t.id;switch(n){case"name":s(a.trim());break;case"number":h(a);break;default:return}_(c)},C=function(){s(""),h(""),_("")};return Object(m.jsx)("div",{className:b.a.Container,children:Object(m.jsxs)("form",{className:b.a.Form,onSubmit:function(e){e.preventDefault(),t(O.getSubmitData({name:r,number:d,id:x})),C()},children:[Object(m.jsxs)("label",{className:b.a.Label,htmlFor:g,children:["Name",Object(m.jsx)("input",{className:b.a.Input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,onChange:v,id:Object(l.a)()})]}),Object(m.jsxs)("label",{children:["Number",Object(m.jsx)("input",{type:"tel",className:b.a.Input,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:v,value:d,id:Object(l.a)()})]}),Object(m.jsx)("button",{type:"submit",className:b.a.Button,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})},p=a(15),f=a.n(p),x=function(){var e=Object(j.c)((function(e){var t=e.contacts,a=e.filter;return t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))})),t=Object(j.b)();return Object(m.jsx)("div",{children:Object(m.jsx)("ul",{children:e&&e.map((function(e){return Object(m.jsxs)("li",{className:f.a.List,children:[e.name,": ",e.number,Object(m.jsx)("button",{className:f.a.Button,type:"button",onClick:function(){t(O.handleDelete(e.id))},children:"Delete"})]},e.id)}))})})},_=a(16),g=a.n(_),v=function(e){return e.filter},C=function(){var e=Object(j.c)(v),t=Object(j.b)();return Object(m.jsxs)("label",{className:g.a.Label,children:["\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0438\u043c\u0435\u043d\u0438:",Object(m.jsx)("input",{className:g.a.Input,type:"text",value:e,onChange:function(e){t(O.changeFilterValue(e.target.value))}})]})},N=a(17),L=a.n(N),k=a(11),y=(a(19),function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{className:L.a.Title,children:"PhoneBook"}),Object(m.jsx)(h,{}),Object(m.jsx)("h2",{className:L.a.Title,children:"Contacts"}),Object(m.jsx)(C,{}),Object(m.jsx)(x,{}),Object(m.jsx)(k.a,{})]})}),F=a(2),w=a(8),B=a(18),D={contactsReducer:Object(d.c)([],(n={},Object(w.a)(n,O.getSubmitData,(function(e,t){return e.find((function(e){return e.name.toLowerCase()===t.payload.name.toLowerCase()}))?(k.b.error("Hey, this name always here!"),Object(B.a)(e)):[].concat(Object(B.a)(e),[t.payload])})),Object(w.a)(n,O.handleDelete,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),n)),filterReducer:Object(d.c)("",Object(w.a)({},O.changeFilterValue,(function(e,t){return t.payload})))},I=a(5),S=a(21),A={key:"contacts",storage:a.n(S).a,blacklist:["filter"]},q=Object(F.b)({contacts:D.contactsReducer,filter:D.filterReducer}),z=Object(I.g)(A,q),T=Object(d.a)({reducer:z,devTools:!1,middleware:Object(d.d)({serializableCheck:{ignoredActions:[I.a,I.f,I.b,I.c,I.d,I.e]}})}),V={store:T,persistor:Object(I.h)(T)},M=a(22);i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(j.a,{store:V.store,children:Object(m.jsx)(M.a,{loading:null,persistor:V.persistor,children:Object(m.jsx)(y,{})})})}),document.getElementById("root"))},6:function(e,t,a){e.exports={Container:"Form_Container__2LBkn",Label:"Form_Label__1q0Y-",Input:"Form_Input__29dvv",Button:"Form_Button__Zkrc7"}}},[[36,1,2]]]);
//# sourceMappingURL=main.c8d99709.chunk.js.map