import{a as C,bs as R,r as i,j as l,o,c as m,w as n,e,u as t,b as r,a7 as d,t as b,z as T,k as S,bt as j,h as I,ad as L,F as N,aJ as D}from"./entry.ce160ea7.js";const F={key:0,class:"text-center"},P={key:0},U={key:0},$={key:0},A={key:2},E={key:0},J=C({__name:"Sidebar",setup(V){const _=R();function g(){_.global.name.value=_.global.current.value.dark?"solarizedLight":"solarizedDark"}window.matchMedia&&window.matchMedia("(prefers-color-scheme)".media!=="not at all")&&window.matchMedia("(prefers-color-scheme: light)")&&window.matchMedia("(prefers-color-scheme: light)").matches&&(_.global.name.value="solarizedLight");const u=i(!0),a=i(!1);function p(){console.log("setRail"),a.value=!a.value}const k=i("/portfolio/img/profile.png");i("Caleb Baird");const f=i("208-390-8659"),v=i("calebbaird5@gmail.com");return i("https://linkedin.com/in/calebbaird"),i(!0),(x,h)=>{const w=l("v-img"),y=l("v-avatar"),s=l("v-list-item"),c=l("v-icon"),M=l("v-list"),z=l("v-navigation-drawer");return o(),m(z,{modelValue:t(u),"onUpdate:modelValue":h[0]||(h[0]=B=>T(u)?u.value=B:null),permanent:"",rail:t(a),class:"side-panel",app:""},{default:n(()=>[e(M,null,{default:n(()=>[e(s,null,{default:n(()=>[e(y,null,{default:n(()=>[e(w,{class:"white--text align-end",height:"100%",src:t(k)},null,8,["src"])]),_:1}),t(a)?d("",!0):(o(),r("h2",F," Caleb Baird "))]),_:1}),e(s,{href:"tel:"+t(f)},{default:n(()=>[e(c,{icon:"mdi-phone"}),t(a)?d("",!0):(o(),r("span",P,b(t(f)),1))]),_:1},8,["href"]),e(s,{href:"mailto:"+t(v)},{default:n(()=>[e(c,{icon:"mdi-email"}),t(a)?d("",!0):(o(),r("span",U,b(t(v)),1))]),_:1},8,["href"]),e(s,{target:"blank",href:"https://www.linkedin.com/in/calebbaird"},{default:n(()=>[e(c,{icon:"mdi-linkedin"}),t(a)?d("",!0):(o(),r("span",$,"linkedin.com/in/calebbaird"))]),_:1}),e(s,{onClick:p},{default:n(()=>[t(a)?(o(),m(c,{key:0,icon:"mdi-unfold-more-vertical"})):(o(),m(c,{key:1,icon:"mdi-unfold-less-vertical"})),t(a)?d("",!0):(o(),r("span",A,"Minimize Sidebar"))]),_:1}),e(s,{onClick:g},{default:n(()=>[e(c,{icon:"mdi-theme-light-dark"}),t(a)?d("",!0):(o(),r("span",E," Switch to "+b(t(_).global.current.value.dark?"light":"dark")+" mode",1))]),_:1})]),_:1})]),_:1},8,["modelValue","rail"])}}});const q=S(J,[["__scopeId","data-v-f85712d5"]]),G=C({__name:"default",setup(V){const _=i([{title:"About Me",to:"/"},{title:"Resume",to:"/resume"},{title:"Projects",to:"/projects"}]),g=j();function u(a){g.push(_.value[a].to)}return(a,p)=>{const k=q,f=l("v-tab"),v=l("v-tabs"),x=l("v-divider"),h=l("v-container"),w=l("v-main"),y=l("v-app");return o(),m(y,null,{default:n(()=>[e(k),e(w,null,{default:n(()=>[e(v,{"onUpdate:modelValue":p[0]||(p[0]=s=>u(s))},{default:n(()=>[(o(!0),r(N,null,I(t(_),(s,c)=>(o(),m(f,null,{default:n(()=>[L(b(s.title),1)]),_:2},1024))),256))]),_:1}),e(x),e(h,null,{default:n(()=>[D(a.$slots,"default",{},void 0,!0)]),_:3})]),_:3})]),_:3})}}});const K=S(G,[["__scopeId","data-v-ff582acb"]]);export{K as default};
