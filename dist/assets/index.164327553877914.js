var s=Object.defineProperty;var t=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var u=(o,e,n)=>e in o?s(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,a=(o,e)=>{for(var n in e||(e={}))p.call(e,n)&&u(o,n,e[n]);if(t)for(var n of t(e))d.call(e,n)&&u(o,n,e[n]);return o};import{_ as m}from"./index.1643275538779.js";import{l as c,t as i,p as f,C as v,r as B,H as _}from"./vendor.1643275538779.js";const F={name:"menu11",setup(){const o=c({val:""});return a({},i(o))}};function V(o,e,n,$,x,D){const l=B("el-input");return _(),f("div",null,[v(l,{modelValue:o.val,"onUpdate:modelValue":e[0]||(e[0]=r=>o.val=r),placeholder:"menu11\uFF1A\u8BF7\u8F93\u5165\u5185\u5BB9\u6D4B\u8BD5\u8DEF\u7531\u7F13\u5B58"},null,8,["modelValue"])])}var E=m(F,[["render",V]]);export{E as default};
