var c=Object.defineProperty;var n=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var f=(t,a,e)=>a in t?c(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,m=(t,a)=>{for(var e in a||(a={}))d.call(a,e)&&f(t,e,a[e]);if(n)for(var e of n(a))u.call(a,e)&&f(t,e,a[e]);return t};import{h as g,P as h,l as p,L as v,o as w,R as _,t as L,w as l,p as x,q as y,v as I,M as $,n as k,a9 as B,H as C}from"./vendor.1643275538779.js";import{_ as R,u as V}from"./index.1643275538779.js";const b=g({name:"layoutIfameView",setup(){const t=h(),a=V(),e=p({iframeLoading:!0,iframeUrl:""}),s=()=>{e.iframeUrl=t.meta.isLink,k(()=>{e.iframeLoading=!0;const r=document.getElementById("iframe");if(!r)return!1;r.onload=()=>{e.iframeLoading=!1}})},o=v(()=>{let{isTagsview:r}=a.state.themeConfig.themeConfig,{isTagsViewCurrenFull:i}=a.state.tagsViewRoutes;return i?"1px":r?"85px":"51px"});return w(()=>{s()}),_(()=>t.path,()=>{s()}),m({setIframeHeight:o},L(e))}}),H=["src"];function S(t,a,e,s,o,r){const i=B("loading");return l((C(),x("div",{class:"layout-view-bg-white flex mt1",style:$({height:`calc(100vh - ${t.setIframeHeight}`,border:"none"})},[l(y("iframe",{src:t.iframeUrl,frameborder:"0",height:"100%",width:"100%",id:"iframe"},null,8,H),[[I,!t.iframeLoading]])],4)),[[i,t.iframeLoading]])}var D=R(b,[["render",S]]);export{D as default};
