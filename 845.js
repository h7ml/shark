!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="54d1440e-22f3-4664-a489-7f66ec065968",e._sentryDebugIdIdentifier="sentry-dbid-54d1440e-22f3-4664-a489-7f66ec065968")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"c88dc1c1a17bfc0c4fb7d84e4eba8711ff2bdb69"},(self.webpackChunkshark=self.webpackChunkshark||[]).push([["845"],{317577:function(e,t,r){"use strict";r.r(t);var s=r("65159"),l=r("111601"),n=r("989488"),a=r("852606"),i=r("639367"),d=r("724326");t.default=e=>{var t;let{data:r}=e,c=(0,i.useRef)(null);return(0,i.useEffect)(()=>{if(!c.current||!r.length)return;let e=new n.Column(c.current,{data:r,isGroup:!0,xField:"month",yField:"sales",seriesField:"name",dodgePadding:2,intervalPadding:20,legend:{itemName:{style:{fill:"#fff",fontSize:12}}},label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]}});return e.render(),()=>{e&&e.destroy()}},[r]),(0,s.jsx)(a.Col,{lg:12,xl:6,className:"w-[100%]",children:(0,s.jsxs)("div",{className:"dark:bg-[rgb(33,41,70)] w-[100%] bg-[rgb(94,53,177)] overflow-hidden h-[241px] relative rounded-md bg-card p-[32px] box-border",children:[(0,s.jsx)("div",{className:"absolute top-[24px] right-[24px] z-10",children:(0,s.jsx)(a.Tooltip,{title:(0,d.t)("iLyPEqwQ"),children:(0,s.jsx)(l.InfoCircleOutlined,{className:"text-[rgb(179,157,219)] text-[20px]"})})}),(0,s.jsxs)("div",{className:"text-white text-[16px]",children:[(0,d.t)("pqONtvkK")," ",null===(t=r[0])||void 0===t?void 0:t.sales]}),(0,s.jsx)("div",{className:"mt-[10px] text-[rgba(229,224,216,0.85)] text-[16px] flex gap-[24px]",children:(0,s.jsx)("div",{ref:c,className:"w-full h-[150px]"},r.length)}),(0,s.jsx)(a.Divider,{className:"dark:bg-[rgb(189,200,240)] bg-[rgb(227,232,239)] opacity-[0.2] my-[16px]"}),(0,s.jsxs)("div",{className:"text-[rgba(229,224,216,0.85)] text-[16px]",children:[(0,s.jsx)("span",{children:(0,d.t)("sehypRaO")}),(0,s.jsx)("span",{className:"ml-[8px]",children:"9,431"})]})]})})}},43626:function(e,t,r){"use strict";r.r(t);var s=r("65159"),l=r("111601"),n=r("989488"),a=r("852606"),i=r("639367"),d=r("724326");t.default=e=>{let{data:t}=e,r=(0,i.useRef)(null);return(0,i.useEffect)(()=>{if(!r.current||!t.length)return;let e=new n.TinyLine(r.current,{height:60,autoFit:!1,data:t,smooth:!0,color:"#fff"});return e.render(),()=>{e&&e.destroy()}},[t]),(0,s.jsx)(a.Col,{lg:12,xl:6,className:"w-[100%]",children:(0,s.jsxs)("div",{className:"dark:bg-[rgb(33,41,70)] bg-[rgb(30,136,229)] theme1 overflow-hidden h-[241px] relative rounded-md bg-card p-[32px] box-border",children:[(0,s.jsx)("div",{className:"absolute top-[24px] right-[24px] z-10",children:(0,s.jsx)(a.Tooltip,{title:(0,d.t)("iLyPEqwQ"),children:(0,s.jsx)(l.InfoCircleOutlined,{className:"text-[rgb(179,157,219)] text-[20px]"})})}),(0,s.jsx)("div",{className:"text-white text-[16px]",children:(0,d.t)("fHAcoQib")}),(0,s.jsx)("div",{className:"text-white text-2xl mt-[20px] text-[30px]",children:"520"}),(0,s.jsx)("div",{className:"mt-[20px] text-[rgba(229,224,216,0.85)] text-[16px] flex gap-[24px]",children:(0,s.jsx)("div",{ref:r,className:"w-full h-[150px]"},t.length)}),(0,s.jsx)(a.Divider,{className:"dark:bg-[rgb(189,200,240)] bg-[rgb(227,232,239)] opacity-[0.2] my-[16px]"}),(0,s.jsxs)("div",{className:"text-[rgba(229,224,216,0.85)] text-[16px]",children:[(0,s.jsx)("span",{children:(0,d.t)("sehypRaO")}),(0,s.jsx)("span",{className:"ml-[8px]",children:"9,431"})]})]})})}},858005:function(e,t,r){"use strict";r.r(t);var s=r("65159"),l=r("989488"),n=r("852606"),a=r("639367"),i=r("724326");t.default=e=>{let{data:t}=e,r=(0,a.useRef)(null);return(0,a.useEffect)(()=>{if(!r.current||!t.length)return;let e=new l.Radar(r.current,{data:t,xField:"item",yField:"user",meta:{score:{min:0,nice:!0}},area:{}});return e.render(),()=>{e&&e.destroy()}},[t]),(0,s.jsx)(n.Card,{title:(0,i.t)("qxzPAQtH"),className:"content-distribution",children:(0,s.jsx)("div",{ref:r,className:"w-full h-[150px]"},t.length)})}},709328:function(e,t,r){"use strict";r.r(t);var s=r("65159"),l=r("989488"),n=r("852606"),a=r("639367"),i=r("724326");t.default=e=>{let{data:t}=e,r=[(0,a.useRef)(null),(0,a.useRef)(null),(0,a.useRef)(null)];return(0,a.useEffect)(()=>{var e,s,n;if(!(null===(e=t.image)||void 0===e?void 0:e.length)||!(null===(s=t.text)||void 0===s?void 0:s.length)||!(null===(n=t.video)||void 0===n?void 0:n.length))return;console.log("%c [ data ]-26","font-size:13px; background:pink; color:#bf2c9f;",t);let a=(e,t)=>{if(!e.current||0===t.length)return;let r=new l.Pie(e.current,{appendPadding:10,data:t,angleField:"value",colorField:"type",radius:1,innerRadius:.64,meta:{value:{formatter:e=>`\xa5 ${e}`}},label:{type:"inner",offset:"-50%",autoRotate:!1,style:{textAlign:"center"},formatter:e=>{let{percent:t}=e;return`${(100*t).toFixed(0)}%`}},statistic:{title:{offsetY:-8},content:{offsetY:-4}},interactions:[{type:"element-selected"},{type:"element-active"},{type:"pie-statistic-active",cfg:{start:[{trigger:"element:mouseenter",action:"pie-statistic:change"},{trigger:"legend-item:mouseenter",action:"pie-statistic:change"}],end:[{trigger:"element:mouseleave",action:"pie-statistic:reset"},{trigger:"legend-item:mouseleave",action:"pie-statistic:reset"}]}}]});return r.render(),()=>{r.destroy()}};a(r[0],t.image),a(r[1],t.text),a(r[2],t.video)},[t,t.image,t.text,t.video]),(0,s.jsx)(n.Card,{title:(0,i.t)("esuMZlgc"),className:"h-[500px]",children:(0,s.jsx)(n.Row,{gutter:[16,16],className:"flex items-center justify-center",children:r.map((e,t)=>(0,s.jsx)(n.Col,{span:6,children:(0,s.jsx)("div",{ref:e,className:"w-full h-[350px]"})},t))})})}},282366:function(e,t,r){"use strict";r.r(t);var s=r("65159"),l=r("989488"),n=r("852606"),a=r("639367"),i=r("724326");t.default=e=>{let{data:t}=e,r=(0,a.useRef)(null);return(0,a.useEffect)(()=>{if(!r.current||!t.length)return;let e=new l.Line(r.current,{data:t,xField:"year",yField:"gdp",seriesField:"name",yAxis:{label:{formatter:e=>`${(e/1e9).toFixed(1)} B`}},legend:{position:"top"},smooth:!0,area:{style:{fillOpacity:.15}},animation:{appear:{animation:"wave-in",duration:3e3}}});return e.render(),()=>{e&&e.destroy()}},[t]),(0,s.jsx)(n.Card,{title:(0,i.t)("eyGOrIXr"),className:"overview-statistics h-[500px]",children:(0,s.jsx)("div",{ref:r,className:"w-full"},t.length)},t.length)}},285112:function(e,t,r){"use strict";r.r(t);var s=r("65159"),l=r("989488"),n=r("852606"),a=r("639367"),i=r("724326");t.default=e=>{let{data:t}=e,r=(0,a.useRef)(null);return(0,a.useEffect)(()=>{if(!r.current||!t.length)return;let e=new l.Bar(r.current,{data:t,xField:"sales",yField:"type",legend:{position:"top-left"},barBackground:{style:{fill:"rgba(0,0,0,0.1)"}},interactions:[{type:"active-region",enable:!1}]});return e.render(),()=>{e&&e.destroy()}},[t]),(0,s.jsx)(n.Card,{title:(0,i.t)("CupRZibN"),bordered:!1,className:"today-metrics",children:(0,s.jsx)("div",{ref:r,className:"w-full h-[150px]"},t.length)})}},784770:function(e,t,r){"use strict";r.r(t);var s=r("65159"),l=r("111601"),n=r("989488"),a=r("852606"),i=r("639367"),d=r("724326");t.default=e=>{var t;let{data:r}=e,c=(0,i.useRef)(null);return(0,i.useEffect)(()=>{if(!c.current||!r.length)return;let e=new n.Column(c.current,{data:r,isGroup:!0,xField:"month",yField:"sales",color:["#5B8FF9","#5AD8A6","#a66100"],seriesField:"name",dodgePadding:2,intervalPadding:20,tooltip:{formatter:e=>({name:`${e.name}`,value:e.sales})},legend:{itemName:{style:{fill:"#fff",fontSize:12}}},label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]}});return e.render(),()=>{e&&e.destroy()}},[r]),(0,s.jsx)(a.Col,{xl:6,lg:12,className:"w-[100%]",children:(0,s.jsxs)("div",{className:"dark:bg-[rgb(33,41,70)] w-[100%] bg-[rgb(94,53,177)] overflow-hidden h-[241px] relative rounded-md bg-card p-[32px] box-border",children:[(0,s.jsx)("div",{className:"absolute top-[24px] right-[24px] z-10",children:(0,s.jsx)(a.Tooltip,{title:(0,d.t)("iLyPEqwQ"),children:(0,s.jsx)(l.InfoCircleOutlined,{className:"text-[rgb(179,157,219)] text-[20px]"})})}),(0,s.jsxs)("div",{className:"text-white text-[16px]",children:[(0,d.t)("JyQfodSl")," ",null===(t=r[0])||void 0===t?void 0:t.sales]}),(0,s.jsx)("div",{className:"mt-[10px] text-[rgba(229,224,216,0.85)] text-[16px] flex gap-[24px]",children:(0,s.jsx)("div",{ref:c,className:"w-full h-[150px]"},r.length)}),(0,s.jsx)(a.Divider,{className:"dark:bg-[rgb(189,200,240)] bg-[rgb(227,232,239)] opacity-[0.2] my-[16px]"}),(0,s.jsxs)("div",{className:"text-[rgba(229,224,216,0.85)] text-[16px]",children:[(0,s.jsx)("span",{children:(0,d.t)("sehypRaO")}),(0,s.jsx)("span",{className:"ml-[8px]",children:"9,431"})]})]})})}},169534:function(e,t,r){"use strict";r.r(t);var s=r("65159"),l=r("111601"),n=r("989488"),a=r("852606"),i=r("639367"),d=r("724326");t.default=e=>{let{data:t}=e,r=(0,i.useRef)(null);return(0,i.useEffect)(()=>{if(!r.current||!t.length)return;let e=new n.TinyLine(r.current,{height:60,autoFit:!1,data:t,color:"#ffffff",smooth:!0});return e.render(),()=>{e&&e.destroy()}},[t]),(0,s.jsx)(a.Col,{xl:6,lg:12,className:"w-[100%]",children:(0,s.jsxs)("div",{className:"dark:bg-[rgb(33,41,70)] bg-[rgb(30,136,229)] theme1 overflow-hidden h-[241px] relative rounded-md bg-card p-[32px] box-border",children:[(0,s.jsx)("div",{className:"absolute top-[24px] right-[24px] z-10",children:(0,s.jsx)(a.Tooltip,{title:(0,d.t)("iLyPEqwQ"),children:(0,s.jsx)(l.InfoCircleOutlined,{className:"text-[rgb(179,157,219)] text-[20px]"})})}),(0,s.jsx)("div",{className:"text-white text-[16px]",children:(0,d.t)("wpVTrIbg")}),(0,s.jsx)("div",{className:"text-white text-2xl mt-[20px] text-[30px]",children:"1,314"}),(0,s.jsx)("div",{className:"mt-[20px] text-[rgba(229,224,216,0.85)] text-[16px] flex gap-[24px]",children:(0,s.jsx)("div",{ref:r,className:"w-full h-[150px]"},t.length)}),(0,s.jsx)(a.Divider,{className:"dark:bg-[rgb(189,200,240)] bg-[rgb(227,232,239)] opacity-[0.2] my-[16px]"}),(0,s.jsxs)("div",{className:"text-[rgba(229,224,216,0.85)] text-[16px]",children:[(0,s.jsx)("span",{children:(0,d.t)("sehypRaO")}),(0,s.jsx)("span",{className:"ml-[8px]",children:"9,431"})]})]})})}},956590:function(e,t,r){"use strict";r.r(t),r.d(t,{ContentConsumption:function(){return s.default},ContentConsumptionTrend:function(){return l.default},ContentDistribution:function(){return n.default},ContentSource:function(){return a.default},OverviewStatistics:function(){return i.default},TodayMetrics:function(){return d.default},UserRetention:function(){return c.default},UserRetentionTrend:function(){return o.default}});var s=r("317577"),l=r("43626"),n=r("858005"),a=r("709328"),i=r("282366"),d=r("285112"),c=r("784770"),o=r("169534")},378027:function(e,t,r){"use strict";r.r(t);var s=r("65159"),l=r("852606"),n=r("964787"),a=r("639367"),i=r("956590");t.default=()=>{let[e,t]=(0,a.useState)([]),[r,d]=(0,a.useState)([]),[c,o]=(0,a.useState)([]),[u,x]=(0,a.useState)([]),[f,p]=(0,a.useState)([]),[g,m]=(0,a.useState)({}),[h,v]=(0,a.useState)([]),[b,j]=(0,a.useState)([]),y=async()=>{try{let{data:{overview:e,today:r,contentDistribution:s,userRetention:l,userRetentionData:a,contentConsumptionTrend:i,contentConsumptionData:c,contentSource:u}}=await n.default.get("/api/visualization/overview");t(e),d(r),o(s),v(l),p(c),m(u),x(a),j(i)}catch(e){console.error("Error fetching overview data:",e),l.message.error(`Failed to fetch overview data${e}`)}};return(0,a.useEffect)(()=>{y()},[]),(0,s.jsxs)("div",{className:"multi-dimension-data-analysis w-full h-full",children:[(0,s.jsxs)(l.Row,{gutter:[16,16],className:"mb-8",children:[(0,s.jsx)(l.Col,{span:18,lg:24,xl:18,xs:24,className:"w-[100%]",children:(0,s.jsx)(i.OverviewStatistics,{data:e})}),(0,s.jsx)(l.Col,{span:6,lg:24,xl:6,xs:24,className:"w-[100%]",children:(0,s.jsxs)(l.Row,{gutter:[16,16],children:[(0,s.jsx)(l.Col,{span:24,xs:24,sm:24,lg:12,xl:24,children:(0,s.jsx)(i.TodayMetrics,{data:r})}),(0,s.jsx)(l.Col,{span:24,xs:24,sm:24,lg:12,xl:24,children:(0,s.jsx)(i.ContentDistribution,{data:c})})]})})]}),(0,s.jsxs)(l.Row,{gutter:[16,16],className:"mb-8",children:[(0,s.jsx)(i.UserRetentionTrend,{data:h}),(0,s.jsx)(i.UserRetention,{data:u}),(0,s.jsx)(i.ContentConsumptionTrend,{data:b}),(0,s.jsx)(i.ContentConsumption,{data:f})]}),(0,s.jsx)(l.Row,{gutter:[16,16],className:"mb-8",children:(0,s.jsx)(l.Col,{lg:24,xl:24,className:"w-[100%]",children:(0,s.jsx)(i.ContentSource,{data:g})})})]})}}}]);
//# sourceMappingURL=845.js.map