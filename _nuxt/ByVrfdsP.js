import{_ as c,u as d,a as l}from"./CvO6hf9P.js";import{u as m}from"./DQG0t172.js";import{d as p,L as r,M as a,X as o,$ as f,J as n}from"./Bz2LIQXo.js";import"./6h_Y0C3p.js";const y=p({name:"CreditBalance",components:{},setup(){const{t:e}=d({inheritLocale:!0,useScope:"local"}),t=m(),s=l();return{navigateToBuyCredits:()=>{t.recomand.actIncreaseHistory(),s.push("/buy-credits")},store:t,t:e}}}),h={class:"w-full block mx-auto h-auto lg:max-w-2/3 px-2"},g={class:"mb-6 text-3xl"},B={key:0,class:"my-10 text-gray-700 text-xl font-bold"};function C(e,t,s,i,b,v){return n(),r("div",h,[a("h1",g,o(e.$t("creditBalance")),1),e.store.auth.user!=null?(n(),r("div",B,"You have "+o(e.store.auth.user.credits)+" Credits",1)):f("",!0),a("div",{class:"w-40 float-left flex items-center justify-center h-12 rounded-md text-gray-100 p-1 bg-blue-500 font-bold cursor-pointer hover:bg-cyan-700",onClick:t[0]||(t[0]=(...u)=>e.navigateToBuyCredits&&e.navigateToBuyCredits(...u))},o(e.$t("buyCredits")),1)])}const T=c(y,[["render",C]]);export{T as default};
