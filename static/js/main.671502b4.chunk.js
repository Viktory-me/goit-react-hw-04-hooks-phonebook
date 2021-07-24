(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{28:function(e,n,t){},34:function(e,n,t){},35:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);var a,c,r=t(1),o=t.n(r),i=t(19),s=t.n(i),b=t(22),u=t(18),j=t(38),l=(t(28),t(4)),m=t(5),d=m.a.section(a||(a=Object(l.a)(["\n  background-color: #44424232;\n  margin-top: 20px;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 10px;\n  padding-bottom: 15px;\n  &:not(:first-of-type) {\n    margin-bottom: 20px;\n  }\n"]))),x=t(2),O=function(e){var n=e.children;return Object(x.jsx)(d,{children:n})},p=m.a.div(c||(c=Object(l.a)(["\n  max-width: 320px;\n  border: thick double #c21111e2;\n  border-radius: 20px;\n  background-color: #ffffffba;\n  margin: 0 auto;\n"]))),h=p,f=t(9),g=t(8),v=t(15);t(34);var y,k,S,w,C,J,E,F=function(e){var n=e.onSubmit;return Object(x.jsx)(f.d,{initialValues:{name:"",number:""},validate:function(e){var n={};return e.name?e.number?/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(e.number)||(n.number="The number can only include numbers, spaces, dashes, brackets and start with +"):n.number="Enter number":n.name="Enter name",n},onSubmit:function(e,t){var a=t.setSubmitting,c=t.resetForm;n(e),a(!1),c()},children:Object(x.jsxs)(f.c,{autoComplete:"off",children:[Object(x.jsxs)("label",{htmlFor:"name",children:[Object(x.jsx)(g.a,{color:"#c21111e2"})," Name"]}),Object(x.jsx)(f.b,{type:"name",name:"name",placeholder:"enter name"}),Object(x.jsx)(f.a,{name:"name"}),Object(x.jsxs)("label",{htmlFor:"number",children:[Object(x.jsx)(v.a,{color:"#c21111e2"}),"Number"]}),Object(x.jsx)(f.b,{type:"tel",name:"number",placeholder:"+111-111-11"}),Object(x.jsx)(f.a,{name:"number"}),Object(x.jsx)("button",{type:"submit",children:"Add contact"})]})})},N=m.a.div(y||(y=Object(l.a)([""]))),I=m.a.input(k||(k=Object(l.a)([""]))),R=m.a.p(S||(S=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  margin: 0 auto;\n  margin-bottom: 5px;\n  font-weight: 500;\n"])));function B(e){var n=e.value,t=e.onChange;return Object(x.jsxs)(N,{children:[Object(x.jsxs)(R,{children:[Object(x.jsx)(g.c,{color:"#c21111e2"}),"Find contacts by name"]}),Object(x.jsx)(I,{type:"text",value:n,onChange:t,placeholder:"enter name"})]})}var D=m.a.ul(w||(w=Object(l.a)(["\n  list-style: none;\n  padding-inline-start: 5px;\n  margin: 0 auto;\n  margin-top: 5px;\n"]))),L=m.a.li(C||(C=Object(l.a)(["\n  padding: 5px 0 5px 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n"]))),M=m.a.p(J||(J=Object(l.a)(["\n  margin-left: 1px;\n  margin-right: 10px;\n  margin-top: 0;\n  margin-bottom: 0;\n"]))),P=m.a.button(E||(E=Object(l.a)([""])));var T=function(e){var n=e.contacts,t=e.onDeleteContact;return Object(x.jsx)(D,{children:n.map((function(e){var n=e.id,a=e.name,c=e.number;return Object(x.jsxs)(L,{children:[Object(x.jsx)(g.a,{color:"#c21111e2"}),Object(x.jsx)(M,{children:a})," ",Object(x.jsx)(v.a,{color:"#c21111e2"})," ",Object(x.jsx)(M,{children:c}),Object(x.jsx)(P,{onClick:function(){return t(n)},children:Object(x.jsx)(g.b,{})})]},n)}))})},z=[{id:"11",name:"Mike Wazowski",number:"22445566778"},{id:"22",name:"James P. \u201cSulley\u201d Sullivan",number:"55664411229"},{id:"23",name:"Randall \u201cRandy\u201d Boggs",number:"88999124562"}];var A=function(){var e=Object(r.useState)(z),n=Object(u.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(""),o=Object(u.a)(c,2),i=o[0],s=o[1],l=Object(r.useRef)(!0);Object(r.useEffect)((function(){if(l.current){var e=JSON.parse(localStorage.getItem("contacts"));return e&&a(e),void(l.current=!1)}localStorage.setItem("contacts",JSON.stringify(t))}),[t,a]);var m=function(){var e=i.toLowerCase();return t.filter((function(n){return n.name.toLowerCase().includes(e)}))}();return Object(x.jsxs)(h,{children:[Object(x.jsxs)(O,{children:[Object(x.jsx)("h1",{children:"Phonebook"}),Object(x.jsx)(F,{onSubmit:function(e){var n=e.name,c=e.number,r={id:Object(j.a)(),name:n,number:c};a([r].concat(Object(b.a)(t)))},contacts:t})]}),Object(x.jsxs)(O,{children:[Object(x.jsx)("h2",{children:"Contacts"}),Object(x.jsx)(B,{value:i,onChange:function(e){return s(e.currentTarget.value)}}),Object(x.jsx)(T,{contacts:m,onDeleteContact:function(e){a(t.filter((function(n){return n.id!==e})))}})]})]})};t(35);s.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(A,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.671502b4.chunk.js.map