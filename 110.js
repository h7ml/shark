!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="850aa4b1-228a-4515-b7bf-323146b6976e",e._sentryDebugIdIdentifier="sentry-dbid-850aa4b1-228a-4515-b7bf-323146b6976e")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"ceb614c88c90bf4f87b39485d8bc9eedeeeb9a87"},(self.webpackChunkshark=self.webpackChunkshark||[]).push([["110"],{921407:function(e,t,n){"use strict";n.r(t);var i=n("65159"),s=n("111601"),l=n("852606"),r=n("724326");t.default=()=>{let e=e=>{l.message.info((0,r.t)("SgVWDhMx")+e)},t=[{label:(0,r.t)("XhPgzZQz"),description:(0,r.t)("SIRRAXfv"),actionText:(0,r.t)("xPHnIQKB"),icon:(0,i.jsx)(s.TaobaoCircleOutlined,{}),onClick:()=>e((0,r.t)("XhPgzZQz"))},{label:(0,r.t)("RipNIbTf"),description:(0,r.t)("QrQOyTVU"),actionText:(0,r.t)("xPHnIQKB"),icon:(0,i.jsx)(s.AlipayCircleOutlined,{}),onClick:()=>e((0,r.t)("RipNIbTf"))},{label:(0,r.t)("qWdQvZAh"),description:(0,r.t)("GjPQtzZg"),actionText:(0,r.t)("xPHnIQKB"),icon:(0,i.jsx)(s.DingdingOutlined,{}),onClick:()=>e((0,r.t)("qWdQvZAh"))}];return(0,i.jsx)(l.List,{dataSource:t,renderItem:e=>(0,i.jsx)(l.List.Item,{actions:[(0,i.jsx)(l.Button,{type:"primary",icon:e.icon,onClick:e.onClick,children:e.actionText},e.label)],children:(0,i.jsx)(l.List.Item.Meta,{title:e.label,description:e.description,avatar:e.icon})})})}},383703:function(e,t,n){"use strict";n.r(t);var i=n("65159"),s=n("111601"),l=n("852606"),r=n("639367"),a=n("724326");let{Option:c}=l.Select;t.default=e=>{let{initialValues:t}=e,[n,o]=(0,r.useState)({innerHeight:window.innerHeight,innerWidth:window.innerWidth}),u=()=>({innerHeight:window.innerHeight,innerWidth:window.innerWidth}),[d,x]=(0,r.useState)("horizontal"),m=()=>{o(u())};(0,r.useEffect)(()=>(window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)),[m]),(0,r.useEffect)(()=>{n.innerWidth<1444?x("vertical"):x("horizontal")},[n]);let f=(0,r.createRef)();return(0,r.useEffect)(()=>{var e;null===(e=f.current)||void 0===e||e.setFieldsValue(t)},[t,f]),(0,i.jsxs)(l.Form,{layout:d,labelCol:{xs:{span:3},sm:{span:4},xl:{span:3},xxl:{span:1}},wrapperCol:{xs:{span:20},sm:{span:20},xl:{span:20},xxl:{span:24}},name:"basic",initialValues:t,ref:f,onFinish:e=>{console.log((0,a.t)("hnZlncWV"),e),l.message.success((0,a.t)("NKuxNtiN"))},children:[(0,i.jsx)(l.Form.Item,{label:(0,a.t)("SNAGFLKG"),name:"email",children:(0,i.jsx)(l.Input,{prefix:(0,i.jsx)(s.MailOutlined,{})})}),(0,i.jsx)(l.Form.Item,{label:(0,a.t)("zftzxIbQ"),name:"name",children:(0,i.jsx)(l.Input,{prefix:(0,i.jsx)(s.UserOutlined,{})})}),(0,i.jsx)(l.Form.Item,{label:(0,a.t)("evHCncJl"),name:"bio",children:(0,i.jsx)(l.Input.TextArea,{})}),(0,i.jsx)(l.Form.Item,{label:(0,a.t)("cBceotBD")+(0,a.t)("ayJmpoqD"),name:"country",children:(0,i.jsxs)(l.Select,{children:[(0,i.jsx)(c,{value:"china",children:(0,a.t)("vGmQmAMk")}),(0,i.jsx)(c,{value:"usa",children:(0,a.t)("XGgjnViF")}),(0,i.jsx)(c,{value:"uk",children:(0,a.t)("TsbWmGuB")})]})}),(0,i.jsx)(l.Form.Item,{label:(0,a.t)("XEqazrEB"),name:"province",children:(0,i.jsxs)(l.Select,{children:[(0,i.jsx)(c,{value:"hangzhou",children:(0,a.t)("eOUPbcki")}),(0,i.jsx)(c,{value:"beijing",children:(0,a.t)("tltsmvNI")}),(0,i.jsx)(c,{value:"shanghai",children:(0,a.t)("sKbUhUHI")})]})}),(0,i.jsx)(l.Form.Item,{label:(0,a.t)("oenWOwMj"),name:"address",children:(0,i.jsx)(l.Input,{prefix:(0,i.jsx)(s.EnvironmentOutlined,{})})}),(0,i.jsx)(l.Form.Item,{label:(0,a.t)("gOmjGYWq"),name:"phone",children:(0,i.jsx)(l.Input,{prefix:(0,i.jsx)(s.PhoneOutlined,{})})}),(0,i.jsx)(l.Form.Item,{wrapperCol:{offset:6,span:12},children:(0,i.jsx)(l.Button,{type:"primary",htmlType:"submit",children:(0,a.t)("RHLEUfmJ")})})]})}},22403:function(e,t,n){"use strict";n.r(t);var i=n("65159"),s=n("111601"),l=n("852606");n("639367");var r=n("724326");t.default=()=>{let e=(e,t)=>{t?l.message.success(e+(0,r.t)("UBaaIhRz")):l.message.warning(e+(0,r.t)("zxKapmMZ"))},t=[{label:(0,r.t)("NgurvQpF"),description:(0,r.t)("vhffWciQ")},{label:(0,r.t)("aUYbuxNo"),description:(0,r.t)("QbMgaoIl")},{label:(0,r.t)("kogXAMJe"),description:(0,r.t)("oCyIgtAK")}];return(0,i.jsx)(l.List,{dataSource:t,renderItem:t=>(0,i.jsxs)(l.List.Item,{children:[(0,i.jsx)(l.List.Item.Meta,{avatar:(0,i.jsx)(s.MessageOutlined,{}),title:t.label,description:t.description}),(0,i.jsx)(l.Switch,{onChange:n=>e(t.label,n)})]})})}},100735:function(e,t,n){"use strict";n.r(t);var i=n("65159"),s=n("111601"),l=n("852606"),r=n("724326");t.default=()=>{let e=e=>{console.log((0,r.t)("rTBudEaE"),e),l.message.success(e?(0,r.t)("FphnGMoe"):(0,r.t)("SEpzlmTu"))},t=[{label:(0,r.t)("ISgGbAfg"),icon:(0,i.jsx)(s.FileDoneOutlined,{}),switchName:"autoSave"},{label:(0,r.t)("YtxCurUj"),icon:(0,i.jsx)(s.NotificationOutlined,{}),switchName:"pushNotification"}];return(0,i.jsx)(l.List,{itemLayout:"horizontal",dataSource:t,renderItem:t=>(0,i.jsx)(l.List.Item,{actions:[(0,i.jsx)(l.Switch,{onChange:e},t.switchName)],children:(0,i.jsx)(l.List.Item.Meta,{title:t.label,avatar:t.icon})})})}},695049:function(e,t,n){"use strict";n.r(t);var i=n("65159"),s=n("111601"),l=n("852606"),r=n("724326");t.default=()=>{let e=(e,t)=>{console.log(`${e}switch checked:${t}`),l.message.success(e+(0,r.t)("HMaQZhGm"))},t=[{label:(0,r.t)("kqUohMSE"),description:(0,r.t)("iOsdcNRA"),icon:(0,i.jsx)(s.EyeOutlined,{})},{label:(0,r.t)("qIfUlseW"),description:(0,r.t)("QbeIQyEh"),icon:(0,i.jsx)(s.MessageOutlined,{})},{label:(0,r.t)("nNurrMVz"),description:(0,r.t)("bZFyJMPL"),icon:(0,i.jsx)(s.EnvironmentOutlined,{})}];return(0,i.jsx)(l.List,{dataSource:t,renderItem:t=>(0,i.jsxs)(l.List.Item,{children:[(0,i.jsx)(l.List.Item.Meta,{avatar:(0,i.jsx)(s.MessageOutlined,{}),title:t.label,description:t.description}),(0,i.jsx)(l.Switch,{onChange:n=>e(t.label,n)})]})})}},905552:function(e,t,n){"use strict";n.r(t);var i=n("65159"),s=n("111601"),l=n("852606"),r=n("639367"),a=n("724326");t.default=e=>{let{initialValues:t}=e,n=(0,r.createRef)();return(0,r.useEffect)(()=>{n.current.setFieldsValue({...t})},[n,t]),(0,i.jsxs)(l.Form,{ref:n,name:"Security",initialValues:t,onFinish:e=>{console.log((0,a.t)("yWbuIGhz"),e),l.message.success((0,a.t)("BlRirpwH"))},labelCol:{xs:{span:3},sm:{span:4},xl:{span:3},xxl:{span:1}},wrapperCol:{xs:{span:18},sm:{span:16},xl:{span:18},xxl:{span:24}},children:[(0,i.jsx)(l.Form.Item,{label:(0,a.t)("njXYEynU"),name:"securityQuestion",rules:[{required:!0,message:(0,a.t)("KUMIJekk")}],children:(0,i.jsx)(l.Input,{placeholder:(0,a.t)("bbIbHVwd"),prefix:(0,i.jsx)(s.LockOutlined,{})})}),(0,i.jsx)(l.Form.Item,{label:(0,a.t)("cvYvFokH"),name:"securityAnswer",rules:[{required:!0,message:(0,a.t)("nCPRMVhR")}],children:(0,i.jsx)(l.Input,{placeholder:(0,a.t)("cfwLcPPd"),prefix:(0,i.jsx)(s.SafetyCertificateOutlined,{})})}),(0,i.jsx)(l.Form.Item,{wrapperCol:{offset:3,span:12},children:(0,i.jsx)(l.Button,{type:"primary",htmlType:"submit",children:(0,a.t)("ESAyGyrI")})}),(0,i.jsx)(l.Form.Item,{wrapperCol:{offset:3,span:12},children:(0,i.jsxs)("p",{style:{color:"rgba(0, 0, 0, 0.45)"},children:[(0,a.t)("ESAyGyrdVQjPFAxI"),"：",(0,a.t)("ESAyGyrI"),"+",(0,a.t)("gdkwwWni"),"，",(0,a.t)("DriXrcRa"),"。"]})})]})}},576941:function(e,t,n){"use strict";n.r(t);var i=n("65159"),s=n("111601"),l=n("852606"),r=n("724326"),a=n("289220");t.default=e=>{let{initialValues:t}=e,n=e=>{l.message.info((0,r.t)("zfmpMsaW")+e)},c=e=>{l.message.info((0,r.t)("TOAgGNwI")+e)},o=[{label:(0,r.t)("XDDygNKc"),description:`${(0,r.t)("MNBfnxHR")}:${(0,r.t)("UIxSANHe")}`,actionText:(0,r.t)("ZZpaYhHt"),icon:(0,i.jsx)(s.LockOutlined,{}),onClick:()=>n((0,r.t)("XDDygNKc"))},{label:(0,r.t)("wraFvpuy"),description:(0,r.t)("QXhSiVyQ")+(0,a.encryptEmailOrPhone)(t.phone),actionText:(0,r.t)("ZZpaYhHt"),icon:(0,i.jsx)(s.MobileOutlined,{}),onClick:()=>n((0,r.t)("wraFvpuy"))},{label:(0,r.t)("njXYEynU"),description:(0,r.t)("mDnminvj")+(0,r.t)("jZEEobGJ"),actionText:(0,r.t)("cwWPaHkH"),icon:(0,i.jsx)(s.SafetyOutlined,{}),onClick:()=>c((0,r.t)("njXYEynU"))},{label:(0,r.t)("xkzNUjws"),description:`${(0,r.t)("TWTeLLQt")}${(0,a.encryptEmailOrPhone)(null==t?void 0:t.email)}`,actionText:(0,r.t)("ZZpaYhHt"),icon:(0,i.jsx)(s.MailOutlined,{}),onClick:()=>n((0,r.t)("xkzNUjws"))},{label:`MFA ${(0,r.t)("EbxHIGls")}`,description:`${(0,r.t)("MMTXjiFW")} MFA ${(0,r.t)("EbxHIGls")}${(0,r.t)("HCZWSQxS")}${(0,r.t)("wcNrfzza")}`,actionText:(0,r.t)("xPHnIQKB"),icon:(0,i.jsx)(s.SafetyOutlined,{}),onClick:()=>c(`MFA${(0,r.t)("EbxHIGls")}`)}];return(0,i.jsx)(l.List,{dataSource:o,renderItem:e=>(0,i.jsx)(l.List.Item,{actions:[(0,i.jsx)(l.Button,{type:"primary",onClick:e.onClick,icon:e.icon,className:"ml-2",children:e.actionText},e.label)],children:(0,i.jsx)(l.Skeleton,{title:!1,loading:!1,active:!0,children:(0,i.jsx)(l.List.Item.Meta,{title:(0,i.jsx)("a",{href:"https://ant.design",children:e.label}),description:e.description})})},e.label)})}},977881:function(e,t,n){"use strict";n.r(t);var i=n("65159"),s=n("111601"),l=n("852606"),r=n("724326");t.default=()=>{let e=e=>{l.message.info((0,r.t)("SgVWDhMx")+e)},t=e=>{l.message.info((0,r.t)("PxMuznqD")+e)},n=[{label:(0,r.t)("XSSuwAHE"),description:(0,r.t)("nIogWQHm"),bindActionText:(0,r.t)("xPHnIQKB"),bindOnClick:()=>e((0,r.t)("XSSuwAHE")),unbindActionText:(0,r.t)("CNsvKxfN"),unbindOnClick:()=>t((0,r.t)("XSSuwAHE")),icon:(0,i.jsx)(s.WechatOutlined,{})},{label:(0,r.t)("jPDlVQkL"),description:(0,r.t)("mKAhwTQX"),bindActionText:(0,r.t)("xPHnIQKB"),bindOnClick:()=>e((0,r.t)("jPDlVQkL")),unbindActionText:(0,r.t)("CNsvKxfN"),unbindOnClick:()=>t((0,r.t)("jPDlVQkL")),icon:(0,i.jsx)(s.WeiboOutlined,{})},{label:"QQ",description:`${(0,r.t)("HAUaYkwY")}QQ${(0,r.t)("RNISycbR")}`,bindActionText:(0,r.t)("xPHnIQKB"),bindOnClick:()=>e("QQ"),unbindActionText:(0,r.t)("CNsvKxfN"),unbindOnClick:()=>t("QQ"),icon:(0,i.jsx)(s.QqOutlined,{})}];return(0,i.jsx)(l.List,{dataSource:n,renderItem:e=>(0,i.jsx)(l.List.Item,{actions:[(0,i.jsx)(l.Button,{type:"primary",icon:e.icon,onClick:e.unbindOnClick,children:e.bindActionText},e.label)],children:(0,i.jsx)(l.List.Item.Meta,{title:e.label,description:e.description,avatar:e.icon})})})}},512855:function(e,t,n){"use strict";n.r(t),n.d(t,{AccountBindingForm:function(){return i.default},BasicSettingsForm:function(){return s.default},NotificationSettingsForm:function(){return l.default},OtherSettingsForm:function(){return r.default},PrivacySettingsForm:function(){return a.default},SecurityQuestionsForm:function(){return c.default},SecuritySettingsForm:function(){return o.default},SocialAccountsForm:function(){return u.default}});var i=n("921407"),s=n("383703"),l=n("22403"),r=n("100735"),a=n("695049"),c=n("905552"),o=n("576941"),u=n("977881")},361402:function(e,t,n){"use strict";n.r(t);var i=n("65159"),s=n("111601"),l=n("852606"),r=n("964787"),a=n("639367"),c=n("512855"),o=n("724326");t.default=function(){let[e,t]=(0,a.useState)({}),[n,u]=(0,a.useState)(!0),[d,x]=(0,a.useState)("left"),m=async()=>{u(!0);try{let e=await (0,r.default)("/api/user/userInfo"),n=await e.data;t(n)}catch(e){l.message.error(`Error fetching data: ${e}`)}finally{u(!1)}};return(0,a.useEffect)(()=>{m();let e=()=>{window.innerWidth<=768?x("top"):x("left")};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,i.jsx)(l.Spin,{spinning:n,children:(0,i.jsx)(l.Tabs,{tabPosition:d,items:[{key:"basic",label:(0,o.t)("LMAHHmyg"),icon:(0,i.jsx)(s.UserOutlined,{}),children:(0,i.jsx)(c.BasicSettingsForm,{initialValues:e})},{key:"security",label:(0,o.t)("LvKCwApB"),icon:(0,i.jsx)(s.LockOutlined,{}),children:(0,i.jsx)(c.SecuritySettingsForm,{initialValues:e})},{key:"account",label:(0,o.t)("fPrWgsff"),icon:(0,i.jsx)(s.GoogleOutlined,{}),children:(0,i.jsx)(c.AccountBindingForm,{})},{key:"notification",label:(0,o.t)("HHAcBCvx"),icon:(0,i.jsx)(s.SoundOutlined,{}),children:(0,i.jsx)(c.NotificationSettingsForm,{})},{key:"privacy",label:(0,o.t)("tAgmoaue"),icon:(0,i.jsx)(s.EyeOutlined,{}),children:(0,i.jsx)(c.PrivacySettingsForm,{})},{key:"Security",label:(0,o.t)("PLxZtTEi"),icon:(0,i.jsx)(s.SafetyCertificateOutlined,{}),children:(0,i.jsx)(c.SecurityQuestionsForm,{initialValues:{securityQuestion:(0,o.t)("emmgqHVG"),securityAnswer:"1990-01-01"}})},{key:"social",label:(0,o.t)("JEjeIsXn"),icon:(0,i.jsx)(s.AppstoreOutlined,{}),children:(0,i.jsx)(c.SocialAccountsForm,{})},{key:"other",label:(0,o.t)("guKNpWmX"),icon:(0,i.jsx)(s.SettingOutlined,{}),children:(0,i.jsx)(c.OtherSettingsForm,{})}]})})}}}]);
//# sourceMappingURL=110.js.map