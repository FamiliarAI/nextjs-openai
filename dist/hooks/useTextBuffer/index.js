import{useEffect as m,useState as c}from"react";import{DECODER as i}from"../../globs/shared.js";import{useBuffer as n}from"../useBuffer/index.js";const E=f=>{const{buffer:e,...o}=n(f),[r,t]=c([]);return m(()=>{if(e){const u=e.map(s=>i.decode(s));t(u)}},[e]),{...o,buffer:r}};export{E as useTextBuffer};
