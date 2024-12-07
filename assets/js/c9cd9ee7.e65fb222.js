"use strict";(self.webpackChunkgolang_tutorial=self.webpackChunkgolang_tutorial||[]).push([[6800],{5766:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"input-output/input-output","title":"Input & Output","description":"IO (Input Output) operations are critical for interacting with users or systems, as well as debugging. In Go, the fmt package, part of the standard library, provides functions for basic I/O operations.","source":"@site/docs/01-input-output/input-output.md","sourceDirName":"01-input-output","slug":"/input-output","permalink":"/golang-tutorial/docs/input-output","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/01-input-output/input-output.md","tags":[],"version":"current","frontMatter":{"id":"input-output","title":"Input & Output","slug":"/input-output"},"sidebar":"tutorialSidebar","previous":{"title":"Your First Program in Go","permalink":"/golang-tutorial/docs/helloworld"},"next":{"title":"Variables & Assignments","permalink":"/golang-tutorial/docs/variables-and-assignments"}}');var a=e(4848),r=e(8453);const o={id:"input-output",title:"Input & Output",slug:"/input-output"},l="IO (Input/Output) in Go",s={},u=[{value:"Printing Output",id:"printing-output",level:2},{value:"Example",id:"example",level:3},{value:"Reading Input",id:"reading-input",level:2},{value:"Example (reading single input)",id:"example-reading-single-input",level:3},{value:"Example (reading multiple inputs)",id:"example-reading-multiple-inputs",level:3},{value:"Eaxmple (reading a full line)",id:"eaxmple-reading-a-full-line",level:3},{value:"Example (formatted input)",id:"example-formatted-input",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"io-inputoutput-in-go",children:"IO (Input/Output) in Go"})}),"\n",(0,a.jsxs)(t.p,{children:["IO (Input Output) operations are critical for interacting with users or systems, as well as debugging. In Go, the ",(0,a.jsx)(t.code,{children:"fmt"})," package, part of the standard library, provides functions for basic I/O operations."]}),"\n",(0,a.jsx)(t.h2,{id:"printing-output",children:"Printing Output"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"fmt"})," package provides several different functions to display output to the console. We will be working with ",(0,a.jsx)(t.code,{children:"fmt.Print"}),", ",(0,a.jsx)(t.code,{children:"fmt.Println"})," and ",(0,a.jsx)(t.code,{children:"fmt.Printf"})," to print messages, the two most common functions of doing so."]}),"\n",(0,a.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Print("We have to add our own newline.\\n") // Prints a basic string with no newline.\n\tfmt.Println("Hello, World!") // Prints a basic string with a newline at the end.\n\tfmt.Printf("My name is %s and I am %d years old.\\n", "Caiden", 19) // Prints formatted with variables.\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"reading-input",children:"Reading Input"}),"\n",(0,a.jsxs)(t.p,{children:["For reading user input, we will be working with ",(0,a.jsx)(t.code,{children:"fmt.Scan"}),", ",(0,a.jsx)(t.code,{children:"fmt.Scanln"}),", and ",(0,a.jsx)(t.code,{children:"fmt.Scanf"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"example-reading-single-input",children:"Example (reading single input)"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc main() {\n\tvar name string\n\tfmt.Printf("What do you go by? ")\n\tfmt.Scan(&name)\n\tfmt.Println("Hello, ", name)\n}\n'})}),"\n",(0,a.jsx)(t.h3,{id:"example-reading-multiple-inputs",children:"Example (reading multiple inputs)"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc main() {\n\tvar firstName, lastName string\n\tfmt.Print("Enter your first and last name: ")\n\tfmt.Scan(&firstName, &lastName)\n\tfmt.Printf("Hello, %s %s!\\n", firstName, lastName)\n}\n'})}),"\n",(0,a.jsx)(t.h3,{id:"eaxmple-reading-a-full-line",children:"Eaxmple (reading a full line)"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc main() {\n\tvar quote string\n\tfmt.Print("What\'s your favorite quote? ")\n\tfmt.Scanln(&quote)\n\tfmt.Println("Your favorite quote", quote)\n}\n'})}),"\n",(0,a.jsx)(t.h3,{id:"example-formatted-input",children:"Example (formatted input)"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"fmt.Scanf"})," function inputs using format specifiers. That means, it will only read the input based on the format specifier provided."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'package main\n\nimport "fmt"\n\nfunc main() {\n\tvar age int\n\tfmt.Print("Enter your age: ")\n\tfmt.Scanf("%d", &age)\n\tfmt.Printf("You are %d years old.\\n", age)\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsxs)(t.p,{children:["Go provides ",(0,a.jsx)(t.code,{children:"fmt"})," for simple console I/O. With ",(0,a.jsx)(t.code,{children:"fmt"}),", we can output to the console with functions such as ",(0,a.jsx)(t.code,{children:"fmt.Print"}),", ",(0,a.jsx)(t.code,{children:"fmt.Println"}),", ",(0,a.jsx)(t.code,{children:"fmt.Printf"}),", and read from the console with ",(0,a.jsx)(t.code,{children:"fmt.Scan"}),", ",(0,a.jsx)(t.code,{children:"fmt.Scanln"}),", ",(0,a.jsx)(t.code,{children:"fmt.Scanf"}),"."]})]})}function c(n={}){const{wrapper:t}={...(0,r.R)(),...n.components};return t?(0,a.jsx)(t,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},8453:(n,t,e)=>{e.d(t,{R:()=>o,x:()=>l});var i=e(6540);const a={},r=i.createContext(a);function o(n){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function l(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:o(n.components),i.createElement(r.Provider,{value:t},n.children)}}}]);