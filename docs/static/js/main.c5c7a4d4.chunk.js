(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],{13:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t(7),s=t.n(c),o=t(6),r=t(2),l=(t(13),t(8)),i={get:function(e,n){var t=localStorage.getItem(e);return null===t?n:JSON.parse(t)},set:function(e,n){var t=JSON.stringify(n);localStorage.setItem(e,t)},remove:function(e){localStorage.removeItem(e)},clear:function(){localStorage.clear()}},u=t(0),d=function(){return Object(u.jsx)("div",{className:"containerHeader",children:Object(u.jsx)("p",{className:"title",children:"Organizador"})})};var j=function(){var e=i.get("clubList","")?i.get("clubList",""):l,n=Object(a.useState)(e),t=Object(r.a)(n,2),c=t[0],s=t[1],j=Object(a.useState)(""),O=Object(r.a)(j,2),b=O[0],p=O[1],m=Object(a.useState)(!1),h=Object(r.a)(m,2),f=h[0],k=h[1],x=Object(a.useState)(!1),g=Object(r.a)(x,2),v=g[0],W=g[1],y=Object(a.useState)("all"),N=Object(r.a)(y,2),S=N[0],C=N[1],E=function(e){var n=e.currentTarget.id;c.splice(n,1),s(Object(o.a)(c))};return Object(a.useEffect)((function(){i.set("clubs",c)}),[c]),Object(u.jsxs)("div",{children:[Object(u.jsx)("header",{className:"header",children:Object(u.jsx)(d,{})}),Object(u.jsxs)("main",{children:[Object(u.jsx)("section",{className:"form",children:Object(u.jsx)("form",{action:"",className:"formStyle",children:Object(u.jsxs)("select",{value:S,onChange:function(e){C(e.target.value)},children:[Object(u.jsx)("option",{value:"all",children:"Todos"}),Object(u.jsx)("option",{value:"openOnWeekdays",children:"Urgente"}),Object(u.jsx)("option",{value:"openOnWeekend",children:"\xbfEs necesario incluso en fin de semana?"})]})})}),Object(u.jsx)("ul",{className:"ulSection",children:c.filter((function(e){return"openOnWeekdays"===S?!0===e.openOnWeekdays:"openOnWeekend"!==S||!0===e.openOnWeekend})).map((function(e,n){return Object(u.jsx)("section",{className:"liStyle",children:Object(u.jsxs)("li",{children:[Object(u.jsxs)("h3",{children:["#",n,e.name]}),Object(u.jsxs)("p",{children:["Es urgente: ",!0===e.openOnWeekdays?"S\xed":"No"]}),Object(u.jsxs)("p",{children:["Necesario incluso en fin de semana:"," ",!0===e.openOnWeekend?"S\xed":"No"]}),Object(u.jsx)("button",{onClick:E,children:"Borrar nota"})]},n)})}))}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c.push({name:b,openOnWeekdays:f,openOnWeekend:v}),s(Object(o.a)(c)),p(""),k(""),W("")},className:"formSubmit",children:[Object(u.jsx)("label",{htmlFor:"",className:"addNote",children:"A\xf1adir nueva nota"}),Object(u.jsx)("input",{type:"text",name:"club",id:"club",placeholder:"A\xf1ade una nueva nota",className:"addInput",value:b,onChange:function(e){p(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"",className:"input",children:"\xbfEs urgente?"}),Object(u.jsx)("input",{type:"checkbox",name:"openOnWeekdays",id:"openOnWeekdays",checked:f,onChange:function(e){k(e.target.checked)}}),Object(u.jsx)("label",{htmlFor:"",className:"input",children:"\xbfEs necesario incluso en fin de semana?"}),Object(u.jsx)("input",{type:"checkbox",name:"openOnWeekend",id:"openOnWeekend",checked:v,onChange:function(e){W(e.target.checked)}}),Object(u.jsx)("input",{type:"submit",name:"btn",id:"btn",value:"a\xf1adir un nueva nota",className:"button"})]})]})]})};s.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"name":"Comprar nuevo teclado","openOnWeekdays":true,"openOnWeekend":true},{"name":"Recoger a Rolo del veterinario","openOnWeekdays":false,"openOnWeekend":true},{"name":"Arreglar manguera del patio","openOnWeekdays":false,"openOnWeekend":false},{"name":"Desayunar con compa\xf1ero de trabajo","openOnWeekdays":true,"openOnWeekend":false}]')}},[[15,1,2]]]);
//# sourceMappingURL=main.c5c7a4d4.chunk.js.map