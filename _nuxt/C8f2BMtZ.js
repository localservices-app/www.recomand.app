import{d as m,L as l,M as s,X as a,U as f,ah as h,_ as w,$ as c,a as u,ai as g,J as n}from"./Bz2LIQXo.js";import{_ as v,u as y,D as b}from"./CvO6hf9P.js";import{u as C}from"./DQG0t172.js";import{L as _}from"./Buxv8VuU.js";import"./6h_Y0C3p.js";const $=m({name:"DeleteAccount",components:{Loader1:_},setup(){const e=C(),o=u(""),d=u(""),{t}=y({inheritLocale:!0,useScope:"local"});return{saveChanges:()=>{if(o.value==""){b({title:t("notifyInputCurrentPassword"),type:"info"});return}e.auth.actDelteAccount({password:o.value})},newPassword:d,password:o,store:e,t}}}),x={class:"w-full block mx-auto h-auto lg:max-w-2/3 px-2"},k={class:"mb-6 text-3xl"},A={class:"flex flex-col space-y-4"},L={for:"passsword",class:"text-gray-500 font-medium"},D=["placeholder"],B={key:1};function P(e,o,d,t,p,S){const i=g("Loader1");return n(),l("div",x,[s("h1",k,a(e.$t("deleteAccount")),1),s("div",A,[s("label",L,a(e.$t("currentPassword")),1),f(s("input",{type:"password",id:"passsword",name:"passsword","onUpdate:modelValue":o[0]||(o[0]=r=>e.password=r),class:"border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500",placeholder:e.$t("enterCurrentPassword")},null,8,D),[[h,e.password]])]),s("div",{class:"max-w-[180px] mt-3 float-right flex items-center justify-center h-12 rounded-md text-gray-100 p-1 bg-red-600 font-bold cursor-pointer hover:bg-red-700 px-3",onClick:o[1]||(o[1]=(...r)=>e.saveChanges&&e.saveChanges(...r))},[e.store.auth.deletingAccount?(n(),w(i,{key:0})):c("",!0),e.store.auth.deletingAccount?c("",!0):(n(),l("span",B,a(e.$t("deleteAccount")),1))])])}const j=v($,[["render",P]]);export{j as default};
