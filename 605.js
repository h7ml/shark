(self.webpackChunkshark=self.webpackChunkshark||[]).push([["605"],{933276:function(e,t){"use strict";t.Z={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]},name:"caret-down",theme:"outlined"}},346780:function(e,t){"use strict";t.Z={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"}}]},name:"caret-up",theme:"outlined"}},67725:function(e,t,a){"use strict";var n=a("182259"),l=a("639367"),s=a("933276"),r=a("904497"),i=l.forwardRef(function(e,t){return l.createElement(r.Z,(0,n.Z)({},e,{ref:t,icon:s.Z}))});t.Z=i},811189:function(e,t,a){"use strict";var n=a("182259"),l=a("639367"),s=a("346780"),r=a("904497"),i=l.forwardRef(function(e,t){return l.createElement(r.Z,(0,n.Z)({},e,{ref:t,icon:s.Z}))});t.Z=i},864675:function(e,t,a){"use strict";a.r(t);var n=a("65159"),l=a("314892"),s=a("412181"),r=a("709851"),i=a("110688"),c=a("709157"),d=a("605801"),u=a("941100"),o=a("446440"),x=a("321078"),m=a("548202"),h=a("23597"),g=a("639367"),p=a("831553"),f=a("668850"),Z=a("678120");t.default=()=>{let e=(0,g.createRef)(),[t,a]=l.ZP.useMessage(),{t:j}=(0,p.$G)(),k=(0,f.useQueryClient)(),[b,y]=(0,g.useState)(!1),[v,w]=(0,g.useState)(!1),[C,N]=(0,g.useState)(!1),[S,F]=(0,g.useState)("Content of the modal"),[I,P]=(0,g.useState)({}),T=e=>{P(e),F(j("qnhgwihA")+e.name+j("iuBlQeDg")),y(!0)},D=[{title:j("gtRVLkTF"),dataIndex:"name",key:"name",align:"center",render:e=>(0,n.jsx)("a",{children:e})},{title:j("exDcSRog"),dataIndex:"age",align:"center",key:"age"},{title:j("YXDPCCtv"),align:"center",dataIndex:"address",key:"address"},{title:j("JtpuFUhm"),key:"tags",align:"center",dataIndex:"tags",render:(e,t)=>{let{tags:a}=t;return(0,n.jsx)(n.Fragment,{children:null==a?void 0:a.map(e=>{let t=e.length>5?"geekblue":"green";return"loser"===e&&(t="volcano"),(0,n.jsx)(s.Z,{color:t,children:e},e)})})}},{title:j("oPENPbuO"),key:"action",align:"center",render:(e,t)=>(0,n.jsxs)(r.Z,{size:"middle",children:[(0,n.jsx)(i.ZP,{type:"primary",onClick:()=>{P(t),w(!0)},children:j("fAWmvClP")}),(0,n.jsx)(i.ZP,{danger:!0,type:"primary",onClick:()=>{T(t)},children:j("UseQXSFf")})]})}],{data:R,isLoading:E,error:L}=(0,Z.bK)({queryKey:"/api/table",url:"/api/table"}),Q=e=>{let t={...I,...e};k.setQueryData("/api/table",e=>{if(!e)return e;let a={...e,data:e.data.map(e=>e.key===t.key?t:e)};return l.ZP.success(j("NKuxNtiN")),a}),P({}),w(!1)},[z,A]=(0,g.useState)([]);(0,g.useEffect)(()=>{!E&&!L&&(null==R?void 0:R.data)&&A(R.data)},[R,E,L]);let B=e=>{if(e.name||e.age){let t=k.getQueryData("/api/table");t&&"data"in t&&A(t.data.filter(t=>{var a;return(null===e.name||void 0===e.name||(null===(a=t.name)||void 0===a?void 0:a.includes(e.name)))&&(null===e.age||void 0===e.age||t.age===e.age)}))}};return(0,g.useEffect)(()=>{var t;null===(t=e.current)||void 0===t||t.setFieldsValue(I)},[I,e]),(0,n.jsxs)("div",{children:[a,(0,n.jsx)(c.Z,{title:j("Edit"),rootClassName:"mt-22vh",open:v,onOk:()=>{Q(e.current.getFieldsValue())},cancelText:j("hAxbfvSF"),okText:j("hGYTYdGu"),onCancel:()=>{P({}),w(!1)},children:(0,n.jsxs)(d.Z,{layout:"horizontal",labelCol:{xs:{span:3},sm:{span:4},xl:{span:3},xxl:{span:1}},wrapperCol:{xs:{span:20},sm:{span:20},xl:{span:20},xxl:{span:24}},name:"basic",ref:e,onFinish:Q,initialValues:I,children:[(0,n.jsx)(d.Z.Item,{name:"name",label:j("Name"),children:(0,n.jsx)(u.Z,{})}),(0,n.jsx)(d.Z.Item,{name:"age",label:j("Age"),children:(0,n.jsx)(o.Z,{style:{width:"100%"}})}),(0,n.jsx)(d.Z.Item,{name:"address",label:j("Address"),children:(0,n.jsx)(u.Z,{})})]},null==I?void 0:I.key)}),(0,n.jsx)(c.Z,{title:j("rwgJkNNx"),open:b,onOk:()=>{N(!0);let e=I.key;setTimeout(()=>{y(!1),N(!1),k.setQueryData("/api/table",a=>{if(!a)return a;let n=a.data.filter(t=>t.key!==e),l={...a,data:n};return t.open({type:"success",content:j("QlwEBiLq"),duration:1}),l})},2e3)},cancelText:j("hAxbfvSF"),okText:j("hGYTYdGu"),confirmLoading:C,onCancel:()=>{console.log("Clicked cancel button"),y(!1)},children:(0,n.jsx)("p",{children:S})}),(0,n.jsx)(d.Z,{size:"large",onFinish:B,className:"dark:bg-[rgb(33,41,70)] bg-white p-[24px] rounded-md",children:(0,n.jsxs)(x.Z,{gutter:24,children:[(0,n.jsx)(m.Z,{className:"w-[100%]",lg:24,xl:8,children:(0,n.jsx)(d.Z.Item,{name:"name",label:j("gtRVLkTF"),children:(0,n.jsx)(u.Z,{})})}),(0,n.jsx)(m.Z,{className:"w-[100%]",lg:24,xl:8,children:(0,n.jsx)(d.Z.Item,{name:"age",label:j("exDcSRog"),children:(0,n.jsx)(o.Z,{style:{width:"100%"}})})}),(0,n.jsx)(m.Z,{className:"w-[100%] text-right",lg:24,xl:8,children:(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(i.ZP,{type:"primary",htmlType:"submit",children:j("tXytgkBI")})," ",(0,n.jsx)(i.ZP,{onClick:()=>{B({name:null,age:null})},children:j("fDiHzaqR")})]})})]})}),(0,n.jsx)("div",{className:"mt-[16px] dark:bg-[rgb(33,41,70)] rounded-md",children:(0,n.jsx)(h.Z,{scroll:{x:!0},columns:D,dataSource:z,className:"bg-transparent"})})]})}}}]);