(self.webpackChunkshark=self.webpackChunkshark||[]).push([["287"],{861470:function(e,t,i){"use strict";i.r(t);var a=i("65159"),l=i("746394"),s=i("639367"),r=i("669652"),o=i("32158"),n=i("379641");t.default=function(){let[e,t]=(0,s.useState)([]),{darkMode:i}=(0,n.useGlobalStore)(),c=()=>{fetch("https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json").then(e=>e.json()).then(e=>t(e)).catch(e=>{console.log("fetch data failed",e)})};return(0,s.useEffect)(()=>{c()},[]),(0,a.jsx)(l.Column,{theme:i?r:o,data:e,isStack:!0,xField:"year",yField:"value",seriesField:"type",height:460,legend:{position:"bottom"}})}},326119:function(e,t,i){"use strict";i.r(t);var a=i("65159"),l=i("140621"),s=i("852606");let r=e=>{let{Icon:t,text:i,loading:l}=e;return(0,a.jsxs)("div",{children:[t,(0,a.jsx)("span",{children:i}),l&&(0,a.jsx)("span",{children:"Loading..."})]})};t.default=e=>{let{userInfo:t={},loading:i}=e;return(0,a.jsx)("div",{className:"bg-cover bg-center h-200px w-full",style:{backgroundImage:"url(https://lf-cdn-tos.bytescm.com/obj/static/arcodesign/proPreview/static/media/header-banner.fcb7b1aa6ce12d210c85.png)",backgroundSize:"100%",height:"200px"},children:(0,a.jsxs)(s.Space,{size:8,direction:"vertical",align:"center",className:"justify-center flex items-center p-30px",children:[(0,a.jsx)(s.Avatar,{size:64,src:t.avatar}),(0,a.jsx)("div",{children:!i&&t.name}),(0,a.jsx)("div",{children:(0,a.jsxs)(s.Space,{size:18,children:[(0,a.jsx)(r,{Icon:(0,a.jsx)(l.UserDeleteOutlined,{}),text:t.jobName??"",loading:i}),(0,a.jsx)(r,{Icon:(0,a.jsx)(l.HomeOutlined,{}),text:t.organizationName??"",loading:i}),(0,a.jsx)(r,{Icon:(0,a.jsx)(l.SmileOutlined,{}),text:t.locationName??"",loading:i})]})})]})})}},759832:function(e,t,i){"use strict";i.r(t);var a=i("65159"),l=i("111601"),s=i("15093"),r=i("852606"),o=i("964787"),n=i("639367"),c=i.n(n),d=i("326119"),x=i("724326"),p=i("861470");t.default=()=>{let[e,t]=(0,n.useState)({}),[i,g]=(0,n.useState)(!0),[h,m]=(0,n.useState)([]),[u,f]=(0,n.useState)([]),[j,b]=(0,n.useState)([]),y=async()=>{g(!0);try{let e=await (0,o.default)("/api/user/userInfo"),i=await e.data;t(i)}catch(e){r.message.error("Error fetching data:",e)}finally{g(!1)}},v=async()=>{try{let e=await (0,o.default)("/api/user/projects"),t=await e.data.list;m(t)}catch(e){r.message.error("Error fetching data:",e)}finally{g(!1)}},S=async()=>{try{let e=await (0,o.default)("/api/user/teams"),t=await e.data.list;f(t)}catch(e){r.message.error("Error fetching data:",e)}finally{g(!1)}},N=async()=>{try{let e=await (0,o.default)("/api/user/activities"),t=await e.data.list;b(t)}catch(e){r.message.error("Error fetching data:",e)}finally{g(!1)}},k=e=>{let{icon:t,text:i}=e;return(0,a.jsxs)(r.Space,{children:[c().createElement(t),i]})};return(0,n.useEffect)(()=>{v(),y(),S(),N()},[]),(0,a.jsxs)(r.Row,{gutter:[16,16],children:[(0,a.jsx)(d.default,{userInfo:e,loading:i}),(0,a.jsx)(r.Col,{className:"w-[100%]",lg:24,xl:16,children:(0,a.jsxs)("div",{className:"dark:bg-[rgb(33,41,70)] bg-white h-[550px] rounded-md p-[24px] relative",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsx)("h1",{className:"text-2xl font-bold",children:(0,x.t)("pUWDlNFY")})}),(0,a.jsx)("div",{children:(0,a.jsx)(r.Button,{type:"default",onClick:()=>{v()},children:(0,x.t)("ePjvKKGm")})})]}),(0,a.jsx)(r.Row,{gutter:16,children:h.map(e=>(0,a.jsx)(r.Col,{span:8,className:"p-20px",children:(0,a.jsxs)(s.ProCard,{bordered:!0,hoverable:!0,ghost:!0,title:e.title,extra:(0,a.jsx)(s.ProFormGroup,{children:(0,a.jsx)(s.ProFormSwitch,{name:"Enable",noStyle:!0,value:"active"===e.status,checkedChildren:(0,x.t)("CNjonVfr"),unCheckedChildren:(0,x.t)("uTxLCTDT")})}),className:"cursor-pointer",style:{minHeight:"220px",padding:"10px"},children:[(0,a.jsx)("p",{className:"indent",children:e.time}),(0,a.jsx)("p",{className:"indent m-4",children:e.desc})]})},e.id))})]})}),(0,a.jsx)(r.Col,{className:"w-[100%]",lg:24,xl:8,children:(0,a.jsx)("div",{className:"dark:bg-[rgb(33,41,70)] bg-white h-[550px] rounded-md p-[24px] relative overflow-scroll",children:(0,a.jsx)(s.ProList,{pagination:{defaultPageSize:6,showSizeChanger:!0},metas:{title:{},subTitle:{render:(e,t)=>{var i;return(0,a.jsx)(r.Space,{size:0,children:null===(i=t.tag)||void 0===i?void 0:i.map(e=>(0,a.jsx)(r.Tag,{color:e.color,children:e.text},e.color))})}},type:{},avatar:{},content:{render:(e,t)=>(0,a.jsx)("div",{style:{flex:1,display:"flex",justifyContent:"flex-end"},children:(0,a.jsxs)("div",{style:{width:200},children:[(0,a.jsx)(r.Tag,{color:t.color,children:t.status}),(0,a.jsx)(r.Progress,{percent:t.progress})]})})},actions:{}},headerTitle:(0,a.jsx)("h2",{children:(0,x.t)("fEYkyzjq")}),dataSource:u})})}),(0,a.jsx)(r.Col,{className:"w-[100%]",lg:24,xl:16,children:(0,a.jsxs)("div",{className:"dark:bg-[rgb(33,41,70)] bg-white h-[550px] rounded-md p-[24px] relative overflow-scroll",children:[(0,a.jsx)("div",{className:"flex justify-between items-center",children:(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsx)("h1",{className:"text-2xl font-bold",children:(0,x.t)("qaPwtonK")})})}),(0,a.jsx)(r.List,{className:"pt-2",itemLayout:"vertical",size:"large",pagination:{onChange:e=>{console.log(e)},pageSize:4},dataSource:j,renderItem:e=>(0,a.jsxs)(r.List.Item,{actions:[(0,a.jsx)(k,{icon:l.StarOutlined,text:e.star},"list-vertical-star-o"),(0,a.jsx)(k,{icon:l.LikeOutlined,text:e.like},"list-vertical-like-o"),(0,a.jsx)(k,{icon:l.MessageOutlined,text:e.message},"list-vertical-message")],extra:(0,a.jsx)("img",{width:64,height:64,alt:"logo",src:e.avatar}),children:[(0,a.jsx)(r.List.Item.Meta,{avatar:(0,a.jsx)(r.Avatar,{src:e.avatar}),title:(0,a.jsx)("a",{href:e.href,children:e.title}),description:e.desc}),e.content]},e.title)})]})}),(0,a.jsx)(r.Col,{className:"w-[100%]",lg:24,xl:8,children:(0,a.jsxs)("div",{className:"dark:bg-[rgb(33,41,70)]  h-[480px] rounded-md p-[24px] relative",children:[(0,a.jsx)("div",{className:"flex justify-between",children:(0,a.jsx)("span",{className:"dark:text-[rgb(215,220,236)] text-[18px] text-[rgb(18,25,38)]",children:(0,x.t)("EJUKJjId")})}),(0,a.jsxs)("div",{className:"mt-10",children:[" ",(0,a.jsx)(p.default,{})]})]})})]})}},669652:function(e){"use strict";e.exports=JSON.parse('{"background":"rgba(20, 20, 20, 0)","components":{"axis":{"common":{"grid":{"line":{"type":"line","style":{"stroke":"rgba(189, 200, 240, 0.125)","lineWidth":1,"lineDash":null}},"alignTick":true,"animate":true}}},"tooltip":{"domStyles":{"g2-tooltip":{"position":"absolute","visibility":"hidden","zIndex":8,"transition":"left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s","backgroundColor":"#1f1f1f","opacity":0.95,"boxShadow":"0px 2px 4px rgba(0,0,0,.5)","borderRadius":"3px","color":"#A6A6A6","fontSize":"12px","fontFamily":"\\"Segoe UI\\", Roboto, \\"Helvetica Neue\\", Arial,\\n    \\"Noto Sans\\", sans-serif, \\"Apple Color Emoji\\", \\"Segoe UI Emoji\\", \\"Segoe UI Symbol\\",\\n    \\"Noto Color Emoji\\"","lineHeight":"12px","padding":"0 12px 0 12px"},"g2-tooltip-title":{"marginBottom":"12px","marginTop":"12px"},"g2-tooltip-list":{"margin":0,"listStyleType":"none","padding":0},"g2-tooltip-list-item":{"listStyleType":"none","padding":0,"marginBottom":"12px","marginTop":"12px","marginLeft":0,"marginRight":0},"g2-tooltip-marker":{"width":"8px","height":"8px","borderRadius":"50%","display":"inline-block","marginRight":"8px"},"g2-tooltip-value":{"display":"inline-block","float":"right","marginLeft":"30px"}}}},"styleSheet":{"brandColor":"rgba(124, 77, 255, 0.85)","paletteQualitative10":["rgba(124, 77, 255, 0.85)","rgba(144, 202, 249, 0.85)","#65789B","#F6BD16","#7262fd","#78D3F8","#9661BC","#F6903D","#008685","#F08BB4"]}}')},32158:function(e){"use strict";e.exports=JSON.parse('{"background":"rgba(20, 20, 20, 0)","components":{"axis":{"common":{"grid":{"line":{"type":"line","style":{"stroke":"rgb(227,232,239)","lineWidth":1,"lineDash":null}},"alignTick":true,"animate":true}}},"tooltip":{"domStyles":{"g2-tooltip":{"position":"absolute","visibility":"hidden","zIndex":8,"transition":"left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s","backgroundColor":"#ffffff","opacity":0.95,"boxShadow":"rgb(174, 174, 174) 0px 0px 10px","borderRadius":"3px","color":"#A6A6A6","fontSize":"12px","fontFamily":"\\"Segoe UI\\", Roboto, \\"Helvetica Neue\\", Arial,\\n    \\"Noto Sans\\", sans-serif, \\"Apple Color Emoji\\", \\"Segoe UI Emoji\\", \\"Segoe UI Symbol\\",\\n    \\"Noto Color Emoji\\"","lineHeight":"12px","padding":"0 12px 0 12px"},"g2-tooltip-title":{"marginBottom":"12px","marginTop":"12px"},"g2-tooltip-list":{"margin":0,"listStyleType":"none","padding":0},"g2-tooltip-list-item":{"listStyleType":"none","padding":0,"marginBottom":"12px","marginTop":"12px","marginLeft":0,"marginRight":0},"g2-tooltip-marker":{"width":"8px","height":"8px","borderRadius":"50%","display":"inline-block","marginRight":"8px"},"g2-tooltip-value":{"display":"inline-block","float":"right","marginLeft":"30px"}}}},"styleSheet":{"brandColor":"rgba(124, 77, 255, 0.85)","paletteQualitative10":["rgba(124, 77, 255, 0.85)","rgba(144, 202, 249, 0.85)","#65789B","#F6BD16","#7262fd","#78D3F8","#9661BC","#F6903D","#008685","#F08BB4"]}}')}}]);