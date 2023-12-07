import{j as h}from"./jsx-runtime-AgcCsxC8.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";const s=({label:o,size:g="normal",allCaps:x=!1,color:v,fontColor:_})=>{const S=x?o.toUpperCase():o;return h.jsx("span",{className:`${g} ${v}`,style:{color:_},children:S})};try{s.displayName="MyLabel",s.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:null,description:"Text to display",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Label size",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"Enables allCaps mode for the text label",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"Type of color for font",name:"color",required:!1,type:{name:"enum",value:[{value:'"text-primary"'},{value:'"text-secondary"'},{value:'"text-tertiary"'}]}},fontColor:{defaultValue:null,description:"Font color",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const V={title:"Example/MyLabel",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"}}},e={args:{label:"Basic label"}},a={args:{label:"AllCaps label",size:"normal",allCaps:!0}},r={args:{label:"Secondary label",color:"text-secondary"}},l={args:{label:"CustomColor label",fontColor:"red"}};var t,n,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: 'Basic label'
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,u,i;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'AllCaps label',
    size: 'normal',
    allCaps: true
  }
}`,...(i=(u=a.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var m,d,y;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Secondary label',
    color: 'text-secondary'
  }
}`,...(y=(d=r.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var b,f,C;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'CustomColor label',
    fontColor: 'red'
  }
}`,...(C=(f=l.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const A=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secondary,A as __namedExportsOrder,V as default};
