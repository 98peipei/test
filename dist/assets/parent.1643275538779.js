var w=Object.defineProperty;var m=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var c=(s,e,t)=>e in s?w(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,f=(s,e)=>{for(var t in e||(e={}))k.call(e,t)&&c(s,t,e[t]);if(m)for(var t of m(e))N.call(e,t)&&c(s,t,e[t]);return s};import{h as _,P as R,l as V,L as r,Q as C,n as g,m as y,R as A,t as L,p as T,C as p,D as v,j as K,r as B,H as i,T as P,S as h,a5 as x,a6 as $}from"./vendor.1643275538779.js";import{_ as j,u as D}from"./index.1643275538779.js";const S=_({name:"layoutParentView",setup(){const{proxy:s}=K(),e=R(),t=D(),a=V({refreshRouterViewKey:null,keepAliveNameList:[],keepAliveNameNewList:[]}),u=r(()=>t.state.themeConfig.themeConfig.animation),l=r(()=>t.state.themeConfig.themeConfig),o=r(()=>t.state.keepAliveNames.keepAliveNames);return C(()=>{a.keepAliveNameList=o.value,s.mittBus.on("onTagsViewRefreshRouterView",n=>{a.keepAliveNameList=o.value.filter(d=>e.name!==d),a.refreshRouterViewKey=null,g(()=>{a.refreshRouterViewKey=n,a.keepAliveNameList=o.value})})}),y(()=>{s.mittBus.off("onTagsViewRefreshRouterView")}),A(()=>e.fullPath,()=>{a.refreshRouterViewKey=e.fullPath}),f({getThemeConfig:l,getKeepAliveNames:o,setTransitionName:u},L(a))}}),E={class:"h100"};function H(s,e,t,a,u,l){const o=B("router-view");return i(),T("div",E,[p(o,null,{default:v(({Component:n})=>[p(P,{name:s.setTransitionName,mode:"out-in"},{default:v(()=>[(i(),h($,{include:s.keepAliveNameList},[(i(),h(x(n),{key:s.refreshRouterViewKey,class:"w100"}))],1032,["include"]))]),_:2},1032,["name"])]),_:1})])}var U=j(S,[["render",H]]);export{U as default};
