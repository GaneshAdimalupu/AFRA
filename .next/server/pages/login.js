"use strict";(()=>{var e={};e.id=459,e.ids=[459,888,660],e.modules={5600:(e,t,r)=>{r.r(t),r.d(t,{config:()=>_,default:()=>h,getServerSideProps:()=>P,getStaticPaths:()=>f,getStaticProps:()=>S,reportWebVitals:()=>j,routeModule:()=>C,unstable_getServerProps:()=>y,unstable_getServerSideProps:()=>k,unstable_getStaticParams:()=>q,unstable_getStaticPaths:()=>w,unstable_getStaticProps:()=>v});var a={};r.r(a),r.d(a,{default:()=>g});var l=r(7093),s=r(5244),i=r(1323),n=r(9209),o=r.n(n),d=r(5702),u=r(997),c=r(7411),p=r(6689),m=r(8281),x=r(1163),b=r.n(x);let g=(0,m.Z)(function(){let[e,t]=(0,p.useState)("admin"),handleTabClick=e=>{t(e.target.id)},handleSubmit=async t=>{let r={id:t.id,password:t.password},a=await fetch("admin"===e?"http://localhost/admin":"http://localhost/enroller",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(r),credentials:"include"}),l=await a.json();if(l.error){alert(l.error);return}b().push("/")};return(0,u.jsxs)("div",{className:"bg-gray-200 flex flex-col items-center p-4",children:[(0,u.jsxs)("ul",{className:"flex justify-center",children:[u.jsx("li",{className:"mr-4",children:u.jsx("button",{id:"admin",className:`${"admin"===e?"bg-teal-400 text-white":""} font-bold text-lg rounded-full px-4 py-2`,onClick:handleTabClick,children:"Admin"})}),u.jsx("li",{className:"mr-4",children:u.jsx("button",{id:"enroller",className:`${"enroller"===e?"bg-teal-400 text-white":""} font-bold text-lg rounded-full px-4 py-2`,onClick:handleTabClick,children:"Enroller"})})]}),u.jsx(c.l,{fields:[{name:"id",label:"ID",type:"text",required:!0},{name:"password",label:"Password",type:"password",required:!0}],submitText:"Log In",onSubmit:handleSubmit})]})}),h=(0,i.l)(a,"default"),S=(0,i.l)(a,"getStaticProps"),f=(0,i.l)(a,"getStaticPaths"),P=(0,i.l)(a,"getServerSideProps"),_=(0,i.l)(a,"config"),j=(0,i.l)(a,"reportWebVitals"),v=(0,i.l)(a,"unstable_getStaticProps"),w=(0,i.l)(a,"unstable_getStaticPaths"),q=(0,i.l)(a,"unstable_getStaticParams"),y=(0,i.l)(a,"unstable_getServerProps"),k=(0,i.l)(a,"unstable_getServerSideProps"),C=new l.PagesRouteModule({definition:{kind:s.x.PAGES,page:"/login",pathname:"/login",bundlePath:"",filename:""},components:{App:d.default,Document:o()},userland:a})},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[801,61,209,450,163,702,411,281],()=>__webpack_exec__(5600));module.exports=r})();