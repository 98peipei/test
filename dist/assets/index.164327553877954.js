var c=Object.defineProperty;var t=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var n=(e,o,a)=>o in e?c(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,r=(e,o)=>{for(var a in o||(o={}))f.call(o,a)&&n(e,a,o[a]);if(t)for(var a of t(o))m.call(o,a)&&n(e,a,o[a]);return e};import{_}from"./index.1643275538779.js";import{h as D,l as w,t as B,S as C,D as l,r as p,H as O,C as V,q as $,B as v}from"./vendor.1643275538779.js";const k=D({name:"pagesWorkflowDrawer",setup(){const e=w({isOpen:!1,nodeData:{type:"node"}});return r({open:s=>{e.nodeData=s,e.isOpen=!0},close:()=>{e.isOpen=!1}},B(e))}});function y(e,o,a,s,b,g){const d=p("el-scrollbar"),i=p("el-drawer");return O(),C(i,{title:`${e.nodeData.type==="line"?"\u7EBF":"\u8282\u70B9"}\u64CD\u4F5C`,modelValue:e.isOpen,"onUpdate:modelValue":o[0]||(o[0]=u=>e.isOpen=u),size:"320px"},{default:l(()=>[V(d,null,{default:l(()=>[$("pre",null,v(e.nodeData),1)]),_:1})]),_:1},8,["title","modelValue"])}var N=_(k,[["render",y]]);export{N as default};
