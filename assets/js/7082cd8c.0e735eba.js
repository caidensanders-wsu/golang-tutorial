"use strict";(self.webpackChunkgolang_tutorial=self.webpackChunkgolang_tutorial||[]).push([[5714],{7899:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});const i=JSON.parse('{"id":"primitive-types-and-operations/operations-on-primitive-types","title":"Operations","description":"2. Operations on Primitive Types","source":"@site/docs/02-primitive-types-and-operations/operations-on-primitive-types.md","sourceDirName":"02-primitive-types-and-operations","slug":"/operations","permalink":"/golang-tutorial/docs/operations","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-primitive-types-and-operations/operations-on-primitive-types.md","tags":[],"version":"current","frontMatter":{"id":"operations-on-primitive-types","title":"Operations","slug":"/operations"},"sidebar":"tutorialSidebar","previous":{"title":"Primitive Types","permalink":"/golang-tutorial/docs/primitive-types"},"next":{"title":"Type Checking","permalink":"/golang-tutorial/docs/type-checking"}}');var o=t(4848),r=t(8453);const s={id:"operations-on-primitive-types",title:"Operations",slug:"/operations"},a="02. Primitive Types and Operations",l={},p=[{value:"2. Operations on Primitive Types",id:"2-operations-on-primitive-types",level:2},{value:"<code>operations_on_primitive_types.go</code>",id:"operations_on_primitive_typesgo",level:2},{value:"Output:",id:"output",level:3},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"02-primitive-types-and-operations",children:"02. Primitive Types and Operations"})}),"\n",(0,o.jsx)(n.h2,{id:"2-operations-on-primitive-types",children:"2. Operations on Primitive Types"}),"\n",(0,o.jsx)(n.p,{children:"Now that you understand the basic types, you can now perform operations on them. Operations can be of arithmetic, comparisons, or logical type. Go supports all of the expected operators."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Arithmetic"}),": ",(0,o.jsx)(n.code,{children:"+"}),", ",(0,o.jsx)(n.code,{children:"-"}),", ",(0,o.jsx)(n.code,{children:"*"}),", ",(0,o.jsx)(n.code,{children:"/"}),", ",(0,o.jsx)(n.code,{children:"%"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Comparisons"}),": ",(0,o.jsx)(n.code,{children:"=="}),", ",(0,o.jsx)(n.code,{children:"!="}),", ",(0,o.jsx)(n.code,{children:"<"}),", ",(0,o.jsx)(n.code,{children:">"}),", ",(0,o.jsx)(n.code,{children:"<="}),", ",(0,o.jsx)(n.code,{children:">="})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Logical"}),": ",(0,o.jsx)(n.code,{children:"&&"}),", ",(0,o.jsx)(n.code,{children:"||"}),", ",(0,o.jsx)(n.code,{children:"|"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"operations_on_primitive_typesgo",children:(0,o.jsx)(n.code,{children:"operations_on_primitive_types.go"})}),"\n",(0,o.jsx)(n.p,{children:"This file shows the operations that can be performed on Go's types."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc main() {\n\t// Let\'s define some variables to practice with.\n\tvar a int = 20\n\tvar b int = 10\n\n\t// Arithmetic operations.\n\tfmt.Println("a + b:", a + b)\n\tfmt.Println("a - b:", a - b)\n\tfmt.Println("a * b:", a * b)\n\tfmt.Println("a / b:", a / b)\n\tfmt.Println("a % b:", a & b)\n\n\t// Relational operations.\n\tfmt.Println("a == b:", a == b)\n\tfmt.Println("a !- b:", a != b)\n\tfmt.Println("a > b:", a > b)\n\tfmt.Println("a < b:", a < b)\n\n\t// Logical operations.\n\tfmt.Println("a > 5 && b < 5:", a > 5 && b < 5)\n\tfmt.Println("a > 5 || b < 5:", a > 5 || b < 5)\n\tfmt.Println("!(a > b):", !(a > b))\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"output",children:"Output:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"a + b: 30\na - b: 10\na * b: 200\na / b: 2\na % b: 0\na == b: false\na != b: true\na > b: true\na < b: false\na > 5 && b < 5: false\na > 5 || b < 5: true\n!(a > b): false\n"})}),"\n",(0,o.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(n.p,{children:"Now that we've learned about primitive types in Go and basic operations that can be performed on those primitive types, we can move onto slightly more advanced concepts that will help us in building better programs. See you in the next tutorial!"})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(6540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);