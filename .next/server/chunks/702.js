exports.id=702,exports.ids=[702],exports.modules={5702:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h});var l=n(997);n(6764);var s=n(968),r=n.n(s);let components_Meta=function(){return(0,l.jsxs)(r(),{children:[l.jsx("title",{children:"AFRA - Attendance system with Face Recognition & Automation"}),l.jsx("meta",{name:"description",content:"AFRA is a cross-platform software that uses face detection and recognition algorithms to automatically mark attendance for students."}),l.jsx("link",{rel:"icon",href:"/favicon.ico"}),l.jsx("link",{rel:"canonical",href:"https://afra.vercel.app/"}),l.jsx("meta",{name:"robots",content:"index,follow"})]})};var i=n(6689),a=n(5675),o=n.n(a),c=n(1664),d=n.n(c);let components_Navbar=function({userRole:e}){let[t,n]=(0,i.useState)(!1);return(0,l.jsxs)("nav",{className:"bg-gray-800 lg:flex lg:items-center lg:justify-between p-4 fixed w-full z-10 top-0 left-0",children:[(0,l.jsxs)("div",{className:"flex items-center justify-between flex-shrink-0 text-white",children:[l.jsx(o(),{src:"/logo.png",alt:"AFRA Logo",width:30,height:30}),l.jsx(d(),{className:"font-semibold text-xl tracking-tight mr-6",href:"/",children:"AFRA"}),l.jsx("div",{className:"block lg:hidden",children:l.jsx("button",{className:"flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white",onClick:()=>n(!t),children:(0,l.jsxs)("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[l.jsx("title",{children:"Menu"}),l.jsx("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})]})})})]}),(0,l.jsxs)("div",{className:`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${t?"flex-col":"hidden"} menu`,children:[l.jsx("div",{className:"text-sm lg:flex-grow",children:("admin"===e?[{title:"Scan Face",path:"/scan"},{title:"Add Enroller",path:"/register"},{title:"Add Course",path:"/add-course"},{title:"Add Student",path:"/add-student"}]:"enroller"===e?[{title:"Scan Face",path:"/scan"},{title:"Enroll Students",path:"/enroll"}]:[]).map(({title:e,path:t})=>l.jsx(d(),{href:t,className:"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4",children:e},e))}),l.jsx("div",{children:l.jsx(d(),{href:e?"/logout":"/login",className:"inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0",children:e?"Logout":"Login"})})]})]})};function MyApp({Component:e,pageProps:t,userRole:n}){return(0,l.jsxs)(l.Fragment,{children:[l.jsx(components_Meta,{}),l.jsx("div",{className:"mb-20",children:l.jsx(components_Navbar,{userRole:n})}),l.jsx(e,{...t})]})}MyApp.getInitialProps=async e=>{let checkUser=async()=>{let e=await fetch("http://localhost",{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"},credentials:"include"}),t=await e.json();return t?!0===t.isAdmin?{isAdmin:!0}:{isAdmin:!1}:null},t=await checkUser();return t?t.isAdmin?{userRole:"admin"}:{userRole:"enroller"}:{userRole:null}};let h=MyApp},6764:()=>{}};