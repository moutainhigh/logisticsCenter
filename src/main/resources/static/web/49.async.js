(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[49],{"4Ofr":function(e,t,a){e.exports={themeColor:"antd-pro-main-resources-src4js-src-components-setting-drawer-theme-color-themeColor",title:"antd-pro-main-resources-src4js-src-components-setting-drawer-theme-color-title",colorBlock:"antd-pro-main-resources-src4js-src-components-setting-drawer-theme-color-colorBlock"}},"9TQO":function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("5Dmo");var r=n(a("3S7+"));a("Pwec");var l=n(a("CtXQ")),o=n(a("q1tI")),s=n(a("BFsb")),i=function(e){var t=e.value,a=e.onChange,n=e.list;return o.default.createElement("div",{className:s.default.blockChecbox,key:t},n.map(function(e){return o.default.createElement(r.default,{title:e.title,key:e.key},o.default.createElement("div",{className:s.default.item,onClick:function(){return a(e.key)}},o.default.createElement("img",{src:e.url,alt:e.key}),o.default.createElement("div",{className:s.default.selectIcon,style:{display:t===e.key?"block":"none"}},o.default.createElement(l.default,{type:"check"}))))}))},c=i;t.default=c},BFsb:function(e,t,a){e.exports={content:"antd-pro-main-resources-src4js-src-components-setting-drawer-index-content",blockChecbox:"antd-pro-main-resources-src4js-src-components-setting-drawer-index-blockChecbox",item:"antd-pro-main-resources-src4js-src-components-setting-drawer-index-item",selectIcon:"antd-pro-main-resources-src4js-src-components-setting-drawer-index-selectIcon",color_block:"antd-pro-main-resources-src4js-src-components-setting-drawer-index-color_block",title:"antd-pro-main-resources-src4js-src-components-setting-drawer-index-title",handle:"antd-pro-main-resources-src4js-src-components-setting-drawer-index-handle",productionHint:"antd-pro-main-resources-src4js-src-components-setting-drawer-index-productionHint"}},PceP:function(e,t,a){"use strict";var n=a("TqRt"),r=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("bbsP");var l=n(a("/wGt"));a("fOrg");var o=n(a("+KLJ"));a("+L6B");var s=n(a("2/Rp"));a("miYZ");var i=n(a("tsqr"));a("/zsF");var c=n(a("PArb"));a("Pwec");var d=n(a("CtXQ"));a("5Dmo");var u=n(a("3S7+"));a("Mwp2");var f=n(a("VXEj"));a("BoS7");var m=n(a("Sdc0")),p=n(a("lwsE")),g=n(a("W8MJ")),h=n(a("a1gu")),y=n(a("Nsbk")),v=n(a("7W2i")),k=n(a("MVZn"));a("OaEy");var E,b,w,C=n(a("2fM7")),M=r(a("q1tI")),S=a("LLXN"),x=a("P5Jw"),j=a("MuoO"),N=n(a("BGR+")),F=n(a("BFsb")),I=n(a("WJM/")),L=n(a("9TQO")),O=C.default.Option,z=function(e){var t=e.children,a=e.title,n=e.style;return M.default.createElement("div",{style:(0,k.default)({},n,{marginBottom:24})},M.default.createElement("h3",{className:F.default.title},a),t)},B=(E=(0,j.connect)(function(e){var t=e.setting;return{setting:t}}),E((w=function(e){function t(){var e,a;(0,p.default)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return a=(0,h.default)(this,(e=(0,y.default)(t)).call.apply(e,[this].concat(r))),a.state={collapse:!1},a.getLayoutSetting=function(){var e=a.props.setting,t=e.contentWidth,n=e.fixedHeader,r=e.layout,l=e.autoHideHeader,o=e.fixSiderbar;return[{title:(0,S.formatMessage)({id:"app.setting.content-width"}),action:M.default.createElement(C.default,{value:t,size:"small",onSelect:function(e){return a.changeSetting("contentWidth",e)},style:{width:80}},"sidemenu"===r?null:M.default.createElement(O,{value:"Fixed"},(0,S.formatMessage)({id:"app.setting.content-width.fixed"})),M.default.createElement(O,{value:"Fluid"},(0,S.formatMessage)({id:"app.setting.content-width.fluid"})))},{title:(0,S.formatMessage)({id:"app.setting.fixedheader"}),action:M.default.createElement(m.default,{size:"small",checked:!!n,onChange:function(e){return a.changeSetting("fixedHeader",e)}})},{title:(0,S.formatMessage)({id:"app.setting.hideheader"}),disabled:!n,disabledReason:(0,S.formatMessage)({id:"app.setting.hideheader.hint"}),action:M.default.createElement(m.default,{size:"small",checked:!!l,onChange:function(e){return a.changeSetting("autoHideHeader",e)}})},{title:(0,S.formatMessage)({id:"app.setting.fixedsidebar"}),disabled:"topmenu"===r,disabledReason:(0,S.formatMessage)({id:"app.setting.fixedsidebar.hint"}),action:M.default.createElement(m.default,{size:"small",checked:!!o,onChange:function(e){return a.changeSetting("fixSiderbar",e)}})}]},a.changeSetting=function(e,t){var n=a.props.setting,r=(0,k.default)({},n);r[e]=t,"layout"===e?r.contentWidth="topmenu"===t?"Fixed":"Fluid":"fixedHeader"!==e||t||(r.autoHideHeader=!1),a.setState(r,function(){var e=a.props.dispatch;e({type:"setting/changeSetting",payload:a.state})})},a.togglerContent=function(){var e=a.state.collapse;a.setState({collapse:!e})},a.renderLayoutSettingItem=function(e){var t=M.default.cloneElement(e.action,{disabled:e.disabled});return M.default.createElement(u.default,{title:e.disabled?e.disabledReason:"",placement:"left"},M.default.createElement(f.default.Item,{actions:[t]},M.default.createElement("span",{style:{opacity:e.disabled?"0.5":""}},e.title)))},a}return(0,v.default)(t,e),(0,g.default)(t,[{key:"render",value:function(){var e=this,t=this.props.setting,a=t.navTheme,n=t.primaryColor,r=t.layout,u=t.colorWeak,p=this.state.collapse;return M.default.createElement(l.default,{visible:p,width:300,onClose:this.togglerContent,placement:"right",handler:M.default.createElement("div",{className:F.default.handle},M.default.createElement(d.default,{type:p?"close":"setting",style:{color:"#fff",fontSize:20}})),onHandleClick:this.togglerContent,style:{zIndex:999}},M.default.createElement("div",{className:F.default.content},M.default.createElement(z,{title:(0,S.formatMessage)({id:"app.setting.pagestyle"})},M.default.createElement(L.default,{list:[{key:"dark",url:"https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg",title:(0,S.formatMessage)({id:"app.setting.pagestyle.dark"})},{key:"light",url:"https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg",title:(0,S.formatMessage)({id:"app.setting.pagestyle.light"})}],value:a,onChange:function(t){return e.changeSetting("navTheme",t)}})),M.default.createElement(I.default,{title:(0,S.formatMessage)({id:"app.setting.themecolor"}),value:n,onChange:function(t){return e.changeSetting("primaryColor",t)}}),M.default.createElement(c.default,null),M.default.createElement(z,{title:(0,S.formatMessage)({id:"app.setting.navigationmode"})},M.default.createElement(L.default,{list:[{key:"sidemenu",url:"https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg",title:(0,S.formatMessage)({id:"app.setting.sidemenu"})},{key:"topmenu",url:"https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg",title:(0,S.formatMessage)({id:"app.setting.topmenu"})}],value:r,onChange:function(t){return e.changeSetting("layout",t)}})),M.default.createElement(f.default,{split:!1,dataSource:this.getLayoutSetting(),renderItem:this.renderLayoutSettingItem}),M.default.createElement(c.default,null),M.default.createElement(z,{title:(0,S.formatMessage)({id:"app.setting.othersettings"})},M.default.createElement(f.default.Item,{actions:[M.default.createElement(m.default,{size:"small",checked:!!u,onChange:function(t){return e.changeSetting("colorWeak",t)}})]},(0,S.formatMessage)({id:"app.setting.weakmode"}))),M.default.createElement(c.default,null),M.default.createElement(x.CopyToClipboard,{text:JSON.stringify((0,N.default)(t,["colorWeak"]),null,2),onCopy:function(){return i.default.success((0,S.formatMessage)({id:"app.setting.copyinfo"}))}},M.default.createElement(s.default,{block:!0,icon:"copy"},(0,S.formatMessage)({id:"app.setting.copy"}))),M.default.createElement(o.default,{type:"warning",className:F.default.productionHint,message:M.default.createElement("div",null,(0,S.formatMessage)({id:"app.setting.production.hint"})," ",M.default.createElement("a",{href:"https://u.ant.design/pro-v2-default-settings",target:"_blank",rel:"noopener noreferrer"},"src/defaultSettings.js"))})))}}]),t}(M.PureComponent),b=w))||b),H=B;t.default=H},"WJM/":function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("5Dmo");var r=n(a("3S7+")),l=n(a("pVnL"));a("Pwec");var o=n(a("CtXQ")),s=n(a("QILm")),i=n(a("q1tI")),c=a("LLXN"),d=n(a("4Ofr")),u=function(e){var t=e.color,a=e.check,n=(0,s.default)(e,["color","check"]);return i.default.createElement("div",(0,l.default)({},n,{style:{backgroundColor:t}}),a?i.default.createElement(o.default,{type:"check"}):"")},f=function(e){var t=e.colors,a=e.title,n=e.value,l=e.onChange,o=t;return t||(o=[{key:"dust",color:"#F5222D"},{key:"volcano",color:"#FA541C"},{key:"sunset",color:"#FAAD14"},{key:"cyan",color:"#13C2C2"},{key:"green",color:"#52C41A"},{key:"daybreak",color:"#1890FF"},{key:"geekblue",color:"#2F54EB"},{key:"purple",color:"#722ED1"}]),i.default.createElement("div",{className:d.default.themeColor},i.default.createElement("h3",{className:d.default.title},a),i.default.createElement("div",{className:d.default.content},o.map(function(e){var t=e.key,a=e.color;return i.default.createElement(r.default,{key:a,title:(0,c.formatMessage)({id:"app.setting.themecolor.".concat(t)})},i.default.createElement(u,{className:d.default.colorBlock,color:a,check:n===a,onClick:function(){return l&&l(a)}}))})))},m=f;t.default=m}}]);