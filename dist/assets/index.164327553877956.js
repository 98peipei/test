var C=Object.defineProperty;var i=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var r=(t,e,s)=>e in t?C(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,c=(t,e)=>{for(var s in e||(e={}))g.call(e,s)&&r(t,s,e[s]);if(i)for(var s of i(e))h.call(e,s)&&r(t,s,e[s]);return t};import{_ as D,u as F}from"./index.1643275538779.js";import{h as V,l as w,a2 as x,L as B,t as k,p as y,q as E,C as o,D as m,M as b,r as a,H as T,A as $}from"./vendor.1643275538779.js";const S=V({name:"paramsDynamic",setup(){const t=F(),e=w({value:""}),s=x(),u=B(()=>{let{isTagsview:l}=t.state.themeConfig.themeConfig,{isTagsViewCurrenFull:n}=t.state.tagsViewRoutes;return n?"30px":l?"114px":"80px"});return c({setViewHeight:u,onGoDetailsClick:()=>{s.push({name:"paramsDynamicDetails",params:{t:"vue-next-admin",id:e.value}}),e.value=""}},k(e))}}),A={class:"flex-margin"},G=$(" \u52A8\u6001\u8DEF\u7531\u4F20\u53C2 ");function H(t,e,s,u,p,l){const n=a("el-input"),d=a("SvgIcon"),_=a("el-button"),f=a("el-result");return T(),y("div",{class:"layout-view-bg-white flex",style:b({height:`calc(100vh - ${t.setViewHeight}`})},[E("div",A,[o(f,{icon:"warning",title:"\u52A8\u6001\u8DEF\u7531",subTitle:"\u53EF `\u5F00\u542F TagsView \u5171\u7528` \u8FDB\u884C\u5355\u6807\u7B7E\u6D4B\u8BD5"},{extra:m(()=>[o(n,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=v=>t.value=v),placeholder:"\u8BF7\u8F93\u5165\u8DEF\u7531\u53C2\u6570id\u503C",clearable:""},null,8,["modelValue"]),o(_,{type:"primary",size:"small",class:"mt15",onClick:t.onGoDetailsClick},{default:m(()=>[o(d,{name:"iconfont icon-dongtai"}),G]),_:1},8,["onClick"])]),_:1})])],4)}var z=D(S,[["render",H]]);export{z as default};
