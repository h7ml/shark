!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},i=Error().stack;i&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[i]="2e84e778-2072-4578-86cb-e2fe9e357453",e._sentryDebugIdIdentifier="sentry-dbid-2e84e778-2072-4578-86cb-e2fe9e357453")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"cdcc35f368a177978a2fc4bf6673b68b9c39385e"},(self.webpackChunkshark=self.webpackChunkshark||[]).push([["110"],{921407:function(e,i,n){"use strict";n.r(i);var t=n("65159"),s=n("595090"),l=n("571389");i.default=()=>{let e=e=>{l.message.info(`开始绑定${e}`)},i=[{label:"淘宝",description:"当前未绑定淘宝账号",actionText:"绑定",icon:(0,t.jsx)(s.TaobaoCircleOutlined,{}),onClick:()=>e("淘宝")},{label:"支付宝",description:"当前未绑定支付宝账号",actionText:"绑定",icon:(0,t.jsx)(s.AlipayCircleOutlined,{}),onClick:()=>e("支付宝")},{label:"钉钉",description:"当前未绑定钉钉账号",actionText:"绑定",icon:(0,t.jsx)(s.DingdingOutlined,{}),onClick:()=>e("钉钉")}];return(0,t.jsx)(l.List,{dataSource:i,renderItem:e=>(0,t.jsx)(l.List.Item,{actions:[(0,t.jsx)(l.Button,{type:"primary",icon:e.icon,onClick:e.onClick,children:e.actionText},e.label)],children:(0,t.jsx)(l.List.Item.Meta,{title:e.label,description:e.description,avatar:e.icon})})})}},383703:function(e,i,n){"use strict";n.r(i);var t=n("65159"),s=n("595090"),l=n("571389"),r=n("639367");let{Option:a}=l.Select;i.default=e=>{let{initialValues:i}=e,[n,c]=(0,r.useState)({innerHeight:window.innerHeight,innerWidth:window.innerWidth}),o=()=>({innerHeight:window.innerHeight,innerWidth:window.innerWidth}),[d,u]=(0,r.useState)("horizontal"),x=()=>{c(o())};(0,r.useEffect)(()=>(window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)),[x]),(0,r.useEffect)(()=>{n.innerWidth<1444?u("vertical"):u("horizontal")},[n]);let m=(0,r.createRef)();return(0,r.useEffect)(()=>{var e;null===(e=m.current)||void 0===e||e.setFieldsValue(i)},[i,m]),(0,t.jsxs)(l.Form,{layout:d,labelCol:{xs:{span:3},sm:{span:4},xl:{span:3},xxl:{span:1}},wrapperCol:{xs:{span:20},sm:{span:20},xl:{span:20},xxl:{span:24}},name:"basic",initialValues:i,ref:m,onFinish:e=>{console.log("更新的基本信息：",e),l.message.success("基本信息更新成功")},children:[(0,t.jsx)(l.Form.Item,{label:"邮箱",name:"email",children:(0,t.jsx)(l.Input,{prefix:(0,t.jsx)(s.MailOutlined,{})})}),(0,t.jsx)(l.Form.Item,{label:"昵称",name:"name",children:(0,t.jsx)(l.Input,{prefix:(0,t.jsx)(s.UserOutlined,{})})}),(0,t.jsx)(l.Form.Item,{label:"个人简介",name:"bio",children:(0,t.jsx)(l.Input.TextArea,{})}),(0,t.jsx)(l.Form.Item,{label:"国家/地区",name:"country",children:(0,t.jsxs)(l.Select,{children:[(0,t.jsx)(a,{value:"china",children:"中国"}),(0,t.jsx)(a,{value:"usa",children:"美国"}),(0,t.jsx)(a,{value:"uk",children:"英国"})]})}),(0,t.jsx)(l.Form.Item,{label:"所在省市",name:"province",children:(0,t.jsxs)(l.Select,{children:[(0,t.jsx)(a,{value:"hangzhou",children:"杭州"}),(0,t.jsx)(a,{value:"beijing",children:"北京"}),(0,t.jsx)(a,{value:"shanghai",children:"上海"})]})}),(0,t.jsx)(l.Form.Item,{label:"街道地址",name:"address",children:(0,t.jsx)(l.Input,{prefix:(0,t.jsx)(s.EnvironmentOutlined,{})})}),(0,t.jsx)(l.Form.Item,{label:"联系电话",name:"phone",children:(0,t.jsx)(l.Input,{prefix:(0,t.jsx)(s.PhoneOutlined,{})})}),(0,t.jsx)(l.Form.Item,{wrapperCol:{offset:6,span:12},children:(0,t.jsx)(l.Button,{type:"primary",htmlType:"submit",children:"更新基本信息"})})]})}},22403:function(e,i,n){"use strict";n.r(i);var t=n("65159"),s=n("595090"),l=n("571389");n("639367");i.default=()=>{let e=(e,i)=>{i?l.message.success(`${e}已开启`):l.message.warning(`${e}已关闭`)};return(0,t.jsx)(l.List,{dataSource:[{label:"其他用户的消息",description:"其他用户的消息将以站内信的形式通知"},{label:"系统消息",description:"系统消息将以站内信的形式通知"},{label:"待办任务",description:"待办任务将以站内信的形式通知"}],renderItem:i=>(0,t.jsxs)(l.List.Item,{children:[(0,t.jsx)(l.List.Item.Meta,{avatar:(0,t.jsx)(s.MessageOutlined,{}),title:i.label,description:i.description}),(0,t.jsx)(l.Switch,{onChange:n=>e(i.label,n)})]})})}},100735:function(e,i,n){"use strict";n.r(i);var t=n("65159"),s=n("595090"),l=n("571389");i.default=()=>{let e=e=>{console.log("开关状态变化：",e),l.message.success(e?"功能已启用":"功能已关闭")},i=[{label:"自动保存草稿",icon:(0,t.jsx)(s.FileDoneOutlined,{}),switchName:"autoSave"},{label:"接收推送通知",icon:(0,t.jsx)(s.NotificationOutlined,{}),switchName:"pushNotification"}];return(0,t.jsx)(l.List,{itemLayout:"horizontal",dataSource:i,renderItem:i=>(0,t.jsx)(l.List.Item,{actions:[(0,t.jsx)(l.Switch,{onChange:e},i.switchName)],children:(0,t.jsx)(l.List.Item.Meta,{title:i.label,avatar:i.icon})})})}},695049:function(e,i,n){"use strict";n.r(i);var t=n("65159"),s=n("595090"),l=n("571389");i.default=()=>{let e=(e,i)=>{console.log(`${e} switch checked: ${i}`),l.message.success(`${e}设置已更新`)},i=[{label:"个人资料可见性",description:"其他用户可以查看我的个人资料",icon:(0,t.jsx)(s.EyeOutlined,{})},{label:"消息接收权限",description:"允许其他用户向我发送消息",icon:(0,t.jsx)(s.MessageOutlined,{})},{label:"位置信息分享",description:"允许共享我的位置信息",icon:(0,t.jsx)(s.EnvironmentOutlined,{})}];return(0,t.jsx)(l.List,{dataSource:i,renderItem:i=>(0,t.jsxs)(l.List.Item,{children:[(0,t.jsx)(l.List.Item.Meta,{avatar:(0,t.jsx)(s.MessageOutlined,{}),title:i.label,description:i.description}),(0,t.jsx)(l.Switch,{onChange:n=>e(i.label,n)})]})})}},905552:function(e,i,n){"use strict";n.r(i);var t=n("65159"),s=n("595090"),l=n("571389"),r=n("639367");i.default=e=>{let{initialValues:i}=e,n=(0,r.createRef)();return(0,r.useEffect)(()=>{n.current.setFieldsValue({...i})},[n,i]),(0,t.jsxs)(l.Form,{ref:n,name:"Security",initialValues:i,onFinish:e=>{console.log("提交的密保问题和答案：",e),l.message.success("密保问题设置成功")},labelCol:{xs:{span:3},sm:{span:4},xl:{span:3},xxl:{span:1}},wrapperCol:{xs:{span:18},sm:{span:16},xl:{span:18},xxl:{span:24}},children:[(0,t.jsx)(l.Form.Item,{label:"密保问题",name:"securityQuestion",rules:[{required:!0,message:"请输入密保问题"}],children:(0,t.jsx)(l.Input,{placeholder:"请输入您的密保问题",prefix:(0,t.jsx)(s.LockOutlined,{})})}),(0,t.jsx)(l.Form.Item,{label:"密保答案",name:"securityAnswer",rules:[{required:!0,message:"请输入密保答案"}],children:(0,t.jsx)(l.Input,{placeholder:"请输入您的密保答案",prefix:(0,t.jsx)(s.SafetyCertificateOutlined,{})})}),(0,t.jsx)(l.Form.Item,{wrapperCol:{offset:3,span:12},children:(0,t.jsx)(l.Button,{type:"primary",htmlType:"submit",children:"设置密保问题"})}),(0,t.jsx)(l.Form.Item,{wrapperCol:{offset:3,span:12},children:(0,t.jsx)("p",{style:{color:"rgba(0, 0, 0, 0.45)"},children:"提示：设置密保问题可以帮助您更好地保护账户安全，请确保密保问题和答案的准确性和私密性。"})})]})}},576941:function(e,i,n){"use strict";n.r(i);var t=n("65159"),s=n("595090"),l=n("571389"),r=n("289220");i.default=e=>{let{initialValues:i}=e,n=e=>{l.message.info(`开始修改${e}`)},a=e=>{l.message.info(`开始设置${e}`)},c=[{label:"账户密码",description:"当前密码强度：强",actionText:"修改",icon:(0,t.jsx)(s.LockOutlined,{}),onClick:()=>n("账户密码")},{label:"密保手机",description:`已绑定手机：${(0,r.encryptEmailOrPhone)(i.phone)}`,actionText:"修改",icon:(0,t.jsx)(s.MobileOutlined,{}),onClick:()=>n("密保手机")},{label:"密保问题",description:"未设置密保问题，密保问题可有效保护账户安全",actionText:"设置",icon:(0,t.jsx)(s.SafetyOutlined,{}),onClick:()=>a("密保问题")},{label:"备用邮箱",description:`已绑定邮箱：${(0,r.encryptEmailOrPhone)(null==i?void 0:i.email)}`,actionText:"修改",icon:(0,t.jsx)(s.MailOutlined,{}),onClick:()=>n("备用邮箱")},{label:"MFA 设备",description:"未绑定 MFA 设备，绑定后，可以进行二次确认",actionText:"绑定",icon:(0,t.jsx)(s.SafetyOutlined,{}),onClick:()=>a("MFA 设备")}];return(0,t.jsx)(l.List,{dataSource:c,renderItem:e=>(0,t.jsx)(l.List.Item,{actions:[(0,t.jsx)(l.Button,{type:"primary",onClick:e.onClick,icon:e.icon,className:"ml-2",children:e.actionText},e.label)],children:(0,t.jsx)(l.Skeleton,{title:!1,loading:!1,active:!0,children:(0,t.jsx)(l.List.Item.Meta,{title:(0,t.jsx)("a",{href:"https://ant.design",children:e.label}),description:e.description})})},e.label)})}},977881:function(e,i,n){"use strict";n.r(i);var t=n("65159"),s=n("595090"),l=n("571389");i.default=()=>{let e=e=>{l.message.info(`开始绑定${e}`)},i=e=>{l.message.info(`开始解绑${e}`)},n=[{label:"微信",description:"当前未绑定微信账号",bindActionText:"绑定",bindOnClick:()=>e("微信"),unbindActionText:"解绑",unbindOnClick:()=>i("微信"),icon:(0,t.jsx)(s.WechatOutlined,{})},{label:"微博",description:"当前未绑定微博账号",bindActionText:"绑定",bindOnClick:()=>e("微博"),unbindActionText:"解绑",unbindOnClick:()=>i("微博"),icon:(0,t.jsx)(s.WeiboOutlined,{})},{label:"QQ",description:"当前未绑定QQ账号",bindActionText:"绑定",bindOnClick:()=>e("QQ"),unbindActionText:"解绑",unbindOnClick:()=>i("QQ"),icon:(0,t.jsx)(s.QqOutlined,{})}];return(0,t.jsx)(l.List,{dataSource:n,renderItem:e=>(0,t.jsx)(l.List.Item,{actions:[(0,t.jsx)(l.Button,{type:"primary",icon:e.icon,onClick:e.unbindOnClick,children:e.bindActionText},e.label)],children:(0,t.jsx)(l.List.Item.Meta,{title:e.label,description:e.description,avatar:e.icon})})})}},512855:function(e,i,n){"use strict";n.r(i),n.d(i,{AccountBindingForm:function(){return t.default},BasicSettingsForm:function(){return s.default},NotificationSettingsForm:function(){return l.default},OtherSettingsForm:function(){return r.default},PrivacySettingsForm:function(){return a.default},SecurityQuestionsForm:function(){return c.default},SecuritySettingsForm:function(){return o.default},SocialAccountsForm:function(){return d.default}});var t=n("921407"),s=n("383703"),l=n("22403"),r=n("100735"),a=n("695049"),c=n("905552"),o=n("576941"),d=n("977881")},361402:function(e,i,n){"use strict";n.r(i);var t=n("65159"),s=n("595090"),l=n("571389"),r=n("964787"),a=n("639367"),c=n("512855");i.default=function(){let[e,i]=(0,a.useState)({}),[n,o]=(0,a.useState)(!0),[d,u]=(0,a.useState)("left"),x=async()=>{o(!0);try{let e=await (0,r.default)("/api/user/userInfo"),n=await e.data;i(n)}catch(e){l.message.error(`Error fetching data: ${e}`)}finally{o(!1)}};return(0,a.useEffect)(()=>{x();let e=()=>{window.innerWidth<=768?u("top"):u("left")};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,t.jsx)(l.Spin,{spinning:n,children:(0,t.jsx)(l.Tabs,{tabPosition:d,items:[{key:"basic",label:`基本设置`,icon:(0,t.jsx)(s.UserOutlined,{}),children:(0,t.jsx)(c.BasicSettingsForm,{initialValues:e})},{key:"security",label:`安全设置`,icon:(0,t.jsx)(s.LockOutlined,{}),children:(0,t.jsx)(c.SecuritySettingsForm,{initialValues:e})},{key:"account",label:`账号绑定`,icon:(0,t.jsx)(s.GoogleOutlined,{}),children:(0,t.jsx)(c.AccountBindingForm,{})},{key:"notification",label:`新消息通知`,icon:(0,t.jsx)(s.SoundOutlined,{}),children:(0,t.jsx)(c.NotificationSettingsForm,{})},{key:"privacy",label:`隐私设置`,icon:(0,t.jsx)(s.EyeOutlined,{}),children:(0,t.jsx)(c.PrivacySettingsForm,{})},{key:"Security",label:`密保设置`,icon:(0,t.jsx)(s.SafetyCertificateOutlined,{}),children:(0,t.jsx)(c.SecurityQuestionsForm,{initialValues:{securityQuestion:"您的生日是？",securityAnswer:"1990-01-01"}})},{key:"social",label:`社交账号`,icon:(0,t.jsx)(s.AppstoreOutlined,{}),children:(0,t.jsx)(c.SocialAccountsForm,{})},{key:"other",label:`其他设置`,icon:(0,t.jsx)(s.SettingOutlined,{}),children:(0,t.jsx)(c.OtherSettingsForm,{})}]})})}}}]);
//# sourceMappingURL=110.js.map