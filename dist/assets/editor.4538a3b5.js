import{j as e,c as r,e as d,f as i,v as u,d as m,r as h,W as p}from"./hooks.ebe74091.js";function t({valueKey:a,title:l}){const o=d(),s=i();return r("div",{className:"form-group",children:[e("label",{className:"form-label",htmlFor:a,children:l!=null?l:a}),e("div",{className:"input-group",children:e("input",{className:"form-control",type:"text",placeholder:u[a],defaultValue:o[a],onInput:c=>{const n=c.target;s({[a]:n.value})}})})]})}const f=()=>e("fieldset",{className:"form",children:r("div",{className:"form-group",children:[e(t,{valueKey:"label1",title:"Label 1"}),e(t,{valueKey:"label2",title:"Label 2"}),e(t,{valueKey:"placeholder",title:"Placeholder"}),e(t,{valueKey:"actionUrl",title:"Action URL"})]})}),g=m(document.getElementById("root"));g.render(e(h.exports.StrictMode,{children:e(p,{children:e(f,{})})}));
