(self.webpackChunkshark=self.webpackChunkshark||[]).push([["193"],{864675:function(e,t,a){"use strict";a.r(t);var l=a("65159"),n=a("571389"),s=a("964787"),r=a("639367");t.default=()=>{let[e,t]=n.message.useMessage(),[a,d]=(0,r.useState)(!1),[c,i]=(0,r.useState)(!1),[o,x]=(0,r.useState)("Content of the modal"),h=e=>{x(`确定要删除 ${e.name} 吗?`),d(!0)},u=[{title:"名称",dataIndex:"name",key:"name",render:e=>(0,l.jsx)("a",{children:e})},{title:"年龄",dataIndex:"age",key:"age"},{title:"地址",dataIndex:"address",key:"address"},{title:"职业",key:"tags",dataIndex:"tags",render:(e,t)=>{let{tags:a,id:s}=t;return(0,l.jsx)(l.Fragment,{children:a.map(e=>{let t=e.length>5?"geekblue":"green";return"loser"===e&&(t="volcano"),(0,l.jsx)(n.Tag,{color:t,children:e},e+s)})})}},{title:"操作",key:"action",render:(e,t)=>(0,l.jsxs)(n.Space,{size:"middle",children:[(0,l.jsx)(n.Button,{type:"primary",children:"编辑"}),(0,l.jsx)(n.Button,{danger:!0,type:"primary",onClick:()=>{h(t)},children:"删除"})]})}],[m,g]=(0,r.useState)([]),j=()=>{s.default.get("/api/table").then(e=>{g(e.data.data)}).catch(e=>{console.log("fetch data failed",e)})};return(0,r.useEffect)(()=>{j()},[]),(0,l.jsxs)("div",{children:[t,(0,l.jsx)(n.Modal,{title:"删除确认",open:a,onOk:()=>{e.open({type:"success",content:`删除成功`,duration:1}),i(!0),setTimeout(()=>{d(!1),i(!1)},2e3)},cancelText:"取消",okText:"确认",confirmLoading:c,onCancel:()=>{console.log("Clicked cancel button"),d(!1)},children:(0,l.jsx)("p",{children:o})}),(0,l.jsx)(n.Form,{size:"large",className:"dark:bg-[rgb(33,41,70)] bg-white p-[24px] rounded-md",children:(0,l.jsxs)(n.Row,{gutter:24,children:[(0,l.jsx)(n.Col,{className:"w-[100%]",lg:24,xl:8,children:(0,l.jsx)(n.Form.Item,{name:"name",label:"名称",children:(0,l.jsx)(n.Input,{})})}),(0,l.jsx)(n.Col,{className:"w-[100%]",lg:24,xl:8,children:(0,l.jsx)(n.Form.Item,{name:"age",label:"年龄",children:(0,l.jsx)(n.InputNumber,{style:{width:"100%"}})})}),(0,l.jsx)(n.Col,{className:"w-[100%] text-right",lg:24,xl:8,children:(0,l.jsxs)(n.Space,{children:[(0,l.jsx)(n.Button,{type:"primary",children:"搜索"}),(0,l.jsx)(n.Button,{children:"清除"})]})})]})}),(0,l.jsx)("div",{className:"mt-[16px] dark:bg-[rgb(33,41,70)] rounded-md",children:(0,l.jsx)(n.Table,{scroll:{x:!0},columns:u,dataSource:m,className:"bg-transparent"})})]})}}}]);